/* Level IV (Grade 7 and up), December week 4: The Annunciation (Genesis 3:15; Luke 1:5-56) */
BKLesson({
 id:'L4-dec4', title:'The Annunciation', am:'ብሥራት', sticker:'gabriel',
 pages:[
  {game:'cover', bg:'sunrise', title:'The Annunciation', am:'ብሥራት',
   props:[{art:'gabriel',x:540,y:410,s:.65},{art:'mary',x:280,y:440,s:.6},{art:'dove',x:410,y:150,s:.5}],
   say:['cover','[[selam]]! Do you remember God\'s promise to Adam and Eve, right after the fall? Today the promise starts to come true.'],
   parent:'<p>This lesson follows Level IV, December week 4: <b>The Annunciation</b> (Genesis 3; Luke 1). Aim: learn about the fulfillment of God\'s promise.</p><p>Read the Virgin Mary\'s song of praise together (Luke 1:46-55).</p>'},

  {game:'story', bg:'heaven', chip:'Why Gabriel?',
   props:[{id:'gab',art:'gabriel',x:400,y:410,s:.65},{id:'a1',art:'angel',x:180,y:350,s:.45},{id:'a2',art:'angel',x:620,y:350,s:.45,flip:true}],
   beats:[
    {say:['w1','God promised to be born of a woman, to crush the serpent\'s head and save Adam\'s children. Who would carry this news? Tap the archangel.'],tap:'gab'},
    {say:['w2','The Archangel Gabriel! When Satnael claimed to be the creator, Gabriel calmed the angels: Let us stand where we are until we find our Creator.']},
    {wiggle:['a1','a2'],say:['w3','Because he stood firm in faith, God gave him the honor of announcing the birth of the Savior. God gives great work to those who stand firm.']},
   ]},

  {game:'choose', bg:'church', chip:'Zachariah in the Temple',
   props:[{id:'zac',art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',beard:'white',cap:'#FFFFFF'}],x:250,y:440,s:.6},{id:'gab',art:'gabriel',x:560,y:410,s:.6},{id:'cens',art:'censer',x:400,y:380,s:.7}],
   prompt:['z0','The old priest Zachariah was burning incense in the Temple. Gabriel appeared and said: Your wife Elizabeth will bear a son, and you shall call him John. Elizabeth was very old. What should Zachariah answer?'],
   options:[
    {label:'How can I know this? I am old, and so is my wife.',art:'darkCloud',good:false,then:{wiggle:['zac']},
     say:['z1','That is what Zachariah said. Gabriel answered: I am Gabriel, who stands before God. Because you did not believe, you will not be able to speak until it happens. Try the answer of faith.']},
    {label:'Nothing is impossible with God. Let it be so.',art:'glory',then:{wiggle:['gab']},
     say:['z2','That is the answer of faith. Zachariah doubted, and could not speak until John was born.']},
   ]},

  {game:'story', bg:'sunrise', chip:'Rejoice, full of grace',
   props:[{id:'mary',art:['figure',{robe:'#24418F',mantle:'#24418F',stars:true,longHair:true,arms:'pray'}],x:260,y:440,s:.6},{id:'gab',art:'gabriel',x:580,y:410,s:.65,hidden:true},{id:'dove',art:'dove',x:300,y:150,s:.5,hidden:true},{id:'glow',art:'glory',x:260,y:220,s:.8,hidden:true}],
   beats:[
    {show:['gab'],fx:'flash',sfx:'glory',say:['r1','Six months later, God sent Gabriel to a virgin in Nazareth named [[mariam]]. Tap the angel.'],tap:'gab'},
    {say:['r2','He greeted her with words never said to anyone before: Rejoice, full of grace, the Lord is with you. Blessed are you among women!']},
    {say:['r3','You will conceive and bear a Son, and He will be called the Son of the Highest. She asked: How can this be? She had given her whole life to God.']},
    {show:['dove','glow'],say:['r4','Gabriel said: The Holy Spirit will come upon you, and the power of the Highest will overshadow you. For with God nothing is impossible. Tap the Virgin.'],tap:'mary'},
    {wiggle:['mary'],say:['r5','She answered humbly: Behold the handmaid of the Lord. Let it be to me according to your word.']},
   ]},

  {game:'drag', bg:'field', chip:'A visit',
   props:[{id:'eliz',art:['figure',{robe:'#8A5A30',longHair:true,netela:'#E2A62B',arms:'out'}],x:620,y:440,s:.6},{id:'house',art:'house',x:640,y:440,s:.5},{id:'heart',art:'heart',x:620,y:240,s:.5,hidden:true}],
   items:[{art:'mary',x:140,y:440,s:.55,to:[500,440,.55],then:{show:['heart']}}],
   zone:{x:420,y:250,w:240,h:200},
   intro:['v1','The Virgin [[mariam]] hurried over the hills to visit her old relative Elizabeth. Drag her to Elizabeth\'s house.'],
   done:['v2','When Elizabeth heard her greeting, the baby John leaped for joy inside her. She cried out: Blessed is she who believed! And the Virgin sang: My soul magnifies the Lord.']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'Gabriel first announced the birth of ___ the Baptist.',a:'John',opts:['Peter','Joseph']},
    {id:'f2',s:'Because he doubted, Zachariah could not ___.',a:'speak',opts:['walk','see']},
    {id:'f3',s:'Rejoice, full of ___, the Lord is with you.',a:'grace',opts:['joy','light']},
    {id:'f4',s:'With God nothing is ___.',a:'impossible',opts:['hidden','easy']},
   ]},

  {game:'verse', chip:'Memory verse',
   verse:'I will put enmity between you and the woman, and between your seed and her Seed; He shall bruise your head.', ref:'Genesis 3:15',
   chunks:['I will put enmity','between you and the woman,','and between your seed','and her Seed;','He shall bruise your head.'],
   intro:['verse-intro','Our memory verse is the promise that came true: I will put enmity between you and the woman, and between your seed and her Seed; He shall bruise your head. Build it in order.'],
   done:['verse-done','The woman is the Virgin [[mariam]], and her Seed is Christ.']},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Zachariah doubted; the Virgin believed. What is the difference between her question and his?','She asked how, in faith. He asked for proof, in doubt.'],
    ['k2','We still greet the Virgin with Gabriel\'s words in our prayers. Can you say them by heart?'],
    ['k3','Chosen to be the Mother of God, she still hurried to serve old Elizabeth. Who could you serve this week?'],
   ]},
 ]
});
