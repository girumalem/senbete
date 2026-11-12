/* Level III (Grades 4-6), October week 3: Lot (Genesis 19)
   Reading level: short reading pages, true or false, fill in the blank, memory verse. */
BKLesson({
 id:'L3-oct3', title:'Lot Is Saved', am:'ሎጥ', sticker:'pillar',
 pages:[
  {game:'cover', bg:'desert', title:'Lot Is Saved', am:'ሎጥ',
   props:[{art:'city',x:640,y:420,s:.8},{art:'angel',x:330,y:420,s:.55},{art:'man',x:440,y:428,s:.6},{art:'fire',x:700,y:300,s:.6,anim:'flicker'}],
   say:['cover','[[selam]]! Today\'s story is about Lot, the nephew of Abraham, and how God saved him and his family. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, October week 3: <b>Lot</b> (Genesis 19). Aim: learn about Lot, and how God saves the righteous.</p><p>Level III pages are reading pages. Selam reads each paragraph, and your child can tap any paragraph to hear it again.</p>'},

  {game:'read', chip:'Read', heading:'Lot chooses Sodom', pic:'city',
   paras:[
    ['r1','Lot was the son of Abraham\'s brother. When God called Abraham to leave his father\'s house, Lot went with him.'],
    ['r2','Lot chose to live near Sodom and Gomorrah, because the land was green and good for his cattle.'],
    ['r3','But the people of Sodom and Gomorrah were very sinful, and they rebelled against God. God decided to destroy the two cities.'],
   ]},

  {game:'read', chip:'Read', heading:'The angels come', pic:'angel',
   paras:[
    ['r4','Abraham prayed for the city. Lot was the only holy man there. God remembered Abraham, and sent two angels to save Lot first.'],
    ['r5','The angels came to Lot\'s house looking like travelers. Lot welcomed them to stay the night, just as Abraham always welcomed guests.'],
    ['r6','The angels took Lot, his wife and his two daughters by the hand and led them out of the city. Run, they said, and do not look back!'],
    ['r7','God sent fire from heaven on Sodom and Gomorrah. But Lot\'s wife looked back, and she became a pillar of salt. Lot and his daughters reached the town of Zoar safely.'],
   ],
   parent:'<p>Talk about it: Lot was saved because he was holy, and because God remembered Abraham\'s prayer. Why do you think the angels told them not to look back?</p>'},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Lot was Abraham\'s nephew.',t:true,why:'Lot was the son of Abraham\'s brother.',pic:'man'},
    {id:'t2',s:'The people of Sodom loved God and obeyed Him.',t:false,why:'They were sinful and rebelled against God.',pic:'city'},
    {id:'t3',s:'God sent two angels to save Lot.',t:true,why:'The angels led Lot and his family out by the hand.',pic:'angel'},
    {id:'t4',s:'Lot\'s wife obeyed the angels and never looked back.',t:false,why:'She looked back and became a pillar of salt.',pic:'pillar'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'Lot chose to live near ___ because the land was good for his cattle.',a:'Sodom',opts:['Egypt','Bethlehem']},
    {id:'f2',s:'God sent two ___ to take Lot out of the city.',a:'angels',opts:['soldiers','kings']},
    {id:'f3',s:'The angels said: Run, and do not look ___!',a:'back',opts:['up','down']},
    {id:'f4',s:'Lot and his daughters escaped to a small town called ___.',a:'Zoar',opts:['Jericho','Nazareth']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'By faith Noah, being divinely warned of things not yet seen, moved with godly fear, prepared an ark for the saving of his household.', ref:'Hebrews 11:7',
   chunks:['By faith Noah,','being divinely warned','of things not yet seen,','moved with godly fear,','prepared an ark','for the saving','of his household.'],
   intro:['verse-intro','This month\'s memory verse is from Hebrews, chapter eleven. Listen: By faith Noah, being divinely warned of things not yet seen, moved with godly fear, prepared an ark for the saving of his household. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Why was Lot saved from the fire?',a:[['He was holy, and God remembered Abraham','angel'],['He was rich','city'],['He was a king','king']],c:0},
    {id:'q2',q:'Who told Lot to leave the city?',a:[['Two angels','angel'],['A king','king'],['His cattle','cow']],c:0},
    {id:'q3',q:'What happened to Lot\'s wife?',a:[['She became a pillar of salt','pillar'],['She ran to Zoar','path'],['She stayed in her house','tukul']],c:0},
   ]},
 ]
});
