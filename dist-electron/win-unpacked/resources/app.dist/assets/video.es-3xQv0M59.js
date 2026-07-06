import { n as e, t } from "./rolldown-runtime-Bh1tDfsg.js";
var n = t(((e14, t2) => {
  t2.exports = typeof window < `u` ? window : typeof global < `u` ? global : typeof self < `u` ? self : {};
})), r = t(((e14, t2) => {
  t2.exports = {};
})), i = t(((e14, t2) => {
  var n2 = typeof global < `u` ? global : typeof window < `u` ? window : {}, i2 = r(), a2;
  typeof document < `u` ? a2 = document : (a2 = n2[`__GLOBAL_DOCUMENT_CACHE@4`], a2 ||= n2[`__GLOBAL_DOCUMENT_CACHE@4`] = i2), t2.exports = a2;
})), a = t(((e14, t2) => {
  function n2(e15) {
    if (e15 && typeof e15 == `object`) {
      var t3 = e15.which || e15.keyCode || e15.charCode;
      t3 && (e15 = t3);
    }
    if (typeof e15 == `number`) return o2[e15];
    var n3 = String(e15), a3 = r2[n3.toLowerCase()];
    if (a3) return a3;
    var a3 = i2[n3.toLowerCase()];
    if (a3) return a3;
    if (n3.length === 1) return n3.charCodeAt(0);
  }
  n2.isEventKey = function(e15, t3) {
    if (e15 && typeof e15 == `object`) {
      var n3 = e15.which || e15.keyCode || e15.charCode;
      if (n3 == null) return false;
      if (typeof t3 == `string`) {
        var a3 = r2[t3.toLowerCase()];
        if (a3) return a3 === n3;
        var a3 = i2[t3.toLowerCase()];
        if (a3) return a3 === n3;
      } else if (typeof t3 == `number`) return t3 === n3;
      return false;
    }
  }, e14 = t2.exports = n2;
  var r2 = e14.code = e14.codes = { backspace: 8, tab: 9, enter: 13, shift: 16, ctrl: 17, alt: 18, "pause/break": 19, "caps lock": 20, esc: 27, space: 32, "page up": 33, "page down": 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40, insert: 45, delete: 46, command: 91, "left command": 91, "right command": 93, "numpad *": 106, "numpad +": 107, "numpad -": 109, "numpad .": 110, "numpad /": 111, "num lock": 144, "scroll lock": 145, "my computer": 182, "my calculator": 183, ";": 186, "=": 187, ",": 188, "-": 189, ".": 190, "/": 191, "`": 192, "[": 219, "\\": 220, "]": 221, "'": 222 }, i2 = e14.aliases = { windows: 91, "\u21E7": 16, "\u2325": 18, "\u2303": 17, "\u2318": 91, ctl: 17, control: 17, option: 18, pause: 19, break: 19, caps: 20, return: 13, escape: 27, spc: 32, spacebar: 32, pgup: 33, pgdn: 34, ins: 45, del: 46, cmd: 91 };
  for (a2 = 97; a2 < 123; a2++) r2[String.fromCharCode(a2)] = a2 - 32;
  for (var a2 = 48; a2 < 58; a2++) r2[a2 - 48] = a2;
  for (a2 = 1; a2 < 13; a2++) r2[`f` + a2] = a2 + 111;
  for (a2 = 0; a2 < 10; a2++) r2[`numpad ` + a2] = a2 + 96;
  var o2 = e14.names = e14.title = {};
  for (a2 in r2) o2[r2[a2]] = a2;
  for (var s2 in i2) r2[s2] = i2[s2];
})), o = t(((e14, t2) => {
  t2.exports = n2;
  function n2(e15, t3) {
    var n3, r2 = null;
    try {
      n3 = JSON.parse(e15, t3);
    } catch (e16) {
      r2 = e16;
    }
    return [r2, n3];
  }
})), s = t(((e14, t2) => {
  function n2() {
    return t2.exports = n2 = Object.assign ? Object.assign.bind() : function(e15) {
      for (var t3 = 1; t3 < arguments.length; t3++) {
        var n3 = arguments[t3];
        for (var r2 in n3) ({}).hasOwnProperty.call(n3, r2) && (e15[r2] = n3[r2]);
      }
      return e15;
    }, t2.exports.__esModule = true, t2.exports.default = t2.exports, n2.apply(null, arguments);
  }
  t2.exports = n2, t2.exports.__esModule = true, t2.exports.default = t2.exports;
})), c = t(((e14, t2) => {
  t2.exports = r2;
  var n2 = Object.prototype.toString;
  function r2(e15) {
    if (!e15) return false;
    var t3 = n2.call(e15);
    return t3 === `[object Function]` || typeof e15 == `function` && t3 !== `[object RegExp]` || typeof window < `u` && (e15 === window.setTimeout || e15 === window.alert || e15 === window.confirm || e15 === window.prompt);
  }
})), l = t(((e14, t2) => {
  var r2 = n(), i2 = function(e15, t3) {
    return t3 === void 0 && (t3 = false), function(n2, i3, o2) {
      if (n2) {
        e15(n2);
        return;
      }
      if (i3.statusCode >= 400 && i3.statusCode <= 599) {
        var s2 = o2;
        if (t3) if (r2.TextDecoder) {
          var c2 = a2(i3.headers && i3.headers[`content-type`]);
          try {
            s2 = new TextDecoder(c2).decode(o2);
          } catch {
          }
        } else s2 = String.fromCharCode.apply(null, new Uint8Array(o2));
        e15({ cause: s2 });
        return;
      }
      e15(null, o2);
    };
  };
  function a2(e15) {
    return e15 === void 0 && (e15 = ``), e15.toLowerCase().split(`;`).reduce(function(e16, t3) {
      var n2 = t3.split(`=`), r3 = n2[0], i3 = n2[1];
      return r3.trim() === `charset` ? i3.trim() : e16;
    }, `utf-8`);
  }
  t2.exports = i2;
})), u = t(((e14, t2) => {
  var r2 = n(), i2 = s(), a2 = c();
  p2.httpHandler = l();
  var o2 = function(e15) {
    var t3 = {};
    return e15 && e15.trim().split(`
`).forEach(function(e16) {
      var n2 = e16.indexOf(`:`), r3 = e16.slice(0, n2).trim().toLowerCase(), i3 = e16.slice(n2 + 1).trim();
      t3[r3] === void 0 ? t3[r3] = i3 : Array.isArray(t3[r3]) ? t3[r3].push(i3) : t3[r3] = [t3[r3], i3];
    }), t3;
  };
  t2.exports = p2, t2.exports.default = p2, p2.XMLHttpRequest = r2.XMLHttpRequest || g2, p2.XDomainRequest = `withCredentials` in new p2.XMLHttpRequest() ? p2.XMLHttpRequest : r2.XDomainRequest, u2([`get`, `put`, `post`, `patch`, `head`, `delete`], function(e15) {
    p2[e15 === `delete` ? `del` : e15] = function(t3, n2, r3) {
      return n2 = f2(t3, n2, r3), n2.method = e15.toUpperCase(), m2(n2);
    };
  });
  function u2(e15, t3) {
    for (var n2 = 0; n2 < e15.length; n2++) t3(e15[n2]);
  }
  function d2(e15) {
    for (var t3 in e15) if (e15.hasOwnProperty(t3)) return false;
    return true;
  }
  function f2(e15, t3, n2) {
    var r3 = e15;
    return a2(t3) ? (n2 = t3, typeof e15 == `string` && (r3 = { uri: e15 })) : r3 = i2({}, t3, { uri: e15 }), r3.callback = n2, r3;
  }
  function p2(e15, t3, n2) {
    return t3 = f2(e15, t3, n2), m2(t3);
  }
  function m2(e15) {
    if (e15.callback === void 0) throw Error(`callback argument missing`);
    var t3 = false, n2 = function(n3, r4, i4) {
      t3 || (t3 = true, e15.callback(n3, r4, i4));
    };
    function r3() {
      c2.readyState === 4 && setTimeout(s2, 0);
    }
    function i3() {
      var e16 = void 0;
      if (e16 = c2.response ? c2.response : c2.responseText || h2(c2), y2) try {
        e16 = JSON.parse(e16);
      } catch {
      }
      return e16;
    }
    function a3(e16) {
      return clearTimeout(b2), e16 instanceof Error || (e16 = Error(`` + (e16 || `Unknown XMLHttpRequest Error`))), e16.statusCode = 0, n2(e16, x2);
    }
    function s2() {
      if (!u3) {
        var t4;
        clearTimeout(b2), t4 = e15.useXDR && c2.status === void 0 ? 200 : c2.status === 1223 ? 204 : c2.status;
        var r4 = x2, a4 = null;
        return t4 === 0 ? a4 = Error(`Internal XMLHttpRequest Error`) : (r4 = { body: i3(), statusCode: t4, method: m3, headers: {}, url: f3, rawRequest: c2 }, c2.getAllResponseHeaders && (r4.headers = o2(c2.getAllResponseHeaders()))), n2(a4, r4, r4.body);
      }
    }
    var c2 = e15.xhr || null;
    c2 ||= e15.cors || e15.useXDR ? new p2.XDomainRequest() : new p2.XMLHttpRequest();
    var l2, u3, f3 = c2.url = e15.uri || e15.url, m3 = c2.method = e15.method || `GET`, g3 = e15.body || e15.data, _2 = c2.headers = e15.headers || {}, v2 = !!e15.sync, y2 = false, b2, x2 = { body: void 0, headers: {}, statusCode: 0, method: m3, url: f3, rawRequest: c2 };
    if (`json` in e15 && e15.json !== false && (y2 = true, _2.accept || _2.Accept || (_2.Accept = `application/json`), m3 !== `GET` && m3 !== `HEAD` && (_2[`content-type`] || _2[`Content-Type`] || (_2[`Content-Type`] = `application/json`), g3 = JSON.stringify(e15.json === true ? g3 : e15.json))), c2.onreadystatechange = r3, c2.onload = s2, c2.onerror = a3, c2.onprogress = function() {
    }, c2.onabort = function() {
      u3 = true;
    }, c2.ontimeout = a3, c2.open(m3, f3, !v2, e15.username, e15.password), v2 || (c2.withCredentials = !!e15.withCredentials), !v2 && e15.timeout > 0 && (b2 = setTimeout(function() {
      if (!u3) {
        u3 = true, c2.abort(`timeout`);
        var e16 = Error(`XMLHttpRequest timeout`);
        e16.code = `ETIMEDOUT`, a3(e16);
      }
    }, e15.timeout)), c2.setRequestHeader) for (l2 in _2) _2.hasOwnProperty(l2) && c2.setRequestHeader(l2, _2[l2]);
    else if (e15.headers && !d2(e15.headers)) throw Error(`Headers cannot be set on an XDomainRequest object`);
    return `responseType` in e15 && (c2.responseType = e15.responseType), `beforeSend` in e15 && typeof e15.beforeSend == `function` && e15.beforeSend(c2), c2.send(g3 || null), c2;
  }
  function h2(e15) {
    try {
      if (e15.responseType === `document`) return e15.responseXML;
      var t3 = e15.responseXML && e15.responseXML.documentElement.nodeName === `parsererror`;
      if (e15.responseType === `` && !t3) return e15.responseXML;
    } catch {
    }
    return null;
  }
  function g2() {
  }
})), d = t(((e14, t2) => {
  var n2 = i(), r2 = Object.create || /* @__PURE__ */ (function() {
    function e15() {
    }
    return function(t3) {
      if (arguments.length !== 1) throw Error(`Object.create shim only accepts one parameter.`);
      return e15.prototype = t3, new e15();
    };
  })();
  function a2(e15, t3) {
    this.name = `ParsingError`, this.code = e15.code, this.message = t3 || e15.message;
  }
  a2.prototype = r2(Error.prototype), a2.prototype.constructor = a2, a2.Errors = { BadSignature: { code: 0, message: `Malformed WebVTT signature.` }, BadTimeStamp: { code: 1, message: `Malformed time stamp.` } };
  function o2(e15) {
    function t3(e16, t4, n4, r3) {
      return (e16 | 0) * 3600 + (t4 | 0) * 60 + (n4 | 0) + (r3 | 0) / 1e3;
    }
    var n3 = e15.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/);
    return n3 ? n3[3] ? t3(n3[1], n3[2], n3[3].replace(`:`, ``), n3[4]) : n3[1] > 59 ? t3(n3[1], n3[2], 0, n3[4]) : t3(0, n3[1], n3[2], n3[4]) : null;
  }
  function s2() {
    this.values = r2(null);
  }
  s2.prototype = { set: function(e15, t3) {
    !this.get(e15) && t3 !== `` && (this.values[e15] = t3);
  }, get: function(e15, t3, n3) {
    return n3 ? this.has(e15) ? this.values[e15] : t3[n3] : this.has(e15) ? this.values[e15] : t3;
  }, has: function(e15) {
    return e15 in this.values;
  }, alt: function(e15, t3, n3) {
    for (var r3 = 0; r3 < n3.length; ++r3) if (t3 === n3[r3]) {
      this.set(e15, t3);
      break;
    }
  }, integer: function(e15, t3) {
    /^-?\d+$/.test(t3) && this.set(e15, parseInt(t3, 10));
  }, percent: function(e15, t3) {
    return t3.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t3 = parseFloat(t3), t3 >= 0 && t3 <= 100) ? (this.set(e15, t3), true) : false;
  } };
  function c2(e15, t3, n3, r3) {
    var i2 = r3 ? e15.split(r3) : [e15];
    for (var a3 in i2) if (typeof i2[a3] == `string`) {
      var o3 = i2[a3].split(n3);
      o3.length === 2 && t3(o3[0].trim(), o3[1].trim());
    }
  }
  function l2(e15, t3, n3) {
    var r3 = e15;
    function i2() {
      var t4 = o2(e15);
      if (t4 === null) throw new a2(a2.Errors.BadTimeStamp, `Malformed timestamp: ` + r3);
      return e15 = e15.replace(/^[^\sa-zA-Z-]+/, ``), t4;
    }
    function l3(e16, t4) {
      var r4 = new s2();
      c2(e16, function(e17, t5) {
        switch (e17) {
          case `region`:
            for (var i3 = n3.length - 1; i3 >= 0; i3--) if (n3[i3].id === t5) {
              r4.set(e17, n3[i3].region);
              break;
            }
            break;
          case `vertical`:
            r4.alt(e17, t5, [`rl`, `lr`]);
            break;
          case `line`:
            var a3 = t5.split(`,`), o3 = a3[0];
            r4.integer(e17, o3), r4.percent(e17, o3) && r4.set(`snapToLines`, false), r4.alt(e17, o3, [`auto`]), a3.length === 2 && r4.alt(`lineAlign`, a3[1], [`start`, `center`, `end`]);
            break;
          case `position`:
            a3 = t5.split(`,`), r4.percent(e17, a3[0]), a3.length === 2 && r4.alt(`positionAlign`, a3[1], [`start`, `center`, `end`]);
            break;
          case `size`:
            r4.percent(e17, t5);
            break;
          case `align`:
            r4.alt(e17, t5, [`start`, `center`, `end`, `left`, `right`]);
            break;
        }
      }, /:/, /\s/), t4.region = r4.get(`region`, null), t4.vertical = r4.get(`vertical`, ``);
      try {
        t4.line = r4.get(`line`, `auto`);
      } catch {
      }
      t4.lineAlign = r4.get(`lineAlign`, `start`), t4.snapToLines = r4.get(`snapToLines`, true), t4.size = r4.get(`size`, 100);
      try {
        t4.align = r4.get(`align`, `center`);
      } catch {
        t4.align = r4.get(`align`, `middle`);
      }
      try {
        t4.position = r4.get(`position`, `auto`);
      } catch {
        t4.position = r4.get(`position`, { start: 0, left: 0, center: 50, middle: 50, end: 100, right: 100 }, t4.align);
      }
      t4.positionAlign = r4.get(`positionAlign`, { start: `start`, left: `start`, center: `center`, middle: `center`, end: `end`, right: `end` }, t4.align);
    }
    function u3() {
      e15 = e15.replace(/^\s+/, ``);
    }
    if (u3(), t3.startTime = i2(), u3(), e15.substr(0, 3) !== `-->`) throw new a2(a2.Errors.BadTimeStamp, `Malformed time stamp (time stamps must be separated by '-->'): ` + r3);
    e15 = e15.substr(3), u3(), t3.endTime = i2(), u3(), l3(e15, t3);
  }
  var u2 = n2.createElement && n2.createElement(`textarea`), d2 = { c: `span`, i: `i`, b: `b`, u: `u`, ruby: `ruby`, rt: `rt`, v: `span`, lang: `span` }, f2 = { white: `rgba(255,255,255,1)`, lime: `rgba(0,255,0,1)`, cyan: `rgba(0,255,255,1)`, red: `rgba(255,0,0,1)`, yellow: `rgba(255,255,0,1)`, magenta: `rgba(255,0,255,1)`, blue: `rgba(0,0,255,1)`, black: `rgba(0,0,0,1)` }, p2 = { v: `title`, lang: `lang` }, m2 = { rt: `ruby` };
  function h2(e15, t3) {
    function n3() {
      if (!t3) return null;
      function e16(e17) {
        return t3 = t3.substr(e17.length), e17;
      }
      var n4 = t3.match(/^([^<]*)(<[^>]*>?)?/);
      return e16(n4[1] ? n4[1] : n4[2]);
    }
    function r3(e16) {
      return u2.innerHTML = e16, e16 = u2.textContent, u2.textContent = ``, e16;
    }
    function i2(e16, t4) {
      return !m2[t4.localName] || m2[t4.localName] === e16.localName;
    }
    function a3(t4, n4) {
      var r4 = d2[t4];
      if (!r4) return null;
      var i3 = e15.document.createElement(r4), a4 = p2[t4];
      return a4 && n4 && (i3[a4] = n4.trim()), i3;
    }
    for (var s3 = e15.document.createElement(`div`), c3 = s3, l3, h3 = []; (l3 = n3()) !== null; ) {
      if (l3[0] === `<`) {
        if (l3[1] === `/`) {
          h3.length && h3[h3.length - 1] === l3.substr(2).replace(`>`, ``) && (h3.pop(), c3 = c3.parentNode);
          continue;
        }
        var g3 = o2(l3.substr(1, l3.length - 2)), _3;
        if (g3) {
          _3 = e15.document.createProcessingInstruction(`timestamp`, g3), c3.appendChild(_3);
          continue;
        }
        var v3 = l3.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
        if (!v3 || (_3 = a3(v3[1], v3[3]), !_3) || !i2(c3, _3)) continue;
        if (v3[2]) {
          var y3 = v3[2].split(`.`);
          y3.forEach(function(e16) {
            var t4 = /^bg_/.test(e16), n4 = t4 ? e16.slice(3) : e16;
            if (f2.hasOwnProperty(n4)) {
              var r4 = t4 ? `background-color` : `color`, i3 = f2[n4];
              _3.style[r4] = i3;
            }
          }), _3.className = y3.join(` `);
        }
        h3.push(v3[1]), c3.appendChild(_3), c3 = _3;
        continue;
      }
      c3.appendChild(e15.document.createTextNode(r3(l3)));
    }
    return s3;
  }
  var g2 = [[1470, 1470], [1472, 1472], [1475, 1475], [1478, 1478], [1488, 1514], [1520, 1524], [1544, 1544], [1547, 1547], [1549, 1549], [1563, 1563], [1566, 1610], [1645, 1647], [1649, 1749], [1765, 1766], [1774, 1775], [1786, 1805], [1807, 1808], [1810, 1839], [1869, 1957], [1969, 1969], [1984, 2026], [2036, 2037], [2042, 2042], [2048, 2069], [2074, 2074], [2084, 2084], [2088, 2088], [2096, 2110], [2112, 2136], [2142, 2142], [2208, 2208], [2210, 2220], [8207, 8207], [64285, 64285], [64287, 64296], [64298, 64310], [64312, 64316], [64318, 64318], [64320, 64321], [64323, 64324], [64326, 64449], [64467, 64829], [64848, 64911], [64914, 64967], [65008, 65020], [65136, 65140], [65142, 65276], [67584, 67589], [67592, 67592], [67594, 67637], [67639, 67640], [67644, 67644], [67647, 67669], [67671, 67679], [67840, 67867], [67872, 67897], [67903, 67903], [67968, 68023], [68030, 68031], [68096, 68096], [68112, 68115], [68117, 68119], [68121, 68147], [68160, 68167], [68176, 68184], [68192, 68223], [68352, 68405], [68416, 68437], [68440, 68466], [68472, 68479], [68608, 68680], [126464, 126467], [126469, 126495], [126497, 126498], [126500, 126500], [126503, 126503], [126505, 126514], [126516, 126519], [126521, 126521], [126523, 126523], [126530, 126530], [126535, 126535], [126537, 126537], [126539, 126539], [126541, 126543], [126545, 126546], [126548, 126548], [126551, 126551], [126553, 126553], [126555, 126555], [126557, 126557], [126559, 126559], [126561, 126562], [126564, 126564], [126567, 126570], [126572, 126578], [126580, 126583], [126585, 126588], [126590, 126590], [126592, 126601], [126603, 126619], [126625, 126627], [126629, 126633], [126635, 126651], [1114109, 1114109]];
  function _2(e15) {
    for (var t3 = 0; t3 < g2.length; t3++) {
      var n3 = g2[t3];
      if (e15 >= n3[0] && e15 <= n3[1]) return true;
    }
    return false;
  }
  function v2(e15) {
    var t3 = [], n3 = ``, r3;
    if (!e15 || !e15.childNodes) return `ltr`;
    function i2(e16, t4) {
      for (var n4 = t4.childNodes.length - 1; n4 >= 0; n4--) e16.push(t4.childNodes[n4]);
    }
    function a3(e16) {
      if (!e16 || !e16.length) return null;
      var t4 = e16.pop(), n4 = t4.textContent || t4.innerText;
      if (n4) {
        var r4 = n4.match(/^.*(\n|\r)/);
        return r4 ? (e16.length = 0, r4[0]) : n4;
      }
      if (t4.tagName === `ruby`) return a3(e16);
      if (t4.childNodes) return i2(e16, t4), a3(e16);
    }
    for (i2(t3, e15); n3 = a3(t3); ) for (var o3 = 0; o3 < n3.length; o3++) if (r3 = n3.charCodeAt(o3), _2(r3)) return `rtl`;
    return `ltr`;
  }
  function y2(e15) {
    if (typeof e15.line == `number` && (e15.snapToLines || e15.line >= 0 && e15.line <= 100)) return e15.line;
    if (!e15.track || !e15.track.textTrackList || !e15.track.textTrackList.mediaElement) return -1;
    for (var t3 = e15.track, n3 = t3.textTrackList, r3 = 0, i2 = 0; i2 < n3.length && n3[i2] !== t3; i2++) n3[i2].mode === `showing` && r3++;
    return ++r3 * -1;
  }
  function b2() {
  }
  b2.prototype.applyStyles = function(e15, t3) {
    for (var n3 in t3 ||= this.div, e15) e15.hasOwnProperty(n3) && (t3.style[n3] = e15[n3]);
  }, b2.prototype.formatStyle = function(e15, t3) {
    return e15 === 0 ? 0 : e15 + t3;
  };
  function x2(e15, t3, n3) {
    b2.call(this), this.cue = t3, this.cueDiv = h2(e15, t3.text);
    var r3 = { color: `rgba(255, 255, 255, 1)`, backgroundColor: `rgba(0, 0, 0, 0.8)`, position: `relative`, left: 0, right: 0, top: 0, bottom: 0, display: `inline`, writingMode: t3.vertical === `` ? `horizontal-tb` : t3.vertical === `lr` ? `vertical-lr` : `vertical-rl`, unicodeBidi: `plaintext` };
    this.applyStyles(r3, this.cueDiv), this.div = e15.document.createElement(`div`), r3 = { direction: v2(this.cueDiv), writingMode: t3.vertical === `` ? `horizontal-tb` : t3.vertical === `lr` ? `vertical-lr` : `vertical-rl`, unicodeBidi: `plaintext`, textAlign: t3.align === `middle` ? `center` : t3.align, font: n3.font, whiteSpace: `pre-line`, position: `absolute` }, this.applyStyles(r3), this.div.appendChild(this.cueDiv);
    var i2 = 0;
    switch (t3.positionAlign) {
      case `start`:
      case `line-left`:
        i2 = t3.position;
        break;
      case `center`:
        i2 = t3.position - t3.size / 2;
        break;
      case `end`:
      case `line-right`:
        i2 = t3.position - t3.size;
        break;
    }
    t3.vertical === `` ? this.applyStyles({ left: this.formatStyle(i2, `%`), width: this.formatStyle(t3.size, `%`) }) : this.applyStyles({ top: this.formatStyle(i2, `%`), height: this.formatStyle(t3.size, `%`) }), this.move = function(e16) {
      this.applyStyles({ top: this.formatStyle(e16.top, `px`), bottom: this.formatStyle(e16.bottom, `px`), left: this.formatStyle(e16.left, `px`), right: this.formatStyle(e16.right, `px`), height: this.formatStyle(e16.height, `px`), width: this.formatStyle(e16.width, `px`) });
    };
  }
  x2.prototype = r2(b2.prototype), x2.prototype.constructor = x2;
  function S2(e15) {
    var t3, n3, r3, i2;
    if (e15.div) {
      n3 = e15.div.offsetHeight, r3 = e15.div.offsetWidth, i2 = e15.div.offsetTop;
      var a3 = (a3 = e15.div.childNodes) && (a3 = a3[0]) && a3.getClientRects && a3.getClientRects();
      e15 = e15.div.getBoundingClientRect(), t3 = a3 ? Math.max(a3[0] && a3[0].height || 0, e15.height / a3.length) : 0;
    }
    this.left = e15.left, this.right = e15.right, this.top = e15.top || i2, this.height = e15.height || n3, this.bottom = e15.bottom || i2 + (e15.height || n3), this.width = e15.width || r3, this.lineHeight = t3 === void 0 ? e15.lineHeight : t3;
  }
  S2.prototype.move = function(e15, t3) {
    switch (t3 = t3 === void 0 ? this.lineHeight : t3, e15) {
      case `+x`:
        this.left += t3, this.right += t3;
        break;
      case `-x`:
        this.left -= t3, this.right -= t3;
        break;
      case `+y`:
        this.top += t3, this.bottom += t3;
        break;
      case `-y`:
        this.top -= t3, this.bottom -= t3;
        break;
    }
  }, S2.prototype.overlaps = function(e15) {
    return this.left < e15.right && this.right > e15.left && this.top < e15.bottom && this.bottom > e15.top;
  }, S2.prototype.overlapsAny = function(e15) {
    for (var t3 = 0; t3 < e15.length; t3++) if (this.overlaps(e15[t3])) return true;
    return false;
  }, S2.prototype.within = function(e15) {
    return this.top >= e15.top && this.bottom <= e15.bottom && this.left >= e15.left && this.right <= e15.right;
  }, S2.prototype.overlapsOppositeAxis = function(e15, t3) {
    switch (t3) {
      case `+x`:
        return this.left < e15.left;
      case `-x`:
        return this.right > e15.right;
      case `+y`:
        return this.top < e15.top;
      case `-y`:
        return this.bottom > e15.bottom;
    }
  }, S2.prototype.intersectPercentage = function(e15) {
    return Math.max(0, Math.min(this.right, e15.right) - Math.max(this.left, e15.left)) * Math.max(0, Math.min(this.bottom, e15.bottom) - Math.max(this.top, e15.top)) / (this.height * this.width);
  }, S2.prototype.toCSSCompatValues = function(e15) {
    return { top: this.top - e15.top, bottom: e15.bottom - this.bottom, left: this.left - e15.left, right: e15.right - this.right, height: this.height, width: this.width };
  }, S2.getSimpleBoxPosition = function(e15) {
    var t3 = e15.div ? e15.div.offsetHeight : e15.tagName ? e15.offsetHeight : 0, n3 = e15.div ? e15.div.offsetWidth : e15.tagName ? e15.offsetWidth : 0, r3 = e15.div ? e15.div.offsetTop : e15.tagName ? e15.offsetTop : 0;
    return e15 = e15.div ? e15.div.getBoundingClientRect() : e15.tagName ? e15.getBoundingClientRect() : e15, { left: e15.left, right: e15.right, top: e15.top || r3, height: e15.height || t3, bottom: e15.bottom || r3 + (e15.height || t3), width: e15.width || n3 };
  };
  function ee2(e15, t3, n3, r3) {
    function i2(e16, t4) {
      for (var i3, a4 = new S2(e16), o4 = 1, s4 = 0; s4 < t4.length; s4++) {
        for (; e16.overlapsOppositeAxis(n3, t4[s4]) || e16.within(n3) && e16.overlapsAny(r3); ) e16.move(t4[s4]);
        if (e16.within(n3)) return e16;
        var c4 = e16.intersectPercentage(n3);
        o4 > c4 && (i3 = new S2(e16), o4 = c4), e16 = new S2(a4);
      }
      return i3 || a4;
    }
    var a3 = new S2(t3), o3 = t3.cue, s3 = y2(o3), c3 = [];
    if (o3.snapToLines) {
      var l3;
      switch (o3.vertical) {
        case ``:
          c3 = [`+y`, `-y`], l3 = `height`;
          break;
        case `rl`:
          c3 = [`+x`, `-x`], l3 = `width`;
          break;
        case `lr`:
          c3 = [`-x`, `+x`], l3 = `width`;
          break;
      }
      var u3 = a3.lineHeight, d3 = u3 * Math.round(s3), f3 = n3[l3] + u3, p3 = c3[0];
      Math.abs(d3) > f3 && (d3 = d3 < 0 ? -1 : 1, d3 *= Math.ceil(f3 / u3) * u3), s3 < 0 && (d3 += o3.vertical === `` ? n3.height : n3.width, c3 = c3.reverse()), a3.move(p3, d3);
    } else {
      var m3 = a3.lineHeight / n3.height * 100;
      switch (o3.lineAlign) {
        case `center`:
          s3 -= m3 / 2;
          break;
        case `end`:
          s3 -= m3;
          break;
      }
      switch (o3.vertical) {
        case ``:
          t3.applyStyles({ top: t3.formatStyle(s3, `%`) });
          break;
        case `rl`:
          t3.applyStyles({ left: t3.formatStyle(s3, `%`) });
          break;
        case `lr`:
          t3.applyStyles({ right: t3.formatStyle(s3, `%`) });
          break;
      }
      c3 = [`+y`, `-x`, `+x`, `-y`], a3 = new S2(t3);
    }
    var h3 = i2(a3, c3);
    t3.move(h3.toCSSCompatValues(n3));
  }
  function C2() {
  }
  C2.StringDecoder = function() {
    return { decode: function(e15) {
      if (!e15) return ``;
      if (typeof e15 != `string`) throw Error(`Error - expected string data.`);
      return decodeURIComponent(encodeURIComponent(e15));
    } };
  }, C2.convertCueToDOMTree = function(e15, t3) {
    return !e15 || !t3 ? null : h2(e15, t3);
  };
  var w2 = 0.05, T2 = `sans-serif`, te2 = `1.5%`;
  C2.processCues = function(e15, t3, n3) {
    if (!e15 || !t3 || !n3) return null;
    for (; n3.firstChild; ) n3.removeChild(n3.firstChild);
    var r3 = e15.document.createElement(`div`);
    r3.style.position = `absolute`, r3.style.left = `0`, r3.style.right = `0`, r3.style.top = `0`, r3.style.bottom = `0`, r3.style.margin = te2, n3.appendChild(r3);
    function i2(e16) {
      for (var t4 = 0; t4 < e16.length; t4++) if (e16[t4].hasBeenReset || !e16[t4].displayState) return true;
      return false;
    }
    if (!i2(t3)) {
      for (var a3 = 0; a3 < t3.length; a3++) r3.appendChild(t3[a3].displayState);
      return;
    }
    var o3 = [], s3 = S2.getSimpleBoxPosition(r3), c3 = { font: Math.round(s3.height * w2 * 100) / 100 + `px ` + T2 };
    (function() {
      for (var n4, i3, a4 = 0; a4 < t3.length; a4++) i3 = t3[a4], n4 = new x2(e15, i3, c3), r3.appendChild(n4.div), ee2(e15, n4, s3, o3), i3.displayState = n4.div, o3.push(S2.getSimpleBoxPosition(n4));
    })();
  }, C2.Parser = function(e15, t3, n3) {
    n3 || (n3 = t3, t3 = {}), t3 ||= {}, this.window = e15, this.vttjs = t3, this.state = `INITIAL`, this.buffer = ``, this.decoder = n3 || new TextDecoder(`utf8`), this.regionList = [];
  }, C2.Parser.prototype = { reportOrThrowError: function(e15) {
    if (e15 instanceof a2) this.onparsingerror && this.onparsingerror(e15);
    else throw e15;
  }, parse: function(e15) {
    var t3 = this;
    e15 && (t3.buffer += t3.decoder.decode(e15, { stream: true }));
    function n3() {
      for (var e16 = t3.buffer, n4 = 0; n4 < e16.length && e16[n4] !== `\r` && e16[n4] !== `
`; ) ++n4;
      var r4 = e16.substr(0, n4);
      return e16[n4] === `\r` && ++n4, e16[n4] === `
` && ++n4, t3.buffer = e16.substr(n4), r4;
    }
    function r3(e16) {
      var n4 = new s2();
      if (c2(e16, function(e17, t4) {
        switch (e17) {
          case `id`:
            n4.set(e17, t4);
            break;
          case `width`:
            n4.percent(e17, t4);
            break;
          case `lines`:
            n4.integer(e17, t4);
            break;
          case `regionanchor`:
          case `viewportanchor`:
            var r5 = t4.split(`,`);
            if (r5.length !== 2) break;
            var i3 = new s2();
            if (i3.percent(`x`, r5[0]), i3.percent(`y`, r5[1]), !i3.has(`x`) || !i3.has(`y`)) break;
            n4.set(e17 + `X`, i3.get(`x`)), n4.set(e17 + `Y`, i3.get(`y`));
            break;
          case `scroll`:
            n4.alt(e17, t4, [`up`]);
            break;
        }
      }, /=/, /\s/), n4.has(`id`)) {
        var r4 = new (t3.vttjs.VTTRegion || t3.window.VTTRegion)();
        r4.width = n4.get(`width`, 100), r4.lines = n4.get(`lines`, 3), r4.regionAnchorX = n4.get(`regionanchorX`, 0), r4.regionAnchorY = n4.get(`regionanchorY`, 100), r4.viewportAnchorX = n4.get(`viewportanchorX`, 0), r4.viewportAnchorY = n4.get(`viewportanchorY`, 100), r4.scroll = n4.get(`scroll`, ``), t3.onregion && t3.onregion(r4), t3.regionList.push({ id: n4.get(`id`), region: r4 });
      }
    }
    function i2(e16) {
      var n4 = new s2();
      c2(e16, function(e17, t4) {
        switch (e17) {
          case `MPEGT`:
            n4.integer(e17 + `S`, t4);
            break;
          case `LOCA`:
            n4.set(e17 + `L`, o2(t4));
            break;
        }
      }, /[^\d]:/, /,/), t3.ontimestampmap && t3.ontimestampmap({ MPEGTS: n4.get(`MPEGTS`), LOCAL: n4.get(`LOCAL`) });
    }
    function u3(e16) {
      e16.match(/X-TIMESTAMP-MAP/) ? c2(e16, function(e17, t4) {
        switch (e17) {
          case `X-TIMESTAMP-MAP`:
            i2(t4);
            break;
        }
      }, /=/) : c2(e16, function(e17, t4) {
        switch (e17) {
          case `Region`:
            r3(t4);
            break;
        }
      }, /:/);
    }
    try {
      var d3;
      if (t3.state === `INITIAL`) {
        if (!/\r\n|\n/.test(t3.buffer)) return this;
        d3 = n3();
        var f3 = d3.match(/^WEBVTT([ \t].*)?$/);
        if (!f3 || !f3[0]) throw new a2(a2.Errors.BadSignature);
        t3.state = `HEADER`;
      }
      for (var p3 = false; t3.buffer; ) {
        if (!/\r\n|\n/.test(t3.buffer)) return this;
        switch (p3 ? p3 = false : d3 = n3(), t3.state) {
          case `HEADER`:
            /:/.test(d3) ? u3(d3) : d3 || (t3.state = `ID`);
            continue;
          case `NOTE`:
            d3 || (t3.state = `ID`);
            continue;
          case `ID`:
            if (/^NOTE($|[ \t])/.test(d3)) {
              t3.state = `NOTE`;
              break;
            }
            if (!d3) continue;
            t3.cue = new (t3.vttjs.VTTCue || t3.window.VTTCue)(0, 0, ``);
            try {
              t3.cue.align = `center`;
            } catch {
              t3.cue.align = `middle`;
            }
            if (t3.state = `CUE`, d3.indexOf(`-->`) === -1) {
              t3.cue.id = d3;
              continue;
            }
          case `CUE`:
            try {
              l2(d3, t3.cue, t3.regionList);
            } catch (e16) {
              t3.reportOrThrowError(e16), t3.cue = null, t3.state = `BADCUE`;
              continue;
            }
            t3.state = `CUETEXT`;
            continue;
          case `CUETEXT`:
            var m3 = d3.indexOf(`-->`) !== -1;
            if (!d3 || m3 && (p3 = true)) {
              t3.oncue && t3.oncue(t3.cue), t3.cue = null, t3.state = `ID`;
              continue;
            }
            t3.cue.text && (t3.cue.text += `
`), t3.cue.text += d3.replace(/\u2028/g, `
`).replace(/u2029/g, `
`);
            continue;
          case `BADCUE`:
            d3 || (t3.state = `ID`);
            continue;
        }
      }
    } catch (e16) {
      t3.reportOrThrowError(e16), t3.state === `CUETEXT` && t3.cue && t3.oncue && t3.oncue(t3.cue), t3.cue = null, t3.state = t3.state === `INITIAL` ? `BADWEBVTT` : `BADCUE`;
    }
    return this;
  }, flush: function() {
    var e15 = this;
    try {
      if (e15.buffer += e15.decoder.decode(), (e15.cue || e15.state === `HEADER`) && (e15.buffer += `

`, e15.parse()), e15.state === `INITIAL`) throw new a2(a2.Errors.BadSignature);
    } catch (t3) {
      e15.reportOrThrowError(t3);
    }
    return e15.onflush && e15.onflush(), this;
  } }, t2.exports = C2;
})), f = t(((e14, t2) => {
  var n2 = { "": 1, lr: 1, rl: 1 }, r2 = { start: 1, center: 1, end: 1, left: 1, right: 1, auto: 1, "line-left": 1, "line-right": 1 };
  function i2(e15) {
    return typeof e15 == `string` && n2[e15.toLowerCase()] ? e15.toLowerCase() : false;
  }
  function a2(e15) {
    return typeof e15 == `string` && r2[e15.toLowerCase()] ? e15.toLowerCase() : false;
  }
  function o2(e15, t3, n3) {
    this.hasBeenReset = false;
    var r3 = ``, o3 = false, s2 = e15, c2 = t3, l2 = n3, u2 = null, d2 = ``, f2 = true, p2 = `auto`, m2 = `start`, h2 = `auto`, g2 = `auto`, _2 = 100, v2 = `center`;
    Object.defineProperties(this, { id: { enumerable: true, get: function() {
      return r3;
    }, set: function(e16) {
      r3 = `` + e16;
    } }, pauseOnExit: { enumerable: true, get: function() {
      return o3;
    }, set: function(e16) {
      o3 = !!e16;
    } }, startTime: { enumerable: true, get: function() {
      return s2;
    }, set: function(e16) {
      if (typeof e16 != `number`) throw TypeError(`Start time must be set to a number.`);
      s2 = e16, this.hasBeenReset = true;
    } }, endTime: { enumerable: true, get: function() {
      return c2;
    }, set: function(e16) {
      if (typeof e16 != `number`) throw TypeError(`End time must be set to a number.`);
      c2 = e16, this.hasBeenReset = true;
    } }, text: { enumerable: true, get: function() {
      return l2;
    }, set: function(e16) {
      l2 = `` + e16, this.hasBeenReset = true;
    } }, region: { enumerable: true, get: function() {
      return u2;
    }, set: function(e16) {
      u2 = e16, this.hasBeenReset = true;
    } }, vertical: { enumerable: true, get: function() {
      return d2;
    }, set: function(e16) {
      var t4 = i2(e16);
      if (t4 === false) throw SyntaxError(`Vertical: an invalid or illegal direction string was specified.`);
      d2 = t4, this.hasBeenReset = true;
    } }, snapToLines: { enumerable: true, get: function() {
      return f2;
    }, set: function(e16) {
      f2 = !!e16, this.hasBeenReset = true;
    } }, line: { enumerable: true, get: function() {
      return p2;
    }, set: function(e16) {
      if (typeof e16 != `number` && e16 !== `auto`) throw SyntaxError(`Line: an invalid number or illegal string was specified.`);
      p2 = e16, this.hasBeenReset = true;
    } }, lineAlign: { enumerable: true, get: function() {
      return m2;
    }, set: function(e16) {
      var t4 = a2(e16);
      t4 ? (m2 = t4, this.hasBeenReset = true) : console.warn(`lineAlign: an invalid or illegal string was specified.`);
    } }, position: { enumerable: true, get: function() {
      return h2;
    }, set: function(e16) {
      if (e16 < 0 || e16 > 100) throw Error(`Position must be between 0 and 100.`);
      h2 = e16, this.hasBeenReset = true;
    } }, positionAlign: { enumerable: true, get: function() {
      return g2;
    }, set: function(e16) {
      var t4 = a2(e16);
      t4 ? (g2 = t4, this.hasBeenReset = true) : console.warn(`positionAlign: an invalid or illegal string was specified.`);
    } }, size: { enumerable: true, get: function() {
      return _2;
    }, set: function(e16) {
      if (e16 < 0 || e16 > 100) throw Error(`Size must be between 0 and 100.`);
      _2 = e16, this.hasBeenReset = true;
    } }, align: { enumerable: true, get: function() {
      return v2;
    }, set: function(e16) {
      var t4 = a2(e16);
      if (!t4) throw SyntaxError(`align: an invalid or illegal alignment string was specified.`);
      v2 = t4, this.hasBeenReset = true;
    } } }), this.displayState = void 0;
  }
  o2.prototype.getCueAsHTML = function() {
    return WebVTT.convertCueToDOMTree(window, this.text);
  }, t2.exports = o2;
})), p = t(((e14, t2) => {
  var n2 = { "": true, up: true };
  function r2(e15) {
    return typeof e15 == `string` && n2[e15.toLowerCase()] ? e15.toLowerCase() : false;
  }
  function i2(e15) {
    return typeof e15 == `number` && e15 >= 0 && e15 <= 100;
  }
  function a2() {
    var e15 = 100, t3 = 3, n3 = 0, a3 = 100, o2 = 0, s2 = 100, c2 = ``;
    Object.defineProperties(this, { width: { enumerable: true, get: function() {
      return e15;
    }, set: function(t4) {
      if (!i2(t4)) throw Error(`Width must be between 0 and 100.`);
      e15 = t4;
    } }, lines: { enumerable: true, get: function() {
      return t3;
    }, set: function(e16) {
      if (typeof e16 != `number`) throw TypeError(`Lines must be set to a number.`);
      t3 = e16;
    } }, regionAnchorY: { enumerable: true, get: function() {
      return a3;
    }, set: function(e16) {
      if (!i2(e16)) throw Error(`RegionAnchorX must be between 0 and 100.`);
      a3 = e16;
    } }, regionAnchorX: { enumerable: true, get: function() {
      return n3;
    }, set: function(e16) {
      if (!i2(e16)) throw Error(`RegionAnchorY must be between 0 and 100.`);
      n3 = e16;
    } }, viewportAnchorY: { enumerable: true, get: function() {
      return s2;
    }, set: function(e16) {
      if (!i2(e16)) throw Error(`ViewportAnchorY must be between 0 and 100.`);
      s2 = e16;
    } }, viewportAnchorX: { enumerable: true, get: function() {
      return o2;
    }, set: function(e16) {
      if (!i2(e16)) throw Error(`ViewportAnchorX must be between 0 and 100.`);
      o2 = e16;
    } }, scroll: { enumerable: true, get: function() {
      return c2;
    }, set: function(e16) {
      var t4 = r2(e16);
      t4 === false ? console.warn(`Scroll: an invalid or illegal string was specified.`) : c2 = t4;
    } } });
  }
  t2.exports = a2;
})), m = t(((e14, t2) => {
  var r2 = n(), i2 = t2.exports = { WebVTT: d(), VTTCue: f(), VTTRegion: p() };
  r2.vttjs = i2, r2.WebVTT = i2.WebVTT;
  var a2 = i2.VTTCue, o2 = i2.VTTRegion, s2 = r2.VTTCue, c2 = r2.VTTRegion;
  i2.shim = function() {
    r2.VTTCue = a2, r2.VTTRegion = o2;
  }, i2.restore = function() {
    r2.VTTCue = s2, r2.VTTRegion = c2;
  }, r2.VTTCue || i2.shim();
})), h = e(n()), g = e(i()), _ = e(a()), v = e(o()), y = e(u()), b = e(m());
function x() {
  return x = Object.assign ? Object.assign.bind() : function(e14) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2) ({}).hasOwnProperty.call(n2, r2) && (e14[r2] = n2[r2]);
    }
    return e14;
  }, x.apply(null, arguments);
}
var S = `https://example.com`, ee = function(e14, t2) {
  if (/^[a-z]+:/i.test(t2)) return t2;
  /^data:/.test(e14) && (e14 = h.default.location && h.default.location.href || ``);
  var n2 = /^\/\//.test(e14), r2 = !h.default.location && !/\/\//i.test(e14);
  e14 = new h.default.URL(e14, h.default.location || S);
  var i2 = new URL(t2, e14);
  return r2 ? i2.href.slice(S.length) : n2 ? i2.href.slice(i2.protocol.length) : i2.href;
}, C = (function() {
  function e14() {
    this.listeners = {};
  }
  var t2 = e14.prototype;
  return t2.on = function(e15, t3) {
    this.listeners[e15] || (this.listeners[e15] = []), this.listeners[e15].push(t3);
  }, t2.off = function(e15, t3) {
    if (!this.listeners[e15]) return false;
    var n2 = this.listeners[e15].indexOf(t3);
    return this.listeners[e15] = this.listeners[e15].slice(0), this.listeners[e15].splice(n2, 1), n2 > -1;
  }, t2.trigger = function(e15) {
    var t3 = this.listeners[e15];
    if (t3) if (arguments.length === 2) for (var n2 = t3.length, r2 = 0; r2 < n2; ++r2) t3[r2].call(this, arguments[1]);
    else for (var i2 = Array.prototype.slice.call(arguments, 1), a2 = t3.length, o2 = 0; o2 < a2; ++o2) t3[o2].apply(this, i2);
  }, t2.dispose = function() {
    this.listeners = {};
  }, t2.pipe = function(e15) {
    this.on(`data`, function(t3) {
      e15.push(t3);
    });
  }, e14;
})(), w = function(e14) {
  return h.default.atob ? h.default.atob(e14) : Buffer.from(e14, `base64`).toString(`binary`);
};
function T(e14) {
  for (var t2 = w(e14), n2 = new Uint8Array(t2.length), r2 = 0; r2 < t2.length; r2++) n2[r2] = t2.charCodeAt(r2);
  return n2;
}
var te = class extends C {
  constructor() {
    super(), this.buffer = ``;
  }
  push(e14) {
    let t2;
    for (this.buffer += e14, t2 = this.buffer.indexOf(`
`); t2 > -1; t2 = this.buffer.indexOf(`
`)) this.trigger(`data`, this.buffer.substring(0, t2)), this.buffer = this.buffer.substring(t2 + 1);
  }
}, E = `	`, D = function(e14) {
  let t2 = /([0-9.]*)?@?([0-9.]*)?/.exec(e14 || ``), n2 = {};
  return t2[1] && (n2.length = parseInt(t2[1], 10)), t2[2] && (n2.offset = parseInt(t2[2], 10)), n2;
}, ne = function() {
  return RegExp(`(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))`);
}, O = function(e14) {
  let t2 = {};
  if (!e14) return t2;
  let n2 = e14.split(ne()), r2 = n2.length, i2;
  for (; r2--; ) n2[r2] !== `` && (i2 = /([^=]*)=(.*)/.exec(n2[r2]).slice(1), i2[0] = i2[0].replace(/^\s+|\s+$/g, ``), i2[1] = i2[1].replace(/^\s+|\s+$/g, ``), i2[1] = i2[1].replace(/^['"](.*)['"]$/g, `$1`), t2[i2[0]] = i2[1]);
  return t2;
}, re = (e14) => {
  let t2 = e14.split(`x`), n2 = {};
  return t2[0] && (n2.width = parseInt(t2[0], 10)), t2[1] && (n2.height = parseInt(t2[1], 10)), n2;
}, ie = class extends C {
  constructor() {
    super(), this.customParsers = [], this.tagMappers = [];
  }
  push(e14) {
    let t2, n2;
    if (e14 = e14.trim(), e14.length !== 0) {
      if (e14[0] !== `#`) {
        this.trigger(`data`, { type: `uri`, uri: e14 });
        return;
      }
      this.tagMappers.reduce((t3, n3) => {
        let r2 = n3(e14);
        return r2 === e14 ? t3 : t3.concat([r2]);
      }, [e14]).forEach((e15) => {
        for (let t3 = 0; t3 < this.customParsers.length; t3++) if (this.customParsers[t3].call(this, e15)) return;
        if (e15.indexOf(`#EXT`) !== 0) {
          this.trigger(`data`, { type: `comment`, text: e15.slice(1) });
          return;
        }
        if (e15 = e15.replace(`\r`, ``), t2 = /^#EXTM3U/.exec(e15), t2) {
          this.trigger(`data`, { type: `tag`, tagType: `m3u` });
          return;
        }
        if (t2 = /^#EXTINF:([0-9\.]*)?,?(.*)?$/.exec(e15), t2) {
          n2 = { type: `tag`, tagType: `inf` }, t2[1] && (n2.duration = parseFloat(t2[1])), t2[2] && (n2.title = t2[2]), this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-TARGETDURATION:([0-9.]*)?/.exec(e15), t2) {
          n2 = { type: `tag`, tagType: `targetduration` }, t2[1] && (n2.duration = parseInt(t2[1], 10)), this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-VERSION:([0-9.]*)?/.exec(e15), t2) {
          n2 = { type: `tag`, tagType: `version` }, t2[1] && (n2.version = parseInt(t2[1], 10)), this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-MEDIA-SEQUENCE:(\-?[0-9.]*)?/.exec(e15), t2) {
          n2 = { type: `tag`, tagType: `media-sequence` }, t2[1] && (n2.number = parseInt(t2[1], 10)), this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-DISCONTINUITY-SEQUENCE:(\-?[0-9.]*)?/.exec(e15), t2) {
          n2 = { type: `tag`, tagType: `discontinuity-sequence` }, t2[1] && (n2.number = parseInt(t2[1], 10)), this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-PLAYLIST-TYPE:(.*)?$/.exec(e15), t2) {
          n2 = { type: `tag`, tagType: `playlist-type` }, t2[1] && (n2.playlistType = t2[1]), this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-BYTERANGE:(.*)?$/.exec(e15), t2) {
          n2 = x(D(t2[1]), { type: `tag`, tagType: `byterange` }), this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-ALLOW-CACHE:(YES|NO)?/.exec(e15), t2) {
          n2 = { type: `tag`, tagType: `allow-cache` }, t2[1] && (n2.allowed = !/NO/.test(t2[1])), this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-MAP:(.*)$/.exec(e15), t2) {
          if (n2 = { type: `tag`, tagType: `map` }, t2[1]) {
            let e16 = O(t2[1]);
            e16.URI && (n2.uri = e16.URI), e16.BYTERANGE && (n2.byterange = D(e16.BYTERANGE));
          }
          this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-STREAM-INF:(.*)$/.exec(e15), t2) {
          n2 = { type: `tag`, tagType: `stream-inf` }, t2[1] && (n2.attributes = O(t2[1]), n2.attributes.RESOLUTION && (n2.attributes.RESOLUTION = re(n2.attributes.RESOLUTION)), n2.attributes.BANDWIDTH && (n2.attributes.BANDWIDTH = parseInt(n2.attributes.BANDWIDTH, 10)), n2.attributes[`FRAME-RATE`] && (n2.attributes[`FRAME-RATE`] = parseFloat(n2.attributes[`FRAME-RATE`])), n2.attributes[`PROGRAM-ID`] && (n2.attributes[`PROGRAM-ID`] = parseInt(n2.attributes[`PROGRAM-ID`], 10))), this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-MEDIA:(.*)$/.exec(e15), t2) {
          n2 = { type: `tag`, tagType: `media` }, t2[1] && (n2.attributes = O(t2[1])), this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-ENDLIST/.exec(e15), t2) {
          this.trigger(`data`, { type: `tag`, tagType: `endlist` });
          return;
        }
        if (t2 = /^#EXT-X-DISCONTINUITY/.exec(e15), t2) {
          this.trigger(`data`, { type: `tag`, tagType: `discontinuity` });
          return;
        }
        if (t2 = /^#EXT-X-PROGRAM-DATE-TIME:(.*)$/.exec(e15), t2) {
          n2 = { type: `tag`, tagType: `program-date-time` }, t2[1] && (n2.dateTimeString = t2[1], n2.dateTimeObject = new Date(t2[1])), this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-KEY:(.*)$/.exec(e15), t2) {
          n2 = { type: `tag`, tagType: `key` }, t2[1] && (n2.attributes = O(t2[1]), n2.attributes.IV && (n2.attributes.IV.substring(0, 2).toLowerCase() === `0x` && (n2.attributes.IV = n2.attributes.IV.substring(2)), n2.attributes.IV = n2.attributes.IV.match(/.{8}/g), n2.attributes.IV[0] = parseInt(n2.attributes.IV[0], 16), n2.attributes.IV[1] = parseInt(n2.attributes.IV[1], 16), n2.attributes.IV[2] = parseInt(n2.attributes.IV[2], 16), n2.attributes.IV[3] = parseInt(n2.attributes.IV[3], 16), n2.attributes.IV = new Uint32Array(n2.attributes.IV))), this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-START:(.*)$/.exec(e15), t2) {
          n2 = { type: `tag`, tagType: `start` }, t2[1] && (n2.attributes = O(t2[1]), n2.attributes[`TIME-OFFSET`] = parseFloat(n2.attributes[`TIME-OFFSET`]), n2.attributes.PRECISE = /YES/.test(n2.attributes.PRECISE)), this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-CUE-OUT-CONT:(.*)?$/.exec(e15), t2) {
          n2 = { type: `tag`, tagType: `cue-out-cont` }, t2[1] ? n2.data = t2[1] : n2.data = ``, this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-CUE-OUT:(.*)?$/.exec(e15), t2) {
          n2 = { type: `tag`, tagType: `cue-out` }, t2[1] ? n2.data = t2[1] : n2.data = ``, this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-CUE-IN:?(.*)?$/.exec(e15), t2) {
          n2 = { type: `tag`, tagType: `cue-in` }, t2[1] ? n2.data = t2[1] : n2.data = ``, this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-SKIP:(.*)$/.exec(e15), t2 && t2[1]) {
          n2 = { type: `tag`, tagType: `skip` }, n2.attributes = O(t2[1]), n2.attributes.hasOwnProperty(`SKIPPED-SEGMENTS`) && (n2.attributes[`SKIPPED-SEGMENTS`] = parseInt(n2.attributes[`SKIPPED-SEGMENTS`], 10)), n2.attributes.hasOwnProperty(`RECENTLY-REMOVED-DATERANGES`) && (n2.attributes[`RECENTLY-REMOVED-DATERANGES`] = n2.attributes[`RECENTLY-REMOVED-DATERANGES`].split(E)), this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-PART:(.*)$/.exec(e15), t2 && t2[1]) {
          n2 = { type: `tag`, tagType: `part` }, n2.attributes = O(t2[1]), [`DURATION`].forEach(function(e16) {
            n2.attributes.hasOwnProperty(e16) && (n2.attributes[e16] = parseFloat(n2.attributes[e16]));
          }), [`INDEPENDENT`, `GAP`].forEach(function(e16) {
            n2.attributes.hasOwnProperty(e16) && (n2.attributes[e16] = /YES/.test(n2.attributes[e16]));
          }), n2.attributes.hasOwnProperty(`BYTERANGE`) && (n2.attributes.byterange = D(n2.attributes.BYTERANGE)), this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-SERVER-CONTROL:(.*)$/.exec(e15), t2 && t2[1]) {
          n2 = { type: `tag`, tagType: `server-control` }, n2.attributes = O(t2[1]), [`CAN-SKIP-UNTIL`, `PART-HOLD-BACK`, `HOLD-BACK`].forEach(function(e16) {
            n2.attributes.hasOwnProperty(e16) && (n2.attributes[e16] = parseFloat(n2.attributes[e16]));
          }), [`CAN-SKIP-DATERANGES`, `CAN-BLOCK-RELOAD`].forEach(function(e16) {
            n2.attributes.hasOwnProperty(e16) && (n2.attributes[e16] = /YES/.test(n2.attributes[e16]));
          }), this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-PART-INF:(.*)$/.exec(e15), t2 && t2[1]) {
          n2 = { type: `tag`, tagType: `part-inf` }, n2.attributes = O(t2[1]), [`PART-TARGET`].forEach(function(e16) {
            n2.attributes.hasOwnProperty(e16) && (n2.attributes[e16] = parseFloat(n2.attributes[e16]));
          }), this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-PRELOAD-HINT:(.*)$/.exec(e15), t2 && t2[1]) {
          n2 = { type: `tag`, tagType: `preload-hint` }, n2.attributes = O(t2[1]), [`BYTERANGE-START`, `BYTERANGE-LENGTH`].forEach(function(e16) {
            if (n2.attributes.hasOwnProperty(e16)) {
              n2.attributes[e16] = parseInt(n2.attributes[e16], 10);
              let t3 = e16 === `BYTERANGE-LENGTH` ? `length` : `offset`;
              n2.attributes.byterange = n2.attributes.byterange || {}, n2.attributes.byterange[t3] = n2.attributes[e16], delete n2.attributes[e16];
            }
          }), this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-RENDITION-REPORT:(.*)$/.exec(e15), t2 && t2[1]) {
          n2 = { type: `tag`, tagType: `rendition-report` }, n2.attributes = O(t2[1]), [`LAST-MSN`, `LAST-PART`].forEach(function(e16) {
            n2.attributes.hasOwnProperty(e16) && (n2.attributes[e16] = parseInt(n2.attributes[e16], 10));
          }), this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-DATERANGE:(.*)$/.exec(e15), t2 && t2[1]) {
          n2 = { type: `tag`, tagType: `daterange` }, n2.attributes = O(t2[1]), [`ID`, `CLASS`].forEach(function(e17) {
            n2.attributes.hasOwnProperty(e17) && (n2.attributes[e17] = String(n2.attributes[e17]));
          }), [`START-DATE`, `END-DATE`].forEach(function(e17) {
            n2.attributes.hasOwnProperty(e17) && (n2.attributes[e17] = new Date(n2.attributes[e17]));
          }), [`DURATION`, `PLANNED-DURATION`].forEach(function(e17) {
            n2.attributes.hasOwnProperty(e17) && (n2.attributes[e17] = parseFloat(n2.attributes[e17]));
          }), [`END-ON-NEXT`].forEach(function(e17) {
            n2.attributes.hasOwnProperty(e17) && (n2.attributes[e17] = /YES/i.test(n2.attributes[e17]));
          }), [`SCTE35-CMD`, ` SCTE35-OUT`, `SCTE35-IN`].forEach(function(e17) {
            n2.attributes.hasOwnProperty(e17) && (n2.attributes[e17] = n2.attributes[e17].toString(16));
          });
          let e16 = /^X-([A-Z]+-)+[A-Z]+$/;
          for (let t3 in n2.attributes) {
            if (!e16.test(t3)) continue;
            let r2 = /[0-9A-Fa-f]{6}/g.test(n2.attributes[t3]), i2 = /^\d+(\.\d+)?$/.test(n2.attributes[t3]);
            n2.attributes[t3] = r2 ? n2.attributes[t3].toString(16) : i2 ? parseFloat(n2.attributes[t3]) : String(n2.attributes[t3]);
          }
          this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-INDEPENDENT-SEGMENTS/.exec(e15), t2) {
          this.trigger(`data`, { type: `tag`, tagType: `independent-segments` });
          return;
        }
        if (t2 = /^#EXT-X-I-FRAMES-ONLY/.exec(e15), t2) {
          this.trigger(`data`, { type: `tag`, tagType: `i-frames-only` });
          return;
        }
        if (t2 = /^#EXT-X-CONTENT-STEERING:(.*)$/.exec(e15), t2) {
          n2 = { type: `tag`, tagType: `content-steering` }, n2.attributes = O(t2[1]), this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-I-FRAME-STREAM-INF:(.*)$/.exec(e15), t2) {
          n2 = { type: `tag`, tagType: `i-frame-playlist` }, n2.attributes = O(t2[1]), n2.attributes.URI && (n2.uri = n2.attributes.URI), n2.attributes.BANDWIDTH && (n2.attributes.BANDWIDTH = parseInt(n2.attributes.BANDWIDTH, 10)), n2.attributes.RESOLUTION && (n2.attributes.RESOLUTION = re(n2.attributes.RESOLUTION)), n2.attributes[`AVERAGE-BANDWIDTH`] && (n2.attributes[`AVERAGE-BANDWIDTH`] = parseInt(n2.attributes[`AVERAGE-BANDWIDTH`], 10)), n2.attributes[`FRAME-RATE`] && (n2.attributes[`FRAME-RATE`] = parseFloat(n2.attributes[`FRAME-RATE`])), this.trigger(`data`, n2);
          return;
        }
        if (t2 = /^#EXT-X-DEFINE:(.*)$/.exec(e15), t2) {
          n2 = { type: `tag`, tagType: `define` }, n2.attributes = O(t2[1]), this.trigger(`data`, n2);
          return;
        }
        this.trigger(`data`, { type: `tag`, data: e15.slice(4) });
      });
    }
  }
  addParser({ expression: e14, customType: t2, dataParser: n2, segment: r2 }) {
    typeof n2 != `function` && (n2 = (e15) => e15), this.customParsers.push((i2) => {
      if (e14.exec(i2)) return this.trigger(`data`, { type: `custom`, data: n2(i2), customType: t2, segment: r2 }), true;
    });
  }
  addTagMapper({ expression: e14, map: t2 }) {
    this.tagMappers.push((n2) => e14.test(n2) ? t2(n2) : n2);
  }
}, ae = (e14) => e14.toLowerCase().replace(/-(\w)/g, (e15) => e15[1].toUpperCase()), k = function(e14) {
  let t2 = {};
  return Object.keys(e14).forEach(function(n2) {
    t2[ae(n2)] = e14[n2];
  }), t2;
}, oe = function(e14) {
  let { serverControl: t2, targetDuration: n2, partTargetDuration: r2 } = e14;
  if (!t2) return;
  let i2 = `#EXT-X-SERVER-CONTROL`, a2 = `holdBack`, o2 = `partHoldBack`, s2 = n2 && n2 * 3, c2 = r2 && r2 * 2;
  n2 && !t2.hasOwnProperty(a2) && (t2[a2] = s2, this.trigger(`info`, { message: `${i2} defaulting HOLD-BACK to targetDuration * 3 (${s2}).` })), s2 && t2[a2] < s2 && (this.trigger(`warn`, { message: `${i2} clamping HOLD-BACK (${t2[a2]}) to targetDuration * 3 (${s2})` }), t2[a2] = s2), r2 && !t2.hasOwnProperty(o2) && (t2[o2] = r2 * 3, this.trigger(`info`, { message: `${i2} defaulting PART-HOLD-BACK to partTargetDuration * 3 (${t2[o2]}).` })), r2 && t2[o2] < c2 && (this.trigger(`warn`, { message: `${i2} clamping PART-HOLD-BACK (${t2[o2]}) to partTargetDuration * 2 (${c2}).` }), t2[o2] = c2);
}, se = class extends C {
  constructor(e14 = {}) {
    super(), this.lineStream = new te(), this.parseStream = new ie(), this.lineStream.pipe(this.parseStream), this.mainDefinitions = e14.mainDefinitions || {}, this.params = new URL(e14.uri, `https://a.com`).searchParams, this.lastProgramDateTime = null;
    let t2 = this, n2 = [], r2 = {}, i2, a2, o2 = false, s2 = function() {
    }, c2 = { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} }, l2 = 0;
    this.manifest = { allowCache: true, discontinuityStarts: [], dateRanges: [], iFramePlaylists: [], segments: [] };
    let u2 = 0, d2 = 0, f2 = {};
    this.on(`end`, () => {
      r2.uri || !r2.parts && !r2.preloadHints || (!r2.map && i2 && (r2.map = i2), !r2.key && a2 && (r2.key = a2), !r2.timeline && typeof l2 == `number` && (r2.timeline = l2), this.manifest.preloadSegment = r2);
    }), this.parseStream.on(`data`, function(e15) {
      let p2, m2;
      if (t2.manifest.definitions) {
        for (let n3 in t2.manifest.definitions) if (e15.uri &&= e15.uri.replace(`{$${n3}}`, t2.manifest.definitions[n3]), e15.attributes) for (let r3 in e15.attributes) typeof e15.attributes[r3] == `string` && (e15.attributes[r3] = e15.attributes[r3].replace(`{$${n3}}`, t2.manifest.definitions[n3]));
      }
      ({ tag() {
        ({ version() {
          e15.version && (this.manifest.version = e15.version);
        }, "allow-cache"() {
          this.manifest.allowCache = e15.allowed, `allowed` in e15 || (this.trigger(`info`, { message: `defaulting allowCache to YES` }), this.manifest.allowCache = true);
        }, byterange() {
          let t3 = {};
          `length` in e15 && (r2.byterange = t3, t3.length = e15.length, `offset` in e15 || (e15.offset = u2)), `offset` in e15 && (r2.byterange = t3, t3.offset = e15.offset), u2 = t3.offset + t3.length;
        }, endlist() {
          this.manifest.endList = true;
        }, inf() {
          `mediaSequence` in this.manifest || (this.manifest.mediaSequence = 0, this.trigger(`info`, { message: `defaulting media sequence to zero` })), `discontinuitySequence` in this.manifest || (this.manifest.discontinuitySequence = 0, this.trigger(`info`, { message: `defaulting discontinuity sequence to zero` })), e15.title && (r2.title = e15.title), e15.duration > 0 && (r2.duration = e15.duration), e15.duration === 0 && (r2.duration = 0.01, this.trigger(`info`, { message: `updating zero segment duration to a small value` })), this.manifest.segments = n2;
        }, key() {
          if (!e15.attributes) {
            this.trigger(`warn`, { message: `ignoring key declaration without attribute list` });
            return;
          }
          if (e15.attributes.METHOD === `NONE`) {
            a2 = null;
            return;
          }
          if (!e15.attributes.URI) {
            this.trigger(`warn`, { message: `ignoring key declaration without URI` });
            return;
          }
          if (e15.attributes.KEYFORMAT === `com.apple.streamingkeydelivery`) {
            this.manifest.contentProtection = this.manifest.contentProtection || {}, this.manifest.contentProtection[`com.apple.fps.1_0`] = { attributes: e15.attributes };
            return;
          }
          if (e15.attributes.KEYFORMAT === `com.microsoft.playready`) {
            this.manifest.contentProtection = this.manifest.contentProtection || {}, this.manifest.contentProtection[`com.microsoft.playready`] = { uri: e15.attributes.URI };
            return;
          }
          if (e15.attributes.KEYFORMAT === `urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed`) {
            if ([`SAMPLE-AES`, `SAMPLE-AES-CTR`, `SAMPLE-AES-CENC`].indexOf(e15.attributes.METHOD) === -1) {
              this.trigger(`warn`, { message: `invalid key method provided for Widevine` });
              return;
            }
            if (e15.attributes.METHOD === `SAMPLE-AES-CENC` && this.trigger(`warn`, { message: `SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead` }), e15.attributes.URI.substring(0, 23) !== `data:text/plain;base64,`) {
              this.trigger(`warn`, { message: `invalid key URI provided for Widevine` });
              return;
            }
            if (!(e15.attributes.KEYID && e15.attributes.KEYID.substring(0, 2) === `0x`)) {
              this.trigger(`warn`, { message: `invalid key ID provided for Widevine` });
              return;
            }
            this.manifest.contentProtection = this.manifest.contentProtection || {}, this.manifest.contentProtection[`com.widevine.alpha`] = { attributes: { schemeIdUri: e15.attributes.KEYFORMAT, keyId: e15.attributes.KEYID.substring(2) }, pssh: T(e15.attributes.URI.split(`,`)[1]) };
            return;
          }
          e15.attributes.METHOD || this.trigger(`warn`, { message: `defaulting key method to AES-128` }), a2 = { method: e15.attributes.METHOD || `AES-128`, uri: e15.attributes.URI }, e15.attributes.IV !== void 0 && (a2.iv = e15.attributes.IV);
        }, "media-sequence"() {
          if (!isFinite(e15.number)) {
            this.trigger(`warn`, { message: `ignoring invalid media sequence: ` + e15.number });
            return;
          }
          this.manifest.mediaSequence = e15.number;
        }, "discontinuity-sequence"() {
          if (!isFinite(e15.number)) {
            this.trigger(`warn`, { message: `ignoring invalid discontinuity sequence: ` + e15.number });
            return;
          }
          this.manifest.discontinuitySequence = e15.number, l2 = e15.number;
        }, "playlist-type"() {
          if (!/VOD|EVENT/.test(e15.playlistType)) {
            this.trigger(`warn`, { message: `ignoring unknown playlist type: ` + e15.playlist });
            return;
          }
          this.manifest.playlistType = e15.playlistType;
        }, map() {
          i2 = {}, e15.uri && (i2.uri = e15.uri), e15.byterange && (i2.byterange = e15.byterange), a2 && (i2.key = a2);
        }, "stream-inf"() {
          if (this.manifest.playlists = n2, this.manifest.mediaGroups = this.manifest.mediaGroups || c2, !e15.attributes) {
            this.trigger(`warn`, { message: `ignoring empty stream-inf attributes` });
            return;
          }
          r2.attributes ||= {}, x(r2.attributes, e15.attributes);
        }, media() {
          if (this.manifest.mediaGroups = this.manifest.mediaGroups || c2, !(e15.attributes && e15.attributes.TYPE && e15.attributes[`GROUP-ID`] && e15.attributes.NAME)) {
            this.trigger(`warn`, { message: `ignoring incomplete or missing media group` });
            return;
          }
          let t3 = this.manifest.mediaGroups[e15.attributes.TYPE];
          t3[e15.attributes[`GROUP-ID`]] = t3[e15.attributes[`GROUP-ID`]] || {}, p2 = t3[e15.attributes[`GROUP-ID`]], m2 = { default: /yes/i.test(e15.attributes.DEFAULT) }, m2.default ? m2.autoselect = true : m2.autoselect = /yes/i.test(e15.attributes.AUTOSELECT), e15.attributes.LANGUAGE && (m2.language = e15.attributes.LANGUAGE), e15.attributes.URI && (m2.uri = e15.attributes.URI), e15.attributes[`INSTREAM-ID`] && (m2.instreamId = e15.attributes[`INSTREAM-ID`]), e15.attributes.CHARACTERISTICS && (m2.characteristics = e15.attributes.CHARACTERISTICS), e15.attributes.FORCED && (m2.forced = /yes/i.test(e15.attributes.FORCED)), p2[e15.attributes.NAME] = m2;
        }, discontinuity() {
          l2 += 1, r2.discontinuity = true, this.manifest.discontinuityStarts.push(n2.length);
        }, "program-date-time"() {
          this.manifest.dateTimeString === void 0 && (this.manifest.dateTimeString = e15.dateTimeString, this.manifest.dateTimeObject = e15.dateTimeObject), r2.dateTimeString = e15.dateTimeString, r2.dateTimeObject = e15.dateTimeObject;
          let { lastProgramDateTime: t3 } = this;
          this.lastProgramDateTime = new Date(e15.dateTimeString).getTime(), t3 === null && this.manifest.segments.reduceRight((e16, t4) => (t4.programDateTime = e16 - t4.duration * 1e3, t4.programDateTime), this.lastProgramDateTime);
        }, targetduration() {
          if (!isFinite(e15.duration) || e15.duration < 0) {
            this.trigger(`warn`, { message: `ignoring invalid target duration: ` + e15.duration });
            return;
          }
          this.manifest.targetDuration = e15.duration, oe.call(this, this.manifest);
        }, start() {
          if (!e15.attributes || isNaN(e15.attributes[`TIME-OFFSET`])) {
            this.trigger(`warn`, { message: `ignoring start declaration without appropriate attribute list` });
            return;
          }
          this.manifest.start = { timeOffset: e15.attributes[`TIME-OFFSET`], precise: e15.attributes.PRECISE };
        }, "cue-out"() {
          r2.cueOut = e15.data;
        }, "cue-out-cont"() {
          r2.cueOutCont = e15.data;
        }, "cue-in"() {
          r2.cueIn = e15.data;
        }, skip() {
          this.manifest.skip = k(e15.attributes), this.warnOnMissingAttributes_(`#EXT-X-SKIP`, e15.attributes, [`SKIPPED-SEGMENTS`]);
        }, part() {
          o2 = true;
          let t3 = this.manifest.segments.length, n3 = k(e15.attributes);
          r2.parts = r2.parts || [], r2.parts.push(n3), n3.byterange && (n3.byterange.hasOwnProperty(`offset`) || (n3.byterange.offset = d2), d2 = n3.byterange.offset + n3.byterange.length);
          let i3 = r2.parts.length - 1;
          this.warnOnMissingAttributes_(`#EXT-X-PART #${i3} for segment #${t3}`, e15.attributes, [`URI`, `DURATION`]), this.manifest.renditionReports && this.manifest.renditionReports.forEach((e16, t4) => {
            e16.hasOwnProperty(`lastPart`) || this.trigger(`warn`, { message: `#EXT-X-RENDITION-REPORT #${t4} lacks required attribute(s): LAST-PART` });
          });
        }, "server-control"() {
          let t3 = this.manifest.serverControl = k(e15.attributes);
          t3.hasOwnProperty(`canBlockReload`) || (t3.canBlockReload = false, this.trigger(`info`, { message: `#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false` })), oe.call(this, this.manifest), t3.canSkipDateranges && !t3.hasOwnProperty(`canSkipUntil`) && this.trigger(`warn`, { message: `#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set` });
        }, "preload-hint"() {
          let t3 = this.manifest.segments.length, n3 = k(e15.attributes), i3 = n3.type && n3.type === `PART`;
          r2.preloadHints = r2.preloadHints || [], r2.preloadHints.push(n3), n3.byterange && (n3.byterange.hasOwnProperty(`offset`) || (n3.byterange.offset = i3 ? d2 : 0, i3 && (d2 = n3.byterange.offset + n3.byterange.length)));
          let a3 = r2.preloadHints.length - 1;
          if (this.warnOnMissingAttributes_(`#EXT-X-PRELOAD-HINT #${a3} for segment #${t3}`, e15.attributes, [`TYPE`, `URI`]), n3.type) for (let e16 = 0; e16 < r2.preloadHints.length - 1; e16++) {
            let i4 = r2.preloadHints[e16];
            i4.type && i4.type === n3.type && this.trigger(`warn`, { message: `#EXT-X-PRELOAD-HINT #${a3} for segment #${t3} has the same TYPE ${n3.type} as preload hint #${e16}` });
          }
        }, "rendition-report"() {
          let t3 = k(e15.attributes);
          this.manifest.renditionReports = this.manifest.renditionReports || [], this.manifest.renditionReports.push(t3);
          let n3 = this.manifest.renditionReports.length - 1, r3 = [`LAST-MSN`, `URI`];
          o2 && r3.push(`LAST-PART`), this.warnOnMissingAttributes_(`#EXT-X-RENDITION-REPORT #${n3}`, e15.attributes, r3);
        }, "part-inf"() {
          this.manifest.partInf = k(e15.attributes), this.warnOnMissingAttributes_(`#EXT-X-PART-INF`, e15.attributes, [`PART-TARGET`]), this.manifest.partInf.partTarget && (this.manifest.partTargetDuration = this.manifest.partInf.partTarget), oe.call(this, this.manifest);
        }, daterange() {
          this.manifest.dateRanges.push(k(e15.attributes));
          let t3 = this.manifest.dateRanges.length - 1;
          this.warnOnMissingAttributes_(`#EXT-X-DATERANGE #${t3}`, e15.attributes, [`ID`, `START-DATE`]);
          let n3 = this.manifest.dateRanges[t3];
          n3.endDate && n3.startDate && new Date(n3.endDate) < new Date(n3.startDate) && this.trigger(`warn`, { message: `EXT-X-DATERANGE END-DATE must be equal to or later than the value of the START-DATE` }), n3.duration && n3.duration < 0 && this.trigger(`warn`, { message: `EXT-X-DATERANGE DURATION must not be negative` }), n3.plannedDuration && n3.plannedDuration < 0 && this.trigger(`warn`, { message: `EXT-X-DATERANGE PLANNED-DURATION must not be negative` });
          let r3 = !!n3.endOnNext;
          if (r3 && !n3.class && this.trigger(`warn`, { message: `EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must have a CLASS attribute` }), r3 && (n3.duration || n3.endDate) && this.trigger(`warn`, { message: `EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must not contain DURATION or END-DATE attributes` }), n3.duration && n3.endDate) {
            let e16 = n3.startDate.getTime() + n3.duration * 1e3;
            this.manifest.dateRanges[t3].endDate = new Date(e16);
          }
          if (!f2[n3.id]) f2[n3.id] = n3;
          else {
            for (let e17 in f2[n3.id]) if (n3[e17] && JSON.stringify(f2[n3.id][e17]) !== JSON.stringify(n3[e17])) {
              this.trigger(`warn`, { message: `EXT-X-DATERANGE tags with the same ID in a playlist must have the same attributes values` });
              break;
            }
            let e16 = this.manifest.dateRanges.findIndex((e17) => e17.id === n3.id);
            this.manifest.dateRanges[e16] = x(this.manifest.dateRanges[e16], n3), f2[n3.id] = x(f2[n3.id], n3), this.manifest.dateRanges.pop();
          }
        }, "independent-segments"() {
          this.manifest.independentSegments = true;
        }, "i-frames-only"() {
          this.manifest.iFramesOnly = true, this.requiredCompatibilityversion(this.manifest.version, 4);
        }, "content-steering"() {
          this.manifest.contentSteering = k(e15.attributes), this.warnOnMissingAttributes_(`#EXT-X-CONTENT-STEERING`, e15.attributes, [`SERVER-URI`]);
        }, define() {
          this.manifest.definitions = this.manifest.definitions || {};
          let t3 = (e16, t4) => {
            if (e16 in this.manifest.definitions) {
              this.trigger(`error`, { message: `EXT-X-DEFINE: Duplicate name ${e16}` });
              return;
            }
            this.manifest.definitions[e16] = t4;
          };
          if (`QUERYPARAM` in e15.attributes) {
            if (`NAME` in e15.attributes || `IMPORT` in e15.attributes) {
              this.trigger(`error`, { message: `EXT-X-DEFINE: Invalid attributes` });
              return;
            }
            let n3 = this.params.get(e15.attributes.QUERYPARAM);
            if (!n3) {
              this.trigger(`error`, { message: `EXT-X-DEFINE: No query param ${e15.attributes.QUERYPARAM}` });
              return;
            }
            t3(e15.attributes.QUERYPARAM, decodeURIComponent(n3));
            return;
          }
          if (`NAME` in e15.attributes) {
            if (`IMPORT` in e15.attributes) {
              this.trigger(`error`, { message: `EXT-X-DEFINE: Invalid attributes` });
              return;
            }
            if (!(`VALUE` in e15.attributes) || typeof e15.attributes.VALUE != `string`) {
              this.trigger(`error`, { message: `EXT-X-DEFINE: No value for ${e15.attributes.NAME}` });
              return;
            }
            t3(e15.attributes.NAME, e15.attributes.VALUE);
            return;
          }
          if (`IMPORT` in e15.attributes) {
            if (!this.mainDefinitions[e15.attributes.IMPORT]) {
              this.trigger(`error`, { message: `EXT-X-DEFINE: No value ${e15.attributes.IMPORT} to import, or IMPORT used on main playlist` });
              return;
            }
            t3(e15.attributes.IMPORT, this.mainDefinitions[e15.attributes.IMPORT]);
            return;
          }
          this.trigger(`error`, { message: `EXT-X-DEFINE: No attribute` });
        }, "i-frame-playlist"() {
          this.manifest.iFramePlaylists.push({ attributes: e15.attributes, uri: e15.uri, timeline: l2 }), this.warnOnMissingAttributes_(`#EXT-X-I-FRAME-STREAM-INF`, e15.attributes, [`BANDWIDTH`, `URI`]);
        } }[e15.tagType] || s2).call(t2);
      }, uri() {
        r2.uri = e15.uri, n2.push(r2), this.manifest.targetDuration && !(`duration` in r2) && (this.trigger(`warn`, { message: `defaulting segment duration to the target duration` }), r2.duration = this.manifest.targetDuration), a2 && (r2.key = a2), r2.timeline = l2, i2 && (r2.map = i2), d2 = 0, this.lastProgramDateTime !== null && (r2.programDateTime = this.lastProgramDateTime, this.lastProgramDateTime += r2.duration * 1e3), r2 = {};
      }, comment() {
      }, custom() {
        e15.segment ? (r2.custom = r2.custom || {}, r2.custom[e15.customType] = e15.data) : (this.manifest.custom = this.manifest.custom || {}, this.manifest.custom[e15.customType] = e15.data);
      } })[e15.type].call(t2);
    });
  }
  requiredCompatibilityversion(e14, t2) {
    (e14 < t2 || !e14) && this.trigger(`warn`, { message: `manifest must be at least version ${t2}` });
  }
  warnOnMissingAttributes_(e14, t2, n2) {
    let r2 = [];
    n2.forEach(function(e15) {
      t2.hasOwnProperty(e15) || r2.push(e15);
    }), r2.length && this.trigger(`warn`, { message: `${e14} lacks required attribute(s): ${r2.join(`, `)}` });
  }
  push(e14) {
    this.lineStream.push(e14);
  }
  end() {
    this.lineStream.push(`
`), this.manifest.dateRanges.length && this.lastProgramDateTime === null && this.trigger(`warn`, { message: `A playlist with EXT-X-DATERANGE tag must contain atleast one EXT-X-PROGRAM-DATE-TIME tag` }), this.lastProgramDateTime = null, this.trigger(`end`);
  }
  addParser(e14) {
    this.parseStream.addParser(e14);
  }
  addTagMapper(e14) {
    this.parseStream.addTagMapper(e14);
  }
}, ce = { mp4: /^(av0?1|avc0?[1234]|vp0?9|flac|opus|mp3|mp4a|mp4v|stpp.ttml.im1t)/, webm: /^(vp0?[89]|av0?1|opus|vorbis)/, ogg: /^(vp0?[89]|theora|flac|opus|vorbis)/, video: /^(av0?1|avc0?[1234]|vp0?[89]|hvc1|hev1|theora|mp4v)/, audio: /^(mp4a|flac|vorbis|opus|ac-[34]|ec-3|alac|mp3|speex|aac)/, text: /^(stpp.ttml.im1t)/, muxerVideo: /^(avc0?1)/, muxerAudio: /^(mp4a)/, muxerText: /a^/ }, le = [`video`, `audio`, `text`], A = [`Video`, `Audio`, `Text`], ue = function(e14) {
  return e14 && e14.replace(/avc1\.(\d+)\.(\d+)/i, function(e15, t2, n2) {
    var r2 = (`00` + Number(t2).toString(16)).slice(-2), i2 = (`00` + Number(n2).toString(16)).slice(-2);
    return `avc1.` + r2 + `00` + i2;
  });
}, de = function(e14) {
  e14 === void 0 && (e14 = ``);
  var t2 = e14.split(`,`), n2 = [];
  return t2.forEach(function(e15) {
    e15 = e15.trim();
    var t3;
    le.forEach(function(r2) {
      var i2 = ce[r2].exec(e15.toLowerCase());
      if (!(!i2 || i2.length <= 1)) {
        t3 = r2;
        var a2 = e15.substring(0, i2[1].length), o2 = e15.replace(a2, ``);
        n2.push({ type: a2, details: o2, mediaType: r2 });
      }
    }), t3 || n2.push({ type: e15, details: ``, mediaType: `unknown` });
  }), n2;
}, fe = function(e14, t2) {
  if (!e14.mediaGroups.AUDIO || !t2) return null;
  var n2 = e14.mediaGroups.AUDIO[t2];
  if (!n2) return null;
  for (var r2 in n2) {
    var i2 = n2[r2];
    if (i2.default && i2.playlists) return de(i2.playlists[0].attributes.CODECS);
  }
  return null;
}, pe = function(e14) {
  return e14 === void 0 && (e14 = ``), ce.audio.test(e14.trim().toLowerCase());
}, me = function(e14) {
  return e14 === void 0 && (e14 = ``), ce.text.test(e14.trim().toLowerCase());
}, he = function(e14) {
  if (!(!e14 || typeof e14 != `string`)) {
    var t2 = e14.toLowerCase().split(`,`).map(function(e15) {
      return ue(e15.trim());
    }), n2 = `video`;
    t2.length === 1 && pe(t2[0]) ? n2 = `audio` : t2.length === 1 && me(t2[0]) && (n2 = `application`);
    var r2 = `mp4`;
    return t2.every(function(e15) {
      return ce.mp4.test(e15);
    }) ? r2 = `mp4` : t2.every(function(e15) {
      return ce.webm.test(e15);
    }) ? r2 = `webm` : t2.every(function(e15) {
      return ce.ogg.test(e15);
    }) && (r2 = `ogg`), n2 + `/` + r2 + `;codecs="` + e14 + `"`;
  }
}, ge = function(e14, t2) {
  return e14 === void 0 && (e14 = ``), t2 === void 0 && (t2 = false), h.default.MediaSource && h.default.MediaSource.isTypeSupported && h.default.MediaSource.isTypeSupported(he(e14)) || t2 && h.default.ManagedMediaSource && h.default.ManagedMediaSource.isTypeSupported && h.default.ManagedMediaSource.isTypeSupported(he(e14)) || false;
}, _e = function(e14) {
  return e14 === void 0 && (e14 = ``), e14.toLowerCase().split(`,`).every(function(e15) {
    e15 = e15.trim();
    for (var t2 = 0; t2 < A.length; t2++) if (ce[`muxer` + A[t2]].test(e15)) return true;
    return false;
  });
}, ve = /^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i, ye = /^application\/dash\+xml/i, j = function(e14) {
  return ve.test(e14) ? `hls` : ye.test(e14) ? `dash` : e14 === `application/vnd.videojs.vhs+json` ? `vhs-json` : null;
}, be = function(e14) {
  return e14.toString(2).length;
}, xe = function(e14) {
  return Math.ceil(be(e14) / 8);
}, Se = function(e14) {
  return ArrayBuffer.isView === `function` ? ArrayBuffer.isView(e14) : e14 && e14.buffer instanceof ArrayBuffer;
}, Ce = function(e14) {
  return Se(e14);
}, M = function(e14) {
  return e14 instanceof Uint8Array ? e14 : (!Array.isArray(e14) && !Ce(e14) && !(e14 instanceof ArrayBuffer) && (e14 = typeof e14 != `number` || typeof e14 == `number` && e14 !== e14 ? 0 : [e14]), new Uint8Array(e14 && e14.buffer || e14, e14 && e14.byteOffset || 0, e14 && e14.byteLength || 0));
}, we = h.default.BigInt || Number, Te = [we(`0x1`), we(`0x100`), we(`0x10000`), we(`0x1000000`), we(`0x100000000`), we(`0x10000000000`), we(`0x1000000000000`), we(`0x100000000000000`), we(`0x10000000000000000`)];
(function() {
  var e14 = new Uint16Array([65484]), t2 = new Uint8Array(e14.buffer, e14.byteOffset, e14.byteLength);
  return t2[0] === 255 ? `big` : t2[0] === 204 ? `little` : `unknown`;
})();
var Ee = function(e14, t2) {
  var n2 = t2 === void 0 ? {} : t2, r2 = n2.signed, i2 = r2 === void 0 ? false : r2, a2 = n2.le, o2 = a2 === void 0 ? false : a2;
  e14 = M(e14);
  var s2 = o2 ? `reduce` : `reduceRight`, c2 = (e14[s2] ? e14[s2] : Array.prototype[s2]).call(e14, function(t3, n3, r3) {
    var i3 = o2 ? r3 : Math.abs(r3 + 1 - e14.length);
    return t3 + we(n3) * Te[i3];
  }, we(0));
  if (i2) {
    var l2 = Te[e14.length] / we(2) - we(1);
    c2 = we(c2), c2 > l2 && (c2 -= l2, c2 -= l2, c2 -= we(2));
  }
  return Number(c2);
}, N = function(e14, t2) {
  var n2 = (t2 === void 0 ? {} : t2).le, r2 = n2 === void 0 ? false : n2;
  (typeof e14 != `bigint` && typeof e14 != `number` || typeof e14 == `number` && e14 !== e14) && (e14 = 0), e14 = we(e14);
  for (var i2 = xe(e14), a2 = new Uint8Array(new ArrayBuffer(i2)), o2 = 0; o2 < i2; o2++) {
    var s2 = r2 ? o2 : Math.abs(o2 + 1 - a2.length);
    a2[s2] = Number(e14 / Te[o2] & we(255)), e14 < 0 && (a2[s2] = Math.abs(~a2[s2]), a2[s2] -= o2 === 0 ? 1 : 2);
  }
  return a2;
}, De = function(e14) {
  if (!e14) return ``;
  e14 = Array.prototype.slice.call(e14);
  var t2 = String.fromCharCode.apply(null, M(e14));
  try {
    return decodeURIComponent(escape(t2));
  } catch {
  }
  return t2;
}, Oe = function(e14, t2) {
  if (typeof e14 != `string` && e14 && typeof e14.toString == `function` && (e14 = e14.toString()), typeof e14 != `string`) return new Uint8Array();
  t2 || (e14 = unescape(encodeURIComponent(e14)));
  for (var n2 = new Uint8Array(e14.length), r2 = 0; r2 < e14.length; r2++) n2[r2] = e14.charCodeAt(r2);
  return n2;
}, ke = function() {
  var e14 = [...arguments];
  if (e14 = e14.filter(function(e15) {
    return e15 && (e15.byteLength || e15.length) && typeof e15 != `string`;
  }), e14.length <= 1) return M(e14[0]);
  var t2 = e14.reduce(function(e15, t3, n3) {
    return e15 + (t3.byteLength || t3.length);
  }, 0), n2 = new Uint8Array(t2), r2 = 0;
  return e14.forEach(function(e15) {
    e15 = M(e15), n2.set(e15, r2), r2 += e15.byteLength;
  }), n2;
}, P = function(e14, t2, n2) {
  var r2 = n2 === void 0 ? {} : n2, i2 = r2.offset, a2 = i2 === void 0 ? 0 : i2, o2 = r2.mask, s2 = o2 === void 0 ? [] : o2;
  e14 = M(e14), t2 = M(t2);
  var c2 = t2.every ? t2.every : Array.prototype.every;
  return t2.length && e14.length - a2 >= t2.length && c2.call(t2, function(t3, n3) {
    return t3 === (s2[n3] ? s2[n3] & e14[a2 + n3] : e14[a2 + n3]);
  });
}, Ae = function(e14, t2, n2) {
  t2.forEach(function(t3) {
    for (var r2 in e14.mediaGroups[t3]) for (var i2 in e14.mediaGroups[t3][r2]) {
      var a2 = e14.mediaGroups[t3][r2][i2];
      n2(a2, t3, r2, i2);
    }
  });
}, je = t(((e14) => {
  function t2(e15, t3, n3) {
    if (n3 === void 0 && (n3 = Array.prototype), e15 && typeof n3.find == `function`) return n3.find.call(e15, t3);
    for (var r3 = 0; r3 < e15.length; r3++) if (Object.prototype.hasOwnProperty.call(e15, r3)) {
      var i3 = e15[r3];
      if (t3.call(void 0, i3, r3, e15)) return i3;
    }
  }
  function n2(e15, t3) {
    return t3 === void 0 && (t3 = Object), t3 && typeof t3.freeze == `function` ? t3.freeze(e15) : e15;
  }
  function r2(e15, t3) {
    if (typeof e15 != `object` || !e15) throw TypeError(`target is not an object`);
    for (var n3 in t3) Object.prototype.hasOwnProperty.call(t3, n3) && (e15[n3] = t3[n3]);
    return e15;
  }
  var i2 = n2({ HTML: `text/html`, isHTML: function(e15) {
    return e15 === i2.HTML;
  }, XML_APPLICATION: `application/xml`, XML_TEXT: `text/xml`, XML_XHTML_APPLICATION: `application/xhtml+xml`, XML_SVG_IMAGE: `image/svg+xml` }), a2 = n2({ HTML: `http://www.w3.org/1999/xhtml`, isHTML: function(e15) {
    return e15 === a2.HTML;
  }, SVG: `http://www.w3.org/2000/svg`, XML: `http://www.w3.org/XML/1998/namespace`, XMLNS: `http://www.w3.org/2000/xmlns/` });
  e14.assign = r2, e14.find = t2, e14.freeze = n2, e14.MIME_TYPE = i2, e14.NAMESPACE = a2;
})), Me = t(((e14) => {
  var t2 = je(), n2 = t2.find, r2 = t2.NAMESPACE;
  function i2(e15) {
    return e15 !== ``;
  }
  function a2(e15) {
    return e15 ? e15.split(/[\t\n\f\r ]+/).filter(i2) : [];
  }
  function o2(e15, t3) {
    return e15.hasOwnProperty(t3) || (e15[t3] = true), e15;
  }
  function s2(e15) {
    if (!e15) return [];
    var t3 = a2(e15);
    return Object.keys(t3.reduce(o2, {}));
  }
  function c2(e15) {
    return function(t3) {
      return e15 && e15.indexOf(t3) !== -1;
    };
  }
  function l2(e15, t3) {
    for (var n3 in e15) Object.prototype.hasOwnProperty.call(e15, n3) && (t3[n3] = e15[n3]);
  }
  function u2(e15, t3) {
    var n3 = e15.prototype;
    if (!(n3 instanceof t3)) {
      let r3 = function() {
      };
      r3.prototype = t3.prototype, r3 = new r3(), l2(n3, r3), e15.prototype = n3 = r3;
    }
    n3.constructor != e15 && (typeof e15 != `function` && console.error(`unknown Class:` + e15), n3.constructor = e15);
  }
  var d2 = {}, f2 = d2.ELEMENT_NODE = 1, p2 = d2.ATTRIBUTE_NODE = 2, m2 = d2.TEXT_NODE = 3, h2 = d2.CDATA_SECTION_NODE = 4, g2 = d2.ENTITY_REFERENCE_NODE = 5, _2 = d2.ENTITY_NODE = 6, v2 = d2.PROCESSING_INSTRUCTION_NODE = 7, y2 = d2.COMMENT_NODE = 8, b2 = d2.DOCUMENT_NODE = 9, x2 = d2.DOCUMENT_TYPE_NODE = 10, S2 = d2.DOCUMENT_FRAGMENT_NODE = 11, ee2 = d2.NOTATION_NODE = 12, C2 = {}, w2 = {};
  C2.INDEX_SIZE_ERR = (w2[1] = `Index size error`, 1), C2.DOMSTRING_SIZE_ERR = (w2[2] = `DOMString size error`, 2);
  var T2 = C2.HIERARCHY_REQUEST_ERR = (w2[3] = `Hierarchy request error`, 3);
  C2.WRONG_DOCUMENT_ERR = (w2[4] = `Wrong document`, 4);
  var te2 = C2.INVALID_CHARACTER_ERR = (w2[5] = `Invalid character`, 5);
  C2.NO_DATA_ALLOWED_ERR = (w2[6] = `No data allowed`, 6), C2.NO_MODIFICATION_ALLOWED_ERR = (w2[7] = `No modification allowed`, 7);
  var E2 = C2.NOT_FOUND_ERR = (w2[8] = `Not found`, 8);
  C2.NOT_SUPPORTED_ERR = (w2[9] = `Not supported`, 9);
  var D2 = C2.INUSE_ATTRIBUTE_ERR = (w2[10] = `Attribute in use`, 10), ne2 = C2.INVALID_STATE_ERR = (w2[11] = `Invalid state`, 11);
  C2.SYNTAX_ERR = (w2[12] = `Syntax error`, 12), C2.INVALID_MODIFICATION_ERR = (w2[13] = `Invalid modification`, 13), C2.NAMESPACE_ERR = (w2[14] = `Invalid namespace`, 14), C2.INVALID_ACCESS_ERR = (w2[15] = `Invalid access`, 15);
  function O2(e15, t3) {
    if (t3 instanceof Error) var n3 = t3;
    else n3 = this, Error.call(this, w2[e15]), this.message = w2[e15], Error.captureStackTrace && Error.captureStackTrace(this, O2);
    return n3.code = e15, t3 && (this.message = this.message + `: ` + t3), n3;
  }
  O2.prototype = Error.prototype, l2(C2, O2);
  function re2() {
  }
  re2.prototype = { length: 0, item: function(e15) {
    return e15 >= 0 && e15 < this.length ? this[e15] : null;
  }, toString: function(e15, t3, n3) {
    for (var r3 = !!n3 && !!n3.requireWellFormed, i3 = [], a3 = 0; a3 < this.length; a3++) He2(this[a3], i3, e15, t3, null, r3);
    return i3.join(``);
  }, filter: function(e15) {
    return Array.prototype.filter.call(this, e15);
  }, indexOf: function(e15) {
    return Array.prototype.indexOf.call(this, e15);
  } };
  function ie2(e15, t3) {
    this._node = e15, this._refresh = t3, ae2(this);
  }
  function ae2(e15) {
    var t3 = e15._node._inc || e15._node.ownerDocument._inc;
    if (e15._inc !== t3) {
      var n3 = e15._refresh(e15._node);
      if (Ge2(e15, `length`, n3.length), !e15.$$length || n3.length < e15.$$length) for (var r3 = n3.length; r3 in e15; r3++) Object.prototype.hasOwnProperty.call(e15, r3) && delete e15[r3];
      l2(n3, e15), e15._inc = t3;
    }
  }
  ie2.prototype.item = function(e15) {
    return ae2(this), this[e15] || null;
  }, u2(ie2, re2);
  function k2() {
  }
  function oe2(e15, t3) {
    for (var n3 = e15.length; n3--; ) if (e15[n3] === t3) return n3;
  }
  function se2(e15, t3, n3, r3) {
    if (r3 ? t3[oe2(t3, r3)] = n3 : t3[t3.length++] = n3, e15) {
      n3.ownerElement = e15;
      var i3 = e15.ownerDocument;
      i3 && (r3 && he2(i3, e15, r3), me2(i3, e15, n3));
    }
  }
  function ce2(e15, t3, n3) {
    var r3 = oe2(t3, n3);
    if (r3 >= 0) {
      for (var i3 = t3.length - 1; r3 < i3; ) t3[r3] = t3[++r3];
      if (t3.length = i3, e15) {
        var a3 = e15.ownerDocument;
        a3 && (he2(a3, e15, n3), n3.ownerElement = null);
      }
    } else throw new O2(E2, Error(e15.tagName + `@` + n3));
  }
  k2.prototype = { length: 0, item: re2.prototype.item, getNamedItem: function(e15) {
    for (var t3 = this.length; t3--; ) {
      var n3 = this[t3];
      if (n3.nodeName == e15) return n3;
    }
  }, setNamedItem: function(e15) {
    var t3 = e15.ownerElement;
    if (t3 && t3 != this._ownerElement) throw new O2(D2);
    var n3 = this.getNamedItem(e15.nodeName);
    return se2(this._ownerElement, this, e15, n3), n3;
  }, setNamedItemNS: function(e15) {
    var t3 = e15.ownerElement, n3;
    if (t3 && t3 != this._ownerElement) throw new O2(D2);
    return n3 = this.getNamedItemNS(e15.namespaceURI, e15.localName), se2(this._ownerElement, this, e15, n3), n3;
  }, removeNamedItem: function(e15) {
    var t3 = this.getNamedItem(e15);
    return ce2(this._ownerElement, this, t3), t3;
  }, removeNamedItemNS: function(e15, t3) {
    var n3 = this.getNamedItemNS(e15, t3);
    return ce2(this._ownerElement, this, n3), n3;
  }, getNamedItemNS: function(e15, t3) {
    for (var n3 = this.length; n3--; ) {
      var r3 = this[n3];
      if (r3.localName == t3 && r3.namespaceURI == e15) return r3;
    }
    return null;
  } };
  function le2() {
  }
  le2.prototype = { hasFeature: function(e15, t3) {
    return true;
  }, createDocument: function(e15, t3, n3) {
    var r3 = new pe2();
    if (r3.implementation = this, r3.childNodes = new re2(), r3.doctype = n3 || null, n3 && r3.appendChild(n3), t3) {
      var i3 = r3.createElementNS(e15, t3);
      r3.appendChild(i3);
    }
    return r3;
  }, createDocumentType: function(e15, t3, n3) {
    var r3 = new Pe2();
    return r3.name = e15, r3.nodeName = e15, r3.publicId = t3 || ``, r3.systemId = n3 || ``, r3;
  } };
  function A2() {
  }
  A2.prototype = { firstChild: null, lastChild: null, previousSibling: null, nextSibling: null, attributes: null, parentNode: null, childNodes: null, ownerDocument: null, nodeValue: null, namespaceURI: null, prefix: null, localName: null, insertBefore: function(e15, t3) {
    return Ee2(this, e15, t3);
  }, replaceChild: function(e15, t3) {
    Ee2(this, e15, t3, Te2), t3 && this.removeChild(t3);
  }, removeChild: function(e15) {
    return _e2(this, e15);
  }, appendChild: function(e15) {
    return this.insertBefore(e15, null);
  }, hasChildNodes: function() {
    return this.firstChild != null;
  }, cloneNode: function(e15) {
    return We2(this.ownerDocument || this, this, e15);
  }, normalize: function() {
    fe2(this, null, { enter: function(e15) {
      for (var t3 = e15.firstChild; t3; ) {
        var n3 = t3.nextSibling;
        n3 !== null && n3.nodeType === m2 && t3.nodeType === m2 ? (e15.removeChild(n3), t3.appendData(n3.data)) : t3 = n3;
      }
      return true;
    } });
  }, isSupported: function(e15, t3) {
    return this.ownerDocument.implementation.hasFeature(e15, t3);
  }, hasAttributes: function() {
    return this.attributes.length > 0;
  }, lookupPrefix: function(e15) {
    for (var t3 = this; t3; ) {
      var n3 = t3._nsMap;
      if (n3) {
        for (var r3 in n3) if (Object.prototype.hasOwnProperty.call(n3, r3) && n3[r3] === e15) return r3;
      }
      t3 = t3.nodeType == p2 ? t3.ownerDocument : t3.parentNode;
    }
    return null;
  }, lookupNamespaceURI: function(e15) {
    for (var t3 = this; t3; ) {
      var n3 = t3._nsMap;
      if (n3 && Object.prototype.hasOwnProperty.call(n3, e15)) return n3[e15];
      t3 = t3.nodeType == p2 ? t3.ownerDocument : t3.parentNode;
    }
    return null;
  }, isDefaultNamespace: function(e15) {
    return this.lookupPrefix(e15) == null;
  } };
  function ue2(e15) {
    return e15 == `<` && `&lt;` || e15 == `>` && `&gt;` || e15 == `&` && `&amp;` || e15 == `"` && `&quot;` || `&#` + e15.charCodeAt() + `;`;
  }
  l2(d2, A2), l2(d2, A2.prototype);
  function de2(e15, t3) {
    return fe2(e15, null, { enter: function(e16) {
      return t3(e16) ? fe2.STOP : true;
    } }) === fe2.STOP;
  }
  function fe2(e15, t3, n3) {
    for (var r3 = [{ node: e15, context: t3, phase: fe2.ENTER }]; r3.length > 0; ) {
      var i3 = r3.pop();
      if (i3.phase === fe2.ENTER) {
        var a3 = n3.enter(i3.node, i3.context);
        if (a3 === fe2.STOP) return fe2.STOP;
        if (r3.push({ node: i3.node, context: a3, phase: fe2.EXIT }), a3 == null) continue;
        for (var o3 = i3.node.lastChild; o3; ) r3.push({ node: o3, context: a3, phase: fe2.ENTER }), o3 = o3.previousSibling;
      } else n3.exit && n3.exit(i3.node, i3.context);
    }
  }
  fe2.STOP = /* @__PURE__ */ Symbol(`walkDOM.STOP`), fe2.ENTER = 0, fe2.EXIT = 1;
  function pe2() {
    this.ownerDocument = this;
  }
  function me2(e15, t3, n3) {
    e15 && e15._inc++, n3.namespaceURI === r2.XMLNS && (t3._nsMap[n3.prefix ? n3.localName : ``] = n3.value);
  }
  function he2(e15, t3, n3, i3) {
    e15 && e15._inc++, n3.namespaceURI === r2.XMLNS && delete t3._nsMap[n3.prefix ? n3.localName : ``];
  }
  function ge2(e15, t3, n3) {
    if (e15 && e15._inc) {
      e15._inc++;
      var r3 = t3.childNodes;
      if (n3) r3[r3.length++] = n3;
      else {
        for (var i3 = t3.firstChild, a3 = 0; i3; ) r3[a3++] = i3, i3 = i3.nextSibling;
        r3.length = a3, delete r3[r3.length];
      }
    }
  }
  function _e2(e15, t3) {
    var n3 = t3.previousSibling, r3 = t3.nextSibling;
    return n3 ? n3.nextSibling = r3 : e15.firstChild = r3, r3 ? r3.previousSibling = n3 : e15.lastChild = n3, t3.parentNode = null, t3.previousSibling = null, t3.nextSibling = null, ge2(e15.ownerDocument, e15), t3;
  }
  function ve2(e15) {
    return e15 && (e15.nodeType === A2.DOCUMENT_NODE || e15.nodeType === A2.DOCUMENT_FRAGMENT_NODE || e15.nodeType === A2.ELEMENT_NODE);
  }
  function ye2(e15) {
    return e15 && (be2(e15) || xe2(e15) || j2(e15) || e15.nodeType === A2.DOCUMENT_FRAGMENT_NODE || e15.nodeType === A2.COMMENT_NODE || e15.nodeType === A2.PROCESSING_INSTRUCTION_NODE);
  }
  function j2(e15) {
    return e15 && e15.nodeType === A2.DOCUMENT_TYPE_NODE;
  }
  function be2(e15) {
    return e15 && e15.nodeType === A2.ELEMENT_NODE;
  }
  function xe2(e15) {
    return e15 && e15.nodeType === A2.TEXT_NODE;
  }
  function Se2(e15, t3) {
    var r3 = e15.childNodes || [];
    if (n2(r3, be2) || j2(t3)) return false;
    var i3 = n2(r3, j2);
    return !(t3 && i3 && r3.indexOf(i3) > r3.indexOf(t3));
  }
  function Ce2(e15, t3) {
    var r3 = e15.childNodes || [];
    function i3(e16) {
      return be2(e16) && e16 !== t3;
    }
    if (n2(r3, i3)) return false;
    var a3 = n2(r3, j2);
    return !(t3 && a3 && r3.indexOf(a3) > r3.indexOf(t3));
  }
  function M2(e15, t3, n3) {
    if (!ve2(e15)) throw new O2(T2, `Unexpected parent node type ` + e15.nodeType);
    if (n3 && n3.parentNode !== e15) throw new O2(E2, `child not in parent`);
    if (!ye2(t3) || j2(t3) && e15.nodeType !== A2.DOCUMENT_NODE) throw new O2(T2, `Unexpected node type ` + t3.nodeType + ` for parent node type ` + e15.nodeType);
  }
  function we2(e15, t3, r3) {
    var i3 = e15.childNodes || [], a3 = t3.childNodes || [];
    if (t3.nodeType === A2.DOCUMENT_FRAGMENT_NODE) {
      var o3 = a3.filter(be2);
      if (o3.length > 1 || n2(a3, xe2)) throw new O2(T2, `More than one element or text in fragment`);
      if (o3.length === 1 && !Se2(e15, r3)) throw new O2(T2, `Element in fragment can not be inserted before doctype`);
    }
    if (be2(t3) && !Se2(e15, r3)) throw new O2(T2, `Only one element can be added and only after doctype`);
    if (j2(t3)) {
      if (n2(i3, j2)) throw new O2(T2, `Only one doctype is allowed`);
      var s3 = n2(i3, be2);
      if (r3 && i3.indexOf(s3) < i3.indexOf(r3)) throw new O2(T2, `Doctype can only be inserted before an element`);
      if (!r3 && s3) throw new O2(T2, `Doctype can not be appended since element is present`);
    }
  }
  function Te2(e15, t3, r3) {
    var i3 = e15.childNodes || [], a3 = t3.childNodes || [];
    if (t3.nodeType === A2.DOCUMENT_FRAGMENT_NODE) {
      var o3 = a3.filter(be2);
      if (o3.length > 1 || n2(a3, xe2)) throw new O2(T2, `More than one element or text in fragment`);
      if (o3.length === 1 && !Ce2(e15, r3)) throw new O2(T2, `Element in fragment can not be inserted before doctype`);
    }
    if (be2(t3) && !Ce2(e15, r3)) throw new O2(T2, `Only one element can be added and only after doctype`);
    if (j2(t3)) {
      let e16 = function(e17) {
        return j2(e17) && e17 !== r3;
      };
      if (n2(i3, e16)) throw new O2(T2, `Only one doctype is allowed`);
      var s3 = n2(i3, be2);
      if (r3 && i3.indexOf(s3) < i3.indexOf(r3)) throw new O2(T2, `Doctype can only be inserted before an element`);
    }
  }
  function Ee2(e15, t3, n3, r3) {
    M2(e15, t3, n3), e15.nodeType === A2.DOCUMENT_NODE && (r3 || we2)(e15, t3, n3);
    var i3 = t3.parentNode;
    if (i3 && i3.removeChild(t3), t3.nodeType === S2) {
      var a3 = t3.firstChild;
      if (a3 == null) return t3;
      var o3 = t3.lastChild;
    } else a3 = o3 = t3;
    var s3 = n3 ? n3.previousSibling : e15.lastChild;
    a3.previousSibling = s3, o3.nextSibling = n3, s3 ? s3.nextSibling = a3 : e15.firstChild = a3, n3 == null ? e15.lastChild = o3 : n3.previousSibling = o3;
    do {
      a3.parentNode = e15;
      var c3 = e15.ownerDocument || e15;
      N2(a3, c3);
    } while (a3 !== o3 && (a3 = a3.nextSibling));
    return ge2(e15.ownerDocument || e15, e15), t3.nodeType == S2 && (t3.firstChild = t3.lastChild = null), t3;
  }
  function N2(e15, t3) {
    if (e15.ownerDocument !== t3) {
      if (e15.ownerDocument = t3, e15.nodeType === f2 && e15.attributes) for (var n3 = 0; n3 < e15.attributes.length; n3++) {
        var r3 = e15.attributes.item(n3);
        r3 && (r3.ownerDocument = t3);
      }
      for (var i3 = e15.firstChild; i3; ) N2(i3, t3), i3 = i3.nextSibling;
    }
  }
  function De2(e15, t3) {
    return t3.parentNode && t3.parentNode.removeChild(t3), t3.parentNode = e15, t3.previousSibling = e15.lastChild, t3.nextSibling = null, t3.previousSibling ? t3.previousSibling.nextSibling = t3 : e15.firstChild = t3, e15.lastChild = t3, ge2(e15.ownerDocument, e15, t3), N2(t3, e15.ownerDocument || e15), t3;
  }
  pe2.prototype = { nodeName: `#document`, nodeType: b2, doctype: null, documentElement: null, _inc: 1, insertBefore: function(e15, t3) {
    if (e15.nodeType == S2) {
      for (var n3 = e15.firstChild; n3; ) {
        var r3 = n3.nextSibling;
        this.insertBefore(n3, t3), n3 = r3;
      }
      return e15;
    }
    return Ee2(this, e15, t3), N2(e15, this), this.documentElement === null && e15.nodeType === f2 && (this.documentElement = e15), e15;
  }, removeChild: function(e15) {
    return this.documentElement == e15 && (this.documentElement = null), _e2(this, e15);
  }, replaceChild: function(e15, t3) {
    Ee2(this, e15, t3, Te2), N2(e15, this), t3 && this.removeChild(t3), be2(e15) && (this.documentElement = e15);
  }, importNode: function(e15, t3) {
    return Ue2(this, e15, t3);
  }, getElementById: function(e15) {
    var t3 = null;
    return de2(this.documentElement, function(n3) {
      if (n3.nodeType == f2 && n3.getAttribute(`id`) == e15) return t3 = n3, true;
    }), t3;
  }, getElementsByClassName: function(e15) {
    var t3 = s2(e15);
    return new ie2(this, function(n3) {
      var r3 = [];
      return t3.length > 0 && de2(n3.documentElement, function(i3) {
        if (i3 !== n3 && i3.nodeType === f2) {
          var a3 = i3.getAttribute(`class`);
          if (a3) {
            var o3 = e15 === a3;
            if (!o3) {
              var l3 = s2(a3);
              o3 = t3.every(c2(l3));
            }
            o3 && r3.push(i3);
          }
        }
      }), r3;
    });
  }, createElement: function(e15) {
    var t3 = new Oe2();
    t3.ownerDocument = this, t3.nodeName = e15, t3.tagName = e15, t3.localName = e15, t3.childNodes = new re2();
    var n3 = t3.attributes = new k2();
    return n3._ownerElement = t3, t3;
  }, createDocumentFragment: function() {
    var e15 = new F2();
    return e15.ownerDocument = this, e15.childNodes = new re2(), e15;
  }, createTextNode: function(e15) {
    var t3 = new Ae2();
    return t3.ownerDocument = this, t3.appendData(e15), t3;
  }, createComment: function(e15) {
    var t3 = new Me2();
    return t3.ownerDocument = this, t3.appendData(e15), t3;
  }, createCDATASection: function(e15) {
    if (e15.indexOf(`]]>`) !== -1) throw new O2(te2, `data contains "]]>"`);
    var t3 = new Ne2();
    return t3.ownerDocument = this, t3.appendData(e15), t3;
  }, createProcessingInstruction: function(e15, t3) {
    var n3 = new Re2();
    return n3.ownerDocument = this, n3.tagName = n3.nodeName = n3.target = e15, n3.nodeValue = n3.data = t3, n3;
  }, createAttribute: function(e15) {
    var t3 = new ke2();
    return t3.ownerDocument = this, t3.name = e15, t3.nodeName = e15, t3.localName = e15, t3.specified = true, t3;
  }, createEntityReference: function(e15) {
    var t3 = new Le2();
    return t3.ownerDocument = this, t3.nodeName = e15, t3;
  }, createElementNS: function(e15, t3) {
    var n3 = new Oe2(), r3 = t3.split(`:`), i3 = n3.attributes = new k2();
    return n3.childNodes = new re2(), n3.ownerDocument = this, n3.nodeName = t3, n3.tagName = t3, n3.namespaceURI = e15, r3.length == 2 ? (n3.prefix = r3[0], n3.localName = r3[1]) : n3.localName = t3, i3._ownerElement = n3, n3;
  }, createAttributeNS: function(e15, t3) {
    var n3 = new ke2(), r3 = t3.split(`:`);
    return n3.ownerDocument = this, n3.nodeName = t3, n3.name = t3, n3.namespaceURI = e15, n3.specified = true, r3.length == 2 ? (n3.prefix = r3[0], n3.localName = r3[1]) : n3.localName = t3, n3;
  } }, u2(pe2, A2);
  function Oe2() {
    this._nsMap = {};
  }
  Oe2.prototype = { nodeType: f2, hasAttribute: function(e15) {
    return this.getAttributeNode(e15) != null;
  }, getAttribute: function(e15) {
    var t3 = this.getAttributeNode(e15);
    return t3 && t3.value || ``;
  }, getAttributeNode: function(e15) {
    return this.attributes.getNamedItem(e15);
  }, setAttribute: function(e15, t3) {
    var n3 = this.ownerDocument.createAttribute(e15);
    n3.value = n3.nodeValue = `` + t3, this.setAttributeNode(n3);
  }, removeAttribute: function(e15) {
    var t3 = this.getAttributeNode(e15);
    t3 && this.removeAttributeNode(t3);
  }, appendChild: function(e15) {
    return e15.nodeType === S2 ? this.insertBefore(e15, null) : De2(this, e15);
  }, setAttributeNode: function(e15) {
    return this.attributes.setNamedItem(e15);
  }, setAttributeNodeNS: function(e15) {
    return this.attributes.setNamedItemNS(e15);
  }, removeAttributeNode: function(e15) {
    return this.attributes.removeNamedItem(e15.nodeName);
  }, removeAttributeNS: function(e15, t3) {
    var n3 = this.getAttributeNodeNS(e15, t3);
    n3 && this.removeAttributeNode(n3);
  }, hasAttributeNS: function(e15, t3) {
    return this.getAttributeNodeNS(e15, t3) != null;
  }, getAttributeNS: function(e15, t3) {
    var n3 = this.getAttributeNodeNS(e15, t3);
    return n3 && n3.value || ``;
  }, setAttributeNS: function(e15, t3, n3) {
    var r3 = this.ownerDocument.createAttributeNS(e15, t3);
    r3.value = r3.nodeValue = `` + n3, this.setAttributeNode(r3);
  }, getAttributeNodeNS: function(e15, t3) {
    return this.attributes.getNamedItemNS(e15, t3);
  }, getElementsByTagName: function(e15) {
    return new ie2(this, function(t3) {
      var n3 = [];
      return de2(t3, function(r3) {
        r3 !== t3 && r3.nodeType == f2 && (e15 === `*` || r3.tagName == e15) && n3.push(r3);
      }), n3;
    });
  }, getElementsByTagNameNS: function(e15, t3) {
    return new ie2(this, function(n3) {
      var r3 = [];
      return de2(n3, function(i3) {
        i3 !== n3 && i3.nodeType === f2 && (e15 === `*` || i3.namespaceURI === e15) && (t3 === `*` || i3.localName == t3) && r3.push(i3);
      }), r3;
    });
  } }, pe2.prototype.getElementsByTagName = Oe2.prototype.getElementsByTagName, pe2.prototype.getElementsByTagNameNS = Oe2.prototype.getElementsByTagNameNS, u2(Oe2, A2);
  function ke2() {
  }
  ke2.prototype.nodeType = p2, u2(ke2, A2);
  function P2() {
  }
  P2.prototype = { data: ``, substringData: function(e15, t3) {
    return this.data.substring(e15, e15 + t3);
  }, appendData: function(e15) {
    e15 = this.data + e15, this.nodeValue = this.data = e15, this.length = e15.length;
  }, insertData: function(e15, t3) {
    this.replaceData(e15, 0, t3);
  }, appendChild: function(e15) {
    throw Error(w2[T2]);
  }, deleteData: function(e15, t3) {
    this.replaceData(e15, t3, ``);
  }, replaceData: function(e15, t3, n3) {
    var r3 = this.data.substring(0, e15), i3 = this.data.substring(e15 + t3);
    n3 = r3 + n3 + i3, this.nodeValue = this.data = n3, this.length = n3.length;
  } }, u2(P2, A2);
  function Ae2() {
  }
  Ae2.prototype = { nodeName: `#text`, nodeType: m2, splitText: function(e15) {
    var t3 = this.data, n3 = t3.substring(e15);
    t3 = t3.substring(0, e15), this.data = this.nodeValue = t3, this.length = t3.length;
    var r3 = this.ownerDocument.createTextNode(n3);
    return this.parentNode && this.parentNode.insertBefore(r3, this.nextSibling), r3;
  } }, u2(Ae2, P2);
  function Me2() {
  }
  Me2.prototype = { nodeName: `#comment`, nodeType: y2 }, u2(Me2, P2);
  function Ne2() {
  }
  Ne2.prototype = { nodeName: `#cdata-section`, nodeType: h2 }, u2(Ne2, P2);
  function Pe2() {
  }
  Pe2.prototype.nodeType = x2, u2(Pe2, A2);
  function Fe2() {
  }
  Fe2.prototype.nodeType = ee2, u2(Fe2, A2);
  function Ie2() {
  }
  Ie2.prototype.nodeType = _2, u2(Ie2, A2);
  function Le2() {
  }
  Le2.prototype.nodeType = g2, u2(Le2, A2);
  function F2() {
  }
  F2.prototype.nodeName = `#document-fragment`, F2.prototype.nodeType = S2, u2(F2, A2);
  function Re2() {
  }
  Re2.prototype.nodeType = v2, u2(Re2, A2);
  function ze2() {
  }
  ze2.prototype.serializeToString = function(e15, t3, n3, r3) {
    return Be2.call(e15, t3, n3, r3);
  }, A2.prototype.toString = Be2;
  function Be2(e15, t3, n3) {
    var r3 = !!n3 && !!n3.requireWellFormed, i3 = [], a3 = this.nodeType == 9 && this.documentElement || this, o3 = a3.prefix, s3 = a3.namespaceURI;
    if (s3 && o3 == null) {
      var o3 = a3.lookupPrefix(s3);
      if (o3 == null) var c3 = [{ namespace: s3, prefix: null }];
    }
    return He2(this, i3, e15, t3, c3, r3), i3.join(``);
  }
  function Ve2(e15, t3, n3) {
    var i3 = e15.prefix || ``, a3 = e15.namespaceURI;
    if (!a3 || i3 === `xml` && a3 === r2.XML || a3 === r2.XMLNS) return false;
    for (var o3 = n3.length; o3--; ) {
      var s3 = n3[o3];
      if (s3.prefix === i3) return s3.namespace !== a3;
    }
    return true;
  }
  function I2(e15, t3, n3) {
    e15.push(` `, t3, `="`, n3.replace(/[<>&"\t\n\r]/g, ue2), `"`);
  }
  function He2(e15, t3, n3, i3, a3, o3) {
    a3 ||= [], fe2(e15, { ns: a3, isHTML: n3 }, { enter: function(e16, n4) {
      var a4 = n4.ns, s3 = n4.isHTML;
      if (i3) if (e16 = i3(e16), e16) {
        if (typeof e16 == `string`) return t3.push(e16), null;
      } else return null;
      switch (e16.nodeType) {
        case f2:
          var c3 = e16.attributes, l3 = c3.length, u3 = e16.tagName;
          s3 = r2.isHTML(e16.namespaceURI) || s3;
          var d3 = u3;
          if (!s3 && !e16.prefix && e16.namespaceURI) {
            for (var _3, ee3 = 0; ee3 < c3.length; ee3++) if (c3.item(ee3).name === `xmlns`) {
              _3 = c3.item(ee3).value;
              break;
            }
            if (!_3) for (var C3 = a4.length - 1; C3 >= 0; C3--) {
              var w3 = a4[C3];
              if (w3.prefix === `` && w3.namespace === e16.namespaceURI) {
                _3 = w3.namespace;
                break;
              }
            }
            if (_3 !== e16.namespaceURI) for (var C3 = a4.length - 1; C3 >= 0; C3--) {
              var w3 = a4[C3];
              if (w3.namespace === e16.namespaceURI) {
                w3.prefix && (d3 = w3.prefix + `:` + u3);
                break;
              }
            }
          }
          t3.push(`<`, d3);
          for (var T3 = a4.slice(), te3 = 0; te3 < l3; te3++) {
            var E3 = c3.item(te3);
            E3.prefix == `xmlns` ? T3.push({ prefix: E3.localName, namespace: E3.value }) : E3.nodeName == `xmlns` && T3.push({ prefix: ``, namespace: E3.value });
          }
          for (var te3 = 0; te3 < l3; te3++) {
            var E3 = c3.item(te3);
            if (Ve2(E3, s3, T3)) {
              var D3 = E3.prefix || ``, re3 = E3.namespaceURI;
              I2(t3, D3 ? `xmlns:` + D3 : `xmlns`, re3), T3.push({ prefix: D3, namespace: re3 });
            }
            var ie3 = i3 ? i3(E3) : E3;
            ie3 && (typeof ie3 == `string` ? t3.push(ie3) : I2(t3, ie3.name, ie3.value));
          }
          if (u3 === d3 && Ve2(e16, s3, T3)) {
            var ae3 = e16.prefix || ``, re3 = e16.namespaceURI;
            I2(t3, ae3 ? `xmlns:` + ae3 : `xmlns`, re3), T3.push({ prefix: ae3, namespace: re3 });
          }
          var k3 = e16.firstChild;
          if (k3 || s3 && !/^(?:meta|link|img|br|hr|input)$/i.test(u3)) {
            if (t3.push(`>`), s3 && /^script$/i.test(u3)) {
              for (; k3; ) k3.data ? t3.push(k3.data) : He2(k3, t3, s3, i3, T3.slice(), o3), k3 = k3.nextSibling;
              return t3.push(`</`, u3, `>`), null;
            }
            return { ns: T3, isHTML: s3, tag: d3 };
          } else return t3.push(`/>`), null;
        case b2:
        case S2:
          return { ns: a4.slice(), isHTML: s3, tag: null };
        case p2:
          return I2(t3, e16.name, e16.value), null;
        case m2:
          return t3.push(e16.data.replace(/[<&>]/g, ue2)), null;
        case h2:
          if (o3 && e16.data.indexOf(`]]>`) !== -1) throw new O2(ne2, `The CDATASection data contains "]]>"`);
          return t3.push(`<![CDATA[`, e16.data.replace(/]]>/g, `]]]]><![CDATA[>`), `]]>`), null;
        case y2:
          if (o3 && e16.data.indexOf(`-->`) !== -1) throw new O2(ne2, `The comment node data contains "-->"`);
          return t3.push(`<!--`, e16.data, `-->`), null;
        case x2:
          if (o3) {
            if (e16.publicId && !/^("[\x20\r\na-zA-Z0-9\-()+,.\/:=?;!*#@$_%']*"|'[\x20\r\na-zA-Z0-9\-()+,.\/:=?;!*#@$_%'"]*')$/.test(e16.publicId)) throw new O2(ne2, `DocumentType publicId is not a valid PubidLiteral`);
            if (e16.systemId && !/^("[^"]*"|'[^']*')$/.test(e16.systemId)) throw new O2(ne2, `DocumentType systemId is not a valid SystemLiteral`);
            if (e16.internalSubset && e16.internalSubset.indexOf(`]>`) !== -1) throw new O2(ne2, `DocumentType internalSubset contains "]>"`);
          }
          var oe3 = e16.publicId, se3 = e16.systemId;
          if (t3.push(`<!DOCTYPE `, e16.name), oe3) t3.push(` PUBLIC `, oe3), se3 && se3 != `.` && t3.push(` `, se3), t3.push(`>`);
          else if (se3 && se3 != `.`) t3.push(` SYSTEM `, se3, `>`);
          else {
            var ce3 = e16.internalSubset;
            ce3 && t3.push(` [`, ce3, `]`), t3.push(`>`);
          }
          return null;
        case v2:
          if (o3 && e16.data.indexOf(`?>`) !== -1) throw new O2(ne2, `The ProcessingInstruction data contains "?>"`);
          return t3.push(`<?`, e16.target, ` `, e16.data, `?>`), null;
        case g2:
          return t3.push(`&`, e16.nodeName, `;`), null;
        default:
          return t3.push(`??`, e16.nodeName), null;
      }
    }, exit: function(e16, n4) {
      n4 && n4.tag && t3.push(`</`, n4.tag, `>`);
    } });
  }
  function Ue2(e15, t3, n3) {
    var r3;
    return fe2(t3, null, { enter: function(t4, i3) {
      var a3 = t4.cloneNode(false);
      return a3.ownerDocument = e15, a3.parentNode = null, i3 === null ? r3 = a3 : i3.appendChild(a3), t4.nodeType === p2 || n3 ? a3 : null;
    } }), r3;
  }
  function We2(e15, t3, n3) {
    var r3;
    return fe2(t3, null, { enter: function(t4, i3) {
      var a3 = new t4.constructor();
      for (var o3 in t4) if (Object.prototype.hasOwnProperty.call(t4, o3)) {
        var s3 = t4[o3];
        typeof s3 != `object` && s3 != a3[o3] && (a3[o3] = s3);
      }
      t4.childNodes && (a3.childNodes = new re2()), a3.ownerDocument = e15;
      var c3 = n3;
      switch (a3.nodeType) {
        case f2:
          var l3 = t4.attributes, u3 = a3.attributes = new k2(), d3 = l3.length;
          u3._ownerElement = a3;
          for (var m3 = 0; m3 < d3; m3++) a3.setAttributeNode(We2(e15, l3.item(m3), true));
          break;
        case p2:
          c3 = true;
      }
      return i3 === null ? r3 = a3 : i3.appendChild(a3), c3 ? a3 : null;
    } }), r3;
  }
  function Ge2(e15, t3, n3) {
    e15[t3] = n3;
  }
  try {
    Object.defineProperty && (Object.defineProperty(ie2.prototype, "length", { get: function() {
      return ae2(this), this.$$length;
    } }), Object.defineProperty(A2.prototype, "textContent", { get: function() {
      if (this.nodeType === f2 || this.nodeType === S2) {
        var e15 = [];
        return fe2(this, null, { enter: function(t3) {
          if (t3.nodeType === f2 || t3.nodeType === S2) return true;
          if (t3.nodeType === v2 || t3.nodeType === y2) return null;
          e15.push(t3.nodeValue);
        } }), e15.join(``);
      }
      return this.nodeValue;
    }, set: function(e15) {
      switch (this.nodeType) {
        case f2:
        case S2:
          for (; this.firstChild; ) this.removeChild(this.firstChild);
          (e15 || String(e15)) && this.appendChild(this.ownerDocument.createTextNode(e15));
          break;
        default:
          this.data = e15, this.value = e15, this.nodeValue = e15;
      }
    } }), Ge2 = function(e15, t3, n3) {
      e15[`$$` + t3] = n3;
    });
  } catch {
  }
  e14.DocumentType = Pe2, e14.DOMException = O2, e14.DOMImplementation = le2, e14.Element = Oe2, e14.Node = A2, e14.NodeList = re2, e14.walkDOM = fe2, e14.XMLSerializer = ze2;
})), Ne = t(((e14) => {
  var t2 = je().freeze;
  e14.XML_ENTITIES = t2({ amp: `&`, apos: `'`, gt: `>`, lt: `<`, quot: `"` }), e14.HTML_ENTITIES = t2({ Aacute: `\xC1`, aacute: `\xE1`, Abreve: `\u0102`, abreve: `\u0103`, ac: `\u223E`, acd: `\u223F`, acE: `\u223E\u0333`, Acirc: `\xC2`, acirc: `\xE2`, acute: `\xB4`, Acy: `\u0410`, acy: `\u0430`, AElig: `\xC6`, aelig: `\xE6`, af: `\u2061`, Afr: `\u{1D504}`, afr: `\u{1D51E}`, Agrave: `\xC0`, agrave: `\xE0`, alefsym: `\u2135`, aleph: `\u2135`, Alpha: `\u0391`, alpha: `\u03B1`, Amacr: `\u0100`, amacr: `\u0101`, amalg: `\u2A3F`, AMP: `&`, amp: `&`, And: `\u2A53`, and: `\u2227`, andand: `\u2A55`, andd: `\u2A5C`, andslope: `\u2A58`, andv: `\u2A5A`, ang: `\u2220`, ange: `\u29A4`, angle: `\u2220`, angmsd: `\u2221`, angmsdaa: `\u29A8`, angmsdab: `\u29A9`, angmsdac: `\u29AA`, angmsdad: `\u29AB`, angmsdae: `\u29AC`, angmsdaf: `\u29AD`, angmsdag: `\u29AE`, angmsdah: `\u29AF`, angrt: `\u221F`, angrtvb: `\u22BE`, angrtvbd: `\u299D`, angsph: `\u2222`, angst: `\xC5`, angzarr: `\u237C`, Aogon: `\u0104`, aogon: `\u0105`, Aopf: `\u{1D538}`, aopf: `\u{1D552}`, ap: `\u2248`, apacir: `\u2A6F`, apE: `\u2A70`, ape: `\u224A`, apid: `\u224B`, apos: `'`, ApplyFunction: `\u2061`, approx: `\u2248`, approxeq: `\u224A`, Aring: `\xC5`, aring: `\xE5`, Ascr: `\u{1D49C}`, ascr: `\u{1D4B6}`, Assign: `\u2254`, ast: `*`, asymp: `\u2248`, asympeq: `\u224D`, Atilde: `\xC3`, atilde: `\xE3`, Auml: `\xC4`, auml: `\xE4`, awconint: `\u2233`, awint: `\u2A11`, backcong: `\u224C`, backepsilon: `\u03F6`, backprime: `\u2035`, backsim: `\u223D`, backsimeq: `\u22CD`, Backslash: `\u2216`, Barv: `\u2AE7`, barvee: `\u22BD`, Barwed: `\u2306`, barwed: `\u2305`, barwedge: `\u2305`, bbrk: `\u23B5`, bbrktbrk: `\u23B6`, bcong: `\u224C`, Bcy: `\u0411`, bcy: `\u0431`, bdquo: `\u201E`, becaus: `\u2235`, Because: `\u2235`, because: `\u2235`, bemptyv: `\u29B0`, bepsi: `\u03F6`, bernou: `\u212C`, Bernoullis: `\u212C`, Beta: `\u0392`, beta: `\u03B2`, beth: `\u2136`, between: `\u226C`, Bfr: `\u{1D505}`, bfr: `\u{1D51F}`, bigcap: `\u22C2`, bigcirc: `\u25EF`, bigcup: `\u22C3`, bigodot: `\u2A00`, bigoplus: `\u2A01`, bigotimes: `\u2A02`, bigsqcup: `\u2A06`, bigstar: `\u2605`, bigtriangledown: `\u25BD`, bigtriangleup: `\u25B3`, biguplus: `\u2A04`, bigvee: `\u22C1`, bigwedge: `\u22C0`, bkarow: `\u290D`, blacklozenge: `\u29EB`, blacksquare: `\u25AA`, blacktriangle: `\u25B4`, blacktriangledown: `\u25BE`, blacktriangleleft: `\u25C2`, blacktriangleright: `\u25B8`, blank: `\u2423`, blk12: `\u2592`, blk14: `\u2591`, blk34: `\u2593`, block: `\u2588`, bne: `=\u20E5`, bnequiv: `\u2261\u20E5`, bNot: `\u2AED`, bnot: `\u2310`, Bopf: `\u{1D539}`, bopf: `\u{1D553}`, bot: `\u22A5`, bottom: `\u22A5`, bowtie: `\u22C8`, boxbox: `\u29C9`, boxDL: `\u2557`, boxDl: `\u2556`, boxdL: `\u2555`, boxdl: `\u2510`, boxDR: `\u2554`, boxDr: `\u2553`, boxdR: `\u2552`, boxdr: `\u250C`, boxH: `\u2550`, boxh: `\u2500`, boxHD: `\u2566`, boxHd: `\u2564`, boxhD: `\u2565`, boxhd: `\u252C`, boxHU: `\u2569`, boxHu: `\u2567`, boxhU: `\u2568`, boxhu: `\u2534`, boxminus: `\u229F`, boxplus: `\u229E`, boxtimes: `\u22A0`, boxUL: `\u255D`, boxUl: `\u255C`, boxuL: `\u255B`, boxul: `\u2518`, boxUR: `\u255A`, boxUr: `\u2559`, boxuR: `\u2558`, boxur: `\u2514`, boxV: `\u2551`, boxv: `\u2502`, boxVH: `\u256C`, boxVh: `\u256B`, boxvH: `\u256A`, boxvh: `\u253C`, boxVL: `\u2563`, boxVl: `\u2562`, boxvL: `\u2561`, boxvl: `\u2524`, boxVR: `\u2560`, boxVr: `\u255F`, boxvR: `\u255E`, boxvr: `\u251C`, bprime: `\u2035`, Breve: `\u02D8`, breve: `\u02D8`, brvbar: `\xA6`, Bscr: `\u212C`, bscr: `\u{1D4B7}`, bsemi: `\u204F`, bsim: `\u223D`, bsime: `\u22CD`, bsol: `\\`, bsolb: `\u29C5`, bsolhsub: `\u27C8`, bull: `\u2022`, bullet: `\u2022`, bump: `\u224E`, bumpE: `\u2AAE`, bumpe: `\u224F`, Bumpeq: `\u224E`, bumpeq: `\u224F`, Cacute: `\u0106`, cacute: `\u0107`, Cap: `\u22D2`, cap: `\u2229`, capand: `\u2A44`, capbrcup: `\u2A49`, capcap: `\u2A4B`, capcup: `\u2A47`, capdot: `\u2A40`, CapitalDifferentialD: `\u2145`, caps: `\u2229\uFE00`, caret: `\u2041`, caron: `\u02C7`, Cayleys: `\u212D`, ccaps: `\u2A4D`, Ccaron: `\u010C`, ccaron: `\u010D`, Ccedil: `\xC7`, ccedil: `\xE7`, Ccirc: `\u0108`, ccirc: `\u0109`, Cconint: `\u2230`, ccups: `\u2A4C`, ccupssm: `\u2A50`, Cdot: `\u010A`, cdot: `\u010B`, cedil: `\xB8`, Cedilla: `\xB8`, cemptyv: `\u29B2`, cent: `\xA2`, CenterDot: `\xB7`, centerdot: `\xB7`, Cfr: `\u212D`, cfr: `\u{1D520}`, CHcy: `\u0427`, chcy: `\u0447`, check: `\u2713`, checkmark: `\u2713`, Chi: `\u03A7`, chi: `\u03C7`, cir: `\u25CB`, circ: `\u02C6`, circeq: `\u2257`, circlearrowleft: `\u21BA`, circlearrowright: `\u21BB`, circledast: `\u229B`, circledcirc: `\u229A`, circleddash: `\u229D`, CircleDot: `\u2299`, circledR: `\xAE`, circledS: `\u24C8`, CircleMinus: `\u2296`, CirclePlus: `\u2295`, CircleTimes: `\u2297`, cirE: `\u29C3`, cire: `\u2257`, cirfnint: `\u2A10`, cirmid: `\u2AEF`, cirscir: `\u29C2`, ClockwiseContourIntegral: `\u2232`, CloseCurlyDoubleQuote: `\u201D`, CloseCurlyQuote: `\u2019`, clubs: `\u2663`, clubsuit: `\u2663`, Colon: `\u2237`, colon: `:`, Colone: `\u2A74`, colone: `\u2254`, coloneq: `\u2254`, comma: `,`, commat: `@`, comp: `\u2201`, compfn: `\u2218`, complement: `\u2201`, complexes: `\u2102`, cong: `\u2245`, congdot: `\u2A6D`, Congruent: `\u2261`, Conint: `\u222F`, conint: `\u222E`, ContourIntegral: `\u222E`, Copf: `\u2102`, copf: `\u{1D554}`, coprod: `\u2210`, Coproduct: `\u2210`, COPY: `\xA9`, copy: `\xA9`, copysr: `\u2117`, CounterClockwiseContourIntegral: `\u2233`, crarr: `\u21B5`, Cross: `\u2A2F`, cross: `\u2717`, Cscr: `\u{1D49E}`, cscr: `\u{1D4B8}`, csub: `\u2ACF`, csube: `\u2AD1`, csup: `\u2AD0`, csupe: `\u2AD2`, ctdot: `\u22EF`, cudarrl: `\u2938`, cudarrr: `\u2935`, cuepr: `\u22DE`, cuesc: `\u22DF`, cularr: `\u21B6`, cularrp: `\u293D`, Cup: `\u22D3`, cup: `\u222A`, cupbrcap: `\u2A48`, CupCap: `\u224D`, cupcap: `\u2A46`, cupcup: `\u2A4A`, cupdot: `\u228D`, cupor: `\u2A45`, cups: `\u222A\uFE00`, curarr: `\u21B7`, curarrm: `\u293C`, curlyeqprec: `\u22DE`, curlyeqsucc: `\u22DF`, curlyvee: `\u22CE`, curlywedge: `\u22CF`, curren: `\xA4`, curvearrowleft: `\u21B6`, curvearrowright: `\u21B7`, cuvee: `\u22CE`, cuwed: `\u22CF`, cwconint: `\u2232`, cwint: `\u2231`, cylcty: `\u232D`, Dagger: `\u2021`, dagger: `\u2020`, daleth: `\u2138`, Darr: `\u21A1`, dArr: `\u21D3`, darr: `\u2193`, dash: `\u2010`, Dashv: `\u2AE4`, dashv: `\u22A3`, dbkarow: `\u290F`, dblac: `\u02DD`, Dcaron: `\u010E`, dcaron: `\u010F`, Dcy: `\u0414`, dcy: `\u0434`, DD: `\u2145`, dd: `\u2146`, ddagger: `\u2021`, ddarr: `\u21CA`, DDotrahd: `\u2911`, ddotseq: `\u2A77`, deg: `\xB0`, Del: `\u2207`, Delta: `\u0394`, delta: `\u03B4`, demptyv: `\u29B1`, dfisht: `\u297F`, Dfr: `\u{1D507}`, dfr: `\u{1D521}`, dHar: `\u2965`, dharl: `\u21C3`, dharr: `\u21C2`, DiacriticalAcute: `\xB4`, DiacriticalDot: `\u02D9`, DiacriticalDoubleAcute: `\u02DD`, DiacriticalGrave: "`", DiacriticalTilde: `\u02DC`, diam: `\u22C4`, Diamond: `\u22C4`, diamond: `\u22C4`, diamondsuit: `\u2666`, diams: `\u2666`, die: `\xA8`, DifferentialD: `\u2146`, digamma: `\u03DD`, disin: `\u22F2`, div: `\xF7`, divide: `\xF7`, divideontimes: `\u22C7`, divonx: `\u22C7`, DJcy: `\u0402`, djcy: `\u0452`, dlcorn: `\u231E`, dlcrop: `\u230D`, dollar: `$`, Dopf: `\u{1D53B}`, dopf: `\u{1D555}`, Dot: `\xA8`, dot: `\u02D9`, DotDot: `\u20DC`, doteq: `\u2250`, doteqdot: `\u2251`, DotEqual: `\u2250`, dotminus: `\u2238`, dotplus: `\u2214`, dotsquare: `\u22A1`, doublebarwedge: `\u2306`, DoubleContourIntegral: `\u222F`, DoubleDot: `\xA8`, DoubleDownArrow: `\u21D3`, DoubleLeftArrow: `\u21D0`, DoubleLeftRightArrow: `\u21D4`, DoubleLeftTee: `\u2AE4`, DoubleLongLeftArrow: `\u27F8`, DoubleLongLeftRightArrow: `\u27FA`, DoubleLongRightArrow: `\u27F9`, DoubleRightArrow: `\u21D2`, DoubleRightTee: `\u22A8`, DoubleUpArrow: `\u21D1`, DoubleUpDownArrow: `\u21D5`, DoubleVerticalBar: `\u2225`, DownArrow: `\u2193`, Downarrow: `\u21D3`, downarrow: `\u2193`, DownArrowBar: `\u2913`, DownArrowUpArrow: `\u21F5`, DownBreve: `\u0311`, downdownarrows: `\u21CA`, downharpoonleft: `\u21C3`, downharpoonright: `\u21C2`, DownLeftRightVector: `\u2950`, DownLeftTeeVector: `\u295E`, DownLeftVector: `\u21BD`, DownLeftVectorBar: `\u2956`, DownRightTeeVector: `\u295F`, DownRightVector: `\u21C1`, DownRightVectorBar: `\u2957`, DownTee: `\u22A4`, DownTeeArrow: `\u21A7`, drbkarow: `\u2910`, drcorn: `\u231F`, drcrop: `\u230C`, Dscr: `\u{1D49F}`, dscr: `\u{1D4B9}`, DScy: `\u0405`, dscy: `\u0455`, dsol: `\u29F6`, Dstrok: `\u0110`, dstrok: `\u0111`, dtdot: `\u22F1`, dtri: `\u25BF`, dtrif: `\u25BE`, duarr: `\u21F5`, duhar: `\u296F`, dwangle: `\u29A6`, DZcy: `\u040F`, dzcy: `\u045F`, dzigrarr: `\u27FF`, Eacute: `\xC9`, eacute: `\xE9`, easter: `\u2A6E`, Ecaron: `\u011A`, ecaron: `\u011B`, ecir: `\u2256`, Ecirc: `\xCA`, ecirc: `\xEA`, ecolon: `\u2255`, Ecy: `\u042D`, ecy: `\u044D`, eDDot: `\u2A77`, Edot: `\u0116`, eDot: `\u2251`, edot: `\u0117`, ee: `\u2147`, efDot: `\u2252`, Efr: `\u{1D508}`, efr: `\u{1D522}`, eg: `\u2A9A`, Egrave: `\xC8`, egrave: `\xE8`, egs: `\u2A96`, egsdot: `\u2A98`, el: `\u2A99`, Element: `\u2208`, elinters: `\u23E7`, ell: `\u2113`, els: `\u2A95`, elsdot: `\u2A97`, Emacr: `\u0112`, emacr: `\u0113`, empty: `\u2205`, emptyset: `\u2205`, EmptySmallSquare: `\u25FB`, emptyv: `\u2205`, EmptyVerySmallSquare: `\u25AB`, emsp: `\u2003`, emsp13: `\u2004`, emsp14: `\u2005`, ENG: `\u014A`, eng: `\u014B`, ensp: `\u2002`, Eogon: `\u0118`, eogon: `\u0119`, Eopf: `\u{1D53C}`, eopf: `\u{1D556}`, epar: `\u22D5`, eparsl: `\u29E3`, eplus: `\u2A71`, epsi: `\u03B5`, Epsilon: `\u0395`, epsilon: `\u03B5`, epsiv: `\u03F5`, eqcirc: `\u2256`, eqcolon: `\u2255`, eqsim: `\u2242`, eqslantgtr: `\u2A96`, eqslantless: `\u2A95`, Equal: `\u2A75`, equals: `=`, EqualTilde: `\u2242`, equest: `\u225F`, Equilibrium: `\u21CC`, equiv: `\u2261`, equivDD: `\u2A78`, eqvparsl: `\u29E5`, erarr: `\u2971`, erDot: `\u2253`, Escr: `\u2130`, escr: `\u212F`, esdot: `\u2250`, Esim: `\u2A73`, esim: `\u2242`, Eta: `\u0397`, eta: `\u03B7`, ETH: `\xD0`, eth: `\xF0`, Euml: `\xCB`, euml: `\xEB`, euro: `\u20AC`, excl: `!`, exist: `\u2203`, Exists: `\u2203`, expectation: `\u2130`, ExponentialE: `\u2147`, exponentiale: `\u2147`, fallingdotseq: `\u2252`, Fcy: `\u0424`, fcy: `\u0444`, female: `\u2640`, ffilig: `\uFB03`, fflig: `\uFB00`, ffllig: `\uFB04`, Ffr: `\u{1D509}`, ffr: `\u{1D523}`, filig: `\uFB01`, FilledSmallSquare: `\u25FC`, FilledVerySmallSquare: `\u25AA`, fjlig: `fj`, flat: `\u266D`, fllig: `\uFB02`, fltns: `\u25B1`, fnof: `\u0192`, Fopf: `\u{1D53D}`, fopf: `\u{1D557}`, ForAll: `\u2200`, forall: `\u2200`, fork: `\u22D4`, forkv: `\u2AD9`, Fouriertrf: `\u2131`, fpartint: `\u2A0D`, frac12: `\xBD`, frac13: `\u2153`, frac14: `\xBC`, frac15: `\u2155`, frac16: `\u2159`, frac18: `\u215B`, frac23: `\u2154`, frac25: `\u2156`, frac34: `\xBE`, frac35: `\u2157`, frac38: `\u215C`, frac45: `\u2158`, frac56: `\u215A`, frac58: `\u215D`, frac78: `\u215E`, frasl: `\u2044`, frown: `\u2322`, Fscr: `\u2131`, fscr: `\u{1D4BB}`, gacute: `\u01F5`, Gamma: `\u0393`, gamma: `\u03B3`, Gammad: `\u03DC`, gammad: `\u03DD`, gap: `\u2A86`, Gbreve: `\u011E`, gbreve: `\u011F`, Gcedil: `\u0122`, Gcirc: `\u011C`, gcirc: `\u011D`, Gcy: `\u0413`, gcy: `\u0433`, Gdot: `\u0120`, gdot: `\u0121`, gE: `\u2267`, ge: `\u2265`, gEl: `\u2A8C`, gel: `\u22DB`, geq: `\u2265`, geqq: `\u2267`, geqslant: `\u2A7E`, ges: `\u2A7E`, gescc: `\u2AA9`, gesdot: `\u2A80`, gesdoto: `\u2A82`, gesdotol: `\u2A84`, gesl: `\u22DB\uFE00`, gesles: `\u2A94`, Gfr: `\u{1D50A}`, gfr: `\u{1D524}`, Gg: `\u22D9`, gg: `\u226B`, ggg: `\u22D9`, gimel: `\u2137`, GJcy: `\u0403`, gjcy: `\u0453`, gl: `\u2277`, gla: `\u2AA5`, glE: `\u2A92`, glj: `\u2AA4`, gnap: `\u2A8A`, gnapprox: `\u2A8A`, gnE: `\u2269`, gne: `\u2A88`, gneq: `\u2A88`, gneqq: `\u2269`, gnsim: `\u22E7`, Gopf: `\u{1D53E}`, gopf: `\u{1D558}`, grave: "`", GreaterEqual: `\u2265`, GreaterEqualLess: `\u22DB`, GreaterFullEqual: `\u2267`, GreaterGreater: `\u2AA2`, GreaterLess: `\u2277`, GreaterSlantEqual: `\u2A7E`, GreaterTilde: `\u2273`, Gscr: `\u{1D4A2}`, gscr: `\u210A`, gsim: `\u2273`, gsime: `\u2A8E`, gsiml: `\u2A90`, Gt: `\u226B`, GT: `>`, gt: `>`, gtcc: `\u2AA7`, gtcir: `\u2A7A`, gtdot: `\u22D7`, gtlPar: `\u2995`, gtquest: `\u2A7C`, gtrapprox: `\u2A86`, gtrarr: `\u2978`, gtrdot: `\u22D7`, gtreqless: `\u22DB`, gtreqqless: `\u2A8C`, gtrless: `\u2277`, gtrsim: `\u2273`, gvertneqq: `\u2269\uFE00`, gvnE: `\u2269\uFE00`, Hacek: `\u02C7`, hairsp: `\u200A`, half: `\xBD`, hamilt: `\u210B`, HARDcy: `\u042A`, hardcy: `\u044A`, hArr: `\u21D4`, harr: `\u2194`, harrcir: `\u2948`, harrw: `\u21AD`, Hat: `^`, hbar: `\u210F`, Hcirc: `\u0124`, hcirc: `\u0125`, hearts: `\u2665`, heartsuit: `\u2665`, hellip: `\u2026`, hercon: `\u22B9`, Hfr: `\u210C`, hfr: `\u{1D525}`, HilbertSpace: `\u210B`, hksearow: `\u2925`, hkswarow: `\u2926`, hoarr: `\u21FF`, homtht: `\u223B`, hookleftarrow: `\u21A9`, hookrightarrow: `\u21AA`, Hopf: `\u210D`, hopf: `\u{1D559}`, horbar: `\u2015`, HorizontalLine: `\u2500`, Hscr: `\u210B`, hscr: `\u{1D4BD}`, hslash: `\u210F`, Hstrok: `\u0126`, hstrok: `\u0127`, HumpDownHump: `\u224E`, HumpEqual: `\u224F`, hybull: `\u2043`, hyphen: `\u2010`, Iacute: `\xCD`, iacute: `\xED`, ic: `\u2063`, Icirc: `\xCE`, icirc: `\xEE`, Icy: `\u0418`, icy: `\u0438`, Idot: `\u0130`, IEcy: `\u0415`, iecy: `\u0435`, iexcl: `\xA1`, iff: `\u21D4`, Ifr: `\u2111`, ifr: `\u{1D526}`, Igrave: `\xCC`, igrave: `\xEC`, ii: `\u2148`, iiiint: `\u2A0C`, iiint: `\u222D`, iinfin: `\u29DC`, iiota: `\u2129`, IJlig: `\u0132`, ijlig: `\u0133`, Im: `\u2111`, Imacr: `\u012A`, imacr: `\u012B`, image: `\u2111`, ImaginaryI: `\u2148`, imagline: `\u2110`, imagpart: `\u2111`, imath: `\u0131`, imof: `\u22B7`, imped: `\u01B5`, Implies: `\u21D2`, in: `\u2208`, incare: `\u2105`, infin: `\u221E`, infintie: `\u29DD`, inodot: `\u0131`, Int: `\u222C`, int: `\u222B`, intcal: `\u22BA`, integers: `\u2124`, Integral: `\u222B`, intercal: `\u22BA`, Intersection: `\u22C2`, intlarhk: `\u2A17`, intprod: `\u2A3C`, InvisibleComma: `\u2063`, InvisibleTimes: `\u2062`, IOcy: `\u0401`, iocy: `\u0451`, Iogon: `\u012E`, iogon: `\u012F`, Iopf: `\u{1D540}`, iopf: `\u{1D55A}`, Iota: `\u0399`, iota: `\u03B9`, iprod: `\u2A3C`, iquest: `\xBF`, Iscr: `\u2110`, iscr: `\u{1D4BE}`, isin: `\u2208`, isindot: `\u22F5`, isinE: `\u22F9`, isins: `\u22F4`, isinsv: `\u22F3`, isinv: `\u2208`, it: `\u2062`, Itilde: `\u0128`, itilde: `\u0129`, Iukcy: `\u0406`, iukcy: `\u0456`, Iuml: `\xCF`, iuml: `\xEF`, Jcirc: `\u0134`, jcirc: `\u0135`, Jcy: `\u0419`, jcy: `\u0439`, Jfr: `\u{1D50D}`, jfr: `\u{1D527}`, jmath: `\u0237`, Jopf: `\u{1D541}`, jopf: `\u{1D55B}`, Jscr: `\u{1D4A5}`, jscr: `\u{1D4BF}`, Jsercy: `\u0408`, jsercy: `\u0458`, Jukcy: `\u0404`, jukcy: `\u0454`, Kappa: `\u039A`, kappa: `\u03BA`, kappav: `\u03F0`, Kcedil: `\u0136`, kcedil: `\u0137`, Kcy: `\u041A`, kcy: `\u043A`, Kfr: `\u{1D50E}`, kfr: `\u{1D528}`, kgreen: `\u0138`, KHcy: `\u0425`, khcy: `\u0445`, KJcy: `\u040C`, kjcy: `\u045C`, Kopf: `\u{1D542}`, kopf: `\u{1D55C}`, Kscr: `\u{1D4A6}`, kscr: `\u{1D4C0}`, lAarr: `\u21DA`, Lacute: `\u0139`, lacute: `\u013A`, laemptyv: `\u29B4`, lagran: `\u2112`, Lambda: `\u039B`, lambda: `\u03BB`, Lang: `\u27EA`, lang: `\u27E8`, langd: `\u2991`, langle: `\u27E8`, lap: `\u2A85`, Laplacetrf: `\u2112`, laquo: `\xAB`, Larr: `\u219E`, lArr: `\u21D0`, larr: `\u2190`, larrb: `\u21E4`, larrbfs: `\u291F`, larrfs: `\u291D`, larrhk: `\u21A9`, larrlp: `\u21AB`, larrpl: `\u2939`, larrsim: `\u2973`, larrtl: `\u21A2`, lat: `\u2AAB`, lAtail: `\u291B`, latail: `\u2919`, late: `\u2AAD`, lates: `\u2AAD\uFE00`, lBarr: `\u290E`, lbarr: `\u290C`, lbbrk: `\u2772`, lbrace: `{`, lbrack: `[`, lbrke: `\u298B`, lbrksld: `\u298F`, lbrkslu: `\u298D`, Lcaron: `\u013D`, lcaron: `\u013E`, Lcedil: `\u013B`, lcedil: `\u013C`, lceil: `\u2308`, lcub: `{`, Lcy: `\u041B`, lcy: `\u043B`, ldca: `\u2936`, ldquo: `\u201C`, ldquor: `\u201E`, ldrdhar: `\u2967`, ldrushar: `\u294B`, ldsh: `\u21B2`, lE: `\u2266`, le: `\u2264`, LeftAngleBracket: `\u27E8`, LeftArrow: `\u2190`, Leftarrow: `\u21D0`, leftarrow: `\u2190`, LeftArrowBar: `\u21E4`, LeftArrowRightArrow: `\u21C6`, leftarrowtail: `\u21A2`, LeftCeiling: `\u2308`, LeftDoubleBracket: `\u27E6`, LeftDownTeeVector: `\u2961`, LeftDownVector: `\u21C3`, LeftDownVectorBar: `\u2959`, LeftFloor: `\u230A`, leftharpoondown: `\u21BD`, leftharpoonup: `\u21BC`, leftleftarrows: `\u21C7`, LeftRightArrow: `\u2194`, Leftrightarrow: `\u21D4`, leftrightarrow: `\u2194`, leftrightarrows: `\u21C6`, leftrightharpoons: `\u21CB`, leftrightsquigarrow: `\u21AD`, LeftRightVector: `\u294E`, LeftTee: `\u22A3`, LeftTeeArrow: `\u21A4`, LeftTeeVector: `\u295A`, leftthreetimes: `\u22CB`, LeftTriangle: `\u22B2`, LeftTriangleBar: `\u29CF`, LeftTriangleEqual: `\u22B4`, LeftUpDownVector: `\u2951`, LeftUpTeeVector: `\u2960`, LeftUpVector: `\u21BF`, LeftUpVectorBar: `\u2958`, LeftVector: `\u21BC`, LeftVectorBar: `\u2952`, lEg: `\u2A8B`, leg: `\u22DA`, leq: `\u2264`, leqq: `\u2266`, leqslant: `\u2A7D`, les: `\u2A7D`, lescc: `\u2AA8`, lesdot: `\u2A7F`, lesdoto: `\u2A81`, lesdotor: `\u2A83`, lesg: `\u22DA\uFE00`, lesges: `\u2A93`, lessapprox: `\u2A85`, lessdot: `\u22D6`, lesseqgtr: `\u22DA`, lesseqqgtr: `\u2A8B`, LessEqualGreater: `\u22DA`, LessFullEqual: `\u2266`, LessGreater: `\u2276`, lessgtr: `\u2276`, LessLess: `\u2AA1`, lesssim: `\u2272`, LessSlantEqual: `\u2A7D`, LessTilde: `\u2272`, lfisht: `\u297C`, lfloor: `\u230A`, Lfr: `\u{1D50F}`, lfr: `\u{1D529}`, lg: `\u2276`, lgE: `\u2A91`, lHar: `\u2962`, lhard: `\u21BD`, lharu: `\u21BC`, lharul: `\u296A`, lhblk: `\u2584`, LJcy: `\u0409`, ljcy: `\u0459`, Ll: `\u22D8`, ll: `\u226A`, llarr: `\u21C7`, llcorner: `\u231E`, Lleftarrow: `\u21DA`, llhard: `\u296B`, lltri: `\u25FA`, Lmidot: `\u013F`, lmidot: `\u0140`, lmoust: `\u23B0`, lmoustache: `\u23B0`, lnap: `\u2A89`, lnapprox: `\u2A89`, lnE: `\u2268`, lne: `\u2A87`, lneq: `\u2A87`, lneqq: `\u2268`, lnsim: `\u22E6`, loang: `\u27EC`, loarr: `\u21FD`, lobrk: `\u27E6`, LongLeftArrow: `\u27F5`, Longleftarrow: `\u27F8`, longleftarrow: `\u27F5`, LongLeftRightArrow: `\u27F7`, Longleftrightarrow: `\u27FA`, longleftrightarrow: `\u27F7`, longmapsto: `\u27FC`, LongRightArrow: `\u27F6`, Longrightarrow: `\u27F9`, longrightarrow: `\u27F6`, looparrowleft: `\u21AB`, looparrowright: `\u21AC`, lopar: `\u2985`, Lopf: `\u{1D543}`, lopf: `\u{1D55D}`, loplus: `\u2A2D`, lotimes: `\u2A34`, lowast: `\u2217`, lowbar: `_`, LowerLeftArrow: `\u2199`, LowerRightArrow: `\u2198`, loz: `\u25CA`, lozenge: `\u25CA`, lozf: `\u29EB`, lpar: `(`, lparlt: `\u2993`, lrarr: `\u21C6`, lrcorner: `\u231F`, lrhar: `\u21CB`, lrhard: `\u296D`, lrm: `\u200E`, lrtri: `\u22BF`, lsaquo: `\u2039`, Lscr: `\u2112`, lscr: `\u{1D4C1}`, Lsh: `\u21B0`, lsh: `\u21B0`, lsim: `\u2272`, lsime: `\u2A8D`, lsimg: `\u2A8F`, lsqb: `[`, lsquo: `\u2018`, lsquor: `\u201A`, Lstrok: `\u0141`, lstrok: `\u0142`, Lt: `\u226A`, LT: `<`, lt: `<`, ltcc: `\u2AA6`, ltcir: `\u2A79`, ltdot: `\u22D6`, lthree: `\u22CB`, ltimes: `\u22C9`, ltlarr: `\u2976`, ltquest: `\u2A7B`, ltri: `\u25C3`, ltrie: `\u22B4`, ltrif: `\u25C2`, ltrPar: `\u2996`, lurdshar: `\u294A`, luruhar: `\u2966`, lvertneqq: `\u2268\uFE00`, lvnE: `\u2268\uFE00`, macr: `\xAF`, male: `\u2642`, malt: `\u2720`, maltese: `\u2720`, Map: `\u2905`, map: `\u21A6`, mapsto: `\u21A6`, mapstodown: `\u21A7`, mapstoleft: `\u21A4`, mapstoup: `\u21A5`, marker: `\u25AE`, mcomma: `\u2A29`, Mcy: `\u041C`, mcy: `\u043C`, mdash: `\u2014`, mDDot: `\u223A`, measuredangle: `\u2221`, MediumSpace: `\u205F`, Mellintrf: `\u2133`, Mfr: `\u{1D510}`, mfr: `\u{1D52A}`, mho: `\u2127`, micro: `\xB5`, mid: `\u2223`, midast: `*`, midcir: `\u2AF0`, middot: `\xB7`, minus: `\u2212`, minusb: `\u229F`, minusd: `\u2238`, minusdu: `\u2A2A`, MinusPlus: `\u2213`, mlcp: `\u2ADB`, mldr: `\u2026`, mnplus: `\u2213`, models: `\u22A7`, Mopf: `\u{1D544}`, mopf: `\u{1D55E}`, mp: `\u2213`, Mscr: `\u2133`, mscr: `\u{1D4C2}`, mstpos: `\u223E`, Mu: `\u039C`, mu: `\u03BC`, multimap: `\u22B8`, mumap: `\u22B8`, nabla: `\u2207`, Nacute: `\u0143`, nacute: `\u0144`, nang: `\u2220\u20D2`, nap: `\u2249`, napE: `\u2A70\u0338`, napid: `\u224B\u0338`, napos: `\u0149`, napprox: `\u2249`, natur: `\u266E`, natural: `\u266E`, naturals: `\u2115`, nbsp: `\xA0`, nbump: `\u224E\u0338`, nbumpe: `\u224F\u0338`, ncap: `\u2A43`, Ncaron: `\u0147`, ncaron: `\u0148`, Ncedil: `\u0145`, ncedil: `\u0146`, ncong: `\u2247`, ncongdot: `\u2A6D\u0338`, ncup: `\u2A42`, Ncy: `\u041D`, ncy: `\u043D`, ndash: `\u2013`, ne: `\u2260`, nearhk: `\u2924`, neArr: `\u21D7`, nearr: `\u2197`, nearrow: `\u2197`, nedot: `\u2250\u0338`, NegativeMediumSpace: `\u200B`, NegativeThickSpace: `\u200B`, NegativeThinSpace: `\u200B`, NegativeVeryThinSpace: `\u200B`, nequiv: `\u2262`, nesear: `\u2928`, nesim: `\u2242\u0338`, NestedGreaterGreater: `\u226B`, NestedLessLess: `\u226A`, NewLine: `
`, nexist: `\u2204`, nexists: `\u2204`, Nfr: `\u{1D511}`, nfr: `\u{1D52B}`, ngE: `\u2267\u0338`, nge: `\u2271`, ngeq: `\u2271`, ngeqq: `\u2267\u0338`, ngeqslant: `\u2A7E\u0338`, nges: `\u2A7E\u0338`, nGg: `\u22D9\u0338`, ngsim: `\u2275`, nGt: `\u226B\u20D2`, ngt: `\u226F`, ngtr: `\u226F`, nGtv: `\u226B\u0338`, nhArr: `\u21CE`, nharr: `\u21AE`, nhpar: `\u2AF2`, ni: `\u220B`, nis: `\u22FC`, nisd: `\u22FA`, niv: `\u220B`, NJcy: `\u040A`, njcy: `\u045A`, nlArr: `\u21CD`, nlarr: `\u219A`, nldr: `\u2025`, nlE: `\u2266\u0338`, nle: `\u2270`, nLeftarrow: `\u21CD`, nleftarrow: `\u219A`, nLeftrightarrow: `\u21CE`, nleftrightarrow: `\u21AE`, nleq: `\u2270`, nleqq: `\u2266\u0338`, nleqslant: `\u2A7D\u0338`, nles: `\u2A7D\u0338`, nless: `\u226E`, nLl: `\u22D8\u0338`, nlsim: `\u2274`, nLt: `\u226A\u20D2`, nlt: `\u226E`, nltri: `\u22EA`, nltrie: `\u22EC`, nLtv: `\u226A\u0338`, nmid: `\u2224`, NoBreak: `\u2060`, NonBreakingSpace: `\xA0`, Nopf: `\u2115`, nopf: `\u{1D55F}`, Not: `\u2AEC`, not: `\xAC`, NotCongruent: `\u2262`, NotCupCap: `\u226D`, NotDoubleVerticalBar: `\u2226`, NotElement: `\u2209`, NotEqual: `\u2260`, NotEqualTilde: `\u2242\u0338`, NotExists: `\u2204`, NotGreater: `\u226F`, NotGreaterEqual: `\u2271`, NotGreaterFullEqual: `\u2267\u0338`, NotGreaterGreater: `\u226B\u0338`, NotGreaterLess: `\u2279`, NotGreaterSlantEqual: `\u2A7E\u0338`, NotGreaterTilde: `\u2275`, NotHumpDownHump: `\u224E\u0338`, NotHumpEqual: `\u224F\u0338`, notin: `\u2209`, notindot: `\u22F5\u0338`, notinE: `\u22F9\u0338`, notinva: `\u2209`, notinvb: `\u22F7`, notinvc: `\u22F6`, NotLeftTriangle: `\u22EA`, NotLeftTriangleBar: `\u29CF\u0338`, NotLeftTriangleEqual: `\u22EC`, NotLess: `\u226E`, NotLessEqual: `\u2270`, NotLessGreater: `\u2278`, NotLessLess: `\u226A\u0338`, NotLessSlantEqual: `\u2A7D\u0338`, NotLessTilde: `\u2274`, NotNestedGreaterGreater: `\u2AA2\u0338`, NotNestedLessLess: `\u2AA1\u0338`, notni: `\u220C`, notniva: `\u220C`, notnivb: `\u22FE`, notnivc: `\u22FD`, NotPrecedes: `\u2280`, NotPrecedesEqual: `\u2AAF\u0338`, NotPrecedesSlantEqual: `\u22E0`, NotReverseElement: `\u220C`, NotRightTriangle: `\u22EB`, NotRightTriangleBar: `\u29D0\u0338`, NotRightTriangleEqual: `\u22ED`, NotSquareSubset: `\u228F\u0338`, NotSquareSubsetEqual: `\u22E2`, NotSquareSuperset: `\u2290\u0338`, NotSquareSupersetEqual: `\u22E3`, NotSubset: `\u2282\u20D2`, NotSubsetEqual: `\u2288`, NotSucceeds: `\u2281`, NotSucceedsEqual: `\u2AB0\u0338`, NotSucceedsSlantEqual: `\u22E1`, NotSucceedsTilde: `\u227F\u0338`, NotSuperset: `\u2283\u20D2`, NotSupersetEqual: `\u2289`, NotTilde: `\u2241`, NotTildeEqual: `\u2244`, NotTildeFullEqual: `\u2247`, NotTildeTilde: `\u2249`, NotVerticalBar: `\u2224`, npar: `\u2226`, nparallel: `\u2226`, nparsl: `\u2AFD\u20E5`, npart: `\u2202\u0338`, npolint: `\u2A14`, npr: `\u2280`, nprcue: `\u22E0`, npre: `\u2AAF\u0338`, nprec: `\u2280`, npreceq: `\u2AAF\u0338`, nrArr: `\u21CF`, nrarr: `\u219B`, nrarrc: `\u2933\u0338`, nrarrw: `\u219D\u0338`, nRightarrow: `\u21CF`, nrightarrow: `\u219B`, nrtri: `\u22EB`, nrtrie: `\u22ED`, nsc: `\u2281`, nsccue: `\u22E1`, nsce: `\u2AB0\u0338`, Nscr: `\u{1D4A9}`, nscr: `\u{1D4C3}`, nshortmid: `\u2224`, nshortparallel: `\u2226`, nsim: `\u2241`, nsime: `\u2244`, nsimeq: `\u2244`, nsmid: `\u2224`, nspar: `\u2226`, nsqsube: `\u22E2`, nsqsupe: `\u22E3`, nsub: `\u2284`, nsubE: `\u2AC5\u0338`, nsube: `\u2288`, nsubset: `\u2282\u20D2`, nsubseteq: `\u2288`, nsubseteqq: `\u2AC5\u0338`, nsucc: `\u2281`, nsucceq: `\u2AB0\u0338`, nsup: `\u2285`, nsupE: `\u2AC6\u0338`, nsupe: `\u2289`, nsupset: `\u2283\u20D2`, nsupseteq: `\u2289`, nsupseteqq: `\u2AC6\u0338`, ntgl: `\u2279`, Ntilde: `\xD1`, ntilde: `\xF1`, ntlg: `\u2278`, ntriangleleft: `\u22EA`, ntrianglelefteq: `\u22EC`, ntriangleright: `\u22EB`, ntrianglerighteq: `\u22ED`, Nu: `\u039D`, nu: `\u03BD`, num: `#`, numero: `\u2116`, numsp: `\u2007`, nvap: `\u224D\u20D2`, nVDash: `\u22AF`, nVdash: `\u22AE`, nvDash: `\u22AD`, nvdash: `\u22AC`, nvge: `\u2265\u20D2`, nvgt: `>\u20D2`, nvHarr: `\u2904`, nvinfin: `\u29DE`, nvlArr: `\u2902`, nvle: `\u2264\u20D2`, nvlt: `<\u20D2`, nvltrie: `\u22B4\u20D2`, nvrArr: `\u2903`, nvrtrie: `\u22B5\u20D2`, nvsim: `\u223C\u20D2`, nwarhk: `\u2923`, nwArr: `\u21D6`, nwarr: `\u2196`, nwarrow: `\u2196`, nwnear: `\u2927`, Oacute: `\xD3`, oacute: `\xF3`, oast: `\u229B`, ocir: `\u229A`, Ocirc: `\xD4`, ocirc: `\xF4`, Ocy: `\u041E`, ocy: `\u043E`, odash: `\u229D`, Odblac: `\u0150`, odblac: `\u0151`, odiv: `\u2A38`, odot: `\u2299`, odsold: `\u29BC`, OElig: `\u0152`, oelig: `\u0153`, ofcir: `\u29BF`, Ofr: `\u{1D512}`, ofr: `\u{1D52C}`, ogon: `\u02DB`, Ograve: `\xD2`, ograve: `\xF2`, ogt: `\u29C1`, ohbar: `\u29B5`, ohm: `\u03A9`, oint: `\u222E`, olarr: `\u21BA`, olcir: `\u29BE`, olcross: `\u29BB`, oline: `\u203E`, olt: `\u29C0`, Omacr: `\u014C`, omacr: `\u014D`, Omega: `\u03A9`, omega: `\u03C9`, Omicron: `\u039F`, omicron: `\u03BF`, omid: `\u29B6`, ominus: `\u2296`, Oopf: `\u{1D546}`, oopf: `\u{1D560}`, opar: `\u29B7`, OpenCurlyDoubleQuote: `\u201C`, OpenCurlyQuote: `\u2018`, operp: `\u29B9`, oplus: `\u2295`, Or: `\u2A54`, or: `\u2228`, orarr: `\u21BB`, ord: `\u2A5D`, order: `\u2134`, orderof: `\u2134`, ordf: `\xAA`, ordm: `\xBA`, origof: `\u22B6`, oror: `\u2A56`, orslope: `\u2A57`, orv: `\u2A5B`, oS: `\u24C8`, Oscr: `\u{1D4AA}`, oscr: `\u2134`, Oslash: `\xD8`, oslash: `\xF8`, osol: `\u2298`, Otilde: `\xD5`, otilde: `\xF5`, Otimes: `\u2A37`, otimes: `\u2297`, otimesas: `\u2A36`, Ouml: `\xD6`, ouml: `\xF6`, ovbar: `\u233D`, OverBar: `\u203E`, OverBrace: `\u23DE`, OverBracket: `\u23B4`, OverParenthesis: `\u23DC`, par: `\u2225`, para: `\xB6`, parallel: `\u2225`, parsim: `\u2AF3`, parsl: `\u2AFD`, part: `\u2202`, PartialD: `\u2202`, Pcy: `\u041F`, pcy: `\u043F`, percnt: `%`, period: `.`, permil: `\u2030`, perp: `\u22A5`, pertenk: `\u2031`, Pfr: `\u{1D513}`, pfr: `\u{1D52D}`, Phi: `\u03A6`, phi: `\u03C6`, phiv: `\u03D5`, phmmat: `\u2133`, phone: `\u260E`, Pi: `\u03A0`, pi: `\u03C0`, pitchfork: `\u22D4`, piv: `\u03D6`, planck: `\u210F`, planckh: `\u210E`, plankv: `\u210F`, plus: `+`, plusacir: `\u2A23`, plusb: `\u229E`, pluscir: `\u2A22`, plusdo: `\u2214`, plusdu: `\u2A25`, pluse: `\u2A72`, PlusMinus: `\xB1`, plusmn: `\xB1`, plussim: `\u2A26`, plustwo: `\u2A27`, pm: `\xB1`, Poincareplane: `\u210C`, pointint: `\u2A15`, Popf: `\u2119`, popf: `\u{1D561}`, pound: `\xA3`, Pr: `\u2ABB`, pr: `\u227A`, prap: `\u2AB7`, prcue: `\u227C`, prE: `\u2AB3`, pre: `\u2AAF`, prec: `\u227A`, precapprox: `\u2AB7`, preccurlyeq: `\u227C`, Precedes: `\u227A`, PrecedesEqual: `\u2AAF`, PrecedesSlantEqual: `\u227C`, PrecedesTilde: `\u227E`, preceq: `\u2AAF`, precnapprox: `\u2AB9`, precneqq: `\u2AB5`, precnsim: `\u22E8`, precsim: `\u227E`, Prime: `\u2033`, prime: `\u2032`, primes: `\u2119`, prnap: `\u2AB9`, prnE: `\u2AB5`, prnsim: `\u22E8`, prod: `\u220F`, Product: `\u220F`, profalar: `\u232E`, profline: `\u2312`, profsurf: `\u2313`, prop: `\u221D`, Proportion: `\u2237`, Proportional: `\u221D`, propto: `\u221D`, prsim: `\u227E`, prurel: `\u22B0`, Pscr: `\u{1D4AB}`, pscr: `\u{1D4C5}`, Psi: `\u03A8`, psi: `\u03C8`, puncsp: `\u2008`, Qfr: `\u{1D514}`, qfr: `\u{1D52E}`, qint: `\u2A0C`, Qopf: `\u211A`, qopf: `\u{1D562}`, qprime: `\u2057`, Qscr: `\u{1D4AC}`, qscr: `\u{1D4C6}`, quaternions: `\u210D`, quatint: `\u2A16`, quest: `?`, questeq: `\u225F`, QUOT: `"`, quot: `"`, rAarr: `\u21DB`, race: `\u223D\u0331`, Racute: `\u0154`, racute: `\u0155`, radic: `\u221A`, raemptyv: `\u29B3`, Rang: `\u27EB`, rang: `\u27E9`, rangd: `\u2992`, range: `\u29A5`, rangle: `\u27E9`, raquo: `\xBB`, Rarr: `\u21A0`, rArr: `\u21D2`, rarr: `\u2192`, rarrap: `\u2975`, rarrb: `\u21E5`, rarrbfs: `\u2920`, rarrc: `\u2933`, rarrfs: `\u291E`, rarrhk: `\u21AA`, rarrlp: `\u21AC`, rarrpl: `\u2945`, rarrsim: `\u2974`, Rarrtl: `\u2916`, rarrtl: `\u21A3`, rarrw: `\u219D`, rAtail: `\u291C`, ratail: `\u291A`, ratio: `\u2236`, rationals: `\u211A`, RBarr: `\u2910`, rBarr: `\u290F`, rbarr: `\u290D`, rbbrk: `\u2773`, rbrace: `}`, rbrack: `]`, rbrke: `\u298C`, rbrksld: `\u298E`, rbrkslu: `\u2990`, Rcaron: `\u0158`, rcaron: `\u0159`, Rcedil: `\u0156`, rcedil: `\u0157`, rceil: `\u2309`, rcub: `}`, Rcy: `\u0420`, rcy: `\u0440`, rdca: `\u2937`, rdldhar: `\u2969`, rdquo: `\u201D`, rdquor: `\u201D`, rdsh: `\u21B3`, Re: `\u211C`, real: `\u211C`, realine: `\u211B`, realpart: `\u211C`, reals: `\u211D`, rect: `\u25AD`, REG: `\xAE`, reg: `\xAE`, ReverseElement: `\u220B`, ReverseEquilibrium: `\u21CB`, ReverseUpEquilibrium: `\u296F`, rfisht: `\u297D`, rfloor: `\u230B`, Rfr: `\u211C`, rfr: `\u{1D52F}`, rHar: `\u2964`, rhard: `\u21C1`, rharu: `\u21C0`, rharul: `\u296C`, Rho: `\u03A1`, rho: `\u03C1`, rhov: `\u03F1`, RightAngleBracket: `\u27E9`, RightArrow: `\u2192`, Rightarrow: `\u21D2`, rightarrow: `\u2192`, RightArrowBar: `\u21E5`, RightArrowLeftArrow: `\u21C4`, rightarrowtail: `\u21A3`, RightCeiling: `\u2309`, RightDoubleBracket: `\u27E7`, RightDownTeeVector: `\u295D`, RightDownVector: `\u21C2`, RightDownVectorBar: `\u2955`, RightFloor: `\u230B`, rightharpoondown: `\u21C1`, rightharpoonup: `\u21C0`, rightleftarrows: `\u21C4`, rightleftharpoons: `\u21CC`, rightrightarrows: `\u21C9`, rightsquigarrow: `\u219D`, RightTee: `\u22A2`, RightTeeArrow: `\u21A6`, RightTeeVector: `\u295B`, rightthreetimes: `\u22CC`, RightTriangle: `\u22B3`, RightTriangleBar: `\u29D0`, RightTriangleEqual: `\u22B5`, RightUpDownVector: `\u294F`, RightUpTeeVector: `\u295C`, RightUpVector: `\u21BE`, RightUpVectorBar: `\u2954`, RightVector: `\u21C0`, RightVectorBar: `\u2953`, ring: `\u02DA`, risingdotseq: `\u2253`, rlarr: `\u21C4`, rlhar: `\u21CC`, rlm: `\u200F`, rmoust: `\u23B1`, rmoustache: `\u23B1`, rnmid: `\u2AEE`, roang: `\u27ED`, roarr: `\u21FE`, robrk: `\u27E7`, ropar: `\u2986`, Ropf: `\u211D`, ropf: `\u{1D563}`, roplus: `\u2A2E`, rotimes: `\u2A35`, RoundImplies: `\u2970`, rpar: `)`, rpargt: `\u2994`, rppolint: `\u2A12`, rrarr: `\u21C9`, Rrightarrow: `\u21DB`, rsaquo: `\u203A`, Rscr: `\u211B`, rscr: `\u{1D4C7}`, Rsh: `\u21B1`, rsh: `\u21B1`, rsqb: `]`, rsquo: `\u2019`, rsquor: `\u2019`, rthree: `\u22CC`, rtimes: `\u22CA`, rtri: `\u25B9`, rtrie: `\u22B5`, rtrif: `\u25B8`, rtriltri: `\u29CE`, RuleDelayed: `\u29F4`, ruluhar: `\u2968`, rx: `\u211E`, Sacute: `\u015A`, sacute: `\u015B`, sbquo: `\u201A`, Sc: `\u2ABC`, sc: `\u227B`, scap: `\u2AB8`, Scaron: `\u0160`, scaron: `\u0161`, sccue: `\u227D`, scE: `\u2AB4`, sce: `\u2AB0`, Scedil: `\u015E`, scedil: `\u015F`, Scirc: `\u015C`, scirc: `\u015D`, scnap: `\u2ABA`, scnE: `\u2AB6`, scnsim: `\u22E9`, scpolint: `\u2A13`, scsim: `\u227F`, Scy: `\u0421`, scy: `\u0441`, sdot: `\u22C5`, sdotb: `\u22A1`, sdote: `\u2A66`, searhk: `\u2925`, seArr: `\u21D8`, searr: `\u2198`, searrow: `\u2198`, sect: `\xA7`, semi: `;`, seswar: `\u2929`, setminus: `\u2216`, setmn: `\u2216`, sext: `\u2736`, Sfr: `\u{1D516}`, sfr: `\u{1D530}`, sfrown: `\u2322`, sharp: `\u266F`, SHCHcy: `\u0429`, shchcy: `\u0449`, SHcy: `\u0428`, shcy: `\u0448`, ShortDownArrow: `\u2193`, ShortLeftArrow: `\u2190`, shortmid: `\u2223`, shortparallel: `\u2225`, ShortRightArrow: `\u2192`, ShortUpArrow: `\u2191`, shy: `\xAD`, Sigma: `\u03A3`, sigma: `\u03C3`, sigmaf: `\u03C2`, sigmav: `\u03C2`, sim: `\u223C`, simdot: `\u2A6A`, sime: `\u2243`, simeq: `\u2243`, simg: `\u2A9E`, simgE: `\u2AA0`, siml: `\u2A9D`, simlE: `\u2A9F`, simne: `\u2246`, simplus: `\u2A24`, simrarr: `\u2972`, slarr: `\u2190`, SmallCircle: `\u2218`, smallsetminus: `\u2216`, smashp: `\u2A33`, smeparsl: `\u29E4`, smid: `\u2223`, smile: `\u2323`, smt: `\u2AAA`, smte: `\u2AAC`, smtes: `\u2AAC\uFE00`, SOFTcy: `\u042C`, softcy: `\u044C`, sol: `/`, solb: `\u29C4`, solbar: `\u233F`, Sopf: `\u{1D54A}`, sopf: `\u{1D564}`, spades: `\u2660`, spadesuit: `\u2660`, spar: `\u2225`, sqcap: `\u2293`, sqcaps: `\u2293\uFE00`, sqcup: `\u2294`, sqcups: `\u2294\uFE00`, Sqrt: `\u221A`, sqsub: `\u228F`, sqsube: `\u2291`, sqsubset: `\u228F`, sqsubseteq: `\u2291`, sqsup: `\u2290`, sqsupe: `\u2292`, sqsupset: `\u2290`, sqsupseteq: `\u2292`, squ: `\u25A1`, Square: `\u25A1`, square: `\u25A1`, SquareIntersection: `\u2293`, SquareSubset: `\u228F`, SquareSubsetEqual: `\u2291`, SquareSuperset: `\u2290`, SquareSupersetEqual: `\u2292`, SquareUnion: `\u2294`, squarf: `\u25AA`, squf: `\u25AA`, srarr: `\u2192`, Sscr: `\u{1D4AE}`, sscr: `\u{1D4C8}`, ssetmn: `\u2216`, ssmile: `\u2323`, sstarf: `\u22C6`, Star: `\u22C6`, star: `\u2606`, starf: `\u2605`, straightepsilon: `\u03F5`, straightphi: `\u03D5`, strns: `\xAF`, Sub: `\u22D0`, sub: `\u2282`, subdot: `\u2ABD`, subE: `\u2AC5`, sube: `\u2286`, subedot: `\u2AC3`, submult: `\u2AC1`, subnE: `\u2ACB`, subne: `\u228A`, subplus: `\u2ABF`, subrarr: `\u2979`, Subset: `\u22D0`, subset: `\u2282`, subseteq: `\u2286`, subseteqq: `\u2AC5`, SubsetEqual: `\u2286`, subsetneq: `\u228A`, subsetneqq: `\u2ACB`, subsim: `\u2AC7`, subsub: `\u2AD5`, subsup: `\u2AD3`, succ: `\u227B`, succapprox: `\u2AB8`, succcurlyeq: `\u227D`, Succeeds: `\u227B`, SucceedsEqual: `\u2AB0`, SucceedsSlantEqual: `\u227D`, SucceedsTilde: `\u227F`, succeq: `\u2AB0`, succnapprox: `\u2ABA`, succneqq: `\u2AB6`, succnsim: `\u22E9`, succsim: `\u227F`, SuchThat: `\u220B`, Sum: `\u2211`, sum: `\u2211`, sung: `\u266A`, Sup: `\u22D1`, sup: `\u2283`, sup1: `\xB9`, sup2: `\xB2`, sup3: `\xB3`, supdot: `\u2ABE`, supdsub: `\u2AD8`, supE: `\u2AC6`, supe: `\u2287`, supedot: `\u2AC4`, Superset: `\u2283`, SupersetEqual: `\u2287`, suphsol: `\u27C9`, suphsub: `\u2AD7`, suplarr: `\u297B`, supmult: `\u2AC2`, supnE: `\u2ACC`, supne: `\u228B`, supplus: `\u2AC0`, Supset: `\u22D1`, supset: `\u2283`, supseteq: `\u2287`, supseteqq: `\u2AC6`, supsetneq: `\u228B`, supsetneqq: `\u2ACC`, supsim: `\u2AC8`, supsub: `\u2AD4`, supsup: `\u2AD6`, swarhk: `\u2926`, swArr: `\u21D9`, swarr: `\u2199`, swarrow: `\u2199`, swnwar: `\u292A`, szlig: `\xDF`, Tab: `	`, target: `\u2316`, Tau: `\u03A4`, tau: `\u03C4`, tbrk: `\u23B4`, Tcaron: `\u0164`, tcaron: `\u0165`, Tcedil: `\u0162`, tcedil: `\u0163`, Tcy: `\u0422`, tcy: `\u0442`, tdot: `\u20DB`, telrec: `\u2315`, Tfr: `\u{1D517}`, tfr: `\u{1D531}`, there4: `\u2234`, Therefore: `\u2234`, therefore: `\u2234`, Theta: `\u0398`, theta: `\u03B8`, thetasym: `\u03D1`, thetav: `\u03D1`, thickapprox: `\u2248`, thicksim: `\u223C`, ThickSpace: `\u205F\u200A`, thinsp: `\u2009`, ThinSpace: `\u2009`, thkap: `\u2248`, thksim: `\u223C`, THORN: `\xDE`, thorn: `\xFE`, Tilde: `\u223C`, tilde: `\u02DC`, TildeEqual: `\u2243`, TildeFullEqual: `\u2245`, TildeTilde: `\u2248`, times: `\xD7`, timesb: `\u22A0`, timesbar: `\u2A31`, timesd: `\u2A30`, tint: `\u222D`, toea: `\u2928`, top: `\u22A4`, topbot: `\u2336`, topcir: `\u2AF1`, Topf: `\u{1D54B}`, topf: `\u{1D565}`, topfork: `\u2ADA`, tosa: `\u2929`, tprime: `\u2034`, TRADE: `\u2122`, trade: `\u2122`, triangle: `\u25B5`, triangledown: `\u25BF`, triangleleft: `\u25C3`, trianglelefteq: `\u22B4`, triangleq: `\u225C`, triangleright: `\u25B9`, trianglerighteq: `\u22B5`, tridot: `\u25EC`, trie: `\u225C`, triminus: `\u2A3A`, TripleDot: `\u20DB`, triplus: `\u2A39`, trisb: `\u29CD`, tritime: `\u2A3B`, trpezium: `\u23E2`, Tscr: `\u{1D4AF}`, tscr: `\u{1D4C9}`, TScy: `\u0426`, tscy: `\u0446`, TSHcy: `\u040B`, tshcy: `\u045B`, Tstrok: `\u0166`, tstrok: `\u0167`, twixt: `\u226C`, twoheadleftarrow: `\u219E`, twoheadrightarrow: `\u21A0`, Uacute: `\xDA`, uacute: `\xFA`, Uarr: `\u219F`, uArr: `\u21D1`, uarr: `\u2191`, Uarrocir: `\u2949`, Ubrcy: `\u040E`, ubrcy: `\u045E`, Ubreve: `\u016C`, ubreve: `\u016D`, Ucirc: `\xDB`, ucirc: `\xFB`, Ucy: `\u0423`, ucy: `\u0443`, udarr: `\u21C5`, Udblac: `\u0170`, udblac: `\u0171`, udhar: `\u296E`, ufisht: `\u297E`, Ufr: `\u{1D518}`, ufr: `\u{1D532}`, Ugrave: `\xD9`, ugrave: `\xF9`, uHar: `\u2963`, uharl: `\u21BF`, uharr: `\u21BE`, uhblk: `\u2580`, ulcorn: `\u231C`, ulcorner: `\u231C`, ulcrop: `\u230F`, ultri: `\u25F8`, Umacr: `\u016A`, umacr: `\u016B`, uml: `\xA8`, UnderBar: `_`, UnderBrace: `\u23DF`, UnderBracket: `\u23B5`, UnderParenthesis: `\u23DD`, Union: `\u22C3`, UnionPlus: `\u228E`, Uogon: `\u0172`, uogon: `\u0173`, Uopf: `\u{1D54C}`, uopf: `\u{1D566}`, UpArrow: `\u2191`, Uparrow: `\u21D1`, uparrow: `\u2191`, UpArrowBar: `\u2912`, UpArrowDownArrow: `\u21C5`, UpDownArrow: `\u2195`, Updownarrow: `\u21D5`, updownarrow: `\u2195`, UpEquilibrium: `\u296E`, upharpoonleft: `\u21BF`, upharpoonright: `\u21BE`, uplus: `\u228E`, UpperLeftArrow: `\u2196`, UpperRightArrow: `\u2197`, Upsi: `\u03D2`, upsi: `\u03C5`, upsih: `\u03D2`, Upsilon: `\u03A5`, upsilon: `\u03C5`, UpTee: `\u22A5`, UpTeeArrow: `\u21A5`, upuparrows: `\u21C8`, urcorn: `\u231D`, urcorner: `\u231D`, urcrop: `\u230E`, Uring: `\u016E`, uring: `\u016F`, urtri: `\u25F9`, Uscr: `\u{1D4B0}`, uscr: `\u{1D4CA}`, utdot: `\u22F0`, Utilde: `\u0168`, utilde: `\u0169`, utri: `\u25B5`, utrif: `\u25B4`, uuarr: `\u21C8`, Uuml: `\xDC`, uuml: `\xFC`, uwangle: `\u29A7`, vangrt: `\u299C`, varepsilon: `\u03F5`, varkappa: `\u03F0`, varnothing: `\u2205`, varphi: `\u03D5`, varpi: `\u03D6`, varpropto: `\u221D`, vArr: `\u21D5`, varr: `\u2195`, varrho: `\u03F1`, varsigma: `\u03C2`, varsubsetneq: `\u228A\uFE00`, varsubsetneqq: `\u2ACB\uFE00`, varsupsetneq: `\u228B\uFE00`, varsupsetneqq: `\u2ACC\uFE00`, vartheta: `\u03D1`, vartriangleleft: `\u22B2`, vartriangleright: `\u22B3`, Vbar: `\u2AEB`, vBar: `\u2AE8`, vBarv: `\u2AE9`, Vcy: `\u0412`, vcy: `\u0432`, VDash: `\u22AB`, Vdash: `\u22A9`, vDash: `\u22A8`, vdash: `\u22A2`, Vdashl: `\u2AE6`, Vee: `\u22C1`, vee: `\u2228`, veebar: `\u22BB`, veeeq: `\u225A`, vellip: `\u22EE`, Verbar: `\u2016`, verbar: `|`, Vert: `\u2016`, vert: `|`, VerticalBar: `\u2223`, VerticalLine: `|`, VerticalSeparator: `\u2758`, VerticalTilde: `\u2240`, VeryThinSpace: `\u200A`, Vfr: `\u{1D519}`, vfr: `\u{1D533}`, vltri: `\u22B2`, vnsub: `\u2282\u20D2`, vnsup: `\u2283\u20D2`, Vopf: `\u{1D54D}`, vopf: `\u{1D567}`, vprop: `\u221D`, vrtri: `\u22B3`, Vscr: `\u{1D4B1}`, vscr: `\u{1D4CB}`, vsubnE: `\u2ACB\uFE00`, vsubne: `\u228A\uFE00`, vsupnE: `\u2ACC\uFE00`, vsupne: `\u228B\uFE00`, Vvdash: `\u22AA`, vzigzag: `\u299A`, Wcirc: `\u0174`, wcirc: `\u0175`, wedbar: `\u2A5F`, Wedge: `\u22C0`, wedge: `\u2227`, wedgeq: `\u2259`, weierp: `\u2118`, Wfr: `\u{1D51A}`, wfr: `\u{1D534}`, Wopf: `\u{1D54E}`, wopf: `\u{1D568}`, wp: `\u2118`, wr: `\u2240`, wreath: `\u2240`, Wscr: `\u{1D4B2}`, wscr: `\u{1D4CC}`, xcap: `\u22C2`, xcirc: `\u25EF`, xcup: `\u22C3`, xdtri: `\u25BD`, Xfr: `\u{1D51B}`, xfr: `\u{1D535}`, xhArr: `\u27FA`, xharr: `\u27F7`, Xi: `\u039E`, xi: `\u03BE`, xlArr: `\u27F8`, xlarr: `\u27F5`, xmap: `\u27FC`, xnis: `\u22FB`, xodot: `\u2A00`, Xopf: `\u{1D54F}`, xopf: `\u{1D569}`, xoplus: `\u2A01`, xotime: `\u2A02`, xrArr: `\u27F9`, xrarr: `\u27F6`, Xscr: `\u{1D4B3}`, xscr: `\u{1D4CD}`, xsqcup: `\u2A06`, xuplus: `\u2A04`, xutri: `\u25B3`, xvee: `\u22C1`, xwedge: `\u22C0`, Yacute: `\xDD`, yacute: `\xFD`, YAcy: `\u042F`, yacy: `\u044F`, Ycirc: `\u0176`, ycirc: `\u0177`, Ycy: `\u042B`, ycy: `\u044B`, yen: `\xA5`, Yfr: `\u{1D51C}`, yfr: `\u{1D536}`, YIcy: `\u0407`, yicy: `\u0457`, Yopf: `\u{1D550}`, yopf: `\u{1D56A}`, Yscr: `\u{1D4B4}`, yscr: `\u{1D4CE}`, YUcy: `\u042E`, yucy: `\u044E`, Yuml: `\u0178`, yuml: `\xFF`, Zacute: `\u0179`, zacute: `\u017A`, Zcaron: `\u017D`, zcaron: `\u017E`, Zcy: `\u0417`, zcy: `\u0437`, Zdot: `\u017B`, zdot: `\u017C`, zeetrf: `\u2128`, ZeroWidthSpace: `\u200B`, Zeta: `\u0396`, zeta: `\u03B6`, Zfr: `\u2128`, zfr: `\u{1D537}`, ZHcy: `\u0416`, zhcy: `\u0436`, zigrarr: `\u21DD`, Zopf: `\u2124`, zopf: `\u{1D56B}`, Zscr: `\u{1D4B5}`, zscr: `\u{1D4CF}`, zwj: `\u200D`, zwnj: `\u200C` }), e14.entityMap = e14.HTML_ENTITIES;
})), Pe = t(((e14) => {
  var t2 = je().NAMESPACE, n2 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, r2 = RegExp(`[\\-\\.0-9` + n2.source.slice(1, -1) + `\\u00B7\\u0300-\\u036F\\u203F-\\u2040]`), i2 = RegExp(`^` + n2.source + r2.source + `*(?::` + n2.source + r2.source + `*)?$`), a2 = 0, o2 = 1, s2 = 2, c2 = 3, l2 = 4, u2 = 5, d2 = 6, f2 = 7;
  function p2(e15, t3) {
    this.message = e15, this.locator = t3, Error.captureStackTrace && Error.captureStackTrace(this, p2);
  }
  p2.prototype = Error(), p2.prototype.name = p2.name;
  function m2() {
  }
  m2.prototype = { parse: function(e15, t3, n3) {
    var r3 = this.domBuilder;
    r3.startDocument(), x2(t3, t3 = {}), h2(e15, t3, n3, r3, this.errorHandler), r3.endDocument();
  } };
  function h2(e15, n3, r3, i3, a3) {
    function o3(e16) {
      if (e16 > 65535) {
        e16 -= 65536;
        var t3 = 55296 + (e16 >> 10), n4 = 56320 + (e16 & 1023);
        return String.fromCharCode(t3, n4);
      } else return String.fromCharCode(e16);
    }
    function s3(e16) {
      var t3 = e16.slice(1, -1);
      return Object.hasOwnProperty.call(r3, t3) ? r3[t3] : t3.charAt(0) === `#` ? o3(parseInt(t3.substr(1).replace(`x`, `0x`))) : (a3.error(`entity not found:` + e16), e16);
    }
    function c3(t3) {
      if (t3 > w3) {
        var n4 = e15.substring(w3, t3).replace(/&#?\w+;/g, s3);
        m3 && l3(w3), i3.characters(n4, 0, t3 - w3), w3 = t3;
      }
    }
    function l3(t3, n4) {
      for (; t3 >= d3 && (n4 = f3.exec(e15)); ) u3 = n4.index, d3 = u3 + n4[0].length, m3.lineNumber++;
      m3.columnNumber = t3 - u3 + 1;
    }
    for (var u3 = 0, d3 = 0, f3 = /.*(?:\r\n?|\n)|.*$/g, m3 = i3.locator, h3 = [{ currentNSMap: n3 }], x3 = {}, w3 = 0; ; ) {
      try {
        var T2 = e15.indexOf(`<`, w3);
        if (T2 < 0) {
          if (!e15.substr(w3).match(/^\s*$/)) {
            var te2 = i3.doc, E2 = te2.createTextNode(e15.substr(w3));
            te2.appendChild(E2), i3.currentElement = E2;
          }
          return;
        }
        switch (T2 > w3 && c3(T2), e15.charAt(T2 + 1)) {
          case `/`:
            var D2 = e15.indexOf(`>`, T2 + 3), ne2 = e15.substring(T2 + 2, D2).replace(/[ \t\n\r]+$/g, ``), O2 = h3.pop();
            D2 < 0 ? (ne2 = e15.substring(T2 + 2).replace(/[\s<].*/, ``), a3.error(`end tag name: ` + ne2 + ` is not complete:` + O2.tagName), D2 = T2 + 1 + ne2.length) : ne2.match(/\s</) && (ne2 = ne2.replace(/[\s<].*/, ``), a3.error(`end tag name: ` + ne2 + ` maybe not complete`), D2 = T2 + 1 + ne2.length);
            var re2 = O2.localNSMap, ie2 = O2.tagName == ne2;
            if (ie2 || O2.tagName && O2.tagName.toLowerCase() == ne2.toLowerCase()) {
              if (i3.endElement(O2.uri, O2.localName, ne2), re2) for (var ae2 in re2) Object.prototype.hasOwnProperty.call(re2, ae2) && i3.endPrefixMapping(ae2);
              ie2 || a3.fatalError(`end tag name: ` + ne2 + ` is not match the current start tagName:` + O2.tagName);
            } else h3.push(O2);
            D2++;
            break;
          case `?`:
            m3 && l3(T2), D2 = ee2(e15, T2, i3);
            break;
          case `!`:
            m3 && l3(T2), D2 = S2(e15, T2, i3, a3);
            break;
          default:
            m3 && l3(T2);
            var k2 = new C2(), oe2 = h3[h3.length - 1].currentNSMap, D2 = _2(e15, T2, k2, oe2, s3, a3), se2 = k2.length;
            if (!k2.closed && b2(e15, D2, k2.tagName, x3) && (k2.closed = true, r3.nbsp || a3.warning(`unclosed xml attribute`)), m3 && se2) {
              for (var ce2 = g2(m3, {}), le2 = 0; le2 < se2; le2++) {
                var A2 = k2[le2];
                l3(A2.offset), A2.locator = g2(m3, {});
              }
              i3.locator = ce2, v2(k2, i3, oe2) && h3.push(k2), i3.locator = m3;
            } else v2(k2, i3, oe2) && h3.push(k2);
            t2.isHTML(k2.uri) && !k2.closed ? D2 = y2(e15, D2, k2.tagName, s3, i3) : D2++;
        }
      } catch (e16) {
        if (e16 instanceof p2) throw e16;
        a3.error(`element parse error: ` + e16), D2 = -1;
      }
      D2 > w3 ? w3 = D2 : c3(Math.max(T2, w3) + 1);
    }
  }
  function g2(e15, t3) {
    return t3.lineNumber = e15.lineNumber, t3.columnNumber = e15.columnNumber, t3;
  }
  function _2(e15, n3, r3, i3, p3, m3) {
    function h3(e16, t3, n4) {
      r3.attributeNames.hasOwnProperty(e16) && m3.fatalError(`Attribute ` + e16 + ` redefined`), r3.addValue(e16, t3.replace(/[\t\n\r]/g, ` `).replace(/&#?\w+;/g, p3), n4);
    }
    for (var g3, _3, v3 = ++n3, y3 = a2; ; ) {
      var b3 = e15.charAt(v3);
      switch (b3) {
        case `=`:
          if (y3 === o2) g3 = e15.slice(n3, v3), y3 = c2;
          else if (y3 === s2) y3 = c2;
          else throw Error(`attribute equal must after attrName`);
          break;
        case `'`:
        case `"`:
          if (y3 === c2 || y3 === o2) if (y3 === o2 && (m3.warning(`attribute value must after "="`), g3 = e15.slice(n3, v3)), n3 = v3 + 1, v3 = e15.indexOf(b3, n3), v3 > 0) _3 = e15.slice(n3, v3), h3(g3, _3, n3 - 1), y3 = u2;
          else throw Error(`attribute value no end '` + b3 + `' match`);
          else if (y3 == l2) _3 = e15.slice(n3, v3), h3(g3, _3, n3), m3.warning(`attribute "` + g3 + `" missed start quot(` + b3 + `)!!`), n3 = v3 + 1, y3 = u2;
          else throw Error(`attribute value must after "="`);
          break;
        case `/`:
          switch (y3) {
            case a2:
              r3.setTagName(e15.slice(n3, v3));
            case u2:
            case d2:
            case f2:
              y3 = f2, r3.closed = true;
            case l2:
            case o2:
              break;
            case s2:
              r3.closed = true;
              break;
            default:
              throw Error(`attribute invalid close char('/')`);
          }
          break;
        case ``:
          return m3.error(`unexpected end of input`), y3 == a2 && r3.setTagName(e15.slice(n3, v3)), v3;
        case `>`:
          switch (y3) {
            case a2:
              r3.setTagName(e15.slice(n3, v3));
            case u2:
            case d2:
            case f2:
              break;
            case l2:
            case o2:
              _3 = e15.slice(n3, v3), _3.slice(-1) === `/` && (r3.closed = true, _3 = _3.slice(0, -1));
            case s2:
              y3 === s2 && (_3 = g3), y3 == l2 ? (m3.warning(`attribute "` + _3 + `" missed quot(")!`), h3(g3, _3, n3)) : ((!t2.isHTML(i3[``]) || !_3.match(/^(?:disabled|checked|selected)$/i)) && m3.warning(`attribute "` + _3 + `" missed value!! "` + _3 + `" instead!!`), h3(_3, _3, n3));
              break;
            case c2:
              throw Error(`attribute value missed!!`);
          }
          return v3;
        case `\x80`:
          b3 = ` `;
        default:
          if (b3 <= ` `) switch (y3) {
            case a2:
              r3.setTagName(e15.slice(n3, v3)), y3 = d2;
              break;
            case o2:
              g3 = e15.slice(n3, v3), y3 = s2;
              break;
            case l2:
              var _3 = e15.slice(n3, v3);
              m3.warning(`attribute "` + _3 + `" missed quot(")!!`), h3(g3, _3, n3);
            case u2:
              y3 = d2;
              break;
          }
          else switch (y3) {
            case s2:
              r3.tagName, (!t2.isHTML(i3[``]) || !g3.match(/^(?:disabled|checked|selected)$/i)) && m3.warning(`attribute "` + g3 + `" missed value!! "` + g3 + `" instead2!!`), h3(g3, g3, n3), n3 = v3, y3 = o2;
              break;
            case u2:
              m3.warning(`attribute space is required"` + g3 + `"!!`);
            case d2:
              y3 = o2, n3 = v3;
              break;
            case c2:
              y3 = l2, n3 = v3;
              break;
            case f2:
              throw Error(`elements closed character '/' and '>' must be connected to`);
          }
      }
      v3++;
    }
  }
  function v2(e15, n3, r3) {
    for (var i3 = e15.tagName, a3 = null, o3 = e15.length; o3--; ) {
      var s3 = e15[o3], c3 = s3.qName, l3 = s3.value, u3 = c3.indexOf(`:`);
      if (u3 > 0) var d3 = s3.prefix = c3.slice(0, u3), f3 = c3.slice(u3 + 1), p3 = d3 === `xmlns` && f3;
      else f3 = c3, d3 = null, p3 = c3 === `xmlns` && ``;
      s3.localName = f3, p3 !== false && (a3 ?? (a3 = {}, x2(r3, r3 = {})), r3[p3] = a3[p3] = l3, s3.uri = t2.XMLNS, n3.startPrefixMapping(p3, l3));
    }
    for (var o3 = e15.length; o3--; ) {
      s3 = e15[o3];
      var d3 = s3.prefix;
      d3 && (d3 === `xml` && (s3.uri = t2.XML), d3 !== `xmlns` && (s3.uri = r3[d3 || ``]));
    }
    var u3 = i3.indexOf(`:`);
    u3 > 0 ? (d3 = e15.prefix = i3.slice(0, u3), f3 = e15.localName = i3.slice(u3 + 1)) : (d3 = null, f3 = e15.localName = i3);
    var m3 = e15.uri = r3[d3 || ``];
    if (n3.startElement(m3, f3, i3, e15), e15.closed) {
      if (n3.endElement(m3, f3, i3), a3) for (d3 in a3) Object.prototype.hasOwnProperty.call(a3, d3) && n3.endPrefixMapping(d3);
    } else return e15.currentNSMap = r3, e15.localNSMap = a3, true;
  }
  function y2(e15, t3, n3, r3, i3) {
    if (/^(?:script|textarea)$/i.test(n3)) {
      var a3 = e15.indexOf(`</` + n3 + `>`, t3), o3 = e15.substring(t3 + 1, a3);
      if (/[&<]/.test(o3)) return /^script$/i.test(n3) ? (i3.characters(o3, 0, o3.length), a3) : (o3 = o3.replace(/&#?\w+;/g, r3), i3.characters(o3, 0, o3.length), a3);
    }
    return t3 + 1;
  }
  function b2(e15, t3, n3, r3) {
    var i3 = r3[n3];
    return i3 ?? (i3 = e15.lastIndexOf(`</` + n3 + `>`), i3 < t3 && (i3 = e15.lastIndexOf(`</` + n3)), r3[n3] = i3), i3 < t3;
  }
  function x2(e15, t3) {
    for (var n3 in e15) Object.prototype.hasOwnProperty.call(e15, n3) && (t3[n3] = e15[n3]);
  }
  function S2(e15, t3, n3, r3) {
    switch (e15.charAt(t3 + 2)) {
      case `-`:
        if (e15.charAt(t3 + 3) === `-`) {
          var i3 = e15.indexOf(`-->`, t3 + 4);
          return i3 > t3 ? (n3.comment(e15, t3 + 4, i3 - t3 - 4), i3 + 3) : (r3.error(`Unclosed comment`), -1);
        } else return -1;
      default:
        if (e15.substr(t3 + 3, 6) == `CDATA[`) {
          var i3 = e15.indexOf(`]]>`, t3 + 9);
          return n3.startCDATA(), n3.characters(e15, t3 + 9, i3 - t3 - 9), n3.endCDATA(), i3 + 3;
        }
        var a3 = w2(e15, t3), o3 = a3.length;
        if (o3 > 1 && /!doctype/i.test(a3[0][0])) {
          var s3 = a3[1][0], c3 = false, l3 = false;
          o3 > 3 && (/^public$/i.test(a3[2][0]) ? (c3 = a3[3][0], l3 = o3 > 4 && a3[4][0]) : /^system$/i.test(a3[2][0]) && (l3 = a3[3][0]));
          var u3 = a3[o3 - 1];
          return n3.startDTD(s3, c3, l3), n3.endDTD(), u3.index + u3[0].length;
        }
    }
    return -1;
  }
  function ee2(e15, t3, n3) {
    var r3 = e15.indexOf(`?>`, t3);
    if (r3) {
      var i3 = e15.substring(t3, r3).match(/^<\?(\S*)\s*([\s\S]*?)$/);
      return i3 ? (i3[0].length, n3.processingInstruction(i3[1], i3[2]), r3 + 2) : -1;
    }
    return -1;
  }
  function C2() {
    this.attributeNames = {};
  }
  C2.prototype = { setTagName: function(e15) {
    if (!i2.test(e15)) throw Error(`invalid tagName:` + e15);
    this.tagName = e15;
  }, addValue: function(e15, t3, n3) {
    if (!i2.test(e15)) throw Error(`invalid attribute:` + e15);
    this.attributeNames[e15] = this.length, this[this.length++] = { qName: e15, value: t3, offset: n3 };
  }, length: 0, getLocalName: function(e15) {
    return this[e15].localName;
  }, getLocator: function(e15) {
    return this[e15].locator;
  }, getQName: function(e15) {
    return this[e15].qName;
  }, getURI: function(e15) {
    return this[e15].uri;
  }, getValue: function(e15) {
    return this[e15].value;
  } };
  function w2(e15, t3) {
    var n3, r3 = [], i3 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (i3.lastIndex = t3, i3.exec(e15); n3 = i3.exec(e15); ) if (r3.push(n3), n3[1]) return r3;
  }
  e14.XMLReader = m2, e14.ParseError = p2;
})), Fe = t(((e14) => {
  var t2 = je(), n2 = Me(), r2 = Ne(), i2 = Pe(), a2 = n2.DOMImplementation, o2 = t2.NAMESPACE, s2 = i2.ParseError, c2 = i2.XMLReader;
  function l2(e15) {
    return e15.replace(/\r[\n\u0085]/g, `
`).replace(/[\r\u0085\u2028]/g, `
`);
  }
  function u2(e15) {
    this.options = e15 || { locator: {} };
  }
  u2.prototype.parseFromString = function(e15, t3) {
    var n3 = this.options, i3 = new c2(), a3 = n3.domBuilder || new f2(), s3 = n3.errorHandler, u3 = n3.locator, p3 = n3.xmlns || {}, m3 = /\/x?html?$/.test(t3), h3 = m3 ? r2.HTML_ENTITIES : r2.XML_ENTITIES;
    u3 && a3.setDocumentLocator(u3), i3.errorHandler = d2(s3, a3, u3), i3.domBuilder = n3.domBuilder || a3, m3 && (p3[``] = o2.HTML), p3.xml = p3.xml || o2.XML;
    var g3 = n3.normalizeLineEndings || l2;
    return e15 && typeof e15 == `string` ? i3.parse(g3(e15), p3, h3) : i3.errorHandler.error(`invalid doc source`), a3.doc;
  };
  function d2(e15, t3, n3) {
    if (!e15) {
      if (t3 instanceof f2) return t3;
      e15 = t3;
    }
    var r3 = {}, i3 = e15 instanceof Function;
    n3 ||= {};
    function a3(t4) {
      var a4 = e15[t4];
      !a4 && i3 && (a4 = e15.length == 2 ? function(n4) {
        e15(t4, n4);
      } : e15), r3[t4] = a4 && function(e16) {
        a4(`[xmldom ` + t4 + `]	` + e16 + m2(n3));
      } || function() {
      };
    }
    return a3(`warning`), a3(`error`), a3(`fatalError`), r3;
  }
  function f2() {
    this.cdata = false;
  }
  function p2(e15, t3) {
    t3.lineNumber = e15.lineNumber, t3.columnNumber = e15.columnNumber;
  }
  f2.prototype = { startDocument: function() {
    this.doc = new a2().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
  }, startElement: function(e15, t3, n3, r3) {
    var i3 = this.doc, a3 = i3.createElementNS(e15, n3 || t3), o3 = r3.length;
    g2(this, a3), this.currentElement = a3, this.locator && p2(this.locator, a3);
    for (var s3 = 0; s3 < o3; s3++) {
      var e15 = r3.getURI(s3), c3 = r3.getValue(s3), n3 = r3.getQName(s3), l3 = i3.createAttributeNS(e15, n3);
      this.locator && p2(r3.getLocator(s3), l3), l3.value = l3.nodeValue = c3, a3.setAttributeNode(l3);
    }
  }, endElement: function(e15, t3, n3) {
    var r3 = this.currentElement;
    r3.tagName, this.currentElement = r3.parentNode;
  }, startPrefixMapping: function(e15, t3) {
  }, endPrefixMapping: function(e15) {
  }, processingInstruction: function(e15, t3) {
    var n3 = this.doc.createProcessingInstruction(e15, t3);
    this.locator && p2(this.locator, n3), g2(this, n3);
  }, ignorableWhitespace: function(e15, t3, n3) {
  }, characters: function(e15, t3, n3) {
    if (e15 = h2.apply(this, arguments), e15) {
      if (this.cdata) var r3 = this.doc.createCDATASection(e15);
      else var r3 = this.doc.createTextNode(e15);
      this.currentElement ? this.currentElement.appendChild(r3) : /^\s*$/.test(e15) && this.doc.appendChild(r3), this.locator && p2(this.locator, r3);
    }
  }, skippedEntity: function(e15) {
  }, endDocument: function() {
    this.doc.normalize();
  }, setDocumentLocator: function(e15) {
    (this.locator = e15) && (e15.lineNumber = 0);
  }, comment: function(e15, t3, n3) {
    e15 = h2.apply(this, arguments);
    var r3 = this.doc.createComment(e15);
    this.locator && p2(this.locator, r3), g2(this, r3);
  }, startCDATA: function() {
    this.cdata = true;
  }, endCDATA: function() {
    this.cdata = false;
  }, startDTD: function(e15, t3, n3) {
    var r3 = this.doc.implementation;
    if (r3 && r3.createDocumentType) {
      var i3 = r3.createDocumentType(e15, t3, n3);
      this.locator && p2(this.locator, i3), g2(this, i3), this.doc.doctype = i3;
    }
  }, warning: function(e15) {
    console.warn(`[xmldom warning]	` + e15, m2(this.locator));
  }, error: function(e15) {
    console.error(`[xmldom error]	` + e15, m2(this.locator));
  }, fatalError: function(e15) {
    throw new s2(e15, this.locator);
  } };
  function m2(e15) {
    if (e15) return `
@` + (e15.systemId || ``) + `#[line:` + e15.lineNumber + `,col:` + e15.columnNumber + `]`;
  }
  function h2(e15, t3, n3) {
    return typeof e15 == `string` ? e15.substr(t3, n3) : e15.length >= t3 + n3 || t3 ? new java.lang.String(e15, t3, n3) + `` : e15;
  }
  `endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl`.replace(/\w+/g, function(e15) {
    f2.prototype[e15] = function() {
      return null;
    };
  });
  function g2(e15, t3) {
    e15.currentElement ? e15.currentElement.appendChild(t3) : e15.doc.appendChild(t3);
  }
  e14.__DOMHandler = f2, e14.normalizeLineEndings = l2, e14.DOMParser = u2;
})), Ie = t(((e14) => {
  var t2 = Me();
  e14.DOMImplementation = t2.DOMImplementation, e14.XMLSerializer = t2.XMLSerializer, e14.DOMParser = Fe().DOMParser;
}))(), Le = (e14) => !!e14 && typeof e14 == `object`, F = (...e14) => e14.reduce((e15, t2) => (typeof t2 == `object` && Object.keys(t2).forEach((n2) => {
  Array.isArray(e15[n2]) && Array.isArray(t2[n2]) ? e15[n2] = e15[n2].concat(t2[n2]) : Le(e15[n2]) && Le(t2[n2]) ? e15[n2] = F(e15[n2], t2[n2]) : e15[n2] = t2[n2];
}), e15), {}), Re = (e14) => Object.keys(e14).map((t2) => e14[t2]), ze = (e14, t2) => {
  let n2 = [];
  for (let r2 = e14; r2 < t2; r2++) n2.push(r2);
  return n2;
}, Be = (e14) => e14.reduce((e15, t2) => e15.concat(t2), []), Ve = (e14) => {
  if (!e14.length) return [];
  let t2 = [];
  for (let n2 = 0; n2 < e14.length; n2++) t2.push(e14[n2]);
  return t2;
}, I = (e14, t2) => e14.reduce((e15, n2, r2) => (n2[t2] && e15.push(r2), e15), []), He = (e14, t2) => Re(e14.reduce((e15, n2) => (n2.forEach((n3) => {
  e15[t2(n3)] = n3;
}), e15), {})), Ue = { INVALID_NUMBER_OF_PERIOD: `INVALID_NUMBER_OF_PERIOD`, INVALID_NUMBER_OF_CONTENT_STEERING: `INVALID_NUMBER_OF_CONTENT_STEERING`, DASH_EMPTY_MANIFEST: `DASH_EMPTY_MANIFEST`, DASH_INVALID_XML: `DASH_INVALID_XML`, NO_BASE_URL: `NO_BASE_URL`, MISSING_SEGMENT_INFORMATION: `MISSING_SEGMENT_INFORMATION`, SEGMENT_TIME_UNSPECIFIED: `SEGMENT_TIME_UNSPECIFIED`, UNSUPPORTED_UTC_TIMING_SCHEME: `UNSUPPORTED_UTC_TIMING_SCHEME` }, We = ({ baseUrl: e14 = ``, source: t2 = ``, range: n2 = ``, indexRange: r2 = `` }) => {
  let i2 = { uri: t2, resolvedUri: ee(e14 || ``, t2) };
  if (n2 || r2) {
    let e15 = (n2 || r2).split(`-`), t3 = h.default.BigInt ? h.default.BigInt(e15[0]) : parseInt(e15[0], 10), a2 = h.default.BigInt ? h.default.BigInt(e15[1]) : parseInt(e15[1], 10);
    t3 < 2 ** 53 - 1 && typeof t3 == `bigint` && (t3 = Number(t3)), a2 < 2 ** 53 - 1 && typeof a2 == `bigint` && (a2 = Number(a2));
    let o2;
    o2 = typeof a2 == `bigint` || typeof t3 == `bigint` ? h.default.BigInt(a2) - h.default.BigInt(t3) + h.default.BigInt(1) : a2 - t3 + 1, typeof o2 == `bigint` && o2 < 2 ** 53 - 1 && (o2 = Number(o2)), i2.byterange = { length: o2, offset: t3 };
  }
  return i2;
}, Ge = (e14) => {
  let t2;
  return t2 = typeof e14.offset == `bigint` || typeof e14.length == `bigint` ? h.default.BigInt(e14.offset) + h.default.BigInt(e14.length) - h.default.BigInt(1) : e14.offset + e14.length - 1, `${e14.offset}-${t2}`;
}, Ke = (e14) => (e14 && typeof e14 != `number` && (e14 = parseInt(e14, 10)), isNaN(e14) ? null : e14), L = { static(e14) {
  let { duration: t2, timescale: n2 = 1, sourceDuration: r2, periodDuration: i2 } = e14, a2 = Ke(e14.endNumber), o2 = t2 / n2;
  return typeof a2 == `number` ? { start: 0, end: a2 } : typeof i2 == `number` ? { start: 0, end: i2 / o2 } : { start: 0, end: r2 / o2 };
}, dynamic(e14) {
  let { NOW: t2, clientOffset: n2, availabilityStartTime: r2, timescale: i2 = 1, duration: a2, periodStart: o2 = 0, minimumUpdatePeriod: s2 = 0, timeShiftBufferDepth: c2 = 1 / 0 } = e14, l2 = Ke(e14.endNumber), u2 = (t2 + n2) / 1e3, d2 = r2 + o2, f2 = u2 + s2 - d2, p2 = Math.ceil(f2 * i2 / a2), m2 = Math.floor((u2 - d2 - c2) * i2 / a2), h2 = Math.floor((u2 - d2) * i2 / a2);
  return { start: Math.max(0, m2), end: typeof l2 == `number` ? l2 : Math.min(p2, h2) };
} }, qe = (e14) => (t2) => {
  let { duration: n2, timescale: r2 = 1, periodStart: i2, startNumber: a2 = 1 } = e14;
  return { number: a2 + t2, duration: n2 / r2, timeline: i2, time: t2 * n2 };
}, Je = (e14) => {
  let { type: t2, duration: n2, timescale: r2 = 1, periodDuration: i2, sourceDuration: a2 } = e14, { start: o2, end: s2 } = L[t2](e14), c2 = ze(o2, s2).map(qe(e14));
  if (t2 === `static`) {
    let e15 = c2.length - 1, t3 = typeof i2 == `number` ? i2 : a2;
    c2[e15].duration = t3 - n2 / r2 * e15;
  }
  return c2;
}, Ye = (e14) => {
  let { baseUrl: t2, initialization: n2 = {}, sourceDuration: r2, indexRange: i2 = ``, periodStart: a2, presentationTime: o2, number: s2 = 0, duration: c2 } = e14;
  if (!t2) throw Error(Ue.NO_BASE_URL);
  let l2 = We({ baseUrl: t2, source: n2.sourceURL, range: n2.range }), u2 = We({ baseUrl: t2, source: t2, indexRange: i2 });
  if (u2.map = l2, c2) {
    let t3 = Je(e14);
    t3.length && (u2.duration = t3[0].duration, u2.timeline = t3[0].timeline);
  } else r2 && (u2.duration = r2, u2.timeline = a2);
  return u2.presentationTime = o2 || a2, u2.number = s2, [u2];
}, Xe = (e14, t2, n2) => {
  let r2 = e14.sidx.map ? e14.sidx.map : null, i2 = e14.sidx.duration, a2 = e14.timeline || 0, o2 = e14.sidx.byterange, s2 = o2.offset + o2.length, c2 = t2.timescale, l2 = t2.references.filter((e15) => e15.referenceType !== 1), u2 = [], d2 = e14.endList ? `static` : `dynamic`, f2 = e14.sidx.timeline, p2 = f2, m2 = e14.mediaSequence || 0, g2;
  g2 = typeof t2.firstOffset == `bigint` ? h.default.BigInt(s2) + t2.firstOffset : s2 + t2.firstOffset;
  for (let e15 = 0; e15 < l2.length; e15++) {
    let o3 = t2.references[e15], s3 = o3.referencedSize, l3 = o3.subsegmentDuration, _2;
    _2 = typeof g2 == `bigint` ? g2 + h.default.BigInt(s3) - h.default.BigInt(1) : g2 + s3 - 1;
    let v2 = `${g2}-${_2}`, y2 = Ye({ baseUrl: n2, timescale: c2, timeline: a2, periodStart: f2, presentationTime: p2, number: m2, duration: l3, sourceDuration: i2, indexRange: v2, type: d2 })[0];
    r2 && (y2.map = r2), u2.push(y2), typeof g2 == `bigint` ? g2 += h.default.BigInt(s3) : g2 += s3, p2 += l3 / c2, m2++;
  }
  return e14.segments = u2, e14;
}, Ze = [`AUDIO`, `SUBTITLES`], Qe = 1 / 60, $e = (e14) => He(e14, ({ timeline: e15 }) => e15).sort((e15, t2) => e15.timeline > t2.timeline ? 1 : -1), et = (e14, t2) => {
  for (let n2 = 0; n2 < e14.length; n2++) if (e14[n2].attributes.NAME === t2) return e14[n2];
  return null;
}, tt = (e14) => {
  let t2 = [];
  return Ae(e14, Ze, (e15, n2, r2, i2) => {
    t2 = t2.concat(e15.playlists || []);
  }), t2;
}, nt = ({ playlist: e14, mediaSequence: t2 }) => {
  e14.mediaSequence = t2, e14.segments.forEach((t3, n2) => {
    t3.number = e14.mediaSequence + n2;
  });
}, rt = ({ oldPlaylists: e14, newPlaylists: t2, timelineStarts: n2 }) => {
  t2.forEach((t3) => {
    t3.discontinuitySequence = n2.findIndex(function({ timeline: e15 }) {
      return e15 === t3.timeline;
    });
    let r2 = et(e14, t3.attributes.NAME);
    if (!r2 || t3.sidx) return;
    let i2 = t3.segments[0], a2 = r2.segments.findIndex(function(e15) {
      return Math.abs(e15.presentationTime - i2.presentationTime) < Qe;
    });
    if (a2 === -1) {
      nt({ playlist: t3, mediaSequence: r2.mediaSequence + r2.segments.length }), t3.segments[0].discontinuity = true, t3.discontinuityStarts.unshift(0), (!r2.segments.length && t3.timeline > r2.timeline || r2.segments.length && t3.timeline > r2.segments[r2.segments.length - 1].timeline) && t3.discontinuitySequence--;
      return;
    }
    r2.segments[a2].discontinuity && !i2.discontinuity && (i2.discontinuity = true, t3.discontinuityStarts.unshift(0), t3.discontinuitySequence--), nt({ playlist: t3, mediaSequence: r2.segments[a2].number });
  });
}, it = ({ oldManifest: e14, newManifest: t2 }) => {
  let n2 = e14.playlists.concat(tt(e14)), r2 = t2.playlists.concat(tt(t2));
  return t2.timelineStarts = $e([e14.timelineStarts, t2.timelineStarts]), rt({ oldPlaylists: n2, newPlaylists: r2, timelineStarts: t2.timelineStarts }), t2;
}, at = (e14) => e14 && e14.uri + `-` + Ge(e14.byterange), ot = (e14) => {
  let t2 = e14.reduce(function(e15, t3) {
    return e15[t3.attributes.baseUrl] || (e15[t3.attributes.baseUrl] = []), e15[t3.attributes.baseUrl].push(t3), e15;
  }, {}), n2 = [];
  return Object.values(t2).forEach((e15) => {
    let t3 = Re(e15.reduce((e16, t4) => {
      let n3 = t4.attributes.id + (t4.attributes.lang || ``);
      return e16[n3] ? (t4.segments && (t4.segments[0] && (t4.segments[0].discontinuity = true), e16[n3].segments.push(...t4.segments)), t4.attributes.contentProtection && (e16[n3].attributes.contentProtection = t4.attributes.contentProtection)) : (e16[n3] = t4, e16[n3].attributes.timelineStarts = []), e16[n3].attributes.timelineStarts.push({ start: t4.attributes.periodStart, timeline: t4.attributes.periodStart }), e16;
    }, {}));
    n2 = n2.concat(t3);
  }), n2.map((e15) => (e15.discontinuityStarts = I(e15.segments || [], `discontinuity`), e15));
}, st = (e14, t2) => {
  let n2 = at(e14.sidx), r2 = n2 && t2[n2] && t2[n2].sidx;
  return r2 && Xe(e14, r2, e14.sidx.resolvedUri), e14;
}, ct = (e14, t2 = {}) => {
  if (!Object.keys(t2).length) return e14;
  for (let n2 in e14) e14[n2] = st(e14[n2], t2);
  return e14;
}, lt = ({ attributes: e14, segments: t2, sidx: n2, mediaSequence: r2, discontinuitySequence: i2, discontinuityStarts: a2 }, o2) => {
  let s2 = { attributes: { NAME: e14.id, BANDWIDTH: e14.bandwidth, CODECS: e14.codecs, "PROGRAM-ID": 1 }, uri: ``, endList: e14.type === `static`, timeline: e14.periodStart, resolvedUri: e14.baseUrl || ``, targetDuration: e14.duration, discontinuitySequence: i2, discontinuityStarts: a2, timelineStarts: e14.timelineStarts, mediaSequence: r2, segments: t2 };
  return e14.contentProtection && (s2.contentProtection = e14.contentProtection), e14.serviceLocation && (s2.attributes.serviceLocation = e14.serviceLocation), n2 && (s2.sidx = n2), o2 && (s2.attributes.AUDIO = `audio`, s2.attributes.SUBTITLES = `subs`), s2;
}, ut = ({ attributes: e14, segments: t2, mediaSequence: n2, discontinuityStarts: r2, discontinuitySequence: i2 }) => {
  t2 === void 0 && (t2 = [{ uri: e14.baseUrl, timeline: e14.periodStart, resolvedUri: e14.baseUrl || ``, duration: e14.sourceDuration, number: 0 }], e14.duration = e14.sourceDuration);
  let a2 = { NAME: e14.id, BANDWIDTH: e14.bandwidth, "PROGRAM-ID": 1 };
  e14.codecs && (a2.CODECS = e14.codecs);
  let o2 = { attributes: a2, uri: ``, endList: e14.type === `static`, timeline: e14.periodStart, resolvedUri: e14.baseUrl || ``, targetDuration: e14.duration, timelineStarts: e14.timelineStarts, discontinuityStarts: r2, discontinuitySequence: i2, mediaSequence: n2, segments: t2 };
  return e14.serviceLocation && (o2.attributes.serviceLocation = e14.serviceLocation), o2;
}, dt = (e14, t2 = {}, n2 = false) => {
  let r2, i2 = e14.reduce((e15, i3) => {
    let a2 = i3.attributes.role && i3.attributes.role.value || ``, o2 = i3.attributes.lang || ``, s2 = i3.attributes.label || `main`;
    if (o2 && !i3.attributes.label) {
      let e16 = a2 ? ` (${a2})` : ``;
      s2 = `${i3.attributes.lang}${e16}`;
    }
    e15[s2] || (e15[s2] = { language: o2, autoselect: true, default: a2 === `main`, playlists: [], uri: `` });
    let c2 = st(lt(i3, n2), t2);
    return e15[s2].playlists.push(c2), r2 === void 0 && a2 === `main` && (r2 = i3, r2.default = true), e15;
  }, {});
  if (!r2) {
    let e15 = Object.keys(i2)[0];
    i2[e15].default = true;
  }
  return i2;
}, ft = (e14, t2 = {}) => e14.reduce((e15, n2) => {
  let r2 = n2.attributes.label || n2.attributes.lang || `text`, i2 = n2.attributes.lang || `und`;
  return e15[r2] || (e15[r2] = { language: i2, default: false, autoselect: false, playlists: [], uri: `` }), e15[r2].playlists.push(st(ut(n2), t2)), e15;
}, {}), pt = (e14) => e14.reduce((e15, t2) => (t2 && t2.forEach((t3) => {
  let { channel: n2, language: r2 } = t3;
  e15[r2] = { autoselect: false, default: false, instreamId: n2, language: r2 }, t3.hasOwnProperty(`aspectRatio`) && (e15[r2].aspectRatio = t3.aspectRatio), t3.hasOwnProperty(`easyReader`) && (e15[r2].easyReader = t3.easyReader), t3.hasOwnProperty(`3D`) && (e15[r2][`3D`] = t3[`3D`]);
}), e15), {}), mt = ({ attributes: e14, segments: t2, sidx: n2, discontinuityStarts: r2 }) => {
  let i2 = { attributes: { NAME: e14.id, AUDIO: `audio`, SUBTITLES: `subs`, RESOLUTION: { width: e14.width, height: e14.height }, CODECS: e14.codecs, BANDWIDTH: e14.bandwidth, "PROGRAM-ID": 1 }, uri: ``, endList: e14.type === `static`, timeline: e14.periodStart, resolvedUri: e14.baseUrl || ``, targetDuration: e14.duration, discontinuityStarts: r2, timelineStarts: e14.timelineStarts, segments: t2 };
  return e14.frameRate && (i2.attributes[`FRAME-RATE`] = e14.frameRate), e14.qualityRanking !== void 0 && (i2.attributes.SCORE = 1 / (e14.qualityRanking + 1)), e14.contentProtection && (i2.contentProtection = e14.contentProtection), e14.serviceLocation && (i2.attributes.serviceLocation = e14.serviceLocation), n2 && (i2.sidx = n2), i2;
}, ht = ({ attributes: e14 }) => e14.mimeType === `video/mp4` || e14.mimeType === `video/webm` || e14.contentType === `video`, gt = ({ attributes: e14 }) => e14.mimeType === `audio/mp4` || e14.mimeType === `audio/webm` || e14.contentType === `audio`, _t = ({ attributes: e14 }) => e14.mimeType === `text/vtt` || e14.contentType === `text`, vt = (e14, t2) => {
  e14.forEach((e15) => {
    e15.mediaSequence = 0, e15.discontinuitySequence = t2.findIndex(function({ timeline: t3 }) {
      return t3 === e15.timeline;
    }), e15.segments && e15.segments.forEach((e16, t3) => {
      e16.number = t3;
    });
  });
}, yt = (e14) => e14 ? Object.keys(e14).reduce((t2, n2) => {
  let r2 = e14[n2];
  return t2.concat(r2.playlists);
}, []) : [], bt = ({ dashPlaylists: e14, locations: t2, contentSteering: n2, sidxMapping: r2 = {}, previousManifest: i2, eventStream: a2 }) => {
  if (!e14.length) return {};
  let { sourceDuration: o2, type: s2, suggestedPresentationDelay: c2, minimumUpdatePeriod: l2 } = e14[0].attributes, u2 = ot(e14.filter(ht)).map(mt), d2 = ot(e14.filter(gt)), f2 = ot(e14.filter(_t)), p2 = e14.map((e15) => e15.attributes.captionServices).filter(Boolean), m2 = { allowCache: true, discontinuityStarts: [], segments: [], endList: true, mediaGroups: { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} }, uri: ``, duration: o2, playlists: ct(u2, r2) };
  l2 >= 0 && (m2.minimumUpdatePeriod = l2 * 1e3), t2 && (m2.locations = t2), n2 && (m2.contentSteering = n2), s2 === `dynamic` && (m2.suggestedPresentationDelay = c2), a2 && a2.length > 0 && (m2.eventStream = a2);
  let h2 = m2.playlists.length === 0, g2 = d2.length ? dt(d2, r2, h2) : null, _2 = f2.length ? ft(f2, r2) : null, v2 = u2.concat(yt(g2), yt(_2));
  return m2.timelineStarts = $e(v2.map(({ timelineStarts: e15 }) => e15)), vt(v2, m2.timelineStarts), g2 && (m2.mediaGroups.AUDIO.audio = g2), _2 && (m2.mediaGroups.SUBTITLES.subs = _2), p2.length && (m2.mediaGroups[`CLOSED-CAPTIONS`].cc = pt(p2)), i2 ? it({ oldManifest: i2, newManifest: m2 }) : m2;
}, xt = (e14, t2, n2) => {
  let { NOW: r2, clientOffset: i2, availabilityStartTime: a2, timescale: o2 = 1, periodStart: s2 = 0, minimumUpdatePeriod: c2 = 0 } = e14, l2 = (r2 + i2) / 1e3, u2 = a2 + s2, d2 = l2 + c2 - u2;
  return Math.ceil((d2 * o2 - t2) / n2);
}, St = (e14, t2) => {
  let { type: n2, minimumUpdatePeriod: r2 = 0, media: i2 = ``, sourceDuration: a2, timescale: o2 = 1, startNumber: s2 = 1, periodStart: c2 } = e14, l2 = [], u2 = -1;
  for (let d2 = 0; d2 < t2.length; d2++) {
    let f2 = t2[d2], p2 = f2.d, m2 = f2.r || 0, h2 = f2.t || 0;
    u2 < 0 && (u2 = h2), h2 && h2 > u2 && (u2 = h2);
    let g2;
    if (m2 < 0) {
      let s3 = d2 + 1;
      g2 = s3 === t2.length ? n2 === `dynamic` && r2 > 0 && i2.indexOf(`$Number$`) > 0 ? xt(e14, u2, p2) : (a2 * o2 - u2) / p2 : (t2[s3].t - u2) / p2;
    } else g2 = m2 + 1;
    let _2 = s2 + l2.length + g2, v2 = s2 + l2.length;
    for (; v2 < _2; ) l2.push({ number: v2, duration: p2 / o2, time: u2, timeline: c2 }), u2 += p2, v2++;
  }
  return l2;
}, Ct = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g, wt = (e14) => (t2, n2, r2, i2) => {
  if (t2 === `$$`) return `$`;
  if (e14[n2] === void 0) return t2;
  let a2 = `` + e14[n2];
  return n2 === `RepresentationID` || (i2 = r2 ? parseInt(i2, 10) : 1, a2.length >= i2) ? a2 : `${Array(i2 - a2.length + 1).join(`0`)}${a2}`;
}, Tt = (e14, t2) => e14.replace(Ct, wt(t2)), Et = (e14, t2) => !e14.duration && !t2 ? [{ number: e14.startNumber || 1, duration: e14.sourceDuration, time: 0, timeline: e14.periodStart }] : e14.duration ? Je(e14) : St(e14, t2), Dt = (e14, t2) => {
  let n2 = { RepresentationID: e14.id, Bandwidth: e14.bandwidth || 0 }, { initialization: r2 = { sourceURL: ``, range: `` } } = e14, i2 = We({ baseUrl: e14.baseUrl, source: Tt(r2.sourceURL, n2), range: r2.range });
  return Et(e14, t2).map((t3) => {
    n2.Number = t3.number, n2.Time = t3.time;
    let r3 = Tt(e14.media || ``, n2), a2 = e14.timescale || 1, o2 = e14.presentationTimeOffset || 0, s2 = e14.periodStart + (t3.time - o2) / a2;
    return { uri: r3, timeline: t3.timeline, duration: t3.duration, resolvedUri: ee(e14.baseUrl || ``, r3), map: i2, number: t3.number, presentationTime: s2 };
  });
}, Ot = (e14, t2) => {
  let { baseUrl: n2, initialization: r2 = {} } = e14, i2 = We({ baseUrl: n2, source: r2.sourceURL, range: r2.range }), a2 = We({ baseUrl: n2, source: t2.media, range: t2.mediaRange });
  return a2.map = i2, a2;
}, kt = (e14, t2) => {
  let { duration: n2, segmentUrls: r2 = [], periodStart: i2 } = e14;
  if (!n2 && !t2 || n2 && t2) throw Error(Ue.SEGMENT_TIME_UNSPECIFIED);
  let a2 = r2.map((t3) => Ot(e14, t3)), o2;
  return n2 && (o2 = Je(e14)), t2 && (o2 = St(e14, t2)), o2.map((t3, n3) => {
    if (a2[n3]) {
      let r3 = a2[n3], o3 = e14.timescale || 1, s2 = e14.presentationTimeOffset || 0;
      return r3.timeline = t3.timeline, r3.duration = t3.duration, r3.number = t3.number, r3.presentationTime = i2 + (t3.time - s2) / o3, r3;
    }
  }).filter((e15) => e15);
}, At = ({ attributes: e14, segmentInfo: t2 }) => {
  let n2, r2;
  t2.template ? (r2 = Dt, n2 = F(e14, t2.template)) : t2.base ? (r2 = Ye, n2 = F(e14, t2.base)) : t2.list && (r2 = kt, n2 = F(e14, t2.list));
  let i2 = { attributes: e14 };
  if (!r2) return i2;
  let a2 = r2(n2, t2.segmentTimeline);
  if (n2.duration) {
    let { duration: e15, timescale: t3 = 1 } = n2;
    n2.duration = e15 / t3;
  } else a2.length ? n2.duration = a2.reduce((e15, t3) => Math.max(e15, Math.ceil(t3.duration)), 0) : n2.duration = 0;
  return i2.attributes = n2, i2.segments = a2, t2.base && n2.indexRange && (i2.sidx = a2[0], i2.segments = []), i2;
}, jt = (e14) => e14.map(At), R = (e14, t2) => Ve(e14.childNodes).filter(({ tagName: e15 }) => e15 === t2), Mt = (e14) => e14.textContent.trim(), Nt = (e14) => parseFloat(e14.split(`/`).reduce((e15, t2) => e15 / t2)), Pt = (e14) => {
  let t2 = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(e14);
  if (!t2) return 0;
  let [n2, r2, i2, a2, o2, s2] = t2.slice(1);
  return parseFloat(n2 || 0) * 31536e3 + parseFloat(r2 || 0) * 2592e3 + parseFloat(i2 || 0) * 86400 + parseFloat(a2 || 0) * 3600 + parseFloat(o2 || 0) * 60 + parseFloat(s2 || 0);
}, Ft = (e14) => (/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(e14) && (e14 += `Z`), Date.parse(e14)), It = { mediaPresentationDuration(e14) {
  return Pt(e14);
}, availabilityStartTime(e14) {
  return Ft(e14) / 1e3;
}, minimumUpdatePeriod(e14) {
  return Pt(e14);
}, suggestedPresentationDelay(e14) {
  return Pt(e14);
}, type(e14) {
  return e14;
}, timeShiftBufferDepth(e14) {
  return Pt(e14);
}, start(e14) {
  return Pt(e14);
}, width(e14) {
  return parseInt(e14, 10);
}, height(e14) {
  return parseInt(e14, 10);
}, bandwidth(e14) {
  return parseInt(e14, 10);
}, frameRate(e14) {
  return Nt(e14);
}, startNumber(e14) {
  return parseInt(e14, 10);
}, timescale(e14) {
  return parseInt(e14, 10);
}, presentationTimeOffset(e14) {
  return parseInt(e14, 10);
}, duration(e14) {
  let t2 = parseInt(e14, 10);
  return isNaN(t2) ? Pt(e14) : t2;
}, d(e14) {
  return parseInt(e14, 10);
}, t(e14) {
  return parseInt(e14, 10);
}, r(e14) {
  return parseInt(e14, 10);
}, presentationTime(e14) {
  return parseInt(e14, 10);
}, qualityRanking(e14) {
  return parseInt(e14, 10);
}, qualityranking(e14) {
  return parseInt(e14, 10);
}, DEFAULT(e14) {
  return e14;
} }, Lt = { qualityranking: `qualityRanking` }, Rt = (e14) => e14 && e14.attributes ? Ve(e14.attributes).reduce((e15, t2) => {
  let n2 = It[t2.name] || It.DEFAULT, r2 = Lt[t2.name] || t2.name;
  return e15[r2] = n2(t2.value), e15;
}, {}) : {}, zt = { "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": `org.w3.clearkey`, "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": `com.widevine.alpha`, "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": `com.microsoft.playready`, "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": `com.adobe.primetime`, "urn:mpeg:dash:mp4protection:2011": `mp4protection` }, Bt = (e14, t2) => t2.length ? Be(e14.map(function(e15) {
  return t2.map(function(t3) {
    let n2 = Mt(t3), r2 = ee(e15.baseUrl, n2), i2 = F(Rt(t3), { baseUrl: r2 });
    return r2 !== n2 && !i2.serviceLocation && e15.serviceLocation && (i2.serviceLocation = e15.serviceLocation), i2;
  });
})) : e14, Vt = (e14) => {
  let t2 = R(e14, `SegmentTemplate`)[0], n2 = R(e14, `SegmentList`)[0], r2 = n2 && R(n2, `SegmentURL`).map((e15) => F({ tag: `SegmentURL` }, Rt(e15))), i2 = R(e14, `SegmentBase`)[0], a2 = n2 || t2, o2 = a2 && R(a2, `SegmentTimeline`)[0], s2 = n2 || i2 || t2, c2 = s2 && R(s2, `Initialization`)[0], l2 = t2 && Rt(t2);
  l2 && c2 ? l2.initialization = c2 && Rt(c2) : l2 && l2.initialization && (l2.initialization = { sourceURL: l2.initialization });
  let u2 = { template: l2, segmentTimeline: o2 && R(o2, `S`).map((e15) => Rt(e15)), list: n2 && F(Rt(n2), { segmentUrls: r2, initialization: Rt(c2) }), base: i2 && F(Rt(i2), { initialization: Rt(c2) }) };
  return Object.keys(u2).forEach((e15) => {
    u2[e15] || delete u2[e15];
  }), u2;
}, Ht = (e14, t2, n2) => (r2) => {
  let i2 = Bt(t2, R(r2, `BaseURL`)), a2 = F(e14, Rt(r2)), o2 = Vt(r2);
  return i2.map((e15) => ({ segmentInfo: F(n2, o2), attributes: F(a2, e15) }));
}, Ut = (e14) => e14.reduce((e15, t2) => {
  let n2 = Rt(t2);
  n2.schemeIdUri &&= n2.schemeIdUri.toLowerCase();
  let r2 = zt[n2.schemeIdUri];
  if (r2) {
    e15[r2] = { attributes: n2 };
    let i2 = R(t2, `cenc:pssh`)[0];
    if (i2) {
      let t3 = Mt(i2);
      e15[r2].pssh = t3 && T(t3);
    }
  }
  return e15;
}, {}), Wt = (e14) => {
  if (e14.schemeIdUri === `urn:scte:dash:cc:cea-608:2015`) return (typeof e14.value == `string` ? e14.value.split(`;`) : []).map((e15) => {
    let t2, n2;
    return n2 = e15, /^CC\d=/.test(e15) ? [t2, n2] = e15.split(`=`) : /^CC\d$/.test(e15) && (t2 = e15), { channel: t2, language: n2 };
  });
  if (e14.schemeIdUri === `urn:scte:dash:cc:cea-708:2015`) return (typeof e14.value == `string` ? e14.value.split(`;`) : []).map((e15) => {
    let t2 = { channel: void 0, language: void 0, aspectRatio: 1, easyReader: 0, "3D": 0 };
    if (/=/.test(e15)) {
      let [n2, r2 = ``] = e15.split(`=`);
      t2.channel = n2, t2.language = e15, r2.split(`,`).forEach((e16) => {
        let [n3, r3] = e16.split(`:`);
        n3 === `lang` ? t2.language = r3 : n3 === `er` ? t2.easyReader = Number(r3) : n3 === `war` ? t2.aspectRatio = Number(r3) : n3 === `3D` && (t2[`3D`] = Number(r3));
      });
    } else t2.language = e15;
    return t2.channel &&= `SERVICE` + t2.channel, t2;
  });
}, Gt = (e14) => Be(R(e14.node, `EventStream`).map((t2) => {
  let n2 = Rt(t2), r2 = n2.schemeIdUri;
  return R(t2, `Event`).map((t3) => {
    let i2 = Rt(t3), a2 = i2.presentationTime || 0, o2 = n2.timescale || 1, s2 = i2.duration || 0, c2 = a2 / o2 + e14.attributes.start;
    return { schemeIdUri: r2, value: n2.value, id: i2.id, start: c2, end: c2 + s2 / o2, messageData: Mt(t3) || i2.messageData, contentEncoding: n2.contentEncoding, presentationTimeOffset: n2.presentationTimeOffset || 0 };
  });
})), Kt = (e14, t2, n2) => (r2) => {
  let i2 = Rt(r2), a2 = Bt(t2, R(r2, `BaseURL`)), o2 = R(r2, `Role`)[0], s2 = F(e14, i2, { role: Rt(o2) }), c2 = R(r2, `Accessibility`)[0], l2 = Wt(Rt(c2));
  l2 && (s2 = F(s2, { captionServices: l2 }));
  let u2 = R(r2, `Label`)[0];
  if (u2 && u2.childNodes.length) {
    let e15 = u2.childNodes[0].nodeValue.trim();
    s2 = F(s2, { label: e15 });
  }
  let d2 = Ut(R(r2, `ContentProtection`));
  Object.keys(d2).length && (s2 = F(s2, { contentProtection: d2 }));
  let f2 = Vt(r2), p2 = R(r2, `Representation`), m2 = F(n2, f2);
  return Be(p2.map(Ht(s2, a2, m2)));
}, qt = (e14, t2) => (n2, r2) => {
  let i2 = Bt(t2, R(n2.node, `BaseURL`)), a2 = F(e14, { periodStart: n2.attributes.start });
  typeof n2.attributes.duration == `number` && (a2.periodDuration = n2.attributes.duration);
  let o2 = R(n2.node, `AdaptationSet`), s2 = Vt(n2.node);
  return Be(o2.map(Kt(a2, i2, s2)));
}, Jt = (e14, t2) => {
  if (e14.length > 1 && t2({ type: `warn`, message: `The MPD manifest should contain no more than one ContentSteering tag` }), !e14.length) return null;
  let n2 = F({ serverURL: Mt(e14[0]) }, Rt(e14[0]));
  return n2.queryBeforeStart = n2.queryBeforeStart === `true`, n2;
}, Yt = ({ attributes: e14, priorPeriodAttributes: t2, mpdType: n2 }) => typeof e14.start == `number` ? e14.start : t2 && typeof t2.start == `number` && typeof t2.duration == `number` ? t2.start + t2.duration : !t2 && n2 === `static` ? 0 : null, Xt = (e14, t2 = {}) => {
  let { manifestUri: n2 = ``, NOW: r2 = Date.now(), clientOffset: i2 = 0, eventHandler: a2 = function() {
  } } = t2, o2 = R(e14, `Period`);
  if (!o2.length) throw Error(Ue.INVALID_NUMBER_OF_PERIOD);
  let s2 = R(e14, `Location`), c2 = Rt(e14), l2 = Bt([{ baseUrl: n2 }], R(e14, `BaseURL`)), u2 = R(e14, `ContentSteering`);
  c2.type = c2.type || `static`, c2.sourceDuration = c2.mediaPresentationDuration || 0, c2.NOW = r2, c2.clientOffset = i2, s2.length && (c2.locations = s2.map(Mt));
  let d2 = [];
  return o2.forEach((e15, t3) => {
    let n3 = Rt(e15), r3 = d2[t3 - 1];
    n3.start = Yt({ attributes: n3, priorPeriodAttributes: r3 ? r3.attributes : null, mpdType: c2.type }), d2.push({ node: e15, attributes: n3 });
  }), { locations: c2.locations, contentSteeringInfo: Jt(u2, a2), representationInfo: Be(d2.map(qt(c2, l2))), eventStream: Be(d2.map(Gt)) };
}, Zt = (e14) => {
  if (e14 === ``) throw Error(Ue.DASH_EMPTY_MANIFEST);
  let t2 = new Ie.DOMParser(), n2, r2;
  try {
    n2 = t2.parseFromString(e14, `application/xml`), r2 = n2 && n2.documentElement.tagName === `MPD` ? n2.documentElement : null;
  } catch {
  }
  if (!r2 || r2 && r2.getElementsByTagName(`parsererror`).length > 0) throw Error(Ue.DASH_INVALID_XML);
  return r2;
}, Qt = (e14) => {
  let t2 = R(e14, `UTCTiming`)[0];
  if (!t2) return null;
  let n2 = Rt(t2);
  switch (n2.schemeIdUri) {
    case `urn:mpeg:dash:utc:http-head:2014`:
    case `urn:mpeg:dash:utc:http-head:2012`:
      n2.method = `HEAD`;
      break;
    case `urn:mpeg:dash:utc:http-xsdate:2014`:
    case `urn:mpeg:dash:utc:http-iso:2014`:
    case `urn:mpeg:dash:utc:http-xsdate:2012`:
    case `urn:mpeg:dash:utc:http-iso:2012`:
      n2.method = `GET`;
      break;
    case `urn:mpeg:dash:utc:direct:2014`:
    case `urn:mpeg:dash:utc:direct:2012`:
      n2.method = `DIRECT`, n2.value = Date.parse(n2.value);
      break;
    default:
      throw Error(Ue.UNSUPPORTED_UTC_TIMING_SCHEME);
  }
  return n2;
}, $t = (e14, t2 = {}) => {
  let n2 = Xt(Zt(e14), t2);
  return bt({ dashPlaylists: jt(n2.representationInfo), locations: n2.locations, contentSteering: n2.contentSteeringInfo, sidxMapping: t2.sidxMapping, previousManifest: t2.previousManifest, eventStream: n2.eventStream });
}, en = (e14) => Qt(Zt(e14)), tn = t(((e14, t2) => {
  var n2 = 2 ** 32;
  t2.exports = { getUint64: function(e15) {
    var t3 = new DataView(e15.buffer, e15.byteOffset, e15.byteLength), r2;
    return t3.getBigUint64 ? (r2 = t3.getBigUint64(0), r2 < 2 ** 53 - 1 ? Number(r2) : r2) : t3.getUint32(0) * n2 + t3.getUint32(4);
  }, MAX_UINT32: n2 };
})), nn = e(t(((e14, t2) => {
  var n2 = tn().getUint64;
  t2.exports = function(e15) {
    var t3 = new DataView(e15.buffer, e15.byteOffset, e15.byteLength), r2 = { version: e15[0], flags: new Uint8Array(e15.subarray(1, 4)), references: [], referenceId: t3.getUint32(4), timescale: t3.getUint32(8) }, i2 = 12;
    r2.version === 0 ? (r2.earliestPresentationTime = t3.getUint32(i2), r2.firstOffset = t3.getUint32(i2 + 4), i2 += 8) : (r2.earliestPresentationTime = n2(e15.subarray(i2)), r2.firstOffset = n2(e15.subarray(i2 + 8)), i2 += 16), i2 += 2;
    var a2 = t3.getUint16(i2);
    for (i2 += 2; a2 > 0; i2 += 12, a2--) r2.references.push({ referenceType: (e15[i2] & 128) >>> 7, referencedSize: t3.getUint32(i2) & 2147483647, subsegmentDuration: t3.getUint32(i2 + 4), startsWithSap: !!(e15[i2 + 8] & 128), sapType: (e15[i2 + 8] & 112) >>> 4, sapDeltaTime: t3.getUint32(i2 + 8) & 268435455 });
    return r2;
  };
}))()), rn = M([73, 68, 51]), an = function(e14, t2) {
  t2 === void 0 && (t2 = 0), e14 = M(e14);
  var n2 = e14[t2 + 5], r2 = e14[t2 + 6] << 21 | e14[t2 + 7] << 14 | e14[t2 + 8] << 7 | e14[t2 + 9];
  return (n2 & 16) >> 4 ? r2 + 20 : r2 + 10;
}, on = function e2(t2, n2) {
  return n2 === void 0 && (n2 = 0), t2 = M(t2), t2.length - n2 < 10 || !P(t2, rn, { offset: n2 }) ? n2 : (n2 += an(t2, n2), e2(t2, n2));
};
new Uint8Array([79, 112, 117, 115, 72, 101, 97, 100]);
var sn = function(e14) {
  return typeof e14 == `string` ? Oe(e14) : e14;
}, cn = function(e14) {
  return Array.isArray(e14) ? e14.map(function(e15) {
    return sn(e15);
  }) : [sn(e14)];
}, ln, un = function(e14) {
  e14 = M(e14);
  for (var t2 = [], n2 = 0; e14.length > n2; ) {
    var r2 = e14[n2], i2 = 0, a2 = 0;
    a2++;
    var o2 = e14[a2];
    for (a2++; o2 & 128; ) i2 = (o2 & 127) << 7, o2 = e14[a2], a2++;
    i2 += o2 & 127;
    for (var s2 = 0; s2 < ln.length; s2++) {
      var c2 = ln[s2], l2 = c2.id, u2 = c2.parser;
      if (r2 === l2) {
        t2.push(u2(e14.subarray(a2, a2 + i2)));
        break;
      }
    }
    n2 += i2 + a2;
  }
  return t2;
};
ln = [{ id: 3, parser: function(e14) {
  var t2 = { tag: 3, id: e14[0] << 8 | e14[1], flags: e14[2], size: 3, dependsOnEsId: 0, ocrEsId: 0, descriptors: [], url: `` };
  if (t2.flags & 128 && (t2.dependsOnEsId = e14[t2.size] << 8 | e14[t2.size + 1], t2.size += 2), t2.flags & 64) {
    var n2 = e14[t2.size];
    t2.url = De(e14.subarray(t2.size + 1, t2.size + 1 + n2)), t2.size += n2;
  }
  return t2.flags & 32 && (t2.ocrEsId = e14[t2.size] << 8 | e14[t2.size + 1], t2.size += 2), t2.descriptors = un(e14.subarray(t2.size)) || [], t2;
} }, { id: 4, parser: function(e14) {
  return { tag: 4, oti: e14[0], streamType: e14[1], bufferSize: e14[2] << 16 | e14[3] << 8 | e14[4], maxBitrate: e14[5] << 24 | e14[6] << 16 | e14[7] << 8 | e14[8], avgBitrate: e14[9] << 24 | e14[10] << 16 | e14[11] << 8 | e14[12], descriptors: un(e14.subarray(13)) };
} }, { id: 5, parser: function(e14) {
  return { tag: 5, bytes: e14 };
} }, { id: 6, parser: function(e14) {
  return { tag: 6, bytes: e14 };
} }];
var dn = function e3(t2, n2, r2) {
  r2 === void 0 && (r2 = false), n2 = cn(n2), t2 = M(t2);
  var i2 = [];
  if (!n2.length) return i2;
  for (var a2 = 0; a2 < t2.length; ) {
    var o2 = (t2[a2] << 24 | t2[a2 + 1] << 16 | t2[a2 + 2] << 8 | t2[a2 + 3]) >>> 0, s2 = t2.subarray(a2 + 4, a2 + 8);
    if (o2 === 0) break;
    var c2 = a2 + o2;
    if (c2 > t2.length) {
      if (r2) break;
      c2 = t2.length;
    }
    var l2 = t2.subarray(a2 + 8, c2);
    P(s2, n2[0]) && (n2.length === 1 ? i2.push(l2) : i2.push.apply(i2, e3(l2, n2.slice(1), r2))), a2 = c2;
  }
  return i2;
}, fn = { EBML: M([26, 69, 223, 163]), DocType: M([66, 130]), Segment: M([24, 83, 128, 103]), SegmentInfo: M([21, 73, 169, 102]), Tracks: M([22, 84, 174, 107]), Track: M([174]), TrackNumber: M([215]), DefaultDuration: M([35, 227, 131]), TrackEntry: M([174]), TrackType: M([131]), FlagDefault: M([136]), CodecID: M([134]), CodecPrivate: M([99, 162]), VideoTrack: M([224]), AudioTrack: M([225]), Cluster: M([31, 67, 182, 117]), Timestamp: M([231]), TimestampScale: M([42, 215, 177]), BlockGroup: M([160]), BlockDuration: M([155]), Block: M([161]), SimpleBlock: M([163]) }, pn = [128, 64, 32, 16, 8, 4, 2, 1], mn = function(e14) {
  for (var t2 = 1, n2 = 0; n2 < pn.length && !(e14 & pn[n2]); n2++) t2++;
  return t2;
}, hn = function(e14, t2, n2, r2) {
  n2 === void 0 && (n2 = true), r2 === void 0 && (r2 = false);
  var i2 = mn(e14[t2]), a2 = e14.subarray(t2, t2 + i2);
  return n2 && (a2 = Array.prototype.slice.call(e14, t2, t2 + i2), a2[0] ^= pn[i2 - 1]), { length: i2, value: Ee(a2, { signed: r2 }), bytes: a2 };
}, gn = function e4(t2) {
  return typeof t2 == `string` ? t2.match(/.{1,2}/g).map(function(t3) {
    return e4(t3);
  }) : typeof t2 == `number` ? N(t2) : t2;
}, _n = function(e14) {
  return Array.isArray(e14) ? e14.map(function(e15) {
    return gn(e15);
  }) : [gn(e14)];
}, vn = function e5(t2, n2, r2) {
  if (r2 >= n2.length) return n2.length;
  var i2 = hn(n2, r2, false);
  if (P(t2.bytes, i2.bytes)) return r2;
  var a2 = hn(n2, r2 + i2.length);
  return e5(t2, n2, r2 + a2.length + a2.value + i2.length);
}, yn = function e6(t2, n2) {
  n2 = _n(n2), t2 = M(t2);
  var r2 = [];
  if (!n2.length) return r2;
  for (var i2 = 0; i2 < t2.length; ) {
    var a2 = hn(t2, i2, false), o2 = hn(t2, i2 + a2.length), s2 = i2 + a2.length + o2.length;
    o2.value === 127 && (o2.value = vn(a2, t2, s2), o2.value !== t2.length && (o2.value -= s2));
    var c2 = s2 + o2.value > t2.length ? t2.length : s2 + o2.value, l2 = t2.subarray(s2, c2);
    P(n2[0], a2.bytes) && (n2.length === 1 ? r2.push(l2) : r2 = r2.concat(e6(l2, n2.slice(1))));
    var u2 = a2.length + o2.length + l2.length;
    i2 += u2;
  }
  return r2;
}, bn = M([0, 0, 0, 1]), xn = M([0, 0, 1]), Sn = M([0, 0, 3]), Cn = function(e14) {
  for (var t2 = [], n2 = 1; n2 < e14.length - 2; ) P(e14.subarray(n2, n2 + 3), Sn) && (t2.push(n2 + 2), n2++), n2++;
  if (t2.length === 0) return e14;
  var r2 = e14.length - t2.length, i2 = new Uint8Array(r2), a2 = 0;
  for (n2 = 0; n2 < r2; a2++, n2++) a2 === t2[0] && (a2++, t2.shift()), i2[n2] = e14[a2];
  return i2;
}, wn = function(e14, t2, n2, r2) {
  r2 === void 0 && (r2 = 1 / 0), e14 = M(e14), n2 = [].concat(n2);
  for (var i2 = 0, a2, o2 = 0; i2 < e14.length && (o2 < r2 || a2); ) {
    var s2 = void 0;
    if (P(e14.subarray(i2), bn) ? s2 = 4 : P(e14.subarray(i2), xn) && (s2 = 3), !s2) {
      i2++;
      continue;
    }
    if (o2++, a2) return Cn(e14.subarray(a2, i2));
    var c2 = void 0;
    t2 === `h264` ? c2 = e14[i2 + s2] & 31 : t2 === `h265` && (c2 = e14[i2 + s2] >> 1 & 63), n2.indexOf(c2) !== -1 && (a2 = i2 + s2), i2 += s2 + (t2 === `h264` ? 1 : 2);
  }
  return e14.subarray(0, 0);
}, Tn = function(e14, t2, n2) {
  return wn(e14, `h264`, t2, n2);
}, En = function(e14, t2, n2) {
  return wn(e14, `h265`, t2, n2);
}, Dn = { webm: M([119, 101, 98, 109]), matroska: M([109, 97, 116, 114, 111, 115, 107, 97]), flac: M([102, 76, 97, 67]), ogg: M([79, 103, 103, 83]), ac3: M([11, 119]), riff: M([82, 73, 70, 70]), avi: M([65, 86, 73]), wav: M([87, 65, 86, 69]), "3gp": M([102, 116, 121, 112, 51, 103]), mp4: M([102, 116, 121, 112]), fmp4: M([115, 116, 121, 112]), mov: M([102, 116, 121, 112, 113, 116]), moov: M([109, 111, 111, 118]), moof: M([109, 111, 111, 102]), vtt: M([87, 69, 66, 86, 84, 84]) }, On = { aac: function(e14) {
  return P(e14, [255, 16], { offset: on(e14), mask: [255, 22] });
}, mp3: function(e14) {
  return P(e14, [255, 2], { offset: on(e14), mask: [255, 6] });
}, webm: function(e14) {
  var t2 = yn(e14, [fn.EBML, fn.DocType])[0];
  return P(t2, Dn.webm);
}, mkv: function(e14) {
  var t2 = yn(e14, [fn.EBML, fn.DocType])[0];
  return P(t2, Dn.matroska);
}, mp4: function(e14) {
  if (On[`3gp`](e14) || On.mov(e14)) return false;
  if (P(e14, Dn.mp4, { offset: 4 }) || P(e14, Dn.fmp4, { offset: 4 }) || P(e14, Dn.moof, { offset: 4 }) || P(e14, Dn.moov, { offset: 4 })) return true;
}, mov: function(e14) {
  return P(e14, Dn.mov, { offset: 4 });
}, "3gp": function(e14) {
  return P(e14, Dn[`3gp`], { offset: 4 });
}, ac3: function(e14) {
  var t2 = on(e14);
  return P(e14, Dn.ac3, { offset: t2 });
}, vtt: function(e14) {
  return P(e14, Dn.vtt);
}, ts: function(e14) {
  if (e14.length < 189 && e14.length >= 1) return e14[0] === 71;
  for (var t2 = 0; t2 + 188 < e14.length && t2 < 188; ) {
    if (e14[t2] === 71 && e14[t2 + 188] === 71) return true;
    t2 += 1;
  }
  return false;
}, flac: function(e14) {
  var t2 = on(e14);
  return P(e14, Dn.flac, { offset: t2 });
}, ogg: function(e14) {
  return P(e14, Dn.ogg);
}, avi: function(e14) {
  return P(e14, Dn.riff) && P(e14, Dn.avi, { offset: 8 });
}, wav: function(e14) {
  return P(e14, Dn.riff) && P(e14, Dn.wav, { offset: 8 });
}, h264: function(e14) {
  return Tn(e14, 7, 3).length;
}, h265: function(e14) {
  return En(e14, [32, 33], 3).length;
} }, kn = Object.keys(On).filter(function(e14) {
  return e14 !== `ts` && e14 !== `h264` && e14 !== `h265`;
}).concat([`ts`, `h264`, `h265`]);
kn.forEach(function(e14) {
  var t2 = On[e14];
  On[e14] = function(e15) {
    return t2(M(e15));
  };
});
var An = On, jn = function(e14) {
  e14 = M(e14);
  for (var t2 = 0; t2 < kn.length; t2++) {
    var n2 = kn[t2];
    if (An[n2](e14)) return n2;
  }
  return ``;
}, Mn = function(e14) {
  return dn(e14, [`moof`]).length > 0;
}, Nn = t(((e14, t2) => {
  var n2 = 9e4, r2 = function(e15) {
    return e15 * n2;
  }, i2 = function(e15, t3) {
    return e15 * t3;
  }, a2 = function(e15) {
    return e15 / n2;
  }, o2 = function(e15, t3) {
    return e15 / t3;
  };
  t2.exports = { ONE_SECOND_IN_TS: n2, secondsToVideoTs: r2, secondsToAudioTs: i2, videoTsToSeconds: a2, audioTsToSeconds: o2, audioTsToVideoTs: function(e15, t3) {
    return r2(o2(e15, t3));
  }, videoTsToAudioTs: function(e15, t3) {
    return i2(a2(e15), t3);
  }, metadataTsToSeconds: function(e15, t3, n3) {
    return a2(n3 ? e15 : e15 - t3);
  } };
}))(), Pn = `8.14.0`, Fn = {}, In = function(e14, t2) {
  return Fn[e14] = Fn[e14] || [], t2 && (Fn[e14] = Fn[e14].concat(t2)), Fn[e14];
}, Ln = function(e14, t2) {
  In(e14, t2);
}, Rn = function(e14, t2) {
  let n2 = In(e14).indexOf(t2);
  return n2 <= -1 ? false : (Fn[e14] = Fn[e14].slice(), Fn[e14].splice(n2, 1), true);
}, zn = function(e14, t2) {
  In(e14, [].concat(t2).map((t3) => {
    let n2 = (...r2) => (Rn(e14, n2), t3(...r2));
    return n2;
  }));
}, Bn = { prefixed: true }, Vn = [[`requestFullscreen`, `exitFullscreen`, `fullscreenElement`, `fullscreenEnabled`, `fullscreenchange`, `fullscreenerror`, `fullscreen`], [`webkitRequestFullscreen`, `webkitExitFullscreen`, `webkitFullscreenElement`, `webkitFullscreenEnabled`, `webkitfullscreenchange`, `webkitfullscreenerror`, `-webkit-full-screen`]], Hn = Vn[0], Un;
for (let e14 = 0; e14 < Vn.length; e14++) if (Vn[e14][1] in g.default) {
  Un = Vn[e14];
  break;
}
if (Un) {
  for (let e14 = 0; e14 < Un.length; e14++) Bn[Hn[e14]] = Un[e14];
  Bn.prefixed = Un[0] !== Hn[0];
}
var Wn = [], Gn = (e14, t2, n2) => (r2, i2, a2) => {
  let o2 = t2.levels[i2], s2 = RegExp(`^(${o2})$`), c2 = e14;
  if (r2 !== `log` && a2.unshift(r2.toUpperCase() + `:`), n2 && (c2 = `%c${e14}`, a2.unshift(n2)), a2.unshift(c2 + `:`), Wn) {
    Wn.push([].concat(a2));
    let e15 = Wn.length - 1e3;
    Wn.splice(0, e15 > 0 ? e15 : 0);
  }
  if (!h.default.console) return;
  let l2 = h.default.console[r2];
  !l2 && r2 === `debug` && (l2 = h.default.console.info || h.default.console.log), !(!l2 || !o2 || !s2.test(r2)) && l2[Array.isArray(a2) ? `apply` : `call`](h.default.console, a2);
};
function Kn(e14, t2 = `:`, n2 = ``) {
  let r2 = `info`, i2, a2 = function(...e15) {
    i2(`log`, r2, e15);
  };
  return i2 = Gn(e14, a2, n2), a2.createLogger = (r3, i3, a3) => {
    let o2 = i3 === void 0 ? t2 : i3, s2 = a3 === void 0 ? n2 : a3;
    return Kn(`${e14} ${o2} ${r3}`, o2, s2);
  }, a2.createNewLogger = (e15, t3, n3) => Kn(e15, t3, n3), a2.levels = { all: `debug|log|warn|error`, off: ``, debug: `debug|log|warn|error`, info: `log|warn|error`, warn: `warn|error`, error: `error`, DEFAULT: r2 }, a2.level = (e15) => {
    if (typeof e15 == `string`) {
      if (!a2.levels.hasOwnProperty(e15)) throw Error(`"${e15}" in not a valid log level`);
      r2 = e15;
    }
    return r2;
  }, a2.history = () => Wn ? [].concat(Wn) : [], a2.history.filter = (e15) => (Wn || []).filter((t3) => RegExp(`.*${e15}.*`).test(t3[0])), a2.history.clear = () => {
    Wn && (Wn.length = 0);
  }, a2.history.disable = () => {
    Wn !== null && (Wn.length = 0, Wn = null);
  }, a2.history.enable = () => {
    Wn === null && (Wn = []);
  }, a2.error = (...e15) => i2(`error`, r2, e15), a2.warn = (...e15) => i2(`warn`, r2, e15), a2.debug = (...e15) => i2(`debug`, r2, e15), a2;
}
var z = Kn(`VIDEOJS`), qn = z.createLogger, Jn = Object.prototype.toString, Yn = function(e14) {
  return Qn(e14) ? Object.keys(e14) : [];
};
function Xn(e14, t2) {
  Yn(e14).forEach((n2) => t2(e14[n2], n2));
}
function Zn(e14, t2, n2 = 0) {
  return Yn(e14).reduce((n3, r2) => t2(n3, e14[r2], r2), n2);
}
function Qn(e14) {
  return !!e14 && typeof e14 == `object`;
}
function $n(e14) {
  return Qn(e14) && Jn.call(e14) === `[object Object]` && e14.constructor === Object;
}
function B(...e14) {
  let t2 = {};
  return e14.forEach((e15) => {
    e15 && Xn(e15, (e16, n2) => {
      if (!$n(e16)) {
        t2[n2] = e16;
        return;
      }
      $n(t2[n2]) || (t2[n2] = {}), t2[n2] = B(t2[n2], e16);
    });
  }), t2;
}
function er(e14 = {}) {
  let t2 = [];
  for (let n2 in e14) if (e14.hasOwnProperty(n2)) {
    let r2 = e14[n2];
    t2.push(r2);
  }
  return t2;
}
function V(e14, t2, n2, r2 = true) {
  let i2 = (n3) => Object.defineProperty(e14, t2, { value: n3, enumerable: true, writable: true }), a2 = { configurable: true, enumerable: true, get() {
    let e15 = n2();
    return i2(e15), e15;
  } };
  return r2 && (a2.set = i2), Object.defineProperty(e14, t2, a2);
}
var tr = Object.freeze({ __proto__: null, each: Xn, reduce: Zn, isObject: Qn, isPlain: $n, merge: B, values: er, defineLazyProperty: V }), nr = false, rr = null, ir = false, ar, or = false, sr = false, cr = false, lr = false, ur = null, dr = null, fr = null, pr = false, mr = false, hr = false, gr = false, _r = false, vr = false, yr = false, br = !!(Dr() && (`ontouchstart` in h.default || h.default.navigator.maxTouchPoints || h.default.DocumentTouch && h.default.document instanceof h.default.DocumentTouch)), xr = h.default.navigator && h.default.navigator.userAgentData;
if (xr && xr.platform && xr.brands && (ir = xr.platform === `Android`, sr = !!xr.brands.find((e14) => e14.brand === `Microsoft Edge`), cr = !!xr.brands.find((e14) => e14.brand === `Chromium`), lr = !sr && cr, ur = dr = (xr.brands.find((e14) => e14.brand === `Chromium`) || {}).version || null, mr = xr.platform === `Windows`), !cr) {
  let e14 = h.default.navigator && h.default.navigator.userAgent || ``;
  nr = /iPod/i.test(e14), rr = (function() {
    let t2 = e14.match(/OS (\d+)_/i);
    return t2 && t2[1] ? t2[1] : null;
  })(), ir = /Android/i.test(e14), ar = (function() {
    let t2 = e14.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
    if (!t2) return null;
    let n2 = t2[1] && parseFloat(t2[1]), r2 = t2[2] && parseFloat(t2[2]);
    return n2 && r2 ? parseFloat(t2[1] + `.` + t2[2]) : n2 || null;
  })(), or = /Firefox/i.test(e14), sr = /Edg/i.test(e14), cr = /Chrome/i.test(e14) || /CriOS/i.test(e14), lr = !sr && cr, ur = dr = (function() {
    let t2 = e14.match(/(Chrome|CriOS)\/(\d+)/);
    return t2 && t2[2] ? parseFloat(t2[2]) : null;
  })(), fr = (function() {
    let t2 = /MSIE\s(\d+)\.\d/.exec(e14), n2 = t2 && parseFloat(t2[1]);
    return !n2 && /Trident\/7.0/i.test(e14) && /rv:11.0/.test(e14) && (n2 = 11), n2;
  })(), _r = /Tizen/i.test(e14), vr = /Web0S/i.test(e14), yr = _r || vr, pr = /Safari/i.test(e14) && !lr && !ir && !sr && !yr, mr = /Windows/i.test(e14), hr = /iPad/i.test(e14) || pr && br && !/iPhone/i.test(e14), gr = /iPhone/i.test(e14) && !hr;
}
var Sr = gr || hr || nr, Cr = (pr || Sr) && !lr, wr = Object.freeze({ __proto__: null, get IS_IPOD() {
  return nr;
}, get IOS_VERSION() {
  return rr;
}, get IS_ANDROID() {
  return ir;
}, get ANDROID_VERSION() {
  return ar;
}, get IS_FIREFOX() {
  return or;
}, get IS_EDGE() {
  return sr;
}, get IS_CHROMIUM() {
  return cr;
}, get IS_CHROME() {
  return lr;
}, get CHROMIUM_VERSION() {
  return ur;
}, get CHROME_VERSION() {
  return dr;
}, get IE_VERSION() {
  return fr;
}, get IS_SAFARI() {
  return pr;
}, get IS_WINDOWS() {
  return mr;
}, get IS_IPAD() {
  return hr;
}, get IS_IPHONE() {
  return gr;
}, get IS_TIZEN() {
  return _r;
}, get IS_WEBOS() {
  return vr;
}, get IS_SMART_TV() {
  return yr;
}, TOUCH_ENABLED: br, IS_IOS: Sr, IS_ANY_SAFARI: Cr });
function Tr(e14) {
  return typeof e14 == `string` && !!e14.trim();
}
function Er(e14) {
  if (e14.indexOf(` `) >= 0) throw Error(`class has illegal whitespace characters`);
}
function Dr() {
  return g.default === h.default.document;
}
function Or(e14) {
  return Qn(e14) && e14.nodeType === 1;
}
function kr() {
  try {
    return h.default.parent !== h.default.self;
  } catch {
    return true;
  }
}
function H(e14) {
  return function(t2, n2) {
    if (!Tr(t2)) return g.default[e14](null);
    Tr(n2) && (n2 = g.default.querySelector(n2));
    let r2 = Or(n2) ? n2 : g.default;
    return r2[e14] && r2[e14](t2);
  };
}
function U(e14 = `div`, t2 = {}, n2 = {}, r2) {
  let i2 = g.default.createElement(e14);
  return Object.getOwnPropertyNames(t2).forEach(function(e15) {
    let n3 = t2[e15];
    e15 === `textContent` ? W(i2, n3) : (i2[e15] !== n3 || e15 === `tabIndex`) && (i2[e15] = n3);
  }), Object.getOwnPropertyNames(n2).forEach(function(e15) {
    i2.setAttribute(e15, n2[e15]);
  }), r2 && Jr(i2, r2), i2;
}
function W(e14, t2) {
  return e14.textContent === void 0 ? e14.innerText = t2 : e14.textContent = t2, e14;
}
function Ar(e14, t2) {
  t2.firstChild ? t2.insertBefore(e14, t2.firstChild) : t2.appendChild(e14);
}
function jr(e14, t2) {
  return Er(t2), e14.classList.contains(t2);
}
function Mr(e14, ...t2) {
  return e14.classList.add(...t2.reduce((e15, t3) => e15.concat(t3.split(/\s+/)), [])), e14;
}
function Nr(e14, ...t2) {
  return e14 ? (e14.classList.remove(...t2.reduce((e15, t3) => e15.concat(t3.split(/\s+/)), [])), e14) : (z.warn(`removeClass was called with an element that doesn't exist`), null);
}
function Pr(e14, t2, n2) {
  return typeof n2 == `function` && (n2 = n2(e14, t2)), typeof n2 != `boolean` && (n2 = void 0), t2.split(/\s+/).forEach((t3) => e14.classList.toggle(t3, n2)), e14;
}
function Fr(e14, t2) {
  Object.getOwnPropertyNames(t2).forEach(function(n2) {
    let r2 = t2[n2];
    r2 == null || r2 === false ? e14.removeAttribute(n2) : e14.setAttribute(n2, r2 === true ? `` : r2);
  });
}
function Ir(e14) {
  let t2 = {}, n2 = [`autoplay`, `controls`, `playsinline`, `loop`, `muted`, `default`, `defaultMuted`];
  if (e14 && e14.attributes && e14.attributes.length > 0) {
    let r2 = e14.attributes;
    for (let e15 = r2.length - 1; e15 >= 0; e15--) {
      let i2 = r2[e15].name, a2 = r2[e15].value;
      n2.includes(i2) && (a2 = a2 !== null), t2[i2] = a2;
    }
  }
  return t2;
}
function Lr(e14, t2) {
  return e14.getAttribute(t2);
}
function Rr(e14, t2, n2) {
  e14.setAttribute(t2, n2);
}
function zr(e14, t2) {
  e14.removeAttribute(t2);
}
function Br() {
  g.default.body.focus(), g.default.onselectstart = function() {
    return false;
  };
}
function Vr() {
  g.default.onselectstart = function() {
    return true;
  };
}
function Hr(e14) {
  if (e14 && e14.getBoundingClientRect && e14.parentNode) {
    let t2 = e14.getBoundingClientRect(), n2 = {};
    return [`bottom`, `height`, `left`, `right`, `top`, `width`].forEach((e15) => {
      t2[e15] !== void 0 && (n2[e15] = t2[e15]);
    }), n2.height ||= parseFloat($r(e14, `height`)), n2.width ||= parseFloat($r(e14, `width`)), n2;
  }
}
function Ur(e14) {
  if (!e14 || e14 && !e14.offsetParent) return { left: 0, top: 0, width: 0, height: 0 };
  let t2 = e14.offsetWidth, n2 = e14.offsetHeight, r2 = 0, i2 = 0;
  for (; e14.offsetParent && e14 !== g.default[Bn.fullscreenElement]; ) r2 += e14.offsetLeft, i2 += e14.offsetTop, e14 = e14.offsetParent;
  return { left: r2, top: i2, width: t2, height: n2 };
}
function Wr(e14, t2) {
  let n2 = { x: 0, y: 0 };
  if (Sr) {
    let t3 = e14;
    for (; t3 && t3.nodeName.toLowerCase() !== `html`; ) {
      let e15 = $r(t3, `transform`);
      if (/^matrix/.test(e15)) {
        let t4 = e15.slice(7, -1).split(/,\s/).map(Number);
        n2.x += t4[4], n2.y += t4[5];
      } else if (/^matrix3d/.test(e15)) {
        let t4 = e15.slice(9, -1).split(/,\s/).map(Number);
        n2.x += t4[12], n2.y += t4[13];
      }
      if (t3.assignedSlot && t3.assignedSlot.parentElement && h.default.WebKitCSSMatrix) {
        let e16 = h.default.getComputedStyle(t3.assignedSlot.parentElement).transform, r3 = new h.default.WebKitCSSMatrix(e16);
        n2.x += r3.m41, n2.y += r3.m42;
      }
      t3 = t3.parentNode || t3.host;
    }
  }
  let r2 = {}, i2 = Ur(t2.target), a2 = Ur(e14), o2 = a2.width, s2 = a2.height, c2 = t2.offsetY - (a2.top - i2.top), l2 = t2.offsetX - (a2.left - i2.left);
  return t2.changedTouches && (l2 = t2.changedTouches[0].pageX - a2.left, c2 = t2.changedTouches[0].pageY + a2.top, Sr && (l2 -= n2.x, c2 -= n2.y)), r2.y = 1 - Math.max(0, Math.min(1, c2 / s2)), r2.x = Math.max(0, Math.min(1, l2 / o2)), r2;
}
function Gr(e14) {
  return Qn(e14) && e14.nodeType === 3;
}
function Kr(e14) {
  for (; e14.firstChild; ) e14.removeChild(e14.firstChild);
  return e14;
}
function qr(e14) {
  return typeof e14 == `function` && (e14 = e14()), (Array.isArray(e14) ? e14 : [e14]).map((e15) => {
    if (typeof e15 == `function` && (e15 = e15()), Or(e15) || Gr(e15)) return e15;
    if (typeof e15 == `string` && /\S/.test(e15)) return g.default.createTextNode(e15);
  }).filter((e15) => e15);
}
function Jr(e14, t2) {
  return qr(t2).forEach((t3) => e14.appendChild(t3)), e14;
}
function Yr(e14, t2) {
  return Jr(Kr(e14), t2);
}
function Xr(e14) {
  return e14.button === void 0 && e14.buttons === void 0 || e14.button === 0 && e14.buttons === void 0 || e14.type === `mouseup` && e14.button === 0 && e14.buttons === 0 || e14.type === `mousedown` && e14.button === 0 && e14.buttons === 0 ? true : !(e14.button !== 0 || e14.buttons !== 1);
}
var Zr = H(`querySelector`), Qr = H(`querySelectorAll`);
function $r(e14, t2) {
  if (!e14 || !t2) return ``;
  if (typeof h.default.getComputedStyle == `function`) {
    let n2;
    try {
      n2 = h.default.getComputedStyle(e14);
    } catch {
      return ``;
    }
    return n2 ? n2.getPropertyValue(t2) || n2[t2] : ``;
  }
  return ``;
}
function ei(e14) {
  [...g.default.styleSheets].forEach((t2) => {
    try {
      let n2 = [...t2.cssRules].map((e15) => e15.cssText).join(``), r2 = g.default.createElement(`style`);
      r2.textContent = n2, e14.document.head.appendChild(r2);
    } catch {
      let n2 = g.default.createElement(`link`);
      n2.rel = `stylesheet`, n2.type = t2.type, n2.media = t2.media.mediaText, n2.href = t2.href, e14.document.head.appendChild(n2);
    }
  });
}
var ti = Object.freeze({ __proto__: null, isReal: Dr, isEl: Or, isInFrame: kr, createEl: U, textContent: W, prependTo: Ar, hasClass: jr, addClass: Mr, removeClass: Nr, toggleClass: Pr, setAttributes: Fr, getAttributes: Ir, getAttribute: Lr, setAttribute: Rr, removeAttribute: zr, blockTextSelection: Br, unblockTextSelection: Vr, getBoundingClientRect: Hr, findPosition: Ur, getPointerPosition: Wr, isTextNode: Gr, emptyEl: Kr, normalizeContent: qr, appendContent: Jr, insertContent: Yr, isSingleLeftClick: Xr, $: Zr, $$: Qr, computedStyle: $r, copyStyleSheetsToWindow: ei }), ni = false, ri, ii = function() {
  if (ri.options.autoSetup === false) return;
  let e14 = Array.prototype.slice.call(g.default.getElementsByTagName(`video`)), t2 = Array.prototype.slice.call(g.default.getElementsByTagName(`audio`)), n2 = Array.prototype.slice.call(g.default.getElementsByTagName(`video-js`)), r2 = e14.concat(t2, n2);
  if (r2 && r2.length > 0) for (let e15 = 0, t3 = r2.length; e15 < t3; e15++) {
    let t4 = r2[e15];
    if (t4 && t4.getAttribute) t4.player === void 0 && t4.getAttribute(`data-setup`) !== null && ri(t4);
    else {
      ai(1);
      break;
    }
  }
  else ni || ai(1);
};
function ai(e14, t2) {
  Dr() && (t2 && (ri = t2), h.default.setTimeout(ii, e14));
}
function oi() {
  ni = true, h.default.removeEventListener(`load`, oi);
}
Dr() && (g.default.readyState === `complete` ? oi() : h.default.addEventListener(`load`, oi));
var si = function(e14) {
  let t2 = g.default.createElement(`style`);
  return t2.className = e14, t2;
}, ci = function(e14, t2) {
  e14.styleSheet ? e14.styleSheet.cssText = t2 : e14.textContent = t2;
}, li = /* @__PURE__ */ new WeakMap(), ui = 3;
function di() {
  return ui++;
}
function fi(e14, t2) {
  if (!li.has(e14)) return;
  let n2 = li.get(e14);
  n2.handlers[t2].length === 0 && (delete n2.handlers[t2], e14.removeEventListener ? e14.removeEventListener(t2, n2.dispatcher, false) : e14.detachEvent && e14.detachEvent(`on` + t2, n2.dispatcher)), Object.getOwnPropertyNames(n2.handlers).length <= 0 && (delete n2.handlers, delete n2.dispatcher, delete n2.disabled), Object.getOwnPropertyNames(n2).length === 0 && li.delete(e14);
}
function pi(e14, t2, n2, r2) {
  n2.forEach(function(n3) {
    e14(t2, n3, r2);
  });
}
function mi(e14) {
  if (e14.fixed_) return e14;
  function t2() {
    return true;
  }
  function n2() {
    return false;
  }
  if (!e14 || !e14.isPropagationStopped || !e14.isImmediatePropagationStopped) {
    let r2 = e14 || h.default.event;
    e14 = {};
    for (let t3 in r2) t3 !== `layerX` && t3 !== `layerY` && t3 !== `keyLocation` && t3 !== `webkitMovementX` && t3 !== `webkitMovementY` && t3 !== `path` && (t3 === `returnValue` && r2.preventDefault || (e14[t3] = r2[t3]));
    if (e14.target ||= e14.srcElement || g.default, e14.relatedTarget ||= e14.fromElement === e14.target ? e14.toElement : e14.fromElement, e14.preventDefault = function() {
      r2.preventDefault && r2.preventDefault(), e14.returnValue = false, r2.returnValue = false, e14.defaultPrevented = true;
    }, e14.defaultPrevented = false, e14.stopPropagation = function() {
      r2.stopPropagation && r2.stopPropagation(), e14.cancelBubble = true, r2.cancelBubble = true, e14.isPropagationStopped = t2;
    }, e14.isPropagationStopped = n2, e14.stopImmediatePropagation = function() {
      r2.stopImmediatePropagation && r2.stopImmediatePropagation(), e14.isImmediatePropagationStopped = t2, e14.stopPropagation();
    }, e14.isImmediatePropagationStopped = n2, e14.clientX !== null && e14.clientX !== void 0) {
      let t3 = g.default.documentElement, n3 = g.default.body;
      e14.pageX = e14.clientX + (t3 && t3.scrollLeft || n3 && n3.scrollLeft || 0) - (t3 && t3.clientLeft || n3 && n3.clientLeft || 0), e14.pageY = e14.clientY + (t3 && t3.scrollTop || n3 && n3.scrollTop || 0) - (t3 && t3.clientTop || n3 && n3.clientTop || 0);
    }
    e14.which = e14.charCode || e14.keyCode, e14.button !== null && e14.button !== void 0 && (e14.button = e14.button & 1 ? 0 : e14.button & 4 ? 1 : e14.button & 2 ? 2 : 0);
  }
  return e14.fixed_ = true, e14;
}
var hi, gi = function() {
  if (typeof hi != `boolean`) {
    hi = false;
    try {
      let e14 = Object.defineProperty({}, "passive", { get() {
        hi = true;
      } });
      h.default.addEventListener(`test`, null, e14), h.default.removeEventListener(`test`, null, e14);
    } catch {
    }
  }
  return hi;
}, _i = [`touchstart`, `touchmove`];
function vi(e14, t2, n2) {
  if (Array.isArray(t2)) return pi(vi, e14, t2, n2);
  li.has(e14) || li.set(e14, {});
  let r2 = li.get(e14);
  if (r2.handlers ||= {}, r2.handlers[t2] || (r2.handlers[t2] = []), n2.guid ||= di(), r2.handlers[t2].push(n2), r2.dispatcher ||= (r2.disabled = false, function(t3, n3) {
    if (r2.disabled) return;
    t3 = mi(t3);
    let i2 = r2.handlers[t3.type];
    if (i2) {
      let r3 = i2.slice(0);
      for (let i3 = 0, a2 = r3.length; i3 < a2 && !t3.isImmediatePropagationStopped(); i3++) try {
        r3[i3].call(e14, t3, n3);
      } catch (e15) {
        z.error(e15);
      }
    }
  }), r2.handlers[t2].length === 1) if (e14.addEventListener) {
    let n3 = false;
    gi() && _i.indexOf(t2) > -1 && (n3 = { passive: true }), e14.addEventListener(t2, r2.dispatcher, n3);
  } else e14.attachEvent && e14.attachEvent(`on` + t2, r2.dispatcher);
}
function yi(e14, t2, n2) {
  if (!li.has(e14)) return;
  let r2 = li.get(e14);
  if (!r2.handlers) return;
  if (Array.isArray(t2)) return pi(yi, e14, t2, n2);
  let i2 = function(e15, t3) {
    r2.handlers[t3] = [], fi(e15, t3);
  };
  if (t2 === void 0) {
    for (let t3 in r2.handlers) Object.prototype.hasOwnProperty.call(r2.handlers || {}, t3) && i2(e14, t3);
    return;
  }
  let a2 = r2.handlers[t2];
  if (a2) {
    if (!n2) {
      i2(e14, t2);
      return;
    }
    if (n2.guid) for (let e15 = 0; e15 < a2.length; e15++) a2[e15].guid === n2.guid && a2.splice(e15--, 1);
    fi(e14, t2);
  }
}
function bi(e14, t2, n2) {
  let r2 = li.has(e14) ? li.get(e14) : {}, i2 = e14.parentNode || e14.ownerDocument;
  if (typeof t2 == `string` ? t2 = { type: t2, target: e14 } : t2.target ||= e14, t2 = mi(t2), r2.dispatcher && r2.dispatcher.call(e14, t2, n2), i2 && !t2.isPropagationStopped() && t2.bubbles === true) bi.call(null, i2, t2, n2);
  else if (!i2 && !t2.defaultPrevented && t2.target && t2.target[t2.type]) {
    li.has(t2.target) || li.set(t2.target, {});
    let e15 = li.get(t2.target);
    t2.target[t2.type] && (e15.disabled = true, typeof t2.target[t2.type] == `function` && t2.target[t2.type](), e15.disabled = false);
  }
  return !t2.defaultPrevented;
}
function xi(e14, t2, n2) {
  if (Array.isArray(t2)) return pi(xi, e14, t2, n2);
  let r2 = function() {
    yi(e14, t2, r2), n2.apply(this, arguments);
  };
  r2.guid = n2.guid = n2.guid || di(), vi(e14, t2, r2);
}
function Si(e14, t2, n2) {
  let r2 = function() {
    yi(e14, t2, r2), n2.apply(this, arguments);
  };
  r2.guid = n2.guid = n2.guid || di(), vi(e14, t2, r2);
}
var Ci = Object.freeze({ __proto__: null, fixEvent: mi, on: vi, off: yi, trigger: bi, one: xi, any: Si }), wi = 30, G = function(e14, t2, n2) {
  t2.guid ||= di();
  let r2 = t2.bind(e14);
  return r2.guid = n2 ? n2 + `_` + t2.guid : t2.guid, r2;
}, Ti = function(e14, t2) {
  let n2 = h.default.performance.now();
  return function(...r2) {
    let i2 = h.default.performance.now();
    i2 - n2 >= t2 && (e14(...r2), n2 = i2);
  };
}, Ei = function(e14, t2, n2, r2 = h.default) {
  let i2, a2 = () => {
    r2.clearTimeout(i2), i2 = null;
  }, o2 = function() {
    let a3 = this, o3 = arguments, s2 = function() {
      i2 = null, s2 = null, n2 || e14.apply(a3, o3);
    };
    !i2 && n2 && e14.apply(a3, o3), r2.clearTimeout(i2), i2 = r2.setTimeout(s2, t2);
  };
  return o2.cancel = a2, o2;
}, Di = Object.freeze({ __proto__: null, UPDATE_REFRESH_INTERVAL: wi, bind_: G, throttle: Ti, debounce: Ei }), Oi, ki = class {
  on(e14, t2) {
    let n2 = this.addEventListener;
    this.addEventListener = () => {
    }, vi(this, e14, t2), this.addEventListener = n2;
  }
  off(e14, t2) {
    yi(this, e14, t2);
  }
  one(e14, t2) {
    let n2 = this.addEventListener;
    this.addEventListener = () => {
    }, xi(this, e14, t2), this.addEventListener = n2;
  }
  any(e14, t2) {
    let n2 = this.addEventListener;
    this.addEventListener = () => {
    }, Si(this, e14, t2), this.addEventListener = n2;
  }
  trigger(e14) {
    let t2 = e14.type || e14;
    typeof e14 == `string` && (e14 = { type: t2 }), e14 = mi(e14), this.allowedEvents_[t2] && this[`on` + t2] && this[`on` + t2](e14), bi(this, e14);
  }
  queueTrigger(e14) {
    Oi ||= /* @__PURE__ */ new Map();
    let t2 = e14.type || e14, n2 = Oi.get(this);
    n2 || (n2 = /* @__PURE__ */ new Map(), Oi.set(this, n2));
    let r2 = n2.get(t2);
    n2.delete(t2), h.default.clearTimeout(r2);
    let i2 = h.default.setTimeout(() => {
      n2.delete(t2), n2.size === 0 && (n2 = null, Oi.delete(this)), this.trigger(e14);
    }, 0);
    n2.set(t2, i2);
  }
};
ki.prototype.allowedEvents_ = {}, ki.prototype.addEventListener = ki.prototype.on, ki.prototype.removeEventListener = ki.prototype.off, ki.prototype.dispatchEvent = ki.prototype.trigger;
var Ai = (e14) => typeof e14.name == `function` ? e14.name() : typeof e14.name == `string` ? e14.name : e14.name_ ? e14.name_ : e14.constructor && e14.constructor.name ? e14.constructor.name : typeof e14, ji = (e14) => e14 instanceof ki || !!e14.eventBusEl_ && [`on`, `one`, `off`, `trigger`].every((t2) => typeof e14[t2] == `function`), Mi = (e14, t2) => {
  ji(e14) ? t2() : (e14.eventedCallbacks ||= [], e14.eventedCallbacks.push(t2));
}, Ni = (e14) => typeof e14 == `string` && /\S/.test(e14) || Array.isArray(e14) && !!e14.length, Pi = (e14, t2, n2) => {
  if (!e14 || !e14.nodeName && !ji(e14)) throw Error(`Invalid target for ${Ai(t2)}#${n2}; must be a DOM node or evented object.`);
}, Fi = (e14, t2, n2) => {
  if (!Ni(e14)) throw Error(`Invalid event type for ${Ai(t2)}#${n2}; must be a non-empty string or array.`);
}, Ii = (e14, t2, n2) => {
  if (typeof e14 != `function`) throw Error(`Invalid listener for ${Ai(t2)}#${n2}; must be a function.`);
}, Li = (e14, t2, n2) => {
  let r2 = t2.length < 3 || t2[0] === e14 || t2[0] === e14.eventBusEl_, i2, a2, o2;
  return r2 ? (i2 = e14.eventBusEl_, t2.length >= 3 && t2.shift(), [a2, o2] = t2) : [i2, a2, o2] = t2, Pi(i2, e14, n2), Fi(a2, e14, n2), Ii(o2, e14, n2), o2 = G(e14, o2), { isTargetingSelf: r2, target: i2, type: a2, listener: o2 };
}, Ri = (e14, t2, n2, r2) => {
  Pi(e14, e14, t2), e14.nodeName ? Ci[t2](e14, n2, r2) : e14[t2](n2, r2);
}, zi = { on(...e14) {
  let { isTargetingSelf: t2, target: n2, type: r2, listener: i2 } = Li(this, e14, `on`);
  if (Ri(n2, `on`, r2, i2), !t2) {
    let e15 = () => this.off(n2, r2, i2);
    e15.guid = i2.guid;
    let t3 = () => this.off(`dispose`, e15);
    t3.guid = i2.guid, Ri(this, `on`, `dispose`, e15), Ri(n2, `on`, `dispose`, t3);
  }
}, one(...e14) {
  let { isTargetingSelf: t2, target: n2, type: r2, listener: i2 } = Li(this, e14, `one`);
  if (t2) Ri(n2, `one`, r2, i2);
  else {
    let e15 = (...t3) => {
      this.off(n2, r2, e15), i2.apply(null, t3);
    };
    e15.guid = i2.guid, Ri(n2, `one`, r2, e15);
  }
}, any(...e14) {
  let { isTargetingSelf: t2, target: n2, type: r2, listener: i2 } = Li(this, e14, `any`);
  if (t2) Ri(n2, `any`, r2, i2);
  else {
    let e15 = (...t3) => {
      this.off(n2, r2, e15), i2.apply(null, t3);
    };
    e15.guid = i2.guid, Ri(n2, `any`, r2, e15);
  }
}, off(e14, t2, n2) {
  if (!e14 || Ni(e14)) yi(this.eventBusEl_, e14, t2);
  else {
    let r2 = e14, i2 = t2;
    Pi(r2, this, `off`), Fi(i2, this, `off`), Ii(n2, this, `off`), n2 = G(this, n2), this.off(`dispose`, n2), r2.nodeName ? (yi(r2, i2, n2), yi(r2, `dispose`, n2)) : ji(r2) && (r2.off(i2, n2), r2.off(`dispose`, n2));
  }
}, trigger(e14, t2) {
  if (Pi(this.eventBusEl_, this, `trigger`), !Ni(e14 && typeof e14 != `string` ? e14.type : e14)) throw Error(`Invalid event type for ${Ai(this)}#trigger; must be a non-empty string or object with a type key that has a non-empty value.`);
  return bi(this.eventBusEl_, e14, t2);
} };
function Bi(e14, t2 = {}) {
  let { eventBusKey: n2 } = t2;
  if (n2) {
    if (!e14[n2].nodeName) throw Error(`The eventBusKey "${n2}" does not refer to an element.`);
    e14.eventBusEl_ = e14[n2];
  } else e14.eventBusEl_ = U(`span`, { className: `vjs-event-bus` });
  return Object.assign(e14, zi), e14.eventedCallbacks && e14.eventedCallbacks.forEach((e15) => {
    e15();
  }), e14.on(`dispose`, () => {
    e14.off(), [e14, e14.el_, e14.eventBusEl_].forEach(function(e15) {
      e15 && li.has(e15) && li.delete(e15);
    }), h.default.setTimeout(() => {
      e14.eventBusEl_ = null;
    }, 0);
  }), e14;
}
var Vi = { state: {}, setState(e14) {
  typeof e14 == `function` && (e14 = e14());
  let t2;
  return Xn(e14, (e15, n2) => {
    this.state[n2] !== e15 && (t2 ||= {}, t2[n2] = { from: this.state[n2], to: e15 }), this.state[n2] = e15;
  }), t2 && ji(this) && this.trigger({ changes: t2, type: `statechanged` }), t2;
} };
function Hi(e14, t2) {
  return Object.assign(e14, Vi), e14.state = Object.assign({}, e14.state, t2), typeof e14.handleStateChanged == `function` && ji(e14) && e14.on(`statechanged`, e14.handleStateChanged), e14;
}
var Ui = function(e14) {
  return typeof e14 == `string` ? e14.replace(/./, (e15) => e15.toLowerCase()) : e14;
}, K = function(e14) {
  return typeof e14 == `string` ? e14.replace(/./, (e15) => e15.toUpperCase()) : e14;
}, Wi = function(e14, t2) {
  return K(e14) === K(t2);
}, Gi = Object.freeze({ __proto__: null, toLowerCase: Ui, toTitleCase: K, titleCaseEquals: Wi }), q = class e7 {
  constructor(e14, t2, n2) {
    if (!e14 && this.play ? this.player_ = e14 = this : this.player_ = e14, this.isDisposed_ = false, this.parentComponent_ = null, this.options_ = B({}, this.options_), t2 = this.options_ = B(this.options_, t2), this.id_ = t2.id || t2.el && t2.el.id, !this.id_) {
      let t3 = e14 && e14.id && e14.id() || `no_player`;
      this.id_ = `${t3}_component_${di()}`;
    }
    this.name_ = t2.name || null, t2.el ? this.el_ = t2.el : t2.createEl !== false && (this.el_ = this.createEl()), t2.className && this.el_ && t2.className.split(` `).forEach((e15) => this.addClass(e15)), [`on`, `off`, `one`, `any`, `trigger`].forEach((e15) => {
      this[e15] = void 0;
    }), t2.evented !== false && (Bi(this, { eventBusKey: this.el_ ? `el_` : null }), this.handleLanguagechange = this.handleLanguagechange.bind(this), this.on(this.player_, `languagechange`, this.handleLanguagechange)), Hi(this, this.constructor.defaultState), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, this.setTimeoutIds_ = /* @__PURE__ */ new Set(), this.setIntervalIds_ = /* @__PURE__ */ new Set(), this.rafIds_ = /* @__PURE__ */ new Set(), this.namedRafs_ = /* @__PURE__ */ new Map(), this.clearingTimersOnDispose_ = false, t2.initChildren !== false && this.initChildren(), this.ready(n2), t2.reportTouchActivity !== false && this.enableTouchActivity();
  }
  on(e14, t2) {
  }
  off(e14, t2) {
  }
  one(e14, t2) {
  }
  any(e14, t2) {
  }
  trigger(e14, t2) {
  }
  dispose(e14 = {}) {
    if (!this.isDisposed_) {
      if (this.readyQueue_ && (this.readyQueue_.length = 0), this.trigger({ type: `dispose`, bubbles: false }), this.isDisposed_ = true, this.children_) for (let e15 = this.children_.length - 1; e15 >= 0; e15--) this.children_[e15].dispose && this.children_[e15].dispose();
      this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.parentComponent_ = null, this.el_ &&= (this.el_.parentNode && (e14.restoreEl ? this.el_.parentNode.replaceChild(e14.restoreEl, this.el_) : this.el_.parentNode.removeChild(this.el_)), null), this.player_ = null;
    }
  }
  isDisposed() {
    return !!this.isDisposed_;
  }
  player() {
    return this.player_;
  }
  options(e14) {
    return e14 && (this.options_ = B(this.options_, e14)), this.options_;
  }
  el() {
    return this.el_;
  }
  createEl(e14, t2, n2) {
    return U(e14, t2, n2);
  }
  localize(e14, t2, n2 = e14) {
    let r2 = this.player_.language && this.player_.language(), i2 = this.player_.languages && this.player_.languages(), a2 = i2 && i2[r2], o2 = r2 && r2.split(`-`)[0], s2 = i2 && i2[o2], c2 = n2;
    return a2 && a2[e14] ? c2 = a2[e14] : s2 && s2[e14] && (c2 = s2[e14]), t2 && (c2 = c2.replace(/\{(\d+)\}/g, function(e15, n3) {
      let r3 = t2[n3 - 1], i3 = r3;
      return r3 === void 0 && (i3 = e15), i3;
    })), c2;
  }
  handleLanguagechange() {
  }
  contentEl() {
    return this.contentEl_ || this.el_;
  }
  id() {
    return this.id_;
  }
  name() {
    return this.name_;
  }
  children() {
    return this.children_;
  }
  getChildById(e14) {
    return this.childIndex_[e14];
  }
  getChild(e14) {
    if (e14) return this.childNameIndex_[e14];
  }
  getDescendant(...e14) {
    e14 = e14.reduce((e15, t3) => e15.concat(t3), []);
    let t2 = this;
    for (let n2 = 0; n2 < e14.length; n2++) if (t2 = t2.getChild(e14[n2]), !t2 || !t2.getChild) return;
    return t2;
  }
  setIcon(e14, t2 = this.el()) {
    if (!this.player_.options_.experimentalSvgIcons) return;
    let n2 = `http://www.w3.org/2000/svg`, r2 = U(`span`, { className: `vjs-icon-placeholder vjs-svg-icon` }, { "aria-hidden": `true` }), i2 = g.default.createElementNS(n2, `svg`);
    i2.setAttributeNS(null, `viewBox`, `0 0 512 512`);
    let a2 = g.default.createElementNS(n2, `use`);
    return i2.appendChild(a2), a2.setAttributeNS(null, `href`, `#vjs-icon-${e14}`), r2.appendChild(i2), this.iconIsSet_ ? t2.replaceChild(r2, t2.querySelector(`.vjs-icon-placeholder`)) : t2.appendChild(r2), this.iconIsSet_ = true, r2;
  }
  addChild(t2, n2 = {}, r2 = this.children_.length) {
    let i2, a2;
    if (typeof t2 == `string`) {
      a2 = K(t2);
      let r3 = n2.componentClass || a2;
      n2.name = a2;
      let o2 = e7.getComponent(r3);
      if (!o2) throw Error(`Component ${r3} does not exist`);
      if (typeof o2 != `function`) return null;
      i2 = new o2(this.player_ || this, n2);
    } else i2 = t2;
    if (i2.parentComponent_ && i2.parentComponent_.removeChild(i2), this.children_.splice(r2, 0, i2), i2.parentComponent_ = this, typeof i2.id == `function` && (this.childIndex_[i2.id()] = i2), a2 ||= i2.name && K(i2.name()), a2 && (this.childNameIndex_[a2] = i2, this.childNameIndex_[Ui(a2)] = i2), typeof i2.el == `function` && i2.el()) {
      let e14 = null;
      this.children_[r2 + 1] && (this.children_[r2 + 1].el_ ? e14 = this.children_[r2 + 1].el_ : Or(this.children_[r2 + 1]) && (e14 = this.children_[r2 + 1])), this.contentEl().insertBefore(i2.el(), e14);
    }
    return i2;
  }
  removeChild(e14) {
    if (typeof e14 == `string` && (e14 = this.getChild(e14)), !e14 || !this.children_) return;
    let t2 = false;
    for (let n3 = this.children_.length - 1; n3 >= 0; n3--) if (this.children_[n3] === e14) {
      t2 = true, this.children_.splice(n3, 1);
      break;
    }
    if (!t2) return;
    e14.parentComponent_ = null, this.childIndex_[e14.id()] = null, this.childNameIndex_[K(e14.name())] = null, this.childNameIndex_[Ui(e14.name())] = null;
    let n2 = e14.el();
    n2 && n2.parentNode === this.contentEl() && this.contentEl().removeChild(e14.el());
  }
  initChildren() {
    let t2 = this.options_.children;
    if (t2) {
      let n2 = this.options_, r2 = (e14) => {
        let t3 = e14.name, r3 = e14.opts;
        if (n2[t3] !== void 0 && (r3 = n2[t3]), r3 === false) return;
        r3 === true && (r3 = {}), r3.playerOptions = this.options_.playerOptions;
        let i3 = this.addChild(t3, r3);
        i3 && (this[t3] = i3);
      }, i2, a2 = e7.getComponent(`Tech`);
      i2 = Array.isArray(t2) ? t2 : Object.keys(t2), i2.concat(Object.keys(this.options_).filter(function(e14) {
        return !i2.some(function(t3) {
          return typeof t3 == `string` ? e14 === t3 : e14 === t3.name;
        });
      })).map((e14) => {
        let n3, r3;
        return typeof e14 == `string` ? (n3 = e14, r3 = t2[n3] || this.options_[n3] || {}) : (n3 = e14.name, r3 = e14), { name: n3, opts: r3 };
      }).filter((t3) => {
        let n3 = e7.getComponent(t3.opts.componentClass || K(t3.name));
        return n3 && !a2.isTech(n3);
      }).forEach(r2);
    }
  }
  buildCSSClass() {
    return ``;
  }
  ready(e14, t2 = false) {
    if (e14) {
      if (!this.isReady_) {
        this.readyQueue_ = this.readyQueue_ || [], this.readyQueue_.push(e14);
        return;
      }
      t2 ? e14.call(this) : this.setTimeout(e14, 1);
    }
  }
  triggerReady() {
    this.isReady_ = true, this.setTimeout(function() {
      let e14 = this.readyQueue_;
      this.readyQueue_ = [], e14 && e14.length > 0 && e14.forEach(function(e15) {
        e15.call(this);
      }, this), this.trigger(`ready`);
    }, 1);
  }
  $(e14, t2) {
    return Zr(e14, t2 || this.contentEl());
  }
  $$(e14, t2) {
    return Qr(e14, t2 || this.contentEl());
  }
  hasClass(e14) {
    return jr(this.el_, e14);
  }
  addClass(...e14) {
    Mr(this.el_, ...e14);
  }
  removeClass(...e14) {
    Nr(this.el_, ...e14);
  }
  toggleClass(e14, t2) {
    Pr(this.el_, e14, t2);
  }
  show() {
    this.removeClass(`vjs-hidden`);
  }
  hide() {
    this.addClass(`vjs-hidden`);
  }
  lockShowing() {
    this.addClass(`vjs-lock-showing`);
  }
  unlockShowing() {
    this.removeClass(`vjs-lock-showing`);
  }
  getAttribute(e14) {
    return Lr(this.el_, e14);
  }
  setAttribute(e14, t2) {
    Rr(this.el_, e14, t2);
  }
  removeAttribute(e14) {
    zr(this.el_, e14);
  }
  width(e14, t2) {
    return this.dimension(`width`, e14, t2);
  }
  height(e14, t2) {
    return this.dimension(`height`, e14, t2);
  }
  dimensions(e14, t2) {
    this.width(e14, true), this.height(t2);
  }
  dimension(e14, t2, n2) {
    if (t2 !== void 0) {
      (t2 === null || t2 !== t2) && (t2 = 0), (`` + t2).indexOf(`%`) !== -1 || (`` + t2).indexOf(`px`) !== -1 ? this.el_.style[e14] = t2 : t2 === `auto` ? this.el_.style[e14] = `` : this.el_.style[e14] = t2 + `px`, n2 || this.trigger(`componentresize`);
      return;
    }
    if (!this.el_) return 0;
    let r2 = this.el_.style[e14], i2 = r2.indexOf(`px`);
    return parseInt(i2 === -1 ? this.el_[`offset` + K(e14)] : r2.slice(0, i2), 10);
  }
  currentDimension(e14) {
    let t2 = 0;
    if (e14 !== `width` && e14 !== `height`) throw Error(`currentDimension only accepts width or height value`);
    if (t2 = $r(this.el_, e14), t2 = parseFloat(t2), t2 === 0 || isNaN(t2)) {
      let n2 = `offset${K(e14)}`;
      t2 = this.el_[n2];
    }
    return t2;
  }
  currentDimensions() {
    return { width: this.currentDimension(`width`), height: this.currentDimension(`height`) };
  }
  currentWidth() {
    return this.currentDimension(`width`);
  }
  currentHeight() {
    return this.currentDimension(`height`);
  }
  getPositions() {
    let e14 = this.el_.getBoundingClientRect();
    return { boundingClientRect: { x: e14.x, y: e14.y, width: e14.width, height: e14.height, top: e14.top, right: e14.right, bottom: e14.bottom, left: e14.left }, center: { x: e14.left + e14.width / 2, y: e14.top + e14.height / 2, width: 0, height: 0, top: e14.top + e14.height / 2, right: e14.left + e14.width / 2, bottom: e14.top + e14.height / 2, left: e14.left + e14.width / 2 } };
  }
  focus() {
    this.el_.focus();
  }
  blur() {
    this.el_.blur();
  }
  handleKeyDown(e14) {
    this.player_ && (!_.default.isEventKey(e14, `Tab`) && !(this.player_.options_.playerOptions.spatialNavigation && this.player_.options_.playerOptions.spatialNavigation.enabled) && e14.stopPropagation(), this.player_.handleKeyDown(e14));
  }
  handleKeyPress(e14) {
    this.handleKeyDown(e14);
  }
  emitTapEvents() {
    let e14 = 0, t2 = null, n2;
    this.on(`touchstart`, function(r3) {
      r3.touches.length === 1 && (t2 = { pageX: r3.touches[0].pageX, pageY: r3.touches[0].pageY }, e14 = h.default.performance.now(), n2 = true);
    }), this.on(`touchmove`, function(e15) {
      if (e15.touches.length > 1) n2 = false;
      else if (t2) {
        let r3 = e15.touches[0].pageX - t2.pageX, i2 = e15.touches[0].pageY - t2.pageY;
        Math.sqrt(r3 * r3 + i2 * i2) > 10 && (n2 = false);
      }
    });
    let r2 = function() {
      n2 = false;
    };
    this.on(`touchleave`, r2), this.on(`touchcancel`, r2), this.on(`touchend`, function(r3) {
      t2 = null, n2 === true && h.default.performance.now() - e14 < 200 && (r3.preventDefault(), this.trigger(`tap`));
    });
  }
  enableTouchActivity() {
    if (!this.player() || !this.player().reportUserActivity) return;
    let e14 = G(this.player(), this.player().reportUserActivity), t2;
    this.on(`touchstart`, function() {
      e14(), this.clearInterval(t2), t2 = this.setInterval(e14, 250);
    });
    let n2 = function(n3) {
      e14(), this.clearInterval(t2);
    };
    this.on(`touchmove`, e14), this.on(`touchend`, n2), this.on(`touchcancel`, n2);
  }
  setTimeout(e14, t2) {
    var n2;
    return e14 = G(this, e14), this.clearTimersOnDispose_(), n2 = h.default.setTimeout(() => {
      this.setTimeoutIds_.has(n2) && this.setTimeoutIds_.delete(n2), e14();
    }, t2), this.setTimeoutIds_.add(n2), n2;
  }
  clearTimeout(e14) {
    return this.setTimeoutIds_.has(e14) && (this.setTimeoutIds_.delete(e14), h.default.clearTimeout(e14)), e14;
  }
  setInterval(e14, t2) {
    e14 = G(this, e14), this.clearTimersOnDispose_();
    let n2 = h.default.setInterval(e14, t2);
    return this.setIntervalIds_.add(n2), n2;
  }
  clearInterval(e14) {
    return this.setIntervalIds_.has(e14) && (this.setIntervalIds_.delete(e14), h.default.clearInterval(e14)), e14;
  }
  requestAnimationFrame(e14) {
    this.clearTimersOnDispose_();
    var t2;
    return e14 = G(this, e14), t2 = h.default.requestAnimationFrame(() => {
      this.rafIds_.has(t2) && this.rafIds_.delete(t2), e14();
    }), this.rafIds_.add(t2), t2;
  }
  requestNamedAnimationFrame(e14, t2) {
    if (this.namedRafs_.has(e14)) return;
    this.clearTimersOnDispose_(), t2 = G(this, t2);
    let n2 = this.requestAnimationFrame(() => {
      t2(), this.namedRafs_.has(e14) && this.namedRafs_.delete(e14);
    });
    return this.namedRafs_.set(e14, n2), e14;
  }
  cancelNamedAnimationFrame(e14) {
    this.namedRafs_.has(e14) && (this.cancelAnimationFrame(this.namedRafs_.get(e14)), this.namedRafs_.delete(e14));
  }
  cancelAnimationFrame(e14) {
    return this.rafIds_.has(e14) && (this.rafIds_.delete(e14), h.default.cancelAnimationFrame(e14)), e14;
  }
  clearTimersOnDispose_() {
    this.clearingTimersOnDispose_ || (this.clearingTimersOnDispose_ = true, this.one(`dispose`, () => {
      [[`namedRafs_`, `cancelNamedAnimationFrame`], [`rafIds_`, `cancelAnimationFrame`], [`setTimeoutIds_`, `clearTimeout`], [`setIntervalIds_`, `clearInterval`]].forEach(([e14, t2]) => {
        this[e14].forEach((e15, n2) => this[t2](n2));
      }), this.clearingTimersOnDispose_ = false;
    }));
  }
  getIsDisabled() {
    return !!this.el_.disabled;
  }
  getIsExpresslyInert() {
    return this.el_.inert && !this.el_.ownerDocument.documentElement.inert;
  }
  getIsFocusable(e14) {
    return (e14 || this.el_).tabIndex >= 0 && !(this.getIsDisabled() || this.getIsExpresslyInert());
  }
  getIsAvailableToBeFocused(e14) {
    function t2(e15) {
      let t3 = h.default.getComputedStyle(e15, null), n3 = t3.getPropertyValue(`visibility`);
      return t3.getPropertyValue(`display`) !== `none` && ![`hidden`, `collapse`].includes(n3);
    }
    function n2(e15) {
      return !(!t2(e15.parentElement) || !t2(e15) || e15.style.opacity === `0` || h.default.getComputedStyle(e15).height === `0px` || h.default.getComputedStyle(e15).width === `0px`);
    }
    function r2(e15) {
      if (e15.offsetWidth + e15.offsetHeight + e15.getBoundingClientRect().height + e15.getBoundingClientRect().width === 0) return false;
      let t3 = { x: e15.getBoundingClientRect().left + e15.offsetWidth / 2, y: e15.getBoundingClientRect().top + e15.offsetHeight / 2 };
      if (t3.x < 0 || t3.x > (g.default.documentElement.clientWidth || h.default.innerWidth) || t3.y < 0 || t3.y > (g.default.documentElement.clientHeight || h.default.innerHeight)) return false;
      let n3 = g.default.elementFromPoint(t3.x, t3.y);
      for (; n3; ) {
        if (n3 === e15) return true;
        if (n3.parentNode) n3 = n3.parentNode;
        else return false;
      }
    }
    return e14 ||= this.el(), !!(r2(e14) && n2(e14) && (!e14.parentElement || e14.tabIndex >= 0));
  }
  static registerComponent(t2, n2) {
    if (typeof t2 != `string` || !t2) throw Error(`Illegal component name, "${t2}"; must be a non-empty string.`);
    let r2 = e7.getComponent(`Tech`), i2 = r2 && r2.isTech(n2), a2 = e7 === n2 || e7.prototype.isPrototypeOf(n2.prototype);
    if (i2 || !a2) {
      let e14;
      throw e14 = i2 ? `techs must be registered using Tech.registerTech()` : `must be a Component subclass`, Error(`Illegal component, "${t2}"; ${e14}.`);
    }
    t2 = K(t2), e7.components_ ||= {};
    let o2 = e7.getComponent(`Player`);
    if (t2 === `Player` && o2 && o2.players) {
      let e14 = o2.players, t3 = Object.keys(e14);
      if (e14 && t3.length > 0 && t3.map((t4) => e14[t4]).every(Boolean)) throw Error(`Can not register Player component after player has been created.`);
    }
    return e7.components_[t2] = n2, e7.components_[Ui(t2)] = n2, n2;
  }
  static getComponent(t2) {
    if (!(!t2 || !e7.components_)) return e7.components_[t2];
  }
};
q.registerComponent(`Component`, q);
function Ki(e14, t2, n2) {
  if (typeof t2 != `number` || t2 < 0 || t2 > n2) throw Error(`Failed to execute '${e14}' on 'TimeRanges': The index provided (${t2}) is non-numeric or out of bounds (0-${n2}).`);
}
function qi(e14, t2, n2, r2) {
  return Ki(e14, r2, n2.length - 1), n2[r2][t2];
}
function Ji(e14) {
  let t2;
  return t2 = e14 === void 0 || e14.length === 0 ? { length: 0, start() {
    throw Error(`This TimeRanges object is empty`);
  }, end() {
    throw Error(`This TimeRanges object is empty`);
  } } : { length: e14.length, start: qi.bind(null, `start`, 0, e14), end: qi.bind(null, `end`, 1, e14) }, h.default.Symbol && h.default.Symbol.iterator && (t2[h.default.Symbol.iterator] = () => (e14 || []).values()), t2;
}
function Yi(e14, t2) {
  return Array.isArray(e14) ? Ji(e14) : e14 === void 0 || t2 === void 0 ? Ji() : Ji([[e14, t2]]);
}
var Xi = function(e14, t2) {
  e14 = e14 < 0 ? 0 : e14;
  let n2 = Math.floor(e14 % 60), r2 = Math.floor(e14 / 60 % 60), i2 = Math.floor(e14 / 3600), a2 = Math.floor(t2 / 60 % 60), o2 = Math.floor(t2 / 3600);
  return (isNaN(e14) || e14 === 1 / 0) && (i2 = r2 = n2 = `-`), i2 = i2 > 0 || o2 > 0 ? i2 + `:` : ``, r2 = ((i2 || a2 >= 10) && r2 < 10 ? `0` + r2 : r2) + `:`, n2 = n2 < 10 ? `0` + n2 : n2, i2 + r2 + n2;
}, Zi = Xi;
function Qi(e14) {
  Zi = e14;
}
function $i() {
  Zi = Xi;
}
function ea(e14, t2 = e14) {
  return Zi(e14, t2);
}
var ta = Object.freeze({ __proto__: null, createTimeRanges: Yi, createTimeRange: Yi, setFormatTime: Qi, resetFormatTime: $i, formatTime: ea });
function na(e14, t2) {
  let n2 = 0, r2, i2;
  if (!t2) return 0;
  (!e14 || !e14.length) && (e14 = Yi(0, 0));
  for (let a2 = 0; a2 < e14.length; a2++) r2 = e14.start(a2), i2 = e14.end(a2), i2 > t2 && (i2 = t2), n2 += i2 - r2;
  return n2 / t2;
}
function J(e14) {
  if (e14 instanceof J) return e14;
  typeof e14 == `number` ? this.code = e14 : typeof e14 == `string` ? this.message = e14 : Qn(e14) && (typeof e14.code == `number` && (this.code = e14.code), Object.assign(this, e14)), this.message ||= J.defaultMessages[this.code] || ``;
}
J.prototype.code = 0, J.prototype.message = ``, J.prototype.status = null, J.prototype.metadata = null, J.errorTypes = [`MEDIA_ERR_CUSTOM`, `MEDIA_ERR_ABORTED`, `MEDIA_ERR_NETWORK`, `MEDIA_ERR_DECODE`, `MEDIA_ERR_SRC_NOT_SUPPORTED`, `MEDIA_ERR_ENCRYPTED`], J.defaultMessages = { 1: `You aborted the media playback`, 2: `A network error caused the media download to fail part-way.`, 3: `The media playback was aborted due to a corruption problem or because the media used features your browser did not support.`, 4: `The media could not be loaded, either because the server or network failed or because the format is not supported.`, 5: `The media is encrypted and we do not have the keys to decrypt it.` }, J.MEDIA_ERR_CUSTOM = 0, J.prototype.MEDIA_ERR_CUSTOM = 0, J.MEDIA_ERR_ABORTED = 1, J.prototype.MEDIA_ERR_ABORTED = 1, J.MEDIA_ERR_NETWORK = 2, J.prototype.MEDIA_ERR_NETWORK = 2, J.MEDIA_ERR_DECODE = 3, J.prototype.MEDIA_ERR_DECODE = 3, J.MEDIA_ERR_SRC_NOT_SUPPORTED = 4, J.prototype.MEDIA_ERR_SRC_NOT_SUPPORTED = 4, J.MEDIA_ERR_ENCRYPTED = 5, J.prototype.MEDIA_ERR_ENCRYPTED = 5;
function ra(e14) {
  return e14 != null && typeof e14.then == `function`;
}
function ia(e14) {
  ra(e14) && e14.then(null, (e15) => {
  });
}
var aa = function(e14) {
  return [`kind`, `label`, `language`, `id`, `inBandMetadataTrackDispatchType`, `mode`, `src`].reduce((t2, n2, r2) => (e14[n2] && (t2[n2] = e14[n2]), t2), { cues: e14.cues && Array.prototype.map.call(e14.cues, function(e15) {
    return { startTime: e15.startTime, endTime: e15.endTime, text: e15.text, id: e15.id };
  }) });
}, oa = { textTracksToJson: function(e14) {
  let t2 = e14.$$(`track`), n2 = Array.prototype.map.call(t2, (e15) => e15.track);
  return Array.prototype.map.call(t2, function(e15) {
    let t3 = aa(e15.track);
    return e15.src && (t3.src = e15.src), t3;
  }).concat(Array.prototype.filter.call(e14.textTracks(), function(e15) {
    return n2.indexOf(e15) === -1;
  }).map(aa));
}, jsonToTextTracks: function(e14, t2) {
  return e14.forEach(function(e15) {
    let n2 = t2.addRemoteTextTrack(e15).track;
    !e15.src && e15.cues && e15.cues.forEach((e16) => n2.addCue(e16));
  }), t2.textTracks();
}, trackToJson_: aa }, sa = `vjs-modal-dialog`, ca = class extends q {
  constructor(e14, t2) {
    super(e14, t2), this.handleKeyDown_ = (e15) => this.handleKeyDown(e15), this.close_ = (e15) => this.close(e15), this.opened_ = this.hasBeenOpened_ = this.hasBeenFilled_ = false, this.closeable(!this.options_.uncloseable), this.content(this.options_.content), this.contentEl_ = U(`div`, { className: `${sa}-content` }, { role: `document` }), this.descEl_ = U(`p`, { className: `${sa}-description vjs-control-text`, id: this.el().getAttribute(`aria-describedby`) }), W(this.descEl_, this.description()), this.el_.appendChild(this.descEl_), this.el_.appendChild(this.contentEl_);
  }
  createEl() {
    return super.createEl(`div`, { className: this.buildCSSClass(), tabIndex: -1 }, { "aria-describedby": `${this.id()}_description`, "aria-hidden": `true`, "aria-label": this.label(), role: `dialog`, "aria-live": `polite` });
  }
  dispose() {
    this.contentEl_ = null, this.descEl_ = null, this.previouslyActiveEl_ = null, super.dispose();
  }
  buildCSSClass() {
    return `${sa} vjs-hidden ${super.buildCSSClass()}`;
  }
  label() {
    return this.localize(this.options_.label || `Modal Window`);
  }
  description() {
    let e14 = this.options_.description || this.localize(`This is a modal window.`);
    return this.closeable() && (e14 += ` ` + this.localize(`This modal can be closed by pressing the Escape key or activating the close button.`)), e14;
  }
  open() {
    if (this.opened_) {
      this.options_.fillAlways && this.fill();
      return;
    }
    let e14 = this.player();
    this.trigger(`beforemodalopen`), this.opened_ = true, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !e14.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && e14.pause(), this.on(`keydown`, this.handleKeyDown_), this.hadControls_ = e14.controls(), e14.controls(false), this.show(), this.conditionalFocus_(), this.el().setAttribute(`aria-hidden`, `false`), this.trigger(`modalopen`), this.hasBeenOpened_ = true;
  }
  opened(e14) {
    return typeof e14 == `boolean` && this[e14 ? `open` : `close`](), this.opened_;
  }
  close() {
    if (!this.opened_) return;
    let e14 = this.player();
    this.trigger(`beforemodalclose`), this.opened_ = false, this.wasPlaying_ && this.options_.pauseOnOpen && e14.play(), this.off(`keydown`, this.handleKeyDown_), this.hadControls_ && e14.controls(true), this.hide(), this.el().setAttribute(`aria-hidden`, `true`), this.trigger({ type: `modalclose`, bubbles: true }), this.conditionalBlur_(), this.options_.temporary && this.dispose();
  }
  closeable(e14) {
    if (typeof e14 == `boolean`) {
      let t2 = this.closeable_ = !!e14, n2 = this.getChild(`closeButton`);
      if (t2 && !n2) {
        let e15 = this.contentEl_;
        this.contentEl_ = this.el_, n2 = this.addChild(`closeButton`, { controlText: `Close Modal Dialog` }), this.contentEl_ = e15, this.on(n2, `close`, this.close_);
      }
      !t2 && n2 && (this.off(n2, `close`, this.close_), this.removeChild(n2), n2.dispose());
    }
    return this.closeable_;
  }
  fill() {
    this.fillWith(this.content());
  }
  fillWith(e14) {
    let t2 = this.contentEl(), n2 = t2.parentNode, r2 = t2.nextSibling;
    this.trigger(`beforemodalfill`), this.hasBeenFilled_ = true, n2.removeChild(t2), this.empty(), Yr(t2, e14), this.trigger(`modalfill`), r2 ? n2.insertBefore(t2, r2) : n2.appendChild(t2);
    let i2 = this.getChild(`closeButton`);
    i2 && n2.appendChild(i2.el_);
  }
  empty() {
    this.trigger(`beforemodalempty`), Kr(this.contentEl()), this.trigger(`modalempty`);
  }
  content(e14) {
    return e14 !== void 0 && (this.content_ = e14), this.content_;
  }
  conditionalFocus_() {
    let e14 = g.default.activeElement, t2 = this.player_.el_;
    this.previouslyActiveEl_ = null, (t2.contains(e14) || t2 === e14) && (this.previouslyActiveEl_ = e14, this.focus());
  }
  conditionalBlur_() {
    this.previouslyActiveEl_ &&= (this.previouslyActiveEl_.focus(), null);
  }
  handleKeyDown(e14) {
    if (this.trigger({ type: `modalKeydown`, originalEvent: e14, target: this, bubbles: true }), e14.stopPropagation(), _.default.isEventKey(e14, `Escape`) && this.closeable()) {
      e14.preventDefault(), this.close();
      return;
    }
    if (!_.default.isEventKey(e14, `Tab`)) return;
    let t2 = this.focusableEls_(), n2 = this.el_.querySelector(`:focus`), r2;
    for (let e15 = 0; e15 < t2.length; e15++) if (n2 === t2[e15]) {
      r2 = e15;
      break;
    }
    g.default.activeElement === this.el_ && (r2 = 0), e14.shiftKey && r2 === 0 ? (t2[t2.length - 1].focus(), e14.preventDefault()) : !e14.shiftKey && r2 === t2.length - 1 && (t2[0].focus(), e14.preventDefault());
  }
  focusableEls_() {
    let e14 = this.el_.querySelectorAll(`*`);
    return Array.prototype.filter.call(e14, (e15) => (e15 instanceof h.default.HTMLAnchorElement || e15 instanceof h.default.HTMLAreaElement) && e15.hasAttribute(`href`) || (e15 instanceof h.default.HTMLInputElement || e15 instanceof h.default.HTMLSelectElement || e15 instanceof h.default.HTMLTextAreaElement || e15 instanceof h.default.HTMLButtonElement) && !e15.hasAttribute(`disabled`) || e15 instanceof h.default.HTMLIFrameElement || e15 instanceof h.default.HTMLObjectElement || e15 instanceof h.default.HTMLEmbedElement || e15.hasAttribute(`tabindex`) && e15.getAttribute(`tabindex`) !== -1 || e15.hasAttribute(`contenteditable`));
  }
};
ca.prototype.options_ = { pauseOnOpen: true, temporary: true }, q.registerComponent(`ModalDialog`, ca);
var la = class extends ki {
  constructor(e14 = []) {
    super(), this.tracks_ = [], Object.defineProperty(this, "length", { get() {
      return this.tracks_.length;
    } });
    for (let t2 = 0; t2 < e14.length; t2++) this.addTrack(e14[t2]);
  }
  addTrack(e14) {
    let t2 = this.tracks_.length;
    `` + t2 in this || Object.defineProperty(this, t2, { get() {
      return this.tracks_[t2];
    } }), this.tracks_.indexOf(e14) === -1 && (this.tracks_.push(e14), this.trigger({ track: e14, type: `addtrack`, target: this })), e14.labelchange_ = () => {
      this.trigger({ track: e14, type: `labelchange`, target: this });
    }, ji(e14) && e14.addEventListener(`labelchange`, e14.labelchange_);
  }
  removeTrack(e14) {
    let t2;
    for (let n2 = 0, r2 = this.length; n2 < r2; n2++) if (this[n2] === e14) {
      t2 = this[n2], t2.off && t2.off(), this.tracks_.splice(n2, 1);
      break;
    }
    t2 && this.trigger({ track: t2, type: `removetrack`, target: this });
  }
  getTrackById(e14) {
    let t2 = null;
    for (let n2 = 0, r2 = this.length; n2 < r2; n2++) {
      let r3 = this[n2];
      if (r3.id === e14) {
        t2 = r3;
        break;
      }
    }
    return t2;
  }
};
la.prototype.allowedEvents_ = { change: `change`, addtrack: `addtrack`, removetrack: `removetrack`, labelchange: `labelchange` };
for (let e14 in la.prototype.allowedEvents_) la.prototype[`on` + e14] = null;
var ua = function(e14, t2) {
  for (let n2 = 0; n2 < e14.length; n2++) !Object.keys(e14[n2]).length || t2.id === e14[n2].id || (e14[n2].enabled = false);
}, da = class extends la {
  constructor(e14 = []) {
    for (let t2 = e14.length - 1; t2 >= 0; t2--) if (e14[t2].enabled) {
      ua(e14, e14[t2]);
      break;
    }
    super(e14), this.changing_ = false;
  }
  addTrack(e14) {
    e14.enabled && ua(this, e14), super.addTrack(e14), e14.addEventListener && (e14.enabledChange_ = () => {
      this.changing_ || (this.changing_ = true, ua(this, e14), this.changing_ = false, this.trigger(`change`));
    }, e14.addEventListener(`enabledchange`, e14.enabledChange_));
  }
  removeTrack(e14) {
    super.removeTrack(e14), e14.removeEventListener && e14.enabledChange_ && (e14.removeEventListener(`enabledchange`, e14.enabledChange_), e14.enabledChange_ = null);
  }
}, fa = function(e14, t2) {
  for (let n2 = 0; n2 < e14.length; n2++) !Object.keys(e14[n2]).length || t2.id === e14[n2].id || (e14[n2].selected = false);
}, pa = class extends la {
  constructor(e14 = []) {
    for (let t2 = e14.length - 1; t2 >= 0; t2--) if (e14[t2].selected) {
      fa(e14, e14[t2]);
      break;
    }
    super(e14), this.changing_ = false, Object.defineProperty(this, "selectedIndex", { get() {
      for (let e15 = 0; e15 < this.length; e15++) if (this[e15].selected) return e15;
      return -1;
    }, set() {
    } });
  }
  addTrack(e14) {
    e14.selected && fa(this, e14), super.addTrack(e14), e14.addEventListener && (e14.selectedChange_ = () => {
      this.changing_ || (this.changing_ = true, fa(this, e14), this.changing_ = false, this.trigger(`change`));
    }, e14.addEventListener(`selectedchange`, e14.selectedChange_));
  }
  removeTrack(e14) {
    super.removeTrack(e14), e14.removeEventListener && e14.selectedChange_ && (e14.removeEventListener(`selectedchange`, e14.selectedChange_), e14.selectedChange_ = null);
  }
}, ma = class extends la {
  addTrack(e14) {
    super.addTrack(e14), this.queueChange_ ||= () => this.queueTrigger(`change`), this.triggerSelectedlanguagechange || (this.triggerSelectedlanguagechange_ = () => this.trigger(`selectedlanguagechange`)), e14.addEventListener(`modechange`, this.queueChange_), [`metadata`, `chapters`].indexOf(e14.kind) === -1 && e14.addEventListener(`modechange`, this.triggerSelectedlanguagechange_);
  }
  removeTrack(e14) {
    super.removeTrack(e14), e14.removeEventListener && (this.queueChange_ && e14.removeEventListener(`modechange`, this.queueChange_), this.selectedlanguagechange_ && e14.removeEventListener(`modechange`, this.triggerSelectedlanguagechange_));
  }
}, ha = class {
  constructor(e14 = []) {
    this.trackElements_ = [], Object.defineProperty(this, "length", { get() {
      return this.trackElements_.length;
    } });
    for (let t2 = 0, n2 = e14.length; t2 < n2; t2++) this.addTrackElement_(e14[t2]);
  }
  addTrackElement_(e14) {
    let t2 = this.trackElements_.length;
    `` + t2 in this || Object.defineProperty(this, t2, { get() {
      return this.trackElements_[t2];
    } }), this.trackElements_.indexOf(e14) === -1 && this.trackElements_.push(e14);
  }
  getTrackElementByTrack_(e14) {
    let t2;
    for (let n2 = 0, r2 = this.trackElements_.length; n2 < r2; n2++) if (e14 === this.trackElements_[n2].track) {
      t2 = this.trackElements_[n2];
      break;
    }
    return t2;
  }
  removeTrackElement_(e14) {
    for (let t2 = 0, n2 = this.trackElements_.length; t2 < n2; t2++) if (e14 === this.trackElements_[t2]) {
      this.trackElements_[t2].track && typeof this.trackElements_[t2].track.off == `function` && this.trackElements_[t2].track.off(), typeof this.trackElements_[t2].off == `function` && this.trackElements_[t2].off(), this.trackElements_.splice(t2, 1);
      break;
    }
  }
}, ga = class e8 {
  constructor(t2) {
    e8.prototype.setCues_.call(this, t2), Object.defineProperty(this, "length", { get() {
      return this.length_;
    } });
  }
  setCues_(e14) {
    let t2 = this.length || 0, n2 = 0, r2 = e14.length;
    this.cues_ = e14, this.length_ = e14.length;
    let i2 = function(e15) {
      `` + e15 in this || Object.defineProperty(this, `` + e15, { get() {
        return this.cues_[e15];
      } });
    };
    if (t2 < r2) for (n2 = t2; n2 < r2; n2++) i2.call(this, n2);
  }
  getCueById(e14) {
    let t2 = null;
    for (let n2 = 0, r2 = this.length; n2 < r2; n2++) {
      let r3 = this[n2];
      if (r3.id === e14) {
        t2 = r3;
        break;
      }
    }
    return t2;
  }
}, _a = { alternative: `alternative`, captions: `captions`, main: `main`, sign: `sign`, subtitles: `subtitles`, commentary: `commentary` }, va = { alternative: `alternative`, descriptions: `descriptions`, main: `main`, "main-desc": `main-desc`, translation: `translation`, commentary: `commentary` }, ya = { subtitles: `subtitles`, captions: `captions`, descriptions: `descriptions`, chapters: `chapters`, metadata: `metadata` }, ba = { disabled: `disabled`, hidden: `hidden`, showing: `showing` }, xa = class extends ki {
  constructor(e14 = {}) {
    super();
    let t2 = { id: e14.id || `vjs_track_` + di(), kind: e14.kind || ``, language: e14.language || `` }, n2 = e14.label || ``;
    for (let e15 in t2) Object.defineProperty(this, e15, { get() {
      return t2[e15];
    }, set() {
    } });
    Object.defineProperty(this, "label", { get() {
      return n2;
    }, set(e15) {
      e15 !== n2 && (n2 = e15, this.trigger(`labelchange`));
    } });
  }
}, Sa = function(e14) {
  return new URL(e14, g.default.baseURI);
}, Ca = function(e14) {
  return new URL(e14, g.default.baseURI).href;
}, wa = function(e14) {
  if (typeof e14 == `string`) {
    let t2 = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/.exec(e14);
    if (t2) return t2.pop().toLowerCase();
  }
  return ``;
}, Ta = function(e14, t2 = h.default.location) {
  return Sa(e14).origin !== t2.origin;
}, Ea = Object.freeze({ __proto__: null, parseUrl: Sa, getAbsoluteURL: Ca, getFileExtension: wa, isCrossOrigin: Ta }), Da = function(e14, t2) {
  let n2 = new h.default.WebVTT.Parser(h.default, h.default.vttjs, h.default.WebVTT.StringDecoder()), r2 = [];
  n2.oncue = function(e15) {
    t2.addCue(e15);
  }, n2.onparsingerror = function(e15) {
    r2.push(e15);
  }, n2.onflush = function() {
    t2.trigger({ type: `loadeddata`, target: t2 });
  }, n2.parse(e14), r2.length > 0 && (h.default.console && h.default.console.groupCollapsed && h.default.console.groupCollapsed(`Text Track parsing errors for ${t2.src}`), r2.forEach((e15) => z.error(e15)), h.default.console && h.default.console.groupEnd && h.default.console.groupEnd()), n2.flush();
}, Oa = function(e14, t2) {
  let n2 = { uri: e14 }, r2 = Ta(e14);
  r2 && (n2.cors = r2);
  let i2 = t2.tech_.crossOrigin() === `use-credentials`;
  i2 && (n2.withCredentials = i2), (0, y.default)(n2, G(this, function(e15, n3, r3) {
    if (e15) return z.error(e15, n3);
    t2.loaded_ = true, typeof h.default.WebVTT == `function` ? Da(r3, t2) : t2.tech_ && t2.tech_.any([`vttjsloaded`, `vttjserror`], (e16) => {
      if (e16.type === `vttjserror`) {
        z.error(`vttjs failed to load, stopping trying to process ${t2.src}`);
        return;
      }
      return Da(r3, t2);
    });
  }));
}, ka = class extends xa {
  constructor(e14 = {}) {
    if (!e14.tech) throw Error(`A tech was not provided.`);
    let t2 = B(e14, { kind: ya[e14.kind] || `subtitles`, language: e14.language || e14.srclang || `` }), n2 = ba[t2.mode] || `disabled`, r2 = t2.default;
    (t2.kind === `metadata` || t2.kind === `chapters`) && (n2 = `hidden`), super(t2), this.tech_ = t2.tech, this.cues_ = [], this.activeCues_ = [], this.preload_ = this.tech_.preloadTextTracks !== false;
    let i2 = new ga(this.cues_), a2 = new ga(this.activeCues_), o2 = false;
    this.timeupdateHandler = G(this, function(e15 = {}) {
      if (!this.tech_.isDisposed()) {
        if (!this.tech_.isReady_) {
          e15.type !== `timeupdate` && (this.rvf_ = this.tech_.requestVideoFrameCallback(this.timeupdateHandler));
          return;
        }
        this.activeCues = this.activeCues, o2 &&= (this.trigger(`cuechange`), false), e15.type !== `timeupdate` && (this.rvf_ = this.tech_.requestVideoFrameCallback(this.timeupdateHandler));
      }
    }), this.tech_.one(`dispose`, () => {
      this.stopTracking();
    }), n2 !== `disabled` && this.startTracking(), Object.defineProperties(this, { default: { get() {
      return r2;
    }, set() {
    } }, mode: { get() {
      return n2;
    }, set(e15) {
      ba[e15] && n2 !== e15 && (n2 = e15, !this.preload_ && n2 !== `disabled` && this.cues.length === 0 && Oa(this.src, this), this.stopTracking(), n2 !== `disabled` && this.startTracking(), this.trigger(`modechange`));
    } }, cues: { get() {
      return this.loaded_ ? i2 : null;
    }, set() {
    } }, activeCues: { get() {
      if (!this.loaded_) return null;
      if (this.cues.length === 0) return a2;
      let e15 = this.tech_.currentTime(), t3 = [];
      for (let n3 = 0, r3 = this.cues.length; n3 < r3; n3++) {
        let r4 = this.cues[n3];
        r4.startTime <= e15 && r4.endTime >= e15 && t3.push(r4);
      }
      if (o2 = false, t3.length !== this.activeCues_.length) o2 = true;
      else for (let e16 = 0; e16 < t3.length; e16++) this.activeCues_.indexOf(t3[e16]) === -1 && (o2 = true);
      return this.activeCues_ = t3, a2.setCues_(this.activeCues_), a2;
    }, set() {
    } } }), t2.src ? (this.src = t2.src, this.preload_ || (this.loaded_ = true), (this.preload_ || t2.kind !== `subtitles` && t2.kind !== `captions`) && Oa(this.src, this)) : this.loaded_ = true;
  }
  startTracking() {
    this.rvf_ = this.tech_.requestVideoFrameCallback(this.timeupdateHandler), this.tech_.on(`timeupdate`, this.timeupdateHandler);
  }
  stopTracking() {
    this.rvf_ &&= (this.tech_.cancelVideoFrameCallback(this.rvf_), void 0), this.tech_.off(`timeupdate`, this.timeupdateHandler);
  }
  addCue(e14) {
    let t2 = e14;
    if (!(`getCueAsHTML` in t2)) {
      t2 = new h.default.vttjs.VTTCue(e14.startTime, e14.endTime, e14.text);
      for (let n3 in e14) n3 in t2 || (t2[n3] = e14[n3]);
      t2.id = e14.id, t2.originalCue_ = e14;
    }
    let n2 = this.tech_.textTracks();
    for (let e15 = 0; e15 < n2.length; e15++) n2[e15] !== this && n2[e15].removeCue(t2);
    this.cues_.push(t2), this.cues.setCues_(this.cues_);
  }
  removeCue(e14) {
    let t2 = this.cues_.length;
    for (; t2--; ) {
      let n2 = this.cues_[t2];
      if (n2 === e14 || n2.originalCue_ && n2.originalCue_ === e14) {
        this.cues_.splice(t2, 1), this.cues.setCues_(this.cues_);
        break;
      }
    }
  }
};
ka.prototype.allowedEvents_ = { cuechange: `cuechange` };
var Aa = class extends xa {
  constructor(e14 = {}) {
    let t2 = B(e14, { kind: va[e14.kind] || `` });
    super(t2);
    let n2 = false;
    Object.defineProperty(this, "enabled", { get() {
      return n2;
    }, set(e15) {
      typeof e15 != `boolean` || e15 === n2 || (n2 = e15, this.trigger(`enabledchange`));
    } }), t2.enabled && (this.enabled = t2.enabled), this.loaded_ = true;
  }
}, ja = class extends xa {
  constructor(e14 = {}) {
    let t2 = B(e14, { kind: _a[e14.kind] || `` });
    super(t2);
    let n2 = false;
    Object.defineProperty(this, "selected", { get() {
      return n2;
    }, set(e15) {
      typeof e15 != `boolean` || e15 === n2 || (n2 = e15, this.trigger(`selectedchange`));
    } }), t2.selected && (this.selected = t2.selected);
  }
}, Ma = class e9 extends ki {
  constructor(t2 = {}) {
    super();
    let n2, r2 = new ka(t2);
    this.kind = r2.kind, this.src = r2.src, this.srclang = r2.language, this.label = r2.label, this.default = r2.default, Object.defineProperties(this, { readyState: { get() {
      return n2;
    } }, track: { get() {
      return r2;
    } } }), n2 = e9.NONE, r2.addEventListener(`loadeddata`, () => {
      n2 = e9.LOADED, this.trigger({ type: `load`, target: this });
    });
  }
};
Ma.prototype.allowedEvents_ = { load: `load` }, Ma.NONE = 0, Ma.LOADING = 1, Ma.LOADED = 2, Ma.ERROR = 3;
var Na = { audio: { ListClass: da, TrackClass: Aa, capitalName: `Audio` }, video: { ListClass: pa, TrackClass: ja, capitalName: `Video` }, text: { ListClass: ma, TrackClass: ka, capitalName: `Text` } };
Object.keys(Na).forEach(function(e14) {
  Na[e14].getterName = `${e14}Tracks`, Na[e14].privateName = `${e14}Tracks_`;
});
var Pa = { remoteText: { ListClass: ma, TrackClass: ka, capitalName: `RemoteText`, getterName: `remoteTextTracks`, privateName: `remoteTextTracks_` }, remoteTextEl: { ListClass: ha, TrackClass: Ma, capitalName: `RemoteTextTrackEls`, getterName: `remoteTextTrackEls`, privateName: `remoteTextTrackEls_` } }, Fa = Object.assign({}, Na, Pa);
Pa.names = Object.keys(Pa), Na.names = Object.keys(Na), Fa.names = [].concat(Pa.names, Na.names);
function Ia(e14, t2, n2, r2, i2 = {}) {
  let a2 = e14.textTracks();
  i2.kind = t2, n2 && (i2.label = n2), r2 && (i2.language = r2), i2.tech = e14;
  let o2 = new Fa.text.TrackClass(i2);
  return a2.addTrack(o2), o2;
}
var Y = class e10 extends q {
  constructor(e14 = {}, t2 = function() {
  }) {
    e14.reportTouchActivity = false, super(null, e14, t2), this.onDurationChange_ = (e15) => this.onDurationChange(e15), this.trackProgress_ = (e15) => this.trackProgress(e15), this.trackCurrentTime_ = (e15) => this.trackCurrentTime(e15), this.stopTrackingCurrentTime_ = (e15) => this.stopTrackingCurrentTime(e15), this.disposeSourceHandler_ = (e15) => this.disposeSourceHandler(e15), this.queuedHanders_ = /* @__PURE__ */ new Set(), this.hasStarted_ = false, this.on(`playing`, function() {
      this.hasStarted_ = true;
    }), this.on(`loadstart`, function() {
      this.hasStarted_ = false;
    }), Fa.names.forEach((t3) => {
      let n2 = Fa[t3];
      e14 && e14[n2.getterName] && (this[n2.privateName] = e14[n2.getterName]);
    }), this.featuresProgressEvents || this.manualProgressOn(), this.featuresTimeupdateEvents || this.manualTimeUpdatesOn(), [`Text`, `Audio`, `Video`].forEach((t3) => {
      e14[`native${t3}Tracks`] === false && (this[`featuresNative${t3}Tracks`] = false);
    }), e14.nativeCaptions === false || e14.nativeTextTracks === false ? this.featuresNativeTextTracks = false : (e14.nativeCaptions === true || e14.nativeTextTracks === true) && (this.featuresNativeTextTracks = true), this.featuresNativeTextTracks || this.emulateTextTracks(), this.preloadTextTracks = e14.preloadTextTracks !== false, this.autoRemoteTextTracks_ = new Fa.text.ListClass(), this.initTrackListeners(), e14.nativeControlsForTouch || this.emitTapEvents(), this.constructor && (this.name_ = this.constructor.name || `Unknown Tech`);
  }
  triggerSourceset(e14) {
    this.isReady_ || this.one(`ready`, () => this.setTimeout(() => this.triggerSourceset(e14), 1)), this.trigger({ src: e14, type: `sourceset` });
  }
  manualProgressOn() {
    this.on(`durationchange`, this.onDurationChange_), this.manualProgress = true, this.one(`ready`, this.trackProgress_);
  }
  manualProgressOff() {
    this.manualProgress = false, this.stopTrackingProgress(), this.off(`durationchange`, this.onDurationChange_);
  }
  trackProgress(e14) {
    this.stopTrackingProgress(), this.progressInterval = this.setInterval(G(this, function() {
      let e15 = this.bufferedPercent();
      this.bufferedPercent_ !== e15 && this.trigger(`progress`), this.bufferedPercent_ = e15, e15 === 1 && this.stopTrackingProgress();
    }), 500);
  }
  onDurationChange(e14) {
    this.duration_ = this.duration();
  }
  buffered() {
    return Yi(0, 0);
  }
  bufferedPercent() {
    return na(this.buffered(), this.duration_);
  }
  stopTrackingProgress() {
    this.clearInterval(this.progressInterval);
  }
  manualTimeUpdatesOn() {
    this.manualTimeUpdates = true, this.on(`play`, this.trackCurrentTime_), this.on(`pause`, this.stopTrackingCurrentTime_);
  }
  manualTimeUpdatesOff() {
    this.manualTimeUpdates = false, this.stopTrackingCurrentTime(), this.off(`play`, this.trackCurrentTime_), this.off(`pause`, this.stopTrackingCurrentTime_);
  }
  trackCurrentTime() {
    this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function() {
      this.trigger({ type: `timeupdate`, target: this, manuallyTriggered: true });
    }, 250);
  }
  stopTrackingCurrentTime() {
    this.clearInterval(this.currentTimeInterval), this.trigger({ type: `timeupdate`, target: this, manuallyTriggered: true });
  }
  dispose() {
    this.clearTracks(Na.names), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), super.dispose();
  }
  clearTracks(e14) {
    e14 = [].concat(e14), e14.forEach((e15) => {
      let t2 = this[`${e15}Tracks`]() || [], n2 = t2.length;
      for (; n2--; ) {
        let r2 = t2[n2];
        e15 === `text` && this.removeRemoteTextTrack(r2), t2.removeTrack(r2);
      }
    });
  }
  cleanupAutoTextTracks() {
    let e14 = this.autoRemoteTextTracks_ || [], t2 = e14.length;
    for (; t2--; ) {
      let n2 = e14[t2];
      this.removeRemoteTextTrack(n2);
    }
  }
  reset() {
  }
  crossOrigin() {
  }
  setCrossOrigin() {
  }
  error(e14) {
    return e14 !== void 0 && (this.error_ = new J(e14), this.trigger(`error`)), this.error_;
  }
  played() {
    return this.hasStarted_ ? Yi(0, 0) : Yi();
  }
  play() {
  }
  setScrubbing(e14) {
  }
  scrubbing() {
  }
  setCurrentTime(e14) {
    this.manualTimeUpdates && this.trigger({ type: `timeupdate`, target: this, manuallyTriggered: true });
  }
  initTrackListeners() {
    Na.names.forEach((e14) => {
      let t2 = Na[e14], n2 = () => {
        this.trigger(`${e14}trackchange`);
      }, r2 = this[t2.getterName]();
      r2.addEventListener(`removetrack`, n2), r2.addEventListener(`addtrack`, n2), this.on(`dispose`, () => {
        r2.removeEventListener(`removetrack`, n2), r2.removeEventListener(`addtrack`, n2);
      });
    });
  }
  addWebVttScript_() {
    if (!h.default.WebVTT) if (g.default.body.contains(this.el())) {
      if (!this.options_[`vtt.js`] && $n(b.default) && Object.keys(b.default).length > 0) {
        this.trigger(`vttjsloaded`);
        return;
      }
      let e14 = g.default.createElement(`script`);
      e14.src = this.options_[`vtt.js`] || `https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js`, e14.onload = () => {
        this.trigger(`vttjsloaded`);
      }, e14.onerror = () => {
        this.trigger(`vttjserror`);
      }, this.on(`dispose`, () => {
        e14.onload = null, e14.onerror = null;
      }), h.default.WebVTT = true, this.el().parentNode.appendChild(e14);
    } else this.ready(this.addWebVttScript_);
  }
  emulateTextTracks() {
    let e14 = this.textTracks(), t2 = this.remoteTextTracks(), n2 = (t3) => e14.addTrack(t3.track), r2 = (t3) => e14.removeTrack(t3.track);
    t2.on(`addtrack`, n2), t2.on(`removetrack`, r2), this.addWebVttScript_();
    let i2 = () => this.trigger(`texttrackchange`), a2 = () => {
      i2();
      for (let t3 = 0; t3 < e14.length; t3++) {
        let n3 = e14[t3];
        n3.removeEventListener(`cuechange`, i2), n3.mode === `showing` && n3.addEventListener(`cuechange`, i2);
      }
    };
    a2(), e14.addEventListener(`change`, a2), e14.addEventListener(`addtrack`, a2), e14.addEventListener(`removetrack`, a2), this.on(`dispose`, function() {
      t2.off(`addtrack`, n2), t2.off(`removetrack`, r2), e14.removeEventListener(`change`, a2), e14.removeEventListener(`addtrack`, a2), e14.removeEventListener(`removetrack`, a2);
      for (let t3 = 0; t3 < e14.length; t3++) e14[t3].removeEventListener(`cuechange`, i2);
    });
  }
  addTextTrack(e14, t2, n2) {
    if (!e14) throw Error(`TextTrack kind is required but was not provided`);
    return Ia(this, e14, t2, n2);
  }
  createRemoteTextTrack(e14) {
    let t2 = B(e14, { tech: this });
    return new Pa.remoteTextEl.TrackClass(t2);
  }
  addRemoteTextTrack(e14 = {}, t2) {
    let n2 = this.createRemoteTextTrack(e14);
    return typeof t2 != `boolean` && (t2 = false), this.remoteTextTrackEls().addTrackElement_(n2), this.remoteTextTracks().addTrack(n2.track), t2 === false && this.ready(() => this.autoRemoteTextTracks_.addTrack(n2.track)), n2;
  }
  removeRemoteTextTrack(e14) {
    let t2 = this.remoteTextTrackEls().getTrackElementByTrack_(e14);
    this.remoteTextTrackEls().removeTrackElement_(t2), this.remoteTextTracks().removeTrack(e14), this.autoRemoteTextTracks_.removeTrack(e14);
  }
  getVideoPlaybackQuality() {
    return {};
  }
  requestPictureInPicture() {
    return Promise.reject();
  }
  disablePictureInPicture() {
    return true;
  }
  setDisablePictureInPicture() {
  }
  requestVideoFrameCallback(e14) {
    let t2 = di();
    return !this.isReady_ || this.paused() ? (this.queuedHanders_.add(t2), this.one(`playing`, () => {
      this.queuedHanders_.has(t2) && (this.queuedHanders_.delete(t2), e14());
    })) : this.requestNamedAnimationFrame(t2, e14), t2;
  }
  cancelVideoFrameCallback(e14) {
    this.queuedHanders_.has(e14) ? this.queuedHanders_.delete(e14) : this.cancelNamedAnimationFrame(e14);
  }
  setPoster() {
  }
  playsinline() {
  }
  setPlaysinline() {
  }
  overrideNativeAudioTracks(e14) {
  }
  overrideNativeVideoTracks(e14) {
  }
  canPlayType(e14) {
    return ``;
  }
  static canPlayType(e14) {
    return ``;
  }
  static canPlaySource(t2, n2) {
    return e10.canPlayType(t2.type);
  }
  static isTech(t2) {
    return t2.prototype instanceof e10 || t2 instanceof e10 || t2 === e10;
  }
  static registerTech(t2, n2) {
    if (e10.techs_ ||= {}, !e10.isTech(n2)) throw Error(`Tech ${t2} must be a Tech`);
    if (!e10.canPlayType) throw Error(`Techs must have a static canPlayType method on them`);
    if (!e10.canPlaySource) throw Error(`Techs must have a static canPlaySource method on them`);
    return t2 = K(t2), e10.techs_[t2] = n2, e10.techs_[Ui(t2)] = n2, t2 !== `Tech` && e10.defaultTechOrder_.push(t2), n2;
  }
  static getTech(t2) {
    if (t2) {
      if (e10.techs_ && e10.techs_[t2]) return e10.techs_[t2];
      if (t2 = K(t2), h.default && h.default.videojs && h.default.videojs[t2]) return z.warn(`The ${t2} tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)`), h.default.videojs[t2];
    }
  }
};
Fa.names.forEach(function(e14) {
  let t2 = Fa[e14];
  Y.prototype[t2.getterName] = function() {
    return this[t2.privateName] = this[t2.privateName] || new t2.ListClass(), this[t2.privateName];
  };
}), Y.prototype.featuresVolumeControl = true, Y.prototype.featuresMuteControl = true, Y.prototype.featuresFullscreenResize = false, Y.prototype.featuresPlaybackRate = false, Y.prototype.featuresProgressEvents = false, Y.prototype.featuresSourceset = false, Y.prototype.featuresTimeupdateEvents = false, Y.prototype.featuresNativeTextTracks = false, Y.prototype.featuresVideoFrameCallback = false, Y.withSourceHandlers = function(e14) {
  e14.registerSourceHandler = function(t2, n2) {
    let r2 = e14.sourceHandlers;
    r2 ||= e14.sourceHandlers = [], n2 === void 0 && (n2 = r2.length), r2.splice(n2, 0, t2);
  }, e14.canPlayType = function(t2) {
    let n2 = e14.sourceHandlers || [], r2;
    for (let e15 = 0; e15 < n2.length; e15++) if (r2 = n2[e15].canPlayType(t2), r2) return r2;
    return ``;
  }, e14.selectSourceHandler = function(t2, n2) {
    let r2 = e14.sourceHandlers || [], i2;
    for (let e15 = 0; e15 < r2.length; e15++) if (i2 = r2[e15].canHandleSource(t2, n2), i2) return r2[e15];
    return null;
  }, e14.canPlaySource = function(t2, n2) {
    let r2 = e14.selectSourceHandler(t2, n2);
    return r2 ? r2.canHandleSource(t2, n2) : ``;
  }, [`seekable`, `seeking`, `duration`].forEach(function(e15) {
    let t2 = this[e15];
    typeof t2 == `function` && (this[e15] = function() {
      return this.sourceHandler_ && this.sourceHandler_[e15] ? this.sourceHandler_[e15].apply(this.sourceHandler_, arguments) : t2.apply(this, arguments);
    });
  }, e14.prototype), e14.prototype.setSource = function(t2) {
    let n2 = e14.selectSourceHandler(t2, this.options_);
    n2 || (e14.nativeSourceHandler ? n2 = e14.nativeSourceHandler : z.error(`No source handler found for the current source.`)), this.disposeSourceHandler(), this.off(`dispose`, this.disposeSourceHandler_), n2 !== e14.nativeSourceHandler && (this.currentSource_ = t2), this.sourceHandler_ = n2.handleSource(t2, this, this.options_), this.one(`dispose`, this.disposeSourceHandler_);
  }, e14.prototype.disposeSourceHandler = function() {
    this.currentSource_ &&= (this.clearTracks([`audio`, `video`]), null), this.cleanupAutoTextTracks(), this.sourceHandler_ &&= (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), null);
  };
}, q.registerComponent(`Tech`, Y), Y.registerTech(`Tech`, Y), Y.defaultTechOrder_ = [];
var La = {}, Ra = {}, za = {};
function Ba(e14, t2) {
  La[e14] = La[e14] || [], La[e14].push(t2);
}
function Va(e14, t2, n2) {
  e14.setTimeout(() => $a(t2, La[t2.type], n2, e14), 1);
}
function Ha(e14, t2) {
  e14.forEach((e15) => e15.setTech && e15.setTech(t2));
}
function Ua(e14, t2, n2) {
  return e14.reduceRight(Ya(n2), t2[n2]());
}
function Wa(e14, t2, n2, r2) {
  return t2[n2](e14.reduce(Ya(n2), r2));
}
function Ga(e14, t2, n2, r2 = null) {
  let i2 = `call` + K(n2), a2 = e14.reduce(Ya(i2), r2), o2 = a2 === za, s2 = o2 ? null : t2[n2](a2);
  return Xa(e14, n2, s2, o2), s2;
}
var Ka = { buffered: 1, currentTime: 1, duration: 1, muted: 1, played: 1, paused: 1, seekable: 1, volume: 1, ended: 1 }, qa = { setCurrentTime: 1, setMuted: 1, setVolume: 1 }, Ja = { play: 1, pause: 1 };
function Ya(e14) {
  return (t2, n2) => t2 === za ? za : n2[e14] ? n2[e14](t2) : t2;
}
function Xa(e14, t2, n2, r2) {
  for (let i2 = e14.length - 1; i2 >= 0; i2--) {
    let a2 = e14[i2];
    a2[t2] && a2[t2](r2, n2);
  }
}
function Za(e14) {
  Ra[e14.id()] = null;
}
function Qa(e14, t2) {
  let n2 = Ra[e14.id()], r2 = null;
  if (n2 == null) return r2 = t2(e14), Ra[e14.id()] = [[t2, r2]], r2;
  for (let e15 = 0; e15 < n2.length; e15++) {
    let [i2, a2] = n2[e15];
    i2 === t2 && (r2 = a2);
  }
  return r2 === null && (r2 = t2(e14), n2.push([t2, r2])), r2;
}
function $a(e14 = {}, t2 = [], n2, r2, i2 = [], a2 = false) {
  let [o2, ...s2] = t2;
  if (typeof o2 == `string`) $a(e14, La[o2], n2, r2, i2, a2);
  else if (o2) {
    let t3 = Qa(r2, o2);
    if (!t3.setSource) return i2.push(t3), $a(e14, s2, n2, r2, i2, a2);
    t3.setSource(Object.assign({}, e14), function(o3, c2) {
      if (o3) return $a(e14, s2, n2, r2, i2, a2);
      i2.push(t3), $a(c2, e14.type === c2.type ? s2 : La[c2.type], n2, r2, i2, a2);
    });
  } else s2.length ? $a(e14, s2, n2, r2, i2, a2) : a2 ? n2(e14, i2) : $a(e14, La[`*`], n2, r2, i2, true);
}
var eo = { opus: `video/ogg`, ogv: `video/ogg`, mp4: `video/mp4`, mov: `video/mp4`, m4v: `video/mp4`, mkv: `video/x-matroska`, m4a: `audio/mp4`, mp3: `audio/mpeg`, aac: `audio/aac`, caf: `audio/x-caf`, flac: `audio/flac`, oga: `audio/ogg`, wav: `audio/wav`, m3u8: `application/x-mpegURL`, mpd: `application/dash+xml`, jpg: `image/jpeg`, jpeg: `image/jpeg`, gif: `image/gif`, png: `image/png`, svg: `image/svg+xml`, webp: `image/webp` }, to = function(e14 = ``) {
  return eo[wa(e14).toLowerCase()] || ``;
}, no = (e14, t2) => {
  if (!t2) return ``;
  if (e14.cache_.source.src === t2 && e14.cache_.source.type) return e14.cache_.source.type;
  let n2 = e14.cache_.sources.filter((e15) => e15.src === t2);
  if (n2.length) return n2[0].type;
  let r2 = e14.$$(`source`);
  for (let e15 = 0; e15 < r2.length; e15++) {
    let n3 = r2[e15];
    if (n3.type && n3.src && n3.src === t2) return n3.type;
  }
  return to(t2);
}, ro = function(e14) {
  if (Array.isArray(e14)) {
    let t2 = [];
    e14.forEach(function(e15) {
      e15 = ro(e15), Array.isArray(e15) ? t2 = t2.concat(e15) : Qn(e15) && t2.push(e15);
    }), e14 = t2;
  } else e14 = typeof e14 == `string` && e14.trim() ? [io({ src: e14 })] : Qn(e14) && typeof e14.src == `string` && e14.src && e14.src.trim() ? [io(e14)] : [];
  return e14;
};
function io(e14) {
  if (!e14.type) {
    let t2 = to(e14.src);
    t2 && (e14.type = t2);
  }
  return e14;
}
var ao = `<svg xmlns="http://www.w3.org/2000/svg">
  <defs>
    <symbol viewBox="0 0 48 48" id="vjs-icon-play">
      <path d="M16 10v28l22-14z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-pause">
      <path d="M12 38h8V10h-8v28zm16-28v28h8V10h-8z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-audio">
      <path d="M24 2C14.06 2 6 10.06 6 20v14c0 3.31 2.69 6 6 6h6V24h-8v-4c0-7.73 6.27-14 14-14s14 6.27 14 14v4h-8v16h6c3.31 0 6-2.69 6-6V20c0-9.94-8.06-18-18-18z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-captions">
      <path d="M38 8H10c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM22 22h-3v-1h-4v6h4v-1h3v2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2zm14 0h-3v-1h-4v6h4v-1h3v2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-subtitles">
      <path d="M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM8 24h8v4H8v-4zm20 12H8v-4h20v4zm12 0h-8v-4h8v4zm0-8H20v-4h20v4z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-fullscreen-enter">
      <path d="M14 28h-4v10h10v-4h-6v-6zm-4-8h4v-6h6v-4H10v10zm24 14h-6v4h10V28h-4v6zm-6-24v4h6v6h4V10H28z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-fullscreen-exit">
      <path d="M10 32h6v6h4V28H10v4zm6-16h-6v4h10V10h-4v6zm12 22h4v-6h6v-4H28v10zm4-22v-6h-4v10h10v-4h-6z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-play-circle">
      <path d="M20 33l12-9-12-9v18zm4-29C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-volume-mute">
      <path d="M33 24c0-3.53-2.04-6.58-5-8.05v4.42l4.91 4.91c.06-.42.09-.85.09-1.28zm5 0c0 1.88-.41 3.65-1.08 5.28l3.03 3.03C41.25 29.82 42 27 42 24c0-8.56-5.99-15.72-14-17.54v4.13c5.78 1.72 10 7.07 10 13.41zM8.55 6L6 8.55 15.45 18H6v12h8l10 10V26.55l8.51 8.51c-1.34 1.03-2.85 1.86-4.51 2.36v4.13a17.94 17.94 0 0 0 7.37-3.62L39.45 42 42 39.45l-18-18L8.55 6zM24 8l-4.18 4.18L24 16.36V8z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-volume-low">
      <path d="M14 18v12h8l10 10V8L22 18h-8z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-volume-medium">
      <path d="M37 24c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zm-27-6v12h8l10 10V8L18 18h-8z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-volume-high">
      <path d="M6 18v12h8l10 10V8L14 18H6zm27 6c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zM28 6.46v4.13c5.78 1.72 10 7.07 10 13.41s-4.22 11.69-10 13.41v4.13c8.01-1.82 14-8.97 14-17.54S36.01 8.28 28 6.46z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-spinner">
      <path d="M18.8 21l9.53-16.51C26.94 4.18 25.49 4 24 4c-4.8 0-9.19 1.69-12.64 4.51l7.33 12.69.11-.2zm24.28-3c-1.84-5.85-6.3-10.52-11.99-12.68L23.77 18h19.31zm.52 2H28.62l.58 1 9.53 16.5C41.99 33.94 44 29.21 44 24c0-1.37-.14-2.71-.4-4zm-26.53 4l-7.8-13.5C6.01 14.06 4 18.79 4 24c0 1.37.14 2.71.4 4h14.98l-2.31-4zM4.92 30c1.84 5.85 6.3 10.52 11.99 12.68L24.23 30H4.92zm22.54 0l-7.8 13.51c1.4.31 2.85.49 4.34.49 4.8 0 9.19-1.69 12.64-4.51L29.31 26.8 27.46 30z"></path>
    </symbol>
    <symbol viewBox="0 0 24 24" id="vjs-icon-hd">
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm2-6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm1.5 4.5h2v-3h-2v3z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-chapters">
      <path d="M6 26h4v-4H6v4zm0 8h4v-4H6v4zm0-16h4v-4H6v4zm8 8h28v-4H14v4zm0 8h28v-4H14v4zm0-20v4h28v-4H14z"></path>
    </symbol>
    <symbol viewBox="0 0 40 40" id="vjs-icon-downloading">
      <path d="M18.208 36.875q-3.208-.292-5.979-1.729-2.771-1.438-4.812-3.729-2.042-2.292-3.188-5.229-1.146-2.938-1.146-6.23 0-6.583 4.334-11.416 4.333-4.834 10.833-5.5v3.166q-5.167.75-8.583 4.646Q6.25 14.75 6.25 19.958q0 5.209 3.396 9.104 3.396 3.896 8.562 4.646zM20 28.417L11.542 20l2.083-2.083 4.917 4.916v-11.25h2.916v11.25l4.875-4.916L28.417 20zm1.792 8.458v-3.167q1.833-.25 3.541-.958 1.709-.708 3.167-1.875l2.333 2.292q-1.958 1.583-4.25 2.541-2.291.959-4.791 1.167zm6.791-27.792q-1.541-1.125-3.25-1.854-1.708-.729-3.541-1.021V3.042q2.5.25 4.77 1.208 2.271.958 4.271 2.5zm4.584 21.584l-2.25-2.25q1.166-1.5 1.854-3.209.687-1.708.937-3.541h3.209q-.292 2.5-1.229 4.791-.938 2.292-2.521 4.209zm.541-12.417q-.291-1.833-.958-3.562-.667-1.73-1.833-3.188l2.375-2.208q1.541 1.916 2.458 4.208.917 2.292 1.167 4.75z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-file-download">
      <path d="M10.8 40.55q-1.35 0-2.375-1T7.4 37.15v-7.7h3.4v7.7h26.35v-7.7h3.4v7.7q0 1.4-1 2.4t-2.4 1zM24 32.1L13.9 22.05l2.45-2.45 5.95 5.95V7.15h3.4v18.4l5.95-5.95 2.45 2.45z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-file-download-done">
      <path d="M9.8 40.5v-3.45h28.4v3.45zm9.2-9.05L7.4 19.85l2.45-2.35L19 26.65l19.2-19.2 2.4 2.4z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-file-download-off">
      <path d="M4.9 4.75L43.25 43.1 41 45.3l-4.75-4.75q-.05.05-.075.025-.025-.025-.075-.025H10.8q-1.35 0-2.375-1T7.4 37.15v-7.7h3.4v7.7h22.05l-7-7-1.85 1.8L13.9 21.9l1.85-1.85L2.7 7zm26.75 14.7l2.45 2.45-3.75 3.8-2.45-2.5zM25.7 7.15V21.1l-3.4-3.45V7.15z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-share">
      <path d="M36 32.17c-1.52 0-2.89.59-3.93 1.54L17.82 25.4c.11-.45.18-.92.18-1.4s-.07-.95-.18-1.4l14.1-8.23c1.07 1 2.5 1.62 4.08 1.62 3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6c0 .48.07.95.18 1.4l-14.1 8.23c-1.07-1-2.5-1.62-4.08-1.62-3.31 0-6 2.69-6 6s2.69 6 6 6c1.58 0 3.01-.62 4.08-1.62l14.25 8.31c-.1.42-.16.86-.16 1.31A5.83 5.83 0 1 0 36 32.17z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-cog">
      <path d="M38.86 25.95c.08-.64.14-1.29.14-1.95s-.06-1.31-.14-1.95l4.23-3.31c.38-.3.49-.84.24-1.28l-4-6.93c-.25-.43-.77-.61-1.22-.43l-4.98 2.01c-1.03-.79-2.16-1.46-3.38-1.97L29 4.84c-.09-.47-.5-.84-1-.84h-8c-.5 0-.91.37-.99.84l-.75 5.3a14.8 14.8 0 0 0-3.38 1.97L9.9 10.1a1 1 0 0 0-1.22.43l-4 6.93c-.25.43-.14.97.24 1.28l4.22 3.31C9.06 22.69 9 23.34 9 24s.06 1.31.14 1.95l-4.22 3.31c-.38.3-.49.84-.24 1.28l4 6.93c.25.43.77.61 1.22.43l4.98-2.01c1.03.79 2.16 1.46 3.38 1.97l.75 5.3c.08.47.49.84.99.84h8c.5 0 .91-.37.99-.84l.75-5.3a14.8 14.8 0 0 0 3.38-1.97l4.98 2.01a1 1 0 0 0 1.22-.43l4-6.93c.25-.43.14-.97-.24-1.28l-4.22-3.31zM24 31c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-square">
      <path d="M36 8H12c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 28H12V12h24v24z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-circle">
      <circle cx="24" cy="24" r="20"></circle>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-circle-outline">
      <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-circle-inner-circle">
      <path d="M24 4C12.97 4 4 12.97 4 24s8.97 20 20 20 20-8.97 20-20S35.03 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm6-16c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6 6 2.69 6 6z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-cancel">
      <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 27.17L31.17 34 24 26.83 16.83 34 14 31.17 21.17 24 14 16.83 16.83 14 24 21.17 31.17 14 34 16.83 26.83 24 34 31.17z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-replay">
      <path d="M24 10V2L14 12l10 10v-8c6.63 0 12 5.37 12 12s-5.37 12-12 12-12-5.37-12-12H8c0 8.84 7.16 16 16 16s16-7.16 16-16-7.16-16-16-16z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-repeat">
      <path d="M14 14h20v6l8-8-8-8v6H10v12h4v-8zm20 20H14v-6l-8 8 8 8v-6h24V26h-4v8z"></path>
    </symbol>
    <symbol viewBox="0 96 48 48" id="vjs-icon-replay-5">
      <path d="M17.689 98l-8.697 8.696 8.697 8.697 2.486-2.485-4.32-4.319h1.302c4.93 0 9.071 1.722 12.424 5.165 3.352 3.443 5.029 7.638 5.029 12.584h3.55c0-2.958-.553-5.73-1.658-8.313-1.104-2.583-2.622-4.841-4.555-6.774-1.932-1.932-4.19-3.45-6.773-4.555-2.584-1.104-5.355-1.657-8.313-1.657H15.5l4.615-4.615zm-8.08 21.659v13.861h11.357v5.008H9.609V143h12.7c.834 0 1.55-.298 2.146-.894.596-.597.895-1.31.895-2.145v-7.781c0-.835-.299-1.55-.895-2.147a2.929 2.929 0 0 0-2.147-.894h-8.227v-5.096H25.35v-4.384z"></path>
    </symbol>
    <symbol viewBox="0 96 48 48" id="vjs-icon-replay-10">
      <path d="M42.315 125.63c0-4.997-1.694-9.235-5.08-12.713-3.388-3.479-7.571-5.218-12.552-5.218h-1.315l4.363 4.363-2.51 2.51-8.787-8.786L25.221 97l2.45 2.45-4.662 4.663h1.375c2.988 0 5.788.557 8.397 1.673 2.61 1.116 4.892 2.65 6.844 4.602 1.953 1.953 3.487 4.234 4.602 6.844 1.116 2.61 1.674 5.41 1.674 8.398zM8.183 142v-19.657H3.176V117.8h9.643V142zm13.63 0c-1.156 0-2.127-.393-2.912-1.178-.778-.778-1.168-1.746-1.168-2.902v-16.04c0-1.156.393-2.127 1.178-2.912.779-.779 1.746-1.168 2.902-1.168h7.696c1.156 0 2.126.392 2.911 1.177.779.78 1.168 1.747 1.168 2.903v16.04c0 1.156-.392 2.127-1.177 2.912-.779.779-1.746 1.168-2.902 1.168zm.556-4.636h6.583v-15.02H22.37z"></path>
    </symbol>
    <symbol viewBox="0 96 48 48" id="vjs-icon-replay-30">
      <path d="M26.047 97l-8.733 8.732 8.733 8.733 2.496-2.494-4.336-4.338h1.307c4.95 0 9.108 1.73 12.474 5.187 3.367 3.458 5.051 7.668 5.051 12.635h3.565c0-2.97-.556-5.751-1.665-8.346-1.109-2.594-2.633-4.862-4.574-6.802-1.94-1.941-4.208-3.466-6.803-4.575-2.594-1.109-5.375-1.664-8.345-1.664H23.85l4.634-4.634zM2.555 117.531v4.688h10.297v5.25H5.873v4.687h6.979v5.156H2.555V142H13.36c1.061 0 1.95-.395 2.668-1.186.718-.79 1.076-1.772 1.076-2.94v-16.218c0-1.168-.358-2.149-1.076-2.94-.717-.79-1.607-1.185-2.668-1.185zm22.482.14c-1.149 0-2.11.39-2.885 1.165-.78.78-1.172 1.744-1.172 2.893v15.943c0 1.149.388 2.11 1.163 2.885.78.78 1.745 1.172 2.894 1.172h7.649c1.148 0 2.11-.388 2.884-1.163.78-.78 1.17-1.745 1.17-2.894v-15.943c0-1.15-.386-2.111-1.16-2.885-.78-.78-1.746-1.172-2.894-1.172zm.553 4.518h6.545v14.93H25.59z"></path>
    </symbol>
    <symbol viewBox="0 96 48 48" id="vjs-icon-forward-5">
      <path d="M29.508 97l-2.431 2.43 4.625 4.625h-1.364c-2.965 0-5.742.554-8.332 1.66-2.589 1.107-4.851 2.629-6.788 4.566-1.937 1.937-3.458 4.2-4.565 6.788-1.107 2.59-1.66 5.367-1.66 8.331h3.557c0-4.957 1.68-9.16 5.04-12.611 3.36-3.45 7.51-5.177 12.451-5.177h1.304l-4.326 4.33 2.49 2.49 8.715-8.716zm-9.783 21.61v13.89h11.382v5.018H19.725V142h12.727a2.93 2.93 0 0 0 2.15-.896 2.93 2.93 0 0 0 .896-2.15v-7.798c0-.837-.299-1.554-.896-2.152a2.93 2.93 0 0 0-2.15-.896h-8.245V123h11.29v-4.392z"></path>
    </symbol>
    <symbol viewBox="0 96 48 48" id="vjs-icon-forward-10">
      <path d="M23.119 97l-2.386 2.383 4.538 4.538h-1.339c-2.908 0-5.633.543-8.173 1.63-2.54 1.085-4.76 2.577-6.66 4.478-1.9 1.9-3.392 4.12-4.478 6.66-1.085 2.54-1.629 5.264-1.629 8.172h3.49c0-4.863 1.648-8.986 4.944-12.372 3.297-3.385 7.368-5.078 12.216-5.078h1.279l-4.245 4.247 2.443 2.442 8.55-8.55zm-9.52 21.45v4.42h4.871V142h4.513v-23.55zm18.136 0c-1.125 0-2.066.377-2.824 1.135-.764.764-1.148 1.709-1.148 2.834v15.612c0 1.124.38 2.066 1.139 2.824.764.764 1.708 1.145 2.833 1.145h7.489c1.125 0 2.066-.378 2.824-1.136.764-.764 1.145-1.709 1.145-2.833v-15.612c0-1.125-.378-2.067-1.136-2.825-.764-.764-1.708-1.145-2.833-1.145zm.54 4.42h6.408v14.617h-6.407z"></path>
    </symbol>
    <symbol viewBox="0 96 48 48" id="vjs-icon-forward-30">
      <path d="M25.549 97l-2.437 2.434 4.634 4.635H26.38c-2.97 0-5.753.555-8.347 1.664-2.594 1.109-4.861 2.633-6.802 4.574-1.94 1.94-3.465 4.207-4.574 6.802-1.109 2.594-1.664 5.377-1.664 8.347h3.565c0-4.967 1.683-9.178 5.05-12.636 3.366-3.458 7.525-5.187 12.475-5.187h1.307l-4.335 4.338 2.495 2.494 8.732-8.732zm-11.553 20.53v4.689h10.297v5.249h-6.978v4.688h6.978v5.156H13.996V142h10.808c1.06 0 1.948-.395 2.666-1.186.718-.79 1.077-1.771 1.077-2.94v-16.217c0-1.169-.36-2.15-1.077-2.94-.718-.79-1.605-1.186-2.666-1.186zm21.174.168c-1.149 0-2.11.389-2.884 1.163-.78.78-1.172 1.745-1.172 2.894v15.942c0 1.15.388 2.11 1.162 2.885.78.78 1.745 1.17 2.894 1.17h7.649c1.149 0 2.11-.386 2.885-1.16.78-.78 1.17-1.746 1.17-2.895v-15.942c0-1.15-.387-2.11-1.161-2.885-.78-.78-1.745-1.172-2.894-1.172zm.552 4.516h6.542v14.931h-6.542z"></path>
    </symbol>
    <symbol viewBox="0 0 512 512" id="vjs-icon-audio-description">
      <g fill-rule="evenodd"><path d="M227.29 381.351V162.993c50.38-1.017 89.108-3.028 117.631 17.126 27.374 19.342 48.734 56.965 44.89 105.325-4.067 51.155-41.335 94.139-89.776 98.475-24.085 2.155-71.972 0-71.972 0s-.84-1.352-.773-2.568m48.755-54.804c31.43 1.26 53.208-16.633 56.495-45.386 4.403-38.51-21.188-63.552-58.041-60.796v103.612c-.036 1.466.575 2.22 1.546 2.57"></path><path d="M383.78 381.328c13.336 3.71 17.387-11.06 23.215-21.408 12.722-22.571 22.294-51.594 22.445-84.774.221-47.594-18.343-82.517-35.6-106.182h-8.51c-.587 3.874 2.226 7.315 3.865 10.276 13.166 23.762 25.367 56.553 25.54 94.194.2 43.176-14.162 79.278-30.955 107.894"></path><path d="M425.154 381.328c13.336 3.71 17.384-11.061 23.215-21.408 12.721-22.571 22.291-51.594 22.445-84.774.221-47.594-18.343-82.517-35.6-106.182h-8.511c-.586 3.874 2.226 7.315 3.866 10.276 13.166 23.762 25.367 56.553 25.54 94.194.2 43.176-14.162 79.278-30.955 107.894"></path><path d="M466.26 381.328c13.337 3.71 17.385-11.061 23.216-21.408 12.722-22.571 22.292-51.594 22.445-84.774.221-47.594-18.343-82.517-35.6-106.182h-8.51c-.587 3.874 2.225 7.315 3.865 10.276 13.166 23.762 25.367 56.553 25.54 94.194.2 43.176-14.162 79.278-30.955 107.894M4.477 383.005H72.58l18.573-28.484 64.169-.135s.065 19.413.065 28.62h48.756V160.307h-58.816c-5.653 9.537-140.85 222.697-140.85 222.697zm152.667-145.282v71.158l-40.453-.27 40.453-70.888z"></path></g>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-next-item">
      <path d="M12 36l17-12-17-12v24zm20-24v24h4V12h-4z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-previous-item">
      <path d="M12 12h4v24h-4zm7 12l17 12V12z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-shuffle">
      <path d="M21.17 18.34L10.83 8 8 10.83l10.34 10.34 2.83-2.83zM29 8l4.09 4.09L8 37.17 10.83 40l25.09-25.09L40 19V8H29zm.66 18.83l-2.83 2.83 6.26 6.26L29 40h11V29l-4.09 4.09-6.25-6.26z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-cast">
      <path d="M42 6H6c-2.21 0-4 1.79-4 4v6h4v-6h36v28H28v4h14c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM2 36v6h6c0-3.31-2.69-6-6-6zm0-8v4c5.52 0 10 4.48 10 10h4c0-7.73-6.27-14-14-14zm0-8v4c9.94 0 18 8.06 18 18h4c0-12.15-9.85-22-22-22z"></path>
    </symbol>
    <symbol viewBox="0 0 48 48" id="vjs-icon-picture-in-picture-enter">
      <path d="M38 22H22v11.99h16V22zm8 16V9.96C46 7.76 44.2 6 42 6H6C3.8 6 2 7.76 2 9.96V38c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4zm-4 .04H6V9.94h36v28.1z"></path>
    </symbol>
    <symbol viewBox="0 0 22 18" id="vjs-icon-picture-in-picture-exit">
      <path d="M18 4H4v10h14V4zm4 12V1.98C22 .88 21.1 0 20 0H2C.9 0 0 .88 0 1.98V16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H2V1.97h18v14.05z"></path>
      <path fill="none" d="M-1-3h24v24H-1z"></path>
    </symbol>
    <symbol viewBox="0 0 1792 1792" id="vjs-icon-facebook">
      <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759H734V905H479V609h255V391q0-186 104-288.5T1115 0q147 0 228 12z"></path>
    </symbol>
    <symbol viewBox="0 0 1792 1792" id="vjs-icon-linkedin">
      <path d="M477 625v991H147V625h330zm21-306q1 73-50.5 122T312 490h-2q-82 0-132-49t-50-122q0-74 51.5-122.5T314 148t133 48.5T498 319zm1166 729v568h-329v-530q0-105-40.5-164.5T1168 862q-63 0-105.5 34.5T999 982q-11 30-11 81v553H659q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5T1285 602q171 0 275 113.5t104 332.5z"></path>
    </symbol>
    <symbol viewBox="0 0 1792 1792" id="vjs-icon-twitter">
      <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5T1369.5 1125 1185 1335.5t-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5T285 1033q33 5 61 5 43 0 85-11-112-23-185.5-111.5T172 710v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5T884 653q-8-38-8-74 0-134 94.5-228.5T1199 256q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
    </symbol>
    <symbol viewBox="0 0 1792 1792" id="vjs-icon-tumblr">
      <path d="M1328 1329l80 237q-23 35-111 66t-177 32q-104 2-190.5-26T787 1564t-95-106-55.5-120-16.5-118V676H452V461q72-26 129-69.5t91-90 58-102 34-99T779 12q1-5 4.5-8.5T791 0h244v424h333v252h-334v518q0 30 6.5 56t22.5 52.5 49.5 41.5 81.5 14q78-2 134-29z"></path>
    </symbol>
    <symbol viewBox="0 0 1792 1792" id="vjs-icon-pinterest">
      <path d="M1664 896q0 209-103 385.5T1281.5 1561 896 1664q-111 0-218-32 59-93 78-164 9-34 54-211 20 39 73 67.5t114 28.5q121 0 216-68.5t147-188.5 52-270q0-114-59.5-214T1180 449t-255-63q-105 0-196 29t-154.5 77-109 110.5-67 129.5T377 866q0 104 40 183t117 111q30 12 38-20 2-7 8-31t8-30q6-23-11-43-51-61-51-151 0-151 104.5-259.5T904 517q151 0 235.5 82t84.5 213q0 170-68.5 289T980 1220q-61 0-98-43.5T859 1072q8-35 26.5-93.5t30-103T927 800q0-50-27-83t-77-33q-62 0-105 57t-43 142q0 73 25 122l-99 418q-17 70-13 177-206-91-333-281T128 896q0-209 103-385.5T510.5 231 896 128t385.5 103T1561 510.5 1664 896z"></path>
    </symbol>
  </defs>
</svg>`, oo = _r ? 10009 : vr ? 461 : 8, so = { codes: { play: 415, pause: 19, ff: 417, rw: 412, back: oo }, names: { 415: `play`, 19: `pause`, 417: `ff`, 412: `rw`, [oo]: `back` }, isEventKey(e14, t2) {
  return t2 = t2.toLowerCase(), !!(this.names[e14.keyCode] && this.names[e14.keyCode] === t2);
}, getEventName(e14) {
  if (this.names[e14.keyCode]) return this.names[e14.keyCode];
  if (this.codes[e14.code]) {
    let t2 = this.codes[e14.code];
    return this.names[t2];
  }
  return null;
} }, co = 5, lo = class extends ki {
  constructor(e14) {
    super(), this.player_ = e14, this.focusableComponents = [], this.isListening_ = false, this.isPaused_ = false, this.onKeyDown_ = this.onKeyDown_.bind(this), this.lastFocusedComponent_ = null;
  }
  start() {
    this.isListening_ ||= (this.player_.on(`keydown`, this.onKeyDown_), this.player_.on(`modalKeydown`, this.onKeyDown_), this.player_.on(`loadedmetadata`, () => {
      this.focus(this.updateFocusableComponents()[0]);
    }), this.player_.on(`modalclose`, () => {
      this.refocusComponent();
    }), this.player_.on(`focusin`, this.handlePlayerFocus_.bind(this)), this.player_.on(`focusout`, this.handlePlayerBlur_.bind(this)), true);
  }
  stop() {
    this.player_.off(`keydown`, this.onKeyDown_), this.isListening_ = false;
  }
  onKeyDown_(e14) {
    let t2 = e14.originalEvent ? e14.originalEvent : e14;
    if (_.default.isEventKey(t2, `left`) || _.default.isEventKey(t2, `up`) || _.default.isEventKey(t2, `right`) || _.default.isEventKey(t2, `down`)) {
      if (this.isPaused_) return;
      t2.preventDefault();
      let e15 = (0, _.default)(t2);
      this.move(e15);
    } else if (so.isEventKey(t2, `play`) || so.isEventKey(t2, `pause`) || so.isEventKey(t2, `ff`) || so.isEventKey(t2, `rw`)) {
      t2.preventDefault();
      let e15 = so.getEventName(t2);
      this.performMediaAction_(e15);
    } else so.isEventKey(t2, `Back`) && e14.target && e14.target.closeable() && (t2.preventDefault(), e14.target.close());
  }
  performMediaAction_(e14) {
    if (this.player_) switch (e14) {
      case `play`:
        this.player_.paused() && this.player_.play();
        break;
      case `pause`:
        this.player_.paused() || this.player_.pause();
        break;
      case `ff`:
        this.userSeek_(this.player_.currentTime() + co);
        break;
      case `rw`:
        this.userSeek_(this.player_.currentTime() - co);
        break;
    }
  }
  userSeek_(e14) {
    this.player_.liveTracker && this.player_.liveTracker.isLive() && this.player_.liveTracker.nextSeekedFromUser(), this.player_.currentTime(e14);
  }
  pause() {
    this.isPaused_ = true;
  }
  resume() {
    this.isPaused_ = false;
  }
  handlePlayerBlur_(e14) {
    let t2 = e14.relatedTarget, n2 = null, r2 = this.getCurrentComponent(e14.target);
    t2 && (n2 = !!t2.closest(`.video-js`), t2.classList.contains(`vjs-text-track-settings`) && !this.isPaused_ && this.searchForTrackSelect_()), (!e14.currentTarget.contains(e14.relatedTarget) && !n2 || !t2) && (r2.name() === `CloseButton` ? this.refocusComponent() : (this.pause(), r2 && r2.el() && (this.lastFocusedComponent_ = r2)));
  }
  handlePlayerFocus_() {
    this.getCurrentComponent() && this.getCurrentComponent().getIsFocusable() && this.resume();
  }
  updateFocusableComponents() {
    let e14 = this.player_, t2 = [];
    function n2(e15) {
      for (let r2 of e15) r2.hasOwnProperty(`el_`) && r2.getIsFocusable() && r2.getIsAvailableToBeFocused(r2.el()) && t2.push(r2), r2.hasOwnProperty(`children_`) && r2.children_.length > 0 && n2(r2.children_);
    }
    return e14.children_.forEach((e15) => {
      if (e15.hasOwnProperty(`el_`)) if (e15.getIsFocusable && e15.getIsAvailableToBeFocused && e15.getIsFocusable() && e15.getIsAvailableToBeFocused(e15.el())) {
        t2.push(e15);
        return;
      } else e15.hasOwnProperty(`children_`) && e15.children_.length > 0 ? n2(e15.children_) : e15.hasOwnProperty(`items`) && e15.items.length > 0 ? n2(e15.items) : this.findSuitableDOMChild(e15) && t2.push(e15);
    }), this.focusableComponents = t2, this.focusableComponents;
  }
  findSuitableDOMChild(e14) {
    function t2(n2) {
      if (e14.getIsFocusable(n2) && e14.getIsAvailableToBeFocused(n2)) return n2;
      for (let e15 = 0; e15 < n2.children.length; e15++) {
        let r2 = n2.children[e15], i2 = t2(r2);
        if (i2) return i2;
      }
      return null;
    }
    return t2(e14.el());
  }
  getCurrentComponent(e14) {
    this.updateFocusableComponents();
    let t2 = e14 || document.activeElement;
    if (this.focusableComponents.length) {
      for (let e15 of this.focusableComponents) if (e15.el() === t2) return e15;
    }
  }
  add(e14) {
    let t2 = [...this.focusableComponents];
    e14.hasOwnProperty(`el_`) && e14.getIsFocusable() && e14.getIsAvailableToBeFocused(e14.el()) && t2.push(e14), this.focusableComponents = t2, this.trigger({ type: `focusableComponentsChanged`, focusableComponents: this.focusableComponents });
  }
  remove(e14) {
    for (let t2 = 0; t2 < this.focusableComponents.length; t2++) if (this.focusableComponents[t2].name() === e14.name()) {
      this.focusableComponents.splice(t2, 1), this.trigger({ type: `focusableComponentsChanged`, focusableComponents: this.focusableComponents });
      return;
    }
  }
  clear() {
    this.focusableComponents.length > 0 && (this.focusableComponents = [], this.trigger({ type: `focusableComponentsChanged`, focusableComponents: this.focusableComponents }));
  }
  move(e14) {
    let t2 = this.getCurrentComponent();
    if (!t2) return;
    let n2 = t2.getPositions(), r2 = this.focusableComponents.filter((r3) => r3 !== t2 && this.isInDirection_(n2.boundingClientRect, r3.getPositions().boundingClientRect, e14)), i2 = this.findBestCandidate_(n2.center, r2, e14);
    i2 ? this.focus(i2) : this.trigger({ type: `endOfFocusableComponents`, direction: e14, focusedComponent: t2 });
  }
  findBestCandidate_(e14, t2, n2) {
    let r2 = 1 / 0, i2 = null;
    for (let a2 of t2) {
      let t3 = a2.getPositions().center, o2 = this.calculateDistance_(e14, t3, n2);
      o2 < r2 && (r2 = o2, i2 = a2);
    }
    return i2;
  }
  isInDirection_(e14, t2, n2) {
    switch (n2) {
      case `right`:
        return t2.left >= e14.right;
      case `left`:
        return t2.right <= e14.left;
      case `down`:
        return t2.top >= e14.bottom;
      case `up`:
        return t2.bottom <= e14.top;
      default:
        return false;
    }
  }
  refocusComponent() {
    if (this.lastFocusedComponent_) {
      this.player_.userActive() || this.player_.userActive(true), this.updateFocusableComponents();
      for (let e14 = 0; e14 < this.focusableComponents.length; e14++) if (this.focusableComponents[e14].name() === this.lastFocusedComponent_.name()) {
        this.focus(this.focusableComponents[e14]);
        return;
      }
    } else this.focus(this.updateFocusableComponents()[0]);
  }
  focus(e14) {
    e14.getIsAvailableToBeFocused(e14.el()) ? e14.focus() : this.findSuitableDOMChild(e14) && this.findSuitableDOMChild(e14).focus();
  }
  calculateDistance_(e14, t2, n2) {
    let r2 = Math.abs(e14.x - t2.x), i2 = Math.abs(e14.y - t2.y), a2;
    switch (n2) {
      case `right`:
      case `left`:
        a2 = r2 + i2 * 100;
        break;
      case `up`:
        a2 = i2 * 2 + r2 * 0.5;
        break;
      case `down`:
        a2 = i2 * 5 + r2;
        break;
      default:
        a2 = r2 + i2;
    }
    return a2;
  }
  searchForTrackSelect_() {
    let e14 = this;
    for (let t2 of e14.updateFocusableComponents()) if (t2.constructor.name === `TextTrackSelect`) {
      e14.focus(t2);
      break;
    }
  }
}, uo = class extends q {
  constructor(e14, t2, n2) {
    let r2 = B({ createEl: false }, t2);
    if (super(e14, r2, n2), !t2.playerOptions.sources || t2.playerOptions.sources.length === 0) for (let n3 = 0, r3 = t2.playerOptions.techOrder; n3 < r3.length; n3++) {
      let t3 = K(r3[n3]), i2 = Y.getTech(t3);
      if (t3 || (i2 = q.getComponent(t3)), i2 && i2.isSupported()) {
        e14.loadTech_(t3);
        break;
      }
    }
    else e14.src(t2.playerOptions.sources);
  }
};
q.registerComponent(`MediaLoader`, uo);
var fo = class extends q {
  constructor(e14, t2) {
    super(e14, t2), this.options_.controlText && this.controlText(this.options_.controlText), this.handleMouseOver_ = (e15) => this.handleMouseOver(e15), this.handleMouseOut_ = (e15) => this.handleMouseOut(e15), this.handleClick_ = (e15) => this.handleClick(e15), this.handleKeyDown_ = (e15) => this.handleKeyDown(e15), this.emitTapEvents(), this.enable();
  }
  createEl(e14 = `div`, t2 = {}, n2 = {}) {
    t2 = Object.assign({ className: this.buildCSSClass(), tabIndex: 0 }, t2), e14 === `button` && z.error(`Creating a ClickableComponent with an HTML element of ${e14} is not supported; use a Button instead.`), n2 = Object.assign({ role: `button` }, n2), this.tabIndex_ = t2.tabIndex;
    let r2 = U(e14, t2, n2);
    return this.player_.options_.experimentalSvgIcons || r2.appendChild(U(`span`, { className: `vjs-icon-placeholder` }, { "aria-hidden": true })), this.createControlTextEl(r2), r2;
  }
  dispose() {
    this.controlTextEl_ = null, super.dispose();
  }
  createControlTextEl(e14) {
    return this.controlTextEl_ = U(`span`, { className: `vjs-control-text` }, { "aria-live": `polite` }), e14 && e14.appendChild(this.controlTextEl_), this.controlText(this.controlText_, e14), this.controlTextEl_;
  }
  controlText(e14, t2 = this.el()) {
    if (e14 === void 0) return this.controlText_ || `Need Text`;
    let n2 = this.localize(e14);
    this.controlText_ = e14, W(this.controlTextEl_, n2), !this.nonIconControl && !this.player_.options_.noUITitleAttributes && t2.setAttribute(`title`, n2);
  }
  buildCSSClass() {
    return `vjs-control vjs-button ${super.buildCSSClass()}`;
  }
  enable() {
    this.enabled_ || (this.enabled_ = true, this.removeClass(`vjs-disabled`), this.el_.setAttribute(`aria-disabled`, `false`), this.tabIndex_ !== void 0 && this.el_.setAttribute(`tabIndex`, this.tabIndex_), this.on([`tap`, `click`], this.handleClick_), this.on(`keydown`, this.handleKeyDown_));
  }
  disable() {
    this.enabled_ = false, this.addClass(`vjs-disabled`), this.el_.setAttribute(`aria-disabled`, `true`), this.tabIndex_ !== void 0 && this.el_.removeAttribute(`tabIndex`), this.off(`mouseover`, this.handleMouseOver_), this.off(`mouseout`, this.handleMouseOut_), this.off([`tap`, `click`], this.handleClick_), this.off(`keydown`, this.handleKeyDown_);
  }
  handleLanguagechange() {
    this.controlText(this.controlText_);
  }
  handleClick(e14) {
    this.options_.clickHandler && this.options_.clickHandler.call(this, arguments);
  }
  handleKeyDown(e14) {
    _.default.isEventKey(e14, `Space`) || _.default.isEventKey(e14, `Enter`) ? (e14.preventDefault(), e14.stopPropagation(), this.trigger(`click`)) : super.handleKeyDown(e14);
  }
};
q.registerComponent(`ClickableComponent`, fo);
var po = class extends fo {
  constructor(e14, t2) {
    super(e14, t2), this.update(), this.update_ = (e15) => this.update(e15), e14.on(`posterchange`, this.update_);
  }
  dispose() {
    this.player().off(`posterchange`, this.update_), super.dispose();
  }
  createEl() {
    return U(`div`, { className: `vjs-poster` });
  }
  crossOrigin(e14) {
    if (e14 === void 0) return this.$(`img`) ? this.$(`img`).crossOrigin : this.player_.tech_ && this.player_.tech_.isReady_ ? this.player_.crossOrigin() : this.player_.options_.crossOrigin || this.player_.options_.crossorigin || null;
    if (e14 !== null && e14 !== `anonymous` && e14 !== `use-credentials`) {
      this.player_.log.warn(`crossOrigin must be null,  "anonymous" or "use-credentials", given "${e14}"`);
      return;
    }
    this.$(`img`) && (this.$(`img`).crossOrigin = e14);
  }
  update(e14) {
    let t2 = this.player().poster();
    this.setSrc(t2), t2 ? this.show() : this.hide();
  }
  setSrc(e14) {
    if (!e14) {
      this.el_.textContent = ``;
      return;
    }
    this.$(`img`) || this.el_.appendChild(U(`picture`, { className: `vjs-poster`, tabIndex: -1 }, {}, U(`img`, { loading: `lazy`, crossOrigin: this.crossOrigin() }, { alt: `` }))), this.$(`img`).src = e14;
  }
  handleClick(e14) {
    this.player_.controls() && (this.player_.tech(true) && this.player_.tech(true).focus(), this.player_.paused() ? ia(this.player_.play()) : this.player_.pause());
  }
};
po.prototype.crossorigin = po.prototype.crossOrigin, q.registerComponent(`PosterImage`, po);
var mo = `#222`, ho = `#ccc`, go = { monospace: `monospace`, sansSerif: `sans-serif`, serif: `serif`, monospaceSansSerif: `"Andale Mono", "Lucida Console", monospace`, monospaceSerif: `"Courier New", monospace`, proportionalSansSerif: `sans-serif`, proportionalSerif: `serif`, casual: `"Comic Sans MS", Impact, fantasy`, script: `"Monotype Corsiva", cursive`, smallcaps: `"Andale Mono", "Lucida Console", monospace, sans-serif` };
function _o(e14, t2) {
  let n2;
  if (e14.length === 4) n2 = e14[1] + e14[1] + e14[2] + e14[2] + e14[3] + e14[3];
  else if (e14.length === 7) n2 = e14.slice(1);
  else throw Error(`Invalid color code provided, ` + e14 + `; must be formatted as e.g. #f0e or #f604e2.`);
  return `rgba(` + parseInt(n2.slice(0, 2), 16) + `,` + parseInt(n2.slice(2, 4), 16) + `,` + parseInt(n2.slice(4, 6), 16) + `,` + t2 + `)`;
}
function vo(e14, t2, n2) {
  try {
    e14.style[t2] = n2;
  } catch {
    return;
  }
}
function yo(e14) {
  return e14 ? `${e14}px` : ``;
}
var bo = class extends q {
  constructor(e14, t2, n2) {
    super(e14, t2, n2);
    let r2 = (e15) => this.updateDisplay(e15), i2 = (e15) => {
      this.updateDisplayOverlay(), this.updateDisplay(e15);
    };
    e14.on(`loadstart`, (e15) => this.toggleDisplay(e15)), e14.on(`texttrackchange`, r2), e14.on(`loadedmetadata`, (e15) => {
      this.updateDisplayOverlay(), this.preselectTrack(e15);
    }), e14.ready(G(this, function() {
      if (e14.tech_ && e14.tech_.featuresNativeTextTracks) {
        this.hide();
        return;
      }
      e14.on(`fullscreenchange`, i2), e14.on(`playerresize`, i2);
      let t3 = h.default.screen.orientation || h.default, n3 = h.default.screen.orientation ? `change` : `orientationchange`;
      t3.addEventListener(n3, i2), e14.on(`dispose`, () => t3.removeEventListener(n3, i2));
      let r3 = this.options_.playerOptions.tracks || [];
      for (let e15 = 0; e15 < r3.length; e15++) this.player_.addRemoteTextTrack(r3[e15], true);
      this.preselectTrack();
    }));
  }
  preselectTrack() {
    let e14 = { captions: 1, subtitles: 1 }, t2 = this.player_.textTracks(), n2 = this.player_.cache_.selectedLanguage, r2, i2, a2;
    for (let o2 = 0; o2 < t2.length; o2++) {
      let s2 = t2[o2];
      n2 && n2.enabled && n2.language && n2.language === s2.language && s2.kind in e14 ? s2.kind === n2.kind ? a2 = s2 : a2 ||= s2 : n2 && !n2.enabled ? (a2 = null, r2 = null, i2 = null) : s2.default && (s2.kind === `descriptions` && !r2 ? r2 = s2 : s2.kind in e14 && !i2 && (i2 = s2));
    }
    a2 ? a2.mode = `showing` : i2 ? i2.mode = `showing` : r2 && (r2.mode = `showing`);
  }
  toggleDisplay() {
    this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show();
  }
  createEl() {
    return super.createEl(`div`, { className: `vjs-text-track-display` }, { translate: `yes`, "aria-live": `off`, "aria-atomic": `true` });
  }
  clearDisplay() {
    typeof h.default.WebVTT == `function` && h.default.WebVTT.processCues(h.default, [], this.el_);
  }
  updateDisplay() {
    let e14 = this.player_.textTracks(), t2 = this.options_.allowMultipleShowingTracks;
    if (this.clearDisplay(), t2) {
      let t3 = [];
      for (let n3 = 0; n3 < e14.length; ++n3) {
        let r3 = e14[n3];
        r3.mode === `showing` && t3.push(r3);
      }
      this.updateForTrack(t3);
      return;
    }
    let n2 = null, r2 = null, i2 = e14.length;
    for (; i2--; ) {
      let t3 = e14[i2];
      t3.mode === `showing` && (t3.kind === `descriptions` ? n2 = t3 : r2 = t3);
    }
    r2 ? (this.getAttribute(`aria-live`) !== `off` && this.setAttribute(`aria-live`, `off`), this.updateForTrack(r2)) : n2 && (this.getAttribute(`aria-live`) !== `assertive` && this.setAttribute(`aria-live`, `assertive`), this.updateForTrack(n2));
  }
  updateDisplayOverlay() {
    if (!this.player_.videoHeight() || !h.default.CSS.supports(`inset-inline: 10px`)) return;
    let e14 = this.player_.currentWidth(), t2 = this.player_.currentHeight(), n2 = e14 / t2, r2 = this.player_.videoWidth() / this.player_.videoHeight(), i2 = 0, a2 = 0;
    Math.abs(n2 - r2) > 0.1 && (n2 > r2 ? i2 = Math.round((e14 - t2 * r2) / 2) : a2 = Math.round((t2 - e14 / r2) / 2)), vo(this.el_, `insetInline`, yo(i2)), vo(this.el_, `insetBlock`, yo(a2));
  }
  updateDisplayState(e14) {
    let t2 = this.player_.textTrackSettings.getValues(), n2 = e14.activeCues, r2 = n2.length;
    for (; r2--; ) {
      let e15 = n2[r2];
      if (!e15) continue;
      let i2 = e15.displayState;
      if (t2.color && (i2.firstChild.style.color = t2.color), t2.textOpacity && vo(i2.firstChild, `color`, _o(t2.color || `#fff`, t2.textOpacity)), t2.backgroundColor && (i2.firstChild.style.backgroundColor = t2.backgroundColor), t2.backgroundOpacity && vo(i2.firstChild, `backgroundColor`, _o(t2.backgroundColor || `#000`, t2.backgroundOpacity)), t2.windowColor && (t2.windowOpacity ? vo(i2, `backgroundColor`, _o(t2.windowColor, t2.windowOpacity)) : i2.style.backgroundColor = t2.windowColor), t2.edgeStyle && (t2.edgeStyle === `dropshadow` ? i2.firstChild.style.textShadow = `2px 2px 3px ${mo}, 2px 2px 4px ${mo}, 2px 2px 5px ${mo}` : t2.edgeStyle === `raised` ? i2.firstChild.style.textShadow = `1px 1px ${mo}, 2px 2px ${mo}, 3px 3px ${mo}` : t2.edgeStyle === `depressed` ? i2.firstChild.style.textShadow = `1px 1px ${ho}, 0 1px ${ho}, -1px -1px ${mo}, 0 -1px ${mo}` : t2.edgeStyle === `uniform` && (i2.firstChild.style.textShadow = `0 0 4px ${mo}, 0 0 4px ${mo}, 0 0 4px ${mo}, 0 0 4px ${mo}`)), t2.fontPercent && t2.fontPercent !== 1) {
        let e16 = h.default.parseFloat(i2.style.fontSize);
        i2.style.fontSize = e16 * t2.fontPercent + `px`, i2.style.height = `auto`, i2.style.top = `auto`;
      }
      t2.fontFamily && t2.fontFamily !== "default" && (t2.fontFamily === `small-caps` ? i2.firstChild.style.fontVariant = `small-caps` : i2.firstChild.style.fontFamily = go[t2.fontFamily]);
    }
  }
  updateForTrack(e14) {
    if (Array.isArray(e14) || (e14 = [e14]), typeof h.default.WebVTT != `function` || e14.every((e15) => !e15.activeCues)) return;
    let t2 = [];
    for (let n2 = 0; n2 < e14.length; ++n2) {
      let r2 = e14[n2];
      for (let e15 = 0; e15 < r2.activeCues.length; ++e15) t2.push(r2.activeCues[e15]);
    }
    h.default.WebVTT.processCues(h.default, t2, this.el_);
    for (let t3 = 0; t3 < e14.length; ++t3) {
      let n2 = e14[t3];
      for (let e15 = 0; e15 < n2.activeCues.length; ++e15) {
        let r2 = n2.activeCues[e15].displayState;
        Mr(r2, `vjs-text-track-cue`, `vjs-text-track-cue-` + (n2.language ? n2.language : t3)), n2.language && Rr(r2, `lang`, n2.language);
      }
      this.player_.textTrackSettings && this.updateDisplayState(n2);
    }
  }
};
q.registerComponent(`TextTrackDisplay`, bo);
var xo = class extends q {
  createEl() {
    let e14 = this.player_.isAudio(), t2 = this.localize(e14 ? `Audio Player` : `Video Player`), n2 = U(`span`, { className: `vjs-control-text`, textContent: this.localize(`{1} is loading.`, [t2]) }), r2 = super.createEl(`div`, { className: `vjs-loading-spinner`, dir: `ltr` });
    return r2.appendChild(n2), r2;
  }
  handleLanguagechange() {
    this.$(`.vjs-control-text`).textContent = this.localize(`{1} is loading.`, [this.player_.isAudio() ? `Audio Player` : `Video Player`]);
  }
};
q.registerComponent(`LoadingSpinner`, xo);
var So = class extends fo {
  createEl(e14, t2 = {}, n2 = {}) {
    e14 = `button`, t2 = Object.assign({ className: this.buildCSSClass() }, t2), n2 = Object.assign({ type: `button` }, n2);
    let r2 = U(e14, t2, n2);
    return this.player_.options_.experimentalSvgIcons || r2.appendChild(U(`span`, { className: `vjs-icon-placeholder` }, { "aria-hidden": true })), this.createControlTextEl(r2), r2;
  }
  addChild(e14, t2 = {}) {
    let n2 = this.constructor.name;
    return z.warn(`Adding an actionable (user controllable) child to a Button (${n2}) is not supported; use a ClickableComponent instead.`), q.prototype.addChild.call(this, e14, t2);
  }
  enable() {
    super.enable(), this.el_.removeAttribute(`disabled`);
  }
  disable() {
    super.disable(), this.el_.setAttribute(`disabled`, `disabled`);
  }
  handleKeyDown(e14) {
    if (_.default.isEventKey(e14, `Space`) || _.default.isEventKey(e14, `Enter`)) {
      e14.stopPropagation();
      return;
    }
    super.handleKeyDown(e14);
  }
};
q.registerComponent(`Button`, So);
var Co = class extends So {
  constructor(e14, t2) {
    super(e14, t2), this.mouseused_ = false, this.setIcon(`play`), this.on(`mousedown`, (e15) => this.handleMouseDown(e15));
  }
  buildCSSClass() {
    return `vjs-big-play-button`;
  }
  handleClick(e14) {
    let t2 = this.player_.play();
    if (this.mouseused_ && `clientX` in e14 && `clientY` in e14) {
      ia(t2), this.player_.tech(true) && this.player_.tech(true).focus();
      return;
    }
    let n2 = this.player_.getChild(`controlBar`), r2 = n2 && n2.getChild(`playToggle`);
    if (!r2) {
      this.player_.tech(true).focus();
      return;
    }
    let i2 = () => r2.focus();
    ra(t2) ? t2.then(i2, () => {
    }) : this.setTimeout(i2, 1);
  }
  handleKeyDown(e14) {
    this.mouseused_ = false, super.handleKeyDown(e14);
  }
  handleMouseDown(e14) {
    this.mouseused_ = true;
  }
};
Co.prototype.controlText_ = `Play Video`, q.registerComponent(`BigPlayButton`, Co);
var wo = class extends So {
  constructor(e14, t2) {
    super(e14, t2), this.setIcon(`cancel`), this.controlText(t2 && t2.controlText || this.localize(`Close`));
  }
  buildCSSClass() {
    return `vjs-close-button ${super.buildCSSClass()}`;
  }
  handleClick(e14) {
    this.trigger({ type: `close`, bubbles: false });
  }
  handleKeyDown(e14) {
    _.default.isEventKey(e14, `Esc`) ? (e14.preventDefault(), e14.stopPropagation(), this.trigger(`click`)) : super.handleKeyDown(e14);
  }
};
q.registerComponent(`CloseButton`, wo);
var To = class extends So {
  constructor(e14, t2 = {}) {
    super(e14, t2), t2.replay = t2.replay === void 0 || t2.replay, this.setIcon(`play`), this.on(e14, `play`, (e15) => this.handlePlay(e15)), this.on(e14, `pause`, (e15) => this.handlePause(e15)), t2.replay && this.on(e14, `ended`, (e15) => this.handleEnded(e15));
  }
  buildCSSClass() {
    return `vjs-play-control ${super.buildCSSClass()}`;
  }
  handleClick(e14) {
    this.player_.paused() ? ia(this.player_.play()) : this.player_.pause();
  }
  handleSeeked(e14) {
    this.removeClass(`vjs-ended`), this.player_.paused() ? this.handlePause(e14) : this.handlePlay(e14);
  }
  handlePlay(e14) {
    this.removeClass(`vjs-ended`, `vjs-paused`), this.addClass(`vjs-playing`), this.setIcon(`pause`), this.controlText(`Pause`);
  }
  handlePause(e14) {
    this.removeClass(`vjs-playing`), this.addClass(`vjs-paused`), this.setIcon(`play`), this.controlText(`Play`);
  }
  handleEnded(e14) {
    this.removeClass(`vjs-playing`), this.addClass(`vjs-ended`), this.setIcon(`replay`), this.controlText(`Replay`), this.one(this.player_, `seeked`, (e15) => this.handleSeeked(e15));
  }
};
To.prototype.controlText_ = `Play`, q.registerComponent(`PlayToggle`, To);
var Eo = class extends q {
  constructor(e14, t2) {
    super(e14, t2), this.on(e14, [`timeupdate`, `ended`, `seeking`], (e15) => this.update(e15)), this.updateTextNode_();
  }
  createEl() {
    let e14 = this.buildCSSClass(), t2 = super.createEl(`div`, { className: `${e14} vjs-time-control vjs-control` }), n2 = U(`span`, { className: `vjs-control-text`, textContent: `${this.localize(this.labelText_)}\xA0` }, { role: `presentation` });
    return t2.appendChild(n2), this.contentEl_ = U(`span`, { className: `${e14}-display` }, { role: `presentation` }), t2.appendChild(this.contentEl_), t2;
  }
  dispose() {
    this.contentEl_ = null, this.textNode_ = null, super.dispose();
  }
  update(e14) {
    !this.player_.options_.enableSmoothSeeking && e14.type === `seeking` || this.updateContent(e14);
  }
  updateTextNode_(e14 = 0) {
    e14 = ea(e14), this.formattedTime_ !== e14 && (this.formattedTime_ = e14, this.requestNamedAnimationFrame(`TimeDisplay#updateTextNode_`, () => {
      if (!this.contentEl_) return;
      let e15 = this.textNode_;
      e15 && this.contentEl_.firstChild !== e15 && (e15 = null, z.warn(`TimeDisplay#updateTextnode_: Prevented replacement of text node element since it was no longer a child of this node. Appending a new node instead.`)), this.textNode_ = g.default.createTextNode(this.formattedTime_), this.textNode_ && (e15 ? this.contentEl_.replaceChild(this.textNode_, e15) : this.contentEl_.appendChild(this.textNode_));
    }));
  }
  updateContent(e14) {
  }
};
Eo.prototype.labelText_ = `Time`, Eo.prototype.controlText_ = `Time`, q.registerComponent(`TimeDisplay`, Eo);
var Do = class extends Eo {
  buildCSSClass() {
    return `vjs-current-time`;
  }
  updateContent(e14) {
    let t2;
    t2 = this.player_.ended() ? this.player_.duration() : this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(), this.updateTextNode_(t2);
  }
};
Do.prototype.labelText_ = `Current Time`, Do.prototype.controlText_ = `Current Time`, q.registerComponent(`CurrentTimeDisplay`, Do);
var Oo = class extends Eo {
  constructor(e14, t2) {
    super(e14, t2);
    let n2 = (e15) => this.updateContent(e15);
    this.on(e14, `durationchange`, n2), this.on(e14, `loadstart`, n2), this.on(e14, `loadedmetadata`, n2);
  }
  buildCSSClass() {
    return `vjs-duration`;
  }
  updateContent(e14) {
    let t2 = this.player_.duration();
    this.updateTextNode_(t2);
  }
};
Oo.prototype.labelText_ = `Duration`, Oo.prototype.controlText_ = `Duration`, q.registerComponent(`DurationDisplay`, Oo);
var ko = class extends q {
  createEl() {
    let e14 = super.createEl(`div`, { className: `vjs-time-control vjs-time-divider` }, { "aria-hidden": true }), t2 = super.createEl(`div`), n2 = super.createEl(`span`, { textContent: `/` });
    return t2.appendChild(n2), e14.appendChild(t2), e14;
  }
};
q.registerComponent(`TimeDivider`, ko);
var Ao = class extends Eo {
  constructor(e14, t2) {
    super(e14, t2), this.on(e14, `durationchange`, (e15) => this.updateContent(e15));
  }
  buildCSSClass() {
    return `vjs-remaining-time`;
  }
  createEl() {
    let e14 = super.createEl();
    return this.options_.displayNegative !== false && e14.insertBefore(U(`span`, {}, { "aria-hidden": true }, `-`), this.contentEl_), e14;
  }
  updateContent(e14) {
    if (typeof this.player_.duration() != `number`) return;
    let t2;
    t2 = this.player_.ended() ? 0 : this.player_.remainingTimeDisplay ? this.player_.remainingTimeDisplay() : this.player_.remainingTime(), this.updateTextNode_(t2);
  }
};
Ao.prototype.labelText_ = `Remaining Time`, Ao.prototype.controlText_ = `Remaining Time`, q.registerComponent(`RemainingTimeDisplay`, Ao);
var jo = class extends q {
  constructor(e14, t2) {
    super(e14, t2), this.updateShowing(), this.on(this.player(), `durationchange`, (e15) => this.updateShowing(e15));
  }
  createEl() {
    let e14 = super.createEl(`div`, { className: `vjs-live-control vjs-control` });
    return this.contentEl_ = U(`div`, { className: `vjs-live-display` }, { "aria-live": `off` }), this.contentEl_.appendChild(U(`span`, { className: `vjs-control-text`, textContent: `${this.localize(`Stream Type`)}\xA0` })), this.contentEl_.appendChild(g.default.createTextNode(this.localize(`LIVE`))), e14.appendChild(this.contentEl_), e14;
  }
  dispose() {
    this.contentEl_ = null, super.dispose();
  }
  updateShowing(e14) {
    this.player().duration() === 1 / 0 ? this.show() : this.hide();
  }
};
q.registerComponent(`LiveDisplay`, jo);
var Mo = class extends So {
  constructor(e14, t2) {
    super(e14, t2), this.updateLiveEdgeStatus(), this.player_.liveTracker && (this.updateLiveEdgeStatusHandler_ = (e15) => this.updateLiveEdgeStatus(e15), this.on(this.player_.liveTracker, `liveedgechange`, this.updateLiveEdgeStatusHandler_));
  }
  createEl() {
    let e14 = super.createEl(`button`, { className: `vjs-seek-to-live-control vjs-control` });
    return this.setIcon(`circle`, e14), this.textEl_ = U(`span`, { className: `vjs-seek-to-live-text`, textContent: this.localize(`LIVE`) }, { "aria-hidden": `true` }), e14.appendChild(this.textEl_), e14;
  }
  updateLiveEdgeStatus() {
    !this.player_.liveTracker || this.player_.liveTracker.atLiveEdge() ? (this.setAttribute(`aria-disabled`, true), this.addClass(`vjs-at-live-edge`), this.controlText(`Seek to live, currently playing live`)) : (this.setAttribute(`aria-disabled`, false), this.removeClass(`vjs-at-live-edge`), this.controlText(`Seek to live, currently behind live`));
  }
  handleClick() {
    this.player_.liveTracker.seekToLiveEdge();
  }
  dispose() {
    this.player_.liveTracker && this.off(this.player_.liveTracker, `liveedgechange`, this.updateLiveEdgeStatusHandler_), this.textEl_ = null, super.dispose();
  }
};
Mo.prototype.controlText_ = `Seek to live, currently playing live`, q.registerComponent(`SeekToLive`, Mo);
function No(e14, t2, n2) {
  return e14 = Number(e14), Math.min(n2, Math.max(t2, isNaN(e14) ? t2 : e14));
}
var Po = Object.freeze({ __proto__: null, clamp: No }), Fo = class extends q {
  constructor(e14, t2) {
    super(e14, t2), this.handleMouseDown_ = (e15) => this.handleMouseDown(e15), this.handleMouseUp_ = (e15) => this.handleMouseUp(e15), this.handleKeyDown_ = (e15) => this.handleKeyDown(e15), this.handleClick_ = (e15) => this.handleClick(e15), this.handleMouseMove_ = (e15) => this.handleMouseMove(e15), this.update_ = (e15) => this.update(e15), this.bar = this.getChild(this.options_.barName), this.vertical(!!this.options_.vertical), this.enable();
  }
  enabled() {
    return this.enabled_;
  }
  enable() {
    this.enabled() || (this.on(`mousedown`, this.handleMouseDown_), this.on(`touchstart`, this.handleMouseDown_), this.on(`keydown`, this.handleKeyDown_), this.on(`click`, this.handleClick_), this.on(this.player_, `controlsvisible`, this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass(`disabled`), this.setAttribute(`tabindex`, 0), this.enabled_ = true);
  }
  disable() {
    if (!this.enabled()) return;
    let e14 = this.bar.el_.ownerDocument;
    this.off(`mousedown`, this.handleMouseDown_), this.off(`touchstart`, this.handleMouseDown_), this.off(`keydown`, this.handleKeyDown_), this.off(`click`, this.handleClick_), this.off(this.player_, `controlsvisible`, this.update_), this.off(e14, `mousemove`, this.handleMouseMove_), this.off(e14, `mouseup`, this.handleMouseUp_), this.off(e14, `touchmove`, this.handleMouseMove_), this.off(e14, `touchend`, this.handleMouseUp_), this.removeAttribute(`tabindex`), this.addClass(`disabled`), this.playerEvent && this.off(this.player_, this.playerEvent, this.update), this.enabled_ = false;
  }
  createEl(e14, t2 = {}, n2 = {}) {
    return t2.className += ` vjs-slider`, t2 = Object.assign({ tabIndex: 0 }, t2), n2 = Object.assign({ role: `slider`, "aria-valuenow": 0, "aria-valuemin": 0, "aria-valuemax": 100 }, n2), super.createEl(e14, t2, n2);
  }
  handleMouseDown(e14) {
    let t2 = this.bar.el_.ownerDocument;
    e14.type === `mousedown` && e14.preventDefault(), e14.type === `touchstart` && !lr && e14.preventDefault(), Br(), this.addClass(`vjs-sliding`), this.trigger(`slideractive`), this.on(t2, `mousemove`, this.handleMouseMove_), this.on(t2, `mouseup`, this.handleMouseUp_), this.on(t2, `touchmove`, this.handleMouseMove_), this.on(t2, `touchend`, this.handleMouseUp_), this.handleMouseMove(e14, true);
  }
  handleMouseMove(e14) {
  }
  handleMouseUp(e14) {
    let t2 = this.bar.el_.ownerDocument;
    Vr(), this.removeClass(`vjs-sliding`), this.trigger(`sliderinactive`), this.off(t2, `mousemove`, this.handleMouseMove_), this.off(t2, `mouseup`, this.handleMouseUp_), this.off(t2, `touchmove`, this.handleMouseMove_), this.off(t2, `touchend`, this.handleMouseUp_), this.update();
  }
  update() {
    if (!this.el_ || !this.bar) return;
    let e14 = this.getProgress();
    return e14 === this.progress_ ? e14 : (this.progress_ = e14, this.requestNamedAnimationFrame(`Slider#update`, () => {
      let t2 = this.vertical() ? `height` : `width`;
      this.bar.el().style[t2] = (e14 * 100).toFixed(2) + `%`;
    }), e14);
  }
  getProgress() {
    return Number(No(this.getPercent(), 0, 1).toFixed(4));
  }
  calculateDistance(e14) {
    let t2 = Wr(this.el_, e14);
    return this.vertical() ? t2.y : t2.x;
  }
  handleKeyDown(e14) {
    let t2 = this.options_.playerOptions.spatialNavigation, n2 = t2 && t2.enabled, r2 = t2 && t2.horizontalSeek;
    n2 ? r2 && _.default.isEventKey(e14, `Left`) || !r2 && _.default.isEventKey(e14, `Down`) ? (e14.preventDefault(), e14.stopPropagation(), this.stepBack()) : r2 && _.default.isEventKey(e14, `Right`) || !r2 && _.default.isEventKey(e14, `Up`) ? (e14.preventDefault(), e14.stopPropagation(), this.stepForward()) : super.handleKeyDown(e14) : _.default.isEventKey(e14, `Left`) || _.default.isEventKey(e14, `Down`) ? (e14.preventDefault(), e14.stopPropagation(), this.stepBack()) : _.default.isEventKey(e14, `Right`) || _.default.isEventKey(e14, `Up`) ? (e14.preventDefault(), e14.stopPropagation(), this.stepForward()) : super.handleKeyDown(e14);
  }
  handleClick(e14) {
    e14.stopPropagation(), e14.preventDefault();
  }
  vertical(e14) {
    if (e14 === void 0) return this.vertical_ || false;
    this.vertical_ = !!e14, this.vertical_ ? this.addClass(`vjs-slider-vertical`) : this.addClass(`vjs-slider-horizontal`);
  }
};
q.registerComponent(`Slider`, Fo);
var Io = (e14, t2) => No(e14 / t2 * 100, 0, 100).toFixed(2) + `%`, Lo = class extends q {
  constructor(e14, t2) {
    super(e14, t2), this.partEls_ = [], this.on(e14, `progress`, (e15) => this.update(e15));
  }
  createEl() {
    let e14 = super.createEl(`div`, { className: `vjs-load-progress` }), t2 = U(`span`, { className: `vjs-control-text` }), n2 = U(`span`, { textContent: this.localize(`Loaded`) }), r2 = g.default.createTextNode(`: `);
    return this.percentageEl_ = U(`span`, { className: `vjs-control-text-loaded-percentage`, textContent: `0%` }), e14.appendChild(t2), t2.appendChild(n2), t2.appendChild(r2), t2.appendChild(this.percentageEl_), e14;
  }
  dispose() {
    this.partEls_ = null, this.percentageEl_ = null, super.dispose();
  }
  update(e14) {
    this.requestNamedAnimationFrame(`LoadProgressBar#update`, () => {
      let e15 = this.player_.liveTracker, t2 = this.player_.buffered(), n2 = e15 && e15.isLive() ? e15.seekableEnd() : this.player_.duration(), r2 = this.player_.bufferedEnd(), i2 = this.partEls_, a2 = Io(r2, n2);
      this.percent_ !== a2 && (this.el_.style.width = a2, W(this.percentageEl_, a2), this.percent_ = a2);
      for (let e16 = 0; e16 < t2.length; e16++) {
        let n3 = t2.start(e16), a3 = t2.end(e16), o2 = i2[e16];
        o2 || (o2 = this.el_.appendChild(U()), i2[e16] = o2), !(o2.dataset.start === n3 && o2.dataset.end === a3) && (o2.dataset.start = n3, o2.dataset.end = a3, o2.style.left = Io(n3, r2), o2.style.width = Io(a3 - n3, r2));
      }
      for (let e16 = i2.length; e16 > t2.length; e16--) this.el_.removeChild(i2[e16 - 1]);
      i2.length = t2.length;
    });
  }
};
q.registerComponent(`LoadProgressBar`, Lo);
var Ro = class extends q {
  constructor(e14, t2) {
    super(e14, t2), this.update = Ti(G(this, this.update), wi);
  }
  createEl() {
    return super.createEl(`div`, { className: `vjs-time-tooltip` }, { "aria-hidden": `true` });
  }
  update(e14, t2, n2) {
    let r2 = Ur(this.el_), i2 = Hr(this.player_.el()), a2 = e14.width * t2;
    if (!i2 || !r2) return;
    let o2 = e14.left - i2.left + a2, s2 = e14.width - a2 + (i2.right - e14.right);
    s2 || (s2 = e14.width - a2, o2 = a2);
    let c2 = r2.width / 2;
    o2 < c2 ? c2 += c2 - o2 : s2 < c2 && (c2 = s2), c2 < 0 ? c2 = 0 : c2 > r2.width && (c2 = r2.width), c2 = Math.round(c2), this.el_.style.right = `-${c2}px`, this.write(n2);
  }
  write(e14) {
    W(this.el_, e14);
  }
  updateTime(e14, t2, n2, r2) {
    this.requestNamedAnimationFrame(`TimeTooltip#updateTime`, () => {
      let i2, a2 = this.player_.duration();
      if (this.player_.liveTracker && this.player_.liveTracker.isLive()) {
        let e15 = this.player_.liveTracker.liveWindow(), n3 = e15 - t2 * e15;
        i2 = (n3 < 1 ? `` : `-`) + ea(n3, e15);
      } else i2 = ea(n2, a2);
      this.update(e14, t2, i2), r2 && r2();
    });
  }
};
q.registerComponent(`TimeTooltip`, Ro);
var zo = class extends q {
  constructor(e14, t2) {
    super(e14, t2), this.setIcon(`circle`), this.update = Ti(G(this, this.update), wi);
  }
  createEl() {
    return super.createEl(`div`, { className: `vjs-play-progress vjs-slider-bar` }, { "aria-hidden": `true` });
  }
  update(e14, t2) {
    let n2 = this.getChild(`timeTooltip`);
    if (!n2) return;
    let r2 = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
    n2.updateTime(e14, t2, r2);
  }
};
zo.prototype.options_ = { children: [] }, !Sr && !ir && zo.prototype.options_.children.push(`timeTooltip`), q.registerComponent(`PlayProgressBar`, zo);
var Bo = class extends q {
  constructor(e14, t2) {
    super(e14, t2), this.update = Ti(G(this, this.update), wi);
  }
  createEl() {
    return super.createEl(`div`, { className: `vjs-mouse-display` });
  }
  update(e14, t2) {
    let n2 = t2 * this.player_.duration();
    this.getChild(`timeTooltip`).updateTime(e14, t2, n2, () => {
      this.el_.style.left = `${e14.width * t2}px`;
    });
  }
};
Bo.prototype.options_ = { children: [`timeTooltip`] }, q.registerComponent(`MouseTimeDisplay`, Bo);
var Vo = 5, Ho = 12, Uo = class extends Fo {
  constructor(e14, t2) {
    super(e14, t2), this.setEventHandlers_();
  }
  setEventHandlers_() {
    this.update_ = G(this, this.update), this.update = Ti(this.update_, wi), this.on(this.player_, [`durationchange`, `timeupdate`], this.update), this.on(this.player_, [`ended`], this.update_), this.player_.liveTracker && this.on(this.player_.liveTracker, `liveedgechange`, this.update), this.updateInterval = null, this.enableIntervalHandler_ = (e14) => this.enableInterval_(e14), this.disableIntervalHandler_ = (e14) => this.disableInterval_(e14), this.on(this.player_, [`playing`], this.enableIntervalHandler_), this.on(this.player_, [`ended`, `pause`, `waiting`], this.disableIntervalHandler_), `hidden` in g.default && `visibilityState` in g.default && this.on(g.default, `visibilitychange`, this.toggleVisibility_);
  }
  toggleVisibility_(e14) {
    g.default.visibilityState === `hidden` ? (this.cancelNamedAnimationFrame(`SeekBar#update`), this.cancelNamedAnimationFrame(`Slider#update`), this.disableInterval_(e14)) : (!this.player_.ended() && !this.player_.paused() && this.enableInterval_(), this.update());
  }
  enableInterval_() {
    this.updateInterval ||= this.setInterval(this.update, wi);
  }
  disableInterval_(e14) {
    this.player_.liveTracker && this.player_.liveTracker.isLive() && e14 && e14.type !== `ended` || (this.updateInterval &&= (this.clearInterval(this.updateInterval), null));
  }
  createEl() {
    return super.createEl(`div`, { className: `vjs-progress-holder` }, { "aria-label": this.localize(`Progress Bar`) });
  }
  update(e14) {
    if (g.default.visibilityState === `hidden`) return;
    let t2 = super.update();
    return this.requestNamedAnimationFrame(`SeekBar#update`, () => {
      let e15 = this.player_.ended() ? this.player_.duration() : this.getCurrentTime_(), n2 = this.player_.liveTracker, r2 = this.player_.duration();
      n2 && n2.isLive() && (r2 = this.player_.liveTracker.liveCurrentTime()), this.percent_ !== t2 && (this.el_.setAttribute(`aria-valuenow`, (t2 * 100).toFixed(2)), this.percent_ = t2), (this.currentTime_ !== e15 || this.duration_ !== r2) && (this.el_.setAttribute(`aria-valuetext`, this.localize(`progress bar timing: currentTime={1} duration={2}`, [ea(e15, r2), ea(r2, r2)], `{1} of {2}`)), this.currentTime_ = e15, this.duration_ = r2), this.bar && this.bar.update(Hr(this.el()), this.getProgress());
    }), t2;
  }
  userSeek_(e14) {
    this.player_.liveTracker && this.player_.liveTracker.isLive() && this.player_.liveTracker.nextSeekedFromUser(), this.player_.currentTime(e14);
  }
  getCurrentTime_() {
    return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
  }
  getPercent() {
    let e14 = this.getCurrentTime_(), t2, n2 = this.player_.liveTracker;
    return n2 && n2.isLive() ? (t2 = (e14 - n2.seekableStart()) / n2.liveWindow(), n2.atLiveEdge() && (t2 = 1)) : t2 = e14 / this.player_.duration(), t2;
  }
  handleMouseDown(e14) {
    Xr(e14) && (e14.stopPropagation(), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), super.handleMouseDown(e14));
  }
  handleMouseMove(e14, t2 = false) {
    if (!Xr(e14) || isNaN(this.player_.duration())) return;
    !t2 && !this.player_.scrubbing() && this.player_.scrubbing(true);
    let n2, r2 = this.calculateDistance(e14), i2 = this.player_.liveTracker;
    if (!i2 || !i2.isLive()) n2 = r2 * this.player_.duration(), n2 === this.player_.duration() && (n2 -= 0.1);
    else {
      if (r2 >= 0.99) {
        i2.seekToLiveEdge();
        return;
      }
      let e15 = i2.seekableStart(), t3 = i2.liveCurrentTime();
      if (n2 = e15 + r2 * i2.liveWindow(), n2 >= t3 && (n2 = t3), n2 <= e15 && (n2 = e15 + 0.1), n2 === 1 / 0) return;
    }
    this.userSeek_(n2), this.player_.options_.enableSmoothSeeking && this.update();
  }
  enable() {
    super.enable();
    let e14 = this.getChild(`mouseTimeDisplay`);
    e14 && e14.show();
  }
  disable() {
    super.disable();
    let e14 = this.getChild(`mouseTimeDisplay`);
    e14 && e14.hide();
  }
  handleMouseUp(e14) {
    super.handleMouseUp(e14), e14 && e14.stopPropagation(), this.player_.scrubbing(false), this.player_.trigger({ type: `timeupdate`, target: this, manuallyTriggered: true }), this.videoWasPlaying ? ia(this.player_.play()) : this.update_();
  }
  stepForward() {
    this.userSeek_(this.player_.currentTime() + Vo);
  }
  stepBack() {
    this.userSeek_(this.player_.currentTime() - Vo);
  }
  handleAction(e14) {
    this.player_.paused() ? this.player_.play() : this.player_.pause();
  }
  handleKeyDown(e14) {
    let t2 = this.player_.liveTracker;
    if (_.default.isEventKey(e14, `Space`) || _.default.isEventKey(e14, `Enter`)) e14.preventDefault(), e14.stopPropagation(), this.handleAction(e14);
    else if (_.default.isEventKey(e14, `Home`)) e14.preventDefault(), e14.stopPropagation(), this.userSeek_(0);
    else if (_.default.isEventKey(e14, `End`)) e14.preventDefault(), e14.stopPropagation(), t2 && t2.isLive() ? this.userSeek_(t2.liveCurrentTime()) : this.userSeek_(this.player_.duration());
    else if (/^[0-9]$/.test((0, _.default)(e14))) {
      e14.preventDefault(), e14.stopPropagation();
      let n2 = (_.codes[(0, _.default)(e14)] - _.codes[0]) * 10 / 100;
      t2 && t2.isLive() ? this.userSeek_(t2.seekableStart() + t2.liveWindow() * n2) : this.userSeek_(this.player_.duration() * n2);
    } else _.default.isEventKey(e14, `PgDn`) ? (e14.preventDefault(), e14.stopPropagation(), this.userSeek_(this.player_.currentTime() - Vo * Ho)) : _.default.isEventKey(e14, `PgUp`) ? (e14.preventDefault(), e14.stopPropagation(), this.userSeek_(this.player_.currentTime() + Vo * Ho)) : super.handleKeyDown(e14);
  }
  dispose() {
    this.disableInterval_(), this.off(this.player_, [`durationchange`, `timeupdate`], this.update), this.off(this.player_, [`ended`], this.update_), this.player_.liveTracker && this.off(this.player_.liveTracker, `liveedgechange`, this.update), this.off(this.player_, [`playing`], this.enableIntervalHandler_), this.off(this.player_, [`ended`, `pause`, `waiting`], this.disableIntervalHandler_), `hidden` in g.default && `visibilityState` in g.default && this.off(g.default, `visibilitychange`, this.toggleVisibility_), super.dispose();
  }
};
Uo.prototype.options_ = { children: [`loadProgressBar`, `playProgressBar`], barName: `playProgressBar` }, !Sr && !ir && Uo.prototype.options_.children.splice(1, 0, `mouseTimeDisplay`), q.registerComponent(`SeekBar`, Uo);
var Wo = class extends q {
  constructor(e14, t2) {
    super(e14, t2), this.handleMouseMove = Ti(G(this, this.handleMouseMove), wi), this.throttledHandleMouseSeek = Ti(G(this, this.handleMouseSeek), wi), this.handleMouseUpHandler_ = (e15) => this.handleMouseUp(e15), this.handleMouseDownHandler_ = (e15) => this.handleMouseDown(e15), this.enable();
  }
  createEl() {
    return super.createEl(`div`, { className: `vjs-progress-control vjs-control` });
  }
  handleMouseMove(e14) {
    let t2 = this.getChild(`seekBar`);
    if (!t2) return;
    let n2 = t2.getChild(`playProgressBar`), r2 = t2.getChild(`mouseTimeDisplay`);
    if (!n2 && !r2) return;
    let i2 = t2.el(), a2 = Ur(i2), o2 = Wr(i2, e14).x;
    o2 = No(o2, 0, 1), r2 && r2.update(a2, o2), n2 && n2.update(a2, t2.getProgress());
  }
  handleMouseSeek(e14) {
    let t2 = this.getChild(`seekBar`);
    t2 && t2.handleMouseMove(e14);
  }
  enabled() {
    return this.enabled_;
  }
  disable() {
    if (this.children().forEach((e14) => e14.disable && e14.disable()), this.enabled() && (this.off([`mousedown`, `touchstart`], this.handleMouseDownHandler_), this.off(this.el_, `mousemove`, this.handleMouseMove), this.removeListenersAddedOnMousedownAndTouchstart(), this.addClass(`disabled`), this.enabled_ = false, this.player_.scrubbing())) {
      let e14 = this.getChild(`seekBar`);
      this.player_.scrubbing(false), e14.videoWasPlaying && ia(this.player_.play());
    }
  }
  enable() {
    this.children().forEach((e14) => e14.enable && e14.enable()), !this.enabled() && (this.on([`mousedown`, `touchstart`], this.handleMouseDownHandler_), this.on(this.el_, `mousemove`, this.handleMouseMove), this.removeClass(`disabled`), this.enabled_ = true);
  }
  removeListenersAddedOnMousedownAndTouchstart() {
    let e14 = this.el_.ownerDocument;
    this.off(e14, `mousemove`, this.throttledHandleMouseSeek), this.off(e14, `touchmove`, this.throttledHandleMouseSeek), this.off(e14, `mouseup`, this.handleMouseUpHandler_), this.off(e14, `touchend`, this.handleMouseUpHandler_);
  }
  handleMouseDown(e14) {
    let t2 = this.el_.ownerDocument, n2 = this.getChild(`seekBar`);
    n2 && n2.handleMouseDown(e14), this.on(t2, `mousemove`, this.throttledHandleMouseSeek), this.on(t2, `touchmove`, this.throttledHandleMouseSeek), this.on(t2, `mouseup`, this.handleMouseUpHandler_), this.on(t2, `touchend`, this.handleMouseUpHandler_);
  }
  handleMouseUp(e14) {
    let t2 = this.getChild(`seekBar`);
    t2 && t2.handleMouseUp(e14), this.removeListenersAddedOnMousedownAndTouchstart();
  }
};
Wo.prototype.options_ = { children: [`seekBar`] }, q.registerComponent(`ProgressControl`, Wo);
var Go = class extends So {
  constructor(e14, t2) {
    super(e14, t2), this.setIcon(`picture-in-picture-enter`), this.on(e14, [`enterpictureinpicture`, `leavepictureinpicture`], (e15) => this.handlePictureInPictureChange(e15)), this.on(e14, [`disablepictureinpicturechanged`, `loadedmetadata`], (e15) => this.handlePictureInPictureEnabledChange(e15)), this.on(e14, [`loadedmetadata`, `audioonlymodechange`, `audiopostermodechange`], () => this.handlePictureInPictureAudioModeChange()), this.disable();
  }
  buildCSSClass() {
    return `vjs-picture-in-picture-control vjs-hidden ${super.buildCSSClass()}`;
  }
  handlePictureInPictureAudioModeChange() {
    if (!(this.player_.currentType().substring(0, 5) === `audio` || this.player_.audioPosterMode() || this.player_.audioOnlyMode())) {
      this.show();
      return;
    }
    this.player_.isInPictureInPicture() && this.player_.exitPictureInPicture(), this.hide();
  }
  handlePictureInPictureEnabledChange() {
    g.default.pictureInPictureEnabled && this.player_.disablePictureInPicture() === false || this.player_.options_.enableDocumentPictureInPicture && `documentPictureInPicture` in h.default ? this.enable() : this.disable();
  }
  handlePictureInPictureChange(e14) {
    this.player_.isInPictureInPicture() ? (this.setIcon(`picture-in-picture-exit`), this.controlText(`Exit Picture-in-Picture`)) : (this.setIcon(`picture-in-picture-enter`), this.controlText(`Picture-in-Picture`)), this.handlePictureInPictureEnabledChange();
  }
  handleClick(e14) {
    this.player_.isInPictureInPicture() ? this.player_.exitPictureInPicture() : this.player_.requestPictureInPicture();
  }
  show() {
    typeof g.default.exitPictureInPicture == `function` && super.show();
  }
};
Go.prototype.controlText_ = `Picture-in-Picture`, q.registerComponent(`PictureInPictureToggle`, Go);
var Ko = class extends So {
  constructor(e14, t2) {
    super(e14, t2), this.setIcon(`fullscreen-enter`), this.on(e14, `fullscreenchange`, (e15) => this.handleFullscreenChange(e15)), g.default[e14.fsApi_.fullscreenEnabled] === false && this.disable();
  }
  buildCSSClass() {
    return `vjs-fullscreen-control ${super.buildCSSClass()}`;
  }
  handleFullscreenChange(e14) {
    this.player_.isFullscreen() ? (this.controlText(`Exit Fullscreen`), this.setIcon(`fullscreen-exit`)) : (this.controlText(`Fullscreen`), this.setIcon(`fullscreen-enter`));
  }
  handleClick(e14) {
    this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen();
  }
};
Ko.prototype.controlText_ = `Fullscreen`, q.registerComponent(`FullscreenToggle`, Ko);
var qo = function(e14, t2) {
  t2.tech_ && !t2.tech_.featuresVolumeControl && e14.addClass(`vjs-hidden`), e14.on(t2, `loadstart`, function() {
    t2.tech_.featuresVolumeControl ? e14.removeClass(`vjs-hidden`) : e14.addClass(`vjs-hidden`);
  });
}, Jo = class extends q {
  createEl() {
    let e14 = super.createEl(`div`, { className: `vjs-volume-level` });
    return this.setIcon(`circle`, e14), e14.appendChild(super.createEl(`span`, { className: `vjs-control-text` })), e14;
  }
};
q.registerComponent(`VolumeLevel`, Jo);
var Yo = class extends q {
  constructor(e14, t2) {
    super(e14, t2), this.update = Ti(G(this, this.update), wi);
  }
  createEl() {
    return super.createEl(`div`, { className: `vjs-volume-tooltip` }, { "aria-hidden": `true` });
  }
  update(e14, t2, n2, r2) {
    if (!n2) {
      let n3 = Hr(this.el_), r3 = Hr(this.player_.el()), i2 = e14.width * t2;
      if (!r3 || !n3) return;
      let a2 = e14.left - r3.left + i2, o2 = e14.width - i2 + (r3.right - e14.right), s2 = n3.width / 2;
      a2 < s2 ? s2 += s2 - a2 : o2 < s2 && (s2 = o2), s2 < 0 ? s2 = 0 : s2 > n3.width && (s2 = n3.width), this.el_.style.right = `-${s2}px`;
    }
    this.write(`${r2}%`);
  }
  write(e14) {
    W(this.el_, e14);
  }
  updateVolume(e14, t2, n2, r2, i2) {
    this.requestNamedAnimationFrame(`VolumeLevelTooltip#updateVolume`, () => {
      this.update(e14, t2, n2, r2.toFixed(0)), i2 && i2();
    });
  }
};
q.registerComponent(`VolumeLevelTooltip`, Yo);
var Xo = class extends q {
  constructor(e14, t2) {
    super(e14, t2), this.update = Ti(G(this, this.update), wi);
  }
  createEl() {
    return super.createEl(`div`, { className: `vjs-mouse-display` });
  }
  update(e14, t2, n2) {
    let r2 = 100 * t2;
    this.getChild(`volumeLevelTooltip`).updateVolume(e14, t2, n2, r2, () => {
      n2 ? this.el_.style.bottom = `${e14.height * t2}px` : this.el_.style.left = `${e14.width * t2}px`;
    });
  }
};
Xo.prototype.options_ = { children: [`volumeLevelTooltip`] }, q.registerComponent(`MouseVolumeLevelDisplay`, Xo);
var Zo = class extends Fo {
  constructor(e14, t2) {
    super(e14, t2), this.on(`slideractive`, (e15) => this.updateLastVolume_(e15)), this.on(e14, `volumechange`, (e15) => this.updateARIAAttributes(e15)), e14.ready(() => this.updateARIAAttributes());
  }
  createEl() {
    return super.createEl(`div`, { className: `vjs-volume-bar vjs-slider-bar` }, { "aria-label": this.localize(`Volume Level`), "aria-live": `polite` });
  }
  handleMouseDown(e14) {
    Xr(e14) && super.handleMouseDown(e14);
  }
  handleMouseMove(e14) {
    let t2 = this.getChild(`mouseVolumeLevelDisplay`);
    if (t2) {
      let n2 = this.el(), r2 = Hr(n2), i2 = this.vertical(), a2 = Wr(n2, e14);
      a2 = i2 ? a2.y : a2.x, a2 = No(a2, 0, 1), t2.update(r2, a2, i2);
    }
    Xr(e14) && (this.checkMuted(), this.player_.volume(this.calculateDistance(e14)));
  }
  checkMuted() {
    this.player_.muted() && this.player_.muted(false);
  }
  getPercent() {
    return this.player_.muted() ? 0 : this.player_.volume();
  }
  stepForward() {
    this.checkMuted(), this.player_.volume(this.player_.volume() + 0.1);
  }
  stepBack() {
    this.checkMuted(), this.player_.volume(this.player_.volume() - 0.1);
  }
  updateARIAAttributes(e14) {
    let t2 = this.player_.muted() ? 0 : this.volumeAsPercentage_();
    this.el_.setAttribute(`aria-valuenow`, t2), this.el_.setAttribute(`aria-valuetext`, t2 + `%`);
  }
  volumeAsPercentage_() {
    return Math.round(this.player_.volume() * 100);
  }
  updateLastVolume_() {
    let e14 = this.player_.volume();
    this.one(`sliderinactive`, () => {
      this.player_.volume() === 0 && this.player_.lastVolume_(e14);
    });
  }
};
Zo.prototype.options_ = { children: [`volumeLevel`], barName: `volumeLevel` }, !Sr && !ir && Zo.prototype.options_.children.splice(0, 0, `mouseVolumeLevelDisplay`), Zo.prototype.playerEvent = `volumechange`, q.registerComponent(`VolumeBar`, Zo);
var Qo = class extends q {
  constructor(e14, t2 = {}) {
    t2.vertical = t2.vertical || false, (t2.volumeBar === void 0 || $n(t2.volumeBar)) && (t2.volumeBar = t2.volumeBar || {}, t2.volumeBar.vertical = t2.vertical), super(e14, t2), qo(this, e14), this.throttledHandleMouseMove = Ti(G(this, this.handleMouseMove), wi), this.handleMouseUpHandler_ = (e15) => this.handleMouseUp(e15), this.on(`mousedown`, (e15) => this.handleMouseDown(e15)), this.on(`touchstart`, (e15) => this.handleMouseDown(e15)), this.on(`mousemove`, (e15) => this.handleMouseMove(e15)), this.on(this.volumeBar, [`focus`, `slideractive`], () => {
      this.volumeBar.addClass(`vjs-slider-active`), this.addClass(`vjs-slider-active`), this.trigger(`slideractive`);
    }), this.on(this.volumeBar, [`blur`, `sliderinactive`], () => {
      this.volumeBar.removeClass(`vjs-slider-active`), this.removeClass(`vjs-slider-active`), this.trigger(`sliderinactive`);
    });
  }
  createEl() {
    let e14 = `vjs-volume-horizontal`;
    return this.options_.vertical && (e14 = `vjs-volume-vertical`), super.createEl(`div`, { className: `vjs-volume-control vjs-control ${e14}` });
  }
  handleMouseDown(e14) {
    let t2 = this.el_.ownerDocument;
    this.on(t2, `mousemove`, this.throttledHandleMouseMove), this.on(t2, `touchmove`, this.throttledHandleMouseMove), this.on(t2, `mouseup`, this.handleMouseUpHandler_), this.on(t2, `touchend`, this.handleMouseUpHandler_);
  }
  handleMouseUp(e14) {
    let t2 = this.el_.ownerDocument;
    this.off(t2, `mousemove`, this.throttledHandleMouseMove), this.off(t2, `touchmove`, this.throttledHandleMouseMove), this.off(t2, `mouseup`, this.handleMouseUpHandler_), this.off(t2, `touchend`, this.handleMouseUpHandler_);
  }
  handleMouseMove(e14) {
    this.volumeBar.handleMouseMove(e14);
  }
};
Qo.prototype.options_ = { children: [`volumeBar`] }, q.registerComponent(`VolumeControl`, Qo);
var $o = function(e14, t2) {
  t2.tech_ && !t2.tech_.featuresMuteControl && e14.addClass(`vjs-hidden`), e14.on(t2, `loadstart`, function() {
    t2.tech_.featuresMuteControl ? e14.removeClass(`vjs-hidden`) : e14.addClass(`vjs-hidden`);
  });
}, es = class extends So {
  constructor(e14, t2) {
    super(e14, t2), $o(this, e14), this.on(e14, [`loadstart`, `volumechange`], (e15) => this.update(e15));
  }
  buildCSSClass() {
    return `vjs-mute-control ${super.buildCSSClass()}`;
  }
  handleClick(e14) {
    let t2 = this.player_.volume(), n2 = this.player_.lastVolume_();
    if (t2 === 0) {
      let e15 = n2 < 0.1 ? 0.1 : n2;
      this.player_.volume(e15), this.player_.muted(false);
    } else this.player_.muted(!this.player_.muted());
  }
  update(e14) {
    this.updateIcon_(), this.updateControlText_();
  }
  updateIcon_() {
    let e14 = this.player_.volume(), t2 = 3;
    this.setIcon(`volume-high`), Sr && this.player_.tech_ && this.player_.tech_.el_ && this.player_.muted(this.player_.tech_.el_.muted), e14 === 0 || this.player_.muted() ? (this.setIcon(`volume-mute`), t2 = 0) : e14 < 0.33 ? (this.setIcon(`volume-low`), t2 = 1) : e14 < 0.67 && (this.setIcon(`volume-medium`), t2 = 2), Nr(this.el_, [0, 1, 2, 3].reduce((e15, t3) => e15 + `${t3 ? ` ` : ``}vjs-vol-${t3}`, ``)), Mr(this.el_, `vjs-vol-${t2}`);
  }
  updateControlText_() {
    let e14 = this.player_.muted() || this.player_.volume() === 0 ? `Unmute` : `Mute`;
    this.controlText() !== e14 && this.controlText(e14);
  }
};
es.prototype.controlText_ = `Mute`, q.registerComponent(`MuteToggle`, es);
var ts = class extends q {
  constructor(e14, t2 = {}) {
    t2.inline === void 0 ? t2.inline = true : t2.inline = t2.inline, (t2.volumeControl === void 0 || $n(t2.volumeControl)) && (t2.volumeControl = t2.volumeControl || {}, t2.volumeControl.vertical = !t2.inline), super(e14, t2), this.handleKeyPressHandler_ = (e15) => this.handleKeyPress(e15), this.on(e14, [`loadstart`], (e15) => this.volumePanelState_(e15)), this.on(this.muteToggle, `keyup`, (e15) => this.handleKeyPress(e15)), this.on(this.volumeControl, `keyup`, (e15) => this.handleVolumeControlKeyUp(e15)), this.on(`keydown`, (e15) => this.handleKeyPress(e15)), this.on(`mouseover`, (e15) => this.handleMouseOver(e15)), this.on(`mouseout`, (e15) => this.handleMouseOut(e15)), this.on(this.volumeControl, [`slideractive`], this.sliderActive_), this.on(this.volumeControl, [`sliderinactive`], this.sliderInactive_);
  }
  sliderActive_() {
    this.addClass(`vjs-slider-active`);
  }
  sliderInactive_() {
    this.removeClass(`vjs-slider-active`);
  }
  volumePanelState_() {
    this.volumeControl.hasClass(`vjs-hidden`) && this.muteToggle.hasClass(`vjs-hidden`) && this.addClass(`vjs-hidden`), this.volumeControl.hasClass(`vjs-hidden`) && !this.muteToggle.hasClass(`vjs-hidden`) && this.addClass(`vjs-mute-toggle-only`);
  }
  createEl() {
    let e14 = `vjs-volume-panel-horizontal`;
    return this.options_.inline || (e14 = `vjs-volume-panel-vertical`), super.createEl(`div`, { className: `vjs-volume-panel vjs-control ${e14}` });
  }
  dispose() {
    this.handleMouseOut(), super.dispose();
  }
  handleVolumeControlKeyUp(e14) {
    _.default.isEventKey(e14, `Esc`) && this.muteToggle.focus();
  }
  handleMouseOver(e14) {
    this.addClass(`vjs-hover`), vi(g.default, `keyup`, this.handleKeyPressHandler_);
  }
  handleMouseOut(e14) {
    this.removeClass(`vjs-hover`), yi(g.default, `keyup`, this.handleKeyPressHandler_);
  }
  handleKeyPress(e14) {
    _.default.isEventKey(e14, `Esc`) && this.handleMouseOut();
  }
};
ts.prototype.options_ = { children: [`muteToggle`, `volumeControl`] }, q.registerComponent(`VolumePanel`, ts);
var ns = class extends So {
  constructor(e14, t2) {
    super(e14, t2), this.validOptions = [5, 10, 30], this.skipTime = this.getSkipForwardTime(), this.skipTime && this.validOptions.includes(this.skipTime) ? (this.setIcon(`forward-${this.skipTime}`), this.controlText(this.localize(`Skip forward {1} seconds`, [this.skipTime.toLocaleString(e14.language())])), this.show()) : this.hide();
  }
  getSkipForwardTime() {
    let e14 = this.options_.playerOptions;
    return e14.controlBar && e14.controlBar.skipButtons && e14.controlBar.skipButtons.forward;
  }
  buildCSSClass() {
    return `vjs-skip-forward-${this.getSkipForwardTime()} ${super.buildCSSClass()}`;
  }
  handleClick(e14) {
    if (isNaN(this.player_.duration())) return;
    let t2 = this.player_.currentTime(), n2 = this.player_.liveTracker, r2 = n2 && n2.isLive() ? n2.seekableEnd() : this.player_.duration(), i2;
    i2 = t2 + this.skipTime <= r2 ? t2 + this.skipTime : r2, this.player_.currentTime(i2);
  }
  handleLanguagechange() {
    this.controlText(this.localize(`Skip forward {1} seconds`, [this.skipTime]));
  }
};
ns.prototype.controlText_ = `Skip Forward`, q.registerComponent(`SkipForward`, ns);
var rs = class extends So {
  constructor(e14, t2) {
    super(e14, t2), this.validOptions = [5, 10, 30], this.skipTime = this.getSkipBackwardTime(), this.skipTime && this.validOptions.includes(this.skipTime) ? (this.setIcon(`replay-${this.skipTime}`), this.controlText(this.localize(`Skip backward {1} seconds`, [this.skipTime.toLocaleString(e14.language())])), this.show()) : this.hide();
  }
  getSkipBackwardTime() {
    let e14 = this.options_.playerOptions;
    return e14.controlBar && e14.controlBar.skipButtons && e14.controlBar.skipButtons.backward;
  }
  buildCSSClass() {
    return `vjs-skip-backward-${this.getSkipBackwardTime()} ${super.buildCSSClass()}`;
  }
  handleClick(e14) {
    let t2 = this.player_.currentTime(), n2 = this.player_.liveTracker, r2 = n2 && n2.isLive() && n2.seekableStart(), i2;
    i2 = r2 && t2 - this.skipTime <= r2 ? r2 : t2 >= this.skipTime ? t2 - this.skipTime : 0, this.player_.currentTime(i2);
  }
  handleLanguagechange() {
    this.controlText(this.localize(`Skip backward {1} seconds`, [this.skipTime]));
  }
};
rs.prototype.controlText_ = `Skip Backward`, q.registerComponent(`SkipBackward`, rs);
var is = class extends q {
  constructor(e14, t2) {
    super(e14, t2), t2 && (this.menuButton_ = t2.menuButton), this.focusedChild_ = -1, this.on(`keydown`, (e15) => this.handleKeyDown(e15)), this.boundHandleBlur_ = (e15) => this.handleBlur(e15), this.boundHandleTapClick_ = (e15) => this.handleTapClick(e15);
  }
  addEventListenerForItem(e14) {
    e14 instanceof q && (this.on(e14, `blur`, this.boundHandleBlur_), this.on(e14, [`tap`, `click`], this.boundHandleTapClick_));
  }
  removeEventListenerForItem(e14) {
    e14 instanceof q && (this.off(e14, `blur`, this.boundHandleBlur_), this.off(e14, [`tap`, `click`], this.boundHandleTapClick_));
  }
  removeChild(e14) {
    typeof e14 == `string` && (e14 = this.getChild(e14)), this.removeEventListenerForItem(e14), super.removeChild(e14);
  }
  addItem(e14) {
    let t2 = this.addChild(e14);
    t2 && this.addEventListenerForItem(t2);
  }
  createEl() {
    let e14 = this.options_.contentElType || `ul`;
    this.contentEl_ = U(e14, { className: `vjs-menu-content` }), this.contentEl_.setAttribute(`role`, `menu`);
    let t2 = super.createEl(`div`, { append: this.contentEl_, className: `vjs-menu` });
    return t2.appendChild(this.contentEl_), vi(t2, `click`, function(e15) {
      e15.preventDefault(), e15.stopImmediatePropagation();
    }), t2;
  }
  dispose() {
    this.contentEl_ = null, this.boundHandleBlur_ = null, this.boundHandleTapClick_ = null, super.dispose();
  }
  handleBlur(e14) {
    let t2 = e14.relatedTarget || g.default.activeElement;
    if (!this.children().some((e15) => e15.el() === t2)) {
      let e15 = this.menuButton_;
      e15 && e15.buttonPressed_ && t2 !== e15.el().firstChild && e15.unpressButton();
    }
  }
  handleTapClick(e14) {
    if (this.menuButton_) {
      this.menuButton_.unpressButton();
      let t2 = this.children();
      if (!Array.isArray(t2)) return;
      let n2 = t2.filter((t3) => t3.el() === e14.target)[0];
      if (!n2) return;
      n2.name() !== `CaptionSettingsMenuItem` && this.menuButton_.focus();
    }
  }
  handleKeyDown(e14) {
    _.default.isEventKey(e14, `Left`) || _.default.isEventKey(e14, `Down`) ? (e14.preventDefault(), e14.stopPropagation(), this.stepForward()) : (_.default.isEventKey(e14, `Right`) || _.default.isEventKey(e14, `Up`)) && (e14.preventDefault(), e14.stopPropagation(), this.stepBack());
  }
  stepForward() {
    let e14 = 0;
    this.focusedChild_ !== void 0 && (e14 = this.focusedChild_ + 1), this.focus(e14);
  }
  stepBack() {
    let e14 = 0;
    this.focusedChild_ !== void 0 && (e14 = this.focusedChild_ - 1), this.focus(e14);
  }
  focus(e14 = 0) {
    let t2 = this.children().slice();
    t2.length && t2[0].hasClass(`vjs-menu-title`) && t2.shift(), t2.length > 0 && (e14 < 0 ? e14 = 0 : e14 >= t2.length && (e14 = t2.length - 1), this.focusedChild_ = e14, t2[e14].el_.focus());
  }
};
q.registerComponent(`Menu`, is);
var as = class extends q {
  constructor(e14, t2 = {}) {
    super(e14, t2), this.menuButton_ = new So(e14, t2), this.menuButton_.controlText(this.controlText_), this.menuButton_.el_.setAttribute(`aria-haspopup`, `true`);
    let n2 = So.prototype.buildCSSClass();
    this.menuButton_.el_.className = this.buildCSSClass() + ` ` + n2, this.menuButton_.removeClass(`vjs-control`), this.addChild(this.menuButton_), this.update(), this.enabled_ = true;
    let r2 = (e15) => this.handleClick(e15);
    this.handleMenuKeyUp_ = (e15) => this.handleMenuKeyUp(e15), this.on(this.menuButton_, `tap`, r2), this.on(this.menuButton_, `click`, r2), this.on(this.menuButton_, `keydown`, (e15) => this.handleKeyDown(e15)), this.on(this.menuButton_, `mouseenter`, () => {
      this.addClass(`vjs-hover`), this.menu.show(), vi(g.default, `keyup`, this.handleMenuKeyUp_);
    }), this.on(`mouseleave`, (e15) => this.handleMouseLeave(e15)), this.on(`keydown`, (e15) => this.handleSubmenuKeyDown(e15));
  }
  update() {
    let e14 = this.createMenu();
    this.menu && (this.menu.dispose(), this.removeChild(this.menu)), this.menu = e14, this.addChild(e14), this.buttonPressed_ = false, this.menuButton_.el_.setAttribute(`aria-expanded`, `false`), this.items && this.items.length <= this.hideThreshold_ ? (this.hide(), this.menu.contentEl_.removeAttribute(`role`)) : (this.show(), this.menu.contentEl_.setAttribute(`role`, `menu`));
  }
  createMenu() {
    let e14 = new is(this.player_, { menuButton: this });
    if (this.hideThreshold_ = 0, this.options_.title) {
      let t2 = U(`li`, { className: `vjs-menu-title`, textContent: K(this.options_.title), tabIndex: -1 }), n2 = new q(this.player_, { el: t2 });
      e14.addItem(n2);
    }
    if (this.items = this.createItems(), this.items) for (let t2 = 0; t2 < this.items.length; t2++) e14.addItem(this.items[t2]);
    return e14;
  }
  createItems() {
  }
  createEl() {
    return super.createEl(`div`, { className: this.buildWrapperCSSClass() }, {});
  }
  setIcon(e14) {
    super.setIcon(e14, this.menuButton_.el_);
  }
  buildWrapperCSSClass() {
    let e14 = `vjs-menu-button`;
    this.options_.inline === true ? e14 += `-inline` : e14 += `-popup`;
    let t2 = So.prototype.buildCSSClass();
    return `vjs-menu-button ${e14} ${t2} ${super.buildCSSClass()}`;
  }
  buildCSSClass() {
    let e14 = `vjs-menu-button`;
    return this.options_.inline === true ? e14 += `-inline` : e14 += `-popup`, `vjs-menu-button ${e14} ${super.buildCSSClass()}`;
  }
  controlText(e14, t2 = this.menuButton_.el()) {
    return this.menuButton_.controlText(e14, t2);
  }
  dispose() {
    this.handleMouseLeave(), super.dispose();
  }
  handleClick(e14) {
    this.buttonPressed_ ? this.unpressButton() : this.pressButton();
  }
  handleMouseLeave(e14) {
    this.removeClass(`vjs-hover`), yi(g.default, `keyup`, this.handleMenuKeyUp_);
  }
  focus() {
    this.menuButton_.focus();
  }
  blur() {
    this.menuButton_.blur();
  }
  handleKeyDown(e14) {
    _.default.isEventKey(e14, `Esc`) || _.default.isEventKey(e14, `Tab`) ? (this.buttonPressed_ && this.unpressButton(), _.default.isEventKey(e14, `Tab`) || (e14.preventDefault(), this.menuButton_.focus())) : (_.default.isEventKey(e14, `Up`) || _.default.isEventKey(e14, `Down`)) && !(this.player_.options_.playerOptions.spatialNavigation && this.player_.options_.playerOptions.spatialNavigation.enabled) && (this.buttonPressed_ || (e14.preventDefault(), this.pressButton()));
  }
  handleMenuKeyUp(e14) {
    (_.default.isEventKey(e14, `Esc`) || _.default.isEventKey(e14, `Tab`)) && this.removeClass(`vjs-hover`);
  }
  handleSubmenuKeyPress(e14) {
    this.handleSubmenuKeyDown(e14);
  }
  handleSubmenuKeyDown(e14) {
    (_.default.isEventKey(e14, `Esc`) || _.default.isEventKey(e14, `Tab`)) && (this.buttonPressed_ && this.unpressButton(), _.default.isEventKey(e14, `Tab`) || (e14.preventDefault(), this.menuButton_.focus()));
  }
  pressButton() {
    if (this.enabled_) {
      if (this.buttonPressed_ = true, this.menu.show(), this.menu.lockShowing(), this.menuButton_.el_.setAttribute(`aria-expanded`, `true`), Sr && kr()) return;
      this.menu.focus();
    }
  }
  unpressButton() {
    this.enabled_ && (this.buttonPressed_ = false, this.menu.unlockShowing(), this.menu.hide(), this.menuButton_.el_.setAttribute(`aria-expanded`, `false`));
  }
  disable() {
    this.unpressButton(), this.enabled_ = false, this.addClass(`vjs-disabled`), this.menuButton_.disable();
  }
  enable() {
    this.enabled_ = true, this.removeClass(`vjs-disabled`), this.menuButton_.enable();
  }
};
q.registerComponent(`MenuButton`, as);
var os = class extends as {
  constructor(e14, t2) {
    let n2 = t2.tracks;
    if (super(e14, t2), this.items.length <= 1 && this.hide(), !n2) return;
    let r2 = G(this, this.update);
    n2.addEventListener(`removetrack`, r2), n2.addEventListener(`addtrack`, r2), n2.addEventListener(`labelchange`, r2), this.player_.on(`ready`, r2), this.player_.on(`dispose`, function() {
      n2.removeEventListener(`removetrack`, r2), n2.removeEventListener(`addtrack`, r2), n2.removeEventListener(`labelchange`, r2);
    });
  }
};
q.registerComponent(`TrackButton`, os);
var ss = [`Tab`, `Esc`, `Up`, `Down`, `Right`, `Left`], cs = class extends fo {
  constructor(e14, t2) {
    super(e14, t2), this.selectable = t2.selectable, this.isSelected_ = t2.selected || false, this.multiSelectable = t2.multiSelectable, this.selected(this.isSelected_), this.selectable ? this.multiSelectable ? this.el_.setAttribute(`role`, `menuitemcheckbox`) : this.el_.setAttribute(`role`, `menuitemradio`) : this.el_.setAttribute(`role`, `menuitem`);
  }
  createEl(e14, t2, n2) {
    this.nonIconControl = true;
    let r2 = super.createEl(`li`, Object.assign({ className: `vjs-menu-item`, tabIndex: -1 }, t2), n2), i2 = U(`span`, { className: `vjs-menu-item-text`, textContent: this.localize(this.options_.label) });
    return this.player_.options_.experimentalSvgIcons ? r2.appendChild(i2) : r2.replaceChild(i2, r2.querySelector(`.vjs-icon-placeholder`)), r2;
  }
  handleKeyDown(e14) {
    ss.some((t2) => _.default.isEventKey(e14, t2)) || super.handleKeyDown(e14);
  }
  handleClick(e14) {
    this.selected(true);
  }
  selected(e14) {
    this.selectable && (e14 ? (this.addClass(`vjs-selected`), this.el_.setAttribute(`aria-checked`, `true`), this.controlText(`, selected`), this.isSelected_ = true) : (this.removeClass(`vjs-selected`), this.el_.setAttribute(`aria-checked`, `false`), this.controlText(``), this.isSelected_ = false));
  }
};
q.registerComponent(`MenuItem`, cs);
var ls = class extends cs {
  constructor(e14, t2) {
    let n2 = t2.track, r2 = e14.textTracks();
    t2.label = n2.label || n2.language || `Unknown`, t2.selected = n2.mode === `showing`, super(e14, t2), this.track = n2, this.kinds = (t2.kinds || [t2.kind || this.track.kind]).filter(Boolean);
    let i2 = (...e15) => {
      this.handleTracksChange.apply(this, e15);
    }, a2 = (...e15) => {
      this.handleSelectedLanguageChange.apply(this, e15);
    };
    if (e14.on([`loadstart`, `texttrackchange`], i2), r2.addEventListener(`change`, i2), r2.addEventListener(`selectedlanguagechange`, a2), this.on(`dispose`, function() {
      e14.off([`loadstart`, `texttrackchange`], i2), r2.removeEventListener(`change`, i2), r2.removeEventListener(`selectedlanguagechange`, a2);
    }), r2.onchange === void 0) {
      let e15;
      this.on([`tap`, `click`], function() {
        if (typeof h.default.Event != `object`) try {
          e15 = new h.default.Event(`change`);
        } catch {
        }
        e15 || (e15 = g.default.createEvent(`Event`), e15.initEvent(`change`, true, true)), r2.dispatchEvent(e15);
      });
    }
    this.handleTracksChange();
  }
  handleClick(e14) {
    let t2 = this.track, n2 = this.player_.textTracks();
    if (super.handleClick(e14), n2) for (let e15 = 0; e15 < n2.length; e15++) {
      let r2 = n2[e15];
      this.kinds.indexOf(r2.kind) !== -1 && (r2 === t2 ? r2.mode !== `showing` && (r2.mode = `showing`) : r2.mode !== `disabled` && (r2.mode = `disabled`));
    }
  }
  handleTracksChange(e14) {
    let t2 = this.track.mode === `showing`;
    t2 !== this.isSelected_ && this.selected(t2);
  }
  handleSelectedLanguageChange(e14) {
    if (this.track.mode === `showing`) {
      let e15 = this.player_.cache_.selectedLanguage;
      if (e15 && e15.enabled && e15.language === this.track.language && e15.kind !== this.track.kind) return;
      this.player_.cache_.selectedLanguage = { enabled: true, language: this.track.language, kind: this.track.kind };
    }
  }
  dispose() {
    this.track = null, super.dispose();
  }
};
q.registerComponent(`TextTrackMenuItem`, ls);
var us = class extends ls {
  constructor(e14, t2) {
    t2.track = { player: e14, kind: t2.kind, kinds: t2.kinds, default: false, mode: `disabled` }, t2.kinds ||= [t2.kind], t2.label ? t2.track.label = t2.label : t2.track.label = t2.kinds.join(` and `) + ` off`, t2.selectable = true, t2.multiSelectable = false, super(e14, t2);
  }
  handleTracksChange(e14) {
    let t2 = this.player().textTracks(), n2 = true;
    for (let e15 = 0, r2 = t2.length; e15 < r2; e15++) {
      let r3 = t2[e15];
      if (this.options_.kinds.indexOf(r3.kind) > -1 && r3.mode === `showing`) {
        n2 = false;
        break;
      }
    }
    n2 !== this.isSelected_ && this.selected(n2);
  }
  handleSelectedLanguageChange(e14) {
    let t2 = this.player().textTracks(), n2 = true;
    for (let e15 = 0, r2 = t2.length; e15 < r2; e15++) {
      let r3 = t2[e15];
      if ([`captions`, `descriptions`, `subtitles`].indexOf(r3.kind) > -1 && r3.mode === `showing`) {
        n2 = false;
        break;
      }
    }
    n2 && (this.player_.cache_.selectedLanguage = { enabled: false });
  }
  handleLanguagechange() {
    this.$(`.vjs-menu-item-text`).textContent = this.player_.localize(this.options_.label), super.handleLanguagechange();
  }
};
q.registerComponent(`OffTextTrackMenuItem`, us);
var ds = class extends os {
  constructor(e14, t2 = {}) {
    t2.tracks = e14.textTracks(), super(e14, t2);
  }
  createItems(e14 = [], t2 = ls) {
    let n2;
    this.label_ && (n2 = `${this.label_} off`), e14.push(new us(this.player_, { kinds: this.kinds_, kind: this.kind_, label: n2 })), this.hideThreshold_ += 1;
    let r2 = this.player_.textTracks();
    Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
    for (let n3 = 0; n3 < r2.length; n3++) {
      let i2 = r2[n3];
      if (this.kinds_.indexOf(i2.kind) > -1) {
        let n4 = new t2(this.player_, { track: i2, kinds: this.kinds_, kind: this.kind_, selectable: true, multiSelectable: false });
        n4.addClass(`vjs-${i2.kind}-menu-item`), e14.push(n4);
      }
    }
    return e14;
  }
};
q.registerComponent(`TextTrackButton`, ds);
var fs = class extends cs {
  constructor(e14, t2) {
    let n2 = t2.track, r2 = t2.cue, i2 = e14.currentTime();
    t2.selectable = true, t2.multiSelectable = false, t2.label = r2.text, t2.selected = r2.startTime <= i2 && i2 < r2.endTime, super(e14, t2), this.track = n2, this.cue = r2;
  }
  handleClick(e14) {
    super.handleClick(), this.player_.currentTime(this.cue.startTime);
  }
};
q.registerComponent(`ChaptersTrackMenuItem`, fs);
var ps = class extends ds {
  constructor(e14, t2, n2) {
    super(e14, t2, n2), this.setIcon(`chapters`), this.selectCurrentItem_ = () => {
      this.items.forEach((e15) => {
        e15.selected(this.track_.activeCues[0] === e15.cue);
      });
    };
  }
  buildCSSClass() {
    return `vjs-chapters-button ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-chapters-button ${super.buildWrapperCSSClass()}`;
  }
  update(e14) {
    if (e14 && e14.track && e14.track.kind !== `chapters`) return;
    let t2 = this.findChaptersTrack();
    t2 === this.track_ ? (!this.items || t2 && t2.cues && t2.cues.length !== this.items.length) && super.update() : (this.setTrack(t2), super.update());
  }
  setTrack(e14) {
    if (this.track_ !== e14) {
      if (this.updateHandler_ ||= this.update.bind(this), this.track_) {
        let e15 = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
        e15 && e15.removeEventListener(`load`, this.updateHandler_), this.track_.removeEventListener(`cuechange`, this.selectCurrentItem_), this.track_ = null;
      }
      if (this.track_ = e14, this.track_) {
        this.track_.mode = `hidden`;
        let e15 = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
        e15 && e15.addEventListener(`load`, this.updateHandler_), this.track_.addEventListener(`cuechange`, this.selectCurrentItem_);
      }
    }
  }
  findChaptersTrack() {
    let e14 = this.player_.textTracks() || [];
    for (let t2 = e14.length - 1; t2 >= 0; t2--) {
      let n2 = e14[t2];
      if (n2.kind === this.kind_) return n2;
    }
  }
  getMenuCaption() {
    return this.track_ && this.track_.label ? this.track_.label : this.localize(K(this.kind_));
  }
  createMenu() {
    return this.options_.title = this.getMenuCaption(), super.createMenu();
  }
  createItems() {
    let e14 = [];
    if (!this.track_) return e14;
    let t2 = this.track_.cues;
    if (!t2) return e14;
    for (let n2 = 0, r2 = t2.length; n2 < r2; n2++) {
      let r3 = t2[n2], i2 = new fs(this.player_, { track: this.track_, cue: r3 });
      e14.push(i2);
    }
    return e14;
  }
};
ps.prototype.kind_ = `chapters`, ps.prototype.controlText_ = `Chapters`, q.registerComponent(`ChaptersButton`, ps);
var ms = class extends ds {
  constructor(e14, t2, n2) {
    super(e14, t2, n2), this.setIcon(`audio-description`);
    let r2 = e14.textTracks(), i2 = G(this, this.handleTracksChange);
    r2.addEventListener(`change`, i2), this.on(`dispose`, function() {
      r2.removeEventListener(`change`, i2);
    });
  }
  handleTracksChange(e14) {
    let t2 = this.player().textTracks(), n2 = false;
    for (let e15 = 0, r2 = t2.length; e15 < r2; e15++) {
      let r3 = t2[e15];
      if (r3.kind !== this.kind_ && r3.mode === `showing`) {
        n2 = true;
        break;
      }
    }
    n2 ? this.disable() : this.enable();
  }
  buildCSSClass() {
    return `vjs-descriptions-button ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-descriptions-button ${super.buildWrapperCSSClass()}`;
  }
};
ms.prototype.kind_ = `descriptions`, ms.prototype.controlText_ = `Descriptions`, q.registerComponent(`DescriptionsButton`, ms);
var hs = class extends ds {
  constructor(e14, t2, n2) {
    super(e14, t2, n2), this.setIcon(`subtitles`);
  }
  buildCSSClass() {
    return `vjs-subtitles-button ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-subtitles-button ${super.buildWrapperCSSClass()}`;
  }
};
hs.prototype.kind_ = `subtitles`, hs.prototype.controlText_ = `Subtitles`, q.registerComponent(`SubtitlesButton`, hs);
var gs = class extends ls {
  constructor(e14, t2) {
    t2.track = { player: e14, kind: t2.kind, label: t2.kind + ` settings`, selectable: false, default: false, mode: `disabled` }, t2.selectable = false, t2.name = `CaptionSettingsMenuItem`, super(e14, t2), this.addClass(`vjs-texttrack-settings`), this.controlText(`, opens ` + t2.kind + ` settings dialog`);
  }
  handleClick(e14) {
    this.player().getChild(`textTrackSettings`).open();
  }
  handleLanguagechange() {
    this.$(`.vjs-menu-item-text`).textContent = this.player_.localize(this.options_.kind + ` settings`), super.handleLanguagechange();
  }
};
q.registerComponent(`CaptionSettingsMenuItem`, gs);
var _s = class extends ds {
  constructor(e14, t2, n2) {
    super(e14, t2, n2), this.setIcon(`captions`);
  }
  buildCSSClass() {
    return `vjs-captions-button ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-captions-button ${super.buildWrapperCSSClass()}`;
  }
  createItems() {
    let e14 = [];
    return !(this.player().tech_ && this.player().tech_.featuresNativeTextTracks) && this.player().getChild(`textTrackSettings`) && (e14.push(new gs(this.player_, { kind: this.kind_ })), this.hideThreshold_ += 1), super.createItems(e14);
  }
};
_s.prototype.kind_ = `captions`, _s.prototype.controlText_ = `Captions`, q.registerComponent(`CaptionsButton`, _s);
var vs = class extends ls {
  createEl(e14, t2, n2) {
    let r2 = super.createEl(e14, t2, n2), i2 = r2.querySelector(`.vjs-menu-item-text`);
    return this.options_.track.kind === `captions` && (this.player_.options_.experimentalSvgIcons ? this.setIcon(`captions`, r2) : i2.appendChild(U(`span`, { className: `vjs-icon-placeholder` }, { "aria-hidden": true })), i2.appendChild(U(`span`, { className: `vjs-control-text`, textContent: ` ${this.localize(`Captions`)}` }))), r2;
  }
};
q.registerComponent(`SubsCapsMenuItem`, vs);
var ys = class extends ds {
  constructor(e14, t2 = {}) {
    super(e14, t2), this.label_ = `subtitles`, this.setIcon(`subtitles`), [`en`, `en-us`, `en-ca`, `fr-ca`].indexOf(this.player_.language_) > -1 && (this.label_ = `captions`, this.setIcon(`captions`)), this.menuButton_.controlText(K(this.label_));
  }
  buildCSSClass() {
    return `vjs-subs-caps-button ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-subs-caps-button ${super.buildWrapperCSSClass()}`;
  }
  createItems() {
    let e14 = [];
    return !(this.player().tech_ && this.player().tech_.featuresNativeTextTracks) && this.player().getChild(`textTrackSettings`) && (e14.push(new gs(this.player_, { kind: this.label_ })), this.hideThreshold_ += 1), e14 = super.createItems(e14, vs), e14;
  }
};
ys.prototype.kinds_ = [`captions`, `subtitles`], ys.prototype.controlText_ = `Subtitles`, q.registerComponent(`SubsCapsButton`, ys);
var bs = class extends cs {
  constructor(e14, t2) {
    let n2 = t2.track, r2 = e14.audioTracks();
    t2.label = n2.label || n2.language || `Unknown`, t2.selected = n2.enabled, super(e14, t2), this.track = n2, this.addClass(`vjs-${n2.kind}-menu-item`);
    let i2 = (...e15) => {
      this.handleTracksChange.apply(this, e15);
    };
    r2.addEventListener(`change`, i2), this.on(`dispose`, () => {
      r2.removeEventListener(`change`, i2);
    });
  }
  createEl(e14, t2, n2) {
    let r2 = super.createEl(e14, t2, n2), i2 = r2.querySelector(`.vjs-menu-item-text`);
    return [`main-desc`, `description`].indexOf(this.options_.track.kind) >= 0 && (i2.appendChild(U(`span`, { className: `vjs-icon-placeholder` }, { "aria-hidden": true })), i2.appendChild(U(`span`, { className: `vjs-control-text`, textContent: ` ` + this.localize(`Descriptions`) }))), r2;
  }
  handleClick(e14) {
    if (super.handleClick(e14), this.track.enabled = true, this.player_.tech_.featuresNativeAudioTracks) {
      let e15 = this.player_.audioTracks();
      for (let t2 = 0; t2 < e15.length; t2++) {
        let n2 = e15[t2];
        n2 !== this.track && (n2.enabled = n2 === this.track);
      }
    }
  }
  handleTracksChange(e14) {
    this.selected(this.track.enabled);
  }
};
q.registerComponent(`AudioTrackMenuItem`, bs);
var xs = class extends os {
  constructor(e14, t2 = {}) {
    t2.tracks = e14.audioTracks(), super(e14, t2), this.setIcon(`audio`);
  }
  buildCSSClass() {
    return `vjs-audio-button ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-audio-button ${super.buildWrapperCSSClass()}`;
  }
  createItems(e14 = []) {
    this.hideThreshold_ = 1;
    let t2 = this.player_.audioTracks();
    for (let n2 = 0; n2 < t2.length; n2++) {
      let r2 = t2[n2];
      e14.push(new bs(this.player_, { track: r2, selectable: true, multiSelectable: false }));
    }
    return e14;
  }
};
xs.prototype.controlText_ = `Audio Track`, q.registerComponent(`AudioTrackButton`, xs);
var Ss = class extends cs {
  constructor(e14, t2) {
    let n2 = t2.rate, r2 = parseFloat(n2, 10);
    t2.label = n2, t2.selected = r2 === e14.playbackRate(), t2.selectable = true, t2.multiSelectable = false, super(e14, t2), this.label = n2, this.rate = r2, this.on(e14, `ratechange`, (e15) => this.update(e15));
  }
  handleClick(e14) {
    super.handleClick(), this.player().playbackRate(this.rate);
  }
  update(e14) {
    this.selected(this.player().playbackRate() === this.rate);
  }
};
Ss.prototype.contentElType = `button`, q.registerComponent(`PlaybackRateMenuItem`, Ss);
var Cs = class extends as {
  constructor(e14, t2) {
    super(e14, t2), this.menuButton_.el_.setAttribute(`aria-describedby`, this.labelElId_), this.updateVisibility(), this.updateLabel(), this.on(e14, `loadstart`, (e15) => this.updateVisibility(e15)), this.on(e14, `ratechange`, (e15) => this.updateLabel(e15)), this.on(e14, `playbackrateschange`, (e15) => this.handlePlaybackRateschange(e15));
  }
  createEl() {
    let e14 = super.createEl();
    return this.labelElId_ = `vjs-playback-rate-value-label-` + this.id_, this.labelEl_ = U(`div`, { className: `vjs-playback-rate-value`, id: this.labelElId_, textContent: `1x` }), e14.appendChild(this.labelEl_), e14;
  }
  dispose() {
    this.labelEl_ = null, super.dispose();
  }
  buildCSSClass() {
    return `vjs-playback-rate ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-playback-rate ${super.buildWrapperCSSClass()}`;
  }
  createItems() {
    let e14 = this.playbackRates(), t2 = [];
    for (let n2 = e14.length - 1; n2 >= 0; n2--) t2.push(new Ss(this.player(), { rate: e14[n2] + `x` }));
    return t2;
  }
  handlePlaybackRateschange(e14) {
    this.update();
  }
  playbackRates() {
    let e14 = this.player();
    return e14.playbackRates && e14.playbackRates() || [];
  }
  playbackRateSupported() {
    return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0;
  }
  updateVisibility(e14) {
    this.playbackRateSupported() ? this.removeClass(`vjs-hidden`) : this.addClass(`vjs-hidden`);
  }
  updateLabel(e14) {
    this.playbackRateSupported() && (this.labelEl_.textContent = this.player().playbackRate() + `x`);
  }
};
Cs.prototype.controlText_ = `Playback Rate`, q.registerComponent(`PlaybackRateMenuButton`, Cs);
var ws = class extends q {
  buildCSSClass() {
    return `vjs-spacer ${super.buildCSSClass()}`;
  }
  createEl(e14 = `div`, t2 = {}, n2 = {}) {
    return t2.className ||= this.buildCSSClass(), super.createEl(e14, t2, n2);
  }
};
q.registerComponent(`Spacer`, ws);
var Ts = class extends ws {
  buildCSSClass() {
    return `vjs-custom-control-spacer ${super.buildCSSClass()}`;
  }
  createEl() {
    return super.createEl(`div`, { className: this.buildCSSClass(), textContent: `\xA0` });
  }
};
q.registerComponent(`CustomControlSpacer`, Ts);
var Es = class extends q {
  createEl() {
    return super.createEl(`div`, { className: `vjs-control-bar`, dir: `ltr` });
  }
};
Es.prototype.options_ = { children: [`playToggle`, `skipBackward`, `skipForward`, `volumePanel`, `currentTimeDisplay`, `timeDivider`, `durationDisplay`, `progressControl`, `liveDisplay`, `seekToLive`, `remainingTimeDisplay`, `customControlSpacer`, `playbackRateMenuButton`, `chaptersButton`, `descriptionsButton`, `subsCapsButton`, `audioTrackButton`, `pictureInPictureToggle`, `fullscreenToggle`] }, q.registerComponent(`ControlBar`, Es);
var Ds = class extends ca {
  constructor(e14, t2) {
    super(e14, t2), this.on(e14, `error`, (e15) => {
      this.open(e15);
    });
  }
  buildCSSClass() {
    return `vjs-error-display ${super.buildCSSClass()}`;
  }
  content() {
    let e14 = this.player().error();
    return e14 ? this.localize(e14.message) : ``;
  }
};
Ds.prototype.options_ = Object.assign({}, ca.prototype.options_, { pauseOnOpen: false, fillAlways: true, temporary: false, uncloseable: true }), q.registerComponent(`ErrorDisplay`, Ds);
var Os = class extends q {
  constructor(e14, t2 = {}) {
    super(e14, t2), this.el_.setAttribute(`aria-labelledby`, this.selectLabelledbyIds);
  }
  createEl() {
    return this.selectLabelledbyIds = [this.options_.legendId, this.options_.labelId].join(` `).trim(), U(`select`, { id: this.options_.id }, {}, this.options_.SelectOptions.map((e14) => {
      let t2 = this.options_.labelId + `-` + e14[1].replace(/\W+/g, ``), n2 = U(`option`, { id: t2, value: this.localize(e14[0]), textContent: e14[1] });
      return n2.setAttribute(`aria-labelledby`, `${this.selectLabelledbyIds} ${t2}`), n2;
    }));
  }
};
q.registerComponent(`TextTrackSelect`, Os);
var ks = class extends q {
  constructor(e14, t2 = {}) {
    super(e14, t2);
    let n2 = U(`legend`, { textContent: this.localize(this.options_.legendText), id: this.options_.legendId });
    this.el().appendChild(n2);
    let r2 = this.options_.selects;
    for (let t3 of r2) {
      let n3 = this.options_.selectConfigs[t3], r3 = n3.className, i2 = n3.id.replace(`%s`, this.options_.id_), a2 = null, o2 = `vjs_select_${di()}`;
      if (this.options_.type === `colors`) {
        a2 = U(`span`, { className: r3 });
        let e15 = U(`label`, { id: i2, className: `vjs-label`, textContent: n3.label });
        e15.setAttribute(`for`, o2), a2.appendChild(e15);
      }
      let s2 = new Os(e14, { SelectOptions: n3.options, legendId: this.options_.legendId, id: o2, labelId: i2 });
      this.addChild(s2), this.options_.type === `colors` && (a2.appendChild(s2.el()), this.el().appendChild(a2));
    }
  }
  createEl() {
    return U(`fieldset`, { className: this.options_.className });
  }
};
q.registerComponent(`TextTrackFieldset`, ks);
var As = class extends q {
  constructor(e14, t2 = {}) {
    super(e14, t2);
    let n2 = this.options_.textTrackComponentid, r2 = new ks(e14, { id_: n2, legendId: `captions-text-legend-${n2}`, legendText: this.localize(`Text`), className: `vjs-fg vjs-track-setting`, selects: this.options_.fieldSets[0], selectConfigs: this.options_.selectConfigs, type: `colors` });
    this.addChild(r2);
    let i2 = new ks(e14, { id_: n2, legendId: `captions-background-${n2}`, legendText: this.localize(`Text Background`), className: `vjs-bg vjs-track-setting`, selects: this.options_.fieldSets[1], selectConfigs: this.options_.selectConfigs, type: `colors` });
    this.addChild(i2);
    let a2 = new ks(e14, { id_: n2, legendId: `captions-window-${n2}`, legendText: this.localize(`Caption Area Background`), className: `vjs-window vjs-track-setting`, selects: this.options_.fieldSets[2], selectConfigs: this.options_.selectConfigs, type: `colors` });
    this.addChild(a2);
  }
  createEl() {
    return U(`div`, { className: `vjs-track-settings-colors` });
  }
};
q.registerComponent(`TextTrackSettingsColors`, As);
var js = class extends q {
  constructor(e14, t2 = {}) {
    super(e14, t2);
    let n2 = this.options_.textTrackComponentid, r2 = new ks(e14, { id_: n2, legendId: `captions-font-size-${n2}`, legendText: `Font Size`, className: `vjs-font-percent vjs-track-setting`, selects: this.options_.fieldSets[0], selectConfigs: this.options_.selectConfigs, type: `font` });
    this.addChild(r2);
    let i2 = new ks(e14, { id_: n2, legendId: `captions-background-${n2}`, legendText: this.localize(`Text Edge Style`), className: `vjs-edge-style vjs-track-setting`, selects: this.options_.fieldSets[1], selectConfigs: this.options_.selectConfigs, type: `font` });
    this.addChild(i2);
    let a2 = new ks(e14, { id_: n2, legendId: `captions-font-family-${n2}`, legendText: this.localize(`Font Family`), className: `vjs-font-family vjs-track-setting`, selects: this.options_.fieldSets[2], selectConfigs: this.options_.selectConfigs, type: `font` });
    this.addChild(a2);
  }
  createEl() {
    return U(`div`, { className: `vjs-track-settings-font` });
  }
};
q.registerComponent(`TextTrackSettingsFont`, js);
var Ms = class extends q {
  constructor(e14, t2 = {}) {
    super(e14, t2);
    let n2 = this.localize(`restore all settings to the default values`), r2 = new So(e14, { controlText: n2, className: `vjs-default-button` });
    r2.el().classList.remove(`vjs-control`, `vjs-button`), r2.el().textContent = this.localize(`Reset`), this.addChild(r2);
    let i2 = new So(e14, { controlText: n2, className: `vjs-done-button` });
    i2.el().classList.remove(`vjs-control`, `vjs-button`), i2.el().textContent = this.localize(`Done`), this.addChild(i2);
  }
  createEl() {
    return U(`div`, { className: `vjs-track-settings-controls` });
  }
};
q.registerComponent(`TrackSettingsControls`, Ms);
var Ns = `vjs-text-track-settings`, Ps = [`#000`, `Black`], Fs = [`#00F`, `Blue`], Is = [`#0FF`, `Cyan`], Ls = [`#0F0`, `Green`], Rs = [`#F0F`, `Magenta`], zs = [`#F00`, `Red`], Bs = [`#FFF`, `White`], Vs = [`#FF0`, `Yellow`], Hs = [`1`, `Opaque`], Us = [`0.5`, `Semi-Transparent`], Ws = [`0`, `Transparent`], Gs = { backgroundColor: { selector: `.vjs-bg-color > select`, id: `captions-background-color-%s`, label: `Color`, options: [Ps, Bs, zs, Ls, Fs, Vs, Rs, Is], className: `vjs-bg-color` }, backgroundOpacity: { selector: `.vjs-bg-opacity > select`, id: `captions-background-opacity-%s`, label: `Opacity`, options: [Hs, Us, Ws], className: `vjs-bg-opacity vjs-opacity` }, color: { selector: `.vjs-text-color > select`, id: `captions-foreground-color-%s`, label: `Color`, options: [Bs, Ps, zs, Ls, Fs, Vs, Rs, Is], className: `vjs-text-color` }, edgeStyle: { selector: `.vjs-edge-style > select`, id: ``, label: `Text Edge Style`, options: [[`none`, `None`], [`raised`, `Raised`], [`depressed`, `Depressed`], [`uniform`, `Uniform`], [`dropshadow`, `Drop shadow`]] }, fontFamily: { selector: `.vjs-font-family > select`, id: ``, label: `Font Family`, options: [[`proportionalSansSerif`, `Proportional Sans-Serif`], [`monospaceSansSerif`, `Monospace Sans-Serif`], [`proportionalSerif`, `Proportional Serif`], [`monospaceSerif`, `Monospace Serif`], [`casual`, `Casual`], [`script`, `Script`], [`small-caps`, `Small Caps`]] }, fontPercent: { selector: `.vjs-font-percent > select`, id: ``, label: `Font Size`, options: [[`0.50`, `50%`], [`0.75`, `75%`], [`1.00`, `100%`], [`1.25`, `125%`], [`1.50`, `150%`], [`1.75`, `175%`], [`2.00`, `200%`], [`3.00`, `300%`], [`4.00`, `400%`]], default: 2, parser: (e14) => e14 === `1.00` ? null : Number(e14) }, textOpacity: { selector: `.vjs-text-opacity > select`, id: `captions-foreground-opacity-%s`, label: `Opacity`, options: [Hs, Us], className: `vjs-text-opacity vjs-opacity` }, windowColor: { selector: `.vjs-window-color > select`, id: `captions-window-color-%s`, label: `Color`, className: `vjs-window-color` }, windowOpacity: { selector: `.vjs-window-opacity > select`, id: `captions-window-opacity-%s`, label: `Opacity`, options: [Ws, Us, Hs], className: `vjs-window-opacity vjs-opacity` } };
Gs.windowColor.options = Gs.backgroundColor.options;
function Ks(e14, t2) {
  if (t2 && (e14 = t2(e14)), e14 && e14 !== `none`) return e14;
}
function qs(e14, t2) {
  let n2 = e14.options[e14.options.selectedIndex].value;
  return Ks(n2, t2);
}
function Js(e14, t2, n2) {
  if (t2) {
    for (let r2 = 0; r2 < e14.options.length; r2++) if (Ks(e14.options[r2].value, n2) === t2) {
      e14.selectedIndex = r2;
      break;
    }
  }
}
var Ys = class extends ca {
  constructor(e14, t2) {
    t2.temporary = false, super(e14, t2), this.updateDisplay = this.updateDisplay.bind(this), this.fill(), this.hasBeenOpened_ = this.hasBeenFilled_ = true, this.renderModalComponents(e14), this.endDialog = U(`p`, { className: `vjs-control-text`, textContent: this.localize(`End of dialog window.`) }), this.el().appendChild(this.endDialog), this.setDefaults(), t2.persistTextTrackSettings === void 0 && (this.options_.persistTextTrackSettings = this.options_.playerOptions.persistTextTrackSettings), this.bindFunctionsToSelectsAndButtons(), this.options_.persistTextTrackSettings && this.restoreSettings();
  }
  renderModalComponents(e14) {
    let t2 = new As(e14, { textTrackComponentid: this.id_, selectConfigs: Gs, fieldSets: [[`color`, `textOpacity`], [`backgroundColor`, `backgroundOpacity`], [`windowColor`, `windowOpacity`]] });
    this.addChild(t2);
    let n2 = new js(e14, { textTrackComponentid: this.id_, selectConfigs: Gs, fieldSets: [[`fontPercent`], [`edgeStyle`], [`fontFamily`]] });
    this.addChild(n2);
    let r2 = new Ms(e14);
    this.addChild(r2);
  }
  bindFunctionsToSelectsAndButtons() {
    this.on(this.$(`.vjs-done-button`), `click`, () => {
      this.saveSettings(), this.close();
    }), this.on(this.$(`.vjs-default-button`), `click`, () => {
      this.setDefaults(), this.updateDisplay();
    }), Xn(Gs, (e14) => {
      this.on(this.$(e14.selector), `change`, this.updateDisplay);
    });
  }
  dispose() {
    this.endDialog = null, super.dispose();
  }
  label() {
    return this.localize(`Caption Settings Dialog`);
  }
  description() {
    return this.localize(`Beginning of dialog window. Escape will cancel and close the window.`);
  }
  buildCSSClass() {
    return super.buildCSSClass() + ` vjs-text-track-settings`;
  }
  getValues() {
    return Zn(Gs, (e14, t2, n2) => {
      let r2 = qs(this.$(t2.selector), t2.parser);
      return r2 !== void 0 && (e14[n2] = r2), e14;
    }, {});
  }
  setValues(e14) {
    Xn(Gs, (t2, n2) => {
      Js(this.$(t2.selector), e14[n2], t2.parser);
    });
  }
  setDefaults() {
    Xn(Gs, (e14) => {
      let t2 = e14.hasOwnProperty(`default`) ? e14.default : 0;
      this.$(e14.selector).selectedIndex = t2;
    });
  }
  restoreSettings() {
    let e14;
    try {
      e14 = JSON.parse(h.default.localStorage.getItem(Ns));
    } catch (e15) {
      z.warn(e15);
    }
    e14 && this.setValues(e14);
  }
  saveSettings() {
    if (!this.options_.persistTextTrackSettings) return;
    let e14 = this.getValues();
    try {
      Object.keys(e14).length ? h.default.localStorage.setItem(Ns, JSON.stringify(e14)) : h.default.localStorage.removeItem(Ns);
    } catch (e15) {
      z.warn(e15);
    }
  }
  updateDisplay() {
    let e14 = this.player_.getChild(`textTrackDisplay`);
    e14 && e14.updateDisplay();
  }
  handleLanguagechange() {
    this.fill(), this.renderModalComponents(this.player_), this.bindFunctionsToSelectsAndButtons();
  }
};
q.registerComponent(`TextTrackSettings`, Ys);
var Xs = class extends q {
  constructor(e14, t2) {
    let n2 = t2.ResizeObserver || h.default.ResizeObserver;
    t2.ResizeObserver === null && (n2 = false);
    let r2 = B({ createEl: !n2, reportTouchActivity: false }, t2);
    super(e14, r2), this.ResizeObserver = t2.ResizeObserver || h.default.ResizeObserver, this.loadListener_ = null, this.resizeObserver_ = null, this.debouncedHandler_ = Ei(() => {
      this.resizeHandler();
    }, 100, false, this), n2 ? (this.resizeObserver_ = new this.ResizeObserver(this.debouncedHandler_), this.resizeObserver_.observe(e14.el())) : (this.loadListener_ = () => {
      if (!this.el_ || !this.el_.contentWindow) return;
      let e15 = this.debouncedHandler_, t3 = this.unloadListener_ = function() {
        yi(this, `resize`, e15), yi(this, `unload`, t3), t3 = null;
      };
      vi(this.el_.contentWindow, `unload`, t3), vi(this.el_.contentWindow, `resize`, e15);
    }, this.one(`load`, this.loadListener_));
  }
  createEl() {
    return super.createEl(`iframe`, { className: `vjs-resize-manager`, tabIndex: -1, title: this.localize(`No content`) }, { "aria-hidden": `true` });
  }
  resizeHandler() {
    !this.player_ || !this.player_.trigger || this.player_.trigger(`playerresize`);
  }
  dispose() {
    this.debouncedHandler_ && this.debouncedHandler_.cancel(), this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect()), this.loadListener_ && this.off(`load`, this.loadListener_), this.el_ && this.el_.contentWindow && this.unloadListener_ && this.unloadListener_.call(this.el_.contentWindow), this.ResizeObserver = null, this.resizeObserver = null, this.debouncedHandler_ = null, this.loadListener_ = null, super.dispose();
  }
};
q.registerComponent(`ResizeManager`, Xs);
var Zs = { trackingThreshold: 20, liveTolerance: 15 }, Qs = class extends q {
  constructor(e14, t2) {
    let n2 = B(Zs, t2, { createEl: false });
    super(e14, n2), this.trackLiveHandler_ = () => this.trackLive_(), this.handlePlay_ = (e15) => this.handlePlay(e15), this.handleFirstTimeupdate_ = (e15) => this.handleFirstTimeupdate(e15), this.handleSeeked_ = (e15) => this.handleSeeked(e15), this.seekToLiveEdge_ = (e15) => this.seekToLiveEdge(e15), this.reset_(), this.on(this.player_, `durationchange`, (e15) => this.handleDurationchange(e15)), this.on(this.player_, `canplay`, () => this.toggleTracking());
  }
  trackLive_() {
    let e14 = this.player_.seekable();
    if (!e14 || !e14.length) return;
    let t2 = Number(h.default.performance.now().toFixed(4)), n2 = this.lastTime_ === -1 ? 0 : (t2 - this.lastTime_) / 1e3;
    this.lastTime_ = t2, this.pastSeekEnd_ = this.pastSeekEnd() + n2;
    let r2 = this.liveCurrentTime(), i2 = this.player_.currentTime(), a2 = this.player_.paused() || this.seekedBehindLive_ || Math.abs(r2 - i2) > this.options_.liveTolerance;
    (!this.timeupdateSeen_ || r2 === 1 / 0) && (a2 = false), a2 !== this.behindLiveEdge_ && (this.behindLiveEdge_ = a2, this.trigger(`liveedgechange`));
  }
  handleDurationchange() {
    this.toggleTracking();
  }
  toggleTracking() {
    this.player_.duration() === 1 / 0 && this.liveWindow() >= this.options_.trackingThreshold ? (this.player_.options_.liveui && this.player_.addClass(`vjs-liveui`), this.startTracking()) : (this.player_.removeClass(`vjs-liveui`), this.stopTracking());
  }
  startTracking() {
    this.isTracking() || (this.timeupdateSeen_ ||= this.player_.hasStarted(), this.trackingInterval_ = this.setInterval(this.trackLiveHandler_, wi), this.trackLive_(), this.on(this.player_, [`play`, `pause`], this.trackLiveHandler_), this.timeupdateSeen_ ? this.on(this.player_, `seeked`, this.handleSeeked_) : (this.one(this.player_, `play`, this.handlePlay_), this.one(this.player_, `timeupdate`, this.handleFirstTimeupdate_)));
  }
  handleFirstTimeupdate() {
    this.timeupdateSeen_ = true, this.on(this.player_, `seeked`, this.handleSeeked_);
  }
  handleSeeked() {
    let e14 = Math.abs(this.liveCurrentTime() - this.player_.currentTime());
    this.seekedBehindLive_ = this.nextSeekedFromUser_ && e14 > 2, this.nextSeekedFromUser_ = false, this.trackLive_();
  }
  handlePlay() {
    this.one(this.player_, `timeupdate`, this.seekToLiveEdge_);
  }
  reset_() {
    this.lastTime_ = -1, this.pastSeekEnd_ = 0, this.lastSeekEnd_ = -1, this.behindLiveEdge_ = true, this.timeupdateSeen_ = false, this.seekedBehindLive_ = false, this.nextSeekedFromUser_ = false, this.clearInterval(this.trackingInterval_), this.trackingInterval_ = null, this.off(this.player_, [`play`, `pause`], this.trackLiveHandler_), this.off(this.player_, `seeked`, this.handleSeeked_), this.off(this.player_, `play`, this.handlePlay_), this.off(this.player_, `timeupdate`, this.handleFirstTimeupdate_), this.off(this.player_, `timeupdate`, this.seekToLiveEdge_);
  }
  nextSeekedFromUser() {
    this.nextSeekedFromUser_ = true;
  }
  stopTracking() {
    this.isTracking() && (this.reset_(), this.trigger(`liveedgechange`));
  }
  seekableEnd() {
    let e14 = this.player_.seekable(), t2 = [], n2 = e14 ? e14.length : 0;
    for (; n2--; ) t2.push(e14.end(n2));
    return t2.length ? t2.sort()[t2.length - 1] : 1 / 0;
  }
  seekableStart() {
    let e14 = this.player_.seekable(), t2 = [], n2 = e14 ? e14.length : 0;
    for (; n2--; ) t2.push(e14.start(n2));
    return t2.length ? t2.sort()[0] : 0;
  }
  liveWindow() {
    let e14 = this.liveCurrentTime();
    return e14 === 1 / 0 ? 0 : e14 - this.seekableStart();
  }
  isLive() {
    return this.isTracking();
  }
  atLiveEdge() {
    return !this.behindLiveEdge();
  }
  liveCurrentTime() {
    return this.pastSeekEnd() + this.seekableEnd();
  }
  pastSeekEnd() {
    let e14 = this.seekableEnd();
    return this.lastSeekEnd_ !== -1 && e14 !== this.lastSeekEnd_ && (this.pastSeekEnd_ = 0), this.lastSeekEnd_ = e14, this.pastSeekEnd_;
  }
  behindLiveEdge() {
    return this.behindLiveEdge_;
  }
  isTracking() {
    return typeof this.trackingInterval_ == `number`;
  }
  seekToLiveEdge() {
    this.seekedBehindLive_ = false, !this.atLiveEdge() && (this.nextSeekedFromUser_ = false, this.player_.currentTime(this.liveCurrentTime()));
  }
  dispose() {
    this.stopTracking(), super.dispose();
  }
};
q.registerComponent(`LiveTracker`, Qs);
var $s = class extends q {
  constructor(e14, t2) {
    super(e14, t2), this.on(`statechanged`, (e15) => this.updateDom_()), this.updateDom_();
  }
  createEl() {
    return this.els = { title: U(`div`, { className: `vjs-title-bar-title`, id: `vjs-title-bar-title-${di()}` }), description: U(`div`, { className: `vjs-title-bar-description`, id: `vjs-title-bar-description-${di()}` }) }, U(`div`, { className: `vjs-title-bar` }, {}, er(this.els));
  }
  updateDom_() {
    let e14 = this.player_.tech_, t2 = e14 && e14.el_, n2 = { title: `aria-labelledby`, description: `aria-describedby` };
    [`title`, `description`].forEach((e15) => {
      let r2 = this.state[e15], i2 = this.els[e15], a2 = n2[e15];
      Kr(i2), r2 && W(i2, r2), t2 && (t2.removeAttribute(a2), r2 && t2.setAttribute(a2, i2.id));
    }), this.state.title || this.state.description ? this.show() : this.hide();
  }
  update(e14) {
    this.setState(e14);
  }
  dispose() {
    let e14 = this.player_.tech_, t2 = e14 && e14.el_;
    t2 && (t2.removeAttribute(`aria-labelledby`), t2.removeAttribute(`aria-describedby`)), super.dispose(), this.els = null;
  }
};
q.registerComponent(`TitleBar`, $s);
var ec = (e14) => {
  let t2 = e14.el();
  if (t2.hasAttribute(`src`)) return e14.triggerSourceset(t2.src), true;
  let n2 = e14.$$(`source`), r2 = [], i2 = ``;
  if (!n2.length) return false;
  for (let e15 = 0; e15 < n2.length; e15++) {
    let t3 = n2[e15].src;
    t3 && r2.indexOf(t3) === -1 && r2.push(t3);
  }
  return r2.length ? (r2.length === 1 && (i2 = r2[0]), e14.triggerSourceset(i2), true) : false;
}, tc = Object.defineProperty({}, "innerHTML", { get() {
  return this.cloneNode(true).innerHTML;
}, set(e14) {
  let t2 = g.default.createElement(this.nodeName.toLowerCase());
  t2.innerHTML = e14;
  let n2 = g.default.createDocumentFragment();
  for (; t2.childNodes.length; ) n2.appendChild(t2.childNodes[0]);
  return this.innerText = ``, h.default.Element.prototype.appendChild.call(this, n2), this.innerHTML;
} }), nc = (e14, t2) => {
  let n2 = {};
  for (let r2 = 0; r2 < e14.length && (n2 = Object.getOwnPropertyDescriptor(e14[r2], t2), !(n2 && n2.set && n2.get)); r2++) ;
  return n2.enumerable = true, n2.configurable = true, n2;
}, rc = (e14) => nc([e14.el(), h.default.HTMLMediaElement.prototype, h.default.Element.prototype, tc], `innerHTML`), ic = function(e14) {
  let t2 = e14.el();
  if (t2.resetSourceWatch_) return;
  let n2 = {}, r2 = rc(e14), i2 = (n3) => (...r3) => {
    let i3 = n3.apply(t2, r3);
    return ec(e14), i3;
  };
  [`append`, `appendChild`, `insertAdjacentHTML`].forEach((e15) => {
    t2[e15] && (n2[e15] = t2[e15], t2[e15] = i2(n2[e15]));
  }), Object.defineProperty(t2, "innerHTML", B(r2, { set: i2(r2.set) })), t2.resetSourceWatch_ = () => {
    t2.resetSourceWatch_ = null, Object.keys(n2).forEach((e15) => {
      t2[e15] = n2[e15];
    }), Object.defineProperty(t2, "innerHTML", r2);
  }, e14.one(`sourceset`, t2.resetSourceWatch_);
}, ac = Object.defineProperty({}, "src", { get() {
  return this.hasAttribute(`src`) ? Ca(h.default.Element.prototype.getAttribute.call(this, `src`)) : ``;
}, set(e14) {
  return h.default.Element.prototype.setAttribute.call(this, `src`, e14), e14;
} }), oc = (e14) => nc([e14.el(), h.default.HTMLMediaElement.prototype, ac], `src`), sc = function(e14) {
  if (!e14.featuresSourceset) return;
  let t2 = e14.el();
  if (t2.resetSourceset_) return;
  let n2 = oc(e14), r2 = t2.setAttribute, i2 = t2.load;
  Object.defineProperty(t2, "src", B(n2, { set: (r3) => {
    let i3 = n2.set.call(t2, r3);
    return e14.triggerSourceset(t2.src), i3;
  } })), t2.setAttribute = (n3, i3) => {
    let a2 = r2.call(t2, n3, i3);
    return /src/i.test(n3) && e14.triggerSourceset(t2.src), a2;
  }, t2.load = () => {
    let n3 = i2.call(t2);
    return ec(e14) || (e14.triggerSourceset(``), ic(e14)), n3;
  }, t2.currentSrc ? e14.triggerSourceset(t2.currentSrc) : ec(e14) || ic(e14), t2.resetSourceset_ = () => {
    t2.resetSourceset_ = null, t2.load = i2, t2.setAttribute = r2, Object.defineProperty(t2, "src", n2), t2.resetSourceWatch_ && t2.resetSourceWatch_();
  };
}, X = class e11 extends Y {
  constructor(e14, t2) {
    super(e14, t2);
    let n2 = e14.source, r2 = false;
    if (this.featuresVideoFrameCallback = this.featuresVideoFrameCallback && this.el_.tagName === `VIDEO`, n2 && (this.el_.currentSrc !== n2.src || e14.tag && e14.tag.initNetworkState_ === 3) ? this.setSource(n2) : this.handleLateInit_(this.el_), e14.enableSourceset && this.setupSourcesetHandling_(), this.isScrubbing_ = false, this.el_.hasChildNodes()) {
      let e15 = this.el_.childNodes, t3 = e15.length, n3 = [];
      for (; t3--; ) {
        let i2 = e15[t3];
        i2.nodeName.toLowerCase() === `track` && (this.featuresNativeTextTracks ? (this.remoteTextTrackEls().addTrackElement_(i2), this.remoteTextTracks().addTrack(i2.track), this.textTracks().addTrack(i2.track), !r2 && !this.el_.hasAttribute(`crossorigin`) && Ta(i2.src) && (r2 = true)) : n3.push(i2));
      }
      for (let e16 = 0; e16 < n3.length; e16++) this.el_.removeChild(n3[e16]);
    }
    this.proxyNativeTracks_(), this.featuresNativeTextTracks && r2 && z.warn(`Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.
This may prevent text tracks from loading.`), this.restoreMetadataTracksInIOSNativePlayer_(), (br || gr) && e14.nativeControlsForTouch === true && this.setControls(true), this.proxyWebkitFullscreen_(), this.triggerReady();
  }
  dispose() {
    this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(), e11.disposeMediaElement(this.el_), this.options_ = null, super.dispose();
  }
  setupSourcesetHandling_() {
    sc(this);
  }
  restoreMetadataTracksInIOSNativePlayer_() {
    let e14 = this.textTracks(), t2, n2 = () => {
      t2 = [];
      for (let n3 = 0; n3 < e14.length; n3++) {
        let r3 = e14[n3];
        r3.kind === `metadata` && t2.push({ track: r3, storedMode: r3.mode });
      }
    };
    n2(), e14.addEventListener(`change`, n2), this.on(`dispose`, () => e14.removeEventListener(`change`, n2));
    let r2 = () => {
      for (let e15 = 0; e15 < t2.length; e15++) {
        let n3 = t2[e15];
        n3.track.mode === `disabled` && n3.track.mode !== n3.storedMode && (n3.track.mode = n3.storedMode);
      }
      e14.removeEventListener(`change`, r2);
    };
    this.on(`webkitbeginfullscreen`, () => {
      e14.removeEventListener(`change`, n2), e14.removeEventListener(`change`, r2), e14.addEventListener(`change`, r2);
    }), this.on(`webkitendfullscreen`, () => {
      e14.removeEventListener(`change`, n2), e14.addEventListener(`change`, n2), e14.removeEventListener(`change`, r2);
    });
  }
  overrideNative_(e14, t2) {
    if (t2 !== this[`featuresNative${e14}Tracks`]) return;
    let n2 = e14.toLowerCase();
    this[`${n2}TracksListeners_`] && Object.keys(this[`${n2}TracksListeners_`]).forEach((e15) => {
      this.el()[`${n2}Tracks`].removeEventListener(e15, this[`${n2}TracksListeners_`][e15]);
    }), this[`featuresNative${e14}Tracks`] = !t2, this[`${n2}TracksListeners_`] = null, this.proxyNativeTracksForType_(n2);
  }
  overrideNativeAudioTracks(e14) {
    this.overrideNative_(`Audio`, e14);
  }
  overrideNativeVideoTracks(e14) {
    this.overrideNative_(`Video`, e14);
  }
  proxyNativeTracksForType_(e14) {
    let t2 = Na[e14], n2 = this.el()[t2.getterName], r2 = this[t2.getterName]();
    if (!this[`featuresNative${t2.capitalName}Tracks`] || !n2 || !n2.addEventListener) return;
    let i2 = { change: (t3) => {
      let n3 = { type: `change`, target: r2, currentTarget: r2, srcElement: r2 };
      r2.trigger(n3), e14 === `text` && this[Pa.remoteText.getterName]().trigger(n3);
    }, addtrack(e15) {
      r2.addTrack(e15.track);
    }, removetrack(e15) {
      r2.removeTrack(e15.track);
    } }, a2 = function() {
      let e15 = [];
      for (let t3 = 0; t3 < r2.length; t3++) {
        let i3 = false;
        for (let e16 = 0; e16 < n2.length; e16++) if (n2[e16] === r2[t3]) {
          i3 = true;
          break;
        }
        i3 || e15.push(r2[t3]);
      }
      for (; e15.length; ) r2.removeTrack(e15.shift());
    };
    this[t2.getterName + `Listeners_`] = i2, Object.keys(i2).forEach((e15) => {
      let t3 = i2[e15];
      n2.addEventListener(e15, t3), this.on(`dispose`, (r3) => n2.removeEventListener(e15, t3));
    }), this.on(`loadstart`, a2), this.on(`dispose`, (e15) => this.off(`loadstart`, a2));
  }
  proxyNativeTracks_() {
    Na.names.forEach((e14) => {
      this.proxyNativeTracksForType_(e14);
    });
  }
  createEl() {
    let t2 = this.options_.tag;
    if (!t2 || !(this.options_.playerElIngest || this.movingMediaElementInDOM)) {
      if (t2) {
        let n3 = t2.cloneNode(true);
        t2.parentNode && t2.parentNode.insertBefore(n3, t2), e11.disposeMediaElement(t2), t2 = n3;
      } else {
        t2 = g.default.createElement(`video`);
        let e14 = B({}, this.options_.tag && Ir(this.options_.tag));
        (!br || this.options_.nativeControlsForTouch !== true) && delete e14.controls, Fr(t2, Object.assign(e14, { id: this.options_.techId, class: `vjs-tech` }));
      }
      t2.playerId = this.options_.playerId;
    }
    this.options_.preload !== void 0 && Rr(t2, `preload`, this.options_.preload), this.options_.disablePictureInPicture !== void 0 && (t2.disablePictureInPicture = this.options_.disablePictureInPicture);
    let n2 = [`loop`, `muted`, `playsinline`, `autoplay`];
    for (let e14 = 0; e14 < n2.length; e14++) {
      let r2 = n2[e14], i2 = this.options_[r2];
      i2 !== void 0 && (i2 ? Rr(t2, r2, r2) : zr(t2, r2), t2[r2] = i2);
    }
    return t2;
  }
  handleLateInit_(e14) {
    if (e14.networkState === 0 || e14.networkState === 3) return;
    if (e14.readyState === 0) {
      let e15 = false, t3 = function() {
        e15 = true;
      };
      this.on(`loadstart`, t3);
      let n2 = function() {
        e15 || this.trigger(`loadstart`);
      };
      this.on(`loadedmetadata`, n2), this.ready(function() {
        this.off(`loadstart`, t3), this.off(`loadedmetadata`, n2), e15 || this.trigger(`loadstart`);
      });
      return;
    }
    let t2 = [`loadstart`];
    t2.push(`loadedmetadata`), e14.readyState >= 2 && t2.push(`loadeddata`), e14.readyState >= 3 && t2.push(`canplay`), e14.readyState >= 4 && t2.push(`canplaythrough`), this.ready(function() {
      t2.forEach(function(e15) {
        this.trigger(e15);
      }, this);
    });
  }
  setScrubbing(e14) {
    this.isScrubbing_ = e14;
  }
  scrubbing() {
    return this.isScrubbing_;
  }
  setCurrentTime(e14) {
    try {
      this.isScrubbing_ && this.el_.fastSeek && Cr ? this.el_.fastSeek(e14) : this.el_.currentTime = e14;
    } catch (e15) {
      z(e15, `Video is not ready. (Video.js)`);
    }
  }
  duration() {
    if (this.el_.duration === 1 / 0 && ir && lr && this.el_.currentTime === 0) {
      let e14 = () => {
        this.el_.currentTime > 0 && (this.el_.duration === 1 / 0 && this.trigger(`durationchange`), this.off(`timeupdate`, e14));
      };
      return this.on(`timeupdate`, e14), NaN;
    }
    return this.el_.duration || NaN;
  }
  width() {
    return this.el_.offsetWidth;
  }
  height() {
    return this.el_.offsetHeight;
  }
  proxyWebkitFullscreen_() {
    if (!(`webkitDisplayingFullscreen` in this.el_)) return;
    let e14 = function() {
      this.trigger(`fullscreenchange`, { isFullscreen: false }), this.el_.controls && !this.options_.nativeControlsForTouch && this.controls() && (this.el_.controls = false);
    }, t2 = function() {
      `webkitPresentationMode` in this.el_ && this.el_.webkitPresentationMode !== `picture-in-picture` && (this.one(`webkitendfullscreen`, e14), this.trigger(`fullscreenchange`, { isFullscreen: true, nativeIOSFullscreen: true }));
    };
    this.on(`webkitbeginfullscreen`, t2), this.on(`dispose`, () => {
      this.off(`webkitbeginfullscreen`, t2), this.off(`webkitendfullscreen`, e14);
    });
  }
  supportsFullScreen() {
    return typeof this.el_.webkitEnterFullScreen == `function`;
  }
  enterFullScreen() {
    let e14 = this.el_;
    if (e14.paused && e14.networkState <= e14.HAVE_METADATA) ia(this.el_.play()), this.setTimeout(function() {
      e14.pause();
      try {
        e14.webkitEnterFullScreen();
      } catch (e15) {
        this.trigger(`fullscreenerror`, e15);
      }
    }, 0);
    else try {
      e14.webkitEnterFullScreen();
    } catch (e15) {
      this.trigger(`fullscreenerror`, e15);
    }
  }
  exitFullScreen() {
    if (!this.el_.webkitDisplayingFullscreen) {
      this.trigger(`fullscreenerror`, Error(`The video is not fullscreen`));
      return;
    }
    this.el_.webkitExitFullScreen();
  }
  requestPictureInPicture() {
    return this.el_.requestPictureInPicture();
  }
  requestVideoFrameCallback(e14) {
    return this.featuresVideoFrameCallback && !this.el_.webkitKeys ? this.el_.requestVideoFrameCallback(e14) : super.requestVideoFrameCallback(e14);
  }
  cancelVideoFrameCallback(e14) {
    this.featuresVideoFrameCallback && !this.el_.webkitKeys ? this.el_.cancelVideoFrameCallback(e14) : super.cancelVideoFrameCallback(e14);
  }
  src(e14) {
    if (e14 === void 0) return this.el_.src;
    this.setSrc(e14);
  }
  reset() {
    e11.resetMediaElement(this.el_);
  }
  currentSrc() {
    return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc;
  }
  setControls(e14) {
    this.el_.controls = !!e14;
  }
  addTextTrack(e14, t2, n2) {
    return this.featuresNativeTextTracks ? this.el_.addTextTrack(e14, t2, n2) : super.addTextTrack(e14, t2, n2);
  }
  createRemoteTextTrack(e14) {
    if (!this.featuresNativeTextTracks) return super.createRemoteTextTrack(e14);
    let t2 = g.default.createElement(`track`);
    return e14.kind && (t2.kind = e14.kind), e14.label && (t2.label = e14.label), (e14.language || e14.srclang) && (t2.srclang = e14.language || e14.srclang), e14.default && (t2.default = e14.default), e14.id && (t2.id = e14.id), e14.src && (t2.src = e14.src), t2;
  }
  addRemoteTextTrack(e14, t2) {
    let n2 = super.addRemoteTextTrack(e14, t2);
    return this.featuresNativeTextTracks && this.el().appendChild(n2), n2;
  }
  removeRemoteTextTrack(e14) {
    if (super.removeRemoteTextTrack(e14), this.featuresNativeTextTracks) {
      let t2 = this.$$(`track`), n2 = t2.length;
      for (; n2--; ) (e14 === t2[n2] || e14 === t2[n2].track) && this.el().removeChild(t2[n2]);
    }
  }
  getVideoPlaybackQuality() {
    if (typeof this.el().getVideoPlaybackQuality == `function`) return this.el().getVideoPlaybackQuality();
    let e14 = {};
    return this.el().webkitDroppedFrameCount !== void 0 && this.el().webkitDecodedFrameCount !== void 0 && (e14.droppedVideoFrames = this.el().webkitDroppedFrameCount, e14.totalVideoFrames = this.el().webkitDecodedFrameCount), h.default.performance && (e14.creationTime = h.default.performance.now()), e14;
  }
};
V(X, `TEST_VID`, function() {
  if (!Dr()) return;
  let e14 = g.default.createElement(`video`), t2 = g.default.createElement(`track`);
  return t2.kind = `captions`, t2.srclang = `en`, t2.label = `English`, e14.appendChild(t2), e14;
}), X.isSupported = function() {
  try {
    X.TEST_VID.volume = 0.5;
  } catch {
    return false;
  }
  return !!(X.TEST_VID && X.TEST_VID.canPlayType);
}, X.canPlayType = function(e14) {
  return X.TEST_VID.canPlayType(e14);
}, X.canPlaySource = function(e14, t2) {
  return X.canPlayType(e14.type);
}, X.canControlVolume = function() {
  try {
    let e14 = X.TEST_VID.volume;
    X.TEST_VID.volume = e14 / 2 + 0.1;
    let t2 = e14 !== X.TEST_VID.volume;
    return t2 && Sr ? (h.default.setTimeout(() => {
      X && X.prototype && (X.prototype.featuresVolumeControl = e14 !== X.TEST_VID.volume);
    }), false) : t2;
  } catch {
    return false;
  }
}, X.canMuteVolume = function() {
  try {
    let e14 = X.TEST_VID.muted;
    return X.TEST_VID.muted = !e14, X.TEST_VID.muted ? Rr(X.TEST_VID, `muted`, `muted`) : zr(X.TEST_VID, `muted`, `muted`), e14 !== X.TEST_VID.muted;
  } catch {
    return false;
  }
}, X.canControlPlaybackRate = function() {
  if (ir && lr && dr < 58) return false;
  try {
    let e14 = X.TEST_VID.playbackRate;
    return X.TEST_VID.playbackRate = e14 / 2 + 0.1, e14 !== X.TEST_VID.playbackRate;
  } catch {
    return false;
  }
}, X.canOverrideAttributes = function() {
  try {
    let e14 = () => {
    };
    Object.defineProperty(g.default.createElement(`video`), "src", { get: e14, set: e14 }), Object.defineProperty(g.default.createElement(`audio`), "src", { get: e14, set: e14 }), Object.defineProperty(g.default.createElement(`video`), "innerHTML", { get: e14, set: e14 }), Object.defineProperty(g.default.createElement(`audio`), "innerHTML", { get: e14, set: e14 });
  } catch {
    return false;
  }
  return true;
}, X.supportsNativeTextTracks = function() {
  return Cr || Sr && lr;
}, X.supportsNativeVideoTracks = function() {
  return !!(X.TEST_VID && X.TEST_VID.videoTracks);
}, X.supportsNativeAudioTracks = function() {
  return !!(X.TEST_VID && X.TEST_VID.audioTracks);
}, X.Events = [`loadstart`, `suspend`, `abort`, `error`, `emptied`, `stalled`, `loadedmetadata`, `loadeddata`, `canplay`, `canplaythrough`, `playing`, `waiting`, `seeking`, `seeked`, `ended`, `durationchange`, `timeupdate`, `progress`, `play`, `pause`, `ratechange`, `resize`, `volumechange`], [[`featuresMuteControl`, `canMuteVolume`], [`featuresPlaybackRate`, `canControlPlaybackRate`], [`featuresSourceset`, `canOverrideAttributes`], [`featuresNativeTextTracks`, `supportsNativeTextTracks`], [`featuresNativeVideoTracks`, `supportsNativeVideoTracks`], [`featuresNativeAudioTracks`, `supportsNativeAudioTracks`]].forEach(function([e14, t2]) {
  V(X.prototype, e14, () => X[t2](), true);
}), X.prototype.featuresVolumeControl = X.canControlVolume(), X.prototype.movingMediaElementInDOM = !Sr, X.prototype.featuresFullscreenResize = true, X.prototype.featuresProgressEvents = true, X.prototype.featuresTimeupdateEvents = true, X.prototype.featuresVideoFrameCallback = !!(X.TEST_VID && X.TEST_VID.requestVideoFrameCallback), X.disposeMediaElement = function(e14) {
  if (e14) {
    for (e14.parentNode && e14.parentNode.removeChild(e14); e14.hasChildNodes(); ) e14.removeChild(e14.firstChild);
    e14.removeAttribute(`src`), typeof e14.load == `function` && (function() {
      try {
        e14.load();
      } catch {
      }
    })();
  }
}, X.resetMediaElement = function(e14) {
  if (!e14) return;
  let t2 = e14.querySelectorAll(`source`), n2 = t2.length;
  for (; n2--; ) e14.removeChild(t2[n2]);
  e14.removeAttribute(`src`), typeof e14.load == `function` && (function() {
    try {
      e14.load();
    } catch {
    }
  })();
}, [`muted`, `defaultMuted`, `autoplay`, `controls`, `loop`, `playsinline`].forEach(function(e14) {
  X.prototype[e14] = function() {
    return this.el_[e14] || this.el_.hasAttribute(e14);
  };
}), [`muted`, `defaultMuted`, `autoplay`, `loop`, `playsinline`].forEach(function(e14) {
  X.prototype[`set` + K(e14)] = function(t2) {
    this.el_[e14] = t2, t2 ? this.el_.setAttribute(e14, e14) : this.el_.removeAttribute(e14);
  };
}), [`paused`, `currentTime`, `buffered`, `volume`, `poster`, `preload`, `error`, `seeking`, `seekable`, `ended`, `playbackRate`, `defaultPlaybackRate`, `disablePictureInPicture`, `played`, `networkState`, `readyState`, `videoWidth`, `videoHeight`, `crossOrigin`].forEach(function(e14) {
  X.prototype[e14] = function() {
    return this.el_[e14];
  };
}), [`volume`, `src`, `poster`, `preload`, `playbackRate`, `defaultPlaybackRate`, `disablePictureInPicture`, `crossOrigin`].forEach(function(e14) {
  X.prototype[`set` + K(e14)] = function(t2) {
    this.el_[e14] = t2;
  };
}), [`pause`, `load`, `play`].forEach(function(e14) {
  X.prototype[e14] = function() {
    return this.el_[e14]();
  };
}), Y.withSourceHandlers(X), X.nativeSourceHandler = {}, X.nativeSourceHandler.canPlayType = function(e14) {
  try {
    return X.TEST_VID.canPlayType(e14);
  } catch {
    return ``;
  }
}, X.nativeSourceHandler.canHandleSource = function(e14, t2) {
  if (e14.type) return X.nativeSourceHandler.canPlayType(e14.type);
  if (e14.src) {
    let t3 = wa(e14.src);
    return X.nativeSourceHandler.canPlayType(`video/${t3}`);
  }
  return ``;
}, X.nativeSourceHandler.handleSource = function(e14, t2, n2) {
  t2.setSrc(e14.src);
}, X.nativeSourceHandler.dispose = function() {
}, X.registerSourceHandler(X.nativeSourceHandler), Y.registerTech(`Html5`, X);
var cc = [`progress`, `abort`, `suspend`, `emptied`, `stalled`, `loadedmetadata`, `loadeddata`, `timeupdate`, `resize`, `volumechange`, `texttrackchange`], lc = { canplay: `CanPlay`, canplaythrough: `CanPlayThrough`, playing: `Playing`, seeked: `Seeked` }, uc = [`tiny`, `xsmall`, `small`, `medium`, `large`, `xlarge`, `huge`], dc = {};
uc.forEach((e14) => {
  dc[e14] = `vjs-layout-${e14.charAt(0) === `x` ? `x-${e14.substring(1)}` : e14}`;
});
var fc = { tiny: 210, xsmall: 320, small: 425, medium: 768, large: 1440, xlarge: 2560, huge: 1 / 0 }, pc = class e12 extends q {
  constructor(t2, n2, r2) {
    if (t2.id = t2.id || n2.id || `vjs_video_${di()}`, n2 = Object.assign(e12.getTagSettings(t2), n2), n2.initChildren = false, n2.createEl = false, n2.evented = false, n2.reportTouchActivity = false, !n2.language) {
      let e14 = t2.closest(`[lang]`);
      e14 && (n2.language = e14.getAttribute(`lang`));
    }
    if (super(null, n2, r2), this.boundDocumentFullscreenChange_ = (e14) => this.documentFullscreenChange_(e14), this.boundFullWindowOnEscKey_ = (e14) => this.fullWindowOnEscKey(e14), this.boundUpdateStyleEl_ = (e14) => this.updateStyleEl_(e14), this.boundApplyInitTime_ = (e14) => this.applyInitTime_(e14), this.boundUpdateCurrentBreakpoint_ = (e14) => this.updateCurrentBreakpoint_(e14), this.boundHandleTechClick_ = (e14) => this.handleTechClick_(e14), this.boundHandleTechDoubleClick_ = (e14) => this.handleTechDoubleClick_(e14), this.boundHandleTechTouchStart_ = (e14) => this.handleTechTouchStart_(e14), this.boundHandleTechTouchMove_ = (e14) => this.handleTechTouchMove_(e14), this.boundHandleTechTouchEnd_ = (e14) => this.handleTechTouchEnd_(e14), this.boundHandleTechTap_ = (e14) => this.handleTechTap_(e14), this.boundUpdatePlayerHeightOnAudioOnlyMode_ = (e14) => this.updatePlayerHeightOnAudioOnlyMode_(e14), this.isFullscreen_ = false, this.log = qn(this.id_), this.fsApi_ = Bn, this.isPosterFromTech_ = false, this.queuedCallbacks_ = [], this.isReady_ = false, this.hasStarted_ = false, this.userActive_ = false, this.debugEnabled_ = false, this.audioOnlyMode_ = false, this.audioPosterMode_ = false, this.audioOnlyCache_ = { controlBarHeight: null, playerHeight: null, hiddenChildren: [] }, !this.options_ || !this.options_.techOrder || !this.options_.techOrder.length) throw Error(`No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?`);
    if (this.tag = t2, this.tagAttributes = t2 && Ir(t2), this.language(this.options_.language), n2.languages) {
      let e14 = {};
      Object.getOwnPropertyNames(n2.languages).forEach(function(t3) {
        e14[t3.toLowerCase()] = n2.languages[t3];
      }), this.languages_ = e14;
    } else this.languages_ = e12.prototype.options_.languages;
    this.resetCache_(), this.poster_ = n2.poster || ``, this.controls_ = !!n2.controls, t2.controls = false, t2.removeAttribute(`controls`), this.changingSrc_ = false, this.playCallbacks_ = [], this.playTerminatedQueue_ = [], t2.hasAttribute(`autoplay`) ? this.autoplay(true) : this.autoplay(this.options_.autoplay), n2.plugins && Object.keys(n2.plugins).forEach((e14) => {
      if (typeof this[e14] != `function`) throw Error(`plugin "${e14}" does not exist`);
    }), this.scrubbing_ = false, this.el_ = this.createEl(), Bi(this, { eventBusKey: `el_` }), this.fsApi_.requestFullscreen && (vi(g.default, this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_), this.on(this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_)), this.fluid_ && this.on([`playerreset`, `resize`], this.boundUpdateStyleEl_);
    let i2 = B(this.options_);
    if (n2.plugins && Object.keys(n2.plugins).forEach((e14) => {
      this[e14](n2.plugins[e14]);
    }), n2.debug && this.debug(true), this.options_.playerOptions = i2, this.middleware_ = [], this.playbackRates(n2.playbackRates), n2.experimentalSvgIcons) {
      let e14 = new h.default.DOMParser().parseFromString(ao, `image/svg+xml`);
      if (e14.querySelector(`parsererror`)) z.warn(`Failed to load SVG Icons. Falling back to Font Icons.`), this.options_.experimentalSvgIcons = null;
      else {
        let t3 = e14.documentElement;
        t3.style.display = `none`, this.el_.appendChild(t3), this.addClass(`vjs-svg-icons-enabled`);
      }
    }
    this.initChildren(), this.isAudio(t2.nodeName.toLowerCase() === `audio`), this.controls() ? this.addClass(`vjs-controls-enabled`) : this.addClass(`vjs-controls-disabled`), this.el_.setAttribute(`role`, `region`), this.isAudio() ? this.el_.setAttribute(`aria-label`, this.localize(`Audio Player`)) : this.el_.setAttribute(`aria-label`, this.localize(`Video Player`)), this.isAudio() && this.addClass(`vjs-audio`), n2.spatialNavigation && n2.spatialNavigation.enabled && (this.spatialNavigation = new lo(this), this.addClass(`vjs-spatial-navigation-enabled`)), br && this.addClass(`vjs-touch-enabled`), Sr || this.addClass(`vjs-workinghover`), e12.players[this.id_] = this;
    let a2 = Pn.split(`.`)[0];
    this.addClass(`vjs-v${a2}`), this.userActive(true), this.reportUserActivity(), this.one(`play`, (e14) => this.listenForUserActivity_(e14)), this.on(`keydown`, (e14) => this.handleKeyDown(e14)), this.on(`languagechange`, (e14) => this.handleLanguagechange(e14)), this.breakpoints(this.options_.breakpoints), this.responsive(this.options_.responsive), this.on(`ready`, () => {
      this.audioPosterMode(this.options_.audioPosterMode), this.audioOnlyMode(this.options_.audioOnlyMode);
    });
  }
  dispose() {
    this.trigger(`dispose`), this.off(`dispose`), yi(g.default, this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_), yi(g.default, `keydown`, this.boundFullWindowOnEscKey_), this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_ = null), e12.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && (this.tech_.dispose(), this.isPosterFromTech_ = false, this.poster_ = ``), this.playerElIngest_ &&= null, this.tag &&= null, Za(this), Fa.names.forEach((e14) => {
      let t2 = Fa[e14], n2 = this[t2.getterName]();
      n2 && n2.off && n2.off();
    }), super.dispose({ restoreEl: this.options_.restoreEl });
  }
  createEl() {
    let e14 = this.tag, t2, n2 = this.playerElIngest_ = e14.parentNode && e14.parentNode.hasAttribute && e14.parentNode.hasAttribute(`data-vjs-player`), r2 = this.tag.tagName.toLowerCase() === `video-js`;
    n2 ? t2 = this.el_ = e14.parentNode : r2 || (t2 = this.el_ = super.createEl(`div`));
    let i2 = Ir(e14);
    if (r2) {
      for (t2 = this.el_ = e14, e14 = this.tag = g.default.createElement(`video`); t2.children.length; ) e14.appendChild(t2.firstChild);
      jr(t2, `video-js`) || Mr(t2, `video-js`), t2.appendChild(e14), n2 = this.playerElIngest_ = t2, Object.keys(t2).forEach((n3) => {
        try {
          e14[n3] = t2[n3];
        } catch {
        }
      });
    }
    e14.setAttribute(`tabindex`, `-1`), i2.tabindex = `-1`, lr && mr && (e14.setAttribute(`role`, `application`), i2.role = `application`), e14.removeAttribute(`width`), e14.removeAttribute(`height`), `width` in i2 && delete i2.width, `height` in i2 && delete i2.height, Object.getOwnPropertyNames(i2).forEach(function(n3) {
      r2 && n3 === `class` || t2.setAttribute(n3, i2[n3]), r2 && e14.setAttribute(n3, i2[n3]);
    }), e14.playerId = e14.id, e14.id += `_html5_api`, e14.className = `vjs-tech`, e14.player = t2.player = this, this.addClass(`vjs-paused`);
    let a2 = [`IS_SMART_TV`, `IS_TIZEN`, `IS_WEBOS`, `IS_ANDROID`, `IS_IPAD`, `IS_IPHONE`].filter((e15) => wr[e15]).map((e15) => `vjs-device-` + e15.substring(3).toLowerCase().replace(/\_/g, `-`));
    if (this.addClass(...a2), h.default.VIDEOJS_NO_DYNAMIC_STYLE !== true) {
      this.styleEl_ = si(`vjs-styles-dimensions`);
      let e15 = Zr(`.vjs-styles-defaults`), t3 = Zr(`head`);
      t3.insertBefore(this.styleEl_, e15 ? e15.nextSibling : t3.firstChild);
    }
    this.fill_ = false, this.fluid_ = false, this.width(this.options_.width), this.height(this.options_.height), this.fill(this.options_.fill), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio), this.crossOrigin(this.options_.crossOrigin || this.options_.crossorigin);
    let o2 = e14.getElementsByTagName(`a`);
    for (let e15 = 0; e15 < o2.length; e15++) {
      let t3 = o2.item(e15);
      Mr(t3, `vjs-hidden`), t3.setAttribute(`hidden`, `hidden`);
    }
    return e14.initNetworkState_ = e14.networkState, e14.parentNode && !n2 && e14.parentNode.insertBefore(t2, e14), Ar(e14, t2), this.children_.unshift(e14), this.el_.setAttribute(`lang`, this.language_), this.el_.setAttribute(`translate`, `no`), this.el_ = t2, t2;
  }
  crossOrigin(e14) {
    if (e14 === void 0) return this.techGet_(`crossOrigin`);
    if (e14 !== null && e14 !== `anonymous` && e14 !== `use-credentials`) {
      z.warn(`crossOrigin must be null,  "anonymous" or "use-credentials", given "${e14}"`);
      return;
    }
    this.techCall_(`setCrossOrigin`, e14), this.posterImage && this.posterImage.crossOrigin(e14);
  }
  width(e14) {
    return this.dimension(`width`, e14);
  }
  height(e14) {
    return this.dimension(`height`, e14);
  }
  dimension(e14, t2) {
    let n2 = e14 + `_`;
    if (t2 === void 0) return this[n2] || 0;
    if (t2 === `` || t2 === `auto`) {
      this[n2] = void 0, this.updateStyleEl_();
      return;
    }
    let r2 = parseFloat(t2);
    if (isNaN(r2)) {
      z.error(`Improper value "${t2}" supplied for for ${e14}`);
      return;
    }
    this[n2] = r2, this.updateStyleEl_();
  }
  fluid(e14) {
    if (e14 === void 0) return !!this.fluid_;
    this.fluid_ = !!e14, ji(this) && this.off([`playerreset`, `resize`], this.boundUpdateStyleEl_), e14 ? (this.addClass(`vjs-fluid`), this.fill(false), Mi(this, () => {
      this.on([`playerreset`, `resize`], this.boundUpdateStyleEl_);
    })) : this.removeClass(`vjs-fluid`), this.updateStyleEl_();
  }
  fill(e14) {
    if (e14 === void 0) return !!this.fill_;
    this.fill_ = !!e14, e14 ? (this.addClass(`vjs-fill`), this.fluid(false)) : this.removeClass(`vjs-fill`);
  }
  aspectRatio(e14) {
    if (e14 === void 0) return this.aspectRatio_;
    if (!/^\d+\:\d+$/.test(e14)) throw Error(`Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.`);
    this.aspectRatio_ = e14, this.fluid(true), this.updateStyleEl_();
  }
  updateStyleEl_() {
    if (h.default.VIDEOJS_NO_DYNAMIC_STYLE === true) {
      let e15 = typeof this.width_ == `number` ? this.width_ : this.options_.width, t3 = typeof this.height_ == `number` ? this.height_ : this.options_.height, n3 = this.tech_ && this.tech_.el();
      n3 && (e15 >= 0 && (n3.width = e15), t3 >= 0 && (n3.height = t3));
      return;
    }
    let e14, t2, n2, r2;
    n2 = this.aspectRatio_ !== void 0 && this.aspectRatio_ !== `auto` ? this.aspectRatio_ : this.videoWidth() > 0 ? this.videoWidth() + `:` + this.videoHeight() : `16:9`;
    let i2 = n2.split(`:`), a2 = i2[1] / i2[0];
    e14 = this.width_ === void 0 ? this.height_ === void 0 ? this.videoWidth() || 300 : this.height_ / a2 : this.width_, t2 = this.height_ === void 0 ? e14 * a2 : this.height_, r2 = /^[^a-zA-Z]/.test(this.id()) ? `dimensions-` + this.id() : this.id() + `-dimensions`, this.addClass(r2), ci(this.styleEl_, `
      .${r2} {
        width: ${e14}px;
        height: ${t2}px;
      }

      .${r2}.vjs-fluid:not(.vjs-audio-only-mode) {
        padding-top: ${a2 * 100}%;
      }
    `);
  }
  loadTech_(e14, t2) {
    this.tech_ && this.unloadTech_();
    let n2 = K(e14), r2 = e14.charAt(0).toLowerCase() + e14.slice(1);
    n2 !== `Html5` && this.tag && (Y.getTech(`Html5`).disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = n2, this.isReady_ = false;
    let i2 = this.autoplay();
    (typeof this.autoplay() == `string` || this.autoplay() === true && this.options_.normalizeAutoplay) && (i2 = false);
    let a2 = { source: t2, autoplay: i2, nativeControlsForTouch: this.options_.nativeControlsForTouch, playerId: this.id(), techId: `${this.id()}_${r2}_api`, playsinline: this.options_.playsinline, preload: this.options_.preload, loop: this.options_.loop, disablePictureInPicture: this.options_.disablePictureInPicture, muted: this.options_.muted, poster: this.poster(), language: this.language(), playerElIngest: this.playerElIngest_ || false, "vtt.js": this.options_[`vtt.js`], canOverridePoster: !!this.options_.techCanOverridePoster, enableSourceset: this.options_.enableSourceset };
    Fa.names.forEach((e15) => {
      let t3 = Fa[e15];
      a2[t3.getterName] = this[t3.privateName];
    }), Object.assign(a2, this.options_[n2]), Object.assign(a2, this.options_[r2]), Object.assign(a2, this.options_[e14.toLowerCase()]), this.tag && (a2.tag = this.tag), t2 && t2.src === this.cache_.src && this.cache_.currentTime > 0 && (a2.startTime = this.cache_.currentTime);
    let o2 = Y.getTech(e14);
    if (!o2) throw Error(`No Tech named '${n2}' exists! '${n2}' should be registered using videojs.registerTech()'`);
    this.tech_ = new o2(a2), this.tech_.ready(G(this, this.handleTechReady_), true), oa.jsonToTextTracks(this.textTracksJson_ || [], this.tech_), cc.forEach((e15) => {
      this.on(this.tech_, e15, (t3) => this[`handleTech${K(e15)}_`](t3));
    }), Object.keys(lc).forEach((e15) => {
      this.on(this.tech_, e15, (t3) => {
        if (this.tech_.playbackRate() === 0 && this.tech_.seeking()) {
          this.queuedCallbacks_.push({ callback: this[`handleTech${lc[e15]}_`].bind(this), event: t3 });
          return;
        }
        this[`handleTech${lc[e15]}_`](t3);
      });
    }), this.on(this.tech_, `loadstart`, (e15) => this.handleTechLoadStart_(e15)), this.on(this.tech_, `sourceset`, (e15) => this.handleTechSourceset_(e15)), this.on(this.tech_, `waiting`, (e15) => this.handleTechWaiting_(e15)), this.on(this.tech_, `ended`, (e15) => this.handleTechEnded_(e15)), this.on(this.tech_, `seeking`, (e15) => this.handleTechSeeking_(e15)), this.on(this.tech_, `play`, (e15) => this.handleTechPlay_(e15)), this.on(this.tech_, `pause`, (e15) => this.handleTechPause_(e15)), this.on(this.tech_, `durationchange`, (e15) => this.handleTechDurationChange_(e15)), this.on(this.tech_, `fullscreenchange`, (e15, t3) => this.handleTechFullscreenChange_(e15, t3)), this.on(this.tech_, `fullscreenerror`, (e15, t3) => this.handleTechFullscreenError_(e15, t3)), this.on(this.tech_, `enterpictureinpicture`, (e15) => this.handleTechEnterPictureInPicture_(e15)), this.on(this.tech_, `leavepictureinpicture`, (e15) => this.handleTechLeavePictureInPicture_(e15)), this.on(this.tech_, `error`, (e15) => this.handleTechError_(e15)), this.on(this.tech_, `posterchange`, (e15) => this.handleTechPosterChange_(e15)), this.on(this.tech_, `textdata`, (e15) => this.handleTechTextData_(e15)), this.on(this.tech_, `ratechange`, (e15) => this.handleTechRateChange_(e15)), this.on(this.tech_, `loadedmetadata`, this.boundUpdateStyleEl_), this.usingNativeControls(this.techGet_(`controls`)), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode !== this.el() && (n2 !== `Html5` || !this.tag) && Ar(this.tech_.el(), this.el()), this.tag &&= (this.tag.player = null, null);
  }
  unloadTech_() {
    Fa.names.forEach((e14) => {
      let t2 = Fa[e14];
      this[t2.privateName] = this[t2.getterName]();
    }), this.textTracksJson_ = oa.textTracksToJson(this.tech_), this.isReady_ = false, this.tech_.dispose(), this.tech_ = false, this.isPosterFromTech_ && (this.poster_ = ``, this.trigger(`posterchange`)), this.isPosterFromTech_ = false;
  }
  tech(e14) {
    return e14 === void 0 && z.warn(`Using the tech directly can be dangerous. I hope you know what you're doing.
See https://github.com/videojs/video.js/issues/2617 for more info.
`), this.tech_;
  }
  version() {
    return { "video.js": Pn };
  }
  addTechControlsListeners_() {
    this.removeTechControlsListeners_(), this.on(this.tech_, `click`, this.boundHandleTechClick_), this.on(this.tech_, `dblclick`, this.boundHandleTechDoubleClick_), this.on(this.tech_, `touchstart`, this.boundHandleTechTouchStart_), this.on(this.tech_, `touchmove`, this.boundHandleTechTouchMove_), this.on(this.tech_, `touchend`, this.boundHandleTechTouchEnd_), this.on(this.tech_, `tap`, this.boundHandleTechTap_);
  }
  removeTechControlsListeners_() {
    this.off(this.tech_, `tap`, this.boundHandleTechTap_), this.off(this.tech_, `touchstart`, this.boundHandleTechTouchStart_), this.off(this.tech_, `touchmove`, this.boundHandleTechTouchMove_), this.off(this.tech_, `touchend`, this.boundHandleTechTouchEnd_), this.off(this.tech_, `click`, this.boundHandleTechClick_), this.off(this.tech_, `dblclick`, this.boundHandleTechDoubleClick_);
  }
  handleTechReady_() {
    this.triggerReady(), this.cache_.volume && this.techCall_(`setVolume`, this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_();
  }
  handleTechLoadStart_() {
    this.removeClass(`vjs-ended`, `vjs-seeking`), this.error(null), this.handleTechDurationChange_(), this.paused() && this.hasStarted(false), this.trigger(`loadstart`), this.manualAutoplay_(this.autoplay() === true && this.options_.normalizeAutoplay ? `play` : this.autoplay());
  }
  manualAutoplay_(e14) {
    if (!this.tech_ || typeof e14 != `string`) return;
    let t2 = () => {
      let e15 = this.muted();
      this.muted(true);
      let t3 = () => {
        this.muted(e15);
      };
      this.playTerminatedQueue_.push(t3);
      let n3 = this.play();
      if (ra(n3)) return n3.catch((e16) => {
        throw t3(), Error(`Rejection at manualAutoplay. Restoring muted value. ${e16 || ``}`);
      });
    }, n2;
    if (e14 === `any` && !this.muted() ? (n2 = this.play(), ra(n2) && (n2 = n2.catch(t2))) : n2 = e14 === `muted` && !this.muted() ? t2() : this.play(), ra(n2)) return n2.then(() => {
      this.trigger({ type: `autoplay-success`, autoplay: e14 });
    }).catch(() => {
      this.trigger({ type: `autoplay-failure`, autoplay: e14 });
    });
  }
  updateSourceCaches_(e14 = ``) {
    let t2 = e14, n2 = ``;
    typeof t2 != `string` && (t2 = e14.src, n2 = e14.type), this.cache_.source = this.cache_.source || {}, this.cache_.sources = this.cache_.sources || [], t2 && !n2 && (n2 = no(this, t2)), this.cache_.source = B({}, e14, { src: t2, type: n2 });
    let r2 = this.cache_.sources.filter((e15) => e15.src && e15.src === t2), i2 = [], a2 = this.$$(`source`), o2 = [];
    for (let e15 = 0; e15 < a2.length; e15++) {
      let n3 = Ir(a2[e15]);
      i2.push(n3), n3.src && n3.src === t2 && o2.push(n3.src);
    }
    o2.length && !r2.length ? this.cache_.sources = i2 : r2.length || (this.cache_.sources = [this.cache_.source]), this.cache_.src = t2;
  }
  handleTechSourceset_(e14) {
    if (!this.changingSrc_) {
      let t2 = (e15) => this.updateSourceCaches_(e15), n2 = this.currentSource().src, r2 = e14.src;
      n2 && !/^blob:/.test(n2) && /^blob:/.test(r2) && (!this.lastSource_ || this.lastSource_.tech !== r2 && this.lastSource_.player !== n2) && (t2 = () => {
      }), t2(r2), e14.src || this.tech_.any([`sourceset`, `loadstart`], (e15) => {
        if (e15.type === `sourceset`) return;
        let t3 = this.techGet_(`currentSrc`);
        this.lastSource_.tech = t3, this.updateSourceCaches_(t3);
      });
    }
    this.lastSource_ = { player: this.currentSource().src, tech: e14.src }, this.trigger({ src: e14.src, type: `sourceset` });
  }
  hasStarted(e14) {
    if (e14 === void 0) return this.hasStarted_;
    e14 !== this.hasStarted_ && (this.hasStarted_ = e14, this.hasStarted_ ? this.addClass(`vjs-has-started`) : this.removeClass(`vjs-has-started`));
  }
  handleTechPlay_() {
    this.removeClass(`vjs-ended`, `vjs-paused`), this.addClass(`vjs-playing`), this.hasStarted(true), this.trigger(`play`);
  }
  handleTechRateChange_() {
    this.tech_.playbackRate() > 0 && this.cache_.lastPlaybackRate === 0 && (this.queuedCallbacks_.forEach((e14) => e14.callback(e14.event)), this.queuedCallbacks_ = []), this.cache_.lastPlaybackRate = this.tech_.playbackRate(), this.trigger(`ratechange`);
  }
  handleTechWaiting_() {
    this.addClass(`vjs-waiting`), this.trigger(`waiting`);
    let e14 = this.currentTime(), t2 = () => {
      e14 !== this.currentTime() && (this.removeClass(`vjs-waiting`), this.off(`timeupdate`, t2));
    };
    this.on(`timeupdate`, t2);
  }
  handleTechCanPlay_() {
    this.removeClass(`vjs-waiting`), this.trigger(`canplay`);
  }
  handleTechCanPlayThrough_() {
    this.removeClass(`vjs-waiting`), this.trigger(`canplaythrough`);
  }
  handleTechPlaying_() {
    this.removeClass(`vjs-waiting`), this.trigger(`playing`);
  }
  handleTechSeeking_() {
    this.addClass(`vjs-seeking`), this.trigger(`seeking`);
  }
  handleTechSeeked_() {
    this.removeClass(`vjs-seeking`, `vjs-ended`), this.trigger(`seeked`);
  }
  handleTechPause_() {
    this.removeClass(`vjs-playing`), this.addClass(`vjs-paused`), this.trigger(`pause`);
  }
  handleTechEnded_() {
    this.addClass(`vjs-ended`), this.removeClass(`vjs-waiting`), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger(`ended`);
  }
  handleTechDurationChange_() {
    this.duration(this.techGet_(`duration`));
  }
  handleTechClick_(e14) {
    this.controls_ && (this.options_ === void 0 || this.options_.userActions === void 0 || this.options_.userActions.click === void 0 || this.options_.userActions.click !== false) && (this.options_ !== void 0 && this.options_.userActions !== void 0 && typeof this.options_.userActions.click == `function` ? this.options_.userActions.click.call(this, e14) : this.paused() ? ia(this.play()) : this.pause());
  }
  handleTechDoubleClick_(e14) {
    this.controls_ && (Array.prototype.some.call(this.$$(`.vjs-control-bar, .vjs-modal-dialog`), (t2) => t2.contains(e14.target)) || (this.options_ === void 0 || this.options_.userActions === void 0 || this.options_.userActions.doubleClick === void 0 || this.options_.userActions.doubleClick !== false) && (this.options_ !== void 0 && this.options_.userActions !== void 0 && typeof this.options_.userActions.doubleClick == `function` ? this.options_.userActions.doubleClick.call(this, e14) : this.isFullscreen() ? this.exitFullscreen() : this.requestFullscreen()));
  }
  handleTechTap_() {
    this.userActive(!this.userActive());
  }
  handleTechTouchStart_() {
    this.userWasActive = this.userActive();
  }
  handleTechTouchMove_() {
    this.userWasActive && this.reportUserActivity();
  }
  handleTechTouchEnd_(e14) {
    e14.cancelable && e14.preventDefault();
  }
  toggleFullscreenClass_() {
    this.isFullscreen() ? this.addClass(`vjs-fullscreen`) : this.removeClass(`vjs-fullscreen`);
  }
  documentFullscreenChange_(e14) {
    let t2 = e14.target.player;
    if (t2 && t2 !== this) return;
    let n2 = this.el(), r2 = g.default[this.fsApi_.fullscreenElement] === n2;
    !r2 && n2.matches && (r2 = n2.matches(`:` + this.fsApi_.fullscreen)), this.isFullscreen(r2);
  }
  handleTechFullscreenChange_(e14, t2) {
    t2 && (t2.nativeIOSFullscreen && (this.addClass(`vjs-ios-native-fs`), this.tech_.one(`webkitendfullscreen`, () => {
      this.removeClass(`vjs-ios-native-fs`);
    })), this.isFullscreen(t2.isFullscreen));
  }
  handleTechFullscreenError_(e14, t2) {
    this.trigger(`fullscreenerror`, t2);
  }
  togglePictureInPictureClass_() {
    this.isInPictureInPicture() ? this.addClass(`vjs-picture-in-picture`) : this.removeClass(`vjs-picture-in-picture`);
  }
  handleTechEnterPictureInPicture_(e14) {
    this.isInPictureInPicture(true);
  }
  handleTechLeavePictureInPicture_(e14) {
    this.isInPictureInPicture(false);
  }
  handleTechError_() {
    let e14 = this.tech_.error();
    e14 && this.error(e14);
  }
  handleTechTextData_() {
    let e14 = null;
    arguments.length > 1 && (e14 = arguments[1]), this.trigger(`textdata`, e14);
  }
  getCache() {
    return this.cache_;
  }
  resetCache_() {
    this.cache_ = { currentTime: 0, initTime: 0, inactivityTimeout: this.options_.inactivityTimeout, duration: NaN, lastVolume: 1, lastPlaybackRate: this.defaultPlaybackRate(), media: null, src: ``, source: {}, sources: [], playbackRates: [], volume: 1 };
  }
  techCall_(e14, t2) {
    this.ready(function() {
      if (e14 in qa) return Wa(this.middleware_, this.tech_, e14, t2);
      if (e14 in Ja) return Ga(this.middleware_, this.tech_, e14, t2);
      try {
        this.tech_ && this.tech_[e14](t2);
      } catch (e15) {
        throw z(e15), e15;
      }
    }, true);
  }
  techGet_(e14) {
    if (!(!this.tech_ || !this.tech_.isReady_)) {
      if (e14 in Ka) return Ua(this.middleware_, this.tech_, e14);
      if (e14 in Ja) return Ga(this.middleware_, this.tech_, e14);
      try {
        return this.tech_[e14]();
      } catch (t2) {
        throw this.tech_[e14] === void 0 ? (z(`Video.js: ${e14} method not defined for ${this.techName_} playback technology.`, t2), t2) : t2.name === `TypeError` ? (z(`Video.js: ${e14} unavailable on ${this.techName_} playback technology element.`, t2), this.tech_.isReady_ = false, t2) : (z(t2), t2);
      }
    }
  }
  play() {
    return new Promise((e14) => {
      this.play_(e14);
    });
  }
  play_(e14 = ia) {
    this.playCallbacks_.push(e14);
    let t2 = !!(!this.changingSrc_ && (this.src() || this.currentSrc())), n2 = !!(Cr || Sr);
    if (this.waitToPlay_ &&= (this.off([`ready`, `loadstart`], this.waitToPlay_), null), !this.isReady_ || !t2) {
      this.waitToPlay_ = (e15) => {
        this.play_();
      }, this.one([`ready`, `loadstart`], this.waitToPlay_), !t2 && n2 && this.load();
      return;
    }
    let r2 = this.techGet_(`play`);
    n2 && this.hasClass(`vjs-ended`) && this.resetProgressBar_(), r2 === null ? this.runPlayTerminatedQueue_() : this.runPlayCallbacks_(r2);
  }
  runPlayTerminatedQueue_() {
    let e14 = this.playTerminatedQueue_.slice(0);
    this.playTerminatedQueue_ = [], e14.forEach(function(e15) {
      e15();
    });
  }
  runPlayCallbacks_(e14) {
    let t2 = this.playCallbacks_.slice(0);
    this.playCallbacks_ = [], this.playTerminatedQueue_ = [], t2.forEach(function(t3) {
      t3(e14);
    });
  }
  pause() {
    this.techCall_(`pause`);
  }
  paused() {
    return this.techGet_(`paused`) !== false;
  }
  played() {
    return this.techGet_(`played`) || Yi(0, 0);
  }
  scrubbing(e14) {
    if (e14 === void 0) return this.scrubbing_;
    this.scrubbing_ = !!e14, this.techCall_(`setScrubbing`, this.scrubbing_), e14 ? this.addClass(`vjs-scrubbing`) : this.removeClass(`vjs-scrubbing`);
  }
  currentTime(e14) {
    if (e14 === void 0) return this.cache_.currentTime = this.techGet_(`currentTime`) || 0, this.cache_.currentTime;
    if (e14 < 0 && (e14 = 0), !this.isReady_ || this.changingSrc_ || !this.tech_ || !this.tech_.isReady_) {
      this.cache_.initTime = e14, this.off(`canplay`, this.boundApplyInitTime_), this.one(`canplay`, this.boundApplyInitTime_);
      return;
    }
    this.techCall_(`setCurrentTime`, e14), this.cache_.initTime = 0, isFinite(e14) && (this.cache_.currentTime = Number(e14));
  }
  applyInitTime_() {
    this.currentTime(this.cache_.initTime);
  }
  duration(e14) {
    if (e14 === void 0) return this.cache_.duration === void 0 ? NaN : this.cache_.duration;
    e14 = parseFloat(e14), e14 < 0 && (e14 = 1 / 0), e14 !== this.cache_.duration && (this.cache_.duration = e14, e14 === 1 / 0 ? this.addClass(`vjs-live`) : this.removeClass(`vjs-live`), isNaN(e14) || this.trigger(`durationchange`));
  }
  remainingTime() {
    return this.duration() - this.currentTime();
  }
  remainingTimeDisplay() {
    return Math.floor(this.duration()) - Math.floor(this.currentTime());
  }
  buffered() {
    let e14 = this.techGet_(`buffered`);
    return (!e14 || !e14.length) && (e14 = Yi(0, 0)), e14;
  }
  seekable() {
    let e14 = this.techGet_(`seekable`);
    return (!e14 || !e14.length) && (e14 = Yi(0, 0)), e14;
  }
  seeking() {
    return this.techGet_(`seeking`);
  }
  ended() {
    return this.techGet_(`ended`);
  }
  networkState() {
    return this.techGet_(`networkState`);
  }
  readyState() {
    return this.techGet_(`readyState`);
  }
  bufferedPercent() {
    return na(this.buffered(), this.duration());
  }
  bufferedEnd() {
    let e14 = this.buffered(), t2 = this.duration(), n2 = e14.end(e14.length - 1);
    return n2 > t2 && (n2 = t2), n2;
  }
  volume(e14) {
    let t2;
    if (e14 !== void 0) {
      t2 = Math.max(0, Math.min(1, e14)), this.cache_.volume = t2, this.techCall_(`setVolume`, t2), t2 > 0 && this.lastVolume_(t2);
      return;
    }
    return t2 = parseFloat(this.techGet_(`volume`)), isNaN(t2) ? 1 : t2;
  }
  muted(e14) {
    if (e14 !== void 0) {
      this.techCall_(`setMuted`, e14);
      return;
    }
    return this.techGet_(`muted`) || false;
  }
  defaultMuted(e14) {
    return e14 !== void 0 && this.techCall_(`setDefaultMuted`, e14), this.techGet_(`defaultMuted`) || false;
  }
  lastVolume_(e14) {
    if (e14 !== void 0 && e14 !== 0) {
      this.cache_.lastVolume = e14;
      return;
    }
    return this.cache_.lastVolume;
  }
  supportsFullScreen() {
    return this.techGet_(`supportsFullScreen`) || false;
  }
  isFullscreen(e14) {
    if (e14 !== void 0) {
      let t2 = this.isFullscreen_;
      this.isFullscreen_ = !!e14, this.isFullscreen_ !== t2 && this.fsApi_.prefixed && this.trigger(`fullscreenchange`), this.toggleFullscreenClass_();
      return;
    }
    return this.isFullscreen_;
  }
  requestFullscreen(e14) {
    this.isInPictureInPicture() && this.exitPictureInPicture();
    let t2 = this;
    return new Promise((n2, r2) => {
      function i2() {
        t2.off(`fullscreenerror`, o2), t2.off(`fullscreenchange`, a2);
      }
      function a2() {
        i2(), n2();
      }
      function o2(e15, t3) {
        i2(), r2(t3);
      }
      t2.one(`fullscreenchange`, a2), t2.one(`fullscreenerror`, o2);
      let s2 = t2.requestFullscreenHelper_(e14);
      s2 && (s2.then(i2, i2), s2.then(n2, r2));
    });
  }
  requestFullscreenHelper_(e14) {
    let t2;
    if (this.fsApi_.prefixed || (t2 = this.options_.fullscreen && this.options_.fullscreen.options || {}, e14 !== void 0 && (t2 = e14)), this.fsApi_.requestFullscreen) {
      let e15 = this.el_[this.fsApi_.requestFullscreen](t2);
      return e15 && e15.then(() => this.isFullscreen(true), () => this.isFullscreen(false)), e15;
    } else this.tech_.supportsFullScreen() && !this.options_.preferFullWindow ? this.techCall_(`enterFullScreen`) : this.enterFullWindow();
  }
  exitFullscreen() {
    let e14 = this;
    return new Promise((t2, n2) => {
      function r2() {
        e14.off(`fullscreenerror`, a2), e14.off(`fullscreenchange`, i2);
      }
      function i2() {
        r2(), t2();
      }
      function a2(e15, t3) {
        r2(), n2(t3);
      }
      e14.one(`fullscreenchange`, i2), e14.one(`fullscreenerror`, a2);
      let o2 = e14.exitFullscreenHelper_();
      o2 && (o2.then(r2, r2), o2.then(t2, n2));
    });
  }
  exitFullscreenHelper_() {
    if (this.fsApi_.requestFullscreen) {
      let e14 = g.default[this.fsApi_.exitFullscreen]();
      return e14 && ia(e14.then(() => this.isFullscreen(false))), e14;
    } else this.tech_.supportsFullScreen() && !this.options_.preferFullWindow ? this.techCall_(`exitFullScreen`) : this.exitFullWindow();
  }
  enterFullWindow() {
    this.isFullscreen(true), this.isFullWindow = true, this.docOrigOverflow = g.default.documentElement.style.overflow, vi(g.default, `keydown`, this.boundFullWindowOnEscKey_), g.default.documentElement.style.overflow = `hidden`, Mr(g.default.body, `vjs-full-window`), this.trigger(`enterFullWindow`);
  }
  fullWindowOnEscKey(e14) {
    _.default.isEventKey(e14, `Esc`) && this.isFullscreen() === true && (this.isFullWindow ? this.exitFullWindow() : this.exitFullscreen());
  }
  exitFullWindow() {
    this.isFullscreen(false), this.isFullWindow = false, yi(g.default, `keydown`, this.boundFullWindowOnEscKey_), g.default.documentElement.style.overflow = this.docOrigOverflow, Nr(g.default.body, `vjs-full-window`), this.trigger(`exitFullWindow`);
  }
  disablePictureInPicture(e14) {
    if (e14 === void 0) return this.techGet_(`disablePictureInPicture`);
    this.techCall_(`setDisablePictureInPicture`, e14), this.options_.disablePictureInPicture = e14, this.trigger(`disablepictureinpicturechanged`);
  }
  isInPictureInPicture(e14) {
    if (e14 !== void 0) {
      this.isInPictureInPicture_ = !!e14, this.togglePictureInPictureClass_();
      return;
    }
    return !!this.isInPictureInPicture_;
  }
  requestPictureInPicture() {
    if (this.options_.enableDocumentPictureInPicture && h.default.documentPictureInPicture) {
      let e14 = g.default.createElement(this.el().tagName);
      return e14.classList = this.el().classList, e14.classList.add(`vjs-pip-container`), this.posterImage && e14.appendChild(this.posterImage.el().cloneNode(true)), this.titleBar && e14.appendChild(this.titleBar.el().cloneNode(true)), e14.appendChild(U(`p`, { className: `vjs-pip-text` }, {}, this.localize(`Playing in picture-in-picture`))), h.default.documentPictureInPicture.requestWindow({ width: this.videoWidth(), height: this.videoHeight() }).then((t2) => (ei(t2), this.el_.parentNode.insertBefore(e14, this.el_), t2.document.body.appendChild(this.el_), t2.document.body.classList.add(`vjs-pip-window`), this.player_.isInPictureInPicture(true), this.player_.trigger({ type: `enterpictureinpicture`, pipWindow: t2 }), t2.addEventListener(`pagehide`, (t3) => {
        let n2 = t3.target.querySelector(`.video-js`);
        e14.parentNode.replaceChild(n2, e14), this.player_.isInPictureInPicture(false), this.player_.trigger(`leavepictureinpicture`);
      }), t2));
    }
    return `pictureInPictureEnabled` in g.default && this.disablePictureInPicture() === false ? this.techGet_(`requestPictureInPicture`) : Promise.reject(`No PiP mode is available`);
  }
  exitPictureInPicture() {
    if (h.default.documentPictureInPicture && h.default.documentPictureInPicture.window) return h.default.documentPictureInPicture.window.close(), Promise.resolve();
    if (`pictureInPictureEnabled` in g.default) return g.default.exitPictureInPicture();
  }
  handleKeyDown(e14) {
    let { userActions: t2 } = this.options_;
    !t2 || !t2.hotkeys || ((e15) => {
      let t3 = e15.tagName.toLowerCase();
      return e15.isContentEditable ? true : t3 === `input` ? [`button`, `checkbox`, `hidden`, `radio`, `reset`, `submit`].indexOf(e15.type) === -1 : [`textarea`].indexOf(t3) !== -1;
    })(this.el_.ownerDocument.activeElement) || (typeof t2.hotkeys == `function` ? t2.hotkeys.call(this, e14) : this.handleHotkeys(e14));
  }
  handleHotkeys(e14) {
    let { fullscreenKey: t2 = (e15) => _.default.isEventKey(e15, `f`), muteKey: n2 = (e15) => _.default.isEventKey(e15, `m`), playPauseKey: r2 = (e15) => _.default.isEventKey(e15, `k`) || _.default.isEventKey(e15, `Space`) } = this.options_.userActions ? this.options_.userActions.hotkeys : {};
    if (t2.call(this, e14)) {
      e14.preventDefault(), e14.stopPropagation();
      let t3 = q.getComponent(`FullscreenToggle`);
      g.default[this.fsApi_.fullscreenEnabled] !== false && t3.prototype.handleClick.call(this, e14);
    } else n2.call(this, e14) ? (e14.preventDefault(), e14.stopPropagation(), q.getComponent(`MuteToggle`).prototype.handleClick.call(this, e14)) : r2.call(this, e14) && (e14.preventDefault(), e14.stopPropagation(), q.getComponent(`PlayToggle`).prototype.handleClick.call(this, e14));
  }
  canPlayType(e14) {
    let t2;
    for (let n2 = 0, r2 = this.options_.techOrder; n2 < r2.length; n2++) {
      let i2 = r2[n2], a2 = Y.getTech(i2);
      if (a2 ||= q.getComponent(i2), !a2) {
        z.error(`The "${i2}" tech is undefined. Skipped browser support check for that tech.`);
        continue;
      }
      if (a2.isSupported() && (t2 = a2.canPlayType(e14), t2)) return t2;
    }
    return ``;
  }
  selectSource(e14) {
    let t2 = this.options_.techOrder.map((e15) => [e15, Y.getTech(e15)]).filter(([e15, t3]) => t3 ? t3.isSupported() : (z.error(`The "${e15}" tech is undefined. Skipped browser support check for that tech.`), false)), n2 = function(e15, t3, n3) {
      let r3;
      return e15.some((e16) => t3.some((t4) => {
        if (r3 = n3(e16, t4), r3) return true;
      })), r3;
    }, r2, i2 = (e15) => (t3, n3) => e15(n3, t3), a2 = ([e15, t3], n3) => {
      if (t3.canPlaySource(n3, this.options_[e15.toLowerCase()])) return { source: n3, tech: e15 };
    };
    return r2 = this.options_.sourceOrder ? n2(e14, t2, i2(a2)) : n2(t2, e14, a2), r2 || false;
  }
  handleSrc_(e14, t2) {
    if (e14 === void 0) return this.cache_.src || ``;
    this.resetRetryOnError_ && this.resetRetryOnError_();
    let n2 = ro(e14);
    if (!n2.length) {
      this.setTimeout(function() {
        this.error({ code: 4, message: this.options_.notSupportedMessage });
      }, 0);
      return;
    }
    if (this.changingSrc_ = true, t2 || (this.cache_.sources = n2), this.updateSourceCaches_(n2[0]), Va(this, n2[0], (e15, r2) => {
      if (this.middleware_ = r2, t2 || (this.cache_.sources = n2), this.updateSourceCaches_(e15), this.src_(e15)) {
        if (n2.length > 1) return this.handleSrc_(n2.slice(1));
        this.changingSrc_ = false, this.setTimeout(function() {
          this.error({ code: 4, message: this.options_.notSupportedMessage });
        }, 0), this.triggerReady();
        return;
      }
      Ha(r2, this.tech_);
    }), n2.length > 1) {
      let e15 = () => {
        this.error(null), this.handleSrc_(n2.slice(1), true);
      }, t3 = () => {
        this.off(`error`, e15);
      };
      this.one(`error`, e15), this.one(`playing`, t3), this.resetRetryOnError_ = () => {
        this.off(`error`, e15), this.off(`playing`, t3);
      };
    }
  }
  src(e14) {
    return this.handleSrc_(e14, false);
  }
  src_(e14) {
    let t2 = this.selectSource([e14]);
    return t2 ? Wi(t2.tech, this.techName_) ? (this.ready(function() {
      this.tech_.constructor.prototype.hasOwnProperty(`setSource`) ? this.techCall_(`setSource`, e14) : this.techCall_(`src`, e14.src), this.changingSrc_ = false;
    }, true), false) : (this.changingSrc_ = true, this.loadTech_(t2.tech, t2.source), this.tech_.ready(() => {
      this.changingSrc_ = false;
    }), false) : true;
  }
  load() {
    if (this.tech_ && this.tech_.vhs) {
      this.src(this.currentSource());
      return;
    }
    this.techCall_(`load`);
  }
  reset() {
    this.paused() ? this.doReset_() : ia(this.play().then(() => this.doReset_()));
  }
  doReset_() {
    this.tech_ && this.tech_.clearTracks(`text`), this.removeClass(`vjs-playing`), this.addClass(`vjs-paused`), this.resetCache_(), this.poster(``), this.loadTech_(this.options_.techOrder[0], null), this.techCall_(`reset`), this.resetControlBarUI_(), this.error(null), this.titleBar && this.titleBar.update({ title: void 0, description: void 0 }), ji(this) && this.trigger(`playerreset`);
  }
  resetControlBarUI_() {
    this.resetProgressBar_(), this.resetPlaybackRate_(), this.resetVolumeBar_();
  }
  resetProgressBar_() {
    this.currentTime(0);
    let { currentTimeDisplay: e14, durationDisplay: t2, progressControl: n2, remainingTimeDisplay: r2 } = this.controlBar || {}, { seekBar: i2 } = n2 || {};
    e14 && e14.updateContent(), t2 && t2.updateContent(), r2 && r2.updateContent(), i2 && (i2.update(), i2.loadProgressBar && i2.loadProgressBar.update());
  }
  resetPlaybackRate_() {
    this.playbackRate(this.defaultPlaybackRate()), this.handleTechRateChange_();
  }
  resetVolumeBar_() {
    this.volume(1), this.trigger(`volumechange`);
  }
  currentSources() {
    let e14 = this.currentSource(), t2 = [];
    return Object.keys(e14).length !== 0 && t2.push(e14), this.cache_.sources || t2;
  }
  currentSource() {
    return this.cache_.source || {};
  }
  currentSrc() {
    return this.currentSource() && this.currentSource().src || ``;
  }
  currentType() {
    return this.currentSource() && this.currentSource().type || ``;
  }
  preload(e14) {
    if (e14 !== void 0) {
      this.techCall_(`setPreload`, e14), this.options_.preload = e14;
      return;
    }
    return this.techGet_(`preload`);
  }
  autoplay(e14) {
    if (e14 === void 0) return this.options_.autoplay || false;
    let t2;
    typeof e14 == `string` && /(any|play|muted)/.test(e14) || e14 === true && this.options_.normalizeAutoplay ? (this.options_.autoplay = e14, this.manualAutoplay_(typeof e14 == `string` ? e14 : `play`), t2 = false) : e14 ? this.options_.autoplay = true : this.options_.autoplay = false, t2 = t2 === void 0 ? this.options_.autoplay : t2, this.tech_ && this.techCall_(`setAutoplay`, t2);
  }
  playsinline(e14) {
    return e14 !== void 0 && (this.techCall_(`setPlaysinline`, e14), this.options_.playsinline = e14), this.techGet_(`playsinline`);
  }
  loop(e14) {
    if (e14 !== void 0) {
      this.techCall_(`setLoop`, e14), this.options_.loop = e14;
      return;
    }
    return this.techGet_(`loop`);
  }
  poster(e14) {
    if (e14 === void 0) return this.poster_;
    e14 ||= ``, e14 !== this.poster_ && (this.poster_ = e14, this.techCall_(`setPoster`, e14), this.isPosterFromTech_ = false, this.trigger(`posterchange`));
  }
  handleTechPosterChange_() {
    if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) {
      let e14 = this.tech_.poster() || ``;
      e14 !== this.poster_ && (this.poster_ = e14, this.isPosterFromTech_ = true, this.trigger(`posterchange`));
    }
  }
  controls(e14) {
    if (e14 === void 0) return !!this.controls_;
    e14 = !!e14, this.controls_ !== e14 && (this.controls_ = e14, this.usingNativeControls() && this.techCall_(`setControls`, e14), this.controls_ ? (this.removeClass(`vjs-controls-disabled`), this.addClass(`vjs-controls-enabled`), this.trigger(`controlsenabled`), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass(`vjs-controls-enabled`), this.addClass(`vjs-controls-disabled`), this.trigger(`controlsdisabled`), this.usingNativeControls() || this.removeTechControlsListeners_()));
  }
  usingNativeControls(e14) {
    if (e14 === void 0) return !!this.usingNativeControls_;
    e14 = !!e14, this.usingNativeControls_ !== e14 && (this.usingNativeControls_ = e14, this.usingNativeControls_ ? (this.addClass(`vjs-using-native-controls`), this.trigger(`usingnativecontrols`)) : (this.removeClass(`vjs-using-native-controls`), this.trigger(`usingcustomcontrols`)));
  }
  error(e14) {
    if (e14 === void 0) return this.error_ || null;
    if (In(`beforeerror`).forEach((t2) => {
      let n2 = t2(this, e14);
      if (!(Qn(n2) && !Array.isArray(n2) || typeof n2 == `string` || typeof n2 == `number` || n2 === null)) {
        this.log.error(`please return a value that MediaError expects in beforeerror hooks`);
        return;
      }
      e14 = n2;
    }), this.options_.suppressNotSupportedError && e14 && e14.code === 4) {
      let t2 = function() {
        this.error(e14);
      };
      this.options_.suppressNotSupportedError = false, this.any([`click`, `touchstart`], t2), this.one(`loadstart`, function() {
        this.off([`click`, `touchstart`], t2);
      });
      return;
    }
    if (e14 === null) {
      this.error_ = null, this.removeClass(`vjs-error`), this.errorDisplay && this.errorDisplay.close();
      return;
    }
    this.error_ = new J(e14), this.addClass(`vjs-error`), z.error(`(CODE:${this.error_.code} ${J.errorTypes[this.error_.code]})`, this.error_.message, this.error_), this.trigger(`error`), In(`error`).forEach((e15) => e15(this, this.error_));
  }
  reportUserActivity(e14) {
    this.userActivity_ = true;
  }
  userActive(e14) {
    if (e14 === void 0) return this.userActive_;
    if (e14 = !!e14, e14 !== this.userActive_) {
      if (this.userActive_ = e14, this.userActive_) {
        this.userActivity_ = true, this.removeClass(`vjs-user-inactive`), this.addClass(`vjs-user-active`), this.trigger(`useractive`);
        return;
      }
      this.tech_ && this.tech_.one(`mousemove`, function(e15) {
        e15.stopPropagation(), e15.preventDefault();
      }), this.userActivity_ = false, this.removeClass(`vjs-user-active`), this.addClass(`vjs-user-inactive`), this.trigger(`userinactive`);
    }
  }
  listenForUserActivity_() {
    let e14, t2, n2, r2 = G(this, this.reportUserActivity), i2 = function(e15) {
      (e15.screenX !== t2 || e15.screenY !== n2) && (t2 = e15.screenX, n2 = e15.screenY, r2());
    }, a2 = function() {
      r2(), this.clearInterval(e14), e14 = this.setInterval(r2, 250);
    }, o2 = function(t3) {
      r2(), this.clearInterval(e14);
    };
    this.on(`mousedown`, a2), this.on(`mousemove`, i2), this.on(`mouseup`, o2), this.on(`mouseleave`, o2);
    let s2 = this.getChild(`controlBar`);
    s2 && !Sr && !ir && (s2.on(`mouseenter`, function(e15) {
      this.player().options_.inactivityTimeout !== 0 && (this.player().cache_.inactivityTimeout = this.player().options_.inactivityTimeout), this.player().options_.inactivityTimeout = 0;
    }), s2.on(`mouseleave`, function(e15) {
      this.player().options_.inactivityTimeout = this.player().cache_.inactivityTimeout;
    })), this.on(`keydown`, r2), this.on(`keyup`, r2);
    let c2;
    this.setInterval(function() {
      if (!this.userActivity_) return;
      this.userActivity_ = false, this.userActive(true), this.clearTimeout(c2);
      let e15 = this.options_.inactivityTimeout;
      e15 <= 0 || (c2 = this.setTimeout(function() {
        this.userActivity_ || this.userActive(false);
      }, e15));
    }, 250);
  }
  playbackRate(e14) {
    if (e14 !== void 0) {
      this.techCall_(`setPlaybackRate`, e14);
      return;
    }
    return this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_(`playbackRate`) : 1;
  }
  defaultPlaybackRate(e14) {
    return e14 === void 0 ? this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_(`defaultPlaybackRate`) : 1 : this.techCall_(`setDefaultPlaybackRate`, e14);
  }
  isAudio(e14) {
    if (e14 !== void 0) {
      this.isAudio_ = !!e14;
      return;
    }
    return !!this.isAudio_;
  }
  updatePlayerHeightOnAudioOnlyMode_() {
    let e14 = this.getChild(`ControlBar`);
    !e14 || this.audioOnlyCache_.controlBarHeight === e14.currentHeight() || (this.audioOnlyCache_.controlBarHeight = e14.currentHeight(), this.height(this.audioOnlyCache_.controlBarHeight));
  }
  enableAudioOnlyUI_() {
    this.addClass(`vjs-audio-only-mode`);
    let e14 = this.children(), t2 = this.getChild(`ControlBar`), n2 = t2 && t2.currentHeight();
    e14.forEach((e15) => {
      e15 !== t2 && e15.el_ && !e15.hasClass(`vjs-hidden`) && (e15.hide(), this.audioOnlyCache_.hiddenChildren.push(e15));
    }), this.audioOnlyCache_.playerHeight = this.currentHeight(), this.audioOnlyCache_.controlBarHeight = n2, this.on(`playerresize`, this.boundUpdatePlayerHeightOnAudioOnlyMode_), this.height(n2), this.trigger(`audioonlymodechange`);
  }
  disableAudioOnlyUI_() {
    this.removeClass(`vjs-audio-only-mode`), this.off(`playerresize`, this.boundUpdatePlayerHeightOnAudioOnlyMode_), this.audioOnlyCache_.hiddenChildren.forEach((e14) => e14.show()), this.height(this.audioOnlyCache_.playerHeight), this.trigger(`audioonlymodechange`);
  }
  audioOnlyMode(e14) {
    if (typeof e14 != `boolean` || e14 === this.audioOnlyMode_) return this.audioOnlyMode_;
    if (this.audioOnlyMode_ = e14, e14) {
      let e15 = [];
      return this.isInPictureInPicture() && e15.push(this.exitPictureInPicture()), this.isFullscreen() && e15.push(this.exitFullscreen()), this.audioPosterMode() && e15.push(this.audioPosterMode(false)), Promise.all(e15).then(() => this.enableAudioOnlyUI_());
    }
    return Promise.resolve().then(() => this.disableAudioOnlyUI_());
  }
  enablePosterModeUI_() {
    (this.tech_ && this.tech_).hide(), this.addClass(`vjs-audio-poster-mode`), this.trigger(`audiopostermodechange`);
  }
  disablePosterModeUI_() {
    (this.tech_ && this.tech_).show(), this.removeClass(`vjs-audio-poster-mode`), this.trigger(`audiopostermodechange`);
  }
  audioPosterMode(e14) {
    return typeof e14 != `boolean` || e14 === this.audioPosterMode_ ? this.audioPosterMode_ : (this.audioPosterMode_ = e14, e14 ? this.audioOnlyMode() ? this.audioOnlyMode(false).then(() => {
      this.enablePosterModeUI_();
    }) : Promise.resolve().then(() => {
      this.enablePosterModeUI_();
    }) : Promise.resolve().then(() => {
      this.disablePosterModeUI_();
    }));
  }
  addTextTrack(e14, t2, n2) {
    if (this.tech_) return this.tech_.addTextTrack(e14, t2, n2);
  }
  addRemoteTextTrack(e14, t2) {
    if (this.tech_) return this.tech_.addRemoteTextTrack(e14, t2);
  }
  removeRemoteTextTrack(e14 = {}) {
    let { track: t2 } = e14;
    if (t2 ||= e14, this.tech_) return this.tech_.removeRemoteTextTrack(t2);
  }
  getVideoPlaybackQuality() {
    return this.techGet_(`getVideoPlaybackQuality`);
  }
  videoWidth() {
    return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0;
  }
  videoHeight() {
    return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0;
  }
  language(e14) {
    if (e14 === void 0) return this.language_;
    this.language_ !== String(e14).toLowerCase() && (this.language_ = String(e14).toLowerCase(), ji(this) && this.trigger(`languagechange`));
  }
  languages() {
    return B(e12.prototype.options_.languages, this.languages_);
  }
  toJSON() {
    let e14 = B(this.options_), t2 = e14.tracks;
    e14.tracks = [];
    for (let n2 = 0; n2 < t2.length; n2++) {
      let r2 = t2[n2];
      r2 = B(r2), r2.player = void 0, e14.tracks[n2] = r2;
    }
    return e14;
  }
  createModal(e14, t2) {
    t2 ||= {}, t2.content = e14 || ``;
    let n2 = new ca(this, t2);
    return this.addChild(n2), n2.on(`dispose`, () => {
      this.removeChild(n2);
    }), n2.open(), n2;
  }
  updateCurrentBreakpoint_() {
    if (!this.responsive()) return;
    let e14 = this.currentBreakpoint(), t2 = this.currentWidth();
    for (let n2 = 0; n2 < uc.length; n2++) {
      let r2 = uc[n2];
      if (t2 <= this.breakpoints_[r2]) {
        if (e14 === r2) return;
        e14 && this.removeClass(dc[e14]), this.addClass(dc[r2]), this.breakpoint_ = r2;
        break;
      }
    }
  }
  removeCurrentBreakpoint_() {
    let e14 = this.currentBreakpointClass();
    this.breakpoint_ = ``, e14 && this.removeClass(e14);
  }
  breakpoints(e14) {
    return e14 === void 0 ? Object.assign(this.breakpoints_) : (this.breakpoint_ = ``, this.breakpoints_ = Object.assign({}, fc, e14), this.updateCurrentBreakpoint_(), Object.assign(this.breakpoints_));
  }
  responsive(e14) {
    if (e14 === void 0) return this.responsive_;
    e14 = !!e14;
    let t2 = this.responsive_;
    if (e14 !== t2) return this.responsive_ = e14, e14 ? (this.on(`playerresize`, this.boundUpdateCurrentBreakpoint_), this.updateCurrentBreakpoint_()) : (this.off(`playerresize`, this.boundUpdateCurrentBreakpoint_), this.removeCurrentBreakpoint_()), e14;
  }
  currentBreakpoint() {
    return this.breakpoint_;
  }
  currentBreakpointClass() {
    return dc[this.breakpoint_] || ``;
  }
  loadMedia(e14, t2) {
    if (!e14 || typeof e14 != `object`) return;
    let n2 = this.crossOrigin();
    this.reset(), this.cache_.media = B(e14);
    let { artist: r2, artwork: i2, description: a2, poster: o2, src: s2, textTracks: c2, title: l2 } = this.cache_.media;
    !i2 && o2 && (this.cache_.media.artwork = [{ src: o2, type: to(o2) }]), n2 && this.crossOrigin(n2), s2 && this.src(s2), o2 && this.poster(o2), Array.isArray(c2) && c2.forEach((e15) => this.addRemoteTextTrack(e15, false)), this.titleBar && this.titleBar.update({ title: l2, description: a2 || r2 || `` }), this.ready(t2);
  }
  getMedia() {
    if (!this.cache_.media) {
      let e14 = this.poster(), t2 = { src: this.currentSources(), textTracks: Array.prototype.map.call(this.remoteTextTracks(), (e15) => ({ kind: e15.kind, label: e15.label, language: e15.language, src: e15.src })) };
      return e14 && (t2.poster = e14, t2.artwork = [{ src: t2.poster, type: to(t2.poster) }]), t2;
    }
    return B(this.cache_.media);
  }
  static getTagSettings(e14) {
    let t2 = { sources: [], tracks: [] }, n2 = Ir(e14), r2 = n2[`data-setup`];
    if (jr(e14, `vjs-fill`) && (n2.fill = true), jr(e14, `vjs-fluid`) && (n2.fluid = true), r2 !== null) {
      let [e15, t3] = (0, v.default)(r2 || `{}`);
      e15 && z.error(e15), Object.assign(n2, t3);
    }
    if (Object.assign(t2, n2), e14.hasChildNodes()) {
      let n3 = e14.childNodes;
      for (let e15 = 0, r3 = n3.length; e15 < r3; e15++) {
        let r4 = n3[e15], i2 = r4.nodeName.toLowerCase();
        i2 === `source` ? t2.sources.push(Ir(r4)) : i2 === `track` && t2.tracks.push(Ir(r4));
      }
    }
    return t2;
  }
  debug(e14) {
    if (e14 === void 0) return this.debugEnabled_;
    e14 ? (this.trigger(`debugon`), this.previousLogLevel_ = this.log.level, this.log.level(`debug`), this.debugEnabled_ = true) : (this.trigger(`debugoff`), this.log.level(this.previousLogLevel_), this.previousLogLevel_ = void 0, this.debugEnabled_ = false);
  }
  playbackRates(e14) {
    if (e14 === void 0) return this.cache_.playbackRates;
    Array.isArray(e14) && e14.every((e15) => typeof e15 == `number`) && (this.cache_.playbackRates = e14, this.trigger(`playbackrateschange`));
  }
};
Fa.names.forEach(function(e14) {
  let t2 = Fa[e14];
  pc.prototype[t2.getterName] = function() {
    return this.tech_ ? this.tech_[t2.getterName]() : (this[t2.privateName] = this[t2.privateName] || new t2.ListClass(), this[t2.privateName]);
  };
}), pc.prototype.crossorigin = pc.prototype.crossOrigin, pc.players = {};
var mc = h.default.navigator;
pc.prototype.options_ = { techOrder: Y.defaultTechOrder_, html5: {}, enableSourceset: true, inactivityTimeout: 2e3, playbackRates: [], liveui: false, children: [`mediaLoader`, `posterImage`, `titleBar`, `textTrackDisplay`, `loadingSpinner`, `bigPlayButton`, `liveTracker`, `controlBar`, `errorDisplay`, `textTrackSettings`, `resizeManager`], language: mc && (mc.languages && mc.languages[0] || mc.userLanguage || mc.language) || `en`, languages: {}, notSupportedMessage: `No compatible source was found for this media.`, normalizeAutoplay: false, fullscreen: { options: { navigationUI: `hide` } }, breakpoints: {}, responsive: false, audioOnlyMode: false, audioPosterMode: false, spatialNavigation: { enabled: false, horizontalSeek: false }, enableSmoothSeeking: false }, cc.forEach(function(e14) {
  pc.prototype[`handleTech${K(e14)}_`] = function() {
    return this.trigger(e14);
  };
}), q.registerComponent(`Player`, pc);
var hc = `plugin`, gc = `activePlugins_`, _c = {}, vc = (e14) => _c.hasOwnProperty(e14), yc = (e14) => vc(e14) ? _c[e14] : void 0, bc = (e14, t2) => {
  e14[gc] = e14[gc] || {}, e14[gc][t2] = true;
}, xc = (e14, t2, n2) => {
  let r2 = (n2 ? `before` : ``) + `pluginsetup`;
  e14.trigger(r2, t2), e14.trigger(r2 + `:` + t2.name, t2);
}, Sc = function(e14, t2) {
  let n2 = function() {
    xc(this, { name: e14, plugin: t2, instance: null }, true);
    let n3 = t2.apply(this, arguments);
    return bc(this, e14), xc(this, { name: e14, plugin: t2, instance: n3 }), n3;
  };
  return Object.keys(t2).forEach(function(e15) {
    n2[e15] = t2[e15];
  }), n2;
}, Cc = (e14, t2) => (t2.prototype.name = e14, function(...n2) {
  xc(this, { name: e14, plugin: t2, instance: null }, true);
  let r2 = new t2(this, ...n2);
  return this[e14] = () => r2, xc(this, r2.getEventHash()), r2;
}), wc = class e13 {
  constructor(t2) {
    if (this.constructor === e13) throw Error(`Plugin must be sub-classed; not directly instantiated.`);
    this.player = t2, this.log ||= this.player.log.createLogger(this.name), Bi(this), delete this.trigger, Hi(this, this.constructor.defaultState), bc(t2, this.name), this.dispose = this.dispose.bind(this), t2.on(`dispose`, this.dispose);
  }
  version() {
    return this.constructor.VERSION;
  }
  getEventHash(e14 = {}) {
    return e14.name = this.name, e14.plugin = this.constructor, e14.instance = this, e14;
  }
  trigger(e14, t2 = {}) {
    return bi(this.eventBusEl_, e14, this.getEventHash(t2));
  }
  handleStateChanged(e14) {
  }
  dispose() {
    let { name: e14, player: t2 } = this;
    this.trigger(`dispose`), this.off(), t2.off(`dispose`, this.dispose), t2[gc][e14] = false, this.player = this.state = null, t2[e14] = Cc(e14, _c[e14]);
  }
  static isBasic(t2) {
    let n2 = typeof t2 == `string` ? yc(t2) : t2;
    return typeof n2 == `function` && !e13.prototype.isPrototypeOf(n2.prototype);
  }
  static registerPlugin(t2, n2) {
    if (typeof t2 != `string`) throw Error(`Illegal plugin name, "${t2}", must be a string, was ${typeof t2}.`);
    if (vc(t2)) z.warn(`A plugin named "${t2}" already exists. You may want to avoid re-registering plugins!`);
    else if (pc.prototype.hasOwnProperty(t2)) throw Error(`Illegal plugin name, "${t2}", cannot share a name with an existing player method!`);
    if (typeof n2 != `function`) throw Error(`Illegal plugin for "${t2}", must be a function, was ${typeof n2}.`);
    return _c[t2] = n2, t2 !== hc && (e13.isBasic(n2) ? pc.prototype[t2] = Sc(t2, n2) : pc.prototype[t2] = Cc(t2, n2)), n2;
  }
  static deregisterPlugin(e14) {
    if (e14 === hc) throw Error(`Cannot de-register base plugin.`);
    vc(e14) && (delete _c[e14], delete pc.prototype[e14]);
  }
  static getPlugins(e14 = Object.keys(_c)) {
    let t2;
    return e14.forEach((e15) => {
      let n2 = yc(e15);
      n2 && (t2 ||= {}, t2[e15] = n2);
    }), t2;
  }
  static getPluginVersion(e14) {
    let t2 = yc(e14);
    return t2 && t2.VERSION || ``;
  }
};
wc.getPlugin = yc, wc.BASE_PLUGIN_NAME = hc, wc.registerPlugin(hc, wc), pc.prototype.usingPlugin = function(e14) {
  return !!this[gc] && this[gc][e14] === true;
}, pc.prototype.hasPlugin = function(e14) {
  return !!vc(e14);
};
function Tc(e14, t2) {
  let n2 = false;
  return function(...r2) {
    return n2 || z.warn(e14), n2 = true, t2.apply(this, r2);
  };
}
function Ec(e14, t2, n2, r2) {
  return Tc(`${t2} is deprecated and will be removed in ${e14}.0; please use ${n2} instead.`, r2);
}
var Dc = { NetworkBadStatus: `networkbadstatus`, NetworkRequestFailed: `networkrequestfailed`, NetworkRequestAborted: `networkrequestaborted`, NetworkRequestTimeout: `networkrequesttimeout`, NetworkBodyParserFailed: `networkbodyparserfailed`, StreamingHlsPlaylistParserError: `streaminghlsplaylistparsererror`, StreamingDashManifestParserError: `streamingdashmanifestparsererror`, StreamingContentSteeringParserError: `streamingcontentsteeringparsererror`, StreamingVttParserError: `streamingvttparsererror`, StreamingFailedToSelectNextSegment: `streamingfailedtoselectnextsegment`, StreamingFailedToDecryptSegment: `streamingfailedtodecryptsegment`, StreamingFailedToTransmuxSegment: `streamingfailedtotransmuxsegment`, StreamingFailedToAppendSegment: `streamingfailedtoappendsegment`, StreamingCodecsChangeError: `streamingcodecschangeerror` }, Oc = (e14) => e14.indexOf(`#`) === 0 ? e14.slice(1) : e14;
function Z(e14, t2, n2) {
  let r2 = Z.getPlayer(e14);
  if (r2) return t2 && z.warn(`Player "${e14}" is already initialised. Options will not be applied.`), n2 && r2.ready(n2), r2;
  let i2 = typeof e14 == `string` ? Zr(`#` + Oc(e14)) : e14;
  if (!Or(i2)) throw TypeError(`The element or ID supplied is not valid. (videojs)`);
  let a2 = `getRootNode` in i2 && i2.getRootNode() instanceof h.default.ShadowRoot ? i2.getRootNode() : i2.ownerDocument.body;
  return (!i2.ownerDocument.defaultView || !a2.contains(i2)) && z.warn(`The element supplied is not included in the DOM`), t2 ||= {}, t2.restoreEl === true && (t2.restoreEl = (i2.parentNode && i2.parentNode.hasAttribute && i2.parentNode.hasAttribute(`data-vjs-player`) ? i2.parentNode : i2).cloneNode(true)), In(`beforesetup`).forEach((e15) => {
    let n3 = e15(i2, B(t2));
    if (!Qn(n3) || Array.isArray(n3)) {
      z.error(`please return an object in beforesetup hooks`);
      return;
    }
    t2 = B(t2, n3);
  }), r2 = new (q.getComponent(`Player`))(i2, t2, n2), In(`setup`).forEach((e15) => e15(r2)), r2;
}
if (Z.hooks_ = Fn, Z.hooks = In, Z.hook = Ln, Z.hookOnce = zn, Z.removeHook = Rn, h.default.VIDEOJS_NO_DYNAMIC_STYLE !== true && Dr()) {
  let e14 = Zr(`.vjs-styles-defaults`);
  if (!e14) {
    e14 = si(`vjs-styles-defaults`);
    let t2 = Zr(`head`);
    t2 && t2.insertBefore(e14, t2.firstChild), ci(e14, `
      .video-js {
        width: 300px;
        height: 150px;
      }

      .vjs-fluid:not(.vjs-audio-only-mode) {
        padding-top: 56.25%
      }
    `);
  }
}
ai(1, Z), Z.VERSION = Pn, Z.options = pc.prototype.options_, Z.getPlayers = () => pc.players, Z.getPlayer = (e14) => {
  let t2 = pc.players, n2;
  if (typeof e14 == `string`) {
    let r2 = Oc(e14), i2 = t2[r2];
    if (i2) return i2;
    n2 = Zr(`#` + r2);
  } else n2 = e14;
  if (Or(n2)) {
    let { player: e15, playerId: r2 } = n2;
    if (e15 || t2[r2]) return e15 || t2[r2];
  }
}, Z.getAllPlayers = () => Object.keys(pc.players).map((e14) => pc.players[e14]).filter(Boolean), Z.players = pc.players, Z.getComponent = q.getComponent, Z.registerComponent = (e14, t2) => (Y.isTech(t2) && z.warn(`The ${e14} tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)`), q.registerComponent.call(q, e14, t2)), Z.getTech = Y.getTech, Z.registerTech = Y.registerTech, Z.use = Ba, Object.defineProperty(Z, "middleware", { value: {}, writeable: false, enumerable: true }), Object.defineProperty(Z.middleware, "TERMINATOR", { value: za, writeable: false, enumerable: true }), Z.browser = wr, Z.obj = tr, Z.mergeOptions = Ec(9, `videojs.mergeOptions`, `videojs.obj.merge`, B), Z.defineLazyProperty = Ec(9, `videojs.defineLazyProperty`, `videojs.obj.defineLazyProperty`, V), Z.bind = Ec(9, `videojs.bind`, `native Function.prototype.bind`, G), Z.registerPlugin = wc.registerPlugin, Z.deregisterPlugin = wc.deregisterPlugin, Z.plugin = (e14, t2) => (z.warn(`videojs.plugin() is deprecated; use videojs.registerPlugin() instead`), wc.registerPlugin(e14, t2)), Z.getPlugins = wc.getPlugins, Z.getPlugin = wc.getPlugin, Z.getPluginVersion = wc.getPluginVersion, Z.addLanguage = function(e14, t2) {
  return e14 = (`` + e14).toLowerCase(), Z.options.languages = B(Z.options.languages, { [e14]: t2 }), Z.options.languages[e14];
}, Z.log = z, Z.createLogger = qn, Z.time = ta, Z.createTimeRange = Ec(9, `videojs.createTimeRange`, `videojs.time.createTimeRanges`, Yi), Z.createTimeRanges = Ec(9, `videojs.createTimeRanges`, `videojs.time.createTimeRanges`, Yi), Z.formatTime = Ec(9, `videojs.formatTime`, `videojs.time.formatTime`, ea), Z.setFormatTime = Ec(9, `videojs.setFormatTime`, `videojs.time.setFormatTime`, Qi), Z.resetFormatTime = Ec(9, `videojs.resetFormatTime`, `videojs.time.resetFormatTime`, $i), Z.parseUrl = Ec(9, `videojs.parseUrl`, `videojs.url.parseUrl`, Sa), Z.isCrossOrigin = Ec(9, `videojs.isCrossOrigin`, `videojs.url.isCrossOrigin`, Ta), Z.EventTarget = ki, Z.any = Si, Z.on = vi, Z.one = xi, Z.off = yi, Z.trigger = bi, Z.xhr = y.default, Z.TextTrack = ka, Z.AudioTrack = Aa, Z.VideoTrack = ja, [`isEl`, `isTextNode`, `createEl`, `hasClass`, `addClass`, `removeClass`, `toggleClass`, `setAttributes`, `getAttributes`, `emptyEl`, `appendContent`, `insertContent`].forEach((e14) => {
  Z[e14] = function() {
    return z.warn(`videojs.${e14}() is deprecated; use videojs.dom.${e14}() instead`), ti[e14].apply(null, arguments);
  };
}), Z.computedStyle = Ec(9, `videojs.computedStyle`, `videojs.dom.computedStyle`, $r), Z.dom = ti, Z.fn = Di, Z.num = Po, Z.str = Gi, Z.url = Ea, Z.Error = Dc;
var kc = class {
  constructor(e14) {
    let t2 = this;
    return t2.id = e14.id, t2.label = t2.id, t2.width = e14.width, t2.height = e14.height, t2.bitrate = e14.bandwidth, t2.frameRate = e14.frameRate, t2.enabled_ = e14.enabled, Object.defineProperty(t2, "enabled", { get() {
      return t2.enabled_();
    }, set(e15) {
      t2.enabled_(e15);
    } }), t2;
  }
}, Ac = class extends Z.EventTarget {
  constructor() {
    super();
    let e14 = this;
    return e14.levels_ = [], e14.selectedIndex_ = -1, Object.defineProperty(e14, "selectedIndex", { get() {
      return e14.selectedIndex_;
    } }), Object.defineProperty(e14, "length", { get() {
      return e14.levels_.length;
    } }), e14[Symbol.iterator] = () => e14.levels_.values(), e14;
  }
  addQualityLevel(e14) {
    let t2 = this.getQualityLevelById(e14.id);
    if (t2) return t2;
    let n2 = this.levels_.length;
    return t2 = new kc(e14), `` + n2 in this || Object.defineProperty(this, n2, { get() {
      return this.levels_[n2];
    } }), this.levels_.push(t2), this.trigger({ qualityLevel: t2, type: `addqualitylevel` }), t2;
  }
  removeQualityLevel(e14) {
    let t2 = null;
    for (let n2 = 0, r2 = this.length; n2 < r2; n2++) if (this[n2] === e14) {
      t2 = this.levels_.splice(n2, 1)[0], this.selectedIndex_ === n2 ? this.selectedIndex_ = -1 : this.selectedIndex_ > n2 && this.selectedIndex_--;
      break;
    }
    return t2 && this.trigger({ qualityLevel: e14, type: `removequalitylevel` }), t2;
  }
  getQualityLevelById(e14) {
    for (let t2 = 0, n2 = this.length; t2 < n2; t2++) {
      let n3 = this[t2];
      if (n3.id === e14) return n3;
    }
    return null;
  }
  dispose() {
    this.selectedIndex_ = -1, this.levels_.length = 0;
  }
};
Ac.prototype.allowedEvents_ = { change: `change`, addqualitylevel: `addqualitylevel`, removequalitylevel: `removequalitylevel` };
for (let e14 in Ac.prototype.allowedEvents_) Ac.prototype[`on` + e14] = null;
var jc = `4.1.0`, Mc = function(e14, t2) {
  let n2 = e14.qualityLevels, r2 = new Ac(), i2 = function() {
    r2.dispose(), e14.qualityLevels = n2, e14.off(`dispose`, i2);
  };
  return e14.on(`dispose`, i2), e14.qualityLevels = () => r2, e14.qualityLevels.VERSION = jc, r2;
}, Nc = function(e14) {
  return Mc(this, Z.obj.merge({}, e14));
};
Z.registerPlugin(`qualityLevels`, Nc), Nc.VERSION = jc;
var Pc = ee, Fc = (e14, t2) => t2 && t2.responseURL && e14 !== t2.responseURL ? t2.responseURL : e14, Ic = (e14) => Z.log.debug ? Z.log.debug.bind(Z, `VHS:`, `${e14} >`) : function() {
};
function Q(...e14) {
  let t2 = Z.obj || Z;
  return (t2.merge || t2.mergeOptions).apply(t2, e14);
}
function Lc(...e14) {
  let t2 = Z.time || Z;
  return (t2.createTimeRanges || t2.createTimeRanges).apply(t2, e14);
}
function Rc(e14) {
  if (e14.length === 0) return `Buffered Ranges are empty`;
  let t2 = `Buffered Ranges: 
`;
  for (let n2 = 0; n2 < e14.length; n2++) {
    let r2 = e14.start(n2), i2 = e14.end(n2);
    t2 += `${r2} --> ${i2}. Duration (${i2 - r2})
`;
  }
  return t2;
}
var zc = 1 / 30, Bc = zc * 3, Vc = function(e14, t2) {
  let n2 = [], r2;
  if (e14 && e14.length) for (r2 = 0; r2 < e14.length; r2++) t2(e14.start(r2), e14.end(r2)) && n2.push([e14.start(r2), e14.end(r2)]);
  return Lc(n2);
}, Hc = function(e14, t2) {
  return Vc(e14, function(e15, n2) {
    return e15 - Bc <= t2 && n2 + Bc >= t2;
  });
}, Uc = function(e14, t2) {
  return Vc(e14, function(e15) {
    return e15 - zc >= t2;
  });
}, Wc = function(e14) {
  if (e14.length < 2) return Lc();
  let t2 = [];
  for (let n2 = 1; n2 < e14.length; n2++) {
    let r2 = e14.end(n2 - 1), i2 = e14.start(n2);
    t2.push([r2, i2]);
  }
  return Lc(t2);
}, Gc = function(e14, t2) {
  let n2 = null, r2 = null, i2 = 0, a2 = [], o2 = [];
  if (!e14 || !e14.length || !t2 || !t2.length) return Lc();
  let s2 = e14.length;
  for (; s2--; ) a2.push({ time: e14.start(s2), type: `start` }), a2.push({ time: e14.end(s2), type: `end` });
  for (s2 = t2.length; s2--; ) a2.push({ time: t2.start(s2), type: `start` }), a2.push({ time: t2.end(s2), type: `end` });
  for (a2.sort(function(e15, t3) {
    return e15.time - t3.time;
  }), s2 = 0; s2 < a2.length; s2++) a2[s2].type === `start` ? (i2++, i2 === 2 && (n2 = a2[s2].time)) : a2[s2].type === `end` && (i2--, i2 === 1 && (r2 = a2[s2].time)), n2 !== null && r2 !== null && (o2.push([n2, r2]), n2 = null, r2 = null);
  return Lc(o2);
}, Kc = (e14) => {
  let t2 = [];
  if (!e14 || !e14.length) return ``;
  for (let n2 = 0; n2 < e14.length; n2++) t2.push(e14.start(n2) + ` => ` + e14.end(n2));
  return t2.join(`, `);
}, qc = function(e14, t2, n2 = 1) {
  return ((e14.length ? e14.end(e14.length - 1) : 0) - t2) / n2;
}, Jc = (e14) => {
  let t2 = [];
  for (let n2 = 0; n2 < e14.length; n2++) t2.push({ start: e14.start(n2), end: e14.end(n2) });
  return t2;
}, Yc = function(e14, t2) {
  if (e14 === t2) return false;
  if (!e14 && t2 || !t2 && e14 || e14.length !== t2.length) return true;
  for (let n2 = 0; n2 < e14.length; n2++) if (e14.start(n2) !== t2.start(n2) || e14.end(n2) !== t2.end(n2)) return true;
  return false;
}, Xc = function(e14) {
  if (!(!e14 || !e14.length || !e14.end)) return e14.end(e14.length - 1);
}, Zc = function(e14, t2) {
  let n2 = 0;
  if (!e14 || !e14.length) return n2;
  for (let r2 = 0; r2 < e14.length; r2++) {
    let i2 = e14.start(r2), a2 = e14.end(r2);
    if (!(t2 > a2)) {
      if (t2 > i2 && t2 <= a2) {
        n2 += a2 - t2;
        continue;
      }
      n2 += a2 - i2;
    }
  }
  return n2;
}, Qc = (e14, t2) => {
  if (!t2.preload) return t2.duration;
  let n2 = 0;
  return (t2.parts || []).forEach(function(e15) {
    n2 += e15.duration;
  }), (t2.preloadHints || []).forEach(function(t3) {
    t3.type === `PART` && (n2 += e14.partTargetDuration);
  }), n2;
}, $c = (e14) => (e14.segments || []).reduce((e15, t2, n2) => (t2.parts ? t2.parts.forEach(function(r2, i2) {
  e15.push({ duration: r2.duration, segmentIndex: n2, partIndex: i2, part: r2, segment: t2 });
}) : e15.push({ duration: t2.duration, segmentIndex: n2, partIndex: null, segment: t2, part: null }), e15), []), el = (e14) => {
  let t2 = e14.segments && e14.segments.length && e14.segments[e14.segments.length - 1];
  return t2 && t2.parts || [];
}, tl = ({ preloadSegment: e14 }) => {
  if (!e14) return;
  let { parts: t2, preloadHints: n2 } = e14, r2 = (n2 || []).reduce((e15, t3) => e15 + +(t3.type === `PART`), 0);
  return r2 += t2 && t2.length ? t2.length : 0, r2;
}, nl = (e14, t2) => {
  if (t2.endList) return 0;
  if (e14 && e14.suggestedPresentationDelay) return e14.suggestedPresentationDelay;
  let n2 = el(t2).length > 0;
  return n2 && t2.serverControl && t2.serverControl.partHoldBack ? t2.serverControl.partHoldBack : n2 && t2.partTargetDuration ? t2.partTargetDuration * 3 : t2.serverControl && t2.serverControl.holdBack ? t2.serverControl.holdBack : t2.targetDuration ? t2.targetDuration * 3 : 0;
}, rl = function(e14, t2) {
  let n2 = 0, r2 = t2 - e14.mediaSequence, i2 = e14.segments[r2];
  if (i2) {
    if (i2.start !== void 0) return { result: i2.start, precise: true };
    if (i2.end !== void 0) return { result: i2.end - i2.duration, precise: true };
  }
  for (; r2--; ) {
    if (i2 = e14.segments[r2], i2.end !== void 0) return { result: n2 + i2.end, precise: true };
    if (n2 += Qc(e14, i2), i2.start !== void 0) return { result: n2 + i2.start, precise: true };
  }
  return { result: n2, precise: false };
}, il = function(e14, t2) {
  let n2 = 0, r2, i2 = t2 - e14.mediaSequence;
  for (; i2 < e14.segments.length; i2++) {
    if (r2 = e14.segments[i2], r2.start !== void 0) return { result: r2.start - n2, precise: true };
    if (n2 += Qc(e14, r2), r2.end !== void 0) return { result: r2.end - n2, precise: true };
  }
  return { result: -1, precise: false };
}, al = function(e14, t2, n2) {
  if (t2 === void 0 && (t2 = e14.mediaSequence + e14.segments.length), t2 < e14.mediaSequence) return 0;
  let r2 = rl(e14, t2);
  if (r2.precise) return r2.result;
  let i2 = il(e14, t2);
  return i2.precise ? i2.result : r2.result + n2;
}, ol = function(e14, t2, n2) {
  if (!e14) return 0;
  if (typeof n2 != `number` && (n2 = 0), t2 === void 0) {
    if (e14.totalDuration) return e14.totalDuration;
    if (!e14.endList) return h.default.Infinity;
  }
  return al(e14, t2, n2);
}, sl = function({ defaultDuration: e14, durationList: t2, startIndex: n2, endIndex: r2 }) {
  let i2 = 0;
  if (n2 > r2 && ([n2, r2] = [r2, n2]), n2 < 0) {
    for (let t3 = n2; t3 < Math.min(0, r2); t3++) i2 += e14;
    n2 = 0;
  }
  for (let e15 = n2; e15 < r2; e15++) i2 += t2[e15].duration;
  return i2;
}, cl = function(e14, t2, n2, r2) {
  if (!e14 || !e14.segments) return null;
  if (e14.endList) return ol(e14);
  if (t2 === null) return null;
  t2 ||= 0;
  let i2 = al(e14, e14.mediaSequence + e14.segments.length, t2);
  return n2 && (r2 = typeof r2 == `number` ? r2 : nl(null, e14), i2 -= r2), Math.max(0, i2);
}, ll = function(e14, t2, n2) {
  let r2 = t2 || 0, i2 = cl(e14, t2, true, n2);
  return i2 === null ? Lc() : (i2 < r2 && (i2 = r2), Lc(r2, i2));
}, ul = function({ playlist: e14, currentTime: t2, startingSegmentIndex: n2, startingPartIndex: r2, startTime: i2, exactManifestTimings: a2 }) {
  let o2 = t2 - i2, s2 = $c(e14), c2 = 0;
  for (let e15 = 0; e15 < s2.length; e15++) {
    let t3 = s2[e15];
    if (n2 === t3.segmentIndex && !(typeof r2 == `number` && typeof t3.partIndex == `number` && r2 !== t3.partIndex)) {
      c2 = e15;
      break;
    }
  }
  if (o2 < 0) {
    if (c2 > 0) for (let t3 = c2 - 1; t3 >= 0; t3--) {
      let n3 = s2[t3];
      if (o2 += n3.duration, a2) {
        if (o2 < 0) continue;
      } else if (o2 + zc <= 0) continue;
      return { partIndex: n3.partIndex, segmentIndex: n3.segmentIndex, startTime: i2 - sl({ defaultDuration: e14.targetDuration, durationList: s2, startIndex: c2, endIndex: t3 }) };
    }
    return { partIndex: s2[0] && s2[0].partIndex || null, segmentIndex: s2[0] && s2[0].segmentIndex || 0, startTime: t2 };
  }
  if (c2 < 0) {
    for (let n3 = c2; n3 < 0; n3++) if (o2 -= e14.targetDuration, o2 < 0) return { partIndex: s2[0] && s2[0].partIndex || null, segmentIndex: s2[0] && s2[0].segmentIndex || 0, startTime: t2 };
    c2 = 0;
  }
  for (let t3 = c2; t3 < s2.length; t3++) {
    let n3 = s2[t3];
    o2 -= n3.duration;
    let r3 = n3.duration > zc, l2 = o2 === 0, u2 = r3 && o2 + zc >= 0;
    if (!((l2 || u2) && t3 !== s2.length - 1)) {
      if (a2) {
        if (o2 > 0) continue;
      } else if (o2 - zc >= 0) continue;
      return { partIndex: n3.partIndex, segmentIndex: n3.segmentIndex, startTime: i2 + sl({ defaultDuration: e14.targetDuration, durationList: s2, startIndex: c2, endIndex: t3 }) };
    }
  }
  return { segmentIndex: s2[s2.length - 1].segmentIndex, partIndex: s2[s2.length - 1].partIndex, startTime: t2 };
}, dl = function(e14) {
  return e14.excludeUntil && e14.excludeUntil > Date.now();
}, fl = function(e14) {
  return e14.excludeUntil && e14.excludeUntil === 1 / 0;
}, pl = function(e14) {
  let t2 = dl(e14);
  return !e14.disabled && !t2;
}, ml = function(e14) {
  return e14.disabled;
}, hl = function(e14) {
  for (let t2 = 0; t2 < e14.segments.length; t2++) if (e14.segments[t2].key) return true;
  return false;
}, gl = function(e14, t2) {
  return t2.attributes && t2.attributes[e14];
}, _l = function(e14, t2, n2, r2 = 0) {
  return gl(`BANDWIDTH`, n2) ? (e14 * n2.attributes.BANDWIDTH - r2 * 8) / t2 : NaN;
}, vl = (e14, t2) => {
  if (e14.playlists.length === 1) return true;
  let n2 = t2.attributes.BANDWIDTH || Number.MAX_VALUE;
  return e14.playlists.filter((e15) => pl(e15) ? (e15.attributes.BANDWIDTH || 0) < n2 : false).length === 0;
}, yl = (e14, t2) => !e14 && !t2 || !e14 && t2 || e14 && !t2 ? false : !!(e14 === t2 || e14.id && t2.id && e14.id === t2.id || e14.resolvedUri && t2.resolvedUri && e14.resolvedUri === t2.resolvedUri || e14.uri && t2.uri && e14.uri === t2.uri), bl = function(e14, t2) {
  let n2 = e14 && e14.mediaGroups && e14.mediaGroups.AUDIO || {}, r2 = false;
  for (let e15 in n2) {
    for (let i2 in n2[e15]) if (r2 = t2(n2[e15][i2]), r2) break;
    if (r2) break;
  }
  return !!r2;
}, xl = (e14) => {
  if (!e14 || !e14.playlists || !e14.playlists.length) return bl(e14, (e15) => e15.playlists && e15.playlists.length || e15.uri);
  for (let t2 = 0; t2 < e14.playlists.length; t2++) {
    let n2 = e14.playlists[t2], r2 = n2.attributes && n2.attributes.CODECS;
    if (!(r2 && r2.split(`,`).every((e15) => pe(e15))) && !bl(e14, (e15) => yl(n2, e15))) return false;
  }
  return true;
}, Sl = { liveEdgeDelay: nl, duration: ol, seekable: ll, getMediaInfoForTime: ul, isEnabled: pl, isDisabled: ml, isExcluded: dl, isIncompatible: fl, playlistEnd: cl, isAes: hl, hasAttribute: gl, estimateSegmentRequestTime: _l, isLowestEnabledRendition: vl, isAudioOnly: xl, playlistMatch: yl, segmentDurationWithParts: Qc }, { log: Cl } = Z, wl = (e14, t2) => `${e14}-${t2}`, Tl = (e14, t2, n2) => `placeholder-uri-${e14}-${t2}-${n2}`, El = ({ onwarn: e14, oninfo: t2, manifestString: n2, customTagParsers: r2 = [], customTagMappers: i2 = [], llhls: a2 }) => {
  let o2 = new se();
  e14 && o2.on(`warn`, e14), t2 && o2.on(`info`, t2), r2.forEach((e15) => o2.addParser(e15)), i2.forEach((e15) => o2.addTagMapper(e15)), o2.push(n2), o2.end();
  let s2 = o2.manifest;
  if (a2 || ([`preloadSegment`, `skip`, `serverControl`, `renditionReports`, `partInf`, `partTargetDuration`].forEach(function(e15) {
    s2.hasOwnProperty(e15) && delete s2[e15];
  }), s2.segments && s2.segments.forEach(function(e15) {
    [`parts`, `preloadHints`].forEach(function(t3) {
      e15.hasOwnProperty(t3) && delete e15[t3];
    });
  })), !s2.targetDuration) {
    let t3 = 10;
    s2.segments && s2.segments.length && (t3 = s2.segments.reduce((e15, t4) => Math.max(e15, t4.duration), 0)), e14 && e14({ message: `manifest has no targetDuration defaulting to ${t3}` }), s2.targetDuration = t3;
  }
  let c2 = el(s2);
  if (c2.length && !s2.partTargetDuration) {
    let t3 = c2.reduce((e15, t4) => Math.max(e15, t4.duration), 0);
    e14 && (e14({ message: `manifest has no partTargetDuration defaulting to ${t3}` }), Cl.error(`LL-HLS manifest has parts but lacks required #EXT-X-PART-INF:PART-TARGET value. See https://datatracker.ietf.org/doc/html/draft-pantos-hls-rfc8216bis-09#section-4.4.3.7. Playback is not guaranteed.`)), s2.partTargetDuration = t3;
  }
  return s2;
}, Dl = (e14, t2) => {
  e14.mediaGroups && [`AUDIO`, `SUBTITLES`].forEach((n2) => {
    if (e14.mediaGroups[n2]) for (let r2 in e14.mediaGroups[n2]) for (let i2 in e14.mediaGroups[n2][r2]) {
      let a2 = e14.mediaGroups[n2][r2][i2];
      t2(a2, n2, r2, i2);
    }
  });
}, Ol = ({ playlist: e14, uri: t2, id: n2 }) => {
  e14.id = n2, e14.playlistErrors_ = 0, t2 && (e14.uri = t2), e14.attributes = e14.attributes || {};
}, kl = (e14) => {
  let t2 = e14.playlists.length;
  for (; t2--; ) {
    let n2 = e14.playlists[t2];
    Ol({ playlist: n2, id: wl(t2, n2.uri) }), n2.resolvedUri = Pc(e14.uri, n2.uri), e14.playlists[n2.id] = n2, e14.playlists[n2.uri] = n2, n2.attributes.BANDWIDTH || Cl.warn(`Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute.`);
  }
}, Al = (e14) => {
  Dl(e14, (t2) => {
    t2.uri && (t2.resolvedUri = Pc(e14.uri, t2.uri));
  });
}, jl = (e14, t2) => {
  let n2 = wl(0, t2), r2 = { mediaGroups: { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} }, uri: h.default.location.href, resolvedUri: h.default.location.href, playlists: [{ uri: t2, id: n2, resolvedUri: t2, attributes: {} }] };
  return r2.playlists[n2] = r2.playlists[0], r2.playlists[t2] = r2.playlists[0], r2;
}, Ml = (e14, t2, n2 = Tl) => {
  e14.uri = t2;
  for (let t3 = 0; t3 < e14.playlists.length; t3++) if (!e14.playlists[t3].uri) {
    let n3 = `placeholder-uri-${t3}`;
    e14.playlists[t3].uri = n3;
  }
  let r2 = xl(e14);
  Dl(e14, (t3, i2, a2, o2) => {
    if (!t3.playlists || !t3.playlists.length) {
      if (r2 && i2 === `AUDIO` && !t3.uri) for (let t4 = 0; t4 < e14.playlists.length; t4++) {
        let n3 = e14.playlists[t4];
        if (n3.attributes && n3.attributes.AUDIO && n3.attributes.AUDIO === a2) return;
      }
      t3.playlists = [x({}, t3)];
    }
    t3.playlists.forEach(function(t4, r3) {
      let s2 = n2(i2, a2, o2, t4), c2 = wl(r3, s2);
      t4.uri ? t4.resolvedUri = t4.resolvedUri || Pc(e14.uri, t4.uri) : (t4.uri = r3 === 0 ? s2 : c2, t4.resolvedUri = t4.uri), t4.id = t4.id || c2, t4.attributes = t4.attributes || {}, e14.playlists[t4.id] = t4, e14.playlists[t4.uri] = t4;
    });
  }), kl(e14), Al(e14);
}, Nl = class {
  constructor() {
    this.offset_ = null, this.pendingDateRanges_ = /* @__PURE__ */ new Map(), this.processedDateRanges_ = /* @__PURE__ */ new Map();
  }
  setOffset(e14 = []) {
    if (this.offset_ !== null || !e14.length) return;
    let [t2] = e14;
    t2.programDateTime !== void 0 && (this.offset_ = t2.programDateTime / 1e3);
  }
  setPendingDateRanges(e14 = []) {
    if (!e14.length) return;
    let [t2] = e14, n2 = t2.startDate.getTime();
    this.trimProcessedDateRanges_(n2), this.pendingDateRanges_ = e14.reduce((e15, t3) => (e15.set(t3.id, t3), e15), /* @__PURE__ */ new Map());
  }
  processDateRange(e14) {
    this.pendingDateRanges_.delete(e14.id), this.processedDateRanges_.set(e14.id, e14);
  }
  getDateRangesToProcess() {
    if (this.offset_ === null) return [];
    let e14 = {}, t2 = [];
    this.pendingDateRanges_.forEach((n2, r2) => {
      this.processedDateRanges_.has(r2) || (n2.startTime = n2.startDate.getTime() / 1e3 - this.offset_, n2.processDateRange = () => this.processDateRange(n2), t2.push(n2), n2.class && (e14[n2.class] ? n2.classListIndex = e14[n2.class].push(n2) - 1 : (e14[n2.class] = [n2], n2.classListIndex = 0)));
    });
    for (let n2 of t2) {
      let t3 = e14[n2.class] || [];
      n2.endDate ? n2.endTime = n2.endDate.getTime() / 1e3 - this.offset_ : n2.endOnNext && t3[n2.classListIndex + 1] ? n2.endTime = t3[n2.classListIndex + 1].startTime : n2.duration ? n2.endTime = n2.startTime + n2.duration : n2.plannedDuration ? n2.endTime = n2.startTime + n2.plannedDuration : n2.endTime = n2.startTime;
    }
    return t2;
  }
  trimProcessedDateRanges_(e14) {
    new Map(this.processedDateRanges_).forEach((t2, n2) => {
      t2.startDate.getTime() < e14 && this.processedDateRanges_.delete(n2);
    });
  }
}, { EventTarget: Pl } = Z, Fl = (e14, t2) => {
  if (t2.endList || !t2.serverControl) return e14;
  let n2 = {};
  if (t2.serverControl.canBlockReload) {
    let { preloadSegment: e15 } = t2, r2 = t2.mediaSequence + t2.segments.length;
    if (e15) {
      let i2 = e15.parts || [], a2 = tl(t2) - 1;
      a2 > -1 && a2 !== i2.length - 1 && (n2._HLS_part = a2), (a2 > -1 || i2.length) && r2--;
    }
    n2._HLS_msn = r2;
  }
  if (t2.serverControl && t2.serverControl.canSkipUntil && (n2._HLS_skip = t2.serverControl.canSkipDateranges ? `v2` : `YES`), Object.keys(n2).length) {
    let t3 = new h.default.URL(e14);
    [`_HLS_skip`, `_HLS_msn`, `_HLS_part`].forEach(function(e15) {
      n2.hasOwnProperty(e15) && t3.searchParams.set(e15, n2[e15]);
    }), e14 = t3.toString();
  }
  return e14;
}, Il = (e14, t2) => {
  if (!e14) return t2;
  let n2 = Q(e14, t2);
  if (e14.preloadHints && !t2.preloadHints && delete n2.preloadHints, e14.parts && !t2.parts) delete n2.parts;
  else if (e14.parts && t2.parts) for (let r2 = 0; r2 < t2.parts.length; r2++) e14.parts && e14.parts[r2] && (n2.parts[r2] = Q(e14.parts[r2], t2.parts[r2]));
  return !e14.skipped && t2.skipped && (n2.skipped = false), e14.preload && !t2.preload && (n2.preload = false), n2;
}, Ll = (e14, t2, n2) => {
  let r2 = e14.slice(), i2 = t2.slice();
  n2 ||= 0;
  let a2 = [], o2;
  for (let e15 = 0; e15 < i2.length; e15++) {
    let t3 = r2[e15 + n2], s2 = i2[e15];
    t3 ? (o2 = t3.map || o2, a2.push(Il(t3, s2))) : (o2 && !s2.map && (s2.map = o2), a2.push(s2));
  }
  return a2;
}, Rl = (e14, t2) => {
  !e14.resolvedUri && e14.uri && (e14.resolvedUri = Pc(t2, e14.uri)), e14.key && !e14.key.resolvedUri && (e14.key.resolvedUri = Pc(t2, e14.key.uri)), e14.map && !e14.map.resolvedUri && (e14.map.resolvedUri = Pc(t2, e14.map.uri)), e14.map && e14.map.key && !e14.map.key.resolvedUri && (e14.map.key.resolvedUri = Pc(t2, e14.map.key.uri)), e14.parts && e14.parts.length && e14.parts.forEach((e15) => {
    e15.resolvedUri ||= Pc(t2, e15.uri);
  }), e14.preloadHints && e14.preloadHints.length && e14.preloadHints.forEach((e15) => {
    e15.resolvedUri ||= Pc(t2, e15.uri);
  });
}, zl = function(e14) {
  let t2 = e14.segments || [], n2 = e14.preloadSegment;
  if (n2 && n2.parts && n2.parts.length) {
    if (n2.preloadHints) {
      for (let e15 = 0; e15 < n2.preloadHints.length; e15++) if (n2.preloadHints[e15].type === `MAP`) return t2;
    }
    n2.duration = e14.targetDuration, n2.preload = true, t2.push(n2);
  }
  return t2;
}, Bl = (e14, t2) => e14 === t2 || e14.segments && t2.segments && e14.segments.length === t2.segments.length && e14.endList === t2.endList && e14.mediaSequence === t2.mediaSequence && e14.preloadSegment === t2.preloadSegment, Vl = (e14, t2, n2 = Bl) => {
  let r2 = Q(e14, {}), i2 = r2.playlists[t2.id];
  if (!i2 || n2(i2, t2)) return null;
  t2.segments = zl(t2);
  let a2 = Q(i2, t2);
  if (a2.preloadSegment && !t2.preloadSegment && delete a2.preloadSegment, i2.segments) {
    if (t2.skip) {
      t2.segments = t2.segments || [];
      for (let e15 = 0; e15 < t2.skip.skippedSegments; e15++) t2.segments.unshift({ skipped: true });
    }
    a2.segments = Ll(i2.segments, t2.segments, t2.mediaSequence - i2.mediaSequence);
  }
  a2.segments.forEach((e15) => {
    Rl(e15, a2.resolvedUri);
  });
  for (let e15 = 0; e15 < r2.playlists.length; e15++) r2.playlists[e15].id === t2.id && (r2.playlists[e15] = a2);
  return r2.playlists[t2.id] = a2, r2.playlists[t2.uri] = a2, Dl(e14, (e15, n3, r3, i3) => {
    if (e15.playlists) for (let n4 = 0; n4 < e15.playlists.length; n4++) t2.id === e15.playlists[n4].id && (e15.playlists[n4] = a2);
  }), r2;
}, Hl = (e14, t2) => {
  let n2 = e14.segments || [], r2 = n2[n2.length - 1], i2 = r2 && r2.parts && r2.parts[r2.parts.length - 1], a2 = i2 && i2.duration || r2 && r2.duration;
  return t2 && a2 ? a2 * 1e3 : (e14.partTargetDuration || e14.targetDuration || 10) * 500;
}, Ul = class extends Pl {
  constructor(e14, t2, n2 = {}) {
    if (super(), !e14) throw Error(`A non-empty playlist URL or object is required`);
    this.logger_ = Ic(`PlaylistLoader`);
    let { withCredentials: r2 = false } = n2;
    this.src = e14, this.vhs_ = t2, this.withCredentials = r2, this.addDateRangesToTextTrack_ = n2.addDateRangesToTextTrack;
    let i2 = t2.options_;
    this.customTagParsers = i2 && i2.customTagParsers || [], this.customTagMappers = i2 && i2.customTagMappers || [], this.llhls = i2 && i2.llhls, this.dateRangesStorage_ = new Nl(), this.state = `HAVE_NOTHING`, this.handleMediaupdatetimeout_ = this.handleMediaupdatetimeout_.bind(this), this.on(`mediaupdatetimeout`, this.handleMediaupdatetimeout_), this.on(`loadedplaylist`, this.handleLoadedPlaylist_.bind(this));
  }
  handleLoadedPlaylist_() {
    let e14 = this.media();
    if (!e14) return;
    this.dateRangesStorage_.setOffset(e14.segments), this.dateRangesStorage_.setPendingDateRanges(e14.dateRanges);
    let t2 = this.dateRangesStorage_.getDateRangesToProcess();
    !t2.length || !this.addDateRangesToTextTrack_ || this.addDateRangesToTextTrack_(t2);
  }
  handleMediaupdatetimeout_() {
    if (this.state !== `HAVE_METADATA`) return;
    let e14 = this.media(), t2 = Pc(this.main.uri, e14.uri);
    this.llhls && (t2 = Fl(t2, e14)), this.state = `HAVE_CURRENT_METADATA`, this.request = this.vhs_.xhr({ uri: t2, withCredentials: this.withCredentials, requestType: `hls-playlist` }, (e15, t3) => {
      if (this.request) {
        if (e15) return this.playlistRequestError(this.request, this.media(), `HAVE_METADATA`);
        this.haveMetadata({ playlistString: this.request.responseText, url: this.media().uri, id: this.media().id });
      }
    });
  }
  playlistRequestError(e14, t2, n2) {
    let { uri: r2, id: i2 } = t2;
    this.request = null, n2 && (this.state = n2), this.error = { playlist: this.main.playlists[i2], status: e14.status, message: `HLS playlist request error at URL: ${r2}.`, responseText: e14.responseText, code: e14.status >= 500 ? 4 : 2, metadata: { errorType: Z.Error.HlsPlaylistRequestError } }, this.trigger(`error`);
  }
  parseManifest_({ url: e14, manifestString: t2 }) {
    return El({ onwarn: ({ message: t3 }) => this.logger_(`m3u8-parser warn for ${e14}: ${t3}`), oninfo: ({ message: t3 }) => this.logger_(`m3u8-parser info for ${e14}: ${t3}`), manifestString: t2, customTagParsers: this.customTagParsers, customTagMappers: this.customTagMappers, llhls: this.llhls });
  }
  haveMetadata({ playlistString: e14, playlistObject: t2, url: n2, id: r2 }) {
    this.request = null, this.state = `HAVE_METADATA`;
    let i2 = t2 || this.parseManifest_({ url: n2, manifestString: e14 });
    i2.lastRequest = Date.now(), Ol({ playlist: i2, uri: n2, id: r2 });
    let a2 = Vl(this.main, i2);
    this.targetDuration = i2.partTargetDuration || i2.targetDuration, this.pendingMedia_ = null, a2 ? (this.main = a2, this.media_ = this.main.playlists[r2]) : this.trigger(`playlistunchanged`), this.updateMediaUpdateTimeout_(Hl(this.media(), !!a2)), this.trigger(`loadedplaylist`);
  }
  dispose() {
    this.trigger(`dispose`), this.stopRequest(), h.default.clearTimeout(this.mediaUpdateTimeout), h.default.clearTimeout(this.finalRenditionTimeout), this.dateRangesStorage_ = new Nl(), this.off();
  }
  stopRequest() {
    if (this.request) {
      let e14 = this.request;
      this.request = null, e14.onreadystatechange = null, e14.abort();
    }
  }
  media(e14, t2) {
    if (!e14) return this.media_;
    if (this.state === `HAVE_NOTHING`) throw Error(`Cannot switch media playlist from ` + this.state);
    if (typeof e14 == `string`) {
      if (!this.main.playlists[e14]) throw Error(`Unknown playlist URI: ` + e14);
      e14 = this.main.playlists[e14];
    }
    if (h.default.clearTimeout(this.finalRenditionTimeout), t2) {
      let t3 = (e14.partTargetDuration || e14.targetDuration) / 2 * 1e3 || 5 * 1e3;
      this.finalRenditionTimeout = h.default.setTimeout(this.media.bind(this, e14, false), t3);
      return;
    }
    let n2 = this.state, r2 = !this.media_ || e14.id !== this.media_.id, i2 = this.main.playlists[e14.id];
    if (i2 && i2.endList || e14.endList && e14.segments.length) {
      this.request &&= (this.request.onreadystatechange = null, this.request.abort(), null), this.state = `HAVE_METADATA`, this.media_ = e14, r2 && (this.trigger(`mediachanging`), n2 === `HAVE_MAIN_MANIFEST` ? this.trigger(`loadedmetadata`) : this.trigger(`mediachange`));
      return;
    }
    if (this.updateMediaUpdateTimeout_(Hl(e14, true)), r2) {
      if (this.state = `SWITCHING_MEDIA`, this.request) {
        if (e14.resolvedUri === this.request.url) return;
        this.request.onreadystatechange = null, this.request.abort(), this.request = null;
      }
      this.media_ && this.trigger(`mediachanging`), this.pendingMedia_ = e14, this.request = this.vhs_.xhr({ uri: e14.resolvedUri, withCredentials: this.withCredentials, requestType: `hls-playlist` }, (t3, r3) => {
        if (this.request) {
          if (e14.lastRequest = Date.now(), e14.resolvedUri = Fc(e14.resolvedUri, r3), t3) return this.playlistRequestError(this.request, e14, n2);
          this.haveMetadata({ playlistString: r3.responseText, url: e14.uri, id: e14.id }), n2 === `HAVE_MAIN_MANIFEST` ? this.trigger(`loadedmetadata`) : this.trigger(`mediachange`);
        }
      });
    }
  }
  pause() {
    this.mediaUpdateTimeout &&= (h.default.clearTimeout(this.mediaUpdateTimeout), null), this.stopRequest(), this.state === `HAVE_NOTHING` && (this.started = false), this.state === `SWITCHING_MEDIA` ? this.media_ ? this.state = `HAVE_METADATA` : this.state = `HAVE_MAIN_MANIFEST` : this.state === `HAVE_CURRENT_METADATA` && (this.state = `HAVE_METADATA`);
  }
  load(e14) {
    this.mediaUpdateTimeout &&= (h.default.clearTimeout(this.mediaUpdateTimeout), null);
    let t2 = this.media();
    if (e14) {
      let e15 = t2 ? (t2.partTargetDuration || t2.targetDuration) / 2 * 1e3 : 5 * 1e3;
      this.mediaUpdateTimeout = h.default.setTimeout(() => {
        this.mediaUpdateTimeout = null, this.load();
      }, e15);
      return;
    }
    if (!this.started) {
      this.start();
      return;
    }
    t2 && !t2.endList ? this.trigger(`mediaupdatetimeout`) : this.trigger(`loadedplaylist`);
  }
  updateMediaUpdateTimeout_(e14) {
    this.mediaUpdateTimeout &&= (h.default.clearTimeout(this.mediaUpdateTimeout), null), !(!this.media() || this.media().endList) && (this.mediaUpdateTimeout = h.default.setTimeout(() => {
      this.mediaUpdateTimeout = null, this.trigger(`mediaupdatetimeout`), this.updateMediaUpdateTimeout_(e14);
    }, e14));
  }
  start() {
    if (this.started = true, typeof this.src == `object`) {
      this.src.uri || (this.src.uri = h.default.location.href), this.src.resolvedUri = this.src.uri, setTimeout(() => {
        this.setupInitialPlaylist(this.src);
      }, 0);
      return;
    }
    this.request = this.vhs_.xhr({ uri: this.src, withCredentials: this.withCredentials, requestType: `hls-playlist` }, (e14, t2) => {
      if (!this.request) return;
      if (this.request = null, e14) return this.error = { status: t2.status, message: `HLS playlist request error at URL: ${this.src}.`, responseText: t2.responseText, code: 2, metadata: { errorType: Z.Error.HlsPlaylistRequestError } }, this.state === `HAVE_NOTHING` && (this.started = false), this.trigger(`error`);
      this.src = Fc(this.src, t2);
      let n2 = this.parseManifest_({ manifestString: t2.responseText, url: this.src });
      this.setupInitialPlaylist(n2);
    });
  }
  srcUri() {
    return typeof this.src == `string` ? this.src : this.src.uri;
  }
  setupInitialPlaylist(e14) {
    if (this.state = `HAVE_MAIN_MANIFEST`, e14.playlists) {
      this.main = e14, Ml(this.main, this.srcUri()), e14.playlists.forEach((e15) => {
        e15.segments = zl(e15), e15.segments.forEach((t3) => {
          Rl(t3, e15.resolvedUri);
        });
      }), this.trigger(`loadedplaylist`), this.request || this.media(this.main.playlists[0]);
      return;
    }
    let t2 = this.srcUri() || h.default.location.href;
    this.main = jl(e14, t2), this.haveMetadata({ playlistObject: e14, url: t2, id: this.main.playlists[0].id }), this.trigger(`loadedmetadata`);
  }
  updateOrDeleteClone(e14, t2) {
    let n2 = this.main, r2 = e14.ID, i2 = n2.playlists.length;
    for (; i2--; ) {
      let a2 = n2.playlists[i2];
      if (a2.attributes[`PATHWAY-ID`] === r2) {
        let o2 = a2.resolvedUri, s2 = a2.id;
        if (t2) {
          let t3 = this.createCloneURI_(a2.resolvedUri, e14), o3 = wl(r2, t3), s3 = this.createCloneAttributes_(r2, a2.attributes), c2 = this.createClonePlaylist_(a2, o3, e14, s3);
          n2.playlists[i2] = c2, n2.playlists[o3] = c2, n2.playlists[t3] = c2;
        } else n2.playlists.splice(i2, 1);
        delete n2.playlists[s2], delete n2.playlists[o2];
      }
    }
    this.updateOrDeleteCloneMedia(e14, t2);
  }
  updateOrDeleteCloneMedia(e14, t2) {
    let n2 = this.main, r2 = e14.ID;
    [`AUDIO`, `SUBTITLES`, `CLOSED-CAPTIONS`].forEach((e15) => {
      if (!(!n2.mediaGroups[e15] || !n2.mediaGroups[e15][r2])) {
        for (let t3 in n2.mediaGroups[e15]) if (t3 === r2) {
          for (let r3 in n2.mediaGroups[e15][t3]) n2.mediaGroups[e15][t3][r3].playlists.forEach((e16, t4) => {
            let r4 = n2.playlists[e16.id], i2 = r4.id, a2 = r4.resolvedUri;
            delete n2.playlists[i2], delete n2.playlists[a2];
          });
          delete n2.mediaGroups[e15][t3];
        }
      }
    }), t2 && this.createClonedMediaGroups_(e14);
  }
  addClonePathway(e14, t2 = {}) {
    let n2 = this.main, r2 = n2.playlists.length, i2 = this.createCloneURI_(t2.resolvedUri, e14), a2 = wl(e14.ID, i2), o2 = this.createCloneAttributes_(e14.ID, t2.attributes), s2 = this.createClonePlaylist_(t2, a2, e14, o2);
    n2.playlists[r2] = s2, n2.playlists[a2] = s2, n2.playlists[i2] = s2, this.createClonedMediaGroups_(e14);
  }
  createClonedMediaGroups_(e14) {
    let t2 = e14.ID, n2 = e14[`BASE-ID`], r2 = this.main;
    [`AUDIO`, `SUBTITLES`, `CLOSED-CAPTIONS`].forEach((i2) => {
      if (!(!r2.mediaGroups[i2] || r2.mediaGroups[i2][t2])) for (let a2 in r2.mediaGroups[i2]) {
        if (a2 === n2) r2.mediaGroups[i2][t2] = {};
        else continue;
        for (let n3 in r2.mediaGroups[i2][a2]) {
          let o2 = r2.mediaGroups[i2][a2][n3];
          r2.mediaGroups[i2][t2][n3] = x({}, o2);
          let s2 = r2.mediaGroups[i2][t2][n3], c2 = this.createCloneURI_(o2.resolvedUri, e14);
          s2.resolvedUri = c2, s2.uri = c2, s2.playlists = [], o2.playlists.forEach((a3, o3) => {
            let c3 = r2.playlists[a3.id], l2 = Tl(i2, t2, n3), u2 = wl(t2, l2);
            if (c3 && !r2.playlists[u2]) {
              let t3 = this.createClonePlaylist_(c3, u2, e14), n4 = t3.resolvedUri;
              r2.playlists[u2] = t3, r2.playlists[n4] = t3;
            }
            s2.playlists[o3] = this.createClonePlaylist_(a3, u2, e14);
          });
        }
      }
    });
  }
  createClonePlaylist_(e14, t2, n2, r2) {
    let i2 = this.createCloneURI_(e14.resolvedUri, n2), a2 = { resolvedUri: i2, uri: i2, id: t2 };
    return e14.segments && (a2.segments = []), r2 && (a2.attributes = r2), Q(e14, a2);
  }
  createCloneURI_(e14, t2) {
    let n2 = new URL(e14);
    n2.hostname = t2[`URI-REPLACEMENT`].HOST;
    let r2 = t2[`URI-REPLACEMENT`].PARAMS;
    for (let e15 of Object.keys(r2)) n2.searchParams.set(e15, r2[e15]);
    return n2.href;
  }
  createCloneAttributes_(e14, t2) {
    let n2 = { "PATHWAY-ID": e14 };
    return [`AUDIO`, `SUBTITLES`, `CLOSED-CAPTIONS`].forEach((r2) => {
      t2[r2] && (n2[r2] = e14);
    }), n2;
  }
  getKeyIdSet(e14) {
    if (e14.contentProtection) {
      let t2 = /* @__PURE__ */ new Set();
      for (let n2 in e14.contentProtection) {
        let r2 = e14.contentProtection[n2].attributes.keyId;
        r2 && t2.add(r2.toLowerCase());
      }
      return t2;
    }
  }
}, Wl = function(e14, t2, n2, r2) {
  let i2 = e14.responseType === `arraybuffer` ? e14.response : e14.responseText;
  !t2 && i2 && (e14.responseTime = Date.now(), e14.roundTripTime = e14.responseTime - e14.requestTime, e14.bytesReceived = i2.byteLength || i2.length, e14.bandwidth ||= Math.floor(e14.bytesReceived / e14.roundTripTime * 8 * 1e3)), n2.headers && (e14.responseHeaders = n2.headers), t2 && t2.code === `ETIMEDOUT` && (e14.timedout = true), !t2 && !e14.aborted && n2.statusCode !== 200 && n2.statusCode !== 206 && n2.statusCode !== 0 && (t2 = Error(`XHR Failed with a response of: ` + (e14 && (i2 || e14.responseText)))), r2(t2, e14);
}, Gl = (e14, t2) => {
  if (!e14 || !e14.size) return;
  let n2 = t2;
  return e14.forEach((e15) => {
    n2 = e15(n2);
  }), n2;
}, Kl = (e14, t2, n2, r2) => {
  !e14 || !e14.size || e14.forEach((e15) => {
    e15(t2, n2, r2);
  });
}, ql = function() {
  let e14 = function e15(t2, n2) {
    t2 = Q({ timeout: 45e3 }, t2);
    let r2 = e15.beforeRequest || Z.Vhs.xhr.beforeRequest, i2 = e15._requestCallbackSet || Z.Vhs.xhr._requestCallbackSet || /* @__PURE__ */ new Set(), a2 = e15._responseCallbackSet || Z.Vhs.xhr._responseCallbackSet;
    r2 && typeof r2 == `function` && (Z.log.warn(`beforeRequest is deprecated, use onRequest instead.`), i2.add(r2));
    let o2 = Z.Vhs.xhr.original === true ? Z.xhr : Z.Vhs.xhr, s2 = Gl(i2, t2);
    i2.delete(r2);
    let c2 = o2(s2 || t2, function(e16, t3) {
      return Kl(a2, c2, e16, t3), Wl(c2, e16, t3, n2);
    }), l2 = c2.abort;
    return c2.abort = function() {
      return c2.aborted = true, l2.apply(c2, arguments);
    }, c2.uri = t2.uri, c2.requestTime = Date.now(), c2;
  };
  return e14.original = true, e14;
}, Jl = function(e14) {
  let t2, n2 = e14.offset;
  return t2 = typeof e14.offset == `bigint` || typeof e14.length == `bigint` ? h.default.BigInt(e14.offset) + h.default.BigInt(e14.length) - h.default.BigInt(1) : e14.offset + e14.length - 1, `bytes=` + n2 + `-` + t2;
}, Yl = function(e14) {
  let t2 = {};
  return e14.byterange && (t2.Range = Jl(e14.byterange)), t2;
}, Xl = function(e14, t2) {
  return e14.start(t2) + `-` + e14.end(t2);
}, Zl = function(e14, t2) {
  let n2 = e14.toString(16);
  return `00`.substring(0, 2 - n2.length) + n2 + (t2 % 2 ? ` ` : ``);
}, Ql = function(e14) {
  return e14 >= 32 && e14 < 126 ? String.fromCharCode(e14) : `.`;
}, $l = function(e14) {
  let t2 = {};
  return Object.keys(e14).forEach((n2) => {
    let r2 = e14[n2];
    Se(r2) ? t2[n2] = { bytes: r2.buffer, byteOffset: r2.byteOffset, byteLength: r2.byteLength } : t2[n2] = r2;
  }), t2;
}, eu = function(e14) {
  let t2 = e14.byterange || { length: 1 / 0, offset: 0 };
  return [t2.length, t2.offset, e14.resolvedUri].join(`,`);
}, tu = function(e14) {
  return e14.resolvedUri;
}, nu = (e14) => {
  let t2 = Array.prototype.slice.call(e14), n2 = ``, r2, i2;
  for (let e15 = 0; e15 < t2.length / 16; e15++) r2 = t2.slice(e15 * 16, e15 * 16 + 16).map(Zl).join(``), i2 = t2.slice(e15 * 16, e15 * 16 + 16).map(Ql).join(``), n2 += r2 + ` ` + i2 + `
`;
  return n2;
}, ru = Object.freeze({ __proto__: null, createTransferableMessage: $l, initSegmentId: eu, segmentKeyId: tu, hexDump: nu, tagDump: ({ bytes: e14 }) => nu(e14), textRanges: (e14) => {
  let t2 = ``, n2;
  for (n2 = 0; n2 < e14.length; n2++) t2 += Xl(e14, n2) + ` `;
  return t2;
} }), iu = 0.25, au = (e14, t2) => {
  if (!t2.dateTimeObject) return null;
  let n2 = t2.videoTimingInfo.transmuxerPrependedSeconds, r2 = e14 - (t2.videoTimingInfo.transmuxedPresentationStart + n2);
  return new Date(t2.dateTimeObject.getTime() + r2 * 1e3);
}, ou = (e14) => e14.transmuxedPresentationEnd - e14.transmuxedPresentationStart - e14.transmuxerPrependedSeconds, su = (e14, t2) => {
  let n2;
  try {
    n2 = new Date(e14);
  } catch {
    return null;
  }
  if (!t2 || !t2.segments || t2.segments.length === 0) return null;
  let r2 = t2.segments[0];
  if (n2 < new Date(r2.dateTimeObject)) return null;
  for (let e15 = 0; e15 < t2.segments.length - 1; e15++) {
    r2 = t2.segments[e15];
    let i3 = new Date(t2.segments[e15 + 1].dateTimeObject);
    if (n2 < i3) break;
  }
  let i2 = t2.segments[t2.segments.length - 1], a2 = i2.dateTimeObject, o2 = i2.videoTimingInfo ? ou(i2.videoTimingInfo) : i2.duration + i2.duration * iu, s2 = new Date(a2.getTime() + o2 * 1e3);
  return n2 > s2 ? null : (n2 > new Date(a2) && (r2 = i2), { segment: r2, estimatedStart: r2.videoTimingInfo ? r2.videoTimingInfo.transmuxedPresentationStart : Sl.duration(t2, t2.mediaSequence + t2.segments.indexOf(r2)), type: r2.videoTimingInfo ? `accurate` : `estimate` });
}, cu = (e14, t2) => {
  if (!t2 || !t2.segments || t2.segments.length === 0) return null;
  let n2 = 0, r2;
  for (let i3 = 0; i3 < t2.segments.length && (r2 = t2.segments[i3], n2 = r2.videoTimingInfo ? r2.videoTimingInfo.transmuxedPresentationEnd : n2 + r2.duration, !(e14 <= n2)); i3++) ;
  let i2 = t2.segments[t2.segments.length - 1];
  if (i2.videoTimingInfo && i2.videoTimingInfo.transmuxedPresentationEnd < e14) return null;
  if (e14 > n2) {
    if (e14 > n2 + i2.duration * iu) return null;
    r2 = i2;
  }
  return { segment: r2, estimatedStart: r2.videoTimingInfo ? r2.videoTimingInfo.transmuxedPresentationStart : n2 - r2.duration, type: r2.videoTimingInfo ? `accurate` : `estimate` };
}, lu = (e14, t2) => {
  let n2, r2;
  try {
    n2 = new Date(e14), r2 = new Date(t2);
  } catch {
  }
  let i2 = n2.getTime();
  return (r2.getTime() - i2) / 1e3;
}, uu = (e14) => {
  if (!e14.segments || e14.segments.length === 0) return false;
  for (let t2 = 0; t2 < e14.segments.length; t2++) if (!e14.segments[t2].dateTimeObject) return false;
  return true;
}, du = ({ playlist: e14, time: t2 = void 0, callback: n2 }) => {
  if (!n2) throw Error(`getProgramTime: callback must be provided`);
  if (!e14 || t2 === void 0) return n2({ message: `getProgramTime: playlist and time must be provided` });
  let r2 = cu(t2, e14);
  if (!r2) return n2({ message: `valid programTime was not found` });
  if (r2.type === `estimate`) return n2({ message: `Accurate programTime could not be determined. Please seek to e.seekTime and try again`, seekTime: r2.estimatedStart });
  let i2 = { mediaSeconds: t2 }, a2 = au(t2, r2.segment);
  return a2 && (i2.programDateTime = a2.toISOString()), n2(null, i2);
}, fu = ({ programTime: e14, playlist: t2, retryCount: n2 = 2, seekTo: r2, pauseAfterSeek: i2 = true, tech: a2, callback: o2 }) => {
  if (!o2) throw Error(`seekToProgramTime: callback must be provided`);
  if (e14 === void 0 || !t2 || !r2) return o2({ message: `seekToProgramTime: programTime, seekTo and playlist must be provided` });
  if (!t2.endList && !a2.hasStarted_) return o2({ message: `player must be playing a live stream to start buffering` });
  if (!uu(t2)) return o2({ message: `programDateTime tags must be provided in the manifest ` + t2.resolvedUri });
  let s2 = su(e14, t2);
  if (!s2) return o2({ message: `${e14} was not found in the stream` });
  let c2 = s2.segment, l2 = lu(c2.dateTimeObject, e14);
  if (s2.type === `estimate`) {
    if (n2 === 0) return o2({ message: `${e14} is not buffered yet. Try again` });
    r2(s2.estimatedStart + l2), a2.one(`seeked`, () => {
      fu({ programTime: e14, playlist: t2, retryCount: n2 - 1, seekTo: r2, pauseAfterSeek: i2, tech: a2, callback: o2 });
    });
    return;
  }
  let u2 = c2.start + l2;
  a2.one(`seeked`, () => o2(null, a2.currentTime())), i2 && a2.pause(), r2(u2);
}, pu = (e14, t2) => {
  if (e14.readyState === 4) return t2();
}, mu = (e14, t2, n2) => {
  let r2 = [], i2, a2 = false, o2 = function(e15, t3, r3, i3) {
    return t3.abort(), a2 = true, n2(e15, t3, r3, i3);
  }, s2 = function(e15, t3) {
    if (a2) return;
    if (e15) return o2(e15, t3, ``, r2);
    let n3 = t3.responseText.substring(r2 && r2.byteLength || 0, t3.responseText.length);
    if (r2 = ke(r2, Oe(n3, true)), i2 ||= on(r2), r2.length < 10 || i2 && r2.length < i2 + 2) return pu(t3, () => o2(e15, t3, ``, r2));
    let s3 = jn(r2);
    return s3 === `ts` && r2.length < 188 || !s3 && r2.length < 376 ? pu(t3, () => o2(e15, t3, ``, r2)) : o2(null, t3, s3, r2);
  }, c2 = t2({ uri: e14, beforeSend(e15) {
    e15.overrideMimeType(`text/plain; charset=x-user-defined`), e15.addEventListener(`progress`, function({ total: t3, loaded: n3 }) {
      return Wl(e15, null, { statusCode: e15.status }, s2);
    });
  } }, function(e15, t3) {
    return Wl(c2, e15, t3, s2);
  });
  return c2;
}, { EventTarget: hu } = Z, gu = function(e14, t2) {
  if (!Bl(e14, t2) || e14.sidx && t2.sidx && (e14.sidx.offset !== t2.sidx.offset || e14.sidx.length !== t2.sidx.length) || !e14.sidx && t2.sidx || e14.sidx && !t2.sidx || e14.segments && !t2.segments || !e14.segments && t2.segments) return false;
  if (!e14.segments && !t2.segments) return true;
  for (let n2 = 0; n2 < e14.segments.length; n2++) {
    let r2 = e14.segments[n2], i2 = t2.segments[n2];
    if (r2.uri !== i2.uri) return false;
    if (!r2.byterange && !i2.byterange) continue;
    let a2 = r2.byterange, o2 = i2.byterange;
    if (a2 && !o2 || !a2 && o2 || a2.offset !== o2.offset || a2.length !== o2.length) return false;
  }
  return true;
}, _u = (e14, t2, n2, r2) => `placeholder-uri-${e14}-${t2}-${r2.attributes.NAME || n2}`, vu = ({ mainXml: e14, srcUrl: t2, clientOffset: n2, sidxMapping: r2, previousManifest: i2 }) => {
  let a2 = $t(e14, { manifestUri: t2, clientOffset: n2, sidxMapping: r2, previousManifest: i2 });
  return Ml(a2, t2, _u), a2;
}, yu = (e14, t2) => {
  Dl(e14, (n2, r2, i2, a2) => {
    a2 in t2.mediaGroups[r2][i2] || delete e14.mediaGroups[r2][i2][a2];
  });
}, bu = (e14, t2, n2) => {
  let r2 = true, i2 = Q(e14, { duration: t2.duration, minimumUpdatePeriod: t2.minimumUpdatePeriod, timelineStarts: t2.timelineStarts });
  for (let e15 = 0; e15 < t2.playlists.length; e15++) {
    let a2 = t2.playlists[e15];
    if (a2.sidx) {
      let e16 = at(a2.sidx);
      n2 && n2[e16] && n2[e16].sidx && Xe(a2, n2[e16].sidx, a2.sidx.resolvedUri);
    }
    let o2 = Vl(i2, a2, gu);
    o2 && (i2 = o2, r2 = false);
  }
  return Dl(t2, (e15, t3, n3, a2) => {
    if (e15.playlists && e15.playlists.length) {
      let o2 = e15.playlists[0].id, s2 = Vl(i2, e15.playlists[0], gu);
      s2 && (i2 = s2, a2 in i2.mediaGroups[t3][n3] || (i2.mediaGroups[t3][n3][a2] = e15), i2.mediaGroups[t3][n3][a2].playlists[0] = i2.playlists[o2], r2 = false);
    }
  }), yu(i2, t2), t2.minimumUpdatePeriod !== e14.minimumUpdatePeriod && (r2 = false), r2 ? null : i2;
}, xu = (e14, t2) => (!e14.map && !t2.map || !!(e14.map && t2.map && e14.map.byterange.offset === t2.map.byterange.offset && e14.map.byterange.length === t2.map.byterange.length)) && e14.uri === t2.uri && e14.byterange.offset === t2.byterange.offset && e14.byterange.length === t2.byterange.length, Su = (e14, t2) => {
  let n2 = {};
  for (let r2 in e14) {
    let i2 = e14[r2].sidx;
    if (i2) {
      let e15 = at(i2);
      if (!t2[e15]) break;
      let r3 = t2[e15].sidxInfo;
      xu(r3, i2) && (n2[e15] = t2[e15]);
    }
  }
  return n2;
}, Cu = (e14, t2) => {
  let n2 = Su(e14.playlists, t2);
  return Dl(e14, (e15, r2, i2, a2) => {
    if (e15.playlists && e15.playlists.length) {
      let r3 = e15.playlists;
      n2 = Q(n2, Su(r3, t2));
    }
  }), n2;
}, wu = class extends hu {
  constructor(e14, t2, n2 = {}, r2) {
    super(), this.mainPlaylistLoader_ = r2 || this, r2 || (this.isMain_ = true);
    let { withCredentials: i2 = false } = n2;
    if (this.vhs_ = t2, this.withCredentials = i2, this.addMetadataToTextTrack = n2.addMetadataToTextTrack, !e14) throw Error(`A non-empty playlist URL or object is required`);
    this.on(`minimumUpdatePeriod`, () => {
      this.refreshXml_();
    }), this.on(`mediaupdatetimeout`, () => {
      this.refreshMedia_(this.media().id);
    }), this.state = `HAVE_NOTHING`, this.loadedPlaylists_ = {}, this.logger_ = Ic(`DashPlaylistLoader`), this.isMain_ ? (this.mainPlaylistLoader_.srcUrl = e14, this.mainPlaylistLoader_.sidxMapping_ = {}) : this.childPlaylist_ = e14;
  }
  requestErrored_(e14, t2, n2) {
    if (!this.request) return true;
    if (this.request = null, e14) return this.error = typeof e14 == `object` && !(e14 instanceof Error) ? e14 : { status: t2.status, message: `DASH request error at URL: ` + t2.uri, response: t2.response, code: 2, metadata: e14.metadata }, n2 && (this.state = n2), this.trigger(`error`), true;
  }
  addSidxSegments_(e14, t2, n2) {
    let r2 = e14.sidx && at(e14.sidx);
    if (!e14.sidx || !r2 || this.mainPlaylistLoader_.sidxMapping_[r2]) {
      this.mediaRequest_ = h.default.setTimeout(() => n2(false), 0);
      return;
    }
    let i2 = Fc(e14.sidx.resolvedUri), a2 = (i3, a3) => {
      if (this.requestErrored_(i3, a3, t2)) return;
      let o2 = this.mainPlaylistLoader_.sidxMapping_, s2;
      try {
        s2 = (0, nn.default)(M(a3.response).subarray(8));
      } catch (e15) {
        e15.metadata = { errorType: Z.Error.DashManifestSidxParsingError }, this.requestErrored_(e15, a3, t2);
        return;
      }
      return o2[r2] = { sidxInfo: e14.sidx, sidx: s2 }, Xe(e14, s2, e14.sidx.resolvedUri), n2(true);
    };
    this.request = mu(i2, this.vhs_.xhr, (t3, n3, r3, o2) => {
      if (t3) return a2(t3, n3);
      if (!r3 || r3 !== `mp4`) {
        let t4 = r3 || `unknown`;
        return a2({ status: n3.status, message: `Unsupported ${t4} container type for sidx segment at URL: ${i2}`, response: ``, playlist: e14, internal: true, playlistExclusionDuration: 1 / 0, code: 2, metadata: { errorType: Z.Error.UnsupportedSidxContainer, sidxContainer: t4 } }, n3);
      }
      let { offset: s2, length: c2 } = e14.sidx.byterange;
      if (o2.length >= c2 + s2) return a2(t3, { response: o2.subarray(s2, s2 + c2), status: n3.status, uri: n3.uri });
      this.request = this.vhs_.xhr({ uri: i2, responseType: `arraybuffer`, headers: Yl({ byterange: e14.sidx.byterange }) }, a2);
    });
  }
  dispose() {
    this.trigger(`dispose`), this.stopRequest(), this.loadedPlaylists_ = {}, h.default.clearTimeout(this.minimumUpdatePeriodTimeout_), h.default.clearTimeout(this.mediaRequest_), h.default.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null, this.mediaRequest_ = null, this.minimumUpdatePeriodTimeout_ = null, this.mainPlaylistLoader_.createMupOnMedia_ && (this.off(`loadedmetadata`, this.mainPlaylistLoader_.createMupOnMedia_), this.mainPlaylistLoader_.createMupOnMedia_ = null), this.off();
  }
  hasPendingRequest() {
    return this.request || this.mediaRequest_;
  }
  stopRequest() {
    if (this.request) {
      let e14 = this.request;
      this.request = null, e14.onreadystatechange = null, e14.abort();
    }
  }
  media(e14) {
    if (!e14) return this.media_;
    if (this.state === `HAVE_NOTHING`) throw Error(`Cannot switch media playlist from ` + this.state);
    let t2 = this.state;
    if (typeof e14 == `string`) {
      if (!this.mainPlaylistLoader_.main.playlists[e14]) throw Error(`Unknown playlist URI: ` + e14);
      e14 = this.mainPlaylistLoader_.main.playlists[e14];
    }
    let n2 = !this.media_ || e14.id !== this.media_.id;
    if (n2 && this.loadedPlaylists_[e14.id] && this.loadedPlaylists_[e14.id].endList) {
      this.state = `HAVE_METADATA`, this.media_ = e14, n2 && (this.trigger(`mediachanging`), this.trigger(`mediachange`));
      return;
    }
    n2 && (this.media_ && this.trigger(`mediachanging`), this.addSidxSegments_(e14, t2, (n3) => {
      this.haveMetadata({ startingState: t2, playlist: e14 });
    }));
  }
  haveMetadata({ startingState: e14, playlist: t2 }) {
    this.state = `HAVE_METADATA`, this.loadedPlaylists_[t2.id] = t2, this.mediaRequest_ = null, this.refreshMedia_(t2.id), e14 === `HAVE_MAIN_MANIFEST` ? this.trigger(`loadedmetadata`) : this.trigger(`mediachange`);
  }
  pause() {
    this.mainPlaylistLoader_.createMupOnMedia_ && (this.off(`loadedmetadata`, this.mainPlaylistLoader_.createMupOnMedia_), this.mainPlaylistLoader_.createMupOnMedia_ = null), this.stopRequest(), h.default.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null, this.isMain_ && (h.default.clearTimeout(this.mainPlaylistLoader_.minimumUpdatePeriodTimeout_), this.mainPlaylistLoader_.minimumUpdatePeriodTimeout_ = null), this.state === `HAVE_NOTHING` && (this.started = false);
  }
  load(e14) {
    h.default.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null;
    let t2 = this.media();
    if (e14) {
      let e15 = t2 ? t2.targetDuration / 2 * 1e3 : 5 * 1e3;
      this.mediaUpdateTimeout = h.default.setTimeout(() => this.load(), e15);
      return;
    }
    if (!this.started) {
      this.start();
      return;
    }
    t2 && !t2.endList ? (this.isMain_ && !this.minimumUpdatePeriodTimeout_ && (this.trigger(`minimumUpdatePeriod`), this.updateMinimumUpdatePeriodTimeout_()), this.trigger(`mediaupdatetimeout`)) : this.trigger(`loadedplaylist`);
  }
  start() {
    if (this.started = true, !this.isMain_) {
      this.mediaRequest_ = h.default.setTimeout(() => this.haveMain_(), 0);
      return;
    }
    this.requestMain_((e14, t2) => {
      this.haveMain_(), !this.hasPendingRequest() && !this.media_ && this.media(this.mainPlaylistLoader_.main.playlists[0]);
    });
  }
  requestMain_(e14) {
    this.request = this.vhs_.xhr({ uri: this.mainPlaylistLoader_.srcUrl, withCredentials: this.withCredentials, requestType: `dash-manifest` }, (t2, n2) => {
      if (this.requestErrored_(t2, n2)) {
        this.state === `HAVE_NOTHING` && (this.started = false);
        return;
      }
      let r2 = n2.responseText !== this.mainPlaylistLoader_.mainXml_;
      if (this.mainPlaylistLoader_.mainXml_ = n2.responseText, n2.responseHeaders && n2.responseHeaders.date ? this.mainLoaded_ = Date.parse(n2.responseHeaders.date) : this.mainLoaded_ = Date.now(), this.mainPlaylistLoader_.srcUrl = Fc(this.mainPlaylistLoader_.srcUrl, n2), r2) {
        this.handleMain_(), this.syncClientServerClock_(() => e14(n2, r2));
        return;
      }
      return e14(n2, r2);
    });
  }
  syncClientServerClock_(e14) {
    let t2 = en(this.mainPlaylistLoader_.mainXml_);
    if (t2 === null) return this.mainPlaylistLoader_.clientOffset_ = this.mainLoaded_ - Date.now(), e14();
    if (t2.method === `DIRECT`) return this.mainPlaylistLoader_.clientOffset_ = t2.value - Date.now(), e14();
    this.request = this.vhs_.xhr({ uri: Pc(this.mainPlaylistLoader_.srcUrl, t2.value), method: t2.method, withCredentials: this.withCredentials, requestType: `dash-clock-sync` }, (n2, r2) => {
      if (!this.request) return;
      if (n2) return this.mainPlaylistLoader_.clientOffset_ = this.mainLoaded_ - Date.now(), e14();
      let i2;
      i2 = t2.method === `HEAD` ? !r2.responseHeaders || !r2.responseHeaders.date ? this.mainLoaded_ : Date.parse(r2.responseHeaders.date) : Date.parse(r2.responseText), this.mainPlaylistLoader_.clientOffset_ = i2 - Date.now(), e14();
    });
  }
  haveMain_() {
    this.state = `HAVE_MAIN_MANIFEST`, this.isMain_ ? this.trigger(`loadedplaylist`) : this.media_ || this.media(this.childPlaylist_);
  }
  handleMain_() {
    this.mediaRequest_ = null;
    let e14 = this.mainPlaylistLoader_.main, t2 = vu({ mainXml: this.mainPlaylistLoader_.mainXml_, srcUrl: this.mainPlaylistLoader_.srcUrl, clientOffset: this.mainPlaylistLoader_.clientOffset_, sidxMapping: this.mainPlaylistLoader_.sidxMapping_, previousManifest: e14 });
    e14 && (t2 = bu(e14, t2, this.mainPlaylistLoader_.sidxMapping_)), this.mainPlaylistLoader_.main = t2 || e14;
    let n2 = this.mainPlaylistLoader_.main.locations && this.mainPlaylistLoader_.main.locations[0];
    return n2 && n2 !== this.mainPlaylistLoader_.srcUrl && (this.mainPlaylistLoader_.srcUrl = n2), (!e14 || t2 && t2.minimumUpdatePeriod !== e14.minimumUpdatePeriod) && this.updateMinimumUpdatePeriodTimeout_(), this.addEventStreamToMetadataTrack_(t2), !!t2;
  }
  updateMinimumUpdatePeriodTimeout_() {
    let e14 = this.mainPlaylistLoader_;
    e14.createMupOnMedia_ &&= (e14.off(`loadedmetadata`, e14.createMupOnMedia_), null), e14.minimumUpdatePeriodTimeout_ &&= (h.default.clearTimeout(e14.minimumUpdatePeriodTimeout_), null);
    let t2 = e14.main && e14.main.minimumUpdatePeriod;
    if (t2 === 0 && (e14.media() ? t2 = e14.media().targetDuration * 1e3 : (e14.createMupOnMedia_ = e14.updateMinimumUpdatePeriodTimeout_, e14.one(`loadedmetadata`, e14.createMupOnMedia_))), typeof t2 != `number` || t2 <= 0) {
      t2 < 0 && this.logger_(`found invalid minimumUpdatePeriod of ${t2}, not setting a timeout`);
      return;
    }
    this.createMUPTimeout_(t2);
  }
  createMUPTimeout_(e14) {
    let t2 = this.mainPlaylistLoader_;
    t2.minimumUpdatePeriodTimeout_ = h.default.setTimeout(() => {
      t2.minimumUpdatePeriodTimeout_ = null, t2.trigger(`minimumUpdatePeriod`), t2.createMUPTimeout_(e14);
    }, e14);
  }
  refreshXml_() {
    this.requestMain_((e14, t2) => {
      t2 && (this.media_ &&= this.mainPlaylistLoader_.main.playlists[this.media_.id], this.mainPlaylistLoader_.sidxMapping_ = Cu(this.mainPlaylistLoader_.main, this.mainPlaylistLoader_.sidxMapping_), this.addSidxSegments_(this.media(), this.state, (e15) => {
        this.refreshMedia_(this.media().id);
      }));
    });
  }
  refreshMedia_(e14) {
    if (!e14) throw Error(`refreshMedia_ must take a media id`);
    this.media_ && this.isMain_ && this.handleMain_();
    let t2 = this.mainPlaylistLoader_.main.playlists, n2 = !this.media_ || this.media_ !== t2[e14];
    if (n2 ? this.media_ = t2[e14] : this.trigger(`playlistunchanged`), !this.mediaUpdateTimeout) {
      let e15 = () => {
        this.media().endList || (this.mediaUpdateTimeout = h.default.setTimeout(() => {
          this.trigger(`mediaupdatetimeout`), e15();
        }, Hl(this.media(), !!n2)));
      };
      e15();
    }
    this.trigger(`loadedplaylist`);
  }
  addEventStreamToMetadataTrack_(e14) {
    if (e14 && this.mainPlaylistLoader_.main.eventStream) {
      let e15 = this.mainPlaylistLoader_.main.eventStream.map((e16) => ({ cueTime: e16.start, frames: [{ data: e16.messageData }] }));
      this.addMetadataToTextTrack(`EventStream`, e15, this.mainPlaylistLoader_.main.duration);
    }
  }
  getKeyIdSet(e14) {
    if (e14.contentProtection) {
      let t2 = /* @__PURE__ */ new Set();
      for (let n2 in e14.contentProtection) {
        let r2 = e14.contentProtection[n2].attributes[`cenc:default_KID`];
        r2 && t2.add(r2.replace(/-/g, ``).toLowerCase());
      }
      return t2;
    }
  }
}, Tu = { GOAL_BUFFER_LENGTH: 30, MAX_GOAL_BUFFER_LENGTH: 60, BACK_BUFFER_LENGTH: 30, GOAL_BUFFER_LENGTH_RATE: 1, INITIAL_BANDWIDTH: 4194304, BANDWIDTH_VARIANCE: 1.2, BUFFER_LOW_WATER_LINE: 0, MAX_BUFFER_LOW_WATER_LINE: 30, EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE: 16, BUFFER_LOW_WATER_LINE_RATE: 1, BUFFER_HIGH_WATER_LINE: 30 }, Eu = (e14) => {
  let t2 = new Uint8Array(new ArrayBuffer(e14.length));
  for (let n2 = 0; n2 < e14.length; n2++) t2[n2] = e14.charCodeAt(n2);
  return t2.buffer;
}, Du = function(e14) {
  return e14.on = e14.addEventListener, e14.off = e14.removeEventListener, e14;
}, Ou = function(e14) {
  try {
    return URL.createObjectURL(new Blob([e14], { type: `application/javascript` }));
  } catch {
    let t2 = new BlobBuilder();
    return t2.append(e14), URL.createObjectURL(t2.getBlob());
  }
}, ku = function(e14) {
  return function() {
    let t2 = Ou(e14), n2 = Du(new Worker(t2));
    n2.objURL = t2;
    let r2 = n2.terminate;
    return n2.on = n2.addEventListener, n2.off = n2.removeEventListener, n2.terminate = function() {
      return URL.revokeObjectURL(t2), r2.call(this);
    }, n2;
  };
}, Au = function(e14) {
  return `var browserWorkerPolyFill = ${Du.toString()};
browserWorkerPolyFill(self);
` + e14;
}, ju = function(e14) {
  return e14.toString().replace(/^function.+?{/, ``).slice(0, -1);
}, Mu = ku(Au(ju(function() {
  var e14 = typeof globalThis < `u` ? globalThis : typeof window < `u` ? window : typeof global < `u` ? global : typeof self < `u` ? self : {}, t2 = function() {
    this.init = function() {
      var e15 = {};
      this.on = function(t3, n3) {
        e15[t3] || (e15[t3] = []), e15[t3] = e15[t3].concat(n3);
      }, this.off = function(t3, n3) {
        var r3;
        return e15[t3] ? (r3 = e15[t3].indexOf(n3), e15[t3] = e15[t3].slice(), e15[t3].splice(r3, 1), r3 > -1) : false;
      }, this.trigger = function(t3) {
        var n3 = e15[t3], r3, i3, a3;
        if (n3) if (arguments.length === 2) for (i3 = n3.length, r3 = 0; r3 < i3; ++r3) n3[r3].call(this, arguments[1]);
        else {
          for (a3 = [], r3 = arguments.length, r3 = 1; r3 < arguments.length; ++r3) a3.push(arguments[r3]);
          for (i3 = n3.length, r3 = 0; r3 < i3; ++r3) n3[r3].apply(this, a3);
        }
      }, this.dispose = function() {
        e15 = {};
      };
    };
  };
  t2.prototype.pipe = function(e15) {
    return this.on(`data`, function(t3) {
      e15.push(t3);
    }), this.on(`done`, function(t3) {
      e15.flush(t3);
    }), this.on(`partialdone`, function(t3) {
      e15.partialFlush(t3);
    }), this.on(`endedtimeline`, function(t3) {
      e15.endTimeline(t3);
    }), this.on(`reset`, function(t3) {
      e15.reset(t3);
    }), e15;
  }, t2.prototype.push = function(e15) {
    this.trigger(`data`, e15);
  }, t2.prototype.flush = function(e15) {
    this.trigger(`done`, e15);
  }, t2.prototype.partialFlush = function(e15) {
    this.trigger(`partialdone`, e15);
  }, t2.prototype.endTimeline = function(e15) {
    this.trigger(`endedtimeline`, e15);
  }, t2.prototype.reset = function(e15) {
    this.trigger(`reset`, e15);
  };
  var n2 = t2, r2 = 2 ** 32, i2 = { getUint64: function(e15) {
    var t3 = new DataView(e15.buffer, e15.byteOffset, e15.byteLength), n3;
    return t3.getBigUint64 ? (n3 = t3.getBigUint64(0), n3 < 2 ** 53 - 1 ? Number(n3) : n3) : t3.getUint32(0) * r2 + t3.getUint32(4);
  }, MAX_UINT32: r2 }, a2 = i2.MAX_UINT32, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2, g2, _2, v2, y2, b2, x2, S2, ee2, C2, w2, T2, te2, E2, D2, ne2, O2, re2, ie2, ae2, k2, oe2, se2, ce2, le2, A2, ue2;
  (function() {
    var e15;
    if (E2 = { avc1: [], avcC: [], btrt: [], dinf: [], dref: [], esds: [], ftyp: [], hdlr: [], mdat: [], mdhd: [], mdia: [], mfhd: [], minf: [], moof: [], moov: [], mp4a: [], mvex: [], mvhd: [], pasp: [], sdtp: [], smhd: [], stbl: [], stco: [], stsc: [], stsd: [], stsz: [], stts: [], styp: [], tfdt: [], tfhd: [], traf: [], trak: [], trun: [], trex: [], tkhd: [], vmhd: [] }, !(typeof Uint8Array > `u`)) {
      for (e15 in E2) E2.hasOwnProperty(e15) && (E2[e15] = [e15.charCodeAt(0), e15.charCodeAt(1), e15.charCodeAt(2), e15.charCodeAt(3)]);
      D2 = new Uint8Array([105, 115, 111, 109]), O2 = new Uint8Array([97, 118, 99, 49]), ne2 = new Uint8Array([0, 0, 0, 1]), re2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), ie2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), ae2 = { video: re2, audio: ie2 }, se2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), oe2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), ce2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), le2 = ce2, A2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), ue2 = ce2, k2 = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
  })(), o2 = function(e15) {
    var t3 = [], n3 = 0, r3, i3, a3;
    for (r3 = 1; r3 < arguments.length; r3++) t3.push(arguments[r3]);
    for (r3 = t3.length; r3--; ) n3 += t3[r3].byteLength;
    for (i3 = new Uint8Array(n3 + 8), a3 = new DataView(i3.buffer, i3.byteOffset, i3.byteLength), a3.setUint32(0, i3.byteLength), i3.set(e15, 4), r3 = 0, n3 = 8; r3 < t3.length; r3++) i3.set(t3[r3], n3), n3 += t3[r3].byteLength;
    return i3;
  }, s2 = function() {
    return o2(E2.dinf, o2(E2.dref, se2));
  }, c2 = function(e15) {
    return o2(E2.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, e15.audioobjecttype << 3 | e15.samplingfrequencyindex >>> 1, e15.samplingfrequencyindex << 7 | e15.channelcount << 3, 6, 1, 2]));
  }, l2 = function() {
    return o2(E2.ftyp, D2, ne2, D2, O2);
  }, x2 = function(e15) {
    return o2(E2.hdlr, ae2[e15]);
  }, u2 = function(e15) {
    return o2(E2.mdat, e15);
  }, b2 = function(e15) {
    var t3 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, e15.duration >>> 24 & 255, e15.duration >>> 16 & 255, e15.duration >>> 8 & 255, e15.duration & 255, 85, 196, 0, 0]);
    return e15.samplerate && (t3[12] = e15.samplerate >>> 24 & 255, t3[13] = e15.samplerate >>> 16 & 255, t3[14] = e15.samplerate >>> 8 & 255, t3[15] = e15.samplerate & 255), o2(E2.mdhd, t3);
  }, y2 = function(e15) {
    return o2(E2.mdia, b2(e15), x2(e15.type), f2(e15));
  }, d2 = function(e15) {
    return o2(E2.mfhd, new Uint8Array([0, 0, 0, 0, (e15 & 4278190080) >> 24, (e15 & 16711680) >> 16, (e15 & 65280) >> 8, e15 & 255]));
  }, f2 = function(e15) {
    return o2(E2.minf, e15.type === `video` ? o2(E2.vmhd, k2) : o2(E2.smhd, oe2), s2(), ee2(e15));
  }, p2 = function(e15, t3) {
    for (var n3 = [], r3 = t3.length; r3--; ) n3[r3] = w2(t3[r3]);
    return o2.apply(null, [E2.moof, d2(e15)].concat(n3));
  }, m2 = function(e15) {
    for (var t3 = e15.length, n3 = []; t3--; ) n3[t3] = _2(e15[t3]);
    return o2.apply(null, [E2.moov, g2(4294967295)].concat(n3, h2(e15)));
  }, h2 = function(e15) {
    for (var t3 = e15.length, n3 = []; t3--; ) n3[t3] = T2(e15[t3]);
    return o2.apply(null, [E2.mvex].concat(n3));
  }, g2 = function(e15) {
    var t3 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (e15 & 4278190080) >> 24, (e15 & 16711680) >> 16, (e15 & 65280) >> 8, e15 & 255, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
    return o2(E2.mvhd, t3);
  }, S2 = function(e15) {
    var t3 = e15.samples || [], n3 = new Uint8Array(4 + t3.length), r3, i3;
    for (i3 = 0; i3 < t3.length; i3++) r3 = t3[i3].flags, n3[i3 + 4] = r3.dependsOn << 4 | r3.isDependedOn << 2 | r3.hasRedundancy;
    return o2(E2.sdtp, n3);
  }, ee2 = function(e15) {
    return o2(E2.stbl, C2(e15), o2(E2.stts, ue2), o2(E2.stsc, le2), o2(E2.stsz, A2), o2(E2.stco, ce2));
  }, (function() {
    var e15, t3;
    C2 = function(n3) {
      return o2(E2.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), n3.type === `video` ? e15(n3) : t3(n3));
    }, e15 = function(e16) {
      var t4 = e16.sps || [], n3 = e16.pps || [], r3 = [], i3 = [], a3, s3;
      for (a3 = 0; a3 < t4.length; a3++) r3.push((t4[a3].byteLength & 65280) >>> 8), r3.push(t4[a3].byteLength & 255), r3 = r3.concat(Array.prototype.slice.call(t4[a3]));
      for (a3 = 0; a3 < n3.length; a3++) i3.push((n3[a3].byteLength & 65280) >>> 8), i3.push(n3[a3].byteLength & 255), i3 = i3.concat(Array.prototype.slice.call(n3[a3]));
      if (s3 = [E2.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (e16.width & 65280) >> 8, e16.width & 255, (e16.height & 65280) >> 8, e16.height & 255, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o2(E2.avcC, new Uint8Array([1, e16.profileIdc, e16.profileCompatibility, e16.levelIdc, 255, t4.length].concat(r3, [n3.length], i3))), o2(E2.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192]))], e16.sarRatio) {
        var c3 = e16.sarRatio[0], l3 = e16.sarRatio[1];
        s3.push(o2(E2.pasp, new Uint8Array([(c3 & 4278190080) >> 24, (c3 & 16711680) >> 16, (c3 & 65280) >> 8, c3 & 255, (l3 & 4278190080) >> 24, (l3 & 16711680) >> 16, (l3 & 65280) >> 8, l3 & 255])));
      }
      return o2.apply(null, s3);
    }, t3 = function(e16) {
      return o2(E2.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (e16.channelcount & 65280) >> 8, e16.channelcount & 255, (e16.samplesize & 65280) >> 8, e16.samplesize & 255, 0, 0, 0, 0, (e16.samplerate & 65280) >> 8, e16.samplerate & 255, 0, 0]), c2(e16));
    };
  })(), v2 = function(e15) {
    var t3 = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (e15.id & 4278190080) >> 24, (e15.id & 16711680) >> 16, (e15.id & 65280) >> 8, e15.id & 255, 0, 0, 0, 0, (e15.duration & 4278190080) >> 24, (e15.duration & 16711680) >> 16, (e15.duration & 65280) >> 8, e15.duration & 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (e15.width & 65280) >> 8, e15.width & 255, 0, 0, (e15.height & 65280) >> 8, e15.height & 255, 0, 0]);
    return o2(E2.tkhd, t3);
  }, w2 = function(e15) {
    var t3 = o2(E2.tfhd, new Uint8Array([0, 0, 0, 58, (e15.id & 4278190080) >> 24, (e15.id & 16711680) >> 16, (e15.id & 65280) >> 8, e15.id & 255, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])), n3, r3, i3, s3, c3 = Math.floor(e15.baseMediaDecodeTime / a2), l3 = Math.floor(e15.baseMediaDecodeTime % a2);
    return n3 = o2(E2.tfdt, new Uint8Array([1, 0, 0, 0, c3 >>> 24 & 255, c3 >>> 16 & 255, c3 >>> 8 & 255, c3 & 255, l3 >>> 24 & 255, l3 >>> 16 & 255, l3 >>> 8 & 255, l3 & 255])), s3 = 92, e15.type === `audio` ? (r3 = te2(e15, s3), o2(E2.traf, t3, n3, r3)) : (i3 = S2(e15), r3 = te2(e15, i3.length + s3), o2(E2.traf, t3, n3, r3, i3));
  }, _2 = function(e15) {
    return e15.duration = e15.duration || 4294967295, o2(E2.trak, v2(e15), y2(e15));
  }, T2 = function(e15) {
    var t3 = new Uint8Array([0, 0, 0, 0, (e15.id & 4278190080) >> 24, (e15.id & 16711680) >> 16, (e15.id & 65280) >> 8, e15.id & 255, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
    return e15.type !== `video` && (t3[t3.length - 1] = 0), o2(E2.trex, t3);
  }, (function() {
    var e15, t3, n3 = function(e16, t4) {
      var n4 = 0, r3 = 0, i3 = 0, a3 = 0;
      return e16.length && (e16[0].duration !== void 0 && (n4 = 1), e16[0].size !== void 0 && (r3 = 2), e16[0].flags !== void 0 && (i3 = 4), e16[0].compositionTimeOffset !== void 0 && (a3 = 8)), [0, 0, n4 | r3 | i3 | a3, 1, (e16.length & 4278190080) >>> 24, (e16.length & 16711680) >>> 16, (e16.length & 65280) >>> 8, e16.length & 255, (t4 & 4278190080) >>> 24, (t4 & 16711680) >>> 16, (t4 & 65280) >>> 8, t4 & 255];
    };
    t3 = function(e16, t4) {
      var r3, i3, a3, s3 = e16.samples || [], c3, l3;
      for (t4 += 20 + 16 * s3.length, a3 = n3(s3, t4), i3 = new Uint8Array(a3.length + s3.length * 16), i3.set(a3), r3 = a3.length, l3 = 0; l3 < s3.length; l3++) c3 = s3[l3], i3[r3++] = (c3.duration & 4278190080) >>> 24, i3[r3++] = (c3.duration & 16711680) >>> 16, i3[r3++] = (c3.duration & 65280) >>> 8, i3[r3++] = c3.duration & 255, i3[r3++] = (c3.size & 4278190080) >>> 24, i3[r3++] = (c3.size & 16711680) >>> 16, i3[r3++] = (c3.size & 65280) >>> 8, i3[r3++] = c3.size & 255, i3[r3++] = c3.flags.isLeading << 2 | c3.flags.dependsOn, i3[r3++] = c3.flags.isDependedOn << 6 | c3.flags.hasRedundancy << 4 | c3.flags.paddingValue << 1 | c3.flags.isNonSyncSample, i3[r3++] = c3.flags.degradationPriority & 61440, i3[r3++] = c3.flags.degradationPriority & 15, i3[r3++] = (c3.compositionTimeOffset & 4278190080) >>> 24, i3[r3++] = (c3.compositionTimeOffset & 16711680) >>> 16, i3[r3++] = (c3.compositionTimeOffset & 65280) >>> 8, i3[r3++] = c3.compositionTimeOffset & 255;
      return o2(E2.trun, i3);
    }, e15 = function(e16, t4) {
      var r3, i3, a3, s3 = e16.samples || [], c3, l3;
      for (t4 += 20 + 8 * s3.length, a3 = n3(s3, t4), r3 = new Uint8Array(a3.length + s3.length * 8), r3.set(a3), i3 = a3.length, l3 = 0; l3 < s3.length; l3++) c3 = s3[l3], r3[i3++] = (c3.duration & 4278190080) >>> 24, r3[i3++] = (c3.duration & 16711680) >>> 16, r3[i3++] = (c3.duration & 65280) >>> 8, r3[i3++] = c3.duration & 255, r3[i3++] = (c3.size & 4278190080) >>> 24, r3[i3++] = (c3.size & 16711680) >>> 16, r3[i3++] = (c3.size & 65280) >>> 8, r3[i3++] = c3.size & 255;
      return o2(E2.trun, r3);
    }, te2 = function(n4, r3) {
      return n4.type === `audio` ? e15(n4, r3) : t3(n4, r3);
    };
  })();
  var de2 = { ftyp: l2, mdat: u2, moof: p2, moov: m2, initSegment: function(e15) {
    var t3 = l2(), n3 = m2(e15), r3 = new Uint8Array(t3.byteLength + n3.byteLength);
    return r3.set(t3), r3.set(n3, t3.byteLength), r3;
  } }, fe2 = function(e15) {
    var t3, n3, r3 = [], i3 = [];
    for (i3.byteLength = 0, i3.nalCount = 0, i3.duration = 0, r3.byteLength = 0, t3 = 0; t3 < e15.length; t3++) n3 = e15[t3], n3.nalUnitType === `access_unit_delimiter_rbsp` ? (r3.length && (r3.duration = n3.dts - r3.dts, i3.byteLength += r3.byteLength, i3.nalCount += r3.length, i3.duration += r3.duration, i3.push(r3)), r3 = [n3], r3.byteLength = n3.data.byteLength, r3.pts = n3.pts, r3.dts = n3.dts) : (n3.nalUnitType === `slice_layer_without_partitioning_rbsp_idr` && (r3.keyFrame = true), r3.duration = n3.dts - r3.dts, r3.byteLength += n3.data.byteLength, r3.push(n3));
    return i3.length && (!r3.duration || r3.duration <= 0) && (r3.duration = i3[i3.length - 1].duration), i3.byteLength += r3.byteLength, i3.nalCount += r3.length, i3.duration += r3.duration, i3.push(r3), i3;
  }, pe2 = function(e15) {
    var t3, n3, r3 = [], i3 = [];
    for (r3.byteLength = 0, r3.nalCount = 0, r3.duration = 0, r3.pts = e15[0].pts, r3.dts = e15[0].dts, i3.byteLength = 0, i3.nalCount = 0, i3.duration = 0, i3.pts = e15[0].pts, i3.dts = e15[0].dts, t3 = 0; t3 < e15.length; t3++) n3 = e15[t3], n3.keyFrame ? (r3.length && (i3.push(r3), i3.byteLength += r3.byteLength, i3.nalCount += r3.nalCount, i3.duration += r3.duration), r3 = [n3], r3.nalCount = n3.length, r3.byteLength = n3.byteLength, r3.pts = n3.pts, r3.dts = n3.dts, r3.duration = n3.duration) : (r3.duration += n3.duration, r3.nalCount += n3.length, r3.byteLength += n3.byteLength, r3.push(n3));
    return i3.length && r3.duration <= 0 && (r3.duration = i3[i3.length - 1].duration), i3.byteLength += r3.byteLength, i3.nalCount += r3.nalCount, i3.duration += r3.duration, i3.push(r3), i3;
  }, me2 = function(e15) {
    var t3;
    return !e15[0][0].keyFrame && e15.length > 1 && (t3 = e15.shift(), e15.byteLength -= t3.byteLength, e15.nalCount -= t3.nalCount, e15[0][0].dts = t3.dts, e15[0][0].pts = t3.pts, e15[0][0].duration += t3.duration), e15;
  }, he2 = function() {
    return { size: 0, flags: { isLeading: 0, dependsOn: 1, isDependedOn: 0, hasRedundancy: 0, degradationPriority: 0, isNonSyncSample: 1 } };
  }, ge2 = function(e15, t3) {
    var n3 = he2();
    return n3.dataOffset = t3, n3.compositionTimeOffset = e15.pts - e15.dts, n3.duration = e15.duration, n3.size = 4 * e15.length, n3.size += e15.byteLength, e15.keyFrame && (n3.flags.dependsOn = 2, n3.flags.isNonSyncSample = 0), n3;
  }, _e2 = { groupNalsIntoFrames: fe2, groupFramesIntoGops: pe2, extendFirstKeyFrame: me2, generateSampleTable: function(e15, t3) {
    var n3, r3, i3, a3, o3, s3 = t3 || 0, c3 = [];
    for (n3 = 0; n3 < e15.length; n3++) for (a3 = e15[n3], r3 = 0; r3 < a3.length; r3++) o3 = a3[r3], i3 = ge2(o3, s3), s3 += i3.size, c3.push(i3);
    return c3;
  }, concatenateNalData: function(e15) {
    var t3, n3, r3, i3, a3, o3, s3 = 0, c3 = e15.byteLength + 4 * e15.nalCount, l3 = new Uint8Array(c3), u3 = new DataView(l3.buffer);
    for (t3 = 0; t3 < e15.length; t3++) for (i3 = e15[t3], n3 = 0; n3 < i3.length; n3++) for (a3 = i3[n3], r3 = 0; r3 < a3.length; r3++) o3 = a3[r3], u3.setUint32(s3, o3.data.byteLength), s3 += 4, l3.set(o3.data, s3), s3 += o3.data.byteLength;
    return l3;
  }, generateSampleTableForFrame: function(e15, t3) {
    var n3, r3 = t3 || 0, i3 = [];
    return n3 = ge2(e15, r3), i3.push(n3), i3;
  }, concatenateNalDataForFrame: function(e15) {
    var t3, n3, r3 = 0, i3 = e15.byteLength + 4 * e15.length, a3 = new Uint8Array(i3), o3 = new DataView(a3.buffer);
    for (t3 = 0; t3 < e15.length; t3++) n3 = e15[t3], o3.setUint32(r3, n3.data.byteLength), r3 += 4, a3.set(n3.data, r3), r3 += n3.data.byteLength;
    return a3;
  } }, ve2 = [33, 16, 5, 32, 164, 27], ye2 = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252], j2 = function(e15) {
    for (var t3 = []; e15--; ) t3.push(0);
    return t3;
  }, be2 = function(e15) {
    return Object.keys(e15).reduce(function(t3, n3) {
      return t3[n3] = new Uint8Array(e15[n3].reduce(function(e16, t4) {
        return e16.concat(t4);
      }, [])), t3;
    }, {});
  }, xe2, Se2 = function() {
    return xe2 ||= be2({ 96e3: [ve2, [227, 64], j2(154), [56]], 88200: [ve2, [231], j2(170), [56]], 64e3: [ve2, [248, 192], j2(240), [56]], 48e3: [ve2, [255, 192], j2(268), [55, 148, 128], j2(54), [112]], 44100: [ve2, [255, 192], j2(268), [55, 163, 128], j2(84), [112]], 32e3: [ve2, [255, 192], j2(268), [55, 234], j2(226), [112]], 24e3: [ve2, [255, 192], j2(268), [55, 255, 128], j2(268), [111, 112], j2(126), [224]], 16e3: [ve2, [255, 192], j2(268), [55, 255, 128], j2(268), [111, 255], j2(269), [223, 108], j2(195), [1, 192]], 12e3: [ye2, j2(268), [3, 127, 248], j2(268), [6, 255, 240], j2(268), [13, 255, 224], j2(268), [27, 253, 128], j2(259), [56]], 11025: [ye2, j2(268), [3, 127, 248], j2(268), [6, 255, 240], j2(268), [13, 255, 224], j2(268), [27, 255, 192], j2(268), [55, 175, 128], j2(108), [112]], 8e3: [ye2, j2(268), [3, 121, 16], j2(47), [7]] }), xe2;
  }, Ce2 = 9e4, M2 = function(e15) {
    return e15 * Ce2;
  }, we2 = function(e15, t3) {
    return e15 * t3;
  }, Te2 = function(e15) {
    return e15 / Ce2;
  }, Ee2 = function(e15, t3) {
    return e15 / t3;
  }, N2 = { ONE_SECOND_IN_TS: Ce2, secondsToVideoTs: M2, secondsToAudioTs: we2, videoTsToSeconds: Te2, audioTsToSeconds: Ee2, audioTsToVideoTs: function(e15, t3) {
    return M2(Ee2(e15, t3));
  }, videoTsToAudioTs: function(e15, t3) {
    return we2(Te2(e15), t3);
  }, metadataTsToSeconds: function(e15, t3, n3) {
    return Te2(n3 ? e15 : e15 - t3);
  } }, De2 = Se2, Oe2 = N2, ke2 = function(e15) {
    var t3, n3, r3 = 0;
    for (t3 = 0; t3 < e15.length; t3++) n3 = e15[t3], r3 += n3.data.byteLength;
    return r3;
  }, P2 = { prefixWithSilence: function(e15, t3, n3, r3) {
    var i3, a3 = 0, o3 = 0, s3 = 0, c3 = 0, l3, u3, d3;
    if (t3.length && (i3 = Oe2.audioTsToVideoTs(e15.baseMediaDecodeTime, e15.samplerate), a3 = Math.ceil(Oe2.ONE_SECOND_IN_TS / (e15.samplerate / 1024)), n3 && r3 && (o3 = i3 - Math.max(n3, r3), s3 = Math.floor(o3 / a3), c3 = s3 * a3), !(s3 < 1 || c3 > Oe2.ONE_SECOND_IN_TS / 2))) {
      for (l3 = De2()[e15.samplerate], l3 ||= t3[0].data, u3 = 0; u3 < s3; u3++) d3 = t3[0], t3.splice(0, 0, { data: l3, dts: d3.dts - a3, pts: d3.pts - a3 });
      return e15.baseMediaDecodeTime -= Math.floor(Oe2.videoTsToAudioTs(c3, e15.samplerate)), c3;
    }
  }, trimAdtsFramesByEarliestDts: function(e15, t3, n3) {
    return t3.minSegmentDts >= n3 ? e15 : (t3.minSegmentDts = 1 / 0, e15.filter(function(e16) {
      return e16.dts >= n3 ? (t3.minSegmentDts = Math.min(t3.minSegmentDts, e16.dts), t3.minSegmentPts = t3.minSegmentDts, true) : false;
    }));
  }, generateSampleTable: function(e15) {
    var t3, n3, r3 = [];
    for (t3 = 0; t3 < e15.length; t3++) n3 = e15[t3], r3.push({ size: n3.data.byteLength, duration: 1024 });
    return r3;
  }, concatenateFrameData: function(e15) {
    var t3, n3, r3 = 0, i3 = new Uint8Array(ke2(e15));
    for (t3 = 0; t3 < e15.length; t3++) n3 = e15[t3], i3.set(n3.data, r3), r3 += n3.data.byteLength;
    return i3;
  } }, Ae2 = N2.ONE_SECOND_IN_TS, je2 = { clearDtsInfo: function(e15) {
    delete e15.minSegmentDts, delete e15.maxSegmentDts, delete e15.minSegmentPts, delete e15.maxSegmentPts;
  }, calculateTrackBaseMediaDecodeTime: function(e15, t3) {
    var n3, r3, i3 = e15.minSegmentDts;
    return t3 || (i3 -= e15.timelineStartInfo.dts), n3 = e15.timelineStartInfo.baseMediaDecodeTime, n3 += i3, n3 = Math.max(0, n3), e15.type === `audio` && (r3 = e15.samplerate / Ae2, n3 *= r3, n3 = Math.floor(n3)), n3;
  }, collectDtsInfo: function(e15, t3) {
    typeof t3.pts == `number` && (e15.timelineStartInfo.pts === void 0 && (e15.timelineStartInfo.pts = t3.pts), e15.minSegmentPts === void 0 ? e15.minSegmentPts = t3.pts : e15.minSegmentPts = Math.min(e15.minSegmentPts, t3.pts), e15.maxSegmentPts === void 0 ? e15.maxSegmentPts = t3.pts : e15.maxSegmentPts = Math.max(e15.maxSegmentPts, t3.pts)), typeof t3.dts == `number` && (e15.timelineStartInfo.dts === void 0 && (e15.timelineStartInfo.dts = t3.dts), e15.minSegmentDts === void 0 ? e15.minSegmentDts = t3.dts : e15.minSegmentDts = Math.min(e15.minSegmentDts, t3.dts), e15.maxSegmentDts === void 0 ? e15.maxSegmentDts = t3.dts : e15.maxSegmentDts = Math.max(e15.maxSegmentDts, t3.dts));
  } }, Me2 = 4, Ne2 = 128, Pe2 = { parseSei: function(e15) {
    for (var t3 = 0, n3 = { payloadType: -1, payloadSize: 0 }, r3 = 0, i3 = 0; t3 < e15.byteLength && e15[t3] !== Ne2; ) {
      for (; e15[t3] === 255; ) r3 += 255, t3++;
      for (r3 += e15[t3++]; e15[t3] === 255; ) i3 += 255, t3++;
      if (i3 += e15[t3++], !n3.payload && r3 === Me2) if (String.fromCharCode(e15[t3 + 3], e15[t3 + 4], e15[t3 + 5], e15[t3 + 6]) === `GA94`) {
        n3.payloadType = r3, n3.payloadSize = i3, n3.payload = e15.subarray(t3, t3 + i3);
        break;
      } else n3.payload = void 0;
      t3 += i3, r3 = 0, i3 = 0;
    }
    return n3;
  }, parseUserData: function(e15) {
    return e15.payload[0] !== 181 || (e15.payload[1] << 8 | e15.payload[2]) != 49 || String.fromCharCode(e15.payload[3], e15.payload[4], e15.payload[5], e15.payload[6]) !== `GA94` || e15.payload[7] !== 3 ? null : e15.payload.subarray(8, e15.payload.length - 1);
  }, parseCaptionPackets: function(e15, t3) {
    var n3 = [], r3, i3, a3, o3;
    if (!(t3[0] & 64)) return n3;
    for (i3 = t3[0] & 31, r3 = 0; r3 < i3; r3++) a3 = r3 * 3, o3 = { type: t3[a3 + 2] & 3, pts: e15 }, t3[a3 + 2] & 4 && (o3.ccData = t3[a3 + 3] << 8 | t3[a3 + 4], n3.push(o3));
    return n3;
  }, discardEmulationPreventionBytes: function(e15) {
    for (var t3 = e15.byteLength, n3 = [], r3 = 1, i3, a3; r3 < t3 - 2; ) e15[r3] === 0 && e15[r3 + 1] === 0 && e15[r3 + 2] === 3 ? (n3.push(r3 + 2), r3 += 2) : r3++;
    if (n3.length === 0) return e15;
    i3 = t3 - n3.length, a3 = new Uint8Array(i3);
    var o3 = 0;
    for (r3 = 0; r3 < i3; o3++, r3++) o3 === n3[0] && (o3++, n3.shift()), a3[r3] = e15[o3];
    return a3;
  }, USER_DATA_REGISTERED_ITU_T_T35: Me2 }, Fe2 = n2, Ie2 = Pe2, Le2 = function(e15) {
    e15 ||= {}, Le2.prototype.init.call(this), this.parse708captions_ = typeof e15.parse708captions == `boolean` ? e15.parse708captions : true, this.captionPackets_ = [], this.ccStreams_ = [new L2(0, 0), new L2(0, 1), new L2(1, 0), new L2(1, 1)], this.parse708captions_ && (this.cc708Stream_ = new I2({ captionServices: e15.captionServices })), this.reset(), this.ccStreams_.forEach(function(e16) {
      e16.on(`data`, this.trigger.bind(this, `data`)), e16.on(`partialdone`, this.trigger.bind(this, `partialdone`)), e16.on(`done`, this.trigger.bind(this, `done`));
    }, this), this.parse708captions_ && (this.cc708Stream_.on(`data`, this.trigger.bind(this, `data`)), this.cc708Stream_.on(`partialdone`, this.trigger.bind(this, `partialdone`)), this.cc708Stream_.on(`done`, this.trigger.bind(this, `done`)));
  };
  Le2.prototype = new Fe2(), Le2.prototype.push = function(e15) {
    var t3, n3, r3;
    if (e15.nalUnitType === `sei_rbsp` && (t3 = Ie2.parseSei(e15.escapedRBSP), t3.payload && t3.payloadType === Ie2.USER_DATA_REGISTERED_ITU_T_T35 && (n3 = Ie2.parseUserData(t3), n3))) {
      if (e15.dts < this.latestDts_) {
        this.ignoreNextEqualDts_ = true;
        return;
      } else if (e15.dts === this.latestDts_ && this.ignoreNextEqualDts_) {
        this.numSameDts_--, this.numSameDts_ || (this.ignoreNextEqualDts_ = false);
        return;
      }
      r3 = Ie2.parseCaptionPackets(e15.pts, n3), this.captionPackets_ = this.captionPackets_.concat(r3), this.latestDts_ !== e15.dts && (this.numSameDts_ = 0), this.numSameDts_++, this.latestDts_ = e15.dts;
    }
  }, Le2.prototype.flushCCStreams = function(e15) {
    this.ccStreams_.forEach(function(t3) {
      return e15 === `flush` ? t3.flush() : t3.partialFlush();
    }, this);
  }, Le2.prototype.flushStream = function(e15) {
    if (!this.captionPackets_.length) {
      this.flushCCStreams(e15);
      return;
    }
    this.captionPackets_.forEach(function(e16, t3) {
      e16.presortIndex = t3;
    }), this.captionPackets_.sort(function(e16, t3) {
      return e16.pts === t3.pts ? e16.presortIndex - t3.presortIndex : e16.pts - t3.pts;
    }), this.captionPackets_.forEach(function(e16) {
      e16.type < 2 ? this.dispatchCea608Packet(e16) : this.dispatchCea708Packet(e16);
    }, this), this.captionPackets_.length = 0, this.flushCCStreams(e15);
  }, Le2.prototype.flush = function() {
    return this.flushStream(`flush`);
  }, Le2.prototype.partialFlush = function() {
    return this.flushStream(`partialFlush`);
  }, Le2.prototype.reset = function() {
    this.latestDts_ = null, this.ignoreNextEqualDts_ = false, this.numSameDts_ = 0, this.activeCea608Channel_ = [null, null], this.ccStreams_.forEach(function(e15) {
      e15.reset();
    });
  }, Le2.prototype.dispatchCea608Packet = function(e15) {
    this.setsTextOrXDSActive(e15) ? this.activeCea608Channel_[e15.type] = null : this.setsChannel1Active(e15) ? this.activeCea608Channel_[e15.type] = 0 : this.setsChannel2Active(e15) && (this.activeCea608Channel_[e15.type] = 1), this.activeCea608Channel_[e15.type] !== null && this.ccStreams_[(e15.type << 1) + this.activeCea608Channel_[e15.type]].push(e15);
  }, Le2.prototype.setsChannel1Active = function(e15) {
    return (e15.ccData & 30720) == 4096;
  }, Le2.prototype.setsChannel2Active = function(e15) {
    return (e15.ccData & 30720) == 6144;
  }, Le2.prototype.setsTextOrXDSActive = function(e15) {
    return (e15.ccData & 28928) == 256 || (e15.ccData & 30974) == 4138 || (e15.ccData & 30974) == 6186;
  }, Le2.prototype.dispatchCea708Packet = function(e15) {
    this.parse708captions_ && this.cc708Stream_.push(e15);
  };
  var F2 = { 127: 9834, 4128: 32, 4129: 160, 4133: 8230, 4138: 352, 4140: 338, 4144: 9608, 4145: 8216, 4146: 8217, 4147: 8220, 4148: 8221, 4149: 8226, 4153: 8482, 4154: 353, 4156: 339, 4157: 8480, 4159: 376, 4214: 8539, 4215: 8540, 4216: 8541, 4217: 8542, 4218: 9168, 4219: 9124, 4220: 9123, 4221: 9135, 4222: 9126, 4223: 9121, 4256: 12600 }, Re2 = function(e15) {
    var t3 = F2[e15] || e15;
    return e15 & 4096 && e15 === t3 ? `` : String.fromCharCode(t3);
  }, ze2 = function(e15) {
    return 32 <= e15 && e15 <= 127 || 160 <= e15 && e15 <= 255;
  }, Be2 = function(e15) {
    this.windowNum = e15, this.reset();
  };
  Be2.prototype.reset = function() {
    this.clearText(), this.pendingNewLine = false, this.winAttr = {}, this.penAttr = {}, this.penLoc = {}, this.penColor = {}, this.visible = 0, this.rowLock = 0, this.columnLock = 0, this.priority = 0, this.relativePositioning = 0, this.anchorVertical = 0, this.anchorHorizontal = 0, this.anchorPoint = 0, this.rowCount = 1, this.virtualRowCount = this.rowCount + 1, this.columnCount = 41, this.windowStyle = 0, this.penStyle = 0;
  }, Be2.prototype.getText = function() {
    return this.rows.join(`
`);
  }, Be2.prototype.clearText = function() {
    this.rows = [``], this.rowIdx = 0;
  }, Be2.prototype.newLine = function(e15) {
    for (this.rows.length >= this.virtualRowCount && typeof this.beforeRowOverflow == `function` && this.beforeRowOverflow(e15), this.rows.length > 0 && (this.rows.push(``), this.rowIdx++); this.rows.length > this.virtualRowCount; ) this.rows.shift(), this.rowIdx--;
  }, Be2.prototype.isEmpty = function() {
    return this.rows.length === 0 ? true : this.rows.length === 1 ? this.rows[0] === `` : false;
  }, Be2.prototype.addText = function(e15) {
    this.rows[this.rowIdx] += e15;
  }, Be2.prototype.backspace = function() {
    if (!this.isEmpty()) {
      var e15 = this.rows[this.rowIdx];
      this.rows[this.rowIdx] = e15.substr(0, e15.length - 1);
    }
  };
  var Ve2 = function(e15, t3, n3) {
    this.serviceNum = e15, this.text = ``, this.currentWindow = new Be2(-1), this.windows = [], this.stream = n3, typeof t3 == `string` && this.createTextDecoder(t3);
  };
  Ve2.prototype.init = function(e15, t3) {
    this.startPts = e15;
    for (var n3 = 0; n3 < 8; n3++) this.windows[n3] = new Be2(n3), typeof t3 == `function` && (this.windows[n3].beforeRowOverflow = t3);
  }, Ve2.prototype.setCurrentWindow = function(e15) {
    this.currentWindow = this.windows[e15];
  }, Ve2.prototype.createTextDecoder = function(e15) {
    if (typeof TextDecoder > `u`) this.stream.trigger(`log`, { level: `warn`, message: "The `encoding` option is unsupported without TextDecoder support" });
    else try {
      this.textDecoder_ = new TextDecoder(e15);
    } catch (t3) {
      this.stream.trigger(`log`, { level: `warn`, message: `TextDecoder could not be created with ` + e15 + ` encoding. ` + t3 });
    }
  };
  var I2 = function(e15) {
    e15 ||= {}, I2.prototype.init.call(this);
    var t3 = this, n3 = e15.captionServices || {}, r3 = {}, i3;
    Object.keys(n3).forEach((e16) => {
      i3 = n3[e16], /^SERVICE/.test(e16) && (r3[e16] = i3.encoding);
    }), this.serviceEncodings = r3, this.current708Packet = null, this.services = {}, this.push = function(e16) {
      e16.type === 3 ? (t3.new708Packet(), t3.add708Bytes(e16)) : (t3.current708Packet === null && t3.new708Packet(), t3.add708Bytes(e16));
    };
  };
  I2.prototype = new Fe2(), I2.prototype.new708Packet = function() {
    this.current708Packet !== null && this.push708Packet(), this.current708Packet = { data: [], ptsVals: [] };
  }, I2.prototype.add708Bytes = function(e15) {
    var t3 = e15.ccData, n3 = t3 >>> 8, r3 = t3 & 255;
    this.current708Packet.ptsVals.push(e15.pts), this.current708Packet.data.push(n3), this.current708Packet.data.push(r3);
  }, I2.prototype.push708Packet = function() {
    var e15 = this.current708Packet, t3 = e15.data, n3 = null, r3 = null, i3 = 0, a3 = t3[i3++];
    for (e15.seq = a3 >> 6, e15.sizeCode = a3 & 63; i3 < t3.length; i3++) a3 = t3[i3++], n3 = a3 >> 5, r3 = a3 & 31, n3 === 7 && r3 > 0 && (a3 = t3[i3++], n3 = a3), this.pushServiceBlock(n3, i3, r3), r3 > 0 && (i3 += r3 - 1);
  }, I2.prototype.pushServiceBlock = function(e15, t3, n3) {
    var r3, i3 = t3, a3 = this.current708Packet.data, o3 = this.services[e15];
    for (o3 ||= this.initService(e15, i3); i3 < t3 + n3 && i3 < a3.length; i3++) r3 = a3[i3], ze2(r3) ? i3 = this.handleText(i3, o3) : r3 === 24 ? i3 = this.multiByteCharacter(i3, o3) : r3 === 16 ? i3 = this.extendedCommands(i3, o3) : 128 <= r3 && r3 <= 135 ? i3 = this.setCurrentWindow(i3, o3) : 152 <= r3 && r3 <= 159 ? i3 = this.defineWindow(i3, o3) : r3 === 136 ? i3 = this.clearWindows(i3, o3) : r3 === 140 ? i3 = this.deleteWindows(i3, o3) : r3 === 137 ? i3 = this.displayWindows(i3, o3) : r3 === 138 ? i3 = this.hideWindows(i3, o3) : r3 === 139 ? i3 = this.toggleWindows(i3, o3) : r3 === 151 ? i3 = this.setWindowAttributes(i3, o3) : r3 === 144 ? i3 = this.setPenAttributes(i3, o3) : r3 === 145 ? i3 = this.setPenColor(i3, o3) : r3 === 146 ? i3 = this.setPenLocation(i3, o3) : r3 === 143 ? o3 = this.reset(i3, o3) : r3 === 8 ? o3.currentWindow.backspace() : r3 === 12 ? o3.currentWindow.clearText() : r3 === 13 ? o3.currentWindow.pendingNewLine = true : r3 === 14 ? o3.currentWindow.clearText() : r3 === 141 && i3++;
  }, I2.prototype.extendedCommands = function(e15, t3) {
    var n3 = this.current708Packet.data[++e15];
    return ze2(n3) && (e15 = this.handleText(e15, t3, { isExtended: true })), e15;
  }, I2.prototype.getPts = function(e15) {
    return this.current708Packet.ptsVals[Math.floor(e15 / 2)];
  }, I2.prototype.initService = function(e15, t3) {
    var n3 = `SERVICE` + e15, r3 = this, n3, i3;
    return n3 in this.serviceEncodings && (i3 = this.serviceEncodings[n3]), this.services[e15] = new Ve2(e15, i3, r3), this.services[e15].init(this.getPts(t3), function(t4) {
      r3.flushDisplayed(t4, r3.services[e15]);
    }), this.services[e15];
  }, I2.prototype.handleText = function(e15, t3, n3) {
    var r3 = n3 && n3.isExtended, i3 = n3 && n3.isMultiByte, a3 = this.current708Packet.data, o3 = r3 ? 4096 : 0, s3 = a3[e15], c3 = a3[e15 + 1], l3 = t3.currentWindow, u3, d3;
    function f3(e16) {
      return e16.map((e17) => (`0` + (e17 & 255).toString(16)).slice(-2)).join(``);
    }
    if (i3 ? (d3 = [s3, c3], e15++) : d3 = [s3], t3.textDecoder_ && !r3) u3 = t3.textDecoder_.decode(new Uint8Array(d3));
    else if (i3) {
      let e16 = f3(d3);
      u3 = String.fromCharCode(parseInt(e16, 16));
    } else u3 = Re2(o3 | s3);
    return l3.pendingNewLine && !l3.isEmpty() && l3.newLine(this.getPts(e15)), l3.pendingNewLine = false, l3.addText(u3), e15;
  }, I2.prototype.multiByteCharacter = function(e15, t3) {
    var n3 = this.current708Packet.data, r3 = n3[e15 + 1], i3 = n3[e15 + 2];
    return ze2(r3) && ze2(i3) && (e15 = this.handleText(++e15, t3, { isMultiByte: true })), e15;
  }, I2.prototype.setCurrentWindow = function(e15, t3) {
    var n3 = this.current708Packet.data[e15] & 7;
    return t3.setCurrentWindow(n3), e15;
  }, I2.prototype.defineWindow = function(e15, t3) {
    var n3 = this.current708Packet.data, r3 = n3[e15], i3 = r3 & 7;
    t3.setCurrentWindow(i3);
    var a3 = t3.currentWindow;
    return r3 = n3[++e15], a3.visible = (r3 & 32) >> 5, a3.rowLock = (r3 & 16) >> 4, a3.columnLock = (r3 & 8) >> 3, a3.priority = r3 & 7, r3 = n3[++e15], a3.relativePositioning = (r3 & 128) >> 7, a3.anchorVertical = r3 & 127, r3 = n3[++e15], a3.anchorHorizontal = r3, r3 = n3[++e15], a3.anchorPoint = (r3 & 240) >> 4, a3.rowCount = r3 & 15, r3 = n3[++e15], a3.columnCount = r3 & 63, r3 = n3[++e15], a3.windowStyle = (r3 & 56) >> 3, a3.penStyle = r3 & 7, a3.virtualRowCount = a3.rowCount + 1, e15;
  }, I2.prototype.setWindowAttributes = function(e15, t3) {
    var n3 = this.current708Packet.data, r3 = n3[e15], i3 = t3.currentWindow.winAttr;
    return r3 = n3[++e15], i3.fillOpacity = (r3 & 192) >> 6, i3.fillRed = (r3 & 48) >> 4, i3.fillGreen = (r3 & 12) >> 2, i3.fillBlue = r3 & 3, r3 = n3[++e15], i3.borderType = (r3 & 192) >> 6, i3.borderRed = (r3 & 48) >> 4, i3.borderGreen = (r3 & 12) >> 2, i3.borderBlue = r3 & 3, r3 = n3[++e15], i3.borderType += (r3 & 128) >> 5, i3.wordWrap = (r3 & 64) >> 6, i3.printDirection = (r3 & 48) >> 4, i3.scrollDirection = (r3 & 12) >> 2, i3.justify = r3 & 3, r3 = n3[++e15], i3.effectSpeed = (r3 & 240) >> 4, i3.effectDirection = (r3 & 12) >> 2, i3.displayEffect = r3 & 3, e15;
  }, I2.prototype.flushDisplayed = function(e15, t3) {
    for (var n3 = [], r3 = 0; r3 < 8; r3++) t3.windows[r3].visible && !t3.windows[r3].isEmpty() && n3.push(t3.windows[r3].getText());
    t3.endPts = e15, t3.text = n3.join(`

`), this.pushCaption(t3), t3.startPts = e15;
  }, I2.prototype.pushCaption = function(e15) {
    e15.text !== `` && (this.trigger(`data`, { startPts: e15.startPts, endPts: e15.endPts, text: e15.text, stream: `cc708_` + e15.serviceNum }), e15.text = ``, e15.startPts = e15.endPts);
  }, I2.prototype.displayWindows = function(e15, t3) {
    var n3 = this.current708Packet.data[++e15], r3 = this.getPts(e15);
    this.flushDisplayed(r3, t3);
    for (var i3 = 0; i3 < 8; i3++) n3 & 1 << i3 && (t3.windows[i3].visible = 1);
    return e15;
  }, I2.prototype.hideWindows = function(e15, t3) {
    var n3 = this.current708Packet.data[++e15], r3 = this.getPts(e15);
    this.flushDisplayed(r3, t3);
    for (var i3 = 0; i3 < 8; i3++) n3 & 1 << i3 && (t3.windows[i3].visible = 0);
    return e15;
  }, I2.prototype.toggleWindows = function(e15, t3) {
    var n3 = this.current708Packet.data[++e15], r3 = this.getPts(e15);
    this.flushDisplayed(r3, t3);
    for (var i3 = 0; i3 < 8; i3++) n3 & 1 << i3 && (t3.windows[i3].visible ^= 1);
    return e15;
  }, I2.prototype.clearWindows = function(e15, t3) {
    var n3 = this.current708Packet.data[++e15], r3 = this.getPts(e15);
    this.flushDisplayed(r3, t3);
    for (var i3 = 0; i3 < 8; i3++) n3 & 1 << i3 && t3.windows[i3].clearText();
    return e15;
  }, I2.prototype.deleteWindows = function(e15, t3) {
    var n3 = this.current708Packet.data[++e15], r3 = this.getPts(e15);
    this.flushDisplayed(r3, t3);
    for (var i3 = 0; i3 < 8; i3++) n3 & 1 << i3 && t3.windows[i3].reset();
    return e15;
  }, I2.prototype.setPenAttributes = function(e15, t3) {
    var n3 = this.current708Packet.data, r3 = n3[e15], i3 = t3.currentWindow.penAttr;
    return r3 = n3[++e15], i3.textTag = (r3 & 240) >> 4, i3.offset = (r3 & 12) >> 2, i3.penSize = r3 & 3, r3 = n3[++e15], i3.italics = (r3 & 128) >> 7, i3.underline = (r3 & 64) >> 6, i3.edgeType = (r3 & 56) >> 3, i3.fontStyle = r3 & 7, e15;
  }, I2.prototype.setPenColor = function(e15, t3) {
    var n3 = this.current708Packet.data, r3 = n3[e15], i3 = t3.currentWindow.penColor;
    return r3 = n3[++e15], i3.fgOpacity = (r3 & 192) >> 6, i3.fgRed = (r3 & 48) >> 4, i3.fgGreen = (r3 & 12) >> 2, i3.fgBlue = r3 & 3, r3 = n3[++e15], i3.bgOpacity = (r3 & 192) >> 6, i3.bgRed = (r3 & 48) >> 4, i3.bgGreen = (r3 & 12) >> 2, i3.bgBlue = r3 & 3, r3 = n3[++e15], i3.edgeRed = (r3 & 48) >> 4, i3.edgeGreen = (r3 & 12) >> 2, i3.edgeBlue = r3 & 3, e15;
  }, I2.prototype.setPenLocation = function(e15, t3) {
    var n3 = this.current708Packet.data, r3 = n3[e15], i3 = t3.currentWindow.penLoc;
    return t3.currentWindow.pendingNewLine = true, r3 = n3[++e15], i3.row = r3 & 15, r3 = n3[++e15], i3.column = r3 & 63, e15;
  }, I2.prototype.reset = function(e15, t3) {
    var n3 = this.getPts(e15);
    return this.flushDisplayed(n3, t3), this.initService(t3.serviceNum, e15);
  };
  var He2 = { 42: 225, 92: 233, 94: 237, 95: 243, 96: 250, 123: 231, 124: 247, 125: 209, 126: 241, 127: 9608, 304: 174, 305: 176, 306: 189, 307: 191, 308: 8482, 309: 162, 310: 163, 311: 9834, 312: 224, 313: 160, 314: 232, 315: 226, 316: 234, 317: 238, 318: 244, 319: 251, 544: 193, 545: 201, 546: 211, 547: 218, 548: 220, 549: 252, 550: 8216, 551: 161, 552: 42, 553: 39, 554: 8212, 555: 169, 556: 8480, 557: 8226, 558: 8220, 559: 8221, 560: 192, 561: 194, 562: 199, 563: 200, 564: 202, 565: 203, 566: 235, 567: 206, 568: 207, 569: 239, 570: 212, 571: 217, 572: 249, 573: 219, 574: 171, 575: 187, 800: 195, 801: 227, 802: 205, 803: 204, 804: 236, 805: 210, 806: 242, 807: 213, 808: 245, 809: 123, 810: 125, 811: 92, 812: 94, 813: 95, 814: 124, 815: 126, 816: 196, 817: 228, 818: 214, 819: 246, 820: 223, 821: 165, 822: 164, 823: 9474, 824: 197, 825: 229, 826: 216, 827: 248, 828: 9484, 829: 9488, 830: 9492, 831: 9496 }, Ue2 = function(e15) {
    return e15 === null ? `` : (e15 = He2[e15] || e15, String.fromCharCode(e15));
  }, We2 = 14, Ge2 = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152], Ke2 = function() {
    for (var e15 = [], t3 = We2 + 1; t3--; ) e15.push({ text: ``, indent: 0, offset: 0 });
    return e15;
  }, L2 = function(e15, t3) {
    L2.prototype.init.call(this), this.field_ = e15 || 0, this.dataChannel_ = t3 || 0, this.name_ = `CC` + ((this.field_ << 1 | this.dataChannel_) + 1), this.setConstants(), this.reset(), this.push = function(e16) {
      var t4 = e16.ccData & 32639, n3, r3, i3, a3;
      if (t4 === this.lastControlCode_) {
        this.lastControlCode_ = null;
        return;
      }
      if ((t4 & 61440) == 4096 ? this.lastControlCode_ = t4 : t4 !== this.PADDING_ && (this.lastControlCode_ = null), r3 = t4 >>> 8, i3 = t4 & 255, t4 !== this.PADDING_) if (t4 === this.RESUME_CAPTION_LOADING_) this.mode_ = `popOn`;
      else if (t4 === this.END_OF_CAPTION_) this.mode_ = `popOn`, this.clearFormatting(e16.pts), this.flushDisplayed(e16.pts), n3 = this.displayed_, this.displayed_ = this.nonDisplayed_, this.nonDisplayed_ = n3, this.startPts_ = e16.pts;
      else if (t4 === this.ROLL_UP_2_ROWS_) this.rollUpRows_ = 2, this.setRollUp(e16.pts);
      else if (t4 === this.ROLL_UP_3_ROWS_) this.rollUpRows_ = 3, this.setRollUp(e16.pts);
      else if (t4 === this.ROLL_UP_4_ROWS_) this.rollUpRows_ = 4, this.setRollUp(e16.pts);
      else if (t4 === this.CARRIAGE_RETURN_) this.clearFormatting(e16.pts), this.flushDisplayed(e16.pts), this.shiftRowsUp_(), this.startPts_ = e16.pts;
      else if (t4 === this.BACKSPACE_) this.mode_ === `popOn` ? this.nonDisplayed_[this.row_].text = this.nonDisplayed_[this.row_].text.slice(0, -1) : this.displayed_[this.row_].text = this.displayed_[this.row_].text.slice(0, -1);
      else if (t4 === this.ERASE_DISPLAYED_MEMORY_) this.flushDisplayed(e16.pts), this.displayed_ = Ke2();
      else if (t4 === this.ERASE_NON_DISPLAYED_MEMORY_) this.nonDisplayed_ = Ke2();
      else if (t4 === this.RESUME_DIRECT_CAPTIONING_) this.mode_ !== `paintOn` && (this.flushDisplayed(e16.pts), this.displayed_ = Ke2()), this.mode_ = `paintOn`, this.startPts_ = e16.pts;
      else if (this.isSpecialCharacter(r3, i3)) r3 = (r3 & 3) << 8, a3 = Ue2(r3 | i3), this[this.mode_](e16.pts, a3), this.column_++;
      else if (this.isExtCharacter(r3, i3)) this.mode_ === `popOn` ? this.nonDisplayed_[this.row_].text = this.nonDisplayed_[this.row_].text.slice(0, -1) : this.displayed_[this.row_].text = this.displayed_[this.row_].text.slice(0, -1), r3 = (r3 & 3) << 8, a3 = Ue2(r3 | i3), this[this.mode_](e16.pts, a3), this.column_++;
      else if (this.isMidRowCode(r3, i3)) this.clearFormatting(e16.pts), this[this.mode_](e16.pts, ` `), this.column_++, (i3 & 14) == 14 && this.addFormatting(e16.pts, [`i`]), (i3 & 1) == 1 && this.addFormatting(e16.pts, [`u`]);
      else if (this.isOffsetControlCode(r3, i3)) {
        let e17 = i3 & 3;
        this.nonDisplayed_[this.row_].offset = e17, this.column_ += e17;
      } else if (this.isPAC(r3, i3)) {
        var o3 = Ge2.indexOf(t4 & 7968);
        if (this.mode_ === `rollUp` && (o3 - this.rollUpRows_ + 1 < 0 && (o3 = this.rollUpRows_ - 1), this.setRollUp(e16.pts, o3)), o3 !== this.row_ && o3 >= 0 && o3 <= 14 && (this.clearFormatting(e16.pts), this.row_ = o3), i3 & 1 && this.formatting_.indexOf(`u`) === -1 && this.addFormatting(e16.pts, [`u`]), (t4 & 16) == 16) {
          let e17 = (t4 & 14) >> 1;
          this.column_ = e17 * 4, this.nonDisplayed_[this.row_].indent += e17;
        }
        this.isColorPAC(i3) && (i3 & 14) == 14 && this.addFormatting(e16.pts, [`i`]);
      } else this.isNormalChar(r3) && (i3 === 0 && (i3 = null), a3 = Ue2(r3), a3 += Ue2(i3), this[this.mode_](e16.pts, a3), this.column_ += a3.length);
    };
  };
  L2.prototype = new Fe2(), L2.prototype.flushDisplayed = function(e15) {
    let t3 = (e16) => {
      this.trigger(`log`, { level: `warn`, message: `Skipping a malformed 608 caption at index ` + e16 + `.` });
    }, n3 = [];
    this.displayed_.forEach((e16, r3) => {
      if (e16 && e16.text && e16.text.length) {
        try {
          e16.text = e16.text.trim();
        } catch {
          t3(r3);
        }
        e16.text.length && n3.push({ text: e16.text, line: r3 + 1, position: 10 + Math.min(70, e16.indent * 10) + e16.offset * 2.5 });
      } else e16 ?? t3(r3);
    }), n3.length && this.trigger(`data`, { startPts: this.startPts_, endPts: e15, content: n3, stream: this.name_ });
  }, L2.prototype.reset = function() {
    this.mode_ = `popOn`, this.topRow_ = 0, this.startPts_ = 0, this.displayed_ = Ke2(), this.nonDisplayed_ = Ke2(), this.lastControlCode_ = null, this.column_ = 0, this.row_ = We2, this.rollUpRows_ = 2, this.formatting_ = [];
  }, L2.prototype.setConstants = function() {
    this.dataChannel_ === 0 ? (this.BASE_ = 16, this.EXT_ = 17, this.CONTROL_ = (20 | this.field_) << 8, this.OFFSET_ = 23) : this.dataChannel_ === 1 && (this.BASE_ = 24, this.EXT_ = 25, this.CONTROL_ = (28 | this.field_) << 8, this.OFFSET_ = 31), this.PADDING_ = 0, this.RESUME_CAPTION_LOADING_ = this.CONTROL_ | 32, this.END_OF_CAPTION_ = this.CONTROL_ | 47, this.ROLL_UP_2_ROWS_ = this.CONTROL_ | 37, this.ROLL_UP_3_ROWS_ = this.CONTROL_ | 38, this.ROLL_UP_4_ROWS_ = this.CONTROL_ | 39, this.CARRIAGE_RETURN_ = this.CONTROL_ | 45, this.RESUME_DIRECT_CAPTIONING_ = this.CONTROL_ | 41, this.BACKSPACE_ = this.CONTROL_ | 33, this.ERASE_DISPLAYED_MEMORY_ = this.CONTROL_ | 44, this.ERASE_NON_DISPLAYED_MEMORY_ = this.CONTROL_ | 46;
  }, L2.prototype.isSpecialCharacter = function(e15, t3) {
    return e15 === this.EXT_ && t3 >= 48 && t3 <= 63;
  }, L2.prototype.isExtCharacter = function(e15, t3) {
    return (e15 === this.EXT_ + 1 || e15 === this.EXT_ + 2) && t3 >= 32 && t3 <= 63;
  }, L2.prototype.isMidRowCode = function(e15, t3) {
    return e15 === this.EXT_ && t3 >= 32 && t3 <= 47;
  }, L2.prototype.isOffsetControlCode = function(e15, t3) {
    return e15 === this.OFFSET_ && t3 >= 33 && t3 <= 35;
  }, L2.prototype.isPAC = function(e15, t3) {
    return e15 >= this.BASE_ && e15 < this.BASE_ + 8 && t3 >= 64 && t3 <= 127;
  }, L2.prototype.isColorPAC = function(e15) {
    return e15 >= 64 && e15 <= 79 || e15 >= 96 && e15 <= 127;
  }, L2.prototype.isNormalChar = function(e15) {
    return e15 >= 32 && e15 <= 127;
  }, L2.prototype.setRollUp = function(e15, t3) {
    if (this.mode_ !== `rollUp` && (this.row_ = We2, this.mode_ = `rollUp`, this.flushDisplayed(e15), this.nonDisplayed_ = Ke2(), this.displayed_ = Ke2()), t3 !== void 0 && t3 !== this.row_) for (var n3 = 0; n3 < this.rollUpRows_; n3++) this.displayed_[t3 - n3] = this.displayed_[this.row_ - n3], this.displayed_[this.row_ - n3] = { text: ``, indent: 0, offset: 0 };
    t3 === void 0 && (t3 = this.row_), this.topRow_ = t3 - this.rollUpRows_ + 1;
  }, L2.prototype.addFormatting = function(e15, t3) {
    this.formatting_ = this.formatting_.concat(t3);
    var n3 = t3.reduce(function(e16, t4) {
      return e16 + `<` + t4 + `>`;
    }, ``);
    this[this.mode_](e15, n3);
  }, L2.prototype.clearFormatting = function(e15) {
    if (this.formatting_.length) {
      var t3 = this.formatting_.reverse().reduce(function(e16, t4) {
        return e16 + `</` + t4 + `>`;
      }, ``);
      this.formatting_ = [], this[this.mode_](e15, t3);
    }
  }, L2.prototype.popOn = function(e15, t3) {
    var n3 = this.nonDisplayed_[this.row_].text;
    n3 += t3, this.nonDisplayed_[this.row_].text = n3;
  }, L2.prototype.rollUp = function(e15, t3) {
    var n3 = this.displayed_[this.row_].text;
    n3 += t3, this.displayed_[this.row_].text = n3;
  }, L2.prototype.shiftRowsUp_ = function() {
    var e15;
    for (e15 = 0; e15 < this.topRow_; e15++) this.displayed_[e15] = { text: ``, indent: 0, offset: 0 };
    for (e15 = this.row_ + 1; e15 < We2 + 1; e15++) this.displayed_[e15] = { text: ``, indent: 0, offset: 0 };
    for (e15 = this.topRow_; e15 < this.row_; e15++) this.displayed_[e15] = this.displayed_[e15 + 1];
    this.displayed_[this.row_] = { text: ``, indent: 0, offset: 0 };
  }, L2.prototype.paintOn = function(e15, t3) {
    var n3 = this.displayed_[this.row_].text;
    n3 += t3, this.displayed_[this.row_].text = n3;
  };
  var qe2 = { CaptionStream: Le2, Cea608Stream: L2, Cea708Stream: I2 }, Je2 = { H264_STREAM_TYPE: 27, ADTS_STREAM_TYPE: 15, METADATA_STREAM_TYPE: 21 }, Ye2 = n2, Xe2 = 8589934592, Ze2 = 4294967296, Qe2 = `shared`, $e2 = function(e15, t3) {
    var n3 = 1;
    for (e15 > t3 && (n3 = -1); Math.abs(t3 - e15) > Ze2; ) e15 += n3 * Xe2;
    return e15;
  }, et2 = function(e15) {
    var t3, n3;
    et2.prototype.init.call(this), this.type_ = e15 || Qe2, this.push = function(e16) {
      if (e16.type === `metadata`) {
        this.trigger(`data`, e16);
        return;
      }
      this.type_ !== Qe2 && e16.type !== this.type_ || (n3 === void 0 && (n3 = e16.dts), e16.dts = $e2(e16.dts, n3), e16.pts = $e2(e16.pts, n3), t3 = e16.dts, this.trigger(`data`, e16));
    }, this.flush = function() {
      n3 = t3, this.trigger(`done`);
    }, this.endTimeline = function() {
      this.flush(), this.trigger(`endedtimeline`);
    }, this.discontinuity = function() {
      n3 = void 0, t3 = void 0;
    }, this.reset = function() {
      this.discontinuity(), this.trigger(`reset`);
    };
  };
  et2.prototype = new Ye2();
  var tt2 = { TimestampRolloverStream: et2, handleRollover: $e2 }, nt2 = { typedArrayIndexOf: (e15, t3, n3) => {
    if (!e15) return -1;
    for (var r3 = n3; r3 < e15.length; r3++) if (e15[r3] === t3) return r3;
    return -1;
  } }.typedArrayIndexOf, rt2 = { Iso88591: 0, Utf16: 1, Utf16be: 2, Utf8: 3 }, it2 = function(e15, t3, n3) {
    var r3, i3 = ``;
    for (r3 = t3; r3 < n3; r3++) i3 += `%` + (`00` + e15[r3].toString(16)).slice(-2);
    return i3;
  }, at2 = function(e15, t3, n3) {
    return decodeURIComponent(it2(e15, t3, n3));
  }, ot2 = function(e15, t3, n3) {
    return unescape(it2(e15, t3, n3));
  }, st2 = function(e15) {
    return e15[0] << 21 | e15[1] << 14 | e15[2] << 7 | e15[3];
  }, ct2 = { APIC: function(e15) {
    var t3 = 1, n3, r3;
    e15.data[0] === rt2.Utf8 && (n3 = nt2(e15.data, 0, t3), !(n3 < 0) && (e15.mimeType = ot2(e15.data, t3, n3), t3 = n3 + 1, e15.pictureType = e15.data[t3], t3++, r3 = nt2(e15.data, 0, t3), !(r3 < 0) && (e15.description = at2(e15.data, t3, r3), t3 = r3 + 1, e15.mimeType === `-->` ? e15.url = ot2(e15.data, t3, e15.data.length) : e15.pictureData = e15.data.subarray(t3, e15.data.length))));
  }, "T*": function(e15) {
    e15.data[0] === rt2.Utf8 && (e15.value = at2(e15.data, 1, e15.data.length).replace(/\0*$/, ``), e15.values = e15.value.split(`\0`));
  }, TXXX: function(e15) {
    var t3;
    e15.data[0] === rt2.Utf8 && (t3 = nt2(e15.data, 0, 1), t3 !== -1 && (e15.description = at2(e15.data, 1, t3), e15.value = at2(e15.data, t3 + 1, e15.data.length).replace(/\0*$/, ``), e15.data = e15.value));
  }, "W*": function(e15) {
    e15.url = ot2(e15.data, 0, e15.data.length).replace(/\0.*$/, ``);
  }, WXXX: function(e15) {
    var t3;
    e15.data[0] === rt2.Utf8 && (t3 = nt2(e15.data, 0, 1), t3 !== -1 && (e15.description = at2(e15.data, 1, t3), e15.url = ot2(e15.data, t3 + 1, e15.data.length).replace(/\0.*$/, ``)));
  }, PRIV: function(e15) {
    var t3;
    for (t3 = 0; t3 < e15.data.length; t3++) if (e15.data[t3] === 0) {
      e15.owner = ot2(e15.data, 0, t3);
      break;
    }
    e15.privateData = e15.data.subarray(t3 + 1), e15.data = e15.privateData;
  } }, lt2 = { parseId3Frames: function(e15) {
    var t3, n3, r3 = 10, i3 = 0, a3 = [];
    if (!(e15.length < 10 || e15[0] !== 73 || e15[1] !== 68 || e15[2] !== 51)) {
      i3 = st2(e15.subarray(6, 10)), i3 += 10, e15[5] & 64 && (r3 += 4, r3 += st2(e15.subarray(10, 14)), i3 -= st2(e15.subarray(16, 20)));
      do {
        if (t3 = st2(e15.subarray(r3 + 4, r3 + 8)), t3 < 1) break;
        n3 = String.fromCharCode(e15[r3], e15[r3 + 1], e15[r3 + 2], e15[r3 + 3]);
        var o3 = { id: n3, data: e15.subarray(r3 + 10, r3 + t3 + 10) };
        o3.key = o3.id, ct2[o3.id] ? ct2[o3.id](o3) : o3.id[0] === `T` ? ct2[`T*`](o3) : o3.id[0] === `W` && ct2[`W*`](o3), a3.push(o3), r3 += 10, r3 += t3;
      } while (r3 < i3);
      return a3;
    }
  }, parseSyncSafeInteger: st2, frameParsers: ct2 }, ut2 = n2, dt2 = Je2, ft2 = lt2, pt2 = function(e15) {
    var t3 = { descriptor: e15 && e15.descriptor }, n3 = 0, r3 = [], i3 = 0, a3;
    if (pt2.prototype.init.call(this), this.dispatchType = dt2.METADATA_STREAM_TYPE.toString(16), t3.descriptor) for (a3 = 0; a3 < t3.descriptor.length; a3++) this.dispatchType += (`00` + t3.descriptor[a3].toString(16)).slice(-2);
    this.push = function(e16) {
      var t4, a4, o3, s3, c3, l3;
      if (e16.type === `timed-metadata`) {
        if (e16.dataAlignmentIndicator && (i3 = 0, r3.length = 0), r3.length === 0 && (e16.data.length < 10 || e16.data[0] !== 73 || e16.data[1] !== 68 || e16.data[2] !== 51)) {
          this.trigger(`log`, { level: `warn`, message: `Skipping unrecognized metadata packet` });
          return;
        }
        if (r3.push(e16), i3 += e16.data.byteLength, r3.length === 1 && (n3 = ft2.parseSyncSafeInteger(e16.data.subarray(6, 10)), n3 += 10), !(i3 < n3)) {
          for (t4 = { data: new Uint8Array(n3), frames: [], pts: r3[0].pts, dts: r3[0].dts }, c3 = 0; c3 < n3; ) t4.data.set(r3[0].data.subarray(0, n3 - c3), c3), c3 += r3[0].data.byteLength, i3 -= r3[0].data.byteLength, r3.shift();
          a4 = 10, t4.data[5] & 64 && (a4 += 4, a4 += ft2.parseSyncSafeInteger(t4.data.subarray(10, 14)), n3 -= ft2.parseSyncSafeInteger(t4.data.subarray(16, 20)));
          do {
            if (o3 = ft2.parseSyncSafeInteger(t4.data.subarray(a4 + 4, a4 + 8)), o3 < 1) {
              this.trigger(`log`, { level: `warn`, message: `Malformed ID3 frame encountered. Skipping remaining metadata parsing.` });
              break;
            }
            if (l3 = String.fromCharCode(t4.data[a4], t4.data[a4 + 1], t4.data[a4 + 2], t4.data[a4 + 3]), s3 = { id: l3, data: t4.data.subarray(a4 + 10, a4 + o3 + 10) }, s3.key = s3.id, ft2.frameParsers[s3.id] ? ft2.frameParsers[s3.id](s3) : s3.id[0] === `T` ? ft2.frameParsers[`T*`](s3) : s3.id[0] === `W` && ft2.frameParsers[`W*`](s3), s3.owner === `com.apple.streaming.transportStreamTimestamp`) {
              var u3 = s3.data, d3 = (u3[3] & 1) << 30 | u3[4] << 22 | u3[5] << 14 | u3[6] << 6 | u3[7] >>> 2;
              d3 *= 4, d3 += u3[7] & 3, s3.timeStamp = d3, t4.pts === void 0 && t4.dts === void 0 && (t4.pts = s3.timeStamp, t4.dts = s3.timeStamp), this.trigger(`timestamp`, s3);
            }
            t4.frames.push(s3), a4 += 10, a4 += o3;
          } while (a4 < n3);
          this.trigger(`data`, t4);
        }
      }
    };
  };
  pt2.prototype = new ut2();
  var mt2 = pt2, ht2 = n2, gt2 = qe2, _t2 = Je2, vt2 = tt2.TimestampRolloverStream, yt2, bt2, xt2, St2 = 188, Ct2 = 71;
  yt2 = function() {
    var e15 = new Uint8Array(St2), t3 = 0;
    yt2.prototype.init.call(this), this.push = function(n3) {
      var r3 = 0, i3 = St2, a3;
      for (t3 ? (a3 = new Uint8Array(n3.byteLength + t3), a3.set(e15.subarray(0, t3)), a3.set(n3, t3), t3 = 0) : a3 = n3; i3 < a3.byteLength; ) {
        if (a3[r3] === Ct2 && a3[i3] === Ct2) {
          this.trigger(`data`, a3.subarray(r3, i3)), r3 += St2, i3 += St2;
          continue;
        }
        r3++, i3++;
      }
      r3 < a3.byteLength && (e15.set(a3.subarray(r3), 0), t3 = a3.byteLength - r3);
    }, this.flush = function() {
      t3 === St2 && e15[0] === Ct2 && (this.trigger(`data`, e15), t3 = 0), this.trigger(`done`);
    }, this.endTimeline = function() {
      this.flush(), this.trigger(`endedtimeline`);
    }, this.reset = function() {
      t3 = 0, this.trigger(`reset`);
    };
  }, yt2.prototype = new ht2(), bt2 = function() {
    var e15, t3, n3, r3;
    bt2.prototype.init.call(this), r3 = this, this.packetsWaitingForPmt = [], this.programMapTable = void 0, e15 = function(e16, r4) {
      var i3 = 0;
      r4.payloadUnitStartIndicator && (i3 += e16[i3] + 1), r4.type === `pat` ? t3(e16.subarray(i3), r4) : n3(e16.subarray(i3), r4);
    }, t3 = function(e16, t4) {
      t4.section_number = e16[7], t4.last_section_number = e16[8], r3.pmtPid = (e16[10] & 31) << 8 | e16[11], t4.pmtPid = r3.pmtPid;
    }, n3 = function(e16, t4) {
      var n4, i3, a3, o3;
      if (e16[5] & 1) {
        for (r3.programMapTable = { video: null, audio: null, "timed-metadata": {} }, n4 = (e16[1] & 15) << 8 | e16[2], i3 = 3 + n4 - 4, a3 = (e16[10] & 15) << 8 | e16[11], o3 = 12 + a3; o3 < i3; ) {
          var s3 = e16[o3], c3 = (e16[o3 + 1] & 31) << 8 | e16[o3 + 2];
          s3 === _t2.H264_STREAM_TYPE && r3.programMapTable.video === null ? r3.programMapTable.video = c3 : s3 === _t2.ADTS_STREAM_TYPE && r3.programMapTable.audio === null ? r3.programMapTable.audio = c3 : s3 === _t2.METADATA_STREAM_TYPE && (r3.programMapTable[`timed-metadata`][c3] = s3), o3 += ((e16[o3 + 3] & 15) << 8 | e16[o3 + 4]) + 5;
        }
        t4.programMapTable = r3.programMapTable;
      }
    }, this.push = function(t4) {
      var n4 = {}, r4 = 4;
      if (n4.payloadUnitStartIndicator = !!(t4[1] & 64), n4.pid = t4[1] & 31, n4.pid <<= 8, n4.pid |= t4[2], (t4[3] & 48) >>> 4 > 1 && (r4 += t4[r4] + 1), n4.pid === 0) n4.type = `pat`, e15(t4.subarray(r4), n4), this.trigger(`data`, n4);
      else if (n4.pid === this.pmtPid) for (n4.type = `pmt`, e15(t4.subarray(r4), n4), this.trigger(`data`, n4); this.packetsWaitingForPmt.length; ) this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
      else this.programMapTable === void 0 ? this.packetsWaitingForPmt.push([t4, r4, n4]) : this.processPes_(t4, r4, n4);
    }, this.processPes_ = function(e16, t4, n4) {
      n4.pid === this.programMapTable.video ? n4.streamType = _t2.H264_STREAM_TYPE : n4.pid === this.programMapTable.audio ? n4.streamType = _t2.ADTS_STREAM_TYPE : n4.streamType = this.programMapTable[`timed-metadata`][n4.pid], n4.type = `pes`, n4.data = e16.subarray(t4), this.trigger(`data`, n4);
    };
  }, bt2.prototype = new ht2(), bt2.STREAM_TYPES = { h264: 27, adts: 15 }, xt2 = function() {
    var e15 = this, t3 = false, n3 = { data: [], size: 0 }, r3 = { data: [], size: 0 }, i3 = { data: [], size: 0 }, a3, o3 = function(e16, t4) {
      var n4;
      let r4 = e16[0] << 16 | e16[1] << 8 | e16[2];
      t4.data = new Uint8Array(), r4 === 1 && (t4.packetLength = 6 + (e16[4] << 8 | e16[5]), t4.dataAlignmentIndicator = (e16[6] & 4) != 0, n4 = e16[7], n4 & 192 && (t4.pts = (e16[9] & 14) << 27 | (e16[10] & 255) << 20 | (e16[11] & 254) << 12 | (e16[12] & 255) << 5 | (e16[13] & 254) >>> 3, t4.pts *= 4, t4.pts += (e16[13] & 6) >>> 1, t4.dts = t4.pts, n4 & 64 && (t4.dts = (e16[14] & 14) << 27 | (e16[15] & 255) << 20 | (e16[16] & 254) << 12 | (e16[17] & 255) << 5 | (e16[18] & 254) >>> 3, t4.dts *= 4, t4.dts += (e16[18] & 6) >>> 1)), t4.data = e16.subarray(9 + e16[8]));
    }, s3 = function(t4, n4, r4) {
      var i4 = new Uint8Array(t4.size), a4 = { type: n4 }, s4 = 0, c3 = 0, l3 = false, u3;
      if (!(!t4.data.length || t4.size < 9)) {
        for (a4.trackId = t4.data[0].pid, s4 = 0; s4 < t4.data.length; s4++) u3 = t4.data[s4], i4.set(u3.data, c3), c3 += u3.data.byteLength;
        o3(i4, a4), l3 = n4 === `video` || a4.packetLength <= t4.size, (r4 || l3) && (t4.size = 0, t4.data.length = 0), l3 && e15.trigger(`data`, a4);
      }
    };
    xt2.prototype.init.call(this), this.push = function(o4) {
      ({ pat: function() {
      }, pes: function() {
        var e16, t4;
        switch (o4.streamType) {
          case _t2.H264_STREAM_TYPE:
            e16 = n3, t4 = `video`;
            break;
          case _t2.ADTS_STREAM_TYPE:
            e16 = r3, t4 = `audio`;
            break;
          case _t2.METADATA_STREAM_TYPE:
            e16 = i3, t4 = `timed-metadata`;
            break;
          default:
            return;
        }
        o4.payloadUnitStartIndicator && s3(e16, t4, true), e16.data.push(o4), e16.size += o4.data.byteLength;
      }, pmt: function() {
        var n4 = { type: `metadata`, tracks: [] };
        a3 = o4.programMapTable, a3.video !== null && n4.tracks.push({ timelineStartInfo: { baseMediaDecodeTime: 0 }, id: +a3.video, codec: `avc`, type: `video` }), a3.audio !== null && n4.tracks.push({ timelineStartInfo: { baseMediaDecodeTime: 0 }, id: +a3.audio, codec: `adts`, type: `audio` }), t3 = true, e15.trigger(`data`, n4);
      } })[o4.type]();
    }, this.reset = function() {
      n3.size = 0, n3.data.length = 0, r3.size = 0, r3.data.length = 0, this.trigger(`reset`);
    }, this.flushStreams_ = function() {
      s3(n3, `video`), s3(r3, `audio`), s3(i3, `timed-metadata`);
    }, this.flush = function() {
      if (!t3 && a3) {
        var n4 = { type: `metadata`, tracks: [] };
        a3.video !== null && n4.tracks.push({ timelineStartInfo: { baseMediaDecodeTime: 0 }, id: +a3.video, codec: `avc`, type: `video` }), a3.audio !== null && n4.tracks.push({ timelineStartInfo: { baseMediaDecodeTime: 0 }, id: +a3.audio, codec: `adts`, type: `audio` }), e15.trigger(`data`, n4);
      }
      t3 = false, this.flushStreams_(), this.trigger(`done`);
    };
  }, xt2.prototype = new ht2();
  var wt2 = { PAT_PID: 0, MP2T_PACKET_LENGTH: St2, TransportPacketStream: yt2, TransportParseStream: bt2, ElementaryStream: xt2, TimestampRolloverStream: vt2, CaptionStream: gt2.CaptionStream, Cea608Stream: gt2.Cea608Stream, Cea708Stream: gt2.Cea708Stream, MetadataStream: mt2 };
  for (var Tt2 in _t2) _t2.hasOwnProperty(Tt2) && (wt2[Tt2] = _t2[Tt2]);
  var Et2 = wt2, Dt2 = n2, Ot2 = N2.ONE_SECOND_IN_TS, kt2, At2 = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
  kt2 = function(e15) {
    var t3, n3 = 0;
    kt2.prototype.init.call(this), this.skipWarn_ = function(e16, t4) {
      this.trigger(`log`, { level: `warn`, message: `adts skiping bytes ${e16} to ${t4} in frame ${n3} outside syncword` });
    }, this.push = function(r3) {
      var i3 = 0, a3, o3, s3, c3, l3;
      if (e15 || (n3 = 0), r3.type === `audio`) {
        t3 && t3.length ? (s3 = t3, t3 = new Uint8Array(s3.byteLength + r3.data.byteLength), t3.set(s3), t3.set(r3.data, s3.byteLength)) : t3 = r3.data;
        for (var u3; i3 + 7 < t3.length; ) {
          if (t3[i3] !== 255 || (t3[i3 + 1] & 246) != 240) {
            typeof u3 != `number` && (u3 = i3), i3++;
            continue;
          }
          if (typeof u3 == `number` && (this.skipWarn_(u3, i3), u3 = null), o3 = (~t3[i3 + 1] & 1) * 2, a3 = (t3[i3 + 3] & 3) << 11 | t3[i3 + 4] << 3 | (t3[i3 + 5] & 224) >> 5, c3 = ((t3[i3 + 6] & 3) + 1) * 1024, l3 = c3 * Ot2 / At2[(t3[i3 + 2] & 60) >>> 2], t3.byteLength - i3 < a3) break;
          this.trigger(`data`, { pts: r3.pts + n3 * l3, dts: r3.dts + n3 * l3, sampleCount: c3, audioobjecttype: (t3[i3 + 2] >>> 6 & 3) + 1, channelcount: (t3[i3 + 2] & 1) << 2 | (t3[i3 + 3] & 192) >>> 6, samplerate: At2[(t3[i3 + 2] & 60) >>> 2], samplingfrequencyindex: (t3[i3 + 2] & 60) >>> 2, samplesize: 16, data: t3.subarray(i3 + 7 + o3, i3 + a3) }), n3++, i3 += a3;
        }
        typeof u3 == `number` && (this.skipWarn_(u3, i3), u3 = null), t3 = t3.subarray(i3);
      }
    }, this.flush = function() {
      n3 = 0, this.trigger(`done`);
    }, this.reset = function() {
      t3 = void 0, this.trigger(`reset`);
    }, this.endTimeline = function() {
      t3 = void 0, this.trigger(`endedtimeline`);
    };
  }, kt2.prototype = new Dt2();
  var jt2 = kt2, R2 = function(e15) {
    var t3 = e15.byteLength, n3 = 0, r3 = 0;
    this.length = function() {
      return 8 * t3;
    }, this.bitsAvailable = function() {
      return 8 * t3 + r3;
    }, this.loadWord = function() {
      var i3 = e15.byteLength - t3, a3 = new Uint8Array(4), o3 = Math.min(4, t3);
      if (o3 === 0) throw Error(`no bytes available`);
      a3.set(e15.subarray(i3, i3 + o3)), n3 = new DataView(a3.buffer).getUint32(0), r3 = o3 * 8, t3 -= o3;
    }, this.skipBits = function(e16) {
      var i3;
      r3 > e16 ? (n3 <<= e16, r3 -= e16) : (e16 -= r3, i3 = Math.floor(e16 / 8), e16 -= i3 * 8, t3 -= i3, this.loadWord(), n3 <<= e16, r3 -= e16);
    }, this.readBits = function(e16) {
      var i3 = Math.min(r3, e16), a3 = n3 >>> 32 - i3;
      return r3 -= i3, r3 > 0 ? n3 <<= i3 : t3 > 0 && this.loadWord(), i3 = e16 - i3, i3 > 0 ? a3 << i3 | this.readBits(i3) : a3;
    }, this.skipLeadingZeros = function() {
      var e16;
      for (e16 = 0; e16 < r3; ++e16) if (n3 & 2147483648 >>> e16) return n3 <<= e16, r3 -= e16, e16;
      return this.loadWord(), e16 + this.skipLeadingZeros();
    }, this.skipUnsignedExpGolomb = function() {
      this.skipBits(1 + this.skipLeadingZeros());
    }, this.skipExpGolomb = function() {
      this.skipBits(1 + this.skipLeadingZeros());
    }, this.readUnsignedExpGolomb = function() {
      var e16 = this.skipLeadingZeros();
      return this.readBits(e16 + 1) - 1;
    }, this.readExpGolomb = function() {
      var e16 = this.readUnsignedExpGolomb();
      return 1 & e16 ? 1 + e16 >>> 1 : -1 * (e16 >>> 1);
    }, this.readBoolean = function() {
      return this.readBits(1) === 1;
    }, this.readUnsignedByte = function() {
      return this.readBits(8);
    }, this.loadWord();
  }, Mt2 = n2, Nt2 = R2, Pt2, Ft2 = function() {
    var e15 = 0, t3, n3;
    Ft2.prototype.init.call(this), this.push = function(r3) {
      var i3;
      n3 ? (i3 = new Uint8Array(n3.byteLength + r3.data.byteLength), i3.set(n3), i3.set(r3.data, n3.byteLength), n3 = i3) : n3 = r3.data;
      for (var a3 = n3.byteLength; e15 < a3 - 3; e15++) if (n3[e15 + 2] === 1) {
        t3 = e15 + 5;
        break;
      }
      for (; t3 < a3; ) switch (n3[t3]) {
        case 0:
          if (n3[t3 - 1] !== 0) {
            t3 += 2;
            break;
          } else if (n3[t3 - 2] !== 0) {
            t3++;
            break;
          }
          e15 + 3 !== t3 - 2 && this.trigger(`data`, n3.subarray(e15 + 3, t3 - 2));
          do
            t3++;
          while (n3[t3] !== 1 && t3 < a3);
          e15 = t3 - 2, t3 += 3;
          break;
        case 1:
          if (n3[t3 - 1] !== 0 || n3[t3 - 2] !== 0) {
            t3 += 3;
            break;
          }
          this.trigger(`data`, n3.subarray(e15 + 3, t3 - 2)), e15 = t3 - 2, t3 += 3;
          break;
        default:
          t3 += 3;
          break;
      }
      n3 = n3.subarray(e15), t3 -= e15, e15 = 0;
    }, this.reset = function() {
      n3 = null, e15 = 0, this.trigger(`reset`);
    }, this.flush = function() {
      n3 && n3.byteLength > 3 && this.trigger(`data`, n3.subarray(e15 + 3)), n3 = null, e15 = 0, this.trigger(`done`);
    }, this.endTimeline = function() {
      this.flush(), this.trigger(`endedtimeline`);
    };
  }, It2;
  Ft2.prototype = new Mt2(), It2 = { 100: true, 110: true, 122: true, 244: true, 44: true, 83: true, 86: true, 118: true, 128: true, 138: true, 139: true, 134: true }, Pt2 = function() {
    var e15 = new Ft2(), t3, n3, r3, i3, a3, o3, s3;
    Pt2.prototype.init.call(this), t3 = this, this.push = function(t4) {
      t4.type === `video` && (n3 = t4.trackId, r3 = t4.pts, i3 = t4.dts, e15.push(t4));
    }, e15.on(`data`, function(e16) {
      var s4 = { trackId: n3, pts: r3, dts: i3, data: e16, nalUnitTypeCode: e16[0] & 31 };
      switch (s4.nalUnitTypeCode) {
        case 5:
          s4.nalUnitType = `slice_layer_without_partitioning_rbsp_idr`;
          break;
        case 6:
          s4.nalUnitType = `sei_rbsp`, s4.escapedRBSP = a3(e16.subarray(1));
          break;
        case 7:
          s4.nalUnitType = `seq_parameter_set_rbsp`, s4.escapedRBSP = a3(e16.subarray(1)), s4.config = o3(s4.escapedRBSP);
          break;
        case 8:
          s4.nalUnitType = `pic_parameter_set_rbsp`;
          break;
        case 9:
          s4.nalUnitType = `access_unit_delimiter_rbsp`;
          break;
      }
      t3.trigger(`data`, s4);
    }), e15.on(`done`, function() {
      t3.trigger(`done`);
    }), e15.on(`partialdone`, function() {
      t3.trigger(`partialdone`);
    }), e15.on(`reset`, function() {
      t3.trigger(`reset`);
    }), e15.on(`endedtimeline`, function() {
      t3.trigger(`endedtimeline`);
    }), this.flush = function() {
      e15.flush();
    }, this.partialFlush = function() {
      e15.partialFlush();
    }, this.reset = function() {
      e15.reset();
    }, this.endTimeline = function() {
      e15.endTimeline();
    }, s3 = function(e16, t4) {
      var n4 = 8, r4 = 8, i4, a4;
      for (i4 = 0; i4 < e16; i4++) r4 !== 0 && (a4 = t4.readExpGolomb(), r4 = (n4 + a4 + 256) % 256), n4 = r4 === 0 ? n4 : r4;
    }, a3 = function(e16) {
      for (var t4 = e16.byteLength, n4 = [], r4 = 1, i4, a4; r4 < t4 - 2; ) e16[r4] === 0 && e16[r4 + 1] === 0 && e16[r4 + 2] === 3 ? (n4.push(r4 + 2), r4 += 2) : r4++;
      if (n4.length === 0) return e16;
      i4 = t4 - n4.length, a4 = new Uint8Array(i4);
      var o4 = 0;
      for (r4 = 0; r4 < i4; o4++, r4++) o4 === n4[0] && (o4++, n4.shift()), a4[r4] = e16[o4];
      return a4;
    }, o3 = function(e16) {
      var t4 = 0, n4 = 0, r4 = 0, i4 = 0, a4, o4, c3, l3, u3, d3, f3, p3, m3, h3, g3, _3 = [1, 1], v3, y3;
      if (a4 = new Nt2(e16), o4 = a4.readUnsignedByte(), l3 = a4.readUnsignedByte(), c3 = a4.readUnsignedByte(), a4.skipUnsignedExpGolomb(), It2[o4] && (u3 = a4.readUnsignedExpGolomb(), u3 === 3 && a4.skipBits(1), a4.skipUnsignedExpGolomb(), a4.skipUnsignedExpGolomb(), a4.skipBits(1), a4.readBoolean())) for (g3 = u3 === 3 ? 12 : 8, y3 = 0; y3 < g3; y3++) a4.readBoolean() && s3(y3 < 6 ? 16 : 64, a4);
      if (a4.skipUnsignedExpGolomb(), d3 = a4.readUnsignedExpGolomb(), d3 === 0) a4.readUnsignedExpGolomb();
      else if (d3 === 1) for (a4.skipBits(1), a4.skipExpGolomb(), a4.skipExpGolomb(), f3 = a4.readUnsignedExpGolomb(), y3 = 0; y3 < f3; y3++) a4.skipExpGolomb();
      if (a4.skipUnsignedExpGolomb(), a4.skipBits(1), p3 = a4.readUnsignedExpGolomb(), m3 = a4.readUnsignedExpGolomb(), h3 = a4.readBits(1), h3 === 0 && a4.skipBits(1), a4.skipBits(1), a4.readBoolean() && (t4 = a4.readUnsignedExpGolomb(), n4 = a4.readUnsignedExpGolomb(), r4 = a4.readUnsignedExpGolomb(), i4 = a4.readUnsignedExpGolomb()), a4.readBoolean() && a4.readBoolean()) {
        switch (v3 = a4.readUnsignedByte(), v3) {
          case 1:
            _3 = [1, 1];
            break;
          case 2:
            _3 = [12, 11];
            break;
          case 3:
            _3 = [10, 11];
            break;
          case 4:
            _3 = [16, 11];
            break;
          case 5:
            _3 = [40, 33];
            break;
          case 6:
            _3 = [24, 11];
            break;
          case 7:
            _3 = [20, 11];
            break;
          case 8:
            _3 = [32, 11];
            break;
          case 9:
            _3 = [80, 33];
            break;
          case 10:
            _3 = [18, 11];
            break;
          case 11:
            _3 = [15, 11];
            break;
          case 12:
            _3 = [64, 33];
            break;
          case 13:
            _3 = [160, 99];
            break;
          case 14:
            _3 = [4, 3];
            break;
          case 15:
            _3 = [3, 2];
            break;
          case 16:
            _3 = [2, 1];
            break;
          case 255:
            _3 = [a4.readUnsignedByte() << 8 | a4.readUnsignedByte(), a4.readUnsignedByte() << 8 | a4.readUnsignedByte()];
            break;
        }
        _3 && _3[0] / _3[1];
      }
      return { profileIdc: o4, levelIdc: c3, profileCompatibility: l3, width: (p3 + 1) * 16 - t4 * 2 - n4 * 2, height: (2 - h3) * (m3 + 1) * 16 - r4 * 2 - i4 * 2, sarRatio: _3 };
    };
  }, Pt2.prototype = new Mt2();
  var Lt2 = { H264Stream: Pt2, NalByteStream: Ft2 }, Rt2 = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], zt2 = function(e15, t3) {
    var n3 = e15[t3 + 6] << 21 | e15[t3 + 7] << 14 | e15[t3 + 8] << 7 | e15[t3 + 9], r3 = (e15[t3 + 5] & 16) >> 4;
    return n3 = n3 >= 0 ? n3 : 0, r3 ? n3 + 20 : n3 + 10;
  }, Bt2 = function(e15, t3) {
    return e15.length - t3 < 10 || e15[t3] !== 73 || e15[t3 + 1] !== 68 || e15[t3 + 2] !== 51 ? t3 : (t3 += zt2(e15, t3), Bt2(e15, t3));
  }, Vt2 = function(e15) {
    var t3 = Bt2(e15, 0);
    return e15.length >= t3 + 2 && (e15[t3] & 255) == 255 && (e15[t3 + 1] & 240) == 240 && (e15[t3 + 1] & 22) == 16;
  }, Ht2 = function(e15) {
    return e15[0] << 21 | e15[1] << 14 | e15[2] << 7 | e15[3];
  }, Ut2 = function(e15, t3, n3) {
    var r3, i3 = ``;
    for (r3 = t3; r3 < n3; r3++) i3 += `%` + (`00` + e15[r3].toString(16)).slice(-2);
    return i3;
  }, Wt2 = function(e15, t3, n3) {
    return unescape(Ut2(e15, t3, n3));
  }, Gt2 = { isLikelyAacData: Vt2, parseId3TagSize: zt2, parseAdtsSize: function(e15, t3) {
    var n3 = (e15[t3 + 5] & 224) >> 5, r3 = e15[t3 + 4] << 3;
    return e15[t3 + 3] & 6144 | r3 | n3;
  }, parseType: function(e15, t3) {
    return e15[t3] === 73 && e15[t3 + 1] === 68 && e15[t3 + 2] === 51 ? `timed-metadata` : e15[t3] & true && (e15[t3 + 1] & 240) == 240 ? `audio` : null;
  }, parseSampleRate: function(e15) {
    for (var t3 = 0; t3 + 5 < e15.length; ) {
      if (e15[t3] !== 255 || (e15[t3 + 1] & 246) != 240) {
        t3++;
        continue;
      }
      return Rt2[(e15[t3 + 2] & 60) >>> 2];
    }
    return null;
  }, parseAacTimestamp: function(e15) {
    var t3 = 10, n3, r3, i3;
    e15[5] & 64 && (t3 += 4, t3 += Ht2(e15.subarray(10, 14)));
    do {
      if (n3 = Ht2(e15.subarray(t3 + 4, t3 + 8)), n3 < 1) return null;
      if (i3 = String.fromCharCode(e15[t3], e15[t3 + 1], e15[t3 + 2], e15[t3 + 3]), i3 === `PRIV`) {
        r3 = e15.subarray(t3 + 10, t3 + n3 + 10);
        for (var a3 = 0; a3 < r3.byteLength; a3++) if (r3[a3] === 0) {
          if (Wt2(r3, 0, a3) === `com.apple.streaming.transportStreamTimestamp`) {
            var o3 = r3.subarray(a3 + 1), s3 = (o3[3] & 1) << 30 | o3[4] << 22 | o3[5] << 14 | o3[6] << 6 | o3[7] >>> 2;
            return s3 *= 4, s3 += o3[7] & 3, s3;
          }
          break;
        }
      }
      t3 += 10, t3 += n3;
    } while (t3 < e15.byteLength);
    return null;
  } }, Kt2 = n2, qt2 = Gt2, Jt2 = function() {
    var e15 = new Uint8Array(), t3 = 0;
    Jt2.prototype.init.call(this), this.setTimestamp = function(e16) {
      t3 = e16;
    }, this.push = function(n3) {
      var r3 = 0, i3 = 0, a3, o3, s3, c3;
      for (e15.length ? (c3 = e15.length, e15 = new Uint8Array(n3.byteLength + c3), e15.set(e15.subarray(0, c3)), e15.set(n3, c3)) : e15 = n3; e15.length - i3 >= 3; ) {
        if (e15[i3] === 73 && e15[i3 + 1] === 68 && e15[i3 + 2] === 51) {
          if (e15.length - i3 < 10 || (r3 = qt2.parseId3TagSize(e15, i3), i3 + r3 > e15.length)) break;
          o3 = { type: `timed-metadata`, data: e15.subarray(i3, i3 + r3) }, this.trigger(`data`, o3), i3 += r3;
          continue;
        } else if ((e15[i3] & 255) == 255 && (e15[i3 + 1] & 240) == 240) {
          if (e15.length - i3 < 7 || (r3 = qt2.parseAdtsSize(e15, i3), i3 + r3 > e15.length)) break;
          s3 = { type: `audio`, data: e15.subarray(i3, i3 + r3), pts: t3, dts: t3 }, this.trigger(`data`, s3), i3 += r3;
          continue;
        }
        i3++;
      }
      a3 = e15.length - i3, e15 = a3 > 0 ? e15.subarray(i3) : new Uint8Array();
    }, this.reset = function() {
      e15 = new Uint8Array(), this.trigger(`reset`);
    }, this.endTimeline = function() {
      e15 = new Uint8Array(), this.trigger(`endedtimeline`);
    };
  };
  Jt2.prototype = new Kt2();
  var Yt2 = Jt2, Xt2 = [`audioobjecttype`, `channelcount`, `samplerate`, `samplingfrequencyindex`, `samplesize`], Zt2 = [`width`, `height`, `profileIdc`, `levelIdc`, `profileCompatibility`, `sarRatio`], Qt2 = n2, $t2 = de2, en2 = _e2, tn2 = P2, nn2 = je2, rn2 = Et2, an2 = N2, on2 = jt2, sn2 = Lt2.H264Stream, cn2 = Yt2, ln2 = Gt2.isLikelyAacData, un2 = N2.ONE_SECOND_IN_TS, dn2 = Xt2, fn2 = Zt2, pn2, mn2, hn2, gn2, _n2 = function(e15, t3) {
    t3.stream = e15, this.trigger(`log`, t3);
  }, vn2 = function(e15, t3) {
    for (var n3 = Object.keys(t3), r3 = 0; r3 < n3.length; r3++) {
      var i3 = n3[r3];
      i3 === `headOfPipeline` || !t3[i3].on || t3[i3].on(`log`, _n2.bind(e15, i3));
    }
  }, yn2 = function(e15, t3) {
    var n3;
    if (e15.length !== t3.length) return false;
    for (n3 = 0; n3 < e15.length; n3++) if (e15[n3] !== t3[n3]) return false;
    return true;
  }, bn2 = function(e15, t3, n3, r3, i3, a3) {
    var o3 = n3 - t3, s3 = r3 - t3, c3 = i3 - n3;
    return { start: { dts: e15, pts: e15 + o3 }, end: { dts: e15 + s3, pts: e15 + c3 }, prependedContentDuration: a3, baseMediaDecodeTime: e15 };
  };
  mn2 = function(e15, t3) {
    var n3 = [], r3, i3 = 0, a3 = 0, o3 = 1 / 0;
    t3 ||= {}, r3 = t3.firstSequenceNumber || 0, mn2.prototype.init.call(this), this.push = function(t4) {
      nn2.collectDtsInfo(e15, t4), e15 && dn2.forEach(function(n4) {
        e15[n4] = t4[n4];
      }), n3.push(t4);
    }, this.setEarliestDts = function(e16) {
      i3 = e16;
    }, this.setVideoBaseMediaDecodeTime = function(e16) {
      o3 = e16;
    }, this.setAudioAppendStart = function(e16) {
      a3 = e16;
    }, this.flush = function() {
      var s3, c3, l3, u3, d3, f3, p3;
      if (n3.length === 0) {
        this.trigger(`done`, `AudioSegmentStream`);
        return;
      }
      s3 = tn2.trimAdtsFramesByEarliestDts(n3, e15, i3), e15.baseMediaDecodeTime = nn2.calculateTrackBaseMediaDecodeTime(e15, t3.keepOriginalTimestamps), p3 = tn2.prefixWithSilence(e15, s3, a3, o3), e15.samples = tn2.generateSampleTable(s3), l3 = $t2.mdat(tn2.concatenateFrameData(s3)), n3 = [], c3 = $t2.moof(r3, [e15]), u3 = new Uint8Array(c3.byteLength + l3.byteLength), r3++, u3.set(c3), u3.set(l3, c3.byteLength), nn2.clearDtsInfo(e15), d3 = Math.ceil(un2 * 1024 / e15.samplerate), s3.length && (f3 = s3.length * d3, this.trigger(`segmentTimingInfo`, bn2(an2.audioTsToVideoTs(e15.baseMediaDecodeTime, e15.samplerate), s3[0].dts, s3[0].pts, s3[0].dts + f3, s3[0].pts + f3, p3 || 0)), this.trigger(`timingInfo`, { start: s3[0].pts, end: s3[0].pts + f3 })), this.trigger(`data`, { track: e15, boxes: u3 }), this.trigger(`done`, `AudioSegmentStream`);
    }, this.reset = function() {
      nn2.clearDtsInfo(e15), n3 = [], this.trigger(`reset`);
    };
  }, mn2.prototype = new Qt2(), pn2 = function(e15, t3) {
    var n3, r3 = [], i3 = [], a3, o3;
    t3 ||= {}, n3 = t3.firstSequenceNumber || 0, pn2.prototype.init.call(this), delete e15.minPTS, this.gopCache_ = [], this.push = function(t4) {
      nn2.collectDtsInfo(e15, t4), t4.nalUnitType === `seq_parameter_set_rbsp` && !a3 && (a3 = t4.config, e15.sps = [t4.data], fn2.forEach(function(t5) {
        e15[t5] = a3[t5];
      }, this)), t4.nalUnitType === `pic_parameter_set_rbsp` && !o3 && (o3 = t4.data, e15.pps = [t4.data]), r3.push(t4);
    }, this.flush = function() {
      for (var a4, o4, s3, c3, l3, u3, d3 = 0, f3, p3; r3.length && r3[0].nalUnitType !== `access_unit_delimiter_rbsp`; ) r3.shift();
      if (r3.length === 0) {
        this.resetStream_(), this.trigger(`done`, `VideoSegmentStream`);
        return;
      }
      if (a4 = en2.groupNalsIntoFrames(r3), s3 = en2.groupFramesIntoGops(a4), s3[0][0].keyFrame || (o4 = this.getGopForFusion_(r3[0], e15), o4 ? (d3 = o4.duration, s3.unshift(o4), s3.byteLength += o4.byteLength, s3.nalCount += o4.nalCount, s3.pts = o4.pts, s3.dts = o4.dts, s3.duration += o4.duration) : s3 = en2.extendFirstKeyFrame(s3)), i3.length) {
        var m3 = t3.alignGopsAtEnd ? this.alignGopsAtEnd_(s3) : this.alignGopsAtStart_(s3);
        if (!m3) {
          this.gopCache_.unshift({ gop: s3.pop(), pps: e15.pps, sps: e15.sps }), this.gopCache_.length = Math.min(6, this.gopCache_.length), r3 = [], this.resetStream_(), this.trigger(`done`, `VideoSegmentStream`);
          return;
        }
        nn2.clearDtsInfo(e15), s3 = m3;
      }
      nn2.collectDtsInfo(e15, s3), e15.samples = en2.generateSampleTable(s3), l3 = $t2.mdat(en2.concatenateNalData(s3)), e15.baseMediaDecodeTime = nn2.calculateTrackBaseMediaDecodeTime(e15, t3.keepOriginalTimestamps), this.trigger(`processedGopsInfo`, s3.map(function(e16) {
        return { pts: e16.pts, dts: e16.dts, byteLength: e16.byteLength };
      })), f3 = s3[0], p3 = s3[s3.length - 1], this.trigger(`segmentTimingInfo`, bn2(e15.baseMediaDecodeTime, f3.dts, f3.pts, p3.dts + p3.duration, p3.pts + p3.duration, d3)), this.trigger(`timingInfo`, { start: s3[0].pts, end: s3[s3.length - 1].pts + s3[s3.length - 1].duration }), this.gopCache_.unshift({ gop: s3.pop(), pps: e15.pps, sps: e15.sps }), this.gopCache_.length = Math.min(6, this.gopCache_.length), r3 = [], this.trigger(`baseMediaDecodeTime`, e15.baseMediaDecodeTime), this.trigger(`timelineStartInfo`, e15.timelineStartInfo), c3 = $t2.moof(n3, [e15]), u3 = new Uint8Array(c3.byteLength + l3.byteLength), n3++, u3.set(c3), u3.set(l3, c3.byteLength), this.trigger(`data`, { track: e15, boxes: u3 }), this.resetStream_(), this.trigger(`done`, `VideoSegmentStream`);
    }, this.reset = function() {
      this.resetStream_(), r3 = [], this.gopCache_.length = 0, i3.length = 0, this.trigger(`reset`);
    }, this.resetStream_ = function() {
      nn2.clearDtsInfo(e15), a3 = void 0, o3 = void 0;
    }, this.getGopForFusion_ = function(t4) {
      var n4 = 45e3, r4 = 1e4, i4 = 1 / 0, a4, o4, s3, c3, l3;
      for (l3 = 0; l3 < this.gopCache_.length; l3++) c3 = this.gopCache_[l3], s3 = c3.gop, !(!(e15.pps && yn2(e15.pps[0], c3.pps[0])) || !(e15.sps && yn2(e15.sps[0], c3.sps[0]))) && (s3.dts < e15.timelineStartInfo.dts || (a4 = t4.dts - s3.dts - s3.duration, a4 >= -r4 && a4 <= n4 && (!o4 || i4 > a4) && (o4 = c3, i4 = a4)));
      return o4 ? o4.gop : null;
    }, this.alignGopsAtStart_ = function(e16) {
      var t4, n4, r4, a4, o4 = e16.byteLength, s3 = e16.nalCount, c3 = e16.duration, l3;
      for (t4 = n4 = 0; t4 < i3.length && n4 < e16.length && (r4 = i3[t4], a4 = e16[n4], r4.pts !== a4.pts); ) {
        if (a4.pts > r4.pts) {
          t4++;
          continue;
        }
        n4++, o4 -= a4.byteLength, s3 -= a4.nalCount, c3 -= a4.duration;
      }
      return n4 === 0 ? e16 : n4 === e16.length ? null : (l3 = e16.slice(n4), l3.byteLength = o4, l3.duration = c3, l3.nalCount = s3, l3.pts = l3[0].pts, l3.dts = l3[0].dts, l3);
    }, this.alignGopsAtEnd_ = function(e16) {
      for (var t4 = i3.length - 1, n4 = e16.length - 1, r4, a4, o4 = null, s3 = false; t4 >= 0 && n4 >= 0; ) {
        if (r4 = i3[t4], a4 = e16[n4], r4.pts === a4.pts) {
          s3 = true;
          break;
        }
        if (r4.pts > a4.pts) {
          t4--;
          continue;
        }
        t4 === i3.length - 1 && (o4 = n4), n4--;
      }
      if (!s3 && o4 === null) return null;
      var c3 = s3 ? n4 : o4;
      if (c3 === 0) return e16;
      var l3 = e16.slice(c3), u3 = l3.reduce(function(e17, t5) {
        return e17.byteLength += t5.byteLength, e17.duration += t5.duration, e17.nalCount += t5.nalCount, e17;
      }, { byteLength: 0, duration: 0, nalCount: 0 });
      return l3.byteLength = u3.byteLength, l3.duration = u3.duration, l3.nalCount = u3.nalCount, l3.pts = l3[0].pts, l3.dts = l3[0].dts, l3;
    }, this.alignGopsWith = function(e16) {
      i3 = e16;
    };
  }, pn2.prototype = new Qt2(), gn2 = function(e15, t3) {
    this.numberOfTracks = 0, this.metadataStream = t3, e15 ||= {}, e15.remux === void 0 ? this.remuxTracks = true : this.remuxTracks = !!e15.remux, typeof e15.keepOriginalTimestamps == `boolean` ? this.keepOriginalTimestamps = e15.keepOriginalTimestamps : this.keepOriginalTimestamps = false, this.pendingTracks = [], this.videoTrack = null, this.pendingBoxes = [], this.pendingCaptions = [], this.pendingMetadata = [], this.pendingBytes = 0, this.emittedTracks = 0, gn2.prototype.init.call(this), this.push = function(e16) {
      if (e16.content || e16.text) return this.pendingCaptions.push(e16);
      if (e16.frames) return this.pendingMetadata.push(e16);
      this.pendingTracks.push(e16.track), this.pendingBytes += e16.boxes.byteLength, e16.track.type === `video` && (this.videoTrack = e16.track, this.pendingBoxes.push(e16.boxes)), e16.track.type === `audio` && (this.audioTrack = e16.track, this.pendingBoxes.unshift(e16.boxes));
    };
  }, gn2.prototype = new Qt2(), gn2.prototype.flush = function(e15) {
    var t3 = 0, n3 = { captions: [], captionStreams: {}, metadata: [], info: {} }, r3, i3, a3, o3 = 0, s3;
    if (this.pendingTracks.length < this.numberOfTracks) {
      if (e15 !== `VideoSegmentStream` && e15 !== `AudioSegmentStream` || this.remuxTracks) return;
      if (this.pendingTracks.length === 0) {
        this.emittedTracks++, this.emittedTracks >= this.numberOfTracks && (this.trigger(`done`), this.emittedTracks = 0);
        return;
      }
    }
    if (this.videoTrack ? (o3 = this.videoTrack.timelineStartInfo.pts, fn2.forEach(function(e16) {
      n3.info[e16] = this.videoTrack[e16];
    }, this)) : this.audioTrack && (o3 = this.audioTrack.timelineStartInfo.pts, dn2.forEach(function(e16) {
      n3.info[e16] = this.audioTrack[e16];
    }, this)), this.videoTrack || this.audioTrack) {
      for (this.pendingTracks.length === 1 ? n3.type = this.pendingTracks[0].type : n3.type = `combined`, this.emittedTracks += this.pendingTracks.length, a3 = $t2.initSegment(this.pendingTracks), n3.initSegment = new Uint8Array(a3.byteLength), n3.initSegment.set(a3), n3.data = new Uint8Array(this.pendingBytes), s3 = 0; s3 < this.pendingBoxes.length; s3++) n3.data.set(this.pendingBoxes[s3], t3), t3 += this.pendingBoxes[s3].byteLength;
      for (s3 = 0; s3 < this.pendingCaptions.length; s3++) r3 = this.pendingCaptions[s3], r3.startTime = an2.metadataTsToSeconds(r3.startPts, o3, this.keepOriginalTimestamps), r3.endTime = an2.metadataTsToSeconds(r3.endPts, o3, this.keepOriginalTimestamps), n3.captionStreams[r3.stream] = true, n3.captions.push(r3);
      for (s3 = 0; s3 < this.pendingMetadata.length; s3++) i3 = this.pendingMetadata[s3], i3.cueTime = an2.metadataTsToSeconds(i3.pts, o3, this.keepOriginalTimestamps), n3.metadata.push(i3);
      for (n3.metadata.dispatchType = this.metadataStream.dispatchType, this.pendingTracks.length = 0, this.videoTrack = null, this.pendingBoxes.length = 0, this.pendingCaptions.length = 0, this.pendingBytes = 0, this.pendingMetadata.length = 0, this.trigger(`data`, n3), s3 = 0; s3 < n3.captions.length; s3++) r3 = n3.captions[s3], this.trigger(`caption`, r3);
      for (s3 = 0; s3 < n3.metadata.length; s3++) i3 = n3.metadata[s3], this.trigger(`id3Frame`, i3);
    }
    this.emittedTracks >= this.numberOfTracks && (this.trigger(`done`), this.emittedTracks = 0);
  }, gn2.prototype.setRemux = function(e15) {
    this.remuxTracks = e15;
  }, hn2 = function(e15) {
    var t3 = this, n3 = true, r3, i3;
    hn2.prototype.init.call(this), e15 ||= {}, this.baseMediaDecodeTime = e15.baseMediaDecodeTime || 0, this.transmuxPipeline_ = {}, this.setupAacPipeline = function() {
      var n4 = {};
      this.transmuxPipeline_ = n4, n4.type = `aac`, n4.metadataStream = new rn2.MetadataStream(), n4.aacStream = new cn2(), n4.audioTimestampRolloverStream = new rn2.TimestampRolloverStream(`audio`), n4.timedMetadataTimestampRolloverStream = new rn2.TimestampRolloverStream(`timed-metadata`), n4.adtsStream = new on2(), n4.coalesceStream = new gn2(e15, n4.metadataStream), n4.headOfPipeline = n4.aacStream, n4.aacStream.pipe(n4.audioTimestampRolloverStream).pipe(n4.adtsStream), n4.aacStream.pipe(n4.timedMetadataTimestampRolloverStream).pipe(n4.metadataStream).pipe(n4.coalesceStream), n4.metadataStream.on(`timestamp`, function(e16) {
        n4.aacStream.setTimestamp(e16.timeStamp);
      }), n4.aacStream.on(`data`, function(a3) {
        a3.type !== `timed-metadata` && a3.type !== `audio` || n4.audioSegmentStream || (i3 ||= { timelineStartInfo: { baseMediaDecodeTime: t3.baseMediaDecodeTime }, codec: `adts`, type: `audio` }, n4.coalesceStream.numberOfTracks++, n4.audioSegmentStream = new mn2(i3, e15), n4.audioSegmentStream.on(`log`, t3.getLogTrigger_(`audioSegmentStream`)), n4.audioSegmentStream.on(`timingInfo`, t3.trigger.bind(t3, `audioTimingInfo`)), n4.adtsStream.pipe(n4.audioSegmentStream).pipe(n4.coalesceStream), t3.trigger(`trackinfo`, { hasAudio: !!i3, hasVideo: !!r3 }));
      }), n4.coalesceStream.on(`data`, this.trigger.bind(this, `data`)), n4.coalesceStream.on(`done`, this.trigger.bind(this, `done`)), vn2(this, n4);
    }, this.setupTsPipeline = function() {
      var n4 = {};
      this.transmuxPipeline_ = n4, n4.type = `ts`, n4.metadataStream = new rn2.MetadataStream(), n4.packetStream = new rn2.TransportPacketStream(), n4.parseStream = new rn2.TransportParseStream(), n4.elementaryStream = new rn2.ElementaryStream(), n4.timestampRolloverStream = new rn2.TimestampRolloverStream(), n4.adtsStream = new on2(), n4.h264Stream = new sn2(), n4.captionStream = new rn2.CaptionStream(e15), n4.coalesceStream = new gn2(e15, n4.metadataStream), n4.headOfPipeline = n4.packetStream, n4.packetStream.pipe(n4.parseStream).pipe(n4.elementaryStream).pipe(n4.timestampRolloverStream), n4.timestampRolloverStream.pipe(n4.h264Stream), n4.timestampRolloverStream.pipe(n4.adtsStream), n4.timestampRolloverStream.pipe(n4.metadataStream).pipe(n4.coalesceStream), n4.h264Stream.pipe(n4.captionStream).pipe(n4.coalesceStream), n4.elementaryStream.on(`data`, function(a3) {
        var o3;
        if (a3.type === `metadata`) {
          for (o3 = a3.tracks.length; o3--; ) !r3 && a3.tracks[o3].type === `video` ? (r3 = a3.tracks[o3], r3.timelineStartInfo.baseMediaDecodeTime = t3.baseMediaDecodeTime) : !i3 && a3.tracks[o3].type === `audio` && (i3 = a3.tracks[o3], i3.timelineStartInfo.baseMediaDecodeTime = t3.baseMediaDecodeTime);
          r3 && !n4.videoSegmentStream && (n4.coalesceStream.numberOfTracks++, n4.videoSegmentStream = new pn2(r3, e15), n4.videoSegmentStream.on(`log`, t3.getLogTrigger_(`videoSegmentStream`)), n4.videoSegmentStream.on(`timelineStartInfo`, function(r4) {
            i3 && !e15.keepOriginalTimestamps && (i3.timelineStartInfo = r4, n4.audioSegmentStream.setEarliestDts(r4.dts - t3.baseMediaDecodeTime));
          }), n4.videoSegmentStream.on(`processedGopsInfo`, t3.trigger.bind(t3, `gopInfo`)), n4.videoSegmentStream.on(`segmentTimingInfo`, t3.trigger.bind(t3, `videoSegmentTimingInfo`)), n4.videoSegmentStream.on(`baseMediaDecodeTime`, function(e16) {
            i3 && n4.audioSegmentStream.setVideoBaseMediaDecodeTime(e16);
          }), n4.videoSegmentStream.on(`timingInfo`, t3.trigger.bind(t3, `videoTimingInfo`)), n4.h264Stream.pipe(n4.videoSegmentStream).pipe(n4.coalesceStream)), i3 && !n4.audioSegmentStream && (n4.coalesceStream.numberOfTracks++, n4.audioSegmentStream = new mn2(i3, e15), n4.audioSegmentStream.on(`log`, t3.getLogTrigger_(`audioSegmentStream`)), n4.audioSegmentStream.on(`timingInfo`, t3.trigger.bind(t3, `audioTimingInfo`)), n4.audioSegmentStream.on(`segmentTimingInfo`, t3.trigger.bind(t3, `audioSegmentTimingInfo`)), n4.adtsStream.pipe(n4.audioSegmentStream).pipe(n4.coalesceStream)), t3.trigger(`trackinfo`, { hasAudio: !!i3, hasVideo: !!r3 });
        }
      }), n4.coalesceStream.on(`data`, this.trigger.bind(this, `data`)), n4.coalesceStream.on(`id3Frame`, function(e16) {
        e16.dispatchType = n4.metadataStream.dispatchType, t3.trigger(`id3Frame`, e16);
      }), n4.coalesceStream.on(`caption`, this.trigger.bind(this, `caption`)), n4.coalesceStream.on(`done`, this.trigger.bind(this, `done`)), vn2(this, n4);
    }, this.setBaseMediaDecodeTime = function(t4) {
      var n4 = this.transmuxPipeline_;
      e15.keepOriginalTimestamps || (this.baseMediaDecodeTime = t4), i3 && (i3.timelineStartInfo.dts = void 0, i3.timelineStartInfo.pts = void 0, nn2.clearDtsInfo(i3), n4.audioTimestampRolloverStream && n4.audioTimestampRolloverStream.discontinuity()), r3 && (n4.videoSegmentStream && (n4.videoSegmentStream.gopCache_ = []), r3.timelineStartInfo.dts = void 0, r3.timelineStartInfo.pts = void 0, nn2.clearDtsInfo(r3), n4.captionStream.reset()), n4.timestampRolloverStream && n4.timestampRolloverStream.discontinuity();
    }, this.setAudioAppendStart = function(e16) {
      i3 && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(e16);
    }, this.setRemux = function(t4) {
      var n4 = this.transmuxPipeline_;
      e15.remux = t4, n4 && n4.coalesceStream && n4.coalesceStream.setRemux(t4);
    }, this.alignGopsWith = function(e16) {
      r3 && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(e16);
    }, this.getLogTrigger_ = function(e16) {
      var t4 = this;
      return function(n4) {
        n4.stream = e16, t4.trigger(`log`, n4);
      };
    }, this.push = function(e16) {
      if (n3) {
        var t4 = ln2(e16);
        t4 && this.transmuxPipeline_.type !== `aac` ? this.setupAacPipeline() : !t4 && this.transmuxPipeline_.type !== `ts` && this.setupTsPipeline(), n3 = false;
      }
      this.transmuxPipeline_.headOfPipeline.push(e16);
    }, this.flush = function() {
      n3 = true, this.transmuxPipeline_.headOfPipeline.flush();
    }, this.endTimeline = function() {
      this.transmuxPipeline_.headOfPipeline.endTimeline();
    }, this.reset = function() {
      this.transmuxPipeline_.headOfPipeline && this.transmuxPipeline_.headOfPipeline.reset();
    }, this.resetCaptions = function() {
      this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset();
    };
  }, hn2.prototype = new Qt2();
  var xn2 = { Transmuxer: hn2, VideoSegmentStream: pn2, AudioSegmentStream: mn2, AUDIO_PROPERTIES: dn2, VIDEO_PROPERTIES: fn2, generateSegmentTimingInfo: bn2 }, Sn2 = { toUnsigned: function(e15) {
    return e15 >>> 0;
  }, toHexString: function(e15) {
    return (`00` + e15.toString(16)).slice(-2);
  } }, Cn2 = function(e15) {
    var t3 = ``;
    return t3 += String.fromCharCode(e15[0]), t3 += String.fromCharCode(e15[1]), t3 += String.fromCharCode(e15[2]), t3 += String.fromCharCode(e15[3]), t3;
  }, wn2 = Sn2.toUnsigned, Tn2 = Cn2, En2 = function(e15, t3) {
    var n3 = [], r3, i3, a3, o3, s3;
    if (!t3.length) return null;
    for (r3 = 0; r3 < e15.byteLength; ) i3 = wn2(e15[r3] << 24 | e15[r3 + 1] << 16 | e15[r3 + 2] << 8 | e15[r3 + 3]), a3 = Tn2(e15.subarray(r3 + 4, r3 + 8)), o3 = i3 > 1 ? r3 + i3 : e15.byteLength, a3 === t3[0] && (t3.length === 1 ? n3.push(e15.subarray(r3 + 8, o3)) : (s3 = En2(e15.subarray(r3 + 8, o3), t3.slice(1)), s3.length && (n3 = n3.concat(s3)))), r3 = o3;
    return n3;
  }, Dn2 = En2, On2 = Sn2.toUnsigned, kn2 = i2.getUint64, An2 = function(e15) {
    var t3 = { version: e15[0], flags: new Uint8Array(e15.subarray(1, 4)) };
    return t3.version === 1 ? t3.baseMediaDecodeTime = kn2(e15.subarray(4)) : t3.baseMediaDecodeTime = On2(e15[4] << 24 | e15[5] << 16 | e15[6] << 8 | e15[7]), t3;
  }, jn2 = function(e15) {
    return { isLeading: (e15[0] & 12) >>> 2, dependsOn: e15[0] & 3, isDependedOn: (e15[1] & 192) >>> 6, hasRedundancy: (e15[1] & 48) >>> 4, paddingValue: (e15[1] & 14) >>> 1, isNonSyncSample: e15[1] & 1, degradationPriority: e15[2] << 8 | e15[3] };
  }, Mn2 = function(e15) {
    var t3 = { version: e15[0], flags: new Uint8Array(e15.subarray(1, 4)), samples: [] }, n3 = new DataView(e15.buffer, e15.byteOffset, e15.byteLength), r3 = t3.flags[2] & 1, i3 = t3.flags[2] & 4, a3 = t3.flags[1] & 1, o3 = t3.flags[1] & 2, s3 = t3.flags[1] & 4, c3 = t3.flags[1] & 8, l3 = n3.getUint32(4), u3 = 8, d3;
    for (r3 && (t3.dataOffset = n3.getInt32(u3), u3 += 4), i3 && l3 && (d3 = { flags: jn2(e15.subarray(u3, u3 + 4)) }, u3 += 4, a3 && (d3.duration = n3.getUint32(u3), u3 += 4), o3 && (d3.size = n3.getUint32(u3), u3 += 4), c3 && (t3.version === 1 ? d3.compositionTimeOffset = n3.getInt32(u3) : d3.compositionTimeOffset = n3.getUint32(u3), u3 += 4), t3.samples.push(d3), l3--); l3--; ) d3 = {}, a3 && (d3.duration = n3.getUint32(u3), u3 += 4), o3 && (d3.size = n3.getUint32(u3), u3 += 4), s3 && (d3.flags = jn2(e15.subarray(u3, u3 + 4)), u3 += 4), c3 && (t3.version === 1 ? d3.compositionTimeOffset = n3.getInt32(u3) : d3.compositionTimeOffset = n3.getUint32(u3), u3 += 4), t3.samples.push(d3);
    return t3;
  }, Nn2 = function(e15) {
    var t3 = new DataView(e15.buffer, e15.byteOffset, e15.byteLength), n3 = { version: e15[0], flags: new Uint8Array(e15.subarray(1, 4)), trackId: t3.getUint32(4) }, r3 = n3.flags[2] & 1, i3 = n3.flags[2] & 2, a3 = n3.flags[2] & 8, o3 = n3.flags[2] & 16, s3 = n3.flags[2] & 32, c3 = n3.flags[0] & 65536, l3 = n3.flags[0] & 131072, u3 = 8;
    return r3 && (u3 += 4, n3.baseDataOffset = t3.getUint32(12), u3 += 4), i3 && (n3.sampleDescriptionIndex = t3.getUint32(u3), u3 += 4), a3 && (n3.defaultSampleDuration = t3.getUint32(u3), u3 += 4), o3 && (n3.defaultSampleSize = t3.getUint32(u3), u3 += 4), s3 && (n3.defaultSampleFlags = t3.getUint32(u3)), c3 && (n3.durationIsEmpty = true), !r3 && l3 && (n3.baseDataOffsetIsMoof = true), n3;
  }, Pn2 = typeof window < `u` ? window : e14 === void 0 ? typeof self < `u` ? self : {} : e14, Fn2 = Pe2.discardEmulationPreventionBytes, In2 = qe2.CaptionStream, Ln2 = Dn2, Rn2 = An2, zn2 = Mn2, Bn2 = Nn2, Vn2 = Pn2, Hn2 = function(e15, t3) {
    for (var n3 = e15, r3 = 0; r3 < t3.length; r3++) {
      var i3 = t3[r3];
      if (n3 < i3.size) return i3;
      n3 -= i3.size;
    }
    return null;
  }, Un2 = function(e15, t3, n3) {
    var r3 = new DataView(e15.buffer, e15.byteOffset, e15.byteLength), i3 = { logs: [], seiNals: [] }, a3, o3, s3, c3;
    for (o3 = 0; o3 + 4 < e15.length; o3 += s3) if (s3 = r3.getUint32(o3), o3 += 4, !(s3 <= 0)) switch (e15[o3] & 31) {
      case 6:
        var l3 = e15.subarray(o3 + 1, o3 + 1 + s3), u3 = Hn2(o3, t3);
        if (a3 = { nalUnitType: `sei_rbsp`, size: s3, data: l3, escapedRBSP: Fn2(l3), trackId: n3 }, u3) a3.pts = u3.pts, a3.dts = u3.dts, c3 = u3;
        else if (c3) a3.pts = c3.pts, a3.dts = c3.dts;
        else {
          i3.logs.push({ level: `warn`, message: `We've encountered a nal unit without data at ` + o3 + ` for trackId ` + n3 + `. See mux.js#223.` });
          break;
        }
        i3.seiNals.push(a3);
        break;
    }
    return i3;
  }, Wn2 = function(e15, t3, n3) {
    var r3 = t3, i3 = n3.defaultSampleDuration || 0, a3 = n3.defaultSampleSize || 0, o3 = n3.trackId, s3 = [];
    return e15.forEach(function(e16) {
      var t4 = zn2(e16).samples;
      t4.forEach(function(e17) {
        e17.duration === void 0 && (e17.duration = i3), e17.size === void 0 && (e17.size = a3), e17.trackId = o3, e17.dts = r3, e17.compositionTimeOffset === void 0 && (e17.compositionTimeOffset = 0), typeof r3 == `bigint` ? (e17.pts = r3 + Vn2.BigInt(e17.compositionTimeOffset), r3 += Vn2.BigInt(e17.duration)) : (e17.pts = r3 + e17.compositionTimeOffset, r3 += e17.duration);
      }), s3 = s3.concat(t4);
    }), s3;
  }, Gn2 = function(e15, t3) {
    var n3 = Ln2(e15, [`moof`, `traf`]), r3 = Ln2(e15, [`mdat`]), i3 = {}, a3 = [];
    return r3.forEach(function(e16, t4) {
      var r4 = n3[t4];
      a3.push({ mdat: e16, traf: r4 });
    }), a3.forEach(function(e16) {
      var n4 = e16.mdat, r4 = e16.traf, a4 = Bn2(Ln2(r4, [`tfhd`])[0]), o3 = a4.trackId, s3 = Ln2(r4, [`tfdt`]), c3 = s3.length > 0 ? Rn2(s3[0]).baseMediaDecodeTime : 0, l3 = Ln2(r4, [`trun`]), u3, d3;
      t3 === o3 && l3.length > 0 && (u3 = Wn2(l3, c3, a4), d3 = Un2(n4, u3, o3), i3[o3] || (i3[o3] = { seiNals: [], logs: [] }), i3[o3].seiNals = i3[o3].seiNals.concat(d3.seiNals), i3[o3].logs = i3[o3].logs.concat(d3.logs));
    }), i3;
  }, Kn2 = function(e15, t3, n3) {
    var r3;
    if (t3 === null) return null;
    r3 = Gn2(e15, t3);
    var i3 = r3[t3] || {};
    return { seiNals: i3.seiNals, logs: i3.logs, timescale: n3 };
  }, z2 = function() {
    var e15 = false, t3, n3, r3, i3, a3, o3;
    this.isInitialized = function() {
      return e15;
    }, this.init = function(n4) {
      t3 = new In2(), e15 = true, o3 = n4 ? n4.isPartial : false, t3.on(`data`, function(e16) {
        e16.startTime = e16.startPts / i3, e16.endTime = e16.endPts / i3, a3.captions.push(e16), a3.captionStreams[e16.stream] = true;
      }), t3.on(`log`, function(e16) {
        a3.logs.push(e16);
      });
    }, this.isNewInit = function(e16, t4) {
      return e16 && e16.length === 0 || t4 && typeof t4 == `object` && Object.keys(t4).length === 0 ? false : r3 !== e16[0] || i3 !== t4[r3];
    }, this.parse = function(e16, t4, o4) {
      var s3;
      if (!this.isInitialized() || !t4 || !o4) return null;
      if (this.isNewInit(t4, o4)) r3 = t4[0], i3 = o4[r3];
      else if (r3 === null || !i3) return n3.push(e16), null;
      for (; n3.length > 0; ) {
        var c3 = n3.shift();
        this.parse(c3, t4, o4);
      }
      return s3 = Kn2(e16, r3, i3), s3 && s3.logs && (a3.logs = a3.logs.concat(s3.logs)), s3 === null || !s3.seiNals ? a3.logs.length ? { logs: a3.logs, captions: [], captionStreams: [] } : null : (this.pushNals(s3.seiNals), this.flushStream(), a3);
    }, this.pushNals = function(e16) {
      if (!this.isInitialized() || !e16 || e16.length === 0) return null;
      e16.forEach(function(e17) {
        t3.push(e17);
      });
    }, this.flushStream = function() {
      if (!this.isInitialized()) return null;
      o3 ? t3.partialFlush() : t3.flush();
    }, this.clearParsedCaptions = function() {
      a3.captions = [], a3.captionStreams = {}, a3.logs = [];
    }, this.resetCaptionStream = function() {
      if (!this.isInitialized()) return null;
      t3.reset();
    }, this.clearAllCaptions = function() {
      this.clearParsedCaptions(), this.resetCaptionStream();
    }, this.reset = function() {
      n3 = [], r3 = null, i3 = null, a3 ? this.clearParsedCaptions() : a3 = { captions: [], captionStreams: {}, logs: [] }, this.resetCaptionStream();
    }, this.reset();
  }, qn2 = { uint8ToCString: function(e15) {
    for (var t3 = 0, n3 = String.fromCharCode(e15[t3]), r3 = ``; n3 !== `\0`; ) r3 += n3, t3++, n3 = String.fromCharCode(e15[t3]);
    return r3 += n3, r3;
  } }.uint8ToCString, Jn2 = i2.getUint64, Yn2 = function(e15) {
    var t3 = 4, n3 = e15[0], r3, i3, a3, o3, s3, c3, l3, u3;
    if (n3 === 0) {
      r3 = qn2(e15.subarray(t3)), t3 += r3.length, i3 = qn2(e15.subarray(t3)), t3 += i3.length;
      var d3 = new DataView(e15.buffer);
      a3 = d3.getUint32(t3), t3 += 4, s3 = d3.getUint32(t3), t3 += 4, c3 = d3.getUint32(t3), t3 += 4, l3 = d3.getUint32(t3), t3 += 4;
    } else if (n3 === 1) {
      var d3 = new DataView(e15.buffer);
      a3 = d3.getUint32(t3), t3 += 4, o3 = Jn2(e15.subarray(t3)), t3 += 8, c3 = d3.getUint32(t3), t3 += 4, l3 = d3.getUint32(t3), t3 += 4, r3 = qn2(e15.subarray(t3)), t3 += r3.length, i3 = qn2(e15.subarray(t3)), t3 += i3.length;
    }
    u3 = new Uint8Array(e15.subarray(t3, e15.byteLength));
    var f3 = { scheme_id_uri: r3, value: i3, timescale: a3 || 1, presentation_time: o3, presentation_time_delta: s3, event_duration: c3, id: l3, message_data: u3 };
    return Zn2(n3, f3) ? f3 : void 0;
  }, Xn2 = function(e15, t3, n3, r3) {
    return e15 || e15 === 0 ? e15 / t3 : r3 + n3 / t3;
  }, Zn2 = function(e15, t3) {
    var n3 = t3.scheme_id_uri !== `\0`, r3 = e15 === 0 && Qn2(t3.presentation_time_delta) && n3, i3 = e15 === 1 && Qn2(t3.presentation_time) && n3;
    return !(e15 > 1) && r3 || i3;
  }, Qn2 = function(e15) {
    return e15 !== void 0 || e15 !== null;
  }, $n2 = { parseEmsgBox: Yn2, scaleTime: Xn2 }, B2 = Sn2.toUnsigned, er2 = Sn2.toHexString, V2 = Dn2, tr2 = Cn2, nr2 = $n2, rr2 = Nn2, ir2 = Mn2, ar2 = An2, or2 = i2.getUint64, sr2, cr2, lr2, ur2, dr2, fr2, pr2, mr2 = Pn2, hr2 = lt2.parseId3Frames;
  sr2 = function(e15) {
    return V2(e15, [`moov`, `trak`]).reduce(function(e16, t3) {
      var n3 = V2(t3, [`tkhd`])[0], r3, i3, a3, o3;
      return !n3 || (r3 = n3[0], i3 = r3 === 0 ? 12 : 20, a3 = B2(n3[i3] << 24 | n3[i3 + 1] << 16 | n3[i3 + 2] << 8 | n3[i3 + 3]), o3 = V2(t3, [`mdia`, `mdhd`])[0], !o3) ? null : (r3 = o3[0], i3 = r3 === 0 ? 12 : 20, e16[a3] = B2(o3[i3] << 24 | o3[i3 + 1] << 16 | o3[i3 + 2] << 8 | o3[i3 + 3]), e16);
    }, {});
  }, cr2 = function(e15, t3) {
    var n3 = V2(t3, [`moof`, `traf`]).reduce(function(t4, n4) {
      var r3 = V2(n4, [`tfhd`])[0], i3 = e15[B2(r3[4] << 24 | r3[5] << 16 | r3[6] << 8 | r3[7])] || 9e4, a3 = V2(n4, [`tfdt`])[0], o3 = new DataView(a3.buffer, a3.byteOffset, a3.byteLength), s3 = a3[0] === 1 ? or2(a3.subarray(4, 12)) : o3.getUint32(4);
      let c3;
      return typeof s3 == `bigint` ? c3 = s3 / mr2.BigInt(i3) : typeof s3 == `number` && !isNaN(s3) && (c3 = s3 / i3), c3 < 2 ** 53 - 1 && (c3 = Number(c3)), c3 < t4 && (t4 = c3), t4;
    }, 1 / 0);
    return typeof n3 == `bigint` || isFinite(n3) ? n3 : 0;
  }, lr2 = function(e15, t3) {
    var n3 = V2(t3, [`moof`, `traf`]), r3 = 0, i3 = 0, a3;
    if (n3 && n3.length) {
      var o3 = V2(n3[0], [`tfhd`])[0], s3 = V2(n3[0], [`trun`])[0], c3 = V2(n3[0], [`tfdt`])[0];
      if (o3 && (a3 = rr2(o3).trackId), c3 && (r3 = ar2(c3).baseMediaDecodeTime), s3) {
        var l3 = ir2(s3);
        l3.samples && l3.samples.length && (i3 = l3.samples[0].compositionTimeOffset || 0);
      }
    }
    var u3 = e15[a3] || 9e4;
    typeof r3 == `bigint` && (i3 = mr2.BigInt(i3), u3 = mr2.BigInt(u3));
    var d3 = (r3 + i3) / u3;
    return typeof d3 == `bigint` && d3 < 2 ** 53 - 1 && (d3 = Number(d3)), d3;
  }, ur2 = function(e15) {
    var t3 = V2(e15, [`moov`, `trak`]), n3 = [];
    return t3.forEach(function(e16) {
      var t4 = V2(e16, [`mdia`, `hdlr`]), r3 = V2(e16, [`tkhd`]);
      t4.forEach(function(e17, t5) {
        var i3 = tr2(e17.subarray(8, 12)), a3 = r3[t5], o3, s3, c3;
        i3 === `vide` && (o3 = new DataView(a3.buffer, a3.byteOffset, a3.byteLength), s3 = o3.getUint8(0), c3 = s3 === 0 ? o3.getUint32(12) : o3.getUint32(20), n3.push(c3));
      });
    }), n3;
  }, fr2 = function(e15) {
    var t3 = e15[0] === 0 ? 12 : 20;
    return B2(e15[t3] << 24 | e15[t3 + 1] << 16 | e15[t3 + 2] << 8 | e15[t3 + 3]);
  }, dr2 = function(e15) {
    var t3 = V2(e15, [`moov`, `trak`]), n3 = [];
    return t3.forEach(function(e16) {
      var t4 = {}, r3 = V2(e16, [`tkhd`])[0], i3, a3;
      r3 && (i3 = new DataView(r3.buffer, r3.byteOffset, r3.byteLength), a3 = i3.getUint8(0), t4.id = a3 === 0 ? i3.getUint32(12) : i3.getUint32(20));
      var o3 = V2(e16, [`mdia`, `hdlr`])[0];
      if (o3) {
        var s3 = tr2(o3.subarray(8, 12));
        s3 === `vide` ? t4.type = `video` : s3 === `soun` ? t4.type = `audio` : t4.type = s3;
      }
      var c3 = V2(e16, [`mdia`, `minf`, `stbl`, `stsd`])[0];
      if (c3) {
        var l3 = c3.subarray(8);
        t4.codec = tr2(l3.subarray(4, 8));
        var u3 = V2(l3, [t4.codec])[0], d3, f3;
        u3 && (/^[asm]vc[1-9]$/i.test(t4.codec) ? (d3 = u3.subarray(78), f3 = tr2(d3.subarray(4, 8)), f3 === `avcC` && d3.length > 11 ? (t4.codec += `.`, t4.codec += er2(d3[9]), t4.codec += er2(d3[10]), t4.codec += er2(d3[11])) : t4.codec = `avc1.4d400d`) : /^mp4[a,v]$/i.test(t4.codec) ? (d3 = u3.subarray(28), f3 = tr2(d3.subarray(4, 8)), f3 === `esds` && d3.length > 20 && d3[19] !== 0 ? (t4.codec += `.` + er2(d3[19]), t4.codec += `.` + er2(d3[20] >>> 2 & 63).replace(/^0/, ``)) : t4.codec = `mp4a.40.2`) : t4.codec = t4.codec.toLowerCase());
      }
      var p3 = V2(e16, [`mdia`, `mdhd`])[0];
      p3 && (t4.timescale = fr2(p3)), n3.push(t4);
    }), n3;
  }, pr2 = function(e15, t3 = 0) {
    return V2(e15, [`emsg`]).map((e16) => {
      var n3 = nr2.parseEmsgBox(new Uint8Array(e16)), r3 = hr2(n3.message_data);
      return { cueTime: nr2.scaleTime(n3.presentation_time, n3.timescale, n3.presentation_time_delta, t3), duration: nr2.scaleTime(n3.event_duration, n3.timescale), frames: r3 };
    });
  };
  var gr2 = { findBox: V2, parseType: tr2, timescale: sr2, startTime: cr2, compositionStartTime: lr2, videoTrackIds: ur2, tracks: dr2, getTimescaleFromMediaHeader: fr2, getEmsgID3: pr2 }, _r2 = Je2, vr2 = function(e15) {
    var t3 = e15[1] & 31;
    return t3 <<= 8, t3 |= e15[2], t3;
  }, yr2 = function(e15) {
    return !!(e15[1] & 64);
  }, br2 = function(e15) {
    var t3 = 0;
    return (e15[3] & 48) >>> 4 > 1 && (t3 += e15[4] + 1), t3;
  }, xr2 = function(e15, t3) {
    var n3 = vr2(e15);
    return n3 === 0 ? `pat` : n3 === t3 ? `pmt` : t3 ? `pes` : null;
  }, Sr2 = function(e15) {
    var t3 = yr2(e15), n3 = 4 + br2(e15);
    return t3 && (n3 += e15[n3] + 1), (e15[n3 + 10] & 31) << 8 | e15[n3 + 11];
  }, Cr2 = function(e15) {
    var t3 = {}, n3 = yr2(e15), r3 = 4 + br2(e15);
    if (n3 && (r3 += e15[r3] + 1), e15[r3 + 5] & 1) {
      for (var i3 = 3 + ((e15[r3 + 1] & 15) << 8 | e15[r3 + 2]) - 4, a3 = 12 + ((e15[r3 + 10] & 15) << 8 | e15[r3 + 11]); a3 < i3; ) {
        var o3 = r3 + a3;
        t3[(e15[o3 + 1] & 31) << 8 | e15[o3 + 2]] = e15[o3], a3 += ((e15[o3 + 3] & 15) << 8 | e15[o3 + 4]) + 5;
      }
      return t3;
    }
  }, wr2 = function(e15, t3) {
    switch (t3[vr2(e15)]) {
      case _r2.H264_STREAM_TYPE:
        return `video`;
      case _r2.ADTS_STREAM_TYPE:
        return `audio`;
      case _r2.METADATA_STREAM_TYPE:
        return `timed-metadata`;
      default:
        return null;
    }
  }, Tr2 = function(e15) {
    if (!yr2(e15)) return null;
    var t3 = 4 + br2(e15);
    if (t3 >= e15.byteLength) return null;
    var n3 = null, r3 = e15[t3 + 7];
    return r3 & 192 && (n3 = {}, n3.pts = (e15[t3 + 9] & 14) << 27 | (e15[t3 + 10] & 255) << 20 | (e15[t3 + 11] & 254) << 12 | (e15[t3 + 12] & 255) << 5 | (e15[t3 + 13] & 254) >>> 3, n3.pts *= 4, n3.pts += (e15[t3 + 13] & 6) >>> 1, n3.dts = n3.pts, r3 & 64 && (n3.dts = (e15[t3 + 14] & 14) << 27 | (e15[t3 + 15] & 255) << 20 | (e15[t3 + 16] & 254) << 12 | (e15[t3 + 17] & 255) << 5 | (e15[t3 + 18] & 254) >>> 3, n3.dts *= 4, n3.dts += (e15[t3 + 18] & 6) >>> 1)), n3;
  }, Er2 = function(e15) {
    switch (e15) {
      case 5:
        return `slice_layer_without_partitioning_rbsp_idr`;
      case 6:
        return `sei_rbsp`;
      case 7:
        return `seq_parameter_set_rbsp`;
      case 8:
        return `pic_parameter_set_rbsp`;
      case 9:
        return `access_unit_delimiter_rbsp`;
      default:
        return null;
    }
  }, Dr2 = { parseType: xr2, parsePat: Sr2, parsePmt: Cr2, parsePayloadUnitStartIndicator: yr2, parsePesType: wr2, parsePesTime: Tr2, videoPacketContainsKeyFrame: function(e15) {
    for (var t3 = 4 + br2(e15), n3 = e15.subarray(t3), r3 = 0, i3 = 0, a3 = false, o3; i3 < n3.byteLength - 3; i3++) if (n3[i3 + 2] === 1) {
      r3 = i3 + 5;
      break;
    }
    for (; r3 < n3.byteLength; ) switch (n3[r3]) {
      case 0:
        if (n3[r3 - 1] !== 0) {
          r3 += 2;
          break;
        } else if (n3[r3 - 2] !== 0) {
          r3++;
          break;
        }
        i3 + 3 !== r3 - 2 && (o3 = Er2(n3[i3 + 3] & 31), o3 === `slice_layer_without_partitioning_rbsp_idr` && (a3 = true));
        do
          r3++;
        while (n3[r3] !== 1 && r3 < n3.length);
        i3 = r3 - 2, r3 += 3;
        break;
      case 1:
        if (n3[r3 - 1] !== 0 || n3[r3 - 2] !== 0) {
          r3 += 3;
          break;
        }
        o3 = Er2(n3[i3 + 3] & 31), o3 === `slice_layer_without_partitioning_rbsp_idr` && (a3 = true), i3 = r3 - 2, r3 += 3;
        break;
      default:
        r3 += 3;
        break;
    }
    return n3 = n3.subarray(i3), r3 -= i3, i3 = 0, n3 && n3.byteLength > 3 && (o3 = Er2(n3[i3 + 3] & 31), o3 === `slice_layer_without_partitioning_rbsp_idr` && (a3 = true)), a3;
  } }, Or2 = Je2, kr2 = tt2.handleRollover, H2 = {};
  H2.ts = Dr2, H2.aac = Gt2;
  var U2 = N2.ONE_SECOND_IN_TS, W2 = 188, Ar2 = 71, jr2 = function(e15, t3) {
    for (var n3 = 0, r3 = W2, i3, a3; r3 < e15.byteLength; ) {
      if (e15[n3] === Ar2 && e15[r3] === Ar2) {
        switch (i3 = e15.subarray(n3, r3), a3 = H2.ts.parseType(i3, t3.pid), a3) {
          case `pat`:
            t3.pid = H2.ts.parsePat(i3);
            break;
          case `pmt`:
            var o3 = H2.ts.parsePmt(i3);
            t3.table = t3.table || {}, Object.keys(o3).forEach(function(e16) {
              t3.table[e16] = o3[e16];
            });
            break;
        }
        n3 += W2, r3 += W2;
        continue;
      }
      n3++, r3++;
    }
  }, Mr2 = function(e15, t3, n3) {
    for (var r3 = 0, i3 = W2, a3, o3, s3, c3, l3, u3 = false; i3 <= e15.byteLength; ) {
      if (e15[r3] === Ar2 && (e15[i3] === Ar2 || i3 === e15.byteLength)) {
        switch (a3 = e15.subarray(r3, i3), o3 = H2.ts.parseType(a3, t3.pid), o3) {
          case `pes`:
            s3 = H2.ts.parsePesType(a3, t3.table), c3 = H2.ts.parsePayloadUnitStartIndicator(a3), s3 === `audio` && c3 && (l3 = H2.ts.parsePesTime(a3), l3 && (l3.type = `audio`, n3.audio.push(l3), u3 = true));
            break;
        }
        if (u3) break;
        r3 += W2, i3 += W2;
        continue;
      }
      r3++, i3++;
    }
    for (i3 = e15.byteLength, r3 = i3 - W2, u3 = false; r3 >= 0; ) {
      if (e15[r3] === Ar2 && (e15[i3] === Ar2 || i3 === e15.byteLength)) {
        switch (a3 = e15.subarray(r3, i3), o3 = H2.ts.parseType(a3, t3.pid), o3) {
          case `pes`:
            s3 = H2.ts.parsePesType(a3, t3.table), c3 = H2.ts.parsePayloadUnitStartIndicator(a3), s3 === `audio` && c3 && (l3 = H2.ts.parsePesTime(a3), l3 && (l3.type = `audio`, n3.audio.push(l3), u3 = true));
            break;
        }
        if (u3) break;
        r3 -= W2, i3 -= W2;
        continue;
      }
      r3--, i3--;
    }
  }, Nr2 = function(e15, t3, n3) {
    for (var r3 = 0, i3 = W2, a3, o3, s3, c3, l3, u3, d3, f3, p3 = false, m3 = { data: [], size: 0 }; i3 < e15.byteLength; ) {
      if (e15[r3] === Ar2 && e15[i3] === Ar2) {
        switch (a3 = e15.subarray(r3, i3), o3 = H2.ts.parseType(a3, t3.pid), o3) {
          case `pes`:
            if (s3 = H2.ts.parsePesType(a3, t3.table), c3 = H2.ts.parsePayloadUnitStartIndicator(a3), s3 === `video` && (c3 && !p3 && (l3 = H2.ts.parsePesTime(a3), l3 && (l3.type = `video`, n3.video.push(l3), p3 = true)), !n3.firstKeyFrame)) {
              if (c3 && m3.size !== 0) {
                for (u3 = new Uint8Array(m3.size), d3 = 0; m3.data.length; ) f3 = m3.data.shift(), u3.set(f3, d3), d3 += f3.byteLength;
                if (H2.ts.videoPacketContainsKeyFrame(u3)) {
                  var h3 = H2.ts.parsePesTime(u3);
                  h3 ? (n3.firstKeyFrame = h3, n3.firstKeyFrame.type = `video`) : console.warn(`Failed to extract PTS/DTS from PES at first keyframe. This could be an unusual TS segment, or else mux.js did not parse your TS segment correctly. If you know your TS segments do contain PTS/DTS on keyframes please file a bug report! You can try ffprobe to double check for yourself.`);
                }
                m3.size = 0;
              }
              m3.data.push(a3), m3.size += a3.byteLength;
            }
            break;
        }
        if (p3 && n3.firstKeyFrame) break;
        r3 += W2, i3 += W2;
        continue;
      }
      r3++, i3++;
    }
    for (i3 = e15.byteLength, r3 = i3 - W2, p3 = false; r3 >= 0; ) {
      if (e15[r3] === Ar2 && e15[i3] === Ar2) {
        switch (a3 = e15.subarray(r3, i3), o3 = H2.ts.parseType(a3, t3.pid), o3) {
          case `pes`:
            s3 = H2.ts.parsePesType(a3, t3.table), c3 = H2.ts.parsePayloadUnitStartIndicator(a3), s3 === `video` && c3 && (l3 = H2.ts.parsePesTime(a3), l3 && (l3.type = `video`, n3.video.push(l3), p3 = true));
            break;
        }
        if (p3) break;
        r3 -= W2, i3 -= W2;
        continue;
      }
      r3--, i3--;
    }
  }, Pr2 = function(e15, t3) {
    if (e15.audio && e15.audio.length) {
      var n3 = t3;
      (n3 === void 0 || isNaN(n3)) && (n3 = e15.audio[0].dts), e15.audio.forEach(function(e16) {
        e16.dts = kr2(e16.dts, n3), e16.pts = kr2(e16.pts, n3), e16.dtsTime = e16.dts / U2, e16.ptsTime = e16.pts / U2;
      });
    }
    if (e15.video && e15.video.length) {
      var r3 = t3;
      if ((r3 === void 0 || isNaN(r3)) && (r3 = e15.video[0].dts), e15.video.forEach(function(e16) {
        e16.dts = kr2(e16.dts, r3), e16.pts = kr2(e16.pts, r3), e16.dtsTime = e16.dts / U2, e16.ptsTime = e16.pts / U2;
      }), e15.firstKeyFrame) {
        var i3 = e15.firstKeyFrame;
        i3.dts = kr2(i3.dts, r3), i3.pts = kr2(i3.pts, r3), i3.dtsTime = i3.dts / U2, i3.ptsTime = i3.pts / U2;
      }
    }
  }, Fr2 = function(e15) {
    for (var t3 = false, n3 = 0, r3 = null, i3 = null, a3 = 0, o3 = 0, s3; e15.length - o3 >= 3; ) {
      switch (H2.aac.parseType(e15, o3)) {
        case `timed-metadata`:
          if (e15.length - o3 < 10) {
            t3 = true;
            break;
          }
          if (a3 = H2.aac.parseId3TagSize(e15, o3), a3 > e15.length) {
            t3 = true;
            break;
          }
          i3 === null && (s3 = e15.subarray(o3, o3 + a3), i3 = H2.aac.parseAacTimestamp(s3)), o3 += a3;
          break;
        case `audio`:
          if (e15.length - o3 < 7) {
            t3 = true;
            break;
          }
          if (a3 = H2.aac.parseAdtsSize(e15, o3), a3 > e15.length) {
            t3 = true;
            break;
          }
          r3 === null && (s3 = e15.subarray(o3, o3 + a3), r3 = H2.aac.parseSampleRate(s3)), n3++, o3 += a3;
          break;
        default:
          o3++;
          break;
      }
      if (t3) return null;
    }
    if (r3 === null || i3 === null) return null;
    var c3 = U2 / r3;
    return { audio: [{ type: `audio`, dts: i3, pts: i3 }, { type: `audio`, dts: i3 + n3 * 1024 * c3, pts: i3 + n3 * 1024 * c3 }] };
  }, Ir2 = function(e15) {
    var t3 = { pid: null, table: null }, n3 = {};
    for (var r3 in jr2(e15, t3), t3.table) if (t3.table.hasOwnProperty(r3)) switch (t3.table[r3]) {
      case Or2.H264_STREAM_TYPE:
        n3.video = [], Nr2(e15, t3, n3), n3.video.length === 0 && delete n3.video;
        break;
      case Or2.ADTS_STREAM_TYPE:
        n3.audio = [], Mr2(e15, t3, n3), n3.audio.length === 0 && delete n3.audio;
        break;
    }
    return n3;
  }, Lr2 = { inspect: function(e15, t3) {
    var n3 = H2.aac.isLikelyAacData(e15) ? Fr2(e15) : Ir2(e15);
    return !n3 || !n3.audio && !n3.video ? null : (Pr2(n3, t3), n3);
  }, parseAudioPes_: Mr2 };
  let Rr2 = function(e15, t3) {
    t3.on(`data`, function(t4) {
      let n3 = t4.initSegment;
      t4.initSegment = { data: n3.buffer, byteOffset: n3.byteOffset, byteLength: n3.byteLength };
      let r3 = t4.data;
      t4.data = r3.buffer, e15.postMessage({ action: `data`, segment: t4, byteOffset: r3.byteOffset, byteLength: r3.byteLength }, [t4.data]);
    }), t3.on(`done`, function(t4) {
      e15.postMessage({ action: `done` });
    }), t3.on(`gopInfo`, function(t4) {
      e15.postMessage({ action: `gopInfo`, gopInfo: t4 });
    }), t3.on(`videoSegmentTimingInfo`, function(t4) {
      let n3 = { start: { decode: N2.videoTsToSeconds(t4.start.dts), presentation: N2.videoTsToSeconds(t4.start.pts) }, end: { decode: N2.videoTsToSeconds(t4.end.dts), presentation: N2.videoTsToSeconds(t4.end.pts) }, baseMediaDecodeTime: N2.videoTsToSeconds(t4.baseMediaDecodeTime) };
      t4.prependedContentDuration && (n3.prependedContentDuration = N2.videoTsToSeconds(t4.prependedContentDuration)), e15.postMessage({ action: `videoSegmentTimingInfo`, videoSegmentTimingInfo: n3 });
    }), t3.on(`audioSegmentTimingInfo`, function(t4) {
      let n3 = { start: { decode: N2.videoTsToSeconds(t4.start.dts), presentation: N2.videoTsToSeconds(t4.start.pts) }, end: { decode: N2.videoTsToSeconds(t4.end.dts), presentation: N2.videoTsToSeconds(t4.end.pts) }, baseMediaDecodeTime: N2.videoTsToSeconds(t4.baseMediaDecodeTime) };
      t4.prependedContentDuration && (n3.prependedContentDuration = N2.videoTsToSeconds(t4.prependedContentDuration)), e15.postMessage({ action: `audioSegmentTimingInfo`, audioSegmentTimingInfo: n3 });
    }), t3.on(`id3Frame`, function(t4) {
      e15.postMessage({ action: `id3Frame`, id3Frame: t4 });
    }), t3.on(`caption`, function(t4) {
      e15.postMessage({ action: `caption`, caption: t4 });
    }), t3.on(`trackinfo`, function(t4) {
      e15.postMessage({ action: `trackinfo`, trackInfo: t4 });
    }), t3.on(`audioTimingInfo`, function(t4) {
      e15.postMessage({ action: `audioTimingInfo`, audioTimingInfo: { start: N2.videoTsToSeconds(t4.start), end: N2.videoTsToSeconds(t4.end) } });
    }), t3.on(`videoTimingInfo`, function(t4) {
      e15.postMessage({ action: `videoTimingInfo`, videoTimingInfo: { start: N2.videoTsToSeconds(t4.start), end: N2.videoTsToSeconds(t4.end) } });
    }), t3.on(`log`, function(t4) {
      e15.postMessage({ action: `log`, log: t4 });
    });
  };
  class zr2 {
    constructor(e15, t3) {
      this.options = t3 || {}, this.self = e15, this.init();
    }
    init() {
      this.transmuxer && this.transmuxer.dispose(), this.transmuxer = new xn2.Transmuxer(this.options), Rr2(this.self, this.transmuxer);
    }
    pushMp4Captions(e15) {
      this.captionParser || (this.captionParser = new z2(), this.captionParser.init());
      let t3 = new Uint8Array(e15.data, e15.byteOffset, e15.byteLength), n3 = this.captionParser.parse(t3, e15.trackIds, e15.timescales);
      this.self.postMessage({ action: `mp4Captions`, captions: n3 && n3.captions || [], logs: n3 && n3.logs || [], data: t3.buffer }, [t3.buffer]);
    }
    probeMp4StartTime({ timescales: e15, data: t3 }) {
      let n3 = gr2.startTime(e15, t3);
      this.self.postMessage({ action: `probeMp4StartTime`, startTime: n3, data: t3 }, [t3.buffer]);
    }
    probeMp4Tracks({ data: e15 }) {
      let t3 = gr2.tracks(e15);
      this.self.postMessage({ action: `probeMp4Tracks`, tracks: t3, data: e15 }, [e15.buffer]);
    }
    probeEmsgID3({ data: e15, offset: t3 }) {
      let n3 = gr2.getEmsgID3(e15, t3);
      this.self.postMessage({ action: `probeEmsgID3`, id3Frames: n3, emsgData: e15 }, [e15.buffer]);
    }
    probeTs({ data: e15, baseStartTime: t3 }) {
      let n3 = typeof t3 == `number` && !isNaN(t3) ? t3 * N2.ONE_SECOND_IN_TS : void 0, r3 = Lr2.inspect(e15, n3), i3 = null;
      r3 && (i3 = { hasVideo: r3.video && r3.video.length === 2 || false, hasAudio: r3.audio && r3.audio.length === 2 || false }, i3.hasVideo && (i3.videoStart = r3.video[0].ptsTime), i3.hasAudio && (i3.audioStart = r3.audio[0].ptsTime)), this.self.postMessage({ action: `probeTs`, result: i3, data: e15 }, [e15.buffer]);
    }
    clearAllMp4Captions() {
      this.captionParser && this.captionParser.clearAllCaptions();
    }
    clearParsedMp4Captions() {
      this.captionParser && this.captionParser.clearParsedCaptions();
    }
    push(e15) {
      let t3 = new Uint8Array(e15.data, e15.byteOffset, e15.byteLength);
      this.transmuxer.push(t3);
    }
    reset() {
      this.transmuxer.reset();
    }
    setTimestampOffset(e15) {
      let t3 = e15.timestampOffset || 0;
      this.transmuxer.setBaseMediaDecodeTime(Math.round(N2.secondsToVideoTs(t3)));
    }
    setAudioAppendStart(e15) {
      this.transmuxer.setAudioAppendStart(Math.ceil(N2.secondsToVideoTs(e15.appendStart)));
    }
    setRemux(e15) {
      this.transmuxer.setRemux(e15.remux);
    }
    flush(e15) {
      this.transmuxer.flush(), self.postMessage({ action: `done`, type: `transmuxed` });
    }
    endTimeline() {
      this.transmuxer.endTimeline(), self.postMessage({ action: `endedtimeline`, type: `transmuxed` });
    }
    alignGopsWith(e15) {
      this.transmuxer.alignGopsWith(e15.gopsToAlignWith.slice());
    }
  }
  self.onmessage = function(e15) {
    if (e15.data.action === `init` && e15.data.options) {
      this.messageHandlers = new zr2(self, e15.data.options);
      return;
    }
    this.messageHandlers ||= new zr2(self), e15.data && e15.data.action && e15.data.action !== `init` && this.messageHandlers[e15.data.action] && this.messageHandlers[e15.data.action](e15.data);
  };
}))), Nu = (e14, t2, n2) => {
  let { type: r2, initSegment: i2, captions: a2, captionStreams: o2, metadata: s2, videoFrameDtsTime: c2, videoFramePtsTime: l2 } = e14.data.segment;
  t2.buffer.push({ captions: a2, captionStreams: o2, metadata: s2 });
  let u2 = e14.data.segment.boxes || { data: e14.data.segment.data }, d2 = { type: r2, data: new Uint8Array(u2.data, u2.data.byteOffset, u2.data.byteLength), initSegment: new Uint8Array(i2.data, i2.byteOffset, i2.byteLength) };
  c2 !== void 0 && (d2.videoFrameDtsTime = c2), l2 !== void 0 && (d2.videoFramePtsTime = l2), n2(d2);
}, Pu = ({ transmuxedData: e14, callback: t2 }) => {
  e14.buffer = [], t2(e14);
}, Fu = (e14, t2) => {
  t2.gopInfo = e14.data.gopInfo;
}, Iu = (e14) => {
  let { transmuxer: t2, bytes: n2, audioAppendStart: r2, gopsToAlignWith: i2, remux: a2, onData: o2, onTrackInfo: s2, onAudioTimingInfo: c2, onVideoTimingInfo: l2, onVideoSegmentTimingInfo: u2, onAudioSegmentTimingInfo: d2, onId3: f2, onCaptions: p2, onDone: m2, onEndedTimeline: h2, onTransmuxerLog: g2, isEndOfTimeline: _2 } = e14, v2 = { buffer: [] }, y2 = _2;
  if (t2.onmessage = (n3) => {
    t2.currentTransmux === e14 && (n3.data.action === `data` && Nu(n3, v2, o2), n3.data.action === `trackinfo` && s2(n3.data.trackInfo), n3.data.action === `gopInfo` && Fu(n3, v2), n3.data.action === `audioTimingInfo` && c2(n3.data.audioTimingInfo), n3.data.action === `videoTimingInfo` && l2(n3.data.videoTimingInfo), n3.data.action === `videoSegmentTimingInfo` && u2(n3.data.videoSegmentTimingInfo), n3.data.action === `audioSegmentTimingInfo` && d2(n3.data.audioSegmentTimingInfo), n3.data.action === `id3Frame` && f2([n3.data.id3Frame], n3.data.id3Frame.dispatchType), n3.data.action === `caption` && p2(n3.data.caption), n3.data.action === `endedtimeline` && (y2 = false, h2()), n3.data.action === `log` && g2(n3.data.log), n3.data.type === `transmuxed` && (y2 || (t2.onmessage = null, Pu({ transmuxedData: v2, callback: m2 }), Lu(t2))));
  }, r2 && t2.postMessage({ action: `setAudioAppendStart`, appendStart: r2 }), Array.isArray(i2) && t2.postMessage({ action: `alignGopsWith`, gopsToAlignWith: i2 }), a2 !== void 0 && t2.postMessage({ action: `setRemux`, remux: a2 }), n2.byteLength) {
    let e15 = n2 instanceof ArrayBuffer ? n2 : n2.buffer, r3 = n2 instanceof ArrayBuffer ? 0 : n2.byteOffset;
    t2.postMessage({ action: `push`, data: e15, byteOffset: r3, byteLength: n2.byteLength }, [e15]);
  }
  _2 && t2.postMessage({ action: `endTimeline` }), t2.postMessage({ action: `flush` });
}, Lu = (e14) => {
  e14.currentTransmux = null, e14.transmuxQueue.length && (e14.currentTransmux = e14.transmuxQueue.shift(), typeof e14.currentTransmux == `function` ? e14.currentTransmux() : Iu(e14.currentTransmux));
}, Ru = (e14, t2) => {
  e14.postMessage({ action: t2 }), Lu(e14);
}, zu = (e14, t2) => {
  if (!t2.currentTransmux) {
    t2.currentTransmux = e14, Ru(t2, e14);
    return;
  }
  t2.transmuxQueue.push(Ru.bind(null, t2, e14));
}, Bu = (e14) => {
  zu(`reset`, e14);
}, Vu = (e14) => {
  zu(`endTimeline`, e14);
}, Hu = (e14) => {
  if (!e14.transmuxer.currentTransmux) {
    e14.transmuxer.currentTransmux = e14, Iu(e14);
    return;
  }
  e14.transmuxer.transmuxQueue.push(e14);
}, Uu = { reset: Bu, endTimeline: Vu, transmux: Hu, createTransmuxer: (e14) => {
  let t2 = new Mu();
  t2.currentTransmux = null, t2.transmuxQueue = [];
  let n2 = t2.terminate;
  return t2.terminate = () => (t2.currentTransmux = null, t2.transmuxQueue.length = 0, n2.call(t2)), t2.postMessage({ action: `init`, options: e14 }), t2;
} }, Wu = function(e14) {
  let t2 = e14.transmuxer, n2 = e14.endAction || e14.action, r2 = e14.callback, i2 = x({}, e14, { endAction: null, transmuxer: null, callback: null }), a2 = (i3) => {
    i3.data.action === n2 && (t2.removeEventListener(`message`, a2), i3.data.data && (i3.data.data = new Uint8Array(i3.data.data, e14.byteOffset || 0, e14.byteLength || i3.data.data.byteLength), e14.data &&= i3.data.data), r2(i3.data));
  };
  if (t2.addEventListener(`message`, a2), e14.data) {
    let n3 = e14.data instanceof ArrayBuffer;
    i2.byteOffset = n3 ? 0 : e14.data.byteOffset, i2.byteLength = e14.data.byteLength;
    let r3 = [n3 ? e14.data : e14.data.buffer];
    t2.postMessage(i2, r3);
  } else t2.postMessage(i2);
}, Gu = { FAILURE: 2, TIMEOUT: -101, ABORTED: -102 }, Ku = (e14) => {
  e14.forEach((e15) => {
    e15.abort();
  });
}, qu = (e14) => ({ bandwidth: e14.bandwidth, bytesReceived: e14.bytesReceived || 0, roundTripTime: e14.roundTripTime || 0 }), Ju = (e14) => {
  let t2 = e14.target, n2 = { bandwidth: 1 / 0, bytesReceived: 0, roundTripTime: Date.now() - t2.requestTime || 0 };
  return n2.bytesReceived = e14.loaded, n2.bandwidth = Math.floor(n2.bytesReceived / n2.roundTripTime * 8 * 1e3), n2;
}, Yu = (e14, t2) => t2.timedout ? { status: t2.status, message: `HLS request timed-out at URL: ` + t2.uri, code: Gu.TIMEOUT, xhr: t2 } : t2.aborted ? { status: t2.status, message: `HLS request aborted at URL: ` + t2.uri, code: Gu.ABORTED, xhr: t2 } : e14 ? { status: t2.status, message: `HLS request errored at URL: ` + t2.uri, code: Gu.FAILURE, xhr: t2 } : t2.responseType === `arraybuffer` && t2.response.byteLength === 0 ? { status: t2.status, message: `Empty HLS response at URL: ` + t2.uri, code: Gu.FAILURE, xhr: t2 } : null, Xu = (e14, t2, n2) => (r2, i2) => {
  let a2 = i2.response, o2 = Yu(r2, i2);
  if (o2) return n2(o2, e14);
  if (a2.byteLength !== 16) return n2({ status: i2.status, message: `Invalid HLS key at URL: ` + i2.uri, code: Gu.FAILURE, xhr: i2 }, e14);
  let s2 = new DataView(a2), c2 = new Uint32Array([s2.getUint32(0), s2.getUint32(4), s2.getUint32(8), s2.getUint32(12)]);
  for (let e15 = 0; e15 < t2.length; e15++) t2[e15].bytes = c2;
  return n2(null, e14);
}, Zu = (e14, t2) => {
  let n2 = jn(e14.map.bytes);
  if (n2 !== `mp4`) {
    let r2 = e14.map.resolvedUri || e14.map.uri, i2 = n2 || `unknown`;
    return t2({ internal: true, message: `Found unsupported ${i2} container for initialization segment at URL: ${r2}`, code: Gu.FAILURE, metadata: { errorType: Z.Error.UnsupportedMediaInitialization, mediaType: i2 } });
  }
  Wu({ action: `probeMp4Tracks`, data: e14.map.bytes, transmuxer: e14.transmuxer, callback: ({ tracks: n3, data: r2 }) => (e14.map.bytes = r2, n3.forEach(function(t3) {
    e14.map.tracks = e14.map.tracks || {}, !e14.map.tracks[t3.type] && (e14.map.tracks[t3.type] = t3, typeof t3.id == `number` && t3.timescale && (e14.map.timescales = e14.map.timescales || {}, e14.map.timescales[t3.id] = t3.timescale));
  }), t2(null)) });
}, Qu = ({ segment: e14, finishProcessingFn: t2 }) => (n2, r2) => {
  let i2 = Yu(n2, r2);
  if (i2) return t2(i2, e14);
  let a2 = new Uint8Array(r2.response);
  if (e14.map.key) return e14.map.encryptedBytes = a2, t2(null, e14);
  e14.map.bytes = a2, Zu(e14, function(n3) {
    if (n3) return n3.xhr = r2, n3.status = r2.status, t2(n3, e14);
    t2(null, e14);
  });
}, $u = ({ segment: e14, finishProcessingFn: t2, responseType: n2 }) => (r2, i2) => {
  let a2 = Yu(r2, i2);
  if (a2) return t2(a2, e14);
  let o2 = n2 === `arraybuffer` || !i2.responseText ? i2.response : Eu(i2.responseText.substring(e14.lastReachedChar || 0));
  return e14.stats = qu(i2), e14.key ? e14.encryptedBytes = new Uint8Array(o2) : e14.bytes = new Uint8Array(o2), t2(null, e14);
}, ed = ({ segment: e14, bytes: t2, trackInfoFn: n2, timingInfoFn: r2, videoSegmentTimingInfoFn: i2, audioSegmentTimingInfoFn: a2, id3Fn: o2, captionsFn: s2, isEndOfTimeline: c2, endedTimelineFn: l2, dataFn: u2, doneFn: d2, onTransmuxerLog: f2 }) => {
  let p2 = e14.map && e14.map.tracks || {}, m2 = !!(p2.audio && p2.video), h2 = r2.bind(null, e14, `audio`, `start`), g2 = r2.bind(null, e14, `audio`, `end`), _2 = r2.bind(null, e14, `video`, `start`), v2 = r2.bind(null, e14, `video`, `end`), y2 = () => Hu({ bytes: t2, transmuxer: e14.transmuxer, audioAppendStart: e14.audioAppendStart, gopsToAlignWith: e14.gopsToAlignWith, remux: m2, onData: (t3) => {
    t3.type = t3.type === `combined` ? `video` : t3.type, u2(e14, t3);
  }, onTrackInfo: (t3) => {
    n2 && (m2 && (t3.isMuxed = true), n2(e14, t3));
  }, onAudioTimingInfo: (e15) => {
    h2 && e15.start !== void 0 && (h2(e15.start), h2 = null), g2 && e15.end !== void 0 && g2(e15.end);
  }, onVideoTimingInfo: (e15) => {
    _2 && e15.start !== void 0 && (_2(e15.start), _2 = null), v2 && e15.end !== void 0 && v2(e15.end);
  }, onVideoSegmentTimingInfo: (e15) => {
    i2(e15);
  }, onAudioSegmentTimingInfo: (e15) => {
    a2(e15);
  }, onId3: (t3, n3) => {
    o2(e14, t3, n3);
  }, onCaptions: (t3) => {
    s2(e14, [t3]);
  }, isEndOfTimeline: c2, onEndedTimeline: () => {
    l2();
  }, onTransmuxerLog: f2, onDone: (t3) => {
    d2 && (t3.type = t3.type === `combined` ? `video` : t3.type, d2(null, e14, t3));
  } });
  Wu({ action: `probeTs`, transmuxer: e14.transmuxer, data: t2, baseStartTime: e14.baseStartTime, callback: (r3) => {
    e14.bytes = t2 = r3.data;
    let i3 = r3.result;
    i3 && (n2(e14, { hasAudio: i3.hasAudio, hasVideo: i3.hasVideo, isMuxed: m2 }), n2 = null), y2();
  } });
}, td = ({ segment: e14, bytes: t2, trackInfoFn: n2, timingInfoFn: r2, videoSegmentTimingInfoFn: i2, audioSegmentTimingInfoFn: a2, id3Fn: o2, captionsFn: s2, isEndOfTimeline: c2, endedTimelineFn: l2, dataFn: u2, doneFn: d2, onTransmuxerLog: f2 }) => {
  let p2 = new Uint8Array(t2);
  if (Mn(p2)) {
    e14.isFmp4 = true;
    let { tracks: i3 } = e14.map, a3 = { isFmp4: true, hasVideo: !!i3.video, hasAudio: !!i3.audio };
    i3.audio && i3.audio.codec && i3.audio.codec !== `enca` && (a3.audioCodec = i3.audio.codec), i3.video && i3.video.codec && i3.video.codec !== `encv` && (a3.videoCodec = i3.video.codec), i3.video && i3.audio && (a3.isMuxed = true), n2(e14, a3);
    let c3 = (t3, n3) => {
      u2(e14, { data: p2, type: a3.hasAudio && !a3.isMuxed ? `audio` : `video` }), n3 && n3.length && o2(e14, n3), t3 && t3.length && s2(e14, t3), d2(null, e14, {});
    };
    Wu({ action: `probeMp4StartTime`, timescales: e14.map.timescales, data: p2, transmuxer: e14.transmuxer, callback: ({ data: n3, startTime: o3 }) => {
      t2 = n3.buffer, e14.bytes = p2 = n3, a3.hasAudio && !a3.isMuxed && r2(e14, `audio`, `start`, o3), a3.hasVideo && r2(e14, `video`, `start`, o3), Wu({ action: `probeEmsgID3`, data: p2, transmuxer: e14.transmuxer, offset: o3, callback: ({ emsgData: n4, id3Frames: r3 }) => {
        if (t2 = n4.buffer, e14.bytes = p2 = n4, !i3.video || !n4.byteLength || !e14.transmuxer) {
          c3(void 0, r3);
          return;
        }
        Wu({ action: `pushMp4Captions`, endAction: `mp4Captions`, transmuxer: e14.transmuxer, data: p2, timescales: e14.map.timescales, trackIds: [i3.video.id], callback: (n5) => {
          t2 = n5.data.buffer, e14.bytes = p2 = n5.data, n5.logs.forEach(function(e15) {
            f2(Q(e15, { stream: `mp4CaptionParser` }));
          }), c3(n5.captions, r3);
        } });
      } });
    } });
    return;
  }
  if (!e14.transmuxer) {
    d2(null, e14, {});
    return;
  }
  if (e14.container === void 0 && (e14.container = jn(p2)), e14.container !== `ts` && e14.container !== `aac`) {
    n2(e14, { hasAudio: false, hasVideo: false }), d2(null, e14, {});
    return;
  }
  ed({ segment: e14, bytes: t2, trackInfoFn: n2, timingInfoFn: r2, videoSegmentTimingInfoFn: i2, audioSegmentTimingInfoFn: a2, id3Fn: o2, captionsFn: s2, isEndOfTimeline: c2, endedTimelineFn: l2, dataFn: u2, doneFn: d2, onTransmuxerLog: f2 });
}, nd = function({ id: e14, key: t2, encryptedBytes: n2, decryptionWorker: r2 }, i2) {
  let a2 = (t3) => {
    if (t3.data.source === e14) {
      r2.removeEventListener(`message`, a2);
      let e15 = t3.data.decrypted;
      i2(new Uint8Array(e15.bytes, e15.byteOffset, e15.byteLength));
    }
  };
  r2.addEventListener(`message`, a2);
  let o2;
  o2 = t2.bytes.slice ? t2.bytes.slice() : new Uint32Array(Array.prototype.slice.call(t2.bytes)), r2.postMessage($l({ source: e14, encrypted: n2, key: o2, iv: t2.iv }), [n2.buffer, o2.buffer]);
}, rd = ({ decryptionWorker: e14, segment: t2, trackInfoFn: n2, timingInfoFn: r2, videoSegmentTimingInfoFn: i2, audioSegmentTimingInfoFn: a2, id3Fn: o2, captionsFn: s2, isEndOfTimeline: c2, endedTimelineFn: l2, dataFn: u2, doneFn: d2, onTransmuxerLog: f2 }) => {
  nd({ id: t2.requestId, key: t2.key, encryptedBytes: t2.encryptedBytes, decryptionWorker: e14 }, (e15) => {
    t2.bytes = e15, td({ segment: t2, bytes: t2.bytes, trackInfoFn: n2, timingInfoFn: r2, videoSegmentTimingInfoFn: i2, audioSegmentTimingInfoFn: a2, id3Fn: o2, captionsFn: s2, isEndOfTimeline: c2, endedTimelineFn: l2, dataFn: u2, doneFn: d2, onTransmuxerLog: f2 });
  });
}, id = ({ activeXhrs: e14, decryptionWorker: t2, trackInfoFn: n2, timingInfoFn: r2, videoSegmentTimingInfoFn: i2, audioSegmentTimingInfoFn: a2, id3Fn: o2, captionsFn: s2, isEndOfTimeline: c2, endedTimelineFn: l2, dataFn: u2, doneFn: d2, onTransmuxerLog: f2 }) => {
  let p2 = 0, m2 = false;
  return (h2, g2) => {
    if (!m2) {
      if (h2) return m2 = true, Ku(e14), d2(h2, g2);
      if (p2 += 1, p2 === e14.length) {
        let p3 = function() {
          if (g2.encryptedBytes) return rd({ decryptionWorker: t2, segment: g2, trackInfoFn: n2, timingInfoFn: r2, videoSegmentTimingInfoFn: i2, audioSegmentTimingInfoFn: a2, id3Fn: o2, captionsFn: s2, isEndOfTimeline: c2, endedTimelineFn: l2, dataFn: u2, doneFn: d2, onTransmuxerLog: f2 });
          td({ segment: g2, bytes: g2.bytes, trackInfoFn: n2, timingInfoFn: r2, videoSegmentTimingInfoFn: i2, audioSegmentTimingInfoFn: a2, id3Fn: o2, captionsFn: s2, isEndOfTimeline: c2, endedTimelineFn: l2, dataFn: u2, doneFn: d2, onTransmuxerLog: f2 });
        };
        if (g2.endOfAllRequests = Date.now(), g2.map && g2.map.encryptedBytes && !g2.map.bytes) return nd({ decryptionWorker: t2, id: g2.requestId + `-init`, encryptedBytes: g2.map.encryptedBytes, key: g2.map.key }, (t3) => {
          g2.map.bytes = t3, Zu(g2, (t4) => {
            if (t4) return Ku(e14), d2(t4, g2);
            p3();
          });
        });
        p3();
      }
    }
  };
}, ad = ({ loadendState: e14, abortFn: t2 }) => (n2) => {
  n2.target.aborted && t2 && !e14.calledAbortFn && (t2(), e14.calledAbortFn = true);
}, od = ({ segment: e14, progressFn: t2, trackInfoFn: n2, timingInfoFn: r2, videoSegmentTimingInfoFn: i2, audioSegmentTimingInfoFn: a2, id3Fn: o2, captionsFn: s2, isEndOfTimeline: c2, endedTimelineFn: l2, dataFn: u2 }) => (n3) => {
  if (!n3.target.aborted) return e14.stats = Q(e14.stats, Ju(n3)), !e14.stats.firstBytesReceivedAt && e14.stats.bytesReceived && (e14.stats.firstBytesReceivedAt = Date.now()), t2(n3, e14);
}, sd = ({ xhr: e14, xhrOptions: t2, decryptionWorker: n2, segment: r2, abortFn: i2, progressFn: a2, trackInfoFn: o2, timingInfoFn: s2, videoSegmentTimingInfoFn: c2, audioSegmentTimingInfoFn: l2, id3Fn: u2, captionsFn: d2, isEndOfTimeline: f2, endedTimelineFn: p2, dataFn: m2, doneFn: h2, onTransmuxerLog: g2 }) => {
  let _2 = [], v2 = id({ activeXhrs: _2, decryptionWorker: n2, trackInfoFn: o2, timingInfoFn: s2, videoSegmentTimingInfoFn: c2, audioSegmentTimingInfoFn: l2, id3Fn: u2, captionsFn: d2, isEndOfTimeline: f2, endedTimelineFn: p2, dataFn: m2, doneFn: h2, onTransmuxerLog: g2 });
  if (r2.key && !r2.key.bytes) {
    let n3 = [r2.key];
    r2.map && !r2.map.bytes && r2.map.key && r2.map.key.resolvedUri === r2.key.resolvedUri && n3.push(r2.map.key);
    let i3 = e14(Q(t2, { uri: r2.key.resolvedUri, responseType: `arraybuffer`, requestType: `segment-key` }), Xu(r2, n3, v2));
    _2.push(i3);
  }
  if (r2.map && !r2.map.bytes) {
    if (r2.map.key && (!r2.key || r2.key.resolvedUri !== r2.map.key.resolvedUri)) {
      let n4 = e14(Q(t2, { uri: r2.map.key.resolvedUri, responseType: `arraybuffer`, requestType: `segment-key` }), Xu(r2, [r2.map.key], v2));
      _2.push(n4);
    }
    let n3 = e14(Q(t2, { uri: r2.map.resolvedUri, responseType: `arraybuffer`, headers: Yl(r2.map), requestType: `segment-media-initialization` }), Qu({ segment: r2, finishProcessingFn: v2 }));
    _2.push(n3);
  }
  let y2 = Q(t2, { uri: r2.part && r2.part.resolvedUri || r2.resolvedUri, responseType: `arraybuffer`, headers: Yl(r2), requestType: `segment` }), b2 = e14(y2, $u({ segment: r2, finishProcessingFn: v2, responseType: y2.responseType }));
  b2.addEventListener(`progress`, od({ segment: r2, progressFn: a2, trackInfoFn: o2, timingInfoFn: s2, videoSegmentTimingInfoFn: c2, audioSegmentTimingInfoFn: l2, id3Fn: u2, captionsFn: d2, isEndOfTimeline: f2, endedTimelineFn: p2, dataFn: m2 })), _2.push(b2);
  let x2 = {};
  return _2.forEach((e15) => {
    e15.addEventListener(`loadend`, ad({ loadendState: x2, abortFn: i2 }));
  }), () => Ku(_2);
}, cd = Ic(`CodecUtils`), ld = function(e14) {
  let t2 = e14.attributes || {};
  if (t2.CODECS) return de(t2.CODECS);
}, ud = (e14, t2) => {
  let n2 = t2.attributes || {};
  return e14 && e14.mediaGroups && e14.mediaGroups.AUDIO && n2.AUDIO && e14.mediaGroups.AUDIO[n2.AUDIO];
}, dd = (e14, t2) => {
  if (!ud(e14, t2)) return true;
  let n2 = t2.attributes || {}, r2 = e14.mediaGroups.AUDIO[n2.AUDIO];
  for (let e15 in r2) if (!r2[e15].uri && !r2[e15].playlists) return true;
  return false;
}, fd = function(e14) {
  let t2 = {};
  return e14.forEach(({ mediaType: e15, type: n2, details: r2 }) => {
    t2[e15] = t2[e15] || [], t2[e15].push(ue(`${n2}${r2}`));
  }), Object.keys(t2).forEach(function(e15) {
    if (t2[e15].length > 1) {
      cd(`multiple ${e15} codecs found as attributes: ${t2[e15].join(`, `)}. Setting playlist codecs to null so that we wait for mux.js to probe segments for real codecs.`), t2[e15] = null;
      return;
    }
    t2[e15] = t2[e15][0];
  }), t2;
}, pd = function(e14) {
  let t2 = 0;
  return e14.audio && t2++, e14.video && t2++, t2;
}, md = function(e14, t2) {
  let n2 = t2.attributes || {}, r2 = fd(ld(t2) || []);
  if (ud(e14, t2) && !r2.audio && !dd(e14, t2)) {
    let t3 = fd(fe(e14, n2.AUDIO) || []);
    t3.audio && (r2.audio = t3.audio);
  }
  return r2;
}, hd = Ic(`PlaylistSelector`), gd = function(e14) {
  if (!e14 || !e14.playlist) return;
  let t2 = e14.playlist;
  return JSON.stringify({ id: t2.id, bandwidth: e14.bandwidth, width: e14.width, height: e14.height, codecs: t2.attributes && t2.attributes.CODECS || `` });
}, _d = function(e14, t2) {
  if (!e14) return ``;
  let n2 = h.default.getComputedStyle(e14);
  return n2 ? n2[t2] : ``;
}, vd = function(e14, t2) {
  let n2 = e14.slice();
  e14.sort(function(e15, r2) {
    let i2 = t2(e15, r2);
    return i2 === 0 ? n2.indexOf(e15) - n2.indexOf(r2) : i2;
  });
}, yd = function(e14, t2) {
  let n2, r2;
  return e14.attributes.BANDWIDTH && (n2 = e14.attributes.BANDWIDTH), n2 ||= h.default.Number.MAX_VALUE, t2.attributes.BANDWIDTH && (r2 = t2.attributes.BANDWIDTH), r2 ||= h.default.Number.MAX_VALUE, n2 - r2;
}, bd = function(e14, t2) {
  let n2, r2;
  return e14.attributes.RESOLUTION && e14.attributes.RESOLUTION.width && (n2 = e14.attributes.RESOLUTION.width), n2 ||= h.default.Number.MAX_VALUE, t2.attributes.RESOLUTION && t2.attributes.RESOLUTION.width && (r2 = t2.attributes.RESOLUTION.width), r2 ||= h.default.Number.MAX_VALUE, n2 === r2 && e14.attributes.BANDWIDTH && t2.attributes.BANDWIDTH ? e14.attributes.BANDWIDTH - t2.attributes.BANDWIDTH : n2 - r2;
}, xd = function(e14, t2, n2, r2, i2, a2) {
  if (!e14) return;
  let o2 = { bandwidth: t2, width: n2, height: r2, limitRenditionByPlayerDimensions: i2 }, s2 = e14.playlists;
  Sl.isAudioOnly(e14) && (s2 = a2.getAudioTrackPlaylists_(), o2.audioOnly = true);
  let c2 = s2.map((e15) => {
    let t3, n3 = e15.attributes && e15.attributes.RESOLUTION && e15.attributes.RESOLUTION.width, r3 = e15.attributes && e15.attributes.RESOLUTION && e15.attributes.RESOLUTION.height;
    return t3 = e15.attributes && e15.attributes.BANDWIDTH, t3 ||= h.default.Number.MAX_VALUE, { bandwidth: t3, width: n3, height: r3, playlist: e15 };
  });
  vd(c2, (e15, t3) => e15.bandwidth - t3.bandwidth), c2 = c2.filter((e15) => !Sl.isIncompatible(e15.playlist));
  let l2 = c2.filter((e15) => Sl.isEnabled(e15.playlist));
  l2.length || (l2 = c2.filter((e15) => !Sl.isDisabled(e15.playlist)));
  let u2 = l2.filter((e15) => e15.bandwidth * Tu.BANDWIDTH_VARIANCE < t2), d2 = u2[u2.length - 1], f2 = u2.filter((e15) => e15.bandwidth === d2.bandwidth)[0];
  if (i2 === false) {
    let e15 = f2 || l2[0] || c2[0];
    if (e15 && e15.playlist) {
      let t3 = `sortedPlaylistReps`;
      return f2 && (t3 = `bandwidthBestRep`), l2[0] && (t3 = `enabledPlaylistReps`), hd(`choosing ${gd(e15)} using ${t3} with options`, o2), e15.playlist;
    }
    return hd(`could not choose a playlist with options`, o2), null;
  }
  let p2 = u2.filter((e15) => e15.width && e15.height);
  vd(p2, (e15, t3) => e15.width - t3.width);
  let m2 = p2.filter((e15) => e15.width === n2 && e15.height === r2);
  d2 = m2[m2.length - 1];
  let g2 = m2.filter((e15) => e15.bandwidth === d2.bandwidth)[0], _2, v2, y2;
  g2 || (_2 = p2.filter((e15) => e15.width > n2 || e15.height > r2), v2 = _2.filter((e15) => e15.width === _2[0].width && e15.height === _2[0].height), d2 = v2[v2.length - 1], y2 = v2.filter((e15) => e15.bandwidth === d2.bandwidth)[0]);
  let b2;
  if (a2.leastPixelDiffSelector) {
    let e15 = p2.map((e16) => (e16.pixelDiff = Math.abs(e16.width - n2) + Math.abs(e16.height - r2), e16));
    vd(e15, (e16, t3) => e16.pixelDiff === t3.pixelDiff ? t3.bandwidth - e16.bandwidth : e16.pixelDiff - t3.pixelDiff), b2 = e15[0];
  }
  let x2 = b2 || y2 || g2 || f2 || l2[0] || c2[0];
  if (x2 && x2.playlist) {
    let e15 = `sortedPlaylistReps`;
    return b2 ? e15 = `leastPixelDiffRep` : y2 ? e15 = `resolutionPlusOneRep` : g2 ? e15 = `resolutionBestRep` : f2 ? e15 = `bandwidthBestRep` : l2[0] && (e15 = `enabledPlaylistReps`), hd(`choosing ${gd(x2)} using ${e15} with options`, o2), x2.playlist;
  }
  return hd(`could not choose a playlist with options`, o2), null;
}, Sd = function() {
  let e14 = this.useDevicePixelRatio && h.default.devicePixelRatio || 1;
  return isNaN(this.customPixelRatio) || (e14 = this.customPixelRatio), xd(this.playlists.main, this.systemBandwidth, parseInt(_d(this.tech_.el(), `width`), 10) * e14, parseInt(_d(this.tech_.el(), `height`), 10) * e14, this.limitRenditionByPlayerDimensions, this.playlistController_);
}, Cd = function(e14) {
  let t2 = -1, n2 = -1;
  if (e14 < 0 || e14 > 1) throw Error(`Moving average bandwidth decay must be between 0 and 1.`);
  return function() {
    let r2 = this.useDevicePixelRatio && h.default.devicePixelRatio || 1;
    return isNaN(this.customPixelRatio) || (r2 = this.customPixelRatio), t2 < 0 && (t2 = this.systemBandwidth, n2 = this.systemBandwidth), this.systemBandwidth > 0 && this.systemBandwidth !== n2 && (t2 = e14 * this.systemBandwidth + (1 - e14) * t2, n2 = this.systemBandwidth), xd(this.playlists.main, t2, parseInt(_d(this.tech_.el(), `width`), 10) * r2, parseInt(_d(this.tech_.el(), `height`), 10) * r2, this.limitRenditionByPlayerDimensions, this.playlistController_);
  };
}, wd = function(e14) {
  let { main: t2, currentTime: n2, bandwidth: r2, duration: i2, segmentDuration: a2, timeUntilRebuffer: o2, currentTimeline: s2, syncController: c2 } = e14, l2 = t2.playlists.filter((e15) => !Sl.isIncompatible(e15)), u2 = l2.filter(Sl.isEnabled);
  u2.length || (u2 = l2.filter((e15) => !Sl.isDisabled(e15)));
  let d2 = u2.filter(Sl.hasAttribute.bind(null, `BANDWIDTH`)).map((e15) => {
    let t3 = c2.getSyncPoint(e15, i2, s2, n2) ? 1 : 2;
    return { playlist: e15, rebufferingImpact: Sl.estimateSegmentRequestTime(a2, r2, e15) * t3 - o2 };
  }), f2 = d2.filter((e15) => e15.rebufferingImpact <= 0);
  return vd(f2, (e15, t3) => yd(t3.playlist, e15.playlist)), f2.length ? f2[0] : (vd(d2, (e15, t3) => e15.rebufferingImpact - t3.rebufferingImpact), d2[0] || null);
}, Td = function() {
  let e14 = this.playlists.main.playlists.filter(Sl.isEnabled);
  return vd(e14, (e15, t2) => yd(e15, t2)), e14.filter((e15) => !!md(this.playlists.main, e15).video)[0] || null;
}, Ed = (e14) => {
  let t2 = 0, n2;
  return e14.bytes && (n2 = new Uint8Array(e14.bytes), e14.segments.forEach((e15) => {
    n2.set(e15, t2), t2 += e15.byteLength;
  })), n2;
};
function Dd(e14) {
  try {
    return new URL(e14).pathname.split(`/`).slice(-2).join(`/`);
  } catch {
    return ``;
  }
}
var Od = function(e14, t2, n2) {
  if (!e14[n2]) {
    t2.trigger({ type: `usage`, name: `vhs-608` });
    let r2 = n2;
    /^cc708_/.test(n2) && (r2 = `SERVICE` + n2.split(`_`)[1]);
    let i2 = t2.textTracks().getTrackById(r2);
    if (i2) e14[n2] = i2;
    else {
      let i3 = t2.options_.vhs && t2.options_.vhs.captionServices || {}, a2 = n2, o2 = n2, s2 = false, c2 = i3[r2];
      c2 && (a2 = c2.label, o2 = c2.language, s2 = c2.default), e14[n2] = t2.addRemoteTextTrack({ kind: `captions`, id: r2, default: s2, label: a2, language: o2 }, false).track;
    }
  }
}, kd = function({ inbandTextTracks: e14, captionArray: t2, timestampOffset: n2 }) {
  if (!t2) return;
  let r2 = h.default.WebKitDataCue || h.default.VTTCue;
  t2.forEach((t3) => {
    let i2 = t3.stream;
    t3.content ? t3.content.forEach((a2) => {
      let o2 = new r2(t3.startTime + n2, t3.endTime + n2, a2.text);
      o2.line = a2.line, o2.align = `left`, o2.position = a2.position, o2.positionAlign = `line-left`, e14[i2].addCue(o2);
    }) : e14[i2].addCue(new r2(t3.startTime + n2, t3.endTime + n2, t3.text));
  });
}, Ad = function(e14) {
  Object.defineProperties(e14.frame, { id: { get() {
    return Z.log.warn(`cue.frame.id is deprecated. Use cue.value.key instead.`), e14.value.key;
  } }, value: { get() {
    return Z.log.warn(`cue.frame.value is deprecated. Use cue.value.data instead.`), e14.value.data;
  } }, privateData: { get() {
    return Z.log.warn(`cue.frame.privateData is deprecated. Use cue.value.data instead.`), e14.value.data;
  } } });
}, jd = ({ inbandTextTracks: e14, metadataArray: t2, timestampOffset: n2, videoDuration: r2 }) => {
  if (!t2) return;
  let i2 = h.default.WebKitDataCue || h.default.VTTCue, a2 = e14.metadataTrack_;
  if (!a2 || (t2.forEach((e15) => {
    let t3 = e15.cueTime + n2;
    typeof t3 != `number` || h.default.isNaN(t3) || t3 < 0 || !(t3 < 1 / 0) || !e15.frames || !e15.frames.length || e15.frames.forEach((e16) => {
      let n3 = new i2(t3, t3, e16.value || e16.url || e16.data || ``);
      n3.frame = e16, n3.value = e16, Ad(n3), a2.addCue(n3);
    });
  }), !a2.cues || !a2.cues.length)) return;
  let o2 = a2.cues, s2 = [];
  for (let e15 = 0; e15 < o2.length; e15++) o2[e15] && s2.push(o2[e15]);
  let c2 = s2.reduce((e15, t3) => {
    let n3 = e15[t3.startTime] || [];
    return n3.push(t3), e15[t3.startTime] = n3, e15;
  }, {}), l2 = Object.keys(c2).sort((e15, t3) => Number(e15) - Number(t3));
  l2.forEach((e15, t3) => {
    let n3 = c2[e15], i3 = isFinite(r2) ? r2 : e15, a3 = Number(l2[t3 + 1]) || i3;
    n3.forEach((e16) => {
      e16.endTime = a3;
    });
  });
}, Md = { id: `ID`, class: `CLASS`, startDate: `START-DATE`, duration: `DURATION`, endDate: `END-DATE`, endOnNext: `END-ON-NEXT`, plannedDuration: `PLANNED-DURATION`, scte35Out: `SCTE35-OUT`, scte35In: `SCTE35-IN` }, Nd = /* @__PURE__ */ new Set([`id`, `class`, `startDate`, `duration`, `endDate`, `endOnNext`, `startTime`, `endTime`, `processDateRange`]), Pd = ({ inbandTextTracks: e14, dateRanges: t2 }) => {
  let n2 = e14.metadataTrack_;
  if (!n2) return;
  let r2 = h.default.WebKitDataCue || h.default.VTTCue;
  t2.forEach((e15) => {
    for (let t3 of Object.keys(e15)) {
      if (Nd.has(t3)) continue;
      let i2 = new r2(e15.startTime, e15.endTime, ``);
      i2.id = e15.id, i2.type = `com.apple.quicktime.HLS`, i2.value = { key: Md[t3], data: e15[t3] }, (t3 === `scte35Out` || t3 === `scte35In`) && (i2.value.data = new Uint8Array(i2.value.data.match(/[\da-f]{2}/gi)).buffer), n2.addCue(i2);
    }
    e15.processDateRange();
  });
}, Fd = (e14, t2, n2) => {
  e14.metadataTrack_ || (e14.metadataTrack_ = n2.addRemoteTextTrack({ kind: `metadata`, label: `Timed Metadata` }, false).track, Z.browser.IS_ANY_SAFARI || (e14.metadataTrack_.inBandMetadataTrackDispatchType = t2));
}, Id = function(e14, t2, n2) {
  let r2, i2;
  if (n2 && n2.cues) for (r2 = n2.cues.length; r2--; ) i2 = n2.cues[r2], i2.startTime >= e14 && i2.endTime <= t2 && n2.removeCue(i2);
}, Ld = function(e14) {
  let t2 = e14.cues;
  if (!t2) return;
  let n2 = {};
  for (let r2 = t2.length - 1; r2 >= 0; r2--) {
    let i2 = t2[r2], a2 = `${i2.startTime}-${i2.endTime}-${i2.text}`;
    n2[a2] ? e14.removeCue(i2) : n2[a2] = i2;
  }
}, Rd = (e14, t2, n2) => {
  if (t2 == null || !e14.length) return [];
  let r2 = Math.ceil((t2 - n2 + 3) * Nn.ONE_SECOND_IN_TS), i2;
  for (i2 = 0; i2 < e14.length && !(e14[i2].pts > r2); i2++) ;
  return e14.slice(i2);
}, zd = (e14, t2, n2) => {
  if (!t2.length) return e14;
  if (n2) return t2.slice();
  let r2 = t2[0].pts, i2 = 0;
  for (; i2 < e14.length && !(e14[i2].pts >= r2); i2++) ;
  return e14.slice(0, i2).concat(t2);
}, Bd = (e14, t2, n2, r2) => {
  let i2 = Math.ceil((t2 - r2) * Nn.ONE_SECOND_IN_TS), a2 = Math.ceil((n2 - r2) * Nn.ONE_SECOND_IN_TS), o2 = e14.slice(), s2 = e14.length;
  for (; s2-- && !(e14[s2].pts <= a2); ) ;
  if (s2 === -1) return o2;
  let c2 = s2 + 1;
  for (; c2-- && !(e14[c2].pts <= i2); ) ;
  return c2 = Math.max(c2, 0), o2.splice(c2, s2 - c2 + 1), o2;
}, Vd = function(e14, t2) {
  if (!e14 && !t2 || !e14 && t2 || e14 && !t2) return false;
  if (e14 === t2) return true;
  let n2 = Object.keys(e14).sort(), r2 = Object.keys(t2).sort();
  if (n2.length !== r2.length) return false;
  for (let i2 = 0; i2 < n2.length; i2++) {
    let a2 = n2[i2];
    if (a2 !== r2[i2] || e14[a2] !== t2[a2]) return false;
  }
  return true;
}, Hd = 22, Ud = function(e14, t2, n2) {
  t2 ||= [];
  let r2 = [], i2 = 0;
  for (let a2 = 0; a2 < t2.length; a2++) {
    let o2 = t2[a2];
    if (e14 === o2.timeline && (r2.push(a2), i2 += o2.duration, i2 > n2)) return a2;
  }
  return r2.length === 0 ? 0 : r2[r2.length - 1];
}, Wd = 1, Gd = 500, Kd = (e14) => typeof e14 == `number` && isFinite(e14), qd = 1 / 60, Jd = (e14, t2, n2) => e14 !== `main` || !t2 || !n2 ? null : !n2.hasAudio && !n2.hasVideo ? `Neither audio nor video found in segment.` : t2.hasVideo && !n2.hasVideo ? `Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest.` : !t2.hasVideo && n2.hasVideo ? `Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest.` : null, Yd = (e14, t2, n2) => {
  let r2 = t2 - Tu.BACK_BUFFER_LENGTH;
  e14.length && (r2 = Math.max(r2, e14.start(0)));
  let i2 = t2 - n2;
  return Math.min(i2, r2);
}, Xd = (e14) => {
  let { startOfSegment: t2, duration: n2, segment: r2, part: i2, playlist: { mediaSequence: a2, id: o2, segments: s2 = [] }, mediaIndex: c2, partIndex: l2, timeline: u2 } = e14, d2 = s2.length - 1, f2 = `mediaIndex/partIndex increment`;
  e14.getMediaInfoForTime ? f2 = `getMediaInfoForTime (${e14.getMediaInfoForTime})` : e14.isSyncRequest && (f2 = `getSyncSegmentCandidate (isSyncRequest)`), e14.independent && (f2 += ` with independent ${e14.independent}`);
  let p2 = typeof l2 == `number`, m2 = e14.segment.uri ? `segment` : `pre-segment`, h2 = p2 ? tl({ preloadSegment: r2 }) - 1 : 0;
  return `${m2} [${a2 + c2}/${a2 + d2}]` + (p2 ? ` part [${l2}/${h2}]` : ``) + ` segment start/end [${r2.start} => ${r2.end}]` + (p2 ? ` part start/end [${i2.start} => ${i2.end}]` : ``) + ` startOfSegment [${t2}] duration [${n2}] timeline [${u2}] selected by [${f2}] playlist [${o2}]`;
}, Zd = (e14) => `${e14}TimingInfo`, Qd = ({ segmentTimeline: e14, currentTimeline: t2, startOfSegment: n2, buffered: r2, overrideCheck: i2 }) => !i2 && e14 === t2 ? null : e14 < t2 ? n2 : r2.length ? r2.end(r2.length - 1) : n2, $d = ({ timelineChangeController: e14, currentTimeline: t2, segmentTimeline: n2, loaderType: r2, audioDisabled: i2 }) => {
  if (t2 === n2) return false;
  if (r2 === `audio`) {
    let t3 = e14.lastTimelineChange({ type: `main` });
    return !t3 || t3.to !== n2;
  }
  if (r2 === `main` && i2) {
    let t3 = e14.pendingTimelineChange({ type: `audio` });
    return !(t3 && t3.to === n2);
  }
  return false;
}, ef = (e14) => {
  let t2 = 0;
  return [`video`, `audio`].forEach(function(n2) {
    let r2 = e14[`${n2}TimingInfo`];
    if (!r2) return;
    let { start: i2, end: a2 } = r2, o2;
    typeof i2 == `bigint` || typeof a2 == `bigint` ? o2 = h.default.BigInt(a2) - h.default.BigInt(i2) : typeof i2 == `number` && typeof a2 == `number` && (o2 = a2 - i2), o2 !== void 0 && o2 > t2 && (t2 = o2);
  }), typeof t2 == `bigint` && t2 < 2 ** 53 - 1 && (t2 = Number(t2)), t2;
}, tf = ({ segmentDuration: e14, maxDuration: t2 }) => e14 ? Math.round(e14) > t2 + zc : false, nf = (e14, t2) => {
  if (t2 !== `hls`) return null;
  let n2 = ef({ audioTimingInfo: e14.audioTimingInfo, videoTimingInfo: e14.videoTimingInfo });
  if (!n2) return null;
  let r2 = e14.playlist.targetDuration, i2 = tf({ segmentDuration: n2, maxDuration: r2 * 2 }), a2 = tf({ segmentDuration: n2, maxDuration: r2 }), o2 = `Segment with index ${e14.mediaIndex} from playlist ${e14.playlist.id} has a duration of ${n2} when the reported duration is ${e14.duration} and the target duration is ${r2}. For HLS content, a duration in excess of the target duration may result in playback issues. See the HLS specification section on EXT-X-TARGETDURATION for more details: https://tools.ietf.org/html/draft-pantos-http-live-streaming-23#section-4.3.3.1`;
  return i2 || a2 ? { severity: i2 ? `warn` : `info`, message: o2 } : null;
}, rf = class extends Z.EventTarget {
  constructor(e14, t2 = {}) {
    if (super(), !e14) throw TypeError(`Initialization settings are required`);
    if (typeof e14.currentTime != `function`) throw TypeError(`No currentTime getter specified`);
    if (!e14.mediaSource) throw TypeError(`No MediaSource specified`);
    this.bandwidth = e14.bandwidth, this.throughput = { rate: 0, count: 0 }, this.roundTrip = NaN, this.resetStats_(), this.mediaIndex = null, this.partIndex = null, this.hasPlayed_ = e14.hasPlayed, this.currentTime_ = e14.currentTime, this.seekable_ = e14.seekable, this.seeking_ = e14.seeking, this.duration_ = e14.duration, this.mediaSource_ = e14.mediaSource, this.vhs_ = e14.vhs, this.loaderType_ = e14.loaderType, this.currentMediaInfo_ = void 0, this.startingMediaInfo_ = void 0, this.segmentMetadataTrack_ = e14.segmentMetadataTrack, this.goalBufferLength_ = e14.goalBufferLength, this.sourceType_ = e14.sourceType, this.sourceUpdater_ = e14.sourceUpdater, this.inbandTextTracks_ = e14.inbandTextTracks, this.state_ = `INIT`, this.timelineChangeController_ = e14.timelineChangeController, this.shouldSaveSegmentTimingInfo_ = true, this.parse708captions_ = e14.parse708captions, this.useDtsForTimestampOffset_ = e14.useDtsForTimestampOffset, this.captionServices_ = e14.captionServices, this.exactManifestTimings = e14.exactManifestTimings, this.addMetadataToTextTrack = e14.addMetadataToTextTrack, this.checkBufferTimeout_ = null, this.error_ = void 0, this.currentTimeline_ = -1, this.shouldForceTimestampOffsetAfterResync_ = false, this.pendingSegment_ = null, this.xhrOptions_ = null, this.pendingSegments_ = [], this.audioDisabled_ = false, this.isPendingTimestampOffset_ = false, this.gopBuffer_ = [], this.timeMapping_ = 0, this.safeAppend_ = false, this.appendInitSegment_ = { audio: true, video: true }, this.playlistOfLastInitSegment_ = { audio: null, video: null }, this.callQueue_ = [], this.loadQueue_ = [], this.metadataQueue_ = { id3: [], caption: [] }, this.waitingOnRemove_ = false, this.quotaExceededErrorRetryTimeout_ = null, this.activeInitSegmentId_ = null, this.initSegments_ = {}, this.cacheEncryptionKeys_ = e14.cacheEncryptionKeys, this.keyCache_ = {}, this.decrypter_ = e14.decrypter, this.syncController_ = e14.syncController, this.syncPoint_ = { segmentIndex: 0, time: 0 }, this.transmuxer_ = this.createTransmuxer_(), this.triggerSyncInfoUpdate_ = () => this.trigger(`syncinfoupdate`), this.syncController_.on(`syncinfoupdate`, this.triggerSyncInfoUpdate_), this.mediaSource_.addEventListener(`sourceopen`, () => {
      this.isEndOfStream_() || (this.ended_ = false);
    }), this.fetchAtBuffer_ = false, this.logger_ = Ic(`SegmentLoader[${this.loaderType_}]`), Object.defineProperty(this, "state", { get() {
      return this.state_;
    }, set(e15) {
      e15 !== this.state_ && (this.logger_(`${this.state_} -> ${e15}`), this.state_ = e15, this.trigger(`statechange`));
    } }), this.sourceUpdater_.on(`ready`, () => {
      this.hasEnoughInfoToAppend_() && this.processCallQueue_();
    }), this.loaderType_ === `main` && this.timelineChangeController_.on(`pendingtimelinechange`, () => {
      this.hasEnoughInfoToAppend_() && this.processCallQueue_();
    }), this.loaderType_ === `audio` && this.timelineChangeController_.on(`timelinechange`, () => {
      this.hasEnoughInfoToLoad_() && this.processLoadQueue_(), this.hasEnoughInfoToAppend_() && this.processCallQueue_();
    });
  }
  get mediaSequenceSync_() {
    return this.syncController_.getMediaSequenceSync(this.loaderType_);
  }
  createTransmuxer_() {
    return Uu.createTransmuxer({ remux: false, alignGopsAtEnd: this.safeAppend_, keepOriginalTimestamps: true, parse708captions: this.parse708captions_, captionServices: this.captionServices_ });
  }
  resetStats_() {
    this.mediaBytesTransferred = 0, this.mediaRequests = 0, this.mediaRequestsAborted = 0, this.mediaRequestsTimedout = 0, this.mediaRequestsErrored = 0, this.mediaTransferDuration = 0, this.mediaSecondsLoaded = 0, this.mediaAppends = 0;
  }
  dispose() {
    this.trigger(`dispose`), this.state = `DISPOSED`, this.pause(), this.abort_(), this.transmuxer_ && this.transmuxer_.terminate(), this.resetStats_(), this.checkBufferTimeout_ && h.default.clearTimeout(this.checkBufferTimeout_), this.syncController_ && this.triggerSyncInfoUpdate_ && this.syncController_.off(`syncinfoupdate`, this.triggerSyncInfoUpdate_), this.off();
  }
  setAudio(e14) {
    this.audioDisabled_ = !e14, e14 ? this.appendInitSegment_.audio = true : this.sourceUpdater_.removeAudio(0, this.duration_());
  }
  abort() {
    if (this.state !== `WAITING`) {
      this.pendingSegment_ &&= null;
      return;
    }
    this.abort_(), this.state = `READY`, this.paused() || this.monitorBuffer_();
  }
  abort_() {
    this.pendingSegment_ && this.pendingSegment_.abortRequests && this.pendingSegment_.abortRequests(), this.pendingSegment_ = null, this.callQueue_ = [], this.loadQueue_ = [], this.metadataQueue_.id3 = [], this.metadataQueue_.caption = [], this.timelineChangeController_.clearPendingTimelineChange(this.loaderType_), this.waitingOnRemove_ = false, h.default.clearTimeout(this.quotaExceededErrorRetryTimeout_), this.quotaExceededErrorRetryTimeout_ = null;
  }
  checkForAbort_(e14) {
    return this.state === `APPENDING` && !this.pendingSegment_ ? (this.state = `READY`, true) : !this.pendingSegment_ || this.pendingSegment_.requestId !== e14;
  }
  error(e14) {
    return e14 !== void 0 && (this.logger_(`error occurred:`, e14), this.error_ = e14), this.pendingSegment_ = null, this.error_;
  }
  endOfStream() {
    this.ended_ = true, this.transmuxer_ && Uu.reset(this.transmuxer_), this.gopBuffer_.length = 0, this.pause(), this.trigger(`ended`);
  }
  buffered_() {
    let e14 = this.getMediaInfo_();
    if (!this.sourceUpdater_ || !e14) return Lc();
    if (this.loaderType_ === `main`) {
      let { hasAudio: t2, hasVideo: n2, isMuxed: r2 } = e14;
      if (n2 && t2 && !this.audioDisabled_ && !r2) return this.sourceUpdater_.buffered();
      if (n2) return this.sourceUpdater_.videoBuffered();
    }
    return this.sourceUpdater_.audioBuffered();
  }
  initSegmentForMap(e14, t2 = false) {
    if (!e14) return null;
    let n2 = eu(e14), r2 = this.initSegments_[n2];
    return t2 && !r2 && e14.bytes && (this.initSegments_[n2] = r2 = { resolvedUri: e14.resolvedUri, byterange: e14.byterange, bytes: e14.bytes, tracks: e14.tracks, timescales: e14.timescales }), r2 || e14;
  }
  segmentKey(e14, t2 = false) {
    if (!e14) return null;
    let n2 = tu(e14), r2 = this.keyCache_[n2];
    this.cacheEncryptionKeys_ && t2 && !r2 && e14.bytes && (this.keyCache_[n2] = r2 = { resolvedUri: e14.resolvedUri, bytes: e14.bytes });
    let i2 = { resolvedUri: (r2 || e14).resolvedUri };
    return r2 && (i2.bytes = r2.bytes), i2;
  }
  couldBeginLoading_() {
    return this.playlist_ && !this.paused();
  }
  load() {
    if (this.monitorBuffer_(), this.playlist_) {
      if (this.state === `INIT` && this.couldBeginLoading_()) return this.init_();
      !this.couldBeginLoading_() || this.state !== `READY` && this.state !== `INIT` || (this.state = `READY`);
    }
  }
  init_() {
    return this.state = `READY`, this.resetEverything(), this.monitorBuffer_();
  }
  playlist(e14, t2 = {}) {
    if (!e14) return;
    let n2 = this.playlist_, r2 = this.pendingSegment_;
    this.playlist_ = e14, this.xhrOptions_ = t2, this.state === `INIT` && (e14.syncInfo = { mediaSequence: e14.mediaSequence, time: 0 }, this.loaderType_ === `main` && this.syncController_.setDateTimeMappingForStart(e14));
    let i2 = null;
    if (n2 && (n2.id ? i2 = n2.id : n2.uri && (i2 = n2.uri)), this.logger_(`playlist update [${i2} => ${e14.id || e14.uri}]`), this.mediaSequenceSync_ && (this.mediaSequenceSync_.update(e14, this.currentTime_()), this.logger_(`Playlist update:
currentTime: ${this.currentTime_()}
bufferedEnd: ${Xc(this.buffered_())}
`, this.mediaSequenceSync_.diagnostics)), this.trigger(`syncinfoupdate`), this.state === `INIT` && this.couldBeginLoading_()) return this.init_();
    if (!n2 || n2.uri !== e14.uri) {
      this.mediaIndex !== null && (!e14.endList && typeof e14.partTargetDuration == `number` ? this.resetLoader() : this.resyncLoader()), this.currentMediaInfo_ = void 0, this.trigger(`playlistupdate`);
      return;
    }
    let a2 = e14.mediaSequence - n2.mediaSequence;
    if (this.logger_(`live window shift [${a2}]`), this.mediaIndex !== null) if (this.mediaIndex -= a2, this.mediaIndex < 0) this.mediaIndex = null, this.partIndex = null;
    else {
      let e15 = this.playlist_.segments[this.mediaIndex];
      if (this.partIndex && (!e15.parts || !e15.parts.length || !e15.parts[this.partIndex])) {
        let e16 = this.mediaIndex;
        this.logger_(`currently processing part (index ${this.partIndex}) no longer exists.`), this.resetLoader(), this.mediaIndex = e16;
      }
    }
    r2 && (r2.mediaIndex -= a2, r2.mediaIndex < 0 ? (r2.mediaIndex = null, r2.partIndex = null) : (r2.mediaIndex >= 0 && (r2.segment = e14.segments[r2.mediaIndex]), r2.partIndex >= 0 && r2.segment.parts && (r2.part = r2.segment.parts[r2.partIndex]))), this.syncController_.saveExpiredSegmentInfo(n2, e14);
  }
  pause() {
    this.checkBufferTimeout_ &&= (h.default.clearTimeout(this.checkBufferTimeout_), null);
  }
  paused() {
    return this.checkBufferTimeout_ === null;
  }
  resetEverything(e14) {
    this.ended_ = false, this.activeInitSegmentId_ = null, this.appendInitSegment_ = { audio: true, video: true }, this.resetLoader(), this.remove(0, 1 / 0, e14), this.transmuxer_ && (this.transmuxer_.postMessage({ action: `clearAllMp4Captions` }), this.transmuxer_.postMessage({ action: `reset` }));
  }
  resetLoader() {
    this.fetchAtBuffer_ = false, this.mediaSequenceSync_ && this.mediaSequenceSync_.resetAppendedStatus(), this.resyncLoader();
  }
  resyncLoader() {
    this.transmuxer_ && Uu.reset(this.transmuxer_), this.mediaIndex = null, this.partIndex = null, this.syncPoint_ = null, this.isPendingTimestampOffset_ = false;
    let e14 = this.currentMediaInfo_ && this.currentMediaInfo_.isFmp4;
    this.sourceType_ === `hls` && !e14 && (this.shouldForceTimestampOffsetAfterResync_ = true), this.callQueue_ = [], this.loadQueue_ = [], this.metadataQueue_.id3 = [], this.metadataQueue_.caption = [], this.abort(), this.transmuxer_ && this.transmuxer_.postMessage({ action: `clearParsedMp4Captions` });
  }
  remove(e14, t2, n2 = () => {
  }, r2 = false) {
    if (t2 === 1 / 0 && (t2 = this.duration_()), t2 <= e14) {
      this.logger_("skipping remove because end ${end} is <= start ${start}");
      return;
    }
    if (!this.sourceUpdater_ || !this.getMediaInfo_()) {
      this.logger_(`skipping remove because no source updater or starting media info`);
      return;
    }
    let i2 = 1, a2 = () => {
      i2--, i2 === 0 && n2();
    };
    (r2 || !this.audioDisabled_) && (i2++, this.sourceUpdater_.removeAudio(e14, t2, a2)), (r2 || this.loaderType_ === `main`) && (this.gopBuffer_ = Bd(this.gopBuffer_, e14, t2, this.timeMapping_), i2++, this.sourceUpdater_.removeVideo(e14, t2, a2));
    for (let n3 in this.inbandTextTracks_) Id(e14, t2, this.inbandTextTracks_[n3]);
    Id(e14, t2, this.segmentMetadataTrack_), a2();
  }
  monitorBuffer_() {
    this.checkBufferTimeout_ && h.default.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = h.default.setTimeout(this.monitorBufferTick_.bind(this), 1);
  }
  monitorBufferTick_() {
    this.state === `READY` && this.fillBuffer_(), this.checkBufferTimeout_ && h.default.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = h.default.setTimeout(this.monitorBufferTick_.bind(this), Gd);
  }
  fillBuffer_() {
    if (this.sourceUpdater_.updating()) return;
    let e14 = this.chooseNextRequest_();
    e14 && (typeof e14.timestampOffset == `number` && (this.isPendingTimestampOffset_ = false, this.timelineChangeController_.pendingTimelineChange({ type: this.loaderType_, from: this.currentTimeline_, to: e14.timeline })), this.loadSegment_(e14));
  }
  isEndOfStream_(e14 = this.mediaIndex, t2 = this.playlist_, n2 = this.partIndex) {
    if (!t2 || !this.mediaSource_) return false;
    let r2 = typeof e14 == `number` && t2.segments[e14], i2 = e14 + 1 === t2.segments.length, a2 = !r2 || !r2.parts || n2 + 1 === r2.parts.length;
    return t2.endList && this.mediaSource_.readyState === `open` && i2 && a2;
  }
  chooseNextRequest_() {
    let e14 = this.buffered_(), t2 = Xc(e14) || 0, n2 = Zc(e14, this.currentTime_()), r2 = !this.hasPlayed_() && n2 >= 1, i2 = n2 >= this.goalBufferLength_(), a2 = this.playlist_.segments;
    if (!a2.length || r2 || i2) return null;
    this.syncPoint_ = this.syncPoint_ || this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_(), this.loaderType_);
    let o2 = { partIndex: null, mediaIndex: null, startOfSegment: null, playlist: this.playlist_, isSyncRequest: !this.syncPoint_ };
    if (o2.isSyncRequest) o2.mediaIndex = Ud(this.currentTimeline_, a2, t2), this.logger_(`choose next request. Can not find sync point. Fallback to media Index: ${o2.mediaIndex}`);
    else if (this.mediaIndex !== null) {
      let e15 = a2[this.mediaIndex], n3 = typeof this.partIndex == `number` ? this.partIndex : -1;
      o2.startOfSegment = e15.end ? e15.end : t2, e15.parts && e15.parts[n3 + 1] ? (o2.mediaIndex = this.mediaIndex, o2.partIndex = n3 + 1) : o2.mediaIndex = this.mediaIndex + 1;
    } else {
      let e15, n3, r3, i3 = this.fetchAtBuffer_ ? t2 : this.currentTime_();
      if (this.mediaSequenceSync_ && this.logger_(`chooseNextRequest_ request after Quality Switch:
For TargetTime: ${i3}.
CurrentTime: ${this.currentTime_()}
BufferedEnd: ${t2}
Fetch At Buffer: ${this.fetchAtBuffer_}
`, this.mediaSequenceSync_.diagnostics), this.mediaSequenceSync_ && this.mediaSequenceSync_.isReliable) {
        let t3 = this.getSyncInfoFromMediaSequenceSync_(i3);
        if (!t3) return this.logger_(`chooseNextRequest_ - no sync info found using media sequence sync`), null;
        this.logger_(`chooseNextRequest_ mediaSequence syncInfo (${t3.start} --> ${t3.end})`), e15 = t3.segmentIndex, n3 = t3.partIndex, r3 = t3.start;
      } else {
        this.logger_(`chooseNextRequest_ - fallback to a regular segment selection algorithm, based on a syncPoint.`);
        let t3 = Sl.getMediaInfoForTime({ exactManifestTimings: this.exactManifestTimings, playlist: this.playlist_, currentTime: i3, startingPartIndex: this.syncPoint_.partIndex, startingSegmentIndex: this.syncPoint_.segmentIndex, startTime: this.syncPoint_.time });
        e15 = t3.segmentIndex, n3 = t3.partIndex, r3 = t3.startTime;
      }
      o2.getMediaInfoForTime = this.fetchAtBuffer_ ? `bufferedEnd ${i3}` : `currentTime ${i3}`, o2.mediaIndex = e15, o2.startOfSegment = r3, o2.partIndex = n3, this.logger_(`choose next request. Playlist switched and we have a sync point. Media Index: ${o2.mediaIndex} `);
    }
    let s2 = a2[o2.mediaIndex], c2 = s2 && typeof o2.partIndex == `number` && s2.parts && s2.parts[o2.partIndex];
    if (!s2 || typeof o2.partIndex == `number` && !c2) return null;
    typeof o2.partIndex != `number` && s2.parts && (o2.partIndex = 0, c2 = s2.parts[0]);
    let l2 = this.vhs_.playlists && this.vhs_.playlists.main && this.vhs_.playlists.main.independentSegments || this.playlist_.independentSegments;
    if (!n2 && c2 && !l2 && !c2.independent) if (o2.partIndex === 0) {
      let e15 = a2[o2.mediaIndex - 1], t3 = e15.parts && e15.parts.length && e15.parts[e15.parts.length - 1];
      t3 && t3.independent && (--o2.mediaIndex, o2.partIndex = e15.parts.length - 1, o2.independent = `previous segment`);
    } else s2.parts[o2.partIndex - 1].independent && (--o2.partIndex, o2.independent = `previous part`);
    let u2 = this.mediaSource_ && this.mediaSource_.readyState === `ended`;
    return o2.mediaIndex >= a2.length - 1 && u2 && !this.seeking_() ? null : (this.shouldForceTimestampOffsetAfterResync_ && (this.shouldForceTimestampOffsetAfterResync_ = false, o2.forceTimestampOffset = true, this.logger_(`choose next request. Force timestamp offset after loader resync`)), this.generateSegmentInfo_(o2));
  }
  getSyncInfoFromMediaSequenceSync_(e14) {
    if (!this.mediaSequenceSync_) return null;
    let t2 = Math.max(e14, this.mediaSequenceSync_.start);
    e14 !== t2 && this.logger_(`getSyncInfoFromMediaSequenceSync_. Pulled target time from ${e14} to ${t2}`);
    let n2 = this.mediaSequenceSync_.getSyncInfoForTime(t2);
    if (!n2) return null;
    if (!n2.isAppended) return n2;
    let r2 = this.mediaSequenceSync_.getSyncInfoForTime(n2.end);
    return r2 ? (r2.isAppended && this.logger_(`getSyncInfoFromMediaSequenceSync_: We encounter unexpected scenario where next media sequence sync info is also appended!`), r2) : null;
  }
  generateSegmentInfo_(e14) {
    let { independent: t2, playlist: n2, mediaIndex: r2, startOfSegment: i2, isSyncRequest: a2, partIndex: o2, forceTimestampOffset: s2, getMediaInfoForTime: c2 } = e14, l2 = n2.segments[r2], u2 = typeof o2 == `number` && l2.parts[o2], d2 = { requestId: `segment-loader-` + Math.random(), uri: u2 && u2.resolvedUri || l2.resolvedUri, mediaIndex: r2, partIndex: u2 ? o2 : null, isSyncRequest: a2, startOfSegment: i2, playlist: n2, bytes: null, encryptedBytes: null, timestampOffset: null, timeline: l2.timeline, duration: u2 && u2.duration || l2.duration, segment: l2, part: u2, byteLength: 0, transmuxer: this.transmuxer_, getMediaInfoForTime: c2, independent: t2 }, f2 = s2 === void 0 ? this.isPendingTimestampOffset_ : s2;
    d2.timestampOffset = this.timestampOffsetForSegment_({ segmentTimeline: l2.timeline, currentTimeline: this.currentTimeline_, startOfSegment: i2, buffered: this.buffered_(), overrideCheck: f2 });
    let p2 = Xc(this.sourceUpdater_.audioBuffered());
    return typeof p2 == `number` && (d2.audioAppendStart = p2 - this.sourceUpdater_.audioTimestampOffset()), this.sourceUpdater_.videoBuffered().length && (d2.gopsToAlignWith = Rd(this.gopBuffer_, this.currentTime_() - this.sourceUpdater_.videoTimestampOffset(), this.timeMapping_)), d2;
  }
  timestampOffsetForSegment_(e14) {
    return Qd(e14);
  }
  earlyAbortWhenNeeded_(e14) {
    if (this.vhs_.tech_.paused() || !this.xhrOptions_.timeout || !this.playlist_.attributes.BANDWIDTH || Date.now() - (e14.firstBytesReceivedAt || Date.now()) < 1e3) return;
    let t2 = this.currentTime_(), n2 = e14.bandwidth, r2 = this.pendingSegment_.duration, i2 = Sl.estimateSegmentRequestTime(r2, n2, this.playlist_, e14.bytesReceived), a2 = qc(this.buffered_(), t2, this.vhs_.tech_.playbackRate()) - 1;
    if (i2 <= a2) return;
    let o2 = wd({ main: this.vhs_.playlists.main, currentTime: t2, bandwidth: n2, duration: this.duration_(), segmentDuration: r2, timeUntilRebuffer: a2, currentTimeline: this.currentTimeline_, syncController: this.syncController_ });
    if (!o2) return;
    let s2 = i2 - a2 - o2.rebufferingImpact, c2 = 0.5;
    a2 <= zc && (c2 = 1), !(!o2.playlist || o2.playlist.uri === this.playlist_.uri || s2 < c2) && (this.bandwidth = o2.playlist.attributes.BANDWIDTH * Tu.BANDWIDTH_VARIANCE + 1, this.trigger(`earlyabort`));
  }
  handleAbort_(e14) {
    this.logger_(`Aborting ${Xd(e14)}`), this.mediaRequestsAborted += 1;
  }
  handleProgress_(e14, t2) {
    this.earlyAbortWhenNeeded_(t2.stats), !this.checkForAbort_(t2.requestId) && this.trigger(`progress`);
  }
  handleTrackInfo_(e14, t2) {
    this.earlyAbortWhenNeeded_(e14.stats), !this.checkForAbort_(e14.requestId) && (this.checkForIllegalMediaSwitch(t2) || (t2 ||= {}, Vd(this.currentMediaInfo_, t2) || (this.appendInitSegment_ = { audio: true, video: true }, this.startingMediaInfo_ = t2, this.currentMediaInfo_ = t2, this.logger_(`trackinfo update`, t2), this.trigger(`trackinfo`)), !this.checkForAbort_(e14.requestId) && (this.pendingSegment_.trackInfo = t2, this.hasEnoughInfoToAppend_() && this.processCallQueue_())));
  }
  handleTimingInfo_(e14, t2, n2, r2) {
    if (this.earlyAbortWhenNeeded_(e14.stats), this.checkForAbort_(e14.requestId)) return;
    let i2 = this.pendingSegment_, a2 = Zd(t2);
    i2[a2] = i2[a2] || {}, i2[a2][n2] = r2, this.logger_(`timinginfo: ${t2} - ${n2} - ${r2}`), this.hasEnoughInfoToAppend_() && this.processCallQueue_();
  }
  handleCaptions_(e14, t2) {
    if (this.earlyAbortWhenNeeded_(e14.stats), this.checkForAbort_(e14.requestId)) return;
    if (t2.length === 0) {
      this.logger_(`SegmentLoader received no captions from a caption event`);
      return;
    }
    if (!this.pendingSegment_.hasAppendedData_) {
      this.metadataQueue_.caption.push(this.handleCaptions_.bind(this, e14, t2));
      return;
    }
    let n2 = this.sourceUpdater_.videoTimestampOffset() === null ? this.sourceUpdater_.audioTimestampOffset() : this.sourceUpdater_.videoTimestampOffset(), r2 = {};
    t2.forEach((e15) => {
      r2[e15.stream] = r2[e15.stream] || { startTime: 1 / 0, captions: [], endTime: 0 };
      let t3 = r2[e15.stream];
      t3.startTime = Math.min(t3.startTime, e15.startTime + n2), t3.endTime = Math.max(t3.endTime, e15.endTime + n2), t3.captions.push(e15);
    }), Object.keys(r2).forEach((e15) => {
      let { startTime: t3, endTime: i2, captions: a2 } = r2[e15], o2 = this.inbandTextTracks_;
      this.logger_(`adding cues from ${t3} -> ${i2} for ${e15}`), Od(o2, this.vhs_.tech_, e15), Id(t3, i2, o2[e15]), kd({ captionArray: a2, inbandTextTracks: o2, timestampOffset: n2 });
    }), this.transmuxer_ && this.transmuxer_.postMessage({ action: `clearParsedMp4Captions` });
  }
  handleId3_(e14, t2, n2) {
    if (this.earlyAbortWhenNeeded_(e14.stats), !this.checkForAbort_(e14.requestId)) {
      if (!this.pendingSegment_.hasAppendedData_) {
        this.metadataQueue_.id3.push(this.handleId3_.bind(this, e14, t2, n2));
        return;
      }
      this.addMetadataToTextTrack(n2, t2, this.duration_());
    }
  }
  processMetadataQueue_() {
    this.metadataQueue_.id3.forEach((e14) => e14()), this.metadataQueue_.caption.forEach((e14) => e14()), this.metadataQueue_.id3 = [], this.metadataQueue_.caption = [];
  }
  processCallQueue_() {
    let e14 = this.callQueue_;
    this.callQueue_ = [], e14.forEach((e15) => e15());
  }
  processLoadQueue_() {
    let e14 = this.loadQueue_;
    this.loadQueue_ = [], e14.forEach((e15) => e15());
  }
  hasEnoughInfoToLoad_() {
    if (this.loaderType_ !== `audio`) return true;
    let e14 = this.pendingSegment_;
    return e14 ? this.getCurrentMediaInfo_() ? !$d({ timelineChangeController: this.timelineChangeController_, currentTimeline: this.currentTimeline_, segmentTimeline: e14.timeline, loaderType: this.loaderType_, audioDisabled: this.audioDisabled_ }) : true : false;
  }
  getCurrentMediaInfo_(e14 = this.pendingSegment_) {
    return e14 && e14.trackInfo || this.currentMediaInfo_;
  }
  getMediaInfo_(e14 = this.pendingSegment_) {
    return this.getCurrentMediaInfo_(e14) || this.startingMediaInfo_;
  }
  getPendingSegmentPlaylist() {
    return this.pendingSegment_ ? this.pendingSegment_.playlist : null;
  }
  hasEnoughInfoToAppend_() {
    if (!this.sourceUpdater_.ready() || this.waitingOnRemove_ || this.quotaExceededErrorRetryTimeout_) return false;
    let e14 = this.pendingSegment_, t2 = this.getCurrentMediaInfo_();
    if (!e14 || !t2) return false;
    let { hasAudio: n2, hasVideo: r2, isMuxed: i2 } = t2;
    return !(r2 && !e14.videoTimingInfo || n2 && !this.audioDisabled_ && !i2 && !e14.audioTimingInfo || $d({ timelineChangeController: this.timelineChangeController_, currentTimeline: this.currentTimeline_, segmentTimeline: e14.timeline, loaderType: this.loaderType_, audioDisabled: this.audioDisabled_ }));
  }
  handleData_(e14, t2) {
    if (this.earlyAbortWhenNeeded_(e14.stats), this.checkForAbort_(e14.requestId)) return;
    if (this.callQueue_.length || !this.hasEnoughInfoToAppend_()) {
      this.callQueue_.push(this.handleData_.bind(this, e14, t2));
      return;
    }
    let n2 = this.pendingSegment_;
    if (this.setTimeMapping_(n2.timeline), this.updateMediaSecondsLoaded_(n2.part || n2.segment), this.mediaSource_.readyState !== `closed`) {
      if (e14.map && (e14.map = this.initSegmentForMap(e14.map, true), n2.segment.map = e14.map), e14.key && this.segmentKey(e14.key, true), n2.isFmp4 = e14.isFmp4, n2.timingInfo = n2.timingInfo || {}, n2.isFmp4) this.trigger(`fmp4`), n2.timingInfo.start = n2[Zd(t2.type)].start;
      else {
        let e15 = this.getCurrentMediaInfo_(), t3 = this.loaderType_ === `main` && e15 && e15.hasVideo, r2;
        t3 && (r2 = n2.videoTimingInfo.start), n2.timingInfo.start = this.trueSegmentStart_({ currentStart: n2.timingInfo.start, playlist: n2.playlist, mediaIndex: n2.mediaIndex, currentVideoTimestampOffset: this.sourceUpdater_.videoTimestampOffset(), useVideoTimingInfo: t3, firstVideoFrameTimeForData: r2, videoTimingInfo: n2.videoTimingInfo, audioTimingInfo: n2.audioTimingInfo });
      }
      if (this.updateAppendInitSegmentStatus(n2, t2.type), this.updateSourceBufferTimestampOffset_(n2), n2.isSyncRequest) {
        this.updateTimingInfoEnd_(n2), this.syncController_.saveSegmentTimingInfo({ segmentInfo: n2, shouldSaveTimelineMapping: this.loaderType_ === `main` });
        let e15 = this.chooseNextRequest_();
        if (e15.mediaIndex !== n2.mediaIndex || e15.partIndex !== n2.partIndex) {
          this.logger_(`sync segment was incorrect, not appending`);
          return;
        }
        this.logger_(`sync segment was correct, appending`);
      }
      n2.hasAppendedData_ = true, this.processMetadataQueue_(), this.appendData_(n2, t2);
    }
  }
  updateAppendInitSegmentStatus(e14, t2) {
    this.loaderType_ === `main` && typeof e14.timestampOffset == `number` && !e14.changedTimestampOffset && (this.appendInitSegment_ = { audio: true, video: true }), this.playlistOfLastInitSegment_[t2] !== e14.playlist && (this.appendInitSegment_[t2] = true);
  }
  getInitSegmentAndUpdateState_({ type: e14, initSegment: t2, map: n2, playlist: r2 }) {
    if (n2) {
      let e15 = eu(n2);
      if (this.activeInitSegmentId_ === e15) return null;
      t2 = this.initSegmentForMap(n2, true).bytes, this.activeInitSegmentId_ = e15;
    }
    return t2 && this.appendInitSegment_[e14] ? (this.playlistOfLastInitSegment_[e14] = r2, this.appendInitSegment_[e14] = false, this.activeInitSegmentId_ = null, t2) : null;
  }
  handleQuotaExceededError_({ segmentInfo: e14, type: t2, bytes: n2 }, r2) {
    let i2 = this.sourceUpdater_.audioBuffered(), a2 = this.sourceUpdater_.videoBuffered();
    i2.length > 1 && this.logger_(`On QUOTA_EXCEEDED_ERR, found gaps in the audio buffer: ` + Jc(i2).join(`, `)), a2.length > 1 && this.logger_(`On QUOTA_EXCEEDED_ERR, found gaps in the video buffer: ` + Jc(a2).join(`, `));
    let o2 = i2.length ? i2.start(0) : 0, s2 = i2.length ? i2.end(i2.length - 1) : 0, c2 = a2.length ? a2.start(0) : 0, l2 = a2.length ? a2.end(a2.length - 1) : 0;
    if (s2 - o2 <= Wd && l2 - c2 <= Wd) {
      this.logger_(`On QUOTA_EXCEEDED_ERR, single segment too large to append to buffer, triggering an error. Appended byte length: ${n2.byteLength}, audio buffer: ${Jc(i2).join(`, `)}, video buffer: ${Jc(a2).join(`, `)}, `), this.error({ message: `Quota exceeded error with append of a single segment of content`, excludeUntil: 1 / 0, metadata: { errorType: Z.Error.SegmentExceedsSourceBufferQuota } }), this.trigger(`error`);
      return;
    }
    this.waitingOnRemove_ = true, this.callQueue_.push(this.appendToSourceBuffer_.bind(this, { segmentInfo: e14, type: t2, bytes: n2 }));
    let u2 = this.currentTime_() - Wd;
    this.logger_(`On QUOTA_EXCEEDED_ERR, removing audio/video from 0 to ${u2}`), this.remove(0, u2, () => {
      this.logger_(`On QUOTA_EXCEEDED_ERR, retrying append in ${Wd}s`), this.waitingOnRemove_ = false, this.quotaExceededErrorRetryTimeout_ = h.default.setTimeout(() => {
        this.logger_(`On QUOTA_EXCEEDED_ERR, re-processing call queue`), this.quotaExceededErrorRetryTimeout_ = null, this.processCallQueue_();
      }, Wd * 1e3);
    }, true);
  }
  handleAppendError_({ segmentInfo: e14, type: t2, bytes: n2 }, r2) {
    if (r2) {
      if (r2.code === Hd) {
        this.handleQuotaExceededError_({ segmentInfo: e14, type: t2, bytes: n2 });
        return;
      }
      this.logger_(`Received non QUOTA_EXCEEDED_ERR on append`, r2), this.error({ message: `${t2} append of ${n2.length}b failed for segment #${e14.mediaIndex} in playlist ${e14.playlist.id}`, metadata: { errorType: Z.Error.SegmentAppendError } }), this.trigger(`appenderror`);
    }
  }
  appendToSourceBuffer_({ segmentInfo: e14, type: t2, initSegment: n2, data: r2, bytes: i2 }) {
    if (!i2) {
      let e15 = [r2], t3 = r2.byteLength;
      n2 && (e15.unshift(n2), t3 += n2.byteLength), i2 = Ed({ bytes: t3, segments: e15 });
    }
    this.sourceUpdater_.appendBuffer({ segmentInfo: e14, type: t2, bytes: i2 }, this.handleAppendError_.bind(this, { segmentInfo: e14, type: t2, bytes: i2 }));
  }
  handleSegmentTimingInfo_(e14, t2, n2) {
    if (!this.pendingSegment_ || t2 !== this.pendingSegment_.requestId) return;
    let r2 = this.pendingSegment_.segment, i2 = `${e14}TimingInfo`;
    r2[i2] || (r2[i2] = {}), r2[i2].transmuxerPrependedSeconds = n2.prependedContentDuration || 0, r2[i2].transmuxedPresentationStart = n2.start.presentation, r2[i2].transmuxedDecodeStart = n2.start.decode, r2[i2].transmuxedPresentationEnd = n2.end.presentation, r2[i2].transmuxedDecodeEnd = n2.end.decode, r2[i2].baseMediaDecodeTime = n2.baseMediaDecodeTime;
  }
  appendData_(e14, t2) {
    let { type: n2, data: r2 } = t2;
    if (!r2 || !r2.byteLength || n2 === `audio` && this.audioDisabled_) return;
    let i2 = this.getInitSegmentAndUpdateState_({ type: n2, initSegment: t2.initSegment, playlist: e14.playlist, map: e14.isFmp4 ? e14.segment.map : null });
    this.appendToSourceBuffer_({ segmentInfo: e14, type: n2, initSegment: i2, data: r2 });
  }
  loadSegment_(e14) {
    if (this.state = `WAITING`, this.pendingSegment_ = e14, this.trimBackBuffer_(e14), typeof e14.timestampOffset == `number` && this.transmuxer_ && this.transmuxer_.postMessage({ action: `clearAllMp4Captions` }), !this.hasEnoughInfoToLoad_()) {
      this.loadQueue_.push(() => {
        let t2 = x({}, e14, { forceTimestampOffset: true });
        x(e14, this.generateSegmentInfo_(t2)), this.isPendingTimestampOffset_ = false, this.updateTransmuxerAndRequestSegment_(e14);
      });
      return;
    }
    this.updateTransmuxerAndRequestSegment_(e14);
  }
  updateTransmuxerAndRequestSegment_(e14) {
    this.shouldUpdateTransmuxerTimestampOffset_(e14.timestampOffset) && (this.gopBuffer_.length = 0, e14.gopsToAlignWith = [], this.timeMapping_ = 0, this.transmuxer_.postMessage({ action: `reset` }), this.transmuxer_.postMessage({ action: `setTimestampOffset`, timestampOffset: e14.timestampOffset }));
    let t2 = this.createSimplifiedSegmentObj_(e14), n2 = this.isEndOfStream_(e14.mediaIndex, e14.playlist, e14.partIndex), r2 = this.mediaIndex !== null, i2 = e14.timeline !== this.currentTimeline_ && e14.timeline > 0, a2 = n2 || r2 && i2;
    this.logger_(`Requesting
${Dd(e14.uri)}
${Xd(e14)}`), t2.map && !t2.map.bytes && (this.logger_(`going to request init segment.`), this.appendInitSegment_ = { video: true, audio: true }), e14.abortRequests = sd({ xhr: this.vhs_.xhr, xhrOptions: this.xhrOptions_, decryptionWorker: this.decrypter_, segment: t2, abortFn: this.handleAbort_.bind(this, e14), progressFn: this.handleProgress_.bind(this), trackInfoFn: this.handleTrackInfo_.bind(this), timingInfoFn: this.handleTimingInfo_.bind(this), videoSegmentTimingInfoFn: this.handleSegmentTimingInfo_.bind(this, `video`, e14.requestId), audioSegmentTimingInfoFn: this.handleSegmentTimingInfo_.bind(this, `audio`, e14.requestId), captionsFn: this.handleCaptions_.bind(this), isEndOfTimeline: a2, endedTimelineFn: () => {
      this.logger_(`received endedtimeline callback`);
    }, id3Fn: this.handleId3_.bind(this), dataFn: this.handleData_.bind(this), doneFn: this.segmentRequestFinished_.bind(this), onTransmuxerLog: ({ message: t3, level: n3, stream: r3 }) => {
      this.logger_(`${Xd(e14)} logged from transmuxer stream ${r3} as a ${n3}: ${t3}`);
    } });
  }
  trimBackBuffer_(e14) {
    let t2 = Yd(this.seekable_(), this.currentTime_(), this.playlist_.targetDuration || 10);
    t2 > 0 && this.remove(0, t2);
  }
  createSimplifiedSegmentObj_(e14) {
    let t2 = e14.segment, n2 = e14.part, r2 = { resolvedUri: n2 ? n2.resolvedUri : t2.resolvedUri, byterange: n2 ? n2.byterange : t2.byterange, requestId: e14.requestId, transmuxer: e14.transmuxer, audioAppendStart: e14.audioAppendStart, gopsToAlignWith: e14.gopsToAlignWith, part: e14.part }, i2 = e14.playlist.segments[e14.mediaIndex - 1];
    if (i2 && i2.timeline === t2.timeline && (i2.videoTimingInfo ? r2.baseStartTime = i2.videoTimingInfo.transmuxedDecodeEnd : i2.audioTimingInfo && (r2.baseStartTime = i2.audioTimingInfo.transmuxedDecodeEnd)), t2.key) {
      let n3 = t2.key.iv || new Uint32Array([0, 0, 0, e14.mediaIndex + e14.playlist.mediaSequence]);
      r2.key = this.segmentKey(t2.key), r2.key.iv = n3;
    }
    return t2.map && (r2.map = this.initSegmentForMap(t2.map)), r2;
  }
  saveTransferStats_(e14) {
    this.mediaRequests += 1, e14 && (this.mediaBytesTransferred += e14.bytesReceived, this.mediaTransferDuration += e14.roundTripTime);
  }
  saveBandwidthRelatedStats_(e14, t2) {
    if (this.pendingSegment_.byteLength = t2.bytesReceived, e14 < qd) {
      this.logger_(`Ignoring segment's bandwidth because its duration of ${e14} is less than the min to record ${qd}`);
      return;
    }
    this.bandwidth = t2.bandwidth, this.roundTrip = t2.roundTripTime;
  }
  handleTimeout_() {
    this.mediaRequestsTimedout += 1, this.bandwidth = 1, this.roundTrip = NaN, this.trigger(`bandwidthupdate`), this.trigger(`timeout`);
  }
  segmentRequestFinished_(e14, t2, n2) {
    if (this.callQueue_.length) {
      this.callQueue_.push(this.segmentRequestFinished_.bind(this, e14, t2, n2));
      return;
    }
    if (this.saveTransferStats_(t2.stats), !this.pendingSegment_ || t2.requestId !== this.pendingSegment_.requestId) return;
    if (e14) {
      if (this.pendingSegment_ = null, this.state = `READY`, e14.code === Gu.ABORTED) return;
      if (this.pause(), e14.code === Gu.TIMEOUT) {
        this.handleTimeout_();
        return;
      }
      this.mediaRequestsErrored += 1, this.error(e14), this.trigger(`error`);
      return;
    }
    let r2 = this.pendingSegment_;
    this.saveBandwidthRelatedStats_(r2.duration, t2.stats), r2.endOfAllRequests = t2.endOfAllRequests, n2.gopInfo && (this.gopBuffer_ = zd(this.gopBuffer_, n2.gopInfo, this.safeAppend_)), this.state = `APPENDING`, this.trigger(`appending`), this.waitForAppendsToComplete_(r2);
  }
  setTimeMapping_(e14) {
    let t2 = this.syncController_.mappingForTimeline(e14);
    t2 !== null && (this.timeMapping_ = t2);
  }
  updateMediaSecondsLoaded_(e14) {
    typeof e14.start == `number` && typeof e14.end == `number` ? this.mediaSecondsLoaded += e14.end - e14.start : this.mediaSecondsLoaded += e14.duration;
  }
  shouldUpdateTransmuxerTimestampOffset_(e14) {
    return e14 === null ? false : this.loaderType_ === `main` && e14 !== this.sourceUpdater_.videoTimestampOffset() || !this.audioDisabled_ && e14 !== this.sourceUpdater_.audioTimestampOffset();
  }
  trueSegmentStart_({ currentStart: e14, playlist: t2, mediaIndex: n2, firstVideoFrameTimeForData: r2, currentVideoTimestampOffset: i2, useVideoTimingInfo: a2, videoTimingInfo: o2, audioTimingInfo: s2 }) {
    if (e14 !== void 0) return e14;
    if (!a2) return s2.start;
    let c2 = t2.segments[n2 - 1];
    return n2 === 0 || !c2 || c2.start === void 0 || c2.end !== r2 + i2 ? r2 : o2.start;
  }
  waitForAppendsToComplete_(e14) {
    let t2 = this.getCurrentMediaInfo_(e14);
    if (!t2) {
      this.error({ message: `No starting media returned, likely due to an unsupported media format.`, playlistExclusionDuration: 1 / 0, metadata: { errorType: Z.Error.SegmentUnsupportedMediaFormat } }), this.trigger(`error`);
      return;
    }
    let { hasAudio: n2, hasVideo: r2, isMuxed: i2 } = t2, a2 = this.loaderType_ === `main` && r2, o2 = !this.audioDisabled_ && n2 && !i2;
    if (e14.waitingOnAppends = 0, !e14.hasAppendedData_) {
      !e14.timingInfo && typeof e14.timestampOffset == `number` && (this.isPendingTimestampOffset_ = true), e14.timingInfo = { start: 0 }, e14.waitingOnAppends++, this.isPendingTimestampOffset_ || (this.updateSourceBufferTimestampOffset_(e14), this.processMetadataQueue_()), this.checkAppendsDone_(e14);
      return;
    }
    a2 && e14.waitingOnAppends++, o2 && e14.waitingOnAppends++, a2 && this.sourceUpdater_.videoQueueCallback(this.checkAppendsDone_.bind(this, e14)), o2 && this.sourceUpdater_.audioQueueCallback(this.checkAppendsDone_.bind(this, e14));
  }
  checkAppendsDone_(e14) {
    this.checkForAbort_(e14.requestId) || (e14.waitingOnAppends--, e14.waitingOnAppends === 0 && this.handleAppendsDone_());
  }
  checkForIllegalMediaSwitch(e14) {
    let t2 = Jd(this.loaderType_, this.getCurrentMediaInfo_(), e14);
    return t2 ? (this.error({ message: t2, playlistExclusionDuration: 1 / 0, metadata: { errorType: Z.Error.SegmentSwitchError } }), this.trigger(`error`), true) : false;
  }
  updateSourceBufferTimestampOffset_(e14) {
    if (e14.timestampOffset === null || typeof e14.timingInfo.start != `number` || e14.changedTimestampOffset || this.loaderType_ !== `main`) return;
    let t2 = false;
    e14.timestampOffset -= this.getSegmentStartTimeForTimestampOffsetCalculation_({ videoTimingInfo: e14.segment.videoTimingInfo, audioTimingInfo: e14.segment.audioTimingInfo, timingInfo: e14.timingInfo }), e14.changedTimestampOffset = true, e14.timestampOffset !== this.sourceUpdater_.videoTimestampOffset() && (this.sourceUpdater_.videoTimestampOffset(e14.timestampOffset), t2 = true), e14.timestampOffset !== this.sourceUpdater_.audioTimestampOffset() && (this.sourceUpdater_.audioTimestampOffset(e14.timestampOffset), t2 = true), t2 && this.trigger(`timestampoffset`);
  }
  getSegmentStartTimeForTimestampOffsetCalculation_({ videoTimingInfo: e14, audioTimingInfo: t2, timingInfo: n2 }) {
    return this.useDtsForTimestampOffset_ ? e14 && typeof e14.transmuxedDecodeStart == `number` ? e14.transmuxedDecodeStart : t2 && typeof t2.transmuxedDecodeStart == `number` ? t2.transmuxedDecodeStart : n2.start : n2.start;
  }
  updateTimingInfoEnd_(e14) {
    e14.timingInfo = e14.timingInfo || {};
    let t2 = this.getMediaInfo_(), n2 = this.loaderType_ === `main` && t2 && t2.hasVideo && e14.videoTimingInfo ? e14.videoTimingInfo : e14.audioTimingInfo;
    n2 && (e14.timingInfo.end = typeof n2.end == `number` ? n2.end : n2.start + e14.duration);
  }
  handleAppendsDone_() {
    if (this.pendingSegment_ && this.trigger(`appendsdone`), !this.pendingSegment_) {
      this.state = `READY`, this.paused() || this.monitorBuffer_();
      return;
    }
    let e14 = this.pendingSegment_;
    e14.part && e14.part.syncInfo ? e14.part.syncInfo.markAppended() : e14.segment.syncInfo && e14.segment.syncInfo.markAppended(), this.updateTimingInfoEnd_(e14), this.shouldSaveSegmentTimingInfo_ && this.syncController_.saveSegmentTimingInfo({ segmentInfo: e14, shouldSaveTimelineMapping: this.loaderType_ === `main` });
    let t2 = nf(e14, this.sourceType_);
    if (t2 && (t2.severity === `warn` ? Z.log.warn(t2.message) : this.logger_(t2.message)), this.recordThroughput_(e14), this.pendingSegment_ = null, this.state = `READY`, e14.isSyncRequest && (this.trigger(`syncinfoupdate`), !e14.hasAppendedData_)) {
      this.logger_(`Throwing away un-appended sync request ${Xd(e14)}`);
      return;
    }
    this.logger_(`Appended ${Xd(e14)}`), this.addSegmentMetadataCue_(e14), this.fetchAtBuffer_ = true, this.currentTimeline_ !== e14.timeline && (this.timelineChangeController_.lastTimelineChange({ type: this.loaderType_, from: this.currentTimeline_, to: e14.timeline }), this.loaderType_ === `main` && !this.audioDisabled_ && this.timelineChangeController_.lastTimelineChange({ type: `audio`, from: this.currentTimeline_, to: e14.timeline })), this.currentTimeline_ = e14.timeline, this.trigger(`syncinfoupdate`);
    let n2 = e14.segment, r2 = e14.part, i2 = n2.end && this.currentTime_() - n2.end > e14.playlist.targetDuration * 3, a2 = r2 && r2.end && this.currentTime_() - r2.end > e14.playlist.partTargetDuration * 3;
    if (i2 || a2) {
      this.logger_(`bad ${i2 ? `segment` : `part`} ${Xd(e14)}`), this.resetEverything();
      return;
    }
    this.mediaIndex !== null && this.trigger(`bandwidthupdate`), this.trigger(`progress`), this.mediaIndex = e14.mediaIndex, this.partIndex = e14.partIndex, this.isEndOfStream_(e14.mediaIndex, e14.playlist, e14.partIndex) && this.endOfStream(), this.trigger(`appended`), e14.hasAppendedData_ && this.mediaAppends++, this.paused() || this.monitorBuffer_();
  }
  recordThroughput_(e14) {
    if (e14.duration < qd) {
      this.logger_(`Ignoring segment's throughput because its duration of ${e14.duration} is less than the min to record ${qd}`);
      return;
    }
    let t2 = this.throughput.rate, n2 = Date.now() - e14.endOfAllRequests + 1, r2 = Math.floor(e14.byteLength / n2 * 8 * 1e3);
    this.throughput.rate += (r2 - t2) / ++this.throughput.count;
  }
  addSegmentMetadataCue_(e14) {
    if (!this.segmentMetadataTrack_) return;
    let t2 = e14.segment, n2 = t2.start, r2 = t2.end;
    if (!Kd(n2) || !Kd(r2)) return;
    Id(n2, r2, this.segmentMetadataTrack_);
    let i2 = h.default.WebKitDataCue || h.default.VTTCue, a2 = { custom: t2.custom, dateTimeObject: t2.dateTimeObject, dateTimeString: t2.dateTimeString, programDateTime: t2.programDateTime, bandwidth: e14.playlist.attributes.BANDWIDTH, resolution: e14.playlist.attributes.RESOLUTION, codecs: e14.playlist.attributes.CODECS, byteLength: e14.byteLength, uri: e14.uri, timeline: e14.timeline, playlist: e14.playlist.id, start: n2, end: r2 }, o2 = new i2(n2, r2, JSON.stringify(a2));
    o2.value = a2, this.segmentMetadataTrack_.addCue(o2);
  }
};
function af() {
}
var of = function(e14) {
  return typeof e14 == `string` ? e14.replace(/./, (e15) => e15.toUpperCase()) : e14;
}, sf = [`video`, `audio`], cf = (e14, t2) => {
  let n2 = t2[`${e14}Buffer`];
  return n2 && n2.updating || t2.queuePending[e14];
}, lf = (e14, t2) => {
  for (let n2 = 0; n2 < t2.length; n2++) {
    let r2 = t2[n2];
    if (r2.type === `mediaSource`) return null;
    if (r2.type === e14) return n2;
  }
  return null;
}, uf = (e14, t2) => {
  if (t2.queue.length === 0) return;
  let n2 = 0, r2 = t2.queue[n2];
  if (r2.type === `mediaSource`) {
    !t2.updating() && t2.mediaSource.readyState !== `closed` && (t2.queue.shift(), r2.action(t2), r2.doneFn && r2.doneFn(), uf(`audio`, t2), uf(`video`, t2));
    return;
  }
  if (e14 !== `mediaSource` && !(!t2.ready() || t2.mediaSource.readyState === `closed` || cf(e14, t2))) {
    if (r2.type !== e14) {
      if (n2 = lf(e14, t2.queue), n2 === null) return;
      r2 = t2.queue[n2];
    }
    if (t2.queue.splice(n2, 1), t2.queuePending[e14] = r2, r2.action(e14, t2), !r2.doneFn) {
      t2.queuePending[e14] = null, uf(e14, t2);
      return;
    }
  }
}, df = (e14, t2) => {
  let n2 = t2[`${e14}Buffer`], r2 = of(e14);
  n2 && (n2.removeEventListener(`updateend`, t2[`on${r2}UpdateEnd_`]), n2.removeEventListener(`error`, t2[`on${r2}Error_`]), t2.codecs[e14] = null, t2[`${e14}Buffer`] = null);
}, ff = (e14, t2) => e14 && t2 && Array.prototype.indexOf.call(e14.sourceBuffers, t2) !== -1, pf = { appendBuffer: (e14, t2, n2) => (r2, i2) => {
  let a2 = i2[`${r2}Buffer`];
  if (ff(i2.mediaSource, a2)) {
    i2.logger_(`Appending segment ${t2.mediaIndex}'s ${e14.length} bytes to ${r2}Buffer`);
    try {
      a2.appendBuffer(e14);
    } catch (e15) {
      i2.logger_(`Error with code ${e15.code} ` + (e15.code === Hd ? `(QUOTA_EXCEEDED_ERR) ` : ``) + `when appending segment ${t2.mediaIndex} to ${r2}Buffer`), i2.queuePending[r2] = null, n2(e15);
    }
  }
}, remove: (e14, t2) => (n2, r2) => {
  let i2 = r2[`${n2}Buffer`];
  if (ff(r2.mediaSource, i2)) {
    r2.logger_(`Removing ${e14} to ${t2} from ${n2}Buffer`);
    try {
      i2.remove(e14, t2);
    } catch {
      r2.logger_(`Remove ${e14} to ${t2} from ${n2}Buffer failed`);
    }
  }
}, timestampOffset: (e14) => (t2, n2) => {
  let r2 = n2[`${t2}Buffer`];
  ff(n2.mediaSource, r2) && (n2.logger_(`Setting ${t2}timestampOffset to ${e14}`), r2.timestampOffset = e14);
}, callback: (e14) => (t2, n2) => {
  e14();
}, endOfStream: (e14) => (t2) => {
  if (t2.mediaSource.readyState === `open`) {
    t2.logger_(`Calling mediaSource endOfStream(${e14 || ``})`);
    try {
      t2.mediaSource.endOfStream(e14);
    } catch (e15) {
      Z.log.warn(`Failed to call media source endOfStream`, e15);
    }
  }
}, duration: (e14) => (t2) => {
  t2.logger_(`Setting mediaSource duration to ${e14}`);
  try {
    t2.mediaSource.duration = e14;
  } catch (e15) {
    Z.log.warn(`Failed to set media source duration`, e15);
  }
}, abort: () => (e14, t2) => {
  if (t2.mediaSource.readyState !== `open`) return;
  let n2 = t2[`${e14}Buffer`];
  if (ff(t2.mediaSource, n2)) {
    t2.logger_(`calling abort on ${e14}Buffer`);
    try {
      n2.abort();
    } catch (t3) {
      Z.log.warn(`Failed to abort on ${e14}Buffer`, t3);
    }
  }
}, addSourceBuffer: (e14, t2) => (n2) => {
  let r2 = of(e14), i2 = he(t2);
  n2.logger_(`Adding ${e14}Buffer with codec ${t2} to mediaSource`);
  let a2 = n2.mediaSource.addSourceBuffer(i2);
  a2.addEventListener(`updateend`, n2[`on${r2}UpdateEnd_`]), a2.addEventListener(`error`, n2[`on${r2}Error_`]), n2.codecs[e14] = t2, n2[`${e14}Buffer`] = a2;
}, removeSourceBuffer: (e14) => (t2) => {
  let n2 = t2[`${e14}Buffer`];
  if (df(e14, t2), ff(t2.mediaSource, n2)) {
    t2.logger_(`Removing ${e14}Buffer with codec ${t2.codecs[e14]} from mediaSource`);
    try {
      t2.mediaSource.removeSourceBuffer(n2);
    } catch (t3) {
      Z.log.warn(`Failed to removeSourceBuffer ${e14}Buffer`, t3);
    }
  }
}, changeType: (e14) => (t2, n2) => {
  let r2 = n2[`${t2}Buffer`], i2 = he(e14);
  if (!ff(n2.mediaSource, r2)) return;
  let a2 = e14.substring(0, e14.indexOf(`.`)), o2 = n2.codecs[t2];
  if (o2.substring(0, o2.indexOf(`.`)) !== a2) {
    n2.logger_(`changing ${t2}Buffer codec from ${n2.codecs[t2]} to ${e14}`);
    try {
      r2.changeType(i2), n2.codecs[t2] = e14;
    } catch (e15) {
      Z.log.warn(`Failed to changeType on ${t2}Buffer`, e15);
    }
  }
} }, mf = ({ type: e14, sourceUpdater: t2, action: n2, doneFn: r2, name: i2 }) => {
  t2.queue.push({ type: e14, action: n2, doneFn: r2, name: i2 }), uf(e14, t2);
}, hf = (e14, t2) => (n2) => {
  let r2 = Rc(t2[`${e14}Buffered`]());
  if (t2.logger_(`received "updateend" event for ${e14} Source Buffer: `, r2), t2.queuePending[e14]) {
    let n3 = t2.queuePending[e14].doneFn;
    t2.queuePending[e14] = null, n3 && n3(t2[`${e14}Error_`]);
  }
  uf(e14, t2);
}, gf = class extends Z.EventTarget {
  constructor(e14) {
    super(), this.mediaSource = e14, this.sourceopenListener_ = () => uf(`mediaSource`, this), this.mediaSource.addEventListener(`sourceopen`, this.sourceopenListener_), this.logger_ = Ic(`SourceUpdater`), this.audioTimestampOffset_ = 0, this.videoTimestampOffset_ = 0, this.queue = [], this.queuePending = { audio: null, video: null }, this.delayedAudioAppendQueue_ = [], this.videoAppendQueued_ = false, this.codecs = {}, this.onVideoUpdateEnd_ = hf(`video`, this), this.onAudioUpdateEnd_ = hf(`audio`, this), this.onVideoError_ = (e15) => {
      this.videoError_ = e15;
    }, this.onAudioError_ = (e15) => {
      this.audioError_ = e15;
    }, this.createdSourceBuffers_ = false, this.initializedEme_ = false, this.triggeredReady_ = false;
  }
  initializedEme() {
    this.initializedEme_ = true, this.triggerReady();
  }
  hasCreatedSourceBuffers() {
    return this.createdSourceBuffers_;
  }
  hasInitializedAnyEme() {
    return this.initializedEme_;
  }
  ready() {
    return this.hasCreatedSourceBuffers() && this.hasInitializedAnyEme();
  }
  createSourceBuffers(e14) {
    this.hasCreatedSourceBuffers() || (this.addOrChangeSourceBuffers(e14), this.createdSourceBuffers_ = true, this.trigger(`createdsourcebuffers`), this.triggerReady());
  }
  triggerReady() {
    this.ready() && !this.triggeredReady_ && (this.triggeredReady_ = true, this.trigger(`ready`));
  }
  addSourceBuffer(e14, t2) {
    mf({ type: `mediaSource`, sourceUpdater: this, action: pf.addSourceBuffer(e14, t2), name: `addSourceBuffer` });
  }
  abort(e14) {
    mf({ type: e14, sourceUpdater: this, action: pf.abort(e14), name: `abort` });
  }
  removeSourceBuffer(e14) {
    if (!this.canRemoveSourceBuffer()) {
      Z.log.error(`removeSourceBuffer is not supported!`);
      return;
    }
    mf({ type: `mediaSource`, sourceUpdater: this, action: pf.removeSourceBuffer(e14), name: `removeSourceBuffer` });
  }
  canRemoveSourceBuffer() {
    return !Z.browser.IS_FIREFOX && h.default.MediaSource && h.default.MediaSource.prototype && typeof h.default.MediaSource.prototype.removeSourceBuffer == `function`;
  }
  static canChangeType() {
    return h.default.SourceBuffer && h.default.SourceBuffer.prototype && typeof h.default.SourceBuffer.prototype.changeType == `function`;
  }
  canChangeType() {
    return this.constructor.canChangeType();
  }
  changeType(e14, t2) {
    if (!this.canChangeType()) {
      Z.log.error(`changeType is not supported!`);
      return;
    }
    mf({ type: e14, sourceUpdater: this, action: pf.changeType(t2), name: `changeType` });
  }
  addOrChangeSourceBuffers(e14) {
    if (!e14 || typeof e14 != `object` || Object.keys(e14).length === 0) throw Error(`Cannot addOrChangeSourceBuffers to undefined codecs`);
    Object.keys(e14).forEach((t2) => {
      let n2 = e14[t2];
      if (!this.hasCreatedSourceBuffers()) return this.addSourceBuffer(t2, n2);
      this.canChangeType() && this.changeType(t2, n2);
    });
  }
  appendBuffer(e14, t2) {
    let { segmentInfo: n2, type: r2, bytes: i2 } = e14;
    if (this.processedAppend_ = true, r2 === `audio` && this.videoBuffer && !this.videoAppendQueued_) {
      this.delayedAudioAppendQueue_.push([e14, t2]), this.logger_(`delayed audio append of ${i2.length} until video append`);
      return;
    }
    let a2 = t2;
    if (mf({ type: r2, sourceUpdater: this, action: pf.appendBuffer(i2, n2 || { mediaIndex: -1 }, a2), doneFn: t2, name: `appendBuffer` }), r2 === `video`) {
      if (this.videoAppendQueued_ = true, !this.delayedAudioAppendQueue_.length) return;
      let e15 = this.delayedAudioAppendQueue_.slice();
      this.logger_(`queuing delayed audio ${e15.length} appendBuffers`), this.delayedAudioAppendQueue_.length = 0, e15.forEach((e16) => {
        this.appendBuffer.apply(this, e16);
      });
    }
  }
  audioBuffered() {
    return ff(this.mediaSource, this.audioBuffer) && this.audioBuffer.buffered ? this.audioBuffer.buffered : Lc();
  }
  videoBuffered() {
    return ff(this.mediaSource, this.videoBuffer) && this.videoBuffer.buffered ? this.videoBuffer.buffered : Lc();
  }
  buffered() {
    let e14 = ff(this.mediaSource, this.videoBuffer) ? this.videoBuffer : null, t2 = ff(this.mediaSource, this.audioBuffer) ? this.audioBuffer : null;
    return t2 && !e14 ? this.audioBuffered() : e14 && !t2 ? this.videoBuffered() : Gc(this.audioBuffered(), this.videoBuffered());
  }
  setDuration(e14, t2 = af) {
    mf({ type: `mediaSource`, sourceUpdater: this, action: pf.duration(e14), name: `duration`, doneFn: t2 });
  }
  endOfStream(e14 = null, t2 = af) {
    typeof e14 != `string` && (e14 = void 0), mf({ type: `mediaSource`, sourceUpdater: this, action: pf.endOfStream(e14), name: `endOfStream`, doneFn: t2 });
  }
  removeAudio(e14, t2, n2 = af) {
    if (!this.audioBuffered().length || this.audioBuffered().end(0) === 0) {
      n2();
      return;
    }
    mf({ type: `audio`, sourceUpdater: this, action: pf.remove(e14, t2), doneFn: n2, name: `remove` });
  }
  removeVideo(e14, t2, n2 = af) {
    if (!this.videoBuffered().length || this.videoBuffered().end(0) === 0) {
      n2();
      return;
    }
    mf({ type: `video`, sourceUpdater: this, action: pf.remove(e14, t2), doneFn: n2, name: `remove` });
  }
  updating() {
    return !!(cf(`audio`, this) || cf(`video`, this));
  }
  audioTimestampOffset(e14) {
    return e14 !== void 0 && this.audioBuffer && this.audioTimestampOffset_ !== e14 && (mf({ type: `audio`, sourceUpdater: this, action: pf.timestampOffset(e14), name: `timestampOffset` }), this.audioTimestampOffset_ = e14), this.audioTimestampOffset_;
  }
  videoTimestampOffset(e14) {
    return e14 !== void 0 && this.videoBuffer && this.videoTimestampOffset !== e14 && (mf({ type: `video`, sourceUpdater: this, action: pf.timestampOffset(e14), name: `timestampOffset` }), this.videoTimestampOffset_ = e14), this.videoTimestampOffset_;
  }
  audioQueueCallback(e14) {
    this.audioBuffer && mf({ type: `audio`, sourceUpdater: this, action: pf.callback(e14), name: `callback` });
  }
  videoQueueCallback(e14) {
    this.videoBuffer && mf({ type: `video`, sourceUpdater: this, action: pf.callback(e14), name: `callback` });
  }
  dispose() {
    this.trigger(`dispose`), sf.forEach((e14) => {
      this.abort(e14), this.canRemoveSourceBuffer() ? this.removeSourceBuffer(e14) : this[`${e14}QueueCallback`](() => df(e14, this));
    }), this.videoAppendQueued_ = false, this.delayedAudioAppendQueue_.length = 0, this.sourceopenListener_ && this.mediaSource.removeEventListener(`sourceopen`, this.sourceopenListener_), this.off();
  }
}, _f = (e14) => decodeURIComponent(escape(String.fromCharCode.apply(null, e14))), vf = (e14) => {
  let t2 = new Uint8Array(e14);
  return Array.from(t2).map((e15) => e15.toString(16).padStart(2, `0`)).join(``);
}, yf = new Uint8Array(`

`.split(``).map((e14) => e14.charCodeAt(0))), bf = class extends Error {
  constructor() {
    super(`Trying to parse received VTT cues, but there is no WebVTT. Make sure vtt.js is loaded.`);
  }
}, xf = class extends rf {
  constructor(e14, t2 = {}) {
    super(e14, t2), this.mediaSource_ = null, this.subtitlesTrack_ = null, this.featuresNativeTextTracks_ = e14.featuresNativeTextTracks, this.loadVttJs = e14.loadVttJs, this.shouldSaveSegmentTimingInfo_ = false;
  }
  createTransmuxer_() {
    return null;
  }
  buffered_() {
    if (!this.subtitlesTrack_ || !this.subtitlesTrack_.cues || !this.subtitlesTrack_.cues.length) return Lc();
    let e14 = this.subtitlesTrack_.cues, t2 = e14[0].startTime, n2 = e14[e14.length - 1].startTime;
    return Lc([[t2, n2]]);
  }
  initSegmentForMap(e14, t2 = false) {
    if (!e14) return null;
    let n2 = eu(e14), r2 = this.initSegments_[n2];
    if (t2 && !r2 && e14.bytes) {
      let t3 = yf.byteLength + e14.bytes.byteLength, i2 = new Uint8Array(t3);
      i2.set(e14.bytes), i2.set(yf, e14.bytes.byteLength), this.initSegments_[n2] = r2 = { resolvedUri: e14.resolvedUri, byterange: e14.byterange, bytes: i2 };
    }
    return r2 || e14;
  }
  couldBeginLoading_() {
    return this.playlist_ && this.subtitlesTrack_ && !this.paused();
  }
  init_() {
    return this.state = `READY`, this.resetEverything(), this.monitorBuffer_();
  }
  track(e14) {
    return e14 === void 0 ? this.subtitlesTrack_ : (this.subtitlesTrack_ = e14, this.state === `INIT` && this.couldBeginLoading_() && this.init_(), this.subtitlesTrack_);
  }
  remove(e14, t2) {
    Id(e14, t2, this.subtitlesTrack_);
  }
  fillBuffer_() {
    let e14 = this.chooseNextRequest_();
    if (e14) {
      if (this.syncController_.timestampOffsetForTimeline(e14.timeline) === null) {
        this.syncController_.one(`timestampoffset`, () => {
          this.state = `READY`, this.paused() || this.monitorBuffer_();
        }), this.state = `WAITING_ON_TIMELINE`;
        return;
      }
      this.loadSegment_(e14);
    }
  }
  timestampOffsetForSegment_() {
    return null;
  }
  chooseNextRequest_() {
    return this.skipEmptySegments_(super.chooseNextRequest_());
  }
  skipEmptySegments_(e14) {
    for (; e14 && e14.segment.empty; ) {
      if (e14.mediaIndex + 1 >= e14.playlist.segments.length) {
        e14 = null;
        break;
      }
      e14 = this.generateSegmentInfo_({ playlist: e14.playlist, mediaIndex: e14.mediaIndex + 1, startOfSegment: e14.startOfSegment + e14.duration, isSyncRequest: e14.isSyncRequest });
    }
    return e14;
  }
  stopForError(e14) {
    this.error(e14), this.state = `READY`, this.pause(), this.trigger(`error`);
  }
  segmentRequestFinished_(e14, t2, n2) {
    if (!this.subtitlesTrack_) {
      this.state = `READY`;
      return;
    }
    if (this.saveTransferStats_(t2.stats), !this.pendingSegment_) {
      this.state = `READY`, this.mediaRequestsAborted += 1;
      return;
    }
    if (e14) {
      e14.code === Gu.TIMEOUT && this.handleTimeout_(), e14.code === Gu.ABORTED ? this.mediaRequestsAborted += 1 : this.mediaRequestsErrored += 1, this.stopForError(e14);
      return;
    }
    let r2 = this.pendingSegment_;
    this.saveBandwidthRelatedStats_(r2.duration, t2.stats), t2.key && this.segmentKey(t2.key, true), this.state = `APPENDING`, this.trigger(`appending`);
    let i2 = r2.segment;
    if (i2.map && (i2.map.bytes = t2.map.bytes), r2.bytes = t2.bytes, typeof h.default.WebVTT != `function` && typeof this.loadVttJs == `function`) {
      this.state = `WAITING_ON_VTTJS`, this.loadVttJs().then(() => this.segmentRequestFinished_(e14, t2, n2), () => this.stopForError({ message: `Error loading vtt.js`, metadata: { errorType: Z.Error.VttLoadError } }));
      return;
    }
    i2.requested = true;
    try {
      this.parseVTTCues_(r2);
    } catch (e15) {
      this.stopForError({ message: e15.message, metadata: { errorType: Z.Error.VttCueParsingError } });
      return;
    }
    if (this.updateTimeMapping_(r2, this.syncController_.timelines[r2.timeline], this.playlist_), r2.cues.length ? r2.timingInfo = { start: r2.cues[0].startTime, end: r2.cues[r2.cues.length - 1].endTime } : r2.timingInfo = { start: r2.startOfSegment, end: r2.startOfSegment + r2.duration }, r2.isSyncRequest) {
      this.trigger(`syncinfoupdate`), this.pendingSegment_ = null, this.state = `READY`;
      return;
    }
    r2.byteLength = r2.bytes.byteLength, this.mediaSecondsLoaded += i2.duration, r2.cues.forEach((e15) => {
      this.subtitlesTrack_.addCue(this.featuresNativeTextTracks_ ? new h.default.VTTCue(e15.startTime, e15.endTime, e15.text) : e15);
    }), Ld(this.subtitlesTrack_), this.handleAppendsDone_();
  }
  handleData_() {
  }
  updateTimingInfoEnd_() {
  }
  parseVTTCues_(e14) {
    let t2, n2 = false;
    if (typeof h.default.WebVTT != `function`) throw new bf();
    typeof h.default.TextDecoder == `function` ? t2 = new h.default.TextDecoder(`utf8`) : (t2 = h.default.WebVTT.StringDecoder(), n2 = true);
    let r2 = new h.default.WebVTT.Parser(h.default, h.default.vttjs, t2);
    if (e14.cues = [], e14.timestampmap = { MPEGTS: 0, LOCAL: 0 }, r2.oncue = e14.cues.push.bind(e14.cues), r2.ontimestampmap = (t3) => {
      e14.timestampmap = t3;
    }, r2.onparsingerror = (e15) => {
      Z.log.warn(`Error encountered when parsing cues: ` + e15.message);
    }, e14.segment.map) {
      let t3 = e14.segment.map.bytes;
      n2 && (t3 = _f(t3)), r2.parse(t3);
    }
    let i2 = e14.bytes;
    n2 && (i2 = _f(i2)), r2.parse(i2), r2.flush();
  }
  updateTimeMapping_(e14, t2, n2) {
    let r2 = e14.segment;
    if (!t2) return;
    if (!e14.cues.length) {
      r2.empty = true;
      return;
    }
    let { MPEGTS: i2, LOCAL: a2 } = e14.timestampmap, o2 = i2 / Nn.ONE_SECOND_IN_TS - a2 + t2.mapping;
    if (e14.cues.forEach((e15) => {
      let n3 = e15.endTime - e15.startTime, r3 = i2 === 0 ? e15.startTime + o2 : this.handleRollover_(e15.startTime + o2, t2.time);
      e15.startTime = Math.max(r3, 0), e15.endTime = Math.max(r3 + n3, 0);
    }), !n2.syncInfo) {
      let t3 = e14.cues[0].startTime, i3 = e14.cues[e14.cues.length - 1].startTime;
      n2.syncInfo = { mediaSequence: n2.mediaSequence + e14.mediaIndex, time: Math.min(t3, i3 - r2.duration) };
    }
  }
  handleRollover_(e14, t2) {
    if (t2 === null) return e14;
    let n2 = e14 * Nn.ONE_SECOND_IN_TS, r2 = t2 * Nn.ONE_SECOND_IN_TS, i2;
    for (i2 = r2 < n2 ? -8589934592 : 8589934592; Math.abs(n2 - r2) > 4294967296; ) n2 += i2;
    return n2 / Nn.ONE_SECOND_IN_TS;
  }
}, Sf = function(e14, t2) {
  let n2 = e14.cues;
  for (let e15 = 0; e15 < n2.length; e15++) {
    let r2 = n2[e15];
    if (t2 >= r2.adStartTime && t2 <= r2.adEndTime) return r2;
  }
  return null;
}, Cf = function(e14, t2, n2 = 0) {
  if (!e14.segments) return;
  let r2 = n2, i2;
  for (let n3 = 0; n3 < e14.segments.length; n3++) {
    let a2 = e14.segments[n3];
    if (i2 ||= Sf(t2, r2 + a2.duration / 2), i2) {
      if (`cueIn` in a2) {
        i2.endTime = r2, i2.adEndTime = r2, r2 += a2.duration, i2 = null;
        continue;
      }
      if (r2 < i2.endTime) {
        r2 += a2.duration;
        continue;
      }
      i2.endTime += a2.duration;
    } else if (`cueOut` in a2 && (i2 = new h.default.VTTCue(r2, r2 + a2.duration, a2.cueOut), i2.adStartTime = r2, i2.adEndTime = r2 + parseFloat(a2.cueOut), t2.addCue(i2)), `cueOutCont` in a2) {
      let [e15, n4] = a2.cueOutCont.split(`/`).map(parseFloat);
      i2 = new h.default.VTTCue(r2, r2 + a2.duration, ``), i2.adStartTime = r2 - e15, i2.adEndTime = i2.adStartTime + n4, t2.addCue(i2);
    }
    r2 += a2.duration;
  }
}, wf = class {
  constructor({ start: e14, end: t2, segmentIndex: n2, partIndex: r2 = null, appended: i2 = false }) {
    this.start_ = e14, this.end_ = t2, this.segmentIndex_ = n2, this.partIndex_ = r2, this.appended_ = i2;
  }
  isInRange(e14) {
    return e14 >= this.start && e14 < this.end;
  }
  markAppended() {
    this.appended_ = true;
  }
  resetAppendedStatus() {
    this.appended_ = false;
  }
  get isAppended() {
    return this.appended_;
  }
  get start() {
    return this.start_;
  }
  get end() {
    return this.end_;
  }
  get segmentIndex() {
    return this.segmentIndex_;
  }
  get partIndex() {
    return this.partIndex_;
  }
}, Tf = class {
  constructor(e14, t2 = []) {
    this.segmentSyncInfo_ = e14, this.partsSyncInfo_ = t2;
  }
  get segmentSyncInfo() {
    return this.segmentSyncInfo_;
  }
  get partsSyncInfo() {
    return this.partsSyncInfo_;
  }
  get hasPartsSyncInfo() {
    return this.partsSyncInfo_.length > 0;
  }
  resetAppendStatus() {
    this.segmentSyncInfo_.resetAppendedStatus(), this.partsSyncInfo_.forEach((e14) => e14.resetAppendedStatus());
  }
}, Ef = class {
  constructor() {
    this.storage_ = /* @__PURE__ */ new Map(), this.diagnostics_ = ``, this.isReliable_ = false, this.start_ = -1 / 0, this.end_ = 1 / 0;
  }
  get start() {
    return this.start_;
  }
  get end() {
    return this.end_;
  }
  get diagnostics() {
    return this.diagnostics_;
  }
  get isReliable() {
    return this.isReliable_;
  }
  resetAppendedStatus() {
    this.storage_.forEach((e14) => e14.resetAppendStatus());
  }
  update(e14, t2) {
    let { mediaSequence: n2, segments: r2 } = e14;
    if (this.isReliable_ = this.isReliablePlaylist_(n2, r2), this.isReliable_) return this.updateStorage_(r2, n2, this.calculateBaseTime_(n2, t2));
  }
  getSyncInfoForTime(e14) {
    for (let { segmentSyncInfo: t2, partsSyncInfo: n2 } of this.storage_.values()) if (n2.length) {
      for (let t3 of n2) if (t3.isInRange(e14)) return t3;
    } else if (t2.isInRange(e14)) return t2;
    return null;
  }
  getSyncInfoForMediaSequence(e14) {
    return this.storage_.get(e14);
  }
  updateStorage_(e14, t2, n2) {
    let r2 = /* @__PURE__ */ new Map(), i2 = `
`, a2 = n2, o2 = t2;
    this.start_ = a2, e14.forEach((e15, t3) => {
      let n3 = this.storage_.get(o2), s2 = a2, c2 = s2 + e15.duration, l2 = !!(n3 && n3.segmentSyncInfo && n3.segmentSyncInfo.isAppended), u2 = new wf({ start: s2, end: c2, appended: l2, segmentIndex: t3 });
      e15.syncInfo = u2;
      let d2 = a2, f2 = (e15.parts || []).map((e16, r3) => {
        let a3 = d2, s3 = d2 + e16.duration, c3 = !!(n3 && n3.partsSyncInfo && n3.partsSyncInfo[r3] && n3.partsSyncInfo[r3].isAppended), l3 = new wf({ start: a3, end: s3, appended: c3, segmentIndex: t3, partIndex: r3 });
        return d2 = s3, i2 += `Media Sequence: ${o2}.${r3} | Range: ${a3} --> ${s3} | Appended: ${c3}
`, e16.syncInfo = l3, l3;
      });
      r2.set(o2, new Tf(u2, f2)), i2 += `${Dd(e15.resolvedUri)} | Media Sequence: ${o2} | Range: ${s2} --> ${c2} | Appended: ${l2}
`, o2++, a2 = c2;
    }), this.end_ = a2, this.storage_ = r2, this.diagnostics_ = i2;
  }
  calculateBaseTime_(e14, t2) {
    return this.storage_.size ? this.storage_.has(e14) ? this.storage_.get(e14).segmentSyncInfo.start : t2 : 0;
  }
  isReliablePlaylist_(e14, t2) {
    return e14 != null && Array.isArray(t2) && t2.length;
  }
}, Df = class extends Ef {
  constructor(e14) {
    super(), this.parent_ = e14;
  }
  calculateBaseTime_(e14, t2) {
    if (!this.storage_.size) {
      let t3 = this.parent_.getSyncInfoForMediaSequence(e14);
      return t3 ? t3.segmentSyncInfo.start : 0;
    }
    return super.calculateBaseTime_(e14, t2);
  }
}, Of = 86400, kf = [{ name: `VOD`, run: (e14, t2, n2, r2, i2) => n2 === 1 / 0 ? null : { time: 0, segmentIndex: 0, partIndex: null } }, { name: `MediaSequence`, run: (e14, t2, n2, r2, i2, a2) => {
  let o2 = e14.getMediaSequenceSync(a2);
  if (!o2 || !o2.isReliable) return null;
  let s2 = o2.getSyncInfoForTime(i2);
  return s2 ? { time: s2.start, partIndex: s2.partIndex, segmentIndex: s2.segmentIndex } : null;
} }, { name: `ProgramDateTime`, run: (e14, t2, n2, r2, i2) => {
  if (!Object.keys(e14.timelineToDatetimeMappings).length) return null;
  let a2 = null, o2 = null, s2 = $c(t2);
  i2 ||= 0;
  for (let n3 = 0; n3 < s2.length; n3++) {
    let r3 = s2[t2.endList || i2 === 0 ? n3 : s2.length - (n3 + 1)], c2 = r3.segment, l2 = e14.timelineToDatetimeMappings[c2.timeline];
    if (!l2 || !c2.dateTimeObject) continue;
    let u2 = c2.dateTimeObject.getTime() / 1e3 + l2;
    if (c2.parts && typeof r3.partIndex == `number`) for (let e15 = 0; e15 < r3.partIndex; e15++) u2 += c2.parts[e15].duration;
    let d2 = Math.abs(i2 - u2);
    if (o2 !== null && (d2 === 0 || o2 < d2)) break;
    o2 = d2, a2 = { time: u2, segmentIndex: r3.segmentIndex, partIndex: r3.partIndex };
  }
  return a2;
} }, { name: `Segment`, run: (e14, t2, n2, r2, i2) => {
  let a2 = null, o2 = null;
  i2 ||= 0;
  let s2 = $c(t2);
  for (let e15 = 0; e15 < s2.length; e15++) {
    let n3 = s2[t2.endList || i2 === 0 ? e15 : s2.length - (e15 + 1)], c2 = n3.segment, l2 = n3.part && n3.part.start || c2 && c2.start;
    if (c2.timeline === r2 && l2 !== void 0) {
      let e16 = Math.abs(i2 - l2);
      if (o2 !== null && o2 < e16) break;
      (!a2 || o2 === null || o2 >= e16) && (o2 = e16, a2 = { time: l2, segmentIndex: n3.segmentIndex, partIndex: n3.partIndex });
    }
  }
  return a2;
} }, { name: `Discontinuity`, run: (e14, t2, n2, r2, i2) => {
  let a2 = null;
  if (i2 ||= 0, t2.discontinuityStarts && t2.discontinuityStarts.length) {
    let n3 = null;
    for (let r3 = 0; r3 < t2.discontinuityStarts.length; r3++) {
      let o2 = t2.discontinuityStarts[r3], s2 = t2.discontinuitySequence + r3 + 1, c2 = e14.discontinuities[s2];
      if (c2) {
        let e15 = Math.abs(i2 - c2.time);
        if (n3 !== null && n3 < e15) break;
        (!a2 || n3 === null || n3 >= e15) && (n3 = e15, a2 = { time: c2.time, segmentIndex: o2, partIndex: null });
      }
    }
  }
  return a2;
} }, { name: `Playlist`, run: (e14, t2, n2, r2, i2) => t2.syncInfo ? { time: t2.syncInfo.time, segmentIndex: t2.syncInfo.mediaSequence - t2.mediaSequence, partIndex: null } : null }], Af = class extends Z.EventTarget {
  constructor(e14 = {}) {
    super(), this.timelines = [], this.discontinuities = [], this.timelineToDatetimeMappings = {};
    let t2 = new Ef(), n2 = new Df(t2), r2 = new Df(t2);
    this.mediaSequenceStorage_ = { main: t2, audio: n2, vtt: r2 }, this.logger_ = Ic(`SyncController`);
  }
  getMediaSequenceSync(e14) {
    return this.mediaSequenceStorage_[e14] || null;
  }
  getSyncPoint(e14, t2, n2, r2, i2) {
    if (t2 !== 1 / 0) return kf.find(({ name: e15 }) => e15 === `VOD`).run(this, e14, t2);
    let a2 = this.runStrategies_(e14, t2, n2, r2, i2);
    if (!a2.length) return null;
    for (let t3 of a2) {
      let { syncPoint: n3, strategy: i3 } = t3, { segmentIndex: a3, time: o2 } = n3;
      if (a3 < 0) continue;
      let s2 = e14.segments[a3], c2 = o2, l2 = c2 + s2.duration;
      if (this.logger_(`Strategy: ${i3}. Current time: ${r2}. selected segment: ${a3}. Time: [${c2} -> ${l2}]}`), r2 >= c2 && r2 < l2) return this.logger_(`Found sync point with exact match: `, n3), n3;
    }
    return this.selectSyncPoint_(a2, { key: `time`, value: r2 });
  }
  getExpiredTime(e14, t2) {
    if (!e14 || !e14.segments) return null;
    let n2 = this.runStrategies_(e14, t2, e14.discontinuitySequence, 0);
    if (!n2.length) return null;
    let r2 = this.selectSyncPoint_(n2, { key: `segmentIndex`, value: 0 });
    return r2.segmentIndex > 0 && (r2.time *= -1), Math.abs(r2.time + sl({ defaultDuration: e14.targetDuration, durationList: e14.segments, startIndex: r2.segmentIndex, endIndex: 0 }));
  }
  runStrategies_(e14, t2, n2, r2, i2) {
    let a2 = [];
    for (let o2 = 0; o2 < kf.length; o2++) {
      let s2 = kf[o2], c2 = s2.run(this, e14, t2, n2, r2, i2);
      c2 && (c2.strategy = s2.name, a2.push({ strategy: s2.name, syncPoint: c2 }));
    }
    return a2;
  }
  selectSyncPoint_(e14, t2) {
    let n2 = e14[0].syncPoint, r2 = Math.abs(e14[0].syncPoint[t2.key] - t2.value), i2 = e14[0].strategy;
    for (let a2 = 1; a2 < e14.length; a2++) {
      let o2 = Math.abs(e14[a2].syncPoint[t2.key] - t2.value);
      o2 < r2 && (r2 = o2, n2 = e14[a2].syncPoint, i2 = e14[a2].strategy);
    }
    return this.logger_(`syncPoint for [${t2.key}: ${t2.value}] chosen with strategy [${i2}]: [time:${n2.time}, segmentIndex:${n2.segmentIndex}` + (typeof n2.partIndex == `number` ? `,partIndex:${n2.partIndex}` : ``) + `]`), n2;
  }
  saveExpiredSegmentInfo(e14, t2) {
    let n2 = t2.mediaSequence - e14.mediaSequence;
    if (n2 > Of) {
      Z.log.warn(`Not saving expired segment info. Media sequence gap ${n2} is too large.`);
      return;
    }
    for (let r2 = n2 - 1; r2 >= 0; r2--) {
      let n3 = e14.segments[r2];
      if (n3 && n3.start !== void 0) {
        t2.syncInfo = { mediaSequence: e14.mediaSequence + r2, time: n3.start }, this.logger_(`playlist refresh sync: [time:${t2.syncInfo.time}, mediaSequence: ${t2.syncInfo.mediaSequence}]`), this.trigger(`syncinfoupdate`);
        break;
      }
    }
  }
  setDateTimeMappingForStart(e14) {
    if (this.timelineToDatetimeMappings = {}, e14.segments && e14.segments.length && e14.segments[0].dateTimeObject) {
      let t2 = e14.segments[0], n2 = t2.dateTimeObject.getTime() / 1e3;
      this.timelineToDatetimeMappings[t2.timeline] = -n2;
    }
  }
  saveSegmentTimingInfo({ segmentInfo: e14, shouldSaveTimelineMapping: t2 }) {
    let n2 = this.calculateSegmentTimeMapping_(e14, e14.timingInfo, t2), r2 = e14.segment;
    n2 && (this.saveDiscontinuitySyncInfo_(e14), e14.playlist.syncInfo || (e14.playlist.syncInfo = { mediaSequence: e14.playlist.mediaSequence + e14.mediaIndex, time: r2.start }));
    let i2 = r2.dateTimeObject;
    r2.discontinuity && t2 && i2 && (this.timelineToDatetimeMappings[r2.timeline] = -(i2.getTime() / 1e3));
  }
  timestampOffsetForTimeline(e14) {
    return this.timelines[e14] === void 0 ? null : this.timelines[e14].time;
  }
  mappingForTimeline(e14) {
    return this.timelines[e14] === void 0 ? null : this.timelines[e14].mapping;
  }
  calculateSegmentTimeMapping_(e14, t2, n2) {
    let r2 = e14.segment, i2 = e14.part, a2 = this.timelines[e14.timeline], o2, s2;
    if (typeof e14.timestampOffset == `number`) a2 = { time: e14.startOfSegment, mapping: e14.startOfSegment - t2.start }, n2 && (this.timelines[e14.timeline] = a2, this.trigger(`timestampoffset`), this.logger_(`time mapping for timeline ${e14.timeline}: [time: ${a2.time}] [mapping: ${a2.mapping}]`)), o2 = e14.startOfSegment, s2 = t2.end + a2.mapping;
    else if (a2) o2 = t2.start + a2.mapping, s2 = t2.end + a2.mapping;
    else return false;
    return i2 && (i2.start = o2, i2.end = s2), (!r2.start || o2 < r2.start) && (r2.start = o2), r2.end = s2, true;
  }
  saveDiscontinuitySyncInfo_(e14) {
    let t2 = e14.playlist, n2 = e14.segment;
    if (n2.discontinuity) this.discontinuities[n2.timeline] = { time: n2.start, accuracy: 0 };
    else if (t2.discontinuityStarts && t2.discontinuityStarts.length) for (let r2 = 0; r2 < t2.discontinuityStarts.length; r2++) {
      let i2 = t2.discontinuityStarts[r2], a2 = t2.discontinuitySequence + r2 + 1, o2 = i2 - e14.mediaIndex, s2 = Math.abs(o2);
      if (!this.discontinuities[a2] || this.discontinuities[a2].accuracy > s2) {
        let r3;
        r3 = o2 < 0 ? n2.start - sl({ defaultDuration: t2.targetDuration, durationList: t2.segments, startIndex: e14.mediaIndex, endIndex: i2 }) : n2.end + sl({ defaultDuration: t2.targetDuration, durationList: t2.segments, startIndex: e14.mediaIndex + 1, endIndex: i2 }), this.discontinuities[a2] = { time: r3, accuracy: s2 };
      }
    }
  }
  dispose() {
    this.trigger(`dispose`), this.off();
  }
}, jf = class extends Z.EventTarget {
  constructor() {
    super(), this.pendingTimelineChanges_ = {}, this.lastTimelineChanges_ = {};
  }
  clearPendingTimelineChange(e14) {
    this.pendingTimelineChanges_[e14] = null, this.trigger(`pendingtimelinechange`);
  }
  pendingTimelineChange({ type: e14, from: t2, to: n2 }) {
    return typeof t2 == `number` && typeof n2 == `number` && (this.pendingTimelineChanges_[e14] = { type: e14, from: t2, to: n2 }, this.trigger(`pendingtimelinechange`)), this.pendingTimelineChanges_[e14];
  }
  lastTimelineChange({ type: e14, from: t2, to: n2 }) {
    return typeof t2 == `number` && typeof n2 == `number` && (this.lastTimelineChanges_[e14] = { type: e14, from: t2, to: n2 }, delete this.pendingTimelineChanges_[e14], this.trigger(`timelinechange`)), this.lastTimelineChanges_[e14];
  }
  dispose() {
    this.trigger(`dispose`), this.pendingTimelineChanges_ = {}, this.lastTimelineChanges_ = {}, this.off();
  }
}, Mf = ku(Au(ju(function() {
  var e14 = (function() {
    function e15() {
      this.listeners = {};
    }
    var t3 = e15.prototype;
    return t3.on = function(e16, t4) {
      this.listeners[e16] || (this.listeners[e16] = []), this.listeners[e16].push(t4);
    }, t3.off = function(e16, t4) {
      if (!this.listeners[e16]) return false;
      var n3 = this.listeners[e16].indexOf(t4);
      return this.listeners[e16] = this.listeners[e16].slice(0), this.listeners[e16].splice(n3, 1), n3 > -1;
    }, t3.trigger = function(e16) {
      var t4 = this.listeners[e16];
      if (t4) if (arguments.length === 2) for (var n3 = t4.length, r3 = 0; r3 < n3; ++r3) t4[r3].call(this, arguments[1]);
      else for (var i3 = Array.prototype.slice.call(arguments, 1), a3 = t4.length, o3 = 0; o3 < a3; ++o3) t4[o3].apply(this, i3);
    }, t3.dispose = function() {
      this.listeners = {};
    }, t3.pipe = function(e16) {
      this.on(`data`, function(t4) {
        e16.push(t4);
      });
    }, e15;
  })();
  function t2(e15) {
    return e15.subarray(0, e15.byteLength - e15[e15.byteLength - 1]);
  }
  let n2 = function() {
    let e15 = [[[], [], [], [], []], [[], [], [], [], []]], t3 = e15[0], n3 = e15[1], r3 = t3[4], i3 = n3[4], a3, o3, s3, c3 = [], l3 = [], u3, d3, f3, p3, m2, h2;
    for (a3 = 0; a3 < 256; a3++) l3[(c3[a3] = a3 << 1 ^ (a3 >> 7) * 283) ^ a3] = a3;
    for (o3 = s3 = 0; !r3[o3]; o3 ^= u3 || 1, s3 = l3[s3] || 1) for (p3 = s3 ^ s3 << 1 ^ s3 << 2 ^ s3 << 3 ^ s3 << 4, p3 = p3 >> 8 ^ p3 & 255 ^ 99, r3[o3] = p3, i3[p3] = o3, f3 = c3[d3 = c3[u3 = c3[o3]]], h2 = f3 * 16843009 ^ d3 * 65537 ^ u3 * 257 ^ o3 * 16843008, m2 = c3[p3] * 257 ^ p3 * 16843008, a3 = 0; a3 < 4; a3++) t3[a3][o3] = m2 = m2 << 24 ^ m2 >>> 8, n3[a3][p3] = h2 = h2 << 24 ^ h2 >>> 8;
    for (a3 = 0; a3 < 5; a3++) t3[a3] = t3[a3].slice(0), n3[a3] = n3[a3].slice(0);
    return e15;
  }, r2 = null;
  class i2 {
    constructor(e15) {
      r2 ||= n2(), this._tables = [[r2[0][0].slice(), r2[0][1].slice(), r2[0][2].slice(), r2[0][3].slice(), r2[0][4].slice()], [r2[1][0].slice(), r2[1][1].slice(), r2[1][2].slice(), r2[1][3].slice(), r2[1][4].slice()]];
      let t3, i3, a3, o3 = this._tables[0][4], s3 = this._tables[1], c3 = e15.length, l3 = 1;
      if (c3 !== 4 && c3 !== 6 && c3 !== 8) throw Error(`Invalid aes key size`);
      let u3 = e15.slice(0), d3 = [];
      for (this._key = [u3, d3], t3 = c3; t3 < 4 * c3 + 28; t3++) a3 = u3[t3 - 1], (t3 % c3 === 0 || c3 === 8 && t3 % c3 === 4) && (a3 = o3[a3 >>> 24] << 24 ^ o3[a3 >> 16 & 255] << 16 ^ o3[a3 >> 8 & 255] << 8 ^ o3[a3 & 255], t3 % c3 === 0 && (a3 = a3 << 8 ^ a3 >>> 24 ^ l3 << 24, l3 = l3 << 1 ^ (l3 >> 7) * 283)), u3[t3] = u3[t3 - c3] ^ a3;
      for (i3 = 0; t3; i3++, t3--) a3 = u3[i3 & 3 ? t3 : t3 - 4], t3 <= 4 || i3 < 4 ? d3[i3] = a3 : d3[i3] = s3[0][o3[a3 >>> 24]] ^ s3[1][o3[a3 >> 16 & 255]] ^ s3[2][o3[a3 >> 8 & 255]] ^ s3[3][o3[a3 & 255]];
    }
    decrypt(e15, t3, n3, r3, i3, a3) {
      let o3 = this._key[1], s3 = e15 ^ o3[0], c3 = r3 ^ o3[1], l3 = n3 ^ o3[2], u3 = t3 ^ o3[3], d3, f3, p3, m2 = o3.length / 4 - 2, h2, g2 = 4, _2 = this._tables[1], v2 = _2[0], y2 = _2[1], b2 = _2[2], x2 = _2[3], S2 = _2[4];
      for (h2 = 0; h2 < m2; h2++) d3 = v2[s3 >>> 24] ^ y2[c3 >> 16 & 255] ^ b2[l3 >> 8 & 255] ^ x2[u3 & 255] ^ o3[g2], f3 = v2[c3 >>> 24] ^ y2[l3 >> 16 & 255] ^ b2[u3 >> 8 & 255] ^ x2[s3 & 255] ^ o3[g2 + 1], p3 = v2[l3 >>> 24] ^ y2[u3 >> 16 & 255] ^ b2[s3 >> 8 & 255] ^ x2[c3 & 255] ^ o3[g2 + 2], u3 = v2[u3 >>> 24] ^ y2[s3 >> 16 & 255] ^ b2[c3 >> 8 & 255] ^ x2[l3 & 255] ^ o3[g2 + 3], g2 += 4, s3 = d3, c3 = f3, l3 = p3;
      for (h2 = 0; h2 < 4; h2++) i3[(3 & -h2) + a3] = S2[s3 >>> 24] << 24 ^ S2[c3 >> 16 & 255] << 16 ^ S2[l3 >> 8 & 255] << 8 ^ S2[u3 & 255] ^ o3[g2++], d3 = s3, s3 = c3, c3 = l3, l3 = u3, u3 = d3;
    }
  }
  class a2 extends e14 {
    constructor() {
      super(e14), this.jobs = [], this.delay = 1, this.timeout_ = null;
    }
    processJob_() {
      this.jobs.shift()(), this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null;
    }
    push(e15) {
      this.jobs.push(e15), this.timeout_ ||= setTimeout(this.processJob_.bind(this), this.delay);
    }
  }
  let o2 = function(e15) {
    return e15 << 24 | (e15 & 65280) << 8 | (e15 & 16711680) >> 8 | e15 >>> 24;
  }, s2 = function(e15, t3, n3) {
    let r3 = new Int32Array(e15.buffer, e15.byteOffset, e15.byteLength >> 2), a3 = new i2(Array.prototype.slice.call(t3)), s3 = new Uint8Array(e15.byteLength), c3 = new Int32Array(s3.buffer), l3, u3, d3, f3, p3, m2, h2, g2, _2;
    for (l3 = n3[0], u3 = n3[1], d3 = n3[2], f3 = n3[3], _2 = 0; _2 < r3.length; _2 += 4) p3 = o2(r3[_2]), m2 = o2(r3[_2 + 1]), h2 = o2(r3[_2 + 2]), g2 = o2(r3[_2 + 3]), a3.decrypt(p3, m2, h2, g2, c3, _2), c3[_2] = o2(c3[_2] ^ l3), c3[_2 + 1] = o2(c3[_2 + 1] ^ u3), c3[_2 + 2] = o2(c3[_2 + 2] ^ d3), c3[_2 + 3] = o2(c3[_2 + 3] ^ f3), l3 = p3, u3 = m2, d3 = h2, f3 = g2;
    return s3;
  };
  class c2 {
    constructor(e15, n3, r3, i3) {
      let s3 = c2.STEP, l3 = new Int32Array(e15.buffer), u3 = new Uint8Array(e15.byteLength), d3 = 0;
      for (this.asyncStream_ = new a2(), this.asyncStream_.push(this.decryptChunk_(l3.subarray(d3, d3 + s3), n3, r3, u3)), d3 = s3; d3 < l3.length; d3 += s3) r3 = new Uint32Array([o2(l3[d3 - 4]), o2(l3[d3 - 3]), o2(l3[d3 - 2]), o2(l3[d3 - 1])]), this.asyncStream_.push(this.decryptChunk_(l3.subarray(d3, d3 + s3), n3, r3, u3));
      this.asyncStream_.push(function() {
        i3(null, t2(u3));
      });
    }
    static get STEP() {
      return 32e3;
    }
    decryptChunk_(e15, t3, n3, r3) {
      return function() {
        let i3 = s2(e15, t3, n3);
        r3.set(i3, e15.byteOffset);
      };
    }
  }
  var l2 = typeof globalThis < `u` ? globalThis : typeof window < `u` ? window : typeof global < `u` ? global : typeof self < `u` ? self : {}, u2 = typeof window < `u` ? window : l2 === void 0 ? typeof self < `u` ? self : {} : l2, d2 = function(e15) {
    return ArrayBuffer.isView === `function` ? ArrayBuffer.isView(e15) : e15 && e15.buffer instanceof ArrayBuffer;
  }, f2 = u2.BigInt || Number;
  f2(`0x1`), f2(`0x100`), f2(`0x10000`), f2(`0x1000000`), f2(`0x100000000`), f2(`0x10000000000`), f2(`0x1000000000000`), f2(`0x100000000000000`), f2(`0x10000000000000000`), (function() {
    var e15 = new Uint16Array([65484]), t3 = new Uint8Array(e15.buffer, e15.byteOffset, e15.byteLength);
    return t3[0] === 255 ? `big` : t3[0] === 204 ? `little` : `unknown`;
  })();
  let p2 = function(e15) {
    let t3 = {};
    return Object.keys(e15).forEach((n3) => {
      let r3 = e15[n3];
      d2(r3) ? t3[n3] = { bytes: r3.buffer, byteOffset: r3.byteOffset, byteLength: r3.byteLength } : t3[n3] = r3;
    }), t3;
  };
  self.onmessage = function(e15) {
    let t3 = e15.data, n3 = new Uint8Array(t3.encrypted.bytes, t3.encrypted.byteOffset, t3.encrypted.byteLength), r3 = new Uint32Array(t3.key.bytes, t3.key.byteOffset, t3.key.byteLength / 4), i3 = new Uint32Array(t3.iv.bytes, t3.iv.byteOffset, t3.iv.byteLength / 4);
    new c2(n3, r3, i3, function(e16, n4) {
      self.postMessage(p2({ source: t3.source, decrypted: n4 }), [n4.buffer]);
    });
  };
}))), Nf = (e14) => {
  let t2 = e14.default ? `main` : `alternative`;
  return e14.characteristics && e14.characteristics.indexOf(`public.accessibility.describes-video`) >= 0 && (t2 = `main-desc`), t2;
}, Pf = (e14, t2) => {
  e14.abort(), e14.pause(), t2 && t2.activePlaylistLoader && (t2.activePlaylistLoader.pause(), t2.activePlaylistLoader = null);
}, Ff = (e14, t2) => {
  t2.activePlaylistLoader = e14, e14.load();
}, If = (e14, t2) => () => {
  let { segmentLoaders: { [e14]: n2, main: r2 }, mediaTypes: { [e14]: i2 } } = t2, a2 = i2.activeTrack(), o2 = i2.getActiveGroup(), s2 = i2.activePlaylistLoader, c2 = i2.lastGroup_;
  if (!(o2 && c2 && o2.id === c2.id) && (i2.lastGroup_ = o2, i2.lastTrack_ = a2, Pf(n2, i2), !(!o2 || o2.isMainPlaylist))) {
    if (!o2.playlistLoader) {
      s2 && r2.resetEverything();
      return;
    }
    n2.resyncLoader(), Ff(o2.playlistLoader, i2);
  }
}, Lf = (e14, t2) => () => {
  let { segmentLoaders: { [e14]: n2 }, mediaTypes: { [e14]: r2 } } = t2;
  r2.lastGroup_ = null, n2.abort(), n2.pause();
}, Rf = (e14, t2) => () => {
  let { mainPlaylistLoader: n2, segmentLoaders: { [e14]: r2, main: i2 }, mediaTypes: { [e14]: a2 } } = t2, o2 = a2.activeTrack(), s2 = a2.getActiveGroup(), c2 = a2.activePlaylistLoader, l2 = a2.lastTrack_;
  if (!(l2 && o2 && l2.id === o2.id) && (a2.lastGroup_ = s2, a2.lastTrack_ = o2, Pf(r2, a2), s2)) {
    if (s2.isMainPlaylist) {
      if (!o2 || !l2 || o2.id === l2.id) return;
      let e15 = t2.vhs.playlistController_, r3 = e15.selectPlaylist();
      if (e15.media() === r3) return;
      a2.logger_(`track change. Switching main audio from ${l2.id} to ${o2.id}`), n2.pause(), i2.resetEverything(), e15.fastQualityChange_(r3);
      return;
    }
    if (e14 === `AUDIO`) {
      if (!s2.playlistLoader) {
        i2.setAudio(true), i2.resetEverything();
        return;
      }
      r2.setAudio(true), i2.setAudio(false);
    }
    if (c2 === s2.playlistLoader) {
      Ff(s2.playlistLoader, a2);
      return;
    }
    r2.track && r2.track(o2), r2.resetEverything(), Ff(s2.playlistLoader, a2);
  }
}, zf = { AUDIO: (e14, t2) => () => {
  let { mediaTypes: { [e14]: n2 }, excludePlaylist: r2 } = t2, i2 = n2.activeTrack(), a2 = n2.activeGroup(), o2 = (a2.filter((e15) => e15.default)[0] || a2[0]).id, s2 = n2.tracks[o2];
  if (i2 === s2) {
    r2({ error: { message: `Problem encountered loading the default audio track.` } });
    return;
  }
  Z.log.warn(`Problem encountered loading the alternate audio track.Switching back to default.`);
  for (let e15 in n2.tracks) n2.tracks[e15].enabled = n2.tracks[e15] === s2;
  n2.onTrackChanged();
}, SUBTITLES: (e14, t2) => () => {
  let { mediaTypes: { [e14]: n2 } } = t2;
  Z.log.warn(`Problem encountered loading the subtitle track.Disabling subtitle track.`);
  let r2 = n2.activeTrack();
  r2 && (r2.mode = `disabled`), n2.onTrackChanged();
} }, Bf = { AUDIO: (e14, t2, n2) => {
  if (!t2) return;
  let { tech: r2, requestOptions: i2, segmentLoaders: { [e14]: a2 } } = n2;
  t2.on(`loadedmetadata`, () => {
    let e15 = t2.media();
    a2.playlist(e15, i2), (!r2.paused() || e15.endList && r2.preload() !== `none`) && a2.load();
  }), t2.on(`loadedplaylist`, () => {
    a2.playlist(t2.media(), i2), r2.paused() || a2.load();
  }), t2.on(`error`, zf[e14](e14, n2));
}, SUBTITLES: (e14, t2, n2) => {
  let { tech: r2, requestOptions: i2, segmentLoaders: { [e14]: a2 }, mediaTypes: { [e14]: o2 } } = n2;
  t2.on(`loadedmetadata`, () => {
    let e15 = t2.media();
    a2.playlist(e15, i2), a2.track(o2.activeTrack()), (!r2.paused() || e15.endList && r2.preload() !== `none`) && a2.load();
  }), t2.on(`loadedplaylist`, () => {
    a2.playlist(t2.media(), i2), r2.paused() || a2.load();
  }), t2.on(`error`, zf[e14](e14, n2));
} }, Vf = { AUDIO: (e14, t2) => {
  let { vhs: n2, sourceType: r2, segmentLoaders: { [e14]: i2 }, requestOptions: a2, main: { mediaGroups: o2 }, mediaTypes: { [e14]: { groups: s2, tracks: c2, logger_: l2 } }, mainPlaylistLoader: u2 } = t2, d2 = xl(u2.main);
  (!o2[e14] || Object.keys(o2[e14]).length === 0) && (o2[e14] = { main: { default: { default: true } } }, d2 && (o2[e14].main.default.playlists = u2.main.playlists));
  for (let i3 in o2[e14]) {
    s2[i3] || (s2[i3] = []);
    for (let f2 in o2[e14][i3]) {
      let p2 = o2[e14][i3][f2], m2;
      d2 ? (l2(`AUDIO group '${i3}' label '${f2}' is a main playlist`), p2.isMainPlaylist = true, m2 = null) : m2 = r2 === `vhs-json` && p2.playlists ? new Ul(p2.playlists[0], n2, a2) : p2.resolvedUri ? new Ul(p2.resolvedUri, n2, a2) : p2.playlists && r2 === `dash` ? new wu(p2.playlists[0], n2, a2, u2) : null, p2 = Q({ id: f2, playlistLoader: m2 }, p2), Bf[e14](e14, p2.playlistLoader, t2), s2[i3].push(p2), c2[f2] === void 0 && (c2[f2] = new Z.AudioTrack({ id: f2, kind: Nf(p2), enabled: false, language: p2.language, default: p2.default, label: f2 }));
    }
  }
  i2.on(`error`, zf[e14](e14, t2));
}, SUBTITLES: (e14, t2) => {
  let { tech: n2, vhs: r2, sourceType: i2, segmentLoaders: { [e14]: a2 }, requestOptions: o2, main: { mediaGroups: s2 }, mediaTypes: { [e14]: { groups: c2, tracks: l2 } }, mainPlaylistLoader: u2 } = t2;
  for (let a3 in s2[e14]) {
    c2[a3] || (c2[a3] = []);
    for (let d2 in s2[e14][a3]) {
      if (!r2.options_.useForcedSubtitles && s2[e14][a3][d2].forced) continue;
      let f2 = s2[e14][a3][d2], p2;
      if (i2 === `hls`) p2 = new Ul(f2.resolvedUri, r2, o2);
      else if (i2 === `dash`) {
        if (!f2.playlists.filter((e15) => e15.excludeUntil !== 1 / 0).length) return;
        p2 = new wu(f2.playlists[0], r2, o2, u2);
      } else i2 === `vhs-json` && (p2 = new Ul(f2.playlists ? f2.playlists[0] : f2.resolvedUri, r2, o2));
      f2 = Q({ id: d2, playlistLoader: p2 }, f2), Bf[e14](e14, f2.playlistLoader, t2), c2[a3].push(f2), l2[d2] === void 0 && (l2[d2] = n2.addRemoteTextTrack({ id: d2, kind: `subtitles`, default: f2.default && f2.autoselect, language: f2.language, label: d2 }, false).track);
    }
  }
  a2.on(`error`, zf[e14](e14, t2));
}, "CLOSED-CAPTIONS": (e14, t2) => {
  let { tech: n2, main: { mediaGroups: r2 }, mediaTypes: { [e14]: { groups: i2, tracks: a2 } } } = t2;
  for (let t3 in r2[e14]) {
    i2[t3] || (i2[t3] = []);
    for (let o2 in r2[e14][t3]) {
      let s2 = r2[e14][t3][o2];
      if (!/^(?:CC|SERVICE)/.test(s2.instreamId)) continue;
      let c2 = n2.options_.vhs && n2.options_.vhs.captionServices || {}, l2 = { label: o2, language: s2.language, instreamId: s2.instreamId, default: s2.default && s2.autoselect };
      c2[l2.instreamId] && (l2 = Q(l2, c2[l2.instreamId])), l2.default === void 0 && delete l2.default, i2[t3].push(Q({ id: o2 }, s2)), a2[o2] === void 0 && (a2[o2] = n2.addRemoteTextTrack({ id: l2.instreamId, kind: `captions`, default: l2.default, language: l2.language, label: l2.label }, false).track);
    }
  }
} }, Hf = (e14, t2) => {
  for (let n2 = 0; n2 < e14.length; n2++) if (yl(t2, e14[n2]) || e14[n2].playlists && Hf(e14[n2].playlists, t2)) return true;
  return false;
}, Uf = (e14, t2) => (n2) => {
  let { mainPlaylistLoader: r2, mediaTypes: { [e14]: { groups: i2 } } } = t2, a2 = r2.media();
  if (!a2) return null;
  let o2 = null;
  a2.attributes[e14] && (o2 = i2[a2.attributes[e14]]);
  let s2 = Object.keys(i2);
  if (!o2) if (e14 === `AUDIO` && s2.length > 1 && xl(t2.main)) for (let e15 = 0; e15 < s2.length; e15++) {
    let t3 = i2[s2[e15]];
    if (Hf(t3, a2)) {
      o2 = t3;
      break;
    }
  }
  else i2.main ? o2 = i2.main : s2.length === 1 && (o2 = i2[s2[0]]);
  return n2 === void 0 ? o2 : n2 === null || !o2 ? null : o2.filter((e15) => e15.id === n2.id)[0] || null;
}, Wf = { AUDIO: (e14, t2) => () => {
  let { mediaTypes: { [e14]: { tracks: n2 } } } = t2;
  for (let e15 in n2) if (n2[e15].enabled) return n2[e15];
  return null;
}, SUBTITLES: (e14, t2) => () => {
  let { mediaTypes: { [e14]: { tracks: n2 } } } = t2;
  for (let e15 in n2) if (n2[e15].mode === `showing` || n2[e15].mode === `hidden`) return n2[e15];
  return null;
} }, Gf = (e14, { mediaTypes: t2 }) => () => {
  let n2 = t2[e14].activeTrack();
  return n2 ? t2[e14].activeGroup(n2) : null;
}, Kf = (e14) => {
  [`AUDIO`, `SUBTITLES`, `CLOSED-CAPTIONS`].forEach((t3) => {
    Vf[t3](t3, e14);
  });
  let { mediaTypes: t2, mainPlaylistLoader: n2, tech: r2, vhs: i2, segmentLoaders: { AUDIO: a2, main: o2 } } = e14;
  [`AUDIO`, `SUBTITLES`].forEach((n3) => {
    t2[n3].activeGroup = Uf(n3, e14), t2[n3].activeTrack = Wf[n3](n3, e14), t2[n3].onGroupChanged = If(n3, e14), t2[n3].onGroupChanging = Lf(n3, e14), t2[n3].onTrackChanged = Rf(n3, e14), t2[n3].getActiveGroup = Gf(n3, e14);
  });
  let s2 = t2.AUDIO.activeGroup();
  if (s2) {
    let e15 = (s2.filter((e16) => e16.default)[0] || s2[0]).id;
    t2.AUDIO.tracks[e15].enabled = true, t2.AUDIO.onGroupChanged(), t2.AUDIO.onTrackChanged(), t2.AUDIO.getActiveGroup().playlistLoader ? (o2.setAudio(false), a2.setAudio(true)) : o2.setAudio(true);
  }
  n2.on(`mediachange`, () => {
    [`AUDIO`, `SUBTITLES`].forEach((e15) => t2[e15].onGroupChanged());
  }), n2.on(`mediachanging`, () => {
    [`AUDIO`, `SUBTITLES`].forEach((e15) => t2[e15].onGroupChanging());
  });
  let c2 = () => {
    t2.AUDIO.onTrackChanged(), r2.trigger({ type: `usage`, name: `vhs-audio-change` });
  };
  r2.audioTracks().addEventListener(`change`, c2), r2.remoteTextTracks().addEventListener(`change`, t2.SUBTITLES.onTrackChanged), i2.on(`dispose`, () => {
    r2.audioTracks().removeEventListener(`change`, c2), r2.remoteTextTracks().removeEventListener(`change`, t2.SUBTITLES.onTrackChanged);
  }), r2.clearTracks(`audio`);
  for (let e15 in t2.AUDIO.tracks) r2.audioTracks().addTrack(t2.AUDIO.tracks[e15]);
}, qf = () => {
  let e14 = {};
  return [`AUDIO`, `SUBTITLES`, `CLOSED-CAPTIONS`].forEach((t2) => {
    e14[t2] = { groups: {}, tracks: {}, activePlaylistLoader: null, activeGroup: af, activeTrack: af, getActiveGroup: af, onGroupChanged: af, onTrackChanged: af, lastTrack_: null, logger_: Ic(`MediaGroups[${t2}]`) };
  }), e14;
}, Jf = class {
  constructor() {
    this.priority_ = [], this.pathwayClones_ = /* @__PURE__ */ new Map();
  }
  set version(e14) {
    e14 === 1 && (this.version_ = e14);
  }
  set ttl(e14) {
    this.ttl_ = e14 || 300;
  }
  set reloadUri(e14) {
    e14 && (this.reloadUri_ = Pc(this.reloadUri_, e14));
  }
  set priority(e14) {
    e14 && e14.length && (this.priority_ = e14);
  }
  set pathwayClones(e14) {
    e14 && e14.length && (this.pathwayClones_ = new Map(e14.map((e15) => [e15.ID, e15])));
  }
  get version() {
    return this.version_;
  }
  get ttl() {
    return this.ttl_;
  }
  get reloadUri() {
    return this.reloadUri_;
  }
  get priority() {
    return this.priority_;
  }
  get pathwayClones() {
    return this.pathwayClones_;
  }
}, Yf = class extends Z.EventTarget {
  constructor(e14, t2) {
    super(), this.currentPathway = null, this.defaultPathway = null, this.queryBeforeStart = false, this.availablePathways_ = /* @__PURE__ */ new Set(), this.steeringManifest = new Jf(), this.proxyServerUrl_ = null, this.manifestType_ = null, this.ttlTimeout_ = null, this.request_ = null, this.currentPathwayClones = /* @__PURE__ */ new Map(), this.nextPathwayClones = /* @__PURE__ */ new Map(), this.excludedSteeringManifestURLs = /* @__PURE__ */ new Set(), this.logger_ = Ic(`Content Steering`), this.xhr_ = e14, this.getBandwidth_ = t2;
  }
  assignTagProperties(e14, t2) {
    this.manifestType_ = t2.serverUri ? `HLS` : `DASH`;
    let n2 = t2.serverUri || t2.serverURL;
    if (!n2) {
      this.logger_(`steering manifest URL is ${n2}, cannot request steering manifest.`), this.trigger(`error`);
      return;
    }
    if (n2.startsWith(`data:`)) {
      this.decodeDataUriManifest_(n2.substring(n2.indexOf(`,`) + 1));
      return;
    }
    this.steeringManifest.reloadUri = Pc(e14, n2), this.defaultPathway = t2.pathwayId || t2.defaultServiceLocation, this.queryBeforeStart = t2.queryBeforeStart, this.proxyServerUrl_ = t2.proxyServerURL, this.defaultPathway && !this.queryBeforeStart && this.trigger(`content-steering`);
  }
  requestSteeringManifest(e14) {
    let t2 = this.steeringManifest.reloadUri;
    if (!t2) return;
    let n2 = e14 ? t2 : this.getRequestURI(t2);
    if (!n2) {
      this.logger_(`No valid content steering manifest URIs. Stopping content steering.`), this.trigger(`error`), this.dispose();
      return;
    }
    this.request_ = this.xhr_({ uri: n2, requestType: `content-steering-manifest` }, (e15, t3) => {
      if (e15) {
        if (t3.status === 410) {
          this.logger_(`manifest request 410 ${e15}.`), this.logger_(`There will be no more content steering requests to ${n2} this session.`), this.excludedSteeringManifestURLs.add(n2);
          return;
        }
        if (t3.status === 429) {
          let n3 = t3.responseHeaders[`retry-after`];
          this.logger_(`manifest request 429 ${e15}.`), this.logger_(`content steering will retry in ${n3} seconds.`), this.startTTLTimeout_(parseInt(n3, 10));
          return;
        }
        this.logger_(`manifest failed to load ${e15}.`), this.startTTLTimeout_();
        return;
      }
      let r2 = JSON.parse(this.request_.responseText);
      this.assignSteeringProperties_(r2), this.startTTLTimeout_();
    });
  }
  setProxyServerUrl_(e14) {
    let t2 = new h.default.URL(e14), n2 = new h.default.URL(this.proxyServerUrl_);
    return n2.searchParams.set(`url`, encodeURI(t2.toString())), this.setSteeringParams_(n2.toString());
  }
  decodeDataUriManifest_(e14) {
    let t2 = JSON.parse(h.default.atob(e14));
    this.assignSteeringProperties_(t2);
  }
  setSteeringParams_(e14) {
    let t2 = new h.default.URL(e14), n2 = this.getPathway(), r2 = this.getBandwidth_();
    if (n2) {
      let e15 = `_${this.manifestType_}_pathway`;
      t2.searchParams.set(e15, n2);
    }
    if (r2) {
      let e15 = `_${this.manifestType_}_throughput`;
      t2.searchParams.set(e15, r2);
    }
    return t2.toString();
  }
  assignSteeringProperties_(e14) {
    if (this.steeringManifest.version = e14.VERSION, !this.steeringManifest.version) {
      this.logger_(`manifest version is ${e14.VERSION}, which is not supported.`), this.trigger(`error`);
      return;
    }
    this.steeringManifest.ttl = e14.TTL, this.steeringManifest.reloadUri = e14[`RELOAD-URI`], this.steeringManifest.priority = e14[`PATHWAY-PRIORITY`] || e14[`SERVICE-LOCATION-PRIORITY`], this.steeringManifest.pathwayClones = e14[`PATHWAY-CLONES`], this.nextPathwayClones = this.steeringManifest.pathwayClones, this.availablePathways_.size || (this.logger_(`There are no available pathways for content steering. Ending content steering.`), this.trigger(`error`), this.dispose());
    let t2 = ((e15) => {
      for (let t3 of e15) if (this.availablePathways_.has(t3)) return t3;
      return [...this.availablePathways_][0];
    })(this.steeringManifest.priority);
    this.currentPathway !== t2 && (this.currentPathway = t2, this.trigger(`content-steering`));
  }
  getPathway() {
    return this.currentPathway || this.defaultPathway;
  }
  getRequestURI(e14) {
    if (!e14) return null;
    let t2 = (e15) => this.excludedSteeringManifestURLs.has(e15);
    if (this.proxyServerUrl_) {
      let n3 = this.setProxyServerUrl_(e14);
      if (!t2(n3)) return n3;
    }
    let n2 = this.setSteeringParams_(e14);
    return t2(n2) ? null : n2;
  }
  startTTLTimeout_(e14 = this.steeringManifest.ttl) {
    let t2 = e14 * 1e3;
    this.ttlTimeout_ = h.default.setTimeout(() => {
      this.requestSteeringManifest();
    }, t2);
  }
  clearTTLTimeout_() {
    h.default.clearTimeout(this.ttlTimeout_), this.ttlTimeout_ = null;
  }
  abort() {
    this.request_ && this.request_.abort(), this.request_ = null;
  }
  dispose() {
    this.off(`content-steering`), this.off(`error`), this.abort(), this.clearTTLTimeout_(), this.currentPathway = null, this.defaultPathway = null, this.queryBeforeStart = null, this.proxyServerUrl_ = null, this.manifestType_ = null, this.ttlTimeout_ = null, this.request_ = null, this.excludedSteeringManifestURLs = /* @__PURE__ */ new Set(), this.availablePathways_ = /* @__PURE__ */ new Set(), this.steeringManifest = new Jf();
  }
  addAvailablePathway(e14) {
    e14 && this.availablePathways_.add(e14);
  }
  clearAvailablePathways() {
    this.availablePathways_.clear();
  }
  excludePathway(e14) {
    return this.availablePathways_.delete(e14);
  }
  didDASHTagChange(e14, t2) {
    return !t2 && this.steeringManifest.reloadUri || t2 && (Pc(e14, t2.serverURL) !== this.steeringManifest.reloadUri || t2.defaultServiceLocation !== this.defaultPathway || t2.queryBeforeStart !== this.queryBeforeStart || t2.proxyServerURL !== this.proxyServerUrl_);
  }
  getAvailablePathways() {
    return this.availablePathways_;
  }
}, Xf = 10, Zf, Qf = [`mediaRequests`, `mediaRequestsAborted`, `mediaRequestsTimedout`, `mediaRequestsErrored`, `mediaTransferDuration`, `mediaBytesTransferred`, `mediaAppends`], $f = function(e14) {
  return this.audioSegmentLoader_[e14] + this.mainSegmentLoader_[e14];
}, ep = function({ currentPlaylist: e14, buffered: t2, currentTime: n2, nextPlaylist: r2, bufferLowWaterLine: i2, bufferHighWaterLine: a2, duration: o2, bufferBasedABR: s2, log: c2 }) {
  if (!r2) return Z.log.warn(`We received no playlist to switch to. Please check your stream.`), false;
  let l2 = `allowing switch ${e14 && e14.id || `null`} -> ${r2.id}`;
  if (!e14) return c2(`${l2} as current playlist is not set`), true;
  if (r2.id === e14.id) return false;
  let u2 = !!Hc(t2, n2).length;
  if (!e14.endList) return !u2 && typeof e14.partTargetDuration == `number` ? (c2(`not ${l2} as current playlist is live llhls, but currentTime isn't in buffered.`), false) : (c2(`${l2} as current playlist is live`), true);
  let d2 = Zc(t2, n2), f2 = s2 ? Tu.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE : Tu.MAX_BUFFER_LOW_WATER_LINE;
  if (o2 < f2) return c2(`${l2} as duration < max low water line (${o2} < ${f2})`), true;
  let p2 = r2.attributes.BANDWIDTH, m2 = e14.attributes.BANDWIDTH;
  if (p2 < m2 && (!s2 || d2 < a2)) {
    let e15 = `${l2} as next bandwidth < current bandwidth (${p2} < ${m2})`;
    return s2 && (e15 += ` and forwardBuffer < bufferHighWaterLine (${d2} < ${a2})`), c2(e15), true;
  }
  if ((!s2 || p2 > m2) && d2 >= i2) {
    let e15 = `${l2} as forwardBuffer >= bufferLowWaterLine (${d2} >= ${i2})`;
    return s2 && (e15 += ` and next bandwidth > current bandwidth (${p2} > ${m2})`), c2(e15), true;
  }
  return c2(`not ${l2} as no switching criteria met`), false;
}, tp = class extends Z.EventTarget {
  constructor(e14) {
    super();
    let { src: t2, withCredentials: n2, tech: r2, bandwidth: i2, externVhs: a2, useCueTags: o2, playlistExclusionDuration: s2, enableLowInitialPlaylist: c2, sourceType: l2, cacheEncryptionKeys: u2, bufferBasedABR: d2, leastPixelDiffSelector: f2, captionServices: p2 } = e14;
    if (!t2) throw Error(`A non-empty playlist URL or JSON manifest string is required`);
    let { maxPlaylistRetries: m2 } = e14;
    m2 ??= 1 / 0, Zf = a2, this.bufferBasedABR = !!d2, this.leastPixelDiffSelector = !!f2, this.withCredentials = n2, this.tech_ = r2, this.vhs_ = r2.vhs, this.sourceType_ = l2, this.useCueTags_ = o2, this.playlistExclusionDuration = s2, this.maxPlaylistRetries = m2, this.enableLowInitialPlaylist = c2, this.useCueTags_ && (this.cueTagsTrack_ = this.tech_.addTextTrack(`metadata`, `ad-cues`), this.cueTagsTrack_.inBandMetadataTrackDispatchType = ``), this.requestOptions_ = { withCredentials: n2, maxPlaylistRetries: m2, timeout: null }, this.on(`error`, this.pauseLoading), this.mediaTypes_ = qf(), this.mediaSource = new h.default.MediaSource(), this.handleDurationChange_ = this.handleDurationChange_.bind(this), this.handleSourceOpen_ = this.handleSourceOpen_.bind(this), this.handleSourceEnded_ = this.handleSourceEnded_.bind(this), this.mediaSource.addEventListener(`durationchange`, this.handleDurationChange_), this.mediaSource.addEventListener(`sourceopen`, this.handleSourceOpen_), this.mediaSource.addEventListener(`sourceended`, this.handleSourceEnded_), this.seekable_ = Lc(), this.hasPlayed_ = false, this.syncController_ = new Af(e14), this.segmentMetadataTrack_ = r2.addRemoteTextTrack({ kind: `metadata`, label: `segment-metadata` }, false).track, this.decrypter_ = new Mf(), this.sourceUpdater_ = new gf(this.mediaSource), this.inbandTextTracks_ = {}, this.timelineChangeController_ = new jf(), this.keyStatusMap_ = /* @__PURE__ */ new Map();
    let g2 = { vhs: this.vhs_, parse708captions: e14.parse708captions, useDtsForTimestampOffset: e14.useDtsForTimestampOffset, captionServices: p2, mediaSource: this.mediaSource, currentTime: this.tech_.currentTime.bind(this.tech_), seekable: () => this.seekable(), seeking: () => this.tech_.seeking(), duration: () => this.duration(), hasPlayed: () => this.hasPlayed_, goalBufferLength: () => this.goalBufferLength(), bandwidth: i2, syncController: this.syncController_, decrypter: this.decrypter_, sourceType: this.sourceType_, inbandTextTracks: this.inbandTextTracks_, cacheEncryptionKeys: u2, sourceUpdater: this.sourceUpdater_, timelineChangeController: this.timelineChangeController_, exactManifestTimings: e14.exactManifestTimings, addMetadataToTextTrack: this.addMetadataToTextTrack.bind(this) };
    this.mainPlaylistLoader_ = this.sourceType_ === `dash` ? new wu(t2, this.vhs_, Q(this.requestOptions_, { addMetadataToTextTrack: this.addMetadataToTextTrack.bind(this) })) : new Ul(t2, this.vhs_, Q(this.requestOptions_, { addDateRangesToTextTrack: this.addDateRangesToTextTrack_.bind(this) })), this.setupMainPlaylistLoaderListeners_(), this.mainSegmentLoader_ = new rf(Q(g2, { segmentMetadataTrack: this.segmentMetadataTrack_, loaderType: `main` }), e14), this.audioSegmentLoader_ = new rf(Q(g2, { loaderType: `audio` }), e14), this.subtitleSegmentLoader_ = new xf(Q(g2, { loaderType: `vtt`, featuresNativeTextTracks: this.tech_.featuresNativeTextTracks, loadVttJs: () => new Promise((e15, t3) => {
      function n3() {
        r2.off(`vttjserror`, i3), e15();
      }
      function i3() {
        r2.off(`vttjsloaded`, n3), t3();
      }
      r2.one(`vttjsloaded`, n3), r2.one(`vttjserror`, i3), r2.addWebVttScript_();
    }) }), e14);
    let _2 = () => this.mainSegmentLoader_.bandwidth;
    this.contentSteeringController_ = new Yf(this.vhs_.xhr, _2), this.setupSegmentLoaderListeners_(), this.bufferBasedABR && (this.mainPlaylistLoader_.one(`loadedplaylist`, () => this.startABRTimer_()), this.tech_.on(`pause`, () => this.stopABRTimer_()), this.tech_.on(`play`, () => this.startABRTimer_())), Qf.forEach((e15) => {
      this[e15 + `_`] = $f.bind(this, e15);
    }), this.logger_ = Ic(`pc`), this.triggeredFmp4Usage = false, this.tech_.preload() === `none` ? (this.loadOnPlay_ = () => {
      this.loadOnPlay_ = null, this.mainPlaylistLoader_.load();
    }, this.tech_.one(`play`, this.loadOnPlay_)) : this.mainPlaylistLoader_.load(), this.timeToLoadedData__ = -1, this.mainAppendsToLoadedData__ = -1, this.audioAppendsToLoadedData__ = -1;
    let v2 = this.tech_.preload() === `none` ? `play` : `loadstart`;
    this.tech_.one(v2, () => {
      let e15 = Date.now();
      this.tech_.one(`loadeddata`, () => {
        this.timeToLoadedData__ = Date.now() - e15, this.mainAppendsToLoadedData__ = this.mainSegmentLoader_.mediaAppends, this.audioAppendsToLoadedData__ = this.audioSegmentLoader_.mediaAppends;
      });
    });
  }
  mainAppendsToLoadedData_() {
    return this.mainAppendsToLoadedData__;
  }
  audioAppendsToLoadedData_() {
    return this.audioAppendsToLoadedData__;
  }
  appendsToLoadedData_() {
    let e14 = this.mainAppendsToLoadedData_(), t2 = this.audioAppendsToLoadedData_();
    return e14 === -1 || t2 === -1 ? -1 : e14 + t2;
  }
  timeToLoadedData_() {
    return this.timeToLoadedData__;
  }
  checkABR_(e14 = `abr`) {
    let t2 = this.selectPlaylist();
    t2 && this.shouldSwitchToMedia_(t2) && this.switchMedia_(t2, e14);
  }
  switchMedia_(e14, t2, n2) {
    let r2 = this.media(), i2 = r2 && (r2.id || r2.uri), a2 = e14 && (e14.id || e14.uri);
    i2 && i2 !== a2 && (this.logger_(`switch media ${i2} -> ${a2} from ${t2}`), this.tech_.trigger({ type: `usage`, name: `vhs-rendition-change-${t2}` })), this.mainPlaylistLoader_.media(e14, n2);
  }
  switchMediaForDASHContentSteering_() {
    [`AUDIO`, `SUBTITLES`, `CLOSED-CAPTIONS`].forEach((e14) => {
      let t2 = this.mediaTypes_[e14], n2 = t2 ? t2.activeGroup() : null, r2 = this.contentSteeringController_.getPathway();
      if (n2 && r2) {
        let t3 = (n2.length ? n2[0].playlists : n2.playlists).filter((e15) => e15.attributes.serviceLocation === r2);
        t3.length && this.mediaTypes_[e14].activePlaylistLoader.media(t3[0]);
      }
    });
  }
  startABRTimer_() {
    this.stopABRTimer_(), this.abrTimer_ = h.default.setInterval(() => this.checkABR_(), 250);
  }
  stopABRTimer_() {
    this.tech_.scrubbing && this.tech_.scrubbing() || (h.default.clearInterval(this.abrTimer_), this.abrTimer_ = null);
  }
  getAudioTrackPlaylists_() {
    let e14 = this.main(), t2 = e14 && e14.playlists || [];
    if (!e14 || !e14.mediaGroups || !e14.mediaGroups.AUDIO) return t2;
    let n2 = e14.mediaGroups.AUDIO, r2 = Object.keys(n2), i2;
    if (Object.keys(this.mediaTypes_.AUDIO.groups).length) i2 = this.mediaTypes_.AUDIO.activeTrack();
    else {
      let e15 = n2.main || r2.length && n2[r2[0]];
      for (let t3 in e15) if (e15[t3].default) {
        i2 = { label: t3 };
        break;
      }
    }
    if (!i2) return t2;
    let a2 = [];
    for (let t3 in n2) if (n2[t3][i2.label]) {
      let r3 = n2[t3][i2.label];
      if (r3.playlists && r3.playlists.length) a2.push.apply(a2, r3.playlists);
      else if (r3.uri) a2.push(r3);
      else if (e14.playlists.length) for (let n3 = 0; n3 < e14.playlists.length; n3++) {
        let r4 = e14.playlists[n3];
        r4.attributes && r4.attributes.AUDIO && r4.attributes.AUDIO === t3 && a2.push(r4);
      }
    }
    return a2.length ? a2 : t2;
  }
  setupMainPlaylistLoaderListeners_() {
    this.mainPlaylistLoader_.on(`loadedmetadata`, () => {
      let e14 = this.mainPlaylistLoader_.media(), t2 = e14.targetDuration * 1.5 * 1e3;
      vl(this.mainPlaylistLoader_.main, this.mainPlaylistLoader_.media()) ? this.requestOptions_.timeout = 0 : this.requestOptions_.timeout = t2, e14.endList && this.tech_.preload() !== `none` && (this.mainSegmentLoader_.playlist(e14, this.requestOptions_), this.mainSegmentLoader_.load()), Kf({ sourceType: this.sourceType_, segmentLoaders: { AUDIO: this.audioSegmentLoader_, SUBTITLES: this.subtitleSegmentLoader_, main: this.mainSegmentLoader_ }, tech: this.tech_, requestOptions: this.requestOptions_, mainPlaylistLoader: this.mainPlaylistLoader_, vhs: this.vhs_, main: this.main(), mediaTypes: this.mediaTypes_, excludePlaylist: this.excludePlaylist.bind(this) }), this.triggerPresenceUsage_(this.main(), e14), this.setupFirstPlay(), !this.mediaTypes_.AUDIO.activePlaylistLoader || this.mediaTypes_.AUDIO.activePlaylistLoader.media() ? this.trigger(`selectedinitialmedia`) : this.mediaTypes_.AUDIO.activePlaylistLoader.one(`loadedmetadata`, () => {
        this.trigger(`selectedinitialmedia`);
      });
    }), this.mainPlaylistLoader_.on(`loadedplaylist`, () => {
      this.loadOnPlay_ && this.tech_.off(`play`, this.loadOnPlay_);
      let e14 = this.mainPlaylistLoader_.media();
      if (!e14) {
        this.attachContentSteeringListeners_(), this.initContentSteeringController_(), this.excludeUnsupportedVariants_();
        let t2;
        if (this.enableLowInitialPlaylist && (t2 = this.selectInitialPlaylist()), t2 ||= this.selectPlaylist(), !t2 || !this.shouldSwitchToMedia_(t2) || (this.initialMedia_ = t2, this.switchMedia_(this.initialMedia_, `initial`), !(this.sourceType_ === `vhs-json` && this.initialMedia_.segments))) return;
        e14 = this.initialMedia_;
      }
      this.handleUpdatedMediaPlaylist(e14);
    }), this.mainPlaylistLoader_.on(`error`, () => {
      let e14 = this.mainPlaylistLoader_.error;
      this.excludePlaylist({ playlistToExclude: e14.playlist, error: e14 });
    }), this.mainPlaylistLoader_.on(`mediachanging`, () => {
      this.mainSegmentLoader_.abort(), this.mainSegmentLoader_.pause();
    }), this.mainPlaylistLoader_.on(`mediachange`, () => {
      let e14 = this.mainPlaylistLoader_.media(), t2 = e14.targetDuration * 1.5 * 1e3;
      vl(this.mainPlaylistLoader_.main, this.mainPlaylistLoader_.media()) ? this.requestOptions_.timeout = 0 : this.requestOptions_.timeout = t2, this.sourceType_ === `dash` && this.mainPlaylistLoader_.load(), this.mainSegmentLoader_.pause(), this.mainSegmentLoader_.playlist(e14, this.requestOptions_), this.waitingForFastQualityPlaylistReceived_ ? this.runFastQualitySwitch_() : this.mainSegmentLoader_.load(), this.tech_.trigger({ type: `mediachange`, bubbles: true });
    }), this.mainPlaylistLoader_.on(`playlistunchanged`, () => {
      let e14 = this.mainPlaylistLoader_.media();
      e14.lastExcludeReason_ !== `playlist-unchanged` && this.stuckAtPlaylistEnd_(e14) && (this.excludePlaylist({ error: { message: `Playlist no longer updating.`, reason: `playlist-unchanged` } }), this.tech_.trigger(`playliststuck`));
    }), this.mainPlaylistLoader_.on(`renditiondisabled`, () => {
      this.tech_.trigger({ type: `usage`, name: `vhs-rendition-disabled` });
    }), this.mainPlaylistLoader_.on(`renditionenabled`, () => {
      this.tech_.trigger({ type: `usage`, name: `vhs-rendition-enabled` });
    });
  }
  handleUpdatedMediaPlaylist(e14) {
    this.useCueTags_ && this.updateAdCues_(e14), this.mainSegmentLoader_.pause(), this.mainSegmentLoader_.playlist(e14, this.requestOptions_), this.waitingForFastQualityPlaylistReceived_ && this.runFastQualitySwitch_(), this.updateDuration(!e14.endList), this.tech_.paused() || (this.mainSegmentLoader_.load(), this.audioSegmentLoader_ && this.audioSegmentLoader_.load());
  }
  triggerPresenceUsage_(e14, t2) {
    let n2 = e14.mediaGroups || {}, r2 = true, i2 = Object.keys(n2.AUDIO);
    for (let e15 in n2.AUDIO) for (let t3 in n2.AUDIO[e15]) n2.AUDIO[e15][t3].uri || (r2 = false);
    r2 && this.tech_.trigger({ type: `usage`, name: `vhs-demuxed` }), Object.keys(n2.SUBTITLES).length && this.tech_.trigger({ type: `usage`, name: `vhs-webvtt` }), Zf.Playlist.isAes(t2) && this.tech_.trigger({ type: `usage`, name: `vhs-aes` }), i2.length && Object.keys(n2.AUDIO[i2[0]]).length > 1 && this.tech_.trigger({ type: `usage`, name: `vhs-alternate-audio` }), this.useCueTags_ && this.tech_.trigger({ type: `usage`, name: `vhs-playlist-cue-tags` });
  }
  shouldSwitchToMedia_(e14) {
    let t2 = this.mainPlaylistLoader_.media() || this.mainPlaylistLoader_.pendingMedia_, n2 = this.tech_.currentTime(), r2 = this.bufferLowWaterLine(), i2 = this.bufferHighWaterLine();
    return ep({ buffered: this.tech_.buffered(), currentTime: n2, currentPlaylist: t2, nextPlaylist: e14, bufferLowWaterLine: r2, bufferHighWaterLine: i2, duration: this.duration(), bufferBasedABR: this.bufferBasedABR, log: this.logger_ });
  }
  setupSegmentLoaderListeners_() {
    this.mainSegmentLoader_.on(`bandwidthupdate`, () => {
      this.checkABR_(`bandwidthupdate`), this.tech_.trigger(`bandwidthupdate`);
    }), this.mainSegmentLoader_.on(`timeout`, () => {
      this.bufferBasedABR && this.mainSegmentLoader_.load();
    }), this.bufferBasedABR || this.mainSegmentLoader_.on(`progress`, () => {
      this.trigger(`progress`);
    }), this.mainSegmentLoader_.on(`error`, () => {
      let e15 = this.mainSegmentLoader_.error();
      this.excludePlaylist({ playlistToExclude: e15.playlist, error: e15 });
    }), this.mainSegmentLoader_.on(`appenderror`, () => {
      this.error = this.mainSegmentLoader_.error_, this.trigger(`error`);
    }), this.mainSegmentLoader_.on(`syncinfoupdate`, () => {
      this.onSyncInfoUpdate_();
    }), this.mainSegmentLoader_.on(`timestampoffset`, () => {
      this.tech_.trigger({ type: `usage`, name: `vhs-timestamp-offset` });
    }), this.audioSegmentLoader_.on(`syncinfoupdate`, () => {
      this.onSyncInfoUpdate_();
    }), this.audioSegmentLoader_.on(`appenderror`, () => {
      this.error = this.audioSegmentLoader_.error_, this.trigger(`error`);
    }), this.mainSegmentLoader_.on(`ended`, () => {
      this.logger_(`main segment loader ended`), this.onEndOfStream();
    }), this.mainSegmentLoader_.on(`earlyabort`, (e15) => {
      this.bufferBasedABR || (this.delegateLoaders_(`all`, [`abort`]), this.excludePlaylist({ error: { message: `Aborted early because there isn't enough bandwidth to complete the request without rebuffering.` }, playlistExclusionDuration: Xf }));
    });
    let e14 = () => {
      if (!this.sourceUpdater_.hasCreatedSourceBuffers()) return this.tryToCreateSourceBuffers_();
      let e15 = this.getCodecsOrExclude_();
      e15 && this.sourceUpdater_.addOrChangeSourceBuffers(e15);
    };
    this.mainSegmentLoader_.on(`trackinfo`, e14), this.audioSegmentLoader_.on(`trackinfo`, e14), this.mainSegmentLoader_.on(`fmp4`, () => {
      this.triggeredFmp4Usage ||= (this.tech_.trigger({ type: `usage`, name: `vhs-fmp4` }), true);
    }), this.audioSegmentLoader_.on(`fmp4`, () => {
      this.triggeredFmp4Usage ||= (this.tech_.trigger({ type: `usage`, name: `vhs-fmp4` }), true);
    }), this.audioSegmentLoader_.on(`ended`, () => {
      this.logger_(`audioSegmentLoader ended`), this.onEndOfStream();
    });
  }
  mediaSecondsLoaded_() {
    return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded);
  }
  load() {
    this.mainSegmentLoader_.load(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load(), this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load();
  }
  fastQualityChange_(e14 = this.selectPlaylist()) {
    if (e14 && e14 === this.mainPlaylistLoader_.media()) {
      this.logger_(`skipping fastQualityChange because new media is same as old`);
      return;
    }
    this.switchMedia_(e14, `fast-quality`), this.waitingForFastQualityPlaylistReceived_ = true;
  }
  runFastQualitySwitch_() {
    this.waitingForFastQualityPlaylistReceived_ = false, this.mainSegmentLoader_.pause(), this.mainSegmentLoader_.resetEverything(() => {
      this.tech_.setCurrentTime(this.tech_.currentTime());
    });
  }
  play() {
    if (this.setupFirstPlay()) return;
    this.tech_.ended() && this.tech_.setCurrentTime(0), this.hasPlayed_ && this.load();
    let e14 = this.tech_.seekable();
    if (this.tech_.duration() === 1 / 0 && this.tech_.currentTime() < e14.start(0)) return this.tech_.setCurrentTime(e14.end(e14.length - 1));
  }
  setupFirstPlay() {
    let e14 = this.mainPlaylistLoader_.media();
    if (!e14 || this.tech_.paused() || this.hasPlayed_) return false;
    if (!e14.endList || e14.start) {
      let t2 = this.seekable();
      if (!t2.length) return false;
      let n2 = t2.end(0), r2 = n2;
      if (e14.start) {
        let i2 = e14.start.timeOffset;
        r2 = i2 < 0 ? Math.max(n2 + i2, t2.start(0)) : Math.min(n2, i2);
      }
      this.trigger(`firstplay`), this.tech_.setCurrentTime(r2);
    }
    return this.hasPlayed_ = true, this.load(), true;
  }
  handleSourceOpen_() {
    if (this.tryToCreateSourceBuffers_(), this.tech_.autoplay()) {
      let e14 = this.tech_.play();
      e14 !== void 0 && typeof e14.then == `function` && e14.then(null, (e15) => {
      });
    }
    this.trigger(`sourceopen`);
  }
  handleSourceEnded_() {
    if (!this.inbandTextTracks_.metadataTrack_) return;
    let e14 = this.inbandTextTracks_.metadataTrack_.cues;
    if (!e14 || !e14.length) return;
    let t2 = this.duration();
    e14[e14.length - 1].endTime = isNaN(t2) || Math.abs(t2) === 1 / 0 ? Number.MAX_VALUE : t2;
  }
  handleDurationChange_() {
    this.tech_.trigger(`durationchange`);
  }
  onEndOfStream() {
    let e14 = this.mainSegmentLoader_.ended_;
    if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
      let t2 = this.mainSegmentLoader_.getCurrentMediaInfo_();
      !t2 || t2.hasVideo ? e14 &&= this.audioSegmentLoader_.ended_ : e14 = this.audioSegmentLoader_.ended_;
    }
    e14 && (this.stopABRTimer_(), this.sourceUpdater_.endOfStream());
  }
  stuckAtPlaylistEnd_(e14) {
    if (!this.seekable().length) return false;
    let t2 = this.syncController_.getExpiredTime(e14, this.duration());
    if (t2 === null) return false;
    let n2 = Zf.Playlist.playlistEnd(e14, t2), r2 = this.tech_.currentTime(), i2 = this.tech_.buffered();
    if (!i2.length) return n2 - r2 <= Bc;
    let a2 = i2.end(i2.length - 1);
    return a2 - r2 <= Bc && n2 - a2 <= Bc;
  }
  excludePlaylist({ playlistToExclude: e14 = this.mainPlaylistLoader_.media(), error: t2 = {}, playlistExclusionDuration: n2 }) {
    if (e14 ||= this.mainPlaylistLoader_.media(), n2 = n2 || t2.playlistExclusionDuration || this.playlistExclusionDuration, !e14) {
      this.error = t2, this.mediaSource.readyState === `open` ? this.sourceUpdater_.endOfStream(`network`) : this.trigger(`error`);
      return;
    }
    e14.playlistErrors_++;
    let r2 = this.mainPlaylistLoader_.main.playlists, i2 = r2.filter(pl), a2 = i2.length === 1 && i2[0] === e14;
    if (r2.length === 1 && n2 !== 1 / 0) return Z.log.warn(`Problem encountered with playlist ${e14.id}. Trying again since it is the only playlist.`), this.tech_.trigger(`retryplaylist`), this.mainPlaylistLoader_.load(a2);
    if (a2) {
      if (this.main().contentSteering) {
        let t4 = this.pathwayAttribute_(e14), n3 = this.contentSteeringController_.steeringManifest.ttl * 1e3;
        this.contentSteeringController_.excludePathway(t4), this.excludeThenChangePathway_(), setTimeout(() => {
          this.contentSteeringController_.addAvailablePathway(t4);
        }, n3);
        return;
      }
      let t3 = false;
      r2.forEach((n3) => {
        if (n3 === e14) return;
        let r3 = n3.excludeUntil;
        r3 !== void 0 && r3 !== 1 / 0 && (t3 = true, delete n3.excludeUntil);
      }), t3 && (Z.log.warn(`Removing other playlists from the exclusion list because the last rendition is about to be excluded.`), this.tech_.trigger(`retryplaylist`));
    }
    let o2;
    o2 = e14.playlistErrors_ > this.maxPlaylistRetries ? 1 / 0 : Date.now() + n2 * 1e3, e14.excludeUntil = o2, t2.reason && (e14.lastExcludeReason_ = t2.reason), this.tech_.trigger(`excludeplaylist`), this.tech_.trigger({ type: `usage`, name: `vhs-rendition-excluded` });
    let s2 = this.selectPlaylist();
    if (!s2) {
      this.error = `Playback cannot continue. No available working or supported playlists.`, this.trigger(`error`);
      return;
    }
    let c2 = t2.internal ? this.logger_ : Z.log.warn, l2 = t2.message ? ` ` + t2.message : ``;
    c2(`${t2.internal ? `Internal problem` : `Problem`} encountered with playlist ${e14.id}.${l2} Switching to playlist ${s2.id}.`), s2.attributes.AUDIO !== e14.attributes.AUDIO && this.delegateLoaders_(`audio`, [`abort`, `pause`]), s2.attributes.SUBTITLES !== e14.attributes.SUBTITLES && this.delegateLoaders_(`subtitle`, [`abort`, `pause`]), this.delegateLoaders_(`main`, [`abort`, `pause`]);
    let u2 = s2.targetDuration / 2 * 1e3 || 5 * 1e3, d2 = typeof s2.lastRequest == `number` && Date.now() - s2.lastRequest <= u2;
    return this.switchMedia_(s2, `exclude`, a2 || d2);
  }
  pauseLoading() {
    this.delegateLoaders_(`all`, [`abort`, `pause`]), this.stopABRTimer_();
  }
  delegateLoaders_(e14, t2) {
    let n2 = [], r2 = e14 === `all`;
    (r2 || e14 === `main`) && n2.push(this.mainPlaylistLoader_);
    let i2 = [];
    (r2 || e14 === `audio`) && i2.push(`AUDIO`), (r2 || e14 === `subtitle`) && (i2.push(`CLOSED-CAPTIONS`), i2.push(`SUBTITLES`)), i2.forEach((e15) => {
      let t3 = this.mediaTypes_[e15] && this.mediaTypes_[e15].activePlaylistLoader;
      t3 && n2.push(t3);
    }), [`main`, `audio`, `subtitle`].forEach((t3) => {
      let r3 = this[`${t3}SegmentLoader_`];
      r3 && (e14 === t3 || e14 === `all`) && n2.push(r3);
    }), n2.forEach((e15) => t2.forEach((t3) => {
      typeof e15[t3] == `function` && e15[t3]();
    }));
  }
  setCurrentTime(e14) {
    let t2 = Hc(this.tech_.buffered(), e14);
    if (!(this.mainPlaylistLoader_ && this.mainPlaylistLoader_.media()) || !this.mainPlaylistLoader_.media().segments) return 0;
    if (t2 && t2.length) return e14;
    this.mainSegmentLoader_.pause(), this.mainSegmentLoader_.resetEverything(), this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.pause(), this.audioSegmentLoader_.resetEverything()), this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.pause(), this.subtitleSegmentLoader_.resetEverything()), this.load();
  }
  duration() {
    if (!this.mainPlaylistLoader_) return 0;
    let e14 = this.mainPlaylistLoader_.media();
    return e14 ? e14.endList ? this.mediaSource ? this.mediaSource.duration : Zf.Playlist.duration(e14) : 1 / 0 : 0;
  }
  seekable() {
    return this.seekable_;
  }
  onSyncInfoUpdate_() {
    let e14;
    if (!this.mainPlaylistLoader_) return;
    let t2 = this.mainPlaylistLoader_.media();
    if (!t2) return;
    let n2 = this.syncController_.getExpiredTime(t2, this.duration());
    if (n2 === null) return;
    let r2 = this.mainPlaylistLoader_.main, i2 = Zf.Playlist.seekable(t2, n2, Zf.Playlist.liveEdgeDelay(r2, t2));
    if (i2.length === 0 || this.mediaTypes_.AUDIO.activePlaylistLoader && (t2 = this.mediaTypes_.AUDIO.activePlaylistLoader.media(), n2 = this.syncController_.getExpiredTime(t2, this.duration()), n2 === null || (e14 = Zf.Playlist.seekable(t2, n2, Zf.Playlist.liveEdgeDelay(r2, t2)), e14.length === 0))) return;
    let a2, o2;
    this.seekable_ && this.seekable_.length && (a2 = this.seekable_.end(0), o2 = this.seekable_.start(0)), e14 ? e14.start(0) > i2.end(0) || i2.start(0) > e14.end(0) ? this.seekable_ = i2 : this.seekable_ = Lc([[e14.start(0) > i2.start(0) ? e14.start(0) : i2.start(0), e14.end(0) < i2.end(0) ? e14.end(0) : i2.end(0)]]) : this.seekable_ = i2, !(this.seekable_ && this.seekable_.length && this.seekable_.end(0) === a2 && this.seekable_.start(0) === o2) && (this.logger_(`seekable updated [${Kc(this.seekable_)}]`), this.tech_.trigger(`seekablechanged`));
  }
  updateDuration(e14) {
    if (this.updateDuration_ &&= (this.mediaSource.removeEventListener(`sourceopen`, this.updateDuration_), null), this.mediaSource.readyState !== `open`) {
      this.updateDuration_ = this.updateDuration.bind(this, e14), this.mediaSource.addEventListener(`sourceopen`, this.updateDuration_);
      return;
    }
    if (e14) {
      let e15 = this.seekable();
      if (!e15.length) return;
      (isNaN(this.mediaSource.duration) || this.mediaSource.duration < e15.end(e15.length - 1)) && this.sourceUpdater_.setDuration(e15.end(e15.length - 1));
      return;
    }
    let t2 = this.tech_.buffered(), n2 = Zf.Playlist.duration(this.mainPlaylistLoader_.media());
    t2.length > 0 && (n2 = Math.max(n2, t2.end(t2.length - 1))), this.mediaSource.duration !== n2 && this.sourceUpdater_.setDuration(n2);
  }
  dispose() {
    this.trigger(`dispose`), this.decrypter_.terminate(), this.mainPlaylistLoader_.dispose(), this.mainSegmentLoader_.dispose(), this.contentSteeringController_.dispose(), this.keyStatusMap_.clear(), this.loadOnPlay_ && this.tech_.off(`play`, this.loadOnPlay_), [`AUDIO`, `SUBTITLES`].forEach((e14) => {
      let t2 = this.mediaTypes_[e14].groups;
      for (let e15 in t2) t2[e15].forEach((e16) => {
        e16.playlistLoader && e16.playlistLoader.dispose();
      });
    }), this.audioSegmentLoader_.dispose(), this.subtitleSegmentLoader_.dispose(), this.sourceUpdater_.dispose(), this.timelineChangeController_.dispose(), this.stopABRTimer_(), this.updateDuration_ && this.mediaSource.removeEventListener(`sourceopen`, this.updateDuration_), this.mediaSource.removeEventListener(`durationchange`, this.handleDurationChange_), this.mediaSource.removeEventListener(`sourceopen`, this.handleSourceOpen_), this.mediaSource.removeEventListener(`sourceended`, this.handleSourceEnded_), this.off();
  }
  main() {
    return this.mainPlaylistLoader_.main;
  }
  media() {
    return this.mainPlaylistLoader_.media() || this.initialMedia_;
  }
  areMediaTypesKnown_() {
    let e14 = !!this.mediaTypes_.AUDIO.activePlaylistLoader, t2 = !!this.mainSegmentLoader_.getCurrentMediaInfo_(), n2 = e14 ? !!this.audioSegmentLoader_.getCurrentMediaInfo_() : true;
    return !(!t2 || !n2);
  }
  getCodecsOrExclude_() {
    let e14 = { main: this.mainSegmentLoader_.getCurrentMediaInfo_() || {}, audio: this.audioSegmentLoader_.getCurrentMediaInfo_() || {} }, t2 = this.mainSegmentLoader_.getPendingSegmentPlaylist() || this.media();
    e14.video = e14.main;
    let n2 = md(this.main(), t2), r2 = {}, i2 = !!this.mediaTypes_.AUDIO.activePlaylistLoader;
    if (e14.main.hasVideo && (r2.video = n2.video || e14.main.videoCodec || `avc1.4d400d`), e14.main.isMuxed && (r2.video += `,${n2.audio || e14.main.audioCodec || `mp4a.40.2`}`), (e14.main.hasAudio && !e14.main.isMuxed || e14.audio.hasAudio || i2) && (r2.audio = n2.audio || e14.main.audioCodec || e14.audio.audioCodec || `mp4a.40.2`, e14.audio.isFmp4 = e14.main.hasAudio && !e14.main.isMuxed ? e14.main.isFmp4 : e14.audio.isFmp4), !r2.audio && !r2.video) {
      this.excludePlaylist({ playlistToExclude: t2, error: { message: `Could not determine codecs for playlist.` }, playlistExclusionDuration: 1 / 0 });
      return;
    }
    let a2 = (e15, t3) => e15 ? ge(t3) : _e(t3), o2 = {}, s2;
    if ([`video`, `audio`].forEach(function(t3) {
      if (r2.hasOwnProperty(t3) && !a2(e14[t3].isFmp4, r2[t3])) {
        let n3 = e14[t3].isFmp4 ? `browser` : `muxer`;
        o2[n3] = o2[n3] || [], o2[n3].push(r2[t3]), t3 === `audio` && (s2 = n3);
      }
    }), i2 && s2 && t2.attributes.AUDIO) {
      let e15 = t2.attributes.AUDIO;
      this.main().playlists.forEach((n3) => {
        (n3.attributes && n3.attributes.AUDIO) === e15 && n3 !== t2 && (n3.excludeUntil = 1 / 0);
      }), this.logger_(`excluding audio group ${e15} as ${s2} does not support codec(s): "${r2.audio}"`);
    }
    if (Object.keys(o2).length) {
      let e15 = Object.keys(o2).reduce((e16, t3) => (e16 && (e16 += `, `), e16 += `${t3} does not support codec(s): "${o2[t3].join(`,`)}"`, e16), ``) + `.`;
      this.excludePlaylist({ playlistToExclude: t2, error: { internal: true, message: e15 }, playlistExclusionDuration: 1 / 0 });
      return;
    }
    if (this.sourceUpdater_.hasCreatedSourceBuffers() && !this.sourceUpdater_.canChangeType()) {
      let e15 = [];
      if ([`video`, `audio`].forEach((t3) => {
        let n3 = (de(this.sourceUpdater_.codecs[t3] || ``)[0] || {}).type, i3 = (de(r2[t3] || ``)[0] || {}).type;
        n3 && i3 && n3.toLowerCase() !== i3.toLowerCase() && e15.push(`"${this.sourceUpdater_.codecs[t3]}" -> "${r2[t3]}"`);
      }), e15.length) {
        this.excludePlaylist({ playlistToExclude: t2, error: { message: `Codec switching not supported: ${e15.join(`, `)}.`, internal: true }, playlistExclusionDuration: 1 / 0 });
        return;
      }
    }
    return r2;
  }
  tryToCreateSourceBuffers_() {
    if (this.mediaSource.readyState !== `open` || this.sourceUpdater_.hasCreatedSourceBuffers() || !this.areMediaTypesKnown_()) return;
    let e14 = this.getCodecsOrExclude_();
    if (!e14) return;
    this.sourceUpdater_.createSourceBuffers(e14);
    let t2 = [e14.video, e14.audio].filter(Boolean).join(`,`);
    this.excludeIncompatibleVariants_(t2);
  }
  excludeUnsupportedVariants_() {
    let e14 = this.main().playlists, t2 = [];
    Object.keys(e14).forEach((n2) => {
      let r2 = e14[n2];
      if (t2.indexOf(r2.id) !== -1) return;
      t2.push(r2.id);
      let i2 = md(this.main, r2), a2 = [];
      i2.audio && !_e(i2.audio) && !ge(i2.audio) && a2.push(`audio codec ${i2.audio}`), i2.video && !_e(i2.video) && !ge(i2.video) && a2.push(`video codec ${i2.video}`), i2.text && i2.text === `stpp.ttml.im1t` && a2.push(`text codec ${i2.text}`), a2.length && (r2.excludeUntil = 1 / 0, this.logger_(`excluding ${r2.id} for unsupported: ${a2.join(`, `)}`));
    });
  }
  excludeIncompatibleVariants_(e14) {
    let t2 = [], n2 = this.main().playlists, r2 = fd(de(e14)), i2 = pd(r2), a2 = r2.video && de(r2.video)[0] || null, o2 = r2.audio && de(r2.audio)[0] || null;
    Object.keys(n2).forEach((e15) => {
      let r3 = n2[e15];
      if (t2.indexOf(r3.id) !== -1 || r3.excludeUntil === 1 / 0) return;
      t2.push(r3.id);
      let s2 = [], c2 = md(this.mainPlaylistLoader_.main, r3), l2 = pd(c2);
      if (!(!c2.audio && !c2.video)) {
        if (l2 !== i2 && s2.push(`codec count "${l2}" !== "${i2}"`), !this.sourceUpdater_.canChangeType()) {
          let e16 = c2.video && de(c2.video)[0] || null, t3 = c2.audio && de(c2.audio)[0] || null;
          e16 && a2 && e16.type.toLowerCase() !== a2.type.toLowerCase() && s2.push(`video codec "${e16.type}" !== "${a2.type}"`), t3 && o2 && t3.type.toLowerCase() !== o2.type.toLowerCase() && s2.push(`audio codec "${t3.type}" !== "${o2.type}"`);
        }
        s2.length && (r3.excludeUntil = 1 / 0, this.logger_(`excluding ${r3.id}: ${s2.join(` && `)}`));
      }
    });
  }
  updateAdCues_(e14) {
    let t2 = 0, n2 = this.seekable();
    n2.length && (t2 = n2.start(0)), Cf(e14, this.cueTagsTrack_, t2);
  }
  goalBufferLength() {
    let e14 = this.tech_.currentTime(), t2 = Tu.GOAL_BUFFER_LENGTH, n2 = Tu.GOAL_BUFFER_LENGTH_RATE, r2 = Math.max(t2, Tu.MAX_GOAL_BUFFER_LENGTH);
    return Math.min(t2 + e14 * n2, r2);
  }
  bufferLowWaterLine() {
    let e14 = this.tech_.currentTime(), t2 = Tu.BUFFER_LOW_WATER_LINE, n2 = Tu.BUFFER_LOW_WATER_LINE_RATE, r2 = Math.max(t2, Tu.MAX_BUFFER_LOW_WATER_LINE), i2 = Math.max(t2, Tu.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE);
    return Math.min(t2 + e14 * n2, this.bufferBasedABR ? i2 : r2);
  }
  bufferHighWaterLine() {
    return Tu.BUFFER_HIGH_WATER_LINE;
  }
  addDateRangesToTextTrack_(e14) {
    Fd(this.inbandTextTracks_, `com.apple.streaming`, this.tech_), Pd({ inbandTextTracks: this.inbandTextTracks_, dateRanges: e14 });
  }
  addMetadataToTextTrack(e14, t2, n2) {
    let r2 = this.sourceUpdater_.videoBuffer ? this.sourceUpdater_.videoTimestampOffset() : this.sourceUpdater_.audioTimestampOffset();
    Fd(this.inbandTextTracks_, e14, this.tech_), jd({ inbandTextTracks: this.inbandTextTracks_, metadataArray: t2, timestampOffset: r2, videoDuration: n2 });
  }
  pathwayAttribute_(e14) {
    return e14.attributes[`PATHWAY-ID`] || e14.attributes.serviceLocation;
  }
  initContentSteeringController_() {
    let e14 = this.main();
    if (e14.contentSteering) {
      for (let t2 of e14.playlists) this.contentSteeringController_.addAvailablePathway(this.pathwayAttribute_(t2));
      if (this.contentSteeringController_.assignTagProperties(e14.uri, e14.contentSteering), this.contentSteeringController_.queryBeforeStart) {
        this.contentSteeringController_.requestSteeringManifest(true);
        return;
      }
      this.tech_.one(`canplay`, () => {
        this.contentSteeringController_.requestSteeringManifest();
      });
    }
  }
  resetContentSteeringController_() {
    this.contentSteeringController_.clearAvailablePathways(), this.contentSteeringController_.dispose(), this.initContentSteeringController_();
  }
  attachContentSteeringListeners_() {
    this.contentSteeringController_.on(`content-steering`, this.excludeThenChangePathway_.bind(this)), this.sourceType_ === `dash` && this.mainPlaylistLoader_.on(`loadedplaylist`, () => {
      let e14 = this.main();
      (this.contentSteeringController_.didDASHTagChange(e14.uri, e14.contentSteering) || (() => {
        let t2 = this.contentSteeringController_.getAvailablePathways(), n2 = [];
        for (let r2 of e14.playlists) {
          let e15 = r2.attributes.serviceLocation;
          if (e15 && (n2.push(e15), !t2.has(e15))) return true;
        }
        return !!(!n2.length && t2.size);
      })()) && this.resetContentSteeringController_();
    });
  }
  excludeThenChangePathway_() {
    let e14 = this.contentSteeringController_.getPathway();
    if (!e14) return;
    this.handlePathwayClones_();
    let t2 = this.main().playlists, n2 = /* @__PURE__ */ new Set(), r2 = false;
    Object.keys(t2).forEach((i2) => {
      let a2 = t2[i2], o2 = this.pathwayAttribute_(a2), s2 = o2 && e14 !== o2;
      a2.excludeUntil === 1 / 0 && a2.lastExcludeReason_ === `content-steering` && !s2 && (delete a2.excludeUntil, delete a2.lastExcludeReason_, r2 = true);
      let c2 = !a2.excludeUntil && a2.excludeUntil !== 1 / 0;
      !n2.has(a2.id) && s2 && c2 && (n2.add(a2.id), a2.excludeUntil = 1 / 0, a2.lastExcludeReason_ = `content-steering`, this.logger_(`excluding ${a2.id} for ${a2.lastExcludeReason_}`));
    }), this.contentSteeringController_.manifestType_ === `DASH` && Object.keys(this.mediaTypes_).forEach((t3) => {
      let n3 = this.mediaTypes_[t3];
      if (n3.activePlaylistLoader) {
        let t4 = n3.activePlaylistLoader.media_;
        t4 && t4.attributes.serviceLocation !== e14 && (r2 = true);
      }
    }), r2 && this.changeSegmentPathway_();
  }
  handlePathwayClones_() {
    let e14 = this.main().playlists, t2 = this.contentSteeringController_.currentPathwayClones, n2 = this.contentSteeringController_.nextPathwayClones;
    if (t2 && t2.size || n2 && n2.size) {
      for (let [e15, r2] of t2.entries()) n2.get(e15) || (this.mainPlaylistLoader_.updateOrDeleteClone(r2), this.contentSteeringController_.excludePathway(e15));
      for (let [r2, i2] of n2.entries()) {
        let n3 = t2.get(r2);
        if (!n3) {
          e14.filter((e15) => e15.attributes[`PATHWAY-ID`] === i2[`BASE-ID`]).forEach((e15) => {
            this.mainPlaylistLoader_.addClonePathway(i2, e15);
          }), this.contentSteeringController_.addAvailablePathway(r2);
          continue;
        }
        this.equalPathwayClones_(n3, i2) || (this.mainPlaylistLoader_.updateOrDeleteClone(i2, true), this.contentSteeringController_.addAvailablePathway(r2));
      }
      this.contentSteeringController_.currentPathwayClones = new Map(JSON.parse(JSON.stringify([...n2])));
    }
  }
  equalPathwayClones_(e14, t2) {
    if (e14[`BASE-ID`] !== t2[`BASE-ID`] || e14.ID !== t2.ID || e14[`URI-REPLACEMENT`].HOST !== t2[`URI-REPLACEMENT`].HOST) return false;
    let n2 = e14[`URI-REPLACEMENT`].PARAMS, r2 = t2[`URI-REPLACEMENT`].PARAMS;
    for (let e15 in n2) if (n2[e15] !== r2[e15]) return false;
    for (let e15 in r2) if (n2[e15] !== r2[e15]) return false;
    return true;
  }
  changeSegmentPathway_() {
    let e14 = this.selectPlaylist();
    this.pauseLoading(), this.contentSteeringController_.manifestType_ === `DASH` && this.switchMediaForDASHContentSteering_(), this.switchMedia_(e14, `content-steering`);
  }
  excludeNonUsablePlaylistsByKeyId_() {
    if (!this.mainPlaylistLoader_ || !this.mainPlaylistLoader_.main) return;
    let e14 = 0, t2 = `non-usable`;
    this.mainPlaylistLoader_.main.playlists.forEach((n2) => {
      let r2 = this.mainPlaylistLoader_.getKeyIdSet(n2);
      !r2 || !r2.size || r2.forEach((r3) => {
        let i2 = `usable`, a2 = this.keyStatusMap_.has(r3) && this.keyStatusMap_.get(r3) === i2, o2 = n2.lastExcludeReason_ === t2 && n2.excludeUntil === 1 / 0;
        a2 ? a2 && o2 && (delete n2.excludeUntil, delete n2.lastExcludeReason_, this.logger_(`enabling playlist ${n2.id} because key ID ${r3} is ${i2}`)) : (n2.excludeUntil !== 1 / 0 && n2.lastExcludeReason_ !== t2 && (n2.excludeUntil = 1 / 0, n2.lastExcludeReason_ = t2, this.logger_(`excluding playlist ${n2.id} because the key ID ${r3} doesn't exist in the keyStatusMap or is not ${i2}`)), e14++);
      });
    }), e14 >= this.mainPlaylistLoader_.main.playlists.length && this.mainPlaylistLoader_.main.playlists.forEach((e15) => {
      let n2 = e15 && e15.attributes && e15.attributes.RESOLUTION && e15.attributes.RESOLUTION.height < 720, r2 = e15.excludeUntil === 1 / 0 && e15.lastExcludeReason_ === t2;
      n2 && r2 && (delete e15.excludeUntil, Z.log.warn(`enabling non-HD playlist ${e15.id} because all playlists were excluded due to ${t2} key IDs`));
    });
  }
  addKeyStatus_(e14, t2) {
    let n2 = (typeof e14 == `string` ? e14 : vf(e14)).slice(0, 32).toLowerCase();
    this.logger_(`KeyStatus '${t2}' with key ID ${n2} added to the keyStatusMap`), this.keyStatusMap_.set(n2, t2);
  }
  updatePlaylistByKeyStatus(e14, t2) {
    this.addKeyStatus_(e14, t2), this.waitingForFastQualityPlaylistReceived_ || this.excludeNonUsableThenChangePlaylist_(), this.mainPlaylistLoader_.off(`loadedplaylist`, this.excludeNonUsableThenChangePlaylist_.bind(this)), this.mainPlaylistLoader_.on(`loadedplaylist`, this.excludeNonUsableThenChangePlaylist_.bind(this));
  }
  excludeNonUsableThenChangePlaylist_() {
    this.excludeNonUsablePlaylistsByKeyId_(), this.fastQualityChange_();
  }
}, np = (e14, t2, n2) => (r2) => {
  let i2 = e14.main.playlists[t2], a2 = fl(i2), o2 = pl(i2);
  return r2 === void 0 ? o2 : (r2 ? delete i2.disabled : i2.disabled = true, r2 !== o2 && !a2 && (n2(i2), r2 ? e14.trigger(`renditionenabled`) : e14.trigger(`renditiondisabled`)), r2);
}, rp = class {
  constructor(e14, t2, n2) {
    let { playlistController_: r2 } = e14, i2 = r2.fastQualityChange_.bind(r2);
    if (t2.attributes) {
      let e15 = t2.attributes.RESOLUTION;
      this.width = e15 && e15.width, this.height = e15 && e15.height, this.bandwidth = t2.attributes.BANDWIDTH, this.frameRate = t2.attributes[`FRAME-RATE`];
    }
    this.codecs = md(r2.main(), t2), this.playlist = t2, this.id = n2, this.enabled = np(e14.playlists, t2.id, i2);
  }
}, ip = function(e14) {
  e14.representations = () => {
    let t2 = e14.playlistController_.main(), n2 = xl(t2) ? e14.playlistController_.getAudioTrackPlaylists_() : t2.playlists;
    return n2 ? n2.filter((e15) => !fl(e15)).map((t3, n3) => new rp(e14, t3, t3.id)) : [];
  };
}, ap = [`seeking`, `seeked`, `pause`, `playing`, `error`], op = class {
  constructor(e14) {
    this.playlistController_ = e14.playlistController, this.tech_ = e14.tech, this.seekable = e14.seekable, this.allowSeeksWithinUnsafeLiveWindow = e14.allowSeeksWithinUnsafeLiveWindow, this.liveRangeSafeTimeDelta = e14.liveRangeSafeTimeDelta, this.media = e14.media, this.consecutiveUpdates = 0, this.lastRecordedTime = null, this.checkCurrentTimeTimeout_ = null, this.logger_ = Ic(`PlaybackWatcher`), this.logger_(`initialize`);
    let t2 = () => this.monitorCurrentTime_(), n2 = () => this.monitorCurrentTime_(), r2 = () => this.techWaiting_(), i2 = () => this.resetTimeUpdate_(), a2 = this.playlistController_, o2 = [`main`, `subtitle`, `audio`], s2 = {};
    o2.forEach((e15) => {
      s2[e15] = { reset: () => this.resetSegmentDownloads_(e15), updateend: () => this.checkSegmentDownloads_(e15) }, a2[`${e15}SegmentLoader_`].on(`appendsdone`, s2[e15].updateend), a2[`${e15}SegmentLoader_`].on(`playlistupdate`, s2[e15].reset), this.tech_.on([`seeked`, `seeking`], s2[e15].reset);
    });
    let c2 = (e15) => {
      [`main`, `audio`].forEach((t3) => {
        a2[`${t3}SegmentLoader_`][e15](`appended`, this.seekingAppendCheck_);
      });
    };
    this.seekingAppendCheck_ = () => {
      this.fixesBadSeeks_() && (this.consecutiveUpdates = 0, this.lastRecordedTime = this.tech_.currentTime(), c2(`off`));
    }, this.clearSeekingAppendCheck_ = () => c2(`off`), this.watchForBadSeeking_ = () => {
      this.clearSeekingAppendCheck_(), c2(`on`);
    }, this.tech_.on(`seeked`, this.clearSeekingAppendCheck_), this.tech_.on(`seeking`, this.watchForBadSeeking_), this.tech_.on(`waiting`, r2), this.tech_.on(ap, i2), this.tech_.on(`canplay`, n2), this.tech_.one(`play`, t2), this.dispose = () => {
      this.clearSeekingAppendCheck_(), this.logger_(`dispose`), this.tech_.off(`waiting`, r2), this.tech_.off(ap, i2), this.tech_.off(`canplay`, n2), this.tech_.off(`play`, t2), this.tech_.off(`seeking`, this.watchForBadSeeking_), this.tech_.off(`seeked`, this.clearSeekingAppendCheck_), o2.forEach((e15) => {
        a2[`${e15}SegmentLoader_`].off(`appendsdone`, s2[e15].updateend), a2[`${e15}SegmentLoader_`].off(`playlistupdate`, s2[e15].reset), this.tech_.off([`seeked`, `seeking`], s2[e15].reset);
      }), this.checkCurrentTimeTimeout_ && h.default.clearTimeout(this.checkCurrentTimeTimeout_), this.resetTimeUpdate_();
    };
  }
  monitorCurrentTime_() {
    this.checkCurrentTime_(), this.checkCurrentTimeTimeout_ && h.default.clearTimeout(this.checkCurrentTimeTimeout_), this.checkCurrentTimeTimeout_ = h.default.setTimeout(this.monitorCurrentTime_.bind(this), 250);
  }
  resetSegmentDownloads_(e14) {
    let t2 = this.playlistController_[`${e14}SegmentLoader_`];
    this[`${e14}StalledDownloads_`] > 0 && this.logger_(`resetting possible stalled download count for ${e14} loader`), this[`${e14}StalledDownloads_`] = 0, this[`${e14}Buffered_`] = t2.buffered_();
  }
  checkSegmentDownloads_(e14) {
    let t2 = this.playlistController_, n2 = t2[`${e14}SegmentLoader_`], r2 = n2.buffered_(), i2 = Yc(this[`${e14}Buffered_`], r2);
    if (this[`${e14}Buffered_`] = r2, i2) {
      this.resetSegmentDownloads_(e14);
      return;
    }
    this[`${e14}StalledDownloads_`]++, this.logger_(`found #${this[`${e14}StalledDownloads_`]} ${e14} appends that did not increase buffer (possible stalled download)`, { playlistId: n2.playlist_ && n2.playlist_.id, buffered: Jc(r2) }), !(this[`${e14}StalledDownloads_`] < 10) && (this.logger_(`${e14} loader stalled download exclusion`), this.resetSegmentDownloads_(e14), this.tech_.trigger({ type: `usage`, name: `vhs-${e14}-download-exclusion` }), e14 !== `subtitle` && t2.excludePlaylist({ error: { message: `Excessive ${e14} segment downloading detected.` }, playlistExclusionDuration: 1 / 0 }));
  }
  checkCurrentTime_() {
    if (this.tech_.paused() || this.tech_.seeking()) return;
    let e14 = this.tech_.currentTime(), t2 = this.tech_.buffered();
    if (this.lastRecordedTime === e14 && (!t2.length || e14 + Bc >= t2.end(t2.length - 1))) return this.techWaiting_();
    this.consecutiveUpdates >= 5 && e14 === this.lastRecordedTime ? (this.consecutiveUpdates++, this.waiting_()) : e14 === this.lastRecordedTime ? this.consecutiveUpdates++ : (this.consecutiveUpdates = 0, this.lastRecordedTime = e14);
  }
  resetTimeUpdate_() {
    this.consecutiveUpdates = 0;
  }
  fixesBadSeeks_() {
    if (!this.tech_.seeking()) return false;
    let e14 = this.seekable(), t2 = this.tech_.currentTime(), n2 = this.afterSeekableWindow_(e14, t2, this.media(), this.allowSeeksWithinUnsafeLiveWindow), r2;
    if (n2 && (r2 = e14.end(e14.length - 1)), this.beforeSeekableWindow_(e14, t2)) {
      let t3 = e14.start(0);
      r2 = t3 + (t3 === e14.end(0) ? 0 : Bc);
    }
    if (r2 !== void 0) return this.logger_(`Trying to seek outside of seekable at time ${t2} with seekable range ${Kc(e14)}. Seeking to ${r2}.`), this.tech_.setCurrentTime(r2), true;
    let i2 = this.playlistController_.sourceUpdater_, a2 = this.tech_.buffered(), o2 = i2.audioBuffer ? i2.audioBuffered() : null, s2 = i2.videoBuffer ? i2.videoBuffered() : null, c2 = this.media(), l2 = c2.partTargetDuration ? c2.partTargetDuration : (c2.targetDuration - zc) * 2, u2 = [o2, s2];
    for (let e15 = 0; e15 < u2.length; e15++) if (u2[e15] && Zc(u2[e15], t2) < l2) return false;
    let d2 = Uc(a2, t2);
    return d2.length === 0 ? false : (r2 = d2.start(0) + Bc, this.logger_(`Buffered region starts (${d2.start(0)})  just beyond seek point (${t2}). Seeking to ${r2}.`), this.tech_.setCurrentTime(r2), true);
  }
  waiting_() {
    if (this.techWaiting_()) return;
    let e14 = this.tech_.currentTime(), t2 = Hc(this.tech_.buffered(), e14);
    if (t2.length && e14 + 3 <= t2.end(0)) {
      this.resetTimeUpdate_(), this.tech_.setCurrentTime(e14), this.logger_(`Stopped at ${e14} while inside a buffered region [${t2.start(0)} -> ${t2.end(0)}]. Attempting to resume playback by seeking to the current time.`), this.tech_.trigger({ type: `usage`, name: `vhs-unknown-waiting` });
      return;
    }
  }
  techWaiting_() {
    let e14 = this.seekable(), t2 = this.tech_.currentTime();
    if (this.tech_.seeking()) return true;
    if (this.beforeSeekableWindow_(e14, t2)) {
      let n3 = e14.end(e14.length - 1);
      return this.logger_(`Fell out of live window at time ${t2}. Seeking to live point (seekable end) ${n3}`), this.resetTimeUpdate_(), this.tech_.setCurrentTime(n3), this.tech_.trigger({ type: `usage`, name: `vhs-live-resync` }), true;
    }
    let n2 = this.tech_.vhs.playlistController_.sourceUpdater_, r2 = this.tech_.buffered();
    if (this.videoUnderflow_({ audioBuffered: n2.audioBuffered(), videoBuffered: n2.videoBuffered(), currentTime: t2 })) return this.resetTimeUpdate_(), this.tech_.setCurrentTime(t2), this.tech_.trigger({ type: `usage`, name: `vhs-video-underflow` }), true;
    let i2 = Uc(r2, t2);
    return i2.length > 0 ? (this.logger_(`Stopped at ${t2} and seeking to ${i2.start(0)}`), this.resetTimeUpdate_(), this.skipTheGap_(t2), true) : false;
  }
  afterSeekableWindow_(e14, t2, n2, r2 = false) {
    if (!e14.length) return false;
    let i2 = e14.end(e14.length - 1) + Bc, a2 = !n2.endList, o2 = typeof n2.partTargetDuration == `number`;
    return a2 && (o2 || r2) && (i2 = e14.end(e14.length - 1) + n2.targetDuration * 3), t2 > i2;
  }
  beforeSeekableWindow_(e14, t2) {
    return !!(e14.length && e14.start(0) > 0 && t2 < e14.start(0) - this.liveRangeSafeTimeDelta);
  }
  videoUnderflow_({ videoBuffered: e14, audioBuffered: t2, currentTime: n2 }) {
    if (!e14) return;
    let r2;
    if (e14.length && t2.length) {
      let i2 = Hc(e14, n2 - 3), a2 = Hc(e14, n2), o2 = Hc(t2, n2);
      o2.length && !a2.length && i2.length && (r2 = { start: i2.end(0), end: o2.end(0) });
    } else Uc(e14, n2).length || (r2 = this.gapFromVideoUnderflow_(e14, n2));
    return r2 ? (this.logger_(`Encountered a gap in video from ${r2.start} to ${r2.end}. Seeking to current time ${n2}`), true) : false;
  }
  skipTheGap_(e14) {
    let t2 = this.tech_.buffered(), n2 = this.tech_.currentTime(), r2 = Uc(t2, n2);
    this.resetTimeUpdate_(), !(r2.length === 0 || n2 !== e14) && (this.logger_(`skipTheGap_:`, `currentTime:`, n2, `scheduled currentTime:`, e14, `nextRange start:`, r2.start(0)), this.tech_.setCurrentTime(r2.start(0) + zc), this.tech_.trigger({ type: `usage`, name: `vhs-gap-skip` }));
  }
  gapFromVideoUnderflow_(e14, t2) {
    let n2 = Wc(e14);
    for (let e15 = 0; e15 < n2.length; e15++) {
      let r2 = n2.start(e15), i2 = n2.end(e15);
      if (t2 - r2 < 4 && t2 - r2 > 2) return { start: r2, end: i2 };
    }
    return null;
  }
}, sp = { errorInterval: 30, getSource(e14) {
  return e14(this.tech({ IWillNotUseThisInPlugins: true }).currentSource_ || this.currentSource());
} }, cp = function(e14, t2) {
  let n2 = 0, r2 = 0, i2 = Q(sp, t2);
  e14.ready(() => {
    e14.trigger({ type: `usage`, name: `vhs-error-reload-initialized` });
  });
  let a2 = function() {
    r2 && e14.currentTime(r2);
  }, o2 = function(t3) {
    t3 != null && (r2 = e14.duration() !== 1 / 0 && e14.currentTime() || 0, e14.one(`loadedmetadata`, a2), e14.src(t3), e14.trigger({ type: `usage`, name: `vhs-error-reload` }), e14.play());
  }, s2 = function() {
    if (Date.now() - n2 < i2.errorInterval * 1e3) {
      e14.trigger({ type: `usage`, name: `vhs-error-reload-canceled` });
      return;
    }
    if (!i2.getSource || typeof i2.getSource != `function`) {
      Z.log.error(`ERROR: reloadSourceOnError - The option getSource must be a function!`);
      return;
    }
    return n2 = Date.now(), i2.getSource.call(e14, o2);
  }, c2 = function() {
    e14.off(`loadedmetadata`, a2), e14.off(`error`, s2), e14.off(`dispose`, c2);
  };
  e14.on(`error`, s2), e14.on(`dispose`, c2), e14.reloadSourceOnError = function(t3) {
    c2(), cp(e14, t3);
  };
}, lp = function(e14) {
  cp(this, e14);
}, up = `3.12.2`, dp = `7.0.3`, fp = `1.3.0`, pp = `7.1.0`, mp = `4.0.1`, $ = { PlaylistLoader: Ul, Playlist: Sl, utils: ru, STANDARD_PLAYLIST_SELECTOR: Sd, INITIAL_PLAYLIST_SELECTOR: Td, lastBandwidthSelector: Sd, movingAverageBandwidthSelector: Cd, comparePlaylistBandwidth: yd, comparePlaylistResolution: bd, xhr: ql() };
Object.keys(Tu).forEach((e14) => {
  Object.defineProperty($, e14, { get() {
    return Z.log.warn(`using Vhs.${e14} is UNSAFE be sure you know what you are doing`), Tu[e14];
  }, set(t2) {
    if (Z.log.warn(`using Vhs.${e14} is UNSAFE be sure you know what you are doing`), typeof t2 != `number` || t2 < 0) {
      Z.log.warn(`value of Vhs.${e14} must be greater than or equal to 0`);
      return;
    }
    Tu[e14] = t2;
  } });
});
var hp = `videojs-vhs`, gp = function(e14, t2) {
  let n2 = t2.media(), r2 = -1;
  for (let t3 = 0; t3 < e14.length; t3++) if (e14[t3].id === n2.id) {
    r2 = t3;
    break;
  }
  e14.selectedIndex_ = r2, e14.trigger({ selectedIndex: r2, type: `change` });
}, _p = function(e14, t2) {
  t2.representations().forEach((t3) => {
    e14.addQualityLevel(t3);
  }), gp(e14, t2.playlists);
};
$.canPlaySource = function() {
  return Z.log.warn(`VHS is no longer a tech. Please remove it from your player's techOrder.`);
};
var vp = (e14, t2, n2) => {
  if (!e14) return e14;
  let r2 = {};
  t2 && t2.attributes && t2.attributes.CODECS && (r2 = fd(de(t2.attributes.CODECS))), n2 && n2.attributes && n2.attributes.CODECS && (r2.audio = n2.attributes.CODECS);
  let i2 = he(r2.video), a2 = he(r2.audio), o2 = {};
  for (let n3 in e14) o2[n3] = {}, a2 && (o2[n3].audioContentType = a2), i2 && (o2[n3].videoContentType = i2), t2.contentProtection && t2.contentProtection[n3] && t2.contentProtection[n3].pssh && (o2[n3].pssh = t2.contentProtection[n3].pssh), typeof e14[n3] == `string` && (o2[n3].url = e14[n3]);
  return Q(e14, o2);
}, yp = (e14, t2) => e14.reduce((e15, n2) => {
  if (!n2.contentProtection) return e15;
  let r2 = t2.reduce((e16, t3) => {
    let r3 = n2.contentProtection[t3];
    return r3 && r3.pssh && (e16[t3] = { pssh: r3.pssh }), e16;
  }, {});
  return Object.keys(r2).length && e15.push(r2), e15;
}, []), bp = ({ player: e14, sourceKeySystems: t2, audioMedia: n2, mainPlaylists: r2 }) => {
  if (!e14.eme.initializeMediaKeys) return Promise.resolve();
  let i2 = yp(n2 ? r2.concat([n2]) : r2, Object.keys(t2)), a2 = [], o2 = [];
  return i2.forEach((t3) => {
    o2.push(new Promise((t4, n3) => {
      e14.tech_.one(`keysessioncreated`, t4);
    })), a2.push(new Promise((n3, r3) => {
      e14.eme.initializeMediaKeys({ keySystems: t3 }, (e15) => {
        if (e15) {
          r3(e15);
          return;
        }
        n3();
      });
    }));
  }), Promise.race([Promise.all(a2), Promise.race(o2)]);
}, xp = ({ player: e14, sourceKeySystems: t2, media: n2, audioMedia: r2 }) => {
  let i2 = vp(t2, n2, r2);
  return i2 ? (e14.currentSource().keySystems = i2, i2 && !e14.eme ? (Z.log.warn(`DRM encrypted source cannot be decrypted without a DRM plugin`), false) : true) : false;
}, Sp = () => {
  if (!h.default.localStorage) return null;
  let e14 = h.default.localStorage.getItem(hp);
  if (!e14) return null;
  try {
    return JSON.parse(e14);
  } catch {
    return null;
  }
}, Cp = (e14) => {
  if (!h.default.localStorage) return false;
  let t2 = Sp();
  t2 = t2 ? Q(t2, e14) : e14;
  try {
    h.default.localStorage.setItem(hp, JSON.stringify(t2));
  } catch {
    return false;
  }
  return t2;
}, wp = (e14) => e14.toLowerCase().indexOf(`data:application/vnd.videojs.vhs+json,`) === 0 ? JSON.parse(e14.substring(e14.indexOf(`,`) + 1)) : e14, Tp = (e14, t2) => {
  e14._requestCallbackSet ||= /* @__PURE__ */ new Set(), e14._requestCallbackSet.add(t2);
}, Ep = (e14, t2) => {
  e14._responseCallbackSet ||= /* @__PURE__ */ new Set(), e14._responseCallbackSet.add(t2);
}, Dp = (e14, t2) => {
  e14._requestCallbackSet && (e14._requestCallbackSet.delete(t2), e14._requestCallbackSet.size || delete e14._requestCallbackSet);
}, Op = (e14, t2) => {
  e14._responseCallbackSet && (e14._responseCallbackSet.delete(t2), e14._responseCallbackSet.size || delete e14._responseCallbackSet);
};
$.supportsNativeHls = (function() {
  if (!g.default || !g.default.createElement) return false;
  let e14 = g.default.createElement(`video`);
  return Z.getTech(`Html5`).isSupported() ? [`application/vnd.apple.mpegurl`, `audio/mpegurl`, `audio/x-mpegurl`, `application/x-mpegurl`, `video/x-mpegurl`, `video/mpegurl`, `application/mpegurl`].some(function(t2) {
    return /maybe|probably/i.test(e14.canPlayType(t2));
  }) : false;
})(), $.supportsNativeDash = (function() {
  return !g.default || !g.default.createElement || !Z.getTech(`Html5`).isSupported() ? false : /maybe|probably/i.test(g.default.createElement(`video`).canPlayType(`application/dash+xml`));
})(), $.supportsTypeNatively = (e14) => e14 === `hls` ? $.supportsNativeHls : e14 === `dash` ? $.supportsNativeDash : false, $.isSupported = function() {
  return Z.log.warn(`VHS is no longer a tech. Please remove it from your player's techOrder.`);
}, $.xhr.onRequest = function(e14) {
  Tp($.xhr, e14);
}, $.xhr.onResponse = function(e14) {
  Ep($.xhr, e14);
}, $.xhr.offRequest = function(e14) {
  Dp($.xhr, e14);
}, $.xhr.offResponse = function(e14) {
  Op($.xhr, e14);
};
var kp = Z.getComponent(`Component`), Ap = class extends kp {
  constructor(e14, t2, n2) {
    if (super(t2, n2.vhs), typeof n2.initialBandwidth == `number` && (this.options_.bandwidth = n2.initialBandwidth), this.logger_ = Ic(`VhsHandler`), t2.options_ && t2.options_.playerId) {
      let e15 = Z.getPlayer(t2.options_.playerId);
      this.player_ = e15;
    }
    if (this.tech_ = t2, this.source_ = e14, this.stats = {}, this.ignoreNextSeekingEvent_ = false, this.setOptions_(), this.options_.overrideNative && t2.overrideNativeAudioTracks && t2.overrideNativeVideoTracks) t2.overrideNativeAudioTracks(true), t2.overrideNativeVideoTracks(true);
    else if (this.options_.overrideNative && (t2.featuresNativeVideoTracks || t2.featuresNativeAudioTracks)) throw Error(`Overriding native VHS requires emulated tracks. See https://git.io/vMpjB`);
    this.on(g.default, [`fullscreenchange`, `webkitfullscreenchange`, `mozfullscreenchange`, `MSFullscreenChange`], (e15) => {
      let t3 = g.default.fullscreenElement || g.default.webkitFullscreenElement || g.default.mozFullScreenElement || g.default.msFullscreenElement;
      t3 && t3.contains(this.tech_.el()) ? this.playlistController_.fastQualityChange_() : this.playlistController_.checkABR_();
    }), this.on(this.tech_, `seeking`, function() {
      if (this.ignoreNextSeekingEvent_) {
        this.ignoreNextSeekingEvent_ = false;
        return;
      }
      this.setCurrentTime(this.tech_.currentTime());
    }), this.on(this.tech_, `error`, function() {
      this.tech_.error() && this.playlistController_ && this.playlistController_.pauseLoading();
    }), this.on(this.tech_, `play`, this.play);
  }
  setOptions_(e14 = {}) {
    if (this.options_ = Q(this.options_, e14), this.options_.withCredentials = this.options_.withCredentials || false, this.options_.limitRenditionByPlayerDimensions = this.options_.limitRenditionByPlayerDimensions !== false, this.options_.useDevicePixelRatio = this.options_.useDevicePixelRatio || false, this.options_.useBandwidthFromLocalStorage = this.source_.useBandwidthFromLocalStorage === void 0 ? this.options_.useBandwidthFromLocalStorage || false : this.source_.useBandwidthFromLocalStorage, this.options_.useForcedSubtitles = this.options_.useForcedSubtitles || false, this.options_.useNetworkInformationApi = this.options_.useNetworkInformationApi || false, this.options_.useDtsForTimestampOffset = this.options_.useDtsForTimestampOffset || false, this.options_.customTagParsers = this.options_.customTagParsers || [], this.options_.customTagMappers = this.options_.customTagMappers || [], this.options_.cacheEncryptionKeys = this.options_.cacheEncryptionKeys || false, this.options_.llhls = this.options_.llhls !== false, this.options_.bufferBasedABR = this.options_.bufferBasedABR || false, typeof this.options_.playlistExclusionDuration != `number` && (this.options_.playlistExclusionDuration = 60), typeof this.options_.bandwidth != `number` && this.options_.useBandwidthFromLocalStorage) {
      let e15 = Sp();
      e15 && e15.bandwidth && (this.options_.bandwidth = e15.bandwidth, this.tech_.trigger({ type: `usage`, name: `vhs-bandwidth-from-local-storage` })), e15 && e15.throughput && (this.options_.throughput = e15.throughput, this.tech_.trigger({ type: `usage`, name: `vhs-throughput-from-local-storage` }));
    }
    typeof this.options_.bandwidth != `number` && (this.options_.bandwidth = Tu.INITIAL_BANDWIDTH), this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && this.options_.bandwidth === Tu.INITIAL_BANDWIDTH, [`withCredentials`, `useDevicePixelRatio`, `customPixelRatio`, `limitRenditionByPlayerDimensions`, `bandwidth`, `customTagParsers`, `customTagMappers`, `cacheEncryptionKeys`, `playlistSelector`, `initialPlaylistSelector`, `bufferBasedABR`, `liveRangeSafeTimeDelta`, `llhls`, `useForcedSubtitles`, `useNetworkInformationApi`, `useDtsForTimestampOffset`, `exactManifestTimings`, `leastPixelDiffSelector`].forEach((e15) => {
      this.source_[e15] !== void 0 && (this.options_[e15] = this.source_[e15]);
    }), this.limitRenditionByPlayerDimensions = this.options_.limitRenditionByPlayerDimensions, this.useDevicePixelRatio = this.options_.useDevicePixelRatio;
    let t2 = this.options_.customPixelRatio;
    typeof t2 == `number` && t2 >= 0 && (this.customPixelRatio = t2);
  }
  setOptions(e14 = {}) {
    this.setOptions_(e14);
  }
  src(e14, t2) {
    if (!e14) return;
    this.setOptions_(), this.options_.src = wp(this.source_.src), this.options_.tech = this.tech_, this.options_.externVhs = $, this.options_.sourceType = j(t2), this.options_.seekTo = (e15) => {
      this.tech_.setCurrentTime(e15);
    }, this.playlistController_ = new tp(this.options_);
    let n2 = Q({ liveRangeSafeTimeDelta: Bc }, this.options_, { seekable: () => this.seekable(), media: () => this.playlistController_.media(), playlistController: this.playlistController_ });
    this.playbackWatcher_ = new op(n2), this.playlistController_.on(`error`, () => {
      let e15 = Z.players[this.tech_.options_.playerId], t3 = this.playlistController_.error;
      typeof t3 == `object` && !t3.code ? t3.code = 3 : typeof t3 == `string` && (t3 = { message: t3, code: 3 }), e15.error(t3);
    });
    let r2 = this.options_.bufferBasedABR ? $.movingAverageBandwidthSelector(0.55) : $.STANDARD_PLAYLIST_SELECTOR;
    this.playlistController_.selectPlaylist = this.selectPlaylist ? this.selectPlaylist.bind(this) : r2.bind(this), this.playlistController_.selectInitialPlaylist = $.INITIAL_PLAYLIST_SELECTOR.bind(this), this.playlists = this.playlistController_.mainPlaylistLoader_, this.mediaSource = this.playlistController_.mediaSource, Object.defineProperties(this, { selectPlaylist: { get() {
      return this.playlistController_.selectPlaylist;
    }, set(e15) {
      this.playlistController_.selectPlaylist = e15.bind(this);
    } }, throughput: { get() {
      return this.playlistController_.mainSegmentLoader_.throughput.rate;
    }, set(e15) {
      this.playlistController_.mainSegmentLoader_.throughput.rate = e15, this.playlistController_.mainSegmentLoader_.throughput.count = 1;
    } }, bandwidth: { get() {
      let e15 = this.playlistController_.mainSegmentLoader_.bandwidth, t3 = h.default.navigator.connection || h.default.navigator.mozConnection || h.default.navigator.webkitConnection, n3 = 1e7;
      if (this.options_.useNetworkInformationApi && t3) {
        let r3 = t3.downlink * 1e3 * 1e3;
        e15 = r3 >= n3 && e15 >= n3 ? Math.max(e15, r3) : r3;
      }
      return e15;
    }, set(e15) {
      this.playlistController_.mainSegmentLoader_.bandwidth = e15, this.playlistController_.mainSegmentLoader_.throughput = { rate: 0, count: 0 };
    } }, systemBandwidth: { get() {
      let e15 = 1 / (this.bandwidth || 1), t3;
      return t3 = this.throughput > 0 ? 1 / this.throughput : 0, Math.floor(1 / (e15 + t3));
    }, set() {
      Z.log.error(`The "systemBandwidth" property is read-only`);
    } } }), this.options_.bandwidth && (this.bandwidth = this.options_.bandwidth), this.options_.throughput && (this.throughput = this.options_.throughput), Object.defineProperties(this.stats, { bandwidth: { get: () => this.bandwidth || 0, enumerable: true }, mediaRequests: { get: () => this.playlistController_.mediaRequests_() || 0, enumerable: true }, mediaRequestsAborted: { get: () => this.playlistController_.mediaRequestsAborted_() || 0, enumerable: true }, mediaRequestsTimedout: { get: () => this.playlistController_.mediaRequestsTimedout_() || 0, enumerable: true }, mediaRequestsErrored: { get: () => this.playlistController_.mediaRequestsErrored_() || 0, enumerable: true }, mediaTransferDuration: { get: () => this.playlistController_.mediaTransferDuration_() || 0, enumerable: true }, mediaBytesTransferred: { get: () => this.playlistController_.mediaBytesTransferred_() || 0, enumerable: true }, mediaSecondsLoaded: { get: () => this.playlistController_.mediaSecondsLoaded_() || 0, enumerable: true }, mediaAppends: { get: () => this.playlistController_.mediaAppends_() || 0, enumerable: true }, mainAppendsToLoadedData: { get: () => this.playlistController_.mainAppendsToLoadedData_() || 0, enumerable: true }, audioAppendsToLoadedData: { get: () => this.playlistController_.audioAppendsToLoadedData_() || 0, enumerable: true }, appendsToLoadedData: { get: () => this.playlistController_.appendsToLoadedData_() || 0, enumerable: true }, timeToLoadedData: { get: () => this.playlistController_.timeToLoadedData_() || 0, enumerable: true }, buffered: { get: () => Jc(this.tech_.buffered()), enumerable: true }, currentTime: { get: () => this.tech_.currentTime(), enumerable: true }, currentSource: { get: () => this.tech_.currentSource_, enumerable: true }, currentTech: { get: () => this.tech_.name_, enumerable: true }, duration: { get: () => this.tech_.duration(), enumerable: true }, main: { get: () => this.playlists.main, enumerable: true }, playerDimensions: { get: () => this.tech_.currentDimensions(), enumerable: true }, seekable: { get: () => Jc(this.tech_.seekable()), enumerable: true }, timestamp: { get: () => Date.now(), enumerable: true }, videoPlaybackQuality: { get: () => this.tech_.getVideoPlaybackQuality(), enumerable: true } }), this.tech_.one(`canplay`, this.playlistController_.setupFirstPlay.bind(this.playlistController_)), this.tech_.on(`bandwidthupdate`, () => {
      this.options_.useBandwidthFromLocalStorage && Cp({ bandwidth: this.bandwidth, throughput: Math.round(this.throughput) });
    }), this.playlistController_.on(`selectedinitialmedia`, () => {
      ip(this);
    }), this.playlistController_.sourceUpdater_.on(`createdsourcebuffers`, () => {
      this.setupEme_();
    }), this.on(this.playlistController_, `progress`, function() {
      this.tech_.trigger(`progress`);
    }), this.on(this.playlistController_, `firstplay`, function() {
      this.ignoreNextSeekingEvent_ = true;
    }), this.setupQualityLevels_(), this.tech_.el() && (this.mediaSourceUrl_ = h.default.URL.createObjectURL(this.playlistController_.mediaSource), this.tech_.src(this.mediaSourceUrl_));
  }
  createKeySessions_() {
    let e14 = this.playlistController_.mediaTypes_.AUDIO.activePlaylistLoader;
    this.logger_(`waiting for EME key session creation`), bp({ player: this.player_, sourceKeySystems: this.source_.keySystems, audioMedia: e14 && e14.media(), mainPlaylists: this.playlists.main.playlists }).then(() => {
      this.logger_(`created EME key session`), this.playlistController_.sourceUpdater_.initializedEme();
    }).catch((e15) => {
      this.logger_(`error while creating EME key session`, e15), this.player_.error({ message: `Failed to initialize media keys for EME`, code: 3, metadata: { errorType: Z.Error.EMEKeySessionCreationError } });
    });
  }
  handleWaitingForKey_() {
    this.logger_(`waitingforkey fired, attempting to create any new key sessions`), this.createKeySessions_();
  }
  setupEme_() {
    let e14 = this.playlistController_.mediaTypes_.AUDIO.activePlaylistLoader, t2 = xp({ player: this.player_, sourceKeySystems: this.source_.keySystems, media: this.playlists.media(), audioMedia: e14 && e14.media() });
    if (this.player_.tech_.on(`keystatuschange`, (e15) => {
      this.playlistController_.updatePlaylistByKeyStatus(e15.keyId, e15.status);
    }), this.handleWaitingForKey_ = this.handleWaitingForKey_.bind(this), this.player_.tech_.on(`waitingforkey`, this.handleWaitingForKey_), !t2) {
      this.playlistController_.sourceUpdater_.initializedEme();
      return;
    }
    this.createKeySessions_();
  }
  setupQualityLevels_() {
    let e14 = Z.players[this.tech_.options_.playerId];
    !e14 || !e14.qualityLevels || this.qualityLevels_ || (this.qualityLevels_ = e14.qualityLevels(), this.playlistController_.on(`selectedinitialmedia`, () => {
      _p(this.qualityLevels_, this);
    }), this.playlists.on(`mediachange`, () => {
      gp(this.qualityLevels_, this.playlists);
    }));
  }
  static version() {
    return { "@videojs/http-streaming": up, "mux.js": dp, "mpd-parser": fp, "m3u8-parser": pp, "aes-decrypter": mp };
  }
  version() {
    return this.constructor.version();
  }
  canChangeType() {
    return gf.canChangeType();
  }
  play() {
    this.playlistController_.play();
  }
  setCurrentTime(e14) {
    this.playlistController_.setCurrentTime(e14);
  }
  duration() {
    return this.playlistController_.duration();
  }
  seekable() {
    return this.playlistController_.seekable();
  }
  dispose() {
    this.playbackWatcher_ && this.playbackWatcher_.dispose(), this.playlistController_ && this.playlistController_.dispose(), this.qualityLevels_ && this.qualityLevels_.dispose(), this.tech_ && this.tech_.vhs && delete this.tech_.vhs, this.mediaSourceUrl_ && h.default.URL.revokeObjectURL && (h.default.URL.revokeObjectURL(this.mediaSourceUrl_), this.mediaSourceUrl_ = null), this.tech_ && this.tech_.off(`waitingforkey`, this.handleWaitingForKey_), super.dispose();
  }
  convertToProgramTime(e14, t2) {
    return du({ playlist: this.playlistController_.media(), time: e14, callback: t2 });
  }
  seekToProgramTime(e14, t2, n2 = true, r2 = 2) {
    return fu({ programTime: e14, playlist: this.playlistController_.media(), retryCount: r2, pauseAfterSeek: n2, seekTo: this.options_.seekTo, tech: this.options_.tech, callback: t2 });
  }
  setupXhrHooks_() {
    this.xhr.onRequest = (e14) => {
      Tp(this.xhr, e14);
    }, this.xhr.onResponse = (e14) => {
      Ep(this.xhr, e14);
    }, this.xhr.offRequest = (e14) => {
      Dp(this.xhr, e14);
    }, this.xhr.offResponse = (e14) => {
      Op(this.xhr, e14);
    }, this.player_.trigger(`xhr-hooks-ready`);
  }
}, jp = { name: `videojs-http-streaming`, VERSION: up, canHandleSource(e14, t2 = {}) {
  let n2 = Q(Z.options, t2);
  return jp.canPlayType(e14.type, n2);
}, handleSource(e14, t2, n2 = {}) {
  return t2.vhs = new Ap(e14, t2, Q(Z.options, n2)), t2.vhs.xhr = ql(), t2.vhs.setupXhrHooks_(), t2.vhs.src(e14.src, e14.type), t2.vhs;
}, canPlayType(e14, t2) {
  let n2 = j(e14);
  if (!n2) return ``;
  let r2 = jp.getOverrideNative(t2);
  return !$.supportsTypeNatively(n2) || r2 ? `maybe` : ``;
}, getOverrideNative(e14 = {}) {
  let { vhs: t2 = {} } = e14, n2 = !(Z.browser.IS_ANY_SAFARI || Z.browser.IS_IOS), { overrideNative: r2 = n2 } = t2;
  return r2;
} };
ge(`avc1.4d400d,mp4a.40.2`) && Z.getTech(`Html5`).registerSourceHandler(jp, 0), Z.VhsHandler = Ap, Z.VhsSourceHandler = jp, Z.Vhs = $, Z.use || Z.registerComponent(`Vhs`, $), Z.options.vhs = Z.options.vhs || {}, (!Z.getPlugin || !Z.getPlugin(`reloadSourceOnError`)) && Z.registerPlugin(`reloadSourceOnError`, lp);
export {
  n as i,
  x as n,
  i as r,
  Z as t
};
