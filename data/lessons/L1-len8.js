/* Level I, Lent week 8: Children Receive Christ (Matthew 21:1-11), Hosanna */
BKLesson({
 id:'L1-len8', title:'Hosanna!', am:'ሆሳዕና', sticker:'branch',
 pages:[
  {game:'cover', bg:'day', title:'Hosanna!', am:'ሆሳዕና',
   props:[{art:'jesus',x:420,y:385,s:.55},{art:'donkey',x:420,y:440,s:.6},{art:'branch',x:220,y:440,s:.9},{art:'branch',x:620,y:440,s:.9}],
   say:['cover','[[selam]]! Today Jesus rides into Jerusalem, and the children sing [[hosanna]]! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, Lent week 8: <b>Children Receive Christ</b> (Matthew 21:1-11). In Ethiopia, Hosanna (Palm Sunday) is celebrated with palm rings and crosses.</p>'},
  {game:'story', bg:'day', chip:'Into Jerusalem',
   props:[{art:'city',x:680,y:430,s:.7},{id:'jesus',art:'jesus',x:160,y:385,s:.55},{id:'donkey',art:'donkey',x:160,y:440,s:.6},{id:'crowd',art:'crowd',x:520,y:440,s:.9}],
   beats:[
    {say:['j1','Many people came to Jerusalem for a feast. They heard about the miracles of Jesus. Tap the people!'],tap:'crowd'},
    {move:{jesus:[340,385,.55],donkey:[340,440,.6]},sfx:'whoosh',say:['j2','Jesus came riding on a little donkey!']},
   ]},
  {game:'tapmany', bg:'day', chip:'Wave the branches',
   props:[{art:'city',x:700,y:430,s:.7},{art:'jesus',x:400,y:385,s:.55},{art:'donkey',x:400,y:440,s:.6}],
   area:{x0:0,y0:250,x1:800,y1:450}, count:8, spawn:{art:'branch',s:[.4,.6],anim:'rock'}, sfx:'note',
   progress:'*{n} more* branches!',
   intro:['branches','The people put branches and clothes on the road for Jesus. Tap to lay down eight branches!'],
   done:['branches-done','What a welcome for the King!']},
  {game:'tapmany', bg:'day', chip:'Sing Hosanna!',
   props:[{art:'jesus',x:400,y:385,s:.55},{art:'donkey',x:400,y:440,s:.6},{art:'boy',x:180,y:440,s:0.8},{art:'girl',x:620,y:440,s:0.8}],
   area:{x0:0,y0:0,x1:800,y1:300}, count:6, spawn:{art:'star',s:[.25,.4],anim:'bob'}, sfx:'note',
   progress:'*{n} more*!',
   intro:['sing','Even the little children sang: [[hosanna]] to the Son of David! Tap the sky to sing with them!'],
   done:['sing-done','Jesus loves to hear children praise Him. We sing [[hosanna]] too!']},
  {game:'quiz', questions:[
    {id:'q1',q:'What did Jesus ride into Jerusalem?',a:[['A horse','horse'],['A little donkey','donkey'],['A camel','camel']],c:1},
    {id:'q2',q:'What did people put on the road?',a:[['Branches','branch'],['Stones','stone'],['Fish','fish']],c:0},
    {id:'q3',q:'What did the children sing?',a:[['Hosanna!','branch'],['Happy birthday',['gift',{}]],['Nothing',['text',{t:'...',size:60,c:'#24418F'}]]],c:0},
   ]},
  {game:'song', song:'hosanna-be-aryam'},
 ]
});
