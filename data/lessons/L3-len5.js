/* Level III (Grades 4-6), Lent week 5: Jesus on the Mount of Olives, Debre Zeit (Matthew 24-25; Matthew 25:40) */
BKLesson({
 id:'L3-len5', title:'The Least of These', am:'ደብረ ዘይት', sticker:'heart',
 pages:[
  {game:'cover', bg:'mountain', title:'The Least of These', am:'ደብረ ዘይት',
   props:[{art:'jesus',x:640,y:440,s:.6},{art:'peter',x:150,y:440,s:.5},{art:'disciple',x:240,y:440,s:.5}],
   say:['cover','[[selam]]! On the Mount of Olives, Jesus taught His disciples about the day He will come again in glory. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, Lent week 5: <b>Jesus on the Mount of Olives</b> (Debre Zeit; Matthew 24-25). Aim: learn that serving people in need is serving Christ.</p><p>Talk about it: Who are "the least of these" near you? How could your family help someone this week?</p>'},

  {game:'read', chip:'Read', heading:'When the Son of Man comes', pic:'glory',
   paras:[
    ['r1','Jesus told His disciples what will happen on the last day. He will come in glory, with all the holy angels, and sit on His throne.'],
    ['r2','All the people of the earth will be gathered before Him. He will separate them, as a shepherd separates sheep from goats: the righteous on His right, and the wicked on His left.'],
   ]},

  {game:'read', chip:'Read', heading:'Come, you blessed', pic:'heart',
   paras:[
    ['r3','To those on His right He will say: Come, you blessed of My Father, inherit the kingdom prepared for you from the foundation of the world.'],
    ['r4','For I was hungry and you gave Me food. I was thirsty and you gave Me drink. I was a stranger and you took Me in.'],
    ['r5','I needed clothes and you clothed Me. I was sick and you visited Me. I was in prison and you came to Me.'],
    ['r6','They will ask: Lord, when did we see You like that? He will answer: Whatever you did for one of the least of these, you did it for Me.'],
    ['r7','But those who never helped anyone in need will be sent away from Him into everlasting punishment.'],
   ]},

  {game:'match', chip:'Serving Christ', heading:'Match each need to how we can help',
   intro:['match-intro','Tap a need, then tap how we can help.'],
   pairs:[['Hungry','Share food',null,'injera'],['Thirsty','Give a drink',null,'cup'],['Sick','Visit and pray',null,'bed'],['A stranger','Welcome them',null,'door']],
   done:['match-done','When we help them, we help Jesus!']},

  {game:'tapmany', bg:'field', chip:'Acts of mercy',
   props:[{art:'crowd',x:400,y:440,s:.8}],
   area:{x0:40,y0:120,x1:760,y1:330}, count:6, spawn:{art:'heart',s:[.4,.5],anim:'bob'}, sfx:'pop',
   progress:'*{n} more*!',
   intro:['mercy','Jesus named six acts of mercy: food, drink, welcome, clothes, visiting the sick, and visiting prisoners. Tap to give six hearts of love!'],
   done:['mercy-done','Come, you blessed of My Father!']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Jesus will come again in glory with His angels.',t:true,why:'He will judge all the people of the earth.',pic:'glory'},
    {id:'t2',s:'Helping a poor person is like helping Jesus.',t:true,why:'Whatever you did for the least of these, you did for Me.',pic:'heart'},
    {id:'t3',s:'Only rich people can help others.',t:false,why:'Even a cup of water given with love counts.',pic:'cup'},
   ],
   done:['tf-done','Well done!']},

  {game:'verse', chip:'Memory verse',
   verse:'Inasmuch as you did it to one of the least of these My brethren, you did it to Me.', ref:'Matthew 25:40',
   chunks:['Inasmuch as you did it','to one of the least','of these My brethren,','you did it to Me.'],
   intro:['verse-intro','Our memory verse is from the Gospel of Matthew. Listen: Inasmuch as you did it to one of the least of these My brethren, you did it to Me. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Where did Jesus teach this?',a:[['The Mount of Olives','acacia'],['A boat','boat'],['The temple roof','temple']],c:0},
    {id:'q2',q:'What will Jesus say to the righteous?',a:[['Come, you blessed of My Father','glory'],['Go away','door'],['Be quiet','crowd']],c:0},
    {id:'q3',q:'When we visit the sick, who are we serving?',a:[['Jesus','jesus'],['Only ourselves','bed'],['No one','stone']],c:0},
   ]},
 ]
});
