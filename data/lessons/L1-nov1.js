/* Level I, November week 1: Abraham, Sarah, and the Promise (Genesis 18, 21) */
BKLesson({
 id:'L1-nov1', title:'Abraham, Sarah and God\'s Promise', am:'አብርሃምና ሣራ', sticker:'tent',
 pages:[
  {game:'cover', bg:'desert', title:'God Keeps His Promise', am:'አብርሃምና ሣራ',
   props:[{art:'tent',x:560,y:400,s:1},{art:'abraham',x:260,y:425,s:.7,anim:'bob'},{art:'sarah',x:380,y:428,s:.66,anim:'bob'},{art:'camel',x:700,y:420,s:.5}],
   say:['cover','[[selam]]! Long after the great flood, there lived a holy man named Abraham. Let\'s hear about a promise God made to him. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, November week 1: <b>Abraham, Sarah, and the Promise</b> (Genesis 18 and 21). Objective: God fulfills His promise.</p>'},

  {game:'story', bg:'desert', chip:'A promise',
   props:[{art:'tent',x:620,y:400,s:1},{id:'abraham',art:'abraham',x:250,y:425,s:.72},{id:'sarah',art:'sarah',x:640,y:428,s:.62},{id:'poor',art:'man',x:90,y:430,s:.5},{id:'bread',art:'injera',x:160,y:350,s:.6,hidden:true},{id:'glory',art:'glory',x:400,y:110,s:.7,hidden:true}],
   beats:[
    {say:['a1','Abraham and his wife Sarah loved God. They helped the poor. Tap Abraham to share his food!'],tap:'abraham'},
    {show:['bread'],sfx:'pop',move:{bread:[100,320,.6]},say:['a2','Thank you, Abraham! But Abraham and Sarah had no children, and they grew very old.']},
    {show:['glory'],sfx:'glory',say:['a3','One day God said to Abraham: I will give you a child. Sarah your wife will have a son! Tap Sarah.'],tap:'sarah'},
    {wiggle:['sarah'],say:['a4','Sarah laughed in her heart, because she was too old to have a baby. But God knows even what we think!']},
    {say:['a5','God said: Why did Sarah laugh? Is anything too hard for the Lord? No! Nothing is too hard for God.']},
   ],
   parent:'<p>When Sarah heard the promise, she laughed in her heart because she was too old. God knew it, and said to Abraham, "Why did Sarah laugh? Is anything impossible for the Lord?"</p>'},

  {game:'tapmany', bg:'night', chip:'Count the stars',
   props:[{art:'tent',x:600,y:410,s:.8},{art:'abraham',x:250,y:425,s:.62}],
   area:{x0:0,y0:0,x1:800,y1:260}, count:10, spawn:{art:['star',{r:14,c:'#FFE18A'}],s:[.8,1.3],anim:'twinkle'}, sfx:'sparkle',
   progress:'*{n} more* stars to count!',
   intro:['stars','God also promised Abraham many, many grandchildren, more than the stars! Tap the sky to count ten stars.'],
   done:['stars-done','Ten stars! Abraham\'s family would be bigger than all the stars he could count.']},

  {game:'story', bg:'desert', chip:'Baby Isaac',
   props:[{art:'tent',x:620,y:400,s:1},{id:'abraham',art:'abraham',x:260,y:425,s:.72},{id:'sarah',art:['sarah',{arms:'hold',holdBaby:true,babyHalo:false}],x:400,y:428,s:.68},{id:'sp',art:'sparkles',x:400,y:280,hidden:true}],
   beats:[
    {say:['b1','Within a year, just as God promised, Sarah had a baby boy! Tap the baby!'],tap:'sarah'},
    {show:['sp'],fx:'confetti',say:['b2','They named him Isaac, [[yishak]]. Abraham was one hundred years old, and Sarah was ninety!']},
    {say:['b3','God always keeps His promises.']},
   ]},

  {game:'quiz', questions:[
    {id:'q1',q:'What did God promise Abraham and Sarah? A son, or a big house?',show:'What did God promise Abraham and Sarah?',a:[['A son','baby'],['A big house','tukul']],c:0},
    {id:'q2',q:'Did God keep His promise?',a:[['Yes!',['text',{t:'Yes',c:'#2F7A4E',size:70}]],['No',['text',{t:'No',size:70}]]],c:0},
    {id:'q3',q:'What was the name of the promised child?',a:[['Abraham','abraham'],['Isaac','isaacChild'],['Adam',['man',{}]]],c:1},
   ]},
  {game:'song', song:'le-getaye-le-egziabher-silad'},
 ]
});
