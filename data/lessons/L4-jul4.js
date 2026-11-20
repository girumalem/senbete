/* Level IV (Grade 7 and up), July week 4: The Martyrdom of St Paul (Acts 7-9; Acts 14:22; Philippians 4:13; 2 Timothy 4:6-8; Synaxarium) */
BKLesson({
 id:'L4-jul4', title:'Saint Paul', am:'ቅዱስ ጳውሎስ', sticker:'sword',
 pages:[
  {game:'cover', bg:'desert', title:'Saint Paul', am:'ቅዱስ ጳውሎስ',
   props:[{art:['figure',{robe:'#24418F',sleeve:'#B3322A',beard:'dark',halo:true,staff:true}],x:400,y:440,s:.65},{art:'scroll',x:200,y:430,s:.6},{art:'sword',x:600,y:420,s:.6}],
   say:['cover','[[selam]]! He hated Christians. He watched Stephen being stoned. Then one day, on a road, he met Christ, and became one of the greatest apostles of all. This is Saint Paul.'],
   parent:'<p>This lesson follows Level IV, July week 4: <b>The Martyrdom of St Paul</b> (Book of Acts and Synaxarium). Aim: learn about spiritual battle from the life and martyrdom of St Paul.</p><p>St Paul wrote 14 epistles in the New Testament, the first being to the Romans.</p>'},

  {game:'story', bg:'desert', chip:'The road to Damascus',
   props:[{id:'saul',art:['figure',{robe:'#5B4D3C',sleeve:'#8A5A30',beard:'dark'}],x:200,y:440,s:.6},{id:'horse',art:'horse',x:90,y:440,s:.6},{id:'city',art:'city',x:680,y:440,s:.5},{id:'glow',art:'glory',x:330,y:150,s:1.1,hidden:true},{id:'down',art:'sleeper',x:330,y:440,s:.7,hidden:true}],
   beats:[
    {say:['r1','Saul was a scholar of the Jewish Law. He was so zealous that he hunted Christians. He set out for Damascus with letters to bring them back as prisoners. Tap Saul.'],tap:'saul'},
    {move:{saul:[330,440]},show:['glow'],fx:'flash',sfx:'glory',say:['r2','Near Damascus, a great light from heaven shone around him.']},
    {hide:['saul'],show:['down'],say:['r3','He fell to the ground and heard a voice: Saul, Saul, why do you persecute Me? Who are You, Lord? I am Jesus, whom you persecute.']},
    {say:['r4','When he got up, he could not see. His companions led him by the hand into Damascus.']},
   ]},

  {game:'choose', bg:'egypt', chip:'Ananias',
   props:[{id:'saul',art:['figure',{robe:'#5B4D3C',sleeve:'#8A5A30',beard:'dark',closedEyes:true,arms:'pray'}],x:520,y:440,s:.6},{id:'see',art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',beard:'dark',arms:'up'}],x:520,y:440,s:.6,hidden:true},{id:'an',art:['figure',{robe:'#2F7A4E',sleeve:'#2F7A4E',beard:'grey'}],x:200,y:440,s:.6},{id:'water',art:'raindrop',x:520,y:240,s:.7,hidden:true}],
   prompt:['a0','For three days Saul fasted and prayed, blind. Then God sent a disciple named Ananias to him. What did Ananias do?'],
   options:[
    {label:'Ran away, because Saul was dangerous',art:'darkCloud',good:false,say:['a1','Ananias was afraid at first, but he obeyed God. Try again.']},
    {label:'Healed his eyes and baptized him',art:'raindrop',then:{hide:['saul'],show:['see','water'],fx:'flash'},
     say:['a2','Something like scales fell from his eyes, and he could see. He was baptized, and from that day he preached Christ to Jews and to all nations.']},
   ]},

  {game:'repeat', bg:'sea', chip:'He kept going',
   props:[{id:'paul',art:['figure',{robe:'#24418F',sleeve:'#B3322A',beard:'dark',halo:true,staff:true}],x:160,y:440,s:.55},{id:'boat',art:'boat',x:560,y:330,s:.7,anim:'sway'},{id:'bars',art:'bars',x:560,y:440,s:.5,hidden:true},{id:'st',art:'stone',x:640,y:430,s:.5,hidden:true}],
   button:{label:'Through Christ!',art:'cross'},
   intro:['p0','Paul traveled the world preaching the gospel. He suffered many things. Each time, tap and say what he said.'],
   steps:[
    {show:['bars'],say:['p1','He was put in prison. I can do all things through Christ who strengthens me!']},
    {show:['st'],say:['p2','He was stoned and left for dead. I can do all things through Christ who strengthens me!']},
    {wiggle:['boat'],say:['p3','He was beaten and shipwrecked. I can do all things through Christ who strengthens me!']},
   ],
   done:['p4','In Jerusalem, the believers were afraid of him at first. But Barnabas told them how Christ had called him, and they welcomed him.']},

  {game:'story', bg:'heaven', chip:'The crown',
   props:[{id:'paul',art:['figure',{robe:'#24418F',sleeve:'#B3322A',beard:'dark',halo:true}],x:300,y:440,s:.55},{id:'woman',art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',netela:'#FFFFFF'}],x:520,y:440,s:.5},{id:'veil',art:'linen',x:420,y:380,s:.5},{id:'saints',art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',beard:'dark',crown:true,halo:true}],x:660,y:440,s:.5,hidden:true}],
   beats:[
    {say:['c1','At last, Paul was taken to Rome, and Emperor Nero condemned him to be beheaded. He was not afraid. He wrote: I have fought the good fight, I have finished the race, I have kept the faith.']},
    {say:['c2','On the way, a woman gave him her veil to wipe his face. He put it over his face when he died. Tap the veil.'],tap:'veil'},
    {show:['saints'],fx:'flash',sfx:'glory',move:{veil:[540,380]},say:['c3','Later she told the soldier: I just saw Paul and Peter passing by, with crowns on their heads, and Paul gave me back my veil! And she showed it to him.']},
    {say:['c4','Paul wrote: There is laid up for me a crown of righteousness, and not for me only, but for all who love His appearing.']},
   ]},

  {game:'verse', chip:'Memory verse',
   verse:'We must through much tribulation enter the kingdom of God.', ref:'Acts 14:22',
   intro:['verse-intro','Our memory verse: We must through much tribulation enter the kingdom of God. Build it in order.'],
   done:['verse-done','Christ is ready to receive anyone who turns to Him, just as He received Paul.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Where was Saul going when Christ spoke to him?',a:[['Damascus, to arrest Christians','city'],['Egypt, to buy food','pyramid'],['The sea, to fish','boat']],c:0},
    {id:'q2',q:'Who spoke up for Paul when the believers doubted him?',a:[['Barnabas','disciple'],['Pilate','king'],['Nero','soldier']],c:0},
    {id:'q3',q:'How many epistles did Saint Paul write?',a:[['Fourteen','scroll'],['Two','scroll'],['Seven','scroll']],c:0},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Christ turned His greatest enemy into His greatest apostle. Is there anyone you think could never change?'],
    ['k2','When something is hard for you, how can you say with Paul: I can do all things through Christ who strengthens me?'],
    ['k3','Paul called the Christian life a good fight. What is your fight right now?'],
   ]},
 ]
});
