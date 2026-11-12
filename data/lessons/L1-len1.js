/* Level I, Lent week 1: Jesus Cleanses the Temple (Matthew 21) */
BKLesson({
 id:'L1-len1', title:'A House of Prayer', am:'የጸሎት ቤት', sticker:'church',
 pages:[
  {game:'cover', bg:'desert', title:'A House of Prayer', am:'የጸሎት ቤት',
   props:[{art:'temple',x:420,y:430,s:.9},{art:'jesus',x:200,y:430,s:.6}],
   say:['cover','[[selam]]! Do you know what a temple is? It is a house of prayer, like our church. Today we see what Jesus did in the temple. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, Lent week 1: <b>Jesus Cleanses the Temple</b> (Matthew 21). Aim: learn how to behave inside the church.</p>'},
  {game:'story', bg:'desert', chip:'A noisy temple',
   props:[{art:'temple',x:430,y:430,s:.95},{id:'t1',art:'table',x:300,y:440,s:1},{id:'t2',art:'table',x:560,y:440,s:1},{id:'man',art:'man',x:380,y:440,s:.45},{id:'jesus',art:'jesus',x:120,y:430,s:.6}],
   beats:[
    {say:['n1','Jesus came to the temple in Jerusalem with His mother, the Virgin [[mariam]], and His disciples.']},
    {wiggle:['t1','t2','man'],sfx:'boing',say:['n2','But people were buying and selling inside, like a noisy market! Tap the table.'],tap:'t1'},
    {wiggle:['jesus'],say:['n3','Jesus was upset. They had made the house of prayer into a marketplace.']},
   ]},
  {game:'drag', bg:'desert', chip:'Clean the temple',
   props:[{art:'temple',x:420,y:430,s:.95},{art:'jesus',x:700,y:430,s:.55}],
   zone:{x:0,y:300,w:150,h:150},
   items:[{art:'table',x:300,y:440,s:.8,to:[70,440,.6]},{art:['table',{coins:false}],x:470,y:440,s:.8,to:[90,430,.5]},{art:'pot',x:390,y:440,s:.5,to:[60,420,.4]}],
   intro:['clean','Jesus turned over the tables and sent the selling out. Drag the tables out of the temple!'],
   progress:'*{n} more*!',
   done:['clean-done','Jesus said: My Father\'s house shall be called a house of prayer!']},
  {game:'story', bg:'church', chip:'In our church',
   props:[{id:'priest',art:'priest',x:400,y:430,s:.62},{id:'kids',art:'boy',x:220,y:440,s:0.8},{id:'girl',art:'girl',x:580,y:440,s:0.8},{id:'candle',art:'candle',x:300,y:430,s:.7,anim:'flicker'}],
   beats:[
    {say:['c1','Our [[betekrstian]] is a house of prayer too. Angels and saints are there with us. Tap the candle.'],tap:'candle'},
    {wiggle:['kids','girl'],say:['c2','So in church we are quiet, we stand nicely, and we pray. Tap the children praying.'],tap:'girl'},
   ],
   parent:'<p>Talk about it: How do we behave in church? We are quiet, we listen, and we pray, because God accepts our prayers there.</p>'},
  {game:'quiz', questions:[
    {id:'q1',q:'What is a temple?',a:[['A house of prayer','temple'],['A market','table'],['A boat','boat']],c:0},
    {id:'q2',q:'What were people doing in the temple?',a:[['Praying quietly','priest'],['Buying and selling','table'],['Sleeping','bed']],c:1},
    {id:'q3',q:'What do we do in church?',a:[['Run and shout',['text',{t:'Shout!',size:44,c:'#B3322A'}]],['Pray quietly','candle'],['Sell things','table']],c:1},
   ]},
  {game:'song', song:'tenageru-dink-sirawin-meskir'},
 ]
});
