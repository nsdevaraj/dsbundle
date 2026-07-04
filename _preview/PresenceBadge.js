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

  // .design-sync/.cache/previews/PresenceBadge.tsx
  var PresenceBadge_exports = {};
  __export(PresenceBadge_exports, {
    AllStatuses: () => AllStatuses2,
    Available: () => Available2,
    Away: () => Away2,
    Busy: () => Busy2,
    DoNotDisturb: () => DoNotDisturb2,
    Offline: () => Offline2,
    OutOfOffice: () => OutOfOffice2,
    Sizes: () => Sizes2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim());

  // src/stories/PresenceBadge.stories.tsx
  var PresenceBadge_stories_exports = {};
  __export(PresenceBadge_stories_exports, {
    AllStatuses: () => AllStatuses,
    Available: () => Available,
    Away: () => Away,
    Busy: () => Busy,
    DoNotDisturb: () => DoNotDisturb,
    Offline: () => Offline,
    OutOfOffice: () => OutOfOffice,
    Sizes: () => Sizes,
    default: () => PresenceBadge_stories_default
  });
  init_define_import_meta_env();

  // ds-shim:ds:PresenceBadge
  var ds_PresenceBadge_exports = {};
  __export(ds_PresenceBadge_exports, {
    default: () => ds_PresenceBadge_default
  });
  init_define_import_meta_env();
  __reExport(ds_PresenceBadge_exports, __toESM(require_ds_raw()));
  var g = window.LumelFluent2Ds;
  var ds_PresenceBadge_default = g["PresenceBadge"] !== void 0 ? g["PresenceBadge"] : g;

  // src/stories/PresenceBadge.stories.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var meta = {
    title: "Components/PresenceBadge",
    component: ds_PresenceBadge_exports.PresenceBadge,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "PresenceBadge conveys a user's online status — available, away, busy, do-not-disturb, offline, out-of-office, or unknown. Typically positioned on an Avatar in communication surfaces.\n\n**When to use:** Communication surfaces where a user's availability status matters — chat applications, meeting participants, contact lists.\n\n**When NOT to use:** Non-person entities (use a status indicator or Badge instead). Surfaces where presence information is irrelevant or distracting."
        }
      }
    },
    argTypes: {
      status: {
        control: "select",
        options: ["available", "away", "busy", "do-not-disturb", "offline", "out-of-office", "unknown"]
      },
      size: { control: "select", options: ["tiny", "extra-small", "small", "medium", "large", "extra-large"] },
      outOfOffice: { control: "boolean" }
    }
  };
  var PresenceBadge_stories_default = meta;
  var Available = {
    args: { status: "available" }
  };
  var Away = {
    args: { status: "away" }
  };
  var Busy = {
    args: { status: "busy" }
  };
  var DoNotDisturb = {
    args: { status: "do-not-disturb" }
  };
  var Offline = {
    args: { status: "offline" }
  };
  var OutOfOffice = {
    args: { status: "out-of-office" }
  };
  var AllStatuses = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }, children: ["available", "away", "busy", "do-not-disturb", "offline", "out-of-office", "unknown"].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_PresenceBadge_exports.PresenceBadge, { status: s, size: "medium" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { fontSize: 10 }, children: s })
    ] }, s)) })
  };
  var Sizes = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", gap: 12, alignItems: "center" }, children: ["tiny", "extra-small", "small", "medium", "large", "extra-large"].map((size) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_PresenceBadge_exports.PresenceBadge, { status: "available", size }, size)) })
  };

  // .design-sync/.cache/previews/PresenceBadge.tsx
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
      if (C) render = () => React.createElement(C, args);
    }
    if (!render) return () => null;
    const decorators = [].concat((st && st.decorators) ?? []).concat(meta2.decorators ?? []);
    return decorators.reduce((inner, dec) => () => {
      const out = dec(inner, ctx);
      return out === void 0 ? inner() : out;
    }, render);
  }
  var Available2 = (
    /* Available */
    compose(PresenceBadge_stories_exports, "Available")
  );
  var Away2 = (
    /* Away */
    compose(PresenceBadge_stories_exports, "Away")
  );
  var Busy2 = (
    /* Busy */
    compose(PresenceBadge_stories_exports, "Busy")
  );
  var DoNotDisturb2 = (
    /* Do Not Disturb */
    compose(PresenceBadge_stories_exports, "DoNotDisturb")
  );
  var Offline2 = (
    /* Offline */
    compose(PresenceBadge_stories_exports, "Offline")
  );
  var OutOfOffice2 = (
    /* Out Of Office */
    compose(PresenceBadge_stories_exports, "OutOfOffice")
  );
  var AllStatuses2 = (
    /* All Statuses */
    compose(PresenceBadge_stories_exports, "AllStatuses")
  );
  var Sizes2 = (
    /* Sizes */
    compose(PresenceBadge_stories_exports, "Sizes")
  );
  return __toCommonJS(PresenceBadge_exports);
})();
