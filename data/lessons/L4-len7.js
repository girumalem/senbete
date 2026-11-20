/* Level IV (Grade 7 and up), Lent week 7: Hosanna, the glorious entry into Jerusalem (Matthew 21:1-17; Zechariah 9:9; Psalm 8:2; Leviticus 23:40) */
BKLesson({
 id:'L4-len7', title:'Hosanna', am:'ሆሣዕና', sticker:'branch',
 pages:[
  {game:'cover', bg:'sunrise', title:'Hosanna', am:'ሆሣዕና',
   props:[{art:'donkey',x:400,y:440,s:.7},{art:'jesus',x:400,y:380,s:.5},{art:'branch',x:180,y:440,s:.8},{art:'branch',x:620,y:440,s:.8}],
   say:['cover','[[selam]]! On [[hosanna]] Sunday, we wear rings and crosses of palm leaves. Today we learn why: the King came into Jerusalem, riding on a donkey.'],
   parent:'<p>This lesson follows Level IV, Lent week 7: <b>Hosanna</b> (Matthew 21:1-11). Aim: learn about the glorious entry of Jesus Christ into Jerusalem.</p><p>Hosanna is the last Sunday before the crucifixion. The week after it is Passion Week (Himamat).</p>'},

  {game:'drag', bg:'field', chip:'The Lord needs them',
   props:[{id:'d1',art:'disciple',x:600,y:440,s:.55},{id:'d2',art:'peter',x:700,y:440,s:.55},{id:'tree',art:'acacia',x:160,y:440,s:.7}],
   items:[{art:'donkey',x:180,y:440,s:.55,to:[560,440,.55]}],
   zone:{x:450,y:250,w:330,h:200},
   intro:['d0','Christ sent two disciples: Go into the village. You will find a donkey tied, and a colt with her. If anyone asks, say: The Lord has need of them. Drag the donkey to the disciples.'],
   done:['d1','The owner let them go. The prophet Zechariah had written: Behold, your King comes to you, humble, and riding on a donkey.']},

  {game:'tapmany', bg:'egypt', chip:'Make the way ready',
   props:[{id:'jesus',art:'jesus',x:120,y:390,s:.45},{id:'don',art:'donkey',x:120,y:440,s:.55},{id:'gate',art:'gate',x:700,y:440,s:.55}],
   area:{x0:220,y0:320,x1:640,y1:450}, count:8, spawn:{art:'branch',s:[.35,.45]},
   at:{4:{move:{jesus:[330,390],don:[330,440]}},8:{move:{jesus:[540,390],don:[540,440]}}},
   intro:['t1','The crowds spread their clothes and palm branches on the road. Tap the road to lay down branches for the King.'],
   done:['t2','Palm branches are a sign of glory and honor. God told Israel to rejoice before Him with palm branches.']},

  {game:'repeat', bg:'egypt', chip:'Hosanna!',
   props:[{id:'kids',art:'crowd',x:150,y:445,s:.6},{id:'k1',art:'boy',x:640,y:440,s:.6},{id:'k2',art:'girl',x:720,y:440,s:.6}],
   button:{label:'Hosanna!',art:'branch'},
   intro:['h0','Many children were in the crowd. Tap to sing with them!'],
   steps:[
    {wiggle:['kids','k1','k2'],say:['h1','[[hosanna]] to the Son of David!']},
    {wiggle:['kids','k1','k2'],say:['h2','Blessed is He who comes in the name of the Lord!']},
    {wiggle:['kids','k1','k2'],say:['h3','[[hosanna]] in the highest!']},
   ],
   done:['h4','The whole city was stirred, asking: Who is this?']},

  {game:'choose', bg:'egypt', chip:'Quiet the children?',
   props:[{id:'pr',art:['figure',{robe:'#3A3F4E',sleeve:'#B3322A',beard:'dark',cap:'#3A3F4E'}],x:200,y:440,s:.6},{id:'jesus',art:'jesus',x:420,y:440,s:.6},{id:'k1',art:'boy',x:600,y:440,s:.6},{id:'k2',art:'girl',x:690,y:440,s:.6}],
   prompt:['q0','The chief priests were jealous. They said to Jesus: Do You hear what these children are saying? What did He answer?'],
   options:[
    {label:'Children, be quiet.',art:'darkCloud',good:false,say:['q1','No! He loved their praise. Try again.']},
    {label:'Have you never read: Out of the mouth of babes You have perfected praise?',art:'branch',then:{wiggle:['k1','k2']},
     say:['q2','He reminded them of King David\'s words in the Psalms. The praise of children is perfect to God!']},
   ]},

  {game:'match', chip:'The prophets wrote it',
   heading:'Match each prophet to what he foretold',
   intro:['m0','The disciples did not understand at first. Later they saw that the prophets had written it all. Match each one.'],
   pairs:[
    ['Zechariah','Your King comes to you, humble, riding on a donkey'],
    ['King David','Out of the mouth of babes You have perfected praise'],
    ['Moses, in Leviticus','Take palm branches and rejoice before the Lord'],
   ],
   done:['m1','The chief priests knew these books, but jealousy blinded them. Five days later, they had Him crucified.']},

  {game:'verse', chip:'Memory verse',
   verse:'Out of the mouth of babes and nursing infants You have perfected praise.', ref:'Matthew 21:16',
   chunks:['Out of the mouth','of babes and nursing infants','You have perfected praise.'],
   intro:['verse-intro','Our memory verse: Out of the mouth of babes and nursing infants You have perfected praise. Build it in order.'],
   done:['verse-done','Your praise matters to God!']},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Why is it called the glorious entry, when Christ was going to His death?','He was going to destroy death by His death and resurrection.'],
    ['k2','Jealousy blinded the chief priests. How can jealousy blind us too?'],
    ['k3','How will you keep Passion Week this year?'],
   ]},
 ]
});
