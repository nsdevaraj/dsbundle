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
      function jsx(t, p, k) {
        return R.createElement(t, k === void 0 ? p : Object.assign({ key: k }, p));
      }
      module.exports = R;
      module.exports.jsx = jsx;
      module.exports.jsxs = jsx;
      module.exports.jsxDEV = jsx;
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

  // .design-sync/.cache/previews/CounterBadge.tsx
  var CounterBadge_exports = {};
  __export(CounterBadge_exports, {
    Brand: () => Brand2,
    Danger: () => Danger2,
    Dot: () => Dot2,
    Ghost: () => Ghost2,
    Important: () => Important2,
    Informative: () => Informative2,
    Large: () => Large2,
    Overflow: () => Overflow2,
    ShowZero: () => ShowZero2,
    Small: () => Small2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim());

  // src/stories/CounterBadge.stories.tsx
  var CounterBadge_stories_exports = {};
  __export(CounterBadge_stories_exports, {
    Brand: () => Brand,
    Danger: () => Danger,
    Dot: () => Dot,
    Ghost: () => Ghost,
    Important: () => Important,
    Informative: () => Informative,
    Large: () => Large,
    Overflow: () => Overflow,
    ShowZero: () => ShowZero,
    Small: () => Small,
    default: () => CounterBadge_stories_default
  });
  init_define_import_meta_env();

  // ds-shim:ds:CounterBadge
  var ds_CounterBadge_exports = {};
  __export(ds_CounterBadge_exports, {
    default: () => ds_CounterBadge_default
  });
  init_define_import_meta_env();
  __reExport(ds_CounterBadge_exports, __toESM(require_ds_raw()));
  var g = window.LumelFluent2Ds;
  var ds_CounterBadge_default = g["CounterBadge"] !== void 0 ? g["CounterBadge"] : g;

  // src/stories/CounterBadge.stories.tsx
  var meta = {
    title: "Components/CounterBadge",
    component: ds_CounterBadge_exports.CounterBadge,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "CounterBadge displays a numeric count indicator — unread messages, notification counts — attached to a nav item, button, or avatar. Shows a dot when count is 0, and caps display at the overflowCount (default 99+).\n\n**When to use:** Indicating unread counts on nav items, buttons, or avatars — email unread count, notification badge, cart item count.\n\n**When NOT to use:** Non-count metadata (use Badge). Multiple badges on the same anchor element. Counts that don't represent unread/new items."
        }
      }
    },
    argTypes: {
      color: { control: "select", options: ["brand", "danger", "important", "informative"] },
      size: { control: "select", options: ["tiny", "extra-small", "small", "medium", "large", "extra-large"] },
      appearance: { control: "select", options: ["filled", "ghost"] }
    }
  };
  var CounterBadge_stories_default = meta;
  var Brand = {
    args: { count: 5, color: "brand" }
  };
  var Danger = {
    args: { count: 99, color: "danger" }
  };
  var Important = {
    args: { count: 3, color: "important" }
  };
  var Informative = {
    args: { count: 12, color: "informative" }
  };
  var Overflow = {
    args: { count: 150, overflowCount: 99, color: "danger" }
  };
  var ShowZero = {
    args: { count: 0, showZero: true, color: "brand" }
  };
  var Ghost = {
    args: { count: 7, color: "brand", appearance: "ghost" }
  };
  var Dot = {
    args: { dot: true, color: "danger" }
  };
  var Small = {
    args: { count: 4, color: "brand", size: "small" }
  };
  var Large = {
    args: { count: 4, color: "brand", size: "large" }
  };

  // .design-sync/.cache/previews/CounterBadge.tsx
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
  var Brand2 = (
    /* Brand */
    compose(CounterBadge_stories_exports, "Brand")
  );
  var Danger2 = (
    /* Danger */
    compose(CounterBadge_stories_exports, "Danger")
  );
  var Important2 = (
    /* Important */
    compose(CounterBadge_stories_exports, "Important")
  );
  var Informative2 = (
    /* Informative */
    compose(CounterBadge_stories_exports, "Informative")
  );
  var Overflow2 = (
    /* Overflow */
    compose(CounterBadge_stories_exports, "Overflow")
  );
  var ShowZero2 = (
    /* Show Zero */
    compose(CounterBadge_stories_exports, "ShowZero")
  );
  var Ghost2 = (
    /* Ghost */
    compose(CounterBadge_stories_exports, "Ghost")
  );
  var Dot2 = (
    /* Dot */
    compose(CounterBadge_stories_exports, "Dot")
  );
  var Small2 = (
    /* Small */
    compose(CounterBadge_stories_exports, "Small")
  );
  var Large2 = (
    /* Large */
    compose(CounterBadge_stories_exports, "Large")
  );
  return __toCommonJS(CounterBadge_exports);
})();
