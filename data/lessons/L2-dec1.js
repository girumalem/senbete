/* Level II (Grades 1-3), December week 1: Baby Moses (Exodus 1, 2) */
BKLesson({
 id:'L2-dec1', title:'Baby Moses in the River', am:'ሕፃኑ ሙሴ', sticker:'babyBasket',
 pages:[
  {game:'cover', bg:'river', title:'Baby Moses in the River', am:'ሕፃኑ ሙሴ',
   props:[{art:'reeds',x:150,y:440,s:.9},{art:'babyBasket',x:560,y:420,s:1},{art:'reeds',x:700,y:440,s:.8},{art:['girl',{robe:'#B3322A',netela:'#FFFFFF'}],x:120,y:440,s:.7}],
   say:['cover','[[selam]]! Joseph\'s family, the children of Israel, lived in Egypt for many years. Today we meet a baby who would grow up to be a great prophet. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, December week 1: <b>Baby Moses</b> (Exodus 1, 2). Aim: God protects His people, even when things look very bad.</p><p>Review: What did Joseph do to prepare for the hungry years? How did he treat his brothers?</p>'},

  {game:'read', chip:'Read along', heading:'A cruel king', pic:'bricks',
   paras:[
    ['r1','After Joseph died, the children of Israel grew into a very big family in Egypt.'],
    ['r2','A new Pharaoh came, and he was very cruel. He did not want the Israelites to grow in number.'],
    ['r3','He made them slaves. They had to work all day making bricks, and building his cities.'],
    ['r4','Then Pharaoh gave a terrible order: throw every baby boy of the Israelites into the river!'],
   ]},

  {game:'story', bg:'river', chip:'Hidden in a basket',
   props:[{art:'reeds',x:620,y:440,s:.9},{id:'mom',art:['woman',{robe:'#24418F',netela:'#FFFFFF'}],x:180,y:440,s:.58},{id:'basket',art:'babyBasket',x:300,y:420,s:1},{id:'sis',art:['girl',{robe:'#B3322A',netela:'#FFFFFF'}],x:100,y:440,s:.65,hidden:true}],
   beats:[
    {wiggle:['mom'],say:['h1','An Israelite mother had a baby boy. She hid him at home for three months. Tap his mother.'],tap:'mom'},
    {wiggle:['basket'],say:['h2','When she could not hide him any more, she made a basket and put her baby in it. Tap the basket.'],tap:'basket'},
    {move:{basket:[560,420,1]},sfx:'whoosh',say:['h3','She put the basket among the reeds by the river.']},
    {show:['sis'],say:['h4','The baby\'s big sister, Miriam, hid nearby to watch what would happen.']},
   ]},

  {game:'story', bg:'river', chip:'Pharaoh\'s daughter',
   props:[{art:'reeds',x:620,y:440,s:.9},{id:'basket',art:'babyBasket',x:560,y:420,s:1},{id:'pd',art:['woman',{robe:'#FFFFFF',netela:'#E2A62B',nemes:true}],x:330,y:440,s:.58},{id:'sis',art:['girl',{robe:'#B3322A',netela:'#FFFFFF'}],x:100,y:440,s:.65},{id:'mom',art:['woman',{robe:'#24418F',netela:'#FFFFFF'}],x:200,y:440,s:.58,hidden:true}],
   beats:[
    {wiggle:['pd'],say:['p1','Pharaoh\'s daughter came down to the river to wash. She saw the basket. Tap the basket!'],tap:'basket'},
    {sfx:'pop',say:['p2','She opened it, and the baby was crying. She felt sorry for him.']},
    {wiggle:['sis'],say:['p3','Miriam ran up and asked: Shall I find a woman to feed the baby for you? Tap Miriam.'],tap:'sis'},
    {show:['mom'],sfx:'glory',say:['p4','Miriam brought the baby\'s own mother! So his mother took care of him.']},
    {fx:'confetti',say:['p5','When he grew bigger, he lived in Pharaoh\'s house. Pharaoh\'s daughter called him Moses, because she drew him out of the water.']},
   ],
   parent:'<p>God turned Pharaoh\'s cruel plan around: Moses grew up in Pharaoh\'s own house, cared for by his own mother.</p>'},

  {game:'blanks', chip:'Fill in the word',
   intro:['blanks-intro','Read the sentence, and tap the missing word.'],
   items:[
    {id:'b1',s:'The cruel Pharaoh made the Israelites ___.',a:'slaves',opts:['kings','slaves','farmers'],pic:'bricks'},
    {id:'b2',s:'His mother put baby Moses in a ___.',a:'basket',opts:['basket','boat','box'],pic:'babyBasket'},
    {id:'b3',s:'Moses\' sister was called ___.',a:'Miriam',opts:['Sarah','Miriam','Eve'],pic:['girl',{robe:'#B3322A',netela:'#FFFFFF'}]},
    {id:'b4',s:'Pharaoh\'s ___ found the baby.',a:'daughter',opts:['soldier','daughter','cow'],pic:['woman',{robe:'#FFFFFF',netela:'#E2A62B',nemes:true}]},
   ],
   done:['blanks-done','Well read!']},

  {game:'quiz', questions:[
    {id:'q1',q:'Where was baby Moses hidden?',a:[['In a basket by the river','babyBasket'],['Up a tree','fruitTree']],c:0},
    {id:'q2',q:'Who took care of Moses when he was a baby?',a:[['His own mother',['woman',{robe:'#24418F',netela:'#FFFFFF'}]],['A lion','lion']],c:0},
    {id:'q3',q:'Where did Moses grow up?',a:[['In Pharaoh\'s house','pyramid'],['On a boat','boat']],c:0},
   ]},
 ]
});
