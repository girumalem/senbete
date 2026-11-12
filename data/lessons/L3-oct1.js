/* Level III (Grades 4-6), October week 1: Noah (Genesis 5-9; Hebrews 11:7) */
BKLesson({
 id:'L3-oct1', title:'Noah\'s Faith', am:'ኖኅ', sticker:'rainbow',
 pages:[
  {game:'cover', bg:'storm', title:'Noah\'s Faith', am:'ኖኅ',
   props:[{art:'ark',x:620,y:400,s:.7},{art:'noah',x:160,y:440,s:.6},{art:'dove',x:700,y:150,s:.6}],
   say:['cover','[[selam]]! [[noah]] lived when the whole earth was full of sin, but he stayed faithful to God. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, October week 1: <b>Noah</b> (Genesis 5-9). Aim: learn about the virtues of Noah: faith, obedience and thankfulness.</p><p>Talk about it: What was the first thing Noah did when he came out of the ark? Why did God like it?</p>'},

  {game:'read', chip:'Read', heading:'A righteous man', pic:'noah',
   paras:[
    ['r1','In Noah\'s time, people rebelled against God so much that God was sorry He had made mankind.'],
    ['r2','But [[noah]] was a holy man who loved God and lived by His law.'],
    ['r3','God told Noah to build an ark for his family and for the animals. God even taught him how: where to put the windows and the door, and how many rooms to make. Noah did everything God commanded.'],
   ]},

  {game:'read', chip:'Read', heading:'The flood and the dove', pic:'dove',
   paras:[
    ['r4','It rained for forty days and forty nights. Every living thing on the land was destroyed, except those in the ark.'],
    ['r5','The water stayed on the earth for one hundred and fifty days. Then the ark rested on the mountains of Ararat.'],
    ['r6','Noah sent out a raven, but it flew back and forth and never returned. He sent a dove, but it found no place to rest and came back.'],
    ['r7','Seven days later, he sent the dove again. It came back with an olive leaf in its beak! Now Noah knew the water was going down.'],
   ]},

  {game:'order', chip:'Put it in order',
   intro:['order','Tap the pictures in the order they happened.'],
   cards:[
    {art:'ark',cap:'Noah built the ark',say:['o1','Noah built the ark as God commanded.']},
    {art:'rain',cap:'Forty days of rain',say:['o2','It rained forty days and forty nights.']},
    {art:'raven',cap:'The raven never came back',say:['o3','The raven never came back.']},
    {art:'dove',cap:'The dove brought an olive leaf',say:['o4','The dove brought an olive leaf.']},
    {art:'rainbow',cap:'God\'s covenant: the rainbow',say:['o5','God made a covenant, with the rainbow as its sign.']},
   ],
   done:['order-done','That\'s the whole story in order!']},

  {game:'read', chip:'Read', heading:'Thanks and a promise', pic:'rainbow',
   paras:[
    ['r8','The first thing Noah did when he came out was build an altar and offer the best of his animals to God, with deep faith.'],
    ['r9','God was pleased. He blessed Noah: Be fruitful and multiply. And He made a covenant never to destroy the earth by flood again.'],
    ['r10','The sign of that covenant is the rainbow in the clouds.'],
   ]},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'It rained for ___ days and forty nights.',a:'forty',opts:['seven','ten']},
    {id:'f2',s:'The ark rested on the mountains of ___.',a:'Ararat',opts:['Sinai','Tabor']},
    {id:'f3',s:'The dove came back with an ___ leaf.',a:'olive',opts:['enset','fig']},
    {id:'f4',s:'The sign of God\'s covenant with Noah is the ___.',a:'rainbow',opts:['moon','star']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'By faith Noah, being divinely warned of things not yet seen, moved with godly fear, prepared an ark for the saving of his household.', ref:'Hebrews 11:7',
   chunks:['By faith Noah,','being divinely warned','of things not yet seen,','moved with godly fear,','prepared an ark','for the saving','of his household.'],
   intro:['verse-intro','This month\'s memory verse is from Hebrews, chapter eleven. Listen: By faith Noah, being divinely warned of things not yet seen, moved with godly fear, prepared an ark for the saving of his household. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Why did God save Noah?',a:[['He was righteous and obeyed God','noah'],['He was a king','king'],['He was strong','lion']],c:0},
    {id:'q2',q:'Which bird came back with a leaf?',a:[['The dove','dove'],['The raven','raven'],['The eagle','bird']],c:0},
    {id:'q3',q:'What did Noah do first after leaving the ark?',a:[['Offered a sacrifice to God','fire'],['Built a house','tukul'],['Went to sleep','bed']],c:0},
   ]},
 ]
});
