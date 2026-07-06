var e = Object.assign || function(e2) {
  for (var t3 = 1; t3 < arguments.length; t3++) {
    var n2 = arguments[t3];
    for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
  }
  return e2;
}, t = function(e2) {
  return e2.tagName === `IMG`;
}, n = function(e2) {
  return NodeList.prototype.isPrototypeOf(e2);
}, r = function(e2) {
  return e2 && e2.nodeType === 1;
}, i = function(e2) {
  return (e2.currentSrc || e2.src).substr(-4).toLowerCase() === `.svg`;
}, a = function(e2) {
  try {
    return Array.isArray(e2) ? e2.filter(t) : n(e2) ? [].slice.call(e2).filter(t) : r(e2) ? [e2].filter(t) : typeof e2 == `string` ? [].slice.call(document.querySelectorAll(e2)).filter(t) : [];
  } catch {
    throw TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`);
  }
}, o = function(e2) {
  var t3 = document.createElement(`div`);
  return t3.classList.add(`medium-zoom-overlay`), t3.style.background = e2, t3;
}, s = function(e2) {
  var t3 = e2.getBoundingClientRect(), n2 = t3.top, r2 = t3.left, i2 = t3.width, a2 = t3.height, o2 = e2.cloneNode(), s2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, c2 = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
  return o2.removeAttribute(`id`), o2.style.position = `absolute`, o2.style.top = n2 + s2 + `px`, o2.style.left = r2 + c2 + `px`, o2.style.width = i2 + `px`, o2.style.height = a2 + `px`, o2.style.transform = ``, o2;
}, c = function(t3, n2) {
  var r2 = e({ bubbles: false, cancelable: false, detail: void 0 }, n2);
  if (typeof window.CustomEvent == `function`) return new CustomEvent(t3, r2);
  var i2 = document.createEvent(`CustomEvent`);
  return i2.initCustomEvent(t3, r2.bubbles, r2.cancelable, r2.detail), i2;
}, l = function t2(n2) {
  var l2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u2 = window.Promise || function(e2) {
    function t3() {
    }
    e2(t3, t3);
  }, d = function(e2) {
    var t3 = e2.target;
    if (t3 === M) {
      x();
      return;
    }
    E.indexOf(t3) !== -1 && S({ target: t3 });
  }, f = function() {
    if (!(O || !j.original)) {
      var e2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      Math.abs(k - e2) > A.scrollOffset && setTimeout(x, 150);
    }
  }, p = function(e2) {
    var t3 = e2.key || e2.keyCode;
    (t3 === `Escape` || t3 === `Esc` || t3 === 27) && x();
  }, m = function() {
    var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n3 = t3;
    return t3.background && (M.style.background = t3.background), t3.container && t3.container instanceof Object && (n3.container = e({}, A.container, t3.container)), t3.template && (n3.template = r(t3.template) ? t3.template : document.querySelector(t3.template)), A = e({}, A, n3), E.forEach(function(e2) {
      e2.dispatchEvent(c(`medium-zoom:update`, { detail: { zoom: N } }));
    }), N;
  }, h = function() {
    var n3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return t2(e({}, A, n3));
  }, g = function() {
    var e2 = [...arguments].reduce(function(e3, t3) {
      return [].concat(e3, a(t3));
    }, []);
    return e2.filter(function(e3) {
      return E.indexOf(e3) === -1;
    }).forEach(function(e3) {
      E.push(e3), e3.classList.add(`medium-zoom-image`);
    }), D.forEach(function(t3) {
      var n3 = t3.type, r2 = t3.listener, i2 = t3.options;
      e2.forEach(function(e3) {
        e3.addEventListener(n3, r2, i2);
      });
    }), N;
  }, _ = function() {
    var e2 = [...arguments];
    j.zoomed && x();
    var t3 = e2.length > 0 ? e2.reduce(function(e3, t4) {
      return [].concat(e3, a(t4));
    }, []) : E;
    return t3.forEach(function(e3) {
      e3.classList.remove(`medium-zoom-image`), e3.dispatchEvent(c(`medium-zoom:detach`, { detail: { zoom: N } }));
    }), E = E.filter(function(e3) {
      return t3.indexOf(e3) === -1;
    }), N;
  }, v = function(e2, t3) {
    var n3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return E.forEach(function(r2) {
      r2.addEventListener(`medium-zoom:` + e2, t3, n3);
    }), D.push({ type: `medium-zoom:` + e2, listener: t3, options: n3 }), N;
  }, y = function(e2, t3) {
    var n3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return E.forEach(function(r2) {
      r2.removeEventListener(`medium-zoom:` + e2, t3, n3);
    }), D = D.filter(function(n4) {
      return !(n4.type === `medium-zoom:` + e2 && n4.listener.toString() === t3.toString());
    }), N;
  }, b = function() {
    var t3 = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).target, n3 = function() {
      var t4 = { width: document.documentElement.clientWidth, height: document.documentElement.clientHeight, left: 0, top: 0, right: 0, bottom: 0 }, n4 = void 0, a2 = void 0;
      if (A.container) if (A.container instanceof Object) t4 = e({}, t4, A.container), n4 = t4.width - t4.left - t4.right - A.margin * 2, a2 = t4.height - t4.top - t4.bottom - A.margin * 2;
      else {
        var o2 = (r(A.container) ? A.container : document.querySelector(A.container)).getBoundingClientRect(), s2 = o2.width, c2 = o2.height, l3 = o2.left, u3 = o2.top;
        t4 = e({}, t4, { width: s2, height: c2, left: l3, top: u3 });
      }
      n4 ||= t4.width - A.margin * 2, a2 ||= t4.height - A.margin * 2;
      var d2 = j.zoomedHd || j.original, f2 = i(d2) ? n4 : d2.naturalWidth || n4, p2 = i(d2) ? a2 : d2.naturalHeight || a2, m2 = d2.getBoundingClientRect(), h2 = m2.top, g2 = m2.left, _2 = m2.width, v2 = m2.height, y2 = Math.min(Math.max(_2, f2), n4) / _2, b2 = Math.min(Math.max(v2, p2), a2) / v2, x2 = Math.min(y2, b2), S2 = (-g2 + (n4 - _2) / 2 + A.margin + t4.left) / x2, C2 = (-h2 + (a2 - v2) / 2 + A.margin + t4.top) / x2, w2 = `scale(` + x2 + `) translate3d(` + S2 + `px, ` + C2 + `px, 0)`;
      j.zoomed.style.transform = w2, j.zoomedHd && (j.zoomedHd.style.transform = w2);
    };
    return new u2(function(e2) {
      if (t3 && E.indexOf(t3) === -1) {
        e2(N);
        return;
      }
      var i2 = function t4() {
        O = false, j.zoomed.removeEventListener(`transitionend`, t4), j.original.dispatchEvent(c(`medium-zoom:opened`, { detail: { zoom: N } })), e2(N);
      };
      if (j.zoomed) {
        e2(N);
        return;
      }
      if (t3) j.original = t3;
      else if (E.length > 0) j.original = E[0];
      else {
        e2(N);
        return;
      }
      if (j.original.dispatchEvent(c(`medium-zoom:open`, { detail: { zoom: N } })), k = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, O = true, j.zoomed = s(j.original), document.body.appendChild(M), A.template) {
        var a2 = r(A.template) ? A.template : document.querySelector(A.template);
        j.template = document.createElement(`div`), j.template.appendChild(a2.content.cloneNode(true)), document.body.appendChild(j.template);
      }
      if (j.original.parentElement && j.original.parentElement.tagName === `PICTURE` && j.original.currentSrc && (j.zoomed.src = j.original.currentSrc), document.body.appendChild(j.zoomed), window.requestAnimationFrame(function() {
        document.body.classList.add(`medium-zoom--opened`);
      }), j.original.classList.add(`medium-zoom-image--hidden`), j.zoomed.classList.add(`medium-zoom-image--opened`), j.zoomed.addEventListener(`click`, x), j.zoomed.addEventListener(`transitionend`, i2), j.original.getAttribute(`data-zoom-src`)) {
        j.zoomedHd = j.zoomed.cloneNode(), j.zoomedHd.removeAttribute(`srcset`), j.zoomedHd.removeAttribute(`sizes`), j.zoomedHd.removeAttribute(`loading`), j.zoomedHd.src = j.zoomed.getAttribute(`data-zoom-src`), j.zoomedHd.onerror = function() {
          clearInterval(o2), console.warn(`Unable to reach the zoom image target ` + j.zoomedHd.src), j.zoomedHd = null, n3();
        };
        var o2 = setInterval(function() {
          j.zoomedHd.complete && (clearInterval(o2), j.zoomedHd.classList.add(`medium-zoom-image--opened`), j.zoomedHd.addEventListener(`click`, x), document.body.appendChild(j.zoomedHd), n3());
        }, 10);
      } else if (j.original.hasAttribute(`srcset`)) {
        j.zoomedHd = j.zoomed.cloneNode(), j.zoomedHd.removeAttribute(`sizes`), j.zoomedHd.removeAttribute(`loading`);
        var l3 = j.zoomedHd.addEventListener(`load`, function() {
          j.zoomedHd.removeEventListener(`load`, l3), j.zoomedHd.classList.add(`medium-zoom-image--opened`), j.zoomedHd.addEventListener(`click`, x), document.body.appendChild(j.zoomedHd), n3();
        });
      } else n3();
    });
  }, x = function() {
    return new u2(function(e2) {
      if (O || !j.original) {
        e2(N);
        return;
      }
      var t3 = function t4() {
        j.original.classList.remove(`medium-zoom-image--hidden`), document.body.removeChild(j.zoomed), j.zoomedHd && document.body.removeChild(j.zoomedHd), document.body.removeChild(M), j.zoomed.classList.remove(`medium-zoom-image--opened`), j.template && document.body.removeChild(j.template), O = false, j.zoomed.removeEventListener(`transitionend`, t4), j.original.dispatchEvent(c(`medium-zoom:closed`, { detail: { zoom: N } })), j.original = null, j.zoomed = null, j.zoomedHd = null, j.template = null, e2(N);
      };
      O = true, document.body.classList.remove(`medium-zoom--opened`), j.zoomed.style.transform = ``, j.zoomedHd && (j.zoomedHd.style.transform = ``), j.template && (j.template.style.transition = `opacity 150ms`, j.template.style.opacity = 0), j.original.dispatchEvent(c(`medium-zoom:close`, { detail: { zoom: N } })), j.zoomed.addEventListener(`transitionend`, t3);
    });
  }, S = function() {
    var e2 = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).target;
    return j.original ? x() : b({ target: e2 });
  }, C = function() {
    return A;
  }, w = function() {
    return E;
  }, T = function() {
    return j.original;
  }, E = [], D = [], O = false, k = 0, A = l2, j = { original: null, zoomed: null, zoomedHd: null, template: null };
  Object.prototype.toString.call(n2) === `[object Object]` ? A = n2 : (n2 || typeof n2 == `string`) && g(n2), A = e({ margin: 0, background: `#fff`, scrollOffset: 40, container: null, template: null }, A);
  var M = o(A.background);
  document.addEventListener(`click`, d), document.addEventListener(`keyup`, p), document.addEventListener(`scroll`, f), window.addEventListener(`resize`, x);
  var N = { open: b, close: x, toggle: S, update: m, clone: h, attach: g, detach: _, on: v, off: y, getOptions: C, getImages: w, getZoomedImage: T };
  return N;
};
function u(e2, t3) {
  t3 === void 0 && (t3 = {});
  var n2 = t3.insertAt;
  if (!(!e2 || typeof document > `u`)) {
    var r2 = document.head || document.getElementsByTagName(`head`)[0], i2 = document.createElement(`style`);
    i2.type = `text/css`, n2 === `top` && r2.firstChild ? r2.insertBefore(i2, r2.firstChild) : r2.appendChild(i2), i2.styleSheet ? i2.styleSheet.cssText = e2 : i2.appendChild(document.createTextNode(e2));
  }
}
u(`.medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}`);
export {
  l as default
};
