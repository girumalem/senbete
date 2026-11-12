/* Level I, December week 4: Water from a Rock (Exodus 17) */
BKLesson({
 id:'L1-dec4', title:'Water from a Rock', am:'ከዓለት ውኃ', sticker:'rockWater',
 pages:[
  {game:'cover', bg:'desert', title:'Water from a Rock', am:'ከዓለት ውኃ',
   props:[{art:['rockWater',{water:true}],x:520,y:420,s:1.1},{art:['moses',{arms:'up'}],x:260,y:425,s:.7,anim:'bob'}],
   say:['cover','[[selam]]! God gave His people bread from heaven. Today we see how He kept taking care of them. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, December week 4: <b>Water from a Rock</b> (Exodus 17).</p>'},

  {game:'story', bg:'desert', chip:'So thirsty',
   props:[{id:'crowd',art:'crowd',x:600,y:440,s:.85},{id:'moses',art:'moses',x:250,y:425,s:.7},{id:'rock',art:'rockWater',x:430,y:420,s:1}],
   beats:[
    {say:['t1','The people walked and walked in the hot desert. They were very thirsty, and there was no water. Tap the people.'],tap:'crowd'},
    {wiggle:['crowd'],sfx:'no',say:['t2','They complained to Moses. They forgot all the miracles God did for them.']},
    {say:['t3','But Moses prayed to God for water. Tap Moses to pray.'],tap:'moses'},
    {say:['t4','God told Moses: hit the rock with your rod, the same rod that opened the Red Sea.']},
   ]},

  {game:'story', bg:'desert', chip:'Hit the rock',
   props:[{id:'moses',art:['moses',{arms:'up'}],x:230,y:425,s:.7},{id:'rock',art:'rockWater',x:480,y:420,s:1.1},{id:'water',art:['rockWater',{water:true}],x:480,y:420,s:1.1,hidden:true}],
   beats:[
    {say:['w1','Tap the rock!'],tap:'rock'},
    {hide:['rock'],show:['water'],sfx:'whoosh',fx:'flash',say:['w2','Water came pouring out of the rock, like a spring!']},
   ]},

  {game:'drag', bg:'desert', chip:'Everyone drinks',
   props:[{art:['rockWater',{water:true}],x:560,y:400,s:1.1}],
   zone:{x:330,y:330,w:300,h:120},
   items:[{art:'pot',x:90,y:420,s:.8},{art:'sheep',x:180,y:330,s:.4},{art:'boy',x:200,y:430,s:.55},{art:'cow',x:90,y:300,s:.35}],
   intro:['drink','Bring everyone to the water! Drag the water jar, the children and the animals to the stream.'],
   progress:'*{n} more*!',
   done:['drink-done','All the people, their children and their animals drank. God takes care of us, even when we forget to thank Him.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Why did the people cry to Moses this time?',a:[['They wanted water','pot'],['They wanted a house','tukul'],['They wanted a horse','horse']],c:0},
    {id:'q2',q:'What did God tell Moses to do?',a:[['Hit a rock with his rod','rockWater'],['Go to a river','fish'],['Dig a hole','stone']],c:0},
    {id:'q3',q:'What other miracle did Moses do with his rod?',a:[['He opened the Red Sea','waterWall'],['He made a rainbow','rainbow'],['He built an ark','ark']],c:0},
   ]},
  {game:'song', song:'ze-awredke-mena'},
 ]
});
