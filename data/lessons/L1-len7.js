/* Level I, Lent week 7: David Remembers Jonathan's Kindness (2 Samuel 1 and 9) */
BKLesson({
 id:'L1-len7', title:'David Keeps His Promise', am:'ዳዊት ቃሉን ጠበቀ', sticker:'bowl',
 pages:[
  {game:'cover', bg:'gold', title:'David Keeps His Promise', am:'ዳዊት ቃሉን ጠበቀ',
   props:[{art:['king',{beard:'dark',robe:'#24418F'}],x:330,y:430,s:.66},{art:['man',{staff:true,robe:'#8C8478'}],x:480,y:430,s:.6}],
   say:['cover','[[selam]]! Do you remember David\'s friend Jonathan? They made a promise. Let\'s see how David kept it! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, Lent week 7: <b>David Remembers Jonathan\'s Kindness</b> (2 Samuel 1 and 9).</p>'},
  {game:'story', bg:'gold', chip:'King David',
   props:[{id:'david',art:['king',{beard:'dark',robe:'#24418F'}],x:300,y:430,s:.66},{id:'servant',art:'man',x:560,y:430,s:.6}],
   beats:[
    {say:['k1','Jonathan had asked David: always be kind to my family. And David promised.']},
    {wiggle:['david'],say:['k2','Years later, David became king. He remembered his promise. Tap King David.'],tap:'david'},
    {wiggle:['servant'],say:['k3','He asked: Is anyone left from Jonathan\'s family, so I can be kind to him? A servant said: Jonathan has a son. He cannot walk well.']},
   ]},
  {game:'drag', bg:'gold', chip:'A place at the table',
   props:[{art:['table',{coins:false}],x:420,y:440,s:1.4},{art:['king',{beard:'dark',robe:'#24418F'}],x:640,y:430,s:.62}],
   zone:{x:280,y:260,w:280,h:190},
   items:[{art:['man',{staff:true,robe:'#8C8478'}],x:120,y:430,s:.55,to:[330,440,.55]},{art:'bowl',x:160,y:300,s:.6},{art:'injera',x:240,y:330,s:.5}],
   intro:['table','King David said: Come and eat at my table every day! Drag Jonathan\'s son and the food to the king\'s table.'],
   progress:'*{n} more*!',
   done:['table-done','Jonathan\'s son ate at the king\'s table every day. David kept his promise!']},
  {game:'quiz', questions:[
    {id:'q1',q:'What did David promise Jonathan?',a:[['To be kind to his family','heart'],['To give him a sheep','sheep'],['To build a boat','boat']],c:0},
    {id:'q2',q:'Did David keep his promise?',a:[['Yes',['text',{t:'Yes',size:60,c:'#2F7A4E'}]],['No',['text',{t:'No',size:60,c:'#B3322A'}]]],c:0},
    {id:'q3',q:'Where did Jonathan\'s son eat?',a:[['At the king\'s table','table'],['In the field','sheep'],['On a boat','boat']],c:0},
   ]},
 ]
});
