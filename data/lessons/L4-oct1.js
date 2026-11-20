/* Level IV (Grade 7 and up), October week 1: The Holy Cross (finding of the True Cross; its coming to Ethiopia; 1 Corinthians 1:18) */
BKLesson({
 id:'L4-oct1', title:'The Holy Cross', am:'መስቀል', sticker:'cross',
 pages:[
  {game:'cover', bg:'sunrise', title:'The Holy Cross', am:'መስቀል',
   props:[{art:'demera',x:400,y:440,s:.9},{art:'procCross',x:170,y:430,s:.7},{art:'adeyAbeba',x:640,y:430,s:.7},{art:'adeyAbeba',x:720,y:440,s:.5}],
   say:['cover','[[selam]]! The Cross of our Lord was lost for hundreds of years. Who found it, and how did part of it come to Ethiopia? Let\'s find out.'],
   parent:'<p>This lesson follows Level IV, October week 1: <b>The Holy Cross</b> (from Abune Yesehaq\'s teaching). Aim: learn the story and the message of the Cross.</p><p>Talk about it: Have you been to a Demera on the eve of Meskel? What happened?</p>'},

  {game:'story', bg:'river', chip:'A cross in the sky',
   props:[{id:'king',art:'king',x:200,y:440,s:.6},{id:'s1',art:'soldier',x:320,y:440,s:.45},{id:'s2',art:'soldier',x:400,y:440,s:.45},
    {id:'glow',art:'glory',x:600,y:170,s:.9,hidden:true},{id:'cr',art:['cross',{c:'#E2A62B'}],x:600,y:170,s:1.3,hidden:true},{id:'fire',art:'fire',x:620,y:440,s:.6,hidden:true}],
   beats:[
    {say:['v1','About three hundred years after Christ, Christians were cruelly persecuted. King Constantine marched to Rome to fight, carrying idols he hoped would help him win.']},
    {show:['glow','cr'],fx:'flash',sfx:'glory',say:['v2','On the way, he saw a vision: a shining cross in the sky, and a voice said: With this cross you will defeat your enemy. Tap the cross.'],tap:'cr'},
    {show:['fire'],say:['v3','Constantine burned all his idols, and put the sign of the cross on his soldiers\' uniforms. He won, and he gave freedom to all Christians.']},
    {wiggle:['king'],say:['v4','He ordered every holy object taken from Jerusalem to be returned. All came back, except the Cross of Christ. No one knew where it was.']},
   ]},

  {game:'collect', bg:'desert', chip:'Gather the wood',
   props:[{id:'queen',art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',crown:true,netela:'#E2A62B'}],x:110,y:440,s:.55},{id:'elder',art:['figure',{robe:'#8C8478',beard:'white',staff:true}],x:200,y:440,s:.5},{id:'dem',art:'demera',x:560,y:440,s:.75,hidden:true}],
   items:[[290,420],[340,440],[390,415],[440,438],[690,420],[740,440],[650,440],[300,380]].map(([x,y])=>({art:'sticks',x,y,s:.6})),
   pile:{x:560,y:430,dx:50,dy:24,base:4,s:.6},
   after:{show:['dem']},
   intro:['w1','Queen [[eleni]], Constantine\'s mother, longed to find the Cross. An old man named Kyriakos told her the area where it was hidden. In a vision she was told to gather wood. Tap or drag the wood to build a great pile.'],
   done:['w2','This is the first [[demera]]! Every year, on the eve of [[meskel]], we build one too, to remember Queen [[eleni]].']},

  {game:'story', bg:'desert', chip:'The smoke points',
   props:[{id:'dem',art:'demera',x:220,y:440,s:.75},{id:'fire',art:'fire',x:220,y:440,s:.9,hidden:true},{id:'smoke',art:'smoke',x:300,y:260,s:.9,hidden:true},{id:'hill',art:'rubbleHill',x:600,y:440,s:.8},{id:'queen',art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',crown:true,netela:'#E2A62B'}],x:400,y:440,s:.5}],
   beats:[
    {say:['sm1','After special prayers, the wood was lit together with incense. Tap the [[demera]] to light it.'],tap:'dem'},
    {show:['fire'],sfx:'whoosh',wait:400},
    {show:['smoke'],move:{smoke:[520,260,.9]},say:['sm2','The flames and smoke went up, then bowed down and pointed to one place: a hill where people had dumped rubbish for over two hundred years. Tap the hill.'],tap:'hill'},
    {wiggle:['queen'],say:['sm3','The Cross had been buried under it. Queen [[eleni]] told the people: Dig!']},
   ]},

  {game:'repeat', bg:'desert', chip:'Dig!',
   props:[{id:'h0',art:'rubbleHill',x:420,y:440,s:.9},{id:'h1',art:['rubbleHill',{dug:1}],x:420,y:440,s:.9,hidden:true},{id:'h2',art:['rubbleHill',{dug:2}],x:420,y:440,s:.9,hidden:true},{id:'h3',art:['rubbleHill',{dug:3}],x:420,y:440,s:.9,hidden:true},
    {id:'queen',art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',crown:true,netela:'#E2A62B'}],x:110,y:440,s:.5}],
   button:{label:'Dig!',art:'stone'},
   intro:['g0','The digging began on [[meskerem]] seventeen. Tap Dig to clear the hill.'],
   steps:[
    {hide:['h0'],show:['h1'],say:['g1','They dug through autumn.']},
    {hide:['h1'],show:['h2'],say:['g2','Through winter.']},
    {hide:['h2'],show:['h3'],fx:'flash',sfx:'glory',say:['g3','And in March, after about six months, they found three crosses!']},
   ],
   done:['g4','But which one was the Cross of Christ?']},

  {game:'choose', bg:'desert', chip:'The True Cross',
   props:[{id:'h3',art:['rubbleHill',{dug:3}],x:560,y:440,s:.8},{id:'sick',art:'sleeper',x:220,y:430,s:.8},{id:'up',art:['figure',{robe:'#8C8478',beard:'dark',arms:'up'}],x:220,y:440,s:.55,hidden:true}],
   prompt:['t0','Three crosses look the same. How could they know which was the True Cross?'],
   options:[
    {label:'Pick the biggest one',art:'stone',good:false,say:['t1','Size could not tell them. The two thieves were crucified on crosses too. Try again.']},
    {label:'Lay each cross on the sick, and see',art:'cross',then:{hide:['sick'],show:['up'],fx:'flash'},
     say:['t2','They did. The Cross of Christ healed the sick, gave sight to the blind, and even raised the dead. That is how they knew!']},
   ]},

  {game:'order', chip:'The Cross comes to Ethiopia',
   intro:['o0','Part of the True Cross came to Ethiopia. Tap the steps of its journey in order.'],
   cards:[
    {art:'rubbleHill',cap:'Queen Eleni finds the Cross in Jerusalem',say:['o1','Queen [[eleni]] found the Cross in Jerusalem.']},
    {art:'king',cap:'Its right arm is given to King Dawit I',say:['o2','Centuries later, its right arm was sent to King [[dawit]] the First, with holy icons and relics.']},
    {art:'mountain',cap:'A vision: keep My Cross on a cross-shaped place',say:['o3','A vision told him: keep My Cross on a place shaped like a cross. He searched, but died before finding it.']},
    {art:'church',cap:'Zara Yaqob places it at Gishen Mariam',say:['o4','Emperor [[zara-yaqob]] found the mountain, and placed the Cross at [[gishen-mariam]] in Wollo, on [[meskerem]] twenty-one.']},
   ],
   done:['o5','To this day, thousands of pilgrims go to [[gishen-mariam]] for blessing.']},

  {game:'match', chip:'Church words',
   heading:'Match each word to its meaning',
   intro:['m0','Match each word to its meaning.'],
   pairs:[
    ['Meskel','The feast of the finding of the Holy Cross'],
    ['Demera','The great pile of wood lit on the eve of Meskel'],
    ['Chibo','Burning twigs used to light the Demera'],
    ['Gishen Mariam','The church in Wollo where the Cross is kept'],
    ['Relic','A holy object kept and honored by the Church'],
   ],
   done:['m1','At the [[demera]], the clergy and people go around it three times, and it is blessed at its four corners before it is lit.']},

  {game:'verse', chip:'Memory verse',
   verse:'For the preaching of the cross is to them that perish foolishness; but unto us which are saved it is the power of God.', ref:'1 Corinthians 1:18',
   chunks:['For the preaching of the cross','is to them that perish','foolishness;','but unto us which are saved','it is the power of God.'],
   intro:['verse-intro','Our memory verse: For the preaching of the cross is to them that perish foolishness; but unto us which are saved it is the power of God. Build it in order.'],
   done:['verse-done','The Cross is the sign of our salvation, our defense and our protection.']},

  {game:'think', chip:'The message of the Cross',
   qs:[
    ['k1','Love: Christ said no one has greater love than to give his life for his friends, and then He did it. How can you show that kind of love to your family, friends and teachers?'],
    ['k2','Perseverance: On the Cross, Christ prayed: Father, forgive them. When it is hard to be a Christian, how can you stay patient and faithful?','Pray for those who hurt you, as Christ did.'],
    ['k3','When we bow with the sign of the cross in prayer, what does each part mean?','Ask your priest or teacher to show you the prostration and explain it.'],
   ]},
 ]
});
