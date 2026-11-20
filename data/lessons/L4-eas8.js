/* Level IV (Grade 7 and up), Easter season week 8: The Temple That Became a Church (Synaxarium, Senne 12; Exodus 20:3)
   The idol is shown as a plain golden statue. */
BKLesson({
 id:'L4-eas8', title:'The Temple That Became a Church', am:'ቅዱስ ሚካኤል', sticker:'michael',
 pages:[
  {game:'cover', bg:'egypt', title:'The Temple That Became a Church', am:'ሰኔ ሚካኤል',
   props:[{art:'temple',x:330,y:440,s:.75},{art:'michael',x:600,y:440,s:.6},{art:'pyramid',x:110,y:440,s:.5}],
   say:['cover','[[selam]]! Every year on [[senne]] twelve, we celebrate [[kidus-mikael]]. Why that day? It began in Egypt, in a temple that was built for an idol.'],
   parent:'<p>This lesson follows Level IV, Easter season week 8: <b>The Temple That Became a Church</b> (Synaxarium, Senne 12). Aim: learn why St Michael is celebrated on Senne 12, and recognize modern forms of idol worship.</p><p>Connection: Queen Eleni, who found the True Cross (October lessons), was the mother of Emperor Constantine.</p>'},

  {game:'story', bg:'egypt', chip:'The idol Zuhal',
   props:[{id:'temple',art:'temple',x:420,y:440,s:.8},{id:'idol',art:['figure',{robe:'#B8902A',sleeve:'#B8902A',crown:true,closedEyes:true}],x:420,y:430,s:.4},{id:'crowd',art:'crowd',x:150,y:445,s:.6},{id:'goat',art:'goat',x:640,y:440,s:.45}],
   beats:[
    {say:['z1','In Alexandria, in Egypt, there was a temple built long before by Queen Cleopatra. Inside stood an idol called Zuhal. Tap the idol.'],tap:'idol'},
    {wiggle:['goat'],say:['z2','Every year, on [[senne]] twelve, the people offered animal sacrifices to it.']},
   ]},

  {game:'choose', bg:'egypt', chip:'Can the idol hear?',
   props:[{id:'idol',art:['figure',{robe:'#B8902A',sleeve:'#B8902A',crown:true,closedEyes:true}],x:600,y:430,s:.4},{id:'pope',art:['figure',{robe:'#3A3F4E',sleeve:'#E2A62B',beard:'white',cap:'#3A3F4E',staff:true}],x:200,y:440,s:.6},{id:'crowd',art:'crowd',x:400,y:445,s:.55}],
   prompt:['p0','In the fourth century, Pope Alexandros of Alexandria preached to the people about the idol. What did he teach them?'],
   options:[
    {label:'The idol is powerful, so keep feeding it',art:'goat',good:false,say:['p1','No! Try again.']},
    {label:'It cannot hear, think or speak, because human hands made it',art:'bible',then:{wiggle:['crowd']},
     say:['p2','He taught them about the prophecies of Christ, and how they all came true in His life on earth.']},
   ]},

  {game:'story', bg:'egypt', chip:'A church of St Michael',
   props:[{id:'king',art:'king',x:150,y:440,s:.55},{id:'scroll',art:'scroll',x:260,y:400,s:.5},{id:'temple',art:'temple',x:520,y:440,s:.8},{id:'idol',art:['figure',{robe:'#B8902A',sleeve:'#B8902A',crown:true,closedEyes:true}],x:520,y:430,s:.4},{id:'church',art:'church',x:520,y:440,s:.7,hidden:true},{id:'mik',art:'michael',x:700,y:440,s:.55,hidden:true}],
   beats:[
    {say:['c1','Before this, Christians had been cruelly persecuted. Then Emperor Constantine gave freedom to all Christians, and closed the pagan temples. Tap his decree.'],tap:'scroll'},
    {say:['c2','In that same year, Alexandros became Pope. Tap the idol.'],tap:'idol'},
    {hide:['idol'],sfx:'whoosh',say:['c3','He destroyed the statues of the idol.']},
    {hide:['temple'],show:['church','mik'],fx:'flash',sfx:'glory',say:['c4','And he consecrated the temple as a church of [[kidus-mikael]]. The people who had worshipped Zuhal became Christians.']},
   ]},

  {game:'collect', bg:'church', chip:'Feed the poor',
   props:[{id:'poor',art:'crowd',x:620,y:445,s:.6},{id:'church',art:'church',x:150,y:440,s:.5}],
   items:[[260,420],[320,440],[380,415],[440,438],[300,380],[400,380]].map(([x,y])=>({art:'bread',x,y,s:.4})),
   pile:{x:560,y:420,dx:40,dy:20,base:3,s:.4},
   intro:['f0','Instead of sacrifices to an idol, they now worshipped God, and gave their offerings to the poor. Tap or drag the bread to share it.'],
   done:['f1','Ever since, [[kidus-mikael]] is celebrated on [[senne]] twelve by worshipping God and feeding the poor.']},

  {game:'sort', chip:'Idols today',
   bins:[{label:'Worship God',art:'church'},{label:'Can become an idol',art:'darkCloud'}],
   intro:['s0','There are not many statues like Zuhal today. But anything we love more than God can become an idol. Sort these.'],
   items:[
    {t:'Loving money and things more than God',b:1},
    {t:'Thanking God in prayer every day',b:0},
    {t:'Following a music or sports star more than Christ',b:1},
    {t:'Honoring the saints and holy angels',b:0},
    {t:'Missing church for a game or a show',b:1},
    {t:'Feeding the poor on a feast day',b:0},
   ],
   done:['s1','When Pope Alexandros broke the idol, he also broke the love of things that are not God. Let us do the same in our hearts.']},

  {game:'verse', chip:'Memory verse',
   verse:'You shall have no other gods before Me.', ref:'Exodus 20:3',
   intro:['verse-intro','Our memory verse is the first of the Ten Commandments: You shall have no other gods before Me. Build it in order.'],
   done:['verse-done','God comes first, always.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who built the temple of Zuhal?',a:[['Queen Cleopatra','pyramid'],['King Solomon','temple'],['Pope Alexandros','priest']],c:0},
    {id:'q2',q:'Which emperor ended the persecution of Christians?',a:[['Constantine','king'],['Pharaoh','pharaoh'],['Herod','soldier']],c:0},
    {id:'q3',q:'Who was the mother of Constantine, who found the True Cross?',a:[['Queen [[eleni]]','cross'],['Queen Esther','scepter'],['Cleopatra','pyramid']],c:0},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Is there anything or anyone you love more than God? What could you do about it?'],
    ['k2','Who is your favorite saint? Why?'],
    ['k3','How does your family celebrate [[kidus-mikael]]\'s day?'],
   ]},
 ]
});
