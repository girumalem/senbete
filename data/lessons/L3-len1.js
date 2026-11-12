/* Level III (Grades 4-6), Lent week 1: The Fast of Lent, Abiy Tsom (Genesis 1-2; Daniel 10; Matthew 4; Matthew 4:2) */
BKLesson({
 id:'L3-len1', title:'The Great Lent', am:'ዐቢይ ጾም', sticker:'lentils',
 pages:[
  {game:'cover', bg:'desert', title:'The Great Lent', am:'ዐቢይ ጾም',
   props:[{art:'jesus',x:640,y:440,s:.6},{art:'acacia',x:740,y:440,s:.6},{art:'lentils',x:170,y:420,s:.7}],
   say:['cover','[[selam]]! Every year our Church keeps the Great Lent, the [[tsom]] of Jesus Christ. Why do we fast? Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, Lent week 1: <b>The Fast of Lent</b> (Abiy Tsom). Aim: learn what fasting is, its history in the Bible, and why we keep the 55 days of Great Lent.</p><p>Talk about it: Besides food, what else can we "fast" from to grow closer to God?</p>'},

  {game:'read', chip:'Read', heading:'The first commandment', pic:'fruitTree',
   paras:[
    ['r1','Fasting means keeping away from certain foods, for God\'s sake. It is the very first commandment God gave.'],
    ['r2','God let Adam and Eve eat from every plant and tree, except one: the tree of the knowledge of good and evil.'],
    ['r3','In the beginning, people ate only plants. That is why, when we fast, we do not eat meat or dairy foods.'],
   ]},

  {game:'read', chip:'Read', heading:'Forty days', pic:'jesus',
   paras:[
    ['r4','God\'s prophets fasted. Moses fasted forty days and nights before receiving the commandments. Elijah also fasted forty days. Daniel and King David kept away from meat and rich food.'],
    ['r5','Jesus Christ Himself fasted forty days and forty nights in the wilderness, to give us an example. That is why it is called the Great Lent: it is the fast of our Lord.'],
    ['r6','We add one week before the forty days, to prepare, and one week after, Holy Week, to remember Christ\'s suffering on the cross. So the Great Lent lasts fifty-five days.'],
   ]},

  {game:'match', chip:'Who fasted?', heading:'Match each person to their fast',
   intro:['match-intro','Tap a person, then tap how they fasted.'],
   pairs:[['Moses','Forty days before the commandments',null,'moses'],['Daniel','No meat or rich food',null,['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',beard:'dark',halo:true,arms:'pray'}]],['Jesus Christ','Forty days in the wilderness',null,'jesus']],
   done:['match-done','Well matched!']},

  {game:'read', chip:'Read', heading:'Why we fast', pic:'shield',
   paras:[
    ['r7','We keep the fast because fasting was God\'s first commandment.'],
    ['r8','Prayer with fasting is stronger. That is why God\'s people fasted so often.'],
    ['r9','Jesus fasted to give us an example to follow.'],
    ['r10','And fasting is a spiritual weapon that helps us defeat the devil\'s temptations.'],
   ]},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'Jesus fasted for ___ days and forty nights.',a:'forty',opts:['seven','twelve']},
    {id:'f2',s:'The Great Lent lasts ___ days.',a:'fifty-five',opts:['thirty','one hundred']},
    {id:'f3',s:'When we fast, we do not eat meat or ___ foods.',a:'dairy',opts:['green','bread']},
    {id:'f4',s:'Fasting is a spiritual ___ against the devil.',a:'weapon',opts:['game','song']},
   ],
   done:['bl-done','All filled in!']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Fasting was God\'s first commandment to Adam and Eve.',t:true,why:'They were not to eat from one tree.',pic:'fruitTree'},
    {id:'t2',s:'Jesus did not need to fast, so He never did.',t:false,why:'He fasted forty days to give us an example.',pic:'jesus'},
    {id:'t3',s:'Prayer with fasting is more powerful.',t:true,why:'That is why God\'s people fasted so often.',pic:'glory'},
   ],
   done:['tf-done','Well done!']},

  {game:'verse', chip:'Memory verse',
   verse:'And when He had fasted forty days and forty nights, afterward He was hungry.', ref:'Matthew 4:2',
   chunks:['And when He had fasted','forty days','and forty nights,','afterward He was hungry.'],
   intro:['verse-intro','This month\'s memory verse is from the Gospel of Matthew. Listen: And when He had fasted forty days and forty nights, afterward He was hungry. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Whose fast is the Great Lent?',a:[['Jesus Christ\'s','jesus'],['Moses\'','moses'],['Pharaoh\'s','pharaoh']],c:0},
    {id:'q2',q:'What foods do we keep away from?',a:[['Meat and dairy','cow'],['Vegetables','lentils'],['Water','raindrop']],c:0},
    {id:'q3',q:'How long is the Great Lent?',a:[['55 days',['text',{t:'55',size:56,c:'#24418F'}]],['7 days',['text',{t:'7',size:56,c:'#24418F'}]],['365 days',['text',{t:'365',size:44,c:'#24418F'}]]],c:0},
   ]},
 ]
});
