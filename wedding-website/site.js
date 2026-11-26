const universalHeader=document.querySelector('.site-header');
if(universalHeader){const path=location.pathname;const cards=[['MINIMAL & SIMPLE','#minimal-card'],['FORMAL','#classic-card'],['TYPOGRAPHY','#bold-card'],['NATURE & FLORAL','#floral-card'],['WATERCOLOR ILLUSTRATION','#painterly-card'],['CHARACTER ILLUSTRATION','#illustrative-card'],['PHOTOGRAPHY','#photo-card']];const cardLinks=cards.map(([label,hash])=>`<a href="/cards.html${hash}">${label}</a>`).join('');universalHeader.innerHTML=`<div class="nav"><a class="brand" href="/"><img src="/assets/thip-logo.png" alt="THIP Wedding Studio"></a><nav class="nav-links"><a class="${path==='/'?'active':''}" href="/">เริ่มสร้างการ์ด</a><span class="nav-dd"><a class="${path.includes('logos')?'active':''}" href="/logos.html">โลโก้งานแต่ง</a><span class="dd-panel"><a href="/logos.html#monogram">MONOGRAM LOGO STYLES</a><a href="/logos.html#fullname">FULL NAME LOGO STYLES</a></span></span><span class="nav-dd"><a class="${path.includes('cards')?'active':''}" href="/cards.html">การ์ดแต่งงาน</a><span class="dd-panel">${cardLinks}</span></span><a class="${path.includes('ecard')?'active':''}" href="/ecard.html">E-CARD WEDDING</a><span class="contact-hover"><a class="${path.includes('contact')?'active':''}" href="/contact.html">ติดต่อเรา</a><span class="contact-pop">เบอร์โทร : 083-629-1931<br>Line OA : @411niqdo<br>E-mail : thipweddingstudio@gmail.com</span></span></nav><button class="language-switch" type="button"><span class="lang-th">TH</span><i>/</i><span class="lang-en">EN</span></button></div>`}
const header=document.querySelector('.site-header');const toggle=document.querySelector('.menu-toggle');if(toggle)toggle.addEventListener('click',()=>header.classList.toggle('open'));document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>header.classList.remove('open')));
const translations={
  'เริ่มสร้างการ์ด':'Start a Card','โลโก้งานแต่ง':'Wedding Logos','การ์ดแต่งงาน':'Wedding Cards','E-CARD WEDDING':'E-CARD WEDDING','ติดต่อเรา':'Contact',
  'ทำไมต้อง THIP Wedding Studio':'Why THIP Wedding Studio','สินค้าและบริการ':'Products & Services','ออกแบบโลโก้':'Logo Design','ออกแบบการ์ดงานแต่ง':'Wedding Card Design','E-Cards':'E-Cards','โซเชียล':'Social media','Facebook':'Facebook','Instagram':'Instagram','Tiktok':'TikTok',
  'พร้อมเริ่มต้นหรือยัง':'Ready to Begin?','เริ่มต้นออกแบบกับเรา':'Start Your Project','แชร์ไอเดียสำหรับวันสำคัญ':'Ideas for Your Special Day','ขั้นตอนการสั่งงาน':'How to Order','เกี่ยวกับเรา':'About Us','นโยบายการคืนสินค้า':'Return Policy','เริ่มออกแบบ':'Start Designing','เริ่มออกแบบโลโก้':'Start Logo Design','เริ่มออกแบบการ์ดแต่งงาน':'Start Wedding Card Design','เริ่มออกแบบ E-card':'Start E-card Design','ออกแบบเรื่องราวของคุณ':'Design Your Story','ดูแลตั้งแต่ไอเดียจนถึงชิ้นงาน':'From Idea to Finished Piece','ใส่ใจทุกรายละเอียด':'Every Detail Matters','เลือกสไตล์ที่ชอบ':'Choose Your Style','คุยรายละเอียดงาน':'Discuss Your Project','ตรวจแบบและผลิต':'Review & Produce','แชร์ไอเดียสำหรับวันสำคัญ':'Ideas for Your Special Day','ไอเดียการออกแบบการ์ด':'Wedding Card Ideas','10 สิ่งที่ต้องเตรียมตัวก่อนแต่งงาน':'10 Things to Prepare Before Your Wedding','10 ของชำร่วยยอดฮิต':'10 Popular Wedding Favors','โลโก้ตัวอักษรสำหรับคู่รัก ดีไซน์ให้จำง่ายและใช้ได้หลายรูปแบบ':'Memorable monogram logos designed for your celebration','โลโก้ชื่อเต็มที่ช่วยเล่าเรื่องราวของคู่รัก':'Full-name logos that tell your love story','รวมสไตล์โลโก้งานแต่งสำหรับใช้บนการ์ด ป้าย ของชำร่วย และรายละเอียดในวันสำคัญ':'Wedding logo styles for cards, signs, favors, and every special detail','การ์ดแต่งงานออนไลน์ที่ช่วยส่งต่อความพิเศษ':'An online wedding card made to share your special moments','ส่งต่อความพิเศษ ด้วยการ์ดเชิญรูปแบบใหม่':'Share your special moments with a new kind of invitation','กรอกแบบฟอร์มเพื่อส่งรายละเอียดงานให้เรา':'Fill out the form to tell us about your project','เบอร์โทร : 083-629-1931':'Phone: 083-629-1931','Line OA : @411niqdo':'LINE OA: @411niqdo','E-mail : thipweddingstudio@gmail.com':'Email: thipweddingstudio@gmail.com',
  'THIP WEDDING STUDIO รับออกแบบโลโก้ การ์ดแต่งงาน และ E-CARD ในสไตล์เฉพาะของคู่บ่าวสาว ใส่ใจทุกรายละเอียด เพื่อให้งานแต่งของคุณมีเอกลักษณ์และน่าจดจำ':'THIP WEDDING STUDIO creates custom logos, wedding cards, and E-CARDS for your special celebration. Every detail is thoughtfully designed to make your wedding unique and memorable.',
  'สร้างความทรงจำสุดแสนพิเศษของคุณได้ที่นี่':'Create your most special memories here','เราใส่ใจตั้งแต่การฟังเรื่องราวของคุณ การเลือกสไตล์ ไปจนถึงรายละเอียดเล็ก ๆ ของชิ้นงาน เพื่อให้ผลงานที่ออกแบบสะท้อนตัวตนและบรรยากาศของวันสำคัญได้อย่างพอดี':'We listen to your story, style, and every small detail to create work that reflects your personality and the atmosphere of your special day.','เราเริ่มจากการฟังเรื่องราว ความชอบ และบรรยากาศที่คุณอยากให้เกิดขึ้น ก่อนค่อย ๆ แปลงเป็นรายละเอียดที่จับต้องได้':'We begin with your story, preferences, and desired atmosphere, then carefully turn them into meaningful details.','ทุกขั้นตอนถูกจัดวางอย่างเป็นระบบ เพื่อให้คุณเห็นภาพและตัดสินใจได้อย่างสบายใจ':'Every step is thoughtfully arranged so you can see the vision clearly and decide with confidence.','ไม่ว่าจะเป็นโลโก้ การ์ด หรือ E-card เราออกแบบให้ทุกจุดทำงานร่วมกันอย่างกลมกลืน':'From logos and cards to E-cards, we design every element to work together beautifully.','ส่งภาพอ้างอิง โทนสี หรือไอเดียที่คุณชอบ เพื่อให้เราเข้าใจบรรยากาศของงาน':'Share references, color palettes, or ideas you love so we can understand your vision.','ระบุประเภทงาน จำนวน และรายละเอียดที่อยากให้มี เราจะช่วยจัดแนวทางให้เหมาะกับงาน':'Tell us the project type, quantity, and details you need. We will help shape the right direction.','ตรวจแบบก่อนผลิตจริง แล้วเริ่มสร้างผลงานที่พร้อมส่งต่อความรู้สึกดี ๆ ให้แขกของคุณ':'Review the design before production, then we create a finished piece ready to share with your guests.','สร้างโลโก้คู่รักที่ใช้ได้กับทุกองค์ประกอบของงาน':'Create a couple logo that works across every part of your celebration.','เลือกสไตล์และรายละเอียดของการ์ดที่เป็นตัวคุณ':'Choose a card style and details that feel like you.','เล่าเรื่องราวของคุณในรูปแบบการ์ดออนไลน์':'Tell your story through an online wedding card.','เริ่มจากโทนสี กระดาษ และรูปแบบที่ชอบ':'Start with the colors, paper, and style you love.','วางแผนรายละเอียดให้พร้อมก่อนเริ่มสั่งงาน':'Plan every detail before placing your order.','เลือกของแทนใจที่เข้ากับเรื่องราวของคู่รัก':'Choose a meaningful favor that fits your story.','รวมสไตล์โลโก้งานแต่งสำหรับใช้บนการ์ด ป้าย ของชำร่วย และรายละเอียดในวันสำคัญ':'A collection of wedding logo styles for cards, signs, favors, and every special detail.','โลโก้ชื่อเต็มที่ช่วยเล่าเรื่องราวของคู่รักอย่างชัดเจน':'Full-name logos that clearly tell each couple’s story.','พร้อมเริ่มออกแบบของคุณแล้วหรือยัง':'Ready to design yours?','ตัวอย่างการ์ดแต่งงานที่ออกแบบให้เข้ากับเรื่องราว โทนสี และบรรยากาศของงาน':'Wedding card examples designed around your story, colors, and atmosphere.','เรียบ สะอาด และให้รายละเอียดสำคัญเป็นจุดเด่น':'Simple, clean, and focused on the details that matter.','เริ่มออกแบบการ์ดแต่งงานของคุณ':'Start Designing Your Wedding Card','กรอกแบบฟอร์ม':'Fill Out the Form','เตรียมรายละเอียดเบื้องต้นสำหรับให้ทีมงานติดต่อกลับ':'Prepare your basic details so our team can get back to you.','ชื่อ':'Name','ช่องทางติดต่อ':'Contact information','ประเภทงานที่สนใจ':'Project type','อื่น ๆ':'Other','รายละเอียดงาน':'Project details','แนบภาพอ้างอิง':'Attach reference images','ส่งรายละเอียด':'Submit details','แบบฟอร์มนี้เตรียมไว้สำหรับเชื่อมระบบรับข้อมูลภายหลัง':'This form is ready to be connected to a submission system.','ข้อมูลช่องทางติดต่อที่ยืนยันแล้วจะแสดงที่หน้านี้':'Confirmed contact information will be shown here.','เบอร์โทร':'Phone','ไลน์ออฟฟิเชียล ID':'LINE Official ID','ส่งต่อความพิเศษ ด้วยการ์ดเชิญรูปแบบใหม่':'Share something special with a new kind of invitation','ไม่ว่าจะเป็นกำหนดการ สถานที่ หรือจะอัปโหลดรูปภาพ':'Add schedules, locations, or upload photos','แบ่งปันเรื่องราวความรักของคุณก็สามารถทำได้':'and share your love story with everyone.','แนะนำตัวบ่าว-สาว':'Bride & Groom introduction','บันทึกกิจกรรมวันงานลง Calendar':'Save your wedding events to a calendar','นับถอยหลังวันสำคัญ':'Countdown to your special day','แสดงรายละเอียดกำหนดการ':'Show your complete schedule','อัลบั้มรูปแต่งงาน':'Wedding photo gallery','ตอบรับคำเชิญออนไลน์':'Online RSVP','นำทางด้วย Google Map':'Google Maps directions','พรีเซนเทชั่นผ่าน Youtube':'Wedding presentation via YouTube','สมุดอวยพรดิจิตอล':'Digital guestbook','เริ่มออกแบบ E-CARD ของคุณ':'Start Designing Your E-CARD','นโยบายการคืนสินค้าและคืนเงิน':'Return and Refund Policy','ข้อกำหนดทั่วไป':'General Terms','การยืนยันคำสั่งซื้อ':'Order Confirmation','เงื่อนไขการคืนสินค้าและคืนเงิน':'Return and Refund Conditions','ขั้นตอนการแจ้งปัญหาและขอคืนสินค้า':'How to Report a Problem and Request a Return','ข้อควรทราบ':'Important Notes','ข้อสงวนสิทธิ์':'Reservations'
};
const originalText=new Map();document.querySelectorAll('body *').forEach(el=>{if(el.children.length===0&&el.textContent.trim())originalText.set(el,el.textContent.trim())});
const buttonText=new Map();document.querySelectorAll('.button').forEach(button=>{const text=[...button.childNodes].filter(node=>node.nodeType===Node.TEXT_NODE).map(node=>node.textContent).join('').trim();if(text)buttonText.set(button,text)});
document.querySelectorAll('.language-switch').forEach((button,index)=>{if(index>0)button.remove()});const languageButton=document.querySelector('.nav .language-switch');if(location.pathname.endsWith('/contact.html')){const info=document.querySelector('.contact-info');if(info)info.innerHTML='<div><b>เบอร์โทร</b><p>083-629-1931</p></div><div><b>Line OA</b><p>@411niqdo</p></div><div><b>E-mail</b><p>thipweddingstudio@gmail.com</p></div><img class="contact-qr" src="/assets/line-qr.png" alt="LINE QR Code">'}if(location.pathname.endsWith('/logos.html')){const cta=document.querySelector('.gallery-cta h2');if(cta)cta.textContent='เริ่มออกแบบโลโก้แต่งงานของคุณ'}
function setLanguage(language){document.documentElement.lang=language==='en'?'en':'th';document.body.classList.toggle('english-mode',language==='en');originalText.forEach((text,el)=>{el.textContent=language==='en'?(translations[text]||text):text});buttonText.forEach((text,button)=>{const textNode=[...button.childNodes].find(node=>node.nodeType===Node.TEXT_NODE);if(textNode)textNode.textContent=' '+(language==='en'?(translations[text]||text):text)+' '});languageButton.classList.toggle('is-en',language==='en');languageButton.classList.toggle('is-th',language!=='en');localStorage.setItem('thip-language',language)}
languageButton.addEventListener('click',()=>{const next=(localStorage.getItem('thip-language')||'th')==='th'?'en':'th';localStorage.setItem('thip-language',next);location.reload()});setLanguage(localStorage.getItem('thip-language')||'th');

document.querySelectorAll('p').forEach(p=>{p.textContent=p.textContent.replace('ได้อย่างพอดี','ได้อย่างลงตัว').replace('ถูกจัดวางอย่างเป็นระบบ','ถูกจัดวางอย่างปราณีต')});
const generalFormUrl='https://docs.google.com/forms/d/e/1FAIpQLSfxhOAQZ3Fl-494HeSlXduPjwdt_y54Fc0s_ot2BkRgLFFIqQ/viewform?usp=header';
const logoFormUrl='https://docs.google.com/forms/d/e/1FAIpQLSdT7MLTPU-lm_InJqtAnbz1k_8OO7Bab6c25POc_utYxIhzWg/viewform?usp=header';
const cardFormUrl='https://docs.google.com/forms/d/e/1FAIpQLScLFY1vCYkRO9PNWKugismUWIZHY61lgM0j0Oo5fYrDrL5L8g/viewform?usp=header';
const ecardFormUrl='https://docs.google.com/forms/d/1-DA3wffxlXKXv4sJTmRrTNOJdPIj7K7shsy8iwNV4_8/edit';
document.querySelectorAll('.order-card').forEach(card=>{if(card.querySelector('h3')?.textContent.includes('โลโก้')){const button=card.querySelector('.button');if(button){button.href=logoFormUrl;button.target='_blank';button.rel='noopener'}}});
document.querySelectorAll('.order-card').forEach(card=>{if(card.querySelector('h3')?.textContent.includes('การ์ดแต่งงาน')){const button=card.querySelector('.button');if(button){button.href=cardFormUrl;button.target='_blank';button.rel='noopener'}}});
document.querySelectorAll('.order-card').forEach(card=>{if(card.querySelector('h3')?.textContent.includes('E-card')){const button=card.querySelector('.button');if(button){button.href=ecardFormUrl;button.target='_blank';button.rel='noopener'}}});
const logoPageButton=document.querySelector('.gallery-cta .button');
if(logoPageButton){const ctaUrl=location.pathname.endsWith('/cards.html')?cardFormUrl:location.pathname.endsWith('/ecard.html')?ecardFormUrl:logoFormUrl;logoPageButton.href=ctaUrl;logoPageButton.target='_blank';logoPageButton.rel='noopener'}
const generalCtaButton=document.querySelector('.cta-band .button');
if(generalCtaButton){generalCtaButton.href=generalFormUrl;generalCtaButton.target='_blank';generalCtaButton.rel='noopener'}
if(location.pathname.endsWith('/contact.html')){const contactFormButton=document.querySelector('.contact-page .button');if(contactFormButton){contactFormButton.href=generalFormUrl;contactFormButton.target='_blank';contactFormButton.rel='noopener'}}
const ideaLinks={
  '10 ไอเดียการออกแบบการ์ด':'https://web.facebook.com/share/p/1SNY8ws3xk/',
  '10 สิ่งที่ต้องเตรียมตัวก่อนแต่งงาน':'https://www.facebook.com/share/p/1DfwtLBSpo/',
  '10 ของชำร่วยยอดฮิต':'https://www.facebook.com/share/p/1FDaWejiQG/'
};
if(location.pathname==='/'||location.pathname.endsWith('/index.html')){const idea=document.querySelector('.idea-card');if(idea){const image=idea.querySelector('img');const title=idea.querySelector('h3');if(image){image.src='/assets/idea-new.png';image.alt='10 ไอเดียการออกแบบการ์ด'}if(title)title.textContent='10 ไอเดียการออกแบบการ์ด'}}
document.querySelectorAll('.idea-card img').forEach(image=>{const link=ideaLinks[image.alt];if(link){image.style.cursor='pointer';image.addEventListener('click',()=>window.open(link,'_blank','noopener'))}});
if(location.pathname.endsWith('/logos.html')){const logoSets=[['#monogram',['logo-m01.png','logo-mf01.png','logo-ms01.png','logo-hw01.png','logo-v01.png','logo-vf01.png'],['M 01','MF01','MS01','HW01','V01','VF01']],['#fullname',['logo-mo01.png','logo-ms02.png','logo-ve01.png','logo-hw02.png'],['MO01','MS01','VE 01','HW01']]];logoSets.forEach(([section,images,codes])=>{document.querySelectorAll(section+' .work-card').forEach((card,index)=>{if(images[index]){const image=card.querySelector('img');if(image)image.src='/assets/'+images[index];const code=card.querySelector('small');if(code)code.textContent=codes[index];if(section==='#fullname'&&index===1)card.id='fullname-mixed';if(section==='#fullname'&&index===3)card.id='fullname-hand'}})});document.querySelectorAll('.work-card small').forEach(el=>el.remove());const side=document.querySelector('.side-nav');const fullLink=side?.querySelector('a[href="#fullname"]');const verticalLink=side?.querySelector('a[href="#vertical"]');if(side&&fullLink){if(!side.querySelector('a[href="#fullname-mixed"]')){const a=document.createElement('a');a.href='#fullname-mixed';a.textContent='MIXED STYLE';fullLink.insertAdjacentElement('afterend',a)}if(!side.querySelector('a[href="#fullname-hand"]')){const a=document.createElement('a');a.href='#fullname-hand';a.textContent='HAND-WRITING';(verticalLink||fullLink).insertAdjacentElement('afterend',a)}}}
document.querySelectorAll('.step').forEach((step,index)=>{step.classList.add('step-icon-'+(index+1));const icon=document.createElement('span');icon.className='feature-icon';icon.textContent=['✦','♡','✓'][index];step.prepend(icon)});
document.querySelectorAll('.order-card').forEach(card=>{const title=card.querySelector('h3')?.textContent||'';const icon=document.createElement('span');icon.className='feature-icon '+(title.includes('โลโก้')?'order-icon-logo':title.includes('การ์ดแต่งงาน')?'order-icon-card':'order-icon-ecard');icon.setAttribute('aria-hidden','true');card.prepend(icon)});
document.querySelectorAll('a').forEach(link=>{
  const label=link.textContent.trim();
  if(label==='ทำไมต้อง THIP Wedding Studio'){link.href='/#why'}
  if(label==='นโยบายการคืนสินค้า'){link.href='/policy.html'}
  if(label==='ออกแบบโลโก้'){link.href='/logos.html'}
  if(label==='ออกแบบการ์ดงานแต่ง'){link.href='/cards.html'}
  if(label==='E-Cards'){link.href='/ecard.html'}
});
document.querySelectorAll('.footer').forEach(footer=>{
  const isEnglish=localStorage.getItem('thip-language')==='en';
  const socialHeading=[...footer.querySelectorAll('h3')].find(el=>['โซเชียล','Social media'].includes(el.textContent.trim()));
  if(socialHeading){socialHeading.textContent=isEnglish?'Social media':'โซเชียล';const social=socialHeading.parentElement;const links=[['FB',isEnglish?'Facebook':'Facebook','https://www.facebook.com/profile.php?id=61588098931286'],['IG',isEnglish?'Instagram':'Instagram','https://www.instagram.com/thip.wedding/'],['TT',isEnglish?'Tiktok':'Tiktok','https://www.tiktok.com/@thip.wedding']];links.forEach(([oldLabel,newLabel,url])=>{const link=[...social.querySelectorAll('a')].find(a=>[oldLabel,newLabel].includes(a.textContent.trim()));if(link){link.textContent=newLabel;link.href=url;link.target='_blank';link.rel='noopener'}})}
  const contactHeading=[...footer.querySelectorAll('h3')].find(el=>['ติดต่อเรา','Contact'].includes(el.textContent.trim()));
  if(contactHeading){const contact=contactHeading.parentElement;contact.innerHTML=isEnglish?'<h3>Contact</h3><span>Phone: 083-629-1931</span><span>LINE OA: @411niqdo</span><span>Email: thipweddingstudio@gmail.com</span><img class="footer-qr" src="/assets/line-qr.png" alt="LINE Official QR Code">':'<h3>ติดต่อเรา</h3><span>เบอร์โทร : 083-629-1931</span><span>Line OA : @411niqdo</span><span>E-mail : thipweddingstudio@gmail.com</span><img class="footer-qr" src="/assets/line-qr.png" alt="LINE Official QR Code">'}
  const brand=footer.querySelector('.footer-brand');if(brand&&!brand.querySelector('.footer-description')){const desc=document.createElement('p');desc.className='footer-description';desc.textContent='THIP WEDDING STUDIO รับออกแบบโลโก้ การ์ดแต่งงาน และ E-CARD ในสไตล์เฉพาะของคู่บ่าวสาว ใส่ใจทุกรายละเอียด เพื่อให้งานแต่งของคุณมีเอกลักษณ์และน่าจดจำ';brand.appendChild(desc)}
});
document.querySelectorAll('body *').forEach(el=>{if(el.children.length===0&&el.textContent.trim()&&!originalText.has(el))originalText.set(el,el.textContent.trim())});
if(localStorage.getItem('thip-language')==='en'){document.querySelectorAll('body *').forEach(el=>{if(el.children.length===0){const translated=translations[el.textContent.trim()];if(translated)el.textContent=translated}})}
document.addEventListener('click',event=>{const button=event.target.closest('.order-card .button,.gallery-cta .button');if(!button)return;const card=button.closest('.order-card');const heading=card?.querySelector('h3')?.textContent||'';const url=button.closest('.gallery-cta')||heading.includes('โลโก้')?logoFormUrl:heading.includes('การ์ดแต่งงาน')?cardFormUrl:heading.includes('E-card')?ecardFormUrl:null;if(url){event.preventDefault();window.open(url,'_blank','noopener')}});
const revealRows=document.querySelectorAll('.why-row');
if(revealRows.length){
  const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}}),{threshold:.18,rootMargin:'0px 0px -8% 0px'});
  revealRows.forEach(row=>revealObserver.observe(row));
}
if(location.pathname==='/'||location.pathname.endsWith('/index.html')){const cta=document.querySelector('.cta-band h2');if(cta)cta.textContent='พร้อมเริ่มต้นออกแบบความทรงจำที่ดีของคุณที่นี่'}
if(location.pathname.includes('logos.html')){document.querySelectorAll('.gallery-cta h2').forEach(el=>{el.textContent='เริ่มออกแบบโลโก้แต่งงานของคุณ'})}
if(location.pathname.endsWith('/cards.html')){
  const cardLabels=[['Minimal & Simple','Minimal & Simple','#minimal-card'],['Formal','Formal','#classic-card'],['Typography','Typography','#bold-card'],['Nature & Floral','Nature & Floral','#floral-card'],['Watercolor Illustration','Watercolor Illustration','#painterly-card'],['Character Illustration','Character Illustration','#illustrative-card'],['Photography','Photography','#photo-card']];
  const logoLink=document.querySelector('.nav-links>a[href="/logos.html"]');
  if(logoLink&&!logoLink.parentElement.classList.contains('nav-dd')){
    const logoDrop=document.createElement('span');logoDrop.className='nav-dd';logoLink.replaceWith(logoDrop);logoDrop.appendChild(logoLink);
    const panel=document.createElement('span');panel.className='dd-panel';panel.innerHTML='<a href="/logos.html#monogram">MONOGRAM LOGO STYLES</a><a href="/logos.html#fullname">FULL NAME LOGO STYLES</a>';logoDrop.appendChild(panel);
  }
  const logoMenu=document.querySelector('.nav-links .nav-dd:has(>a[href="/logos.html"]) .dd-panel');
  if(logoMenu)logoMenu.innerHTML='<a href="/logos.html#monogram">MONOGRAM LOGO STYLES</a><a href="/logos.html#fullname">FULL NAME LOGO STYLES</a>';
  const cardMenu=document.querySelector('.nav-links .nav-dd:has(>a[href="/cards.html"]) .dd-panel');
  if(cardMenu)cardMenu.innerHTML='<a href="/cards.html#minimal-card">MINIMAL &amp; SIMPLE</a><a href="/cards.html#classic-card">FORMAL</a><a href="/cards.html#bold-card">TYPOGRAPHY</a><a href="/cards.html#floral-card">NATURE &amp; FLORAL</a><a href="/cards.html#painterly-card">WATERCOLOR ILLUSTRATION</a><a href="/cards.html#illustrative-card">CHARACTER ILLUSTRATION</a><a href="/cards.html#photo-card">PHOTOGRAPHY</a>';
  document.querySelectorAll('.nav-links .nav-dd').forEach(drop=>{const main=drop.querySelector(':scope>a');const panel=drop.querySelector('.dd-panel');if(!main||!panel)return;if(main.getAttribute('href')==='/logos.html')panel.innerHTML='<a href="/logos.html#monogram">MONOGRAM LOGO STYLES</a><a href="/logos.html#fullname">FULL NAME LOGO STYLES</a>';if(main.getAttribute('href')==='/cards.html')panel.innerHTML='<a href="/cards.html#minimal-card">MINIMAL &amp; SIMPLE</a><a href="/cards.html#classic-card">FORMAL</a><a href="/cards.html#bold-card">TYPOGRAPHY</a><a href="/cards.html#floral-card">NATURE &amp; FLORAL</a><a href="/cards.html#painterly-card">WATERCOLOR ILLUSTRATION</a><a href="/cards.html#illustrative-card">CHARACTER ILLUSTRATION</a><a href="/cards.html#photo-card">PHOTOGRAPHY</a>'});
  const sidebar=document.querySelector('.side-nav');
  if(sidebar){sidebar.querySelectorAll('a').forEach((a,index)=>{if(cardLabels[index]){a.textContent=cardLabels[index][0].toUpperCase();a.href='/cards.html'+cardLabels[index][2]}})}
  const dropdown=document.querySelector('.nav-dd:has(>a[href="/cards.html"]) .dd-panel');
  if(dropdown){
    dropdown.innerHTML=cardLabels.map(([th,en,href])=>`<a href="/cards.html${href}">${th.toUpperCase()}</a>`).join('');
  }
  document.querySelectorAll('.category .gallery').forEach(gallery=>gallery.querySelectorAll('.work-card:not(:first-child)').forEach(card=>card.remove()));
  const categoryOrder=['minimal-card','classic-card','bold-card','floral-card','painterly-card','illustrative-card','photo-card'];
  const categories=categoryOrder.map(id=>document.getElementById(id)).filter(Boolean);
  const firstGallery=categories[0]?.querySelector('.gallery');
  if(firstGallery&&categories.length){
    categories.forEach((section,index)=>{
      const card=section.querySelector('.work-card');
      if(!card)return;
      card.id=section.id;
      if(index===0){section.querySelector('h2')?.remove();section.querySelector('.category-intro')?.remove();}
      else{firstGallery.appendChild(card);section.remove();}
    });
    firstGallery.querySelectorAll('.work-card figcaption').forEach((caption,index)=>{if(cardLabels[index])caption.textContent=cardLabels[index][0].toUpperCase()});
    const invitationPairs=[['minimal-card','invitation-minimal'],['classic-card','invitation-formal'],['bold-card','invitation-typography'],['floral-card','invitation-nature-floral'],['painterly-card','invitation-watercolor',true],['illustrative-card','invitation-character',true],['photo-card','invitation-photography']];
    invitationPairs.forEach(([categoryId,assetName,reverseSides=false])=>{
    const preview=firstGallery.querySelector('.work-card[id="'+categoryId+'"]');
    const oldImage=preview?.querySelector('img');
    if(oldImage){
      const english=localStorage.getItem('thip-language')==='en';
      const button=document.createElement('button');
      button.type='button';button.className='invitation-preview';
      button.setAttribute('aria-pressed','false');
      const front=document.createElement('img');front.src='/assets/'+assetName+(reverseSides?'-back.png':'-front.png');front.alt=english?'Wedding invitation — front':'การ์ดแต่งงานด้านหน้า';front.className='invitation-front';
      const back=document.createElement('img');back.src='/assets/'+assetName+(reverseSides?'-front.png':'-back.png');back.alt=english?'Wedding invitation — back':'การ์ดแต่งงานด้านหลัง';back.className='invitation-back';back.setAttribute('aria-hidden','true');
      button.append(front,back);oldImage.replaceWith(button);
      let pointerType='';
      const showBack=visible=>{button.classList.toggle('show-back',visible);button.setAttribute('aria-pressed',String(visible));front.setAttribute('aria-hidden',String(visible));back.setAttribute('aria-hidden',String(!visible));button.setAttribute('aria-label',english?(visible?'Show front of invitation':'Show back of invitation'):(visible?'ดูการ์ดด้านหน้า':'ดูการ์ดด้านหลัง'))};
      showBack(false);
      button.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse')showBack(true)});
      button.addEventListener('pointerleave',event=>{if(event.pointerType==='mouse')showBack(false)});
      button.addEventListener('pointerdown',event=>{pointerType=event.pointerType});
      button.addEventListener('click',event=>{if(pointerType==='mouse'&&event.detail>0)return;showBack(!button.classList.contains('show-back'))});
      button.addEventListener('keydown',event=>{if(event.key==='Escape')showBack(false)});
    }
    });
  }
}
document.querySelectorAll('.idea-card h3').forEach((heading) => {
  if (heading.textContent.trim() === '10 ไอเดียการออกแบบการ์ด') heading.textContent = 'ไอเดียการออกแบบการ์ด';
  if (heading.textContent.trim() === '10 สิ่งที่ต้องเตรียมตัวก่อนแต่งงาน') heading.textContent = 'สิ่งที่ต้องเตรียมตัวก่อนแต่งงาน';
});
if(location.pathname==='/'||location.pathname.endsWith('/index.html')){
  const ideaCards=document.querySelectorAll('.idea-card');
  const prepareCard=ideaCards[1];
  const favorCard=ideaCards[2];
  if(prepareCard){const image=prepareCard.querySelector('img');const title=prepareCard.querySelector('h3');if(image){image.src='/assets/prepare-new.png';image.alt='สิ่งที่ต้องเตรียมตัวก่อนแต่งงาน';image.style.cursor='pointer';image.onclick=()=>window.open('https://www.facebook.com/share/p/1FSb6bY2FT/','_blank','noopener')}if(title)title.textContent='สิ่งที่ต้องเตรียมตัวก่อนแต่งงาน'}
  if(favorCard){const image=favorCard.querySelector('img');if(image){image.src='/assets/favor-new.png';image.alt='10 ของชำร่วยยอดฮิต';image.style.cursor='pointer';image.onclick=()=>window.open('https://www.facebook.com/share/p/1CF9tGxwub/','_blank','noopener')}}
}
if(location.pathname.endsWith('/logos.html')){
  const logoCategoryNames={
    VINTAGE:['INTERLOCKED MONOGRAM','#vintage'],
    'VINTAGE + FRAME':['ORNATE CREST','#frame']
  };
  document.querySelectorAll('.side-nav a').forEach((link)=>{
    const replacement=logoCategoryNames[link.textContent.trim()];
    if(replacement){link.textContent=replacement[0];link.href=replacement[1]}
  });
  const vintage=document.querySelector('#vintage figcaption');
  const frame=document.querySelector('#frame figcaption');
  if(vintage) vintage.firstChild.textContent='INTERLOCKED MONOGRAM ';
  if(frame) frame.firstChild.textContent='ORNATE CREST ';
}
if(location.pathname.endsWith('/ecard.html')){
  const table=document.querySelector('.package-table');
  if(table){
    table.outerHTML=`<table class="package-table"><thead><tr><th>รายละเอียด</th><th><strong>Simple</strong><br><strong>1,990 บาท</strong></th><th><strong>Signature</strong><br><strong>2,990 บาท</strong></th><th><strong>Memory Plus · แนะนำ</strong><br><strong>5,490 บาท</strong></th></tr></thead><tbody><tr><td>การ์ดออนไลน์พร้อมลิงก์ส่งให้แขก</td><td>✓</td><td>✓</td><td>✓</td></tr><tr><td>ชื่อบ่าวสาว วัน เวลา สถานที่ และกำหนดการ</td><td>✓</td><td>✓</td><td>✓</td></tr><tr><td>แผนที่และนับถอยหลังวันงาน</td><td>✓</td><td>✓</td><td>✓</td></tr><tr><td>แนะนำคู่บ่าวสาว</td><td>—</td><td>✓</td><td>✓</td></tr><tr><td>ปุ่ม RSVP ตอบรับเข้าร่วมงาน</td><td>—</td><td>✓</td><td>✓</td></tr><tr><td>เพลงประกอบการ์ด</td><td>—</td><td>✓</td><td>✓</td></tr><tr><td>รูปคู่บ่าวสาว</td><td>สูงสุด 8 รูป</td><td>สูงสุด 12 รูป</td><td>สูงสุด 16 รูป</td></tr><tr><td>วิดีโอคู่บ่าวสาว</td><td>ไม่มี</td><td>1 คลิป</td><td>2 คลิป</td></tr><tr><td>จำนวนครั้งที่แก้ไขได้</td><td>1 ครั้ง</td><td>2 ครั้ง</td><td>3 ครั้ง</td></tr><tr><td>QR Code สำหรับแขกอัปโหลดรูปและวิดีโอผ่าน PixelParty</td><td>—</td><td>—</td><td>✓</td></tr><tr><td>แขกอัปโหลดรูปและวิดีโอ</td><td>—</td><td>—</td><td>ไม่จำกัด</td></tr><tr><td>สไลด์โชว์รูปจากแขกแบบสด</td><td>—</td><td>—</td><td>✓</td></tr><tr><td>กล้องใช้แล้วทิ้งดิจิทัล</td><td>—</td><td>—</td><td>✓</td></tr><tr><td>รองรับแขกใน PixelParty</td><td>—</td><td>—</td><td>สูงสุด 500 คน</td></tr><tr><td>แขกต้องติดตั้งแอปเพื่ออัปโหลดหรือไม่</td><td>—</td><td>—</td><td>ไม่ต้อง</td></tr></tbody></table><div class="package-terms"><h3>เงื่อนไขการใช้งาน</h3><ul><li>ลิงก์ E-card เปิดใช้งานได้ 6 เดือน นับตั้งแต่วันเผยแพร่การ์ด</li><li>PixelParty ใช้สำหรับ 1 งาน และเป็นไปตามระยะเวลาใช้งานของ PixelParty</li><li>การแก้ไข 1 ครั้ง หมายถึงการรวบรวมรายการแก้ไขและแจ้งพร้อมกันในหนึ่งรอบ หากเกินจากแพ็กเกจ คิดเพิ่ม <strong>100 บาทต่อรอบ</strong></li></ul></div>`;
  }
}
if(location.pathname.endsWith('/ecard.html')){
  const memoryHeader=document.querySelector('.package-table thead th:nth-child(4)');
  if(memoryHeader) memoryHeader.innerHTML='<div class="memory-title-row"><strong>Memory Plus</strong><span class="package-badge">RECOMMEND</span></div><strong>5,490 บาท</strong>';
  const headers=document.querySelectorAll('.package-table thead th');
  if(headers.length>=4){
    headers[1].innerHTML='<div class="package-title">Simple</div><div class="package-price">1,990 บาท</div>';
    headers[2].innerHTML='<div class="package-title">Signature</div><div class="package-price">2,990 บาท</div>';
    headers[3].innerHTML='<div class="package-title memory-package-title">Memory Plus<span class="package-badge">RECOMMEND</span></div><div class="package-price">5,490 บาท</div>';
  }
  document.querySelectorAll('.package-table tbody tr').forEach((row)=>{
    const label=row.cells[0]?.textContent.trim()||'';
    if(label.startsWith('QR Code สำหรับแขกอัปโหลดรูปและวิดีโอผ่าน PixelParty')||label.startsWith('แขกต้องติดตั้งแอปเพื่ออัปโหลดหรือไม่')) row.remove();
  });
  const tbody=document.querySelector('.package-table tbody');
  if(tbody&&!tbody.querySelector('.guestbook-row')){const row=document.createElement('tr');row.className='guestbook-row';row.innerHTML='<td>สมุดอวยพรออนไลน์</td><td>—</td><td>✓</td><td>✓</td>';tbody.append(row)}
}
document.querySelectorAll('.ecard-feature span').forEach((item)=>{
  if(item.textContent.trim()==='สมุดอวยพรดิจิตอล') item.textContent='สมุดอวยพรออนไลน์';
});
if(localStorage.getItem('thip-language')==='en'){
  document.querySelectorAll('.contact-pop').forEach((pop)=>{pop.innerHTML='Phone: 083-629-1931<br>LINE OA: @411niqdo<br>Email: thipweddingstudio@gmail.com'});
  if(location.pathname.endsWith('/logos.html')){const logoCtaTitle=document.querySelector('.gallery-cta h2');if(logoCtaTitle)logoCtaTitle.textContent='Start Designing Your Wedding Logo'}
  const lateTranslations={
    'รายละเอียด':'Details','การ์ดออนไลน์พร้อมลิงก์ส่งให้แขก':'Online card with a shareable guest link','ชื่อบ่าวสาว วัน เวลา สถานที่ และกำหนดการ':'Couple names, date, time, venue, and schedule','แผนที่และนับถอยหลังวันงาน':'Map and wedding countdown','แนะนำคู่บ่าวสาว':'Bride & Groom introduction','ปุ่ม RSVP ตอบรับเข้าร่วมงาน':'RSVP button','เพลงประกอบการ์ด':'Card background music','รูปคู่บ่าวสาว':'Couple photos','วิดีโอคู่บ่าวสาว':'Couple videos','สูงสุด 8 รูป':'Up to 8 photos','สูงสุด 12 รูป':'Up to 12 photos','สูงสุด 16 รูป':'Up to 16 photos','ไม่มี':'None','1 คลิป':'1 clip','2 คลิป':'2 clips','จำนวนครั้งที่แก้ไขได้':'Number of revisions','1 ครั้ง':'1 revision','2 ครั้ง':'2 revisions','3 ครั้ง':'3 revisions','แขกอัปโหลดรูปและวิดีโอ':'Guest photo and video uploads','ไม่จำกัด':'Unlimited','สไลด์โชว์รูปจากแขกแบบสด':'Live guest photo slideshow','กล้องใช้แล้วทิ้งดิจิทัล':'Digital disposable camera','รองรับแขกใน PixelParty':'PixelParty guest capacity','สูงสุด 500 คน':'Up to 500 guests','สมุดอวยพรออนไลน์':'Online guestbook','เงื่อนไขการใช้งาน':'Terms of use','ลิงก์ E-card เปิดใช้งานได้ 6 เดือน นับตั้งแต่วันเผยแพร่การ์ด':'The E-card link is active for 6 months from the publication date.','PixelParty ใช้สำหรับ 1 งาน และเป็นไปตามระยะเวลาใช้งานของ PixelParty':'PixelParty is for one event and follows the PixelParty service period.','การแก้ไข 1 ครั้ง หมายถึงการรวบรวมรายการแก้ไขและแจ้งพร้อมกันในหนึ่งรอบ หากเกินจากแพ็กเกจ คิดเพิ่ม':'One revision means submitting one consolidated list of changes in a single round. Additional rounds are charged','แบบในภาพ ทำเป็นสไตล์ของเรา':'Custom style inspired by the reference','RECOMMEND':'RECOMMEND'
  };
  document.querySelectorAll('body *').forEach((el)=>{if(el.children.length===0){const value=el.textContent.trim();if(lateTranslations[value])el.textContent=lateTranslations[value]}});
  const terms=document.querySelectorAll('.package-terms li');
  if(terms[0])terms[0].textContent='The E-card link is active for 6 months from the publication date.';
  if(terms[1])terms[1].textContent='PixelParty is for one event and follows the PixelParty service period.';
  if(terms[2])terms[2].innerHTML='One revision means submitting one consolidated list of changes in a single round. Additional rounds are charged <strong>100 baht per round</strong>.';
  const ideaTitles=document.querySelectorAll('.idea-card h3');
  if(ideaTitles[0])ideaTitles[0].textContent='Wedding Card Ideas';
  if(ideaTitles[1])ideaTitles[1].textContent='Things to Prepare Before Your Wedding';
  const ctaTitle=document.querySelector('.cta-band h2');
  if(ctaTitle)ctaTitle.textContent='Ready to Create Your Special Memories Here?';
  const ecardIntro=document.querySelector('.ecard-intro');
  if(ecardIntro)ecardIntro.innerHTML='“ Share your special moments with a new kind of invitation.<br>From schedules and locations to uploading photos,<br>you can share your love story in a memorable way. ”';
  document.querySelectorAll('.package-price').forEach((price)=>{price.textContent=price.textContent.replace('บาท','฿').replace('baht','฿')});
}
document.querySelectorAll('.order-card .feature-icon').forEach((icon,index)=>{
  icon.classList.remove('order-icon-logo','order-icon-card','order-icon-ecard');
  icon.classList.add(index===0?'order-icon-logo':index===1?'order-icon-card':'order-icon-ecard');
});

if(location.pathname.endsWith('/print-order.html')&&localStorage.getItem('thip-language')==='en'){
  const printEnglish={'สเปก':'Specifications','จำนวน':'Quantity','4 × 6 นิ้ว':'4 × 6 inches','5 × 7 นิ้ว':'5 × 7 inches','ส่งคำสั่งซื้อ':'Submit order','ยืนยันการสั่งซื้อ':'Confirm order','ค่าจัดส่ง':'Shipping fee','ยอดรวม':'Total'};
  document.querySelectorAll('body *').forEach(el=>{if(el.children.length===0){const value=el.textContent.trim();if(printEnglish[value])el.textContent=printEnglish[value]}});
  document.querySelectorAll('select option').forEach(el=>{if(printEnglish[el.textContent.trim()])el.textContent=printEnglish[el.textContent.trim()]});
}

if(location.pathname.endsWith('/print-order.html')){
  const isEnglish=localStorage.getItem('thip-language')==='en';
  document.querySelectorAll('input[type="file"]').forEach(input=>{
    const label=document.createElement('label');
    label.className='custom-file-label';
    label.htmlFor=input.id;
    label.textContent=isEnglish?'Choose file':'เลือกไฟล์';
    input.classList.add('custom-file-input');
    input.parentNode.insertBefore(label,input);
    input.addEventListener('change',()=>{label.textContent=input.files[0]?.name||(isEnglish?'Choose file':'เลือกไฟล์')});
  });
  if(isEnglish){const submit=document.querySelector('.print-submit');if(submit){submit.childNodes[0].textContent='Submit order ';}}
}

// Keep the print-order entry visible in the shared top navigation on every page.
const sharedNav=document.querySelector('.nav-links');
if(sharedNav&&!sharedNav.querySelector('a[href="/print-order.html"]')){
  const printLink=document.createElement('a');
  printLink.href='/print-order.html';
  printLink.textContent=localStorage.getItem('thip-language')==='en'?'PRINT ONLINE':'สั่งพิมพ์ออนไลน์';
  printLink.className='print-nav-link';
  const contactLink=sharedNav.querySelector('.contact-hover, a[href="/contact.html"]');
  if(contactLink) sharedNav.insertBefore(printLink,contactLink);
  else sharedNav.appendChild(printLink);
}
