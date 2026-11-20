/* Level IV (Grade 7 and up), December week 2: The Virgin Mary (Ezekiel 44:1-2; Psalm 45:10-11; Luke 1; John 2:1-11; John 19:26-27) */
BKLesson({
 id:'L4-dec2', title:'The Virgin Mariam', am:'ድንግል ማርያም', sticker:'adeyAbeba',
 pages:[
  {game:'cover', bg:'church', title:'The Virgin Mariam', am:'ድንግል ማርያም',
   props:[{art:'icon',x:400,y:420,s:1.5},{art:'candle',x:220,y:430,s:.6},{art:'candle',x:580,y:430,s:.6},{art:'adeyAbeba',x:120,y:440,s:.6}],
   say:['cover','[[selam]]! The Virgin [[mariam]] is the Mother of our Lord. Why does the Church praise her so much? Let\'s learn her story.'],
   parent:'<p>This lesson follows Level IV, December week 2: <b>The Virgin Mary</b> (Ezekiel 44; Luke 1). Aim: learn about the Virgin Mary and why we venerate her.</p><p>For next week: look at one icon of the Virgin Mary in your church and describe it.</p>'},

  {game:'story', bg:'egypt', chip:'The closed gate',
   props:[{id:'gate',art:'gate',x:420,y:440,s:.85},{id:'ez',art:['figure',{robe:'#8A5A30',beard:'grey'}],x:160,y:440,s:.55},{id:'glow',art:'glory',x:420,y:200,s:.9,hidden:true}],
   beats:[
    {say:['g1','Hundreds of years before, God showed the prophet Ezekiel the east gate of the sanctuary. It was shut. Tap the gate.'],tap:'gate'},
    {show:['glow'],sfx:'glory',say:['g2','The Lord said: This gate shall be shut. No man shall enter by it, because the Lord God of Israel has entered by it.']},
    {say:['g3','The gate is the Virgin [[mariam]]. She was a virgin before giving birth to Christ, and remained a virgin all her life. We call her ever-virgin.']},
   ]},

  {game:'order', chip:'Her life',
   intro:['o0','Tap the events of the Virgin [[mariam]]\'s life in order.'],
   cards:[
    {art:'family',cap:'Born to Iyakem and Hanna',say:['o1','She was born to the righteous [[iyakem]] and [[hanna]], who promised to give their child to God.']},
    {art:'temple',cap:'Brought to the Temple at three',say:['o2','At three years old she was brought to the Temple, where angels fed her as she prayed and served God.']},
    {art:'joseph',cap:'Given to Joseph\'s care at fifteen',say:['o3','At fifteen she was entrusted to old Joseph, her relative, to keep and protect her.']},
    {art:'gabriel',cap:'Gabriel\'s good news',say:['o4','The Archangel Gabriel told her she would bear the Son of God.']},
    {art:'wedding',cap:'The wedding at Cana',say:['o5','At her request, Christ did His first miracle at Cana.']},
    {art:'calvary',cap:'Beneath the Cross',say:['o6','She stood beneath the Cross with Saint John.']},
   ],
   done:['o7','A whole life given to God.']},

  {game:'repeat', bg:'wedding', chip:'The wedding at Cana',
   props:[{id:'j1',art:'jar',x:180,y:350,s:.5},{id:'j2',art:'jar',x:260,y:350,s:.5},{id:'j3',art:'jar',x:340,y:350,s:.5},{id:'j4',art:'jar',x:420,y:350,s:.5},{id:'j5',art:'jar',x:500,y:350,s:.5},{id:'j6',art:'jar',x:580,y:350,s:.5},
    {id:'mary',art:'mary',x:700,y:440,s:.5},{id:'glow',art:'glory',x:380,y:250,s:1,hidden:true}],
   button:{label:'Fill with water',art:'jar'},
   intro:['w0','At a wedding in Cana, the wine ran out. The Virgin [[mariam]] told her Son: They have no wine. Then she told the servants: Whatever He says to you, do it. Jesus said: Fill the jars with water. Tap to fill all six.'],
   steps:[{wiggle:['j1']},{wiggle:['j2']},{wiggle:['j3']},{wiggle:['j4']},{wiggle:['j5']},{wiggle:['j6']}],
   final:{label:'Serve it!',art:'cup',prompt:['w1','They filled them to the brim. Now Jesus says: Draw some out, and take it to the master of the feast. Tap Serve it!'],
    show:['glow'],fx:'flash',sfx:'glory',say:['w2','The water had become the best wine! This was Christ\'s first miracle, done at His mother\'s request.']},
   done:['w3','The Virgin [[mariam]] saw the family\'s need before they even asked. She still brings our needs to her Son.']},

  {game:'match', chip:'Who praised her?',
   heading:'Match each person to their words about the Virgin Mariam',
   intro:['m0','We learned to praise the Virgin [[mariam]] from angels and saints. Match each one to their words.'],
   pairs:[
    ['The Archangel Gabriel','Rejoice, full of grace, the Lord is with you'],
    ['Elizabeth','Why is it granted to me that the mother of my Lord should come to me?'],
    ['King David','The King desires your beauty'],
    ['Christ on the Cross','Behold your mother'],
    ['The Virgin herself','All generations will call me blessed'],
   ],
   done:['m1','When we praise her, we join Gabriel and Elizabeth. On the Cross, Saint John received her as his mother on behalf of us all.']},

  {game:'verse', chip:'Memory verse',
   verse:'All generations will call me blessed.', ref:'Luke 1:48',
   intro:['verse-intro','Our memory verse is what the Virgin said in her song of praise: All generations will call me blessed. Build it in order.'],
   done:['verse-done','And we are one of those generations!']},

  {game:'quiz', questions:[
    {id:'q1',q:'Why do we call the Virgin [[mariam]] the Mother of God?',a:[['Because Jesus Christ, her Son, is God','cross'],['Because she made the world','sun'],['Because she is an angel','angel']],c:0},
    {id:'q2',q:'Which prophet saw the shut gate?',a:[['Ezekiel','gate'],['Jonah','bigFish'],['Moses','burningBush']],c:0},
    {id:'q3',q:'What was Christ\'s first miracle, done at her request?',a:[['Water into wine at Cana','jar'],['Walking on water','boat'],['Feeding five thousand','basket']],c:0},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','The Virgin noticed the family at Cana needed help before they asked. Who around you needs help that no one has noticed?'],
    ['k2','God chose her because of her purity and humility. What does humility look like for someone your age?'],
    ['k3','Describe one icon of the Virgin [[mariam]] in your church. What is she doing in it?'],
   ]},
 ]
});
