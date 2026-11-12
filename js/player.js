/* Lesson player: page engine + the shared game templates.
   A lesson file calls BKLesson({...}). Each page names a game:
     cover    title scene with a "Let's play" button
     story    tap-to-tell: each beat speaks a line and changes the scene; the child taps the glowing thing to go on
     drag     drag items into a zone (animals into the ark, gifts to the baby)
     tapmany  tap an area to make things appear (rain, stars, flowers)
     find     tap covers (bushes, clouds) to find what hides behind them
     order    tap pictures in the order the story happened
     quiz     picture quiz read aloud
     song     the lesson's mezmur with the kebero drum
     cross    the sign of the cross prayer
     finish   celebration, sticker, next lesson
   Reading-level pages for Levels II to IV (read, match, blanks, verse, puzzle, truefalse, think) are described further down.
   Spoken lines are written ['lineId','text'] and get the global id <lessonId>.<lineId> (audio/lines/<that>.mp3). */
(function(){
const {ART,BG,draw,icon,selam,cross,rnd}=window.BKArt;
const VO=window.BKVoice;
const $=(s,r=document)=>r.querySelector(s);
const GEEZ=['፩','፪','፫','፬','፭','፮','፯','፰','፱','፲'];
const NS='http://www.w3.org/2000/svg';
const store={ get(k,d){ try{ const v=localStorage.getItem(k); return v?JSON.parse(v):d; }catch(e){ return d; } }, set(k,v){ try{ localStorage.setItem(k,JSON.stringify(v)); }catch(e){} } };

/* ---------- svg helpers ---------- */
const svgWrap=inner=>`<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">${inner}</svg>`;
function pt(svg,e){ const p=svg.createSVGPoint(); p.x=e.clientX; p.y=e.clientY; return p.matrixTransform(svg.getScreenCTM().inverse()); }
function centerOf(svg,el){ const r=el.getBoundingClientRect(), m=svg.getScreenCTM().inverse(); const p=svg.createSVGPoint(); p.x=r.left+r.width/2; p.y=r.top+r.height/2; const c=p.matrixTransform(m); const q=svg.createSVGPoint(); q.x=r.right; q.y=r.bottom; const d=q.matrixTransform(m); return {x:c.x,y:c.y,w:Math.abs(d.x-c.x)*2,h:Math.abs(d.y-c.y)*2}; }
function place(el,x,y,s=1){ el.style.transform=`translate(${x}px,${y}px) scale(${s})`; el.dataset.x=x; el.dataset.y=y; el.dataset.s=s; }
function propHTML(p){
  const inner=draw(p.art);
  const flip=p.flip?`<g transform="scale(-1 1)">${inner}</g>`:inner;
  const anim=p.anim?`<g class="${p.anim}" style="${p.delay!=null?`animation-delay:${p.delay}s;`:''}${p.dur?`--d:${p.dur}s;`:''}">${flip}</g>`:flip;
  return `<g class="prop mv ${p.hidden?'fade':''} ${p.cls||''}" data-id="${p.id||''}" style="transform:translate(${p.x||0}px,${p.y||0}px) scale(${p.s||1})" data-x="${p.x||0}" data-y="${p.y||0}" data-s="${p.s||1}" data-art='${JSON.stringify(p.art).replace(/'/g,"&#39;")}'><g class="pin">${anim}</g></g>`;
}
function scene(sc,page,extra=''){
  const bg=typeof page.bg==='function'?page.bg():(BG[page.bg||'day']||BG.day)();
  sc.innerHTML=svgWrap(`${bg}<g class="props">${(page.props||[]).map(propHTML).join('')}</g><g class="layer"></g>${extra}`);
  return sc.querySelector('svg');
}
const P=(svg,id)=>svg.querySelector(`.prop[data-id="${id}"]`);
const handArt=`<g class="hand"><g transform="translate(-6 34)"><path d="M0 0 L0 -26 Q0 -32 6 -32 Q12 -32 12 -26 L12 -6 L12 -12 Q12 -18 18 -18 Q24 -18 24 -12 L24 -4 Q24 -10 30 -10 Q36 -10 36 -4 L36 16 Q36 34 18 34 L8 34 Q-2 34 -8 22 L-16 6 Q-19 0 -13 -2 Q-7 -4 -4 2Z" fill="#FFF" stroke="#18234F" stroke-width="3" stroke-linejoin="round"/></g></g>`;
function hint(svg,x,y){ svg.querySelectorAll('.hintHand').forEach(h=>h.remove()); const g=document.createElementNS(NS,'g'); g.setAttribute('class','hintHand'); g.setAttribute('transform',`translate(${x} ${y})`); g.style.pointerEvents='none'; g.innerHTML=handArt; svg.appendChild(g); }
function clearHint(svg){ svg.querySelectorAll('.hintHand,.ring').forEach(h=>h.remove()); }
function ring(svg,el){ const c=centerOf(svg,el); const g=document.createElementNS(NS,'g'); g.setAttribute('class','ring'); g.style.pointerEvents='none'; g.innerHTML=`<circle cx="${c.x}" cy="${c.y}" r="${Math.max(40,Math.min(150,Math.max(c.w,c.h)/2+10))}" fill="none" stroke="#FFE18A" stroke-width="6" stroke-dasharray="14 10"/>`; svg.appendChild(g); hint(svg,c.x+10,c.y+10); }
function rewiggle(el,cls='wiggle'){ if(!el) return; const t=el.querySelector('.pin')||el; t.classList.remove(cls); void t.getBoundingClientRect(); t.classList.add(cls); }
function tapper(el,fn){ el.classList.add('tap'); el.setAttribute('tabindex','0'); el.setAttribute('role','button');
  el.addEventListener('pointerdown',e=>{ e.stopPropagation(); fn(e); });
  el.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); fn(null);} }); }
function drag(el,svg,{move,drop,tap}){
  el.style.touchAction='none'; el.style.cursor='grab'; let st=null, moved=false;
  el.addEventListener('pointerdown',e=>{ e.stopPropagation(); e.preventDefault(); try{el.setPointerCapture(e.pointerId)}catch(_){} st=pt(svg,e); moved=false; });
  el.addEventListener('pointermove',e=>{ if(!st) return; const p=pt(svg,e); if(!moved&&Math.hypot(p.x-st.x,p.y-st.y)>10){ moved=true; el.classList.add('dragging'); } if(moved&&move) move(p); });
  el.addEventListener('pointerup',e=>{ if(!st) return; const p=pt(svg,e); st=null; el.classList.remove('dragging'); if(moved){drop&&drop(p)} else {tap&&tap(p)} });
  el.addEventListener('pointercancel',()=>{st=null; el.classList.remove('dragging')});
  el.setAttribute('tabindex','0'); el.setAttribute('role','button');
  el.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); tap&&tap(null);} }); }
function confetti(n=46){ const box=document.createElement('div'); box.className='confetti'; const cols=['#E2A62B','#2F7A4E','#B3322A','#3C8DD8','#FFFFFF'];
  for(let i=0;i<n;i++){ const c=document.createElement('i'); c.style.left=rnd(0,100)+'%'; c.style.background=cols[i%cols.length]; c.style.animationDelay=rnd(0,.5)+'s'; c.style.setProperty('--dx',rnd(-80,80)+'px'); c.style.setProperty('--r',rnd(-540,540)+'deg'); box.appendChild(c); }
  $('#scene').appendChild(box); setTimeout(()=>box.remove(),2600); }
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
/* apply a scene change: {show,hide,move,wiggle,sfx,fx,add} */
function apply(svg,b){
  (b.show||[]).forEach(id=>{ const el=P(svg,id); if(el){ el.classList.add('fade'); void el.getBoundingClientRect(); el.classList.add('show'); } });
  (b.hide||[]).forEach(id=>{ const el=P(svg,id); if(el){ el.classList.add('fade'); el.classList.remove('show'); } });
  Object.entries(b.move||{}).forEach(([id,[x,y,s]])=>{ const el=P(svg,id); if(el) place(el,x,y,s??+el.dataset.s); });
  (b.wiggle||[]).forEach(id=>rewiggle(P(svg,id)));
  (b.add||[]).forEach(p=>svg.querySelector('.props').insertAdjacentHTML('beforeend',propHTML(p)));
  if(b.sfx) VO.sfx(b.sfx);
  if(b.fx==='confetti') confetti();
  if(b.fx==='flash'){ const f=document.createElementNS(NS,'rect'); f.setAttribute('width',800); f.setAttribute('height',450); f.setAttribute('class','flash'); svg.appendChild(f); setTimeout(()=>f.remove(),900); }
}
function addHit(el,spec){ const pin=el.querySelector('.pin'); if(!pin||pin.querySelector('.hit')) return; const [x,y,w,h]=BKArt.box(spec||'').split(' ').map(Number); pin.insertAdjacentHTML('afterbegin',`<rect class="hit" x="${x}" y="${y}" width="${w}" height="${h}" fill="#fff" fill-opacity="0"/>`); }
function waitTap(svg,el,api){ return new Promise(res=>{ if(!el) return res(); if(el.dataset.art) addHit(el,JSON.parse(el.dataset.art)); el.classList.add('tap'); el.setAttribute('tabindex','0'); el.setAttribute('role','button');
  ring(svg,el); let done=false;
  const go=e=>{ if(e) e.stopPropagation(); if(done||!api.alive()) return; done=true; clearHint(svg); el.removeEventListener('pointerdown',go); el.removeEventListener('keydown',kd); rewiggle(el); VO.sfx('pop',2); res(); };
  const kd=e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); go(); } };
  el.addEventListener('pointerdown',go); el.addEventListener('keydown',kd); }); }

/* ---------- games ---------- */
const G={};

G.cover=(sc,pg,api)=>{
  const svg=scene(sc,pg);
  sc.insertAdjacentHTML('beforeend',`<div class="covertitle"><h1>${VO.render(pg.title||api.lesson.title)}</h1>${pg.am?`<div class="am">${pg.am}</div>`:''}</div><button class="start" id="startBtn" type="button">Let's play!</button>`);
  $('#startBtn').onclick=()=>{ VO.sfx('glory'); api.next(); };
  if(pg.say) api.say(...pg.say);
};

G.story=async(sc,pg,api)=>{
  const svg=scene(sc,pg);
  for(let i=0;i<pg.beats.length;i++){ const b=pg.beats[i]; if(!api.alive()) return;
    apply(svg,b);
    if(b.say){ if(b.tapFirst){ /* tap, then speak */ } await api.say(...b.say); }
    if(!api.alive()) return;
    if(b.tap){ await waitTap(svg,b.tap==='any'?svg:P(svg,b.tap),api); if(b.after) apply(svg,b.after); }
    else await sleep(b.wait??500);
  }
  if(api.alive()) api.done(pg.quiet);
};

G.drag=(sc,pg,api)=>{
  const svg=scene(sc,pg,`<g class="items">${pg.items.map(it=>propHTML({...it,cls:'item'})).join('')}</g>`);
  const z=pg.zone; let n=0; const got=new Set();
  if(pg.showZone!==false) svg.querySelector('.layer').innerHTML=`<rect x="${z.x}" y="${z.y}" width="${z.w}" height="${z.h}" rx="24" fill="#FFE18A" fill-opacity=".18" stroke="#FFE18A" stroke-width="4" stroke-dasharray="14 10" class="zone"/>`;
  const items=[...svg.querySelectorAll('.items .prop')];
  const first=items[0]; if(first){ const c=centerOf(svg,first); hint(svg,c.x,c.y); }
  if(pg.intro) api.say(...pg.intro);
  const inZone=p=>p.x>z.x&&p.x<z.x+z.w&&p.y>z.y&&p.y<z.y+z.h;
  items.forEach((el,i)=>{ const it=pg.items[i]; const home=[it.x,it.y,it.s||1]; addHit(el,it.art);
    const land=async()=>{ if(got.has(i)) return; got.add(i); n++; clearHint(svg);
      const to=it.to||[z.x+z.w/2+rnd(-z.w/4,z.w/4), z.y+z.h*.7, (it.s||1)*.8]; place(el,...to); el.style.pointerEvents='none'; VO.sfx(pg.sfx||'pop',n);
      if(it.then) apply(svg,it.then);
      if(it.say) await api.say(...it.say); else if(n<pg.items.length&&pg.progress) api.show(pg.progress.replace('{n}',pg.items.length-n));
      if(n===pg.items.length&&api.alive()&&!api.isDone()){ if(pg.after) apply(svg,pg.after); if(pg.done) await api.say(...pg.done); api.done(); } };
    drag(el,svg,{ move:p=>{ if(got.has(i)) return; clearHint(svg); place(el,p.x,p.y+(it.grab||0),(it.s||1)*1.08); },
      drop:p=>{ if(got.has(i)) return; if(inZone(p)) land(); else { place(el,...home); VO.sfx('boing'); } },
      tap:()=>land() }); });
};

G.tapmany=(sc,pg,api)=>{
  const svg=scene(sc,pg); const a=pg.area||{x0:0,y0:0,x1:800,y1:450}; let n=0; const N=pg.count||5;
  hint(svg,(a.x0+a.x1)/2,(a.y0+a.y1)/2);
  if(pg.intro) api.say(...pg.intro);
  svg.addEventListener('pointerdown',async e=>{ const p=pt(svg,e); if(p.x<a.x0||p.x>a.x1||p.y<a.y0||p.y>a.y1) return; if(n>=(pg.max||N*3)) return; clearHint(svg); n++;
    const sp=pg.spawn; const s=Array.isArray(sp.s)?rnd(sp.s[0],sp.s[1]):(sp.s||1);
    svg.querySelector('.layer').insertAdjacentHTML('beforeend',`<g transform="translate(${p.x} ${p.y}) scale(${s})"><g class="popin"><g class="${sp.anim||''}" style="animation-delay:${-rnd(0,2)}s">${draw(sp.art)}</g></g></g>`);
    VO.sfx(pg.sfx||'pop',n);
    if(pg.at&&pg.at[n]) apply(svg,pg.at[n]);
    if(n<N&&pg.progress) api.show(pg.progress.replace('{n}',N-n));
    if(n===N&&!api.isDone()){ if(pg.after) apply(svg,pg.after); if(pg.done) await api.say(...pg.done); api.done(); } });
};

G.find=(sc,pg,api)=>{
  const svg=scene(sc,pg,`<g class="spots">${pg.spots.map((s,i)=>`<g class="spot" data-i="${i}"><g class="hid mv fade" style="transform:translate(${s.x}px,${s.y+40}px) scale(${s.s||1})">${draw(s.art)}</g><g style="transform:translate(${s.x}px,${s.y+(s.coverDy??30)}px) scale(${s.coverS||.7})"><g class="cov">${draw(s.cover||'bush')}</g></g></g>`).join('')}</g>`);
  const found=new Set(); const sp=[...svg.querySelectorAll('.spot')];
  { const c=centerOf(svg,sp[0]); hint(svg,c.x,c.y); }
  if(pg.intro) api.say(...pg.intro);
  sp.forEach(el=>tapper(el,async()=>{ clearHint(svg); const i=+el.dataset.i, s=pg.spots[i]; const c=el.querySelector('.cov'); c.classList.remove('shakeit'); void c.getBoundingClientRect(); c.classList.add('shakeit'); VO.sfx('boing');
    const h=el.querySelector('.hid'); h.classList.add('show'); h.style.transform=`translate(${s.x}px,${s.y-(s.up??30)}px) scale(${s.s||1})`;
    const again=found.has(i); found.add(i);
    if(s.say) await api.say(...s.say);
    if(!again&&found.size===pg.spots.length&&api.alive()&&!api.isDone()){ if(pg.done) await api.say(...pg.done); api.done(); } }));
};

G.order=(sc,pg,api)=>{
  const order=pg.cards.map((c,i)=>i); const shown=order.slice().sort(()=>Math.random()-.5);
  if(shown.every((v,i)=>v===i)) shown.reverse();
  scene(sc,{bg:pg.bg||'quiz',props:[]});
  sc.insertAdjacentHTML('beforeend',`<div class="chip">${pg.chip||'What happened first?'}</div><div class="quizgrid n${pg.cards.length}">${shown.map(i=>`<button type="button" class="card" data-i="${i}">${icon(pg.cards[i].art)}<span>${VO.render(pg.cards[i].cap)}</span><em class="badge"></em></button>`).join('')}</div>`);
  let next=0;
  if(pg.intro) api.say(...pg.intro);
  sc.querySelectorAll('.card').forEach(b=>b.onclick=async()=>{ const i=+b.dataset.i; if(b.classList.contains('right')) return;
    if(i===next){ b.classList.add('right'); b.querySelector('.badge').textContent=GEEZ[i]; VO.sfx('note',i+2); next++;
      const c=pg.cards[i]; if(c.say) await api.say(...c.say);
      if(next===pg.cards.length&&api.alive()&&!api.isDone()){ confetti(30); if(pg.done) await api.say(...pg.done); api.done(); } }
    else { rewiggle(b,'wrong'); VO.sfx('no'); api.say('order-again',pg.again||'Hmm, what happened before that?'); } });
};

G.quiz=(sc,pg,api)=>{
  let qi=0; api.state.score=0;
  const show=()=>{ const q=pg.questions[qi]; let tries=0;
    scene(sc,{bg:'quiz'});
    sc.insertAdjacentHTML('beforeend',`<div class="chip">Question ${qi+1} of ${pg.questions.length} <span>${'★'.repeat(api.state.score)}${'☆'.repeat(pg.questions.length-api.state.score)}</span></div>
      <div class="quizgrid n${q.a.length}">${q.a.map(([t,ic],i)=>`<button type="button" class="card" data-i="${i}">${icon(ic)}<span class="${Array.isArray(ic)&&ic[0]==='text'?'sr':''}">${VO.render(t)}</span></button>`).join('')}</div>`);
    api.say(q.id,q.q,q.show);
    sc.querySelectorAll('.card').forEach(b=>b.onclick=async()=>{ const i=+b.dataset.i;
      if(i===q.c){ b.classList.add('right'); if(tries===0) api.state.score++; VO.sfx('win'); confetti(30); sc.querySelectorAll('.card').forEach(x=>x.disabled=true);
        await api.say('yes'+(qi%3),['Yes! Well done!','That is right!','Wonderful!'][qi%3],null,true);
        if(!api.alive()) return; qi++; if(qi<pg.questions.length) show(); else { api.done(true); api.next(); } }
      else { tries++; rewiggle(b,'wrong'); VO.sfx('no'); api.say('tryagain','Hmm, try again!',null,true); } });
  };
  show();
};

G.song=(sc,pg,api)=>{
  const song=(window.BK_SONGS||{})[pg.song]||{lines:[],meaning:''};
  const svg=scene(sc,{bg:pg.bg||'church',props:[{id:'drum',art:'kebero',x:150,y:420,s:1.5},...(pg.props||[])]});
  sc.insertAdjacentHTML('beforeend',`<div class="lyrics"><div class="lyr-h">Mezmur · <span class="am">መዝሙር</span></div>${song.lines.map((l,i)=>`<p data-i="${i}">${song.fidel&&song.fidel[i]?`<span class="am">${song.fidel[i]}</span><br>`:''}${l}</p>`).join('')}<p class="mean">${song.meaning}</p>${VO.songSrc(pg.song)?'<button type="button" class="next" id="playSong">Play the song ▶</button>':''}</div>`);
  const drum=P(svg,'drum'); let beats=0; const N=pg.beats||8; const lines=[...sc.querySelectorAll('.lyrics p[data-i]')];
  const ps=$('#playSong'); if(ps) ps.onclick=()=>VO.playSong(pg.song);
  const intro=pg.intro||['song-intro',`Here is our song! It means: ${song.meaning} Tap the kebero drum to play along with your teacher.`];
  api.say(...intro).then(()=>{ if(api.alive()&&!beats) ring(svg,drum); });
  tapper(drum,async()=>{ clearHint(svg); beats++; rewiggle(drum,'thump'); VO.sfx('drum',beats);
    lines.forEach((l,i)=>l.classList.toggle('on',i===Math.floor((beats-1)/2)%Math.max(1,lines.length)));
    if(beats===N&&!api.isDone()){ api.done(); await api.say(...(pg.done||['song-done','Beautiful! Keep singing this song with your family this week.'])); } });
};

G.cross=(sc,pg,api)=>{
  const pts=[[400,132,'cross-1','Forehead'],[400,292,'cross-2','Chest'],[484,254,'cross-3','Left shoulder'],[316,254,'cross-4','Right shoulder']];
  sc.innerHTML=svgWrap(`${BG.gold()}
   <g transform="translate(120 225) scale(1.2)"><g class="bob">${cross('#18234F','#F0B53A')}</g></g><g transform="translate(680 225) scale(1.2)"><g class="bob" style="animation-delay:-1.5s">${cross('#18234F','#F0B53A')}</g></g>
   <g transform="translate(400 196) scale(2.4)">${selam()}</g><g class="lines"></g>
   ${pts.map(([x,y],i)=>`<g class="pt fade" data-i="${i}" transform="translate(${x} ${y})"><g class="glow"><circle r="26" fill="#FFE18A" opacity=".75"/></g><circle r="17" fill="#E2A62B" stroke="#fff" stroke-width="4"/><text y="6" text-anchor="middle" font-family="Grandstander,sans-serif" font-weight="800" font-size="17" fill="#1A1405">${i+1}</text></g>`).join('')}`);
  const s=sc.querySelector('svg'); let n=0;
  const showNext=()=>s.querySelectorAll('.pt').forEach((p,i)=>p.classList.toggle('show',i<=n));
  (async()=>{ await api.say(...(pg.intro||['cross-intro','Let\'s pray with the sign of the cross. Cross your fingers like this, and touch the glowing dots one by one.']));
    if(api.alive()) showNext(); })();
  const line=(a,b)=>s.querySelector('.lines').insertAdjacentHTML('beforeend',`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="#FFF6D2" stroke-width="12" stroke-linecap="round" opacity=".95"/>`);
  s.querySelectorAll('.pt').forEach(p=>tapper(p,()=>{ const i=+p.dataset.i; if(i!==n||!p.classList.contains('show')) return; const [x,y,k,where]=pts[i];
    if(i===1) line(pts[0],pts[1]); if(i===3) line(pts[2],pts[3]);
    p.querySelector('.glow').style.display='none'; VO.sfx('note',i+1); n++; showNext();
    api.say('cross-'+i,`${where}. [[${k}]]`,null,true);
    if(n===4) setTimeout(async()=>{ if(!api.alive()) return; VO.sfx('glory'); confetti(50); await api.say('amen','[[sign-of-cross]] [[amen]]',null,true); api.done(true); },1600); }));
};

G.finish=(sc,pg,api)=>{
  const st=api.lesson.sticker||'adeyAbeba';
  scene(sc,{bg:'gold',props:[{art:'adeyAbeba',x:110,y:110,s:.9,anim:'spin'},{art:'adeyAbeba',x:690,y:340,s:.9,anim:'spin'}]});
  const stars=api.state.score;
  sc.insertAdjacentHTML('beforeend',`<div class="finish"><div class="big-sticker">${icon(st)}</div><h2>You did it!</h2><p>${stars?'★'.repeat(stars):''}</p></div>`);
  confetti(70); VO.sfx('win'); api.done(true); api.complete();
  api.say(...(pg.say||['finish',`You did it! You finished ${VO.plain(api.lesson.title)} and earned a sticker! Tap Play again, or go back to pick another lesson.`]));
};

/* ---------- reading-level games (Levels II to IV) ----------
   These pages use a taller "doc" scene with HTML content over a soft background:
     read       story paragraphs; Selam reads each one aloud and it lights up; tap a paragraph to hear it again
     match      tap a word, then its partner (picture, meaning, person and deed)
     blanks     a sentence with a gap; pick the word that fits
     verse      build the memory verse by tapping the words in order
     puzzle     spell the answer to a clue from letter tiles (Level II word puzzles)
     truefalse  true or false, with a short reason read after each answer
     think      questions to talk about with parents and teachers (no scoring)
   window.__solveStep() makes one correct move; tools/autoplay.js uses it to test these pages. */
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shuffle=a=>{ const b=a.slice(); for(let i=b.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [b[i],b[j]]=[b[j],b[i]]; } return b; };
function docScene(sc,pg,html){
  sc.classList.add('doc');
  const bg=(BG[pg.bg||'paper']||BG.day)();
  sc.innerHTML=`${svgWrap(bg)}<div class="panel">${html}</div>`;
  return sc.querySelector('.panel');
}
function picHTML(art){ return art?`<svg class="pic" viewBox="${BKArt.box(art)}" aria-hidden="true">${draw(art)}</svg>`:''; }
const solver=fn=>{ window.__solveStep=fn; };

G.read=(sc,pg,api)=>{
  const el=docScene(sc,pg,`${pg.heading?`<h3>${VO.render(pg.heading)}</h3>`:''}${picHTML(pg.pic)}${pg.paras.map(([id,t],i)=>`<p class="para" data-i="${i}" tabindex="0" role="button">${VO.render(t)}</p>`).join('')}
    <div class="row"><button type="button" class="next ready doneRead">I read it ✓</button></div>`);
  const ps=[...el.querySelectorAll('.para')]; const heard=new Set();
  const finish=()=>{ if(api.alive()&&!api.isDone()) api.done(true); };
  const readOne=async i=>{ ps.forEach(p=>p.classList.toggle('on',+p.dataset.i===i)); ps[i].scrollIntoView({block:'nearest',behavior:'smooth'}); heard.add(i);
    await api.say(...pg.paras[i],' '); if(api.alive()) ps[i].classList.remove('on'); };
  ps.forEach(p=>p.addEventListener('click',()=>readOne(+p.dataset.i)));
  el.querySelector('.doneRead').onclick=finish;
  (async()=>{ if(pg.intro) await api.say(...pg.intro);
    if(pg.auto!==false) for(let i=0;i<ps.length;i++){ if(!api.alive()) return; await readOne(i); }
    if(api.alive()&&heard.size===ps.length) finish(); })();
  solver(()=>finish());
};

G.match=(sc,pg,api)=>{
  const L=pg.pairs.map((p,i)=>({i,t:p[0],art:p[2]})), R=shuffle(pg.pairs.map((p,i)=>({i,t:p[1],art:p[3]})));
  const btn=(o,side)=>`<button type="button" class="tile ${o.art?'hasart':''}" data-side="${side}" data-i="${o.i}">${picHTML(o.art)}<span>${VO.render(o.t)}</span></button>`;
  const el=docScene(sc,pg,`${pg.heading?`<h3>${VO.render(pg.heading)}</h3>`:''}<div class="match"><div class="col">${L.map(o=>btn(o,'L')).join('')}</div><div class="col">${R.map(o=>btn(o,'R')).join('')}</div></div>`);
  let pick=null, n=0; const COLS=['#2F7A4E','#B3322A','#24418F','#D4930F','#6A3A8A','#1C7A8A','#8A5A30','#C2272D'];
  if(pg.intro) api.say(...pg.intro);
  const tap=async b=>{ if(b.classList.contains('got')) return;
    if(!pick||pick.dataset.side===b.dataset.side){ if(pick) pick.classList.remove('sel'); pick=b; b.classList.add('sel'); VO.sfx('pop',1); return; }
    if(pick.dataset.i===b.dataset.i){ const c=COLS[n%COLS.length]; [pick,b].forEach(x=>{ x.classList.remove('sel'); x.classList.add('got'); x.style.setProperty('--m',c); }); pick=null; n++; VO.sfx('note',n);
      const pr=pg.pairs[+b.dataset.i]; if(pr[4]) await api.say(...pr[4]);
      if(n===pg.pairs.length&&api.alive()&&!api.isDone()){ if(pg.done) await api.say(...pg.done); api.done(); } }
    else { rewiggle(b,'wrong'); VO.sfx('no'); pick.classList.remove('sel'); pick=null; } };
  el.querySelectorAll('.tile').forEach(b=>b.onclick=()=>tap(b));
  solver(()=>{ const l=el.querySelector('.tile[data-side="L"]:not(.got)'); if(!l) return; tap(l); tap(el.querySelector(`.tile[data-side="R"][data-i="${l.dataset.i}"]`)); });
};

G.blanks=(sc,pg,api)=>{
  let k=0;
  const show=()=>{ const it=pg.items[k]; const opts=shuffle(it.opts.includes(it.a)?it.opts:[it.a,...it.opts]);
    const el=docScene(sc,pg,`<div class="qcount">${k+1} / ${pg.items.length}</div>${picHTML(it.pic)}<p class="sent">${VO.render(it.s).replace('___','<span class="gap">?</span>')}</p><div class="opts">${opts.map(o=>`<button type="button" class="tile opt" data-o="${esc(o)}">${VO.render(o)}</button>`).join('')}</div>`);
    api.say(it.id,it.say||it.s.replace('___','what?'),it.s.replace('___','_____'));
    const choose=async b=>{ if(b.disabled) return;
      if(b.dataset.o===it.a){ el.querySelectorAll('.opt').forEach(x=>x.disabled=true); b.classList.add('got'); el.querySelector('.gap').textContent=it.a; el.querySelector('.gap').classList.add('filled'); VO.sfx('win');
        await api.say(it.id+'-a',it.s.replace('___',it.a),null);
        if(!api.alive()) return; k++; if(k<pg.items.length) show(); else { if(pg.done) await api.say(...pg.done); api.done(); } }
      else { rewiggle(b,'wrong'); b.disabled=true; VO.sfx('no'); api.say('tryagain','Hmm, try again!',null,true); } };
    el.querySelectorAll('.opt').forEach(b=>b.onclick=()=>choose(b));
    solver(()=>{ const b=[...el.querySelectorAll('.opt')].find(x=>x.dataset.o===it.a&&!x.disabled); if(b) choose(b); }); };
  if(pg.intro) api.say(...pg.intro).then(()=>{}); show();
};

G.verse=(sc,pg,api)=>{
  const words=pg.chunks||pg.verse.split(/\s+/); const order=shuffle(words.map((w,i)=>i));
  const el=docScene(sc,pg,`${pg.chip?'':'<h3>Memory verse</h3>'}<div class="built" aria-live="polite"></div><div class="opts words">${order.map(i=>`<button type="button" class="tile w" data-i="${i}">${esc(words[i])}</button>`).join('')}</div><p class="ref">${esc(pg.ref||'')}</p>`);
  let next=0; const built=el.querySelector('.built');
  const tap=async b=>{ const i=+b.dataset.i; if(b.disabled) return;
    if(i===next||words[i]===words[next]){ b.disabled=true; b.classList.add('got'); built.insertAdjacentHTML('beforeend',`<span>${esc(words[next])}</span> `); next++; VO.sfx('note',next%7);
      if(next===words.length&&api.alive()&&!api.isDone()){ built.classList.add('whole'); await api.say(pg.id||'verse',`${pg.verse} ${pg.ref||''}`,null); if(pg.done) await api.say(...pg.done); api.done(); } }
    else { rewiggle(b,'wrong'); VO.sfx('no'); } };
  el.querySelectorAll('.w').forEach(b=>b.onclick=()=>tap(b));
  api.say(...(pg.intro||['verse-intro',`Our memory verse: ${pg.verse} ${pg.ref||''}. Now build it! Tap the words in order.`]));
  solver(()=>{ const b=[...el.querySelectorAll('.w:not(:disabled)')].find(x=>words[+x.dataset.i]===words[next]); if(b) tap(b); });
};

G.puzzle=(sc,pg,api)=>{
  let k=0;
  const show=()=>{ const it=pg.items[k]; const W=it.word.toUpperCase(); const letters=shuffle([...W].map((c,i)=>({c,i})));
    const el=docScene(sc,pg,`<div class="qcount">${k+1} / ${pg.items.length}</div>${picHTML(it.pic)}<p class="sent">${VO.render(it.clue)}</p><div class="slots">${[...W].map(()=>'<span></span>').join('')}</div><div class="opts letters">${letters.map(o=>`<button type="button" class="tile l" data-c="${o.c}">${o.c}</button>`).join('')}</div>`);
    api.say(it.id,it.say||it.clue); let n=0; const slots=[...el.querySelectorAll('.slots span')];
    const tap=async b=>{ if(b.disabled) return;
      if(b.dataset.c===W[n]){ b.disabled=true; b.classList.add('got'); slots[n].textContent=W[n]; n++; VO.sfx('note',n%7);
        if(n===W.length){ el.querySelector('.slots').classList.add('whole'); VO.sfx('win'); await api.say(it.id+'-a',it.after||`${it.word}!`,null); if(!api.alive()) return; k++; if(k<pg.items.length) show(); else { if(pg.done) await api.say(...pg.done); api.done(); } } }
      else { rewiggle(b,'wrong'); VO.sfx('no'); } };
    el.querySelectorAll('.l').forEach(b=>b.onclick=()=>tap(b));
    solver(()=>{ const b=[...el.querySelectorAll('.l:not(:disabled)')].find(x=>x.dataset.c===W[n]); if(b) tap(b); }); };
  if(pg.intro) api.say(...pg.intro); show();
};

G.truefalse=(sc,pg,api)=>{
  let k=0;
  const show=()=>{ const it=pg.items[k];
    const el=docScene(sc,pg,`<div class="qcount">${k+1} / ${pg.items.length}</div>${picHTML(it.pic)}<p class="sent">${VO.render(it.s)}</p><div class="opts tf"><button type="button" class="tile opt" data-v="1">True ✓</button><button type="button" class="tile opt" data-v="0">False ✗</button></div><p class="why" hidden></p>`);
    api.say(it.id,it.s+' True, or false?',it.s);
    const choose=async b=>{ if(b.disabled) return;
      if(!!+b.dataset.v===it.t){ el.querySelectorAll('.opt').forEach(x=>x.disabled=true); b.classList.add('got'); VO.sfx('win'); const w=el.querySelector('.why'); w.hidden=false; w.innerHTML=VO.render(it.why);
        await api.say(it.id+'-why',`${it.t?'True!':'False!'} ${it.why}`,null);
        if(!api.alive()) return; k++; if(k<pg.items.length) show(); else { if(pg.done) await api.say(...pg.done); api.done(); } }
      else { rewiggle(b,'wrong'); b.disabled=true; VO.sfx('no'); api.say('tryagain','Hmm, try again!',null,true); } };
    el.querySelectorAll('.opt').forEach(b=>b.onclick=()=>choose(b));
    solver(()=>{ const b=el.querySelector(`.opt[data-v="${it.t?1:0}"]`); if(b) choose(b); }); };
  if(pg.intro) api.say(...pg.intro); show();
};

G.think=(sc,pg,api)=>{
  const el=docScene(sc,pg,`<h3>${VO.render(pg.heading||'Think and talk')}</h3>${pg.qs.map(([id,q,hint],i)=>`<div class="think" data-i="${i}"><p class="para" tabindex="0" role="button">${VO.render(q)}</p>${hint?`<details><summary>A thought to start</summary><p>${VO.render(hint)}</p></details>`:''}</div>`).join('')}
    <div class="row"><button type="button" class="next ready doneRead">We talked about it ✓</button></div>`);
  el.querySelectorAll('.think .para').forEach((p,i)=>p.addEventListener('click',()=>api.say(...pg.qs[i].slice(0,2))));
  const finish=()=>{ if(api.alive()&&!api.isDone()) api.done(true); };
  el.querySelector('.doneRead').onclick=finish;
  api.say(...(pg.intro||['think','Talk about these questions with your family or your class. Tap a question to hear it.']));
  solver(finish);
};

/* ---------- shell ---------- */
const S={page:0,done:new Set(),stickers:new Set(),score:0};
let L=null, pageToken=0;
const ICON={
  speaker:'<svg viewBox="0 0 24 24"><path d="M4 9 H8 L13 5 V19 L8 15 H4Z" fill="currentColor"/><path d="M16 8 Q19 12 16 16 M18.5 5.5 Q23 12 18.5 18.5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',
  mute:'<svg viewBox="0 0 24 24"><path d="M4 9 H8 L13 5 V19 L8 15 H4Z" fill="currentColor"/><path d="M16 9 L21 15 M21 9 L16 15" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  back:'<svg viewBox="0 0 24 24"><path d="M15 5 L8 12 L15 19" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  home:'<svg viewBox="0 0 24 24"><path d="M3 11 L12 3 L21 11 M6 9 V20 H18 V9" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 20 V14 H14 V20" stroke="currentColor" stroke-width="2.4" fill="none"/></svg>',
};
function lineEl(){ return $('#line'); }
function talking(on){ const s=$('#selam'); s.classList.toggle('talking',on); s.innerHTML=selam(on); }
VO.onTalk=talking;
let last={id:'',text:''};
function say(id,text,show,shared){
  const gid=shared?id:`${L.id}.${id}`; last={id:gid,text,show}; lineEl().innerHTML=show?VO.render(show):VO.render(text);
  return VO.say(gid,text);
}
const gamePages=()=>L.pages.map((p,i)=>i).filter(i=>!['cover','finish','quiz'].includes(L.pages[i].game));
function renderStickers(){ $('#stickers').innerHTML=gamePages().map((i,n)=>`<span class="${S.stickers.has(i)?'got':''}">${S.stickers.has(i)?icon(L.pages[i].sticker||L.sticker||'adeyAbeba'):GEEZ[n]||''}</span>`).join(''); }
function renderDots(){ $('#dots').innerHTML=L.pages.map((p,i)=>`<i class="${i===S.page?'on':S.done.has(i)?'seen':''}"></i>`).join(''); }
function showEndButtons(){ if($('#againBtn')) return; const c=$('.controls');
  const a=document.createElement('button'); a.id='againBtn'; a.className='next'; a.type='button'; a.textContent='Play again'; a.onclick=()=>{ S.done.clear(); S.stickers.clear(); S.score=0; go(0); };
  const h=document.createElement('a'); h.id='homeBtn2'; h.className='next ready'; h.href='index.html#'+L.level; h.textContent='More lessons'; c.append(a,h); }
function go(i){
  S.page=Math.max(0,Math.min(L.pages.length-1,i)); const my=++pageToken; const p=L.pages[S.page];
  VO.stop(); const sc=$('#scene'); sc.innerHTML=''; sc.classList.remove('doc'); window.__solveStep=null; ['againBtn','homeBtn2'].forEach(id=>{ const e=$('#'+id); if(e) e.remove(); });
  const nb=$('#nextBtn'), pb=$('#prevBtn'); nb.classList.remove('ready'); pb.disabled=S.page===0;
  nb.hidden=['cover','quiz','finish'].includes(p.game);
  const api={ lesson:L, state:S,
    say:(id,t,show,shared)=>my===pageToken?say(id,t,show,shared):Promise.resolve(),
    show:(html)=>{ if(my===pageToken) lineEl().innerHTML=VO.render(html); },
    alive:()=>my===pageToken, isDone:()=>S.done.has(S.page),
    done:(quiet)=>{ if(my!==pageToken) return; S.done.add(S.page); renderDots();
      if(gamePages().includes(S.page)&&!S.stickers.has(S.page)){ S.stickers.add(S.page); renderStickers(); }
      if(!quiet){ confetti(); VO.sfx('win'); } nb.classList.add('ready'); if(p.game==='finish') showEndButtons(); },
    complete:()=>{ const pr=store.get('bk.progress',{}); pr[L.id]={done:true,stars:Math.max(S.score,(pr[L.id]||{}).stars||0),at:Date.now()}; store.set('bk.progress',pr); },
    next:()=>go(S.page+1) };
  try{ G[p.game](sc,p,api); }catch(e){ console.error(e); sc.innerHTML=`<p class="err">This page has a problem: ${e.message}</p>`; }
  if(p.chip) sc.insertAdjacentHTML('beforeend',`<div class="chip">${VO.render(p.chip)}</div>`);
  const meta=(window.BK_CURR||[]).find(c=>c.id===L.id)||{};
  $('#parentText').innerHTML=(p.parent||'')+(S.page===0?`<p><b>Objective:</b> ${meta.objective||''}${meta.refs?`<br><b>Reference:</b> ${meta.refs}`:''}</p>`:'');
  renderDots(); renderStickers();
  if(S.done.has(S.page)) nb.classList.add('ready');
}
window.BKLesson=function(def){ L=def; };
window.BKPlay=function(){
  if(!L){ $('#scene').innerHTML='<p class="err">Lesson not found.</p>'; return; }
  const meta=(window.BK_CURR||[]).find(c=>c.id===L.id)||{};
  L.level=meta.level||1;
  if(!L.pages.some(p=>p.game==='finish')) L.pages.push({game:'finish'});
  document.title=VO.plain(L.title);
  $('#title').innerHTML=VO.render(L.title); $('#sub').innerHTML=`${L.am?`<span class="am">${L.am}</span> · `:''}Level ${GEEZ[L.level-1]} · ${meta.month||''} week ${meta.week||''}`;
  $('#homeBtn').href='index.html#'+L.level;
  $('#logo').innerHTML=cross();
  $('#source').innerHTML=(meta.text||[]).map(t=>`<p>${t.replace(/[<>&]/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;'}[c]))}</p>`).join('');
  $('#credit').innerHTML=`Adapted from the EOTC English Sunday school lessons, Level ${L.level}, “${meta.title||''}”. Lessons compiled by Kesis Solomon Mulugeta for Bole Debre Salem Medhanealem Church. Amharic and Ge'ez words wait for recorded voices; until then some stay silent.`;
  const sb=$('#soundBtn'); const paint=()=>{ sb.innerHTML=VO.sound?ICON.speaker:ICON.mute; sb.setAttribute('aria-pressed',VO.sound); sb.setAttribute('aria-label',VO.sound?'Sound on':'Sound off'); };
  sb.onclick=()=>{ VO.sound=!VO.sound; if(!VO.sound) VO.stop(); paint(); }; paint();
  $('#prevBtn').innerHTML=ICON.back; $('#replayBtn').innerHTML=ICON.speaker; $('#homeBtn').innerHTML=ICON.home;
  $('#replayBtn').onclick=()=>{ if(last.text) VO.say(last.id,last.text); };
  $('#nextBtn').onclick=()=>go(S.page+1); $('#prevBtn').onclick=()=>go(S.page-1);
  document.addEventListener('keydown',e=>{ if(e.target.closest&&e.target.closest('[role=button],button,summary,a')) return; const nb=$('#nextBtn'); if(e.key==='ArrowRight'&&!nb.hidden) nb.click(); if(e.key==='ArrowLeft'&&!$('#prevBtn').disabled) $('#prevBtn').click(); });
  go(0);
};
window.BKGames=G; window.BKgo=i=>go(i);
})();
