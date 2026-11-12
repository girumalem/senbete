/* Level II (Grades 1-3), October week 2: God Cares for Noah in the Ark, Part II (Genesis 8, 9) */
BKLesson({
 id:'L2-oct2', title:'The Dove and the Rainbow', am:'ርግብና ቀስተ ደመና', sticker:'rainbow',
 pages:[
  {game:'cover', bg:'sea', title:'The Dove and the Rainbow', am:'ርግብና ቀስተ ደመና',
   props:[{art:'rainbow',x:400,y:470,s:.7},{art:'ark',x:400,y:420,s:.75},{art:'dove',x:620,y:160,s:1}],
   say:['cover','[[selam]]! Noah and his family were safe in the ark. Today we read how Noah knew the land was dry, and what God promised. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, October week 2: <b>God Cares for Noah in the Ark, Part II</b> (Genesis 8, 9). Aim: God cares for us and keeps His promise.</p>'},

  {game:'read', chip:'Read along', heading:'Forty days of rain', pic:'ark',
   paras:[
    ['r1','It rained for forty days without stopping. The ark floated on the water.'],
    ['r2','Then the water started to go down, and the ark came to rest on a mountain.'],
    ['r3','Noah wanted to know: is the land dry yet?'],
   ]},

  {game:'story', bg:'sea', chip:'Send out the birds',
   props:[{id:'ark',art:'ark',x:400,y:420,s:.8},{id:'raven',art:'raven',x:470,y:300,s:1,hidden:true},{id:'dove',art:'dove',x:470,y:300,s:1,hidden:true},{id:'branch',art:'branch',x:470,y:300,s:.3,hidden:true}],
   beats:[
    {show:['raven'],say:['b1','First Noah sent out a raven, a big black bird. Go and see if there is a tree! Tap the raven.'],tap:'raven'},
    {move:{raven:[900,80,1]},sfx:'whoosh',say:['b2','The raven flew away, and it never came back.']},
    {show:['dove'],say:['b3','Then Noah sent out a dove, [[rigib]]. But there was water everywhere, so the dove came back.']},
    {move:{dove:[620,150,1]},sfx:'whoosh',say:['b4','After a few days, Noah sent the dove again. Tap the dove!'],tap:'dove'},
    {move:{dove:[470,300,1]},show:['branch'],sfx:'sparkle',say:['b5','The dove came back with a fresh olive leaf in its mouth! Now Noah knew the earth was dry.']},
   ]},

  {game:'tapmany', bg:'day', chip:'God\'s promise',
   props:[{art:'ark',x:620,y:430,s:.6},{art:'noah',x:300,y:435,s:.6},{art:'noahWife',x:400,y:438,s:.58}],
   area:{x0:0,y0:20,x1:800,y1:260}, count:7, spawn:{art:'star',s:[.5,.8],anim:'bob'}, sfx:'sparkle',
   progress:'*{n} more* colours!',
   intro:['rainbow','Noah\'s family and all the animals came out and thanked God. God promised never to destroy the earth with a flood again. Tap seven times to paint the seven colours of the rainbow!'],
   done:['rainbow-done','The [[kestedemena]], the rainbow, is the sign of God\'s promise!']},

  {game:'blanks', chip:'Fill in the word',
   intro:['blanks-intro','Read the sentence, and tap the missing word.'],
   items:[
    {id:'f1',s:'It rained for ___ days.',a:'forty',opts:['forty','two','ten'],pic:'raindrop'},
    {id:'f2',s:'The ___ flew away and never came back.',a:'raven',opts:['dove','raven','lion'],pic:'raven'},
    {id:'f3',s:'The dove came back with an olive ___.',a:'leaf',opts:['leaf','fish','stone'],pic:'dove'},
    {id:'f4',s:'The ___ is the sign of God\'s promise.',a:'rainbow',opts:['moon','rainbow','ark'],pic:'rainbow'},
   ],
   done:['blanks-done','Well read!']},

  {game:'quiz', questions:[
    {id:'q1',q:'Which bird did Noah send first?',a:[['A raven','raven'],['A dove','dove']],c:0},
    {id:'q2',q:'How did Noah know the land was dry?',a:[['The dove brought a leaf','dove'],['The raven came back','raven']],c:0},
    {id:'q3',q:'What did God show Noah as a sign of His promise?',a:[['A rainbow','rainbow'],['A star','star'],['The moon','moon']],c:0},
   ]},
  {game:'song', song:'etgdifenne-etgdifenne-we-itm'},
 ]
});
