import {upload} from '@vercel/blob/client';
const originalFetch=window.fetch.bind(window);
let orderToken='';
window.fetch=async function(url,options={}){
  const pathname=String(url);
  if(options.body instanceof FormData && /^\/api\/orders(?:\/[^/]+\/payment)?$/.test(pathname)){
    const payload={fields:{},files:[]};
    for(const [field,value] of options.body){
      if(value instanceof File && value.size){
        const ext=value.name.split('.').pop().toLowerCase();
        if(!['pdf','ai','jpg','jpeg','png','webp'].includes(ext))throw Error('Please upload PDF, AI, JPG or PNG files.');
        const blob=await upload(`uploads/${crypto.randomUUID()}/${value.name.replace(/[^a-zA-Z0-9._-]/g,'_')}`,value,{access:'private',handleUploadUrl:'/api/upload',multipart:value.size>5000000});
        payload.files.push({field,filename:value.name,pathname:blob.pathname,size:value.size});
      }else if(typeof value==='string')payload.fields[field]=value;
    }
    const response=await originalFetch(url,{...options,body:JSON.stringify(payload),headers:{'Content-Type':'application/json','X-Order-Token':orderToken}});
    const result=await response.clone().json();if(result.orderToken)orderToken=result.orderToken;
    return response;
  }
  return originalFetch(url,options);
};
document.addEventListener('DOMContentLoaded',()=>{
 const form=document.querySelector('#print-order-form');if(!form)return;
 const button=form.querySelector('button[type=submit]'),status=document.querySelector('#print-status'),slip=document.querySelector('#slip');let id='',busy=false;
 const en=()=>localStorage.getItem('thip-language')==='en';
 const sides=document.querySelector('#card-sides'),back=document.querySelector('#back'),product=document.querySelector('#product');
 const sync=()=>{const double=product.value!=='sticker'&&sides.selectedIndex===1;document.querySelector('#back-file-field').hidden=!double;back.disabled=!double;back.required=double;if(!double)back.value=''};
 sides.addEventListener('change',sync);product.addEventListener('change',sync);sync();
 form.addEventListener('submit',async event=>{
  event.preventDefault();event.stopImmediatePropagation();if(busy)return;
  if(!id&&!form.reportValidity())return;
  if(id&&!slip.files.length){status.textContent=en()?'Please attach your payment slip.':'กรุณาแนบสลิปการโอนเงิน';return}
  busy=true;button.disabled=true;status.textContent=en()?'Saving your order and files…':'กำลังบันทึกคำสั่งซื้อและไฟล์…';
  try{
   const data=id?new FormData():new FormData(form);if(id)data.append('slip',slip.files[0]);
   const response=await window.fetch(id?`/api/orders/${id}/payment`:'/api/orders',{method:'POST',body:data});const result=await response.json();if(!response.ok||!result.ok)throw Error(result.error||'Unable to save order');
   if(id){document.querySelector('#success-order-id').textContent='';document.querySelector('#order-success').hidden=false;status.textContent=''}else{
    id=result.orderId;form.querySelectorAll('input,select,textarea').forEach(el=>el.disabled=true);slip.disabled=false;document.querySelector('.print-pay').hidden=false;
    button.innerHTML=en()?'Confirm order':'ยืนยันการสั่งซื้อ';status.textContent=en()?'Please pay the displayed total.':'กรุณาชำระเงินตามยอดที่แสดง';
   }
  }catch(error){status.textContent=error.message}finally{busy=false;button.disabled=false}
 },true);
 button.addEventListener('click',event=>{event.preventDefault();event.stopImmediatePropagation();form.requestSubmit(button)},true);
});
