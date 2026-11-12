/* Level III (Grades 4-6), November week 3: Deliverance of Israel from Egypt (Exodus 1-3, 5, 13, 14; Exodus 23:20) */
BKLesson({
 id:'L3-nov3', title:'Through the Red Sea', am:'ቀይ ባሕር', sticker:'waterWall',
 pages:[
  {game:'cover', bg:'sea', title:'Through the Red Sea', am:'ቀይ ባሕር',
   props:[{art:'moses',x:160,y:440,s:.6},{art:'michael',x:640,y:420,s:.5}],
   say:['cover','[[selam]]! God heard the cry of His people in Egypt, and He sent Moses and the Archangel Michael to lead them out. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, November week 3: <b>Deliverance of Israel from Egypt</b> (Exodus 1-3, 5, 13, 14). Aim: learn how God saves His people, and about the help of St. Michael the Archangel.</p><p>Talk about it: Do you take your shoes off when you go into church? Why?</p>'},

  {game:'read', chip:'Read', heading:'Moses and the burning bush', pic:'burningBush',
   paras:[
    ['r1','Moses grew up in Pharaoh\'s palace, but he was sad to see his people, the Israelites, made slaves. He left everything and went out of Egypt.'],
    ['r2','He was welcomed by an Ethiopian named Jethro, and married his daughter.'],
    ['r3','One day, keeping Jethro\'s sheep, Moses saw a bush on fire on the Mountain of God, but the bush did not burn up.'],
    ['r4','A voice called from the fire: Moses, Moses! Take off your shoes, for the place where you stand is holy. I am the God of Abraham, Isaac and Jacob. I have heard the cry of My people, and I will send you to free them.'],
   ]},

  {game:'read', chip:'Read', heading:'Let My people go', pic:'pharaoh',
   paras:[
    ['r5','Moses told Pharaoh: Thus says the Lord God of Israel: Let My people go! But Pharaoh refused.'],
    ['r6','God sent many plagues and wonders on Egypt. At last, after the death of the first-born of Egypt, Pharaoh let the people go.'],
    ['r7','But then Pharaoh changed his mind, and sent his whole army after them.'],
   ]},

  {game:'story', bg:'sea', chip:'The sea divides',
   props:[{id:'moses',art:'moses',x:200,y:440,s:.6},{id:'crowd',art:'crowd',x:90,y:445,s:.7},{id:'mi',art:'michael',x:330,y:420,s:.5},{id:'wall',art:'waterWall',x:580,y:440,s:.9,hidden:true},{id:'ch',art:'chariot',x:760,y:440,s:.5}],
   beats:[
    {wiggle:['crowd'],say:['s1','The people reached the Red Sea, with Pharaoh\'s army behind them. They were afraid and complained to Moses.']},
    {wiggle:['mi'],sfx:'glory',say:['s2','But the angel of God, the Archangel Michael, moved behind them, with the pillar of cloud, and stood between them and the Egyptians. Tap Saint Michael.'],tap:'mi'},
    {wiggle:['moses'],say:['s3','Moses said: See the salvation of the Lord! Tap Moses to lift his rod over the sea.'],tap:'moses'},
    {show:['wall'],sfx:'whoosh',say:['s4','The sea split in two, and Israel walked through on dry land!']},
    {hide:['ch'],sfx:'whoosh',fx:'confetti',say:['s5','When the army followed, the waters came back. Israel sang: I will sing to the Lord, for He has triumphed gloriously!']},
   ],
   parent:'<p>The Ethiopian Church honors St. Michael as the angel who led Israel out of Egypt (Exodus 14:19; 23:20).</p>'},

  {game:'order', chip:'Put it in order',
   intro:['order','Tap the pictures in the order they happened.'],
   cards:[
    {art:'burningBush',cap:'God spoke from the burning bush',say:['o1','God spoke from the burning bush.']},
    {art:'pharaoh',cap:'Moses told Pharaoh: Let My people go',say:['o2','Moses went to Pharaoh.']},
    {art:'chariot',cap:'Pharaoh\'s army chased them',say:['o3','Pharaoh\'s army chased them.']},
    {art:'waterWall',cap:'They crossed the Red Sea',say:['o4','They crossed the Red Sea on dry land.']},
   ],
   done:['order-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'Moses was welcomed by an Ethiopian named ___.',a:'Jethro',opts:['Laban','Joseph']},
    {id:'f2',s:'God told Moses: Take off your ___.',a:'shoes',opts:['coat','crown']},
    {id:'f3',s:'The angel who helped Israel was the Archangel ___.',a:'Michael',opts:['Gabriel','Raphael']},
    {id:'f4',s:'Israel crossed the Red Sea on ___ land.',a:'dry',opts:['muddy','green']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'Behold, I send an Angel before you, to keep you in the way, and to bring you into the place which I have prepared.', ref:'Exodus 23:20',
   chunks:['Behold, I send an Angel before you,','to keep you in the way,','and to bring you into the place','which I have prepared.'],
   intro:['verse-intro','Our memory verse is from Exodus. Listen: Behold, I send an Angel before you, to keep you in the way, and to bring you into the place which I have prepared. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Where did God speak to Moses?',a:[['From a burning bush','burningBush'],['From a boat','boat'],['From a palace','temple']],c:0},
    {id:'q2',q:'Who went between Israel and the army?',a:[['The Archangel Michael','michael'],['A lion','lion'],['Pharaoh','pharaoh']],c:0},
    {id:'q3',q:'What did Moses do at the sea?',a:[['Lifted his rod, and the sea split','waterWall'],['Built a boat','ark'],['Turned back','sandals']],c:0},
   ]},
 ]
});
