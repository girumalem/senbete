"""Rewrites data/audio.js from the mp3 files that exist in audio/words, audio/lines and audio/songs.
Usage: python3 tools/audio_list.py"""
import json, os
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
p = os.path.join(ROOT, 'data/audio.js'); t = open(p, encoding='utf-8').read()
hdr = t[:t.index('window.BK_AUDIO=')]
ls = lambda d: sorted(f[:-4] for f in os.listdir(os.path.join(ROOT, 'audio', d)) if f.endswith('.mp3')) if os.path.isdir(os.path.join(ROOT, 'audio', d)) else []
d = {'words': ls('words'), 'lines': ls('lines'), 'songs': ls('songs')}
open(p, 'w', encoding='utf-8').write(hdr + 'window.BK_AUDIO=' + json.dumps(d, ensure_ascii=False) + ';\n')
print({k: len(v) for k, v in d.items()})
