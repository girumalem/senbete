/* Level II (Grades 1-3), Easter season week 3: The Birth of the Virgin Mary (Miracles of Mary; Ginbot 1) */
BKLesson({
 id:'L2-eas3', title:'The Birth of Mariam', am:'ልደታ ለማርያም', sticker:'adeyAbeba',
 pages:[
  {game:'cover', bg:'garden', title:'The Birth of Mariam', am:'ልደታ ለማርያም',
   props:[{art:['figure',{robe:'#F4EEDF',sleeve:'#F4EEDF',beard:'white',halo:true,staff:true}],x:180,y:440,s:.6},{art:['figure',{robe:'#24418F',netela:'#FFFFFF',halo:true,arms:'pray'}],x:600,y:440,s:.6},{art:'baby',x:730,y:400,s:1.4},{art:'adeyAbeba',x:70,y:420,s:.6}],
   say:['cover','[[selam]]! God always hears people who pray and stay faithful. Today we learn how God gave Iyakem and Hanna a precious child, [[mariam]]! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, Easter week 3: <b>The Birth of the Virgin Mary</b> (Miracles of Mary). Aim: learn about the birth of the Virgin Mary. The Church calls her parents Iyakem and Hanna (Joachim and Anna).</p><p>Review: What did Jesus tell the disciples to do when they had caught no fish?</p>'},

  {game:'read', chip:'Read along', heading:'Iyakem and Hanna', pic:['figure',{robe:'#24418F',netela:'#FFFFFF',halo:true,arms:'pray'}],
   paras:[
    ['r1','Iyakem and Hanna had been married for a long time, but they had no child.'],
    ['r2','Some people said unkind things: God did not give them a child because of their sin.'],
    ['r3','But Iyakem and Hanna were faithful. They kept praying to God, and they never lost hope.'],
   ]},

  {game:'story', bg:'garden', chip:'Good news from an angel',
   props:[{id:'jo',art:['figure',{robe:'#F4EEDF',sleeve:'#F4EEDF',beard:'white',halo:true,staff:true}],x:520,y:440,s:.6},{id:'an',art:['figure',{robe:'#24418F',netela:'#FFFFFF',halo:true,arms:'pray'}],x:670,y:440,s:.6},{id:'glow',art:'glory',x:240,y:300,s:1,hidden:true},{id:'angel',art:'angel',x:240,y:430,s:.6,hidden:true}],
   beats:[
    {wiggle:['jo'],say:['a1','One day Iyakem was praying. Tap Iyakem.'],tap:'jo'},
    {show:['glow','angel'],sfx:'glory',say:['a2','An angel of the Lord came and said: God will give you a precious child!']},
    {wiggle:['an'],say:['a3','Iyakem told Hanna the good news, and it happened just as the angel said. Tap Hanna.'],tap:'an'},
   ]},

  {game:'story', bg:'garden', chip:'A miracle for the aunt',
   props:[{id:'an',art:['figure',{robe:'#24418F',netela:'#FFFFFF',halo:true}],x:300,y:440,s:.6},{id:'aunt',art:['woman',{robe:'#8C8478',netela:'#F4EEDF'}],x:500,y:440,s:.55},{id:'sp',art:'sparkles',x:500,y:250,s:.8,hidden:true},{id:'crowd',art:'crowd',x:700,y:445,s:.7,hidden:true}],
   beats:[
    {wiggle:['aunt'],say:['m1','Hanna had an aunt who could see with only one eye.']},
    {wiggle:['aunt'],say:['m2','The aunt gently touched Hanna, then touched her blind eye with the same hand. Tap the aunt.'],tap:'aunt'},
    {show:['sp'],sfx:'glory',say:['m3','At once she could see with both eyes! The baby inside Hanna was holy.']},
    {show:['crowd'],say:['m4','Many sick people came and were healed too. But the leaders became jealous.']},
   ],
   parent:'<p>This account comes from the Miracles of Mary (Taamra Mariam), read in the Ethiopian Church.</p>'},

  {game:'story', bg:'mountain', chip:'Born on Ginbot 1',
   props:[{id:'jo',art:['figure',{robe:'#F4EEDF',sleeve:'#F4EEDF',beard:'white',halo:true,staff:true}],x:220,y:440,s:.6},{id:'an',art:['figure',{robe:'#24418F',netela:'#FFFFFF',halo:true,arms:'pray'}],x:580,y:440,s:.6},{id:'glow',art:'glory',x:400,y:330,s:1,hidden:true},{id:'baby',art:'baby',x:400,y:395,s:1.8,hidden:true}],
   beats:[
    {say:['b1','The jealous leaders made Iyakem and Hanna go away, to a place called Mount Lebanon.']},
    {show:['glow','baby'],sfx:'glory',say:['b2','There, on the first day of Ginbot, Hanna gave birth to a lovely baby girl! Tap the baby.'],tap:'baby'},
    {wiggle:['baby'],fx:'confetti',say:['b3','They named her [[mariam]]. She grew up in God\'s temple, and God chose her to be the mother of Jesus.']},
   ],
   parent:'<p>Lideta Le Mariam is celebrated on Ginbot 1 (May 9).</p>'},

  {game:'puzzle', chip:'Word puzzle',
   intro:['puzzle-intro','Word puzzle! Read the clue, then tap the letters to spell the answer.'],
   items:[
    {id:'w1',clue:'The father of [[mariam]] is …',word:'Iyakem',pic:['figure',{robe:'#F4EEDF',sleeve:'#F4EEDF',beard:'white',halo:true,staff:true}]},
    {id:'w2',clue:'The mother of [[mariam]] is …',word:'Hanna',pic:['figure',{robe:'#24418F',netela:'#FFFFFF',halo:true,arms:'pray'}]},
    {id:'w3',clue:'An … told Iyakem the good news.',word:'angel',pic:'angel'},
    {id:'w4',clue:'Iyakem and Hanna … to God for a child.',word:'prayed',pic:'glory'},
    {id:'w5',clue:'They were sent away to Mount …',word:'Lebanon',pic:'acacia'},
   ],
   done:['puzzle-done','You solved the puzzle!']},

  {game:'quiz', questions:[
    {id:'q1',q:'What did Iyakem and Hanna do while they waited?',a:[['They kept praying','glory'],['They gave up','bed']],c:0},
    {id:'q2',q:'Whose eye was healed?',a:[['Hanna\'s aunt',['woman',{robe:'#8C8478',netela:'#F4EEDF'}]],['A shepherd','shepherd']],c:0},
    {id:'q3',q:'When is [[mariam]]\'s birthday?',a:[['Ginbot 1','adeyAbeba'],['Meskerem 17','demera']],c:0},
   ]},
  {game:'song', song:'misraqe-misraqat-mutsa-a-tse'},
 ]
});
