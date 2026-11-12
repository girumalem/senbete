/* Level II (Grades 1-3), July week 4: Qirkos and Iyalota (Synaxarium, Hamle 19) */
BKLesson({
 id:'L2-jul4', title:'Brave Little Qirkos', am:'ቂርቆስና ኢየሉጣ', sticker:'flame',
 pages:[
  {game:'cover', bg:'day', title:'Brave Little Qirkos', am:'ቂርቆስና ኢየሉጣ',
   props:[{art:['figure',{robe:'#B3322A',netela:'#FFFFFF',halo:true}],x:170,y:440,s:.6},{art:['boy',{robe:'#24418F',halo:true}],x:250,y:440,s:.6},{art:'gabriel',x:640,y:430,s:.55}],
   say:['cover','[[selam]]! Today we meet a very brave little boy called Qirkos, and his mother, Iyalota. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, July week 4: <b>Qirkos and Iyalota</b> (Synaxarium; their feast is Hamle 19). Aim: learn about great faith, even as a child.</p><p>Review: What did St. Paul do before he ate, on the ship?</p>'},

  {game:'read', chip:'Read along', heading:'A mother and her son', pic:['boy',{robe:'#24418F',halo:true}],
   paras:[
    ['r1','Iyalota was a young mother. Her husband died soon after her son Qirkos was born.'],
    ['r2','When Qirkos was three years old, they had to leave their home, because Christians were being hurt there.'],
    ['r3','But in the new land, a cruel governor found out that Iyalota was a Christian.'],
   ]},

  {game:'story', bg:'day', chip:'Only one God',
   props:[{id:'gov',art:'king',x:150,y:440,s:.55},{id:'idol',art:'pillar',x:310,y:440,s:1},{id:'mom',art:['figure',{robe:'#B3322A',netela:'#FFFFFF',halo:true}],x:520,y:440,s:.6},{id:'kid',art:['boy',{robe:'#24418F',halo:true}],x:620,y:440,s:.6}],
   beats:[
    {wiggle:['gov'],say:['g1','The governor said: Worship my idols, or I will throw you into the fire! Tap the idol.'],tap:'idol'},
    {wiggle:['mom'],say:['g2','Iyalota said no. But she was afraid for her little boy.']},
    {wiggle:['kid'],say:['g3','Then Qirkos spoke up bravely. Tap Qirkos.'],tap:'kid'},
    {sfx:'glory',say:['g4','Your gods are made of stone and wood by people\'s hands. There is no God except my Lord Jesus Christ!']},
    {wiggle:['kid','mom'],say:['g5','He hugged his mother: Do not be afraid, Mother. The Lord will save us.']},
   ]},

  {game:'story', bg:'day', chip:'Saved by Gabriel',
   props:[{id:'fire',art:'fire',x:450,y:440,s:1.3},{id:'mom',art:['figure',{robe:'#B3322A',netela:'#FFFFFF',halo:true}],x:400,y:440,s:.55,hidden:true},{id:'kid',art:['boy',{robe:'#24418F',halo:true}],x:490,y:440,s:.55,hidden:true},{id:'glow',art:'glory',x:450,y:290,s:1.1,hidden:true},{id:'gab',art:'gabriel',x:450,y:420,s:.6,hidden:true},{id:'crowd',art:'crowd',x:150,y:440,s:.8}],
   beats:[
    {wiggle:['fire'],say:['f1','The governor threw them into a big fire. But God was watching! Tap the fire.'],tap:'fire'},
    {hide:['fire'],show:['glow','gab'],sfx:'glory',say:['f2','God sent the Archangel Gabriel. He cooled the fire!']},
    {show:['mom','kid'],move:{gab:[620,420,.6]},say:['f3','Qirkos and Iyalota were not burned at all!']},
    {wiggle:['crowd'],fx:'confetti',say:['f4','Many people who saw this believed in Jesus Christ.']},
   ],
   parent:'<p>Many Ethiopian churches are named for Qirkos (Kirkos). Their story shows God is with even the smallest child who trusts Him.</p>'},

  {game:'puzzle', chip:'Word puzzle',
   intro:['puzzle-intro','Word puzzle! Read the clue, then tap the letters to spell the answer.'],
   items:[
    {id:'w1',clue:'The brave boy was called …',word:'Qirkos',pic:['boy',{robe:'#24418F',halo:true}]},
    {id:'w2',clue:'His mother was called …',word:'Iyalota',pic:['figure',{robe:'#B3322A',netela:'#FFFFFF',halo:true}]},
    {id:'w3',clue:'The governor threw them into a …',word:'fire',pic:'fire'},
    {id:'w4',clue:'God sent the Archangel …',word:'Gabriel',pic:'gabriel'},
   ],
   done:['puzzle-done','You solved the puzzle!']},

  {game:'quiz', questions:[
    {id:'q1',q:'What did the governor want?',a:[['For them to worship idols','pillar'],['For them to eat','injera']],c:0},
    {id:'q2',q:'What did Qirkos say to his mother?',a:[['The Lord will save us','glory'],['Let\'s run away','path']],c:0},
    {id:'q3',q:'Who saved them from the fire?',a:[['The Archangel Gabriel','gabriel'],['A soldier','soldier']],c:0},
   ]},
  {game:'song', song:'qirkos-iyalotan-yawetah-kesa'},
 ]
});
