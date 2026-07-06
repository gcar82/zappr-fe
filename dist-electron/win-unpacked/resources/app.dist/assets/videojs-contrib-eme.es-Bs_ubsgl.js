import { n as e } from "./rolldown-runtime-Bh1tDfsg.js";
import { i as t, n, r, t as i } from "./video.es-3xQv0M59.js";
var a = e(t()), o = e(r()), s = (e2) => {
  let t2 = new ArrayBuffer(e2.length * 2), n2 = new Uint16Array(t2);
  for (let t3 = 0; t3 < e2.length; t3++) n2[t3] = e2.charCodeAt(t3);
  return n2;
}, c = (e2) => String.fromCharCode.apply(null, new Uint8Array(e2.buffer || e2)), l = (e2) => String.fromCharCode.apply(null, new Uint16Array(e2.buffer || e2)), u = (e2) => {
  let t2 = o.default.createElement(`a`);
  return t2.href = e2, t2.hostname;
}, d = (e2, t2) => {
  if (e2 === t2) return true;
  if (e2.byteLength !== t2.byteLength) return false;
  let n2 = new DataView(e2), r2 = new DataView(t2);
  for (let e3 = 0; e3 < n2.byteLength; e3++) if (n2.getUint8(e3) !== r2.getUint8(e3)) return false;
  return true;
}, f = (e2) => e2 instanceof Uint8Array || e2 instanceof Uint16Array ? e2.buffer : e2, p = (...e2) => {
  let t2 = i.obj || i;
  return (t2.merge || t2.mergeOptions).apply(t2, e2);
}, m = (...e2) => {
  let t2 = p(...e2);
  return Object.keys(t2).forEach((e3) => {
    t2[e3] === null && delete t2[e3];
  }), t2;
}, h = (e2) => {
  let t2 = [];
  return Object.keys(e2).forEach((n2) => {
    let r2 = O(n2, e2[n2])[0];
    t2.push(r2);
  }), t2;
}, g = i.xhr.httpHandler;
g ||= (e2, t2) => (n2, r2, i2) => {
  if (n2) {
    e2(n2);
    return;
  }
  if (r2.statusCode >= 400 && r2.statusCode <= 599) {
    let n3 = i2;
    t2 && (n3 = String.fromCharCode.apply(null, new Uint8Array(i2))), e2({ cause: n3 });
    return;
  }
  e2(null, i2);
};
var ee = (e2) => {
  let t2 = String.fromCharCode.apply(null, new Uint16Array(e2)), n2 = new a.default.DOMParser().parseFromString(t2, `application/xml`), r2 = n2.getElementsByTagName(`HttpHeaders`)[0], i2 = {};
  if (r2) {
    let e3 = r2.getElementsByTagName(`name`), t3 = r2.getElementsByTagName(`value`);
    for (let n3 = 0; n3 < e3.length; n3++) i2[e3[n3].childNodes[0].nodeValue] = t3[n3].childNodes[0].nodeValue;
  }
  let o2 = n2.getElementsByTagName(`Challenge`)[0], s2;
  return o2 && (s2 = a.default.atob(o2.childNodes[0].nodeValue)), n2.querySelector(`parsererror`) && (i2 = { "Content-Type": `text/xml; charset=utf-8`, SOAPAction: `"http://schemas.microsoft.com/DRM/2007/03/protocols/AcquireLicense"` }, s2 = e2), { headers: i2, message: s2 };
}, _ = (e2, t2, n2, r2, a2) => {
  let o2 = ee(n2), s2 = o2.message, c2 = m(o2.headers, r2.emeHeaders, t2.licenseHeaders);
  i.xhr({ uri: t2.url, method: `post`, headers: c2, body: s2, responseType: `arraybuffer`, requestType: `license`, metadata: { keySystem: e2 } }, g(a2, true));
}, v = { EMEFailedToRequestMediaKeySystemAccess: `eme-failed-request-media-key-system-access`, EMEFailedToCreateMediaKeys: `eme-failed-create-media-keys`, EMEFailedToAttachMediaKeysToVideoElement: `eme-failed-attach-media-keys-to-video`, EMEFailedToCreateMediaKeySession: `eme-failed-create-media-key-session`, EMEFailedToSetServerCertificate: `eme-failed-set-server-certificate`, EMEFailedToGenerateLicenseRequest: `eme-failed-generate-license-request`, EMEFailedToUpdateSessionWithReceivedLicenseKeys: `eme-failed-update-session`, EMEFailedToCloseSession: `eme-failed-close-session`, EMEFailedToRemoveKeysFromSession: `eme-failed-remove-keys`, EMEFailedToLoadSessionBySessionId: `eme-failed-load-session` }, y = `com.apple.fps.1_0`, b = ({ initData: e2, id: t2, cert: n2 }) => {
  typeof t2 == `string` && (t2 = s(t2));
  let r2 = 0, i2 = new ArrayBuffer(e2.byteLength + 4 + t2.byteLength + 4 + n2.byteLength), a2 = new DataView(i2);
  new Uint8Array(i2, r2, e2.byteLength).set(e2), r2 += e2.byteLength, a2.setUint32(r2, t2.byteLength, true), r2 += 4;
  let o2 = new Uint16Array(i2, r2, t2.length);
  return o2.set(t2), r2 += o2.byteLength, a2.setUint32(r2, n2.byteLength, true), r2 += 4, new Uint8Array(i2, r2, n2.byteLength).set(n2), new Uint8Array(i2, 0, i2.byteLength);
}, x = ({ video: e2, contentId: t2, initData: n2, cert: r2, options: i2, getLicense: o2, eventBus: s2, emeError: c2 }) => new Promise((l2, u2) => {
  if (!e2.webkitKeys) try {
    e2.webkitSetMediaKeys(new a.default.WebKitMediaKeys(y));
  } catch (e3) {
    c2(e3, { errorType: v.EMEFailedToCreateMediaKeys, keySystem: y }), u2(`Could not create MediaKeys`);
    return;
  }
  let d2;
  try {
    d2 = e2.webkitKeys.createSession(`video/mp4`, b({ id: t2, initData: n2, cert: r2 }));
  } catch (e3) {
    c2(e3, { errorType: v.EMEFailedToCreateMediaKeySession, keySystem: y }), u2(`Could not create key session`);
    return;
  }
  D(s2, { type: `keysessioncreated`, keySession: d2 }), d2.contentId = t2, d2.addEventListener(`webkitkeymessage`, (e3) => {
    D(s2, { type: `keymessage`, messageEvent: e3 }), o2(i2, t2, e3.message, (e4, t3) => {
      if (s2 && D(s2, { type: `licenserequestattempted` }), e4) {
        c2(e4, { errortype: v.EMEFailedToGenerateLicenseRequest, keySystem: y }), u2(e4);
        return;
      }
      d2.update(new Uint8Array(t3)), D(s2, { type: `keysessionupdated`, keySession: d2 });
    });
  }), d2.addEventListener(`webkitkeyadded`, () => {
    l2();
  }), d2.addEventListener(`webkitkeyerror`, () => {
    let e3 = d2.error;
    c2(e3, { errorType: v.EMEFailedToUpdateSessionWithReceivedLicenseKeys, keySystem: y }), u2(`KeySession error: code ${e3.code}, systemCode ${e3.systemCode}`);
  });
}), S = (e2, t2) => (n2, r2) => {
  let a2 = m(n2.emeHeaders, t2.certificateHeaders);
  i.xhr({ uri: t2.certificateUri, responseType: `arraybuffer`, requestType: `license`, metadata: { keySystem: e2 }, headers: a2 }, g((e3, t3) => {
    if (e3) {
      r2(e3);
      return;
    }
    r2(null, new Uint8Array(t3));
  }));
}, C = (e2, t2) => u(t2), w = (e2, t2) => (n2, r2, a2, o2) => {
  let s2 = m({ "Content-type": `application/octet-stream` }, n2.emeHeaders, t2.licenseHeaders);
  i.xhr({ uri: t2.licenseUri || t2.url, method: `POST`, responseType: `arraybuffer`, requestType: `license`, metadata: { keySystem: e2, contentId: r2 }, body: a2, headers: s2 }, g(o2, true));
}, T = ({ video: e2, initData: t2, options: n2, eventBus: r2, emeError: i2 }) => {
  let a2 = n2.keySystems[y], o2 = a2.getCertificate || S(y, a2), s2 = a2.getContentId || C, c2 = a2.getLicense || w(y, a2);
  return new Promise((e3, t3) => {
    o2(n2, (n3, r3) => {
      if (n3) {
        i2(n3, { errorType: v.EMEFailedToSetServerCertificate, keySystem: y }), t3(n3);
        return;
      }
      e3(r3);
    });
  }).then((a3) => x({ video: e2, cert: a3, initData: t2, getLicense: c2, options: n2, contentId: s2(n2, l(t2)), eventBus: r2, emeError: i2 }));
}, E = (e2) => e2.startsWith(`com.apple.fps`), D = (e2, t2) => {
  e2.isDisposed() || e2.trigger(n({}, t2));
}, O = (e2, t2) => {
  if (t2.supportedConfigurations) return t2.supportedConfigurations;
  let r2 = E(e2), i2 = {}, a2 = t2.initDataTypes || (r2 ? [`sinf`] : null), o2 = t2.audioContentType, s2 = t2.audioRobustness, c2 = t2.videoContentType || (r2 ? `video/mp4` : null), l2 = t2.videoRobustness, u2 = t2.persistentState;
  return (o2 || s2) && (i2.audioCapabilities = [n({}, o2 ? { contentType: o2 } : {}, s2 ? { robustness: s2 } : {})]), (c2 || l2) && (i2.videoCapabilities = [n({}, c2 ? { contentType: c2 } : {}, l2 ? { robustness: l2 } : {})]), u2 && (i2.persistentState = u2), a2 && (i2.initDataTypes = a2), [i2];
}, k = (e2) => {
  let t2;
  return Object.keys(e2).forEach((n2) => {
    let r2 = O(n2, e2[n2]);
    t2 = t2 ? t2.catch((e3) => a.default.navigator.requestMediaKeySystemAccess(n2, r2)) : a.default.navigator.requestMediaKeySystemAccess(n2, r2);
  }), t2;
}, A = (e2, t2) => {
  let { mediaKeys: n2, initDataType: r2, initData: a2, options: o2, getLicense: s2, removeSession: c2, eventBus: l2, contentId: u2, emeError: d2, keySystem: f2 } = t2, p2 = 0, m2;
  e2.on(`pause`, () => {
    o2.limitRenewalsMaxPauseDuration && typeof o2.limitRenewalsMaxPauseDuration == `number` && (m2 = setInterval(() => {
      p2++, p2 >= o2.limitRenewalsMaxPauseDuration && clearInterval(m2);
    }, 1e3), e2.on(`play`, () => {
      clearInterval(m2), p2 = 0;
    }));
  });
  try {
    let t3 = n2.createSession(), m3 = () => {
      i.log.debug(`Session expired, closing the session.`), t3.close().then(() => {
        l2.isDisposed() || (D(l2, { type: `keysessionclosed`, keySession: t3 }), c2(a2));
      }).catch((e3) => {
        let t4 = { errorType: v.EMEFailedToCloseSession, keySystem: f2 };
        d2(e3, t4);
      });
    };
    return D(l2, { type: `keysessioncreated`, keySession: t3 }), e2.on(`dispose`, () => {
      m3();
    }), new Promise((n3, c3) => {
      t3.addEventListener(`message`, (r3) => {
        if (D(l2, { type: `keymessage`, messageEvent: r3 }), !(r3.messageType !== `license-request` && r3.messageType !== `license-renewal`)) {
          if (r3.messageType === `license-renewal`) {
            let t4 = o2.limitRenewalsBeforePlay, n4 = o2.limitRenewalsMaxPauseDuration, r4 = typeof n4 == `number`, i2 = !e2.hasStarted() && t4, a3 = e2.paused() && r4 && p2 >= n4, s3 = e2.ended();
            if (i2 || a3 || s3) {
              m3();
              return;
            }
          }
          s2(o2, r3.message, u2).then((e3) => {
            n3(t3.update(e3).then(() => {
              D(l2, { type: `keysessionupdated`, keySession: t3 });
            }).catch((e4) => {
              let t4 = { errorType: v.EMEFailedToUpdateSessionWithReceivedLicenseKeys, keySystem: f2 };
              d2(e4, t4);
            }));
          }).catch((e3) => {
            c3(e3);
          });
        }
      }, false);
      let h2 = `keystatuseschange`;
      t3.addEventListener(h2, (e3) => {
        let n4 = false;
        l2.isDisposed() || (D(l2, { type: h2, keyStatuses: t3.keyStatuses }), t3.keyStatuses.forEach((r3, a3) => {
          switch (D(l2, { keyId: a3, status: r3, target: t3, type: `keystatuschange` }), r3) {
            case `expired`:
              n4 = true;
              break;
            case `internal-error`:
              i.log.warn(`Key status reported as "internal-error." Leaving the session open since we don't have enough details to know if this error is fatal.`, e3);
              break;
          }
        }), n4 && m3());
      }, false), t3.generateRequest(r2, a2).catch((e3) => {
        let t4 = { errorType: v.EMEFailedToGenerateLicenseRequest, keySystem: f2 };
        d2(e3, t4), c3(`Unable to create or initialize key session`);
      });
    });
  } catch (e3) {
    d2(e3, { errorType: v.EMEFailedToCreateMediaKeySession, keySystem: f2 });
  }
}, j = ({ player: e2, video: t2, initDataType: n2, initData: r2, options: i2, getLicense: a2, contentId: o2, removeSession: s2, eventBus: c2, emeError: l2 }) => {
  let u2 = { initDataType: n2, initData: r2, options: i2, getLicense: a2, removeSession: s2, eventBus: c2, contentId: o2, emeError: l2, keySystem: t2.keySystem };
  return t2.mediaKeysObject ? (u2.mediaKeys = t2.mediaKeysObject, A(e2, u2)) : (t2.pendingSessionData.push(u2), Promise.resolve());
}, M = ({ player: e2, video: t2, certificate: n2, createdMediaKeys: r2, emeError: i2 }) => {
  t2.mediaKeysObject = r2;
  let a2 = [];
  n2 && a2.push(r2.setServerCertificate(n2).catch((e3) => {
    i2(e3, { errorType: v.EMEFailedToSetServerCertificate, keySystem: t2.keySystem });
  }));
  for (let n3 = 0; n3 < t2.pendingSessionData.length; n3++) {
    let r3 = t2.pendingSessionData[n3];
    a2.push(A(e2, { mediaKeys: t2.mediaKeysObject, initDataType: r3.initDataType, initData: r3.initData, options: r3.options, getLicense: r3.getLicense, removeSession: r3.removeSession, eventBus: r3.eventBus, contentId: r3.contentId, emeError: r3.emeError, keySystem: t2.keySystem }));
  }
  return t2.pendingSessionData = [], a2.push(t2.setMediaKeys(r2).catch((e3) => {
    i2(e3, { errorType: v.EMEFailedToAttachMediaKeysToVideoElement, keySystem: t2.keySystem });
  })), Promise.all(a2);
}, N = (e2, t2) => (n2, r2, i2) => {
  _(e2, t2, r2, n2, i2);
}, P = (e2, t2) => (n2, r2, a2) => {
  let o2 = m({ "Content-type": `application/octet-stream` }, n2.emeHeaders, t2.licenseHeaders);
  i.xhr({ uri: t2.url, method: `POST`, responseType: `arraybuffer`, requestType: `license`, metadata: { keySystem: e2 }, body: r2, headers: o2 }, g(a2, true));
}, F = (e2, t2, n2) => (r2, i2, a2) => new Promise((o2, s2) => {
  let c2 = function(e3, t3) {
    if (n2 && D(n2, { type: `licenserequestattempted` }), e3) {
      s2(e3);
      return;
    }
    o2(t3);
  };
  E(e2) ? t2(r2, a2, new Uint8Array(i2), c2) : t2(r2, i2, c2);
}), te = (e2, t2) => {
  if (typeof t2 == `string` && (t2 = { url: t2 }), !t2.url && t2.licenseUri && (t2.url = t2.licenseUri), !t2.url && !t2.getLicense) throw Error(`Missing url/licenseUri or getLicense in ${e2} keySystem configuration.`);
  let n2 = E(e2);
  if (n2 && t2.certificateUri && !t2.getCertificate && (t2.getCertificate = S(e2, t2)), n2 && !t2.getCertificate) throw Error(`Missing getCertificate or certificateUri in ${e2} keySystem configuration.`);
  return n2 && !t2.getContentId && (t2.getContentId = C), t2.url && !t2.getLicense && (e2 === `com.microsoft.playready` ? t2.getLicense = N(e2, t2) : n2 ? t2.getLicense = w(e2, t2) : t2.getLicense = P(e2, t2)), t2;
}, ne = ({ player: e2, video: t2, initDataType: n2, initData: r2, keySystemAccess: i2, options: a2, removeSession: o2, eventBus: s2, emeError: l2 }) => {
  let u2 = Promise.resolve(), d2 = i2.keySystem, f2;
  try {
    f2 = te(d2, a2.keySystems[d2]);
  } catch (e3) {
    return Promise.reject(e3);
  }
  let p2 = f2.getContentId ? f2.getContentId(a2, c(r2)) : null;
  if (t2.mediaKeysObject === void 0) {
    t2.mediaKeysObject = null, t2.pendingSessionData = [];
    let n3;
    u2 = new Promise((e3, r3) => {
      if (t2.keySystem = d2, !f2.getCertificate) {
        e3(i2);
        return;
      }
      f2.getCertificate(a2, (t3, i3) => {
        if (t3) {
          r3(t3);
          return;
        }
        n3 = i3, e3();
      });
    }).then(() => i2.createMediaKeys()).then((r3) => (D(s2, { type: `keysystemaccesscomplete`, mediaKeys: r3 }), M({ player: e2, video: t2, certificate: n3, createdMediaKeys: r3, emeError: l2 }))).catch((e3) => (l2(e3, { errorType: v.EMEFailedToCreateMediaKeys, keySystem: d2 }), e3 ? Promise.reject(e3) : Promise.reject(`Failed to create and initialize a MediaKeys object`)));
  }
  return u2.then(() => j({ player: e2, video: t2, initDataType: n2, initData: r2, options: a2, getLicense: t2.keySystem ? F(d2, f2.getLicense, s2) : null, contentId: p2, removeSession: o2, eventBus: s2, emeError: l2 }));
}, I = `com.microsoft.playready`, L = (e2, t2, n2, r2, i2) => {
  let a2 = e2.keySystems[I];
  if (typeof a2.getKey == `function`) {
    a2.getKey(e2, n2.destinationURL, n2.message.buffer, (n3, a3) => {
      if (n3) {
        i2(n3, { errorType: v.EMEFailedToRequestMediaKeySystemAccess, config: h(e2.keySystems) }), D(r2, { message: `Unable to get key: ` + n3, target: t2, type: `mskeyerror` });
        return;
      }
      t2.update(a3), D(r2, { type: `keysessionupdated`, keySession: t2 });
    });
    return;
  }
  typeof a2 == `string` ? a2 = { url: a2 } : typeof a2 == `boolean` && (a2 = {}), a2.url ||= n2.destinationURL;
  let o2 = (e3, n3) => {
    if (r2 && D(r2, { type: `licenserequestattempted` }), e3) {
      i2(e3, { errorType: v.EMEFailedToGenerateLicenseRequest, keySystem: I }), D(r2, { message: `Unable to request key from url: ` + a2.url, target: t2, type: `mskeyerror` });
      return;
    }
    t2.update(new Uint8Array(n3));
  };
  a2.getLicense ? a2.getLicense(e2, n2.message.buffer, o2) : _(I, a2, n2.message.buffer, e2, o2);
}, R = (e2, t2, n2, r2, i2) => {
  let a2 = e2.msKeys.createSession(`video/mp4`, t2);
  if (!a2) {
    let e3 = Error(`Could not create key session.`);
    throw i2(e3, { errorType: v.EMEFailedToCreateMediaKeySession, keySystem: I }), e3;
  }
  D(r2, { type: `keysessioncreated`, keySession: a2 }), a2.addEventListener(`mskeymessage`, (e3) => {
    D(r2, { type: `keymessage`, messageEvent: e3 }), L(n2, a2, e3, r2, i2);
  }), a2.addEventListener(`mskeyerror`, (e3) => {
    let t3 = { errorType: v.EMEFailedToCreateMediaKeySession, keySystem: I };
    i2(a2.error, t3), D(r2, { message: `Unexpected key error from key session with code: ${a2.error.code} and systemCode: ${a2.error.systemCode}`, target: a2, type: `mskeyerror` });
  }), a2.addEventListener(`mskeyadded`, () => {
    D(r2, { target: a2, type: `mskeyadded` });
  });
}, z = (({ video: e2, initData: t2, options: n2, eventBus: r2, emeError: i2 }) => {
  e2.msKeys && delete e2.msKeys;
  try {
    e2.msSetMediaKeys(new a.default.MSMediaKeys(I));
  } catch (e3) {
    throw i2(e3, { errorType: v.EMEFailedToCreateMediaKeys, keySystem: I }), Error(`Unable to create media keys for PlayReady key system. Error: ` + e3.message);
  }
  R(e2, t2, n2, r2, i2);
}), B = [{ initDataTypes: [`cenc`], audioCapabilities: [{ contentType: `audio/mp4;codecs="mp4a.40.2"` }], videoCapabilities: [{ contentType: `video/mp4;codecs="avc1.42E01E"` }] }], V = [{ keySystem: `com.apple.fps`, supportedConfig: [{ initDataTypes: [`sinf`], videoCapabilities: [{ contentType: `video/mp4` }] }] }, { keySystem: `com.microsoft.playready.recommendation`, supportedConfig: B }, { keySystem: `com.widevine.alpha`, supportedConfig: B }, { keySystem: `org.w3.clearkey`, supportedConfig: B }], H = () => {
  let e2 = a.default.Promise, t2 = { fairplay: !!a.default.WebKitMediaKeys, playready: false, widevine: false, clearkey: false };
  return !a.default.MediaKeys || !a.default.navigator.requestMediaKeySystemAccess ? e2.resolve(t2) : e2.all(V.map(({ keySystem: e3, supportedConfig: t3 }) => a.default.navigator.requestMediaKeySystemAccess(e3, t3).catch(() => {
  }))).then(([e3, n2, r2, i2]) => (t2.fairplay = !!e3, t2.playready = !!n2, t2.widevine = !!r2, t2.clearkey = !!i2, t2));
}, U = `5.5.2`, W = (e2, t2) => {
  for (let n2 = 0; n2 < e2.length; n2++) if (e2[n2].initData && d(f(e2[n2].initData), f(t2))) return true;
  return false;
}, G = (e2, t2) => {
  for (let n2 = 0; n2 < e2.length; n2++) if (e2[n2].initData === t2) {
    e2.splice(n2, 1);
    return;
  }
};
function K(e2, t2, n2, r2, o2, s2) {
  if (!n2 || !n2.keySystems) return Promise.resolve();
  if (n2.keySystems[y] && a.default.WebKitMediaKeys && e2.eme.legacyFairplayIsUsed) return i.log.debug(`eme`, `Ignoring 'encrypted' event, using legacy fairplay keySystem ${y}`), Promise.resolve();
  let c2 = t2.initData;
  return k(n2.keySystems).then((i2) => {
    let a2 = i2.keySystem;
    return n2.keySystems[a2] && n2.keySystems[a2].pssh && (c2 = n2.keySystems[a2].pssh), W(r2, c2) || !c2 ? Promise.resolve() : (r2.push({ initData: c2 }), ne({ player: e2, video: t2.target, initDataType: t2.initDataType, initData: c2, keySystemAccess: i2, options: n2, removeSession: G.bind(null, r2), eventBus: o2, emeError: s2 }));
  }).catch((e3) => {
    s2(e3, { errorType: v.EMEFailedToRequestMediaKeySystemAccess, config: h(n2.keySystems) });
  });
}
var q = (e2, t2, n2, r2) => !t2.keySystems || !t2.keySystems[y] || !e2.initData ? Promise.resolve() : T({ video: e2.target, initData: e2.initData, options: t2, eventBus: n2, emeError: r2 }), J = (e2, t2, n2, r2, i2) => {
  if (!t2.keySystems || !t2.keySystems[I] || n2.reduce((e3, t3) => e3 || t3.playready, false)) return;
  let a2 = e2.initData;
  t2.keySystems[I] && t2.keySystems[I].pssh && (a2 = t2.keySystems[I].pssh), a2 && (n2.push({ playready: true, initData: a2 }), z({ video: e2.target, initData: a2, options: t2, eventBus: r2, emeError: i2 }));
}, Y = (e2) => p(e2.currentSource(), e2.eme.options), X = (e2) => {
  let t2 = e2.src();
  t2 !== e2.eme.activeSrc && (e2.eme.activeSrc = t2, e2.eme.sessions = []);
}, Z = (e2) => (t2, n2) => {
  let r2 = { code: 5 };
  typeof t2 == `string` ? r2.message = t2 : t2 && (t2.message && (r2.message = t2.message), t2.cause && (t2.cause.length || t2.cause.byteLength) && (r2.cause = t2.cause), t2.keySystem && (r2.keySystem = t2.keySystem), r2.originalError = t2), n2 && (r2.metadata = n2), e2.error(r2);
}, Q = (e2, t2) => {
  if (e2.$(`.vjs-tech`).tagName.toLowerCase() === `video`) {
    if (X(e2), a.default.MediaKeys) {
      let n2 = () => {
        let n3 = { initDataType: `cenc`, initData: null, target: e2.tech_.el_ };
        X(e2), K(e2, n3, Y(e2), e2.eme.sessions, e2.tech_, t2);
      };
      if (i.browser.IS_FIREFOX) {
        let t3;
        e2.on(`ended`, () => {
          t3 = false, e2.one([`seek`, `play`], (r2) => {
            !t3 && e2.eme.sessions.length === 0 && (n2(), t3 = true);
          });
        }), e2.on(`play`, () => {
          let r2 = e2.eme.options.limitRenewalsMaxPauseDuration;
          e2.eme.sessions.length === 0 && typeof r2 == `number` && (t3 = true, n2());
        });
      }
      e2.tech_.el_.addEventListener(`encrypted`, (n3) => {
        i.log.debug(`eme`, `Received an 'encrypted' event`), X(e2), K(e2, n3, Y(e2), e2.eme.sessions, e2.tech_, t2);
      });
    } else if (a.default.WebKitMediaKeys) e2.eme.initLegacyFairplay();
    else if (a.default.MSMediaKeys) {
      e2.tech_.el_.addEventListener(`msneedkey`, (n3) => {
        i.log.debug(`eme`, `Received an 'msneedkey' event`), X(e2);
        try {
          J(n3, Y(e2), e2.eme.sessions, e2.tech_, t2);
        } catch (e3) {
          t2(e3);
        }
      });
      let n2 = (e3) => {
        t2(e3);
      };
      e2.tech_.on(`mskeyerror`, n2), e2.on(`dispose`, () => {
        e2.tech_.off(`mskeyerror`, n2);
      });
    }
  }
}, $ = function(e2 = {}) {
  let t2 = this, n2 = Z(t2);
  t2.ready(() => Q(t2, n2)), t2.eme = { setupEmeListeners() {
    Q(t2, n2);
  }, initializeMediaKeys(r2 = {}, i2 = function() {
  }, o2 = false) {
    let s2 = p(t2.currentSource(), e2, r2), c2 = { initDataType: `cenc`, initData: null, target: t2.tech_.el_ };
    if (X(t2), a.default.MediaKeys) K(t2, c2, s2, t2.eme.sessions, t2.tech_, n2).then(() => i2()).catch((e3) => {
      i2(e3), o2 || n2(e3);
    });
    else if (a.default.MSMediaKeys) {
      let e3 = (r3) => {
        t2.tech_.off(`mskeyadded`, e3), t2.tech_.off(`mskeyerror`, e3), r3.type === `mskeyerror` ? (i2(r3.target.error), o2 || n2(r3.message)) : i2();
      };
      t2.tech_.one(`mskeyadded`, e3), t2.tech_.one(`mskeyerror`, e3);
      try {
        J(c2, s2, t2.eme.sessions, t2.tech_, n2);
      } catch (r3) {
        t2.tech_.off(`mskeyadded`, e3), t2.tech_.off(`mskeyerror`, e3), i2(r3), o2 || n2(r3);
      }
    }
  }, initLegacyFairplay() {
    let e3 = (e4) => {
      i.log.debug(`eme`, `Received a 'webkitneedkey' event`), X(t2), q(e4, Y(t2), t2.tech_, n2).catch((e5) => {
        n2(e5);
      });
    }, r2 = (n3) => {
      let r3 = Y(t2).firstWebkitneedkeyTimeout || 1e3, i2 = t2.src();
      t2.eme.webkitneedkey_ = t2.eme.webkitneedkey_ || {}, t2.eme.webkitneedkey_.src !== i2 && (t2.eme.webkitneedkey_ = { handledFirstEvent: false, src: i2 }), t2.eme.webkitneedkey_.handledFirstEvent ? e3(n3) : (t2.clearTimeout(t2.eme.webkitneedkey_.timeout), t2.eme.webkitneedkey_.timeout = t2.setTimeout(() => {
        t2.eme.webkitneedkey_.handledFirstEvent = true, t2.eme.webkitneedkey_.timeout = null, e3(n3);
      }, r3));
    };
    t2.eme.legacyFairplayIsUsed = true;
    let a2 = t2.tech_.el_;
    a2.addEventListener(`webkitneedkey`, r2);
    let o2 = () => {
      t2.off(`dispose`, o2), a2 !== null && a2.removeEventListener(`webkitneedkey`, r2), t2.eme.legacyFairplayIsUsed = false, a2 = null;
    };
    return t2.on(`dispose`, o2), o2;
  }, detectSupportedCDMs: H, legacyFairplayIsUsed: false, options: e2 };
};
i.registerPlugin(`eme`, $), $.Error = v, $.VERSION = U;
export {
  $ as default,
  Z as emeErrorHandler,
  Y as getOptions,
  K as handleEncryptedEvent,
  J as handleMsNeedKeyEvent,
  q as handleWebKitNeedKeyEvent,
  W as hasSession,
  G as removeSession,
  X as setupSessions
};
