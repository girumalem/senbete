/* Level III (Grades 4-6), July week 1: Philip Baptizes the Ethiopian (Acts 8:26-40; Acts 8:32) */
BKLesson({
 id:'L3-jul1', title:'Philip and the Ethiopian', am:'ፊልጶስና ኢትዮጵያዊው', sticker:'chariot',
 pages:[
  {game:'cover', bg:'desert', title:'Philip and the Ethiopian', am:'ፊልጶስና ኢትዮጵያዊው',
   props:[{art:'chariot',x:640,y:440,s:.8},{art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',mantle:'#B3322A'}],x:660,y:380,s:.4},{art:'disciple',x:160,y:440,s:.55}],
   say:['cover','[[selam]]! This is a special story for us: how the Gospel first came to Ethiopia! Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, July week 1: <b>Philip Baptizes the Ethiopian</b> (Acts 8:26-40). Aim: learn how the Gospel reached Ethiopia, and why we need guides to understand the Scriptures. The Ethiopian Church remembers the treasurer as Bacos (Jan Darebaw).</p><p>Talk about it: Who helps you understand the Bible?</p>'},

  {game:'read', chip:'Read', heading:'A reader in a chariot', pic:'scroll',
   paras:[
    ['r1','Even before Christ, Ethiopians traveled to Jerusalem to worship God.'],
    ['r2','About a year after the Ascension, the treasurer of the Ethiopian queen was riding home from Jerusalem in his chariot, reading the Book of Isaiah.'],
    ['r3','An angel told the deacon Philip: Go south, on the desert road. The Holy Spirit said: Go near and join this chariot.'],
   ]},

  {game:'story', bg:'desert', chip:'How can I understand?',
   props:[{id:'ch',art:'chariot',x:520,y:440,s:.85},{id:'eth',art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',mantle:'#B3322A'}],x:540,y:380,s:.42},{id:'scr',art:'scroll',x:600,y:330,s:.35},{id:'ph',art:'disciple',x:180,y:440,s:.55}],
   beats:[
    {move:{ph:[380,440,.55]},sfx:'whoosh',say:['s1','Philip ran to the chariot and heard the man reading: He was led as a sheep to the slaughter, and as a lamb is silent before its shearer, so He opened not His mouth.']},
    {wiggle:['ph'],say:['s2','Philip asked: Do you understand what you are reading?']},
    {wiggle:['eth'],say:['s3','The Ethiopian said: How can I, unless someone guides me? Please come up and sit with me. Tap the scroll.'],tap:'scr'},
    {move:{ph:[480,380,.42]},sfx:'glory',say:['s4','Philip began with that very Scripture and told him about Jesus: His birth from the Virgin, His teaching, His cross, His resurrection and ascension.']},
   ]},

  {game:'story', bg:'river', chip:'Here is water!',
   props:[{id:'eth',art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',mantle:'#B3322A'}],x:300,y:440,s:.6},{id:'ph',art:'disciple',x:480,y:440,s:.58},{id:'dove',art:'dove',x:400,y:150,s:.45,hidden:true}],
   beats:[
    {wiggle:['eth'],say:['w1','They came to some water. The Ethiopian said: See, here is water. What stops me from being baptized?']},
    {wiggle:['ph'],say:['w2','Philip said: If you believe with all your heart, you may. He answered: I believe that Jesus Christ is the Son of God. Tap him.'],tap:'eth'},
    {show:['dove'],sfx:'glory',say:['w3','They went down into the water, and Philip baptized him.']},
    {hide:['ph'],fx:'confetti',say:['w4','When they came up, the Spirit took Philip away. The Ethiopian went home to his country rejoicing!']},
   ]},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'The Ethiopian was reading the Book of Isaiah.',t:true,why:'The prophecy about the Lamb who was silent.',pic:'scroll'},
    {id:'t2',s:'He understood everything without help.',t:false,why:'He said: How can I, unless someone guides me?',pic:'bible'},
    {id:'t3',s:'He went home to Ethiopia rejoicing.',t:true,why:'And the Gospel came with him.',pic:'chariot'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'The Ethiopian was the treasurer of the ___.',a:'queen',opts:['farmer','priest']},
    {id:'f2',s:'An ___ told Philip to go south.',a:'angel',opts:['eagle','soldier']},
    {id:'f3',s:'The Ethiopian believed that Jesus Christ is the ___ of God.',a:'Son',opts:['servant','prophet']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'He was led as a sheep to the slaughter; and as a lamb before its shearer is silent, so He opened not His mouth.', ref:'Acts 8:32',
   chunks:['He was led as a sheep','to the slaughter;','and as a lamb before its shearer','is silent,','so He opened not His mouth.'],
   intro:['verse-intro','This month\'s memory verse is the Scripture the Ethiopian was reading. Listen: He was led as a sheep to the slaughter; and as a lamb before its shearer is silent, so He opened not His mouth. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Where was the Ethiopian going?',a:[['Home to Ethiopia','chariot'],['To Rome','city'],['To Egypt','pyramid']],c:0},
    {id:'q2',q:'Who explained the Scripture to him?',a:[['Philip','disciple'],['Pharaoh','pharaoh'],['A soldier','soldier']],c:0},
    {id:'q3',q:'What did he ask when they saw water?',a:[['What stops me from being baptized?','raindrop'],['Can we swim?','fish'],['Is it deep?','waterWall']],c:0},
   ]},
 ]
});
