/* Level III (Grades 4-6), November week 2: Jacob (Genesis 27-32, 35; Psalm 40:1) */
BKLesson({
 id:'L3-nov2', title:'Jacob\'s Ladder', am:'የያዕቆብ መሰላል', sticker:'ladder',
 pages:[
  {game:'cover', bg:'night', title:'Jacob\'s Ladder', am:'የያዕቆብ መሰላል',
   props:[{art:'ladder',x:640,y:440,s:.9},{art:'angel',x:640,y:250,s:.35},{art:['sleeper',{robe:'#8A5A30'}],x:170,y:440,s:.8}],
   say:['cover','[[selam]]! Jacob had to run away from home, but God never left him. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, November week 2: <b>Jacob</b> (Genesis 27-32, 35). Aim: learn that God is with us wherever we go, and that He keeps His promises.</p><p>Talk about it: What does "Bethel" mean?</p>'},

  {game:'read', chip:'Read', heading:'On the road', pic:'jacobYoung',
   paras:[
    ['r1','Esau was angry that Jacob had received the blessing, and wanted to kill him. So Isaac and Rebecca sent Jacob far away to his uncle Laban.'],
    ['r2','God was with Jacob wherever he went.'],
   ]},

  {game:'story', bg:'night', chip:'A dream',
   props:[{id:'sl',art:['sleeper',{robe:'#8A5A30'}],x:200,y:440,s:.8},{id:'lad',art:'ladder',x:520,y:440,s:1,hidden:true},{id:'a1',art:'angel',x:470,y:330,s:.3,hidden:true},{id:'a2',art:'angel',x:570,y:200,s:.3,hidden:true},{id:'glow',art:'glory',x:520,y:60,s:.8,hidden:true}],
   beats:[
    {wiggle:['sl'],say:['d1','On the way, Jacob slept outside, with a stone for a pillow. Tap Jacob.'],tap:'sl'},
    {show:['lad'],sfx:'glory',say:['d2','He dreamed of a ladder standing on the earth and reaching up to heaven.']},
    {show:['a1','a2'],say:['d3','Angels of God were going up and down on it! Tap an angel.'],tap:'a2'},
    {show:['glow'],sfx:'glory',say:['d4','And the Lord stood above it and said: I will give this land to you and your children. I am with you, and I will keep you wherever you go.']},
    {say:['d5','Jacob woke up and named the place Bethel, which means the house of God.']},
   ],
   parent:'<p>The Church sees Jacob\'s ladder as a sign of the Virgin Mary, through whom God came down to us.</p>'},

  {game:'read', chip:'Read', heading:'Fourteen years for Rachel', pic:'sheep',
   paras:[
    ['r3','Laban had two daughters, Leah and Rachel. Jacob loved Rachel, and agreed to work seven years for her.'],
    ['r4','But after seven years, Laban gave him Leah, the older one. So Jacob worked seven more years for Rachel.'],
    ['r5','After six more years, Jacob went home. He made peace with his brother Esau. He had twelve sons.'],
    ['r6','God blessed Jacob again at Bethel. Later, during a famine, Jacob\'s family moved to Egypt. His descendants lived there for four hundred years, until God led them out under Moses.'],
   ]},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Jacob dreamed of a ladder reaching to heaven.',t:true,why:'Angels were going up and down on it.',pic:'ladder'},
    {id:'t2',s:'Bethel means the house of God.',t:true,why:'Jacob named the place where God spoke to him.',pic:'church'},
    {id:'t3',s:'Jacob worked for Laban only one year.',t:false,why:'He worked seven years, then seven more, then six more.',pic:'sheep'},
    {id:'t4',s:'Jacob never made peace with Esau.',t:false,why:'The brothers made peace when Jacob came home.',pic:'esau'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'Jacob went to live with his uncle ___.',a:'Laban',opts:['Lot','Pharaoh']},
    {id:'f2',s:'Jacob loved ___.',a:'Rachel',opts:['Leah','Sarah']},
    {id:'f3',s:'Jacob had ___ sons.',a:'twelve',opts:['two','seven']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'I waited patiently for the Lord, and He inclined to me.', ref:'Psalm 40:1',
   chunks:['I waited patiently','for the Lord,','and He inclined','to me.'],
   intro:['verse-intro','Jacob waited fourteen years for Rachel! Let\'s practice our memory verse from the Psalms. Build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Why did Jacob leave home?',a:[['Esau was angry with him','esau'],['He wanted to travel','camel'],['He was a soldier','soldier']],c:0},
    {id:'q2',q:'What did Jacob see in his dream?',a:[['A ladder to heaven','ladder'],['A big boat','ark'],['A burning bush','burningBush']],c:0},
    {id:'q3',q:'Where did Jacob\'s family move during the famine?',a:[['Egypt','pyramid'],['Rome','city'],['Bethlehem','stable']],c:0},
   ]},
 ]
});
