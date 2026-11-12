/* Level III (Grades 4-6), Lent week 2: Esther, Part I (Esther 1-2; Esther 2:15) */
BKLesson({
 id:'L3-len2', title:'Esther Becomes Queen', am:'አስቴር', sticker:'gift',
 pages:[
  {game:'cover', bg:'gold', title:'Esther Becomes Queen', am:'አስቴር',
   props:[{art:['woman',{robe:'#6A3A8A',netela:'#E2A62B',crown:true}],x:640,y:440,s:.6},{art:'king',x:160,y:440,s:.6}],
   say:['cover','[[selam]]! An orphan girl named Esther became a queen. God had a plan for her! Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, Lent week 2: <b>Esther, Part I</b> (Esther 1-2). Aim: learn how God prepared Esther for a great task. Next week\'s lesson shows why.</p><p>Talk about it: Who raised Esther, and how did she show him respect?</p>'},

  {game:'read', chip:'Read', heading:'A great feast', pic:'cup',
   paras:[
    ['r1','Long ago, a king named Ahasuerus ruled a great kingdom. His wife was Queen Vashti.'],
    ['r2','The king held a big feast for everyone who worked in his kingdom. Food and drink were served on gold plates and in gold cups.'],
    ['r3','The king asked Queen Vashti to come in her royal clothes and jewels, so the guests could see her beauty. But she refused.'],
    ['r4','The king was very angry. He decided she would no longer be queen, and he would choose a new queen.'],
   ]},

  {game:'read', chip:'Read', heading:'Esther and Mordecai', pic:['figure',{robe:'#24418F',sleeve:'#24418F',beard:'white'}],
   paras:[
    ['r5','Esther was a young Jewish woman, one of God\'s people. She had no father or mother. Her uncle Mordecai raised her and cared for her.'],
    ['r6','When the king announced that he was looking for a new queen, Mordecai brought Esther to the palace.'],
    ['r7','Every young woman had twelve months of preparation before meeting the king. Esther listened to wise advice and was kind and humble.'],
   ]},

  {game:'story', bg:'gold', chip:'A crown for Esther',
   props:[{id:'king',art:'king',x:220,y:440,s:.6},{id:'es',art:['woman',{robe:'#6A3A8A',netela:'#E2A62B'}],x:520,y:440,s:.6},{id:'esq',art:['woman',{robe:'#6A3A8A',netela:'#E2A62B',crown:true}],x:520,y:440,s:.6,hidden:true}],
   beats:[
    {wiggle:['es'],say:['s1','When Esther\'s turn came, she stood before the king. Tap Esther.'],tap:'es'},
    {wiggle:['king'],say:['s2','The king loved Esther more than all the others. Everyone who saw her liked her.']},
    {hide:['es'],show:['esq'],sfx:'glory',fx:'confetti',say:['s3','He placed the royal crown on her head and made her queen! Then he held a great feast for Esther.']},
   ]},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Queen Vashti obeyed the king.',t:false,why:'She refused, so she lost her crown.',pic:'king'},
    {id:'t2',s:'Esther was raised by her uncle Mordecai.',t:true,why:'She had no father or mother.',pic:['figure',{robe:'#24418F',sleeve:'#24418F',beard:'white'}]},
    {id:'t3',s:'Esther was one of God\'s people.',t:true,why:'She was Jewish, though the king did not know it yet.',pic:'glory'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'The king\'s name was ___.',a:'Ahasuerus',opts:['Herod','Pharaoh']},
    {id:'f2',s:'The queen who refused the king was ___.',a:'Vashti',opts:['Sarah','Rachel']},
    {id:'f3',s:'Esther\'s uncle was named ___.',a:'Mordecai',opts:['Haman','Laban']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'Esther obtained favor in the sight of all who saw her.', ref:'Esther 2:15',
   chunks:['Esther obtained favor','in the sight','of all who saw her.'],
   intro:['verse-intro','Our memory verse is from the Book of Esther. Listen: Esther obtained favor in the sight of all who saw her. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Why did the king choose a new queen?',a:[['Queen Vashti refused him','king'],['He was bored','bed'],['A war started','spear']],c:0},
    {id:'q2',q:'Who brought Esther to the palace?',a:[['Her uncle Mordecai',['figure',{robe:'#24418F',sleeve:'#24418F',beard:'white'}]],['A soldier','soldier'],['A shepherd','shepherd']],c:0},
    {id:'q3',q:'What did the king give Esther?',a:[['A royal crown',['woman',{robe:'#6A3A8A',netela:'#E2A62B',crown:true}]],['A camel','camel'],['A boat','boat']],c:0},
   ]},
 ]
});
