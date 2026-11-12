/* Level II (Grades 1-3), November week 1: Joseph Finds Favor in Egypt (Genesis 39) */
BKLesson({
 id:'L2-nov1', title:'God Is with Joseph', am:'እግዚአብሔር ከዮሴፍ ጋር ነበረ', sticker:'pyramid',
 pages:[
  {game:'cover', bg:'egypt', title:'God Is with Joseph', am:'እግዚአብሔር ከዮሴፍ ጋር ነበረ',
   props:[{art:'pyramid',x:620,y:430,s:.8},{art:['jacobYoung',{robe:'#E2A62B',sash:'#B3322A'}],x:520,y:435,s:.62},{art:'glory',x:520,y:180,s:.6}],
   say:['cover','[[selam]]! Joseph\'s brothers sold him, and he was taken to Egypt as a slave. But was he alone? No! God was with him. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, November week 1: <b>Joseph Finds Favor in Egypt</b> (Genesis 39). Aim: be faithful to God and in our work, even when things are hard.</p>'},

  {game:'read', chip:'Read along', heading:'In Potiphar\'s house', pic:'pyramid',
   paras:[
    ['r1','In Egypt, an officer of Pharaoh bought Joseph. Pharaoh was the title of the kings of Egypt.'],
    ['r2','The officer\'s name was Potiphar. God blessed everything Joseph did.'],
    ['r3','God even blessed Potiphar\'s house, because of Joseph.'],
    ['r4','Potiphar saw that God was with Joseph, so he put Joseph in charge of his whole house.'],
   ]},

  {game:'story', bg:'egypt', chip:'Joseph says no',
   props:[{id:'po',art:['man',{robe:'#FFFFFF',sleeve:'#FFFFFF',nemes:true,beard:false}],x:180,y:440,s:.55},{id:'jo',art:['jacobYoung',{robe:'#E2A62B',sash:'#B3322A'}],x:420,y:440,s:.58},{id:'wife',art:['woman',{robe:'#FFFFFF',netela:'#E2A62B'}],x:620,y:440,s:.55}],
   beats:[
    {wiggle:['wife'],say:['n1','Potiphar\'s wife wanted Joseph to do something wrong.']},
    {wiggle:['jo'],sfx:'glory',say:['n2','But Joseph was a man of God. He said no! I will not sin against God. Tap Joseph.'],tap:'jo'},
    {wiggle:['po'],say:['n3','Then she told a lie about Joseph. Potiphar was angry, and he put Joseph in prison.']},
   ],
   parent:'<p>Joseph refused to sin even when no one was watching. Talk about it: what does it mean to be faithful?</p>'},

  {game:'story', bg:'dark', chip:'God is in prison too',
   props:[{art:'bars',x:400,y:440,s:.9},{id:'jo',art:['jacobYoung',{robe:'#E2A62B',sash:'#B3322A'}],x:400,y:440,s:.55},{id:'guard',art:'soldier',x:160,y:440,s:.55},{id:'glow',art:'glory',x:400,y:180,s:.7,hidden:true}],
   beats:[
    {show:['glow'],sfx:'glory',say:['g1','But God was with Joseph in prison too!']},
    {wiggle:['guard'],say:['g2','The prison guard liked Joseph, and put him in charge of all the prisoners. Tap the guard.'],tap:'guard'},
    {fx:'confetti',say:['g3','God blessed everything Joseph did, even in prison. Joseph was faithful to his master, and most of all to God.']},
   ]},

  {game:'blanks', chip:'Fill in the word',
   intro:['blanks-intro','Read the sentence, and tap the missing word.'],
   items:[
    {id:'b1',s:'The kings of Egypt were called ___.',a:'Pharaoh',opts:['Pharaoh','Noah','Isaac'],pic:'pharaoh'},
    {id:'b2',s:'Potiphar saw that ___ was with Joseph.',a:'God',opts:['God','nobody','a lion'],pic:'glory'},
    {id:'b3',s:'Joseph would not ___ against God.',a:'sin',opts:['pray','sin','sing'],pic:['jacobYoung',{robe:'#E2A62B',sash:'#B3322A'}]},
    {id:'b4',s:'Potiphar put Joseph in ___.',a:'prison',opts:['a boat','prison','a tent'],pic:'bars'},
   ],
   done:['blanks-done','Well read!']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who bought Joseph in Egypt?',a:[['Potiphar',['man',{robe:'#FFFFFF',sleeve:'#FFFFFF',nemes:true,beard:false}]],['Abraham','abraham']],c:0},
    {id:'q2',q:'Was Joseph a faithful servant?',a:[['Yes!',['text',{t:'Yes',size:60,c:'#2F7A4E'}]],['No',['text',{t:'No',size:60,c:'#B3322A'}]]],c:0},
    {id:'q3',q:'Who was with Joseph in prison?',a:[['God','glory'],['Nobody','stone']],c:0},
   ]},
  {game:'song', song:'egziabher-yitebiken-kekifu-f'},
 ]
});
