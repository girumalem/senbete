/* Level II (Grades 1-3), October week 4: Joseph Sold into Slavery (Genesis 37) */
BKLesson({
 id:'L2-oct4', title:'Joseph and His Brothers', am:'ዮሴፍና ወንድሞቹ', sticker:'coat',
 pages:[
  {game:'cover', bg:'field', title:'Joseph and His Brothers', am:'ዮሴፍና ወንድሞቹ',
   props:[{art:['jacobYoung',{robe:'#E2A62B',sash:'#B3322A'}],x:520,y:435,s:.62},{art:'sheep',x:200,y:440,s:.4},{art:'sheep',x:620,y:440,s:.4,flip:true}],
   say:['cover','[[selam]]! Remember Isaac, the son God promised to Abraham? Today we read about Isaac\'s grandson, [[yosef]], Joseph. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, October week 4: <b>Joseph Sold into Slavery</b> (Genesis 37). Aim: be kind to your brothers and sisters, and never try to cover a mistake with another wrong.</p>'},

  {game:'read', chip:'Read along', heading:'Joseph\'s dream', pic:'coat',
   paras:[
    ['r1','Jacob had twelve sons. He loved Joseph more than the others, and gave him a beautiful coat.'],
    ['r2','His brothers were jealous, and they hated Joseph.'],
    ['r3','One night Joseph had a dream. He told his brothers: The sun, the moon and eleven stars bowed down to me!'],
    ['r4','Now his brothers hated him even more. Is he going to rule over us? they said.'],
   ]},

  {game:'tapmany', bg:'night', chip:'The dream',
   props:[{art:['sleeper',{robe:'#E2A62B'}],x:400,y:440,s:.7}],
   area:{x0:0,y0:20,x1:800,y1:280}, count:11, spawn:{art:'star',s:[.5,.8],anim:'bob'}, sfx:'sparkle',
   progress:'*{n} more* stars!',
   intro:['stars','In Joseph\'s dream, eleven stars bowed down. Tap to count eleven stars!'],
   done:['stars-done','Eleven stars, like his eleven brothers!']},

  {game:'story', bg:'field', chip:'Into the pit',
   props:[{id:'pit',art:'pit',x:420,y:445,s:1},{id:'b1',art:['man',{beard:'dark'}],x:560,y:440,s:.52},{id:'b2',art:['man',{robe:'#8A5A30',beard:'dark'}],x:650,y:440,s:.52},{id:'reu',art:['man',{robe:'#24418F',beard:'brown'}],x:740,y:440,s:.52},{id:'jo',art:['jacobYoung',{robe:'#E2A62B',sash:'#B3322A'}],x:140,y:440,s:.55},{id:'coat',art:'coat',x:560,y:420,s:.5,hidden:true}],
   beats:[
    {say:['p1','One day Jacob sent Joseph to check on his brothers, who were keeping the sheep. Tap Joseph.'],tap:'jo'},
    {wiggle:['b1','b2'],say:['p2','When the brothers saw him, they said: Here comes the dreamer. Let\'s get rid of him!']},
    {wiggle:['reu'],say:['p3','But Reuben said: Let\'s not kill him. Throw him in a pit. He wanted to come back and save Joseph. Tap Reuben.'],tap:'reu'},
    {move:{jo:[420,470,.45]},show:['coat'],sfx:'whoosh',say:['p4','They took off Joseph\'s coat and threw him into the pit.']},
    {say:['p5','Some merchants passed by. The brothers sold Joseph to them as a slave, and he was taken to Egypt, [[gibts]].']},
   ],
   parent:'<p>Reuben tried to save his brother (Genesis 37:22). Talk about it: how can we be kind to our brothers and sisters?</p>'},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','Read each sentence. Is it true, or false?'],
   items:[
    {id:'t1',s:'Jacob had twelve sons.',t:true,why:'True! Joseph was one of twelve brothers.',pic:'family'},
    {id:'t2',s:'Joseph\'s brothers loved his dream.',t:false,why:'False. They hated him even more.',pic:'star'},
    {id:'t3',s:'Reuben wanted to save Joseph.',t:true,why:'True! He planned to come back for him.',pic:'pit'},
    {id:'t4',s:'The brothers told their father the truth.',t:false,why:'False. They covered up with a lie, and Jacob cried. Never cover a mistake with another wrong!',pic:'coat'},
   ],
   done:['tf-done','Great thinking!']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who was Joseph\'s grandfather?',a:[['Isaac','isaacOld'],['Noah','noah'],['Moses','moses']],c:0},
    {id:'q2',q:'What did Joseph\'s father give him?',a:[['A beautiful coat','coat'],['A camel','camel']],c:0},
    {id:'q3',q:'Where was Joseph taken?',a:[['To Egypt','pyramid'],['To the sea','fish']],c:0},
   ]},
  {game:'song', song:'aman-beaman'},
 ]
});
