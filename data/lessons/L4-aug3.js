/* Level IV (Grade 7 and up), August week 3: The Ascension of the Virgin Mary (Miracles of Mary; Synaxarium; Psalm 45:9) */
BKLesson({
 id:'L4-aug3', title:'Filseta', am:'ፍልሰታ', sticker:'mary',
 pages:[
  {game:'cover', bg:'heaven', title:'Filseta: the Ascension of the Virgin Mary', am:'ፍልሰታ ለማርያም',
   props:[{art:'mary',x:400,y:330,s:.6},{art:'glory',x:400,y:260,s:1.1},{art:'angelHead',x:220,y:200,s:.6},{art:'angelHead',x:580,y:200,s:.6}],
   say:['cover','[[selam]]! Every year, from [[nehase]] one to [[nehase]] sixteen, we keep the Fast of [[filseta]]. Even many children fast. Why? Today we learn what happened to the body of the Virgin [[mariam]].'],
   parent:'<p>This lesson follows Level IV, August week 3: <b>The Ascension of the Virgin Mary</b> (Miracles of Mary and Synaxarium). Aim: learn about the resurrection and ascension of the Virgin Mary.</p><p>Filseta literally means moving from one place to another. The fast runs Nehasse 1 to 16.</p>'},

  {game:'story', bg:'garden', chip:'Where is her body?',
   props:[{id:'tree',art:'fruitTree',x:600,y:440,s:.9},{id:'a1',art:'angel',x:520,y:430,s:.45},{id:'a2',art:'angel',x:690,y:430,s:.45},{id:'ap',art:'peter',x:150,y:440,s:.5},{id:'ap2',art:'disciple',x:240,y:440,s:.5}],
   beats:[
    {say:['b1','The Virgin [[mariam]] died at age sixty-four, on [[tir]] twenty-one. Angels took her holy body and placed it under the Tree of Life. Tap the tree.'],tap:'tree'},
    {wiggle:['ap','ap2'],say:['b2','The apostles did not know where her body was. They were sad for a long time.']},
   ]},

  {game:'repeat', bg:'church', chip:'Two weeks of prayer',
   props:[{id:'ap',art:['peter',{arms:'pray'}],x:200,y:440,s:.5},{id:'ap2',art:['disciple',{arms:'pray'}],x:290,y:440,s:.5},{id:'ap3',art:['figure',{robe:'#2F7A4E',sleeve:'#2F7A4E',beard:'dark',arms:'pray'}],x:600,y:440,s:.5},{id:'glow',art:'glory',x:400,y:180,s:.9,hidden:true}],
   button:{label:'Fast and pray',art:'heart'},
   intro:['p0','So they fasted and prayed for two weeks, asking God to show them. Tap to pray with them.'],
   steps:[
    {wiggle:['ap','ap2','ap3'],say:['p1','The first week.']},
    {wiggle:['ap','ap2','ap3'],say:['p2','The second week.']},
    {show:['glow'],fx:'flash',sfx:'glory',say:['p3','On [[nehase]] fourteen, the Lord gave them her body, and they buried her that same day.']},
   ],
   done:['p4','God heard their prayer, because it came with fasting. That is why the Church has seven fasting seasons in the year.']},

  {game:'story', bg:'heaven', chip:'Thomas sees her',
   props:[{id:'tom',art:['figure',{robe:'#2F7A4E',sleeve:'#2F7A4E',beard:'dark'}],x:200,y:440,s:.55},{id:'mary',art:'mary',x:560,y:330,s:.5,hidden:true},{id:'glow',art:'glory',x:560,y:200,s:1,hidden:true},{id:'lin',art:'linen',x:560,y:300,s:.5,hidden:true}],
   beats:[
    {say:['t1','Thomas the apostle was far away, and was not at the burial. On [[nehase]] sixteen, three days later, he was on his way. Tap Thomas.'],tap:'tom'},
    {show:['glow','mary'],move:{mary:[560,250]},sfx:'glory',say:['t2','He saw the Virgin [[mariam]] rising into heaven!']},
    {show:['lin'],move:{lin:[260,330]},say:['t3','She gave Thomas a piece of her burial linen.']},
   ]},

  {game:'choose', bg:'garden', chip:'The empty grave',
   props:[{id:'tomb',art:'tomb',x:560,y:440,s:.65},{id:'tom',art:['figure',{robe:'#2F7A4E',sleeve:'#2F7A4E',beard:'dark'}],x:200,y:440,s:.55},{id:'lin',art:'linen',x:280,y:380,s:.45},{id:'ap',art:'peter',x:380,y:440,s:.5}],
   prompt:['g0','The apostles told Thomas: We buried her three days ago. Thomas said: I will not believe unless I see her body. They opened her grave. What did they find?'],
   options:[
    {label:'Her body, just as they left it',art:'stone',good:false,say:['g1','No! Try again.']},
    {label:'An empty grave',art:'tomb',then:{wiggle:['tom','lin']},
     say:['g2','The grave was empty! Thomas told them: I saw her ascend into heaven. Here is the linen she gave me.']},
   ]},

  {game:'match', chip:'Signs in our Church',
   heading:'Match each sign to what it remembers',
   intro:['m0','Our Church keeps signs that remind us of this story. Match them.'],
   pairs:[
    ['The cloth on the priest\'s hand cross','The linen Thomas received'],
    ['The Fast of Filseta','The apostles\' two weeks of fasting'],
    ['Nehasse sixteen','Her resurrection and ascension'],
    ['The queen at the right hand','King David\'s prophecy of the Virgin Mary'],
   ],
   done:['m1','The apostles fasted a second time because they had not seen her ascension. A year later, the Lord appeared to all of them with the Virgin [[mariam]].']},

  {game:'verse', chip:'Memory verse',
   verse:'Upon Thy right hand did stand the queen in gold of Ophir.', ref:'Psalm 45:9',
   chunks:['Upon Thy right hand','did stand the queen','in gold of Ophir.'],
   intro:['verse-intro','King [[dawit]] saw the queen at God\'s right hand. The Church teaches that she is the Virgin [[mariam]]. Our memory verse: Upon Thy right hand did stand the queen in gold of Ophir. Build it in order.'],
   done:['verse-done','Her resurrection reminds us of our own resurrection on the last day.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Where did the angels place the body of the Virgin [[mariam]]?',a:[['Under the Tree of Life','fruitTree'],['In a boat','boat'],['On a mountain','amba']],c:0},
    {id:'q2',q:'Which apostle saw her ascend into heaven?',a:[['Thomas','disciple'],['Peter','peter'],['Judas','table']],c:0},
    {id:'q3',q:'What does the cloth on the priest\'s hand cross remind us of?',a:[['The linen Thomas received','linen'],['A flag','cross'],['A towel for washing','basin']],c:0},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Can you name the seven fasting seasons of our Church? Ask your family to help.'],
    ['k2','What other signs and symbols in church remind you of Bible stories?'],
    ['k3','Some signs in the world pull young people toward money and wrong actions. Can you think of one? How can you resist it?'],
   ]},
 ]
});
