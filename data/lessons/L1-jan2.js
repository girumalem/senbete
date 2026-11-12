/* Level I, January week 2: Kings Bring Gifts to Jesus (Matthew 2) */
BKLesson({
 id:'L1-jan2', title:'Kings Bring Gifts to Jesus', am:'ሰብአ ሰገል', sticker:'gift',
 pages:[
  {game:'cover', bg:'night', title:'Kings Bring Gifts', am:'ሰብአ ሰገል',
   props:[{art:'bigStar',x:400,y:70,s:1.2},{art:'wiseKing1',x:240,y:425,s:.62},{art:'wiseKing2',x:400,y:425,s:.62},{art:'wiseKing3',x:560,y:425,s:.62},{art:'camel',x:690,y:430,s:.5}],
   say:['cover','[[selam]]! When Jesus was born, angels told the shepherds. But visitors also came from a faraway land! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, January week 2: <b>Kings Bring Gifts to Jesus</b> (Matthew 2). The visitors are the wise men, called Sebe Segel in Ethiopia.</p>'},

  {game:'tapmany', bg:'night', chip:'Follow the star',
   props:[{id:'star',art:'bigStar',x:150,y:80,s:1.1},{id:'kings',art:'wiseKing2',x:110,y:425,s:.55,anim:'walk'},{id:'camel',art:'camel',x:40,y:430,s:.45},{art:'stable',x:700,y:430,s:.55}],
   area:{x0:0,y0:0,x1:800,y1:450}, count:5, spawn:{art:'sparkles',s:[.4,.6]}, sfx:'sparkle',
   at:{1:{move:{star:[260,80,1.1],kings:[220,425,.55],camel:[150,430,.45]}},2:{move:{star:[380,70,1.1],kings:[330,425,.55],camel:[260,430,.45]}},3:{move:{star:[490,70,1.1],kings:[430,425,.55],camel:[360,430,.45]}},4:{move:{star:[600,70,1.1],kings:[520,425,.55],camel:[450,430,.45]}},5:{move:{star:[700,90,1.1],kings:[600,425,.55],camel:[530,430,.45]}}},
   progress:'Follow the star! *{n} more*.',
   intro:['star','Far away, kings saw a special star. They knew it meant a new King was born! Tap to follow the star.'],
   done:['star-done','The shining star led them all the way to Bethlehem, to baby Jesus!']},

  {game:'drag', bg:'night', chip:'Three gifts',
   props:[{art:'stable',x:520,y:430,s:.85},{art:'maryBaby',x:520,y:425,s:.62},{art:'joseph',x:670,y:425,s:.55},{art:'bigStar',x:520,y:60,s:.8}],
   zone:{x:400,y:220,w:240,h:220},
   items:[{art:['gift',{c:'#E2A62B',c2:'#B3322A'}],x:110,y:420,s:1.2,say:['g1','Gold, a gift for a King!']},{art:['pot',{c:'#8A6038'}],x:200,y:330,s:.8,say:['g2','Frankincense, sweet incense for God!']},{art:['gift',{c:'#6A3A8A',c2:'#E2A62B'}],x:110,y:300,s:1.1,say:['g3','Myrrh, a precious oil.']}],
   intro:['gifts','The kings worshipped baby Jesus and gave Him three gifts. Drag each gift to Jesus!'],
   done:['gifts-done','Gold, frankincense and myrrh! Then the kings went back home to their country.']},

  {game:'story', bg:'church', chip:'Our gift',
   props:[{id:'girl',art:['girl',{arms:'pray'}],x:330,y:425,s:.8},{id:'boy',art:['boy',{arms:'pray'}],x:470,y:425,s:.8},{id:'heart',art:'heart',x:400,y:200,s:1.2,hidden:true}],
   beats:[
    {say:['o1','Did you get gifts for Christmas? What gift can we give to Jesus? Tap the children.'],tap:'boy'},
    {show:['heart'],sfx:'glory',say:['o2','We can give Him our love, our prayers, and kindness to others!']},
   ]},

  {game:'quiz', questions:[
    {id:'q1',q:'How did the kings know a new King was born?',a:[['They saw a star','bigStar'],['A bird told them','raven'],['They read a scroll','scroll']],c:0},
    {id:'q2',q:'Who did the kings visit?',a:[['King Herod','king'],['Baby Jesus','babyJesus'],['Moses','moses']],c:1},
    {id:'q3',q:'Which was one of the gifts?',a:[['Gold','gift'],['A ball',['text',{t:'Ball',size:50,c:'#24418F'}]],['A car',['text',{t:'Car',size:50,c:'#24418F'}]]],c:0},
   ]},
  {game:'song', song:'beberet-tegna-becherk-teteke'},
 ]
});
