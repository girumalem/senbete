/* Narration, pronunciation and sound effects.
   Text markup used in every spoken line:
     [[key]]   an Amharic / Ge'ez word from data/lexicon.js
     *bold*    shown in bold on screen, spoken normally
   Playback order for a line with id L:
     audio/lines/L.mp3 if listed in data/audio.js (whole line recorded)
     otherwise the line is split into pieces: English text goes to the device English voice (ElevenLabs clips later),
     each [[word]] plays its own clip, an Amharic device voice, or its respelling (Amharic only). Ge'ez stays silent without a clip.
   Latin transliterations are never handed to the English voice. */
(function(){
const LEX=window.BK_LEX||{};
const AUD=window.BK_AUDIO||{words:[],lines:[],songs:[]};
const has=(kind,k)=>(AUD[kind]||[]).includes(k);
const V={sound:true,amVoice:null,enVoice:null,onTalk:null};
const canSpeak='speechSynthesis' in window;

function pickVoices(){ if(!canSpeak) return; const vs=speechSynthesis.getVoices(); if(!vs.length) return;
  V.amVoice=vs.find(v=>/^am([-_]|$)/i.test(v.lang))||null;
  const en=vs.filter(v=>/^en[-_]?(US|GB)?/i.test(v.lang));
  V.enVoice=en.find(v=>/natural|neural|samantha|aria|jenny|google us english/i.test(v.name))||en[0]||null; }
if(canSpeak){ pickVoices(); try{ speechSynthesis.addEventListener('voiceschanged',pickVoices); }catch(e){} }

const esc=s=>s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
/* display html for a line */
function render(text){
  return esc(text).replace(/\[\[([\w-]+)\]\]/g,(_,k)=>{ const w=LEX[k]; if(!w) return k; return `<span class="am" lang="${w.lang==='gez'?'gez':'am'}">${w.fidel}</span> <span class="tr">${w.latin}</span>`; })
    .replace(/\*([^*]+)\*/g,'<b>$1</b>');
}
/* plain English for the parents' text / captions */
function plain(text){ return text.replace(/\[\[([\w-]+)\]\]/g,(_,k)=>LEX[k]?LEX[k].latin:k).replace(/\*/g,''); }
/* pieces to play */
function pieces(text){
  const out=[]; const re=/\[\[([\w-]+)\]\]/g; let m,last=0;
  const pushEn=t=>{ t=t.replace(/\*/g,'').replace(/\s+/g,' '); if(!t.trim()) return; const p=out[out.length-1]; if(p&&p.kind==='en') p.text+=t; else out.push({kind:'en',text:t}); };
  while((m=re.exec(text))){ pushEn(text.slice(last,m.index)); last=re.lastIndex; const k=m[1], w=LEX[k];
    if(!w){ continue; }
    if(has('words',k)){ out.push({kind:'clip',src:`${window.BK_AUDIO_BASE||''}audio/words/${k}.mp3`}); continue; }
    if(w.lang!=='gez'&&V.amVoice){ out.push({kind:'am',text:w.fidel}); continue; }
    if(w.lang!=='gez'&&w.say){ pushEn(' '+w.say+' '); continue; }
    out.push({kind:'gap'}); }
  pushEn(text.slice(last));
  return out;
}

let token=0, curAudio=null;
function stop(){ token++; try{canSpeak&&speechSynthesis.cancel()}catch(e){} if(curAudio){try{curAudio.pause()}catch(e){} curAudio=null} talk(false); }
function talk(on){ V.onTalk&&V.onTalk(on); }
function playClip(src,my){ return new Promise(res=>{ if(my!==token) return res(); const a=new Audio(src); curAudio=a; let done=false; const end=()=>{ if(done) return; done=true; res(); }; a.onended=end; a.onerror=end; a.play().catch(end); setTimeout(end,20000); }); }
function speak(text,voice,lang,my){ return new Promise(res=>{ if(my!==token||!canSpeak) return setTimeout(res, canSpeak?0:Math.max(900,text.length*55));
  let done=false; const end=()=>{ if(done) return; done=true; res(); };
  try{ const u=new SpeechSynthesisUtterance(text); if(voice) u.voice=voice; u.lang=lang; u.rate=lang==='en-US'?.92:.85; u.pitch=lang==='en-US'?1.15:1; u.onend=end; u.onerror=end; speechSynthesis.speak(u); setTimeout(end,Math.max(2500,text.length*90)+2500); }catch(e){ setTimeout(end,1200); } }); }

/* say(id, text) -> Promise resolved when finished (or cut off) */
async function say(id,text){
  stop(); const my=token;
  const est=Math.max(1400,plain(text).length*60);
  if(!V.sound){ await new Promise(r=>setTimeout(r,Math.min(est,2200))); return; }
  talk(true);
  try{
    if(id&&has('lines',id)) await playClip(`${window.BK_AUDIO_BASE||''}audio/lines/${id}.mp3`,my);
    else for(const p of pieces(text)){ if(my!==token) break;
      if(p.kind==='en') await speak(p.text,V.enVoice,'en-US',my);
      else if(p.kind==='am') await speak(p.text,V.amVoice,V.amVoice.lang,my);
      else if(p.kind==='clip') await playClip(p.src,my);
      else await new Promise(r=>setTimeout(r,250)); }
  }finally{ if(my===token) talk(false); }
}
/* a recorded song if one exists */
function songSrc(id){ return has('songs',id)?`${window.BK_AUDIO_BASE||''}audio/songs/${id}.mp3`:null; }
function playSong(id){ stop(); const src=songSrc(id); if(!src) return Promise.resolve(false); const my=token; talk(true); return playClip(src,my).then(()=>{ if(my===token) talk(false); return true; }); }

/* ---------- sound effects (tiny synth, no files) ---------- */
let ac; const rnd=(a,b)=>a+Math.random()*(b-a);
function tone(f,t0,dur,type='triangle',vol=.15){ const t=ac.currentTime+t0, o=ac.createOscillator(), g=ac.createGain(); o.type=type; o.frequency.setValueAtTime(f,t); g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(vol,t+.02); g.gain.exponentialRampToValueAtTime(.001,t+dur); o.connect(g).connect(ac.destination); o.start(t); o.stop(t+dur+.05); return o; }
const PENTA=[523.25,587.33,659.25,783.99,880,1046.5,1174.66];
function sfx(kind,n=0){ if(!V.sound) return; try{ ac=ac||new (window.AudioContext||window.webkitAudioContext)(); if(ac.state==='suspended') ac.resume();
  if(kind==='pop') tone(300+n*80,0,.18,'sine',.2);
  if(kind==='note') tone(PENTA[n%PENTA.length],0,.7,'triangle',.18);
  if(kind==='sparkle') [0,1,2].forEach(i=>tone(1400+i*300+rnd(0,200),i*.05,.25,'sine',.07));
  if(kind==='glory') [523.25,659.25,783.99,1046.5].forEach((f,i)=>tone(f,i*.12,1.2,'triangle',.14));
  if(kind==='rumble'){ const o=tone(70,0,.6,'sawtooth',.12); o.frequency.exponentialRampToValueAtTime(140,ac.currentTime+.5); }
  if(kind==='whoosh'){ const o=tone(200,0,.4,'sine',.12); o.frequency.exponentialRampToValueAtTime(900,ac.currentTime+.35); }
  if(kind==='boing'){ const o=tone(180,0,.35,'square',.06); o.frequency.exponentialRampToValueAtTime(520,ac.currentTime+.25); }
  if(kind==='no') [311,247].forEach((f,i)=>tone(f,i*.12,.3,'sine',.12));
  if(kind==='win') [523.25,659.25,783.99,1046.5,783.99,1046.5].forEach((f,i)=>tone(f,i*.1,.4,'triangle',.13));
  if(kind==='drum'){ const o=tone(n%2?140:95,0,.35,'sine',.5); o.frequency.exponentialRampToValueAtTime(50,ac.currentTime+.3); }
  if(kind==='thunder'){ const o=tone(55,0,1.2,'sawtooth',.14); o.frequency.exponentialRampToValueAtTime(30,ac.currentTime+1.1); }
 }catch(e){} }

window.BKVoice=Object.assign(V,{say,stop,render,plain,pieces,sfx,songSrc,playSong,LEX});
})();
