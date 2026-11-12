/* Level I, December week 3: Manna from Heaven (Exodus 16) */
BKLesson({
 id:'L1-dec3', title:'Manna from Heaven', am:'መና', sticker:'basket',
 pages:[
  {game:'cover', bg:'desert', title:'Bread from Heaven', am:'መና ከሰማይ',
   props:[{art:'tent',x:620,y:400,s:.8},{art:'moses',x:260,y:425,s:.7,anim:'bob'},{art:'basket',x:420,y:420,s:1},{art:'manna',x:400,y:200,s:1.4,anim:'bob'},{art:'manna',x:520,y:140,s:1.2,anim:'bob',delay:-1}],
   say:['cover','[[selam]]! We saw two great miracles: the burning bush and the Red Sea. Today we see how God fed His people in the desert. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, December week 3: <b>Manna from Heaven</b> (Exodus 16).</p>'},

  {game:'story', bg:'desert', chip:'Hungry in the desert',
   props:[{id:'moses',art:'moses',x:220,y:425,s:.7},{id:'crowd',art:'crowd',x:480,y:440,s:.85},{id:'glory',art:'glory',x:400,y:90,s:.6,hidden:true}],
   beats:[
    {say:['h1','After they crossed the Red Sea, the people came to a desert. There was nothing to eat! Tap the people.'],tap:'crowd'},
    {wiggle:['crowd'],sfx:'no',say:['h2','They cried to Moses: why did you bring us here? In Egypt we had bread to eat!']},
    {show:['glory'],sfx:'glory',say:['h3','God heard them. He told Moses: I will give you bread from heaven.']},
   ]},

  {game:'tapmany', bg:'sunrise', chip:'Bread from heaven',
   props:[{art:'tent',x:150,y:400,s:.7},{art:'tent',x:650,y:405,s:.6}],
   area:{x0:0,y0:250,x1:800,y1:450}, count:8, spawn:{art:'manna',s:[.9,1.3],anim:'popin'}, sfx:'sparkle',
   progress:'*{n} more*!',
   intro:['manna','The next morning, there was white bread all over the ground! It was called manna. Tap the ground to find it.'],
   done:['manna-done','The manna was white, and tasted like a wafer made with honey. Yum!']},

  {game:'drag', bg:'sunrise', chip:'Fill the basket',
   props:[{id:'basket',art:'basket',x:400,y:420,s:1.3},{art:'girl',x:560,y:430,s:.7}],
   zone:{x:300,y:300,w:200,h:140},
   items:[{art:'manna',x:120,y:400,s:1.2},{art:'manna',x:220,y:330,s:1.2},{art:'manna',x:680,y:330,s:1.2},{art:'manna',x:720,y:420,s:1.2}],
   intro:['basket','Let\'s gather manna for breakfast. Drag it into the basket!'],
   progress:'*{n} more*!',
   done:['basket-done','God fed His people with bread from heaven every day for forty years!']},

  {game:'quiz', questions:[
    {id:'q1',q:'Why did the Israelites cry to Moses? They had no food, they were tired, or they didn\'t like Moses?',show:'Why did the Israelites cry to Moses?',a:[['No food','basket'],['They were tired','tent'],['They didn\'t like Moses','moses']],c:0},
    {id:'q2',q:'How did God feed them?',a:[['He gave them money','gift'],['Bread from heaven','manna'],['They went fishing','fish']],c:1},
    {id:'q3',q:'How long did God feed them with manna? 40 days, 40 years, or 25 years?',show:'How long did God feed them?',a:[['40 days',['text',{t:'40',size:70}]],['40 years',['text',{t:'40 yrs',size:52,c:'#2F7A4E'}]],['25 years',['text',{t:'25 yrs',size:52}]]],c:1},
    {id:'q4',q:'What did manna taste like? Ice cream, injera, or a wafer with honey?',show:'What did manna taste like?',a:[['Ice cream',['text',{t:'Ice cream',size:36,c:'#24418F'}]],['Injera','injera'],['Wafer with honey','manna']],c:2},
   ]},
  {game:'song', song:'ze-awredke-mena'},
 ]
});
