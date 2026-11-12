/* Level III (Grades 4-6), July week 3: St. Paul's Miracle in Lystra (Acts 14:8-18; Acts 14:15) */
BKLesson({
 id:'L3-jul3', title:'We Are Only Men', am:'በልስጥራን', sticker:'lameMan',
 pages:[
  {game:'cover', bg:'day', title:'We Are Only Men', am:'በልስጥራን',
   props:[{art:['lameMan',{up:true}],x:640,y:440,s:.6},{art:['figure',{robe:'#24418F',sleeve:'#24418F',beard:'dark',halo:true}],x:150,y:440,s:.55},{art:['figure',{robe:'#2F7A4E',sleeve:'#2F7A4E',beard:'brown',halo:true}],x:240,y:440,s:.55}],
   say:['cover','[[selam]]! Saint Paul healed a man who had never walked, and then the people wanted to worship him! What would he do? Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, July week 3: <b>St. Paul\'s Miracle in Lystra</b> (Acts 14:8-18). Aim: learn to give glory to God, not to ourselves.</p><p>Talk about it: When you do something good, how can you let it point others to God?</p>'},

  {game:'story', bg:'day', chip:'Stand up straight!',
   props:[{id:'paul',art:['figure',{robe:'#24418F',sleeve:'#24418F',beard:'dark',halo:true}],x:220,y:440,s:.6},{id:'bar',art:['figure',{robe:'#2F7A4E',sleeve:'#2F7A4E',beard:'brown',halo:true}],x:110,y:440,s:.55},{id:'lame',art:'lameMan',x:520,y:440,s:.6},{id:'up',art:['lameMan',{up:true}],x:520,y:440,s:.6,hidden:true},{id:'crowd',art:'crowd',x:720,y:445,s:.7}],
   beats:[
    {wiggle:['lame'],say:['s1','In the city of Lystra sat a man who had been lame from birth. He had never walked.']},
    {wiggle:['paul'],say:['s2','He listened to Paul preach. Paul looked at him and saw that he had faith to be healed.']},
    {wiggle:['paul'],say:['s3','Paul said with a loud voice: Stand up straight on your feet! Tap the man.'],tap:'lame'},
    {hide:['lame'],show:['up'],sfx:'glory',fx:'confetti',say:['s4','He jumped up and walked!']},
   ]},

  {game:'read', chip:'Read', heading:'The gods have come down!', pic:'cow',
   paras:[
    ['r1','The crowd shouted: The gods have come down to us as men! They called Barnabas Zeus, and Paul Hermes, after the false gods they worshipped.'],
    ['r2','The priest of Zeus brought oxen and flower garlands to the gates, to offer sacrifices to Paul and Barnabas.'],
    ['r3','When the apostles heard this, they tore their clothes and ran into the crowd: Why are you doing this? We are only men, just like you!'],
    ['r4','We bring you good news: turn from these empty things to the living God, who made heaven and earth and the sea and everything in them.'],
    ['r5','Even so, they could hardly stop the people from sacrificing to them.'],
   ]},

  {game:'match', chip:'Give glory to God', heading:'Match each choice to the right way',
   intro:['match-intro','Paul gave glory to God, not to himself. Tap a situation, then tap the right response.'],
   pairs:[['You get a good grade','Thank God and those who helped you',null,'scroll'],['You help someone','Do it quietly, for God',null,'heart'],['Someone praises you','Say: Glory be to God',null,'glory']],
   done:['match-done','Well done!']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Paul saw that the lame man had faith.',t:true,why:'Faith is important for God\'s miracles.',pic:'lameMan'},
    {id:'t2',s:'Paul and Barnabas accepted the sacrifices.',t:false,why:'They said: We are only men, like you!',pic:'cow'},
    {id:'t3',s:'Paul told them to turn to the living God.',t:true,why:'Who made heaven, earth, and the sea.',pic:'sun'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'The miracle happened in the city of ___.',a:'Lystra',opts:['Damascus','Rome']},
    {id:'f2',s:'Paul\'s companion was ___.',a:'Barnabas',opts:['Ananias','Silas']},
    {id:'f3',s:'The man had been ___ from birth.',a:'lame',opts:['rich','king']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'You should turn from these useless things to the living God, who made the heaven, the earth, the sea, and all things that are in them.', ref:'Acts 14:15',
   chunks:['You should turn','from these useless things','to the living God,','who made the heaven, the earth, the sea,','and all things that are in them.'],
   intro:['verse-intro','Our memory verse is from the Acts of the Apostles. Listen: You should turn from these useless things to the living God, who made the heaven, the earth, the sea, and all things that are in them. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'What did Paul tell the lame man?',a:[['Stand up straight on your feet!','lameMan'],['Go home','tukul'],['Sit still','stone']],c:0},
    {id:'q2',q:'What did the people think?',a:[['That Paul and Barnabas were gods','crowd'],['That they were soldiers','soldier'],['That they were kings','king']],c:0},
    {id:'q3',q:'Who should get the glory for miracles?',a:[['God','glory'],['Paul','scroll'],['The crowd','crowd']],c:0},
   ]},
 ]
});
