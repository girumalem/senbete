/* Level I, Easter season week 5: Jesus Sends His Disciples to Teach (Matthew 28:16-20) */
BKLesson({
 id:'L1-eas5', title:'Go and Teach Everyone', am:'ሂዱና አስተምሩ', sticker:'church',
 pages:[
  {game:'cover', bg:'mountain', title:'Go and Teach Everyone', am:'ሂዱና አስተምሩ',
   props:[{art:'jesus',x:400,y:400,s:.6},{art:'peter',x:220,y:440,s:.5},{art:'disciple',x:580,y:440,s:.5}],
   say:['cover','[[selam]]! After Jesus rose from the dead, He gave His disciples a very big job. Let\'s find out what it was! Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level I, Easter week 5: <b>Jesus Sends His Disciples to Teach</b> (Matthew 28:16-20). Aim: learn what Jesus told His disciples to do.</p><p>Talk about it: Where did the disciples meet Jesus? What did He tell them to do?</p>'},

  {game:'story', bg:'day', chip:'The tomb is empty',
   props:[{id:'tomb',art:'tomb',x:560,y:445,s:.7},{id:'w1',art:'woman',x:120,y:440,s:.5},{id:'peter',art:'peter',x:250,y:440,s:.55,hidden:true},{id:'john',art:['disciple',{robe:'#B3322A'}],x:330,y:440,s:.55,hidden:true}],
   beats:[
    {say:['e1','The women ran to tell the disciples what the angel said. Tap the woman!'],tap:'w1'},
    {show:['peter','john'],sfx:'whoosh',say:['e2','The disciples ran to the tomb as fast as they could!']},
    {wiggle:['tomb'],say:['e3','It was empty, just as the women said. Tap the empty tomb.'],tap:'tomb'},
    {say:['e4','The angel had said: go to Galilee. There you will see Him.']},
   ],
   parent:'<p>The disciples found the tomb empty and went to Galilee, as the angel and Jesus Himself had told the women.</p>'},

  {game:'drag', bg:'mountain', chip:'Off to Galilee',
   props:[{art:'jesus',x:620,y:400,s:.6}],
   zone:{x:470,y:280,w:300,h:170},
   items:[{art:'peter',x:90,y:440,s:.45},{art:'disciple',x:170,y:440,s:.45},{art:['disciple',{robe:'#B3322A'}],x:250,y:440,s:.45},{art:['disciple',{robe:'#8A5A30'}],x:330,y:440,s:.45}],
   intro:['galilee','Help the disciples walk to the mountain in Galilee to meet Jesus. Drag each one!'],
   done:['galilee-done','They saw Jesus, and they worshipped Him.']},

  {game:'story', bg:'mountain', chip:'Go and teach',
   props:[{id:'jesus',art:'jesus',x:400,y:400,s:.6},{art:'peter',x:200,y:440,s:.5},{art:'disciple',x:600,y:440,s:.5}],
   beats:[
    {wiggle:['jesus'],say:['g1','Jesus said: Go and teach all nations about Me. Tap Jesus.'],tap:'jesus'},
    {sfx:'glory',say:['g2','Baptize them in the name of the Father, and of the Son, and of the Holy Spirit.']},
    {fx:'confetti',say:['g3','And Jesus made a promise: I am with you always, to the end of the world.']},
   ],
   parent:'<p>"Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost... and, lo, I am with you alway." (Matthew 28:19-20)</p>'},

  {game:'tapmany', bg:'field', chip:'Churches everywhere',
   props:[],
   area:{x0:0,y0:250,x1:800,y1:450}, count:6, spawn:{art:'church',s:[.18,.25],anim:'bob'}, sfx:'note',
   progress:'*{n} more* churches!',
   intro:['churches','The disciples went everywhere and taught about Jesus. That is how the good news came to Ethiopia too! Tap to build six churches.'],
   done:['churches-done','Now there are churches all over the world, and we can learn about Jesus!']},

  {game:'quiz', questions:[
    {id:'q1',q:'What did the disciples find at the tomb?',a:[['It was empty','tomb'],['A lion','lion'],['A boat','boat']],c:0},
    {id:'q2',q:'What did Jesus tell the disciples to do?',a:[['Teach everyone','church'],['Go fishing','fish'],['Hide at home','tukul']],c:0},
    {id:'q3',q:'Jesus said: I am with you...',a:[['Always',['glory',{}]],['Only on Sunday','sun']],c:0},
   ]},
  {game:'song', song:'eyesus-christos-yewedenal-yi'},
 ]
});
