/* Level IV (Grade 7 and up), Lent week 1: The Great Lent (Matthew 4; Matthew 6:16-18; Mark 9:29; Isaiah 58; 1 Corinthians 7:5) */
BKLesson({
 id:'L4-len1', title:'The Great Lent', am:'ዐቢይ ጾም', sticker:'bread',
 pages:[
  {game:'cover', bg:'church', title:'The Great Lent', am:'ዐቢይ ጾም',
   props:[{art:'church',x:400,y:440,s:.8},{art:'injera',x:180,y:430,s:.6},{art:'candle',x:620,y:430,s:.6}],
   say:['cover','[[selam]]! [[abiy-tsom]], the Great Lent, has begun: fifty-five days of fasting before [[fasika]]. Why do we fast, and how do we fast well?'],
   parent:'<p>This lesson follows Level IV, Lent week 1: <b>The Great Lent</b>. Aim: learn about the importance and spirituality of fasting.</p><p>Discuss together the challenges of fasting, and how your family can help each other.</p>'},

  {game:'read', auto:false, chip:'Read', heading:'What is fasting?', pic:'injera',
   intro:['read-intro','Read about fasting. Tap any paragraph to hear it.'],
   paras:[
    ['r1','Fasting means going without food for a set time, and keeping away from meat and all dairy foods. The Great Lent is the fast that our Lord kept first, forty days and forty nights in the wilderness.'],
    ['r2','Our Church keeps seven fasts in the year: the Great Lent, the Fast of the Apostles, the Fast of the Assumption of the Virgin, the Fast of the Prophets before [[genna]], the Fast of [[nenewe]], the eves of [[genna]] and [[timket]], and every Wednesday and Friday.'],
    ['r3','Our Lord said of the devil: This kind cannot be driven out except by prayer and fasting. The apostles fasted, and the Church has kept these fasts since the beginning.'],
   ]},

  {game:'match', chip:'They fasted',
   heading:'Match each person to what happened when they fasted',
   intro:['m0','Many people of God fasted and did great things. Match each one to what happened.'],
   pairs:[
    ['Moses','Fasted forty days and received the Ten Commandments'],
    ['Elijah','Fasted forty days on his way to the mountain of God'],
    ['Daniel','Was fasting when the Angel Gabriel appeared to him'],
    ['The people of Nineveh','Fasted three days, and God spared their city'],
    ['Esther','Fasted three days before going to the king to save her people'],
   ],
   done:['m1','Fasting with prayer has saved whole nations.']},

  {game:'sort', chip:'A true fast',
   bins:[{label:'A true fast',art:'heart'},{label:'Not a true fast',art:'darkCloud'}],
   intro:['s0','A saint said: If we fast from food but stay bound to sin, the fast does not help us. Sort these.'],
   items:[
    {t:'No meat or dairy, and extra time in prayer',b:0},
    {t:'Fasting from food, but fighting with my brother all day',b:1,why:['s1','When the body fasts, the heart must fast from anger too. Try again.']},
    {t:'Giving the money we saved on food to the poor',b:0},
    {t:'Telling everyone how hard I am fasting',b:1,why:['s2','Christ said: When you fast, do not show it off. Your Father sees in secret.']},
    {t:'Reading the Gospel during the fast',b:0},
    {t:'Fasting, but saying unkind things about others',b:1},
   ],
   done:['s3','A true fast goes together with prayer, with thinking about Christ\'s suffering, and with love for the poor.']},

  {game:'hold', bg:'desert', chip:'The stronghold',
   props:[{id:'fort',art:'jericho',x:400,y:420,s:.8},{id:'kid',art:['figure',{kind:'teen',robe:'#FFFFFF',sleeve:'#FFFFFF',arms:'pray'}],x:400,y:330,s:.45},{id:'d1',art:'darkCloud',x:120,y:200,s:.7},{id:'d2',art:'darkCloud',x:680,y:180,s:.7},{id:'sun',art:'sun',x:400,y:90,s:.5,hidden:true}],
   target:'kid', ms:6000, label:'Pray inside the stronghold!',
   intro:['h1','The saints said: Fasting is a stronghold, and prayer is the weapon we fight with inside it. Press and hold to pray, and drive the temptations away.'],
   at:[{p:.5,move:{d1:[-200,200,.7]}},{p:.9,move:{d2:[1000,180,.7]}}],
   after:{show:['sun']},
   done:['h2','Fasting and prayer together give us self-control, and make us grow in spirit.']},

  {game:'collect', bg:'field', chip:'Share your bread',
   props:[{id:'p1',art:'blindMan',x:560,y:440,s:.5},{id:'p2',art:['figure',{kind:'child',robe:'#8C8478'}],x:650,y:440,s:.6},{id:'p3',art:'lameMan',x:740,y:440,s:.45},{id:'kid',art:['figure',{kind:'teen',robe:'#24418F',sleeve:'#24418F'}],x:110,y:440,s:.6}],
   items:[[220,430],[280,440],[340,430],[250,390],[320,395]].map(([x,y],i)=>({art:i%2?'bread':'injera',x,y,s:.4})),
   slots:[[520,380,.35],[590,390,.35],[650,370,.35],[700,390,.35],[760,380,.35]],
   intro:['a1','God said through Isaiah: Is not this the fast I have chosen: to share your bread with the hungry? Tap or drag the food to share it.'],
   done:['a2','Our Lent hymn says: Blessed are those who are kind to the poor.']},

  {game:'verse', chip:'Memory verse',
   verse:'Give yourselves to fasting and prayer.', ref:'1 Corinthians 7:5',
   intro:['verse-intro','Our memory verse: Give yourselves to fasting and prayer. Build it in order.'],
   done:['verse-done','Fasting and prayer always go together.']},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','What is hardest for you about fasting? What could help?','Fasting together as a family, and remembering why we fast.'],
    ['k2','Besides food, what else could you fast from this Lent?','Screens, complaining, unkind words.'],
    ['k3','Who are the prophets who fasted forty days and forty nights?','Moses and Elijah, and our Lord Himself.'],
   ]},
 ]
});
