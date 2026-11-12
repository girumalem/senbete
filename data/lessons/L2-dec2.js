/* Level II (Grades 1-3), December week 2: Moses Leads Israel Out of Egypt (Exodus 3, 5, 13, 14) */
BKLesson({
 id:'L2-dec2', title:'Let My People Go!', am:'ሕዝቤን ልቀቅ', sticker:'burningBush',
 pages:[
  {game:'cover', bg:'mountain', title:'Let My People Go!', am:'ሕዝቤን ልቀቅ',
   props:[{art:'burningBush',x:560,y:440,s:.8},{art:'moses',x:250,y:430,s:.6},{art:'sandals',x:330,y:440,s:.6}],
   say:['cover','[[selam]]! Moses grew up in Pharaoh\'s house, but he was sad for his people, the Israelites, who were slaves. Today God gives Moses a big job! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, December week 2: <b>Moses Leads Israel Out of Egypt</b> (Exodus 3, 5, 13, 14). Aim: God hears the cry of His people and saves them with His mighty hand.</p>'},

  {game:'story', bg:'mountain', chip:'The burning bush',
   props:[{id:'bush',art:'burningBush',x:580,y:440,s:.8},{id:'moses',art:'moses',x:200,y:430,s:.6},{id:'shoes',art:'sandals',x:200,y:445,s:.6}],
   beats:[
    {wiggle:['bush'],say:['b1','One day Moses saw a bush on fire on a mountain. But the bush did not burn up! Tap the bush.'],tap:'bush'},
    {move:{moses:[400,430,.6],shoes:[400,445,.6]},sfx:'glory',say:['b2','A voice called from the fire: Moses, Moses! Take off your shoes, for the place where you stand is holy ground.']},
    {move:{shoes:[300,450,.6]},say:['b3','Moses took off his shoes. We take off our shoes in church too, because it is a holy place! Tap the shoes.'],tap:'shoes'},
    {wiggle:['bush'],say:['b4','God said: I have heard the cry of My people. Go to Pharaoh, and bring My people out of Egypt.']},
   ],
   parent:'<p>Ask: Do you take your shoes off when you go inside the church? Why? (Because it is holy, like the ground at the burning bush.)</p>'},

  {game:'read', chip:'Read along', heading:'Pharaoh says no', pic:'pharaoh',
   paras:[
    ['r1','Moses and his brother Aaron went to Pharaoh. They said: God says, let My people go!'],
    ['r2','But Pharaoh said no. He made the slaves work even harder.'],
    ['r3','So God sent ten plagues, ten troubles, on Egypt. Again and again, Pharaoh said no.'],
    ['r4','After the tenth plague, Pharaoh finally said: Go! And the Israelites left Egypt.'],
   ]},

  {game:'drag', bg:'desert', chip:'Through the Red Sea',
   props:[{art:'waterWall',x:120,y:450,s:.62},{art:'waterWall',x:800,y:450,s:.62},{art:'moses',x:720,y:425,s:.6}],
   zone:{x:560,y:260,w:220,h:190},
   items:[{art:'man',x:260,y:425,s:.45},{art:'woman',x:330,y:430,s:.45},{art:'boy',x:400,y:432,s:.6},{art:'girl',x:460,y:432,s:.6},{art:'sheep',x:300,y:330,s:.35}],
   intro:['sea','Pharaoh changed his mind and chased them with his army! Moses lifted his rod, and God split the Red Sea. Drag everyone across on dry land!'],
   done:['sea-done','Everyone was safe! When Pharaoh\'s army followed, the water came back and covered them. The Israelites sang praise to God.']},

  {game:'puzzle', chip:'Word puzzle',
   intro:['puzzle-intro','Word puzzle! Read the clue, then tap the letters to spell the answer.'],
   items:[
    {id:'w1',clue:'The bush was on …',word:'fire',pic:'burningBush'},
    {id:'w2',clue:'Moses took off his …',word:'shoes',pic:'sandals'},
    {id:'w3',clue:'Moses\' brother was called …',word:'Aaron',pic:'man'},
    {id:'w4',clue:'God split the Red …',word:'Sea',pic:'waterWall'},
   ],
   done:['puzzle-done','You spelled them all! Great reading.']},

  {game:'order', chip:'What happened first?',
   intro:['order','Tap the pictures in the order they happened.'],
   cards:[
    {art:'burningBush',cap:'The burning bush'},
    {art:'pharaoh',cap:'Pharaoh said no'},
    {art:'crowd',cap:'The people left Egypt'},
    {art:'waterWall',cap:'Through the Red Sea'},
   ],
   done:['order-done','That is the whole story!']},

  {game:'quiz', questions:[
    {id:'q1',q:'What did Moses see on the mountain?',a:[['A burning bush','burningBush'],['A big fish','fish']],c:0},
    {id:'q2',q:'Why did Moses take off his shoes?',a:[['The ground was holy','sandals'],['His feet were hot','sun']],c:0},
    {id:'q3',q:'How did the Israelites cross the Red Sea?',a:[['On dry land','waterWall'],['In boats','boat']],c:0},
   ]},
 ]
});
