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
      function jsx2(t, p, k) {
        return R.createElement(t, k === void 0 ? p : Object.assign({ key: k }, p));
      }
      module.exports = R;
      module.exports.jsx = jsx2;
      module.exports.jsxs = jsx2;
      module.exports.jsxDEV = jsx2;
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

  // .design-sync/.cache/previews/ToggleButton.tsx
  var ToggleButton_exports = {};
  __export(ToggleButton_exports, {
    CheckedByDefault: () => CheckedByDefault2,
    Controlled: () => Controlled2,
    Default: () => Default2,
    Disabled: () => Disabled2,
    FormattingGroup: () => FormattingGroup2,
    WithIcon: () => WithIcon2
  });
  init_define_import_meta_env();
  var React5 = __toESM(require_react_shim());

  // src/stories/ToggleButton.stories.tsx
  var ToggleButton_stories_exports = {};
  __export(ToggleButton_stories_exports, {
    CheckedByDefault: () => CheckedByDefault,
    Controlled: () => Controlled,
    Default: () => Default,
    Disabled: () => Disabled,
    FormattingGroup: () => FormattingGroup,
    WithIcon: () => WithIcon,
    default: () => ToggleButton_stories_default
  });
  init_define_import_meta_env();
  var import_react8 = __toESM(require_react_shim());

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

  // node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-22.js
  init_define_import_meta_env();
  var TextBold20Regular = /* @__PURE__ */ createFluentIcon("TextBold20Regular", "20", ["M5.5 4.25C5.5 3.56 6.06 3 6.75 3h3.5a4 4 0 0 1 3.17 6.44c.9.7 1.58 1.8 1.58 3.31A4.23 4.23 0 0 1 10.75 17h-4c-.69 0-1.25-.56-1.25-1.25V4.25ZM8 11v3.5h2.75c.81 0 1.75-.62 1.75-1.75S11.56 11 10.75 11H8Zm0-2.5h2.25a1.5 1.5 0 1 0 0-3H8v3Z"]);
  var TextItalic20Regular = /* @__PURE__ */ createFluentIcon("TextItalic20Regular", "20", ["M16 3a.5.5 0 0 1 0 1h-3.16L8.23 16h3.27a.5.5 0 0 1 0 1H4a.5.5 0 0 1 0-1h3.16l4.61-12H8.5a.5.5 0 0 1 0-1H16Z"]);
  var TextUnderline20Regular = /* @__PURE__ */ createFluentIcon("TextUnderline20Regular", "20", ["M6 3.5a.5.5 0 0 0-1 0v6.45A5.02 5.02 0 0 0 10 15c2.77 0 5-2.26 5-5.05V3.5a.5.5 0 0 0-1 0v6.45C14 12.2 12.2 14 10 14s-4-1.8-4-4.05V3.5Zm-1 13c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z"]);

  // ds-shim:ds:ToggleButton
  var ds_ToggleButton_exports = {};
  __export(ds_ToggleButton_exports, {
    default: () => ds_ToggleButton_default
  });
  init_define_import_meta_env();
  __reExport(ds_ToggleButton_exports, __toESM(require_ds_raw()));
  var g = window.LumelFluent2Ds;
  var ds_ToggleButton_default = g["ToggleButton"] !== void 0 ? g["ToggleButton"] : g;

  // src/stories/ToggleButton.stories.tsx
  var import_jsx_runtime3 = __toESM(require_react_shim());
  var meta = {
    title: "Components/ToggleButton",
    component: ds_ToggleButton_exports.ToggleButton,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "ToggleButton maintains a checked/unchecked state and visually communicates that state. Ideal for toolbar formatting controls — Bold, Italic, Underline — or any two-state mode switch."
        }
      }
    },
    argTypes: {
      appearance: { control: "select", options: ["primary", "secondary", "subtle"] },
      size: { control: "select", options: ["small", "medium"] }
    }
  };
  var ToggleButton_stories_default = meta;
  var Default = {
    args: { children: "Toggle me", appearance: "secondary" }
  };
  var CheckedByDefault = {
    args: { children: "Pinned", appearance: "secondary", checked: true }
  };
  var WithIcon = {
    args: { icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(TextBold20Regular, {}), "aria-label": "Bold", appearance: "subtle" }
  };
  var Controlled = {
    render: () => {
      const [checked, setChecked] = (0, import_react8.useState)(false);
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        ds_ToggleButton_exports.ToggleButton,
        {
          appearance: "secondary",
          checked,
          onChange: setChecked,
          icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(TextBold20Regular, {}),
          children: checked ? "Bold (on)" : "Bold (off)"
        }
      );
    }
  };
  var FormattingGroup = {
    render: () => {
      const [bold, setBold] = (0, import_react8.useState)(false);
      const [italic, setItalic] = (0, import_react8.useState)(false);
      const [underline, setUnderline] = (0, import_react8.useState)(false);
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { display: "flex", gap: 4 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ds_ToggleButton_exports.ToggleButton, { appearance: "subtle", icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(TextBold20Regular, {}), checked: bold, onChange: setBold, "aria-label": "Bold" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ds_ToggleButton_exports.ToggleButton, { appearance: "subtle", icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(TextItalic20Regular, {}), checked: italic, onChange: setItalic, "aria-label": "Italic" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ds_ToggleButton_exports.ToggleButton, { appearance: "subtle", icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(TextUnderline20Regular, {}), checked: underline, onChange: setUnderline, "aria-label": "Underline" })
      ] });
    }
  };
  var Disabled = {
    args: { children: "Disabled", appearance: "secondary", disabled: true }
  };

  // .design-sync/.cache/previews/ToggleButton.tsx
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
      if (C) render = () => React5.createElement(C, args);
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
    compose(ToggleButton_stories_exports, "Default")
  );
  var CheckedByDefault2 = (
    /* Checked By Default */
    compose(ToggleButton_stories_exports, "CheckedByDefault")
  );
  var WithIcon2 = (
    /* With Icon */
    compose(ToggleButton_stories_exports, "WithIcon")
  );
  var Controlled2 = (
    /* Controlled */
    compose(ToggleButton_stories_exports, "Controlled")
  );
  var FormattingGroup2 = (
    /* Formatting Group */
    compose(ToggleButton_stories_exports, "FormattingGroup")
  );
  var Disabled2 = (
    /* Disabled */
    compose(ToggleButton_stories_exports, "Disabled")
  );
  return __toCommonJS(ToggleButton_exports);
})();
