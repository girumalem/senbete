/* Level I, July week 3: Elijah and the Widow I (1 Kings 17:8-16) */
BKLesson({
 id:'L1-jul3', title:'Flour and Oil That Never Ran Out', am:'ያላለቀው ዱቄትና ዘይት', sticker:'jar',
 pages:[
  {game:'cover', bg:'desert', title:'Flour and Oil That Never Ran Out', am:'ያላለቀው ዱቄትና ዘይት',
   props:[{art:['figure',{robe:'#7A5230',sleeve:'#7A5230',beard:'white',halo:true,staff:true,mantle:'#5A3D25'}],x:220,y:440,s:.6},{art:['woman',{robe:'#5A5F6E',netela:'#FFFFFF'}],x:560,y:440,s:.6},{art:'jar',x:660,y:440,s:.8},{art:'pot',x:730,y:445,s:.6}],
   say:['cover','[[selam]]! Remember the ravens that fed Elijah? Today God takes care of Elijah again, and blesses a kind woman too. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, July week 3: <b>Elijah and the Widow, part 1</b> (1 Kings 17:8-16). Aim: learn about God\'s care for those who keep His commandments.</p><p>Talk about it: What did the widow give Elijah? What did God do for her?</p>'},

  {game:'story', bg:'desert', chip:'The river dried up',
   props:[{id:'eli',art:['figure',{robe:'#7A5230',sleeve:'#7A5230',beard:'white',halo:true,staff:true,mantle:'#5A3D25'}],x:200,y:440,s:.6},{id:'w',art:['woman',{robe:'#5A5F6E',netela:'#FFFFFF'}],x:600,y:440,s:.6,hidden:true},{id:'sticks',art:'sticks',x:520,y:445,s:.7,hidden:true}],
   beats:[
    {say:['r1','There was still no rain, so the little river dried up.']},
    {wiggle:['eli'],say:['r2','God told Elijah: Go to the town. A widow will feed you. A widow is a woman whose husband has died. Tap Elijah.'],tap:'eli'},
    {show:['w','sticks'],sfx:'whoosh',say:['r3','At the town gate he found a widow gathering sticks. Tap the sticks.'],tap:'sticks'},
   ],
   parent:'<p>God sent Elijah to a widow in Zarephath (1 Kings 17:9).</p>'},

  {game:'story', bg:'desert', chip:'Just a little',
   props:[{id:'eli',art:['figure',{robe:'#7A5230',sleeve:'#7A5230',beard:'white',halo:true,staff:true,mantle:'#5A3D25'}],x:200,y:440,s:.6},{id:'w',art:['woman',{robe:'#5A5F6E',netela:'#FFFFFF'}],x:600,y:440,s:.6},{id:'jar',art:'jar',x:420,y:440,s:.8},{id:'pot',art:'pot',x:480,y:445,s:.5}],
   beats:[
    {wiggle:['eli'],say:['j1','Elijah said: Please bring me some water, and a little bread.']},
    {wiggle:['w'],say:['j2','She said: I have no bread. I only have a handful of flour in a jar, and a little oil. Tap the jar.'],tap:'jar'},
    {wiggle:['eli'],say:['j3','Elijah said: Do not be afraid. Make me a small bread first. God says your flour and oil will not run out until the rain comes.']},
    {sfx:'sparkle',say:['j4','The widow believed, and she shared her bread with Elijah. Tap the widow.'],tap:'w'},
   ],
   parent:'<p>The widow trusted God\'s word and fed the prophet first.</p>'},

  {game:'tapmany', bg:'desert', chip:'It never runs out!',
   props:[{art:'tukul',x:620,y:440,s:.6},{art:'jar',x:330,y:440,s:.9},{art:'pot',x:450,y:445,s:.6}],
   area:{x0:0,y0:20,x1:800,y1:280}, count:8, spawn:{art:'injera',s:[.4,.6],anim:'bob'}, sfx:'pop',
   progress:'*{n} more* breads!',
   intro:['bread','Every day there was flour in the jar and oil in the pot! Tap to bake eight breads.'],
   done:['bread-done','The flour and oil never ran out. God blessed the widow\'s house because she was kind.']},

  {game:'quiz', questions:[
    {id:'q1',q:'What was the widow gathering?',a:[['Sticks','sticks'],['Flowers','flowers'],['Fish','fish']],c:0},
    {id:'q2',q:'What did the widow share with Elijah?',a:[['A small bread','injera'],['A big cake','gift']],c:0},
    {id:'q3',q:'What happened to her flour and oil?',a:[['They never ran out','jar'],['They were all gone','bowl']],c:0},
   ]},
  {game:'song', song:'atitewen-amlak-hoy-atitalen'},
 ]
});
