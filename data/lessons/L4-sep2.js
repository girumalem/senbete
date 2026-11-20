/* Level IV (Grade 7 and up), September week 2: The Holy Bible (2 Peter 1:21)
   Story-games style: sort the books into the two Testaments, match each book to what it teaches, then read, verse, true/false, talk. */
BKLesson({
 id:'L4-sep2', title:'The Holy Bible', am:'መጽሐፍ ቅዱስ', sticker:'bible',
 pages:[
  {game:'cover', bg:'church', title:'The Holy Bible', am:'መጽሐፍ ቅዱስ',
   props:[{art:'bible',x:400,y:400,s:1.3},{art:'scroll',x:180,y:420,s:.8},{art:'glory',x:400,y:200,s:.9},{art:'procCross',x:640,y:430,s:.7}],
   say:['cover','[[selam]]! This year we start with the book that tells us about God: the Holy Bible. Let\'s find out what is inside it, and who wrote it.'],
   parent:'<p>This lesson follows Level IV, September week 2: <b>The Holy Bible</b>. Aim: learn the general contents of the Holy Bible: the Old and New Testaments and the kinds of books in each.</p><p>Bring a Bible to the table and look at its table of contents together.</p>'},

  {game:'read', auto:false, chip:'Read', heading:'Why it is called Holy', pic:'bible',
   intro:['read-intro','Read about the Bible. Tap any paragraph if you would like me to read it to you.'],
   paras:[
    ['r1','The Bible is written by the inspiration of God. It is called Holy because it comes from God, and because it tells us about God, His creation, and His love for us.'],
    ['r2','The Bible is a collection of many books, written by different holy men at different times. Saint Peter said: Prophecy never came by the will of man, but holy men of God spoke as they were moved by the Holy Spirit.'],
    ['r3','Reading it, we come to know God. It gives us answers in our problems, comfort when we are sad, and hope when we feel hopeless. Our faith and our worship in the Church are built on the Bible.'],
   ]},

  {game:'sort', chip:'Two Testaments',
   bins:[{label:'Old Testament',art:'scroll'},{label:'New Testament',art:'cross'}],
   intro:['s0','The Bible has two parts. The Old Testament was written before the birth of Christ, and the New Testament after. Put each book in the right part.'],
   items:[
    {t:'Genesis: creation and the fall of man',b:0},
    {t:'The four Gospels: the life of Jesus Christ',b:1},
    {t:'Exodus: Israel leaves Egypt',b:0},
    {t:'Acts: the work of the apostles',b:1,why:['s1','Acts tells what the apostles did after Christ ascended into heaven. That is the New Testament.']},
    {t:'Psalms: the prayers and songs of David',b:0,why:['s2','King David lived about a thousand years before Christ. The Psalms are in the Old Testament.']},
    {t:'Isaiah: prophecy about the coming Savior',b:0},
    {t:'The Epistles: letters of the apostles',b:1},
    {t:'Revelation: visions of what is to come',b:1},
   ],
   done:['s3','Well sorted! In our Church we hear both: readings from the Old Testament, from the Epistles and Acts, and from the Gospel at every [[kidase]].']},

  {game:'match', chip:'What each book teaches',
   heading:'Match each kind of book to what it teaches',
   intro:['m0','Through all its books, the Bible teaches us many things. Match each kind of book to what it tells us.'],
   pairs:[
    ['Genesis','God\'s creation, the fall, and His first promise'],
    ['History books','The story of the people of Israel'],
    ['Prophets','God\'s messages about the coming Savior'],
    ['Gospels','Christ from His birth to His ascension'],
    ['Epistles','How Christians should live'],
   ],
   done:['m1','The whole Bible teaches us where we came from, where we are going, and how to inherit the kingdom of God.']},

  {game:'choose', bg:'day', chip:'A hard day',
   props:[{id:'kid',art:['figure',{kind:'teen',robe:'#24418F',sleeve:'#24418F'}],x:220,y:440,s:.75},{id:'cloud',art:'darkCloud',x:420,y:300,s:.7},{id:'book',art:'bible',x:560,y:330,s:.9,hidden:true},{id:'sun',art:'sun',x:620,y:120,s:.5,hidden:true}],
   prompt:['c0','[[dawit]] had a hard week at school. He feels sad and worried. What could help him most?'],
   options:[
    {label:'Keep it all inside and stay alone',art:'darkCloud',good:false,say:['c1','Being alone with worry only makes it heavier. Try another answer.']},
    {label:'Pray, and read God\'s word',art:'bible',then:{show:['book','sun'],hide:['cloud'],wiggle:['kid']},
     say:['c2','Yes! The Bible gives comfort when we are sad and hope when we feel hopeless. The Psalms were written for days like this.']},
   ]},

  {game:'verse', chip:'Memory verse',
   verse:'Prophecy never came by the will of man, but holy men of God spoke as they were moved by the Holy Spirit.', ref:'2 Peter 1:21',
   chunks:['Prophecy never came','by the will of man,','but holy men of God','spoke as they were moved','by the Holy Spirit.'],
   intro:['verse-intro','Our memory verse is from Saint Peter: Prophecy never came by the will of man, but holy men of God spoke as they were moved by the Holy Spirit. Build it in order.'],
   done:['verse-done','Not only is the Bible holy. The men who wrote it were holy too.']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf0','True or false? Tap your answer.'],
   items:[
    {id:'t1',s:'The Bible was written by one man in one year.',t:false,why:'It was written by many holy men, at different times, all moved by the Holy Spirit.'},
    {id:'t2',s:'The Old Testament was written before the birth of Christ.',t:true,why:'The New Testament was written after His birth.'},
    {id:'t3',s:'There are four Gospels.',t:true,why:'Matthew, Mark, Luke and John.'},
    {id:'t4',s:'The Book of Acts is in the Old Testament.',t:false,why:'Acts tells about the apostles after the ascension, so it is in the New Testament.'},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','The Bible gives comfort, hope and answers. When could you open it this week?','Try reading one Psalm before you sleep.'],
    ['k2','Why do you think God chose many people, over many years, to write the Bible?','God speaks to every generation, and the whole Bible tells one story of His love.'],
    ['k3','Which book of the Bible would you like to read first, and why?','The Gospel of Mark is short, and a good place to start.'],
   ]},
 ]
});
