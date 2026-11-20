/* Level IV (Grade 7 and up), October week 2: The Bronze Snake (Numbers 21:4-9; John 3:14-15; 1 Corinthians 1:18) */
BKLesson({
 id:'L4-oct2', title:'The Bronze Snake', am:'የናሱ እባብ', sticker:'cross',
 pages:[
  {game:'cover', bg:'desert', title:'The Bronze Snake', am:'የናሱ እባብ',
   props:[{art:'bronzeSnake',x:420,y:440,s:1.1},{art:'moses',x:250,y:440,s:.6},{art:'tent',x:650,y:430,s:.6}],
   say:['cover','[[selam]]! In the desert, God\'s people grumbled again and again. Today we see what happened, and how a bronze snake on a pole saved them.'],
   parent:'<p>This lesson follows Level IV, October week 2: <b>The Bronze Snake</b> (Numbers 21:4-9). Aim: learn about the result of sin, and the sign of salvation.</p><p>Christ Himself compared the bronze snake to His Cross (John 3:14-15).</p>'},

  {game:'story', bg:'desert', chip:'God cared for them',
   props:[{id:'cloud',art:'cloud',x:400,y:110,s:1.2},{id:'pillar',art:'fire',x:660,y:420,s:.8,hidden:true},{id:'crowd',art:'crowd',x:300,y:445,s:.7},{id:'manna',art:'manna',x:470,y:420,s:.7,hidden:true},{id:'rock',art:'rockWater',x:640,y:440,s:.6,hidden:true}],
   beats:[
    {wiggle:['cloud'],say:['b1','After ten great wonders in Egypt, God led His people through the desert. By day, a cloud shaded them from the burning sun. Tap the cloud.'],tap:'cloud'},
    {show:['pillar'],say:['b2','By night, a pillar of fire gave them light.'],wait:300},
    {hide:['pillar'],show:['manna'],sfx:'pop',say:['b3','Every morning He fed them with manna, bread from heaven. Tap the manna.'],tap:'manna'},
    {show:['rock'],say:['b4','When they were thirsty, He gave them water from a rock. God never stopped caring for them.']},
   ]},

  {game:'choose', bg:'desert', chip:'Grateful or grumbling?',
   props:[{id:'crowd',art:'crowd',x:380,y:445,s:.8},{id:'manna',art:'manna',x:620,y:420,s:.6},{id:'dark',art:'darkCloud',x:400,y:250,s:.9,hidden:true}],
   prompt:['c0','The journey was long and hard. You are one of the people. What will you say about the manna?'],
   options:[
    {label:'Why did you bring us here to die? We hate this miserable food!',art:'darkCloud',good:false,then:{show:['dark'],wiggle:['crowd']},
     say:['c1','That is what the people said. They forgot all of God\'s goodness and spoke against God and against Moses. Try the grateful answer.']},
    {label:'Thank You, Lord, for feeding us every day.',art:'manna',then:{hide:['dark']},
     say:['c2','That is the answer God was waiting for. A grateful heart trusts God, even on a long journey.']},
   ]},

  {game:'story', bg:'desert', chip:'Fiery snakes',
   props:[{id:'crowd',art:'crowd',x:330,y:445,s:.75},{id:'sn1',art:'snake',x:180,y:430,s:.6,hidden:true},{id:'sn2',art:'snake',x:470,y:440,s:.6,hidden:true},{id:'sn3',art:'snake',x:620,y:425,s:.6,hidden:true},{id:'moses',art:'moses',x:680,y:440,s:.6}],
   beats:[
    {show:['sn1','sn2','sn3'],sfx:'boing',say:['n1','Because they kept grumbling, the Lord sent venomous snakes among them. Many were bitten, and many died.']},
    {wiggle:['crowd'],say:['n2','Then the people understood their sin. They came to Moses and said: We have sinned. Pray to the Lord to take the snakes away. Tap Moses.'],tap:'moses'},
    {say:['n3','They asked Moses to pray, because they knew they were unworthy, and that God was with Moses. Repentance softens God\'s anger.']},
   ]},

  {game:'drag', bg:'desert', chip:'Lift it up',
   props:[{id:'moses',art:'moses',x:240,y:440,s:.6},{id:'pole',art:['bronzeSnake'],x:470,y:440,s:1,hidden:true},{id:'crowd',art:'crowd',x:680,y:445,s:.6}],
   items:[{art:'bronzeSnake',x:130,y:440,s:.55,to:[470,440,1],then:{show:['pole']}}],
   zone:{x:380,y:150,w:180,h:290},
   intro:['l1','God told Moses: Make a snake of bronze and put it on a pole. Anyone who is bitten and looks at it will live. Drag the bronze snake up onto the pole.'],
   done:['l2','Moses lifted it high, in the middle of the camp.']},

  {game:'story', bg:'desert', chip:'Look and live',
   props:[{id:'pole',art:'bronzeSnake',x:400,y:440,s:1},
    {id:'p1',art:'sleeper',x:160,y:430,s:.7},{id:'u1',art:['figure',{robe:'#8A5A30',beard:'dark',arms:'up'}],x:160,y:440,s:.5,hidden:true},
    {id:'p2',art:'sleeper',x:620,y:430,s:.7,flip:true},{id:'u2',art:['figure',{robe:'#2F7A4E',longHair:true,netela:'#E2A62B',arms:'up'}],x:620,y:440,s:.5,hidden:true}],
   beats:[
    {say:['lk1','This man was bitten. Tap him, so he looks up at the bronze snake.'],tap:'p1'},
    {hide:['p1'],show:['u1'],sfx:'glory',say:['lk2','He looked, and he lived!']},
    {say:['lk3','This woman was bitten too. Tap her.'],tap:'p2'},
    {hide:['p2'],show:['u2'],sfx:'glory',say:['lk4','She looked, and she lived! Our Lord said: As Moses lifted up the snake in the desert, so the Son of Man must be lifted up, that whoever believes in Him should have eternal life.']},
   ]},

  {game:'match', chip:'What it means',
   heading:'Match each part of the story to what it teaches us',
   intro:['m0','The desert journey is a picture of our own journey. Match each part to its meaning.'],
   pairs:[
    ['Egypt','The land of exile: this world'],
    ['The Promised Land','The everlasting kingdom of God'],
    ['Forty years in the desert','What lack of trust and patience cost them'],
    ['The bronze snake on the pole','A sign of Christ lifted up on the Cross'],
    ['Asking Moses to pray','Repentance and humility'],
   ],
   done:['m1','The journey could have taken forty days. It took forty years, because they did not fully trust God.']},

  {game:'verse', chip:'Memory verse',
   verse:'For the preaching of the cross is to them that perish foolishness; but unto us which are saved it is the power of God.', ref:'1 Corinthians 1:18',
   chunks:['For the preaching of the cross','is to them that perish','foolishness;','but unto us which are saved','it is the power of God.'],
   intro:['verse-intro','Our memory verse is the same as last week. Can you remember it? For the preaching of the cross is to them that perish foolishness; but unto us which are saved it is the power of God.'],
   done:['verse-done','Well done!']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf0','True or false?'],
   items:[
    {id:'t1',s:'This story is in the New Testament.',t:false,why:'It is in the Book of Numbers, in the Old Testament.'},
    {id:'t2',s:'God sent the snakes because the people were ungrateful and kept grumbling.',t:true,why:'They spoke against God even after all His wonders.'},
    {id:'t3',s:'People were healed by touching the snake.',t:false,why:'They were healed by looking at it, with faith in God\'s word.'},
    {id:'t4',s:'The bronze snake is a sign of the Cross of Christ.',t:true,why:'Christ said so Himself, in John chapter three.'},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','The Israelites forgot God\'s goodness when things got hard. What good things has God done for you that you can thank Him for today?'],
    ['k2','Patience: the road to holiness can feel long. What makes it longer, and what helps?','Trust and thankfulness make the road shorter.'],
    ['k3','The people asked Moses to pray for them. Who do you ask to pray for you?','Our parents, priests and the saints pray for us.'],
   ]},
 ]
});
