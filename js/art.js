/* Betekrstian art library.
   Every piece is a function returning an SVG string drawn around its own origin.
   Figures and objects stand on the origin (feet at y=0), so props can be placed by where they stand.
   Each entry in ART has { draw(opts), box } where box is a viewBox used when the art is shown as an icon (quiz cards, stickers, tiles).
   Style: Gondarine church painting softened for small children: frontal faces, big almond eyes, flat colours, halos for holy people. */
(function(){
const rnd=(a,b)=>a+Math.random()*(b-a);
const C={gold:'#E2A62B',goldD:'#C98A12',red:'#B3322A',green:'#2F7A4E',blue:'#24418F',ink:'#18234F',skin:'#9A6440',skinD:'#7A4A2C',hair:'#24160F',white:'#F7F2E6',cream:'#F4EEDF'};

/* ---------- shared bits ---------- */
function eyes(y=0,sp=10,r=3.6){return `<path d="M${-sp-8} ${y} Q${-sp} ${y-7} ${-sp+8} ${y} Q${-sp} ${y+5} ${-sp-8} ${y}Z" fill="#fff"/><path d="M${sp-8} ${y} Q${sp} ${y-7} ${sp+8} ${y} Q${sp} ${y+5} ${sp-8} ${y}Z" fill="#fff"/><circle cx="${-sp+1}" cy="${y}" r="${r}" fill="#111"/><circle cx="${sp+1}" cy="${y}" r="${r}" fill="#111"/><circle cx="${-sp+2}" cy="${y-1.4}" r="1" fill="#fff"/><circle cx="${sp+2}" cy="${y-1.4}" r="1" fill="#fff"/><path d="M${-sp-8} ${y-8} Q${-sp} ${y-13} ${-sp+8} ${y-8} M${sp-8} ${y-8} Q${sp} ${y-13} ${sp+8} ${y-8}" stroke="#24160F" stroke-width="2.2" fill="none" stroke-linecap="round"/>`}
function cross(color=C.gold,accent=C.red){
  let s='';
  for(let a=0;a<4;a++) s+=`<g transform="rotate(${a*90})"><rect x="-6" y="-40" width="12" height="32" rx="2" fill="${color}"/><circle cx="0" cy="-42" r="7" fill="${color}"/><circle cx="-9" cy="-35" r="5" fill="${color}"/><circle cx="9" cy="-35" r="5" fill="${color}"/><circle cx="0" cy="-42" r="2.4" fill="${accent}"/><path d="M-20 -20 L-8 -8" stroke="${color}" stroke-width="4" stroke-linecap="round"/></g>`;
  return s+`<rect x="-11" y="-11" width="22" height="22" transform="rotate(45)" fill="${color}"/><circle r="5" fill="${accent}"/>`;
}
const hemBand=(w,y,c1=C.gold,c2=C.red)=>`<rect x="${-w}" y="${y-12}" width="${w*2}" height="12" fill="${c2}"/><path d="M${-w} ${y-6} ${Array.from({length:Math.ceil(w/6)},(_,i)=>`L${-w+i*12+6} ${y-11} L${-w+i*12+12} ${y-6}`).join(' ')}" stroke="${c1}" stroke-width="2.4" fill="none"/>`;

/* ---------- people ---------- */
/* figure(o): adult or child, standing on the origin. ~230 tall for an adult.
   o: robe, mantle, skin, hair, beard ('dark'|'grey'|'white'|false), halo, crossHalo, crown, kind ('adult'|'child'|'teen'),
      arms ('down'|'up'|'out'|'pray'|'bless'|'hold'), staff, scarf (netela), sleeping */
function figure(o={}){
  const k=o.kind==='child'?.62:o.kind==='teen'?.82:1;
  const robe=o.robe||C.green, skin=o.skin||C.skin, hair=o.hair||C.hair;
  let s='';
  const hy=-178; // head centre
  if(o.halo||o.crossHalo) s+=`<circle cy="${hy}" r="44" fill="#F2C14E"/><circle cy="${hy}" r="40" fill="none" stroke="${C.goldD}" stroke-width="3"/>${o.crossHalo?`<path d="M0 ${hy-44} V${hy-26} M-44 ${hy} H-28 M44 ${hy} H28" stroke="${C.red}" stroke-width="6"/>`:''}`;
  if(o.wings) s+=`<path d="M-20 -130 C-70 -150 -110 -110 -116 -50 C-80 -80 -50 -86 -24 -90Z" fill="${C.gold}"/><path d="M20 -130 C70 -150 110 -110 116 -50 C80 -80 50 -86 24 -90Z" fill="${C.gold}"/><path d="M-22 -112 C-60 -116 -86 -84 -90 -40 C-66 -64 -44 -70 -24 -74Z" fill="${C.red}"/><path d="M22 -112 C60 -116 86 -84 90 -40 C66 -64 44 -70 24 -74Z" fill="${C.red}"/>`;
  // long hair behind (women / mantle)
  if(o.longHair) s+=`<path d="M-30 ${hy} Q-36 ${hy+50} -26 ${hy+70} L26 ${hy+70} Q36 ${hy+50} 30 ${hy}Z" fill="${hair}"/>`;
  // robe
  s+=`<path d="M-30 -146 Q-44 -142 -48 -120 L-58 0 L58 0 L48 -120 Q44 -142 30 -146Z" fill="${robe}"/>`;
  s+=hemBand(56,0,o.band||C.gold,o.bandBg||C.red);
  s+=`<path d="M0 -146 V-8" stroke="#00000022" stroke-width="3"/>`;
  if(o.sash) s+=`<path d="M-44 -140 L40 -40" stroke="${o.sash}" stroke-width="12"/>`;
  // arms
  const sleeve=o.sleeve||robe, hand=`fill="${skin}"`;
  const arms=o.arms||'down';
  if(arms==='down') s+=`<path d="M-40 -136 Q-60 -100 -52 -64" stroke="${sleeve}" stroke-width="20" fill="none" stroke-linecap="round"/><circle cx="-52" cy="-58" r="9" ${hand}/><path d="M40 -136 Q60 -100 52 -64" stroke="${sleeve}" stroke-width="20" fill="none" stroke-linecap="round"/><circle cx="52" cy="-58" r="9" ${hand}/>`;
  if(arms==='up') s+=`<path d="M-40 -136 Q-74 -150 -76 -196" stroke="${sleeve}" stroke-width="20" fill="none" stroke-linecap="round"/><ellipse cx="-76" cy="-206" rx="9" ry="12" ${hand}/><path d="M40 -136 Q74 -150 76 -196" stroke="${sleeve}" stroke-width="20" fill="none" stroke-linecap="round"/><ellipse cx="76" cy="-206" rx="9" ry="12" ${hand}/>`;
  if(arms==='out') s+=`<path d="M-40 -136 Q-60 -100 -52 -64" stroke="${sleeve}" stroke-width="20" fill="none" stroke-linecap="round"/><circle cx="-52" cy="-58" r="9" ${hand}/><path d="M40 -136 Q74 -120 92 -116" stroke="${sleeve}" stroke-width="20" fill="none" stroke-linecap="round"/><circle cx="100" cy="-116" r="10" ${hand}/>`;
  if(arms==='pray') s+=`<path d="M-40 -136 Q-46 -96 -8 -100" stroke="${sleeve}" stroke-width="20" fill="none" stroke-linecap="round"/><path d="M40 -136 Q46 -96 8 -100" stroke="${sleeve}" stroke-width="20" fill="none" stroke-linecap="round"/><path d="M-7 -96 L0 -128 L7 -96Z" ${hand}/>`;
  if(arms==='bless') s+=`<path d="M-40 -136 Q-60 -100 -52 -64" stroke="${sleeve}" stroke-width="20" fill="none" stroke-linecap="round"/><circle cx="-52" cy="-58" r="9" ${hand}/><path d="M40 -136 Q70 -130 74 -170" stroke="${sleeve}" stroke-width="20" fill="none" stroke-linecap="round"/><path d="M68 -176 V-200 M74 -178 V-204 M80 -176 V-196" stroke="${skin}" stroke-width="6" stroke-linecap="round"/><ellipse cx="74" cy="-176" rx="10" ry="8" ${hand}/>`;
  if(arms==='hold') s+=`<path d="M-40 -136 Q-56 -94 -6 -90" stroke="${sleeve}" stroke-width="20" fill="none" stroke-linecap="round"/><path d="M40 -136 Q56 -94 6 -90" stroke="${sleeve}" stroke-width="20" fill="none" stroke-linecap="round"/>`;
  if(o.holdBaby) s+=`<g transform="translate(0 -96)">${baby({crossHalo:o.babyHalo!==false})}</g>`;
  if(o.staff) s+=`<path d="M58 -60 L66 4" stroke="#6B4423" stroke-width="7" stroke-linecap="round"/><path d="M52 -60 L48 -236 Q48 -262 70 -258" stroke="#6B4423" stroke-width="7" fill="none" stroke-linecap="round"/>`;
  if(o.spear) s+=`<path d="M60 20 L60 -270" stroke="#6B4423" stroke-width="6"/><path d="M60 -296 L70 -268 L50 -268Z" fill="#B9C2D0"/>`;
  if(o.bow) s+=`<path d="M-70 -200 Q-110 -120 -70 -40" stroke="#6B4423" stroke-width="6" fill="none"/><path d="M-70 -200 L-70 -40" stroke="#ddd" stroke-width="1.5"/>`;
  if(o.netela) s+=`<path d="M-32 ${hy} Q-46 ${hy+40} -46 -128 L46 -128 Q46 ${hy+40} 32 ${hy}Z" fill="#FFFFFF"/><path d="M-46 -132 L46 -132" stroke="${o.netela}" stroke-width="5"/>`;
  // neck + head
  s+=`<rect x="-9" y="-158" width="18" height="16" fill="${skin}"/>`;
  s+=`<circle cy="${hy}" r="27" fill="${skin}"/>`;
  s+=`<path d="M-27 ${hy-2} C-28 ${hy-36} 28 ${hy-36} 27 ${hy-2} C20 ${hy-18} -20 ${hy-18} -27 ${hy-2}Z" fill="${hair}"/>`;
  if(o.afro) s+=`<path d="M-30 ${hy-6} C-36 ${hy-46} 36 ${hy-46} 30 ${hy-6} C24 ${hy-26} -24 ${hy-26} -30 ${hy-6}Z" fill="${hair}"/>`;
  s+=o.closedEyes?`<path d="M-18 ${hy+2} Q-10 ${hy+7} -2 ${hy+2} M2 ${hy+2} Q10 ${hy+7} 18 ${hy+2}" stroke="#24160F" stroke-width="2.4" fill="none" stroke-linecap="round"/>`:eyes(hy+2,10);
  s+=`<path d="M0 ${hy+5} L-2 ${hy+13} L3 ${hy+13}" stroke="${C.skinD}" stroke-width="1.6" fill="none"/>`;
  if(o.beard){ const bc={dark:'#24160F',grey:'#8C8C8C',white:'#E9E6DF',brown:'#4A2E1C'}[o.beard]||o.beard;
    s+=`<path d="M-26 ${hy+2} Q-26 ${hy+38} 0 ${hy+48} Q26 ${hy+38} 26 ${hy+2} Q20 ${hy+22} 0 ${hy+22} Q-20 ${hy+22} -26 ${hy+2}Z" fill="${bc}"/><path d="M-8 ${hy+18} Q0 ${hy+15} 8 ${hy+18}" stroke="${bc==='#E9E6DF'?'#9A9A9A':'#0006'}" stroke-width="2" fill="none"/>`;
    if(o.beard==='grey'||o.beard==='white') s=s.replace(`fill="${hair}"/>`,`fill="${bc}"/>`);
  } else s+=`<path d="M-6 ${hy+17} Q0 ${hy+21} 6 ${hy+17}" stroke="#6B2A1A" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;
  if(o.mantle) s+=`<path d="M-34 ${hy+10} C-40 ${hy-44} 40 ${hy-44} 34 ${hy+10} L44 -120 Q30 -112 26 -128 Q30 ${hy+20} 0 ${hy-28} Q-30 ${hy+20} -26 -128 Q-30 -112 -44 -120Z" fill="${o.mantle}"/><path d="M-34 ${hy+10} C-40 ${hy-44} 40 ${hy-44} 34 ${hy+10}" stroke="${C.gold}" stroke-width="3" fill="none"/>${o.stars?`<g fill="${C.gold}"><circle cx="0" cy="${hy-30}" r="3"/><circle cx="-26" cy="${hy+30}" r="3"/><circle cx="26" cy="${hy+30}" r="3"/></g>`:''}`;
  if(o.netela) s+=`<path d="M-31 ${hy+2} C-34 ${hy-40} 34 ${hy-40} 31 ${hy+2} C24 ${hy-22} -24 ${hy-22} -31 ${hy+2}Z" fill="#FFFFFF"/><path d="M-31 ${hy+2} C-34 ${hy-40} 34 ${hy-40} 31 ${hy+2}" stroke="${o.netela}" stroke-width="3" fill="none"/>`;
  if(o.nemes) s+=`<path d="M-30 ${hy+20} L-34 ${hy-6} C-34 ${hy-44} 34 ${hy-44} 34 ${hy-6} L30 ${hy+20} L22 ${hy+4} C22 ${hy-22} -22 ${hy-22} -22 ${hy+4}Z" fill="${C.gold}"/>${[-26,-18,18,26].map(x=>`<path d="M${x} ${hy-6} V${hy+16}" stroke="${C.blue}" stroke-width="3"/>`).join('')}`;
  if(o.crown) s+=`<path d="M-22 ${hy-22} L-24 ${hy-46} L-12 ${hy-34} L0 ${hy-52} L12 ${hy-34} L24 ${hy-46} L22 ${hy-22}Z" fill="${C.gold}" stroke="${C.goldD}" stroke-width="2"/><circle cx="0" cy="${hy-36}" r="3.4" fill="${C.red}"/>`;
  if(o.helmet) s+=`<path d="M-28 ${hy-4} C-30 ${hy-40} 30 ${hy-40} 28 ${hy-4} Z" fill="#8A93A6"/><path d="M0 ${hy-34} L0 ${hy-50}" stroke="${C.red}" stroke-width="8" stroke-linecap="round"/>`;
  if(o.cap) s+=`<path d="M-26 ${hy-10} C-28 ${hy-38} 28 ${hy-38} 26 ${hy-10}Z" fill="${o.cap}"/>`;
  return k===1?s:`<g transform="scale(${k})">${s}</g>`;
}
function baby(o={}){ return `${o.crossHalo?`<circle cy="-20" r="22" fill="#F2C14E"/><path d="M0 -42 V-30 M-22 -20 H-14 M22 -20 H14" stroke="${C.red}" stroke-width="4"/>`:''}<path d="M-26 -4 Q-30 26 0 30 Q30 26 26 -4 Q0 -14 -26 -4Z" fill="${o.wrap||'#FFFFFF'}" stroke="#E7E1D3" stroke-width="2"/><circle cy="-18" r="15" fill="${C.skin}"/><path d="M-15 -20 C-15 -36 15 -36 15 -20 C10 -28 -10 -28 -15 -20Z" fill="${C.hair}"/><circle cx="-5" cy="-17" r="2.2" fill="#111"/><circle cx="5" cy="-17" r="2.2" fill="#111"/><path d="M-4 -10 Q0 -7 4 -10" stroke="#6B2A1A" stroke-width="1.6" fill="none"/>`; }
function lying(o={}){ /* a person asleep on the ground, head on the left */
  return `<path d="M-90 -6 Q-60 -38 40 -30 Q96 -26 100 -4 L100 0 L-92 0Z" fill="${o.robe||'#7A5230'}"/><path d="M-92 -10 L100 -10" stroke="${C.gold}" stroke-width="3"/>
  <circle cx="-100" cy="-26" r="24" fill="${C.skin}"/><path d="M-124 -28 C-124 -56 -76 -56 -76 -28 C-84 -40 -116 -40 -124 -28Z" fill="${C.hair}"/>
  ${o.beard?`<path d="M-120 -16 Q-100 10 -80 -16 Q-100 -6 -120 -16Z" fill="${C.hair}"/>`:''}
  <path d="M-114 -22 Q-108 -18 -102 -22 M-98 -22 Q-92 -18 -86 -22" stroke="#24160F" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;
}
const selam=(mouth=false)=>`
 <path d="M-46 68 Q-50 20 -22 12 L22 12 Q50 20 46 68Z" fill="#FFFFFF" stroke="#E7E1D3" stroke-width="2"/>
 <path d="M-46 62 L46 62 L46 68 L-46 68Z" fill="#2F7A4E"/><path d="M-46 58 L46 58" stroke="#E2A62B" stroke-width="4"/><path d="M-46 54 L46 54" stroke="#B3322A" stroke-width="2"/>
 <circle cx="0" cy="-16" r="34" fill="#24160F"/>
 ${[-24,-12,0,12,24].map(x=>`<path d="M${x} -48 Q${x*1.1} -24 ${x*1.25} -2" stroke="#3A2418" stroke-width="3" fill="none"/>`).join('')}
 <circle cx="-36" cy="6" r="7" fill="#24160F"/><circle cx="36" cy="6" r="7" fill="#24160F"/>
 <ellipse cx="0" cy="-6" rx="25" ry="27" fill="#8E5A38"/>
 <path d="M-25 -16 C-26 -42 26 -42 25 -16 C18 -28 -18 -28 -25 -16Z" fill="#24160F"/>
 <path d="M-17 -6 Q-10 -13 -3 -6 Q-10 -1 -17 -6Z" fill="#fff"/><path d="M3 -6 Q10 -13 17 -6 Q10 -1 3 -6Z" fill="#fff"/>
 <circle cx="-9" cy="-6" r="3.6" fill="#111"/><circle cx="11" cy="-6" r="3.6" fill="#111"/><circle cx="-8" cy="-7.5" r="1.1" fill="#fff"/><circle cx="12" cy="-7.5" r="1.1" fill="#fff"/>
 <circle cx="-15" cy="5" r="4" fill="#C0614A" opacity=".45"/><circle cx="15" cy="5" r="4" fill="#C0614A" opacity=".45"/>
 ${mouth?'<ellipse cx="0" cy="10" rx="5" ry="4" fill="#5B1E14"/>':'<path d="M-7 8 Q0 14 7 8" stroke="#5B1E14" stroke-width="2.4" fill="none" stroke-linecap="round"/>'}
 <path d="M-30 22 Q-20 14 0 16 Q20 14 30 22" stroke="#FFFFFF" stroke-width="10" fill="none" stroke-linecap="round"/>
 <rect x="-3" y="20" width="6" height="12" fill="#E2A62B"/><rect x="-7" y="24" width="14" height="4" fill="#E2A62B"/>`;
const angelHead=(s=1)=>`<g transform="scale(${s})">
 <path d="M0 8 C-42 -4 -74 18 -86 50 C-54 38 -26 38 0 28Z" fill="#E2A62B"/><path d="M0 8 C42 -4 74 18 86 50 C54 38 26 38 0 28Z" fill="#E2A62B"/>
 <path d="M0 20 C-32 18 -56 40 -62 66 C-36 52 -18 48 0 36Z" fill="#B3322A"/><path d="M0 20 C32 18 56 40 62 66 C36 52 18 48 0 36Z" fill="#B3322A"/>
 <path d="M0 30 C-18 32 -30 50 -32 70 C-18 58 -8 54 0 46 C8 54 18 58 32 70 C30 50 18 32 0 30Z" fill="#2F6F4E"/>
 <circle r="27" fill="#9A6440"/><path d="M-27 -1 C-28 -32 28 -32 27 -1 C20 -17 -20 -17 -27 -1Z" fill="#24160F"/>
 <path d="M-19 -7 Q-11 -12 -3 -7 M3 -7 Q11 -12 19 -7" stroke="#24160F" stroke-width="2.4" fill="none" stroke-linecap="round"/>
 <path d="M-19 2 Q-10 -6 -1 2 Q-10 8 -19 2Z" fill="#fff"/><path d="M1 2 Q10 -6 19 2 Q10 8 1 2Z" fill="#fff"/>
 <circle cx="-9" cy="2" r="3.8" fill="#111"/><circle cx="11" cy="2" r="3.8" fill="#111"/>
 <path d="M0 4 L-2 13 L3 13" stroke="#5B3A26" stroke-width="1.6" fill="none"/><path d="M-6 18 Q0 21 6 18" stroke="#6B2A1A" stroke-width="2.2" fill="none" stroke-linecap="round"/></g>`;
/* God is never drawn as a face in these lessons: His presence is light from heaven with a blessing hand. Clergy to review. */
const glory=(o={})=>{let r='';for(let i=0;i<16;i++)r+=`<path d="M0 0 L${-14} ${-200} L14 -200Z" fill="#FFF6D2" opacity=".35" transform="rotate(${i*22.5})"/>`;
  return `<g class="spin" style="animation-duration:60s">${r}</g><circle r="70" fill="#FFF6D2" opacity=".5"/><circle r="48" fill="#FFF6D2"/><circle r="40" fill="none" stroke="${C.gold}" stroke-width="4"/>${o.hand===false?'':`<g transform="translate(0 6)"><path d="M-12 26 V-6 Q-12 -12 -6 -12 V-30 Q-6 -36 0 -36 Q6 -36 6 -30 V-14 Q14 -18 16 -10 V20 Q14 32 0 32 Q-12 32 -12 26Z" fill="${C.skin}"/><path d="M-6 -12 V2 M0 -30 V0" stroke="${C.skinD}" stroke-width="1.6"/></g>`}`;};

/* ---------- animals ---------- */
const lion=()=>`<path d="M60 -10 Q96 -26 92 -52" stroke="#B57A2A" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="92" cy="-54" r="7" fill="#2A1A10"/>
 <ellipse cx="18" cy="-10" rx="56" ry="28" fill="#C98E3A"/><rect x="-24" y="4" width="13" height="34" rx="5" fill="#B57A2A"/><rect x="0" y="6" width="13" height="32" rx="5" fill="#C98E3A"/><rect x="38" y="4" width="13" height="34" rx="5" fill="#B57A2A"/><rect x="58" y="4" width="13" height="34" rx="5" fill="#C98E3A"/>
 <circle cx="-34" cy="-30" r="36" fill="#2B1A12"/><circle cx="-34" cy="-28" r="22" fill="#D9A04A"/><circle cx="-42" cy="-32" r="3.4" fill="#111"/><circle cx="-26" cy="-32" r="3.4" fill="#111"/><path d="M-38 -20 L-30 -20 L-34 -15Z" fill="#5B2A1A"/><path d="M-40 -11 Q-34 -7 -28 -11" stroke="#5B2A1A" stroke-width="2" fill="none"/>`;
const cow=()=>`<ellipse cx="10" cy="-14" rx="58" ry="30" fill="#EDE3D2"/><path d="M-18 -42 Q-6 -66 10 -42Z" fill="#E3D6C0"/><ellipse cx="30" cy="-18" rx="18" ry="12" fill="#8A5A3C"/>
 ${[-34,-12,26,48].map(x=>`<rect x="${x}" y="6" width="12" height="34" rx="4" fill="#E3D6C0"/>`).join('')}<path d="M68 -24 Q86 -2 74 14" stroke="#D8C9AE" stroke-width="5" fill="none"/>
 <ellipse cx="-56" cy="-26" rx="20" ry="24" fill="#EDE3D2"/><ellipse cx="-58" cy="-10" rx="14" ry="10" fill="#D9B8A0"/>
 <path d="M-70 -42 Q-96 -60 -84 -94 M-44 -44 Q-24 -64 -36 -96" stroke="#8C6E4C" stroke-width="7" fill="none" stroke-linecap="round"/><circle cx="-64" cy="-32" r="3.2" fill="#111"/><circle cx="-48" cy="-32" r="3.2" fill="#111"/>`;
const sheep=()=>`${[-30,-6,18,40].map(x=>`<rect x="${x}" y="2" width="9" height="30" rx="3" fill="#2A2A2A"/>`).join('')}
 ${[[-30,-18,22],[-6,-26,26],[22,-24,24],[42,-12,18],[0,-6,26],[-24,0,18],[26,0,18]].map(([a,b,r])=>`<circle cx="${a}" cy="${b}" r="${r}" fill="#F4EEDF"/>`).join('')}
 <ellipse cx="-52" cy="-20" rx="15" ry="20" fill="#2A2A2A"/><ellipse cx="-66" cy="-26" rx="10" ry="5" fill="#2A2A2A"/><circle cx="-56" cy="-24" r="2.6" fill="#fff"/>`;
const walia=()=>`<path d="M-52 -50 Q-48 -110 14 -100 Q-30 -88 -38 -50Z" fill="#5A4636"/>
 <ellipse cx="10" cy="-12" rx="50" ry="24" fill="#8A6A4A"/><ellipse cx="18" cy="-4" rx="40" ry="12" fill="#C8B190"/>
 ${[-26,-8,28,44].map(x=>`<rect x="${x}" y="4" width="9" height="36" rx="3" fill="#6E5238"/>`).join('')}
 <path d="M-30 -28 L-48 -58 L-70 -44 L-56 -14Z" fill="#7A5C40"/><path d="M-66 -24 L-64 -4 L-58 -18Z" fill="#3A2A1C"/><circle cx="-52" cy="-42" r="3" fill="#111"/>`;
const gelada=()=>`<ellipse cx="0" cy="-20" rx="38" ry="44" fill="#8A6038"/><path d="M-40 -40 Q-50 -76 0 -84 Q50 -76 40 -40 Q20 -70 0 -66 Q-20 -70 -40 -40Z" fill="#B48A58"/>
 <path d="M0 -24 C-14 -40 -30 -22 0 0 C30 -22 14 -40 0 -24Z" fill="#D2333A"/>
 <ellipse cx="0" cy="-58" rx="16" ry="20" fill="#3A2418"/><circle cx="-6" cy="-62" r="2.8" fill="#F2D7A0"/><circle cx="6" cy="-62" r="2.8" fill="#F2D7A0"/>
 <ellipse cx="-24" cy="20" rx="16" ry="10" fill="#7A5230"/><ellipse cx="24" cy="20" rx="16" ry="10" fill="#7A5230"/><path d="M34 0 Q70 10 60 40" stroke="#7A5230" stroke-width="7" fill="none" stroke-linecap="round"/>`;
const donkey=(o={})=>`<path d="M58 -40 Q78 -30 74 0" stroke="#6E6A66" stroke-width="5" fill="none"/>
 ${[-30,-10,30,48].map(x=>`<rect x="${x}" y="-14" width="11" height="50" rx="4" fill="#8E8984"/>`).join('')}
 <ellipse cx="10" cy="-30" rx="58" ry="30" fill="#A29C96"/>${o.saddle?`<path d="M-20 -58 Q10 -72 40 -58 L36 -26 L-16 -26Z" fill="${C.red}"/><path d="M-18 -32 H38" stroke="${C.gold}" stroke-width="4"/>`:''}
 <path d="M-36 -44 L-60 -96 L-40 -104 L-24 -54Z" fill="#A29C96"/><ellipse cx="-62" cy="-100" rx="20" ry="16" fill="#A29C96"/><ellipse cx="-74" cy="-94" rx="11" ry="9" fill="#D8D2CA"/>
 <path d="M-56 -112 L-52 -146 L-44 -112 M-66 -112 L-70 -144 L-60 -114" fill="#8E8984" stroke="#8E8984" stroke-width="7" stroke-linejoin="round"/><circle cx="-60" cy="-104" r="3" fill="#111"/>`;
const camel=()=>`${[-34,-14,28,46].map(x=>`<rect x="${x}" y="-20" width="10" height="60" rx="4" fill="#B88A50"/>`).join('')}<ellipse cx="6" cy="-34" rx="58" ry="24" fill="#C99A5E"/><path d="M-26 -50 Q-10 -96 10 -56 Q26 -96 44 -50Z" fill="#C99A5E"/>
 <path d="M-46 -40 Q-70 -60 -66 -100" stroke="#C99A5E" stroke-width="18" fill="none" stroke-linecap="round"/><ellipse cx="-74" cy="-104" rx="18" ry="11" fill="#C99A5E"/><circle cx="-76" cy="-108" r="2.6" fill="#111"/><path d="M60 -40 Q70 -20 64 0" stroke="#A07A44" stroke-width="4" fill="none"/>`;
const horse=(o={})=>`${[-30,-10,34,52].map(x=>`<rect x="${x}" y="-20" width="12" height="60" rx="5" fill="${o.c||'#F2EEE6'}" stroke="#D8D0C2" stroke-width="2"/>`).join('')}
 <ellipse cx="12" cy="-34" rx="62" ry="30" fill="${o.c||'#F2EEE6'}"/><path d="M70 -46 Q100 -30 92 10" stroke="#D8D0C2" stroke-width="10" fill="none" stroke-linecap="round"/>
 <path d="M-34 -50 Q-56 -96 -58 -112 L-34 -120 Q-24 -80 -10 -56Z" fill="${o.c||'#F2EEE6'}"/><path d="M-58 -112 Q-90 -110 -94 -94 Q-86 -84 -60 -92Z" fill="${o.c||'#F2EEE6'}"/>
 <path d="M-34 -120 Q-20 -100 -12 -60" stroke="#C9B9A0" stroke-width="7" fill="none"/><circle cx="-62" cy="-106" r="3" fill="#111"/>
 ${o.saddle!==false?`<path d="M-10 -62 Q20 -72 46 -60 L42 -30 L-6 -30Z" fill="${C.red}"/><path d="M-8 -36 H44" stroke="${C.gold}" stroke-width="4"/>`:''}`;
const dragon=()=>`<path d="M60 -20 Q120 -10 140 -50 Q150 -70 170 -60" stroke="#4E7A2E" stroke-width="16" fill="none" stroke-linecap="round"/><path d="M164 -66 L184 -64 L172 -50Z" fill="#B3322A"/>
 <ellipse cx="20" cy="-30" rx="72" ry="34" fill="#5E9A3A"/>${[-30,-6,18,42,64].map(x=>`<path d="M${x-10} -60 L${x} -84 L${x+10} -60Z" fill="#B3322A"/>`).join('')}
 <path d="M-10 -58 Q-30 -120 30 -130 Q10 -110 20 -80Z" fill="#7DB04E" opacity=".9"/>
 ${[-30,-4,40,60].map(x=>`<rect x="${x}" y="-6" width="14" height="34" rx="6" fill="#4E7A2E"/>`).join('')}
 <path d="M-46 -44 Q-74 -60 -84 -40 Q-100 -40 -104 -24 Q-90 -12 -54 -18Z" fill="#5E9A3A"/><circle cx="-78" cy="-44" r="5" fill="#FFE18A"/><circle cx="-78" cy="-44" r="2.4" fill="#111"/><path d="M-102 -26 L-80 -24" stroke="#2A3A1A" stroke-width="2"/>`;
const fish=(o={})=>`<ellipse rx="26" ry="13" fill="${o.c||'#3C8DD8'}"/><path d="M22 0 L42 -15 L42 15Z" fill="${o.c||'#3C8DD8'}"/><circle cx="-14" cy="-3" r="3.4" fill="#111"/><path d="M-2 -10 Q4 0 -2 10" stroke="#ffffff88" stroke-width="2" fill="none"/>`;
const bird=(o={})=>`<g class="flap"><path d="M-32 -6 Q-15 -26 0 -2 Q15 -26 32 -6 Q15 -12 0 6 Q-15 -12 -32 -6Z" fill="${o.c||'#F4EEDF'}"/></g><circle r="5.5" fill="${o.c||'#F4EEDF'}"/>`;
const dove=(o={})=>`<path d="M-30 0 Q-10 -24 20 -12 L40 -20 L34 -6 Q20 12 -10 10Z" fill="#FFFFFF" stroke="#D8DCE6" stroke-width="2"/><path d="M-6 -6 Q8 -40 30 -36 Q18 -14 4 -2Z" fill="#EEF1F7" stroke="#D8DCE6" stroke-width="2"/><circle cx="-18" cy="-6" r="2.4" fill="#111"/><path d="M-30 -2 L-38 2 L-30 4Z" fill="${C.gold}"/>${o.leaf?`<path d="M-38 2 Q-52 -6 -58 6 Q-48 12 -38 2Z" fill="#5E9A3A"/>`:''}`;
const raven=()=>`<path d="M-30 0 Q-10 -24 20 -12 L40 -20 L34 -6 Q20 12 -10 10Z" fill="#1E1E28"/><path d="M-6 -6 Q8 -40 30 -36 Q18 -14 4 -2Z" fill="#2A2A36"/><circle cx="-18" cy="-6" r="2.4" fill="#fff"/><path d="M-30 -4 L-42 2 L-30 4Z" fill="#555"/>`;
const elephant=()=>`${[-34,-12,26,46].map(x=>`<rect x="${x}" y="-10" width="18" height="44" rx="6" fill="#8E949E"/>`).join('')}<ellipse cx="8" cy="-30" rx="64" ry="40" fill="#9AA0AA"/><ellipse cx="-48" cy="-50" rx="30" ry="30" fill="#9AA0AA"/><ellipse cx="-34" cy="-50" rx="22" ry="28" fill="#8A909A"/><path d="M-70 -40 Q-84 0 -70 20" stroke="#9AA0AA" stroke-width="14" fill="none" stroke-linecap="round"/><circle cx="-58" cy="-58" r="3.2" fill="#111"/><path d="M-62 -34 L-76 -28" stroke="#F4EEDF" stroke-width="5" stroke-linecap="round"/>`;
const giraffe=()=>`${[-20,-4,24,38].map(x=>`<rect x="${x}" y="-30" width="8" height="64" rx="3" fill="#D9A04A"/>`).join('')}<ellipse cx="10" cy="-44" rx="40" ry="22" fill="#E6B45E"/><path d="M-20 -54 L-40 -150" stroke="#E6B45E" stroke-width="16" stroke-linecap="round"/><ellipse cx="-48" cy="-154" rx="16" ry="9" fill="#E6B45E"/><circle cx="-46" cy="-158" r="2.4" fill="#111"/>${[[0,-46],[20,-40],[-6,-36],[-28,-90],[-34,-120]].map(([a,b])=>`<circle cx="${a}" cy="${b}" r="5" fill="#A8662A"/>`).join('')}`;
const snake=()=>`<path d="M-60 0 Q-40 -30 -20 0 T20 0 T60 -10" stroke="#5E9A3A" stroke-width="12" fill="none" stroke-linecap="round"/><circle cx="64" cy="-14" r="9" fill="#5E9A3A"/><circle cx="66" cy="-16" r="2" fill="#111"/>`;

/* ---------- plants and land ---------- */
const cloud=(o={})=>`<g transform="scale(${o.s||1})"><ellipse cx="0" cy="10" rx="58" ry="20" fill="${o.c||'#fff'}"/><circle cx="-24" cy="0" r="22" fill="${o.c||'#fff'}"/><circle cx="8" cy="-10" r="28" fill="${o.c||'#fff'}"/><circle cx="34" cy="4" r="18" fill="${o.c||'#fff'}"/></g>`;
const acacia=()=>`<path d="M-4 0 L-3 -50 L-24 -78 M-3 -50 L18 -82 M-3 -50 L2 -86" stroke="#4A3020" stroke-width="7" fill="none" stroke-linecap="round"/><ellipse cx="0" cy="-92" rx="70" ry="16" fill="#2F6B34"/><ellipse cx="-10" cy="-100" rx="50" ry="10" fill="#3D8240"/>`;
const enset=()=>{let l='';[-60,-30,0,30,60].forEach(r=>l+=`<g transform="rotate(${r})"><ellipse cx="0" cy="-60" rx="14" ry="48" fill="#3B9142"/><path d="M0 -14 V-104" stroke="#9B2D24" stroke-width="3"/></g>`);return `<rect x="-9" y="-30" width="18" height="30" rx="6" fill="#5C7A2E"/><g transform="translate(0 -26)">${l}</g>`};
const palm=()=>`<path d="M0 0 Q-6 -80 6 -150" stroke="#8A6038" stroke-width="10" fill="none"/>${[-70,-35,0,35,70,105,-105].map(r=>`<g transform="translate(6 -150) rotate(${r})"><path d="M0 0 Q20 -40 0 -70 Q-10 -30 0 0Z" fill="#3D8240"/></g>`).join('')}`;
const coffee=()=>`<rect x="-3" y="-20" width="6" height="20" fill="#4A3020"/><circle cx="0" cy="-42" r="30" fill="#2E6B3A"/><circle cx="-16" cy="-30" r="18" fill="#357A42"/>${[[-12,-48],[6,-36],[14,-54],[-4,-28],[-20,-38],[18,-40]].map(([a,b])=>`<circle cx="${a}" cy="${b}" r="4.5" fill="#C2272D"/>`).join('')}`;
const bush=(o={})=>`<circle cx="-40" cy="-30" r="40" fill="${o.c1||'#2F7A3E'}"/><circle cx="10" cy="-44" r="50" fill="${o.c2||'#3A8C47'}"/><circle cx="58" cy="-30" r="38" fill="${o.c1||'#2F7A3E'}"/><rect x="-80" y="-30" width="176" height="30" fill="${o.c1||'#2F7A3E'}"/>`;
const burningBush=()=>`${bush({c1:'#2F7A3E',c2:'#3A8C47'})}<g class="flicker">${[[-30,-60,40],[10,-80,54],[50,-58,40],[-6,-50,30]].map(([x,y,h])=>`<path d="M${x-16} ${y+20} Q${x-20} ${y-h*.4} ${x} ${y-h} Q${x+20} ${y-h*.4} ${x+16} ${y+20}Z" fill="#F08A3C" opacity=".9"/><path d="M${x-8} ${y+16} Q${x-8} ${y-h*.2} ${x} ${y-h*.6} Q${x+8} ${y-h*.2} ${x+8} ${y+16}Z" fill="#FFE18A"/>`).join('')}</g>`;
const adeyAbeba=()=>`${[...Array(14)].map((_,i)=>`<ellipse cx="0" cy="-26" rx="7" ry="20" fill="#F6C200" transform="rotate(${i*360/14})"/>`).join('')}<circle r="13" fill="#B86A10"/><circle r="8" fill="#8A4A08"/>`;
const flowerPatch=()=>[[-40,0],[0,-6],[40,2]].map(([x,y])=>`<path d="M${x} ${y} V${y-30}" stroke="#3D8240" stroke-width="4"/><g transform="translate(${x} ${y-34}) scale(.5)">${adeyAbeba()}</g>`).join('');

/* ---------- objects ---------- */
const procCross=()=>`<rect x="-5" y="-60" width="10" height="160" fill="#6B4423"/><g transform="translate(0 -110) scale(1.15)">${cross()}</g>`;
const handCross=()=>`<g transform="scale(1.4)">${cross()}</g>`;
const ark=(o={})=>`<path d="M-200 -70 L200 -70 L170 0 L-170 0Z" fill="#8A5A30"/>${[-50,-34,-18].map(y=>`<path d="M${-196+ (y+70)*.2} ${y} H${196-(y+70)*.2}" stroke="#6B4423" stroke-width="3"/>`).join('')}
 <rect x="-130" y="-160" width="260" height="92" fill="#A8743E"/><path d="M-150 -160 L0 -210 L150 -160Z" fill="#7A4A26"/>
 ${[-90,-40,40,90].map(x=>`<rect x="${x-14}" y="-142" width="28" height="22" rx="4" fill="#3A2416"/>`).join('')}
 <g class="arkdoor" style="transition:transform .8s;transform-box:fill-box;transform-origin:50% 100%"><rect x="-22" y="-130" width="44" height="62" rx="4" fill="${o.open===false?'#6B4423':'#2A1A10'}"/></g>`;
const rainbow=()=>['#B3322A','#F08A3C','#F6C200','#2F7A4E','#3C8DD8','#24418F','#6A3A8A'].map((c,i)=>`<path d="M${-360+i*16} 0 A${360-i*16} ${300-i*16} 0 0 1 ${360-i*16} 0" stroke="${c}" stroke-width="16" fill="none"/>`).join('');
const rain=()=>{let s='';for(let i=0;i<70;i++){const x=(i*53)%820-10,y=(i*97)%450,d=rnd(.5,1.1);s+=`<path d="M${x} ${y} l-6 18" stroke="#BFD9F2" stroke-width="3" stroke-linecap="round" class="drop" style="animation-duration:${d}s;animation-delay:${-rnd(0,1)}s"/>`;}return s;};
const ladder=()=>`<path d="M-30 0 L-14 -400 M30 0 L14 -400" stroke="#E2A62B" stroke-width="8" stroke-linecap="round"/>${[...Array(14)].map((_,i)=>{const y=-20-i*28,w=30-i*1.15;return `<path d="M${-w} ${y} H${w}" stroke="#E2A62B" stroke-width="6" stroke-linecap="round"/>`}).join('')}`;
const stone=(o={})=>`<path d="M-30 0 Q-34 -26 -10 -30 Q20 -34 30 -16 Q36 0 30 0Z" fill="${o.c||'#8A8478'}"/><path d="M-14 -22 Q0 -26 12 -20" stroke="#ffffff44" stroke-width="3" fill="none"/>`;
const pillar=()=>`<path d="M-24 0 L-20 -90 Q0 -100 20 -90 L24 0Z" fill="#8A8478"/><path d="M-20 -90 Q0 -80 20 -90" stroke="#B9B3A6" stroke-width="3" fill="none"/><path d="M-10 -86 Q0 -80 10 -86" stroke="${C.gold}" stroke-width="5" fill="none"/>`;
const tent=()=>`<path d="M-110 0 L0 -120 L110 0Z" fill="#6E4A2E"/><path d="M-110 0 L0 -120 L-60 0Z" fill="#8A5E3A"/><path d="M0 -120 L-18 0 L18 0Z" fill="#2A1A10"/>${[-80,-40,40,80].map(x=>`<path d="M${x} ${-Math.abs(x)*-0+(-120+Math.abs(x)*1.09)} L${x} ${-120+Math.abs(x)*1.09+4}" stroke="${C.gold}" stroke-width="3"/>`).join('')}<path d="M-110 -6 L110 -6" stroke="${C.gold}" stroke-width="4"/><path d="M-110 -12 L110 -12" stroke="${C.red}" stroke-width="3"/>`;
const tukul=()=>`<rect x="-70" y="-80" width="140" height="80" fill="#C9A26A"/><path d="M-70 -40 H70" stroke="#A8824E" stroke-width="3"/><path d="M-90 -76 L0 -170 L90 -76Z" fill="#D9B45E"/><path d="M-90 -76 L0 -170 L90 -76" stroke="#B08A3C" stroke-width="4" fill="none"/>${[-60,-30,0,30,60].map(x=>`<path d="M${x*1.2} -78 L0 -168" stroke="#B08A3C" stroke-width="2"/>`).join('')}<rect x="-18" y="-56" width="36" height="56" rx="16" fill="#3A2416"/><g transform="translate(0 -178) scale(.3)">${cross(C.gold,C.red)}</g>`;
const church=()=>`<rect x="-120" y="-110" width="240" height="110" fill="#F4E7CB"/>${[-90,-50,50,90].map(x=>`<rect x="${x-10}" y="-84" width="20" height="34" rx="10" fill="#24418F"/>`).join('')}
 <rect x="-28" y="-80" width="56" height="80" rx="28" fill="#B3322A"/><path d="M-28 -50 H28" stroke="${C.gold}" stroke-width="3"/>
 <path d="M-140 -106 L0 -200 L140 -106Z" fill="#2F7A4E"/><path d="M-140 -106 H140" stroke="${C.gold}" stroke-width="6"/>
 <rect x="-34" y="-250" width="68" height="64" fill="#F4E7CB"/><path d="M-44 -246 L0 -290 L44 -246Z" fill="#2F7A4E"/><rect x="-10" y="-236" width="20" height="30" rx="10" fill="#24418F"/>
 <g transform="translate(0 -318) scale(.5)">${cross(C.gold,C.red)}</g><rect x="-3" y="-296" width="6" height="12" fill="${C.gold}"/>`;
const pyramid=()=>`<path d="M-140 0 L0 -150 L140 0Z" fill="#D9A04A"/><path d="M0 -150 L140 0 L40 0Z" fill="#B8823A"/>`;
const cityWall=()=>`<rect x="-200" y="-90" width="400" height="90" fill="#C9A26A"/>${[...Array(10)].map((_,i)=>`<rect x="${-200+i*42}" y="-110" width="24" height="22" fill="#C9A26A"/>`).join('')}<rect x="-30" y="-70" width="60" height="70" rx="30" fill="#5A3E26"/><rect x="-160" y="-170" width="70" height="90" fill="#B8915A"/><rect x="100" y="-150" width="60" height="70" fill="#B8915A"/><path d="M-170 -170 L-125 -210 L-80 -170Z" fill="${C.red}"/>`;
const pot=(o={})=>`<path d="M-26 0 Q-40 -30 -24 -50 L-14 -60 L14 -60 L24 -50 Q40 -30 26 0Z" fill="${o.c||'#A8582E'}"/><path d="M-18 -60 H18" stroke="#6B3418" stroke-width="5"/><path d="M-30 -30 H30" stroke="#E2A62B" stroke-width="3"/>${o.steam?`<path class="steam" d="M-8 -66 Q-14 -80 -6 -92 M8 -66 Q2 -82 10 -94" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" opacity=".8"/>`:''}`;
const bowl=()=>`<path d="M-40 -20 Q-36 6 0 8 Q36 6 40 -20Z" fill="#A8582E"/><ellipse cy="-20" rx="40" ry="10" fill="#B3322A"/><ellipse cy="-22" rx="30" ry="6" fill="#C9502E"/><path class="steam" d="M-10 -30 Q-16 -44 -8 -56 M10 -30 Q4 -46 12 -58" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" opacity=".8"/>`;
const injera=()=>`<ellipse rx="60" ry="18" fill="#C9A26A"/><ellipse rx="54" ry="14" fill="#E3C996"/>${[[-20,-2],[10,4],[24,-6],[-34,4]].map(([a,b])=>`<circle cx="${a}" cy="${b}" r="8" fill="#B3322A"/>`).join('')}`;
const spear=()=>`<path d="M0 0 L0 -200" stroke="#6B4423" stroke-width="6"/><path d="M0 -226 L10 -198 L-10 -198Z" fill="#B9C2D0"/>`;
const shield=()=>`<ellipse cy="-40" rx="32" ry="44" fill="${C.red}"/><ellipse cy="-40" rx="22" ry="34" fill="none" stroke="${C.gold}" stroke-width="4"/><g transform="translate(0 -40) scale(.3)">${cross(C.gold,C.white)}</g>`;
const sandals=()=>`<ellipse cx="-16" cy="-6" rx="11" ry="22" fill="#8A5A30" transform="rotate(-8)"/><ellipse cx="16" cy="-6" rx="11" ry="22" fill="#8A5A30" transform="rotate(8)"/><path d="M-24 -12 H-8 M8 -12 H24" stroke="#5A3418" stroke-width="3"/>`;
const star=(o={})=>{const r=o.r||12,c=o.c||'#FFF3C4';return `<path d="M0 ${-r} L${r*.3} ${-r*.3} L${r} 0 L${r*.3} ${r*.3} L0 ${r} L${-r*.3} ${r*.3} L${-r} 0 L${-r*.3} ${-r*.3}Z" fill="${c}"/>`;};
const bigStar=()=>`<g class="twinkle">${star({r:34,c:'#FFE18A'})}</g><path d="M0 30 L0 200" stroke="#FFE18A" stroke-width="3" opacity=".5"/>`;
const sun=()=>{let r='';for(let i=0;i<12;i++)r+=`<rect x="-4" y="-78" width="8" height="24" rx="4" fill="#F6B92B" transform="rotate(${i*30})"/>`;return `${r}<circle r="44" fill="#FFD25A"/><circle r="34" fill="#FFE18A"/><circle cx="-12" cy="-4" r="4" fill="#7A4A10"/><circle cx="12" cy="-4" r="4" fill="#7A4A10"/><path d="M-12 10 Q0 20 12 10" stroke="#7A4A10" stroke-width="3" fill="none" stroke-linecap="round"/>`};
const moon=()=>`<path d="M8 -44 A44 44 0 1 0 8 44 A58 58 0 0 1 8 -44Z" fill="#FFF1C2"/><circle cx="-22" cy="-8" r="3.6" fill="#8A7A4A"/><path d="M-28 10 Q-21 17 -14 10" stroke="#8A7A4A" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
const fire=()=>`<path d="M-30 0 L30 0 M-24 -6 L24 6 M24 -6 L-24 6" stroke="#6B4423" stroke-width="8" stroke-linecap="round"/><g class="flicker"><path d="M-22 -4 Q-30 -40 0 -76 Q30 -40 22 -4Z" fill="#F08A3C"/><path d="M-12 -4 Q-14 -30 0 -50 Q14 -30 12 -4Z" fill="#FFE18A"/></g>`;
const kebero=()=>`<path d="M-50 -90 L50 -90 L40 0 L-40 0Z" fill="#8A4A20"/><ellipse cy="-90" rx="50" ry="14" fill="#E9D8B4" stroke="#6B3418" stroke-width="3"/><ellipse rx="40" ry="10" fill="#6B3418"/>${[-36,-18,0,18,36].map(x=>`<path d="M${x} -78 L${x*.8} -6" stroke="#E9D8B4" stroke-width="2.4"/>`).join('')}<path d="M-46 -60 H46" stroke="${C.gold}" stroke-width="5"/><path d="M-43 -40 H43" stroke="${C.red}" stroke-width="5"/>`;
const candle=()=>`<rect x="-6" y="-60" width="12" height="60" rx="3" fill="#F4E7CB"/><g class="flicker"><path d="M-6 -62 Q0 -86 6 -62 Q0 -56 -6 -62Z" fill="#F6B92B"/></g>`;
const gift=(o={})=>`<rect x="-24" y="-40" width="48" height="40" rx="4" fill="${o.c||C.red}"/><rect x="-28" y="-48" width="56" height="12" rx="3" fill="${o.c2||C.gold}"/><rect x="-5" y="-48" width="10" height="48" fill="${o.c2||C.gold}"/>`;
const heart=(o={})=>`<path d="M0 0 C-40 -30 -30 -66 0 -48 C30 -66 40 -30 0 0Z" fill="${o.c||C.red}"/>`;
const scroll=()=>`<rect x="-40" y="-60" width="80" height="60" fill="#F4E7CB"/><rect x="-46" y="-66" width="92" height="10" rx="5" fill="#C9A26A"/><rect x="-46" y="-6" width="92" height="10" rx="5" fill="#C9A26A"/>${[-46,-36,-26,-16].map(y=>`<path d="M-30 ${y} H30" stroke="#8A6038" stroke-width="2"/>`).join('')}`;
const boat=()=>`<path d="M-120 -30 L120 -30 L90 0 L-90 0Z" fill="#8A5A30"/><path d="M-120 -30 L120 -30" stroke="${C.gold}" stroke-width="4"/>`;
const bed=()=>`<rect x="-100" y="-30" width="200" height="30" rx="6" fill="#8A5A30"/><rect x="-96" y="-44" width="192" height="18" rx="6" fill="#F4EEDF"/><rect x="-96" y="-60" width="44" height="22" rx="8" fill="#FFFFFF"/>`;
const pathDots=()=>[...Array(7)].map((_,i)=>`<circle cx="${i*40}" cy="${-Math.sin(i/2)*10}" r="5" fill="#C9A26A" opacity=".8"/>`).join('');
const sparkles=()=>[[-40,-30],[30,-50],[50,10],[-20,30],[0,-70]].map(([x,y],i)=>`<g transform="translate(${x} ${y})"><g class="twinkle" style="animation-delay:${i*.2}s">${star({r:8,c:'#FFF3C4'})}</g></g>`).join('');


const manger=(o={})=>`<path d="M-70 -50 L70 -50 L56 0 L-56 0Z" fill="#8A5A30"/><path d="M-60 -30 L60 -30" stroke="#6B4423" stroke-width="4"/>${[-60,-30,0,30,60].map(x=>`<path d="M${x} -50 L${x*1.1} -70" stroke="#E3C45A" stroke-width="5" stroke-linecap="round"/>`).join('')}<path d="M-66 -52 Q0 -66 66 -52" stroke="#E3C45A" stroke-width="10" fill="none"/>${o.baby?`<g transform="translate(0 -56) scale(1.2)">${baby({crossHalo:true})}</g>`:''}`;
const stable=()=>`<path d="M-200 0 L-200 -180 L0 -260 L200 -180 L200 0Z" fill="#6E4A2E"/><path d="M-160 0 L-160 -160 L160 -160 L160 0Z" fill="#2A1A10"/><path d="M-220 -176 L0 -270 L220 -176" stroke="#8A6038" stroke-width="16" fill="none" stroke-linecap="round"/>`;
const jar=(o={})=>`<path d="M-30 0 Q-44 -50 -26 -86 L-20 -96 L20 -96 L26 -86 Q44 -50 30 0Z" fill="#A9A49A" stroke="#7E796E" stroke-width="3"/><path d="M-24 -96 H24" stroke="#7E796E" stroke-width="6"/>${o.fill?`<ellipse cy="-92" rx="18" ry="5" fill="${o.fill}"/>`:''}`;
const net=(o={})=>`<path d="M-90 -60 Q0 30 90 -60" stroke="#C9A26A" stroke-width="4" fill="#C9A26A33"/>${[-60,-30,0,30,60].map(x=>`<path d="M${x} -58 L${x*.6} ${-20+Math.abs(x)*-.3}" stroke="#C9A26A" stroke-width="2"/>`).join('')}${o.full?[[-40,-30],[0,-14],[40,-30],[-20,-40],[22,-44],[0,-50]].map(([a,b],i)=>`<g transform="translate(${a} ${b}) scale(.6)">${fish({c:['#3C8DD8','#E2A62B','#C2272D'][i%3]})}</g>`).join(''):''}`;
const rockWater=(o={})=>`<path d="M-80 0 Q-96 -80 -40 -110 Q20 -130 70 -90 Q100 -50 86 0Z" fill="#9A8A74"/><path d="M-40 -80 Q0 -96 40 -76" stroke="#B9AC98" stroke-width="5" fill="none"/>${o.water?`<path d="M0 -70 Q-10 -30 -30 0 Q-60 20 -140 26 L-140 40 Q-40 36 10 0 Q14 -40 14 -70Z" fill="#7CC4F0" class="flow"/><path d="M-6 -60 Q-12 -20 -40 6" stroke="#fff" stroke-width="3" fill="none" opacity=".8"/>`:''}`;
const manna=()=>[[-14,-4],[6,-10],[16,2],[-4,8],[-20,10],[12,12]].map(([a,b])=>`<ellipse cx="${a}" cy="${b}" rx="6" ry="4" fill="#FFFDF4" stroke="#E7DFC6" stroke-width="1.5"/>`).join('');
const basket=()=>`<path d="M-50 -40 L50 -40 L40 0 L-40 0Z" fill="#C9A26A"/>${[-34,-14,6,26].map(x=>`<path d="M${x} -40 L${x+6} 0" stroke="#A8824E" stroke-width="3"/>`).join('')}<path d="M-50 -40 Q0 -100 50 -40" stroke="#A8824E" stroke-width="6" fill="none"/>`;
const waterWall=(o={})=>`<rect x="-210" y="-330" width="420" height="330" fill="#2B78B8"/><rect x="-210" y="-330" width="420" height="30" fill="#5AA0D8"/>${[...Array(9)].map((_,i)=>`<path d="M-200 ${-290+i*34} q25 -10 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0" stroke="#ffffff40" stroke-width="3" fill="none"/>`).join('')}`;
const pool=()=>`<ellipse rx="150" ry="36" fill="#9A8A74"/><ellipse rx="130" ry="26" fill="#5AA0D8"/><path d="M-80 -4 q20 -8 40 0 t40 0 t40 0" stroke="#fff" stroke-width="3" fill="none" opacity=".7"/>`;
const crowd=()=>[[-60,'#2F7A4E'],[0,'#B3322A'],[60,'#24418F']].map(([x,c],i)=>`<g transform="translate(${x} ${i%2?6:0}) scale(.45)">${figure({robe:c,arms:i===1?'up':'down',netela:i===1?C.gold:null})}</g>`).join('');

/* ---------- registry ---------- */
const P=(o)=>({draw:(x={})=>figure({...o,...x}),box:'-120 -260 240 270'});
const ART={
  figure:{draw:figure,box:'-120 -260 240 270'},
  text:{draw:(o={})=>`<text y="${(o.size||90)*.35}" text-anchor="middle" font-family="Grandstander,sans-serif" font-weight="800" font-size="${o.size||90}" fill="${o.c||'#B3322A'}">${o.t||''}</text>`,box:'-100 -70 200 140'},
  onion:{draw:()=>`<path d="M0 -60 Q34 -30 26 -8 Q16 6 0 6 Q-16 6 -26 -8 Q-34 -30 0 -60Z" fill="#B8445A"/><path d="M0 -60 Q12 -30 0 6 M0 -60 Q-12 -30 0 6" stroke="#E7A0B0" stroke-width="2" fill="none"/><path d="M0 -60 L-4 -76 M0 -60 L5 -78" stroke="#5E9A3A" stroke-width="4" stroke-linecap="round"/>`,box:'-40 -84 80 94'},
  lentils:{draw:()=>`<path d="M-34 0 Q-40 -40 -24 -56 L24 -56 Q40 -40 34 0Z" fill="#C9A26A"/><path d="M-24 -56 Q0 -70 24 -56" stroke="#8A6038" stroke-width="5" fill="none"/>${[[-14,-60],[0,-64],[12,-60],[-6,-58],[6,-58]].map(([a,b])=>`<circle cx="${a}" cy="${b}" r="5" fill="#C9502E"/>`).join('')}`,box:'-45 -80 90 90'},
  pepper:{draw:()=>`<path d="M-6 -60 Q20 -60 16 -20 Q12 4 -2 8 Q4 -20 -10 -50Z" fill="#C2272D"/><path d="M-6 -60 Q-10 -70 -2 -76" stroke="#5E9A3A" stroke-width="5" fill="none" stroke-linecap="round"/>`,box:'-30 -84 60 96'},
  blanket:{draw:()=>`<rect x="-46" y="-40" width="92" height="40" rx="8" fill="#F4EEDF"/><rect x="-46" y="-28" width="92" height="10" fill="#B3322A"/><path d="M-46 -23 h92" stroke="#E2A62B" stroke-width="3" stroke-dasharray="6 6"/>`,box:'-55 -50 110 60'},
  raindrop:{draw:()=>`<path d="M0 -24 Q14 -4 10 6 Q6 14 0 14 Q-6 14 -10 6 Q-14 -4 0 -24Z" fill="#9FD0F5" stroke="#fff" stroke-width="2"/>`,box:'-20 -30 40 50'},
  darkCloud:{draw:(o={})=>cloud({s:o.s||1,c:'#3A465E'}),box:'-70 -50 140 100'},
  shade:{draw:(o={})=>`<rect x="-10" y="-10" width="820" height="470" fill="${o.c||'#070A20'}" opacity="${o.o??.75}"/>`,box:'0 0 800 450'},
  shore:{draw:()=>`<path d="M0 268 Q150 262 230 290 Q290 330 300 450 H0Z" fill="#E2C68C"/><path d="M0 268 Q150 262 230 290" stroke="#fff" stroke-opacity=".5" stroke-width="4" fill="none"/>`,box:'0 0 800 450'},
  dawn:{draw:()=>`<defs><linearGradient id="dawnG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6C85F"/><stop offset="1" stop-color="#F2B868" stop-opacity="0"/></linearGradient></defs><rect width="800" height="300" fill="url(#dawnG)" opacity=".85"/>`,box:'0 0 800 450'},
  family:{draw:()=>`<g transform="translate(-70 0) scale(.62)">${figure({robe:'#8A5A30',beard:'white',halo:true,staff:true})}</g><g transform="translate(40 0) scale(-1 1)">${donkey({saddle:true})}</g><g transform="translate(46 -70) scale(.5)">${figure({mantle:'#24418F',robe:'#B3322A',halo:true,stars:true,arms:'hold',holdBaby:true})}</g>`,box:'-130 -230 250 240'},
  selam:{draw:(o={})=>selam(o.mouth),box:'-60 -66 120 134'},
  jesus:P({robe:'#B3322A',sash:'#24418F',crossHalo:true,beard:'dark',longHair:true,arms:'bless'}),
  jesusWalk:P({robe:'#B3322A',sash:'#24418F',crossHalo:true,beard:'dark',longHair:true,arms:'out'}),
  peter:P({robe:'#E2A62B',sash:C.green,beard:'grey',halo:true}),
  disciple:P({robe:'#2F7A4E',beard:'dark',halo:true}),
  johnBaptist:P({robe:'#8A6038',sash:'#C99A5E',beard:'dark',afro:true,halo:true,staff:true}),
  shepherd:P({robe:'#6E8F3A',beard:'dark',staff:true,cap:'#F4EEDF'}),
  pharaoh:P({robe:'#F4EEDF',sleeve:'#F4EEDF',nemes:true,sash:C.gold,band:C.gold,bandBg:'#24418F'}),
  wiseKing1:P({robe:'#6A3A8A',crown:true,beard:'white'}),
  wiseKing2:P({robe:'#24418F',crown:true,beard:'dark'}),
  wiseKing3:P({robe:'#2F7A4E',crown:true}),
  blindMan:P({robe:'#8C8478',closedEyes:true,beard:'dark',staff:true}),
  seeingMan:P({robe:'#8C8478',beard:'dark',arms:'up'}),
  manger:{draw:manger,box:'-80 -110 160 120'}, stable:{draw:stable,box:'-230 -280 460 290'},
  jar:{draw:jar,box:'-50 -110 100 120'}, net:{draw:net,box:'-100 -70 200 90'}, rockWater:{draw:rockWater,box:'-150 -140 250 190'},
  manna:{draw:manna,box:'-30 -20 60 40'}, basket:{draw:basket,box:'-60 -80 120 90'}, waterWall:{draw:waterWall,box:'-210 -340 420 340'},
  pool:{draw:pool,box:'-160 -45 320 90'}, crowd:{draw:crowd,box:'-110 -120 220 130'},
  angel:P({wings:true,halo:true,robe:'#FFFFFF',sleeve:'#FFFFFF',band:C.gold,bandBg:C.green,arms:'down'}),
  gabriel:P({wings:true,halo:true,robe:'#FFFFFF',sleeve:'#FFFFFF',band:C.gold,bandBg:C.green,arms:'out'}),
  michael:P({wings:true,halo:true,robe:C.red,sleeve:C.red,arms:'down',spear:true}),
  angelHead:{draw:(o={})=>angelHead(o.s||1),box:'-90 -40 180 120'},
  glory:{draw:glory,box:'-80 -80 160 160'},
  mary:P({mantle:'#24418F',robe:'#B3322A',halo:true,stars:true,longHair:true,arms:'pray'}),
  maryBaby:P({mantle:'#24418F',robe:'#B3322A',halo:true,stars:true,arms:'hold',holdBaby:true}),
  joseph:P({robe:'#8A5A30',beard:'white',halo:true,staff:true}),
  babyJesus:{draw:(o={})=>baby({crossHalo:true,...o}),box:'-30 -46 60 80'},
  baby:{draw:baby,box:'-30 -46 60 80'},
  noah:P({robe:'#7A5230',beard:'white',halo:true,arms:'out'}),
  noahWife:P({robe:'#2F7A4E',netela:C.red,halo:true}),
  abraham:P({robe:'#F4EEDF',sleeve:'#F4EEDF',beard:'white',halo:true,staff:true,sash:C.red}),
  sarah:P({robe:'#24418F',netela:C.gold,halo:true,beard:false}),
  isaacOld:P({robe:'#F4EEDF',sleeve:'#F4EEDF',beard:'white',halo:true,arms:'bless'}),
  isaacChild:P({kind:'child',robe:'#E2A62B',halo:true}),
  rebecca:P({robe:'#B3322A',netela:C.green}),
  jacob:P({robe:'#24418F',beard:'dark',halo:true,staff:true}),
  jacobYoung:P({robe:'#24418F',kind:'teen'}),
  esau:P({robe:'#A8582E',beard:'brown',afro:true,kind:'teen',bow:true}),
  moses:P({robe:'#B3322A',beard:'dark',halo:true,staff:true}),
  george:P({robe:'#B3322A',helmet:true,halo:true,spear:true,band:C.gold,bandBg:'#24418F'}),
  king:P({robe:'#6A3A8A',crown:true,beard:'dark'}),
  soldier:P({robe:'#5A5F6E',helmet:true,spear:true,bandBg:'#3A3F4E'}),
  man:P({robe:'#2F7A4E'}),
  woman:P({robe:'#B3322A',netela:C.gold}),
  boy:P({kind:'child',robe:'#FFFFFF',sleeve:'#FFFFFF',band:C.green}),
  girl:P({kind:'child',robe:'#FFFFFF',sleeve:'#FFFFFF',netela:C.green,band:C.green}),
  priest:P({robe:'#FFFFFF',sleeve:'#FFFFFF',beard:'dark',cap:'#FFFFFF',arms:'bless',band:C.gold}),
  lightMan:P({robe:'#FFF6D2',sleeve:'#FFF6D2',halo:true,band:'#FFF6D2',bandBg:C.gold,skin:'#E9C89A',hair:'#E9C89A'}),
  sleeper:{draw:lying,box:'-130 -70 240 80'},
  lion:{draw:lion,box:'-80 -80 180 130'}, cow:{draw:cow,box:'-90 -100 180 150'}, sheep:{draw:sheep,box:'-75 -60 140 100'},
  walia:{draw:walia,box:'-80 -110 140 160'}, gelada:{draw:gelada,box:'-60 -90 130 130'}, donkey:{draw:donkey,box:'-90 -150 180 190'},
  camel:{draw:camel,box:'-100 -120 180 170'}, horse:{draw:horse,box:'-100 -130 200 180'}, dragon:{draw:dragon,box:'-110 -140 300 180'},
  fish:{draw:fish,box:'-30 -30 76 60'}, bird:{draw:bird,box:'-36 -30 72 50'}, dove:{draw:dove,box:'-60 -46 104 66'}, raven:{draw:raven,box:'-46 -46 90 66'},
  elephant:{draw:elephant,box:'-90 -90 170 130'}, giraffe:{draw:giraffe,box:'-70 -170 120 210'}, snake:{draw:snake,box:'-70 -40 150 60'},
  cloud:{draw:cloud,box:'-70 -50 140 100'}, acacia:{draw:acacia,box:'-80 -120 160 130'}, enset:{draw:enset,box:'-90 -150 180 160'}, palm:{draw:palm,box:'-90 -240 190 250'},
  coffee:{draw:coffee,box:'-40 -80 80 85'}, bush:{draw:bush,box:'-90 -100 190 110'}, burningBush:{draw:burningBush,box:'-90 -150 190 160'},
  adeyAbeba:{draw:adeyAbeba,box:'-50 -50 100 100'}, flowers:{draw:flowerPatch,box:'-60 -60 120 70'},
  cross:{draw:(o={})=>cross(o.c,o.a),box:'-55 -55 110 110'}, handCross:{draw:handCross,box:'-70 -70 140 140'}, procCross:{draw:procCross,box:'-70 -180 140 290'},
  ark:{draw:ark,box:'-210 -220 420 230'}, rainbow:{draw:rainbow,box:'-370 -310 740 320'}, rain:{draw:rain,box:'0 0 800 450'},
  ladder:{draw:ladder,box:'-60 -410 120 420'}, stone:{draw:stone,box:'-40 -40 80 50'}, pillar:{draw:pillar,box:'-40 -110 80 120'},
  tent:{draw:tent,box:'-120 -130 240 140'}, tukul:{draw:tukul,box:'-100 -200 200 210'}, church:{draw:church,box:'-150 -350 300 360'},
  pyramid:{draw:pyramid,box:'-150 -160 300 170'}, city:{draw:cityWall,box:'-210 -220 420 230'},
  pot:{draw:pot,box:'-45 -100 90 110'}, bowl:{draw:bowl,box:'-50 -65 100 80'}, injera:{draw:injera,box:'-65 -30 130 60'},
  spear:{draw:spear,box:'-30 -230 60 240'}, shield:{draw:shield,box:'-40 -90 80 100'}, sandals:{draw:sandals,box:'-40 -36 80 60'},
  star:{draw:star,box:'-20 -20 40 40'}, bigStar:{draw:bigStar,box:'-40 -40 80 80'}, sun:{draw:sun,box:'-80 -80 160 160'}, moon:{draw:moon,box:'-50 -50 100 100'},
  fire:{draw:fire,box:'-40 -84 80 94'}, kebero:{draw:kebero,box:'-60 -110 120 120'}, candle:{draw:candle,box:'-20 -90 40 95'},
  gift:{draw:gift,box:'-34 -54 68 60'}, heart:{draw:heart,box:'-40 -64 80 70'}, scroll:{draw:scroll,box:'-50 -72 100 82'},
  boat:{draw:boat,box:'-130 -40 260 50'}, bed:{draw:bed,box:'-110 -70 220 80'}, path:{draw:pathDots,box:'-10 -20 260 40'}, sparkles:{draw:sparkles,box:'-60 -80 120 120'},
};

/* ---------- backgrounds (800 x 450) ---------- */
const grad=(id,a,b)=>`<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`;
const amba=(fill='#6E8F3A',top='#8DAA4A')=>`<path d="M0 300 L60 300 L90 220 L190 214 L220 300 L300 300 L330 250 L420 246 L450 300 L520 300 L560 190 L700 184 L740 300 L800 300 V450 H0Z" fill="${fill}"/>
 <path d="M90 220 L190 214 L196 232 L84 238Z M330 250 L420 246 L426 262 L324 266Z M560 190 L700 184 L707 204 L553 208Z" fill="${top}"/>
 <path d="M0 330 Q200 310 400 328 T800 322 V450 H0Z" fill="#4E7A2E"/>`;
const waveLines=(y0,n,c='#ffffff40')=>{let s='';for(let i=0;i<n;i++){const y=y0+i*28;let d=`M${(i%2)*40-80} ${y}`;for(let k=0;k<12;k++)d+=' q20 -10 40 0 t40 0';s+=`<path d="${d}" stroke="${c}" stroke-width="3" fill="none"/>`}return `<g class="waves">${s}</g>`};
const rays=(cx,cy,n,len,op)=>[...Array(n)].map((_,i)=>{const a=i*2*Math.PI/n;return `<path d="M${cx} ${cy} L${cx+len*Math.cos(a)} ${cy+len*Math.sin(a)} L${cx+len*Math.cos(a+.12)} ${cy+len*Math.sin(a+.12)}Z" fill="#FFF6D2" opacity="${op}"/>`}).join('');
const nightStars=(n=22)=>[...Array(n)].map((_,i)=>`<g transform="translate(${(i*137+40)%800} ${(i*61+20)%230})"><g class="twinkle" style="animation-delay:${(i%7)*.3}s">${star({r:4+(i%3)*2})}</g></g>`).join('');
const BG={
  day:()=>`<defs>${grad('bgday','#79BEF0','#F3E3B5')}</defs><rect width="800" height="450" fill="url(#bgday)"/><g transform="translate(560 80)"><g class="drift">${cloud({s:.7})}</g></g><g transform="translate(170 60)"><g class="drift" style="animation-delay:-6s">${cloud({s:.55})}</g></g>${amba()}`,
  sunrise:()=>`<defs>${grad('bgsr','#2A3F8F','#F2B868')}</defs><rect width="800" height="450" fill="url(#bgsr)"/>${amba('#5E7F32','#7D9C42')}`,
  night:()=>`<defs>${grad('bgn','#070B24','#1F2D6B')}</defs><rect width="800" height="450" fill="url(#bgn)"/>${nightStars()}<g transform="translate(680 80) scale(.6)">${moon()}</g>${amba('#1E3320','#27412A')}`,
  desert:()=>`<defs>${grad('bgd','#8CC8F0','#F6DDA6')}</defs><rect width="800" height="450" fill="url(#bgd)"/><g transform="translate(680 90) scale(.55)">${sun()}</g><path d="M0 320 Q160 270 340 310 T800 300 V450 H0Z" fill="#E3B66E"/><path d="M0 360 Q220 330 420 356 T800 350 V450 H0Z" fill="#D49E52"/>`,
  egypt:()=>`<defs>${grad('bge','#8CC8F0','#F6DDA6')}</defs><rect width="800" height="450" fill="url(#bge)"/><g transform="translate(110 90) scale(.5)">${sun()}</g><g transform="translate(560 318) scale(.9)">${pyramid()}</g><g transform="translate(700 318) scale(.6)">${pyramid()}</g><path d="M0 320 Q160 290 340 310 T800 300 V450 H0Z" fill="#E3B66E"/><path d="M0 380 Q220 350 420 376 T800 370 V450 H0Z" fill="#D49E52"/><g transform="translate(40 360) scale(.7)">${palm()}</g>`,
  storm:()=>`<defs>${grad('bgs','#2E3A52','#5A6A86')}${grad('bgsw','#2B5E8C','#0F2E52')}</defs><rect width="800" height="450" fill="url(#bgs)"/>${[[120,70],[380,50],[640,80]].map(([x,y])=>`<g transform="translate(${x} ${y})">${cloud({s:1.2,c:'#3A465E'})}</g>`).join('')}<rect y="300" width="800" height="150" fill="url(#bgsw)"/>${waveLines(316,5)}`,
  sea:()=>`<defs>${grad('bgsea','#79BEF0','#E4F3FD')}${grad('bgseaw','#2B78B8','#123E72')}</defs><rect width="800" height="450" fill="url(#bgsea)"/><rect y="300" width="800" height="150" fill="url(#bgseaw)"/>${waveLines(316,5,'#ffffff30')}`,
  heaven:()=>`<defs><radialGradient id="bgh" cx="50%" cy="10%" r="90%"><stop offset="0" stop-color="#FFF6D2"/><stop offset=".55" stop-color="#F6C85F"/><stop offset="1" stop-color="#D9822F"/></radialGradient></defs><rect width="800" height="450" fill="url(#bgh)"/><g transform="translate(400 0)"><g class="spin">${rays(0,0,14,900,.2)}</g></g>`,
  garden:()=>`<defs><radialGradient id="bgg" cx="50%" cy="0%" r="100%"><stop offset="0" stop-color="#FFF6D2"/><stop offset=".6" stop-color="#BFE3A8"/><stop offset="1" stop-color="#6FAE5A"/></radialGradient></defs><rect width="800" height="450" fill="url(#bgg)"/><path d="M0 330 Q400 300 800 330 V450 H0Z" fill="#4E8A3A"/>`,
  field:()=>`<defs>${grad('bgf','#8CC8F0','#EAF4D8')}</defs><rect width="800" height="450" fill="url(#bgf)"/><g transform="translate(600 70)"><g class="drift">${cloud({s:.7})}</g></g><path d="M0 300 Q200 270 400 296 T800 290 V450 H0Z" fill="#7DA44A"/><path d="M0 350 Q220 330 420 352 T800 346 V450 H0Z" fill="#5E8A3A"/>`,
  mountain:()=>`<defs>${grad('bgm','#79BEF0','#F3E3B5')}</defs><rect width="800" height="450" fill="url(#bgm)"/><path d="M120 340 L400 60 L680 340Z" fill="#9A7A56"/><path d="M400 60 L680 340 L520 340Z" fill="#7E6244"/><path d="M360 100 L400 60 L440 100 L420 96 L400 110 L380 94Z" fill="#F4EEDF"/><path d="M0 330 Q200 310 400 328 T800 322 V450 H0Z" fill="#6E8F3A"/>`,
  church:()=>`<defs>${grad('bgc','#F4E7CB','#E9D3A6')}</defs><rect width="800" height="450" fill="url(#bgc)"/>${[0,1,2,3].map(i=>`<rect x="${70+i*180}" y="60" width="120" height="200" rx="60" fill="#24418F" opacity=".14"/>`).join('')}<rect y="330" width="800" height="120" fill="#B3322A"/><path d="M0 330 H800" stroke="#E2A62B" stroke-width="8"/>${[...Array(20)].map((_,i)=>`<path d="M${i*42} 360 l21 20 l21 -20" stroke="#E2A62B" stroke-width="3" fill="none"/>`).join('')}`,
  gold:()=>`<defs><radialGradient id="bggo" cx="50%" cy="45%" r="75%"><stop offset="0" stop-color="#FFF1BF"/><stop offset=".55" stop-color="#F0B53A"/><stop offset="1" stop-color="#B3322A"/></radialGradient></defs><rect width="800" height="450" fill="url(#bggo)"/><g transform="translate(400 225)"><g class="spin">${rays(0,0,16,700,.18)}</g></g>`,
  quiz:()=>`<defs>${grad('bgq','#FFE7A8','#F6C85F')}</defs><rect width="800" height="450" fill="url(#bgq)"/>${[...Array(12)].map((_,i)=>`<g transform="translate(${(i*137)%800} ${(i*89)%450})" opacity=".3">${star({r:10,c:'#fff'})}</g>`).join('')}`,
  river:()=>`<defs>${grad('bgr','#8CC8F0','#EAF4D8')}</defs><rect width="800" height="450" fill="url(#bgr)"/>${amba('#7DA44A','#94B85A')}<path d="M0 360 Q200 330 400 356 T800 340 V420 Q600 410 400 430 T0 420Z" fill="#3C8DD8"/><path d="M40 380 q20 -8 40 0 t40 0 M300 400 q20 -8 40 0 t40 0 M560 380 q20 -8 40 0 t40 0" stroke="#fff" stroke-width="3" fill="none" opacity=".6"/>`,
  lake:()=>`<defs>${grad('bgl','#9FD0F5','#EAF4FB')}${grad('bglw','#3C8DD8','#1C5A96')}</defs><rect width="800" height="450" fill="url(#bgl)"/><path d="M0 230 L140 190 L300 220 L460 180 L620 210 L800 190 V250 H0Z" fill="#8FA8B8" opacity=".6"/><rect y="250" width="800" height="200" fill="url(#bglw)"/>${waveLines(266,7,'#ffffff30')}`,
  wedding:()=>`<defs>${grad('bgw','#F6E3B8','#E9C98A')}</defs><rect width="800" height="450" fill="url(#bgw)"/>${[...Array(9)].map((_,i)=>`<path d="M${i*100} 0 Q${i*100+50} 60 ${i*100+100} 0" stroke="${[C.red,C.green,C.gold][i%3]}" stroke-width="6" fill="none"/>`).join('')}<rect y="340" width="800" height="110" fill="#C9A26A"/><path d="M0 340 H800" stroke="#8A6038" stroke-width="6"/>`,
  dark:()=>`<rect width="800" height="450" fill="#070A20"/>`,
};

/* draw an art piece with options, or a raw svg string */
function draw(spec){ if(!spec) return ''; if(typeof spec==='string'){ const a=ART[spec]; return a?a.draw({}):spec; } const [k,o]=spec; const a=ART[k]; return a?a.draw(o||{}):''; }
function box(spec){ const k=typeof spec==='string'?spec:spec[0]; return (ART[k]&&ART[k].box)||'-100 -100 200 200'; }
function icon(spec,extra=''){ return `<svg viewBox="${box(spec)}" aria-hidden="true" ${extra}>${draw(spec)}</svg>`; }
window.BKArt={ART,BG,draw,box,icon,cross,selam,rays,waveLines,star,C,rnd};
})();
