"""Builds the Newsreader files in src/assets/fonts/ from @fontsource-variable/newsreader.

The site uses Newsreader upright at 400 (500 for "aimind" in the logo) and italic only at 400.
The weight axis is limited to that range and the optical-size axis (opsz 6-72) stays variable.
That keeps the look identical and cuts the files to less than half. Run after updating the Fontsource package:
    pip install fonttools brotli && python3 scripts/newsreader-fonts.py
"""
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

BASE = 'node_modules/@fontsource-variable/newsreader/files/'
for subset in ('latin', 'latin-ext'):
    for style in ('normal', 'italic'):
        font = TTFont(f'{BASE}newsreader-{subset}-opsz-{style}.woff2')
        weight = (400, 500) if style == 'normal' else 400
        pinned = instancer.instantiateVariableFont(font, {'wght': weight})
        pinned.flavor = 'woff2'
        suffix = '400-500' if style == 'normal' else '400'
        pinned.save(f'src/assets/fonts/newsreader-{subset}-opsz-{style}-{suffix}.woff2')
