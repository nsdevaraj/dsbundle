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
      function jsx3(t, p, k) {
        return R.createElement(t, k === void 0 ? p : Object.assign({ key: k }, p));
      }
      module.exports = R;
      module.exports.jsx = jsx3;
      module.exports.jsxs = jsx3;
      module.exports.jsxDEV = jsx3;
      module.exports.Fragment = R.Fragment;
    }
  });

  // ds-raw:__ds_raw__
  var require_ds_raw = __commonJS({
    "ds-raw:__ds_raw__"(exports, module) {
      init_define_import_meta_env();
      module.exports = window.LumelFluent2Ds;
    }
  });

  // .design-sync/.cache/previews/ConfirmDialog.tsx
  var ConfirmDialog_exports = {};
  __export(ConfirmDialog_exports, {
    Default: () => Default2,
    DestructiveDelete: () => DestructiveDelete2,
    NoDescription: () => NoDescription2
  });
  init_define_import_meta_env();
  var React11 = __toESM(require_react_shim());

  // src/stories/ConfirmDialog.stories.tsx
  var ConfirmDialog_stories_exports = {};
  __export(ConfirmDialog_stories_exports, {
    Default: () => Default,
    DestructiveDelete: () => DestructiveDelete,
    NoDescription: () => NoDescription,
    default: () => ConfirmDialog_stories_default
  });
  init_define_import_meta_env();
  var import_react6 = __toESM(require_react_shim());

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

  // node_modules/@fluentui/react-utilities/lib/hooks/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/CustomStyleHooksContext.js
  init_define_import_meta_env();
  var React3 = __toESM(require_react_shim());
  var CustomStyleHooksContext = React3.createContext(void 0);
  var noop = () => {
  };
  var CustomStyleHooksProvider = CustomStyleHooksContext.Provider;
  var useCustomStyleHook = (hook) => {
    var _React_useContext;
    var _React_useContext_hook;
    return (_React_useContext_hook = (_React_useContext = React3.useContext(CustomStyleHooksContext)) === null || _React_useContext === void 0 ? void 0 : _React_useContext[hook]) !== null && _React_useContext_hook !== void 0 ? _React_useContext_hook : noop;
  };

  // node_modules/@fluentui/react-utilities/lib/hooks/useEventCallback.js
  init_define_import_meta_env();
  var React5 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-utilities/lib/hooks/useIsomorphicLayoutEffect.js
  init_define_import_meta_env();
  var React4 = __toESM(require_react_shim());

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

  // node_modules/@fluentui/react-utilities/lib/hooks/useIsomorphicLayoutEffect.js
  var useIsomorphicLayoutEffect = canUseDOM2() ? React4.useLayoutEffect : React4.useEffect;

  // node_modules/@fluentui/react-utilities/lib/hooks/useEventCallback.js
  var useEventCallback = (fn) => {
    const callbackRef = React5.useRef(() => {
      throw new Error("Cannot call an event handler while rendering");
    });
    useIsomorphicLayoutEffect(() => {
      callbackRef.current = fn;
    }, [
      fn
    ]);
    return React5.useCallback((...args) => {
      const callback = callbackRef.current;
      return callback(...args);
    }, [
      callbackRef
    ]);
  };

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
    return function jsx3(type, overrideProps, key, source, self) {
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
  var React6 = __toESM(require_react_shim());

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
      return Runtime.jsx(React6.Fragment, {
        children: renderFunction(elementType, props)
      }, key);
    }
    return Runtime.jsx(elementType, props, key);
  };

  // node_modules/@fluentui/react-jsx-runtime/lib/jsx/jsxsSlot.js
  init_define_import_meta_env();
  var React7 = __toESM(require_react_shim());
  var jsxsSlot = (type, overrideProps, key) => {
    const { elementType, renderFunction, props: slotProps } = getMetadataFromSlotComponent(type);
    const props = {
      ...slotProps,
      ...overrideProps
    };
    if (renderFunction) {
      return Runtime.jsx(React7.Fragment, {
        children: renderFunction(elementType, {
          ...props,
          children: Runtime.jsxs(React7.Fragment, {
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

  // node_modules/@fluentui/react-button/lib/components/Button/Button.js
  init_define_import_meta_env();
  var React9 = __toESM(require_react_shim());

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
  var React8 = __toESM(require_react_shim());
  var buttonContext = React8.createContext(void 0);
  var buttonContextDefaultValue = {};
  var ButtonContextProvider = buttonContext.Provider;
  var useButtonContext = () => {
    var _React_useContext;
    return (_React_useContext = React8.useContext(buttonContext)) !== null && _React_useContext !== void 0 ? _React_useContext : buttonContextDefaultValue;
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
  var useRootStyles = /* @__PURE__ */ __styles2({
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
    const rootStyles = useRootStyles();
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
  var Button = /* @__PURE__ */ React9.forwardRef((props, ref) => {
    const state = useButton_unstable(props, ref);
    useButtonStyles_unstable(state);
    useCustomStyleHook("useButtonStyles_unstable")(state);
    return renderButton_unstable(state);
  });
  Button.displayName = "Button";

  // ds-shim:ds:ConfirmDialog
  var ds_ConfirmDialog_exports = {};
  __export(ds_ConfirmDialog_exports, {
    default: () => ds_ConfirmDialog_default
  });
  init_define_import_meta_env();
  __reExport(ds_ConfirmDialog_exports, __toESM(require_ds_raw()));
  var g = window.LumelFluent2Ds;
  var ds_ConfirmDialog_default = g["ConfirmDialog"] !== void 0 ? g["ConfirmDialog"] : g;

  // src/stories/ConfirmDialog.stories.tsx
  var import_jsx_runtime4 = __toESM(require_react_shim());
  var meta = {
    title: "Components/ConfirmDialog",
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "ConfirmDialog is a pre-composed Dialog for confirmation prompts — a title, message, confirm button, and cancel button — providing a consistent pattern for irreversible or high-impact action confirmations."
        }
      }
    },
    argTypes: {
      intent: { control: "select", options: ["none", "error", "warning", "success", "info"] },
      confirmLabel: { control: "text" },
      cancelLabel: { control: "text" },
      title: { control: "text" }
    }
  };
  var ConfirmDialog_stories_default = meta;
  function DialogDemo({
    title,
    description,
    confirmLabel,
    confirmAppearance
  }) {
    const [open, setOpen] = (0, import_react6.useState)(false);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, { appearance: "primary", onClick: () => setOpen(true), children: "Open dialog" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        ds_ConfirmDialog_exports.ConfirmDialog,
        {
          open,
          onOpenChange: setOpen,
          title,
          description,
          confirmLabel: confirmLabel ?? "Confirm",
          confirmAppearance: confirmAppearance ?? "primary",
          onConfirm: () => alert("Confirmed!")
        }
      )
    ] });
  }
  var Default = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      DialogDemo,
      {
        title: "Confirm action?",
        description: "This will apply the selected changes. Are you sure?"
      }
    )
  };
  var DestructiveDelete = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      DialogDemo,
      {
        title: "Delete project?",
        description: "This action cannot be undone. All tasks and files will be permanently removed.",
        confirmLabel: "Delete"
      }
    )
  };
  var NoDescription = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DialogDemo, { title: "Are you sure?", confirmLabel: "Yes, proceed" })
  };

  // .design-sync/.cache/previews/ConfirmDialog.tsx
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
      if (C) render = () => React11.createElement(C, args);
    }
    if (!render) return () => null;
    const decorators = [].concat((st && st.decorators) ?? []).concat(meta2.decorators ?? []);
    return decorators.reduce((inner, dec) => () => {
      const out = dec(inner, ctx);
      return out === void 0 ? inner() : out;
    }, render);
  }
  var Default2 = (
    /* Default */
    compose(ConfirmDialog_stories_exports, "Default")
  );
  var DestructiveDelete2 = (
    /* Destructive Delete */
    compose(ConfirmDialog_stories_exports, "DestructiveDelete")
  );
  var NoDescription2 = (
    /* No Description */
    compose(ConfirmDialog_stories_exports, "NoDescription")
  );
  return __toCommonJS(ConfirmDialog_exports);
})();
