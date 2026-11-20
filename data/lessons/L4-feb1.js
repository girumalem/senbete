/* Level IV (Grade 7 and up), February week 1: Jonah (Book of Jonah) */
BKLesson({
 id:'L4-feb1', title:'Jonah', am:'ዮናስ', sticker:'fish',
 pages:[
  {game:'cover', bg:'sea', title:'Jonah', am:'ዮናስ',
   props:[{art:'bigFish',x:420,y:380,s:.9},{art:'boat',x:200,y:260,s:.6}],
   say:['cover','[[selam]]! A prophet tries to run away from God, a storm, a great fish, and a whole city that fasts. Before Lent, the Church keeps the Fast of [[nenewe]] to remember this story.'],
   parent:'<p>This lesson follows Level IV, February week 1: <b>Jonah</b> (Book of Jonah). Aim: learn to obey God, and to repent in prayer and fasting for our sins.</p><p>The three-day Fast of Nineveh (Tsome Nenewe) comes two weeks before the Great Lent.</p>'},

  {game:'choose', bg:'sea', chip:'Go to Nineveh',
   props:[{id:'jonah',art:['figure',{robe:'#8A5A30',beard:'dark'}],x:200,y:440,s:.6},{id:'boat',art:'boat',x:560,y:420,s:.6},{id:'city',art:'city',x:640,y:440,s:.5,hidden:true}],
   prompt:['c0','God told the prophet Jonah: Go to the great city of [[nenewe]] and warn them, for their wickedness has come up before Me. What did Jonah do?'],
   options:[
    {label:'Ran away on a ship going the other way',art:'boat',good:false,then:{move:{jonah:[540,380,.5]}},
     say:['c1','That is what Jonah did! But can anyone run away from God? Let\'s see what happened. Now tap what Jonah should have done.']},
    {label:'Obeyed, and went to warn the city',art:'city',then:{show:['city']},
     say:['c2','That is what God wanted. What God asks us to do, we should do. Jonah learned that the hard way.']},
   ]},

  {game:'story', bg:'storm', chip:'The storm',
   props:[{id:'boat',art:'boat',x:400,y:330,s:.8,anim:'sway'},{id:'lots',art:'lots',x:620,y:420,s:.7,hidden:true},{id:'jonah',art:'sleeper',x:400,y:300,s:.4}],
   beats:[
    {sfx:'whoosh',say:['s1','God sent a great wind on the sea. The sailors were terrified, and each cried out to his god. But Jonah was fast asleep below deck. Tap the boat.'],tap:'boat'},
    {show:['lots'],say:['s2','The captain woke him: Get up and call on your God! The sailors cast lots to find out who had brought this trouble. The lot fell on Jonah.']},
    {say:['s3','Jonah told them: I am running away from God. Throw me into the sea, and it will be calm. They did not want to, and rowed hard, but the storm grew worse.']},
    {move:{jonah:[420,500,.4]},sfx:'whoosh',say:['s4','At last they prayed, and threw Jonah into the sea. At once, the sea was calm.']},
   ]},

  {game:'hold', bg:'sea', chip:'Inside the fish',
   props:[{id:'fish',art:'bigFish',x:430,y:330,s:.9},{id:'jonah',art:['figure',{robe:'#8A5A30',beard:'dark',arms:'pray'}],x:380,y:320,s:.25},{id:'land',art:'shore',x:150,y:450,s:1,hidden:true}],
   target:'fish', ms:6500, label:'Jonah prays',
   intro:['p1','God prepared a great fish to swallow Jonah. He was inside it three days and three nights. Press and hold, and pray with Jonah.'],
   at:[{p:.35,say:['p2','Day one: I cried out to the Lord because of my affliction.']},{p:.7,say:['p3','Day two, day three: and He answered me.']}],
   after:{show:['land'],move:{fish:[560,330,.9],jonah:[160,420,.45]}},
   done:['p4','God spoke to the fish, and it put Jonah out onto dry land. Christ said that Jonah\'s three days in the fish were a sign of His own three days in the tomb.']},

  {game:'repeat', bg:'desert', chip:'A city fasts',
   props:[{id:'city',art:'city',x:430,y:400,s:.7},{id:'king',art:['figure',{robe:'#6A3A8A',crown:true,beard:'dark'}],x:160,y:440,s:.6},{id:'sack',art:['figure',{robe:'#5B4D3C',sleeve:'#5B4D3C',crown:true,beard:'dark',arms:'pray'}],x:160,y:440,s:.6,hidden:true},{id:'crowd',art:'crowd',x:660,y:445,s:.6},{id:'glow',art:'glory',x:430,y:200,s:1,hidden:true}],
   button:{label:'Fast and pray',art:'heart'},
   intro:['n0','God sent Jonah again. He cried: In forty days, [[nenewe]] will be destroyed! The people believed God. Tap to fast and pray with them for three days.'],
   steps:[
    {hide:['king'],show:['sack'],say:['n1','Day one. The king rose from his throne, put on sackcloth, and sat in ashes.']},
    {wiggle:['crowd'],say:['n2','Day two. Everyone fasted, even the children and the animals, and turned from their evil ways.']},
    {show:['glow'],sfx:'glory',say:['n3','Day three. God saw what they did, and had mercy. He did not destroy the city.']},
   ],
   done:['n4','Fasting with real repentance moves God\'s heart. That is why we keep the Fast of [[nenewe]] every year.']},

  {game:'story', bg:'desert', chip:'The plant',
   props:[{id:'jonah',art:['figure',{robe:'#8A5A30',beard:'dark'}],x:320,y:440,s:.55},{id:'plant',art:'figTree',x:420,y:440,s:.9,hidden:true},{id:'dry',art:['figTree',{dry:true}],x:420,y:440,s:.9,hidden:true},{id:'sun',art:'sun',x:650,y:110,s:.6},{id:'city',art:'city',x:680,y:440,s:.4}],
   beats:[
    {say:['g1','But Jonah was angry that God forgave the city. He sat outside it, in the hot sun, to see what would happen.']},
    {show:['plant'],say:['g2','God made a plant grow up to shade him, and Jonah was very glad. Tap the plant.'],tap:'plant'},
    {hide:['plant'],show:['dry'],say:['g3','The next morning a worm attacked it, and it withered. Jonah was so upset he wanted to die.']},
    {say:['g4','God said: You had pity on a plant you did not plant or grow. Should I not pity [[nenewe]], that great city, with more than a hundred and twenty thousand people?']},
   ]},

  {game:'verse', chip:'Memory verse',
   verse:'I cried out to the Lord because of my affliction, and He answered me.', ref:'Jonah 2:2',
   intro:['verse-intro','Our memory verse is Jonah\'s prayer from inside the fish: I cried out to the Lord because of my affliction, and He answered me. Build it in order.'],
   done:['verse-done','No place is too deep for God to hear you.']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf0','True or false?'],
   items:[
    {id:'t1',s:'Jonah could hide from God on the ship.',t:false,why:'We cannot hide anywhere from God.'},
    {id:'t2',s:'Jonah was in the fish for three days and three nights.',t:true,why:'A sign of Christ\'s three days in the tomb.'},
    {id:'t3',s:'Jonah was happy when God forgave the city.',t:false,why:'He was angry, and God taught him about mercy with the plant.'},
    {id:'t4',s:'The Book of Jonah is in the Old Testament.',t:true,why:'Jonah is one of the prophets.'},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Is there something you know God wants you to do, but you keep running away from?'],
    ['k2','God gave even [[nenewe]] time to repent. How does that change how you see people who do wrong?'],
    ['k3','How will you keep the Fast of [[nenewe]] this year?'],
   ]},
 ]
});
