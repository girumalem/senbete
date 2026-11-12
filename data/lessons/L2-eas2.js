/* Level II (Grades 1-3), Easter season week 2: Jesus Appears to the Apostles while Fishing (John 21:1-14) */
BKLesson({
 id:'L2-eas2', title:'Breakfast by the Sea', am:'በባሕሩ ዳር', sticker:'fish',
 pages:[
  {game:'cover', bg:'sea', title:'Breakfast by the Sea', am:'በባሕሩ ዳር',
   props:[{art:'boat',x:200,y:330,s:1.1},{art:'peter',x:170,y:313,s:.38},{art:'disciple',x:240,y:313,s:.38},{art:['net',{full:true}],x:640,y:420,s:.7}],
   say:['cover','[[selam]]! After He rose, Jesus visited His disciples many times. Today we go fishing with them! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, Easter week 2: <b>Jesus Appears to the Apostles while Fishing</b> (John 21:1-14). Aim: learn about the resurrection of Jesus Christ.</p><p>Review: On which day was Jesus crucified? On which day did He rise?</p>'},

  {game:'read', chip:'Read along', heading:'A long night', pic:'net',
   paras:[
    ['r1','Mary Magdalene told the disciples the good news: Jesus is risen!'],
    ['r2','A few days later, [[petros]] and some disciples went fishing at night.'],
    ['r3','They worked all night long, but they did not catch one fish.'],
    ['r4','In the morning, a man was standing on the shore. They did not know it was Jesus.'],
   ]},

  {game:'story', bg:'sea', chip:'Throw the net!',
   props:[{art:'shore',x:0,y:0,s:1},{id:'boat',art:'boat',x:280,y:330,s:1.2},{id:'peter',art:'peter',x:240,y:313,s:.4},{id:'d1',art:'disciple',x:320,y:313,s:.4},{id:'jesus',art:'jesus',x:680,y:430,s:.5},{id:'net',art:'net',x:450,y:410,s:.7},{id:'full',art:['net',{full:true}],x:450,y:410,s:.8,hidden:true}],
   beats:[
    {wiggle:['jesus'],say:['n1','The man on the shore called out: Throw your net on the right side of the boat! Tap the net.'],tap:'net'},
    {hide:['net'],show:['full'],sfx:'pop',say:['n2','They did, and the net filled up with so many fish they could not pull it in!']},
    {wiggle:['full'],say:['n3','The net was very heavy, but it did not break.']},
    {wiggle:['d1'],say:['n4','John said to [[petros]]: It is the Lord!']},
   ],
   parent:'<p>The disciples counted 153 great fish, "and for all there were so many, yet was not the net broken." (John 21:11)</p>'},

  {game:'tapmany', bg:'sea', chip:'So many fish!',
   props:[{art:'boat',x:400,y:330,s:1.1}],
   area:{x0:40,y0:360,x1:760,y1:440}, count:10, spawn:{art:'fish',s:[.6,.9],anim:'bob'}, sfx:'pop',
   progress:'*{n} more* fish!',
   intro:['fish','Tap the water to fill the net with ten big fish!'],
   done:['fish-done','When we listen to Jesus, He fills our net!']},

  {game:'story', bg:'sea', chip:'Peter jumps in',
   props:[{art:'shore',x:0,y:0,s:1},{id:'boat',art:'boat',x:250,y:330,s:1.1},{id:'d1',art:'disciple',x:250,y:313,s:.38},{id:'peter',art:'peter',x:330,y:330,s:.38},{id:'jesus',art:'jesus',x:640,y:430,s:.55},{id:'fire',art:'fire',x:520,y:440,s:.6,hidden:true},{id:'bread',art:'basket',x:430,y:445,s:.5,hidden:true}],
   beats:[
    {wiggle:['peter'],say:['p1','[[petros]] was so happy that he jumped into the water and swam to Jesus! Tap [[petros]].'],tap:'peter'},
    {move:{peter:[560,440,.5]},sfx:'whoosh',say:['p2','The other disciples came in the boat, pulling the net full of fish.']},
    {show:['fire','bread'],sfx:'glory',say:['p3','Jesus had made a fire. He blessed bread and fish, and gave them breakfast.']},
    {wiggle:['jesus'],say:['p4','This was the third time Jesus showed Himself to His disciples after He rose.']},
   ]},

  {game:'puzzle', chip:'Word puzzle',
   intro:['puzzle-intro','Word puzzle! Read the clue, then tap the letters to spell the answer.'],
   items:[
    {id:'w1',clue:'The disciples went …',word:'fishing',pic:'boat'},
    {id:'w2',clue:'Jesus said: Throw your … on the right side.',word:'net',pic:'net'},
    {id:'w3',clue:'He jumped into the water and swam to Jesus.',word:'Peter',pic:'peter'},
    {id:'w4',clue:'This was the … time Jesus appeared to them.',word:'third',pic:['text',{t:'3',size:64,c:'#24418F'}]},
   ],
   done:['puzzle-done','You solved the puzzle!']},

  {game:'quiz', questions:[
    {id:'q1',q:'How many fish did they catch all night?',a:[['None','net'],['Lots','fish']],c:0},
    {id:'q2',q:'Who said: It is the Lord?',a:[['John','disciple'],['A soldier','soldier']],c:0},
    {id:'q3',q:'What did Jesus give them?',a:[['Bread and fish','basket'],['Gold','gift']],c:0},
   ]},
  {game:'song', song:'wemedreni-tigebir-fasika'},
 ]
});
