/* Level IV (Grade 7 and up), Lent week 6: Nicodemus (John 3:1-21; Matthew 28:19) */
BKLesson({
 id:'L4-len6', title:'Nicodemus', am:'ኒቆዲሞስ', sticker:'dove',
 pages:[
  {game:'cover', bg:'night', title:'Nicodemus', am:'ኒቆዲሞስ',
   props:[{art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',beard:'grey',cap:'#E2A62B'}],x:260,y:440,s:.6},{art:'jesus',x:520,y:440,s:.6},{art:'lamp',x:390,y:420,s:.5}],
   say:['cover','[[selam]]! A learned teacher came to Christ secretly, at night, with questions. What he learned is the door into God\'s kingdom: holy baptism.'],
   parent:'<p>This lesson follows Level IV, Lent week 6: <b>Nicodemus</b> (John 3). Aim: learn the benefit of searching for spiritual knowledge, and the benefit of baptism.</p><p>Do your children know their baptismal names and their godparents? Tell them!</p>'},

  {game:'story', bg:'night', chip:'A visitor at night',
   props:[{id:'nic',art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',beard:'grey',cap:'#E2A62B'}],x:120,y:440,s:.6},{id:'jesus',art:'jesus',x:560,y:440,s:.6},{id:'lamp',art:'lamp',x:440,y:420,s:.5}],
   beats:[
    {say:['v1','Nicodemus was a Pharisee, a great scholar of God\'s law. He was already very educated, but he knew he could learn more from Christ. Tap Nicodemus.'],tap:'nic'},
    {move:{nic:[330,440]},say:['v2','He came at night, because he was afraid the other scholars would see him. But he came, and he kept coming.']},
    {wiggle:['jesus'],say:['v3','Christ said to him: Unless one is born again, he cannot see the kingdom of God.']},
   ]},

  {game:'choose', bg:'night', chip:'Born again?',
   props:[{id:'nic',art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',beard:'grey',cap:'#E2A62B'}],x:330,y:440,s:.6},{id:'jesus',art:'jesus',x:560,y:440,s:.6},{id:'dove',art:'dove',x:560,y:150,s:.5,hidden:true},{id:'water',art:'raindrop',x:450,y:300,s:.8,hidden:true}],
   prompt:['b0','Nicodemus was puzzled: How can a man be born when he is old? Can he enter his mother\'s womb again? What did Christ mean by born again?'],
   options:[
    {label:'Being born a second time as a baby',art:'baby',good:false,say:['b1','That is what Nicodemus first thought! Christ meant something else. Try again.']},
    {label:'Being born of water and the Spirit, in baptism',art:'dove',then:{show:['dove','water']},
     say:['b2','Christ said: Unless one is born of water and the Spirit, he cannot enter the kingdom of God. That new birth is holy baptism.']},
   ]},

  {game:'order', chip:'A baptism in our Church',
   intro:['o0','This is how a child is baptized in our Church. Tap the steps in order.'],
   cards:[
    {art:'priest',cap:'The priest prays over the water',say:['o1','The priest and deacons pray over the water in the name of the Father, the Son and the Holy Spirit.']},
    {art:'family',cap:'A godparent is chosen',say:['o2','A godfather for a boy, or a godmother for a girl, is chosen.']},
    {art:'scroll',cap:'The child receives a baptismal name',say:['o3','The child receives a new name, the baptismal name.']},
    {art:'cross',cap:'The godparent confesses the faith',say:['o4','The godparent says the creed, renounces Satan, and promises to teach the child about God.']},
    {art:'raindrop',cap:'The child is baptized',say:['o5','The child is baptized in the water.']},
    {art:'jar',cap:'Anointed with holy Myron',say:['o6','The priest anoints the child with holy oil, the Myron. This is confirmation.']},
    {art:'cup',cap:'The first Holy Communion',say:['o7','At the end of the [[kidase]], the child receives Holy Communion.']},
   ],
   done:['o8','Three sacraments in one day: Baptism, Confirmation and Holy Communion.']},

  {game:'match', chip:'Church words',
   heading:'Match each word to its meaning',
   intro:['m0','Match each word to its meaning.'],
   pairs:[
    ['Baptism','Being born again of water and the Spirit'],
    ['Myron','The holy oil of confirmation'],
    ['Godparent','Promises to teach the child the faith'],
    ['Baptismal name','The new name given at baptism'],
    ['Pharisee','A Jewish scholar who strictly kept the Law'],
   ],
   done:['m1','The water of baptism is blessed to become like the water that flowed from Christ\'s side on the Cross.']},

  {game:'verse', chip:'Memory verse',
   verse:'Unless one is born of water and the Spirit, he cannot enter the kingdom of God.', ref:'John 3:5',
   chunks:['Unless one is born','of water and the Spirit,','he cannot enter','the kingdom of God.'],
   intro:['verse-intro','Our memory verse: Unless one is born of water and the Spirit, he cannot enter the kingdom of God. Build it in order.'],
   done:['verse-done','After His resurrection, Christ sent His apostles to baptize all nations.']},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Do you know your baptismal name, and who your godparent is? Ask your family this week.'],
    ['k2','Nicodemus was already a scholar, but he kept learning. Why is it important to keep learning about God?','God reveals more of Himself to those who seek Him.'],
    ['k3','What question about God or the Church would you like to ask, as Nicodemus did?'],
   ]},
 ]
});
