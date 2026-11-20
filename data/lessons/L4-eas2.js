/* Level IV (Grade 7 and up), Easter season week 2: The Resurrection of Jesus Christ (Luke 24:13-35; John 20:19-29; John 21:1-14; John 5:28-29; Psalm 78:65) */
BKLesson({
 id:'L4-eas2', title:'The Resurrection', am:'ትንሣኤ', sticker:'sun',
 pages:[
  {game:'cover', bg:'sunrise', title:'The Resurrection', am:'ትንሣኤ',
   props:[{art:'tomb',x:250,y:440,s:.6},{art:'jesus',x:540,y:440,s:.65},{art:'glory',x:540,y:300,s:.9}],
   say:['cover','[[selam]]! For forty days after He rose, Christ appeared again and again: on a road, in a locked room, and on a lake shore. Today we see why He came, and what His Resurrection means for us.'],
   parent:'<p>This lesson follows Level IV, Easter season week 2: <b>The Resurrection of Jesus Christ</b> (Luke 24; John 20 and 21). Aim: learn the significance of the Resurrection.</p><p>The fifty days from Fasika to Pentecost are a season of joy in the Church, without fasting on Wednesdays and Fridays.</p>'},

  {game:'sort', chip:'Why did He come?',
   bins:[{label:'Why Christ came',art:'jesus'},{label:'Not the reason',art:'darkCloud'}],
   intro:['w0','Why did Christ come down from heaven and become man through the Virgin [[mariam]]? Sort these.'],
   items:[
    {t:'To bring Adam and his children back to paradise',b:0},
    {t:'To become a rich and powerful king on earth',b:1},
    {t:'To give us the hope of resurrection and everlasting life',b:0},
    {t:'To punish everyone who had sinned',b:1},
    {t:'To teach us and set an example for us',b:0},
   ],
   done:['w1','The prophets had spoken of all this. But until He opened their minds, even His followers did not understand the Scriptures.']},

  {game:'story', bg:'field', chip:'The road to Emmaus',
   props:[{id:'a',art:'disciple',x:120,y:440,s:.55},{id:'b',art:['figure',{robe:'#8A5A30',sleeve:'#5B4D3C',beard:'dark'}],x:200,y:440,s:.55},{id:'jesus',art:'jesusWalk',x:-80,y:440,s:.6},{id:'house',art:'house',x:640,y:440,s:.6},{id:'bread',art:'bread',x:540,y:400,s:.5,hidden:true}],
   beats:[
    {say:['em1','Two followers were walking sadly from Jerusalem to a village called Emmaus, talking about the crucifixion. Tap them.'],tap:'a'},
    {move:{jesus:[300,440]},say:['em2','Christ Himself came and walked with them, but they did not know Him. Starting with Moses and all the prophets, He explained everything written about Him.']},
    {move:{a:[440,440],b:[500,440],jesus:[580,440]},show:['bread'],say:['em3','At the village they begged Him: Stay with us. At the table He took bread, blessed it and broke it. Tap the bread.'],tap:'bread'},
    {hide:['jesus','bread'],fx:'flash',say:['em4','Their eyes were opened and they knew Him, and He vanished. They said: Did not our hearts burn within us while He opened the Scriptures to us?']},
   ]},

  {game:'story', bg:'night', chip:'Behind locked doors',
   props:[{id:'door',art:'door',x:120,y:440,s:.7},{id:'d1',art:'peter',x:300,y:440,s:.55},{id:'d2',art:'disciple',x:380,y:440,s:.55},{id:'tom',art:['figure',{robe:'#2F7A4E',sleeve:'#2F7A4E',beard:'dark'}],x:680,y:440,s:.55,hidden:true},{id:'jesus',art:'jesus',x:540,y:440,s:.6,hidden:true},{id:'glow',art:'glory',x:540,y:300,s:.8,hidden:true}],
   beats:[
    {say:['lr1','The disciples hid in a room with the doors locked, for fear. Tap the locked door.'],tap:'door'},
    {show:['jesus','glow'],fx:'flash',sfx:'glory',say:['lr2','Suddenly Christ stood among them and said: Peace be with you. He showed them His hands and His side, pierced by the nails and the spear.']},
    {show:['tom'],say:['lr3','Thomas was not there. He said: Unless I see the marks of the nails, I will not believe. Eight days later Christ came again, through the locked doors.']},
    {move:{tom:[620,440]},wiggle:['tom'],say:['lr4','Thomas saw and cried out: My Lord and my God! Christ said: Blessed are those who have not seen, and yet have believed.']},
   ]},

  {game:'repeat', bg:'lake', chip:'Cast the net',
   props:[{id:'boat',art:'boat',x:520,y:330,s:.8,anim:'sway'},{id:'jesus',art:'jesus',x:110,y:440,s:.55},{id:'shore',art:'shore',x:120,y:450,s:1},{id:'net',art:'net',x:640,y:380,s:.6,hidden:true},
    {id:'f1',art:'fish',x:600,y:390,s:.35,hidden:true},{id:'f2',art:'fish',x:650,y:380,s:.35,hidden:true},{id:'f3',art:'fish',x:700,y:395,s:.35,hidden:true},{id:'f4',art:'fish',x:620,y:410,s:.35,hidden:true},{id:'f5',art:'fish',x:680,y:415,s:.35,hidden:true}],
   button:{label:'Cast the net',art:'net'},
   intro:['n0','The disciples fished all night on the lake and caught nothing. In the morning, a Man on the shore called: Cast the net on the right side of the boat. Tap to cast it.'],
   steps:[
    {show:['net'],sfx:'whoosh',say:['n1','Splash! The net goes down on the right side.']},
    {show:['f1','f2','f3'],say:['n2','Fish! And more fish!']},
    {show:['f4','f5'],wiggle:['net'],say:['n3','So many fish that they could not pull the net in!']},
   ],
   done:['n4','John said: It is the Lord! Peter jumped into the water to reach Him. On the shore, Christ had made a fire, and gave them bread and fish.']},

  {game:'match', chip:'His Resurrection is...',
   heading:'Match each word to what it means',
   intro:['m0','The Resurrection of Christ is powerful, good news, comfort and joy, and hope. Match each one to its meaning.'],
   pairs:[
    ['Powerful','The guards fell down in fear, and His enemies were defeated'],
    ['Good news','Angels announced it, as they announced His birth to the shepherds'],
    ['Comfort and joy','The sorrow of His followers turned into joy'],
    ['Hope','He defeated death, and promised us the resurrection and everlasting life'],
   ],
   done:['m1','Death could not hold Him captive. By His death He saved Adam and his children, and by His Resurrection He gave us hope.']},

  {game:'verse', chip:'Memory verse',
   verse:'The Lord awakened as one out of sleep.', ref:'Psalm 78:65',
   intro:['verse-intro','Our memory verse was written by King [[dawit]], long before: The Lord awakened as one out of sleep. Build it in order.'],
   done:['verse-done','The prophets saw the Resurrection coming, hundreds of years before.']},

  {game:'quiz', questions:[
    {id:'q1',q:'On which day of the week was Christ crucified, and on which day did He rise?',a:[['Crucified on Friday, risen on Sunday','cross'],['Crucified on Monday, risen on Friday','moon'],['Crucified on Sunday, risen on Wednesday','sun']],c:0},
    {id:'q2',q:'How many times did Christ appear to the disciples in the locked room?',a:[['Two times','door'],['One time','door'],['Seven times','door']],c:0},
    {id:'q3',q:'What happened when they cast the net on the right side?',a:[['They caught so many fish they could not pull it in','fish'],['The net tore and they caught nothing','net'],['The boat sank','boat']],c:0},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','The two on the road to Emmaus said their hearts burned while He explained the Scriptures. When have you felt that way in church or reading the Bible?'],
    ['k2','Thomas wanted to see before he believed. Christ said: Blessed are those who have not seen, and yet have believed. What helps you believe?'],
    ['k3','The disciples worked all night with nothing, until they listened to Christ. Where in your life do you need to listen to Him first?'],
   ]},
 ]
});
