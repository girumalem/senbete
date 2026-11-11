/* Level I, November week 4: Jacob's Struggle for a Blessing (Genesis 32) */
BKLesson({
 id:'L1-nov4', title:'Jacob Asks for a Blessing', am:'እስራኤል', sticker:'camel',
 pages:[
  {game:'cover', bg:'sunrise', title:'Jacob Asks for a Blessing', am:'ያዕቆብ እስራኤል ተባለ',
   props:[{art:'jacob',x:260,y:425,s:.7,anim:'bob'},{art:'camel',x:520,y:420,s:.7},{art:'sheep',x:680,y:430,s:.5}],
   say:['cover','[[selam]]! Jacob loved blessings. Today we see how much he wanted a blessing from God! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, November week 4: <b>Jacob\'s Struggle for a Blessing</b>. Objective: learn about the importance of blessings.</p>'},

  {game:'tapmany', bg:'field', chip:'Twelve sons',
   props:[{art:'tent',x:660,y:380,s:.7},{art:'jacob',x:110,y:430,s:.62}],
   area:{x0:180,y0:300,x1:800,y1:450}, count:12, max:12, spawn:{art:'boy',s:[.32,.38],anim:'bob'}, sfx:'note',
   progress:'Let\'s count: *{n} more*!',
   intro:['sons','Jacob lived at his uncle\'s place for twenty years. He had a big family, with twelve sons! Tap the grass twelve times to count them.'],
   done:['sons-done','Twelve sons! What a big family God gave Jacob.']},

  {game:'drag', bg:'field', chip:'Going home',
   props:[{art:'jacob',x:680,y:425,s:.62},{art:'path',x:440,y:440,s:1}],
   zone:{x:520,y:250,w:270,h:190},
   items:[{art:'sheep',x:80,y:400,s:.45},{art:'cow',x:200,y:420,s:.4},{art:'camel',x:330,y:420,s:.4},{art:'sheep',x:150,y:300,s:.4,flip:true}],
   intro:['pack','After twenty years, Jacob decided to go back to his father\'s home. Bring all his animals to Jacob for the trip!'],
   progress:'*{n} more* animals!',
   done:['pack-done','Everything is ready. Off they go!']},

  {game:'story', bg:'night', chip:'All night long',
   props:[{id:'dawn',art:'dawn',x:0,y:0,hidden:true},{id:'man',art:'lightMan',x:480,y:425,s:.72},{id:'jacob',art:['jacob',{staff:false,arms:'out'}],x:320,y:425,s:.72},{id:'sp',art:'sparkles',x:320,y:220,s:1.3,hidden:true}],
   beats:[
    {say:['n1','One night, a man came, and Jacob struggled with him all night long, until morning.']},
    {show:['dawn'],say:['n2','The man said: let me go! But Jacob said: I will not let you go, unless you bless me! Tap Jacob.'],tap:'jacob'},
    {show:['sp'],fx:'flash',sfx:'glory',say:['n3','The man said: your name will not be Jacob any more. Your name is Israel, [[israel]]! And He blessed him.']},
    {say:['n4','Jacob knew that it was God. God blessed Jacob and all his children, and he lived to see many grandchildren.']},
   ],
   parent:'<p>The "man" is shown as a figure of light: Jacob knew it was God he struggled with. Please have your priest or teacher guide how this is explained.</p>'},

  {game:'quiz', questions:[
    {id:'q1',q:'How many years did Jacob stay at his uncle\'s place? 7, 14, or 20?',show:'How many years at his uncle\'s place?',a:[['7',['text',{t:'7'}]],['14',['text',{t:'14'}]],['20',['text',{t:'20'}]]],c:2},
    {id:'q2',q:'How many sons did Jacob have? 5, 7, or 12?',show:'How many sons did Jacob have?',a:[['5',['text',{t:'5'}]],['7',['text',{t:'7'}]],['12',['text',{t:'12'}]]],c:2},
    {id:'q3',q:'Why did Jacob hold on all night? For fun, to get a blessing, or to win a fight?',show:'Why did Jacob hold on all night?',a:[['For fun','kebero'],['To get a blessing','sparkles'],['To win a fight','shield']],c:1},
    {id:'q4',q:'What was Jacob\'s new name? Adam, Israel, or John?',show:'What was Jacob\'s new name?',a:[['Adam',['text',{t:'Adam',size:56}]],['Israel',['text',{t:'Israel',size:56}]],['John',['text',{t:'John',size:56}]]],c:1},
   ]},
  {game:'song', song:'barken-barken-lijochihin-bar'},
 ]
});
