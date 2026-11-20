/* Level IV (Grade 7 and up), Lent week 4: The Cry of Bartimaeus (Mark 10:46-52) */
BKLesson({
 id:'L4-len4', title:'The Cry of Bartimaeus', am:'ዓይነ ስውሩ በርጤሜዎስ', sticker:'sun',
 pages:[
  {game:'cover', bg:'desert', title:'The Cry of Bartimaeus', am:'በርጤሜዎስ',
   props:[{art:'blindMan',x:240,y:440,s:.6},{art:'jesus',x:540,y:440,s:.6},{art:'crowd',x:700,y:445,s:.5}],
   say:['cover','[[selam]]! A blind man sat begging by the road. One day, he cried out so loudly that the whole crowd tried to make him stop. Did he stop? Let\'s see.'],
   parent:'<p>This lesson follows Level IV, Lent week 4: <b>The Cry of Bartimaeus</b> (Mark 10:46-52). Aim: learn the importance of persistence in our prayer.</p><p>Talk about it: In Ethiopia we see many people begging. How should we treat them?</p>'},

  {game:'repeat', bg:'desert', chip:'Cry out!',
   props:[{id:'bart',art:'blindMan',x:140,y:440,s:.6},{id:'crowd',art:'crowd',x:620,y:445,s:.7},{id:'jesus',art:'jesus',x:760,y:440,s:.55}],
   button:{label:'Have mercy on me!',art:'heart'},
   intro:['r0','Bartimaeus heard a large crowd passing. Someone said: Jesus of Nazareth is coming! He had heard of Christ\'s miracles, and believed. Tap to cry out with him.'],
   steps:[
    {wiggle:['bart'],say:['r1','Jesus, Son of David, have mercy on me!']},
    {wiggle:['crowd'],say:['r2','The people told him: Be quiet!']},
    {wiggle:['bart'],say:['r3','But he cried out even louder: Son of David, have mercy on me!']},
   ],
   final:{label:'Louder!',art:'heart',prompt:['r4','Once more, as loud as you can!'],move:{jesus:[270,440]},sfx:'glory',say:['r5','Jesus stood still, and said: Call him.']},
   done:['r6','They called him: [[ayzoh]]! Be of good cheer. Rise, He is calling you!']},

  {game:'drag', bg:'desert', chip:'Throw it off',
   props:[{id:'bart',art:['figure',{robe:'#8C8478',sleeve:'#8C8478',beard:'dark',closedEyes:true,arms:'up'}],x:300,y:440,s:.6},{id:'jesus',art:'jesus',x:560,y:440,s:.6}],
   items:[{art:'coat',x:300,y:400,s:.5,to:[90,430,.5]}],
   zone:{x:20,y:330,w:160,h:120},
   intro:['g1','Bartimaeus was so happy that he threw away his cloak and jumped up. Drag his old cloak away.'],
   done:['g2','The old cloak is a sign of his old life. When Christ calls us, we leave our sins behind, and come to Him.']},

  {game:'choose', bg:'desert', chip:'What do you want?',
   props:[{id:'bart',art:['figure',{robe:'#8C8478',sleeve:'#8C8478',beard:'dark',closedEyes:true}],x:300,y:440,s:.6},{id:'see',art:['figure',{robe:'#8C8478',sleeve:'#8C8478',beard:'dark',arms:'up'}],x:300,y:440,s:.6,hidden:true},{id:'jesus',art:'jesus',x:540,y:440,s:.6},{id:'sun',art:'sun',x:400,y:110,s:.6,hidden:true}],
   prompt:['w0','Jesus asked him: What do you want Me to do for you? Every day, Bartimaeus had begged for coins. What did he ask for now?'],
   options:[
    {label:'Some money, Lord',art:'gift',good:false,say:['w1','That is what he used to ask people for. But this was the One who could give what no one else could. Try again.']},
    {label:'Lord, that I may receive my sight',art:'sun',then:{hide:['bart'],show:['see','sun'],fx:'flash'},
     say:['w2','Jesus said: Go your way. Your faith has made you whole. At once he could see, and he followed Jesus on the road.']},
   ]},

  {game:'match', chip:'Lessons from Bartimaeus',
   heading:'Match each lesson to what Bartimaeus did',
   intro:['m0','Match each lesson to what Bartimaeus did.'],
   pairs:[
    ['Persistence in prayer','He kept crying out until Christ heard him'],
    ['Faith','He believed Christ could heal him'],
    ['Knowing what to ask','He asked for sight, not for money'],
    ['Following Christ','He left his cloak and followed Him'],
   ],
   done:['m1','With persistent prayer in faith, what is missing in our life is made whole.']},

  {game:'verse', chip:'Memory verse',
   verse:'Your faith has made you whole.', ref:'Mark 10:52',
   intro:['verse-intro','Our memory verse: Your faith has made you whole. Build it in order.'],
   done:['verse-done','Well done!']},

  {game:'quiz', questions:[
    {id:'q1',q:'In which city did Bartimaeus sit begging?',a:[['Jericho','jericho'],['Bethlehem','stable'],['Nineveh','city']],c:0},
    {id:'q2',q:'What did the crowd tell him?',a:[['Be quiet!','darkCloud'],['Shout louder!','trumpet'],['Go home!','house']],c:0},
    {id:'q3',q:'What did he do after he could see?',a:[['He followed Jesus','jesus'],['He went back to begging','bowl'],['He went to sleep','bed']],c:0},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Have you ever stopped praying for something because the answer did not come quickly? What does Bartimaeus teach you?'],
    ['k2','If Christ asked you: What do you want Me to do for you? what would you ask?'],
    ['k3','What old cloak do you need to throw away to follow Christ more closely?'],
   ]},
 ]
});
