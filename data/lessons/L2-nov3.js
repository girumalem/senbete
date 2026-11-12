/* Level II (Grades 1-3), November week 3: Joseph Is Appointed by Pharaoh (Genesis 41) */
BKLesson({
 id:'L2-nov3', title:'Pharaoh\'s Dream', am:'የፈርዖን ሕልም', sticker:'grain',
 pages:[
  {game:'cover', bg:'egypt', title:'Pharaoh\'s Dream', am:'የፈርዖን ሕልም',
   props:[{art:'pharaoh',x:540,y:440,s:.6},{art:['jacobYoung',{robe:'#2F7A4E',sleeve:'#FFFFFF',sash:'#E2A62B',nemes:true}],x:300,y:440,s:.58},{art:'cow',x:130,y:440,s:.4},{art:'grain',x:700,y:440,s:.9}],
   say:['cover','[[selam]]! The butler forgot Joseph for two whole years. Then Pharaoh had a dream that nobody could explain. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, November week 3: <b>Joseph Is Appointed by Pharaoh</b> (Genesis 41). Aim: God lifts up those who are patient and faithful.</p>'},

  {game:'story', bg:'river', chip:'Seven cows',
   props:[{id:'ph',art:'pharaoh',x:120,y:440,s:.55},{id:'f1',art:'cow',x:330,y:430,s:.35,hidden:true},{id:'f2',art:'cow',x:450,y:430,s:.35,hidden:true},{id:'f3',art:'cow',x:570,y:430,s:.35,hidden:true},{id:'t1',art:['cow',{}],x:330,y:440,s:.25,hidden:true},{id:'t2',art:['cow',{}],x:450,y:440,s:.25,hidden:true},{id:'t3',art:['cow',{}],x:570,y:440,s:.25,hidden:true}],
   beats:[
    {say:['c1','Pharaoh dreamed he was standing by a river. Tap Pharaoh.'],tap:'ph'},
    {show:['f1','f2','f3'],sfx:'pop',say:['c2','Seven fat, healthy cows came out of the river.']},
    {hide:['f1','f2','f3'],show:['t1','t2','t3'],sfx:'whoosh',say:['c3','Then seven thin, hungry cows came out, and they ate up the fat cows!']},
    {say:['c4','He dreamed again: seven good ears of corn, then seven thin ears that ate the good ones. Nobody could tell Pharaoh what it meant.']},
   ]},

  {game:'read', chip:'Read along', heading:'Joseph explains', pic:'grain',
   paras:[
    ['r1','Then the butler remembered Joseph! Pharaoh sent for him from the prison.'],
    ['r2','Joseph said: It is not me. God will tell Pharaoh the meaning.'],
    ['r3','The seven fat cows and good corn are seven years of great harvest, with lots of food.'],
    ['r4','The seven thin cows and thin corn are seven years of hunger, when no food will grow.'],
    ['r5','So find a wise man to save food in the good years, for the hungry years.'],
   ]},

  {game:'drag', bg:'egypt', chip:'Save the grain',
   props:[{art:'pyramid',x:640,y:430,s:.7},{art:['jacobYoung',{robe:'#2F7A4E',sleeve:'#FFFFFF',sash:'#E2A62B',nemes:true}],x:420,y:440,s:.55}],
   zone:{x:540,y:260,w:230,h:180},
   items:[{art:'grain',x:80,y:430,s:.7},{art:'grain',x:170,y:330,s:.7},{art:'grain',x:250,y:430,s:.7},{art:'basket',x:120,y:250,s:.5}],
   intro:['grain','Pharaoh said: Nobody is wiser than you! He gave Joseph his ring and a gold chain, and made him ruler over Egypt. Help Joseph store grain for the hungry years!'],
   done:['grain-done','The storehouses were full!']},

  {game:'puzzle', chip:'Word puzzle',
   intro:['puzzle-intro','Word puzzle! Read the clue, then tap the letters to spell the answer.'],
   items:[
    {id:'w1',clue:'Pharaoh stood by a …',word:'river',pic:'raindrop'},
    {id:'w2',clue:'Seven fat … came out of the river',word:'cows',pic:'cow'},
    {id:'w3',clue:'Lots of food is a great …',word:'harvest',pic:'grain'},
    {id:'w4',clue:'Pharaoh gave Joseph his …',word:'ring',pic:'gift'},
   ],
   done:['puzzle-done','You spelled them all! Great reading.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who told Pharaoh the meaning of his dream?',a:[['God, through Joseph',['jacobYoung',{robe:'#2F7A4E',sleeve:'#FFFFFF',sash:'#E2A62B',nemes:true}]],['The butler','cup']],c:0},
    {id:'q2',q:'What do the seven thin cows mean?',a:[['Seven years of hunger',['grain',{thin:true}]],['Seven parties','gift']],c:0},
    {id:'q3',q:'What did Pharaoh make Joseph?',a:[['Ruler over Egypt','pyramid'],['A fisherman','fish']],c:0},
   ]},
 ]
});
