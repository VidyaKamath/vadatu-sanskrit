// Phrases: [Devanagari, IAST, English]. Spoken style (as in Samskrita Bharati classes): words kept apart, light sandhi.
const COURSE = [
  { sa: 'नमस्कारः', en: 'Greetings', lessons: [
    { id: 'c1l1', title: 'Hello and goodbye', phrases: [
      ['नमस्कारः', 'namaskāraḥ', 'Hello'],
      ['सुप्रभातम्', 'suprabhātam', 'Good morning'],
      ['शुभरात्रिः', 'śubharātriḥ', 'Good night'],
      ['धन्यवादः', 'dhanyavādaḥ', 'Thank you'],
      ['पुनः मिलामः', 'punaḥ milāmaḥ', 'See you again'] ] },
    { id: 'c1l2', title: 'Introductions', phrases: [
      ['मम नाम राधा', 'mama nāma rādhā', 'My name is Radha'],
      ['भवतः नाम किम्?', 'bhavataḥ nāma kim?', 'What is your name? (to a man)'],
      ['भवत्याः नाम किम्?', 'bhavatyāḥ nāma kim?', 'What is your name? (to a woman)'],
      ['भवान् कथम् अस्ति?', 'bhavān katham asti?', 'How are you? (to a man)'],
      ['अहं कुशली अस्मि', 'ahaṃ kuśalī asmi', 'I am well (said by a man)'] ] } ] },
  { sa: 'एषः कः?', en: 'This and that', lessons: [
    { id: 'c2l1', title: 'Who is this?', phrases: [
      ['एषः कः?', 'eṣaḥ kaḥ?', 'Who is this? (a boy or man)'],
      ['एषः बालकः', 'eṣaḥ bālakaḥ', 'This is a boy'],
      ['एषा का?', 'eṣā kā?', 'Who is this? (a girl or woman)'],
      ['एषा बालिका', 'eṣā bālikā', 'This is a girl'],
      ['सः मम भ्राता', 'saḥ mama bhrātā', 'He is my brother'] ] },
    { id: 'c2l2', title: 'What is this?', phrases: [
      ['एतत् किम्?', 'etat kim?', 'What is this?'],
      ['एतत् पुस्तकम्', 'etat pustakam', 'This is a book'],
      ['तत् फलम्', 'tat phalam', 'That is a fruit'],
      ['एषा लेखनी', 'eṣā lekhanī', 'This is a pen'],
      ['तत् गृहम्', 'tat gṛham', 'That is a house'] ] } ] },
  { sa: 'कुत्र?', en: 'Where?', lessons: [
    { id: 'c3l1', title: 'Here and there', phrases: [
      ['कुत्र?', 'kutra?', 'Where?'],
      ['अत्र', 'atra', 'Here'],
      ['तत्र', 'tatra', 'There'],
      ['पुस्तकं कुत्र अस्ति?', 'pustakaṃ kutra asti?', 'Where is the book?'],
      ['पुस्तकम् अत्र अस्ति', 'pustakam atra asti', 'The book is here'] ] },
    { id: 'c3l2', title: 'Going places', phrases: [
      ['भवान् कुत्र गच्छति?', 'bhavān kutra gacchati?', 'Where are you going? (to a man)'],
      ['अहं गृहं गच्छामि', 'ahaṃ gṛhaṃ gacchāmi', 'I am going home'],
      ['अहं विद्यालयं गच्छामि', 'ahaṃ vidyālayaṃ gacchāmi', 'I am going to school'],
      ['सः आपणं गच्छति', 'saḥ āpaṇaṃ gacchati', 'He is going to the shop'],
      ['वयम् उद्यानं गच्छामः', 'vayam udyānaṃ gacchāmaḥ', 'We are going to the park'] ] } ] },
  { sa: 'दिनचर्या', en: 'Daily actions', lessons: [
    { id: 'c4l1', title: 'Eat, drink, read', phrases: [
      ['अहं जलं पिबामि', 'ahaṃ jalaṃ pibāmi', 'I drink water'],
      ['अहं फलं खादामि', 'ahaṃ phalaṃ khādāmi', 'I eat a fruit'],
      ['सा पुस्तकं पठति', 'sā pustakaṃ paṭhati', 'She reads a book'],
      ['सः गीतं गायति', 'saḥ gītaṃ gāyati', 'He sings a song'],
      ['भवान् किं करोति?', 'bhavān kiṃ karoti?', 'What are you doing? (to a man)'] ] } ] },
  { sa: 'अहं गच्छामि', en: 'Pronouns and verbs', lessons: [
    { id: 'c5l1', title: 'I, we, you', phrases: [
      ['अहम्', 'aham', 'I'],
      ['वयम्', 'vayam', 'We'],
      ['त्वम्', 'tvam', 'You (informal)'],
      ['भवान्', 'bhavān', 'You (polite, to a man)'],
      ['भवती', 'bhavatī', 'You (polite, to a woman)'] ] },
    { id: 'c5l2', title: 'He, she, they', phrases: [
      ['सः', 'saḥ', 'He'],
      ['सा', 'sā', 'She'],
      ['तत्', 'tat', 'It / that'],
      ['ते', 'te', 'They (men or a mixed group)'],
      ['ताः', 'tāḥ', 'They (women)'] ] },
    // The verb ending changes with the person; भवान्/भवती take the सः ending.
    { id: 'c5l3', title: 'Verb endings: to go', phrases: [
      ['अहं गच्छामि', 'ahaṃ gacchāmi', 'I go'],
      ['त्वं गच्छसि', 'tvaṃ gacchasi', 'You go (informal)'],
      ['भवान् गच्छति', 'bhavān gacchati', 'You go (polite, to a man)'],
      ['वयं गच्छामः', 'vayaṃ gacchāmaḥ', 'We go'],
      ['ते गच्छन्ति', 'te gacchanti', 'They go (men or a mixed group)'] ] },
    { id: 'c5l4', title: 'Read, write, speak', phrases: [
      ['अहं पठामि', 'ahaṃ paṭhāmi', 'I read'],
      ['सा लिखति', 'sā likhati', 'She writes'],
      ['वयं वदामः', 'vayaṃ vadāmaḥ', 'We speak'],
      ['ते पश्यन्ति', 'te paśyanti', 'They see (men or a mixed group)'],
      ['त्वं शृणोषि', 'tvaṃ śṛṇoṣi', 'You listen (informal)'] ] },
    { id: 'c5l5', title: 'Come, sit, play', phrases: [
      ['सः आगच्छति', 'saḥ āgacchati', 'He comes'],
      ['अहम् उपविशामि', 'aham upaviśāmi', 'I sit'],
      ['ते क्रीडन्ति', 'te krīḍanti', 'They play (men or a mixed group)'],
      ['वयं जानीमः', 'vayaṃ jānīmaḥ', 'We know'],
      ['सा स्वपिति', 'sā svapiti', 'She sleeps'] ] } ] },
];

const FLAT = COURSE.flatMap(c => c.lessons.map(l => ({ ...l, chapter: c })));
const POOL = FLAT.flatMap(l => l.phrases);
const KEY = 'vadatu-progress';
const done = new Set(load());
function load() { try { return JSON.parse(localStorage.getItem(KEY)) || [] } catch { return [] } }
function save() { try { localStorage.setItem(KEY, JSON.stringify([...done])) } catch {} }

const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]] } return a };
const words = p => p[0].split(' ').map((w, k) => ({ w, t: p[1].split(' ')[k] || '' }));

// 3 wrong options, taken from this lesson first so they are hard to guess.
function options(lesson, p, k) {
  const seen = new Set([p[k]]), out = [p];
  for (const q of [...shuffle(lesson.phrases), ...shuffle(POOL)]) {
    if (out.length === 4) break;
    if (!seen.has(q[k])) { seen.add(q[k]); out.push(q) }
  }
  return shuffle(out);
}

// Every phrase twice: first recognise it, then produce it (tiles for sentences, choice for single words).
function makeExercises(lesson) {
  const ps = lesson.phrases;
  const recognise = shuffle(ps).map(p => ({ type: 'mean', p, opts: options(lesson, p, 2) }));
  const produce = shuffle(ps).map(p => {
    if (!p[0].includes(' ')) return { type: 'say', p, opts: options(lesson, p, 0) };
    const mine = words(p), have = new Set(mine.map(x => x.w));
    const extra = shuffle([...lesson.phrases, ...POOL].filter(q => q !== p).flatMap(words))
      .filter(x => !have.has(x.w) && have.add(x.w)).slice(0, 3);
    return { type: 'build', p, tiles: shuffle([...mine, ...extra]).map((x, id) => ({ ...x, id })) };
  });
  return [...recognise, ...produce];
}

const app = document.getElementById('app');
let S = null; // current lesson session

function home() {
  S = null;
  let n = 0;
  app.innerHTML = `
    <header><h1>संस्कृतम्</h1><p class="lede">Conversational Sanskrit, five phrases at a time. ${done.size} of ${FLAT.length} lessons done.</p></header>
    ${COURSE.map((c, ci) => `
      <section class="chapter">
        <header><span class="label">Chapter ${ci + 1}</span><h2>${c.sa}</h2><span class="iast">${c.en}</span></header>
        <div class="lessons">${c.lessons.map(l => {
          const i = n++, isDone = done.has(l.id), open = i === 0 || done.has(FLAT[i - 1].id) || isDone;
          const cls = isDone ? 'done' : open ? 'next' : '';
          return `<button class="lesson ${cls}" data-lesson="${i}" ${open ? '' : 'disabled'}>
            <span class="dot">${isDone ? '✓' : i + 1}</span>
            <span class="meta"><b>${l.title}</b><small>${isDone ? 'Done · practise again' : open ? '5 new phrases' : 'Finish the lesson before'}</small></span></button>`;
        }).join('')}</div>
      </section>`).join('')}`;
}

function intro(i) {
  const l = FLAT[i];
  app.innerHTML = `
    <header><span class="label">${l.chapter.en} · Lesson ${i + 1}</span><h2>${l.title}</h2><p class="lede">Read them first. Then practise.</p></header>
    <ul class="phrases">${l.phrases.map(p => `
      <li><span class="txt"><span class="sa">${p[0]}</span><span class="iast">${p[1]}</span><br>${p[2]}</span></li>`).join('')}</ul>
    <div class="row"><button class="btn" data-start="${i}">Start practice</button><button class="btn ghost" data-home>Back</button></div>`;
}

function start(i) {
  const queue = makeExercises(FLAT[i]);
  S = { i, queue, total: queue.length, right: 0, mistakes: 0, pick: null, line: [], checked: false };
  exercise();
}

function exercise() {
  const e = S.queue[0], p = e.p;
  const prompt = {
    mean: `<p class="label">What does this mean?</p><div class="prompt"><div><span class="sa big">${p[0]}</span><span class="iast">${p[1]}</span></div></div>`,
    say: `<p class="label">Pick the Sanskrit</p><div class="prompt"><span class="en">${p[2]}</span></div>`,
    build: `<p class="label">Build it in Sanskrit</p><div class="prompt"><span class="en">${p[2]}</span></div>`,
  }[e.type];
  let answer;
  if (e.type === 'build') {
    answer = `<div class="line" aria-label="Your sentence">${S.line.map(id => tile(e.tiles[id], 'out')).join('')}</div>
      <div class="bank">${e.tiles.map(t => tile(t, 'in', S.line.includes(t.id))).join('')}</div>`;
  } else {
    answer = `<div class="choices">${e.opts.map((q, k) => `<button class="choice" data-pick="${k}" aria-pressed="${S.pick === k}">${
      e.type === 'mean' ? q[2] : `<span class="sa">${q[0]}</span><span class="iast">${q[1]}</span>`}</button>`).join('')}</div>`;
  }
  const ready = e.type === 'build' ? S.line.length > 0 : S.pick !== null;
  app.innerHTML = `
    <div class="top"><button class="close" data-home aria-label="Quit lesson">×</button>
      <div class="progress" role="progressbar" aria-valuenow="${S.right}" aria-valuemax="${S.total}"><i style="width:${S.right / S.total * 100}%"></i></div></div>
    ${prompt}${answer}
    <div class="feedback" id="fb"><button class="btn" data-check ${ready ? '' : 'disabled'}>Check</button></div>`;
}
const tile = (t, side, used) => `<button class="tile${used ? ' used' : ''}" data-${side}="${t.id}" ${used ? 'tabindex="-1" aria-hidden="true"' : ''}><span class="sa">${t.w}</span><span class="iast">${t.t}</span></button>`;

function isRight(e, S) {
  if (e.type === 'build') return S.line.map(id => e.tiles[id].w).join(' ') === e.p[0];
  return e.opts[S.pick] === e.p;
}

function check() {
  const e = S.queue[0], ok = isRight(e, S);
  S.checked = true;
  if (ok) { S.right++; S.queue.shift() } else { S.mistakes++; S.queue.push(S.queue.shift()) } // wrong ones come back at the end
  const fb = document.getElementById('fb');
  fb.className = 'feedback ' + (ok ? 'ok' : 'bad');
  fb.innerHTML = `<p><b>${ok ? 'Correct!' : 'Not quite. The answer is:'}</b></p>
    ${ok ? '' : `<p><span class="sa" style="font-size:1.3rem">${e.p[0]}</span> · ${e.p[1]}<br>${e.p[2]}</p>`}
    <button class="btn" data-next>Continue</button>`;
  app.querySelectorAll('.choice, .tile').forEach(b => b.disabled = true);
  app.querySelector('.progress i').style.width = S.right / S.total * 100 + '%';
  fb.querySelector('[data-next]').focus();
}

function next() {
  S.pick = null; S.line = []; S.checked = false;
  if (S.queue.length) return exercise();
  const l = FLAT[S.i];
  done.add(l.id); save();
  const hasNext = S.i + 1 < FLAT.length;
  app.innerHTML = `<div class="done-card">
    <span class="label">Lesson complete</span><h2>उत्तमम्!</h2><p class="iast">uttamam · Excellent!</p>
    <p class="stat">${l.phrases.length} phrases practised · ${S.mistakes} ${S.mistakes === 1 ? 'mistake' : 'mistakes'}</p>
    <div class="row">${hasNext ? `<button class="btn" data-lesson="${S.i + 1}">Next lesson</button>` : ''}<button class="btn ghost" data-home>All chapters</button></div></div>`;
}

app.addEventListener('click', ev => {
  const b = ev.target.closest('button'); if (!b) return;
  const d = b.dataset;
  if ('home' in d) return home();
  if ('lesson' in d) return intro(+d.lesson);
  if ('start' in d) return start(+d.start);
  if ('check' in d) return check();
  if ('next' in d) return next();
  if (S && !S.checked) {
    if ('pick' in d) { S.pick = +d.pick; exercise() }
    else if ('in' in d) { S.line.push(+d.in); exercise() }
    else if ('out' in d) { S.line = S.line.filter(id => id !== +d.out); exercise() }
  }
});

// Self-check: every generated exercise can be answered correctly.
for (const l of FLAT) for (const e of makeExercises(l)) {
  if (e.type === 'build') {
    const line = words(e.p).map(x => e.tiles.find(t => t.w === x.w).id);
    console.assert(isRight(e, { line }), 'build unsolvable', e.p[0]);
    console.assert(new Set(e.tiles.map(t => t.w)).size === e.tiles.length, 'duplicate tile', e.p[0]);
  } else {
    console.assert(e.opts.length === 4 && isRight(e, { pick: e.opts.indexOf(e.p) }), 'bad options', e.p[0]);
  }
}
home();
