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

  // .design-sync/.cache/previews/Rating.tsx
  var Rating_exports = {};
  __export(Rating_exports, {
    Controlled: () => Controlled2,
    Default: () => Default2,
    Disabled: () => Disabled2,
    Large: () => Large2,
    ReadOnly: () => ReadOnly2,
    Small: () => Small2,
    TenStars: () => TenStars2,
    WithLabel: () => WithLabel2
  });
  init_define_import_meta_env();
  var React2 = __toESM(require_react_shim());

  // src/stories/Rating.stories.tsx
  var Rating_stories_exports = {};
  __export(Rating_stories_exports, {
    Controlled: () => Controlled,
    Default: () => Default,
    Disabled: () => Disabled,
    Large: () => Large,
    ReadOnly: () => ReadOnly,
    Small: () => Small,
    TenStars: () => TenStars,
    WithLabel: () => WithLabel,
    default: () => Rating_stories_default
  });
  init_define_import_meta_env();
  var import_react = __toESM(require_react_shim());

  // ds-shim:ds:Rating
  var ds_Rating_exports = {};
  __export(ds_Rating_exports, {
    default: () => ds_Rating_default
  });
  init_define_import_meta_env();
  __reExport(ds_Rating_exports, __toESM(require_ds_raw()));
  var g = window.LumelFluent2Ds;
  var ds_Rating_default = g["Rating"] !== void 0 ? g["Rating"] : g;

  // src/stories/Rating.stories.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var meta = {
    title: "Components/Rating",
    component: ds_Rating_exports.Rating,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "Rating allows users to view or input a star-based (or custom icon) score. The `Rating` component is interactive for input; `RatingDisplay` is read-only for showing existing scores.\n\n**When to use:** Capturing user satisfaction scores for products, reviews, or experiences. Displaying aggregate ratings in product cards, listings, or feedback forms.\n\n**When NOT to use:** Precise numeric scale input (use Slider or radio group for NPS surveys). Binary or non-scalar choices (use Checkbox or Switch). More than one interactive Rating per form section without clear labels."
        }
      }
    },
    argTypes: {
      size: { control: "select", options: ["small", "medium", "large"] },
      count: { control: { type: "number", min: 1, max: 10 } }
    }
  };
  var Rating_stories_default = meta;
  var Default = {
    args: { value: 3, count: 5 }
  };
  var Controlled = {
    render: () => {
      const [value, setValue] = (0, import_react.useState)(0);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Rating_exports.Rating, { value, count: 5, onChange: setValue });
    }
  };
  var ReadOnly = {
    args: { value: 4.5, count: 5, readOnly: true }
  };
  var Small = {
    args: { value: 3, count: 5, size: "small" }
  };
  var Large = {
    args: { value: 3, count: 5, size: "large" }
  };
  var TenStars = {
    args: { value: 7, count: 10 }
  };
  var Disabled = {
    args: { value: 3, count: 5, disabled: true }
  };
  var WithLabel = {
    args: { value: 4, count: 5, label: "Rate this product" }
  };

  // .design-sync/.cache/previews/Rating.tsx
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
      if (C) render = () => React2.createElement(C, args);
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
    compose(Rating_stories_exports, "Default")
  );
  var Controlled2 = (
    /* Controlled */
    compose(Rating_stories_exports, "Controlled")
  );
  var ReadOnly2 = (
    /* Read Only */
    compose(Rating_stories_exports, "ReadOnly")
  );
  var Small2 = (
    /* Small */
    compose(Rating_stories_exports, "Small")
  );
  var Large2 = (
    /* Large */
    compose(Rating_stories_exports, "Large")
  );
  var TenStars2 = (
    /* Ten Stars */
    compose(Rating_stories_exports, "TenStars")
  );
  var Disabled2 = (
    /* Disabled */
    compose(Rating_stories_exports, "Disabled")
  );
  var WithLabel2 = (
    /* With Label */
    compose(Rating_stories_exports, "WithLabel")
  );
  return __toCommonJS(Rating_exports);
})();
