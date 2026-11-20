/* Level IV (Grade 7 and up), Lent week 8: The Seven Words on the Cross (Matthew 27; Luke 23; John 19; John 3:16)
   Calvary is shown as three plain crosses, without figures, as in the other levels. */
BKLesson({
 id:'L4-len8', title:'The Seven Words on the Cross', am:'ሰባቱ ቃላተ መስቀል', sticker:'cross',
 pages:[
  {game:'cover', bg:'dark', title:'The Seven Words on the Cross', am:'ሰባቱ ቃላተ መስቀል',
   props:[{art:'calvary',x:400,y:440,s:1}],
   say:['cover','[[selam]]. Before Pilate, our Lord hardly spoke in His own defense. But on the Cross, He spoke seven words full of love. Today we listen to them, one by one.'],
   parent:'<p>This lesson follows Level IV, Lent week 8: <b>The Seven Words on the Cross</b> (Matthew 27; Luke 23; John 19). Aim: learn the meaning of the words Jesus spoke on the Cross.</p><p>On Good Friday (Siklet) the Church keeps vigil and bows many times in prayer, remembering His suffering.</p>'},

  {game:'story', bg:'dark', chip:'Thirty pieces of silver',
   props:[{id:'coins',art:['table',{coins:true}],x:250,y:440,s:.8},{id:'pil',art:['figure',{robe:'#B3322A',sleeve:'#FFFFFF',band:'#E2A62B'}],x:560,y:440,s:.6},{id:'cal',art:'calvary',x:400,y:440,s:.9,hidden:true}],
   beats:[
    {say:['b1','The chief priests were jealous of Christ, and afraid of losing their place. Judas, one of the Twelve, betrayed Him for thirty pieces of silver. Tap the silver.'],tap:'coins'},
    {wiggle:['pil'],say:['b2','Pontius Pilate, the Roman governor, found no fault in Him. But the crowd shouted: Crucify Him! And Pilate gave Him up.']},
    {hide:['coins','pil'],show:['cal'],say:['b3','On Friday, at Golgotha, they crucified Him between two criminals. He accepted it all, for our sake.']},
   ]},

  {game:'choose', bg:'dark', chip:'The two criminals',
   props:[{id:'cal',art:'calvary',x:400,y:440,s:1},{id:'glow',art:'glory',x:520,y:200,s:.7,hidden:true}],
   prompt:['c0','One criminal mocked Him. The other repented. Which words did the repentant one say?'],
   options:[
    {label:'If You are the Christ, save Yourself and us!',art:'darkCloud',good:false,say:['c1','That is what the mocking criminal said. Try the other.']},
    {label:'Lord, remember me when You come into Your kingdom.',art:'glory',then:{show:['glow']},
     say:['c2','Christ answered him: Assuredly, I say to you, today you will be with Me in paradise. He was the first to enter paradise since Adam and Eve.']},
   ]},

  {game:'order', chip:'The seven words',
   intro:['o0','Tap the seven words of our Lord in the order He spoke them.'],
   cards:[
    {art:'heart',cap:'Father, forgive them, for they do not know what they do',say:['o1','One: Father, forgive them, for they do not know what they do.']},
    {art:'glory',cap:'Today you will be with Me in paradise',say:['o2','Two: Today you will be with Me in paradise.']},
    {art:'mary',cap:'Woman, behold your son. Behold your mother',say:['o3','Three: Woman, behold your son. Behold your mother.']},
    {art:'darkCloud',cap:'My God, My God, why have You forsaken Me?',say:['o4','Four: My God, My God, why have You forsaken Me?']},
    {art:'cup',cap:'I thirst',say:['o5','Five: I thirst.']},
    {art:'cross',cap:'It is finished',say:['o6','Six: It is finished.']},
    {art:'dove',cap:'Father, into Your hands I commit My spirit',say:['o7','Seven: Father, into Your hands I commit My spirit.']},
   ],
   done:['o8','Seven words, spoken in pain, and every one of them for us.']},

  {game:'match', chip:'What they teach',
   heading:'Match each word to what it teaches us',
   intro:['m0','Match each word from the Cross to what it teaches us.'],
   pairs:[
    ['Father, forgive them','Forgive those who hurt us'],
    ['Behold your mother','The Virgin Mariam is mother to all of us'],
    ['My God, why have You forsaken Me?','Seek God even in despair'],
    ['I thirst','He thirsts for good deeds in our lives'],
    ['It is finished','Our salvation is complete'],
    ['Into Your hands I commit My spirit','Entrust your soul to God'],
   ],
   done:['m1','That is why we pray in the Lord\'s Prayer: Forgive us, as we forgive those who sin against us.']},

  {game:'verse', chip:'Memory verse',
   verse:'For God so loved the world that He gave His only begotten Son.', ref:'John 3:16',
   chunks:['For God so loved the world','that He gave','His only begotten Son.'],
   intro:['verse-intro','Our memory verse: For God so loved the world that He gave His only begotten Son. Build it in order.'],
   done:['verse-done','This is the heart of the whole Gospel.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who betrayed Christ for thirty pieces of silver?',a:[['Judas','table'],['Peter','peter'],['John','disciple']],c:0},
    {id:'q2',q:'Who received the Virgin [[mariam]] as his mother on behalf of us all?',a:[['Saint John','disciple'],['Pilate','king'],['Joseph','joseph']],c:0},
    {id:'q3',q:'What did Christ mean by It is finished?',a:[['His work of saving us was complete','cross'],['He was tired','bed'],['The day was over','moon']],c:0},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Christ forgave the people who crucified Him while He was still on the Cross. Who is hard for you to forgive?'],
    ['k2','He thirsts for good deeds in our lives. What can you offer Him this Passion Week?'],
    ['k3','On [[siklet]], Good Friday, how does your family remember His suffering?'],
   ]},
 ]
});
