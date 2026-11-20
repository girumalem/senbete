/* Level IV (Grade 7 and up), Lent week 3: The Purpose of Coming to Church (Matthew 21:12-13; Mark 11; John 2; 2 Chronicles 7:15-16; Matthew 22:1-14) */
BKLesson({
 id:'L4-len3', title:'Why We Come to Church', am:'ቤተ ጸሎት', sticker:'church',
 pages:[
  {game:'cover', bg:'church', title:'Why We Come to Church', am:'ቤቴ የጸሎት ቤት ትባላለች',
   props:[{art:'church',x:400,y:440,s:.85},{art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',netela:'#E2A62B',arms:'pray'}],x:180,y:440,s:.55},{art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',band:'#2F7A4E',arms:'pray'}],x:620,y:440,s:.55}],
   say:['cover','[[selam]]! Why do you come to church? To see friends? To hear the hymns? Today we learn what the church is for, and how to stand before God.'],
   parent:'<p>This lesson follows Level IV, Lent week 3: <b>The Purpose of Coming to Church</b> (Matthew 21; Mark 11; John 2). Aim: learn that the church is a house of prayer, and how we should present ourselves before God.</p><p>The third Sunday of the Great Lent is called Mekurabia, remembering this cleansing of the Temple.</p>'},

  {game:'story', bg:'egypt', chip:'A house of prayer',
   props:[{id:'temple',art:'temple',x:420,y:420,s:.8},{id:'tab',art:'table',x:300,y:440,s:.7},{id:'over',art:'tableOver',x:300,y:440,s:.7,hidden:true},{id:'sheep',art:'sheep',x:520,y:440,s:.4},{id:'dove',art:'dove',x:600,y:360,s:.4},{id:'jesus',art:'jesus',x:130,y:440,s:.6}],
   beats:[
    {say:['ct1','When Christ came to the Temple in Jerusalem, He found people selling oxen, sheep and doves, and changing money inside. Tap the money table.'],tap:'tab'},
    {hide:['tab'],show:['over'],move:{sheep:[900,440],dove:[900,200]},sfx:'whoosh',say:['ct2','He made a whip of cords and drove them all out, and turned over the tables.']},
    {wiggle:['jesus'],say:['ct3','He said: It is written, My house shall be called a house of prayer, but you have made it a den of thieves.']},
    {say:['ct4','God had told King Solomon about the Temple: My eyes and My heart will be there always. A church is a holy place, set apart for prayer and worship.']},
   ]},

  {game:'sort', chip:'In church',
   bins:[{label:'A house of prayer',art:'church'},{label:'Not why we come',art:'darkCloud'}],
   intro:['s0','If Christ came to our church today, what would He find? Sort these.'],
   items:[
    {t:'Praying and singing with the [[kidase]]',b:0},
    {t:'Chatting with friends outside during the liturgy',b:1},
    {t:'Listening carefully to the Gospel',b:0},
    {t:'Playing games on a phone',b:1},
    {t:'Bowing before the icons and the cross',b:0},
    {t:'Coming only for the food after church',b:1},
   ],
   done:['s1','We come to church to pray and to hear the word of God.']},

  {game:'drag', bg:'day', chip:'Getting ready',
   props:[{id:'kid',art:['figure',{kind:'teen',robe:'#24418F',sleeve:'#24418F'}],x:620,y:440,s:.65},{id:'ready',art:['figure',{kind:'teen',robe:'#FFFFFF',sleeve:'#FFFFFF',netela:'#E2A62B'}],x:620,y:440,s:.65,hidden:true},{id:'church',art:'church',x:200,y:440,s:.5}],
   items:[
    {art:'raindrop',x:300,y:420,s:.6,say:['d1','Be clean: wash before you come.']},
    {art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',kind:'child'}],x:380,y:430,s:.5,say:['d2','Wear clean clothes. If you can, keep special clothes for church, and a white [[netela]].']},
    {art:'bible',x:460,y:410,s:.5,say:['d3','Prepare your heart to pray and to hear God\'s word.']},
   ],
   zone:{x:530,y:200,w:200,h:250},
   after:{hide:['kid'],show:['ready']},
   intro:['d0','Christ told of a wedding guest thrown out for not wearing wedding clothes. How do we get ready to stand before God? Drag each one to get ready.'],
   done:['d4','Ready! And at the door, we take off our shoes, as Moses did on holy ground.']},

  {game:'story', bg:'church', chip:'Like Noah\'s ark',
   props:[{id:'ark',art:'ark',x:400,y:400,s:.55},{id:'men',art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',band:'#2F7A4E'}],x:150,y:440,s:.5},{id:'women',art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',netela:'#E2A62B'}],x:650,y:440,s:.5},{id:'altar',art:'procCross',x:400,y:430,s:.45,hidden:true}],
   beats:[
    {say:['n1','Inside our church, men stand on one side and women on the other. Why? Noah set the males on one side of the ark and the females on the other, with an altar in the middle. Tap the ark.'],tap:'ark'},
    {hide:['ark'],show:['altar'],say:['n2','The ark is a sign of the Church. Everyone inside the ark was saved from the flood.']},
    {wiggle:['men','women'],say:['n3','In the same way, the Church, bought by Christ\'s precious blood, carries us to salvation.']},
   ]},

  {game:'verse', chip:'Memory verse',
   verse:'My house shall be called a house of prayer.', ref:'Matthew 21:13',
   intro:['verse-intro','Our memory verse: My house shall be called a house of prayer. Build it in order.'],
   done:['verse-done','Every time you walk into church, remember this verse.']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf0','True or false?'],
   items:[
    {id:'t1',s:'Christ drove the sellers and money changers out of the Temple.',t:true,why:'Because they made God\'s house a market.'},
    {id:'t2',s:'We keep our shoes on inside the holy part of the church.',t:false,why:'We take them off, because it is holy ground.'},
    {id:'t3',s:'The story of the cleansing of the Temple is found in the Gospels.',t:true,why:'In Matthew, Mark and John.'},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','If Christ came to our church this Sunday, what would He say to you?'],
    ['k2','What is one thing you can do to pray better in church?','Arrive early, stand near the front, follow the prayers.'],
    ['k3','How do you get ready on Saturday night for church on Sunday?'],
   ]},
 ]
});
