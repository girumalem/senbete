/* Level III (Grades 4-6), November week 4: Joseph (Genesis 37, 39-45; Genesis 39:9) */
BKLesson({
 id:'L3-nov4', title:'Joseph\'s Virtues', am:'ዮሴፍ', sticker:'coat',
 pages:[
  {game:'cover', bg:'egypt', title:'Joseph\'s Virtues', am:'ዮሴፍ',
   props:[{art:['figure',{robe:'#FFFFFF',sleeve:'#FFFFFF',nemes:true}],x:640,y:440,s:.6},{art:'coat',x:160,y:420,s:.7},{art:'grain',x:740,y:440,s:.6}],
   say:['cover','[[selam]]! Joseph was sold as a slave, but he stayed faithful to God, and God lifted him up. Let\'s learn five of his virtues. Read with me, then test yourself!'],
   parent:'<p>This lesson follows Level III, November week 4: <b>Joseph</b> (Genesis 37, 39-45). Aim: learn Joseph\'s virtues: obedience, faithfulness, honesty, humility and forgiveness.</p><p>Talk about it: Which of Joseph\'s virtues would you most like to have?</p>'},

  {game:'read', chip:'Read', heading:'Obedient and faithful', pic:'coat',
   paras:[
    ['r1','Joseph was obedient. Even though his brothers were jealous of him, he obeyed his father Jacob and went to check on them. But they plotted against him, and sold him to traders.'],
    ['r2','Joseph was faithful. In Egypt he was sold to Potiphar, an officer of Pharaoh. God blessed everything Joseph did, so Potiphar put him in charge of his whole house.'],
   ]},

  {game:'read', chip:'Read', heading:'Honest, even when tempted', pic:'door',
   paras:[
    ['r3','Potiphar\'s wife kept trying to make Joseph do wrong and betray his master. Joseph said: My master trusts me with everything. How can I do this wickedness, and sin against God?'],
    ['r4','One day she grabbed his coat. Joseph left his coat in her hand and ran outside! He would never sin against God.'],
    ['r5','She lied about him, and Joseph was put in prison. But even there he was faithful, and the guard put him in charge of all the prisoners.'],
   ]},

  {game:'read', chip:'Read', heading:'Humble and forgiving', pic:'grain',
   paras:[
    ['r6','Joseph was humble. God gave him the gift of explaining dreams, but he never boasted. He told Pharaoh: It is not in me. God will give Pharaoh an answer.'],
    ['r7','Pharaoh made Joseph a ruler over Egypt. During a great famine, his brothers came to buy food.'],
    ['r8','Joseph was forgiving. He did not take revenge. He forgave them, and said God had sent him ahead to save many lives.'],
   ]},

  {game:'match', chip:'Joseph\'s virtues', heading:'Match each virtue to what Joseph did',
   intro:['match-intro','Tap a virtue, then tap what Joseph did to show it.'],
   pairs:[['Obedient','Went to find his brothers',null,'coat'],['Honest','Ran away from sin',null,'door'],['Humble','Said: The answer comes from God',null,'glory'],['Forgiving','Did not take revenge',null,'heart']],
   done:['match-done','Wonderful!']},

  {game:'truefalse', chip:'True or false?',
   intro:['tf-intro','True or false? Read each sentence and decide.'],
   items:[
    {id:'t1',s:'Joseph boasted that he was the best at explaining dreams.',t:false,why:'He said the answers come from God.',pic:'glory'},
    {id:'t2',s:'Joseph was faithful even in prison.',t:true,why:'The guard trusted him with all the prisoners.',pic:'bars'},
    {id:'t3',s:'Joseph punished his brothers.',t:false,why:'He forgave them.',pic:'heart'},
   ],
   done:['tf-done','Well done!']},

  {game:'verse', chip:'Memory verse',
   verse:'How then can I do this great wickedness, and sin against God?', ref:'Genesis 39:9',
   chunks:['How then can I do','this great wickedness,','and sin against God?'],
   intro:['verse-intro','Our memory verse is Joseph\'s answer when he was tempted. Listen: How then can I do this great wickedness, and sin against God? Now build it in order!'],
   done:['verse-done','Remember these words when you are tempted to do wrong.']},

  {game:'quiz', questions:[
    {id:'q1',q:'Who bought Joseph in Egypt?',a:[['Potiphar','soldier'],['Moses','moses'],['Laban','man']],c:0},
    {id:'q2',q:'What did Joseph do when tempted?',a:[['He ran away','door'],['He stayed and lied','bed'],['He hid','bush']],c:0},
    {id:'q3',q:'What did Joseph do when his brothers came?',a:[['Forgave them','heart'],['Put them in prison','bars'],['Sent them away hungry','sandals']],c:0},
   ]},
 ]
});
