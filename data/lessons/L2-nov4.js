/* Level II (Grades 1-3), November week 4: Joseph Reunited with His Father and Brothers (Genesis 42-47) */
BKLesson({
 id:'L2-nov4', title:'Joseph Forgives His Brothers', am:'ዮሴፍ ወንድሞቹን ይቅር አለ', sticker:'heart',
 pages:[
  {game:'cover', bg:'egypt', title:'Joseph Forgives His Brothers', am:'ዮሴፍ ወንድሞቹን ይቅር አለ',
   props:[{art:['jacobYoung',{robe:'#2F7A4E',sleeve:'#FFFFFF',sash:'#E2A62B',nemes:true}],x:400,y:440,s:.6},{art:['man',{beard:'dark'}],x:200,y:440,s:.52},{art:['man',{robe:'#8A5A30',beard:'dark'}],x:600,y:440,s:.52},{art:'heart',x:400,y:200,s:1}],
   say:['cover','[[selam]]! Joseph became a ruler in Egypt. Today his brothers come to Egypt. Will Joseph forgive them? Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, November week 4: <b>Joseph Reunited with His Father and Brothers</b> (Genesis 42-47). Aim: forgive others, and trust that God can turn bad things to good.</p>'},

  {game:'read', chip:'Read along', heading:'Hungry years', pic:'grain',
   paras:[
    ['r1','For seven years Joseph stored lots of grain. Then the hungry years came, all over the world.'],
    ['r2','In the land of Canaan, Jacob and his sons were hungry too. They heard there was food in Egypt.'],
    ['r3','The brothers went to Egypt and bowed down to the ruler. They did not know it was Joseph!'],
    ['r4','But Joseph knew them. He remembered his dream of the stars bowing down.'],
   ]},

  {game:'story', bg:'egypt', chip:'I am Joseph!',
   props:[{id:'jo',art:['jacobYoung',{robe:'#2F7A4E',sleeve:'#FFFFFF',sash:'#E2A62B',nemes:true}],x:600,y:440,s:.6},{id:'b1',art:['man',{beard:'dark'}],x:150,y:440,s:.5},{id:'b2',art:['man',{robe:'#8A5A30',beard:'dark'}],x:250,y:440,s:.5},{id:'ben',art:['jacobYoung',{robe:'#2F7A4E'}],x:350,y:440,s:.5}],
   beats:[
    {wiggle:['ben'],say:['j1','Joseph told them: Next time, bring your youngest brother, Benjamin. Tap Benjamin.'],tap:'ben'},
    {wiggle:['jo'],say:['j2','When they came back with Benjamin, Joseph could not hold back his tears. He cried: I am Joseph, your brother!']},
    {wiggle:['b1','b2'],say:['j3','The brothers were afraid. Would Joseph punish them?']},
    {move:{jo:[420,440,.6]},sfx:'glory',say:['j4','Joseph said: Do not be afraid. God sent me here to save many lives, and to save you too. Tap Joseph.'],tap:'jo'},
    {fx:'confetti',say:['j5','Joseph forgave his brothers and hugged them!']},
   ],
   parent:'<p>"God did send me before you to preserve life." (Genesis 45:5). Talk about it: is it easy to forgive? Who helps us forgive?</p>'},

  {game:'drag', bg:'egypt', chip:'Bring Jacob to Egypt',
   props:[{art:'pyramid',x:680,y:430,s:.6},{art:['jacobYoung',{robe:'#2F7A4E',sleeve:'#FFFFFF',sash:'#E2A62B',nemes:true}],x:600,y:440,s:.55}],
   zone:{x:480,y:270,w:280,h:180},
   items:[{art:'jacob',x:110,y:440,s:.5},{art:'sheep',x:220,y:330,s:.35},{art:'camel',x:250,y:440,s:.35}],
   intro:['family','Joseph sent a cart to bring his old father Jacob to Egypt. Drag Jacob and his animals to Joseph!'],
   done:['family-done','Jacob saw his son Joseph again! The whole family lived together in Egypt.']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','Read each sentence. Is it true, or false?'],
   items:[
    {id:'t1',s:'The brothers knew the ruler was Joseph.',t:false,why:'False. They did not know him, but he knew them.',pic:['jacobYoung',{robe:'#2F7A4E',sleeve:'#FFFFFF',sash:'#E2A62B',nemes:true}]},
    {id:'t2',s:'Joseph forgave his brothers.',t:true,why:'True! He said God sent him to Egypt to save lives.',pic:'heart'},
    {id:'t3',s:'Jacob came to live in Egypt.',t:true,why:'True! The whole family was together again.',pic:'jacob'},
   ],
   done:['tf-done','Great thinking!']},

  {game:'quiz', questions:[
    {id:'q1',q:'Why did the brothers go to Egypt?',a:[['To buy food','grain'],['To see the pyramids','pyramid']],c:0},
    {id:'q2',q:'Who was the youngest brother?',a:[['Benjamin',['jacobYoung',{robe:'#2F7A4E'}]],['Reuben',['man',{robe:'#24418F',beard:'brown'}]]],c:0},
    {id:'q3',q:'What did Joseph do to his brothers?',a:[['He forgave them','heart'],['He put them in prison','bars']],c:0},
   ]},
 ]
});
