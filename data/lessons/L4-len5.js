/* Level IV (Grade 7 and up), Lent week 5: The Parable on the Mount of Olives, the Ten Virgins and the Last Judgment (Matthew 25) */
BKLesson({
 id:'L4-len5', title:'The Ten Virgins', am:'ደብረ ዘይት', sticker:'candle',
 pages:[
  {game:'cover', bg:'night', title:'The Ten Virgins', am:'ደብረ ዘይት',
   props:[{art:'lamp',x:220,y:420,s:.8},{art:['lamp',{out:true}],x:580,y:420,s:.8,flip:true},{art:'moon',x:400,y:100,s:.6}],
   say:['cover','[[selam]]! On the Mount of Olives, our Lord told a parable about ten young women waiting for a bridegroom. Five were wise and five were foolish. Which would you be?'],
   parent:'<p>This lesson follows Level IV, Lent week 5: <b>The Parable on the Mount of Olives</b> (Matthew 25). Aim: learn the importance of spiritual preparedness, faith and virtues.</p><p>The fifth Sunday of the Great Lent is Debre Zeit, the Mount of Olives, when the Church remembers Christ\'s teaching about His second coming.</p>'},

  {game:'collect', bg:'night', chip:'Be ready',
   props:[{id:'w',art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',longHair:true,netela:'#E2A62B'}],x:620,y:440,s:.6},{id:'lamp',art:'lamp',x:620,y:300,s:.6}],
   items:[[180,430],[240,440],[300,430],[210,390],[270,395]].map(([x,y])=>({art:'jar',x,y,s:.35})),
   slots:[[540,440,.3],[580,440,.3],[660,440,.3],[700,440,.3],[740,440,.3]],
   intro:['o1','Ten virgins took their lamps to meet the bridegroom. The five wise ones also took extra oil in jars. Be wise: collect the oil jars!'],
   done:['o2','Ready! The foolish five took their lamps, but no extra oil.']},

  {game:'story', bg:'night', chip:'At midnight',
   props:[{id:'wise',art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',longHair:true,netela:'#E2A62B',arms:'hold'}],x:180,y:440,s:.55},{id:'l1',art:'lamp',x:180,y:330,s:.5},
    {id:'fool',art:['figure',{robe:'#8C8478',sleeve:'#8C8478',longHair:true,arms:'hold'}],x:420,y:440,s:.55},{id:'l2',art:['lamp',{out:true}],x:420,y:330,s:.5},
    {id:'door',art:'door',x:680,y:440,s:.8},{id:'groom',art:'jesus',x:680,y:440,s:.6,hidden:true}],
   beats:[
    {say:['mn1','The bridegroom was a long time coming, and they all fell asleep.']},
    {show:['groom'],sfx:'glory',say:['mn2','At midnight a cry rang out: Here is the bridegroom! Come out to meet him! Tap the bridegroom.'],tap:'groom'},
    {wiggle:['fool'],say:['mn3','The foolish ones said: Give us some of your oil, our lamps are going out! The wise said: There may not be enough. Go and buy some.']},
    {move:{wise:[620,440],l1:[620,330],fool:[-100,440],l2:[-100,330]},say:['mn4','While they were away, the bridegroom came. Those who were ready went in with him to the wedding, and the door was shut.']},
    {move:{fool:[420,440],l2:[420,330]},wiggle:['door'],say:['mn5','Later the others came: Lord, Lord, open to us! But he said: I do not know you. Watch, for you do not know the day or the hour.']},
   ]},

  {game:'match', chip:'What it means',
   heading:'Match each part of the parable to its meaning',
   intro:['m0','Match each part of the parable to its meaning.'],
   pairs:[
    ['The bridegroom','Christ, who will come again'],
    ['The lamp','Faith'],
    ['The oil','Good deeds'],
    ['The wise virgins','Those who live a holy life and are ready'],
    ['The shut door','The time to prepare will end'],
   ],
   done:['m1','Faith needs good deeds, as a lamp needs oil.']},

  {game:'sort', chip:'Right or left?',
   bins:[{label:'Come, you blessed',art:'sheep'},{label:'Depart from Me',art:'goat'}],
   intro:['j0','Then Christ told what will happen when He comes in glory to judge. He will put the sheep on His right and the goats on His left. Sort these.'],
   items:[
    {t:'I was hungry, and you gave Me food.',b:0},
    {t:'I was thirsty, and you gave Me no drink.',b:1},
    {t:'I was a stranger, and you took Me in.',b:0},
    {t:'I was sick, and you did not visit Me.',b:1},
    {t:'I was in prison, and you came to Me.',b:0},
   ],
   done:['j1','He will say to the blessed: Inherit the kingdom prepared for you from the foundation of the world. God made us for His kingdom from the very beginning.']},

  {game:'verse', chip:'Memory verse',
   verse:'Inasmuch as you did it to one of the least of these My brethren, you did it to Me.', ref:'Matthew 25:40',
   chunks:['Inasmuch as you did it','to one of the least','of these My brethren,','you did it to Me.'],
   intro:['verse-intro','Our memory verse: Inasmuch as you did it to one of the least of these My brethren, you did it to Me. Build it in order.'],
   done:['verse-done','Every kindness to someone in need is a kindness to Christ.']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf0','True or false?'],
   items:[
    {id:'t1',s:'The wise virgins shared their oil with the foolish ones.',t:false,why:'They could not. No one can be ready for us; each must prepare for himself.'},
    {id:'t2',s:'Christ told this parable on the Mount of Olives.',t:true,why:'The Church remembers it on [[debre-zeit]] Sunday.'},
    {id:'t3',s:'We know the exact day Christ will come again.',t:false,why:'No one knows the day or the hour. That is why we stay ready.'},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','How do you prepare for an exam? How is getting ready for God\'s kingdom like that?'],
    ['k2','What good deed can you add to your lamp this week?'],
    ['k3','Christ told another parable the same day. Can you find it in Matthew 25 for next week?','The parable of the talents.'],
   ]},
 ]
});
