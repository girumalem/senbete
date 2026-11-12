/* Story games: richer, story-specific activities that lessons can mix in, so each lesson does not follow one template.
     choose   a decision in the story: the child picks what a character says or does, and hears what follows
     collect  tap (or drag) things into a pile, counted in Ge'ez numerals (twelve stones, baskets of bread)
     repeat   press a big action button again and again as the story moves on (march round Jericho, dip seven times)
     hold     press and hold to keep something going while a meter fills (the sun stands still, Moses' raised arms)
     sort     sort sentences or pictures into two baskets (faith or fear, true or false prophets)
   Every page exposes window.__solveStep for tools/autoplay.js. */
(function(){
const G=window.BKGames, K=window.BKKit; if(!G||!K) return;
const {scene,propHTML,P,place,drag,hint,clearHint,ring,apply,addHit,confetti,sleep,centerOf,solver,GEEZ,VO,icon,rewiggle}=K;
const css=`
.choices{position:absolute;left:0;right:0;top:13%;display:flex;gap:clamp(8px,2vw,18px);justify-content:center;padding:0 3%}
.choice,.bigact,.bin{font-family:var(--display);border:0;border-radius:20px;background:#fff;color:#18234F;box-shadow:0 6px 0 #C9CFE0;cursor:pointer;display:flex;align-items:center;gap:.5em;text-align:left;line-height:1.2}
.choice{flex:1 1 0;max-width:340px;padding:.55em .8em;font-size:clamp(.8rem,2.1vw,1.1rem)}
.choice svg,.bin svg{width:clamp(34px,7vw,64px);height:auto;flex:none;aspect-ratio:1}
.choice:hover,.bin:hover{box-shadow:0 6px 0 #E2A62B}
.choice.right{background:#DFF3E6;box-shadow:0 6px 0 #2F7A4E;animation:yay .5s}
.choice.wrong,.bin.wrong{animation:shake .4s}
.choice:disabled{opacity:.5;cursor:default}
.bigact{position:absolute;left:50%;bottom:5%;transform:translateX(-50%);padding:.4em 1.2em;font-size:clamp(1rem,3vw,1.6rem);background:#E2A62B;color:#1A1405;box-shadow:0 6px 0 #9C6A08;animation:bigpulse 1.3s ease-in-out infinite}
.bigact svg{width:clamp(36px,7vw,64px);height:auto}
.bigact.final{background:#B3322A;color:#fff;box-shadow:0 6px 0 #6E1A14}
.bigact:disabled{animation:none;opacity:.7}
.tally{position:absolute;right:12px;top:12px;display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end;max-width:60%}
.tally i{font-style:normal;width:clamp(22px,4vw,34px);height:clamp(22px,4vw,34px);border-radius:50%;background:rgba(10,15,44,.45);color:#fff8;display:grid;place-items:center;font-size:clamp(.7rem,1.8vw,1rem)}
.tally i.on{background:#E2A62B;color:#1A1405;animation:yay .4s}
.meter{position:absolute;left:50%;transform:translateX(-50%);bottom:5%;width:min(70%,460px);height:26px;border-radius:999px;background:rgba(10,15,44,.55);overflow:hidden;box-shadow:0 0 0 3px #fff8}
.meter i{position:absolute;inset:0;width:0;background:linear-gradient(90deg,#E2A62B,#FFE18A)}
.meter span{position:absolute;inset:0;display:grid;place-items:center;color:#fff;font-weight:700;font-size:.85rem;text-shadow:0 1px 2px #000}
.sortwrap{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:clamp(48px,10%,70px) 3% 4%}
.sortcard{background:#FFF8E6;color:#18234F;border-radius:18px;box-shadow:0 6px 0 #C9B48A;padding:.7em 1.1em;font-family:var(--display);font-size:clamp(1rem,2.8vw,1.5rem);text-align:center;max-width:min(90%,560px);display:flex;align-items:center;gap:.6em;transition:transform .45s,opacity .45s}
.sortcard svg{width:clamp(40px,8vw,72px);height:auto;flex:none}
.sortcard.fly0{transform:translate(-40%,120%) scale(.4);opacity:0}.sortcard.fly1{transform:translate(40%,120%) scale(.4);opacity:0}
.bins{display:flex;gap:clamp(10px,3vw,30px);width:100%;justify-content:center}
.bin{flex:1 1 0;max-width:300px;padding:.5em .8em;font-size:clamp(.9rem,2.4vw,1.25rem);flex-direction:column;text-align:center}
.bin em{font-style:normal;font-size:.8em;opacity:.7}
`;
document.head.insertAdjacentHTML('beforeend',`<style>${css}</style>`);
const tally=(sc,N)=>{ sc.insertAdjacentHTML('beforeend',`<div class="tally">${[...Array(N)].map((_,i)=>`<i>${GEEZ[i]||i+1}</i>`).join('')}</div>`); return n=>sc.querySelectorAll('.tally i').forEach((e,i)=>e.classList.toggle('on',i<n)); };
const goodOf=o=>o.good!==false;

/* choose: {bg, props, before?, prompt:[id,t], options:[{label, art?, good?:bool, then?:{scene change}, undo?:{...}, say:[id,t]}], done?:[id,t]}
   An option with good:false plays its consequence, then is crossed out so the child tries another. */
G.choose=(sc,pg,api)=>{
  const svg=scene(sc,pg);
  sc.insertAdjacentHTML('beforeend',`<div class="choices">${pg.options.map((o,i)=>`<button type="button" class="choice" data-i="${i}">${o.art?icon(o.art):''}<span>${VO.render(o.label)}</span></button>`).join('')}</div>`);
  const btns=[...sc.querySelectorAll('.choice')]; let busy=false;
  if(pg.before) apply(svg,pg.before);
  if(pg.prompt) api.say(...pg.prompt);
  const pick=async i=>{ if(busy||api.isDone()) return; const o=pg.options[i], b=btns[i]; if(b.disabled) return; busy=true;
    if(o.then) apply(svg,o.then);
    if(goodOf(o)){ btns.forEach(x=>x.disabled=x!==b); b.classList.add('right'); VO.sfx('glory');
      if(o.say) await api.say(...o.say); if(pg.done) await api.say(...pg.done); if(api.alive()&&!api.isDone()) api.done(); }
    else { b.classList.add('wrong'); VO.sfx('no'); if(o.say) await api.say(...o.say); if(!api.alive()) return; if(o.undo) apply(svg,o.undo); b.disabled=true; busy=false; } };
  btns.forEach((b,i)=>b.onclick=()=>pick(i));
  solver(()=>{ const i=pg.options.findIndex((o,j)=>goodOf(o)&&!btns[j].disabled); if(i>=0) pick(i); });
};

/* collect: {bg, props, items:[{art,x,y,s, say?}], pile:{x,y,dx,dy,base,s} or slots:[[x,y,s]], intro, at?:{n:{scene change}}, after?, done}
   Tap or drag each item; it flies to the next place on the pile. */
G.collect=(sc,pg,api)=>{
  const svg=scene(sc,pg,`<g class="items">${pg.items.map((it,i)=>propHTML({...it,id:'c'+i,cls:'item'})).join('')}</g>`);
  const N=pg.items.length; const mark=tally(sc,N); let n=0; const got=new Set();
  const slots=pg.slots||(()=>{ const q=pg.pile, out=[]; let row=0, cap=q.base||4; while(out.length<N){ const k=Math.min(cap,N-out.length); for(let j=0;j<k;j++) out.push([q.x+(j-(k-1)/2)*q.dx, q.y-row*q.dy, q.s||.5]); row++; cap=Math.max(1,cap-1); } return out; })();
  const els=[...svg.querySelectorAll('.items .prop')];
  if(els[0]){ const c=centerOf(svg,els[0]); hint(svg,c.x,c.y); }
  if(pg.intro) api.say(...pg.intro);
  const land=async i=>{ if(got.has(i)||api.isDone()) return; got.add(i); clearHint(svg); const el=els[i], it=pg.items[i];
    place(el,...slots[n]); el.style.pointerEvents='none'; n++; mark(n); VO.sfx(pg.sfx||'note',n);
    if(pg.at&&pg.at[n]) apply(svg,pg.at[n]);
    if(it.say) await api.say(...it.say);
    if(n===N&&api.alive()&&!api.isDone()){ if(pg.after) apply(svg,pg.after); confetti(30); if(pg.done) await api.say(...pg.done); api.done(); } };
  els.forEach((el,i)=>{ const it=pg.items[i]; addHit(el,it.art);
    drag(el,svg,{ move:p=>{ if(!got.has(i)){ clearHint(svg); place(el,p.x,p.y,(it.s||1)*1.08); } }, drop:()=>land(i), tap:()=>land(i) }); });
  solver(()=>{ const i=pg.items.findIndex((_,j)=>!got.has(j)); if(i>=0) land(i); });
};

/* repeat: {bg, props, button:{label,art}, steps:[{scene change, say?:[id,t]}], final?:{label, art?, ...scene change, say}, intro, done}
   One press per step; the tally counts the presses. With final, the button turns red for the last big action. */
G.repeat=(sc,pg,api)=>{
  const svg=scene(sc,pg); const N=pg.steps.length; const mark=tally(sc,N); let n=0, busy=false, fin=false;
  const btnHTML=(b)=>`${b.art?icon(b.art):''}<span>${VO.render(b.label)}</span>`;
  sc.insertAdjacentHTML('beforeend',`<button type="button" class="bigact">${btnHTML(pg.button)}</button>`);
  const btn=sc.querySelector('.bigact');
  const intro=pg.intro?api.say(...pg.intro):Promise.resolve();
  const press=async()=>{ if(busy||api.isDone()) return; busy=true; btn.disabled=true;
    if(n<N){ const st=pg.steps[n]; apply(svg,st); n++; mark(n); VO.sfx(pg.sfx||'note',n);
      if(st.say) await api.say(...st.say); else await sleep(650);
      if(!api.alive()) return;
      if(n===N){ if(pg.final){ btn.classList.add('final'); btn.innerHTML=btnHTML(pg.final); if(pg.final.prompt) await api.say(...pg.final.prompt); } else { if(pg.done) await api.say(...pg.done); api.done(); return; } } }
    else if(pg.final&&!fin){ fin=true; apply(svg,pg.final); btn.hidden=true; if(pg.final.say) await api.say(...pg.final.say); if(pg.done) await api.say(...pg.done); if(api.alive()) api.done(); return; }
    busy=false; btn.disabled=false; };
  btn.onclick=press;
  solver(press);
};

/* hold: {bg, props, target:'propId', mover?:{id, up:[x,y,s], down:[x,y,s]}, ms, label, intro, at:[{p:0.5, ...scene change, say?}], after?, done}
   Press and hold anywhere on the scene (or Space): the meter fills; let go and the mover sinks back and the meter stops. */
G.hold=(sc,pg,api)=>{
  const svg=scene(sc,pg); const tgt=P(svg,pg.target); const mv=pg.mover?P(svg,pg.mover.id):null;
  if(mv) mv.style.transition='none';
  sc.insertAdjacentHTML('beforeend',`<div class="meter"><i></i><span>${VO.render(pg.label||'Keep holding!')}</span></div>`);
  const bar=sc.querySelector('.meter i'); let v=0, h=0, down=false, last=performance.now(), fired=new Set(), ended=false;
  if(tgt){ if(tgt.dataset.art) addHit(tgt,JSON.parse(tgt.dataset.art)); ring(svg,tgt); }
  if(pg.intro) api.say(...pg.intro);
  const set=on=>{ if(ended) return; down=on; if(on){ clearHint(svg); if(tgt) rewiggle(tgt); } };
  svg.addEventListener('pointerdown',e=>{ e.preventDefault(); set(true); });
  ['pointerup','pointercancel','pointerleave'].forEach(t=>svg.addEventListener(t,()=>set(false)));
  const kd=e=>{ if(e.code==='Space'){ e.preventDefault(); set(true); } }, ku=e=>{ if(e.code==='Space') set(false); };
  document.addEventListener('keydown',kd); document.addEventListener('keyup',ku);
  const finish=async()=>{ if(ended) return; ended=true; down=false; document.removeEventListener('keydown',kd); document.removeEventListener('keyup',ku);
    if(pg.after) apply(svg,pg.after); if(pg.done) await api.say(...pg.done); if(api.alive()&&!api.isDone()) api.done(); };
  const check=()=>{ (pg.at||[]).forEach((a,i)=>{ if(v>=a.p&&!fired.has(i)){ fired.add(i); apply(svg,a); if(a.say) api.say(...a.say); } }); bar.style.width=(v*100)+'%'; if(v>=1) finish(); };
  const tick=t=>{ if(!api.alive()){ document.removeEventListener('keydown',kd); document.removeEventListener('keyup',ku); return; }
    const dt=Math.min(100,t-last); last=t;
    if(!ended){ if(down){ h=Math.min(1,h+dt/350); v=Math.min(1,v+dt/(pg.ms||7000)); } else h=Math.max(0,h-dt/(pg.fall||2600));
      if(mv){ const {up,down:dn}=pg.mover; const k=1-Math.pow(1-h,2); place(mv,dn[0]+(up[0]-dn[0])*k,dn[1]+(up[1]-dn[1])*k,(dn[2]??1)+((up[2]??1)-(dn[2]??1))*k); }
      check(); }
    requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
  solver(()=>{ h=1; v=Math.min(1,v+.34); check(); });
};

/* sort: {bins:[{label,art},{label,art}], items:[{t, b:0|1, art?, why?:[id,t]}], intro, done}
   One card at a time; tap the right basket. A wrong basket shakes and the reason is read. */
G.sort=(sc,pg,api)=>{
  scene(sc,{bg:pg.bg||'quiz',props:[]});
  sc.insertAdjacentHTML('beforeend',`<div class="sortwrap"><div class="sortcard"></div><div class="bins">${pg.bins.map((b,i)=>`<button type="button" class="bin" data-b="${i}">${b.art?icon(b.art):''}<span>${VO.render(b.label)}</span><em>0</em></button>`).join('')}</div></div>`);
  const card=sc.querySelector('.sortcard'), bins=[...sc.querySelectorAll('.bin')]; const cnt=[0,0]; let k=0, busy=false;
  const show=()=>{ const it=pg.items[k]; card.className='sortcard'; card.innerHTML=`${it.art?icon(it.art):''}<span>${VO.render(it.t)}</span>`; if(it.say) api.say(...it.say); };
  (async()=>{ if(pg.intro) await api.say(...pg.intro); })(); show();
  const pick=async b=>{ if(busy||api.isDone()||k>=pg.items.length) return; const it=pg.items[k]; busy=true;
    if(b===it.b){ cnt[b]++; bins[b].querySelector('em').textContent=cnt[b]; card.classList.add('fly'+b); VO.sfx('note',k+2); await sleep(480); k++;
      if(k===pg.items.length){ card.style.visibility='hidden'; if(pg.done) await api.say(...pg.done); if(api.alive()) api.done(); return; }
      show(); }
    else { rewiggle(bins[b],'wrong'); VO.sfx('no'); if(it.why) await api.say(...it.why); else await api.say('tryagain','Hmm, try again!',null,true); }
    busy=false; };
  bins.forEach((x,i)=>x.onclick=()=>pick(i));
  solver(()=>pick(pg.items[k]?pg.items[k].b:0));
};
})();
