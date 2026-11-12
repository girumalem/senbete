/* Level II (Grades 1-3), July week 2: Prayer, learning to say thank you (Luke 17:11-19) */
BKLesson({
 id:'L2-jul2', title:'Thank You, God', am:'እግዚአብሔር ይመስገን', sticker:'heart',
 pages:[
  {game:'cover', bg:'sunrise', title:'Thank You, God', am:'እግዚአብሔር ይመስገን',
   props:[{art:'man',x:90,y:440,s:.5},{art:['woman',{robe:'#24418F',netela:'#FFFFFF'}],x:180,y:440,s:.5},{art:'girl',x:260,y:440,s:.6},{art:'injera',x:640,y:430,s:.8},{art:'sun',x:690,y:140,s:.6}],
   say:['cover','[[selam]]! Prayer is talking to God. Today we learn to say thank you to God every day. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, July week 2: <b>Prayer</b>. Aim: learn to say thank you to God, and to parents and teachers.</p><p>Review: Can you say the Lord\'s Prayer in English and in Amharic? When do you pray it?</p>'},

  {game:'read', chip:'Read along', heading:'Ways to pray', pic:'church',
   paras:[
    ['r1','When we pray, we can praise God for how great He is.'],
    ['r2','We can ask God for the things we need, and pray for other people.'],
    ['r3','And we must always remember to thank God for all He does for us.'],
   ]},

  {game:'find', bg:'day', chip:'When do we say thank you?',
   props:[],
   spots:[{x:150,y:370,art:'sun',s:.6,say:['s1','In the morning, we thank God for a good night\'s sleep.']},{x:400,y:380,art:'injera',s:.6,say:['s2','Before every meal, we thank God for our daily bread.']},{x:650,y:370,art:'moon',s:.6,say:['s3','At night, we thank God for a blessed day.']}],
   intro:['find','When can we thank God? Tap the bushes to find out!'],
   done:['find-done','Morning, mealtime, and night. We can thank God all day long!']},

  {game:'story', bg:'day', chip:'The one who came back',
   props:[{id:'jesus',art:'jesus',x:200,y:440,s:.6},{id:'crowd',art:'crowd',x:600,y:440,s:.8},{id:'man',art:['man',{robe:'#8C8478'}],x:470,y:440,s:.55}],
   beats:[
    {wiggle:['crowd'],say:['l1','Do you remember? Jesus healed ten men who had leprosy.']},
    {move:{crowd:[900,440,.8]},sfx:'whoosh',say:['l2','Nine of them ran off, and forgot to say thank you.']},
    {wiggle:['man'],say:['l3','Only one came back, praising God. Tap him!'],tap:'man'},
    {move:{man:[330,440,.55]},sfx:'glory',say:['l4','Jesus said: Were not ten healed? Where are the nine? Only this one came back to give glory to God.']},
   ]},

  {game:'blanks', chip:'Fill in the word',
   intro:['blanks-intro','Read the sentence, and tap the missing word.'],
   items:[
    {id:'b1',s:'Prayer is how we ___ to God.',a:'speak',opts:['speak','run','hide'],pic:'church'},
    {id:'b2',s:'We thank God before every ___.',a:'meal',opts:['meal','fight','nap'],pic:'injera'},
    {id:'b3',s:'Of the ten men, only ___ came back.',a:'one',opts:['nine','one','ten'],pic:['man',{robe:'#8C8478'}]},
    {id:'b4',s:'We also thank our parents and ___.',a:'teachers',opts:['teachers','lions','clouds'],pic:'girl'},
   ],
   done:['blanks-done','Well done!']},

  {game:'think', chip:'Think and talk', heading:'Think and talk',
   qs:[['t1','What is one thing you can thank God for today?','Maybe your family, your food, or a sunny day.'],['t2','How can you say thank you to your parents?','A hug, helping at home, or saying it out loud!']]},

  {game:'quiz', questions:[
    {id:'q1',q:'When can we thank God?',a:[['Every day','sun'],['Never','bed']],c:0},
    {id:'q2',q:'How many healed men came back?',a:[['One',['text',{t:'1',size:64,c:'#24418F'}]],['Ten',['text',{t:'10',size:64,c:'#24418F'}]]],c:0},
    {id:'q3',q:'Who else should we thank?',a:[['Parents and teachers','woman'],['No one','stone']],c:0},
   ]},
  {game:'song', song:'aman-be-aman'},
 ]
});
