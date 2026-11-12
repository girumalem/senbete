/* Level II (Grades 1-3), October week 1: The Holy Cross (Synaxarium; finding of the Cross, Meskel) */
BKLesson({
 id:'L2-oct1', title:'Queen Helena Finds the Cross', am:'መስቀል', sticker:'demera',
 pages:[
  {game:'cover', bg:'night', title:'Queen Helena Finds the Cross', am:'መስቀል',
   props:[{art:['demera',{lit:true}],x:400,y:440,s:.95},{art:'boy',x:180,y:440,s:.7},{art:'girl',x:620,y:440,s:.7},{art:'adeyAbeba',x:90,y:420,s:.5},{art:'adeyAbeba',x:720,y:420,s:.5}],
   say:['cover','[[selam]]! Every year in [[meskerem]] we light a big bonfire called [[demera]], and celebrate [[meskel]]. Today we read why! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, October week 1: <b>The Holy Cross</b> (Synaxarium). Aim: learn how the Cross of Jesus Christ was found, and when our Church celebrates it.</p><p>Talk about it: Have you seen a cross on top of our church? Where else do you see a cross?</p>'},

  {game:'read', chip:'Read along', heading:'The Cross is hidden', pic:'handCross',
   paras:[
    ['r1','Jesus Christ saved us and showed us His love by suffering on the Cross.'],
    ['r2','The Holy Cross did many miracles, and people who saw them believed in Jesus.'],
    ['r3','But the enemies of Jesus did not like this. So they buried the Cross and hid it.'],
    ['r4','Hundreds of years later, a queen called Helena wanted to find the Cross of Jesus.'],
   ]},

  {game:'story', bg:'desert', chip:'Helena goes to Jerusalem',
   props:[{art:'city',x:640,y:430,s:.6},{id:'king',art:'king',x:150,y:440,s:.55},{id:'hel',art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',crown:true,netela:'#FFFFFF',halo:true}],x:280,y:440,s:.58},{id:'s1',art:'soldier',x:380,y:440,s:.45,hidden:true},{id:'s2',art:'soldier',x:440,y:440,s:.45,hidden:true},{id:'old',art:['man',{beard:'white',robe:'#8C8478',staff:true}],x:560,y:440,s:.52,hidden:true}],
   beats:[
    {wiggle:['king'],say:['h1','Helena\'s son, Constantine, was a king. He wanted to do what his mother wished. Tap King Constantine.'],tap:'king'},
    {show:['s1','s2'],sfx:'whoosh',say:['h2','He gave her an army to go with her to Jerusalem.']},
    {show:['old'],say:['h3','Nobody in Jerusalem could tell her where the Cross was. At last she found an old man called Kyriakos. Tap him.'],tap:'old'},
    {wiggle:['old'],say:['h4','Kyriakos showed her the place where the Cross was buried.']},
   ],
   parent:'<p>Ask: Do you do what your father and mother wish, like King Constantine?</p>'},

  {game:'story', bg:'night', chip:'The smoke points the way',
   props:[{id:'wood',art:'demera',x:300,y:440,s:.8},{id:'fire',art:'fire',x:300,y:440,s:1.6,hidden:true},{id:'smoke',art:'smoke',x:300,y:330,s:.9,hidden:true},{id:'cross',art:'procCross',x:560,y:420,s:.7,hidden:true},{id:'hel',art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',crown:true,netela:'#FFFFFF',halo:true}],x:690,y:440,s:.58}],
   beats:[
    {say:['f1','God showed Helena what to do: light a big pile of wood, and put incense in the fire. Tap the wood to light it!'],tap:'wood'},
    {show:['fire'],sfx:'whoosh',say:['f2','The fire burned bright! We use incense in church too. It smells sweet as it goes up with our prayers.']},
    {show:['smoke'],say:['f3','The smoke went up high, and then it came down and pointed to one place.']},
    {show:['cross'],sfx:'glory',fx:'confetti',say:['f4','The people dug there, and they found the Holy Cross! Everyone was full of joy.']},
   ],
   parent:'<p>The Church celebrates the Finding of the Cross on Meskerem 16 and 17 (September 26 and 27) with the Demera bonfire.</p>'},

  {game:'puzzle', chip:'Cross puzzle',
   intro:['puzzle-intro','Puzzle time! Read the clue, then tap the letters to spell the answer.'],
   items:[
    {id:'w1',clue:'The queen who wanted to find the Cross',word:'Helena',pic:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',crown:true,netela:'#FFFFFF',halo:true}]},
    {id:'w2',clue:'She went to find it in this city',word:'Jerusalem',pic:'city'},
    {id:'w3',clue:'They put this sweet thing in the fire',word:'incense',pic:'smoke'},
    {id:'w4',clue:'Cross in Amharic',word:'Meskel',pic:'procCross'},
   ],
   done:['puzzle-done','You solved the cross puzzle!']},

  {game:'order', chip:'What happened first?',
   intro:['order','Tap the pictures in the order they happened.'],
   cards:[
    {art:'stone',cap:'The Cross was buried'},
    {art:'king',cap:'Constantine gave an army'},
    {art:'smoke',cap:'The smoke pointed the way'},
    {art:'procCross',cap:'The Cross was found!'},
   ],
   done:['order-done','That is the whole story!']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who buried the Holy Cross?',a:[['The enemies of Jesus','soldier'],['Queen Helena',['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',crown:true,netela:'#FFFFFF',halo:true}]]],c:0},
    {id:'q2',q:'Who was Helena\'s son?',a:[['King Constantine','king'],['Noah','noah']],c:0},
    {id:'q3',q:'What do we light every year for Meskel?',a:[['A Demera bonfire',['demera',{lit:true}]],['A candle on a cake','candle']],c:0},
   ]},
  {game:'song', song:'meskel-hailne-meskel-tsininn'},
 ]
});
