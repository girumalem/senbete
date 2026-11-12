/* Level III (Grades 4-6), December week 4: The Archangel Gabriel (Synaxarium; Daniel 3; Luke 1-2; Psalm 23:4) */
BKLesson({
 id:'L3-dec4', title:'The Archangel Gabriel', am:'ቅዱስ ገብርኤል', sticker:'gabriel',
 pages:[
  {game:'cover', bg:'heaven', title:'The Archangel Gabriel', am:'ቅዱስ ገብርኤል',
   props:[{art:'gabriel',x:640,y:430,s:.6},{art:'glory',x:640,y:280,s:.9},{art:'mary',x:170,y:440,s:.55}],
   say:['cover','[[selam]]! Gabriel\'s name means God is my strength. He is the angel of good news. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, December week 4: <b>The Archangel Gabriel</b> (Synaxarium; Daniel 3; Luke 1-2). Aim: learn about the works of St. Gabriel. His feast is on the 19th of each Ethiopian month, and especially Tahsas 19.</p><p>Talk about it: Which of Gabriel\'s works do you like best?</p>'},

  {game:'read', chip:'Read', heading:'The angel of good news', pic:'gabriel',
   paras:[
    ['r1','Saint Gabriel is one of the seven archangels. His name means God is my strength. He stands before the throne of God in worship.'],
    ['r2','He is called the angel of the Annunciation, the angel of good news. He told the priest Zechariah that he would have a son, John the Baptist.'],
    ['r3','Zechariah did not believe, because his wife Elizabeth was too old. So he could not speak until the baby was born.'],
    ['r4','Gabriel told the Virgin [[mariam]] that she would be the mother of the Son of God. He said: Rejoice, highly favored one, the Lord is with you. Blessed are you among women!'],
   ]},

  {game:'read', chip:'Read', heading:'A faithful guardian', pic:'shield',
   paras:[
    ['r5','When Satan first rebelled and claimed he had made the angels, many angels were confused. Gabriel calmed them: Let us stand where we are until we see our Creator. Because of his faithfulness, God chose him to announce His birth.'],
    ['r6','When King Herod wanted to kill baby Jesus, Gabriel told Joseph to take the Child and His mother to Egypt.'],
    ['r7','Gabriel saved the three young men who were thrown into the fiery furnace because they would not worship an idol. He also saved Qirkos and his mother Iyalota from the fire.'],
   ]},

  {game:'match', chip:'Gabriel\'s works', heading:'Match each person to Gabriel\'s message or help',
   intro:['match-intro','Tap a person, then tap what Gabriel did for them.'],
   pairs:[['Zechariah','Told him: You will have a son',null,'priest'],['The Virgin [[mariam]]','Rejoice, the Lord is with you!',null,'mary'],['Joseph','Flee to Egypt',null,'joseph'],['The three young men','Saved them from the furnace',null,'fire']],
   done:['match-done','Well matched!']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Gabriel\'s name means God is my strength.',t:true,why:'That is the meaning of his name.',pic:'gabriel'},
    {id:'t2',s:'Zechariah believed Gabriel right away.',t:false,why:'He doubted, so he could not speak until John was born.',pic:'priest'},
    {id:'t3',s:'We praise [[mariam]] with Gabriel\'s greeting.',t:true,why:'We pray: We greet you with the greeting of Gabriel the angel.',pic:'mary'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'Gabriel is called the angel of ___.',a:'good news',opts:['war','the sea']},
    {id:'f2',s:'Gabriel told Joseph to flee to ___.',a:'Egypt',opts:['Rome','Canaan']},
    {id:'f3',s:'Zechariah\'s son was John the ___.',a:'Baptist',opts:['Apostle','King']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'Though I walk through the valley of the shadow of death, I will fear no evil, for You are with me.', ref:'Psalm 23:4',
   chunks:['Though I walk','through the valley','of the shadow of death,','I will fear no evil,','for You are with me.'],
   intro:['verse-intro','Our memory verse is from Psalm twenty-three. Listen: Though I walk through the valley of the shadow of death, I will fear no evil, for You are with me. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'What did Gabriel tell [[mariam]]?',a:[['She would be the mother of God\'s Son','mary'],['To build an ark','ark'],['To go fishing','fish']],c:0},
    {id:'q2',q:'Whom did Gabriel save from the furnace?',a:[['Three young men','fire'],['Pharaoh','pharaoh'],['Goliath','soldier']],c:0},
    {id:'q3',q:'What did Gabriel tell Joseph?',a:[['Flee to Egypt','pyramid'],['Go to Rome','city'],['Stay home','tukul']],c:0},
   ]},
 ]
});
