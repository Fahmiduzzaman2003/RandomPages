# GRE Lexicon

1,311 high-frequency GRE words. Every word is clickable and opens a dictionary-style
entry: part of speech, definition, and three example sentences in the academic register
the exam actually uses.

**Live:** https://fahmiduzzaman2003.github.io/RandomPages/

## Files

| File | What it is |
| --- | --- |
| `index.html` | The whole site. Self-contained — open it locally by double-clicking, or serve it anywhere. |
| `gre-lexicon.jsx` | The React source, for editing. Not used by the site directly. |

## Publishing

GitHub Pages serves static files. It does not compile `.jsx`, so a React source file
alone renders nothing — that is why the page showed only the README heading. The fix is
`index.html`, which is already compiled.

1. Put `index.html` in the repository root (or in a subfolder such as `gre/`).
2. **Settings → Pages → Source:** *Deploy from a branch*, branch `main`, folder `/ (root)`.
3. Wait a minute, then hard-refresh. Pages caches aggressively.

If you keep the file in a subfolder, the URL becomes
`https://fahmiduzzaman2003.github.io/RandomPages/gre/`, and the repository README still
renders at the top level.

## Example sentences

Every one of the 1,311 words has a part of speech and a definition. 322 of them also
have three example sentences, written and checked by hand — no API, no key, no network
call. The site works fully offline once loaded.

The remaining words show their definition and say plainly that sentences are still being
written. Use the **with sentences** filter to study only the completed set.

Coverage so far: A and B complete, plus the 157 highest-frequency words from across the
alphabet. Remaining: C through Z.

## Progress

Marking a word *still learning* or *know it* saves to `localStorage`, so progress
persists across visits on the same browser. The underline beneath each letter in the A–Z
bar fills as you mark words known. Clearing site data resets it.

## Editing

Change wording or add words in `gre-lexicon.jsx`, then rebuild:

```bash
npx esbuild bundle.jsx --loader:.jsx=jsx --bundle --outfile=app.js
```

and paste the output between the `<script>` tags in `index.html`. The word data lives in
the `D1`–`D9` strings as `word|part of speech|definition`, one per line; hand-written
sentences live in `S1` and `S2` as `word|sentence~sentence~sentence`.
