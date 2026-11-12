/* Level II (Grades 1-3), July week 1: The Lord's Prayer (Luke 11:1-4; Matthew 6:9-13) */
BKLesson({
 id:'L2-jul1', title:'Our Father', am:'አባታችን ሆይ', sticker:'church',
 pages:[
  {game:'cover', bg:'garden', title:'Our Father', am:'አባታችን ሆይ',
   props:[{art:'jesus',x:180,y:440,s:.6},{art:'peter',x:600,y:440,s:.5},{art:'disciple',x:700,y:440,s:.5}],
   say:['cover','[[selam]]! One day the disciples asked Jesus: Lord, teach us to pray. Let\'s learn the prayer He taught them! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, July week 1: <b>The Lord\'s Prayer</b> (Luke 11:1-4). Aim: learn the Lord\'s Prayer, in English and in Amharic (Abatachin Hoy).</p><p>Review: Who helped Peter get out of prison? What were his friends doing?</p>'},

  {game:'read', chip:'Read along', heading:'Teach us to pray', pic:'jesus',
   paras:[
    ['r1','Jesus often went to a quiet place to pray.'],
    ['r2','One of His disciples said: Lord, teach us to pray.'],
    ['r3','So Jesus taught them a prayer. We call it the Lord\'s Prayer, because the Lord Jesus taught it to us.'],
    ['r4','In Amharic it is called [[abatachin]].'],
   ]},

  {game:'verse', chip:'Say the prayer', verse:'Our Father who art in heaven, hallowed be Thy name. Thy kingdom come. Thy will be done, on earth as it is in heaven. Give us this day our daily bread, and forgive us our sins, as we forgive those who sin against us. And lead us not into temptation, but deliver us from evil.', ref:'Matthew 6:9-13',
   chunks:['Our Father who art in heaven,','hallowed be Thy name.','Thy kingdom come.','Thy will be done, on earth as it is in heaven.','Give us this day our daily bread,','and forgive us our sins,','as we forgive those who sin against us.','And lead us not into temptation,','but deliver us from evil.'],
   intro:['verse-intro','Let\'s build the Lord\'s Prayer! Tap the pieces in order.']},

  {game:'match', chip:'What do we ask?', heading:'Match each part of the prayer to what it means',
   intro:['match-intro','Each part of the prayer means something. Tap a part, then tap what it means.'],
   pairs:[['Hallowed be Thy name','We praise God',null,'glory'],['Give us our daily bread','We ask for our food',null,'injera'],['Forgive us our sins','We say sorry',null,'heart'],['Deliver us from evil','We ask God to keep us safe',null,'shield']],
   done:['match-done','You matched them all!']},

  {game:'tapmany', bg:'church', chip:'Pray every day',
   props:[{art:'boy',x:300,y:440,s:.7},{art:'girl',x:500,y:440,s:.7}],
   area:{x0:0,y0:40,x1:800,y1:280}, count:3, spawn:{art:'candle',s:[.6,.7],anim:'bob'}, sfx:'note',
   progress:'*{n} more*!',
   intro:['times','We can pray the Lord\'s Prayer in the morning, before we eat, and at night. Tap to light three candles!'],
   done:['times-done','God is our Father, and He loves to hear His children.']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','Read each sentence. Is it true, or false?'],
   items:[
    {id:'f1',s:'Jesus taught us to call God our Father.',t:true,why:'True! We are God\'s children.',pic:'glory'},
    {id:'f2',s:'In the prayer we ask God to forgive us.',t:true,why:'True! And we forgive others too.',pic:'heart'},
    {id:'f3',s:'We only pray once a year.',t:false,why:'False. We can pray every day, many times!',pic:'candle'},
   ],
   done:['tf-done','Great thinking!']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who taught us the Lord\'s Prayer?',a:[['Jesus','jesus'],['King Herod','king']],c:0},
    {id:'q2',q:'What do we call God in this prayer?',a:[['Our Father','glory'],['Our King Herod','king']],c:0},
    {id:'q3',q:'What is the prayer called in Amharic?',a:[['[[abatachin]]','church'],['[[demera]]','demera']],c:0},
   ]},
  {game:'song', song:'aman-be-aman'},
 ]
});
