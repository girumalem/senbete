/* Level II (Grades 1-3), February week 3: Healed by Her Faith (Mark 5:25-34) */
BKLesson({
 id:'L2-feb3', title:'Healed by Her Faith', am:'እምነትሽ አዳነሽ', sticker:'crowd',
 pages:[
  {game:'cover', bg:'day', title:'Healed by Her Faith', am:'እምነትሽ አዳነሽ',
   props:[{art:'crowd',x:220,y:440,s:.9},{art:'jesus',x:460,y:440,s:.6},{art:['woman',{robe:'#8C8478',netela:'#F4EEDF'}],x:620,y:440,s:.55}],
   say:['cover','[[selam]]! Today we meet a woman who had great faith in Jesus. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, February week 3: <b>Healed by Her Faith</b> (Mark 5:25-34). Aim: come to Jesus with faith.</p><p>Review: How many lepers came back to thank Jesus?</p>'},

  {game:'read', chip:'Read along', heading:'Twelve years', pic:['woman',{robe:'#8C8478',netela:'#F4EEDF'}],
   paras:[
    ['r1','There was a woman who had been sick for twelve years.'],
    ['r2','She went to many doctors, but no one could make her well. She was getting worse.'],
    ['r3','She heard that Jesus was passing by. She thought: If I just touch His clothes, I will be healed.'],
   ]},

  {game:'drag', bg:'day', chip:'Through the crowd',
   props:[{art:'crowd',x:300,y:440,s:.9},{art:'crowd',x:470,y:440,s:.8},{art:'jesus',x:650,y:440,s:.6}],
   zone:{x:540,y:260,w:240,h:190},
   items:[{art:['woman',{robe:'#8C8478',netela:'#F4EEDF'}],x:90,y:440,s:.55}],
   intro:['crowd','So many people were pressing around Jesus! Help the woman reach Him. Drag her through the crowd!'],
   done:['crowd-done','She touched His clothes, and at once she was healed!']},

  {game:'story', bg:'day', chip:'Who touched Me?',
   props:[{id:'jesus',art:'jesus',x:420,y:440,s:.6},{id:'peter',art:'peter',x:240,y:440,s:.55},{id:'wo',art:['woman',{robe:'#8C8478',netela:'#F4EEDF'}],x:600,y:440,s:.55}],
   beats:[
    {wiggle:['jesus'],say:['t1','Jesus stopped and turned around. Who touched My clothes? He asked.']},
    {wiggle:['peter'],say:['t2','The disciples said: So many people are crowding You, and You ask who touched You?']},
    {wiggle:['wo'],say:['t3','The woman came, shaking, and fell down before Him. She told Him everything. Tap her.'],tap:'wo'},
    {sfx:'glory',fx:'confetti',say:['t4','Jesus said kindly: Daughter, your faith has made you well. Go in peace.']},
   ],
   parent:'<p>"Daughter, thy faith hath made thee whole; go in peace." (Mark 5:34)</p>'},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','Read each sentence. Is it true, or false?'],
   items:[
    {id:'f1',s:'The woman had been sick for twelve years.',t:true,why:'True! And no doctor could help her.',pic:['woman',{robe:'#8C8478',netela:'#F4EEDF'}]},
    {id:'f2',s:'She asked Jesus to come to her house.',t:false,why:'False. She just touched His clothes, with faith.',pic:'jesus'},
    {id:'f3',s:'Jesus said: Your faith has made you well.',t:true,why:'True! Then He told her: Go in peace.',pic:'heart'},
   ],
   done:['tf-done','Great thinking!']},

  {game:'quiz', questions:[
    {id:'q1',q:'What did the woman touch?',a:[['Jesus\' clothes','jesus'],['A tree','fruitTree']],c:0},
    {id:'q2',q:'What healed her?',a:[['Her faith','heart'],['Medicine','pot']],c:0},
    {id:'q3',q:'What did Jesus call her?',a:[['Daughter',['woman',{robe:'#8C8478',netela:'#F4EEDF'}]],['Stranger','crowd']],c:0},
   ]},
  {game:'song', song:'enaminalen-be-ab-enaminalen'},
 ]
});
