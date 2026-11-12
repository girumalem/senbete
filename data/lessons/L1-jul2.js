/* Level I, July week 2: Elijah Fed by Ravens (1 Kings 17:1-7) */
BKLesson({
 id:'L1-jul2', title:'Ravens Feed Elijah', am:'ቁራዎች ኤልያስን መገቡት', sticker:'raven',
 pages:[
  {game:'cover', bg:'river', title:'Ravens Feed Elijah', am:'ቁራዎች ኤልያስን መገቡት',
   props:[{art:['figure',{robe:'#7A5230',sleeve:'#7A5230',beard:'white',halo:true,staff:true,mantle:'#5A3D25'}],x:400,y:440,s:.6},{art:'raven',x:250,y:180,s:1.3},{art:'raven',x:580,y:200,s:1.2,flip:true}],
   say:['cover','[[selam]]! Today we meet a prophet called Elijah. A prophet is a man of God who tells people God\'s messages. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, July week 2: <b>Elijah Fed by Ravens</b> (1 Kings 17:1-7). Aim: learn about God\'s care for those who keep His commandments.</p><p>Talk about it: Why did the rain stop? How did God feed Elijah?</p>'},

  {game:'story', bg:'desert', chip:'No more rain',
   props:[{id:'king',art:'king',x:200,y:440,s:.55},{id:'eli',art:['figure',{robe:'#7A5230',sleeve:'#7A5230',beard:'white',halo:true,staff:true,mantle:'#5A3D25'}],x:560,y:440,s:.6}],
   beats:[
    {wiggle:['king'],say:['n1','King Ahab worshipped idols. Idols are statues that people pray to instead of God. Tap the king.'],tap:'king'},
    {wiggle:['eli'],say:['n2','God\'s commandment says: Do not worship any other gods. Elijah loved God and kept His commandments. Tap Elijah.'],tap:'eli'},
    {sfx:'whoosh',say:['n3','Elijah told the king: There will be no rain! And the land became dry and dusty.']},
   ],
   parent:'<p>Because Ahab worshipped idols, Elijah announced a drought (1 Kings 17:1).</p>'},

  {game:'drag', bg:'river', chip:'Go to the river',
   props:[],
   zone:{x:420,y:300,w:340,h:150},
   items:[{art:['figure',{robe:'#7A5230',sleeve:'#7A5230',beard:'white',halo:true,staff:true,mantle:'#5A3D25'}],x:140,y:440,s:.55,to:[580,440,.55]}],
   intro:['river','God told Elijah: Go and hide by a little river. Drink the water there. Drag Elijah to the river!'],
   done:['river-done','Elijah obeyed God. Now, who will bring him food?']},

  {game:'tapmany', bg:'river', chip:'Bread from the ravens',
   props:[{art:['figure',{robe:'#7A5230',sleeve:'#7A5230',beard:'white',halo:true,staff:true,mantle:'#5A3D25'}],x:580,y:440,s:.55}],
   area:{x0:0,y0:20,x1:800,y1:260}, count:6, spawn:{art:'raven',s:[.7,1],anim:'bob'}, sfx:'whoosh',
   progress:'*{n} more* ravens!',
   intro:['ravens','God sent big black birds called ravens. Every morning and every evening they brought Elijah bread and meat! Tap to bring six ravens.'],
   done:['ravens-done','God takes care of those who keep His commandments!']},

  {game:'order', chip:'What happened first?',
   intro:['order','Put the story in order. Tap what happened first!'],
   cards:[
    {art:'king',cap:'The king prayed to idols',say:['o1','King Ahab worshipped idols.']},
    {art:'sun',cap:'No more rain',say:['o2','There was no rain, and the land was dry.']},
    {art:'raven',cap:'Ravens fed Elijah',say:['o3','God sent ravens to feed Elijah.']},
   ],
   done:['order-done','You told the whole story!']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who brought Elijah food?',a:[['Ravens','raven'],['Lions','lion'],['Fish','fish']],c:0},
    {id:'q2',q:'Where did Elijah drink water?',a:[['From a little river','raindrop'],['From a big jar','jar']],c:0},
    {id:'q3',q:'Who did Elijah worship?',a:[['Only God','glory'],['Idols','stone']],c:0},
   ]},
  {game:'song', song:'etigdifenne-we-itimeninenne'},
 ]
});
