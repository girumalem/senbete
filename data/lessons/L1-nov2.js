/* Level I, November week 2: Isaac Blesses Jacob (Genesis 27) */
BKLesson({
 id:'L1-nov2', title:'Isaac Blesses Jacob', am:'በረከት', sticker:'bowl',
 pages:[
  {game:'cover', bg:'field', title:'Isaac Blesses Jacob', am:'ይስሐቅ ያዕቆብን ባረከ',
   props:[{art:'tent',x:640,y:380,s:.8},{art:'isaacOld',x:400,y:425,s:.7,anim:'bob'},{art:'jacobYoung',x:250,y:428,s:.7},{art:'esau',x:550,y:428,s:.7}],
   say:['cover','[[selam]]! Do you remember Isaac, the baby God promised to Abraham and Sarah? Now Isaac is grown up. Today we learn about a special blessing. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, November week 2: <b>Isaac Blesses Jacob</b> (Genesis 27). Objective: learn about the importance of blessing.</p>'},

  {game:'story', bg:'field', chip:'Twins',
   props:[{art:'tent',x:660,y:380,s:.8},{id:'isaac',art:['isaacOld',{arms:'down',beard:'grey'}],x:200,y:425,s:.68},{id:'reb',art:'rebecca',x:310,y:428,s:.64},{id:'esau',art:'esau',x:480,y:428,s:.7,hidden:true},{id:'jacob',art:'jacobYoung',x:600,y:428,s:.7,hidden:true}],
   beats:[
    {say:['t1','Isaac married a woman named Rebecca. Tap Rebecca!'],tap:'reb'},
    {show:['esau','jacob'],sfx:'note',say:['t2','They had twin boys: Esau and Jacob! Esau was born first.']},
    {wiggle:['esau'],say:['t3','The first-born son gets a special blessing from his father, called the blessing of the first-born.']},
   ]},

  {game:'drag', bg:'field', chip:'Jacob cooks',
   props:[{id:'pot',art:['pot',{steam:true}],x:400,y:400,s:1.1},{art:'fire',x:400,y:430,s:.9},{art:'jacobYoung',x:600,y:428,s:.66}],
   zone:{x:310,y:250,w:180,h:170},
   items:[{art:'lentils',x:110,y:400,s:.9},{art:'onion',x:200,y:300,s:.8},{art:'pepper',x:120,y:250,s:.8}],
   intro:['cook','One day Jacob was cooking. Help him! Drag the lentils, the onion and the pepper into the pot.'],
   progress:'*{n} more* for the pot!',
   done:['cook-done','Mmm, that smells good!']},

  {game:'story', bg:'field', chip:'The blessing',
   props:[{id:'bowl',art:'bowl',x:400,y:400,s:1},{id:'esau',art:'esau',x:620,y:428,s:.7},{id:'jacob',art:'jacobYoung',x:200,y:428,s:.7}],
   beats:[
    {move:{esau:[540,428,.7]},say:['b1','Esau came home from hunting, very hungry. He said: please give me some food!'],wiggle:['esau']},
    {say:['b2','Jacob said: I will, if you give me your blessing of the first-born. Esau said: you can have it! Tap the bowl to give Esau his food.'],tap:'bowl'},
    {move:{bowl:[500,380,.8]},sfx:'pop',say:['b3','Esau ate the food. He gave away his blessing for one bowl of food.']},
   ],
   parent:'<p>Esau came from hunting very hungry and found Jacob making food. Jacob said he would share it only if Esau gave him the blessing of the first-born. Esau agreed, and ate.</p>'},

  {game:'story', bg:'garden', chip:'Isaac blesses Jacob',
   props:[{id:'isaac',art:'isaacOld',x:330,y:425,s:.74},{id:'jacob',art:['jacobYoung',{arms:'pray'}],x:500,y:428,s:.66},{id:'sp',art:'sparkles',x:500,y:220,s:1.3,hidden:true}],
   beats:[
    {say:['j1','When Isaac was old, he gave Jacob the blessing of the first-born. Tap Isaac\'s hand to bless Jacob!'],tap:'isaac'},
    {show:['sp'],fx:'flash',sfx:'glory',say:['j2','God blessed Jacob, because of his father\'s blessing.']},
    {say:['j3','Our mothers and fathers bless us too. Tonight, ask your parents for a blessing!']},
   ],
   parent:'<p>Ask: Do you get blessings from your parents? In Ethiopian homes, children often kiss their parents\' hands or knees and receive a blessing.</p>'},

  {game:'quiz', questions:[
    {id:'q1',q:'Who is the father of Isaac?',a:[['Jacob','jacobYoung'],['Abraham','abraham'],['Esau','esau']],c:1},
    {id:'q2',q:'Who was born first, Jacob or Esau?',show:'Who was born first?',a:[['Jacob','jacobYoung'],['Esau','esau']],c:1},
    {id:'q3',q:'What special thing does the first-born get?',a:[['A house','tukul'],['A blessing','sparkles'],['A camel','camel']],c:1},
    {id:'q4',q:'Who received the blessing of the first-born?',a:[['Jacob','jacobYoung'],['Esau','esau']],c:0},
   ]},
  {game:'song', song:'le-getaye-le-egziabher-silad'},
 ]
});
