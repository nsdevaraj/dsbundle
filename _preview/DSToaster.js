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
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
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

  // shim:react-dom-shim
  var require_react_dom_shim = __commonJS({
    "shim:react-dom-shim"(exports, module) {
      init_define_import_meta_env();
      var D = window.ReactDOM;
      var n = function() {
      };
      module.exports = Object.assign({ preload: n, preinit: n, preconnect: n, prefetchDNS: n, preloadModule: n, preinitModule: n }, D);
    }
  });

  // ds-raw:__ds_raw__
  var require_ds_raw = __commonJS({
    "ds-raw:__ds_raw__"(exports, module) {
      init_define_import_meta_env();
      module.exports = window.LumelFluent2Ds;
    }
  });

  // .design-sync/.cache/previews/DSToaster.tsx
  var DSToaster_exports = {};
  __export(DSToaster_exports, {
    Error: () => Error3,
    Info: () => Info3,
    Success: () => Success2,
    Warning: () => Warning2
  });
  init_define_import_meta_env();
  var React65 = __toESM(require_react_shim());

  // src/stories/Toast.stories.tsx
  var Toast_stories_exports = {};
  __export(Toast_stories_exports, {
    Error: () => Error2,
    Info: () => Info2,
    Success: () => Success,
    Warning: () => Warning,
    default: () => Toast_stories_default
  });
  init_define_import_meta_env();

  // node_modules/@fluentui/react-components/lib/index.js
  init_define_import_meta_env();

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
  var TextDirectionProvider = ({ children, dir }) => {
    return (0, import_jsx_runtime2.jsx)(TextDirectionContext.Provider, { value: dir, children });
  };
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

  // node_modules/@fluentui/react-provider/lib/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-provider/lib/FluentProvider.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-provider/lib/components/FluentProvider/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-provider/lib/components/FluentProvider/createCSSRuleFromTheme.js
  init_define_import_meta_env();
  var CSS_ESCAPE_MAP = {
    "<": "\\3C ",
    ">": "\\3E "
  };
  function escapeForStyleTag(value) {
    return value.replace(/[<>]/g, (match) => CSS_ESCAPE_MAP[match]);
  }
  function createCSSRuleFromTheme(selector, theme) {
    if (theme) {
      const cssVarsAsString = Object.keys(theme).reduce((cssVarRule, cssVar) => {
        return `${cssVarRule}--${cssVar}: ${theme[cssVar]}; `;
      }, "");
      return `${selector} { ${escapeForStyleTag(cssVarsAsString)} }`;
    }
    return `${selector} {}`;
  }

  // node_modules/@fluentui/react-provider/lib/components/FluentProvider/FluentProvider.js
  init_define_import_meta_env();
  var React31 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-provider/lib/components/FluentProvider/renderFluentProvider.js
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
  var React2 = __toESM(require_react_shim());

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
    React2.isValidElement(value)) {
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

  // node_modules/@fluentui/react-utilities/lib/hooks/useBrowserTimer.js
  init_define_import_meta_env();
  var React3 = __toESM(require_react_shim());
  function useBrowserTimer(setTimer, cancelTimer) {
    const id = React3.useRef(void 0);
    const set = React3.useCallback((fn, delay) => {
      if (id.current !== void 0) {
        cancelTimer(id.current);
      }
      id.current = setTimer(fn, delay);
      return id.current;
    }, [
      cancelTimer,
      setTimer
    ]);
    const cancel = React3.useCallback(() => {
      if (id.current !== void 0) {
        cancelTimer(id.current);
        id.current = void 0;
      }
    }, [
      cancelTimer
    ]);
    React3.useEffect(() => cancel, [
      cancel
    ]);
    return [
      set,
      cancel
    ];
  }

  // node_modules/@fluentui/react-shared-contexts/lib/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/ThemeContext.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/ThemeContext/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/ThemeContext/ThemeContext.js
  init_define_import_meta_env();
  var React4 = __toESM(require_react_shim());
  var ThemeContext = React4.createContext(void 0);
  var ThemeProvider = ThemeContext.Provider;

  // node_modules/@fluentui/react-shared-contexts/lib/ThemeClassNameContext.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/ThemeClassNameContext/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/ThemeClassNameContext/ThemeClassNameContext.js
  init_define_import_meta_env();
  var React5 = __toESM(require_react_shim());
  var ThemeClassNameContext = React5.createContext(void 0);
  var themeClassNameContextDefaultVaue = "";
  var ThemeClassNameProvider = ThemeClassNameContext.Provider;
  function useThemeClassName() {
    var _React_useContext;
    return (_React_useContext = React5.useContext(ThemeClassNameContext)) !== null && _React_useContext !== void 0 ? _React_useContext : themeClassNameContextDefaultVaue;
  }

  // node_modules/@fluentui/react-shared-contexts/lib/TooltipVisibilityContext.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/TooltipVisibilityContext/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/TooltipVisibilityContext/TooltipContext.js
  init_define_import_meta_env();
  var React6 = __toESM(require_react_shim());
  var TooltipVisibilityContext = React6.createContext(void 0);
  var TooltipVisibilityProvider = TooltipVisibilityContext.Provider;

  // node_modules/@fluentui/react-shared-contexts/lib/ProviderContext.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/ProviderContext/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/ProviderContext/ProviderContext.js
  init_define_import_meta_env();
  var React7 = __toESM(require_react_shim());
  var ProviderContext = React7.createContext(void 0);
  var providerContextDefaultValue = {
    // eslint-disable-next-line @nx/workspace-no-restricted-globals -- expected ignore ( SSR friendly acquisition of globals )
    targetDocument: typeof document === "object" ? document : void 0,
    dir: "ltr"
  };
  var Provider = ProviderContext.Provider;
  function useFluent() {
    var _React_useContext;
    return (_React_useContext = React7.useContext(ProviderContext)) !== null && _React_useContext !== void 0 ? _React_useContext : providerContextDefaultValue;
  }

  // node_modules/@fluentui/react-shared-contexts/lib/OverridesContext/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/OverridesContext/OverridesContext.js
  init_define_import_meta_env();
  var React8 = __toESM(require_react_shim());
  var OverridesContext = React8.createContext(void 0);
  var OverridesProvider = OverridesContext.Provider;
  function useOverrides() {
    var _React_useContext;
    return (_React_useContext = React8.useContext(OverridesContext)) !== null && _React_useContext !== void 0 ? _React_useContext : {};
  }

  // node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/CustomStyleHooksContext.js
  init_define_import_meta_env();
  var React9 = __toESM(require_react_shim());
  var CustomStyleHooksContext = React9.createContext(void 0);
  var noop = () => {
  };
  var CustomStyleHooksProvider = CustomStyleHooksContext.Provider;
  var useCustomStyleHook = (hook) => {
    var _React_useContext;
    var _React_useContext_hook;
    return (_React_useContext_hook = (_React_useContext = React9.useContext(CustomStyleHooksContext)) === null || _React_useContext === void 0 ? void 0 : _React_useContext[hook]) !== null && _React_useContext_hook !== void 0 ? _React_useContext_hook : noop;
  };

  // node_modules/@fluentui/react-shared-contexts/lib/BackgroundAppearanceContext/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/BackgroundAppearanceContext/BackgroundAppearanceContext.js
  init_define_import_meta_env();
  var React10 = __toESM(require_react_shim());
  var BackgroundAppearanceContext = React10.createContext(void 0);
  var BackgroundAppearanceProvider = BackgroundAppearanceContext.Provider;
  function useBackgroundAppearance() {
    return React10.useContext(BackgroundAppearanceContext);
  }

  // node_modules/@fluentui/react-shared-contexts/lib/PortalMountNodeContext.js
  init_define_import_meta_env();
  var React11 = __toESM(require_react_shim());
  var PortalMountNodeContext = React11.createContext(void 0);
  var PortalMountNodeProvider = PortalMountNodeContext.Provider;
  function usePortalMountNode() {
    return React11.useContext(PortalMountNodeContext);
  }

  // node_modules/@fluentui/react-utilities/lib/hooks/useEventCallback.js
  init_define_import_meta_env();
  var React14 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-utilities/lib/hooks/useIsomorphicLayoutEffect.js
  init_define_import_meta_env();
  var React13 = __toESM(require_react_shim());

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
  var React12 = __toESM(require_react_shim());
  var defaultSSRContextValue = {
    current: 0
  };
  var SSRContext = /* @__PURE__ */ React12.createContext(void 0);
  function useSSRContext() {
    var _React_useContext;
    return (_React_useContext = React12.useContext(SSRContext)) !== null && _React_useContext !== void 0 ? _React_useContext : defaultSSRContextValue;
  }

  // node_modules/@fluentui/react-utilities/lib/hooks/useIsomorphicLayoutEffect.js
  var useIsomorphicLayoutEffect = canUseDOM2() ? React13.useLayoutEffect : React13.useEffect;

  // node_modules/@fluentui/react-utilities/lib/hooks/useEventCallback.js
  var useEventCallback = (fn) => {
    const callbackRef = React14.useRef(() => {
      throw new Error("Cannot call an event handler while rendering");
    });
    useIsomorphicLayoutEffect(() => {
      callbackRef.current = fn;
    }, [
      fn
    ]);
    return React14.useCallback((...args) => {
      const callback = callbackRef.current;
      return callback(...args);
    }, [
      callbackRef
    ]);
  };

  // node_modules/@fluentui/react-utilities/lib/hooks/useFirstMount.js
  init_define_import_meta_env();
  var React15 = __toESM(require_react_shim());
  function useFirstMount() {
    const isFirst = React15.useRef(true);
    React15.useEffect(() => {
      if (isFirst.current) {
        isFirst.current = false;
      }
    }, []);
    return isFirst.current;
  }

  // node_modules/@fluentui/react-utilities/lib/hooks/useForceUpdate.js
  init_define_import_meta_env();
  var React16 = __toESM(require_react_shim());
  function useForceUpdate() {
    return React16.useReducer((x) => x + 1, 0)[1];
  }

  // node_modules/@fluentui/react-utilities/lib/hooks/useId.js
  init_define_import_meta_env();
  var React17 = __toESM(require_react_shim());
  var IdPrefixContext = React17.createContext(void 0);
  var IdPrefixProvider = IdPrefixContext.Provider;
  function useIdPrefix() {
    return React17.useContext(IdPrefixContext) || "";
  }
  function useId2(prefix = "fui-", providedId) {
    "use no memo";
    const contextValue = useSSRContext();
    const idPrefix = useIdPrefix();
    const _useId = React17["useId"];
    if (_useId) {
      const generatedId = _useId();
      const escapedId = React17.useMemo(() => generatedId.replace(/:/g, ""), [
        generatedId
      ]);
      return providedId || `${idPrefix}${prefix}${escapedId}`;
    }
    return React17.useMemo(() => {
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

  // node_modules/@fluentui/react-utilities/lib/hooks/useMergedRefs.js
  init_define_import_meta_env();
  var React18 = __toESM(require_react_shim());
  function useMergedRefs(...refs) {
    "use no memo";
    const mergedCallback = React18.useCallback(
      // eslint-disable-next-line react-hooks/immutability
      (value) => {
        mergedCallback.current = value;
        for (const ref of refs) {
          if (typeof ref === "string" && true) {
            console.error(`@fluentui/react-utilities [useMergedRefs]:
This hook does not support the usage of string refs. Please use React.useRef instead.

For more info on 'React.useRef', see https://react.dev/reference/react/useRef.
For more info on string refs, see https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-string-refs.`);
          }
          if (typeof ref === "function") {
            ref(value);
          } else if (ref) {
            ref.current = value;
          }
        }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/use-memo -- already exhaustive
      [
        ...refs
      ]
    );
    return mergedCallback;
  }

  // node_modules/@fluentui/react-utilities/lib/hooks/usePrevious.js
  init_define_import_meta_env();
  var React19 = __toESM(require_react_shim());
  var usePrevious = (value) => {
    const ref = React19.useRef(null);
    React19.useEffect(() => {
      ref.current = value;
    }, [
      value
    ]);
    return ref.current;
  };

  // node_modules/@fluentui/react-utilities/lib/hooks/useTimeout.js
  init_define_import_meta_env();
  var setTimeoutNoop = (_callback) => -1;
  var clearTimeoutNoop = (_handle) => void 0;
  function useTimeout() {
    const { targetDocument } = useFluent();
    const win = targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.defaultView;
    const setTimerFn = win ? win.setTimeout : setTimeoutNoop;
    const clearTimerFn = win ? win.clearTimeout : clearTimeoutNoop;
    return useBrowserTimer(setTimerFn, clearTimerFn);
  }

  // node_modules/@fluentui/react-utilities/lib/utils/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-utilities/lib/utils/getReactElementRef.js
  init_define_import_meta_env();
  var React20 = __toESM(require_react_shim());
  var IS_REACT_19_OR_HIGHER = parseInt(React20.version, 10) >= 19;
  function getReactElementRef(element) {
    if (!element) {
      return void 0;
    }
    if (IS_REACT_19_OR_HIGHER) {
      return element.props.ref;
    }
    return element.ref;
  }

  // node_modules/@fluentui/react-utilities/lib/utils/isHTMLElement.js
  init_define_import_meta_env();
  function isHTMLElement(element, options) {
    var _typedElement_ownerDocument;
    const typedElement = element;
    var _options_constructorName;
    return Boolean((typedElement === null || typedElement === void 0 ? void 0 : (_typedElement_ownerDocument = typedElement.ownerDocument) === null || _typedElement_ownerDocument === void 0 ? void 0 : _typedElement_ownerDocument.defaultView) && typedElement instanceof typedElement.ownerDocument.defaultView[(_options_constructorName = options === null || options === void 0 ? void 0 : options.constructorName) !== null && _options_constructorName !== void 0 ? _options_constructorName : "HTMLElement"]);
  }

  // node_modules/@fluentui/react-utilities/lib/utils/priorityQueue.js
  init_define_import_meta_env();
  function createPriorityQueue(compare) {
    const arr = [];
    let size = 0;
    const swap = (a, b) => {
      const tmp = arr[a];
      arr[a] = arr[b];
      arr[b] = tmp;
    };
    const heapify = (i) => {
      let smallest = i;
      const l = left(i);
      const r = right(i);
      if (l < size && compare(arr[l], arr[smallest]) < 0) {
        smallest = l;
      }
      if (r < size && compare(arr[r], arr[smallest]) < 0) {
        smallest = r;
      }
      if (smallest !== i) {
        swap(smallest, i);
        heapify(smallest);
      }
    };
    const dequeue = () => {
      if (size === 0) {
        throw new Error("Priority queue empty");
      }
      const res = arr[0];
      arr[0] = arr[--size];
      heapify(0);
      return res;
    };
    const peek = () => {
      if (size === 0) {
        return null;
      }
      return arr[0];
    };
    const enqueue = (item) => {
      arr[size++] = item;
      let i = size - 1;
      let p = parent(i);
      while (i > 0 && compare(arr[p], arr[i]) > 0) {
        swap(p, i);
        i = p;
        p = parent(i);
      }
    };
    const contains = (item) => {
      const index = arr.indexOf(item);
      return index >= 0 && index < size;
    };
    const remove = (item) => {
      const i = arr.indexOf(item);
      if (i === -1 || i >= size) {
        return;
      }
      arr[i] = arr[--size];
      heapify(i);
    };
    const clear = () => {
      size = 0;
    };
    const all = () => {
      return arr.slice(0, size);
    };
    return {
      all,
      clear,
      contains,
      dequeue,
      enqueue,
      peek,
      remove,
      size: () => size
    };
  }
  var left = (i) => {
    return 2 * i + 1;
  };
  var right = (i) => {
    return 2 * i + 2;
  };
  var parent = (i) => {
    return Math.floor((i - 1) / 2);
  };

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
    const parent2 = child.parentNode;
    if (parent2 && parent2.nodeType === 11) {
      return parent2.host;
    }
    return parent2;
  }

  // node_modules/@fluentui/react-utilities/lib/virtualParent/setVirtualParent.js
  init_define_import_meta_env();
  function setVirtualParent(child, parent2) {
    if (!child) {
      return;
    }
    Object.assign(child, {
      _virtual: {
        parent: parent2
      }
    });
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
  var React21 = __toESM(require_react_shim());

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
      return Runtime.jsx(React21.Fragment, {
        children: renderFunction(elementType, props)
      }, key);
    }
    return Runtime.jsx(elementType, props, key);
  };

  // node_modules/@fluentui/react-jsx-runtime/lib/jsx/jsxsSlot.js
  init_define_import_meta_env();
  var React22 = __toESM(require_react_shim());
  var jsxsSlot = (type, overrideProps, key) => {
    const { elementType, renderFunction, props: slotProps } = getMetadataFromSlotComponent(type);
    const props = {
      ...slotProps,
      ...overrideProps
    };
    if (renderFunction) {
      return Runtime.jsx(React22.Fragment, {
        children: renderFunction(elementType, {
          ...props,
          children: Runtime.jsxs(React22.Fragment, {
            children: props.children
          }, void 0)
        })
      }, key);
    }
    return Runtime.jsxs(elementType, props, key);
  };

  // node_modules/@fluentui/react-jsx-runtime/lib/jsx-runtime.js
  var import_react4 = __toESM(require_react_shim());
  var jsx = createJSX(Runtime.jsx, jsxSlot);
  var jsxs = createJSX(Runtime.jsxs, jsxsSlot);

  // node_modules/@fluentui/react-icons/lib/providers.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-icons/lib/contexts/IconDirectionContext.js
  init_define_import_meta_env();
  var React23 = __toESM(require_react_shim());
  var IconDirectionContext = React23.createContext(void 0);
  var IconDirectionContextDefaultValue = {};
  var IconDirectionContextProvider = IconDirectionContext.Provider;
  var useIconContext = () => {
    const context = React23.useContext(IconDirectionContext);
    return context !== null && context !== void 0 ? context : IconDirectionContextDefaultValue;
  };

  // node_modules/@fluentui/react-provider/lib/components/FluentProvider/renderFluentProvider.js
  var renderFluentProvider_unstable = (state, contextValues) => {
    assertSlots(state);
    return /* @__PURE__ */ jsx(Provider, {
      value: contextValues.provider,
      children: /* @__PURE__ */ jsx(ThemeProvider, {
        value: contextValues.theme,
        children: /* @__PURE__ */ jsx(ThemeClassNameProvider, {
          value: contextValues.themeClassName,
          children: /* @__PURE__ */ jsx(CustomStyleHooksProvider, {
            value: contextValues.customStyleHooks_unstable,
            children: /* @__PURE__ */ jsx(TooltipVisibilityProvider, {
              value: contextValues.tooltip,
              children: /* @__PURE__ */ jsx(TextDirectionProvider, {
                dir: contextValues.textDirection,
                children: /* @__PURE__ */ jsx(IconDirectionContextProvider, {
                  value: contextValues.iconDirection,
                  children: /* @__PURE__ */ jsx(OverridesProvider, {
                    value: contextValues.overrides_unstable,
                    children: /* @__PURE__ */ jsxs(state.root, {
                      children: [
                        canUseDOM2() ? null : /* @__PURE__ */ jsx("style", {
                          // Using dangerous HTML because react can escape characters
                          // which can lead to invalid CSS.
                          // eslint-disable-next-line react/no-danger
                          dangerouslySetInnerHTML: {
                            __html: state.serverStyleProps.cssRule
                          },
                          ...state.serverStyleProps.attributes
                        }),
                        state.root.children
                      ]
                    })
                  })
                })
              })
            })
          })
        })
      })
    });
  };

  // node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProvider.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-tabster/lib/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-tabster/lib/hooks/index.js
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
  var GroupperTabbabilities = {
    Unlimited: 0,
    Limited: 1,
    // The tabbability is limited to the container and explicit Enter is needed to go inside.
    LimitedTrapFocus: 2
    // The focus is limited as above, plus trapped when inside.
  };
  var GroupperMoveFocusActions = {
    Enter: 1,
    Escape: 2
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
  var GroupperMoveFocusEventName = "tabster:groupper:movefocus";
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
  var _nodeContains = (parent2, child) => !!(child && parent2?.contains(child));
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
  var _appendChild = (parent2, child) => parent2.appendChild(child);
  var _insertBefore = (parent2, child, referenceChild) => parent2.insertBefore(child, referenceChild);
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
  function clearElementCache(getWindow, parent2) {
    const context = getInstanceContext(getWindow);
    for (const key of Object.keys(context.elementByUId)) {
      const wel = context.elementByUId[key];
      const el = wel && wel.get();
      if (el && parent2) {
        if (!dom.nodeContains(parent2, el)) {
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
  function getAdjacentElement(from, prev) {
    let cur = from;
    let adjacent = null;
    while (cur && !adjacent) {
      adjacent = prev ? dom.getPreviousElementSibling(cur) : dom.getNextElementSibling(cur);
      cur = dom.getParentElement(cur);
    }
    return adjacent || void 0;
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
    setTopLeft(top, left2) {
      const style = this.input?.style;
      if (style) {
        style.top = `${top}px`;
        style.left = `${left2}px`;
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
        let parent2;
        let insertBefore;
        if (element.tagName === "BODY") {
          parent2 = element;
          insertBefore = moveOutOfElement && isBackward || !moveOutOfElement && !isBackward ? dom.getFirstElementChild(element) : null;
        } else {
          if (moveOutOfElement && (!isBackward || isBackward && !tabster.focusable.isFocusable(element, false, true, true))) {
            parent2 = element;
            insertBefore = isBackward ? element.firstElementChild : null;
          } else {
            parent2 = dom.getParentElement(element);
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
        if (parent2?.dispatchEvent(new TabsterMoveFocusEvent({
          by: "root",
          owner: parent2,
          next: null,
          relatedEvent
        }))) {
          dom.insertBefore(parent2, input, insertBefore);
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
    _domChanged = (parent2) => {
      if (this._changedParents.has(parent2)) {
        return;
      }
      this._changedParents.add(parent2);
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
    static forgetMemorized(instance, parent2) {
      let wel = _FocusedElementState._lastResetElement;
      let el = wel && wel.get();
      if (el && dom.nodeContains(parent2, el)) {
        delete _FocusedElementState._lastResetElement;
      }
      el = instance._nextVal?.element?.get();
      if (el && dom.nodeContains(parent2, el)) {
        delete instance._nextVal;
      }
      wel = instance._lastVal;
      el = wel && wel.get();
      if (el && dom.nodeContains(parent2, el)) {
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

  // node_modules/tabster/dist/esm/get/getGroupper.js
  init_define_import_meta_env();

  // node_modules/tabster/dist/esm/Groupper.js
  init_define_import_meta_env();
  var GroupperDummyManager = class extends DummyInputManager {
    constructor(element, groupper, tabster, sys) {
      super(tabster, element, DummyInputManagerPriorities.Groupper, sys, true);
      this._setHandlers((dummyInput, isBackward, relatedTarget) => {
        const container = element.get();
        const input = dummyInput.input;
        if (container && input) {
          const ctx = RootAPI.getTabsterContext(tabster, input);
          if (ctx) {
            let next;
            next = groupper.findNextTabbable(relatedTarget || void 0, void 0, isBackward, true)?.element;
            if (!next) {
              next = FocusedElementState.findNextTabbable(tabster, ctx, void 0, dummyInput.isOutside ? input : getAdjacentElement(container, !isBackward), void 0, isBackward, true)?.element;
            }
            if (next) {
              nativeFocus(next);
            }
          }
        }
      });
    }
  };
  var Groupper = class extends TabsterPart {
    _shouldTabInside = false;
    _first;
    _onDispose;
    dummyManager;
    constructor(tabster, element, onDispose, props, sys) {
      super(tabster, element, props);
      this.makeTabbable(false);
      this._onDispose = onDispose;
      if (!tabster.controlTab) {
        this.dummyManager = new GroupperDummyManager(this._element, this, tabster, sys);
      }
    }
    dispose() {
      this._onDispose(this);
      const element = this._element.get();
      this.dummyManager?.dispose();
      delete this.dummyManager;
      if (element) {
        if (true) {
          _setInformativeStyle2(this._element, true);
        }
      }
      delete this._first;
    }
    findNextTabbable(currentElement, referenceElement, isBackward, ignoreAccessibility) {
      const groupperElement = this.getElement();
      if (!groupperElement) {
        return null;
      }
      const currentIsDummy = getDummyInputContainer(currentElement) === groupperElement;
      if (!this._shouldTabInside && currentElement && dom.nodeContains(groupperElement, currentElement) && !currentIsDummy) {
        return { element: void 0, outOfDOMOrder: true };
      }
      const groupperFirstFocusable = this.getFirst(true);
      if (!currentElement || !dom.nodeContains(groupperElement, currentElement) || currentIsDummy) {
        return {
          element: groupperFirstFocusable,
          outOfDOMOrder: true
        };
      }
      const tabster = this._tabster;
      let next = null;
      let outOfDOMOrder = false;
      let uncontrolled;
      if (this._shouldTabInside && groupperFirstFocusable) {
        const findProps = {
          container: groupperElement,
          currentElement,
          referenceElement,
          ignoreAccessibility,
          useActiveModalizer: true
        };
        const findPropsOut = {};
        next = tabster.focusable[isBackward ? "findPrev" : "findNext"](findProps, findPropsOut);
        outOfDOMOrder = !!findPropsOut.outOfDOMOrder;
        if (!next && this._props.tabbability === GroupperTabbabilities.LimitedTrapFocus) {
          next = tabster.focusable[isBackward ? "findLast" : "findFirst"]({
            container: groupperElement,
            ignoreAccessibility,
            useActiveModalizer: true
          }, findPropsOut);
          outOfDOMOrder = true;
        }
        uncontrolled = findPropsOut.uncontrolled;
      }
      return {
        element: next,
        uncontrolled,
        outOfDOMOrder
      };
    }
    makeTabbable(isTabbable) {
      this._shouldTabInside = isTabbable || !this._props.tabbability;
      if (true) {
        _setInformativeStyle2(this._element, !this._shouldTabInside);
      }
    }
    isActive(noIfFirstIsFocused) {
      const element = this.getElement() || null;
      let isParentActive = true;
      for (let e = dom.getParentElement(element); e; e = dom.getParentElement(e)) {
        const g75 = getTabsterOnElement(this._tabster, e)?.groupper;
        if (g75) {
          if (!g75._shouldTabInside) {
            isParentActive = false;
          }
        }
      }
      let ret = isParentActive ? this._props.tabbability ? this._shouldTabInside : false : void 0;
      if (ret && noIfFirstIsFocused) {
        const focused = this._tabster.focusedElement.getFocusedElement();
        if (focused) {
          ret = focused !== this.getFirst(true);
        }
      }
      return ret;
    }
    getFirst(orContainer) {
      const groupperElement = this.getElement();
      let first;
      if (groupperElement) {
        if (orContainer && this._tabster.focusable.isFocusable(groupperElement)) {
          return groupperElement;
        }
        first = this._first?.get();
        if (!first) {
          first = this._tabster.focusable.findFirst({
            container: groupperElement,
            useActiveModalizer: true
          }) || void 0;
          if (first) {
            this.setFirst(first);
          }
        }
      }
      return first;
    }
    setFirst(element) {
      if (element) {
        this._first = new WeakHTMLElement(element);
      } else {
        delete this._first;
      }
    }
    acceptElement(element, state) {
      const cachedGrouppers = state.cachedGrouppers;
      const parentElement = dom.getParentElement(this.getElement());
      const parentCtx = parentElement && RootAPI.getTabsterContext(this._tabster, parentElement);
      const parentCtxGroupper = parentCtx?.groupper;
      const parentGroupper = parentCtx?.groupperBeforeMover ? parentCtxGroupper : void 0;
      let parentGroupperElement;
      const getIsActive = (groupper) => {
        let cached = cachedGrouppers[groupper.id];
        let isActive2;
        if (cached) {
          isActive2 = cached.isActive;
        } else {
          isActive2 = this.isActive(true);
          cached = cachedGrouppers[groupper.id] = {
            isActive: isActive2
          };
        }
        return isActive2;
      };
      if (parentGroupper) {
        parentGroupperElement = parentGroupper.getElement();
        if (!getIsActive(parentGroupper) && parentGroupperElement && state.container !== parentGroupperElement && dom.nodeContains(state.container, parentGroupperElement)) {
          state.skippedFocusable = true;
          return NodeFilter.FILTER_REJECT;
        }
      }
      const isActive = getIsActive(this);
      const groupperElement = this.getElement();
      if (groupperElement) {
        if (isActive !== true) {
          if (groupperElement === element && parentCtxGroupper) {
            if (!parentGroupperElement) {
              parentGroupperElement = parentCtxGroupper.getElement();
            }
            if (parentGroupperElement && !getIsActive(parentCtxGroupper) && dom.nodeContains(state.container, parentGroupperElement) && parentGroupperElement !== state.container) {
              state.skippedFocusable = true;
              return NodeFilter.FILTER_REJECT;
            }
          }
          if (groupperElement !== element && dom.nodeContains(groupperElement, element)) {
            state.skippedFocusable = true;
            return NodeFilter.FILTER_REJECT;
          }
          const cached = cachedGrouppers[this.id];
          let first;
          if ("first" in cached) {
            first = cached.first;
          } else {
            first = cached.first = this.getFirst(true);
          }
          if (first && state.acceptCondition(first)) {
            state.rejectElementsFrom = groupperElement;
            state.skippedFocusable = true;
            if (first !== state.from) {
              state.found = true;
              state.foundElement = first;
              return NodeFilter.FILTER_ACCEPT;
            } else {
              return NodeFilter.FILTER_REJECT;
            }
          }
        }
      }
      return void 0;
    }
  };
  function validateGroupperProps(props) {
  }
  var GroupperAPI = class {
    _tabster;
    _updateTimer;
    _win;
    _current = {};
    _grouppers = {};
    constructor(tabster, getWindow) {
      this._tabster = tabster;
      this._win = getWindow;
      tabster.queueInit(this._init);
    }
    _init = () => {
      const win = this._win();
      this._tabster.focusedElement.subscribeFirst(this._onFocus);
      const doc = win.document;
      const activeElement = dom.getActiveElement(doc);
      if (activeElement) {
        this._onFocus(activeElement);
      }
      doc.addEventListener("mousedown", this._onMouseDown, true);
      win.addEventListener("keydown", this._onKeyDown, true);
      win.addEventListener(GroupperMoveFocusEventName, this._onMoveFocus);
    };
    dispose() {
      const win = this._win();
      this._tabster.focusedElement.cancelAsyncFocus(AsyncFocusSources.EscapeGroupper);
      this._current = {};
      if (this._updateTimer) {
        win.clearTimeout(this._updateTimer);
        delete this._updateTimer;
      }
      this._tabster.focusedElement.unsubscribe(this._onFocus);
      win.document.removeEventListener("mousedown", this._onMouseDown, true);
      win.removeEventListener("keydown", this._onKeyDown, true);
      win.removeEventListener(GroupperMoveFocusEventName, this._onMoveFocus);
      Object.keys(this._grouppers).forEach((groupperId) => {
        if (this._grouppers[groupperId]) {
          this._grouppers[groupperId].dispose();
          delete this._grouppers[groupperId];
        }
      });
    }
    createGroupper(element, props, sys) {
      if (true) {
        validateGroupperProps(props);
      }
      const tabster = this._tabster;
      const newGroupper = new Groupper(tabster, element, this._onGroupperDispose, props, sys);
      this._grouppers[newGroupper.id] = newGroupper;
      const focusedElement = tabster.focusedElement.getFocusedElement();
      if (focusedElement && dom.nodeContains(element, focusedElement) && !this._updateTimer) {
        this._updateTimer = this._win().setTimeout(() => {
          delete this._updateTimer;
          if (focusedElement === tabster.focusedElement.getFocusedElement()) {
            this._updateCurrent(focusedElement);
          }
        }, 0);
      }
      return newGroupper;
    }
    forgetCurrentGrouppers() {
      this._current = {};
    }
    _onGroupperDispose = (groupper) => {
      delete this._grouppers[groupper.id];
    };
    _onFocus = (element) => {
      if (element) {
        this._updateCurrent(element);
      }
    };
    _onMouseDown = (e) => {
      let target = e.target;
      while (target && !this._tabster.focusable.isFocusable(target)) {
        target = this._tabster.getParent(target);
      }
      if (target) {
        this._updateCurrent(target);
      }
    };
    _updateCurrent(element) {
      if (this._updateTimer) {
        this._win().clearTimeout(this._updateTimer);
        delete this._updateTimer;
      }
      const tabster = this._tabster;
      const newIds = {};
      for (let el = tabster.getParent(element); el; el = tabster.getParent(el)) {
        const groupper = getTabsterOnElement(tabster, el)?.groupper;
        if (groupper) {
          newIds[groupper.id] = true;
          this._current[groupper.id] = groupper;
          const isTabbable = groupper.isActive() || element !== el && (!groupper.getProps().delegated || groupper.getFirst(false) !== element);
          groupper.makeTabbable(isTabbable);
        }
      }
      for (const id of Object.keys(this._current)) {
        const groupper = this._current[id];
        if (!(groupper.id in newIds)) {
          groupper.makeTabbable(false);
          groupper.setFirst(void 0);
          delete this._current[id];
        }
      }
    }
    _onKeyDown = (event) => {
      if (event.key !== Keys.Enter && event.key !== Keys.Escape) {
        return;
      }
      if (event.ctrlKey || event.altKey || event.shiftKey || event.metaKey) {
        return;
      }
      const element = this._tabster.focusedElement.getFocusedElement();
      if (element) {
        this.handleKeyPress(element, event);
      }
    };
    _onMoveFocus = (e) => {
      const element = e.composedPath()[0];
      const action = e.detail?.action;
      if (element && action !== void 0 && !e.defaultPrevented) {
        if (action === GroupperMoveFocusActions.Enter) {
          this._enterGroupper(element);
        } else {
          this._escapeGroupper(element);
        }
        e.stopImmediatePropagation();
      }
    };
    _enterGroupper(element, relatedEvent) {
      const tabster = this._tabster;
      const ctx = RootAPI.getTabsterContext(tabster, element);
      const groupper = ctx?.groupper || ctx?.modalizerInGroupper;
      const groupperElement = groupper?.getElement();
      if (groupper && groupperElement && (element === groupperElement || groupper.getProps().delegated && element === groupper.getFirst(false))) {
        const next = tabster.focusable.findNext({
          container: groupperElement,
          currentElement: element,
          useActiveModalizer: true
        });
        if (next && (!relatedEvent || relatedEvent && groupperElement.dispatchEvent(new TabsterMoveFocusEvent({
          by: "groupper",
          owner: groupperElement,
          next,
          relatedEvent
        })))) {
          if (relatedEvent) {
            relatedEvent.preventDefault();
            relatedEvent.stopImmediatePropagation();
          }
          next.focus();
          return next;
        }
      }
      return null;
    }
    _escapeGroupper(element, relatedEvent, fromModalizer) {
      const tabster = this._tabster;
      const ctx = RootAPI.getTabsterContext(tabster, element);
      let groupper = ctx?.groupper || ctx?.modalizerInGroupper;
      const groupperElement = groupper?.getElement();
      if (groupper && groupperElement && dom.nodeContains(groupperElement, element)) {
        let next;
        if (element !== groupperElement || fromModalizer) {
          next = groupper.getFirst(true);
        } else {
          const parentElement = dom.getParentElement(groupperElement);
          const parentCtx = parentElement ? RootAPI.getTabsterContext(tabster, parentElement) : void 0;
          groupper = parentCtx?.groupper;
          next = groupper?.getFirst(true);
        }
        if (next && (!relatedEvent || relatedEvent && groupperElement.dispatchEvent(new TabsterMoveFocusEvent({
          by: "groupper",
          owner: groupperElement,
          next,
          relatedEvent
        })))) {
          if (groupper) {
            groupper.makeTabbable(false);
          }
          next.focus();
          return next;
        }
      }
      return null;
    }
    moveFocus(element, action) {
      return action === GroupperMoveFocusActions.Enter ? this._enterGroupper(element) : this._escapeGroupper(element);
    }
    handleKeyPress(element, event, fromModalizer) {
      const tabster = this._tabster;
      const ctx = RootAPI.getTabsterContext(tabster, element);
      if (ctx && (ctx?.groupper || ctx?.modalizerInGroupper)) {
        tabster.focusedElement.cancelAsyncFocus(AsyncFocusSources.EscapeGroupper);
        if (ctx.ignoreKeydown(event)) {
          return;
        }
        if (event.key === Keys.Enter) {
          this._enterGroupper(element, event);
        } else if (event.key === Keys.Escape) {
          const focusedElement = tabster.focusedElement.getFocusedElement();
          tabster.focusedElement.requestAsyncFocus(AsyncFocusSources.EscapeGroupper, () => {
            if (focusedElement !== tabster.focusedElement.getFocusedElement() && // A part of Modalizer that has called this handler to escape the active groupper
            // might have been removed from DOM, if the focus is on body, we still want to handle Esc.
            (fromModalizer && !focusedElement || !fromModalizer)) {
              return;
            }
            this._escapeGroupper(element, event, fromModalizer);
          }, 0);
        }
      }
    }
  };
  function _setInformativeStyle2(weakElement, remove) {
    if (true) {
      const element = weakElement.get();
      if (element) {
        if (remove) {
          element.style.removeProperty("--tabster-groupper");
        } else {
          element.style.setProperty("--tabster-groupper", "unlimited");
        }
      }
    }
  }

  // node_modules/tabster/dist/esm/get/getGroupper.js
  function getGroupper(tabster) {
    const tabsterCore = tabster.core;
    if (!tabsterCore.groupper) {
      const api = new GroupperAPI(tabsterCore, tabsterCore.getWindow);
      tabsterCore.groupper = api;
      tabsterCore.attrHandlers.set("groupper", (element, existingGroupper, newProps, _oldProps, sys) => {
        if (existingGroupper) {
          existingGroupper.setProps(newProps);
          return existingGroupper;
        }
        return api.createGroupper(element, newProps, sys);
      });
    }
    return tabsterCore.groupper;
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
  var React24 = __toESM(require_react_shim());
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
    const factoryResultRef = React24.useRef(null);
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
  var React25 = __toESM(require_react_shim());
  var useTabsterAttributes = (props) => {
    useTabster();
    const strAttr = getTabsterAttribute(props, true);
    return React25.useMemo(() => ({
      [TABSTER_ATTRIBUTE_NAME]: strAttr
    }), [
      strAttr
    ]);
  };

  // node_modules/@fluentui/react-tabster/lib/hooks/useFocusableGroup.js
  init_define_import_meta_env();
  var useFocusableGroup = (options) => {
    useTabster(getGroupper);
    return useTabsterAttributes({
      groupper: {
        tabbability: getTabbability(options === null || options === void 0 ? void 0 : options.tabBehavior)
      },
      focusable: {
        ignoreKeydown: options === null || options === void 0 ? void 0 : options.ignoreDefaultKeydown
      }
    });
  };
  var getTabbability = (tabBehavior) => {
    switch (tabBehavior) {
      case "unlimited":
        return GroupperTabbabilities.Unlimited;
      case "limited":
        return GroupperTabbabilities.Limited;
      case "limited-trap-focus":
        return GroupperTabbabilities.LimitedTrapFocus;
      default:
        return void 0;
    }
  };

  // node_modules/@fluentui/react-tabster/lib/hooks/useFocusFinders.js
  init_define_import_meta_env();
  var React26 = __toESM(require_react_shim());
  var useFocusFinders = () => {
    const tabsterRef = useTabster();
    const { targetDocument } = useFluent();
    const findAllFocusable = React26.useCallback((container, acceptCondition) => {
      var _tabsterRef_current;
      return container && ((_tabsterRef_current = tabsterRef.current) === null || _tabsterRef_current === void 0 ? void 0 : _tabsterRef_current.focusable.findAll({
        container,
        acceptCondition
      })) || [];
    }, [
      tabsterRef
    ]);
    const findFirstFocusable = React26.useCallback((container) => {
      var _tabsterRef_current;
      return container && ((_tabsterRef_current = tabsterRef.current) === null || _tabsterRef_current === void 0 ? void 0 : _tabsterRef_current.focusable.findFirst({
        container
      }));
    }, [
      tabsterRef
    ]);
    const findLastFocusable = React26.useCallback((container) => {
      var _tabsterRef_current;
      return container && ((_tabsterRef_current = tabsterRef.current) === null || _tabsterRef_current === void 0 ? void 0 : _tabsterRef_current.focusable.findLast({
        container
      }));
    }, [
      tabsterRef
    ]);
    const findNextFocusable = React26.useCallback((currentElement, options = {}) => {
      if (!tabsterRef.current || !targetDocument || !currentElement) {
        return null;
      }
      const { container = targetDocument.body } = options;
      return tabsterRef.current.focusable.findNext({
        currentElement,
        container
      });
    }, [
      tabsterRef,
      targetDocument
    ]);
    const findPrevFocusable = React26.useCallback((currentElement, options = {}) => {
      if (!tabsterRef.current || !targetDocument || !currentElement) {
        return null;
      }
      const { container = targetDocument.body } = options;
      return tabsterRef.current.focusable.findPrev({
        currentElement,
        container
      });
    }, [
      tabsterRef,
      targetDocument
    ]);
    return {
      findAllFocusable,
      findFirstFocusable,
      findLastFocusable,
      findNextFocusable,
      findPrevFocusable
    };
  };

  // node_modules/@fluentui/react-tabster/lib/hooks/useFocusVisible.js
  init_define_import_meta_env();
  var React27 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-tabster/lib/focus/focusVisiblePolyfill.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-tabster/lib/focus/constants.js
  init_define_import_meta_env();
  var KEYBOARD_NAV_ATTRIBUTE = "data-keyboard-nav";
  var KEYBOARD_NAV_SELECTOR = `:global([${KEYBOARD_NAV_ATTRIBUTE}])`;
  var FOCUS_VISIBLE_ATTR = "data-fui-focus-visible";

  // node_modules/@fluentui/react-tabster/lib/focus/focusVisiblePolyfill.js
  function applyFocusVisiblePolyfill(scope, targetWindow) {
    if (alreadyInScope(scope)) {
      return () => void 0;
    }
    const state = {
      current: void 0
    };
    const keyborg = createKeyborg(targetWindow);
    function registerElementIfNavigating(el) {
      if (keyborg.isNavigatingWithKeyboard() && isHTMLElement(el)) {
        state.current = el;
        el.setAttribute(FOCUS_VISIBLE_ATTR, "");
      }
    }
    function disposeCurrentElement() {
      if (state.current) {
        state.current.removeAttribute(FOCUS_VISIBLE_ATTR);
        state.current = void 0;
      }
    }
    keyborg.subscribe((isNavigatingWithKeyboard) => {
      if (!isNavigatingWithKeyboard) {
        disposeCurrentElement();
      } else {
        registerElementIfNavigating(targetWindow.document.activeElement);
      }
    });
    const keyborgListener = (e) => {
      disposeCurrentElement();
      const target = e.composedPath()[0];
      registerElementIfNavigating(target);
    };
    const blurListener = (e) => {
      if (!e.relatedTarget || isHTMLElement(e.relatedTarget) && !scope.contains(e.relatedTarget)) {
        disposeCurrentElement();
      }
    };
    scope.addEventListener(KEYBORG_FOCUSIN, keyborgListener);
    scope.addEventListener("focusout", blurListener);
    scope.focusVisible = true;
    if (scope.contains(targetWindow.document.activeElement)) {
      registerElementIfNavigating(targetWindow.document.activeElement);
    }
    return () => {
      disposeCurrentElement();
      scope.removeEventListener(KEYBORG_FOCUSIN, keyborgListener);
      scope.removeEventListener("focusout", blurListener);
      scope.focusVisible = void 0;
      disposeKeyborg(keyborg);
    };
  }
  function alreadyInScope(el) {
    if (!el) {
      return false;
    }
    if (el.focusVisible) {
      return true;
    }
    return alreadyInScope(el === null || el === void 0 ? void 0 : el.parentElement);
  }

  // node_modules/@fluentui/react-tabster/lib/hooks/useFocusVisible.js
  function useFocusVisible(options = {}) {
    const contextValue = useFluent();
    const scopeRef = React27.useRef(null);
    var _options_targetDocument;
    const targetDocument = (_options_targetDocument = options.targetDocument) !== null && _options_targetDocument !== void 0 ? _options_targetDocument : contextValue.targetDocument;
    React27.useEffect(() => {
      if ((targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.defaultView) && scopeRef.current) {
        return applyFocusVisiblePolyfill(scopeRef.current, targetDocument.defaultView);
      }
    }, [
      scopeRef,
      targetDocument
    ]);
    return scopeRef;
  }

  // node_modules/@fluentui/react-theme/lib/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/tokens/lib/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/tokens/lib/themes/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/tokens/lib/utils/createLightTheme.js
  init_define_import_meta_env();

  // node_modules/@fluentui/tokens/lib/alias/lightColorPalette.js
  init_define_import_meta_env();

  // node_modules/@fluentui/tokens/lib/global/colorPalette.js
  init_define_import_meta_env();

  // node_modules/@fluentui/tokens/lib/global/colors.js
  init_define_import_meta_env();
  var grey = {
    "2": "#050505",
    "4": "#0a0a0a",
    "6": "#0f0f0f",
    "8": "#141414",
    "10": "#1a1a1a",
    "12": "#1f1f1f",
    "14": "#242424",
    "16": "#292929",
    "18": "#2e2e2e",
    "20": "#333333",
    "22": "#383838",
    "24": "#3d3d3d",
    "26": "#424242",
    "28": "#474747",
    "30": "#4d4d4d",
    "32": "#525252",
    "34": "#575757",
    "36": "#5c5c5c",
    "38": "#616161",
    "40": "#666666",
    "42": "#6b6b6b",
    "44": "#707070",
    "46": "#757575",
    "48": "#7a7a7a",
    "50": "#808080",
    "52": "#858585",
    "54": "#8a8a8a",
    "56": "#8f8f8f",
    "58": "#949494",
    "60": "#999999",
    "62": "#9e9e9e",
    "64": "#a3a3a3",
    "66": "#a8a8a8",
    "68": "#adadad",
    "70": "#b3b3b3",
    "72": "#b8b8b8",
    "74": "#bdbdbd",
    "76": "#c2c2c2",
    "78": "#c7c7c7",
    "80": "#cccccc",
    "82": "#d1d1d1",
    "84": "#d6d6d6",
    "86": "#dbdbdb",
    "88": "#e0e0e0",
    "90": "#e6e6e6",
    "92": "#ebebeb",
    "94": "#f0f0f0",
    "96": "#f5f5f5",
    "98": "#fafafa",
    "99": "#fcfcfc"
  };
  var whiteAlpha = {
    "5": "rgba(255, 255, 255, 0.05)",
    "10": "rgba(255, 255, 255, 0.1)",
    "20": "rgba(255, 255, 255, 0.2)",
    "30": "rgba(255, 255, 255, 0.3)",
    "40": "rgba(255, 255, 255, 0.4)",
    "50": "rgba(255, 255, 255, 0.5)",
    "60": "rgba(255, 255, 255, 0.6)",
    "70": "rgba(255, 255, 255, 0.7)",
    "80": "rgba(255, 255, 255, 0.8)",
    "90": "rgba(255, 255, 255, 0.9)"
  };
  var blackAlpha = {
    "5": "rgba(0, 0, 0, 0.05)",
    "10": "rgba(0, 0, 0, 0.1)",
    "20": "rgba(0, 0, 0, 0.2)",
    "30": "rgba(0, 0, 0, 0.3)",
    "40": "rgba(0, 0, 0, 0.4)",
    "50": "rgba(0, 0, 0, 0.5)",
    "60": "rgba(0, 0, 0, 0.6)",
    "70": "rgba(0, 0, 0, 0.7)",
    "80": "rgba(0, 0, 0, 0.8)",
    "90": "rgba(0, 0, 0, 0.9)"
  };
  var white = "#ffffff";
  var black = "#000000";
  var darkRed = {
    shade50: "#130204",
    shade40: "#230308",
    shade30: "#420610",
    shade20: "#590815",
    shade10: "#690a19",
    primary: "#750b1c",
    tint10: "#861b2c",
    tint20: "#962f3f",
    tint30: "#ac4f5e",
    tint40: "#d69ca5",
    tint50: "#e9c7cd",
    tint60: "#f9f0f2"
  };
  var cranberry = {
    shade50: "#200205",
    shade40: "#3b0509",
    shade30: "#6e0811",
    shade20: "#960b18",
    shade10: "#b10e1c",
    primary: "#c50f1f",
    tint10: "#cc2635",
    tint20: "#d33f4c",
    tint30: "#dc626d",
    tint40: "#eeacb2",
    tint50: "#f6d1d5",
    tint60: "#fdf3f4"
  };
  var red = {
    shade50: "#210809",
    shade40: "#3f1011",
    shade30: "#751d1f",
    shade20: "#9f282b",
    shade10: "#bc2f32",
    primary: "#d13438",
    tint10: "#d7494c",
    tint20: "#dc5e62",
    tint30: "#e37d80",
    tint40: "#f1bbbc",
    tint50: "#f8dadb",
    tint60: "#fdf6f6"
  };
  var darkOrange = {
    shade50: "#230900",
    shade40: "#411200",
    shade30: "#7a2101",
    shade20: "#a62d01",
    shade10: "#c43501",
    primary: "#da3b01",
    tint10: "#de501c",
    tint20: "#e36537",
    tint30: "#e9835e",
    tint40: "#f4bfab",
    tint50: "#f9dcd1",
    tint60: "#fdf6f3"
  };
  var pumpkin = {
    shade50: "#200d03",
    shade40: "#3d1805",
    shade30: "#712d09",
    shade20: "#9a3d0c",
    shade10: "#b6480e",
    primary: "#ca5010",
    tint10: "#d06228",
    tint20: "#d77440",
    tint30: "#df8e64",
    tint40: "#efc4ad",
    tint50: "#f7dfd2",
    tint60: "#fdf7f4"
  };
  var orange = {
    shade50: "#271002",
    shade40: "#4a1e04",
    shade30: "#8a3707",
    shade20: "#bc4b09",
    shade10: "#de590b",
    primary: "#f7630c",
    tint10: "#f87528",
    tint20: "#f98845",
    tint30: "#faa06b",
    tint40: "#fdcfb4",
    tint50: "#fee5d7",
    tint60: "#fff9f5"
  };
  var peach = {
    shade50: "#291600",
    shade40: "#4d2a00",
    shade30: "#8f4e00",
    shade20: "#c26a00",
    shade10: "#e67e00",
    primary: "#ff8c00",
    tint10: "#ff9a1f",
    tint20: "#ffa83d",
    tint30: "#ffba66",
    tint40: "#ffddb3",
    tint50: "#ffedd6",
    tint60: "#fffaf5"
  };
  var marigold = {
    shade50: "#251a00",
    shade40: "#463100",
    shade30: "#835b00",
    shade20: "#b27c00",
    shade10: "#d39300",
    primary: "#eaa300",
    tint10: "#edad1c",
    tint20: "#efb839",
    tint30: "#f2c661",
    tint40: "#f9e2ae",
    tint50: "#fcefd3",
    tint60: "#fefbf4"
  };
  var yellow = {
    shade50: "#282400",
    shade40: "#4c4400",
    shade30: "#817400",
    shade20: "#c0ad00",
    shade10: "#e4cc00",
    primary: "#fde300",
    tint10: "#fde61e",
    tint20: "#fdea3d",
    tint30: "#feee66",
    tint40: "#fef7b2",
    tint50: "#fffad6",
    tint60: "#fffef5"
  };
  var gold = {
    shade50: "#1f1900",
    shade40: "#3a2f00",
    shade30: "#6c5700",
    shade20: "#937700",
    shade10: "#ae8c00",
    primary: "#c19c00",
    tint10: "#c8a718",
    tint20: "#d0b232",
    tint30: "#dac157",
    tint40: "#ecdfa5",
    tint50: "#f5eece",
    tint60: "#fdfbf2"
  };
  var brass = {
    shade50: "#181202",
    shade40: "#2e2103",
    shade30: "#553e06",
    shade20: "#745408",
    shade10: "#89640a",
    primary: "#986f0b",
    tint10: "#a47d1e",
    tint20: "#b18c34",
    tint30: "#c1a256",
    tint40: "#e0cea2",
    tint50: "#efe4cb",
    tint60: "#fbf8f2"
  };
  var brown = {
    shade50: "#170e07",
    shade40: "#2b1a0e",
    shade30: "#50301a",
    shade20: "#6c4123",
    shade10: "#804d29",
    primary: "#8e562e",
    tint10: "#9c663f",
    tint20: "#a97652",
    tint30: "#bb8f6f",
    tint40: "#ddc3b0",
    tint50: "#edded3",
    tint60: "#faf7f4"
  };
  var forest = {
    shade50: "#0c1501",
    shade40: "#162702",
    shade30: "#294903",
    shade20: "#376304",
    shade10: "#427505",
    primary: "#498205",
    tint10: "#599116",
    tint20: "#6ba02b",
    tint30: "#85b44c",
    tint40: "#bdd99b",
    tint50: "#dbebc7",
    tint60: "#f6faf0"
  };
  var seafoam = {
    shade50: "#002111",
    shade40: "#003d20",
    shade30: "#00723b",
    shade20: "#009b51",
    shade10: "#00b85f",
    primary: "#00cc6a",
    tint10: "#19d279",
    tint20: "#34d889",
    tint30: "#5ae0a0",
    tint40: "#a8f0cd",
    tint50: "#cff7e4",
    tint60: "#f3fdf8"
  };
  var lightGreen = {
    shade50: "#031a02",
    shade40: "#063004",
    shade30: "#0b5a08",
    shade20: "#0e7a0b",
    shade10: "#11910d",
    primary: "#13a10e",
    tint10: "#27ac22",
    tint20: "#3db838",
    tint30: "#5ec75a",
    tint40: "#a7e3a5",
    tint50: "#cef0cd",
    tint60: "#f2fbf2"
  };
  var green = {
    shade50: "#031403",
    shade40: "#052505",
    shade30: "#094509",
    shade20: "#0c5e0c",
    shade10: "#0e700e",
    primary: "#107c10",
    tint10: "#218c21",
    tint20: "#359b35",
    tint30: "#54b054",
    tint40: "#9fd89f",
    tint50: "#c9eac9",
    tint60: "#f1faf1"
  };
  var darkGreen = {
    shade50: "#021102",
    shade40: "#032003",
    shade30: "#063b06",
    shade20: "#085108",
    shade10: "#0a5f0a",
    primary: "#0b6a0b",
    tint10: "#1a7c1a",
    tint20: "#2d8e2d",
    tint30: "#4da64d",
    tint40: "#9ad29a",
    tint50: "#c6e7c6",
    tint60: "#f0f9f0"
  };
  var lightTeal = {
    shade50: "#001d1f",
    shade40: "#00373a",
    shade30: "#00666d",
    shade20: "#008b94",
    shade10: "#00a5af",
    primary: "#00b7c3",
    tint10: "#18bfca",
    tint20: "#32c8d1",
    tint30: "#58d3db",
    tint40: "#a6e9ed",
    tint50: "#cef3f5",
    tint60: "#f2fcfd"
  };
  var teal = {
    shade50: "#001516",
    shade40: "#012728",
    shade30: "#02494c",
    shade20: "#026467",
    shade10: "#037679",
    primary: "#038387",
    tint10: "#159195",
    tint20: "#2aa0a4",
    tint30: "#4cb4b7",
    tint40: "#9bd9db",
    tint50: "#c7ebec",
    tint60: "#f0fafa"
  };
  var steel = {
    shade50: "#000f12",
    shade40: "#001b22",
    shade30: "#00333f",
    shade20: "#004555",
    shade10: "#005265",
    primary: "#005b70",
    tint10: "#0f6c81",
    tint20: "#237d92",
    tint30: "#4496a9",
    tint40: "#94c8d4",
    tint50: "#c3e1e8",
    tint60: "#eff7f9"
  };
  var blue = {
    shade50: "#001322",
    shade40: "#002440",
    shade30: "#004377",
    shade20: "#005ba1",
    shade10: "#006cbf",
    primary: "#0078d4",
    tint10: "#1a86d9",
    tint20: "#3595de",
    tint30: "#5caae5",
    tint40: "#a9d3f2",
    tint50: "#d0e7f8",
    tint60: "#f3f9fd"
  };
  var royalBlue = {
    shade50: "#000c16",
    shade40: "#00172a",
    shade30: "#002c4e",
    shade20: "#003b6a",
    shade10: "#00467e",
    primary: "#004e8c",
    tint10: "#125e9a",
    tint20: "#286fa8",
    tint30: "#4a89ba",
    tint40: "#9abfdc",
    tint50: "#c7dced",
    tint60: "#f0f6fa"
  };
  var cornflower = {
    shade50: "#0d1126",
    shade40: "#182047",
    shade30: "#2c3c85",
    shade20: "#3c51b4",
    shade10: "#4760d5",
    primary: "#4f6bed",
    tint10: "#637cef",
    tint20: "#778df1",
    tint30: "#93a4f4",
    tint40: "#c8d1fa",
    tint50: "#e1e6fc",
    tint60: "#f7f9fe"
  };
  var navy = {
    shade50: "#00061d",
    shade40: "#000c36",
    shade30: "#001665",
    shade20: "#001e89",
    shade10: "#0023a2",
    primary: "#0027b4",
    tint10: "#173bbd",
    tint20: "#3050c6",
    tint30: "#546fd2",
    tint40: "#a3b2e8",
    tint50: "#ccd5f3",
    tint60: "#f2f4fc"
  };
  var lavender = {
    shade50: "#120f25",
    shade40: "#221d46",
    shade30: "#3f3682",
    shade20: "#5649b0",
    shade10: "#6656d1",
    primary: "#7160e8",
    tint10: "#8172eb",
    tint20: "#9184ee",
    tint30: "#a79cf1",
    tint40: "#d2ccf8",
    tint50: "#e7e4fb",
    tint60: "#f9f8fe"
  };
  var purple = {
    shade50: "#0f0717",
    shade40: "#1c0e2b",
    shade30: "#341a51",
    shade20: "#46236e",
    shade10: "#532982",
    primary: "#5c2e91",
    tint10: "#6b3f9e",
    tint20: "#7c52ab",
    tint30: "#9470bd",
    tint40: "#c6b1de",
    tint50: "#e0d3ed",
    tint60: "#f7f4fb"
  };
  var grape = {
    shade50: "#160418",
    shade40: "#29072e",
    shade30: "#4c0d55",
    shade20: "#671174",
    shade10: "#7a1589",
    primary: "#881798",
    tint10: "#952aa4",
    tint20: "#a33fb1",
    tint30: "#b55fc1",
    tint40: "#d9a7e0",
    tint50: "#eaceef",
    tint60: "#faf2fb"
  };
  var berry = {
    shade50: "#1f091d",
    shade40: "#3a1136",
    shade30: "#6d2064",
    shade20: "#932b88",
    shade10: "#af33a1",
    primary: "#c239b3",
    tint10: "#c94cbc",
    tint20: "#d161c4",
    tint30: "#da7ed0",
    tint40: "#edbbe7",
    tint50: "#f5daf2",
    tint60: "#fdf5fc"
  };
  var lilac = {
    shade50: "#1c0b1f",
    shade40: "#35153a",
    shade30: "#63276d",
    shade20: "#863593",
    shade10: "#9f3faf",
    primary: "#b146c2",
    tint10: "#ba58c9",
    tint20: "#c36bd1",
    tint30: "#cf87da",
    tint40: "#e6bfed",
    tint50: "#f2dcf5",
    tint60: "#fcf6fd"
  };
  var pink = {
    shade50: "#24091b",
    shade40: "#441232",
    shade30: "#80215d",
    shade20: "#ad2d7e",
    shade10: "#cd3595",
    primary: "#e43ba6",
    tint10: "#e750b0",
    tint20: "#ea66ba",
    tint30: "#ef85c8",
    tint40: "#f7c0e3",
    tint50: "#fbddf0",
    tint60: "#fef6fb"
  };
  var magenta = {
    shade50: "#1f0013",
    shade40: "#390024",
    shade30: "#6b0043",
    shade20: "#91005a",
    shade10: "#ac006b",
    primary: "#bf0077",
    tint10: "#c71885",
    tint20: "#ce3293",
    tint30: "#d957a8",
    tint40: "#eca5d1",
    tint50: "#f5cee6",
    tint60: "#fcf2f9"
  };
  var plum = {
    shade50: "#13000c",
    shade40: "#240017",
    shade30: "#43002b",
    shade20: "#5a003b",
    shade10: "#6b0045",
    primary: "#77004d",
    tint10: "#87105d",
    tint20: "#98246f",
    tint30: "#ad4589",
    tint40: "#d696c0",
    tint50: "#e9c4dc",
    tint60: "#faf0f6"
  };
  var beige = {
    shade50: "#141313",
    shade40: "#252323",
    shade30: "#444241",
    shade20: "#5d5958",
    shade10: "#6e6968",
    primary: "#7a7574",
    tint10: "#8a8584",
    tint20: "#9a9594",
    tint30: "#afabaa",
    tint40: "#d7d4d4",
    tint50: "#eae8e8",
    tint60: "#faf9f9"
  };
  var mink = {
    shade50: "#0f0e0e",
    shade40: "#1c1b1a",
    shade30: "#343231",
    shade20: "#474443",
    shade10: "#54514f",
    primary: "#5d5a58",
    tint10: "#706d6b",
    tint20: "#84817e",
    tint30: "#9e9b99",
    tint40: "#cecccb",
    tint50: "#e5e4e3",
    tint60: "#f8f8f8"
  };
  var platinum = {
    shade50: "#111314",
    shade40: "#1f2426",
    shade30: "#3b4447",
    shade20: "#505c60",
    shade10: "#5f6d71",
    primary: "#69797e",
    tint10: "#79898d",
    tint20: "#89989d",
    tint30: "#a0adb2",
    tint40: "#cdd6d8",
    tint50: "#e4e9ea",
    tint60: "#f8f9fa"
  };
  var anchor = {
    shade50: "#090a0b",
    shade40: "#111315",
    shade30: "#202427",
    shade20: "#2b3135",
    shade10: "#333a3f",
    primary: "#394146",
    tint10: "#4d565c",
    tint20: "#626c72",
    tint30: "#808a90",
    tint40: "#bcc3c7",
    tint50: "#dbdfe1",
    tint60: "#f6f7f8"
  };

  // node_modules/@fluentui/tokens/lib/global/colorPalette.js
  var statusSharedColors = {
    red,
    green,
    darkOrange,
    yellow,
    berry,
    lightGreen,
    marigold
  };
  var personaSharedColors = {
    darkRed,
    cranberry,
    pumpkin,
    peach,
    gold,
    brass,
    brown,
    forest,
    seafoam,
    darkGreen,
    lightTeal,
    teal,
    steel,
    blue,
    royalBlue,
    cornflower,
    navy,
    lavender,
    purple,
    grape,
    lilac,
    pink,
    magenta,
    plum,
    beige,
    mink,
    platinum,
    anchor
  };
  var mappedStatusColors = {
    cranberry,
    green,
    orange
  };

  // node_modules/@fluentui/tokens/lib/sharedColorNames.js
  init_define_import_meta_env();
  var statusSharedColorNames = [
    "red",
    "green",
    "darkOrange",
    "yellow",
    "berry",
    "lightGreen",
    "marigold"
  ];
  var personaSharedColorNames = [
    "darkRed",
    "cranberry",
    "pumpkin",
    "peach",
    "gold",
    "brass",
    "brown",
    "forest",
    "seafoam",
    "darkGreen",
    "lightTeal",
    "teal",
    "steel",
    "blue",
    "royalBlue",
    "cornflower",
    "navy",
    "lavender",
    "purple",
    "grape",
    "lilac",
    "pink",
    "magenta",
    "plum",
    "beige",
    "mink",
    "platinum",
    "anchor"
  ];

  // node_modules/@fluentui/tokens/lib/statusColorMapping.js
  init_define_import_meta_env();
  var statusColorMapping = {
    success: "green",
    warning: "orange",
    danger: "cranberry"
  };

  // node_modules/@fluentui/tokens/lib/alias/lightColorPalette.js
  var statusColorPaletteTokens = statusSharedColorNames.reduce((acc, sharedColor) => {
    const color = sharedColor.slice(0, 1).toUpperCase() + sharedColor.slice(1);
    const sharedColorTokens = {
      [`colorPalette${color}Background1`]: statusSharedColors[sharedColor].tint60,
      [`colorPalette${color}Background2`]: statusSharedColors[sharedColor].tint40,
      [`colorPalette${color}Background3`]: statusSharedColors[sharedColor].primary,
      [`colorPalette${color}Foreground1`]: statusSharedColors[sharedColor].shade10,
      [`colorPalette${color}Foreground2`]: statusSharedColors[sharedColor].shade30,
      [`colorPalette${color}Foreground3`]: statusSharedColors[sharedColor].primary,
      [`colorPalette${color}BorderActive`]: statusSharedColors[sharedColor].primary,
      [`colorPalette${color}Border1`]: statusSharedColors[sharedColor].tint40,
      [`colorPalette${color}Border2`]: statusSharedColors[sharedColor].primary
    };
    return Object.assign(acc, sharedColorTokens);
  }, {});
  statusColorPaletteTokens.colorPaletteYellowForeground1 = statusSharedColors.yellow.shade30;
  statusColorPaletteTokens.colorPaletteRedForegroundInverted = statusSharedColors.red.tint20;
  statusColorPaletteTokens.colorPaletteGreenForegroundInverted = statusSharedColors.green.tint20;
  statusColorPaletteTokens.colorPaletteYellowForegroundInverted = statusSharedColors.yellow.tint40;
  var personaColorPaletteTokens = personaSharedColorNames.reduce((acc, sharedColor) => {
    const color = sharedColor.slice(0, 1).toUpperCase() + sharedColor.slice(1);
    const sharedColorTokens = {
      [`colorPalette${color}Background2`]: personaSharedColors[sharedColor].tint40,
      [`colorPalette${color}Foreground2`]: personaSharedColors[sharedColor].shade30,
      [`colorPalette${color}BorderActive`]: personaSharedColors[sharedColor].primary
    };
    return Object.assign(acc, sharedColorTokens);
  }, {});
  var colorPaletteTokens = {
    ...statusColorPaletteTokens,
    ...personaColorPaletteTokens
  };
  var colorStatusTokens = Object.entries(statusColorMapping).reduce((acc, [statusColor, sharedColor]) => {
    const color = statusColor.slice(0, 1).toUpperCase() + statusColor.slice(1);
    const statusColorTokens = {
      [`colorStatus${color}Background1`]: mappedStatusColors[sharedColor].tint60,
      [`colorStatus${color}Background2`]: mappedStatusColors[sharedColor].tint40,
      [`colorStatus${color}Background3`]: mappedStatusColors[sharedColor].primary,
      [`colorStatus${color}Foreground1`]: mappedStatusColors[sharedColor].shade10,
      [`colorStatus${color}Foreground2`]: mappedStatusColors[sharedColor].shade30,
      [`colorStatus${color}Foreground3`]: mappedStatusColors[sharedColor].primary,
      [`colorStatus${color}ForegroundInverted`]: mappedStatusColors[sharedColor].tint30,
      [`colorStatus${color}BorderActive`]: mappedStatusColors[sharedColor].primary,
      [`colorStatus${color}Border1`]: mappedStatusColors[sharedColor].tint40,
      [`colorStatus${color}Border2`]: mappedStatusColors[sharedColor].primary
    };
    return Object.assign(acc, statusColorTokens);
  }, {});
  colorStatusTokens.colorStatusDangerBackground3Hover = mappedStatusColors[statusColorMapping.danger].shade10;
  colorStatusTokens.colorStatusDangerBackground3Pressed = mappedStatusColors[statusColorMapping.danger].shade20;
  colorStatusTokens.colorStatusWarningForeground1 = mappedStatusColors[statusColorMapping.warning].shade20;
  colorStatusTokens.colorStatusWarningForeground3 = mappedStatusColors[statusColorMapping.warning].shade20;
  colorStatusTokens.colorStatusWarningBorder2 = mappedStatusColors[statusColorMapping.warning].shade20;

  // node_modules/@fluentui/tokens/lib/alias/lightColor.js
  init_define_import_meta_env();
  var generateColorTokens = (brand) => ({
    colorNeutralForeground1: grey[14],
    colorNeutralForeground1Hover: grey[14],
    colorNeutralForeground1Pressed: grey[14],
    colorNeutralForeground1Selected: grey[14],
    colorNeutralForeground2: grey[26],
    colorNeutralForeground2Hover: grey[14],
    colorNeutralForeground2Pressed: grey[14],
    colorNeutralForeground2Selected: grey[14],
    colorNeutralForeground2BrandHover: brand[80],
    colorNeutralForeground2BrandPressed: brand[70],
    colorNeutralForeground2BrandSelected: brand[80],
    colorNeutralForeground3: grey[38],
    colorNeutralForeground3Hover: grey[26],
    colorNeutralForeground3Pressed: grey[26],
    colorNeutralForeground3Selected: grey[26],
    colorNeutralForeground3BrandHover: brand[80],
    colorNeutralForeground3BrandPressed: brand[70],
    colorNeutralForeground3BrandSelected: brand[80],
    colorNeutralForeground4: grey[44],
    colorNeutralForeground5: grey[38],
    colorNeutralForeground5Hover: grey[14],
    colorNeutralForeground5Pressed: grey[14],
    colorNeutralForeground5Selected: grey[14],
    colorNeutralForegroundDisabled: grey[74],
    colorNeutralForegroundInvertedDisabled: whiteAlpha[40],
    colorBrandForegroundLink: brand[70],
    colorBrandForegroundLinkHover: brand[60],
    colorBrandForegroundLinkPressed: brand[40],
    colorBrandForegroundLinkSelected: brand[70],
    colorNeutralForeground2Link: grey[26],
    colorNeutralForeground2LinkHover: grey[14],
    colorNeutralForeground2LinkPressed: grey[14],
    colorNeutralForeground2LinkSelected: grey[14],
    colorCompoundBrandForeground1: brand[80],
    colorCompoundBrandForeground1Hover: brand[70],
    colorCompoundBrandForeground1Pressed: brand[60],
    colorBrandForeground1: brand[80],
    colorBrandForeground2: brand[70],
    colorBrandForeground2Hover: brand[60],
    colorBrandForeground2Pressed: brand[30],
    colorNeutralForeground1Static: grey[14],
    colorNeutralForegroundStaticInverted: white,
    colorNeutralForegroundInverted: white,
    colorNeutralForegroundInvertedHover: white,
    colorNeutralForegroundInvertedPressed: white,
    colorNeutralForegroundInvertedSelected: white,
    colorNeutralForegroundInverted2: white,
    colorNeutralForegroundOnBrand: white,
    colorNeutralForegroundInvertedLink: white,
    colorNeutralForegroundInvertedLinkHover: white,
    colorNeutralForegroundInvertedLinkPressed: white,
    colorNeutralForegroundInvertedLinkSelected: white,
    colorBrandForegroundInverted: brand[100],
    colorBrandForegroundInvertedHover: brand[110],
    colorBrandForegroundInvertedPressed: brand[100],
    colorBrandForegroundOnLight: brand[80],
    colorBrandForegroundOnLightHover: brand[70],
    colorBrandForegroundOnLightPressed: brand[50],
    colorBrandForegroundOnLightSelected: brand[60],
    colorNeutralBackground1: white,
    colorNeutralBackground1Hover: grey[96],
    colorNeutralBackground1Pressed: grey[88],
    colorNeutralBackground1Selected: grey[92],
    colorNeutralBackground2: grey[98],
    colorNeutralBackground2Hover: grey[94],
    colorNeutralBackground2Pressed: grey[86],
    colorNeutralBackground2Selected: grey[90],
    colorNeutralBackground3: grey[96],
    colorNeutralBackground3Hover: grey[92],
    colorNeutralBackground3Pressed: grey[84],
    colorNeutralBackground3Selected: grey[88],
    colorNeutralBackground4: grey[94],
    colorNeutralBackground4Hover: grey[98],
    colorNeutralBackground4Pressed: grey[96],
    colorNeutralBackground4Selected: white,
    colorNeutralBackground5: grey[92],
    colorNeutralBackground5Hover: grey[96],
    colorNeutralBackground5Pressed: grey[94],
    colorNeutralBackground5Selected: grey[98],
    colorNeutralBackground6: grey[90],
    colorNeutralBackground7: "#00000000",
    colorNeutralBackground7Hover: grey[92],
    colorNeutralBackground7Pressed: grey[84],
    colorNeutralBackground7Selected: "#00000000",
    colorNeutralBackground8: grey[99],
    colorNeutralBackgroundInverted: grey[16],
    colorNeutralBackgroundInvertedHover: grey[24],
    colorNeutralBackgroundInvertedPressed: grey[12],
    colorNeutralBackgroundInvertedSelected: grey[22],
    colorNeutralBackgroundStatic: grey[20],
    colorNeutralBackgroundAlpha: whiteAlpha[50],
    colorNeutralBackgroundAlpha2: whiteAlpha[80],
    colorSubtleBackground: "transparent",
    colorSubtleBackgroundHover: grey[96],
    colorSubtleBackgroundPressed: grey[88],
    colorSubtleBackgroundSelected: grey[92],
    colorSubtleBackgroundLightAlphaHover: whiteAlpha[70],
    colorSubtleBackgroundLightAlphaPressed: whiteAlpha[50],
    colorSubtleBackgroundLightAlphaSelected: "transparent",
    colorSubtleBackgroundInverted: "transparent",
    colorSubtleBackgroundInvertedHover: blackAlpha[10],
    colorSubtleBackgroundInvertedPressed: blackAlpha[30],
    colorSubtleBackgroundInvertedSelected: blackAlpha[20],
    colorTransparentBackground: "transparent",
    colorTransparentBackgroundHover: "transparent",
    colorTransparentBackgroundPressed: "transparent",
    colorTransparentBackgroundSelected: "transparent",
    colorNeutralBackgroundDisabled: grey[94],
    colorNeutralBackgroundDisabled2: white,
    colorNeutralBackgroundInvertedDisabled: whiteAlpha[10],
    colorNeutralStencil1: grey[90],
    colorNeutralStencil2: grey[98],
    colorNeutralStencil1Alpha: blackAlpha[10],
    colorNeutralStencil2Alpha: blackAlpha[5],
    colorBackgroundOverlay: blackAlpha[40],
    colorScrollbarOverlay: blackAlpha[50],
    colorBrandBackground: brand[80],
    colorBrandBackgroundHover: brand[70],
    colorBrandBackgroundPressed: brand[40],
    colorBrandBackgroundSelected: brand[60],
    colorCompoundBrandBackground: brand[80],
    colorCompoundBrandBackgroundHover: brand[70],
    colorCompoundBrandBackgroundPressed: brand[60],
    colorBrandBackgroundStatic: brand[80],
    colorBrandBackground2: brand[160],
    colorBrandBackground2Hover: brand[150],
    colorBrandBackground2Pressed: brand[130],
    colorBrandBackground3Static: brand[60],
    colorBrandBackground4Static: brand[40],
    colorBrandBackgroundInverted: white,
    colorBrandBackgroundInvertedHover: brand[160],
    colorBrandBackgroundInvertedPressed: brand[140],
    colorBrandBackgroundInvertedSelected: brand[150],
    colorNeutralCardBackground: grey[98],
    colorNeutralCardBackgroundHover: white,
    colorNeutralCardBackgroundPressed: grey[96],
    colorNeutralCardBackgroundSelected: grey[92],
    colorNeutralCardBackgroundDisabled: grey[94],
    colorNeutralStrokeAccessible: grey[38],
    colorNeutralStrokeAccessibleHover: grey[34],
    colorNeutralStrokeAccessiblePressed: grey[30],
    colorNeutralStrokeAccessibleSelected: brand[80],
    colorNeutralStroke1: grey[82],
    colorNeutralStroke1Hover: grey[78],
    colorNeutralStroke1Pressed: grey[70],
    colorNeutralStroke1Selected: grey[74],
    colorNeutralStroke2: grey[88],
    colorNeutralStroke3: grey[94],
    colorNeutralStroke4: grey[92],
    colorNeutralStroke4Hover: grey[88],
    colorNeutralStroke4Pressed: grey[84],
    colorNeutralStroke4Selected: grey[92],
    colorNeutralStrokeSubtle: grey[88],
    colorNeutralStrokeOnBrand: white,
    colorNeutralStrokeOnBrand2: white,
    colorNeutralStrokeOnBrand2Hover: white,
    colorNeutralStrokeOnBrand2Pressed: white,
    colorNeutralStrokeOnBrand2Selected: white,
    colorBrandStroke1: brand[80],
    colorBrandStroke2: brand[140],
    colorBrandStroke2Hover: brand[120],
    colorBrandStroke2Pressed: brand[80],
    colorBrandStroke2Contrast: brand[140],
    colorCompoundBrandStroke: brand[80],
    colorCompoundBrandStrokeHover: brand[70],
    colorCompoundBrandStrokePressed: brand[60],
    colorNeutralStrokeDisabled: grey[88],
    colorNeutralStrokeDisabled2: grey[92],
    colorNeutralStrokeInvertedDisabled: whiteAlpha[40],
    colorTransparentStroke: "transparent",
    colorTransparentStrokeInteractive: "transparent",
    colorTransparentStrokeDisabled: "transparent",
    colorNeutralStrokeAlpha: blackAlpha[5],
    colorNeutralStrokeAlpha2: whiteAlpha[20],
    colorStrokeFocus1: white,
    colorStrokeFocus2: black,
    colorNeutralShadowAmbient: "rgba(0,0,0,0.12)",
    colorNeutralShadowKey: "rgba(0,0,0,0.14)",
    colorNeutralShadowAmbientLighter: "rgba(0,0,0,0.06)",
    colorNeutralShadowKeyLighter: "rgba(0,0,0,0.07)",
    colorNeutralShadowAmbientDarker: "rgba(0,0,0,0.20)",
    colorNeutralShadowKeyDarker: "rgba(0,0,0,0.24)",
    colorBrandShadowAmbient: "rgba(0,0,0,0.30)",
    colorBrandShadowKey: "rgba(0,0,0,0.25)"
  });

  // node_modules/@fluentui/tokens/lib/global/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/tokens/lib/global/borderRadius.js
  init_define_import_meta_env();
  var borderRadius = {
    borderRadiusNone: "0",
    borderRadiusSmall: "2px",
    borderRadiusMedium: "4px",
    borderRadiusLarge: "6px",
    borderRadiusXLarge: "8px",
    borderRadius2XLarge: "12px",
    borderRadius3XLarge: "16px",
    borderRadius4XLarge: "24px",
    borderRadius5XLarge: "32px",
    borderRadius6XLarge: "40px",
    borderRadiusCircular: "10000px"
  };

  // node_modules/@fluentui/tokens/lib/global/curves.js
  init_define_import_meta_env();
  var curves = {
    curveAccelerateMax: "cubic-bezier(0.9,0.1,1,0.2)",
    curveAccelerateMid: "cubic-bezier(1,0,1,1)",
    curveAccelerateMin: "cubic-bezier(0.8,0,0.78,1)",
    curveDecelerateMax: "cubic-bezier(0.1,0.9,0.2,1)",
    curveDecelerateMid: "cubic-bezier(0,0,0,1)",
    curveDecelerateMin: "cubic-bezier(0.33,0,0.1,1)",
    curveEasyEaseMax: "cubic-bezier(0.8,0,0.2,1)",
    curveEasyEase: "cubic-bezier(0.33,0,0.67,1)",
    curveLinear: "cubic-bezier(0,0,1,1)"
  };

  // node_modules/@fluentui/tokens/lib/global/durations.js
  init_define_import_meta_env();
  var durations = {
    durationUltraFast: "50ms",
    durationFaster: "100ms",
    durationFast: "150ms",
    durationNormal: "200ms",
    durationGentle: "250ms",
    durationSlow: "300ms",
    durationSlower: "400ms",
    durationUltraSlow: "500ms"
  };

  // node_modules/@fluentui/tokens/lib/global/fonts.js
  init_define_import_meta_env();
  var fontSizes = {
    fontSizeBase100: "10px",
    fontSizeBase200: "12px",
    fontSizeBase300: "14px",
    fontSizeBase400: "16px",
    fontSizeBase500: "20px",
    fontSizeBase600: "24px",
    fontSizeHero700: "28px",
    fontSizeHero800: "32px",
    fontSizeHero900: "40px",
    fontSizeHero1000: "68px"
  };
  var lineHeights = {
    lineHeightBase100: "14px",
    lineHeightBase200: "16px",
    lineHeightBase300: "20px",
    lineHeightBase400: "22px",
    lineHeightBase500: "28px",
    lineHeightBase600: "32px",
    lineHeightHero700: "36px",
    lineHeightHero800: "40px",
    lineHeightHero900: "52px",
    lineHeightHero1000: "92px"
  };
  var fontWeights = {
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemibold: 600,
    fontWeightBold: 700
  };
  var fontFamilies = {
    fontFamilyBase: "'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
    fontFamilyMonospace: "Consolas, 'Courier New', Courier, monospace",
    fontFamilyNumeric: "Bahnschrift, 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif"
  };

  // node_modules/@fluentui/tokens/lib/global/spacings.js
  init_define_import_meta_env();
  var spacings = {
    none: "0",
    xxs: "2px",
    xs: "4px",
    sNudge: "6px",
    s: "8px",
    mNudge: "10px",
    m: "12px",
    l: "16px",
    xl: "20px",
    xxl: "24px",
    xxxl: "32px"
  };
  var horizontalSpacings = {
    spacingHorizontalNone: spacings.none,
    spacingHorizontalXXS: spacings.xxs,
    spacingHorizontalXS: spacings.xs,
    spacingHorizontalSNudge: spacings.sNudge,
    spacingHorizontalS: spacings.s,
    spacingHorizontalMNudge: spacings.mNudge,
    spacingHorizontalM: spacings.m,
    spacingHorizontalL: spacings.l,
    spacingHorizontalXL: spacings.xl,
    spacingHorizontalXXL: spacings.xxl,
    spacingHorizontalXXXL: spacings.xxxl
  };
  var verticalSpacings = {
    spacingVerticalNone: spacings.none,
    spacingVerticalXXS: spacings.xxs,
    spacingVerticalXS: spacings.xs,
    spacingVerticalSNudge: spacings.sNudge,
    spacingVerticalS: spacings.s,
    spacingVerticalMNudge: spacings.mNudge,
    spacingVerticalM: spacings.m,
    spacingVerticalL: spacings.l,
    spacingVerticalXL: spacings.xl,
    spacingVerticalXXL: spacings.xxl,
    spacingVerticalXXXL: spacings.xxxl
  };

  // node_modules/@fluentui/tokens/lib/global/strokeWidths.js
  init_define_import_meta_env();
  var strokeWidths = {
    strokeWidthThin: "1px",
    strokeWidthThick: "2px",
    strokeWidthThicker: "3px",
    strokeWidthThickest: "4px"
  };

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

  // node_modules/@fluentui/tokens/lib/utils/shadows.js
  init_define_import_meta_env();
  function createShadowTokens(ambientColor, keyColor, tokenSuffix = "") {
    return {
      [`shadow2${tokenSuffix}`]: `0 0 2px ${ambientColor}, 0 1px 2px ${keyColor}`,
      [`shadow4${tokenSuffix}`]: `0 0 2px ${ambientColor}, 0 2px 4px ${keyColor}`,
      [`shadow8${tokenSuffix}`]: `0 0 2px ${ambientColor}, 0 4px 8px ${keyColor}`,
      [`shadow16${tokenSuffix}`]: `0 0 2px ${ambientColor}, 0 8px 16px ${keyColor}`,
      [`shadow28${tokenSuffix}`]: `0 0 8px ${ambientColor}, 0 14px 28px ${keyColor}`,
      [`shadow64${tokenSuffix}`]: `0 0 8px ${ambientColor}, 0 32px 64px ${keyColor}`
    };
  }

  // node_modules/@fluentui/tokens/lib/utils/createLightTheme.js
  var createLightTheme = (brand) => {
    const colorTokens = generateColorTokens(brand);
    return {
      ...borderRadius,
      ...fontSizes,
      ...lineHeights,
      ...fontFamilies,
      ...fontWeights,
      ...strokeWidths,
      ...horizontalSpacings,
      ...verticalSpacings,
      ...durations,
      ...curves,
      ...colorTokens,
      ...colorPaletteTokens,
      ...colorStatusTokens,
      ...createShadowTokens(colorTokens.colorNeutralShadowAmbient, colorTokens.colorNeutralShadowKey),
      ...createShadowTokens(colorTokens.colorBrandShadowAmbient, colorTokens.colorBrandShadowKey, "Brand")
    };
  };

  // node_modules/@fluentui/tokens/lib/global/brandColors.js
  init_define_import_meta_env();
  var brandWeb = {
    10: `#061724`,
    20: `#082338`,
    30: `#0a2e4a`,
    40: `#0c3b5e`,
    50: `#0e4775`,
    60: `#0f548c`,
    70: `#115ea3`,
    80: `#0f6cbd`,
    90: `#2886de`,
    100: `#479ef5`,
    110: `#62abf5`,
    120: `#77b7f7`,
    130: `#96c6fa`,
    140: `#b4d6fa`,
    150: `#cfe4fa`,
    160: `#ebf3fc`
  };

  // node_modules/@fluentui/tokens/lib/themes/web/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/tokens/lib/themes/web/lightTheme.js
  init_define_import_meta_env();
  var webLightTheme = createLightTheme(brandWeb);

  // node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProvider.js
  var React29 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProviderThemeStyleTag.js
  init_define_import_meta_env();
  var React28 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProviderStyles.styles.js
  init_define_import_meta_env();
  var fluentProviderClassNames = {
    root: "fui-FluentProvider"
  };
  var useStyles = /* @__PURE__ */ __styles({
    root: {
      sj55zd: "f19n0e5",
      De3pzq: "fxugw4r",
      fsow6f: ["f1o700av", "fes3tcz"],
      Bahqtrf: "fk6fouc",
      Be2twd7: "fkhj508",
      Bhrd7zp: "figsok6",
      Bg96gwp: "f1i3iumi"
    }
  }, {
    d: [".f19n0e5{color:var(--colorNeutralForeground1);}", ".fxugw4r{background-color:var(--colorNeutralBackground1);}", ".f1o700av{text-align:left;}", ".fes3tcz{text-align:right;}", ".fk6fouc{font-family:var(--fontFamilyBase);}", ".fkhj508{font-size:var(--fontSizeBase300);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".f1i3iumi{line-height:var(--lineHeightBase300);}"]
  });
  var useFluentProviderStyles_unstable = (state) => {
    "use no memo";
    const renderer = useRenderer();
    const styles = useStyles({
      dir: state.dir,
      renderer
    });
    state.root.className = mergeClasses(fluentProviderClassNames.root, state.themeClassName, styles.root, state.root.className);
    return state;
  };

  // node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProviderThemeStyleTag.js
  var useInsertionEffect3 = React28["useInsertionEffect"] ? React28["useInsertionEffect"] : useIsomorphicLayoutEffect;
  var createStyleTag = (target, elementAttributes) => {
    if (!(target === null || target === void 0 ? void 0 : target.head)) {
      return void 0;
    }
    const tag = target.createElement("style");
    Object.keys(elementAttributes).forEach((attrName) => {
      tag.setAttribute(attrName, elementAttributes[attrName]);
    });
    target.head.appendChild(tag);
    return tag;
  };
  var insertSheet = (tag, rule) => {
    const sheet = tag.sheet;
    if (sheet) {
      if (sheet.cssRules.length > 0) {
        sheet.deleteRule(0);
      }
      sheet.insertRule(rule, 0);
    } else if (true) {
      console.error("FluentProvider: No sheet available on styleTag, styles will not be inserted into DOM.");
    }
  };
  var useFluentProviderThemeStyleTag = (options) => {
    "use no memo";
    const { targetDocument, theme, rendererAttributes } = options;
    const styleTag = React28.useRef(void 0);
    const styleTagId = useId2(fluentProviderClassNames.root);
    const styleElementAttributes = rendererAttributes;
    const rule = React28.useMemo(() => createCSSRuleFromTheme(`.${styleTagId}`, theme), [
      theme,
      styleTagId
    ]);
    if (true) {
      React28.useMemo(() => {
        if (targetDocument) {
          var _styleElement_textContent;
          const providerElementSelector = `.${fluentProviderClassNames.root}.${styleTagId}`;
          const providerElements = targetDocument.querySelectorAll(providerElementSelector);
          const styleElementSelector = `style[id="${styleTagId}"]`;
          const styleElements = targetDocument.querySelectorAll(styleElementSelector);
          if (styleElements.length > 1) {
            console.error([
              "@fluentui/react-provider: We found multiple <style> elements with same IDs in your DOM.",
              "Please make sure that you configured your application properly.",
              "\n",
              "\n",
              "Configuration guide: https://aka.ms/fluentui-conflicting-ids"
            ].join(" "));
            return;
          }
          const styleElement = styleElements.item(0);
          var _styleElement_textContent_length;
          const isSSR = ((_styleElement_textContent_length = styleElement === null || styleElement === void 0 ? void 0 : (_styleElement_textContent = styleElement.textContent) === null || _styleElement_textContent === void 0 ? void 0 : _styleElement_textContent.length) !== null && _styleElement_textContent_length !== void 0 ? _styleElement_textContent_length : 0) > 0;
          const elementsCount = isSSR ? 1 : 0;
          if (providerElements.length > elementsCount) {
            console.error([
              "@fluentui/react-provider: There are conflicting ids in your DOM.",
              "Please make sure that you configured your application properly.",
              "\n",
              "\n",
              "Configuration guide: https://aka.ms/fluentui-conflicting-ids"
            ].join(" "));
          }
        }
      }, []);
    }
    useHandleSSRStyleElements(targetDocument, styleTagId);
    useInsertionEffect3(() => {
      const ssrStyleElement = targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.getElementById(styleTagId);
      if (ssrStyleElement) {
        styleTag.current = ssrStyleElement;
      } else {
        styleTag.current = createStyleTag(targetDocument, {
          ...styleElementAttributes,
          id: styleTagId
        });
        if (styleTag.current) {
          insertSheet(styleTag.current, rule);
        }
      }
      return () => {
        var _styleTag_current;
        (_styleTag_current = styleTag.current) === null || _styleTag_current === void 0 ? void 0 : _styleTag_current.remove();
      };
    }, [
      styleTagId,
      targetDocument,
      rule,
      styleElementAttributes
    ]);
    return {
      styleTagId,
      rule
    };
  };
  function useHandleSSRStyleElements(targetDocument, styleTagId) {
    React28.useState(() => {
      if (!targetDocument) {
        return;
      }
      const themeStyleElement = targetDocument.getElementById(styleTagId);
      if (themeStyleElement) {
        targetDocument.head.append(themeStyleElement);
      }
    });
  }

  // node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProvider.js
  var DEFAULT_STYLE_HOOKS = {};
  var DEFAULT_RENDERER_ATTRIBUTES = {};
  var useFluentProvider_unstable = (props, ref) => {
    "use no memo";
    const parentContext = useFluent();
    const parentTheme = useTheme();
    const parentOverrides = useOverrides();
    const parentCustomStyleHooks = React29.useContext(CustomStyleHooksContext) || DEFAULT_STYLE_HOOKS;
    const {
      applyStylesToPortals = true,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      customStyleHooks_unstable,
      dir = parentContext.dir,
      targetDocument = parentContext.targetDocument,
      theme,
      overrides_unstable: overrides = {}
    } = props;
    const mergedTheme = shallowMerge(parentTheme, theme);
    const mergedOverrides = shallowMerge(parentOverrides, overrides);
    const mergedCustomStyleHooks = shallowMerge(parentCustomStyleHooks, customStyleHooks_unstable);
    const renderer = useRenderer();
    var _renderer_styleElementAttributes;
    const { styleTagId, rule } = useFluentProviderThemeStyleTag({
      theme: mergedTheme,
      targetDocument,
      rendererAttributes: (_renderer_styleElementAttributes = renderer.styleElementAttributes) !== null && _renderer_styleElementAttributes !== void 0 ? _renderer_styleElementAttributes : DEFAULT_RENDERER_ATTRIBUTES
    });
    if (true) {
      React29.useEffect(() => {
        if (mergedTheme === void 0) {
          console.warn([
            '@fluentui/react-provider: FluentProvider does not have your "theme" defined.',
            "Make sure that your top-level FluentProvider has set a `theme` prop or you're setting the theme in your child FluentProvider."
          ].join(" "));
        }
      }, []);
    }
    return {
      applyStylesToPortals,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      customStyleHooks_unstable: mergedCustomStyleHooks,
      dir,
      targetDocument,
      theme: mergedTheme,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      overrides_unstable: mergedOverrides,
      themeClassName: styleTagId,
      components: {
        root: "div"
      },
      root: slot_exports.always(getIntrinsicElementProps("div", {
        ...props,
        dir,
        // FIXME:
        // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
        // but since it would be a breaking change to fix it, we are casting ref to it's proper type
        ref: useMergedRefs(ref, useFocusVisible({
          targetDocument
        }))
      }), {
        elementType: "div"
      }),
      serverStyleProps: {
        cssRule: rule,
        attributes: {
          ...renderer.styleElementAttributes,
          id: styleTagId
        }
      }
    };
  };
  function shallowMerge(a, b) {
    if (a && b) {
      return {
        ...a,
        ...b
      };
    }
    if (a) {
      return a;
    }
    return b;
  }
  function useTheme() {
    return React29.useContext(ThemeContext);
  }

  // node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProviderContextValues.js
  init_define_import_meta_env();
  var React30 = __toESM(require_react_shim());
  function useFluentProviderContextValues_unstable(state) {
    const {
      applyStylesToPortals,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      customStyleHooks_unstable,
      dir,
      root,
      targetDocument,
      theme,
      themeClassName,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      overrides_unstable
    } = state;
    const provider = React30.useMemo(() => ({
      dir,
      targetDocument
    }), [
      dir,
      targetDocument
    ]);
    const [tooltip] = React30.useState(() => ({}));
    const iconDirection = React30.useMemo(() => ({
      textDirection: dir
    }), [
      dir
    ]);
    return {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      customStyleHooks_unstable,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      overrides_unstable,
      provider,
      textDirection: dir,
      iconDirection,
      tooltip,
      theme,
      themeClassName: applyStylesToPortals ? root.className : themeClassName
    };
  }

  // node_modules/@fluentui/react-provider/lib/components/FluentProvider/FluentProvider.js
  var FluentProvider = /* @__PURE__ */ React31.forwardRef((props, ref) => {
    const state = useFluentProvider_unstable(props, ref);
    useFluentProviderStyles_unstable(state);
    const contextValues = useFluentProviderContextValues_unstable(state);
    return renderFluentProvider_unstable(state, contextValues);
  });
  FluentProvider.displayName = "FluentProvider";

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
  var Tab = "Tab";
  var ArrowDown = "ArrowDown";
  var ArrowUp = "ArrowUp";
  var Delete = "Delete";
  var Escape = "Escape";

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

  // node_modules/@fluentui/react-icons/lib/utils/createFluentIcon.js
  init_define_import_meta_env();
  var React32 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-icons/lib/utils/useIconState.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-icons/lib/utils/useIconStyles.styles.js
  init_define_import_meta_env();
  var useStyles2 = __styles2({
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
    const styles = useStyles2();
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
    return React32.createElement(tag, { ...attrs, key }, ...children.map(renderSvgNode));
  };
  var createFluentIcon = (displayName, width, pathsOrSvg, options) => {
    const viewBoxWidth = width === "1em" ? "20" : width;
    const colorChildren = typeof pathsOrSvg !== "string" && ((options === null || options === void 0 ? void 0 : options.color) || Array.isArray(pathsOrSvg[0])) ? pathsOrSvg.map(renderSvgNode) : void 0;
    const Icon2 = React32.forwardRef((props, ref) => {
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
        return React32.createElement("svg", { ...state, dangerouslySetInnerHTML: { __html: pathsOrSvg } });
      }
      if (colorChildren) {
        return React32.createElement("svg", state, ...colorChildren);
      }
      return React32.createElement("svg", state, ...pathsOrSvg.map((d) => React32.createElement("path", { d, fill: state.fill })));
    });
    Icon2.displayName = displayName;
    return Icon2;
  };

  // node_modules/@fluentui/react-icons/lib/icons/chunk-10.js
  init_define_import_meta_env();
  var WarningFilled = /* @__PURE__ */ createFluentIcon("WarningFilled", "1em", ["M7.37 3.56a3 3 0 0 1 5.26 0l5.5 10A3 3 0 0 1 15.5 18h-11a3 3 0 0 1-2.63-4.44l5.5-10ZM10 12.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0-6.25a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V7a.5.5 0 0 0-.5-.5Z"]);

  // node_modules/@fluentui/react-icons/lib/icons/chunk-12.js
  init_define_import_meta_env();
  var InfoFilled = /* @__PURE__ */ createFluentIcon("InfoFilled", "1em", ["M18 10a8 8 0 1 0-16 0 8 8 0 0 0 16 0ZM9.5 8.91a.5.5 0 0 1 1 0V13.6a.5.5 0 0 1-1 0V8.9Zm-.25-2.16a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z"]);

  // node_modules/@fluentui/react-icons/lib/icons/chunk-24.js
  init_define_import_meta_env();
  var CheckmarkCircleFilled = /* @__PURE__ */ createFluentIcon("CheckmarkCircleFilled", "1em", ["M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm3.36 5.65a.5.5 0 0 0-.64-.06l-.07.06L9 11.3 7.35 9.65l-.07-.06a.5.5 0 0 0-.7.7l.07.07 2 2 .07.06c.17.11.4.11.56 0l.07-.06 4-4 .07-.08a.5.5 0 0 0-.06-.63Z"]);

  // node_modules/@fluentui/react-icons/lib/icons/chunk-28.js
  init_define_import_meta_env();
  var DiamondDismissFilled = /* @__PURE__ */ createFluentIcon("DiamondDismissFilled", "1em", ["M7.88 1.88a3 3 0 0 1 4.24 0l6 6a3 3 0 0 1 0 4.24l-6 6a3 3 0 0 1-4.24 0l-6-6a3 3 0 0 1 0-4.24l6-6ZM13.1 6.9a.5.5 0 0 0-.7 0L10 9.3 7.6 6.9a.5.5 0 0 0-.7.7L9.3 10l-2.4 2.4a.5.5 0 0 0 .7.7l2.4-2.4 2.4 2.4a.5.5 0 0 0 .7-.7L10.7 10l2.4-2.4a.5.5 0 0 0 0-.7Z"]);

  // node_modules/@fluentui/react-motion/lib/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-motion/lib/motions/motionTokens.js
  init_define_import_meta_env();
  var durations2 = {
    durationUltraFast: 50,
    durationFaster: 100,
    durationFast: 150,
    durationNormal: 200,
    durationGentle: 250,
    durationSlow: 300,
    durationSlower: 400,
    durationUltraSlow: 500
  };
  var curves2 = {
    curveAccelerateMax: "cubic-bezier(0.9,0.1,1,0.2)",
    curveAccelerateMid: "cubic-bezier(1,0,1,1)",
    curveAccelerateMin: "cubic-bezier(0.8,0,0.78,1)",
    curveDecelerateMax: "cubic-bezier(0.1,0.9,0.2,1)",
    curveDecelerateMid: "cubic-bezier(0,0,0,1)",
    curveDecelerateMin: "cubic-bezier(0.33,0,0.1,1)",
    curveEasyEaseMax: "cubic-bezier(0.8,0,0.2,1)",
    curveEasyEase: "cubic-bezier(0.33,0,0.67,1)",
    curveLinear: "cubic-bezier(0,0,1,1)"
  };
  var motionTokens = {
    ...durations2,
    ...curves2
  };

  // node_modules/@fluentui/react-motion/lib/factories/createMotionComponent.js
  init_define_import_meta_env();
  var React38 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-motion/lib/hooks/useAnimateAtoms.js
  init_define_import_meta_env();
  var React33 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-motion/lib/utils/isAnimationRunning.js
  init_define_import_meta_env();
  function isAnimationRunning(animation) {
    if (animation.playState === "running") {
      var _animation_effect;
      if (animation.overallProgress !== void 0) {
        var _animation_overallProgress;
        const overallProgress = (_animation_overallProgress = animation.overallProgress) !== null && _animation_overallProgress !== void 0 ? _animation_overallProgress : 0;
        return overallProgress > 0 && overallProgress < 1;
      }
      var _animation_currentTime;
      const currentTime = Number((_animation_currentTime = animation.currentTime) !== null && _animation_currentTime !== void 0 ? _animation_currentTime : 0);
      var _animation_effect_getTiming_duration;
      const totalTime = Number((_animation_effect_getTiming_duration = (_animation_effect = animation.effect) === null || _animation_effect === void 0 ? void 0 : _animation_effect.getTiming().duration) !== null && _animation_effect_getTiming_duration !== void 0 ? _animation_effect_getTiming_duration : 0);
      return currentTime > 0 && currentTime < totalTime;
    }
    return false;
  }

  // node_modules/@fluentui/react-motion/lib/hooks/useAnimateAtoms.js
  var DEFAULT_ANIMATION_OPTIONS = {
    fill: "forwards"
  };
  var DEFAULT_REDUCED_MOTION_ATOM = {
    duration: 1
  };
  function createHandle(animations) {
    return {
      set playbackRate(rate) {
        animations.forEach((animation) => {
          animation.playbackRate = rate;
        });
      },
      setMotionEndCallbacks(onfinish, oncancel) {
        const promises = animations.map((animation) => {
          return new Promise((resolve, reject) => {
            animation.onfinish = () => resolve();
            animation.oncancel = () => reject();
          });
        });
        Promise.all(promises).then(() => {
          onfinish();
        }).catch(() => {
          oncancel();
        });
      },
      isRunning() {
        return animations.some((animation) => isAnimationRunning(animation));
      },
      dispose: () => {
        animations.length = 0;
      },
      cancel: () => {
        animations.forEach((animation) => {
          animation.cancel();
        });
      },
      pause: () => {
        animations.forEach((animation) => {
          animation.pause();
        });
      },
      play: () => {
        animations.forEach((animation) => {
          animation.play();
        });
      },
      finish: () => {
        animations.forEach((animation) => {
          animation.finish();
        });
      },
      reverse: () => {
        animations.forEach((animation) => {
          animation.reverse();
        });
      }
    };
  }
  function useAnimateAtomsInSupportedEnvironment() {
    var _window_Animation;
    const SUPPORTS_PERSIST = typeof window !== "undefined" && typeof ((_window_Animation = window.Animation) === null || _window_Animation === void 0 ? void 0 : _window_Animation.prototype.persist) === "function";
    return React33.useCallback((element, value, options) => {
      const atoms = Array.isArray(value) ? value : [
        value
      ];
      const { isReducedMotion } = options;
      const animations = atoms.map((motion) => {
        const { keyframes: motionKeyframes, reducedMotion = DEFAULT_REDUCED_MOTION_ATOM, ...params } = motion;
        const { keyframes: reducedMotionKeyframes = motionKeyframes, ...reducedMotionParams } = reducedMotion;
        const animationKeyframes = isReducedMotion ? reducedMotionKeyframes : motionKeyframes;
        const animationParams = {
          ...DEFAULT_ANIMATION_OPTIONS,
          ...params,
          // Use reduced motion overrides (e.g. duration, easing) when reduced motion is enabled
          ...isReducedMotion && reducedMotionParams
        };
        try {
          const animation = element.animate(animationKeyframes, animationParams);
          if (SUPPORTS_PERSIST) {
            animation === null || animation === void 0 ? void 0 : animation.persist();
          } else {
            const resultKeyframe = animationKeyframes[animationKeyframes.length - 1];
            var _element_style;
            Object.assign((_element_style = element.style) !== null && _element_style !== void 0 ? _element_style : {}, resultKeyframe);
          }
          return animation;
        } catch (e) {
          return null;
        }
      }).filter((animation) => !!animation);
      return createHandle(animations);
    }, [
      SUPPORTS_PERSIST
    ]);
  }
  function useAnimateAtoms() {
    "use no memo";
    if (false) {
      return useAnimateAtomsInTestEnvironment();
    }
    return useAnimateAtomsInSupportedEnvironment();
  }

  // node_modules/@fluentui/react-motion/lib/hooks/useMotionImperativeRef.js
  init_define_import_meta_env();
  var React34 = __toESM(require_react_shim());
  function useMotionImperativeRef(imperativeRef) {
    const animationRef = React34.useRef(void 0);
    React34.useImperativeHandle(imperativeRef, () => ({
      setPlayState: (state) => {
        if (state === "running") {
          var _animationRef_current;
          (_animationRef_current = animationRef.current) === null || _animationRef_current === void 0 ? void 0 : _animationRef_current.play();
        }
        if (state === "paused") {
          var _animationRef_current1;
          (_animationRef_current1 = animationRef.current) === null || _animationRef_current1 === void 0 ? void 0 : _animationRef_current1.pause();
        }
      },
      setPlaybackRate: (rate) => {
        if (animationRef.current) {
          animationRef.current.playbackRate = rate;
        }
      }
    }));
    return animationRef;
  }

  // node_modules/@fluentui/react-motion/lib/hooks/useIsReducedMotion.js
  init_define_import_meta_env();
  var React35 = __toESM(require_react_shim());
  var REDUCED_MEDIA_QUERY = "screen and (prefers-reduced-motion: reduce)";
  function useIsReducedMotion() {
    const { targetDocument } = useFluent();
    var _targetDocument_defaultView;
    const targetWindow = (_targetDocument_defaultView = targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.defaultView) !== null && _targetDocument_defaultView !== void 0 ? _targetDocument_defaultView : null;
    const queryValue = React35.useRef(false);
    const isEnabled = React35.useCallback(() => queryValue.current, []);
    useIsomorphicLayoutEffect(() => {
      if (targetWindow === null || typeof targetWindow.matchMedia !== "function") {
        return;
      }
      const queryMatch = targetWindow.matchMedia(REDUCED_MEDIA_QUERY);
      if (queryMatch.matches) {
        queryValue.current = true;
      }
      const matchListener = (e) => {
        queryValue.current = e.matches;
      };
      queryMatch.addEventListener("change", matchListener);
      return () => {
        queryMatch.removeEventListener("change", matchListener);
      };
    }, [
      targetWindow
    ]);
    return isEnabled;
  }

  // node_modules/@fluentui/react-motion/lib/utils/useChildElement.js
  init_define_import_meta_env();
  var React36 = __toESM(require_react_shim());
  var CHILD_ERROR_MESSAGE = [
    "@fluentui/react-motion: Invalid child element.",
    "\n",
    "Motion factories require a single child element to be passed. ",
    "That element element should support ref forwarding i.e. it should be either an intrinsic element (e.g. div) or a component that uses React.forwardRef()."
  ].join("");
  function useChildElement(children, mounted = true) {
    const childRef = React36.useRef(null);
    React36.useEffect(() => {
      if (true) {
        if (mounted && !childRef.current) {
          console.error(CHILD_ERROR_MESSAGE);
        }
      }
    }, [
      mounted
    ]);
    try {
      const child = React36.Children.only(children);
      if (React36.isValidElement(child)) {
        return [
          React36.cloneElement(child, {
            ref: useMergedRefs(childRef, getReactElementRef(child))
          }),
          childRef
        ];
      }
    } catch {
    }
    throw new Error(CHILD_ERROR_MESSAGE);
  }

  // node_modules/@fluentui/react-motion/lib/contexts/MotionBehaviourContext.js
  init_define_import_meta_env();
  var React37 = __toESM(require_react_shim());
  var MotionBehaviourContext = React37.createContext(void 0);
  var MotionBehaviourProvider = MotionBehaviourContext.Provider;
  var useMotionBehaviourContext = () => {
    var _React_useContext;
    return (_React_useContext = React37.useContext(MotionBehaviourContext)) !== null && _React_useContext !== void 0 ? _React_useContext : "default";
  };

  // node_modules/@fluentui/react-motion/lib/factories/createMotionComponent.js
  var MOTION_DEFINITION = /* @__PURE__ */ Symbol("MOTION_DEFINITION");
  function createMotionComponent(value) {
    const Atom = (props) => {
      "use no memo";
      const { children, imperativeRef, onMotionFinish: onMotionFinishProp, onMotionStart: onMotionStartProp, onMotionCancel: onMotionCancelProp, replayKey, ..._rest } = props;
      const params = _rest;
      const [child, childRef] = useChildElement(children);
      const handleRef = useMotionImperativeRef(imperativeRef);
      const isInitialRender = React38.useRef(true);
      const skipMotions = useMotionBehaviourContext() === "skip";
      const optionsRef = React38.useRef({
        skipMotions,
        params
      });
      const animateAtoms = useAnimateAtoms();
      const isReducedMotion = useIsReducedMotion();
      const onMotionStart = useEventCallback(() => {
        onMotionStartProp === null || onMotionStartProp === void 0 ? void 0 : onMotionStartProp(null);
      });
      const onMotionFinish = useEventCallback(() => {
        onMotionFinishProp === null || onMotionFinishProp === void 0 ? void 0 : onMotionFinishProp(null);
      });
      const onMotionCancel = useEventCallback(() => {
        onMotionCancelProp === null || onMotionCancelProp === void 0 ? void 0 : onMotionCancelProp(null);
      });
      const activateAnimationHandle = React38.useCallback((handle) => {
        onMotionStart();
        handle.setMotionEndCallbacks(onMotionFinish, onMotionCancel);
        if (optionsRef.current.skipMotions) {
          handle.finish();
        }
      }, [
        onMotionStart,
        onMotionFinish,
        onMotionCancel
      ]);
      useIsomorphicLayoutEffect(() => {
        optionsRef.current = {
          skipMotions,
          params
        };
      });
      useIsomorphicLayoutEffect(() => {
        const element = childRef.current;
        if (element) {
          const atoms = typeof value === "function" ? value({
            element,
            ...optionsRef.current.params
          }) : value;
          const handle = animateAtoms(element, atoms, {
            isReducedMotion: isReducedMotion()
          });
          handleRef.current = handle;
          activateAnimationHandle(handle);
          return () => {
            handle.cancel();
          };
        }
      }, [
        animateAtoms,
        childRef,
        handleRef,
        isReducedMotion,
        activateAnimationHandle
      ]);
      useIsomorphicLayoutEffect(() => {
        if (isInitialRender.current) {
          return;
        }
        const handle = handleRef.current;
        if (handle) {
          handle.cancel();
          handle.play();
          activateAnimationHandle(handle);
        }
      }, [
        replayKey
      ]);
      useIsomorphicLayoutEffect(() => {
        isInitialRender.current = false;
        return () => {
          isInitialRender.current = true;
        };
      }, []);
      return child;
    };
    return Object.assign(Atom, {
      // Heads up!
      // Always normalize it to a function to simplify types
      [MOTION_DEFINITION]: typeof value === "function" ? value : () => value
    });
  }

  // node_modules/@fluentui/react-motion/lib/factories/createPresenceComponent.js
  init_define_import_meta_env();
  var React41 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-motion/lib/contexts/PresenceGroupChildContext.js
  init_define_import_meta_env();
  var React39 = __toESM(require_react_shim());
  var PresenceGroupChildContext = React39.createContext(void 0);
  var PresenceGroupChildProvider = PresenceGroupChildContext.Provider;

  // node_modules/@fluentui/react-motion/lib/hooks/useMountedState.js
  init_define_import_meta_env();
  var React40 = __toESM(require_react_shim());
  function useMountedState(visible = false, unmountOnExit = false) {
    const mountedRef = React40.useRef(unmountOnExit ? visible : true);
    const forceUpdate = useForceUpdate();
    const setMounted = React40.useCallback((newValue) => {
      if (mountedRef.current !== newValue) {
        mountedRef.current = newValue;
        forceUpdate();
      }
    }, [
      forceUpdate
    ]);
    React40.useEffect(() => {
      if (visible) {
        mountedRef.current = visible;
      }
    });
    return [
      visible || mountedRef.current,
      setMounted
    ];
  }

  // node_modules/@fluentui/react-motion/lib/factories/createPresenceComponent.js
  var PRESENCE_MOTION_DEFINITION = /* @__PURE__ */ Symbol("PRESENCE_MOTION_DEFINITION");
  var INTERRUPTABLE_MOTION_SYMBOL = /* @__PURE__ */ Symbol.for("interruptablePresence");
  function createPresenceComponent(value) {
    return Object.assign((props) => {
      "use no memo";
      const itemContext = React41.useContext(PresenceGroupChildContext);
      const merged = {
        ...itemContext,
        ...props
      };
      const skipMotions = useMotionBehaviourContext() === "skip";
      const { appear, children, imperativeRef, onExit, onMotionFinish, onMotionStart, onMotionCancel, visible, unmountOnExit, ..._rest } = merged;
      const params = _rest;
      const [mounted, setMounted] = useMountedState(visible, unmountOnExit);
      const [child, childRef] = useChildElement(children, mounted);
      const handleRef = useMotionImperativeRef(imperativeRef);
      const optionsRef = React41.useRef({
        appear,
        params,
        skipMotions
      });
      const animateAtoms = useAnimateAtoms();
      const isFirstMount = useFirstMount();
      const isReducedMotion = useIsReducedMotion();
      const handleMotionStart = useEventCallback((direction) => {
        onMotionStart === null || onMotionStart === void 0 ? void 0 : onMotionStart(null, {
          direction
        });
      });
      const handleMotionFinish = useEventCallback((direction) => {
        onMotionFinish === null || onMotionFinish === void 0 ? void 0 : onMotionFinish(null, {
          direction
        });
        if (direction === "exit" && unmountOnExit) {
          setMounted(false);
          onExit === null || onExit === void 0 ? void 0 : onExit();
        }
      });
      const handleMotionCancel = useEventCallback((direction) => {
        onMotionCancel === null || onMotionCancel === void 0 ? void 0 : onMotionCancel(null, {
          direction
        });
      });
      useIsomorphicLayoutEffect(() => {
        optionsRef.current = {
          appear,
          params,
          skipMotions
        };
      });
      useIsomorphicLayoutEffect(
        () => {
          const element = childRef.current;
          if (!element) {
            return;
          }
          let handle;
          function cleanup() {
            if (!handle) {
              return;
            }
            if (IS_EXPERIMENTAL_INTERRUPTIBLE_MOTION && handle.isRunning()) {
              return;
            }
            handle.cancel();
            handleRef.current = void 0;
          }
          const presenceMotion = typeof value === "function" ? value({
            element,
            ...optionsRef.current.params
          }) : value;
          const IS_EXPERIMENTAL_INTERRUPTIBLE_MOTION = presenceMotion[INTERRUPTABLE_MOTION_SYMBOL];
          if (IS_EXPERIMENTAL_INTERRUPTIBLE_MOTION) {
            handle = handleRef.current;
            if (handle && handle.isRunning()) {
              handle.reverse();
              return cleanup;
            }
          }
          const atoms = visible ? presenceMotion.enter : presenceMotion.exit;
          const direction = visible ? "enter" : "exit";
          const applyInitialStyles = !optionsRef.current.appear && isFirstMount;
          const skipAnimationByConfig = optionsRef.current.skipMotions;
          if (!applyInitialStyles) {
            handleMotionStart(direction);
          }
          handle = animateAtoms(element, atoms, {
            isReducedMotion: isReducedMotion()
          });
          if (applyInitialStyles) {
            handle.finish();
            return cleanup;
          }
          handleRef.current = handle;
          handle.setMotionEndCallbacks(() => handleMotionFinish(direction), () => handleMotionCancel(direction));
          if (skipAnimationByConfig) {
            handle.finish();
          }
          return cleanup;
        },
        // Excluding `isFirstMount` from deps to prevent re-triggering the animation on subsequent renders
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [
          animateAtoms,
          childRef,
          handleRef,
          isReducedMotion,
          handleMotionFinish,
          handleMotionStart,
          handleMotionCancel,
          visible
        ]
      );
      React41.useEffect(() => {
        if (unmountOnExit && !mounted) {
          var _handleRef_current;
          (_handleRef_current = handleRef.current) === null || _handleRef_current === void 0 ? void 0 : _handleRef_current.dispose();
        }
      }, [
        handleRef,
        unmountOnExit,
        mounted
      ]);
      if (mounted) {
        return child;
      }
      return null;
    }, {
      // Heads up!
      // Always normalize it to a function to simplify types
      [PRESENCE_MOTION_DEFINITION]: typeof value === "function" ? value : () => value
    }, {
      // Wrap `enter` in its own motion component as a static method, e.g. <Fade.In>
      In: createMotionComponent(
        // If we have a motion function, wrap it to forward the runtime params and pick `enter`.
        // Otherwise, pass the `enter` motion object directly.
        typeof value === "function" ? (...args) => value(...args).enter : value.enter
      ),
      // Wrap `exit` in its own motion component as a static method, e.g. <Fade.Out>
      Out: createMotionComponent(
        // If we have a motion function, wrap it to forward the runtime params and pick `exit`.
        // Otherwise, pass the `exit` motion object directly.
        typeof value === "function" ? (...args) => value(...args).exit : value.exit
      )
    });
  }

  // node_modules/@fluentui/react-motion/lib/factories/createPresenceComponentVariant.js
  init_define_import_meta_env();
  function createPresenceFnVariant(presenceFn, variantParams) {
    const variantFn = (runtimeParams) => presenceFn({
      ...variantParams,
      ...runtimeParams
    });
    return variantFn;
  }
  function createPresenceComponentVariant(component, variantParams) {
    const originalFn = component[PRESENCE_MOTION_DEFINITION];
    const variantFn = createPresenceFnVariant(originalFn, variantParams);
    return createPresenceComponent(variantFn);
  }

  // node_modules/@fluentui/react-motion-components-preview/lib/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-motion-components-preview/lib/components/Collapse/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-motion-components-preview/lib/components/Collapse/Collapse.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-motion-components-preview/lib/components/Collapse/collapse-atoms.js
  init_define_import_meta_env();
  var sizeValuesForOrientation = (orientation, element) => {
    const sizeName = orientation === "horizontal" ? "maxWidth" : "maxHeight";
    const overflowName = orientation === "horizontal" ? "overflowX" : "overflowY";
    const measuredSize = orientation === "horizontal" ? element.scrollWidth : element.scrollHeight;
    const toSize = `${measuredSize}px`;
    return {
      sizeName,
      overflowName,
      toSize
    };
  };
  var sizeEnterAtom = ({ orientation, duration, easing, element, outSize = "0", delay = 0 }) => {
    const { sizeName, overflowName, toSize } = sizeValuesForOrientation(orientation, element);
    return {
      keyframes: [
        {
          [sizeName]: outSize,
          [overflowName]: "hidden"
        },
        {
          [sizeName]: toSize,
          offset: 0.9999,
          [overflowName]: "hidden"
        },
        {
          [sizeName]: "unset",
          [overflowName]: "unset"
        }
      ],
      duration,
      easing,
      delay,
      fill: "both"
    };
  };
  var sizeExitAtom = ({ orientation, duration, easing, element, delay = 0, outSize = "0" }) => {
    const { sizeName, overflowName, toSize } = sizeValuesForOrientation(orientation, element);
    return {
      keyframes: [
        {
          [sizeName]: toSize,
          [overflowName]: "hidden"
        },
        {
          [sizeName]: outSize,
          [overflowName]: "hidden"
        }
      ],
      duration,
      easing,
      delay,
      fill: "both"
    };
  };
  var whitespaceValuesForOrientation = (orientation) => {
    if (orientation === "horizontal") {
      return {
        paddingStart: "paddingInlineStart",
        paddingEnd: "paddingInlineEnd",
        marginStart: "marginInlineStart",
        marginEnd: "marginInlineEnd"
      };
    }
    return {
      paddingStart: "paddingBlockStart",
      paddingEnd: "paddingBlockEnd",
      marginStart: "marginBlockStart",
      marginEnd: "marginBlockEnd"
    };
  };
  var whitespaceAtom = ({ direction, orientation, duration, easing, delay = 0 }) => {
    const { paddingStart, paddingEnd, marginStart, marginEnd } = whitespaceValuesForOrientation(orientation);
    const offset = direction === "enter" ? 0 : 1;
    const keyframes = [
      {
        [paddingStart]: "0",
        [paddingEnd]: "0",
        [marginStart]: "0",
        [marginEnd]: "0",
        offset
      }
    ];
    return {
      keyframes,
      duration,
      easing,
      delay,
      fill: "both"
    };
  };

  // node_modules/@fluentui/react-motion-components-preview/lib/atoms/fade-atom.js
  init_define_import_meta_env();
  var fadeAtom = ({ direction, duration, easing = motionTokens.curveLinear, delay = 0, outOpacity = 0, inOpacity = 1 }) => {
    const keyframes = [
      {
        opacity: outOpacity
      },
      {
        opacity: inOpacity
      }
    ];
    if (direction === "exit") {
      keyframes.reverse();
    }
    return {
      keyframes,
      duration,
      easing,
      delay,
      // Applying opacity backwards and forwards in time is important
      // to avoid a bug where a delayed animation is not hidden when it should be.
      fill: "both"
    };
  };

  // node_modules/@fluentui/react-motion-components-preview/lib/components/Collapse/Collapse.js
  var collapsePresenceFn = ({
    element,
    // Primary duration controls (simple API)
    duration = motionTokens.durationNormal,
    exitDuration = duration,
    // Granular duration controls with smart defaults (advanced API)
    sizeDuration = duration,
    opacityDuration = sizeDuration,
    exitSizeDuration = exitDuration,
    exitOpacityDuration = exitSizeDuration,
    // Other timing controls
    easing = motionTokens.curveEasyEaseMax,
    delay = 0,
    exitEasing = easing,
    exitDelay = delay,
    staggerDelay = 0,
    exitStaggerDelay = staggerDelay,
    // Animation controls
    animateOpacity = true,
    orientation = "vertical",
    outSize = "0px"
  }) => {
    const enterAtoms = [
      // Apply global delay to size atom - size expansion starts first
      sizeEnterAtom({
        orientation,
        duration: sizeDuration,
        easing,
        element,
        outSize,
        delay
      }),
      whitespaceAtom({
        direction: "enter",
        orientation,
        duration: sizeDuration,
        easing,
        delay
      })
    ];
    if (animateOpacity) {
      enterAtoms.push(fadeAtom({
        direction: "enter",
        duration: opacityDuration,
        easing,
        delay: delay + staggerDelay
      }));
    }
    const exitAtoms = [];
    if (animateOpacity) {
      exitAtoms.push(fadeAtom({
        direction: "exit",
        duration: exitOpacityDuration,
        easing: exitEasing,
        delay: exitDelay
      }));
    }
    exitAtoms.push(sizeExitAtom({
      orientation,
      duration: exitSizeDuration,
      easing: exitEasing,
      element,
      delay: exitDelay + exitStaggerDelay,
      outSize
    }), whitespaceAtom({
      direction: "exit",
      orientation,
      duration: exitSizeDuration,
      easing: exitEasing,
      delay: exitDelay + exitStaggerDelay
    }));
    return {
      enter: enterAtoms,
      exit: exitAtoms
    };
  };
  var Collapse = createPresenceComponent(collapsePresenceFn);
  var CollapseSnappy = createPresenceComponentVariant(Collapse, {
    duration: motionTokens.durationFast
  });
  var CollapseRelaxed = createPresenceComponentVariant(Collapse, {
    duration: motionTokens.durationSlower
  });
  var CollapseDelayed = createPresenceComponentVariant(Collapse, {
    // Enter timing per motion design spec
    sizeDuration: motionTokens.durationNormal,
    opacityDuration: motionTokens.durationSlower,
    staggerDelay: motionTokens.durationNormal,
    // Exit timing per motion design spec
    exitSizeDuration: motionTokens.durationNormal,
    exitOpacityDuration: motionTokens.durationSlower,
    exitStaggerDelay: motionTokens.durationSlower,
    // Easing per motion design spec
    easing: motionTokens.curveEasyEase,
    exitEasing: motionTokens.curveEasyEase
  });

  // node_modules/@fluentui/react-portal/lib/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-portal/lib/components/Portal/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-portal/lib/components/Portal/Portal.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-portal/lib/components/Portal/usePortal.js
  init_define_import_meta_env();
  var React43 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-portal/lib/utils/toMountNodeProps.js
  init_define_import_meta_env();
  function toMountNodeProps(mountNode) {
    if (isHTMLElement(mountNode)) {
      return {
        element: mountNode
      };
    }
    if (typeof mountNode === "object") {
      if (mountNode === null) {
        return {
          element: null
        };
      }
      return mountNode;
    }
    return {};
  }

  // node_modules/@fluentui/react-portal/lib/components/Portal/usePortalMountNode.js
  init_define_import_meta_env();
  var React42 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-portal/lib/components/Portal/usePortalMountNodeStyles.styles.js
  init_define_import_meta_env();
  var usePortalMountNodeStylesStyles = /* @__PURE__ */ __styles2({
    root: {
      qhf8xq: "f1euv43f",
      Bhzewxz: "f15twtuk",
      oyh7mz: ["f1vgc2s3", "f1e31b4d"],
      j35jbq: ["f1e31b4d", "f1vgc2s3"],
      Bj3rh1h: "f494woh"
    }
  }, {
    d: [".f1euv43f{position:absolute;}", ".f15twtuk{top:0;}", ".f1vgc2s3{left:0;}", ".f1e31b4d{right:0;}", ".f494woh{z-index:1000000;}"]
  });

  // node_modules/@fluentui/react-portal/lib/components/Portal/usePortalMountNode.js
  var useInsertionEffect5 = React42["useInsertionEffect"];
  var useLegacyElementFactory = (options) => {
    "use no memo";
    const { className, dir, focusVisibleRef, targetNode } = options;
    const targetElement = React42.useMemo(() => {
      if (targetNode === void 0 || options.disabled) {
        return null;
      }
      const element = targetNode.ownerDocument.createElement("div");
      targetNode.appendChild(element);
      return element;
    }, [
      targetNode,
      options.disabled
    ]);
    React42.useMemo(() => {
      if (!targetElement) {
        return;
      }
      targetElement.className = className;
      targetElement.setAttribute("dir", dir);
      targetElement.setAttribute("data-portal-node", "true");
      focusVisibleRef.current = targetElement;
    }, [
      className,
      dir,
      targetElement,
      focusVisibleRef
    ]);
    React42.useEffect(() => {
      return () => {
        targetElement === null || targetElement === void 0 ? void 0 : targetElement.remove();
      };
    }, [
      targetElement
    ]);
    return targetElement;
  };
  var initializeElementFactory = () => {
    let currentElement = void 0;
    function get(targetRoot, forceCreation) {
      if (currentElement) {
        return currentElement;
      }
      if (forceCreation) {
        currentElement = targetRoot.ownerDocument.createElement("div");
        targetRoot.appendChild(currentElement);
      }
      return currentElement;
    }
    function dispose() {
      if (currentElement) {
        currentElement.remove();
        currentElement = void 0;
      }
    }
    return {
      get,
      dispose
    };
  };
  var useModernElementFactory = (options) => {
    "use no memo";
    const { className, dir, focusVisibleRef, targetNode } = options;
    const [elementFactory] = React42.useState(initializeElementFactory);
    const elementProxy = React42.useMemo(() => {
      if (targetNode === void 0 || options.disabled) {
        return null;
      }
      return new Proxy({}, {
        get(_, property) {
          if (property === "nodeType") {
            return 1;
          }
          if (property === "remove") {
            const targetElement2 = elementFactory.get(targetNode, false);
            if (targetElement2) {
              const portalHasNoChildren = targetElement2.childNodes.length === 0;
              if (portalHasNoChildren) {
                elementFactory.dispose();
              }
            }
            return () => {
            };
          }
          const targetElement = elementFactory.get(targetNode, true);
          const targetProperty = targetElement ? targetElement[property] : void 0;
          if (typeof targetProperty === "function") {
            return targetProperty.bind(targetElement);
          }
          return targetProperty;
        },
        set(_, property, value) {
          const ignoredProperty = property === "_virtual" || property === "focusVisible";
          const targetElement = ignoredProperty ? elementFactory.get(targetNode, false) : elementFactory.get(targetNode, true);
          if (ignoredProperty && !targetElement) {
            return true;
          }
          if (targetElement) {
            Object.assign(targetElement, {
              [property]: value
            });
            return true;
          }
          return false;
        }
      });
    }, [
      elementFactory,
      targetNode,
      options.disabled
    ]);
    useInsertionEffect5(() => {
      if (!elementProxy) {
        return;
      }
      const classesToApply = className.split(" ").filter(Boolean);
      elementProxy.classList.add(...classesToApply);
      elementProxy.setAttribute("dir", dir);
      elementProxy.setAttribute("data-portal-node", "true");
      focusVisibleRef.current = elementProxy;
      return () => {
        elementProxy.classList.remove(...classesToApply);
        elementProxy.removeAttribute("dir");
      };
    }, [
      className,
      dir,
      elementProxy,
      focusVisibleRef
    ]);
    React42.useEffect(() => {
      return () => {
        elementProxy === null || elementProxy === void 0 ? void 0 : elementProxy.remove();
      };
    }, [
      elementProxy
    ]);
    return elementProxy;
  };
  var useElementFactory = useInsertionEffect5 ? useModernElementFactory : useLegacyElementFactory;
  var usePortalMountNode2 = (options) => {
    "use no memo";
    const { targetDocument, dir } = useFluent();
    const mountNode = usePortalMountNode();
    const focusVisibleRef = useFocusVisible();
    const classes = usePortalMountNodeStylesStyles();
    const themeClassName = useThemeClassName();
    const factoryOptions = {
      dir,
      disabled: options.disabled,
      focusVisibleRef,
      className: mergeClasses(themeClassName, classes.root, options.className),
      targetNode: mountNode !== null && mountNode !== void 0 ? mountNode : targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.body
    };
    return useElementFactory(factoryOptions);
  };

  // node_modules/@fluentui/react-portal/lib/components/Portal/usePortal.js
  var usePortal_unstable = (props) => {
    const { element, className } = toMountNodeProps(props.mountNode);
    const virtualParentRootRef = React43.useRef(null);
    const fallbackElement = usePortalMountNode2({
      disabled: !!element,
      className
    });
    const mountNode = element !== null && element !== void 0 ? element : fallbackElement;
    const state = {
      children: props.children,
      mountNode,
      virtualParentRootRef
    };
    React43.useEffect(() => {
      if (!mountNode) {
        return;
      }
      const virtualParent = virtualParentRootRef.current;
      const isVirtualParentInsideChild = mountNode.contains(virtualParent);
      if (virtualParent && !isVirtualParentInsideChild) {
        setVirtualParent(mountNode, virtualParent);
        return () => {
          setVirtualParent(mountNode, void 0);
        };
      }
    }, [
      virtualParentRootRef,
      mountNode
    ]);
    return state;
  };

  // node_modules/@fluentui/react-portal/lib/components/Portal/renderPortal.js
  init_define_import_meta_env();
  var ReactDOM = __toESM(require_react_dom_shim());
  var React44 = __toESM(require_react_shim());
  var renderPortal_unstable = (state) => {
    return /* @__PURE__ */ React44.createElement("span", {
      hidden: true,
      ref: state.virtualParentRootRef
    }, state.mountNode && /* @__PURE__ */ ReactDOM.createPortal(/* @__PURE__ */ React44.createElement(React44.Fragment, null, state.children, /* @__PURE__ */ React44.createElement("span", {
      hidden: true
    })), state.mountNode));
  };

  // node_modules/@fluentui/react-portal/lib/components/Portal/Portal.js
  var Portal = (props) => {
    const state = usePortal_unstable(props);
    return renderPortal_unstable(state);
  };
  Portal.displayName = "Portal";

  // node_modules/@fluentui/react-button/lib/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-button/lib/Button.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-button/lib/components/Button/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-button/lib/components/Button/Button.js
  init_define_import_meta_env();
  var React46 = __toESM(require_react_shim());

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

  // node_modules/@fluentui/react-button/lib/contexts/ButtonContext.js
  init_define_import_meta_env();
  var React45 = __toESM(require_react_shim());
  var buttonContext = React45.createContext(void 0);
  var buttonContextDefaultValue = {};
  var ButtonContextProvider = buttonContext.Provider;
  var useButtonContext = () => {
    var _React_useContext;
    return (_React_useContext = React45.useContext(buttonContext)) !== null && _React_useContext !== void 0 ? _React_useContext : buttonContextDefaultValue;
  };

  // node_modules/@fluentui/react-button/lib/components/Button/useButton.js
  var useButton_unstable = (props, ref) => {
    const { size: contextSize } = useButtonContext();
    const { appearance = "secondary", shape = "rounded", size = contextSize !== null && contextSize !== void 0 ? contextSize : "medium", ...buttonProps } = props;
    const state = useButtonBase_unstable(buttonProps, ref);
    return {
      appearance,
      shape,
      size,
      ...state
    };
  };
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

  // node_modules/@fluentui/react-button/lib/components/Button/Button.js
  var Button = /* @__PURE__ */ React46.forwardRef((props, ref) => {
    const state = useButton_unstable(props, ref);
    useButtonStyles_unstable(state);
    useCustomStyleHook("useButtonStyles_unstable")(state);
    return renderButton_unstable(state);
  });
  Button.displayName = "Button";

  // node_modules/@fluentui/react-toast/lib/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toast/lib/state/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toast/lib/state/useToaster.js
  init_define_import_meta_env();
  var React48 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-toast/lib/state/vanilla/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toast/lib/state/vanilla/dispatchToast.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toast/lib/state/constants.js
  init_define_import_meta_env();
  var EVENTS = {
    show: "fui-toast-show",
    dismiss: "fui-toast-dismiss",
    dismissAll: "fui-toast-dismiss-all",
    update: "fui-toast-update",
    pause: "fui-toast-pause",
    play: "fui-toast-play"
  };
  var TOAST_POSITIONS = {
    bottom: "bottom",
    bottomEnd: "bottom-end",
    bottomStart: "bottom-start",
    top: "top",
    topEnd: "top-end",
    topStart: "top-start"
  };

  // node_modules/@fluentui/react-toast/lib/state/vanilla/dispatchToast.js
  var counter = 0;
  function dispatchToast(content, options = {}, targetDocument) {
    var _options_toastId;
    const detail = {
      ...options,
      content,
      toastId: (_options_toastId = options.toastId) !== null && _options_toastId !== void 0 ? _options_toastId : (counter++).toString()
    };
    const event = new CustomEvent(EVENTS.show, {
      bubbles: false,
      cancelable: false,
      detail
    });
    targetDocument.dispatchEvent(event);
  }

  // node_modules/@fluentui/react-toast/lib/state/vanilla/dismissToast.js
  init_define_import_meta_env();
  function dismissToast(toastId, toasterId = void 0, targetDocument) {
    const event = new CustomEvent(EVENTS.dismiss, {
      bubbles: false,
      cancelable: false,
      detail: {
        toastId,
        toasterId
      }
    });
    targetDocument.dispatchEvent(event);
  }

  // node_modules/@fluentui/react-toast/lib/state/vanilla/dismissAllToasts.js
  init_define_import_meta_env();
  function dismissAllToasts(toasterId = void 0, targetDocument) {
    const event = new CustomEvent(EVENTS.dismissAll, {
      bubbles: false,
      cancelable: false,
      detail: {
        toasterId
      }
    });
    targetDocument.dispatchEvent(event);
  }

  // node_modules/@fluentui/react-toast/lib/state/vanilla/updateToast.js
  init_define_import_meta_env();
  function updateToast(options, targetDocument) {
    const event = new CustomEvent(EVENTS.update, {
      bubbles: false,
      cancelable: false,
      detail: options
    });
    targetDocument.dispatchEvent(event);
  }

  // node_modules/@fluentui/react-toast/lib/state/vanilla/pauseToast.js
  init_define_import_meta_env();
  function pauseToast(toastId, toasterId = void 0, targetDocument) {
    const event = new CustomEvent(EVENTS.pause, {
      bubbles: false,
      cancelable: false,
      detail: {
        toastId,
        toasterId
      }
    });
    targetDocument.dispatchEvent(event);
  }

  // node_modules/@fluentui/react-toast/lib/state/vanilla/playToast.js
  init_define_import_meta_env();
  function playToast(toastId, toasterId = void 0, targetDocument) {
    const event = new CustomEvent(EVENTS.play, {
      bubbles: false,
      cancelable: false,
      detail: {
        toastId,
        toasterId
      }
    });
    targetDocument.dispatchEvent(event);
  }

  // node_modules/@fluentui/react-toast/lib/state/vanilla/createToaster.js
  init_define_import_meta_env();
  var React47 = __toESM(require_react_shim());
  function assignDefined(a, b) {
    for (const [key, prop] of Object.entries(b)) {
      if (prop != void 0) {
        a[key] = prop;
      }
    }
  }
  var defaulToastOptions = {
    onStatusChange: void 0,
    priority: 0,
    pauseOnHover: false,
    pauseOnWindowBlur: false,
    position: "bottom-end",
    timeout: 3e3
  };
  var counter2 = 0;
  function createToaster(options) {
    const { limit = Number.POSITIVE_INFINITY } = options;
    const visibleToasts = /* @__PURE__ */ new Set();
    const toasts = /* @__PURE__ */ new Map();
    const queue = createPriorityQueue((ta, tb) => {
      const a = toasts.get(ta);
      const b = toasts.get(tb);
      if (!a || !b) {
        return 0;
      }
      if (a.priority === b.priority) {
        return a.order - b.order;
      }
      return a.priority - b.priority;
    });
    const isToastVisible = (toastId) => {
      return visibleToasts.has(toastId);
    };
    const updateToast2 = (toastOptions) => {
      const { toastId } = toastOptions;
      const toastToUpdate = toasts.get(toastId);
      if (!toastToUpdate) {
        return;
      }
      Object.assign(toastToUpdate, toastOptions);
      toastToUpdate.updateId++;
    };
    const dismissToast2 = (toastId) => {
      visibleToasts.delete(toastId);
    };
    const dismissAllToasts2 = () => {
      visibleToasts.clear();
      queue.clear();
    };
    const buildToast = (toastOptions, onUpdate) => {
      var _toast_onStatusChange;
      const { toastId, content, toasterId } = toastOptions;
      if (toasts.has(toastId)) {
        return;
      }
      const close = () => {
        var _toast_onStatusChange2;
        const toast2 = toasts.get(toastId);
        if (!toast2) {
          return;
        }
        visibleToasts.delete(toastId);
        onUpdate();
        (_toast_onStatusChange2 = toast2.onStatusChange) === null || _toast_onStatusChange2 === void 0 ? void 0 : _toast_onStatusChange2.call(toast2, null, {
          status: "dismissed",
          ...toast2
        });
      };
      const remove = () => {
        const toast2 = toasts.get(toastId);
        if (!toast2) {
          return;
        }
        toasts.delete(toastId);
        if (visibleToasts.size < limit && queue.peek()) {
          const nextToast = toasts.get(queue.dequeue());
          if (!nextToast) {
            return;
          }
          visibleToasts.add(nextToast.toastId);
        }
        onUpdate();
      };
      const toast = {
        ...defaulToastOptions,
        close,
        remove,
        toastId,
        content,
        updateId: 0,
        toasterId,
        order: counter2++,
        data: {},
        imperativeRef: React47.createRef()
      };
      assignDefined(toast, options);
      assignDefined(toast, toastOptions);
      toasts.set(toastId, toast);
      (_toast_onStatusChange = toast.onStatusChange) === null || _toast_onStatusChange === void 0 ? void 0 : _toast_onStatusChange.call(toast, null, {
        status: "queued",
        ...toast
      });
      if (visibleToasts.size >= limit) {
        queue.enqueue(toastId);
      } else {
        visibleToasts.add(toastId);
      }
    };
    return {
      buildToast,
      dismissAllToasts: dismissAllToasts2,
      dismissToast: dismissToast2,
      isToastVisible,
      updateToast: updateToast2,
      visibleToasts,
      toasts
    };
  }

  // node_modules/@fluentui/react-toast/lib/state/vanilla/getPositionStyles.js
  init_define_import_meta_env();
  var getPositionStyles = (position, dir, offset) => {
    const positionStyles = {};
    var _offset_position;
    const offsetStyles = offset ? isShorthandOffset(offset) ? offset : (_offset_position = offset[position]) !== null && _offset_position !== void 0 ? _offset_position : {} : {};
    const centered = position === "top" || position === "bottom";
    const { horizontal = centered ? 0 : 20, vertical = 16 } = offsetStyles;
    const start = dir === "ltr" ? "left" : "right";
    const end = dir === "ltr" ? "right" : "left";
    switch (position) {
      case "top":
        Object.assign(positionStyles, {
          top: vertical,
          left: `calc(50% + ${horizontal}px)`,
          transform: "translateX(-50%)"
        });
        break;
      case "bottom":
        Object.assign(positionStyles, {
          bottom: vertical,
          left: `calc(50% + ${horizontal}px)`,
          transform: "translateX(-50%)"
        });
        break;
      case "top-start":
        Object.assign(positionStyles, {
          top: vertical,
          [start]: horizontal
        });
        break;
      case "top-end":
        Object.assign(positionStyles, {
          top: vertical,
          [end]: horizontal
        });
        break;
      case "bottom-start":
        Object.assign(positionStyles, {
          bottom: vertical,
          [start]: horizontal
        });
        break;
      case "bottom-end":
        Object.assign(positionStyles, {
          bottom: vertical,
          [end]: horizontal
        });
        break;
    }
    return positionStyles;
  };
  function isShorthandOffset(offset) {
    return "horizontal" in offset || "vertical" in offset;
  }

  // node_modules/@fluentui/react-toast/lib/state/useToaster.js
  function useToaster(options = {}) {
    const forceUpdate = useForceUpdate();
    const { toasterId: userToasterId, shortcuts } = options;
    const [toaster] = React48.useState(() => createToaster(options));
    const { targetDocument } = useFluent();
    const lastActiveElementRef = React48.useRef(null);
    const isCorrectToaster = useEventCallback((toasterId) => {
      return toasterId === userToasterId;
    });
    const isFocusShortcut = useEventCallback((e) => {
      if (shortcuts === null || shortcuts === void 0 ? void 0 : shortcuts.focus) {
        return shortcuts.focus(e);
      }
    });
    const pauseAllToasts = React48.useCallback(() => {
      toaster.visibleToasts.forEach((toastId) => {
        var _toast_imperativeRef_current;
        const toast = toaster.toasts.get(toastId);
        toast === null || toast === void 0 ? void 0 : (_toast_imperativeRef_current = toast.imperativeRef.current) === null || _toast_imperativeRef_current === void 0 ? void 0 : _toast_imperativeRef_current.pause();
      });
    }, [
      toaster
    ]);
    const playAllToasts = React48.useCallback(() => {
      toaster.visibleToasts.forEach((toastId) => {
        var _toast_imperativeRef_current;
        const toast = toaster.toasts.get(toastId);
        toast === null || toast === void 0 ? void 0 : (_toast_imperativeRef_current = toast.imperativeRef.current) === null || _toast_imperativeRef_current === void 0 ? void 0 : _toast_imperativeRef_current.play();
      });
    }, [
      toaster
    ]);
    const getMostRecentVisibleToast = React48.useCallback(() => {
      return Array.from(toaster.visibleToasts).reduce((cur, next) => {
        const toast = toaster.toasts.get(next);
        if (!toast) {
          return cur;
        }
        if (!cur) {
          return toast;
        }
        if (cur.order < (toast === null || toast === void 0 ? void 0 : toast.order)) {
          return toast;
        }
        return cur;
      }, void 0);
    }, [
      toaster
    ]);
    const tryRestoreFocus = React48.useCallback(() => {
      const mostRecentToast = getMostRecentVisibleToast();
      if (mostRecentToast === null || mostRecentToast === void 0 ? void 0 : mostRecentToast.imperativeRef.current) {
        mostRecentToast.imperativeRef.current.focus();
      } else {
        var _lastActiveElementRef_current;
        (_lastActiveElementRef_current = lastActiveElementRef.current) === null || _lastActiveElementRef_current === void 0 ? void 0 : _lastActiveElementRef_current.focus();
        lastActiveElementRef.current = null;
      }
    }, [
      getMostRecentVisibleToast
    ]);
    const closeAllToasts = React48.useCallback(() => {
      toaster.visibleToasts.forEach((toastId) => {
        const toast = toaster.toasts.get(toastId);
        toast === null || toast === void 0 ? void 0 : toast.close();
      });
      tryRestoreFocus();
    }, [
      toaster,
      tryRestoreFocus
    ]);
    React48.useEffect(() => {
      if (!targetDocument) {
        return;
      }
      const addToastListener = (eventType, callback) => {
        const listener = (e) => {
          if (!isCorrectToaster(e.detail.toasterId)) {
            return;
          }
          callback(e);
          forceUpdate();
        };
        targetDocument.addEventListener(eventType, listener);
        return () => targetDocument.removeEventListener(eventType, listener);
      };
      const buildToast = (e) => {
        toaster.buildToast(e.detail, forceUpdate);
      };
      const dismissToast2 = (e) => {
        toaster.dismissToast(e.detail.toastId);
      };
      const updateToast2 = (e) => {
        toaster.updateToast(e.detail);
      };
      const dismissAllToasts2 = (e) => {
        toaster.dismissAllToasts();
      };
      const pauseToast2 = (e) => {
        const toast = toaster.toasts.get(e.detail.toastId);
        if (toast) {
          var _toast_imperativeRef_current;
          (_toast_imperativeRef_current = toast.imperativeRef.current) === null || _toast_imperativeRef_current === void 0 ? void 0 : _toast_imperativeRef_current.pause();
        }
      };
      const playToast2 = (e) => {
        const toast = toaster.toasts.get(e.detail.toastId);
        if (toast) {
          var _toast_imperativeRef_current;
          (_toast_imperativeRef_current = toast.imperativeRef.current) === null || _toast_imperativeRef_current === void 0 ? void 0 : _toast_imperativeRef_current.play();
        }
      };
      const cleanupBuildListener = addToastListener(EVENTS.show, buildToast);
      const cleanupUpdateListener = addToastListener(EVENTS.update, updateToast2);
      const cleanupDismissListener = addToastListener(EVENTS.dismiss, dismissToast2);
      const cleanupDismissAllListener = addToastListener(EVENTS.dismissAll, dismissAllToasts2);
      const cleanupPauseListener = addToastListener(EVENTS.pause, pauseToast2);
      const cleanupPlayListener = addToastListener(EVENTS.play, playToast2);
      const focusShortcutListener = (e) => {
        if (isFocusShortcut(e)) {
          pauseAllToasts();
          const mostRecentToast = getMostRecentVisibleToast();
          if (mostRecentToast) {
            var _mostRecentToast_imperativeRef_current;
            lastActiveElementRef.current = isHTMLElement(targetDocument.activeElement) ? targetDocument.activeElement : null;
            (_mostRecentToast_imperativeRef_current = mostRecentToast.imperativeRef.current) === null || _mostRecentToast_imperativeRef_current === void 0 ? void 0 : _mostRecentToast_imperativeRef_current.focus();
          }
        }
      };
      targetDocument.addEventListener("keydown", focusShortcutListener);
      return () => {
        cleanupBuildListener();
        cleanupDismissAllListener();
        cleanupUpdateListener();
        cleanupDismissListener();
        cleanupPauseListener();
        cleanupPlayListener();
        targetDocument.removeEventListener("keydown", focusShortcutListener);
      };
    }, [
      toaster,
      forceUpdate,
      targetDocument,
      isCorrectToaster,
      pauseAllToasts,
      getMostRecentVisibleToast,
      isFocusShortcut
    ]);
    const toastsToRender = (() => {
      if (!toaster) {
        return /* @__PURE__ */ new Map();
      }
      const toRender = /* @__PURE__ */ new Map();
      const toasts = Array.from(toaster.toasts.values());
      toasts.forEach((toast) => {
        const { position } = toast;
        toRender.has(position) || toRender.set(position, []);
        if (position.startsWith("bottom")) {
          toRender.get(position).push(toast);
        } else {
          toRender.get(position).unshift(toast);
        }
      });
      return toRender;
    })();
    return {
      isToastVisible: toaster.isToastVisible,
      toastsToRender,
      pauseAllToasts,
      playAllToasts,
      tryRestoreFocus,
      closeAllToasts
    };
  }

  // node_modules/@fluentui/react-toast/lib/state/useToastController.js
  init_define_import_meta_env();
  var React49 = __toESM(require_react_shim());
  var noop2 = () => void 0;
  function useToastController(toasterId) {
    const { targetDocument } = useFluent();
    return React49.useMemo(() => {
      if (!targetDocument) {
        return {
          dispatchToast: noop2,
          dismissToast: noop2,
          dismissAllToasts: noop2,
          updateToast: noop2,
          pauseToast: noop2,
          playToast: noop2
        };
      }
      return {
        dispatchToast: (content, options) => {
          dispatchToast(content, {
            ...options,
            toasterId,
            data: {
              root: options === null || options === void 0 ? void 0 : options.root
            }
          }, targetDocument);
        },
        dismissToast: (toastId) => {
          dismissToast(toastId, toasterId, targetDocument);
        },
        dismissAllToasts: () => {
          dismissAllToasts(toasterId, targetDocument);
        },
        updateToast: (options) => {
          updateToast({
            ...options,
            data: {
              root: options.root
            },
            toasterId
          }, targetDocument);
        },
        pauseToast: (toastId) => {
          pauseToast(toastId, toasterId, targetDocument);
        },
        playToast: (toastId) => {
          playToast(toastId, toasterId, targetDocument);
        }
      };
    }, [
      targetDocument,
      toasterId
    ]);
  }

  // node_modules/@fluentui/react-toast/lib/contexts/toastContainerContext.js
  init_define_import_meta_env();
  var React50 = __toESM(require_react_shim());
  var toastContainerContextDefaultValue = {
    close: () => null,
    intent: void 0,
    bodyId: "",
    titleId: ""
  };
  var ToastContainerContext = /* @__PURE__ */ React50.createContext(void 0);
  var ToastContainerContextProvider = ToastContainerContext.Provider;
  var useToastContainerContext = () => {
    var _React_useContext;
    return (_React_useContext = React50.useContext(ToastContainerContext)) !== null && _React_useContext !== void 0 ? _React_useContext : toastContainerContextDefaultValue;
  };

  // node_modules/@fluentui/react-toast/lib/Toaster.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toast/lib/components/Toaster/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toast/lib/components/Toaster/Toaster.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toast/lib/components/Toaster/useToaster.js
  init_define_import_meta_env();
  var React57 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-toast/lib/components/ToastContainer/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toast/lib/components/ToastContainer/ToastContainer.js
  init_define_import_meta_env();
  var React54 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-toast/lib/components/ToastContainer/useToastContainer.js
  init_define_import_meta_env();
  var React52 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-toast/lib/components/Timer/Timer.js
  init_define_import_meta_env();
  var React51 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-toast/lib/components/Timer/useTimerStyles.styles.js
  init_define_import_meta_env();
  var useBaseAnimationStyles = /* @__PURE__ */ __resetStyles2("r16zaflb", "r75casi", [".r16zaflb{animation-name:rsacmq1;}", "@keyframes rsacmq1{from{opacity:0;}to{opacity:0;}}", ".r75casi{animation-name:rsacmq1;}"]);

  // node_modules/@fluentui/react-toast/lib/components/Timer/Timer.js
  var Timer = /* @__PURE__ */ React51.forwardRef((props, ref) => {
    const baseAnimationStyles = useBaseAnimationStyles();
    const { running, timeout, onTimeout } = props;
    const style = {
      animationDuration: `${timeout}ms`,
      animationPlayState: running ? "running" : "paused"
    };
    if (timeout < 0) {
      return null;
    }
    return /* @__PURE__ */ React51.createElement("span", {
      onAnimationEnd: onTimeout,
      "data-timer-status": style.animationPlayState,
      ref,
      style,
      className: baseAnimationStyles
    });
  });
  Timer.displayName = "Timer";

  // node_modules/@fluentui/react-toast/lib/components/ToastContainer/useToastContainer.js
  var intentPolitenessMap = {
    success: "assertive",
    warning: "assertive",
    error: "assertive",
    info: "polite"
  };
  var useToastContainer_unstable = (props, ref) => {
    const { visible, children, close: closeProp, remove, updateId, announce, data, timeout: timerTimeout, politeness: desiredPoliteness, intent = "info", pauseOnHover, pauseOnWindowBlur, imperativeRef, tryRestoreFocus, content: _content, ...rest } = props;
    const titleId = useId2("toast-title");
    const bodyId = useId2("toast-body");
    const toastRef = React52.useRef(null);
    const { targetDocument } = useFluent();
    const [running, setRunning] = React52.useState(false);
    const imperativePauseRef = React52.useRef(false);
    const focusedToastBeforeClose = React52.useRef(false);
    const focusableGroupAttribute = useFocusableGroup({
      tabBehavior: "limited-trap-focus",
      // Users should only use Tab to focus into the toast
      // Escape is already reserved to dismiss all toasts
      ignoreDefaultKeydown: {
        Tab: true,
        Escape: true,
        Enter: true
      }
    });
    const close = useEventCallback(() => {
      var _toastRef_current;
      const activeElement = targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.activeElement;
      if (activeElement && ((_toastRef_current = toastRef.current) === null || _toastRef_current === void 0 ? void 0 : _toastRef_current.contains(activeElement))) {
        focusedToastBeforeClose.current = true;
      }
      closeProp();
    });
    const onStatusChange = useEventCallback((status) => {
      var _props_onStatusChange;
      return (_props_onStatusChange = props.onStatusChange) === null || _props_onStatusChange === void 0 ? void 0 : _props_onStatusChange.call(props, null, {
        status,
        ...props
      });
    });
    const pause = useEventCallback(() => setRunning(false));
    const play = useEventCallback(() => {
      var _toastRef_current;
      if (imperativePauseRef.current) {
        return;
      }
      var _targetDocument_activeElement;
      const containsActive = !!((_toastRef_current = toastRef.current) === null || _toastRef_current === void 0 ? void 0 : _toastRef_current.contains((_targetDocument_activeElement = targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.activeElement) !== null && _targetDocument_activeElement !== void 0 ? _targetDocument_activeElement : null));
      if (timerTimeout < 0) {
        setRunning(true);
        return;
      }
      if (!containsActive) {
        setRunning(true);
      }
    });
    React52.useImperativeHandle(imperativeRef, () => ({
      focus: () => {
        if (!toastRef.current) {
          return;
        }
        toastRef.current.focus();
      },
      play: () => {
        imperativePauseRef.current = false;
        play();
      },
      pause: () => {
        imperativePauseRef.current = true;
        pause();
      }
    }));
    React52.useEffect(() => {
      return () => onStatusChange("unmounted");
    }, [
      onStatusChange
    ]);
    React52.useEffect(() => {
      if (!targetDocument) {
        return;
      }
      if (pauseOnWindowBlur) {
        var _targetDocument_defaultView, _targetDocument_defaultView1;
        (_targetDocument_defaultView = targetDocument.defaultView) === null || _targetDocument_defaultView === void 0 ? void 0 : _targetDocument_defaultView.addEventListener("focus", play);
        (_targetDocument_defaultView1 = targetDocument.defaultView) === null || _targetDocument_defaultView1 === void 0 ? void 0 : _targetDocument_defaultView1.addEventListener("blur", pause);
        return () => {
          var _targetDocument_defaultView2, _targetDocument_defaultView12;
          (_targetDocument_defaultView2 = targetDocument.defaultView) === null || _targetDocument_defaultView2 === void 0 ? void 0 : _targetDocument_defaultView2.removeEventListener("focus", play);
          (_targetDocument_defaultView12 = targetDocument.defaultView) === null || _targetDocument_defaultView12 === void 0 ? void 0 : _targetDocument_defaultView12.removeEventListener("blur", pause);
        };
      }
    }, [
      targetDocument,
      pause,
      play,
      pauseOnWindowBlur
    ]);
    const userRootSlot = data.root;
    const onMotionFinish = React52.useCallback((_, { direction }) => {
      if (direction === "exit") {
        remove();
      }
      if (direction === "enter") {
        play();
        onStatusChange("visible");
      }
    }, [
      onStatusChange,
      play,
      remove
    ]);
    const onMouseEnter = useEventCallback((e) => {
      var _userRootSlot_onMouseEnter;
      pause();
      userRootSlot === null || userRootSlot === void 0 ? void 0 : (_userRootSlot_onMouseEnter = userRootSlot.onMouseEnter) === null || _userRootSlot_onMouseEnter === void 0 ? void 0 : _userRootSlot_onMouseEnter.call(userRootSlot, e);
    });
    const onMouseLeave = useEventCallback((e) => {
      var _userRootSlot_onMouseEnter;
      play();
      userRootSlot === null || userRootSlot === void 0 ? void 0 : (_userRootSlot_onMouseEnter = userRootSlot.onMouseEnter) === null || _userRootSlot_onMouseEnter === void 0 ? void 0 : _userRootSlot_onMouseEnter.call(userRootSlot, e);
    });
    const { findFirstFocusable, findLastFocusable } = useFocusFinders();
    const onKeyDown = useEventCallback((e) => {
      var _userRootSlot_onKeyDown;
      if (e.key === Delete) {
        e.preventDefault();
        close();
      }
      if (e.key === Tab && e.currentTarget === e.target) {
        e.preventDefault();
        if (e.shiftKey) {
          var _findLastFocusable;
          (_findLastFocusable = findLastFocusable(e.currentTarget)) === null || _findLastFocusable === void 0 ? void 0 : _findLastFocusable.focus();
        } else {
          var _findFirstFocusable;
          (_findFirstFocusable = findFirstFocusable(e.currentTarget)) === null || _findFirstFocusable === void 0 ? void 0 : _findFirstFocusable.focus();
        }
      }
      userRootSlot === null || userRootSlot === void 0 ? void 0 : (_userRootSlot_onKeyDown = userRootSlot.onKeyDown) === null || _userRootSlot_onKeyDown === void 0 ? void 0 : _userRootSlot_onKeyDown.call(userRootSlot, e);
    });
    React52.useEffect(() => {
      var _toastRef_current;
      if (!visible) {
        return;
      }
      const politeness = desiredPoliteness !== null && desiredPoliteness !== void 0 ? desiredPoliteness : intentPolitenessMap[intent];
      var _toastRef_current_textContent;
      announce((_toastRef_current_textContent = (_toastRef_current = toastRef.current) === null || _toastRef_current === void 0 ? void 0 : _toastRef_current.textContent) !== null && _toastRef_current_textContent !== void 0 ? _toastRef_current_textContent : "", {
        politeness
      });
    }, [
      announce,
      desiredPoliteness,
      toastRef,
      visible,
      updateId,
      intent
    ]);
    React52.useEffect(() => {
      return () => {
        if (focusedToastBeforeClose.current) {
          focusedToastBeforeClose.current = false;
          tryRestoreFocus();
        }
      };
    }, [
      tryRestoreFocus
    ]);
    return {
      components: {
        timer: Timer,
        root: "div"
      },
      timer: slot_exports.always({
        onTimeout: close,
        running,
        timeout: timerTimeout !== null && timerTimeout !== void 0 ? timerTimeout : -1
      }, {
        elementType: Timer
      }),
      root: slot_exports.always(getIntrinsicElementProps("div", {
        // FIXME:
        // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
        // but since it would be a breaking change to fix it, we are casting ref to it's proper type
        ref: useMergedRefs(ref, toastRef),
        children,
        tabIndex: 0,
        role: "listitem",
        "aria-labelledby": titleId,
        "aria-describedby": bodyId,
        ...rest,
        ...userRootSlot,
        ...focusableGroupAttribute,
        onMouseEnter,
        onMouseLeave,
        onKeyDown
      }), {
        elementType: "div"
      }),
      timerTimeout,
      transitionTimeout: 0,
      running,
      visible,
      remove,
      close,
      onTransitionEntering: () => {
      },
      updateId,
      nodeRef: toastRef,
      intent,
      titleId,
      bodyId,
      onMotionFinish
    };
  };

  // node_modules/@fluentui/react-toast/lib/components/ToastContainer/renderToastContainer.js
  init_define_import_meta_env();
  var renderToastContainer_unstable = (state, contextValues) => {
    const { onMotionFinish, visible, updateId } = state;
    assertSlots(state);
    return /* @__PURE__ */ jsx(ToastContainerContextProvider, {
      value: contextValues.toast,
      children: /* @__PURE__ */ jsx(CollapseDelayed, {
        appear: true,
        onMotionFinish,
        visible,
        unmountOnExit: true,
        children: /* @__PURE__ */ jsxs(state.root, {
          children: [
            state.root.children,
            /* @__PURE__ */ jsx(state.timer, {}, updateId)
          ]
        })
      })
    });
  };

  // node_modules/@fluentui/react-toast/lib/components/ToastContainer/useToastContainerStyles.styles.js
  init_define_import_meta_env();
  var toastContainerClassNames = {
    root: "fui-ToastContainer",
    timer: "fui-ToastContainer__timer"
  };
  var useRootBaseClassName2 = /* @__PURE__ */ __resetStyles2("r98b696", null, [".r98b696{box-sizing:border-box;margin-top:16px;pointer-events:all;border-radius:var(--borderRadiusMedium);}", ".r98b696[data-fui-focus-visible]{outline:var(--strokeWidthThick) solid var(--colorStrokeFocus2);}"]);
  var useToastContainerStyles_unstable = (state) => {
    "use no memo";
    const rootBaseClassName = useRootBaseClassName2();
    state.root.className = mergeClasses(toastContainerClassNames.root, rootBaseClassName, state.root.className);
    return state;
  };

  // node_modules/@fluentui/react-toast/lib/components/ToastContainer/useToastContainerContextValues.js
  init_define_import_meta_env();
  var React53 = __toESM(require_react_shim());
  function useToastContainerContextValues_unstable(state) {
    const { close, intent, titleId, bodyId } = state;
    const toastContainerContext = React53.useMemo(() => ({
      close,
      intent,
      titleId,
      bodyId
    }), [
      close,
      intent,
      titleId,
      bodyId
    ]);
    return {
      toast: toastContainerContext
    };
  }

  // node_modules/@fluentui/react-toast/lib/components/ToastContainer/ToastContainer.js
  var ToastContainer = /* @__PURE__ */ React54.forwardRef((props, ref) => {
    const state = useToastContainer_unstable(props, ref);
    useToastContainerStyles_unstable(state);
    useCustomStyleHook("useToastContainerStyles_unstable")(state);
    return renderToastContainer_unstable(state, useToastContainerContextValues_unstable(state));
  });
  ToastContainer.displayName = "ToastContainer";

  // node_modules/@fluentui/react-toast/lib/components/Toaster/useToasterFocusManagement.js
  init_define_import_meta_env();
  var React55 = __toESM(require_react_shim());
  var noop3 = () => void 0;
  function useToasterFocusManagement_unstable(pauseAllToasts, playAllToasts) {
    const { targetDocument } = useFluent();
    const cleanupListenersRef = React55.useRef(noop3);
    return React55.useCallback((el) => {
      if (!el || !targetDocument) {
        cleanupListenersRef.current();
        cleanupListenersRef.current = noop3;
        return;
      }
      const toastContainerWalker = targetDocument.createTreeWalker(el, NodeFilter.SHOW_ELEMENT, {
        acceptNode(node) {
          if (isHTMLElement(node) && node.classList.contains(toastContainerClassNames.root)) {
            return NodeFilter.FILTER_ACCEPT;
          }
          return NodeFilter.FILTER_SKIP;
        }
      });
      const keydownListener = (e) => {
        const { target, key } = e;
        if (!isHTMLElement(target)) {
          return;
        }
        if (key === ArrowDown) {
          toastContainerWalker.currentNode = target;
          let nextToastContainer = toastContainerWalker.nextNode();
          if (!nextToastContainer) {
            toastContainerWalker.currentNode = el;
            nextToastContainer = toastContainerWalker.nextNode();
          }
          if (isHTMLElement(nextToastContainer)) {
            nextToastContainer.focus();
          }
        }
        if (key === ArrowUp) {
          toastContainerWalker.currentNode = target;
          let prevToastContainer = toastContainerWalker.previousNode();
          if (prevToastContainer && prevToastContainer.contains(target)) {
            prevToastContainer = toastContainerWalker.previousNode();
          }
          if (!prevToastContainer) {
            toastContainerWalker.currentNode = el;
            prevToastContainer = toastContainerWalker.lastChild();
          }
          if (isHTMLElement(prevToastContainer)) {
            prevToastContainer.focus();
          }
        }
      };
      const focusInListener = (e) => {
        if (isHTMLElement(e.currentTarget) && !e.currentTarget.contains(isHTMLElement(e.relatedTarget) ? e.relatedTarget : null)) {
          pauseAllToasts();
        }
      };
      const focusOutListener = (e) => {
        if (isHTMLElement(e.currentTarget) && !e.currentTarget.contains(isHTMLElement(e.relatedTarget) ? e.relatedTarget : null)) {
          playAllToasts();
        }
      };
      el.addEventListener("keydown", keydownListener);
      el.addEventListener("focusin", focusInListener);
      el.addEventListener("focusout", focusOutListener);
      cleanupListenersRef.current = () => {
        el.removeEventListener("keydown", keydownListener);
        el.removeEventListener("focusin", focusInListener);
        el.removeEventListener("focusout", focusOutListener);
      };
    }, [
      targetDocument,
      pauseAllToasts,
      playAllToasts
    ]);
  }

  // node_modules/@fluentui/react-toast/lib/components/Toaster/useToastAnnounce.js
  init_define_import_meta_env();
  var React56 = __toESM(require_react_shim());
  function useToastAnnounce(announce) {
    const activeRef = React56.useRef(true);
    const cleanupRef = React56.useRef(() => void 0);
    const announceToast = React56.useCallback((message, options) => {
      if (activeRef.current) {
        announce(message, options);
      }
    }, [
      announce
    ]);
    const toasterRef = React56.useCallback((el) => {
      if (!el) {
        cleanupRef.current();
        return;
      }
      const onFocusIn = (e) => {
        if (isHTMLElement(e.currentTarget) && e.currentTarget.contains(isHTMLElement(e.relatedTarget) ? e.relatedTarget : null)) {
          return;
        }
        activeRef.current = false;
      };
      const onFocusOut = (e) => {
        if (isHTMLElement(e.currentTarget) && e.currentTarget.contains(isHTMLElement(e.relatedTarget) ? e.relatedTarget : null)) {
          return;
        }
        activeRef.current = true;
      };
      el.addEventListener("focusin", onFocusIn);
      el.addEventListener("focusout", onFocusOut);
      cleanupRef.current = () => {
        el.removeEventListener("focusin", onFocusIn);
        el.removeEventListener("focusout", onFocusOut);
      };
    }, []);
    return {
      announceToast,
      toasterRef
    };
  }

  // node_modules/@fluentui/react-toast/lib/components/Toaster/useToaster.js
  var useToaster_unstable = (props) => {
    "use no memo";
    const { offset, announce: announceProp, mountNode, inline = false, ...rest } = props;
    const announceRef = React57.useRef(() => null);
    const { toastsToRender, isToastVisible, pauseAllToasts, playAllToasts, tryRestoreFocus, closeAllToasts } = useToaster(rest);
    const announce = React57.useCallback((message, options) => announceRef.current(message, options), []);
    const { dir } = useFluent();
    const { onKeyDown: onKeyDownProp, ...rootProps } = slot_exports.always(getIntrinsicElementProps("div", rest), {
      elementType: "div"
    });
    const focusableGroupAttr = useFocusableGroup({
      tabBehavior: "limited-trap-focus",
      ignoreDefaultKeydown: {
        Escape: true
      }
    });
    const onKeyDown = useEventCallback((e) => {
      if (e.key === Escape) {
        e.preventDefault();
        closeAllToasts();
      }
      onKeyDownProp === null || onKeyDownProp === void 0 ? void 0 : onKeyDownProp(e);
    });
    const usePositionSlot = (toastPosition) => {
      var _toastsToRender_get;
      const focusManagementRef = useToasterFocusManagement_unstable(pauseAllToasts, playAllToasts);
      const { announceToast, toasterRef } = useToastAnnounce(announceProp !== null && announceProp !== void 0 ? announceProp : announce);
      return slot_exports.optional(toastsToRender.has(toastPosition) ? rootProps : null, {
        defaultProps: {
          ref: useMergedRefs(focusManagementRef, toasterRef),
          children: (_toastsToRender_get = toastsToRender.get(toastPosition)) === null || _toastsToRender_get === void 0 ? void 0 : _toastsToRender_get.map((toast) => /* @__PURE__ */ React57.createElement(ToastContainer, {
            ...toast,
            tryRestoreFocus,
            intent: toast.intent,
            announce: announceToast,
            key: toast.toastId,
            visible: isToastVisible(toast.toastId)
          }, toast.content)),
          onKeyDown,
          ...focusableGroupAttr,
          "data-toaster-position": toastPosition,
          role: "list"
        },
        elementType: "div"
      });
    };
    return {
      dir,
      mountNode,
      components: {
        root: "div",
        bottomStart: "div",
        bottomEnd: "div",
        topStart: "div",
        topEnd: "div",
        top: "div",
        bottom: "div"
      },
      root: slot_exports.always(rootProps, {
        elementType: "div"
      }),
      bottomStart: usePositionSlot(TOAST_POSITIONS.bottomStart),
      bottomEnd: usePositionSlot(TOAST_POSITIONS.bottomEnd),
      topStart: usePositionSlot(TOAST_POSITIONS.topStart),
      topEnd: usePositionSlot(TOAST_POSITIONS.topEnd),
      top: usePositionSlot(TOAST_POSITIONS.top),
      bottom: usePositionSlot(TOAST_POSITIONS.bottom),
      announceRef,
      offset,
      announce: announceProp !== null && announceProp !== void 0 ? announceProp : announce,
      renderAriaLive: !announceProp,
      inline
    };
  };

  // node_modules/@fluentui/react-toast/lib/components/Toaster/renderToaster.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toast/lib/components/AriaLive/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toast/lib/components/AriaLive/AriaLive.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toast/lib/components/AriaLive/useAriaLive.js
  init_define_import_meta_env();
  var React58 = __toESM(require_react_shim());
  var MESSAGE_DURATION = 500;
  var useAriaLive_unstable = (props) => {
    const [currentMessage, setCurrentMessage] = React58.useState(void 0);
    const order = React58.useRef(0);
    const [messageQueue] = React58.useState(() => createPriorityQueue((a, b) => {
      if (a.politeness === b.politeness) {
        return a.createdAt - b.createdAt;
      }
      return a.politeness === "assertive" ? -1 : 1;
    }));
    const announce = useEventCallback((message, options) => {
      const { politeness } = options;
      if (message === (currentMessage === null || currentMessage === void 0 ? void 0 : currentMessage.message)) {
        return;
      }
      const liveMessage = {
        message,
        politeness,
        createdAt: order.current++
      };
      if (!currentMessage) {
        setCurrentMessage(liveMessage);
      } else {
        messageQueue.enqueue(liveMessage);
      }
    });
    const [setMessageTimeout, clearMessageTimeout] = useTimeout();
    React58.useEffect(() => {
      setMessageTimeout(() => {
        if (messageQueue.peek()) {
          setCurrentMessage(messageQueue.dequeue());
        } else {
          setCurrentMessage(void 0);
        }
      }, MESSAGE_DURATION);
      return () => clearMessageTimeout();
    }, [
      currentMessage,
      messageQueue,
      setMessageTimeout,
      clearMessageTimeout
    ]);
    React58.useImperativeHandle(props.announceRef, () => announce);
    const politeMessage = (currentMessage === null || currentMessage === void 0 ? void 0 : currentMessage.politeness) === "polite" ? currentMessage.message : void 0;
    const assertiveMessage = (currentMessage === null || currentMessage === void 0 ? void 0 : currentMessage.politeness) === "assertive" ? currentMessage.message : void 0;
    return {
      components: {
        assertive: "div",
        polite: "div"
      },
      assertive: slot_exports.always(props.assertive, {
        defaultProps: {
          "aria-live": "assertive",
          children: assertiveMessage
        },
        elementType: "div"
      }),
      polite: slot_exports.always(props.polite, {
        defaultProps: {
          "aria-live": "polite",
          children: politeMessage
        },
        elementType: "div"
      })
    };
  };

  // node_modules/@fluentui/react-toast/lib/components/AriaLive/renderAriaLive.js
  init_define_import_meta_env();
  var renderAriaLive_unstable = (state) => {
    assertSlots(state);
    return /* @__PURE__ */ jsxs(import_react4.Fragment, {
      children: [
        /* @__PURE__ */ jsx(state.assertive, {}),
        /* @__PURE__ */ jsx(state.polite, {})
      ]
    });
  };

  // node_modules/@fluentui/react-toast/lib/components/AriaLive/useAriaLiveStyles.styles.js
  init_define_import_meta_env();
  var ariaLiveClassNames = {
    assertive: "fui-AriaLive__assertive",
    polite: "fui-AriaLive__polite"
  };
  var useResetStyles = /* @__PURE__ */ __resetStyles2("rrd10u0", null, [".rrd10u0{clip:rect(0px, 0px, 0px, 0px);height:1px;margin:-1px;overflow:hidden;padding:0px;width:1px;position:absolute;}"]);
  var useAriaLiveStyles_unstable = (state) => {
    "use no memo";
    const visuallyHidden = useResetStyles();
    state.assertive.className = mergeClasses(visuallyHidden, ariaLiveClassNames.assertive, state.assertive.className);
    state.polite.className = mergeClasses(visuallyHidden, ariaLiveClassNames.polite, state.polite.className);
    return state;
  };

  // node_modules/@fluentui/react-toast/lib/components/AriaLive/AriaLive.js
  var AriaLive = (props) => {
    const state = useAriaLive_unstable(props);
    useAriaLiveStyles_unstable(state);
    return renderAriaLive_unstable(state);
  };
  AriaLive.displayName = "AriaLive";

  // node_modules/@fluentui/react-toast/lib/components/Toaster/renderToaster.js
  var renderToaster_unstable = (state) => {
    const { announceRef, renderAriaLive, inline, mountNode } = state;
    assertSlots(state);
    const hasToasts = !!state.bottomStart || !!state.bottomEnd || !!state.topStart || !!state.topEnd || !!state.top || !!state.bottom;
    const ariaLive = renderAriaLive ? /* @__PURE__ */ jsx(AriaLive, {
      announceRef
    }) : null;
    const positionSlots = /* @__PURE__ */ jsxs(import_react4.Fragment, {
      children: [
        state.bottom ? /* @__PURE__ */ jsx(state.bottom, {}) : null,
        state.bottomStart ? /* @__PURE__ */ jsx(state.bottomStart, {}) : null,
        state.bottomEnd ? /* @__PURE__ */ jsx(state.bottomEnd, {}) : null,
        state.topStart ? /* @__PURE__ */ jsx(state.topStart, {}) : null,
        state.topEnd ? /* @__PURE__ */ jsx(state.topEnd, {}) : null,
        state.top ? /* @__PURE__ */ jsx(state.top, {}) : null
      ]
    });
    if (inline) {
      return /* @__PURE__ */ jsxs(import_react4.Fragment, {
        children: [
          ariaLive,
          hasToasts ? positionSlots : null
        ]
      });
    }
    return /* @__PURE__ */ jsxs(import_react4.Fragment, {
      children: [
        ariaLive,
        hasToasts ? /* @__PURE__ */ jsx(Portal, {
          mountNode,
          children: positionSlots
        }) : null
      ]
    });
  };

  // node_modules/@fluentui/react-toast/lib/components/Toaster/useToasterStyles.styles.js
  init_define_import_meta_env();
  var toasterClassNames = {
    root: "fui-Toaster"
  };
  var useRootBaseClassName3 = /* @__PURE__ */ __resetStyles2("r3hfdjz", null, [".r3hfdjz{position:fixed;width:292px;pointer-events:none;}"]);
  var useToasterStyles = /* @__PURE__ */ __styles2({
    inline: {
      qhf8xq: "f1euv43f"
    }
  }, {
    d: [".f1euv43f{position:absolute;}"]
  });
  var useToasterStyles_unstable = (state) => {
    "use no memo";
    const rootBaseClassName = useRootBaseClassName3();
    const styles = useToasterStyles();
    const className = mergeClasses(toasterClassNames.root, rootBaseClassName, state.inline && styles.inline, state.root.className);
    if (state.bottomStart) {
      var _state_bottomStart;
      state.bottomStart.className = className;
      var _style;
      (_style = (_state_bottomStart = state.bottomStart).style) !== null && _style !== void 0 ? _style : _state_bottomStart.style = {};
      Object.assign(state.bottomStart.style, getPositionStyles(TOAST_POSITIONS.bottomStart, state.dir, state.offset));
    }
    if (state.bottomEnd) {
      var _state_bottomEnd;
      state.bottomEnd.className = className;
      var _style1;
      (_style1 = (_state_bottomEnd = state.bottomEnd).style) !== null && _style1 !== void 0 ? _style1 : _state_bottomEnd.style = {};
      Object.assign(state.bottomEnd.style, getPositionStyles(TOAST_POSITIONS.bottomEnd, state.dir, state.offset));
    }
    if (state.topStart) {
      var _state_topStart;
      state.topStart.className = className;
      var _style2;
      (_style2 = (_state_topStart = state.topStart).style) !== null && _style2 !== void 0 ? _style2 : _state_topStart.style = {};
      Object.assign(state.topStart.style, getPositionStyles(TOAST_POSITIONS.topStart, state.dir, state.offset));
    }
    if (state.topEnd) {
      var _state_topEnd;
      state.topEnd.className = className;
      var _style3;
      (_style3 = (_state_topEnd = state.topEnd).style) !== null && _style3 !== void 0 ? _style3 : _state_topEnd.style = {};
      Object.assign(state.topEnd.style, getPositionStyles(TOAST_POSITIONS.topEnd, state.dir, state.offset));
    }
    if (state.top) {
      var _state_top;
      state.top.className = className;
      var _style4;
      (_style4 = (_state_top = state.top).style) !== null && _style4 !== void 0 ? _style4 : _state_top.style = {};
      Object.assign(state.top.style, getPositionStyles(TOAST_POSITIONS.top, state.dir, state.offset));
    }
    if (state.bottom) {
      var _state_bottom;
      state.bottom.className = className;
      var _style5;
      (_style5 = (_state_bottom = state.bottom).style) !== null && _style5 !== void 0 ? _style5 : _state_bottom.style = {};
      Object.assign(state.bottom.style, getPositionStyles(TOAST_POSITIONS.bottom, state.dir, state.offset));
    }
    return state;
  };

  // node_modules/@fluentui/react-toast/lib/components/Toaster/Toaster.js
  var Toaster = (props) => {
    const state = useToaster_unstable(props);
    useToasterStyles_unstable(state);
    useCustomStyleHook("useToasterStyles_unstable")(state);
    return renderToaster_unstable(state);
  };
  Toaster.displayName = "Toaster";

  // node_modules/@fluentui/react-toast/lib/Toast.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toast/lib/components/Toast/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toast/lib/components/Toast/Toast.js
  init_define_import_meta_env();
  var React59 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-toast/lib/components/Toast/useToast.js
  init_define_import_meta_env();
  var useToastBase_unstable = (props, ref) => {
    const { intent } = useToastContainerContext();
    return {
      components: {
        root: "div"
      },
      root: slot_exports.always(getIntrinsicElementProps("div", {
        // FIXME:
        // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
        // but since it would be a breaking change to fix it, we are casting ref to it's proper type
        ref,
        ...props
      }), {
        elementType: "div"
      }),
      intent
    };
  };
  var useToast_unstable = (props, ref) => {
    const state = useToastBase_unstable(props, ref);
    return {
      ...state,
      backgroundAppearance: props.appearance
    };
  };

  // node_modules/@fluentui/react-toast/lib/components/Toast/renderToast.js
  init_define_import_meta_env();
  var renderToast_unstable = (state, contextValues) => {
    assertSlots(state);
    return /* @__PURE__ */ jsx(BackgroundAppearanceProvider, {
      value: contextValues.backgroundAppearance,
      children: /* @__PURE__ */ jsx(state.root, {})
    });
  };

  // node_modules/@fluentui/react-toast/lib/components/Toast/useToastStyles.styles.js
  init_define_import_meta_env();
  var toastClassNames = {
    root: "fui-Toast"
  };
  var useRootBaseClassName4 = /* @__PURE__ */ __resetStyles2("rhf7k35", null, [".rhf7k35{display:grid;grid-template-columns:auto 1fr auto;padding:12px;border-radius:var(--borderRadiusMedium);border:1px solid var(--colorTransparentStroke);box-shadow:var(--shadow8);font-size:var(--fontSizeBase300);line-height:20px;font-weight:var(--fontWeightSemibold);color:var(--colorNeutralForeground1);background-color:var(--colorNeutralBackground1);}"]);
  var useStyles3 = /* @__PURE__ */ __styles2({
    inverted: {
      sj55zd: "f1w7i9ko",
      De3pzq: "f5pduvr"
    }
  }, {
    d: [".f1w7i9ko{color:var(--colorNeutralForegroundInverted2);}", ".f5pduvr{background-color:var(--colorNeutralBackgroundInverted);}"]
  });
  var useToastStyles_unstable = (state) => {
    "use no memo";
    const rootBaseClassName = useRootBaseClassName4();
    const styles = useStyles3();
    state.root.className = mergeClasses(toastClassNames.root, rootBaseClassName, state.backgroundAppearance === "inverted" && styles.inverted, state.root.className);
    return state;
  };

  // node_modules/@fluentui/react-toast/lib/components/Toast/useToastContextValues.js
  init_define_import_meta_env();
  function useToastContextValues_unstable(state) {
    const { backgroundAppearance } = state;
    return {
      backgroundAppearance
    };
  }

  // node_modules/@fluentui/react-toast/lib/components/Toast/Toast.js
  var Toast = /* @__PURE__ */ React59.forwardRef((props, ref) => {
    const state = useToast_unstable(props, ref);
    useToastStyles_unstable(state);
    useCustomStyleHook("useToastStyles_unstable")(state);
    return renderToast_unstable(state, useToastContextValues_unstable(state));
  });
  Toast.displayName = "Toast";

  // node_modules/@fluentui/react-toast/lib/ToastTitle.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toast/lib/components/ToastTitle/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toast/lib/components/ToastTitle/ToastTitle.js
  init_define_import_meta_env();
  var React61 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-toast/lib/components/ToastTitle/useToastTitle.js
  init_define_import_meta_env();
  var React60 = __toESM(require_react_shim());
  var useToastTitleBase_unstable = (props, ref) => {
    const { intent, titleId } = useToastContainerContext();
    return {
      action: slot_exports.optional(props.action, {
        elementType: "div"
      }),
      components: {
        root: "div",
        media: "div",
        action: "div"
      },
      media: slot_exports.optional(props.media, {
        renderByDefault: !!intent,
        elementType: "div"
      }),
      root: slot_exports.always(getIntrinsicElementProps("div", {
        // FIXME:
        // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
        // but since it would be a breaking change to fix it, we are casting ref to it's proper type
        ref,
        children: props.children,
        id: titleId,
        ...props
      }), {
        elementType: "div"
      }),
      intent
    };
  };
  var useToastTitle_unstable = (props, ref) => {
    "use no memo";
    const backgroundAppearance = useBackgroundAppearance();
    const baseState = useToastTitleBase_unstable(props, ref);
    let defaultIcon;
    switch (baseState.intent) {
      case "success":
        defaultIcon = /* @__PURE__ */ React60.createElement(CheckmarkCircleFilled, null);
        break;
      case "error":
        defaultIcon = /* @__PURE__ */ React60.createElement(DiamondDismissFilled, null);
        break;
      case "warning":
        defaultIcon = /* @__PURE__ */ React60.createElement(WarningFilled, null);
        break;
      case "info":
        defaultIcon = /* @__PURE__ */ React60.createElement(InfoFilled, null);
        break;
    }
    return {
      ...baseState,
      media: slot_exports.optional(props.media, {
        defaultProps: {
          children: defaultIcon
        },
        renderByDefault: !!baseState.intent,
        elementType: "div"
      }),
      backgroundAppearance
    };
  };

  // node_modules/@fluentui/react-toast/lib/components/ToastTitle/renderToastTitle.js
  init_define_import_meta_env();
  var renderToastTitle_unstable = (state) => {
    assertSlots(state);
    return /* @__PURE__ */ jsxs(import_react4.Fragment, {
      children: [
        state.media ? /* @__PURE__ */ jsx(state.media, {}) : null,
        /* @__PURE__ */ jsx(state.root, {}),
        state.action ? /* @__PURE__ */ jsx(state.action, {}) : null
      ]
    });
  };

  // node_modules/@fluentui/react-toast/lib/components/ToastTitle/useToastTitleStyles.styles.js
  init_define_import_meta_env();
  var toastTitleClassNames = {
    root: "fui-ToastTitle",
    media: "fui-ToastTitle__media",
    action: "fui-ToastTitle__action"
  };
  var useRootBaseClassName5 = /* @__PURE__ */ __resetStyles2("rdjap1e", null, [".rdjap1e{display:flex;grid-column-end:3;color:var(--colorNeutralForeground1);word-break:break-word;}"]);
  var useMediaBaseClassName = /* @__PURE__ */ __resetStyles2("r8x5mrd", "r1soj19y", [".r8x5mrd{display:flex;padding-top:2px;grid-column-end:2;padding-right:8px;font-size:16px;color:var(--colorNeutralForeground1);}", ".r1soj19y{display:flex;padding-top:2px;grid-column-end:2;padding-left:8px;font-size:16px;color:var(--colorNeutralForeground1);}"]);
  var useActionBaseClassName = /* @__PURE__ */ __resetStyles2("r2j19ip", "rjfozdo", [".r2j19ip{display:flex;align-items:start;padding-left:12px;grid-column-end:-1;color:var(--colorBrandForeground1);}", ".rjfozdo{display:flex;align-items:start;padding-right:12px;grid-column-end:-1;color:var(--colorBrandForeground1);}"]);
  var useInvertedStyles = /* @__PURE__ */ __styles2({
    root: {
      sj55zd: "f1w7i9ko"
    },
    action: {
      sj55zd: "f1qz2gb0"
    },
    media: {
      sj55zd: "fqpbvvt"
    }
  }, {
    d: [".f1w7i9ko{color:var(--colorNeutralForegroundInverted2);}", ".f1qz2gb0{color:var(--colorBrandForegroundInverted);}", ".fqpbvvt{color:var(--colorNeutralForegroundInverted);}"]
  });
  var useIntentIconStyles = /* @__PURE__ */ __styles2({
    success: {
      sj55zd: "f36rra6"
    },
    error: {
      sj55zd: "f1ca9wz"
    },
    warning: {
      sj55zd: "f13isgzr"
    },
    info: {
      sj55zd: "fkfq4zb"
    }
  }, {
    d: [".f36rra6{color:var(--colorStatusSuccessForeground1);}", ".f1ca9wz{color:var(--colorStatusDangerForeground1);}", ".f13isgzr{color:var(--colorStatusWarningForeground1);}", ".fkfq4zb{color:var(--colorNeutralForeground2);}"]
  });
  var useIntentIconStylesInverted = /* @__PURE__ */ __styles2({
    success: {
      sj55zd: "ff3wk4x"
    },
    error: {
      sj55zd: "fbq2gqr"
    },
    warning: {
      sj55zd: "fx6hq1t"
    },
    info: {
      sj55zd: "f1w7i9ko"
    }
  }, {
    d: [".ff3wk4x{color:var(--colorStatusSuccessForegroundInverted);}", ".fbq2gqr{color:var(--colorStatusDangerForegroundInverted);}", ".fx6hq1t{color:var(--colorStatusWarningForegroundInverted);}", ".f1w7i9ko{color:var(--colorNeutralForegroundInverted2);}"]
  });
  var useToastTitleStyles_unstable = (state) => {
    "use no memo";
    const rootBaseClassName = useRootBaseClassName5();
    const actionBaseClassName = useActionBaseClassName();
    const mediaBaseClassName = useMediaBaseClassName();
    const intentIconStyles = useIntentIconStyles();
    const intentIconStylesInverted = useIntentIconStylesInverted();
    const {
      intent
    } = state;
    const invertedStyles = useInvertedStyles();
    state.root.className = mergeClasses(toastTitleClassNames.root, rootBaseClassName, state.backgroundAppearance === "inverted" && invertedStyles.root, state.root.className);
    if (state.media) {
      state.media.className = mergeClasses(toastTitleClassNames.media, mediaBaseClassName, state.backgroundAppearance === "inverted" && invertedStyles.media, intent && intentIconStyles[intent], intent && state.backgroundAppearance === "inverted" && intentIconStylesInverted[intent], state.media.className);
    }
    if (state.action) {
      state.action.className = mergeClasses(toastTitleClassNames.action, actionBaseClassName, state.backgroundAppearance === "inverted" && invertedStyles.action, state.action.className);
    }
    return state;
  };

  // node_modules/@fluentui/react-toast/lib/components/ToastTitle/ToastTitle.js
  var ToastTitle = /* @__PURE__ */ React61.forwardRef((props, ref) => {
    const state = useToastTitle_unstable(props, ref);
    useToastTitleStyles_unstable(state);
    useCustomStyleHook("useToastTitleStyles_unstable")(state);
    return renderToastTitle_unstable(state);
  });
  ToastTitle.displayName = "ToastTitle";

  // node_modules/@fluentui/react-toast/lib/ToastBody.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toast/lib/components/ToastBody/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toast/lib/components/ToastBody/ToastBody.js
  init_define_import_meta_env();
  var React62 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-toast/lib/components/ToastBody/useToastBody.js
  init_define_import_meta_env();
  var useToastBodyBase_unstable = (props, ref) => {
    const { bodyId } = useToastContainerContext();
    return {
      components: {
        root: "div",
        subtitle: "div"
      },
      subtitle: slot_exports.optional(props.subtitle, {
        elementType: "div"
      }),
      root: slot_exports.always(getIntrinsicElementProps("div", {
        // FIXME:
        // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
        // but since it would be a breaking change to fix it, we are casting ref to it's proper type
        ref,
        id: bodyId,
        ...props
      }), {
        elementType: "div"
      })
    };
  };
  var useToastBody_unstable = (props, ref) => {
    const backgroundAppearance = useBackgroundAppearance();
    return {
      ...useToastBodyBase_unstable(props, ref),
      backgroundAppearance
    };
  };

  // node_modules/@fluentui/react-toast/lib/components/ToastBody/renderToastBody.js
  init_define_import_meta_env();
  var renderToastBody_unstable = (state) => {
    assertSlots(state);
    return /* @__PURE__ */ jsxs(import_react4.Fragment, {
      children: [
        /* @__PURE__ */ jsx(state.root, {}),
        state.subtitle ? /* @__PURE__ */ jsx(state.subtitle, {}) : null
      ]
    });
  };

  // node_modules/@fluentui/react-toast/lib/components/ToastBody/useToastBodyStyles.styles.js
  init_define_import_meta_env();
  var toastBodyClassNames = {
    root: "fui-ToastBody",
    subtitle: "fui-ToastBody__subtitle"
  };
  var useRootBaseClassName6 = /* @__PURE__ */ __resetStyles2("r1u44l4o", null, [".r1u44l4o{grid-column-start:2;grid-column-end:3;padding-top:6px;font-size:var(--fontSizeBase300);line-height:var(--lineHeightBase300);font-weight:var(--fontWeightRegular);color:var(--colorNeutralForeground1);word-break:break-word;}"]);
  var useSubtitleBaseClassName = /* @__PURE__ */ __resetStyles2("rzjw1xk", null, [".rzjw1xk{padding-top:4px;grid-column-start:2;grid-column-end:3;font-size:var(--fontSizeBase200);line-height:var(--fontSizeBase200);font-weight:var(--fontWeightRegular);color:var(--colorNeutralForeground2);}"]);
  var useInvertedStyles2 = /* @__PURE__ */ __styles2({
    root: {
      sj55zd: "f1w7i9ko"
    },
    subtitle: {
      sj55zd: "f1w7i9ko"
    }
  }, {
    d: [".f1w7i9ko{color:var(--colorNeutralForegroundInverted2);}"]
  });
  var useToastBodyStyles_unstable = (state) => {
    "use no memo";
    const rootBaseClassName = useRootBaseClassName6();
    const subtitleBaseClassName = useSubtitleBaseClassName();
    const invertedStyles = useInvertedStyles2();
    state.root.className = mergeClasses(toastBodyClassNames.root, rootBaseClassName, state.backgroundAppearance === "inverted" && invertedStyles.root, state.root.className);
    if (state.subtitle) {
      state.subtitle.className = mergeClasses(toastBodyClassNames.subtitle, subtitleBaseClassName, state.backgroundAppearance === "inverted" && invertedStyles.subtitle, state.subtitle.className);
    }
    return state;
  };

  // node_modules/@fluentui/react-toast/lib/components/ToastBody/ToastBody.js
  var ToastBody = /* @__PURE__ */ React62.forwardRef((props, ref) => {
    const state = useToastBody_unstable(props, ref);
    useToastBodyStyles_unstable(state);
    useCustomStyleHook("useToastBodyStyles_unstable")(state);
    return renderToastBody_unstable(state);
  });
  ToastBody.displayName = "ToastBody";

  // node_modules/@fluentui/react-toast/lib/ToastFooter.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toast/lib/components/ToastFooter/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-toast/lib/components/ToastFooter/ToastFooter.js
  init_define_import_meta_env();
  var React63 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-toast/lib/components/ToastFooter/useToastFooter.js
  init_define_import_meta_env();
  var useToastFooter_unstable = (props, ref) => {
    return {
      components: {
        root: "div"
      },
      root: slot_exports.always(getIntrinsicElementProps("div", {
        // FIXME:
        // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
        // but since it would be a breaking change to fix it, we are casting ref to it's proper type
        ref,
        ...props
      }), {
        elementType: "div"
      })
    };
  };

  // node_modules/@fluentui/react-toast/lib/components/ToastFooter/renderToastFooter.js
  init_define_import_meta_env();
  var renderToastFooter_unstable = (state) => {
    assertSlots(state);
    return /* @__PURE__ */ jsx(state.root, {});
  };

  // node_modules/@fluentui/react-toast/lib/components/ToastFooter/useToastFooterStyles.styles.js
  init_define_import_meta_env();
  var toastFooterClassNames = {
    root: "fui-ToastFooter"
  };
  var useRootBaseClassName7 = /* @__PURE__ */ __resetStyles2("r56x6h2", null, [".r56x6h2{padding-top:16px;grid-column-start:2;grid-column-end:3;display:flex;align-items:center;gap:14px;}"]);
  var useToastFooterStyles_unstable = (state) => {
    "use no memo";
    const rootBaseClassName = useRootBaseClassName7();
    state.root.className = mergeClasses(toastFooterClassNames.root, rootBaseClassName, state.root.className);
    return state;
  };

  // node_modules/@fluentui/react-toast/lib/components/ToastFooter/ToastFooter.js
  var ToastFooter = /* @__PURE__ */ React63.forwardRef((props, ref) => {
    const state = useToastFooter_unstable(props, ref);
    useToastFooterStyles_unstable(state);
    useCustomStyleHook("useToastFooterStyles_unstable")(state);
    return renderToastFooter_unstable(state);
  });
  ToastFooter.displayName = "ToastFooter";

  // src/components/ui/index.ts
  init_define_import_meta_env();

  // ds-shim:ds:Button
  var ds_Button_exports = {};
  __export(ds_Button_exports, {
    default: () => ds_Button_default
  });
  init_define_import_meta_env();
  __reExport(ds_Button_exports, __toESM(require_ds_raw()));
  var g = window.LumelFluent2Ds;
  var ds_Button_default = g["Button"] !== void 0 ? g["Button"] : g;

  // ds-shim:ds:Hamburger
  var ds_Hamburger_exports = {};
  __export(ds_Hamburger_exports, {
    default: () => ds_Hamburger_default
  });
  init_define_import_meta_env();
  __reExport(ds_Hamburger_exports, __toESM(require_ds_raw()));
  var g2 = window.LumelFluent2Ds;
  var ds_Hamburger_default = g2["Hamburger"] !== void 0 ? g2["Hamburger"] : g2;

  // ds-shim:ds:Divider
  var ds_Divider_exports = {};
  __export(ds_Divider_exports, {
    default: () => ds_Divider_default
  });
  init_define_import_meta_env();
  __reExport(ds_Divider_exports, __toESM(require_ds_raw()));
  var g3 = window.LumelFluent2Ds;
  var ds_Divider_default = g3["Divider"] !== void 0 ? g3["Divider"] : g3;

  // ds-shim:ds:Spinner
  var ds_Spinner_exports = {};
  __export(ds_Spinner_exports, {
    default: () => ds_Spinner_default
  });
  init_define_import_meta_env();
  __reExport(ds_Spinner_exports, __toESM(require_ds_raw()));
  var g4 = window.LumelFluent2Ds;
  var ds_Spinner_default = g4["Spinner"] !== void 0 ? g4["Spinner"] : g4;

  // ds-shim:ds:Skeleton
  var ds_Skeleton_exports = {};
  __export(ds_Skeleton_exports, {
    default: () => ds_Skeleton_default
  });
  init_define_import_meta_env();
  __reExport(ds_Skeleton_exports, __toESM(require_ds_raw()));
  var g5 = window.LumelFluent2Ds;
  var ds_Skeleton_default = g5["Skeleton"] !== void 0 ? g5["Skeleton"] : g5;

  // ds-shim:ds:Icon
  var ds_Icon_exports = {};
  __export(ds_Icon_exports, {
    default: () => ds_Icon_default
  });
  init_define_import_meta_env();
  __reExport(ds_Icon_exports, __toESM(require_ds_raw()));
  var g6 = window.LumelFluent2Ds;
  var ds_Icon_default = g6["Icon"] !== void 0 ? g6["Icon"] : g6;

  // ds-shim:ds:Label
  var ds_Label_exports = {};
  __export(ds_Label_exports, {
    default: () => ds_Label_default
  });
  init_define_import_meta_env();
  __reExport(ds_Label_exports, __toESM(require_ds_raw()));
  var g7 = window.LumelFluent2Ds;
  var ds_Label_default = g7["Label"] !== void 0 ? g7["Label"] : g7;

  // ds-shim:ds:Input
  var ds_Input_exports = {};
  __export(ds_Input_exports, {
    default: () => ds_Input_default
  });
  init_define_import_meta_env();
  __reExport(ds_Input_exports, __toESM(require_ds_raw()));
  var g8 = window.LumelFluent2Ds;
  var ds_Input_default = g8["Input"] !== void 0 ? g8["Input"] : g8;

  // ds-shim:ds:TextField
  var ds_TextField_exports = {};
  __export(ds_TextField_exports, {
    default: () => ds_TextField_default
  });
  init_define_import_meta_env();
  __reExport(ds_TextField_exports, __toESM(require_ds_raw()));
  var g9 = window.LumelFluent2Ds;
  var ds_TextField_default = g9["TextField"] !== void 0 ? g9["TextField"] : g9;

  // ds-shim:ds:Textarea
  var ds_Textarea_exports = {};
  __export(ds_Textarea_exports, {
    default: () => ds_Textarea_default
  });
  init_define_import_meta_env();
  __reExport(ds_Textarea_exports, __toESM(require_ds_raw()));
  var g10 = window.LumelFluent2Ds;
  var ds_Textarea_default = g10["Textarea"] !== void 0 ? g10["Textarea"] : g10;

  // ds-shim:ds:Select
  var ds_Select_exports = {};
  __export(ds_Select_exports, {
    default: () => ds_Select_default
  });
  init_define_import_meta_env();
  __reExport(ds_Select_exports, __toESM(require_ds_raw()));
  var g11 = window.LumelFluent2Ds;
  var ds_Select_default = g11["Select"] !== void 0 ? g11["Select"] : g11;

  // ds-shim:ds:Combobox
  var ds_Combobox_exports = {};
  __export(ds_Combobox_exports, {
    default: () => ds_Combobox_default
  });
  init_define_import_meta_env();
  __reExport(ds_Combobox_exports, __toESM(require_ds_raw()));
  var g12 = window.LumelFluent2Ds;
  var ds_Combobox_default = g12["Combobox"] !== void 0 ? g12["Combobox"] : g12;

  // ds-shim:ds:Dropdown
  var ds_Dropdown_exports = {};
  __export(ds_Dropdown_exports, {
    default: () => ds_Dropdown_default
  });
  init_define_import_meta_env();
  __reExport(ds_Dropdown_exports, __toESM(require_ds_raw()));
  var g13 = window.LumelFluent2Ds;
  var ds_Dropdown_default = g13["Dropdown"] !== void 0 ? g13["Dropdown"] : g13;

  // ds-shim:ds:Checkbox
  var ds_Checkbox_exports = {};
  __export(ds_Checkbox_exports, {
    default: () => ds_Checkbox_default
  });
  init_define_import_meta_env();
  __reExport(ds_Checkbox_exports, __toESM(require_ds_raw()));
  var g14 = window.LumelFluent2Ds;
  var ds_Checkbox_default = g14["Checkbox"] !== void 0 ? g14["Checkbox"] : g14;

  // ds-shim:ds:RadioGroup
  var ds_RadioGroup_exports = {};
  __export(ds_RadioGroup_exports, {
    default: () => ds_RadioGroup_default
  });
  init_define_import_meta_env();
  __reExport(ds_RadioGroup_exports, __toESM(require_ds_raw()));
  var g15 = window.LumelFluent2Ds;
  var ds_RadioGroup_default = g15["RadioGroup"] !== void 0 ? g15["RadioGroup"] : g15;

  // ds-shim:ds:Switch
  var ds_Switch_exports = {};
  __export(ds_Switch_exports, {
    default: () => ds_Switch_default
  });
  init_define_import_meta_env();
  __reExport(ds_Switch_exports, __toESM(require_ds_raw()));
  var g16 = window.LumelFluent2Ds;
  var ds_Switch_default = g16["Switch"] !== void 0 ? g16["Switch"] : g16;

  // ds-shim:ds:Field
  var ds_Field_exports = {};
  __export(ds_Field_exports, {
    default: () => ds_Field_default
  });
  init_define_import_meta_env();
  __reExport(ds_Field_exports, __toESM(require_ds_raw()));
  var g17 = window.LumelFluent2Ds;
  var ds_Field_default = g17["Field"] !== void 0 ? g17["Field"] : g17;

  // ds-shim:ds:StatusBadge
  var ds_StatusBadge_exports = {};
  __export(ds_StatusBadge_exports, {
    default: () => ds_StatusBadge_default
  });
  init_define_import_meta_env();
  __reExport(ds_StatusBadge_exports, __toESM(require_ds_raw()));
  var g18 = window.LumelFluent2Ds;
  var ds_StatusBadge_default = g18["StatusBadge"] !== void 0 ? g18["StatusBadge"] : g18;

  // ds-shim:ds:Tag
  var ds_Tag_exports = {};
  __export(ds_Tag_exports, {
    default: () => ds_Tag_default
  });
  init_define_import_meta_env();
  __reExport(ds_Tag_exports, __toESM(require_ds_raw()));
  var g19 = window.LumelFluent2Ds;
  var ds_Tag_default = g19["Tag"] !== void 0 ? g19["Tag"] : g19;

  // ds-shim:ds:UserAvatar
  var ds_UserAvatar_exports = {};
  __export(ds_UserAvatar_exports, {
    default: () => ds_UserAvatar_default
  });
  init_define_import_meta_env();
  __reExport(ds_UserAvatar_exports, __toESM(require_ds_raw()));
  var g20 = window.LumelFluent2Ds;
  var ds_UserAvatar_default = g20["UserAvatar"] !== void 0 ? g20["UserAvatar"] : g20;

  // ds-shim:ds:Persona
  var ds_Persona_exports = {};
  __export(ds_Persona_exports, {
    default: () => ds_Persona_default
  });
  init_define_import_meta_env();
  __reExport(ds_Persona_exports, __toESM(require_ds_raw()));
  var g21 = window.LumelFluent2Ds;
  var ds_Persona_default = g21["Persona"] !== void 0 ? g21["Persona"] : g21;

  // ds-shim:ds:SearchInput
  var ds_SearchInput_exports = {};
  __export(ds_SearchInput_exports, {
    default: () => ds_SearchInput_default
  });
  init_define_import_meta_env();
  __reExport(ds_SearchInput_exports, __toESM(require_ds_raw()));
  var g22 = window.LumelFluent2Ds;
  var ds_SearchInput_default = g22["SearchInput"] !== void 0 ? g22["SearchInput"] : g22;

  // ds-shim:ds:DataCard
  var ds_DataCard_exports = {};
  __export(ds_DataCard_exports, {
    default: () => ds_DataCard_default
  });
  init_define_import_meta_env();
  __reExport(ds_DataCard_exports, __toESM(require_ds_raw()));
  var g23 = window.LumelFluent2Ds;
  var ds_DataCard_default = g23["DataCard"] !== void 0 ? g23["DataCard"] : g23;

  // ds-shim:ds:EmptyState
  var ds_EmptyState_exports = {};
  __export(ds_EmptyState_exports, {
    default: () => ds_EmptyState_default
  });
  init_define_import_meta_env();
  __reExport(ds_EmptyState_exports, __toESM(require_ds_raw()));
  var g24 = window.LumelFluent2Ds;
  var ds_EmptyState_default = g24["EmptyState"] !== void 0 ? g24["EmptyState"] : g24;

  // ds-shim:ds:PageHeader
  var ds_PageHeader_exports = {};
  __export(ds_PageHeader_exports, {
    default: () => ds_PageHeader_default
  });
  init_define_import_meta_env();
  __reExport(ds_PageHeader_exports, __toESM(require_ds_raw()));
  var g25 = window.LumelFluent2Ds;
  var ds_PageHeader_default = g25["PageHeader"] !== void 0 ? g25["PageHeader"] : g25;

  // ds-shim:ds:ConfirmDialog
  var ds_ConfirmDialog_exports = {};
  __export(ds_ConfirmDialog_exports, {
    default: () => ds_ConfirmDialog_default
  });
  init_define_import_meta_env();
  __reExport(ds_ConfirmDialog_exports, __toESM(require_ds_raw()));
  var g26 = window.LumelFluent2Ds;
  var ds_ConfirmDialog_default = g26["ConfirmDialog"] !== void 0 ? g26["ConfirmDialog"] : g26;

  // ds-shim:ds:Tooltip
  var ds_Tooltip_exports = {};
  __export(ds_Tooltip_exports, {
    default: () => ds_Tooltip_default
  });
  init_define_import_meta_env();
  __reExport(ds_Tooltip_exports, __toESM(require_ds_raw()));
  var g27 = window.LumelFluent2Ds;
  var ds_Tooltip_default = g27["Tooltip"] !== void 0 ? g27["Tooltip"] : g27;

  // ds-shim:ds:ProgressBar
  var ds_ProgressBar_exports = {};
  __export(ds_ProgressBar_exports, {
    default: () => ds_ProgressBar_default
  });
  init_define_import_meta_env();
  __reExport(ds_ProgressBar_exports, __toESM(require_ds_raw()));
  var g28 = window.LumelFluent2Ds;
  var ds_ProgressBar_default = g28["ProgressBar"] !== void 0 ? g28["ProgressBar"] : g28;

  // ds-shim:ds:MessageBar
  var ds_MessageBar_exports = {};
  __export(ds_MessageBar_exports, {
    default: () => ds_MessageBar_default
  });
  init_define_import_meta_env();
  __reExport(ds_MessageBar_exports, __toESM(require_ds_raw()));
  var g29 = window.LumelFluent2Ds;
  var ds_MessageBar_default = g29["MessageBar"] !== void 0 ? g29["MessageBar"] : g29;

  // ds-shim:ds:Tabs
  var ds_Tabs_exports = {};
  __export(ds_Tabs_exports, {
    default: () => ds_Tabs_default
  });
  init_define_import_meta_env();
  __reExport(ds_Tabs_exports, __toESM(require_ds_raw()));
  var g30 = window.LumelFluent2Ds;
  var ds_Tabs_default = g30["Tabs"] !== void 0 ? g30["Tabs"] : g30;

  // ds-shim:ds:Accordion
  var ds_Accordion_exports = {};
  __export(ds_Accordion_exports, {
    default: () => ds_Accordion_default
  });
  init_define_import_meta_env();
  __reExport(ds_Accordion_exports, __toESM(require_ds_raw()));
  var g31 = window.LumelFluent2Ds;
  var ds_Accordion_default = g31["Accordion"] !== void 0 ? g31["Accordion"] : g31;

  // ds-shim:ds:Slider
  var ds_Slider_exports = {};
  __export(ds_Slider_exports, {
    default: () => ds_Slider_default
  });
  init_define_import_meta_env();
  __reExport(ds_Slider_exports, __toESM(require_ds_raw()));
  var g32 = window.LumelFluent2Ds;
  var ds_Slider_default = g32["Slider"] !== void 0 ? g32["Slider"] : g32;

  // ds-shim:ds:Card
  var ds_Card_exports = {};
  __export(ds_Card_exports, {
    default: () => ds_Card_default
  });
  init_define_import_meta_env();
  __reExport(ds_Card_exports, __toESM(require_ds_raw()));
  var g33 = window.LumelFluent2Ds;
  var ds_Card_default = g33["Card"] !== void 0 ? g33["Card"] : g33;

  // ds-shim:ds:Stepper
  var ds_Stepper_exports = {};
  __export(ds_Stepper_exports, {
    default: () => ds_Stepper_default
  });
  init_define_import_meta_env();
  __reExport(ds_Stepper_exports, __toESM(require_ds_raw()));
  var g34 = window.LumelFluent2Ds;
  var ds_Stepper_default = g34["Stepper"] !== void 0 ? g34["Stepper"] : g34;

  // ds-shim:ds:DatePicker
  var ds_DatePicker_exports = {};
  __export(ds_DatePicker_exports, {
    default: () => ds_DatePicker_default
  });
  init_define_import_meta_env();
  __reExport(ds_DatePicker_exports, __toESM(require_ds_raw()));
  var g35 = window.LumelFluent2Ds;
  var ds_DatePicker_default = g35["DatePicker"] !== void 0 ? g35["DatePicker"] : g35;

  // ds-shim:ds:TimePicker
  var ds_TimePicker_exports = {};
  __export(ds_TimePicker_exports, {
    default: () => ds_TimePicker_default
  });
  init_define_import_meta_env();
  __reExport(ds_TimePicker_exports, __toESM(require_ds_raw()));
  var g36 = window.LumelFluent2Ds;
  var ds_TimePicker_default = g36["TimePicker"] !== void 0 ? g36["TimePicker"] : g36;

  // src/components/ui/Toast.tsx
  init_define_import_meta_env();
  var import_react23 = __toESM(require_react_shim());
  var import_jsx_runtime12 = __toESM(require_react_shim());
  var TOASTER_ID = "ds-toaster";
  var DSToaster = import_react23.default.forwardRef(
    ({ position = "top-end", limit = 5 }, ref) => {
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Toaster, { toasterId: TOASTER_ID, position, limit });
    }
  );
  DSToaster.displayName = "DSToaster";
  function useToast() {
    const { dispatchToast: dispatchToast2, dismissToast: dismissToast2, dismissAllToasts: dismissAllToasts2 } = useToastController(TOASTER_ID);
    const showToast = import_react23.default.useCallback(
      ({
        title,
        body,
        intent = "info",
        timeout = 4e3,
        actions
      }) => {
        dispatchToast2(
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(Toast, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ToastTitle, { children: title }),
            body && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ToastBody, { children: body }),
            actions && actions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ToastFooter, { children: actions.map((action) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
              ds_Button_exports.Button,
              {
                appearance: "subtle",
                size: "small",
                onClick: action.onClick,
                children: action.label
              },
              action.label
            )) })
          ] }),
          { intent, timeout }
        );
      },
      [dispatchToast2]
    );
    return {
      showToast,
      dismissToast: dismissToast2,
      dismissAllToasts: dismissAllToasts2
    };
  }
  DSToaster.displayName = "DSToaster";
  useToast.displayName = "useToast";

  // ds-shim:ds:Drawer
  var ds_Drawer_exports = {};
  __export(ds_Drawer_exports, {
    default: () => ds_Drawer_default
  });
  init_define_import_meta_env();
  __reExport(ds_Drawer_exports, __toESM(require_ds_raw()));
  var g37 = window.LumelFluent2Ds;
  var ds_Drawer_default = g37["Drawer"] !== void 0 ? g37["Drawer"] : g37;

  // ds-shim:ds:Popover
  var ds_Popover_exports = {};
  __export(ds_Popover_exports, {
    default: () => ds_Popover_default
  });
  init_define_import_meta_env();
  __reExport(ds_Popover_exports, __toESM(require_ds_raw()));
  var g38 = window.LumelFluent2Ds;
  var ds_Popover_default = g38["Popover"] !== void 0 ? g38["Popover"] : g38;

  // ds-shim:ds:FileUpload
  var ds_FileUpload_exports = {};
  __export(ds_FileUpload_exports, {
    default: () => ds_FileUpload_default
  });
  init_define_import_meta_env();
  __reExport(ds_FileUpload_exports, __toESM(require_ds_raw()));
  var g39 = window.LumelFluent2Ds;
  var ds_FileUpload_default = g39["FileUpload"] !== void 0 ? g39["FileUpload"] : g39;

  // ds-shim:ds:DataTable
  var ds_DataTable_exports = {};
  __export(ds_DataTable_exports, {
    default: () => ds_DataTable_default
  });
  init_define_import_meta_env();
  __reExport(ds_DataTable_exports, __toESM(require_ds_raw()));
  var g40 = window.LumelFluent2Ds;
  var ds_DataTable_default = g40["DataTable"] !== void 0 ? g40["DataTable"] : g40;

  // ds-shim:ds:Pagination
  var ds_Pagination_exports = {};
  __export(ds_Pagination_exports, {
    default: () => ds_Pagination_default
  });
  init_define_import_meta_env();
  __reExport(ds_Pagination_exports, __toESM(require_ds_raw()));
  var g41 = window.LumelFluent2Ds;
  var ds_Pagination_default = g41["Pagination"] !== void 0 ? g41["Pagination"] : g41;

  // ds-shim:ds:Table
  var ds_Table_exports = {};
  __export(ds_Table_exports, {
    default: () => ds_Table_default
  });
  init_define_import_meta_env();
  __reExport(ds_Table_exports, __toESM(require_ds_raw()));
  var g42 = window.LumelFluent2Ds;
  var ds_Table_default = g42["Table"] !== void 0 ? g42["Table"] : g42;

  // ds-shim:ds:SideNav
  var ds_SideNav_exports = {};
  __export(ds_SideNav_exports, {
    default: () => ds_SideNav_default
  });
  init_define_import_meta_env();
  __reExport(ds_SideNav_exports, __toESM(require_ds_raw()));
  var g43 = window.LumelFluent2Ds;
  var ds_SideNav_default = g43["SideNav"] !== void 0 ? g43["SideNav"] : g43;

  // ds-shim:ds:NavDrawer
  var ds_NavDrawer_exports = {};
  __export(ds_NavDrawer_exports, {
    default: () => ds_NavDrawer_default
  });
  init_define_import_meta_env();
  __reExport(ds_NavDrawer_exports, __toESM(require_ds_raw()));
  var g44 = window.LumelFluent2Ds;
  var ds_NavDrawer_default = g44["NavDrawer"] !== void 0 ? g44["NavDrawer"] : g44;

  // ds-shim:ds:Link
  var ds_Link_exports = {};
  __export(ds_Link_exports, {
    default: () => ds_Link_default
  });
  init_define_import_meta_env();
  __reExport(ds_Link_exports, __toESM(require_ds_raw()));
  var g45 = window.LumelFluent2Ds;
  var ds_Link_default = g45["Link"] !== void 0 ? g45["Link"] : g45;

  // ds-shim:ds:ToggleButton
  var ds_ToggleButton_exports = {};
  __export(ds_ToggleButton_exports, {
    default: () => ds_ToggleButton_default
  });
  init_define_import_meta_env();
  __reExport(ds_ToggleButton_exports, __toESM(require_ds_raw()));
  var g46 = window.LumelFluent2Ds;
  var ds_ToggleButton_default = g46["ToggleButton"] !== void 0 ? g46["ToggleButton"] : g46;

  // ds-shim:ds:CompoundButton
  var ds_CompoundButton_exports = {};
  __export(ds_CompoundButton_exports, {
    default: () => ds_CompoundButton_default
  });
  init_define_import_meta_env();
  __reExport(ds_CompoundButton_exports, __toESM(require_ds_raw()));
  var g47 = window.LumelFluent2Ds;
  var ds_CompoundButton_default = g47["CompoundButton"] !== void 0 ? g47["CompoundButton"] : g47;

  // ds-shim:ds:Menu
  var ds_Menu_exports = {};
  __export(ds_Menu_exports, {
    default: () => ds_Menu_default
  });
  init_define_import_meta_env();
  __reExport(ds_Menu_exports, __toESM(require_ds_raw()));
  var g48 = window.LumelFluent2Ds;
  var ds_Menu_default = g48["Menu"] !== void 0 ? g48["Menu"] : g48;

  // ds-shim:ds:MenuButton
  var ds_MenuButton_exports = {};
  __export(ds_MenuButton_exports, {
    default: () => ds_MenuButton_default
  });
  init_define_import_meta_env();
  __reExport(ds_MenuButton_exports, __toESM(require_ds_raw()));
  var g49 = window.LumelFluent2Ds;
  var ds_MenuButton_default = g49["MenuButton"] !== void 0 ? g49["MenuButton"] : g49;

  // ds-shim:ds:SplitButton
  var ds_SplitButton_exports = {};
  __export(ds_SplitButton_exports, {
    default: () => ds_SplitButton_default
  });
  init_define_import_meta_env();
  __reExport(ds_SplitButton_exports, __toESM(require_ds_raw()));
  var g50 = window.LumelFluent2Ds;
  var ds_SplitButton_default = g50["SplitButton"] !== void 0 ? g50["SplitButton"] : g50;

  // ds-shim:ds:Toolbar
  var ds_Toolbar_exports = {};
  __export(ds_Toolbar_exports, {
    default: () => ds_Toolbar_default
  });
  init_define_import_meta_env();
  __reExport(ds_Toolbar_exports, __toESM(require_ds_raw()));
  var g51 = window.LumelFluent2Ds;
  var ds_Toolbar_default = g51["Toolbar"] !== void 0 ? g51["Toolbar"] : g51;

  // ds-shim:ds:Overflow
  var ds_Overflow_exports = {};
  __export(ds_Overflow_exports, {
    default: () => ds_Overflow_default
  });
  init_define_import_meta_env();
  __reExport(ds_Overflow_exports, __toESM(require_ds_raw()));
  var g52 = window.LumelFluent2Ds;
  var ds_Overflow_default = g52["Overflow"] !== void 0 ? g52["Overflow"] : g52;

  // ds-shim:ds:Dialog
  var ds_Dialog_exports = {};
  __export(ds_Dialog_exports, {
    default: () => ds_Dialog_default
  });
  init_define_import_meta_env();
  __reExport(ds_Dialog_exports, __toESM(require_ds_raw()));
  var g53 = window.LumelFluent2Ds;
  var ds_Dialog_default = g53["Dialog"] !== void 0 ? g53["Dialog"] : g53;

  // ds-shim:ds:Breadcrumb
  var ds_Breadcrumb_exports = {};
  __export(ds_Breadcrumb_exports, {
    default: () => ds_Breadcrumb_default
  });
  init_define_import_meta_env();
  __reExport(ds_Breadcrumb_exports, __toESM(require_ds_raw()));
  var g54 = window.LumelFluent2Ds;
  var ds_Breadcrumb_default = g54["Breadcrumb"] !== void 0 ? g54["Breadcrumb"] : g54;

  // ds-shim:ds:InfoLabel
  var ds_InfoLabel_exports = {};
  __export(ds_InfoLabel_exports, {
    default: () => ds_InfoLabel_default
  });
  init_define_import_meta_env();
  __reExport(ds_InfoLabel_exports, __toESM(require_ds_raw()));
  var g55 = window.LumelFluent2Ds;
  var ds_InfoLabel_default = g55["InfoLabel"] !== void 0 ? g55["InfoLabel"] : g55;

  // ds-shim:ds:SpinButton
  var ds_SpinButton_exports = {};
  __export(ds_SpinButton_exports, {
    default: () => ds_SpinButton_default
  });
  init_define_import_meta_env();
  __reExport(ds_SpinButton_exports, __toESM(require_ds_raw()));
  var g56 = window.LumelFluent2Ds;
  var ds_SpinButton_default = g56["SpinButton"] !== void 0 ? g56["SpinButton"] : g56;

  // ds-shim:ds:TagPicker
  var ds_TagPicker_exports = {};
  __export(ds_TagPicker_exports, {
    default: () => ds_TagPicker_default
  });
  init_define_import_meta_env();
  __reExport(ds_TagPicker_exports, __toESM(require_ds_raw()));
  var g57 = window.LumelFluent2Ds;
  var ds_TagPicker_default = g57["TagPicker"] !== void 0 ? g57["TagPicker"] : g57;

  // ds-shim:ds:Badge
  var ds_Badge_exports = {};
  __export(ds_Badge_exports, {
    default: () => ds_Badge_default
  });
  init_define_import_meta_env();
  __reExport(ds_Badge_exports, __toESM(require_ds_raw()));
  var g58 = window.LumelFluent2Ds;
  var ds_Badge_default = g58["Badge"] !== void 0 ? g58["Badge"] : g58;

  // ds-shim:ds:CounterBadge
  var ds_CounterBadge_exports = {};
  __export(ds_CounterBadge_exports, {
    default: () => ds_CounterBadge_default
  });
  init_define_import_meta_env();
  __reExport(ds_CounterBadge_exports, __toESM(require_ds_raw()));
  var g59 = window.LumelFluent2Ds;
  var ds_CounterBadge_default = g59["CounterBadge"] !== void 0 ? g59["CounterBadge"] : g59;

  // ds-shim:ds:PresenceBadge
  var ds_PresenceBadge_exports = {};
  __export(ds_PresenceBadge_exports, {
    default: () => ds_PresenceBadge_default
  });
  init_define_import_meta_env();
  __reExport(ds_PresenceBadge_exports, __toESM(require_ds_raw()));
  var g60 = window.LumelFluent2Ds;
  var ds_PresenceBadge_default = g60["PresenceBadge"] !== void 0 ? g60["PresenceBadge"] : g60;

  // ds-shim:ds:PresenceGroup
  var ds_PresenceGroup_exports = {};
  __export(ds_PresenceGroup_exports, {
    default: () => ds_PresenceGroup_default
  });
  init_define_import_meta_env();
  __reExport(ds_PresenceGroup_exports, __toESM(require_ds_raw()));
  var g61 = window.LumelFluent2Ds;
  var ds_PresenceGroup_default = g61["PresenceGroup"] !== void 0 ? g61["PresenceGroup"] : g61;

  // ds-shim:ds:AvatarGroup
  var ds_AvatarGroup_exports = {};
  __export(ds_AvatarGroup_exports, {
    default: () => ds_AvatarGroup_default
  });
  init_define_import_meta_env();
  __reExport(ds_AvatarGroup_exports, __toESM(require_ds_raw()));
  var g62 = window.LumelFluent2Ds;
  var ds_AvatarGroup_default = g62["AvatarGroup"] !== void 0 ? g62["AvatarGroup"] : g62;

  // ds-shim:ds:List
  var ds_List_exports = {};
  __export(ds_List_exports, {
    default: () => ds_List_default
  });
  init_define_import_meta_env();
  __reExport(ds_List_exports, __toESM(require_ds_raw()));
  var g63 = window.LumelFluent2Ds;
  var ds_List_default = g63["List"] !== void 0 ? g63["List"] : g63;

  // ds-shim:ds:Rating
  var ds_Rating_exports = {};
  __export(ds_Rating_exports, {
    default: () => ds_Rating_default
  });
  init_define_import_meta_env();
  __reExport(ds_Rating_exports, __toESM(require_ds_raw()));
  var g64 = window.LumelFluent2Ds;
  var ds_Rating_default = g64["Rating"] !== void 0 ? g64["Rating"] : g64;

  // ds-shim:ds:Tree
  var ds_Tree_exports = {};
  __export(ds_Tree_exports, {
    default: () => ds_Tree_default
  });
  init_define_import_meta_env();
  __reExport(ds_Tree_exports, __toESM(require_ds_raw()));
  var g65 = window.LumelFluent2Ds;
  var ds_Tree_default = g65["Tree"] !== void 0 ? g65["Tree"] : g65;

  // ds-shim:ds:InteractionTag
  var ds_InteractionTag_exports = {};
  __export(ds_InteractionTag_exports, {
    default: () => ds_InteractionTag_default
  });
  init_define_import_meta_env();
  __reExport(ds_InteractionTag_exports, __toESM(require_ds_raw()));
  var g66 = window.LumelFluent2Ds;
  var ds_InteractionTag_default = g66["InteractionTag"] !== void 0 ? g66["InteractionTag"] : g66;

  // ds-shim:ds:Image
  var ds_Image_exports = {};
  __export(ds_Image_exports, {
    default: () => ds_Image_default
  });
  init_define_import_meta_env();
  __reExport(ds_Image_exports, __toESM(require_ds_raw()));
  var g67 = window.LumelFluent2Ds;
  var ds_Image_default = g67["Image"] !== void 0 ? g67["Image"] : g67;

  // ds-shim:ds:Carousel
  var ds_Carousel_exports = {};
  __export(ds_Carousel_exports, {
    default: () => ds_Carousel_default
  });
  init_define_import_meta_env();
  __reExport(ds_Carousel_exports, __toESM(require_ds_raw()));
  var g68 = window.LumelFluent2Ds;
  var ds_Carousel_default = g68["Carousel"] !== void 0 ? g68["Carousel"] : g68;

  // ds-shim:ds:ColorPicker
  var ds_ColorPicker_exports = {};
  __export(ds_ColorPicker_exports, {
    default: () => ds_ColorPicker_default
  });
  init_define_import_meta_env();
  __reExport(ds_ColorPicker_exports, __toESM(require_ds_raw()));
  var g69 = window.LumelFluent2Ds;
  var ds_ColorPicker_default = g69["ColorPicker"] !== void 0 ? g69["ColorPicker"] : g69;

  // ds-shim:ds:SwatchPicker
  var ds_SwatchPicker_exports = {};
  __export(ds_SwatchPicker_exports, {
    default: () => ds_SwatchPicker_default
  });
  init_define_import_meta_env();
  __reExport(ds_SwatchPicker_exports, __toESM(require_ds_raw()));
  var g70 = window.LumelFluent2Ds;
  var ds_SwatchPicker_default = g70["SwatchPicker"] !== void 0 ? g70["SwatchPicker"] : g70;

  // ds-shim:ds:Portal
  var ds_Portal_exports = {};
  __export(ds_Portal_exports, {
    default: () => ds_Portal_default
  });
  init_define_import_meta_env();
  __reExport(ds_Portal_exports, __toESM(require_ds_raw()));
  var g71 = window.LumelFluent2Ds;
  var ds_Portal_default = g71["Portal"] !== void 0 ? g71["Portal"] : g71;

  // ds-shim:ds:Listbox
  var ds_Listbox_exports = {};
  __export(ds_Listbox_exports, {
    default: () => ds_Listbox_default
  });
  init_define_import_meta_env();
  __reExport(ds_Listbox_exports, __toESM(require_ds_raw()));
  var g72 = window.LumelFluent2Ds;
  var ds_Listbox_default = g72["Listbox"] !== void 0 ? g72["Listbox"] : g72;

  // ds-shim:ds:AnnounceProvider
  var ds_AnnounceProvider_exports = {};
  __export(ds_AnnounceProvider_exports, {
    default: () => ds_AnnounceProvider_default
  });
  init_define_import_meta_env();
  __reExport(ds_AnnounceProvider_exports, __toESM(require_ds_raw()));
  var g73 = window.LumelFluent2Ds;
  var ds_AnnounceProvider_default = g73["AnnounceProvider"] !== void 0 ? g73["AnnounceProvider"] : g73;

  // ds-shim:ds:TeachingPopover
  var ds_TeachingPopover_exports = {};
  __export(ds_TeachingPopover_exports, {
    default: () => ds_TeachingPopover_default
  });
  init_define_import_meta_env();
  __reExport(ds_TeachingPopover_exports, __toESM(require_ds_raw()));
  var g74 = window.LumelFluent2Ds;
  var ds_TeachingPopover_default = g74["TeachingPopover"] !== void 0 ? g74["TeachingPopover"] : g74;

  // src/stories/Toast.stories.tsx
  var import_jsx_runtime13 = __toESM(require_react_shim());
  function ToastDemo({ intent, title, body }) {
    const { showToast } = useToast();
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      Button,
      {
        appearance: "primary",
        onClick: () => showToast({ title, body, intent }),
        children: "Show toast"
      }
    );
  }
  function Wrapper({ intent, title, body }) {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(FluentProvider, { theme: webLightTheme, children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DSToaster, {}),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ToastDemo, { intent, title, body })
    ] });
  }
  var meta = {
    title: "Phase 3/Toast",
    component: DSToaster,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "Toast displays temporary, non-blocking notifications as a brief surface overlay. Uses an imperative API via the Toaster component and useToastController hook to dispatch notifications programmatically.\n\n**When to use:** Task status updates, progress notifications, non-critical error warnings, application update announcements. Best for transient messages that don't require immediate action and can auto-dismiss.\n\n**When NOT to use:** Critical confirmations requiring explicit user acknowledgment. Avoid rendering too many toasts at once or using different positions across the app."
        }
      }
    },
    argTypes: {
      position: { control: "select", options: ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end"] },
      limit: { control: "number" }
    }
  };
  var Toast_stories_default = meta;
  var Info2 = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Wrapper, { intent: "info", title: "Info", body: "This is an info message." })
  };
  var Success = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Wrapper, { intent: "success", title: "Saved!", body: "Your changes have been saved." })
  };
  var Warning = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Wrapper, { intent: "warning", title: "Warning", body: "Disk space is running low." })
  };
  var Error2 = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Wrapper, { intent: "error", title: "Error", body: "Failed to connect to the server." })
  };

  // .design-sync/.cache/previews/DSToaster.tsx
  function compose(S, key) {
    const meta2 = S.default ?? {};
    const st = S[key];
    const args = { ...meta2.args ?? {}, ...st && st.args ? st.args : {} };
    const at = { ...meta2.argTypes ?? {}, ...st && st.argTypes ? st.argTypes : {} };
    for (const k of Object.keys(args)) {
      const m = at[k] && at[k].mapping;
      if (m && typeof m === "object" && args[k] in m) args[k] = m[args[k]];
    }
    const title = typeof meta2.title === "string" ? meta2.title : "";
    const ctx = {
      args,
      name: key,
      title,
      kind: title,
      id: "",
      componentId: "",
      globals: {},
      viewMode: "story",
      parameters: (st && st.parameters) ?? meta2.parameters ?? {}
    };
    let render = null;
    if (st && typeof st.render === "function") render = () => st.render(args, ctx);
    else if (typeof st === "function") render = () => st(args, ctx);
    else if (typeof meta2.render === "function") render = () => meta2.render(args, ctx);
    else {
      const C = st && st.component || meta2.component;
      if (C) render = () => React65.createElement(C, args);
    }
    if (!render) return () => null;
    const decorators = [].concat((st && st.decorators) ?? []).concat(meta2.decorators ?? []);
    return decorators.reduce((inner, dec) => () => {
      const out = dec(inner, ctx);
      return out === void 0 ? inner() : out;
    }, render);
  }
  var Info3 = (
    /* Info */
    compose(Toast_stories_exports, "Info")
  );
  var Success2 = (
    /* Success */
    compose(Toast_stories_exports, "Success")
  );
  var Warning2 = (
    /* Warning */
    compose(Toast_stories_exports, "Warning")
  );
  var Error3 = (
    /* Error */
    compose(Toast_stories_exports, "Error")
  );
  return __toCommonJS(DSToaster_exports);
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
tabster/dist/esm/Groupper.js:
tabster/dist/esm/get/getGroupper.js:
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
