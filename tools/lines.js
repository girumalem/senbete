/* Lists every narration line the app can speak, with the exact id the player looks up.
   Usage: node tools/lines.js            -> writes audio/lines.json and audio/lines.csv
   A line's recording goes in audio/lines/<id>.mp3 and its id is added to BK_AUDIO.lines in data/audio.js.
   "text" keeps the [[word]] markup (Amharic / Ge'ez words from data/lexicon.js); "plain" uses the Latin spelling.
   Lessons in lessons/creation.html (L1-sep2..4) are not covered: that prototype has its own lines. */
const fs=require('fs'), path=require('path'), vm=require('vm');
const root=path.join(__dirname,'..'); const W={};
const load=f=>vm.runInNewContext(fs.readFileSync(path.join(root,f),'utf8'),{window:W});
load('data/lexicon.js'); load('data/songs.js'); load('data/curriculum.js');
const LEX=W.BK_LEX, SONGS=W.BK_SONGS;
const plain=t=>t.replace(/\[\[([\w-]+)\]\]/g,(_,k)=>LEX[k]?LEX[k].latin:k).replace(/\*/g,'');
const out=new Map();
const add=(id,text,lesson,shared)=>{ if(!id||!text) return; const gid=shared?id:`${lesson}.${id}`;
  const prev=out.get(gid); if(prev&&prev.text!==text) console.warn('id reused with different text:',gid);
  if(!prev) out.set(gid,{id:gid,lesson:shared?'shared':lesson,text,plain:plain(text),words:[...text.matchAll(/\[\[([\w-]+)\]\]/g)].map(m=>m[1])}); };
// shared lines built into the player
['Yes! Well done!','That is right!','Wonderful!'].forEach((t,i)=>add('yes'+i,t,null,true));
add('tryagain','Hmm, try again!',null,true);
[['Forehead','cross-1'],['Chest','cross-2'],['Left shoulder','cross-3'],['Right shoulder','cross-4']].forEach(([w,k],i)=>add('cross-'+i,`${w}. [[${k}]]`,null,true));
add('amen','[[sign-of-cross]] [[amen]]',null,true);
const files=fs.readdirSync(path.join(root,'data/lessons')).filter(f=>/^L\d-\w+\.js$/.test(f)).sort();
for(const f of files){ let L; vm.runInNewContext(fs.readFileSync(path.join(root,'data/lessons',f),'utf8'),{BKLesson:x=>{L=x}});
  const A=(arr)=>arr&&add(arr[0],arr[1],L.id);
  for(const pg of L.pages){
    A(pg.say); A(pg.intro); A(pg.done);
    (pg.beats&&Array.isArray(pg.beats)?pg.beats:[]).forEach(b=>A(b.say));
    (pg.items||[]).forEach(it=>A(it.say)); (pg.spots||[]).forEach(s=>A(s.say)); (pg.cards||[]).forEach(c=>A(c.say));
    if(pg.game==='order') add('order-again',pg.again||'Hmm, what happened before that?',L.id);
    if(pg.game==='quiz') pg.questions.forEach(q=>add(q.id,q.q,L.id));
    if(pg.game==='song'){ const s=SONGS[pg.song]||{meaning:''}; if(!pg.intro) add('song-intro',`Here is our song! It means: ${s.meaning} Tap the kebero drum to play along with your teacher.`,L.id);
      if(!pg.done) add('song-done','Beautiful! Keep singing this song with your family this week.',L.id); }
    if(pg.game==='cross'&&!pg.intro) add('cross-intro','Let\'s pray with the sign of the cross. Cross your fingers like this, and touch the glowing dots one by one.',L.id);
  }
  if(!L.pages.some(p=>p.game==='finish')) add('finish',`You did it! You finished ${plain(L.title)} and earned a sticker! Tap Play again, or go back to pick another lesson.`,L.id);
}
const rows=[...out.values()];
fs.mkdirSync(path.join(root,'audio'),{recursive:true});
fs.writeFileSync(path.join(root,'audio/lines.json'),JSON.stringify(rows,null,1)+'\n');
const q=s=>'"'+String(s).replace(/"/g,'""')+'"';
fs.writeFileSync(path.join(root,'audio/lines.csv'),'id,lesson,text,plain,words\n'+rows.map(r=>[r.id,r.lesson,r.text,r.plain,r.words.join(' ')].map(q).join(',')).join('\n')+'\n');
console.log(rows.length,'lines from',files.length,'lessons ->',path.join(root,'audio/lines.json'));
