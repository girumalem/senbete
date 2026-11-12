/* Level I, August week 3: The Child Samuel (1 Samuel 1-3) */
BKLesson({
 id:'L1-aug3', title:'Samuel Hears God', am:'ሕፃኑ ሳሙኤል', sticker:'candle',
 pages:[
  {game:'cover', bg:'church', title:'Samuel Hears God', am:'ሕፃኑ ሳሙኤል',
   props:[{art:['boy',{halo:true}],x:520,y:440,s:.8},{art:'candle',x:260,y:430,s:1},{art:'priest',x:600,y:440,s:.55}],
   say:['cover','[[selam]]! Today we meet a little boy who served God in the temple. His name was Samuel. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, August week 3: <b>The Child Samuel</b> (1 Samuel 1-3). Aim: learn about the service, love and prayer of Samuel.</p><p>Talk about it: Who prayed for Samuel to be born? What did Samuel say when God called him?</p>'},

  {game:'story', bg:'church', chip:'Hannah prays',
   props:[{id:'han',art:['woman',{robe:'#24418F',netela:'#FFFFFF',arms:'pray'}],x:300,y:440,s:.6},{id:'elk',art:['man',{beard:'dark'}],x:150,y:440,s:.55},{id:'baby',art:'baby',x:500,y:400,s:1.4,hidden:true},{id:'glow',art:'glory',x:500,y:340,s:.9,hidden:true}],
   beats:[
    {say:['h1','Hannah and Elkanah loved God very much, but they had no children. Hannah was very sad.']},
    {wiggle:['han'],say:['h2','Hannah went to the temple and prayed with tears: God, please give me a baby. He will serve You all his life. Tap Hannah.'],tap:'han'},
    {show:['glow','baby'],sfx:'glory',say:['h3','God heard her prayer! She had a baby boy and named him Samuel.']},
   ],
   parent:'<p>Hannah promised to give her son to the Lord all the days of his life (1 Samuel 1:11).</p>'},

  {game:'drag', bg:'church', chip:'Helping in the temple',
   props:[{art:['boy',{halo:true}],x:420,y:440,s:.75},{art:'priest',x:640,y:440,s:.55}],
   zone:{x:300,y:300,w:260,h:150},
   items:[{art:'candle',x:90,y:430,s:.7},{art:'scroll',x:180,y:330,s:.6},{art:'bowl',x:720,y:330,s:.6}],
   intro:['help','Hannah kept her promise. Samuel lived in the temple and helped Eli the priest. Drag the things to Samuel so he can help!'],
   done:['help-done','Samuel loved to serve in the house of God.']},

  {game:'story', bg:'night', chip:'Samuel! Samuel!',
   props:[{id:'sam',art:['sleeper',{}],x:300,y:440,s:.5},{id:'up',art:['boy',{halo:true}],x:300,y:440,s:.75,hidden:true},{id:'eli',art:'priest',x:640,y:440,s:.55},{id:'lamp',art:'candle',x:470,y:430,s:.9}],
   beats:[
    {say:['c1','One night Samuel was sleeping in the temple. A voice called: Samuel! Tap Samuel.'],tap:'sam'},
    {hide:['sam'],show:['up'],move:{up:[540,440,.75]},say:['c2','Samuel ran to Eli and said: Here I am! Eli said: I did not call you. Go back to sleep.']},
    {move:{up:[300,440,.75]},say:['c3','It happened three times! Then Eli knew: God is calling Samuel.']},
    {wiggle:['up'],sfx:'glory',say:['c4','God called again, and Samuel said: Speak, Lord, for Your servant is listening. Tap Samuel.'],tap:'up'},
    {fx:'confetti',say:['c5','Samuel grew up to be a great prophet of God.']},
   ],
   parent:'<p>"Speak; for thy servant heareth." (1 Samuel 3:10)</p>'},

  {game:'quiz', questions:[
    {id:'q1',q:'Who prayed for baby Samuel?',a:[['His mother Hannah',['woman',{robe:'#24418F',netela:'#FFFFFF',arms:'pray'}]],['A king','king']],c:0},
    {id:'q2',q:'Where did Samuel live and help?',a:[['In the temple','temple'],['On a boat','boat']],c:0},
    {id:'q3',q:'What did Samuel say to God?',a:[['Speak, Lord, I am listening','glory'],['Not now, I am sleeping','bed']],c:0},
   ]},
  {game:'song', song:'enamesginew'},
 ]
});
