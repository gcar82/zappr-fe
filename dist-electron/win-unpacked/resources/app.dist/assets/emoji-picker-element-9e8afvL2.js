function e(e2) {
  if (typeof e2 != `string` || !e2) throw Error(`expected a non-empty string, got: ` + e2);
}
function t(e2) {
  if (typeof e2 != `number`) throw Error(`expected a number, got: ` + e2);
}
var n = `emoji`, r = `keyvalue`, i = `favorites`, a = `tokens`, o = `count`, s = `group-order`, c = `eTag`, l = `skinTone`, u = `readonly`, d = `readwrite`, f = `skinUnicodes`;
function p(e2, t2) {
  let n2 = /* @__PURE__ */ new Set(), r2 = [];
  for (let i2 of e2) {
    let e3 = t2(i2);
    n2.has(e3) || (n2.add(e3), r2.push(i2));
  }
  return r2;
}
function m(e2) {
  return p(e2, (e3) => e3.unicode);
}
function h(e2) {
  function t2(t3, n2, r2) {
    let i2 = n2 ? e2.createObjectStore(t3, { keyPath: n2 }) : e2.createObjectStore(t3);
    if (r2) for (let [e3, [t4, n3]] of Object.entries(r2)) i2.createIndex(e3, t4, { multiEntry: n3 });
    return i2;
  }
  t2(r), t2(n, `unicode`, { [a]: [`tokens`, true], [s]: [[`group`, `order`]], [f]: [`skinUnicodes`, true] }), t2(i, void 0, { [o]: [``] });
}
var g = {}, _ = {}, v = {};
function y(e2, t2, n2) {
  n2.onerror = () => t2(n2.error), n2.onblocked = () => t2(Error(`IDB blocked`)), n2.onsuccess = () => e2(n2.result);
}
async function b(e2) {
  let t2 = await new Promise((t3, n2) => {
    let r2 = indexedDB.open(e2, 1);
    g[e2] = r2, r2.onupgradeneeded = (e3) => {
      e3.oldVersion < 1 && h(r2.result);
    }, y(t3, n2, r2);
  });
  return t2.onclose = () => C(e2), t2;
}
function x(e2) {
  return _[e2] || (_[e2] = b(e2)), _[e2];
}
function S(e2, t2, n2, r2) {
  return new Promise((i2, a2) => {
    let o2 = e2.transaction(t2, n2, { durability: `relaxed` }), s2 = typeof t2 == `string` ? o2.objectStore(t2) : t2.map((e3) => o2.objectStore(e3)), c2;
    r2(s2, o2, (e3) => {
      c2 = e3;
    }), o2.oncomplete = () => i2(c2), o2.onerror = () => a2(o2.error);
  });
}
function C(e2) {
  let t2 = g[e2], n2 = t2 && t2.result;
  if (n2) {
    n2.close();
    let t3 = v[e2];
    if (t3) for (let e3 of t3) e3();
  }
  delete g[e2], delete _[e2], delete v[e2];
}
function w(e2) {
  return new Promise((t2, n2) => {
    C(e2), y(t2, n2, indexedDB.deleteDatabase(e2));
  });
}
function ee(e2, t2) {
  let n2 = v[e2];
  n2 ||= v[e2] = [], n2.push(t2);
}
var te = new Set(`:D.XD.:'D.O:).:X.:P.;P.XP.:L.:Z.:j.8D.XO.8).:B.:O.:S.:'o.Dx.X(.D:.:C.>0).:3.</3.<3.\\M/.:E.8#`.split(`.`));
function T(e2) {
  return e2.split(/[\s_]+/).map((e3) => !e3.match(/\w/) || te.has(e3) ? e3.toLowerCase() : e3.replace(/[)(:,]/g, ``).replace(/’/g, `'`).toLowerCase()).filter(Boolean);
}
var E = 2;
function D(e2) {
  return e2.filter(Boolean).map((e3) => e3.toLowerCase()).filter((e3) => e3.length >= E);
}
function ne(e2) {
  return e2.map(({ annotation: e3, emoticon: t2, group: n2, order: r2, shortcodes: i2, skins: a2, tags: o2, emoji: s2, version: c2 }) => {
    let l2 = { annotation: e3, group: n2, order: r2, tags: o2, tokens: [...new Set(D([...(i2 || []).map(T).flat(), ...(o2 || []).map(T).flat(), ...T(e3), t2]))].sort(), unicode: s2, version: c2 };
    if (t2 && (l2.emoticon = t2), i2 && (l2.shortcodes = i2), a2) {
      l2.skinTones = [], l2.skinUnicodes = [], l2.skinVersions = [];
      for (let { tone: e4, emoji: t3, version: n3 } of a2) l2.skinTones.push(e4), l2.skinUnicodes.push(t3), l2.skinVersions.push(n3);
    }
    return l2;
  });
}
function O(e2, t2, n2, r2) {
  e2[t2](n2).onsuccess = (e3) => r2 && r2(e3.target.result);
}
function k(e2, t2, n2) {
  O(e2, `get`, t2, n2);
}
function A(e2, t2, n2) {
  O(e2, `getAll`, t2, n2);
}
function j(e2) {
  e2.commit && e2.commit();
}
function M(e2, t2) {
  let n2 = e2[0];
  for (let r2 = 1; r2 < e2.length; r2++) {
    let i2 = e2[r2];
    t2(n2) > t2(i2) && (n2 = i2);
  }
  return n2;
}
function N(e2, t2) {
  let n2 = M(e2, (e3) => e3.length), r2 = [];
  for (let i2 of n2) e2.some((e3) => e3.findIndex((e4) => t2(e4) === t2(i2)) === -1) || r2.push(i2);
  return r2;
}
async function P(e2) {
  return !await le(e2, r, `url`);
}
async function re(e2, t2, n2) {
  let [i2, a2] = await Promise.all([c, `url`].map((t3) => le(e2, r, t3)));
  return i2 === n2 && a2 === t2;
}
async function ie(e2, t2) {
  return S(e2, n, u, (e3, n2, r2) => {
    let i2, a2 = () => {
      e3.getAll(i2 && IDBKeyRange.lowerBound(i2, true), 50).onsuccess = (e4) => {
        let n3 = e4.target.result;
        for (let e5 of n3) if (i2 = e5.unicode, t2(e5)) return r2(e5);
        if (n3.length < 50) return r2();
        a2();
      };
    };
    a2();
  });
}
async function F(e2, t2, i2, a2) {
  try {
    let o2 = ne(t2);
    await S(e2, [n, r], d, ([e3, t3], n2) => {
      let r2, s2, l2 = 0;
      function u2() {
        ++l2 === 2 && d2();
      }
      function d2() {
        if (!(r2 === a2 && s2 === i2)) {
          e3.clear();
          for (let t4 of o2) e3.put(t4);
          t3.put(a2, c), t3.put(i2, `url`), j(n2);
        }
      }
      k(t3, c, (e4) => {
        r2 = e4, u2();
      }), k(t3, `url`, (e4) => {
        s2 = e4, u2();
      });
    });
  } finally {
  }
}
async function ae(e2, t2) {
  return S(e2, n, u, (e3, n2, r2) => {
    let i2 = IDBKeyRange.bound([t2, 0], [t2 + 1, 0], false, true);
    A(e3.index(s), i2, r2);
  });
}
async function oe(e2, t2) {
  let r2 = D(T(t2));
  return r2.length ? S(e2, n, u, (e3, t3, n2) => {
    let i2 = [], o2 = () => {
      i2.length === r2.length && s2();
    }, s2 = () => {
      n2(N(i2, (e4) => e4.unicode).sort((e4, t4) => e4.order < t4.order ? -1 : 1));
    };
    for (let t4 = 0; t4 < r2.length; t4++) {
      let n3 = r2[t4], s3 = t4 === r2.length - 1 ? IDBKeyRange.bound(n3, n3 + `\uFFFF`, false, true) : IDBKeyRange.only(n3);
      A(e3.index(a), s3, (e4) => {
        i2.push(e4), o2();
      });
    }
  }) : [];
}
async function se(e2, t2) {
  let n2 = await oe(e2, t2);
  return n2.length ? n2.filter((e3) => (e3.shortcodes || []).map((e4) => e4.toLowerCase()).includes(t2.toLowerCase()))[0] || null : await ie(e2, (e3) => (e3.shortcodes || []).includes(t2.toLowerCase())) || null;
}
async function ce(e2, t2) {
  return S(e2, n, u, (e3, n2, r2) => k(e3, t2, (n3) => {
    if (n3) return r2(n3);
    k(e3.index(f), t2, (e4) => r2(e4 || null));
  }));
}
function le(e2, t2, n2) {
  return S(e2, t2, u, (e3, t3, r2) => k(e3, n2, r2));
}
function ue(e2, t2, n2, r2) {
  return S(e2, t2, d, (e3, t3) => {
    e3.put(r2, n2), j(t3);
  });
}
function de(e2, t2) {
  return S(e2, i, d, (e3, n2) => k(e3, t2, (r2) => {
    e3.put((r2 || 0) + 1, t2), j(n2);
  }));
}
function fe(e2, t2, r2) {
  return r2 === 0 ? [] : S(e2, [i, n], u, ([e3, n2], i2, a2) => {
    let s2 = [];
    e3.index(o).openCursor(void 0, `prev`).onsuccess = (e4) => {
      let i3 = e4.target.result;
      if (!i3) return a2(s2);
      function o2(e5) {
        if (s2.push(e5), s2.length === r2) return a2(s2);
        i3.continue();
      }
      let c2 = i3.primaryKey, l2 = t2.byName(c2);
      if (l2) return o2(l2);
      k(n2, c2, (e5) => {
        if (e5) return o2(e5);
        i3.continue();
      });
    };
  });
}
var I = ``;
function pe(e2, t2) {
  let n2 = /* @__PURE__ */ new Map();
  for (let r2 of e2) {
    let e3 = t2(r2);
    for (let t3 of e3) {
      let e4 = n2;
      for (let n3 = 0; n3 < t3.length; n3++) {
        let r3 = t3.charAt(n3), i3 = e4.get(r3);
        i3 || (i3 = /* @__PURE__ */ new Map(), e4.set(r3, i3)), e4 = i3;
      }
      let i2 = e4.get(I);
      i2 || (i2 = [], e4.set(I, i2)), i2.push(r2);
    }
  }
  return (e3, t3) => {
    let r2 = n2;
    for (let t4 = 0; t4 < e3.length; t4++) {
      let n3 = e3.charAt(t4), i3 = r2.get(n3);
      if (i3) r2 = i3;
      else return [];
    }
    if (t3) return r2.get(I) || [];
    let i2 = [], a2 = [r2];
    for (; a2.length; ) {
      let e4 = [...a2.shift().entries()].sort((e5, t4) => e5[0] < t4[0] ? -1 : 1);
      for (let [t4, n3] of e4) t4 === I ? i2.push(...n3) : a2.push(n3);
    }
    return i2;
  };
}
var me = [`name`, `url`];
function he(e2) {
  let t2 = e2 && Array.isArray(e2), n2 = t2 && e2.length && (!e2[0] || me.some((t3) => !(t3 in e2[0])));
  if (!t2 || n2) throw Error(`Custom emojis are in the wrong format`);
}
function ge(e2) {
  he(e2);
  let t2 = (e3, t3) => e3.name.toLowerCase() < t3.name.toLowerCase() ? -1 : 1, n2 = e2.sort(t2), r2 = pe(e2, (e3) => {
    let t3 = /* @__PURE__ */ new Set();
    if (e3.shortcodes) for (let n3 of e3.shortcodes) for (let e4 of T(n3)) t3.add(e4);
    return t3;
  }), i2 = (e3) => r2(e3, true), a2 = (e3) => r2(e3, false), o2 = (e3) => {
    let n3 = T(e3);
    return N(n3.map((e4, t3) => (t3 < n3.length - 1 ? i2 : a2)(e4)), (e4) => e4.name).sort(t2);
  }, s2 = /* @__PURE__ */ new Map(), c2 = /* @__PURE__ */ new Map();
  for (let t3 of e2) {
    c2.set(t3.name.toLowerCase(), t3);
    for (let e3 of t3.shortcodes || []) s2.set(e3.toLowerCase(), t3);
  }
  return { all: n2, search: o2, byShortcode: (e3) => s2.get(e3.toLowerCase()), byName: (e3) => c2.get(e3.toLowerCase()) };
}
var _e = typeof wrappedJSObject < `u`;
function L(e2) {
  if (!e2) return e2;
  if (_e && (e2 = structuredClone(e2)), delete e2.tokens, e2.skinTones) {
    let t2 = e2.skinTones.length;
    e2.skins = Array(t2);
    for (let n2 = 0; n2 < t2; n2++) e2.skins[n2] = { tone: e2.skinTones[n2], unicode: e2.skinUnicodes[n2], version: e2.skinVersions[n2] };
    delete e2.skinTones, delete e2.skinUnicodes, delete e2.skinVersions;
  }
  return e2;
}
function ve(e2) {
  e2 || console.warn(`emoji-picker-element is more efficient if the dataSource server exposes an ETag header.`);
}
var ye = [`annotation`, `emoji`, `group`, `order`, `version`];
function be(e2) {
  if (!e2 || !Array.isArray(e2) || !e2[0] || typeof e2[0] != `object` || ye.some((t2) => !(t2 in e2[0]))) throw Error(`Emoji data is in the wrong format`);
}
function xe(e2, t2) {
  if (Math.floor(e2.status / 100) !== 2) throw Error(`Failed to fetch: ` + t2 + `:  ` + e2.status);
}
async function Se(e2) {
  let t2 = await fetch(e2, { method: `HEAD` });
  xe(t2, e2);
  let n2 = t2.headers.get(`etag`);
  return ve(n2), n2;
}
async function R(e2) {
  let t2 = await fetch(e2);
  xe(t2, e2);
  let n2 = t2.headers.get(`etag`);
  ve(n2);
  let r2 = await t2.json();
  return be(r2), [n2, r2];
}
function Ce(e2) {
  for (var t2 = ``, n2 = new Uint8Array(e2), r2 = n2.byteLength, i2 = -1; ++i2 < r2; ) t2 += String.fromCharCode(n2[i2]);
  return t2;
}
function we(e2) {
  for (var t2 = e2.length, n2 = new ArrayBuffer(t2), r2 = new Uint8Array(n2), i2 = -1; ++i2 < t2; ) r2[i2] = e2.charCodeAt(i2);
  return n2;
}
async function Te(e2) {
  let t2 = we(JSON.stringify(e2)), n2 = Ce(await crypto.subtle.digest(`SHA-1`, t2));
  return btoa(n2);
}
async function Ee(e2, t2) {
  let n2, r2 = await Se(t2);
  if (!r2) {
    let e3 = await R(t2);
    r2 = e3[0], n2 = e3[1], r2 ||= await Te(n2);
  }
  await re(e2, t2, r2) || (n2 ||= (await R(t2))[1], await F(e2, n2, t2, r2));
}
async function De(e2, t2) {
  let [n2, r2] = await R(t2);
  n2 ||= await Te(r2), await F(e2, r2, t2, n2);
}
async function Oe(e2, t2) {
  try {
    await Ee(e2, t2);
  } catch (e3) {
    if (e3.name !== `InvalidStateError`) throw e3;
  }
}
var ke = class {
  constructor({ dataSource: e2 = `https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json`, locale: t2 = `en`, customEmoji: n2 = [] } = {}) {
    this.dataSource = e2, this.locale = t2, this._dbName = `emoji-picker-element-${this.locale}`, this._db = void 0, this._lazyUpdate = void 0, this._custom = ge(n2), this._clear = this._clear.bind(this), this._ready = this._init();
  }
  async _init() {
    let e2 = this._db = await x(this._dbName);
    ee(this._dbName, this._clear);
    let t2 = this.dataSource;
    await P(e2) ? await De(e2, t2) : this._lazyUpdate = Oe(e2, t2);
  }
  async ready() {
    let e2 = async () => (this._ready ||= this._init(), this._ready);
    await e2(), this._db || await e2();
  }
  async getEmojiByGroup(e2) {
    return t(e2), await this.ready(), m(await ae(this._db, e2)).map(L);
  }
  async getEmojiBySearchQuery(t2) {
    e(t2), await this.ready();
    let n2 = this._custom.search(t2), r2 = m(await oe(this._db, t2)).map(L);
    return [...n2, ...r2];
  }
  async getEmojiByShortcode(t2) {
    return e(t2), await this.ready(), this._custom.byShortcode(t2) || L(await se(this._db, t2));
  }
  async getEmojiByUnicodeOrName(t2) {
    return e(t2), await this.ready(), this._custom.byName(t2) || L(await ce(this._db, t2));
  }
  async getPreferredSkinTone() {
    return await this.ready(), await le(this._db, r, l) || 0;
  }
  async setPreferredSkinTone(e2) {
    return t(e2), await this.ready(), ue(this._db, r, l, e2);
  }
  async incrementFavoriteEmojiCount(t2) {
    return e(t2), await this.ready(), de(this._db, t2);
  }
  async getTopFavoriteEmoji(e2) {
    return t(e2), await this.ready(), (await fe(this._db, this._custom, e2)).map(L);
  }
  set customEmoji(e2) {
    this._custom = ge(e2);
  }
  get customEmoji() {
    return this._custom.all;
  }
  async _shutdown() {
    await this.ready();
    try {
      await this._lazyUpdate;
    } catch {
    }
  }
  _clear() {
    this._db = this._ready = this._lazyUpdate = void 0;
  }
  async close() {
    await this._shutdown(), await C(this._dbName);
  }
  async delete() {
    await this._shutdown(), await w(this._dbName);
  }
}, z = [[-1, `\u2728`, `custom`], [0, `\u{1F600}`, `smileys-emotion`], [1, `\u{1F44B}`, `people-body`], [3, `\u{1F431}`, `animals-nature`], [4, `\u{1F34E}`, `food-drink`], [5, `\u{1F3E0}\uFE0F`, `travel-places`], [6, `\u26BD`, `activities`], [7, `\u{1F4DD}`, `objects`], [8, `\u26D4\uFE0F`, `symbols`], [9, `\u{1F3C1}`, `flags`]].map(([e2, t2, n2]) => ({ id: e2, emoji: t2, name: n2 })), B = z.slice(1), Ae = 2, je = 6, Me = typeof requestIdleCallback == `function` ? requestIdleCallback : setTimeout;
function Ne(e2) {
  return e2.unicode.includes(`\u200D`);
}
var Pe = { "\u{1FAEA}": 17, "\u{1FAE9}": 16, "\u{1FAE8}": 15.1, "\u{1FAE0}": 14, "\u{1F972}": 13.1, "\u{1F97B}": 12.1, "\u{1F970}": 11, "\u{1F929}": 5, "\u{1F471}\u200D\u2640\uFE0F": 4, "\u{1F923}": 3, "\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F": 2, "\u{1F600}": 1, "\u{1F610}\uFE0F": 0.7, "\u{1F603}": 0.6 }, Fe = 1e3, Ie = `\u{1F590}\uFE0F`, Le = 8, Re = [`\u{1F60A}`, `\u{1F612}`, `\u2764\uFE0F`, `\u{1F44D}\uFE0F`, `\u{1F60D}`, `\u{1F602}`, `\u{1F62D}`, `\u263A\uFE0F`, `\u{1F614}`, `\u{1F629}`, `\u{1F60F}`, `\u{1F495}`, `\u{1F64C}`, `\u{1F618}`], ze = `"Twemoji Mozilla","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji","EmojiOne Color","Android Emoji",sans-serif`, Be = (e2, t2) => e2 < t2 ? -1 : +(e2 > t2), Ve = (e2, t2) => {
  let n2 = document.createElement(`canvas`);
  n2.width = n2.height = 1;
  let r2 = n2.getContext(`2d`, { willReadFrequently: true });
  return r2.textBaseline = `top`, r2.font = `100px ${ze}`, r2.fillStyle = t2, r2.scale(0.01, 0.01), r2.fillText(e2, 0, 0), r2.getImageData(0, 0, 1, 1).data;
}, He = (e2, t2) => {
  let n2 = [...e2].join(`,`);
  return n2 === [...t2].join(`,`) && !n2.startsWith(`0,0,0,`);
};
function Ue(e2) {
  let t2 = Ve(e2, `#000`), n2 = Ve(e2, `#fff`);
  return t2 && n2 && He(t2, n2);
}
function We() {
  let e2 = Object.entries(Pe);
  try {
    for (let [t2, n2] of e2) if (Ue(t2)) return n2;
  } catch {
  }
  return e2[0][1];
}
var Ge, V = () => (Ge ||= new Promise((e2) => Me(() => e2(We()))), Ge), H = /* @__PURE__ */ new Map(), Ke = `\uFE0F`, qe = `\uD83C`, Je = `\u200D`, Ye = 127995, Xe = 57339;
function Ze(e2, t2) {
  if (t2 === 0) return e2;
  let n2 = e2.indexOf(Je);
  return n2 === -1 ? (e2.endsWith(Ke) && (e2 = e2.substring(0, e2.length - 1)), e2 + qe + String.fromCodePoint(Xe + t2 - 1)) : e2.substring(0, n2) + String.fromCodePoint(Ye + t2 - 1) + e2.substring(n2);
}
function U(e2) {
  e2.preventDefault(), e2.stopPropagation();
}
function W(e2, t2, n2) {
  return t2 += e2 ? -1 : 1, t2 < 0 ? t2 = n2.length - 1 : t2 >= n2.length && (t2 = 0), t2;
}
function Qe(e2, t2) {
  let n2 = /* @__PURE__ */ new Set(), r2 = [];
  for (let i2 of e2) {
    let e3 = t2(i2);
    n2.has(e3) || (n2.add(e3), r2.push(i2));
  }
  return r2;
}
function $e(e2, t2) {
  let n2 = (e3) => {
    let n3 = {};
    for (let r2 of e3) typeof r2.tone == `number` && r2.version <= t2 && (n3[r2.tone] = r2.unicode);
    return n3;
  };
  return e2.map(({ unicode: e3, skins: t3, shortcodes: r2, url: i2, name: a2, category: o2, annotation: s2 }) => ({ unicode: e3, name: a2, shortcodes: r2, url: i2, category: o2, annotation: s2, id: e3 || a2, skins: t3 && n2(t3) }));
}
var G = requestAnimationFrame, et = typeof ResizeObserver == `function`;
function tt(e2, t2, n2) {
  let r2;
  et ? (r2 = new ResizeObserver(n2), r2.observe(e2)) : G(n2), t2.addEventListener(`abort`, () => {
    r2 && r2.disconnect();
  });
}
function nt(e2) {
  {
    let t2 = document.createRange();
    return t2.selectNode(e2.firstChild), t2.getBoundingClientRect().width;
  }
}
var rt = `\u{1F600}`, K, q;
function it(e2, t2, n2) {
  let r2 = nt(t2);
  if (!r2) {
    if (!q) {
      q = n2.cloneNode(true);
      let e3 = getComputedStyle(n2);
      for (let t3 of [`font-family`, `line-height`, `width`, `height`, `font-size`, `display`, `align-items`, `justify-content`]) q.style.setProperty(t3, e3.getPropertyValue(t3), `important`);
    }
    try {
      return document.body.appendChild(q), q.firstChild.nodeValue = e2, nt(q);
    } finally {
      q.remove();
    }
  }
  return r2;
}
function at(e2, t2, n2) {
  let r2 = true;
  for (let i2 of e2) {
    let e3 = n2(i2);
    if (!e3) continue;
    K === void 0 && (K = it(rt, t2, t2));
    let a2 = it(i2.unicode, e3, t2) / 1.8 < K;
    H.set(i2.unicode, a2), a2 || (r2 = false);
  }
  return r2;
}
function ot(e2) {
  return Qe(e2, (e3) => e3);
}
function st(e2) {
  e2 && (e2.scrollTop = 0);
}
function J(e2, t2, n2) {
  let r2 = e2.get(t2);
  return r2 || (r2 = n2(), e2.set(t2, r2)), r2;
}
function ct(e2) {
  return `` + e2;
}
function lt(e2) {
  let t2 = document.createElement(`template`);
  return t2.innerHTML = e2, t2;
}
var ut = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ new WeakMap(), ft = /* @__PURE__ */ Symbol(`un-keyed`), pt = `replaceChildren` in Element.prototype;
function mt(e2, t2) {
  pt ? e2.replaceChildren(...t2) : (e2.innerHTML = ``, e2.append(...t2));
}
function ht(e2, t2) {
  let n2 = e2.firstChild, r2 = 0;
  for (; n2; ) {
    if (t2[r2] !== n2) return true;
    n2 = n2.nextSibling, r2++;
  }
  return r2 !== t2.length;
}
function gt(e2, t2) {
  let { targetNode: n2 } = t2, { targetParentNode: r2 } = t2, i2 = false;
  r2 ? i2 = ht(r2, e2) : (i2 = true, t2.targetNode = void 0, t2.targetParentNode = r2 = n2.parentNode), i2 && mt(r2, e2);
}
function _t(e2, t2) {
  for (let n2 of t2) {
    let { targetNode: t3, currentExpression: r2, binding: { expressionIndex: i2, attributeName: a2, attributeValuePre: o2, attributeValuePost: s2 } } = n2, c2 = e2[i2];
    if (r2 !== c2) if (n2.currentExpression = c2, a2) if (c2 === null) t3.removeAttribute(a2);
    else {
      let e3 = o2 + ct(c2) + s2;
      t3.setAttribute(a2, e3);
    }
    else {
      let e3;
      Array.isArray(c2) ? gt(c2, n2) : c2 instanceof Element ? (e3 = c2, t3.replaceWith(e3)) : t3.nodeValue = ct(c2), e3 && (n2.targetNode = e3);
    }
  }
}
function vt(e2) {
  let t2 = ``, n2 = false, r2 = false, i2 = -1, a2 = /* @__PURE__ */ new Map(), o2 = [], s2 = 0;
  for (let c2 = 0, l2 = e2.length; c2 < l2; c2++) {
    let u2 = e2[c2];
    if (t2 += u2.slice(s2), c2 === l2 - 1) break;
    for (let e3 = 0; e3 < u2.length; e3++) switch (u2.charAt(e3)) {
      case `<`:
        u2.charAt(e3 + 1) === `/` ? o2.pop() : (n2 = true, o2.push(++i2));
        break;
      case `>`:
        n2 = false, r2 = false;
        break;
      case `=`:
        r2 = true;
        break;
    }
    let d2 = o2[o2.length - 1], f2 = J(a2, d2, () => []), p2, m2, h2;
    if (r2) {
      let n3 = /(\S+)="?([^"=]*)$/.exec(u2);
      p2 = n3[1], m2 = n3[2];
      let r3 = /^([^">]*)("?)/.exec(e2[c2 + 1]);
      h2 = r3[1], t2 = t2.slice(0, -1 * n3[0].length), s2 = r3[0].length;
    } else s2 = 0;
    let g2 = { attributeName: p2, attributeValuePre: m2, attributeValuePost: h2, expressionIndex: c2 };
    f2.push(g2), !n2 && !r2 && (t2 += ` `);
  }
  return { template: lt(t2), elementsToBindings: a2 };
}
function yt(e2, t2, n2) {
  for (let r2 = 0; r2 < e2.length; r2++) {
    let i2 = e2[r2], a2 = { binding: i2, targetNode: i2.attributeName ? t2 : t2.firstChild, targetParentNode: void 0, currentExpression: void 0 };
    n2.push(a2);
  }
}
function bt(e2, t2) {
  let n2 = [], r2;
  if (t2.size === 1 && (r2 = t2.get(0))) yt(r2, e2, n2);
  else {
    let r3 = document.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT), i2 = e2, a2 = -1;
    do {
      let e3 = t2.get(++a2);
      e3 && yt(e3, i2, n2);
    } while (i2 = r3.nextNode());
  }
  return n2;
}
function xt(e2) {
  let { template: t2, elementsToBindings: n2 } = J(ut, e2, () => vt(e2)), r2 = t2.cloneNode(true).content.firstElementChild, i2 = bt(r2, n2);
  return function(e3) {
    return _t(e3, i2), r2;
  };
}
function St(e2) {
  let t2 = J(dt, e2, () => /* @__PURE__ */ new Map()), n2 = ft;
  function r2(e3, ...r3) {
    return J(J(t2, e3, () => /* @__PURE__ */ new Map()), n2, () => xt(e3))(r3);
  }
  function i2(e3, t3, r3) {
    return e3.map((e4, i3) => {
      let a2 = n2;
      n2 = r3(e4);
      try {
        return t3(e4, i3);
      } finally {
        n2 = a2;
      }
    });
  }
  return { map: i2, html: r2 };
}
function Ct(e2, t2, n2, r2, i2, a2, o2, s2, c2) {
  let { labelWithSkin: l2, titleForEmoji: u2, unicodeWithSkin: d2 } = n2, { html: f2, map: p2 } = St(t2);
  function m2(e3, n3, r3) {
    return p2(e3, (e4, i3) => f2`<button role="${n3 ? `option` : `menuitem`}" aria-selected="${n3 ? i3 === t2.activeSearchItem : null}" aria-label="${l2(e4, t2.currentSkinTone)}" title="${u2(e4)}" class="${`emoji` + (n3 && i3 === t2.activeSearchItem ? ` active` : ``) + (e4.unicode ? `` : ` custom-emoji`)}" id="${`${r3}-${e4.id}`}" style="${e4.unicode ? null : `--custom-emoji-background: url(${JSON.stringify(e4.url)})`}">${e4.unicode ? d2(e4, t2.currentSkinTone) : ``}</button>`, (e4) => `${r3}-${e4.id}`);
  }
  let h2 = f2`<section data-ref="rootElement" class="picker" aria-label="${t2.i18n.regionLabel}" style="${t2.pickerStyle || ``}"><div class="pad-top"></div><div class="search-row"><div class="search-wrapper"><input id="search" class="search" type="search" role="combobox" enterkeyhint="search" placeholder="${t2.i18n.searchLabel}" autocapitalize="none" autocomplete="off" spellcheck="true" aria-expanded="${!!(t2.searchMode && t2.currentEmojis.length)}" aria-controls="search-results" aria-describedby="search-description" aria-autocomplete="list" aria-activedescendant="${t2.activeSearchItemId ? `emo-${t2.activeSearchItemId}` : null}" data-ref="searchElement" data-on-input="onSearchInput" data-on-keydown="onSearchKeydown"><label class="sr-only" for="search">${t2.i18n.searchLabel}</label> <span id="search-description" class="sr-only">${t2.i18n.searchDescription}</span></div><div class="skintone-button-wrapper ${t2.skinTonePickerExpandedAfterAnimation ? `expanded` : ``}"><button id="skintone-button" class="emoji ${t2.skinTonePickerExpanded ? `hide-focus` : ``}" aria-label="${t2.skinToneButtonLabel}" title="${t2.skinToneButtonLabel}" aria-describedby="skintone-description" aria-haspopup="listbox" aria-expanded="${t2.skinTonePickerExpanded}" aria-controls="skintone-list" data-on-click="onClickSkinToneButton">${t2.skinToneButtonText || ``}</button></div><span id="skintone-description" class="sr-only">${t2.i18n.skinToneDescription}</span><div data-ref="skinToneDropdown" id="skintone-list" class="skintone-list hide-focus ${t2.skinTonePickerExpanded ? `` : `hidden no-animate`}" style="transform:translateY(${t2.skinTonePickerExpanded ? 0 : `calc(-1 * var(--num-skintones) * var(--total-emoji-size))`})" role="listbox" aria-label="${t2.i18n.skinTonesLabel}" aria-activedescendant="skintone-${t2.activeSkinTone}" aria-hidden="${!t2.skinTonePickerExpanded}" tabIndex="-1" data-on-focusout="onSkinToneOptionsFocusOut" data-on-click="onSkinToneOptionsClick" data-on-keydown="onSkinToneOptionsKeydown" data-on-keyup="onSkinToneOptionsKeyup">${p2(t2.skinTones, (e3, n3) => f2`<div id="skintone-${n3}" class="emoji ${n3 === t2.activeSkinTone ? `active` : ``}" aria-selected="${n3 === t2.activeSkinTone}" role="option" title="${t2.i18n.skinTones[n3]}" aria-label="${t2.i18n.skinTones[n3]}">${e3}</div>`, (e3) => e3)}</div></div><div class="nav" role="tablist" style="grid-template-columns:repeat(${t2.groups.length},1fr)" aria-label="${t2.i18n.categoriesLabel}" data-on-keydown="onNavKeydown" data-on-click="onNavClick">${p2(t2.groups, (e3) => f2`<button role="tab" class="nav-button" aria-controls="tab-${e3.id}" aria-label="${t2.i18n.categories[e3.name]}" aria-selected="${!t2.searchMode && t2.currentGroup.id === e3.id}" title="${t2.i18n.categories[e3.name]}" data-group-id="${e3.id}"><div class="nav-emoji emoji">${e3.emoji}</div></button>`, (e3) => e3.id)}</div><div class="indicator-wrapper"><div class="indicator" style="transform:translateX(${(t2.isRtl ? -1 : 1) * t2.currentGroupIndex * 100}%)"></div></div><div class="message ${t2.message ? `` : `gone`}" role="alert" aria-live="polite">${t2.message || ``}</div><div data-ref="tabpanelElement" class="tabpanel ${!t2.databaseLoaded || t2.message ? `gone` : ``}" role="${t2.searchMode ? `region` : `tabpanel`}" aria-label="${t2.searchMode ? t2.i18n.searchResultsLabel : t2.i18n.categories[t2.currentGroup.name]}" id="${t2.searchMode ? null : `tab-${t2.currentGroup.id}`}" tabIndex="0" data-on-click="onEmojiClick"><div data-action="calculateEmojiGridStyle">${p2(t2.currentEmojisWithCategories, (e3, n3) => f2`<div><div id="menu-label-${n3}" class="category ${t2.currentEmojisWithCategories.length === 1 && t2.currentEmojisWithCategories[0].category === `` ? `gone` : ``}" aria-hidden="true">${t2.searchMode ? t2.i18n.searchResultsLabel : e3.category ? e3.category : t2.currentEmojisWithCategories.length > 1 ? t2.i18n.categories.custom : t2.i18n.categories[t2.currentGroup.name]}</div><div class="emoji-menu ${n3 !== 0 && !t2.searchMode && t2.currentGroup.id === -1 ? `visibility-auto` : ``}" style="${`--num-rows: ${Math.ceil(e3.emojis.length / t2.numColumns)}`}" data-action="updateOnIntersection" role="${t2.searchMode ? `listbox` : `menu`}" aria-labelledby="menu-label-${n3}" id="${t2.searchMode ? `search-results` : null}">${m2(e3.emojis, t2.searchMode, `emo`)}</div></div>`, (e3) => e3.category)}</div></div><div class="favorites onscreen emoji-menu ${t2.message ? `gone` : ``}" role="menu" aria-label="${t2.i18n.favoritesLabel}" data-on-click="onEmojiClick">${m2(t2.currentFavorites, false, `fav`)}</div><button data-ref="baselineEmoji" aria-hidden="true" tabindex="-1" class="abs-pos hidden emoji baseline-emoji">😀</button></section>`, g2 = (t3, n3) => {
    for (let r3 of e2.querySelectorAll(`[${t3}]`)) n3(r3, r3.getAttribute(t3));
  };
  if (c2) {
    e2.appendChild(h2);
    for (let e3 of [`click`, `focusout`, `input`, `keydown`, `keyup`]) g2(`data-on-${e3}`, (t3, n3) => {
      t3.addEventListener(e3, r2[n3]);
    });
    g2(`data-ref`, (e3, t3) => {
      a2[t3] = e3;
    }), o2.addEventListener(`abort`, () => {
      e2.removeChild(h2);
    });
  }
  g2(`data-action`, (e3, t3) => {
    let n3 = s2.get(t3);
    n3 || s2.set(t3, n3 = /* @__PURE__ */ new WeakSet()), n3.has(e3) || (n3.add(e3), i2[t3](e3));
  });
}
var Y = typeof queueMicrotask == `function` ? queueMicrotask : (e2) => Promise.resolve().then(e2);
function wt(e2) {
  let t2 = false, n2, r2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Set(), a2, o2 = () => {
    if (t2) return;
    let e3 = [...i2];
    i2.clear();
    try {
      for (let t3 of e3) t3();
    } finally {
      a2 = false, i2.size && (a2 = true, Y(o2));
    }
  }, s2 = new Proxy({}, { get(e3, t3) {
    if (n2) {
      let e4 = r2.get(t3);
      e4 || (e4 = /* @__PURE__ */ new Set(), r2.set(t3, e4)), e4.add(n2);
    }
    return e3[t3];
  }, set(e3, t3, n3) {
    if (e3[t3] !== n3) {
      e3[t3] = n3;
      let s3 = r2.get(t3);
      if (s3) {
        for (let e4 of s3) i2.add(e4);
        a2 || (a2 = true, Y(o2));
      }
    }
    return true;
  } });
  return e2.addEventListener(`abort`, () => {
    t2 = true;
  }), { state: s2, createEffect: (e3) => {
    let t3 = () => {
      let r3 = n2;
      n2 = t3;
      try {
        return e3();
      } finally {
        n2 = r3;
      }
    };
    return t3();
  } };
}
function X(e2, t2, n2) {
  if (e2.length !== t2.length) return false;
  for (let r2 = 0; r2 < e2.length; r2++) if (!n2(e2[r2], t2[r2])) return false;
  return true;
}
var Tt = /* @__PURE__ */ new WeakMap();
function Et(e2, t2, n2) {
  {
    let r2 = e2.closest(`.tabpanel`), i2 = Tt.get(r2);
    i2 || (i2 = new IntersectionObserver(n2, { root: r2, rootMargin: `50% 0px 50% 0px`, threshold: 0 }), Tt.set(r2, i2), t2.addEventListener(`abort`, () => {
      i2.disconnect();
    })), i2.observe(e2);
  }
}
var Z = [], { assign: Q } = Object;
function Dt(e2, t2) {
  let n2 = {}, r2 = new AbortController(), i2 = r2.signal, { state: a2, createEffect: o2 } = wt(i2), s2 = /* @__PURE__ */ new Map();
  Q(a2, { skinToneEmoji: void 0, i18n: void 0, database: void 0, customEmoji: void 0, customCategorySorting: void 0, emojiVersion: void 0 }), Q(a2, t2), Q(a2, { initialLoad: true, currentEmojis: [], currentEmojisWithCategories: [], rawSearchText: ``, searchText: ``, searchMode: false, activeSearchItem: -1, message: void 0, skinTonePickerExpanded: false, skinTonePickerExpandedAfterAnimation: false, currentSkinTone: 0, activeSkinTone: 0, skinToneButtonText: void 0, pickerStyle: void 0, skinToneButtonLabel: ``, skinTones: [], currentFavorites: [], defaultFavoriteEmojis: void 0, numColumns: Le, isRtl: false, currentGroupIndex: 0, groups: B, databaseLoaded: false, activeSearchItemId: void 0 }), o2(() => {
    a2.currentGroup !== a2.groups[a2.currentGroupIndex] && (a2.currentGroup = a2.groups[a2.currentGroupIndex]);
  });
  let c2 = (t3) => {
    e2.getElementById(t3).focus();
  }, l2 = (t3) => e2.getElementById(`emo-${t3.id}`), u2 = (e3, t3) => {
    n2.rootElement.dispatchEvent(new CustomEvent(e3, { detail: t3, bubbles: true, composed: true }));
  }, d2 = (e3, t3) => e3.id === t3.id, f2 = (e3, t3) => {
    let { category: n3, emojis: r3 } = e3, { category: i3, emojis: a3 } = t3;
    return n3 === i3 ? X(r3, a3, d2) : false;
  }, p2 = (e3) => {
    X(a2.currentEmojis, e3, d2) || (a2.currentEmojis = e3);
  }, m2 = (e3) => {
    a2.searchMode !== e3 && (a2.searchMode = e3);
  }, h2 = (e3) => {
    X(a2.currentEmojisWithCategories, e3, f2) || (a2.currentEmojisWithCategories = e3);
  }, g2 = (e3, t3) => t3 && e3.skins && e3.skins[t3] || e3.unicode, _2 = { labelWithSkin: (e3, t3) => ot([e3.name || g2(e3, t3), e3.annotation, ...e3.shortcodes || Z].filter(Boolean)).join(`, `), titleForEmoji: (e3) => e3.annotation || (e3.shortcodes || Z).join(`, `), unicodeWithSkin: g2 }, v2 = { onClickSkinToneButton: ie2, onEmojiClick: N2, onNavClick: k2, onNavKeydown: A2, onSearchKeydown: O2, onSkinToneOptionsClick: re2, onSkinToneOptionsFocusOut: oe2, onSkinToneOptionsKeydown: F2, onSkinToneOptionsKeyup: ae2, onSearchInput: se2 }, y2 = { calculateEmojiGridStyle: S2, updateOnIntersection: C2 }, b2 = true;
  o2(() => {
    Ct(e2, a2, _2, v2, y2, n2, i2, s2, b2), b2 = false;
  }), a2.emojiVersion || V().then((e3) => {
    e3 || (a2.message = a2.i18n.emojiUnsupportedMessage);
  }), o2(() => {
    async function e3() {
      let e4 = false, t3 = setTimeout(() => {
        e4 = true, a2.message = a2.i18n.loadingMessage;
      }, Fe);
      try {
        await a2.database.ready(), a2.databaseLoaded = true;
      } catch (e5) {
        console.error(e5), a2.message = a2.i18n.networkErrorMessage;
      } finally {
        clearTimeout(t3), e4 && (e4 = false, a2.message = ``);
      }
    }
    a2.database && e3();
  }), o2(() => {
    a2.pickerStyle = `
      --num-groups: ${a2.groups.length}; 
      --indicator-opacity: ${+!a2.searchMode}; 
      --num-skintones: ${je};`;
  }), o2(() => {
    a2.customEmoji && a2.database && x2();
  }), o2(() => {
    a2.customEmoji && a2.customEmoji.length ? a2.groups !== z && (a2.groups = z) : a2.groups !== B && (a2.currentGroupIndex && a2.currentGroupIndex--, a2.groups = B);
  }), o2(() => {
    async function e3() {
      a2.databaseLoaded && (a2.currentSkinTone = await a2.database.getPreferredSkinTone());
    }
    e3();
  }), o2(() => {
    a2.skinTones = Array(je).fill().map((e3, t3) => Ze(a2.skinToneEmoji, t3));
  }), o2(() => {
    a2.skinToneButtonText = a2.skinTones[a2.currentSkinTone];
  }), o2(() => {
    a2.skinToneButtonLabel = a2.i18n.skinToneLabel.replace(`{skinTone}`, a2.i18n.skinTones[a2.currentSkinTone]);
  }), o2(() => {
    async function e3() {
      let { database: e4 } = a2, t3 = (await Promise.all(Re.map((t4) => e4.getEmojiByUnicodeOrName(t4)))).filter(Boolean);
      a2.defaultFavoriteEmojis = t3;
    }
    a2.databaseLoaded && e3();
  });
  function x2() {
    let { customEmoji: e3, database: t3 } = a2, n3 = e3 || Z;
    t3.customEmoji !== n3 && (t3.customEmoji = n3);
  }
  o2(() => {
    async function e3() {
      x2();
      let { database: e4, defaultFavoriteEmojis: t3, numColumns: n3 } = a2, r3 = await E2(Qe([...await e4.getTopFavoriteEmoji(n3), ...t3], (e5) => e5.unicode || e5.name).slice(0, n3));
      a2.currentFavorites = r3;
    }
    a2.databaseLoaded && a2.defaultFavoriteEmojis && e3();
  });
  function S2(e3) {
    tt(e3, i2, () => {
      {
        let e4 = getComputedStyle(n2.rootElement), t3 = parseInt(e4.getPropertyValue(`--num-columns`), 10), r3 = e4.getPropertyValue(`direction`) === `rtl`;
        a2.numColumns = t3, a2.isRtl = r3;
      }
    });
  }
  function C2(e3) {
    Et(e3, i2, (e4) => {
      for (let { target: t3, isIntersecting: n3 } of e4) t3.classList.toggle(`onscreen`, n3);
    });
  }
  o2(() => {
    async function e3() {
      let { searchText: e4, currentGroup: t3, databaseLoaded: n3, customEmoji: r3 } = a2;
      if (!n3) a2.currentEmojis = [], a2.searchMode = false;
      else if (e4.length >= Ae) {
        let t4 = await ne2(e4);
        a2.searchText === e4 && (p2(t4), m2(true));
      } else {
        let { id: e5 } = t3;
        if (e5 !== -1 || r3 && r3.length) {
          let t4 = await D2(e5);
          a2.currentGroup.id === e5 && (p2(t4), m2(false));
        }
      }
    }
    e3();
  });
  let w2 = () => {
    G(() => st(n2.tabpanelElement));
  };
  o2(() => {
    let { currentEmojis: e3, emojiVersion: t3 } = a2, n3 = e3.filter((e4) => e4.unicode).filter((e4) => Ne(e4) && !H.has(e4.unicode));
    if (!t3 && n3.length) p2(e3), G(() => ee2(n3));
    else {
      let n4 = t3 ? e3 : e3.filter(te2);
      p2(n4), w2();
    }
  });
  function ee2(e3) {
    at(e3, n2.baselineEmoji, l2) ? w2() : a2.currentEmojis = [...a2.currentEmojis];
  }
  function te2(e3) {
    return !e3.unicode || !Ne(e3) || H.get(e3.unicode);
  }
  async function T2(e3) {
    let t3 = a2.emojiVersion || await V();
    return e3.filter(({ version: e4 }) => !e4 || e4 <= t3);
  }
  async function E2(e3) {
    return $e(e3, a2.emojiVersion || await V());
  }
  async function D2(e3) {
    return E2(await T2(e3 === -1 ? a2.customEmoji : await a2.database.getEmojiByGroup(e3)));
  }
  async function ne2(e3) {
    return E2(await T2(await a2.database.getEmojiBySearchQuery(e3)));
  }
  o2(() => {
  }), o2(() => {
    function e3() {
      let { searchMode: e4, currentEmojis: t4 } = a2;
      if (e4) return [{ category: ``, emojis: t4 }];
      let n3 = /* @__PURE__ */ new Map();
      for (let e5 of t4) {
        let t5 = e5.category || ``, r3 = n3.get(t5);
        r3 || (r3 = [], n3.set(t5, r3)), r3.push(e5);
      }
      return [...n3.entries()].map(([e5, t5]) => ({ category: e5, emojis: t5 })).sort((e5, t5) => a2.customCategorySorting(e5.category, t5.category));
    }
    let t3 = e3();
    h2(t3);
  }), o2(() => {
    a2.activeSearchItemId = a2.activeSearchItem !== -1 && a2.currentEmojis[a2.activeSearchItem].id;
  }), o2(() => {
    let { rawSearchText: e3 } = a2;
    Me(() => {
      a2.searchText = (e3 || ``).trim(), a2.activeSearchItem = -1;
    });
  });
  function O2(e3) {
    if (!a2.searchMode || !a2.currentEmojis.length) return;
    let t3 = (t4) => {
      U(e3), a2.activeSearchItem = W(t4, a2.activeSearchItem, a2.currentEmojis);
    };
    switch (e3.key) {
      case `ArrowDown`:
        return t3(false);
      case `ArrowUp`:
        return t3(true);
      case `Enter`:
        if (a2.activeSearchItem === -1) a2.activeSearchItem = 0;
        else return U(e3), M2(a2.currentEmojis[a2.activeSearchItem].id);
    }
  }
  function k2(e3) {
    let { target: t3 } = e3, r3 = t3.closest(`.nav-button`);
    if (!r3) return;
    let i3 = parseInt(r3.dataset.groupId, 10);
    n2.searchElement.value = ``, a2.rawSearchText = ``, a2.searchText = ``, a2.activeSearchItem = -1, a2.currentGroupIndex = a2.groups.findIndex((e4) => e4.id === i3);
  }
  function A2(e3) {
    let { target: t3, key: n3 } = e3, r3 = (t4) => {
      t4 && (U(e3), t4.focus());
    };
    switch (n3) {
      case `ArrowLeft`:
        return r3(t3.previousElementSibling);
      case `ArrowRight`:
        return r3(t3.nextElementSibling);
      case `Home`:
        return r3(t3.parentElement.firstElementChild);
      case `End`:
        return r3(t3.parentElement.lastElementChild);
    }
  }
  async function j2(e3) {
    let t3 = await a2.database.getEmojiByUnicodeOrName(e3), n3 = [...a2.currentEmojis, ...a2.currentFavorites].find((t4) => t4.id === e3), r3 = n3.unicode && g2(n3, a2.currentSkinTone);
    return await a2.database.incrementFavoriteEmojiCount(e3), { emoji: t3, skinTone: a2.currentSkinTone, ...r3 && { unicode: r3 }, ...n3.name && { name: n3.name } };
  }
  async function M2(e3) {
    let t3 = j2(e3);
    u2(`emoji-click-sync`, t3), u2(`emoji-click`, await t3);
  }
  function N2(e3) {
    let { target: t3 } = e3;
    t3.classList.contains(`emoji`) && (U(e3), M2(t3.id.substring(4)));
  }
  function P2(e3) {
    a2.currentSkinTone = e3, a2.skinTonePickerExpanded = false, c2(`skintone-button`), u2(`skin-tone-change`, { skinTone: e3 }), a2.database.setPreferredSkinTone(e3);
  }
  function re2(e3) {
    let { target: { id: t3 } } = e3, n3 = t3 && t3.match(/^skintone-(\d)/);
    n3 && (U(e3), P2(parseInt(n3[1], 10)));
  }
  function ie2(e3) {
    a2.skinTonePickerExpanded = !a2.skinTonePickerExpanded, a2.activeSkinTone = a2.currentSkinTone, a2.skinTonePickerExpanded && (U(e3), G(() => c2(`skintone-list`)));
  }
  o2(() => {
    a2.skinTonePickerExpanded ? n2.skinToneDropdown.addEventListener(`transitionend`, () => {
      a2.skinTonePickerExpandedAfterAnimation = true;
    }, { once: true }) : a2.skinTonePickerExpandedAfterAnimation = false;
  });
  function F2(e3) {
    if (!a2.skinTonePickerExpanded) return;
    let t3 = async (t4) => {
      U(e3), a2.activeSkinTone = t4;
    };
    switch (e3.key) {
      case `ArrowUp`:
        return t3(W(true, a2.activeSkinTone, a2.skinTones));
      case `ArrowDown`:
        return t3(W(false, a2.activeSkinTone, a2.skinTones));
      case `Home`:
        return t3(0);
      case `End`:
        return t3(a2.skinTones.length - 1);
      case `Enter`:
        return U(e3), P2(a2.activeSkinTone);
      case `Escape`:
        return U(e3), a2.skinTonePickerExpanded = false, c2(`skintone-button`);
    }
  }
  function ae2(e3) {
    if (a2.skinTonePickerExpanded) switch (e3.key) {
      case ` `:
        return U(e3), P2(a2.activeSkinTone);
    }
  }
  async function oe2(e3) {
    let { relatedTarget: t3 } = e3;
    (!t3 || t3.id !== `skintone-list`) && (a2.skinTonePickerExpanded = false);
  }
  function se2(e3) {
    a2.rawSearchText = e3.target.value;
  }
  return { $set(e3) {
    Q(a2, e3);
  }, $destroy() {
    r2.abort();
  } };
}
var Ot = `https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json`, kt = `en`, At = { categoriesLabel: `Categories`, emojiUnsupportedMessage: `Your browser does not support color emoji.`, favoritesLabel: `Favorites`, loadingMessage: `Loading\u2026`, networkErrorMessage: `Could not load emoji.`, regionLabel: `Emoji picker`, searchDescription: `When search results are available, press up or down to select and enter to choose.`, searchLabel: `Search`, searchResultsLabel: `Search results`, skinToneDescription: `When expanded, press up or down to select and enter to choose.`, skinToneLabel: `Choose a skin tone (currently {skinTone})`, skinTonesLabel: `Skin tones`, skinTones: [`Default`, `Light`, `Medium-Light`, `Medium`, `Medium-Dark`, `Dark`], categories: { custom: `Custom`, "smileys-emotion": `Smileys and emoticons`, "people-body": `People and body`, "animals-nature": `Animals and nature`, "food-drink": `Food and drink`, "travel-places": `Travel and places`, activities: `Activities`, objects: `Objects`, symbols: `Symbols`, flags: `Flags` } }, jt = `:host{--emoji-size:1.375rem;--emoji-padding:0.5rem;--category-emoji-size:var(--emoji-size);--category-emoji-padding:var(--emoji-padding);--indicator-height:3px;--input-border-radius:0.5rem;--input-border-size:1px;--input-font-size:1rem;--input-line-height:1.5;--input-padding:0.25rem;--num-columns:8;--outline-size:2px;--border-size:1px;--border-radius:0;--skintone-border-radius:1rem;--category-font-size:1rem;display:flex;width:min-content;height:400px}:host,:host(.light){color-scheme:light;--background:#fff;--border-color:#e0e0e0;--indicator-color:#385ac1;--input-border-color:#999;--input-font-color:#111;--input-placeholder-color:#999;--outline-color:#999;--category-font-color:#111;--button-active-background:#e6e6e6;--button-hover-background:#d9d9d9}:host(.dark){color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}@media (prefers-color-scheme:dark){:host{color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}}:host([hidden]){display:none}button{margin:0;padding:0;border:0;background:0 0;box-shadow:none;-webkit-tap-highlight-color:transparent}button::-moz-focus-inner{border:0}input{padding:0;margin:0;line-height:1.15;font-family:inherit}input[type=search]{-webkit-appearance:none}:focus{outline:var(--outline-color) solid var(--outline-size);outline-offset:calc(-1*var(--outline-size))}:host([data-js-focus-visible]) :focus:not([data-focus-visible-added]){outline:0}:focus:not(:focus-visible){outline:0}.hide-focus{outline:0}*{box-sizing:border-box}.picker{contain:content;display:flex;flex-direction:column;background:var(--background);border:var(--border-size) solid var(--border-color);border-radius:var(--border-radius);width:100%;height:100%;overflow:hidden;--total-emoji-size:calc(var(--emoji-size) + (2 * var(--emoji-padding)));--total-category-emoji-size:calc(var(--category-emoji-size) + (2 * var(--category-emoji-padding)))}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.hidden{opacity:0;pointer-events:none}.abs-pos{position:absolute;left:0;top:0}.gone{display:none!important}.skintone-button-wrapper,.skintone-list{background:var(--background);z-index:3}.skintone-button-wrapper.expanded{z-index:1}.skintone-list{position:absolute;inset-inline-end:0;top:0;z-index:2;overflow:visible;border-bottom:var(--border-size) solid var(--border-color);border-radius:0 0 var(--skintone-border-radius) var(--skintone-border-radius);will-change:transform;transition:transform .2s ease-in-out;transform-origin:center 0}@media (prefers-reduced-motion:reduce){.skintone-list{transition-duration:.001s}}@supports not (inset-inline-end:0){.skintone-list{right:0}}.skintone-list.no-animate{transition:none}.tabpanel{overflow-y:auto;scrollbar-gutter:stable;-webkit-overflow-scrolling:touch;will-change:transform;min-height:0;flex:1;contain:content}.emoji-menu{display:grid;grid-template-columns:repeat(var(--num-columns),var(--total-emoji-size));justify-content:space-around;align-items:flex-start;width:100%}.emoji-menu.visibility-auto{content-visibility:auto;contain-intrinsic-size:calc(var(--num-columns)*var(--total-emoji-size)) calc(var(--num-rows)*var(--total-emoji-size))}.category{padding:var(--emoji-padding);font-size:var(--category-font-size);color:var(--category-font-color)}.emoji,button.emoji{font-size:var(--emoji-size);display:flex;align-items:center;justify-content:center;border-radius:100%;height:var(--total-emoji-size);width:var(--total-emoji-size);line-height:1;overflow:hidden;font-family:var(--emoji-font-family);cursor:pointer}@media (hover:hover) and (pointer:fine){.emoji:hover,button.emoji:hover{background:var(--button-hover-background)}}.emoji.active,.emoji:active,button.emoji.active,button.emoji:active{background:var(--button-active-background)}.onscreen .custom-emoji::after{content:"";width:var(--emoji-size);height:var(--emoji-size);background-repeat:no-repeat;background-position:center center;background-size:contain;background-image:var(--custom-emoji-background)}.nav,.nav-button{align-items:center}.nav{display:grid;justify-content:space-between;contain:content}.nav-button{display:flex;justify-content:center}.nav-emoji{font-size:var(--category-emoji-size);width:var(--total-category-emoji-size);height:var(--total-category-emoji-size)}.indicator-wrapper{display:flex;border-bottom:1px solid var(--border-color)}.indicator{width:calc(100%/var(--num-groups));height:var(--indicator-height);opacity:var(--indicator-opacity);background-color:var(--indicator-color);will-change:transform,opacity;transition:opacity .1s linear,transform .25s ease-in-out}@media (prefers-reduced-motion:reduce){.indicator{will-change:opacity;transition:opacity .1s linear}}.pad-top,input.search{background:var(--background);width:100%}.pad-top{height:var(--emoji-padding);z-index:3}.search-row{display:flex;align-items:center;position:relative;padding-inline-start:var(--emoji-padding);padding-bottom:var(--emoji-padding)}.search-wrapper{flex:1;min-width:0}input.search{padding:var(--input-padding);border-radius:var(--input-border-radius);border:var(--input-border-size) solid var(--input-border-color);color:var(--input-font-color);font-size:var(--input-font-size);line-height:var(--input-line-height)}input.search::placeholder{color:var(--input-placeholder-color)}.favorites{overflow-y:auto;scrollbar-gutter:stable;display:flex;flex-direction:row;border-top:var(--border-size) solid var(--border-color);contain:content}.message{padding:var(--emoji-padding)}`, Mt = [`customEmoji`, `customCategorySorting`, `database`, `dataSource`, `i18n`, `locale`, `skinToneEmoji`, `emojiVersion`], Nt = `:host{--emoji-font-family:${ze}}`, $ = class extends HTMLElement {
  constructor(e2) {
    super(), this.attachShadow({ mode: `open` });
    let t2 = document.createElement(`style`);
    t2.textContent = jt + Nt, this.shadowRoot.appendChild(t2), this._ctx = { locale: kt, dataSource: Ot, skinToneEmoji: Ie, customCategorySorting: Be, customEmoji: null, i18n: At, emojiVersion: null, ...e2 };
    for (let e3 of Mt) e3 !== `database` && Object.prototype.hasOwnProperty.call(this, e3) && (this._ctx[e3] = this[e3], delete this[e3]);
    this._dbFlush();
  }
  connectedCallback() {
    Ft(this), this._cmp ||= Dt(this.shadowRoot, this._ctx);
  }
  disconnectedCallback() {
    Ft(this), Y(() => {
      if (!this.isConnected && this._cmp) {
        this._cmp.$destroy(), this._cmp = void 0;
        let { database: e2 } = this._ctx;
        e2.close().catch((e3) => console.error(e3));
      }
    });
  }
  static get observedAttributes() {
    return [`locale`, `data-source`, `skin-tone-emoji`, `emoji-version`];
  }
  attributeChangedCallback(e2, t2, n2) {
    this._set(e2.replace(/-([a-z])/g, (e3, t3) => t3.toUpperCase()), e2 === `emoji-version` ? parseFloat(n2) : n2);
  }
  _set(e2, t2) {
    this._ctx[e2] = t2, this._cmp && this._cmp.$set({ [e2]: t2 }), [`locale`, `dataSource`].includes(e2) && this._dbFlush();
  }
  _dbCreate() {
    let { locale: e2, dataSource: t2, database: n2 } = this._ctx;
    (!n2 || n2.locale !== e2 || n2.dataSource !== t2) && this._set(`database`, new ke({ locale: e2, dataSource: t2 }));
  }
  _dbFlush() {
    Y(() => this._dbCreate());
  }
}, Pt = {};
for (let e2 of Mt) Pt[e2] = { get() {
  return e2 === `database` && this._dbCreate(), this._ctx[e2];
}, set(t2) {
  if (e2 === `database`) throw Error(`database is read-only`);
  this._set(e2, t2);
} };
Object.defineProperties($.prototype, Pt);
function Ft(e2) {
  e2 instanceof $ || Object.setPrototypeOf(e2, customElements.get(e2.tagName.toLowerCase()).prototype);
}
customElements.get(`emoji-picker`) || customElements.define(`emoji-picker`, $);
export {
  $ as Picker
};
