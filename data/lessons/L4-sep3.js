/* Level IV (Grade 7 and up), September week 3: Manifestation of God's Love in Creation (Genesis 1-2; John 15:13) */
BKLesson({
 id:'L4-sep3', title:'God\'s Love in Creation', am:'የእግዚአብሔር ፍቅር በፍጥረት', sticker:'heart',
 pages:[
  {game:'cover', bg:'garden', title:'God\'s Love in Creation', am:'የእግዚአብሔር ፍቅር',
   props:[{art:['figure',{robe:'#5E9A3A',sleeve:'#5E9A3A',beard:'dark'}],x:300,y:440,s:.6},{art:['figure',{robe:'#5E9A3A',sleeve:'#5E9A3A',longHair:true}],x:420,y:440,s:.58},{art:'fruitTree',x:620,y:440,s:.9},{art:'heart',x:360,y:150,s:.6}],
   say:['cover','[[selam]]! God\'s love for us did not start when we were born. It started before He even made the first man. Let\'s see how.'],
   parent:'<p>This lesson follows Level IV, September week 3: <b>Manifestation of God\'s Love in Creation</b> (Genesis 1-2). Aim: learn about the unconditional love of God for us.</p><p>Talk about it: How does your family get ready when a new baby is coming?</p>'},

  {game:'drag', bg:'garden', chip:'A home made ready',
   props:[{id:'adam',art:['figure',{robe:'#5E9A3A',sleeve:'#5E9A3A',beard:'dark',arms:'up'}],x:560,y:440,s:.6,hidden:true}],
   items:[{art:'sun',x:90,y:110,s:.45},{art:'fruitTree',x:90,y:300,s:.45},{art:'fish',x:200,y:400,s:.5},{art:'sheep',x:90,y:430,s:.4},{art:'bird',x:200,y:120,s:.5}],
   zone:{x:320,y:120,w:440,h:300},
   intro:['d1','Before God made man, He prepared a home full of everything man would need. Drag each gift into the new world.'],
   after:{show:['adam']},
   done:['d2','Only when everything was ready did God make man, on the sixth and last day. He prepared it all for us, because He loved us before we existed.']},

  {game:'choose', bg:'field', chip:'Why last?',
   props:[{id:'house',art:'tukul',x:600,y:430,s:.7},{id:'fam',art:'family',x:280,y:440,s:.6},{id:'gift',art:'gift',x:470,y:420,s:.5,hidden:true},{id:'baby',art:'babyBasket',x:600,y:440,s:.6,hidden:true}],
   prompt:['c0','Why do you think God created man last of all?'],
   options:[
    {label:'Because man was the least important',art:'darkCloud',good:false,say:['c1','No! Man is the only creature made in God\'s own image. Try again.']},
    {label:'To have everything ready for us, out of love',art:'heart',then:{show:['gift','baby'],wiggle:['fam']},
     say:['c2','Yes! It is like a family getting the house ready before a new baby comes home. The baby is loved even before it is born. God loved us that way.']},
   ]},

  {game:'story', bg:'garden', chip:'A helper for Adam',
   props:[{id:'adam',art:'sleeper',x:330,y:430,s:.9},{id:'glow',art:'glory',x:330,y:250,s:.8,hidden:true},{id:'eve',art:['figure',{robe:'#5E9A3A',sleeve:'#5E9A3A',longHair:true}],x:560,y:440,s:.58,hidden:true},
    {id:'adam2',art:['figure',{robe:'#5E9A3A',sleeve:'#5E9A3A',beard:'dark'}],x:420,y:440,s:.6,hidden:true}],
   beats:[
    {say:['h1','God said: It is not good that man should be alone. So He put Adam into a deep sleep. Tap Adam.'],tap:'adam'},
    {show:['glow'],sfx:'glory',say:['h2','God took a rib from Adam\'s side and made Eve.'],wait:300},
    {hide:['adam','glow'],show:['eve','adam2'],say:['h3','God made Eve from Adam\'s own body, so that Adam would love her as himself. God was showing love, and teaching man to love. Tap Eve.'],tap:'eve'},
    {wiggle:['adam2','eve'],say:['h4','Then God made them king and queen of the earth: Have dominion over the fish of the sea, the birds of the air, and every living thing.']},
   ]},

  {game:'read', auto:false, chip:'Read', heading:'Made in His image', pic:'heart',
   intro:['read-intro','Read these three signs of God\'s love. Tap any paragraph to hear it.'],
   paras:[
    ['r1','*He prepared everything for us first.* Light, sky, land, plants, sun, moon, fish, birds and animals were all ready before the first man opened his eyes.'],
    ['r2','*He made us in His own image.* God said: Let Us make man in Our image. No other creature was given this honor.'],
    ['r3','*He made us rulers of creation.* God gave Adam and Eve dominion over everything on earth, like a king and queen.'],
   ]},

  {game:'match', chip:'Church words',
   heading:'Match each word to its meaning',
   intro:['m0','Match each word to its meaning.'],
   pairs:[
    ['Creation','Everything God made from nothing'],
    ['Image of God','The likeness God gave only to man'],
    ['Dominion','The right to rule and care for something'],
    ['Paradise','The garden God made for Adam and Eve'],
    ['Unconditional love','Love that does not depend on what we do'],
   ],
   done:['m1','All matched!']},

  {game:'verse', chip:'Memory verse',
   verse:'Greater love has no one than this, than to lay down one\'s life for his friends.', ref:'John 15:13',
   chunks:['Greater love has no one','than this,','than to lay down one\'s life','for his friends.'],
   intro:['verse-intro','Our memory verse: Greater love has no one than this, than to lay down one\'s life for his friends. Build it in order.'],
   done:['verse-done','God loved us at creation, and later showed the greatest love of all on the Cross.']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'Man was created on the ___ day.',a:'sixth',opts:['first','seventh']},
    {id:'f2',s:'God made Eve from Adam\'s ___.',a:'rib',opts:['hand','hair']},
    {id:'f3',s:'The story of creation was written by the prophet ___.',a:'Moses',opts:['David','Isaiah']},
   ],
   done:['bl-done','Moses was born in Egypt, and God revealed to him the story of creation.']},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Name three ways God showed His love at creation.','He prepared everything first, made us in His image, and made us rulers of the earth.'],
    ['k2','God loved us before we could do anything for Him. How does that change the way you see yourself?','You are loved, not because of what you do, but because God made you.'],
    ['k3','God gave us dominion over creation. How can you care for His creation this week?'],
   ]},
 ]
});
