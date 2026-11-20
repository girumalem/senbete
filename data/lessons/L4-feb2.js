/* Level IV (Grade 7 and up), February week 2: The Prodigal Son (Luke 15:11-32) */
BKLesson({
 id:'L4-feb2', title:'The Prodigal Son', am:'የጠፋው ልጅ', sticker:'heart',
 pages:[
  {game:'cover', bg:'field', title:'The Prodigal Son', am:'የጠፋው ልጅ',
   props:[{art:['figure',{robe:'#6A3A8A',beard:'white',arms:'out'}],x:280,y:440,s:.6},{art:['figure',{kind:'teen',robe:'#8C8478',sleeve:'#8C8478'}],x:480,y:440,s:.6},{art:'tukul',x:660,y:430,s:.6}],
   say:['cover','[[selam]]! Many young people can\'t wait to leave home and be free. Our Lord told a story about a son who did exactly that. Let\'s see what happened.'],
   parent:'<p>This lesson follows Level IV, February week 2: <b>The Prodigal Son</b> (Luke 15). Aim: learn about God\'s love.</p><p>"Prodigal" means wasteful.</p>'},

  {game:'repeat', bg:'egypt', chip:'Far from home',
   props:[{id:'son',art:['figure',{kind:'teen',robe:'#B3322A',sleeve:'#E2A62B',band:'#E2A62B'}],x:130,y:440,s:.6},{id:'tab',art:'table',x:640,y:440,s:.9},{id:'f1',art:'man',x:215,y:440,s:.5},{id:'f2',art:'woman',x:560,y:440,s:.5},{id:'f3',art:['figure',{robe:'#24418F'}],x:740,y:440,s:.5},{id:'empty',art:['table',{coins:false}],x:640,y:440,s:.9,hidden:true}],
   button:{label:'Spend it!',art:'gift'},
   intro:['w0','The younger son said: Father, give me my share. He took it and went to a far country. Tap to see how he lived.'],
   steps:[
    {wiggle:['f1','f2','f3'],say:['w1','He threw parties for his new friends.']},
    {wiggle:['son'],say:['w2','He bought whatever he wanted.']},
    {hide:['tab'],show:['empty'],move:{f1:[950,440],f2:[1050,440],f3:[1150,440]},say:['w3','Then the money was gone, and so were all his friends.']},
   ],
   done:['w4','A famine came on that land, and he had nothing to eat.']},

  {game:'choose', bg:'field', chip:'Among the pigs',
   props:[{id:'son',art:['figure',{kind:'teen',robe:'#8C8478',sleeve:'#8C8478'}],x:250,y:440,s:.6},{id:'p1',art:'pig',x:470,y:440,s:.6},{id:'p2',art:'pig',x:620,y:445,s:.55,flip:true}],
   prompt:['c0','The only job he found was feeding pigs. He was so hungry that even the pigs\' food looked good. He thought: My father\'s servants have more than enough bread! What should he do?'],
   options:[
    {label:'Stay here. I am too ashamed to go back.',art:'pig',good:false,say:['c1','Shame keeps many people far from God. But the door is still open. Try again.']},
    {label:'Go home and say: Father, I have sinned.',art:'tukul',then:{move:{son:[-100,440]}},
     say:['c2','He came to himself and said: I will arise and go to my father, and say: Father, I have sinned against heaven and before you. I am no longer worthy to be called your son. Make me one of your servants.']},
   ]},

  {game:'story', bg:'field', chip:'The father runs',
   props:[{id:'dad',art:['figure',{robe:'#6A3A8A',beard:'white',arms:'out'}],x:620,y:440,s:.6},{id:'home',art:'tukul',x:720,y:430,s:.6},{id:'son',art:['figure',{kind:'teen',robe:'#8C8478',sleeve:'#8C8478'}],x:120,y:440,s:.6},
    {id:'robe',art:['figure',{kind:'teen',robe:'#E2A62B',sleeve:'#B3322A',band:'#24418F'}],x:400,y:440,s:.6,hidden:true},{id:'heart',art:'heart',x:400,y:200,s:.6,hidden:true}],
   beats:[
    {say:['f1','His father had been watching the road every day since he left. He saw his son a long way off. Tap the father.'],tap:'dad'},
    {move:{dad:[470,440],son:[340,440]},sfx:'whoosh',say:['f2','He ran to him, threw his arms around him and kissed him.']},
    {say:['f3','The son said: Father, I have sinned against heaven and before you. Tap the son.'],tap:'son'},
    {hide:['son'],show:['robe','heart'],sfx:'glory',say:['f4','But the father said: Bring the best robe, a ring for his hand and sandals for his feet. Let us feast, for this my son was dead and is alive again; he was lost and is found!']},
   ]},

  {game:'match', chip:'What it means',
   heading:'Match each part of the parable to its meaning',
   intro:['m0','Match each part of the parable to what it means.'],
   pairs:[
    ['The father','God, who waits for us to come home'],
    ['The far country','Life away from God'],
    ['Feeding the pigs','Where sin leaves us: empty and hungry'],
    ['Father, I have sinned','Confession: admitting our sins'],
    ['The robe and ring','God gives back our honor as His children'],
   ],
   done:['m1','Christ said: There is joy in the presence of the angels of God over one sinner who repents.']},

  {game:'verse', chip:'Memory verse',
   verse:'He was lost, and is found.', ref:'Luke 15:24',
   intro:['verse-intro','Our memory verse: He was lost, and is found. Build it in order.'],
   done:['verse-done','Short, and full of joy!']},

  {game:'quiz', questions:[
    {id:'q1',q:'What does prodigal mean?',a:[['Wasteful','gift'],['Brave','lion'],['Wise','bible']],c:0},
    {id:'q2',q:'Did his new friends stay with him?',a:[['No, they left when the money was gone','crowd'],['Yes, they helped him home','tukul'],['They came to the feast','table']],c:0},
    {id:'q3',q:'Does God hate sinners?',a:[['No. He waits for them to repent and come home','heart'],['Yes, always','darkCloud'],['Only some','cloud']],c:0},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Why did the younger son want to leave home? Are those reasons still around today?'],
    ['k2','What makes it hard to say: I have sinned? Who in the Church helps us confess?','In our Church we confess to our father of confession, our yenefs abat.'],
    ['k3','The father did not shout or punish. He ran and hugged. What does that tell you about God?'],
   ]},
 ]
});
