/* Level I, Easter season week 3: Birth of the Virgin Mary (Synaxarium, Ginbot 1) */
BKLesson({
 id:'L1-eas3', title:'Baby Mary Is Born', am:'ልደታ ለማርያም', sticker:'adeyAbeba',
 pages:[
  {game:'cover', bg:'garden', title:'Baby Mary Is Born', am:'ልደታ ለማርያም',
   props:[{art:['figure',{robe:'#F4EEDF',sleeve:'#F4EEDF',beard:'white',halo:true,staff:true}],x:250,y:440,s:.6},{art:['figure',{robe:'#24418F',netela:'#FFFFFF',halo:true,arms:'pray'}],x:550,y:440,s:.6},{art:'baby',x:470,y:400,s:1.6},{art:'adeyAbeba',x:120,y:420,s:.6},{art:'adeyAbeba',x:690,y:420,s:.6}],
   say:['cover','[[selam]]! [[mariam]] is the mother of Jesus. God chose her because she was pure and holy. Today we learn how baby [[mariam]] was born! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, Easter week 3: <b>Birth of the Virgin Mary</b> (Synaxarium, Ginbot 1, May 9). Aim: learn about the birth of the Virgin Mary, the mother of our Lord.</p><p>Talk about it: What were the names of Mary\'s father and mother? What did they promise God?</p>'},

  {game:'story', bg:'garden', chip:'Joachim and Anna pray',
   props:[{id:'tukul',art:'tukul',x:640,y:440,s:.7},{id:'jo',art:['figure',{robe:'#F4EEDF',sleeve:'#F4EEDF',beard:'white',halo:true,staff:true}],x:230,y:440,s:.6},{id:'an',art:['figure',{robe:'#24418F',netela:'#FFFFFF',halo:true,arms:'pray'}],x:400,y:440,s:.6},{id:'glow',art:'glory',x:320,y:150,s:.9,hidden:true}],
   beats:[
    {say:['p1','There was a kind husband and wife called Joachim and Anna. Tap them!'],tap:'jo'},
    {wiggle:['tukul'],say:['p2','They lived together for a long, long time, but they had no child.']},
    {wiggle:['an'],say:['p3','Still they loved God. They kept His commandments, and they prayed every day for a child. Tap Anna praying.'],tap:'an'},
    {show:['glow'],sfx:'glory',say:['p4','They made a promise: God, if You give us a child, the child will serve You all of its life.']},
   ],
   parent:'<p>Joachim and Anna stayed faithful even when they were old. Nothing is impossible with God.</p>'},

  {game:'story', bg:'garden', chip:'A baby girl!',
   props:[{id:'jo',art:['figure',{robe:'#F4EEDF',sleeve:'#F4EEDF',beard:'white',halo:true,staff:true}],x:230,y:440,s:.6},{id:'an',art:['figure',{robe:'#24418F',netela:'#FFFFFF',halo:true,arms:'pray'}],x:570,y:440,s:.6},{id:'glow',art:'glory',x:400,y:330,s:1,hidden:true},{id:'baby',art:'baby',x:400,y:395,s:1.8,hidden:true}],
   beats:[
    {say:['b1','Joachim and Anna grew very old. But God saw their faith.']},
    {show:['glow','baby'],sfx:'glory',say:['b2','God gave them a beautiful baby girl! Tap the baby.'],tap:'baby'},
    {wiggle:['baby'],say:['b3','They named her [[mariam]]. She was born on the first day of the month Ginbot.']},
    {fx:'confetti',say:['b4','Every year, on that day, we celebrate her birthday in church. It is called Lideta.']},
   ],
   parent:'<p>The Church celebrates Lideta Le Mariam on Ginbot 1 (May 9).</p>'},

  {game:'tapmany', bg:'garden', chip:'Flowers for Mary',
   props:[{art:['figure',{robe:'#24418F',netela:'#FFFFFF',halo:true,arms:'pray'}],x:400,y:440,s:.6},{art:'baby',x:480,y:400,s:1.6}],
   area:{x0:0,y0:260,x1:800,y1:450}, count:8, spawn:{art:'adeyAbeba',s:[.4,.6],anim:'rock'}, sfx:'pop',
   progress:'*{n} more* flowers!',
   intro:['flowers','Let\'s celebrate baby [[mariam]]! Tap to grow eight yellow [[adey-abeba]] flowers.'],
   done:['flowers-done','Happy birthday, [[mariam]]! Joachim and Anna thanked God with joy.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who were Mary\'s mother and father?',a:[['Joachim and Anna',['figure',{robe:'#24418F',netela:'#FFFFFF',halo:true,arms:'pray'}]],['Abraham and Sarah','abraham'],['Noah and his wife','noah']],c:0},
    {id:'q2',q:'What did Joachim and Anna do every day?',a:[['They prayed','glory'],['They went fishing','fish'],['They slept all day','bed']],c:0},
    {id:'q3',q:'What did God give them?',a:[['A baby girl','baby'],['A camel','camel'],['A boat','boat']],c:0},
   ]},
  {game:'song', song:'meserete-hiwot-mariam-beredi'},
 ]
});
