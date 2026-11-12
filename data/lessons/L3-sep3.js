/* Level III (Grades 4-6), September week 3: The Ten Commandments (Exodus 20; John 15:10) */
BKLesson({
 id:'L3-sep3', title:'The Ten Commandments', am:'ዐሥርቱ ቃላት', sticker:'scroll',
 pages:[
  {game:'cover', bg:'mountain', title:'The Ten Commandments', am:'ዐሥርቱ ቃላት',
   props:[{art:'moses',x:170,y:440,s:.6},{art:'scroll',x:640,y:400,s:1},{art:'glory',x:640,y:200,s:.7}],
   say:['cover','[[selam]]! On Mount Sinai, God gave Moses ten commandments to teach His people how to love Him and love each other. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, September week 3: <b>The Ten Commandments</b> (Exodus 20). Aim: learn the commandments of God, by heart.</p><p>Talk about it: Which commandments are hardest to keep, and why?</p>'},

  {game:'read', chip:'Read', heading:'On Mount Sinai', pic:'moses',
   paras:[
    ['r1','After Moses led Israel out of Egypt, God told him to go up Mount Sinai.'],
    ['r2','Moses fasted there for forty days and forty nights. Then God gave him the commandments to pass on to the Israelites.'],
    ['r3','We keep God\'s commandments to show our love for Him. Jesus said: If you keep My commandments, you will abide in My love.'],
   ]},

  {game:'read', chip:'Read', heading:'The commandments', pic:'scroll',
   paras:[
    ['r4','1. You shall have no other gods before Me. 2. You shall not take the name of the Lord your God in vain. 3. Remember the Sabbath day, to keep it holy.'],
    ['r5','4. Honor your father and your mother. 5. You shall not murder. 6. You shall not commit adultery. 7. You shall not steal.'],
    ['r6','8. You shall not bear false witness. 9. You shall not covet what belongs to your neighbor. 10. Love your neighbor as yourself.'],
    ['r7','The first three are about our love for God. The other seven are about how we treat other people, starting with our parents.'],
   ]},

  {game:'match', chip:'God or neighbor?', heading:'Match each commandment to what it teaches',
   intro:['match-intro','Tap a commandment, then tap what it teaches us.'],
   pairs:[['No other gods before Me','Worship only God',null,'glory'],['Honor your father and mother','Obey and respect parents',null,'boy'],['You shall not steal','Respect what belongs to others',null,'table'],['Do not bear false witness','Always tell the truth',null,'heart']],
   done:['match-done','Great matching!']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Moses received the commandments on Mount Sinai.',t:true,why:'After fasting forty days and forty nights.',pic:'moses'},
    {id:'t2',s:'The Ten Commandments are in the New Testament.',t:false,why:'They are in the Old Testament, in the Book of Exodus.',pic:'scroll'},
    {id:'t3',s:'The first three commandments are about God.',t:true,why:'The other seven are about our neighbors.',pic:'glory'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'Honor your father and your ___.',a:'mother',opts:['teacher','king']},
    {id:'f2',s:'Remember the ___ day, to keep it holy.',a:'Sabbath',opts:['first','market']},
    {id:'f3',s:'Love your ___ as yourself.',a:'neighbor',opts:['money','house']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'If you keep My commandments, you will abide in My love.', ref:'John 15:10',
   chunks:['If you keep','My commandments,','you will abide','in My love.'],
   intro:['verse-intro','Our memory verse is from the Gospel of John. Listen: If you keep My commandments, you will abide in My love. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who received the Ten Commandments?',a:[['Moses','moses'],['Noah','noah'],['Abraham','abraham']],c:0},
    {id:'q2',q:'What is the first commandment?',a:[['No other gods before Me','glory'],['Do not steal','table'],['Honor your parents','boy']],c:0},
    {id:'q3',q:'How do we show our love to God?',a:[['By keeping His commandments','heart'],['By being rich','gift'],['By being strong','lion']],c:0},
   ]},
 ]
});
