/* Level II (Grades 1-3), February week 2: The Thankful Leper (Luke 17:11-19) */
BKLesson({
 id:'L2-feb2', title:'The One Who Said Thank You', am:'ያመሰገነው', sticker:'heart',
 pages:[
  {game:'cover', bg:'field', title:'The One Who Said Thank You', am:'ያመሰገነው',
   props:[{art:'jesus',x:560,y:440,s:.6},{art:['man',{robe:'#F4EEDF',arms:'up'}],x:260,y:440,s:.55}],
   say:['cover','[[selam]]! Today Jesus heals ten sick men. Watch carefully: how many of them come back to say thank you? Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, February week 2: <b>The Thankful Leper</b> (Luke 17:11-19). Aim: always thank God for what He does for us.</p><p>Review: How did Jesus heal the official\'s son?</p>'},

  {game:'read', chip:'Read along', heading:'Ten lepers', pic:'crowd',
   paras:[
    ['r1','Jesus came to a small village. Ten men stood far away from Him.'],
    ['r2','They had leprosy, a skin sickness. People with leprosy had to live apart from everyone else.'],
    ['r3','They called out loudly: Jesus, Master, have mercy on us!'],
   ]},

  {game:'tapmany', bg:'field', chip:'Ten men healed',
   props:[{art:'jesus',x:120,y:440,s:.6}],
   area:{x0:200,y0:300,x1:800,y1:450}, count:10, spawn:{art:['man',{robe:'#8C8478',sleeve:'#8C8478'}],s:[.35,.4],anim:'bob'}, sfx:'pop',
   progress:'*{n} more*!',
   intro:['ten','Jesus said: Go, show yourselves to the priests. Tap to count all ten men!'],
   done:['ten-done','As they walked away, all ten were healed! Their skin became clean.']},

  {game:'story', bg:'field', chip:'Only one came back',
   props:[{id:'jesus',art:'jesus',x:220,y:440,s:.6},{id:'one',art:['man',{robe:'#F4EEDF',arms:'up'}],x:700,y:440,s:.55},{id:'crowd',art:'crowd',x:620,y:440,s:.7}],
   beats:[
    {wiggle:['one'],say:['b1','One of them saw that he was healed. He turned back, praising God with a loud voice! Tap him.'],tap:'one'},
    {move:{one:[360,440,.55]},sfx:'whoosh',say:['b2','He fell at the feet of Jesus and said: Thank You!']},
    {wiggle:['jesus'],say:['b3','Jesus asked: Were there not ten healed? Where are the other nine?']},
    {sfx:'glory',fx:'confetti',say:['b4','Jesus said to him: Get up and go. Your faith has made you well.']},
   ],
   parent:'<p>Talk about it: what can you thank God for today? Make a habit of saying "Egziabher yimesgen" (thanks be to God).</p>'},

  {game:'puzzle', chip:'Word puzzle',
   intro:['puzzle-intro','Word puzzle! Read the clue, then tap the letters to spell the answer.'],
   items:[
    {id:'w1',clue:'How many men did Jesus heal?',word:'ten',pic:'crowd'},
    {id:'w2',clue:'How many came back?',word:'one',pic:['man',{robe:'#F4EEDF',arms:'up'}]},
    {id:'w3',clue:'He came back to say thank …',word:'you',pic:'heart'},
   ],
   done:['puzzle-done','You spelled them all! [[egziabher-yimesgen]]!']},

  {game:'quiz', questions:[
    {id:'q1',q:'How many lepers met Jesus?',a:[['10',['text',{t:'10',size:64,c:'#24418F'}]],['3',['text',{t:'3',size:64,c:'#24418F'}]]],c:0},
    {id:'q2',q:'What did Jesus tell them to do?',a:[['Show themselves to the priests','priest'],['Go fishing','fish']],c:0},
    {id:'q3',q:'How many came back to say thank you?',a:[['1',['text',{t:'1',size:64,c:'#24418F'}]],['10',['text',{t:'10',size:64,c:'#24418F'}]]],c:0},
   ]},
  {game:'song', song:'tenageru-dink-sirawin-meskir'},
 ]
});
