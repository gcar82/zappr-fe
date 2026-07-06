import { t as e } from "./video.es-3xQv0M59.js";
var t = e.getComponent(`MenuItem`), n = e.dom || e, r = class extends t {
  constructor(e2, t2 = {}) {
    let n2 = t2.selected;
    t2.selected = t2.active, super(e2, t2);
    let r2 = e2.qualityLevels();
    this.levels_ = t2.levels, this.selected_ = n2, this.handleQualityChange = this.handleQualityChange.bind(this), this.controlText(t2.controlText), this.on(r2, `change`, this.handleQualityChange), this.on(`dispose`, () => {
      this.off(r2, `change`, this.handleQualityChange);
    });
  }
  createEl(e2, t2, r2) {
    let i2 = super.createEl(e2, t2, r2), a2 = n.createEl(`span`, { className: `vjs-quality-menu-item-sub-label`, innerHTML: this.localize(this.options_.subLabel || ``) });
    return this.subLabel_ = a2, i2 && i2.appendChild(a2), i2;
  }
  handleClick() {
    this.updateSiblings_();
    let e2 = this.player().qualityLevels(), t2 = e2.selectedIndex;
    for (let n2 = 0, r2 = e2.length; n2 < r2; n2++) n2 !== t2 && (e2[n2].enabled = false);
    for (let t3 = 0, n2 = this.levels_.length; t3 < n2; t3++) e2[this.levels_[t3]].enabled = true;
    t2 !== -1 && this.levels_.indexOf(t2) === -1 && (e2[t2].enabled = false);
  }
  handleQualityChange() {
    let e2 = this.player().qualityLevels(), t2 = this.levels_.indexOf(e2.selectedIndex) > -1;
    this.selected(t2);
  }
  selected(e2) {
    if (this.selectable) if (this.selected_) {
      let t2 = this.options_.subLabel;
      this.addClass(`vjs-selected`), this.el_.setAttribute(`aria-checked`, `true`), this.controlText(this.localize(t2 ? `selected,` : `selected`));
      let n2 = this.player().controlBar.getChild(`QualityMenuButton`);
      e2 ? n2.removeClass(`vjs-quality-menu-button-waiting`) : n2.addClass(`vjs-quality-menu-button-waiting`);
    } else this.removeClass(`vjs-selected`), this.el_.setAttribute(`aria-checked`, `false`), this.controlText(this.options_.controlText);
  }
  updateSiblings_() {
    let e2 = this.player().qualityLevels(), t2 = this.player().controlBar.getChild(`QualityMenuButton`).items;
    for (let n2 = 0, r2 = t2.length; n2 < r2; n2++) {
      let r3 = t2[n2], i2 = r3.levels_.indexOf(e2.selectedIndex) > -1;
      r3.selected_ = r3 === this, r3.selected(i2);
    }
  }
}, i = e.getComponent(`MenuButton`), a = function(e2) {
  return Array.from(e2).some((e3) => e3.height);
}, o = function(e2) {
  return e2 >= 2160 ? `4K` : e2 >= 720 ? `HD` : ``;
}, s = class extends i {
  constructor(e2, t2 = {}) {
    super(e2, t2), this.el_.setAttribute(`aria-label`, this.localize(`Quality Levels`)), this.controlText(`Quality Levels`), e2.options().experimentalSvgIcons || this.$(`.vjs-icon-placeholder`).classList.add(`vjs-icon-cog`), this.setIcon(`cog`), this.qualityLevels_ = e2.qualityLevels(), this.update = this.update.bind(this), this.hide = this.hide.bind(this), this.handleQualityChange_ = this.handleQualityChange_.bind(this), this.firstChangeHandler_ = this.firstChangeHandler_.bind(this), this.enableDefaultResolution_ = this.enableDefaultResolution_.bind(this), this.on(this.qualityLevels_, `addqualitylevel`, this.update), this.on(this.qualityLevels_, `removequalitylevel`, this.update), this.on(this.qualityLevels_, `change`, this.handleQualityChange_), this.one(this.qualityLevels_, `change`, this.firstChangeHandler_), e2.on(`adstart`, this.hide), e2.on([`adend`, `adtimeout`], this.update), this.update(), this.on(`dispose`, () => {
      this.off(this.qualityLevels_, `addqualitylevel`, this.update), this.off(this.qualityLevels_, `removequalitylevel`, this.update), this.off(this.qualityLevels_, `change`, this.handleQualityChange_), this.off(this.qualityLevels_, `change`, this.firstChangeHandler_), e2.off(`adstart`, this.hide), e2.off([`adend`, `adtimeout`], this.update), e2.off(`loadedmetadata`, this.enableDefaultResolution_);
    });
  }
  buildWrapperCSSClass() {
    return `vjs-quality-menu-wrapper ${super.buildWrapperCSSClass()}`;
  }
  buildCSSClass() {
    return `vjs-quality-menu-button ${super.buildCSSClass()}`;
  }
  createItems() {
    let e2 = [];
    if (!(this.qualityLevels_ && this.qualityLevels_.length)) return e2;
    let t2;
    if (this.options_.useResolutionLabels && a(this.qualityLevels_) ? (t2 = this.groupByResolution_(), this.addClass(`vjs-quality-menu-button-use-resolution`)) : (t2 = this.groupByBitrate_(), this.removeClass(`vjs-quality-menu-button-use-resolution`)), t2.length <= 1) return [];
    t2.forEach((t3) => {
      t3.levels.length && (t3.selectable = true, e2.push(new r(this.player(), t3)));
    });
    let n2 = new r(this.player(), { levels: Array.prototype.map.call(this.qualityLevels_, (e3, t3) => t3), label: this.localize(`Auto`), controlText: ``, active: true, selected: true, selectable: true });
    return this.autoMenuItem_ = n2, e2.push(n2), e2;
  }
  groupByResolution_() {
    let e2 = {}, t2 = [];
    for (let n3 = 0, r2 = this.qualityLevels_.length; n3 < r2; n3++) {
      let r3 = this.qualityLevels_[n3], i2 = this.qualityLevels_.selectedIndex === n3, a2 = r3.height;
      if (!a2) continue;
      let s2;
      if (s2 = this.options_.resolutionLabelBitrates ? `${a2}p @ ${Math.round(r3.bitrate / 1e3)} kbps` : a2 + `p`, !e2[s2]) {
        let n4 = o(a2);
        e2[s2] = { levels: [], label: s2, controlText: ``, subLabel: n4 }, t2.push({ label: s2, lines: a2 });
      }
      i2 && (e2[s2].active = true), e2[s2].levels.push(n3);
    }
    t2.sort((e3, t3) => t3.lines - e3.lines);
    let n2 = [];
    return t2.forEach((t3) => {
      n2.push(e2[t3.label]);
    }), n2;
  }
  groupByBitrate_() {
    let e2 = [{ levels: [], label: `HD`, controlText: `High Definition` }, { levels: [], label: `SD`, controlText: `Standard Definition` }];
    for (let t2 = 0, n2 = this.qualityLevels_.length; t2 < n2; t2++) {
      let n3 = this.qualityLevels_[t2], r2 = this.qualityLevels_.selectedIndex === t2, i2;
      i2 = n3.bitrate < this.options_.sdBitrateLimit ? e2[1] : e2[0], r2 && (i2.active = true), i2.levels.push(t2);
    }
    return !e2[0].levels.length || !e2[1].levels.length ? [] : e2;
  }
  handleQualityChange_() {
    let e2 = this.qualityLevels_[this.qualityLevels_.selectedIndex], t2 = this.options_.useResolutionLabels && a(this.qualityLevels_), n2 = ``;
    e2 && (t2 ? n2 = o(e2.height) : e2.bitrate >= this.options_.sdBitrateLimit && (n2 = `HD`)), n2 === `HD` ? (this.addClass(`vjs-quality-menu-button-HD-flag`), this.removeClass(`vjs-quality-menu-button-4K-flag`)) : n2 === `4K` ? (this.removeClass(`vjs-quality-menu-button-HD-flag`), this.addClass(`vjs-quality-menu-button-4K-flag`)) : (this.removeClass(`vjs-quality-menu-button-HD-flag`), this.removeClass(`vjs-quality-menu-button-4K-flag`)), this.autoMenuItem_ && (this.autoMenuItem_.manuallySelected_ && e2 ? this.autoMenuItem_.subLabel_.innerHTML = this.localize(n2) : this.autoMenuItem_.subLabel_.innerHTML = ``);
  }
  enableDefaultResolution_() {
    let e2 = this.options_.defaultResolution;
    for (let t2 = 0; t2 < this.items.length; t2++) this.items[t2].options_.label.indexOf(e2) !== -1 && this.items[t2].handleClick();
  }
  firstChangeHandler_() {
    if (this.player_.readyState() < 1 && this.player_.preload() !== `none`) {
      this.player_.one(`loadedmetadata`, this.enableDefaultResolution_);
      return;
    }
    this.enableDefaultResolution_();
  }
};
e.registerComponent(`QualityMenuButton`, s);
var c = `1.0.4`, l = { sdBitrateLimit: 2e6, useResolutionLabels: true, resolutionLabelBitrates: false, defaultResolution: `none` }, u = (e2, t2) => {
  e2.addClass(`vjs-quality-menu`);
  let n2 = e2.getChild(`controlBar`), r2 = n2.addChild(`QualityMenuButton`, t2, n2.children_.length - 2);
  return function() {
    e2.removeClass(`vjs-quality-menu`), n2.removeChild(r2), r2.dispose();
  };
}, d = function(e2, t2) {
  if (e2.qualityLevels !== void 0) {
    e2.qualityLevels();
    let n2 = () => {
    };
    e2.ready(() => {
      n2 = u(e2, t2), e2.on(`loadstart`, () => {
        n2(), n2 = u(e2, t2);
      });
    }), e2.qualityMenu = () => {
    }, e2.qualityMenu.VERSION = c;
  }
}, f = function(t2) {
  d(this, e.obj.merge(l, t2));
};
e.registerPlugin(`qualityMenu`, f), f.VERSION = c;
export {
  f as default
};
