/* Level III (Grades 4-6), July week 2: The Conversion of Saul (Acts 9:1-22; Acts 9:15) */
BKLesson({
 id:'L3-jul2', title:'Light on the Damascus Road', am:'የሳውል መመለስ', sticker:'sun',
 pages:[
  {game:'cover', bg:'desert', title:'Light on the Damascus Road', am:'የሳውል መመለስ',
   props:[{art:'glory',x:640,y:260,s:1.1},{art:['figure',{robe:'#24418F',sleeve:'#24418F',beard:'dark'}],x:170,y:440,s:.6},{art:'city',x:700,y:440,s:.5}],
   say:['cover','[[selam]]! A man who hurt Christians met Jesus on the road, and became the great apostle Saint Paul. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, July week 2: <b>The Conversion of Saul</b> (Acts 9). Aim: learn that God can change any heart, and calls each of us for a purpose.</p><p>Talk about it: Why was Ananias afraid? Why did he go anyway?</p>'},

  {game:'read', chip:'Read', heading:'Saul the persecutor', pic:'scroll',
   paras:[
    ['r1','A man named Saul threatened and persecuted the followers of Jesus. He did not believe that Jesus was the Son of God.'],
    ['r2','He got letters from the high priest to go to Damascus, and to arrest any Christians he found there.'],
   ]},

  {game:'story', bg:'desert', chip:'Saul, Saul!',
   props:[{id:'saul',art:['figure',{robe:'#24418F',sleeve:'#24418F',beard:'dark'}],x:300,y:440,s:.6},{id:'down',art:['sleeper',{robe:'#24418F'}],x:300,y:440,s:.8,hidden:true},{id:'glow',art:'glory',x:520,y:220,s:1.2,hidden:true},{id:'m1',art:'man',x:120,y:440,s:.5}],
   beats:[
    {move:{saul:[420,440,.6]},say:['s1','As Saul came near Damascus, suddenly a light from heaven flashed around him!']},
    {show:['glow'],hide:['saul'],sfx:'glory',say:['s2','He fell to the ground.']},
    {show:['down'],say:['s3','He heard a voice: Saul, Saul, why are you persecuting Me? Saul said: Who are You, Lord? The voice said: I am Jesus, whom you are persecuting. Tap Saul.'],tap:'down'},
    {hide:['glow'],say:['s4','Trembling, Saul asked: Lord, what do You want me to do? Jesus said: Go into the city, and you will be told.']},
    {wiggle:['m1'],say:['s5','Saul got up, but he could not see. His companions led him by the hand into Damascus.']},
   ]},

  {game:'read', chip:'Read', heading:'A chosen vessel', pic:'dove',
   paras:[
    ['r3','For three days Saul could not see, and he did not eat or drink. He prayed.'],
    ['r4','The Lord spoke in a vision to a disciple named Ananias: Go to Saul. Ananias was afraid: Lord, he has done much harm to Your people!'],
    ['r5','The Lord said: Go, for he is a chosen vessel of Mine, to carry My name to the nations.'],
    ['r6','Ananias laid his hands on him: Brother Saul, the Lord Jesus has sent me, so that you may see again and be filled with the Holy Spirit. Something like scales fell from his eyes. He could see! He was baptized and began to preach about Jesus at once.'],
   ],
   parent:'<p>Saul is also called Paul. He wrote fourteen epistles in the New Testament.</p>'},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Saul used to persecute Christians.',t:true,why:'He did not yet believe in Jesus.',pic:'chains'},
    {id:'t2',s:'Jesus spoke to Saul from a bright light.',t:true,why:'Saul, Saul, why are you persecuting Me?',pic:'glory'},
    {id:'t3',s:'Ananias was happy to go to Saul right away.',t:false,why:'He was afraid at first, but he obeyed the Lord.',pic:'man'},
   ],
   done:['tf-done','Well done!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'Saul was going to the city of ___.',a:'Damascus',opts:['Lystra','Jericho']},
    {id:'f2',s:'Saul could not see for ___ days.',a:'three',opts:['forty','seven']},
    {id:'f3',s:'The disciple sent to Saul was ___.',a:'Ananias',opts:['Philip','Stephen']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'He is a chosen vessel of Mine to bear My name before Gentiles, kings, and the children of Israel.', ref:'Acts 9:15',
   chunks:['He is a chosen vessel of Mine','to bear My name','before Gentiles, kings,','and the children of Israel.'],
   intro:['verse-intro','Our memory verse is what the Lord said about Saul. Listen: He is a chosen vessel of Mine to bear My name before Gentiles, kings, and the children of Israel. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'What happened on the road to Damascus?',a:[['A light from heaven shone','glory'],['A storm came','rain'],['A lion appeared','lion']],c:0},
    {id:'q2',q:'What did Saul become?',a:[['An apostle of Jesus','bible'],['A king','king'],['A soldier','soldier']],c:0},
    {id:'q3',q:'What fell from Saul\'s eyes?',a:[['Something like scales','sparkles'],['Tears of gold','gift'],['Nothing','stone']],c:0},
   ]},
 ]
});
