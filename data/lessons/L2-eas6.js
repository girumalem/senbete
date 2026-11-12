/* Level II (Grades 1-3), Easter season week 6: The Ascension (Mark 16:14-20; Acts 1:9-12) */
BKLesson({
 id:'L2-eas6', title:'Up into Heaven', am:'ዕርገት', sticker:'cloud',
 pages:[
  {game:'cover', bg:'heaven', title:'Up into Heaven', am:'ዕርገት',
   props:[{art:'jesus',x:620,y:300,s:.5},{art:'cloud',x:620,y:320,s:1.2},{art:'peter',x:160,y:440,s:.5},{art:'disciple',x:250,y:440,s:.5}],
   say:['cover','[[selam]]! Forty days after He rose, Jesus went up into heaven. Let\'s see what happened! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, Easter week 6: <b>The Ascension</b> (Mark 16:14-20). Aim: learn about the Ascension of Jesus Christ (Erget).</p><p>Review: What did the man on the right ask Jesus?</p>'},

  {game:'read', chip:'Read along', heading:'Forty days', pic:['text',{t:'40',size:64,c:'#24418F'}],
   paras:[
    ['r1','After He rose from the dead, Jesus stayed on earth for forty days.'],
    ['r2','He visited His disciples and taught them. He helped them understand the Holy Books.'],
    ['r3','He said: Go into all the world and teach everyone about Me.'],
    ['r4','He promised: I will send you the Holy Spirit.'],
   ]},

  {game:'story', bg:'mountain', chip:'On the Mount of Olives',
   props:[{id:'jesus',art:'jesus',x:400,y:420,s:.6},{id:'cloud',art:'cloud',x:400,y:200,s:1.2,hidden:true},{id:'peter',art:'peter',x:180,y:440,s:.5},{id:'d1',art:'disciple',x:620,y:440,s:.5},{id:'a1',art:'angel',x:290,y:440,s:.5,hidden:true},{id:'a2',art:'angel',x:510,y:440,s:.5,hidden:true}],
   beats:[
    {wiggle:['jesus'],say:['m1','Jesus took His disciples to the Mount of Olives. He lifted His hands and blessed them. Tap Jesus.'],tap:'jesus'},
    {move:{jesus:[400,200,.5]},sfx:'glory',say:['m2','While He was blessing them, He was lifted up into the sky!']},
    {show:['cloud'],hide:['jesus'],say:['m3','A cloud took Him, and they could not see Him any more.']},
    {show:['a1','a2'],sfx:'glory',say:['m4','Two angels in white appeared. Tap an angel.'],tap:'a1'},
    {wiggle:['a1','a2'],say:['m5','They said: Why are you looking up at the sky? This same Jesus will come back the same way!']},
   ],
   parent:'<p>The Church celebrates Erget (the Ascension) on the 40th day after Fasika.</p>'},

  {game:'verse', chip:'Memory verse', verse:'This same Jesus, who was taken up from you into heaven, will come back in the same way as you saw Him go into heaven.', ref:'Acts 1:11',
   chunks:['This same Jesus,','who was taken up from you into heaven,','will come back in the same way','as you saw Him go into heaven.'],
   intro:['verse-intro','The angels gave a wonderful promise! Tap the pieces in order.']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','Read each sentence. Is it true, or false?'],
   items:[
    {id:'f1',s:'Jesus stayed on earth for forty days after He rose.',t:true,why:'True! He taught His disciples for forty days.',pic:['text',{t:'40',size:64,c:'#24418F'}]},
    {id:'f2',s:'Jesus went up to heaven from a boat.',t:false,why:'False. He went up from the Mount of Olives.',pic:'boat'},
    {id:'f3',s:'The angels said Jesus will come back.',t:true,why:'True! He will come again in glory.',pic:'angel'},
   ],
   done:['tf-done','Great thinking!']},

  {game:'quiz', questions:[
    {id:'q1',q:'What was Jesus doing as He went up?',a:[['Blessing them','glory'],['Sleeping','bed']],c:0},
    {id:'q2',q:'What hid Jesus from their eyes?',a:[['A cloud','cloud'],['A tree','acacia']],c:0},
    {id:'q3',q:'What did Jesus promise to send?',a:[['The Holy Spirit','dove'],['A boat','boat']],c:0},
   ]},
  {game:'song', song:'motin-dil-adirgo-yetenesaw-g'},
 ]
});
