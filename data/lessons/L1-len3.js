/* Level I, Lent week 3: David Chosen King (1 Samuel 16) */
BKLesson({
 id:'L1-len3', title:'God Chooses David', am:'ዳዊት ተቀባ', sticker:'horn',
 pages:[
  {game:'cover', bg:'sunrise', title:'God Chooses David', am:'ዳዊት ተቀባ',
   props:[{art:'priest',x:330,y:430,s:.62},{art:['boy',{staff:true}],x:470,y:440,s:0.87},{art:'horn',x:400,y:240,s:.7}],
   say:['cover','[[selam]]! Do you remember David, the shepherd boy? Today God chooses him to be king! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, Lent week 3: <b>David Chosen King</b> (1 Samuel 16). A prophet is someone God sends to tell His message.</p>'},
  {game:'story', bg:'sunrise', chip:'Samuel comes',
   props:[{id:'samuel',art:'priest',x:160,y:430,s:.62},{id:'horn',art:'horn',x:230,y:330,s:.5},{id:'jesse',art:['man',{beard:'white'}],x:420,y:430,s:.6},{id:'s1',art:'soldier',x:560,y:430,s:.6},{id:'s2',art:'man',x:660,y:430,s:.58}],
   beats:[
    {say:['s1','God told the prophet Samuel: fill your horn with oil, and go to Jesse. One of his sons will be king. Tap the horn.'],tap:'horn'},
    {wiggle:['s1'],say:['s2','Jesse\'s tall, strong son came first. Samuel thought: this must be the one! Tap him.'],tap:'s1'},
    {wiggle:['samuel'],say:['s3','But God said: No. People look at the outside, but God looks at the heart.']},
    {wiggle:['s2'],sfx:'no',say:['s4','Seven sons came, and God did not choose any of them.']},
   ],
   parent:'<p>"The Lord does not look at the things people look at. People look at the outward appearance, but the Lord looks at the heart." (1 Samuel 16:7)</p>'},
  {game:'story', bg:'field', chip:'The youngest son',
   props:[{id:'samuel',art:'priest',x:300,y:430,s:.62},{id:'david',art:['boy',{staff:true}],x:760,y:430,s:0.87},{id:'sheep',art:'sheep',x:660,y:430,s:.4},{id:'horn',art:'horn',x:360,y:300,s:.5},{id:'sp',art:'sparkles',x:480,y:250,s:1.2,hidden:true}],
   beats:[
    {say:['y1','Samuel asked: Are these all your sons? Jesse said: The youngest is keeping the sheep. Tap David to call him!'],tap:'david'},
    {move:{david:[470,430,0.87]},sfx:'whoosh',say:['y2','David came running from the field.']},
    {wiggle:['horn'],say:['y3','God said: This is the one! Tap the horn of oil.'],tap:'horn'},
    {move:{horn:[440,260,.5]},show:['sp'],sfx:'glory',fx:'confetti',say:['y4','Samuel poured the oil on David\'s head. God chose David to be king!']},
   ]},
  {game:'quiz', questions:[
    {id:'q1',q:'Who did God send to Jesse?',a:[['Samuel the prophet','priest'],['A soldier','soldier'],['A lion','lion']],c:0},
    {id:'q2',q:'What does God look at?',a:[['How tall we are','soldier'],['Our heart','heart'],['Our clothes','blanket']],c:1},
    {id:'q3',q:'What was David doing when Samuel came?',a:[['Keeping the sheep','sheep'],['Sleeping','bed'],['Fishing','fish']],c:0},
   ]},
  {game:'song', song:'yematankelafa-tigu-eregnachi'},
 ]
});
