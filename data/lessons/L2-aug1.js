/* Level II (Grades 1-3), August week 1: The Obedient Son (Matthew 21:28-31) */
BKLesson({
 id:'L2-aug1', title:'The Two Sons', am:'ሁለቱ ልጆች', sticker:'grapes',
 pages:[
  {game:'cover', bg:'field', title:'The Two Sons', am:'ሁለቱ ልጆች',
   props:[{art:['figure',{robe:'#F4EEDF',sleeve:'#F4EEDF',beard:'white',staff:true}],x:160,y:440,s:.6},{art:['boy',{robe:'#2F7A4E'}],x:600,y:440,s:.65},{art:['boy',{robe:'#B3322A'}],x:700,y:440,s:.65},{art:'grapes',x:260,y:300,s:.6}],
   say:['cover','[[selam]]! Jesus told a story about a father and his two sons. Which son really obeyed? Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, August week 1: <b>The Obedient Son</b> (Matthew 21:28-31). Aim: learn about obedience, and saying sorry.</p><p>Review: Who saved Qirkos and Iyalota from the fire?</p>'},

  {game:'read', chip:'Read along', heading:'A father and his vineyard', pic:'grapes',
   paras:[
    ['r1','A man had two sons. He also had a vineyard, a garden full of grapes.'],
    ['r2','He worked in the vineyard to feed his family.'],
    ['r3','One day he needed help. Let\'s see what his sons did.'],
   ]},

  {game:'story', bg:'field', chip:'The first son',
   props:[{id:'dad',art:['figure',{robe:'#F4EEDF',sleeve:'#F4EEDF',beard:'white',staff:true}],x:180,y:440,s:.6},{id:'s1',art:['boy',{robe:'#2F7A4E'}],x:420,y:440,s:.65},{id:'vine',art:'grapes',x:650,y:330,s:.8}],
   beats:[
    {wiggle:['dad'],say:['a1','The father said to his first son: Go and work in the vineyard today.']},
    {wiggle:['s1'],say:['a2','The son said: No, I will not go! Tap the first son.'],tap:'s1'},
    {say:['a3','But later, he was sorry that he had said no to his father.']},
    {move:{s1:[620,440,.65]},sfx:'glory',say:['a4','So he said sorry, and he went to work in the vineyard.']},
   ]},

  {game:'story', bg:'field', chip:'The second son',
   props:[{id:'dad',art:['figure',{robe:'#F4EEDF',sleeve:'#F4EEDF',beard:'white',staff:true}],x:180,y:440,s:.6},{id:'s2',art:['boy',{robe:'#B3322A'}],x:420,y:440,s:.65},{id:'vine',art:'grapes',x:650,y:330,s:.8},{id:'bed',art:'bed',x:420,y:440,s:.6,hidden:true}],
   beats:[
    {wiggle:['dad'],say:['b1','Then the father said the same thing to his second son.']},
    {wiggle:['s2'],say:['b2','The second son said: Yes, father, I will go! Tap the second son.'],tap:'s2'},
    {move:{s2:[300,440,.65]},show:['bed'],say:['b3','But he never went. He only said yes, but he did not do it.']},
   ]},

  {game:'match', chip:'Which son?', heading:'Match each son to what he did',
   intro:['match-intro','Tap what the son said, then tap what he really did.'],
   pairs:[['First son: No, I won\'t go.','He said sorry and went',null,['boy',{robe:'#2F7A4E'}]],['Second son: Yes, I will go!','He never went',null,['boy',{robe:'#B3322A'}]]],
   done:['match-done','The first son did what his father wanted!']},

  {game:'think', chip:'Think and talk', heading:'Think and talk',
   qs:[['t1','Which son obeyed his father?','The first one. He was sorry, and then he did the work.'],['t2','What can you do when you make a mistake?','Say sorry, ask for forgiveness, and do the right thing.'],['t3','How can you obey your parents and teachers this week?','Listen the first time, and help without being asked!']]},

  {game:'quiz', questions:[
    {id:'q1',q:'Which son obeyed in the end?',a:[['The first son',['boy',{robe:'#2F7A4E'}]],['The second son',['boy',{robe:'#B3322A'}]]],c:0},
    {id:'q2',q:'What grew in the vineyard?',a:[['Grapes','grapes'],['Fish','fish']],c:0},
    {id:'q3',q:'Obeying our parents is an act of …',a:[['Love','heart'],['Anger','fire']],c:0},
   ]},
  {game:'song', song:'qirkos-iyalotan-yawetah-kesa'},
 ]
});
