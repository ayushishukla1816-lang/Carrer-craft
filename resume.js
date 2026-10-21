if(guard()){
const F=['name','role','email','phone','summary','exp','edu','skills'],u=me();
const saved=JSON.parse(localStorage.getItem('cc_resume')||'{}');
if(!saved.name)saved.name=u.name;if(!saved.email)saved.email=u.email;if(!saved.role)saved.role=u.goal;
const esc=s=>(s||'').replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
function draw(){const d={};F.forEach(k=>d[k]=document.getElementById(k).value);localStorage.setItem('cc_resume',JSON.stringify(d));
 const sk=d.skills.split(',').map(s=>s.trim()).filter(Boolean);
 document.getElementById('prev').innerHTML=`<h1>${esc(d.name)||'Your Name'}</h1><p><b>${esc(d.role)}</b></p><p>${esc(d.email)} ${d.phone?'• '+esc(d.phone):''}</p>`+
 (d.summary?`<h4>Summary</h4><p>${esc(d.summary)}</p>`:'')+(d.exp?`<h4>Experience</h4><p>${esc(d.exp)}</p>`:'')+(d.edu?`<h4>Education</h4><p>${esc(d.edu)}</p>`:'')+
 (sk.length?`<h4>Skills</h4><p>${sk.map(esc).join(' • ')}</p>`:'')}
F.forEach(k=>{const el=document.getElementById(k);el.value=saved[k]||'';el.oninput=draw});
document.getElementById('print').onclick=()=>window.print();draw();
}
