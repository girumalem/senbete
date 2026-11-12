/* Level II (Grades 1-3), Lent week 1: Jesus Raises the Widow's Son (Luke 7:11-17) */
BKLesson({
 id:'L2-len1', title:'Young Man, Get Up!', am:'አንተ ጎበዝ ተነሥ', sticker:'stretcher',
 pages:[
  {game:'cover', bg:'day', title:'Young Man, Get Up!', am:'አንተ ጎበዝ ተነሥ',
   props:[{art:'city',x:660,y:430,s:.6},{art:'jesus',x:540,y:440,s:.6},{art:['woman',{robe:'#5A5F6E',netela:'#FFFFFF'}],x:200,y:440,s:.58}],
   say:['cover','[[selam]]! We have seen Jesus heal many sick people. Today Jesus does something even greater, in a town called Nain. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, Lent week 1: <b>Jesus Raises the Widow\'s Son</b> (Luke 7:11-17). Aim: Jesus has power even over death, and He cares when we are sad.</p><p>Review: How many lepers came back to thank Jesus?</p>'},

  {game:'read', chip:'Read along', heading:'A sad day in Nain', pic:['woman',{robe:'#5A5F6E',netela:'#FFFFFF'}],
   paras:[
    ['r1','In the town of Nain there lived a widow. A widow is a woman whose husband has died.'],
    ['r2','She had only one son. One day her son died, and she was very, very sad.'],
    ['r3','People were carrying him out of the town, and many people walked with her.'],
    ['r4','Just then, Jesus came to the town gate with His disciples and a big crowd.'],
   ]},

  {game:'story', bg:'day', chip:'Do not cry',
   props:[{art:'city',x:120,y:430,s:.6},{id:'str',art:'stretcher',x:420,y:400,s:.9},{id:'boy',art:'sleeper',x:420,y:380,s:.45},{id:'wi',art:['woman',{robe:'#5A5F6E',netela:'#FFFFFF'}],x:600,y:440,s:.58},{id:'jesus',art:'jesus',x:220,y:440,s:.6},{id:'up',art:['jacobYoung',{robe:'#FFFFFF',arms:'up'}],x:420,y:440,s:.55,hidden:true}],
   beats:[
    {wiggle:['wi'],say:['c1','Jesus saw the mother crying. He felt sorry for her, and said: Do not cry. Tap the mother.'],tap:'wi'},
    {wiggle:['jesus'],say:['c2','Jesus touched the stretcher, and the people carrying it stood still. Tap Jesus.'],tap:'jesus'},
    {hide:['boy'],show:['up'],sfx:'glory',say:['c3','Jesus said: Young man, I say to you, get up! And the young man sat up and began to talk!']},
    {move:{up:[540,440,.55]},fx:'confetti',say:['c4','Jesus gave him back to his mother.']},
   ],
   parent:'<p>"Young man, I say unto thee, Arise." (Luke 7:14)</p>'},

  {game:'blanks', chip:'Fill in the word',
   intro:['blanks-intro','Read the sentence, and tap the missing word.'],
   items:[
    {id:'b1',s:'A ___ is a woman whose husband has died.',a:'widow',opts:['queen','widow','sister'],pic:['woman',{robe:'#5A5F6E',netela:'#FFFFFF'}]},
    {id:'b2',s:'The widow had only one ___.',a:'son',opts:['son','sheep','house'],pic:'boy'},
    {id:'b3',s:'Jesus said to the mother: Do not ___.',a:'cry',opts:['sing','cry','eat'],pic:'jesus'},
    {id:'b4',s:'The people said: A great ___ has come among us!',a:'prophet',opts:['king','prophet','soldier'],pic:'crowd'},
   ],
   done:['blanks-done','Well read! The people praised God, and the news about Jesus spread everywhere.']},

  {game:'quiz', questions:[
    {id:'q1',q:'What is a widow?',a:[['A woman whose husband died',['woman',{robe:'#5A5F6E',netela:'#FFFFFF'}]],['A queen','king']],c:0},
    {id:'q2',q:'What did Jesus say to the young man?',a:[['Young man, get up!','jesus'],['Go to sleep','bed']],c:0},
    {id:'q3',q:'What did the people do after the miracle?',a:[['They praised God','glory'],['They ran away','path']],c:0},
   ]},
  {game:'song', song:'tenageru-dink-sirawin-meskir'},
 ]
});
