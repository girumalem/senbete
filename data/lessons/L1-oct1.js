/* Level I, October week 1: The Holy Cross (how to make the sign of the cross) */
BKLesson({
 id:'L1-oct1', title:'The Holy Cross', am:'መስቀል', sticker:'cross',
 pages:[
  {game:'cover', bg:'church', title:'The Holy Cross', am:'መስቀል',
   props:[{art:'procCross',x:400,y:400,s:.95,anim:'bob'},{art:'candle',x:250,y:330,s:1.1},{art:'candle',x:550,y:330,s:1.1},{art:'flowers',x:130,y:420,s:1.1},{art:'flowers',x:670,y:420,s:1.1}],
   say:['cover','[[selam]]! Do you pray to God? How do you start your prayer? Today we learn the sign of the cross. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, October week 1: <b>The Holy Cross</b>. Objective: learn how to make the sign of the cross. It comes right after the feast of Meskel (the finding of the True Cross).</p>'},

  {game:'story', bg:'church', chip:'The cross is love',
   props:[{id:'priest',art:'priest',x:250,y:420,s:.78,anim:'bob'},{id:'cross',art:'handCross',x:560,y:220,s:1,anim:'bob'},{id:'boy',art:'boy',x:470,y:425,s:.75},{id:'girl',art:'girl',x:660,y:425,s:.75},{id:'heart',art:'heart',x:560,y:150,s:1.1,hidden:true}],
   beats:[
    {say:['c1','This is the cross. The priest blesses us with the cross. Tap the cross!'],tap:'cross'},
    {show:['heart'],fx:'flash',sfx:'glory',say:['c2','The cross is a sign of love: the love of our Lord and Savior, Jesus Christ. Jesus Christ saved us by His cross.']},
    {wiggle:['boy','girl'],say:['c3','That is why we always start our prayers with the sign of the cross.']},
   ],
   parent:'<p>We always start our prayers by making the sign of the cross, because the cross is a sign of love, the love of our Lord and Savior, Jesus Christ. Jesus Christ saved us by His cross.</p>'},

  {game:'tapmany', bg:'field', chip:'Meskel flowers',
   props:[{art:'procCross',x:400,y:330,s:.7},{art:'girl',x:110,y:430,s:.7},{art:'boy',x:700,y:430,s:.7}],
   area:{x0:0,y0:300,x1:800,y1:450}, count:6, spawn:{art:'adeyAbeba',s:[.45,.7],anim:'sway'}, sfx:'note',
   progress:'*{n} more* flowers!',
   intro:['flowers','At the feast of [[meskel]], yellow flowers called [[adey-abeba]] bloom all over Ethiopia. Tap the grass to grow six flowers!'],
   done:['flowers-done','So beautiful! The yellow flowers make us happy, just like the cross.'],
   parent:'<p>Adey abeba (the Meskel daisy) blooms across the Ethiopian highlands in September, around Enkutatash and Meskel.</p>'},

  {game:'cross', intro:['cross-intro','Now let\'s learn the sign of the cross. Cross your middle finger over your pointer finger, like a little cross. Then touch the glowing dots one by one, and say the prayer with your teacher.'],
   parent:'<p>The way we make the sign of the cross: cross the middle finger of the right hand across the index finger. Touch the forehead and say <i>Beseme Ab</i>, the chest and say <i>weWold</i>, the left shoulder and say <i>weMenfes Kidus</i>, the right shoulder and say <i>Ahadu Amlak</i>, and finish with <i>Amen</i>.</p><p>Selam faces the child, so her left shoulder is on the screen\'s right. The Ge\'ez words stay silent until a recording is added; please say them together with your child.</p>'},

  {game:'quiz', questions:[
    {id:'q1',q:'How do we start our prayers? With the sign of the cross, with a drum, or with a candle?',show:'How do we start our prayers?',a:[['The sign of the cross','cross'],['A drum','kebero'],['A candle','candle']],c:0},
    {id:'q2',q:'The cross is a sign of what?',a:[['Rain','cloud'],['Love','heart'],['Food','injera']],c:1},
    {id:'q3',q:'Which flower blooms at the feast of Meskel?',a:[['A coffee bush','coffee'],['A tree','acacia'],['Adey abeba','adeyAbeba']],c:2},
   ]},
  {game:'song', song:'bemeskelu-yamenachihu'},
 ]
});
