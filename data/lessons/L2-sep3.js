/* Level II (Grades 1-3), September week 3: God Cares for Adam in Paradise (Genesis 1, 2) */
BKLesson({
 id:'L2-sep3', title:'Adam and Eve in the Garden', am:'አዳምና ሔዋን', sticker:'fruitTree',
 pages:[
  {game:'cover', bg:'garden', title:'Adam and Eve in the Garden', am:'አዳምና ሔዋን',
   props:[{art:'fruitTree',x:150,y:430,s:.8},{art:['man',{robe:'#8DAA4A',sleeve:'#8DAA4A',beard:'dark'}],x:500,y:435,s:.6},{art:['woman',{robe:'#5E9A3A',netela:'#8DAA4A'}],x:600,y:438,s:.58},{art:'lion',x:720,y:440,s:.45},{art:'sheep',x:300,y:445,s:.35}],
   say:['cover','[[selam]]! Last time God made the world for Adam. Today we read how God cared for Adam in the beautiful Garden of Eden. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, September week 3: <b>God Cares for Adam in Paradise</b> (Genesis 1, 2). Aim: learn how God cared for Adam and Eve, and the rule He gave them.</p>'},

  {game:'read', chip:'Read along', heading:'Adam is not alone', pic:['woman',{robe:'#5E9A3A',netela:'#8DAA4A'}],
   paras:[
    ['r1','Adam lived in a beautiful garden called Eden. But he was all alone.'],
    ['r2','God saw that Adam was lonely, so He made Eve to be his helper.'],
    ['r3','Adam and Eve lived together happily in the Garden of Eden.'],
   ]},

  {game:'match', chip:'Adam names the animals', heading:'Match each animal to its name',
   intro:['match-intro','God brought all the animals to Adam, and Adam gave each one a name. Tap an animal, then tap its name.'],
   pairs:[['','Lion','lion',null],['','Elephant','elephant',null],['','Walia ibex','walia',null],['','Sheep','sheep',null]],
   done:['match-done','Every animal knew its name when Adam called it!']},

  {game:'story', bg:'garden', chip:'One rule',
   props:[{id:'tree',art:['fruitTree',{special:true}],x:600,y:430,s:.85},{art:'fruitTree',x:160,y:430,s:.6},{id:'adam',art:['man',{robe:'#8DAA4A',sleeve:'#8DAA4A',beard:'dark'}],x:320,y:435,s:.6},{id:'eve',art:['woman',{robe:'#5E9A3A',netela:'#8DAA4A'}],x:420,y:438,s:.58},{id:'glow',art:'glory',x:400,y:130,s:.8}],
   beats:[
    {wiggle:['adam','eve'],say:['k1','God made Adam and Eve like a king and a queen over everything on earth. Tap Adam and Eve.'],tap:'adam'},
    {sfx:'pop',say:['k2','God said: You may eat any fruit or vegetable that grows on earth.']},
    {wiggle:['tree'],say:['k3','Except one: the fruit of the Tree of Knowledge. Tap that tree.'],tap:'tree'},
    {fx:'confetti',say:['k4','Adam and Eve lived happily in the garden for a long time. God cared for them so much!']},
   ],
   parent:'<p>God gave Adam and Eve everything, and only one rule. Talk about rules that keep us safe because someone loves us.</p>'},

  {game:'puzzle', chip:'Word puzzle',
   intro:['puzzle-intro','Word puzzle! Read the clue, then tap the letters to spell the answer.'],
   items:[
    {id:'w1',clue:'God made Adam a helper called …',word:'Eve',pic:['woman',{robe:'#5E9A3A',netela:'#8DAA4A'}]},
    {id:'w2',clue:'The beautiful garden was called …',word:'Eden',pic:'fruitTree'},
    {id:'w3',clue:'Adam gave every animal a …',word:'name',pic:'lion'},
   ],
   done:['puzzle-done','You spelled them all! Great reading.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Why did God make Eve?',a:[['Adam was lonely','heart'],['To feed the fish','fish']],c:0},
    {id:'q2',q:'Who gave the animals their names?',a:[['Adam',['man',{robe:'#8DAA4A',sleeve:'#8DAA4A',beard:'dark'}]],['The lion','lion']],c:0},
    {id:'q3',q:'Which fruit were they told not to eat?',a:[['From the Tree of Knowledge',['fruitTree',{special:true}]],['Every apple','fruitTree']],c:0},
   ]},
  {game:'song', song:'kulo-zefekede-gebre-egziabhe'},
 ]
});
