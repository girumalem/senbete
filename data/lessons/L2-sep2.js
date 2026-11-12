/* Level II (Grades 1-3), September week 2: Creation (Genesis 1) */
BKLesson({
 id:'L2-sep2', title:'God Made Everything', am:'ፍጥረት', sticker:'sun',
 pages:[
  {game:'cover', bg:'garden', title:'God Made Everything', am:'ፍጥረት',
   props:[{art:'sun',x:650,y:90,s:.6},{art:'fruitTree',x:180,y:430,s:.8},{art:'lion',x:600,y:430,s:.6},{art:'bird',x:420,y:150,s:1.2},{art:['man',{robe:'#8DAA4A',sleeve:'#8DAA4A',beard:'dark'}],x:520,y:435,s:.6}],
   say:['cover','[[selam]]! This is the story of [[fitret]], creation. Let\'s read what God made in six days, and how He got the world ready for Adam. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, September week 2: <b>Creation</b> (Genesis 1). Aim: God made everything, and He prepared the world for man because He loves us.</p><p>Level II pages show the words while Selam reads, so children can follow along and practise reading.</p>'},

  {game:'read', chip:'Read along', heading:'In the beginning', pic:'glory',
   paras:[
    ['r1','In the beginning God made heaven and earth. There were no trees, no houses, no animals and no people. There was only darkness.'],
    ['r2','God said: I will make a man and call him Adam. I will make him happy. He will love Me and speak with Me.'],
    ['r3','So God made the earth a good home for Adam, before He made him.'],
   ],
   parent:'<p>Ask: What was there before God made the world? (Nothing, only darkness.) Why did God get the world ready first? (Because He loves us.)</p>'},

  {game:'story', bg:'dark', chip:'Getting ready for Adam',
   props:[{id:'sun',art:'sun',x:620,y:110,s:.7,hidden:true},{id:'moon',art:'moon',x:180,y:110,s:.7,hidden:true},{id:'tree',art:'fruitTree',x:220,y:430,s:.7,hidden:true},{id:'lion',art:'lion',x:560,y:430,s:.6,hidden:true},{id:'fish',art:'fish',x:420,y:400,s:1.3,hidden:true},{id:'bird',art:'bird',x:420,y:200,s:1.2,hidden:true}],
   beats:[
    {show:['sun'],sfx:'glory',say:['s1','God said: Let there be [[birhan]], light! Now Adam could see, read, play and eat. Tap the sun.'],tap:'sun'},
    {show:['moon'],sfx:'sparkle',say:['s2','God said: I will not leave Adam in the dark. And He made the moon and the stars.']},
    {show:['tree'],sfx:'pop',say:['s3','What will Adam eat? God made vegetables and fruits: apples, watermelon and grapes! Tap the tree.'],tap:'tree'},
    {show:['lion','fish','bird'],sfx:'whoosh',say:['s4','Then God made the animals, the birds and the fish.']},
   ]},

  {game:'story', bg:'garden', chip:'God makes Adam',
   props:[{art:'fruitTree',x:160,y:430,s:.7},{id:'glow',art:'glory',x:420,y:250,s:1},{id:'adam',art:['man',{robe:'#8DAA4A',sleeve:'#8DAA4A',beard:'dark'}],x:420,y:435,s:.62,hidden:true}],
   beats:[
    {wiggle:['glow'],say:['m1','On the sixth day, God said: Everything is good.']},
    {show:['adam'],sfx:'glory',say:['m2','God made a man from the dust of the ground, and breathed into him the breath of life. It was Adam! Tap Adam.'],tap:'adam'},
    {fx:'confetti',say:['m3','Adam opened his eyes and saw a beautiful world, all made ready for him.']},
   ],
   parent:'<p>"And the Lord God formed man of the dust of the ground, and breathed into his nostrils the breath of life." (Genesis 2:7)</p>'},

  {game:'puzzle', chip:'Word puzzle',
   intro:['puzzle-intro','Word puzzle! Read the clue, then tap the letters to spell the answer.'],
   items:[
    {id:'w1',clue:'First God said: Let there be …',word:'light',pic:'sun'},
    {id:'w2',clue:'At night God gave us the moon and the …',word:'stars',pic:'star'},
    {id:'w3',clue:'The first man was called …',word:'Adam',pic:['man',{robe:'#8DAA4A',sleeve:'#8DAA4A',beard:'dark'}]},
    {id:'w4',clue:'Adam was made from the …',word:'dust',pic:'stone'},
   ],
   done:['puzzle-done','You spelled them all! Great reading.']},

  {game:'order', chip:'What came first?',
   intro:['order','Tap the pictures in the order God made them.'],
   cards:[
    {art:'sun',cap:'Light'},
    {art:'moon',cap:'Moon and stars'},
    {art:'fruitTree',cap:'Fruits and vegetables'},
    {art:'lion',cap:'Animals'},
    {art:['man',{robe:'#8DAA4A',sleeve:'#8DAA4A',beard:'dark'}],cap:'Adam'},
   ],
   done:['order-done','God made everything good, and He made it for us!']},

  {game:'quiz', questions:[
    {id:'q1',q:'What did God make first?',a:[['Light','sun'],['Lions','lion'],['Houses','tukul']],c:0},
    {id:'q2',q:'Why did God make the fruits and vegetables?',a:[['So Adam could eat','fruitTree'],['To make it dark','moon']],c:0},
    {id:'q3',q:'On which day did God make Adam?',a:[['Day 1',['text',{t:'1',size:80,c:'#24418F'}]],['Day 6',['text',{t:'6',size:80,c:'#24418F'}]],['Day 3',['text',{t:'3',size:80,c:'#24418F'}]]],c:1},
   ]},
  {game:'song', song:'kulo-zefekede-gebre-egziabhe'},
 ]
});
