/* Level I, Easter season week 2: Jesus Appears to the Disciples (John 20:19-28) */
BKLesson({
 id:'L1-eas2', title:'Peace Be with You', am:'ሰላም ለእናንተ', sticker:'door',
 pages:[
  {game:'cover', bg:'church', title:'Peace Be with You', am:'ሰላም ለእናንተ',
   props:[{art:'glory',x:400,y:300,s:1.3},{art:'jesus',x:400,y:430,s:.6},{art:'disciple',x:220,y:440,s:.55},{art:'peter',x:580,y:440,s:.55}],
   say:['cover','[[selam]]! Jesus rose from the dead on the third day. Today He comes to visit His friends. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, Easter week 2: <b>Jesus Appears to the Disciples</b> (John 20:19-28). Aim: learn about the resurrection of Jesus Christ.</p><p>Talk about it: How did Jesus come into the room? What did Thomas say when he saw Jesus?</p>'},

  {game:'story', bg:'church', chip:'A closed room',
   props:[{id:'door',art:'door',x:700,y:440,s:.9},{id:'peter',art:'peter',x:190,y:440,s:.55},{id:'d1',art:'disciple',x:300,y:440,s:.55},{id:'d2',art:['disciple',{robe:'#8A5A30'}],x:520,y:440,s:.55},{id:'glow',art:'glory',x:410,y:300,s:1.2,hidden:true},{id:'jesus',art:'jesus',x:410,y:430,s:.6,hidden:true}],
   beats:[
    {say:['r1','The disciples were together in a room. They were afraid, so they locked the door. Tap the door.'],tap:'door'},
    {wiggle:['door'],say:['r2','The door was shut tight. Nobody could come in.']},
    {show:['glow','jesus'],sfx:'glory',say:['r3','Then, without opening the door, Jesus stood in the middle of them!']},
    {wiggle:['jesus'],say:['r4','Jesus said: Peace be with you. Tap Jesus!'],tap:'jesus'},
    {fx:'confetti',say:['r5','The disciples were so happy to see the Lord!']},
   ],
   parent:'<p>The risen Lord came in "when the doors were shut" (John 20:19). His first word to them was "Peace be unto you."</p>'},

  {game:'tapmany', bg:'church', chip:'Peace for everyone',
   props:[{art:'jesus',x:400,y:430,s:.6}],
   area:{x0:0,y0:40,x1:800,y1:300}, count:6, spawn:{art:'dove',s:[.5,.7],anim:'bob'}, sfx:'note',
   progress:'*{n} more* doves!',
   intro:['peace','Jesus gives us His peace. Tap to send six doves of peace!'],
   done:['peace-done','When we greet each other in church, we say [[selam]], peace!']},

  {game:'story', bg:'church', chip:'Thomas believes',
   props:[{id:'thomas',art:['disciple',{robe:'#24418F',beard:'brown'}],x:180,y:440,s:.58},{id:'peter',art:'peter',x:640,y:440,s:.55},{id:'glow',art:'glory',x:420,y:300,s:1.2,hidden:true},{id:'jesus',art:'jesus',x:420,y:430,s:.6,hidden:true}],
   beats:[
    {wiggle:['thomas'],say:['t1','One disciple, Thomas, was not there. His friends told him: we have seen the Lord! Tap Thomas.'],tap:'thomas'},
    {say:['t2','Thomas said: I will not believe unless I see Him, and touch the marks in His hands.']},
    {show:['glow','jesus'],sfx:'glory',say:['t3','Eight days later, Jesus came again, and Thomas was there! Jesus said: Thomas, come and see My hands.']},
    {move:{thomas:[320,440,.58]},sfx:'whoosh',say:['t4','Thomas said: My Lord and my God! Tap Thomas.'],tap:'thomas'},
    {fx:'confetti',say:['t5','Jesus said: Blessed are those who have not seen, and yet believe. That means us!']},
   ],
   parent:'<p>"My Lord and my God." (John 20:28). We believe without seeing, and Jesus calls us blessed.</p>'},

  {game:'order', chip:'What happened first?',
   intro:['order','Put the story in order. Tap what happened first!'],
   cards:[
    {art:'door',cap:'The door was shut',say:['o1','The disciples locked the door.']},
    {art:'jesus',cap:'Jesus came in',say:['o2','Jesus stood in the middle and said: Peace be with you.']},
    {art:['disciple',{robe:'#24418F',beard:'brown'}],cap:'Thomas believed',say:['o3','Thomas saw Jesus and believed.']},
   ],
   done:['order-done','You told the whole story!']},

  {game:'quiz', questions:[
    {id:'q1',q:'What did Jesus say to His disciples?',a:[['Peace be with you','dove'],['Go to sleep','bed'],['I am hungry','injera']],c:0},
    {id:'q2',q:'Did Jesus open the door to come in?',a:[['Yes','door'],['No, He just came in!','glory']],c:1},
    {id:'q3',q:'Which disciple wanted to see Jesus first?',a:[['Thomas',['disciple',{robe:'#24418F',beard:'brown'}]],['Moses','moses'],['Noah','noah']],c:0},
   ]},
  {game:'song', song:'aman-be-aman'},
 ]
});
