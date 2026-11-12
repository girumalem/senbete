/* Level I, February week 1: The Miraculous Fishing (Luke 5) */
BKLesson({
 id:'L1-feb1', title:'The Big Catch of Fish', am:'የዓሣ ተአምር', sticker:'net',
 pages:[
  {game:'cover', bg:'lake', title:'The Big Catch of Fish', am:'የዓሣ ተአምር',
   props:[{art:'boat',x:420,y:330,s:1.3},{art:'jesus',x:360,y:312,s:.42},{art:'peter',x:480,y:312,s:.4},{art:'fish',x:250,y:400,s:1},{art:'fish',x:600,y:410,s:1,flip:true}],
   say:['cover','[[selam]]! Do you remember the first miracle of Jesus? He turned water into wine at Cana! Today we will see another miracle, by the sea. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, February week 1: <b>The Miraculous Fishing</b> (Luke 5). Aim: know Jesus Christ through His miracles.</p><p>Talk about it: What do fishermen do? Did Peter catch any fish before Jesus came?</p>'},

  {game:'story', bg:'lake', chip:'Jesus teaches',
   props:[{art:'shore',x:0,y:0,s:1},{id:'crowd',art:'crowd',x:130,y:425,s:.9},{id:'jesus',art:'jesus',x:470,y:332,s:.42},{id:'boat',art:'boat',x:470,y:340,s:1.3},{id:'peter',art:'peter',x:700,y:425,s:.5},{id:'net',art:'net',x:600,y:430,s:.6}],
   beats:[
    {say:['t1','Many people came to hear Jesus teach by the sea. Tap the people!'],tap:'crowd'},
    {wiggle:['boat'],say:['t2','Jesus sat in a fishing boat and taught them from the water. Tap the boat!'],tap:'boat'},
    {wiggle:['peter'],say:['t3','The boat belonged to a fisherman called Simon [[petros]]. Fishermen catch fish with big nets.']},
    {wiggle:['net'],say:['t4','But that night [[petros]] and his friends worked hard, and they caught nothing at all. Their net was empty. Tap the empty net.'],tap:'net'},
   ],
   parent:'<p>Jesus taught the people sitting in Simon Peter\'s boat. The fishermen had worked all night and caught nothing.</p>'},

  {game:'story', bg:'lake', chip:'Put down the net',
   props:[{id:'boat',art:'boat',x:420,y:330,s:1.3},{id:'jesus',art:'jesus',x:360,y:312,s:.42},{id:'peter',art:'peter',x:480,y:312,s:.4},{id:'net',art:'net',x:520,y:400,s:.7}],
   beats:[
    {wiggle:['jesus'],say:['n1','Jesus said to [[petros]]: go out into deep water, and let down your net.']},
    {wiggle:['peter'],say:['n2','[[petros]] said: Master, we worked all night and caught nothing. But because You say so, I will let down the net. Tap the net to drop it into the water!'],tap:'net'},
    {move:{net:[520,420,.8]},sfx:'whoosh',say:['n3','Splash! Down went the net. Now let\'s see what happens!']},
   ],
   parent:'<p>Peter obeyed even though it seemed useless. He trusted the word of Jesus.</p>'},

  {game:'tapmany', bg:'lake', chip:'So many fish!',
   props:[{art:'boat',x:420,y:300,s:1.2},{art:'jesus',x:360,y:283,s:.4},{art:'peter',x:480,y:283,s:.38}],
   area:{x0:0,y0:300,x1:800,y1:450}, count:10, spawn:{art:'fish',s:[.8,1.2],anim:'bob'}, sfx:'pop',
   at:{5:{sfx:'sparkle'}},
   progress:'*{n} more* fish!',
   intro:['fish','Tap the water to fill the net with fish!'],
   done:['fish-done','So many fish! The net was so full it began to break!']},

  {game:'story', bg:'lake', chip:'Follow Me',
   props:[{id:'boat',art:'boat',x:280,y:330,s:1.1},{id:'boat2',art:'boat',x:580,y:340,s:1.1,hidden:true},{id:'fr',art:'disciple',x:580,y:322,s:.38,hidden:true},{id:'full',art:['net',{full:true}],x:430,y:420,s:.8},{id:'jesus',art:'jesus',x:230,y:315,s:.4},{id:'peter',art:'peter',x:330,y:315,s:.38}],
   beats:[
    {say:['f1','[[petros]] called his friends in the other boat to come and help. Tap the full net!'],tap:'full'},
    {show:['boat2','fr'],sfx:'whoosh',say:['f2','Both boats were filled with fish, so full they nearly sank!']},
    {wiggle:['peter'],say:['f3','[[petros]] fell down at the knees of Jesus. He knew this was a great miracle.']},
    {wiggle:['jesus'],sfx:'glory',say:['f4','Jesus said: do not be afraid. From now on you will catch people! Tap Jesus.'],tap:'jesus'},
    {fx:'confetti',say:['f5','[[petros]], James and John left everything, and followed Jesus.']},
   ],
   parent:'<p>"From now on you will catch men." (Luke 5:10). Peter, James and John left their boats and followed Jesus.</p>'},

  {game:'order', chip:'What happened first?',
   intro:['order','Put the story in order. Tap what happened first!'],
   cards:[
    {art:'crowd',cap:'Jesus taught the people',say:['o1','Jesus taught the people from the boat.']},
    {art:'net',cap:'The net was empty',say:['o2','The fishermen had caught nothing.']},
    {art:'fish',cap:'So many fish!',say:['o3','Then the net was full of fish.']},
    {art:'peter',cap:'They followed Jesus',say:['o4','And they followed Jesus.']},
   ],
   done:['order-done','You told the whole story!']},

  {game:'quiz', questions:[
    {id:'q1',q:'Where did Jesus sit to teach the people?',a:[['In a boat','boat'],['In a tent','tent'],['On a camel','camel']],c:0},
    {id:'q2',q:'What do fishermen do?',a:[['Catch fish','fish'],['Build houses','tukul'],['Bake injera','injera']],c:0},
    {id:'q3',q:'Did Peter catch any fish before Jesus came?',a:[['Yes, lots',['net',{full:true}]],['No, nothing','net']],c:1},
    {id:'q4',q:'What did the fishermen do after the miracle?',a:[['Went home to sleep','bed'],['Followed Jesus','jesus'],['Sold the boat','boat']],c:1},
   ]},
  {game:'song', song:'tenageru-dink-sirawin-meskir'},
 ]
});
