/* Level III (Grades 4-6), July week 4: The Stoning of St. Paul (Acts 14:19-23; Psalm 23:4) */
BKLesson({
 id:'L3-jul4', title:'Paul Rises Up Again', am:'ጳውሎስ በድንጋይ ተወገረ', sticker:'stone',
 pages:[
  {game:'cover', bg:'day', title:'Paul Rises Up Again', am:'ጳውሎስ በድንጋይ ተወገረ',
   props:[{art:['figure',{robe:'#24418F',sleeve:'#24418F',beard:'dark',halo:true}],x:640,y:440,s:.6},{art:'stone',x:170,y:440,s:.5},{art:'church',x:720,y:440,s:.4}],
   say:['cover','[[selam]]! The same crowd that praised Paul turned against him. But nothing could stop him from preaching. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, July week 4: <b>The Stoning of St. Paul</b> (Acts 14:19-23). Aim: learn courage, and not to judge by rumors.</p><p>Talk about it: Why did the people change their minds so quickly?</p>'},

  {game:'read', chip:'Read', heading:'A crowd turned against him', pic:'crowd',
   paras:[
    ['r1','After the miracle in Lystra, Paul and Barnabas taught the people about Jesus and how He gave Himself on the cross for them.'],
    ['r2','But some men came from other cities and turned the crowd against Paul with false words.'],
    ['r3','Only days before, the people had wanted to offer sacrifices to him. Now they threw stones at him and dragged him out of the city, thinking he was dead.'],
   ]},

  {game:'story', bg:'day', chip:'He rose up',
   props:[{id:'paul',art:['sleeper',{robe:'#24418F'}],x:400,y:440,s:.8},{id:'up',art:['figure',{robe:'#24418F',sleeve:'#24418F',beard:'dark',halo:true}],x:400,y:440,s:.6,hidden:true},{id:'bar',art:['figure',{robe:'#2F7A4E',sleeve:'#2F7A4E',beard:'brown',halo:true}],x:200,y:440,s:.55},{id:'d1',art:'disciple',x:600,y:440,s:.55},{id:'city',art:'city',x:720,y:430,s:.5}],
   beats:[
    {wiggle:['bar','d1'],say:['s1','Barnabas and the other disciples gathered around Paul. Tap Paul.'],tap:'paul'},
    {hide:['paul'],show:['up'],sfx:'glory',say:['s2','He rose up, as if nothing had happened! Everyone was amazed.']},
    {move:{up:[640,440,.6]},sfx:'whoosh',say:['s3','And Paul walked right back into the city where they had stoned him!']},
    {wiggle:['up'],say:['s4','Later he returned to strengthen the believers: We must go through many hardships to enter the kingdom of God.']},
   ],
   parent:'<p>Paul and Barnabas appointed elders (priests) in every church, praying and fasting (Acts 14:23).</p>'},

  {game:'read', chip:'Read', heading:'I will fear no evil', pic:'shield',
   paras:[
    ['r4','Paul knew that preaching the Gospel was dangerous. But like King David he was not afraid: Though I walk through the valley of the shadow of death, I will fear no evil.'],
    ['r5','The people of Lystra turned against Paul just because of what they heard. It is not good to act on rumors without knowing the truth.'],
    ['r6','When we stay truthful and faithful, God protects us, as He protected Paul.'],
   ]},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'The people of Lystra listened to false words about Paul.',t:true,why:'And they stoned him.',pic:'crowd'},
    {id:'t2',s:'After he rose, Paul ran far away and never came back.',t:false,why:'He went right back into the city!',pic:'city'},
    {id:'t3',s:'We should check the truth before believing rumors.',t:true,why:'Rumors turned the crowd against Paul.',pic:'heart'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'The crowd threw ___ at Paul.',a:'stones',opts:['flowers','bread']},
    {id:'f2',s:'Paul\'s friend ___ stood around him with the disciples.',a:'Barnabas',opts:['Pilate','Haman']},
    {id:'f3',s:'We must go through many ___ to enter the kingdom of God.',a:'hardships',opts:['parties','gates']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'Though I walk through the valley of the shadow of death, I will fear no evil; for You are with me.', ref:'Psalm 23:4',
   chunks:['Though I walk','through the valley','of the shadow of death,','I will fear no evil;','for You are with me.'],
   intro:['verse-intro','Our memory verse is from Psalm twenty-three. Listen: Though I walk through the valley of the shadow of death, I will fear no evil; for You are with me. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Why did the crowd turn against Paul?',a:[['They listened to false words','crowd'],['He was rude','door'],['He stole','table']],c:0},
    {id:'q2',q:'What did Paul do after he rose up?',a:[['Went back into the city','city'],['Went home to rest','bed'],['Stopped preaching','stone']],c:0},
    {id:'q3',q:'Why was Paul not afraid?',a:[['God was with him','glory'],['He had a sword','spear'],['He was very strong','lion']],c:0},
   ]},
 ]
});
