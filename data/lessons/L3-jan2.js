/* Level III (Grades 4-6), January week 2: The First Visit to the Temple, Simeon (Luke 2:22-38; Luke 2:30) */
BKLesson({
 id:'L3-jan2', title:'Simeon\'s Long Wait', am:'ስምዖን አረጋዊ', sticker:'scroll',
 pages:[
  {game:'cover', bg:'church', title:'Simeon\'s Long Wait', am:'ስምዖን አረጋዊ',
   props:[{art:['figure',{robe:'#F4EEDF',sleeve:'#F4EEDF',beard:'white',halo:true}],x:640,y:440,s:.6},{art:'babyJesus',x:700,y:380,s:.6},{art:'scroll',x:160,y:420,s:.7}],
   say:['cover','[[selam]]! An old man waited a very long time to see God\'s promise come true. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, January week 2: <b>The First Visit in the Temple</b> (Luke 2:22-38; the Church\'s tradition about Simeon). Aim: learn that God always keeps His promises. The Presentation is celebrated on Yekatit 8.</p><p>Talk about it: How did Simeon know who the Baby was?</p>'},

  {game:'read', chip:'Read', heading:'A virgin shall conceive', pic:'scroll',
   paras:[
    ['r1','Long before Jesus was born, a king named Ptolemy brought seventy Jewish elders together to translate the Old Testament from Hebrew into Greek. Simeon was one of them.'],
    ['r2','He was given the Book of Isaiah. In it he read: Behold, a virgin shall conceive and bear a Son. Simeon worried that no one would believe it, so he wrote: a woman shall conceive.'],
    ['r3','When he woke up, the word had been changed back to virgin! He changed it again, and again it was corrected. This happened three times.'],
    ['r4','The fourth time, an angel appeared and told him: You will not die until you see Christ born of a Virgin.'],
   ],
   parent:'<p>This account of Simeon, one of the translators of the Septuagint, is part of the Church\'s tradition.</p>'},

  {game:'story', bg:'church', chip:'My eyes have seen',
   props:[{id:'sim',art:['figure',{robe:'#F4EEDF',sleeve:'#F4EEDF',beard:'white',halo:true}],x:200,y:440,s:.6},{id:'mary',art:'mary',x:520,y:440,s:.6},{id:'jos',art:'joseph',x:650,y:440,s:.6},{id:'baby',art:'babyJesus',x:570,y:380,s:.6},{id:'ann',art:['woman',{robe:'#5B4D3C',netela:'#F4EEDF',halo:true}],x:90,y:440,s:.55},{id:'glow',art:'glory',x:350,y:300,s:1,hidden:true}],
   beats:[
    {wiggle:['sim'],say:['s1','Simeon waited for about two hundred and fifty years! He was very, very old.']},
    {wiggle:['mary','jos'],say:['s2','Forty days after Jesus was born, [[mariam]] and Joseph brought Him to the temple. Tap the Baby.'],tap:'baby'},
    {move:{baby:[300,380,.6]},show:['glow'],sfx:'glory',say:['s3','Simeon took the Child in his arms and said: Lord, now let Your servant depart in peace, for my eyes have seen Your salvation.']},
    {wiggle:['ann'],say:['s4','An old widow named Anna, who prayed and fasted in the temple day and night, also thanked God for the Savior.']},
   ]},

  {game:'order', chip:'Put it in order',
   intro:['order','Tap the pictures in the order they happened.'],
   cards:[
    {art:'scroll',cap:'Simeon translated Isaiah',say:['o1','Simeon translated Isaiah.']},
    {art:'angel',cap:'An angel made him a promise',say:['o2','An angel made him a promise.']},
    {art:'babyJesus',cap:'Jesus was brought to the temple',say:['o3','Jesus was brought to the temple.']},
    {art:'glory',cap:'Simeon said: My eyes have seen',say:['o4','Simeon praised God.']},
   ],
   done:['order-done','God kept His promise!']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Simeon translated the Book of Isaiah into Greek.',t:true,why:'He was one of the seventy elders.',pic:'scroll'},
    {id:'t2',s:'The word virgin was corrected three times.',t:true,why:'God showed Simeon that the prophecy was true.',pic:'glory'},
    {id:'t3',s:'Jesus was brought to the temple on His first birthday.',t:false,why:'He was brought forty days after His birth.',pic:'babyJesus'},
   ],
   done:['tf-done','Well done!']},

  {game:'verse', chip:'Memory verse',
   verse:'My eyes have seen Your salvation.', ref:'Luke 2:30',
   chunks:['My eyes','have seen','Your salvation.'],
   intro:['verse-intro','Our memory verse is from Simeon\'s song in Luke. Listen: My eyes have seen Your salvation. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'What did the angel promise Simeon?',a:[['He would see Christ before he died','glory'],['He would become a king','king'],['He would be rich','gift']],c:0},
    {id:'q2',q:'How many days old was Jesus at the temple?',a:[['Forty',['text',{t:'40',size:64,c:'#24418F'}]],['Three',['text',{t:'3',size:64,c:'#24418F'}]],['Seven',['text',{t:'7',size:64,c:'#24418F'}]]],c:0},
    {id:'q3',q:'Who else thanked God in the temple?',a:[['Anna the widow',['woman',{robe:'#5B4D3C',netela:'#F4EEDF',halo:true}]],['Pharaoh','pharaoh'],['Goliath','soldier']],c:0},
   ]},
 ]
});
