/* Level IV (Grade 7 and up), September week 4: Manifestation of God's Love After the Fall (Genesis 3; Genesis 3:15) */
BKLesson({
 id:'L4-sep4', title:'God\'s Love After the Fall', am:'ከውድቀት በኋላ የእግዚአብሔር ፍቅር', sticker:'heart',
 pages:[
  {game:'cover', bg:'garden', title:'God\'s Love After the Fall', am:'የእግዚአብሔር ፍቅር',
   props:[{art:'fruitTree',x:400,y:440,s:1.1},{art:'snake',x:470,y:300,s:.8},{art:['figure',{robe:'#5E9A3A',sleeve:'#5E9A3A',longHair:true}],x:220,y:440,s:.58},{art:['figure',{robe:'#5E9A3A',sleeve:'#5E9A3A',beard:'dark'}],x:620,y:440,s:.6}],
   say:['cover','[[selam]]! Adam and Eve broke the one commandment God gave them. What did God do then? Let\'s find out.'],
   parent:'<p>This lesson follows Level IV, September week 4: <b>Manifestation of God\'s Love After the Fall</b> (Genesis 3). Aim: learn about the results of sin, and the unconditional love of God even after the fall.</p><p>Talk about it: Why is it hard to say "I did it" when we do wrong?</p>'},

  {game:'story', bg:'garden', chip:'The serpent',
   props:[{id:'tree',art:'fruitTree',x:420,y:440,s:1.1,cls:''},{id:'eve',art:['figure',{robe:'#5E9A3A',sleeve:'#5E9A3A',longHair:true}],x:220,y:440,s:.58},{id:'snake',art:'snake',x:520,y:330,s:.8,hidden:true},{id:'adam',art:['figure',{robe:'#5E9A3A',sleeve:'#5E9A3A',beard:'dark'}],x:640,y:440,s:.6,hidden:true}],
   beats:[
    {wiggle:['tree'],say:['s1','God gave Adam and Eve every plant in paradise for food, except one: the tree of knowledge. If you eat of it, you will die. To keep this commandment was their way of loving God.']},
    {show:['snake'],sfx:'boing',say:['s2','Adam and Eve kept the commandment for seven years. Then the devil, hiding in the serpent, came to Eve. Tap the serpent.'],tap:'snake'},
    {say:['s3','It said: You will not die. Your eyes will be opened, and you will be like God.']},
    {wiggle:['eve'],say:['s4','Eve looked at the tree. It was good for food, pleasant to the eyes, and desirable to make one wise. But she forgot what God had said.']},
    {show:['adam'],say:['s5','She ate, and gave to Adam, and he ate too. At once their eyes were opened, and they knew they were naked.']},
   ]},

  {game:'find', bg:'garden', chip:'Where are you?',
   intro:['f0','When they heard God walking in the garden, they were afraid and hid. God called: Where are you? Tap the bushes to find them.'],
   spots:[
    {x:180,y:400,art:['figure',{robe:'#5E9A3A',sleeve:'#5E9A3A',beard:'dark'}],s:.45,say:['f1','Adam! He said: I heard Your voice, and I was afraid, so I hid.']},
    {x:420,y:400,art:['figure',{robe:'#5E9A3A',sleeve:'#5E9A3A',longHair:true}],s:.43,say:['f2','Eve! Before, they loved to be near God. Now sin made them afraid.']},
    {x:650,y:400,art:'snake',s:.7,up:-10,say:['f3','The serpent. The devil had fooled them into sin.']},
   ],
   done:['f4','God already knew where they were. He called them because He is a loving Father, giving them the chance to come back.']},

  {game:'choose', bg:'garden', chip:'Honest or blaming?',
   props:[{id:'adam',art:['figure',{robe:'#5E9A3A',sleeve:'#5E9A3A',beard:'dark'}],x:300,y:440,s:.6},{id:'eve',art:['figure',{robe:'#5E9A3A',sleeve:'#5E9A3A',longHair:true}],x:430,y:440,s:.58},{id:'glow',art:'glory',x:640,y:260,s:.8}],
   prompt:['c0','God asked Adam: Have you eaten from the tree I told you not to eat from? If you were Adam, what should you say?'],
   options:[
    {label:'The woman You gave me, she gave it to me!',art:'darkCloud',good:false,then:{wiggle:['eve']},
     say:['c1','That is what Adam said. He blamed Eve, and Eve blamed the serpent. No one said sorry. Try the other answer.']},
    {label:'Yes, Lord. I sinned. Please forgive me.',art:'heart',then:{wiggle:['adam']},
     say:['c2','That is repentance. Blaming others hides sin; confessing it opens the door to God\'s mercy.']},
   ]},

  {game:'story', bg:'heaven', chip:'A promise of hope',
   props:[{id:'glow',art:'glory',x:400,y:200,s:1},{id:'snake',art:'snake',x:180,y:420,s:.9},{id:'mary',art:'mary',x:600,y:440,s:.6,hidden:true}],
   beats:[
    {say:['p1','Because of sin, death came into the world. God told Adam and Eve: You will return to the dust.']},
    {wiggle:['snake'],say:['p2','But even then, God gave hope. He said to the serpent: I will put enmity between you and the woman, and between your seed and her Seed.']},
    {show:['mary'],sfx:'glory',say:['p3','The woman is the Virgin [[mariam]], and her Seed is our Lord Jesus Christ, who would be born of her to save Adam and all his children. Tap her.'],tap:'mary'},
    {say:['p4','God\'s love did not stop when man fell. It kept going, all the way to the Cross.']},
   ]},

  {game:'sort', chip:'What looked good?',
   bins:[{label:'What Eve saw',art:'fruitTree'},{label:'What she forgot',art:'bible'}],
   intro:['so0','Eve saw what looked good, but she forgot what really mattered. Sort these.'],
   items:[
    {t:'It was good for food.',b:0},
    {t:'God said: you will surely die.',b:1},
    {t:'It was pleasant to the eyes.',b:0},
    {t:'God gave us everything else.',b:1},
    {t:'It seemed to make one wise.',b:0},
   ],
   done:['so1','Not everything that looks good, pleasant and desirable is good for us. Think about the result before you choose.']},

  {game:'verse', chip:'Memory verse',
   verse:'I will put enmity between you and the woman, and between your seed and her Seed.', ref:'Genesis 3:15',
   chunks:['I will put enmity','between you and the woman,','and between your seed','and her Seed.'],
   intro:['verse-intro','Our memory verse is God\'s first promise of a Savior: I will put enmity between you and the woman, and between your seed and her Seed. Build it in order.'],
   done:['verse-done','The Church calls this the first good news, given right after the fall.']},

  {game:'quiz', questions:[
    {id:'q1',q:'What are the results of sin in this story?',a:[['Fear and death','darkCloud'],['Joy and wisdom','sun'],['A bigger garden','fruitTree']],c:0},
    {id:'q2',q:'Who was hiding in the serpent?',a:[['The devil','snake'],['An angel','angel'],['A lion','lion']],c:0},
    {id:'q3',q:'How did God show love after the fall?',a:[['He promised a Savior born of a woman','mary'],['He forgot about them','cloud'],['He made a new Adam from dust','stone']],c:0},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Why do you think God gave Adam and Eve only one commandment?','It was a simple way for them to show their love and worship.'],
    ['k2','Adam blamed Eve, and Eve blamed the serpent. Why do people blame others? What should we do instead?','Confess honestly. In our Church we go to our father of confession.'],
    ['k3','Think of something that looks good but is not good for you. How can you remember to stop and think first?'],
   ]},
 ]
});
