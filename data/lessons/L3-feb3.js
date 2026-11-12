/* Level III (Grades 4-6), February week 3: St. Stephen, Kidus Estifanos (Acts 6-7; Acts 7:60) */
BKLesson({
 id:'L3-feb3', title:'Saint Stephen', am:'ቅዱስ እስጢፋኖስ', sticker:'stone',
 pages:[
  {game:'cover', bg:'heaven', title:'Saint Stephen', am:'ቅዱስ እስጢፋኖስ',
   props:[{art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',halo:true,band:'#E2A62B',bandBg:'#B3322A'}],x:170,y:440,s:.6},{art:'glory',x:640,y:250,s:1},{art:'jesus',x:640,y:400,s:.5}],
   say:['cover','[[selam]]! Saint Stephen, whom our Church calls Kidus Estifanos, was the first martyr. He forgave the people who hurt him, just like Jesus. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, February week 3: <b>St. Stephen</b> (Acts 6-7). Aim: learn about the first deacon-martyr, his faith and his forgiveness. His feast is on Tir 1.</p><p>Talk about it: How did Stephen\'s last words follow Jesus\' example on the cross?</p>'},

  {game:'read', chip:'Read', heading:'Seven deacons', pic:'church',
   paras:[
    ['r1','As the apostles preached, the number of believers grew. The apostles asked the people to choose seven men of good reputation, full of the Holy Spirit, to serve them.'],
    ['r2','The apostles prayed over the seven and laid their hands on them, making them deacons. Stephen was the archdeacon, the first among them.'],
    ['r3','Stephen, full of faith and power, did great wonders and miracles among the people.'],
   ]},

  {game:'read', chip:'Read', heading:'A face like an angel', pic:'scroll',
   paras:[
    ['r4','Some men stirred up the people and brought false witnesses, accusing Stephen of speaking against God and the holy places.'],
    ['r5','When the council looked at him, his face shone like the face of an angel.'],
    ['r6','Stephen told them the whole story: how God called Abraham, how Jacob\'s family went to Egypt, how God saved them through Moses, and how the people often rebelled and rejected the prophets.'],
    ['r7','He said: You always resist the Holy Spirit. The prophets spoke of the Righteous One, and now you have killed Him.'],
   ]},

  {game:'story', bg:'heaven', chip:'The heavens opened',
   props:[{id:'st',art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',halo:true,band:'#E2A62B',bandBg:'#B3322A',arms:'pray'}],x:220,y:440,s:.6},{id:'glow',art:'glory',x:560,y:220,s:1.1,hidden:true},{id:'jesus',art:'jesus',x:560,y:330,s:.5,hidden:true}],
   beats:[
    {wiggle:['st'],say:['s1','The council was furious. But Stephen looked up to heaven. Tap Stephen.'],tap:'st'},
    {show:['glow','jesus'],sfx:'glory',say:['s2','He said: Look! I see the heavens opened, and the Son of Man standing at the right hand of God!']},
    {say:['s3','They dragged him out of the city and threw stones at him. Stephen prayed: Lord Jesus, receive my spirit.']},
    {wiggle:['st'],sfx:'glory',say:['s4','Then he knelt and cried out: Lord, do not charge them with this sin. He forgave them, just as Jesus did on the cross.']},
   ],
   parent:'<p>Saul (later St. Paul) was watching that day. Stephen\'s forgiveness was the first seed of Paul\'s conversion.</p>'},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Stephen was one of the seven deacons.',t:true,why:'He was the archdeacon.',pic:'church'},
    {id:'t2',s:'The witnesses against Stephen told the truth.',t:false,why:'They were false witnesses.',pic:'scroll'},
    {id:'t3',s:'Stephen asked God to punish the people who stoned him.',t:false,why:'He prayed: Lord, do not charge them with this sin.',pic:'heart'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'The apostles chose ___ deacons.',a:'seven',opts:['twelve','two']},
    {id:'f2',s:'Stephen\'s face shone like the face of an ___.',a:'angel',opts:['king','lion']},
    {id:'f3',s:'Stephen saw Jesus standing at the right ___ of God.',a:'hand',opts:['door','side']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'Lord, do not charge them with this sin.', ref:'Acts 7:60',
   chunks:['Lord,','do not charge them','with this sin.'],
   intro:['verse-intro','Our memory verse is Stephen\'s last prayer. Listen: Lord, do not charge them with this sin. Now build it in order!'],
   done:['verse-done','Forgiving is hard, but God gives us strength.']},

  {game:'quiz', questions:[
    {id:'q1',q:'What was Stephen\'s service in the Church?',a:[['Archdeacon','church'],['King','king'],['Fisherman','boat']],c:0},
    {id:'q2',q:'What did Stephen see?',a:[['Jesus at the right hand of God','glory'],['A burning bush','burningBush'],['A ladder','ladder']],c:0},
    {id:'q3',q:'What did Stephen do for the people who hurt him?',a:[['Prayed for them','heart'],['Ran away','door'],['Cursed them','fire']],c:0},
   ]},
 ]
});
