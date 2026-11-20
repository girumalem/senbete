/* Level IV (Grade 7 and up), November week 4: Moses on the Mountain of God (Exodus 3; Psalm 10:17)
   The source lists the verse as "Genesis 3:3"; the words are from Exodus 3:3. */
BKLesson({
 id:'L4-nov4', title:'Moses on the Mountain of God', am:'ሙሴ በእግዚአብሔር ተራራ', sticker:'burningBush',
 pages:[
  {game:'cover', bg:'mountain', title:'Moses on the Mountain of God', am:'ሙሴና ቍጥቋጦው',
   props:[{art:'burningBush',x:560,y:420,s:.8},{art:'moses',x:260,y:440,s:.6},{art:'sheep',x:120,y:440,s:.4},{art:'sheep',x:390,y:445,s:.35}],
   say:['cover','[[selam]]! One ordinary day, a shepherd saw something amazing, and because he was curious, God spoke to him. Let\'s climb the mountain with [[muse]].'],
   parent:'<p>This lesson follows Level IV, November week 4: <b>Moses on the Mountain of God</b> (Exodus 3). Aim: learn the benefits of spiritual curiosity, humbleness, and obedience to God.</p><p>Talk about it: Is there anything in our church you are curious about: an icon, a ceremony, a hymn?</p>'},

  {game:'choose', bg:'mountain', chip:'A strange sight',
   props:[{id:'bush',art:'burningBush',x:600,y:420,s:.75},{id:'moses',art:'moses',x:220,y:440,s:.6},{id:'sh',art:'sheep',x:100,y:440,s:.4}],
   prompt:['c0','[[muse]] was looking after the sheep of his father-in-law Jethro, near Horeb, the mountain of God. He saw a bush on fire, but it did not burn up! What should he do?'],
   options:[
    {label:'Ignore it and keep walking',art:'sheep',good:false,say:['c1','Then he would have missed the greatest moment of his life. Try again.']},
    {label:'I will turn aside and see this great sight!',art:'burningBush',then:{move:{moses:[440,440]}},
     say:['c2','That is what [[muse]] said! His holy curiosity brought him close to God for the first time.']},
   ]},

  {game:'story', bg:'mountain', chip:'Here I am',
   props:[{id:'bush',art:'burningBush',x:600,y:420,s:.75},{id:'moses',art:'moses',x:420,y:440,s:.6}],
   beats:[
    {wiggle:['bush'],sfx:'glory',say:['h1','God called to him from the middle of the bush: [[muse]], [[muse]]! Tap Moses to answer.'],tap:'moses'},
    {say:['h2','[[muse]] said: Here I am.']},
    {wiggle:['bush'],say:['h3','God said: Do not come near. Take your sandals off your feet, for the place where you stand is holy ground.']},
   ]},

  {game:'drag', bg:'mountain', chip:'Holy ground',
   props:[{id:'bush',art:'burningBush',x:600,y:420,s:.75},{id:'moses',art:['figure',{robe:'#8A5A30',beard:'grey',arms:'pray'}],x:420,y:440,s:.6}],
   items:[{art:'sandals',x:420,y:445,s:.5,to:[150,440,.5]}],
   zone:{x:60,y:350,w:200,h:100},
   intro:['s1','Drag Moses\'s sandals away, off the holy ground.'],
   done:['s2','We do the same! We take off our shoes before entering the holy part of our church, out of reverence.']},

  {game:'choose', bg:'mountain', chip:'Who am I?',
   props:[{id:'bush',art:'burningBush',x:600,y:420,s:.75},{id:'moses',art:['figure',{robe:'#8A5A30',beard:'grey',arms:'pray'}],x:420,y:440,s:.6},{id:'glow',art:'glory',x:420,y:200,s:.7,hidden:true}],
   prompt:['p0','God said: I am the God of Abraham, Isaac and Jacob. I have heard the cry of My people in Egypt. I will send you to Pharaoh to bring them out. How did Moses answer?'],
   options:[
    {label:'Of course! I am the best man for the job.',art:'king',good:false,say:['p1','That would be pride. Moses was the opposite. Try again.']},
    {label:'Who am I, that I should go to Pharaoh?',art:'heart',then:{show:['glow']},
     say:['p2','Moses was humble. God answered: I will be with you. Since his youth in Pharaoh\'s palace, Moses had longed for his people\'s freedom, and now God fulfilled that desire through him. David sang: Lord, You have heard the desire of the humble.']},
   ]},

  {game:'story', bg:'church', chip:'Be curious in church',
   props:[{id:'icon',art:'icon',x:150,y:330,s:.9},{id:'cens',art:'censer',x:320,y:330,s:1},{id:'cand',art:'candle',x:480,y:400,s:.7},{id:'keb',art:'kebero',x:640,y:420,s:.6}],
   beats:[
    {say:['q0','God may not speak to us from a bush, but He speaks to us in His Church. Be curious like Moses! Tap the icon.'],tap:'icon'},
    {say:['q1','Icons show us the saints, and the events of our salvation. Ask what each one means. Now tap the censer.'],tap:'cens'},
    {say:['q2','The incense rises like our prayers before God. Tap the candle.'],tap:'cand'},
    {say:['q3','The candle reminds us that Christ is the light of the world. Tap the [[kebero]].'],tap:'keb'},
    {say:['q4','The [[kebero]] keeps the beat of the hymns of [[kidus-yared]]. The more we ask and learn, the closer we come to God.']},
   ]},

  {game:'match', chip:'Lessons from the mountain',
   heading:'Match each lesson to what happened',
   intro:['m0','Match each lesson to what happened on the mountain.'],
   pairs:[
    ['Spiritual curiosity','Moses turned aside to see the burning bush'],
    ['Reverence','He took off his sandals on holy ground'],
    ['Humility','He said: Who am I, that I should go?'],
    ['God honors the saints','I am the God of Abraham, Isaac and Jacob'],
    ['Obedience','He went back to Pharaoh, as God sent him'],
   ],
   done:['m1','God introduced Himself by the names of His saints. That is why we ask God to forgive us for the sake of His saints, as Moses did for Israel.']},

  {game:'verse', chip:'Memory verse',
   verse:'I will now turn aside and see this great sight.', ref:'Exodus 3:3',
   intro:['verse-intro','Our memory verse is what Moses said: I will now turn aside and see this great sight. Build it in order.'],
   done:['verse-done','Turn aside this week, and find out about one thing in church you never understood.']},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Why did Moses leave Pharaoh\'s palace? Do you remember how he came to grow up there?'],
    ['k2','Why were the Hebrews called the children of Israel?','They were the children of Jacob, whom God named Israel.'],
    ['k3','What are you curious about in our church: an icon, a ceremony, a hymn? Who could you ask about it?'],
   ]},
 ]
});
