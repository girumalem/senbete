/* Level III (Grades 4-6), Easter season week 1: Christ Is Risen, Fasika (Matthew 28:1-10; Mark 16:1-8; Luke 24:5-6) */
BKLesson({
 id:'L3-eas1', title:'Christ Is Risen!', am:'ክርስቶስ ተንሥአ', sticker:'tomb',
 pages:[
  {game:'cover', bg:'sunrise', title:'Christ Is Risen!', am:'ክርስቶስ ተንሥአ',
   props:[{art:'tomb',x:140,y:440,s:.6},{art:'glory',x:640,y:290,s:1.2},{art:'jesus',x:640,y:430,s:.6}],
   say:['cover','[[selam]]! [[fasika]] is the greatest feast of all: Christ is risen from the dead! Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, Easter week 1: <b>Christ Is Risen</b> (Fasika; Matthew 28). Aim: learn about the resurrection of Jesus Christ and the first witnesses.</p><p>Talk about it: Why did the guards not stop the resurrection?</p>'},

  {game:'read', chip:'Read', heading:'Buried and guarded', pic:['tomb',{closed:true}],
   paras:[
    ['r1','After Pilate handed Jesus over, He was crucified on Friday. Joseph of Arimathea and Nicodemus took His body down, wrapped it in linen, and buried it in a tomb.'],
    ['r2','The leaders put soldiers to guard the tomb. They were afraid the disciples would steal the body and say that Jesus had risen.'],
   ]},

  {game:'story', bg:'sunrise', chip:'An earthquake at dawn',
   props:[{id:'closed',art:['tomb',{closed:true}],x:520,y:445,s:.75},{id:'open',art:'tomb',x:520,y:445,s:.75,hidden:true},{id:'g1',art:'soldier',x:300,y:440,s:.5},{id:'g2',art:'soldier',x:720,y:440,s:.5},{id:'glow',art:'glory',x:520,y:200,s:1,hidden:true},{id:'angel',art:'angel',x:520,y:300,s:.5,hidden:true}],
   beats:[
    {say:['s1','Early on Sunday morning, there was a great earthquake! Tap the tomb.'],tap:'closed'},
    {show:['glow','angel'],sfx:'glory',say:['s2','An angel of the Lord came down from heaven. His face was like lightning, and his clothes were white as snow.']},
    {hide:['closed'],show:['open'],sfx:'whoosh',say:['s3','He rolled back the stone from the door of the tomb, and sat on it.']},
    {move:{g1:[200,450,.45],g2:[790,450,.45]},say:['s4','The guards shook with fear and became like dead men.']},
   ]},

  {game:'read', chip:'Read', heading:'He is not here', pic:'angel',
   paras:[
    ['r3','Mary Magdalene and the other women came with perfume to anoint His body. They found the stone rolled away.'],
    ['r4','The angel said: Do not be afraid. I know you seek Jesus who was crucified. He is not here, for He is risen, as He said. Come, see the place where the Lord lay.'],
    ['r5','Go quickly and tell His disciples that He is risen from the dead!'],
    ['r6','As the women ran with great joy, Jesus Himself met them on the way! They worshipped Him, and He told them: Go and tell My brethren.'],
   ]},

  {game:'puzzle', chip:'Word puzzle',
   intro:['puzzle-intro','Word puzzle! Read the clue, then spell the answer.'],
   items:[
    {id:'w1',clue:'Mary ___ went to the tomb early on Sunday.',word:'Magdalene',pic:['woman',{robe:'#B3322A',netela:'#FFFFFF'}]},
    {id:'w2',clue:'The women brought perfume to ___ His body.',word:'anoint',pic:'jar'},
    {id:'w3',clue:'The angel rolled back the ___.',word:'stone',pic:['tomb',{closed:true}]},
    {id:'w4',clue:'Soldiers were set to ___ the tomb.',word:'guard',pic:'soldier'},
   ],
   done:['puzzle-done','You solved the puzzle!']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'The guards stopped the angel.',t:false,why:'They shook with fear and became like dead men.',pic:'soldier'},
    {id:'t2',s:'The women were the first to hear the good news.',t:true,why:'The angel sent them to tell the disciples.',pic:'woman'},
    {id:'t3',s:'Jesus met the women on their way.',t:true,why:'He told them: Go and tell My brethren.',pic:'jesus'},
   ],
   done:['tf-done','Well done!']},

  {game:'verse', chip:'Memory verse',
   verse:'Why do you seek the living among the dead? He is not here, but is risen!', ref:'Luke 24:5-6',
   chunks:['Why do you seek','the living among the dead?','He is not here,','but is risen!'],
   intro:['verse-intro','This month\'s memory verse is from the Gospel of Luke. Listen: Why do you seek the living among the dead? He is not here, but is risen! Now build it in order!'],
   done:['verse-done','Christ is risen! He is risen indeed!']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who buried Jesus?',a:[['Joseph of Arimathea and Nicodemus',['figure',{robe:'#8A5A30',beard:'dark'}]],['The soldiers','soldier'],['Pilate','king']],c:0},
    {id:'q2',q:'Who rolled away the stone?',a:[['An angel of the Lord','angel'],['The women','woman'],['The guards','soldier']],c:0},
    {id:'q3',q:'Who met the women on the way?',a:[['Jesus Himself','jesus'],['King Herod','king'],['Pilate','bowl']],c:0},
   ]},
 ]
});
