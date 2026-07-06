function e(e2, t2) {
  var n2 = t2.attributes, r2, i2, a2, o2, s2;
  if (!(t2.nodeType === 11 || e2.nodeType === 11)) {
    for (var c2 = n2.length - 1; c2 >= 0; c2--) r2 = n2[c2], i2 = r2.name, a2 = r2.namespaceURI, o2 = r2.value, a2 ? (i2 = r2.localName || i2, s2 = e2.getAttributeNS(a2, i2), s2 !== o2 && (r2.prefix === `xmlns` && (i2 = r2.name), e2.setAttributeNS(a2, i2, o2))) : (s2 = e2.getAttribute(i2), s2 !== o2 && e2.setAttribute(i2, o2));
    for (var l2 = e2.attributes, u2 = l2.length - 1; u2 >= 0; u2--) r2 = l2[u2], i2 = r2.name, a2 = r2.namespaceURI, a2 ? (i2 = r2.localName || i2, t2.hasAttributeNS(a2, i2) || e2.removeAttributeNS(a2, i2)) : t2.hasAttribute(i2) || e2.removeAttribute(i2);
  }
}
var t, n = typeof document > `u` ? void 0 : document, r = !!n && `content` in n.createElement(`template`), i = !!n && n.createRange && `createContextualFragment` in n.createRange();
function a(e2) {
  var t2 = n.createElement(`template`);
  return t2.innerHTML = e2, t2.content.childNodes[0];
}
function o(e2) {
  return t || (t = n.createRange(), t.selectNode(n.body)), t.createContextualFragment(e2).childNodes[0];
}
function s(e2) {
  var t2 = n.createElement(`body`);
  return t2.innerHTML = e2, t2.childNodes[0];
}
function c(e2) {
  return e2 = e2.trim(), r ? a(e2) : i ? o(e2) : s(e2);
}
function l(e2, t2) {
  var n2 = e2.nodeName, r2 = t2.nodeName, i2, a2;
  return n2 === r2 ? true : (i2 = n2.charCodeAt(0), a2 = r2.charCodeAt(0), i2 <= 90 && a2 >= 97 ? n2 === r2.toUpperCase() : a2 <= 90 && i2 >= 97 ? r2 === n2.toUpperCase() : false);
}
function u(e2, t2) {
  return !t2 || t2 === `http://www.w3.org/1999/xhtml` ? n.createElement(e2) : n.createElementNS(t2, e2);
}
function d(e2, t2) {
  for (var n2 = e2.firstChild; n2; ) {
    var r2 = n2.nextSibling;
    t2.appendChild(n2), n2 = r2;
  }
  return t2;
}
function f(e2, t2, n2) {
  e2[n2] !== t2[n2] && (e2[n2] = t2[n2], e2[n2] ? e2.setAttribute(n2, ``) : e2.removeAttribute(n2));
}
var p = { OPTION: function(e2, t2) {
  var n2 = e2.parentNode;
  if (n2) {
    var r2 = n2.nodeName.toUpperCase();
    r2 === `OPTGROUP` && (n2 = n2.parentNode, r2 = n2 && n2.nodeName.toUpperCase()), r2 === `SELECT` && !n2.hasAttribute(`multiple`) && (e2.hasAttribute(`selected`) && !t2.selected && (e2.setAttribute(`selected`, `selected`), e2.removeAttribute(`selected`)), n2.selectedIndex = -1);
  }
  f(e2, t2, `selected`);
}, INPUT: function(e2, t2) {
  f(e2, t2, `checked`), f(e2, t2, `disabled`), e2.value !== t2.value && (e2.value = t2.value), t2.hasAttribute(`value`) || e2.removeAttribute(`value`);
}, TEXTAREA: function(e2, t2) {
  var n2 = t2.value;
  e2.value !== n2 && (e2.value = n2);
  var r2 = e2.firstChild;
  if (r2) {
    var i2 = r2.nodeValue;
    if (i2 == n2 || !n2 && i2 == e2.placeholder) return;
    r2.nodeValue = n2;
  }
}, SELECT: function(e2, t2) {
  if (!t2.hasAttribute(`multiple`)) {
    for (var n2 = -1, r2 = 0, i2 = e2.firstChild, a2, o2; i2; ) if (o2 = i2.nodeName && i2.nodeName.toUpperCase(), o2 === `OPTGROUP`) a2 = i2, i2 = a2.firstChild, i2 || (i2 = a2.nextSibling, a2 = null);
    else {
      if (o2 === `OPTION`) {
        if (i2.hasAttribute(`selected`)) {
          n2 = r2;
          break;
        }
        r2++;
      }
      i2 = i2.nextSibling, !i2 && a2 && (i2 = a2.nextSibling, a2 = null);
    }
    e2.selectedIndex = n2;
  }
} }, m = 1, h = 11, g = 3, _ = 8;
function v() {
}
function y(e2) {
  if (e2) return e2.getAttribute && e2.getAttribute(`id`) || e2.id;
}
function b(e2) {
  return function(t2, r2, i2) {
    if (i2 ||= {}, typeof r2 == `string`) if (t2.nodeName === `#document` || t2.nodeName === `HTML`) {
      var a2 = r2;
      r2 = n.createElement(`html`), r2.innerHTML = a2;
    } else if (t2.nodeName === `BODY`) {
      var o2 = r2;
      r2 = n.createElement(`html`), r2.innerHTML = o2;
      var s2 = r2.querySelector(`body`);
      s2 && (r2 = s2);
    } else r2 = c(r2);
    else r2.nodeType === h && (r2 = r2.firstElementChild);
    var f2 = i2.getNodeKey || y, b2 = i2.onBeforeNodeAdded || v, x2 = i2.onNodeAdded || v, S = i2.onBeforeElUpdated || v, C = i2.onElUpdated || v, w = i2.onBeforeNodeDiscarded || v, T = i2.onNodeDiscarded || v, E = i2.onBeforeElChildrenUpdated || v, D = i2.skipFromChildren || v, O = i2.addChild || function(e3, t3) {
      return e3.appendChild(t3);
    }, k = i2.childrenOnly === true, A = /* @__PURE__ */ Object.create(null), j = [];
    function M(e3) {
      j.push(e3);
    }
    function N(e3, t3) {
      if (e3.nodeType === m) for (var n2 = e3.firstChild; n2; ) {
        var r3 = void 0;
        t3 && (r3 = f2(n2)) ? M(r3) : (T(n2), n2.firstChild && N(n2, t3)), n2 = n2.nextSibling;
      }
    }
    function P(e3, t3, n2) {
      w(e3) !== false && (t3 && t3.removeChild(e3), T(e3), N(e3, n2));
    }
    function F(e3) {
      if (e3.nodeType === m || e3.nodeType === h) for (var t3 = e3.firstChild; t3; ) {
        var n2 = f2(t3);
        n2 && (A[n2] = t3), F(t3), t3 = t3.nextSibling;
      }
    }
    F(t2);
    function I(e3) {
      x2(e3);
      for (var t3 = e3.firstChild; t3; ) {
        var n2 = t3.nextSibling, r3 = f2(t3);
        if (r3) {
          var i3 = A[r3];
          i3 && l(t3, i3) ? (t3.parentNode.replaceChild(i3, t3), R(i3, t3)) : I(t3);
        } else I(t3);
        t3 = n2;
      }
    }
    function L(e3, t3, n2) {
      for (; t3; ) {
        var r3 = t3.nextSibling;
        (n2 = f2(t3)) ? M(n2) : P(t3, e3, true), t3 = r3;
      }
    }
    function R(t3, n2, r3) {
      var i3 = f2(n2);
      if (i3 && delete A[i3], !r3) {
        var a3 = S(t3, n2);
        if (a3 === false || (a3 instanceof HTMLElement && (t3 = a3, F(t3)), e2(t3, n2), C(t3), E(t3, n2) === false)) return;
      }
      t3.nodeName === `TEXTAREA` ? p.TEXTAREA(t3, n2) : z(t3, n2);
    }
    function z(e3, t3) {
      var r3 = D(e3, t3), i3 = t3.firstChild, a3 = e3.firstChild, o3, s3, c2, u2, d2;
      outer: for (; i3; ) {
        for (u2 = i3.nextSibling, o3 = f2(i3); !r3 && a3; ) {
          if (c2 = a3.nextSibling, i3.isSameNode && i3.isSameNode(a3)) {
            i3 = u2, a3 = c2;
            continue outer;
          }
          s3 = f2(a3);
          var h2 = a3.nodeType, v2 = void 0;
          if (h2 === i3.nodeType && (h2 === m ? (o3 ? o3 !== s3 && ((d2 = A[o3]) ? c2 === d2 ? v2 = false : (e3.insertBefore(d2, a3), s3 ? M(s3) : P(a3, e3, true), a3 = d2, s3 = f2(a3)) : v2 = false) : s3 && (v2 = false), v2 = v2 !== false && l(a3, i3), v2 && R(a3, i3)) : (h2 === g || h2 == _) && (v2 = true, a3.nodeValue !== i3.nodeValue && (a3.nodeValue = i3.nodeValue))), v2) {
            i3 = u2, a3 = c2;
            continue outer;
          }
          s3 ? M(s3) : P(a3, e3, true), a3 = c2;
        }
        if (o3 && (d2 = A[o3]) && l(d2, i3)) r3 || O(e3, d2), R(d2, i3);
        else {
          var y2 = b2(i3);
          y2 !== false && (y2 && (i3 = y2), i3.actualize && (i3 = i3.actualize(e3.ownerDocument || n)), O(e3, i3), I(i3));
        }
        i3 = u2, a3 = c2;
      }
      L(e3, a3, s3);
      var x3 = p[e3.nodeName];
      x3 && x3(e3, t3);
    }
    var B = t2, V = B.nodeType, H = r2.nodeType;
    if (!k) {
      if (V === m) H === m ? l(t2, r2) || (T(t2), B = d(t2, u(r2.nodeName, r2.namespaceURI))) : B = r2;
      else if (V === g || V === _) {
        if (H === V) return B.nodeValue !== r2.nodeValue && (B.nodeValue = r2.nodeValue), B;
        B = r2;
      }
    }
    if (B === r2) T(t2);
    else {
      if (r2.isSameNode && r2.isSameNode(B)) return;
      if (R(B, r2, k), j) for (var U = 0, W = j.length; U < W; U++) {
        var G = A[j[U]];
        G && P(G, G.parentNode, false);
      }
    }
    return !k && B !== t2 && t2.parentNode && (B.actualize && (B = B.actualize(t2.ownerDocument || n)), t2.parentNode.replaceChild(B, t2)), B;
  };
}
var x = b(e);
export {
  x as default
};
