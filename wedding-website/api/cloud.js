const {put,get,list}=require('@vercel/blob');
const {handleUpload}=require('@vercel/blob/client');
const crypto=require('node:crypto');
const json=(res,status,data)=>{res.setHeader('Cache-Control','no-store');res.status(status).json(data)};
async function read(req){if(req.body)return typeof req.body==='string'?JSON.parse(req.body):req.body;let text='';for await(const chunk of req){text+=chunk;if(text.length>1000000)throw Error('Request too large')}return JSON.parse(text)}
async function load(path){const blob=await get(path,{access:'private',useCache:false});if(!blob)throw Error('Order not found');return JSON.parse(await new Response(blob.stream).text())}
const save=o=>put(`orders/${o.id}.json`,JSON.stringify(o),{access:'private',addRandomSuffix:false,allowOverwrite:true,contentType:'application/json'});
function admin(req,res){const expected=process.env.ADMIN_PASSWORD;const auth=Buffer.from((req.headers.authorization||'').replace(/^Basic /,''),'base64').toString().split(':').slice(1).join(':');if(expected&&auth===expected)return true;res.setHeader('WWW-Authenticate','Basic realm="THIP orders"');res.status(401).end('Please sign in with username admin and your dashboard password.');return false}
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
module.exports=async(req,res)=>{try{
 const url=new URL(req.url,'https://local'),p=url.pathname;
 if(p==='/api/upload'&&req.method==='POST')return json(res,200,await handleUpload({request:req,body:await read(req),onBeforeGenerateToken:async pathname=>{if(!/^uploads\/[a-f0-9-]{36}\/[a-zA-Z0-9._-]+$/.test(pathname))throw Error('Invalid upload');return {allowedContentTypes:['image/jpeg','image/png','image/webp','application/pdf','application/postscript','application/illustrator','application/octet-stream'],maximumSizeInBytes:30*1024*1024,addRandomSuffix:true}},onUploadCompleted:async()=>{}}));
 if(p==='/api/orders'&&req.method==='POST'){
  const data=await read(req),fields=data.fields||{};
  if(!fields.customer||!fields.email||!data.files?.some(f=>f.field==='front'))return json(res,400,{ok:false,error:'Customer details and artwork are required'});
  const id='TWS-'+Date.now()+'-'+crypto.randomBytes(8).toString('hex'),token=crypto.randomBytes(24).toString('hex');
  const files=data.files.filter(f=>['front','back'].includes(f.field)&&String(f.pathname).startsWith('uploads/'));
  if(files.length>2)throw Error('Too many artwork files');
  const o={id,createdAt:new Date().toISOString(),status:'awaiting_payment_review',fields,files,tokenHash:crypto.createHash('sha256').update(token).digest('hex')};await save(o);return json(res,201,{ok:true,orderId:id,orderToken:token});
 }
 const match=p.match(/^\/api\/orders\/(TWS-[\w-]+)\/payment$/);
 if(match&&req.method==='POST'){
  const o=await load(`orders/${match[1]}.json`),hash=crypto.createHash('sha256').update(req.headers['x-order-token']||'').digest('hex');
  if(hash!==o.tokenHash)return json(res,403,{ok:false,error:'Order authorization required'});
  const data=await read(req),slip=data.files?.find(f=>f.field==='slip'&&String(f.pathname).startsWith('uploads/'));if(!slip)throw Error('Payment slip is required');
  o.files=o.files.filter(f=>f.field!=='slip').concat(slip);o.status='payment_submitted';await save(o);return json(res,200,{ok:true});
 }
 if(p==='/admin-orders.html'||p==='/api/admin'||p==='/api/orders'||p==='/api/file'){
  if(!admin(req,res))return;
  if(p==='/api/file'){const path=url.searchParams.get('path');if(!path?.startsWith('uploads/'))return res.status(404).end();const blob=await get(path,{access:'private'});if(!blob)return res.status(404).end();res.setHeader('Content-Type',blob.blob.contentType||'application/octet-stream');res.setHeader('Cache-Control','private,no-store');res.setHeader('X-Content-Type-Options','nosniff');res.end(Buffer.from(await new Response(blob.stream).arrayBuffer()));return}
  const blobs=[];let cursor;do{const page=await list({prefix:'orders/',cursor});blobs.push(...page.blobs);cursor=page.hasMore?page.cursor:undefined}while(cursor);
  const orders=await Promise.all(blobs.map(b=>load(b.pathname)));orders.sort((a,b)=>b.createdAt.localeCompare(a.createdAt));
  if(p==='/api/orders')return json(res,200,orders.map(({tokenHash,...o})=>o));
  res.setHeader('Content-Type','text/html; charset=utf-8');res.setHeader('Cache-Control','private,no-store');return res.end(`<!doctype html><meta name="viewport" content="width=device-width"><title>THIP Orders</title><link rel="stylesheet" href="/site.css"><main style="max-width:1000px;margin:40px auto;padding:20px"><h1>คำสั่งซื้อ / Orders</h1>${orders.map(o=>`<article style="border:1px solid #ddd;padding:24px;margin:24px 0"><h2>${esc(o.id)}</h2><p>${esc(o.status)}</p>${Object.entries(o.fields).filter(([,v])=>v).map(([k,v])=>`<p><b>${esc(k)}</b>: ${esc(v)}</p>`).join('')}<div style="display:flex;gap:20px;flex-wrap:wrap">${o.files.map(f=>{const u='/api/file?path='+encodeURIComponent(f.pathname);return `<div><p>${esc(f.field)}: ${esc(f.filename)}</p><a href="${u}" target="_blank">${/\.(png|jpe?g|webp)$/i.test(f.filename)?`<img style="max-width:250px;max-height:250px" src="${u}">`:'Download file'}</a></div>`}).join('')}</div></article>`).join('')||'<p>No orders yet.</p>'}</main>`);
 }
 return json(res,404,{ok:false,error:'Not found'});
}catch(e){return json(res,400,{ok:false,error:e.message})}};
