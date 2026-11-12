/* Level III (Grades 4-6), Lent week 8: The Crucifixion, Siklet (Matthew 26-27; John 3:16) */
BKLesson({
 id:'L3-len8', title:'The Cross of Love', am:'ስቅለት', sticker:'calvary',
 pages:[
  {game:'cover', bg:'sunrise', title:'The Cross of Love', am:'ስቅለት',
   props:[{art:'calvary',x:640,y:440,s:.6},{art:'procCross',x:150,y:420,s:.8}],
   say:['cover','[[selam]]! On Good Friday we remember how Jesus gave His life on the cross for us, because He loves us. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, Lent week 8: <b>The Crucifixion</b> (Siklet, Good Friday; Matthew 26-27). Aim: learn what Christ suffered for us, and why. We show the cross gently, without figures.</p><p>Talk about it: Why did Jesus stay silent before His accusers?</p>'},

  {game:'read', chip:'Read', heading:'Betrayed', pic:'table',
   paras:[
    ['r1','On Wednesday, the leaders plotted to kill Jesus. Judas Iscariot, one of the twelve, agreed to hand Him over for thirty pieces of silver.'],
    ['r2','On Thursday night, Jesus gave His disciples the first Holy Communion, His body and blood. Then He went to a garden to pray.'],
    ['r3','Judas came with soldiers and said: The one I kiss is He. He kissed Jesus, and they seized Him.'],
   ]},

  {game:'read', chip:'Read', heading:'Before Caiaphas and Pilate', pic:'scroll',
   paras:[
    ['r4','They brought Jesus to Caiaphas, the high priest. Many false witnesses spoke against Him, but Jesus stayed silent.'],
    ['r5','The high priest asked: Are You the Christ, the Son of God? Jesus said that He is. The high priest cried: Blasphemy!'],
    ['r6','In the morning they took Him to the governor, Pontius Pilate. Pilate found no fault in Him.'],
    ['r7','At Passover, Pilate would free one prisoner. He asked: Shall I free Jesus, or Barabbas, a famous criminal? The crowd shouted: Barabbas! Crucify Jesus!'],
    ['r8','Pilate washed his hands and said: I am innocent of the blood of this just Person. And he handed Jesus over.'],
   ]},

  {game:'order', chip:'Put it in order',
   intro:['order','Tap the pictures in the order they happened.'],
   cards:[
    {art:'table',cap:'Judas agreed for thirty silver coins',say:['o1','Judas agreed to betray Him.']},
    {art:'cup',cap:'The first Holy Communion',say:['o2','Jesus gave the first Holy Communion.']},
    {art:'soldier',cap:'Jesus was arrested in the garden',say:['o3','Jesus was arrested in the garden.']},
    {art:'bowl',cap:'Pilate washed his hands',say:['o4','Pilate washed his hands.']},
    {art:'calvary',cap:'Jesus was crucified',say:['o5','Jesus was crucified.']},
   ],
   done:['order-done','He did it all for us.']},

  {game:'read', chip:'Read', heading:'For our sake', pic:'calvary',
   paras:[
    ['r9','The soldiers mocked Jesus, struck Him, and put a crown of thorns on His head. They made Him carry the heavy cross.'],
    ['r10','They nailed His hands and feet to the cross at Golgotha. Jesus accepted all this for our sake.'],
    ['r11','He had taught: Greater love has no one than this, to lay down one\'s life for his friends. On the cross He showed us that love.'],
   ]},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Judas betrayed Jesus for thirty pieces of silver.',t:true,why:'He led the soldiers to Jesus with a kiss.',pic:'table'},
    {id:'t2',s:'Pilate found Jesus guilty.',t:false,why:'He found no fault in Him, but gave in to the crowd.',pic:'bowl'},
    {id:'t3',s:'Jesus suffered for our sake, because He loves us.',t:true,why:'For God so loved the world.',pic:'heart'},
   ],
   done:['tf-done','Well done!']},

  {game:'verse', chip:'Memory verse',
   verse:'For God so loved the world that He gave His only begotten Son.', ref:'John 3:16',
   chunks:['For God so loved the world','that He gave','His only begotten Son.'],
   intro:['verse-intro','Our memory verse is from the Gospel of John. Listen: For God so loved the world that He gave His only begotten Son. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who betrayed Jesus?',a:[['Judas Iscariot','disciple'],['Peter','peter'],['John','johnBaptist']],c:0},
    {id:'q2',q:'Whom did the crowd ask Pilate to free?',a:[['Barabbas','man'],['Jesus','jesus'],['Peter','peter']],c:0},
    {id:'q3',q:'Why did Jesus accept the cross?',a:[['Because He loves us','heart'],['He had no choice','chains'],['He was tired','bed']],c:0},
   ]},
 ]
});
