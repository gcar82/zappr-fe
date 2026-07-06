var e = Uint8Array, t = Uint16Array, n = Int32Array, r = new e([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), i = new e([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), a = new e([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), o = function(e2, r2) {
  for (var i2 = new t(31), a2 = 0; a2 < 31; ++a2) i2[a2] = r2 += 1 << e2[a2 - 1];
  for (var o2 = new n(i2[30]), a2 = 1; a2 < 30; ++a2) for (var s2 = i2[a2]; s2 < i2[a2 + 1]; ++s2) o2[s2] = s2 - i2[a2] << 5 | a2;
  return { b: i2, r: o2 };
}, s = o(r, 2), c = s.b, l = s.r;
c[28] = 258, l[258] = 28;
for (var u = o(i, 0), d = u.b, f = u.r, p = new t(32768), m = 0; m < 32768; ++m) {
  var h = (m & 43690) >> 1 | (m & 21845) << 1;
  h = (h & 52428) >> 2 | (h & 13107) << 2, h = (h & 61680) >> 4 | (h & 3855) << 4, p[m] = ((h & 65280) >> 8 | (h & 255) << 8) >> 1;
}
for (var g = (function(e2, n2, r2) {
  for (var i2 = e2.length, a2 = 0, o2 = new t(n2); a2 < i2; ++a2) e2[a2] && ++o2[e2[a2] - 1];
  var s2 = new t(n2);
  for (a2 = 1; a2 < n2; ++a2) s2[a2] = s2[a2 - 1] + o2[a2 - 1] << 1;
  var c2;
  if (r2) {
    c2 = new t(1 << n2);
    var l2 = 15 - n2;
    for (a2 = 0; a2 < i2; ++a2) if (e2[a2]) for (var u2 = a2 << 4 | e2[a2], d2 = n2 - e2[a2], f2 = s2[e2[a2] - 1]++ << d2, m2 = f2 | (1 << d2) - 1; f2 <= m2; ++f2) c2[p[f2] >> l2] = u2;
  } else for (c2 = new t(i2), a2 = 0; a2 < i2; ++a2) e2[a2] && (c2[a2] = p[s2[e2[a2] - 1]++] >> 15 - e2[a2]);
  return c2;
}), _ = new e(288), m = 0; m < 144; ++m) _[m] = 8;
for (var m = 144; m < 256; ++m) _[m] = 9;
for (var m = 256; m < 280; ++m) _[m] = 7;
for (var m = 280; m < 288; ++m) _[m] = 8;
for (var v = new e(32), m = 0; m < 32; ++m) v[m] = 5;
var y = g(_, 9, 0), b = g(_, 9, 1), x = g(v, 5, 0), S = g(v, 5, 1), C = function(e2) {
  for (var t2 = e2[0], n2 = 1; n2 < e2.length; ++n2) e2[n2] > t2 && (t2 = e2[n2]);
  return t2;
}, w = function(e2, t2, n2) {
  var r2 = t2 / 8 | 0;
  return (e2[r2] | e2[r2 + 1] << 8) >> (t2 & 7) & n2;
}, ee = function(e2, t2) {
  var n2 = t2 / 8 | 0;
  return (e2[n2] | e2[n2 + 1] << 8 | e2[n2 + 2] << 16) >> (t2 & 7);
}, te = function(e2) {
  return (e2 + 7) / 8 | 0;
}, T = function(t2, n2, r2) {
  return (n2 == null || n2 < 0) && (n2 = 0), (r2 == null || r2 > t2.length) && (r2 = t2.length), new e(t2.subarray(n2, r2));
}, E = [`unexpected EOF`, `invalid block type`, `invalid length/literal`, `invalid distance`, `stream finished`, `no stream handler`, , `no callback`, `invalid UTF-8 data`, `extra field too long`, `date not in range 1980-2099`, `filename too long`, `stream finishing`, `invalid zip data`], D = function(e2, t2, n2) {
  var r2 = Error(t2 || E[e2]);
  if (r2.code = e2, Error.captureStackTrace && Error.captureStackTrace(r2, D), !n2) throw r2;
  return r2;
}, O = function(t2, n2, o2, s2) {
  var l2 = t2.length, u2 = s2 ? s2.length : 0;
  if (!l2 || n2.f && !n2.l) return o2 || new e(0);
  var f2 = !o2, p2 = f2 || n2.i != 2, m2 = n2.i;
  f2 && (o2 = new e(l2 * 3));
  var h2 = function(t3) {
    var n3 = o2.length;
    if (t3 > n3) {
      var r2 = new e(Math.max(n3 * 2, t3));
      r2.set(o2), o2 = r2;
    }
  }, _2 = n2.f || 0, v2 = n2.p || 0, y2 = n2.b || 0, x2 = n2.l, E2 = n2.d, O2 = n2.m, k2 = n2.n, A2 = l2 * 8;
  do {
    if (!x2) {
      _2 = w(t2, v2, 1);
      var j2 = w(t2, v2 + 1, 3);
      if (v2 += 3, !j2) {
        var M2 = te(v2) + 4, N2 = t2[M2 - 4] | t2[M2 - 3] << 8, P2 = M2 + N2;
        if (P2 > l2) {
          m2 && D(0);
          break;
        }
        p2 && h2(y2 + N2), o2.set(t2.subarray(M2, P2), y2), n2.b = y2 += N2, n2.p = v2 = P2 * 8, n2.f = _2;
        continue;
      } else if (j2 == 1) x2 = b, E2 = S, O2 = 9, k2 = 5;
      else if (j2 == 2) {
        var ne2 = w(t2, v2, 31) + 257, F2 = w(t2, v2 + 10, 15) + 4, I2 = ne2 + w(t2, v2 + 5, 31) + 1;
        v2 += 14;
        for (var L2 = new e(I2), R2 = new e(19), z2 = 0; z2 < F2; ++z2) R2[a[z2]] = w(t2, v2 + z2 * 3, 7);
        v2 += F2 * 3;
        for (var B2 = C(R2), V2 = (1 << B2) - 1, H2 = g(R2, B2, 1), z2 = 0; z2 < I2; ) {
          var U2 = H2[w(t2, v2, V2)];
          v2 += U2 & 15;
          var M2 = U2 >> 4;
          if (M2 < 16) L2[z2++] = M2;
          else {
            var W2 = 0, G2 = 0;
            for (M2 == 16 ? (G2 = 3 + w(t2, v2, 3), v2 += 2, W2 = L2[z2 - 1]) : M2 == 17 ? (G2 = 3 + w(t2, v2, 7), v2 += 3) : M2 == 18 && (G2 = 11 + w(t2, v2, 127), v2 += 7); G2--; ) L2[z2++] = W2;
          }
        }
        var K2 = L2.subarray(0, ne2), q2 = L2.subarray(ne2);
        O2 = C(K2), k2 = C(q2), x2 = g(K2, O2, 1), E2 = g(q2, k2, 1);
      } else D(1);
      if (v2 > A2) {
        m2 && D(0);
        break;
      }
    }
    p2 && h2(y2 + 131072);
    for (var re2 = (1 << O2) - 1, ie2 = (1 << k2) - 1, J2 = v2; ; J2 = v2) {
      var W2 = x2[ee(t2, v2) & re2], Y2 = W2 >> 4;
      if (v2 += W2 & 15, v2 > A2) {
        m2 && D(0);
        break;
      }
      if (W2 || D(2), Y2 < 256) o2[y2++] = Y2;
      else if (Y2 == 256) {
        J2 = v2, x2 = null;
        break;
      } else {
        var X2 = Y2 - 254;
        if (Y2 > 264) {
          var z2 = Y2 - 257, Z2 = r[z2];
          X2 = w(t2, v2, (1 << Z2) - 1) + c[z2], v2 += Z2;
        }
        var Q2 = E2[ee(t2, v2) & ie2], $2 = Q2 >> 4;
        Q2 || D(3), v2 += Q2 & 15;
        var q2 = d[$2];
        if ($2 > 3) {
          var Z2 = i[$2];
          q2 += ee(t2, v2) & (1 << Z2) - 1, v2 += Z2;
        }
        if (v2 > A2) {
          m2 && D(0);
          break;
        }
        p2 && h2(y2 + 131072);
        var ae2 = y2 + X2;
        if (y2 < q2) {
          var oe2 = u2 - q2, se = Math.min(q2, ae2);
          for (oe2 + y2 < 0 && D(3); y2 < se; ++y2) o2[y2] = s2[oe2 + y2];
        }
        for (; y2 < ae2; ++y2) o2[y2] = o2[y2 - q2];
      }
    }
    n2.l = x2, n2.p = J2, n2.b = y2, n2.f = _2, x2 && (_2 = 1, n2.m = O2, n2.d = E2, n2.n = k2);
  } while (!_2);
  return y2 != o2.length && f2 ? T(o2, 0, y2) : o2.subarray(0, y2);
}, k = function(e2, t2, n2) {
  n2 <<= t2 & 7;
  var r2 = t2 / 8 | 0;
  e2[r2] |= n2, e2[r2 + 1] |= n2 >> 8;
}, A = function(e2, t2, n2) {
  n2 <<= t2 & 7;
  var r2 = t2 / 8 | 0;
  e2[r2] |= n2, e2[r2 + 1] |= n2 >> 8, e2[r2 + 2] |= n2 >> 16;
}, j = function(n2, r2) {
  for (var i2 = [], a2 = 0; a2 < n2.length; ++a2) n2[a2] && i2.push({ s: a2, f: n2[a2] });
  var o2 = i2.length, s2 = i2.slice();
  if (!o2) return { t: L, l: 0 };
  if (o2 == 1) {
    var c2 = new e(i2[0].s + 1);
    return c2[i2[0].s] = 1, { t: c2, l: 1 };
  }
  i2.sort(function(e2, t2) {
    return e2.f - t2.f;
  }), i2.push({ s: -1, f: 25001 });
  var l2 = i2[0], u2 = i2[1], d2 = 0, f2 = 1, p2 = 2;
  for (i2[0] = { s: -1, f: l2.f + u2.f, l: l2, r: u2 }; f2 != o2 - 1; ) l2 = i2[i2[d2].f < i2[p2].f ? d2++ : p2++], u2 = i2[d2 != f2 && i2[d2].f < i2[p2].f ? d2++ : p2++], i2[f2++] = { s: -1, f: l2.f + u2.f, l: l2, r: u2 };
  for (var m2 = s2[0].s, a2 = 1; a2 < o2; ++a2) s2[a2].s > m2 && (m2 = s2[a2].s);
  var h2 = new t(m2 + 1), g2 = M(i2[f2 - 1], h2, 0);
  if (g2 > r2) {
    var a2 = 0, _2 = 0, v2 = g2 - r2, y2 = 1 << v2;
    for (s2.sort(function(e2, t2) {
      return h2[t2.s] - h2[e2.s] || e2.f - t2.f;
    }); a2 < o2; ++a2) {
      var b2 = s2[a2].s;
      if (h2[b2] > r2) _2 += y2 - (1 << g2 - h2[b2]), h2[b2] = r2;
      else break;
    }
    for (_2 >>= v2; _2 > 0; ) {
      var x2 = s2[a2].s;
      h2[x2] < r2 ? _2 -= 1 << r2 - h2[x2]++ - 1 : ++a2;
    }
    for (; a2 >= 0 && _2; --a2) {
      var S2 = s2[a2].s;
      h2[S2] == r2 && (--h2[S2], ++_2);
    }
    g2 = r2;
  }
  return { t: new e(h2), l: g2 };
}, M = function(e2, t2, n2) {
  return e2.s == -1 ? Math.max(M(e2.l, t2, n2 + 1), M(e2.r, t2, n2 + 1)) : t2[e2.s] = n2;
}, N = function(e2) {
  for (var n2 = e2.length; n2 && !e2[--n2]; ) ;
  for (var r2 = new t(++n2), i2 = 0, a2 = e2[0], o2 = 1, s2 = function(e3) {
    r2[i2++] = e3;
  }, c2 = 1; c2 <= n2; ++c2) if (e2[c2] == a2 && c2 != n2) ++o2;
  else {
    if (!a2 && o2 > 2) {
      for (; o2 > 138; o2 -= 138) s2(32754);
      o2 > 2 && (s2(o2 > 10 ? o2 - 11 << 5 | 28690 : o2 - 3 << 5 | 12305), o2 = 0);
    } else if (o2 > 3) {
      for (s2(a2), --o2; o2 > 6; o2 -= 6) s2(8304);
      o2 > 2 && (s2(o2 - 3 << 5 | 8208), o2 = 0);
    }
    for (; o2--; ) s2(a2);
    o2 = 1, a2 = e2[c2];
  }
  return { c: r2.subarray(0, i2), n: n2 };
}, P = function(e2, t2) {
  for (var n2 = 0, r2 = 0; r2 < t2.length; ++r2) n2 += e2[r2] * t2[r2];
  return n2;
}, ne = function(e2, t2, n2) {
  var r2 = n2.length, i2 = te(t2 + 2);
  e2[i2] = r2 & 255, e2[i2 + 1] = r2 >> 8, e2[i2 + 2] = e2[i2] ^ 255, e2[i2 + 3] = e2[i2 + 1] ^ 255;
  for (var a2 = 0; a2 < r2; ++a2) e2[i2 + a2 + 4] = n2[a2];
  return (i2 + 4 + r2) * 8;
}, F = function(e2, n2, o2, s2, c2, l2, u2, d2, f2, p2, m2) {
  k(n2, m2++, o2), ++c2[256];
  for (var h2 = j(c2, 15), b2 = h2.t, S2 = h2.l, C2 = j(l2, 15), w2 = C2.t, ee2 = C2.l, te2 = N(b2), T2 = te2.c, E2 = te2.n, D2 = N(w2), O2 = D2.c, M2 = D2.n, F2 = new t(19), I2 = 0; I2 < T2.length; ++I2) ++F2[T2[I2] & 31];
  for (var I2 = 0; I2 < O2.length; ++I2) ++F2[O2[I2] & 31];
  for (var L2 = j(F2, 7), R2 = L2.t, z2 = L2.l, B2 = 19; B2 > 4 && !R2[a[B2 - 1]]; --B2) ;
  var V2 = p2 + 5 << 3, H2 = P(c2, _) + P(l2, v) + u2, U2 = P(c2, b2) + P(l2, w2) + u2 + 14 + 3 * B2 + P(F2, R2) + 2 * F2[16] + 3 * F2[17] + 7 * F2[18];
  if (f2 >= 0 && V2 <= H2 && V2 <= U2) return ne(n2, m2, e2.subarray(f2, f2 + p2));
  var W2, G2, K2, q2;
  if (k(n2, m2, 1 + (U2 < H2)), m2 += 2, U2 < H2) {
    W2 = g(b2, S2, 0), G2 = b2, K2 = g(w2, ee2, 0), q2 = w2;
    var re2 = g(R2, z2, 0);
    k(n2, m2, E2 - 257), k(n2, m2 + 5, M2 - 1), k(n2, m2 + 10, B2 - 4), m2 += 14;
    for (var I2 = 0; I2 < B2; ++I2) k(n2, m2 + 3 * I2, R2[a[I2]]);
    m2 += 3 * B2;
    for (var ie2 = [T2, O2], J2 = 0; J2 < 2; ++J2) for (var Y2 = ie2[J2], I2 = 0; I2 < Y2.length; ++I2) {
      var X2 = Y2[I2] & 31;
      k(n2, m2, re2[X2]), m2 += R2[X2], X2 > 15 && (k(n2, m2, Y2[I2] >> 5 & 127), m2 += Y2[I2] >> 12);
    }
  } else W2 = y, G2 = _, K2 = x, q2 = v;
  for (var I2 = 0; I2 < d2; ++I2) {
    var Z2 = s2[I2];
    if (Z2 > 255) {
      var X2 = Z2 >> 18 & 31;
      A(n2, m2, W2[X2 + 257]), m2 += G2[X2 + 257], X2 > 7 && (k(n2, m2, Z2 >> 23 & 31), m2 += r[X2]);
      var Q2 = Z2 & 31;
      A(n2, m2, K2[Q2]), m2 += q2[Q2], Q2 > 3 && (A(n2, m2, Z2 >> 5 & 8191), m2 += i[Q2]);
    } else A(n2, m2, W2[Z2]), m2 += G2[Z2];
  }
  return A(n2, m2, W2[256]), m2 + G2[256];
}, I = new n([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), L = new e(0), R = function(a2, o2, s2, c2, u2, d2) {
  var p2 = d2.z || a2.length, m2 = new e(c2 + p2 + 5 * (1 + Math.ceil(p2 / 7e3)) + u2), h2 = m2.subarray(c2, m2.length - u2), g2 = d2.l, _2 = (d2.r || 0) & 7;
  if (o2) {
    _2 && (h2[0] = d2.r >> 3);
    for (var v2 = I[o2 - 1], y2 = v2 >> 13, b2 = v2 & 8191, x2 = (1 << s2) - 1, S2 = d2.p || new t(32768), C2 = d2.h || new t(x2 + 1), w2 = Math.ceil(s2 / 3), ee2 = 2 * w2, E2 = function(e2) {
      return (a2[e2] ^ a2[e2 + 1] << w2 ^ a2[e2 + 2] << ee2) & x2;
    }, D2 = new n(25e3), O2 = new t(288), k2 = new t(32), A2 = 0, j2 = 0, M2 = d2.i || 0, N2 = 0, P2 = d2.w || 0, L2 = 0; M2 + 2 < p2; ++M2) {
      var R2 = E2(M2), z2 = M2 & 32767, B2 = C2[R2];
      if (S2[z2] = B2, C2[R2] = z2, P2 <= M2) {
        var V2 = p2 - M2;
        if ((A2 > 7e3 || N2 > 24576) && (V2 > 423 || !g2)) {
          _2 = F(a2, h2, 0, D2, O2, k2, j2, N2, L2, M2 - L2, _2), N2 = A2 = j2 = 0, L2 = M2;
          for (var H2 = 0; H2 < 286; ++H2) O2[H2] = 0;
          for (var H2 = 0; H2 < 30; ++H2) k2[H2] = 0;
        }
        var U2 = 2, W2 = 0, G2 = b2, K2 = z2 - B2 & 32767;
        if (V2 > 2 && R2 == E2(M2 - K2)) for (var q2 = Math.min(y2, V2) - 1, re2 = Math.min(32767, M2), ie2 = Math.min(258, V2); K2 <= re2 && --G2 && z2 != B2; ) {
          if (a2[M2 + U2] == a2[M2 + U2 - K2]) {
            for (var J2 = 0; J2 < ie2 && a2[M2 + J2] == a2[M2 + J2 - K2]; ++J2) ;
            if (J2 > U2) {
              if (U2 = J2, W2 = K2, J2 > q2) break;
              for (var Y2 = Math.min(K2, J2 - 2), X2 = 0, H2 = 0; H2 < Y2; ++H2) {
                var Z2 = M2 - K2 + H2 & 32767, Q2 = Z2 - S2[Z2] & 32767;
                Q2 > X2 && (X2 = Q2, B2 = Z2);
              }
            }
          }
          z2 = B2, B2 = S2[z2], K2 += z2 - B2 & 32767;
        }
        if (W2) {
          D2[N2++] = 268435456 | l[U2] << 18 | f[W2];
          var $2 = l[U2] & 31, ae2 = f[W2] & 31;
          j2 += r[$2] + i[ae2], ++O2[257 + $2], ++k2[ae2], P2 = M2 + U2, ++A2;
        } else D2[N2++] = a2[M2], ++O2[a2[M2]];
      }
    }
    for (M2 = Math.max(M2, P2); M2 < p2; ++M2) D2[N2++] = a2[M2], ++O2[a2[M2]];
    _2 = F(a2, h2, g2, D2, O2, k2, j2, N2, L2, M2 - L2, _2), g2 || (d2.r = _2 & 7 | h2[_2 / 8 | 0] << 3, _2 -= 7, d2.h = C2, d2.p = S2, d2.i = M2, d2.w = P2);
  } else {
    for (var M2 = d2.w || 0; M2 < p2 + g2; M2 += 65535) {
      var oe2 = M2 + 65535;
      oe2 >= p2 && (h2[_2 / 8 | 0] = g2, oe2 = p2), _2 = ne(h2, _2 + 1, a2.subarray(M2, oe2));
    }
    d2.i = p2;
  }
  return T(m2, 0, c2 + te(_2) + u2);
}, z = (function() {
  for (var e2 = new Int32Array(256), t2 = 0; t2 < 256; ++t2) {
    for (var n2 = t2, r2 = 9; --r2; ) n2 = (n2 & 1 && -306674912) ^ n2 >>> 1;
    e2[t2] = n2;
  }
  return e2;
})(), B = function() {
  var e2 = -1;
  return { p: function(t2) {
    for (var n2 = e2, r2 = 0; r2 < t2.length; ++r2) n2 = z[n2 & 255 ^ t2[r2]] ^ n2 >>> 8;
    e2 = n2;
  }, d: function() {
    return ~e2;
  } };
}, V = function(t2, n2, r2, i2, a2) {
  if (!a2 && (a2 = { l: 1 }, n2.dictionary)) {
    var o2 = n2.dictionary.subarray(-32768), s2 = new e(o2.length + t2.length);
    s2.set(o2), s2.set(t2, o2.length), t2 = s2, a2.w = o2.length;
  }
  return R(t2, n2.level == null ? 6 : n2.level, n2.mem == null ? a2.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(t2.length))) * 1.5) : 20 : 12 + n2.mem, r2, i2, a2);
}, H = function(e2, t2, n2) {
  for (; n2; ++t2) e2[t2] = n2, n2 >>>= 8;
}, U = function(e2, t2) {
  var n2 = t2.filename;
  if (e2[0] = 31, e2[1] = 139, e2[2] = 8, e2[8] = t2.level < 2 ? 4 : t2.level == 9 ? 2 : 0, e2[9] = 3, t2.mtime != 0 && H(e2, 4, Math.floor(new Date(t2.mtime || Date.now()) / 1e3)), n2) {
    e2[3] = 8;
    for (var r2 = 0; r2 <= n2.length; ++r2) e2[r2 + 10] = n2.charCodeAt(r2);
  }
}, W = function(e2) {
  (e2[0] != 31 || e2[1] != 139 || e2[2] != 8) && D(6, `invalid gzip data`);
  var t2 = e2[3], n2 = 10;
  t2 & 4 && (n2 += (e2[10] | e2[11] << 8) + 2);
  for (var r2 = (t2 >> 3 & 1) + (t2 >> 4 & 1); r2 > 0; r2 -= !e2[n2++]) ;
  return n2 + (t2 & 2);
}, G = function(e2) {
  var t2 = e2.length;
  return (e2[t2 - 4] | e2[t2 - 3] << 8 | e2[t2 - 2] << 16 | e2[t2 - 1] << 24) >>> 0;
}, K = function(e2) {
  return 10 + (e2.filename ? e2.filename.length + 1 : 0);
}, q = function(e2, t2) {
  return ((e2[0] & 15) != 8 || e2[0] >> 4 > 7 || (e2[0] << 8 | e2[1]) % 31) && D(6, `invalid zlib data`), (e2[1] >> 5 & 1) == +!t2 && D(6, `invalid zlib data: ` + (e2[1] & 32 ? `need` : `unexpected`) + ` dictionary`), (e2[1] >> 3 & 4) + 2;
};
function re(e2, t2) {
  return O(e2, { i: 2 }, t2 && t2.out, t2 && t2.dictionary);
}
function ie(e2, t2) {
  t2 ||= {};
  var n2 = B(), r2 = e2.length;
  n2.p(e2);
  var i2 = V(e2, t2, K(t2), 8), a2 = i2.length;
  return U(i2, t2), H(i2, a2 - 8, n2.d()), H(i2, a2 - 4, r2), i2;
}
function J(t2, n2) {
  var r2 = W(t2);
  return r2 + 8 > t2.length && D(6, `invalid gzip data`), O(t2.subarray(r2, -8), { i: 2 }, n2 && n2.out || new e(G(t2)), n2 && n2.dictionary);
}
function Y(e2, t2) {
  return O(e2.subarray(q(e2, t2 && t2.dictionary), -4), { i: 2 }, t2 && t2.out, t2 && t2.dictionary);
}
function X(e2, t2) {
  return e2[0] == 31 && e2[1] == 139 && e2[2] == 8 ? J(e2, t2) : (e2[0] & 15) != 8 || e2[0] >> 4 > 7 || (e2[0] << 8 | e2[1]) % 31 ? re(e2, t2) : Y(e2, t2);
}
var Z = typeof TextEncoder < `u` && new TextEncoder(), Q = typeof TextDecoder < `u` && new TextDecoder();
try {
  Q.decode(L, { stream: true });
} catch {
}
var $ = function(e2) {
  for (var t2 = ``, n2 = 0; ; ) {
    var r2 = e2[n2++], i2 = (r2 > 127) + (r2 > 223) + (r2 > 239);
    if (n2 + i2 > e2.length) return { s: t2, r: T(e2, n2 - 1) };
    i2 ? i2 == 3 ? (r2 = ((r2 & 15) << 18 | (e2[n2++] & 63) << 12 | (e2[n2++] & 63) << 6 | e2[n2++] & 63) - 65536, t2 += String.fromCharCode(55296 | r2 >> 10, 56320 | r2 & 1023)) : i2 & 1 ? t2 += String.fromCharCode((r2 & 31) << 6 | e2[n2++] & 63) : t2 += String.fromCharCode((r2 & 15) << 12 | (e2[n2++] & 63) << 6 | e2[n2++] & 63) : t2 += String.fromCharCode(r2);
  }
};
function ae(t2, n2) {
  if (n2) {
    for (var r2 = new e(t2.length), i2 = 0; i2 < t2.length; ++i2) r2[i2] = t2.charCodeAt(i2);
    return r2;
  }
  if (Z) return Z.encode(t2);
  for (var a2 = t2.length, o2 = new e(t2.length + (t2.length >> 1)), s2 = 0, c2 = function(e2) {
    o2[s2++] = e2;
  }, i2 = 0; i2 < a2; ++i2) {
    if (s2 + 5 > o2.length) {
      var l2 = new e(s2 + 8 + (a2 - i2 << 1));
      l2.set(o2), o2 = l2;
    }
    var u2 = t2.charCodeAt(i2);
    u2 < 128 || n2 ? c2(u2) : u2 < 2048 ? (c2(192 | u2 >> 6), c2(128 | u2 & 63)) : u2 > 55295 && u2 < 57344 ? (u2 = 65536 + (u2 & 1047552) | t2.charCodeAt(++i2) & 1023, c2(240 | u2 >> 18), c2(128 | u2 >> 12 & 63), c2(128 | u2 >> 6 & 63), c2(128 | u2 & 63)) : (c2(224 | u2 >> 12), c2(128 | u2 >> 6 & 63), c2(128 | u2 & 63));
  }
  return T(o2, 0, s2);
}
function oe(e2, t2) {
  if (t2) {
    for (var n2 = ``, r2 = 0; r2 < e2.length; r2 += 16384) n2 += String.fromCharCode.apply(null, e2.subarray(r2, r2 + 16384));
    return n2;
  } else if (Q) return Q.decode(e2);
  else {
    var i2 = $(e2), a2 = i2.s, n2 = i2.r;
    return n2.length && D(8), a2;
  }
}
export {
  ie as compressSync,
  X as decompressSync,
  ie as gzipSync,
  oe as strFromU8,
  ae as strToU8
};
