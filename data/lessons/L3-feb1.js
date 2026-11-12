/* Level III (Grades 4-6), February week 1: The First Disciples (Matthew 4; Mark 1; Luke 5; John 1; John 1:29) */
BKLesson({
 id:'L3-feb1', title:'Come and See', am:'መጥታችሁ እዩ', sticker:'net',
 pages:[
  {game:'cover', bg:'sea', title:'Come and See', am:'መጥታችሁ እዩ',
   props:[{art:'boat',x:640,y:330,s:1.1},{art:'peter',x:610,y:313,s:.38},{art:'disciple',x:680,y:313,s:.38},{art:'jesus',x:170,y:440,s:.6}],
   say:['cover','[[selam]]! How did Jesus choose His first disciples? It all began with three words: Come and see. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, February week 1: <b>The First Disciples</b> (John 1; Luke 5). Aim: learn how the first disciples were called, and how they brought others to Jesus.</p><p>Talk about it: Andrew and Philip told others about Jesus. Who could you tell?</p>'},

  {game:'read', chip:'Read', heading:'Behold the Lamb of God', pic:'johnBaptist',
   paras:[
    ['r1','John the Baptist had been teaching that someone greater than him was coming. When he saw Jesus, he said: Behold the Lamb of God!'],
    ['r2','The next day he said it again, and two of John\'s own disciples followed Jesus. Jesus turned and asked: What do you seek?'],
    ['r3','They said: Teacher, where are You staying? He answered: Come and see. They went with Him and stayed with Him. They were Andrew and John.'],
    ['r4','Andrew ran to his brother Simon: We have found the Messiah! Jesus later named Simon Peter.'],
   ]},

  {game:'story', bg:'sea', chip:'Fishers of men',
   props:[{id:'boat',art:'boat',x:300,y:330,s:1.2},{id:'peter',art:'peter',x:260,y:313,s:.4},{id:'and',art:'disciple',x:340,y:313,s:.4},{id:'jesus',art:'jesusWalk',x:640,y:320,s:.5},{id:'net',art:'net',x:470,y:410,s:.7},{id:'full',art:['net',{full:true}],x:470,y:410,s:.8,hidden:true}],
   beats:[
    {say:['s1','Peter and Andrew had fished all night and caught nothing.']},
    {wiggle:['jesus'],say:['s2','Jesus told them: Throw your net into the water. Tap the net.'],tap:'net'},
    {hide:['net'],show:['full'],sfx:'pop',say:['s3','They caught so many fish that the net began to tear! They called their partners, James and John, to help.']},
    {wiggle:['jesus'],sfx:'glory',say:['s4','Jesus said: Follow Me, and I will make you fishers of men. And they left everything and followed Him.']},
   ]},

  {game:'read', chip:'Read', heading:'Philip and Nathanael', pic:'acacia',
   paras:[
    ['r5','The next day, Jesus said to Philip: Follow Me. And Philip did.'],
    ['r6','Philip found Nathanael and said: We have found Him of whom Moses and the prophets wrote: Jesus of Nazareth! Come and see. So Nathanael also became a disciple.'],
   ]},

  {game:'match', chip:'Who called whom?', heading:'Match each disciple to the one he brought',
   intro:['match-intro','The disciples brought others to Jesus. Tap a disciple, then tap the person he brought.'],
   pairs:[['Andrew','his brother Simon Peter',null,'peter'],['Philip','Nathanael',null,['disciple',{robe:'#8A5A30',beard:'dark'}]],['John the Baptist','Andrew and John',null,'disciple']],
   done:['match-done','Good news is for sharing!']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Andrew and John were first disciples of John the Baptist.',t:true,why:'They followed Jesus when John pointed to Him.',pic:'johnBaptist'},
    {id:'t2',s:'The first four disciples were all farmers.',t:false,why:'Peter, Andrew, James and John were fishermen.',pic:'boat'},
    {id:'t3',s:'Jesus said: I will make you fishers of men.',t:true,why:'They would bring people to God.',pic:'net'},
   ],
   done:['tf-done','Well done!']},

  {game:'verse', chip:'Memory verse',
   verse:'Behold the Lamb of God, who takes away the sin of the world!', ref:'John 1:29',
   chunks:['Behold the Lamb of God,','who takes away','the sin of the world!'],
   intro:['verse-intro','This month\'s memory verse is from the Gospel of John. Listen: Behold the Lamb of God, who takes away the sin of the world! Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who did Andrew bring to Jesus?',a:[['His brother Simon Peter','peter'],['King Herod','king'],['Moses','moses']],c:0},
    {id:'q2',q:'What did Jesus say to the two disciples?',a:[['Come and see','sandals'],['Go away','door'],['Be quiet','bed']],c:0},
    {id:'q3',q:'What were Peter, Andrew, James and John?',a:[['Fishermen','boat'],['Soldiers','soldier'],['Kings','king']],c:0},
   ]},
 ]
});
