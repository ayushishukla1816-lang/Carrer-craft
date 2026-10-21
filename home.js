document.querySelectorAll('[data-n]').forEach(el=>{const end=+el.dataset.n;let n=0;const step=Math.ceil(end/60);
 const t=setInterval(()=>{n=Math.min(n+step,end);el.textContent=n.toLocaleString();if(n>=end)clearInterval(t)},25)});
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),{threshold:.2});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
