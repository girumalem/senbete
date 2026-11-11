/* Level I, December week 1: Moses & the Burning Bush (Exodus 3) */
BKLesson({
 id:'L1-dec1', title:'Moses and the Burning Bush', am:'ሙሴና ቁጥቋጦው', sticker:'burningBush',
 pages:[
  {game:'cover', bg:'mountain', title:'Moses and the Burning Bush', am:'ሙሴ በደብረ ሲና',
   props:[{art:'burningBush',x:520,y:330,s:.8},{art:'moses',x:260,y:425,s:.7,anim:'bob'},{art:'sheep',x:640,y:430,s:.5},{art:'sheep',x:120,y:432,s:.42,flip:true}],
   say:['cover','[[selam]]! Moses grew up in a king\'s palace in Egypt. He was kind and helped the poor. Today we see something amazing he saw on a mountain! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, December week 1: <b>Moses &amp; the Burning Bush</b> (Exodus 3). The church sings that the Virgin Mary is like this bush: she carried God and was not burned.</p>'},

  {game:'drag', bg:'mountain', chip:'Keeping the sheep',
   props:[{art:'moses',x:420,y:425,s:.66}],
   zone:{x:270,y:300,w:300,h:150},
   items:[{art:'sheep',x:80,y:410,s:.45},{art:'sheep',x:180,y:300,s:.4,flip:true},{art:'sheep',x:650,y:310,s:.42},{art:'sheep',x:730,y:420,s:.45,flip:true}],
   intro:['sheep','Moses took care of the sheep of his father-in-law. The sheep wandered away! Drag each sheep back to Moses.'],
   progress:'*{n} more* sheep!',
   done:['sheep-done','All the sheep are safe with Moses. Now they came to the mountain of God.']},

  {game:'story', bg:'mountain', chip:'The bush does not burn',
   props:[{id:'bush',art:'bush',x:560,y:350,s:.75},{id:'fire',art:'burningBush',x:560,y:350,s:.75,hidden:true},{id:'moses',art:'moses',x:220,y:425,s:.7},{id:'shoes',art:'sandals',x:300,y:430,s:.9,hidden:true}],
   beats:[
    {say:['b1','On the mountain, Moses saw a bush. Tap the bush!'],tap:'bush'},
    {show:['fire'],sfx:'whoosh',say:['b2','There was a fire burning in the middle of the bush. But the bush did not burn up! Moses went up to see.']},
    {move:{moses:[340,415,.7]},say:['b3','God called out: Moses! Moses! And Moses said: Here I am. Tap Moses.'],tap:'moses'},
    {show:['shoes'],move:{shoes:[230,430,.9]},sfx:'pop',say:['b4','God said: take your shoes off, because this place is holy. So Moses took off his shoes.']},
    {say:['b5','In Ethiopia we take off our shoes when we go into church too, because the church is holy.']},
   ]},

  {game:'story', bg:'egypt', chip:'Go to Egypt',
   props:[{id:'moses',art:'moses',x:200,y:425,s:.7,anim:'walk'},{id:'people',art:'man',x:620,y:430,s:.5},{id:'people2',art:'woman',x:700,y:432,s:.48},{id:'glory',art:'glory',x:400,y:80,s:.6}],
   beats:[
    {say:['e1','God told Moses: go back to Egypt and free My people. They are slaves there. I will be with you and help you. Tap Moses to send him.'],tap:'moses'},
    {move:{moses:[520,425,.7]},sfx:'whoosh',say:['e2','So Moses came down from the mountain, and went to Egypt to free God\'s people.'],wiggle:['people','people2']},
   ]},

  {game:'quiz', questions:[
    {id:'q1',q:'Where did Moses grow up? In his father\'s house, in a king\'s palace, or in a church?',show:'Where did Moses grow up?',a:[['His father\'s house','tukul'],['A king\'s palace','king'],['A church','church']],c:1},
    {id:'q2',q:'What was Moses doing when he came to the mountain? Playing, farming, or keeping sheep?',show:'What was Moses doing?',a:[['Playing','kebero'],['Farming','cow'],['Keeping the sheep','sheep']],c:2},
    {id:'q3',q:'What did Moses see on the mountain of God?',a:[['A fire in a bush','burningBush'],['A big tree','acacia'],['A lion','lion']],c:0},
    {id:'q4',q:'What did God tell Moses? To take off his shoes, to go to Egypt, or both?',show:'What did God tell Moses?',a:[['Take off his shoes','sandals'],['Go to Egypt','pyramid'],['Both!',['text',{t:'Both',size:60}]]],c:2},
   ]},
  {game:'song', song:'musse-zer-iye-zer-iye-bedebr', intro:['song-intro','Our song says: what Moses saw on Mount Sinai, the bush that stayed green, is like the Virgin Mary. Tap the kebero drum to play along with your teacher.']},
 ]
});
