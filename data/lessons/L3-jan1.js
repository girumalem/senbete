/* Level III (Grades 4-6), January week 1: The Nativity of Christ, Genna (Matthew 1-2; Luke 2; Isaiah 7:14) */
BKLesson({
 id:'L3-jan1', title:'A Savior Is Born', am:'ልደት', sticker:'manger',
 pages:[
  {game:'cover', bg:'night', title:'A Savior Is Born', am:'ልደት',
   props:[{art:'stable',x:640,y:440,s:.6},{art:'bigStar',x:640,y:110,s:.6},{art:'shepherd',x:160,y:440,s:.55},{art:'sheep',x:250,y:445,s:.4}],
   say:['cover','[[selam]]! On a cold night in Bethlehem, the Savior of the whole world was born. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, January week 1: <b>The Nativity of Christ</b> (Genna, Tahsas 29). Aim: learn about the birth of our Lord and why we celebrate it.</p><p>Talk about it: Why do we call the birth of Christ a gift to the whole world?</p>'},

  {game:'read', chip:'Read', heading:'No room in Bethlehem', pic:'donkey',
   paras:[
    ['r1','Nine months earlier, the Archangel Gabriel had told the Virgin [[mariam]] that she would bear a Son and call His name Jesus. She was engaged to Joseph, an older, righteous man.'],
    ['r2','The emperor ordered everyone to register in the town of their family. So [[mariam]] and Joseph traveled to Bethlehem, the city of David.'],
    ['r3','When they arrived, it was time for the baby to be born, but there was no place for them to stay. They found shelter where animals are kept.'],
    ['r4','There the Virgin [[mariam]] gave birth to her Son, wrapped Him in cloths, and laid Him in a manger.'],
   ]},

  {game:'story', bg:'night', chip:'Glory to God in the highest',
   props:[{id:'sh',art:'shepherd',x:200,y:440,s:.55},{id:'sheep',art:'sheep',x:330,y:445,s:.4},{id:'glow',art:'glory',x:560,y:240,s:1,hidden:true},{id:'an',art:'angel',x:560,y:330,s:.5,hidden:true},{id:'a2',art:'angelHead',x:420,y:120,s:.5,hidden:true},{id:'a3',art:'angelHead',x:700,y:110,s:.5,hidden:true}],
   beats:[
    {wiggle:['sh'],say:['s1','That night, shepherds were watching their sheep in the fields.']},
    {show:['glow','an'],sfx:'glory',say:['s2','An angel appeared: Today in the city of David a Savior is born to you, Christ the Lord! Tap the angel.'],tap:'an'},
    {show:['a2','a3'],sfx:'glory',fx:'confetti',say:['s3','Suddenly many angels were praising God: Glory to God in the highest, and on earth peace, goodwill toward men!']},
    {move:{sh:[640,440,.55],sheep:[740,445,.4]},say:['s4','The shepherds hurried to Bethlehem and found the Baby in the manger, just as the angel said.']},
   ],
   parent:'<p>The Ethiopian Church sings the angels\' hymn on Genna: Sibhat le-Egziabher be-aryam.</p>'},

  {game:'read', chip:'Read', heading:'Gifts for a King', pic:'gift',
   paras:[
    ['r5','Wise kings from a faraway land saw a shining star, and followed it to Bethlehem.'],
    ['r6','They worshipped the Child and gave Him gold, frankincense and myrrh, precious gifts fit for a king.'],
    ['r7','At Genna, we celebrate the birth of Jesus Christ, the day the whole world received the gift of salvation.'],
   ]},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'Jesus was born in ___, the city of David.',a:'Bethlehem',opts:['Nazareth','Jerusalem']},
    {id:'f2',s:'[[mariam]] laid the baby in a ___.',a:'manger',opts:['bed','boat']},
    {id:'f3',s:'The angels sang: Glory to God in the ___.',a:'highest',opts:['morning','temple']},
    {id:'f4',s:'The kings brought gold, frankincense and ___.',a:'myrrh',opts:['milk','bread']},
   ],
   done:['bl-done','All filled in!']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'There was plenty of room for them in Bethlehem.',t:false,why:'They found shelter only where animals were kept.',pic:'stable'},
    {id:'t2',s:'Angels told the shepherds the good news.',t:true,why:'A Savior is born, Christ the Lord!',pic:'angel'},
    {id:'t3',s:'A star led the wise kings to Bethlehem.',t:true,why:'They followed it and worshipped the Child.',pic:'bigStar'},
   ],
   done:['tf-done','Well done!']},

  {game:'verse', chip:'Memory verse',
   verse:'Behold, a virgin shall conceive, and bear a Son, and shall call His name Emmanuel.', ref:'Isaiah 7:14',
   chunks:['Behold, a virgin shall conceive,','and bear a Son,','and shall call His name','Emmanuel.'],
   intro:['verse-intro','This month\'s memory verse is a prophecy from Isaiah, written hundreds of years before Jesus was born. Listen: Behold, a virgin shall conceive, and bear a Son, and shall call His name Emmanuel. Now build it in order!'],
   done:['verse-done','Emmanuel means God with us.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who first heard the news from angels?',a:[['Shepherds','shepherd'],['Soldiers','soldier'],['Fishermen','boat']],c:0},
    {id:'q2',q:'What did the wise kings follow?',a:[['A star','bigStar'],['A river','waterWall'],['A camel','camel']],c:0},
    {id:'q3',q:'What do we celebrate at Genna?',a:[['The birth of Jesus Christ','manger'],['The new year','sun'],['The harvest','grain']],c:0},
   ]},
 ]
});
