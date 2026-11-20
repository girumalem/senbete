/* Level IV (Grade 7 and up), August week 2: Abune Aregawi (Acts of Abune Aregawi; 1 Corinthians 16:13) */
BKLesson({
 id:'L4-aug2', title:'Abune Aregawi', am:'አቡነ አረጋዊ', sticker:'amba',
 pages:[
  {game:'cover', bg:'mountain', title:'Abune Aregawi', am:'አቡነ አረጋዊ',
   props:[{art:'amba',x:420,y:440,s:.9},{art:['figure',{robe:'#E2A62B',sleeve:'#E2A62B',beard:'white',cap:'#3A3F4E',halo:true,staff:true}],x:150,y:440,s:.55}],
   say:['cover','[[selam]]! Long ago, nine holy monks came to Ethiopia and built monasteries that still stand today. One of them climbed a cliff where no one could climb. This is [[abune-aregawi]] of [[debre-damo]].'],
   parent:'<p>This lesson follows Level IV, August week 2: <b>Abune Aregawi</b> (Acts of Abune Aregawi). Aim: learn the life of Abune Aregawi, one of the Nine Saints.</p><p>To this day, Debre Damo in Tigray can only be reached by climbing a leather rope up the cliff.</p>'},

  {game:'story', bg:'church', chip:'A young monk',
   props:[{id:'boy',art:['figure',{kind:'teen',robe:'#FFFFFF',sleeve:'#FFFFFF'}],x:250,y:440,s:.55},{id:'monk',art:['figure',{kind:'teen',robe:'#E2A62B',sleeve:'#E2A62B',cap:'#3A3F4E'}],x:250,y:440,s:.55,hidden:true},{id:'abba',art:['figure',{robe:'#3A3F4E',sleeve:'#3A3F4E',beard:'white',cap:'#3A3F4E',staff:true}],x:520,y:440,s:.6},{id:'f1',art:['figure',{robe:'#E2A62B',sleeve:'#E2A62B',cap:'#3A3F4E',beard:'dark'}],x:640,y:440,s:.45,hidden:true},{id:'f2',art:['figure',{robe:'#E2A62B',sleeve:'#E2A62B',cap:'#3A3F4E',beard:'dark'}],x:720,y:440,s:.45,hidden:true}],
   beats:[
    {say:['y1','His Christian parents named him [[zemikael]], which means of Michael. He gave up his home and his inheritance, and went to serve God under a monk, Abba Pachomius. Tap the young man.'],tap:'boy'},
    {hide:['boy'],show:['monk'],say:['y2','Abba Pachomius warned him how hard the monastic life is. But he would not turn back. He became a monk at only fourteen.']},
    {show:['f1','f2'],say:['y3','Friends followed him into the monastery. Because he was so wise, though young, they called him [[abune-aregawi]], our father the elder. Even his mother became a nun.']},
   ]},

  {game:'story', bg:'sunrise', chip:'Nine saints for Ethiopia',
   props:[{id:'monks',art:'crowd',x:200,y:445,s:.6},{id:'glow',art:'glory',x:560,y:220,s:.8,hidden:true},{id:'ch',art:'church',x:600,y:440,s:.45,hidden:true}],
   beats:[
    {say:['e1','[[abune-aregawi]] had a vision of Ethiopia, a land that had accepted Christ even before the apostles preached there. Tap the monks.'],tap:'monks'},
    {show:['glow'],say:['e2','He and his friends decided to live their monastic life in Ethiopia. They sent for one more friend, Isaac, from Rome. Now they were nine.']},
    {show:['ch'],say:['e3','They did not want to live together in comfort. Each went to the place God prepared for him, and founded a monastery. They embraced the language and the culture, and became Ethiopia\'s own.']},
   ]},

  {game:'tapmany', bg:'mountain', chip:'Half a loaf',
   props:[{id:'monk',art:['figure',{robe:'#E2A62B',sleeve:'#E2A62B',beard:'white',cap:'#3A3F4E',staff:true}],x:150,y:440,s:.55},{id:'amba',art:'amba',x:540,y:440,s:.8}],
   area:{x0:220,y0:320,x1:700,y1:440}, count:3, spawn:{art:'bread',s:[.3,.35]},
   at:{3:{move:{monk:[440,240,.4]}}},
   intro:['l0','He walked north of [[aksum]] looking for a place to pray. At each place he ate one loaf of bread, but was never full, so he knew God\'s blessing was not there. Tap three times to look in three places.'],
   done:['l1','Then he saw [[debre-damo]], a mountain surrounded by cliffs. He loved it, but there was no way up.']},

  {game:'hold', bg:'mountain', chip:'Up the cliff',
   props:[{id:'amba',art:['amba',{rope:false}],x:520,y:440,s:.9},{id:'monk',art:['figure',{robe:'#E2A62B',sleeve:'#E2A62B',beard:'white',cap:'#3A3F4E',arms:'pray'}],x:200,y:440,s:.5},{id:'mik',art:'michael',x:200,y:-120,s:.5},{id:'snake',art:'snake',x:900,y:430,s:.8}],
   target:'monk', ms:6500, label:'Pray',
   intro:['c0','He prayed at the foot of the cliff. Press and hold to pray with him.'],
   at:[{p:.3,move:{mik:[120,250]},sfx:'glory',say:['c1','The Archangel Michael appeared, and told him God would send a great snake to lift him to the top.']},{p:.65,move:{snake:[330,430]},say:['c2','After two weeks of prayer, a huge snake came.']}],
   after:{move:{monk:[470,230,.4],snake:[520,300,.7]}},
   done:['c3','It carried him to the top! There he ate, and was full with only half a loaf. He knew God\'s blessing was in this place.']},

  {game:'order', chip:'Debre Damo',
   intro:['o0','Tap the story of [[debre-damo]] in order.'],
   cards:[
    {art:'amba',cap:'People come and make a rope to climb',say:['o1','People came from all over to see the miracles, and made a rope to climb. It is still the only way up.']},
    {art:'church',cap:'King Gebre Meskel builds a church',say:['o2','King [[gebre-meskel]] built stairs, built a beautiful church, then took the stairs away.']},
    {art:'begena',cap:'Saint Yared praises the place',say:['o3','[[kidus-yared]] visited and praised it as a place angels would always visit.']},
    {art:'sword',cap:'King Kaleb asks for a blessing',say:['o4','King [[kaleb]] came for a blessing before going to Yemen to defend persecuted Christians. He won, and later became a monk.']},
    {art:'glory',cap:'At ninety-nine, he is taken like Enoch',say:['o5','At ninety-nine years old, [[abune-aregawi]] disappeared in a cave of [[debre-damo]], like Enoch in Genesis.']},
   ],
   done:['o6','May the blessing of [[abune-aregawi]] be with us all.']},

  {game:'verse', chip:'Memory verse',
   verse:'Stand fast in the faith.', ref:'1 Corinthians 16:13',
   intro:['verse-intro','Our memory verse: Stand fast in the faith. Build it in order.'],
   done:['verse-done','Ethiopia was a safe home for Christians because of this faith. It is still a safe home for us.']},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','The nine saints came from far away, but became Ethiopia\'s own. What do you love about our Church\'s traditions?'],
    ['k2','[[abune-aregawi]] gave up comfort to be close to God. What comfort could you give up for a day, to pray more?'],
    ['k3','Who else in the Bible was taken by God without dying?','Enoch, and the prophet Elijah.'],
   ]},
 ]
});
