/* Level IV (Grade 7 and up), November week 3: Saint Michael (Revelation 12:7-9; Exodus 23:20; Joshua 5:13-15; Daniel 10, 12:1; Psalm 34:7) */
BKLesson({
 id:'L4-nov3', title:'Saint Michael', am:'ቅዱስ ሚካኤል', sticker:'angel',
 pages:[
  {game:'cover', bg:'heaven', title:'Saint Michael', am:'ቅዱስ ሚካኤል',
   props:[{art:'michael',x:400,y:430,s:.75},{art:'cloud',x:160,y:330,s:.8},{art:'cloud',x:660,y:300,s:.7}],
   say:['cover','[[selam]]! There are nine ranks of angels and seven archangels. Today we meet the highest of the heavenly hosts: [[kidus-mikael]], the protector of God\'s people.'],
   parent:'<p>This lesson follows Level IV, November week 3: <b>Saint Michael</b> (Exodus; Miracles of St. Michael). Aim: learn about the role of St. Michael as protector and defender of God\'s people.</p><p>Look together at the icons of St. Michael in your church. Which events do they show?</p>'},

  {game:'story', bg:'heaven', chip:'Who is like God?',
   props:[{id:'mich',art:'michael',x:250,y:430,s:.65},{id:'drag',art:'dragon',x:560,y:300,s:.8},{id:'ang',art:'angel',x:120,y:330,s:.45}],
   beats:[
    {wiggle:['drag'],say:['w1','In the beginning, Satan was the highest of the angels. But he lied to the angels and said: I am your creator. Some angels believed him.']},
    {wiggle:['mich'],say:['w2','Michael stood up. His name means: Who is like God? Tap him.'],tap:'mich'},
    {move:{drag:[560,700,.8]},sfx:'whoosh',say:['w3','War broke out in heaven. Michael and his angels fought the dragon, that serpent of old, called the Devil and Satan. He was cast out, down to the earth, with the angels who followed him.']},
    {say:['w4','Satan\'s lie cost him everything he had. Lying and pride can cost us the good we have too.']},
   ]},

  {game:'order', chip:'Always helping',
   intro:['o0','God sends [[kidus-mikael]] to help His people again and again. Tap these in the order they happened.'],
   cards:[
    {art:'dragon',cap:'He casts Satan out of heaven',say:['o1','He cast Satan out of heaven.']},
    {art:'waterWall',cap:'He leads Israel out of Egypt and through the Red Sea',say:['o2','God said to Moses: I send an Angel before you, to keep you on the way. Michael led Israel through the Red Sea.']},
    {art:'jericho',cap:'He appears to Joshua as commander of the Lord\'s army',say:['o3','He appeared to Joshua and said: As commander of the army of the Lord, I have now come.']},
    {art:'lion',cap:'He comes to help Daniel in Persia',say:['o4','He came to help the prophet Daniel when he was alone in Persia.']},
   ],
   done:['o5','The Church celebrates his leading of Israel out of Egypt on [[hidar]] twelve.']},

  {game:'hold', bg:'night', chip:'Daniel prays',
   props:[{id:'dan',art:['figure',{robe:'#24418F',beard:'dark',arms:'pray'}],x:320,y:440,s:.6},{id:'mich',art:'michael',x:600,y:430,s:.6,hidden:true},{id:'glow',art:'glory',x:600,y:240,s:.8,hidden:true},{id:'moon',art:'moon',x:120,y:100,s:.5}],
   target:'dan', ms:6500, label:'Keep praying!',
   intro:['d1','Daniel was exiled in Persia, far from home. He prayed and fasted for his people to return to Jerusalem, and he felt all alone. Press and hold to keep Daniel praying.'],
   at:[{p:.5,say:['d2','Three whole weeks he kept praying.']}],
   after:{show:['mich','glow'],fx:'flash',sfx:'glory'},
   done:['d3','Then an angel said to him: Michael, one of the chief princes, came to help me. The help came while Daniel was praying. Angels come to us in loneliness, and pray for us.']},

  {game:'choose', bg:'day', chip:'Tell the truth',
   props:[{id:'kid',art:['figure',{kind:'teen',robe:'#2F7A4E',sleeve:'#2F7A4E'}],x:240,y:440,s:.75},{id:'mom',art:['figure',{robe:'#B3322A',netela:'#E2A62B'}],x:480,y:440,s:.65},{id:'pot',art:'pot',x:360,y:440,s:.4}],
   prompt:['c0','Hana broke her mother\'s favorite coffee cup by accident. Her mother asks: Who did this? What should she say?'],
   options:[
    {label:'It was my little brother.',art:'darkCloud',good:false,say:['c1','That is a lie, and it would hurt her brother too. Satan lost heaven through a lie. Try again.']},
    {label:'It was me. I am sorry.',art:'heart',then:{wiggle:['mom','kid']},say:['c2','Honest! Telling the truth can be hard, but it keeps our heart clean before God.']},
   ]},

  {game:'match', chip:'Church words',
   heading:'Match each word to its meaning',
   intro:['m0','Match each word to its meaning.'],
   pairs:[
    ['Michael','Who is like God?'],
    ['Archangel','One of the seven chief angels'],
    ['Angel','A messenger of God'],
    ['Hidar 12','The feast of St. Michael leading Israel out of Egypt'],
    ['Heavenly hosts','All the ranks of angels together'],
   ],
   done:['m1','Daniel wrote: At that time Michael shall stand up, the great prince who stands for the children of your people.']},

  {game:'verse', chip:'Memory verse',
   verse:'The angel of the Lord encamps all around those who fear Him, and delivers them.', ref:'Psalm 34:7',
   chunks:['The angel of the Lord','encamps all around','those who fear Him,','and delivers them.'],
   intro:['verse-intro','Our memory verse: The angel of the Lord encamps all around those who fear Him, and delivers them. Build it in order.'],
   done:['verse-done','Wherever you go, God\'s angels go with you.']},

  {game:'quiz', questions:[
    {id:'q1',q:'In which book do we read about the war in heaven?',a:[['Revelation','scroll'],['Genesis','fruitTree'],['Psalms','begena']],c:0},
    {id:'q2',q:'What caused the war in heaven?',a:[['Satan\'s lie that he was the creator','dragon'],['A fight over food','bread'],['A storm','storm']],c:0},
    {id:'q3',q:'Which prophet did Saint Michael help when he was alone in Persia?',a:[['Daniel','lion'],['Jonah','bigFish'],['Elijah','chariot']],c:0},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','There are two icons of Saint Michael in many churches. Which events from this lesson do they show?','One shows him defeating Satan; one shows him leading or protecting God\'s people.'],
    ['k2','Michael came while Daniel was praying. What does that teach you about times when you feel alone?'],
    ['k3','Satan lost everything through pride and a lie. Why is honesty so important for a Christian?'],
   ]},
 ]
});
