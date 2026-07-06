var e = class extends Error {
}, t = class extends e {
  constructor(e10) {
    super(`Invalid DateTime: ${e10.toMessage()}`);
  }
}, n = class extends e {
  constructor(e10) {
    super(`Invalid Interval: ${e10.toMessage()}`);
  }
}, r = class extends e {
  constructor(e10) {
    super(`Invalid Duration: ${e10.toMessage()}`);
  }
}, i = class extends e {
}, a = class extends e {
  constructor(e10) {
    super(`Invalid unit ${e10}`);
  }
}, o = class extends e {
}, s = class extends e {
  constructor() {
    super(`Zone is an abstract class`);
  }
}, c = `numeric`, l = `short`, u = `long`, d = { year: c, month: c, day: c }, f = { year: c, month: l, day: c }, p = { year: c, month: l, day: c, weekday: l }, m = { year: c, month: u, day: c }, ee = { year: c, month: u, day: c, weekday: u }, h = { hour: c, minute: c }, g = { hour: c, minute: c, second: c }, _ = { hour: c, minute: c, second: c, timeZoneName: l }, v = { hour: c, minute: c, second: c, timeZoneName: u }, te = { hour: c, minute: c, hourCycle: `h23` }, ne = { hour: c, minute: c, second: c, hourCycle: `h23` }, re = { hour: c, minute: c, second: c, hourCycle: `h23`, timeZoneName: l }, ie = { hour: c, minute: c, second: c, hourCycle: `h23`, timeZoneName: u }, y = { year: c, month: c, day: c, hour: c, minute: c }, ae = { year: c, month: c, day: c, hour: c, minute: c, second: c }, oe = { year: c, month: l, day: c, hour: c, minute: c }, se = { year: c, month: l, day: c, hour: c, minute: c, second: c }, ce = { year: c, month: l, day: c, weekday: l, hour: c, minute: c }, le = { year: c, month: u, day: c, hour: c, minute: c, timeZoneName: l }, ue = { year: c, month: u, day: c, hour: c, minute: c, second: c, timeZoneName: l }, de = { year: c, month: u, day: c, weekday: u, hour: c, minute: c, timeZoneName: u }, fe = { year: c, month: u, day: c, weekday: u, hour: c, minute: c, second: c, timeZoneName: u }, pe = class {
  get type() {
    throw new s();
  }
  get name() {
    throw new s();
  }
  get ianaName() {
    return this.name;
  }
  get isUniversal() {
    throw new s();
  }
  offsetName(e10, t2) {
    throw new s();
  }
  formatOffset(e10, t2) {
    throw new s();
  }
  offset(e10) {
    throw new s();
  }
  equals(e10) {
    throw new s();
  }
  get isValid() {
    throw new s();
  }
}, me = null, he = class e2 extends pe {
  static get instance() {
    return me === null && (me = new e2()), me;
  }
  get type() {
    return `system`;
  }
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  get isUniversal() {
    return false;
  }
  offsetName(e10, { format: t2, locale: n2 }) {
    return Vt(e10, t2, n2);
  }
  formatOffset(e10, t2) {
    return Gt(this.offset(e10), t2);
  }
  offset(e10) {
    return -new Date(e10).getTimezoneOffset();
  }
  equals(e10) {
    return e10.type === `system`;
  }
  get isValid() {
    return true;
  }
}, ge = /* @__PURE__ */ new Map();
function _e(e10) {
  let t2 = ge.get(e10);
  return t2 === void 0 && (t2 = new Intl.DateTimeFormat(`en-US`, { hour12: false, timeZone: e10, year: `numeric`, month: `2-digit`, day: `2-digit`, hour: `2-digit`, minute: `2-digit`, second: `2-digit`, era: `short` }), ge.set(e10, t2)), t2;
}
var ve = { year: 0, month: 1, day: 2, era: 3, hour: 4, minute: 5, second: 6 };
function ye(e10, t2) {
  let n2 = e10.format(t2).replace(/\u200E/g, ``), [, r2, i2, a2, o2, s2, c2, l2] = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n2);
  return [a2, r2, i2, o2, s2, c2, l2];
}
function be(e10, t2) {
  let n2 = e10.formatToParts(t2), r2 = [];
  for (let e11 = 0; e11 < n2.length; e11++) {
    let { type: t3, value: i2 } = n2[e11], a2 = ve[t3];
    t3 === `era` ? r2[a2] = i2 : O(a2) || (r2[a2] = parseInt(i2, 10));
  }
  return r2;
}
var xe = /* @__PURE__ */ new Map(), b = class e3 extends pe {
  static create(t2) {
    let n2 = xe.get(t2);
    return n2 === void 0 && xe.set(t2, n2 = new e3(t2)), n2;
  }
  static resetCache() {
    xe.clear(), ge.clear();
  }
  static isValidSpecifier(e10) {
    return this.isValidZone(e10);
  }
  static isValidZone(e10) {
    if (!e10) return false;
    try {
      return new Intl.DateTimeFormat(`en-US`, { timeZone: e10 }).format(), true;
    } catch {
      return false;
    }
  }
  constructor(t2) {
    super(), this.zoneName = t2, this.valid = e3.isValidZone(t2);
  }
  get type() {
    return `iana`;
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return false;
  }
  offsetName(e10, { format: t2, locale: n2 }) {
    return Vt(e10, t2, n2, this.name);
  }
  formatOffset(e10, t2) {
    return Gt(this.offset(e10), t2);
  }
  offset(e10) {
    if (!this.valid) return NaN;
    let t2 = new Date(e10);
    if (isNaN(t2)) return NaN;
    let n2 = _e(this.name), [r2, i2, a2, o2, s2, c2, l2] = n2.formatToParts ? be(n2, t2) : ye(n2, t2);
    o2 === `BC` && (r2 = -Math.abs(r2) + 1);
    let u2 = Lt({ year: r2, month: i2, day: a2, hour: s2 === 24 ? 0 : s2, minute: c2, second: l2, millisecond: 0 }), d2 = +t2, f2 = d2 % 1e3;
    return d2 -= f2 >= 0 ? f2 : 1e3 + f2, (u2 - d2) / (60 * 1e3);
  }
  equals(e10) {
    return e10.type === `iana` && e10.name === this.name;
  }
  get isValid() {
    return this.valid;
  }
}, Se = {};
function Ce(e10, t2 = {}) {
  let n2 = JSON.stringify([e10, t2]), r2 = Se[n2];
  return r2 || (r2 = new Intl.ListFormat(e10, t2), Se[n2] = r2), r2;
}
var we = /* @__PURE__ */ new Map();
function Te(e10, t2 = {}) {
  let n2 = JSON.stringify([e10, t2]), r2 = we.get(n2);
  return r2 === void 0 && (r2 = new Intl.DateTimeFormat(e10, t2), we.set(n2, r2)), r2;
}
var Ee = /* @__PURE__ */ new Map();
function De(e10, t2 = {}) {
  let n2 = JSON.stringify([e10, t2]), r2 = Ee.get(n2);
  return r2 === void 0 && (r2 = new Intl.NumberFormat(e10, t2), Ee.set(n2, r2)), r2;
}
var Oe = /* @__PURE__ */ new Map();
function ke(e10, t2 = {}) {
  let { base: n2, ...r2 } = t2, i2 = JSON.stringify([e10, r2]), a2 = Oe.get(i2);
  return a2 === void 0 && (a2 = new Intl.RelativeTimeFormat(e10, t2), Oe.set(i2, a2)), a2;
}
var Ae = null;
function je() {
  return Ae || (Ae = new Intl.DateTimeFormat().resolvedOptions().locale, Ae);
}
var Me = /* @__PURE__ */ new Map();
function Ne(e10) {
  let t2 = Me.get(e10);
  return t2 === void 0 && (t2 = new Intl.DateTimeFormat(e10).resolvedOptions(), Me.set(e10, t2)), t2;
}
var Pe = /* @__PURE__ */ new Map();
function Fe(e10) {
  let t2 = Pe.get(e10);
  if (!t2) {
    let n2 = new Intl.Locale(e10);
    t2 = `getWeekInfo` in n2 ? n2.getWeekInfo() : n2.weekInfo, `minimalDays` in t2 || (t2 = { ...Ge, ...t2 }), Pe.set(e10, t2);
  }
  return t2;
}
function Ie(e10) {
  let t2 = e10.indexOf(`-x-`);
  t2 !== -1 && (e10 = e10.substring(0, t2));
  let n2 = e10.indexOf(`-u-`);
  if (n2 === -1) return [e10];
  {
    let t3, r2;
    try {
      t3 = Te(e10).resolvedOptions(), r2 = e10;
    } catch {
      let i3 = e10.substring(0, n2);
      t3 = Te(i3).resolvedOptions(), r2 = i3;
    }
    let { numberingSystem: i2, calendar: a2 } = t3;
    return [r2, i2, a2];
  }
}
function Le(e10, t2, n2) {
  return n2 || t2 ? (e10.includes(`-u-`) || (e10 += `-u`), n2 && (e10 += `-ca-${n2}`), t2 && (e10 += `-nu-${t2}`), e10) : e10;
}
function Re(e10) {
  let t2 = [];
  for (let n2 = 1; n2 <= 12; n2++) {
    let r2 = $.utc(2009, n2, 1);
    t2.push(e10(r2));
  }
  return t2;
}
function ze(e10) {
  let t2 = [];
  for (let n2 = 1; n2 <= 7; n2++) {
    let r2 = $.utc(2016, 11, 13 + n2);
    t2.push(e10(r2));
  }
  return t2;
}
function Be(e10, t2, n2, r2) {
  let i2 = e10.listingMode();
  return i2 === `error` ? null : i2 === `en` ? n2(t2) : r2(t2);
}
function Ve(e10) {
  return e10.numberingSystem && e10.numberingSystem !== `latn` ? false : e10.numberingSystem === `latn` || !e10.locale || e10.locale.startsWith(`en`) || Ne(e10.locale).numberingSystem === `latn`;
}
var He = class {
  constructor(e10, t2, n2) {
    this.padTo = n2.padTo || 0, this.floor = n2.floor || false;
    let { padTo: r2, floor: i2, ...a2 } = n2;
    if (!t2 || Object.keys(a2).length > 0) {
      let t3 = { useGrouping: false, ...n2 };
      n2.padTo > 0 && (t3.minimumIntegerDigits = n2.padTo), this.inf = De(e10, t3);
    }
  }
  format(e10) {
    if (this.inf) {
      let t2 = this.floor ? Math.floor(e10) : e10;
      return this.inf.format(t2);
    } else return M(this.floor ? Math.floor(e10) : Pt(e10, 3), this.padTo);
  }
}, Ue = class {
  constructor(e10, t2, n2) {
    this.opts = n2, this.originalZone = void 0;
    let r2;
    if (this.opts.timeZone) this.dt = e10;
    else if (e10.zone.type === `fixed`) {
      let t3 = -1 * (e10.offset / 60), n3 = t3 >= 0 ? `Etc/GMT+${t3}` : `Etc/GMT${t3}`;
      e10.offset !== 0 && b.create(n3).valid ? (r2 = n3, this.dt = e10) : (r2 = `UTC`, this.dt = e10.offset === 0 ? e10 : e10.setZone(`UTC`).plus({ minutes: e10.offset }), this.originalZone = e10.zone);
    } else e10.zone.type === `system` ? this.dt = e10 : e10.zone.type === `iana` ? (this.dt = e10, r2 = e10.zone.name) : (r2 = `UTC`, this.dt = e10.setZone(`UTC`).plus({ minutes: e10.offset }), this.originalZone = e10.zone);
    let i2 = { ...this.opts };
    i2.timeZone = i2.timeZone || r2, this.dtf = Te(t2, i2);
  }
  format() {
    return this.originalZone ? this.formatToParts().map(({ value: e10 }) => e10).join(``) : this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    let e10 = this.dtf.formatToParts(this.dt.toJSDate());
    return this.originalZone ? e10.map((e11) => {
      if (e11.type === `timeZoneName`) {
        let t2 = this.originalZone.offsetName(this.dt.ts, { locale: this.dt.locale, format: this.opts.timeZoneName });
        return { ...e11, value: t2 };
      } else return e11;
    }) : e10;
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}, We = class {
  constructor(e10, t2, n2) {
    this.opts = { style: `long`, ...n2 }, !t2 && Et() && (this.rtf = ke(e10, n2));
  }
  format(e10, t2) {
    return this.rtf ? this.rtf.format(e10, t2) : dn(t2, e10, this.opts.numeric, this.opts.style !== `long`);
  }
  formatToParts(e10, t2) {
    return this.rtf ? this.rtf.formatToParts(e10, t2) : [];
  }
}, Ge = { firstDay: 1, minimalDays: 4, weekend: [6, 7] }, x = class e4 {
  static fromOpts(t2) {
    return e4.create(t2.locale, t2.numberingSystem, t2.outputCalendar, t2.weekSettings, t2.defaultToEN);
  }
  static create(t2, n2, r2, i2, a2 = false) {
    let o2 = t2 || T.defaultLocale, s2 = o2 || (a2 ? `en-US` : je()), c2 = n2 || T.defaultNumberingSystem, l2 = r2 || T.defaultOutputCalendar, u2 = jt(i2) || T.defaultWeekSettings;
    return new e4(s2, c2, l2, u2, o2);
  }
  static resetCache() {
    Ae = null, we.clear(), Ee.clear(), Oe.clear(), Me.clear(), Pe.clear();
  }
  static fromObject({ locale: t2, numberingSystem: n2, outputCalendar: r2, weekSettings: i2 } = {}) {
    return e4.create(t2, n2, r2, i2);
  }
  constructor(e10, t2, n2, r2, i2) {
    let [a2, o2, s2] = Ie(e10);
    this.locale = a2, this.numberingSystem = t2 || o2 || null, this.outputCalendar = n2 || s2 || null, this.weekSettings = r2, this.intl = Le(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = i2, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached ??= Ve(this), this.fastNumbersCached;
  }
  listingMode() {
    let e10 = this.isEnglish(), t2 = (this.numberingSystem === null || this.numberingSystem === `latn`) && (this.outputCalendar === null || this.outputCalendar === `gregory`);
    return e10 && t2 ? `en` : `intl`;
  }
  clone(t2) {
    return !t2 || Object.getOwnPropertyNames(t2).length === 0 ? this : e4.create(t2.locale || this.specifiedLocale, t2.numberingSystem || this.numberingSystem, t2.outputCalendar || this.outputCalendar, jt(t2.weekSettings) || this.weekSettings, t2.defaultToEN || false);
  }
  redefaultToEN(e10 = {}) {
    return this.clone({ ...e10, defaultToEN: true });
  }
  redefaultToSystem(e10 = {}) {
    return this.clone({ ...e10, defaultToEN: false });
  }
  months(e10, t2 = false) {
    return Be(this, e10, Xt, () => {
      let n2 = this.intl === `ja` || this.intl.startsWith(`ja-`);
      t2 &= !n2;
      let r2 = t2 ? { month: e10, day: `numeric` } : { month: e10 }, i2 = t2 ? `format` : `standalone`;
      if (!this.monthsCache[i2][e10]) {
        let t3 = n2 ? (e11) => this.dtFormatter(e11, r2).format() : (e11) => this.extract(e11, r2, `month`);
        this.monthsCache[i2][e10] = Re(t3);
      }
      return this.monthsCache[i2][e10];
    });
  }
  weekdays(e10, t2 = false) {
    return Be(this, e10, en, () => {
      let n2 = t2 ? { weekday: e10, year: `numeric`, month: `long`, day: `numeric` } : { weekday: e10 }, r2 = t2 ? `format` : `standalone`;
      return this.weekdaysCache[r2][e10] || (this.weekdaysCache[r2][e10] = ze((e11) => this.extract(e11, n2, `weekday`))), this.weekdaysCache[r2][e10];
    });
  }
  meridiems() {
    return Be(this, void 0, () => tn, () => {
      if (!this.meridiemCache) {
        let e10 = { hour: `numeric`, hourCycle: `h12` };
        this.meridiemCache = [$.utc(2016, 11, 13, 9), $.utc(2016, 11, 13, 19)].map((t2) => this.extract(t2, e10, `dayperiod`));
      }
      return this.meridiemCache;
    });
  }
  eras(e10) {
    return Be(this, e10, on, () => {
      let t2 = { era: e10 };
      return this.eraCache[e10] || (this.eraCache[e10] = [$.utc(-40, 1, 1), $.utc(2017, 1, 1)].map((e11) => this.extract(e11, t2, `era`))), this.eraCache[e10];
    });
  }
  extract(e10, t2, n2) {
    let r2 = this.dtFormatter(e10, t2).formatToParts().find((e11) => e11.type.toLowerCase() === n2);
    return r2 ? r2.value : null;
  }
  numberFormatter(e10 = {}) {
    return new He(this.intl, e10.forceSimple || this.fastNumbers, e10);
  }
  dtFormatter(e10, t2 = {}) {
    return new Ue(e10, this.intl, t2);
  }
  relFormatter(e10 = {}) {
    return new We(this.intl, this.isEnglish(), e10);
  }
  listFormatter(e10 = {}) {
    return Ce(this.intl, e10);
  }
  isEnglish() {
    return this.locale === `en` || this.locale.toLowerCase() === `en-us` || Ne(this.intl).locale.startsWith(`en-us`);
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : Dt() ? Fe(this.locale) : Ge;
  }
  getStartOfWeek() {
    return this.getWeekSettings().firstDay;
  }
  getMinDaysInFirstWeek() {
    return this.getWeekSettings().minimalDays;
  }
  getWeekendDays() {
    return this.getWeekSettings().weekend;
  }
  equals(e10) {
    return this.locale === e10.locale && this.numberingSystem === e10.numberingSystem && this.outputCalendar === e10.outputCalendar;
  }
  toString() {
    return `Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`;
  }
}, Ke = null, S = class e5 extends pe {
  static get utcInstance() {
    return Ke === null && (Ke = new e5(0)), Ke;
  }
  static instance(t2) {
    return t2 === 0 ? e5.utcInstance : new e5(t2);
  }
  static parseSpecifier(t2) {
    if (t2) {
      let n2 = t2.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (n2) return new e5(Ht(n2[1], n2[2]));
    }
    return null;
  }
  constructor(e10) {
    super(), this.fixed = e10;
  }
  get type() {
    return `fixed`;
  }
  get name() {
    return this.fixed === 0 ? `UTC` : `UTC${Gt(this.fixed, `narrow`)}`;
  }
  get ianaName() {
    return this.fixed === 0 ? `Etc/UTC` : `Etc/GMT${Gt(-this.fixed, `narrow`)}`;
  }
  offsetName() {
    return this.name;
  }
  formatOffset(e10, t2) {
    return Gt(this.fixed, t2);
  }
  get isUniversal() {
    return true;
  }
  offset() {
    return this.fixed;
  }
  equals(e10) {
    return e10.type === `fixed` && e10.fixed === this.fixed;
  }
  get isValid() {
    return true;
  }
}, qe = class extends pe {
  constructor(e10) {
    super(), this.zoneName = e10;
  }
  get type() {
    return `invalid`;
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return false;
  }
  offsetName() {
    return null;
  }
  formatOffset() {
    return ``;
  }
  offset() {
    return NaN;
  }
  equals() {
    return false;
  }
  get isValid() {
    return false;
  }
};
function C(e10, t2) {
  if (O(e10) || e10 === null) return t2;
  if (e10 instanceof pe) return e10;
  if (wt(e10)) {
    let n2 = e10.toLowerCase();
    return n2 === "default" ? t2 : n2 === `local` || n2 === `system` ? he.instance : n2 === `utc` || n2 === `gmt` ? S.utcInstance : S.parseSpecifier(n2) || b.create(e10);
  } else if (k(e10)) return S.instance(e10);
  else if (typeof e10 == `object` && `offset` in e10 && typeof e10.offset == `function`) return e10;
  else return new qe(e10);
}
var Je = { arab: `[\u0660-\u0669]`, arabext: `[\u06F0-\u06F9]`, bali: `[\u1B50-\u1B59]`, beng: `[\u09E6-\u09EF]`, deva: `[\u0966-\u096F]`, fullwide: `[\uFF10-\uFF19]`, gujr: `[\u0AE6-\u0AEF]`, hanidec: `[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]`, khmr: `[\u17E0-\u17E9]`, knda: `[\u0CE6-\u0CEF]`, laoo: `[\u0ED0-\u0ED9]`, limb: `[\u1946-\u194F]`, mlym: `[\u0D66-\u0D6F]`, mong: `[\u1810-\u1819]`, mymr: `[\u1040-\u1049]`, orya: `[\u0B66-\u0B6F]`, tamldec: `[\u0BE6-\u0BEF]`, telu: `[\u0C66-\u0C6F]`, thai: `[\u0E50-\u0E59]`, tibt: `[\u0F20-\u0F29]`, latn: `\\d` }, Ye = { arab: [1632, 1641], arabext: [1776, 1785], bali: [6992, 7001], beng: [2534, 2543], deva: [2406, 2415], fullwide: [65296, 65303], gujr: [2790, 2799], khmr: [6112, 6121], knda: [3302, 3311], laoo: [3792, 3801], limb: [6470, 6479], mlym: [3430, 3439], mong: [6160, 6169], mymr: [4160, 4169], orya: [2918, 2927], tamldec: [3046, 3055], telu: [3174, 3183], thai: [3664, 3673], tibt: [3872, 3881] }, Xe = Je.hanidec.replace(/[\[|\]]/g, ``).split(``);
function Ze(e10) {
  let t2 = parseInt(e10, 10);
  if (isNaN(t2)) {
    t2 = ``;
    for (let n2 = 0; n2 < e10.length; n2++) {
      let r2 = e10.charCodeAt(n2);
      if (e10[n2].search(Je.hanidec) !== -1) t2 += Xe.indexOf(e10[n2]);
      else for (let e11 in Ye) {
        let [n3, i2] = Ye[e11];
        r2 >= n3 && r2 <= i2 && (t2 += r2 - n3);
      }
    }
    return parseInt(t2, 10);
  } else return t2;
}
var Qe = /* @__PURE__ */ new Map();
function $e() {
  Qe.clear();
}
function w({ numberingSystem: e10 }, t2 = ``) {
  let n2 = e10 || `latn`, r2 = Qe.get(n2);
  r2 === void 0 && (r2 = /* @__PURE__ */ new Map(), Qe.set(n2, r2));
  let i2 = r2.get(t2);
  return i2 === void 0 && (i2 = RegExp(`${Je[n2]}${t2}`), r2.set(t2, i2)), i2;
}
var et = () => Date.now(), tt = `system`, nt = null, rt = null, it = null, at = 60, ot, st = null, T = class {
  static get now() {
    return et;
  }
  static set now(e10) {
    et = e10;
  }
  static set defaultZone(e10) {
    tt = e10;
  }
  static get defaultZone() {
    return C(tt, he.instance);
  }
  static get defaultLocale() {
    return nt;
  }
  static set defaultLocale(e10) {
    nt = e10;
  }
  static get defaultNumberingSystem() {
    return rt;
  }
  static set defaultNumberingSystem(e10) {
    rt = e10;
  }
  static get defaultOutputCalendar() {
    return it;
  }
  static set defaultOutputCalendar(e10) {
    it = e10;
  }
  static get defaultWeekSettings() {
    return st;
  }
  static set defaultWeekSettings(e10) {
    st = jt(e10);
  }
  static get twoDigitCutoffYear() {
    return at;
  }
  static set twoDigitCutoffYear(e10) {
    at = e10 % 100;
  }
  static get throwOnInvalid() {
    return ot;
  }
  static set throwOnInvalid(e10) {
    ot = e10;
  }
  static resetCaches() {
    x.resetCache(), b.resetCache(), $.resetCache(), $e();
  }
}, E = class {
  constructor(e10, t2) {
    this.reason = e10, this.explanation = t2;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}, ct = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], lt = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function D(e10, t2) {
  return new E(`unit out of range`, `you specified ${t2} (of type ${typeof t2}) as a ${e10}, which is invalid`);
}
function ut(e10, t2, n2) {
  let r2 = new Date(Date.UTC(e10, t2 - 1, n2));
  e10 < 100 && e10 >= 0 && r2.setUTCFullYear(r2.getUTCFullYear() - 1900);
  let i2 = r2.getUTCDay();
  return i2 === 0 ? 7 : i2;
}
function dt(e10, t2, n2) {
  return n2 + (Ft(e10) ? lt : ct)[t2 - 1];
}
function ft(e10, t2) {
  let n2 = Ft(e10) ? lt : ct, r2 = n2.findIndex((e11) => e11 < t2), i2 = t2 - n2[r2];
  return { month: r2 + 1, day: i2 };
}
function pt(e10, t2) {
  return (e10 - t2 + 7) % 7 + 1;
}
function mt(e10, t2 = 4, n2 = 1) {
  let { year: r2, month: i2, day: a2 } = e10, o2 = dt(r2, i2, a2), s2 = pt(ut(r2, i2, a2), n2), c2 = Math.floor((o2 - s2 + 14 - t2) / 7), l2;
  return c2 < 1 ? (l2 = r2 - 1, c2 = zt(l2, t2, n2)) : c2 > zt(r2, t2, n2) ? (l2 = r2 + 1, c2 = 1) : l2 = r2, { weekYear: l2, weekNumber: c2, weekday: s2, ...Kt(e10) };
}
function ht(e10, t2 = 4, n2 = 1) {
  let { weekYear: r2, weekNumber: i2, weekday: a2 } = e10, o2 = pt(ut(r2, 1, t2), n2), s2 = F(r2), c2 = i2 * 7 + a2 - o2 - 7 + t2, l2;
  c2 < 1 ? (l2 = r2 - 1, c2 += F(l2)) : c2 > s2 ? (l2 = r2 + 1, c2 -= F(r2)) : l2 = r2;
  let { month: u2, day: d2 } = ft(l2, c2);
  return { year: l2, month: u2, day: d2, ...Kt(e10) };
}
function gt(e10) {
  let { year: t2, month: n2, day: r2 } = e10;
  return { year: t2, ordinal: dt(t2, n2, r2), ...Kt(e10) };
}
function _t(e10) {
  let { year: t2, ordinal: n2 } = e10, { month: r2, day: i2 } = ft(t2, n2);
  return { year: t2, month: r2, day: i2, ...Kt(e10) };
}
function vt(e10, t2) {
  if (!O(e10.localWeekday) || !O(e10.localWeekNumber) || !O(e10.localWeekYear)) {
    if (!O(e10.weekday) || !O(e10.weekNumber) || !O(e10.weekYear)) throw new i(`Cannot mix locale-based week fields with ISO-based week fields`);
    return O(e10.localWeekday) || (e10.weekday = e10.localWeekday), O(e10.localWeekNumber) || (e10.weekNumber = e10.localWeekNumber), O(e10.localWeekYear) || (e10.weekYear = e10.localWeekYear), delete e10.localWeekday, delete e10.localWeekNumber, delete e10.localWeekYear, { minDaysInFirstWeek: t2.getMinDaysInFirstWeek(), startOfWeek: t2.getStartOfWeek() };
  } else return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function yt(e10, t2 = 4, n2 = 1) {
  let r2 = Ct(e10.weekYear), i2 = j(e10.weekNumber, 1, zt(e10.weekYear, t2, n2)), a2 = j(e10.weekday, 1, 7);
  return r2 ? i2 ? a2 ? false : D(`weekday`, e10.weekday) : D(`week`, e10.weekNumber) : D(`weekYear`, e10.weekYear);
}
function bt(e10) {
  let t2 = Ct(e10.year), n2 = j(e10.ordinal, 1, F(e10.year));
  return t2 ? n2 ? false : D(`ordinal`, e10.ordinal) : D(`year`, e10.year);
}
function xt(e10) {
  let t2 = Ct(e10.year), n2 = j(e10.month, 1, 12), r2 = j(e10.day, 1, It(e10.year, e10.month));
  return t2 ? n2 ? r2 ? false : D(`day`, e10.day) : D(`month`, e10.month) : D(`year`, e10.year);
}
function St(e10) {
  let { hour: t2, minute: n2, second: r2, millisecond: i2 } = e10, a2 = j(t2, 0, 23) || t2 === 24 && n2 === 0 && r2 === 0 && i2 === 0, o2 = j(n2, 0, 59), s2 = j(r2, 0, 59), c2 = j(i2, 0, 999);
  return a2 ? o2 ? s2 ? c2 ? false : D(`millisecond`, i2) : D(`second`, r2) : D(`minute`, n2) : D(`hour`, t2);
}
function O(e10) {
  return e10 === void 0;
}
function k(e10) {
  return typeof e10 == `number`;
}
function Ct(e10) {
  return typeof e10 == `number` && e10 % 1 == 0;
}
function wt(e10) {
  return typeof e10 == `string`;
}
function Tt(e10) {
  return Object.prototype.toString.call(e10) === `[object Date]`;
}
function Et() {
  try {
    return typeof Intl < `u` && !!Intl.RelativeTimeFormat;
  } catch {
    return false;
  }
}
function Dt() {
  try {
    return typeof Intl < `u` && !!Intl.Locale && (`weekInfo` in Intl.Locale.prototype || `getWeekInfo` in Intl.Locale.prototype);
  } catch {
    return false;
  }
}
function Ot(e10) {
  return Array.isArray(e10) ? e10 : [e10];
}
function kt(e10, t2, n2) {
  if (e10.length !== 0) return e10.reduce((e11, r2) => {
    let i2 = [t2(r2), r2];
    return e11 && n2(e11[0], i2[0]) === e11[0] ? e11 : i2;
  }, null)[1];
}
function At(e10, t2) {
  return t2.reduce((t3, n2) => (t3[n2] = e10[n2], t3), {});
}
function A(e10, t2) {
  return Object.prototype.hasOwnProperty.call(e10, t2);
}
function jt(e10) {
  if (e10 == null) return null;
  if (typeof e10 != `object`) throw new o(`Week settings must be an object`);
  if (!j(e10.firstDay, 1, 7) || !j(e10.minimalDays, 1, 7) || !Array.isArray(e10.weekend) || e10.weekend.some((e11) => !j(e11, 1, 7))) throw new o(`Invalid week settings`);
  return { firstDay: e10.firstDay, minimalDays: e10.minimalDays, weekend: Array.from(e10.weekend) };
}
function j(e10, t2, n2) {
  return Ct(e10) && e10 >= t2 && e10 <= n2;
}
function Mt(e10, t2) {
  return e10 - t2 * Math.floor(e10 / t2);
}
function M(e10, t2 = 2) {
  let n2 = e10 < 0, r2;
  return r2 = n2 ? `-` + (`` + -e10).padStart(t2, `0`) : (`` + e10).padStart(t2, `0`), r2;
}
function N(e10) {
  if (!(O(e10) || e10 === null || e10 === ``)) return parseInt(e10, 10);
}
function P(e10) {
  if (!(O(e10) || e10 === null || e10 === ``)) return parseFloat(e10);
}
function Nt(e10) {
  if (!(O(e10) || e10 === null || e10 === ``)) {
    let t2 = parseFloat(`0.` + e10) * 1e3;
    return Math.floor(t2);
  }
}
function Pt(e10, t2, n2 = `round`) {
  let r2 = 10 ** t2;
  switch (n2) {
    case `expand`:
      return e10 > 0 ? Math.ceil(e10 * r2) / r2 : Math.floor(e10 * r2) / r2;
    case `trunc`:
      return Math.trunc(e10 * r2) / r2;
    case `round`:
      return Math.round(e10 * r2) / r2;
    case `floor`:
      return Math.floor(e10 * r2) / r2;
    case `ceil`:
      return Math.ceil(e10 * r2) / r2;
    default:
      throw RangeError(`Value rounding ${n2} is out of range`);
  }
}
function Ft(e10) {
  return e10 % 4 == 0 && (e10 % 100 != 0 || e10 % 400 == 0);
}
function F(e10) {
  return Ft(e10) ? 366 : 365;
}
function It(e10, t2) {
  let n2 = Mt(t2 - 1, 12) + 1, r2 = e10 + (t2 - n2) / 12;
  return n2 === 2 ? Ft(r2) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n2 - 1];
}
function Lt(e10) {
  let t2 = Date.UTC(e10.year, e10.month - 1, e10.day, e10.hour, e10.minute, e10.second, e10.millisecond);
  return e10.year < 100 && e10.year >= 0 && (t2 = new Date(t2), t2.setUTCFullYear(e10.year, e10.month - 1, e10.day)), +t2;
}
function Rt(e10, t2, n2) {
  return -pt(ut(e10, 1, t2), n2) + t2 - 1;
}
function zt(e10, t2 = 4, n2 = 1) {
  let r2 = Rt(e10, t2, n2), i2 = Rt(e10 + 1, t2, n2);
  return (F(e10) - r2 + i2) / 7;
}
function Bt(e10) {
  return e10 > 99 ? e10 : e10 > T.twoDigitCutoffYear ? 1900 + e10 : 2e3 + e10;
}
function Vt(e10, t2, n2, r2 = null) {
  let i2 = new Date(e10), a2 = { hourCycle: `h23`, year: `numeric`, month: `2-digit`, day: `2-digit`, hour: `2-digit`, minute: `2-digit` };
  r2 && (a2.timeZone = r2);
  let o2 = { timeZoneName: t2, ...a2 }, s2 = new Intl.DateTimeFormat(n2, o2).formatToParts(i2).find((e11) => e11.type.toLowerCase() === `timezonename`);
  return s2 ? s2.value : null;
}
function Ht(e10, t2) {
  let n2 = parseInt(e10, 10);
  Number.isNaN(n2) && (n2 = 0);
  let r2 = parseInt(t2, 10) || 0, i2 = n2 < 0 || Object.is(n2, -0) ? -r2 : r2;
  return n2 * 60 + i2;
}
function Ut(e10) {
  let t2 = Number(e10);
  if (typeof e10 == `boolean` || e10 === `` || !Number.isFinite(t2)) throw new o(`Invalid unit value ${e10}`);
  return t2;
}
function Wt(e10, t2) {
  let n2 = {};
  for (let r2 in e10) if (A(e10, r2)) {
    let i2 = e10[r2];
    if (i2 == null) continue;
    n2[t2(r2)] = Ut(i2);
  }
  return n2;
}
function Gt(e10, t2) {
  let n2 = Math.trunc(Math.abs(e10 / 60)), r2 = Math.trunc(Math.abs(e10 % 60)), i2 = e10 >= 0 ? `+` : `-`;
  switch (t2) {
    case `short`:
      return `${i2}${M(n2, 2)}:${M(r2, 2)}`;
    case `narrow`:
      return `${i2}${n2}${r2 > 0 ? `:${r2}` : ``}`;
    case `techie`:
      return `${i2}${M(n2, 2)}${M(r2, 2)}`;
    default:
      throw RangeError(`Value format ${t2} is out of range for property format`);
  }
}
function Kt(e10) {
  return At(e10, [`hour`, `minute`, `second`, `millisecond`]);
}
var qt = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`], Jt = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`], Yt = [`J`, `F`, `M`, `A`, `M`, `J`, `J`, `A`, `S`, `O`, `N`, `D`];
function Xt(e10) {
  switch (e10) {
    case `narrow`:
      return [...Yt];
    case `short`:
      return [...Jt];
    case `long`:
      return [...qt];
    case `numeric`:
      return [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`];
    case `2-digit`:
      return [`01`, `02`, `03`, `04`, `05`, `06`, `07`, `08`, `09`, `10`, `11`, `12`];
    default:
      return null;
  }
}
var Zt = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`], Qt = [`Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun`], $t = [`M`, `T`, `W`, `T`, `F`, `S`, `S`];
function en(e10) {
  switch (e10) {
    case `narrow`:
      return [...$t];
    case `short`:
      return [...Qt];
    case `long`:
      return [...Zt];
    case `numeric`:
      return [`1`, `2`, `3`, `4`, `5`, `6`, `7`];
    default:
      return null;
  }
}
var tn = [`AM`, `PM`], nn = [`Before Christ`, `Anno Domini`], rn = [`BC`, `AD`], an = [`B`, `A`];
function on(e10) {
  switch (e10) {
    case `narrow`:
      return [...an];
    case `short`:
      return [...rn];
    case `long`:
      return [...nn];
    default:
      return null;
  }
}
function sn(e10) {
  return tn[e10.hour < 12 ? 0 : 1];
}
function cn(e10, t2) {
  return en(t2)[e10.weekday - 1];
}
function ln(e10, t2) {
  return Xt(t2)[e10.month - 1];
}
function un(e10, t2) {
  return on(t2)[e10.year < 0 ? 0 : 1];
}
function dn(e10, t2, n2 = `always`, r2 = false) {
  let i2 = { years: [`year`, `yr.`], quarters: [`quarter`, `qtr.`], months: [`month`, `mo.`], weeks: [`week`, `wk.`], days: [`day`, `day`, `days`], hours: [`hour`, `hr.`], minutes: [`minute`, `min.`], seconds: [`second`, `sec.`] }, a2 = [`hours`, `minutes`, `seconds`].indexOf(e10) === -1;
  if (n2 === `auto` && a2) {
    let n3 = e10 === `days`;
    switch (t2) {
      case 1:
        return n3 ? `tomorrow` : `next ${i2[e10][0]}`;
      case -1:
        return n3 ? `yesterday` : `last ${i2[e10][0]}`;
      case 0:
        return n3 ? `today` : `this ${i2[e10][0]}`;
    }
  }
  let o2 = Object.is(t2, -0) || t2 < 0, s2 = Math.abs(t2), c2 = s2 === 1, l2 = i2[e10], u2 = r2 ? c2 ? l2[1] : l2[2] || l2[1] : c2 ? i2[e10][0] : e10;
  return o2 ? `${s2} ${u2} ago` : `in ${s2} ${u2}`;
}
function fn(e10, t2) {
  let n2 = ``;
  for (let r2 of e10) r2.literal ? n2 += r2.val : n2 += t2(r2.val);
  return n2;
}
var pn = { D: d, DD: f, DDD: m, DDDD: ee, t: h, tt: g, ttt: _, tttt: v, T: te, TT: ne, TTT: re, TTTT: ie, f: y, ff: oe, fff: le, ffff: de, F: ae, FF: se, FFF: ue, FFFF: fe }, I = class e6 {
  static create(t2, n2 = {}) {
    return new e6(t2, n2);
  }
  static parseFormat(e10) {
    let t2 = null, n2 = ``, r2 = false, i2 = [];
    for (let a2 = 0; a2 < e10.length; a2++) {
      let o2 = e10.charAt(a2);
      o2 === `'` ? ((n2.length > 0 || r2) && i2.push({ literal: r2 || /^\s+$/.test(n2), val: n2 === `` ? `'` : n2 }), t2 = null, n2 = ``, r2 = !r2) : r2 || o2 === t2 ? n2 += o2 : (n2.length > 0 && i2.push({ literal: /^\s+$/.test(n2), val: n2 }), n2 = o2, t2 = o2);
    }
    return n2.length > 0 && i2.push({ literal: r2 || /^\s+$/.test(n2), val: n2 }), i2;
  }
  static macroTokenToFormatOpts(e10) {
    return pn[e10];
  }
  constructor(e10, t2) {
    this.opts = t2, this.loc = e10, this.systemLoc = null;
  }
  formatWithSystemDefault(e10, t2) {
    return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e10, { ...this.opts, ...t2 }).format();
  }
  dtFormatter(e10, t2 = {}) {
    return this.loc.dtFormatter(e10, { ...this.opts, ...t2 });
  }
  formatDateTime(e10, t2) {
    return this.dtFormatter(e10, t2).format();
  }
  formatDateTimeParts(e10, t2) {
    return this.dtFormatter(e10, t2).formatToParts();
  }
  formatInterval(e10, t2) {
    return this.dtFormatter(e10.start, t2).dtf.formatRange(e10.start.toJSDate(), e10.end.toJSDate());
  }
  resolvedOptions(e10, t2) {
    return this.dtFormatter(e10, t2).resolvedOptions();
  }
  num(e10, t2 = 0, n2 = void 0) {
    if (this.opts.forceSimple) return M(e10, t2);
    let r2 = { ...this.opts };
    return t2 > 0 && (r2.padTo = t2), n2 && (r2.signDisplay = n2), this.loc.numberFormatter(r2).format(e10);
  }
  formatDateTimeFromString(t2, n2) {
    let r2 = this.loc.listingMode() === `en`, i2 = this.loc.outputCalendar && this.loc.outputCalendar !== `gregory`, a2 = (e10, n3) => this.loc.extract(t2, e10, n3), o2 = (e10) => t2.isOffsetFixed && t2.offset === 0 && e10.allowZ ? `Z` : t2.isValid ? t2.zone.formatOffset(t2.ts, e10.format) : ``, s2 = () => r2 ? sn(t2) : a2({ hour: `numeric`, hourCycle: `h12` }, `dayperiod`), c2 = (e10, n3) => r2 ? ln(t2, e10) : a2(n3 ? { month: e10 } : { month: e10, day: `numeric` }, `month`), l2 = (e10, n3) => r2 ? cn(t2, e10) : a2(n3 ? { weekday: e10 } : { weekday: e10, month: `long`, day: `numeric` }, `weekday`), u2 = (n3) => {
      let r3 = e6.macroTokenToFormatOpts(n3);
      return r3 ? this.formatWithSystemDefault(t2, r3) : n3;
    }, d2 = (e10) => r2 ? un(t2, e10) : a2({ era: e10 }, `era`);
    return fn(e6.parseFormat(n2), (e10) => {
      switch (e10) {
        case `S`:
          return this.num(t2.millisecond);
        case `u`:
        case `SSS`:
          return this.num(t2.millisecond, 3);
        case `s`:
          return this.num(t2.second);
        case `ss`:
          return this.num(t2.second, 2);
        case `uu`:
          return this.num(Math.floor(t2.millisecond / 10), 2);
        case `uuu`:
          return this.num(Math.floor(t2.millisecond / 100));
        case `m`:
          return this.num(t2.minute);
        case `mm`:
          return this.num(t2.minute, 2);
        case `h`:
          return this.num(t2.hour % 12 == 0 ? 12 : t2.hour % 12);
        case `hh`:
          return this.num(t2.hour % 12 == 0 ? 12 : t2.hour % 12, 2);
        case `H`:
          return this.num(t2.hour);
        case `HH`:
          return this.num(t2.hour, 2);
        case `Z`:
          return o2({ format: `narrow`, allowZ: this.opts.allowZ });
        case `ZZ`:
          return o2({ format: `short`, allowZ: this.opts.allowZ });
        case `ZZZ`:
          return o2({ format: `techie`, allowZ: this.opts.allowZ });
        case `ZZZZ`:
          return t2.zone.offsetName(t2.ts, { format: `short`, locale: this.loc.locale });
        case `ZZZZZ`:
          return t2.zone.offsetName(t2.ts, { format: `long`, locale: this.loc.locale });
        case `z`:
          return t2.zoneName;
        case `a`:
          return s2();
        case `d`:
          return i2 ? a2({ day: `numeric` }, `day`) : this.num(t2.day);
        case `dd`:
          return i2 ? a2({ day: `2-digit` }, `day`) : this.num(t2.day, 2);
        case `c`:
          return this.num(t2.weekday);
        case `ccc`:
          return l2(`short`, true);
        case `cccc`:
          return l2(`long`, true);
        case `ccccc`:
          return l2(`narrow`, true);
        case `E`:
          return this.num(t2.weekday);
        case `EEE`:
          return l2(`short`, false);
        case `EEEE`:
          return l2(`long`, false);
        case `EEEEE`:
          return l2(`narrow`, false);
        case `L`:
          return i2 ? a2({ month: `numeric`, day: `numeric` }, `month`) : this.num(t2.month);
        case `LL`:
          return i2 ? a2({ month: `2-digit`, day: `numeric` }, `month`) : this.num(t2.month, 2);
        case `LLL`:
          return c2(`short`, true);
        case `LLLL`:
          return c2(`long`, true);
        case `LLLLL`:
          return c2(`narrow`, true);
        case `M`:
          return i2 ? a2({ month: `numeric` }, `month`) : this.num(t2.month);
        case `MM`:
          return i2 ? a2({ month: `2-digit` }, `month`) : this.num(t2.month, 2);
        case `MMM`:
          return c2(`short`, false);
        case `MMMM`:
          return c2(`long`, false);
        case `MMMMM`:
          return c2(`narrow`, false);
        case `y`:
          return i2 ? a2({ year: `numeric` }, `year`) : this.num(t2.year);
        case `yy`:
          return i2 ? a2({ year: `2-digit` }, `year`) : this.num(t2.year.toString().slice(-2), 2);
        case `yyyy`:
          return i2 ? a2({ year: `numeric` }, `year`) : this.num(t2.year, 4);
        case `yyyyyy`:
          return i2 ? a2({ year: `numeric` }, `year`) : this.num(t2.year, 6);
        case `G`:
          return d2(`short`);
        case `GG`:
          return d2(`long`);
        case `GGGGG`:
          return d2(`narrow`);
        case `kk`:
          return this.num(t2.weekYear.toString().slice(-2), 2);
        case `kkkk`:
          return this.num(t2.weekYear, 4);
        case `W`:
          return this.num(t2.weekNumber);
        case `WW`:
          return this.num(t2.weekNumber, 2);
        case `n`:
          return this.num(t2.localWeekNumber);
        case `nn`:
          return this.num(t2.localWeekNumber, 2);
        case `ii`:
          return this.num(t2.localWeekYear.toString().slice(-2), 2);
        case `iiii`:
          return this.num(t2.localWeekYear, 4);
        case `o`:
          return this.num(t2.ordinal);
        case `ooo`:
          return this.num(t2.ordinal, 3);
        case `q`:
          return this.num(t2.quarter);
        case `qq`:
          return this.num(t2.quarter, 2);
        case `X`:
          return this.num(Math.floor(t2.ts / 1e3));
        case `x`:
          return this.num(t2.ts);
        default:
          return u2(e10);
      }
    });
  }
  formatDurationFromString(t2, n2) {
    let r2 = this.opts.signMode === `negativeLargestOnly` ? -1 : 1, i2 = (e10) => {
      switch (e10[0]) {
        case `S`:
          return `milliseconds`;
        case `s`:
          return `seconds`;
        case `m`:
          return `minutes`;
        case `h`:
          return `hours`;
        case `d`:
          return `days`;
        case `w`:
          return `weeks`;
        case `M`:
          return `months`;
        case `y`:
          return `years`;
        default:
          return null;
      }
    }, a2 = (e10, t3) => (n3) => {
      let a3 = i2(n3);
      if (a3) {
        let i3 = t3.isNegativeDuration && a3 !== t3.largestUnit ? r2 : 1, o3;
        return o3 = this.opts.signMode === `negativeLargestOnly` && a3 !== t3.largestUnit ? `never` : this.opts.signMode === `all` ? `always` : `auto`, this.num(e10.get(a3) * i3, n3.length, o3);
      } else return n3;
    }, o2 = e6.parseFormat(n2), s2 = o2.reduce((e10, { literal: t3, val: n3 }) => t3 ? e10 : e10.concat(n3), []), c2 = t2.shiftTo(...s2.map(i2).filter((e10) => e10));
    return fn(o2, a2(c2, { isNegativeDuration: c2 < 0, largestUnit: Object.keys(c2.values)[0] }));
  }
}, mn = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function L(...e10) {
  let t2 = e10.reduce((e11, t3) => e11 + t3.source, ``);
  return RegExp(`^${t2}$`);
}
function R(...e10) {
  return (t2) => e10.reduce(([e11, n2, r2], i2) => {
    let [a2, o2, s2] = i2(t2, r2);
    return [{ ...e11, ...a2 }, o2 || n2, s2];
  }, [{}, null, 1]).slice(0, 2);
}
function z(e10, ...t2) {
  if (e10 == null) return [null, null];
  for (let [n2, r2] of t2) {
    let t3 = n2.exec(e10);
    if (t3) return r2(t3);
  }
  return [null, null];
}
function hn(...e10) {
  return (t2, n2) => {
    let r2 = {}, i2;
    for (i2 = 0; i2 < e10.length; i2++) r2[e10[i2]] = N(t2[n2 + i2]);
    return [r2, null, n2 + i2];
  };
}
var gn = /(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/, _n = `(?:${gn.source}?(?:\\[(${mn.source})\\])?)?`, vn = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, yn = RegExp(`${vn.source}${_n}`), bn = RegExp(`(?:[Tt]${yn.source})?`), xn = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, Sn = /(\d{4})-?W(\d\d)(?:-?(\d))?/, Cn = /(\d{4})-?(\d{3})/, wn = hn(`weekYear`, `weekNumber`, `weekDay`), Tn = hn(`year`, `ordinal`), En = /(\d{4})-(\d\d)-(\d\d)/, Dn = RegExp(`${vn.source} ?(?:${gn.source}|(${mn.source}))?`), On = RegExp(`(?: ${Dn.source})?`);
function B(e10, t2, n2) {
  let r2 = e10[t2];
  return O(r2) ? n2 : N(r2);
}
function kn(e10, t2) {
  return [{ year: B(e10, t2), month: B(e10, t2 + 1, 1), day: B(e10, t2 + 2, 1) }, null, t2 + 3];
}
function V(e10, t2) {
  return [{ hours: B(e10, t2, 0), minutes: B(e10, t2 + 1, 0), seconds: B(e10, t2 + 2, 0), milliseconds: Nt(e10[t2 + 3]) }, null, t2 + 4];
}
function H(e10, t2) {
  let n2 = !e10[t2] && !e10[t2 + 1], r2 = Ht(e10[t2 + 1], e10[t2 + 2]);
  return [{}, n2 ? null : S.instance(r2), t2 + 3];
}
function An(e10, t2) {
  return [{}, e10[t2] ? b.create(e10[t2]) : null, t2 + 1];
}
var jn = RegExp(`^T?${vn.source}$`), Mn = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function Nn(e10) {
  let [t2, n2, r2, i2, a2, o2, s2, c2, l2] = e10, u2 = t2[0] === `-`, d2 = c2 && c2[0] === `-`, f2 = (e11, t3 = false) => e11 !== void 0 && (t3 || e11 && u2) ? -e11 : e11;
  return [{ years: f2(P(n2)), months: f2(P(r2)), weeks: f2(P(i2)), days: f2(P(a2)), hours: f2(P(o2)), minutes: f2(P(s2)), seconds: f2(P(c2), c2 === `-0`), milliseconds: f2(Nt(l2), d2) }];
}
var Pn = { GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };
function Fn(e10, t2, n2, r2, i2, a2, o2) {
  let s2 = { year: t2.length === 2 ? Bt(N(t2)) : N(t2), month: Jt.indexOf(n2) + 1, day: N(r2), hour: N(i2), minute: N(a2) };
  return o2 && (s2.second = N(o2)), e10 && (s2.weekday = e10.length > 3 ? Zt.indexOf(e10) + 1 : Qt.indexOf(e10) + 1), s2;
}
var In = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function Ln(e10) {
  let [, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2] = e10, f2 = Fn(t2, i2, r2, n2, a2, o2, s2), p2;
  return p2 = c2 ? Pn[c2] : l2 ? 0 : Ht(u2, d2), [f2, new S(p2)];
}
function Rn(e10) {
  return e10.replace(/\([^()]*\)|[\n\t]/g, ` `).replace(/(\s\s+)/g, ` `).trim();
}
var zn = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, Bn = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, Vn = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Hn(e10) {
  let [, t2, n2, r2, i2, a2, o2, s2] = e10;
  return [Fn(t2, i2, r2, n2, a2, o2, s2), S.utcInstance];
}
function Un(e10) {
  let [, t2, n2, r2, i2, a2, o2, s2] = e10;
  return [Fn(t2, s2, n2, r2, i2, a2, o2), S.utcInstance];
}
var Wn = L(xn, bn), Gn = L(Sn, bn), Kn = L(Cn, bn), qn = L(yn), Jn = R(kn, V, H, An), Yn = R(wn, V, H, An), Xn = R(Tn, V, H, An), Zn = R(V, H, An);
function Qn(e10) {
  return z(e10, [Wn, Jn], [Gn, Yn], [Kn, Xn], [qn, Zn]);
}
function $n(e10) {
  return z(Rn(e10), [In, Ln]);
}
function er(e10) {
  return z(e10, [zn, Hn], [Bn, Hn], [Vn, Un]);
}
function tr(e10) {
  return z(e10, [Mn, Nn]);
}
var nr = R(V);
function rr(e10) {
  return z(e10, [jn, nr]);
}
var ir = L(En, On), ar = L(Dn), or = R(V, H, An);
function sr(e10) {
  return z(e10, [ir, Jn], [ar, or]);
}
var cr = `Invalid Duration`, lr = { weeks: { days: 7, hours: 168, minutes: 10080, seconds: 10080 * 60, milliseconds: 10080 * 60 * 1e3 }, days: { hours: 24, minutes: 1440, seconds: 1440 * 60, milliseconds: 1440 * 60 * 1e3 }, hours: { minutes: 60, seconds: 3600, milliseconds: 3600 * 1e3 }, minutes: { seconds: 60, milliseconds: 60 * 1e3 }, seconds: { milliseconds: 1e3 } }, ur = { years: { quarters: 4, months: 12, weeks: 52, days: 365, hours: 365 * 24, minutes: 365 * 24 * 60, seconds: 365 * 24 * 60 * 60, milliseconds: 365 * 24 * 60 * 60 * 1e3 }, quarters: { months: 3, weeks: 13, days: 91, hours: 2184, minutes: 2184 * 60, seconds: 2184 * 60 * 60, milliseconds: 2184 * 60 * 60 * 1e3 }, months: { weeks: 4, days: 30, hours: 720, minutes: 720 * 60, seconds: 720 * 60 * 60, milliseconds: 720 * 60 * 60 * 1e3 }, ...lr }, U = 146097 / 400, W = 146097 / 4800, dr = { years: { quarters: 4, months: 12, weeks: U / 7, days: U, hours: U * 24, minutes: U * 24 * 60, seconds: U * 24 * 60 * 60, milliseconds: U * 24 * 60 * 60 * 1e3 }, quarters: { months: 3, weeks: U / 28, days: U / 4, hours: U * 24 / 4, minutes: U * 24 * 60 / 4, seconds: U * 24 * 60 * 60 / 4, milliseconds: U * 24 * 60 * 60 * 1e3 / 4 }, months: { weeks: W / 7, days: W, hours: W * 24, minutes: W * 24 * 60, seconds: W * 24 * 60 * 60, milliseconds: W * 24 * 60 * 60 * 1e3 }, ...lr }, G = [`years`, `quarters`, `months`, `weeks`, `days`, `hours`, `minutes`, `seconds`, `milliseconds`], fr = G.slice(0).reverse();
function K(e10, t2, n2 = false) {
  return new q({ values: n2 ? t2.values : { ...e10.values, ...t2.values || {} }, loc: e10.loc.clone(t2.loc), conversionAccuracy: t2.conversionAccuracy || e10.conversionAccuracy, matrix: t2.matrix || e10.matrix });
}
function pr(e10, t2) {
  let n2 = t2.milliseconds ?? 0;
  for (let r2 of fr.slice(1)) t2[r2] && (n2 += t2[r2] * e10[r2].milliseconds);
  return n2;
}
function mr(e10, t2) {
  let n2 = pr(e10, t2) < 0 ? -1 : 1;
  G.reduceRight((r2, i2) => {
    if (O(t2[i2])) return r2;
    if (r2) {
      let a2 = t2[r2] * n2, o2 = e10[i2][r2], s2 = Math.floor(a2 / o2);
      t2[i2] += s2 * n2, t2[r2] -= s2 * o2 * n2;
    }
    return i2;
  }, null), G.reduce((n3, r2) => {
    if (O(t2[r2])) return n3;
    if (n3) {
      let i2 = t2[n3] % 1;
      t2[n3] -= i2, t2[r2] += i2 * e10[n3][r2];
    }
    return r2;
  }, null);
}
function hr(e10) {
  let t2 = {};
  for (let [n2, r2] of Object.entries(e10)) r2 !== 0 && (t2[n2] = r2);
  return t2;
}
var q = class e7 {
  constructor(e10) {
    let t2 = e10.conversionAccuracy === `longterm` || false, n2 = t2 ? dr : ur;
    e10.matrix && (n2 = e10.matrix), this.values = e10.values, this.loc = e10.loc || x.create(), this.conversionAccuracy = t2 ? `longterm` : `casual`, this.invalid = e10.invalid || null, this.matrix = n2, this.isLuxonDuration = true;
  }
  static fromMillis(t2, n2) {
    return e7.fromObject({ milliseconds: t2 }, n2);
  }
  static fromObject(t2, n2 = {}) {
    if (typeof t2 != `object` || !t2) throw new o(`Duration.fromObject: argument expected to be an object, got ${t2 === null ? `null` : typeof t2}`);
    return new e7({ values: Wt(t2, e7.normalizeUnit), loc: x.fromObject(n2), conversionAccuracy: n2.conversionAccuracy, matrix: n2.matrix });
  }
  static fromDurationLike(t2) {
    if (k(t2)) return e7.fromMillis(t2);
    if (e7.isDuration(t2)) return t2;
    if (typeof t2 == `object`) return e7.fromObject(t2);
    throw new o(`Unknown duration argument ${t2} of type ${typeof t2}`);
  }
  static fromISO(t2, n2) {
    let [r2] = tr(t2);
    return r2 ? e7.fromObject(r2, n2) : e7.invalid(`unparsable`, `the input "${t2}" can't be parsed as ISO 8601`);
  }
  static fromISOTime(t2, n2) {
    let [r2] = rr(t2);
    return r2 ? e7.fromObject(r2, n2) : e7.invalid(`unparsable`, `the input "${t2}" can't be parsed as ISO 8601`);
  }
  static invalid(t2, n2 = null) {
    if (!t2) throw new o(`need to specify a reason the Duration is invalid`);
    let i2 = t2 instanceof E ? t2 : new E(t2, n2);
    if (T.throwOnInvalid) throw new r(i2);
    return new e7({ invalid: i2 });
  }
  static normalizeUnit(e10) {
    let t2 = { year: `years`, years: `years`, quarter: `quarters`, quarters: `quarters`, month: `months`, months: `months`, week: `weeks`, weeks: `weeks`, day: `days`, days: `days`, hour: `hours`, hours: `hours`, minute: `minutes`, minutes: `minutes`, second: `seconds`, seconds: `seconds`, millisecond: `milliseconds`, milliseconds: `milliseconds` }[e10 && e10.toLowerCase()];
    if (!t2) throw new a(e10);
    return t2;
  }
  static isDuration(e10) {
    return e10 && e10.isLuxonDuration || false;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  toFormat(e10, t2 = {}) {
    let n2 = { ...t2, floor: t2.round !== false && t2.floor !== false };
    return this.isValid ? I.create(this.loc, n2).formatDurationFromString(this, e10) : cr;
  }
  toHuman(e10 = {}) {
    if (!this.isValid) return cr;
    let t2 = e10.showZeros !== false, n2 = G.map((n3) => {
      let r2 = this.values[n3];
      return O(r2) || r2 === 0 && !t2 ? null : this.loc.numberFormatter({ style: `unit`, unitDisplay: `long`, ...e10, unit: n3.slice(0, -1) }).format(r2);
    }).filter((e11) => e11);
    return this.loc.listFormatter({ type: `conjunction`, style: e10.listStyle || `narrow`, ...e10 }).format(n2);
  }
  toObject() {
    return this.isValid ? { ...this.values } : {};
  }
  toISO() {
    if (!this.isValid) return null;
    let e10 = `P`;
    return this.years !== 0 && (e10 += this.years + `Y`), (this.months !== 0 || this.quarters !== 0) && (e10 += this.months + this.quarters * 3 + `M`), this.weeks !== 0 && (e10 += this.weeks + `W`), this.days !== 0 && (e10 += this.days + `D`), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e10 += `T`), this.hours !== 0 && (e10 += this.hours + `H`), this.minutes !== 0 && (e10 += this.minutes + `M`), (this.seconds !== 0 || this.milliseconds !== 0) && (e10 += Pt(this.seconds + this.milliseconds / 1e3, 3) + `S`), e10 === `P` && (e10 += `T0S`), e10;
  }
  toISOTime(e10 = {}) {
    if (!this.isValid) return null;
    let t2 = this.toMillis();
    return t2 < 0 || t2 >= 864e5 ? null : (e10 = { suppressMilliseconds: false, suppressSeconds: false, includePrefix: false, format: `extended`, ...e10, includeOffset: false }, $.fromMillis(t2, { zone: `UTC` }).toISOTime(e10));
  }
  toJSON() {
    return this.toISO();
  }
  toString() {
    return this.toISO();
  }
  [/* @__PURE__ */ Symbol.for(`nodejs.util.inspect.custom`)]() {
    return this.isValid ? `Duration { values: ${JSON.stringify(this.values)} }` : `Duration { Invalid, reason: ${this.invalidReason} }`;
  }
  toMillis() {
    return this.isValid ? pr(this.matrix, this.values) : NaN;
  }
  valueOf() {
    return this.toMillis();
  }
  plus(t2) {
    if (!this.isValid) return this;
    let n2 = e7.fromDurationLike(t2), r2 = {};
    for (let e10 of G) (A(n2.values, e10) || A(this.values, e10)) && (r2[e10] = n2.get(e10) + this.get(e10));
    return K(this, { values: r2 }, true);
  }
  minus(t2) {
    if (!this.isValid) return this;
    let n2 = e7.fromDurationLike(t2);
    return this.plus(n2.negate());
  }
  mapUnits(e10) {
    if (!this.isValid) return this;
    let t2 = {};
    for (let n2 of Object.keys(this.values)) t2[n2] = Ut(e10(this.values[n2], n2));
    return K(this, { values: t2 }, true);
  }
  get(t2) {
    return this[e7.normalizeUnit(t2)];
  }
  set(t2) {
    if (!this.isValid) return this;
    let n2 = { ...this.values, ...Wt(t2, e7.normalizeUnit) };
    return K(this, { values: n2 });
  }
  reconfigure({ locale: e10, numberingSystem: t2, conversionAccuracy: n2, matrix: r2 } = {}) {
    let i2 = { loc: this.loc.clone({ locale: e10, numberingSystem: t2 }), matrix: r2, conversionAccuracy: n2 };
    return K(this, i2);
  }
  as(e10) {
    return this.isValid ? this.shiftTo(e10).get(e10) : NaN;
  }
  normalize() {
    if (!this.isValid) return this;
    let e10 = this.toObject();
    return mr(this.matrix, e10), K(this, { values: e10 }, true);
  }
  rescale() {
    if (!this.isValid) return this;
    let e10 = hr(this.normalize().shiftToAll().toObject());
    return K(this, { values: e10 }, true);
  }
  shiftTo(...t2) {
    if (!this.isValid || t2.length === 0) return this;
    t2 = t2.map((t3) => e7.normalizeUnit(t3));
    let n2 = {}, r2 = {}, i2 = this.toObject(), a2;
    for (let e10 of G) if (t2.indexOf(e10) >= 0) {
      a2 = e10;
      let t3 = 0;
      for (let n3 in r2) t3 += this.matrix[n3][e10] * r2[n3], r2[n3] = 0;
      k(i2[e10]) && (t3 += i2[e10]);
      let o2 = Math.trunc(t3);
      n2[e10] = o2, r2[e10] = (t3 * 1e3 - o2 * 1e3) / 1e3;
    } else k(i2[e10]) && (r2[e10] = i2[e10]);
    for (let e10 in r2) r2[e10] !== 0 && (n2[a2] += e10 === a2 ? r2[e10] : r2[e10] / this.matrix[a2][e10]);
    return mr(this.matrix, n2), K(this, { values: n2 }, true);
  }
  shiftToAll() {
    return this.isValid ? this.shiftTo(`years`, `months`, `weeks`, `days`, `hours`, `minutes`, `seconds`, `milliseconds`) : this;
  }
  negate() {
    if (!this.isValid) return this;
    let e10 = {};
    for (let t2 of Object.keys(this.values)) e10[t2] = this.values[t2] === 0 ? 0 : -this.values[t2];
    return K(this, { values: e10 }, true);
  }
  removeZeros() {
    if (!this.isValid) return this;
    let e10 = hr(this.values);
    return K(this, { values: e10 }, true);
  }
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  equals(e10) {
    if (!this.isValid || !e10.isValid || !this.loc.equals(e10.loc)) return false;
    function t2(e11, t3) {
      return e11 === void 0 || e11 === 0 ? t3 === void 0 || t3 === 0 : e11 === t3;
    }
    for (let n2 of G) if (!t2(this.values[n2], e10.values[n2])) return false;
    return true;
  }
}, J = `Invalid Interval`;
function gr(e10, t2) {
  return !e10 || !e10.isValid ? _r.invalid(`missing or invalid start`) : !t2 || !t2.isValid ? _r.invalid(`missing or invalid end`) : t2 < e10 ? _r.invalid(`end before start`, `The end of an interval must be after its start, but you had start=${e10.toISO()} and end=${t2.toISO()}`) : null;
}
var _r = class e8 {
  constructor(e10) {
    this.s = e10.start, this.e = e10.end, this.invalid = e10.invalid || null, this.isLuxonInterval = true;
  }
  static invalid(t2, r2 = null) {
    if (!t2) throw new o(`need to specify a reason the Interval is invalid`);
    let i2 = t2 instanceof E ? t2 : new E(t2, r2);
    if (T.throwOnInvalid) throw new n(i2);
    return new e8({ invalid: i2 });
  }
  static fromDateTimes(t2, n2) {
    let r2 = gi(t2), i2 = gi(n2);
    return gr(r2, i2) ?? new e8({ start: r2, end: i2 });
  }
  static after(t2, n2) {
    let r2 = q.fromDurationLike(n2), i2 = gi(t2);
    return e8.fromDateTimes(i2, i2.plus(r2));
  }
  static before(t2, n2) {
    let r2 = q.fromDurationLike(n2), i2 = gi(t2);
    return e8.fromDateTimes(i2.minus(r2), i2);
  }
  static fromISO(t2, n2) {
    let [r2, i2] = (t2 || ``).split(`/`, 2);
    if (r2 && i2) {
      let t3, a2;
      try {
        t3 = $.fromISO(r2, n2), a2 = t3.isValid;
      } catch {
        a2 = false;
      }
      let o2, s2;
      try {
        o2 = $.fromISO(i2, n2), s2 = o2.isValid;
      } catch {
        s2 = false;
      }
      if (a2 && s2) return e8.fromDateTimes(t3, o2);
      if (a2) {
        let r3 = q.fromISO(i2, n2);
        if (r3.isValid) return e8.after(t3, r3);
      } else if (s2) {
        let t4 = q.fromISO(r2, n2);
        if (t4.isValid) return e8.before(o2, t4);
      }
    }
    return e8.invalid(`unparsable`, `the input "${t2}" can't be parsed as ISO 8601`);
  }
  static isInterval(e10) {
    return e10 && e10.isLuxonInterval || false;
  }
  get start() {
    return this.isValid ? this.s : null;
  }
  get end() {
    return this.isValid ? this.e : null;
  }
  get lastDateTime() {
    return this.isValid && this.e ? this.e.minus(1) : null;
  }
  get isValid() {
    return this.invalidReason === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  length(e10 = `milliseconds`) {
    return this.isValid ? this.toDuration(e10).get(e10) : NaN;
  }
  count(e10 = `milliseconds`, t2) {
    if (!this.isValid) return NaN;
    let n2 = this.start.startOf(e10, t2), r2;
    return r2 = t2?.useLocaleWeeks ? this.end.reconfigure({ locale: n2.locale }) : this.end, r2 = r2.startOf(e10, t2), Math.floor(r2.diff(n2, e10).get(e10)) + (r2.valueOf() !== this.end.valueOf());
  }
  hasSame(e10) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, e10) : false;
  }
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  isAfter(e10) {
    return this.isValid ? this.s > e10 : false;
  }
  isBefore(e10) {
    return this.isValid ? this.e <= e10 : false;
  }
  contains(e10) {
    return this.isValid ? this.s <= e10 && this.e > e10 : false;
  }
  set({ start: t2, end: n2 } = {}) {
    return this.isValid ? e8.fromDateTimes(t2 || this.s, n2 || this.e) : this;
  }
  splitAt(...t2) {
    if (!this.isValid) return [];
    let n2 = t2.map(gi).filter((e10) => this.contains(e10)).sort((e10, t3) => e10.toMillis() - t3.toMillis()), r2 = [], { s: i2 } = this, a2 = 0;
    for (; i2 < this.e; ) {
      let t3 = n2[a2] || this.e, o2 = +t3 > +this.e ? this.e : t3;
      r2.push(e8.fromDateTimes(i2, o2)), i2 = o2, a2 += 1;
    }
    return r2;
  }
  splitBy(t2) {
    let n2 = q.fromDurationLike(t2);
    if (!this.isValid || !n2.isValid || n2.as(`milliseconds`) === 0) return [];
    let { s: r2 } = this, i2 = 1, a2, o2 = [];
    for (; r2 < this.e; ) {
      let t3 = this.start.plus(n2.mapUnits((e10) => e10 * i2));
      a2 = +t3 > +this.e ? this.e : t3, o2.push(e8.fromDateTimes(r2, a2)), r2 = a2, i2 += 1;
    }
    return o2;
  }
  divideEqually(e10) {
    return this.isValid ? this.splitBy(this.length() / e10).slice(0, e10) : [];
  }
  overlaps(e10) {
    return this.e > e10.s && this.s < e10.e;
  }
  abutsStart(e10) {
    return this.isValid ? +this.e == +e10.s : false;
  }
  abutsEnd(e10) {
    return this.isValid ? +e10.e == +this.s : false;
  }
  engulfs(e10) {
    return this.isValid ? this.s <= e10.s && this.e >= e10.e : false;
  }
  equals(e10) {
    return !this.isValid || !e10.isValid ? false : this.s.equals(e10.s) && this.e.equals(e10.e);
  }
  intersection(t2) {
    if (!this.isValid) return this;
    let n2 = this.s > t2.s ? this.s : t2.s, r2 = this.e < t2.e ? this.e : t2.e;
    return n2 >= r2 ? null : e8.fromDateTimes(n2, r2);
  }
  union(t2) {
    if (!this.isValid) return this;
    let n2 = this.s < t2.s ? this.s : t2.s, r2 = this.e > t2.e ? this.e : t2.e;
    return e8.fromDateTimes(n2, r2);
  }
  static merge(e10) {
    let [t2, n2] = e10.sort((e11, t3) => e11.s - t3.s).reduce(([e11, t3], n3) => t3 ? t3.overlaps(n3) || t3.abutsStart(n3) ? [e11, t3.union(n3)] : [e11.concat([t3]), n3] : [e11, n3], [[], null]);
    return n2 && t2.push(n2), t2;
  }
  static xor(t2) {
    let n2 = null, r2 = 0, i2 = [], a2 = t2.map((e10) => [{ time: e10.s, type: `s` }, { time: e10.e, type: `e` }]), o2 = Array.prototype.concat(...a2).sort((e10, t3) => e10.time - t3.time);
    for (let t3 of o2) r2 += t3.type === `s` ? 1 : -1, r2 === 1 ? n2 = t3.time : (n2 && +n2 != +t3.time && i2.push(e8.fromDateTimes(n2, t3.time)), n2 = null);
    return e8.merge(i2);
  }
  difference(...t2) {
    return e8.xor([this].concat(t2)).map((e10) => this.intersection(e10)).filter((e10) => e10 && !e10.isEmpty());
  }
  toString() {
    return this.isValid ? `[${this.s.toISO()} \u2013 ${this.e.toISO()})` : J;
  }
  [/* @__PURE__ */ Symbol.for(`nodejs.util.inspect.custom`)]() {
    return this.isValid ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`;
  }
  toLocaleString(e10 = d, t2 = {}) {
    return this.isValid ? I.create(this.s.loc.clone(t2), e10).formatInterval(this) : J;
  }
  toISO(e10) {
    return this.isValid ? `${this.s.toISO(e10)}/${this.e.toISO(e10)}` : J;
  }
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : J;
  }
  toISOTime(e10) {
    return this.isValid ? `${this.s.toISOTime(e10)}/${this.e.toISOTime(e10)}` : J;
  }
  toFormat(e10, { separator: t2 = ` \u2013 ` } = {}) {
    return this.isValid ? `${this.s.toFormat(e10)}${t2}${this.e.toFormat(e10)}` : J;
  }
  toDuration(e10, t2) {
    return this.isValid ? this.e.diff(this.s, e10, t2) : q.invalid(this.invalidReason);
  }
  mapEndpoints(t2) {
    return e8.fromDateTimes(t2(this.s), t2(this.e));
  }
}, vr = class {
  static hasDST(e10 = T.defaultZone) {
    let t2 = $.now().setZone(e10).set({ month: 12 });
    return !e10.isUniversal && t2.offset !== t2.set({ month: 6 }).offset;
  }
  static isValidIANAZone(e10) {
    return b.isValidZone(e10);
  }
  static normalizeZone(e10) {
    return C(e10, T.defaultZone);
  }
  static getStartOfWeek({ locale: e10 = null, locObj: t2 = null } = {}) {
    return (t2 || x.create(e10)).getStartOfWeek();
  }
  static getMinimumDaysInFirstWeek({ locale: e10 = null, locObj: t2 = null } = {}) {
    return (t2 || x.create(e10)).getMinDaysInFirstWeek();
  }
  static getWeekendWeekdays({ locale: e10 = null, locObj: t2 = null } = {}) {
    return (t2 || x.create(e10)).getWeekendDays().slice();
  }
  static months(e10 = `long`, { locale: t2 = null, numberingSystem: n2 = null, locObj: r2 = null, outputCalendar: i2 = `gregory` } = {}) {
    return (r2 || x.create(t2, n2, i2)).months(e10);
  }
  static monthsFormat(e10 = `long`, { locale: t2 = null, numberingSystem: n2 = null, locObj: r2 = null, outputCalendar: i2 = `gregory` } = {}) {
    return (r2 || x.create(t2, n2, i2)).months(e10, true);
  }
  static weekdays(e10 = `long`, { locale: t2 = null, numberingSystem: n2 = null, locObj: r2 = null } = {}) {
    return (r2 || x.create(t2, n2, null)).weekdays(e10);
  }
  static weekdaysFormat(e10 = `long`, { locale: t2 = null, numberingSystem: n2 = null, locObj: r2 = null } = {}) {
    return (r2 || x.create(t2, n2, null)).weekdays(e10, true);
  }
  static meridiems({ locale: e10 = null } = {}) {
    return x.create(e10).meridiems();
  }
  static eras(e10 = `short`, { locale: t2 = null } = {}) {
    return x.create(t2, null, `gregory`).eras(e10);
  }
  static features() {
    return { relative: Et(), localeWeek: Dt() };
  }
};
function yr(e10, t2) {
  let n2 = (e11) => e11.toUTC(0, { keepLocalTime: true }).startOf(`day`).valueOf(), r2 = n2(t2) - n2(e10);
  return Math.floor(q.fromMillis(r2).as(`days`));
}
function br(e10, t2, n2) {
  let r2 = [[`years`, (e11, t3) => t3.year - e11.year], [`quarters`, (e11, t3) => t3.quarter - e11.quarter + (t3.year - e11.year) * 4], [`months`, (e11, t3) => t3.month - e11.month + (t3.year - e11.year) * 12], [`weeks`, (e11, t3) => {
    let n3 = yr(e11, t3);
    return (n3 - n3 % 7) / 7;
  }], [`days`, yr]], i2 = {}, a2 = e10, o2, s2;
  for (let [c2, l2] of r2) n2.indexOf(c2) >= 0 && (o2 = c2, i2[c2] = l2(e10, t2), s2 = a2.plus(i2), s2 > t2 ? (i2[c2]--, e10 = a2.plus(i2), e10 > t2 && (s2 = e10, i2[c2]--, e10 = a2.plus(i2))) : e10 = s2);
  return [e10, i2, s2, o2];
}
function xr(e10, t2, n2, r2) {
  let [i2, a2, o2, s2] = br(e10, t2, n2), c2 = t2 - i2, l2 = n2.filter((e11) => [`hours`, `minutes`, `seconds`, `milliseconds`].indexOf(e11) >= 0);
  l2.length === 0 && (o2 < t2 && (o2 = i2.plus({ [s2]: 1 })), o2 !== i2 && (a2[s2] = (a2[s2] || 0) + c2 / (o2 - i2)));
  let u2 = q.fromObject(a2, r2);
  return l2.length > 0 ? q.fromMillis(c2, r2).shiftTo(...l2).plus(u2) : u2;
}
var Sr = `missing Intl.DateTimeFormat.formatToParts support`;
function Y(e10, t2 = (e11) => e11) {
  return { regex: e10, deser: ([e11]) => t2(Ze(e11)) };
}
var Cr = `[ \xA0]`, wr = new RegExp(Cr, `g`);
function Tr(e10) {
  return e10.replace(/\./g, `\\.?`).replace(wr, Cr);
}
function Er(e10) {
  return e10.replace(/\./g, ``).replace(wr, ` `).toLowerCase();
}
function X(e10, t2) {
  return e10 === null ? null : { regex: RegExp(e10.map(Tr).join(`|`)), deser: ([n2]) => e10.findIndex((e11) => Er(n2) === Er(e11)) + t2 };
}
function Dr(e10, t2) {
  return { regex: e10, deser: ([, e11, t3]) => Ht(e11, t3), groups: t2 };
}
function Or(e10) {
  return { regex: e10, deser: ([e11]) => e11 };
}
function kr(e10) {
  return e10.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, `\\$&`);
}
function Ar(e10, t2) {
  let n2 = w(t2), r2 = w(t2, `{2}`), i2 = w(t2, `{3}`), a2 = w(t2, `{4}`), o2 = w(t2, `{6}`), s2 = w(t2, `{1,2}`), c2 = w(t2, `{1,3}`), l2 = w(t2, `{1,6}`), u2 = w(t2, `{1,9}`), d2 = w(t2, `{2,4}`), f2 = w(t2, `{4,6}`), p2 = (e11) => ({ regex: RegExp(kr(e11.val)), deser: ([e12]) => e12, literal: true }), m2 = ((m3) => {
    if (e10.literal) return p2(m3);
    switch (m3.val) {
      case `G`:
        return X(t2.eras(`short`), 0);
      case `GG`:
        return X(t2.eras(`long`), 0);
      case `y`:
        return Y(l2);
      case `yy`:
        return Y(d2, Bt);
      case `yyyy`:
        return Y(a2);
      case `yyyyy`:
        return Y(f2);
      case `yyyyyy`:
        return Y(o2);
      case `M`:
        return Y(s2);
      case `MM`:
        return Y(r2);
      case `MMM`:
        return X(t2.months(`short`, true), 1);
      case `MMMM`:
        return X(t2.months(`long`, true), 1);
      case `L`:
        return Y(s2);
      case `LL`:
        return Y(r2);
      case `LLL`:
        return X(t2.months(`short`, false), 1);
      case `LLLL`:
        return X(t2.months(`long`, false), 1);
      case `d`:
        return Y(s2);
      case `dd`:
        return Y(r2);
      case `o`:
        return Y(c2);
      case `ooo`:
        return Y(i2);
      case `HH`:
        return Y(r2);
      case `H`:
        return Y(s2);
      case `hh`:
        return Y(r2);
      case `h`:
        return Y(s2);
      case `mm`:
        return Y(r2);
      case `m`:
        return Y(s2);
      case `q`:
        return Y(s2);
      case `qq`:
        return Y(r2);
      case `s`:
        return Y(s2);
      case `ss`:
        return Y(r2);
      case `S`:
        return Y(c2);
      case `SSS`:
        return Y(i2);
      case `u`:
        return Or(u2);
      case `uu`:
        return Or(s2);
      case `uuu`:
        return Y(n2);
      case `a`:
        return X(t2.meridiems(), 0);
      case `kkkk`:
        return Y(a2);
      case `kk`:
        return Y(d2, Bt);
      case `W`:
        return Y(s2);
      case `WW`:
        return Y(r2);
      case `E`:
      case `c`:
        return Y(n2);
      case `EEE`:
        return X(t2.weekdays(`short`, false), 1);
      case `EEEE`:
        return X(t2.weekdays(`long`, false), 1);
      case `ccc`:
        return X(t2.weekdays(`short`, true), 1);
      case `cccc`:
        return X(t2.weekdays(`long`, true), 1);
      case `Z`:
      case `ZZ`:
        return Dr(RegExp(`([+-]${s2.source})(?::(${r2.source}))?`), 2);
      case `ZZZ`:
        return Dr(RegExp(`([+-]${s2.source})(${r2.source})?`), 2);
      case `z`:
        return Or(/[a-z_+-/]{1,256}?/i);
      case ` `:
        return Or(/[^\S\n\r]/);
      default:
        return p2(m3);
    }
  })(e10) || { invalidReason: Sr };
  return m2.token = e10, m2;
}
var jr = { year: { "2-digit": `yy`, numeric: `yyyyy` }, month: { numeric: `M`, "2-digit": `MM`, short: `MMM`, long: `MMMM` }, day: { numeric: `d`, "2-digit": `dd` }, weekday: { short: `EEE`, long: `EEEE` }, dayperiod: `a`, dayPeriod: `a`, hour12: { numeric: `h`, "2-digit": `hh` }, hour24: { numeric: `H`, "2-digit": `HH` }, minute: { numeric: `m`, "2-digit": `mm` }, second: { numeric: `s`, "2-digit": `ss` }, timeZoneName: { long: `ZZZZZ`, short: `ZZZ` } };
function Mr(e10, t2, n2) {
  let { type: r2, value: i2 } = e10;
  if (r2 === `literal`) {
    let e11 = /^\s+$/.test(i2);
    return { literal: !e11, val: e11 ? ` ` : i2 };
  }
  let a2 = t2[r2], o2 = r2;
  r2 === `hour` && (o2 = t2.hour12 == null ? t2.hourCycle == null ? n2.hour12 ? `hour12` : `hour24` : t2.hourCycle === `h11` || t2.hourCycle === `h12` ? `hour12` : `hour24` : t2.hour12 ? `hour12` : `hour24`);
  let s2 = jr[o2];
  if (typeof s2 == `object` && (s2 = s2[a2]), s2) return { literal: false, val: s2 };
}
function Nr(e10) {
  return [`^${e10.map((e11) => e11.regex).reduce((e11, t2) => `${e11}(${t2.source})`, ``)}$`, e10];
}
function Pr(e10, t2, n2) {
  let r2 = e10.match(t2);
  if (r2) {
    let e11 = {}, t3 = 1;
    for (let i2 in n2) if (A(n2, i2)) {
      let a2 = n2[i2], o2 = a2.groups ? a2.groups + 1 : 1;
      !a2.literal && a2.token && (e11[a2.token.val[0]] = a2.deser(r2.slice(t3, t3 + o2))), t3 += o2;
    }
    return [r2, e11];
  } else return [r2, {}];
}
function Fr(e10) {
  let t2 = (e11) => {
    switch (e11) {
      case `S`:
        return `millisecond`;
      case `s`:
        return `second`;
      case `m`:
        return `minute`;
      case `h`:
      case `H`:
        return `hour`;
      case `d`:
        return `day`;
      case `o`:
        return `ordinal`;
      case `L`:
      case `M`:
        return `month`;
      case `y`:
        return `year`;
      case `E`:
      case `c`:
        return `weekday`;
      case `W`:
        return `weekNumber`;
      case `k`:
        return `weekYear`;
      case `q`:
        return `quarter`;
      default:
        return null;
    }
  }, n2 = null, r2;
  return O(e10.z) || (n2 = b.create(e10.z)), O(e10.Z) || (n2 ||= new S(e10.Z), r2 = e10.Z), O(e10.q) || (e10.M = (e10.q - 1) * 3 + 1), O(e10.h) || (e10.h < 12 && e10.a === 1 ? e10.h += 12 : e10.h === 12 && e10.a === 0 && (e10.h = 0)), e10.G === 0 && e10.y && (e10.y = -e10.y), O(e10.u) || (e10.S = Nt(e10.u)), [Object.keys(e10).reduce((n3, r3) => {
    let i2 = t2(r3);
    return i2 && (n3[i2] = e10[r3]), n3;
  }, {}), n2, r2];
}
var Ir = null;
function Lr() {
  return Ir ||= $.fromMillis(1555555555555), Ir;
}
function Rr(e10, t2) {
  if (e10.literal) return e10;
  let n2 = Ur(I.macroTokenToFormatOpts(e10.val), t2);
  return n2 == null || n2.includes(void 0) ? e10 : n2;
}
function zr(e10, t2) {
  return Array.prototype.concat(...e10.map((e11) => Rr(e11, t2)));
}
var Br = class {
  constructor(e10, t2) {
    if (this.locale = e10, this.format = t2, this.tokens = zr(I.parseFormat(t2), e10), this.units = this.tokens.map((t3) => Ar(t3, e10)), this.disqualifyingUnit = this.units.find((e11) => e11.invalidReason), !this.disqualifyingUnit) {
      let [e11, t3] = Nr(this.units);
      this.regex = RegExp(e11, `i`), this.handlers = t3;
    }
  }
  explainFromTokens(e10) {
    if (this.isValid) {
      let [t2, n2] = Pr(e10, this.regex, this.handlers), [r2, a2, o2] = n2 ? Fr(n2) : [null, null, void 0];
      if (A(n2, `a`) && A(n2, `H`)) throw new i(`Can't include meridiem when specifying 24-hour format`);
      return { input: e10, tokens: this.tokens, regex: this.regex, rawMatches: t2, matches: n2, result: r2, zone: a2, specificOffset: o2 };
    } else return { input: e10, tokens: this.tokens, invalidReason: this.invalidReason };
  }
  get isValid() {
    return !this.disqualifyingUnit;
  }
  get invalidReason() {
    return this.disqualifyingUnit ? this.disqualifyingUnit.invalidReason : null;
  }
};
function Vr(e10, t2, n2) {
  return new Br(e10, n2).explainFromTokens(t2);
}
function Hr(e10, t2, n2) {
  let { result: r2, zone: i2, specificOffset: a2, invalidReason: o2 } = Vr(e10, t2, n2);
  return [r2, i2, a2, o2];
}
function Ur(e10, t2) {
  if (!e10) return null;
  let n2 = I.create(t2, e10).dtFormatter(Lr()), r2 = n2.formatToParts(), i2 = n2.resolvedOptions();
  return r2.map((t3) => Mr(t3, e10, i2));
}
var Wr = `Invalid DateTime`, Gr = 864e13;
function Kr(e10) {
  return new E(`unsupported zone`, `the zone "${e10.name}" is not supported`);
}
function qr(e10) {
  return e10.weekData === null && (e10.weekData = mt(e10.c)), e10.weekData;
}
function Jr(e10) {
  return e10.localWeekData === null && (e10.localWeekData = mt(e10.c, e10.loc.getMinDaysInFirstWeek(), e10.loc.getStartOfWeek())), e10.localWeekData;
}
function Z(e10, t2) {
  let n2 = { ts: e10.ts, zone: e10.zone, c: e10.c, o: e10.o, loc: e10.loc, invalid: e10.invalid };
  return new $({ ...n2, ...t2, old: n2 });
}
function Yr(e10, t2, n2) {
  let r2 = e10 - t2 * 60 * 1e3, i2 = n2.offset(r2);
  if (t2 === i2) return [r2, t2];
  r2 -= (i2 - t2) * 60 * 1e3;
  let a2 = n2.offset(r2);
  return i2 === a2 ? [r2, i2] : [e10 - Math.min(i2, a2) * 60 * 1e3, Math.max(i2, a2)];
}
function Xr(e10, t2) {
  e10 += t2 * 60 * 1e3;
  let n2 = new Date(e10);
  return { year: n2.getUTCFullYear(), month: n2.getUTCMonth() + 1, day: n2.getUTCDate(), hour: n2.getUTCHours(), minute: n2.getUTCMinutes(), second: n2.getUTCSeconds(), millisecond: n2.getUTCMilliseconds() };
}
function Zr(e10, t2, n2) {
  return Yr(Lt(e10), t2, n2);
}
function Qr(e10, t2) {
  let n2 = e10.o, r2 = e10.c.year + Math.trunc(t2.years), i2 = e10.c.month + Math.trunc(t2.months) + Math.trunc(t2.quarters) * 3, a2 = { ...e10.c, year: r2, month: i2, day: Math.min(e10.c.day, It(r2, i2)) + Math.trunc(t2.days) + Math.trunc(t2.weeks) * 7 }, o2 = q.fromObject({ years: t2.years - Math.trunc(t2.years), quarters: t2.quarters - Math.trunc(t2.quarters), months: t2.months - Math.trunc(t2.months), weeks: t2.weeks - Math.trunc(t2.weeks), days: t2.days - Math.trunc(t2.days), hours: t2.hours, minutes: t2.minutes, seconds: t2.seconds, milliseconds: t2.milliseconds }).as(`milliseconds`), [s2, c2] = Yr(Lt(a2), n2, e10.zone);
  return o2 !== 0 && (s2 += o2, c2 = e10.zone.offset(s2)), { ts: s2, o: c2 };
}
function Q(e10, t2, n2, r2, i2, a2) {
  let { setZone: o2, zone: s2 } = n2;
  if (e10 && Object.keys(e10).length !== 0 || t2) {
    let r3 = t2 || s2, i3 = $.fromObject(e10, { ...n2, zone: r3, specificOffset: a2 });
    return o2 ? i3 : i3.setZone(s2);
  } else return $.invalid(new E(`unparsable`, `the input "${i2}" can't be parsed as ${r2}`));
}
function $r(e10, t2, n2 = true) {
  return e10.isValid ? I.create(x.create(`en-US`), { allowZ: n2, forceSimple: true }).formatDateTimeFromString(e10, t2) : null;
}
function ei(e10, t2, n2) {
  let r2 = e10.c.year > 9999 || e10.c.year < 0, i2 = ``;
  if (r2 && e10.c.year >= 0 && (i2 += `+`), i2 += M(e10.c.year, r2 ? 6 : 4), n2 === `year`) return i2;
  if (t2) {
    if (i2 += `-`, i2 += M(e10.c.month), n2 === `month`) return i2;
    i2 += `-`;
  } else if (i2 += M(e10.c.month), n2 === `month`) return i2;
  return i2 += M(e10.c.day), i2;
}
function ti(e10, t2, n2, r2, i2, a2, o2) {
  let s2 = !n2 || e10.c.millisecond !== 0 || e10.c.second !== 0, c2 = ``;
  switch (o2) {
    case `day`:
    case `month`:
    case `year`:
      break;
    default:
      if (c2 += M(e10.c.hour), o2 === `hour`) break;
      if (t2) {
        if (c2 += `:`, c2 += M(e10.c.minute), o2 === `minute`) break;
        s2 && (c2 += `:`, c2 += M(e10.c.second));
      } else {
        if (c2 += M(e10.c.minute), o2 === `minute`) break;
        s2 && (c2 += M(e10.c.second));
      }
      if (o2 === `second`) break;
      s2 && (!r2 || e10.c.millisecond !== 0) && (c2 += `.`, c2 += M(e10.c.millisecond, 3));
  }
  return i2 && (e10.isOffsetFixed && e10.offset === 0 && !a2 ? c2 += `Z` : e10.o < 0 ? (c2 += `-`, c2 += M(Math.trunc(-e10.o / 60)), c2 += `:`, c2 += M(Math.trunc(-e10.o % 60))) : (c2 += `+`, c2 += M(Math.trunc(e10.o / 60)), c2 += `:`, c2 += M(Math.trunc(e10.o % 60)))), a2 && (c2 += `[` + e10.zone.ianaName + `]`), c2;
}
var ni = { month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }, ri = { weekNumber: 1, weekday: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }, ii = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }, ai = [`year`, `month`, `day`, `hour`, `minute`, `second`, `millisecond`], oi = [`weekYear`, `weekNumber`, `weekday`, `hour`, `minute`, `second`, `millisecond`], si = [`year`, `ordinal`, `hour`, `minute`, `second`, `millisecond`];
function ci(e10) {
  let t2 = { year: `year`, years: `year`, month: `month`, months: `month`, day: `day`, days: `day`, hour: `hour`, hours: `hour`, minute: `minute`, minutes: `minute`, quarter: `quarter`, quarters: `quarter`, second: `second`, seconds: `second`, millisecond: `millisecond`, milliseconds: `millisecond`, weekday: `weekday`, weekdays: `weekday`, weeknumber: `weekNumber`, weeksnumber: `weekNumber`, weeknumbers: `weekNumber`, weekyear: `weekYear`, weekyears: `weekYear`, ordinal: `ordinal` }[e10.toLowerCase()];
  if (!t2) throw new a(e10);
  return t2;
}
function li(e10) {
  switch (e10.toLowerCase()) {
    case `localweekday`:
    case `localweekdays`:
      return `localWeekday`;
    case `localweeknumber`:
    case `localweeknumbers`:
      return `localWeekNumber`;
    case `localweekyear`:
    case `localweekyears`:
      return `localWeekYear`;
    default:
      return ci(e10);
  }
}
function ui(e10) {
  if (mi === void 0 && (mi = T.now()), e10.type !== `iana`) return e10.offset(mi);
  let t2 = e10.name, n2 = hi.get(t2);
  return n2 === void 0 && (n2 = e10.offset(mi), hi.set(t2, n2)), n2;
}
function di(e10, t2) {
  let n2 = C(t2.zone, T.defaultZone);
  if (!n2.isValid) return $.invalid(Kr(n2));
  let r2 = x.fromObject(t2), i2, a2;
  if (O(e10.year)) i2 = T.now();
  else {
    for (let t4 of ai) O(e10[t4]) && (e10[t4] = ni[t4]);
    let t3 = xt(e10) || St(e10);
    if (t3) return $.invalid(t3);
    let r3 = ui(n2);
    [i2, a2] = Zr(e10, r3, n2);
  }
  return new $({ ts: i2, zone: n2, loc: r2, o: a2 });
}
function fi(e10, t2, n2) {
  let r2 = O(n2.round) ? true : n2.round, i2 = O(n2.rounding) ? `trunc` : n2.rounding, a2 = (e11, a3) => (e11 = Pt(e11, r2 || n2.calendary ? 0 : 2, n2.calendary ? `round` : i2), t2.loc.clone(n2).relFormatter(n2).format(e11, a3)), o2 = (r3) => n2.calendary ? t2.hasSame(e10, r3) ? 0 : t2.startOf(r3).diff(e10.startOf(r3), r3).get(r3) : t2.diff(e10, r3).get(r3);
  if (n2.unit) return a2(o2(n2.unit), n2.unit);
  for (let e11 of n2.units) {
    let t3 = o2(e11);
    if (Math.abs(t3) >= 1) return a2(t3, e11);
  }
  return a2(e10 > t2 ? -0 : 0, n2.units[n2.units.length - 1]);
}
function pi(e10) {
  let t2 = {}, n2;
  return e10.length > 0 && typeof e10[e10.length - 1] == `object` ? (t2 = e10[e10.length - 1], n2 = Array.from(e10).slice(0, e10.length - 1)) : n2 = Array.from(e10), [t2, n2];
}
var mi, hi = /* @__PURE__ */ new Map(), $ = class e9 {
  constructor(e10) {
    let t2 = e10.zone || T.defaultZone, n2 = e10.invalid || (Number.isNaN(e10.ts) ? new E(`invalid input`) : null) || (t2.isValid ? null : Kr(t2));
    this.ts = O(e10.ts) ? T.now() : e10.ts;
    let r2 = null, i2 = null;
    if (!n2) if (e10.old && e10.old.ts === this.ts && e10.old.zone.equals(t2)) [r2, i2] = [e10.old.c, e10.old.o];
    else {
      let a2 = k(e10.o) && !e10.old ? e10.o : t2.offset(this.ts);
      r2 = Xr(this.ts, a2), n2 = Number.isNaN(r2.year) ? new E(`invalid input`) : null, r2 = n2 ? null : r2, i2 = n2 ? null : a2;
    }
    this._zone = t2, this.loc = e10.loc || x.create(), this.invalid = n2, this.weekData = null, this.localWeekData = null, this.c = r2, this.o = i2, this.isLuxonDateTime = true;
  }
  static now() {
    return new e9({});
  }
  static local() {
    let [e10, t2] = pi(arguments), [n2, r2, i2, a2, o2, s2, c2] = t2;
    return di({ year: n2, month: r2, day: i2, hour: a2, minute: o2, second: s2, millisecond: c2 }, e10);
  }
  static utc() {
    let [e10, t2] = pi(arguments), [n2, r2, i2, a2, o2, s2, c2] = t2;
    return e10.zone = S.utcInstance, di({ year: n2, month: r2, day: i2, hour: a2, minute: o2, second: s2, millisecond: c2 }, e10);
  }
  static fromJSDate(t2, n2 = {}) {
    let r2 = Tt(t2) ? t2.valueOf() : NaN;
    if (Number.isNaN(r2)) return e9.invalid(`invalid input`);
    let i2 = C(n2.zone, T.defaultZone);
    return i2.isValid ? new e9({ ts: r2, zone: i2, loc: x.fromObject(n2) }) : e9.invalid(Kr(i2));
  }
  static fromMillis(t2, n2 = {}) {
    if (!k(t2)) throw new o(`fromMillis requires a numerical input, but received a ${typeof t2} with value ${t2}`);
    return t2 < -864e13 || t2 > Gr ? e9.invalid(`Timestamp out of range`) : new e9({ ts: t2, zone: C(n2.zone, T.defaultZone), loc: x.fromObject(n2) });
  }
  static fromSeconds(t2, n2 = {}) {
    if (k(t2)) return new e9({ ts: t2 * 1e3, zone: C(n2.zone, T.defaultZone), loc: x.fromObject(n2) });
    throw new o(`fromSeconds requires a numerical input`);
  }
  static fromObject(t2, n2 = {}) {
    t2 ||= {};
    let r2 = C(n2.zone, T.defaultZone);
    if (!r2.isValid) return e9.invalid(Kr(r2));
    let a2 = x.fromObject(n2), o2 = Wt(t2, li), { minDaysInFirstWeek: s2, startOfWeek: c2 } = vt(o2, a2), l2 = T.now(), u2 = O(n2.specificOffset) ? r2.offset(l2) : n2.specificOffset, d2 = !O(o2.ordinal), f2 = !O(o2.year), p2 = !O(o2.month) || !O(o2.day), m2 = f2 || p2, ee2 = o2.weekYear || o2.weekNumber;
    if ((m2 || d2) && ee2) throw new i(`Can't mix weekYear/weekNumber units with year/month/day or ordinals`);
    if (p2 && d2) throw new i(`Can't mix ordinal dates with month/day`);
    let h2 = ee2 || o2.weekday && !m2, g2, _2, v2 = Xr(l2, u2);
    h2 ? (g2 = oi, _2 = ri, v2 = mt(v2, s2, c2)) : d2 ? (g2 = si, _2 = ii, v2 = gt(v2)) : (g2 = ai, _2 = ni);
    let te2 = false;
    for (let e10 of g2) {
      let t3 = o2[e10];
      O(t3) ? te2 ? o2[e10] = _2[e10] : o2[e10] = v2[e10] : te2 = true;
    }
    let ne2 = (h2 ? yt(o2, s2, c2) : d2 ? bt(o2) : xt(o2)) || St(o2);
    if (ne2) return e9.invalid(ne2);
    let [re2, ie2] = Zr(h2 ? ht(o2, s2, c2) : d2 ? _t(o2) : o2, u2, r2), y2 = new e9({ ts: re2, zone: r2, o: ie2, loc: a2 });
    return o2.weekday && m2 && t2.weekday !== y2.weekday ? e9.invalid(`mismatched weekday`, `you can't specify both a weekday of ${o2.weekday} and a date of ${y2.toISO()}`) : y2.isValid ? y2 : e9.invalid(y2.invalid);
  }
  static fromISO(e10, t2 = {}) {
    let [n2, r2] = Qn(e10);
    return Q(n2, r2, t2, `ISO 8601`, e10);
  }
  static fromRFC2822(e10, t2 = {}) {
    let [n2, r2] = $n(e10);
    return Q(n2, r2, t2, `RFC 2822`, e10);
  }
  static fromHTTP(e10, t2 = {}) {
    let [n2, r2] = er(e10);
    return Q(n2, r2, t2, `HTTP`, t2);
  }
  static fromFormat(t2, n2, r2 = {}) {
    if (O(t2) || O(n2)) throw new o(`fromFormat requires an input string and a format`);
    let { locale: i2 = null, numberingSystem: a2 = null } = r2, [s2, c2, l2, u2] = Hr(x.fromOpts({ locale: i2, numberingSystem: a2, defaultToEN: true }), t2, n2);
    return u2 ? e9.invalid(u2) : Q(s2, c2, r2, `format ${n2}`, t2, l2);
  }
  static fromString(t2, n2, r2 = {}) {
    return e9.fromFormat(t2, n2, r2);
  }
  static fromSQL(e10, t2 = {}) {
    let [n2, r2] = sr(e10);
    return Q(n2, r2, t2, `SQL`, e10);
  }
  static invalid(n2, r2 = null) {
    if (!n2) throw new o(`need to specify a reason the DateTime is invalid`);
    let i2 = n2 instanceof E ? n2 : new E(n2, r2);
    if (T.throwOnInvalid) throw new t(i2);
    return new e9({ invalid: i2 });
  }
  static isDateTime(e10) {
    return e10 && e10.isLuxonDateTime || false;
  }
  static parseFormatForOpts(e10, t2 = {}) {
    let n2 = Ur(e10, x.fromObject(t2));
    return n2 ? n2.map((e11) => e11 ? e11.val : null).join(``) : null;
  }
  static expandFormat(e10, t2 = {}) {
    return zr(I.parseFormat(e10), x.fromObject(t2)).map((e11) => e11.val).join(``);
  }
  static resetCache() {
    mi = void 0, hi.clear();
  }
  get(e10) {
    return this[e10];
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  get zone() {
    return this._zone;
  }
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  get weekYear() {
    return this.isValid ? qr(this).weekYear : NaN;
  }
  get weekNumber() {
    return this.isValid ? qr(this).weekNumber : NaN;
  }
  get weekday() {
    return this.isValid ? qr(this).weekday : NaN;
  }
  get isWeekend() {
    return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
  }
  get localWeekday() {
    return this.isValid ? Jr(this).weekday : NaN;
  }
  get localWeekNumber() {
    return this.isValid ? Jr(this).weekNumber : NaN;
  }
  get localWeekYear() {
    return this.isValid ? Jr(this).weekYear : NaN;
  }
  get ordinal() {
    return this.isValid ? gt(this.c).ordinal : NaN;
  }
  get monthShort() {
    return this.isValid ? vr.months(`short`, { locObj: this.loc })[this.month - 1] : null;
  }
  get monthLong() {
    return this.isValid ? vr.months(`long`, { locObj: this.loc })[this.month - 1] : null;
  }
  get weekdayShort() {
    return this.isValid ? vr.weekdays(`short`, { locObj: this.loc })[this.weekday - 1] : null;
  }
  get weekdayLong() {
    return this.isValid ? vr.weekdays(`long`, { locObj: this.loc })[this.weekday - 1] : null;
  }
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  get offsetNameShort() {
    return this.isValid ? this.zone.offsetName(this.ts, { format: `short`, locale: this.locale }) : null;
  }
  get offsetNameLong() {
    return this.isValid ? this.zone.offsetName(this.ts, { format: `long`, locale: this.locale }) : null;
  }
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  get isInDST() {
    return this.isOffsetFixed ? false : this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
  }
  getPossibleOffsets() {
    if (!this.isValid || this.isOffsetFixed) return [this];
    let e10 = 864e5, t2 = 6e4, n2 = Lt(this.c), r2 = this.zone.offset(n2 - e10), i2 = this.zone.offset(n2 + e10), a2 = this.zone.offset(n2 - r2 * t2), o2 = this.zone.offset(n2 - i2 * t2);
    if (a2 === o2) return [this];
    let s2 = n2 - a2 * t2, c2 = n2 - o2 * t2, l2 = Xr(s2, a2), u2 = Xr(c2, o2);
    return l2.hour === u2.hour && l2.minute === u2.minute && l2.second === u2.second && l2.millisecond === u2.millisecond ? [Z(this, { ts: s2 }), Z(this, { ts: c2 })] : [this];
  }
  get isInLeapYear() {
    return Ft(this.year);
  }
  get daysInMonth() {
    return It(this.year, this.month);
  }
  get daysInYear() {
    return this.isValid ? F(this.year) : NaN;
  }
  get weeksInWeekYear() {
    return this.isValid ? zt(this.weekYear) : NaN;
  }
  get weeksInLocalWeekYear() {
    return this.isValid ? zt(this.localWeekYear, this.loc.getMinDaysInFirstWeek(), this.loc.getStartOfWeek()) : NaN;
  }
  resolvedLocaleOptions(e10 = {}) {
    let { locale: t2, numberingSystem: n2, calendar: r2 } = I.create(this.loc.clone(e10), e10).resolvedOptions(this);
    return { locale: t2, numberingSystem: n2, outputCalendar: r2 };
  }
  toUTC(e10 = 0, t2 = {}) {
    return this.setZone(S.instance(e10), t2);
  }
  toLocal() {
    return this.setZone(T.defaultZone);
  }
  setZone(t2, { keepLocalTime: n2 = false, keepCalendarTime: r2 = false } = {}) {
    if (t2 = C(t2, T.defaultZone), t2.equals(this.zone)) return this;
    if (t2.isValid) {
      let e10 = this.ts;
      if (n2 || r2) {
        let n3 = t2.offset(this.ts), r3 = this.toObject();
        [e10] = Zr(r3, n3, t2);
      }
      return Z(this, { ts: e10, zone: t2 });
    } else return e9.invalid(Kr(t2));
  }
  reconfigure({ locale: e10, numberingSystem: t2, outputCalendar: n2 } = {}) {
    let r2 = this.loc.clone({ locale: e10, numberingSystem: t2, outputCalendar: n2 });
    return Z(this, { loc: r2 });
  }
  setLocale(e10) {
    return this.reconfigure({ locale: e10 });
  }
  set(e10) {
    if (!this.isValid) return this;
    let t2 = Wt(e10, li), { minDaysInFirstWeek: n2, startOfWeek: r2 } = vt(t2, this.loc), a2 = !O(t2.weekYear) || !O(t2.weekNumber) || !O(t2.weekday), o2 = !O(t2.ordinal), s2 = !O(t2.year), c2 = !O(t2.month) || !O(t2.day), l2 = s2 || c2, u2 = t2.weekYear || t2.weekNumber;
    if ((l2 || o2) && u2) throw new i(`Can't mix weekYear/weekNumber units with year/month/day or ordinals`);
    if (c2 && o2) throw new i(`Can't mix ordinal dates with month/day`);
    let d2;
    a2 ? d2 = ht({ ...mt(this.c, n2, r2), ...t2 }, n2, r2) : O(t2.ordinal) ? (d2 = { ...this.toObject(), ...t2 }, O(t2.day) && (d2.day = Math.min(It(d2.year, d2.month), d2.day))) : d2 = _t({ ...gt(this.c), ...t2 });
    let [f2, p2] = Zr(d2, this.o, this.zone);
    return Z(this, { ts: f2, o: p2 });
  }
  plus(e10) {
    if (!this.isValid) return this;
    let t2 = q.fromDurationLike(e10);
    return Z(this, Qr(this, t2));
  }
  minus(e10) {
    if (!this.isValid) return this;
    let t2 = q.fromDurationLike(e10).negate();
    return Z(this, Qr(this, t2));
  }
  startOf(e10, { useLocaleWeeks: t2 = false } = {}) {
    if (!this.isValid) return this;
    let n2 = {}, r2 = q.normalizeUnit(e10);
    switch (r2) {
      case `years`:
        n2.month = 1;
      case `quarters`:
      case `months`:
        n2.day = 1;
      case `weeks`:
      case `days`:
        n2.hour = 0;
      case `hours`:
        n2.minute = 0;
      case `minutes`:
        n2.second = 0;
      case `seconds`:
        n2.millisecond = 0;
        break;
    }
    if (r2 === `weeks`) if (t2) {
      let e11 = this.loc.getStartOfWeek(), { weekday: t3 } = this;
      t3 < e11 && (n2.weekNumber = this.weekNumber - 1), n2.weekday = e11;
    } else n2.weekday = 1;
    return r2 === `quarters` && (n2.month = (Math.ceil(this.month / 3) - 1) * 3 + 1), this.set(n2);
  }
  endOf(e10, t2) {
    return this.isValid ? this.plus({ [e10]: 1 }).startOf(e10, t2).minus(1) : this;
  }
  toFormat(e10, t2 = {}) {
    return this.isValid ? I.create(this.loc.redefaultToEN(t2)).formatDateTimeFromString(this, e10) : Wr;
  }
  toLocaleString(e10 = d, t2 = {}) {
    return this.isValid ? I.create(this.loc.clone(t2), e10).formatDateTime(this) : Wr;
  }
  toLocaleParts(e10 = {}) {
    return this.isValid ? I.create(this.loc.clone(e10), e10).formatDateTimeParts(this) : [];
  }
  toISO({ format: e10 = `extended`, suppressSeconds: t2 = false, suppressMilliseconds: n2 = false, includeOffset: r2 = true, extendedZone: i2 = false, precision: a2 = `milliseconds` } = {}) {
    if (!this.isValid) return null;
    a2 = ci(a2);
    let o2 = e10 === `extended`, s2 = ei(this, o2, a2);
    return ai.indexOf(a2) >= 3 && (s2 += `T`), s2 += ti(this, o2, t2, n2, r2, i2, a2), s2;
  }
  toISODate({ format: e10 = `extended`, precision: t2 = `day` } = {}) {
    return this.isValid ? ei(this, e10 === `extended`, ci(t2)) : null;
  }
  toISOWeekDate() {
    return $r(this, `kkkk-'W'WW-c`);
  }
  toISOTime({ suppressMilliseconds: e10 = false, suppressSeconds: t2 = false, includeOffset: n2 = true, includePrefix: r2 = false, extendedZone: i2 = false, format: a2 = `extended`, precision: o2 = `milliseconds` } = {}) {
    return this.isValid ? (o2 = ci(o2), (r2 && ai.indexOf(o2) >= 3 ? `T` : ``) + ti(this, a2 === `extended`, t2, e10, n2, i2, o2)) : null;
  }
  toRFC2822() {
    return $r(this, `EEE, dd LLL yyyy HH:mm:ss ZZZ`, false);
  }
  toHTTP() {
    return $r(this.toUTC(), `EEE, dd LLL yyyy HH:mm:ss 'GMT'`);
  }
  toSQLDate() {
    return this.isValid ? ei(this, true) : null;
  }
  toSQLTime({ includeOffset: e10 = true, includeZone: t2 = false, includeOffsetSpace: n2 = true } = {}) {
    let r2 = `HH:mm:ss.SSS`;
    return (t2 || e10) && (n2 && (r2 += ` `), t2 ? r2 += `z` : e10 && (r2 += `ZZ`)), $r(this, r2, true);
  }
  toSQL(e10 = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e10)}` : null;
  }
  toString() {
    return this.isValid ? this.toISO() : Wr;
  }
  [/* @__PURE__ */ Symbol.for(`nodejs.util.inspect.custom`)]() {
    return this.isValid ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }` : `DateTime { Invalid, reason: ${this.invalidReason} }`;
  }
  valueOf() {
    return this.toMillis();
  }
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  toJSON() {
    return this.toISO();
  }
  toBSON() {
    return this.toJSDate();
  }
  toObject(e10 = {}) {
    if (!this.isValid) return {};
    let t2 = { ...this.c };
    return e10.includeConfig && (t2.outputCalendar = this.outputCalendar, t2.numberingSystem = this.loc.numberingSystem, t2.locale = this.loc.locale), t2;
  }
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  diff(e10, t2 = `milliseconds`, n2 = {}) {
    if (!this.isValid || !e10.isValid) return q.invalid(`created by diffing an invalid DateTime`);
    let r2 = { locale: this.locale, numberingSystem: this.numberingSystem, ...n2 }, i2 = Ot(t2).map(q.normalizeUnit), a2 = e10.valueOf() > this.valueOf(), o2 = xr(a2 ? this : e10, a2 ? e10 : this, i2, r2);
    return a2 ? o2.negate() : o2;
  }
  diffNow(t2 = `milliseconds`, n2 = {}) {
    return this.diff(e9.now(), t2, n2);
  }
  until(e10) {
    return this.isValid ? _r.fromDateTimes(this, e10) : this;
  }
  hasSame(e10, t2, n2) {
    if (!this.isValid) return false;
    let r2 = e10.valueOf(), i2 = this.setZone(e10.zone, { keepLocalTime: true });
    return i2.startOf(t2, n2) <= r2 && r2 <= i2.endOf(t2, n2);
  }
  equals(e10) {
    return this.isValid && e10.isValid && this.valueOf() === e10.valueOf() && this.zone.equals(e10.zone) && this.loc.equals(e10.loc);
  }
  toRelative(t2 = {}) {
    if (!this.isValid) return null;
    let n2 = t2.base || e9.fromObject({}, { zone: this.zone }), r2 = t2.padding ? this < n2 ? -t2.padding : t2.padding : 0, i2 = [`years`, `months`, `days`, `hours`, `minutes`, `seconds`], a2 = t2.unit;
    return Array.isArray(t2.unit) && (i2 = t2.unit, a2 = void 0), fi(n2, this.plus(r2), { ...t2, numeric: `always`, units: i2, unit: a2 });
  }
  toRelativeCalendar(t2 = {}) {
    return this.isValid ? fi(t2.base || e9.fromObject({}, { zone: this.zone }), this, { ...t2, numeric: `auto`, units: [`years`, `months`, `days`], calendary: true }) : null;
  }
  static min(...t2) {
    if (!t2.every(e9.isDateTime)) throw new o(`min requires all arguments be DateTimes`);
    return kt(t2, (e10) => e10.valueOf(), Math.min);
  }
  static max(...t2) {
    if (!t2.every(e9.isDateTime)) throw new o(`max requires all arguments be DateTimes`);
    return kt(t2, (e10) => e10.valueOf(), Math.max);
  }
  static fromFormatExplain(e10, t2, n2 = {}) {
    let { locale: r2 = null, numberingSystem: i2 = null } = n2;
    return Vr(x.fromOpts({ locale: r2, numberingSystem: i2, defaultToEN: true }), e10, t2);
  }
  static fromStringExplain(t2, n2, r2 = {}) {
    return e9.fromFormatExplain(t2, n2, r2);
  }
  static buildFormatParser(e10, t2 = {}) {
    let { locale: n2 = null, numberingSystem: r2 = null } = t2;
    return new Br(x.fromOpts({ locale: n2, numberingSystem: r2, defaultToEN: true }), e10);
  }
  static fromFormatParser(t2, n2, r2 = {}) {
    if (O(t2) || O(n2)) throw new o(`fromFormatParser requires an input string and a format parser`);
    let { locale: i2 = null, numberingSystem: a2 = null } = r2, s2 = x.fromOpts({ locale: i2, numberingSystem: a2, defaultToEN: true });
    if (!s2.equals(n2.locale)) throw new o(`fromFormatParser called with a locale of ${s2}, but the format parser was created for ${n2.locale}`);
    let { result: c2, zone: l2, specificOffset: u2, invalidReason: d2 } = n2.explainFromTokens(t2);
    return d2 ? e9.invalid(d2) : Q(c2, l2, r2, `format ${n2.format}`, t2, u2);
  }
  static get DATE_SHORT() {
    return d;
  }
  static get DATE_MED() {
    return f;
  }
  static get DATE_MED_WITH_WEEKDAY() {
    return p;
  }
  static get DATE_FULL() {
    return m;
  }
  static get DATE_HUGE() {
    return ee;
  }
  static get TIME_SIMPLE() {
    return h;
  }
  static get TIME_WITH_SECONDS() {
    return g;
  }
  static get TIME_WITH_SHORT_OFFSET() {
    return _;
  }
  static get TIME_WITH_LONG_OFFSET() {
    return v;
  }
  static get TIME_24_SIMPLE() {
    return te;
  }
  static get TIME_24_WITH_SECONDS() {
    return ne;
  }
  static get TIME_24_WITH_SHORT_OFFSET() {
    return re;
  }
  static get TIME_24_WITH_LONG_OFFSET() {
    return ie;
  }
  static get DATETIME_SHORT() {
    return y;
  }
  static get DATETIME_SHORT_WITH_SECONDS() {
    return ae;
  }
  static get DATETIME_MED() {
    return oe;
  }
  static get DATETIME_MED_WITH_SECONDS() {
    return se;
  }
  static get DATETIME_MED_WITH_WEEKDAY() {
    return ce;
  }
  static get DATETIME_FULL() {
    return le;
  }
  static get DATETIME_FULL_WITH_SECONDS() {
    return ue;
  }
  static get DATETIME_HUGE() {
    return de;
  }
  static get DATETIME_HUGE_WITH_SECONDS() {
    return fe;
  }
};
function gi(e10) {
  if ($.isDateTime(e10)) return e10;
  if (e10 && e10.valueOf && k(e10.valueOf())) return $.fromJSDate(e10);
  if (e10 && typeof e10 == `object`) return $.fromObject(e10);
  throw new o(`Unknown datetime argument: ${e10}, of type ${typeof e10}`);
}
export {
  $ as DateTime
};
