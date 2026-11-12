/* Level II (Grades 1-3), January week 3: Baptism of Jesus Christ (Matthew 3) */
BKLesson({
 id:'L2-jan3', title:'Jesus Is Baptized', am:'ጥምቀት', sticker:'dove',
 pages:[
  {game:'cover', bg:'river', title:'Jesus Is Baptized', am:'ጥምቀት',
   props:[{art:'jesus',x:560,y:440,s:.6},{art:'johnBaptist',x:680,y:440,s:.6},{art:'dove',x:400,y:180,s:1}],
   say:['cover','[[selam]]! Every year in Ethiopia we celebrate [[timket]] with tabots, water and joyful singing. Today we read why! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, January week 3: <b>Baptism of Jesus Christ</b> (Matthew 3). Timket is celebrated on Tir 11 (January 19).</p>'},

  {game:'read', chip:'Read along', heading:'John in the desert', pic:'johnBaptist',
   paras:[
    ['r1','The Holy Family came back from Egypt and lived in Galilee. Jesus grew up there.'],
    ['r2','In the desert, a prophet called John the Baptist was preaching. He said: Repent! Turn back to God.'],
    ['r3','Many people came to John, and he baptized them in the Jordan River.'],
    ['r4','When Jesus was thirty years old, He came to John to be baptized.'],
   ]},

  {game:'story', bg:'river', chip:'In the Jordan River',
   props:[{id:'jesus',art:'jesus',x:200,y:440,s:.6},{id:'john',art:'johnBaptist',x:560,y:440,s:.6},{id:'glow',art:'glory',x:400,y:120,s:.9,hidden:true},{id:'dove',art:'dove',x:400,y:160,s:1,hidden:true}],
   beats:[
    {wiggle:['john'],say:['j1','John said: I need You to baptize me! But Jesus said: Let it be so now. Tap John.'],tap:'john'},
    {move:{jesus:[400,460,.6]},sfx:'whoosh',say:['j2','So John baptized Jesus in the Jordan River.']},
    {show:['glow','dove'],sfx:'glory',say:['j3','When Jesus came up out of the water, heaven opened. The Holy Spirit came down like a dove! Tap the dove.'],tap:'dove'},
    {fx:'confetti',say:['j4','A voice from heaven said: This is My beloved Son, in whom I am well pleased.']},
   ],
   parent:'<p>At the Baptism the Holy Trinity was revealed: the Father\'s voice, the Son in the water, and the Holy Spirit as a dove (Matthew 3:16-17).</p>'},

  {game:'match', chip:'The Holy Trinity', heading:'Match each one',
   intro:['match-intro','At the baptism, we see the Holy Trinity. Tap a sign, then tap who it shows.'],
   pairs:[['The voice from heaven','God the Father','glory',null],['In the water','God the Son, Jesus','jesus',null],['Like a dove','God the Holy Spirit','dove',null]],
   done:['match-done','One God: Father, Son and Holy Spirit!']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who baptized Jesus?',a:[['John the Baptist','johnBaptist'],['Peter','peter']],c:0},
    {id:'q2',q:'Where was Jesus baptized?',a:[['In the Jordan River','raindrop'],['In a church','church']],c:0},
    {id:'q3',q:'How old was Jesus when He was baptized?',a:[['30',['text',{t:'30',size:64,c:'#24418F'}]],['5',['text',{t:'5',size:64,c:'#24418F'}]]],c:0},
   ]},
  {game:'song', song:'hore-eyesus-hore-eyesus'},
 ]
});
