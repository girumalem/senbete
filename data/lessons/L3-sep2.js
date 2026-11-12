/* Level III (Grades 4-6), September week 2: The Holy Bible (2 Peter 1:21) */
BKLesson({
 id:'L3-sep2', title:'The Holy Bible', am:'መጽሐፍ ቅዱስ', sticker:'bible',
 pages:[
  {game:'cover', bg:'church', title:'The Holy Bible', am:'መጽሐፍ ቅዱስ',
   props:[{art:'bible',x:640,y:400,s:1.2},{art:'priest',x:160,y:440,s:.6},{art:'candle',x:760,y:440,s:.6}],
   say:['cover','[[selam]]! This year, every story we learn comes from one holy book. Let\'s find out what is inside the Holy Bible. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, September week 2: <b>The Holy Bible</b>. Aim: learn the general contents of the Holy Bible.</p><p>Level III pages are reading pages. Selam reads each paragraph, and your child can tap any paragraph to hear it again.</p>'},

  {game:'read', chip:'Read', heading:'Why is it called holy?', pic:'bible',
   paras:[
    ['r1','The Bible is called holy because it was written by the inspiration of God. Holy men wrote it as the Holy Spirit moved them.'],
    ['r2','Everything we believe is based on the Holy Bible and on the holy Tradition of the Church. The stories we learn this year all come from it, or have their roots in it.'],
    ['r3','The Bible is not just one book. It is a collection of many holy books, such as Genesis, Isaiah, the Psalms, the Gospel of Matthew and the Book of Revelation.'],
   ]},

  {game:'read', chip:'Read', heading:'Two great parts', pic:'scroll',
   paras:[
    ['r4','The Holy Bible has two main parts: the Old Testament and the New Testament.'],
    ['r5','The Old Testament has the books written before the birth of Jesus Christ. In it we find the story of creation, the history of Israel and God\'s promise, the Ten Commandments, and prophecies about the coming of Christ.'],
    ['r6','The New Testament has the books written after the birth of Christ: the four Gospels about His life, the Acts of the Apostles, the letters (epistles) of the apostles, and the Book of Revelation.'],
   ]},

  {game:'match', chip:'Old or New?', heading:'Match each story to where it is found',
   intro:['match-intro','Where do we find it? Tap a story, then tap the part of the Bible.'],
   pairs:[['The story of creation','Old Testament (Genesis)',null,'sun'],['The Ten Commandments','Old Testament (Exodus)',null,'scroll'],['The life of Jesus','New Testament (the Gospels)',null,'jesus'],['The works of the apostles','New Testament (Acts)',null,'peter']],
   done:['match-done','You know your way around the Bible!']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'The Bible is one single book written by one person.',t:false,why:'It is a collection of many holy books, written by men inspired by the Holy Spirit.',pic:'bible'},
    {id:'t2',s:'The Old Testament was written before the birth of Christ.',t:true,why:'It also contains prophecies about His coming.',pic:'scroll'},
    {id:'t3',s:'There are four Gospels.',t:true,why:'Matthew, Mark, Luke and John.',pic:['text',{t:'4',size:64,c:'#24418F'}]},
    {id:'t4',s:'The Book of Acts is in the Old Testament.',t:false,why:'Acts is in the New Testament. It tells what the apostles did after the resurrection.',pic:'peter'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'The Bible was written by holy men moved by the Holy ___.',a:'Spirit',opts:['Church','Kings']},
    {id:'f2',s:'The story of creation is in the ___ Testament.',a:'Old',opts:['New','Last']},
    {id:'f3',s:'The letters written by the apostles are called ___.',a:'epistles',opts:['psalms','prophets']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'Prophecy never came by the will of man, but holy men of God spoke as they were moved by the Holy Spirit.', ref:'2 Peter 1:21',
   chunks:['Prophecy never came','by the will of man,','but holy men of God spoke','as they were moved','by the Holy Spirit.'],
   intro:['verse-intro','This month\'s memory verse is from Second Peter. Listen: Prophecy never came by the will of man, but holy men of God spoke as they were moved by the Holy Spirit. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'What are the two main parts of the Bible?',a:[['Old and New Testament','bible'],['Psalms and Proverbs','begena'],['Genesis and Exodus','scroll']],c:0},
    {id:'q2',q:'Where is the story of creation?',a:[['The Old Testament','sun'],['The Book of Acts','peter'],['Revelation','cloud']],c:0},
    {id:'q3',q:'What do the four Gospels tell about?',a:[['The life of Jesus Christ','jesus'],['The kings of Egypt','pharaoh'],['Noah\'s ark','ark']],c:0},
   ]},
 ]
});
