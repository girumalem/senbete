/* Level I, January week 1: The Birthday of Jesus Christ (Matthew 1-2, Luke 2). Ethiopian Christmas, Genna, is on January 7 (Tahsas 29). */
BKLesson({
 id:'L1-jan1', title:'Jesus Is Born', am:'ገና', sticker:'manger',
 pages:[
  {game:'cover', bg:'night', title:'Jesus Is Born!', am:'ልደት · ገና',
   props:[{art:'stable',x:400,y:420,s:.9},{art:'bigStar',x:400,y:80,s:1.2},{art:['manger',{baby:true}],x:400,y:410,s:.9},{art:'mary',x:290,y:425,s:.55},{art:'joseph',x:510,y:425,s:.55},{art:'sheep',x:640,y:430,s:.45}],
   say:['cover','[[selam]]! Why do we celebrate Christmas, [[genna]]? Because it is the birthday of our Lord Jesus Christ! Our church celebrates it on January seventh. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, January week 1: <b>The Birthday of Jesus Christ</b> (Matthew 1 and 2, Luke 2). The Ethiopian Orthodox Church celebrates Christmas (Genna) on January 7.</p>'},

  {game:'story', bg:'night', chip:'No room',
   props:[{id:'fam',art:'family',x:150,y:425,s:.75,anim:'walk'},{id:'house',art:'tukul',x:520,y:420,s:.7},{id:'stable',art:'stable',x:620,y:430,s:.6,hidden:true}],
   beats:[
    {say:['n1','The Virgin [[mariam]] and Joseph travelled to Bethlehem. Tap the house to look for a place to stay.'],tap:'house'},
    {move:{fam:[330,425,.75]},sfx:'no',say:['n2','But there was no room for them anywhere.']},
    {show:['stable'],move:{fam:[460,425,.75]},say:['n3','The only place they could find was a stable, where animals sleep.']},
   ]},

  {game:'story', bg:'night', chip:'In a manger',
   props:[{art:'stable',x:400,y:425,s:.95},{id:'mary',art:'mary',x:280,y:425,s:.62},{id:'joseph',art:'joseph',x:530,y:425,s:.62},{id:'manger',art:'manger',x:400,y:420,s:.9},{id:'baby',art:['manger',{baby:true}],x:400,y:420,s:.9,hidden:true},{art:'sheep',x:650,y:430,s:.42},{art:'cow',x:150,y:430,s:.42},{id:'star',art:'bigStar',x:400,y:70,s:1}],
   beats:[
    {say:['m1','That night, the Virgin [[mariam]] gave birth to baby Jesus. Tap the manger!'],tap:'manger'},
    {show:['baby'],fx:'flash',sfx:'glory',say:['m2','She wrapped Him in cloths and laid Him in the manger. The Savior of the world was born!']},
   ],
   parent:'<p>A manger is the box that animals eat from. Ask: Where was Jesus Christ born? (In Bethlehem, in a manger.)</p>'},

  {game:'find', bg:'night', chip:'The shepherds',
   props:[{art:'shepherd',x:110,y:430,s:.62},{art:'shepherd',x:690,y:430,s:.6}],
   spots:[{x:230,y:370,art:'sheep',s:.45,say:['f1','A sheep!']},{x:400,y:380,art:'sheep',s:.45,say:['f2','Another sheep!']},{x:560,y:370,art:'sheep',s:.45,say:['f3','One more!']}],
   intro:['find','Near Bethlehem, shepherds were watching their sheep at night. Some sheep are hiding. Tap the bushes to find them!'],
   done:['find-done','All the sheep are safe. Then something wonderful happened!']},

  {game:'tapmany', bg:'night', chip:'Glory to God!',
   props:[{art:'shepherd',x:250,y:430,s:.62},{art:'shepherd',x:550,y:430,s:.6},{id:'angel',art:'gabriel',x:400,y:280,s:.55,anim:'bob'}],
   area:{x0:0,y0:0,x1:800,y1:240}, count:6, spawn:{art:['angelHead',{s:.45}],s:[.6,.8],anim:'bob'}, sfx:'note',
   progress:'*{n} more* angels!',
   intro:['angels','An angel came to the shepherds and said: Do not be afraid! I bring you good news of great joy. A Savior is born! Tap the sky to fill it with angels.'],
   done:['angels-done','All the angels praised God: Glory to God in the highest, and on earth peace! The shepherds ran to Bethlehem and found baby Jesus, just as the angel said.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Why do we celebrate Christmas?',a:[['It is Jesus\' birthday','babyJesus'],['It is New Year','adeyAbeba'],['It is Meskel','cross']],c:0},
    {id:'q2',q:'Where was baby Jesus laid?',a:[['In a boat','boat'],['In a manger','manger'],['In a tent','tent']],c:1},
    {id:'q3',q:'Who told the shepherds the good news?',a:[['A king','king'],['An angel','angel'],['A lion','lion']],c:1},
   ]},
  {game:'song', song:'beberet-tegna-becherk-teteke'},
 ]
});
