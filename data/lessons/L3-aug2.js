/* Level III (Grades 4-6), August week 2: Dormition of the Virgin Mary (Synaxarium, Tir 21; Luke 1:48) */
BKLesson({
 id:'L3-aug2', title:'All Generations Call Her Blessed', am:'ዕረፍተ ማርያም', sticker:'mary',
 pages:[
  {game:'cover', bg:'heaven', title:'Blessed Among Women', am:'ዕረፍተ ማርያም',
   props:[{art:'mary',x:640,y:440,s:.6},{art:'glory',x:640,y:280,s:1},{art:'peter',x:150,y:440,s:.5},{art:'disciple',x:240,y:440,s:.5}],
   say:['cover','[[selam]]! When the Virgin [[mariam]] fell asleep, God showed great wonders around her. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, August week 2: <b>The Dormition of the Virgin Mary</b> (Synaxarium; her repose is remembered on Tir 21). Aim: learn why the Church honors the Mother of God, and about the Fast of the Assumption (Tsome Filseta).</p><p>Talk about it: Why did Peter tell the man to ask the Virgin Mary for forgiveness?</p>'},

  {game:'read', chip:'Read', heading:'She fell asleep', pic:'mary',
   paras:[
    ['r1','The Holy Virgin [[mariam]] departed this life at the age of sixty-four, surrounded by the apostles of her Son. They were very sad.'],
    ['r2','Some enemies of the faith plotted to take her body and burn it. They feared the apostles would say she had risen like Jesus.'],
   ]},

  {game:'story', bg:'church', chip:'Taufania is healed',
   props:[{id:'bed',art:'bed',x:420,y:440,s:.9},{id:'tau',art:['man',{robe:'#5B4D3C'}],x:230,y:440,s:.55},{id:'peter',art:'peter',x:620,y:440,s:.55},{id:'glow',art:'glory',x:420,y:250,s:.9,hidden:true},{id:'angel',art:'angel',x:420,y:330,s:.45,hidden:true}],
   beats:[
    {wiggle:['tau'],say:['s1','A strong man named Taufania ran up and grabbed the bier where her body lay.']},
    {show:['glow','angel'],sfx:'whoosh',say:['s2','At once an angel of the Lord struck him with a sword, and his hands were cut off and stuck to the bier!']},
    {wiggle:['tau'],say:['s3','In despair, Taufania begged the apostles for forgiveness. They told him: Ask the Virgin [[mariam]]. Tap Taufania.'],tap:'tau'},
    {wiggle:['peter'],sfx:'glory',say:['s4','He cried to her for mercy. Peter put his hands back on, and he was healed! Peter told him: Go and be a witness for Jesus Christ.']},
   ],
   parent:'<p>This account is from the Synaxarium. It shows the honor God gives to the Mother of His Son.</p>'},

  {game:'read', chip:'Read', heading:'The fast of the apostles', pic:'candle',
   paras:[
    ['r3','Angels carried her body away and placed it under the tree of life in Paradise. Only the apostle John saw this, and he told the others.'],
    ['r4','The apostles longed to see her body again, so they fasted and prayed for fourteen days.'],
    ['r5','God heard their prayer and gave them her body. This fast is kept by our Church every August as the Fast of the Assumption, Tsome Filseta.'],
   ]},

  {game:'read', chip:'Read', heading:'Why we call her blessed', pic:'heart',
   paras:[
    ['r6','Miracles follow those who believe in Christ. As the Mother of God, the Virgin [[mariam]] is greater than all creation, and close to God to pray for us.'],
    ['r7','She herself said, in the Gospel: From now on all generations will call me blessed.'],
   ]},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'The apostles were with [[mariam]] when she departed.',t:true,why:'They were gathered around her.',pic:'peter'},
    {id:'t2',s:'Taufania was healed after asking her for mercy.',t:true,why:'Peter put his hands back on.',pic:'heart'},
    {id:'t3',s:'The apostles fasted for forty days.',t:false,why:'They fasted for fourteen days.',pic:'candle'},
   ],
   done:['tf-done','Well done!']},

  {game:'verse', chip:'Memory verse',
   verse:'For behold, henceforth all generations will call me blessed.', ref:'Luke 1:48',
   chunks:['For behold,','henceforth','all generations','will call me blessed.'],
   intro:['verse-intro','This month\'s memory verse is from the song of the Virgin [[mariam]] in Luke. Listen: For behold, henceforth all generations will call me blessed. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who saw the angels carry her body?',a:[['The apostle John','disciple'],['King Herod','king'],['A shepherd','shepherd']],c:0},
    {id:'q2',q:'How long did the apostles fast?',a:[['Fourteen days',['text',{t:'14',size:64,c:'#24418F'}]],['Three days',['text',{t:'3',size:64,c:'#24418F'}]],['One day',['text',{t:'1',size:64,c:'#24418F'}]]],c:0},
    {id:'q3',q:'What is the August fast called?',a:[['The Fast of the Assumption','candle'],['The Great Lent','lentils'],['The Fast of Nineveh','fish']],c:0},
   ]},
 ]
});
