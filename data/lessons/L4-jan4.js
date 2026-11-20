/* Level IV (Grade 7 and up), January week 4: The Temptation of Christ (Matthew 4:1-11) */
BKLesson({
 id:'L4-jan4', title:'The Temptation in the Wilderness', am:'የጌታችን ፈተና', sticker:'bible',
 pages:[
  {game:'cover', bg:'desert', title:'The Temptation', am:'በገዳም ፈተና',
   props:[{art:'jesus',x:400,y:440,s:.62},{art:'stone',x:250,y:440,s:.8},{art:'stone',x:560,y:440,s:.7},{art:'sun',x:660,y:110,s:.5}],
   say:['cover','[[selam]]! The devil fooled Adam and Eve with a fruit. Could he fool the Son of God? Let\'s see how Christ won, and how we can win too.'],
   parent:'<p>This lesson follows Level IV, January week 4: <b>Jesus\' Temptation by Satan</b> (Matthew 4). Aim: learn how to overcome temptations, from the temptation of Jesus Christ.</p><p>Our Great Lent (Hudade) follows Christ\'s forty-day fast.</p>'},

  {game:'hold', bg:'desert', chip:'Forty days',
   props:[{id:'jesus',art:['figure',{robe:'#FFFFFF',sleeve:'#B3322A',crossHalo:true,arms:'pray'}],x:400,y:440,s:.6},{id:'sun',art:'sun',x:120,y:300,s:.5},{id:'moon',art:'moon',x:680,y:120,s:.5,hidden:true}],
   target:'jesus', mover:{id:'sun',up:[400,90,.5],down:[120,300,.5]}, ms:6000, label:'Forty days and forty nights',
   intro:['h1','Right after His baptism, Christ went into the wilderness and fasted forty days and forty nights. Press and hold to keep the fast with Him.'],
   at:[{p:.5,show:['moon'],say:['h2','Days and nights went by, with no food at all.']}],
   done:['h3','Afterward He was hungry. That is exactly when the devil came. He tempts us when we are weakest.']},

  {game:'choose', bg:'desert', chip:'The first temptation',
   props:[{id:'jesus',art:['figure',{robe:'#FFFFFF',sleeve:'#B3322A',crossHalo:true}],x:260,y:440,s:.6},{id:'dev',art:['figure',{robe:'#3A3F4E',sleeve:'#3A3F4E',arms:'out'}],x:560,y:440,s:.55},{id:'st',art:'stone',x:420,y:440,s:.9},{id:'br',art:'bread',x:420,y:430,s:.6,hidden:true}],
   prompt:['f0','The devil said: If You are the Son of God, command that these stones become bread. What did Christ answer?'],
   options:[
    {label:'I am hungry. Stones, become bread!',art:'bread',good:false,then:{show:['br']},undo:{hide:['br']},say:['f1','No. That would be obeying the devil. Try again.']},
    {label:'It is written: Man shall not live by bread alone, but by every word of God.',art:'bible',then:{wiggle:['jesus']},
     say:['f2','Christ answered with the word of God. Adam and Eve fell through food; Christ won over food.']},
   ]},

  {game:'match', chip:'Three temptations',
   heading:'Match each temptation to Christ\'s answer',
   intro:['m0','The devil came back two more times. Match each temptation to Christ\'s answer from Scripture.'],
   pairs:[
    ['Turn these stones into bread','Man shall not live by bread alone'],
    ['Throw Yourself down from the Temple; the angels will catch You','You shall not tempt the Lord your God'],
    ['Worship me, and I will give You all the kingdoms of the world','Worship the Lord your God, and serve Him only'],
   ],
   done:['m1','Then Christ said: Get away, Satan! And the devil left Him, and angels came and served Him.']},

  {game:'sort', chip:'Adam and Christ',
   bins:[{label:'Adam and Eve fell',art:'fruitTree'},{label:'Christ won',art:'cross'}],
   intro:['s0','Christ won every battle Adam and Eve lost. Sort these.'],
   items:[
    {t:'Tempted by food, they ate',b:0},
    {t:'Tempted by food, He answered with God\'s word',b:1},
    {t:'They tested God by eating the forbidden fruit',b:0},
    {t:'He said: Do not tempt the Lord your God',b:1},
    {t:'They wanted glory: to be like God',b:0},
    {t:'He refused all the glory of the world\'s kingdoms',b:1},
   ],
   done:['s1','That is how Christ repaired what Adam and Eve broke.']},

  {game:'read', auto:false, chip:'Read', heading:'How to win against temptation', pic:'bible',
   intro:['read-intro','Read these lessons. Tap any paragraph to hear it.'],
   paras:[
    ['r1','*Know the word of God.* Christ answered every temptation with: It is written. The devil can be defeated when we live by God\'s word.'],
    ['r2','*Stay alert.* The devil never stops. He came again and again with new temptations. He comes when we are hungry, tired, sad or in trouble, and tries to pull us away from church, fasting, prayer and helping others.'],
    ['r3','*Learn the Scriptures with the Church.* In the second temptation, the devil quoted a Psalm, but twisted its meaning. We learn the meaning of Scripture through the teaching of our holy fathers, guided by the Holy Spirit.'],
   ]},

  {game:'verse', chip:'Memory verse',
   verse:'Man shall not live by bread alone, but by every word that proceeds out of the mouth of God.', ref:'Matthew 4:4',
   chunks:['Man shall not live','by bread alone,','but by every word','that proceeds','out of the mouth of God.'],
   intro:['verse-intro','Our memory verse: Man shall not live by bread alone, but by every word that proceeds out of the mouth of God. Build it in order.'],
   done:['verse-done','Keep this verse ready for when temptation comes.']},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','When does temptation usually come for you: when you are tired, bored, angry, alone?','Knowing your weak moments helps you prepare.'],
    ['k2','Who in the Old Testament also fasted forty days and forty nights?','Moses on Mount Sinai, and Elijah on his way to Mount Horeb.'],
    ['k3','Which Bible verse could you keep ready, the way Christ did?'],
   ]},
 ]
});
