/* Level II (Grades 1-3), Lent week 7: Children Receive Christ (Matthew 21:1-11, 15-16) */
BKLesson({
 id:'L2-len7', title:'Hosanna in the Highest!', am:'ሆሳዕና በአርያም', sticker:'branch',
 pages:[
  {game:'cover', bg:'day', title:'Hosanna in the Highest!', am:'ሆሳዕና በአርያም',
   props:[{art:'jesus',x:560,y:385,s:.55},{art:'donkey',x:560,y:440,s:.6},{art:'branch',x:110,y:440,s:.9},{art:'boy',x:210,y:440,s:.7}],
   say:['cover','[[selam]]! Long ago, King David said that the King would come to Jerusalem riding a donkey, and children would praise Him. Today it comes true! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, Lent week 7: <b>Children Receive Christ</b> (Matthew 21). Hosanna means "save us, we pray". Ethiopians wear palm rings on Hosanna Sunday.</p>'},

  {game:'read', chip:'Read along', heading:'The King is coming', pic:'donkey',
   paras:[
    ['r1','Just before a holiday, Jesus came to Jerusalem.'],
    ['r2','People had heard how He raised Lazarus from death, so many came out to meet Him.'],
    ['r3','Jesus rode into the city on a young donkey, just as the prophets had said.'],
    ['r4','The people laid palm branches and their clothes on the road for Him.'],
   ]},

  {game:'tapmany', bg:'day', chip:'Lay down the branches',
   props:[{art:'city',x:700,y:430,s:.7},{art:'jesus',x:400,y:385,s:.55},{art:'donkey',x:400,y:440,s:.6}],
   area:{x0:0,y0:250,x1:800,y1:450}, count:8, spawn:{art:'branch',s:[.4,.6],anim:'rock'}, sfx:'note',
   progress:'*{n} more* branches!',
   intro:['branches','Tap to lay eight palm branches on the road for the King!'],
   done:['branches-done','What a welcome!']},

  {game:'verse', chip:'What the children sang', verse:'Hosanna to the Son of David! Blessed is He who comes in the name of the Lord! Hosanna in the highest!', ref:'Matthew 21:9',
   chunks:['Hosanna to the Son of David!','Blessed is He who comes','in the name of the Lord!','Hosanna in the highest!'],
   intro:['verse-intro','The children sang in the temple. Tap the words in order to sing with them!']},

  {game:'story', bg:'day', chip:'Children praise Him',
   props:[{art:'temple',x:420,y:440,s:.7},{id:'pr',art:['priest',{arms:'out'}],x:160,y:440,s:.55},{id:'kids',art:'girl',x:560,y:440,s:.7},{art:'boy',x:640,y:440,s:.7},{id:'jesus',art:'jesus',x:420,y:440,s:.55}],
   beats:[
    {wiggle:['pr'],say:['k1','Some leaders were angry: Do you hear what these children are saying?']},
    {wiggle:['jesus'],sfx:'glory',say:['k2','Jesus said: Yes! Have you never read: from the mouths of children, God has made perfect praise? Tap the children.'],tap:'kids'},
    {fx:'confetti',say:['k3','Jesus loves to hear children praise Him. We sing [[hosanna]] too!']},
   ]},

  {game:'quiz', questions:[
    {id:'q1',q:'What did Jesus ride into Jerusalem?',a:[['A young donkey','donkey'],['A horse','horse']],c:0},
    {id:'q2',q:'What did people put on the road?',a:[['Branches and clothes','branch'],['Stones','stone']],c:0},
    {id:'q3',q:'Who sang Hosanna in the temple?',a:[['The children','girl'],['The soldiers','soldier']],c:0},
   ]},
  {game:'song', song:'hosa-ena-be-aryam'},
 ]
});
