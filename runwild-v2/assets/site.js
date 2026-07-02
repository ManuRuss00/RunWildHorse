const yrEl=document.getElementById('yr');if(yrEl)yrEl.textContent=new Date().getFullYear();
const nav=document.getElementById('nav'), waf=document.getElementById('waFloat');
window.addEventListener('scroll',()=>{if(window.scrollY>60){if(nav)nav.classList.add('scrolled');if(waf)waf.classList.add('show')}else{if(nav)nav.classList.remove('scrolled');if(waf)waf.classList.remove('show')}},{passive:true});
const io=new IntersectionObserver((e)=>{e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12,rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.reveal-up').forEach(el=>io.observe(el));
window.addEventListener('load',()=>{document.querySelectorAll('.hero .reveal-up, .page-hero .reveal-up').forEach(el=>el.classList.add('in'))});
