/* Level IV (Grade 7 and up), Easter season week 4: Jesus' Disciples (Matthew 4:18-22; 9:9-13; 16:18; John 1:43-51; Acts 1:8, 1:26; Ephesians 2:19-20)
   The list and the identification of Nathanael follow the lesson book. */
BKLesson({
 id:'L4-eas4', title:'The Twelve Disciples', am:'ሐዋርያት', sticker:'net',
 pages:[
  {game:'cover', bg:'lake', title:'The Twelve Disciples', am:'ሐዋርያት',
   props:[{art:'jesus',x:400,y:440,s:.6},{art:'crowd',x:180,y:445,s:.6},{art:'crowd',x:630,y:445,s:.6},{art:'boat',x:640,y:300,s:.4}],
   say:['cover','[[selam]]! Christ did not choose kings or rich men to be His disciples. He chose fishermen, a tax collector, ordinary people. Today we meet all twelve.'],
   parent:'<p>This lesson follows Level IV, Easter season week 4: <b>Jesus\' Disciples</b>. Aim: know the twelve disciples and how Jesus called them.</p><p>The names and stories follow the lesson book, including Matthias, who was chosen in place of Judas.</p>'},

  {game:'story', bg:'lake', chip:'Fishers of men',
   props:[{id:'boat',art:'boat',x:520,y:340,s:.8,anim:'sway'},{id:'pet',art:'peter',x:470,y:300,s:.4},{id:'and',art:['figure',{robe:'#2F7A4E',sleeve:'#2F7A4E',beard:'dark'}],x:570,y:300,s:.4},{id:'jesus',art:'jesusWalk',x:130,y:440,s:.6}],
   beats:[
    {say:['f1','Simon and his brother Andrew were fishing on the Sea of Galilee. Tap the boat.'],tap:'boat'},
    {wiggle:['jesus'],say:['f2','Christ called to them: Follow Me, and I will make you fishers of men.']},
    {move:{pet:[260,440,.55],and:[340,440,.55]},say:['f3','At once they left their nets and followed Him. Christ gave Simon a new name, Peter, which means rock. He said: On this rock I will build My Church.']},
    {say:['f4','Then He called two more brothers, James and John, the sons of Zebedee, who were mending nets with their father.']},
   ]},

  {game:'choose', bg:'field', chip:'Under the fig tree',
   props:[{id:'tree',art:'figTree',x:620,y:440,s:.8},{id:'nat',art:['figure',{robe:'#8A5A30',sleeve:'#8A5A30',beard:'dark'}],x:620,y:440,s:.5},{id:'phil',art:'disciple',x:400,y:440,s:.55},{id:'jesus',art:'jesus',x:150,y:440,s:.6}],
   prompt:['n0','Philip told his friend Nathanael: We have found the One Moses and the prophets wrote about! Nathanael doubted. Philip said: Come and see. When Christ saw him, He said: Here is a true Israelite, with no deceit. How do you know me? asked Nathanael. What did Christ answer?'],
   options:[
    {label:'Philip told Me about you',art:'disciple',good:false,say:['n1','No. Christ already knew him. Try again.']},
    {label:'Before Philip called you, under the fig tree, I saw you',art:'figTree',then:{move:{nat:[260,440]}},
     say:['n2','Nathanael cried: You are the Son of God! You are the King of Israel! And he followed Him from that day.']},
   ]},

  {game:'collect', bg:'field', chip:'Call the Twelve',
   props:[{id:'jesus',art:'jesus',x:400,y:280,s:.42}],
   items:['Peter','Andrew','James, son of Zebedee','John','James, son of Alphaeus','Philip','Nathanael','Thaddeus','Bartholomew','Matthew','Thomas','Matthias'].map((n,i)=>({art:'disciple',x:70+(i%6)*132,y:i<6?440:345,s:.3,say:['a'+(i+1),n]})),
   slots:[[130,170,.26],[200,170,.26],[270,170,.26],[530,170,.26],[600,170,.26],[670,170,.26],[130,255,.26],[200,255,.26],[270,255,.26],[530,255,.26],[600,255,.26],[670,255,.26]],
   intro:['a0','Tap each disciple to hear his name and bring him to Christ.'],
   done:['a13','Twelve! Matthias was chosen by the disciples, with prayer, in place of Judas who betrayed Christ.']},

  {game:'match', chip:'Who is who?',
   heading:'Match each disciple to his story',
   intro:['m0','Match each disciple to his story.'],
   pairs:[
    ['Peter','His name means rock'],
    ['Andrew','Peter\'s brother, also a fisherman'],
    ['Matthew','A tax collector who got up and followed at once'],
    ['Thomas','Would not believe Christ was risen until he saw Him'],
    ['Bartholomew','Sold as a slave, he preached until his martyrdom in Armenia'],
    ['Matthias','Chosen in place of Judas'],
   ],
   done:['m1','When people complained that Christ ate at Matthew\'s house with sinners, He said: I did not come to call the righteous, but sinners, to repentance.']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf0','True or false?'],
   items:[
    {id:'t1',s:'Two of the disciples were named James.',t:true,why:'James the son of Zebedee, and James the son of Alphaeus.'},
    {id:'t2',s:'Christ chose His disciples from the rich and powerful.',t:false,why:'He chose humble, hardworking people.'},
    {id:'t3',s:'James and John were brothers.',t:true,why:'They were the sons of Zebedee.'},
    {id:'t4',s:'The disciples stopped preaching when they were put in prison.',t:false,why:'They kept preaching, and were glad to suffer for His name.'},
   ]},

  {game:'verse', chip:'Memory verse',
   verse:'You shall be witnesses unto Me both in Jerusalem, and in all Judea, and in Samaria, and unto the uttermost part of the earth.', ref:'Acts 1:8',
   chunks:['You shall be witnesses unto Me','both in Jerusalem,','and in all Judea, and in Samaria,','and unto the uttermost part of the earth.'],
   intro:['verse-intro','Our memory verse: You shall be witnesses unto Me both in Jerusalem, and in all Judea, and in Samaria, and unto the uttermost part of the earth. Build it in order.'],
   done:['verse-done','Our faith is built on the foundation of the apostles and prophets.']},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Christ chose ordinary, humble people. What does that tell you about whether He can use you?'],
    ['k2','Philip did not argue with Nathanael. He just said: Come and see. How can you invite a friend to come and see?'],
    ['k3','Which disciple is your favorite, and why?'],
   ]},
 ]
});
