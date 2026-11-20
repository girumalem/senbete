/* Level IV (Grade 7 and up), October week 4: Joseph's Faithfulness (Genesis 37, 39-50; Romans 8:28) */
BKLesson({
 id:'L4-oct4', title:'Joseph\'s Faithfulness', am:'የዮሴፍ ታማኝነት', sticker:'coat',
 pages:[
  {game:'cover', bg:'egypt', title:'Joseph\'s Faithfulness', am:'የዮሴፍ ታማኝነት',
   props:[{art:['figure',{robe:'#E2A62B',sleeve:'#B3322A',sash:'#24418F'}],x:300,y:440,s:.65},{art:'pyramid',x:620,y:440,s:.7},{art:'grain',x:470,y:440,s:.8}],
   say:['cover','[[selam]]! Sold as a slave, thrown into prison, forgotten for years. Yet Joseph stayed faithful, and God turned it all to good. Let\'s see how.'],
   parent:'<p>This lesson follows Level IV, October week 4: <b>Joseph\'s Faithfulness</b> (Genesis 37, 39-50). Aim: learn that God allows all things for a reason.</p><p>Talk about it: Is there anything you would do only when no one is watching?</p>'},

  {game:'order', chip:'Joseph\'s life',
   intro:['o0','Do you remember Joseph\'s story? Tap the events in order.'],
   cards:[
    {art:'coat',cap:'His father loves him; his brothers envy him',say:['o1','Jacob loved Joseph most, and his brothers envied him, even more after his dreams.']},
    {art:'pit',cap:'Thrown in a pit and sold as a slave',say:['o2','They threw him in a pit and sold him to merchants going to Egypt.']},
    {art:'house',cap:'Head of his master\'s house',say:['o3','God was with him, and his master put him in charge of his whole house.']},
    {art:'bars',cap:'In prison because of a lie',say:['o4','His master\'s wife lied about him, and he was thrown into prison.']},
    {art:'grain',cap:'He explains Pharaoh\'s dreams',say:['o5','He explained Pharaoh\'s dreams: seven years of plenty, then seven of famine.']},
    {art:'pharaoh',cap:'Ruler of all Egypt',say:['o6','Pharaoh made him second only to himself.']},
   ],
   done:['o7','Every step looked like a disaster, but God was leading Joseph all the way.']},

  {game:'choose', bg:'egypt', chip:'No one is watching',
   props:[{id:'jo',art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',band:'#24418F'}],x:250,y:440,s:.6},{id:'house',art:'house',x:560,y:440,s:.6},{id:'glow',art:'glory',x:250,y:200,s:.7,hidden:true}],
   prompt:['c0','His master\'s wife kept asking Joseph to sin with her. No one else was in the house. What did Joseph say?'],
   options:[
    {label:'No one will ever know.',art:'darkCloud',good:false,say:['c1','God sees everything, even when no one else does. Joseph knew that. Try again.']},
    {label:'How can I do this great wickedness, and sin against God?',art:'glory',then:{show:['glow'],wiggle:['jo']},
     say:['c2','Joseph refused, even though he knew she could get him into trouble. He was faithful in the sight of men, and in the sight of God.']},
   ]},

  {game:'sort', chip:'Two dreams in prison',
   bins:[{label:'The cupbearer',art:'cup'},{label:'The baker',art:'bread'}],
   intro:['d0','In prison, Joseph met Pharaoh\'s cupbearer and baker. Both had strange dreams. Sort each part into the right man\'s dream.'],
   items:[
    {t:'A vine with three branches of grapes',b:0},
    {t:'Three baskets on his head',b:1},
    {t:'Squeezing grapes into Pharaoh\'s cup',b:0},
    {t:'Birds eating from the top basket',b:1},
    {t:'In three days, back in his job',b:0,why:['d1','The cupbearer was given his job back, just as Joseph said.']},
    {t:'In three days, put to death',b:1},
   ],
   done:['d2','It all happened as Joseph said. But the cupbearer forgot about Joseph for two more years.']},

  {game:'collect', bg:'field', chip:'Seven years of plenty',
   props:[{id:'jo',art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',nemes:true,band:'#E2A62B'}],x:120,y:440,s:.55},{id:'store',art:'house',x:620,y:440,s:.6}],
   items:[[260,430],[320,440],[380,425],[440,440],[290,390],[360,395],[430,385]].map(([x,y])=>({art:'grain',x,y,s:.5})),
   pile:{x:620,y:330,dx:34,dy:28,base:4,s:.45},
   intro:['g0','Pharaoh dreamed of seven fat cows and seven thin cows. Joseph said: seven years of plenty are coming, then seven years of famine. Store the grain for the hard years! Tap or drag all seven.'],
   done:['g1','Seven years of grain stored! When the famine came, people from many lands came to Egypt for food, and Joseph saved them.']},

  {game:'story', bg:'egypt', chip:'Forgiveness',
   props:[{id:'jo',art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',nemes:true,band:'#E2A62B',arms:'out'}],x:220,y:440,s:.6},{id:'bros',art:'crowd',x:560,y:445,s:.75},{id:'jacob',art:'jacob',x:700,y:440,s:.55,hidden:true}],
   beats:[
    {say:['f1','In the famine, Joseph\'s brothers came to Egypt to buy food. They bowed before him, but did not know him. Tap the brothers.'],tap:'bros'},
    {wiggle:['jo'],say:['f2','Joseph could have taken revenge. Instead he said: I am Joseph your brother. Do not be afraid. It was not you who sent me here, but God, to save your lives.']},
    {show:['jacob'],sfx:'glory',say:['f3','He brought his old father Jacob and the whole family to live in Egypt, and cared for them all.']},
   ]},

  {game:'match', chip:'Joseph\'s virtues',
   heading:'Match each virtue to what Joseph did',
   intro:['m0','Match each of Joseph\'s virtues to what he did.'],
   pairs:[
    ['Open and innocent','He told his brothers his dreams honestly'],
    ['Faithful servant','He worked well in every place, even in prison'],
    ['Faithful before God','He refused to sin when no one could see'],
    ['Forgiving','He welcomed the brothers who sold him'],
    ['Wise','He prepared Egypt for the famine'],
   ],
   done:['m1','Because Joseph was faithful, God blessed everything he did.']},

  {game:'verse', chip:'Memory verse',
   verse:'All things work together for good to those who love God.', ref:'Romans 8:28',
   intro:['verse-intro','Our memory verse: All things work together for good to those who love God. Build it in order.'],
   done:['verse-done','That was true for Joseph, and it is true for you.']},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Is there any bad deed you can hide from God? What are things people do only when parents cannot see them?','God sees in secret, and He also rewards in secret.'],
    ['k2','Joseph said: It was not you who sent me here, but God. How can that help you forgive someone who hurt you?'],
    ['k3','Joseph worked faithfully even as a slave and a prisoner. What is a small job you can do faithfully this week?'],
   ]},
 ]
});
