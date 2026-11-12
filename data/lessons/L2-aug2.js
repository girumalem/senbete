/* Level II (Grades 1-3), August week 2: The Fish with Money (Matthew 17:24-27) */
BKLesson({
 id:'L2-aug2', title:'A Coin in a Fish', am:'ዓሣውና ሳንቲሙ', sticker:'fish',
 pages:[
  {game:'cover', bg:'lake', title:'A Coin in a Fish', am:'ዓሣውና ሳንቲሙ',
   props:[{art:'peter',x:170,y:440,s:.55},{art:'fish',x:620,y:400,s:1.2},{art:['star',{r:14,c:'#E2A62B'}],x:680,y:380,s:1}],
   say:['cover','[[selam]]! [[petros]] had a problem, and no money. Let\'s see how Jesus took care of it! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, August week 2: <b>The Fish with Money</b> (Matthew 17:24-27). Aim: learn to depend on God.</p><p>Review: In the story of the two sons, which son obeyed his father?</p>'},

  {game:'read', chip:'Read along', heading:'Money for the temple', pic:'temple',
   paras:[
    ['r1','Some men came to collect money for the temple, God\'s house.'],
    ['r2','They asked [[petros]]: Does your teacher pay money for the temple?'],
    ['r3','[[petros]] said yes. But he wondered how, because they had no money!'],
    ['r4','Jesus already knew what [[petros]] was going to ask.'],
   ]},

  {game:'story', bg:'lake', chip:'Go fishing!',
   props:[{id:'jesus',art:'jesus',x:180,y:440,s:.6},{id:'peter',art:'peter',x:400,y:440,s:.55},{id:'fish',art:'fish',x:620,y:420,s:1,hidden:true},{id:'coin',art:['star',{r:14,c:'#E2A62B'}],x:620,y:330,s:1.4,hidden:true}],
   beats:[
    {wiggle:['jesus'],say:['g1','Jesus said: Go to the lake and throw in your hook. Take the first fish you catch.']},
    {wiggle:['jesus'],say:['g2','Open its mouth, and you will find a coin. Use it to pay for Me and for you.']},
    {show:['fish'],sfx:'pop',say:['g3','[[petros]] did exactly what Jesus said. Tap the fish!'],tap:'fish'},
    {show:['coin'],sfx:'glory',fx:'confetti',say:['g4','Inside its mouth was a coin, just enough to pay for both of them!']},
   ],
   parent:'<p>Jesus showed Peter that God provides what we need when we trust and obey Him.</p>'},

  {game:'tapmany', bg:'lake', chip:'Catch the right fish',
   props:[{art:'peter',x:120,y:440,s:.5}],
   area:{x0:200,y0:330,x1:780,y1:440}, count:5, spawn:{art:'fish',s:[.6,.9],anim:'bob'}, sfx:'pop',
   progress:'*{n} more* fish!',
   intro:['fish','Let\'s go fishing with [[petros]]! Tap the water five times.'],
   done:['fish-done','God takes care of us, just as He took care of [[petros]].']},

  {game:'blanks', chip:'Fill in the word',
   intro:['blanks-intro','Read the sentence, and tap the missing word.'],
   items:[
    {id:'b1',s:'The men collected money for the ___.',a:'temple',opts:['temple','market','boat'],pic:'temple'},
    {id:'b2',s:'Jesus told [[petros]] to go ___.',a:'fishing',opts:['fishing','sleeping','running'],pic:'fish'},
    {id:'b3',s:'In the fish\'s mouth was a ___.',a:'coin',opts:['coin','stone','ring'],pic:['star',{r:14,c:'#E2A62B'}]},
   ],
   done:['blanks-done','Well done!']},

  {game:'quiz', questions:[
    {id:'q1',q:'What did Peter catch first?',a:[['A fish','fish'],['A sandal','sandals']],c:0},
    {id:'q2',q:'What was in its mouth?',a:[['A coin',['star',{r:14,c:'#E2A62B'}]],['A flower','adeyAbeba']],c:0},
    {id:'q3',q:'Who takes care of what we need?',a:[['God','glory'],['No one','stone']],c:0},
   ]},
  {game:'song', song:'tenageru-dink-sirawin-meskir'},
 ]
});
