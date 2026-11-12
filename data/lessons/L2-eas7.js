/* Level II (Grades 1-3), Easter season week 7: Matthias Chosen a Disciple (Acts 1:12-26) */
BKLesson({
 id:'L2-eas7', title:'Matthias Is Chosen', am:'ማትያስ ተመረጠ', sticker:'lots',
 pages:[
  {game:'cover', bg:'church', title:'Matthias Is Chosen', am:'ማትያስ ተመረጠ',
   props:[{art:'peter',x:160,y:440,s:.55},{art:['disciple',{robe:'#2F7A4E',beard:'brown'}],x:640,y:440,s:.55},{art:'lots',x:740,y:440,s:.6}],
   say:['cover','[[selam]]! Jesus had twelve apostles, but now one place was empty. How did they choose a new apostle? Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, Easter week 7: <b>Matthias Chosen a Disciple</b> (Acts 1:12-26). Aim: learn how the apostles prayed and let God choose.</p><p>Review: Where did Jesus go up into heaven from?</p>'},

  {game:'read', chip:'Read along', heading:'Praying together', pic:'church',
   paras:[
    ['r1','After Jesus went up to heaven, the disciples went back to Jerusalem.'],
    ['r2','They stayed together and prayed. [[mariam]], the mother of Jesus, was with them.'],
    ['r3','There were about one hundred and twenty believers in all.'],
    ['r4','Judas, who betrayed Jesus, was gone. So there were only eleven apostles.'],
   ]},

  {game:'tapmany', bg:'church', chip:'Count the apostles',
   props:[],
   area:{x0:40,y0:300,x1:760,y1:440}, count:11, spawn:{art:'disciple',s:[.3,.35],anim:'bob'}, sfx:'pop',
   progress:'*{n} more* apostles!',
   intro:['count','Tap to count the eleven apostles who were left.'],
   done:['count-done','Eleven! They needed one more to make twelve again.']},

  {game:'story', bg:'church', chip:'Lord, You choose',
   props:[{id:'peter',art:'peter',x:160,y:440,s:.55},{id:'jo',art:['disciple',{robe:'#8A5A30',beard:'dark'}],x:420,y:440,s:.55},{id:'ma',art:['disciple',{robe:'#2F7A4E',beard:'brown'}],x:600,y:440,s:.55},{id:'lots',art:'lots',x:510,y:300,s:.7,hidden:true},{id:'glow',art:'glory',x:600,y:300,s:.9,hidden:true}],
   beats:[
    {wiggle:['peter'],say:['l1','[[petros]] stood up and said: We must choose someone to be a witness of the resurrection with us. Tap [[petros]].'],tap:'peter'},
    {wiggle:['jo','ma'],say:['l2','They chose two good men: Joseph Justus and Matthias.']},
    {say:['l3','They prayed: Lord, You know everyone\'s heart. Show us which one You have chosen.']},
    {show:['lots'],sfx:'drum',say:['l4','Then they cast lots, like drawing a special stone. Tap the stones.'],tap:'lots'},
    {show:['glow'],sfx:'glory',fx:'confetti',say:['l5','The lot fell on Matthias! Now there were twelve apostles again.']},
   ],
   parent:'<p>Ten days after the Ascension, at Pentecost, the apostles received the Holy Spirit and began to teach the world.</p>'},

  {game:'blanks', chip:'Fill in the word',
   intro:['blanks-intro','Read the sentence, and tap the missing word.'],
   items:[
    {id:'b1',s:'The disciples stayed together and ___.',a:'prayed',opts:['played','prayed','slept'],pic:'church'},
    {id:'b2',s:'They needed one new ___.',a:'apostle',opts:['apostle','king','soldier'],pic:'disciple'},
    {id:'b3',s:'The lot fell on ___.',a:'Matthias',opts:['Joseph','Matthias','Herod'],pic:['disciple',{robe:'#2F7A4E',beard:'brown'}]},
   ],
   done:['blanks-done','Well done!']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','Read each sentence. Is it true, or false?'],
   items:[
    {id:'t1',s:'[[mariam]] prayed with the disciples.',t:true,why:'True! She was with them in Jerusalem.',pic:'mary'},
    {id:'t2',s:'The disciples chose without praying.',t:false,why:'False. They prayed first and asked God to choose.',pic:'lots'},
    {id:'t3',s:'Ten days later they received the Holy Spirit.',t:true,why:'True! That day is Pentecost.',pic:'dove'},
   ],
   done:['tf-done','Great thinking!']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who stood up to speak?',a:[['[[petros]]','peter'],['Herod','king']],c:0},
    {id:'q2',q:'What did they do before choosing?',a:[['They prayed','glory'],['They ate','basket']],c:0},
    {id:'q3',q:'Who was chosen?',a:[['Matthias',['disciple',{robe:'#2F7A4E',beard:'brown'}]],['Moses','moses']],c:0},
   ]},
  {game:'song', song:'menfes-kidus-werede-la-ile-h'},
 ]
});
