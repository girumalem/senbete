/* Level I, Easter season week 8: St. Peter's First Miracle (Acts 3) */
BKLesson({
 id:'L1-eas8', title:'Get Up and Walk!', am:'የጴጥሮስ ተአምር', sticker:'gate',
 pages:[
  {game:'cover', bg:'day', title:'Get Up and Walk!', am:'የጴጥሮስ ተአምር',
   props:[{art:'gate',x:400,y:440,s:.85},{art:'peter',x:260,y:440,s:.55},{art:['disciple',{robe:'#B3322A'}],x:540,y:440,s:.55}],
   say:['cover','[[selam]]! The Holy Spirit gave the disciples power to do miracles in the name of Jesus. Today we see the first miracle of Saint [[petros]]! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, Easter week 8: <b>St. Peter\'s First Miracle</b> (Acts 3). Aim: learn about St. Peter\'s miracle at the Beautiful Gate.</p><p>Talk about it: What did the man ask for? What did Peter give him?</p>'},

  {game:'story', bg:'day', chip:'The Beautiful Gate',
   props:[{id:'gate',art:'gate',x:560,y:440,s:.85},{id:'man',art:'lameMan',x:560,y:445,s:.6},{id:'peter',art:'peter',x:110,y:440,s:.55},{id:'john',art:['disciple',{robe:'#B3322A'}],x:200,y:440,s:.55}],
   beats:[
    {say:['g1','[[petros]] and John were going to the temple to pray. Tap them!'],tap:'peter'},
    {wiggle:['gate'],say:['g2','The door of the temple was called the Beautiful Gate. Tap the gate.'],tap:'gate'},
    {wiggle:['man'],say:['g3','A man sat at the gate. He could not walk, ever since he was born. Every day he asked people for money.']},
    {move:{peter:[330,440,.55],john:[420,440,.55]},sfx:'whoosh',say:['g4','He saw [[petros]] and John and asked them for money too. Tap the man.'],tap:'man'},
   ],
   parent:'<p>The man had been lame from birth and was carried daily to the Beautiful Gate to beg (Acts 3:2).</p>'},

  {game:'story', bg:'day', chip:'In the name of Jesus',
   props:[{art:'gate',x:560,y:440,s:.85},{id:'man',art:'lameMan',x:560,y:445,s:.6},{id:'up',art:['seeingMan',{robe:'#8C8478'}],x:560,y:440,s:.58,hidden:true},{id:'peter',art:'peter',x:330,y:440,s:.55},{art:['disciple',{robe:'#B3322A'}],x:220,y:440,s:.55}],
   beats:[
    {wiggle:['peter'],say:['n1','[[petros]] said: Look at us. Silver and gold I do not have.']},
    {say:['n2','But what I have, I give you: In the name of Jesus Christ, get up and walk! Tap [[petros]].'],tap:'peter'},
    {hide:['man'],show:['up'],sfx:'glory',say:['n3','[[petros]] took his hand, and at once his feet and legs became strong!']},
    {move:{up:[620,400,.58]},fx:'confetti',say:['n4','The man jumped up! He walked and leaped and praised God! Tap him!'],tap:'up'},
   ],
   parent:'<p>"Silver and gold have I none; but such as I have give I thee: In the name of Jesus Christ of Nazareth rise up and walk." (Acts 3:6)</p>'},

  {game:'tapmany', bg:'day', chip:'Jump for joy',
   props:[{art:'gate',x:400,y:440,s:.7},{art:['seeingMan',{robe:'#8C8478'}],x:400,y:430,s:.58}],
   area:{x0:0,y0:20,x1:800,y1:260}, count:8, spawn:{art:'star',s:[.4,.6],anim:'bob'}, sfx:'pop',
   progress:'*{n} more* jumps!',
   intro:['jump','The man was so happy! Tap the sky eight times to jump and praise God with him!'],
   done:['jump-done','Everyone in the temple was amazed. They knew God did this miracle.']},

  {game:'order', chip:'What happened first?',
   intro:['order','Put the story in order. Tap what happened first!'],
   cards:[
    {art:'gate',cap:'Going to the temple',say:['o1','[[petros]] and John went to the temple to pray.']},
    {art:'lameMan',cap:'He asked for money',say:['o2','The man at the gate asked for money.']},
    {art:['seeingMan',{robe:'#8C8478'}],cap:'He walked and jumped!',say:['o3','In the name of Jesus, he walked and jumped!']},
   ],
   done:['order-done','You told the whole story!']},

  {game:'quiz', questions:[
    {id:'q1',q:'Where was the man sitting?',a:[['At the Beautiful Gate','gate'],['In a boat','boat'],['On a mountain','walia']],c:0},
    {id:'q2',q:'What did Peter give the man?',a:[['Gold coins','table'],['He made him walk, in Jesus\' name','peter']],c:1},
    {id:'q3',q:'What did the man do then?',a:[['Went back to sleep','bed'],['Jumped and praised God','sparkles']],c:1},
   ]},
  {game:'song', song:'tenageru-dink-sirawin-meskir'},
 ]
});
