/* Plays every page of a lesson in a headless browser, with sound off, and reports pages that could not be finished.
   Usage: node tools/autoplay.js http://localhost:8765 L1-oct4 [more ids] */
const {chromium}=require('playwright');
(async()=>{
  const [,,base,...ids]=process.argv; const b=await chromium.launch(); let bad=0;
  for(const id of ids){
    const p=await b.newPage({viewport:{width:1000,height:800}}); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
    await p.goto(`${base}/lesson.html?id=${id}`); await p.waitForTimeout(400);
    await p.evaluate(()=>{ BKVoice.sound=false; });
    const n=await p.evaluate(()=>document.querySelectorAll('#dots i').length); const res=[];
    for(let i=1;i<n;i++){
      await p.evaluate(i=>BKgo(i),i); await p.waitForTimeout(300);
      const game=await p.evaluate(()=>{ const d=document.querySelectorAll('#dots i'); return [...d].findIndex(x=>x.classList.contains('on')); });
      let ok=false; const t0=Date.now();
      while(Date.now()-t0<45000){
        const st=await p.evaluate(()=>({ready:document.querySelector('#nextBtn').classList.contains('ready')||!!document.querySelector('#againBtn'), page:[...document.querySelectorAll('#dots i')].findIndex(x=>x.classList.contains('on'))}));
        if(st.ready||st.page!==i){ ok=true; break; }
        const box=await p.locator('#scene').boundingBox();
        const acted=await p.evaluate(()=>{
          const svg=document.querySelector('#scene svg'); if(!svg) return 'none';
          const r=document.querySelector('.ring circle'); if(r){ const b=r.getBoundingClientRect(); return ['click',b.left+b.width/2,b.top+b.height/2]; }
          const card=[...document.querySelectorAll('.card:not(.right):not(.wrong):not([disabled])')][0]; if(card){ card.classList.add('tried'); const b=card.getBoundingClientRect(); return ['click',b.left+b.width/2,b.top+b.height/2]; }
          const pt=[...document.querySelectorAll('.pt.show')].find(x=>x.querySelector('.glow').style.display!=='none'); if(pt){ const b=pt.getBoundingClientRect(); return ['click',b.left+b.width/2,b.top+b.height/2]; } if(document.querySelector('.pt')) return 'wait';
          const item=[...document.querySelectorAll('.items .prop')].find(e=>e.style.pointerEvents!=='none'); const zone=document.querySelector('.zone');
          if(item&&zone){ const a=item.getBoundingClientRect(), z=zone.getBoundingClientRect(); return ['drag',a.left+a.width/2,a.top+a.height/2,z.left+z.width/2,z.top+z.height/2]; }
          const spot=[...document.querySelectorAll('.spot')].find(s=>!s.querySelector('.hid.show')); if(spot){ const b=spot.getBoundingClientRect(); return ['click',b.left+b.width/2,b.top+b.height*.8]; }
          const drum=document.querySelector('.prop[data-id="drum"]'); if(drum){ const b=drum.getBoundingClientRect(); return ['click',b.left+b.width/2,b.top+b.height/2]; }
          return 'area'; });
        if(acted[0]==='click') await p.mouse.click(acted[1],acted[2]);
        else if(acted[0]==='drag'){ await p.mouse.move(acted[1],acted[2]); await p.mouse.down(); await p.mouse.move(acted[1]+20,acted[2]+20,{steps:3}); await p.mouse.move(acted[3],acted[4],{steps:8}); await p.mouse.up(); }
        else if(acted==='area'){ // tap many: spread taps across the scene
          for(const [fx,fy] of [[.2,.3],[.5,.25],[.8,.35],[.35,.75],[.65,.8],[.5,.5],[.1,.9],[.9,.9]]) await p.mouse.click(box.x+box.width*fx,box.y+box.height*fy);
        }
        await p.waitForTimeout(acted==='area'?600:900);
      }
      res.push(ok?'✓':'✗'+i); if(!ok) bad++; if(process.env.V) console.log(' page',i,ok?'ok':'STUCK',Math.round((Date.now()-t0)/1000)+'s');
    }
    console.log(id,res.join(' '),errs.length?'ERR '+errs.join(' | '):''); await p.close();
  }
  await b.close(); process.exit(bad?1:0);
})();
