/* Level III (Grades 4-6), December week 3: Joshua (Numbers 13-14; Joshua 1-24; Joshua 1:7) */
BKLesson({
 id:'L3-dec3', title:'Be Strong, Joshua', am:'ኢያሱ', sticker:'sun',
 pages:[
  {game:'cover', bg:'field', title:'Be Strong, Joshua', am:'ኢያሱ',
   props:[{art:['figure',{robe:'#2F7A4E',sleeve:'#2F7A4E',beard:'brown',spear:true}],x:170,y:440,s:.6},{art:'sun',x:640,y:150,s:.7},{art:'michael',x:660,y:430,s:.5}],
   say:['cover','[[selam]]! After Moses, God chose Joshua to lead His people into the promised land. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, December week 3: <b>Joshua</b> (Numbers 13-14; Joshua). Aim: learn about Joshua\'s courage, faith and obedience.</p><p>Talk about it: Why did Joshua say it was God who fought for Israel?</p>'},

  {game:'read', chip:'Read', heading:'Two brave spies', pic:'grapes',
   paras:[
    ['r1','Moses sent twelve men to spy out the land of Canaan. They saw a good land, flowing with milk and honey.'],
    ['r2','But ten of the spies said: The people there are strong giants. We cannot fight them! And the Israelites cried out against Moses.'],
    ['r3','Only Joshua and Caleb said: We will take the land, because God is with us. Because of their faith, they were the only grown-ups of that time who entered the promised land.'],
   ]},

  {game:'story', bg:'river', chip:'Crossing the Jordan',
   props:[{id:'wall',art:'waterWall',x:400,y:450,s:.5,hidden:true},{id:'ark',art:'covenantArk',x:400,y:440,s:.6},{id:'crowd',art:'crowd',x:120,y:445,s:.7},{id:'st',art:'stone',x:640,y:440,s:.5,hidden:true}],
   beats:[
    {say:['j1','Joshua told twelve men to carry the Ark of the Covenant into the Jordan River. Tap the Ark.'],tap:'ark'},
    {show:['wall'],sfx:'whoosh',say:['j2','As soon as they stood in the river, the water parted, just like the Red Sea!']},
    {move:{crowd:[640,445,.7]},say:['j3','All Israel crossed the Jordan on dry land.']},
    {show:['st'],sfx:'pop',say:['j4','Joshua set up twelve stones as a memorial, so the people would always remember what God had done.']},
   ],
   parent:'<p>Here "ark" means the Ark of the Covenant, the holy chest that held the tablets of the Law. Ethiopian churches keep a Tabot as its sign.</p>'},

  {game:'read', chip:'Read', heading:'The commander of the Lord\'s army', pic:'michael',
   paras:[
    ['r4','Near Jericho, the Archangel Michael appeared to Joshua and said: As commander of the army of the Lord I have now come.'],
    ['r5','Joshua fell to the ground. The Archangel said: Take off your shoes, for the place where you stand is holy. Saint Michael helped Joshua, just as he had helped Moses.'],
    ['r6','Once, during a battle, the day was ending. Joshua prayed and commanded the sun to stand still, and it did not set until the battle was won. There has never been another day like it.'],
   ]},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'All twelve spies said Israel could take the land.',t:false,why:'Only Joshua and Caleb trusted God.',pic:'grapes'},
    {id:'t2',s:'The Jordan River parted when the Ark entered it.',t:true,why:'Israel crossed on dry land.',pic:'waterWall'},
    {id:'t3',s:'Joshua said his own strength won the battles.',t:false,why:'He said: The Lord God fought for Israel.',pic:'glory'},
    {id:'t4',s:'The sun stood still at Joshua\'s prayer.',t:true,why:'The Lord heeded the voice of a man.',pic:'sun'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'Joshua and ___ were the two faithful spies.',a:'Caleb',opts:['Aaron','Laban']},
    {id:'f2',s:'Israel crossed the ___ River on dry land.',a:'Jordan',opts:['Nile','Abay']},
    {id:'f3',s:'Joshua set up twelve ___ as a memorial.',a:'stones',opts:['tents','trees']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'Be strong and very courageous, that you may observe to do according to all the law which Moses My servant commanded you. Do not turn from it to the right hand or to the left, that you may prosper wherever you go.', ref:'Joshua 1:7',
   chunks:['Be strong and very courageous,','that you may observe to do','according to all the law','which Moses My servant commanded you.','Do not turn from it','to the right hand or to the left,','that you may prosper','wherever you go.'],
   intro:['verse-intro','Our memory verse is what God told Joshua. Listen: Be strong and very courageous, that you may observe to do according to all the law which Moses My servant commanded you. Do not turn from it to the right hand or to the left, that you may prosper wherever you go. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who led Israel after Moses?',a:[['Joshua',['figure',{robe:'#2F7A4E',sleeve:'#2F7A4E',beard:'brown',spear:true}]],['Pharaoh','pharaoh'],['Jacob','jacob']],c:0},
    {id:'q2',q:'Who appeared to Joshua near Jericho?',a:[['The Archangel Michael','michael'],['A lion','lion'],['A king','king']],c:0},
    {id:'q3',q:'What stood still at Joshua\'s prayer?',a:[['The sun','sun'],['The river','waterWall'],['A camel','camel']],c:0},
   ]},
 ]
});
