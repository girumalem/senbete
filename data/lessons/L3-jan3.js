/* Level III (Grades 4-6), January week 3: Epiphany, Timket (Matthew 3; Luke 3; John 1; John 3:5) */
BKLesson({
 id:'L3-jan3', title:'Timket: Jesus Is Baptized', am:'ጥምቀት', sticker:'dove',
 pages:[
  {game:'cover', bg:'river', title:'Timket', am:'ጥምቀት',
   props:[{art:'dove',x:640,y:130,s:.6},{art:'jesus',x:640,y:440,s:.6},{art:'johnBaptist',x:160,y:440,s:.6}],
   say:['cover','[[selam]]! At [[timket]], we remember the day Jesus was baptized in the Jordan River, and the Holy Trinity was revealed. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, January week 3: <b>Epiphany</b> (Timket, Tir 11). Aim: learn about the baptism of Christ and why we are baptized.</p><p>Talk about it: Do you know your baptismal name? Who is your godparent?</p>'},

  {game:'read', chip:'Read', heading:'Behold the Lamb of God', pic:'johnBaptist',
   paras:[
    ['r1','A man named John was preaching repentance and the coming of the kingdom of God. People asked him: Are you the Messiah? He said: No, I was sent to prepare His way.'],
    ['r2','When Jesus came to the Jordan, John said: Behold the Lamb of God, who takes away the sin of the world!'],
   ]},

  {game:'story', bg:'river', chip:'The heavens opened',
   props:[{id:'john',art:'johnBaptist',x:250,y:440,s:.6},{id:'jesus',art:'jesus',x:470,y:440,s:.6},{id:'glow',art:'glory',x:470,y:150,s:1,hidden:true},{id:'dove',art:'dove',x:470,y:170,s:.5,hidden:true}],
   beats:[
    {wiggle:['john'],say:['s1','John baptized Jesus in the Jordan River. Tap Jesus.'],tap:'jesus'},
    {show:['glow'],sfx:'glory',say:['s2','When Jesus came up out of the water, the heavens were opened.']},
    {show:['dove'],sfx:'glory',say:['s3','The Holy Spirit came down on Him like a dove. Tap the dove.'],tap:'dove'},
    {wiggle:['jesus'],fx:'confetti',say:['s4','And the voice of the Father said: This is My beloved Son, in whom I am well pleased. Father, Son and Holy Spirit: the Holy Trinity!']},
   ]},

  {game:'match', chip:'The Holy Trinity', heading:'Match each sign to who it shows',
   intro:['match-intro','At the baptism we see the Holy Trinity. Tap a sign, then tap who it shows.'],
   pairs:[['The voice from heaven','God the Father',null,'glory'],['Baptized in the river','God the Son',null,'jesus'],['Like a dove','God the Holy Spirit',null,'dove']],
   done:['match-done','One God in three persons!']},

  {game:'read', chip:'Read', heading:'Why we are baptized', pic:'church',
   paras:[
    ['r3','Jesus was baptized to give us an example, and to teach us humility.'],
    ['r4','Jesus said: Unless one is born of water and the Spirit, he cannot enter the kingdom of God. In baptism we are born again and become children of God.'],
    ['r5','In our Church, boys are baptized forty days after birth, and girls eighty days after birth.'],
    ['r6','A godfather or godmother promises to teach the child about Jesus Christ, and the child receives a baptismal name.'],
   ]},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'John said he was the Messiah.',t:false,why:'He said he was sent to prepare the way.',pic:'johnBaptist'},
    {id:'t2',s:'The Holy Spirit came down like a dove.',t:true,why:'And the Father spoke from heaven.',pic:'dove'},
    {id:'t3',s:'Girls are baptized eighty days after birth.',t:true,why:'Boys at forty days, girls at eighty days.',pic:'church'},
   ],
   done:['tf-done','Well done!']},

  {game:'verse', chip:'Memory verse',
   verse:'Unless one is born of water and the Spirit, he cannot enter the kingdom of God.', ref:'John 3:5',
   chunks:['Unless one is born','of water and the Spirit,','he cannot enter','the kingdom of God.'],
   intro:['verse-intro','Our memory verse is from the Gospel of John. Listen: Unless one is born of water and the Spirit, he cannot enter the kingdom of God. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Where was Jesus baptized?',a:[['The Jordan River','waterWall'],['The Red Sea','boat'],['A temple pool','pool']],c:0},
    {id:'q2',q:'What did the Father say?',a:[['This is My beloved Son','glory'],['Go to Egypt','pyramid'],['Build an ark','ark']],c:0},
    {id:'q3',q:'What do we receive at baptism?',a:[['New birth and a baptismal name','church'],['A crown','king'],['A sword','spear']],c:0},
   ]},
 ]
});
