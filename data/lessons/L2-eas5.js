/* Level II (Grades 1-3), Easter season week 5: The Forgiven Criminal (Luke 23:32-43) */
BKLesson({
 id:'L2-eas5', title:'Remember Me', am:'አስበኝ', sticker:'calvary',
 pages:[
  {game:'cover', bg:'garden', title:'Remember Me', am:'አስበኝ',
   props:[{art:'calvary',x:160,y:440,s:.55},{art:'glory',x:640,y:300,s:1},{art:'fruitTree',x:740,y:440,s:.6},{art:'adeyAbeba',x:560,y:430,s:.5}],
   say:['cover','[[selam]]! Today we learn about a man who said sorry to Jesus, and Jesus opened Paradise for him. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, Easter week 5: <b>The Forgiven Criminal</b> (Luke 23:32-43). Aim: learn about repentance and forgiveness.</p><p>Review: How did St. George defeat the dragon?</p>'},

  {game:'read', chip:'Read along', heading:'Two men beside Jesus', pic:'calvary',
   paras:[
    ['r1','When Jesus was on the cross, two criminals were on crosses beside Him, one on His right and one on His left.'],
    ['r2','People made fun of Jesus. They said: If You are a king, save Yourself!'],
    ['r3','Jesus did not answer them. Instead He prayed: Father, forgive them, for they do not know what they are doing.'],
   ]},

  {game:'story', bg:'dark', chip:'The sky grew dark',
   props:[{id:'hill',art:'calvary',x:400,y:440,s:.9},{id:'sun',art:'sun',x:650,y:110,s:.6},{id:'sp',art:'sparkles',x:400,y:200,s:1,hidden:true}],
   beats:[
    {wiggle:['sun'],say:['k1','Many wonders happened. Tap the sun.'],tap:'sun'},
    {hide:['sun'],sfx:'whoosh',say:['k2','The sun stopped giving its light, and it became dark.']},
    {wiggle:['hill'],sfx:'drum',say:['k3','The earth shook!']},
    {show:['sp'],sfx:'glory',say:['k4','The man on the right saw all this, and he believed that Jesus is the Christ.']},
   ],
   parent:'<p>We show the three crosses only, gently, for young children.</p>'},

  {game:'match', chip:'Who said it?', heading:'Match the words to who said them',
   intro:['match-intro','Who said it? Tap the words, then tap who said them.'],
   pairs:[['Father, forgive them.','Jesus',null,'jesus'],['Lord, remember me!','The man on the right',null,['man',{robe:'#8C8478'}]],['Save Yourself, and us!','The man on the left',null,['man',{robe:'#5B4D3C'}]]],
   done:['match-done','You matched them all!']},

  {game:'story', bg:'garden', chip:'Today, in Paradise',
   props:[{id:'glow',art:'glory',x:400,y:300,s:1.2,hidden:true},{id:'man',art:['man',{robe:'#8C8478'}],x:260,y:440,s:.55},{id:'tree',art:'fruitTree',x:620,y:440,s:.7},{id:'fl',art:'flowers',x:470,y:445,s:.6,hidden:true}],
   beats:[
    {wiggle:['man'],say:['p1','The man on the right was truly sorry for the bad things he had done. He said: Lord, remember me when You come into Your kingdom. Tap him.'],tap:'man'},
    {show:['glow'],sfx:'glory',say:['p2','Jesus answered: Today you will be with Me in Paradise.']},
    {show:['fl'],fx:'confetti',say:['p3','Jesus forgave him! He was the first person to enter Paradise.']},
   ],
   parent:'<p>"Verily I say unto thee, To day shalt thou be with me in paradise." (Luke 23:43)</p>'},

  {game:'blanks', chip:'Fill in the word',
   intro:['blanks-intro','Read the sentence, and tap the missing word.'],
   items:[
    {id:'b1',s:'Jesus prayed: Father, ___ them.',a:'forgive',opts:['forgive','punish','forget'],pic:'jesus'},
    {id:'b2',s:'The man on the right was truly ___.',a:'sorry',opts:['angry','sorry','sleepy'],pic:['man',{robe:'#8C8478'}]},
    {id:'b3',s:'He said: Lord, ___ me.',a:'remember',opts:['remember','leave','push'],pic:'heart'},
    {id:'b4',s:'Jesus said: Today you will be with Me in ___.',a:'Paradise',opts:['prison','Paradise','Egypt'],pic:'fruitTree'},
   ],
   done:['blanks-done','Well done!']},

  {game:'quiz', questions:[
    {id:'q1',q:'What did Jesus do for the people who mocked Him?',a:[['He prayed for them','glory'],['He shouted at them','crowd']],c:0},
    {id:'q2',q:'What did the man on the right ask?',a:[['Lord, remember me','heart'],['Give me gold','gift']],c:0},
    {id:'q3',q:'What do we do when we do something wrong?',a:[['Say sorry to God','church'],['Hide it','bush']],c:0},
   ]},
  {game:'song', song:'tilin-bemeskelu-gedelle'},
 ]
});
