/* Level II (Grades 1-3), August week 4: Holy Communion, Qurban (Matthew 26:26-28) */
BKLesson({
 id:'L2-aug4', title:'The Gift of Qurban', am:'ቍርባን', sticker:'cup',
 pages:[
  {game:'cover', bg:'church', title:'The Gift of Qurban', am:'ቍርባን',
   props:[{art:'cup',x:640,y:420,s:.9},{art:'candle',x:740,y:440,s:.7},{art:'priest',x:160,y:440,s:.6}],
   say:['cover','[[selam]]! Today we learn about the most holy gift in church: Qurban, Holy Communion. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, August week 4: <b>Holy Communion (Qurban)</b> (Matthew 26:26-28). Aim: learn what Qurban is, who gave it to us, and how we receive it today.</p><p>Review: On which mountain did Jesus shine with glory?</p>'},

  {game:'read', chip:'Read along', heading:'A special Thursday night', pic:'table',
   paras:[
    ['r1','On a Thursday night, Jesus gathered His twelve disciples for supper.'],
    ['r2','He took bread, blessed it, and gave it to them. He said: Take, eat. This is My body.'],
    ['r3','Then He took a cup of wine, blessed it, and said: Drink from it, all of you. This is My blood, shed for the forgiveness of sins.'],
    ['r4','This was the very first Qurban.'],
   ]},

  {game:'story', bg:'church', chip:'Jesus gives Himself',
   props:[{id:'table',art:['table',{coins:false}],x:400,y:440,s:1.2},{id:'jesus',art:'jesus',x:400,y:380,s:.5},{id:'bread',art:'basket',x:320,y:360,s:.4},{id:'cup',art:'cup',x:480,y:360,s:.45},{id:'peter',art:'peter',x:170,y:440,s:.5},{id:'d1',art:'disciple',x:630,y:440,s:.5}],
   beats:[
    {wiggle:['jesus'],say:['s1','Jesus loved His disciples very much. Tap the bread.'],tap:'bread'},
    {sfx:'glory',say:['s2','He blessed the bread, and it became His holy body.']},
    {wiggle:['cup'],say:['s3','Now tap the cup.'],tap:'cup'},
    {sfx:'glory',say:['s4','He blessed the wine, and it became His holy blood. He gave Himself to them.']},
   ]},

  {game:'story', bg:'church', chip:'Qurban today',
   props:[{id:'priest',art:'priest',x:400,y:440,s:.6},{id:'glow',art:'glory',x:400,y:300,s:1,hidden:true},{id:'boy',art:'boy',x:180,y:440,s:.65},{id:'girl',art:'girl',x:620,y:440,s:.65}],
   beats:[
    {wiggle:['priest'],say:['p1','Today in church, the priest prays over bread and wine, just as Jesus taught. Tap the priest.'],tap:'priest'},
    {show:['glow'],sfx:'glory',say:['p2','Through these holy prayers, the bread and wine become the body and blood of Jesus.']},
    {wiggle:['boy','girl'],say:['p3','Baptized Christians receive Qurban. We come with a clean heart, after fasting and prayer.']},
   ],
   parent:'<p>In the Ethiopian Church, those who receive Qurban prepare by fasting, confession, and coming in white clothes with a clean heart.</p>'},

  {game:'blanks', chip:'Fill in the word',
   intro:['blanks-intro','Read the sentence, and tap the missing word.'],
   items:[
    {id:'b1',s:'Jesus gave the first Qurban on a ___ night.',a:'Thursday',opts:['Sunday','Thursday','Monday'],pic:'moon'},
    {id:'b2',s:'Jesus said: This bread is My ___.',a:'body',opts:['body','house','book'],pic:'basket'},
    {id:'b3',s:'Jesus said: This cup is My ___.',a:'blood',opts:['water','blood','milk'],pic:'cup'},
    {id:'b4',s:'Today the ___ prays over the bread and wine.',a:'priest',opts:['king','priest','soldier'],pic:'priest'},
   ],
   done:['blanks-done','Well done!']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','Read each sentence. Is it true, or false?'],
   items:[
    {id:'f1',s:'Jesus Himself gave us Qurban.',t:true,why:'True! He gave it to His disciples first.',pic:'jesus'},
    {id:'f2',s:'Qurban is just a snack.',t:false,why:'False. It is the holy body and blood of Jesus.',pic:'cup'},
    {id:'f3',s:'We prepare for Qurban with fasting and prayer.',t:true,why:'True! We come with a clean heart.',pic:'heart'},
   ],
   done:['tf-done','Great thinking!']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who gave the first Qurban?',a:[['Jesus','jesus'],['Moses','moses']],c:0},
    {id:'q2',q:'What did Jesus bless?',a:[['Bread and wine','cup'],['Fish and honey','fish']],c:0},
    {id:'q3',q:'Who receives Qurban?',a:[['Baptized Christians','church'],['Animals','cow']],c:0},
   ]},
  {game:'song', song:'mariam-aregech-wedegenet'},
 ]
});
