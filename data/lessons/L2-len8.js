/* Level II (Grades 1-3), Lent week 8: The Fig Tree (Matthew 21:18-22) */
BKLesson({
 id:'L2-len8', title:'The Fig Tree', am:'በለሷ', sticker:'figTree',
 pages:[
  {game:'cover', bg:'sunrise', title:'The Fig Tree', am:'በለሷ',
   props:[{art:'figTree',x:580,y:440,s:1},{art:'jesus',x:250,y:440,s:.6}],
   say:['cover','[[selam]]! The morning after [[hosanna]], Jesus saw a fig tree. Today we learn a lesson about fruit, and about faith. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, Lent week 8: <b>The Fig Tree</b> (Matthew 21:18-22). Aim: our faith should bear fruit in good works, and we should pray with faith.</p><p>Review: What does Hosanna mean? What did the children sing?</p>'},

  {game:'story', bg:'sunrise', chip:'Leaves but no fruit',
   props:[{id:'tree',art:'figTree',x:560,y:440,s:1},{id:'dry',art:['figTree',{dry:true}],x:560,y:440,s:1,hidden:true},{id:'jesus',art:'jesus',x:250,y:440,s:.6},{id:'peter',art:'peter',x:120,y:440,s:.55}],
   beats:[
    {wiggle:['jesus'],say:['f1','In the morning, Jesus was hungry. He came to a fig tree to find some fruit.']},
    {wiggle:['tree'],say:['f2','But the tree had only leaves. No fruit at all! Tap the tree to look.'],tap:'tree'},
    {wiggle:['jesus'],say:['f3','Jesus said: Let no fruit ever grow on you again.']},
    {hide:['tree'],show:['dry'],sfx:'whoosh',say:['f4','At once the fig tree dried up!']},
    {wiggle:['peter'],say:['f5','The disciples were amazed: How did the fig tree dry up so quickly?']},
   ]},

  {game:'read', chip:'Read along', heading:'What does it mean?', pic:'figTree',
   paras:[
    ['r1','Jesus said: If you have faith and do not doubt, you can do this too.'],
    ['r2','Whatever you ask for in prayer, believing, you will receive.'],
    ['r3','A tree with leaves but no fruit is like a person who looks good, but does no good works.'],
    ['r4','God wants our faith to bear fruit: kindness, love, prayer and helping others.'],
   ]},

  {game:'match', chip:'Good fruit', heading:'Match the good fruit to what it looks like',
   intro:['match-intro','What does good fruit look like in our lives? Tap one, then tap its match.'],
   pairs:[['Kindness','Sharing with a friend',null,'injera'],['Prayer','Talking to God',null,'candle'],['Love','Helping at home',null,'heart']],
   done:['match-done','That is the fruit God wants to see!']},

  {game:'quiz', questions:[
    {id:'q1',q:'What did the fig tree have?',a:[['Only leaves','figTree'],['Lots of figs','fruitTree']],c:0},
    {id:'q2',q:'What happened to the fig tree?',a:[['It dried up',['figTree',{dry:true}]],['It grew taller','fruitTree']],c:0},
    {id:'q3',q:'What fruit does God want from us?',a:[['Good works and love','heart'],['Apples','fruitTree']],c:0},
   ]},
  {game:'song', song:'hosa-ena-be-aryam'},
 ]
});
