/* Level IV (Grade 7 and up), Easter season week 7: Pentecost (Acts 2; Luke 24:49; Mark 16:17-18) */
BKLesson({
 id:'L4-eas7', title:'Pentecost', am:'በዓለ ኀምሳ', sticker:'flame',
 pages:[
  {game:'cover', bg:'church', title:'Pentecost', am:'በዓለ ኀምሳ',
   props:[{art:'house',x:400,y:440,s:.8},{art:'dove',x:400,y:150,s:.6},{art:'flame',x:300,y:240,s:.4},{art:'flame',x:500,y:240,s:.4}],
   say:['cover','[[selam]]! Pentecost means the fiftieth day. On the fiftieth day after the Resurrection, the promise of Christ came true: the Holy Spirit came down on the disciples.'],
   parent:'<p>This lesson follows Level IV, Easter season week 7: <b>Pentecost</b> (Acts 2). Aim: learn about the gift of the Holy Spirit, and the importance of gathering with one accord in faith.</p><p>Pentecost (Beale Hamsa, Paraclete) ends the fifty days of Easter joy. The next day the Fast of the Apostles begins.</p>'},

  {game:'story', bg:'night', chip:'With one accord',
   props:[{id:'house',art:'house',x:400,y:440,s:.85},{id:'m',art:'mary',x:400,y:440,s:.45,hidden:true},{id:'d1',art:'peter',x:250,y:440,s:.45,hidden:true},{id:'d2',art:'disciple',x:550,y:440,s:.45,hidden:true}],
   beats:[
    {say:['h1','Ten days after the Ascension, the disciples were gathered in the house of Saint Mark in Jerusalem, as Christ had told them. Tap the house.'],tap:'house'},
    {hide:['house'],show:['m','d1','d2'],say:['h2','The Virgin [[mariam]] and other believers were with them, about one hundred and twenty people, all praying with one accord.']},
   ]},

  {game:'tapmany', bg:'church', chip:'Tongues of fire',
   props:[{id:'m',art:['mary',{arms:'pray'}],x:400,y:440,s:.45},{id:'d1',art:'peter',x:180,y:440,s:.45},{id:'d2',art:'disciple',x:280,y:440,s:.45},{id:'d3',art:'disciple',x:520,y:440,s:.45},{id:'d4',art:['figure',{robe:'#2F7A4E',sleeve:'#2F7A4E',beard:'dark'}],x:620,y:440,s:.45},{id:'dove',art:'dove',x:400,y:80,s:.5,hidden:true}],
   area:{x0:150,y0:160,x1:650,y1:250}, count:8, spawn:{art:'flame',s:[.25,.32]},
   at:{1:{show:['dove'],sfx:'whoosh'},8:{fx:'flash',sfx:'glory'}},
   intro:['tf1','Suddenly there came a sound from heaven, like a rushing mighty wind, and it filled the whole house. Tap above their heads to see what came upon them.'],
   done:['tf2','Tongues like fire rested on each one, and they were all filled with the Holy Spirit. They began to speak in other languages!']},

  {game:'story', bg:'egypt', chip:'Every language',
   props:[{id:'crowd',art:'crowd',x:620,y:445,s:.65},{id:'c2',art:'crowd',x:740,y:445,s:.55},{id:'pet',art:['peter',{arms:'bless'}],x:200,y:440,s:.6}],
   beats:[
    {say:['l1','Many Jews from every nation had come to Jerusalem for the feast. They heard the disciples speaking, each in his own language, and they were amazed. Tap the crowd.'],tap:'crowd'},
    {wiggle:['c2'],say:['l2','But some mocked and said: They are drunk!']},
    {wiggle:['pet'],say:['l3','Peter stood up and preached. He showed them how the prophets, and King [[dawit]], had spoken about the Resurrection and Ascension of Christ.']},
    {say:['l4','The people were cut to the heart and asked: What shall we do? Peter said: Repent, and be baptized every one of you in the name of Jesus Christ, and you shall receive the gift of the Holy Spirit.']},
   ]},

  {game:'repeat', bg:'river', chip:'Three thousand',
   props:[{id:'pet',art:'peter',x:140,y:440,s:.55},{id:'g1',art:'crowd',x:330,y:445,s:.5,hidden:true},{id:'g2',art:'crowd',x:500,y:445,s:.5,hidden:true},{id:'g3',art:'crowd',x:670,y:445,s:.5,hidden:true}],
   button:{label:'Baptize',art:'raindrop'},
   intro:['b0','That day, the people who believed were baptized. Tap to count them.'],
   steps:[
    {show:['g1'],say:['b1','One thousand!']},
    {show:['g2'],say:['b2','Two thousand!']},
    {show:['g3'],fx:'confetti',sfx:'glory',say:['b3','Three thousand people, on the very first day!']},
   ],
   done:['b4','They continued together in the teaching of the apostles, in fellowship, in the breaking of bread, and in prayer. Signs and wonders followed them, as Christ had promised.']},

  {game:'sort', chip:'One accord?',
   bins:[{label:'With one accord',art:'heart'},{label:'Not one accord',art:'darkCloud'}],
   intro:['s0','The Holy Spirit came because they obeyed and gathered with one accord. Sort these.'],
   items:[
    {t:'Praying together as a family',b:0},
    {t:'Arguing over who gets the best seat',b:1},
    {t:'Agreeing to help a classmate together',b:0},
    {t:'Refusing to pray with others',b:1},
    {t:'Singing the [[mezmur]] together in Sunday school',b:0},
   ],
   done:['s1','God always keeps His promises. To receive them, we must obey, and be of one accord in all that is good.']},

  {game:'verse', chip:'Memory verse',
   verse:'They were all with one accord in one place.', ref:'Acts 2:1',
   intro:['verse-intro','Our memory verse: They were all with one accord in one place. Build it in order.'],
   done:['verse-done','That is how the Church began.']},

  {game:'quiz', questions:[
    {id:'q1',q:'What does Pentecost mean?',a:[['The fiftieth day','sun'],['The fortieth day','moon'],['The third day','tomb']],c:0},
    {id:'q2',q:'How many people were gathered in the house?',a:[['About one hundred and twenty','house'],['Twelve','disciple'],['Three thousand','crowd']],c:0},
    {id:'q3',q:'How many days after the Ascension did the Holy Spirit come?',a:[['Ten days','flame'],['Forty days','cloud'],['One day','sun']],c:0},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Do you gather with one accord with your family at home, and your friends at school? What breaks the one accord?'],
    ['k2','The disciples waited and prayed for ten days. Why is it hard to wait for God\'s promises?'],
    ['k3','The Holy Spirit made the frightened disciples brave. Where do you need courage to speak about Christ?'],
   ]},
 ]
});
