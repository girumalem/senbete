/* Level III (Grades 4-6), Easter season week 2: The Travelers to Emmaus (Luke 24:13-35; Luke 24:5-6) */
BKLesson({
 id:'L3-eas2', title:'The Road to Emmaus', am:'ኤማሁስ', sticker:'basket',
 pages:[
  {game:'cover', bg:'sunrise', title:'The Road to Emmaus', am:'ኤማሁስ',
   props:[{art:'jesusWalk',x:640,y:430,s:.55},{art:'disciple',x:150,y:440,s:.55},{art:['disciple',{robe:'#8A5A30',beard:'dark'}],x:240,y:440,s:.55}],
   say:['cover','[[selam]]! Two sad travelers walked with a stranger, and their hearts began to burn. Who was He? Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, Easter week 2: <b>The Travelers of Emmaus</b> (Luke 24:13-35). Aim: learn how the risen Christ opened the Scriptures, and was known in the breaking of bread.</p><p>Talk about it: Where do we meet Jesus today? (In the Scriptures, and in Holy Communion.)</p>'},

  {game:'read', chip:'Read', heading:'A stranger on the road', pic:'jesusWalk',
   paras:[
    ['r1','On the day of the resurrection, two followers of Jesus were walking from Jerusalem to a village called Emmaus.'],
    ['r2','They were talking sadly about everything that had happened. Jesus Himself came and walked with them, but they did not recognize Him.'],
    ['r3','He asked: What are you talking about? One of them, named Cleopas, said: Are You the only stranger in Jerusalem who does not know what happened there?'],
    ['r4','They told Him about Jesus of Nazareth, a mighty prophet, whom the leaders had crucified. We hoped He would redeem Israel. And today some women said angels told them He is alive!'],
   ]},

  {game:'read', chip:'Read', heading:'Slow of heart', pic:'scroll',
   paras:[
    ['r5','Jesus said: O foolish ones, slow of heart to believe all that the prophets have spoken! Ought not the Christ to suffer these things and enter into His glory?'],
    ['r6','Then, beginning with Moses and all the Prophets, He explained to them everything the Scriptures said about Himself.'],
   ]},

  {game:'story', bg:'night', chip:'The breaking of bread',
   props:[{id:'tab',art:['table',{coins:false}],x:400,y:440,s:1.2},{id:'jesus',art:'jesus',x:400,y:400,s:.5},{id:'bread',art:'basket',x:400,y:345,s:.4},{id:'d1',art:'disciple',x:200,y:440,s:.55},{id:'d2',art:['disciple',{robe:'#8A5A30',beard:'dark'}],x:600,y:440,s:.55},{id:'glow',art:'glory',x:400,y:300,s:.9,hidden:true}],
   beats:[
    {wiggle:['d1','d2'],say:['b1','When they reached the village, it was getting dark. They begged Him: Stay with us.']},
    {wiggle:['jesus'],say:['b2','At the table, He took the bread, blessed it, broke it, and gave it to them. Tap the bread.'],tap:'bread'},
    {show:['glow'],sfx:'glory',say:['b3','At once their eyes were opened, and they knew Him!']},
    {hide:['jesus','glow'],sfx:'whoosh',say:['b4','And He vanished from their sight.']},
    {wiggle:['d1','d2'],say:['b5','They said: Did not our hearts burn within us while He talked with us and opened the Scriptures? They rushed back to Jerusalem to tell the disciples!']},
   ]},

  {game:'order', chip:'Put it in order',
   intro:['order','Tap the pictures in the order they happened.'],
   cards:[
    {art:'jesusWalk',cap:'A stranger walked with them',say:['o1','A stranger walked with them.']},
    {art:'scroll',cap:'He explained the Scriptures',say:['o2','He explained the Scriptures.']},
    {art:'basket',cap:'He broke the bread',say:['o3','He broke the bread.']},
    {art:'city',cap:'They ran back to Jerusalem',say:['o4','They ran back to Jerusalem.']},
   ],
   done:['order-done','Their hearts were burning!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'The two travelers were going to ___.',a:'Emmaus',opts:['Egypt','Jericho']},
    {id:'f2',s:'One of the travelers was named ___.',a:'Cleopas',opts:['Simeon','Haman']},
    {id:'f3',s:'They knew Him when He broke the ___.',a:'bread',opts:['stone','cup']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'Why do you seek the living among the dead? He is not here, but is risen!', ref:'Luke 24:5-6',
   chunks:['Why do you seek','the living among the dead?','He is not here,','but is risen!'],
   intro:['verse-intro','Let\'s practice this month\'s memory verse from Luke. Build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Why didn\'t they recognize Jesus at first?',a:[['Their eyes were kept from knowing Him','jesusWalk'],['It was raining','rain'],['He was far away','city']],c:0},
    {id:'q2',q:'What did Jesus explain on the road?',a:[['What the Scriptures said about Him','scroll'],['How to fish','fish'],['How to build','bricks']],c:0},
    {id:'q3',q:'What did they do after He vanished?',a:[['Ran back to tell the disciples','city'],['Went to sleep','bed'],['Kept it secret','door']],c:0},
   ]},
 ]
});
