/* Level IV (Grade 7 and up), February week 3: The Great Supper (Luke 14:12-24) */
BKLesson({
 id:'L4-feb3', title:'The Great Supper', am:'ታላቁ እራት', sticker:'bread',
 pages:[
  {game:'cover', bg:'wedding', title:'The Great Supper', am:'ታላቁ እራት',
   props:[{art:'table',x:400,y:440,s:1.3},{art:'bread',x:360,y:360,s:.5},{art:'cup',x:450,y:370,s:.5},{art:['figure',{robe:'#6A3A8A',beard:'grey',arms:'out'}],x:620,y:440,s:.6}],
   say:['cover','[[selam]]! Imagine being invited to the greatest feast ever, and saying: Sorry, I am busy. Our Lord told a parable about that.'],
   parent:'<p>This lesson follows Level IV, February week 3: <b>The Great Supper</b> (Luke 14). Aim: learn about the consequence of making excuses.</p><p>Talk about it: What excuses keep our family from coming to church early?</p>'},

  {game:'story', bg:'wedding', chip:'Invite the poor',
   props:[{id:'jesus',art:'jesus',x:200,y:440,s:.6},{id:'man',art:['figure',{robe:'#24418F',beard:'dark'}],x:420,y:440,s:.55},{id:'p1',art:'lameMan',x:620,y:440,s:.5}],
   beats:[
    {say:['i1','At a dinner, Christ said: When you give a feast, invite the poor, the crippled, the lame and the blind. They cannot pay you back, but you will be repaid at the resurrection. Tap Christ.'],tap:'jesus'},
    {wiggle:['man'],say:['i2','A man at the table said: Blessed is he who shall eat bread in the kingdom of God! Then Christ told this parable.']},
   ]},

  {game:'sort', chip:'Excuses',
   bins:[{label:'An excuse',art:'darkCloud'},{label:'Keeping my responsibility',art:'church'}],
   intro:['e0','A man prepared a great supper and sent his servant to call the guests. But one said: I bought land, I must go and see it. Another: I bought five oxen, I must test them. Another: I just got married, I cannot come. What about us? Sort these.'],
   items:[
    {t:'I stayed up late watching TV, so I could not wake up for church.',b:0},
    {t:'I set my alarm early on Sunday.',b:1},
    {t:'My parents did not wake me up.',b:0,why:['e1','Blaming parents is still an excuse. Try again.']},
    {t:'I finish my homework before I play.',b:1},
    {t:'Everyone else was late too.',b:0},
    {t:'I help get my little brother ready for church.',b:1},
   ],
   done:['e2','Making excuses does not take away our responsibility.']},

  {game:'drag', bg:'wedding', chip:'Fill the house',
   props:[{id:'house',art:'house',x:560,y:440,s:.85},{id:'host',art:['figure',{robe:'#6A3A8A',beard:'grey',arms:'out'}],x:720,y:440,s:.55}],
   items:[{art:'lameMan',x:90,y:440,s:.4},{art:'blindMan',x:200,y:440,s:.45},{art:['figure',{robe:'#8C8478',sleeve:'#8C8478',beard:'grey',staff:true}],x:300,y:440,s:.45},{art:['figure',{kind:'child',robe:'#5B4D3C'}],x:150,y:330,s:.6}],
   zone:{x:420,y:240,w:300,h:210},
   intro:['d0','The master was angry. He said: Go out quickly into the streets, and bring in the poor, the crippled, the lame and the blind. Drag each guest into the house.'],
   done:['d1','There was still room, so he sent out again, until his house was full. But he said: None of those who were invited and made excuses shall taste my supper.']},

  {game:'match', chip:'What it means',
   heading:'Match each part of the parable to its meaning',
   intro:['m0','Match each part of the parable to its meaning.'],
   pairs:[
    ['The master','Jesus Christ'],
    ['The great supper','Holy Communion, and the joy of His kingdom'],
    ['The invitation','God\'s call to everyone to inherit the kingdom'],
    ['The servants','The prophets, apostles and teachers'],
    ['Those who made excuses','People who keep saying not now to God'],
   ],
   done:['m1','Christ has prepared His Body and Blood for us. Let\'s not miss the supper because of excuses.']},

  {game:'verse', chip:'Memory verse',
   verse:'Blessed is he who shall eat bread in the kingdom of God!', ref:'Luke 14:15',
   intro:['verse-intro','Our memory verse: Blessed is he who shall eat bread in the kingdom of God! Build it in order.'],
   done:['verse-done','Well done!']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf0','True or false?'],
   items:[
    {id:'t1',s:'The invited guests were too sick to come.',t:false,why:'They had land, oxen and a wedding. They were busy, not sick.'},
    {id:'t2',s:'The poor, the lame and the blind ate the great supper.',t:true,why:'The master filled his house with them.'},
    {id:'t3',s:'The great supper is a symbol of Holy Communion.',t:true,why:'Christ invites us to His table.'},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','What excuses do people make for not coming to church, or not coming early?'],
    ['k2','What excuses do you make for not doing your homework or your chores? What could you do instead?'],
    ['k3','Why does Christ tell us to invite people who cannot pay us back?'],
   ]},
 ]
});
