/* Level III (Grades 4-6), Easter season week 4: Washing the Apostles' Feet, Hatsebe Egir (John 13:1-17; John 13:14) */
BKLesson({
 id:'L3-eas4', title:'Jesus Washes Their Feet', am:'ሕጽበተ እግር', sticker:'bowl',
 pages:[
  {game:'cover', bg:'church', title:'Jesus Washes Their Feet', am:'ሕጽበተ እግር',
   props:[{art:'jesus',x:640,y:440,s:.6},{art:'bowl',x:560,y:440,s:.6},{art:'peter',x:160,y:440,s:.55}],
   say:['cover','[[selam]]! The Lord of all knelt down and washed His disciples\' feet. Why? Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, Easter week 4: <b>Washing the Apostles\' Feet</b> (Hatsebe Egir, on Holy Thursday; John 13:1-17). Aim: learn humility and service.</p><p>Talk about it: What is one way you can serve your family this week?</p>'},

  {game:'read', chip:'Read', heading:'The night of the Last Supper', pic:'table',
   paras:[
    ['r1','On the night of the Last Supper, after the meal, Jesus got up, took off His outer robe, and tied a towel around Himself.'],
    ['r2','He poured water into a basin and began to wash the disciples\' feet, and to dry them with the towel.'],
   ]},

  {game:'story', bg:'church', chip:'Not my feet, Lord!',
   props:[{id:'jesus',art:'jesus',x:400,y:440,s:.6},{id:'bowl',art:'bowl',x:480,y:440,s:.6},{id:'peter',art:'peter',x:600,y:440,s:.58},{id:'d1',art:'disciple',x:180,y:440,s:.55}],
   beats:[
    {wiggle:['jesus'],say:['s1','When Jesus came to [[petros]], Peter said: Lord, are You washing my feet? You shall never wash my feet! Tap Peter.'],tap:'peter'},
    {wiggle:['jesus'],say:['s2','Jesus said: What I am doing you do not understand now, but you will know later. If I do not wash you, you have no part with Me.']},
    {wiggle:['peter'],say:['s3','Peter said: Lord, then not only my feet, but also my hands and my head! Tap the basin.'],tap:'bowl'},
    {sfx:'glory',say:['s4','Jesus washed the feet of all His disciples.']},
   ]},

  {game:'read', chip:'Read', heading:'An example for us', pic:'bowl',
   paras:[
    ['r3','Then Jesus said: Do you know what I have done to you? You call Me Teacher and Lord, and you are right, for so I am.'],
    ['r4','If I, your Lord and Teacher, have washed your feet, you also ought to wash one another\'s feet. I have given you an example.'],
    ['r5','Once before, the disciples had argued about which of them was the greatest. Jesus told them: Whoever wants to be greatest among you, let him be the servant of all.'],
    ['r6','Every act of obedience and kindness to our parents, teachers, brothers, sisters and friends is a way of following His example.'],
   ],
   parent:'<p>On Holy Thursday, Ethiopian priests wash the feet of the faithful in church, following this example.</p>'},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Peter happily let Jesus wash his feet right away.',t:false,why:'At first he refused, because Jesus was his Lord.',pic:'peter'},
    {id:'t2',s:'Jesus washed the feet of all the disciples.',t:true,why:'He gave them an example of humble service.',pic:'bowl'},
    {id:'t3',s:'The greatest is the one who serves others.',t:true,why:'Let him be the servant of all.',pic:'heart'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'Jesus poured water into a ___.',a:'basin',opts:['jar','boat']},
    {id:'f2',s:'If I do not wash you, you have no ___ with Me.',a:'part',opts:['food','house']},
    {id:'f3',s:'Whoever wants to be greatest must be a ___.',a:'servant',opts:['king','soldier']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'If I then, your Lord and Teacher, have washed your feet, you also ought to wash one another\'s feet.', ref:'John 13:14',
   chunks:['If I then,','your Lord and Teacher,','have washed your feet,','you also ought to wash','one another\'s feet.'],
   intro:['verse-intro','Our memory verse is from the Gospel of John. Listen: If I then, your Lord and Teacher, have washed your feet, you also ought to wash one another\'s feet. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'When did Jesus wash the disciples\' feet?',a:[['At the Last Supper','table'],['At a wedding','cup'],['On a boat','boat']],c:0},
    {id:'q2',q:'Who refused at first?',a:[['Peter','peter'],['John','disciple'],['Judas','man']],c:0},
    {id:'q3',q:'What was Jesus teaching?',a:[['To humbly serve one another','heart'],['To keep clean','raindrop'],['To be the boss','king']],c:0},
   ]},
 ]
});
