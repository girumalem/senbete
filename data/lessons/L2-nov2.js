/* Level II (Grades 1-3), November week 2: Joseph Interprets the Prisoners' Dreams (Genesis 40) */
BKLesson({
 id:'L2-nov2', title:'Two Dreams in Prison', am:'የእስረኞቹ ሕልም', sticker:'cup',
 pages:[
  {game:'cover', bg:'dark', title:'Two Dreams in Prison', am:'የእስረኞቹ ሕልም',
   props:[{art:'bars',x:400,y:440,s:.9},{art:['man',{robe:'#24418F',beard:'dark'}],x:250,y:440,s:.52},{art:['jacobYoung',{robe:'#E2A62B',sash:'#B3322A'}],x:560,y:440,s:.55},{art:['man',{robe:'#C99A5E',beard:'dark'}],x:670,y:440,s:.52},{art:'cup',x:150,y:300,s:.8},{art:'basket',x:650,y:300,s:.7}],
   say:['cover','[[selam]]! Joseph was in prison, but God was with him. Today two men in prison have strange dreams. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, November week 2: <b>Joseph Interprets the Prisoners\' Dreams</b> (Genesis 40). Aim: God gives wisdom to those who are faithful to Him.</p>'},

  {game:'read', chip:'Read along', heading:'Two sad faces', pic:'bars',
   paras:[
    ['r1','Pharaoh\'s chief butler and chief baker made the king angry, so they were sent to the same prison as Joseph.'],
    ['r2','A butler serves the king his drinks. A baker bakes the king\'s bread.'],
    ['r3','One morning Joseph saw that they looked sad. What is wrong? he asked.'],
    ['r4','We had dreams, they said, and nobody can tell us what they mean. Joseph said: God can. Tell me your dreams.'],
   ]},

  {game:'story', bg:'dark', chip:'The butler\'s dream',
   props:[{id:'bu',art:['man',{robe:'#24418F',beard:'dark'}],x:200,y:440,s:.55},{id:'jo',art:['jacobYoung',{robe:'#E2A62B',sash:'#B3322A'}],x:600,y:440,s:.55},{id:'grapes',art:'grapes',x:330,y:280,s:1,hidden:true},{id:'cup',art:'cup',x:470,y:290,s:1,hidden:true}],
   beats:[
    {show:['grapes'],say:['d1','The butler said: I saw a vine with three branches and ripe grapes. Tap the grapes!'],tap:'grapes'},
    {show:['cup'],sfx:'pop',say:['d2','I pressed the grapes into Pharaoh\'s cup, and gave the cup to Pharaoh.']},
    {wiggle:['jo'],sfx:'glory',say:['d3','Joseph said: In three days, Pharaoh will give you your job back! Please remember me, and tell Pharaoh about me.']},
   ]},

  {game:'story', bg:'dark', chip:'The baker\'s dream',
   props:[{id:'ba',art:['man',{robe:'#C99A5E',beard:'dark'}],x:200,y:440,s:.55},{id:'jo',art:['jacobYoung',{robe:'#E2A62B',sash:'#B3322A'}],x:600,y:440,s:.55},{id:'basket',art:'basket',x:200,y:260,s:.8,hidden:true},{id:'bird',art:'bird',x:330,y:220,s:1,hidden:true}],
   beats:[
    {show:['basket'],say:['e1','The baker said: I had three baskets of bread on my head. Tap the baskets.'],tap:'basket'},
    {show:['bird'],sfx:'whoosh',say:['e2','And the birds came and ate the bread from the top basket.']},
    {wiggle:['jo'],say:['e3','Joseph told him the sad meaning: in three days, Pharaoh will punish you.']},
    {say:['e4','In three days, everything happened just as Joseph said. But the butler forgot all about Joseph.']},
   ],
   parent:'<p>The baker\'s fate (Genesis 40:19) is told gently here. The point: God gave Joseph the meaning, and it came true.</p>'},

  {game:'puzzle', chip:'Word puzzle',
   intro:['puzzle-intro','Word puzzle! Read the clue, then tap the letters to spell the answer.'],
   items:[
    {id:'w1',clue:'Joseph was in …',word:'prison',pic:'bars'},
    {id:'w2',clue:'He went back to serve Pharaoh',word:'butler',pic:'cup'},
    {id:'w3',clue:'He dreamed of baskets of bread',word:'baker',pic:'basket'},
    {id:'w4',clue:'The butler … about Joseph',word:'forgot',pic:['man',{robe:'#24418F',beard:'dark'}]},
   ],
   done:['puzzle-done','You spelled them all! Great reading.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who told the meaning of the dreams?',a:[['Joseph',['jacobYoung',{robe:'#E2A62B',sash:'#B3322A'}]],['Pharaoh','pharaoh']],c:0},
    {id:'q2',q:'What did the butler see in his dream?',a:[['Grapes and a cup','grapes'],['A lion','lion']],c:0},
    {id:'q3',q:'Did the butler remember Joseph?',a:[['Yes, right away',['text',{t:'Yes',size:60,c:'#2F7A4E'}]],['No, he forgot',['text',{t:'No',size:60,c:'#B3322A'}]]],c:1},
   ]},
 ]
});
