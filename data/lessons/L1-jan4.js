/* Level I, January week 4: The Miracle at Cana (John 2) */
BKLesson({
 id:'L1-jan4', title:'The Wedding at Cana', am:'ቃና ዘገሊላ', sticker:'jar',
 pages:[
  {game:'cover', bg:'wedding', title:'The Wedding at Cana', am:'ቃና ዘገሊላ',
   props:[{art:'mary',x:250,y:425,s:.62},{art:'jesus',x:400,y:425,s:.65},{art:['jar',{fill:'#8A1E3A'}],x:560,y:425,s:.8},{art:['jar',{fill:'#8A1E3A'}],x:650,y:428,s:.8}],
   say:['cover','[[selam]]! Do you remember who baptized Jesus? John, in the Jordan River! Today we see the first miracle Jesus did. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, January week 4: <b>The Miracle at Cana</b> (John 2). The Ethiopian Church remembers Cana of Galilee the day after Timket.</p>'},

  {game:'story', bg:'wedding', chip:'A wedding',
   props:[{id:'couple1',art:'man',x:600,y:425,s:.55},{id:'couple2',art:'woman',x:680,y:428,s:.55},{id:'mary',art:'mary',x:220,y:425,s:.62},{id:'jesus',art:'jesus',x:370,y:425,s:.65},{id:'empty',art:'pot',x:500,y:425,s:.9}],
   beats:[
    {say:['w1','Jesus, His mother the Virgin [[mariam]], and His disciples went to a wedding in Cana. Tap the wedding couple!'],tap:'couple2'},
    {wiggle:['couple1','couple2'],say:['w2','Oh no! The family ran out of wine for the guests. Tap the empty jug.'],tap:'empty'},
    {say:['w3','The Virgin [[mariam]] saw their problem, and told her Son. She knew He could help.']},
    {wiggle:['mary'],say:['w4','She told the servants: do whatever He tells you!']},
   ],
   parent:'<p>The Virgin Mary understood their problem and told her Son. She told the servants to do whatever He told them. The Church honours her care and her intercession in this story.</p>'},

  {game:'tapmany', bg:'wedding', chip:'Fill the jars',
   props:[...[0,1,2,3,4,5].map(i=>({id:'j'+i,art:'jar',x:180+i*90,y:425,s:.85})),...[0,1,2,3,4,5].map(i=>({id:'w'+i,art:['jar',{fill:'#5AA0D8'}],x:180+i*90,y:425,s:.85,hidden:true})),{art:'jesus',x:80,y:425,s:.55}],
   area:{x0:0,y0:250,x1:800,y1:450}, count:6, max:6, spawn:{art:'raindrop',s:[.6,.8],anim:'popin'}, sfx:'pop',
   at:{1:{show:['w0']},2:{show:['w1']},3:{show:['w2']},4:{show:['w3']},5:{show:['w4']},6:{show:['w5']}},
   progress:'*{n} more* jars!',
   intro:['fill','There were six big empty jars. Jesus said: fill the jars with water. Tap six times to fill them!'],
   done:['fill-done','All six jars are full of water, right to the top!']},

  {game:'story', bg:'wedding', chip:'Water into wine',
   props:[{id:'jesus',art:'jesus',x:140,y:425,s:.62},...[0,1,2].map(i=>({id:'w'+i,art:['jar',{fill:'#5AA0D8'}],x:330+i*130,y:425,s:1})),...[0,1,2].map(i=>({id:'r'+i,art:['jar',{fill:'#8A1E3A'}],x:330+i*130,y:425,s:1,hidden:true})),{id:'sp',art:'sparkles',x:460,y:250,s:1.4,hidden:true}],
   beats:[
    {say:['v1','Jesus said: now pour some out and take it to the guests. Tap a jar!'],tap:'w1'},
    {hide:['w0','w1','w2'],show:['r0','r1','r2','sp'],fx:'flash',sfx:'glory',say:['v2','The water had turned into wine! Even better wine than before!']},
    {fx:'confetti',say:['v3','This was the first miracle of Jesus, in Cana of Galilee.']},
   ]},

  {game:'quiz', questions:[
    {id:'q1',q:'Where were Jesus and His mother invited?',a:[['A wedding',['jar',{fill:'#8A1E3A'}]],['A school','tukul'],['A boat ride','boat']],c:0},
    {id:'q2',q:'What problem did the family have?',a:[['No more wine',['jar',{}]],['No more chairs',['text',{t:'Chairs',size:44,c:'#24418F'}]],['It rained','cloud']],c:0},
    {id:'q3',q:'Who told Jesus about the problem?',a:[['The Virgin Mary','mary'],['A king','king'],['Selam','selam']],c:0},
    {id:'q4',q:'What did Jesus change the water into?',a:[['Milk',['text',{t:'Milk',size:50,c:'#24418F'}]],['Wine',['jar',{fill:'#8A1E3A'}]],['Honey','manna']],c:1},
   ]},
  {game:'song', song:'hore-eyesus-hore-eyesus'},
 ]
});
