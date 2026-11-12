/* Level III (Grades 4-6), Easter season week 8: Bahran (Miracles of St. Michael; Sene 12; Psalm 34:7) */
BKLesson({
 id:'L3-eas8', title:'Bahran and Saint Michael', am:'ባሕራን', sticker:'michael',
 pages:[
  {game:'cover', bg:'sea', title:'Bahran and Saint Michael', am:'ባሕራን',
   props:[{art:'michael',x:640,y:430,s:.6},{art:'babyBasket',x:170,y:420,s:.7}],
   say:['cover','[[selam]]! This is the story of Bahran, the child of the sea, and how [[kidus-mikael]] protected him. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, Easter week 8: <b>Bahran</b> (Miracles of St. Michael, read on Sene 12). Aim: learn that God rewards those who help the poor on the saints\' days, and that His angels protect the faithful.</p><p>Talk about it: How can your family help someone in need on a saint\'s day?</p>'},

  {game:'read', chip:'Read', heading:'A poor man\'s good deeds', pic:'injera',
   paras:[
    ['r1','A poor man kept Saint Michael\'s day every month. He saved what little he had to feed the poor on that day.'],
    ['r2','His rich neighbor did not like his good works. The poor man fell sick and died before his son was born.'],
    ['r3','When the baby was born, the Archangel Michael blessed him and said: God will give this child the rich man\'s riches.'],
   ]},

  {game:'story', bg:'sea', chip:'The child of the sea',
   props:[{id:'rich',art:['man',{robe:'#6A3A8A'}],x:180,y:440,s:.55},{id:'box',art:'babyBasket',x:330,y:400,s:.6,hidden:true},{id:'farm',art:['figure',{robe:'#2F7A4E',beard:'dark',staff:true}],x:690,y:440,s:.55}],
   beats:[
    {wiggle:['rich'],say:['s1','The rich man heard this, and was jealous. He paid the poor mother, and took the baby, saying he would raise him.']},
    {show:['box'],sfx:'whoosh',say:['s2','But he put the baby in a box and threw it into the sea! Tap the box.'],tap:'box'},
    {move:{box:[600,410,.6]},sfx:'whoosh',say:['s3','God kept the box safe. It floated far away, to another land.']},
    {wiggle:['farm'],sfx:'glory',say:['s4','A farmer with no children found it, and was overjoyed. He named the boy Bahran, which means child of the sea.']},
   ]},

  {game:'story', bg:'field', chip:'A changed letter',
   props:[{id:'bah',art:['man',{robe:'#2F7A4E'}],x:180,y:440,s:.55},{id:'let',art:'scroll',x:280,y:380,s:.4},{id:'horse',art:'horse',x:560,y:440,s:.7,hidden:true},{id:'mi',art:'michael',x:580,y:400,s:.45,hidden:true}],
   beats:[
    {wiggle:['bah'],say:['l1','Twenty years later, the rich man visited the farmer and recognized Bahran. He wanted to kill him again!']},
    {wiggle:['let'],say:['l2','He sent Bahran home with a sealed letter for his servant. It said: Kill the one who brings this letter. Bahran did not know.']},
    {show:['horse','mi'],sfx:'glory',say:['l3','On the road, Saint Michael appeared as a young man on a horse. Tap the rider.'],tap:'mi'},
    {wiggle:['let'],sfx:'pop',say:['l4','He took the letter and changed it: Give my daughter to the one who brings this letter, and let him inherit all I have.']},
    {fx:'confetti',say:['l5','The servant obeyed the letter and held a wedding feast for Bahran! The rich man came home, heard the news, and fell dead from shock.']},
   ],
   parent:'<p>Bahran became a servant of St. Michael\'s church, continuing his father\'s good deeds.</p>'},

  {game:'order', chip:'Put it in order',
   intro:['order','Tap the pictures in the order they happened.'],
   cards:[
    {art:'injera',cap:'A poor man fed the poor',say:['o1','A poor man fed the poor.']},
    {art:'babyBasket',cap:'The baby was thrown into the sea',say:['o2','The baby was thrown into the sea.']},
    {art:['figure',{robe:'#2F7A4E',beard:'dark',staff:true}],cap:'A farmer raised Bahran',say:['o3','A farmer raised Bahran.']},
    {art:'scroll',cap:'Saint Michael changed the letter',say:['o4','Saint Michael changed the letter.']},
   ],
   done:['order-done','God remembered the father\'s good deeds!']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Bahran\'s father fed the poor on Saint Michael\'s day.',t:true,why:'He did it every month.',pic:'injera'},
    {id:'t2',s:'Bahran means child of the mountain.',t:false,why:'It means child of the sea.',pic:'babyBasket'},
    {id:'t3',s:'Saint Michael changed the wicked letter.',t:true,why:'He turned a plan for evil into a blessing.',pic:'michael'},
   ],
   done:['tf-done','Well done!']},

  {game:'verse', chip:'Memory verse',
   verse:'The angel of the Lord encamps all around those who fear Him, and delivers them.', ref:'Psalm 34:7',
   chunks:['The angel of the Lord','encamps all around','those who fear Him,','and delivers them.'],
   intro:['verse-intro','Our memory verse is from the Psalms. Listen: The angel of the Lord encamps all around those who fear Him, and delivers them. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Why did the rich man want to harm Bahran?',a:[['He was jealous of the blessing','gift'],['Bahran stole from him','table'],['Bahran was rude','door']],c:0},
    {id:'q2',q:'Who raised Bahran?',a:[['A farmer',['figure',{robe:'#2F7A4E',beard:'dark',staff:true}]],['A king','king'],['A fisherman','boat']],c:0},
    {id:'q3',q:'What can we do on saints\' days?',a:[['Help the poor','injera'],['Stay in bed','bed'],['Keep everything','gift']],c:0},
   ]},
 ]
});
