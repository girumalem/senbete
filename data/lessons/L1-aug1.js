/* Level I, August week 1: Elijah Is Taken Up to Heaven (2 Kings 2) */
BKLesson({
 id:'L1-aug1', title:'Elijah Goes Up to Heaven', am:'ኤልያስ ወደ ሰማይ አረገ', sticker:'chariot',
 pages:[
  {game:'cover', bg:'heaven', title:'Elijah Goes Up to Heaven', am:'ኤልያስ ወደ ሰማይ አረገ',
   props:[{art:'chariot',x:480,y:330,s:.8},{art:['figure',{robe:'#7A5230',sleeve:'#7A5230',beard:'white',halo:true,staff:true,mantle:'#5A3D25'}],x:520,y:300,s:.4},{art:['figure',{robe:'#2F7A4E',sleeve:'#2F7A4E',beard:'dark',halo:true}],x:200,y:440,s:.55}],
   say:['cover','[[selam]]! We learned how God cared for the prophet Elijah. Today God takes Elijah up to heaven in a very special way! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, August week 1: <b>Elijah Is Taken Up to Heaven</b> (2 Kings 2). Aim: learn about the ascension of Elijah into heaven.</p><p>Talk about it: Who was Elijah\'s helper? How did Elijah go up to heaven?</p>'},

  {game:'story', bg:'river', chip:'To the Jordan River',
   props:[{id:'eli',art:['figure',{robe:'#7A5230',sleeve:'#7A5230',beard:'white',halo:true,staff:true,mantle:'#5A3D25'}],x:160,y:440,s:.58},{id:'elisha',art:['figure',{robe:'#2F7A4E',sleeve:'#2F7A4E',beard:'dark',halo:true}],x:260,y:440,s:.55},{id:'p1',art:'man',x:700,y:440,s:.4},{id:'p2',art:['man',{robe:'#8A5A30'}],x:750,y:440,s:.4}],
   beats:[
    {wiggle:['elisha'],say:['j1','Elijah had a helper called Elisha. Elisha followed him everywhere. Tap Elisha.'],tap:'elisha'},
    {wiggle:['eli'],say:['j2','God called Elijah to go to the Jordan River, and Elisha went with him.']},
    {wiggle:['p1','p2'],say:['j3','Fifty other prophets came too, to see what would happen.']},
   ],
   parent:'<p>Elisha would not leave Elijah: "As the Lord liveth... I will not leave thee." (2 Kings 2:2)</p>'},

  {game:'story', bg:'river', chip:'Dry ground',
   props:[{id:'eli',art:['figure',{robe:'#7A5230',sleeve:'#7A5230',beard:'white',halo:true,staff:true,mantle:'#5A3D25'}],x:300,y:440,s:.58},{id:'elisha',art:['figure',{robe:'#2F7A4E',sleeve:'#2F7A4E',beard:'dark',halo:true}],x:200,y:440,s:.55},{id:'wall1',art:'waterWall',x:430,y:450,s:.35,hidden:true},{id:'wall2',art:'waterWall',x:640,y:450,s:.35,hidden:true}],
   beats:[
    {wiggle:['eli'],say:['d1','Elijah rolled up his mantle, his big cloak, and hit the water with it. Tap Elijah!'],tap:'eli'},
    {show:['wall1','wall2'],sfx:'whoosh',say:['d2','The water split in two, and they walked across on dry ground!']},
    {move:{eli:[700,440,.58],elisha:[600,440,.55]},say:['d3','Elijah asked: What can I do for you before I go? Elisha said: Please give me a double share of your spirit.']},
   ],
   parent:'<p>Elijah struck the Jordan with his mantle and the waters parted (2 Kings 2:8).</p>'},

  {game:'story', bg:'heaven', chip:'A chariot of fire',
   props:[{id:'eli',art:['figure',{robe:'#7A5230',sleeve:'#7A5230',beard:'white',halo:true,staff:true,mantle:'#5A3D25'}],x:460,y:440,s:.58},{id:'elisha',art:['figure',{robe:'#2F7A4E',sleeve:'#2F7A4E',beard:'dark',halo:true}],x:200,y:440,s:.55},{id:'car',art:'chariot',x:500,y:440,s:.8,hidden:true}],
   beats:[
    {show:['car'],sfx:'whoosh',say:['c1','As they walked and talked, a chariot of fire with horses of fire came between them! Tap the chariot.'],tap:'car'},
    {move:{car:[520,170,.6],eli:[540,150,.4]},sfx:'glory',say:['c2','Elijah went up to heaven in a whirlwind!']},
    {hide:['car','eli'],wiggle:['elisha'],say:['c3','Elisha cried: My father, my father! Elijah left his mantle behind for Elisha.']},
    {fx:'confetti',say:['c4','Elijah did not die. God took him up to heaven!']},
   ],
   parent:'<p>"There appeared a chariot of fire, and horses of fire... and Elijah went up by a whirlwind into heaven." (2 Kings 2:11)</p>'},

  {game:'tapmany', bg:'heaven', chip:'Up, up, up!',
   props:[{art:['figure',{robe:'#2F7A4E',sleeve:'#2F7A4E',beard:'dark',halo:true}],x:200,y:440,s:.55},{art:'chariot',x:520,y:200,s:.6}],
   area:{x0:0,y0:20,x1:800,y1:300}, count:6, spawn:{art:'flame',s:[.5,.7],anim:'bob'}, sfx:'whoosh',
   progress:'*{n} more*!',
   intro:['fire','Tap the sky to make the chariot of fire shine!'],
   done:['fire-done','What a wonderful way to go to heaven!']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who was Elijah\'s helper?',a:[['Elisha',['figure',{robe:'#2F7A4E',sleeve:'#2F7A4E',beard:'dark',halo:true}]],['Moses','moses'],['Noah','noah']],c:0},
    {id:'q2',q:'How did Elijah cross the river?',a:[['On a boat','boat'],['The water split in two','waterWall']],c:1},
    {id:'q3',q:'How did Elijah go up to heaven?',a:[['On a chariot of fire','chariot'],['On a camel','camel']],c:0},
   ]},
  {game:'song', song:'behiwot-akoyito-beselam-bete'},
 ]
});
