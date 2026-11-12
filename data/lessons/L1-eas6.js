/* Level I, Easter season week 6: Jesus' Ascension (Acts 1:6-11) */
BKLesson({
 id:'L1-eas6', title:'Jesus Goes Up to Heaven', am:'ዕርገት', sticker:'cloud',
 pages:[
  {game:'cover', bg:'heaven', title:'Jesus Goes Up to Heaven', am:'ዕርገት',
   props:[{art:'jesus',x:400,y:330,s:.55},{art:'cloud',x:400,y:350,s:1.4},{art:'peter',x:200,y:440,s:.5},{art:'disciple',x:600,y:440,s:.5}],
   say:['cover','[[selam]]! Angels bring good news, remember? Today two angels bring good news again, on the day Jesus went up to heaven. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, Easter week 6: <b>Jesus\' Ascension</b> (Acts 1:6-11). Aim: learn the events of Christ\'s ascension.</p><p>Talk about it: How many days after Easter did Jesus go up? What did the angels say?</p>'},

  {game:'story', bg:'mountain', chip:'Forty days',
   props:[{id:'jesus',art:'jesus',x:400,y:420,s:.6},{id:'peter',art:'peter',x:200,y:440,s:.5},{id:'d1',art:'disciple',x:600,y:440,s:.5}],
   beats:[
    {say:['f1','After He rose, Jesus visited His disciples many times. He taught them for forty days. Tap the disciples.'],tap:'peter'},
    {wiggle:['jesus'],say:['f2','Then Jesus said: It is time for Me to go. But I will send you the Holy Spirit.']},
    {sfx:'glory',say:['f3','He lifted His hands and blessed them. Tap Jesus.'],tap:'jesus'},
   ],
   parent:'<p>For forty days the risen Lord taught His disciples, then promised them the Holy Spirit (Acts 1:3-8).</p>'},

  {game:'story', bg:'heaven', chip:'Up into the clouds',
   props:[{id:'jesus',art:'jesus',x:400,y:420,s:.6},{id:'cloud',art:'cloud',x:400,y:440,s:1.2,hidden:true},{id:'peter',art:'peter',x:180,y:440,s:.5},{id:'d1',art:'disciple',x:620,y:440,s:.5},{id:'a1',art:'angel',x:290,y:440,s:.5,hidden:true},{id:'a2',art:'angel',x:510,y:440,s:.5,hidden:true}],
   beats:[
    {show:['cloud'],sfx:'whoosh',say:['u1','As He blessed them, a cloud came. Tap the cloud!'],tap:'cloud'},
    {move:{jesus:[400,150,.45],cloud:[400,170,1]},sfx:'glory',say:['u2','Jesus went up, up, up into heaven, until they could not see Him.']},
    {hide:['jesus','cloud'],say:['u3','The disciples looked up into the sky. They missed Him.']},
    {show:['a1','a2'],sfx:'sparkle',say:['u4','Then two angels in white clothes stood by them! Tap an angel.'],tap:'a1'},
    {fx:'confetti',say:['u5','The angels said: This same Jesus will come back, the same way you saw Him go into heaven!']},
   ],
   parent:'<p>"This same Jesus, which is taken up from you into heaven, shall so come in like manner." (Acts 1:11)</p>'},

  {game:'tapmany', bg:'heaven', chip:'Look up!',
   props:[{art:'peter',x:250,y:440,s:.5},{art:'disciple',x:550,y:440,s:.5}],
   area:{x0:0,y0:20,x1:800,y1:280}, count:6, spawn:{art:'cloud',s:[.5,.8],anim:'bob'}, sfx:'whoosh',
   progress:'*{n} more* clouds!',
   intro:['clouds','Jesus went up on a cloud. Tap the sky to make six clouds!'],
   done:['clouds-done','Jesus is in heaven, and one day He will come again!']},

  {game:'quiz', questions:[
    {id:'q1',q:'Where did Jesus go?',a:[['Up to heaven','cloud'],['Into the sea','fish'],['To Egypt','pyramid']],c:0},
    {id:'q2',q:'Who stood by the disciples after Jesus went up?',a:[['Two angels','angel'],['Two lions','lion'],['Two camels','camel']],c:0},
    {id:'q3',q:'Will Jesus come again?',a:[['Yes!','glory'],['No','stone']],c:0},
   ]},
  {game:'song', song:'motin-dil-adirgo-yetenesaw-g'},
 ]
});
