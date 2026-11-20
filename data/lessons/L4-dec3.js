/* Level IV (Grade 7 and up), December week 3: Intercession (Genesis 20; Luke 23:42-43; Psalm 89:3; Matthew 10:42; Revelation 5:8, 8:3-4; Hebrews 11:16) */
BKLesson({
 id:'L4-dec3', title:'Intercession', am:'ምልጃ', sticker:'candle',
 pages:[
  {game:'cover', bg:'church', title:'Intercession', am:'ምልጃ',
   props:[{art:'icon',x:250,y:420,s:1.1},{art:'censer',x:420,y:380,s:1.2},{art:['icon',{who:{robe:'#B3322A',beard:'white',halo:true,arms:'bless'},bg:'#2F7A4E'}],x:580,y:420,s:1.1}],
   say:['cover','[[selam]]! When you ask a friend to pray for you, your prayer becomes stronger. The angels and saints pray for us too. That is called intercession.'],
   parent:'<p>This lesson follows Level IV, December week 3: <b>Intercession</b>. Aim: learn about the intercession of saints.</p><p>Talk about it: Do you have a favorite saint or angel? Why?</p>'},

  {game:'story', bg:'egypt', chip:'Abraham prays for a king',
   props:[{id:'king',art:'sleeper',x:520,y:430,s:.9},{id:'ang',art:'angel',x:640,y:300,s:.45,hidden:true},{id:'kingUp',art:'king',x:540,y:440,s:.6,hidden:true},{id:'ab',art:['figure',{robe:'#8A5A30',beard:'white',arms:'pray'}],x:200,y:440,s:.6}],
   beats:[
    {say:['a1','Once Abraham and Sarah stayed in a land called Gerar. King Abimelech, not knowing Sarah was Abraham\'s wife, took her to his palace.']},
    {show:['ang'],sfx:'glory',say:['a2','God warned the king in a dream: Return the man\'s wife, for he is a prophet, and he will pray for you, and you shall live. Tap the sleeping king.'],tap:'king'},
    {hide:['king','ang'],show:['kingUp'],say:['a3','The king returned Sarah. Now tap Abraham to pray.'],tap:'ab'},
    {wiggle:['kingUp'],sfx:'glory',say:['a4','Abraham prayed, and God healed the king and his house. God listened to His friend\'s prayer for someone else. That is intercession.']},
   ]},

  {game:'choose', bg:'heaven', chip:'Alive in paradise',
   props:[{id:'glow',art:'glory',x:400,y:180,s:1},{id:'saint',art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',beard:'white',halo:true}],x:250,y:430,s:.55},{id:'saint2',art:['figure',{robe:'#B3322A',beard:'dark',halo:true}],x:560,y:430,s:.55}],
   prompt:['p0','When a holy person dies, do they stop existing?'],
   options:[
    {label:'Yes, they are gone forever.',art:'darkCloud',good:false,say:['p1','No! When we die, the soul leaves the body. The souls of the holy go to paradise. Try again.']},
    {label:'No. Their souls live on in paradise, close to God.',art:'glory',then:{wiggle:['saint','saint2']},
     say:['p2','Yes. Christ told the robber on the cross: Today you will be with Me in paradise. The saints are alive with God, even closer to Him than on earth, and they pray for us.']},
   ]},

  {game:'match', chip:'Covenants of mercy',
   heading:'Match each saint to the covenant God made with them',
   intro:['m0','God said: I have made a covenant with My chosen. Match each saint to God\'s promise.'],
   pairs:[
    ['Noah','Never again to destroy the earth by flood'],
    ['Abraham','The land of Canaan for his descendants'],
    ['David','His throne kept for his son, even when Solomon sinned'],
    ['The saints','Mercy for those who pray, and help the poor, in their name'],
   ],
   done:['m1','We benefit from those covenants when we ask the saints to pray for us, and also pray to God ourselves.']},

  {game:'collect', bg:'field', chip:'A cup of cold water',
   props:[{id:'p1',art:'lameMan',x:560,y:440,s:.55},{id:'p2',art:'blindMan',x:700,y:440,s:.55},{id:'kid',art:['figure',{kind:'teen',robe:'#24418F',sleeve:'#24418F'}],x:120,y:440,s:.6}],
   items:[[240,430],[290,440],[340,430],[260,390],[320,395]].map(([x,y])=>({art:'cup',x,y,s:.45})),
   slots:[[520,380,.4],[560,390,.4],[640,390,.4],[680,380,.4],[600,370,.4]],
   intro:['w1','Christ said: Whoever gives one of these little ones a cup of cold water in the name of a disciple shall not lose his reward. Give each cup to those in need.'],
   done:['w2','On the feast days of saints, Ethiopian families share bread and drink with the poor in the saint\'s name. That is this same promise.']},

  {game:'drag', bg:'heaven', chip:'Prayers rise',
   props:[{id:'glow',art:'glory',x:600,y:200,s:1},{id:'sm',art:'smoke',x:600,y:330,s:.6,hidden:true},{id:'elders',art:'crowd',x:200,y:440,s:.6}],
   items:[{art:'censer',x:220,y:330,s:.8,to:[600,380,.9],then:{show:['sm']}}],
   zone:{x:470,y:180,w:260,h:250},
   intro:['r1','Saint John saw the elders in heaven with golden bowls full of incense, which are the prayers of the saints. Drag the incense up before God\'s throne.'],
   done:['r2','Angels and saints present our prayers to God. Our prayers become stronger when they pray with us.']},

  {game:'verse', chip:'Memory verse',
   verse:'God is not ashamed to be called their God, for He has prepared a city for them.', ref:'Hebrews 11:16',
   chunks:['God is not ashamed','to be called their God,','for He has prepared','a city for them.'],
   intro:['verse-intro','Our memory verse is about the saints: God is not ashamed to be called their God, for He has prepared a city for them. Build it in order.'],
   done:['verse-done','God is proud of His saints.']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf0','True or false?'],
   items:[
    {id:'t1',s:'Intercession is praying to God on behalf of someone else.',t:true,why:'Abraham interceded for King Abimelech.'},
    {id:'t2',s:'Only people still living on earth can intercede for us.',t:false,why:'Angels and saints in paradise intercede for us too.'},
    {id:'t3',s:'If we ask the saints to pray for us, we do not need to pray ourselves.',t:false,why:'We ask for their prayers in addition to praying to God ourselves.'},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Who do you ask to pray for you? Who do you pray for?'],
    ['k2','Do you have a favorite angel or saint? What do you know about their life?'],
    ['k3','What do we need to do to receive the blessing of the saints\' intercession?','Pray, live by God\'s word, and help the needy in their name.'],
   ]},
 ]
});
