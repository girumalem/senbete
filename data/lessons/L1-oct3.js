/* Level I, October week 3: Baby Jesus & Virgin Mary go to Egypt (Matthew 2) */
BKLesson({
 id:'L1-oct3', title:'Baby Jesus Goes to Egypt', am:'ስደት ወደ ግብፅ', sticker:'donkey',
 pages:[
  {game:'cover', bg:'egypt', title:'Baby Jesus Goes to Egypt', am:'ስደት ወደ ግብፅ',
   props:[{art:'family',x:330,y:420,s:1.05,anim:'walk'},{art:'gabriel',x:640,y:250,s:.5,anim:'bob'}],
   say:['cover','[[selam]]! Do you know the story of Christmas? Jesus Christ was born of the Virgin [[mariam]]. Then He had to go on a long trip. Let\'s find out why! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, October week 3: <b>Baby Jesus &amp; Virgin Mary go to Egypt</b> (Gospel of Matthew, chapter 2). In Ethiopia this flight (Sedet) is remembered especially during Tsome Tsige.</p>'},

  {game:'story', bg:'night', chip:'An angel\'s message',
   props:[{id:'mary',art:'maryBaby',x:300,y:425,s:.72},{id:'joseph',art:'joseph',x:470,y:425,s:.72},{id:'king',art:'king',x:690,y:425,s:.62,hidden:true},{id:'angel',art:'gabriel',x:600,y:260,s:.62,hidden:true,anim:'bob'}],
   beats:[
    {say:['e1','When baby Jesus was born, He lived with His mother, the Virgin [[mariam]], and Joseph. Tap baby Jesus!'],tap:'mary'},
    {show:['king'],sfx:'rumble',say:['e2','But there was a bad king named Herod. He heard that Jesus was a king, and he wanted to hurt Him.']},
    {hide:['king'],show:['angel'],sfx:'glory',say:['e3','Then an angel came to Joseph. Tap the angel!'],tap:'angel'},
    {say:['e4','The angel said: take [[mariam]] and baby Jesus to Egypt, so that Herod cannot find them! And Joseph did what the angel said.']},
   ],
   parent:'<p>When Jesus Christ was born, there was a bad king in Jerusalem named Herod. An angel told Joseph to take the Virgin Mary and baby Jesus to Egypt so that Herod would not find them.</p>'},

  {game:'drag', bg:'night', chip:'Get ready',
   props:[{id:'donkey',art:['donkey',{saddle:true}],x:430,y:410,s:.95},{art:'joseph',x:690,y:425,s:.62}],
   zone:{x:320,y:250,w:240,h:170},
   items:[{art:'pot',x:110,y:250,s:.8},{art:'injera',x:110,y:380,s:.9},{art:'blanket',x:230,y:420,s:.9}],
   intro:['pack','Joseph got a donkey ready for Mary and the baby. Help pack for the trip! Drag the water, the food and the blanket onto the donkey.'],
   progress:'*{n} more* to pack!',
   done:['pack-done','All packed! Mary sat on the donkey with baby Jesus, and Joseph walked beside them.']},

  {game:'tapmany', bg:'egypt', chip:'The long walk',
   props:[{id:'fam',art:'family',x:120,y:425,s:.75,anim:'walk'},{id:'s1',art:'soldier',x:40,y:430,s:.45,hidden:true},{id:'s2',art:'soldier',x:100,y:432,s:.42,hidden:true},{id:'angel',art:'gabriel',x:300,y:150,s:.35,anim:'bob',hidden:true}],
   area:{x0:0,y0:0,x1:800,y1:450}, count:5, spawn:{art:'sparkles',s:[.3,.5]}, sfx:'pop',
   at:{1:{move:{fam:[240,425,.75]}},2:{move:{fam:[350,425,.75],angel:[440,140,.35]},show:['angel']},3:{move:{fam:[460,425,.75],angel:[540,140,.35]},show:['s1','s2'],sfx:'rumble'},4:{move:{fam:[560,425,.75],angel:[620,140,.35]},hide:['s1','s2']},5:{move:{fam:[650,425,.75],angel:[700,140,.35]}}},
   progress:'Keep walking! *{n} more* taps.',
   intro:['walk','Egypt was very far away. Tap to help the family walk all the way to Egypt!'],
   done:['walk-done','Herod\'s soldiers followed them, but God protected them, and the soldiers could not find them. The angel Gabriel helped them on the way, and they arrived in Egypt safely!'],
   parent:'<p>They went to Egypt on foot. It was very far, but God was with them, and the angel Gabriel was also helping them on the way. They stayed in Egypt for three and a half years before they returned.</p>'},

  {game:'quiz', questions:[
    {id:'q1',q:'Who wanted to hurt baby Jesus?',a:[['Joseph','joseph'],['King Herod','king'],['An angel','angel']],c:1},
    {id:'q2',q:'Where did the family go?',a:[['To the sea','fish'],['To Egypt','pyramid'],['To the mountains','walia']],c:1},
    {id:'q3',q:'What did the Virgin Mary ride on?',a:[['A donkey','donkey'],['A camel','camel'],['A boat','boat']],c:0},
   ]},
  {game:'song', song:'mariam-sheshesh-keherods-fit'},
 ]
});
