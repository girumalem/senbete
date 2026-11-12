/* Level I, Easter season week 4: Angels of Good News (Luke 1, Luke 2:10-11, Matthew 28:5-6) */
BKLesson({
 id:'L1-eas4', title:'Angels Bring Good News', am:'መላእክት', sticker:'angel',
 pages:[
  {game:'cover', bg:'heaven', title:'Angels Bring Good News', am:'መላእክት',
   props:[{art:'gabriel',x:400,y:430,s:.62},{art:'angel',x:200,y:430,s:.5},{art:'michael',x:600,y:430,s:.5}],
   say:['cover','[[selam]]! [[malaekt]], angels, are messengers of God. They pray for us and help us. Today we see three times they brought good news! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, Easter week 4: <b>Angels of Good News</b> (Luke 1:26-38; Luke 2:10-11; Matthew 28:5-6). Aim: learn about the works of angels.</p><p>Talk about it: Which angel came to the Virgin Mary? What did the angel tell the shepherds?</p>'},

  {game:'story', bg:'garden', chip:'Good news for Mary',
   props:[{id:'mary',art:'mary',x:560,y:440,s:.6},{id:'glow',art:'glory',x:240,y:300,s:1.1,hidden:true},{id:'gab',art:'gabriel',x:240,y:430,s:.6,hidden:true}],
   beats:[
    {say:['g1','One day [[mariam]] was praying. Tap [[mariam]].'],tap:'mary'},
    {show:['glow','gab'],sfx:'glory',say:['g2','The angel Gabriel came to her! He said: Hail, full of grace. The Lord is with you.']},
    {wiggle:['gab'],say:['g3','You will have a baby Son, and you will call Him Jesus. Tap Gabriel!'],tap:'gab'},
   ],
   parent:'<p>The first good news: Gabriel announced to the Virgin Mary that she would give birth to Jesus Christ.</p>'},

  {game:'tapmany', bg:'night', chip:'Good news for the shepherds',
   props:[{art:'shepherd',x:200,y:440,s:.55},{art:'sheep',x:330,y:440,s:.4},{art:'sheep',x:620,y:445,s:.4,flip:true},{art:'angel',x:470,y:300,s:.5}],
   area:{x0:0,y0:20,x1:800,y1:230}, count:8, spawn:{art:'star',s:[.5,.8],anim:'bob'}, sfx:'sparkle',
   progress:'*{n} more* stars!',
   intro:['stars','On the first Christmas night, angels came to the shepherds. The angel said: I bring you good news of great joy! A Savior is born. Tap to fill the sky with light!'],
   done:['stars-done','The angels sang: Glory to God in the highest!']},

  {game:'story', bg:'sunrise', chip:'Good news at the tomb',
   props:[{art:'tomb',x:520,y:445,s:.75},{id:'angel',art:'angel',x:300,y:430,s:.6},{id:'w1',art:'woman',x:110,y:440,s:.55}],
   beats:[
    {say:['t1','Do you remember [[fasika]]? The women came to the tomb of Jesus.']},
    {wiggle:['angel'],sfx:'glory',say:['t2','An angel said: Do not be afraid. He is not here. He is risen! Tap the angel.'],tap:'angel'},
    {fx:'confetti',say:['t3','That was the best good news of all!']},
   ],
   parent:'<p>The third good news: the angel announced the resurrection to the women (Matthew 28:5-6).</p>'},

  {game:'order', chip:'Three good news',
   intro:['order','Which good news came first? Tap them in order!'],
   cards:[
    {art:'gabriel',cap:'Gabriel came to Mary',say:['o1','Gabriel told [[mariam]] she would have a baby Son.']},
    {art:'shepherd',cap:'Angels told the shepherds',say:['o2','Angels told the shepherds: a Savior is born!']},
    {art:'tomb',cap:'He is risen!',say:['o3','An angel told the women: He is risen!']},
   ],
   done:['order-done','Angels bring good news from God!']},

  {game:'quiz', questions:[
    {id:'q1',q:'What are angels?',a:[['Messengers of God','angel'],['Big birds','bird'],['Stars','star']],c:0},
    {id:'q2',q:'Which angel came to the Virgin Mary?',a:[['Gabriel','gabriel'],['A lion','lion'],['A shepherd','shepherd']],c:0},
    {id:'q3',q:'Who heard the angels sing on Christmas night?',a:[['The shepherds','shepherd'],['The fish','fish'],['The king','king']],c:0},
   ]},
  {game:'song', song:'micha-el-melake-meheret'},
 ]
});
