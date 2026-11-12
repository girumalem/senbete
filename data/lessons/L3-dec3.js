/* Level III (Grades 4-6), December week 3: Joshua (Numbers 13-14; Joshua 3-6, 10, 24; Joshua 1:7)
   Sample of the richer "story games" style: every page is a different activity tied to one moment of the story. */
BKLesson({
 id:'L3-dec3', title:'Be Strong, Joshua', am:'ኢያሱ', sticker:'sun',
 pages:[
  {game:'cover', bg:'field', title:'Be Strong, Joshua', am:'ኢያሱ',
   props:[{art:['figure',{robe:'#2F7A4E',sleeve:'#2F7A4E',beard:'brown',spear:true}],x:170,y:440,s:.6},{art:'sun',x:640,y:150,s:.7},{art:'michael',x:660,y:430,s:.5}],
   say:['cover','[[selam]]! After Moses, God chose Joshua to lead His people into the promised land. Come on the journey with him!'],
   parent:'<p>This lesson follows Level III, December week 3: <b>Joshua</b> (Numbers 13-14; Joshua). Aim: learn about Joshua\'s courage, faith and obedience. The march around Jericho (Joshua 6) is added from the Book of Joshua.</p><p>Talk about it: Why did Joshua say it was God who fought for Israel?</p>'},

  {game:'story', bg:'field', chip:'The twelve spies',
   props:[{id:'moses',art:'moses',x:110,y:440,s:.55},{id:'spies',art:'crowd',x:300,y:445,s:.6},
    {id:'s1',art:['figure',{robe:'#8A5A30',beard:'dark'}],x:470,y:440,s:.45,hidden:true},{id:'s2',art:['figure',{robe:'#2F7A4E',beard:'brown'}],x:610,y:440,s:.45,hidden:true},{id:'grapes',art:'grapes',x:540,y:300,s:.9,hidden:true},
    {id:'giant',art:['figure',{robe:'#5B4D3C',sleeve:'#5B4D3C',beard:'dark',spear:true}],x:720,y:445,s:.95,hidden:true}],
   beats:[
    {wiggle:['moses'],say:['s1','Moses sent twelve men to spy out the land of Canaan, the land God had promised. Tap Moses.'],tap:'moses'},
    {show:['s1','s2','grapes'],sfx:'pop',say:['s2','They found grapes so big that two men carried one bunch on a pole! It was a land flowing with milk and honey. Tap the grapes.'],tap:'grapes'},
    {show:['giant'],sfx:'boing',wiggle:['giant'],say:['s3','But they also saw giants, strong people living in cities with high walls.']},
   ],
   parent:'<p>Numbers 13: one leader from each of the twelve tribes went, among them Joshua and Caleb.</p>'},

  {game:'choose', bg:'field', chip:'What will you say?',
   props:[{id:'crowd',art:'crowd',x:400,y:445,s:.8},{id:'glow',art:'glory',x:150,y:300,s:.8,hidden:true},{id:'josh',art:['figure',{robe:'#2F7A4E',sleeve:'#2F7A4E',beard:'brown'}],x:110,y:430,s:.5},{id:'caleb',art:['figure',{robe:'#8A5A30',beard:'dark'}],x:200,y:430,s:.5},{id:'dark',art:'darkCloud',x:600,y:230,s:.9,hidden:true}],
   prompt:['c0','You are one of the spies, and all the people are waiting. What will you tell them?'],
   options:[
    {label:'The giants are too strong. We cannot win!',art:'darkCloud',good:false,then:{show:['dark'],wiggle:['crowd']},undo:{hide:['dark']},
     say:['c1','That is what ten of the spies said. The people were afraid, cried against Moses, and wanted to go back to Egypt! Try the other answer.']},
    {label:'God is with us. We can take the land!',art:'glory',then:{show:['glow'],wiggle:['josh','caleb']},
     say:['c2','That is what Joshua and Caleb said! Because of their faith, they were the only grown-ups of that time who entered the promised land.']},
   ]},

  {game:'drag', bg:'river', chip:'Crossing the Jordan',
   props:[{id:'wall',art:'jordanParted',x:420,y:440,s:.75,hidden:true},{id:'crowd',art:'crowd',x:110,y:345,s:.45}],
   items:[{art:'covenantArk',x:230,y:335,s:.4,to:[420,415,.4],then:{show:['wall']},say:['j2','As soon as the priests stood in the river with the Ark, the water stopped and stood up like a wall, just like the Red Sea!']}],
   zone:{x:320,y:320,w:200,h:120},
   intro:['j1','Joshua told the priests to carry the Ark of the Covenant into the Jordan River. Drag the Ark into the water.'],
   after:{move:{crowd:[690,345,.45]}},
   done:['j3','All Israel crossed the Jordan on dry ground.'],
   parent:'<p>Here "ark" means the Ark of the Covenant, the holy chest that held the tablets of the Law. Ethiopian churches keep a Tabot as its sign.</p>'},

  {game:'collect', bg:'river', chip:'Twelve stones',
   props:[{art:'jordanParted',x:420,y:440,s:.75},{id:'crowd',art:'crowd',x:110,y:345,s:.45}],
   items:[[340,420],[370,435],[400,418],[430,432],[460,420],[490,434],[355,405],[385,425],[415,405],[445,422],[475,406],[505,425]].map(([x,y])=>({art:'stone',x,y,s:.5})),
   pile:{x:660,y:338,dx:32,dy:20,base:5,s:.5},
   intro:['m1','God told Joshua: Take twelve stones from the middle of the river, one for each tribe of Israel. Tap or drag all twelve to the riverbank.'],
   done:['m2','Joshua set up the twelve stones as a memorial. When your children ask what these stones mean, tell them: God dried up the Jordan for us!']},

  {game:'story', bg:'field', chip:'Holy ground',
   props:[{id:'josh',art:['figure',{robe:'#2F7A4E',sleeve:'#2F7A4E',beard:'brown',spear:true}],x:250,y:440,s:.6},{id:'mich',art:'michael',x:560,y:430,s:.6,hidden:true},{id:'shoes',art:'sandals',x:270,y:445,s:.5,hidden:true}],
   beats:[
    {show:['mich'],fx:'flash',sfx:'glory',say:['h1','Near the city of Jericho, Joshua looked up and saw a man with a sword. It was the Archangel Michael! Tap him.'],tap:'mich'},
    {move:{josh:[270,460,.5]},say:['h2','He said: As commander of the army of the Lord I have now come. Joshua fell to the ground.']},
    {show:['shoes'],say:['h3','The Archangel said: Take off your sandals, for the place where you stand is holy. Tap the sandals.'],tap:'shoes',after:{move:{shoes:[120,445,.5]}}},
    {wiggle:['mich'],say:['h4','We do the same! We take off our shoes before we enter the holy part of our church.']},
   ]},

  {game:'repeat', bg:'desert', chip:'March around Jericho',
   props:[{id:'city',art:'jericho',x:400,y:410,s:.85},{id:'down',art:['jericho',{fallen:true}],x:400,y:410,s:.85,hidden:true},
    {id:'ark',art:'covenantArk',x:120,y:400,s:.4},{id:'pr',art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',beard:'white'}],x:60,y:440,s:.4},{id:'cr',art:'crowd',x:190,y:445,s:.45}],
   intro:['r0','God told Joshua: March around the city once a day for six days, with the priests blowing trumpets. Tap the trumpet to march!'],
   button:{label:'March!',art:'trumpet'},
   steps:[
    {move:{ark:[680,400],pr:[620,440],cr:[750,445]},say:['r1','Day one. Around the city once! The people kept silent.']},
    {move:{ark:[120,400],pr:[60,440],cr:[190,445]},say:['r2','Day two.']},
    {move:{ark:[680,400],pr:[620,440],cr:[750,445]},say:['r3','Day three.']},
    {move:{ark:[120,400],pr:[60,440],cr:[190,445]},say:['r4','Day four.']},
    {move:{ark:[680,400],pr:[620,440],cr:[750,445]},say:['r5','Day five.']},
    {move:{ark:[120,400],pr:[60,440],cr:[190,445]},say:['r6','Day six. The walls are still standing.']},
   ],
   final:{label:'Shout!',art:'trumpet',prompt:['r7','On the seventh day they marched around seven times. Then Joshua said: Shout, for the Lord has given you the city! Tap Shout!'],
    hide:['city'],show:['down'],fx:'flash',sfx:'whoosh',say:['r8','The people shouted, and the walls fell down flat! God gave them Jericho, just as He promised.']},
   parent:'<p>Joshua 6. Obedience, even when God\'s plan seems strange, brings victory.</p>'},

  {game:'hold', bg:'field', chip:'Sun, stand still!',
   props:[{id:'sun',art:'sun',x:700,y:300,s:.6},{id:'josh',art:['figure',{robe:'#2F7A4E',sleeve:'#2F7A4E',beard:'brown',arms:'up'}],x:150,y:440,s:.55},
    {id:'e1',art:'soldier',x:480,y:440,s:.45},{id:'e2',art:'soldier',x:580,y:440,s:.45},{id:'hail',art:'hail',x:620,y:250,s:1.4,hidden:true}],
   target:'sun', mover:{id:'sun',up:[620,90,.6],down:[700,300,.6]}, ms:7000, label:'Hold the sun in the sky!',
   intro:['u1','The battle was not finished, but the sun was going down. Joshua prayed: Sun, stand still! Press and hold the sun to keep it in the sky.'],
   at:[{p:.4,show:['hail'],sfx:'whoosh',say:['u2','God sent great hailstones from heaven on the enemy!']},
       {p:.8,move:{e1:[900,440],e2:[980,440]},hide:['hail']}],
   done:['u3','The sun did not set until the battle was won. There has never been a day like it, when the Lord listened to the voice of a man.']},

  {game:'sort', chip:'Faith or fear?',
   bins:[{label:'Faith',art:'glory'},{label:'Fear',art:'darkCloud'}],
   intro:['f0','Joshua and Caleb spoke with faith. Ten spies spoke with fear. Put each sentence in the right basket.'],
   items:[
    {t:'God is with us!',b:0},
    {t:'We are like grasshoppers next to them.',b:1,why:['f1','That is what the fearful spies said. Try again.']},
    {t:'The Lord fights for us.',b:0,why:['f2','Joshua said this. It is faith!']},
    {t:'Let\'s go back to Egypt!',b:1},
    {t:'Be strong and very courageous.',b:0,why:['f3','God said this to Joshua. It is faith!']},
    {t:'We can never win.',b:1},
   ],
   done:['f4','At the end of his life Joshua told the people: It is the Lord your God who fought for you. Choose faith, like Joshua!']},

  {game:'verse', chip:'Memory verse',
   verse:'Be strong and very courageous, that you may observe to do according to all the law which Moses My servant commanded you. Do not turn from it to the right hand or to the left, that you may prosper wherever you go.', ref:'Joshua 1:7',
   chunks:['Be strong and very courageous,','that you may observe to do','according to all the law','which Moses My servant commanded you.','Do not turn from it','to the right hand or to the left,','that you may prosper','wherever you go.'],
   intro:['verse-intro','Our memory verse is what God told Joshua. Listen: Be strong and very courageous, that you may observe to do according to all the law which Moses My servant commanded you. Do not turn from it to the right hand or to the left, that you may prosper wherever you go. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Which two spies trusted God?',a:[['Joshua and Caleb',['figure',{robe:'#2F7A4E',sleeve:'#2F7A4E',beard:'brown'}]],['Moses and Aaron','moses'],['Jacob and Esau','jacob']],c:0},
    {id:'q2',q:'What made the walls of Jericho fall?',a:[['Obeying God: marching and shouting','trumpet'],['A big army with ladders','ladder'],['An earthquake at night','stone']],c:0},
    {id:'q3',q:'Why do we take off our shoes in church?',a:[['It is a holy place','church'],['To run faster','sandals'],['Because it is hot','sun']],c:0},
   ]},
 ]
});
