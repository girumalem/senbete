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

// home screen and the Creation prototype (lessons/creation.html, Level I Sep wk2-4). Text here is the recording script;
// creation.html keeps English respellings for its device-voice fallback.
add('home.hello',"[[selam]]! I'm Selam. Pick a lesson, and let's learn and play together!",null,true);
const CR={cover:"[[selam]]! I'm Selam. Who made the world, and everything in it? Let's find out together. Tap Let's play!",
 'd1-intro':"Oh! It is dark everywhere. Tap the dark five times, and say: Let there be light!",
 'd1-light':"Let there be light! And there was light! God called the light day, and the darkness night.",
 'd1-angels':"On this day, God also made the angels in heaven. Tap each angel to hear it sing!",
 'd1-done':"The angels praise God! You finished day one, and you earned a sticker!",
 'd2-intro':"Everything is water! Pull the water down to make room for the sky. Drag the gold button down.",
 'd2-sky':"God said: Let there be a sky! And the sky appeared. Now tap the sky to make three clouds.",
 'd2-done':"Beautiful clouds! God called the sky heaven. You finished day two!",
 'd3-intro':"The earth is covered with water. Tap the water three times to say: Let dry land appear!",
 'd3-land':"Dry land! Now drag a plant from the box onto the land. Plant four!",
 'd3-done':"Trees, enset and coffee! Fruit and plants grew on the earth. You finished day three!",
 'd4-intro':"The sky is empty. Drag the sun up into the sky!",
 'd4-sun':"The sun gives light in the day! Now drag the moon up for the night.",
 'd4-moon':"The moon shines at night. Tap the sky to light up six stars!",
 'd4-done':"Sun for the day, moon and stars for the night. You finished day four! Tap the moon or the sky to switch day and night.",
 'd5-intro':"God said: Let the waters be filled with fish, and let birds fly in the sky! Tap the water for fish, and the sky for birds.",
 'd5-done':"Fish in the water and birds in the sky! You finished day five!",
 'd6-intro':"God made the animals! Some are hiding behind the bushes. Tap the bushes to find all five!",
 'a-lion':"A lion! In Amharic we say [[anbessa]].", 'a-cow':"A cow! In Amharic we say [[lam]].", 'a-sheep':"A sheep! In Amharic we say [[beg]].",
 'a-walia':"A walia ibex! In Amharic we say [[walya]].", 'a-gelada':"A gelada monkey! In Amharic we say [[chilada]].",
 'd6-done':"You found them all! God made every animal, just by speaking. Isn't that amazing?",
 'd7-intro':"Then God made Adam with his own hands, and gave him life. And God made Eve. Bring the animals to Adam, so he can name them!",
 'adam-sheep':"Adam says: you are a sheep!", 'adam-lion':"Adam says: you are a lion!", 'adam-cow':"Adam says: you are a cow!",
 'd7-done':"Adam named all the animals. Adam and Eve are God's children. We are God's children too, because God is our Father!",
 q1:"What did God make on the first day?", q2:"How did God make the world? Did He speak, use a hammer, or paint it?",
 q3:"What did God put in the sky to shine at night?", q4:"How did God make Adam?", q5:"Who gave names to all the animals?",
 'fin-1':"You did it! You learned how God made everything. Now let's pray with the sign of the cross. Tap the glowing dot."};
Object.entries(CR).forEach(([k,t])=>add(k,t,'creation'));
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
