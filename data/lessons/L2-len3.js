/* Level II (Grades 1-3), Lent week 3: Jesus in the Temple (Matthew 21:12-16; John 2:13-17) */
BKLesson({
 id:'L2-len3', title:'A House of Prayer', am:'የጸሎት ቤት', sticker:'temple',
 pages:[
  {game:'cover', bg:'day', title:'A House of Prayer', am:'የጸሎት ቤት',
   props:[{art:'temple',x:400,y:440,s:.75},{art:'jesus',x:560,y:440,s:.55},{art:'tableOver',x:230,y:440,s:.7}],
   say:['cover','[[selam]]! Today we read what Jesus did when people did not respect God\'s house. Then we learn how to behave in [[betekrstian]], church. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, Lent week 3: <b>Jesus in the Temple</b> (Matthew 21; John 2). In the Ethiopian Church this Lent Sunday is called Mekurabia. Aim: learn proper behavior and discipline in the house of God.</p>'},

  {game:'story', bg:'day', chip:'Selling in the temple',
   props:[{art:'temple',x:420,y:440,s:.75},{id:'table',art:'table',x:220,y:440,s:.8},{id:'over',art:'tableOver',x:220,y:440,s:.8,hidden:true},{id:'cow',art:'cow',x:640,y:440,s:.4},{id:'dove',art:'dove',x:660,y:320,s:.6},{id:'jesus',art:'jesus',x:420,y:440,s:.55}],
   beats:[
    {say:['s1','Jesus went into the temple in Jerusalem. People were selling oxen, sheep and doves inside, and changing money! Tap the money table.'],tap:'table'},
    {wiggle:['jesus'],say:['s2','Jesus was angry, because the temple is a holy place. It is not a market.']},
    {hide:['table'],show:['over'],sfx:'whoosh',say:['s3','He turned over the tables and drove them out!']},
    {wiggle:['jesus'],sfx:'glory',say:['s4','Jesus said: My house shall be called a house of prayer! Tap Jesus.'],tap:'jesus'},
   ]},

  {game:'read', chip:'Read along', heading:'In God\'s house', pic:'church',
   paras:[
    ['r1','Our church is the house of God, just like the temple.'],
    ['r2','We get ready at home: we wash, and we wear clean white clothes.'],
    ['r3','At the church door we take off our shoes, kiss the door and bow to God.'],
    ['r4','Inside we are quiet. We pray, we listen, and we sing to God.'],
   ]},

  {game:'truefalse', chip:'In church: yes or no?',
   intro:['tf-intro','Is this good to do in God\'s house? Tap true for yes, or false for no.'],
   items:[
    {id:'t1',s:'We pray quietly.',t:true,why:'Yes! Church is a house of prayer.',pic:'candle'},
    {id:'t2',s:'We run around and shout.',t:false,why:'No. We keep God\'s house calm and holy.',pic:'horse'},
    {id:'t3',s:'We take off our shoes and bow.',t:true,why:'Yes! Like Moses at the burning bush, we stand on holy ground.',pic:'sandals'},
    {id:'t4',s:'We buy and sell things inside the church.',t:false,why:'No. That is what made Jesus angry in the temple.',pic:'table'},
   ],
   done:['tf-done','You know how to behave in God\'s house!']},

  {game:'quiz', questions:[
    {id:'q1',q:'What were people doing in the temple?',a:[['Selling and changing money','table'],['Praying quietly','candle']],c:0},
    {id:'q2',q:'What did Jesus call the temple?',a:[['A house of prayer','church'],['A market','table']],c:0},
    {id:'q3',q:'What do we wear to church?',a:[['Clean white clothes',['blanket',{}]],['Muddy clothes','stone']],c:0},
   ]},
  {game:'song', song:'bete-bete-christian-nat'},
 ]
});
