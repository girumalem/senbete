/* Level IV (Grade 7 and up), November week 1: Wrestling with God (Genesis 25, 27, 32:22-32; Luke 18:1-8; Luke 11:9-13) */
BKLesson({
 id:'L4-nov1', title:'Wrestling with God', am:'ያዕቆብና በረከት', sticker:'sun',
 pages:[
  {game:'cover', bg:'night', title:'Wrestling with God', am:'ያዕቆብ',
   props:[{art:'jacob',x:300,y:440,s:.65},{art:'lightMan',x:470,y:440,s:.65},{art:'moon',x:660,y:110,s:.6}],
   say:['cover','[[selam]]! When you really want something, do you ask once and give up? Today [[yaikob]] holds on all night, and will not let go until he is blessed.'],
   parent:'<p>This lesson follows Level IV, November week 1: <b>Wrestling with God</b> (Genesis 32:22-32; Luke 18:1-8; 11:9-13). Aim: learn about the importance of persistence in prayer.</p><p>Read the parable of the persistent widow (Luke 18:1-8) together.</p>'},

  {game:'choose', bg:'field', chip:'The birthright',
   props:[{id:'esau',art:'esau',x:220,y:440,s:.6},{id:'jacob',art:'jacob',x:480,y:440,s:.6},{id:'stew',art:'lentils',x:360,y:420,s:.6},{id:'blessing',art:'glory',x:480,y:200,s:.7,hidden:true}],
   prompt:['c0','In those days, the firstborn son received a special blessing from his father. One day [[esaw]] came home hungry, and [[yaikob]] had a pot of stew. What did each of them value?'],
   options:[
    {label:'Esau: a bowl of stew now',art:'lentils',good:false,then:{wiggle:['esau']},
     say:['c1','Yes, [[esaw]] sold his birthright for one meal. He did not value God\'s blessing. Now, what did [[yaikob]] value?']},
    {label:'Jacob: God\'s blessing through his father',art:'glory',then:{show:['blessing'],wiggle:['jacob']},
     say:['c2','From his youth, [[yaikob]] knew that God\'s blessing passed through his father\'s blessing. He wanted it more than anything.']},
   ]},

  {game:'hold', bg:'night', chip:'Hold on until dawn',
   props:[{id:'sun',art:'sun',x:400,y:560,s:.7},{id:'jacob',art:'jacob',x:340,y:440,s:.6},{id:'man',art:'lightMan',x:470,y:440,s:.6},{id:'glow',art:'glory',x:400,y:240,s:.9,hidden:true}],
   target:'jacob', mover:{id:'sun',up:[400,140,.7],down:[400,560,.7]}, ms:7000, label:'Hold on! Do not let go!',
   intro:['w1','Years later, [[yaikob]] was returning home with his family. In the night, a man wrestled with him until morning. Press and hold to keep [[yaikob]] holding on until dawn!'],
   at:[{p:.45,say:['w2','The man said: Let me go, for the day is breaking.']},
       {p:.85,wiggle:['jacob'],say:['w3','[[yaikob]] said: I will not let you go unless you bless me!']}],
   after:{show:['glow']},
   done:['w4','So He blessed him there, and changed his name from [[yaikob]] to [[israel]]. In the morning [[yaikob]] knew he had been wrestling with God, and the promise to Abraham and Isaac passed to him.']},

  {game:'repeat', bg:'egypt', chip:'Keep knocking',
   props:[{id:'door',art:'door',x:620,y:440,s:.9},{id:'widow',art:['figure',{robe:'#5B4D3C',sleeve:'#5B4D3C',netela:'#8C8478'}],x:180,y:440,s:.6},{id:'judge',art:['figure',{robe:'#6A3A8A',beard:'grey'}],x:620,y:440,s:.55,hidden:true}],
   button:{label:'Knock!',art:'door'},
   intro:['r0','Our Lord told a parable. A poor widow needed help from a judge who did not fear God or care about people. He kept saying no. Tap Knock to keep asking!'],
   steps:[
    {wiggle:['door'],say:['r1','Please help me!']},
    {wiggle:['door'],say:['r2','No answer.']},
    {wiggle:['door'],say:['r3','She came again.']},
    {wiggle:['door'],say:['r4','And again!']},
    {show:['judge'],sfx:'glory',say:['r5','At last the judge said: Because she keeps bothering me, I will help her!']},
   ],
   done:['r6','Our Lord said: If even an unjust judge listens, how much more will your loving Father in heaven answer those who cry to Him day and night!']},

  {game:'read', auto:false, chip:'Read', heading:'Lessons from the story', pic:'bible',
   intro:['read-intro','Read these three lessons. Tap any paragraph to hear it.'],
   paras:[
    ['l1','*Seek God\'s blessing.* When our parents bless us, it is God\'s blessing we receive. In the Church we are blessed at the [[kidase]], in Holy Communion, by the Gospel, the Cross, the priests, the bishops and the elders.'],
    ['l2','*Be persistent in prayer.* God gives us what we ask, unless it would harm us. Our Lord said: Ask, and it will be given to you. If earthly parents give good gifts to their children, how much more will our heavenly Father give!'],
    ['l3','*Keep your eyes on God, not on things.* King Solomon asked only for wisdom to lead God\'s people. God gave him wisdom, and riches he had not even asked for.'],
   ]},

  {game:'sort', chip:'What are you seeking?',
   bins:[{label:'Seeking God\'s blessing',art:'glory'},{label:'Seeking only things',art:'gift'}],
   intro:['s0','Jacob sought God\'s blessing; Esau traded it for a meal. Sort these.'],
   items:[
    {t:'Bowing for a priest\'s blessing after church',b:0},
    {t:'Praying only for a new phone',b:1},
    {t:'Asking God for wisdom, like Solomon',b:0},
    {t:'Skipping church to play a game',b:1,why:['s1','That trades a blessing for something small, like Esau did. Try again.']},
    {t:'Receiving Holy Communion',b:0},
   ],
   done:['s2','If we seek God\'s blessing first, everything we truly need comes with it.']},

  {game:'verse', chip:'Memory verse',
   verse:'Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.', ref:'Luke 11:9',
   chunks:['Ask,','and it will be given to you;','seek,','and you will find;','knock,','and it will be opened to you.'],
   intro:['verse-intro','Our memory verse: Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you. Build it in order.'],
   done:['verse-done','Ask, seek, knock, and keep on doing it!']},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','When you come to church, do you think about the blessings you receive? What could you do to receive them more fully?'],
    ['k2','What words of blessing have your parents or grandparents said to you?','Ethiopian elders often bless with words like: May God keep you.'],
    ['k3','If God asked you what you want, what would you ask for?'],
   ]},
 ]
});
