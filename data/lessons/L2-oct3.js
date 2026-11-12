/* Level II (Grades 1-3), October week 3: Abraham, Sarah, and the Promise (Genesis 17, 18, 21)
   Reading level: Selam reads along while the words light up; short word puzzles; ordering with captions. */
BKLesson({
 id:'L2-oct3', title:'Abraham, Sarah, and the Promise', am:'አብርሃምና ሣራ', sticker:'tent',
 pages:[
  {game:'cover', bg:'desert', title:'Abraham, Sarah, and the Promise', am:'አብርሃምና ሣራ',
   props:[{art:'tent',x:600,y:420,s:1},{art:'abraham',x:300,y:425,s:.66},{art:'sarah',x:430,y:428,s:.62},{art:'star',x:150,y:80,s:.5},{art:'star',x:680,y:60,s:.4}],
   say:['cover','[[selam]]! Today we read a true story about a promise. God made a promise to Abraham and Sarah. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, October week 3: <b>Abraham, Sarah, and the Promise</b>. Aim: God can do anything, and He keeps His promise.</p><p>Level II pages show the words while Selam reads, so children can follow along and practise reading.</p>'},

  {game:'read', chip:'Read along', heading:'God\'s promise', pic:'tent',
   paras:[
    ['r1','Long after the great flood, there lived a holy man called Abraham. His wife was called Sarah.'],
    ['r2','Abraham and Sarah loved God. They helped the poor and welcomed guests into their tent.'],
    ['r3','But they had no children. God promised them: I will give you a son!'],
    ['r4','They waited a long, long time. They grew very old, and still they had no child.'],
   ],
   parent:'<p>Ask: What is the great flood? (The forty days of rain in the time of Noah.) What did God promise Abraham and Sarah?</p>'},

  {game:'story', bg:'desert', chip:'Sarah laughs',
   props:[{art:'tent',x:620,y:420,s:1},{id:'abraham',art:'abraham',x:260,y:425,s:.66},{id:'sarah',art:'sarah',x:640,y:430,s:.55},{id:'light',art:'glory',x:110,y:230,s:.8}],
   beats:[
    {say:['s1','One day God came to Abraham and said: Sarah your wife will have a son. Tap Sarah in the tent.'],tap:'sarah'},
    {wiggle:['sarah'],sfx:'boing',say:['s2','Sarah heard it, and she laughed in her heart. I am too old to have a baby, she thought.']},
    {wiggle:['light'],sfx:'glory',say:['s3','But God knew she laughed. God knows even what we think! He said: Is anything too hard for the Lord?']},
   ],
   parent:'<p>God knows even what we think in our hearts. Nothing is impossible for God.</p>'},

  {game:'story', bg:'sunrise', chip:'A baby boy!',
   props:[{art:'tent',x:640,y:420,s:1},{id:'abraham',art:'abraham',x:250,y:425,s:.66},{id:'sarah',art:['sarah',{}],x:400,y:428,s:.62},{id:'baby',art:'isaacChild',x:330,y:430,s:.35,hidden:true},{id:'sp',art:'sparkles',x:330,y:280,s:1,hidden:true}],
   beats:[
    {say:['b1','God kept His promise. Tap Sarah to see!'],tap:'sarah'},
    {show:['baby','sp'],sfx:'glory',fx:'confetti',say:['b2','Sarah had a baby boy! They called him Isaac, [[yishak]].']},
    {wiggle:['abraham'],say:['b3','Abraham was one hundred years old, and Sarah was ninety! God can do anything.']},
   ]},

  {game:'puzzle', chip:'Word puzzle',
   intro:['puzzle-intro','Word puzzle! Read the clue, then tap the letters to spell the answer.'],
   items:[
    {id:'w1',clue:'Abraham\'s wife was called …',word:'Sarah',pic:'sarah'},
    {id:'w2',clue:'The baby God promised was called …',word:'Isaac',pic:'isaacChild'},
    {id:'w3',clue:'Abraham and Sarah lived in a …',word:'tent',pic:'tent'},
    {id:'w4',clue:'God always keeps His …',word:'promise',pic:'heart'},
   ],
   done:['puzzle-done','You spelled them all! Great reading.']},

  {game:'order', chip:'What happened first?',
   intro:['order','Tap the pictures in the order they happened.'],
   cards:[
    {art:'tent',cap:'Abraham and Sarah had no child'},
    {art:'glory',cap:'God made a promise'},
    {art:'sarah',cap:'Sarah laughed'},
    {art:'isaacChild',cap:'Isaac was born'},
   ],
   done:['order-done','That is the whole story!']},

  {game:'quiz', questions:[
    {id:'q1',q:'What did God promise Abraham and Sarah?',a:[['A son','isaacChild'],['A camel','camel'],['A big house','tukul']],c:0},
    {id:'q2',q:'Why did Sarah laugh?',a:[['She was happy to see a camel','camel'],['She thought she was too old','sarah'],['A joke','selam']],c:1},
    {id:'q3',q:'Did God keep His promise?',a:[['Yes!',['text',{t:'Yes',size:60,c:'#2F7A4E'}]],['No',['text',{t:'No',size:60,c:'#B3322A'}]]],c:0},
    {id:'q4',q:'How old was Abraham when Isaac was born?',a:[['10',['text',{t:'10',size:60,c:'#24418F'}]],['50',['text',{t:'50',size:60,c:'#24418F'}]],['100',['text',{t:'100',size:56,c:'#24418F'}]]],c:2},
   ]},
  {game:'song', song:'aman-beaman'},
 ]
});
