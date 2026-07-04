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

  // .design-sync/.cache/previews/Dropdown.tsx
  var Dropdown_exports = {};
  __export(Dropdown_exports, {
    AllAppearances: () => AllAppearances2,
    AllSizes: () => AllSizes2,
    DarkMode: () => DarkMode2,
    Default: () => Default2,
    Disabled: () => Disabled2,
    Grouped: () => Grouped2,
    Multiselect: () => Multiselect2,
    MultiselectWithDefaults: () => MultiselectWithDefaults2,
    Small: () => Small2,
    WithDefaultValue: () => WithDefaultValue2,
    WithDisabledOption: () => WithDisabledOption2
  });
  init_define_import_meta_env();
  var React20 = __toESM(require_react_shim());

  // src/stories/Dropdown.stories.tsx
  var Dropdown_stories_exports = {};
  __export(Dropdown_stories_exports, {
    AllAppearances: () => AllAppearances,
    AllSizes: () => AllSizes,
    DarkMode: () => DarkMode,
    Default: () => Default,
    Disabled: () => Disabled,
    Grouped: () => Grouped,
    Multiselect: () => Multiselect,
    MultiselectWithDefaults: () => MultiselectWithDefaults,
    Small: () => Small,
    WithDefaultValue: () => WithDefaultValue,
    WithDisabledOption: () => WithDisabledOption,
    default: () => Dropdown_stories_default
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

  // node_modules/@griffel/react/src/RendererContext.js
  init_define_import_meta_env();
  var import_jsx_runtime = __toESM(require_react_shim());
  var import_react = __toESM(require_react_shim());
  var RendererContext = /* @__PURE__ */ (0, import_react.createContext)(/* @__PURE__ */ createDOMRenderer());
  function useRenderer() {
    return (0, import_react.useContext)(RendererContext);
  }

  // node_modules/@griffel/react/src/TextDirectionContext.js
  init_define_import_meta_env();
  var import_jsx_runtime2 = __toESM(require_react_shim());
  var import_react2 = __toESM(require_react_shim());
  var TextDirectionContext = /* @__PURE__ */ (0, import_react2.createContext)("ltr");
  var TextDirectionProvider = ({ children, dir }) => {
    return (0, import_jsx_runtime2.jsx)(TextDirectionContext.Provider, { value: dir, children });
  };

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
  var React19 = __toESM(require_react_shim());

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
  var React = __toESM(require_react_shim());

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
    React.isValidElement(value)) {
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

  // node_modules/@fluentui/react-shared-contexts/lib/ThemeContext.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/ThemeContext/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/ThemeContext/ThemeContext.js
  init_define_import_meta_env();
  var React2 = __toESM(require_react_shim());
  var ThemeContext = React2.createContext(void 0);
  var ThemeProvider = ThemeContext.Provider;

  // node_modules/@fluentui/react-shared-contexts/lib/ThemeClassNameContext.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/ThemeClassNameContext/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/ThemeClassNameContext/ThemeClassNameContext.js
  init_define_import_meta_env();
  var React3 = __toESM(require_react_shim());
  var ThemeClassNameContext = React3.createContext(void 0);
  var ThemeClassNameProvider = ThemeClassNameContext.Provider;

  // node_modules/@fluentui/react-shared-contexts/lib/TooltipVisibilityContext.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/TooltipVisibilityContext/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/TooltipVisibilityContext/TooltipContext.js
  init_define_import_meta_env();
  var React4 = __toESM(require_react_shim());
  var TooltipVisibilityContext = React4.createContext(void 0);
  var TooltipVisibilityProvider = TooltipVisibilityContext.Provider;

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

  // node_modules/@fluentui/react-shared-contexts/lib/OverridesContext/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/OverridesContext/OverridesContext.js
  init_define_import_meta_env();
  var React6 = __toESM(require_react_shim());
  var OverridesContext = React6.createContext(void 0);
  var OverridesProvider = OverridesContext.Provider;
  function useOverrides() {
    var _React_useContext;
    return (_React_useContext = React6.useContext(OverridesContext)) !== null && _React_useContext !== void 0 ? _React_useContext : {};
  }

  // node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/CustomStyleHooksContext.js
  init_define_import_meta_env();
  var React7 = __toESM(require_react_shim());
  var CustomStyleHooksContext = React7.createContext(void 0);
  var CustomStyleHooksProvider = CustomStyleHooksContext.Provider;

  // node_modules/@fluentui/react-utilities/lib/hooks/useIsomorphicLayoutEffect.js
  init_define_import_meta_env();
  var React9 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-utilities/lib/ssr/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-utilities/lib/ssr/canUseDOM.js
  init_define_import_meta_env();
  function canUseDOM() {
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
  var useIsomorphicLayoutEffect = canUseDOM() ? React9.useLayoutEffect : React9.useEffect;

  // node_modules/@fluentui/react-utilities/lib/hooks/useId.js
  init_define_import_meta_env();
  var React10 = __toESM(require_react_shim());
  var IdPrefixContext = React10.createContext(void 0);
  var IdPrefixProvider = IdPrefixContext.Provider;
  function useIdPrefix() {
    return React10.useContext(IdPrefixContext) || "";
  }
  function useId2(prefix = "fui-", providedId) {
    "use no memo";
    const contextValue = useSSRContext();
    const idPrefix = useIdPrefix();
    const _useId = React10["useId"];
    if (_useId) {
      const generatedId = _useId();
      const escapedId = React10.useMemo(() => generatedId.replace(/:/g, ""), [
        generatedId
      ]);
      return providedId || `${idPrefix}${prefix}${escapedId}`;
    }
    return React10.useMemo(() => {
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
  var React11 = __toESM(require_react_shim());
  function useMergedRefs(...refs) {
    "use no memo";
    const mergedCallback = React11.useCallback(
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

  // node_modules/@fluentui/react-utilities/lib/utils/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-utilities/lib/utils/isHTMLElement.js
  init_define_import_meta_env();
  function isHTMLElement(element, options) {
    var _typedElement_ownerDocument;
    const typedElement = element;
    var _options_constructorName;
    return Boolean((typedElement === null || typedElement === void 0 ? void 0 : (_typedElement_ownerDocument = typedElement.ownerDocument) === null || _typedElement_ownerDocument === void 0 ? void 0 : _typedElement_ownerDocument.defaultView) && typedElement instanceof typedElement.ownerDocument.defaultView[(_options_constructorName = options === null || options === void 0 ? void 0 : options.constructorName) !== null && _options_constructorName !== void 0 ? _options_constructorName : "HTMLElement"]);
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
  var React12 = __toESM(require_react_shim());

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
      return Runtime.jsx(React12.Fragment, {
        children: renderFunction(elementType, props)
      }, key);
    }
    return Runtime.jsx(elementType, props, key);
  };

  // node_modules/@fluentui/react-jsx-runtime/lib/jsx/jsxsSlot.js
  init_define_import_meta_env();
  var React13 = __toESM(require_react_shim());
  var jsxsSlot = (type, overrideProps, key) => {
    const { elementType, renderFunction, props: slotProps } = getMetadataFromSlotComponent(type);
    const props = {
      ...slotProps,
      ...overrideProps
    };
    if (renderFunction) {
      return Runtime.jsx(React13.Fragment, {
        children: renderFunction(elementType, {
          ...props,
          children: Runtime.jsxs(React13.Fragment, {
            children: props.children
          }, void 0)
        })
      }, key);
    }
    return Runtime.jsxs(elementType, props, key);
  };

  // node_modules/@fluentui/react-jsx-runtime/lib/jsx-runtime.js
  var import_react3 = __toESM(require_react_shim());
  var jsx = createJSX(Runtime.jsx, jsxSlot);
  var jsxs = createJSX(Runtime.jsxs, jsxsSlot);

  // node_modules/@fluentui/react-icons/lib/providers.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-icons/lib/contexts/IconDirectionContext.js
  init_define_import_meta_env();
  var React14 = __toESM(require_react_shim());
  var IconDirectionContext = React14.createContext(void 0);
  var IconDirectionContextProvider = IconDirectionContext.Provider;

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
                        canUseDOM() ? null : /* @__PURE__ */ jsx("style", {
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

  // node_modules/@fluentui/react-tabster/lib/hooks/useFocusVisible.js
  init_define_import_meta_env();
  var React15 = __toESM(require_react_shim());

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
    const scopeRef = React15.useRef(null);
    var _options_targetDocument;
    const targetDocument = (_options_targetDocument = options.targetDocument) !== null && _options_targetDocument !== void 0 ? _options_targetDocument : contextValue.targetDocument;
    React15.useEffect(() => {
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
  var grey10Alpha = {
    "5": "rgba(26, 26, 26, 0.05)",
    "10": "rgba(26, 26, 26, 0.1)",
    "20": "rgba(26, 26, 26, 0.2)",
    "30": "rgba(26, 26, 26, 0.3)",
    "40": "rgba(26, 26, 26, 0.4)",
    "50": "rgba(26, 26, 26, 0.5)",
    "60": "rgba(26, 26, 26, 0.6)",
    "70": "rgba(26, 26, 26, 0.7)",
    "80": "rgba(26, 26, 26, 0.8)",
    "90": "rgba(26, 26, 26, 0.9)"
  };
  var grey12Alpha = {
    "5": "rgba(31, 31, 31, 0.05)",
    "10": "rgba(31, 31, 31, 0.1)",
    "20": "rgba(31, 31, 31, 0.2)",
    "30": "rgba(31, 31, 31, 0.3)",
    "40": "rgba(31, 31, 31, 0.4)",
    "50": "rgba(31, 31, 31, 0.5)",
    "60": "rgba(31, 31, 31, 0.6)",
    "70": "rgba(31, 31, 31, 0.7)",
    "80": "rgba(31, 31, 31, 0.8)",
    "90": "rgba(31, 31, 31, 0.9)"
  };
  var grey14Alpha = {
    "5": "rgba(36, 36, 36, 0.05)",
    "10": "rgba(36, 36, 36, 0.1)",
    "20": "rgba(36, 36, 36, 0.2)",
    "30": "rgba(36, 36, 36, 0.3)",
    "40": "rgba(36, 36, 36, 0.4)",
    "50": "rgba(36, 36, 36, 0.5)",
    "60": "rgba(36, 36, 36, 0.6)",
    "70": "rgba(36, 36, 36, 0.7)",
    "80": "rgba(36, 36, 36, 0.8)",
    "90": "rgba(36, 36, 36, 0.9)"
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

  // node_modules/@fluentui/tokens/lib/alias/darkColorPalette.js
  init_define_import_meta_env();
  var statusColorPaletteTokens = statusSharedColorNames.reduce((acc, sharedColor) => {
    const color = sharedColor.slice(0, 1).toUpperCase() + sharedColor.slice(1);
    const sharedColorTokens = {
      [`colorPalette${color}Background1`]: statusSharedColors[sharedColor].shade40,
      [`colorPalette${color}Background2`]: statusSharedColors[sharedColor].shade30,
      [`colorPalette${color}Background3`]: statusSharedColors[sharedColor].primary,
      [`colorPalette${color}Foreground1`]: statusSharedColors[sharedColor].tint30,
      [`colorPalette${color}Foreground2`]: statusSharedColors[sharedColor].tint40,
      [`colorPalette${color}Foreground3`]: statusSharedColors[sharedColor].tint20,
      [`colorPalette${color}BorderActive`]: statusSharedColors[sharedColor].tint30,
      [`colorPalette${color}Border1`]: statusSharedColors[sharedColor].primary,
      [`colorPalette${color}Border2`]: statusSharedColors[sharedColor].tint20
    };
    return Object.assign(acc, sharedColorTokens);
  }, {});
  statusColorPaletteTokens.colorPaletteRedForeground3 = statusSharedColors.red.tint30;
  statusColorPaletteTokens.colorPaletteRedBorder2 = statusSharedColors.red.tint30;
  statusColorPaletteTokens.colorPaletteGreenForeground3 = statusSharedColors.green.tint40;
  statusColorPaletteTokens.colorPaletteGreenBorder2 = statusSharedColors.green.tint40;
  statusColorPaletteTokens.colorPaletteDarkOrangeForeground3 = statusSharedColors.darkOrange.tint30;
  statusColorPaletteTokens.colorPaletteDarkOrangeBorder2 = statusSharedColors.darkOrange.tint30;
  statusColorPaletteTokens.colorPaletteRedForegroundInverted = statusSharedColors.red.primary;
  statusColorPaletteTokens.colorPaletteGreenForegroundInverted = statusSharedColors.green.primary;
  statusColorPaletteTokens.colorPaletteYellowForegroundInverted = statusSharedColors.yellow.shade30;
  var personaColorPaletteTokens = personaSharedColorNames.reduce((acc, sharedColor) => {
    const color = sharedColor.slice(0, 1).toUpperCase() + sharedColor.slice(1);
    const sharedColorTokens = {
      [`colorPalette${color}Background2`]: personaSharedColors[sharedColor].shade30,
      [`colorPalette${color}Foreground2`]: personaSharedColors[sharedColor].tint40,
      [`colorPalette${color}BorderActive`]: personaSharedColors[sharedColor].tint30
    };
    return Object.assign(acc, sharedColorTokens);
  }, {});
  personaColorPaletteTokens.colorPaletteDarkRedBackground2 = personaSharedColors.darkRed.shade20;
  personaColorPaletteTokens.colorPalettePlumBackground2 = personaSharedColors.plum.shade20;
  var colorPaletteTokens = {
    ...statusColorPaletteTokens,
    ...personaColorPaletteTokens
  };
  var colorStatusTokens = Object.entries(statusColorMapping).reduce((acc, [statusColor, sharedColor]) => {
    const color = statusColor.slice(0, 1).toUpperCase() + statusColor.slice(1);
    const statusColorTokens = {
      [`colorStatus${color}Background1`]: mappedStatusColors[sharedColor].shade40,
      [`colorStatus${color}Background2`]: mappedStatusColors[sharedColor].shade30,
      [`colorStatus${color}Background3`]: mappedStatusColors[sharedColor].primary,
      [`colorStatus${color}Foreground1`]: mappedStatusColors[sharedColor].tint30,
      [`colorStatus${color}Foreground2`]: mappedStatusColors[sharedColor].tint40,
      [`colorStatus${color}Foreground3`]: mappedStatusColors[sharedColor].tint20,
      [`colorStatus${color}BorderActive`]: mappedStatusColors[sharedColor].tint30,
      [`colorStatus${color}ForegroundInverted`]: mappedStatusColors[sharedColor].shade10,
      [`colorStatus${color}Border1`]: mappedStatusColors[sharedColor].primary,
      [`colorStatus${color}Border2`]: mappedStatusColors[sharedColor].tint20
    };
    return Object.assign(acc, statusColorTokens);
  }, {});
  colorStatusTokens.colorStatusDangerBackground3Hover = mappedStatusColors[statusColorMapping.danger].shade10;
  colorStatusTokens.colorStatusDangerBackground3Pressed = mappedStatusColors[statusColorMapping.danger].shade20;
  colorStatusTokens.colorStatusDangerForeground3 = mappedStatusColors[statusColorMapping.danger].tint40;
  colorStatusTokens.colorStatusDangerBorder2 = mappedStatusColors[statusColorMapping.danger].tint30;
  colorStatusTokens.colorStatusSuccessForeground3 = mappedStatusColors[statusColorMapping.success].tint40;
  colorStatusTokens.colorStatusSuccessBorder2 = mappedStatusColors[statusColorMapping.success].tint40;
  colorStatusTokens.colorStatusWarningForegroundInverted = mappedStatusColors[statusColorMapping.warning].shade20;

  // node_modules/@fluentui/tokens/lib/utils/createDarkTheme.js
  init_define_import_meta_env();

  // node_modules/@fluentui/tokens/lib/alias/darkColor.js
  init_define_import_meta_env();
  var generateColorTokens = (brand) => ({
    colorNeutralForeground1: white,
    colorNeutralForeground1Hover: white,
    colorNeutralForeground1Pressed: white,
    colorNeutralForeground1Selected: white,
    colorNeutralForeground2: grey[84],
    colorNeutralForeground2Hover: white,
    colorNeutralForeground2Pressed: white,
    colorNeutralForeground2Selected: white,
    colorNeutralForeground2BrandHover: brand[100],
    colorNeutralForeground2BrandPressed: brand[90],
    colorNeutralForeground2BrandSelected: brand[100],
    colorNeutralForeground3: grey[68],
    colorNeutralForeground3Hover: grey[84],
    colorNeutralForeground3Pressed: grey[84],
    colorNeutralForeground3Selected: grey[84],
    colorNeutralForeground3BrandHover: brand[100],
    colorNeutralForeground3BrandPressed: brand[90],
    colorNeutralForeground3BrandSelected: brand[100],
    colorNeutralForeground4: grey[60],
    colorNeutralForeground5: grey[68],
    colorNeutralForeground5Hover: white,
    colorNeutralForeground5Pressed: white,
    colorNeutralForeground5Selected: white,
    colorNeutralForegroundDisabled: grey[36],
    colorNeutralForegroundInvertedDisabled: whiteAlpha[40],
    colorBrandForegroundLink: brand[100],
    colorBrandForegroundLinkHover: brand[110],
    colorBrandForegroundLinkPressed: brand[90],
    colorBrandForegroundLinkSelected: brand[100],
    colorNeutralForeground2Link: grey[84],
    colorNeutralForeground2LinkHover: white,
    colorNeutralForeground2LinkPressed: white,
    colorNeutralForeground2LinkSelected: white,
    colorCompoundBrandForeground1: brand[100],
    colorCompoundBrandForeground1Hover: brand[110],
    colorCompoundBrandForeground1Pressed: brand[90],
    colorBrandForeground1: brand[100],
    colorBrandForeground2: brand[110],
    colorBrandForeground2Hover: brand[130],
    colorBrandForeground2Pressed: brand[160],
    colorNeutralForeground1Static: grey[14],
    colorNeutralForegroundStaticInverted: white,
    colorNeutralForegroundInverted: grey[14],
    colorNeutralForegroundInvertedHover: grey[14],
    colorNeutralForegroundInvertedPressed: grey[14],
    colorNeutralForegroundInvertedSelected: grey[14],
    colorNeutralForegroundInverted2: grey[14],
    colorNeutralForegroundOnBrand: white,
    colorNeutralForegroundInvertedLink: white,
    colorNeutralForegroundInvertedLinkHover: white,
    colorNeutralForegroundInvertedLinkPressed: white,
    colorNeutralForegroundInvertedLinkSelected: white,
    colorBrandForegroundInverted: brand[80],
    colorBrandForegroundInvertedHover: brand[70],
    colorBrandForegroundInvertedPressed: brand[60],
    colorBrandForegroundOnLight: brand[80],
    colorBrandForegroundOnLightHover: brand[70],
    colorBrandForegroundOnLightPressed: brand[50],
    colorBrandForegroundOnLightSelected: brand[60],
    colorNeutralBackground1: grey[16],
    colorNeutralBackground1Hover: grey[24],
    colorNeutralBackground1Pressed: grey[12],
    colorNeutralBackground1Selected: grey[22],
    colorNeutralBackground2: grey[12],
    colorNeutralBackground2Hover: grey[20],
    colorNeutralBackground2Pressed: grey[8],
    colorNeutralBackground2Selected: grey[18],
    colorNeutralBackground3: grey[8],
    colorNeutralBackground3Hover: grey[16],
    colorNeutralBackground3Pressed: grey[4],
    colorNeutralBackground3Selected: grey[14],
    colorNeutralBackground4: grey[4],
    colorNeutralBackground4Hover: grey[12],
    colorNeutralBackground4Pressed: black,
    colorNeutralBackground4Selected: grey[10],
    colorNeutralBackground5: black,
    colorNeutralBackground5Hover: grey[8],
    colorNeutralBackground5Pressed: grey[2],
    colorNeutralBackground5Selected: grey[6],
    colorNeutralBackground6: grey[20],
    colorNeutralBackground7: "#00000000",
    colorNeutralBackground7Hover: grey[10],
    colorNeutralBackground7Pressed: grey[4],
    colorNeutralBackground7Selected: "#00000000",
    colorNeutralBackground8: grey[16],
    colorNeutralBackgroundInverted: white,
    colorNeutralBackgroundInvertedHover: grey[96],
    colorNeutralBackgroundInvertedPressed: grey[88],
    colorNeutralBackgroundInvertedSelected: grey[92],
    colorNeutralBackgroundStatic: grey[24],
    colorNeutralBackgroundAlpha: grey10Alpha[50],
    colorNeutralBackgroundAlpha2: grey12Alpha[70],
    colorSubtleBackground: "transparent",
    colorSubtleBackgroundHover: grey[22],
    colorSubtleBackgroundPressed: grey[18],
    colorSubtleBackgroundSelected: grey[20],
    colorSubtleBackgroundLightAlphaHover: grey14Alpha[80],
    colorSubtleBackgroundLightAlphaPressed: grey14Alpha[50],
    colorSubtleBackgroundLightAlphaSelected: "transparent",
    colorSubtleBackgroundInverted: "transparent",
    colorSubtleBackgroundInvertedHover: blackAlpha[10],
    colorSubtleBackgroundInvertedPressed: blackAlpha[30],
    colorSubtleBackgroundInvertedSelected: blackAlpha[20],
    colorTransparentBackground: "transparent",
    colorTransparentBackgroundHover: "transparent",
    colorTransparentBackgroundPressed: "transparent",
    colorTransparentBackgroundSelected: "transparent",
    colorNeutralBackgroundDisabled: grey[8],
    colorNeutralBackgroundDisabled2: grey[16],
    colorNeutralBackgroundInvertedDisabled: whiteAlpha[10],
    colorNeutralStencil1: grey[34],
    colorNeutralStencil2: grey[20],
    colorNeutralStencil1Alpha: whiteAlpha[10],
    colorNeutralStencil2Alpha: whiteAlpha[5],
    colorBackgroundOverlay: blackAlpha[50],
    colorScrollbarOverlay: whiteAlpha[60],
    colorBrandBackground: brand[70],
    colorBrandBackgroundHover: brand[80],
    colorBrandBackgroundPressed: brand[40],
    colorBrandBackgroundSelected: brand[60],
    colorCompoundBrandBackground: brand[100],
    colorCompoundBrandBackgroundHover: brand[110],
    colorCompoundBrandBackgroundPressed: brand[90],
    colorBrandBackgroundStatic: brand[80],
    colorBrandBackground2: brand[20],
    colorBrandBackground2Hover: brand[40],
    colorBrandBackground2Pressed: brand[10],
    colorBrandBackground3Static: brand[60],
    colorBrandBackground4Static: brand[40],
    colorBrandBackgroundInverted: white,
    colorBrandBackgroundInvertedHover: brand[160],
    colorBrandBackgroundInvertedPressed: brand[140],
    colorBrandBackgroundInvertedSelected: brand[150],
    colorNeutralCardBackground: grey[20],
    colorNeutralCardBackgroundHover: grey[24],
    colorNeutralCardBackgroundPressed: grey[18],
    colorNeutralCardBackgroundSelected: grey[22],
    colorNeutralCardBackgroundDisabled: grey[8],
    colorNeutralStrokeAccessible: grey[68],
    colorNeutralStrokeAccessibleHover: grey[74],
    colorNeutralStrokeAccessiblePressed: grey[70],
    colorNeutralStrokeAccessibleSelected: brand[100],
    colorNeutralStroke1: grey[40],
    colorNeutralStroke1Hover: grey[46],
    colorNeutralStroke1Pressed: grey[42],
    colorNeutralStroke1Selected: grey[44],
    colorNeutralStroke2: grey[32],
    colorNeutralStroke3: grey[24],
    colorNeutralStroke4: grey[24],
    colorNeutralStroke4Hover: grey[18],
    colorNeutralStroke4Pressed: grey[14],
    colorNeutralStroke4Selected: grey[24],
    colorNeutralStrokeSubtle: grey[4],
    colorNeutralStrokeOnBrand: grey[16],
    colorNeutralStrokeOnBrand2: white,
    colorNeutralStrokeOnBrand2Hover: white,
    colorNeutralStrokeOnBrand2Pressed: white,
    colorNeutralStrokeOnBrand2Selected: white,
    colorBrandStroke1: brand[100],
    colorBrandStroke2: brand[50],
    colorBrandStroke2Hover: brand[50],
    colorBrandStroke2Pressed: brand[30],
    colorBrandStroke2Contrast: brand[50],
    colorCompoundBrandStroke: brand[100],
    colorCompoundBrandStrokeHover: brand[110],
    colorCompoundBrandStrokePressed: brand[90],
    colorNeutralStrokeDisabled: grey[26],
    colorNeutralStrokeDisabled2: grey[24],
    colorNeutralStrokeInvertedDisabled: whiteAlpha[40],
    colorTransparentStroke: "transparent",
    colorTransparentStrokeInteractive: "transparent",
    colorTransparentStrokeDisabled: "transparent",
    colorNeutralStrokeAlpha: whiteAlpha[10],
    colorNeutralStrokeAlpha2: whiteAlpha[20],
    colorStrokeFocus1: black,
    colorStrokeFocus2: white,
    colorNeutralShadowAmbient: "rgba(0,0,0,0.24)",
    colorNeutralShadowKey: "rgba(0,0,0,0.28)",
    colorNeutralShadowAmbientLighter: "rgba(0,0,0,0.12)",
    colorNeutralShadowKeyLighter: "rgba(0,0,0,0.14)",
    colorNeutralShadowAmbientDarker: "rgba(0,0,0,0.40)",
    colorNeutralShadowKeyDarker: "rgba(0,0,0,0.48)",
    colorBrandShadowAmbient: "rgba(0,0,0,0.30)",
    colorBrandShadowKey: "rgba(0,0,0,0.25)"
  });

  // node_modules/@fluentui/tokens/lib/utils/createDarkTheme.js
  var createDarkTheme = (brand) => {
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

  // node_modules/@fluentui/tokens/lib/utils/index.js
  init_define_import_meta_env();

  // node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProvider.js
  var React17 = __toESM(require_react_shim());

  // node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProviderThemeStyleTag.js
  init_define_import_meta_env();
  var React16 = __toESM(require_react_shim());

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
  var useInsertionEffect2 = React16["useInsertionEffect"] ? React16["useInsertionEffect"] : useIsomorphicLayoutEffect;
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
    const styleTag = React16.useRef(void 0);
    const styleTagId = useId2(fluentProviderClassNames.root);
    const styleElementAttributes = rendererAttributes;
    const rule = React16.useMemo(() => createCSSRuleFromTheme(`.${styleTagId}`, theme), [
      theme,
      styleTagId
    ]);
    if (true) {
      React16.useMemo(() => {
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
    useInsertionEffect2(() => {
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
    React16.useState(() => {
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
    const parentCustomStyleHooks = React17.useContext(CustomStyleHooksContext) || DEFAULT_STYLE_HOOKS;
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
      React17.useEffect(() => {
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
    return React17.useContext(ThemeContext);
  }

  // node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProviderContextValues.js
  init_define_import_meta_env();
  var React18 = __toESM(require_react_shim());
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
    const provider = React18.useMemo(() => ({
      dir,
      targetDocument
    }), [
      dir,
      targetDocument
    ]);
    const [tooltip] = React18.useState(() => ({}));
    const iconDirection = React18.useMemo(() => ({
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
  var FluentProvider = /* @__PURE__ */ React19.forwardRef((props, ref) => {
    const state = useFluentProvider_unstable(props, ref);
    useFluentProviderStyles_unstable(state);
    const contextValues = useFluentProviderContextValues_unstable(state);
    return renderFluentProvider_unstable(state, contextValues);
  });
  FluentProvider.displayName = "FluentProvider";

  // ds-shim:ds:Dropdown
  var ds_Dropdown_exports = {};
  __export(ds_Dropdown_exports, {
    default: () => ds_Dropdown_default
  });
  init_define_import_meta_env();
  __reExport(ds_Dropdown_exports, __toESM(require_ds_raw()));
  var g = window.LumelFluent2Ds;
  var ds_Dropdown_default = g["Dropdown"] !== void 0 ? g["Dropdown"] : g;

  // src/themes/index.ts
  init_define_import_meta_env();

  // src/tokens/brand.ts
  init_define_import_meta_env();
  var brandColors = {
    10: "#001919",
    20: "#012826",
    30: "#01322E",
    40: "#033F38",
    50: "#054D43",
    60: "#0A5C50",
    70: "#0C695A",
    80: "#117865",
    // Primary
    90: "#1F937E",
    100: "#2AAC94",
    // Dark Primary
    110: "#3ABB9F",
    120: "#52C7AA",
    130: "#78D3B9",
    140: "#9EE0CB",
    150: "#C0ECDD",
    160: "#E3F7EF"
  };

  // src/tokens/ribbonColors.ts
  init_define_import_meta_env();
  var ribbonColorsDark = {
    colorRibbonIconDismiss: "#C50F1F",
    colorRibbonIconManage: "#0078D4",
    colorRibbonIconMove: "#B146C2",
    colorRibbonIconObject: "#FFFFFF",
    colorRibbonIconSuccess: "#13A10E",
    colorRibbonIconTrigger: "#C19C00",
    colorRibbonIconWarning: "#F7630C"
  };

  // src/tokens/dataVizColors.ts
  init_define_import_meta_env();
  var dataVizColorsDark = {
    // Slots 1-10: same in light and dark
    colorDataSlot1: "#2AA0A4",
    colorDataSlot2: "#B146C2",
    colorDataSlot3: "#637CEF",
    colorDataSlot4: "#9373C0",
    colorDataSlot5: "#3A96DD",
    colorDataSlot6: "#13A10E",
    colorDataSlot7: "#CA5010",
    colorDataSlot8: "#E3008C",
    colorDataSlot9: "#57811B",
    colorDataSlot10: "#AE8C00",
    // Slots 11-40: dark-specific
    colorDataSlot11: "#4CB4B7",
    colorDataSlot12: "#C36BD1",
    colorDataSlot13: "#93A4F4",
    colorDataSlot14: "#A083C9",
    colorDataSlot15: "#4FA1E1",
    colorDataSlot16: "#27AC22",
    colorDataSlot17: "#D77440",
    colorDataSlot18: "#EE5FB7",
    colorDataSlot19: "#73AA24",
    colorDataSlot20: "#D0B232",
    colorDataSlot21: "#038387",
    colorDataSlot22: "#BA58C9",
    colorDataSlot23: "#4F6BED",
    colorDataSlot24: "#8764B8",
    colorDataSlot25: "#3487C7",
    colorDataSlot26: "#11910D",
    colorDataSlot27: "#D06228",
    colorDataSlot28: "#EA38A6",
    colorDataSlot29: "#689920",
    colorDataSlot30: "#C19C00",
    colorDataSlot31: "#9BD9DB",
    colorDataSlot32: "#CF87DA",
    colorDataSlot33: "#C8D1FA",
    colorDataSlot34: "#B29AD4",
    colorDataSlot35: "#83BDEB",
    colorDataSlot36: "#A7E3A5",
    colorDataSlot37: "#DF8E64",
    colorDataSlot38: "#F7ADDA",
    colorDataSlot39: "#A4CC6C",
    colorDataSlot40: "#DAC157",
    // Sequential 1 — same as light
    colorSequence1color1: "#012728",
    colorSequence1color2: "#02494C",
    colorSequence1color3: "#026467",
    colorSequence1color4: "#037679",
    colorSequence1color5: "#038387",
    colorSequence1color6: "#159195",
    colorSequence1color7: "#2AA0A4",
    colorSequence1color8: "#41A3A3",
    colorSequence1color9: "#9BD9DB",
    colorSequence1color10: "#CEF3F5",
    // Sequential 2 — same as light
    colorSequence2color1: "#35153A",
    colorSequence2color2: "#63276D",
    colorSequence2color3: "#863593",
    colorSequence2color4: "#9F3FAF",
    colorSequence2color5: "#B146C2",
    colorSequence2color6: "#BA58C9",
    colorSequence2color7: "#C36BD1",
    colorSequence2color8: "#CF87DA",
    colorSequence2color9: "#E6BFED",
    colorSequence2color10: "#F2DCF5",
    // Diverging 1 — same as light
    colorDiverging1color1: "#02494C",
    colorDiverging1color2: "#026467",
    colorDiverging1color3: "#159195",
    colorDiverging1color4: "#4CB4B7",
    colorDiverging1color5: "#D2D0CE",
    colorDiverging1color6: "#DAC157",
    colorDiverging1color7: "#C19C00",
    colorDiverging1color8: "#937700",
    colorDiverging1color9: "#6C5700",
    // Diverging 2 — same as light
    colorDiverging2color1: "#037679",
    colorDiverging2color2: "#159195",
    colorDiverging2color3: "#4CB4B7",
    colorDiverging2color4: "#DAC157",
    colorDiverging2color5: "#C19C00",
    colorDiverging2color6: "#D77440",
    colorDiverging2color7: "#CA5010",
    colorDiverging2color8: "#9A3D0C",
    // Alert — dark values
    colorAlert1: "#CC2635",
    colorAlert2: "#DC626D",
    colorAlert3: "#F87528",
    colorAlert4: "#54B054",
    colorAlert5: "#218C21",
    colorAlert6: "#4D4D4D",
    colorAlert7: "#333333",
    // Transparency slots — same as light
    colorTransparencyDataSlot1: "#41A3A3",
    colorTransparencyDataSlot2: "#CF87DA",
    colorTransparencyDataSlot3: "#93A4F4",
    colorTransparencyDataSlot4: "#B29AD4",
    colorTransparencyDataSlot5: "#83BDEB",
    colorTransparencyDataSlot6: "#5EC75A",
    colorTransparencyDataSlot7: "#DF8E64",
    colorTransparencyDataSlot8: "#EE5FB7",
    colorTransparencyDataSlot9: "#A4CC6C",
    colorTransparencyDataSlot10: "#DAC157"
  };

  // src/themes/darkTheme.ts
  init_define_import_meta_env();
  var darkTheme = {
    ...createDarkTheme(brandColors),
    // ── Dark mode brand foreground tweak ──────────────────────────────────────
    // In dark mode, brand foreground needs to be lighter for WCAG AA contrast.
    colorBrandForeground1: brandColors[110],
    colorBrandForeground2: brandColors[120],
    // ── Ribbon icon colors ────────────────────────────────────────────────────
    ...ribbonColorsDark,
    // ── Data visualization colors ─────────────────────────────────────────────
    ...dataVizColorsDark
  };

  // src/stories/Dropdown.stories.tsx
  var import_jsx_runtime4 = __toESM(require_react_shim());
  var meta = {
    title: "Components/Dropdown",
    component: ds_Dropdown_exports.Dropdown,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "Dropdown is a selection control that presents a bounded list of options in a popup. Unlike Combobox, the trigger is button-like — users pick from the list without typing to filter."
        }
      }
    },
    argTypes: {
      disabled: { control: "boolean" },
      multiselect: { control: "boolean" },
      // [NON-STANDARD] underline/filled-darker/filled-lighter removed — Dropdown uses outline only in this design system
      appearance: { control: "select", options: ["outline"] },
      // [NON-STANDARD] "large" removed — Dropdown official sizes: small | medium only
      size: { control: "select", options: ["small", "medium"] },
      placeholder: { control: "text" }
    }
  };
  var Dropdown_stories_default = meta;
  var colors = [
    { value: "red", text: "Red" },
    { value: "green", text: "Green" },
    { value: "blue", text: "Blue" },
    { value: "yellow", text: "Yellow" },
    { value: "purple", text: "Purple" }
  ];
  var roles = [
    { value: "admin", text: "Admin" },
    { value: "editor", text: "Editor" },
    { value: "viewer", text: "Viewer" },
    { value: "guest", text: "Guest", disabled: true }
  ];
  var groupedFruits = [
    {
      label: "Citrus",
      options: [
        { value: "orange", text: "Orange" },
        { value: "lemon", text: "Lemon" },
        { value: "lime", text: "Lime" }
      ]
    },
    {
      label: "Berries",
      options: [
        { value: "strawberry", text: "Strawberry" },
        { value: "blueberry", text: "Blueberry" },
        { value: "raspberry", text: "Raspberry" }
      ]
    },
    {
      label: "Tropical",
      options: [
        { value: "mango", text: "Mango" },
        { value: "pineapple", text: "Pineapple" }
      ]
    }
  ];
  var tags = [
    { value: "design", text: "Design" },
    { value: "engineering", text: "Engineering" },
    { value: "product", text: "Product" },
    { value: "marketing", text: "Marketing" },
    { value: "sales", text: "Sales" }
  ];
  var Default = {
    args: {
      options: colors,
      placeholder: "Select a color",
      "aria-label": "Color"
    }
  };
  var WithDefaultValue = {
    args: {
      options: colors,
      defaultValue: "blue",
      "aria-label": "Color"
    }
  };
  var Grouped = {
    args: {
      groups: groupedFruits,
      placeholder: "Select a fruit",
      "aria-label": "Fruit"
    }
  };
  var WithDisabledOption = {
    args: {
      options: roles,
      placeholder: "Select a role",
      "aria-label": "Role"
    }
  };
  var Multiselect = {
    args: {
      options: tags,
      multiselect: true,
      placeholder: "Select tags",
      "aria-label": "Tags"
    }
  };
  var MultiselectWithDefaults = {
    args: {
      options: tags,
      multiselect: true,
      defaultValue: ["design", "engineering"],
      "aria-label": "Tags"
    }
  };
  var Small = {
    args: {
      options: colors,
      size: "small",
      placeholder: "Select a color",
      "aria-label": "Color"
    }
  };
  var Disabled = {
    args: {
      options: colors,
      disabled: true,
      defaultValue: "blue",
      "aria-label": "Color"
    }
  };
  var DarkMode = {
    decorators: [
      (Story) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FluentProvider, { theme: darkTheme, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { padding: "1rem", display: "flex", flexDirection: "column", gap: "12px", width: "280px" }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Story, {}) }) })
    ],
    args: {
      options: colors,
      placeholder: "Select a color",
      "aria-label": "Color"
    }
  };
  var AllAppearances = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { display: "flex", flexDirection: "column", gap: "16px", width: "280px" }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ds_Dropdown_exports.Dropdown, { options: colors, appearance: "outline", placeholder: "Outline", "aria-label": "Outline" }) })
  };
  var AllSizes = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "12px", width: "280px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ds_Dropdown_exports.Dropdown, { options: colors, size: "small", placeholder: "Small", "aria-label": "Small" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ds_Dropdown_exports.Dropdown, { options: colors, size: "medium", placeholder: "Medium", "aria-label": "Medium" })
    ] })
  };

  // .design-sync/.cache/previews/Dropdown.tsx
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
      if (C) render = () => React20.createElement(C, args);
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
    compose(Dropdown_stories_exports, "Default")
  );
  var WithDefaultValue2 = (
    /* With Default Value */
    compose(Dropdown_stories_exports, "WithDefaultValue")
  );
  var Grouped2 = (
    /* Grouped */
    compose(Dropdown_stories_exports, "Grouped")
  );
  var WithDisabledOption2 = (
    /* With Disabled Option */
    compose(Dropdown_stories_exports, "WithDisabledOption")
  );
  var Multiselect2 = (
    /* Multiselect */
    compose(Dropdown_stories_exports, "Multiselect")
  );
  var MultiselectWithDefaults2 = (
    /* Multiselect With Defaults */
    compose(Dropdown_stories_exports, "MultiselectWithDefaults")
  );
  var Small2 = (
    /* Small */
    compose(Dropdown_stories_exports, "Small")
  );
  var Disabled2 = (
    /* Disabled */
    compose(Dropdown_stories_exports, "Disabled")
  );
  var DarkMode2 = (
    /* Dark Mode */
    compose(Dropdown_stories_exports, "DarkMode")
  );
  var AllAppearances2 = (
    /* All Appearances */
    compose(Dropdown_stories_exports, "AllAppearances")
  );
  var AllSizes2 = (
    /* All Sizes */
    compose(Dropdown_stories_exports, "AllSizes")
  );
  return __toCommonJS(Dropdown_exports);
})();
/*! Bundled license information:

keyborg/dist/index.js:
keyborg/dist/index.js:
  (*!
  * Copyright (c) Microsoft Corporation. All rights reserved.
  * Licensed under the MIT License.
  *)
*/
