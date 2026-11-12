/* Level II (Grades 1-3), January week 4: The Temptation of Jesus (Matthew 4:1-11) */
BKLesson({
 id:'L2-jan4', title:'Jesus Says No to Temptation', am:'ጾመ ኢየሱስ', sticker:'bible',
 pages:[
  {game:'cover', bg:'desert', title:'Jesus Says No to Temptation', am:'ጾመ ኢየሱስ',
   props:[{art:'jesus',x:560,y:440,s:.6},{art:'stone',x:150,y:445,s:1.6},{art:'stone',x:700,y:445,s:1.3}],
   say:['cover','[[selam]]! After His baptism, Jesus went into the wilderness to fast and pray. Today we see how He said no to the tempter. Tap *Let\'s play*!'],
   parent:'<p>This lesson follows Level II, January week 4: <b>Temptation of Jesus by Satan</b> (Matthew 4:1-11). Aim: we answer temptation with the word of God, like Jesus did. This is why we keep the Great Lent (Hudade) for fifty-five days.</p>'},

  {game:'read', chip:'Read along', heading:'Forty days', pic:'stone',
   paras:[
    ['r1','After He was baptized, Jesus went into the wilderness to fast.'],
    ['r2','He fasted for forty days and forty nights. Moses and Elijah had also fasted that long.'],
    ['r3','After forty days, Jesus was hungry. Then the tempter, Satan, came to Him.'],
   ]},

  {game:'story', bg:'desert', chip:'Three tests',
   props:[{id:'jesus',art:'jesus',x:220,y:440,s:.6},{id:'cloud',art:'darkCloud',x:570,y:200,s:.9},{id:'stone',art:'stone',x:450,y:445,s:1.8},{id:'bible',art:'bible',x:220,y:240,s:.6,hidden:true}],
   beats:[
    {wiggle:['stone'],say:['t1','The tempter said: If You are the Son of God, turn these stones into bread. Tap the stone.'],tap:'stone'},
    {show:['bible'],sfx:'glory',say:['t2','Jesus answered with God\'s word: Man shall not live by bread alone, but by every word of God.']},
    {wiggle:['cloud'],say:['t3','The tempter took Him up high and said: Jump down! The angels will catch You.']},
    {wiggle:['bible'],sfx:'glory',say:['t4','Jesus answered: It is written, do not test the Lord your God. Tap the Bible.'],tap:'bible'},
    {wiggle:['cloud'],say:['t5','Then the tempter said: Worship me, and I will give You all the kingdoms of the world.']},
    {hide:['cloud'],sfx:'glory',fx:'confetti',say:['t6','Jesus said: Go away, Satan! Worship the Lord your God and serve only Him. The tempter left, and angels came and served Jesus.']},
   ],
   parent:'<p>Each time, Jesus answered with Scripture (Deuteronomy 8:3, 6:16, 6:13). Talk about it: what can we do when we are tempted to do wrong?</p>'},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','Read each sentence. Is it true, or false?'],
   items:[
    {id:'f1',s:'Jesus fasted for forty days and forty nights.',t:true,why:'True! That is why we fast during Great Lent.',pic:'stone'},
    {id:'f2',s:'Jesus turned the stones into bread for the tempter.',t:false,why:'False. He said no, using the word of God.',pic:'bible'},
    {id:'f3',s:'Jesus answered every test with the word of God.',t:true,why:'True! God\'s word helps us say no to wrong things too.',pic:'bible'},
   ],
   done:['tf-done','Great thinking!']},

  {game:'quiz', questions:[
    {id:'q1',q:'How long did Jesus fast?',a:[['40 days',['text',{t:'40',size:64,c:'#24418F'}]],['2 days',['text',{t:'2',size:64,c:'#24418F'}]]],c:0},
    {id:'q2',q:'What did Jesus use to answer the tempter?',a:[['The word of God','bible'],['A sword','spear']],c:0},
    {id:'q3',q:'Who came to serve Jesus at the end?',a:[['Angels','angel'],['Lions','lion']],c:0},
   ]},
  {game:'song', song:'hore-eyesus-hore-eyesus'},
 ]
});
