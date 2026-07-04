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

  // .design-sync/.cache/previews/SpinButton.tsx
  var SpinButton_exports = {};
  __export(SpinButton_exports, {
    Bounded: () => Bounded2,
    Default: () => Default2,
    Disabled: () => Disabled2,
    Medium: () => Medium2,
    Small: () => Small2,
    WithPrecision: () => WithPrecision2,
    WithSuffix: () => WithSuffix2,
    WithValidation: () => WithValidation2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim());

  // src/stories/SpinButton.stories.tsx
  var SpinButton_stories_exports = {};
  __export(SpinButton_stories_exports, {
    Bounded: () => Bounded,
    Default: () => Default,
    Disabled: () => Disabled,
    Medium: () => Medium,
    Small: () => Small,
    WithPrecision: () => WithPrecision,
    WithSuffix: () => WithSuffix,
    WithValidation: () => WithValidation,
    default: () => SpinButton_stories_default
  });
  init_define_import_meta_env();

  // ds-shim:ds:SpinButton
  var ds_SpinButton_exports = {};
  __export(ds_SpinButton_exports, {
    default: () => ds_SpinButton_default
  });
  init_define_import_meta_env();
  __reExport(ds_SpinButton_exports, __toESM(require_ds_raw()));
  var g = window.LumelFluent2Ds;
  var ds_SpinButton_default = g["SpinButton"] !== void 0 ? g["SpinButton"] : g;

  // src/stories/SpinButton.stories.tsx
  var meta = {
    title: "Components/SpinButton",
    component: ds_SpinButton_exports.SpinButton,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "SpinButton is a numeric input with increment/decrement buttons, bounded between configurable min and max values. Values change via buttons, keyboard arrows, or direct text entry."
        }
      }
    },
    argTypes: {
      size: { control: "select", options: ["small", "medium"] },
      // [NON-STANDARD] underline/filled-darker removed — SpinButton uses outline only in this design system
      appearance: { control: "select", options: ["outline"] }
    }
  };
  var SpinButton_stories_default = meta;
  var Default = {
    args: { label: "Quantity", defaultValue: 1, min: 0, max: 100 }
  };
  var WithPrecision = {
    args: { label: "Price", defaultValue: 9.99, step: 0.01, precision: 2, prefix: "$" }
  };
  var WithSuffix = {
    args: { label: "Weight", defaultValue: 10, step: 0.5, suffix: " kg" }
  };
  var Bounded = {
    args: { label: "Percentage", defaultValue: 50, min: 0, max: 100, suffix: "%" }
  };
  var Disabled = {
    args: { label: "Disabled", defaultValue: 5, disabled: true }
  };
  var WithValidation = {
    args: {
      label: "Score",
      defaultValue: 0,
      min: 0,
      max: 100,
      validationState: "error",
      validationMessage: "Score must be between 0 and 100"
    }
  };
  var Small = {
    args: { label: "Quantity", defaultValue: 1, min: 0, max: 100, size: "small" }
  };
  var Medium = {
    args: { label: "Quantity", defaultValue: 1, min: 0, max: 100, size: "medium" }
  };

  // .design-sync/.cache/previews/SpinButton.tsx
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
  var Default2 = (
    /* Default */
    compose(SpinButton_stories_exports, "Default")
  );
  var WithPrecision2 = (
    /* With Precision */
    compose(SpinButton_stories_exports, "WithPrecision")
  );
  var WithSuffix2 = (
    /* With Suffix */
    compose(SpinButton_stories_exports, "WithSuffix")
  );
  var Bounded2 = (
    /* Bounded */
    compose(SpinButton_stories_exports, "Bounded")
  );
  var Disabled2 = (
    /* Disabled */
    compose(SpinButton_stories_exports, "Disabled")
  );
  var WithValidation2 = (
    /* With Validation */
    compose(SpinButton_stories_exports, "WithValidation")
  );
  var Small2 = (
    /* Small */
    compose(SpinButton_stories_exports, "Small")
  );
  var Medium2 = (
    /* Medium */
    compose(SpinButton_stories_exports, "Medium")
  );
  return __toCommonJS(SpinButton_exports);
})();
