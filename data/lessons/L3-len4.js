/* Level III (Grades 4-6), Lent week 4: Bartimaeus (Mark 10:46-52) */
BKLesson({
 id:'L3-len4', title:'Bartimaeus Cries Out', am:'በርጤሜዎስ', sticker:'seeingMan',
 pages:[
  {game:'cover', bg:'day', title:'Bartimaeus Cries Out', am:'በርጤሜዎስ',
   props:[{art:'blindMan',x:170,y:440,s:.6},{art:'jesus',x:640,y:440,s:.6},{art:'crowd',x:740,y:445,s:.6}],
   say:['cover','[[selam]]! A blind man would not stop calling to Jesus, no matter who told him to be quiet. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, Lent week 4: <b>Bartimaeus</b> (Mark 10:46-52). Aim: learn about persistent prayer and faith.</p><p>Talk about it: Bartimaeus threw away his cloak. What might we need to leave behind to come to Jesus?</p>'},

  {game:'read', chip:'Read', heading:'By the road to Jericho', pic:'blindMan',
   paras:[
    ['r1','Jesus was leaving the city of Jericho with His disciples, and a large crowd followed Him.'],
    ['r2','A blind man named Bartimaeus sat by the road, begging. He heard the noise of the crowd and asked what was happening.'],
    ['r3','They told him: Jesus of Nazareth is passing by! Bartimaeus had heard about Jesus\' miracles, and his heart jumped with hope.'],
   ]},

  {game:'story', bg:'day', chip:'Have mercy on me!',
   props:[{id:'bm',art:'blindMan',x:180,y:440,s:.6},{id:'crowd',art:'crowd',x:420,y:445,s:.8},{id:'jesus',art:'jesus',x:650,y:440,s:.6},{id:'see',art:'seeingMan',x:180,y:440,s:.6,hidden:true}],
   beats:[
    {wiggle:['bm'],say:['s1','Bartimaeus cried out loudly: Jesus, Son of David, have mercy on me! Tap him to call out.'],tap:'bm'},
    {wiggle:['crowd'],say:['s2','Many people told him: Be quiet!']},
    {wiggle:['bm'],say:['s3','But he cried out even louder: Son of David, have mercy on me! Tap him again.'],tap:'bm'},
    {wiggle:['jesus'],sfx:'glory',say:['s4','Jesus stood still and said: Call him. They told Bartimaeus: Be of good cheer! Rise, He is calling you.']},
    {move:{bm:[530,440,.6],crowd:[300,445,.8]},sfx:'whoosh',say:['s5','He threw off his cloak, jumped up, and came to Jesus.']},
   ]},

  {game:'read', chip:'Read', heading:'What do you want?', pic:'seeingMan',
   paras:[
    ['r4','Jesus asked him: What do you want Me to do for you?'],
    ['r5','Every other day, Bartimaeus had asked people for food or money. But today he asked for something much greater: Lord, that I may receive my sight.'],
    ['r6','Jesus said: Go your way. Your faith has made you well. Immediately he could see, and he followed Jesus on the road.'],
   ]},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Bartimaeus stopped calling when people told him to be quiet.',t:false,why:'He cried out even louder!',pic:'crowd'},
    {id:'t2',s:'Jesus heard him even though the crowd was loud.',t:true,why:'God always hears our prayers.',pic:'jesus'},
    {id:'t3',s:'Bartimaeus asked Jesus for money.',t:false,why:'He asked to receive his sight.',pic:'seeingMan'},
    {id:'t4',s:'After he was healed, he followed Jesus.',t:true,why:'He followed Him on the road.',pic:'sandals'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'Jesus was leaving the city of ___.',a:'Jericho',opts:['Bethlehem','Egypt']},
    {id:'f2',s:'Bartimaeus called Jesus the Son of ___.',a:'David',opts:['Moses','Abraham']},
    {id:'f3',s:'Bartimaeus threw off his ___ and came to Jesus.',a:'cloak',opts:['sandals','crown']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'Go your way; your faith has made you well.', ref:'Mark 10:52',
   chunks:['Go your way;','your faith','has made you well.'],
   intro:['verse-intro','Our memory verse is what Jesus told Bartimaeus. Listen: Go your way; your faith has made you well. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'What did Bartimaeus cry out?',a:[['Son of David, have mercy on me!','heart'],['Give me gold!','gift'],['Go away!','door']],c:0},
    {id:'q2',q:'What did the crowd tell him?',a:[['Be quiet','crowd'],['Sing louder','kebero'],['Go home','tukul']],c:0},
    {id:'q3',q:'What made Bartimaeus well?',a:[['His faith','glory'],['Medicine','pot'],['Money','table']],c:0},
   ]},
 ]
});
