/* Level II (Grades 1-3), August week 3: The Transfiguration (Matthew 17:1-9; Debre Tabor, Nehasse 13) */
BKLesson({
 id:'L2-aug3', title:'Shining on the Mountain', am:'ደብረ ታቦር', sticker:'sun',
 pages:[
  {game:'cover', bg:'mountain', title:'Shining on the Mountain', am:'ደብረ ታቦር',
   props:[{art:'glory',x:640,y:290,s:1.1},{art:['jesus',{robe:'#FFFFFF'}],x:640,y:430,s:.55},{art:'peter',x:140,y:440,s:.5},{art:'disciple',x:240,y:440,s:.5}],
   say:['cover','[[selam]]! On a high mountain, three disciples saw Jesus shine with the glory of God. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, August week 3: <b>The Transfiguration</b> (Matthew 17:1-9). Aim: see the power and glory of God in Jesus Christ. We celebrate Debre Tabor (Buhe) on Nehasse 13 (August 19).</p><p>Review: What did Peter find in the fish\'s mouth?</p>'},

  {game:'read', chip:'Read along', heading:'Up Mount Tabor', pic:'jesus',
   paras:[
    ['r1','One day Jesus took three disciples, [[petros]], James and John, up a high mountain.'],
    ['r2','The mountain was called Mount Tabor.'],
    ['r3','There, something amazing happened!'],
   ]},

  {game:'story', bg:'mountain', chip:'Shining like the sun',
   props:[{id:'jesus',art:'jesus',x:400,y:420,s:.6},{id:'white',art:['jesus',{robe:'#FFFFFF',sleeve:'#FFFFFF'}],x:400,y:420,s:.6,hidden:true},{id:'glow',art:'glory',x:400,y:290,s:1.3,hidden:true},{id:'moses',art:'moses',x:220,y:430,s:.5,hidden:true},{id:'elijah',art:['figure',{robe:'#8A5A30',beard:'white',halo:true}],x:580,y:430,s:.5,hidden:true}],
   beats:[
    {wiggle:['jesus'],say:['t1','Jesus was praying. Tap Jesus.'],tap:'jesus'},
    {show:['glow','white'],hide:['jesus'],sfx:'glory',say:['t2','His face shone like the sun, and His clothes became shining white!']},
    {show:['moses','elijah'],sfx:'pop',say:['t3','Then Moses and Elijah appeared, and talked with Jesus.']},
   ],
   parent:'<p>Moses (the Law) and Elijah (the Prophets) bear witness to Christ.</p>'},

  {game:'story', bg:'mountain', chip:'Listen to Him',
   props:[{id:'peter',art:'peter',x:180,y:440,s:.55},{id:'tent',art:'tent',x:620,y:440,s:.5},{id:'cloud',art:'cloud',x:400,y:160,s:1.6,hidden:true},{id:'jesus',art:['jesus',{robe:'#FFFFFF',sleeve:'#FFFFFF'}],x:400,y:420,s:.6}],
   beats:[
    {wiggle:['peter'],say:['l1','[[petros]] said: Lord, it is good for us to be here! Let me make three tents. Tap the tent.'],tap:'tent'},
    {show:['cloud'],sfx:'whoosh',say:['l2','While he was still speaking, a bright cloud covered them.']},
    {sfx:'glory',say:['l3','A voice came from the cloud: This is My beloved Son. Listen to Him!']},
    {hide:['cloud'],wiggle:['jesus'],say:['l4','The disciples fell down, afraid. Jesus touched them: Get up. Do not be afraid.']},
   ],
   parent:'<p>"This is my beloved Son, in whom I am well pleased; hear ye him." (Matthew 17:5)</p>'},

  {game:'verse', chip:'Memory verse', verse:'This is My beloved Son, in whom I am well pleased. Listen to Him!', ref:'Matthew 17:5',
   chunks:['This is My beloved Son,','in whom I am well pleased.','Listen to Him!'],
   intro:['verse-intro','These are the words God the Father said from the cloud. Tap the pieces in order.']},

  {game:'puzzle', chip:'Word puzzle',
   intro:['puzzle-intro','Word puzzle! Read the clue, then tap the letters to spell the answer.'],
   items:[
    {id:'w1',clue:'The mountain was called Mount …',word:'Tabor',pic:'tent'},
    {id:'w2',clue:'Jesus\' face shone like the …',word:'sun',pic:'sun'},
    {id:'w3',clue:'Moses and … appeared.',word:'Elijah',pic:['figure',{robe:'#8A5A30',beard:'white',halo:true}]},
    {id:'w4',clue:'A bright … covered them.',word:'cloud',pic:'cloud'},
   ],
   done:['puzzle-done','You solved the puzzle!']},

  {game:'quiz', questions:[
    {id:'q1',q:'How many disciples went up?',a:[['Three',['text',{t:'3',size:64,c:'#24418F'}]],['Twelve',['text',{t:'12',size:64,c:'#24418F'}]]],c:0},
    {id:'q2',q:'Who appeared with Jesus?',a:[['Moses and Elijah','moses'],['Two soldiers','soldier']],c:0},
    {id:'q3',q:'What did the voice say?',a:[['Listen to Him','cloud'],['Go home','tukul']],c:0},
   ]},
  {game:'song', song:'aman-be-aman'},
 ]
});
