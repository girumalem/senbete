/* Level IV (Grade 7 and up), August week 4: Ezra (Book of Ezra; Ezra 8:21-23; the Church's tradition of Ezra and the Archangel Uriel) */
BKLesson({
 id:'L4-aug4', title:'Ezra', am:'ዕዝራ', sticker:'scroll',
 pages:[
  {game:'cover', bg:'desert', title:'Ezra', am:'ዕዝራ',
   props:[{art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',beard:'grey',cap:'#FFFFFF'}],x:300,y:440,s:.6},{art:'angel',x:540,y:430,s:.55},{art:'scroll',x:420,y:420,s:.6}],
   say:['cover','[[selam]]! Israel was in captivity, far from Jerusalem. A humble prophet named Ezra had hard questions for God, and God sent an archangel to answer him.'],
   parent:'<p>This lesson follows Level IV, August week 4: <b>Ezra</b> (Book of Ezra and the Church\'s tradition). Aim: learn about Ezra\'s wisdom, his faith, and his conversation with an angel.</p><p>Our Church honors the Archangel Uriel (Kidus Urael) as the Angel of Wisdom, from this story.</p>'},

  {game:'story', bg:'desert', chip:'Why, Lord?',
   props:[{id:'ezra',art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',beard:'grey',cap:'#FFFFFF',arms:'pray'}],x:250,y:440,s:.6},{id:'city',art:'city',x:640,y:440,s:.5},{id:'cloud',art:'darkCloud',x:640,y:180,s:.7},{id:'ang',art:'angel',x:480,y:-120,s:.55}],
   beats:[
    {say:['w1','The king of Babylon had destroyed Jerusalem and carried its people away. Ezra, a scholar of the Law of Moses, was taken to Persia. Tap the city.'],tap:'city'},
    {wiggle:['cloud'],say:['w2','There he saw people even more sinful than in Israel. He asked God: Why have You given Your people into the hands of people who sin even more?']},
    {move:{ang:[480,320]},sfx:'glory',say:['w3','God sent the Archangel Uriel, one of the seven archangels, to answer him. Uriel explained that God\'s wisdom is far beyond human understanding.']},
   ]},

  {game:'collect', bg:'night', chip:'Seven visions',
   props:[{id:'ezra',art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',beard:'grey',cap:'#FFFFFF'}],x:150,y:440,s:.55},{id:'ang',art:'angel',x:680,y:430,s:.5}],
   items:[[260,400],[340,380],[420,400],[500,380],[300,300],[420,290],[540,300]].map(([x,y],i)=>({art:'star',x,y,s:.5})),
   slots:[[300,140,.4],[360,120,.4],[420,110,.4],[480,120,.4],[540,140,.4],[380,180,.4],[460,180,.4]],
   intro:['v0','After Ezra fasted and prayed, God showed him seven visions, about the rebuilding of Jerusalem, and even the coming of Christ. Tap the seven visions.'],
   done:['v1','The angel said: God showed you these because you love Him and love Jerusalem. You are blessed, because you humbled yourself as a sinner, though you are not.']},

  {game:'story', bg:'night', chip:'A cup of wisdom',
   props:[{id:'ezra',art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',beard:'grey',cap:'#FFFFFF'}],x:250,y:440,s:.55},{id:'ang',art:'angel',x:520,y:430,s:.55},{id:'cup',art:'cup',x:400,y:380,s:.5},{id:'s1',art:'scroll',x:600,y:430,s:.4,hidden:true},{id:'s2',art:'scroll',x:680,y:430,s:.4,hidden:true},{id:'s3',art:'scroll',x:740,y:430,s:.4,hidden:true}],
   beats:[
    {say:['u1','The archangel gave Ezra a cup to drink: a drink of great wisdom and understanding. Tap the cup.'],tap:'cup'},
    {move:{cup:[300,360]},fx:'flash',say:['u2','He also gave wisdom to five men Ezra chose.']},
    {show:['s1','s2','s3'],say:['u3','In forty days, they wrote twenty-four books! That is why our Church calls Uriel the Angel of Wisdom.']},
   ]},

  {game:'choose', bg:'desert', chip:'Soldiers or a fast?',
   props:[{id:'ezra',art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',beard:'grey',cap:'#FFFFFF'}],x:200,y:440,s:.6},{id:'king',art:'king',x:600,y:440,s:.6},{id:'sold',art:'soldier',x:700,y:440,s:.5}],
   prompt:['s0','King Artaxerxes let Ezra lead the people home to Jerusalem, carrying gold and silver for God\'s house. The road was dangerous. What did Ezra do?'],
   options:[
    {label:'Asked the king for soldiers and horsemen',art:'soldier',good:false,say:['s1','Ezra was ashamed to ask! He had told the king that God protects those who seek Him. Try again.']},
    {label:'Declared a fast, and trusted God',art:'heart',then:{wiggle:['ezra']},
     say:['s2','At the river Ahava they fasted and prayed. God protected them from their enemies all the way to Jerusalem.']},
   ]},

  {game:'verse', chip:'Memory verse',
   verse:'The hand of our God is upon all those for good who seek Him.', ref:'Ezra 8:22',
   chunks:['The hand of our God','is upon all those','for good','who seek Him.'],
   intro:['verse-intro','Our memory verse is what Ezra told the king: The hand of our God is upon all those for good who seek Him. Build it in order.'],
   done:['verse-done','God\'s protection is greater than any army.']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf0','True or false?'],
   items:[
    {id:'t1',s:'Ezra thought of himself as very righteous.',t:false,why:'He humbled himself as a sinner, and the angel called him blessed for it.'},
    {id:'t2',s:'The Archangel Uriel answered Ezra\'s questions.',t:true,why:'He is called the Angel of Wisdom.'},
    {id:'t3',s:'Ezra asked the king for an army to protect them.',t:false,why:'He declared a fast and trusted God instead.'},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Ezra asked God hard questions. Is it okay to ask God why? What did Ezra learn?','God\'s wisdom is beyond our understanding.'],
    ['k2','Ezra loved God\'s house and wanted it rebuilt. How can you show love for your church?'],
    ['k3','When have you trusted God instead of your own strength?'],
   ]},
 ]
});
