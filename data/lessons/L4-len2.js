/* Level IV (Grade 7 and up), Lent week 2: Esther (Book of Esther; 1 Corinthians 7:5) */
BKLesson({
 id:'L4-len2', title:'Queen Esther', am:'አስቴር', sticker:'scepter',
 pages:[
  {game:'cover', bg:'gold', title:'Queen Esther', am:'አስቴር',
   props:[{art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',crown:true,longHair:true,netela:'#E2A62B'}],x:300,y:440,s:.65},{art:'scepter',x:520,y:380,s:.9},{art:'king',x:640,y:440,s:.6}],
   say:['cover','[[selam]]! A young queen risked her life to save God\'s people. But first, she asked everyone to fast and pray. Let\'s hear her story.'],
   parent:'<p>This lesson follows Level IV, Lent week 2: <b>Esther</b> (Book of Esther). Aim: learn about the importance and spirituality of fasting from the life of Esther.</p><p>Talk about it: Are there hardships in the world today that we should fast and pray for?</p>'},

  {game:'story', bg:'gold', chip:'A new queen',
   props:[{id:'king',art:'king',x:600,y:440,s:.6},{id:'mord',art:['figure',{robe:'#24418F',beard:'grey'}],x:180,y:440,s:.55},{id:'est',art:['figure',{robe:'#B3322A',longHair:true,netela:'#E2A62B'}],x:320,y:440,s:.55},{id:'crown',art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',crown:true,longHair:true,netela:'#E2A62B'}],x:430,y:440,s:.55,hidden:true}],
   beats:[
    {say:['n1','King Xerxes ruled a great empire from India to Ethiopia. He was looking for a new queen.']},
    {wiggle:['mord'],say:['n2','A Jew named Mordecai had raised his young cousin Esther, because her parents died when she was little. Mordecai had once saved the king\'s life by uncovering a plot. Tap Mordecai.'],tap:'mord'},
    {hide:['est'],show:['crown'],sfx:'glory',say:['n3','The king chose Esther from among many, and made her queen. But no one knew she was a Jew.']},
   ]},

  {game:'choose', bg:'egypt', chip:'Bow to Haman?',
   props:[{id:'haman',art:['figure',{robe:'#3A3F4E',sleeve:'#B3322A',beard:'dark',cap:'#B3322A'}],x:560,y:440,s:.6},{id:'crowd',art:'crowd',x:330,y:445,s:.6},{id:'mord',art:['figure',{robe:'#24418F',beard:'grey'}],x:150,y:440,s:.55}],
   prompt:['h0','The king\'s chief minister, Haman, ordered everyone to kneel and bow down to him. Mordecai worshipped only God. What did he do?'],
   options:[
    {label:'Bowed down like everyone else',art:'crowd',good:false,say:['h1','No. Mordecai would not give a man the honor that belongs to God. Try again.']},
    {label:'Stood, and refused to bow',art:'glory',then:{wiggle:['mord','haman']},
     say:['h2','Haman was furious. To take revenge, he tricked the king into ordering that on one day, every Jew in the empire be killed.']},
   ]},

  {game:'hold', bg:'night', chip:'Three days of fasting',
   props:[{id:'est',art:['figure',{robe:'#5B4D3C',sleeve:'#5B4D3C',longHair:true,arms:'pray'}],x:300,y:440,s:.6},{id:'crowd',art:'crowd',x:560,y:445,s:.6},{id:'moon',art:'moon',x:660,y:100,s:.5},{id:'sun',art:'sun',x:120,y:110,s:.5,hidden:true}],
   target:'est', ms:6500, label:'Fast and pray, three days',
   intro:['f1','Mordecai begged Esther to plead with the king. But anyone who went to the king without being called could be put to death! Esther said: Gather all the Jews and fast for me. Do not eat or drink for three days. I will fast too. Press and hold to fast with them.'],
   at:[{p:.33,say:['f2','Day one.']},{p:.66,say:['f3','Day two.']}],
   after:{show:['sun']},
   done:['f4','Day three. Esther said: I will go to the king. And if I perish, I perish.']},

  {game:'drag', bg:'gold', chip:'The golden scepter',
   props:[{id:'king',art:'king',x:620,y:440,s:.65},{id:'est',art:['figure',{robe:'#6A3A8A',sleeve:'#6A3A8A',crown:true,longHair:true,netela:'#E2A62B'}],x:250,y:440,s:.6},{id:'glow',art:'glory',x:250,y:220,s:.7,hidden:true}],
   items:[{art:'scepter',x:540,y:350,s:.6,to:[330,340,.6],then:{show:['glow']}}],
   zone:{x:160,y:200,w:220,h:250},
   intro:['g1','Esther stood in the king\'s court. Would he accept her? Drag the golden scepter to her: that means she may live.'],
   done:['g2','The king held out the golden scepter and said: What is your request, Queen Esther? I will give you up to half the empire! God had answered the fast.']},

  {game:'story', bg:'night', chip:'A sleepless night',
   props:[{id:'king',art:'sleeper',x:400,y:430,s:.9},{id:'scroll',art:'scroll',x:600,y:420,s:.7,hidden:true},{id:'mord',art:['figure',{robe:'#6A3A8A',sleeve:'#E2A62B',beard:'grey'}],x:250,y:440,s:.5,hidden:true},{id:'horse',art:'horse',x:350,y:440,s:.6,hidden:true}],
   beats:[
    {say:['s1','That night the king could not sleep. Tap him.'],tap:'king'},
    {show:['scroll'],say:['s2','He asked for the records of the empire to be read, and heard how Mordecai had saved his life. Mordecai had never been rewarded!']},
    {hide:['king','scroll'],show:['horse','mord'],sfx:'glory',say:['s3','So Haman himself had to dress Mordecai in royal robes and lead him through the city on the king\'s horse.']},
    {say:['s4','At Esther\'s banquet, she told the king about Haman\'s plot. Haman was punished, and Mordecai sent letters to protect God\'s people everywhere.']},
   ]},

  {game:'match', chip:'Who\'s who?',
   heading:'Match each person to what they did',
   intro:['m0','Match each person in the story to what they did.'],
   pairs:[
    ['Esther','Fasted, then risked her life to save her people'],
    ['Mordecai','Raised Esther and refused to bow to a man'],
    ['Haman','Plotted to destroy God\'s people'],
    ['King Xerxes','Held out the golden scepter'],
   ],
   done:['m1','Esther did not take pride in her beauty or her crown. She cared about God\'s people.']},

  {game:'verse', chip:'Memory verse',
   verse:'Give yourselves to fasting and prayer.', ref:'1 Corinthians 7:5',
   intro:['verse-intro','Our memory verse is the same as last week: Give yourselves to fasting and prayer. Build it in order.'],
   done:['verse-done','Esther lived this verse.']},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Before doing something hard, Esther fasted and asked others to pray. What hard thing could you ask others to pray for with you?'],
    ['k2','What kind of person was Mordecai? What do you learn from him?'],
    ['k3','Are there hardships in the world today that we should fast and pray for?'],
   ]},
 ]
});
