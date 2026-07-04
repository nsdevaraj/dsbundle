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

  // .design-sync/.cache/previews/Skeleton.tsx
  var Skeleton_exports = {};
  __export(Skeleton_exports, {
    Card: () => Card2,
    CustomLayout: () => CustomLayout2,
    TextBlock: () => TextBlock2,
    TextBlockPulse: () => TextBlockPulse2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim());

  // src/stories/Skeleton.stories.tsx
  var Skeleton_stories_exports = {};
  __export(Skeleton_stories_exports, {
    Card: () => Card,
    CustomLayout: () => CustomLayout,
    TextBlock: () => TextBlock,
    TextBlockPulse: () => TextBlockPulse,
    default: () => Skeleton_stories_default
  });
  init_define_import_meta_env();

  // ds-shim:ds:Skeleton
  var ds_Skeleton_exports = {};
  __export(ds_Skeleton_exports, {
    default: () => ds_Skeleton_default
  });
  init_define_import_meta_env();
  __reExport(ds_Skeleton_exports, __toESM(require_ds_raw()));
  var g = window.LumelFluent2Ds;
  var ds_Skeleton_default = g["Skeleton"] !== void 0 ? g["Skeleton"] : g;

  // src/stories/Skeleton.stories.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var meta = {
    title: "Components/Skeleton",
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "Skeleton is a shimmer animation placeholder shown while data loads, mimicking the shape of the incoming content. It reduces perceived wait time by giving users a structural preview of the layout.\n\n**When to use:** In place of actual content while data is loading — cards, lists, feeds, profile sections where the content shape is predictable and a structural preview reduces perceived latency.\n\n**When NOT to use:** Very brief async operations (use Spinner). When skeleton shapes bear no resemblance to actual content. When content loads near-instantly."
        }
      }
    },
    argTypes: {
      animation: { control: "select", options: ["wave", "pulse"] },
      lines: { control: "number" }
    }
  };
  var Skeleton_stories_default = meta;
  var TextBlock = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Skeleton_exports.SkeletonText, { lines: 4 })
  };
  var TextBlockPulse = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Skeleton_exports.SkeletonText, { lines: 3, animation: "pulse" })
  };
  var Card = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Skeleton_exports.SkeletonCard, {})
  };
  var CustomLayout = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_Skeleton_exports.Skeleton, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Skeleton_exports.SkeletonItem, { shape: "circle", size: 48 }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Skeleton_exports.SkeletonItem, { shape: "rectangle", style: { width: "100%", height: 20, marginTop: 8 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Skeleton_exports.SkeletonItem, { shape: "rectangle", style: { width: "60%", height: 16, marginTop: 6 } })
    ] })
  };

  // .design-sync/.cache/previews/Skeleton.tsx
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
  var TextBlock2 = (
    /* Text Block */
    compose(Skeleton_stories_exports, "TextBlock")
  );
  var TextBlockPulse2 = (
    /* Text Block Pulse */
    compose(Skeleton_stories_exports, "TextBlockPulse")
  );
  var Card2 = (
    /* Card */
    compose(Skeleton_stories_exports, "Card")
  );
  var CustomLayout2 = (
    /* Custom Layout */
    compose(Skeleton_stories_exports, "CustomLayout")
  );
  return __toCommonJS(Skeleton_exports);
})();
