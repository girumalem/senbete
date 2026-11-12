/* Level I, Easter season week 1: Easter (Matthew 28:1-8), Fasika */
BKLesson({
 id:'L1-eas1', title:'Jesus Is Risen!', am:'ፋሲካ', sticker:'tomb',
 pages:[
  {game:'cover', bg:'sunrise', title:'Jesus Is Risen!', am:'ፋሲካ',
   props:[{art:'tomb',x:260,y:440,s:.8},{art:'glory',x:560,y:290,s:1.4},{art:'jesus',x:560,y:430,s:.6},{art:'flowers',x:700,y:445,s:.6}],
   say:['cover','[[selam]]! Do you remember [[hosanna]]? The children waved branches for Jesus. Today is the happiest day of all: [[fasika]]! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, Easter week 1: <b>Easter</b> (Matthew 28:1-8). Aim: learn about the resurrection of Jesus Christ.</p><p>Talk about it: On which day did Jesus rise? Who told the women the good news?</p>'},

  {game:'story', bg:'dark', chip:'Jesus loves us',
   props:[{id:'cross',art:'procCross',x:400,y:400,s:.9},{id:'tomb',art:['tomb',{closed:true}],x:620,y:445,s:.6,hidden:true}],
   beats:[
    {wiggle:['cross'],say:['d1','After [[hosanna]], some leaders were jealous of Jesus. On Friday they put Him on the cross. Tap the cross.'],tap:'cross'},
    {sfx:'glory',say:['d2','Even then, Jesus prayed for them. He said: Father, forgive them. Jesus died on the cross because He loves us.']},
    {show:['tomb'],sfx:'whoosh',say:['d3','His friends laid Him in a tomb, a little room cut in the rock. They rolled a big stone over the door.']},
   ],
   parent:'<p>Keep this gentle for little ones: Jesus died for us because He loves us, and He forgave the people who hurt Him (Luke 23:34).</p>'},

  {game:'story', bg:'sunrise', chip:'The stone is rolled away',
   props:[{id:'closed',art:['tomb',{closed:true}],x:480,y:445,s:.75},{id:'open',art:'tomb',x:480,y:445,s:.75,hidden:true},{id:'angel',art:'angel',x:250,y:430,s:.6,hidden:true},{id:'w1',art:'woman',x:90,y:440,s:.55},{id:'w2',art:['woman',{robe:'#24418F',netela:'#FFFFFF'}],x:160,y:445,s:.55}],
   beats:[
    {say:['s1','On Sunday, very early in the morning, the women came to the tomb with sweet spices. Tap the women!'],tap:'w1'},
    {wiggle:['closed'],say:['s2','Suddenly the ground shook! Tap the big stone.'],tap:'closed'},
    {hide:['closed'],show:['open','angel'],sfx:'glory',say:['s3','An angel of the Lord rolled the stone away! He was as bright as lightning, with clothes as white as snow.']},
    {wiggle:['angel'],say:['s4','The angel said: Do not be afraid. Jesus is not here. He is risen, just as He said! Come and see.']},
    {fx:'confetti',say:['s5','The tomb was empty! Jesus rose on the third day. Truly, He is risen!']},
   ],
   parent:'<p>"He is not here: for he is risen, as he said. Come, see the place where the Lord lay." (Matthew 28:6)</p>'},

  {game:'drag', bg:'day', chip:'Run and tell!',
   props:[{art:'city',x:640,y:440,s:.6},{art:'peter',x:600,y:440,s:.55},{art:'disciple',x:690,y:440,s:.55}],
   zone:{x:500,y:300,w:280,h:150},
   items:[{art:'woman',x:110,y:440,s:.5},{art:['woman',{robe:'#24418F',netela:'#FFFFFF'}],x:220,y:440,s:.5}],
   intro:['run','The angel said: go quickly and tell His disciples! Help the women run to the disciples. Drag each one!'],
   done:['run-done','They told the good news with great joy: Jesus is risen!']},

  {game:'tapmany', bg:'night', chip:'Light the candles',
   props:[{art:'church',x:400,y:440,s:.7}],
   area:{x0:0,y0:280,x1:800,y1:450}, count:8, spawn:{art:'candle',s:[.6,.8],anim:'bob'}, sfx:'sparkle',
   progress:'*{n} more* candles!',
   intro:['candles','In Ethiopia, families go to church on the night of [[fasika]] with candles. Tap to light eight candles!'],
   done:['candles-done','Beautiful! The light reminds us that Jesus is risen. Happy [[fasika]]!']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who rolled the stone away?',a:[['An angel','angel'],['A lion','lion'],['A soldier','soldier']],c:0},
    {id:'q2',q:'What did the women find?',a:[['A full tomb',['tomb',{closed:true}]],['An empty tomb','tomb']],c:1},
    {id:'q3',q:'What did Jesus say about the people who hurt Him?',a:[['Father, forgive them','heart'],['Go away','stone']],c:0},
   ]},
  {game:'song', song:'aman-be-aman'},
 ]
});
