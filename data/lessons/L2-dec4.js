/* Level II (Grades 1-3), December week 4: The Annunciation (Luke 1) */
BKLesson({
 id:'L2-dec4', title:'The Angel\'s Good News', am:'ብሥራት', sticker:'gabriel',
 pages:[
  {game:'cover', bg:'church', title:'The Angel\'s Good News', am:'ብሥራት',
   props:[{art:'glory',x:600,y:280,s:1},{art:'gabriel',x:600,y:430,s:.6},{art:'mary',x:170,y:440,s:.6}],
   say:['cover','[[selam]]! Moses said a prophet greater than him would come one day. Who was he? Today an angel brings the answer! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, December week 4: <b>The Annunciation</b> (Luke 1). Annunciation means announcing something new. Aim: notice who made the announcement, and to whom.</p>'},

  {game:'read', chip:'Read along', heading:'Gabriel comes to Mary', pic:'gabriel',
   paras:[
    ['r1','The Virgin [[mariam]] was serving God in the temple.'],
    ['r2','Suddenly the room was filled with light. The Archangel Gabriel stood before her.'],
    ['r3','He said: Hail, full of grace! The Lord is with you. You will have a Son, and you will call Him Jesus.'],
    ['r4','Mary said: Behold the servant of the Lord. Let it be to me as you have said.'],
   ]},

  {game:'story', bg:'garden', chip:'Mary visits Elizabeth',
   props:[{art:'tukul',x:660,y:440,s:.65},{id:'mary',art:'mary',x:150,y:440,s:.58},{id:'eliz',art:['woman',{robe:'#8A5A30',netela:'#FFFFFF',halo:true}],x:520,y:440,s:.58}],
   beats:[
    {say:['v1','Gabriel also told Mary: Your cousin Elizabeth, who is old, will have a baby too. Nothing is impossible with God.']},
    {move:{mary:[380,440,.58]},sfx:'whoosh',say:['v2','Mary hurried to visit Elizabeth. Tap Elizabeth.'],tap:'eliz'},
    {wiggle:['eliz'],sfx:'glory',say:['v3','When Elizabeth heard Mary\'s greeting, her baby leaped for joy inside her!']},
    {fx:'confetti',say:['v4','Elizabeth said: Blessed are you among women! Her baby grew up to be John the Baptist.']},
   ],
   parent:'<p>"Blessed art thou among women." (Luke 1:42). Elizabeth\'s son was John the Baptist.</p>'},

  {game:'match', chip:'Who said it?', heading:'Match the words to the person who said them',
   intro:['match-intro','Who said it? Tap the words, then tap the person.'],
   pairs:[['Hail, full of grace!','Gabriel',null,'gabriel'],['Behold the servant of the Lord.','Mary',null,'mary'],['Blessed are you among women!','Elizabeth',null,['woman',{robe:'#8A5A30',netela:'#FFFFFF',halo:true}]]],
   done:['match-done','You matched them all!']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who brought the good news to Mary?',a:[['The Archangel Gabriel','gabriel'],['A shepherd','shepherd']],c:0},
    {id:'q2',q:'What would Mary call her Son?',a:[['Jesus','glory'],['Moses','moses']],c:0},
    {id:'q3',q:'Who leaped for joy when Mary came?',a:[['Elizabeth\'s baby','baby'],['A sheep','sheep']],c:0},
   ]},
 ]
});
