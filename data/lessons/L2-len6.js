/* Level II (Grades 1-3), Lent week 6: Nicodemus (John 3:1-15) */
BKLesson({
 id:'L2-len6', title:'Nicodemus Comes at Night', am:'ኒቆዲሞስ', sticker:'moon',
 pages:[
  {game:'cover', bg:'night', title:'Nicodemus Comes at Night', am:'ኒቆዲሞስ',
   props:[{art:'jesus',x:560,y:440,s:.6},{art:['figure',{robe:'#24418F',sleeve:'#24418F',beard:'white',cap:'#FFFFFF'}],x:250,y:440,s:.58},{art:'candle',x:400,y:430,s:.9}],
   say:['cover','[[selam]]! Today we meet a teacher called Nicodemus. He loved to learn from Jesus, so he came to Him at night. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, Lent week 6: <b>Nicodemus</b> (John 3:1-15). The Ethiopian Church names this Lent Sunday after him: Nikodimos. Aim: love to learn about God, and understand baptism.</p><p>Review: How did the four friends bring the paralyzed man to Jesus?</p>'},

  {game:'read', chip:'Read along', heading:'A night lesson', pic:'candle',
   paras:[
    ['r1','Nicodemus was a Jewish scholar, a teacher of God\'s law.'],
    ['r2','He wanted to learn more about Jesus, so he came to Jesus at night.'],
    ['r3','One night, Jesus taught Nicodemus about baptism.'],
    ['r4','Jesus said: Unless a person is born again of water and the Spirit, he cannot enter the kingdom of God.'],
   ]},

  {game:'story', bg:'night', chip:'Born again?',
   props:[{id:'ni',art:['figure',{robe:'#24418F',sleeve:'#24418F',beard:'white',cap:'#FFFFFF'}],x:240,y:440,s:.58},{id:'jesus',art:'jesus',x:560,y:440,s:.6},{art:'candle',x:400,y:430,s:.9},{id:'water',art:'raindrop',x:400,y:250,s:1.4,hidden:true},{id:'dove',art:'dove',x:520,y:200,s:.8,hidden:true}],
   beats:[
    {wiggle:['ni'],say:['n1','Nicodemus was surprised. He asked: How can a grown man be born again? Tap Nicodemus.'],tap:'ni'},
    {show:['water','dove'],sfx:'glory',say:['n2','Jesus explained: Not born from a mother again, but born of water and the Holy Spirit. That is baptism! Tap the water.'],tap:'water'},
    {fx:'confetti',say:['n3','When we are baptized, we become children of God.']},
   ],
   parent:'<p>"Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God." (John 3:5). In our Church, boys are baptized at 40 days and girls at 80 days.</p>'},

  {game:'verse', chip:'Memory verse', verse:'For God so loved the world, that He gave His only Son, that whoever believes in Him should not perish, but have everlasting life.', ref:'John 3:16',
   chunks:['For God so loved the world,','that He gave His only Son,','that whoever believes in Him','should not perish,','but have everlasting life.'],
   intro:['verse-intro','Jesus told Nicodemus the most famous verse of all! Tap the pieces in order.']},

  {game:'quiz', questions:[
    {id:'q1',q:'When did Nicodemus come to Jesus?',a:[['At night','moon'],['At lunch','sun']],c:0},
    {id:'q2',q:'What did Jesus teach Nicodemus about?',a:[['Baptism','raindrop'],['Fishing','fish']],c:0},
    {id:'q3',q:'Born again of water and the …',a:[['Holy Spirit','dove'],['Wind','cloud']],c:0},
   ]},
  {game:'song', song:'egziabher-yiwedenal-yitebken'},
 ]
});
