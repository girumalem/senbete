/* Level III (Grades 4-6), September week 1: St. Tekle Haimanot (Synaxarium; Gedle Tekle Haimanot; Matthew 5:16) */
BKLesson({
 id:'L3-sep1', title:'Tree of Faith', am:'ቅዱስ ተክለ ሃይማኖት', sticker:'church',
 pages:[
  {game:'cover', bg:'mountain', title:'Tree of Faith', am:'ቅዱስ ተክለ ሃይማኖት',
   props:[{art:['figure',{robe:'#3A2E28',sleeve:'#3A2E28',beard:'white',halo:true,wings:true,staff:true}],x:640,y:430,s:.6},{art:'church',x:160,y:440,s:.5}],
   say:['cover','[[selam]]! Today we read the life of one of the greatest saints of Ethiopia, [[tekle-haimanot]]. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, September week 1: <b>St. Tekle Haimanot</b> (Synaxarium; Gedle Tekle Haimanot). Aim: learn about his life, and why we keep saints\' days and Zikir for the needy.</p><p>Review: Which apostle first saw the ascension of the Virgin Mary? What did he show the others?</p><p>Talk about it: Does your family keep a Zikir? Ask your parents.</p>'},

  {game:'read', chip:'Read', heading:'A child of prayer', pic:'michael',
   paras:[
    ['r1','His parents, Tsega Ze-Ab (Gift of the Father) and Egzi-Haraya (Chosen by God), loved God and were kind to the sick and the poor.'],
    ['r2','On the twelfth of every month they kept the feast of [[kidus-mikael]] by feeding the poor. This is called a Zikir.'],
    ['r3','In a vision, the Archangel told them they would have a blessed child, like John the Baptist. He was born on the twenty-fourth of Tahsas, and they named him Fesseha Tsion, the Joy of Zion.'],
   ]},

  {game:'story', bg:'field', chip:'Wonders of a child',
   props:[{id:'baby',art:'baby',x:300,y:420,s:.5},{id:'glow',art:'glory',x:300,y:280,s:.9,hidden:true},{id:'jar',art:'jar',x:560,y:440,s:.5},{id:'grain',art:'grain',x:680,y:440,s:.5,hidden:true}],
   beats:[
    {show:['glow'],sfx:'glory',say:['s1','Three days after he was born, the Holy Spirit came upon him, and the baby spoke: One is the Holy Father, One is the Holy Son, One is the Holy Spirit!']},
    {wiggle:['jar'],say:['s2','Later there was a famine. His parents had little flour and oil left for their Zikir. Tap the jar.'],tap:'jar'},
    {show:['grain'],sfx:'pop',fx:'confetti',say:['s3','The young boy prayed, and the flour and oil grew, so the poor could still be fed!']},
   ]},

  {game:'read', chip:'Read', heading:'A new name', pic:'michael',
   paras:[
    ['r4','He was ordained a deacon at fifteen. His parents wanted him to marry, but he wished to serve God.'],
    ['r5','One day, while he was out hunting, the Archangel Michael appeared to him and said he would spend his life saving souls. He named him [[tekle-haimanot]], which means Tree of Faith.'],
    ['r6','He gave his money to the church and the poor, became a monk and a priest, and taught many people who did not know God. In Ketata, he drove out an evil spirit from a tree the people worshipped.'],
   ]},

  {game:'story', bg:'mountain', chip:'Six wings',
   props:[{id:'saint',art:['figure',{robe:'#3A2E28',sleeve:'#3A2E28',beard:'white',halo:true,arms:'pray'}],x:400,y:200,s:.45},{id:'wing',art:['figure',{robe:'#3A2E28',sleeve:'#3A2E28',beard:'white',halo:true,wings:true}],x:400,y:200,s:.45,hidden:true},{id:'glow',art:'glory',x:400,y:200,s:1,hidden:true}],
   beats:[
    {wiggle:['saint'],say:['w1','His monastery was on a high cliff, and the monks climbed up and down on a rope.']},
    {move:{saint:[400,260,.45]},sfx:'whoosh',say:['w2','One day the rope broke! As he fell, he prayed to God. Tap the saint.'],tap:'saint'},
    {show:['wing','glow'],hide:['saint'],sfx:'glory',say:['w3','God gave him six wings, and he flew down safely!']},
    {move:{wing:[400,430,.5],glow:[400,400,1]},fx:'confetti',say:['w4','That is why icons of [[tekle-haimanot]] show him with wings.']},
   ]},

  {game:'read', chip:'Read', heading:'Standing in prayer', pic:'candle',
   paras:[
    ['r7','He spent his last twenty-nine years at Debre Asbo, praying standing for a long time. He lost one leg from standing so long, yet he prayed on one leg for seven more years.'],
    ['r8','At ninety-nine he told the monks to keep living in prayer and love. He departed on the twenty-fourth of Nehasse. May his prayers be with us all.'],
    ['r9','Keeping saints\' days reminds us to help others, as his parents fed the poor on [[kidus-mikael]]\'s day.'],
   ]},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Tekle Haimanot means Tree of Faith.',t:true,why:'The Archangel Michael gave him this name.',pic:'acacia'},
    {id:'t2',s:'He first praised God when he was three years old.',t:false,why:'It was three days after he was born.',pic:'baby'},
    {id:'t3',s:'He stopped praying after he lost his leg.',t:false,why:'He prayed on one leg for seven years.',pic:'candle'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'His parents kept a Zikir for Saint ___ every month.',a:'Michael',opts:['George','Yared']},
    {id:'f2',s:'When the rope broke, God gave him six ___.',a:'wings',opts:['ropes','horses']},
    {id:'f3',s:'His childhood name was Fesseha ___.',a:'Tsion',opts:['Mariam','Giyorgis']},
   ],
   done:['bl-done','Great reading!']},

  {game:'verse', chip:'Memory verse',
   verse:'Let your light so shine before men, that they may see your good works and glorify your Father in heaven.', ref:'Matthew 5:16',
   chunks:['Let your light so shine','before men,','that they may see your good works','and glorify your Father in heaven.'],
   intro:['verse-intro','Saint [[tekle-haimanot]] let his light shine. Listen: Let your light so shine before men, that they may see your good works and glorify your Father in heaven. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who gave him the name Tekle Haimanot?',a:[['The Archangel Michael','michael'],['A king','king'],['His friends','boy']],c:0},
    {id:'q2',q:'What is a Zikir?',a:[['A feast for the needy in honor of a saint','bowl'],['A long journey','donkey'],['A kind of song','kebero']],c:0},
    {id:'q3',q:'How did God save him when the rope broke?',a:[['He gave him six wings','glory'],['A tree caught him','acacia'],['He landed in water','sea']],c:0},
   ]},
 ]
});
