/* Level III (Grades 4-6), Easter season week 7: Pentecost, Paraclete (Luke 24:49; Acts 1-2; Acts 1:8) */
BKLesson({
 id:'L3-eas7', title:'Tongues of Fire', am:'በዓለ ሃምሳ', sticker:'flame',
 pages:[
  {game:'cover', bg:'church', title:'Tongues of Fire', am:'በዓለ ሃምሳ',
   props:[{art:'dove',x:640,y:130,s:.6},{art:'peter',x:580,y:440,s:.55},{art:'mary',x:690,y:440,s:.55},{art:'flame',x:580,y:320,s:.45},{art:'flame',x:690,y:320,s:.45},{art:'disciple',x:160,y:440,s:.55},{art:'flame',x:160,y:320,s:.45}],
   say:['cover','[[selam]]! Fifty days after the resurrection, the Holy Spirit came down on the disciples like tongues of fire. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, Easter week 7: <b>Pentecost</b> (Paraclete; Acts 2). Aim: learn about the coming of the Holy Spirit and the birth of the Church.</p><p>Talk about it: Why does it matter that the disciples were "of one accord"?</p>'},

  {game:'read', chip:'Read', heading:'Of one accord', pic:'church',
   paras:[
    ['r1','After the Ascension, the disciples went back to Jerusalem and stayed together in prayer with the Virgin [[mariam]] and other believers, about one hundred and twenty people.'],
    ['r2','Peter said they must choose someone to take the place of Judas Iscariot. They prayed and cast lots, and Matthias was chosen.'],
    ['r3','Pentecost means the fiftieth day. It was fifty days after the resurrection, and ten days after the Ascension.'],
   ]},

  {game:'story', bg:'church', chip:'A rushing wind',
   props:[{id:'peter',art:'peter',x:170,y:440,s:.55},{id:'mary',art:'mary',x:320,y:440,s:.55},{id:'d1',art:'disciple',x:470,y:440,s:.55},{id:'d2',art:['disciple',{robe:'#B3322A'}],x:620,y:440,s:.55},{id:'f1',art:'flame',x:170,y:320,s:.45,hidden:true},{id:'f2',art:'flame',x:320,y:320,s:.45,hidden:true},{id:'f3',art:'flame',x:470,y:320,s:.45,hidden:true},{id:'f4',art:'flame',x:620,y:320,s:.45,hidden:true}],
   beats:[
    {wiggle:['peter','mary','d1','d2'],say:['s1','On the day of Pentecost, they were all together in one place, of one accord.']},
    {sfx:'whoosh',say:['s2','Suddenly a sound came from heaven like a rushing mighty wind, and filled the whole house!']},
    {show:['f1','f2','f3','f4'],sfx:'glory',say:['s3','Tongues like fire rested on each of them, and they were all filled with the Holy Spirit. Tap a flame!'],tap:'f2'},
    {fx:'confetti',say:['s4','They received power and courage, and they began to speak in other languages!']},
   ]},

  {game:'read', chip:'Read', heading:'Peter\'s first sermon', pic:'crowd',
   paras:[
    ['r4','Jews from many countries were in Jerusalem for the feast. They were amazed to hear the disciples speaking in their own languages. Others mocked: They are drunk!'],
    ['r5','Peter stood up boldly: It is only nine o\'clock in the morning! He preached about Jesus, and how His death, resurrection and ascension fulfilled the prophecies.'],
    ['r6','He said: Repent, and be baptized, and you will receive the gift of the Holy Spirit. That day, about three thousand people believed and were baptized.'],
   ]},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Pentecost means the fiftieth day.',t:true,why:'Fifty days after the resurrection.',pic:['text',{t:'50',size:64,c:'#24418F'}]},
    {id:'t2',s:'The Holy Spirit came down like tongues of fire.',t:true,why:'With a sound like a rushing wind.',pic:'flame'},
    {id:'t3',s:'Only ten people were baptized that day.',t:false,why:'About three thousand were baptized!',pic:'crowd'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'___ was chosen to take Judas\' place.',a:'Matthias',opts:['Stephen','Paul']},
    {id:'f2',s:'The sound from heaven was like a rushing ___.',a:'wind',opts:['river','horse']},
    {id:'f3',s:'About three ___ people were baptized.',a:'thousand',opts:['hundred','dozen']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'You shall receive power when the Holy Spirit has come upon you; and you shall be witnesses to Me.', ref:'Acts 1:8',
   chunks:['You shall receive power','when the Holy Spirit','has come upon you;','and you shall be','witnesses to Me.'],
   intro:['verse-intro','Our memory verse is from the Acts of the Apostles. Listen: You shall receive power when the Holy Spirit has come upon you; and you shall be witnesses to Me. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who was praying with the disciples?',a:[['The Virgin [[mariam]]','mary'],['King Herod','king'],['Pilate','bowl']],c:0},
    {id:'q2',q:'What gift let the disciples speak to all nations?',a:[['Speaking in other languages','flame'],['A big boat','boat'],['A golden crown','gift']],c:0},
    {id:'q3',q:'What did Peter tell the people to do?',a:[['Repent and be baptized','dove'],['Go home','tukul'],['Be quiet','stone']],c:0},
   ]},
 ]
});
