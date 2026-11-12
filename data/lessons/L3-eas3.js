/* Level III (Grades 4-6), Easter season week 3: The Birth of the Virgin Mary (Synaxarium, Ginbot 1; Miracles of Mary; Luke 1:28) */
BKLesson({
 id:'L3-eas3', title:'The Moon and the Sun', am:'ልደታ ለማርያም', sticker:'moon',
 pages:[
  {game:'cover', bg:'night', title:'The Moon and the Sun', am:'ልደታ ለማርያም',
   props:[{art:'moon',x:560,y:130,s:.7},{art:'sun',x:700,y:150,s:.6},{art:['figure',{robe:'#24418F',netela:'#FFFFFF',halo:true,arms:'pray'}],x:170,y:440,s:.6}],
   say:['cover','[[selam]]! Long before [[mariam]] was born, her family saw a wonderful dream about a moon and a sun. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, Easter week 3: <b>The Birth of the Virgin Mary</b> (Synaxarium of Ginbot 1; Miracles of Mary). Aim: learn the Church\'s tradition about the Virgin Mary\'s ancestors and birth. Her parents are called Iyakem and Hanna (Joachim and Anna).</p><p>Talk about it: What did the moon and the sun mean in the dream?</p>'},

  {game:'read', chip:'Read', heading:'A dream of six generations', pic:'cow',
   paras:[
    ['r1','Long ago in Jerusalem there lived a rich, God-fearing husband and wife who had no child. They prayed to God for one.'],
    ['r2','In a dream they saw a cow give birth to a calf, and that calf to another, for six generations. The sixth gave birth to a moon, and the moon gave birth to a sun!'],
    ['r3','A man with the gift of explaining dreams told them: You will have children for six generations. From the sixth will come a child greater than all creation. That is the moon. But he did not know what the sun meant.'],
    ['r4','It happened as he said. In the sixth generation a girl named Hanna was born. She married a man named Iyakem.'],
   ]},

  {game:'read', chip:'Read', heading:'Faithful and patient', pic:['figure',{robe:'#F4EEDF',sleeve:'#F4EEDF',beard:'white',halo:true,staff:true}],
   paras:[
    ['r5','Iyakem and Hanna grew old without a child. People said God was punishing them for their sin.'],
    ['r6','But they were kind to the poor and obeyed God\'s commandments, and they kept praying without losing hope.'],
    ['r7','God sent an angel to Iyakem: God has heard your prayer. You will have a child! Iyakem ran with joy to tell Hanna.'],
   ]},

  {game:'story', bg:'mountain', chip:'Born on Mount Lebanon',
   props:[{id:'aunt',art:['woman',{robe:'#8C8478',netela:'#F4EEDF'}],x:620,y:440,s:.55},{id:'an',art:['figure',{robe:'#24418F',netela:'#FFFFFF',halo:true}],x:470,y:440,s:.6},{id:'jo',art:['figure',{robe:'#F4EEDF',sleeve:'#F4EEDF',beard:'white',halo:true,staff:true}],x:330,y:440,s:.6},{id:'sp',art:'sparkles',x:620,y:250,s:.7,hidden:true},{id:'glow',art:'glory',x:400,y:200,s:.9,hidden:true},{id:'moon',art:'moon',x:400,y:150,s:.6,hidden:true}],
   beats:[
    {wiggle:['aunt'],say:['s1','Hanna\'s aunt was blind in one eye. She touched Hanna, then touched her own eye. Tap the aunt.'],tap:'aunt'},
    {show:['sp'],sfx:'glory',say:['s2','She could see with both eyes! Many sick people came and were healed.']},
    {wiggle:['jo'],say:['s3','The leaders were afraid of these miracles. An angel told Iyakem to take Hanna to Mount Lebanon.']},
    {show:['glow','moon'],sfx:'glory',fx:'confetti',say:['s4','There, on Ginbot 1, Hanna gave birth to a beautiful girl, and named her [[mariam]]. She was the moon of the dream, and her Son, Jesus Christ, is the Sun of righteousness!']},
   ],
   parent:'<p>The Church calls Christ the "Sun of righteousness" (Malachi 4:2) and the Virgin Mary the moon who carries His light.</p>'},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Hanna was born in the sixth generation of the dream.',t:true,why:'Her daughter [[mariam]] was the moon.',pic:'moon'},
    {id:'t2',s:'Iyakem and Hanna stopped praying when they grew old.',t:false,why:'They prayed without losing hope.',pic:'glory'},
    {id:'t3',s:'The sun in the dream means Jesus Christ.',t:true,why:'He is the Sun of righteousness, born of [[mariam]].',pic:'sun'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'[[mariam]]\'s mother was ___.',a:'Hanna',opts:['Sarah','Elizabeth']},
    {id:'f2',s:'[[mariam]]\'s father was ___.',a:'Iyakem',opts:['Joseph','Zechariah']},
    {id:'f3',s:'[[mariam]] was born on Mount ___.',a:'Lebanon',opts:['Sinai','Tabor']},
    {id:'f4',s:'Her birthday is the first of ___.',a:'Ginbot',opts:['Meskerem','Tir']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'Rejoice, highly favored one, the Lord is with you; blessed are you among women!', ref:'Luke 1:28',
   chunks:['Rejoice, highly favored one,','the Lord is with you;','blessed are you','among women!'],
   intro:['verse-intro','Our memory verse is the Archangel Gabriel\'s greeting to [[mariam]]. Listen: Rejoice, highly favored one, the Lord is with you; blessed are you among women! Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'In the dream, who was the moon?',a:[['The Virgin [[mariam]]','moon'],['King David','begena'],['Moses','moses']],c:0},
    {id:'q2',q:'How did Hanna\'s aunt get her sight back?',a:[['She touched Hanna, then her eye','sparkles'],['A doctor helped her','pot'],['She washed in a river','waterWall']],c:0},
    {id:'q3',q:'Who told Iyakem the good news?',a:[['An angel','angel'],['A soldier','soldier'],['A shepherd','shepherd']],c:0},
   ]},
 ]
});
