/* Level III (Grades 4-6), October week 2: Abraham and the Promise (Genesis 12, 13, 21, 22; Hebrews 11:16) */
BKLesson({
 id:'L3-oct2', title:'Abraham\'s Faith', am:'አብርሃም', sticker:'star',
 pages:[
  {game:'cover', bg:'night', title:'Abraham\'s Faith', am:'አብርሃም',
   props:[{art:'abraham',x:170,y:440,s:.6},{art:'tent',x:640,y:440,s:.6},{art:['star',{r:14,c:'#F8D978'}],x:560,y:120,s:1},{art:['star',{r:10,c:'#F8D978'}],x:690,y:80,s:1}],
   say:['cover','[[selam]]! [[abraham]] trusted God even when he did not know where he was going. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, October week 2: <b>Abraham and the Promise</b> (Genesis 12, 13, 21, 22). Aim: learn about Abraham\'s faith and obedience, and Isaac\'s obedience.</p><p>Talk about it: Is anything too hard for the Lord?</p>'},

  {game:'read', chip:'Read', heading:'Leave your country', pic:'abraham',
   paras:[
    ['r1','[[abraham]] lived in Haran with his father, his wife [[sara]], and his nephew Lot.'],
    ['r2','God said to him: Get out of your country, from your family and your father\'s house, to a land that I will show you. I will bless you and make you a great nation.'],
    ['r3','Abraham did not know anyone in that land, but he had faith in God. He took Sarah and Lot and went to Canaan.'],
   ]},

  {game:'read', chip:'Read', heading:'Is anything too hard for the Lord?', pic:'sarah',
   paras:[
    ['r4','Abraham became rich in Canaan, but for many years he had no child with Sarah.'],
    ['r5','When Abraham was ninety-nine years old, God told him: In a year, Sarah will have a son. Sarah heard it and laughed, because she thought she was too old.'],
    ['r6','God said: Why did Sarah laugh? Is anything too hard for the Lord? And within a year, Sarah had a son. Abraham named him Isaac.'],
   ]},

  {game:'story', bg:'mountain', chip:'The great test',
   props:[{id:'ab',art:'abraham',x:220,y:440,s:.6},{id:'is',art:'isaacChild',x:380,y:440,s:.6},{id:'glow',art:'glory',x:560,y:250,s:.9,hidden:true},{id:'angel',art:'angel',x:560,y:330,s:.45,hidden:true},{id:'bush',art:'bush',x:680,y:440,s:.7},{id:'sheep',art:'sheep',x:600,y:440,s:.5,hidden:true}],
   beats:[
    {wiggle:['ab'],say:['s1','When Isaac was a young man, God tested Abraham: Offer your son Isaac to Me.']},
    {wiggle:['is'],say:['s2','It was very hard, but Abraham knew God always keeps His promises. Isaac did not run away. He trusted his father, and his father trusted God. Tap Isaac.'],tap:'is'},
    {show:['glow','angel'],sfx:'glory',say:['s3','Just then, an angel of God called out: Stop! Do not harm the boy.']},
    {show:['sheep'],wiggle:['bush'],say:['s4','Abraham looked up and saw a ram caught in a bush. He offered the ram instead. Tap it.'],tap:'sheep'},
    {fx:'confetti',say:['s5','God said: All nations of the earth shall be blessed, because you have obeyed My voice.']},
   ],
   parent:'<p>The Church sees in this story a picture of God the Father, who gave His only Son for us.</p>'},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Abraham knew everyone in the land God sent him to.',t:false,why:'He knew no one there, but he trusted God.',pic:'tent'},
    {id:'t2',s:'Sarah laughed because she thought she was too old.',t:true,why:'But nothing is too hard for the Lord!',pic:'sarah'},
    {id:'t3',s:'Isaac tried to run away from his father.',t:false,why:'Isaac obeyed, because he knew his father loved him.',pic:'isaacChild'},
    {id:'t4',s:'God gave a ram in place of Isaac.',t:true,why:'The angel stopped Abraham, and he offered the ram.',pic:'sheep'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'God told Abraham to go to the land of ___.',a:'Canaan',opts:['Egypt','Babylon']},
    {id:'f2',s:'Abraham was ___ years old when God promised a son within a year.',a:'ninety-nine',opts:['twenty','fifty']},
    {id:'f3',s:'Abraham named his son ___.',a:'Isaac',opts:['Ishmael','Jacob']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'God is not ashamed to be called their God.', ref:'Hebrews 11:16',
   chunks:['God is not ashamed','to be called','their God.'],
   intro:['verse-intro','Our memory verse is from Hebrews, chapter eleven. Listen: God is not ashamed to be called their God. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Why did Abraham leave his country?',a:[['God called him, and he had faith','abraham'],['He was hungry','bowl'],['A king sent him away','king']],c:0},
    {id:'q2',q:'What did God promise Abraham?',a:[['To make him a great nation','star'],['A big palace','temple'],['A golden crown','gift']],c:0},
    {id:'q3',q:'What did Abraham offer instead of Isaac?',a:[['A ram','sheep'],['A camel','camel'],['Bread','basket']],c:0},
   ]},
 ]
});
