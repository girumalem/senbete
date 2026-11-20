/* Level IV (Grade 7 and up), Easter season week 3: Saint George (Miracles of St George; 1 Corinthians 1:18; James 5:7-13; Philippians 4:13) */
BKLesson({
 id:'L4-eas3', title:'Saint George', am:'ቅዱስ ጊዮርጊስ', sticker:'george',
 pages:[
  {game:'cover', bg:'field', title:'Saint George', am:'ቅዱስ ጊዮርጊስ',
   props:[{art:'horse',x:330,y:440,s:.8},{art:'george',x:330,y:330,s:.5},{art:'dragon',x:600,y:440,s:.6}],
   say:['cover','[[selam]]! Every Ethiopian child knows the picture of [[kidus-giyorgis]] on his white horse. Today we learn the story behind it, and how he stayed patient and faithful to the end.'],
   parent:'<p>This lesson follows Level IV, Easter season week 3: <b>Saint George</b> (Miracles of St George). Aim: learn patience, perseverance and the power of the Cross from his life.</p><p>His martyrdom is remembered on Miyazya 23, and his monthly feast on the 23rd of every month.</p>'},

  {game:'story', bg:'field', chip:'A boy from Lydda',
   props:[{id:'fam',art:'family',x:200,y:440,s:.6},{id:'boy',art:'boy',x:400,y:440,s:.55},{id:'man',art:'george',x:400,y:440,s:.55,hidden:true},{id:'city',art:'city',x:680,y:440,s:.5}],
   beats:[
    {say:['b1','[[kidus-giyorgis]] was born in Lydda, in a God-fearing Christian family. His father was the governor of the region. Tap the family.'],tap:'fam'},
    {wiggle:['boy'],say:['b2','His parents raised him with Christian faith and good morals.']},
    {hide:['boy'],show:['man'],move:{man:[560,440]},say:['b3','When he was twenty years old, he traveled to the city of Beirut. The people there worshipped a huge snake, a dragon.']},
    {say:['b4','Every year, each family had to give a daughter to the dragon. When every family had given one, they told the governor: We have no more to give. We must leave Beirut, or the dragon will kill us.']},
   ]},

  {game:'choose', bg:'field', chip:'The girl by the tree',
   props:[{id:'tree',art:'acacia',x:560,y:440,s:.8},{id:'girl',art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',crown:true,longHair:true}],x:560,y:440,s:.5},{id:'horse',art:'horse',x:220,y:440,s:.7},{id:'geo',art:'george',x:220,y:340,s:.45}],
   prompt:['c0','The governor said: Do not fear, I will give my own daughter. She was tied to a tree outside the city. When [[kidus-giyorgis]] passed by, she told him: Go quickly, before the dragon comes and kills you too. What did he do?'],
   options:[
    {label:'Rode away to save himself',art:'horse',good:false,say:['c1','No, [[kidus-giyorgis]] was not afraid. Try again.']},
    {label:'Stayed, trusting in God',art:'cross',then:{wiggle:['geo']},
     say:['c2','He stayed, and listened as she told him all the customs of Beirut. He trusted God more than he feared the dragon.']},
   ]},

  {game:'story', bg:'field', chip:'The sign of the Cross',
   props:[{id:'horse',art:'horse',x:220,y:440,s:.7},{id:'geo',art:'george',x:220,y:340,s:.45},{id:'drag',art:'dragon',x:600,y:440,s:.75},{id:'glow',art:'glory',x:400,y:250,s:.8,hidden:true},{id:'cr',art:['cross',{c:'#E2A62B'}],x:400,y:250,s:1,hidden:true}],
   beats:[
    {move:{drag:[520,420,.8]},sfx:'whoosh',say:['x1','Then the dragon came! When it saw [[kidus-giyorgis]], it raised its head to kill him.']},
    {show:['glow','cr'],say:['x2','[[kidus-giyorgis]] made the sign of the cross in front of it. Tap the cross.'],tap:'cr'},
    {move:{drag:[600,450,.6]},fx:'flash',sfx:'glory',say:['x3','The dragon became weak, and fell to the ground!']},
    {say:['x4','The power of God against evil is shown by the sign of the Cross. Saint Paul wrote: The preaching of the cross is the power of God to us who are saved.']},
   ]},

  {game:'drag', bg:'egypt', chip:'Into the city',
   props:[{id:'city',art:'city',x:640,y:440,s:.6},{id:'crowd',art:'crowd',x:700,y:445,s:.55},{id:'geo',art:'george',x:120,y:440,s:.5},{id:'girl',art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',crown:true,longHair:true}],x:190,y:440,s:.45}],
   items:[{art:'dragon',x:300,y:440,s:.5,to:[480,440,.5]}],
   zone:{x:400,y:250,w:220,h:200},
   intro:['dr0','[[kidus-giyorgis]] untied the governor\'s daughter, and had her pull the weak dragon into the city with a rope. Drag the dragon to the city.'],
   done:['dr1','The people were terrified: Do not bring our god into the city! He told them: This is no god. It has no power over you. Believe in Jesus Christ. Then he killed it with his spear, and they all became Christians.']},

  {game:'read', auto:false, chip:'Read', heading:'Lessons from his life', pic:'george',
   intro:['read-intro','Read these lessons. Tap any paragraph to hear it.'],
   paras:[
    ['r1','*He gave up everything.* [[kidus-giyorgis]] could have been rich, and a governor. He gave it all up for Christ, and stood up to kings who forced people to worship idols.'],
    ['r2','*He was patient to the end.* He suffered many cruel punishments, but he did not give up, and he brought many people to Christ. He became a martyr on [[miyazya]] twenty-three. Saint James wrote: Be patient until the coming of the Lord.'],
    ['r3','*He prayed in suffering.* Saint James also wrote: Is anyone among you suffering? Let him pray. [[kidus-giyorgis]] could bear his suffering because he always prayed.'],
   ]},

  {game:'repeat', bg:'sunrise', chip:'Through Christ',
   props:[{id:'boy',art:['figure',{kind:'teen',robe:'#24418F',sleeve:'#24418F'}],x:160,y:440,s:.6},{id:'girl',art:['figure',{kind:'teen',robe:'#FFFFFF',sleeve:'#FFFFFF',netela:'#E2A62B'}],x:650,y:440,s:.6},{id:'glow',art:'glory',x:400,y:170,s:.8}],
   button:{label:'Through Christ!',art:'cross'},
   intro:['i0','Saint Paul said: I can do all things through Christ who strengthens me. Tap and say it after each one.'],
   steps:[
    {wiggle:['boy','girl'],say:['i1','I can be patient, through Christ who strengthens me.']},
    {wiggle:['boy','girl'],say:['i2','I can love everybody, through Christ who strengthens me.']},
    {wiggle:['boy','girl'],say:['i3','I can change my bad habits, through Christ who strengthens me.']},
   ],
   done:['i4','What else can you do through Christ who strengthens you?']},

  {game:'verse', chip:'Memory verse',
   verse:'Is anyone among you suffering? Let him pray. Is anyone cheerful? Let him sing psalms.', ref:'James 5:13',
   chunks:['Is anyone among you suffering?','Let him pray.','Is anyone cheerful?','Let him sing psalms.'],
   intro:['verse-intro','Our memory verse: Is anyone among you suffering? Let him pray. Is anyone cheerful? Let him sing psalms. Build it in order.'],
   done:['verse-done','May the prayers of [[kidus-giyorgis]] help and protect us.']},

  {game:'quiz', questions:[
    {id:'q1',q:'How old was [[kidus-giyorgis]] when he went to Beirut?',a:[['Twenty','george'],['Ten','boy'],['Fifty','man']],c:0},
    {id:'q2',q:'What did the people of Beirut worship?',a:[['A dragon','dragon'],['The sun','sun'],['A golden calf','cow']],c:0},
    {id:'q3',q:'What did [[kidus-giyorgis]] do when the dragon was about to attack him?',a:[['He made the sign of the cross','cross'],['He ran away','horse'],['He hid behind a tree','acacia']],c:0},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','A martyr is someone who gives up his life rather than deny Christ. How did [[kidus-giyorgis]] become a martyr?'],
    ['k2','When we bow with the sign of the cross, what are we saying to God?','Ask your priest or teacher to show you the prostration and explain it.'],
    ['k3','What is a dragon in your life, something that frightens you, that you can face with prayer?'],
   ]},
 ]
});
