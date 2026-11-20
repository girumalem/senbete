/* Level IV (Grade 7 and up), Easter season week 6: The Ascension (Mark 16:15-20; Luke 24:49-53; Acts 1:3-11; Matthew 28:19-20) */
BKLesson({
 id:'L4-eas6', title:'The Ascension', am:'ዕርገት', sticker:'cloud',
 pages:[
  {game:'cover', bg:'heaven', title:'The Ascension', am:'ዕርገት',
   props:[{art:'jesus',x:400,y:300,s:.55},{art:'glory',x:400,y:240,s:1},{art:'cloud',x:400,y:400,s:.8}],
   say:['cover','[[selam]]! For forty days after His Resurrection, Christ taught His disciples. Then, on the Mount of Olives, He went up into heaven. What did He tell them before He left?'],
   parent:'<p>This lesson follows Level IV, Easter season week 6: <b>The Ascension</b> (Mark 16; Luke 24; Acts 1). Aim: learn about the Ascension and Christ\'s commandment to His disciples.</p><p>The Feast of the Ascension (Erget) is kept on the fortieth day after Fasika, always a Thursday.</p>'},

  {game:'order', chip:'His life on earth',
   intro:['o0','Christ lived thirty-three years on earth. Tap these in order.'],
   cards:[
    {art:'manger',cap:'Born in Bethlehem',say:['o1','He was born in Bethlehem.']},
    {art:'dove',cap:'Baptized at thirty',say:['o2','He was baptized at the age of thirty, and taught for three years.']},
    {art:'cross',cap:'Crucified for our sins',say:['o3','He paid for our sins on the Cross.']},
    {art:'tomb',cap:'Risen on the third day',say:['o4','He rose from the dead on the third day.']},
    {art:'bible',cap:'Taught His disciples for forty days',say:['o5','For forty days He opened their minds to the Scriptures, and took away their doubts.']},
    {art:'cloud',cap:'Ascended into heaven',say:['o6','On the fortieth day, He ascended into heaven.']},
   ],
   done:['o7','Now let\'s hear what He commanded them.']},

  {game:'blanks', chip:'His commandments',
   intro:['bl-intro','Before He ascended, Christ gave His disciples commandments. Fill in the missing words.'],
   items:[
    {id:'f1',say:'Go into all the world and preach the what, to every creature?',s:'Go into all the world and preach the ___ to every creature.',a:'gospel',opts:['law','news']},
    {id:'f2',say:'John baptized with water, but you shall be baptized with whom?',s:'John baptized with water, but you shall be baptized with the ___.',a:'Holy Spirit',opts:['river','fire of the altar']},
    {id:'f3',say:'Teach all nations, baptizing them in the name of the Father, and of the Son, and of whom?',s:'Baptize them in the name of the Father, and of the Son, and of the ___.',a:'Holy Spirit',opts:['angels','prophets']},
    {id:'f4',say:'You shall be my what, in Jerusalem, Judea, Samaria and to the ends of the earth?',s:'You shall be ___ unto Me in Jerusalem, and to the uttermost part of the earth.',a:'witnesses',opts:['kings','strangers']},
   ],
   done:['bl-done','He warned them they would be persecuted, and brought before kings. But whoever endures to the end will be saved. And He promised: I am with you always.']},

  {game:'story', bg:'sunrise', chip:'Mount of Olives',
   props:[{id:'jesus',art:'jesus',x:400,y:440,s:.6},{id:'d1',art:'peter',x:180,y:440,s:.5},{id:'d2',art:'disciple',x:260,y:440,s:.5},{id:'d3',art:'disciple',x:560,y:440,s:.5},{id:'d4',art:['figure',{robe:'#2F7A4E',sleeve:'#2F7A4E',beard:'dark'}],x:640,y:440,s:.5},{id:'cl',art:'cloud',x:400,y:120,s:.9,hidden:true},{id:'a1',art:'angel',x:300,y:440,s:.5,hidden:true},{id:'a2',art:'angel',x:500,y:440,s:.5,hidden:true}],
   beats:[
    {say:['v1','On the fortieth day, Christ took His disciples to the Mount of Olives. He lifted up His hands and blessed them. Tap Christ.'],tap:'jesus'},
    {move:{jesus:[400,150,.45]},show:['cl'],sfx:'glory',say:['v2','While they watched, He was taken up, and a cloud hid Him from their sight.']},
    {hide:['jesus'],wiggle:['d1','d2','d3','d4'],say:['v3','They stood there, staring up into heaven.']},
    {show:['a1','a2'],fx:'flash',say:['v4','Suddenly two angels in white stood by them and said: Men of Galilee, why do you stand gazing up into heaven? This same Jesus will come again in the same way you saw Him go.']},
   ]},

  {game:'choose', bg:'egypt', chip:'Where to wait?',
   props:[{id:'city',art:'city',x:620,y:440,s:.6},{id:'d1',art:'peter',x:200,y:440,s:.5},{id:'d2',art:'disciple',x:280,y:440,s:.5}],
   prompt:['w0','Christ told the disciples to wait for the Holy Spirit. Where did He tell them to wait?'],
   options:[
    {label:'Go home to their boats in Galilee',art:'boat',good:false,say:['w1','No. He told them to stay in one city. Try again.']},
    {label:'Stay in Jerusalem until they received power from above',art:'city',then:{move:{d1:[500,440],d2:[560,440]}},
     say:['w2','They returned to Jerusalem with great joy, and stayed there, praying, as He had commanded.']},
   ]},

  {game:'verse', chip:'Memory verse',
   verse:'You shall be witnesses unto Me both in Jerusalem, and in all Judea, and in Samaria, and unto the uttermost part of the earth.', ref:'Acts 1:8',
   chunks:['You shall be witnesses unto Me','both in Jerusalem,','and in all Judea, and in Samaria,','and unto the uttermost part of the earth.'],
   intro:['verse-intro','We learned this verse with the disciples. Can you still build it? You shall be witnesses unto Me both in Jerusalem, and in all Judea, and in Samaria, and unto the uttermost part of the earth.'],
   done:['verse-done','We are called to be His witnesses too.']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf0','True or false?'],
   items:[
    {id:'t1',s:'Christ stayed on earth for forty days after His Resurrection.',t:true,why:'He ascended on the fortieth day.'},
    {id:'t2',s:'Christ ascended into heaven from the Mount of Olives.',t:true,why:'He blessed His disciples there.'},
    {id:'t3',s:'Christ promised the disciples they would never have any trouble.',t:false,why:'He told them they would be persecuted, but whoever endures to the end will be saved.'},
   ]},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Being a witness is not only talking about Christ, but keeping His commandments. How can people see Christ in the way you live?'],
    ['k2','The angels said: Why do you stand gazing up into heaven? What work did the disciples have to do instead?'],
    ['k3','Christ promised: I am with you always, to the end of the world. When do you most need to remember that?'],
   ]},
 ]
});
