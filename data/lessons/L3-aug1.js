/* Level III (Grades 4-6), August week 1: Qirkos and Iyalota (Synaxarium, Hamle 15/19; Psalm 23:4) */
BKLesson({
 id:'L3-aug1', title:'Qirkos Stands Firm', am:'ቂርቆስና ኢየሉጣ', sticker:'flame',
 pages:[
  {game:'cover', bg:'day', title:'Qirkos Stands Firm', am:'ቂርቆስና ኢየሉጣ',
   props:[{art:['figure',{robe:'#B3322A',netela:'#FFFFFF',halo:true}],x:150,y:440,s:.6},{art:['boy',{robe:'#24418F',halo:true}],x:240,y:440,s:.6},{art:'gabriel',x:640,y:430,s:.55},{art:'fire',x:740,y:440,s:.6}],
   say:['cover','[[selam]]! Qirkos was only a child, but no threat and no gift could make him give up his faith. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, August week 1: <b>Qirkos and Iyalota</b> (Synaxarium). Aim: learn to stay faithful even when it costs us comfort. Their martyrdom is remembered on Hamle 15, and their feast on Hamle 19.</p><p>Talk about it: What "little comforts" might tempt us to skip prayer or church?</p>'},

  {game:'read', chip:'Read', heading:'Mother and son', pic:['boy',{robe:'#24418F',halo:true}],
   paras:[
    ['r1','Qirkos was the son of a young widow named Iyalota. When he was three, they fled their homeland because Christians were being persecuted there.'],
    ['r2','But in the new land she was accused of being a Christian. The governor ordered her to worship his idols.'],
    ['r3','She refused, but she was afraid for her son when the governor threatened to throw them both into the fire.'],
    ['r4','The governor even tried to win Qirkos over with special treats and comforts in his house, so the boy would give up his faith. But Qirkos would not.'],
   ]},

  {game:'story', bg:'day', chip:'The God who saves',
   props:[{id:'gov',art:'king',x:150,y:440,s:.55},{id:'mom',art:['figure',{robe:'#B3322A',netela:'#FFFFFF',halo:true}],x:470,y:440,s:.6},{id:'kid',art:['boy',{robe:'#24418F',halo:true}],x:580,y:440,s:.6},{id:'fire',art:'fire',x:720,y:440,s:.9},{id:'glow',art:'glory',x:640,y:300,s:1,hidden:true},{id:'gab',art:'gabriel',x:640,y:420,s:.55,hidden:true}],
   beats:[
    {wiggle:['kid'],say:['s1','Qirkos told the governor: Your gods are made of stone and wood by human hands. There is no God but my Lord Jesus Christ! Tap Qirkos.'],tap:'kid'},
    {wiggle:['kid','mom'],say:['s2','He comforted his mother: Do not be afraid. The Lord who saved Ananias, Azarias and Misael from the furnace will save us too.']},
    {wiggle:['fire'],say:['s3','The governor threw them into a blazing fire. Tap the fire.'],tap:'fire'},
    {hide:['fire'],show:['glow','gab'],sfx:'glory',fx:'confetti',say:['s4','God sent the Archangel Gabriel, who saved them from the flames! Many who saw it believed in Jesus Christ.']},
   ]},

  {game:'read', chip:'Read', heading:'The crown of martyrdom', pic:'shield',
   paras:[
    ['r5','The governor tortured them many times, and each time the Lord delivered them. Many more people came to believe.'],
    ['r6','At last they received the crown of martyrdom, on the fifteenth of Hamle. May their prayers be with us.'],
    ['r7','Qirkos did not trade his faith for comfort. We too should not give up prayer or church for small comforts: pray at night and in the morning, and go to bed early on Saturday so we can get up for church on Sunday.'],
   ]},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'The governor offered Qirkos comforts to give up his faith.',t:true,why:'But Qirkos refused.',pic:'gift'},
    {id:'t2',s:'Qirkos remembered the three young men in the furnace.',t:true,why:'Ananias, Azarias and Misael, saved by Gabriel.',pic:'fire'},
    {id:'t3',s:'Iyalota bowed to the idols to save her son.',t:false,why:'She refused, and her son encouraged her.',pic:'pillar'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'The idols were made of stone and ___.',a:'wood',opts:['gold','glass']},
    {id:'f2',s:'The Archangel ___ saved them from the fire.',a:'Gabriel',opts:['Michael','Raphael']},
    {id:'f3',s:'They were martyred on the fifteenth of ___.',a:'Hamle',opts:['Tir','Ginbot']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'Though I walk through the valley of the shadow of death, I will fear no evil; for You are with me.', ref:'Psalm 23:4',
   chunks:['Though I walk','through the valley','of the shadow of death,','I will fear no evil;','for You are with me.'],
   intro:['verse-intro','This month\'s memory verse is from Psalm twenty-three. Build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Why did Qirkos and his mother leave home?',a:[['Christians were persecuted there','chains'],['To go on holiday','camel'],['To find gold','gift']],c:0},
    {id:'q2',q:'What did Qirkos say about the idols?',a:[['They are made by human hands','pillar'],['They are very strong','lion'],['They can talk','scroll']],c:0},
    {id:'q3',q:'What can we learn from Qirkos?',a:[['Don\'t trade faith for comfort','heart'],['Always obey any ruler','king'],['Stay home on Sunday','bed']],c:0},
   ]},
 ]
});
