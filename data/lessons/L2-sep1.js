/* Level II (Grades 1-3), September week 1: St. Tekle Haimanot (Gedle Tekle Haimanot; Synaxarium) */
BKLesson({
 id:'L2-sep1', title:'Saint Tekle Haimanot', am:'ቅዱስ ተክለ ሃይማኖት', sticker:'church',
 pages:[
  {game:'cover', bg:'mountain', title:'Saint Tekle Haimanot', am:'ቅዱስ ተክለ ሃይማኖት',
   props:[{art:['figure',{robe:'#3A2E28',sleeve:'#3A2E28',beard:'white',halo:true,wings:true,staff:true}],x:640,y:430,s:.6},{art:'church',x:160,y:440,s:.5}],
   say:['cover','[[selam]]! Today we meet a great saint of Ethiopia, [[tekle-haimanot]]. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, September week 1: <b>St. Tekle Haimanot</b> (Gedle Tekle Haimanot; Synaxarium). Aim: learn about his life and his virtues: generosity, prayer, teaching and healing.</p><p>Review: What is Qurban? Who gave it to us?</p>'},

  {game:'read', chip:'Read along', heading:'A saint of Ethiopia', pic:'church',
   paras:[
    ['r1','[[tekle-haimanot]] was born in Ethiopia to parents who loved God.'],
    ['r2','Every month, on Saint Michael\'s day, his parents made a feast for the poor.'],
    ['r3','When he grew up, he did the same. He gave everything he had to the poor.'],
    ['r4','Then he gave his whole life to teaching people about Jesus Christ.'],
   ]},

  {game:'tapmany', bg:'field', chip:'Share with the poor',
   props:[{art:['figure',{robe:'#3A2E28',sleeve:'#3A2E28',beard:'dark',halo:true}],x:140,y:440,s:.6},{art:'crowd',x:560,y:440,s:.8}],
   area:{x0:260,y0:260,x1:780,y1:380}, count:6, spawn:{art:'injera',s:[.4,.5],anim:'bob'}, sfx:'pop',
   progress:'*{n} more*!',
   intro:['share','Help share food with the poor, like [[tekle-haimanot]] did. Tap to give six plates of injera!'],
   done:['share-done','Sharing with people in need makes God happy.']},

  {game:'story', bg:'mountain', chip:'Six wings',
   props:[{id:'saint',art:['figure',{robe:'#3A2E28',sleeve:'#3A2E28',beard:'white',halo:true,arms:'pray'}],x:400,y:200,s:.45},{id:'wing',art:['figure',{robe:'#3A2E28',sleeve:'#3A2E28',beard:'white',halo:true,wings:true}],x:400,y:200,s:.45,hidden:true},{id:'glow',art:'glory',x:400,y:200,s:1,hidden:true}],
   beats:[
    {wiggle:['saint'],say:['w1','[[tekle-haimanot]] lived in a monastery on a high mountain. He went up and down on a rope.']},
    {say:['w2','One day, as he was going down, the rope broke! Tap the saint to pray.'],tap:'saint'},
    {show:['glow','wing'],hide:['saint'],sfx:'glory',say:['w3','He prayed, and God gave him six wings!']},
    {move:{wing:[400,430,.55],glow:[400,320,1]},sfx:'whoosh',fx:'confetti',say:['w4','He flew down the mountain safely.']},
   ],
   parent:'<p>Icons of Abune Tekle Haimanot show him with six wings, and standing on one leg, because he prayed standing for so long.</p>'},

  {game:'story', bg:'day', chip:'He prayed and healed',
   props:[{id:'saint',art:['figure',{robe:'#3A2E28',sleeve:'#3A2E28',beard:'white',halo:true,arms:'pray'}],x:220,y:440,s:.6},{id:'blind',art:'blindMan',x:470,y:440,s:.55},{id:'see',art:'seeingMan',x:470,y:440,s:.55,hidden:true},{id:'lame',art:'lameMan',x:640,y:440,s:.55},{id:'up',art:['lameMan',{up:true}],x:640,y:440,s:.55,hidden:true}],
   beats:[
    {wiggle:['saint'],say:['h1','He prayed for a very long time, standing up. He loved to talk with God.']},
    {wiggle:['blind','lame'],say:['h2','Sick people came to him, people who could not see, and people who could not walk. Tap them.'],tap:'blind'},
    {hide:['blind','lame'],show:['see','up'],sfx:'glory',say:['h3','He prayed, and God healed them! Then he taught them about Jesus and baptized many people.']},
   ]},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','Read each sentence. Is it true, or false?'],
   items:[
    {id:'f1',s:'[[tekle-haimanot]] gave everything to the poor.',t:true,why:'True! Just like his parents taught him.',pic:'injera'},
    {id:'f2',s:'When the rope broke, he fell and was hurt.',t:false,why:'False. God gave him six wings to fly down safely!',pic:['figure',{robe:'#3A2E28',sleeve:'#3A2E28',beard:'white',halo:true,wings:true}]},
    {id:'f3',s:'He taught many people in Ethiopia about Jesus.',t:true,why:'True! And he baptized them.',pic:'church'},
   ],
   done:['tf-done','Great thinking!']},

  {game:'quiz', questions:[
    {id:'q1',q:'Which saint\'s day did his family keep every month?',a:[['Saint Michael','michael'],['Saint Peter','peter']],c:0},
    {id:'q2',q:'How many wings did God give him?',a:[['Six',['text',{t:'6',size:64,c:'#24418F'}]],['Two',['text',{t:'2',size:64,c:'#24418F'}]]],c:0},
    {id:'q3',q:'What did he do for the sick?',a:[['Prayed and they were healed','glory'],['Sent them away','path']],c:0},
   ]},
  {game:'song', song:'aman-be-aman'},
 ]
});
