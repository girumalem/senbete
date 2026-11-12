/* Level III (Grades 4-6), December week 1: Entry of the Virgin Mary into the Temple (Miracles of Mary; Synaxarium, Tahsas 3; Psalm 45:14) */
BKLesson({
 id:'L3-dec1', title:'Mariam in the Temple', am:'በአታ ለማርያም', sticker:'temple',
 pages:[
  {game:'cover', bg:'church', title:'Mariam in the Temple', am:'በአታ ለማርያም',
   props:[{art:'temple',x:640,y:440,s:.55},{art:['girl',{robe:'#24418F',netela:'#FFFFFF',halo:true}],x:160,y:440,s:.6},{art:'angel',x:250,y:300,s:.4}],
   say:['cover','[[selam]]! When [[mariam]] was only three years old, she went to live in God\'s temple, and angels brought her food. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, December week 1: <b>Entry of the Virgin Mary into the Temple</b> (Ba\'ata, celebrated on Tahsas 3). Aim: learn how the Virgin Mary was dedicated to God and grew up in His temple.</p><p>Talk about it: What promise did Iyakem and Hanna keep?</p>'},

  {game:'read', chip:'Read', heading:'A promise kept', pic:'baby',
   paras:[
    ['r1','Hanna gave birth to the Virgin [[mariam]] in Lebanon. Iyakem and Hanna praised God for His precious gift.'],
    ['r2','Before she was born, they had made a vow: if God gave them a child, the child would be given back to Him, to grow up serving in the temple.'],
    ['r3','So when [[mariam]] was three years old, they took her to the temple in Jerusalem, the house of God.'],
   ]},

  {game:'story', bg:'church', chip:'Bread from heaven',
   props:[{id:'zek',art:'priest',x:180,y:440,s:.6},{id:'crowd',art:'crowd',x:620,y:440,s:.8},{id:'mar',art:['girl',{robe:'#24418F',netela:'#FFFFFF',halo:true}],x:420,y:440,s:.6},{id:'glow',art:'glory',x:420,y:180,s:.9,hidden:true},{id:'angel',art:'angel',x:420,y:250,s:.4,hidden:true},{id:'cup',art:'cup',x:470,y:300,s:.35,hidden:true}],
   beats:[
    {wiggle:['zek'],say:['s1','The high priest Zechariah and all the people were gathered outside the temple.']},
    {show:['glow','angel','cup'],sfx:'glory',say:['s2','Zechariah saw an angel coming down from heaven with bread and a cup!']},
    {move:{zek:[300,440,.6],angel:[420,150,.4],cup:[470,200,.35]},say:['s3','He stepped forward to receive it, but the angel went back up.']},
    {move:{zek:[150,440,.6],crowd:[740,440,.8]},say:['s4','So Zechariah asked everyone to step back from the child. Tap [[mariam]].'],tap:'mar'},
    {move:{angel:[420,320,.4],cup:[470,360,.35]},sfx:'glory',fx:'confetti',say:['s5','The angel came down to her alone, and fed her the heavenly bread and drink. Everyone knew that God had chosen her.']},
   ]},

  {game:'read', chip:'Read', heading:'Twelve years in the temple', pic:'temple',
   paras:[
    ['r4','The Virgin [[mariam]] lived in the temple for twelve years, until she was fifteen years old.'],
    ['r5','All that time, angels of God brought her food and drink.'],
    ['r6','When she was fifteen, she was entrusted to Joseph, a righteous carpenter, so that he could protect her and care for her.'],
   ]},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'[[mariam]] went to the temple when she was three years old.',t:true,why:'Her parents kept their vow to God.',pic:'temple'},
    {id:'t2',s:'The angel gave the bread to Zechariah.',t:false,why:'The angel gave it only to the child [[mariam]].',pic:'angel'},
    {id:'t3',s:'She lived in the temple for twelve years.',t:true,why:'From age three until age fifteen.',pic:['text',{t:'12',size:64,c:'#24418F'}]},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'The high priest at the temple was ___.',a:'Zechariah',opts:['Moses','Herod']},
    {id:'f2',s:'Angels brought her ___ and drink.',a:'bread',opts:['gold','flowers']},
    {id:'f3',s:'At fifteen she was entrusted to ___ the carpenter.',a:'Joseph',opts:['Jacob','Peter']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'She shall be brought to the King in robes of many colors.', ref:'Psalm 45:14',
   chunks:['She shall be brought','to the King','in robes of many colors.'],
   intro:['verse-intro','This month\'s memory verse is from the Psalms of David, a prophecy about [[mariam]]. Listen: She shall be brought to the King in robes of many colors. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Why was [[mariam]] taken to the temple?',a:[['Her parents had promised her to God','glory'],['She was lost','sandals'],['To buy bread','basket']],c:0},
    {id:'q2',q:'Who fed her in the temple?',a:[['Angels','angel'],['Soldiers','soldier'],['Shepherds','shepherd']],c:0},
    {id:'q3',q:'How old was she when she left the temple?',a:[['Fifteen',['text',{t:'15',size:64,c:'#24418F'}]],['Three',['text',{t:'3',size:64,c:'#24418F'}]],['Thirty',['text',{t:'30',size:64,c:'#24418F'}]]],c:0},
   ]},
 ]
});
