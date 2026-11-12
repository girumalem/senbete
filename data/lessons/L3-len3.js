/* Level III (Grades 4-6), Lent week 3: Esther, Part II (Esther 3-7; Psalm 31:24) */
BKLesson({
 id:'L3-len3', title:'Brave Queen Esther', am:'ንግሥት አስቴር', sticker:'shield',
 pages:[
  {game:'cover', bg:'gold', title:'Brave Queen Esther', am:'ንግሥት አስቴር',
   props:[{art:['woman',{robe:'#6A3A8A',netela:'#E2A62B',crown:true,arms:'pray'}],x:170,y:440,s:.6},{art:'king',x:640,y:440,s:.6},{art:'scepter',x:740,y:430,s:.6}],
   say:['cover','[[selam]]! Queen Esther fasted, prayed, and bravely saved God\'s people. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, Lent week 3: <b>Esther, Part II</b> (Esther 3-7). Aim: learn about courage that comes from fasting and prayer. The Ethiopian Church keeps the Fast of Nineveh and other fasts in this same spirit.</p><p>Talk about it: Why did Esther ask everyone to fast before she went to the king?</p>'},

  {game:'read', chip:'Read', heading:'A wicked plan', pic:'scroll',
   paras:[
    ['r1','One of the king\'s ministers, a proud man named Haman, hated God\'s people.'],
    ['r2','Haman tricked the king into signing a decree, a royal law, that all of God\'s people in the kingdom should be killed.'],
    ['r3','The king did not know that his own queen, Esther, was one of God\'s people.'],
    ['r4','Mordecai heard about the plan, and sent word to Esther: You must speak to the king and ask him to change his mind!'],
   ]},

  {game:'read', chip:'Read', heading:'Three days of fasting', pic:'candle',
   paras:[
    ['r5','No one could go to the king unless he called them, or unless he held out his golden scepter to them. Anyone else could be put to death.'],
    ['r6','Esther asked all of God\'s people to fast for three days. She and her maids fasted too.'],
    ['r7','Then she said: I will go to the king. And if I perish, I perish.'],
   ]},

  {game:'story', bg:'gold', chip:'The golden scepter',
   props:[{id:'king',art:'king',x:560,y:440,s:.6},{id:'es',art:['woman',{robe:'#6A3A8A',netela:'#E2A62B',crown:true}],x:150,y:440,s:.6},{id:'sp',art:'scepter',x:470,y:400,s:.5,hidden:true},{id:'ham',art:['man',{robe:'#3A2E28'}],x:720,y:440,s:.55}],
   beats:[
    {move:{es:[330,440,.6]},say:['s1','Esther put on her royal robes and went to stand in the king\'s court, without being called.']},
    {wiggle:['king'],say:['s2','Would the king be angry? Tap the king.'],tap:'king'},
    {show:['sp'],sfx:'glory',say:['s3','The king was happy to see her! He held out his golden scepter, and Esther came near.']},
    {wiggle:['es'],say:['s4','She invited the king and Haman to a feast, and then to a second feast. The king said: What do you wish? I will give you up to half my kingdom.']},
    {wiggle:['es'],say:['s5','Esther said: Please spare my life, and the lives of my people. Tap Esther.'],tap:'es'},
    {hide:['ham'],sfx:'whoosh',fx:'confetti',say:['s6','The king learned of Haman\'s evil plan. He punished Haman, and ordered that no one should harm God\'s people.']},
   ]},

  {game:'order', chip:'Put it in order',
   intro:['order','Tap the pictures in the order they happened.'],
   cards:[
    {art:'scroll',cap:'Haman\'s wicked decree',say:['o1','Haman made a wicked decree.']},
    {art:'candle',cap:'Three days of fasting',say:['o2','God\'s people fasted three days.']},
    {art:'scepter',cap:'The king held out his scepter',say:['o3','The king held out his scepter.']},
    {art:'shield',cap:'God\'s people were saved',say:['o4','God\'s people were saved.']},
   ],
   done:['order-done','Fasting and prayer gave Esther courage!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'The wicked minister was named ___.',a:'Haman',opts:['Mordecai','Moses']},
    {id:'f2',s:'Esther and the people fasted for ___ days.',a:'three',opts:['forty','seven']},
    {id:'f3',s:'The king held out his golden ___.',a:'scepter',opts:['cup','plate']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'Be of good courage, and He shall strengthen your heart, all you who hope in the Lord.', ref:'Psalm 31:24',
   chunks:['Be of good courage,','and He shall strengthen your heart,','all you who hope','in the Lord.'],
   intro:['verse-intro','Our memory verse is from the Psalms. Listen: Be of good courage, and He shall strengthen your heart, all you who hope in the Lord. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'What did Esther do before seeing the king?',a:[['Fasted and prayed for three days','candle'],['Had a party','cup'],['Ran away','door']],c:0},
    {id:'q2',q:'Why was going to the king dangerous?',a:[['No one could go without being called','king'],['He had a lion','lion'],['It was far away','camel']],c:0},
    {id:'q3',q:'Who was saved because of Esther\'s courage?',a:[['God\'s people','crowd'],['Only Haman',['man',{robe:'#3A2E28'}]],['No one','stone']],c:0},
   ]},
 ]
});
