/* Level III (Grades 4-6), January week 4: John the Baptist (Matthew 3, 14; Mark 6; John 1; Matthew 11:11) */
BKLesson({
 id:'L3-jan4', title:'John the Baptist', am:'መጥምቁ ዮሐንስ', sticker:'johnBaptist',
 pages:[
  {game:'cover', bg:'desert', title:'John the Baptist', am:'መጥምቁ ዮሐንስ',
   props:[{art:'johnBaptist',x:170,y:440,s:.6},{art:'camel',x:640,y:440,s:.7},{art:'acacia',x:760,y:440,s:.6}],
   say:['cover','[[selam]]! Jesus said no one born of women was greater than John the Baptist. Let\'s find out why. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, January week 4: <b>John the Baptist</b> (Matthew 3, 14; Mark 6; John 1). Aim: learn about John\'s humility and courage to speak the truth.</p><p>Talk about it: Is it hard to tell the truth when people won\'t like it?</p>'},

  {game:'read', chip:'Read', heading:'A voice in the wilderness', pic:'johnBaptist',
   paras:[
    ['r1','John was the son of the priest Zechariah and Elizabeth, a relative of the Virgin [[mariam]]. He was born six months before Jesus.'],
    ['r2','His parents died when he was young, and he grew up in the wilderness. He ate locusts and wild honey, and wore clothes of camel\'s hair with a leather belt.'],
    ['r3','God sent John to prepare the people for Christ. Many came to him, confessed their sins, and were baptized.'],
   ]},

  {game:'read', chip:'Read', heading:'He must increase', pic:'dove',
   paras:[
    ['r4','John was humble. He told the people: I am not the Christ. I only prepare His way.'],
    ['r5','When Jesus began to teach, John sent his own followers to follow Jesus.'],
    ['r6','He testified: I saw the Spirit come down from heaven like a dove and remain on Him. I have seen, and I testify that this is the Son of God.'],
   ]},

  {game:'read', chip:'Read', heading:'Brave for the truth', pic:'bars',
   paras:[
    ['r7','John was truthful, and he was not afraid to tell anyone about their sin, even a king.'],
    ['r8','King Herod had taken his own brother\'s wife. John told him it was wrong, so Herod put him in prison.'],
    ['r9','Later, at Herod\'s birthday feast, he made a foolish promise, and because of it he had John put to death. John became a martyr for the truth. The Church remembers him on Meskerem 2.'],
   ]},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'John\'s father was the priest ___.',a:'Zechariah',opts:['Joseph','Simeon']},
    {id:'f2',s:'John ate locusts and wild ___.',a:'honey',opts:['bread','fish']},
    {id:'f3',s:'His clothes were made of ___ hair.',a:'camel\'s',opts:['sheep\'s','goat\'s']},
    {id:'f4',s:'John was put in prison by King ___.',a:'Herod',opts:['David','Pharaoh']},
   ],
   done:['bl-done','All filled in!']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'John was born six months before Jesus.',t:true,why:'His mother Elizabeth was a relative of [[mariam]].',pic:'baby'},
    {id:'t2',s:'John told his followers to stay with him instead of Jesus.',t:false,why:'He sent them to follow Jesus.',pic:'jesus'},
    {id:'t3',s:'John was afraid to tell the king the truth.',t:false,why:'He told Herod the truth, even though it cost him his life.',pic:'king'},
   ],
   done:['tf-done','Well done!']},

  {game:'verse', chip:'Memory verse',
   verse:'Among those born of women there has not risen one greater than John the Baptist.', ref:'Matthew 11:11',
   chunks:['Among those born of women','there has not risen','one greater','than John the Baptist.'],
   intro:['verse-intro','Our memory verse is what Jesus said about John. Listen: Among those born of women there has not risen one greater than John the Baptist. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'What was John\'s work?',a:[['To prepare the way for Christ','sandals'],['To build the temple','temple'],['To fight Pharaoh','pharaoh']],c:0},
    {id:'q2',q:'Where did John grow up?',a:[['In the wilderness','acacia'],['In a palace','temple'],['On a boat','boat']],c:0},
    {id:'q3',q:'Why was John put in prison?',a:[['He told the king the truth','heart'],['He stole bread','basket'],['He ran away','door']],c:0},
   ]},
 ]
});
