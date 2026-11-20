/* Level IV (Grade 7 and up), January week 1: The Everlasting Gift on Christmas (Micah 5:2; Isaiah 7:14; Matthew 1-2; Luke 2) */
BKLesson({
 id:'L4-jan1', title:'The Everlasting Gift', am:'ገና', sticker:'manger',
 pages:[
  {game:'cover', bg:'night', title:'The Everlasting Gift', am:'ልደት',
   props:[{art:'stable',x:400,y:440,s:.8},{art:'bigStar',x:400,y:90,s:1},{art:'shepherd',x:160,y:440,s:.55},{art:'sheep',x:640,y:445,s:.4}],
   say:['cover','[[selam]]! On [[genna]], we give each other gifts. But the greatest gift of all was given to us. Let\'s see what it is.'],
   parent:'<p>This lesson follows Level IV, January week 1: <b>The Everlasting Gift on Christmas</b> (Matthew 1-2; Luke 2). Aim: learn about the fulfillment of God\'s promise.</p><p>Ethiopian Christmas, Genna, is celebrated on Tahsas 29 (January 7), after the fast of the prophets.</p>'},

  {game:'blanks', chip:'The prophets knew',
   intro:['bl-intro','Hundreds of years before, the prophets told where and how Christ would be born. Fill in the missing words.'],
   items:[
    {id:'f1',say:'The prophet Micah wrote that a Ruler would come out of a little town. Which town?',s:'Micah: But you, ___, shall bring forth a Ruler who will shepherd My people.',a:'Bethlehem',opts:['Nazareth','Egypt']},
    {id:'f2',say:'Isaiah wrote: Behold, a what, shall conceive and bear a Son?',s:'Isaiah: Behold, a ___ shall conceive and bear a Son.',a:'virgin',opts:['queen','prophet']},
    {id:'f3',s:'His name shall be called ___, which means God is with us.',a:'Emmanuel',opts:['Israel','Gabriel']},
   ],
   done:['bl-done','Every word came true.']},

  {game:'story', bg:'night', chip:'No room',
   props:[{id:'jo',art:'joseph',x:140,y:440,s:.55},{id:'mary',art:'mary',x:240,y:440,s:.55},{id:'h1',art:'house',x:470,y:440,s:.45},{id:'stable',art:'stable',x:660,y:440,s:.7},{id:'baby',art:'manger',x:660,y:440,s:.5,hidden:true},{id:'star',art:'bigStar',x:660,y:90,s:.9,hidden:true}],
   beats:[
    {say:['s1','The Roman emperor ordered everyone to be counted in their own town. Joseph, from the family of David, went to Bethlehem with the Virgin [[mariam]].']},
    {wiggle:['h1'],say:['s2','But there was no room for them anywhere. Tap the stable.'],tap:'stable'},
    {move:{jo:[560,440],mary:[740,440]},show:['baby','star'],sfx:'glory',say:['s3','There, on [[tahsas]] twenty-nine, the King of kings was born, wrapped in cloths and laid in a manger.']},
   ]},

  {game:'tapmany', bg:'night', chip:'Glory to God',
   props:[{id:'sh1',art:'shepherd',x:200,y:440,s:.55},{id:'sh2',art:'shepherd',x:600,y:440,s:.55,flip:true},{id:'sheep',art:'sheep',x:400,y:445,s:.45},{id:'ang',art:'angel',x:400,y:190,s:.6}],
   area:{x0:0,y0:0,x1:800,y1:330}, count:8, spawn:{art:'angelHead',s:[.35,.5],anim:'bob'},
   intro:['t1','Shepherds were watching their flocks at night. An angel said: Do not be afraid! I bring you good news of great joy. A Savior is born to you! Then the sky was filled with angels. Tap the sky to fill it.'],
   done:['t2','They sang: Glory to God in the highest, and on earth peace, and goodwill toward men! The shepherds hurried to Bethlehem and found the Baby, just as the angel said.']},

  {game:'match', chip:'Gifts we received',
   heading:'Match each gift we received at Christmas to its verse',
   intro:['m0','The wise men brought gifts to Christ. But we received far greater gifts from Him. Match each gift to its verse.'],
   pairs:[
    ['Becoming God\'s children','To all who received Him, He gave the right to become children of God'],
    ['Freedom','Stand fast in the liberty by which Christ has made us free'],
    ['Love','God is love, and he who abides in love abides in God'],
    ['Peace','On earth peace, goodwill toward men'],
    ['Everlasting life','He who believes in Me, though he may die, he shall live'],
   ],
   done:['m1','These gifts never wear out. That is why He is the everlasting gift.']},

  {game:'verse', chip:'Memory verse',
   verse:'Behold, a Virgin shall conceive, and bear a Son, and shall call His name Emmanuel.', ref:'Isaiah 7:14',
   chunks:['Behold, a Virgin shall conceive,','and bear a Son,','and shall call His name','Emmanuel.'],
   intro:['verse-intro','Our memory verse: Behold, a Virgin shall conceive, and bear a Son, and shall call His name Emmanuel. Build it in order.'],
   done:['verse-done','Emmanuel: God is with us.']},

  {game:'quiz', questions:[
    {id:'q1',q:'On what day do we celebrate [[genna]], the birth of Christ?',a:[['Tahsas 29, January 7','manger'],['Meskerem 17','demera'],['Tir 11','dove']],c:0},
    {id:'q2',q:'Why was Christ born in a manger?',a:[['There was no room for them in the inn','stable'],['Joseph owned the stable','house'],['It was warmer than a house','fire']],c:0},
    {id:'q3',q:'Who told the shepherds that Christ was born?',a:[['An angel of the Lord','angel'],['King Herod','king'],['The wise men','wiseKing1']],c:0},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Of the five gifts we received at Christmas, which one means the most to you today? Why?'],
    ['k2','The King of kings chose to be born in a stable. What does that teach us about how God sees the poor and humble?'],
    ['k3','How does your family celebrate [[genna]]? How can you share the gift with someone who has nothing this year?'],
   ]},
 ]
});
