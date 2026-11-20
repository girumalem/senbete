/* Level IV (Grade 7 and up), July week 3: The Martyrdom of St Peter (Matthew 16:13-18; Luke 22:54-62; John 21:15-18; Acts 2, 5:15; Synaxarium, Hamle 5) */
BKLesson({
 id:'L4-jul3', title:'Saint Peter', am:'ቅዱስ ጴጥሮስ', sticker:'peter',
 pages:[
  {game:'cover', bg:'lake', title:'Saint Peter', am:'ቅዱስ ጴጥሮስ',
   props:[{art:'peter',x:400,y:440,s:.65},{art:'boat',x:640,y:330,s:.5},{art:'net',x:170,y:430,s:.6}],
   say:['cover','[[selam]]! He was a fisherman. He became the chief of the apostles. He fell, and he rose again. Today we learn the whole life of Saint Peter, all the way to his martyrdom.'],
   parent:'<p>This lesson follows Level IV, July week 3: <b>The Martyrdom of St Peter</b> (Gospels, St Peter\'s Epistles, Synaxarium). Aim: learn about the life and martyrdom of St Peter.</p><p>The Fast of the Apostles ends with the feast of Saints Peter and Paul on Hamle 5 (July 12).</p>'},

  {game:'choose', bg:'field', chip:'Who do you say I am?',
   props:[{id:'jesus',art:'jesus',x:200,y:440,s:.6},{id:'pet',art:'peter',x:460,y:440,s:.55},{id:'d2',art:'disciple',x:560,y:440,s:.5},{id:'d3',art:'disciple',x:650,y:440,s:.5}],
   prompt:['w0','Christ asked: Who do people say that I am? Some say John the Baptist, they answered, some Elijah, or one of the prophets. Who do you say that I am? What did Peter answer?'],
   options:[
    {label:'You are a great prophet',art:'scroll',good:false,say:['w1','That is what other people said. Peter knew more. Try again.']},
    {label:'You are the Christ, the Son of the living God',art:'glory',then:{wiggle:['pet']},
     say:['w2','Christ said: Blessed are you, Simon. On this rock I will build My Church. That is why Peter is called the chief of the apostles.']},
   ]},

  {game:'story', bg:'night', chip:'Three times',
   props:[{id:'fire',art:'fire',x:400,y:440,s:.6},{id:'pet',art:'peter',x:280,y:440,s:.55},{id:'maid',art:['figure',{robe:'#8A5A30',sleeve:'#8A5A30',netela:'#F4EEDF'}],x:520,y:440,s:.5},{id:'bird',art:'bird',x:680,y:200,s:.5,hidden:true}],
   beats:[
    {say:['n1','On the night Christ was arrested, Peter followed to see what would happen. He warmed himself by a fire. Tap the fire.'],tap:'fire'},
    {wiggle:['maid'],say:['n2','A servant girl said: You were with Him! Peter said: I do not know Him. Two more times people said it, and two more times he denied Him.']},
    {show:['bird'],sfx:'whoosh',say:['n3','At once the rooster crowed. Peter remembered Christ\'s words, and went out and wept bitterly.']},
   ]},

  {game:'repeat', bg:'lake', chip:'Feed My sheep',
   props:[{id:'jesus',art:'jesus',x:200,y:440,s:.6},{id:'pet',art:'peter',x:570,y:440,s:.55},{id:'fire',art:'fire',x:110,y:440,s:.4},{id:'sh1',art:'sheep',x:660,y:440,s:.32,hidden:true},{id:'sh2',art:'sheep',x:720,y:440,s:.32,hidden:true},{id:'sh3',art:'sheep',x:770,y:440,s:.32,hidden:true}],
   button:{label:'Yes, Lord!',art:'heart'},
   intro:['f0','Peter repented. After the Resurrection, by the lake, Christ asked him three times: Simon, do you love Me? Tap to answer with Peter.'],
   steps:[
    {show:['sh1'],say:['f1','Yes, Lord, You know that I love You. Feed My lambs.']},
    {show:['sh2'],say:['f2','Yes, Lord, You know that I love You. Tend My sheep.']},
    {show:['sh3'],say:['f3','Lord, You know all things. You know that I love You. Feed My sheep.']},
   ],
   done:['f4','Three denials, and three times Peter said I love You. After he repented, Christ gave him a greater work: to care for His flock.']},

  {game:'order', chip:'Fisher of men',
   intro:['o0','Tap the steps of Peter\'s life in order.'],
   cards:[
    {art:'net',cap:'A fisherman called by Christ',say:['o1','Christ called the fisherman Simon and his brother Andrew.']},
    {art:'flame',cap:'Preaches at Pentecost, three thousand baptized',say:['o2','At Pentecost, filled with the Holy Spirit, he preached, and three thousand were baptized.']},
    {art:'shade',cap:'Even his shadow healed the sick',say:['o3','God did such miracles through him that the sick were healed by his shadow.']},
    {art:'scroll',cap:'Wrote two epistles',say:['o4','He wrote two epistles, letters that are in our Bible.']},
    {art:'cross',cap:'Martyred in Rome, upside down',say:['o5','In Rome, Emperor Nero had him crucified. Peter asked to be hung upside down, saying: I am not worthy to die like my Lord.']},
   ],
   done:['o6','He received the crown of martyrdom on [[hamle]] five.']},

  {game:'verse', chip:'Memory verse',
   verse:'When you are old, you will stretch out your hands, and another will gird you and carry you where you do not wish.', ref:'John 21:18',
   chunks:['When you are old,','you will stretch out your hands,','and another will gird you','and carry you where you do not wish.'],
   intro:['verse-intro','Christ told Peter how he would one day die: When you are old, you will stretch out your hands, and another will gird you and carry you where you do not wish. Build it in order.'],
   done:['verse-done','Peter, who once ran away, at the end gave his life gladly for Christ.']},

  {game:'quiz', questions:[
    {id:'q1',q:'What was Peter\'s work before Christ called him?',a:[['A fisherman','fish'],['A tax collector','gift'],['A shepherd','shepherd']],c:0},
    {id:'q2',q:'What did Peter do after he denied Christ?',a:[['He wept bitterly and repented','heart'],['He laughed','sun'],['He went back to fishing forever','boat']],c:0},
    {id:'q3',q:'Where was Peter martyred?',a:[['In Rome','city'],['In Jerusalem','temple'],['In Egypt','pyramid']],c:0},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Peter caught men for Christ. God asks small sacrifices from us too, like coming to church and sitting quietly in class. What sacrifice can you offer?'],
    ['k2','Peter fell, but he repented, and God gave him a greater work. What does that teach you about your own mistakes?'],
    ['k3','Peter\'s epistles were written for us. Will you read one chapter of First Peter this week?'],
   ]},
 ]
});
