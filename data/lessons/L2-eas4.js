/* Level II (Grades 1-3), Easter season week 4: St. George (Works of St. George) */
BKLesson({
 id:'L2-eas4', title:'Brave Saint George', am:'ቅዱስ ጊዮርጊስ', sticker:'horse',
 pages:[
  {game:'cover', bg:'field', title:'Brave Saint George', am:'ቅዱስ ጊዮርጊስ',
   props:[{art:'horse',x:170,y:440,s:.8},{art:'george',x:200,y:400,s:.5},{art:'dragon',x:640,y:440,s:.7}],
   say:['cover','[[selam]]! Today we meet a brave saint, [[kidus-giyorgis]]. A saint is a person who lives a holy life, prays, and helps others. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, Easter week 4: <b>St. George</b> (Works of St. George). Aim: learn about courage and faith from the life of St. George.</p><p>Review: What are the names of the Virgin Mary\'s father and mother?</p>'},

  {game:'read', chip:'Read along', heading:'A city that feared a dragon', pic:'dragon',
   paras:[
    ['r1','[[kidus-giyorgis]] was born in a place called Lydda.'],
    ['r2','When he was twenty years old, he went to the city of Beirut.'],
    ['r3','The people of Beirut were afraid of a dragon. They even worshipped it as if it were a god!'],
    ['r4','They gave the dragon gifts, and now they had tied the governor\'s daughter to a tree for it.'],
   ]},

  {game:'story', bg:'field', chip:'I am not afraid',
   props:[{id:'tree',art:'acacia',x:640,y:440,s:1.1},{id:'girl',art:['girl',{robe:'#FFFFFF',netela:'#E2A62B'}],x:620,y:440,s:.7},{id:'horse',art:'horse',x:170,y:440,s:.8},{id:'george',art:'george',x:200,y:400,s:.5}],
   beats:[
    {wiggle:['girl'],say:['g1','[[kidus-giyorgis]] saw a girl tied to a tree. Tap the girl.'],tap:'girl'},
    {wiggle:['girl'],say:['g2','She cried: Go away quickly, before the dragon comes and kills you too!']},
    {wiggle:['george'],say:['g3','But [[kidus-giyorgis]] said: I am not afraid of this evil. God is with me. Tap [[kidus-giyorgis]].'],tap:'george'},
   ]},

  {game:'story', bg:'field', chip:'The sign of the cross',
   props:[{id:'glow',art:'glory',x:250,y:280,s:.9,hidden:true},{id:'horse',art:'horse',x:220,y:440,s:.8},{id:'george',art:'george',x:250,y:400,s:.5},{id:'dragon',art:'dragon',x:600,y:440,s:.75},{id:'cross',art:['cross',{c:'#E2A62B'}],x:420,y:200,s:.8,hidden:true}],
   beats:[
    {wiggle:['dragon'],sfx:'whoosh',say:['d1','The dragon came and raised its head to attack!']},
    {show:['glow'],wiggle:['george'],say:['d2','[[kidus-giyorgis]] said: In the name of the Father, the Son, and the Holy Spirit. Tap to make the sign of the cross!'],tap:'george'},
    {show:['cross'],sfx:'glory',say:['d3','The dragon became weak and fell down on the ground!']},
    {move:{dragon:[600,460,.7]},say:['d4','He untied the governor\'s daughter, and together they pulled the dragon into the city.']},
   ],
   parent:'<p>In Ethiopian icons, St. George is shown on a white horse slaying the dragon, saving the governor\'s daughter (Birutawit).</p>'},

  {game:'story', bg:'day', chip:'Beirut believes',
   props:[{art:'city',x:640,y:440,s:.6},{id:'george',art:'george',x:220,y:440,s:.55},{id:'crowd',art:'crowd',x:470,y:440,s:.9},{id:'church',art:'church',x:640,y:300,s:.4,hidden:true}],
   beats:[
    {wiggle:['crowd'],say:['c1','The people were scared. Do not bring our god into the city!']},
    {wiggle:['george'],say:['c2','[[kidus-giyorgis]] said: This is not a god. It has no power over you. Believe in Jesus Christ! Tap him.'],tap:'george'},
    {show:['church'],sfx:'glory',fx:'confetti',say:['c3','When they saw what God did, all the people became Christians.']},
   ],
   parent:'<p>The first commandment: love God with all your heart, and do not worship any other gods.</p>'},

  {game:'puzzle', chip:'Word puzzle',
   intro:['puzzle-intro','Word puzzle! Read the clue, then tap the letters to spell the answer.'],
   items:[
    {id:'w1',clue:'The people worshipped a …',word:'dragon',pic:'dragon'},
    {id:'w2',clue:'Saint George went to the city of …',word:'Beirut',pic:'city'},
    {id:'w3',clue:'He made the sign of the …',word:'cross',pic:'handCross'},
    {id:'w4',clue:'He taught the people to believe in …',word:'Jesus',pic:'jesus'},
   ],
   done:['puzzle-done','You solved the puzzle!']},

  {game:'quiz', questions:[
    {id:'q1',q:'How did Saint George beat the dragon?',a:[['In the name of God','handCross'],['With a big rock','stone']],c:0},
    {id:'q2',q:'Who did he save?',a:[['The governor\'s daughter',['girl',{robe:'#FFFFFF',netela:'#E2A62B'}]],['A lion','lion']],c:0},
    {id:'q3',q:'What did the people of Beirut do?',a:[['They became Christians','church'],['They ran away','path']],c:0},
   ]},
  {game:'song', song:'giorgis-hayal-hayal-mestegad'},
 ]
});
