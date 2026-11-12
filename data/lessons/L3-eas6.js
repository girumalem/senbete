/* Level III (Grades 4-6), Easter season week 6: The Ascension, Erget (Mark 16:19; Luke 24:50; Acts 1:6-11; Acts 1:8) */
BKLesson({
 id:'L3-eas6', title:'Witnesses to the World', am:'ዕርገት', sticker:'cloud',
 pages:[
  {game:'cover', bg:'heaven', title:'Witnesses to the World', am:'ዕርገት',
   props:[{art:'jesus',x:640,y:300,s:.5},{art:'cloud',x:640,y:320,s:1.2},{art:'peter',x:150,y:440,s:.5},{art:'disciple',x:240,y:440,s:.5}],
   say:['cover','[[selam]]! Before He went up to heaven, Jesus gave His disciples a great mission. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, Easter week 6: <b>The Ascension</b> (Erget, 40 days after Fasika; Acts 1:6-11). Aim: learn about Christ\'s ascension and His Great Commission.</p><p>Talk about it: How did the Gospel reach Ethiopia, and reach you?</p>'},

  {game:'read', chip:'Read', heading:'Forty days of teaching', pic:'scroll',
   paras:[
    ['r1','For forty days after His resurrection, Jesus appeared to His disciples and taught them about the kingdom of God.'],
    ['r2','He opened their minds to understand everything the Scriptures had written about Him.'],
    ['r3','He commanded them: Go and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Spirit. Teach them to keep all that I have commanded you. And I am with you always.'],
   ]},

  {game:'story', bg:'mountain', chip:'Taken up',
   props:[{id:'jesus',art:'jesus',x:400,y:420,s:.6},{id:'cloud',art:'cloud',x:400,y:200,s:1.2,hidden:true},{id:'peter',art:'peter',x:170,y:440,s:.5},{id:'d1',art:'disciple',x:630,y:440,s:.5},{id:'a1',art:'angel',x:290,y:440,s:.5,hidden:true},{id:'a2',art:'angel',x:510,y:440,s:.5,hidden:true}],
   beats:[
    {wiggle:['jesus'],say:['s1','On the fortieth day, they gathered with Jesus on the Mount of Olives. He said: You shall be My witnesses, to the ends of the earth. Tap Jesus.'],tap:'jesus'},
    {move:{jesus:[400,200,.5]},sfx:'glory',say:['s2','As He spoke, He was lifted up from the ground.']},
    {show:['cloud'],hide:['jesus'],say:['s3','A cloud received Him out of their sight.']},
    {show:['a1','a2'],sfx:'glory',say:['s4','Two angels in white said: Why do you stand looking up into heaven? This same Jesus will come in the same way as you saw Him go.']},
    {wiggle:['peter','d1'],say:['s5','Comforted, the disciples returned to Jerusalem with great joy.']},
   ]},

  {game:'read', chip:'Read', heading:'The mission continues', pic:'bible',
   paras:[
    ['r4','We have the Bible stories today because the disciples obeyed: they preached and wrote about the life, death, resurrection and ascension of Christ.'],
    ['r5','They passed on His commandments in writing and through the Tradition of the Church. So we should try to keep all of His commandments.'],
    ['r6','Long ago, the Gospel reached Ethiopia too. Now we are His witnesses where we live.'],
   ]},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Jesus ascended on the fortieth day after His resurrection.',t:true,why:'We celebrate Erget on that day.',pic:'cloud'},
    {id:'t2',s:'Jesus told the disciples to keep the Gospel a secret.',t:false,why:'He said: Go and teach all nations.',pic:'bible'},
    {id:'t3',s:'The angels said Jesus will come again the same way.',t:true,why:'He will come again in glory.',pic:'angel'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'Jesus ascended from the Mount of ___.',a:'Olives',opts:['Sinai','Tabor']},
    {id:'f2',s:'Baptize them in the name of the Father, the Son and the Holy ___.',a:'Spirit',opts:['Church','Angels']},
    {id:'f3',s:'A ___ received Him out of their sight.',a:'cloud',opts:['chariot','bird']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'You shall be witnesses to Me in Jerusalem, and in all Judea and Samaria, and to the end of the earth.', ref:'Acts 1:8',
   chunks:['You shall be witnesses to Me','in Jerusalem,','and in all Judea and Samaria,','and to the end of the earth.'],
   intro:['verse-intro','Our memory verse is from the Acts of the Apostles. Listen: You shall be witnesses to Me in Jerusalem, and in all Judea and Samaria, and to the end of the earth. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'What did Jesus command the disciples?',a:[['Teach and baptize all nations','bible'],['Build a temple','temple'],['Go fishing','net']],c:0},
    {id:'q2',q:'Who spoke to the disciples after He ascended?',a:[['Two angels in white','angel'],['Two soldiers','soldier'],['Two kings','king']],c:0},
    {id:'q3',q:'Why do we have the Gospels today?',a:[['The disciples preached and wrote them','scroll'],['A king found them','king'],['They fell from the sky','cloud']],c:0},
   ]},
 ]
});
