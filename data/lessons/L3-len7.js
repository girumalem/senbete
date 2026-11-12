/* Level III (Grades 4-6), Lent week 7: Hosanna, Hosaena (Matthew 21:1-17; John 12; Matthew 21:16) */
BKLesson({
 id:'L3-len7', title:'Hosanna in the Highest', am:'ሆሣዕና', sticker:'palm',
 pages:[
  {game:'cover', bg:'day', title:'Hosanna in the Highest', am:'ሆሣዕና',
   props:[{art:'donkey',x:640,y:440,s:.8},{art:'jesus',x:640,y:390,s:.5},{art:'boy',x:150,y:440,s:.6},{art:'branch',x:220,y:440,s:.6}],
   say:['cover','[[selam]]! When Jesus rode into Jerusalem, even the children sang His praise: [[hosanna]]! Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, Lent week 7: <b>Hosanna</b> (Hosaena, the Sunday before Fasika; Matthew 21). Aim: learn how Jesus entered Jerusalem and fulfilled the prophecies.</p><p>Talk about it: Why do you think God loves the praise of children?</p>'},

  {game:'read', chip:'Read', heading:'The Lord has need of them', pic:'donkey',
   paras:[
    ['r1','It was almost Passover. Many people in Jerusalem had heard that Jesus raised Lazarus from the dead, and they wanted to see Him.'],
    ['r2','Jesus sent two disciples: Go into the village. You will find a donkey tied, and a colt with her. Untie them and bring them to Me. If anyone asks, say: The Lord has need of them.'],
    ['r3','It happened just as He said. The owner let them go.'],
   ]},

  {game:'tapmany', bg:'day', chip:'Palm branches',
   props:[{art:'donkey',x:400,y:440,s:.8},{art:'jesus',x:400,y:390,s:.5}],
   area:{x0:20,y0:380,x1:780,y1:445}, count:8, spawn:{art:'branch',s:[.4,.5],anim:'rock'}, sfx:'pop',
   progress:'*{n} more* branches!',
   intro:['palms','Jesus rode into Jerusalem on the colt. The people spread their clothes and palm branches on the road. Tap to lay eight branches!'],
   done:['palms-done','Blessed is the King who comes in the name of the Lord!']},

  {game:'read', chip:'Read', heading:'Out of the mouths of children', pic:'boy',
   paras:[
    ['r4','Many children were in the crowd. They sang: [[hosanna]]! Blessed is the King of Israel who comes in the name of the Lord!'],
    ['r5','The chief priests were jealous. They said to Jesus: Do You hear what they are saying?'],
    ['r6','Jesus answered: Have you never read, Out of the mouth of babes and nursing infants You have perfected praise? He was reminding them of King David\'s prophecy in Psalm 8.'],
    ['r7','At first the disciples did not understand. Later they realized that the prophets had written about all these things long before.'],
   ]},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Jesus rode into Jerusalem on a horse.',t:false,why:'He rode on a colt, a young donkey.',pic:'donkey'},
    {id:'t2',s:'The children sang Hosanna.',t:true,why:'Blessed is the King who comes in the name of the Lord!',pic:'boy'},
    {id:'t3',s:'King David prophesied about the children\'s praise.',t:true,why:'In Psalm 8:2.',pic:'begena'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'The disciples were to say: The Lord has ___ of them.',a:'need',opts:['fear','none']},
    {id:'f2',s:'People spread ___ branches on the road.',a:'palm',opts:['fig','acacia']},
    {id:'f3',s:'Many came because Jesus had raised ___ from the dead.',a:'Lazarus',opts:['Moses','Stephen']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'Out of the mouth of babes and nursing infants You have perfected praise.', ref:'Matthew 21:16',
   chunks:['Out of the mouth of babes','and nursing infants','You have perfected praise.'],
   intro:['verse-intro','Our memory verse is from the Gospel of Matthew. Listen: Out of the mouth of babes and nursing infants You have perfected praise. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'What did Jesus ride into Jerusalem?',a:[['A young donkey','donkey'],['A chariot','chariot'],['A camel','camel']],c:0},
    {id:'q2',q:'What did the children sing?',a:[['Hosanna!','boy'],['Crucify Him!','crowd'],['Nothing','stone']],c:0},
    {id:'q3',q:'Who was jealous of the children\'s praise?',a:[['The chief priests','priest'],['The disciples','disciple'],['The donkey','donkey']],c:0},
   ]},
 ]
});
