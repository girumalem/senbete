/* Level I, Lent week 6: David and Jonathan (1 Samuel 18-20) */
BKLesson({
 id:'L1-len6', title:'David and Jonathan', am:'ዳዊትና ዮናታን', sticker:'heart',
 pages:[
  {game:'cover', bg:'field', title:'David and Jonathan', am:'ዳዊትና ዮናታን',
   props:[{art:['boy',{kind:'teen'}],x:330,y:430,s:.7},{art:['man',{robe:'#24418F'}],x:470,y:430,s:.66},{art:'heart',x:400,y:200,s:.6,anim:'bob'}],
   say:['cover','[[selam]]! Today is a story about two best friends, David and Jonathan. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, Lent week 6: <b>David and Jonathan</b> (1 Samuel 18-20). A story of true friendship, and of how jealousy hurts.</p>'},
  {game:'drag', bg:'field', chip:'Gifts for a friend',
   props:[{art:['boy',{kind:'teen'}],x:620,y:430,s:.72}],
   zone:{x:500,y:250,w:240,h:200},
   items:[{art:'blanket',x:150,y:420,s:.8},{art:'spear',x:280,y:420,s:.6},{art:'heart',x:200,y:300,s:.5}],
   intro:['gifts','Jonathan was the son of King Saul. He loved David like a brother, and gave him his own coat and his sword. Drag Jonathan\'s gifts to David!'],
   progress:'*{n} more*!',
   done:['gifts-done','David and Jonathan promised to be friends forever.']},
  {game:'story', bg:'gold', chip:'A jealous king',
   props:[{id:'saul',art:'king',x:600,y:430,s:.65},{id:'david',art:['boy',{kind:'teen'}],x:250,y:430,s:.7},{id:'jon',art:['man',{robe:'#24418F'}],x:420,y:430,s:.66,hidden:true}],
   beats:[
    {wiggle:['saul'],say:['j1','But King Saul became jealous, because the people praised David. He even wanted to hurt David. Tap the king.'],tap:'saul'},
    {show:['jon'],say:['j2','Jonathan said: Father, do not sin against David. He has done only good for you!']},
    {move:{david:[-80,430,.7]},sfx:'whoosh',say:['j3','Jonathan warned his friend, and helped David get away safely.']},
   ],
   parent:'<p>Talk about it: Jealousy made Saul do wrong. Jonathan was a true friend. How can we be a good friend?</p>'},
  {game:'quiz', questions:[
    {id:'q1',q:'Who was David\'s best friend?',a:[['Jonathan',['man',{robe:'#24418F'}]],['Goliath','soldier'],['A bear','bear']],c:0},
    {id:'q2',q:'Why was King Saul angry with David?',a:[['He was jealous','king'],['David was rude',['text',{t:'Rude',size:50,c:'#B3322A'}]],['He lost a sheep','sheep']],c:0},
    {id:'q3',q:'What does a good friend do?',a:[['Helps and protects','heart'],['Is jealous','darkCloud'],['Runs away',['text',{t:'Bye!',size:50,c:'#24418F'}]]],c:0},
   ]},
  {game:'song', song:'egziabher-yiwedenal-yitebike'},
 ]
});
