/* Level IV (Grade 7 and up), January week 3: Epiphany, the Baptism of Christ (Matthew 3; Mark 1; Luke 3:21-23; John 1:29-34) */
BKLesson({
 id:'L4-jan3', title:'Epiphany', am:'ጥምቀት', sticker:'dove',
 pages:[
  {game:'cover', bg:'river', title:'Epiphany', am:'ጥምቀት',
   props:[{art:'jesus',x:380,y:440,s:.6},{art:'johnBaptist',x:200,y:440,s:.6},{art:'dove',x:380,y:150,s:.6},{art:'glory',x:380,y:110,s:.8}],
   say:['cover','[[selam]]! On [[timket]], the whole of Ethiopia goes down to the water. Today we learn what happened at the Jordan River, and why it is called Epiphany.'],
   parent:'<p>This lesson follows Level IV, January week 3: <b>Epiphany</b> (Matthew 3; Mark 1; Luke 3; John 1). Aim: learn about the Baptism of Jesus Christ, and the purpose of His Baptism.</p><p>Timket is celebrated on Tir 11 (January 19). If you can, go to the Timket procession together.</p>'},

  {game:'story', bg:'river', chip:'A voice in the wilderness',
   props:[{id:'john',art:'johnBaptist',x:250,y:440,s:.6},{id:'crowd',art:'crowd',x:560,y:445,s:.75}],
   beats:[
    {say:['v1','John, the son of the priest Zachariah and Elizabeth, preached by the Jordan River: Repent, for the kingdom of heaven is at hand! Tap John.'],tap:'john'},
    {wiggle:['crowd'],say:['v2','When people asked who he was, he said: I am the voice of one crying in the wilderness: Make straight the way of the Lord.']},
    {say:['v3','He said: I baptize you with water for repentance, but He who comes after me is mightier than I. I am not worthy to carry His sandals.']},
   ]},

  {game:'choose', bg:'river', chip:'Who should baptize whom?',
   props:[{id:'john',art:'johnBaptist',x:250,y:440,s:.6},{id:'jesus',art:'jesus',x:540,y:440,s:.6}],
   prompt:['c0','When Jesus was thirty years old, He came from Galilee to be baptized by John. John tried to stop Him: I need to be baptized by You! What did Jesus answer?'],
   options:[
    {label:'You are right. I will baptize you instead.',art:'darkCloud',good:false,say:['c1','No, He did not. Try again.']},
    {label:'Permit it to be so now, for it is fitting for us to fulfill all righteousness.',art:'dove',then:{move:{jesus:[400,460]}},
     say:['c2','The Creator of heaven and earth went to His servant to be baptized. He taught us humility, and John showed us obedience.']},
   ]},

  {game:'story', bg:'river', chip:'The heavens opened',
   props:[{id:'jesus',art:'jesus',x:400,y:460,s:.6},{id:'john',art:'johnBaptist',x:230,y:440,s:.6},{id:'glow',art:'glory',x:400,y:110,s:1,hidden:true},{id:'dove',art:'dove',x:400,y:100,s:.6,hidden:true}],
   beats:[
    {say:['b1','John baptized Jesus. When He came up out of the water, the heavens were opened. Tap the sky.'],tap:'any'},
    {show:['glow'],fx:'flash',sfx:'glory',say:['b2','A voice came from heaven: This is My beloved Son, in whom I am well pleased. That was God the Father.']},
    {show:['dove'],move:{dove:[400,280]},say:['b3','The Holy Spirit came down upon Him like a dove.']},
    {wiggle:['jesus'],say:['b4','And the Son stood in the Jordan. Father, Son and Holy Spirit were all revealed at once. That is why we call it Epiphany, which means manifestation.']},
   ]},

  {game:'match', chip:'The Holy Trinity revealed',
   heading:'Match each Person of the Holy Trinity to how He was revealed',
   intro:['m0','Match each Person of the Holy Trinity to how He was revealed at the Jordan.'],
   pairs:[
    ['God the Father','A voice from heaven: This is My beloved Son'],
    ['God the Son','Baptized in the Jordan River'],
    ['God the Holy Spirit','Came down like a dove'],
   ],
   done:['m1','One God in three Persons: Father, Son and Holy Spirit.']},

  {game:'repeat', bg:'river', chip:'Timket',
   props:[{id:'pr',art:'priest',x:90,y:440,s:.5},{id:'cr',art:'procCross',x:170,y:430,s:.45},{id:'crowd',art:'crowd',x:40,y:445,s:.5},{id:'glow',art:'glory',x:620,y:300,s:.8,hidden:true}],
   button:{label:'Walk with the Tabot',art:'procCross'},
   intro:['p0','On the eve of [[timket]], the [[tabot]] of every church is carried in procession to the water, with hymns, drums and white [[netela]]. Tap to walk with the procession.'],
   steps:[
    {move:{pr:[200,440],cr:[240,430],crowd:[140,445]},say:['p1','The priests sing, and the people follow.']},
    {move:{pr:[580,440],cr:[640,430],crowd:[530,445]},say:['p2','They pray through the night by the water.']},
    {move:{pr:[660,440],cr:[720,430],crowd:[600,445]},say:['p3','In the morning, the water is blessed.']},
   ],
   final:{label:'Sprinkle the water!',art:'dove',prompt:['p4','Tap to sprinkle the holy water on the people!'],show:['glow'],fx:'flash',sfx:'glory',say:['p5','We remember our own baptism, and give thanks.']},
   done:['p6','On [[tir]] eleven, the [[tabot]] goes home with joyful singing and dancing.']},

  {game:'verse', chip:'Memory verse',
   verse:'I indeed baptize you with water for repentance, but He who is coming after me is mightier than I, whose sandals I am not worthy to carry. He will baptize you with the Holy Spirit and fire.', ref:'Matthew 3:11',
   chunks:['I indeed baptize you','with water for repentance,','but He who is coming after me','is mightier than I,','whose sandals','I am not worthy to carry.','He will baptize you','with the Holy Spirit and fire.'],
   intro:['verse-intro','Our memory verse is what John said: I indeed baptize you with water for repentance, but He who is coming after me is mightier than I, whose sandals I am not worthy to carry. He will baptize you with the Holy Spirit and fire. Build it in order.'],
   done:['verse-done','A long verse. Well done!']},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Why was Christ baptized, when He had no sin?','To reveal the Holy Trinity, to give us an example, and to fulfill the prophecies.'],
    ['k2','Christ taught by example, not just by words. Where can you be an example to others this week?'],
    ['k3','Repentance means real sorrow for sin and a decision to turn back to God. What helps you repent?'],
   ]},
 ]
});
