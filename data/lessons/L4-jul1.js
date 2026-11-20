/* Level IV (Grade 7 and up), July week 1: Being an Example to Others (Matthew 5:44; Luke 23:34; John 3:5; John 13:14-15; John 15:13; 1 Timothy 4:12) */
BKLesson({
 id:'L4-jul1', title:'Being an Example', am:'አርአያ መሆን', sticker:'heart',
 pages:[
  {game:'cover', bg:'day', title:'Being an Example', am:'አርአያ መሆን',
   props:[{art:['figure',{kind:'teen',robe:'#FFFFFF',sleeve:'#FFFFFF',netela:'#E2A62B'}],x:330,y:440,s:.65},{art:'girl',x:440,y:440,s:.45},{art:'boy',x:520,y:440,s:.42}],
   say:['cover','[[selam]]! Younger brothers and sisters watch everything you do. They learn more from what you do than from what you say. Christ taught us the same way: not only in words, but in deeds.'],
   parent:'<p>This lesson follows Level IV, July week 1: <b>Being an Example to Others</b>. Aim: learn the responsibility of setting good examples to others.</p><p>Talk about it: who in your family or church has been a good example to your child?</p>'},

  {game:'match', chip:'He did what He taught',
   heading:'Match what Christ taught to what He did',
   intro:['m0','Christ always did what He taught. Match each teaching to the example He set.'],
   pairs:[
    ['Love your enemies, and pray for those who persecute you','On the Cross: Father, forgive them'],
    ['No greater love than to give your life for your friends','He gave His life for us on the Cross'],
    ['Unless one is born of water and the Spirit','He was baptized in the Jordan by John'],
    ['Wash one another\'s feet','He washed the feet of His disciples'],
   ],
   done:['m1','He never asked us to do anything He did not do first.']},

  {game:'story', bg:'night', chip:'He washed their feet',
   props:[{id:'table',art:'table',x:560,y:440,s:.7},{id:'jesus',art:'jesus',x:300,y:440,s:.6},{id:'basin',art:'basin',x:420,y:440,s:.6},{id:'pet',art:'peter',x:520,y:440,s:.55},{id:'d2',art:'disciple',x:640,y:440,s:.55}],
   beats:[
    {say:['w1','On the night before His crucifixion, Christ rose from supper, poured water into a basin, and began to wash His disciples\' feet. Tap the basin.'],tap:'basin'},
    {move:{jesus:[440,440],basin:[520,440]},say:['w2','Peter was shocked: Lord, You will never wash my feet! But Christ said: If I do not wash you, you have no part with Me.']},
    {wiggle:['pet','d2'],say:['w3','Then He said: If I, your Lord and Teacher, have washed your feet, you also ought to wash one another\'s feet. I have given you an example.']},
   ]},

  {game:'sort', chip:'A good example?',
   bins:[{label:'A good example',art:'heart'},{label:'Not a good example',art:'darkCloud'}],
   intro:['s0','Your younger brother is watching. Sort these.'],
   items:[
    {t:'Speaking kindly, without bad words',b:0},
    {t:'Telling him to pray, but never praying yourself',b:1},
    {t:'Sharing with someone in need',b:0},
    {t:'Laughing at a classmate who made a mistake',b:1},
    {t:'Coming to church clean and ready, on time',b:0},
    {t:'Talking during the [[kidase]]',b:1},
   ],
   done:['s1','The disciples did as Christ did, and taught others to do the same.']},

  {game:'order', chip:'Saint Paul\'s advice',
   intro:['o0','Saint Paul wrote to his young student Timothy: Be an example to the believers. Tap the five ways in the order he wrote them.'],
   cards:[
    {art:'selam',cap:'In word and conversation',say:['o1','In word and conversation: speak nicely, without bad words.']},
    {art:'gift',cap:'In charity',say:['o2','In charity: help the needy, and teach others to do the same.']},
    {art:'dove',cap:'In spirit',say:['o3','In spirit: love, joy, peace, patience, gentleness and goodness.']},
    {art:'cross',cap:'In faith',say:['o4','In faith: keep His commandments, come to church, pray and fast.']},
    {art:'raindrop',cap:'In purity',say:['o5','In purity: be clean in body and in mind, and think about holy things.']},
   ],
   done:['o6','Timothy was young, but Paul told him: Let no one despise your youth. You can be an example too.']},

  {game:'verse', chip:'Memory verse',
   verse:'I have given you an example, that you should do as I have done to you.', ref:'John 13:15',
   chunks:['I have given you an example,','that you should do','as I have done to you.'],
   intro:['verse-intro','Our memory verse: I have given you an example, that you should do as I have done to you. Build it in order.'],
   done:['verse-done','Who will learn from your example this week?']},

  {game:'think', chip:'Think and talk',
   qs:[
    ['k1','Do you have younger brothers, sisters or cousins? How do they copy what you do?'],
    ['k2','Think of someone whose good deeds taught you something. What did you learn?'],
    ['k3','Why is it important to teach in deeds, and not only in words?','People believe what they see us do.'],
   ]},
 ]
});
