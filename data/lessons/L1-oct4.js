/* Level I, October week 4: God Saves Noah & His Family (Genesis 7) */
BKLesson({
 id:'L1-oct4', title:'God Keeps Noah Safe', am:'ኖኅና መርከቡ', sticker:'ark',
 pages:[
  {game:'cover', bg:'day', title:'God Keeps Noah Safe', am:'ኖኅና መርከቡ',
   props:[{art:'ark',x:470,y:372,s:.72,anim:'bob'},{art:'rainbow',x:400,y:380,s:.72},{art:'noah',x:190,y:420,s:.62,anim:'bob'},{art:['dove',{leaf:true}],x:640,y:120,s:.9,anim:'fly',dur:6}],
   say:['cover','[[selam]]! What is a flood? It is when a lot of rain falls. Today we hear how God kept a good man named Noah safe. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, October week 4: <b>God Saves Noah &amp; His Family</b> (Genesis 7). Let your child do the tapping and dragging. Selam reads everything out loud.</p>'},

  {game:'story', bg:'day', chip:'Noah loves God',
   props:[{id:'noah',art:'noah',x:250,y:420,s:.72,anim:'bob'},{id:'p1',art:'man',x:560,y:425,s:.55,hidden:true},{id:'p2',art:'woman',x:650,y:430,s:.52,hidden:true},{id:'glory',art:'glory',x:400,y:90,s:.8,hidden:true}],
   beats:[
    {say:['s1','There was a man named Noah. Noah loved God and did what God said. Tap Noah!'],tap:'noah'},
    {show:['p1','p2'],say:['s2','But the other people did not listen to God. They did many bad things.'],wiggle:['p1','p2']},
    {show:['glory'],sfx:'glory',say:['s3','God said to Noah: build a big ship, an *ark*! I will keep you and your family safe. Tap the light!'],tap:'glory'},
   ],
   parent:'<p>Ask: Why did God want to save Noah? (Because Noah loved God and kept His commandments.)</p>'},

  {game:'tapmany', bg:'day', chip:'Build the ark',
   props:[{id:'ark',art:'ark',x:440,y:400,s:.12},{id:'noah',art:'noah',x:150,y:425,s:.62},{id:'p1',art:'man',x:690,y:430,s:.5}],
   area:{x0:0,y0:0,x1:800,y1:450}, count:6, max:6,
   spawn:{art:'sparkles',s:[.5,.8]}, sfx:'pop',
   at:{1:{move:{ark:[440,400,.22]}},2:{move:{ark:[440,400,.34]}},3:{move:{ark:[440,400,.46]},wiggle:['p1']},4:{move:{ark:[440,400,.58]}},5:{move:{ark:[440,400,.68]}},6:{move:{ark:[440,400,.8]}}},
   progress:'Bang, bang! *{n} more* taps to finish the ark.',
   intro:['build','Let\'s help Noah build the ark! Tap, tap, tap, six times, like a hammer.'],
   done:['build-done','The ark is finished! The people laughed at Noah, but Noah kept working for God.'],
   parent:'<p>The people mocked Noah while he built the ship. Ask: Did Noah stop when people laughed? What do we do when someone laughs at us for loving God?</p>'},

  {game:'drag', bg:'day', chip:'Two by two',
   props:[{id:'ark',art:'ark',x:470,y:400,s:.8},{art:'noah',x:760,y:430,s:.5}],
   zone:{x:330,y:220,w:280,h:170},
   items:[{art:'lion',x:90,y:300,s:.42},{art:'lion',x:200,y:300,s:.38,flip:true},{art:'sheep',x:640,y:420,s:.4},{art:'sheep',x:740,y:420,s:.38,flip:true},{art:'elephant',x:690,y:300,s:.36},{art:'giraffe',x:250,y:410,s:.38}],
   intro:['animals','God told Noah to bring the animals into the ark. Drag each animal into the ark!'],
   progress:'*{n} more* animals!',
   done:['animals-done','Everyone is inside: Noah, his family, and all the animals. Then the door closed.'],
   parent:'<p>Noah took his family and two of every kind of animal into the ark.</p>'},

  {game:'tapmany', bg:'storm', chip:'40 days and 40 nights',
   props:[{id:'ark',art:'ark',x:400,y:350,s:.62,anim:'rock'},{id:'rain',art:'rain',x:0,y:0,s:1,hidden:true}],
   area:{x0:0,y0:0,x1:800,y1:240}, count:6, spawn:{art:'raindrop',s:[.8,1.2],anim:'fall'}, sfx:'pop',
   at:{3:{show:['rain'],sfx:'thunder'}},
   progress:'Tap the clouds! *{n} more*.',
   intro:['rain','It started to rain. Tap the dark clouds to make it rain!'],
   done:['rain-done','It rained for forty days and forty nights! But the ark floated, and everyone inside was safe, because God was with them.'],
   parent:'<p>Ask: How long did it rain? (40 days and 40 nights.) Who was safe? (Noah, his family and the animals.)</p>'},

  {game:'story', bg:'day', chip:'God\'s promise',
   props:[{id:'ark',art:'ark',x:470,y:400,s:.66},{id:'sun',art:'sun',x:660,y:110,s:.7,anim:'bob'},{id:'noah',art:'noah',x:180,y:430,s:.6,hidden:true},{id:'fam',art:'noahWife',x:270,y:432,s:.55,hidden:true},{id:'rainbow',art:'rainbow',x:400,y:330,s:1,hidden:true},{id:'dove',art:['dove',{leaf:true}],x:300,y:150,s:1,anim:'fly',hidden:true}],
   beats:[
    {say:['p1','The rain stopped, and the earth was dry again. Tap the sun!'],tap:'sun'},
    {show:['noah','fam','dove'],sfx:'whoosh',say:['p2','Noah and his family came out of the ark with all the animals.']},
    {show:['rainbow'],sfx:'glory',say:['p3','God made a promise to Noah: I will never again destroy the whole earth with a flood. God put a rainbow in the sky. Tap the rainbow!'],tap:'rainbow'},
    {fx:'confetti',say:['p4','God always keeps His promises. When you see a rainbow, remember God\'s promise!']},
   ],
   parent:'<p>God promised Noah that He would never again destroy the earth because of man\'s sin.</p>'},

  {game:'quiz', questions:[
    {id:'q1',q:'Who did God tell to build a big ship?',a:[['Noah','noah'],['A king','king'],['A lion','lion']],c:0},
    {id:'q2',q:'Who went into the ark with Noah?',a:[['A big tree','acacia'],['His family and the animals','sheep'],['The sun','sun']],c:1},
    {id:'q3',q:'How long did it rain? Was it 3 days, 40 days, or 100 days?',show:'How long did it rain?',a:[['3 days',['text',{t:'3'}]],['40 days',['text',{t:'40'}]],['100 days',['text',{t:'100',size:70}]]],c:1},
    {id:'q4',q:'What did God put in the sky to remember His promise?',a:[['A moon','moon'],['A rainbow','rainbow'],['A bird','bird']],c:1},
   ], parent:'<p>Picture quiz. Selam reads each question and your child taps a picture. A right answer on the first try earns a star.</p>'},

  {game:'song', song:'mariam-sheshesh-keherods-fit', parent:'<p>Practice this song with the teacher. It is the same song as last week\'s lesson.</p>'},
 ]
});
