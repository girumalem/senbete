/* Level II (Grades 1-3), Lent week 5: Friends Help the Paralytic (Mark 2:1-12) */
BKLesson({
 id:'L2-len5', title:'Four Good Friends', am:'አራቱ ጓደኞች', sticker:'house',
 pages:[
  {game:'cover', bg:'day', title:'Four Good Friends', am:'አራቱ ጓደኞች',
   props:[{art:['house',{hole:true}],x:560,y:440,s:.8},{art:'stretcher',x:200,y:400,s:.8},{art:['sleeper',{robe:'#8C8478'}],x:200,y:380,s:.4}],
   say:['cover','[[selam]]! This is a story about friendship and faith. Four friends will do anything to bring their friend to Jesus! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, Lent week 5: <b>Friends Help the Paralytic</b> (Mark 2:1-12). Aim: be a good friend, and bring others to Jesus.</p><p>Review: How many years did the man at Bethesda wait?</p>'},

  {game:'read', chip:'Read along', heading:'A full house', pic:'house',
   paras:[
    ['r1','There was a man who was paralyzed. He could not walk at all.'],
    ['r2','But he had four good friends. They heard that Jesus was in town.'],
    ['r3','They carried their friend on his bed to the house where Jesus was teaching.'],
    ['r4','But so many people were there that they could not even get to the door!'],
   ]},

  {game:'story', bg:'day', chip:'Through the roof!',
   props:[{id:'house',art:'house',x:420,y:440,s:.85},{id:'hole',art:['house',{hole:true}],x:420,y:440,s:.85,hidden:true},{id:'crowd',art:'crowd',x:420,y:445,s:.8},{id:'str',art:'stretcher',x:420,y:260,s:.6},{id:'pa',art:['sleeper',{robe:'#8C8478'}],x:420,y:245,s:.3}],
   beats:[
    {wiggle:['crowd'],say:['t1','The friends had an idea. They climbed up onto the flat roof! Tap the roof.'],tap:'house'},
    {hide:['house'],show:['hole'],sfx:'pop',say:['t2','They made a hole in the roof, right above Jesus.']},
    {move:{str:[420,420,.6],pa:[420,405,.3]},sfx:'whoosh',say:['t3','Then they let their friend down on his bed with ropes, right in front of Jesus!']},
   ]},

  {game:'story', bg:'church', chip:'Your sins are forgiven',
   props:[{id:'jesus',art:'jesus',x:220,y:440,s:.6},{id:'pa',art:['sleeper',{robe:'#8C8478'}],x:470,y:440,s:.8},{id:'up',art:['seeingMan',{robe:'#8C8478'}],x:470,y:440,s:.55,hidden:true},{id:'bed',art:'bed',x:640,y:440,s:.55,hidden:true}],
   beats:[
    {wiggle:['jesus'],say:['f1','Jesus saw the faith of the four friends. Tap Jesus.'],tap:'jesus'},
    {sfx:'glory',say:['f2','He said to the man: Son, your sins are forgiven.']},
    {wiggle:['jesus'],say:['f3','Then Jesus said: Get up, pick up your bed, and go home. Tap the man.'],tap:'pa'},
    {hide:['pa'],show:['up','bed'],sfx:'glory',fx:'confetti',say:['f4','The man got up and walked out in front of everyone! They all praised God: We have never seen anything like this!']},
   ],
   parent:'<p>Jesus first forgave the man\'s sins, then healed his body, showing He is God (Mark 2:5-12).</p>'},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','Read each sentence. Is it true, or false?'],
   items:[
    {id:'k1',s:'The man had four friends who helped him.',t:true,why:'True! Good friends bring each other to Jesus.',pic:'stretcher'},
    {id:'k2',s:'The friends gave up because of the crowd.',t:false,why:'False. They made a hole in the roof!',pic:['house',{hole:true}]},
    {id:'k3',s:'Jesus forgave the man\'s sins and healed him.',t:true,why:'True! Only God can forgive sins.',pic:'jesus'},
   ],
   done:['tf-done','Great thinking!']},

  {game:'quiz', questions:[
    {id:'q1',q:'How many friends carried the man?',a:[['4',['text',{t:'4',size:64,c:'#24418F'}]],['1',['text',{t:'1',size:64,c:'#24418F'}]]],c:0},
    {id:'q2',q:'How did they get him to Jesus?',a:[['Through the roof',['house',{hole:true}]],['On a camel','camel']],c:0},
    {id:'q3',q:'What did Jesus see in the friends?',a:[['Their faith','heart'],['Their money','table']],c:0},
   ]},
  {game:'song', song:'adinen-geta-hoy-adinen-amlak'},
 ]
});
