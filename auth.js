const KEY='cc_users',SES='cc_session';
const users=()=>JSON.parse(localStorage.getItem(KEY)||'[]');
const me=()=>JSON.parse(localStorage.getItem(SES)||'null');
function logout(){localStorage.removeItem(SES);location.href='index.html'}
function guard(){if(!me()){location.href='login.html';return false}return true}
(function nav(){const u=me(),L=[['index.html','Home']];
 if(u)L.push(['dashboard.html','Dashboard'],['jobs.html','Jobs'],['resume.html','Resume']);
 document.getElementById('nav').innerHTML=`<a class="logo" href="index.html">Career<span>Craft</span></a><ul>${L.map(l=>`<li><a href="${l[0]}" class="${location.pathname.endsWith(l[0])?'on':''}">${l[1]}</a></li>`).join('')}<li>${u?'<a href="#" class="btn" onclick="logout()">Logout</a>':'<a href="login.html" class="btn">Login</a>'}</li></ul>`})();
const lf=document.getElementById('loginForm'),rf=document.getElementById('regForm');
if(lf){
 if(me())location.href='dashboard.html';
 const msg=document.getElementById('msg');
 document.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('on',x===t));lf.hidden=t.dataset.t!=='l';rf.hidden=t.dataset.t!=='r';msg.textContent=''});
 rf.onsubmit=e=>{e.preventDefault();const f=new FormData(rf),em=f.get('email').toLowerCase().trim(),p=f.get('pass');
  if(p.length<6)return msg.textContent='Password must be at least 6 characters.';
  const us=users();if(us.some(u=>u.email===em))return msg.textContent='This email is already registered.';
  const s={name:f.get('name').trim(),email:em,goal:f.get('goal')};
  us.push({...s,pass:btoa(p)});localStorage.setItem(KEY,JSON.stringify(us));
  localStorage.setItem(SES,JSON.stringify(s));location.href='dashboard.html'};
 lf.onsubmit=e=>{e.preventDefault();const f=new FormData(lf),em=f.get('email').toLowerCase().trim();
  const u=users().find(x=>x.email===em&&x.pass===btoa(f.get('pass')));
  if(!u)return msg.textContent='Invalid email or password.';
  localStorage.setItem(SES,JSON.stringify({name:u.name,email:u.email,goal:u.goal}));location.href='dashboard.html'};
}
