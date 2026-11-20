/* Level IV (Grade 7 and up), September week 1: Tobiah (Book of Tobit, in the Ethiopian Orthodox canon) */
BKLesson({
 id:'L4-sep1', title:'Tobiah and the Angel', am:'ጦቢያ', sticker:'angel',
 pages:[
  {game:'cover', bg:'field', title:'Tobiah and the Angel', am:'ጦቢያ',
   props:[{art:['figure',{kind:'teen',robe:'#24418F',sleeve:'#24418F',staff:true}],x:130,y:440,s:.6},{art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',staff:true}],x:230,y:440,s:.62},{art:'bigFish',x:620,y:420,s:.45}],
   say:['cover','[[selam]]! Two people, far apart, both prayed in despair on the same day. God answered both prayers with one journey, and one very surprising travel guide.'],
   parent:'<p>This lesson follows Level IV, September week 1: <b>Tobiah</b> (Book of Tobit). Aim: learn about the benefit of spiritual virtues from the story of Tobiah.</p><p>Our Church honors the Archangel Raphael (Kidus Rufael) as the one who brings the prayers of the faithful before God.</p>'},

  {game:'story', bg:'day', chip:'Two prayers',
   props:[{id:'tobit',art:['figure',{robe:'#8A5A30',sleeve:'#8A5A30',beard:'grey',closedEyes:true}],x:180,y:440,s:.6},{id:'bird',art:'bird',x:230,y:200,s:.4},{id:'sarah',art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',netela:'#FFFFFF',arms:'pray'}],x:620,y:440,s:.55},{id:'glow',art:'glory',x:400,y:120,s:.8,hidden:true}],
   beats:[
    {say:['p1','Tobit lived in Persia under a cruel king. He gave to the poor, and buried the people the king had killed. Tap Tobit.'],tap:'tobit'},
    {move:{bird:[190,330]},say:['p2','One day, tired from helping, he lay outside with his eyes open, and a bird\'s droppings fell into them. He became blind. In despair he prayed: Lord, send Your angel to take my soul.']},
    {wiggle:['sarah'],say:['p3','Far away, a young woman named Sarah prayed the same day. Seven times she had married, and each husband died on the wedding night. People spoke evil of her. She prayed: Take me away, Lord.']},
    {show:['glow'],sfx:'glory',say:['p4','God heard both prayers at His throne, and sent the Archangel Raphael to help them.']},
   ]},

  {game:'choose', bg:'day', chip:'Who will guide him?',
   props:[{id:'tobit',art:['figure',{robe:'#8A5A30',sleeve:'#8A5A30',beard:'grey',closedEyes:true}],x:150,y:440,s:.55},{id:'mom',art:['figure',{robe:'#24418F',sleeve:'#24418F',netela:'#FFFFFF'}],x:240,y:440,s:.5},{id:'tob',art:['figure',{kind:'teen',robe:'#24418F',sleeve:'#24418F',staff:true}],x:420,y:440,s:.55},{id:'guide',art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',staff:true}],x:600,y:440,s:.6}],
   prompt:['g0','Tobit sent his son Tobiah on a long journey to collect money he had left with a man in Media. Tobiah found a young man who knew the way. His mother cried. What did Tobit tell her?'],
   options:[
    {label:'You are right, he will never come back',art:'darkCloud',good:false,say:['g1','No. Tobit had faith. Try again.']},
    {label:'Do not worry. An angel of the Lord will go before him',art:'angel',then:{wiggle:['guide']},
     say:['g2','He did not know it, but he was right. The young guide was the angel himself!']},
   ]},

  {game:'story', bg:'river', chip:'The great fish',
   props:[{id:'tob',art:['figure',{kind:'teen',robe:'#24418F',sleeve:'#24418F',staff:true}],x:300,y:440,s:.55},{id:'guide',art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',staff:true}],x:180,y:440,s:.6},{id:'fish',art:['bigFish',{open:true}],x:650,y:420,s:.6}],
   beats:[
    {move:{fish:[520,420]},sfx:'whoosh',say:['f1','On the way, a great fish leaped out of the water to swallow Tobiah! Tap the fish.'],tap:'fish'},
    {move:{fish:[560,450,.45]},say:['f2','The young man helped him, and they caught it and ate it. The guide told him to keep a piece of its liver.']},
    {move:{tob:[600,440],guide:[480,440]},say:['f3','He led Tobiah to Raguel\'s house, and helped him marry Sarah, and live. Everyone had feared he would die like the others, but he did not.']},
   ]},

  {game:'story', bg:'day', chip:'Tobit can see!',
   props:[{id:'tobit',art:['figure',{robe:'#8A5A30',sleeve:'#8A5A30',beard:'grey',closedEyes:true}],x:200,y:440,s:.6},{id:'see',art:['figure',{robe:'#8A5A30',sleeve:'#8A5A30',beard:'grey',arms:'up'}],x:200,y:440,s:.6,hidden:true},{id:'tob',art:['figure',{kind:'teen',robe:'#24418F',sleeve:'#24418F'}],x:620,y:440,s:.55},{id:'sarah',art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',netela:'#FFFFFF'}],x:700,y:440,s:.5}],
   beats:[
    {say:['s1','At last they came home. Tobit came out to meet his son. Tap Tobiah.'],tap:'tob'},
    {move:{tob:[300,440]},say:['s2','Tobiah hugged his father, and rubbed his eyes with the fish\'s liver, as the guide had said.']},
    {hide:['tobit'],show:['see'],fx:'flash',sfx:'glory',say:['s3','Tobit could see! He saw his son, and his son\'s wife Sarah.']},
   ]},

  {game:'choose', bg:'heaven', chip:'Who is the guide?',
   props:[{id:'guide',art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',staff:true}],x:400,y:440,s:.6},{id:'ang',art:'angel',x:400,y:430,s:.65,hidden:true},{id:'fam',art:'family',x:150,y:440,s:.55}],
   prompt:['r0','Tobiah wanted to pay the guide half of everything. But the young man said: I brought your prayers before God. I was with you when you buried the dead and helped the poor. Who was he?'],
   options:[
    {label:'Just a kind traveler',art:'man',good:false,say:['r1','He was much more than that. Try again.']},
    {label:'Raphael, one of the seven archangels',art:'angel',then:{hide:['guide'],show:['ang'],fx:'flash'},
     say:['r2','He said: I am Raphael, one of the seven archangels who bring the prayers of the saints before the glory of the Lord.']},
   ]},

  {game:'match', chip:'What we learn',
   heading:'Match each part of the story to its lesson',
   intro:['m0','Match each part of the story to what it teaches.'],
   pairs:[
    ['Tobit and Sarah prayed to die','God answers prayer in His own, better way'],
    ['An angel went before Tobiah','God sends His angels to help us'],
    ['Tobit helped the poor','God rewards those who give'],
    ['Raphael was there when Tobit buried the dead','Angels stay with us when we do good'],
   ],
   done:['m1','Tobit and Raguel lived long enough to see the children of Tobiah and Sarah.']},

  {game:'verse', chip:'Memory verse',
   verse:'The hand of our God is upon all those for good who seek Him.', ref:'Ezra 8:22',
   chunks:['The hand of our God','is upon all those','for good','who seek Him.'],
   intro:['verse-intro','Our memory verse, from Ezra: The hand of our God is upon all those for good who seek Him. Build it in order.'],
   done:['verse-done','His hand was on Tobit, Sarah and Tobiah the whole way.']},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Tobit and Sarah felt hopeless, but God had a plan. When have you felt hopeless, and how did God help?'],
    ['k2','How many archangels are there? Can you name the angels from our earlier lessons?','Michael, Gabriel, Raphael, Uriel...'],
    ['k3','Tobit kept doing good even when it was dangerous. What good thing can you keep doing, even when it is hard?'],
   ]},
 ]
});
