# aimind.marketing design guide

All design and brand rules live in one place: **Christina's private brand guide** (a Design System artifact on claude.ai, readable only by her and by Claude in her sessions):
https://claude.ai/artifact/YF53i9hKw85J8WeKjGjGmP

Read its `project/README.md` before any design, layout, asset or copy work. It covers brand, voice and copy, logo, colors, typography, layout, buttons and controls, motion, imagery, accessibility, the website specifics (header, hero, service panel, articles, contact) and the decisions log. Tokens are in `project/tokens.json`, components in `project/components/`.

This repository holds no separate copy of the rules, so nothing can drift apart:

- `src/` is the implementation and shows how the rules look in practice.
- `design/` holds the public design files (logo set, boards, screenshots, banners); see `design/README.md`.

After every design decision, update in the same step: the private guide (rule, token or component, and a line in its decisions log), the code, the matching board in `design/style-guide/` with its PNG preview, and the screenshots in `design/screens/` if pages changed.
