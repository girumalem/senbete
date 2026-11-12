/* Level II (Grades 1-3), Lent week 4: The Healing at Bethesda (John 5:1-9) */
BKLesson({
 id:'L2-len4', title:'Thirty-Eight Years', am:'መፃጉዕ', sticker:'bed',
 pages:[
  {game:'cover', bg:'day', title:'Thirty-Eight Years', am:'መፃጉዕ',
   props:[{art:'pool',x:400,y:430,s:.9},{art:'sleeper',x:200,y:440,s:.5},{art:'jesus',x:620,y:440,s:.6}],
   say:['cover','[[selam]]! Today we meet a man who waited a very, very long time to be healed. Count how long! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, Lent week 4: <b>The Healing of the Bedridden</b> (John 5:1-9). In the Ethiopian Church this Lent Sunday is called Metsagu. Aim: Jesus cares for those nobody helps.</p><p>Review: What did Jesus do in the temple?</p>'},

  {game:'read', chip:'Read along', heading:'The pool of Bethesda', pic:'pool',
   paras:[
    ['r1','In Jerusalem there was a pool called Bethesda. Many sick people lay around it: blind, lame and very weak.'],
    ['r2','Sometimes an angel came and stirred the water. The first person to get in after that was healed.'],
    ['r3','One man had been sick for thirty-eight years! He could not walk.'],
   ]},

  {game:'story', bg:'day', chip:'Do you want to be healed?',
   props:[{art:'pool',x:520,y:430,s:.9},{id:'man',art:'sleeper',x:200,y:440,s:.5},{id:'up',art:['seeingMan',{robe:'#8C8478'}],x:200,y:440,s:.55,hidden:true},{id:'mat',art:'bed',x:200,y:440,s:.6,hidden:true},{id:'jesus',art:'jesus',x:360,y:440,s:.6}],
   beats:[
    {wiggle:['jesus'],say:['h1','Jesus saw the man lying there and asked: Do you want to be healed? Tap the man.'],tap:'man'},
    {wiggle:['man'],say:['h2','The man said: Sir, I have no one to help me into the water. Someone else always gets there first.']},
    {wiggle:['jesus'],say:['h3','Jesus said: Get up! Pick up your bed, and walk. Tap Jesus.'],tap:'jesus'},
    {hide:['man'],show:['up','mat'],sfx:'glory',fx:'confetti',say:['h4','At once the man was healed! He picked up his bed and walked.']},
   ],
   parent:'<p>"Rise, take up thy bed, and walk." (John 5:8). The man had no one to help him, but Jesus came to him.</p>'},

  {game:'puzzle', chip:'Word puzzle',
   intro:['puzzle-intro','Word puzzle! Read the clue, then tap the letters to spell the answer.'],
   items:[
    {id:'w1',clue:'The man waited thirty … years',word:'eight',pic:['text',{t:'38',size:70,c:'#24418F'}]},
    {id:'w2',clue:'An angel stirred the …',word:'water',pic:'pool'},
    {id:'w3',clue:'Jesus said: Pick up your bed and …',word:'walk',pic:'sandals'},
   ],
   done:['puzzle-done','You spelled them all! Great reading.']},

  {game:'quiz', questions:[
    {id:'q1',q:'How many years was the man sick?',a:[['38',['text',{t:'38',size:64,c:'#24418F'}]],['3',['text',{t:'3',size:64,c:'#24418F'}]]],c:0},
    {id:'q2',q:'Why couldn\'t he get into the water?',a:[['No one helped him','sleeper'],['He did not like water','fish']],c:0},
    {id:'q3',q:'What did Jesus tell him to do?',a:[['Pick up your bed and walk','bed'],['Wait some more','stone']],c:0},
   ]},
  {game:'song', song:'tenageru-dink-sirawin-meskir'},
 ]
});
