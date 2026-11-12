/* Level I, February week 2: Jesus Heals the Blind (John 9) */
BKLesson({
 id:'L1-feb2', title:'Jesus Heals the Blind Man', am:'ዕውሩ ዐየ', sticker:'pool',
 pages:[
  {game:'cover', bg:'garden', title:'Jesus Heals the Blind Man', am:'ዕውሩ ዐየ',
   props:[{art:'jesus',x:300,y:425,s:.65},{art:'blindMan',x:500,y:425,s:.62}],
   say:['cover','[[selam]]! We saw two miracles of Jesus: water into wine, and the big catch of fish. Today we learn about another one. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, February week 2: <b>Jesus Heals the Blind</b> (John 9). Aim: know Jesus Christ through His miracles.</p>'},

  {game:'story', bg:'day', chip:'A man who could not see',
   props:[{id:'jesus',art:'jesus',x:200,y:425,s:.62},{id:'d1',art:'peter',x:90,y:430,s:.52},{id:'man',art:'blindMan',x:560,y:425,s:.62},{id:'bowl',art:'bowl',x:650,y:430,s:.6}],
   beats:[
    {say:['b1','There was a man who was born blind. He had never seen anything. Tap the man.'],tap:'man'},
    {wiggle:['man'],say:['b2','He sat by the road and asked people for help.']},
    {wiggle:['d1'],say:['b3','The disciples asked Jesus: whose fault is it that he was born blind?']},
    {wiggle:['jesus'],say:['b4','Jesus said: it is nobody\'s fault. God\'s wonderful work will be shown in him!']},
   ],
   parent:'<p>Jesus said the man was not born blind because of his own sin or his parents\' sin, "but so that the work of God may be revealed through him."</p>'},

  {game:'story', bg:'day', chip:'Mud on his eyes',
   props:[{id:'jesus',art:'jesus',x:320,y:425,s:.65},{id:'man',art:'blindMan',x:480,y:425,s:.65},{id:'mud',art:['stone',{}],x:400,y:430,s:.3}],
   beats:[
    {say:['m1','Jesus bent down and made a little mud. Tap the ground to see!'],tap:'mud'},
    {wiggle:['man'],sfx:'sparkle',say:['m2','He put the mud on the man\'s eyes, and said: go and wash in the pool of [[siloam]].']},
   ]},

  {game:'drag', bg:'day', chip:'Go and wash',
   props:[{art:'pool',x:600,y:420,s:1}],
   zone:{x:450,y:300,w:300,h:150},
   items:[{art:'blindMan',x:150,y:425,s:.6,to:[600,425,.6]}],
   intro:['go','Help the man walk to the pool of [[siloam]]. Drag him to the water!'],
   done:['go-done','He washed his eyes in the pool, just as Jesus said.']},

  {game:'story', bg:'day', chip:'He can see!',
   props:[{art:'pool',x:600,y:430,s:1},{id:'blind',art:'blindMan',x:560,y:425,s:.62},{id:'see',art:'seeingMan',x:560,y:425,s:.62,hidden:true},{id:'sp',art:'sparkles',x:560,y:250,s:1.3,hidden:true}],
   beats:[
    {hide:['blind'],show:['see','sp'],fx:'flash',sfx:'glory',say:['s1','And he came back seeing! For the first time in his life, he could see!']},
    {fx:'confetti',say:['s2','He could see the sky, the trees and the faces of the people. Thank God! [[egziabher-yimesgen]]!']},
   ]},

  {game:'find', bg:'garden', chip:'What can he see?',
   props:[{art:'seeingMan',x:90,y:425,s:.55}],
   spots:[{x:260,y:370,art:'bird',s:1.3,say:['f1','A bird!']},{x:430,y:380,art:'adeyAbeba',s:.9,say:['f2','A yellow flower!']},{x:610,y:370,art:'sheep',s:.45,say:['f3','A sheep!']}],
   intro:['find','Now the man can see everything! Tap the bushes to see what he sees.'],
   done:['find-done','What a beautiful world God made!']},

  {game:'story', bg:'day', chip:'Telling everyone',
   props:[{id:'crowd',art:'crowd',x:220,y:420,s:1},{id:'man',art:'seeingMan',x:520,y:425,s:.62}],
   beats:[
    {wiggle:['crowd'],say:['t1','The people were amazed. Is this the blind man who used to sit by the road? Tap the people!'],tap:'crowd'},
    {wiggle:['man'],say:['t2','He said: yes, it is me! A man called Jesus put mud on my eyes, I washed, and now I can see! Tap him.'],tap:'man'},
   ],
   parent:'<p>The healed man told everyone what Jesus had done for him. Ask: what would you tell people if Jesus did this for you?</p>'},

  {game:'quiz', questions:[
    {id:'q1',q:'What was wrong with the man?',a:[['He could not see','blindMan'],['He was hungry','bowl'],['He was lost',['text',{t:'Lost',size:50,c:'#24418F'}]]],c:0},
    {id:'q2',q:'What did Jesus put on his eyes?',a:[['Mud','stone'],['Water',['jar',{fill:'#5AA0D8'}]],['A flower','adeyAbeba']],c:0},
    {id:'q3',q:'Where did the man wash?',a:[['In a pool','pool'],['In the sea','boat'],['In a pot','pot']],c:0},
    {id:'q4',q:'What happened after he washed?',a:[['He fell asleep','bed'],['He could see!','seeingMan'],['He went fishing','fish']],c:1},
   ]},
  {game:'song', song:'tenageru-dink-sirawin-meskir'},
 ]
});
