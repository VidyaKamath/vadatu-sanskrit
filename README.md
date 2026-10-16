# Vadatu Sanskrit

A small Duolingo-style app for learning basic conversational Sanskrit, five phrases per lesson.

Live: https://vidyakamath.github.io/vadatu-sanskrit/

## Features

- **Chapters and lessons**: 4 chapters, 7 lessons, 35 phrases. Each lesson unlocks when the one before it is finished.
- **Phrase preview**: each lesson opens with its 5 phrases in Devanagari, IAST transliteration and English.
- **Practice**: every phrase comes up twice:
  - *What does this mean?* Pick the English for a Sanskrit phrase.
  - *Build it in Sanskrit*: tap word tiles into order (sentences), or *Pick the Sanskrit* (single words).
- **Retry**: a wrong answer goes to the back of the queue, so a lesson ends only when every phrase has been answered correctly.
- **Progress**: completed lessons are saved in the browser, per device.
- **Light and dark mode**: follows the device setting.

## How it's built

No framework, no build step, no backend.

| File | What's in it |
|---|---|
| `index.html` | Page shell and all CSS |
| `app.js` | Course content (`COURSE`) and app logic |

Browser and platform features used:

- Vanilla JavaScript; the screen is re-rendered with template strings and `innerHTML`, and one delegated click handler reads `data-*` attributes.
- `localStorage` for progress (key `vadatu-progress`), wrapped in `try/catch` so the app still works in private windows.
- CSS custom properties for the palette, with a `prefers-color-scheme: dark` override.
- Google Fonts: *Tiro Devanagari Sanskrit* for Sanskrit, *Noto Sans* for English and IAST diacritics.
- GitHub Pages for hosting.

## Run locally

Open `index.html` in a browser. That's it.

## Add a lesson

Add an entry to `COURSE` in `app.js`:

```js
{ id: 'c4l2', title: 'At home', phrases: [
  ['देवनागरी', 'iast', 'English meaning'],
  // 5 phrases works best
] }
```

- `id` must be unique and never change, or saved progress for it is lost.
- Exercises are generated from the phrases; nothing else needs writing.
- Words inside a phrase are split on spaces for the tile exercise, so the Devanagari and IAST must have the same number of words.
- Content follows the spoken style taught in Samskrita Bharati classes (words kept apart, light sandhi). Have new phrases checked by someone who knows Sanskrit.

## Checks

`app.js` ends with a self-check that generates every lesson's exercises and asserts each one is answerable. Failures show in the browser console as `Assertion failed`.

## Known limits

- No audio. Browsers have no Sanskrit voice and the Hindi fallback mispronounced words, so it was removed. Recorded audio clips are the planned fix.
- Progress doesn't sync between devices or browsers.
