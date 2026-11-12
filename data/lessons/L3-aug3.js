/* Level III (Grades 4-6), August week 3: The Transfiguration (Matthew 17:1-9; Debre Tabor / Buhe, Nehasse 13) */
BKLesson({
 id:'L3-aug3', title:'Glory on Mount Tabor', am:'ደብረ ታቦር', sticker:'sun',
 pages:[
  {game:'cover', bg:'mountain', title:'Glory on Mount Tabor', am:'ደብረ ታቦር',
   props:[{art:'glory',x:640,y:290,s:1.1},{art:['jesus',{robe:'#FFFFFF',sleeve:'#FFFFFF'}],x:640,y:430,s:.55},{art:'peter',x:140,y:440,s:.5},{art:'disciple',x:240,y:440,s:.5}],
   say:['cover','[[selam]]! On Mount Tabor, three disciples saw Jesus in His divine glory. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, August week 3: <b>The Transfiguration</b> (Matthew 17). Aim: learn about the manifestation of Jesus in His glory, one of the nine major feasts of the Lord, called Debre Tabor or Buhe (Nehasse 13, August 19).</p><p>Review: Who started the Fast of the Assumption? Who took the Virgin Mary\'s body away?</p>'},

  {game:'read', chip:'Read', heading:'Up the high mountain', pic:'sun',
   paras:[
    ['r1','The Transfiguration is one of the nine major feasts of our Lord. We call it Debre Tabor, or Buhe, and celebrate it on the thirteenth of Nehasse.'],
    ['r2','Jesus took three disciples, [[petros]], James and John, up a high mountain called Mount Tabor.'],
    ['r3','At the top, His face shone like the sun, and His clothes became white as the light.'],
   ]},

  {game:'story', bg:'mountain', chip:'Moses and Elijah',
   props:[{id:'jesus',art:'jesus',x:400,y:420,s:.6},{id:'white',art:['jesus',{robe:'#FFFFFF',sleeve:'#FFFFFF'}],x:400,y:420,s:.6,hidden:true},{id:'glow',art:'glory',x:400,y:290,s:1.3,hidden:true},{id:'moses',art:'moses',x:210,y:430,s:.5,hidden:true},{id:'elijah',art:['figure',{robe:'#8A5A30',beard:'white',halo:true,mantle:'#5B4D3C'}],x:590,y:430,s:.5,hidden:true},{id:'peter',art:'peter',x:90,y:450,s:.45},{id:'tent',art:'tent',x:720,y:450,s:.35}],
   beats:[
    {wiggle:['jesus'],say:['s1','Jesus was praying on the mountain. Tap Jesus.'],tap:'jesus'},
    {show:['glow','white'],hide:['jesus'],sfx:'glory',say:['s2','He was transfigured before them. His face shone like the sun!']},
    {show:['moses','elijah'],sfx:'pop',say:['s3','Then Moses and Elijah, two of the greatest prophets of the Old Testament, appeared and talked with Him.']},
    {wiggle:['peter'],say:['s4','[[petros]] said: Lord, it is good for us to be here. Let us make three tents: one for You, one for Moses and one for Elijah. Tap the tent.'],tap:'tent'},
   ],
   parent:'<p>Moses stands for the Law and Elijah for the Prophets. Both bear witness to Christ.</p>'},

  {game:'story', bg:'mountain', chip:'Hear Him!',
   props:[{id:'jesus',art:['jesus',{robe:'#FFFFFF',sleeve:'#FFFFFF'}],x:400,y:420,s:.6},{id:'cloud',art:'cloud',x:400,y:160,s:1.6,hidden:true},{id:'p',art:'peter',x:200,y:450,s:.5},{id:'d',art:'disciple',x:600,y:450,s:.5}],
   beats:[
    {show:['cloud'],sfx:'whoosh',say:['h1','While he was speaking, a bright cloud covered them. Tap the cloud.'],tap:'cloud'},
    {sfx:'glory',say:['h2','A voice came out of the cloud: This is My beloved Son, in whom I am well pleased. Hear Him! The Father said the same words at Jesus\' baptism.']},
    {move:{p:[200,470,.45],d:[600,470,.45]},say:['h3','The disciples fell on their faces, very afraid.']},
    {hide:['cloud'],wiggle:['jesus'],say:['h4','Jesus came and touched them: Arise, and do not be afraid. When they looked up, they saw no one but Jesus.']},
   ]},

  {game:'read', chip:'Read', heading:'A tent of saints', pic:'church',
   paras:[
    ['r4','The disciples loved the saints too. That is why [[petros]] wanted to make tents for Moses and Elijah, so he could stay with God and His saints.'],
    ['r5','Our church is like that tent. When we come to church, we worship God together with countless holy angels and saints, and we ask for their prayers.'],
   ]},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Jesus took Peter, James and John up Mount Tabor.',t:true,why:'He took these three disciples.',pic:'peter'},
    {id:'t2',s:'Abraham and Noah appeared with Jesus.',t:false,why:'It was Moses and Elijah.',pic:'moses'},
    {id:'t3',s:'The voice from the cloud was the testimony of God the Father.',t:true,why:'The Father spoke, as at the baptism.',pic:'cloud'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'His face shone like the ___.',a:'sun',opts:['moon','fire']},
    {id:'f2',s:'Peter wanted to make three ___.',a:'tents',opts:['boats','altars']},
    {id:'f3',s:'We celebrate Debre Tabor on the thirteenth of ___.',a:'Nehasse',opts:['Tir','Meskerem']},
   ],
   done:['bl-done','Great reading!']},

  {game:'verse', chip:'Memory verse',
   verse:'Arise, and do not be afraid.', ref:'Matthew 17:7',
   chunks:['Arise,','and do not','be afraid.'],
   intro:['verse-intro','This month\'s memory verse is what Jesus said when He touched His frightened disciples. Listen: Arise, and do not be afraid. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Where did the Transfiguration happen?',a:[['Mount Tabor','sun'],['The Jordan River','dove'],['The Sea of Galilee','boat']],c:0},
    {id:'q2',q:'Who appeared with Jesus?',a:[['Moses and Elijah','moses'],['David and Solomon','king'],['Two shepherds','shepherd']],c:0},
    {id:'q3',q:'What do we do when we come to church?',a:[['Worship God with the angels and saints','church'],['Play outside','boy'],['Go fishing','fish']],c:0},
   ]},
 ]
});
