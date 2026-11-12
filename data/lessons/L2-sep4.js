/* Level II (Grades 1-3), September week 4: God Cares for Noah in the Ark, Part I (Genesis 6, 7) */
BKLesson({
 id:'L2-sep4', title:'Noah Builds the Ark', am:'ኖኅና መርከቡ', sticker:'ark',
 pages:[
  {game:'cover', bg:'day', title:'Noah Builds the Ark', am:'ኖኅና መርከቡ',
   props:[{art:'ark',x:520,y:430,s:.9},{art:'noah',x:220,y:435,s:.62}],
   say:['cover','[[selam]]! Today we read about a holy man called [[noah]], who loved and obeyed God, and the big ship he built. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, September week 4: <b>God Cares for Noah in the Ark, Part I</b> (Genesis 6, 7). Aim: God saves those who love and obey Him.</p>'},

  {game:'read', chip:'Read along', heading:'Build an ark', pic:'noah',
   paras:[
    ['r1','There was a man called Noah who loved and obeyed God. But the people around him did not fear God or keep His commandments.'],
    ['r2','God said to Noah: I will send rain to flood the earth. Build an ark, so you and your family will be safe.'],
    ['r3','An ark is a very big ship. Noah built it with his sons, out of wood.'],
    ['r4','Noah told the people about the rain, but they did not believe him. They laughed at him.'],
   ],
   parent:'<p>Ask: What is an ark? (A very big ship.) What did Noah use to build it? (Wood.)</p>'},

  {game:'drag', bg:'day', chip:'Into the ark',
   props:[{art:'ark',x:560,y:430,s:.9},{art:'noah',x:330,y:435,s:.55}],
   zone:{x:420,y:240,w:300,h:200},
   items:[{art:'lion',x:90,y:430,s:.45},{art:'elephant',x:180,y:320,s:.4},{art:'giraffe',x:250,y:430,s:.35},{art:'sheep',x:110,y:300,s:.35},{art:'donkey',x:760,y:440,s:.35}],
   intro:['animals','God said: Go into the ark with your family, and two of every kind of animal. Drag the animals into the ark!'],
   done:['animals-done','Everyone is inside, and God shut the door.']},

  {game:'tapmany', bg:'storm', chip:'The rain comes',
   props:[{art:'ark',x:400,y:430,s:.9}],
   area:{x0:0,y0:20,x1:800,y1:300}, count:8, spawn:{art:'raindrop',s:[.8,1.2],anim:'bob'}, sfx:'pop',
   progress:'*{n} more* raindrops!',
   intro:['rain','It became cloudy, and [[zinab]], rain, began to fall. Tap to make it rain!'],
   done:['rain-done','The whole earth was flooded. But Noah and his family were safe in the ark, and they prayed to God.']},

  {game:'blanks', chip:'Fill in the word',
   intro:['blanks-intro','Read the sentence, and tap the missing word.'],
   items:[
    {id:'b1',s:'Noah loved and ___ God.',a:'obeyed',opts:['obeyed','forgot','laughed'],pic:'noah'},
    {id:'b2',s:'An ark is a very big ___.',a:'ship',opts:['house','ship','tree'],pic:'ark'},
    {id:'b3',s:'The people did not believe Noah. They ___ at him.',a:'laughed',opts:['prayed','laughed','sang'],pic:'crowd'},
   ],
   done:['blanks-done','Well read!']},

  {game:'quiz', questions:[
    {id:'q1',q:'What did God ask Noah to build?',a:[['An ark','ark'],['A tower','pillar'],['A tent','tent']],c:0},
    {id:'q2',q:'What did Noah use to build the ark?',a:[['Wood','acacia'],['Stones','stone'],['Water','raindrop']],c:0},
    {id:'q3',q:'What happens when heavy rain falls for a long time?',a:[['A flood','raindrop'],['Snow','cloud'],['Nothing','sun']],c:0},
   ]},
  {game:'song', song:'etgdifenne-etgdifenne-we-itm'},
 ]
});
