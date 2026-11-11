/* Level I, October week 2: The Power of the Cross (St. George and the dragon, Synaxarium) */
BKLesson({
 id:'L1-oct2', title:'The Power of the Cross', am:'ቅዱስ ጊዮርጊስ', sticker:'shield',
 pages:[
  {game:'cover', bg:'day', title:'The Power of the Cross', am:'የመስቀል ኃይል',
   props:[{art:'horse',x:470,y:410,s:.9,anim:'bob'},{art:'george',x:270,y:425,s:.7},{art:'cross',x:600,y:200,s:1.2,anim:'bob'}],
   say:['cover','[[selam]]! Do you remember how to make the sign of the cross? Today we learn how powerful it is! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, October week 2: <b>The Power of the Cross</b>, a story from the Synaxarium about Saint George (Kidus Giyorgis).</p>'},

  {game:'story', bg:'day', chip:'Saint George',
   props:[{art:'city',x:560,y:330,s:.8},{id:'george',art:'george',x:170,y:425,s:.72,anim:'bob'},{id:'p1',art:'man',x:520,y:430,s:.5},{id:'p2',art:'woman',x:610,y:432,s:.5},{id:'dragon',art:'dragon',x:900,y:420,s:.9},{id:'cross',art:'cross',x:170,y:170,s:1.3,hidden:true},{id:'cheer1',art:'sparkles',x:560,y:300,hidden:true}],
   beats:[
    {say:['g1','Long ago, there was a young man named Saint George. He loved God very much. Tap George!'],tap:'george'},
    {move:{dragon:[640,420,.9]},sfx:'rumble',wiggle:['p1','p2'],say:['g2','He came to a city where the people were afraid of a big dragon. The dragon came to fight George!']},
    {say:['g3','But George was not afraid. He had a secret weapon! Tap George again.'],tap:'george'},
    {show:['cross'],fx:'flash',sfx:'glory',say:['g4','He made the sign of the cross! Tap the cross!'],tap:'cross'},
    {move:{dragon:[680,470,.7]},wiggle:['dragon'],sfx:'boing',say:['g5','Right away, the dragon became weak and fell down!']},
    {show:['cheer1'],fx:'confetti',say:['g6','The people were so happy. George taught them about Jesus Christ, and many people believed.']},
   ],
   parent:'<p>In the lesson, St. George made the sign of the cross; the dragon became weak and fell, and St. George struck it with his spear. The children\'s version stops at the dragon falling. Ask: What was George\'s secret weapon?</p>'},

  {game:'tapmany', bg:'night', chip:'When I am afraid',
   props:[{art:'tukul',x:400,y:420,s:.9},{id:'shade',art:'shade',x:0,y:0},{art:'girl',x:620,y:430,s:.7,anim:'bob'}],
   area:{x0:0,y0:0,x1:800,y1:300}, count:5, spawn:{art:'cross',s:[.35,.55],anim:'twinkle'}, sfx:'sparkle',
   at:{5:{hide:['shade'],sfx:'glory'}},
   progress:'*{n} more* crosses!',
   intro:['afraid','When we are afraid, we make the sign of the cross, and our fear goes away. Tap the dark sky to make five shining crosses!'],
   done:['afraid-done','No dragon or bad spirit can come near us, because they are afraid of the cross. God keeps us safe!'],
   parent:'<p>When you are afraid, if you make the sign of the cross, your fear goes away. No dragon or bad spirits can come to us, because they are terrified of the cross.</p>'},

  {game:'cross', intro:['cross-intro','Let\'s make the sign of the cross together, just like Saint George. Touch the glowing dots one by one.']},
  {game:'quiz', questions:[
    {id:'q1',q:'What was Saint George\'s secret weapon?',a:[['A shield','shield'],['The sign of the cross','cross'],['A drum','kebero']],c:1},
    {id:'q2',q:'What happened to the dragon?',a:[['It became weak and fell down','dragon'],['It flew away to the moon','moon'],['It went to sleep in a tree','acacia']],c:0},
    {id:'q3',q:'What do we do when we are afraid?',a:[['Hide in a bush','bush'],['Make the sign of the cross','cross'],['Climb a tree','acacia']],c:1},
   ]},
  {game:'song', song:'bemeskelu-yamenachihu', intro:['song-intro','Let\'s sing last week\'s song again. It means: You who believe in the cross, welcome to the light of the cross. Tap the kebero drum to play along with your teacher.']},
 ]
});
