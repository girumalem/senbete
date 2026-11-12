/* Level III (Grades 4-6), February week 2: The Calling of Matthew and the Twelve (Matthew 9-10; Mark 2-3; Luke 5-6; Matthew 9:13) */
BKLesson({
 id:'L3-feb2', title:'Matthew and the Twelve', am:'ማቴዎስ', sticker:'table',
 pages:[
  {game:'cover', bg:'day', title:'Matthew and the Twelve', am:'ማቴዎስ',
   props:[{art:'table',x:640,y:440,s:.9},{art:['man',{robe:'#6A3A8A'}],x:720,y:440,s:.55},{art:'jesus',x:170,y:440,s:.6}],
   say:['cover','[[selam]]! Jesus called a tax collector to follow Him, and he became the writer of the first Gospel. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, February week 2: <b>The Calling of Matthew and the Twelve Disciples</b> (Matthew 9-10). Aim: learn that Jesus calls sinners to repentance, and learn the names of the twelve.</p><p>Talk about it: What did Jesus mean by "I desire mercy, not sacrifice"?</p>'},

  {game:'read', chip:'Read', heading:'Follow Me', pic:'table',
   paras:[
    ['r1','Matthew was a tax collector. In those days, tax collectors were known for cheating people and taking bribes.'],
    ['r2','One day Jesus passed by where Matthew was sitting at his tax table, and said: Follow Me.'],
    ['r3','Matthew got up at once, left everything, and followed Him.'],
   ]},

  {game:'story', bg:'day', chip:'A doctor for the sick',
   props:[{id:'tab',art:['table',{coins:false}],x:420,y:440,s:1.1},{id:'jesus',art:'jesus',x:420,y:420,s:.55},{id:'mat',art:['man',{robe:'#6A3A8A'}],x:550,y:440,s:.55},{id:'m2',art:['man',{robe:'#8C8478'}],x:300,y:440,s:.55},{id:'ph',art:['priest',{}],x:120,y:440,s:.55}],
   beats:[
    {wiggle:['jesus','mat'],say:['s1','That same day, Jesus ate dinner with Matthew and many other tax collectors.']},
    {wiggle:['ph'],say:['s2','Some leaders complained: Why does your Teacher eat with sinners? Tap them.'],tap:'ph'},
    {wiggle:['jesus'],sfx:'glory',say:['s3','Jesus answered: Those who are well do not need a doctor, but those who are sick. I did not come to call the righteous, but sinners, to repentance.']},
    {wiggle:['mat'],say:['s4','Matthew left his old job and his sins behind. Later he wrote the first Gospel, about the birth, baptism, miracles and life of Jesus.']},
   ]},

  {game:'read', chip:'Read', heading:'The twelve apostles', pic:'disciple',
   paras:[
    ['r4','Jesus chose twelve apostles: the brothers Andrew and Simon Peter; the brothers James and John; Philip and Nathanael;'],
    ['r5','the brothers James and Thaddeus; Matthew; another Simon; Thomas; and Judas Iscariot.'],
    ['r6','Judas Iscariot betrayed Jesus. After the Ascension, Matthias was chosen to take his place.'],
   ]},

  {game:'tapmany', bg:'day', chip:'Count the twelve',
   props:[{art:'jesus',x:400,y:440,s:.55}],
   area:{x0:40,y0:300,x1:760,y1:440}, count:12, spawn:{art:'disciple',s:[.28,.33],anim:'bob'}, sfx:'pop',
   progress:'*{n} more*!',
   intro:['count','Tap to call all twelve apostles!'],
   done:['count-done','Twelve apostles to carry the Gospel to the world!']},

  {game:'blanks', chip:'Fill in the blank',
   intro:['bl-intro','Fill in the missing word.'],
   items:[
    {id:'f1',s:'Before following Jesus, Matthew was a tax ___.',a:'collector',opts:['fisherman','soldier']},
    {id:'f2',s:'Jesus said: I came to call ___ to repentance.',a:'sinners',opts:['kings','angels']},
    {id:'f3',s:'Matthew wrote the ___ Gospel.',a:'first',opts:['last','fourth']},
    {id:'f4',s:'___ took the place of Judas Iscariot.',a:'Matthias',opts:['Paul','Stephen']},
   ],
   done:['bl-done','All filled in!']},

  {game:'verse', chip:'Memory verse',
   verse:'I desire mercy and not sacrifice.', ref:'Matthew 9:13',
   chunks:['I desire','mercy','and not sacrifice.'],
   intro:['verse-intro','Our memory verse is what Jesus told the leaders. Listen: I desire mercy and not sacrifice. Now build it in order!'],
   done:['verse-done','Say it again tomorrow, and you will know it by heart.']},

  {game:'quiz', questions:[
    {id:'q1',q:'What was Matthew\'s job?',a:[['Tax collector','table'],['Fisherman','boat'],['Shepherd','shepherd']],c:0},
    {id:'q2',q:'Who did Jesus say needs a doctor?',a:[['Those who are sick','bed'],['Those who are well','sun'],['Only kings','king']],c:0},
    {id:'q3',q:'How many apostles did Jesus choose?',a:[['Twelve',['text',{t:'12',size:64,c:'#24418F'}]],['Seven',['text',{t:'7',size:64,c:'#24418F'}]],['Forty',['text',{t:'40',size:64,c:'#24418F'}]]],c:0},
   ]},
 ]
});
