if(guard()){
const u=me(),U='https://images.unsplash.com/photo-',Q='?auto=format&fit=crop&w=900&q=80';
const h=new Date().getHours();
document.getElementById('hi').textContent=(h<12?'Good morning':h<18?'Good afternoon':'Good evening')+', '+u.name.split(' ')[0]+'!';
document.getElementById('goal').textContent='Career goal: '+u.goal;
const saved=JSON.parse(localStorage.getItem('cc_saved')||'[]'),applied=JSON.parse(localStorage.getItem('cc_applied')||'[]');
document.getElementById('kSaved').textContent=saved.length;
document.getElementById('kApplied').textContent=applied.length;
const r=JSON.parse(localStorage.getItem('cc_resume')||'{}'),keys=['name','role','email','phone','summary','exp','edu','skills'];
const pct=Math.round(keys.filter(k=>r[k]&&r[k].trim()).length/keys.length*100);
document.getElementById('kResume').textContent=pct+'%';
setTimeout(()=>document.getElementById('rbar').style.width=pct+'%',200);
const d=new Date().toDateString(),st=JSON.parse(localStorage.getItem('cc_streak')||'{"d":"","n":0}');
if(st.d!==d){st.n=(new Date(st.d).getTime()+864e5===new Date(d).getTime())?st.n+1:1;st.d=d;localStorage.setItem('cc_streak',JSON.stringify(st))}
document.getElementById('kDays').textContent=st.n;
const P=[['Technology','Software, AI & Data','1518770660439-4636190af475','Tech'],['Design','UI/UX & Creative','1561070791-2526d30994b5','Design'],['Business','Strategy & Finance','1507679799987-c73779587ccf','Business'],['Healthcare','Care & Medicine','1576091160399-112ba8d25d1d','Healthcare']];
document.getElementById('paths').innerHTML=P.map(p=>`<div class="path" onclick="location.href='jobs.html'"><img src="${U}${p[2]}${Q}" alt="${p[0]}" loading="lazy" onerror="this.removeAttribute('src')"><div><h3>${p[0]}</h3><small>${p[1]}</small></div></div>`).join('');
const S=[['HTML & CSS',85],['JavaScript',70],['Communication',80],['Problem Solving',75]];
document.getElementById('skills').innerHTML=S.map(s=>`<div class="skill"><div><span>${s[0]}</span><span>${s[1]}%</span></div><div class="bar"><i style="width:${s[1]}%"></i></div></div>`).join('');
const QS=['Choose a job you love and you will never work a day in your life.','Your career is a marathon, not a sprint.','Skills pay the bills — keep learning every day.','Opportunities don\'t happen, you create them.'];
document.getElementById('quote').textContent='"'+QS[new Date().getDate()%QS.length]+'"';
}
