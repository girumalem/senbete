/* Level IV (Grade 7 and up), November week 2: The Flight to Egypt (Matthew 2; Revelation 12:1-6; Hosea 11:1; Synaxarium) */
BKLesson({
 id:'L4-nov2', title:'The Flight to Egypt', am:'ስደት', sticker:'donkey',
 pages:[
  {game:'cover', bg:'desert', title:'The Flight to Egypt', am:'የስደት ዘመን',
   props:[{art:'donkey',x:330,y:440,s:.7},{art:'maryBaby',x:330,y:380,s:.5},{art:'joseph',x:180,y:440,s:.6},{art:'gabriel',x:600,y:400,s:.55}],
   say:['cover','[[selam]]! The Virgin [[mariam]] and her Son had to flee from a jealous king, and live as refugees far from home. Let\'s follow their journey.'],
   parent:'<p>This lesson follows Level IV, November week 2: <b>The Flight to Egypt</b> (Hosea 11; Revelation 12; Synaxarium). Aim: learn about the exile of Jesus Christ, the Virgin Mary and Joseph.</p><p>The Church remembers the exile during the fast of Tsome Tsige, and their arrival in Egypt on Hidar 6.</p>'},

  {game:'choose', bg:'egypt', chip:'A new King',
   props:[{id:'herod',art:['figure',{robe:'#6A3A8A',crown:true,beard:'dark',arms:'out'}],x:250,y:440,s:.65},{id:'dark',art:'darkCloud',x:250,y:150,s:.8,hidden:true},{id:'star',art:'bigStar',x:620,y:120,s:1}],
   prompt:['c0','King [[herodis]] heard that a new King had been born in Bethlehem. What should a good ruler do?'],
   options:[
    {label:'Get rid of the child, to keep my power',art:'darkCloud',good:false,then:{show:['dark']},
     say:['c1','That is what [[herodis]] chose. His love of power made him cruel: he killed fourteen thousand little children in Bethlehem, hoping one of them was Jesus. Try the other answer.']},
    {label:'Go and worship Him, like the wise men',art:'bigStar',then:{hide:['dark']},
     say:['c2','Yes. The wise men came from far away to worship Him. Desire for power, money or fame can lead people to do terrible things.']},
   ]},

  {game:'story', bg:'night', chip:'A warning',
   props:[{id:'jo',art:'sleeper',x:320,y:430,s:.9},{id:'gab',art:'gabriel',x:580,y:400,s:.6,hidden:true},{id:'family',art:'maryBaby',x:150,y:440,s:.5}],
   beats:[
    {show:['gab'],fx:'flash',sfx:'glory',say:['a1','The Archangel Gabriel came to Joseph in a dream. Tap the angel.'],tap:'gab'},
    {say:['a2','He said: Arise, take the young Child and His mother, and flee to Egypt, for [[herodis]] will seek the Child to destroy Him.']},
    {hide:['jo'],say:['a3','Joseph rose in the night, and they left at once.']},
   ]},

  {game:'repeat', bg:'desert', chip:'The long road',
   props:[{id:'jo',art:'joseph',x:90,y:440,s:.5},{id:'don',art:'donkey',x:190,y:440,s:.55},{id:'ma',art:'maryBaby',x:190,y:392,s:.4},{id:'gab',art:'gabriel',x:150,y:230,s:.45},
    {id:'so1',art:'soldier',x:-60,y:440,s:.45},{id:'so2',art:'soldier',x:-120,y:440,s:.45},{id:'pyr',art:'pyramid',x:700,y:440,s:.5,hidden:true}],
   button:{label:'Keep going!',art:'donkey'},
   intro:['j0','The road south to Egypt was long, hot and dangerous. Tap to keep the family moving.'],
   steps:[
    {move:{jo:[200,440],don:[300,440],ma:[300,392],gab:[260,230]},say:['j1','They walked through hunger, thirst and burning sun.']},
    {move:{jo:[310,440],don:[410,440],ma:[410,392],gab:[370,230],so1:[80,440],so2:[20,440]},say:['j2','When [[herodis]] learned the Child had escaped, he sent soldiers after them!']},
    {move:{jo:[420,440],don:[520,440],ma:[520,392],gab:[480,230]},wiggle:['gab'],say:['j3','But the Archangel Gabriel was with them all the way, protecting and helping them.']},
    {move:{jo:[600,440],don:[700,440],ma:[700,392],gab:[660,230],so1:[-60,440],so2:[-120,440]},show:['pyr'],sfx:'glory',say:['j4','On [[hidar]] six, they reached a place called [[kuskuam]] in Egypt.']},
   ],
   done:['j5','Many people who welcomed them on the way were blessed. The Church teaches that they blessed Egypt, and Ethiopia too, during their exile.']},

  {game:'match', chip:'Revelation 12',
   heading:'Saint John saw it in a vision. Match each sign to its meaning.',
   intro:['m0','Saint John saw this exile in a vision, in the Book of Revelation, chapter twelve. Match each sign to what it means.'],
   pairs:[
    ['A woman clothed with the sun','The Virgin Mariam'],
    ['Her Child, who will rule all nations','Jesus Christ'],
    ['A great red dragon','King Herod'],
    ['A place prepared by God in the wilderness','Egypt'],
    ['1,260 days','Three and a half years'],
   ],
   done:['m1','They stayed in exile for three and a half years, until [[herodis]] died. Then the angel told Joseph to take them home.']},

  {game:'verse', chip:'Memory verse',
   verse:'Out of Egypt I called My Son.', ref:'Hosea 11:1',
   intro:['verse-intro','The prophet Hosea wrote it long before it happened: Out of Egypt I called My Son. Build it in order.'],
   done:['verse-done','The prophets saw Christ\'s life long before He came.']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf0','True or false?'],
   items:[
    {id:'t1',s:'The Archangel Gabriel told Joseph to flee to Egypt.',t:true,why:'He warned him in a dream, and stayed with them on the journey.'},
    {id:'t2',s:'The Virgin [[mariam]] complained about the hard journey.',t:false,why:'She never complained. She accepted the hardship for her Son.'},
    {id:'t3',s:'They stayed in Egypt for three and a half years.',t:true,why:'Until the death of Herod.'},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','The Holy Family lived as refugees. How can we welcome people who are far from their home?','Many Ethiopian families know what it is like to live far from home.'],
    ['k2','Give an example of a desire for things, power or fame that could lead someone to be dishonest or to hurt others.'],
    ['k3','Is a strong desire always bad? What makes a desire good or bad?','A burning desire for God and for good is holy.'],
   ]},
 ]
});
