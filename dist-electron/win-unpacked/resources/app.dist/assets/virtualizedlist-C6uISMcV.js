var e = class {
  constructor({ container: e2, items: t, initialItemHeights: n, renderFunction: r, onScroll: i = null, onClick: a = null, manualClassName: o }) {
    this.container = e2, this.items = t, this.renderFunction = r, this.itemHeights = n, this.itemOffsets = [], this.visibleItems = {}, this.startIndex = null, this.endIndex = null, this.onScroll = i, this.onClick = a, this.bufferSize = 10, this.manualClassName = o, this.initializeOffsets(), this.setupContainer();
  }
  initializeOffsets() {
    this.itemOffsets[0] = 0;
    for (let e2 = 1; e2 < this.itemHeights.length; e2++) this.itemOffsets[e2] = this.itemOffsets[e2 - 1] + this.itemHeights[e2 - 1];
  }
  setupContainer() {
    this.container.style.position = `relative`, this.container.style.overflowY = `auto`, this.topSpacer = document.createElement(`div`), this.bottomSpacer = document.createElement(`div`), this.topSpacer.style.height = `0px`, this.bottomSpacer.style.height = `${this.totalHeight()}px`, this.container.appendChild(this.topSpacer), this.container.appendChild(this.bottomSpacer), this.container.addEventListener(`scroll`, this.handleScroll.bind(this)), this.render();
  }
  totalHeight() {
    return this.itemOffsets[this.items.length - 1] + this.itemHeights[this.itemHeights.length - 1];
  }
  findStartIndex(e2) {
    let t = 0, n = this.itemOffsets.length - 1;
    for (; t < n; ) {
      let r = Math.floor((t + n) / 2);
      this.itemOffsets[r] < e2 ? t = r + 1 : n = r;
    }
    return this.itemOffsets[t] > e2 ? Math.max(0, t - 1) : t;
  }
  handleScroll() {
    this.onScroll && this.onScroll(this.container.scrollTop), this.render();
  }
  render() {
    let e2 = this.container.scrollTop, t = this.container.offsetHeight, n = Math.max(this.findStartIndex(e2) - this.bufferSize, 0), r = this.findStartIndex(e2 + t), i = Math.min(r + this.bufferSize, this.items.length);
    if (n === this.startIndex && i === this.endIndex) return;
    let a = this.itemOffsets[n] || 0;
    this.topSpacer.style.height = `${a}px`;
    let o = this.totalHeight() - (this.itemOffsets[i] || a);
    i >= this.items.length ? this.bottomSpacer.style.display = `none` : (this.bottomSpacer.style.display = `block`, this.bottomSpacer.style.height = `${o}px`);
    let s = document.createDocumentFragment();
    for (let e3 = n; e3 < i; e3++) {
      let t2 = this.visibleItems[e3];
      if (!t2) {
        t2 = document.createElement(`div`);
        let n2 = this.renderFunction(this.items[e3], e3);
        if (!n2) continue;
        t2.innerHTML = n2, t2 = t2.children[0], this.onClick && t2.addEventListener(`click`, (e4) => this.onClick(e4)), t2.addEventListener(`load`, () => this.updateItemHeight(e3, t2), { once: true }), this.visibleItems[e3] = t2;
      }
      s.appendChild(t2);
    }
    Array.from(this.container.children).filter((e3) => e3 !== this.topSpacer && e3 !== this.bottomSpacer).forEach((e3) => {
      !this.visibleItems[+e3.dataset.index] && !e3.classList.contains(this.manualClassName) && this.container.removeChild(e3);
    }), this.container.insertBefore(s, this.bottomSpacer), this.startIndex = n, this.endIndex = i;
  }
  updateItemHeight(e2, t) {
    let n = t.offsetHeight;
    if (n && n !== this.itemHeights[e2]) {
      let t2 = n - this.itemHeights[e2];
      this.itemHeights[e2] = n;
      for (let n2 = e2 + 1; n2 < this.itemOffsets.length; n2++) this.itemOffsets[n2] += t2;
      this.endIndex < this.items.length && (this.bottomSpacer.style.height = `${this.totalHeight() - this.container.scrollTop}px`), this.render();
    }
  }
  scrollToIndex(e2, t = false, n = false) {
    if (e2 < 0 || e2 >= this.items.length) {
      console.error(`Index out of bounds: ${e2}`);
      return;
    }
    let r = this.itemOffsets[e2];
    this.container.scrollTo({ top: t ? r : r - window.innerHeight / 2 + this.itemHeights[e2] / 2, behavior: n ? `smooth` : `instant` }), this.render();
  }
};
export {
  e as default
};
