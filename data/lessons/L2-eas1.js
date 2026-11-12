/* Level II (Grades 1-3), Easter season week 1: The Resurrection (Matthew 28:1-8; Mark 16:1-8) */
BKLesson({
 id:'L2-eas1', title:'He Is Risen!', am:'ተነሥቷል', sticker:'tomb',
 pages:[
  {game:'cover', bg:'sunrise', title:'He Is Risen!', am:'ተነሥቷል',
   props:[{art:'tomb',x:130,y:440,s:.65},{art:'glory',x:630,y:290,s:1.2},{art:'jesus',x:630,y:430,s:.6},{art:'flowers',x:740,y:445,s:.5}],
   say:['cover','[[selam]]! This is the happiest news in the whole world. Jesus is risen from the dead! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, Easter week 1: <b>The Resurrection</b> (Matthew 28:1-8; Mark 16:1-8). Aim: learn about the resurrection of Jesus Christ.</p><p>Review: What did the children sing when Jesus came into Jerusalem?</p>'},

  {game:'read', chip:'Read along', heading:'From Hosanna to the cross', pic:'procCross',
   paras:[
    ['r1','Do you remember the children who sang [[hosanna]] when Jesus came into Jerusalem?'],
    ['r2','The leaders were jealous of Jesus. They told lies about Him, and on Friday they crucified Him on a cross.'],
    ['r3','Two men called Joseph and Nicodemus took His body down from the cross and buried it in a tomb.'],
    ['r4','A very big stone was rolled in front of the door of the tomb.'],
   ]},

  {game:'story', bg:'sunrise', chip:'Early on Sunday',
   props:[{id:'closed',art:['tomb',{closed:true}],x:520,y:445,s:.75},{id:'open',art:'tomb',x:520,y:445,s:.75,hidden:true},{id:'glow',art:'glory',x:250,y:300,s:1,hidden:true},{id:'angel',art:'angel',x:250,y:430,s:.6,hidden:true},{id:'w1',art:['woman',{robe:'#B3322A',netela:'#FFFFFF'}],x:90,y:440,s:.55},{id:'w2',art:['woman',{robe:'#24418F',netela:'#FFFFFF'}],x:170,y:445,s:.55}],
   beats:[
    {wiggle:['w1','w2'],say:['s1','On the third day, very early in the morning, Mary Magdalene and other women came to the tomb with sweet perfume.']},
    {wiggle:['closed'],say:['s2','They said to each other: Who will roll away the stone for us? It is very heavy! Tap the stone.'],tap:'closed'},
    {hide:['closed'],show:['open'],sfx:'whoosh',say:['s3','Look! The stone was already rolled away!']},
    {show:['glow','angel'],sfx:'glory',say:['s4','An angel in a shining white robe was sitting there. Tap the angel.'],tap:'angel'},
    {wiggle:['angel'],say:['s5','The angel said: Do not be afraid. You are looking for Jesus. He is not here. He is risen!']},
   ],
   parent:'<p>"He is not here: for he is risen, as he said. Come, see the place where the Lord lay." (Matthew 28:6)</p>'},

  {game:'order', chip:'What happened first?',
   intro:['order','Tap the pictures in the order they happened.'],
   cards:[
    {art:'branch',cap:'The children sang Hosanna',say:['o1','The children sang [[hosanna]].']},
    {art:'procCross',cap:'Jesus was crucified on Friday',say:['o2','Jesus was crucified on Friday.']},
    {art:['tomb',{closed:true}],cap:'Jesus was buried',say:['o3','Joseph and Nicodemus buried Him.']},
    {art:'angel',cap:'The angel said: He is risen!',say:['o4','On Sunday the angel said: He is risen!']},
   ],
   done:['order-done','That is the true story of [[fasika]]!']},

  {game:'puzzle', chip:'Word puzzle',
   intro:['puzzle-intro','Word puzzle! Read the clue, then tap the letters to spell the answer.'],
   items:[
    {id:'w1',clue:'The women wondered who would move the heavy …',word:'stone',pic:['tomb',{closed:true}]},
    {id:'w2',clue:'At the tomb, the women saw an …',word:'angel',pic:'angel'},
    {id:'w3',clue:'The angel said: Jesus is …',word:'risen',pic:'glory'},
    {id:'w4',clue:'Nicodemus and … buried Jesus.',word:'Joseph',pic:['figure',{robe:'#8A5A30',beard:'dark'}]},
   ],
   done:['puzzle-done','You solved the puzzle!']},

  {game:'story', bg:'sunrise', chip:'Run and tell!',
   props:[{art:'city',x:650,y:440,s:.6},{id:'w1',art:['woman',{robe:'#B3322A',netela:'#FFFFFF'}],x:150,y:440,s:.55},{id:'w2',art:['woman',{robe:'#24418F',netela:'#FFFFFF'}],x:240,y:445,s:.55}],
   beats:[
    {wiggle:['w1','w2'],say:['g1','The women were full of joy. They ran to tell the disciples the good news! Tap them to run.'],tap:'w1'},
    {move:{w1:[520,440,.55],w2:[600,445,.55]},sfx:'whoosh',fx:'confetti',say:['g2','Christ is risen! At [[fasika]] we say it to each other with joy.']},
   ]},

  {game:'quiz', questions:[
    {id:'q1',q:'On which day did Jesus rise?',a:[['Sunday, the third day','sun'],['Friday','moon']],c:0},
    {id:'q2',q:'Who sat by the empty tomb?',a:[['An angel','angel'],['A soldier','soldier']],c:0},
    {id:'q3',q:'What did the women do next?',a:[['Ran to tell the disciples','city'],['Went to sleep','bed']],c:0},
   ]},
  {game:'song', song:'aman-be-aman'},
 ]
});
