/* Level IV (Grade 7 and up), July week 2: The Martyrdom of St Stephen (Acts 6-7) */
BKLesson({
 id:'L4-jul2', title:'Saint Stephen', am:'ቅዱስ እስጢፋኖስ', sticker:'stone',
 pages:[
  {game:'cover', bg:'egypt', title:'Saint Stephen, the First Martyr', am:'ቅዱስ እስጢፋኖስ',
   props:[{art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',sash:'#B3322A',halo:true,arms:'up'}],x:400,y:440,s:.65},{art:'glory',x:400,y:120,s:.9}],
   say:['cover','[[selam]]! A martyr is someone who gives his life rather than stop believing in Christ. After the Ascension, the very first was a young deacon named Stephen. Today we see how he followed Christ to the end.'],
   parent:'<p>This lesson follows Level IV, July week 2: <b>The Martyrdom of St Stephen</b> (Acts 6 and 7). Aim: learn how St Stephen followed the example of Christ.</p><p>Our Church calls him the First Martyr and the chief of deacons.</p>'},

  {game:'story', bg:'egypt', chip:'Seven deacons',
   props:[{id:'ap',art:'peter',x:150,y:440,s:.55},{id:'st',art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',sash:'#B3322A'}],x:400,y:440,s:.55},{id:'d2',art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',sash:'#2F7A4E',beard:'dark'}],x:480,y:440,s:.5},{id:'d3',art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',sash:'#24418F'}],x:560,y:440,s:.5},{id:'glow',art:'glory',x:400,y:300,s:.6,hidden:true}],
   beats:[
    {say:['d1','As the Church grew, the apostles and the believers chose seven deacons to serve the faithful. Tap Stephen.'],tap:'st'},
    {show:['glow'],say:['d2','Stephen was honest, full of wisdom, and filled with the Holy Spirit. He did great wonders and miracles among the people.']},
    {say:['d3','Some men from the synagogue argued with him, but they could not stand against his wisdom. So they found false witnesses, who said: He speaks against the holy place, the Law and Moses.']},
   ]},

  {game:'order', chip:'Stephen speaks',
   intro:['o0','At his trial, the high priest asked: Are these things true? Stephen was not afraid. Tap what he told them, in order.'],
   cards:[
    {art:'abraham',cap:'The history of Israel, from Abraham',say:['o1','He told them the history of their people, starting with Abraham.']},
    {art:'scroll',cap:'The prophets foretold the Christ',say:['o2','He showed how the prophets foretold the coming of Christ.']},
    {art:'cross',cap:'It all came true in Jesus',say:['o3','And how it all came true: His birth, suffering, crucifixion, resurrection and ascension.']},
    {art:'heart',cap:'You always resist the Holy Spirit',say:['o4','Then he said boldly: You stiff-necked people! You always resist the Holy Spirit.']},
   ],
   done:['o5','He told the truth, even though he knew it might cost him his life.']},

  {game:'story', bg:'sunrise', chip:'He saw heaven open',
   props:[{id:'st',art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',sash:'#B3322A',arms:'up'}],x:400,y:440,s:.6},{id:'crowd',art:'crowd',x:150,y:445,s:.6},{id:'c2',art:'crowd',x:660,y:445,s:.6},{id:'glow',art:'glory',x:400,y:110,s:1,hidden:true},{id:'s1',art:'stone',x:300,y:430,s:.5,hidden:true},{id:'s2',art:'stone',x:500,y:430,s:.5,hidden:true},{id:'st2',art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',sash:'#B3322A',arms:'pray',closedEyes:true}],x:400,y:440,s:.6,hidden:true}],
   beats:[
    {wiggle:['crowd','c2'],say:['h1','They were furious. They dragged him out of the city to stone him. But Stephen was not afraid. He looked up to heaven. Tap Stephen.'],tap:'st'},
    {show:['glow'],fx:'flash',sfx:'glory',say:['h2','He saw heaven opened, and the glory of God: the Father, the Son and the Holy Spirit.']},
    {show:['s1','s2'],say:['h3','As the stones fell, he prayed: Lord Jesus, receive my spirit.']},
    {hide:['st'],show:['st2'],say:['h4','Then he knelt and cried out: Lord, do not hold this sin against them. And with that, he fell asleep in the Lord.']},
   ]},

  {game:'match', chip:'Like his Lord',
   heading:'Match what Christ did to what Stephen did',
   intro:['m0','Stephen learned from Christ. Match them.'],
   pairs:[
    ['Christ: Father, forgive them','Stephen: Lord, do not hold this sin against them'],
    ['Christ: Into Your hands I commit My spirit','Stephen: Lord Jesus, receive my spirit'],
    ['Christ was falsely accused','Stephen was falsely accused'],
   ],
   done:['m1','Stephen followed Christ\'s example, and became an example for us.']},

  {game:'verse', chip:'Memory verse',
   verse:'Lord, lay not this sin to their charge.', ref:'Acts 7:60',
   intro:['verse-intro','Our memory verse is Stephen\'s last prayer: Lord, lay not this sin to their charge. Build it in order.'],
   done:['verse-done','The martyrs received crowns of glory, and they live with God forever.']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf0','True or false?'],
   items:[
    {id:'t1',s:'Stephen was one of the seven deacons.',t:true,why:'He was chosen to serve the faithful.'},
    {id:'t2',s:'Stephen asked God to punish the people who stoned him.',t:false,why:'He prayed for them to be forgiven.'},
    {id:'t3',s:'Stephen was the first martyr after the Ascension of Christ.',t:true,why:'That is why we call him the First Martyr.'},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Do you always tell the truth, even when it may get you into trouble?'],
    ['k2','Stephen prayed for the people hurting him. Is there someone you can pray for, who has been unkind to you?'],
    ['k3','What is martyrdom, and why does the Church honor the martyrs?'],
   ]},
 ]
});
