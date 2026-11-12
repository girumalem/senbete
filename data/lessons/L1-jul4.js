/* Level I, July week 4: Elijah and the Widow II (1 Kings 17:17-24) */
BKLesson({
 id:'L1-jul4', title:'Elijah Prays for the Boy', am:'ኤልያስ ለልጁ ጸለየ', sticker:'heart',
 pages:[
  {game:'cover', bg:'sunrise', title:'Elijah Prays for the Boy', am:'ኤልያስ ለልጁ ጸለየ',
   props:[{art:['figure',{robe:'#7A5230',sleeve:'#7A5230',beard:'white',halo:true,staff:true,mantle:'#5A3D25'}],x:220,y:440,s:.6},{art:['woman',{robe:'#5A5F6E',netela:'#FFFFFF'}],x:560,y:440,s:.6},{art:'boy',x:470,y:440,s:.8}],
   say:['cover','[[selam]]! Elijah stayed in the widow\'s house, and the flour and oil never ran out. Today another miracle happens in her house! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, July week 4: <b>Elijah and the Widow, part 2</b> (1 Kings 17:17-24). Aim: learn how God heard Elijah\'s prayer and raised the widow\'s son.</p><p>Talk about it: What did Elijah do when the boy died? What did the widow say at the end?</p>'},

  {game:'story', bg:'dark', chip:'A sad day',
   props:[{id:'bed',art:'bed',x:420,y:440,s:.9},{id:'boy',art:['sleeper',{}],x:420,y:410,s:.5},{id:'w',art:['woman',{robe:'#5A5F6E',netela:'#FFFFFF'}],x:660,y:440,s:.6},{id:'eli',art:['figure',{robe:'#7A5230',sleeve:'#7A5230',beard:'white',halo:true,staff:true,mantle:'#5A3D25'}],x:180,y:440,s:.6}],
   beats:[
    {wiggle:['boy'],say:['s1','One day the widow\'s only son became very sick, and he died.']},
    {wiggle:['w'],say:['s2','The widow was very sad. She cried to Elijah. Tap the widow.'],tap:'w'},
    {wiggle:['eli'],say:['s3','Elijah said: Give me your son. He carried the boy upstairs and laid him on his bed.']},
   ],
   parent:'<p>Keep this gentle: the boy became sick and died, and his mother was very sad.</p>'},

  {game:'tapmany', bg:'dark', chip:'Elijah prays',
   props:[{art:'bed',x:420,y:440,s:.9},{art:'sleeper',x:420,y:410,s:.5},{art:['figure',{robe:'#7A5230',sleeve:'#7A5230',beard:'white',halo:true,mantle:'#5A3D25',arms:'up'}],x:200,y:440,s:.6}],
   area:{x0:0,y0:20,x1:800,y1:260}, count:3, spawn:{art:'glory',s:[.4,.5],anim:'bob'}, sfx:'glory',
   progress:'*{n} more* prayers!',
   intro:['pray','Elijah prayed to God three times: Lord, please let this boy\'s life come back to him! Tap three times to pray with Elijah.'],
   done:['pray-done','God heard the prayer of Elijah.']},

  {game:'story', bg:'sunrise', chip:'He is alive!',
   props:[{id:'sleep',art:'sleeper',x:420,y:430,s:.5},{id:'boy',art:['boy',{arms:'up'}],x:420,y:440,s:.8,hidden:true},{id:'eli',art:['figure',{robe:'#7A5230',sleeve:'#7A5230',beard:'white',halo:true,staff:true,mantle:'#5A3D25'}],x:200,y:440,s:.6},{id:'w',art:['woman',{robe:'#5A5F6E',netela:'#FFFFFF'}],x:650,y:440,s:.6}],
   beats:[
    {hide:['sleep'],show:['boy'],sfx:'glory',say:['l1','The boy opened his eyes. He was alive! Tap the boy.'],tap:'boy'},
    {move:{boy:[560,440,.8]},sfx:'whoosh',say:['l2','Elijah brought him down to his mother and said: Look, your son is alive!']},
    {fx:'confetti',say:['l3','The widow said: Now I know that you are a man of God, and God\'s word in your mouth is true!']},
   ],
   parent:'<p>"Now by this I know that thou art a man of God, and that the word of the Lord in thy mouth is truth." (1 Kings 17:24)</p>'},

  {game:'quiz', questions:[
    {id:'q1',q:'What did Elijah do for the boy?',a:[['He prayed to God','glory'],['He ran away','sandals']],c:0},
    {id:'q2',q:'How many times did Elijah pray?',a:[['Three times',['text',{t:'3',size:90,c:'#24418F'}]],['One time',['text',{t:'1',size:90,c:'#24418F'}]]],c:0},
    {id:'q3',q:'Was the widow happy at the end?',a:[['Yes, very happy!','heart'],['No','raindrop']],c:0},
   ]},
  {game:'song', song:'behiwot-akoyito-beselam-bete'},
 ]
});
