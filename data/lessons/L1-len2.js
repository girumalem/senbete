/* Level I, Lent week 2: David the Shepherd (1 Samuel 17:34-36) */
BKLesson({
 id:'L1-len2', title:'David the Shepherd Boy', am:'እረኛው ዳዊት', sticker:'washint',
 pages:[
  {game:'cover', bg:'field', title:'David the Shepherd Boy', am:'እረኛው ዳዊት',
   props:[{art:['boy',{staff:true}],x:330,y:430,s:1.01},{art:'sheep',x:480,y:430,s:.45},{art:'sheep',x:580,y:420,s:.4,flip:true},{art:'washint',x:250,y:330,s:.5}],
   say:['cover','[[selam]]! Today we meet a shepherd boy called David, [[dawit]]. When he grew up, God made him a king! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, Lent week 2: <b>David the Shepherd</b> (1 Samuel 17:34-36). David was chosen by God because he was faithful and humble.</p>'},
  {game:'tapmany', bg:'field', chip:'David\'s flute',
   props:[{id:'david',art:['boy',{staff:true}],x:160,y:430,s:1.01}],
   area:{x0:220,y0:250,x1:800,y1:450}, count:5, spawn:{art:'sheep',s:[.3,.4],anim:'bob'}, sfx:'note',
   intro:['flute','David loved his father\'s sheep. He played his flute, like our [[washint]], and the sheep came to him. Tap the grass to call five sheep!'],
   progress:'*{n} more* sheep!',
   done:['flute-done','All the sheep came to David. He cared for every one of them.']},
  {game:'story', bg:'field', chip:'Brave David',
   props:[{id:'david',art:['boy',{staff:true}],x:200,y:430,s:1.01},{id:'sheep',art:'sheep',x:400,y:430,s:.45},{id:'lion',art:'lion',x:700,y:430,s:.5},{id:'bear',art:'bear',x:700,y:430,s:.6,hidden:true}],
   beats:[
    {move:{lion:[560,430,.5]},sfx:'rumble',say:['b1','Oh no! A lion came to take a sheep! Tap David to help!'],tap:'david'},
    {move:{david:[470,430,1.01],lion:[820,430,.5]},sfx:'whoosh',say:['b2','David ran to save his sheep, and the lion ran away!']},
    {show:['bear'],move:{david:[200,430,1.01],bear:[580,430,.6]},sfx:'rumble',say:['b3','Another day a bear came! Tap David again!'],tap:'david'},
    {move:{david:[470,430,1.01],bear:[880,430,.6]},sfx:'whoosh',say:['b4','David saved his sheep from the bear too!']},
    {sfx:'glory',say:['b5','David always thanked God. It was God who gave him courage and strength.']},
   ],
   parent:'<p>David carried a staff to protect his sheep, not to hit them. He prayed before going out, and thanked God for his courage.</p>'},
  {game:'quiz', questions:[
    {id:'q1',q:'What did David take care of?',a:[['Sheep','sheep'],['Camels','camel'],['Fish','fish']],c:0},
    {id:'q2',q:'Why did David carry a staff?',a:[['To hit the sheep',['text',{t:'Hit',size:50,c:'#B3322A'}]],['To protect the sheep','sheep'],['To play music','washint']],c:1},
    {id:'q3',q:'Who gave David his strength?',a:[['God','glory'],['The lion','lion'],['The sheep','sheep']],c:0},
   ]},
  {game:'song', song:'egziabher-berhanena-medhanit'},
 ]
});
