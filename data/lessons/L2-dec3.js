/* Level II (Grades 1-3), December week 3: Forty Years in the Desert (Numbers 13, 14; Deuteronomy 18) */
BKLesson({
 id:'L2-dec3', title:'Forty Years in the Desert', am:'አርባ ዓመት በምድረ በዳ', sticker:'grapes',
 pages:[
  {game:'cover', bg:'desert', title:'Forty Years in the Desert', am:'አርባ ዓመት በምድረ በዳ',
   props:[{art:'tent',x:150,y:430,s:.7},{art:'moses',x:560,y:430,s:.58},{art:'tent',x:690,y:430,s:.6},{art:'manna',x:350,y:430,s:1.2}],
   say:['cover','[[selam]]! After the Red Sea, the Israelites walked to the land God promised them. It took forty years! Let\'s read why. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, December week 3: <b>Forty Years in the Desert</b> (Numbers 13, 14, 26, 32; Deuteronomy 18). Aim: learn the cost of not trusting God, and that God still cares for us.</p>'},

  {game:'read', chip:'Read along', heading:'Food and water', pic:'manna',
   paras:[
    ['r1','In the desert there was nothing to eat. The people complained to Moses.'],
    ['r2','So God sent them manna, bread from heaven, every morning.'],
    ['r3','Then they were thirsty and complained again. God told Moses to hit a rock with his rod.'],
    ['r4','Water came gushing out of the rock! God cared for His people even when they complained.'],
   ]},

  {game:'tapmany', bg:'sunrise', chip:'Bread from heaven',
   props:[{art:'tent',x:150,y:430,s:.7},{art:'basket',x:420,y:430,s:1.2}],
   area:{x0:0,y0:280,x1:800,y1:450}, count:8, spawn:{art:'manna',s:[1,1.4],anim:'bob'}, sfx:'pop',
   progress:'*{n} more*!',
   intro:['manna','Every morning, the ground was covered with manna. Tap to gather it!'],
   done:['manna-done','It tasted like bread made with honey!']},

  {game:'story', bg:'field', chip:'Twelve spies',
   props:[{id:'moses',art:'moses',x:120,y:430,s:.58},{id:'s1',art:['man',{beard:'dark'}],x:330,y:440,s:.5},{id:'cal',art:['man',{robe:'#24418F',beard:'brown'}],x:460,y:440,s:.52},{id:'jos',art:['man',{robe:'#B3322A'}],x:580,y:440,s:.52},{id:'grapes',art:'grapes',x:700,y:400,s:1.6}],
   beats:[
    {wiggle:['moses'],say:['s1','Moses sent twelve men to look at the promised land.']},
    {wiggle:['grapes'],say:['s2','They came back with grapes so big that two men had to carry them on a pole! Tap the grapes.'],tap:'grapes'},
    {wiggle:['s1'],say:['s3','But ten of them said: The people there are giants! We cannot win. And the people were afraid.']},
    {wiggle:['cal','jos'],sfx:'glory',say:['s4','Only Caleb and Joshua said: God is with us! Do not be afraid. Tap Caleb and Joshua.'],tap:'cal'},
    {say:['s5','The people did not trust God. So God said they would wander in the desert for forty years.']},
   ],
   parent:'<p>Caleb and Joshua trusted God (Numbers 14:6-9). Talk about it: what makes us afraid? How can we trust God like Caleb and Joshua?</p>'},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','Read each sentence. Is it true, or false?'],
   items:[
    {id:'t1',s:'God sent manna, bread from heaven.',t:true,why:'True! Every morning, God fed His people.',pic:'manna'},
    {id:'t2',s:'All twelve spies trusted God.',t:false,why:'False. Only Caleb and Joshua trusted God.',pic:'grapes'},
    {id:'t3',s:'The Israelites walked in the desert for forty years.',t:true,why:'True, because they did not trust God.',pic:'tent'},
    {id:'t4',s:'Joshua led the people into the promised land after Moses died.',t:true,why:'True! Moses also promised that a greater prophet would come.',pic:['man',{robe:'#B3322A'}]},
   ],
   done:['tf-done','Great thinking!']},

  {game:'quiz', questions:[
    {id:'q1',q:'What did God give the people to eat?',a:[['Manna','manna'],['Stones','stone']],c:0},
    {id:'q2',q:'Where did the water come from?',a:[['A rock','rockWater'],['A tree','fruitTree']],c:0},
    {id:'q3',q:'Which spies trusted God?',a:[['Caleb and Joshua',['man',{robe:'#24418F',beard:'brown'}]],['All of them','crowd']],c:0},
   ]},
 ]
});
