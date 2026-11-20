/* Level IV (Grade 7 and up), Easter season week 1: Christ Is Risen (Matthew 26-28; Mark 16:1-8; Luke 24:1-12; John 15:12-13) */
BKLesson({
 id:'L4-eas1', title:'Christ Is Risen', am:'ፋሲካ', sticker:'tomb',
 pages:[
  {game:'cover', bg:'sunrise', title:'Christ Is Risen', am:'ፋሲካ',
   props:[{art:'tomb',x:400,y:440,s:.8},{art:'angel',x:600,y:430,s:.55},{art:'flowers',x:170,y:440,s:.7}],
   say:['cover','[[selam]]! Happy [[fasika]]! He was betrayed, judged and crucified. But on the third day, the tomb was empty. Today we follow the story from the night He was betrayed to the morning He rose.'],
   parent:'<p>This lesson follows Level IV, Easter season week 1: <b>Christ Is Risen</b> (Matthew 28; Mark 16; Luke 24). Aim: learn about the love of Christ in His crucifixion, and the joy of the Resurrection.</p><p>During Passion Week we do not greet one another with a kiss, remembering the kiss of Judas. At Fasika we greet each other again with joy.</p>'},

  {game:'story', bg:'night', chip:'A kiss in the garden',
   props:[{id:'jesus',art:'jesus',x:560,y:440,s:.6},{id:'judas',art:['figure',{robe:'#5B4D3C',sleeve:'#8A5A30',beard:'dark'}],x:150,y:440,s:.55},{id:'s1',art:'soldier',x:80,y:440,s:.45,hidden:true},{id:'s2',art:'soldier',x:220,y:440,s:.45,hidden:true}],
   beats:[
    {say:['j1','After the glorious entry, the chief priests met on Wednesday and plotted to capture Christ. Judas, one of the Twelve, agreed to hand Him over.']},
    {show:['s1','s2'],say:['j2','On Thursday night, after the Last Supper, Judas came with a crowd carrying swords. He had told them: The one I kiss is Jesus. Hold Him fast. Tap Judas.'],tap:'judas'},
    {move:{judas:[470,440]},say:['j3','Judas went up to Christ and kissed Him, and they took hold of Him. This is why, during Passion Week, we do not greet each other with a kiss.']},
   ]},

  {game:'choose', bg:'night', chip:'Peter\'s sword',
   props:[{id:'jesus',art:'jesus',x:400,y:440,s:.6},{id:'peter',art:'peter',x:600,y:440,s:.6},{id:'sw',art:'sword',x:660,y:360,s:.5},{id:'serv',art:['figure',{robe:'#3A3F4E',sleeve:'#3A3F4E'}],x:180,y:440,s:.55}],
   prompt:['p0','Peter was angry. He drew his sword and cut off the ear of the high priest\'s servant. What did Christ do?'],
   options:[
    {label:'Told Peter to fight harder',art:'sword',good:false,say:['p1','No. Christ never answered evil with evil. Try again.']},
    {label:'Told Peter to put his sword away, and healed the ear',art:'heart',then:{hide:['sw'],wiggle:['serv']},
     say:['p2','He said: Put your sword back in its place, for all who take the sword will perish by the sword. Then He healed the servant. We should not act in anger, but answer with love.']},
   ]},

  {game:'story', bg:'dark', chip:'He did not speak a word',
   props:[{id:'pil',art:['figure',{robe:'#B3322A',sleeve:'#FFFFFF',band:'#E2A62B'}],x:620,y:440,s:.6},{id:'crowd',art:'crowd',x:200,y:445,s:.6},{id:'cal',art:'calvary',x:400,y:440,s:.9,hidden:true}],
   beats:[
    {say:['g1','Early on Friday they brought Him to Pontius Pilate, the governor, and accused Him of calling Himself the Son of God and breaking the Sabbath. Tap Pilate.'],tap:'pil'},
    {wiggle:['crowd'],say:['g2','Pilate said: I find no fault in Him. But the chief priests and the crowd screamed: Crucify Him! After trying again and again to free Him, Pilate gave Him up.']},
    {hide:['pil','crowd'],show:['cal'],say:['g3','They made Him carry His cross to Golgotha, and crucified Him between two robbers. All that time, He did not speak a word against them.']},
    {say:['g4','After He died, Joseph of Arimathea and Nicodemus took His body down and buried it. The chief priests asked Pilate for guards, saying: His disciples may steal the body and say He is risen.']},
   ]},

  {game:'story', bg:'sunrise', chip:'The stone is rolled away',
   props:[{id:'shut',art:['tomb',{closed:true}],x:420,y:440,s:.8},{id:'open',art:'tomb',x:420,y:440,s:.8,hidden:true},{id:'g1',art:'soldier',x:150,y:440,s:.5},{id:'g2',art:'soldier',x:690,y:440,s:.5},{id:'fall1',art:'sleeper',x:150,y:440,s:.6,hidden:true},{id:'fall2',art:'sleeper',x:690,y:440,s:.6,hidden:true},{id:'ang',art:'angel',x:420,y:-100,s:.55}],
   beats:[
    {say:['e1','Early on Sunday, the third day, there was a great earthquake. An angel of the Lord came down from heaven. Tap the tomb.'],tap:'shut'},
    {move:{ang:[560,300]},fx:'flash',sfx:'glory',hide:['shut'],show:['open'],say:['e2','The angel rolled the stone away from the door of the tomb, and sat on it.']},
    {hide:['g1','g2'],show:['fall1','fall2'],say:['e3','The guards shook with fear and fell down like dead men.']},
   ]},

  {game:'drag', bg:'sunrise', chip:'The women at the tomb',
   props:[{id:'tomb',art:'tomb',x:560,y:440,s:.75},{id:'ang',art:'angel',x:720,y:420,s:.5,hidden:true},{id:'w1',art:['figure',{robe:'#24418F',sleeve:'#24418F',netela:'#FFFFFF'}],x:120,y:440,s:.5},{id:'w2',art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',netela:'#FFFFFF'}],x:200,y:440,s:.5}],
   items:[{art:'jar',x:290,y:430,s:.5,say:['w1','Spices to anoint His body.']},{art:'jar',x:350,y:430,s:.45,say:['w2','Sweet perfume.']}],
   zone:{x:440,y:250,w:260,h:200},
   after:{show:['ang']},
   intro:['w0','Mary Magdalene and the other women came very early, bringing spices to anoint the body of Christ. Drag the spices to the tomb.'],
   done:['w3','The tomb was empty! An angel in a long white robe said: Do not be afraid. You seek Jesus who was crucified. He is not here, for He is risen, as He said. Go quickly and tell His disciples.']},

  {game:'repeat', bg:'field', chip:'Run and tell!',
   props:[{id:'w1',art:['figure',{robe:'#24418F',sleeve:'#24418F',netela:'#FFFFFF'}],x:100,y:440,s:.5},{id:'w2',art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',netela:'#FFFFFF'}],x:170,y:440,s:.5},{id:'jesus',art:'jesus',x:720,y:440,s:.6,hidden:true},{id:'glow',art:'glory',x:720,y:300,s:.8,hidden:true}],
   button:{label:'Run!',art:'heart'},
   intro:['r0','The women ran from the tomb with fear and great joy, to bring the good news to the disciples. Tap to run with them.'],
   steps:[
    {move:{w1:[200,440],w2:[270,440]},say:['r1','Run! He is risen!']},
    {move:{w1:[560,440],w2:[630,440]},show:['jesus','glow'],sfx:'glory',say:['r2','On the way, Christ Himself met them! They fell down and worshipped Him.']},
    {wiggle:['jesus'],say:['r3','He said: Go, tell My brothers to go to Galilee, and there they will see Me.']},
   ],
   done:['r4','In Galilee He told them: Go and teach all nations, baptizing them in the name of the Father, and the Son, and the Holy Spirit. I am with you always, to the end of the world.']},

  {game:'verse', chip:'Memory verse',
   verse:'Why do you seek the living among the dead? He is not here, but is risen.', ref:'Luke 24:5-6',
   chunks:['Why do you seek','the living among the dead?','He is not here,','but is risen.'],
   intro:['verse-intro','Our memory verse is what the angels said to the women: Why do you seek the living among the dead? He is not here, but is risen. Build it in order.'],
   done:['verse-done','Christ is risen from the dead!']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who was the governor who handed Christ over to be crucified?',a:[['Pontius Pilate','king'],['Herod','pharaoh'],['Caiaphas','priest']],c:0},
    {id:'q2',q:'Why did the chief priests put guards at the tomb?',a:[['They feared the disciples would steal the body','soldier'],['To protect the flowers','flowers'],['To keep the women out','woman']],c:0},
    {id:'q3',q:'Who first told the women that Christ was risen?',a:[['An angel','angel'],['Pilate','king'],['The guards','soldier']],c:0},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Christ said: Love one another as I have loved you. No one has greater love than to give his life for his friends. What does that kind of love look like at home or at school?'],
    ['k2','Peter acted in anger with his sword. When you are angry, what can you do instead?','Stop, pray, and answer with love, as Christ taught.'],
    ['k3','The women ran to share the good news. Who can you share the joy of [[fasika]] with this week?'],
   ]},
 ]
});
