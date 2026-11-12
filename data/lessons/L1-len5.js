/* Level I, Lent week 5: David and Goliath (1 Samuel 17) */
BKLesson({
 id:'L1-len5', title:'David and Goliath', am:'ዳዊትና ጎልያድ', sticker:'sling',
 pages:[
  {game:'cover', bg:'mountain', title:'David and Goliath', am:'ዳዊትና ጎልያድ',
   props:[{art:['boy',{staff:true}],x:280,y:430,s:0.87},{art:['soldier',{beard:'dark'}],x:560,y:440,s:1}],
   say:['cover','[[selam]]! A giant soldier frightened everyone. But a young boy trusted God. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, Lent week 5: <b>David and Goliath</b> (1 Samuel 17).</p>'},
  {game:'story', bg:'mountain', chip:'The giant',
   props:[{id:'goliath',art:['soldier',{beard:'dark'}],x:600,y:440,s:1},{id:'s1',art:'soldier',x:150,y:440,s:.5},{id:'s2',art:'soldier',x:250,y:440,s:.5},{id:'david',art:['boy',{staff:true}],x:360,y:440,s:0.8,hidden:true}],
   beats:[
    {wiggle:['goliath'],sfx:'thunder',say:['g1','There was a giant called Goliath. He laughed at God\'s people. Who will fight me? he shouted. Tap the giant.'],tap:'goliath'},
    {wiggle:['s1','s2'],say:['g2','All the soldiers were afraid. He was so big and strong!']},
    {show:['david'],say:['g3','But young David said: God saved me from the lion and the bear. God will help me again!']},
   ]},
  {game:'tapmany', bg:'river', chip:'Five stones',
   props:[{art:['boy',{staff:true}],x:120,y:430,s:0.87}],
   area:{x0:200,y0:330,x1:800,y1:450}, count:5, max:5, spawn:{art:'stone',s:[.18,.24]}, sfx:'pop',
   intro:['stones','David did not wear armour. He took his sling, and five smooth stones from the stream. Tap the water to pick up five stones!'],
   progress:'*{n} more* stones!',
   done:['stones-done','Five smooth stones. Now David was ready, trusting in God.']},
  {game:'story', bg:'mountain', chip:'God gives victory',
   props:[{id:'goliath',art:['soldier',{beard:'dark'}],x:620,y:440,s:1},{id:'david',art:['boy',{staff:true}],x:200,y:440,s:0.87},{id:'sling',art:'sling',x:270,y:330,s:.8},{id:'stone',art:'stone',x:270,y:320,s:.12,hidden:true}],
   beats:[
    {say:['v1','Goliath laughed at David. But David said: I come to you in the name of the Lord! Tap the sling.'],tap:'sling'},
    {show:['stone'],move:{stone:[600,170,.12]},sfx:'whoosh',say:['v2','Whoosh! The stone flew straight to the giant\'s forehead.']},
    {move:{goliath:[660,520,1]},sfx:'rumble',say:['v3','Down fell Goliath! God gave David the victory.']},
    {fx:'confetti',sfx:'win',say:['v4','The people sang: Saul has killed his thousands, and David his ten thousands!']},
   ]},
  {game:'quiz', questions:[
    {id:'q1',q:'Who was Goliath?',a:[['A giant soldier','soldier'],['A shepherd','sheep'],['A king','king']],c:0},
    {id:'q2',q:'What did David use?',a:[['A sword','spear'],['A sling and a stone','sling'],['A boat','boat']],c:1},
    {id:'q3',q:'Who gave David the victory?',a:[['God','glory'],['The giant','soldier'],['The lion','lion']],c:0},
   ]},
  {game:'song', song:'zemiru-leamlakine-zemiru'},
 ]
});
