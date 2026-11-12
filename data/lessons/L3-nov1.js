/* Level III (Grades 4-6), November week 1: Jacob and Esau (Genesis 25, 27, 32:24-29; Psalm 40:1) */
BKLesson({
 id:'L3-nov1', title:'The Birthright', am:'ያዕቆብና ዔሳው', sticker:'pot',
 pages:[
  {game:'cover', bg:'desert', title:'The Birthright', am:'ያዕቆብና ዔሳው',
   props:[{art:'esau',x:160,y:440,s:.6},{art:'jacobYoung',x:640,y:440,s:.6},{art:['pot',{steam:true}],x:720,y:420,s:.7},{art:'fire',x:720,y:440,s:.6}],
   say:['cover','[[selam]]! Two twin brothers, one bowl of food, and a choice that changed everything. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, November week 1: <b>Jacob and Esau</b> (Genesis 25, 27, 32). Aim: learn to value God\'s blessing more than things that last only a moment.</p><p>Talk about it: Why did Esau lose his blessing?</p>'},

  {game:'read', chip:'Read', heading:'Twins', pic:'rebecca',
   paras:[
    ['r1','Isaac and Rebecca had no children for a long time. Isaac prayed, and God answered: Rebecca gave birth to twins.'],
    ['r2','The first-born was Esau, and the second was Jacob. Esau grew up to be a hunter. Jacob stayed near the tents and helped his mother.'],
    ['r3','As the first-born, Esau had the birthright: the right to receive a special blessing from his father.'],
   ]},

  {game:'story', bg:'desert', chip:'A bowl of stew',
   props:[{id:'jac',art:'jacobYoung',x:560,y:440,s:.6},{id:'pot',art:['pot',{steam:true}],x:420,y:420,s:.8},{id:'fire',art:'fire',x:420,y:440,s:.7},{id:'esau',art:'esau',x:120,y:440,s:.6}],
   beats:[
    {move:{esau:[260,440,.6]},sfx:'whoosh',say:['s1','One day Esau came home from hunting, very hungry. Jacob was cooking.']},
    {wiggle:['esau'],say:['s2','Esau said: Give me some of that food!']},
    {wiggle:['jac'],say:['s3','Jacob said: First, sell me your birthright. Tap Jacob.'],tap:'jac'},
    {wiggle:['esau'],say:['s4','Esau said: I am about to die of hunger. What good is a birthright to me? And he swore to give it away. Tap the pot.'],tap:'pot'},
    {say:['s5','Esau ate and drank, and went on his way. He did not value his birthright.']},
   ]},

  {game:'read', chip:'Read', heading:'The blessing', pic:'isaacOld',
   paras:[
    ['r4','When Isaac grew old, Jacob received the blessing of the first-born. Later Esau wanted it, but it was too late.'],
    ['r5','Esau could not bear a few moments of hunger, so he traded something precious for one meal.'],
    ['r6','Jacob knew how important a father\'s blessing and God\'s blessing are. Later he wrestled all night for God\'s blessing, and God blessed him and changed his name to Israel.'],
   ],
   parent:'<p>The Bible does not hide Jacob\'s faults. The lesson here is Esau\'s: he "despised his birthright" (Genesis 25:34; Hebrews 12:16).</p>'},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Jacob was born first.',t:false,why:'Esau was born first. Jacob was the second twin.',pic:'esau'},
    {id:'t2',s:'Esau sold his birthright for food.',t:true,why:'He traded it for bread and stew.',pic:'pot'},
    {id:'t3',s:'God changed Jacob\'s name to Israel.',t:true,why:'After Jacob wrestled for God\'s blessing.',pic:'jacob'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'Esau grew up to be a ___.',a:'hunter',opts:['shepherd','king']},
    {id:'f2',s:'The special right of the first-born is called the ___.',a:'birthright',opts:['crown','covenant']},
    {id:'f3',s:'God changed Jacob\'s name to ___.',a:'Israel',opts:['Isaac','Abraham']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'I waited patiently for the Lord, and He inclined to me.', ref:'Psalm 40:1',
   chunks:['I waited patiently','for the Lord,','and He inclined','to me.'],
   intro:['verse-intro','This month\'s memory verse is from the Psalms. Listen: I waited patiently for the Lord, and He inclined to me. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'What did Esau trade his birthright for?',a:[['A meal','pot'],['A camel','camel'],['Gold','gift']],c:0},
    {id:'q2',q:'Why was it a bad choice?',a:[['He gave up a blessing for one moment','heart'],['The food was cold','bowl'],['He was too full','bed']],c:0},
    {id:'q3',q:'What new name did God give Jacob?',a:[['Israel','jacob'],['Moses','moses'],['Peter','peter']],c:0},
   ]},
 ]
});
