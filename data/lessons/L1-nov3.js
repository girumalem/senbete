/* Level I, November week 3: Jacob's Dream (Genesis 28) */
BKLesson({
 id:'L1-nov3', title:'Jacob\'s Dream', am:'የያዕቆብ ሕልም', sticker:'ladder',
 pages:[
  {game:'cover', bg:'night', title:'Jacob\'s Dream', am:'የያዕቆብ ሕልም',
   props:[{art:'ladder',x:470,y:420,s:.95},{art:'sleeper',x:250,y:420,s:.9},{art:'angel',x:430,y:250,s:.32,anim:'bob'},{art:'angel',x:520,y:150,s:.28,anim:'bob',delay:-1}],
   say:['cover','[[selam]]! Jacob received the blessing from his father, because he was a good son. Today we hear about a very strange dream he had. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, November week 3: <b>Jacob\'s Dream</b> (Genesis 28). God is shown as light from heaven with a blessing hand, not as a face.</p>'},

  {game:'story', bg:'night', chip:'A stone pillow',
   props:[{id:'jacob',art:'jacob',x:150,y:425,s:.7,anim:'walk'},{id:'stone',art:'stone',x:420,y:420,s:1.2},{id:'sleeper',art:['sleeper',{robe:'#24418F',beard:true}],x:600,y:425,s:1,hidden:true},{id:'ladder',art:'ladder',x:600,y:420,s:.95,hidden:true},{id:'glory',art:'glory',x:600,y:20,s:.8,hidden:true}],
   beats:[
    {say:['d1','Jacob was going to his uncle\'s house. It got dark on the way. Tap Jacob to help him rest.'],tap:'jacob'},
    {hide:['jacob'],show:['sleeper'],sfx:'whoosh',say:['d2','Jacob lay down to sleep, with a stone for a pillow. Tap the stone.'],tap:'stone'},
    {show:['ladder','glory'],fx:'flash',sfx:'glory',say:['d3','Jacob had a dream! He saw a ladder that went from the earth all the way up to heaven, and God was at the top.']},
   ]},

  {game:'tapmany', bg:'night', chip:'Angels on the ladder',
   props:[{art:'ladder',x:400,y:430,s:1},{art:'glory',x:400,y:20,s:.8},{art:['sleeper',{robe:'#24418F',beard:true}],x:190,y:430,s:.8}],
   area:{x0:280,y0:250,x1:520,y1:450}, count:5, spawn:{art:['angelHead',{s:.5}],s:[.6,.7],anim:'rise'}, sfx:'note',
   progress:'*{n} more* angels!',
   intro:['angels','In the dream, angels were going up and down the ladder! Tap the bottom of the ladder to send five angels up.'],
   done:['angels-done','Up and down went the angels! Then Jacob heard God speak.']},

  {game:'story', bg:'sunrise', chip:'The house of God',
   props:[{id:'jacob',art:['jacob',{arms:'up',staff:false}],x:300,y:425,s:.7},{id:'pillar',art:'pillar',x:500,y:420,s:1.2},{id:'church',art:'church',x:660,y:430,s:.45,hidden:true}],
   beats:[
    {say:['h1','God said: I am the God of Abraham and the God of Isaac. I will give this land to you and your children.']},
    {wiggle:['jacob'],say:['h2','Jacob woke up and said: How awesome is this place! This is the house of God! Tap the stone.'],tap:'pillar'},
    {sfx:'glory',say:['h3','Jacob named the place Bethel, [[betel]], which means the house of God.']},
    {show:['church'],say:['h4','Our church is the house of God too. When we go to church, God is there with us!']},
   ],
   parent:'<p>Jacob set up the stone he slept on as a pillar and named the place Bethel, which means "The House of God." Ask: Where is the house of God near us?</p>'},

  {game:'quiz', questions:[
    {id:'q1',q:'Who did Jacob go to after he got the blessing? His mother, his uncle, or his nephew?',show:'Who did Jacob go to?',a:[['His mother','woman'],['His uncle',['man',{beard:'dark'}]],['His nephew','boy']],c:1},
    {id:'q2',q:'What did Jacob see in his dream?',a:[['A boat','boat'],['A lion','lion'],['A ladder with angels','ladder']],c:2},
    {id:'q3',q:'What did Jacob call the place? Jordan, Jerusalem, or Bethel?',show:'What did Jacob call the place?',a:[['Jordan','fish'],['Jerusalem','city'],['Bethel','pillar']],c:2},
   ]},
  {game:'song', song:'le-getaye-le-egziabher-silad'},
 ]
});
