/* Level II (Grades 1-3), Lent week 2: Healing the Man Born Blind (John 9) */
BKLesson({
 id:'L2-len2', title:'Now I Can See!', am:'አሁን አያለሁ', sticker:'pool',
 pages:[
  {game:'cover', bg:'day', title:'Now I Can See!', am:'አሁን አያለሁ',
   props:[{art:'pool',x:680,y:430,s:.7},{art:'jesus',x:200,y:440,s:.6},{art:'seeingMan',x:560,y:440,s:.55}],
   say:['cover','[[selam]]! Today we read about a man who was born blind, and what happened when he met Jesus. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, Lent week 2: <b>Healing the Blind</b> (John 9). Aim: Jesus is the light of the world. The man believed and worshipped Him.</p>'},

  {game:'read', chip:'Read along', heading:'Who sinned?', pic:'blindMan',
   paras:[
    ['r1','Jesus and His disciples saw a man who had been blind since he was born.'],
    ['r2','The disciples asked: Who sinned, this man or his parents, that he was born blind?'],
    ['r3','Jesus said: Not because of his sin, or his parents. It is so that the work of God can be shown in him.'],
   ]},

  {game:'story', bg:'day', chip:'Mud and water',
   props:[{art:'pool',x:640,y:430,s:.8},{id:'jesus',art:'jesus',x:200,y:440,s:.6},{id:'man',art:'blindMan',x:360,y:440,s:.55},{id:'seeing',art:'seeingMan',x:640,y:440,s:.55,hidden:true}],
   beats:[
    {wiggle:['jesus'],say:['m1','Jesus made a little mud and put it on the man\'s eyes. Tap Jesus.'],tap:'jesus'},
    {say:['m2','He said: Go and wash in the pool of [[siloam]]. Tap the man to help him go.'],tap:'man'},
    {move:{man:[600,440,.55]},sfx:'whoosh',say:['m3','The man went and washed his eyes in the pool.']},
    {hide:['man'],show:['seeing'],sfx:'glory',fx:'confetti',say:['m4','He came back seeing! For the first time in his life, he could see!']},
   ]},

  {game:'story', bg:'day', chip:'I believe!',
   props:[{id:'ph',art:['priest',{arms:'out'}],x:150,y:440,s:.55},{id:'man',art:'seeingMan',x:400,y:440,s:.55},{id:'jesus',art:'jesus',x:640,y:440,s:.6,hidden:true}],
   beats:[
    {wiggle:['ph'],say:['b1','Some leaders did not like it. They asked: Who healed you? He is a sinner!']},
    {wiggle:['man'],say:['b2','The man said: I only know one thing. I was blind, and now I see! Tap him.'],tap:'man'},
    {show:['jesus'],sfx:'glory',say:['b3','Later Jesus found him and asked: Do you believe in the Son of God?']},
    {fx:'confetti',say:['b4','The man said: Lord, I believe! And he worshipped Jesus.']},
   ],
   parent:'<p>"One thing I know, that, whereas I was blind, now I see." (John 9:25)</p>'},

  {game:'order', chip:'What happened first?',
   intro:['order','Tap the pictures in the order they happened.'],
   cards:[
    {art:'blindMan',cap:'He was born blind'},
    {art:'jesus',cap:'Jesus put mud on his eyes'},
    {art:'pool',cap:'He washed in the pool'},
    {art:'seeingMan',cap:'He could see!'},
   ],
   done:['order-done','That is the whole story!']},

  {game:'quiz', questions:[
    {id:'q1',q:'Why was the man born blind?',a:[['So God\'s work could be shown','glory'],['Because of his sin','stone']],c:0},
    {id:'q2',q:'Where did he wash his eyes?',a:[['In the pool of Siloam','pool'],['In the sea','fish']],c:0},
    {id:'q3',q:'Did he believe in Jesus?',a:[['Yes, and he worshipped Him','heart'],['No','stone']],c:0},
   ]},
  {game:'song', song:'tenageru-dink-sirawin-meskir'},
 ]
});
