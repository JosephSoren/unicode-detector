// ── UNICODE DATABASE ─────────────────────────────────────────────────────
const UNICODE_DB = [
  // Invisible / blank chars
  { code:'U+2800', cp:0x2800, char:'\u2800', name:'Braille Pattern Blank',         block:'Braille Patterns',        cat:'invisible',   risk:'med', use:'Blank messages, game usernames' },
  { code:'U+3164', cp:0x3164, char:'\u3164', name:'Hangul Filler',                 block:'Hangul Compatibility',    cat:'invisible',   risk:'low', use:'Game blank usernames (PUBG, FF)' },
  { code:'U+200B', cp:0x200b, char:'\u200b', name:'Zero Width Space',              block:'General Punctuation',     cat:'invisible',   risk:'med', use:'Discord, hidden breaks, spam bypass' },
  { code:'U+FEFF', cp:0xfeff, char:'\ufeff', name:'Zero Width No-Break Space (BOM)',block:'Arabic Presentation',   cat:'invisible',   risk:'med', use:'BOM marker, fingerprinting' },
  { code:'U+200C', cp:0x200c, char:'\u200c', name:'Zero Width Non-Joiner',         block:'General Punctuation',     cat:'invisible',   risk:'med', use:'Script control, filter bypass' },
  { code:'U+200D', cp:0x200d, char:'\u200d', name:'Zero Width Joiner',             block:'General Punctuation',     cat:'invisible',   risk:'med', use:'Emoji sequences, hidden joiners' },
  { code:'U+034F', cp:0x034f, char:'\u034f', name:'Combining Grapheme Joiner',     block:'Combining Diacritics',    cat:'invisible',   risk:'med', use:'Text fingerprinting, steganography' },
  { code:'U+2060', cp:0x2060, char:'\u2060', name:'Word Joiner',                   block:'General Punctuation',     cat:'invisible',   risk:'low', use:'Prevent line break, hidden spacer' },
  { code:'U+2061', cp:0x2061, char:'\u2061', name:'Function Application',          block:'General Punctuation',     cat:'invisible',   risk:'low', use:'Math markup invisible operator' },
  { code:'U+2062', cp:0x2062, char:'\u2062', name:'Invisible Times',               block:'General Punctuation',     cat:'invisible',   risk:'low', use:'Math markup invisible operator' },
  { code:'U+2063', cp:0x2063, char:'\u2063', name:'Invisible Separator',           block:'General Punctuation',     cat:'invisible',   risk:'low', use:'Math markup, steganography' },
  { code:'U+2064', cp:0x2064, char:'\u2064', name:'Invisible Plus',                block:'General Punctuation',     cat:'invisible',   risk:'low', use:'Math markup invisible operator' },
  { code:'U+180E', cp:0x180e, char:'\u180e', name:'Mongolian Vowel Separator',     block:'Mongolian',               cat:'invisible',   risk:'low', use:'Deprecated, used in game names' },
  { code:'U+00AD', cp:0x00ad, char:'\u00ad', name:'Soft Hyphen',                   block:'Latin-1 Supplement',      cat:'invisible',   risk:'low', use:'Optional hyphen, often invisible' },
  { code:'U+FFFC', cp:0xfffc, char:'\ufffc', name:'Object Replacement Character',  block:'Specials',                cat:'invisible',   risk:'med', use:'Placeholder in rich text systems' },
  // BiDi / direction control
  { code:'U+200E', cp:0x200e, char:'\u200e', name:'Left-to-Right Mark',            block:'General Punctuation',     cat:'bidi',        risk:'med', use:'RTL/LTR switch, UI spoofing' },
  { code:'U+200F', cp:0x200f, char:'\u200f', name:'Right-to-Left Mark',            block:'General Punctuation',     cat:'bidi',        risk:'med', use:'RTL/LTR switch, UI spoofing' },
  { code:'U+202A', cp:0x202a, char:'\u202a', name:'Left-to-Right Embedding',       block:'General Punctuation',     cat:'bidi',        risk:'high', use:'BiDi attack, text direction spoof' },
  { code:'U+202B', cp:0x202b, char:'\u202b', name:'Right-to-Left Embedding',       block:'General Punctuation',     cat:'bidi',        risk:'high', use:'BiDi attack, filename spoofing' },
  { code:'U+202C', cp:0x202c, char:'\u202c', name:'Pop Directional Formatting',    block:'General Punctuation',     cat:'bidi',        risk:'high', use:'BiDi attack — closes embedding' },
  { code:'U+202D', cp:0x202d, char:'\u202d', name:'Left-to-Right Override',        block:'General Punctuation',     cat:'bidi',        risk:'high', use:'BiDi override, filename spoofing' },
  { code:'U+202E', cp:0x202e, char:'\u202e', name:'Right-to-Left Override',        block:'General Punctuation',     cat:'bidi',        risk:'high', use:'Trojansource attack, RLO exploit' },
  { code:'U+2066', cp:0x2066, char:'\u2066', name:'Left-to-Right Isolate',         block:'General Punctuation',     cat:'bidi',        risk:'high', use:'BiDi isolate for spoofing' },
  { code:'U+2067', cp:0x2067, char:'\u2067', name:'Right-to-Left Isolate',         block:'General Punctuation',     cat:'bidi',        risk:'high', use:'BiDi isolate for spoofing' },
  { code:'U+2068', cp:0x2068, char:'\u2068', name:'First Strong Isolate',          block:'General Punctuation',     cat:'bidi',        risk:'high', use:'BiDi attack variant' },
  { code:'U+2069', cp:0x2069, char:'\u2069', name:'Pop Directional Isolate',       block:'General Punctuation',     cat:'bidi',        risk:'high', use:'BiDi attack — closes isolate' },
  { code:'U+061C', cp:0x061c, char:'\u061c', name:'Arabic Letter Mark',            block:'Arabic',                  cat:'bidi',        risk:'med', use:'Arabic script control, spoofing' },
  { code:'U+206A', cp:0x206a, char:'\u206a', name:'Inhibit Symmetric Swapping',    block:'General Punctuation',     cat:'bidi',        risk:'med', use:'Deprecated symmetric inhibit' },
  // Whitespace variants
  { code:'U+00A0', cp:0x00a0, char:'\u00a0', name:'No-Break Space',                block:'Latin-1 Supplement',      cat:'whitespace',  risk:'low', use:'Non-collapsing space in HTML/forms' },
  { code:'U+2000', cp:0x2000, char:'\u2000', name:'En Quad',                       block:'General Punctuation',     cat:'whitespace',  risk:'low', use:'Typography spacing' },
  { code:'U+2001', cp:0x2001, char:'\u2001', name:'Em Quad',                       block:'General Punctuation',     cat:'whitespace',  risk:'low', use:'Typography spacing' },
  { code:'U+2002', cp:0x2002, char:'\u2002', name:'En Space',                      block:'General Punctuation',     cat:'whitespace',  risk:'low', use:'Typography spacing' },
  { code:'U+2003', cp:0x2003, char:'\u2003', name:'Em Space',                      block:'General Punctuation',     cat:'whitespace',  risk:'low', use:'Typography spacing' },
  { code:'U+2004', cp:0x2004, char:'\u2004', name:'Three-Per-Em Space',            block:'General Punctuation',     cat:'whitespace',  risk:'low', use:'Typography spacing' },
  { code:'U+2005', cp:0x2005, char:'\u2005', name:'Four-Per-Em Space',             block:'General Punctuation',     cat:'whitespace',  risk:'low', use:'Typography spacing' },
  { code:'U+2006', cp:0x2006, char:'\u2006', name:'Six-Per-Em Space',              block:'General Punctuation',     cat:'whitespace',  risk:'low', use:'Typography spacing' },
  { code:'U+2007', cp:0x2007, char:'\u2007', name:'Figure Space',                  block:'General Punctuation',     cat:'whitespace',  risk:'low', use:'Digit-width spacing' },
  { code:'U+2008', cp:0x2008, char:'\u2008', name:'Punctuation Space',             block:'General Punctuation',     cat:'whitespace',  risk:'low', use:'Punctuation-width spacing' },
  { code:'U+2009', cp:0x2009, char:'\u2009', name:'Thin Space',                    block:'General Punctuation',     cat:'whitespace',  risk:'low', use:'Thin spacing, typography' },
  { code:'U+200A', cp:0x200a, char:'\u200a', name:'Hair Space',                    block:'General Punctuation',     cat:'whitespace',  risk:'low', use:'Finest spacing, typography' },
  { code:'U+202F', cp:0x202f, char:'\u202f', name:'Narrow No-Break Space',         block:'General Punctuation',     cat:'whitespace',  risk:'low', use:'French punctuation, narrow NBSP' },
  { code:'U+205F', cp:0x205f, char:'\u205f', name:'Medium Mathematical Space',     block:'General Punctuation',     cat:'whitespace',  risk:'low', use:'Math typesetting' },
  { code:'U+3000', cp:0x3000, char:'\u3000', name:'Ideographic Space',             block:'CJK Symbols',             cat:'whitespace',  risk:'low', use:'Full-width CJK space' },
  // Suspicious / security
  { code:'U+FFFD', cp:0xfffd, char:'\ufffd', name:'Replacement Character',         block:'Specials',                cat:'suspicious',  risk:'med', use:'Encoding error indicator' },
  { code:'U+FFFE', cp:0xfffe, char:'\ufffe', name:'Non-character (BOM reversed)',  block:'Specials',                cat:'suspicious',  risk:'high', use:'Reversed BOM, encoding attack' },
  { code:'U+FFFF', cp:0xffff, char:'\uffff', name:'Non-character (FFFF)',          block:'Specials',                cat:'suspicious',  risk:'high', use:'Non-character, invalid in streams' },
  { code:'U+FDD0', cp:0xfdd0, char:'\ufdd0', name:'Non-character (FDD0)',          block:'Arabic Presentation B',   cat:'suspicious',  risk:'high', use:'Permanently reserved non-char' },
  { code:'U+E000', cp:0xe000, char:'\ue000', name:'Private Use Area (E000)',       block:'Private Use Area',        cat:'suspicious',  risk:'med', use:'Custom/private char, AI fingerprint' },
  { code:'U+DB80', cp:0xdb80, char:'\udb80', name:'High Surrogate (DB80)',         block:'Surrogates',              cat:'suspicious',  risk:'high', use:'Surrogate pair fragment, malformed' },
];

const DETECT_SET = new Set(UNICODE_DB.map(d => d.cp));

// ── STATE ────────────────────────────────────────────────────────────────
let realtimeMode = false;
let scanCount = 0;
let lastResult = null;
let rtTimer = null;
let genContent = '';

// ── CLOCK ────────────────────────────────────────────────────────────────
function updateClock() {
  const n = new Date();
  document.getElementById('hdr-time').textContent =
    n.toTimeString().split(' ')[0];
}
setInterval(updateClock, 1000);
updateClock();

// ── REALTIME ─────────────────────────────────────────────────────────────
function toggleRealtime() {
  realtimeMode = !realtimeMode;
  const track = document.getElementById('rt-track');
  track.classList.toggle('on', realtimeMode);
}

document.getElementById('main-input').addEventListener('input', function() {
  const v = this.value;
  document.getElementById('char-count-lbl').textContent = v.length + ' chars';
  if (realtimeMode) {
    clearTimeout(rtTimer);
    rtTimer = setTimeout(() => runScan(true), 300);
  }
});

// ── SAMPLES ──────────────────────────────────────────────────────────────
const SAMPLES = {
  invisible: 'Hello\u2800World\u200B!\u3164Invisible\u034Fchars\u2060here\uFEFFtest',
  mixed: 'Caf\u00e9 \u2022 na\u00efve \u2014 r\u00e9sum\u00e9 \u00b7 \u03b1\u03b2\u03b3 \u00a9 \u2665 \u2800 \u200b \u3164',
  rtl: 'Normal text \u202E\u202D reversed \u202C back \u200F\u200E \u2066\u2067',
  zws: 'zero\u200bwidth\u200bspace\u200cjoiner\u200dfiller\u2060word',
  ai: 'This is AI-generated content\u034f\u2062\u034f with hidden\u2063 fingerprint\u034f\u2064 characters\u034f embedded throughout the text.',
};

function loadSample(key) {
  document.getElementById('main-input').value = SAMPLES[key];
  document.getElementById('char-count-lbl').textContent = SAMPLES[key].length + ' chars';
  runScan();
}

// ── MAIN SCAN ────────────────────────────────────────────────────────────
async function runScan(silent = false) {
  const text = document.getElementById('main-input').value;
  if (!text && !silent) { showToast('// NO INPUT TO SCAN'); return; }

  if (!silent) {
    const btn = document.getElementById('scan-btn');
    btn.classList.add('scanning');
    btn.textContent = '⬡ SCANNING...';
    await animateProgress();
    btn.classList.remove('scanning');
    btn.textContent = '⬡ SCAN TEXT';
  }

  const result = analyzeText(text);
  lastResult = result;
  scanCount++;
  document.getElementById('footer-scan-count').textContent = `SCANS THIS SESSION: ${scanCount}`;

  renderResults(result, text);
  if (!silent) showToast(`// SCAN COMPLETE — ${result.total} chars analyzed`);
}

async function animateProgress() {
  const prog = document.getElementById('scan-progress');
  const bar = document.getElementById('scan-bar');
  prog.classList.add('active');
  return new Promise(res => {
    let w = 0;
    const iv = setInterval(() => {
      w = Math.min(w + Math.random() * 25, 100);
      bar.style.width = w + '%';
      if (w >= 100) { clearInterval(iv); setTimeout(() => { prog.classList.remove('active'); bar.style.width = '0%'; res(); }, 300); }
    }, 60);
  });
}

// ── ANALYSIS ENGINE ──────────────────────────────────────────────────────
function analyzeText(text) {
  const chars = [...text]; // handle surrogate pairs
  const codePoints = chars.map(c => c.codePointAt(0));
  const found = new Map(); // cp -> { info, count }
  const blocks = new Map();
  const cats = { visible: 0, invisible: 0, whitespace: 0, control: 0, suspicious: 0 };
  let invisCount = 0, suspCount = 0;

  for (const cp of codePoints) {
    // classify
    const dbEntry = UNICODE_DB.find(d => d.cp === cp);
    let cat = classifyCP(cp);
    if (dbEntry) cat = dbEntry.cat;

    cats[cat] = (cats[cat] || 0) + 1;
    if (cat === 'invisible' || cat === 'bidi') invisCount++;
    if (cat === 'suspicious' || (dbEntry && dbEntry.risk === 'high')) suspCount++;

    // block
    const block = getBlock(cp);
    blocks.set(block, (blocks.get(block) || 0) + 1);

    // found map
    if (dbEntry) {
      if (!found.has(cp)) found.set(cp, { info: dbEntry, count: 0 });
      found.get(cp).count++;
    }
  }

  // security flags
  const flags = detectSecurityFlags(text, found, cats);
  const riskScore = calcRisk(found, flags, cats, invisCount, suspCount, chars.length);

  return {
    total: chars.length,
    codePoints,
    chars,
    found: [...found.values()],
    blocks: [...blocks.entries()].sort((a,b) => b[1]-a[1]),
    cats,
    flags,
    riskScore,
    invisCount,
    suspCount,
    unique: new Set(codePoints).size,
    avgCP: codePoints.length ? Math.round(codePoints.reduce((a,b)=>a+b,0)/codePoints.length) : 0,
    maxCP: codePoints.length ? Math.max(...codePoints) : 0,
  };
}

function classifyCP(cp) {
  if (cp < 0x20 || (cp >= 0x7f && cp < 0xa0)) return 'control';
  if (cp === 0x20 || cp === 0x09 || cp === 0x0a || cp === 0x0d) return 'whitespace';
  // invisible ranges
  if ((cp >= 0x2000 && cp <= 0x200f) || (cp >= 0x2028 && cp <= 0x202f) ||
      (cp >= 0x2060 && cp <= 0x206f) || cp === 0xfeff || cp === 0x00ad ||
      cp === 0x034f || cp === 0x2800 || cp === 0x3164 || cp === 0x180e) return 'invisible';
  // bidi
  if ((cp >= 0x200e && cp <= 0x200f) || (cp >= 0x202a && cp <= 0x202e) ||
      (cp >= 0x2066 && cp <= 0x2069) || cp === 0x061c) return 'bidi';
  // suspicious
  if (cp >= 0xfdd0 && cp <= 0xfdef) return 'suspicious';
  if (cp === 0xfffe || cp === 0xffff || cp === 0xfffd) return 'suspicious';
  if (cp >= 0xe000 && cp <= 0xf8ff) return 'suspicious'; // PUA
  if (cp >= 0xd800 && cp <= 0xdfff) return 'suspicious'; // surrogates
  return 'visible';
}

function getBlock(cp) {
  if (cp < 0x80) return 'Basic Latin';
  if (cp < 0x100) return 'Latin-1 Supplement';
  if (cp < 0x250) return 'Latin Extended';
  if (cp < 0x370) return 'Combining Marks';
  if (cp < 0x400) return 'Greek & Coptic';
  if (cp < 0x530) return 'Cyrillic';
  if (cp < 0x600) return 'Armenian/Hebrew';
  if (cp < 0x700) return 'Arabic';
  if (cp < 0x2000) return 'Other Scripts';
  if (cp < 0x2100) return 'General Punctuation';
  if (cp < 0x2600) return 'Letterlike / Numbers';
  if (cp < 0x2800) return 'Arrows & Math Ops';
  if (cp < 0x2900) return 'Braille Patterns';
  if (cp < 0x3000) return 'Enclosed / Box Drawing';
  if (cp < 0x4000) return 'CJK Symbols';
  if (cp < 0xA000) return 'CJK Unified';
  if (cp < 0xD800) return 'Various Scripts';
  if (cp < 0xE000) return 'Surrogates ⚠';
  if (cp < 0xF900) return 'Private Use Area ⚠';
  if (cp < 0x10000) return 'Specials / BMP End';
  return 'Supplementary Planes';
}

function detectSecurityFlags(text, found, cats) {
  const flags = [];
  // BiDi attack
  const bidiChars = [...found.values()].filter(f => f.info.cat === 'bidi');
  if (bidiChars.some(b => [0x202e,0x202b,0x2067].includes(b.info.cp))) {
    flags.push({ level:'high', icon:'☠', title:'BiDi Override Attack (Trojansource)', body:'Right-to-Left Override or embedding characters detected. These can make malicious code appear benign in code editors. CVE-2021-42574.' });
  } else if (bidiChars.length) {
    flags.push({ level:'med', icon:'⚠', title:'Bidirectional Control Characters', body:'Text contains Unicode BiDi control characters that can alter visual display direction, potentially used for UI spoofing.' });
  }
  // AI fingerprint
  const fpChars = [0x034f, 0x2062, 0x2063, 0x2064, 0x2061];
  const hasFP = fpChars.some(cp => found.has(cp) || text.includes(String.fromCodePoint(cp)));
  if (hasFP && found.size > 1) {
    flags.push({ level:'med', icon:'🤖', title:'Possible AI Content Fingerprinting', body:'Combining Grapheme Joiners and Invisible Math Operators are used by some LLMs to fingerprint generated content for watermarking.' });
  }
  // PUA / surrogates
  const pua = [...found.values()].filter(f => f.info.cp >= 0xe000 && f.info.cp <= 0xf8ff);
  if (pua.length) {
    flags.push({ level:'med', icon:'⬡', title:'Private Use Area Characters', body:'Characters in Unicode\'s Private Use Area were found. These have no standard meaning and may indicate custom encoding or data exfiltration payloads.' });
  }
  // Non-characters
  const nonChar = [...found.values()].filter(f => f.info.cp >= 0xfdd0);
  if (nonChar.length) {
    flags.push({ level:'high', icon:'✕', title:'Unicode Non-Characters Detected', body:'Permanently reserved non-characters (FDD0–FDEF, FFFE, FFFF) found. These should never appear in normal text and indicate malformed or malicious input.' });
  }
  // Prompt injection
  if (cats.invisible > 5 && cats.invisible / (cats.visible || 1) > 0.3) {
    flags.push({ level:'high', icon:'💉', title:'Potential Hidden Prompt Injection', body:'High density of invisible characters relative to visible text. This pattern is used to embed hidden AI instructions in documents processed by LLM pipelines.' });
  }
  // Steganography
  if (cats.invisible > 2 && cats.visible > 20) {
    flags.push({ level:'low', icon:'🔍', title:'Possible Text Steganography', body:'Invisible characters embedded within visible text may encode hidden information, watermarks, or tracking identifiers.' });
  }
  if (!flags.length && cats.invisible === 0 && cats.suspicious === 0) {
    flags.push({ level:'low', icon:'✓', title:'No Threats Detected', body:'Text appears clean. No suspicious BiDi characters, injection patterns, or non-standard invisible characters found.' });
  }
  return flags;
}

function calcRisk(found, flags, cats, invis, susp, total) {
  let score = 0;
  if (flags.some(f=>f.title.includes('BiDi Override'))) score += 40;
  else if (flags.some(f=>f.title.includes('Bidirectional'))) score += 20;
  if (flags.some(f=>f.title.includes('Non-Characters'))) score += 30;
  if (flags.some(f=>f.title.includes('Prompt Injection'))) score += 30;
  if (flags.some(f=>f.title.includes('Private Use'))) score += 15;
  if (flags.some(f=>f.title.includes('Fingerprint'))) score += 10;
  if (flags.some(f=>f.title.includes('Steganography'))) score += 8;
  score += Math.min(invis * 2, 20);
  score += Math.min(susp * 5, 20);
  return Math.min(score, 100);
}

// ── RENDER ───────────────────────────────────────────────────────────────
function renderResults(r, text) {
  // Stats
  document.getElementById('st-total').textContent = r.total;
  document.getElementById('st-invisible').textContent = r.invisCount;
  document.getElementById('st-suspicious').textContent = r.suspCount;
  document.getElementById('st-types').textContent = r.unique;

  // Risk
  const rf = document.getElementById('risk-fill');
  const rs = document.getElementById('risk-score');
  const rl = document.getElementById('risk-level');
  const riskPct = r.riskScore;
  rf.style.width = riskPct + '%';
  rs.textContent = riskPct + ' / 100';
  let rColor, rLabel;
  if (riskPct < 20) { rColor = 'var(--green)'; rLabel = 'CLEAN'; }
  else if (riskPct < 50) { rColor = 'var(--amber)'; rLabel = 'MODERATE'; }
  else if (riskPct < 75) { rColor = 'var(--red)'; rLabel = 'HIGH RISK'; }
  else { rColor = '#ff0044'; rLabel = 'CRITICAL'; }
  rf.style.background = rColor;
  rs.style.color = rColor;
  rl.style.color = rColor;
  rl.textContent = rLabel;

  // Char map
  renderCharMap(r, text);

  // Found table
  renderFoundTable(r);

  // Block analysis
  renderBlocks(r);

  // Categories
  renderCategories(r);

  // Flags
  renderFlags(r);

  // Detailed stats
  document.getElementById('ds-total').textContent = r.total;
  document.getElementById('ds-visible').textContent = r.cats.visible || 0;
  document.getElementById('ds-invis').textContent = r.invisCount;
  document.getElementById('ds-ws').textContent = (r.cats.whitespace || 0);
  document.getElementById('ds-ctrl').textContent = (r.cats.control || 0);
  document.getElementById('ds-susp').textContent = r.suspCount;
  document.getElementById('ds-unique').textContent = r.unique;
  document.getElementById('ds-blocks').textContent = r.blocks.length;
  document.getElementById('ds-avg').textContent = 'U+' + r.avgCP.toString(16).toUpperCase().padStart(4,'0');
  document.getElementById('ds-max').textContent = 'U+' + r.maxCP.toString(16).toUpperCase().padStart(4,'0');
}

function renderCharMap(r, text) {
  const map = document.getElementById('charmap');
  map.innerHTML = '';
  map.classList.remove('empty-state');
  document.getElementById('charmap-badge').textContent = r.total + ' chars';

  if (!r.total) {
    map.classList.add('empty-state');
    map.innerHTML = '<div class="empty-msg">// AWAITING INPUT — PASTE TEXT ABOVE</div>';
    return;
  }

  const MAX_DISPLAY = 500;
  const chars = r.chars.slice(0, MAX_DISPLAY);
  chars.forEach((ch, i) => {
    const cp = ch.codePointAt(0);
    const cell = document.createElement('div');
    const cat = classifyCP(cp);
    const dbE = UNICODE_DB.find(d => d.cp === cp);
    cell.className = 'char-cell ' + (dbE ? dbE.cat : cat);

    let label = ch;
    if (cat === 'control' || cat === 'whitespace') label = '·';
    if (cat === 'invisible' || dbE?.cat === 'invisible') label = '∅';
    if (dbE?.cat === 'bidi') label = '⇌';
    if (cat === 'suspicious') label = '✕';
    cell.textContent = label;

    const cpHex = 'U+' + cp.toString(16).toUpperCase().padStart(4,'0');
    const name = dbE ? dbE.name : (cat === 'control' ? 'Control Character' : 'Visible Character');
    cell.innerHTML += `<div class="tooltip">${cpHex}<br>${name}</div>`;
    map.appendChild(cell);
  });

  if (r.chars.length > MAX_DISPLAY) {
    const more = document.createElement('div');
    more.style.cssText = 'font-size:0.62rem;color:var(--text3);padding:6px 10px;align-self:center;letter-spacing:0.06em;';
    more.textContent = `+${r.chars.length - MAX_DISPLAY} more…`;
    map.appendChild(more);
  }
}

function renderFoundTable(r) {
  const tbody = document.getElementById('found-tbody');
  const wrap = document.getElementById('found-table-wrap');
  const noMsg = document.getElementById('no-found-msg');
  tbody.innerHTML = '';

  if (!r.found.length) {
    wrap.classList.remove('visible');
    noMsg.style.display = 'block';
    document.getElementById('found-badge').textContent = 'NONE';
    document.getElementById('found-badge').className = 'panel-badge badge-green';
    return;
  }

  wrap.classList.add('visible');
  noMsg.style.display = 'none';
  document.getElementById('found-badge').textContent = r.found.length + ' TYPES';
  document.getElementById('found-badge').className = 'panel-badge badge-amber';

  r.found.sort((a,b) => {
    const riskO = {high:0,med:1,low:2};
    return riskO[a.info.risk] - riskO[b.info.risk] || b.count - a.count;
  }).forEach(item => {
    const tr = document.createElement('tr');
    const catColors = { invisible:'color:var(--blue)', bidi:'color:var(--red)', whitespace:'color:var(--green)', suspicious:'color:var(--red)', control:'color:var(--amber)' };
    const catBg = { invisible:'background:var(--sky-dim)', bidi:'background:var(--red-dim)', whitespace:'background:var(--green-dim)', suspicious:'background:var(--red-dim)', control:'background:var(--amber-dim)' };
    const c = item.info.cat;
    const riskClass = {high:'rp-high',med:'rp-med',low:'rp-low'}[item.info.risk] || 'rp-low';

    tr.innerHTML = `
      <td class="ft-code">${item.info.code}</td>
      <td class="ft-name">${item.info.name}</td>
      <td class="ft-cat"><span style="${catColors[c]||''};${catBg[c]||''};padding:2px 6px;border-radius:3px;font-size:0.6rem;font-weight:700;">${c.toUpperCase()}</span></td>
      <td class="ft-risk"><span class="risk-pill ${riskClass}">${item.info.risk.toUpperCase()}</span></td>
      <td class="ft-count">${item.count}</td>
      <td class="ft-action"><button onclick="doCopy('${escapeChar(item.info.char)}','${item.info.name}')">COPY</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderBlocks(r) {
  const el = document.getElementById('block-list');
  el.innerHTML = '';
  const max = r.blocks[0]?.[1] || 1;
  const colors = ['var(--blue)','var(--sky)','var(--green)','var(--amber)','var(--purple)'];
  r.blocks.slice(0,10).forEach(([name,cnt], i) => {
    const pct = Math.round(cnt/max*100);
    el.innerHTML += `
      <div class="block-row">
        <div class="block-name">${name}</div>
        <div class="block-bar-wrap"><div class="block-bar" style="width:${pct}%;background:${colors[i%colors.length]}"></div></div>
        <div class="block-count">${cnt}</div>
      </div>`;
  });
}

function renderCategories(r) {
  const el = document.getElementById('cat-legend');
  el.innerHTML = '';
  const cats = [
    { key:'visible', label:'Visible', color:'var(--text2)' },
    { key:'whitespace', label:'Whitespace', color:'var(--green)' },
    { key:'invisible', label:'Invisible', color:'var(--blue)' },
    { key:'bidi', label:'BiDi Control', color:'var(--red)' },
    { key:'control', label:'Control', color:'var(--amber)' },
    { key:'suspicious', label:'Suspicious', color:'var(--purple)' },
  ];
  const total = Object.values(r.cats).reduce((a,b)=>a+b,0) || 1;
  cats.forEach(c => {
    const cnt = r.cats[c.key] || 0;
    const pct = Math.round(cnt/total*100);
    el.innerHTML += `
      <div class="cat-row">
        <div class="cat-dot" style="background:${c.color}"></div>
        <div class="cat-name">${c.label}</div>
        <div class="cat-val" style="color:${c.color}">${cnt}</div>
        <div class="cat-pct">${pct}%</div>
      </div>`;
  });
}

function renderFlags(r) {
  const el = document.getElementById('flags-list');
  const badge = document.getElementById('flags-badge');
  el.innerHTML = '';
  const high = r.flags.filter(f=>f.level==='high');
  const med = r.flags.filter(f=>f.level==='med');

  if (high.length) { badge.textContent = high.length + ' CRITICAL'; badge.className = 'panel-badge badge-red'; }
  else if (med.length) { badge.textContent = med.length + ' WARNING'; badge.className = 'panel-badge badge-amber'; }
  else { badge.textContent = 'CLEAN'; badge.className = 'panel-badge badge-green'; }

  r.flags.forEach(f => {
    el.innerHTML += `
      <div class="flag-item flag-${f.level}">
        <div class="flag-head"><div class="flag-icon">${f.icon}</div><div class="flag-title">${f.title}</div></div>
        <div class="flag-body">${f.body}</div>
      </div>`;
  });
}

// ── ACTIONS ──────────────────────────────────────────────────────────────
function cleanText() {
  const text = document.getElementById('main-input').value;
  if (!text) { showToast('// NO TEXT TO CLEAN'); return; }
  let cleaned = text;
  UNICODE_DB.filter(d => d.cat !== 'visible' && d.cat !== 'whitespace').forEach(d => {
    cleaned = cleaned.split(d.char).join('');
  });
  // also strip all zero-width, invisible ranges
  cleaned = cleaned.replace(/[\u200b-\u200f\u202a-\u202e\u2060-\u206f\ufeff\u034f\u2800\u3164\u180e]/g, '');
  document.getElementById('clean-text').textContent = cleaned || '[All content was invisible — result is empty]';
  document.getElementById('clean-output-wrap').classList.add('visible');
  genContent = cleaned;
  navigator.clipboard.writeText(cleaned);
  showToast('// TEXT CLEANED — COPIED TO CLIPBOARD');
  runScan(true);
}

function copyClean() {
  if (genContent) { navigator.clipboard.writeText(genContent); showToast('// CLEANED TEXT COPIED'); }
  else { cleanText(); }
}

function exportReport() {
  if (!lastResult) { showToast('// RUN SCAN FIRST'); return; }
  const report = {
    timestamp: new Date().toISOString(),
    tool: 'UniScan v2.0',
    summary: {
      totalCharacters: lastResult.total,
      invisibleCharacters: lastResult.invisCount,
      suspiciousCharacters: lastResult.suspCount,
      uniqueCodePoints: lastResult.unique,
      riskScore: lastResult.riskScore,
      riskLevel: lastResult.riskScore < 20 ? 'CLEAN' : lastResult.riskScore < 50 ? 'MODERATE' : lastResult.riskScore < 75 ? 'HIGH' : 'CRITICAL',
    },
    detectedCharacters: lastResult.found.map(f => ({
      codePoint: f.info.code,
      name: f.info.name,
      category: f.info.cat,
      riskLevel: f.info.risk,
      occurrences: f.count,
      block: f.info.block,
      commonUse: f.info.use,
    })),
    unicodeBlocks: lastResult.blocks.map(([n,c]) => ({ block:n, count:c })),
    securityFlags: lastResult.flags.map(f => ({ severity:f.level, title:f.title, description:f.body })),
    categoryBreakdown: lastResult.cats,
    inputText: document.getElementById('main-input').value.slice(0,500) + (document.getElementById('main-input').value.length > 500 ? '...[truncated]' : ''),
  };
  const blob = new Blob([JSON.stringify(report, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `uniscan-report-${Date.now()}.json`;
  a.click();
  showToast('// REPORT EXPORTED AS JSON');
}

function clearAll() {
  document.getElementById('main-input').value = '';
  document.getElementById('char-count-lbl').textContent = '0 chars';
  document.getElementById('charmap').innerHTML = '<div class="empty-msg">// AWAITING INPUT — PASTE TEXT ABOVE</div>';
  document.getElementById('charmap').classList.add('empty-state');
  document.getElementById('charmap-badge').textContent = '0 chars';
  document.getElementById('found-table-wrap').classList.remove('visible');
  document.getElementById('no-found-msg').style.display = 'block';
  document.getElementById('no-found-msg').textContent = '// NO SPECIAL CHARACTERS DETECTED — INPUT IS CLEAN';
  document.getElementById('clean-output-wrap').classList.remove('visible');
  document.getElementById('found-badge').textContent = 'NONE';
  document.getElementById('found-badge').className = 'panel-badge badge-green';
  document.getElementById('flags-badge').textContent = 'NONE';
  document.getElementById('flags-badge').className = 'panel-badge badge-green';
  document.getElementById('flags-list').innerHTML = '<div class="no-flags">// NO THREATS DETECTED</div>';
  document.getElementById('block-list').innerHTML = '<div style="font-size:0.65rem;color:var(--text3);text-align:center;padding:16px;letter-spacing:0.06em;">// RUN SCAN TO SEE BLOCKS</div>';
  document.getElementById('cat-legend').innerHTML = '<div style="font-size:0.65rem;color:var(--text3);text-align:center;padding:16px;letter-spacing:0.06em;">// AWAITING SCAN</div>';
  ['st-total','st-invisible','st-suspicious','st-types'].forEach(id => document.getElementById(id).textContent = '0');
  document.getElementById('risk-fill').style.width = '0%';
  document.getElementById('risk-score').textContent = '0 / 100';
  document.getElementById('risk-level').textContent = 'CLEAN';
  ['ds-total','ds-visible','ds-invis','ds-ws','ds-ctrl','ds-susp','ds-unique','ds-blocks','ds-avg','ds-max'].forEach(id => document.getElementById(id).textContent = '—');
  lastResult = null;
  genContent = '';
}

// ── REFERENCE TABLE ──────────────────────────────────────────────────────
function buildRefTable() {
  const tbody = document.getElementById('ref-tbody');
  const riskClass = {high:'rp-high',med:'rp-med',low:'rp-low'};
  const catColors = { invisible:'color:var(--blue);background:var(--sky-dim)', bidi:'color:var(--red);background:var(--red-dim)', whitespace:'color:var(--green);background:var(--green-dim)', suspicious:'color:var(--red);background:var(--red-dim)', control:'color:var(--amber);background:var(--amber-dim)' };

  UNICODE_DB.forEach((d,i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="ft-code">${d.code}</td>
      <td class="ft-name">${d.name}</td>
      <td style="font-size:0.7rem;color:var(--text2);">${d.block}</td>
      <td><span style="${catColors[d.cat]||''};padding:2px 6px;border-radius:3px;font-size:0.6rem;font-weight:700;">${d.cat.toUpperCase()}</span></td>
      <td><span class="risk-pill ${riskClass[d.risk]}">${d.risk.toUpperCase()}</span></td>
      <td style="font-size:0.7rem;color:var(--text3);">${d.use}</td>
      <td class="ft-action"><button data-i="${i}">COPY</button></td>
    `;
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll('button[data-i]').forEach(btn => {
    btn.onclick = () => { const d = UNICODE_DB[+btn.dataset.i]; doCopy(d.char, d.name); };
  });
}
buildRefTable();

// ── UTILS ────────────────────────────────────────────────────────────────
function escapeChar(ch) { return ch.replace(/\\/g,'\\\\').replace(/'/g,"\\'"); }

function doCopy(char, name) {
  navigator.clipboard.writeText(char).then(() => showToast(`// COPIED: ${name}`));
}

let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}
