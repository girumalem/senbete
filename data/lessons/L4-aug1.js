/* Level IV (Grade 7 and up), August week 1: Qirkos and Iyalota (Synaxarium, Hamle 15; Daniel 3; Jude 3; Acts 14:22) */
BKLesson({
 id:'L4-aug1', title:'Qirkos and Iyalota', am:'ቂርቆስና ኢየሉጣ', sticker:'fire',
 pages:[
  {game:'cover', bg:'sunrise', title:'Qirkos and Iyalota', am:'ቂርቆስና ኢየሉጣ',
   props:[{art:['figure',{robe:'#24418F',sleeve:'#24418F',netela:'#FFFFFF',halo:true}],x:330,y:440,s:.6},{art:['figure',{kind:'child',robe:'#FFFFFF',sleeve:'#FFFFFF',halo:true}],x:460,y:440,s:.45},{art:'glory',x:400,y:200,s:.9}],
   say:['cover','[[selam]]! On [[hamle]] fifteen we remember a mother and her little boy, [[kirkos]] and [[iyalota]]. He was only three years old, but his faith was stronger than a governor\'s fire.'],
   parent:'<p>This lesson follows Level IV, August week 1: <b>Qirkos and Iyalota</b> (Synaxarium). Aim: learn about spiritual battle from their lives.</p><p>They are remembered on Hamle 15. Many Ethiopian churches are named for Kidus Qirkos.</p>'},

  {game:'choose', bg:'egypt', chip:'Even a child knows',
   props:[{id:'gov',art:'king',x:600,y:440,s:.6},{id:'idol',art:['figure',{robe:'#B8902A',sleeve:'#B8902A',crown:true,closedEyes:true}],x:720,y:430,s:.4},{id:'mom',art:['figure',{robe:'#24418F',sleeve:'#24418F',netela:'#FFFFFF'}],x:200,y:440,s:.55},{id:'kid',art:['figure',{kind:'child',robe:'#FFFFFF',sleeve:'#FFFFFF'}],x:300,y:440,s:.42}],
   prompt:['c0','The governor of Tarsus ordered [[iyalota]] to worship his idols. She said: Even my three-year-old child knows not to worship idols. So the governor asked the child. What did little [[kirkos]] say?'],
   options:[
    {label:'I will do what you say',art:'darkCloud',good:false,say:['c1','No! He was little, but brave. Try again.']},
    {label:'Your gods are stone and wood, made by men. There is no God but my Lord Jesus Christ',art:'cross',then:{wiggle:['kid']},
     say:['c2','The governor was furious. Then [[kirkos]] said: The Lord who saved Ananiah, Azariah and Mishael from the fire can save us too.']},
   ]},

  {game:'hold', bg:'night', chip:'In the fire',
   props:[{id:'fire',art:'fire',x:400,y:440,s:1.2},{id:'mom',art:['figure',{robe:'#24418F',sleeve:'#24418F',netela:'#FFFFFF',arms:'pray'}],x:330,y:440,s:.5},{id:'kid',art:['figure',{kind:'child',robe:'#FFFFFF',sleeve:'#FFFFFF',arms:'pray'}],x:470,y:440,s:.4},{id:'ang',art:'angel',x:400,y:-120,s:.55}],
   target:'fire', ms:6000, label:'Pray with them',
   intro:['h0','They were thrown into a burning fire. Press and hold, and pray with them.'],
   at:[{p:.4,move:{ang:[400,250]},sfx:'glory',say:['h1','God sent the archangel who had saved the three young men in Babylon.']},{p:.8,say:['h2','The fire could not touch them!']}],
   after:{fx:'flash',move:{mom:[220,440],kid:[300,440]}},
   done:['h3','Many people who saw it believed in Christ. The governor tortured them in many ways, but God delivered them again and again, until He called them to His peace, on [[hamle]] fifteen.']},

  {game:'match', chip:'Learning from those before',
   heading:'Match each one to who they learned from',
   intro:['m0','[[kirkos]] learned his courage from the three young men in the Book of Daniel. Match each saint to the faith they followed.'],
   pairs:[
    ['Qirkos','The three young men in the fire'],
    ['Saint Stephen','Christ praying for His enemies'],
    ['Saint Paul','Christ, who called him on the road'],
    ['You','The saints who passed the faith down to us'],
   ],
   done:['m1','Saint Jude wrote: Contend earnestly for the faith which was once for all delivered to the saints.']},

  {game:'collect', bg:'heaven', chip:'Fruits of martyrdom',
   props:[{id:'glow',art:'glory',x:400,y:150,s:1}],
   items:[{art:'glory',x:150,y:420,s:.5,say:['fr1','A glorious entry into eternal happiness with God and the saints.']},{art:'crowd',x:400,y:430,s:.5,say:['fr2','Many people saw their faith, left their idols and bad habits, and became Christians.']},{art:'bible',x:650,y:420,s:.5,say:['fr3','They kept the faith safe, and passed it on to us.']}],
   slots:[[280,230,.45],[400,210,.45],[520,230,.45]],
   intro:['fr0','The death of a martyr is not in vain. Tap each of the three fruits of martyrdom.'],
   done:['fr4','That is why we honor the saints, and ask for their prayers.']},

  {game:'verse', chip:'Memory verse',
   verse:'We must through much tribulation enter the kingdom of God.', ref:'Acts 14:22',
   intro:['verse-intro','Our memory verse, from last week: We must through much tribulation enter the kingdom of God. Build it in order.'],
   done:['verse-done','The saints of the Era of Martyrdom lived this verse.']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf0','True or false?'],
   items:[
    {id:'t1',s:'Qirkos was a grown man when he stood before the governor.',t:false,why:'He was only three years old.'},
    {id:'t2',s:'An archangel saved them from the fire.',t:true,why:'The same archangel who saved the three young men in Babylon.'},
    {id:'t3',s:'Everyone in the Era of Martyrdom kept the faith.',t:false,why:'Some gave up for fear or for riches. Others, like these saints, held on.'},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','A three-year-old knew the story of the three young men, and it made him brave. Which Bible story makes you brave?'],
    ['k2','The martyrs kept the faith and passed it on. How will you pass the faith on to others?'],
    ['k3','Is there a church named after [[kirkos]] near you, or in your family\'s home town?'],
   ]},
 ]
});
