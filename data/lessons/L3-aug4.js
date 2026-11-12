/* Level III (Grades 4-6), August week 4: The Resurrection and Ascension of the Virgin Mary (Synaxarium; Miracles of Mary; Nehasse 14 and 16; Psalm 45:9) */
BKLesson({
 id:'L3-aug4', title:'The Queen at His Right Hand', am:'ፍልሰታ ለማርያም', sticker:'mary',
 pages:[
  {game:'cover', bg:'heaven', title:'The Queen at His Right Hand', am:'ፍልሰታ ለማርያም',
   props:[{art:'mary',x:640,y:420,s:.6},{art:'glory',x:640,y:270,s:1},{art:'angel',x:470,y:300,s:.4},{art:'disciple',x:150,y:440,s:.5}],
   say:['cover','[[selam]]! God answered the prayers of the apostles and showed them the glory of the Virgin [[mariam]]. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, August week 4: <b>The Resurrection and Ascension of the Virgin Mary</b> (Synaxarium; Miracles of Mary). Aim: learn how God answered the apostles\' fasting and prayer, and why Tsome Filseta is called the children\'s fast.</p><p>Review: What is the Transfiguration? Where did it happen? Who appeared with Jesus?</p>'},

  {game:'read', chip:'Read', heading:'Where is her body?', pic:'mary',
   paras:[
    ['r1','Angels had carried the body of the Virgin [[mariam]] and placed it under the tree of life. Only John saw it, so the other apostles were sad for a long time.'],
    ['r2','They fasted for two weeks, asking God to show them her body. On the fourteenth of Nehasse, the Lord gave it to them, and they buried her that same day.'],
   ]},

  {game:'story', bg:'heaven', chip:'Thomas sees her',
   props:[{id:'thomas',art:['figure',{robe:'#2F7A4E',beard:'dark',halo:true}],x:220,y:440,s:.55},{id:'mary',art:'mary',x:560,y:420,s:.5,hidden:true},{id:'glow',art:'glory',x:560,y:270,s:1,hidden:true},{id:'cloth',art:'blanket',x:420,y:420,s:.35,hidden:true}],
   beats:[
    {wiggle:['thomas'],say:['s1','The apostle Thomas was far away and was not there for the burial.']},
    {show:['glow','mary'],sfx:'glory',say:['s2','On the sixteenth of Nehasse, three days later, Thomas saw the Virgin [[mariam]] rising into heaven! Tap her.'],tap:'mary'},
    {show:['cloth'],sfx:'pop',say:['s3','She gave him a piece of her burial linen, as proof of her ascension.']},
    {move:{mary:[560,120,.3],glow:[560,120,.6]},say:['s4','Then she went up into heaven in glory.']},
   ],
   parent:'<p>The account is from the Synaxarium and the Miracles of Mary (Teamre Mariam).</p>'},

  {game:'order', chip:'Put it in order',
   intro:['order','Tap the pictures in the order they happened.'],
   cards:[
    {art:'candle',cap:'The apostles fasted two weeks',say:['o1','The apostles fasted for two weeks.']},
    {art:['tomb',{closed:true}],cap:'They buried her body',say:['o2','They buried her body.']},
    {art:'mary',cap:'Thomas saw her rise',say:['o3','Thomas saw her rise into heaven.']},
    {art:['tomb',{closed:false}],cap:'The grave was empty',say:['o4','They opened the grave and found it empty.']},
   ],
   done:['order-done','God answered their prayers!']},

  {game:'read', chip:'Read', heading:'The cloth on the cross', pic:'procCross',
   paras:[
    ['r3','Thomas told the others: I will not believe she is buried until I see her body. They opened the grave, but it was empty! Then he showed them the linen.'],
    ['r4','Look at the cross the priests carry. The cloth tied to it is a sign of the linen Thomas received, and of her ascension.'],
    ['r5','The apostles fasted again, and a year later she appeared to them with the Lord Jesus Christ.'],
   ]},

  {game:'read', chip:'Read', heading:'The children\'s fast', pic:'heart',
   paras:[
    ['r6','God answers prayers made with a pure heart and faith. In the Bible, prayer often goes together with fasting.'],
    ['r7','Tsome Filseta is called the children\'s fast in Ethiopia, because it is only two weeks, and many children begin fasting with it. Could you start next year?'],
   ]},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Thomas was there when they buried her.',t:false,why:'He was away, and came later.',pic:'disciple'},
    {id:'t2',s:'Thomas saw her rise into heaven.',t:true,why:'He saw her on the sixteenth of Nehasse.',pic:'mary'},
    {id:'t3',s:'The cloth on the processional cross reminds us of her ascension.',t:true,why:'It stands for the linen she gave Thomas.',pic:'procCross'},
   ],
   done:['tf-done','Well done!']},

  {game:'verse', chip:'Memory verse',
   verse:'At Your right hand stands the queen in gold from Ophir.', ref:'Psalm 45:9',
   chunks:['At Your right hand','stands the queen','in gold','from Ophir.'],
   intro:['verse-intro','King David saw the queen in glory beside the King. The Church sings this about the Virgin [[mariam]]. Listen: At Your right hand stands the queen in gold from Ophir. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Which apostle saw her ascension?',a:[['Thomas','disciple'],['Peter','peter'],['Judas','man']],c:0},
    {id:'q2',q:'What did she give him?',a:[['A piece of her burial linen','procCross'],['A golden crown','scepter'],['A loaf of bread','basket']],c:0},
    {id:'q3',q:'Why is Tsome Filseta called the children\'s fast?',a:[['It is short, and children start fasting with it','heart'],['Only children keep it','boy'],['It has no prayer','candle']],c:0},
   ]},
 ]
});
