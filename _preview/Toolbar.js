"use strict";
var __dsPreview = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function jsx4(t, p, k) {
        return R.createElement(t, k === void 0 ? p : Object.assign({ key: k }, p));
      }
      module.exports = R;
      module.exports.jsx = jsx4;
      module.exports.jsxs = jsx4;
      module.exports.jsxDEV = jsx4;
      module.exports.Fragment = R.Fragment;
    }
  });

  // shim:scheduler-shim
  var require_scheduler_shim = __commonJS({
    "shim:scheduler-shim"(exports) {
      "use strict";
      init_define_import_meta_env();
      function f(a, b) {
        var c = a.length;
        a.push(b);
        a: for (; 0 < c; ) {
          var d = c - 1 >>> 1, e = a[d];
          if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
          else break a;
        }
      }
      function h(a) {
        return 0 === a.length ? null : a[0];
      }
      function k(a) {
        if (0 === a.length) return null;
        var b = a[0], c = a.pop();
        if (c !== b) {
          a[0] = c;
          a: for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
            var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
            if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
            else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
            else break a;
          }
        }
        return b;
      }
      function g(a, b) {
        var c = a.sortIndex - b.sortIndex;
        return 0 !== c ? c : a.id - b.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        l = performance;
        exports.unstable_now = function() {
          return l.now();
        };
      } else {
        p = Date, q = p.now();
        exports.unstable_now = function() {
          return p.now() - q;
        };
      }
      var l;
      var p;
      var q;
      var r = [];
      var t = [];
      var u = 1;
      var v = null;
      var y = 3;
      var z = false;
      var A = false;
      var B = false;
      var D = "function" === typeof setTimeout ? setTimeout : null;
      var E = "function" === typeof clearTimeout ? clearTimeout : null;
      var F = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G(a) {
        for (var b = h(t); null !== b; ) {
          if (null === b.callback) k(t);
          else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);
          else break;
          b = h(t);
        }
      }
      function H(a) {
        B = false;
        G(a);
        if (!A) if (null !== h(r)) A = true, I(J);
        else {
          var b = h(t);
          null !== b && K(H, b.startTime - a);
        }
      }
      function J(a, b) {
        A = false;
        B && (B = false, E(L), L = -1);
        z = true;
        var c = y;
        try {
          G(b);
          for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
            var d = v.callback;
            if ("function" === typeof d) {
              v.callback = null;
              y = v.priorityLevel;
              var e = d(v.expirationTime <= b);
              b = exports.unstable_now();
              "function" === typeof e ? v.callback = e : v === h(r) && k(r);
              G(b);
            } else k(r);
            v = h(r);
          }
          if (null !== v) var w = true;
          else {
            var m = h(t);
            null !== m && K(H, m.startTime - b);
            w = false;
          }
          return w;
        } finally {
          v = null, y = c, z = false;
        }
      }
      var N = false;
      var O = null;
      var L = -1;
      var P = 5;
      var Q = -1;
      function M() {
        return exports.unstable_now() - Q < P ? false : true;
      }
      function R() {
        if (null !== O) {
          var a = exports.unstable_now();
          Q = a;
          var b = true;
          try {
            b = O(true, a);
          } finally {
            b ? S() : (N = false, O = null);
          }
        } else N = false;
      }
      var S;
      if ("function" === typeof F) S = function() {
        F(R);
      };
      else if ("undefined" !== typeof MessageChannel) {
        T = new MessageChannel(), U = T.port2;
        T.port1.onmessage = R;
        S = function() {
          U.postMessage(null);
        };
      } else S = function() {
        D(R, 0);
      };
      var T;
      var U;
      function I(a) {
        O = a;
        N || (N = true, S());
      }
      function K(a, b) {
        L = D(function() {
          a(exports.unstable_now());
        }, b);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A || z || (A = true, I(J));
      };
      exports.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h(r);
      };
      exports.unstable_next = function(a) {
        switch (y) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = y;
        }
        var c = y;
        y = b;
        try {
          return a();
        } finally {
          y = c;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = y;
        y = a;
        try {
          return b();
        } finally {
          y = c;
        }
      };
      exports.unstable_scheduleCallback = function(a, b, c) {
        var d = exports.unstable_now();
        "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
        switch (a) {
          case 1:
            var e = -1;
            break;
          case 2:
            e = 250;
            break;
          case 5:
            e = 1073741823;
            break;
          case 4:
            e = 1e4;
            break;
          default:
            e = 5e3;
        }
        e = c + e;
        a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
        c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = true, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = true, I(J)));
        return a;
      };
      exports.unstable_shouldYield = M;
      exports.unstable_wrapCallback = function(a) {
        var b = y;
        return function() {
          var c = y;
          y = b;
          try {
            return a.apply(this, arguments);
          } finally {
            y = c;
          }
        };
      };
    }
  });

  // .design-sync/previews/Toolbar.tsx
  var Toolbar_exports = {};
  __export(Toolbar_exports, {
    Default: () => Default,
    MixedWithDivider: () => MixedWithDivider,
    Small: () => Small,
    Vertical: () => Vertical,
    WithToggles: () => WithToggles
  });
  init_define_import_meta_env();
  var import_react17 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-icons/lib/utils/createFluentIcon.js
  init_define_import_meta_env();
  var React3 = __toESM(require_react_shim());

  // node_modules/@griffel/react/src/index.js
  init_define_import_meta_env();

  // node_modules/@griffel/core/src/index.js
  init_define_import_meta_env();

  // node_modules/@griffel/core/src/renderer/createDOMRenderer.js
  init_define_import_meta_env();

  // node_modules/@griffel/core/src/devtools/index.js
  init_define_import_meta_env();

  // node_modules/@griffel/core/src/devtools/injectDevTools.js
  init_define_import_meta_env();

  // node_modules/@griffel/core/src/constants.js
  init_define_import_meta_env();
  var __GLOBAL__ = typeof window === "undefined" ? global : window;
  var __NAMESPACE_PREFIX__ = "@griffel/";
  function getGlobalVar(name, defaultValue) {
    if (!__GLOBAL__[/* @__PURE__ */ Symbol.for(__NAMESPACE_PREFIX__ + name)]) {
      __GLOBAL__[/* @__PURE__ */ Symbol.for(__NAMESPACE_PREFIX__ + name)] = defaultValue;
    }
    return __GLOBAL__[/* @__PURE__ */ Symbol.for(__NAMESPACE_PREFIX__ + name)];
  }
  var DEBUG_RESET_CLASSES = /* @__PURE__ */ getGlobalVar("DEBUG_RESET_CLASSES", {});
  var DEFINITION_LOOKUP_TABLE = /* @__PURE__ */ getGlobalVar("DEFINITION_LOOKUP_TABLE", {});
  var DATA_BUCKET_ATTR = "data-make-styles-bucket";
  var DATA_PRIORITY_ATTR = "data-priority";
  var RESET_HASH_PREFIX = "r";
  var SEQUENCE_HASH_LENGTH = 7;
  var SEQUENCE_PREFIX = "___";
  var DEBUG_SEQUENCE_SEPARATOR = "_";
  var SEQUENCE_SIZE = false ? SEQUENCE_PREFIX.length + SEQUENCE_HASH_LENGTH : SEQUENCE_PREFIX.length + SEQUENCE_HASH_LENGTH + DEBUG_SEQUENCE_SEPARATOR.length + SEQUENCE_HASH_LENGTH;
  var LOOKUP_DEFINITIONS_INDEX = 0;
  var LOOKUP_DIR_INDEX = 1;

  // node_modules/@griffel/core/src/devtools/mergeDebugSequence.js
  init_define_import_meta_env();

  // node_modules/@griffel/core/src/devtools/getAtomicDebugSequenceTree.js
  init_define_import_meta_env();

  // node_modules/@griffel/core/src/devtools/store.js
  init_define_import_meta_env();

  // node_modules/@griffel/core/src/mergeClasses.js
  init_define_import_meta_env();

  // node_modules/@griffel/core/src/runtime/utils/hashSequence.js
  init_define_import_meta_env();

  // node_modules/@emotion/hash/dist/emotion-hash.esm.js
  init_define_import_meta_env();
  function murmur2(str) {
    var h = 0;
    var k, i = 0, len = str.length;
    for (; len >= 4; ++i, len -= 4) {
      k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
      k = /* Math.imul(k, m): */
      (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
      k ^= /* k >>> r: */
      k >>> 24;
      h = /* Math.imul(k, m): */
      (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
      (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    }
    switch (len) {
      case 3:
        h ^= (str.charCodeAt(i + 2) & 255) << 16;
      case 2:
        h ^= (str.charCodeAt(i + 1) & 255) << 8;
      case 1:
        h ^= str.charCodeAt(i) & 255;
        h = /* Math.imul(h, m): */
        (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    }
    h ^= h >>> 13;
    h = /* Math.imul(h, m): */
    (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
  }

  // node_modules/@griffel/core/src/runtime/utils/hashSequence.js
  function padEndHash(value) {
    const hashLength = value.length;
    if (hashLength === SEQUENCE_HASH_LENGTH) {
      return value;
    }
    for (let i = hashLength; i < SEQUENCE_HASH_LENGTH; i++) {
      value += "0";
    }
    return value;
  }
  function hashSequence(classes, dir, sequenceIds = []) {
    if (false) {
      return SEQUENCE_PREFIX + padEndHash(murmur2(classes + dir));
    }
    return SEQUENCE_PREFIX + padEndHash(murmur2(classes + dir)) + DEBUG_SEQUENCE_SEPARATOR + padEndHash(murmur2(sequenceIds.join("")));
  }

  // node_modules/@griffel/core/src/runtime/reduceToClassNameForSlots.js
  init_define_import_meta_env();
  function reduceToClassName(classMap, dir) {
    let classString = "";
    let hashString = "";
    for (const propertyHash in classMap) {
      const classNameMapping = classMap[propertyHash];
      if (classNameMapping === 0) {
        hashString += propertyHash + " ";
        continue;
      }
      const hasRTLClassName = Array.isArray(classNameMapping);
      const className = dir === "rtl" ? (hasRTLClassName ? classNameMapping[1] : classNameMapping) + " " : (hasRTLClassName ? classNameMapping[0] : classNameMapping) + " ";
      classString += className;
      hashString += className;
    }
    return [classString.slice(0, -1), hashString.slice(0, -1)];
  }
  function reduceToClassNameForSlots(classesMapBySlot, dir) {
    const classNamesForSlots = {};
    for (const slotName in classesMapBySlot) {
      const [slotClasses, slotClassesHash] = reduceToClassName(classesMapBySlot[slotName], dir);
      if (slotClassesHash === "") {
        classNamesForSlots[slotName] = "";
        continue;
      }
      const sequenceHash = hashSequence(slotClassesHash, dir);
      const resultSlotClasses = sequenceHash + (slotClasses === "" ? "" : " " + slotClasses);
      DEFINITION_LOOKUP_TABLE[sequenceHash] = [classesMapBySlot[slotName], dir];
      classNamesForSlots[slotName] = resultSlotClasses;
    }
    return classNamesForSlots;
  }

  // node_modules/@griffel/core/src/mergeClasses.js
  var mergeClassesCachedResults = {};
  function mergeClasses() {
    let dir = null;
    let resultClassName = "";
    let sequenceMatch = "";
    const sequencesIds = new Array(arguments.length);
    let containsResetClassName = "";
    for (let i = 0; i < arguments.length; i++) {
      const className = arguments[i];
      if (typeof className === "string" && className !== "") {
        const sequenceIndex = className.indexOf(SEQUENCE_PREFIX);
        if (sequenceIndex === -1) {
          if (true) {
            className.split(" ").forEach((entry) => {
              if (entry.startsWith(RESET_HASH_PREFIX) && DEBUG_RESET_CLASSES[entry]) {
                if (containsResetClassName) {
                  console.error(`mergeClasses(): a passed string contains multiple classes produced by makeResetStyles (${className} & ${resultClassName}, this will lead to non-deterministic behavior. Learn more:https://griffel.js.org/react/api/make-reset-styles#limitations
Source string: ${className}`);
                } else {
                  containsResetClassName = entry;
                }
              }
            });
          }
          resultClassName += className + " ";
        } else {
          const sequenceId = className.substr(sequenceIndex, SEQUENCE_SIZE);
          if (sequenceIndex > 0) {
            resultClassName += className.slice(0, sequenceIndex);
          }
          sequenceMatch += sequenceId;
          sequencesIds[i] = sequenceId;
        }
        if (true) {
          if (className.indexOf(SEQUENCE_PREFIX, sequenceIndex + 1) !== -1) {
            console.error(`mergeClasses(): a passed string contains multiple identifiers of atomic classes (classes that start with "${SEQUENCE_PREFIX}"), it's possible that passed classes were concatenated in a wrong way. Source string: ${className}`);
          }
        }
      }
    }
    if (sequenceMatch === "") {
      return resultClassName.slice(0, -1);
    }
    const mergeClassesResult = mergeClassesCachedResults[sequenceMatch];
    if (mergeClassesResult !== void 0) {
      return resultClassName + mergeClassesResult;
    }
    const sequenceMappings = [];
    for (let i = 0; i < arguments.length; i++) {
      const sequenceId = sequencesIds[i];
      if (sequenceId) {
        const sequenceMapping = DEFINITION_LOOKUP_TABLE[sequenceId];
        if (sequenceMapping) {
          sequenceMappings.push(sequenceMapping[LOOKUP_DEFINITIONS_INDEX]);
          if (true) {
            if (dir !== null && dir !== sequenceMapping[LOOKUP_DIR_INDEX]) {
              console.error(`mergeClasses(): a passed string contains an identifier (${sequenceId}) that has different direction (dir="${sequenceMapping[1] ? "rtl" : "ltr"}") setting than other classes. This is not supported. Source string: ${arguments[i]}`);
            }
          }
          dir = sequenceMapping[LOOKUP_DIR_INDEX];
        } else {
          if (true) {
            console.error(`mergeClasses(): a passed string contains an identifier (${sequenceId}) that does not match any entry in cache. Source string: ${arguments[i]}`);
          }
        }
      }
    }
    const resultClassesMap = Object.assign.apply(
      Object,
      // .assign() mutates the first object, we can't mutate mappings as it will produce invalid results later
      [{}].concat(sequenceMappings)
    );
    const [atomicClasses, classesMapHash] = reduceToClassName(resultClassesMap, dir);
    const newSequenceHash = hashSequence(classesMapHash, dir, sequencesIds);
    const newClassName = newSequenceHash + " " + atomicClasses;
    mergeClassesCachedResults[sequenceMatch] = newClassName;
    DEFINITION_LOOKUP_TABLE[newSequenceHash] = [resultClassesMap, dir];
    return resultClassName + newClassName;
  }

  // node_modules/@griffel/core/src/devtools/store.js
  var sequenceDetails = {};
  var cssRules = /* @__PURE__ */ new Set();
  var debugData = {
    getChildrenSequences: (debugSequenceHash) => {
      const key = Object.keys(mergeClassesCachedResults).find((key2) => mergeClassesCachedResults[key2].startsWith(debugSequenceHash));
      if (key) {
        return key.split(SEQUENCE_PREFIX).filter((sequence) => sequence.length).map((sequence) => SEQUENCE_PREFIX + sequence);
      }
      return [];
    },
    addCSSRule: (rule) => {
      cssRules.add(rule);
    },
    addSequenceDetails: (classNamesForSlots, sourceURL) => {
      Object.entries(classNamesForSlots).forEach(([slotName, sequenceHash]) => {
        sequenceDetails[sequenceHash.substring(0, SEQUENCE_SIZE)] = { slotName, sourceURL };
      });
    },
    getCSSRules: () => {
      return Array.from(cssRules);
    },
    getSequenceDetails: (sequenceHash) => {
      return sequenceDetails[sequenceHash];
    }
  };

  // node_modules/@griffel/core/src/devtools/utils.js
  init_define_import_meta_env();
  function getDirectionalClassName(classes, direction) {
    return Array.isArray(classes) ? direction === "rtl" ? classes[1] : classes[0] : classes || "";
  }
  function getDebugClassNames(lookupItem, parentLookupItem, parentDebugClassNames, overridingSiblings) {
    const classesMapping = lookupItem[0];
    const direction = lookupItem[1];
    return Object.entries(classesMapping).map(([propertyHash, classes]) => {
      const className = getDirectionalClassName(classes, direction);
      let overriddenBy;
      if (parentDebugClassNames && parentLookupItem) {
        const matching = parentDebugClassNames.find(({ className: parentClassName }) => parentClassName === className);
        if (!matching && parentLookupItem[0][propertyHash]) {
          overriddenBy = getDirectionalClassName(parentLookupItem[0][propertyHash], parentLookupItem[1]);
        } else if (matching && parentLookupItem[0][propertyHash]) {
          const siblingHasSameRule = overridingSiblings ? overridingSiblings.filter(({ debugClassNames }) => debugClassNames.filter(({ className: siblingClassName }) => siblingClassName === className).length > 0).length > 0 : false;
          overriddenBy = siblingHasSameRule ? matching.className : matching.overriddenBy;
        } else if (!matching && !parentLookupItem[0][propertyHash]) {
          overriddenBy = void 0;
        } else if (matching && !parentLookupItem[0][propertyHash]) {
          overriddenBy = void 0;
        }
      }
      return {
        className,
        overriddenBy
      };
    });
  }

  // node_modules/@griffel/core/src/devtools/getAtomicDebugSequenceTree.js
  function getAtomicDebugSequenceTree(debugSequenceHash, parentNode) {
    const lookupItem = DEFINITION_LOOKUP_TABLE[debugSequenceHash];
    if (lookupItem === void 0) {
      return void 0;
    }
    const parentLookupItem = parentNode ? DEFINITION_LOOKUP_TABLE[parentNode.sequenceHash] : void 0;
    const debugClassNames = getDebugClassNames(lookupItem, parentLookupItem, parentNode === null || parentNode === void 0 ? void 0 : parentNode.debugClassNames, parentNode === null || parentNode === void 0 ? void 0 : parentNode.children);
    const node = {
      sequenceHash: debugSequenceHash,
      direction: lookupItem[1],
      children: [],
      debugClassNames
    };
    const childrenSequences = debugData.getChildrenSequences(node.sequenceHash);
    childrenSequences.reverse().forEach((sequence) => {
      const child = getAtomicDebugSequenceTree(sequence, node);
      if (child) {
        node.children.push(child);
      }
    });
    if (!node.children.length) {
      node.rules = {};
      node.debugClassNames.forEach(({ className }) => {
        const mapData = debugData.getSequenceDetails(debugSequenceHash);
        if (mapData) {
          node.slot = mapData.slotName;
          node.sourceURL = mapData.sourceURL;
        }
        const cssRule = debugData.getCSSRules().find((cssRule2) => {
          return cssRule2.includes(className);
        });
        node.rules[className] = cssRule;
      });
    }
    return node;
  }

  // node_modules/@griffel/core/src/devtools/getResetDebugSequence.js
  init_define_import_meta_env();
  function getResetDebugSequence(debugSequenceHash) {
    const resetClass = DEBUG_RESET_CLASSES[debugSequenceHash];
    if (resetClass === void 0) {
      return void 0;
    }
    const debugClassNames = [{ className: debugSequenceHash }];
    const node = {
      sequenceHash: debugSequenceHash,
      direction: "ltr",
      children: [],
      debugClassNames
    };
    node.rules = {};
    node.slot = "makeResetStyles()";
    const [{ className }] = node.debugClassNames;
    const cssRules2 = debugData.getCSSRules().filter((cssRule) => {
      return cssRule.includes(`.${className}`);
    });
    node.rules[className] = cssRules2.join("");
    return node;
  }

  // node_modules/@griffel/core/src/devtools/mergeDebugSequence.js
  function mergeDebugSequence(atomicClases, resetClassName) {
    const debugResultRootAtomic = atomicClases ? getAtomicDebugSequenceTree(atomicClases) : void 0;
    const debugResultRootReset = resetClassName ? getResetDebugSequence(resetClassName) : void 0;
    if (!debugResultRootAtomic && !debugResultRootReset) {
      return void 0;
    }
    if (!debugResultRootAtomic) {
      return debugResultRootReset;
    }
    if (!debugResultRootReset) {
      return debugResultRootAtomic;
    }
    const debugResultRoot = {
      sequenceHash: debugResultRootAtomic.sequenceHash + debugResultRootReset.sequenceHash,
      direction: debugResultRootAtomic.direction,
      children: [debugResultRootAtomic, debugResultRootReset],
      debugClassNames: [...debugResultRootAtomic.debugClassNames, ...debugResultRootReset.debugClassNames]
    };
    return debugResultRoot;
  }

  // node_modules/@griffel/core/src/devtools/injectDevTools.js
  function injectDevTools(document2) {
    const window2 = document2.defaultView;
    if (!window2 || window2.__GRIFFEL_DEVTOOLS__) {
      return;
    }
    const devtools = {
      getInfo: (element) => {
        let rootDebugSequenceHash;
        let rootResetDebugClassName;
        for (const className of element.classList) {
          if (className.startsWith(SEQUENCE_PREFIX)) {
            rootDebugSequenceHash = className;
          }
          if (DEBUG_RESET_CLASSES[className]) {
            rootResetDebugClassName = className;
          }
        }
        return mergeDebugSequence(rootDebugSequenceHash, rootResetDebugClassName);
      }
    };
    Object.defineProperty(window2, "__GRIFFEL_DEVTOOLS__", {
      configurable: false,
      enumerable: false,
      get() {
        return devtools;
      }
    });
  }

  // node_modules/@griffel/core/src/devtools/isDevToolsEnabled.js
  init_define_import_meta_env();
  var isDevToolsEnabled = (() => {
    var _a;
    try {
      return Boolean(typeof window !== "undefined" && ((_a = window.sessionStorage) === null || _a === void 0 ? void 0 : _a.getItem("__GRIFFEL_DEVTOOLS__")));
    } catch {
      return false;
    }
  })();

  // node_modules/@griffel/core/src/devtools/getSourceURLfromError.js
  init_define_import_meta_env();

  // node_modules/@griffel/core/src/devtools/react-render-tracker/stackTrace.js
  init_define_import_meta_env();
  var UNKNOWN_FUNCTION = "<unknown>";
  function parseStackTraceLine(line) {
    return parseChrome(line) || parseGecko(line) || parseJSC(line);
  }
  var chromeRe = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)?\)?\s*$/i;
  var chromeRe2 = /^\s*at ()((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)\s*$/i;
  var chromeEvalRe = /\((\S*)\)/;
  function parseChrome(line) {
    const parts = chromeRe.exec(line) || chromeRe2.exec(line);
    if (!parts) {
      return null;
    }
    let loc = parts[2];
    const isNative = loc && loc.indexOf("native") === 0;
    const isEval = loc && loc.indexOf("eval") === 0;
    const submatch = chromeEvalRe.exec(loc);
    if (isEval && submatch !== null) {
      loc = submatch[1];
    }
    return {
      loc: !isNative ? parts[2] : null,
      name: parts[1] || UNKNOWN_FUNCTION
    };
  }
  var geckoRe = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)\s*$/i;
  var geckoEvalRe = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
  function parseGecko(line) {
    const parts = geckoRe.exec(line);
    if (!parts) {
      return null;
    }
    let loc = parts[3];
    const isEval = loc && loc.indexOf(" > eval") > -1;
    const submatch = geckoEvalRe.exec(loc);
    if (isEval && submatch !== null) {
      loc = submatch[1];
    }
    return {
      loc: parts[3],
      name: parts[1] || UNKNOWN_FUNCTION
    };
  }
  var javaScriptCoreRe = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?)\s*$/i;
  function parseJSC(line) {
    const parts = javaScriptCoreRe.exec(line);
    if (!parts) {
      return null;
    }
    return {
      loc: parts[3],
      name: parts[1] || UNKNOWN_FUNCTION
    };
  }

  // node_modules/@griffel/core/src/devtools/getSourceURLfromError.js
  function getSourceURLfromError() {
    const stacks = String(new Error().stack).split("\n");
    const userMakeStyleCallLine = findUserMakeStyleCallInStacks(stacks);
    if (userMakeStyleCallLine === void 0) {
      return void 0;
    }
    const result = parseStackTraceLine(userMakeStyleCallLine);
    return result === null || result === void 0 ? void 0 : result.loc;
  }
  function findUserMakeStyleCallInStacks(stacks) {
    for (let i = stacks.length - 1; i >= 0; --i) {
      if (stacks[i].includes("at getSourceURLfromError")) {
        return stacks[i + 3];
      }
    }
    return void 0;
  }

  // node_modules/@griffel/core/src/runtime/utils/normalizeCSSBucketEntry.js
  init_define_import_meta_env();
  function normalizeCSSBucketEntry(entry) {
    if (!Array.isArray(entry)) {
      return [entry];
    }
    if (entry.length > 2) {
      throw new Error("CSS Bucket contains an entry with greater than 2 items, please report this to https://github.com/microsoft/griffel/issues");
    }
    return entry;
  }

  // node_modules/@griffel/core/src/renderer/getStyleSheetForBucket.js
  init_define_import_meta_env();

  // node_modules/@griffel/core/src/renderer/createIsomorphicStyleSheet.js
  init_define_import_meta_env();
  function createIsomorphicStyleSheet(styleElement, bucketName, priority, elementAttributes) {
    const __cssRulesForSSR = [];
    elementAttributes[DATA_BUCKET_ATTR] = bucketName;
    elementAttributes[DATA_PRIORITY_ATTR] = String(priority);
    if (styleElement) {
      for (const attrName in elementAttributes) {
        styleElement.setAttribute(attrName, elementAttributes[attrName]);
      }
    }
    function insertRule(rule) {
      if (styleElement === null || styleElement === void 0 ? void 0 : styleElement.sheet) {
        return styleElement.sheet.insertRule(rule, styleElement.sheet.cssRules.length);
      }
      return __cssRulesForSSR.push(rule);
    }
    return {
      elementAttributes,
      insertRule,
      element: styleElement,
      bucketName,
      cssRules() {
        if (styleElement === null || styleElement === void 0 ? void 0 : styleElement.sheet) {
          return Array.from(styleElement.sheet.cssRules).map((cssRule) => cssRule.cssText);
        }
        return __cssRulesForSSR;
      }
    };
  }

  // node_modules/@griffel/core/src/renderer/getStyleSheetForBucket.js
  var styleBucketOrdering = [
    // reset styles
    "r",
    // catch-all
    "d",
    // link
    "l",
    // visited
    "v",
    // focus-within
    "w",
    // focus
    "f",
    // focus-visible
    "i",
    // hover
    "h",
    // active
    "a",
    // at rules for reset styles
    "s",
    // keyframes
    "k",
    // at-rules
    "t",
    // @media rules
    "m",
    // @container rules
    "c"
  ];
  var styleBucketOrderingMap = /* @__PURE__ */ styleBucketOrdering.reduce((acc, cur, j) => {
    acc[cur] = j;
    return acc;
  }, {});
  function getStyleSheetKey(bucketName, media, priority) {
    return (bucketName === "m" ? bucketName + media : bucketName) + priority;
  }
  function getStyleSheetForBucket(bucketName, targetDocument, insertionPoint, renderer, metadata = {}) {
    var _a, _b;
    const isMediaBucket = bucketName === "m";
    const media = (_a = metadata["m"]) !== null && _a !== void 0 ? _a : "0";
    const priority = (_b = metadata["p"]) !== null && _b !== void 0 ? _b : 0;
    const stylesheetKey = getStyleSheetKey(bucketName, media, priority);
    if (!renderer.stylesheets[stylesheetKey]) {
      const tag = targetDocument && targetDocument.createElement("style");
      const stylesheet = createIsomorphicStyleSheet(tag, bucketName, priority, {
        ...renderer.styleElementAttributes,
        ...isMediaBucket && { media }
      });
      renderer.stylesheets[stylesheetKey] = stylesheet;
      if ((targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.head) && tag) {
        targetDocument.head.insertBefore(tag, findInsertionPoint(targetDocument, insertionPoint, bucketName, renderer, metadata));
      }
    }
    return renderer.stylesheets[stylesheetKey];
  }
  function isSameInsertionKey(element, bucketName, metadata) {
    var _a, _b;
    const targetKey = bucketName + ((_a = metadata["m"]) !== null && _a !== void 0 ? _a : "");
    const elementKey = element.getAttribute(DATA_BUCKET_ATTR) + ((_b = element.media) !== null && _b !== void 0 ? _b : "");
    return targetKey === elementKey;
  }
  function findInsertionPoint(targetDocument, insertionPoint, targetBucket, renderer, metadata = {}) {
    var _a, _b;
    const targetOrder = styleBucketOrderingMap[targetBucket];
    const media = (_a = metadata["m"]) !== null && _a !== void 0 ? _a : "";
    const priority = (_b = metadata["p"]) !== null && _b !== void 0 ? _b : 0;
    let comparer = (el) => targetOrder - styleBucketOrderingMap[el.getAttribute(DATA_BUCKET_ATTR)];
    let styleElements = targetDocument.head.querySelectorAll(`[${DATA_BUCKET_ATTR}]`);
    if (targetBucket === "m") {
      const mediaElements = targetDocument.head.querySelectorAll(`[${DATA_BUCKET_ATTR}="${targetBucket}"]`);
      if (mediaElements.length) {
        styleElements = mediaElements;
        comparer = (el) => renderer.compareMediaQueries(media, el.media);
      }
    }
    const comparerWithPriority = (el) => {
      if (isSameInsertionKey(el, targetBucket, metadata)) {
        return priority - Number(el.getAttribute("data-priority"));
      }
      return comparer(el);
    };
    const length = styleElements.length;
    let index = length - 1;
    while (index >= 0) {
      const styleElement = styleElements.item(index);
      if (comparerWithPriority(styleElement) > 0) {
        return styleElement.nextSibling;
      }
      index--;
    }
    if (length > 0) {
      return styleElements.item(0);
    }
    return insertionPoint ? insertionPoint.nextSibling : null;
  }

  // node_modules/@griffel/core/src/renderer/safeInsertRule.js
  init_define_import_meta_env();
  var ignoreSuffixes = /* @__PURE__ */ [
    "-moz-placeholder",
    "-moz-focus-inner",
    "-moz-focusring",
    "-ms-input-placeholder",
    "-moz-read-write",
    "-moz-read-only"
  ].join("|");
  var ignoreSuffixesRegex = /* @__PURE__ */ new RegExp(`:(${ignoreSuffixes})`);
  function safeInsertRule(sheet, ruleCSS) {
    try {
      sheet.insertRule(ruleCSS);
    } catch (e) {
      if (!ignoreSuffixesRegex.test(ruleCSS)) {
        console.error(`There was a problem inserting the following rule: "${ruleCSS}"`, e);
      }
    }
  }

  // node_modules/@griffel/core/src/renderer/createDOMRenderer.js
  var lastIndex = 0;
  var defaultCompareMediaQueries = (a, b) => a < b ? -1 : a > b ? 1 : 0;
  function createDOMRenderer(targetDocument = typeof document === "undefined" ? void 0 : document, options = {}) {
    const { classNameHashSalt, unstable_filterCSSRule, insertionPoint, styleElementAttributes, compareMediaQueries = defaultCompareMediaQueries } = options;
    const renderer = {
      classNameHashSalt,
      insertionCache: {},
      stylesheets: {},
      styleElementAttributes: Object.freeze(styleElementAttributes),
      compareMediaQueries,
      id: `d${lastIndex++}`,
      insertCSSRules(cssRules2) {
        for (const styleBucketName in cssRules2) {
          const cssRulesForBucket = cssRules2[styleBucketName];
          for (let i = 0, l = cssRulesForBucket.length; i < l; i++) {
            const [ruleCSS, metadata] = normalizeCSSBucketEntry(cssRulesForBucket[i]);
            const sheet = getStyleSheetForBucket(styleBucketName, targetDocument, insertionPoint || null, renderer, metadata);
            if (renderer.insertionCache[ruleCSS]) {
              continue;
            }
            renderer.insertionCache[ruleCSS] = styleBucketName;
            if (isDevToolsEnabled) {
              debugData.addCSSRule(ruleCSS);
            }
            if (unstable_filterCSSRule) {
              if (unstable_filterCSSRule(ruleCSS)) {
                safeInsertRule(sheet, ruleCSS);
              }
            } else {
              safeInsertRule(sheet, ruleCSS);
            }
          }
        }
      }
    };
    if (targetDocument && true && isDevToolsEnabled) {
      injectDevTools(targetDocument);
    }
    return renderer;
  }

  // node_modules/@griffel/core/src/insertionFactory.js
  init_define_import_meta_env();
  var insertionFactory = () => {
    const insertionCache = {};
    return function insertStyles(renderer, cssRules2) {
      if (insertionCache[renderer.id] === void 0) {
        renderer.insertCSSRules(cssRules2);
        insertionCache[renderer.id] = true;
      }
    };
  };

  // node_modules/@griffel/core/src/__styles.js
  init_define_import_meta_env();
  function __styles(classesMapBySlot, cssRules2, factory = insertionFactory) {
    const insertStyles = factory();
    let ltrClassNamesForSlots = null;
    let rtlClassNamesForSlots = null;
    let sourceURL;
    if (isDevToolsEnabled) {
      sourceURL = getSourceURLfromError();
    }
    function computeClasses(options) {
      const { dir, renderer } = options;
      const isLTR = dir === "ltr";
      if (isLTR) {
        if (ltrClassNamesForSlots === null) {
          ltrClassNamesForSlots = reduceToClassNameForSlots(classesMapBySlot, dir);
        }
      } else {
        if (rtlClassNamesForSlots === null) {
          rtlClassNamesForSlots = reduceToClassNameForSlots(classesMapBySlot, dir);
        }
      }
      insertStyles(renderer, cssRules2);
      const classNamesForSlots = isLTR ? ltrClassNamesForSlots : rtlClassNamesForSlots;
      if (isDevToolsEnabled) {
        debugData.addSequenceDetails(classNamesForSlots, sourceURL);
      }
      return classNamesForSlots;
    }
    return computeClasses;
  }

  // node_modules/@griffel/core/src/__resetStyles.js
  init_define_import_meta_env();
  function __resetStyles(ltrClassName, rtlClassName, cssRules2, factory = insertionFactory) {
    const insertStyles = factory();
    function computeClassName(options) {
      const { dir, renderer } = options;
      const className = dir === "ltr" ? ltrClassName : rtlClassName || ltrClassName;
      insertStyles(renderer, Array.isArray(cssRules2) ? { r: cssRules2 } : cssRules2);
      if (true) {
        DEBUG_RESET_CLASSES[className] = 1;
      }
      return className;
    }
    return computeClassName;
  }

  // node_modules/@griffel/react/src/insertionFactory.js
  init_define_import_meta_env();

  // node_modules/@griffel/react/src/utils/canUseDOM.js
  init_define_import_meta_env();
  function canUseDOM() {
    return typeof window !== "undefined" && !!(window.document && window.document.createElement);
  }

  // node_modules/@griffel/react/src/useInsertionEffect.js
  init_define_import_meta_env();
  var import_react = __toESM(require_react_shim());
  var useInsertionEffect = (
    // @ts-expect-error Hack to make sure that `useInsertionEffect` will not cause bundling issues in older React versions
    // eslint-disable-next-line no-useless-concat
    import_react.default["useInsertionEffect"] ? import_react.default["useInsertionEffect"] : void 0
  );

  // node_modules/@griffel/react/src/insertionFactory.js
  var insertionFactory2 = () => {
    const insertionCache = {};
    return function insert(renderer, cssRules2) {
      if (useInsertionEffect && canUseDOM()) {
        useInsertionEffect(() => {
          renderer.insertCSSRules(cssRules2);
        }, [renderer, cssRules2]);
        return;
      }
      if (insertionCache[renderer.id] === void 0) {
        renderer.insertCSSRules(cssRules2);
        insertionCache[renderer.id] = true;
      }
    };
  };

  // node_modules/@griffel/react/src/RendererContext.js
  init_define_import_meta_env();
  var import_jsx_runtime = __toESM(require_react_shim());
  var import_react2 = __toESM(require_react_shim());
  var RendererContext = /* @__PURE__ */ (0, import_react2.createContext)(/* @__PURE__ */ createDOMRenderer());
  function useRenderer() {
    return (0, import_react2.useContext)(RendererContext);
  }

  // node_modules/@griffel/react/src/TextDirectionContext.js
  init_define_import_meta_env();
  var import_jsx_runtime2 = __toESM(require_react_shim());
  var import_react3 = __toESM(require_react_shim());
  var TextDirectionContext = /* @__PURE__ */ (0, import_react3.createContext)("ltr");
  function useTextDirection() {
    return (0, import_react3.useContext)(TextDirectionContext);
  }

  // node_modules/@griffel/react/src/__styles.js
  init_define_import_meta_env();
  function __styles2(classesMapBySlot, cssRules2) {
    const getStyles = __styles(classesMapBySlot, cssRules2, insertionFactory2);
    return function useClasses() {
      const dir = useTextDirection();
      const renderer = useRenderer();
      return getStyles({ dir, renderer });
    };
  }

  // node_modules/@griffel/react/src/__resetStyles.js
  init_define_import_meta_env();
  function __resetStyles2(ltrClassName, rtlClassName, cssRules2) {
    const getStyles = __resetStyles(ltrClassName, rtlClassName, cssRules2, insertionFactory2);
    return function useClasses() {
      const dir = useTextDirection();
      const renderer = useRenderer();
      return getStyles({ dir, renderer });
    };
  }

  // node_modules/@fluentui/react-icons/lib/utils/useIconState.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-icons/lib/contexts/IconDirectionContext.js
  init_define_import_meta_env();
  var React2 = __toESM(require_react_shim());
  var IconDirectionContext = React2.createContext(void 0);
  var IconDirectionContextDefaultValue = {};
  var IconDirectionContextProvider = IconDirectionContext.Provider;
  var useIconContext = () => {
    const context = React2.useContext(IconDirectionContext);
    return context !== null && context !== void 0 ? context : IconDirectionContextDefaultValue;
  };

  // node_modules/@fluentui/react-icons/lib/utils/useIconStyles.styles.js
  init_define_import_meta_env();
  var useStyles = __styles2({
    root: {
      mc9l5x: "f1w7gpdv",
      Bg96gwp: "fez10in"
    },
    rtl: {
      Bz10aip: "f13rod7r"
    }
  }, {
    d: [".f1w7gpdv{display:inline;}", ".fez10in{line-height:0;}", ".f13rod7r{transform:scaleX(-1);}"]
  });

  // node_modules/@fluentui/react-icons/lib/utils/useIconState.js
  var useIconState = (props, options) => {
    const {
      // remove unwanted props to be set on the svg/html element
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      filled,
      title,
      primaryFill = "currentColor",
      ...rest
    } = props;
    const state = {
      ...rest,
      fill: primaryFill
    };
    const styles = useStyles();
    const iconContext = useIconContext();
    state.className = mergeClasses(styles.root, (options === null || options === void 0 ? void 0 : options.flipInRtl) && (iconContext === null || iconContext === void 0 ? void 0 : iconContext.textDirection) === "rtl" && styles.rtl, state.className);
    if (title) {
      state["aria-label"] = title;
    }
    if (!state["aria-label"] && !state["aria-labelledby"]) {
      state["aria-hidden"] = true;
    } else {
      state["role"] = "img";
    }
    return state;
  };

  // node_modules/@fluentui/react-icons/lib/utils/createFluentIcon.styles.js
  init_define_import_meta_env();
  var useRootStyles = __styles2({
    root: {
      B8gzw0y: "f1dd5bof"
    }
  }, {
    m: [["@media (forced-colors: active){.f1dd5bof{forced-color-adjust:auto;}}", {
      m: "(forced-colors: active)"
    }]]
  });

  // node_modules/@fluentui/react-icons/lib/utils/constants.js
  init_define_import_meta_env();
  var iconClassName = "fui-Icon";

  // node_modules/@fluentui/react-icons/lib/utils/createFluentIcon.js
  var renderSvgNode = (node, key) => {
    const [tag, attrs, ...children] = node;
    return React3.createElement(tag, { ...attrs, key }, ...children.map(renderSvgNode));
  };
  var createFluentIcon = (displayName, width, pathsOrSvg, options) => {
    const viewBoxWidth = width === "1em" ? "20" : width;
    const colorChildren = typeof pathsOrSvg !== "string" && ((options === null || options === void 0 ? void 0 : options.color) || Array.isArray(pathsOrSvg[0])) ? pathsOrSvg.map(renderSvgNode) : void 0;
    const Icon = React3.forwardRef((props, ref) => {
      const styles = useRootStyles();
      const iconState = useIconState(props, { flipInRtl: options === null || options === void 0 ? void 0 : options.flipInRtl });
      const state = {
        ...iconState,
        className: mergeClasses(iconClassName, iconState.className, styles.root),
        ref,
        width,
        height: width,
        viewBox: `0 0 ${viewBoxWidth} ${viewBoxWidth}`,
        xmlns: "http://www.w3.org/2000/svg"
      };
      if (typeof pathsOrSvg === "string") {
        return React3.createElement("svg", { ...state, dangerouslySetInnerHTML: { __html: pathsOrSvg } });
      }
      if (colorChildren) {
        return React3.createElement("svg", state, ...colorChildren);
      }
      return React3.createElement("svg", state, ...pathsOrSvg.map((d) => React3.createElement("path", { d, fill: state.fill })));
    });
    Icon.displayName = displayName;
    return Icon;
  };

  // node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-4.js
  init_define_import_meta_env();
  var Cut20Regular = /* @__PURE__ */ createFluentIcon("Cut20Regular", "20", ["M5.92 2.23a.5.5 0 0 0-.84.54L9.4 9.43l-1.92 2.96a3 3 0 1 0 .78.64L10 10.35l1.74 2.68a3 3 0 1 0 .78-.64L5.92 2.23ZM14 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM4 15a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm7.2-6.49-.6-.92 3.48-5.36a.5.5 0 0 1 .84.54l-3.73 5.74Z"]);

  // node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-7.js
  init_define_import_meta_env();
  var AlignLeft20Regular = /* @__PURE__ */ createFluentIcon("AlignLeft20Regular", "20", ["M3.5 2a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-.5-.5ZM7 11a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H7Zm-1 2a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1ZM5 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Zm2-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H7Z"]);
  var AlignRight20Regular = /* @__PURE__ */ createFluentIcon("AlignRight20Regular", "20", ["M16.5 2c.28 0 .5.22.5.5v15a.5.5 0 0 1-1 0v-15c0-.28.22-.5.5-.5ZM13 11a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1c0-1.1.9-2 2-2h5Zm1 2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-1Zm1-7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V6Zm-2-1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h8Z"]);

  // node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-10.js
  init_define_import_meta_env();
  var Copy20Regular = /* @__PURE__ */ createFluentIcon("Copy20Regular", "20", ["M8 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8ZM7 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4ZM4 6a2 2 0 0 1 1-1.73V14.5A2.5 2.5 0 0 0 7.5 17h6.23A2 2 0 0 1 12 18H7.5A3.5 3.5 0 0 1 4 14.5V6Z"]);

  // node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-22.js
  init_define_import_meta_env();
  var TextAlignCenter20Regular = /* @__PURE__ */ createFluentIcon("TextAlignCenter20Regular", "20", ["M4 4.5c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm-2 5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5ZM6.5 14a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z"]);
  var TextBold20Regular = /* @__PURE__ */ createFluentIcon("TextBold20Regular", "20", ["M5.5 4.25C5.5 3.56 6.06 3 6.75 3h3.5a4 4 0 0 1 3.17 6.44c.9.7 1.58 1.8 1.58 3.31A4.23 4.23 0 0 1 10.75 17h-4c-.69 0-1.25-.56-1.25-1.25V4.25ZM8 11v3.5h2.75c.81 0 1.75-.62 1.75-1.75S11.56 11 10.75 11H8Zm0-2.5h2.25a1.5 1.5 0 1 0 0-3H8v3Z"]);
  var TextItalic20Regular = /* @__PURE__ */ createFluentIcon("TextItalic20Regular", "20", ["M16 3a.5.5 0 0 1 0 1h-3.16L8.23 16h3.27a.5.5 0 0 1 0 1H4a.5.5 0 0 1 0-1h3.16l4.61-12H8.5a.5.5 0 0 1 0-1H16Z"]);
  var TextUnderline20Regular = /* @__PURE__ */ createFluentIcon("TextUnderline20Regular", "20", ["M6 3.5a.5.5 0 0 0-1 0v6.45A5.02 5.02 0 0 0 10 15c2.77 0 5-2.26 5-5.05V3.5a.5.5 0 0 0-1 0v6.45C14 12.2 12.2 14 10 14s-4-1.8-4-4.05V3.5Zm-1 13c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z"]);

  // node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-27.js
  init_define_import_meta_env();
  var ClipboardPaste20Regular = /* @__PURE__ */ createFluentIcon("ClipboardPaste20Regular", "20", ["M4.5 4h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v1a.5.5 0 0 0 1 0v-1c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3c-.65 0-1.2.42-1.41 1H4.5C3.67 3 3 3.67 3 4.5v12c0 .83.67 1.5 1.5 1.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5Zm3 0a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3Zm3 3C9.67 7 9 7.67 9 8.5v8c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-8c0-.83-.67-1.5-1.5-1.5h-5ZM10 8.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v8a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-8Z"]);

  // src/components/ui/Toolbar.tsx
  init_define_import_meta_env();
  var import_react16 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-components/lib/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-jsx-runtime/lib/jsx-runtime.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-jsx-runtime/lib/jsx/createJSX.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-utilities/lib/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-utilities/lib/compose/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-utilities/lib/compose/slot.js
  var slot_exports = {};
  __export(slot_exports, {
    always: () => always,
    optional: () => optional,
    resolveShorthand: () => resolveShorthand
  });
  init_define_import_meta_env();
  var React4 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-utilities/lib/compose/constants.js
  init_define_import_meta_env();
  var SLOT_RENDER_FUNCTION_SYMBOL = /* @__PURE__ */ Symbol.for("fui.slotRenderFunction");
  var SLOT_ELEMENT_TYPE_SYMBOL = /* @__PURE__ */ Symbol.for("fui.slotElementType");
  var SLOT_CLASS_NAME_PROP_SYMBOL = /* @__PURE__ */ Symbol.for("fui.slotClassNameProp");

  // node_modules/@fluentui/react-utilities/lib/compose/slot.js
  function always(value, options) {
    const { defaultProps, elementType } = options;
    const props = resolveShorthand(value);
    const propsWithMetadata = {
      ...defaultProps,
      ...props,
      [SLOT_ELEMENT_TYPE_SYMBOL]: elementType,
      [SLOT_CLASS_NAME_PROP_SYMBOL]: (props === null || props === void 0 ? void 0 : props.className) || (defaultProps === null || defaultProps === void 0 ? void 0 : defaultProps.className)
    };
    if (props && typeof props.children === "function") {
      propsWithMetadata[SLOT_RENDER_FUNCTION_SYMBOL] = props.children;
      propsWithMetadata.children = defaultProps === null || defaultProps === void 0 ? void 0 : defaultProps.children;
    }
    return propsWithMetadata;
  }
  function optional(value, options) {
    if (value === null || value === void 0 && !options.renderByDefault) {
      return void 0;
    }
    return always(value, options);
  }
  function resolveShorthand(value) {
    if (typeof value === "string" || typeof value === "number" || isIterable(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    React4.isValidElement(value)) {
      return {
        children: value
      };
    }
    if (value && typeof value !== "object" && true) {
      console.error(`@fluentui/react-utilities [slot.${resolveShorthand.name}]:
A slot got an invalid value "${value}" (${typeof value}).
A valid value for a slot is a slot shorthand or slot properties object.
Slot shorthands can be strings, numbers, arrays or JSX elements`);
    }
    return value;
  }
  var isIterable = (value) => typeof value === "object" && value !== null && Symbol.iterator in value;

  // node_modules/@fluentui/react-utilities/lib/compose/isSlot.js
  init_define_import_meta_env();
  function isSlot(element) {
    return Boolean(element === null || element === void 0 ? void 0 : element.hasOwnProperty(SLOT_ELEMENT_TYPE_SYMBOL));
  }

  // node_modules/@fluentui/react-utilities/lib/compose/assertSlots.js
  init_define_import_meta_env();
  function assertSlots(state) {
    if (true) {
      const typedState = state;
      for (const slotName of Object.keys(typedState.components)) {
        const slotElement = typedState[slotName];
        if (slotElement === void 0) {
          continue;
        }
        if (!isSlot(slotElement)) {
          typedState[slotName] = always(slotElement, {
            // eslint-disable-next-line @typescript-eslint/no-deprecated
            elementType: typedState.components[slotName]
          });
          console.warn(`@fluentui/react-utilities [${assertSlots.name}]:
"state.${slotName}" is not a slot!
Be sure to create slots properly by using "slot.always" or "slot.optional".`);
        } else {
          const { [SLOT_ELEMENT_TYPE_SYMBOL]: elementType } = slotElement;
          if (elementType !== typedState.components[slotName]) {
            slotElement[SLOT_ELEMENT_TYPE_SYMBOL] = typedState.components[slotName];
            console.warn(`@fluentui/react-utilities [${assertSlots.name}]:
"state.${slotName}" element type differs from "state.components.${slotName}",
${elementType} !== ${typedState.components[slotName]}.
Be sure to create slots properly by using "slot.always" or "slot.optional" with the correct elementType.`);
          }
        }
      }
    }
  }

  // node_modules/@fluentui/react-utilities/lib/compose/getIntrinsicElementProps.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-utilities/lib/utils/getNativeElementProps.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-utilities/lib/utils/properties.js
  init_define_import_meta_env();
  var toObjectMap = (...items) => {
    const result = {};
    for (const item of items) {
      const keys = Array.isArray(item) ? item : Object.keys(item);
      for (const key of keys) {
        result[key] = 1;
      }
    }
    return result;
  };
  var baseElementEvents = toObjectMap([
    "onAuxClick",
    "onAnimationEnd",
    "onAnimationStart",
    "onCopy",
    "onCut",
    "onPaste",
    "onCompositionEnd",
    "onCompositionStart",
    "onCompositionUpdate",
    "onFocus",
    "onFocusCapture",
    "onBlur",
    "onBlurCapture",
    "onChange",
    "onInput",
    "onSubmit",
    "onLoad",
    "onError",
    "onKeyDown",
    "onKeyDownCapture",
    "onKeyPress",
    "onKeyUp",
    "onAbort",
    "onCanPlay",
    "onCanPlayThrough",
    "onDurationChange",
    "onEmptied",
    "onEncrypted",
    "onEnded",
    "onLoadedData",
    "onLoadedMetadata",
    "onLoadStart",
    "onPause",
    "onPlay",
    "onPlaying",
    "onProgress",
    "onRateChange",
    "onSeeked",
    "onSeeking",
    "onStalled",
    "onSuspend",
    "onTimeUpdate",
    "onVolumeChange",
    "onWaiting",
    "onClick",
    "onClickCapture",
    "onContextMenu",
    "onDoubleClick",
    "onDrag",
    "onDragEnd",
    "onDragEnter",
    "onDragExit",
    "onDragLeave",
    "onDragOver",
    "onDragStart",
    "onDrop",
    "onMouseDown",
    "onMouseDownCapture",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseOut",
    "onMouseOver",
    "onMouseUp",
    "onMouseUpCapture",
    "onSelect",
    "onTouchCancel",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "onScroll",
    "onWheel",
    "onPointerCancel",
    "onPointerDown",
    "onPointerEnter",
    "onPointerLeave",
    "onPointerMove",
    "onPointerOut",
    "onPointerOver",
    "onPointerUp",
    "onGotPointerCapture",
    "onLostPointerCapture"
  ]);
  var baseElementProperties = toObjectMap([
    "accessKey",
    "children",
    "className",
    "contentEditable",
    "dir",
    "draggable",
    "hidden",
    "htmlFor",
    "id",
    "lang",
    "popover",
    "focusgroup",
    "focusgroupstart",
    "ref",
    "role",
    "style",
    "tabIndex",
    "title",
    "translate",
    "spellCheck",
    "name"
  ]);
  var microdataProperties = toObjectMap([
    "itemID",
    "itemProp",
    "itemRef",
    "itemScope",
    "itemType"
  ]);
  var htmlElementProperties = toObjectMap(baseElementProperties, baseElementEvents, microdataProperties);
  var labelProperties = toObjectMap(htmlElementProperties, [
    "form"
  ]);
  var audioProperties = toObjectMap(htmlElementProperties, [
    "height",
    "loop",
    "muted",
    "preload",
    "src",
    "width"
  ]);
  var videoProperties = toObjectMap(audioProperties, [
    "poster"
  ]);
  var olProperties = toObjectMap(htmlElementProperties, [
    "start"
  ]);
  var liProperties = toObjectMap(htmlElementProperties, [
    "value"
  ]);
  var anchorProperties = toObjectMap(htmlElementProperties, [
    "download",
    "href",
    "hrefLang",
    "media",
    "referrerPolicy",
    "rel",
    "target",
    "type"
  ]);
  var timeProperties = toObjectMap(htmlElementProperties, [
    "dateTime"
  ]);
  var buttonProperties = toObjectMap(htmlElementProperties, [
    "autoFocus",
    "disabled",
    "form",
    "formAction",
    "formEncType",
    "formMethod",
    "formNoValidate",
    "formTarget",
    "popoverTarget",
    "popoverTargetAction",
    "type",
    "value"
  ]);
  var inputProperties = toObjectMap(buttonProperties, [
    "accept",
    "alt",
    "autoCorrect",
    "autoCapitalize",
    "autoComplete",
    "checked",
    "dirname",
    "form",
    "height",
    "inputMode",
    "list",
    "max",
    "maxLength",
    "min",
    "minLength",
    "multiple",
    "pattern",
    "placeholder",
    "readOnly",
    "required",
    "src",
    "step",
    "size",
    "type",
    "value",
    "width"
  ]);
  var textAreaProperties = toObjectMap(buttonProperties, [
    "autoCapitalize",
    "cols",
    "dirname",
    "form",
    "maxLength",
    "placeholder",
    "readOnly",
    "required",
    "rows",
    "wrap"
  ]);
  var selectProperties = toObjectMap(buttonProperties, [
    "form",
    "multiple",
    "required"
  ]);
  var optionProperties = toObjectMap(htmlElementProperties, [
    "selected",
    "value"
  ]);
  var tableProperties = toObjectMap(htmlElementProperties, [
    "cellPadding",
    "cellSpacing"
  ]);
  var trProperties = htmlElementProperties;
  var thProperties = toObjectMap(htmlElementProperties, [
    "colSpan",
    "rowSpan",
    "scope"
  ]);
  var tdProperties = toObjectMap(htmlElementProperties, [
    "colSpan",
    "headers",
    "rowSpan",
    "scope"
  ]);
  var colGroupProperties = toObjectMap(htmlElementProperties, [
    "span"
  ]);
  var colProperties = toObjectMap(htmlElementProperties, [
    "span"
  ]);
  var fieldsetProperties = toObjectMap(htmlElementProperties, [
    "disabled",
    "form"
  ]);
  var formProperties = toObjectMap(htmlElementProperties, [
    "acceptCharset",
    "action",
    "encType",
    "encType",
    "method",
    "noValidate",
    "target"
  ]);
  var iframeProperties = toObjectMap(htmlElementProperties, [
    "allow",
    "allowFullScreen",
    "allowPaymentRequest",
    "allowTransparency",
    "csp",
    "height",
    "importance",
    "referrerPolicy",
    "sandbox",
    "src",
    "srcDoc",
    "width"
  ]);
  var imgProperties = toObjectMap(htmlElementProperties, [
    "alt",
    "crossOrigin",
    "height",
    "src",
    "srcSet",
    "useMap",
    "width"
  ]);
  var dialogProperties = toObjectMap(htmlElementProperties, [
    "open",
    "onCancel",
    "onClose"
  ]);
  function getNativeProps(props, allowedPropNames, excludedPropNames) {
    const isArray = Array.isArray(allowedPropNames);
    const result = {};
    const keys = Object.keys(props);
    for (const key of keys) {
      const isNativeProp = !isArray && allowedPropNames[key] || isArray && allowedPropNames.indexOf(key) >= 0 || key.indexOf("data-") === 0 || key.indexOf("aria-") === 0;
      if (isNativeProp && (!excludedPropNames || (excludedPropNames === null || excludedPropNames === void 0 ? void 0 : excludedPropNames.indexOf(key)) === -1)) {
        result[key] = props[key];
      }
    }
    return result;
  }

  // node_modules/@fluentui/react-utilities/lib/utils/getNativeElementProps.js
  var nativeElementMap = {
    label: labelProperties,
    audio: audioProperties,
    video: videoProperties,
    ol: olProperties,
    li: liProperties,
    a: anchorProperties,
    button: buttonProperties,
    input: inputProperties,
    textarea: textAreaProperties,
    select: selectProperties,
    option: optionProperties,
    table: tableProperties,
    tr: trProperties,
    th: thProperties,
    td: tdProperties,
    colGroup: colGroupProperties,
    col: colProperties,
    fieldset: fieldsetProperties,
    form: formProperties,
    iframe: iframeProperties,
    img: imgProperties,
    time: timeProperties,
    dialog: dialogProperties
  };
  function getNativeElementProps(tagName, props, excludedPropNames) {
    const allowedPropNames = tagName && nativeElementMap[tagName] || htmlElementProperties;
    allowedPropNames.as = 1;
    return getNativeProps(props, allowedPropNames, excludedPropNames);
  }

  // node_modules/@fluentui/react-utilities/lib/compose/getIntrinsicElementProps.js
  var getIntrinsicElementProps = (tagName, props, excludedPropNames) => {
    var _props_as;
    return getNativeElementProps((_props_as = props.as) !== null && _props_as !== void 0 ? _props_as : tagName, props, excludedPropNames);
  };

  // node_modules/@fluentui/react-utilities/lib/hooks/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/ProviderContext.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/ProviderContext/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/ProviderContext/ProviderContext.js
  init_define_import_meta_env();
  var React5 = __toESM(require_react_shim());
  var ProviderContext = React5.createContext(void 0);
  var providerContextDefaultValue = {
    // eslint-disable-next-line @nx/workspace-no-restricted-globals -- expected ignore ( SSR friendly acquisition of globals )
    targetDocument: typeof document === "object" ? document : void 0,
    dir: "ltr"
  };
  var Provider = ProviderContext.Provider;
  function useFluent() {
    var _React_useContext;
    return (_React_useContext = React5.useContext(ProviderContext)) !== null && _React_useContext !== void 0 ? _React_useContext : providerContextDefaultValue;
  }

  // node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/CustomStyleHooksContext.js
  init_define_import_meta_env();
  var React6 = __toESM(require_react_shim());
  var CustomStyleHooksContext = React6.createContext(void 0);
  var noop = () => {
  };
  var CustomStyleHooksProvider = CustomStyleHooksContext.Provider;
  var useCustomStyleHook = (hook) => {
    var _React_useContext;
    var _React_useContext_hook;
    return (_React_useContext_hook = (_React_useContext = React6.useContext(CustomStyleHooksContext)) === null || _React_useContext === void 0 ? void 0 : _React_useContext[hook]) !== null && _React_useContext_hook !== void 0 ? _React_useContext_hook : noop;
  };

  // node_modules/@fluentui/react-utilities/lib/hooks/useControllableState.js
  init_define_import_meta_env();
  var React7 = __toESM(require_react_shim());
  function isFactoryDispatch(newState) {
    return typeof newState === "function";
  }
  var useControllableState = (options) => {
    "use no memo";
    if (true) {
      if (options.state !== void 0 && options.defaultState !== void 0) {
        console.error(`@fluentui/react-utilities [useControllableState]:
A component must be either controlled or uncontrolled (specify either the state or the defaultState, but not both).
Decide between using a controlled or uncontrolled component and remove one of this props.
More info: https://reactjs.org/link/controlled-components
${new Error().stack}`);
      }
    }
    const [internalState, setInternalState] = React7.useState(() => {
      if (options.defaultState === void 0) {
        return options.initialState;
      }
      return isInitializer(options.defaultState) ? options.defaultState() : options.defaultState;
    });
    const stateValueRef = React7.useRef(options.state);
    React7.useEffect(() => {
      stateValueRef.current = options.state;
    }, [
      options.state
    ]);
    const setControlledState = React7.useCallback((newState) => {
      if (isFactoryDispatch(newState)) {
        newState(stateValueRef.current);
      }
    }, []);
    return useIsControlled(options.state) ? [
      options.state,
      setControlledState
    ] : [
      internalState,
      setInternalState
    ];
  };
  function isInitializer(value) {
    return typeof value === "function";
  }
  var useIsControlled = (controlledValue) => {
    "use no memo";
    const [isControlled] = React7.useState(() => controlledValue !== void 0);
    if (true) {
      React7.useEffect(() => {
        if (isControlled !== (controlledValue !== void 0)) {
          const error = new Error();
          const controlWarning = isControlled ? "a controlled value to be uncontrolled" : "an uncontrolled value to be controlled";
          const undefinedWarning = isControlled ? "defined to an undefined" : "undefined to a defined";
          console.error(`@fluentui/react-utilities [useControllableState]:
A component is changing ${controlWarning}. This is likely caused by the value changing from ${undefinedWarning} value, which should not happen.
Decide between using a controlled or uncontrolled input element for the lifetime of the component.
More info: https://reactjs.org/link/controlled-components
${error.stack}`);
        }
      }, [
        isControlled,
        controlledValue
      ]);
    }
    return isControlled;
  };

  // node_modules/@fluentui/react-utilities/lib/hooks/useEventCallback.js
  init_define_import_meta_env();
  var React10 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-utilities/lib/hooks/useIsomorphicLayoutEffect.js
  init_define_import_meta_env();
  var React9 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-utilities/lib/ssr/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-utilities/lib/ssr/canUseDOM.js
  init_define_import_meta_env();
  function canUseDOM2() {
    return (
      /* eslint-disable @nx/workspace-no-restricted-globals -- expected ignore ( SSR friendly acquisition of globals )*/
      typeof window !== "undefined" && !!(window.document && // eslint-disable-next-line @typescript-eslint/no-deprecated
      window.document.createElement)
    );
  }

  // node_modules/@fluentui/react-utilities/lib/ssr/SSRContext.js
  init_define_import_meta_env();
  var React8 = __toESM(require_react_shim());
  var defaultSSRContextValue = {
    current: 0
  };
  var SSRContext = /* @__PURE__ */ React8.createContext(void 0);
  function useSSRContext() {
    var _React_useContext;
    return (_React_useContext = React8.useContext(SSRContext)) !== null && _React_useContext !== void 0 ? _React_useContext : defaultSSRContextValue;
  }

  // node_modules/@fluentui/react-utilities/lib/hooks/useIsomorphicLayoutEffect.js
  var useIsomorphicLayoutEffect = canUseDOM2() ? React9.useLayoutEffect : React9.useEffect;

  // node_modules/@fluentui/react-utilities/lib/hooks/useEventCallback.js
  var useEventCallback = (fn) => {
    const callbackRef = React10.useRef(() => {
      throw new Error("Cannot call an event handler while rendering");
    });
    useIsomorphicLayoutEffect(() => {
      callbackRef.current = fn;
    }, [
      fn
    ]);
    return React10.useCallback((...args) => {
      const callback = callbackRef.current;
      return callback(...args);
    }, [
      callbackRef
    ]);
  };

  // node_modules/@fluentui/react-utilities/lib/hooks/useId.js
  init_define_import_meta_env();
  var React11 = __toESM(require_react_shim());
  var IdPrefixContext = React11.createContext(void 0);
  var IdPrefixProvider = IdPrefixContext.Provider;
  function useIdPrefix() {
    return React11.useContext(IdPrefixContext) || "";
  }
  function useId2(prefix = "fui-", providedId) {
    "use no memo";
    const contextValue = useSSRContext();
    const idPrefix = useIdPrefix();
    const _useId = React11["useId"];
    if (_useId) {
      const generatedId = _useId();
      const escapedId = React11.useMemo(() => generatedId.replace(/:/g, ""), [
        generatedId
      ]);
      return providedId || `${idPrefix}${prefix}${escapedId}`;
    }
    return React11.useMemo(() => {
      if (providedId) {
        return providedId;
      }
      return `${idPrefix}${prefix}${++contextValue.current}`;
    }, [
      idPrefix,
      prefix,
      providedId,
      contextValue
    ]);
  }

  // node_modules/@fluentui/react-utilities/lib/hooks/usePrevious.js
  init_define_import_meta_env();
  var React12 = __toESM(require_react_shim());
  var usePrevious = (value) => {
    const ref = React12.useRef(null);
    React12.useEffect(() => {
      ref.current = value;
    }, [
      value
    ]);
    return ref.current;
  };

  // node_modules/@fluentui/react-utilities/lib/utils/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-utilities/lib/utils/mergeCallbacks.js
  init_define_import_meta_env();
  function mergeCallbacks(callback1, callback2) {
    return (...args) => {
      callback1 === null || callback1 === void 0 ? void 0 : callback1(...args);
      callback2 === null || callback2 === void 0 ? void 0 : callback2(...args);
    };
  }

  // node_modules/@fluentui/react-utilities/lib/virtualParent/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-utilities/lib/virtualParent/getParent.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-utilities/lib/virtualParent/isVirtualElement.js
  init_define_import_meta_env();
  function isVirtualElement(element) {
    return element && !!element._virtual;
  }

  // node_modules/@fluentui/react-utilities/lib/virtualParent/getParent.js
  function getVirtualParent(child) {
    return isVirtualElement(child) ? child._virtual.parent || null : null;
  }
  function getParent(child, options = {}) {
    if (!child) {
      return null;
    }
    if (!options.skipVirtual) {
      const virtualParent = getVirtualParent(child);
      if (virtualParent) {
        return virtualParent;
      }
    }
    const parent = child.parentNode;
    if (parent && parent.nodeType === 11) {
      return parent.host;
    }
    return parent;
  }

  // node_modules/@fluentui/react-jsx-runtime/lib/utils/createCompatSlotComponent.js
  init_define_import_meta_env();
  function createCompatSlotComponent(type, props) {
    return {
      ...props,
      [SLOT_ELEMENT_TYPE_SYMBOL]: type
    };
  }

  // node_modules/@fluentui/react-jsx-runtime/lib/utils/warnIfElementTypeIsInvalid.js
  init_define_import_meta_env();
  function warnIfElementTypeIsInvalid(type) {
    if (typeof type === "object" && type !== null && // eslint-disable-next-line dot-notation
    type["$$typeof"] === void 0) {
      console.error(`@fluentui/react-jsx-runtime:
Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: ${type}.

If this happened in a slot of Fluent UI component, you might be facing package resolution issues.
Please make sure you don't have multiple versions of "@fluentui/react-utilities" installed in your dependencies or sub-dependencies.
You can check this by searching up for matching entries in a lockfile produced by your package manager (yarn.lock, pnpm-lock.yaml or package-lock.json).`);
    }
  }

  // node_modules/@fluentui/react-jsx-runtime/lib/jsx/createJSX.js
  function createJSX(runtime, slotRuntime) {
    return function jsx4(type, overrideProps, key, source, self) {
      if (isSlot(overrideProps)) {
        return slotRuntime(createCompatSlotComponent(type, overrideProps), null, key, source, self);
      }
      if (isSlot(type)) {
        return slotRuntime(type, overrideProps, key, source, self);
      }
      warnIfElementTypeIsInvalid(type);
      return runtime(type, overrideProps, key, source, self);
    };
  }

  // node_modules/@fluentui/react-jsx-runtime/lib/jsx/jsxSlot.js
  init_define_import_meta_env();
  var React13 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-jsx-runtime/lib/utils/getMetadataFromSlotComponent.js
  init_define_import_meta_env();
  function getMetadataFromSlotComponent(type) {
    const { as, [SLOT_CLASS_NAME_PROP_SYMBOL]: _classNameProp, [SLOT_ELEMENT_TYPE_SYMBOL]: baseElementType, [SLOT_RENDER_FUNCTION_SYMBOL]: renderFunction, ...propsWithoutMetadata } = type;
    const props = propsWithoutMetadata;
    const elementType = typeof baseElementType === "string" ? as !== null && as !== void 0 ? as : baseElementType : baseElementType;
    if (typeof elementType !== "string" && as) {
      props.as = as;
    }
    return {
      elementType,
      props,
      renderFunction
    };
  }

  // node_modules/@fluentui/react-jsx-runtime/lib/utils/Runtime.js
  init_define_import_meta_env();
  var ReactRuntime = __toESM(require_react_shim());
  var Runtime = ReactRuntime;

  // node_modules/@fluentui/react-jsx-runtime/lib/jsx/jsxSlot.js
  var jsxSlot = (type, overrideProps, key) => {
    const { elementType, renderFunction, props: slotProps } = getMetadataFromSlotComponent(type);
    const props = {
      ...slotProps,
      ...overrideProps
    };
    if (renderFunction) {
      return Runtime.jsx(React13.Fragment, {
        children: renderFunction(elementType, props)
      }, key);
    }
    return Runtime.jsx(elementType, props, key);
  };

  // node_modules/@fluentui/react-jsx-runtime/lib/jsx/jsxsSlot.js
  init_define_import_meta_env();
  var React14 = __toESM(require_react_shim());
  var jsxsSlot = (type, overrideProps, key) => {
    const { elementType, renderFunction, props: slotProps } = getMetadataFromSlotComponent(type);
    const props = {
      ...slotProps,
      ...overrideProps
    };
    if (renderFunction) {
      return Runtime.jsx(React14.Fragment, {
        children: renderFunction(elementType, {
          ...props,
          children: Runtime.jsxs(React14.Fragment, {
            children: props.children
          }, void 0)
        })
      }, key);
    }
    return Runtime.jsxs(elementType, props, key);
  };

  // node_modules/@fluentui/react-jsx-runtime/lib/jsx-runtime.js
  var import_react8 = __toESM(require_react_shim());
  var jsx = createJSX(Runtime.jsx, jsxSlot);
  var jsxs = createJSX(Runtime.jsxs, jsxsSlot);

  // node_modules/@fluentui/react-tabster/lib/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-tabster/lib/hooks/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-tabster/lib/hooks/useArrowNavigationGroup.js
  init_define_import_meta_env();

  // node_modules/tabster/dist/esm/index.js
  init_define_import_meta_env();

  // node_modules/tabster/dist/esm/Tabster.js
  init_define_import_meta_env();

  // node_modules/tabster/dist/esm/Focusable.js
  init_define_import_meta_env();

  // node_modules/tabster/dist/esm/Instance.js
  init_define_import_meta_env();

  // node_modules/tabster/dist/esm/Consts.js
  init_define_import_meta_env();
  var TABSTER_ATTRIBUTE_NAME = "data-tabster";
  var TABSTER_DUMMY_INPUT_ATTRIBUTE_NAME = "data-tabster-dummy";
  var FOCUSABLE_SELECTOR = `:is(${[
    "a[href]",
    "button",
    "input",
    "select",
    "textarea",
    "*[tabindex]",
    "*[contenteditable]",
    "details > summary",
    "audio[controls]",
    "video[controls]"
  ].join(", ")}):not(:disabled)`;
  var AsyncFocusSources = {
    EscapeGroupper: 1,
    Restorer: 2,
    Deloser: 3
  };
  var Visibilities = {
    Invisible: 0,
    PartiallyVisible: 1,
    Visible: 2
  };
  var MoverDirections = {
    Both: 0,
    // Default, both left/up keys move to the previous, right/down move to the next.
    Vertical: 1,
    // Only up/down arrows move to the next/previous.
    Horizontal: 2,
    // Only left/right arrows move to the next/previous.
    Grid: 3,
    // Two-dimentional movement depending on the visual placement.
    GridLinear: 4
    // Two-dimentional movement depending on the visual placement. Allows linear movement.
  };
  var MoverKeys = {
    ArrowUp: 1,
    ArrowDown: 2,
    ArrowLeft: 3,
    ArrowRight: 4,
    PageUp: 5,
    PageDown: 6,
    Home: 7,
    End: 8
  };
  var SysDummyInputsPositions = {
    Auto: 0,
    // Tabster will place dummy inputs depending on the container tag name and on the default behaviour.
    Inside: 1,
    // Tabster will always place dummy inputs inside the container.
    Outside: 2
    // Tabster will always place dummy inputs outside of the container.
  };

  // node_modules/tabster/dist/esm/Instance.js
  function getTabsterOnElement(tabster, element) {
    return tabster.storageEntry(element)?.tabster;
  }
  function updateTabsterByAttribute(tabster, element, dispose) {
    const newAttrValue = dispose || tabster._noop ? void 0 : element.getAttribute(TABSTER_ATTRIBUTE_NAME);
    let entry = tabster.storageEntry(element);
    let newAttr;
    if (newAttrValue) {
      if (newAttrValue !== entry?.attr?.string) {
        try {
          const newValue = JSON.parse(newAttrValue);
          if (typeof newValue !== "object") {
            throw new Error(`Value is not a JSON object, got '${newAttrValue}'.`);
          }
          newAttr = {
            string: newAttrValue,
            object: newValue
          };
        } catch (e) {
          if (true) {
            console.error(`data-tabster attribute error: ${e}`, element);
          }
        }
      } else {
        return;
      }
    } else if (!entry) {
      return;
    }
    if (!entry) {
      entry = tabster.storageEntry(element, true);
    }
    if (!entry.tabster) {
      entry.tabster = {};
    }
    const tabsterOnElement = entry.tabster || {};
    const oldTabsterProps = entry.attr?.object || {};
    const newTabsterProps = newAttr?.object || {};
    for (const key of Object.keys(oldTabsterProps)) {
      if (!newTabsterProps[key]) {
        if (key === "root") {
          const root = tabsterOnElement[key];
          if (root) {
            tabster.root.onRoot(root, true);
          }
        }
        switch (key) {
          case "deloser":
          case "root":
          case "groupper":
          case "modalizer":
          case "restorer":
          case "mover":
            const part = tabsterOnElement[key];
            if (part) {
              part.dispose();
              delete tabsterOnElement[key];
            }
            break;
          case "observed":
            delete tabsterOnElement[key];
            if (tabster.observedElement) {
              tabster.observedElement.onObservedElementUpdate(element);
            }
            break;
          case "focusable":
          case "outline":
          case "uncontrolled":
          case "sys":
            delete tabsterOnElement[key];
            break;
        }
      }
    }
    for (const key of Object.keys(newTabsterProps)) {
      const sys = newTabsterProps.sys;
      switch (key) {
        case "root":
          if (tabsterOnElement.root) {
            tabsterOnElement.root.setProps(newTabsterProps.root);
          } else {
            tabsterOnElement.root = tabster.root.createRoot(element, newTabsterProps.root, sys);
          }
          tabster.root.onRoot(tabsterOnElement.root);
          break;
        case "focusable":
          tabsterOnElement.focusable = newTabsterProps.focusable;
          break;
        case "observed":
          if (tabster.observedElement) {
            tabsterOnElement.observed = newTabsterProps.observed;
            tabster.observedElement.onObservedElementUpdate(element);
          } else if (true) {
            console.error("ObservedElement API used before initialization, please call `getObservedElement()`");
          }
          break;
        case "uncontrolled":
          tabsterOnElement.uncontrolled = newTabsterProps.uncontrolled;
          break;
        case "outline":
          if (tabster.outline) {
            tabsterOnElement.outline = newTabsterProps.outline;
          } else if (true) {
            console.error("Outline API used before initialization, please call `getOutline()`");
          }
          break;
        case "sys":
          tabsterOnElement.sys = newTabsterProps.sys;
          break;
        default: {
          const handler = tabster.attrHandlers.get(key);
          if (handler) {
            tabsterOnElement[key] = handler(element, tabsterOnElement[key], newTabsterProps[key], oldTabsterProps?.[key], sys);
          } else if (true) {
            console.error(`${key} API used before initialization, please call \`get${key[0].toUpperCase() + key.slice(1)}()\``);
          }
        }
      }
    }
    if (newAttr) {
      entry.attr = newAttr;
    } else {
      if (Object.keys(tabsterOnElement).length === 0) {
        delete entry.tabster;
        delete entry.attr;
      }
      tabster.storageEntry(element, false);
    }
  }

  // node_modules/tabster/dist/esm/Root.js
  init_define_import_meta_env();

  // node_modules/keyborg/dist/index.js
  init_define_import_meta_env();
  var addEventListener = (target, type, handler) => {
    target.addEventListener(type, handler, true);
  };
  var removeEventListener = (target, type, handler) => {
    target.removeEventListener(type, handler, true);
  };
  var KEYBORG_FOCUSIN = "keyborg:focusin";
  var KEYBORG_FOCUSOUT = "keyborg:focusout";
  var FOCUS_IN_HANDLER = 0;
  var FOCUS_OUT_HANDLER = 1;
  var SHADOW_TARGETS = 2;
  var LAST_FOCUSED_PROGRAMMATICALLY = 3;
  function canOverrideNativeFocus(win) {
    const HTMLElement = win.HTMLElement;
    const origFocus = HTMLElement.prototype.focus;
    let isCustomFocusCalled = false;
    HTMLElement.prototype.focus = function focus() {
      isCustomFocusCalled = true;
    };
    win.document.createElement("button").focus();
    HTMLElement.prototype.focus = origFocus;
    return isCustomFocusCalled;
  }
  var _canOverrideNativeFocus = false;
  function nativeFocus(element) {
    const focus = element.focus;
    if (focus.__keyborgNativeFocus) focus.__keyborgNativeFocus.call(element);
    else element.focus();
  }
  function setupFocusEvent(win) {
    const kwin = win;
    const doc = kwin.document;
    const proto = kwin.HTMLElement.prototype;
    if (!_canOverrideNativeFocus) _canOverrideNativeFocus = canOverrideNativeFocus(kwin);
    const origFocus = proto.focus;
    if (origFocus.__keyborgNativeFocus) return;
    proto.focus = focus;
    const shadowTargets = /* @__PURE__ */ new Set();
    const focusOutHandler = (e) => {
      const target = e.target;
      if (!target) return;
      const event = new CustomEvent(KEYBORG_FOCUSOUT, {
        cancelable: true,
        bubbles: true,
        composed: true,
        detail: { originalEvent: e }
      });
      target.dispatchEvent(event);
    };
    const focusInHandler = (e) => {
      const target = e.target;
      if (!target) return;
      let node = e.composedPath()[0];
      const currentShadows = /* @__PURE__ */ new Set();
      while (node) if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        currentShadows.add(node);
        node = node.host;
      } else node = node.parentNode;
      for (const shadowRootWeakRef of shadowTargets) {
        const shadowRoot = shadowRootWeakRef.deref();
        if (!shadowRoot || !currentShadows.has(shadowRoot)) {
          shadowTargets.delete(shadowRootWeakRef);
          if (shadowRoot) {
            removeEventListener(shadowRoot, "focusin", focusInHandler);
            removeEventListener(shadowRoot, "focusout", focusOutHandler);
          }
        }
      }
      onFocusIn(target, e.relatedTarget || void 0);
    };
    const onFocusIn = (target, relatedTarget, originalEvent) => {
      const shadowRoot = target.shadowRoot;
      if (shadowRoot) {
        for (const shadowRootWeakRef of shadowTargets) if (shadowRootWeakRef.deref() === shadowRoot) return;
        addEventListener(shadowRoot, "focusin", focusInHandler);
        addEventListener(shadowRoot, "focusout", focusOutHandler);
        shadowTargets.add(new WeakRef(shadowRoot));
        return;
      }
      const details = {
        relatedTarget,
        originalEvent
      };
      const event = new CustomEvent(KEYBORG_FOCUSIN, {
        cancelable: true,
        bubbles: true,
        composed: true,
        detail: details
      });
      event.details = details;
      if (_canOverrideNativeFocus || data[LAST_FOCUSED_PROGRAMMATICALLY]) {
        details.isFocusedProgrammatically = target === data[LAST_FOCUSED_PROGRAMMATICALLY]?.deref();
        data[LAST_FOCUSED_PROGRAMMATICALLY] = void 0;
      }
      target.dispatchEvent(event);
    };
    const data = [
      focusInHandler,
      focusOutHandler,
      shadowTargets
    ];
    kwin.__keyborgData = data;
    addEventListener(doc, "focusin", focusInHandler);
    addEventListener(doc, "focusout", focusOutHandler);
    function focus() {
      const d = kwin.__keyborgData;
      if (d) d[LAST_FOCUSED_PROGRAMMATICALLY] = new WeakRef(this);
      return origFocus.apply(this, arguments);
    }
    let activeElement = doc.activeElement;
    while (activeElement && activeElement.shadowRoot) {
      onFocusIn(activeElement);
      activeElement = activeElement.shadowRoot.activeElement;
    }
    focus.__keyborgNativeFocus = origFocus;
  }
  function disposeFocusEvent(win) {
    const kwin = win;
    const proto = kwin.HTMLElement.prototype;
    const origFocus = proto.focus.__keyborgNativeFocus;
    const data = kwin.__keyborgData;
    if (data) {
      const doc = kwin.document;
      removeEventListener(doc, "focusin", data[FOCUS_IN_HANDLER]);
      removeEventListener(doc, "focusout", data[FOCUS_OUT_HANDLER]);
      for (const shadowRootWeakRef of data[SHADOW_TARGETS]) {
        const shadowRoot = shadowRootWeakRef.deref();
        if (shadowRoot) {
          removeEventListener(shadowRoot, "focusin", data[FOCUS_IN_HANDLER]);
          removeEventListener(shadowRoot, "focusout", data[FOCUS_OUT_HANDLER]);
        }
      }
      data[SHADOW_TARGETS].clear();
      delete kwin.__keyborgData;
    }
    if (origFocus) proto.focus = origFocus;
  }
  var _dismissTimeout = 500;
  var _lastId = 0;
  function createKeyborgCore(targetWindow, props) {
    let currentTargetWindow = targetWindow;
    let isNavigating = false;
    let isMouseOrTouchUsedTimer;
    let dismissTimer;
    let triggerKeys;
    let dismissKeys;
    if (props) {
      if (props.triggerKeys?.length) triggerKeys = new Set(props.triggerKeys);
      if (props.dismissKeys?.length) dismissKeys = new Set(props.dismissKeys);
    }
    const broadcast = () => {
      const refs = currentTargetWindow?.__keyborg?.refs;
      if (refs) for (const id of Object.keys(refs)) refs[id]._cb.forEach((cb) => cb(isNavigating));
    };
    const setNavigating = (val) => {
      if (isNavigating !== val) {
        isNavigating = val;
        broadcast();
      }
    };
    const shouldTrigger = (e) => {
      if (e.key === "Tab") return true;
      const active = currentTargetWindow?.document.activeElement;
      const isTriggerKey = !triggerKeys || triggerKeys.has(e.keyCode);
      const isEditable = active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA" || active.isContentEditable);
      return isTriggerKey && !isEditable;
    };
    const shouldDismiss = (e) => {
      return !!dismissKeys?.has(e.keyCode);
    };
    const scheduleDismiss = () => {
      const targetWindow2 = currentTargetWindow;
      if (!targetWindow2) return;
      if (dismissTimer) {
        targetWindow2.clearTimeout(dismissTimer);
        dismissTimer = void 0;
      }
      const previousActiveElement = targetWindow2.document.activeElement;
      dismissTimer = targetWindow2.setTimeout(() => {
        dismissTimer = void 0;
        const currentActiveElement = targetWindow2.document.activeElement;
        if (previousActiveElement && currentActiveElement && previousActiveElement === currentActiveElement) setNavigating(false);
      }, _dismissTimeout);
    };
    const onFocusIn = (e) => {
      if (isMouseOrTouchUsedTimer) return;
      if (isNavigating) return;
      const details = e.detail;
      if (!details.relatedTarget) return;
      if (details.isFocusedProgrammatically || details.isFocusedProgrammatically === void 0) return;
      setNavigating(true);
    };
    const onMouseOrTouch = () => {
      if (currentTargetWindow) {
        if (isMouseOrTouchUsedTimer) currentTargetWindow.clearTimeout(isMouseOrTouchUsedTimer);
        isMouseOrTouchUsedTimer = currentTargetWindow.setTimeout(() => {
          isMouseOrTouchUsedTimer = void 0;
        }, 1e3);
      }
      setNavigating(false);
    };
    const onMouseDown = (e) => {
      if (e.buttons === 0 || e.clientX === 0 && e.clientY === 0 && e.screenX === 0 && e.screenY === 0) return;
      onMouseOrTouch();
    };
    const onKeyDown = (e) => {
      if (isNavigating) {
        if (shouldDismiss(e)) scheduleDismiss();
      } else if (shouldTrigger(e)) setNavigating(true);
    };
    const targetDocument = targetWindow.document;
    addEventListener(targetDocument, KEYBORG_FOCUSIN, onFocusIn);
    addEventListener(targetDocument, "mousedown", onMouseDown);
    addEventListener(targetWindow, "keydown", onKeyDown);
    addEventListener(targetDocument, "touchstart", onMouseOrTouch);
    addEventListener(targetDocument, "touchend", onMouseOrTouch);
    addEventListener(targetDocument, "touchcancel", onMouseOrTouch);
    setupFocusEvent(targetWindow);
    const dispose = () => {
      if (!currentTargetWindow) return;
      if (isMouseOrTouchUsedTimer) {
        currentTargetWindow.clearTimeout(isMouseOrTouchUsedTimer);
        isMouseOrTouchUsedTimer = void 0;
      }
      if (dismissTimer) {
        currentTargetWindow.clearTimeout(dismissTimer);
        dismissTimer = void 0;
      }
      disposeFocusEvent(currentTargetWindow);
      const targetDocument2 = currentTargetWindow.document;
      removeEventListener(targetDocument2, KEYBORG_FOCUSIN, onFocusIn);
      removeEventListener(targetDocument2, "mousedown", onMouseDown);
      removeEventListener(currentTargetWindow, "keydown", onKeyDown);
      removeEventListener(targetDocument2, "touchstart", onMouseOrTouch);
      removeEventListener(targetDocument2, "touchend", onMouseOrTouch);
      removeEventListener(targetDocument2, "touchcancel", onMouseOrTouch);
      currentTargetWindow = void 0;
    };
    return {
      dispose,
      get isNavigatingWithKeyboard() {
        return isNavigating;
      },
      set isNavigatingWithKeyboard(val) {
        setNavigating(val);
      }
    };
  }
  function createKeyborg(win, props) {
    const kwin = win;
    const id = "k" + ++_lastId;
    let localWin = kwin;
    let core;
    const callbacks = [];
    const existing = kwin.__keyborg;
    if (existing) core = existing.core;
    else core = createKeyborgCore(kwin, props);
    const instance = {
      isNavigatingWithKeyboard() {
        return !!core?.isNavigatingWithKeyboard;
      },
      subscribe(callback) {
        callbacks.push(callback);
      },
      unsubscribe(callback) {
        const index = callbacks.indexOf(callback);
        if (index >= 0) callbacks.splice(index, 1);
      },
      setVal(val) {
        if (core) core.isNavigatingWithKeyboard = val;
      },
      _cb: callbacks,
      dispose() {
        const wkb = localWin?.__keyborg;
        if (wkb?.refs[id]) {
          delete wkb.refs[id];
          if (Object.keys(wkb.refs).length === 0) {
            wkb.core.dispose();
            delete localWin.__keyborg;
          }
        } else if (true) console.error(`Keyborg instance ${id} is being disposed incorrectly.`);
        callbacks.length = 0;
        core = void 0;
        localWin = void 0;
      }
    };
    if (existing) existing.refs[id] = instance;
    else kwin.__keyborg = {
      core,
      refs: { [id]: instance }
    };
    return instance;
  }
  function disposeKeyborg(instance) {
    instance.dispose();
  }

  // node_modules/tabster/dist/esm/Events.js
  init_define_import_meta_env();
  var TabsterFocusInEventName = "tabster:focusin";
  var TabsterFocusOutEventName = "tabster:focusout";
  var TabsterMoveFocusEventName = "tabster:movefocus";
  var MoverStateEventName = "tabster:mover:state";
  var MoverMoveFocusEventName = "tabster:mover:movefocus";
  var MoverMemorizedElementEventName = "tabster:mover:memorized-element";
  var RootFocusEventName = "tabster:root:focus";
  var RootBlurEventName = "tabster:root:blur";
  var CustomEvent_ = typeof CustomEvent !== "undefined" ? CustomEvent : function() {
  };
  var TabsterCustomEvent = class extends CustomEvent_ {
    /**
     * @deprecated use `detail`.
     */
    details;
    constructor(type, detail) {
      super(type, {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail
      });
      this.details = detail;
    }
  };
  var TabsterFocusInEvent = class extends TabsterCustomEvent {
    constructor(detail) {
      super(TabsterFocusInEventName, detail);
    }
  };
  var TabsterFocusOutEvent = class extends TabsterCustomEvent {
    constructor(detail) {
      super(TabsterFocusOutEventName, detail);
    }
  };
  var TabsterMoveFocusEvent = class extends TabsterCustomEvent {
    constructor(detail) {
      super(TabsterMoveFocusEventName, detail);
    }
  };
  var MoverStateEvent = class extends TabsterCustomEvent {
    constructor(detail) {
      super(MoverStateEventName, detail);
    }
  };
  var RootFocusEvent = class extends TabsterCustomEvent {
    constructor(detail) {
      super(RootFocusEventName, detail);
    }
  };
  var RootBlurEvent = class extends TabsterCustomEvent {
    constructor(detail) {
      super(RootBlurEventName, detail);
    }
  };

  // node_modules/tabster/dist/esm/DummyInput.js
  init_define_import_meta_env();

  // node_modules/tabster/dist/esm/DOMAPI.js
  init_define_import_meta_env();
  var _createMutationObserver = (callback) => new MutationObserver(callback);
  var _createTreeWalker = (doc, root, whatToShow, filter) => doc.createTreeWalker(root, whatToShow, filter);
  var _getParentNode = (node) => node ? node.parentNode : null;
  var _getParentElement = (element) => element ? element.parentElement : null;
  var _nodeContains = (parent, child) => !!(child && parent?.contains(child));
  var _getActiveElement = (doc) => doc.activeElement;
  var _querySelector = (element, selector) => element.querySelector(selector);
  var _querySelectorAll = (element, selector) => Array.prototype.slice.call(element.querySelectorAll(selector), 0);
  var _getElementById = (doc, id) => doc.getElementById(id);
  var _getFirstChild = (node) => node?.firstChild || null;
  var _getLastChild = (node) => node?.lastChild || null;
  var _getNextSibling = (node) => node?.nextSibling || null;
  var _getPreviousSibling = (node) => node?.previousSibling || null;
  var _getFirstElementChild = (element) => element?.firstElementChild || null;
  var _getLastElementChild = (element) => element?.lastElementChild || null;
  var _getNextElementSibling = (element) => element?.nextElementSibling || null;
  var _getPreviousElementSibling = (element) => element?.previousElementSibling || null;
  var _appendChild = (parent, child) => parent.appendChild(child);
  var _insertBefore = (parent, child, referenceChild) => parent.insertBefore(child, referenceChild);
  var _getSelection = (ref) => ref.ownerDocument?.getSelection() || null;
  var _getElementsByName = (referenceElement, name) => referenceElement.ownerDocument.getElementsByName(name);
  var dom = {
    createMutationObserver: _createMutationObserver,
    createTreeWalker: _createTreeWalker,
    getParentNode: _getParentNode,
    getParentElement: _getParentElement,
    nodeContains: _nodeContains,
    getActiveElement: _getActiveElement,
    querySelector: _querySelector,
    querySelectorAll: _querySelectorAll,
    getElementById: _getElementById,
    getFirstChild: _getFirstChild,
    getLastChild: _getLastChild,
    getNextSibling: _getNextSibling,
    getPreviousSibling: _getPreviousSibling,
    getFirstElementChild: _getFirstElementChild,
    getLastElementChild: _getLastElementChild,
    getNextElementSibling: _getNextElementSibling,
    getPreviousElementSibling: _getPreviousElementSibling,
    appendChild: _appendChild,
    insertBefore: _insertBefore,
    getSelection: _getSelection,
    getElementsByName: _getElementsByName
  };
  function setDOMAPI(domapi) {
    for (const key of Object.keys(domapi)) {
      dom[key] = domapi[key];
    }
  }

  // node_modules/tabster/dist/esm/Utils.js
  init_define_import_meta_env();
  var _uidCounter = 0;
  function getInstanceContext(getWindow) {
    const win = getWindow();
    let ctx = win.__tabsterInstanceContext;
    if (!ctx) {
      ctx = {
        elementByUId: {},
        containerBoundingRectCache: {},
        lastContainerBoundingRectCacheId: 0
      };
      win.__tabsterInstanceContext = ctx;
    }
    return ctx;
  }
  function disposeInstanceContext(win) {
    const ctx = win.__tabsterInstanceContext;
    if (ctx) {
      ctx.elementByUId = {};
      ctx.containerBoundingRectCache = {};
      if (ctx.containerBoundingRectCacheTimer) {
        win.clearTimeout(ctx.containerBoundingRectCacheTimer);
      }
      delete win.__tabsterInstanceContext;
    }
  }
  function hasSubFocusable(element) {
    return !!element.querySelector(FOCUSABLE_SELECTOR);
  }
  var WeakHTMLElement = class {
    _ref;
    _data;
    constructor(element, data) {
      this._ref = new WeakRef(element);
      this._data = data;
    }
    get() {
      const ref = this._ref;
      let element;
      if (ref) {
        element = ref.deref();
        if (!element) {
          delete this._ref;
        }
      }
      return element;
    }
    getData() {
      return this._data;
    }
  };
  function createElementTreeWalker(doc, root, acceptNode) {
    if (root.nodeType !== Node.ELEMENT_NODE) {
      return void 0;
    }
    return dom.createTreeWalker(doc, root, NodeFilter.SHOW_ELEMENT, {
      acceptNode
    });
  }
  function getBoundingRect(getWindow, element) {
    let cacheId = element.__tabsterCacheId;
    const context = getInstanceContext(getWindow);
    const cached = cacheId ? context.containerBoundingRectCache[cacheId] : void 0;
    if (cached) {
      return cached.rect;
    }
    const scrollingElement = element.ownerDocument && element.ownerDocument.documentElement;
    if (!scrollingElement) {
      return new DOMRect();
    }
    let left = 0;
    let top = 0;
    let right = scrollingElement.clientWidth;
    let bottom = scrollingElement.clientHeight;
    if (element !== scrollingElement) {
      const r = element.getBoundingClientRect();
      left = Math.max(left, r.left);
      top = Math.max(top, r.top);
      right = Math.min(right, r.right);
      bottom = Math.min(bottom, r.bottom);
    }
    const rect = new DOMRect(left < right ? left : -1, top < bottom ? top : -1, left < right ? right - left : 0, top < bottom ? bottom - top : 0);
    if (!cacheId) {
      cacheId = "r-" + ++context.lastContainerBoundingRectCacheId;
      element.__tabsterCacheId = cacheId;
    }
    context.containerBoundingRectCache[cacheId] = {
      rect,
      element
    };
    if (!context.containerBoundingRectCacheTimer) {
      context.containerBoundingRectCacheTimer = window.setTimeout(() => {
        context.containerBoundingRectCacheTimer = void 0;
        for (const cId of Object.keys(context.containerBoundingRectCache)) {
          delete context.containerBoundingRectCache[cId].element.__tabsterCacheId;
        }
        context.containerBoundingRectCache = {};
      }, 50);
    }
    return rect;
  }
  function isElementVerticallyVisibleInContainer(getWindow, element, tolerance) {
    const container = getScrollableContainer(element);
    if (!container) {
      return false;
    }
    const containerRect = getBoundingRect(getWindow, container);
    const elementRect = element.getBoundingClientRect();
    const intersectionTolerance = elementRect.height * (1 - tolerance);
    const topIntersection = Math.max(0, containerRect.top - elementRect.top);
    const bottomIntersection = Math.max(0, elementRect.bottom - containerRect.bottom);
    const totalIntersection = topIntersection + bottomIntersection;
    return totalIntersection === 0 || totalIntersection <= intersectionTolerance;
  }
  function scrollIntoView(getWindow, element, alignToTop) {
    const container = getScrollableContainer(element);
    if (container) {
      const containerRect = getBoundingRect(getWindow, container);
      const elementRect = element.getBoundingClientRect();
      if (alignToTop) {
        container.scrollTop += elementRect.top - containerRect.top;
      } else {
        container.scrollTop += elementRect.bottom - containerRect.bottom;
      }
    }
  }
  function getScrollableContainer(element) {
    const doc = element.ownerDocument;
    if (doc) {
      for (let el = dom.getParentElement(element); el; el = dom.getParentElement(el)) {
        if (el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight) {
          return el;
        }
      }
      return doc.documentElement;
    }
    return null;
  }
  function makeFocusIgnored(element) {
    element.__shouldIgnoreFocus = true;
  }
  function shouldIgnoreFocus(element) {
    return !!element.__shouldIgnoreFocus;
  }
  function getUId(wnd) {
    const rnd = new Uint32Array(4);
    wnd.crypto.getRandomValues(rnd);
    const srnd = [];
    for (let i = 0; i < rnd.length; i++) {
      srnd.push(rnd[i].toString(36));
    }
    srnd.push("|");
    srnd.push((++_uidCounter).toString(36));
    srnd.push("|");
    srnd.push(Date.now().toString(36));
    return srnd.join("");
  }
  function getElementUId(getWindow, element) {
    const context = getInstanceContext(getWindow);
    let uid = element.__tabsterElementUID;
    if (!uid) {
      uid = element.__tabsterElementUID = getUId(getWindow());
    }
    if (!context.elementByUId[uid] && documentContains(element.ownerDocument, element)) {
      context.elementByUId[uid] = new WeakHTMLElement(element);
    }
    return uid;
  }
  function clearElementCache(getWindow, parent) {
    const context = getInstanceContext(getWindow);
    for (const key of Object.keys(context.elementByUId)) {
      const wel = context.elementByUId[key];
      const el = wel && wel.get();
      if (el && parent) {
        if (!dom.nodeContains(parent, el)) {
          continue;
        }
      }
      delete context.elementByUId[key];
    }
  }
  function documentContains(doc, element) {
    return dom.nodeContains(doc?.body, element);
  }
  function matchesSelector(element, selector) {
    return typeof element.matches === "function" && element.matches(selector);
  }
  var _lastTabsterPartId = 0;
  var TabsterPart = class {
    _tabster;
    _element;
    _props;
    id;
    constructor(tabster, element, props) {
      this._tabster = tabster;
      this._element = new WeakHTMLElement(element);
      this._props = { ...props };
      this.id = "i" + ++_lastTabsterPartId;
    }
    getElement() {
      return this._element.get();
    }
    getProps() {
      return this._props;
    }
    setProps(props) {
      this._props = { ...props };
    }
  };
  function getLastChild(container) {
    let lastChild = null;
    for (let i = dom.getLastElementChild(container); i; i = dom.getLastElementChild(i)) {
      lastChild = i;
    }
    return lastChild || void 0;
  }
  function isDisplayNone(element) {
    const elementDocument = element.ownerDocument;
    const computedStyle = elementDocument.defaultView?.getComputedStyle(element);
    if (element.offsetParent === null && elementDocument.body !== element && computedStyle?.position !== "fixed") {
      return true;
    }
    if (computedStyle?.visibility === "hidden") {
      return true;
    }
    if (computedStyle?.position === "fixed") {
      if (computedStyle.display === "none") {
        return true;
      }
      if (element.parentElement?.offsetParent === null && elementDocument.body !== element.parentElement) {
        return true;
      }
    }
    return false;
  }
  function isRadio(element) {
    return element.tagName === "INPUT" && !!element.name && element.type === "radio";
  }
  function getRadioButtonGroup(element) {
    if (!isRadio(element)) {
      return;
    }
    const name = element.name;
    let radioButtons = Array.from(dom.getElementsByName(element, name));
    let checked;
    radioButtons = radioButtons.filter((el) => {
      if (isRadio(el)) {
        if (el.checked) {
          checked = el;
        }
        return true;
      }
      return false;
    });
    return {
      name,
      buttons: new Set(radioButtons),
      checked
    };
  }

  // node_modules/tabster/dist/esm/DummyInput.js
  var _updateDummyInputsTimeout = 100;
  var DummyInput = class {
    _isPhantom;
    _fixedTarget;
    _disposeTimer;
    _clearDisposeTimeout;
    input;
    useDefaultAction;
    isFirst;
    isOutside;
    /** Called when the input is focused */
    onFocusIn;
    /** Called when the input is blurred */
    onFocusOut;
    constructor(getWindow, isOutside, props, element, fixedTarget) {
      const win = getWindow();
      const input = win.document.createElement("i");
      input.tabIndex = 0;
      input.setAttribute("role", "none");
      input.setAttribute(TABSTER_DUMMY_INPUT_ATTRIBUTE_NAME, "");
      input.setAttribute("aria-hidden", "true");
      const style = input.style;
      style.position = "fixed";
      style.width = style.height = "1px";
      style.opacity = "0.001";
      style.zIndex = "-1";
      style.setProperty("content-visibility", "hidden");
      makeFocusIgnored(input);
      this.input = input;
      this.isFirst = props.isFirst;
      this.isOutside = isOutside;
      this._isPhantom = props.isPhantom ?? false;
      this._fixedTarget = fixedTarget;
      input.addEventListener("focusin", this._focusIn);
      input.addEventListener("focusout", this._focusOut);
      input.__tabsterDummyContainer = element;
      if (this._isPhantom) {
        this._disposeTimer = win.setTimeout(() => {
          delete this._disposeTimer;
          this.dispose();
        }, 0);
        this._clearDisposeTimeout = () => {
          if (this._disposeTimer) {
            win.clearTimeout(this._disposeTimer);
            delete this._disposeTimer;
          }
          delete this._clearDisposeTimeout;
        };
      }
    }
    dispose() {
      if (this._clearDisposeTimeout) {
        this._clearDisposeTimeout();
      }
      const input = this.input;
      if (!input) {
        return;
      }
      delete this._fixedTarget;
      delete this.onFocusIn;
      delete this.onFocusOut;
      delete this.input;
      input.removeEventListener("focusin", this._focusIn);
      input.removeEventListener("focusout", this._focusOut);
      delete input.__tabsterDummyContainer;
      dom.getParentNode(input)?.removeChild(input);
    }
    setTopLeft(top, left) {
      const style = this.input?.style;
      if (style) {
        style.top = `${top}px`;
        style.left = `${left}px`;
      }
    }
    _isBackward(isIn, current, previous) {
      return isIn && !previous ? !this.isFirst : !!(previous && current.compareDocumentPosition(previous) & Node.DOCUMENT_POSITION_FOLLOWING);
    }
    _focusIn = (e) => {
      if (this._fixedTarget) {
        const target = this._fixedTarget.get();
        if (target) {
          nativeFocus(target);
        }
        return;
      }
      const input = this.input;
      if (this.onFocusIn && input) {
        const relatedTarget = e.relatedTarget;
        this.onFocusIn(this, this._isBackward(true, input, relatedTarget), relatedTarget);
      }
    };
    _focusOut = (e) => {
      if (this._fixedTarget) {
        return;
      }
      this.useDefaultAction = false;
      const input = this.input;
      if (this.onFocusOut && input) {
        const relatedTarget = e.relatedTarget;
        this.onFocusOut(this, this._isBackward(false, input, relatedTarget), relatedTarget);
      }
    };
  };
  var DummyInputManagerPriorities = {
    Root: 1,
    Modalizer: 2,
    Mover: 3,
    Groupper: 4
  };
  var DummyInputManager = class {
    _instance;
    _onFocusIn;
    _onFocusOut;
    _element;
    constructor(tabster, element, priority, sys, outsideByDefault, callForDefaultAction) {
      this._element = element;
      this._instance = new DummyInputManagerCore(tabster, element, this, priority, sys, outsideByDefault, callForDefaultAction);
    }
    _setHandlers(onFocusIn, onFocusOut) {
      this._onFocusIn = onFocusIn;
      this._onFocusOut = onFocusOut;
    }
    moveOut(backwards) {
      this._instance?.moveOut(backwards);
    }
    moveOutWithDefaultAction(backwards, relatedEvent) {
      this._instance?.moveOutWithDefaultAction(backwards, relatedEvent);
    }
    getHandler(isIn) {
      return isIn ? this._onFocusIn : this._onFocusOut;
    }
    setTabbable(tabbable) {
      this._instance?.setTabbable(this, tabbable);
    }
    dispose() {
      if (this._instance) {
        this._instance.dispose(this);
        delete this._instance;
      }
      delete this._onFocusIn;
      delete this._onFocusOut;
    }
    static moveWithPhantomDummy(tabster, element, moveOutOfElement, isBackward, relatedEvent) {
      const dummy = new DummyInput(tabster.getWindow, true, {
        isPhantom: true,
        isFirst: true
      });
      const input = dummy.input;
      if (input) {
        let parent;
        let insertBefore;
        if (element.tagName === "BODY") {
          parent = element;
          insertBefore = moveOutOfElement && isBackward || !moveOutOfElement && !isBackward ? dom.getFirstElementChild(element) : null;
        } else {
          if (moveOutOfElement && (!isBackward || isBackward && !tabster.focusable.isFocusable(element, false, true, true))) {
            parent = element;
            insertBefore = isBackward ? element.firstElementChild : null;
          } else {
            parent = dom.getParentElement(element);
            insertBefore = moveOutOfElement && isBackward || !moveOutOfElement && !isBackward ? element : dom.getNextElementSibling(element);
          }
          let potentialDummy;
          let dummyFor;
          do {
            potentialDummy = moveOutOfElement && isBackward || !moveOutOfElement && !isBackward ? dom.getPreviousElementSibling(insertBefore) : insertBefore;
            dummyFor = getDummyInputContainer(potentialDummy);
            if (dummyFor === element) {
              insertBefore = moveOutOfElement && isBackward || !moveOutOfElement && !isBackward ? potentialDummy : dom.getNextElementSibling(potentialDummy);
            } else {
              dummyFor = null;
            }
          } while (dummyFor);
        }
        if (parent?.dispatchEvent(new TabsterMoveFocusEvent({
          by: "root",
          owner: parent,
          next: null,
          relatedEvent
        }))) {
          dom.insertBefore(parent, input, insertBefore);
          nativeFocus(input);
        }
      }
    }
    static addPhantomDummyWithTarget(tabster, sourceElement, isBackward, targetElement) {
      const dummy = new DummyInput(tabster.getWindow, true, {
        isPhantom: true,
        isFirst: true
      }, void 0, new WeakHTMLElement(targetElement));
      const input = dummy.input;
      if (input) {
        let dummyParent;
        let insertBefore;
        if (hasSubFocusable(sourceElement) && !isBackward) {
          dummyParent = sourceElement;
          insertBefore = dom.getFirstElementChild(sourceElement);
        } else {
          dummyParent = dom.getParentElement(sourceElement);
          insertBefore = isBackward ? sourceElement : dom.getNextElementSibling(sourceElement);
        }
        if (dummyParent) {
          dom.insertBefore(dummyParent, input, insertBefore);
        }
      }
    }
  };
  function setDummyInputDebugValue(dummy, wrappers) {
    const what = {
      1: "Root",
      2: "Modalizer",
      3: "Mover",
      4: "Groupper"
    };
    dummy.input?.setAttribute(TABSTER_DUMMY_INPUT_ATTRIBUTE_NAME, [
      `isFirst=${dummy.isFirst}`,
      `isOutside=${dummy.isOutside}`,
      ...wrappers.map((w) => `(${what[w.priority]}, tabbable=${w.tabbable})`)
    ].join(", "));
  }
  var DummyInputObserver = class {
    _win;
    _updateQueue = /* @__PURE__ */ new Set();
    _updateTimer;
    _lastUpdateQueueTime = 0;
    _changedParents = /* @__PURE__ */ new WeakSet();
    _updateDummyInputsTimer;
    _dummyElements = [];
    _dummyCallbacks = /* @__PURE__ */ new WeakMap();
    constructor(win) {
      this._win = win;
    }
    add(dummy, callback) {
      if (!this._dummyCallbacks.has(dummy) && this._win) {
        this._dummyElements.push(new WeakHTMLElement(dummy));
        this._dummyCallbacks.set(dummy, callback);
        this.domChanged = this._domChanged;
      }
    }
    remove(dummy) {
      this._dummyElements = this._dummyElements.filter((ref) => {
        const element = ref.get();
        return element && element !== dummy;
      });
      this._dummyCallbacks.delete(dummy);
      if (this._dummyElements.length === 0) {
        delete this.domChanged;
      }
    }
    dispose() {
      const win = this._win?.();
      if (this._updateTimer) {
        win?.clearTimeout(this._updateTimer);
        delete this._updateTimer;
      }
      if (this._updateDummyInputsTimer) {
        win?.clearTimeout(this._updateDummyInputsTimer);
        delete this._updateDummyInputsTimer;
      }
      this._changedParents = /* @__PURE__ */ new WeakSet();
      this._dummyCallbacks = /* @__PURE__ */ new WeakMap();
      this._dummyElements = [];
      this._updateQueue.clear();
      delete this.domChanged;
      delete this._win;
    }
    _domChanged = (parent) => {
      if (this._changedParents.has(parent)) {
        return;
      }
      this._changedParents.add(parent);
      if (this._updateDummyInputsTimer) {
        return;
      }
      this._updateDummyInputsTimer = this._win?.().setTimeout(() => {
        delete this._updateDummyInputsTimer;
        for (const ref of this._dummyElements) {
          const dummyElement = ref.get();
          if (dummyElement) {
            const callback = this._dummyCallbacks.get(dummyElement);
            if (callback) {
              const dummyParent = dom.getParentNode(dummyElement);
              if (!dummyParent || this._changedParents.has(dummyParent)) {
                callback();
              }
            }
          }
        }
        this._changedParents = /* @__PURE__ */ new WeakSet();
      }, _updateDummyInputsTimeout);
    };
    updatePositions(compute) {
      if (!this._win) {
        return;
      }
      this._updateQueue.add(compute);
      this._lastUpdateQueueTime = Date.now();
      this._scheduledUpdatePositions();
    }
    _scheduledUpdatePositions() {
      if (this._updateTimer) {
        return;
      }
      this._updateTimer = this._win?.().setTimeout(() => {
        delete this._updateTimer;
        if (this._lastUpdateQueueTime + _updateDummyInputsTimeout <= Date.now()) {
          const scrollTopLeftCache = /* @__PURE__ */ new Map();
          const setTopLeftCallbacks = [];
          for (const compute of this._updateQueue) {
            setTopLeftCallbacks.push(compute(scrollTopLeftCache));
          }
          this._updateQueue.clear();
          for (const setTopLeft of setTopLeftCallbacks) {
            setTopLeft();
          }
          scrollTopLeftCache.clear();
        } else {
          this._scheduledUpdatePositions();
        }
      }, _updateDummyInputsTimeout);
    }
  };
  var DummyInputManagerCore = class {
    _tabster;
    _addTimer;
    _getWindow;
    _wrappers = [];
    _element;
    _isOutside = false;
    _firstDummy;
    _lastDummy;
    _transformElements = /* @__PURE__ */ new Set();
    _callForDefaultAction;
    constructor(tabster, element, manager, priority, sys, outsideByDefault, callForDefaultAction) {
      const el = element.get();
      if (!el) {
        throw new Error("No element");
      }
      this._tabster = tabster;
      this._getWindow = tabster.getWindow;
      this._callForDefaultAction = callForDefaultAction;
      const instance = el.__tabsterDummy;
      (instance || this)._wrappers.push({
        manager,
        priority,
        tabbable: true
      });
      if (instance) {
        if (true) {
          this._firstDummy && setDummyInputDebugValue(this._firstDummy, instance._wrappers);
          this._lastDummy && setDummyInputDebugValue(this._lastDummy, instance._wrappers);
        }
        return instance;
      }
      el.__tabsterDummy = this;
      const forcedDummyPosition = sys?.dummyInputsPosition;
      const tagName = el.tagName;
      this._isOutside = !forcedDummyPosition ? (outsideByDefault || tagName === "UL" || tagName === "OL" || tagName === "TABLE") && !(tagName === "LI" || tagName === "TD" || tagName === "TH") : forcedDummyPosition === SysDummyInputsPositions.Outside;
      this._firstDummy = new DummyInput(this._getWindow, this._isOutside, {
        isFirst: true
      }, element);
      this._lastDummy = new DummyInput(this._getWindow, this._isOutside, {
        isFirst: false
      }, element);
      const dummyElement = this._firstDummy.input;
      dummyElement && tabster._dummyObserver.add(dummyElement, this._addDummyInputs);
      this._firstDummy.onFocusIn = this._onFocusIn;
      this._firstDummy.onFocusOut = this._onFocusOut;
      this._lastDummy.onFocusIn = this._onFocusIn;
      this._lastDummy.onFocusOut = this._onFocusOut;
      this._element = element;
      this._addDummyInputs();
    }
    dispose(manager, force) {
      const wrappers = this._wrappers = this._wrappers.filter((w) => w.manager !== manager && !force);
      if (true) {
        this._firstDummy && setDummyInputDebugValue(this._firstDummy, wrappers);
        this._lastDummy && setDummyInputDebugValue(this._lastDummy, wrappers);
      }
      if (wrappers.length === 0) {
        delete (this._element?.get()).__tabsterDummy;
        for (const el of this._transformElements) {
          el.removeEventListener("scroll", this._addTransformOffsets);
        }
        this._transformElements.clear();
        const win = this._getWindow();
        if (this._addTimer) {
          win.clearTimeout(this._addTimer);
          delete this._addTimer;
        }
        const dummyElement = this._firstDummy?.input;
        dummyElement && this._tabster._dummyObserver.remove(dummyElement);
        this._firstDummy?.dispose();
        this._lastDummy?.dispose();
      }
    }
    _onFocus(isIn, dummyInput, isBackward, relatedTarget) {
      const wrapper = this._getCurrent();
      if (wrapper && (!dummyInput.useDefaultAction || this._callForDefaultAction)) {
        wrapper.manager.getHandler(isIn)?.(dummyInput, isBackward, relatedTarget);
      }
    }
    _onFocusIn = (dummyInput, isBackward, relatedTarget) => {
      this._onFocus(true, dummyInput, isBackward, relatedTarget);
    };
    _onFocusOut = (dummyInput, isBackward, relatedTarget) => {
      this._onFocus(false, dummyInput, isBackward, relatedTarget);
    };
    moveOut = (backwards) => {
      const first = this._firstDummy;
      const last = this._lastDummy;
      if (first && last) {
        this._ensurePosition();
        const firstInput = first.input;
        const lastInput = last.input;
        const element = this._element?.get();
        if (firstInput && lastInput && element) {
          let toFocus;
          if (backwards) {
            firstInput.tabIndex = 0;
            toFocus = firstInput;
          } else {
            lastInput.tabIndex = 0;
            toFocus = lastInput;
          }
          if (toFocus) {
            nativeFocus(toFocus);
          }
        }
      }
    };
    /**
     * Prepares to move focus out of the given element by focusing
     * one of the dummy inputs and setting the `useDefaultAction` flag
     * @param backwards focus moving to an element behind the given element
     */
    moveOutWithDefaultAction = (backwards, relatedEvent) => {
      const first = this._firstDummy;
      const last = this._lastDummy;
      if (first && last) {
        this._ensurePosition();
        const firstInput = first.input;
        const lastInput = last.input;
        const element = this._element?.get();
        if (firstInput && lastInput && element) {
          let toFocus;
          if (backwards) {
            if (!first.isOutside && this._tabster.focusable.isFocusable(element, true, true, true)) {
              toFocus = element;
            } else {
              first.useDefaultAction = true;
              firstInput.tabIndex = 0;
              toFocus = firstInput;
            }
          } else {
            last.useDefaultAction = true;
            lastInput.tabIndex = 0;
            toFocus = lastInput;
          }
          if (toFocus && element.dispatchEvent(new TabsterMoveFocusEvent({
            by: "root",
            owner: element,
            next: null,
            relatedEvent
          }))) {
            nativeFocus(toFocus);
          }
        }
      }
    };
    setTabbable = (manager, tabbable) => {
      for (const w of this._wrappers) {
        if (w.manager === manager) {
          w.tabbable = tabbable;
          break;
        }
      }
      const wrapper = this._getCurrent();
      if (wrapper) {
        const tabIndex = wrapper.tabbable ? 0 : -1;
        let input = this._firstDummy?.input;
        if (input) {
          input.tabIndex = tabIndex;
        }
        input = this._lastDummy?.input;
        if (input) {
          input.tabIndex = tabIndex;
        }
      }
      if (true) {
        this._firstDummy && setDummyInputDebugValue(this._firstDummy, this._wrappers);
        this._lastDummy && setDummyInputDebugValue(this._lastDummy, this._wrappers);
      }
    };
    _getCurrent() {
      this._wrappers.sort((a, b) => {
        if (a.tabbable !== b.tabbable) {
          return a.tabbable ? -1 : 1;
        }
        return a.priority - b.priority;
      });
      return this._wrappers[0];
    }
    /**
     * Adds dummy inputs as the first and last child of the given element
     * Called each time the children under the element is mutated
     */
    _addDummyInputs = () => {
      if (this._addTimer) {
        return;
      }
      this._addTimer = this._getWindow().setTimeout(() => {
        delete this._addTimer;
        this._ensurePosition();
        if (true) {
          this._firstDummy && setDummyInputDebugValue(this._firstDummy, this._wrappers);
          this._lastDummy && setDummyInputDebugValue(this._lastDummy, this._wrappers);
        }
        this._addTransformOffsets();
      }, 0);
    };
    _ensurePosition() {
      const element = this._element?.get();
      const firstDummyInput = this._firstDummy?.input;
      const lastDummyInput = this._lastDummy?.input;
      if (!element || !firstDummyInput || !lastDummyInput) {
        return;
      }
      if (this._isOutside) {
        const elementParent = dom.getParentNode(element);
        if (elementParent) {
          const nextSibling = dom.getNextSibling(element);
          if (nextSibling !== lastDummyInput) {
            dom.insertBefore(elementParent, lastDummyInput, nextSibling);
          }
          if (dom.getPreviousElementSibling(element) !== firstDummyInput) {
            dom.insertBefore(elementParent, firstDummyInput, element);
          }
        }
      } else {
        if (dom.getLastElementChild(element) !== lastDummyInput) {
          dom.appendChild(element, lastDummyInput);
        }
        const firstElementChild = dom.getFirstElementChild(element);
        if (firstElementChild && firstElementChild !== firstDummyInput && firstElementChild.parentNode) {
          dom.insertBefore(firstElementChild.parentNode, firstDummyInput, firstElementChild);
        }
      }
    }
    _addTransformOffsets = () => {
      this._tabster._dummyObserver.updatePositions(this._computeTransformOffsets);
    };
    _computeTransformOffsets = (scrollTopLeftCache) => {
      const from = this._firstDummy?.input || this._lastDummy?.input;
      const transformElements = this._transformElements;
      const newTransformElements = /* @__PURE__ */ new Set();
      let scrollTop = 0;
      let scrollLeft = 0;
      const win = this._getWindow();
      for (let element = from; element && element.nodeType === Node.ELEMENT_NODE; element = dom.getParentElement(element)) {
        let scrollTopLeft = scrollTopLeftCache.get(element);
        if (scrollTopLeft === void 0) {
          const transform = win.getComputedStyle(element).transform;
          if (transform && transform !== "none") {
            scrollTopLeft = {
              scrollTop: element.scrollTop,
              scrollLeft: element.scrollLeft
            };
          }
          scrollTopLeftCache.set(element, scrollTopLeft || null);
        }
        if (scrollTopLeft) {
          newTransformElements.add(element);
          if (!transformElements.has(element)) {
            element.addEventListener("scroll", this._addTransformOffsets);
          }
          scrollTop += scrollTopLeft.scrollTop;
          scrollLeft += scrollTopLeft.scrollLeft;
        }
      }
      for (const el of transformElements) {
        if (!newTransformElements.has(el)) {
          el.removeEventListener("scroll", this._addTransformOffsets);
        }
      }
      this._transformElements = newTransformElements;
      return () => {
        this._firstDummy?.setTopLeft(scrollTop, scrollLeft);
        this._lastDummy?.setTopLeft(scrollTop, scrollLeft);
      };
    };
  };
  function getDummyInputContainer(element) {
    return element?.__tabsterDummyContainer?.get() || null;
  }

  // node_modules/tabster/dist/esm/AttributeHelpers.js
  init_define_import_meta_env();
  function getTabsterAttribute(props, plain) {
    const attr = JSON.stringify(props);
    if (plain === true) {
      return attr;
    }
    return {
      [TABSTER_ATTRIBUTE_NAME]: attr
    };
  }
  function mergeTabsterProps(props, newProps) {
    for (const key of Object.keys(newProps)) {
      const value = newProps[key];
      if (value) {
        props[key] = value;
      } else {
        delete props[key];
      }
    }
  }
  function setTabsterAttribute(element, newProps, update) {
    let props;
    if (update) {
      const attr = element.getAttribute(TABSTER_ATTRIBUTE_NAME);
      if (attr) {
        try {
          props = JSON.parse(attr);
        } catch (e) {
          if (true) {
            console.error(`data-tabster attribute error: ${e}`, element);
          }
        }
      }
    }
    if (!props) {
      props = {};
    }
    mergeTabsterProps(props, newProps);
    if (Object.keys(props).length > 0) {
      element.setAttribute(TABSTER_ATTRIBUTE_NAME, getTabsterAttribute(props, true));
    } else {
      element.removeAttribute(TABSTER_ATTRIBUTE_NAME);
    }
  }

  // node_modules/tabster/dist/esm/Root.js
  function _setInformativeStyle(weakElement, remove, id) {
    if (true) {
      const element = weakElement.get();
      if (element) {
        if (remove) {
          element.style.removeProperty("--tabster-root");
        } else {
          element.style.setProperty("--tabster-root", id + ",");
        }
      }
    }
  }
  var RootDummyManager = class extends DummyInputManager {
    _tabster;
    _setFocused;
    constructor(tabster, element, setFocused, sys) {
      super(tabster, element, DummyInputManagerPriorities.Root, sys, void 0, true);
      this._setHandlers(this._onDummyInputFocus);
      this._tabster = tabster;
      this._setFocused = setFocused;
    }
    _onDummyInputFocus = (dummyInput) => {
      if (dummyInput.useDefaultAction) {
        this._setFocused(false);
      } else {
        this._tabster.keyboardNavigation.setNavigatingWithKeyboard(true);
        const element = this._element.get();
        if (element) {
          this._setFocused(true);
          const toFocus = this._tabster.focusedElement.getFirstOrLastTabbable(dummyInput.isFirst, { container: element, ignoreAccessibility: true });
          if (toFocus) {
            nativeFocus(toFocus);
            return;
          }
        }
        dummyInput.input?.blur();
      }
    };
  };
  var Root = class extends TabsterPart {
    uid;
    _dummyManager;
    _sys;
    _isFocused = false;
    _setFocusedTimer;
    _onDispose;
    constructor(tabster, element, onDispose, props, sys) {
      super(tabster, element, props);
      this._onDispose = onDispose;
      const win = tabster.getWindow;
      this.uid = getElementUId(win, element);
      this._sys = sys;
      if (tabster.controlTab || tabster.rootDummyInputs) {
        this.addDummyInputs();
      }
      const w = win();
      const doc = w.document;
      doc.addEventListener(KEYBORG_FOCUSIN, this._onFocusIn);
      doc.addEventListener(KEYBORG_FOCUSOUT, this._onFocusOut);
      this._add();
    }
    addDummyInputs() {
      if (!this._dummyManager) {
        this._dummyManager = new RootDummyManager(this._tabster, this._element, this._setFocused, this._sys);
      }
    }
    dispose() {
      this._onDispose(this);
      const win = this._tabster.getWindow();
      const doc = win.document;
      doc.removeEventListener(KEYBORG_FOCUSIN, this._onFocusIn);
      doc.removeEventListener(KEYBORG_FOCUSOUT, this._onFocusOut);
      if (this._setFocusedTimer) {
        win.clearTimeout(this._setFocusedTimer);
        delete this._setFocusedTimer;
      }
      this._dummyManager?.dispose();
      this._remove();
    }
    moveOutWithDefaultAction(isBackward, relatedEvent) {
      const dummyManager = this._dummyManager;
      if (dummyManager) {
        dummyManager.moveOutWithDefaultAction(isBackward, relatedEvent);
      } else {
        const el = this.getElement();
        if (el) {
          RootDummyManager.moveWithPhantomDummy(this._tabster, el, true, isBackward, relatedEvent);
        }
      }
    }
    _setFocused = (hasFocused) => {
      if (this._setFocusedTimer) {
        this._tabster.getWindow().clearTimeout(this._setFocusedTimer);
        delete this._setFocusedTimer;
      }
      if (this._isFocused === hasFocused) {
        return;
      }
      const element = this._element.get();
      if (element) {
        if (hasFocused) {
          this._isFocused = true;
          this._dummyManager?.setTabbable(false);
          element.dispatchEvent(new RootFocusEvent({ element }));
        } else {
          this._setFocusedTimer = this._tabster.getWindow().setTimeout(() => {
            delete this._setFocusedTimer;
            this._isFocused = false;
            this._dummyManager?.setTabbable(true);
            element.dispatchEvent(new RootBlurEvent({ element }));
          }, 0);
        }
      }
    };
    _onFocusIn = (event) => {
      const getParent2 = this._tabster.getParent;
      const rootElement = this._element.get();
      let curElement = event.composedPath()[0];
      do {
        if (curElement === rootElement) {
          this._setFocused(true);
          return;
        }
        curElement = curElement && getParent2(curElement);
      } while (curElement);
    };
    _onFocusOut = () => {
      this._setFocused(false);
    };
    _add() {
      if (true) {
        _setInformativeStyle(this._element, false, this.uid);
      }
    }
    _remove() {
      if (true) {
        _setInformativeStyle(this._element, true);
      }
    }
  };
  function validateRootProps(props) {
  }
  var RootAPI = class {
    _tabster;
    _win;
    _autoRoot;
    _autoRootWaiting = false;
    _roots = {};
    _forceDummy = false;
    rootById = {};
    constructor(tabster, autoRoot) {
      this._tabster = tabster;
      this._win = tabster.getWindow;
      this._autoRoot = autoRoot;
      tabster.queueInit(() => {
        if (this._autoRoot) {
          this._autoRootCreate();
        }
      });
    }
    _autoRootCreate = () => {
      const doc = this._win().document;
      const body = doc.body;
      if (body) {
        this._autoRootUnwait(doc);
        const props = this._autoRoot;
        if (props) {
          setTabsterAttribute(body, { root: props }, true);
          updateTabsterByAttribute(this._tabster, body);
          return getTabsterOnElement(this._tabster, body)?.root;
        }
      } else if (!this._autoRootWaiting) {
        this._autoRootWaiting = true;
        doc.addEventListener("readystatechange", this._autoRootCreate);
      }
      return void 0;
    };
    _autoRootUnwait(doc) {
      doc.removeEventListener("readystatechange", this._autoRootCreate);
      this._autoRootWaiting = false;
    }
    dispose() {
      const win = this._win();
      this._autoRootUnwait(win.document);
      delete this._autoRoot;
      Object.keys(this._roots).forEach((rootId) => {
        if (this._roots[rootId]) {
          this._roots[rootId].dispose();
          delete this._roots[rootId];
        }
      });
      this.rootById = {};
    }
    createRoot(element, props, sys) {
      if (true) {
        validateRootProps(props);
      }
      const newRoot = new Root(this._tabster, element, this._onRootDispose, props, sys);
      this._roots[newRoot.id] = newRoot;
      if (this._forceDummy) {
        newRoot.addDummyInputs();
      }
      return newRoot;
    }
    addDummyInputs() {
      this._forceDummy = true;
      const roots = this._roots;
      for (const id of Object.keys(roots)) {
        roots[id].addDummyInputs();
      }
    }
    static getRootByUId(getWindow, id) {
      const tabster = getWindow().__tabsterInstance;
      return tabster && tabster.root.rootById[id];
    }
    /**
     * Fetches the tabster context for an element walking up its ancestors
     *
     * @param tabster Tabster instance
     * @param element The element the tabster context should represent
     * @param options Additional options
     * @returns undefined if the element is not a child of a tabster root, otherwise all applicable tabster behaviours and configurations
     */
    static getTabsterContext(tabster, element, options = {}) {
      if (!element.ownerDocument) {
        return void 0;
      }
      const { checkRtl, referenceElement } = options;
      const getParent2 = tabster.getParent;
      tabster.drainInitQueue();
      let root;
      let modalizer;
      let groupper;
      let mover;
      let excludedFromMover = false;
      let groupperBeforeMover;
      let modalizerInGroupper;
      let dirRightToLeft;
      let uncontrolled;
      let curElement = referenceElement || element;
      const ignoreKeydown = {};
      while (curElement && (!root || checkRtl)) {
        const tabsterOnElement = getTabsterOnElement(tabster, curElement);
        if (checkRtl && dirRightToLeft === void 0) {
          const dir = curElement.dir;
          if (dir) {
            dirRightToLeft = dir.toLowerCase() === "rtl";
          }
        }
        if (!tabsterOnElement) {
          curElement = getParent2(curElement);
          continue;
        }
        const tagName = curElement.tagName;
        if ((tabsterOnElement.uncontrolled || tagName === "IFRAME" || tagName === "WEBVIEW") && tabster.focusable.isVisible(curElement)) {
          uncontrolled = curElement;
        }
        if (!mover && tabsterOnElement.focusable?.excludeFromMover && !groupper) {
          excludedFromMover = true;
        }
        const curModalizer = tabsterOnElement.modalizer;
        const curGroupper = tabsterOnElement.groupper;
        const curMover = tabsterOnElement.mover;
        if (!modalizer && curModalizer) {
          modalizer = curModalizer;
        }
        if (!groupper && curGroupper && (!modalizer || curModalizer)) {
          if (modalizer) {
            if (!curGroupper.isActive() && curGroupper.getProps().tabbability && modalizer.userId !== tabster.modalizer?.activeId) {
              modalizer = void 0;
              groupper = curGroupper;
            }
            modalizerInGroupper = curGroupper;
          } else {
            groupper = curGroupper;
          }
        }
        if (!mover && curMover && (!modalizer || curModalizer) && (!curGroupper || curElement !== element) && curElement.contains(element)) {
          mover = curMover;
          groupperBeforeMover = !!groupper && groupper !== curGroupper;
        }
        if (tabsterOnElement.root) {
          root = tabsterOnElement.root;
        }
        if (tabsterOnElement.focusable?.ignoreKeydown) {
          Object.assign(ignoreKeydown, tabsterOnElement.focusable.ignoreKeydown);
        }
        curElement = getParent2(curElement);
      }
      if (!root) {
        const rootAPI = tabster.root;
        const autoRoot = rootAPI._autoRoot;
        if (autoRoot) {
          if (element.ownerDocument?.body) {
            root = rootAPI._autoRootCreate();
          }
        }
      }
      if (groupper && !mover) {
        groupperBeforeMover = true;
      }
      if (!root) {
        if (modalizer || groupper || mover) {
          console.error("Tabster Root is required for Mover, Groupper and Modalizer to work.");
        }
      }
      const shouldIgnoreKeydown = (event) => !!ignoreKeydown[event.key];
      return root ? {
        root,
        modalizer,
        groupper,
        mover,
        groupperBeforeMover,
        modalizerInGroupper,
        rtl: checkRtl ? !!dirRightToLeft : void 0,
        uncontrolled,
        excludedFromMover,
        ignoreKeydown: shouldIgnoreKeydown
      } : void 0;
    }
    static getRoot(tabster, element) {
      const getParent2 = tabster.getParent;
      for (let el = element; el; el = getParent2(el)) {
        const root = getTabsterOnElement(tabster, el)?.root;
        if (root) {
          return root;
        }
      }
      return void 0;
    }
    onRoot(root, removed) {
      if (removed) {
        delete this.rootById[root.uid];
      } else {
        this.rootById[root.uid] = root;
      }
    }
    _onRootDispose = (root) => {
      delete this._roots[root.id];
    };
  };

  // node_modules/tabster/dist/esm/Focusable.js
  var FocusableAPI = class {
    _tabster;
    constructor(tabster) {
      this._tabster = tabster;
    }
    dispose() {
    }
    getProps(element) {
      const tabsterOnElement = getTabsterOnElement(this._tabster, element);
      return tabsterOnElement && tabsterOnElement.focusable || {};
    }
    isFocusable(el, includeProgrammaticallyFocusable, noVisibleCheck, noAccessibleCheck) {
      if (matchesSelector(el, FOCUSABLE_SELECTOR) && (includeProgrammaticallyFocusable || el.tabIndex !== -1)) {
        return (noVisibleCheck || this.isVisible(el)) && (noAccessibleCheck || this.isAccessible(el));
      }
      return false;
    }
    isVisible(el) {
      if (!el.ownerDocument || el.nodeType !== Node.ELEMENT_NODE) {
        return false;
      }
      if (isDisplayNone(el)) {
        return false;
      }
      const rect = el.ownerDocument.body.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) {
        return false;
      }
      return true;
    }
    isAccessible(el) {
      for (let e = el; e; e = dom.getParentElement(e)) {
        const tabsterOnElement = getTabsterOnElement(this._tabster, e);
        if (this._isHidden(e)) {
          return false;
        }
        const ignoreDisabled = tabsterOnElement?.focusable?.ignoreAriaDisabled;
        if (!ignoreDisabled && this._isDisabled(e)) {
          return false;
        }
      }
      return true;
    }
    _isDisabled(el) {
      return el.hasAttribute("disabled");
    }
    _isHidden(el) {
      const attrVal = el.getAttribute("aria-hidden");
      if (attrVal && attrVal.toLowerCase() === "true") {
        if (!this._tabster.modalizer?.isAugmented(el)) {
          return true;
        }
      }
      return false;
    }
    findFirst(options, out) {
      return this.findElement({
        ...options
      }, out);
    }
    findLast(options, out) {
      return this.findElement({
        isBackward: true,
        ...options
      }, out);
    }
    findNext(options, out) {
      return this.findElement({ ...options }, out);
    }
    findPrev(options, out) {
      return this.findElement({ ...options, isBackward: true }, out);
    }
    findDefault(options, out) {
      return this.findElement({
        ...options,
        acceptCondition: (el) => this.isFocusable(el, options.includeProgrammaticallyFocusable) && !!this.getProps(el).isDefault
      }, out) || null;
    }
    findAll(options) {
      return this._findElements(true, options) || [];
    }
    findElement(options, out) {
      const found = this._findElements(false, options, out);
      return found ? found[0] : found;
    }
    _findElements(isFindAll, options, out) {
      const { container, currentElement = null, includeProgrammaticallyFocusable, useActiveModalizer, ignoreAccessibility, modalizerId, isBackward, onElement } = options;
      if (!out) {
        out = {};
      }
      const elements = [];
      let { acceptCondition } = options;
      const hasCustomCondition = !!acceptCondition;
      if (!container) {
        return null;
      }
      if (!acceptCondition) {
        acceptCondition = (el) => this.isFocusable(el, includeProgrammaticallyFocusable, false, ignoreAccessibility);
      }
      const acceptElementState = {
        container,
        modalizerUserId: modalizerId === void 0 && useActiveModalizer ? this._tabster.modalizer?.activeId : modalizerId || RootAPI.getTabsterContext(this._tabster, container)?.modalizer?.userId,
        from: currentElement || container,
        isBackward,
        isFindAll,
        acceptCondition,
        hasCustomCondition,
        includeProgrammaticallyFocusable,
        ignoreAccessibility,
        cachedGrouppers: {},
        cachedRadioGroups: {}
      };
      const walker = createElementTreeWalker(container.ownerDocument, container, (node) => this._acceptElement(node, acceptElementState));
      if (!walker) {
        return null;
      }
      const prepareForNextElement = (shouldContinueIfNotFound) => {
        const foundElement = acceptElementState.foundElement ?? acceptElementState.foundBackward;
        if (foundElement) {
          elements.push(foundElement);
        }
        if (isFindAll) {
          if (foundElement) {
            acceptElementState.found = false;
            delete acceptElementState.foundElement;
            delete acceptElementState.foundBackward;
            delete acceptElementState.fromCtx;
            acceptElementState.from = foundElement;
            if (onElement && !onElement(foundElement)) {
              return false;
            }
          }
          return !!(foundElement || shouldContinueIfNotFound);
        } else {
          if (foundElement && out) {
            out.uncontrolled = RootAPI.getTabsterContext(this._tabster, foundElement)?.uncontrolled;
          }
          return !!(shouldContinueIfNotFound && !foundElement);
        }
      };
      if (!currentElement) {
        out.outOfDOMOrder = true;
      }
      if (currentElement && dom.nodeContains(container, currentElement)) {
        walker.currentNode = currentElement;
      } else if (isBackward) {
        const lastChild = getLastChild(container);
        if (!lastChild) {
          return null;
        }
        if (this._acceptElement(lastChild, acceptElementState) === NodeFilter.FILTER_ACCEPT && !prepareForNextElement(true)) {
          if (acceptElementState.skippedFocusable) {
            out.outOfDOMOrder = true;
          }
          return elements;
        }
        walker.currentNode = lastChild;
      }
      do {
        if (isBackward) {
          walker.previousNode();
        } else {
          walker.nextNode();
        }
      } while (prepareForNextElement());
      if (acceptElementState.skippedFocusable) {
        out.outOfDOMOrder = true;
      }
      return elements.length ? elements : null;
    }
    _acceptElement(element, state) {
      if (state.found) {
        return NodeFilter.FILTER_ACCEPT;
      }
      const foundBackward = state.foundBackward;
      if (foundBackward && (element === foundBackward || !dom.nodeContains(foundBackward, element))) {
        state.found = true;
        state.foundElement = foundBackward;
        return NodeFilter.FILTER_ACCEPT;
      }
      const container = state.container;
      if (element === container) {
        return NodeFilter.FILTER_SKIP;
      }
      if (!dom.nodeContains(container, element)) {
        return NodeFilter.FILTER_REJECT;
      }
      if (getDummyInputContainer(element)) {
        return NodeFilter.FILTER_REJECT;
      }
      if (dom.nodeContains(state.rejectElementsFrom, element)) {
        return NodeFilter.FILTER_REJECT;
      }
      const ctx = state.currentCtx = RootAPI.getTabsterContext(this._tabster, element);
      if (!ctx) {
        return NodeFilter.FILTER_SKIP;
      }
      if (shouldIgnoreFocus(element)) {
        if (this.isFocusable(element, void 0, true, true)) {
          state.skippedFocusable = true;
        }
        return NodeFilter.FILTER_SKIP;
      }
      if (!state.hasCustomCondition && (element.tagName === "IFRAME" || element.tagName === "WEBVIEW")) {
        if (this.isVisible(element) && ctx.modalizer?.userId === this._tabster.modalizer?.activeId) {
          state.found = true;
          state.rejectElementsFrom = state.foundElement = element;
          return NodeFilter.FILTER_ACCEPT;
        } else {
          return NodeFilter.FILTER_REJECT;
        }
      }
      if (!state.ignoreAccessibility && !this.isAccessible(element)) {
        if (this.isFocusable(element, false, true, true)) {
          state.skippedFocusable = true;
        }
        return NodeFilter.FILTER_REJECT;
      }
      let result;
      let fromCtx = state.fromCtx;
      if (!fromCtx) {
        fromCtx = state.fromCtx = RootAPI.getTabsterContext(this._tabster, state.from);
      }
      const fromMover = fromCtx?.mover;
      let groupper = ctx.groupper;
      let mover = ctx.mover;
      result = this._tabster.modalizer?.acceptElement(element, state);
      if (result !== void 0) {
        state.skippedFocusable = true;
      }
      if (result === void 0 && (groupper || mover || fromMover)) {
        const groupperElement = groupper?.getElement();
        const fromMoverElement = fromMover?.getElement();
        let moverElement = mover?.getElement();
        if (moverElement && dom.nodeContains(fromMoverElement, moverElement) && dom.nodeContains(container, fromMoverElement) && (!groupperElement || !mover || dom.nodeContains(fromMoverElement, groupperElement))) {
          mover = fromMover;
          moverElement = fromMoverElement;
        }
        if (groupperElement) {
          if (groupperElement === container || !dom.nodeContains(container, groupperElement)) {
            groupper = void 0;
          } else if (!dom.nodeContains(groupperElement, element)) {
            return NodeFilter.FILTER_REJECT;
          }
        }
        if (moverElement) {
          if (!dom.nodeContains(container, moverElement)) {
            mover = void 0;
          } else if (!dom.nodeContains(moverElement, element)) {
            return NodeFilter.FILTER_REJECT;
          }
        }
        if (groupper && mover) {
          if (moverElement && groupperElement && !dom.nodeContains(groupperElement, moverElement)) {
            mover = void 0;
          } else {
            groupper = void 0;
          }
        }
        if (groupper) {
          result = groupper.acceptElement(element, state);
        }
        if (mover) {
          result = mover.acceptElement(element, state);
        }
      }
      if (result === void 0) {
        result = state.acceptCondition(element) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        if (result === NodeFilter.FILTER_SKIP && this.isFocusable(element, false, true, true)) {
          state.skippedFocusable = true;
        }
      }
      if (result === NodeFilter.FILTER_ACCEPT && !state.found) {
        if (!state.isFindAll && isRadio(element) && !element.checked) {
          const radioGroupName = element.name;
          let radioGroup = state.cachedRadioGroups[radioGroupName];
          if (!radioGroup) {
            radioGroup = getRadioButtonGroup(element);
            if (radioGroup) {
              state.cachedRadioGroups[radioGroupName] = radioGroup;
            }
          }
          if (radioGroup?.checked && radioGroup.checked !== element) {
            return NodeFilter.FILTER_SKIP;
          }
        }
        if (state.isBackward) {
          state.foundBackward = element;
          result = NodeFilter.FILTER_SKIP;
        } else {
          state.found = true;
          state.foundElement = element;
        }
      }
      return result;
    }
  };

  // node_modules/tabster/dist/esm/State/FocusedElement.js
  init_define_import_meta_env();

  // node_modules/tabster/dist/esm/Keys.js
  init_define_import_meta_env();
  var Keys = {
    Tab: "Tab",
    Enter: "Enter",
    Escape: "Escape",
    Space: " ",
    PageUp: "PageUp",
    PageDown: "PageDown",
    End: "End",
    Home: "Home",
    ArrowLeft: "ArrowLeft",
    ArrowUp: "ArrowUp",
    ArrowRight: "ArrowRight",
    ArrowDown: "ArrowDown"
  };

  // node_modules/tabster/dist/esm/State/Subscribable.js
  init_define_import_meta_env();
  var Subscribable = class {
    _val;
    _callbacks = [];
    dispose() {
      this._callbacks = [];
      delete this._val;
    }
    subscribe(callback) {
      const callbacks = this._callbacks;
      const index = callbacks.indexOf(callback);
      if (index < 0) {
        callbacks.push(callback);
      }
    }
    subscribeFirst(callback) {
      const callbacks = this._callbacks;
      const index = callbacks.indexOf(callback);
      if (index >= 0) {
        callbacks.splice(index, 1);
      }
      callbacks.unshift(callback);
    }
    unsubscribe(callback) {
      const index = this._callbacks.indexOf(callback);
      if (index >= 0) {
        this._callbacks.splice(index, 1);
      }
    }
    setVal(val, detail) {
      if (this._val === val) {
        return;
      }
      this._val = val;
      this._callCallbacks(val, detail);
    }
    getVal() {
      return this._val;
    }
    trigger(val, detail) {
      this._callCallbacks(val, detail);
    }
    _callCallbacks(val, detail) {
      this._callbacks.forEach((callback) => callback(val, detail));
    }
  };

  // node_modules/tabster/dist/esm/State/FocusedElement.js
  function getUncontrolledCompletelyContainer(tabster, element) {
    const getParent2 = tabster.getParent;
    let el = element;
    do {
      const uncontrolledOnElement = getTabsterOnElement(tabster, el)?.uncontrolled;
      if (uncontrolledOnElement && tabster.uncontrolled.isUncontrolledCompletely(el, !!uncontrolledOnElement.completely)) {
        return el;
      }
      el = getParent2(el);
    } while (el);
    return void 0;
  }
  var AsyncFocusIntentPriorityBySource = {
    [AsyncFocusSources.Restorer]: 0,
    [AsyncFocusSources.Deloser]: 1,
    [AsyncFocusSources.EscapeGroupper]: 2
  };
  var FocusedElementState = class _FocusedElementState extends Subscribable {
    static _lastResetElement;
    static _isTabbingTimer;
    static isTabbing = false;
    _tabster;
    _win;
    _nextVal;
    _lastVal;
    _asyncFocus;
    constructor(tabster, getWindow) {
      super();
      this._tabster = tabster;
      this._win = getWindow;
      tabster.queueInit(this._init);
    }
    _init = () => {
      const win = this._win();
      const doc = win.document;
      doc.addEventListener(KEYBORG_FOCUSIN, this._onFocusIn, true);
      doc.addEventListener(KEYBORG_FOCUSOUT, this._onFocusOut, true);
      win.addEventListener("keydown", this._onKeyDown, true);
      const activeElement = dom.getActiveElement(doc);
      if (activeElement && activeElement !== doc.body) {
        this._setFocusedElement(activeElement);
      }
      this.subscribe(this._onChanged);
    };
    dispose() {
      super.dispose();
      const win = this._win();
      const doc = win.document;
      doc.removeEventListener(KEYBORG_FOCUSIN, this._onFocusIn, true);
      doc.removeEventListener(KEYBORG_FOCUSOUT, this._onFocusOut, true);
      win.removeEventListener("keydown", this._onKeyDown, true);
      this.unsubscribe(this._onChanged);
      const asyncFocus = this._asyncFocus;
      if (asyncFocus) {
        win.clearTimeout(asyncFocus.timeout);
        delete this._asyncFocus;
      }
      delete _FocusedElementState._lastResetElement;
      delete this._nextVal;
      delete this._lastVal;
    }
    static forgetMemorized(instance, parent) {
      let wel = _FocusedElementState._lastResetElement;
      let el = wel && wel.get();
      if (el && dom.nodeContains(parent, el)) {
        delete _FocusedElementState._lastResetElement;
      }
      el = instance._nextVal?.element?.get();
      if (el && dom.nodeContains(parent, el)) {
        delete instance._nextVal;
      }
      wel = instance._lastVal;
      el = wel && wel.get();
      if (el && dom.nodeContains(parent, el)) {
        delete instance._lastVal;
      }
    }
    getFocusedElement() {
      return this.getVal();
    }
    getLastFocusedElement() {
      let el = this._lastVal?.get();
      if (!el || el && !documentContains(el.ownerDocument, el)) {
        this._lastVal = el = void 0;
      }
      return el;
    }
    focus(element, noFocusedProgrammaticallyFlag, noAccessibleCheck, preventScroll) {
      if (!this._tabster.focusable.isFocusable(element, noFocusedProgrammaticallyFlag, false, noAccessibleCheck)) {
        return false;
      }
      element.focus({ preventScroll });
      return true;
    }
    focusDefault(container) {
      const el = this._tabster.focusable.findDefault({ container });
      if (el) {
        this._tabster.focusedElement.focus(el);
        return true;
      }
      return false;
    }
    getFirstOrLastTabbable(isFirst, props) {
      const { container, ignoreAccessibility } = props;
      let toFocus;
      if (container) {
        const ctx = RootAPI.getTabsterContext(this._tabster, container);
        if (ctx) {
          toFocus = _FocusedElementState.findNextTabbable(this._tabster, ctx, container, void 0, void 0, !isFirst, ignoreAccessibility)?.element;
        }
      }
      if (toFocus && !dom.nodeContains(container, toFocus)) {
        toFocus = void 0;
      }
      return toFocus || void 0;
    }
    _focusFirstOrLast(isFirst, props) {
      const toFocus = this.getFirstOrLastTabbable(isFirst, props);
      if (toFocus) {
        this.focus(toFocus, false, true);
        return true;
      }
      return false;
    }
    focusFirst(props) {
      return this._focusFirstOrLast(true, props);
    }
    focusLast(props) {
      return this._focusFirstOrLast(false, props);
    }
    resetFocus(container) {
      if (!this._tabster.focusable.isVisible(container)) {
        return false;
      }
      if (!this._tabster.focusable.isFocusable(container, true, true, true)) {
        const prevTabIndex = container.getAttribute("tabindex");
        const prevAriaHidden = container.getAttribute("aria-hidden");
        container.tabIndex = -1;
        container.setAttribute("aria-hidden", "true");
        _FocusedElementState._lastResetElement = new WeakHTMLElement(container);
        this.focus(container, true, true);
        this._setOrRemoveAttribute(container, "tabindex", prevTabIndex);
        this._setOrRemoveAttribute(container, "aria-hidden", prevAriaHidden);
      } else {
        this.focus(container);
      }
      return true;
    }
    requestAsyncFocus(source, callback, delay) {
      const win = this._tabster.getWindow();
      const currentAsyncFocus = this._asyncFocus;
      if (currentAsyncFocus) {
        if (AsyncFocusIntentPriorityBySource[source] > AsyncFocusIntentPriorityBySource[currentAsyncFocus.source]) {
          return;
        }
        win.clearTimeout(currentAsyncFocus.timeout);
      }
      this._asyncFocus = {
        source,
        callback,
        timeout: win.setTimeout(() => {
          this._asyncFocus = void 0;
          callback();
        }, delay)
      };
    }
    cancelAsyncFocus(source) {
      const asyncFocus = this._asyncFocus;
      if (asyncFocus?.source === source) {
        this._tabster.getWindow().clearTimeout(asyncFocus.timeout);
        this._asyncFocus = void 0;
      }
    }
    _setOrRemoveAttribute(element, name, value) {
      if (value === null) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value);
      }
    }
    _setFocusedElement(element, relatedTarget, isFocusedProgrammatically) {
      if (this._tabster._noop) {
        return;
      }
      const detail = { relatedTarget };
      if (element) {
        const lastResetElement = _FocusedElementState._lastResetElement?.get();
        _FocusedElementState._lastResetElement = void 0;
        if (lastResetElement === element || shouldIgnoreFocus(element)) {
          return;
        }
        detail.isFocusedProgrammatically = isFocusedProgrammatically;
        const ctx = RootAPI.getTabsterContext(this._tabster, element);
        const modalizerId = ctx?.modalizer?.userId;
        if (modalizerId) {
          detail.modalizerId = modalizerId;
        }
      }
      const nextVal = this._nextVal = {
        element: element ? new WeakHTMLElement(element) : void 0,
        detail
      };
      if (element && element !== this._val) {
        this._validateFocusedElement(element);
      }
      if (this._nextVal === nextVal) {
        this.setVal(element, detail);
      }
      this._nextVal = void 0;
    }
    setVal(val, detail) {
      super.setVal(val, detail);
      if (val) {
        this._lastVal = new WeakHTMLElement(val);
      }
    }
    _onFocusIn = (e) => {
      const target = e.composedPath()[0];
      if (target) {
        this._setFocusedElement(target, e.detail.relatedTarget, e.detail.isFocusedProgrammatically);
      }
    };
    _onFocusOut = (e) => {
      this._setFocusedElement(void 0, e.detail?.originalEvent.relatedTarget);
    };
    static findNextTabbable(tabster, ctx, container, currentElement, referenceElement, isBackward, ignoreAccessibility) {
      const actualContainer = container || ctx.root.getElement();
      if (!actualContainer) {
        return null;
      }
      let next = null;
      const isTabbingTimer = _FocusedElementState._isTabbingTimer;
      const win = tabster.getWindow();
      if (isTabbingTimer) {
        win.clearTimeout(isTabbingTimer);
      }
      _FocusedElementState.isTabbing = true;
      _FocusedElementState._isTabbingTimer = win.setTimeout(() => {
        delete _FocusedElementState._isTabbingTimer;
        _FocusedElementState.isTabbing = false;
      }, 0);
      const modalizer = ctx.modalizer;
      const groupper = ctx.groupper;
      const mover = ctx.mover;
      const callFindNext = (what) => {
        next = what.findNextTabbable(currentElement, referenceElement, isBackward, ignoreAccessibility);
        if (currentElement && !next?.element) {
          const parentElement = what !== modalizer && dom.getParentElement(what.getElement());
          if (parentElement) {
            const parentCtx = RootAPI.getTabsterContext(tabster, currentElement, { referenceElement: parentElement });
            if (parentCtx) {
              const currentScopeElement = what.getElement();
              const newCurrent = isBackward ? currentScopeElement : currentScopeElement && getLastChild(currentScopeElement) || currentScopeElement;
              if (newCurrent) {
                next = _FocusedElementState.findNextTabbable(tabster, parentCtx, container, newCurrent, parentElement, isBackward, ignoreAccessibility);
                if (next) {
                  next.outOfDOMOrder = true;
                }
              }
            }
          }
        }
      };
      if (groupper && mover) {
        callFindNext(ctx.groupperBeforeMover ? groupper : mover);
      } else if (groupper) {
        callFindNext(groupper);
      } else if (mover) {
        callFindNext(mover);
      } else if (modalizer) {
        callFindNext(modalizer);
      } else {
        const findProps = {
          container: actualContainer,
          currentElement,
          referenceElement,
          ignoreAccessibility,
          useActiveModalizer: true
        };
        const findPropsOut = {};
        const nextElement = tabster.focusable[isBackward ? "findPrev" : "findNext"](findProps, findPropsOut);
        next = {
          element: nextElement,
          outOfDOMOrder: findPropsOut.outOfDOMOrder,
          uncontrolled: findPropsOut.uncontrolled
        };
      }
      return next;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _validateFocusedElement = (element) => {
    };
    _onKeyDown = (event) => {
      if (event.key !== Keys.Tab || event.ctrlKey) {
        return;
      }
      const currentElement = this.getVal();
      if (!currentElement || !currentElement.ownerDocument || currentElement.contentEditable === "true") {
        return;
      }
      const tabster = this._tabster;
      const controlTab = tabster.controlTab;
      const ctx = RootAPI.getTabsterContext(tabster, currentElement);
      if (!ctx || ctx.ignoreKeydown(event)) {
        return;
      }
      const isBackward = event.shiftKey;
      const next = _FocusedElementState.findNextTabbable(tabster, ctx, void 0, currentElement, void 0, isBackward, true);
      const rootElement = ctx.root.getElement();
      if (!rootElement) {
        return;
      }
      const nextElement = next?.element;
      const uncontrolledCompletelyContainer = getUncontrolledCompletelyContainer(tabster, currentElement);
      if (nextElement) {
        const nextUncontrolled = next.uncontrolled;
        if (ctx.uncontrolled || dom.nodeContains(nextUncontrolled, currentElement)) {
          if (!next.outOfDOMOrder && nextUncontrolled === ctx.uncontrolled || uncontrolledCompletelyContainer && !dom.nodeContains(uncontrolledCompletelyContainer, nextElement)) {
            return;
          }
          DummyInputManager.addPhantomDummyWithTarget(tabster, currentElement, isBackward, nextElement);
          return;
        }
        if (nextUncontrolled && tabster.focusable.isVisible(nextUncontrolled) || nextElement.tagName === "IFRAME" && tabster.focusable.isVisible(nextElement)) {
          if (rootElement.dispatchEvent(new TabsterMoveFocusEvent({
            by: "root",
            owner: rootElement,
            next: nextElement,
            relatedEvent: event
          }))) {
            DummyInputManager.moveWithPhantomDummy(tabster, nextUncontrolled ?? nextElement, false, isBackward, event);
          }
          return;
        }
        if (controlTab || next?.outOfDOMOrder) {
          if (rootElement.dispatchEvent(new TabsterMoveFocusEvent({
            by: "root",
            owner: rootElement,
            next: nextElement,
            relatedEvent: event
          }))) {
            event.preventDefault();
            event.stopImmediatePropagation();
            nativeFocus(nextElement);
          }
        } else {
        }
      } else {
        if (!uncontrolledCompletelyContainer && rootElement.dispatchEvent(new TabsterMoveFocusEvent({
          by: "root",
          owner: rootElement,
          next: null,
          relatedEvent: event
        }))) {
          ctx.root.moveOutWithDefaultAction(isBackward, event);
        }
      }
    };
    _onChanged = (element, detail) => {
      if (element) {
        element.dispatchEvent(new TabsterFocusInEvent(detail));
      } else {
        const last = this._lastVal?.get();
        if (last) {
          const d = { ...detail };
          const lastCtx = RootAPI.getTabsterContext(this._tabster, last);
          const modalizerId = lastCtx?.modalizer?.userId;
          if (modalizerId) {
            d.modalizerId = modalizerId;
          }
          last.dispatchEvent(new TabsterFocusOutEvent(d));
        }
      }
    };
  };

  // node_modules/tabster/dist/esm/State/KeyboardNavigation.js
  init_define_import_meta_env();
  var KeyboardNavigationState = class extends Subscribable {
    _keyborg;
    constructor(getWindow) {
      super();
      this._keyborg = createKeyborg(getWindow());
      this._keyborg.subscribe(this._onChange);
    }
    dispose() {
      super.dispose();
      if (this._keyborg) {
        this._keyborg.unsubscribe(this._onChange);
        disposeKeyborg(this._keyborg);
        delete this._keyborg;
      }
    }
    _onChange = (isNavigatingWithKeyboard) => {
      this.setVal(isNavigatingWithKeyboard, void 0);
    };
    setNavigatingWithKeyboard(isNavigatingWithKeyboard) {
      this._keyborg?.setVal(isNavigatingWithKeyboard);
    }
    isNavigatingWithKeyboard() {
      return !!this._keyborg?.isNavigatingWithKeyboard();
    }
  };

  // node_modules/tabster/dist/esm/MutationEvent.js
  init_define_import_meta_env();
  function observeMutations(doc, tabster, updateTabsterByAttribute2, syncState) {
    if (typeof MutationObserver === "undefined") {
      return () => {
      };
    }
    const getWindow = tabster.getWindow;
    let elementByUId;
    const onMutation = (mutations) => {
      const removedNodes = /* @__PURE__ */ new Set();
      for (const mutation of mutations) {
        const target = mutation.target;
        const removed = mutation.removedNodes;
        const added = mutation.addedNodes;
        if (mutation.type === "attributes") {
          if (mutation.attributeName === TABSTER_ATTRIBUTE_NAME) {
            if (!removedNodes.has(target)) {
              updateTabsterByAttribute2(tabster, target);
            }
          }
        } else {
          for (let i = 0; i < removed.length; i++) {
            const removedNode = removed[i];
            removedNodes.add(removedNode);
            updateTabsterElements(removedNode, true);
            tabster._dummyObserver.domChanged?.(target);
          }
          for (let i = 0; i < added.length; i++) {
            updateTabsterElements(added[i]);
            tabster._dummyObserver.domChanged?.(target);
          }
        }
      }
      removedNodes.clear();
      tabster.modalizer?.hiddenUpdate();
    };
    function updateTabsterElements(node, removed) {
      if (!elementByUId) {
        elementByUId = getInstanceContext(getWindow).elementByUId;
      }
      processNode(node, removed);
      const walker = createElementTreeWalker(doc, node, (element) => {
        return processNode(element, removed);
      });
      if (walker) {
        while (walker.nextNode()) {
        }
      }
    }
    function processNode(element, removed) {
      if (!element.getAttribute) {
        return NodeFilter.FILTER_SKIP;
      }
      const uid = element.__tabsterElementUID;
      if (uid && elementByUId) {
        if (removed) {
          delete elementByUId[uid];
        } else {
          elementByUId[uid] ??= new WeakHTMLElement(element);
        }
      }
      if (getTabsterOnElement(tabster, element) || element.hasAttribute(TABSTER_ATTRIBUTE_NAME)) {
        updateTabsterByAttribute2(tabster, element, removed);
      }
      return NodeFilter.FILTER_SKIP;
    }
    const observer = dom.createMutationObserver(onMutation);
    if (syncState) {
      updateTabsterElements(getWindow().document.body);
    }
    observer.observe(doc, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: [TABSTER_ATTRIBUTE_NAME]
    });
    return () => {
      observer.disconnect();
    };
  }

  // node_modules/tabster/dist/esm/Uncontrolled.js
  init_define_import_meta_env();
  var UncontrolledAPI = class {
    _isUncontrolledCompletely;
    constructor(isUncontrolledCompletely) {
      this._isUncontrolledCompletely = isUncontrolledCompletely;
    }
    isUncontrolledCompletely(element, completely) {
      const isUncontrolledCompletely = this._isUncontrolledCompletely?.(element, completely);
      return isUncontrolledCompletely === void 0 ? completely : isUncontrolledCompletely;
    }
  };

  // node_modules/tabster/dist/esm/get/getMover.js
  init_define_import_meta_env();

  // node_modules/tabster/dist/esm/Mover.js
  init_define_import_meta_env();
  var _inputSelector = ["input", "textarea", "*[contenteditable]"].join(", ");
  var MoverDummyManager = class extends DummyInputManager {
    _tabster;
    _getMemorized;
    constructor(element, tabster, getMemorized, sys) {
      super(tabster, element, DummyInputManagerPriorities.Mover, sys);
      this._tabster = tabster;
      this._getMemorized = getMemorized;
      this._setHandlers(this._onFocusDummyInput);
    }
    _onFocusDummyInput = (dummyInput) => {
      const container = this._element.get();
      const input = dummyInput.input;
      if (container && input) {
        const ctx = RootAPI.getTabsterContext(this._tabster, container);
        let toFocus;
        if (ctx) {
          toFocus = FocusedElementState.findNextTabbable(this._tabster, ctx, void 0, input, void 0, !dummyInput.isFirst, true)?.element;
        }
        const memorized = this._getMemorized()?.get();
        if (memorized && this._tabster.focusable.isFocusable(memorized)) {
          toFocus = memorized;
        }
        if (toFocus) {
          nativeFocus(toFocus);
        }
      }
    };
  };
  var _moverUpdateAdd = 1;
  var _moverUpdateAttr = 2;
  var _moverUpdateRemove = 3;
  var Mover = class extends TabsterPart {
    _unobserve;
    _intersectionObserver;
    _setCurrentTimer;
    _current;
    _prevCurrent;
    _visible = {};
    _fullyVisible;
    _win;
    _onDispose;
    _allElements;
    _updateQueue;
    _updateTimer;
    visibilityTolerance;
    dummyManager;
    constructor(tabster, element, onDispose, props, sys) {
      super(tabster, element, props);
      this._win = tabster.getWindow;
      this.visibilityTolerance = props.visibilityTolerance ?? 0.8;
      if (this._props.trackState || this._props.visibilityAware) {
        this._intersectionObserver = new IntersectionObserver(this._onIntersection, { threshold: [0, 0.25, 0.5, 0.75, 1] });
        this._observeState();
      }
      this._onDispose = onDispose;
      const getMemorized = () => props.memorizeCurrent ? this._current : void 0;
      if (!tabster.controlTab) {
        this.dummyManager = new MoverDummyManager(this._element, tabster, getMemorized, sys);
      }
    }
    dispose() {
      this._onDispose(this);
      if (this._intersectionObserver) {
        this._intersectionObserver.disconnect();
        delete this._intersectionObserver;
      }
      delete this._current;
      delete this._fullyVisible;
      delete this._allElements;
      delete this._updateQueue;
      if (this._unobserve) {
        this._unobserve();
        delete this._unobserve;
      }
      const win = this._win();
      if (this._setCurrentTimer) {
        win.clearTimeout(this._setCurrentTimer);
        delete this._setCurrentTimer;
      }
      if (this._updateTimer) {
        win.clearTimeout(this._updateTimer);
        delete this._updateTimer;
      }
      this.dummyManager?.dispose();
      delete this.dummyManager;
    }
    setCurrent(element) {
      if (element) {
        this._current = new WeakHTMLElement(element);
      } else {
        this._current = void 0;
      }
      if ((this._props.trackState || this._props.visibilityAware) && !this._setCurrentTimer) {
        this._setCurrentTimer = this._win().setTimeout(() => {
          delete this._setCurrentTimer;
          const changed = [];
          if (this._current !== this._prevCurrent) {
            changed.push(this._current);
            changed.push(this._prevCurrent);
            this._prevCurrent = this._current;
          }
          for (const weak of changed) {
            const el = weak?.get();
            if (el && this._allElements?.get(el) === this) {
              const props = this._props;
              if (el && (props.visibilityAware !== void 0 || props.trackState)) {
                const state = this.getState(el);
                if (state) {
                  el.dispatchEvent(new MoverStateEvent(state));
                }
              }
            }
          }
        });
      }
    }
    getCurrent() {
      return this._current?.get() || null;
    }
    findNextTabbable(currentElement, referenceElement, isBackward, ignoreAccessibility) {
      const container = this.getElement();
      const currentIsDummy = container && getDummyInputContainer(currentElement) === container;
      if (!container) {
        return null;
      }
      let next = null;
      let outOfDOMOrder = false;
      let uncontrolled;
      if (this._props.tabbable || currentIsDummy || currentElement && !dom.nodeContains(container, currentElement)) {
        const findProps = {
          currentElement,
          referenceElement,
          container,
          ignoreAccessibility,
          useActiveModalizer: true
        };
        const findPropsOut = {};
        next = this._tabster.focusable[isBackward ? "findPrev" : "findNext"](findProps, findPropsOut);
        outOfDOMOrder = !!findPropsOut.outOfDOMOrder;
        uncontrolled = findPropsOut.uncontrolled;
      }
      return {
        element: next,
        uncontrolled,
        outOfDOMOrder
      };
    }
    acceptElement(element, state) {
      if (!FocusedElementState.isTabbing) {
        return state.currentCtx?.excludedFromMover ? NodeFilter.FILTER_REJECT : void 0;
      }
      const { memorizeCurrent, visibilityAware, hasDefault = true } = this._props;
      const moverElement = this.getElement();
      if (moverElement && (memorizeCurrent || visibilityAware || hasDefault) && (!dom.nodeContains(moverElement, state.from) || getDummyInputContainer(state.from) === moverElement)) {
        let found;
        if (memorizeCurrent) {
          const current = this._current?.get();
          if (current && state.acceptCondition(current)) {
            found = current;
          }
        }
        if (!found && hasDefault) {
          found = this._tabster.focusable.findDefault({
            container: moverElement,
            useActiveModalizer: true
          });
        }
        if (!found && visibilityAware) {
          found = this._tabster.focusable.findElement({
            container: moverElement,
            useActiveModalizer: true,
            isBackward: state.isBackward,
            acceptCondition: (el) => {
              const id = getElementUId(this._win, el);
              const visibility = this._visible[id];
              return moverElement !== el && !!this._allElements?.get(el) && state.acceptCondition(el) && (visibility === Visibilities.Visible || visibility === Visibilities.PartiallyVisible && (visibilityAware === Visibilities.PartiallyVisible || !this._fullyVisible));
            }
          });
        }
        if (found) {
          state.found = true;
          state.foundElement = found;
          state.rejectElementsFrom = moverElement;
          state.skippedFocusable = true;
          return NodeFilter.FILTER_ACCEPT;
        }
      }
      return void 0;
    }
    _onIntersection = (entries) => {
      for (const entry of entries) {
        const el = entry.target;
        const id = getElementUId(this._win, el);
        let newVisibility;
        let fullyVisible = this._fullyVisible;
        if (entry.intersectionRatio >= 0.25) {
          newVisibility = entry.intersectionRatio >= 0.75 ? Visibilities.Visible : Visibilities.PartiallyVisible;
          if (newVisibility === Visibilities.Visible) {
            fullyVisible = id;
          }
        } else {
          newVisibility = Visibilities.Invisible;
        }
        if (this._visible[id] !== newVisibility) {
          if (newVisibility === void 0) {
            delete this._visible[id];
            if (fullyVisible === id) {
              delete this._fullyVisible;
            }
          } else {
            this._visible[id] = newVisibility;
            this._fullyVisible = fullyVisible;
          }
          const state = this.getState(el);
          if (state) {
            el.dispatchEvent(new MoverStateEvent(state));
          }
        }
      }
    };
    _observeState() {
      const element = this.getElement();
      if (this._unobserve || !element || typeof MutationObserver === "undefined") {
        return;
      }
      const win = this._win();
      const allElements = this._allElements = /* @__PURE__ */ new WeakMap();
      const tabsterFocusable = this._tabster.focusable;
      let updateQueue = this._updateQueue = [];
      const observer = dom.createMutationObserver((mutations) => {
        for (const mutation of mutations) {
          const target = mutation.target;
          const removed = mutation.removedNodes;
          const added = mutation.addedNodes;
          if (mutation.type === "attributes") {
            if (mutation.attributeName === "tabindex") {
              updateQueue.push({
                element: target,
                type: _moverUpdateAttr
              });
            }
          } else {
            for (let i = 0; i < removed.length; i++) {
              updateQueue.push({
                element: removed[i],
                type: _moverUpdateRemove
              });
            }
            for (let i = 0; i < added.length; i++) {
              updateQueue.push({
                element: added[i],
                type: _moverUpdateAdd
              });
            }
          }
        }
        requestUpdate();
      });
      const setElement = (element2, remove) => {
        const current = allElements.get(element2);
        if (current && remove) {
          this._intersectionObserver?.unobserve(element2);
          allElements.delete(element2);
        }
        if (!current && !remove) {
          allElements.set(element2, this);
          this._intersectionObserver?.observe(element2);
        }
      };
      const updateElement = (element2) => {
        const isFocusable = tabsterFocusable.isFocusable(element2);
        const current = allElements.get(element2);
        if (current) {
          if (!isFocusable) {
            setElement(element2, true);
          }
        } else {
          if (isFocusable) {
            setElement(element2);
          }
        }
      };
      const addNewElements = (element2) => {
        const { mover } = getMoverGroupper(element2);
        if (mover && mover !== this) {
          if (mover.getElement() === element2 && tabsterFocusable.isFocusable(element2)) {
            setElement(element2);
          } else {
            return;
          }
        }
        const walker = createElementTreeWalker(win.document, element2, (node) => {
          const { mover: mover2, groupper } = getMoverGroupper(node);
          if (mover2 && mover2 !== this) {
            return NodeFilter.FILTER_REJECT;
          }
          const groupperFirstFocusable = groupper?.getFirst(true);
          if (groupper && groupper.getElement() !== node && groupperFirstFocusable && groupperFirstFocusable !== node) {
            return NodeFilter.FILTER_REJECT;
          }
          if (tabsterFocusable.isFocusable(node)) {
            setElement(node);
          }
          return NodeFilter.FILTER_SKIP;
        });
        if (walker) {
          walker.currentNode = element2;
          while (walker.nextNode()) {
          }
        }
      };
      const removeWalk = (element2) => {
        const current = allElements.get(element2);
        if (current) {
          setElement(element2, true);
        }
        for (let el = dom.getFirstElementChild(element2); el; el = dom.getNextElementSibling(el)) {
          removeWalk(el);
        }
      };
      const requestUpdate = () => {
        if (!this._updateTimer && updateQueue.length) {
          this._updateTimer = win.setTimeout(() => {
            delete this._updateTimer;
            for (const { element: element2, type } of updateQueue) {
              switch (type) {
                case _moverUpdateAttr:
                  updateElement(element2);
                  break;
                case _moverUpdateAdd:
                  addNewElements(element2);
                  break;
                case _moverUpdateRemove:
                  removeWalk(element2);
                  break;
              }
            }
            updateQueue = this._updateQueue = [];
          }, 0);
        }
      };
      const getMoverGroupper = (element2) => {
        const ret = {};
        for (let el = element2; el; el = dom.getParentElement(el)) {
          const toe = getTabsterOnElement(this._tabster, el);
          if (toe) {
            if (toe.groupper && !ret.groupper) {
              ret.groupper = toe.groupper;
            }
            if (toe.mover) {
              ret.mover = toe.mover;
              break;
            }
          }
        }
        return ret;
      };
      updateQueue.push({ element, type: _moverUpdateAdd });
      requestUpdate();
      observer.observe(element, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["tabindex"]
      });
      this._unobserve = () => {
        observer.disconnect();
      };
    }
    getState(element) {
      const id = getElementUId(this._win, element);
      if (id in this._visible) {
        const visibility = this._visible[id] || Visibilities.Invisible;
        const isCurrent = this._current ? this._current.get() === element : void 0;
        return {
          isCurrent,
          visibility
        };
      }
      return void 0;
    }
  };
  function validateMoverProps(props) {
  }
  function getDistance(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    const xDistance = ax2 < bx1 ? bx1 - ax2 : bx2 < ax1 ? ax1 - bx2 : 0;
    const yDistance = ay2 < by1 ? by1 - ay2 : by2 < ay1 ? ay1 - by2 : 0;
    return xDistance === 0 ? yDistance : yDistance === 0 ? xDistance : Math.sqrt(xDistance * xDistance + yDistance * yDistance);
  }
  var MoverAPI = class {
    _tabster;
    _win;
    _movers;
    _ignoredInputTimer;
    _ignoredInputResolve;
    constructor(tabster, getWindow) {
      this._tabster = tabster;
      this._win = getWindow;
      this._movers = {};
      tabster.queueInit(this._init);
    }
    _init = () => {
      const win = this._win();
      win.addEventListener("keydown", this._onKeyDown, true);
      win.addEventListener(MoverMoveFocusEventName, this._onMoveFocus);
      win.addEventListener(MoverMemorizedElementEventName, this._onMemorizedElement);
      this._tabster.focusedElement.subscribe(this._onFocus);
    };
    dispose() {
      const win = this._win();
      this._tabster.focusedElement.unsubscribe(this._onFocus);
      this._ignoredInputResolve?.(false);
      if (this._ignoredInputTimer) {
        win.clearTimeout(this._ignoredInputTimer);
        delete this._ignoredInputTimer;
      }
      win.removeEventListener("keydown", this._onKeyDown, true);
      win.removeEventListener(MoverMoveFocusEventName, this._onMoveFocus);
      win.removeEventListener(MoverMemorizedElementEventName, this._onMemorizedElement);
      Object.keys(this._movers).forEach((moverId) => {
        if (this._movers[moverId]) {
          this._movers[moverId].dispose();
          delete this._movers[moverId];
        }
      });
    }
    createMover(element, props, sys) {
      if (true) {
        validateMoverProps(props);
      }
      const newMover = new Mover(this._tabster, element, this._onMoverDispose, props, sys);
      this._movers[newMover.id] = newMover;
      return newMover;
    }
    _onMoverDispose = (mover) => {
      delete this._movers[mover.id];
    };
    _onFocus = (element) => {
      let currentFocusableElement = element;
      let deepestFocusableElement = element;
      for (let el = dom.getParentElement(element); el; el = dom.getParentElement(el)) {
        const mover = getTabsterOnElement(this._tabster, el)?.mover;
        if (mover) {
          mover.setCurrent(deepestFocusableElement);
          currentFocusableElement = void 0;
        }
        if (!currentFocusableElement && this._tabster.focusable.isFocusable(el)) {
          currentFocusableElement = deepestFocusableElement = el;
        }
      }
    };
    moveFocus(fromElement, key) {
      return this._moveFocus(fromElement, key);
    }
    _moveFocus(fromElement, key, relatedEvent) {
      const tabster = this._tabster;
      const ctx = RootAPI.getTabsterContext(tabster, fromElement, {
        checkRtl: true
      });
      if (!ctx || !ctx.mover || ctx.excludedFromMover || relatedEvent && ctx.ignoreKeydown(relatedEvent)) {
        return null;
      }
      const mover = ctx.mover;
      const container = mover.getElement();
      if (ctx.groupperBeforeMover) {
        const groupper = ctx.groupper;
        if (groupper && !groupper.isActive(true)) {
          for (let el = dom.getParentElement(groupper.getElement()); el && el !== container; el = dom.getParentElement(el)) {
            if (getTabsterOnElement(tabster, el)?.groupper?.isActive(true)) {
              return null;
            }
          }
        } else {
          return null;
        }
      }
      if (!container) {
        return null;
      }
      const focusable = tabster.focusable;
      const moverProps = mover.getProps();
      const direction = moverProps.direction || MoverDirections.Both;
      const isBoth = direction === MoverDirections.Both;
      const isVertical = isBoth || direction === MoverDirections.Vertical;
      const isHorizontal = isBoth || direction === MoverDirections.Horizontal;
      const isGridLinear = direction === MoverDirections.GridLinear;
      const isGrid = isGridLinear || direction === MoverDirections.Grid;
      const isCyclic = moverProps.cyclic;
      let next;
      let scrollIntoViewArg;
      let focusedElementRect;
      let focusedElementX1 = 0;
      let focusedElementX2 = 0;
      if (isGrid) {
        focusedElementRect = fromElement.getBoundingClientRect();
        focusedElementX1 = Math.ceil(focusedElementRect.left);
        focusedElementX2 = Math.floor(focusedElementRect.right);
      }
      if (ctx.rtl) {
        if (key === MoverKeys.ArrowRight) {
          key = MoverKeys.ArrowLeft;
        } else if (key === MoverKeys.ArrowLeft) {
          key = MoverKeys.ArrowRight;
        }
      }
      if (key === MoverKeys.ArrowDown && isVertical || key === MoverKeys.ArrowRight && (isHorizontal || isGrid)) {
        next = focusable.findNext({
          currentElement: fromElement,
          container,
          useActiveModalizer: true
        });
        if (next && isGrid) {
          const nextElementX1 = Math.ceil(next.getBoundingClientRect().left);
          if (!isGridLinear && focusedElementX2 > nextElementX1) {
            next = void 0;
          }
        } else if (!next && isCyclic) {
          next = focusable.findFirst({
            container,
            useActiveModalizer: true
          });
        }
      } else if (key === MoverKeys.ArrowUp && isVertical || key === MoverKeys.ArrowLeft && (isHorizontal || isGrid)) {
        next = focusable.findPrev({
          currentElement: fromElement,
          container,
          useActiveModalizer: true
        });
        if (next && isGrid) {
          const nextElementX2 = Math.floor(next.getBoundingClientRect().right);
          if (!isGridLinear && nextElementX2 > focusedElementX1) {
            next = void 0;
          }
        } else if (!next && isCyclic) {
          next = focusable.findLast({
            container,
            useActiveModalizer: true
          });
        }
      } else if (key === MoverKeys.Home) {
        if (isGrid) {
          focusable.findElement({
            container,
            currentElement: fromElement,
            useActiveModalizer: true,
            isBackward: true,
            acceptCondition: (el) => {
              if (!focusable.isFocusable(el)) {
                return false;
              }
              const nextElementX1 = Math.ceil(el.getBoundingClientRect().left ?? 0);
              if (el !== fromElement && focusedElementX1 <= nextElementX1) {
                return true;
              }
              next = el;
              return false;
            }
          });
        } else {
          next = focusable.findFirst({
            container,
            useActiveModalizer: true
          });
        }
      } else if (key === MoverKeys.End) {
        if (isGrid) {
          focusable.findElement({
            container,
            currentElement: fromElement,
            useActiveModalizer: true,
            acceptCondition: (el) => {
              if (!focusable.isFocusable(el)) {
                return false;
              }
              const nextElementX1 = Math.ceil(el.getBoundingClientRect().left ?? 0);
              if (el !== fromElement && focusedElementX1 >= nextElementX1) {
                return true;
              }
              next = el;
              return false;
            }
          });
        } else {
          next = focusable.findLast({
            container,
            useActiveModalizer: true
          });
        }
      } else if (key === MoverKeys.PageUp) {
        focusable.findElement({
          currentElement: fromElement,
          container,
          useActiveModalizer: true,
          isBackward: true,
          acceptCondition: (el) => {
            if (!focusable.isFocusable(el)) {
              return false;
            }
            if (isElementVerticallyVisibleInContainer(this._win, el, mover.visibilityTolerance)) {
              next = el;
              return false;
            }
            return true;
          }
        });
        if (isGrid && next) {
          const firstColumnX1 = Math.ceil(next.getBoundingClientRect().left);
          focusable.findElement({
            currentElement: next,
            container,
            useActiveModalizer: true,
            acceptCondition: (el) => {
              if (!focusable.isFocusable(el)) {
                return false;
              }
              const nextElementX1 = Math.ceil(el.getBoundingClientRect().left);
              if (focusedElementX1 < nextElementX1 || firstColumnX1 >= nextElementX1) {
                return true;
              }
              next = el;
              return false;
            }
          });
        }
        scrollIntoViewArg = false;
      } else if (key === MoverKeys.PageDown) {
        focusable.findElement({
          currentElement: fromElement,
          container,
          useActiveModalizer: true,
          acceptCondition: (el) => {
            if (!focusable.isFocusable(el)) {
              return false;
            }
            if (isElementVerticallyVisibleInContainer(this._win, el, mover.visibilityTolerance)) {
              next = el;
              return false;
            }
            return true;
          }
        });
        if (isGrid && next) {
          const lastColumnX1 = Math.ceil(next.getBoundingClientRect().left);
          focusable.findElement({
            currentElement: next,
            container,
            useActiveModalizer: true,
            isBackward: true,
            acceptCondition: (el) => {
              if (!focusable.isFocusable(el)) {
                return false;
              }
              const nextElementX1 = Math.ceil(el.getBoundingClientRect().left);
              if (focusedElementX1 > nextElementX1 || lastColumnX1 <= nextElementX1) {
                return true;
              }
              next = el;
              return false;
            }
          });
        }
        scrollIntoViewArg = true;
      } else if (isGrid) {
        const isBackward = key === MoverKeys.ArrowUp;
        const ax1 = focusedElementX1;
        const ay1 = Math.ceil(focusedElementRect.top);
        const ax2 = focusedElementX2;
        const ay2 = Math.floor(focusedElementRect.bottom);
        let targetElement;
        let lastDistance;
        let lastIntersection = 0;
        focusable.findAll({
          container,
          currentElement: fromElement,
          isBackward,
          onElement: (el) => {
            const rect = el.getBoundingClientRect();
            const bx1 = Math.ceil(rect.left);
            const by1 = Math.ceil(rect.top);
            const bx2 = Math.floor(rect.right);
            const by2 = Math.floor(rect.bottom);
            if (isBackward && ay1 < by2 || !isBackward && ay2 > by1) {
              return true;
            }
            const xIntersectionWidth = Math.ceil(Math.min(ax2, bx2)) - Math.floor(Math.max(ax1, bx1));
            const minWidth = Math.ceil(Math.min(ax2 - ax1, bx2 - bx1));
            if (xIntersectionWidth > 0 && minWidth >= xIntersectionWidth) {
              const intersection = xIntersectionWidth / minWidth;
              if (intersection > lastIntersection) {
                targetElement = el;
                lastIntersection = intersection;
              }
            } else if (lastIntersection === 0) {
              const distance = getDistance(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2);
              if (lastDistance === void 0 || distance < lastDistance) {
                lastDistance = distance;
                targetElement = el;
              }
            } else if (lastIntersection > 0) {
              return false;
            }
            return true;
          }
        });
        next = targetElement;
      }
      if (next && (!relatedEvent || relatedEvent && container.dispatchEvent(new TabsterMoveFocusEvent({
        by: "mover",
        owner: container,
        next,
        relatedEvent
      })))) {
        if (scrollIntoViewArg !== void 0) {
          scrollIntoView(this._win, next, scrollIntoViewArg);
        }
        if (relatedEvent) {
          relatedEvent.preventDefault();
          relatedEvent.stopImmediatePropagation();
        }
        nativeFocus(next);
        return next;
      }
      return null;
    }
    _onKeyDown = async (event) => {
      if (this._ignoredInputTimer) {
        this._win().clearTimeout(this._ignoredInputTimer);
        delete this._ignoredInputTimer;
      }
      this._ignoredInputResolve?.(false);
      if (event.ctrlKey || event.altKey || event.shiftKey || event.metaKey) {
        return;
      }
      const key = event.key;
      let moverKey;
      if (key === Keys.ArrowDown) {
        moverKey = MoverKeys.ArrowDown;
      } else if (key === Keys.ArrowRight) {
        moverKey = MoverKeys.ArrowRight;
      } else if (key === Keys.ArrowUp) {
        moverKey = MoverKeys.ArrowUp;
      } else if (key === Keys.ArrowLeft) {
        moverKey = MoverKeys.ArrowLeft;
      } else if (key === Keys.PageDown) {
        moverKey = MoverKeys.PageDown;
      } else if (key === Keys.PageUp) {
        moverKey = MoverKeys.PageUp;
      } else if (key === Keys.Home) {
        moverKey = MoverKeys.Home;
      } else if (key === Keys.End) {
        moverKey = MoverKeys.End;
      }
      if (!moverKey) {
        return;
      }
      const focused = this._tabster.focusedElement.getFocusedElement();
      if (!focused || await this._isIgnoredInput(focused, key)) {
        return;
      }
      this._moveFocus(focused, moverKey, event);
    };
    _onMoveFocus = (e) => {
      const element = e.composedPath()[0];
      const key = e.detail?.key;
      if (element && key !== void 0 && !e.defaultPrevented) {
        this._moveFocus(element, key);
        e.stopImmediatePropagation();
      }
    };
    _onMemorizedElement = (e) => {
      const target = e.composedPath()[0];
      let memorizedElement = e.detail?.memorizedElement;
      if (target) {
        const ctx = RootAPI.getTabsterContext(this._tabster, target);
        const mover = ctx?.mover;
        if (mover) {
          if (memorizedElement && !dom.nodeContains(mover.getElement(), memorizedElement)) {
            memorizedElement = void 0;
          }
          mover.setCurrent(memorizedElement);
          e.stopImmediatePropagation();
        }
      }
    };
    async _isIgnoredInput(element, key) {
      if (element.getAttribute("aria-expanded") === "true" && (element.hasAttribute("aria-activedescendant") || element.getAttribute("role") === "combobox")) {
        return true;
      }
      if (matchesSelector(element, _inputSelector)) {
        let selectionStart = 0;
        let selectionEnd = 0;
        let textLength = 0;
        let asyncRet;
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          const type = element.type;
          const value = element.value;
          textLength = (value || "").length;
          if (type === "email" || type === "number") {
            if (textLength) {
              const selection = dom.getSelection(element);
              if (selection) {
                const initialLength = selection.toString().length;
                const isBackward = key === Keys.ArrowLeft || key === Keys.ArrowUp;
                selection.modify("extend", isBackward ? "backward" : "forward", "character");
                if (initialLength !== selection.toString().length) {
                  selection.modify("extend", isBackward ? "forward" : "backward", "character");
                  return true;
                } else {
                  textLength = 0;
                }
              }
            }
          } else {
            const selStart = element.selectionStart;
            if (selStart === null) {
              return type === "hidden";
            }
            selectionStart = selStart || 0;
            selectionEnd = element.selectionEnd || 0;
          }
        } else if (element.contentEditable === "true") {
          asyncRet = new Promise((resolve) => {
            this._ignoredInputResolve = (value) => {
              delete this._ignoredInputResolve;
              resolve(value);
            };
            const win = this._win();
            if (this._ignoredInputTimer) {
              win.clearTimeout(this._ignoredInputTimer);
            }
            const { anchorNode: prevAnchorNode, focusNode: prevFocusNode, anchorOffset: prevAnchorOffset, focusOffset: prevFocusOffset } = dom.getSelection(element) || {};
            this._ignoredInputTimer = win.setTimeout(() => {
              delete this._ignoredInputTimer;
              const { anchorNode, focusNode, anchorOffset, focusOffset } = dom.getSelection(element) || {};
              if (anchorNode !== prevAnchorNode || focusNode !== prevFocusNode || anchorOffset !== prevAnchorOffset || focusOffset !== prevFocusOffset) {
                this._ignoredInputResolve?.(false);
                return;
              }
              selectionStart = anchorOffset || 0;
              selectionEnd = focusOffset || 0;
              textLength = element.textContent?.length || 0;
              if (anchorNode && focusNode) {
                if (dom.nodeContains(element, anchorNode) && dom.nodeContains(element, focusNode)) {
                  if (anchorNode !== element) {
                    let anchorFound = false;
                    const addOffsets = (node) => {
                      if (node === anchorNode) {
                        anchorFound = true;
                      } else if (node === focusNode) {
                        return true;
                      }
                      const nodeText = node.textContent;
                      if (nodeText && !dom.getFirstChild(node)) {
                        const len = nodeText.length;
                        if (anchorFound) {
                          if (focusNode !== anchorNode) {
                            selectionEnd += len;
                          }
                        } else {
                          selectionStart += len;
                          selectionEnd += len;
                        }
                      }
                      let stop = false;
                      for (let e = dom.getFirstChild(node); e && !stop; e = e.nextSibling) {
                        stop = addOffsets(e);
                      }
                      return stop;
                    };
                    addOffsets(element);
                  }
                }
              }
              this._ignoredInputResolve?.(true);
            }, 0);
          });
        }
        if (asyncRet && !await asyncRet) {
          return true;
        }
        if (selectionStart !== selectionEnd) {
          return true;
        }
        if (selectionStart > 0 && (key === Keys.ArrowLeft || key === Keys.ArrowUp || key === Keys.Home)) {
          return true;
        }
        if (selectionStart < textLength && (key === Keys.ArrowRight || key === Keys.ArrowDown || key === Keys.End)) {
          return true;
        }
      }
      return false;
    }
  };

  // node_modules/tabster/dist/esm/get/getMover.js
  function getMover(tabster) {
    const tabsterCore = tabster.core;
    if (!tabsterCore.mover) {
      const api = new MoverAPI(tabsterCore, tabsterCore.getWindow);
      tabsterCore.mover = api;
      tabsterCore.attrHandlers.set("mover", (element, existingMover, newProps, _oldProps, sys) => {
        if (existingMover) {
          existingMover.setProps(newProps);
          return existingMover;
        }
        return api.createMover(element, newProps, sys);
      });
    }
    return tabsterCore.mover;
  }

  // node_modules/tabster/dist/esm/Tabster.js
  var Tabster = class {
    keyboardNavigation;
    focusedElement;
    focusable;
    root;
    uncontrolled;
    core;
    constructor(tabster) {
      this.keyboardNavigation = tabster.keyboardNavigation;
      this.focusedElement = tabster.focusedElement;
      this.focusable = tabster.focusable;
      this.root = tabster.root;
      this.uncontrolled = tabster.uncontrolled;
      this.core = tabster;
    }
  };
  var TabsterCore = class {
    _storage;
    _unobserve;
    _win;
    _forgetMemorizedTimer;
    _forgetMemorizedElements = [];
    _wrappers = /* @__PURE__ */ new Set();
    _initTimer;
    _initQueue = [];
    _version = "8.8.0";
    _noop = false;
    controlTab;
    rootDummyInputs;
    // Variance gap: per-key handler types are contravariant in their
    // parameters, so a fully-typed Map<K, TabsterAttrHandler<K>> can't unify
    // them. Cast a plain Map to the typed view; the override on `set` keeps
    // registration type-safe per key, while `get` falls back to the Map's
    // value type (the type-erased shape).
    attrHandlers = /* @__PURE__ */ new Map();
    // Core APIs
    keyboardNavigation;
    focusedElement;
    focusable;
    root;
    uncontrolled;
    internal;
    _dummyObserver;
    // Extended APIs
    groupper;
    mover;
    outline;
    deloser;
    modalizer;
    observedElement;
    crossOrigin;
    restorer;
    getParent;
    constructor(win, props) {
      this._storage = /* @__PURE__ */ new WeakMap();
      this._win = win;
      const getWindow = this.getWindow;
      if (props?.DOMAPI) {
        setDOMAPI({ ...props.DOMAPI });
      }
      this.keyboardNavigation = new KeyboardNavigationState(getWindow);
      this.focusedElement = new FocusedElementState(this, getWindow);
      this.focusable = new FocusableAPI(this);
      this.root = new RootAPI(this, props?.autoRoot);
      this.uncontrolled = new UncontrolledAPI(
        // TODO: Remove checkUncontrolledTrappingFocus in the next major version.
        props?.checkUncontrolledCompletely || props?.checkUncontrolledTrappingFocus
      );
      this.controlTab = props?.controlTab ?? true;
      this.rootDummyInputs = !!props?.rootDummyInputs;
      this._dummyObserver = new DummyInputObserver(getWindow);
      this.getParent = props?.getParent ?? dom.getParentNode;
      this.internal = {
        stopObserver: () => {
          if (this._unobserve) {
            this._unobserve();
            delete this._unobserve;
          }
        },
        resumeObserver: (syncState) => {
          if (!this._unobserve) {
            const doc = getWindow().document;
            this._unobserve = observeMutations(doc, this, updateTabsterByAttribute, syncState);
          }
        }
      };
      this.queueInit(() => {
        this.internal.resumeObserver(true);
      });
    }
    /**
     * Merges external props with the current props. Not all
     * props can/should be mergeable, so let's add more as we move on.
     * @param props Tabster props
     */
    _mergeProps(props) {
      if (!props) {
        return;
      }
      this.getParent = props.getParent ?? this.getParent;
    }
    createTabster(noRefCount, props) {
      const wrapper = new Tabster(this);
      if (!noRefCount) {
        this._wrappers.add(wrapper);
      }
      this._mergeProps(props);
      return wrapper;
    }
    disposeTabster(wrapper, allInstances) {
      if (allInstances) {
        this._wrappers.clear();
      } else {
        this._wrappers.delete(wrapper);
      }
      if (this._wrappers.size === 0) {
        this.dispose();
      }
    }
    dispose() {
      this.internal.stopObserver();
      const win = this._win;
      win?.clearTimeout(this._initTimer);
      delete this._initTimer;
      this._initQueue = [];
      this._forgetMemorizedElements = [];
      if (win && this._forgetMemorizedTimer) {
        win.clearTimeout(this._forgetMemorizedTimer);
        delete this._forgetMemorizedTimer;
      }
      this.outline?.dispose();
      this.crossOrigin?.dispose();
      this.deloser?.dispose();
      this.groupper?.dispose();
      this.mover?.dispose();
      this.modalizer?.dispose();
      this.observedElement?.dispose();
      this.restorer?.dispose();
      this.keyboardNavigation.dispose();
      this.focusable.dispose();
      this.focusedElement.dispose();
      this.root.dispose();
      this._dummyObserver.dispose();
      this.attrHandlers.clear();
      clearElementCache(this.getWindow);
      this._storage = /* @__PURE__ */ new WeakMap();
      this._wrappers.clear();
      if (win) {
        disposeInstanceContext(win);
        delete win.__tabsterInstance;
        delete this._win;
      }
    }
    storageEntry(element, addremove) {
      const storage = this._storage;
      let entry = storage.get(element);
      if (entry) {
        if (addremove === false && Object.keys(entry).length === 0) {
          storage.delete(element);
        }
      } else if (addremove === true) {
        entry = {};
        storage.set(element, entry);
      }
      return entry;
    }
    getWindow = () => {
      if (!this._win) {
        throw new Error("Using disposed Tabster.");
      }
      return this._win;
    };
    forceCleanup() {
      if (!this._win) {
        return;
      }
      this._forgetMemorizedElements.push(this._win.document.body);
      if (this._forgetMemorizedTimer) {
        return;
      }
      this._forgetMemorizedTimer = this._win.setTimeout(() => {
        delete this._forgetMemorizedTimer;
        for (let el = this._forgetMemorizedElements.shift(); el; el = this._forgetMemorizedElements.shift()) {
          clearElementCache(this.getWindow, el);
          FocusedElementState.forgetMemorized(this.focusedElement, el);
        }
      }, 0);
    }
    queueInit(callback) {
      if (!this._win) {
        return;
      }
      this._initQueue.push(callback);
      if (!this._initTimer) {
        this._initTimer = this._win?.setTimeout(() => {
          delete this._initTimer;
          this.drainInitQueue();
        }, 0);
      }
    }
    drainInitQueue() {
      if (!this._win) {
        return;
      }
      const queue = this._initQueue;
      this._initQueue = [];
      queue.forEach((callback) => callback());
    }
  };
  function createTabster(win, props) {
    let tabster = getCurrentTabster(win);
    if (tabster) {
      return tabster.createTabster(false, props);
    }
    tabster = new TabsterCore(win, props);
    win.__tabsterInstance = tabster;
    return tabster.createTabster();
  }
  function disposeTabster(tabster, allInstances) {
    tabster.core.disposeTabster(tabster, allInstances);
  }
  function getCurrentTabster(win) {
    return win.__tabsterInstance;
  }

  // node_modules/@fluentui/react-tabster/lib/hooks/useTabsterAttributes.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-tabster/lib/hooks/useTabster.js
  init_define_import_meta_env();
  var React15 = __toESM(require_react_shim());
  var DEFAULT_FACTORY = (tabster) => {
    return tabster;
  };
  function createTabsterWithConfig(targetDocument) {
    const defaultView = (targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.defaultView) || void 0;
    const shadowDOMAPI = defaultView === null || defaultView === void 0 ? void 0 : defaultView.__tabsterShadowDOMAPI;
    if (defaultView) {
      return createTabster(defaultView, {
        autoRoot: {},
        controlTab: false,
        getParent,
        // The non-undefined return value of checkUncontrolledCompletely() dominates the value that the element might
        // have in its `uncontrolled: { completely: true }` part of the tabster attribute. We must make sure to return
        // undefined if we want the value from tabster attribute to be respected.
        checkUncontrolledCompletely: (element) => {
          var _element_firstElementChild;
          return ((_element_firstElementChild = element.firstElementChild) === null || _element_firstElementChild === void 0 ? void 0 : _element_firstElementChild.hasAttribute("data-is-focus-trap-zone-bumper")) === true || void 0;
        },
        DOMAPI: shadowDOMAPI
      });
    }
  }
  function useTabster(factory = DEFAULT_FACTORY) {
    const { targetDocument } = useFluent();
    const factoryResultRef = React15.useRef(null);
    useIsomorphicLayoutEffect(() => {
      const tabster = createTabsterWithConfig(targetDocument);
      if (tabster) {
        factoryResultRef.current = factory(tabster);
        return () => {
          disposeTabster(tabster);
          factoryResultRef.current = null;
        };
      }
    }, [
      targetDocument,
      factory
    ]);
    if (true) {
      const previousFactory = usePrevious(factory);
      if (previousFactory !== null && previousFactory !== factory) {
        throw new Error([
          "@fluentui/react-tabster: ",
          "The factory function passed to useTabster has changed. This should not ever happen."
        ].join("\n"));
      }
    }
    return factoryResultRef;
  }

  // node_modules/@fluentui/react-tabster/lib/hooks/useTabsterAttributes.js
  var React16 = __toESM(require_react_shim());
  var useTabsterAttributes = (props) => {
    useTabster();
    const strAttr = getTabsterAttribute(props, true);
    return React16.useMemo(() => ({
      [TABSTER_ATTRIBUTE_NAME]: strAttr
    }), [
      strAttr
    ]);
  };

  // node_modules/@fluentui/react-tabster/lib/hooks/useArrowNavigationGroup.js
  var useArrowNavigationGroup = (options = {}) => {
    const {
      circular,
      axis,
      memorizeCurrent = true,
      tabbable,
      ignoreDefaultKeydown,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      unstable_hasDefault
    } = options;
    useTabster(getMover);
    return useTabsterAttributes({
      mover: {
        cyclic: !!circular,
        direction: axisToMoverDirection(axis !== null && axis !== void 0 ? axis : "vertical"),
        memorizeCurrent,
        tabbable,
        hasDefault: unstable_hasDefault
      },
      ...ignoreDefaultKeydown && {
        focusable: {
          ignoreKeydown: ignoreDefaultKeydown
        }
      }
    });
  };
  function axisToMoverDirection(axis) {
    switch (axis) {
      case "horizontal":
        return MoverDirections.Horizontal;
      case "grid":
        return MoverDirections.Grid;
      case "grid-linear":
        return MoverDirections.GridLinear;
      case "both":
        return MoverDirections.Both;
      case "vertical":
      default:
        return MoverDirections.Vertical;
    }
  }

  // node_modules/@fluentui/react-theme/lib/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/tokens/lib/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/tokens/lib/tokens.js
  init_define_import_meta_env();
  var tokens = {
    // Color tokens
    colorNeutralForeground1: "var(--colorNeutralForeground1)",
    colorNeutralForeground1Hover: "var(--colorNeutralForeground1Hover)",
    colorNeutralForeground1Pressed: "var(--colorNeutralForeground1Pressed)",
    colorNeutralForeground1Selected: "var(--colorNeutralForeground1Selected)",
    colorNeutralForeground2: "var(--colorNeutralForeground2)",
    colorNeutralForeground2Hover: "var(--colorNeutralForeground2Hover)",
    colorNeutralForeground2Pressed: "var(--colorNeutralForeground2Pressed)",
    colorNeutralForeground2Selected: "var(--colorNeutralForeground2Selected)",
    colorNeutralForeground2BrandHover: "var(--colorNeutralForeground2BrandHover)",
    colorNeutralForeground2BrandPressed: "var(--colorNeutralForeground2BrandPressed)",
    colorNeutralForeground2BrandSelected: "var(--colorNeutralForeground2BrandSelected)",
    colorNeutralForeground3: "var(--colorNeutralForeground3)",
    colorNeutralForeground3Hover: "var(--colorNeutralForeground3Hover)",
    colorNeutralForeground3Pressed: "var(--colorNeutralForeground3Pressed)",
    colorNeutralForeground3Selected: "var(--colorNeutralForeground3Selected)",
    colorNeutralForeground3BrandHover: "var(--colorNeutralForeground3BrandHover)",
    colorNeutralForeground3BrandPressed: "var(--colorNeutralForeground3BrandPressed)",
    colorNeutralForeground3BrandSelected: "var(--colorNeutralForeground3BrandSelected)",
    colorNeutralForeground4: "var(--colorNeutralForeground4)",
    colorNeutralForeground5: "var(--colorNeutralForeground5)",
    colorNeutralForeground5Hover: "var(--colorNeutralForeground5Hover)",
    colorNeutralForeground5Pressed: "var(--colorNeutralForeground5Pressed)",
    colorNeutralForeground5Selected: "var(--colorNeutralForeground5Selected)",
    colorNeutralForegroundDisabled: "var(--colorNeutralForegroundDisabled)",
    colorBrandForegroundLink: "var(--colorBrandForegroundLink)",
    colorBrandForegroundLinkHover: "var(--colorBrandForegroundLinkHover)",
    colorBrandForegroundLinkPressed: "var(--colorBrandForegroundLinkPressed)",
    colorBrandForegroundLinkSelected: "var(--colorBrandForegroundLinkSelected)",
    colorNeutralForeground2Link: "var(--colorNeutralForeground2Link)",
    colorNeutralForeground2LinkHover: "var(--colorNeutralForeground2LinkHover)",
    colorNeutralForeground2LinkPressed: "var(--colorNeutralForeground2LinkPressed)",
    colorNeutralForeground2LinkSelected: "var(--colorNeutralForeground2LinkSelected)",
    colorCompoundBrandForeground1: "var(--colorCompoundBrandForeground1)",
    colorCompoundBrandForeground1Hover: "var(--colorCompoundBrandForeground1Hover)",
    colorCompoundBrandForeground1Pressed: "var(--colorCompoundBrandForeground1Pressed)",
    colorNeutralForegroundOnBrand: "var(--colorNeutralForegroundOnBrand)",
    colorNeutralForegroundInverted: "var(--colorNeutralForegroundInverted)",
    colorNeutralForegroundInvertedHover: "var(--colorNeutralForegroundInvertedHover)",
    colorNeutralForegroundInvertedPressed: "var(--colorNeutralForegroundInvertedPressed)",
    colorNeutralForegroundInvertedSelected: "var(--colorNeutralForegroundInvertedSelected)",
    colorNeutralForegroundInverted2: "var(--colorNeutralForegroundInverted2)",
    colorNeutralForegroundStaticInverted: "var(--colorNeutralForegroundStaticInverted)",
    colorNeutralForegroundInvertedLink: "var(--colorNeutralForegroundInvertedLink)",
    colorNeutralForegroundInvertedLinkHover: "var(--colorNeutralForegroundInvertedLinkHover)",
    colorNeutralForegroundInvertedLinkPressed: "var(--colorNeutralForegroundInvertedLinkPressed)",
    colorNeutralForegroundInvertedLinkSelected: "var(--colorNeutralForegroundInvertedLinkSelected)",
    colorNeutralForegroundInvertedDisabled: "var(--colorNeutralForegroundInvertedDisabled)",
    colorBrandForeground1: "var(--colorBrandForeground1)",
    colorBrandForeground2: "var(--colorBrandForeground2)",
    colorBrandForeground2Hover: "var(--colorBrandForeground2Hover)",
    colorBrandForeground2Pressed: "var(--colorBrandForeground2Pressed)",
    colorNeutralForeground1Static: "var(--colorNeutralForeground1Static)",
    colorBrandForegroundInverted: "var(--colorBrandForegroundInverted)",
    colorBrandForegroundInvertedHover: "var(--colorBrandForegroundInvertedHover)",
    colorBrandForegroundInvertedPressed: "var(--colorBrandForegroundInvertedPressed)",
    colorBrandForegroundOnLight: "var(--colorBrandForegroundOnLight)",
    colorBrandForegroundOnLightHover: "var(--colorBrandForegroundOnLightHover)",
    colorBrandForegroundOnLightPressed: "var(--colorBrandForegroundOnLightPressed)",
    colorBrandForegroundOnLightSelected: "var(--colorBrandForegroundOnLightSelected)",
    colorNeutralBackground1: "var(--colorNeutralBackground1)",
    colorNeutralBackground1Hover: "var(--colorNeutralBackground1Hover)",
    colorNeutralBackground1Pressed: "var(--colorNeutralBackground1Pressed)",
    colorNeutralBackground1Selected: "var(--colorNeutralBackground1Selected)",
    colorNeutralBackground2: "var(--colorNeutralBackground2)",
    colorNeutralBackground2Hover: "var(--colorNeutralBackground2Hover)",
    colorNeutralBackground2Pressed: "var(--colorNeutralBackground2Pressed)",
    colorNeutralBackground2Selected: "var(--colorNeutralBackground2Selected)",
    colorNeutralBackground3: "var(--colorNeutralBackground3)",
    colorNeutralBackground3Hover: "var(--colorNeutralBackground3Hover)",
    colorNeutralBackground3Pressed: "var(--colorNeutralBackground3Pressed)",
    colorNeutralBackground3Selected: "var(--colorNeutralBackground3Selected)",
    colorNeutralBackground4: "var(--colorNeutralBackground4)",
    colorNeutralBackground4Hover: "var(--colorNeutralBackground4Hover)",
    colorNeutralBackground4Pressed: "var(--colorNeutralBackground4Pressed)",
    colorNeutralBackground4Selected: "var(--colorNeutralBackground4Selected)",
    colorNeutralBackground5: "var(--colorNeutralBackground5)",
    colorNeutralBackground5Hover: "var(--colorNeutralBackground5Hover)",
    colorNeutralBackground5Pressed: "var(--colorNeutralBackground5Pressed)",
    colorNeutralBackground5Selected: "var(--colorNeutralBackground5Selected)",
    colorNeutralBackground6: "var(--colorNeutralBackground6)",
    colorNeutralBackground7: "var(--colorNeutralBackground7)",
    colorNeutralBackground7Hover: "var(--colorNeutralBackground7Hover)",
    colorNeutralBackground7Pressed: "var(--colorNeutralBackground7Pressed)",
    colorNeutralBackground7Selected: "var(--colorNeutralBackground7Selected)",
    colorNeutralBackground8: "var(--colorNeutralBackground8)",
    colorNeutralBackgroundInverted: "var(--colorNeutralBackgroundInverted)",
    colorNeutralBackgroundInvertedHover: "var(--colorNeutralBackgroundInvertedHover)",
    colorNeutralBackgroundInvertedPressed: "var(--colorNeutralBackgroundInvertedPressed)",
    colorNeutralBackgroundInvertedSelected: "var(--colorNeutralBackgroundInvertedSelected)",
    colorNeutralBackgroundStatic: "var(--colorNeutralBackgroundStatic)",
    colorNeutralBackgroundAlpha: "var(--colorNeutralBackgroundAlpha)",
    colorNeutralBackgroundAlpha2: "var(--colorNeutralBackgroundAlpha2)",
    colorSubtleBackground: "var(--colorSubtleBackground)",
    colorSubtleBackgroundHover: "var(--colorSubtleBackgroundHover)",
    colorSubtleBackgroundPressed: "var(--colorSubtleBackgroundPressed)",
    colorSubtleBackgroundSelected: "var(--colorSubtleBackgroundSelected)",
    colorSubtleBackgroundLightAlphaHover: "var(--colorSubtleBackgroundLightAlphaHover)",
    colorSubtleBackgroundLightAlphaPressed: "var(--colorSubtleBackgroundLightAlphaPressed)",
    colorSubtleBackgroundLightAlphaSelected: "var(--colorSubtleBackgroundLightAlphaSelected)",
    colorSubtleBackgroundInverted: "var(--colorSubtleBackgroundInverted)",
    colorSubtleBackgroundInvertedHover: "var(--colorSubtleBackgroundInvertedHover)",
    colorSubtleBackgroundInvertedPressed: "var(--colorSubtleBackgroundInvertedPressed)",
    colorSubtleBackgroundInvertedSelected: "var(--colorSubtleBackgroundInvertedSelected)",
    colorTransparentBackground: "var(--colorTransparentBackground)",
    colorTransparentBackgroundHover: "var(--colorTransparentBackgroundHover)",
    colorTransparentBackgroundPressed: "var(--colorTransparentBackgroundPressed)",
    colorTransparentBackgroundSelected: "var(--colorTransparentBackgroundSelected)",
    colorNeutralBackgroundDisabled: "var(--colorNeutralBackgroundDisabled)",
    colorNeutralBackgroundDisabled2: "var(--colorNeutralBackgroundDisabled2)",
    colorNeutralBackgroundInvertedDisabled: "var(--colorNeutralBackgroundInvertedDisabled)",
    colorNeutralStencil1: "var(--colorNeutralStencil1)",
    colorNeutralStencil2: "var(--colorNeutralStencil2)",
    colorNeutralStencil1Alpha: "var(--colorNeutralStencil1Alpha)",
    colorNeutralStencil2Alpha: "var(--colorNeutralStencil2Alpha)",
    colorBackgroundOverlay: "var(--colorBackgroundOverlay)",
    colorScrollbarOverlay: "var(--colorScrollbarOverlay)",
    colorBrandBackground: "var(--colorBrandBackground)",
    colorBrandBackgroundHover: "var(--colorBrandBackgroundHover)",
    colorBrandBackgroundPressed: "var(--colorBrandBackgroundPressed)",
    colorBrandBackgroundSelected: "var(--colorBrandBackgroundSelected)",
    colorCompoundBrandBackground: "var(--colorCompoundBrandBackground)",
    colorCompoundBrandBackgroundHover: "var(--colorCompoundBrandBackgroundHover)",
    colorCompoundBrandBackgroundPressed: "var(--colorCompoundBrandBackgroundPressed)",
    colorBrandBackgroundStatic: "var(--colorBrandBackgroundStatic)",
    colorBrandBackground2: "var(--colorBrandBackground2)",
    colorBrandBackground2Hover: "var(--colorBrandBackground2Hover)",
    colorBrandBackground2Pressed: "var(--colorBrandBackground2Pressed)",
    colorBrandBackground3Static: "var(--colorBrandBackground3Static)",
    colorBrandBackground4Static: "var(--colorBrandBackground4Static)",
    colorBrandBackgroundInverted: "var(--colorBrandBackgroundInverted)",
    colorBrandBackgroundInvertedHover: "var(--colorBrandBackgroundInvertedHover)",
    colorBrandBackgroundInvertedPressed: "var(--colorBrandBackgroundInvertedPressed)",
    colorBrandBackgroundInvertedSelected: "var(--colorBrandBackgroundInvertedSelected)",
    colorNeutralCardBackground: "var(--colorNeutralCardBackground)",
    colorNeutralCardBackgroundHover: "var(--colorNeutralCardBackgroundHover)",
    colorNeutralCardBackgroundPressed: "var(--colorNeutralCardBackgroundPressed)",
    colorNeutralCardBackgroundSelected: "var(--colorNeutralCardBackgroundSelected)",
    colorNeutralCardBackgroundDisabled: "var(--colorNeutralCardBackgroundDisabled)",
    colorNeutralStrokeAccessible: "var(--colorNeutralStrokeAccessible)",
    colorNeutralStrokeAccessibleHover: "var(--colorNeutralStrokeAccessibleHover)",
    colorNeutralStrokeAccessiblePressed: "var(--colorNeutralStrokeAccessiblePressed)",
    colorNeutralStrokeAccessibleSelected: "var(--colorNeutralStrokeAccessibleSelected)",
    colorNeutralStroke1: "var(--colorNeutralStroke1)",
    colorNeutralStroke1Hover: "var(--colorNeutralStroke1Hover)",
    colorNeutralStroke1Pressed: "var(--colorNeutralStroke1Pressed)",
    colorNeutralStroke1Selected: "var(--colorNeutralStroke1Selected)",
    colorNeutralStroke2: "var(--colorNeutralStroke2)",
    colorNeutralStroke3: "var(--colorNeutralStroke3)",
    colorNeutralStroke4: "var(--colorNeutralStroke4)",
    colorNeutralStroke4Hover: "var(--colorNeutralStroke4Hover)",
    colorNeutralStroke4Pressed: "var(--colorNeutralStroke4Pressed)",
    colorNeutralStroke4Selected: "var(--colorNeutralStroke4Selected)",
    colorNeutralStrokeSubtle: "var(--colorNeutralStrokeSubtle)",
    colorNeutralStrokeOnBrand: "var(--colorNeutralStrokeOnBrand)",
    colorNeutralStrokeOnBrand2: "var(--colorNeutralStrokeOnBrand2)",
    colorNeutralStrokeOnBrand2Hover: "var(--colorNeutralStrokeOnBrand2Hover)",
    colorNeutralStrokeOnBrand2Pressed: "var(--colorNeutralStrokeOnBrand2Pressed)",
    colorNeutralStrokeOnBrand2Selected: "var(--colorNeutralStrokeOnBrand2Selected)",
    colorBrandStroke1: "var(--colorBrandStroke1)",
    colorBrandStroke2: "var(--colorBrandStroke2)",
    colorBrandStroke2Hover: "var(--colorBrandStroke2Hover)",
    colorBrandStroke2Pressed: "var(--colorBrandStroke2Pressed)",
    colorBrandStroke2Contrast: "var(--colorBrandStroke2Contrast)",
    colorCompoundBrandStroke: "var(--colorCompoundBrandStroke)",
    colorCompoundBrandStrokeHover: "var(--colorCompoundBrandStrokeHover)",
    colorCompoundBrandStrokePressed: "var(--colorCompoundBrandStrokePressed)",
    colorNeutralStrokeDisabled: "var(--colorNeutralStrokeDisabled)",
    colorNeutralStrokeDisabled2: "var(--colorNeutralStrokeDisabled2)",
    colorNeutralStrokeInvertedDisabled: "var(--colorNeutralStrokeInvertedDisabled)",
    colorTransparentStroke: "var(--colorTransparentStroke)",
    colorTransparentStrokeInteractive: "var(--colorTransparentStrokeInteractive)",
    colorTransparentStrokeDisabled: "var(--colorTransparentStrokeDisabled)",
    colorNeutralStrokeAlpha: "var(--colorNeutralStrokeAlpha)",
    colorNeutralStrokeAlpha2: "var(--colorNeutralStrokeAlpha2)",
    colorStrokeFocus1: "var(--colorStrokeFocus1)",
    colorStrokeFocus2: "var(--colorStrokeFocus2)",
    colorNeutralShadowAmbient: "var(--colorNeutralShadowAmbient)",
    colorNeutralShadowKey: "var(--colorNeutralShadowKey)",
    colorNeutralShadowAmbientLighter: "var(--colorNeutralShadowAmbientLighter)",
    colorNeutralShadowKeyLighter: "var(--colorNeutralShadowKeyLighter)",
    colorNeutralShadowAmbientDarker: "var(--colorNeutralShadowAmbientDarker)",
    colorNeutralShadowKeyDarker: "var(--colorNeutralShadowKeyDarker)",
    colorBrandShadowAmbient: "var(--colorBrandShadowAmbient)",
    colorBrandShadowKey: "var(--colorBrandShadowKey)",
    // Color palette tokens
    // Color palette red tokens
    colorPaletteRedBackground1: "var(--colorPaletteRedBackground1)",
    colorPaletteRedBackground2: "var(--colorPaletteRedBackground2)",
    colorPaletteRedBackground3: "var(--colorPaletteRedBackground3)",
    colorPaletteRedBorderActive: "var(--colorPaletteRedBorderActive)",
    colorPaletteRedBorder1: "var(--colorPaletteRedBorder1)",
    colorPaletteRedBorder2: "var(--colorPaletteRedBorder2)",
    colorPaletteRedForeground1: "var(--colorPaletteRedForeground1)",
    colorPaletteRedForeground2: "var(--colorPaletteRedForeground2)",
    colorPaletteRedForeground3: "var(--colorPaletteRedForeground3)",
    colorPaletteRedForegroundInverted: "var(--colorPaletteRedForegroundInverted)",
    // Color palette green tokens
    colorPaletteGreenBackground1: "var(--colorPaletteGreenBackground1)",
    colorPaletteGreenBackground2: "var(--colorPaletteGreenBackground2)",
    colorPaletteGreenBackground3: "var(--colorPaletteGreenBackground3)",
    colorPaletteGreenBorderActive: "var(--colorPaletteGreenBorderActive)",
    colorPaletteGreenBorder1: "var(--colorPaletteGreenBorder1)",
    colorPaletteGreenBorder2: "var(--colorPaletteGreenBorder2)",
    colorPaletteGreenForeground1: "var(--colorPaletteGreenForeground1)",
    colorPaletteGreenForeground2: "var(--colorPaletteGreenForeground2)",
    colorPaletteGreenForeground3: "var(--colorPaletteGreenForeground3)",
    colorPaletteGreenForegroundInverted: "var(--colorPaletteGreenForegroundInverted)",
    // Color palette dark orange tokens
    colorPaletteDarkOrangeBackground1: "var(--colorPaletteDarkOrangeBackground1)",
    colorPaletteDarkOrangeBackground2: "var(--colorPaletteDarkOrangeBackground2)",
    colorPaletteDarkOrangeBackground3: "var(--colorPaletteDarkOrangeBackground3)",
    colorPaletteDarkOrangeBorderActive: "var(--colorPaletteDarkOrangeBorderActive)",
    colorPaletteDarkOrangeBorder1: "var(--colorPaletteDarkOrangeBorder1)",
    colorPaletteDarkOrangeBorder2: "var(--colorPaletteDarkOrangeBorder2)",
    colorPaletteDarkOrangeForeground1: "var(--colorPaletteDarkOrangeForeground1)",
    colorPaletteDarkOrangeForeground2: "var(--colorPaletteDarkOrangeForeground2)",
    colorPaletteDarkOrangeForeground3: "var(--colorPaletteDarkOrangeForeground3)",
    // Color palette yellow tokens
    colorPaletteYellowBackground1: "var(--colorPaletteYellowBackground1)",
    colorPaletteYellowBackground2: "var(--colorPaletteYellowBackground2)",
    colorPaletteYellowBackground3: "var(--colorPaletteYellowBackground3)",
    colorPaletteYellowBorderActive: "var(--colorPaletteYellowBorderActive)",
    colorPaletteYellowBorder1: "var(--colorPaletteYellowBorder1)",
    colorPaletteYellowBorder2: "var(--colorPaletteYellowBorder2)",
    colorPaletteYellowForeground1: "var(--colorPaletteYellowForeground1)",
    colorPaletteYellowForeground2: "var(--colorPaletteYellowForeground2)",
    colorPaletteYellowForeground3: "var(--colorPaletteYellowForeground3)",
    colorPaletteYellowForegroundInverted: "var(--colorPaletteYellowForegroundInverted)",
    // Color palette berry tokens
    colorPaletteBerryBackground1: "var(--colorPaletteBerryBackground1)",
    colorPaletteBerryBackground2: "var(--colorPaletteBerryBackground2)",
    colorPaletteBerryBackground3: "var(--colorPaletteBerryBackground3)",
    colorPaletteBerryBorderActive: "var(--colorPaletteBerryBorderActive)",
    colorPaletteBerryBorder1: "var(--colorPaletteBerryBorder1)",
    colorPaletteBerryBorder2: "var(--colorPaletteBerryBorder2)",
    colorPaletteBerryForeground1: "var(--colorPaletteBerryForeground1)",
    colorPaletteBerryForeground2: "var(--colorPaletteBerryForeground2)",
    colorPaletteBerryForeground3: "var(--colorPaletteBerryForeground3)",
    // Color palette marigold tokens
    colorPaletteMarigoldBackground1: "var(--colorPaletteMarigoldBackground1)",
    colorPaletteMarigoldBackground2: "var(--colorPaletteMarigoldBackground2)",
    colorPaletteMarigoldBackground3: "var(--colorPaletteMarigoldBackground3)",
    colorPaletteMarigoldBorderActive: "var(--colorPaletteMarigoldBorderActive)",
    colorPaletteMarigoldBorder1: "var(--colorPaletteMarigoldBorder1)",
    colorPaletteMarigoldBorder2: "var(--colorPaletteMarigoldBorder2)",
    colorPaletteMarigoldForeground1: "var(--colorPaletteMarigoldForeground1)",
    colorPaletteMarigoldForeground2: "var(--colorPaletteMarigoldForeground2)",
    colorPaletteMarigoldForeground3: "var(--colorPaletteMarigoldForeground3)",
    // Color palette light green tokens
    colorPaletteLightGreenBackground1: "var(--colorPaletteLightGreenBackground1)",
    colorPaletteLightGreenBackground2: "var(--colorPaletteLightGreenBackground2)",
    colorPaletteLightGreenBackground3: "var(--colorPaletteLightGreenBackground3)",
    colorPaletteLightGreenBorderActive: "var(--colorPaletteLightGreenBorderActive)",
    colorPaletteLightGreenBorder1: "var(--colorPaletteLightGreenBorder1)",
    colorPaletteLightGreenBorder2: "var(--colorPaletteLightGreenBorder2)",
    colorPaletteLightGreenForeground1: "var(--colorPaletteLightGreenForeground1)",
    colorPaletteLightGreenForeground2: "var(--colorPaletteLightGreenForeground2)",
    colorPaletteLightGreenForeground3: "var(--colorPaletteLightGreenForeground3)",
    // Color palette anchor tokens
    colorPaletteAnchorBackground2: "var(--colorPaletteAnchorBackground2)",
    colorPaletteAnchorBorderActive: "var(--colorPaletteAnchorBorderActive)",
    colorPaletteAnchorForeground2: "var(--colorPaletteAnchorForeground2)",
    // Color palette beige tokens
    colorPaletteBeigeBackground2: "var(--colorPaletteBeigeBackground2)",
    colorPaletteBeigeBorderActive: "var(--colorPaletteBeigeBorderActive)",
    colorPaletteBeigeForeground2: "var(--colorPaletteBeigeForeground2)",
    // Color palette blue tokens
    colorPaletteBlueBackground2: "var(--colorPaletteBlueBackground2)",
    colorPaletteBlueBorderActive: "var(--colorPaletteBlueBorderActive)",
    colorPaletteBlueForeground2: "var(--colorPaletteBlueForeground2)",
    // Color palette brass tokens
    colorPaletteBrassBackground2: "var(--colorPaletteBrassBackground2)",
    colorPaletteBrassBorderActive: "var(--colorPaletteBrassBorderActive)",
    colorPaletteBrassForeground2: "var(--colorPaletteBrassForeground2)",
    // Color palette brown tokens
    colorPaletteBrownBackground2: "var(--colorPaletteBrownBackground2)",
    colorPaletteBrownBorderActive: "var(--colorPaletteBrownBorderActive)",
    colorPaletteBrownForeground2: "var(--colorPaletteBrownForeground2)",
    // Color palette cornflower tokens
    colorPaletteCornflowerBackground2: "var(--colorPaletteCornflowerBackground2)",
    colorPaletteCornflowerBorderActive: "var(--colorPaletteCornflowerBorderActive)",
    colorPaletteCornflowerForeground2: "var(--colorPaletteCornflowerForeground2)",
    // Color palette cranberry tokens
    colorPaletteCranberryBackground2: "var(--colorPaletteCranberryBackground2)",
    colorPaletteCranberryBorderActive: "var(--colorPaletteCranberryBorderActive)",
    colorPaletteCranberryForeground2: "var(--colorPaletteCranberryForeground2)",
    // Color palette dark green tokens
    colorPaletteDarkGreenBackground2: "var(--colorPaletteDarkGreenBackground2)",
    colorPaletteDarkGreenBorderActive: "var(--colorPaletteDarkGreenBorderActive)",
    colorPaletteDarkGreenForeground2: "var(--colorPaletteDarkGreenForeground2)",
    // Color palette dark red tokens
    colorPaletteDarkRedBackground2: "var(--colorPaletteDarkRedBackground2)",
    colorPaletteDarkRedBorderActive: "var(--colorPaletteDarkRedBorderActive)",
    colorPaletteDarkRedForeground2: "var(--colorPaletteDarkRedForeground2)",
    // Color palette forest tokens
    colorPaletteForestBackground2: "var(--colorPaletteForestBackground2)",
    colorPaletteForestBorderActive: "var(--colorPaletteForestBorderActive)",
    colorPaletteForestForeground2: "var(--colorPaletteForestForeground2)",
    // Color palette gold tokens
    colorPaletteGoldBackground2: "var(--colorPaletteGoldBackground2)",
    colorPaletteGoldBorderActive: "var(--colorPaletteGoldBorderActive)",
    colorPaletteGoldForeground2: "var(--colorPaletteGoldForeground2)",
    // Color palette grape tokens
    colorPaletteGrapeBackground2: "var(--colorPaletteGrapeBackground2)",
    colorPaletteGrapeBorderActive: "var(--colorPaletteGrapeBorderActive)",
    colorPaletteGrapeForeground2: "var(--colorPaletteGrapeForeground2)",
    // Color palette lavender tokens
    colorPaletteLavenderBackground2: "var(--colorPaletteLavenderBackground2)",
    colorPaletteLavenderBorderActive: "var(--colorPaletteLavenderBorderActive)",
    colorPaletteLavenderForeground2: "var(--colorPaletteLavenderForeground2)",
    // Color palette light teal tokens
    colorPaletteLightTealBackground2: "var(--colorPaletteLightTealBackground2)",
    colorPaletteLightTealBorderActive: "var(--colorPaletteLightTealBorderActive)",
    colorPaletteLightTealForeground2: "var(--colorPaletteLightTealForeground2)",
    // Color palette lilac tokens
    colorPaletteLilacBackground2: "var(--colorPaletteLilacBackground2)",
    colorPaletteLilacBorderActive: "var(--colorPaletteLilacBorderActive)",
    colorPaletteLilacForeground2: "var(--colorPaletteLilacForeground2)",
    // Color palette magenta tokens
    colorPaletteMagentaBackground2: "var(--colorPaletteMagentaBackground2)",
    colorPaletteMagentaBorderActive: "var(--colorPaletteMagentaBorderActive)",
    colorPaletteMagentaForeground2: "var(--colorPaletteMagentaForeground2)",
    // Color palette mink tokens
    colorPaletteMinkBackground2: "var(--colorPaletteMinkBackground2)",
    colorPaletteMinkBorderActive: "var(--colorPaletteMinkBorderActive)",
    colorPaletteMinkForeground2: "var(--colorPaletteMinkForeground2)",
    // Color palette navy tokens
    colorPaletteNavyBackground2: "var(--colorPaletteNavyBackground2)",
    colorPaletteNavyBorderActive: "var(--colorPaletteNavyBorderActive)",
    colorPaletteNavyForeground2: "var(--colorPaletteNavyForeground2)",
    // Color palette peach tokens
    colorPalettePeachBackground2: "var(--colorPalettePeachBackground2)",
    colorPalettePeachBorderActive: "var(--colorPalettePeachBorderActive)",
    colorPalettePeachForeground2: "var(--colorPalettePeachForeground2)",
    // Color palette pink tokens
    colorPalettePinkBackground2: "var(--colorPalettePinkBackground2)",
    colorPalettePinkBorderActive: "var(--colorPalettePinkBorderActive)",
    colorPalettePinkForeground2: "var(--colorPalettePinkForeground2)",
    // Color palette platinum tokens
    colorPalettePlatinumBackground2: "var(--colorPalettePlatinumBackground2)",
    colorPalettePlatinumBorderActive: "var(--colorPalettePlatinumBorderActive)",
    colorPalettePlatinumForeground2: "var(--colorPalettePlatinumForeground2)",
    // Color palette plum tokens
    colorPalettePlumBackground2: "var(--colorPalettePlumBackground2)",
    colorPalettePlumBorderActive: "var(--colorPalettePlumBorderActive)",
    colorPalettePlumForeground2: "var(--colorPalettePlumForeground2)",
    // Color palette pumpkin tokens
    colorPalettePumpkinBackground2: "var(--colorPalettePumpkinBackground2)",
    colorPalettePumpkinBorderActive: "var(--colorPalettePumpkinBorderActive)",
    colorPalettePumpkinForeground2: "var(--colorPalettePumpkinForeground2)",
    // Color palette purple tokens
    colorPalettePurpleBackground2: "var(--colorPalettePurpleBackground2)",
    colorPalettePurpleBorderActive: "var(--colorPalettePurpleBorderActive)",
    colorPalettePurpleForeground2: "var(--colorPalettePurpleForeground2)",
    // Color palette royal blue tokens
    colorPaletteRoyalBlueBackground2: "var(--colorPaletteRoyalBlueBackground2)",
    colorPaletteRoyalBlueBorderActive: "var(--colorPaletteRoyalBlueBorderActive)",
    colorPaletteRoyalBlueForeground2: "var(--colorPaletteRoyalBlueForeground2)",
    // Color palette seafoam tokens
    colorPaletteSeafoamBackground2: "var(--colorPaletteSeafoamBackground2)",
    colorPaletteSeafoamBorderActive: "var(--colorPaletteSeafoamBorderActive)",
    colorPaletteSeafoamForeground2: "var(--colorPaletteSeafoamForeground2)",
    // Color palette steel tokens
    colorPaletteSteelBackground2: "var(--colorPaletteSteelBackground2)",
    colorPaletteSteelBorderActive: "var(--colorPaletteSteelBorderActive)",
    colorPaletteSteelForeground2: "var(--colorPaletteSteelForeground2)",
    // Color palette teal tokens
    colorPaletteTealBackground2: "var(--colorPaletteTealBackground2)",
    colorPaletteTealBorderActive: "var(--colorPaletteTealBorderActive)",
    colorPaletteTealForeground2: "var(--colorPaletteTealForeground2)",
    // Color status success tokens
    colorStatusSuccessBackground1: "var(--colorStatusSuccessBackground1)",
    colorStatusSuccessBackground2: "var(--colorStatusSuccessBackground2)",
    colorStatusSuccessBackground3: "var(--colorStatusSuccessBackground3)",
    colorStatusSuccessForeground1: "var(--colorStatusSuccessForeground1)",
    colorStatusSuccessForeground2: "var(--colorStatusSuccessForeground2)",
    colorStatusSuccessForeground3: "var(--colorStatusSuccessForeground3)",
    colorStatusSuccessForegroundInverted: "var(--colorStatusSuccessForegroundInverted)",
    colorStatusSuccessBorderActive: "var(--colorStatusSuccessBorderActive)",
    colorStatusSuccessBorder1: "var(--colorStatusSuccessBorder1)",
    colorStatusSuccessBorder2: "var(--colorStatusSuccessBorder2)",
    // Color status warning tokens
    colorStatusWarningBackground1: "var(--colorStatusWarningBackground1)",
    colorStatusWarningBackground2: "var(--colorStatusWarningBackground2)",
    colorStatusWarningBackground3: "var(--colorStatusWarningBackground3)",
    colorStatusWarningForeground1: "var(--colorStatusWarningForeground1)",
    colorStatusWarningForeground2: "var(--colorStatusWarningForeground2)",
    colorStatusWarningForeground3: "var(--colorStatusWarningForeground3)",
    colorStatusWarningForegroundInverted: "var(--colorStatusWarningForegroundInverted)",
    colorStatusWarningBorderActive: "var(--colorStatusWarningBorderActive)",
    colorStatusWarningBorder1: "var(--colorStatusWarningBorder1)",
    colorStatusWarningBorder2: "var(--colorStatusWarningBorder2)",
    // Color status danger tokens
    colorStatusDangerBackground1: "var(--colorStatusDangerBackground1)",
    colorStatusDangerBackground2: "var(--colorStatusDangerBackground2)",
    colorStatusDangerBackground3: "var(--colorStatusDangerBackground3)",
    colorStatusDangerBackground3Hover: "var(--colorStatusDangerBackground3Hover)",
    colorStatusDangerBackground3Pressed: "var(--colorStatusDangerBackground3Pressed)",
    colorStatusDangerForeground1: "var(--colorStatusDangerForeground1)",
    colorStatusDangerForeground2: "var(--colorStatusDangerForeground2)",
    colorStatusDangerForeground3: "var(--colorStatusDangerForeground3)",
    colorStatusDangerForegroundInverted: "var(--colorStatusDangerForegroundInverted)",
    colorStatusDangerBorderActive: "var(--colorStatusDangerBorderActive)",
    colorStatusDangerBorder1: "var(--colorStatusDangerBorder1)",
    colorStatusDangerBorder2: "var(--colorStatusDangerBorder2)",
    // Border radius tokens
    borderRadiusNone: "var(--borderRadiusNone)",
    borderRadiusSmall: "var(--borderRadiusSmall)",
    borderRadiusMedium: "var(--borderRadiusMedium)",
    borderRadiusLarge: "var(--borderRadiusLarge)",
    borderRadiusXLarge: "var(--borderRadiusXLarge)",
    borderRadius2XLarge: "var(--borderRadius2XLarge)",
    borderRadius3XLarge: "var(--borderRadius3XLarge)",
    borderRadius4XLarge: "var(--borderRadius4XLarge)",
    borderRadius5XLarge: "var(--borderRadius5XLarge)",
    borderRadius6XLarge: "var(--borderRadius6XLarge)",
    borderRadiusCircular: "var(--borderRadiusCircular)",
    // Font family tokens
    fontFamilyBase: "var(--fontFamilyBase)",
    fontFamilyMonospace: "var(--fontFamilyMonospace)",
    fontFamilyNumeric: "var(--fontFamilyNumeric)",
    // Font size tokens
    fontSizeBase100: "var(--fontSizeBase100)",
    fontSizeBase200: "var(--fontSizeBase200)",
    fontSizeBase300: "var(--fontSizeBase300)",
    fontSizeBase400: "var(--fontSizeBase400)",
    fontSizeBase500: "var(--fontSizeBase500)",
    fontSizeBase600: "var(--fontSizeBase600)",
    fontSizeHero700: "var(--fontSizeHero700)",
    fontSizeHero800: "var(--fontSizeHero800)",
    fontSizeHero900: "var(--fontSizeHero900)",
    fontSizeHero1000: "var(--fontSizeHero1000)",
    // Font weight tokens
    fontWeightRegular: "var(--fontWeightRegular)",
    fontWeightMedium: "var(--fontWeightMedium)",
    fontWeightSemibold: "var(--fontWeightSemibold)",
    fontWeightBold: "var(--fontWeightBold)",
    // Line height tokens
    lineHeightBase100: "var(--lineHeightBase100)",
    lineHeightBase200: "var(--lineHeightBase200)",
    lineHeightBase300: "var(--lineHeightBase300)",
    lineHeightBase400: "var(--lineHeightBase400)",
    lineHeightBase500: "var(--lineHeightBase500)",
    lineHeightBase600: "var(--lineHeightBase600)",
    lineHeightHero700: "var(--lineHeightHero700)",
    lineHeightHero800: "var(--lineHeightHero800)",
    lineHeightHero900: "var(--lineHeightHero900)",
    lineHeightHero1000: "var(--lineHeightHero1000)",
    // Shadow tokens
    shadow2: "var(--shadow2)",
    shadow4: "var(--shadow4)",
    shadow8: "var(--shadow8)",
    shadow16: "var(--shadow16)",
    shadow28: "var(--shadow28)",
    shadow64: "var(--shadow64)",
    // Shadow brand tokens
    shadow2Brand: "var(--shadow2Brand)",
    shadow4Brand: "var(--shadow4Brand)",
    shadow8Brand: "var(--shadow8Brand)",
    shadow16Brand: "var(--shadow16Brand)",
    shadow28Brand: "var(--shadow28Brand)",
    shadow64Brand: "var(--shadow64Brand)",
    // Stroke width tokens
    strokeWidthThin: "var(--strokeWidthThin)",
    strokeWidthThick: "var(--strokeWidthThick)",
    strokeWidthThicker: "var(--strokeWidthThicker)",
    strokeWidthThickest: "var(--strokeWidthThickest)",
    // Spacings
    spacingHorizontalNone: "var(--spacingHorizontalNone)",
    spacingHorizontalXXS: "var(--spacingHorizontalXXS)",
    spacingHorizontalXS: "var(--spacingHorizontalXS)",
    spacingHorizontalSNudge: "var(--spacingHorizontalSNudge)",
    spacingHorizontalS: "var(--spacingHorizontalS)",
    spacingHorizontalMNudge: "var(--spacingHorizontalMNudge)",
    spacingHorizontalM: "var(--spacingHorizontalM)",
    spacingHorizontalL: "var(--spacingHorizontalL)",
    spacingHorizontalXL: "var(--spacingHorizontalXL)",
    spacingHorizontalXXL: "var(--spacingHorizontalXXL)",
    spacingHorizontalXXXL: "var(--spacingHorizontalXXXL)",
    spacingVerticalNone: "var(--spacingVerticalNone)",
    spacingVerticalXXS: "var(--spacingVerticalXXS)",
    spacingVerticalXS: "var(--spacingVerticalXS)",
    spacingVerticalSNudge: "var(--spacingVerticalSNudge)",
    spacingVerticalS: "var(--spacingVerticalS)",
    spacingVerticalMNudge: "var(--spacingVerticalMNudge)",
    spacingVerticalM: "var(--spacingVerticalM)",
    spacingVerticalL: "var(--spacingVerticalL)",
    spacingVerticalXL: "var(--spacingVerticalXL)",
    spacingVerticalXXL: "var(--spacingVerticalXXL)",
    spacingVerticalXXXL: "var(--spacingVerticalXXXL)",
    // Durations
    durationUltraFast: "var(--durationUltraFast)",
    durationFaster: "var(--durationFaster)",
    durationFast: "var(--durationFast)",
    durationNormal: "var(--durationNormal)",
    durationGentle: "var(--durationGentle)",
    durationSlow: "var(--durationSlow)",
    durationSlower: "var(--durationSlower)",
    durationUltraSlow: "var(--durationUltraSlow)",
    // Curves
    curveAccelerateMax: "var(--curveAccelerateMax)",
    curveAccelerateMid: "var(--curveAccelerateMid)",
    curveAccelerateMin: "var(--curveAccelerateMin)",
    curveDecelerateMax: "var(--curveDecelerateMax)",
    curveDecelerateMid: "var(--curveDecelerateMid)",
    curveDecelerateMin: "var(--curveDecelerateMin)",
    curveEasyEaseMax: "var(--curveEasyEaseMax)",
    curveEasyEase: "var(--curveEasyEase)",
    curveLinear: "var(--curveLinear)",
    /**
    * ZIndexes
    * Special case where the tokens contain default values
    * ZIndexes are not mandatory, so they are not included in the theme, but can be used as tokens with default values
    */
    /**
    * Elevation 0
    * Can be used for background elements, like surfaces
    */
    zIndexBackground: "var(--zIndexBackground, 0)",
    /**
    * Elevation 2
    * Can be used content that is on top of the background, like cards
    */
    zIndexContent: "var(--zIndexContent, 1)",
    /**
    * Elevation 4
    * Can be used for overlays, like the backdrop of a modal
    */
    zIndexOverlay: "var(--zIndexOverlay, 1000)",
    /**
    * Elevation 8
    * Can be used for popups, like modals and drawers
    */
    zIndexPopup: "var(--zIndexPopup, 2000)",
    /**
    * Elevation 16
    * Can be used for messages, like snackbars and toasts
    */
    zIndexMessages: "var(--zIndexMessages, 3000)",
    /**
    * Elevation 28
    * Can be used for floating elements, like dropdowns
    */
    zIndexFloating: "var(--zIndexFloating, 4000)",
    /**
    * Elevation 64
    * Can be used for high priority floating elements, like tooltips
    */
    zIndexPriority: "var(--zIndexPriority, 5000)",
    /**
    * Special elevation
    * Can be used for elements that need to be above everything else, like debug overlays
    */
    zIndexDebug: "var(--zIndexDebug, 6000)"
  };

  // node_modules/@fluentui/react-context-selector/lib/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-context-selector/lib/createContext.js
  init_define_import_meta_env();
  var React17 = __toESM(require_react_shim());
  var import_scheduler = __toESM(require_scheduler_shim());
  var createProvider = (Original) => {
    const Provider2 = (props) => {
      const valueRef = React17.useRef(props.value);
      const contextValue = React17.useRef(null);
      if (!contextValue.current) {
        contextValue.current = {
          value: valueRef,
          listeners: []
        };
      }
      useIsomorphicLayoutEffect(() => {
        valueRef.current = props.value;
        (0, import_scheduler.unstable_runWithPriority)(import_scheduler.unstable_NormalPriority, () => {
          contextValue.current.listeners.forEach((listener) => {
            listener(props.value);
          });
        });
      }, [
        props.value
      ]);
      return React17.createElement(Original, {
        value: contextValue.current
      }, props.children);
    };
    if (true) {
      Provider2.displayName = "ContextSelector.Provider";
    }
    return Provider2;
  };
  var createContext9 = (defaultValue) => {
    const context = React17.createContext({
      value: {
        current: defaultValue
      },
      listeners: [],
      isDefault: true
    });
    context.Provider = createProvider(context.Provider);
    delete context.Consumer;
    return context;
  };

  // node_modules/@fluentui/react-context-selector/lib/useContextSelector.js
  init_define_import_meta_env();
  var React18 = __toESM(require_react_shim());
  var useContextSelector = (context, selectorFn) => {
    const contextValue = React18.useContext(context);
    const { value: valueRef, listeners } = contextValue;
    const valueAtRender = selectorFn(valueRef.current);
    const [, forceUpdate] = React18.useReducer((x) => x + 1, 0);
    const selectorFnRef = React18.useRef(selectorFn);
    const lastValueAtRender = React18.useRef(valueAtRender);
    useIsomorphicLayoutEffect(() => {
      selectorFnRef.current = selectorFn;
      lastValueAtRender.current = valueAtRender;
    });
    useIsomorphicLayoutEffect(() => {
      const listener = (payload) => {
        try {
          const nextSelectedValue = selectorFnRef.current(payload);
          if (!Object.is(lastValueAtRender.current, nextSelectedValue)) {
            forceUpdate();
          }
        } catch {
        }
      };
      listeners.push(listener);
      listener(valueRef.current);
      return () => {
        const index = listeners.indexOf(listener);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      };
    }, [
      listeners,
      valueRef
    ]);
    return valueAtRender;
  };

  // node_modules/@fluentui/react-aria/lib/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-aria/lib/button/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-aria/lib/button/useARIAButtonProps.js
  init_define_import_meta_env();

  // node_modules/@fluentui/keyboard-keys/lib/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/keyboard-keys/lib/keys.js
  init_define_import_meta_env();
  var Enter = "Enter";
  var Space = " ";

  // node_modules/@fluentui/react-aria/lib/button/useARIAButtonProps.js
  function useARIAButtonProps(type, props) {
    const { disabled, disabledFocusable = false, ["aria-disabled"]: ariaDisabled, onClick, onKeyDown, onKeyUp, ...rest } = props !== null && props !== void 0 ? props : {};
    const normalizedARIADisabled = typeof ariaDisabled === "string" ? ariaDisabled === "true" : ariaDisabled;
    const isDisabled = disabled || disabledFocusable || normalizedARIADisabled;
    const handleClick = useEventCallback((ev) => {
      if (isDisabled) {
        ev.preventDefault();
        ev.stopPropagation();
      } else {
        onClick === null || onClick === void 0 ? void 0 : onClick(ev);
      }
    });
    const handleKeyDown = useEventCallback((ev) => {
      onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(ev);
      if (ev.isDefaultPrevented()) {
        return;
      }
      const key = ev.key;
      if (isDisabled && (key === Enter || key === Space)) {
        ev.preventDefault();
        ev.stopPropagation();
        return;
      }
      if (key === Space) {
        ev.preventDefault();
        return;
      } else if (key === Enter) {
        ev.preventDefault();
        ev.currentTarget.click();
      }
    });
    const handleKeyUp = useEventCallback((ev) => {
      onKeyUp === null || onKeyUp === void 0 ? void 0 : onKeyUp(ev);
      if (ev.isDefaultPrevented()) {
        return;
      }
      const key = ev.key;
      if (isDisabled && (key === Enter || key === Space)) {
        ev.preventDefault();
        ev.stopPropagation();
        return;
      }
      if (key === Space) {
        ev.preventDefault();
        ev.currentTarget.click();
      }
    });
    if (type === "button" || type === void 0) {
      return {
        ...rest,
        disabled: disabled && !disabledFocusable,
        "aria-disabled": disabledFocusable ? true : normalizedARIADisabled,
        // onclick should still use internal handler to ensure prevention if disabled
        // if disabledFocusable then there's no requirement for handlers as those events should not be propagated
        onClick: disabledFocusable ? void 0 : handleClick,
        onKeyUp: disabledFocusable ? void 0 : onKeyUp,
        onKeyDown: disabledFocusable ? void 0 : onKeyDown
      };
    } else {
      const isLink = !!rest.href;
      let roleOverride = isLink ? void 0 : "button";
      if (!roleOverride && isDisabled) {
        roleOverride = "link";
      }
      const resultProps = {
        role: roleOverride,
        tabIndex: disabledFocusable || !isLink && !disabled ? 0 : void 0,
        ...rest,
        // If it's not a <button> than listeners are required even with disabledFocusable
        // Since you cannot assure the default behavior of the element
        // E.g: <a> will redirect on click
        onClick: handleClick,
        onKeyUp: handleKeyUp,
        onKeyDown: handleKeyDown,
        "aria-disabled": isDisabled
      };
      if (type === "a" && isDisabled) {
        resultProps.href = void 0;
      }
      return resultProps;
    }
  }

  // node_modules/@fluentui/react-button/lib/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-button/lib/Button.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-button/lib/components/Button/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-button/lib/components/Button/renderButton.js
  init_define_import_meta_env();
  var renderButton_unstable = (state) => {
    assertSlots(state);
    const { iconOnly, iconPosition } = state;
    return /* @__PURE__ */ jsxs(state.root, {
      children: [
        iconPosition !== "after" && state.icon && /* @__PURE__ */ jsx(state.icon, {}),
        !iconOnly && state.root.children,
        iconPosition === "after" && state.icon && /* @__PURE__ */ jsx(state.icon, {})
      ]
    });
  };

  // node_modules/@fluentui/react-button/lib/components/Button/useButton.js
  init_define_import_meta_env();
  var useButtonBase_unstable = (props, ref) => {
    const { icon, iconPosition = "before", ...buttonProps } = props;
    const iconShorthand = slot_exports.optional(icon, {
      elementType: "span"
    });
    var _props_disabled, _props_disabledFocusable;
    return {
      disabled: (_props_disabled = props.disabled) !== null && _props_disabled !== void 0 ? _props_disabled : false,
      disabledFocusable: (_props_disabledFocusable = props.disabledFocusable) !== null && _props_disabledFocusable !== void 0 ? _props_disabledFocusable : false,
      iconPosition,
      iconOnly: Boolean((iconShorthand === null || iconShorthand === void 0 ? void 0 : iconShorthand.children) && !props.children),
      components: {
        root: "button",
        icon: "span"
      },
      root: slot_exports.always(useARIAButtonProps(buttonProps.as, buttonProps), {
        elementType: "button",
        defaultProps: {
          ref,
          type: props.as !== "a" ? "button" : void 0
        }
      }),
      icon: iconShorthand
    };
  };

  // node_modules/@fluentui/react-button/lib/components/Button/useButtonStyles.styles.js
  init_define_import_meta_env();
  var buttonClassNames = {
    root: "fui-Button",
    icon: "fui-Button__icon"
  };
  var boxShadowStrokeWidthThinMoz = `calc(${tokens.strokeWidthThin} + 0.25px)`;
  var useRootBaseClassName = /* @__PURE__ */ __resetStyles2("r1f29ykk", null, {
    r: [".r1f29ykk{align-items:center;box-sizing:border-box;display:inline-flex;justify-content:center;text-decoration-line:none;vertical-align:middle;margin:0;overflow:hidden;background-color:var(--colorNeutralBackground1);color:var(--colorNeutralForeground1);border:var(--strokeWidthThin) solid var(--colorNeutralStroke1);font-family:var(--fontFamilyBase);outline-style:none;padding:5px var(--spacingHorizontalM);min-width:96px;border-radius:var(--borderRadiusMedium);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightSemibold);line-height:var(--lineHeightBase300);transition-duration:var(--durationFaster);transition-property:background,border,color;transition-timing-function:var(--curveEasyEase);}", ".r1f29ykk:hover{background-color:var(--colorNeutralBackground1Hover);border-color:var(--colorNeutralStroke1Hover);color:var(--colorNeutralForeground1Hover);cursor:pointer;}", ".r1f29ykk:hover:active,.r1f29ykk:active:focus-visible{background-color:var(--colorNeutralBackground1Pressed);border-color:var(--colorNeutralStroke1Pressed);color:var(--colorNeutralForeground1Pressed);outline-style:none;}", ".r1f29ykk[data-fui-focus-visible]{border-color:var(--colorStrokeFocus2);border-radius:var(--borderRadiusMedium);border-width:1px;outline:var(--strokeWidthThick) solid var(--colorTransparentStroke);box-shadow:0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset;z-index:1;}"],
    s: ["@media screen and (prefers-reduced-motion: reduce){.r1f29ykk{transition-duration:0.01ms;}}", "@media (forced-colors: active){.r1f29ykk:focus{border-color:ButtonText;}.r1f29ykk:hover{background-color:HighlightText;border-color:Highlight;color:Highlight;forced-color-adjust:none;}.r1f29ykk:hover:active,.r1f29ykk:active:focus-visible{background-color:HighlightText;border-color:Highlight;color:Highlight;forced-color-adjust:none;}}", "@supports (-moz-appearance:button){.r1f29ykk[data-fui-focus-visible]{box-shadow:0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset;}}"]
  });
  var useIconBaseClassName = /* @__PURE__ */ __resetStyles2("rywnvv2", null, [".rywnvv2{align-items:center;display:inline-flex;justify-content:center;font-size:20px;height:20px;width:20px;--fui-Button__icon--spacing:var(--spacingHorizontalSNudge);}"]);
  var useRootStyles2 = /* @__PURE__ */ __styles2({
    outline: {
      De3pzq: "f1c21dwh",
      Jwef8y: "fjxutwb",
      Bpjbzib: "fkoldzo"
    },
    primary: {
      De3pzq: "ffp7eso",
      g2u3we: "f1p3nwhy",
      h3c5rm: ["f11589ue", "f1pdflbu"],
      B9xav0g: "f1q5o8ev",
      zhjwy3: ["f1pdflbu", "f11589ue"],
      sj55zd: "f1phragk",
      Jwef8y: "f15wkkf3",
      Bgoe8wy: "f1s2uweq",
      Bwzppfd: ["fr80ssc", "fecsdlb"],
      oetu4i: "f1ukrpxl",
      gg5e9n: ["fecsdlb", "fr80ssc"],
      Bi91k9c: "f1rq72xc",
      Bpjbzib: "f1ksv2xa",
      im15vp: "fhvnf4x",
      Hjvxdg: ["fb6swo4", "f232fm2"],
      Gpfmf1: "f1klyf7k",
      ustxxc: ["f232fm2", "fb6swo4"],
      Brsut9c: "f1d6mv4x",
      By8wz76: "f1nz3ub2",
      Bcq6wej: "fag2qd2",
      Jcjdmf: ["fmvhcg7", "f14bpyus"],
      sc4o1m: "f1o3dhpw",
      Bosien3: ["f14bpyus", "fmvhcg7"],
      B7iucu3: "fqc85l4",
      B8gzw0y: "f1h3a8gf",
      Bbkh6qg: "fkiggi6",
      F230oe: "f8gmj8i",
      Bdw8ktp: ["f1ap8nzx", "fjag8bx"],
      Bj1xduy: "f1igan7k",
      Bhh2cfd: ["fjag8bx", "f1ap8nzx"],
      Bahaeuw: "f1v3eptx",
      Bv2bamp: "f1ysmecq",
      vxuvv6: "faulsx",
      Bli9q98: ["f79t15f", "f8qmx7k"],
      Bx2tt8t: "fbtzoaq",
      yad0b3: ["f8qmx7k", "f79t15f"],
      j2fop7: "fd4bjan"
    },
    secondary: {},
    subtle: {
      De3pzq: "fhovq9v",
      g2u3we: "f1p3nwhy",
      h3c5rm: ["f11589ue", "f1pdflbu"],
      B9xav0g: "f1q5o8ev",
      zhjwy3: ["f1pdflbu", "f11589ue"],
      sj55zd: "fkfq4zb",
      Jwef8y: "f1t94bn6",
      Bgoe8wy: "f1s2uweq",
      Bwzppfd: ["fr80ssc", "fecsdlb"],
      oetu4i: "f1ukrpxl",
      gg5e9n: ["fecsdlb", "fr80ssc"],
      Bi91k9c: "fnwyq0v",
      Bk3fhr4: "ft1hn21",
      Bmfj8id: "fuxngvv",
      Bbdnnc7: "fy5bs14",
      Bpjbzib: "f1q1yqic",
      im15vp: "fhvnf4x",
      Hjvxdg: ["fb6swo4", "f232fm2"],
      Gpfmf1: "f1klyf7k",
      ustxxc: ["f232fm2", "fb6swo4"],
      Brsut9c: "fwga7ee",
      Bqou3pl: "f1nhwcv0",
      Bsnehw8: "f1gm6xmp",
      wsxvnf: "f1xxsver",
      Bahaeuw: "f1v3eptx",
      Buhizc3: "fivsta0",
      j2fop7: "fd4bjan",
      Bqabnb4: "f3m6zum"
    },
    transparent: {
      De3pzq: "f1c21dwh",
      g2u3we: "f1p3nwhy",
      h3c5rm: ["f11589ue", "f1pdflbu"],
      B9xav0g: "f1q5o8ev",
      zhjwy3: ["f1pdflbu", "f11589ue"],
      sj55zd: "fkfq4zb",
      Jwef8y: "fjxutwb",
      Bgoe8wy: "f1s2uweq",
      Bwzppfd: ["fr80ssc", "fecsdlb"],
      oetu4i: "f1ukrpxl",
      gg5e9n: ["fecsdlb", "fr80ssc"],
      Bi91k9c: "f139oj5f",
      Bk3fhr4: "ft1hn21",
      Bmfj8id: "fuxngvv",
      Bpjbzib: "fkoldzo",
      im15vp: "fhvnf4x",
      Hjvxdg: ["fb6swo4", "f232fm2"],
      Gpfmf1: "f1klyf7k",
      ustxxc: ["f232fm2", "fb6swo4"],
      Brsut9c: "f1l983o9",
      Bqou3pl: "f1nhwcv0",
      Bsnehw8: "f1gm6xmp",
      Bbkh6qg: "fxoo9op",
      Bahaeuw: "f1v3eptx",
      Bv2bamp: "f1i0gk12",
      j2fop7: "fd4bjan"
    },
    circular: {
      Beyfa6y: 0,
      Bbmb7ep: 0,
      Btl43ni: 0,
      B7oj6ja: 0,
      Dimara: "f44lkw9"
    },
    rounded: {},
    square: {
      Beyfa6y: 0,
      Bbmb7ep: 0,
      Btl43ni: 0,
      B7oj6ja: 0,
      Dimara: "f1fabniw"
    },
    small: {
      Bf4jedk: "fh7ncta",
      Byoj8tv: 0,
      uwmqm3: 0,
      z189sj: 0,
      z8tnut: 0,
      B0ocmuz: "fneth5b",
      Beyfa6y: 0,
      Bbmb7ep: 0,
      Btl43ni: 0,
      B7oj6ja: 0,
      Dimara: "ft85np5",
      Be2twd7: "fy9rknc",
      Bhrd7zp: "figsok6",
      Bg96gwp: "fwrc4pm"
    },
    smallWithIcon: {
      Byoj8tv: "f1brlhvm",
      z8tnut: "f1sl3k7w"
    },
    medium: {},
    large: {
      Bf4jedk: "f14es27b",
      Byoj8tv: 0,
      uwmqm3: 0,
      z189sj: 0,
      z8tnut: 0,
      B0ocmuz: "f4db1ww",
      Beyfa6y: 0,
      Bbmb7ep: 0,
      Btl43ni: 0,
      B7oj6ja: 0,
      Dimara: "ft85np5",
      Be2twd7: "fod5ikn",
      Bhrd7zp: "fl43uef",
      Bg96gwp: "faaz57k"
    },
    largeWithIcon: {
      Byoj8tv: "fy7v416",
      z8tnut: "f1a1bwwz"
    }
  }, {
    d: [".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".ffp7eso{background-color:var(--colorBrandBackground);}", ".f1p3nwhy{border-top-color:transparent;}", ".f11589ue{border-right-color:transparent;}", ".f1pdflbu{border-left-color:transparent;}", ".f1q5o8ev{border-bottom-color:transparent;}", ".f1phragk{color:var(--colorNeutralForegroundOnBrand);}", ".fhovq9v{background-color:var(--colorSubtleBackground);}", ".fkfq4zb{color:var(--colorNeutralForeground2);}", [".f44lkw9{border-radius:var(--borderRadiusCircular);}", {
      p: -1
    }], [".f1fabniw{border-radius:var(--borderRadiusNone);}", {
      p: -1
    }], ".fh7ncta{min-width:64px;}", [".fneth5b{padding:3px var(--spacingHorizontalS);}", {
      p: -1
    }], [".ft85np5{border-radius:var(--borderRadiusMedium);}", {
      p: -1
    }], ".fy9rknc{font-size:var(--fontSizeBase200);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}", ".f1brlhvm{padding-bottom:1px;}", ".f1sl3k7w{padding-top:1px;}", ".f14es27b{min-width:96px;}", [".f4db1ww{padding:8px var(--spacingHorizontalL);}", {
      p: -1
    }], [".ft85np5{border-radius:var(--borderRadiusMedium);}", {
      p: -1
    }], ".fod5ikn{font-size:var(--fontSizeBase400);}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".faaz57k{line-height:var(--lineHeightBase400);}", ".fy7v416{padding-bottom:7px;}", ".f1a1bwwz{padding-top:7px;}"],
    h: [".fjxutwb:hover{background-color:var(--colorTransparentBackgroundHover);}", ".fkoldzo:hover:active,.fkoldzo:active:focus-visible{background-color:var(--colorTransparentBackgroundPressed);}", ".f15wkkf3:hover{background-color:var(--colorBrandBackgroundHover);}", ".f1s2uweq:hover{border-top-color:transparent;}", ".fr80ssc:hover{border-right-color:transparent;}", ".fecsdlb:hover{border-left-color:transparent;}", ".f1ukrpxl:hover{border-bottom-color:transparent;}", ".f1rq72xc:hover{color:var(--colorNeutralForegroundOnBrand);}", ".f1ksv2xa:hover:active,.f1ksv2xa:active:focus-visible{background-color:var(--colorBrandBackgroundPressed);}", ".fhvnf4x:hover:active,.fhvnf4x:active:focus-visible{border-top-color:transparent;}", ".fb6swo4:hover:active,.fb6swo4:active:focus-visible{border-right-color:transparent;}", ".f232fm2:hover:active,.f232fm2:active:focus-visible{border-left-color:transparent;}", ".f1klyf7k:hover:active,.f1klyf7k:active:focus-visible{border-bottom-color:transparent;}", ".f1d6mv4x:hover:active,.f1d6mv4x:active:focus-visible{color:var(--colorNeutralForegroundOnBrand);}", ".f1t94bn6:hover{background-color:var(--colorSubtleBackgroundHover);}", ".fnwyq0v:hover{color:var(--colorNeutralForeground2Hover);}", ".ft1hn21:hover .fui-Icon-filled{display:inline;}", ".fuxngvv:hover .fui-Icon-regular{display:none;}", ".fy5bs14:hover .fui-Button__icon{color:var(--colorNeutralForeground2BrandHover);}", ".f1q1yqic:hover:active,.f1q1yqic:active:focus-visible{background-color:var(--colorSubtleBackgroundPressed);}", ".fwga7ee:hover:active,.fwga7ee:active:focus-visible{color:var(--colorNeutralForeground2Pressed);}", ".f1nhwcv0:hover:active .fui-Icon-filled,.f1nhwcv0:active:focus-visible .fui-Icon-filled{display:inline;}", ".f1gm6xmp:hover:active .fui-Icon-regular,.f1gm6xmp:active:focus-visible .fui-Icon-regular{display:none;}", ".f1xxsver:hover:active .fui-Button__icon,.f1xxsver:active:focus-visible .fui-Button__icon{color:var(--colorNeutralForeground2BrandPressed);}", ".f139oj5f:hover{color:var(--colorNeutralForeground2BrandHover);}", ".f1l983o9:hover:active,.f1l983o9:active:focus-visible{color:var(--colorNeutralForeground2BrandPressed);}"],
    m: [["@media (forced-colors: active){.f1nz3ub2{background-color:Highlight;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fag2qd2{border-top-color:HighlightText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f14bpyus{border-left-color:HighlightText;}.fmvhcg7{border-right-color:HighlightText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1o3dhpw{border-bottom-color:HighlightText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fqc85l4{color:HighlightText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1h3a8gf{forced-color-adjust:none;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fkiggi6:hover{background-color:HighlightText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f8gmj8i:hover{border-top-color:Highlight;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1ap8nzx:hover{border-right-color:Highlight;}.fjag8bx:hover{border-left-color:Highlight;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1igan7k:hover{border-bottom-color:Highlight;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1v3eptx:hover{color:Highlight;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1ysmecq:hover:active,.f1ysmecq:active:focus-visible{background-color:HighlightText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.faulsx:hover:active,.faulsx:active:focus-visible{border-top-color:Highlight;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f79t15f:hover:active,.f79t15f:active:focus-visible{border-right-color:Highlight;}.f8qmx7k:hover:active,.f8qmx7k:active:focus-visible{border-left-color:Highlight;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fbtzoaq:hover:active,.fbtzoaq:active:focus-visible{border-bottom-color:Highlight;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fd4bjan:hover:active,.fd4bjan:active:focus-visible{color:Highlight;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fivsta0:hover .fui-Button__icon{color:Highlight;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f3m6zum:hover:active .fui-Button__icon,.f3m6zum:active:focus-visible .fui-Button__icon{color:Highlight;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fxoo9op:hover{background-color:var(--colorTransparentBackground);}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1i0gk12:hover:active,.f1i0gk12:active:focus-visible{background-color:var(--colorTransparentBackground);}}", {
      m: "(forced-colors: active)"
    }]]
  });
  var useRootDisabledStyles = /* @__PURE__ */ __styles2({
    base: {
      De3pzq: "f1bg9a2p",
      g2u3we: "f1jj8ep1",
      h3c5rm: ["f15xbau", "fy0fskl"],
      B9xav0g: "f4ikngz",
      zhjwy3: ["fy0fskl", "f15xbau"],
      sj55zd: "f1s2aq7o",
      Bceei9c: "fdrzuqr",
      Bfinmwp: "f15x8b5r",
      Jwef8y: "f1falr9n",
      Bgoe8wy: "f12mpcsy",
      Bwzppfd: ["f1gwvigk", "f18rmfxp"],
      oetu4i: "f1jnshp0",
      gg5e9n: ["f18rmfxp", "f1gwvigk"],
      Bi91k9c: "fvgxktp",
      eoavqd: "fphbwmw",
      Bk3fhr4: "f19vpps7",
      Bmfj8id: "fv5swzo",
      Bbdnnc7: "f1al02dq",
      Bpjbzib: "f1jct5ie",
      im15vp: "f13txml0",
      Hjvxdg: ["f1ncddno", "f1axfvow"],
      Gpfmf1: "f1z04ada",
      ustxxc: ["f1axfvow", "f1ncddno"],
      Brsut9c: "f1uhomfy",
      Bses4qk: "fy9mucy",
      Bqou3pl: "f1g9va8i",
      Bsnehw8: "fwgvudy",
      wsxvnf: "fom6jww"
    },
    highContrast: {
      By8wz76: "f14ptb23",
      Bcq6wej: "f9dbb4x",
      Jcjdmf: ["f3qs60o", "f5u9ap2"],
      sc4o1m: "fwd1oij",
      Bosien3: ["f5u9ap2", "f3qs60o"],
      B7iucu3: "f1cyfu5x",
      Grqk0h: "f127ot8j",
      h3ptyc: "f19etb0b",
      Buw724y: ["f4f984j", "fw441p0"],
      Buk7464: "f3d22hf",
      Hwei09: ["fw441p0", "f4f984j"],
      Bbkh6qg: "fj8k9ua",
      F230oe: "fifrq0d",
      Bdw8ktp: ["f196mwp7", "fnekfq"],
      Bj1xduy: "f1l6uprw",
      Bhh2cfd: ["fnekfq", "f196mwp7"],
      Bahaeuw: "fa9u7a5",
      Buhizc3: "f1m71e0y",
      Bv2bamp: "fw24f3",
      vxuvv6: "f1nznrny",
      Bli9q98: ["fq8nxuu", "f1ao3jkc"],
      Bx2tt8t: "ftoixeo",
      yad0b3: ["f1ao3jkc", "fq8nxuu"],
      j2fop7: "fpmuzpx",
      Bqabnb4: "f168odog"
    },
    outline: {
      De3pzq: "f1c21dwh",
      Jwef8y: "f9ql6rf",
      Bpjbzib: "f9r0db0"
    },
    primary: {
      g2u3we: "f1p3nwhy",
      h3c5rm: ["f11589ue", "f1pdflbu"],
      B9xav0g: "f1q5o8ev",
      zhjwy3: ["f1pdflbu", "f11589ue"],
      Bgoe8wy: "f1s2uweq",
      Bwzppfd: ["fr80ssc", "fecsdlb"],
      oetu4i: "f1ukrpxl",
      gg5e9n: ["fecsdlb", "fr80ssc"],
      im15vp: "fhvnf4x",
      Hjvxdg: ["fb6swo4", "f232fm2"],
      Gpfmf1: "f1klyf7k",
      ustxxc: ["f232fm2", "fb6swo4"]
    },
    secondary: {},
    subtle: {
      De3pzq: "f1c21dwh",
      g2u3we: "f1p3nwhy",
      h3c5rm: ["f11589ue", "f1pdflbu"],
      B9xav0g: "f1q5o8ev",
      zhjwy3: ["f1pdflbu", "f11589ue"],
      Jwef8y: "f9ql6rf",
      Bgoe8wy: "f1s2uweq",
      Bwzppfd: ["fr80ssc", "fecsdlb"],
      oetu4i: "f1ukrpxl",
      gg5e9n: ["fecsdlb", "fr80ssc"],
      Bpjbzib: "f9r0db0",
      im15vp: "fhvnf4x",
      Hjvxdg: ["fb6swo4", "f232fm2"],
      Gpfmf1: "f1klyf7k",
      ustxxc: ["f232fm2", "fb6swo4"]
    },
    transparent: {
      De3pzq: "f1c21dwh",
      g2u3we: "f1p3nwhy",
      h3c5rm: ["f11589ue", "f1pdflbu"],
      B9xav0g: "f1q5o8ev",
      zhjwy3: ["f1pdflbu", "f11589ue"],
      Jwef8y: "f9ql6rf",
      Bgoe8wy: "f1s2uweq",
      Bwzppfd: ["fr80ssc", "fecsdlb"],
      oetu4i: "f1ukrpxl",
      gg5e9n: ["fecsdlb", "fr80ssc"],
      Bpjbzib: "f9r0db0",
      im15vp: "fhvnf4x",
      Hjvxdg: ["fb6swo4", "f232fm2"],
      Gpfmf1: "f1klyf7k",
      ustxxc: ["f232fm2", "fb6swo4"]
    }
  }, {
    d: [".f1bg9a2p{background-color:var(--colorNeutralBackgroundDisabled);}", ".f1jj8ep1{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f15xbau{border-right-color:var(--colorNeutralStrokeDisabled);}", ".fy0fskl{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f4ikngz{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}", ".fdrzuqr{cursor:not-allowed;}", ".f15x8b5r .fui-Button__icon{color:var(--colorNeutralForegroundDisabled);}", ".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".f1p3nwhy{border-top-color:transparent;}", ".f11589ue{border-right-color:transparent;}", ".f1pdflbu{border-left-color:transparent;}", ".f1q5o8ev{border-bottom-color:transparent;}"],
    h: [".f1falr9n:hover{background-color:var(--colorNeutralBackgroundDisabled);}", ".f12mpcsy:hover{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f1gwvigk:hover{border-right-color:var(--colorNeutralStrokeDisabled);}", ".f18rmfxp:hover{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f1jnshp0:hover{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".fvgxktp:hover{color:var(--colorNeutralForegroundDisabled);}", ".fphbwmw:hover{cursor:not-allowed;}", ".f19vpps7:hover .fui-Icon-filled{display:none;}", ".fv5swzo:hover .fui-Icon-regular{display:inline;}", ".f1al02dq:hover .fui-Button__icon{color:var(--colorNeutralForegroundDisabled);}", ".f1jct5ie:hover:active,.f1jct5ie:active:focus-visible{background-color:var(--colorNeutralBackgroundDisabled);}", ".f13txml0:hover:active,.f13txml0:active:focus-visible{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f1ncddno:hover:active,.f1ncddno:active:focus-visible{border-right-color:var(--colorNeutralStrokeDisabled);}", ".f1axfvow:hover:active,.f1axfvow:active:focus-visible{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f1z04ada:hover:active,.f1z04ada:active:focus-visible{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".f1uhomfy:hover:active,.f1uhomfy:active:focus-visible{color:var(--colorNeutralForegroundDisabled);}", ".fy9mucy:hover:active,.fy9mucy:active:focus-visible{cursor:not-allowed;}", ".f1g9va8i:hover:active .fui-Icon-filled,.f1g9va8i:active:focus-visible .fui-Icon-filled{display:none;}", ".fwgvudy:hover:active .fui-Icon-regular,.fwgvudy:active:focus-visible .fui-Icon-regular{display:inline;}", ".fom6jww:hover:active .fui-Button__icon,.fom6jww:active:focus-visible .fui-Button__icon{color:var(--colorNeutralForegroundDisabled);}", ".f9ql6rf:hover{background-color:var(--colorTransparentBackground);}", ".f9r0db0:hover:active,.f9r0db0:active:focus-visible{background-color:var(--colorTransparentBackground);}", ".f1s2uweq:hover{border-top-color:transparent;}", ".fr80ssc:hover{border-right-color:transparent;}", ".fecsdlb:hover{border-left-color:transparent;}", ".f1ukrpxl:hover{border-bottom-color:transparent;}", ".fhvnf4x:hover:active,.fhvnf4x:active:focus-visible{border-top-color:transparent;}", ".fb6swo4:hover:active,.fb6swo4:active:focus-visible{border-right-color:transparent;}", ".f232fm2:hover:active,.f232fm2:active:focus-visible{border-left-color:transparent;}", ".f1klyf7k:hover:active,.f1klyf7k:active:focus-visible{border-bottom-color:transparent;}"],
    m: [["@media (forced-colors: active){.f14ptb23{background-color:ButtonFace;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f9dbb4x{border-top-color:GrayText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f3qs60o{border-right-color:GrayText;}.f5u9ap2{border-left-color:GrayText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fwd1oij{border-bottom-color:GrayText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1cyfu5x{color:GrayText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f127ot8j .fui-Button__icon{color:GrayText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f19etb0b:focus{border-top-color:GrayText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f4f984j:focus{border-right-color:GrayText;}.fw441p0:focus{border-left-color:GrayText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f3d22hf:focus{border-bottom-color:GrayText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fj8k9ua:hover{background-color:ButtonFace;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fifrq0d:hover{border-top-color:GrayText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f196mwp7:hover{border-right-color:GrayText;}.fnekfq:hover{border-left-color:GrayText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1l6uprw:hover{border-bottom-color:GrayText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fa9u7a5:hover{color:GrayText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1m71e0y:hover .fui-Button__icon{color:GrayText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fw24f3:hover:active,.fw24f3:active:focus-visible{background-color:ButtonFace;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1nznrny:hover:active,.f1nznrny:active:focus-visible{border-top-color:GrayText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1ao3jkc:hover:active,.f1ao3jkc:active:focus-visible{border-left-color:GrayText;}.fq8nxuu:hover:active,.fq8nxuu:active:focus-visible{border-right-color:GrayText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.ftoixeo:hover:active,.ftoixeo:active:focus-visible{border-bottom-color:GrayText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fpmuzpx:hover:active,.fpmuzpx:active:focus-visible{color:GrayText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f168odog:hover:active .fui-Button__icon,.f168odog:active:focus-visible .fui-Button__icon{color:GrayText;}}", {
      m: "(forced-colors: active)"
    }]]
  });
  var useRootFocusStyles = /* @__PURE__ */ __styles2({
    circular: {
      Bw81rd7: 0,
      kdpuga: 0,
      dm238s: 0,
      B6xbmo0: 0,
      B3whbx2: "f1062rbf"
    },
    rounded: {},
    square: {
      Bw81rd7: 0,
      kdpuga: 0,
      dm238s: 0,
      B6xbmo0: 0,
      B3whbx2: "fj0ryk1"
    },
    primary: {
      B8q5s1w: "f17t0x8g",
      Bci5o5g: ["f194v5ow", "fk7jm04"],
      n8qw10: "f1qgg65p",
      Bdrgwmp: ["fk7jm04", "f194v5ow"],
      j6ew2k: ["fhgccpy", "fjo7pq6"],
      he4mth: "f32wu9k",
      Byr4aka: "fu5nqqq",
      lks7q5: ["f13prjl2", "f1nl83rv"],
      Bnan3qt: "f1czftr5",
      k1dn9: ["f1nl83rv", "f13prjl2"],
      Bqsb82s: ["fixhny3", "f18mfu3r"],
      jg1oma: "feygou5"
    },
    small: {
      Bw81rd7: 0,
      kdpuga: 0,
      dm238s: 0,
      B6xbmo0: 0,
      B3whbx2: "fazmxh"
    },
    medium: {},
    large: {
      Bw81rd7: 0,
      kdpuga: 0,
      dm238s: 0,
      B6xbmo0: 0,
      B3whbx2: "f1b6alqh"
    }
  }, {
    d: [[".f1062rbf[data-fui-focus-visible]{border-radius:var(--borderRadiusCircular);}", {
      p: -1
    }], [".fj0ryk1[data-fui-focus-visible]{border-radius:var(--borderRadiusNone);}", {
      p: -1
    }], ".f17t0x8g[data-fui-focus-visible]{border-top-color:var(--colorStrokeFocus2);}", ".f194v5ow[data-fui-focus-visible]{border-right-color:var(--colorStrokeFocus2);}", ".fk7jm04[data-fui-focus-visible]{border-left-color:var(--colorStrokeFocus2);}", ".f1qgg65p[data-fui-focus-visible]{border-bottom-color:var(--colorStrokeFocus2);}", ".fhgccpy[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}", ".fjo7pq6[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}", ".f32wu9k[data-fui-focus-visible]:hover{box-shadow:var(--shadow2),0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset;}", ".fu5nqqq[data-fui-focus-visible]:hover{border-top-color:var(--colorStrokeFocus2);}", ".f13prjl2[data-fui-focus-visible]:hover{border-right-color:var(--colorStrokeFocus2);}", ".f1nl83rv[data-fui-focus-visible]:hover{border-left-color:var(--colorStrokeFocus2);}", ".f1czftr5[data-fui-focus-visible]:hover{border-bottom-color:var(--colorStrokeFocus2);}", [".fazmxh[data-fui-focus-visible]{border-radius:var(--borderRadiusSmall);}", {
      p: -1
    }], [".f1b6alqh[data-fui-focus-visible]{border-radius:var(--borderRadiusLarge);}", {
      p: -1
    }]],
    t: ["@supports (-moz-appearance:button){.f18mfu3r[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}.fixhny3[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}}", "@supports (-moz-appearance:button){.feygou5[data-fui-focus-visible]:hover{box-shadow:var(--shadow2),0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset;}}"]
  });
  var useRootIconOnlyStyles = /* @__PURE__ */ __styles2({
    small: {
      Byoj8tv: 0,
      uwmqm3: 0,
      z189sj: 0,
      z8tnut: 0,
      B0ocmuz: "fu97m5z",
      Bf4jedk: "f17fgpbq",
      B2u0y6b: "f1jt17bm"
    },
    medium: {
      Byoj8tv: 0,
      uwmqm3: 0,
      z189sj: 0,
      z8tnut: 0,
      B0ocmuz: "f18ktai2",
      Bf4jedk: "fwbmr0d",
      B2u0y6b: "f44c6la"
    },
    large: {
      Byoj8tv: 0,
      uwmqm3: 0,
      z189sj: 0,
      z8tnut: 0,
      B0ocmuz: "f1hbd1aw",
      Bf4jedk: "f12clzc2",
      B2u0y6b: "fjy1crr"
    }
  }, {
    d: [[".fu97m5z{padding:1px;}", {
      p: -1
    }], ".f17fgpbq{min-width:24px;}", ".f1jt17bm{max-width:24px;}", [".f18ktai2{padding:5px;}", {
      p: -1
    }], ".fwbmr0d{min-width:32px;}", ".f44c6la{max-width:32px;}", [".f1hbd1aw{padding:7px;}", {
      p: -1
    }], ".f12clzc2{min-width:40px;}", ".fjy1crr{max-width:40px;}"]
  });
  var useIconStyles = /* @__PURE__ */ __styles2({
    small: {
      Be2twd7: "fe5j1ua",
      Bqenvij: "fjamq6b",
      a9b677: "f64fuq3",
      Bqrlyyl: "fbaiahx"
    },
    medium: {},
    large: {
      Be2twd7: "f1rt2boy",
      Bqenvij: "frvgh55",
      a9b677: "fq4mcun",
      Bqrlyyl: "f1exjqw5"
    },
    before: {
      t21cq0: ["f1nizpg2", "f1a695kz"]
    },
    after: {
      Frg6f3: ["f1a695kz", "f1nizpg2"]
    }
  }, {
    d: [".fe5j1ua{font-size:20px;}", ".fjamq6b{height:20px;}", ".f64fuq3{width:20px;}", ".fbaiahx{--fui-Button__icon--spacing:var(--spacingHorizontalXS);}", ".f1rt2boy{font-size:24px;}", ".frvgh55{height:24px;}", ".fq4mcun{width:24px;}", ".f1exjqw5{--fui-Button__icon--spacing:var(--spacingHorizontalSNudge);}", ".f1nizpg2{margin-right:var(--fui-Button__icon--spacing);}", ".f1a695kz{margin-left:var(--fui-Button__icon--spacing);}"]
  });
  var useButtonStyles_unstable = (state) => {
    "use no memo";
    const rootBaseClassName = useRootBaseClassName();
    const iconBaseClassName = useIconBaseClassName();
    const rootStyles = useRootStyles2();
    const rootDisabledStyles = useRootDisabledStyles();
    const rootFocusStyles = useRootFocusStyles();
    const rootIconOnlyStyles = useRootIconOnlyStyles();
    const iconStyles = useIconStyles();
    const {
      appearance,
      disabled,
      disabledFocusable,
      icon,
      iconOnly,
      iconPosition,
      shape,
      size
    } = state;
    state.root.className = mergeClasses(
      buttonClassNames.root,
      rootBaseClassName,
      appearance && rootStyles[appearance],
      rootStyles[size],
      icon && size === "small" && rootStyles.smallWithIcon,
      icon && size === "large" && rootStyles.largeWithIcon,
      rootStyles[shape],
      // Disabled styles
      (disabled || disabledFocusable) && rootDisabledStyles.base,
      (disabled || disabledFocusable) && rootDisabledStyles.highContrast,
      appearance && (disabled || disabledFocusable) && rootDisabledStyles[appearance],
      // Focus styles
      appearance === "primary" && rootFocusStyles.primary,
      rootFocusStyles[size],
      rootFocusStyles[shape],
      // Icon-only styles
      iconOnly && rootIconOnlyStyles[size],
      // User provided class name
      state.root.className
    );
    if (state.icon) {
      state.icon.className = mergeClasses(buttonClassNames.icon, iconBaseClassName, !!state.root.children && iconStyles[iconPosition], iconStyles[size], state.icon.className);
    }
    return state;
  };

  // node_modules/@fluentui/react-button/lib/ToggleButton.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-button/lib/components/ToggleButton/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-button/lib/components/ToggleButton/renderToggleButton.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-button/lib/components/ToggleButton/useToggleButton.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-button/lib/utils/useToggleState.js
  init_define_import_meta_env();
  var React19 = __toESM(require_react_shim());
  function useToggleState(props, state) {
    const { checked, defaultChecked, disabled, disabledFocusable, isAccessible = false } = props;
    const { onClick, role } = state.root;
    const [checkedValue, setCheckedValue] = useControllableState({
      state: checked,
      defaultState: defaultChecked,
      initialState: false
    });
    const isCheckboxTypeRole = role === "menuitemcheckbox" || role === "checkbox";
    const onToggleClick = React19.useCallback((ev) => {
      if (!disabled && !disabledFocusable) {
        if (ev.defaultPrevented) {
          return;
        }
        setCheckedValue(!checkedValue);
      }
    }, [
      checkedValue,
      disabled,
      disabledFocusable,
      setCheckedValue
    ]);
    return {
      ...state,
      checked: checkedValue,
      isAccessible,
      root: {
        ...state.root,
        [isCheckboxTypeRole ? "aria-checked" : "aria-pressed"]: checkedValue,
        onClick: useEventCallback(mergeCallbacks(onClick, onToggleClick))
      }
    };
  }

  // node_modules/@fluentui/react-button/lib/components/ToggleButton/useToggleButton.js
  var useToggleButtonBase_unstable = (props, ref) => {
    const { checked = false, defaultChecked = false, isAccessible = false, ...buttonProps } = props;
    const buttonState = useButtonBase_unstable(buttonProps, ref);
    return useToggleState(props, buttonState);
  };

  // node_modules/@fluentui/react-button/lib/components/ToggleButton/useToggleButtonStyles.styles.js
  init_define_import_meta_env();
  var toggleButtonClassNames = {
    root: "fui-ToggleButton",
    icon: "fui-ToggleButton__icon"
  };
  var useRootCheckedStyles = /* @__PURE__ */ __styles2({
    base: {
      De3pzq: "f1nfm20t",
      g2u3we: "fj3muxo",
      h3c5rm: ["f1akhkt", "f1lxtadh"],
      B9xav0g: "f1aperda",
      zhjwy3: ["f1lxtadh", "f1akhkt"],
      sj55zd: "f14nttnl",
      B4j52fo: "f192inf7",
      Bekrc4i: ["f5tn483", "f1ojsxk5"],
      Bn0qgzm: "f1vxd6vx",
      ibv6hh: ["f1ojsxk5", "f5tn483"],
      D0sxk3: "fxoiby5",
      t6yez3: "f15q0o9g",
      Jwef8y: "f1knas48",
      Bgoe8wy: "fvcxoqz",
      Bwzppfd: ["f1ub3y4t", "f1m52nbi"],
      oetu4i: "f1xlaoq0",
      gg5e9n: ["f1m52nbi", "f1ub3y4t"],
      Bi91k9c: "feu1g3u",
      Bpjbzib: "f128kf1x",
      im15vp: "f1a38rnh",
      Hjvxdg: ["f1wvuwkr", "fbu0tau"],
      Gpfmf1: "f132k7zb",
      ustxxc: ["fbu0tau", "f1wvuwkr"],
      Brsut9c: "fggfoek"
    },
    highContrast: {
      By8wz76: "f1nz3ub2",
      Bcq6wej: "fjq791v",
      Jcjdmf: ["fkq2p2y", "f1sehlss"],
      sc4o1m: "f11odvng",
      Bosien3: ["f1sehlss", "fkq2p2y"],
      B7iucu3: "fqc85l4",
      B8gzw0y: "f1h3a8gf",
      Bbkh6qg: "fkiggi6",
      F230oe: "f8gmj8i",
      Bdw8ktp: ["f1ap8nzx", "fjag8bx"],
      Bj1xduy: "f1igan7k",
      Bhh2cfd: ["fjag8bx", "f1ap8nzx"],
      Bahaeuw: "f1v3eptx",
      Bv2bamp: "f1ysmecq",
      vxuvv6: "faulsx",
      Bli9q98: ["f79t15f", "f8qmx7k"],
      Bx2tt8t: "fbtzoaq",
      yad0b3: ["f8qmx7k", "f79t15f"],
      j2fop7: "fd4bjan",
      B6rz4yo: 0,
      Buk7464: 0,
      Bqg8rp8: 0,
      pjr8j7: 0,
      Bgs2klq: 0,
      Hwei09: 0,
      Bi9aqk7: 0,
      Fihjvf: 0,
      nhyz0p: 0,
      Buw724y: 0,
      Bn7qjfh: 0,
      B0u7xl9: 0,
      md97jv: 0,
      h3ptyc: 0,
      s1kvfj: 0,
      kogrdj: 0,
      dqx2i2: "fdmpsdn",
      o0nolc: "fgjsukj"
    },
    outline: {
      De3pzq: "f1q9pm1r",
      g2u3we: "fj3muxo",
      h3c5rm: ["f1akhkt", "f1lxtadh"],
      B9xav0g: "f1aperda",
      zhjwy3: ["f1lxtadh", "f1akhkt"],
      B4j52fo: "fgx37oo",
      Bekrc4i: ["f130t4y6", "f1efpmoh"],
      Bn0qgzm: "fv51ejd",
      ibv6hh: ["f1efpmoh", "f130t4y6"],
      Jwef8y: "fjxutwb",
      Bpjbzib: "fkoldzo",
      B8q5s1w: "fcaw57c",
      Bci5o5g: ["fpwd27e", "f1999bjr"],
      n8qw10: "f1hi52o4",
      Bdrgwmp: ["f1999bjr", "fpwd27e"]
    },
    primary: {
      De3pzq: "f8w4g0q",
      g2u3we: "f1p3nwhy",
      h3c5rm: ["f11589ue", "f1pdflbu"],
      B9xav0g: "f1q5o8ev",
      zhjwy3: ["f1pdflbu", "f11589ue"],
      sj55zd: "f1phragk",
      Jwef8y: "f15wkkf3",
      Bgoe8wy: "f1s2uweq",
      Bwzppfd: ["fr80ssc", "fecsdlb"],
      oetu4i: "f1ukrpxl",
      gg5e9n: ["fecsdlb", "fr80ssc"],
      Bi91k9c: "f1rq72xc",
      Bpjbzib: "f1ksv2xa",
      im15vp: "fhvnf4x",
      Hjvxdg: ["fb6swo4", "f232fm2"],
      Gpfmf1: "f1klyf7k",
      ustxxc: ["f232fm2", "fb6swo4"],
      Brsut9c: "f1d6mv4x"
    },
    secondary: {},
    subtle: {
      De3pzq: "fq5gl1p",
      g2u3we: "f1p3nwhy",
      h3c5rm: ["f11589ue", "f1pdflbu"],
      B9xav0g: "f1q5o8ev",
      zhjwy3: ["f1pdflbu", "f11589ue"],
      sj55zd: "f1eryozh",
      Jwef8y: "f1t94bn6",
      Bgoe8wy: "f1s2uweq",
      Bwzppfd: ["fr80ssc", "fecsdlb"],
      oetu4i: "f1ukrpxl",
      gg5e9n: ["fecsdlb", "fr80ssc"],
      Bi91k9c: "fnwyq0v",
      Bpjbzib: "f1q1yqic",
      im15vp: "fhvnf4x",
      Hjvxdg: ["fb6swo4", "f232fm2"],
      Gpfmf1: "f1klyf7k",
      ustxxc: ["f232fm2", "fb6swo4"],
      Brsut9c: "fwga7ee"
    },
    transparent: {
      De3pzq: "f1q9pm1r",
      g2u3we: "f1p3nwhy",
      h3c5rm: ["f11589ue", "f1pdflbu"],
      B9xav0g: "f1q5o8ev",
      zhjwy3: ["f1pdflbu", "f11589ue"],
      sj55zd: "f1qj7y59",
      Jwef8y: "fjxutwb",
      Bgoe8wy: "f1s2uweq",
      Bwzppfd: ["fr80ssc", "fecsdlb"],
      oetu4i: "f1ukrpxl",
      gg5e9n: ["fecsdlb", "fr80ssc"],
      Bi91k9c: "f139oj5f",
      Bpjbzib: "fkoldzo",
      im15vp: "fhvnf4x",
      Hjvxdg: ["fb6swo4", "f232fm2"],
      Gpfmf1: "f1klyf7k",
      ustxxc: ["f232fm2", "fb6swo4"],
      Brsut9c: "f1l983o9"
    }
  }, {
    d: [".f1nfm20t{background-color:var(--colorNeutralBackground1Selected);}", ".fj3muxo{border-top-color:var(--colorNeutralStroke1);}", ".f1akhkt{border-right-color:var(--colorNeutralStroke1);}", ".f1lxtadh{border-left-color:var(--colorNeutralStroke1);}", ".f1aperda{border-bottom-color:var(--colorNeutralStroke1);}", ".f14nttnl{color:var(--colorNeutralForeground1Selected);}", ".f192inf7{border-top-width:var(--strokeWidthThin);}", ".f5tn483{border-right-width:var(--strokeWidthThin);}", ".f1ojsxk5{border-left-width:var(--strokeWidthThin);}", ".f1vxd6vx{border-bottom-width:var(--strokeWidthThin);}", ".fxoiby5 .fui-Icon-filled{display:inline;}", ".f15q0o9g .fui-Icon-regular{display:none;}", ".f1q9pm1r{background-color:var(--colorTransparentBackgroundSelected);}", ".fgx37oo{border-top-width:var(--strokeWidthThicker);}", ".f130t4y6{border-right-width:var(--strokeWidthThicker);}", ".f1efpmoh{border-left-width:var(--strokeWidthThicker);}", ".fv51ejd{border-bottom-width:var(--strokeWidthThicker);}", ".fcaw57c[data-fui-focus-visible]{border-top-color:var(--colorNeutralStroke1);}", ".fpwd27e[data-fui-focus-visible]{border-right-color:var(--colorNeutralStroke1);}", ".f1999bjr[data-fui-focus-visible]{border-left-color:var(--colorNeutralStroke1);}", ".f1hi52o4[data-fui-focus-visible]{border-bottom-color:var(--colorNeutralStroke1);}", ".f8w4g0q{background-color:var(--colorBrandBackgroundSelected);}", ".f1p3nwhy{border-top-color:transparent;}", ".f11589ue{border-right-color:transparent;}", ".f1pdflbu{border-left-color:transparent;}", ".f1q5o8ev{border-bottom-color:transparent;}", ".f1phragk{color:var(--colorNeutralForegroundOnBrand);}", ".fq5gl1p{background-color:var(--colorSubtleBackgroundSelected);}", ".f1eryozh{color:var(--colorNeutralForeground2Selected);}", ".f1qj7y59{color:var(--colorNeutralForeground2BrandSelected);}"],
    h: [".f1knas48:hover{background-color:var(--colorNeutralBackground1Hover);}", ".fvcxoqz:hover{border-top-color:var(--colorNeutralStroke1Hover);}", ".f1ub3y4t:hover{border-right-color:var(--colorNeutralStroke1Hover);}", ".f1m52nbi:hover{border-left-color:var(--colorNeutralStroke1Hover);}", ".f1xlaoq0:hover{border-bottom-color:var(--colorNeutralStroke1Hover);}", ".feu1g3u:hover{color:var(--colorNeutralForeground1Hover);}", ".f128kf1x:hover:active,.f128kf1x:active:focus-visible{background-color:var(--colorNeutralBackground1Pressed);}", ".f1a38rnh:hover:active,.f1a38rnh:active:focus-visible{border-top-color:var(--colorNeutralStroke1Pressed);}", ".f1wvuwkr:hover:active,.f1wvuwkr:active:focus-visible{border-right-color:var(--colorNeutralStroke1Pressed);}", ".fbu0tau:hover:active,.fbu0tau:active:focus-visible{border-left-color:var(--colorNeutralStroke1Pressed);}", ".f132k7zb:hover:active,.f132k7zb:active:focus-visible{border-bottom-color:var(--colorNeutralStroke1Pressed);}", ".fggfoek:hover:active,.fggfoek:active:focus-visible{color:var(--colorNeutralForeground1Pressed);}", ".fjxutwb:hover{background-color:var(--colorTransparentBackgroundHover);}", ".fkoldzo:hover:active,.fkoldzo:active:focus-visible{background-color:var(--colorTransparentBackgroundPressed);}", ".f15wkkf3:hover{background-color:var(--colorBrandBackgroundHover);}", ".f1s2uweq:hover{border-top-color:transparent;}", ".fr80ssc:hover{border-right-color:transparent;}", ".fecsdlb:hover{border-left-color:transparent;}", ".f1ukrpxl:hover{border-bottom-color:transparent;}", ".f1rq72xc:hover{color:var(--colorNeutralForegroundOnBrand);}", ".f1ksv2xa:hover:active,.f1ksv2xa:active:focus-visible{background-color:var(--colorBrandBackgroundPressed);}", ".fhvnf4x:hover:active,.fhvnf4x:active:focus-visible{border-top-color:transparent;}", ".fb6swo4:hover:active,.fb6swo4:active:focus-visible{border-right-color:transparent;}", ".f232fm2:hover:active,.f232fm2:active:focus-visible{border-left-color:transparent;}", ".f1klyf7k:hover:active,.f1klyf7k:active:focus-visible{border-bottom-color:transparent;}", ".f1d6mv4x:hover:active,.f1d6mv4x:active:focus-visible{color:var(--colorNeutralForegroundOnBrand);}", ".f1t94bn6:hover{background-color:var(--colorSubtleBackgroundHover);}", ".fnwyq0v:hover{color:var(--colorNeutralForeground2Hover);}", ".f1q1yqic:hover:active,.f1q1yqic:active:focus-visible{background-color:var(--colorSubtleBackgroundPressed);}", ".fwga7ee:hover:active,.fwga7ee:active:focus-visible{color:var(--colorNeutralForeground2Pressed);}", ".f139oj5f:hover{color:var(--colorNeutralForeground2BrandHover);}", ".f1l983o9:hover:active,.f1l983o9:active:focus-visible{color:var(--colorNeutralForeground2BrandPressed);}"],
    m: [["@media (forced-colors: active){.f1nz3ub2{background-color:Highlight;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fjq791v{border-top-color:Highlight;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1sehlss{border-left-color:Highlight;}.fkq2p2y{border-right-color:Highlight;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f11odvng{border-bottom-color:Highlight;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fqc85l4{color:HighlightText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1h3a8gf{forced-color-adjust:none;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fkiggi6:hover{background-color:HighlightText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f8gmj8i:hover{border-top-color:Highlight;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1ap8nzx:hover{border-right-color:Highlight;}.fjag8bx:hover{border-left-color:Highlight;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1igan7k:hover{border-bottom-color:Highlight;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1v3eptx:hover{color:Highlight;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1ysmecq:hover:active,.f1ysmecq:active:focus-visible{background-color:HighlightText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.faulsx:hover:active,.faulsx:active:focus-visible{border-top-color:Highlight;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f79t15f:hover:active,.f79t15f:active:focus-visible{border-right-color:Highlight;}.f8qmx7k:hover:active,.f8qmx7k:active:focus-visible{border-left-color:Highlight;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fbtzoaq:hover:active,.fbtzoaq:active:focus-visible{border-bottom-color:Highlight;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fd4bjan:hover:active,.fd4bjan:active:focus-visible{color:Highlight;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fdmpsdn:focus{border:1px solid HighlightText;}}", {
      p: -2,
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fgjsukj:focus{outline-color:Highlight;}}", {
      m: "(forced-colors: active)"
    }]]
  });
  var useCheckedAccessibleStyles = /* @__PURE__ */ __styles2({
    base: {
      De3pzq: "ffp7eso",
      g2u3we: "f1p3nwhy",
      h3c5rm: ["f11589ue", "f1pdflbu"],
      B9xav0g: "f1q5o8ev",
      zhjwy3: ["f1pdflbu", "f11589ue"],
      sj55zd: "f1phragk",
      Jwef8y: "f15wkkf3",
      Bgoe8wy: "f1s2uweq",
      Bwzppfd: ["fr80ssc", "fecsdlb"],
      oetu4i: "f1ukrpxl",
      gg5e9n: ["fecsdlb", "fr80ssc"],
      Bi91k9c: "f1rq72xc",
      Bpjbzib: "f1ksv2xa",
      im15vp: "fhvnf4x",
      Hjvxdg: ["fb6swo4", "f232fm2"],
      Gpfmf1: "f1klyf7k",
      ustxxc: ["f232fm2", "fb6swo4"],
      Brsut9c: "f1d6mv4x"
    },
    outline: {
      B4j52fo: "f192inf7",
      Bekrc4i: ["f5tn483", "f1ojsxk5"],
      Bn0qgzm: "f1vxd6vx",
      ibv6hh: ["f1ojsxk5", "f5tn483"]
    },
    primary: {
      Bw0xxkn: 0,
      oeaueh: 0,
      Bpd4iqm: 0,
      Befb4lg: "f12rpxh0",
      Dhobit: "f10okvgz",
      Bfpq7zp: 0,
      g9k6zt: 0,
      Bn4voq9: 0,
      giviqs: "f40way",
      Bpkdmpa: "ftbw7yw"
    },
    subtle: {
      ysa4qo: "f17xzaca"
    },
    transparent: {},
    secondary: {}
  }, {
    d: [".ffp7eso{background-color:var(--colorBrandBackground);}", ".f1p3nwhy{border-top-color:transparent;}", ".f11589ue{border-right-color:transparent;}", ".f1pdflbu{border-left-color:transparent;}", ".f1q5o8ev{border-bottom-color:transparent;}", ".f1phragk{color:var(--colorNeutralForegroundOnBrand);}", ".f192inf7{border-top-width:var(--strokeWidthThin);}", ".f5tn483{border-right-width:var(--strokeWidthThin);}", ".f1ojsxk5{border-left-width:var(--strokeWidthThin);}", ".f1vxd6vx{border-bottom-width:var(--strokeWidthThin);}", [".f12rpxh0{outline:var(--strokeWidthThin) solid var(--colorNeutralForegroundOnBrand);}", {
      p: -1
    }], ".f10okvgz{outline-offset:calc(var(--strokeWidthThicker) * -1);}", [".f40way[data-fui-focus-visible]{outline:var(--strokeWidthThin) solid var(--colorNeutralForegroundOnBrand);}", {
      p: -1
    }], ".ftbw7yw[data-fui-focus-visible]{outline-offset:calc(var(--strokeWidthThickest) * -1);}"],
    h: [".f15wkkf3:hover{background-color:var(--colorBrandBackgroundHover);}", ".f1s2uweq:hover{border-top-color:transparent;}", ".fr80ssc:hover{border-right-color:transparent;}", ".fecsdlb:hover{border-left-color:transparent;}", ".f1ukrpxl:hover{border-bottom-color:transparent;}", ".f1rq72xc:hover{color:var(--colorNeutralForegroundOnBrand);}", ".f1ksv2xa:hover:active,.f1ksv2xa:active:focus-visible{background-color:var(--colorBrandBackgroundPressed);}", ".fhvnf4x:hover:active,.fhvnf4x:active:focus-visible{border-top-color:transparent;}", ".fb6swo4:hover:active,.fb6swo4:active:focus-visible{border-right-color:transparent;}", ".f232fm2:hover:active,.f232fm2:active:focus-visible{border-left-color:transparent;}", ".f1klyf7k:hover:active,.f1klyf7k:active:focus-visible{border-bottom-color:transparent;}", ".f1d6mv4x:hover:active,.f1d6mv4x:active:focus-visible{color:var(--colorNeutralForegroundOnBrand);}", ".f17xzaca:hover .fui-ToggleButton__icon{color:var(--colorNeutralForegroundOnBrand);}"]
  });
  var useRootDisabledStyles2 = /* @__PURE__ */ __styles2({
    base: {
      De3pzq: "f1bg9a2p",
      g2u3we: "f1jj8ep1",
      h3c5rm: ["f15xbau", "fy0fskl"],
      B9xav0g: "f4ikngz",
      zhjwy3: ["fy0fskl", "f15xbau"],
      sj55zd: "f1s2aq7o",
      Jwef8y: "f1falr9n",
      Bgoe8wy: "f12mpcsy",
      Bwzppfd: ["f1gwvigk", "f18rmfxp"],
      oetu4i: "f1jnshp0",
      gg5e9n: ["f18rmfxp", "f1gwvigk"],
      Bi91k9c: "fvgxktp",
      Bpjbzib: "f1jct5ie",
      im15vp: "f13txml0",
      Hjvxdg: ["f1ncddno", "f1axfvow"],
      Gpfmf1: "f1z04ada",
      ustxxc: ["f1axfvow", "f1ncddno"],
      Brsut9c: "f1uhomfy"
    },
    outline: {},
    primary: {
      g2u3we: "f1p3nwhy",
      h3c5rm: ["f11589ue", "f1pdflbu"],
      B9xav0g: "f1q5o8ev",
      zhjwy3: ["f1pdflbu", "f11589ue"],
      Bgoe8wy: "f1s2uweq",
      Bwzppfd: ["fr80ssc", "fecsdlb"],
      oetu4i: "f1ukrpxl",
      gg5e9n: ["fecsdlb", "fr80ssc"],
      im15vp: "fhvnf4x",
      Hjvxdg: ["fb6swo4", "f232fm2"],
      Gpfmf1: "f1klyf7k",
      ustxxc: ["f232fm2", "fb6swo4"]
    },
    secondary: {},
    subtle: {
      De3pzq: "f1c21dwh",
      g2u3we: "f1p3nwhy",
      h3c5rm: ["f11589ue", "f1pdflbu"],
      B9xav0g: "f1q5o8ev",
      zhjwy3: ["f1pdflbu", "f11589ue"],
      Jwef8y: "fjxutwb",
      Bgoe8wy: "f1s2uweq",
      Bwzppfd: ["fr80ssc", "fecsdlb"],
      oetu4i: "f1ukrpxl",
      gg5e9n: ["fecsdlb", "fr80ssc"],
      Bpjbzib: "fkoldzo",
      im15vp: "fhvnf4x",
      Hjvxdg: ["fb6swo4", "f232fm2"],
      Gpfmf1: "f1klyf7k",
      ustxxc: ["f232fm2", "fb6swo4"]
    },
    transparent: {
      De3pzq: "f1c21dwh",
      g2u3we: "f1p3nwhy",
      h3c5rm: ["f11589ue", "f1pdflbu"],
      B9xav0g: "f1q5o8ev",
      zhjwy3: ["f1pdflbu", "f11589ue"],
      Jwef8y: "fjxutwb",
      Bgoe8wy: "f1s2uweq",
      Bwzppfd: ["fr80ssc", "fecsdlb"],
      oetu4i: "f1ukrpxl",
      gg5e9n: ["fecsdlb", "fr80ssc"],
      Bpjbzib: "fkoldzo",
      im15vp: "fhvnf4x",
      Hjvxdg: ["fb6swo4", "f232fm2"],
      Gpfmf1: "f1klyf7k",
      ustxxc: ["f232fm2", "fb6swo4"]
    }
  }, {
    d: [".f1bg9a2p{background-color:var(--colorNeutralBackgroundDisabled);}", ".f1jj8ep1{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f15xbau{border-right-color:var(--colorNeutralStrokeDisabled);}", ".fy0fskl{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f4ikngz{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}", ".f1p3nwhy{border-top-color:transparent;}", ".f11589ue{border-right-color:transparent;}", ".f1pdflbu{border-left-color:transparent;}", ".f1q5o8ev{border-bottom-color:transparent;}", ".f1c21dwh{background-color:var(--colorTransparentBackground);}"],
    h: [".f1falr9n:hover{background-color:var(--colorNeutralBackgroundDisabled);}", ".f12mpcsy:hover{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f1gwvigk:hover{border-right-color:var(--colorNeutralStrokeDisabled);}", ".f18rmfxp:hover{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f1jnshp0:hover{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".fvgxktp:hover{color:var(--colorNeutralForegroundDisabled);}", ".f1jct5ie:hover:active,.f1jct5ie:active:focus-visible{background-color:var(--colorNeutralBackgroundDisabled);}", ".f13txml0:hover:active,.f13txml0:active:focus-visible{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f1ncddno:hover:active,.f1ncddno:active:focus-visible{border-right-color:var(--colorNeutralStrokeDisabled);}", ".f1axfvow:hover:active,.f1axfvow:active:focus-visible{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f1z04ada:hover:active,.f1z04ada:active:focus-visible{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".f1uhomfy:hover:active,.f1uhomfy:active:focus-visible{color:var(--colorNeutralForegroundDisabled);}", ".f1s2uweq:hover{border-top-color:transparent;}", ".fr80ssc:hover{border-right-color:transparent;}", ".fecsdlb:hover{border-left-color:transparent;}", ".f1ukrpxl:hover{border-bottom-color:transparent;}", ".fhvnf4x:hover:active,.fhvnf4x:active:focus-visible{border-top-color:transparent;}", ".fb6swo4:hover:active,.fb6swo4:active:focus-visible{border-right-color:transparent;}", ".f232fm2:hover:active,.f232fm2:active:focus-visible{border-left-color:transparent;}", ".f1klyf7k:hover:active,.f1klyf7k:active:focus-visible{border-bottom-color:transparent;}", ".fjxutwb:hover{background-color:var(--colorTransparentBackgroundHover);}", ".fkoldzo:hover:active,.fkoldzo:active:focus-visible{background-color:var(--colorTransparentBackgroundPressed);}"]
  });
  var useIconCheckedStyles = /* @__PURE__ */ __styles2({
    subtleOrTransparent: {
      sj55zd: "f1qj7y59"
    },
    highContrast: {
      B8gzw0y: "f1dd5bof"
    }
  }, {
    d: [".f1qj7y59{color:var(--colorNeutralForeground2BrandSelected);}"],
    m: [["@media (forced-colors: active){.f1dd5bof{forced-color-adjust:auto;}}", {
      m: "(forced-colors: active)"
    }]]
  });
  var usePrimaryHighContrastStyles = /* @__PURE__ */ __styles2({
    base: {
      By8wz76: "f14ptb23",
      Bcq6wej: "fd7znuh",
      Jcjdmf: ["f1wh4a04", "f15h7fac"],
      sc4o1m: "f1f064oi",
      Bosien3: ["f15h7fac", "f1wh4a04"],
      B7iucu3: "f3ggph1",
      B8gzw0y: "f1dd5bof"
    },
    disabled: {
      Bcq6wej: "f9dbb4x",
      Jcjdmf: ["f3qs60o", "f5u9ap2"],
      sc4o1m: "fwd1oij",
      Bosien3: ["f5u9ap2", "f3qs60o"],
      B7iucu3: "f1cyfu5x",
      h3ptyc: "f19etb0b",
      Buw724y: ["f4f984j", "fw441p0"],
      Buk7464: "f3d22hf",
      Hwei09: ["fw441p0", "f4f984j"]
    }
  }, {
    m: [["@media (forced-colors: active){.f14ptb23{background-color:ButtonFace;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fd7znuh{border-top-color:ButtonBorder;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f15h7fac{border-left-color:ButtonBorder;}.f1wh4a04{border-right-color:ButtonBorder;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1f064oi{border-bottom-color:ButtonBorder;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f3ggph1{color:ButtonText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1dd5bof{forced-color-adjust:auto;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f9dbb4x{border-top-color:GrayText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f3qs60o{border-right-color:GrayText;}.f5u9ap2{border-left-color:GrayText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fwd1oij{border-bottom-color:GrayText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1cyfu5x{color:GrayText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f19etb0b:focus{border-top-color:GrayText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f4f984j:focus{border-right-color:GrayText;}.fw441p0:focus{border-left-color:GrayText;}}", {
      m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f3d22hf:focus{border-bottom-color:GrayText;}}", {
      m: "(forced-colors: active)"
    }]]
  });
  var useToggleButtonStyles_unstable = (state) => {
    "use no memo";
    const rootCheckedStyles = useRootCheckedStyles();
    const accessibleCheckedStyles = useCheckedAccessibleStyles();
    const rootDisabledStyles = useRootDisabledStyles2();
    const iconCheckedStyles = useIconCheckedStyles();
    const primaryHighContrastStyles = usePrimaryHighContrastStyles();
    const {
      appearance,
      checked,
      disabled,
      disabledFocusable,
      isAccessible
    } = state;
    state.root.className = mergeClasses(
      toggleButtonClassNames.root,
      // Primary high contrast styles
      appearance === "primary" && primaryHighContrastStyles.base,
      appearance === "primary" && (disabled || disabledFocusable) && primaryHighContrastStyles.disabled,
      // Checked styles
      checked && rootCheckedStyles.base,
      checked && rootCheckedStyles.highContrast,
      appearance && checked && rootCheckedStyles[appearance],
      // Opt-in accessible checked styles
      isAccessible && checked && accessibleCheckedStyles.base,
      isAccessible && appearance && checked && accessibleCheckedStyles[appearance],
      // Disabled styles
      (disabled || disabledFocusable) && rootDisabledStyles.base,
      appearance && (disabled || disabledFocusable) && rootDisabledStyles[appearance],
      // User provided class name
      state.root.className
    );
    if (state.icon) {
      state.icon.className = mergeClasses(toggleButtonClassNames.icon, checked && !isAccessible && (appearance === "subtle" || appearance === "transparent") && iconCheckedStyles.subtleOrTransparent, iconCheckedStyles.highContrast, state.icon.className);
    }
    useButtonStyles_unstable(state);
    return state;
  };

  // node_modules/@fluentui/react-divider/lib/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-divider/lib/Divider.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-divider/lib/components/Divider/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-divider/lib/components/Divider/renderDivider.js
  init_define_import_meta_env();
  var renderDivider_unstable = (state) => {
    assertSlots(state);
    return /* @__PURE__ */ jsx(state.root, {
      children: state.root.children !== void 0 && /* @__PURE__ */ jsx(state.wrapper, {
        children: state.root.children
      })
    });
  };

  // node_modules/@fluentui/react-divider/lib/components/Divider/useDivider.js
  init_define_import_meta_env();
  var useDividerBase_unstable = (props, ref) => {
    const { vertical = false, wrapper, ...rest } = props;
    const dividerId = useId2("divider-");
    return {
      vertical,
      components: {
        root: "div",
        wrapper: "div"
      },
      root: slot_exports.always({
        role: "separator",
        "aria-orientation": vertical ? "vertical" : "horizontal",
        "aria-labelledby": props.children ? dividerId : void 0,
        ref,
        ...rest
      }, {
        elementType: "div"
      }),
      wrapper: slot_exports.always(wrapper, {
        defaultProps: {
          id: dividerId,
          children: props.children
        },
        elementType: "div"
      })
    };
  };

  // node_modules/@fluentui/react-divider/lib/components/Divider/useDividerStyles.styles.js
  init_define_import_meta_env();
  var dividerClassNames = {
    root: "fui-Divider",
    wrapper: "fui-Divider__wrapper"
  };
  var useBaseStyles = /* @__PURE__ */ __styles2({
    base: {
      Bt984gj: "f122n59",
      B7ck84d: "f1ewtqcl",
      mc9l5x: "f22iagw",
      Beiy3e4: "f1063pyq",
      Bh6795r: "fqerorx",
      qhf8xq: "f10pi13n",
      Bahqtrf: "fk6fouc",
      Be2twd7: "fy9rknc",
      Bhrd7zp: "figsok6",
      Bg96gwp: "fwrc4pm",
      fsow6f: "f17mccla",
      Bcvre1j: "fyl8oag",
      Br0sdwz: "f16vkdww",
      Bn78ew0: "fhsnbul",
      li1rpt: "f1gw3sf2",
      ap17g6: "f1ly5f7u",
      B771hl4: "f1s3tz6t"
    },
    childless: {
      susq4k: "f1kyqvp9",
      Bicfajf: ["fzynn9s", "f1z0ukd1"],
      jwcpgy: ["fekrn8e", "ftdg338"],
      B4rk6o: "fesgyo"
    },
    start: {
      Bsft5z2: "f13zj6fq"
    },
    center: {
      Ftih45: "f1wl9k8s",
      Bsft5z2: "f13zj6fq"
    },
    end: {
      Ftih45: "f1wl9k8s"
    },
    brand: {
      sj55zd: "f16muhyy",
      Bq4z7u6: "fcbuu2a",
      Bk5zm6e: ["f1wdw2dr", "f1ttio3w"],
      Bqjgrrk: "f1582fpk",
      Bm6vgfq: ["f1ttio3w", "f1wdw2dr"],
      B0n5ga8: "f1ahrvm8",
      s924m2: ["f1cd3wbc", "f17hbk9y"],
      B1q35kw: "fvrapl0",
      Gp14am: ["f17hbk9y", "f1cd3wbc"]
    },
    "default": {
      sj55zd: "fkfq4zb",
      Bq4z7u6: "f1vccso1",
      Bk5zm6e: ["f1geml7w", "fjml6kk"],
      Bqjgrrk: "f1r7kh1m",
      Bm6vgfq: ["fjml6kk", "f1geml7w"],
      B0n5ga8: "f16j7guv",
      s924m2: ["fx01ahm", "fj1a37q"],
      B1q35kw: "fl8d8yv",
      Gp14am: ["fj1a37q", "fx01ahm"]
    },
    subtle: {
      sj55zd: "f11d4kpn",
      Bq4z7u6: "f5g06un",
      Bk5zm6e: ["f13sxdku", "f1n015lb"],
      Bqjgrrk: "f1x6bl8t",
      Bm6vgfq: ["f1n015lb", "f13sxdku"],
      B0n5ga8: "fvod1wy",
      s924m2: ["fwslg65", "flk0e17"],
      B1q35kw: "f103fvts",
      Gp14am: ["flk0e17", "fwslg65"]
    },
    strong: {
      sj55zd: "f19n0e5",
      Bq4z7u6: "f10tv6oz",
      Bk5zm6e: ["f16xp3sf", "f1seuxxq"],
      Bqjgrrk: "fwrmqbx",
      Bm6vgfq: ["f1seuxxq", "f16xp3sf"],
      B0n5ga8: "ft83z1f",
      s924m2: ["f1g4150c", "f192dr6e"],
      B1q35kw: "f1qnawh6",
      Gp14am: ["f192dr6e", "f1g4150c"]
    }
  }, {
    d: [".f122n59{align-items:center;}", ".f1ewtqcl{box-sizing:border-box;}", ".f22iagw{display:flex;}", ".f1063pyq{flex-direction:row;}", ".fqerorx{flex-grow:1;}", ".f10pi13n{position:relative;}", ".fk6fouc{font-family:var(--fontFamilyBase);}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}", ".f17mccla{text-align:center;}", ".fyl8oag::before{box-sizing:border-box;}", ".f16vkdww::before{display:flex;}", ".fhsnbul::before{flex-grow:1;}", ".f1gw3sf2::after{box-sizing:border-box;}", ".f1ly5f7u::after{display:flex;}", ".f1s3tz6t::after{flex-grow:1;}", ".f1kyqvp9::before{margin-bottom:0;}", ".fzynn9s::before{margin-right:0;}", ".f1z0ukd1::before{margin-left:0;}", ".fekrn8e::after{margin-left:0;}", ".ftdg338::after{margin-right:0;}", ".fesgyo::after{margin-top:0;}", '.f13zj6fq::after{content:"";}', '.f1wl9k8s::before{content:"";}', ".f16muhyy{color:var(--colorBrandForeground1);}", ".fcbuu2a::before{border-top-color:var(--colorBrandStroke1);}", ".f1wdw2dr::before{border-right-color:var(--colorBrandStroke1);}", ".f1ttio3w::before{border-left-color:var(--colorBrandStroke1);}", ".f1582fpk::before{border-bottom-color:var(--colorBrandStroke1);}", ".f1ahrvm8::after{border-top-color:var(--colorBrandStroke1);}", ".f1cd3wbc::after{border-right-color:var(--colorBrandStroke1);}", ".f17hbk9y::after{border-left-color:var(--colorBrandStroke1);}", ".fvrapl0::after{border-bottom-color:var(--colorBrandStroke1);}", ".fkfq4zb{color:var(--colorNeutralForeground2);}", ".f1vccso1::before{border-top-color:var(--colorNeutralStroke2);}", ".f1geml7w::before{border-right-color:var(--colorNeutralStroke2);}", ".fjml6kk::before{border-left-color:var(--colorNeutralStroke2);}", ".f1r7kh1m::before{border-bottom-color:var(--colorNeutralStroke2);}", ".f16j7guv::after{border-top-color:var(--colorNeutralStroke2);}", ".fx01ahm::after{border-right-color:var(--colorNeutralStroke2);}", ".fj1a37q::after{border-left-color:var(--colorNeutralStroke2);}", ".fl8d8yv::after{border-bottom-color:var(--colorNeutralStroke2);}", ".f11d4kpn{color:var(--colorNeutralForeground3);}", ".f5g06un::before{border-top-color:var(--colorNeutralStroke3);}", ".f13sxdku::before{border-right-color:var(--colorNeutralStroke3);}", ".f1n015lb::before{border-left-color:var(--colorNeutralStroke3);}", ".f1x6bl8t::before{border-bottom-color:var(--colorNeutralStroke3);}", ".fvod1wy::after{border-top-color:var(--colorNeutralStroke3);}", ".fwslg65::after{border-right-color:var(--colorNeutralStroke3);}", ".flk0e17::after{border-left-color:var(--colorNeutralStroke3);}", ".f103fvts::after{border-bottom-color:var(--colorNeutralStroke3);}", ".f19n0e5{color:var(--colorNeutralForeground1);}", ".f10tv6oz::before{border-top-color:var(--colorNeutralStroke1);}", ".f16xp3sf::before{border-right-color:var(--colorNeutralStroke1);}", ".f1seuxxq::before{border-left-color:var(--colorNeutralStroke1);}", ".fwrmqbx::before{border-bottom-color:var(--colorNeutralStroke1);}", ".ft83z1f::after{border-top-color:var(--colorNeutralStroke1);}", ".f1g4150c::after{border-right-color:var(--colorNeutralStroke1);}", ".f192dr6e::after{border-left-color:var(--colorNeutralStroke1);}", ".f1qnawh6::after{border-bottom-color:var(--colorNeutralStroke1);}"]
  });
  var useHorizontalStyles = /* @__PURE__ */ __styles2({
    base: {
      a9b677: "fly5x3f",
      Bdkvgpv: "f163fonl",
      B0qfbqy: "f51yk4v",
      pbipgd: "f13rof3u",
      Bm2nyyq: "f8rth92",
      xrcqlc: "f6czdpx",
      i5u598: "f1iyka9k"
    },
    inset: {
      uwmqm3: ["fjlbh76", "f11qrl6u"],
      z189sj: ["f11qrl6u", "fjlbh76"]
    },
    start: {
      fsow6f: ["f1o700av", "fes3tcz"],
      Ftih45: "f1wl9k8s",
      Bicfajf: ["f1ojjlep", "fk1kexq"],
      Bxwl2t9: "f1he2m4d",
      jwcpgy: ["f12w1bnb", "f1558wlj"]
    },
    center: {
      fsow6f: "f17mccla",
      Bicfajf: ["f1ojjlep", "fk1kexq"],
      jwcpgy: ["f12w1bnb", "f1558wlj"]
    },
    end: {
      fsow6f: ["fes3tcz", "f1o700av"],
      Bicfajf: ["f1ojjlep", "fk1kexq"],
      Bsft5z2: "f13zj6fq",
      jwcpgy: ["f12w1bnb", "f1558wlj"],
      Iy66sp: "f1ayce8x"
    }
  }, {
    d: [".fly5x3f{width:100%;}", ".f163fonl::before{border-top-style:solid;}", ".f51yk4v::before{border-top-width:var(--strokeWidthThin);}", ".f13rof3u::before{min-width:8px;}", ".f8rth92::after{border-top-style:solid;}", ".f6czdpx::after{border-top-width:var(--strokeWidthThin);}", ".f1iyka9k::after{min-width:8px;}", ".fjlbh76{padding-left:12px;}", ".f11qrl6u{padding-right:12px;}", ".f1o700av{text-align:left;}", ".fes3tcz{text-align:right;}", '.f1wl9k8s::before{content:"";}', ".f1ojjlep::before{margin-right:12px;}", ".fk1kexq::before{margin-left:12px;}", ".f1he2m4d::before{max-width:8px;}", ".f12w1bnb::after{margin-left:12px;}", ".f1558wlj::after{margin-right:12px;}", ".f17mccla{text-align:center;}", '.f13zj6fq::after{content:"";}', ".f1ayce8x::after{max-width:8px;}"]
  });
  var useVerticalStyles = /* @__PURE__ */ __styles2({
    base: {
      Beiy3e4: "f1vx9l62",
      sshi5w: "f16gbxbe",
      m598lv: ["f1yq6w5o", "f1jpmc5p"],
      B4f6apu: ["f9sc749", "f1x8pvcy"],
      zkzzav: "fhkwbjy",
      Barhvk9: ["flthirb", "ftkbnf5"],
      Ihftqj: ["f13hvwk3", "f1en4csx"],
      Bde111x: "f19onpk6"
    },
    inset: {
      B6of3ja: "f1xdg43u",
      jrapky: "f1jlhsmd"
    },
    withChildren: {
      sshi5w: "f1tjaq3g"
    },
    start: {
      Ftih45: "f1wl9k8s",
      susq4k: "fg2pwug",
      Bbdr6tz: "fkjtzyi",
      B4rk6o: "f8vk40g"
    },
    center: {
      susq4k: "fg2pwug",
      B4rk6o: "f8vk40g"
    },
    end: {
      susq4k: "fg2pwug",
      Bsft5z2: "f13zj6fq",
      B4rk6o: "f8vk40g",
      gn64ia: "fqg5mu5"
    }
  }, {
    d: [".f1vx9l62{flex-direction:column;}", ".f16gbxbe{min-height:20px;}", ".f1yq6w5o::before{border-right-style:solid;}", ".f1jpmc5p::before{border-left-style:solid;}", ".f9sc749::before{border-right-width:var(--strokeWidthThin);}", ".f1x8pvcy::before{border-left-width:var(--strokeWidthThin);}", ".fhkwbjy::before{min-height:8px;}", ".flthirb::after{border-right-style:solid;}", ".ftkbnf5::after{border-left-style:solid;}", ".f13hvwk3::after{border-right-width:var(--strokeWidthThin);}", ".f1en4csx::after{border-left-width:var(--strokeWidthThin);}", ".f19onpk6::after{min-height:8px;}", ".f1xdg43u{margin-top:12px;}", ".f1jlhsmd{margin-bottom:12px;}", ".f1tjaq3g{min-height:84px;}", '.f1wl9k8s::before{content:"";}', ".fg2pwug::before{margin-bottom:12px;}", ".fkjtzyi::before{max-height:8px;}", ".f8vk40g::after{margin-top:12px;}", '.f13zj6fq::after{content:"";}', ".fqg5mu5::after{max-height:8px;}"]
  });
  var useDividerStyles_unstable = (state) => {
    "use no memo";
    const baseStyles = useBaseStyles();
    const horizontalStyles = useHorizontalStyles();
    const verticalStyles = useVerticalStyles();
    const {
      alignContent,
      appearance,
      inset,
      vertical
    } = state;
    state.root.className = mergeClasses(
      dividerClassNames.root,
      // Base styles
      baseStyles.base,
      baseStyles[alignContent],
      appearance && baseStyles[appearance],
      // Horizontal styles
      !vertical && horizontalStyles.base,
      !vertical && inset && horizontalStyles.inset,
      !vertical && horizontalStyles[alignContent],
      // Vertical styles
      vertical && verticalStyles.base,
      vertical && inset && verticalStyles.inset,
      vertical && verticalStyles[alignContent],
      vertical && state.root.children !== void 0 && verticalStyles.withChildren,
      // Childless styles
      state.root.children === void 0 && baseStyles.childless,
      // User provided class name
      state.root.className
    );
    if (state.wrapper) {
      state.wrapper.className = mergeClasses(dividerClassNames.wrapper, state.wrapper.className);
    }
    return state;
  };

  // node_modules/@fluentui/react-toolbar/lib/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toolbar/lib/Toolbar.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toolbar/lib/components/Toolbar/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toolbar/lib/components/Toolbar/ToolbarContext.js
  init_define_import_meta_env();
  var ToolbarContext = createContext9(void 0);
  var toolbarContextDefaultValue = {
    size: "medium",
    handleToggleButton: () => null,
    handleRadio: () => null,
    vertical: false,
    checkedValues: {}
  };
  var useToolbarContext_unstable = (selector) => useContextSelector(ToolbarContext, (ctx = toolbarContextDefaultValue) => selector(ctx));

  // node_modules/@fluentui/react-toolbar/lib/components/Toolbar/Toolbar.js
  init_define_import_meta_env();
  var React21 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-toolbar/lib/components/Toolbar/useToolbar.js
  init_define_import_meta_env();
  var useToolbar_unstable = (props, ref) => {
    const { size = "medium" } = props;
    const state = useToolbarBase_unstable(props, ref);
    const arrowNavigationProps = useToolbarArrowNavigationProps_unstable();
    return {
      size,
      ...state,
      root: {
        ...state.root,
        ...arrowNavigationProps
      }
    };
  };
  var useToolbarBase_unstable = (props, ref) => {
    const { vertical = false } = props;
    const initialState = {
      vertical,
      // TODO add appropriate props/defaults
      components: {
        // TODO add each slot's element type or component
        root: "div"
      },
      // TODO add appropriate slots, for example:
      // mySlot: resolveShorthand(props.mySlot),
      root: slot_exports.always(getIntrinsicElementProps("div", {
        role: "toolbar",
        ref,
        ...vertical && {
          "aria-orientation": "vertical"
        },
        ...props
      }), {
        elementType: "div"
      })
    };
    const [checkedValues, onCheckedValueChange] = useToolbarSelectableState({
      checkedValues: props.checkedValues,
      defaultCheckedValues: props.defaultCheckedValues,
      onCheckedValueChange: props.onCheckedValueChange
    });
    const handleToggleButton = useEventCallback((e, name, value, checked) => {
      if (name && value) {
        const checkedItems = (checkedValues === null || checkedValues === void 0 ? void 0 : checkedValues[name]) || [];
        const newCheckedItems = [
          ...checkedItems
        ];
        if (checked) {
          newCheckedItems.splice(newCheckedItems.indexOf(value), 1);
        } else {
          newCheckedItems.push(value);
        }
        onCheckedValueChange === null || onCheckedValueChange === void 0 ? void 0 : onCheckedValueChange(e, {
          name,
          checkedItems: newCheckedItems
        });
      }
    });
    const handleRadio = useEventCallback((e, name, value, checked) => {
      if (name && value) {
        onCheckedValueChange === null || onCheckedValueChange === void 0 ? void 0 : onCheckedValueChange(e, {
          name,
          checkedItems: [
            value
          ]
        });
      }
    });
    return {
      ...initialState,
      handleToggleButton,
      handleRadio,
      checkedValues: checkedValues !== null && checkedValues !== void 0 ? checkedValues : {}
    };
  };
  var useToolbarSelectableState = (state) => {
    const [checkedValues, setCheckedValues] = useControllableState({
      state: state.checkedValues,
      defaultState: state.defaultCheckedValues,
      initialState: {}
    });
    const { onCheckedValueChange: onCheckedValueChangeOriginal } = state;
    const onCheckedValueChange = useEventCallback((e, { name, checkedItems }) => {
      if (onCheckedValueChangeOriginal) {
        onCheckedValueChangeOriginal(e, {
          name,
          checkedItems
        });
      }
      setCheckedValues((s) => {
        return s ? {
          ...s,
          [name]: checkedItems
        } : {
          [name]: checkedItems
        };
      });
    });
    return [
      checkedValues,
      onCheckedValueChange
    ];
  };
  var useToolbarArrowNavigationProps_unstable = () => {
    return useArrowNavigationGroup({
      circular: true,
      axis: "both"
    });
  };

  // node_modules/@fluentui/react-toolbar/lib/components/Toolbar/renderToolbar.js
  init_define_import_meta_env();
  var renderToolbar_unstable = (state, contextValues) => {
    assertSlots(state);
    return /* @__PURE__ */ jsx(ToolbarContext.Provider, {
      value: contextValues.toolbar,
      children: /* @__PURE__ */ jsx(state.root, {
        children: state.root.children
      })
    });
  };

  // node_modules/@fluentui/react-toolbar/lib/components/Toolbar/useToolbarStyles.styles.js
  init_define_import_meta_env();
  var toolbarClassNames = {
    root: "fui-Toolbar"
  };
  var useStyles2 = /* @__PURE__ */ __styles2({
    root: {
      mc9l5x: "f22iagw",
      Bt984gj: "f122n59",
      Byoj8tv: 0,
      uwmqm3: 0,
      z189sj: 0,
      z8tnut: 0,
      B0ocmuz: "f1yqiaad"
    },
    vertical: {
      Beiy3e4: "f1vx9l62",
      a9b677: "f1acs6jw"
    },
    small: {
      Byoj8tv: 0,
      uwmqm3: 0,
      z189sj: 0,
      z8tnut: 0,
      B0ocmuz: "fvz760z"
    },
    medium: {
      Byoj8tv: 0,
      uwmqm3: 0,
      z189sj: 0,
      z8tnut: 0,
      B0ocmuz: "f1yqiaad"
    },
    large: {
      Byoj8tv: 0,
      uwmqm3: 0,
      z189sj: 0,
      z8tnut: 0,
      B0ocmuz: "f1ms6bdn"
    }
  }, {
    d: [".f22iagw{display:flex;}", ".f122n59{align-items:center;}", [".f1yqiaad{padding:4px 8px;}", {
      p: -1
    }], ".f1vx9l62{flex-direction:column;}", ".f1acs6jw{width:fit-content;}", [".fvz760z{padding:0px 4px;}", {
      p: -1
    }], [".f1yqiaad{padding:4px 8px;}", {
      p: -1
    }], [".f1ms6bdn{padding:4px 20px;}", {
      p: -1
    }]]
  });
  var useToolbarStyles_unstable = (state) => {
    "use no memo";
    const styles = useStyles2();
    const {
      vertical,
      size
    } = state;
    state.root.className = mergeClasses(toolbarClassNames.root, styles.root, vertical && styles.vertical, size === "small" && !vertical && styles.small, size === "medium" && !vertical && styles.medium, size === "large" && !vertical && styles.large, state.root.className);
    return state;
  };

  // node_modules/@fluentui/react-toolbar/lib/components/Toolbar/useToolbarContextValues.js
  init_define_import_meta_env();
  var React20 = __toESM(require_react_shim());
  function useToolbarContextValues_unstable(state) {
    const { size, handleToggleButton, vertical, checkedValues, handleRadio } = state;
    const toolbar = React20.useMemo(() => ({
      size,
      vertical,
      handleToggleButton,
      handleRadio,
      checkedValues
    }), [
      size,
      vertical,
      handleToggleButton,
      handleRadio,
      checkedValues
    ]);
    return {
      toolbar
    };
  }

  // node_modules/@fluentui/react-toolbar/lib/components/Toolbar/Toolbar.js
  var Toolbar = /* @__PURE__ */ React21.forwardRef((props, ref) => {
    const state = useToolbar_unstable(props, ref);
    const contextValues = useToolbarContextValues_unstable(state);
    useToolbarStyles_unstable(state);
    useCustomStyleHook("useToolbarStyles_unstable")(state);
    return renderToolbar_unstable(state, contextValues);
  });
  Toolbar.displayName = "Toolbar";

  // node_modules/@fluentui/react-toolbar/lib/ToolbarButton.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toolbar/lib/components/ToolbarButton/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toolbar/lib/components/ToolbarButton/ToolbarButton.js
  init_define_import_meta_env();
  var React22 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-toolbar/lib/components/ToolbarButton/useToolbarButtonStyles.styles.js
  init_define_import_meta_env();
  var useBaseStyles2 = /* @__PURE__ */ __styles2({
    vertical: {
      Beiy3e4: "f1vx9l62"
    },
    verticalIcon: {
      Be2twd7: "f1rt2boy",
      jrapky: 0,
      Frg6f3: 0,
      t21cq0: 0,
      B6of3ja: 0,
      B74szlk: "f1s184ao"
    }
  }, {
    d: [".f1vx9l62{flex-direction:column;}", ".f1rt2boy{font-size:24px;}", [".f1s184ao{margin:0;}", {
      p: -1
    }]]
  });
  var useToolbarButtonStyles_unstable = (state) => {
    "use no memo";
    const buttonStyles = useBaseStyles2();
    state.root.className = mergeClasses(state.vertical && buttonStyles.vertical, state.root.className);
    if (state.icon) {
      state.icon.className = mergeClasses(state.vertical && buttonStyles.verticalIcon, state.icon.className);
    }
    useButtonStyles_unstable(state);
  };

  // node_modules/@fluentui/react-toolbar/lib/components/ToolbarButton/useToolbarButton.js
  init_define_import_meta_env();
  var useToolbarButton_unstable = (props, ref) => {
    const { appearance = "subtle", ...baseProps } = props;
    const state = useToolbarButtonBase_unstable(baseProps, ref);
    return {
      appearance,
      size: "medium",
      shape: "rounded",
      ...state
    };
  };
  var useToolbarButtonBase_unstable = (props, ref) => {
    const { vertical = false, ...buttonProps } = props;
    const state = useButtonBase_unstable(buttonProps, ref);
    return {
      vertical,
      ...state
    };
  };

  // node_modules/@fluentui/react-toolbar/lib/components/ToolbarButton/ToolbarButton.js
  var ToolbarButton = /* @__PURE__ */ React22.forwardRef((props, ref) => {
    const state = useToolbarButton_unstable(props, ref);
    useToolbarButtonStyles_unstable(state);
    useCustomStyleHook("useToolbarButtonStyles_unstable")(state);
    return renderButton_unstable(state);
  });
  ToolbarButton.displayName = "ToolbarButton";

  // node_modules/@fluentui/react-toolbar/lib/ToolbarDivider.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toolbar/lib/components/ToolbarDivider/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toolbar/lib/components/ToolbarDivider/ToolbarDivider.js
  init_define_import_meta_env();
  var React23 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-toolbar/lib/components/ToolbarDivider/useToolbarDividerStyles.styles.js
  init_define_import_meta_env();
  var useBaseStyles3 = /* @__PURE__ */ __styles2({
    root: {
      mc9l5x: "ftuwxu6",
      B2u0y6b: "f1lwjmbk",
      Byoj8tv: 0,
      uwmqm3: 0,
      z189sj: 0,
      z8tnut: 0,
      B0ocmuz: "f1oic3e7"
    },
    vertical: {
      B2u0y6b: "fe668z"
    }
  }, {
    d: [".ftuwxu6{display:inline-flex;}", ".f1lwjmbk{max-width:1px;}", [".f1oic3e7{padding:0 12px;}", {
      p: -1
    }], ".fe668z{max-width:initial;}"]
  });
  var useToolbarDividerStyles_unstable = (state) => {
    "use no memo";
    useDividerStyles_unstable(state);
    const {
      vertical
    } = state;
    const toolbarDividerStyles = useBaseStyles3();
    state.root.className = mergeClasses(toolbarDividerStyles.root, !vertical && toolbarDividerStyles.vertical, state.root.className);
    return state;
  };

  // node_modules/@fluentui/react-toolbar/lib/components/ToolbarDivider/useToolbarDivider.js
  init_define_import_meta_env();
  var useToolbarDivider_unstable = (props, ref) => {
    const state = useToolbarDividerBase_unstable(props, ref);
    return {
      alignContent: "center",
      appearance: "default",
      inset: false,
      ...state
    };
  };
  var useToolbarDividerBase_unstable = (props, ref) => {
    const vertical = useToolbarContext_unstable((ctx) => ctx.vertical);
    return useDividerBase_unstable({
      vertical: !vertical,
      ...props
    }, ref);
  };

  // node_modules/@fluentui/react-toolbar/lib/components/ToolbarDivider/ToolbarDivider.js
  var ToolbarDivider = /* @__PURE__ */ React23.forwardRef((props, ref) => {
    const state = useToolbarDivider_unstable(props, ref);
    useToolbarDividerStyles_unstable(state);
    useCustomStyleHook("useToolbarDividerStyles_unstable")(state);
    return renderDivider_unstable(state);
  });
  ToolbarDivider.displayName = "ToolbarDivider";

  // node_modules/@fluentui/react-toolbar/lib/ToolbarToggleButton.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toolbar/lib/components/ToolbarToggleButton/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toolbar/lib/components/ToolbarToggleButton/ToolbarToggleButton.js
  init_define_import_meta_env();
  var React24 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-toolbar/lib/components/ToolbarToggleButton/useToolbarToggleButton.js
  init_define_import_meta_env();
  var useToolbarToggleButton_unstable = (props, ref) => {
    const contextSize = useToolbarContext_unstable((ctx) => ctx.size);
    const { appearance = "subtle", size = contextSize !== null && contextSize !== void 0 ? contextSize : "medium", ...baseProps } = props;
    const state = useToolbarToggleButtonBase_unstable(baseProps, ref);
    return {
      ...state,
      appearance,
      size,
      shape: "rounded"
    };
  };
  var useToolbarToggleButtonBase_unstable = (props, ref) => {
    const handleToggleButton = useToolbarContext_unstable((ctx) => ctx.handleToggleButton);
    const checked = useToolbarContext_unstable((ctx) => {
      var _ctx_checkedValues_props_name;
      return !!((_ctx_checkedValues_props_name = ctx.checkedValues[props.name]) === null || _ctx_checkedValues_props_name === void 0 ? void 0 : _ctx_checkedValues_props_name.includes(props.value));
    });
    const { onClick: onClickOriginal } = props;
    const toggleButtonState = useToggleButtonBase_unstable({
      checked,
      ...props
    }, ref);
    const state = {
      ...toggleButtonState,
      name: props.name,
      value: props.value
    };
    const handleOnClick = (e) => {
      if (state.disabled || state.disabledFocusable) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      handleToggleButton === null || handleToggleButton === void 0 ? void 0 : handleToggleButton(e, state.name, state.value, state.checked);
      onClickOriginal === null || onClickOriginal === void 0 ? void 0 : onClickOriginal(e);
    };
    state.root.onClick = handleOnClick;
    return state;
  };

  // node_modules/@fluentui/react-toolbar/lib/components/ToolbarToggleButton/useToolbarToggleButtonStyles.styles.js
  init_define_import_meta_env();
  var useBaseStyles4 = /* @__PURE__ */ __styles2({
    selected: {
      De3pzq: "fq5gl1p",
      sj55zd: "f1eryozh"
    },
    iconSelected: {
      sj55zd: "f1qj7y59"
    }
  }, {
    d: [".fq5gl1p{background-color:var(--colorSubtleBackgroundSelected);}", ".f1eryozh{color:var(--colorNeutralForeground2Selected);}", ".f1qj7y59{color:var(--colorNeutralForeground2BrandSelected);}"]
  });
  var useToolbarToggleButtonStyles_unstable = (state) => {
    "use no memo";
    const toggleButtonStyles = useBaseStyles4();
    state.root.className = mergeClasses(state.checked && toggleButtonStyles.selected, state.root.className);
    if (state.icon) {
      state.icon.className = mergeClasses(state.checked && toggleButtonStyles.iconSelected, state.icon.className);
    }
    useToggleButtonStyles_unstable(state);
    return state;
  };

  // node_modules/@fluentui/react-toolbar/lib/components/ToolbarToggleButton/ToolbarToggleButton.js
  var ToolbarToggleButton = /* @__PURE__ */ React24.forwardRef((props, ref) => {
    const state = useToolbarToggleButton_unstable(props, ref);
    useToolbarToggleButtonStyles_unstable(state);
    useCustomStyleHook("useToolbarToggleButtonStyles_unstable")(state);
    return renderButton_unstable(state);
  });
  ToolbarToggleButton.displayName = "ToolbarToggleButton";

  // src/components/ui/Toolbar.tsx
  var import_jsx_runtime6 = __toESM(require_react_shim());
  var Toolbar2 = import_react16.default.forwardRef(
    ({
      items,
      "aria-label": ariaLabel,
      size = "medium",
      checkedValues: controlledChecked,
      onCheckedValueChange,
      className,
      style,
      vertical = false
    }, ref) => {
      const derivedChecked = import_react16.default.useMemo(() => {
        const cv = {};
        items.forEach((item) => {
          if (item.type === "toggle") {
            const t = item;
            if (t.checked) cv[t.id] = [t.id];
          }
        });
        return cv;
      }, [items]);
      const handleCheckedValueChange = (_e, data) => {
        const toggleItem = items.find(
          (i) => i.id === data.name && i.type === "toggle"
        );
        toggleItem?.onChange?.(data.checkedItems.includes(data.name));
        onCheckedValueChange?.(data.name, data.checkedItems);
      };
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        Toolbar,
        {
          ref,
          "aria-label": ariaLabel,
          size,
          checkedValues: controlledChecked ?? derivedChecked,
          onCheckedValueChange: handleCheckedValueChange,
          className,
          style,
          vertical,
          children: items.map((item) => {
            if (item.type === "divider") {
              return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ToolbarDivider, {}, item.id);
            }
            if (item.type === "toggle") {
              const t = item;
              return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                ToolbarToggleButton,
                {
                  name: t.id,
                  value: t.id,
                  icon: t.icon,
                  disabled: t.disabled,
                  "aria-label": t.label
                },
                t.id
              );
            }
            const b = item;
            return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              ToolbarButton,
              {
                icon: b.icon,
                disabled: b.disabled,
                onClick: b.onClick,
                appearance: b.appearance,
                "aria-label": b.label,
                children: b.label
              },
              b.id
            );
          })
        }
      );
    }
  );
  Toolbar2.displayName = "Toolbar";

  // .design-sync/previews/Toolbar.tsx
  var import_jsx_runtime7 = __toESM(require_react_shim());
  var Default = () => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    Toolbar2,
    {
      "aria-label": "Text editing toolbar",
      items: [
        { id: "cut", type: "button", icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Cut20Regular, {}), label: "Cut", onClick: () => {
        } },
        { id: "copy", type: "button", icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Copy20Regular, {}), label: "Copy", onClick: () => {
        } },
        { id: "paste", type: "button", icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ClipboardPaste20Regular, {}), label: "Paste", onClick: () => {
        } }
      ]
    }
  );
  var WithToggles = () => {
    const [bold, setBold] = (0, import_react17.useState)(false);
    const [italic, setItalic] = (0, import_react17.useState)(false);
    const [under, setUnder] = (0, import_react17.useState)(false);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      Toolbar2,
      {
        "aria-label": "Formatting",
        items: [
          { id: "bold", type: "toggle", icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TextBold20Regular, {}), label: "Bold", checked: bold, onChange: setBold },
          { id: "italic", type: "toggle", icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TextItalic20Regular, {}), label: "Italic", checked: italic, onChange: setItalic },
          { id: "underline", type: "toggle", icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TextUnderline20Regular, {}), label: "Underline", checked: under, onChange: setUnder }
        ]
      }
    );
  };
  var MixedWithDivider = () => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    Toolbar2,
    {
      "aria-label": "Rich text",
      items: [
        { id: "bold", type: "toggle", icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TextBold20Regular, {}), label: "Bold" },
        { id: "italic", type: "toggle", icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TextItalic20Regular, {}), label: "Italic" },
        { id: "div-1", type: "divider" },
        { id: "left", type: "toggle", icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(AlignLeft20Regular, {}), label: "Align left" },
        { id: "center", type: "toggle", icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TextAlignCenter20Regular, {}), label: "Align center" },
        { id: "right", type: "toggle", icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(AlignRight20Regular, {}), label: "Align right" },
        { id: "div-2", type: "divider" },
        { id: "copy", type: "button", icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Copy20Regular, {}), label: "Copy", onClick: () => {
        } },
        { id: "paste", type: "button", icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ClipboardPaste20Regular, {}), label: "Paste", onClick: () => {
        } }
      ]
    }
  );
  var Small = () => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    Toolbar2,
    {
      "aria-label": "Small toolbar",
      size: "small",
      items: [
        { id: "bold", type: "toggle", icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TextBold20Regular, {}), label: "Bold" },
        { id: "italic", type: "toggle", icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TextItalic20Regular, {}), label: "Italic" }
      ]
    }
  );
  var Vertical = () => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    Toolbar2,
    {
      "aria-label": "Vertical toolbar",
      vertical: true,
      items: [
        { id: "cut", type: "button", icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Cut20Regular, {}), label: "Cut" },
        { id: "copy", type: "button", icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Copy20Regular, {}), label: "Copy" },
        { id: "paste", type: "button", icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ClipboardPaste20Regular, {}), label: "Paste" }
      ]
    }
  );
  return __toCommonJS(Toolbar_exports);
})();
/*! Bundled license information:

tabster/dist/esm/Consts.js:
tabster/dist/esm/Instance.js:
tabster/dist/esm/Events.js:
tabster/dist/esm/DOMAPI.js:
tabster/dist/esm/Utils.js:
tabster/dist/esm/DummyInput.js:
tabster/dist/esm/AttributeHelpers.js:
tabster/dist/esm/Root.js:
tabster/dist/esm/Focusable.js:
tabster/dist/esm/Keys.js:
tabster/dist/esm/State/Subscribable.js:
tabster/dist/esm/State/FocusedElement.js:
tabster/dist/esm/State/KeyboardNavigation.js:
tabster/dist/esm/MutationEvent.js:
tabster/dist/esm/Uncontrolled.js:
tabster/dist/esm/Mover.js:
tabster/dist/esm/get/getMover.js:
tabster/dist/esm/Tabster.js:
tabster/dist/esm/index.js:
  (*!
   * Copyright (c) Microsoft Corporation. All rights reserved.
   * Licensed under the MIT License.
   *)

keyborg/dist/index.js:
keyborg/dist/index.js:
  (*!
  * Copyright (c) Microsoft Corporation. All rights reserved.
  * Licensed under the MIT License.
  *)
*/
