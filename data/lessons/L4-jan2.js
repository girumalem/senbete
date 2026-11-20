/* Level IV (Grade 7 and up), January week 2: The Three Wise Men and Their Gifts (Matthew 2:1-12; Matthew 25:34-40) */
BKLesson({
 id:'L4-jan2', title:'The Wise Men\'s Gifts', am:'የሰብአ ሰገል ስጦታ', sticker:'gift',
 pages:[
  {game:'cover', bg:'night', title:'The Wise Men\'s Gifts', am:'ሰብአ ሰገል',
   props:[{art:'wiseKing1',x:200,y:440,s:.55},{art:'wiseKing2',x:330,y:440,s:.55},{art:'wiseKing3',x:460,y:440,s:.55},{art:'bigStar',x:640,y:110,s:1},{art:'camel',x:660,y:440,s:.6}],
   say:['cover','[[selam]]! Three wise men followed a star from the East and brought gifts to the newborn King. Why those three gifts? And what gift can you bring Him today?'],
   parent:'<p>This lesson follows Level IV, January week 2: <b>The Three Wise Men and Their Gifts</b> (Matthew 2:1-12). Aim: learn about the spiritual meaning of the gifts of the wise men.</p><p>Myrrh comes from a plant that grows in Ethiopia.</p>'},

  {game:'story', bg:'egypt', chip:'Where is the King?',
   props:[{id:'w1',art:'wiseKing1',x:150,y:440,s:.5},{id:'w2',art:'wiseKing2',x:250,y:440,s:.5},{id:'w3',art:'wiseKing3',x:350,y:440,s:.5},{id:'herod',art:['figure',{robe:'#6A3A8A',crown:true,beard:'dark'}],x:620,y:440,s:.6},{id:'scroll',art:'scroll',x:500,y:420,s:.6,hidden:true}],
   beats:[
    {say:['h1','The wise men had learned from their forefathers that a star would appear when the Savior came. They followed it to Jerusalem and asked: Where is He who is born King of the Jews? We have come to worship Him.']},
    {wiggle:['herod'],say:['h2','King [[herodis]] was troubled. He thought an earthly king had come to take his throne. Tap him.'],tap:'herod'},
    {show:['scroll'],say:['h3','The priests read the prophecy: in Bethlehem. [[herodis]] said: Find Him, and tell me, so that I may worship Him too. But he secretly planned to kill the Child.']},
   ]},

  {game:'drag', bg:'night', chip:'Three gifts',
   props:[{id:'mary',art:['figure',{robe:'#24418F',mantle:'#24418F',stars:true,longHair:true,holdBaby:true,arms:'hold'}],x:620,y:440,s:.6},{id:'star',art:'bigStar',x:620,y:90,s:.9}],
   items:[
    {art:'gift',x:120,y:420,s:.5,say:['d1','Gold, the gift for a king. Christ is King of heaven and earth.']},
    {art:'censer',x:240,y:420,s:.6,say:['d2','Frankincense, used in the worship of the angels. Christ is truly God the Son, worshipped by them.']},
    {art:'jar',x:360,y:420,s:.45,say:['d3','Myrrh, very bitter, from a plant that grows in Ethiopia. Christ would taste bitterness, and die a bitter death for us.']},
   ],
   zone:{x:470,y:240,w:300,h:210},
   intro:['d0','The star stopped over the house. The wise men opened their treasures. Drag each gift to the Child.'],
   done:['d4','Each gift told who He is: King, God, and Savior who would suffer for us.']},

  {game:'choose', bg:'night', chip:'Which way home?',
   props:[{id:'w1',art:'wiseKing1',x:340,y:440,s:.5},{id:'w2',art:'wiseKing2',x:440,y:440,s:.5},{id:'w3',art:'wiseKing3',x:540,y:440,s:.5},{id:'ang',art:'angel',x:200,y:240,s:.5}],
   prompt:['c0','An angel warned the wise men in a dream. Which way should they go home?'],
   options:[
    {label:'Back to Herod in Jerusalem, as he asked',art:'king',good:false,say:['c1','No! [[herodis]] wanted to kill the Child. Try again.']},
    {label:'Home by another way',art:'camel',then:{move:{w1:[900,440],w2:[1000,440],w3:[1100,440]}},
     say:['c2','They obeyed the angel and went home another way. When [[herodis]] found out, he was furious, and the Holy Family fled to Egypt.']},
   ]},

  {game:'match', chip:'Our gifts to Christ',
   heading:'Match each wise men\'s gift to the gift Christ wants from us',
   intro:['m0','We cannot bring gold and myrrh to the stable. But we can bring Christ gifts today. Match each one.'],
   pairs:[
    ['Pure gold','A pure heart'],
    ['Sweet frankincense','Prayers of thanks, rising to God'],
    ['Bitter myrrh','Staying faithful in hard and bitter times'],
    ['Gifts to the King','Gifts to the poor, for what we do for them we do for Him'],
   ],
   done:['m1','Christ said: Inasmuch as you did it to one of the least of these My brethren, you did it to Me.']},

  {game:'verse', chip:'Memory verse',
   verse:'When they had opened their treasures, they presented to Him gifts: gold, frankincense, and myrrh.', ref:'Matthew 2:11',
   chunks:['When they had opened','their treasures,','they presented to Him gifts:','gold, frankincense,','and myrrh.'],
   intro:['verse-intro','Our memory verse: When they had opened their treasures, they presented to Him gifts: gold, frankincense, and myrrh. Build it in order.'],
   done:['verse-done','What treasure will you open for Him?']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf0','True or false?'],
   items:[
    {id:'t1',s:'The wise men came from the East, following a star.',t:true,why:'They came to worship the newborn King.'},
    {id:'t2',s:'Herod really wanted to worship the Child.',t:false,why:'He wanted to kill Him, and later killed the children of Bethlehem.'},
    {id:'t3',s:'Myrrh is sweet, like honey.',t:false,why:'Myrrh is very bitter, a sign of Christ\'s suffering.'},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','At Christmas we give gifts to each other. How can we remember to give a gift to Christ too?'],
    ['k2','Myrrh reminds us of bitter times. What helps you stay faithful when life feels hard?','Christ promised rest in His kingdom to those who persevere.'],
    ['k3','Who could you give a gift to this month, who cannot give anything back?'],
   ]},
 ]
});
