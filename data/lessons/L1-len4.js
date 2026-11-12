/* Level I, Lent week 4: David Plays the Harp (1 Samuel 16:14-23) */
BKLesson({
 id:'L1-len4', title:'David Plays the Begena', am:'ዳዊት በገና ደረደረ', sticker:'begena',
 pages:[
  {game:'cover', bg:'gold', title:'David Plays the Begena', am:'ዳዊት በገና ደረደረ',
   props:[{art:['boy',{kind:'teen'}],x:330,y:430,s:.7},{art:'begena',x:450,y:430,s:.9},{art:'king',x:620,y:430,s:.6}],
   say:['cover','[[selam]]! David played a harp, like our [[begena]]. Today his music helps a sad king. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, Lent week 4: <b>David Plays the Harp</b> (1 Samuel 16:14-23). The Ethiopian begena is called the harp of David, and is played in prayer, especially during Lent.</p>'},
  {game:'story', bg:'gold', chip:'A troubled king',
   props:[{id:'saul',art:'king',x:560,y:430,s:.65},{id:'cloud',art:'darkCloud',x:560,y:170,s:.8},{id:'servant',art:'man',x:250,y:430,s:.6}],
   beats:[
    {say:['k1','Saul was the first king of Israel. But he did not obey God, and he became very troubled and sad. Tap King Saul.'],tap:'saul'},
    {wiggle:['servant'],say:['k2','His servant said: I know a boy who plays the harp beautifully. His name is David!']},
   ]},
  {game:'tapmany', bg:'gold', chip:'Play the begena',
   props:[{id:'cloud',art:'darkCloud',x:560,y:170,s:.8},{art:'king',x:600,y:430,s:.65},{art:['boy',{kind:'teen'}],x:200,y:430,s:.7},{art:'begena',x:320,y:430,s:1.1}],
   area:{x0:220,y0:250,x1:420,y1:450}, count:8, spawn:{art:'star',s:[.2,.3]}, sfx:'note',
   at:{8:{hide:['cloud'],sfx:'glory'}},
   progress:'*{n} more* notes!',
   intro:['play','David came and played for the king. Tap the begena strings to play eight notes!'],
   done:['play-done','The music was so beautiful! The trouble left King Saul, and he felt peaceful again.']},
  {game:'quiz', questions:[
    {id:'q1',q:'What did David play?',a:[['A harp, like the begena','begena'],['A drum','kebero'],['A trumpet','horn']],c:0},
    {id:'q2',q:'How did the king feel after the music?',a:[['Peaceful','sun'],['Angry','darkCloud'],['Hungry','bowl']],c:0},
    {id:'q3',q:'Who was the first king of Israel?',a:[['Saul','king'],['Noah','noah'],['Peter','peter']],c:0},
   ]},
  {game:'song', song:'zemiru-leamlakine-zemiru'},
 ]
});
