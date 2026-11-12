/* Level III (Grades 4-6), December week 2: Moses (Exodus to Deuteronomy; John 15:13) */
BKLesson({
 id:'L3-dec2', title:'Moses, Friend of God', am:'ሙሴ', sticker:'moses',
 pages:[
  {game:'cover', bg:'desert', title:'Moses, Friend of God', am:'ሙሴ',
   props:[{art:'moses',x:170,y:440,s:.6},{art:'scroll',x:640,y:410,s:.8},{art:'rockWater',x:720,y:440,s:.5}],
   say:['cover','[[selam]]! [[muse]] gave up a palace to save his people, and loved them more than himself. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, December week 2: <b>Moses</b> (Exodus to Deuteronomy). Aim: learn about Moses\' virtues: compassion, humility, prayer and fasting, and love for his people.</p><p>Talk about it: How did Moses show the love Jesus describes in John 15:13?</p>'},

  {game:'read', chip:'Read', heading:'A humble leader', pic:'moses',
   paras:[
    ['r1','Moses had every comfort in Pharaoh\'s palace, but he could not be happy while his people suffered. So he gave it all up.'],
    ['r2','When God sent him to Pharaoh, Moses humbly said: Who am I, that I should go to Pharaoh? God answered: I will be with you, and I will give you the words to speak.'],
    ['r3','Moses threw down his staff, and it became a snake. Pharaoh\'s magicians did the same, but Moses\' snake swallowed theirs! Still Pharaoh would not listen, so God sent ten plagues on Egypt.'],
   ]},

  {game:'read', chip:'Read', heading:'Wonders in the wilderness', pic:'manna',
   paras:[
    ['r4','Moses led Israel through the Red Sea on dry land. In the wilderness, God gave them manna from heaven and water from a rock.'],
    ['r5','Moses was a man of prayer and fasting. He fasted forty days and forty nights, and received the Ten Commandments on two tablets of stone.'],
   ]},

  {game:'match', chip:'God\'s wonders', heading:'Match each wonder to what happened',
   intro:['match-intro','Tap a wonder, then tap what happened.'],
   pairs:[['The staff','It became a snake',null,'snake'],['The Red Sea','It split in two',null,'waterWall'],['The rock','Water flowed out',null,'rockWater'],['Manna','Bread from heaven',null,'manna']],
   done:['match-done','God did great wonders through Moses!']},

  {game:'read', chip:'Read', heading:'Greater love', pic:'heart',
   paras:[
    ['r6','Once the people rebelled so badly that God said He would destroy them and make Moses the leader of another nation.'],
    ['r7','But Moses pleaded for them. He even asked God to blot his own name out of the book of life rather than destroy his people!'],
    ['r8','Moses asked God to remember His covenant with Abraham, Isaac and Jacob. God heard him and spared the people. This is why we too ask the saints to pray for us.'],
   ],
   parent:'<p>Moses\' prayer (Exodus 32:11-14, 31-32) is an Old Testament example of intercession, which the Church continues in asking the prayers of the saints.</p>'},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Moses was proud and wanted to be a great leader.',t:false,why:'He was humble: Who am I, that I should go?',pic:'moses'},
    {id:'t2',s:'Moses fasted forty days and forty nights.',t:true,why:'Then he received the Ten Commandments.',pic:'scroll'},
    {id:'t3',s:'Moses asked God to spare his people.',t:true,why:'He loved them more than himself.',pic:'heart'},
   ],
   done:['tf-done','Well done!']},

  {game:'verse', chip:'Memory verse',
   verse:'Greater love has no one than this, than to lay down one\'s life for his friends.', ref:'John 15:13',
   chunks:['Greater love has no one','than this,','than to lay down one\'s life','for his friends.'],
   intro:['verse-intro','Our memory verse is from the Gospel of John. Listen: Greater love has no one than this, than to lay down one\'s life for his friends. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'What did Moses give up for his people?',a:[['The riches of the palace','temple'],['His sheep','sheep'],['His boat','boat']],c:0},
    {id:'q2',q:'What did God give Israel to eat?',a:[['Manna from heaven','manna'],['Fish from the sea','fish'],['Injera','injera']],c:0},
    {id:'q3',q:'What did Moses do when God was angry with Israel?',a:[['He prayed for them','glory'],['He left them','sandals'],['He agreed','king']],c:0},
   ]},
 ]
});
