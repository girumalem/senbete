/* Level I, July week 1: An Angel Sets St. Peter Free (Acts 12:1-19) */
BKLesson({
 id:'L1-jul1', title:'An Angel Frees Peter', am:'መልአኩ ጴጥሮስን አወጣው', sticker:'chains',
 pages:[
  {game:'cover', bg:'night', title:'An Angel Frees Peter', am:'መልአኩ ጴጥሮስን አወጣው',
   props:[{art:['bars',{open:true}],x:400,y:440,s:.9},{art:'angel',x:300,y:430,s:.55},{art:'peter',x:500,y:440,s:.55},{art:['chains',{broken:true}],x:500,y:445,s:.6}],
   say:['cover','[[selam]]! Do you remember Saint [[petros]]? He was one of the twelve disciples of Jesus. Today an angel comes to help him! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, July week 1: <b>An Angel Sets St. Peter Free</b> (Acts 12:1-19). Aim: learn about the importance of prayer and the role of angels.</p><p>Talk about it: Why was Peter in prison? What did the church do for him?</p>'},

  {game:'story', bg:'dark', chip:'Peter in prison',
   props:[{id:'king',art:'king',x:150,y:440,s:.55},{id:'bars',art:'bars',x:500,y:440,s:.9},{id:'peter',art:'peter',x:500,y:440,s:.55},{id:'chains',art:'chains',x:500,y:445,s:.6},{id:'s1',art:'soldier',x:340,y:440,s:.5},{id:'s2',art:'soldier',x:660,y:440,s:.5}],
   beats:[
    {wiggle:['king'],say:['p1','There was a bad king called Herod. He did not want anyone to teach about Jesus. Tap King Herod.'],tap:'king'},
    {wiggle:['bars'],say:['p2','He put [[petros]] in prison, with chains on his hands and soldiers guarding him. Tap the chains.'],tap:'chains'},
    {wiggle:['peter'],say:['p3','But [[petros]] was not afraid. He knew God was with him.']},
   ],
   parent:'<p>Herod arrested Peter and set four squads of soldiers to guard him (Acts 12:4).</p>'},

  {game:'tapmany', bg:'church', chip:'The church prays',
   props:[{art:'man',x:200,y:440,s:.5},{art:'woman',x:330,y:440,s:.5},{art:'boy',x:470,y:440,s:.7},{art:'girl',x:600,y:440,s:.7}],
   area:{x0:0,y0:40,x1:800,y1:280}, count:6, spawn:{art:'candle',s:[.5,.7],anim:'bob'}, sfx:'note',
   progress:'*{n} more* prayers!',
   intro:['pray','All the people of the church prayed for [[petros]], day and night. Tap to light six prayer candles!'],
   done:['pray-done','God hears our prayers!']},

  {game:'story', bg:'dark', chip:'The angel comes',
   props:[{id:'bars',art:'bars',x:470,y:440,s:.9},{id:'open',art:['bars',{open:true}],x:470,y:440,s:.9,hidden:true},{id:'sleep',art:'sleeper',x:470,y:440,s:.9},{id:'chains',art:'chains',x:470,y:445,s:1},{id:'broke',art:['chains',{broken:true}],x:470,y:445,s:1,hidden:true},{id:'peter',art:'peter',x:470,y:440,s:.55,hidden:true},{id:'glow',art:'glory',x:260,y:300,s:1.1,hidden:true},{id:'angel',art:'angel',x:260,y:430,s:.6,hidden:true}],
   beats:[
    {say:['a1','That night [[petros]] was fast asleep between two soldiers.']},
    {show:['glow','angel'],sfx:'glory',say:['a2','Suddenly an angel of the Lord came, and a light shone in the prison! Tap the angel.'],tap:'angel'},
    {say:['a3','The angel touched [[petros]] and said: Get up quickly! Tap the chains.'],tap:'chains'},
    {hide:['chains','sleep'],show:['broke','peter'],sfx:'pop',say:['a4','The chains fell off his hands!']},
    {hide:['bars'],show:['open'],sfx:'whoosh',say:['a5','The angel said: Put on your sandals and follow me. The doors opened all by themselves!']},
   ],
   parent:'<p>"And his chains fell off from his hands... the iron gate... opened to them of his own accord." (Acts 12:7,10)</p>'},

  {game:'story', bg:'night', chip:'Knock, knock!',
   props:[{id:'door',art:'door',x:560,y:440,s:.9},{id:'peter',art:'peter',x:250,y:440,s:.55}],
   beats:[
    {say:['k1','[[petros]] went to the house where his friends were praying. Tap the door to knock!'],tap:'door'},
    {wiggle:['door'],sfx:'pop',say:['k2','A girl called Rhoda heard his voice. She was so happy she ran to tell everyone, and forgot to open the door!']},
    {fx:'confetti',say:['k3','Then they opened the door, and saw [[petros]]! God answered their prayers.']},
   ],
   parent:'<p>Rhoda was so glad she did not open the gate, but ran in and told them Peter stood outside (Acts 12:14).</p>'},

  {game:'quiz', questions:[
    {id:'q1',q:'Who put Peter in prison?',a:[['Bad King Herod','king'],['A shepherd','shepherd'],['A fisherman','fish']],c:0},
    {id:'q2',q:'What did the church do for Peter?',a:[['They prayed','candle'],['They went to sleep','bed']],c:0},
    {id:'q3',q:'Who set Peter free?',a:[['An angel','angel'],['A lion','lion'],['A soldier','soldier']],c:0},
   ]},
  {game:'song', song:'tenageru-dink-sirawin-meskir'},
 ]
});
