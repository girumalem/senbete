/* Level III (Grades 4-6), October week 4: Isaac and Rebecca (Genesis 24, 25; Genesis 24:12) */
BKLesson({
 id:'L3-oct4', title:'Rebecca at the Well', am:'ርብቃ', sticker:'jar',
 pages:[
  {game:'cover', bg:'desert', title:'Rebecca at the Well', am:'ርብቃ',
   props:[{art:'rebecca',x:170,y:440,s:.6},{art:'jar',x:250,y:440,s:.6},{art:'camel',x:640,y:440,s:.7}],
   say:['cover','[[selam]]! A faithful servant prayed for help, and God answered before he even finished praying. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, October week 4: <b>Isaac and Rebecca</b> (Genesis 24, 25). Aim: learn to ask God for guidance, and to thank Him.</p><p>Talk about it: What did the servant thank God for?</p>'},

  {game:'read', chip:'Read', heading:'A wife for Isaac', pic:'camel',
   paras:[
    ['r1','When Abraham was old, he asked his oldest servant to go to his father\'s country and find a wife for his son Isaac.'],
    ['r2','The servant was faithful, like Abraham. He took camels and gifts and set out on the long road.'],
    ['r3','When he reached a well, he prayed: O Lord God of my master Abraham, please give me success this day. Show me the one You have chosen for Isaac.'],
   ]},

  {game:'story', bg:'desert', chip:'A kind answer',
   props:[{id:'sv',art:['figure',{robe:'#8A5A30',beard:'white',staff:true}],x:200,y:440,s:.6},{id:'cam',art:'camel',x:680,y:440,s:.7},{id:'reb',art:'rebecca',x:430,y:440,s:.6,hidden:true},{id:'jar',art:'jar',x:500,y:440,s:.55,hidden:true}],
   beats:[
    {wiggle:['sv'],say:['s1','Before he even finished praying, a young woman named Rebecca came to the well with a jar.']},
    {show:['reb','jar'],sfx:'pop',say:['s2','The servant said: Please give me a drink. Tap Rebecca.'],tap:'reb'},
    {wiggle:['reb'],say:['s3','She gave him water, and then said: I will draw water for your camels too!']},
    {move:{jar:[620,440,.55]},wiggle:['cam'],sfx:'pop',say:['s4','She kept drawing water until all the camels had drunk. Tap the camel.'],tap:'cam'},
    {sfx:'glory',say:['s5','The servant was amazed. This was the sign he had asked God for!']},
   ]},

  {game:'read', chip:'Read', heading:'Thanks be to God', pic:'rebecca',
   paras:[
    ['r4','Rebecca invited him to rest at her father\'s house. There, the servant told her family how he had prayed and how God had answered.'],
    ['r5','Her family knew Abraham\'s family. They agreed, and Rebecca agreed too.'],
    ['r6','The servant praised God, and took Rebecca back to Isaac. They married, and later had twin sons, Esau and Jacob.'],
   ]},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Abraham asked his servant to find a wife for Isaac.',t:true,why:'He sent his oldest, most faithful servant.',pic:'abraham'},
    {id:'t2',s:'The servant chose without praying.',t:false,why:'He prayed and asked God for a sign.',pic:'glory'},
    {id:'t3',s:'Rebecca gave water to the servant and to his camels.',t:true,why:'Her kindness was the sign from God.',pic:'camel'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'The servant prayed beside a ___.',a:'well',opts:['river','tent']},
    {id:'f2',s:'Rebecca drew water for his ___.',a:'camels',opts:['sheep','horses']},
    {id:'f3',s:'Isaac and Rebecca had two sons, Esau and ___.',a:'Jacob',opts:['Joseph','Moses']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'O Lord God of my master Abraham, please give me success this day.', ref:'Genesis 24:12',
   chunks:['O Lord God','of my master Abraham,','please give me success','this day.'],
   intro:['verse-intro','Our memory verse is the servant\'s prayer, from Genesis. Listen: O Lord God of my master Abraham, please give me success this day. Now build it in order!'],
   done:['verse-done','You can pray this prayer too, before something hard.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who is Isaac\'s father?',a:[['Abraham','abraham'],['Noah','noah'],['Moses','moses']],c:0},
    {id:'q2',q:'What did the servant do at the well?',a:[['He prayed','glory'],['He slept','bed'],['He went fishing','fish']],c:0},
    {id:'q3',q:'In which book of the Bible is this story?',a:[['Genesis','bible'],['Acts','peter'],['Exodus','moses']],c:0},
   ]},
 ]
});
