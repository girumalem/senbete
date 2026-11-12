/* Level II (Grades 1-3), Easter season week 8: Peter Freed by an Angel (Acts 12:5-19) */
BKLesson({
 id:'L2-eas8', title:'The Iron Gate Opens', am:'የብረቱ በር ተከፈተ', sticker:'chains',
 pages:[
  {game:'cover', bg:'night', title:'The Iron Gate Opens', am:'የብረቱ በር ተከፈተ',
   props:[{art:'gate',x:640,y:440,s:.8},{art:'angel',x:120,y:430,s:.55},{art:'peter',x:225,y:440,s:.55}],
   say:['cover','[[selam]]! The church prayed, and God sent His angel. Let\'s see how [[petros]] got out of prison! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, Easter week 8: <b>Peter Freed by an Angel</b> (Acts 12:5-19). Aim: learn about the power of prayer.</p><p>Review: How did the apostles choose Matthias?</p>'},

  {game:'read', chip:'Read along', heading:'In prison', pic:'chains',
   paras:[
    ['r1','The apostles taught about Jesus in Jerusalem. Some leaders wanted to stop them.'],
    ['r2','King Herod put [[petros]] in prison. Two chains held him, and two soldiers slept beside him.'],
    ['r3','More guards stood at the gates outside.'],
    ['r4','The believers gathered together and prayed for [[petros]].'],
   ]},

  {game:'story', bg:'dark', chip:'Get up quickly!',
   props:[{id:'glow',art:'glory',x:250,y:300,s:1.1,hidden:true},{id:'angel',art:'angel',x:250,y:430,s:.6,hidden:true},{id:'s1',art:'soldier',x:370,y:440,s:.45},{id:'sleep',art:'sleeper',x:510,y:440,s:.9},{id:'chains',art:'chains',x:510,y:445,s:1},{id:'broke',art:['chains',{broken:true}],x:510,y:445,s:1,hidden:true},{id:'peter',art:'peter',x:510,y:440,s:.55,hidden:true},{id:'s2',art:'soldier',x:660,y:440,s:.45}],
   beats:[
    {say:['a1','In the middle of the night, [[petros]] was asleep.']},
    {show:['glow','angel'],sfx:'glory',say:['a2','Suddenly an angel came, and the room was filled with light! Tap the angel.'],tap:'angel'},
    {say:['a3','The angel woke him: Get up quickly! Tap the chains.'],tap:'chains'},
    {hide:['chains','sleep'],show:['broke','peter'],sfx:'pop',say:['a4','The chains fell off his hands! The angel said: Put on your sandals and follow me.']},
    {wiggle:['peter'],say:['a5','[[petros]] thought he was dreaming!']},
   ]},

  {game:'drag', bg:'night', chip:'Through the gates',
   props:[{art:'gate',x:640,y:440,s:.8},{art:'angel',x:520,y:430,s:.5}],
   zone:{x:560,y:240,w:200,h:210},
   items:[{art:'peter',x:110,y:440,s:.55}],
   intro:['gates','They passed the first guard, and the second. Then came the big iron gate. Drag [[petros]] to the gate!'],
   done:['gates-done','The iron gate opened all by itself, and they walked out into the street!']},

  {game:'order', chip:'What happened first?',
   intro:['order','Tap the pictures in the order they happened.'],
   cards:[
    {art:'chains',cap:'Peter was chained in prison',say:['o1','[[petros]] was chained in prison.']},
    {art:'angel',cap:'An angel came with light',say:['o2','An angel came with light.']},
    {art:'sandals',cap:'Peter put on his sandals',say:['o3','He put on his sandals.']},
    {art:'gate',cap:'The iron gate opened',say:['o4','The iron gate opened by itself.']},
   ],
   done:['order-done','God answered the prayers of the church!']},

  {game:'story', bg:'night', chip:'At Mark\'s house',
   props:[{id:'door',art:'door',x:600,y:440,s:.9},{id:'peter',art:'peter',x:240,y:440,s:.55},{id:'w',art:['woman',{robe:'#24418F',netela:'#FFFFFF'}],x:600,y:440,s:.55,hidden:true},{id:'m',art:'man',x:700,y:440,s:.5,hidden:true}],
   beats:[
    {say:['h1','Then the angel left. [[petros]] said: Now I know the Lord sent His angel to save me!']},
    {say:['h2','He went to the house of Mark\'s mother, where many people were praying. Tap the door.'],tap:'door'},
    {hide:['door'],show:['w','m'],sfx:'glory',fx:'confetti',say:['h3','They were so happy to see him! He told them how God had saved him.']},
   ]},

  {game:'quiz', questions:[
    {id:'q1',q:'What did the church do for Peter?',a:[['They prayed','church'],['They went home','bed']],c:0},
    {id:'q2',q:'What fell off Peter\'s hands?',a:[['Chains','chains'],['Gloves','sandals']],c:0},
    {id:'q3',q:'How did the iron gate open?',a:[['By itself','gate'],['Peter broke it','stone']],c:0},
   ]},
  {game:'song', song:'menfes-kidus-werede-la-ile-h'},
 ]
});
