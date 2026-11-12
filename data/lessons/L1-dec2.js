/* Level I, December week 2: Crossing the Red Sea (Exodus 5, 7-14) */
BKLesson({
 id:'L1-dec2', title:'Crossing the Red Sea', am:'ቀይ ባሕር', sticker:'waterWall',
 pages:[
  {game:'cover', bg:'desert', title:'Crossing the Red Sea', am:'ቀይ ባሕርን መሻገር',
   props:[{art:'waterWall',x:120,y:450,s:.6},{art:'waterWall',x:680,y:450,s:.6},{art:'moses',x:400,y:425,s:.7,anim:'bob'},{art:'crowd',x:540,y:440,s:.8}],
   say:['cover','[[selam]]! Do you remember what God told Moses on the mountain? Go to Egypt and free My people! Today we see a great miracle on the way. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, December week 2: <b>Crossing the Red Sea</b> (Exodus 5, 7 to 14).</p>'},

  {game:'story', bg:'egypt', chip:'Let My people go',
   props:[{id:'moses',art:'moses',x:220,y:425,s:.7},{id:'king',art:'pharaoh',x:560,y:425,s:.7},{id:'crowd',art:'crowd',x:400,y:445,s:.7,hidden:true}],
   beats:[
    {say:['k1','Moses went to the king of Egypt and said: God says, let My people go! Tap the king.'],tap:'king'},
    {wiggle:['king'],sfx:'no',say:['k2','But the king said no! So God sent many troubles upon the king and his people.']},
    {show:['crowd'],sfx:'glory',say:['k3','At last the king let God\'s people go. Moses led the Israelites out of Egypt!']},
   ]},

  {game:'story', bg:'desert', chip:'The sea opens',
   props:[{id:'army',art:'soldier',x:60,y:430,s:.5,hidden:true},{id:'army2',art:'soldier',x:130,y:432,s:.48,hidden:true},{id:'crowd',art:'crowd',x:250,y:445,s:.75},{id:'left',art:'waterWall',x:400,y:450,s:.62},{id:'moses',art:['moses',{arms:'up'}],x:370,y:425,s:.7},{id:'right',art:'waterWall',x:660,y:450,s:.62}],
   beats:[
    {say:['r1','They came to the Red Sea. Then the king changed his mind, and sent his army after them!'],show:['army','army2'],sfx:'rumble'},
    {wiggle:['crowd'],say:['r2','The people were afraid. God told Moses: hit the sea with your rod! Tap Moses.'],tap:'moses'},
    {move:{left:[150,450,.62],right:[790,450,.62]},sfx:'whoosh',fx:'flash',say:['r3','The water parted in two, and there was dry land in the middle!']},
   ],
   parent:'<p>God told Moses to hit the Red Sea with his rod. The water parted in two, making dry land in the middle.</p>'},

  {game:'drag', bg:'desert', chip:'Cross on dry land',
   props:[{art:'waterWall',x:120,y:450,s:.62},{art:'waterWall',x:800,y:450,s:.62},{art:'moses',x:720,y:425,s:.6}],
   zone:{x:560,y:260,w:220,h:190},
   items:[{art:'man',x:260,y:425,s:.45},{art:'woman',x:330,y:430,s:.45},{art:'boy',x:400,y:432,s:.5},{art:'girl',x:460,y:432,s:.5},{art:'sheep',x:300,y:330,s:.35}],
   intro:['cross','Help everyone walk across on the dry land! Drag each one to Moses on the other side.'],
   progress:'*{n} more* to cross!',
   done:['cross-done','Everyone crossed the Red Sea safely, on dry land!']},

  {game:'story', bg:'desert', chip:'God saves His people',
   props:[{id:'army',art:'soldier',x:300,y:430,s:.5},{id:'army2',art:'soldier',x:380,y:432,s:.48},{id:'left',art:'waterWall',x:120,y:450,s:.62},{id:'right',art:'waterWall',x:800,y:450,s:.62},{id:'moses',art:['moses',{arms:'up'}],x:690,y:425,s:.6},{id:'crowd',art:'crowd',x:580,y:445,s:.6}],
   beats:[
    {say:['a1','The king\'s army followed them into the sea. Moses lifted his rod again. Tap Moses!'],tap:'moses'},
    {move:{left:[300,450,.62],right:[560,450,.62]},hide:['army','army2'],sfx:'whoosh',say:['a2','The water came back together, and the army could not catch God\'s people.']},
    {fx:'confetti',sfx:'glory',say:['a3','The Israelites praised God for saving them. God always takes care of His people!']},
   ],
   parent:'<p>The army followed into the sea; Moses hit the sea again, and the water came back. The children\'s version simply says the army could not catch them; the full story is in the lesson text below.</p>'},

  {game:'quiz', questions:[
    {id:'q1',q:'Did the king let the Israelites go at first?',a:[['Yes',['text',{t:'Yes',c:'#2F7A4E',size:70}]],['No',['text',{t:'No',size:70}]]],c:1},
    {id:'q2',q:'What did God tell Moses to do when the army came?',a:[['Fight back','shield'],['Go back to Egypt','pyramid'],['Hit the water with his rod','waterWall']],c:2},
    {id:'q3',q:'How did the Israelites cross the Red Sea? By swimming, by boat, or on dry land?',show:'How did they cross the Red Sea?',a:[['Swimming','fish'],['In a boat','boat'],['On dry land','crowd']],c:2},
   ]},
  {game:'song', song:'musse-zer-iye-zer-iye-bedebr'},
 ]
});
