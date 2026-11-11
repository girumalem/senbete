"""Extracts every lesson from the Sunday school PDFs.
Usage: pdftotext -layout each PDF into a folder, then: python3 tools/extract_pdfs.py curr.json <that folder>"""
import re, json, sys
D=(sys.argv[2].rstrip('/')+'/') if len(sys.argv)>2 else './txt/'  # folder of pdftotext -layout outputs
files={1:'SundaySchoolLessons Level I Rev.txt',2:'SundaySchoolLessons Level II Rev.txt',3:'SundaySchoolLessons Level III Rev.txt',4:'SundaySchoolLessons Level IV Rev.txt'}
HDR=re.compile(r'^\s*(January|February|March|April|May|June|July|August|September|October|November|December|Lent|Easter)\s*[:_\-–\s]*\s*(\d)\s*(st|nd|rd|th)+\s*(Week)?\s*(I{1,3}V?|IV)?\s*$',re.I)
JUNK=re.compile(r'^\s*(I{1,3}|IV|\d+|Ethiopian Orthodox( Tewahedo Church)?|Tewahedo Church|Color the .*|Ex[c]?ercise.*Color.*|_+)\s*$',re.I)
MONTHS=['September','October','November','December','January','February','Lent','Easter','July','August']
def clean(s): return re.sub(r'\s+',' ',s.replace('‐','-')).strip()
out=[]
for lv,fn in files.items():
  L=open(D+fn,encoding='utf-8').read().split('\n')
  hs=[i for i,l in enumerate(L) if HDR.match(l)]
  for k,h in enumerate(hs):
    m=HDR.match(L[h]); mon=m.group(1).capitalize(); wk=int(m.group(2))
    end=hs[k+1] if k+1<len(hs) else len(L)
    obj=next((i for i in range(h,end) if re.match(r'^\s*Objective',L[i])),None)
    # title: lines before objective after header, else lines just before header
    cand=[clean(L[i]) for i in range(h+1,obj or h+1) if L[i].strip() and not JUNK.match(L[i]) and not HDR.match(L[i])]
    if not cand:
      j=h-1; c=[]
      while j>0 and len(c)<3:
        if L[j].strip() and not JUNK.match(L[j]): c.insert(0,clean(L[j]))
        elif c: break
        j-=1
      cand=c
    title=' '.join(cand)
    # body: obj..end, trim trailing title of next lesson for level I
    body=L[obj:end] if obj else L[h+1:end]
    if lv==1 and k+1<len(hs):
      # drop trailing lines that belong to next title
      while body and (not body[-1].strip() or not JUNK.match(body[-1])):
        if not body[-1].strip(): body.pop(); continue
        # stop at first junk from bottom
        body.pop()
        if body and JUNK.match(body[-1]): break
    text='\n'.join(body)
    def field(name):
      mm=re.search(r'^\s*'+name+r'\s*:?\s*(.*?)(?=^\s*(Objective|References?|Memory Verse|Introduction|The Lesson)\b)',text,re.S|re.M|re.I)
      return clean(mm.group(1)) if mm else ''
    song=None
    sm=re.search(r'^\s*(Song|Hymn|Mezmur)s?\s*:?\s*\n(.*?)^\s*Meaning\s*:?\s*(.*?)(?:\n\s*\n\s*\n|\Z)',text,re.S|re.M|re.I)
    if sm:
      song={'lines':[clean(x) for x in sm.group(2).split('\n') if x.strip()],'meaning':clean(sm.group(3))}
    # paragraphs
    paras=[];cur=[]
    for l in body:
      s=l.strip()
      if not s or re.match(r'^_+$',s) or JUNK.match(l):
        if cur: paras.append(clean(' '.join(cur))); cur=[]
        continue
      if re.match(r'^(\d+\.|•|[a-d]\))',s) and cur: paras.append(clean(' '.join(cur))); cur=[]
      cur.append(s)
    if cur: paras.append(clean(' '.join(cur)))
    paras=[re.sub(r'_{3,}','',p).strip() for p in paras]; paras=[p for p in paras if p]
    slot=f"{mon[:3].lower()}{wk}"
    out.append({'id':f'L{lv}-{slot}','level':lv,'month':mon,'week':wk,'title':title,'objective':field('Objective'),'refs':field('References?'),'verse':field('Memory Verse'),'song':song,'text':paras})
json.dump(out,open(sys.argv[1],'w'),ensure_ascii=False,indent=1)
for o in out: print(o['id'],'|',o['title'][:60],'|',(o['song'] or {}).get('lines',[''])[:1])
