/* Extra art and backgrounds for the lesson builds, kept apart from js/art.js (which the art thread owns).
   Adds entries to BKArt.ART and BKArt.BG; an entry with the same key in art.js wins. */
(function(){
const A=window.BKArt; if(!A) return;
const addArt=(k,v)=>{ if(!A.ART[k]) A.ART[k]=v; };
const addBG=(k,f)=>{ if(!A.BG[k]) A.BG[k]=f; };
/* soft parchment for reading pages, with a woven tibeb band top and bottom */
const band=y=>`<g transform="translate(0 ${y})"><rect width="800" height="14" fill="#B3322A"/><path d="${[...Array(40)].map((_,i)=>`M${i*20} 14 l10 -10 l10 10`).join(' ')}" stroke="#E2A62B" stroke-width="3" fill="none"/><rect y="0" width="800" height="3" fill="#2F7A4E"/></g>`;
addBG('paper',()=>`<defs><linearGradient id="bgpa" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF8E6"/><stop offset="1" stop-color="#F6E7C3"/></linearGradient></defs><rect width="800" height="450" fill="url(#bgpa)"/>${band(0)}${band(436)}`);
/* open Bible with a cross */
addArt('bible',{draw:()=>`<path d="M-90 -10 Q-45 -30 0 -12 Q45 -30 90 -10 V50 Q45 32 0 50 Q-45 32 -90 50Z" fill="#7A2E22"/><path d="M-84 -14 Q-42 -32 -2 -16 V44 Q-42 28 -84 44Z" fill="#FFF8E6"/><path d="M2 -16 Q42 -32 84 -14 V44 Q42 28 2 44Z" fill="#FFF8E6"/>${[0,1,2,3,4].map(i=>`<path d="M-74 ${-6+i*9} Q-42 ${-20+i*9} -12 ${-8+i*9}" stroke="#C9B48A" stroke-width="2.5" fill="none"/><path d="M12 ${-8+i*9} Q42 ${-20+i*9} 74 ${-6+i*9}" stroke="#C9B48A" stroke-width="2.5" fill="none"/>`).join('')}<path d="M0 -60 V-24 M-12 -46 H12" stroke="#E2A62B" stroke-width="7" stroke-linecap="round"/>`,box:'-100 -70 200 130'});
})();
