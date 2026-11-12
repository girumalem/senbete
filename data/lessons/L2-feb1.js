/* Level II (Grades 1-3), February week 1: Jesus Heals the Nobleman's Son (John 2, 4:46-54) */
BKLesson({
 id:'L2-feb1', title:'Your Son Will Live', am:'ልጅህ በሕይወት አለ', sticker:'jar',
 pages:[
  {game:'cover', bg:'day', title:'Your Son Will Live', am:'ልጅህ በሕይወት አለ',
   props:[{art:'jesus',x:560,y:440,s:.6},{art:['king',{robe:'#24418F',crown:false,beard:'dark'}],x:260,y:440,s:.58}],
   say:['cover','[[selam]]! Jesus did miracles so that people would see and believe. Today a worried father comes to Jesus for help. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, February week 1: <b>Jesus Heals the Nobleman\'s Son</b> (John 2, 4:46-54). Aim: believe the word of Jesus, even before we see.</p><p>Review: Why did Jesus go to the wilderness? How did He answer the tempter?</p>'},

  {game:'read', chip:'Read along', heading:'Back in Cana', pic:'jar',
   paras:[
    ['r1','Jesus did His first miracle at a wedding in Cana. He changed water into wine, after the Virgin Mary told Him they had no wine.'],
    ['r2','Later, Jesus came back to Cana.'],
    ['r3','A royal official lived in another town. His son was very sick, close to death.'],
    ['r4','He believed that Jesus could save his son, so he went to find Him.'],
   ]},

  {game:'story', bg:'day', chip:'Go, your son lives',
   props:[{id:'jesus',art:'jesus',x:560,y:440,s:.6},{id:'no',art:['king',{robe:'#24418F',crown:false,beard:'dark'}],x:260,y:440,s:.58}],
   beats:[
    {wiggle:['no'],say:['s1','The official begged: Sir, come down before my child dies! Tap the official.'],tap:'no'},
    {wiggle:['jesus'],sfx:'glory',say:['s2','Jesus said: Go your way. Your son will live. Tap Jesus.'],tap:'jesus'},
    {move:{no:[60,440,.58]},sfx:'whoosh',say:['s3','The man believed the word of Jesus, and he started for home.']},
   ]},

  {game:'story', bg:'sunrise', chip:'At one o\'clock',
   props:[{art:'tukul',x:640,y:440,s:.7},{id:'no',art:['king',{robe:'#24418F',crown:false,beard:'dark'}],x:200,y:440,s:.58},{id:'serv',art:'man',x:420,y:440,s:.5},{id:'boy',art:['boy',{arms:'up'}],x:560,y:440,s:.7,hidden:true}],
   beats:[
    {wiggle:['serv'],say:['h1','On the way, his servants ran to meet him. Your son is alive! Tap the servant.'],tap:'serv'},
    {say:['h2','When did he get better? the father asked. Yesterday, at one o\'clock, they said.']},
    {show:['boy'],sfx:'glory',say:['h3','That was the very hour Jesus said: Your son will live!']},
    {fx:'confetti',say:['h4','The official and his whole house believed in Jesus.']},
   ],
   parent:'<p>Jesus healed the boy from far away, by His word alone (John 4:50-53).</p>'},

  {game:'blanks', chip:'Fill in the word',
   intro:['blanks-intro','Read the sentence, and tap the missing word.'],
   items:[
    {id:'b1',s:'At Cana, Jesus changed water into ___.',a:'wine',opts:['wine','milk','stone'],pic:'jar'},
    {id:'b2',s:'The official\'s ___ was very sick.',a:'son',opts:['camel','son','king'],pic:'boy'},
    {id:'b3',s:'Jesus said: Go your way. Your son will ___.',a:'live',opts:['sleep','live','run'],pic:'jesus'},
    {id:'b4',s:'The official and his whole house ___ in Jesus.',a:'believed',opts:['believed','forgot','laughed'],pic:'heart'},
   ],
   done:['blanks-done','Well read!']},

  {game:'quiz', questions:[
    {id:'q1',q:'What was Jesus\' first miracle?',a:[['Water into wine','jar'],['Walking on water','boat']],c:0},
    {id:'q2',q:'How did Jesus heal the official\'s son?',a:[['With His word, from far away','jesus'],['With medicine','pot']],c:0},
    {id:'q3',q:'Did the official believe?',a:[['Yes, and his whole house!','heart'],['No','stone']],c:0},
   ]},
  {game:'song', song:'cana-zegelila'},
 ]
});
