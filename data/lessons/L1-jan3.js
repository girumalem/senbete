/* Level I, January week 3: Baptism of Jesus Christ (Matthew 3). Celebrated in Ethiopia as Timket, January 19. */
BKLesson({
 id:'L1-jan3', title:'Jesus Is Baptized', am:'ጥምቀት', sticker:'dove',
 pages:[
  {game:'cover', bg:'river', title:'Jesus Is Baptized', am:'ጥምቀት',
   props:[{art:'johnBaptist',x:270,y:425,s:.68,anim:'bob'},{art:'jesus',x:470,y:440,s:.68},{art:'dove',x:600,y:190,s:1.2,anim:'bob'}],
   say:['cover','[[selam]]! In Ethiopia we celebrate [[timket]] with water, singing and the [[tabot]]. Today we learn why: it is the baptism of Jesus Christ! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, January week 3: <b>Baptism of Jesus Christ</b> (Matthew 3). In Ethiopia the feast is Timket, on January 19.</p>'},

  {game:'story', bg:'river', chip:'At the Jordan River',
   props:[{id:'john',art:'johnBaptist',x:250,y:425,s:.68},{id:'jesus',art:'jesusWalk',x:720,y:425,s:.66},{id:'crowd',art:'crowd',x:110,y:440,s:.6}],
   beats:[
    {say:['j1','A man named John was baptizing people in the Jordan River. Tap John!'],tap:'john'},
    {move:{jesus:[470,440,.66]},say:['j2','When Jesus was thirty years old, He came to the river to be baptized by John.']},
    {wiggle:['john'],say:['j3','John said: I need to be baptized by You! But Jesus wanted to set an example for us. Tap Jesus.'],tap:'jesus'},
    {fx:'flash',sfx:'whoosh',say:['j4','So John baptized Jesus in the Jordan River.']},
   ]},

  {game:'story', bg:'river', chip:'Two miracles',
   props:[{id:'glory',art:['glory',{hand:false}],x:470,y:30,s:.9,hidden:true},{art:'johnBaptist',x:260,y:425,s:.66},{id:'jesus',art:['jesus',{arms:'up'}],x:470,y:440,s:.68},{id:'dove',art:'dove',x:470,y:-40,s:1.3,anim:'bob'}],
   beats:[
    {say:['d1','When Jesus came out of the water, the heavens opened. Tap the sky!'],tap:'jesus'},
    {show:['glory'],move:{dove:[470,150,1.3]},sfx:'glory',say:['d2','The Holy Spirit came down upon Jesus like a dove!']},
    {say:['d3','And a voice came from heaven: This is My beloved Son, with whom I am well pleased.']},
   ],
   parent:'<p>When Jesus came out of the water, two miracles were seen: the Spirit of God came down like a dove, and a voice from heaven said, "This is My beloved Son, in whom I am well pleased."</p>'},

  {game:'tapmany', bg:'river', chip:'Timket',
   props:[{art:'priest',x:400,y:425,s:.7},{art:'crowd',x:170,y:445,s:.7},{art:'crowd',x:640,y:445,s:.7},{art:'procCross',x:290,y:330,s:.55}],
   area:{x0:0,y0:0,x1:800,y1:450}, count:8, spawn:{art:'raindrop',s:[.7,1.1],anim:'popin'}, sfx:'sparkle',
   progress:'*{n} more* splashes!',
   intro:['timket','At [[timket]], the priest blesses the water and sprinkles it on everyone. Tap to splash the holy water!'],
   done:['timket-done','Splash! Everyone is blessed. Happy [[timket]]!']},

  {game:'quiz', questions:[
    {id:'q1',q:'How old was Jesus when He was baptized? 3, 12, or 30?',show:'How old was Jesus?',a:[['3',['text',{t:'3'}]],['12',['text',{t:'12'}]],['30',['text',{t:'30'}]]],c:2},
    {id:'q2',q:'Who baptized Jesus?',a:[['Moses','moses'],['John','johnBaptist'],['Noah','noah']],c:1},
    {id:'q3',q:'How did the Holy Spirit come down?',a:[['Like a dove','dove'],['Like a lion','lion'],['Like rain','raindrop']],c:0},
   ]},
  {game:'song', song:'hore-eyesus-hore-eyesus'},
 ]
});
