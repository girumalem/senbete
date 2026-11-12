/* Level I, August week 2: Daniel in the Lions' Den (Daniel 6) */
BKLesson({
 id:'L1-aug2', title:'Daniel and the Lions', am:'ዳንኤልና አናብስት', sticker:'lion',
 pages:[
  {game:'cover', bg:'night', title:'Daniel and the Lions', am:'ዳንኤልና አናብስት',
   props:[{art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',beard:'dark',halo:true,arms:'pray'}],x:400,y:440,s:.6},{art:'lion',x:200,y:440,s:.8},{art:'lion',x:620,y:440,s:.8,flip:true},{art:'angel',x:400,y:250,s:.4}],
   say:['cover','[[selam]]! God saved Elijah in hard times. Today God saves another man of God, from hungry lions! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, August week 2: <b>Daniel in the Lions\' Den</b> (Daniel 6). Aim: learn that God can save us from anything if we believe in Him.</p><p>Talk about it: How many times a day did Daniel pray? Who shut the lions\' mouths?</p>'},

  {game:'story', bg:'day', chip:'Daniel prays',
   props:[{id:'win',art:'window',x:560,y:400,s:.9},{id:'dan',art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',beard:'dark',halo:true,arms:'pray'}],x:560,y:440,s:.55},{id:'king',art:'king',x:180,y:440,s:.55}],
   beats:[
    {wiggle:['king'],say:['k1','King Darius made a law: Nobody may pray to God. Anyone who prays will be thrown to the lions! Tap the king.'],tap:'king'},
    {wiggle:['dan'],say:['k2','Daniel loved God. He opened his window and prayed three times every day, just like before. Tap Daniel.'],tap:'dan'},
    {say:['k3','Some jealous men saw Daniel praying, and they told the king.']},
   ],
   parent:'<p>Daniel "kneeled upon his knees three times a day, and prayed... as he did aforetime." (Daniel 6:10)</p>'},

  {game:'tapmany', bg:'day', chip:'Pray three times',
   props:[{art:'window',x:400,y:400,s:.9},{art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',beard:'dark',halo:true,arms:'pray'}],x:400,y:440,s:.55}],
   area:{x0:0,y0:20,x1:800,y1:250}, count:3, spawn:{art:'sun',s:[.3,.4],anim:'bob'}, sfx:'note',
   progress:'*{n} more*!',
   intro:['three','Daniel prayed in the morning, at noon, and in the evening. Tap three times to pray with him!'],
   done:['three-done','We can pray every day too, just like Daniel.']},

  {game:'story', bg:'dark', chip:'In the lions\' den',
   props:[{id:'l1',art:'lion',x:180,y:440,s:.8},{id:'l2',art:'lion',x:640,y:440,s:.8,flip:true},{id:'dan',art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',beard:'dark',halo:true,arms:'pray'}],x:410,y:440,s:.55},{id:'glow',art:'glory',x:410,y:240,s:1,hidden:true},{id:'angel',art:'angel',x:410,y:300,s:.45,hidden:true}],
   beats:[
    {wiggle:['l1','l2'],sfx:'whoosh',say:['d1','The king was sad, but he had to keep his law. Daniel was thrown into a den of hungry lions!']},
    {show:['glow','angel'],sfx:'glory',say:['d2','But God sent His angel! Tap the angel.'],tap:'angel'},
    {wiggle:['l1','l2'],say:['d3','The angel shut the lions\' mouths. They could not hurt Daniel at all! Tap a lion.'],tap:'l1'},
   ],
   parent:'<p>"My God hath sent his angel, and hath shut the lions\' mouths." (Daniel 6:22)</p>'},

  {game:'story', bg:'sunrise', chip:'Daniel is safe!',
   props:[{id:'king',art:'king',x:200,y:440,s:.55},{id:'dan',art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',beard:'dark',halo:true,arms:'pray'}],x:520,y:440,s:.55}],
   beats:[
    {wiggle:['king'],say:['s1','Early in the morning the king ran to the den and called: Daniel, did your God save you? Tap the king.'],tap:'king'},
    {wiggle:['dan'],say:['s2','Daniel said: Yes! My God sent His angel. I am safe!']},
    {fx:'confetti',say:['s3','The king was so happy! He told everyone in his country: Respect the God of Daniel. He saves!']},
   ],
   parent:'<p>Darius decreed that all should honour the God of Daniel (Daniel 6:26).</p>'},

  {game:'quiz', questions:[
    {id:'q1',q:'How many times a day did Daniel pray?',a:[['Three times',['text',{t:'3',size:90,c:'#24418F'}]],['Never',['text',{t:'0',size:90,c:'#24418F'}]]],c:0},
    {id:'q2',q:'Where was Daniel thrown?',a:[['Into the lions\' den','lion'],['Into the sea','fish']],c:0},
    {id:'q3',q:'Who shut the lions\' mouths?',a:[['An angel of God','angel'],['The king','king']],c:0},
   ]},
  {game:'song', song:'egziabher-berhanena-medhanit'},
 ]
});
