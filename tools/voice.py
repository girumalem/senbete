"""Voices narration lines with ElevenLabs (Selam = voice "Jessica").
Usage:  python3 tools/voice.py L4-            voice every line in audio/lines.json whose id starts with L4- and has no clip yet
        python3 tools/voice.py L4-sep2 --force   re-voice those lines even if a clip exists
        python3 tools/voice.py --words hidar kuskuam   make Amharic word clips (audio/words/<key>.mp3) only
Needs network access to api.elevenlabs.io with the API key sent as the xi-api-key header (the cloud environment adds it;
locally set ELEVENLABS_API_KEY). Afterwards run tools/audio_list.py to list the new files in data/audio.js.

How a line is made:
  * English text: eleven_multilingual_v2, Jessica. Level I-II use calmer settings; Level III-IV the "lively" ones Girum chose.
  * [[word]] markup: the recorded word clip audio/words/<key>.mp3 is stitched in between the English parts.
    Amharic (am) words without a clip are first generated with Eleven v4 in Amharic and must then be checked by ear.
    Ge'ez (gez) words are never sent to a voice: a line containing one without a recorded clip is skipped and reported.
  * Never sends Latin transliterations to the English voice, and never splices syllables."""
import json, os, re, shutil, subprocess, sys, tempfile, urllib.request, concurrent.futures as cf

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
VOICE = 'cgSgspJ2msm6clMCkdW9'  # Jessica
KEY = os.environ.get('ELEVENLABS_API_KEY', 'set-by-proxy')
STYLE = {  # per level
    '1': dict(stability=.5, similarity_boost=.75, style=.3, speed=1.0),
    '2': dict(stability=.6, similarity_boost=.75, style=.2, speed=.95),
    '3': dict(stability=.4, similarity_boost=.75, style=.4, speed=1.0),
    '4': dict(stability=.4, similarity_boost=.75, style=.4, speed=1.0),
}
AM = dict(model_id='eleven_v4', language_code='am', seed=22, voice_settings=dict(stability=.8, similarity_boost=.75))

def lex():
    src = open(os.path.join(ROOT, 'data/lexicon.js'), encoding='utf-8').read()
    return json.loads(src[src.index('{'):src.rindex('}') + 1])

def tts(body, out):
    req = urllib.request.Request(f'https://api.elevenlabs.io/v1/text-to-speech/{VOICE}?output_format=mp3_44100_128',
                                 data=json.dumps(body).encode(), headers={'xi-api-key': KEY, 'Content-Type': 'application/json'})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=120) as r:
                open(out, 'wb').write(r.read()); return
        except urllib.error.HTTPError as e:
            msg = e.read().decode(errors='replace')
            if e.code in (429, 500, 502, 503) and attempt < 3: continue
            raise RuntimeError(f'{e.code} {msg[:300]}')

def word_clip(key, L, made):
    f = os.path.join(ROOT, 'audio/words', key + '.mp3')
    if os.path.exists(f): return f
    w = L.get(key)
    if not w or w['lang'] != 'am': return None
    tts(dict(text=w['fidel'], **AM), f); made.append(key); return f

def english(text):
    t = re.sub(r'\*', '', text).strip()
    t = re.sub(r'^[\s,;:.!?]+', '', t) if not re.match(r'^[.!?]', t) else t.lstrip('.!? ')
    return t

def concat(parts, out):
    if len(parts) == 1: shutil.copyfile(parts[0], out); return
    args = ['ffmpeg', '-y', '-loglevel', 'error']
    for p in parts: args += ['-i', p]
    n = len(parts)
    fc = ''.join(f'[{i}:a]aresample=44100,aformat=channel_layouts=mono,apad=pad_dur=0.06[a{i}];' for i in range(n))
    fc += ''.join(f'[a{i}]' for i in range(n)) + f'concat=n={n}:v=0:a=1[o]'
    subprocess.run(args + ['-filter_complex', fc, '-map', '[o]', '-c:a', 'libmp3lame', '-b:a', '128k', out], check=True)

def voice_line(row, L, made, tmp):
    level = row['id'][1] if re.match(r'^L\d', row['id']) else '1'
    st = STYLE.get(level, STYLE['4'])
    parts = []
    for i, seg in enumerate(re.split(r'(\[\[[\w-]+\]\])', row['text'])):
        m = re.match(r'\[\[([\w-]+)\]\]', seg)
        if m:
            f = word_clip(m.group(1), L, made)
            if not f: return f'skipped (no recording for {m.group(1)})'
            parts.append(f)
        else:
            t = english(seg)
            if not re.search(r'[A-Za-z0-9]', t): continue
            f = os.path.join(tmp, f'{row["id"]}.{i}.mp3')
            tts(dict(text=t, model_id='eleven_multilingual_v2', voice_settings=st), f)
            parts.append(f)
    concat(parts, os.path.join(ROOT, 'audio/lines', row['id'] + '.mp3'))
    return 'ok'

def main(argv):
    L = lex(); made = []
    if argv and argv[0] == '--words':
        for k in argv[1:]: print(k, word_clip(k, L, made))
        print('new Amharic word clips (check by ear):', made); return
    force = '--force' in argv; pre = [a for a in argv if not a.startswith('--')]
    rows = json.load(open(os.path.join(ROOT, 'audio/lines.json'), encoding='utf-8'))
    todo = [r for r in rows if any(r['id'].startswith(p) for p in pre)
            and (force or not os.path.exists(os.path.join(ROOT, 'audio/lines', r['id'] + '.mp3')))]
    # make missing Amharic word clips first, one at a time
    for r in todo:
        for k in r['words']: word_clip(k, L, made)
    chars = sum(len(re.sub(r'\[\[[\w-]+\]\]', '', r['text'])) for r in todo)
    print(f'{len(todo)} lines, about {chars} characters')
    with tempfile.TemporaryDirectory() as tmp, cf.ThreadPoolExecutor(3) as ex:
        futs = {ex.submit(voice_line, r, L, made, tmp): r['id'] for r in todo}
        bad = 0
        for f in cf.as_completed(futs):
            try: res = f.result()
            except Exception as e: res = f'ERROR {e}'; bad += 1
            if res != 'ok': print(futs[f], res)
    print('done;', bad, 'errors. New Amharic word clips (check by ear):', made)

if __name__ == '__main__':
    main(sys.argv[1:])
