const assert=require('node:assert/strict');
const {upload}=require('@vercel/blob/client');const {del}=require('@vercel/blob');
const base=process.env.TEST_BASE||'https://website-backup-rho.vercel.app';
const paths=[];let orderId;
(async()=>{try{
 const image=Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jf1sAAAAASUVORK5CYII=','base64');
 const blob=await upload(`uploads/${crypto.randomUUID()}/smoke-test.png`,new File([image],'smoke-test.png',{type:'image/png'}),{access:'private',handleUploadUrl:base+'/api/upload'});paths.push(blob.pathname);console.log('Private artwork upload: PASS');
 let r=await fetch(base+'/api/orders',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({fields:{customer:'AUTOMATED TEST - REMOVE',email:'test@example.invalid',product:'wedding'},files:[{field:'front',pathname:blob.pathname,filename:'smoke-test.png',size:image.length}]})});let o=await r.json();assert.equal(r.status,201,JSON.stringify(o));orderId=o.orderId;paths.push('orders/'+orderId+'.json');console.log('Order creation: PASS');
 r=await fetch(base+`/api/orders/${orderId}/payment`,{method:'POST',headers:{'Content-Type':'application/json','X-Order-Token':o.orderToken},body:JSON.stringify({files:[{field:'slip',pathname:blob.pathname,filename:'smoke-test.png',size:image.length}]})});assert.equal(r.status,200,await r.text());console.log('Payment slip save: PASS');
 r=await fetch(base+'/api/orders');assert.equal(r.status,401);console.log('Dashboard access protection: PASS');
 const auth='Basic '+Buffer.from('admin:'+process.env.ADMIN_PASSWORD).toString('base64');r=await fetch(base+'/api/orders',{headers:{Authorization:auth}});assert.equal(r.status,200);const orders=await r.json();const saved=orders.find(x=>x.id===orderId);assert.equal(saved.status,'payment_submitted');assert.equal(saved.files.length,2);console.log('Authenticated order and slip listing: PASS');
 r=await fetch(base+'/api/file?path='+encodeURIComponent(blob.pathname),{headers:{Authorization:auth}});assert.equal(r.status,200);assert.equal((await r.arrayBuffer()).byteLength,image.length);console.log('Protected file download: PASS');
}finally{if(paths.length){await del(paths);console.log('Synthetic test order and files removed')}}})().catch(e=>{console.error(e.message);process.exitCode=1});
