/* Level II (Grades 1-3), January week 2: The Flight to Egypt (Matthew 2) */
BKLesson({
 id:'L2-jan2', title:'The Wise Men and the Flight to Egypt', am:'ስደት ወደ ግብፅ', sticker:'wiseKing1',
 pages:[
  {game:'cover', bg:'night', title:'The Wise Men and the Flight to Egypt', am:'ስደት ወደ ግብፅ',
   props:[{art:'bigStar',x:620,y:90,s:1},{art:'wiseKing1',x:530,y:440,s:.52},{art:'wiseKing2',x:630,y:440,s:.52},{art:'wiseKing3',x:730,y:440,s:.52},{art:'camel',x:150,y:440,s:.55}],
   say:['cover','[[selam]]! When Jesus was born, three wise men came from far away, following a star. But a jealous king was not happy. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, January week 2: <b>The Flight to Egypt</b> (Matthew 2). Aim: God protects the Holy Family.</p><p>Review: Where was Jesus born? What did the angels sing?</p>'},

  {game:'read', chip:'Read along', heading:'King Herod is afraid', pic:'king',
   paras:[
    ['r1','Three wise men, who were kings, followed a star to Jerusalem. They asked King Herod: Where is the newborn King?'],
    ['r2','Herod was afraid. He did not want any other king!'],
    ['r3','His scholars told him a prophecy: a king will be born in Bethlehem.'],
    ['r4','Herod told the wise men: Find Him, then come back and tell me, so I can worship Him too. But that was a lie.'],
   ]},

  {game:'drag', bg:'night', chip:'Gifts for the King',
   props:[{art:'stable',x:620,y:440,s:.7},{art:'maryBaby',x:620,y:435,s:.45},{art:'bigStar',x:620,y:90,s:.9}],
   zone:{x:480,y:250,w:280,h:200},
   items:[{art:['gift',{}],x:100,y:420,s:.9},{art:'pot',x:220,y:430,s:.6},{art:'jar',x:330,y:430,s:.6}],
   intro:['gifts','The star led the wise men to baby Jesus. They worshipped Him and gave gifts: gold, frankincense and myrrh. Drag the gifts to Jesus!'],
   done:['gifts-done','An angel warned the wise men: Do not go back to Herod. So they went home another way.']},

  {game:'story', bg:'desert', chip:'Run to Egypt',
   props:[{art:'pyramid',x:680,y:430,s:.6},{id:'gab',art:'gabriel',x:420,y:300,s:.45,hidden:true},{id:'jo',art:'joseph',x:160,y:440,s:.55},{id:'mary',art:'maryBaby',x:250,y:440,s:.55},{id:'donkey',art:'donkey',x:250,y:450,s:.5}],
   beats:[
    {say:['f1','Herod was very angry when the wise men did not come back. He wanted to hurt baby Jesus.']},
    {show:['gab'],sfx:'glory',say:['f2','But the Archangel Gabriel told Joseph: Take the Child and His mother, and go to Egypt! Tap Joseph.'],tap:'jo'},
    {move:{jo:[480,440,.55],mary:[570,440,.55],donkey:[570,450,.5]},sfx:'whoosh',say:['f3','So the Holy Family went to Egypt, [[gibts]].']},
    {fx:'confetti',say:['f4','They stayed there three and a half years, and came home after Herod died.']},
   ],
   parent:'<p>The Ethiopian Church remembers the flight of the Holy Family (Kidane Mihret and Tsome Tsige traditions).</p>'},

  {game:'blanks', chip:'Fill in the word',
   intro:['blanks-intro','Read the sentence, and tap the missing word.'],
   items:[
    {id:'b1',s:'The wise men followed a ___.',a:'star',opts:['star','river','bird'],pic:['star',{r:30,c:'#E2A62B'}]},
    {id:'b2',s:'They gave gold, frankincense and ___.',a:'myrrh',opts:['bread','myrrh','fish'],pic:'gift'},
    {id:'b3',s:'The Holy Family went to ___.',a:'Egypt',opts:['Egypt','Rome','Eden'],pic:'pyramid'},
   ],
   done:['blanks-done','Well read!']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who came to visit Jesus following a star?',a:[['Three wise men','wiseKing1'],['Three fishermen','fish']],c:0},
    {id:'q2',q:'Why was Herod afraid?',a:[['He did not want another king','king'],['He saw a lion','lion']],c:0},
    {id:'q3',q:'Where did the Holy Family go?',a:[['Egypt','pyramid'],['The sea','boat']],c:0},
   ]},
  {game:'song', song:'kesemayat-werede-kedingil-ma'},
 ]
});
