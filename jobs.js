if(guard()){
const J=[
['Frontend Developer','PixelWorks','Tech','Remote','₹8–14 LPA','HTML, CSS, JS'],
['Data Analyst','InsightHub','Tech','Bengaluru','₹6–10 LPA','SQL, Excel, Python'],
['UI/UX Designer','CreativeLab','Design','Mumbai','₹7–12 LPA','Figma, Research'],
['Graphic Designer','BrandNest','Design','Remote','₹4–8 LPA','Photoshop, Branding'],
['Business Analyst','FinEdge','Business','Delhi','₹7–11 LPA','Analysis, Reporting'],
['Marketing Manager','GrowthCo','Business','Chandigarh','₹9–15 LPA','SEO, Strategy'],
['Staff Nurse','CareWell Hospital','Healthcare','Ludhiana','₹3–5 LPA','Patient Care'],
['Health Coordinator','MediLink','Healthcare','Pune','₹4–7 LPA','Administration'],
['Backend Developer','CloudBase','Tech','Hyderabad','₹10–18 LPA','Node.js, APIs']];
const get=k=>JSON.parse(localStorage.getItem(k)||'[]'),set=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const box=document.getElementById('jobs'),q=document.getElementById('q'),cat=document.getElementById('cat'),view=document.getElementById('view');
function toggle(k,id){const a=get(k),i=a.indexOf(id);i<0?a.push(id):a.splice(i,1);set(k,a);render()}
window.toggle=toggle;
function render(){const s=get('cc_saved'),a=get('cc_applied'),t=q.value.toLowerCase();
 const list=J.map((j,i)=>({j,i})).filter(({j,i})=>(j[0]+j[1]).toLowerCase().includes(t)&&(!cat.value||j[2]===cat.value)&&(view.value==='all'||(view.value==='saved'?s:a).includes(i)));
 box.innerHTML=list.length?list.map(({j,i})=>`<div class="card job"><h3>${j[0]}</h3><div class="co">${j[1]}</div><span class="tag">${j[2]}</span><span class="tag">📍 ${j[3]}</span><p>💰 ${j[4]}</p><p style="color:var(--m);font-size:.9rem">Skills: ${j[5]}</p><div class="row"><button class="btn save o ${s.includes(i)?'on':''}" onclick="toggle('cc_saved',${i})">${s.includes(i)?'★ Saved':'☆ Save'}</button><button class="btn" ${a.includes(i)?'disabled style="opacity:.6"':''} onclick="toggle('cc_applied',${i})">${a.includes(i)?'✓ Applied':'Apply Now'}</button></div></div>`).join(''):'<p class="empty">No jobs found.</p>'}
[q,cat,view].forEach(e=>e.oninput=render);render();
}
