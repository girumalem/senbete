/* Level II (Grades 1-3), January week 1: Birth of Jesus Christ (Matthew 1, 2; Luke 2) */
BKLesson({
 id:'L2-jan1', title:'Jesus Is Born', am:'ገና', sticker:'manger',
 pages:[
  {game:'cover', bg:'night', title:'Jesus Is Born', am:'ገና',
   props:[{art:'stable',x:560,y:440,s:.7},{art:'maryBaby',x:560,y:435,s:.45},{art:'bigStar',x:560,y:90,s:1},{art:'shepherd',x:200,y:440,s:.55},{art:'sheep',x:300,y:445,s:.35}],
   say:['cover','[[selam]]! Gabriel told the Virgin [[mariam]] she would have a Son. Today we read about the night He was born: [[genna]], Christmas! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, January week 1: <b>Birth of Jesus Christ</b> (Matthew 1, 2; Luke 2). Ethiopian Christmas, Genna, is on Tahsas 29 (January 7).</p><p>Review: Who did the Virgin Mary visit after the Annunciation?</p>'},

  {game:'read', chip:'Read along', heading:'Born in a manger', pic:'manger',
   paras:[
    ['r1','About two thousand years ago, on the night of Tahsas 29, January 7, the Virgin [[mariam]] gave birth to Jesus Christ.'],
    ['r2','[[mariam]] and Joseph were strangers in Bethlehem. There was no place for them to stay.'],
    ['r3','So Jesus was born where the animals were kept. [[mariam]] wrapped Him in cloth and laid Him in a manger.'],
    ['r4','The King of kings was born in a humble place!'],
   ]},

  {game:'story', bg:'night', chip:'Angels and shepherds',
   props:[{id:'sh',art:'shepherd',x:200,y:440,s:.58},{art:'sheep',x:320,y:445,s:.38},{art:'sheep',x:640,y:445,s:.38,flip:true},{id:'glow',art:'glory',x:470,y:230,s:1.1,hidden:true},{id:'angel',art:'angel',x:470,y:300,s:.5,hidden:true}],
   beats:[
    {say:['a1','That night, shepherds were watching their sheep in the fields. Tap a shepherd.'],tap:'sh'},
    {show:['glow','angel'],sfx:'glory',say:['a2','Suddenly an angel appeared, and bright light shone all around. The shepherds were afraid!']},
    {wiggle:['angel'],say:['a3','The angel said: Do not be afraid! Today a Savior is born for you in the city of David. He is Christ the Lord. Tap the angel.'],tap:'angel'},
    {fx:'confetti',say:['a4','Many angels sang: Glory to God in the highest, and on earth peace, good will toward men!']},
   ],
   parent:'<p>"Glory to God in the highest, and on earth peace, good will toward men." (Luke 2:14)</p>'},

  {game:'drag', bg:'night', chip:'Come to the manger',
   props:[{art:'stable',x:600,y:440,s:.7},{art:'maryBaby',x:600,y:435,s:.45}],
   zone:{x:460,y:250,w:300,h:200},
   items:[{art:'shepherd',x:100,y:440,s:.5},{art:'sheep',x:200,y:440,s:.35},{art:['shepherd',{robe:'#8A5A30'}],x:290,y:440,s:.5}],
   intro:['visit','The shepherds hurried to Bethlehem to see the baby. Drag them to the manger!'],
   done:['visit-done','They found the baby, just as the angel said, and they praised God.']},

  {game:'puzzle', chip:'Word puzzle',
   intro:['puzzle-intro','Word puzzle! Read the clue, then tap the letters to spell the answer.'],
   items:[
    {id:'w1',clue:'Jesus was laid in a …',word:'manger',pic:'manger'},
    {id:'w2',clue:'The angel first told the good news to the …',word:'shepherds',pic:'shepherd'},
    {id:'w3',clue:'Glory to God in the highest, and on earth …',word:'peace',pic:'dove'},
   ],
   done:['puzzle-done','You spelled them all! Great reading.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Where was Jesus born?',a:[['In Bethlehem','stable'],['In Egypt','pyramid']],c:0},
    {id:'q2',q:'Who brought the news to the shepherds?',a:[['An angel','angel'],['A king','king']],c:0},
    {id:'q3',q:'When is Ethiopian Christmas, Genna?',a:[['January 7',['text',{t:'Jan 7',size:48,c:'#24418F'}]],['July 4',['text',{t:'Jul 4',size:48,c:'#24418F'}]]],c:0},
   ]},
  {game:'song', song:'kesemayat-werede-kedingil-ma'},
 ]
});
