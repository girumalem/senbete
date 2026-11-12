/* Level II (Grades 1-3), July week 3: St. Paul Taken Prisoner, the storm at sea (Acts 27) */
BKLesson({
 id:'L2-jul3', title:'Paul in the Storm', am:'ጳውሎስ በማዕበል', sticker:'boat',
 pages:[
  {game:'cover', bg:'storm', title:'Paul in the Storm', am:'ጳውሎስ በማዕበል',
   props:[{art:'boat',x:640,y:330,s:1.1},{art:['figure',{robe:'#24418F',sleeve:'#24418F',beard:'dark',halo:true,arms:'pray'}],x:620,y:315,s:.4},{art:'soldier',x:680,y:315,s:.38}],
   say:['cover','[[selam]]! Remember how [[petros]] was put in prison? Today we meet another apostle, Saint Paul, on a ship in a great storm. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, July week 3: <b>St. Paul Taken Prisoner</b> (Acts 27). Aim: learn about the importance of praying before a meal.</p><p>Review: How many of the ten healed men came back to thank Jesus?</p>'},

  {game:'read', chip:'Read along', heading:'A prisoner on a ship', pic:'boat',
   paras:[
    ['r1','Saint Paul was put in prison for teaching about Jesus.'],
    ['r2','Soldiers took him on a ship to the city of Rome.'],
    ['r3','On the way, a great wind came. It was dark in the day, and there were no stars at night.'],
    ['r4','For many days the storm did not stop. Everyone on the ship was very afraid.'],
   ]},

  {game:'story', bg:'storm', chip:'Do not be afraid',
   props:[{id:'boat',art:'boat',x:400,y:330,s:1.3},{id:'paul',art:['figure',{robe:'#24418F',sleeve:'#24418F',beard:'dark',halo:true,arms:'pray'}],x:360,y:313,s:.42},{id:'sol',art:'soldier',x:450,y:313,s:.4},{id:'glow',art:'glory',x:150,y:200,s:.8,hidden:true},{id:'angel',art:'angel',x:150,y:300,s:.4,hidden:true}],
   beats:[
    {wiggle:['boat'],sfx:'whoosh',say:['s1','The waves crashed! The sailors thought they were all going to die.']},
    {show:['glow','angel'],sfx:'glory',say:['s2','But an angel of God spoke to Paul in the night. Tap the angel.'],tap:'angel'},
    {wiggle:['paul'],say:['s3','Paul told everyone: Be brave! God\'s angel told me that no one will be lost. Tap Paul.'],tap:'paul'},
   ],
   parent:'<p>"For there stood by me this night the angel of God... saying, Fear not, Paul." (Acts 27:23-24)</p>'},

  {game:'story', bg:'sunrise', chip:'Thank You for this bread',
   props:[{id:'paul',art:['figure',{robe:'#24418F',sleeve:'#24418F',beard:'dark',halo:true,arms:'pray'}],x:400,y:440,s:.6},{id:'s1',art:'soldier',x:200,y:440,s:.5},{id:'s2',art:'soldier',x:600,y:440,s:.5},{id:'bread',art:'basket',x:400,y:320,s:.5,hidden:true}],
   beats:[
    {say:['b1','On the fourteenth day, at sunrise, Paul said: You have not eaten for a long time. Please eat some food.']},
    {show:['bread'],say:['b2','He took bread. Tap the bread.'],tap:'bread'},
    {sfx:'glory',say:['b3','In front of everyone, Paul gave thanks to God. Then he broke the bread and began to eat.']},
    {wiggle:['s1','s2'],fx:'confetti',say:['b4','Everyone felt brave again, and they all ate. And God kept every person on the ship safe!']},
   ]},

  {game:'order', chip:'What happened first?',
   intro:['order','Tap the pictures in the order they happened.'],
   cards:[
    {art:'chains',cap:'Paul was a prisoner',say:['o1','Paul was a prisoner.']},
    {art:'boat',cap:'A great storm came',say:['o2','A great storm came.']},
    {art:'angel',cap:'An angel spoke to Paul',say:['o3','An angel spoke to Paul.']},
    {art:'basket',cap:'Paul thanked God for the bread',say:['o4','Paul thanked God for the bread.']},
   ],
   done:['order-done','Paul was not ashamed to pray in front of everyone.']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','Read each sentence. Is it true, or false?'],
   items:[
    {id:'f1',s:'Paul prayed before eating, even in front of soldiers.',t:true,why:'True! He was not shy to thank God.',pic:'basket'},
    {id:'f2',s:'Paul told everyone they would all be lost.',t:false,why:'False. He said: No one will be lost!',pic:'boat'},
    {id:'f3',s:'We should pray before every meal.',t:true,why:'True! We thank God for our daily bread.',pic:'injera'},
   ],
   done:['tf-done','Great thinking!']},

  {game:'quiz', questions:[
    {id:'q1',q:'Where was the ship going?',a:[['To Rome','city'],['To the moon','moon']],c:0},
    {id:'q2',q:'Who spoke to Paul in the night?',a:[['An angel','angel'],['A fish','fish']],c:0},
    {id:'q3',q:'What did Paul do before eating?',a:[['Gave thanks to God','glory'],['Went to sleep','bed']],c:0},
   ]},
  {game:'song', song:'egziabher-yemesgen-yichin-ke'},
 ]
});
