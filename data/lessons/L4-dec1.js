/* Level IV (Grade 7 and up), December week 1: Angels (Revelation 4, 8, 12; Hebrews 1:14; Matthew 18:10; Psalm 34:7) */
BKLesson({
 id:'L4-dec1', title:'Angels', am:'መላእክት', sticker:'angel',
 pages:[
  {game:'cover', bg:'heaven', title:'Angels', am:'መላእክት',
   props:[{art:'angel',x:200,y:380,s:.55},{art:'gabriel',x:400,y:400,s:.65},{art:'angel',x:600,y:380,s:.55,flip:true}],
   say:['cover','[[selam]]! Who are the angels? When were they made, and what do they do for us? Let\'s go up to heaven and find out.'],
   parent:'<p>This lesson follows Level IV, December week 1: <b>Angels</b>. Aim: learn the nature and roles of angels.</p><p>The word angel comes from the Greek "angelos", messenger. In Ge\'ez angels are "malaekt".</p>'},

  {game:'choose', bg:'heaven', chip:'Who made us?',
   props:[{id:'sat',art:['figure',{robe:'#5A5F6E',sleeve:'#5A5F6E',wings:true,arms:'out'}],x:220,y:420,s:.6},{id:'gab',art:'gabriel',x:560,y:410,s:.6},{id:'a1',art:'angel',x:400,y:300,s:.4},{id:'a2',art:'angel',x:700,y:300,s:.4},{id:'glow',art:'glory',x:400,y:150,s:.9,hidden:true}],
   prompt:['a0','On the first day, a Sunday, God created the angels, countless in number. They asked: Who created us? Seeing no one above him, the highest angel, Satnael, said: I created you! What should the angels do?'],
   options:[
    {label:'Follow Satnael as our creator',art:'darkCloud',good:false,then:{wiggle:['sat']},
     say:['a1','Some angels did, and they fell with him. War broke out in heaven, and they were cast out. Try again.']},
    {label:'Let us stand where we are until we find our Creator',art:'glory',then:{show:['glow'],wiggle:['gab']},
     say:['a2','That is what the Archangel Gabriel told the angels! They stood firm, and God revealed Himself to them. Then they praised Him.']},
   ]},

  {game:'collect', bg:'heaven', chip:'Nine ranks',
   props:[{id:'glow',art:'glory',x:400,y:130,s:.9}],
   items:['Cherubim','Seraphim','Thrones','Powers','Authorities','Principalities','Dominions','Archangels','Angels'].map((n,i)=>({art:'angelHead',x:90+(i%5)*150,y:i<5?420:330,s:.6,say:['n'+(i+1),n]})),
   slots:[[240,260,.45],[320,250,.45],[400,245,.45],[480,250,.45],[560,260,.45],[280,330,.45],[360,325,.45],[440,325,.45],[520,330,.45]],
   intro:['n0','There are nine ranks of holy angels. Tap each one to bring it to the choir around God\'s throne.'],
   done:['n10','All nine ranks! Together they are called the heavenly hosts.']},

  {game:'match', chip:'What angels do',
   heading:'Match each role of the angels to an example from the Bible',
   intro:['m0','Angels have different roles. Match each role to an example from the Bible.'],
   pairs:[
    ['They worship God','Day and night they sing: Holy, holy, holy'],
    ['They help us','An angel led Peter out of prison'],
    ['They protect us','Every child has a guardian angel'],
    ['They bring good news','Angels told the shepherds Christ was born'],
    ['They punish disobedience','Zachariah could not speak because he doubted'],
   ],
   done:['m1','Saint Paul wrote: Are they not all ministering spirits, sent to serve those who will inherit salvation?']},

  {game:'drag', bg:'heaven', chip:'The golden censer',
   props:[{id:'glow',art:'glory',x:600,y:200,s:1},{id:'smoke',art:'smoke',x:600,y:330,s:.6,hidden:true},{id:'ang',art:'angel',x:180,y:420,s:.55}],
   items:[{art:'censer',x:300,y:400,s:.9,to:[600,380,.9],then:{show:['smoke']}}],
   zone:{x:470,y:180,w:260,h:250},
   intro:['g1','Saint John saw an angel with a golden censer, full of incense and the prayers of the saints. Drag the censer up before God\'s throne.'],
   done:['g2','The smoke of the incense, with the prayers of the saints, went up before God from the angel\'s hand. Angels carry our prayers to God.']},

  {game:'verse', chip:'Memory verse',
   verse:'The angel of the Lord encamps all around those who fear Him, and delivers them.', ref:'Psalm 34:7',
   chunks:['The angel of the Lord','encamps all around','those who fear Him,','and delivers them.'],
   intro:['verse-intro','Our memory verse: The angel of the Lord encamps all around those who fear Him, and delivers them. Build it in order.'],
   done:['verse-done','Well done!']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf0','True or false?'],
   items:[
    {id:'t1',s:'Angels were created on the first day of creation.',t:true,why:'God made the angels on the first day, a Sunday.'},
    {id:'t2',s:'The word angel means messenger.',t:true,why:'It comes from the Greek word angelos.'},
    {id:'t3',s:'Angels rest at night, like us.',t:false,why:'They worship God without rest, day and night.'},
    {id:'t4',s:'Children have angels who see the face of God.',t:true,why:'Christ said so in Matthew eighteen, ten.'},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Gabriel said: Let us stand where we are until we find our Creator. When everyone around you is following something wrong, how can you stand firm?'],
    ['k2','Christ said children\'s angels always see the face of the Father. How does it feel to know you have a guardian angel?'],
    ['k3','Name three roles of angels from today\'s lesson.'],
   ]},
 ]
});
