import { t as e } from "./rolldown-runtime-Bh1tDfsg.js";
var t = e(((e2, t2) => {
  var n2 = e2.ValidationError = function(e3, t3, n3, r3, i3, a3) {
    if (Array.isArray(r3) ? (this.path = r3, this.property = r3.reduce(function(e4, t4) {
      return e4 + l(t4);
    }, `instance`)) : r3 !== void 0 && (this.property = r3), e3 && (this.message = e3), n3) {
      var o2 = n3.$id || n3.id;
      this.schema = o2 || n3;
    }
    t3 !== void 0 && (this.instance = t3), this.name = i3, this.argument = a3, this.stack = this.toString();
  };
  n2.prototype.toString = function() {
    return this.property + ` ` + this.message;
  };
  var r2 = e2.ValidatorResult = function(e3, t3, n3, r3) {
    this.instance = e3, this.schema = t3, this.options = n3, this.path = r3.path, this.propertyPath = r3.propertyPath, this.errors = [], this.throwError = n3 && n3.throwError, this.throwFirst = n3 && n3.throwFirst, this.throwAll = n3 && n3.throwAll, this.disableFormat = n3 && n3.disableFormat === true;
  };
  r2.prototype.addError = function(e3) {
    var t3;
    if (typeof e3 == `string`) t3 = new n2(e3, this.instance, this.schema, this.path);
    else {
      if (!e3) throw Error(`Missing error detail`);
      if (!e3.message) throw Error(`Missing error message`);
      if (!e3.name) throw Error(`Missing validator type`);
      t3 = new n2(e3.message, this.instance, this.schema, this.path, e3.name, e3.argument);
    }
    if (this.errors.push(t3), this.throwFirst) throw new a2(this);
    if (this.throwError) throw t3;
    return t3;
  }, r2.prototype.importErrors = function(e3) {
    typeof e3 == `string` || e3 && e3.validatorType ? this.addError(e3) : e3 && e3.errors && (this.errors = this.errors.concat(e3.errors));
  };
  function i2(e3, t3) {
    return t3 + `: ` + e3.toString() + `
`;
  }
  r2.prototype.toString = function(e3) {
    return this.errors.map(i2).join(``);
  }, Object.defineProperty(r2.prototype, "valid", { get: function() {
    return !this.errors.length;
  } }), t2.exports.ValidatorResultError = a2;
  function a2(e3) {
    typeof Error.captureStackTrace == `function` && Error.captureStackTrace(this, a2), this.instance = e3.instance, this.schema = e3.schema, this.options = e3.options, this.errors = e3.errors;
  }
  a2.prototype = Error(), a2.prototype.constructor = a2, a2.prototype.name = `Validation Error`;
  var o = e2.SchemaError = function e3(t3, n3) {
    this.message = t3, this.schema = n3, Error.call(this, t3), typeof Error.captureStackTrace == `function` && Error.captureStackTrace(this, e3);
  };
  o.prototype = Object.create(Error.prototype, { constructor: { value: o, enumerable: false }, name: { value: `SchemaError`, enumerable: false } });
  var s = e2.SchemaContext = function(e3, t3, n3, r3, i3) {
    this.schema = e3, this.options = t3, Array.isArray(n3) ? (this.path = n3, this.propertyPath = n3.reduce(function(e4, t4) {
      return e4 + l(t4);
    }, `instance`)) : this.propertyPath = n3, this.base = r3, this.schemas = i3;
  };
  s.prototype.resolve = function(e3) {
    return h(this.base, e3);
  }, s.prototype.makeChild = function(e3, t3) {
    var n3 = t3 === void 0 ? this.path : this.path.concat([t3]), r3 = e3.$id || e3.id;
    let i3 = h(this.base, r3 || ``);
    var a3 = new s(e3, this.options, n3, i3, Object.create(this.schemas));
    return r3 && !a3.schemas[i3] && (a3.schemas[i3] = e3), a3;
  };
  var c = e2.FORMAT_REGEXPS = { "date-time": /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])[tT ](2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])(\.\d+)?([zZ]|[+-]([0-5][0-9]):(60|[0-5][0-9]))$/, date: /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])$/, time: /^(2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])$/, duration: /P(T\d+(H(\d+M(\d+S)?)?|M(\d+S)?|S)|\d+(D|M(\d+D)?|Y(\d+M(\d+D)?)?)(T\d+(H(\d+M(\d+S)?)?|M(\d+S)?|S))?|\d+W)/i, email: /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/, "idn-email": /^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u, "ip-address": /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/, ipv6: /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/, uri: /^[a-zA-Z][a-zA-Z0-9+.-]*:[^\s]*$/, "uri-reference": /^(((([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|([A-Za-z][+\-.0-9A-Za-z]*:?)?)|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?))#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(([A-Za-z][+\-.0-9A-Za-z]*)?%[0-9A-Fa-f]{2}|[!$&-.0-9;=@_~]|[A-Za-z][+\-.0-9A-Za-z]*[!$&-*,;=@_~])(%[0-9A-Fa-f]{2}|[!$&-.0-9;=@-Z_a-z~])*((([/?](%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?#|[/?])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?|([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)?|[A-Za-z][+\-.0-9A-Za-z]*:?)?$/, iri: /^[a-zA-Z][a-zA-Z0-9+.-]*:[^\s]*$/, "iri-reference": /^(((([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~-\u{10FFFF}]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|([A-Za-z][+\-.0-9A-Za-z]*:?)?)|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|(\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?))#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|(([A-Za-z][+\-.0-9A-Za-z]*)?%[0-9A-Fa-f]{2}|[!$&-.0-9;=@_~-\u{10FFFF}]|[A-Za-z][+\-.0-9A-Za-z]*[!$&-*,;=@_~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-.0-9;=@-Z_a-z~-\u{10FFFF}])*((([/?](%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*)?#|[/?])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*)?|([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~-\u{10FFFF}]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)?|[A-Za-z][+\-.0-9A-Za-z]*:?)?$/u, uuid: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i, "uri-template": /(%[0-9a-f]{2}|[!#$&(-;=?@\[\]_a-z~]|\{[!#&+,./;=?@|]?(%[0-9a-f]{2}|[0-9_a-z])(\.?(%[0-9a-f]{2}|[0-9_a-z]))*(:[1-9]\d{0,3}|\*)?(,(%[0-9a-f]{2}|[0-9_a-z])(\.?(%[0-9a-f]{2}|[0-9_a-z]))*(:[1-9]\d{0,3}|\*)?)*\})*/iu, "json-pointer": /^(\/([\x00-\x2e0-@\[-}\x7f]|~[01])*)*$/iu, "relative-json-pointer": /^\d+(#|(\/([\x00-\x2e0-@\[-}\x7f]|~[01])*)*)$/iu, hostname: /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/, "host-name": /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/, "utc-millisec": function(e3) {
    return typeof e3 == `string` && parseFloat(e3) === parseInt(e3, 10) && !isNaN(e3);
  }, regex: function(e3) {
    var t3 = true;
    try {
      new RegExp(e3);
    } catch {
      t3 = false;
    }
    return t3;
  }, style: /[\r\n\t ]*[^\r\n\t ][^:]*:[\r\n\t ]*[^\r\n\t ;]*[\r\n\t ]*;?/, color: /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/, phone: /^\+(?:[0-9] ?){6,14}[0-9]$/, alpha: /^[a-zA-Z]+$/, alphanumeric: /^[a-zA-Z0-9]+$/ };
  c.regexp = c.regex, c.pattern = c.regex, c.ipv4 = c[`ip-address`], e2.isFormat = function(e3, t3, n3) {
    if (typeof e3 == `string` && c[t3] !== void 0) {
      if (c[t3] instanceof RegExp) return c[t3].test(e3);
      if (typeof c[t3] == `function`) return c[t3](e3);
    } else if (n3 && n3.customFormats && typeof n3.customFormats[t3] == `function`) return n3.customFormats[t3](e3);
    return true;
  };
  var l = e2.makeSuffix = function(e3) {
    return e3 = e3.toString(), !e3.match(/[.\s\[\]]/) && !e3.match(/^[\d]/) ? `.` + e3 : e3.match(/^\d+$/) ? `[` + e3 + `]` : `[` + JSON.stringify(e3) + `]`;
  };
  e2.deepCompareStrict = function e3(t3, n3) {
    if (typeof t3 != typeof n3) return false;
    if (Array.isArray(t3)) return !Array.isArray(n3) || t3.length !== n3.length ? false : t3.every(function(r4, i4) {
      return e3(t3[i4], n3[i4]);
    });
    if (typeof t3 == `object`) {
      if (!t3 || !n3) return t3 === n3;
      var r3 = Object.keys(t3), i3 = Object.keys(n3);
      return r3.length === i3.length ? r3.every(function(r4) {
        return e3(t3[r4], n3[r4]);
      }) : false;
    }
    return t3 === n3;
  };
  function u(e3, t3, n3, r3) {
    typeof n3 == `object` ? t3[r3] = p(e3[r3], n3) : e3.indexOf(n3) === -1 && t3.push(n3);
  }
  function d(e3, t3, n3) {
    t3[n3] = e3[n3];
  }
  function f(e3, t3, n3, r3) {
    typeof t3[r3] != `object` || !t3[r3] ? n3[r3] = t3[r3] : e3[r3] ? n3[r3] = p(e3[r3], t3[r3]) : n3[r3] = t3[r3];
  }
  function p(e3, t3) {
    var n3 = Array.isArray(t3), r3 = n3 && [] || {};
    return n3 ? (e3 ||= [], r3 = r3.concat(e3), t3.forEach(u.bind(null, e3, r3))) : (e3 && typeof e3 == `object` && Object.keys(e3).forEach(d.bind(null, e3, r3)), Object.keys(t3).forEach(f.bind(null, e3, t3, r3))), r3;
  }
  t2.exports.deepMerge = p, e2.objectGetPath = function(e3, t3) {
    for (var n3 = t3.split(`/`).slice(1), r3; typeof (r3 = n3.shift()) == `string`; ) {
      var i3 = decodeURIComponent(r3.replace(/~0/, `~`).replace(/~1/g, `/`));
      if (!(i3 in e3)) return;
      e3 = e3[i3];
    }
    return e3;
  };
  function m(e3) {
    return `/` + encodeURIComponent(e3).replace(/~/g, `%7E`);
  }
  e2.encodePath = function(e3) {
    return e3.map(m).join(``);
  }, e2.getDecimalPlaces = function(e3) {
    var t3 = 0;
    if (isNaN(e3)) return t3;
    typeof e3 != `number` && (e3 = Number(e3));
    var n3 = e3.toString().split(`e`);
    if (n3.length === 2) {
      if (n3[1][0] !== `-`) return t3;
      t3 = Number(n3[1].slice(1));
    }
    var r3 = n3[0].split(`.`);
    return r3.length === 2 && (t3 += r3[1].length), t3;
  }, e2.isSchema = function(e3) {
    return typeof e3 == `object` && e3 || typeof e3 == `boolean`;
  };
  var h = e2.resolveUrl = function(e3, t3) {
    let n3 = new URL(t3, new URL(e3, `resolve://`));
    if (n3.protocol === `resolve:`) {
      let { pathname: e4, search: t4, hash: r3 } = n3;
      return e4 + t4 + r3;
    }
    return n3.toString();
  };
})), n = e(((e2, n2) => {
  var r2 = t(), i2 = r2.ValidatorResult, a2 = r2.SchemaError, o = {};
  o.ignoreProperties = { id: true, default: true, description: true, title: true, additionalItems: true, then: true, else: true, $schema: true, $ref: true, extends: true };
  var s = o.validators = {};
  s.type = function(e3, t2, n3, r3) {
    if (e3 === void 0) return null;
    var a3 = new i2(e3, t2, n3, r3), o2 = Array.isArray(t2.type) ? t2.type : [t2.type];
    if (!o2.some(this.testType.bind(this, e3, t2, n3, r3))) {
      var s2 = o2.map(function(e4) {
        if (e4) {
          var t3 = e4.$id || e4.id;
          return t3 ? `<` + t3 + `>` : e4 + ``;
        }
      });
      a3.addError({ name: `type`, argument: s2, message: `is not of a type(s) ` + s2 });
    }
    return a3;
  };
  function c(e3, t2, n3, r3, i3) {
    var a3 = t2.throwError, o2 = t2.throwAll;
    t2.throwError = false, t2.throwAll = false;
    var s2 = this.validateSchema(e3, i3, t2, n3);
    return t2.throwError = a3, t2.throwAll = o2, !s2.valid && r3 instanceof Function && r3(s2), s2.valid;
  }
  s.anyOf = function(e3, t2, n3, r3) {
    if (e3 === void 0) return null;
    var o2 = new i2(e3, t2, n3, r3), s2 = new i2(e3, t2, n3, r3);
    if (!Array.isArray(t2.anyOf)) throw new a2(`anyOf must be an array`);
    if (!t2.anyOf.some(c.bind(this, e3, n3, r3, function(e4) {
      s2.importErrors(e4);
    }))) {
      var l2 = t2.anyOf.map(function(e4, t3) {
        var n4 = e4.$id || e4.id;
        return n4 ? `<` + n4 + `>` : e4.title && JSON.stringify(e4.title) || e4.$ref && `<` + e4.$ref + `>` || `[subschema ` + t3 + `]`;
      });
      n3.nestedErrors && o2.importErrors(s2), o2.addError({ name: `anyOf`, argument: l2, message: `is not any of ` + l2.join(`,`) });
    }
    return o2;
  }, s.allOf = function(e3, t2, n3, r3) {
    if (e3 === void 0) return null;
    if (!Array.isArray(t2.allOf)) throw new a2(`allOf must be an array`);
    var o2 = new i2(e3, t2, n3, r3), s2 = this;
    return t2.allOf.forEach(function(t3, i3) {
      var a3 = s2.validateSchema(e3, t3, n3, r3);
      if (!a3.valid) {
        var c2 = t3.$id || t3.id || t3.title && JSON.stringify(t3.title) || t3.$ref && `<` + t3.$ref + `>` || `[subschema ` + i3 + `]`;
        o2.addError({ name: `allOf`, argument: { id: c2, length: a3.errors.length, valid: a3 }, message: `does not match allOf schema ` + c2 + ` with ` + a3.errors.length + ` error[s]:` }), o2.importErrors(a3);
      }
    }), o2;
  }, s.oneOf = function(e3, t2, n3, r3) {
    if (e3 === void 0) return null;
    if (!Array.isArray(t2.oneOf)) throw new a2(`oneOf must be an array`);
    var o2 = new i2(e3, t2, n3, r3), s2 = new i2(e3, t2, n3, r3), l2 = t2.oneOf.filter(c.bind(this, e3, n3, r3, function(e4) {
      s2.importErrors(e4);
    })).length, u2 = t2.oneOf.map(function(e4, t3) {
      return e4.$id || e4.id || e4.title && JSON.stringify(e4.title) || e4.$ref && `<` + e4.$ref + `>` || `[subschema ` + t3 + `]`;
    });
    return l2 !== 1 && (n3.nestedErrors && o2.importErrors(s2), o2.addError({ name: `oneOf`, argument: u2, message: `is not exactly one from ` + u2.join(`,`) })), o2;
  }, s.if = function(e3, t2, n3, a3) {
    if (e3 === void 0) return null;
    if (!r2.isSchema(t2.if)) throw Error(`Expected "if" keyword to be a schema`);
    var o2 = c.call(this, e3, n3, a3, null, t2.if), s2 = new i2(e3, t2, n3, a3), l2;
    if (o2) {
      if (t2.then === void 0) return;
      if (!r2.isSchema(t2.then)) throw Error(`Expected "then" keyword to be a schema`);
      l2 = this.validateSchema(e3, t2.then, n3, a3.makeChild(t2.then)), s2.importErrors(l2);
    } else {
      if (t2.else === void 0) return;
      if (!r2.isSchema(t2.else)) throw Error(`Expected "else" keyword to be a schema`);
      l2 = this.validateSchema(e3, t2.else, n3, a3.makeChild(t2.else)), s2.importErrors(l2);
    }
    return s2;
  };
  function l(e3, t2) {
    if (Object.hasOwnProperty.call(e3, t2)) return e3[t2];
    if (t2 in e3) {
      for (; e3 = Object.getPrototypeOf(e3); ) if (Object.propertyIsEnumerable.call(e3, t2)) return e3[t2];
    }
  }
  s.propertyNames = function(e3, t2, n3, o2) {
    if (this.types.object(e3)) {
      var s2 = new i2(e3, t2, n3, o2), c2 = t2.propertyNames === void 0 ? {} : t2.propertyNames;
      if (!r2.isSchema(c2)) throw new a2(`Expected "propertyNames" to be a schema (object or boolean)`);
      for (var u2 in e3) if (l(e3, u2) !== void 0) {
        var d2 = this.validateSchema(u2, c2, n3, o2.makeChild(c2));
        s2.importErrors(d2);
      }
      return s2;
    }
  }, s.properties = function(e3, t2, n3, r3) {
    if (this.types.object(e3)) {
      var o2 = new i2(e3, t2, n3, r3), s2 = t2.properties || {};
      for (var c2 in s2) {
        var u2 = s2[c2];
        if (u2 !== void 0) {
          if (u2 === null) throw new a2(`Unexpected null, expected schema in "properties"`);
          typeof n3.preValidateProperty == `function` && n3.preValidateProperty(e3, c2, u2, n3, r3);
          var d2 = l(e3, c2), f2 = this.validateSchema(d2, u2, n3, r3.makeChild(u2, c2));
          f2.instance !== o2.instance[c2] && (o2.instance[c2] = f2.instance), o2.importErrors(f2);
        }
      }
      return o2;
    }
  };
  function u(e3, t2, n3, r3, i3, a3) {
    if (this.types.object(e3) && !(t2.properties && t2.properties[i3] !== void 0)) if (t2.additionalProperties === false) a3.addError({ name: `additionalProperties`, argument: i3, message: `is not allowed to have the additional property ` + JSON.stringify(i3) });
    else {
      var o2 = t2.additionalProperties || {};
      typeof n3.preValidateProperty == `function` && n3.preValidateProperty(e3, i3, o2, n3, r3);
      var s2 = this.validateSchema(e3[i3], o2, n3, r3.makeChild(o2, i3));
      s2.instance !== a3.instance[i3] && (a3.instance[i3] = s2.instance), a3.importErrors(s2);
    }
  }
  s.patternProperties = function(e3, t2, n3, r3) {
    if (this.types.object(e3)) {
      var o2 = new i2(e3, t2, n3, r3), s2 = t2.patternProperties || {};
      for (var c2 in e3) {
        var l2 = true;
        for (var d2 in s2) {
          var f2 = s2[d2];
          if (f2 !== void 0) {
            if (f2 === null) throw new a2(`Unexpected null, expected schema in "patternProperties"`);
            try {
              var p = new RegExp(d2, `u`);
            } catch {
              p = new RegExp(d2);
            }
            if (p.test(c2)) {
              l2 = false, typeof n3.preValidateProperty == `function` && n3.preValidateProperty(e3, c2, f2, n3, r3);
              var m = this.validateSchema(e3[c2], f2, n3, r3.makeChild(f2, c2));
              m.instance !== o2.instance[c2] && (o2.instance[c2] = m.instance), o2.importErrors(m);
            }
          }
        }
        l2 && u.call(this, e3, t2, n3, r3, c2, o2);
      }
      return o2;
    }
  }, s.additionalProperties = function(e3, t2, n3, r3) {
    if (this.types.object(e3)) {
      if (t2.patternProperties) return null;
      var a3 = new i2(e3, t2, n3, r3);
      for (var o2 in e3) u.call(this, e3, t2, n3, r3, o2, a3);
      return a3;
    }
  }, s.minProperties = function(e3, t2, n3, r3) {
    if (this.types.object(e3)) {
      var a3 = new i2(e3, t2, n3, r3);
      return Object.keys(e3).length >= t2.minProperties || a3.addError({ name: `minProperties`, argument: t2.minProperties, message: `does not meet minimum property length of ` + t2.minProperties }), a3;
    }
  }, s.maxProperties = function(e3, t2, n3, r3) {
    if (this.types.object(e3)) {
      var a3 = new i2(e3, t2, n3, r3);
      return Object.keys(e3).length <= t2.maxProperties || a3.addError({ name: `maxProperties`, argument: t2.maxProperties, message: `does not meet maximum property length of ` + t2.maxProperties }), a3;
    }
  }, s.items = function(e3, t2, n3, r3) {
    var a3 = this;
    if (this.types.array(e3) && t2.items !== void 0) {
      var o2 = new i2(e3, t2, n3, r3);
      return e3.every(function(e4, i3) {
        if (Array.isArray(t2.items)) var s2 = t2.items[i3] === void 0 ? t2.additionalItems : t2.items[i3];
        else var s2 = t2.items;
        if (s2 === void 0) return true;
        if (s2 === false) return o2.addError({ name: `items`, message: `additionalItems not permitted` }), false;
        var c2 = a3.validateSchema(e4, s2, n3, r3.makeChild(s2, i3));
        return c2.instance !== o2.instance[i3] && (o2.instance[i3] = c2.instance), o2.importErrors(c2), true;
      }), o2;
    }
  }, s.contains = function(e3, t2, n3, a3) {
    var o2 = this;
    if (this.types.array(e3) && t2.contains !== void 0) {
      if (!r2.isSchema(t2.contains)) throw Error(`Expected "contains" keyword to be a schema`);
      var s2 = new i2(e3, t2, n3, a3);
      return e3.some(function(e4, r3) {
        return o2.validateSchema(e4, t2.contains, n3, a3.makeChild(t2.contains, r3)).errors.length === 0;
      }) === false && s2.addError({ name: `contains`, argument: t2.contains, message: `must contain an item matching given schema` }), s2;
    }
  }, s.minimum = function(e3, t2, n3, r3) {
    if (this.types.number(e3)) {
      var a3 = new i2(e3, t2, n3, r3);
      return t2.exclusiveMinimum && t2.exclusiveMinimum === true ? e3 > t2.minimum || a3.addError({ name: `minimum`, argument: t2.minimum, message: `must be greater than ` + t2.minimum }) : e3 >= t2.minimum || a3.addError({ name: `minimum`, argument: t2.minimum, message: `must be greater than or equal to ` + t2.minimum }), a3;
    }
  }, s.maximum = function(e3, t2, n3, r3) {
    if (this.types.number(e3)) {
      var a3 = new i2(e3, t2, n3, r3);
      return t2.exclusiveMaximum && t2.exclusiveMaximum === true ? e3 < t2.maximum || a3.addError({ name: `maximum`, argument: t2.maximum, message: `must be less than ` + t2.maximum }) : e3 <= t2.maximum || a3.addError({ name: `maximum`, argument: t2.maximum, message: `must be less than or equal to ` + t2.maximum }), a3;
    }
  }, s.exclusiveMinimum = function(e3, t2, n3, r3) {
    if (typeof t2.exclusiveMinimum != `boolean` && this.types.number(e3)) {
      var a3 = new i2(e3, t2, n3, r3);
      return e3 > t2.exclusiveMinimum || a3.addError({ name: `exclusiveMinimum`, argument: t2.exclusiveMinimum, message: `must be strictly greater than ` + t2.exclusiveMinimum }), a3;
    }
  }, s.exclusiveMaximum = function(e3, t2, n3, r3) {
    if (typeof t2.exclusiveMaximum != `boolean` && this.types.number(e3)) {
      var a3 = new i2(e3, t2, n3, r3);
      return e3 < t2.exclusiveMaximum || a3.addError({ name: `exclusiveMaximum`, argument: t2.exclusiveMaximum, message: `must be strictly less than ` + t2.exclusiveMaximum }), a3;
    }
  };
  var d = function(e3, t2, n3, o2, s2, c2) {
    if (this.types.number(e3)) {
      var l2 = t2[s2];
      if (l2 == 0) throw new a2(s2 + ` cannot be zero`);
      var u2 = new i2(e3, t2, n3, o2), d2 = r2.getDecimalPlaces(e3), f2 = r2.getDecimalPlaces(l2), p = 10 ** Math.max(d2, f2);
      return Math.round(e3 * p) % Math.round(l2 * p) !== 0 && u2.addError({ name: s2, argument: l2, message: c2 + JSON.stringify(l2) }), u2;
    }
  };
  s.multipleOf = function(e3, t2, n3, r3) {
    return d.call(this, e3, t2, n3, r3, `multipleOf`, `is not a multiple of (divisible by) `);
  }, s.divisibleBy = function(e3, t2, n3, r3) {
    return d.call(this, e3, t2, n3, r3, `divisibleBy`, `is not divisible by (multiple of) `);
  }, s.required = function(e3, t2, n3, r3) {
    var a3 = new i2(e3, t2, n3, r3);
    return e3 === void 0 && t2.required === true ? a3.addError({ name: `required`, message: `is required` }) : this.types.object(e3) && Array.isArray(t2.required) && t2.required.forEach(function(t3) {
      l(e3, t3) === void 0 && a3.addError({ name: `required`, argument: t3, message: `requires property ` + JSON.stringify(t3) });
    }), a3;
  }, s.pattern = function(e3, t2, n3, r3) {
    if (this.types.string(e3)) {
      var a3 = new i2(e3, t2, n3, r3), o2 = t2.pattern;
      try {
        var s2 = new RegExp(o2, `u`);
      } catch {
        s2 = new RegExp(o2);
      }
      return e3.match(s2) || a3.addError({ name: `pattern`, argument: t2.pattern, message: `does not match pattern ` + JSON.stringify(t2.pattern.toString()) }), a3;
    }
  }, s.format = function(e3, t2, n3, a3) {
    if (e3 !== void 0) {
      var o2 = new i2(e3, t2, n3, a3);
      return !o2.disableFormat && !r2.isFormat(e3, t2.format, this) && o2.addError({ name: `format`, argument: t2.format, message: `does not conform to the ` + JSON.stringify(t2.format) + ` format` }), o2;
    }
  }, s.minLength = function(e3, t2, n3, r3) {
    if (this.types.string(e3)) {
      var a3 = new i2(e3, t2, n3, r3), o2 = e3.match(/[\uDC00-\uDFFF]/g);
      return e3.length - (o2 ? o2.length : 0) >= t2.minLength || a3.addError({ name: `minLength`, argument: t2.minLength, message: `does not meet minimum length of ` + t2.minLength }), a3;
    }
  }, s.maxLength = function(e3, t2, n3, r3) {
    if (this.types.string(e3)) {
      var a3 = new i2(e3, t2, n3, r3), o2 = e3.match(/[\uDC00-\uDFFF]/g);
      return e3.length - (o2 ? o2.length : 0) <= t2.maxLength || a3.addError({ name: `maxLength`, argument: t2.maxLength, message: `does not meet maximum length of ` + t2.maxLength }), a3;
    }
  }, s.minItems = function(e3, t2, n3, r3) {
    if (this.types.array(e3)) {
      var a3 = new i2(e3, t2, n3, r3);
      return e3.length >= t2.minItems || a3.addError({ name: `minItems`, argument: t2.minItems, message: `does not meet minimum length of ` + t2.minItems }), a3;
    }
  }, s.maxItems = function(e3, t2, n3, r3) {
    if (this.types.array(e3)) {
      var a3 = new i2(e3, t2, n3, r3);
      return e3.length <= t2.maxItems || a3.addError({ name: `maxItems`, argument: t2.maxItems, message: `does not meet maximum length of ` + t2.maxItems }), a3;
    }
  };
  function f(e3, t2, n3) {
    var i3, a3 = n3.length;
    for (i3 = t2 + 1; i3 < a3; i3++) if (r2.deepCompareStrict(e3, n3[i3])) return false;
    return true;
  }
  s.uniqueItems = function(e3, t2, n3, r3) {
    if (t2.uniqueItems === true && this.types.array(e3)) {
      var a3 = new i2(e3, t2, n3, r3);
      return e3.every(f) || a3.addError({ name: `uniqueItems`, message: `contains duplicate item` }), a3;
    }
  }, s.dependencies = function(e3, t2, n3, r3) {
    if (this.types.object(e3)) {
      var a3 = new i2(e3, t2, n3, r3);
      for (var o2 in t2.dependencies) if (e3[o2] !== void 0) {
        var s2 = t2.dependencies[o2], c2 = r3.makeChild(s2, o2);
        if (typeof s2 == `string` && (s2 = [s2]), Array.isArray(s2)) s2.forEach(function(t3) {
          e3[t3] === void 0 && a3.addError({ name: `dependencies`, argument: c2.propertyPath, message: `property ` + t3 + ` not found, required by ` + c2.propertyPath });
        });
        else {
          var l2 = this.validateSchema(e3, s2, n3, c2);
          a3.instance !== l2.instance && (a3.instance = l2.instance), l2 && l2.errors.length && (a3.addError({ name: `dependencies`, argument: c2.propertyPath, message: `does not meet dependency required by ` + c2.propertyPath }), a3.importErrors(l2));
        }
      }
      return a3;
    }
  }, s.enum = function(e3, t2, n3, o2) {
    if (e3 === void 0) return null;
    if (!Array.isArray(t2.enum)) throw new a2(`enum expects an array`, t2);
    var s2 = new i2(e3, t2, n3, o2);
    return t2.enum.some(r2.deepCompareStrict.bind(null, e3)) || s2.addError({ name: `enum`, argument: t2.enum, message: `is not one of enum values: ` + t2.enum.map(String).join(`,`) }), s2;
  }, s.const = function(e3, t2, n3, a3) {
    if (e3 === void 0) return null;
    var o2 = new i2(e3, t2, n3, a3);
    return r2.deepCompareStrict(t2.const, e3) || o2.addError({ name: `const`, argument: t2.const, message: `does not exactly match expected constant: ` + t2.const }), o2;
  }, s.not = s.disallow = function(e3, t2, n3, r3) {
    var a3 = this;
    if (e3 === void 0) return null;
    var o2 = new i2(e3, t2, n3, r3), s2 = t2.not || t2.disallow;
    return s2 ? (Array.isArray(s2) || (s2 = [s2]), s2.forEach(function(i3) {
      if (a3.testType(e3, t2, n3, r3, i3)) {
        var s3 = i3 && (i3.$id || i3.id) || i3;
        o2.addError({ name: `not`, argument: s3, message: `is of prohibited type ` + s3 });
      }
    }), o2) : null;
  }, n2.exports = o;
})), r = e(((e2, n2) => {
  var r2 = t();
  n2.exports.SchemaScanResult = i2;
  function i2(e3, t2) {
    this.id = e3, this.ref = t2;
  }
  n2.exports.scan = function(e3, t2) {
    function n3(e4, t3) {
      if (!t3 || typeof t3 != `object`) return;
      if (t3.$ref) {
        let n4 = r2.resolveUrl(e4, t3.$ref);
        c[n4] = c[n4] ? c[n4] + 1 : 0;
        return;
      }
      var i3 = t3.$id || t3.id;
      let l = r2.resolveUrl(e4, i3);
      var u = i3 ? l : e4;
      if (u) {
        if (u.indexOf(`#`) < 0 && (u += `#`), s[u]) {
          if (!r2.deepCompareStrict(s[u], t3)) throw Error(`Schema <` + u + `> already exists with different definition`);
          return s[u];
        }
        s[u] = t3, u[u.length - 1] == `#` && (s[u.substring(0, u.length - 1)] = t3);
      }
      a2(u + `/items`, Array.isArray(t3.items) ? t3.items : [t3.items]), a2(u + `/extends`, Array.isArray(t3.extends) ? t3.extends : [t3.extends]), n3(u + `/additionalItems`, t3.additionalItems), o(u + `/properties`, t3.properties), n3(u + `/additionalProperties`, t3.additionalProperties), o(u + `/definitions`, t3.definitions), o(u + `/patternProperties`, t3.patternProperties), o(u + `/dependencies`, t3.dependencies), a2(u + `/disallow`, t3.disallow), a2(u + `/allOf`, t3.allOf), a2(u + `/anyOf`, t3.anyOf), a2(u + `/oneOf`, t3.oneOf), n3(u + `/not`, t3.not);
    }
    function a2(e4, t3) {
      if (Array.isArray(t3)) for (var r3 = 0; r3 < t3.length; r3++) n3(e4 + `/` + r3, t3[r3]);
    }
    function o(e4, t3) {
      if (!(!t3 || typeof t3 != `object`)) for (var r3 in t3) n3(e4 + `/` + r3, t3[r3]);
    }
    var s = {}, c = {};
    return n3(e3, t2), new i2(s, c);
  };
})), i = e(((e2, i2) => {
  var a2 = n(), o = t(), s = r().scan, c = o.ValidatorResult, l = o.ValidatorResultError, u = o.SchemaError, d = o.SchemaContext, f = `/`, p = function e3() {
    this.customFormats = Object.create(e3.prototype.customFormats), this.schemas = {}, this.unresolvedRefs = [], this.types = Object.create(h), this.attributes = Object.create(a2.validators);
  };
  p.prototype.customFormats = {}, p.prototype.schemas = null, p.prototype.types = null, p.prototype.attributes = null, p.prototype.unresolvedRefs = null, p.prototype.addSchema = function(e3, t2) {
    var n2 = this;
    if (!e3) return null;
    var r2 = s(t2 || f, e3), i3 = t2 || e3.$id || e3.id;
    for (var a3 in r2.id) this.schemas[a3] = r2.id[a3];
    for (var a3 in r2.ref) this.unresolvedRefs.push(a3);
    return this.unresolvedRefs = this.unresolvedRefs.filter(function(e4) {
      return n2.schemas[e4] === void 0;
    }), this.schemas[i3];
  }, p.prototype.addSubSchemaArray = function(e3, t2) {
    if (Array.isArray(t2)) for (var n2 = 0; n2 < t2.length; n2++) this.addSubSchema(e3, t2[n2]);
  }, p.prototype.addSubSchemaObject = function(e3, t2) {
    if (!(!t2 || typeof t2 != `object`)) for (var n2 in t2) this.addSubSchema(e3, t2[n2]);
  }, p.prototype.setSchemas = function(e3) {
    this.schemas = e3;
  }, p.prototype.getSchema = function(e3) {
    return this.schemas[e3];
  }, p.prototype.validate = function(e3, t2, n2, r2) {
    if (typeof t2 != `boolean` && typeof t2 != `object` || t2 === null) throw new u("Expected `schema` to be an object or boolean");
    n2 ||= {};
    var i3 = t2.$id || t2.id;
    let a3 = o.resolveUrl(n2.base, i3 || ``);
    if (!r2) {
      r2 = new d(t2, n2, [], a3, Object.create(this.schemas)), r2.schemas[a3] || (r2.schemas[a3] = t2);
      var f2 = s(a3, t2);
      for (var p2 in f2.id) {
        var m2 = f2.id[p2];
        r2.schemas[p2] = m2;
      }
    }
    if (n2.required && e3 === void 0) {
      var h2 = new c(e3, t2, n2, r2);
      return h2.addError(`is required, but is undefined`), h2;
    }
    var h2 = this.validateSchema(e3, t2, n2, r2);
    if (!h2) throw Error(`Result undefined`);
    if (n2.throwAll && h2.errors.length) throw new l(h2);
    return h2;
  };
  function m(e3) {
    var t2 = typeof e3 == `string` ? e3 : e3.$ref;
    return typeof t2 == `string` ? t2 : false;
  }
  p.prototype.validateSchema = function(e3, t2, n2, r2) {
    var i3 = new c(e3, t2, n2, r2);
    if (typeof t2 == `boolean`) t2 === true ? t2 = {} : t2 === false && (t2 = { type: [] });
    else if (!t2) throw Error(`schema is undefined`);
    if (t2.extends) if (Array.isArray(t2.extends)) {
      var s2 = { schema: t2, ctx: r2 };
      t2.extends.forEach(this.schemaTraverser.bind(this, s2)), t2 = s2.schema, s2.schema = null, s2.ctx = null, s2 = null;
    } else t2 = o.deepMerge(t2, this.superResolve(t2.extends, r2));
    var l2 = m(t2);
    if (l2) {
      var f2 = this.resolve(t2, l2, r2), p2 = new d(f2.subschema, n2, r2.path, f2.switchSchema, r2.schemas);
      return this.validateSchema(e3, f2.subschema, n2, p2);
    }
    var h2 = n2 && n2.skipAttributes || [];
    for (var g in t2) if (!a2.ignoreProperties[g] && h2.indexOf(g) < 0) {
      var _ = null, v = this.attributes[g];
      if (v) _ = v.call(this, e3, t2, n2, r2);
      else if (n2.allowUnknownAttributes === false) throw new u(`Unsupported attribute: ` + g, t2);
      _ && i3.importErrors(_);
    }
    return typeof n2.rewrite == `function` && (i3.instance = n2.rewrite.call(this, e3, t2, n2, r2)), i3;
  }, p.prototype.schemaTraverser = function(e3, t2) {
    e3.schema = o.deepMerge(e3.schema, this.superResolve(t2, e3.ctx));
  }, p.prototype.superResolve = function(e3, t2) {
    var n2 = m(e3);
    return n2 ? this.resolve(e3, n2, t2).subschema : e3;
  }, p.prototype.resolve = function(e3, t2, n2) {
    if (t2 = n2.resolve(t2), n2.schemas[t2]) return { subschema: n2.schemas[t2], switchSchema: t2 };
    let r2 = new URL(t2, `thismessage::/`).hash;
    var i3 = r2 && r2.length && t2.substr(0, t2.length - r2.length);
    if (!i3 || !n2.schemas[i3]) throw new u(`no such schema <` + t2 + `>`, e3);
    var a3 = o.objectGetPath(n2.schemas[i3], r2.substr(1));
    if (a3 === void 0) throw new u(`no such schema ` + r2 + ` located in <` + i3 + `>`, e3);
    return { subschema: a3, switchSchema: t2 };
  }, p.prototype.testType = function(e3, t2, n2, r2, i3) {
    if (i3 !== void 0) {
      if (i3 === null) throw new u(`Unexpected null in "type" keyword`);
      if (typeof this.types[i3] == `function`) return this.types[i3].call(this, e3);
      if (i3 && typeof i3 == `object`) {
        var a3 = this.validateSchema(e3, i3, n2, r2);
        return a3 === void 0 || !(a3 && a3.errors.length);
      }
      return true;
    }
  };
  var h = p.prototype.types = {};
  h.string = function(e3) {
    return typeof e3 == `string`;
  }, h.number = function(e3) {
    return typeof e3 == `number` && isFinite(e3);
  }, h.integer = function(e3) {
    return typeof e3 == `number` && e3 % 1 == 0;
  }, h.boolean = function(e3) {
    return typeof e3 == `boolean`;
  }, h.array = function(e3) {
    return Array.isArray(e3);
  }, h.null = function(e3) {
    return e3 === null;
  }, h.date = function(e3) {
    return e3 instanceof Date;
  }, h.any = function(e3) {
    return true;
  }, h.object = function(e3) {
    return e3 && typeof e3 == `object` && !Array.isArray(e3) && !(e3 instanceof Date);
  }, i2.exports = p;
})), a = e(((e2, n2) => {
  var a2 = n2.exports.Validator = i();
  n2.exports.ValidatorResult = t().ValidatorResult, n2.exports.ValidatorResultError = t().ValidatorResultError, n2.exports.ValidationError = t().ValidationError, n2.exports.SchemaError = t().SchemaError, n2.exports.SchemaScanResult = r().SchemaScanResult, n2.exports.scan = r().scan, n2.exports.validate = function(e3, t2, n3) {
    return new a2().validate(e3, t2, n3);
  };
}));
var stdin_default = a();
export {
  stdin_default as default
};
