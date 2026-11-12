/* Level I, February week 3: Jesus Walks on Water (Matthew 14) */
BKLesson({
 id:'L1-feb3', title:'Jesus Walks on Water', am:'ጌታ በባሕር ላይ ተራመደ', sticker:'boat',
 pages:[
  {game:'cover', bg:'storm', title:'Jesus Walks on Water', am:'ጌታ በባሕር ላይ ተራመደ',
   props:[{art:'boat',x:250,y:330,s:1.1},{art:'peter',x:250,y:315,s:.38},{art:'jesusWalk',x:560,y:320,s:.5}],
   say:['cover','[[selam]]! Jesus did many miracles. He turned water into wine, and He helped a blind man see. Today, Jesus walks on the water! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, February week 3: <b>Jesus Walks on Water</b> (Matthew 14). Aim: know Jesus Christ through His miracles.</p>'},

  {game:'story', bg:'storm', chip:'A windy night',
   props:[{id:'boat',art:'boat',x:280,y:330,s:1.3},{id:'peter',art:'peter',x:240,y:313,s:.42},{id:'d1',art:'disciple',x:330,y:313,s:.42},{id:'jesus',art:'jesusWalk',x:760,y:320,s:.45}],
   beats:[
    {wiggle:['boat'],sfx:'thunder',say:['w1','The disciples went across the sea in a boat. Night came, and the wind was very strong! Tap the boat.'],tap:'boat'},
    {move:{jesus:[560,320,.5]},sfx:'whoosh',say:['w2','Then they saw someone walking on the water, towards them!']},
    {wiggle:['peter','d1'],say:['w3','They were scared. They thought it was a ghost!']},
    {wiggle:['jesus'],sfx:'glory',say:['w4','But Jesus said: it is I. Do not be afraid! [[ayzoh]]! Tap Jesus.'],tap:'jesus'},
   ],
   parent:'<p>"Take courage! It is I. Do not be afraid." (Matthew 14:27)</p>'},

  {game:'story', bg:'storm', chip:'Peter walks',
   props:[{id:'boat',art:'boat',x:220,y:330,s:1.2},{id:'d1',art:'disciple',x:220,y:313,s:.4},{id:'peter',art:'peter',x:290,y:313,s:.4},{id:'jesus',art:'jesusWalk',x:620,y:320,s:.5}],
   beats:[
    {wiggle:['peter'],say:['p1','[[petros]] said: Lord, if it is You, tell me to come to You on the water.']},
    {wiggle:['jesus'],say:['p2','Jesus said: come! Tap [[petros]] to help him step onto the water.'],tap:'peter'},
    {move:{peter:[420,330,.42]},sfx:'whoosh',say:['p3','[[petros]] walked on the water! He looked at Jesus and walked.']},
    {wiggle:['peter'],sfx:'thunder',say:['p4','But then he looked at the strong wind. He was afraid, and he began to sink!']},
    {move:{peter:[440,400,.42]},sfx:'no',say:['p5','[[petros]] cried: Lord, save me! Tap Jesus to help him!'],tap:'jesus'},
    {move:{jesus:[520,320,.5],peter:[450,330,.42]},sfx:'glory',say:['p6','Right away Jesus reached out His hand and caught him. Jesus said: why did you doubt?']},
   ],
   parent:'<p>Peter walked while he looked at Jesus, and began to sink when he looked at the wind. Talk about it: when we are afraid, we can call to Jesus like Peter did.</p>'},

  {game:'tapmany', bg:'sea', chip:'The wind stops',
   props:[{id:'sun',art:'sun',x:400,y:110,s:.8},{id:'dim',art:['shade',{c:'#1B2438',o:.55}],x:0,y:0,s:1},{id:'c0',art:'darkCloud',x:130,y:90,s:1.1},{id:'c1',art:'darkCloud',x:330,y:70,s:1.1},{id:'c2',art:'darkCloud',x:530,y:90,s:1.1},{id:'c3',art:'darkCloud',x:700,y:70,s:1.1},
     {art:'boat',x:400,y:330,s:1.3},{art:'jesus',x:350,y:313,s:.42},{art:'peter',x:450,y:313,s:.42}],
   area:{x0:0,y0:0,x1:800,y1:230}, count:4, max:4, spawn:{art:'sparkles',s:[.5,.7]}, sfx:'whoosh',
   at:{1:{hide:['c0']},2:{hide:['c1']},3:{hide:['c2']},4:{hide:['c3','dim'],sfx:'glory'}},
   progress:'*{n} more* clouds!',
   intro:['calm','Jesus and [[petros]] got into the boat, and the wind stopped! Tap the dark clouds to send them away.'],
   done:['calm-done','The sea was calm. The disciples bowed down and said: truly You are the Son of God!']},

  {game:'order', chip:'What happened first?',
   intro:['order','Put the story in order. Tap what happened first!'],
   cards:[
    {art:'boat',cap:'A windy night',say:['o1','The disciples were in the boat in the wind.']},
    {art:'jesusWalk',cap:'Jesus walked on water',say:['o2','Jesus came walking on the water.']},
    {art:'peter',cap:'Peter began to sink',say:['o3','Peter walked, then began to sink.']},
    {art:'sun',cap:'The wind stopped',say:['o4','Jesus got in the boat, and the wind stopped.']},
   ],
   done:['order-done','You told the whole story!']},

  {game:'quiz', questions:[
    {id:'q1',q:'What did the disciples think when they saw Jesus on the water?',a:[['A ghost',['text',{t:'Ghost?',size:44,c:'#24418F'}]],['A fish','fish'],['A boat','boat']],c:0},
    {id:'q2',q:'What did Peter ask Jesus?',a:[['Tell me to come to You','jesusWalk'],['Give me fish','fish'],['Take me home','tukul']],c:0},
    {id:'q3',q:'Why did Peter start to sink?',a:[['He was tired','bed'],['He looked at the wind and was afraid','darkCloud'],['He was hungry','bowl']],c:1},
    {id:'q4',q:'What did the disciples say at the end?',a:[['You are the Son of God!','jesus'],['Let\'s go fishing','net']],c:0},
   ]},
  {game:'song', song:'tenageru-dink-sirawin-meskir'},
 ]
});
