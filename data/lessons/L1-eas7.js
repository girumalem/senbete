/* Level I, Easter season week 7: Pentecost (Acts 2) */
BKLesson({
 id:'L1-eas7', title:'The Holy Spirit Comes', am:'በዓለ ሃምሳ', sticker:'flame',
 pages:[
  {game:'cover', bg:'church', title:'The Holy Spirit Comes', am:'በዓለ ሃምሳ',
   props:[{art:'dove',x:400,y:150,s:1},{art:'peter',x:250,y:440,s:.55},{art:'mary',x:400,y:440,s:.55},{art:'disciple',x:550,y:440,s:.55},{art:'flame',x:250,y:320,s:.5},{art:'flame',x:400,y:320,s:.5},{art:'flame',x:550,y:320,s:.5}],
   say:['cover','[[selam]]! Before Jesus went up to heaven, He made a promise: I will send you the Holy Spirit. Today the promise comes true! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, Easter week 7: <b>Pentecost</b> (Acts 2). Aim: learn about the events of the day of Pentecost.</p><p>Talk about it: How did the Holy Spirit come? What could the disciples do after that?</p>'},

  {game:'story', bg:'church', chip:'Waiting together',
   props:[{id:'door',art:'door',x:720,y:440,s:.8},{id:'peter',art:'peter',x:170,y:440,s:.55},{id:'mary',art:'mary',x:320,y:440,s:.55},{id:'d1',art:'disciple',x:470,y:440,s:.55},{id:'d2',art:['disciple',{robe:'#B3322A'}],x:600,y:440,s:.55}],
   beats:[
    {say:['w1','Jesus told the disciples: Stay in Jerusalem until the Holy Spirit comes. He will give you power and courage.']},
    {wiggle:['mary'],say:['w2','So they stayed together in one house, praying, with [[mariam]] the mother of Jesus. Tap them!'],tap:'mary'},
    {say:['w3','They waited for ten days after Jesus went up to heaven.']},
   ],
   parent:'<p>The disciples, with the Virgin Mary, were "all with one accord in one place" (Acts 1:14, 2:1).</p>'},

  {game:'story', bg:'church', chip:'Wind and fire',
   props:[{id:'peter',art:'peter',x:170,y:440,s:.55},{id:'mary',art:'mary',x:320,y:440,s:.55},{id:'d1',art:'disciple',x:470,y:440,s:.55},{id:'d2',art:['disciple',{robe:'#B3322A'}],x:600,y:440,s:.55},{id:'f1',art:'flame',x:170,y:320,s:.5,hidden:true},{id:'f2',art:'flame',x:320,y:320,s:.5,hidden:true},{id:'f3',art:'flame',x:470,y:320,s:.5,hidden:true},{id:'f4',art:'flame',x:600,y:320,s:.5,hidden:true},{id:'dove',art:'dove',x:390,y:110,s:.9,hidden:true}],
   beats:[
    {sfx:'whoosh',say:['h1','Suddenly there was a sound from heaven, like a strong rushing wind! Whoosh!']},
    {show:['dove','f1','f2','f3','f4'],sfx:'glory',say:['h2','Something like little flames of fire came and sat on each one of them. Tap a flame!'],tap:'f1'},
    {wiggle:['peter','d1','d2'],say:['h3','They were all filled with the Holy Spirit!']},
   ],
   parent:'<p>"There appeared unto them cloven tongues like as of fire, and it sat upon each of them." (Acts 2:3)</p>'},

  {game:'tapmany', bg:'church', chip:'Fire of the Holy Spirit',
   props:[{art:'peter',x:170,y:440,s:.55},{art:'disciple',x:320,y:440,s:.55},{art:['disciple',{robe:'#B3322A'}],x:470,y:440,s:.55},{art:['disciple',{robe:'#8A5A30'}],x:620,y:440,s:.55}],
   area:{x0:60,y0:60,x1:740,y1:250}, count:8, spawn:{art:'flame',s:[.4,.6],anim:'bob'}, sfx:'sparkle',
   progress:'*{n} more* flames!',
   intro:['flames','Tap above the disciples to bring eight flames of the Holy Spirit!'],
   done:['flames-done','The Holy Spirit gave them power and courage!']},

  {game:'story', bg:'day', chip:'Many languages',
   props:[{art:'city',x:640,y:430,s:.6},{id:'peter',art:'peter',x:220,y:440,s:.58},{id:'crowd',art:'crowd',x:480,y:440,s:.9}],
   beats:[
    {wiggle:['peter'],say:['l1','Now the disciples could speak many languages! [[petros]] went out and taught about Jesus. Tap [[petros]].'],tap:'peter'},
    {wiggle:['crowd'],say:['l2','People from many countries heard the good news in their own language. Tap the people!'],tap:'crowd'},
    {fx:'confetti',say:['l3','That day about three thousand people believed in Jesus and were baptized!']},
   ],
   parent:'<p>Peter preached and about three thousand were baptized that day (Acts 2:41).</p>'},

  {game:'quiz', questions:[
    {id:'q1',q:'Who came down on the disciples?',a:[['The Holy Spirit','dove'],['A raven','raven'],['A lion','lion']],c:0},
    {id:'q2',q:'What did it look like?',a:[['Fire','flame'],['Rain','raindrop'],['Snow','cloud']],c:0},
    {id:'q3',q:'What could the disciples do after that?',a:[['Speak many languages','crowd'],['Fly like birds','bird']],c:0},
   ]},
  {game:'song', song:'menfes-kidus-werede-la-ile-h'},
 ]
});
