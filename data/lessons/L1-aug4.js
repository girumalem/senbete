/* Level I, August week 4: Behavior in Church (Matthew 21:12-17) */
BKLesson({
 id:'L1-aug4', title:'In God\'s House', am:'በቤተ ክርስቲያን', sticker:'church',
 pages:[
  {game:'cover', bg:'sunrise', title:'In God\'s House', am:'በቤተ ክርስቲያን',
   props:[{art:'church',x:400,y:440,s:.75},{art:'boy',x:200,y:440,s:.8},{art:'girl',x:600,y:440,s:.8}],
   say:['cover','[[selam]]! A church is a special place, because it is the house of God. Today we learn how to behave in God\'s house. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, August week 4: <b>Behavior in Church</b> (Matthew 21:12-17). Aim: learn how to behave and worship in the house of God.</p><p>Talk about it: How do we get ready for church? What do we do inside?</p>'},

  {game:'story', bg:'day', chip:'A house of prayer',
   props:[{art:'temple',x:420,y:440,s:.75},{id:'table',art:'table',x:230,y:440,s:.8},{id:'over',art:'tableOver',x:230,y:440,s:.8,hidden:true},{id:'sheep',art:'sheep',x:600,y:440,s:.4},{id:'dove',art:'dove',x:660,y:330,s:.6},{id:'jesus',art:'jesus',x:420,y:440,s:.55}],
   beats:[
    {say:['t1','One day Jesus went into the temple. People were selling sheep and doves and counting money inside! Tap the table.'],tap:'table'},
    {hide:['table'],show:['over'],sfx:'whoosh',say:['t2','Jesus was upset. He turned over the tables!']},
    {wiggle:['jesus'],say:['t3','Jesus said: My house shall be called a house of prayer. Tap Jesus.'],tap:'jesus'},
   ],
   parent:'<p>"My house shall be called the house of prayer." (Matthew 21:13). We honour the church as God\'s house.</p>'},

  {game:'drag', bg:'day', chip:'Getting ready',
   props:[{art:'girl',x:400,y:440,s:.85}],
   zone:{x:290,y:250,w:220,h:200},
   items:[{art:'blanket',x:110,y:400,s:.6},{art:'sandals',x:690,y:420,s:.8},{art:'handCross',x:690,y:300,s:.5}],
   intro:['ready','Getting ready for church starts at home. We wash and dress neatly in white clothes. Drag the white netela, the clean shoes and the cross to her!'],
   done:['ready-done','She is ready for church!']},

  {game:'find', bg:'church', chip:'What do we do in church?',
   props:[],
   spots:[{x:200,y:370,art:'candle',s:1,say:['f1','We light a candle and pray quietly.']},{x:400,y:380,art:'handCross',s:.5,say:['f2','We kiss the cross and bow to God.']},{x:600,y:370,art:'kebero',s:.5,say:['f3','We sing [[mezmur]] together.']}],
   intro:['find','What do we do in God\'s house? Tap the bushes to find out!'],
   done:['find-done','In church we are quiet, we pray, and we listen.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Jesus said, My house is a house of...',a:[['Prayer','church'],['Shopping','table'],['Playing','gift']],c:0},
    {id:'q2',q:'How should we be in church?',a:[['Quiet and kind','candle'],['Loud and running','horse']],c:0},
    {id:'q3',q:'What do we do in church?',a:[['Pray and sing','kebero'],['Sleep','bed']],c:0},
   ]},
  {game:'song', song:'enamesginew'},
 ]
});
