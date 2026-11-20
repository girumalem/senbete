/* Level IV (Grade 7 and up), Easter season week 5: The Bread of Life (John 6) */
BKLesson({
 id:'L4-eas5', title:'The Bread of Life', am:'የሕይወት እንጀራ', sticker:'bread',
 pages:[
  {game:'cover', bg:'lake', title:'The Bread of Life', am:'የሕይወት እንጀራ',
   props:[{art:'bread',x:330,y:430,s:.8},{art:'fish',x:480,y:430,s:.5},{art:'cup',x:600,y:430,s:.6},{art:'jesus',x:160,y:440,s:.6}],
   say:['cover','[[selam]]! Christ fed five thousand people with a little bread and fish. But then He told them about a different bread, one that gives everlasting life. What is it?'],
   parent:'<p>This lesson follows Level IV, Easter season week 5: <b>The Bread of Life</b> (John 6). Aim: learn the importance of receiving the Body and Blood of Christ.</p><p>Talk about it: when did your child last receive Holy Communion? How does your family prepare?</p>'},

  {game:'repeat', bg:'field', chip:'Five loaves, two fish',
   props:[{id:'jesus',art:'jesus',x:180,y:440,s:.55},{id:'boy',art:'boy',x:540,y:440,s:.45},{id:'bread',art:'bread',x:540,y:360,s:.35},{id:'c1',art:'crowd',x:60,y:445,s:.55},{id:'c2',art:'crowd',x:730,y:445,s:.55},
    {id:'b1',art:'basket',x:600,y:440,s:.35,hidden:true},{id:'b2',art:'basket',x:650,y:440,s:.35,hidden:true},{id:'b3',art:'basket',x:625,y:410,s:.35,hidden:true}],
   button:{label:'Bless and share',art:'bread'},
   intro:['l0','By the Sea of Galilee, a huge crowd followed Christ. There were only five loaves of bread and two fish. Tap to see what He did.'],
   steps:[
    {wiggle:['jesus'],say:['l1','He took the bread, gave thanks, and blessed it.']},
    {wiggle:['c1','c2'],say:['l2','The disciples shared it out. Five thousand men ate, and all were filled.']},
    {show:['b1','b2','b3'],say:['l3','And twelve baskets of pieces were left over!']},
   ],
   done:['l4','That night, Christ and His disciples went by boat to Capernaum. In the morning, the crowd sailed after Him.']},

  {game:'story', bg:'egypt', chip:'Why do you seek Me?',
   props:[{id:'jesus',art:'jesus',x:580,y:440,s:.6},{id:'crowd',art:'crowd',x:200,y:445,s:.65},{id:'bread',art:'bread',x:380,y:380,s:.5,hidden:true}],
   beats:[
    {say:['s1','When they found Him in Capernaum, Christ said: You seek Me because you ate the bread and were filled. Tap the crowd.'],tap:'crowd'},
    {show:['bread'],say:['s2','Do not work for food that spoils, but for the food that lasts to everlasting life, which I will give you.']},
    {say:['s3','They asked: What must we do, to do the works of God? He answered: This is the work of God, that you believe in Him whom He sent.']},
    {wiggle:['crowd'],say:['s4','He said: My Father gives you the true bread from heaven. They cried: Lord, give us this bread always!']},
   ]},

  {game:'read', auto:false, chip:'Read', heading:'I am the Bread of Life', pic:'bread',
   intro:['read-intro','Read what Christ taught them. Tap any paragraph to hear it.'],
   paras:[
    ['r1','*I am the bread of life.* He who comes to Me shall never hunger, and he who believes in Me shall never thirst.'],
    ['r2','*Not like the manna.* Your fathers ate the manna in the wilderness, and died. I am the living bread which came down from heaven. If anyone eats this bread, he will live forever.'],
    ['r3','*My flesh and My blood.* The bread that I shall give is My flesh, for the life of the world. Whoever eats My flesh and drinks My blood has eternal life, and I will raise him up at the last day.'],
    ['r4','*Abide in Me.* He who eats My flesh and drinks My blood abides in Me, and I in him.'],
   ]},

  {game:'choose', bg:'egypt', chip:'Will you also go away?',
   props:[{id:'jesus',art:'jesus',x:400,y:440,s:.6},{id:'pet',art:'peter',x:600,y:440,s:.6},{id:'away',art:'crowd',x:150,y:445,s:.6}],
   prompt:['c0','Many said: This is a hard teaching. Who can accept it? And they turned back. Christ asked the Twelve: Do you also want to go away? What did Peter answer?'],
   options:[
    {label:'Yes, it is too hard to understand',art:'darkCloud',good:false,then:{move:{away:[-100,445]}},say:['c1','Many people left. But Peter did not. Try again.']},
    {label:'Lord, to whom shall we go? You have the words of eternal life',art:'heart',then:{wiggle:['pet']},
     say:['c2','Peter said: We believe and know that You are the Christ, the Son of the living God. Even when we do not understand everything, faith like Peter\'s brings understanding in time.']},
   ]},

  {game:'match', chip:'Two kinds of bread',
   heading:'Match each one to what it means',
   intro:['m0','Match each one to what it means.'],
   pairs:[
    ['Manna','Bread in the wilderness. Those who ate it still died'],
    ['The Bread of Life','Christ Himself, who gives everlasting life'],
    ['The Last Supper','Where the disciples first received His Body and Blood'],
    ['Capernaum','Where Christ taught about the Bread of Life'],
    ['Holy Communion','Receiving His Body and Blood in the Kidase'],
   ],
   done:['m1','At the Last Supper, He blessed the bread and the cup, changed them into His Body and Blood, and gave them to the disciples. Because they stayed with Him, they were the first to receive it.']},

  {game:'verse', chip:'Memory verse',
   verse:'Unless you eat the flesh of the Son of Man and drink His blood, you have no life in you.', ref:'John 6:53',
   chunks:['Unless you eat','the flesh of the Son of Man','and drink His blood,','you have no life in you.'],
   intro:['verse-intro','Our memory verse: Unless you eat the flesh of the Son of Man and drink His blood, you have no life in you. Build it in order.'],
   done:['verse-done','Holy Communion gives us life, eternal life, and keeps us in Christ, and Christ in us.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Why was the crowd looking for Christ in Capernaum?',a:[['He had fed them and they were filled','bread'],['They wanted to be baptized','raindrop'],['They wanted to go fishing','fish']],c:0},
    {id:'q2',q:'What is the true bread of life?',a:[['Christ, His Body and Blood','cup'],['The manna','manna'],['The five loaves','basket']],c:0},
    {id:'q3',q:'Who were the first to receive the Body and Blood of Christ?',a:[['The disciples, at the Last Supper','table'],['The crowd in Capernaum','crowd'],['Moses in the wilderness','moses']],c:0},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Christ said: Unless you eat My flesh and drink My blood, you have no life in you. What happens to us if we stay away from Holy Communion for a long time?'],
    ['k2','Peter stayed even when the teaching was hard. Is there something about our faith that you find hard to understand? Who could you ask?'],
    ['k3','How can you prepare your heart for Holy Communion?','Fast, confess, forgive others, and come early to the [[kidase]].'],
   ]},
 ]
});
