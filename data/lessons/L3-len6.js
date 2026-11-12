/* Level III (Grades 4-6), Lent week 6: Nicodemus (John 3:1-15; John 3:5) */
BKLesson({
 id:'L3-len6', title:'Nicodemus Comes by Night', am:'ኒቆዲሞስ', sticker:'candle',
 pages:[
  {game:'cover', bg:'night', title:'Nicodemus Comes by Night', am:'ኒቆዲሞስ',
   props:[{art:['figure',{robe:'#24418F',sleeve:'#24418F',beard:'grey',mantle:'#FFFFFF'}],x:170,y:440,s:.6},{art:'candle',x:400,y:300,s:.6},{art:'jesus',x:640,y:440,s:.6}],
   say:['cover','[[selam]]! A wise teacher came to Jesus at night with a question, and learned about being born again. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, Lent week 6: <b>Nicodemus</b> (John 3:1-15). Aim: learn about baptism, and about humbly seeking to know God.</p><p>Talk about it: Do you know your baptismal name? Ask your godparent about your baptism day.</p>'},

  {game:'read', chip:'Read', heading:'A teacher who wanted to learn', pic:'scroll',
   paras:[
    ['r1','Nicodemus was a Jewish leader and a learned teacher. Yet he knew he could learn much more from Jesus.'],
    ['r2','He came to Jesus at night, because he was afraid that the other leaders would see him.'],
    ['r3','Even though he was educated, he was not proud of his knowledge. He humbly came to learn about God.'],
   ]},

  {game:'story', bg:'night', chip:'Born again',
   props:[{id:'nic',art:['figure',{robe:'#24418F',sleeve:'#24418F',beard:'grey',mantle:'#FFFFFF'}],x:220,y:440,s:.6},{id:'candle',art:'candle',x:400,y:420,s:.6},{id:'jesus',art:'jesus',x:580,y:440,s:.6},{id:'dove',art:'dove',x:580,y:150,s:.45,hidden:true}],
   beats:[
    {wiggle:['jesus'],say:['s1','Jesus said: Unless one is born again, he cannot see the kingdom of God.']},
    {wiggle:['nic'],say:['s2','Nicodemus was puzzled: How can a grown man be born again? Tap Nicodemus.'],tap:'nic'},
    {show:['dove'],sfx:'glory',say:['s3','Jesus explained: Unless one is born of water and the Spirit, he cannot enter the kingdom of God.']},
    {wiggle:['candle'],say:['s4','Being born again means baptism: a new, spiritual birth from God. Tap the candle.'],tap:'candle'},
   ]},

  {game:'order', chip:'A baptism in our Church',
   intro:['order','How is a child baptized in our Church? Tap the steps in order.'],
   cards:[
    {art:'priest',cap:'Priests and deacons pray',say:['o1','The priest and deacons pray around the font.']},
    {art:['figure',{robe:'#2F7A4E',beard:'dark'}],cap:'A godparent is chosen',say:['o2','A godfather or godmother is chosen.']},
    {art:'scroll',cap:'The child receives a baptismal name',say:['o3','The child receives a baptismal name.']},
    {art:'raindrop',cap:'The child is baptized in water',say:['o4','The child is baptized in water.']},
    {art:'dove',cap:'Anointed with the holy Myron',say:['o5','The priest anoints the child with holy Myron.']},
   ],
   done:['order-done','Born of water and the Spirit!']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Nicodemus came to Jesus during the day.',t:false,why:'He came at night, afraid of the other leaders.',pic:'moon'},
    {id:'t2',s:'Being born again means being baptized.',t:true,why:'Born of water and the Spirit.',pic:'dove'},
    {id:'t3',s:'Nicodemus was proud and did not want to learn.',t:false,why:'He was learned, but humbly came to learn more.',pic:'scroll'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'Nicodemus came to Jesus by ___.',a:'night',opts:['boat','camel']},
    {id:'f2',s:'A godfather or ___ promises to teach the child.',a:'godmother',opts:['soldier','king']},
    {id:'f3',s:'After baptism, the child is anointed with holy ___.',a:'Myron',opts:['water','honey']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'Unless one is born of water and the Spirit, he cannot enter the kingdom of God.', ref:'John 3:5',
   chunks:['Unless one is born','of water and the Spirit,','he cannot enter','the kingdom of God.'],
   intro:['verse-intro','Our memory verse is what Jesus told Nicodemus. Listen: Unless one is born of water and the Spirit, he cannot enter the kingdom of God. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Why did Nicodemus come at night?',a:[['He was afraid of the other leaders','moon'],['He could not sleep','bed'],['He was lost','sandals']],c:0},
    {id:'q2',q:'What does born again mean?',a:[['Being baptized','dove'],['Having a birthday','gift'],['Moving house','tukul']],c:0},
    {id:'q3',q:'What can we learn from Nicodemus?',a:[['Seek to know God humbly','scroll'],['Never ask questions','stone'],['Stay away from Jesus','door']],c:0},
   ]},
 ]
});
