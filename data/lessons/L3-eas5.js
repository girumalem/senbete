/* Level III (Grades 4-6), Easter season week 5: Jesus Commissions Peter (John 21:1-19; John 21:17) */
BKLesson({
 id:'L3-eas5', title:'Do You Love Me?', am:'ትወደኛለህን', sticker:'sheep',
 pages:[
  {game:'cover', bg:'field', title:'Do You Love Me?', am:'ትወደኛለህን',
   props:[{art:'jesus',x:640,y:440,s:.6},{art:'peter',x:160,y:440,s:.55},{art:'sheep',x:730,y:445,s:.4}],
   say:['cover','[[selam]]! Three times Jesus asked [[petros]] one question: Do you love Me? Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, Easter week 5: <b>Jesus Commissions Peter</b> (John 21:15-19). Aim: learn to confess our love for Christ in words and in deeds.</p><p>Talk about it: How can we show Jesus we love Him at church and at home?</p>'},

  {game:'read', chip:'Read', heading:'Breakfast on the shore', pic:'fish',
   paras:[
    ['r1','After His resurrection, Jesus appeared to the disciples a third time. They had fished all night and caught nothing.'],
    ['r2','In the morning, Jesus told them to throw the net on the right side of the boat. They caught so many fish they could not pull in the net!'],
    ['r3','On the shore, Jesus blessed bread and fish and gave them breakfast.'],
   ]},

  {game:'story', bg:'field', chip:'Three questions',
   props:[{id:'jesus',art:'jesus',x:300,y:440,s:.6},{id:'peter',art:'peter',x:520,y:440,s:.58},{id:'l1',art:'sheep',x:680,y:445,s:.35,hidden:true},{id:'l2',art:'sheep',x:740,y:440,s:.4,hidden:true},{id:'l3',art:'sheep',x:620,y:440,s:.4,hidden:true}],
   beats:[
    {wiggle:['jesus'],say:['q1s','After breakfast, Jesus asked: Simon, son of Jonah, do you love Me more than these? Tap Peter to answer.'],tap:'peter'},
    {show:['l1'],sfx:'pop',say:['q1a','Peter said: Yes, Lord, You know that I love You. Jesus said: Feed My lambs.']},
    {wiggle:['jesus'],say:['q2s','Jesus asked again: Simon, do you love Me? Tap Peter.'],tap:'peter'},
    {show:['l2'],sfx:'pop',say:['q2a','Yes, Lord, You know that I love You. Jesus said: Tend My sheep.']},
    {wiggle:['jesus'],say:['q3s','A third time Jesus asked: Do you love Me? Peter was sad that He asked three times. Tap Peter.'],tap:'peter'},
    {show:['l3'],sfx:'glory',say:['q3a','Lord, You know all things. You know that I love You. Jesus said: Feed My sheep.']},
   ],
   parent:'<p>Peter had denied Jesus three times. Now, three times, he confessed his love, and Jesus restored him as shepherd of His flock.</p>'},

  {game:'read', chip:'Read', heading:'A faithful shepherd', pic:'sheep',
   paras:[
    ['r4','Jesus already knew Peter loved Him. But He wanted Peter to say it with his mouth.'],
    ['r5','For the rest of his life, Peter shepherded the Church and witnessed to Jesus\' life, death and resurrection. He died as a martyr in Rome.'],
    ['r6','We confess our love when we praise God in prayer and song. We show it when we get up early for church, listen in Sunday school, keep God\'s house clean, and are kind to others.'],
   ]},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Jesus asked Peter the same question three times.',t:true,why:'Do you love Me?',pic:['text',{t:'3',size:64,c:'#24418F'}]},
    {id:'t2',s:'Jesus asked because He did not know the answer.',t:false,why:'He knew, but wanted Peter to confess his love.',pic:'heart'},
    {id:'t3',s:'Peter became a shepherd of the Church.',t:true,why:'Feed My sheep meant caring for God\'s people.',pic:'sheep'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'Jesus said: Feed My ___.',a:'lambs',opts:['fish','camels']},
    {id:'f2',s:'Peter was the son of ___.',a:'Jonah',opts:['Joseph','Zechariah']},
    {id:'f3',s:'Peter died as a martyr in ___.',a:'Rome',opts:['Egypt','Bethlehem']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'Lord, You know all things; You know that I love You. Jesus said to him, Feed My sheep.', ref:'John 21:17',
   chunks:['Lord, You know all things;','You know that I love You.','Jesus said to him,','Feed My sheep.'],
   intro:['verse-intro','Our memory verse is from the Gospel of John. Listen: Lord, You know all things; You know that I love You. Jesus said to him, Feed My sheep. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'What did Jesus ask Peter?',a:[['Do you love Me?','heart'],['Are you hungry?','fish'],['Can you swim?','waterWall']],c:0},
    {id:'q2',q:'What did Jesus want Peter to do?',a:[['Care for His people','sheep'],['Catch more fish','net'],['Build a boat','boat']],c:0},
    {id:'q3',q:'How can we show our love for Jesus?',a:[['Pray, sing, and be kind','church'],['Stay home and sleep','bed'],['Keep our toys','gift']],c:0},
   ]},
 ]
});
