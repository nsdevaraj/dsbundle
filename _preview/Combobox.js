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

  // .design-sync/.cache/previews/Combobox.tsx
  var Combobox_exports = {};
  __export(Combobox_exports, {
    Default: () => Default2,
    Error: () => Error3,
    Grouped: () => Grouped2,
    Medium: () => Medium2,
    Required: () => Required2,
    Small: () => Small2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim());

  // src/stories/Combobox.stories.tsx
  var Combobox_stories_exports = {};
  __export(Combobox_stories_exports, {
    Default: () => Default,
    Error: () => Error2,
    Grouped: () => Grouped,
    Medium: () => Medium,
    Required: () => Required,
    Small: () => Small,
    default: () => Combobox_stories_default
  });
  init_define_import_meta_env();

  // ds-shim:ds:Combobox
  var ds_Combobox_exports = {};
  __export(ds_Combobox_exports, {
    default: () => ds_Combobox_default
  });
  init_define_import_meta_env();
  __reExport(ds_Combobox_exports, __toESM(require_ds_raw()));
  var g = window.LumelFluent2Ds;
  var ds_Combobox_default = g["Combobox"] !== void 0 ? g["Combobox"] : g;

  // src/stories/Combobox.stories.tsx
  var meta = {
    title: "Components/Combobox",
    component: ds_Combobox_exports.Combobox,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "Combobox combines a text input with a dropdown list, letting users type to filter options or select from a predefined set. Supports single and multi-select, option grouping, and freeform input."
        }
      }
    },
    argTypes: {
      size: { control: "select", options: ["small", "medium", "large"] },
      disabled: { control: "boolean" },
      required: { control: "boolean" },
      validationState: { control: "select", options: ["none", "error", "warning", "success"] },
      label: { control: "text" },
      placeholder: { control: "text" }
    }
  };
  var Combobox_stories_default = meta;
  var languages = [
    { value: "ts", label: "TypeScript" },
    { value: "js", label: "JavaScript" },
    { value: "py", label: "Python" },
    { value: "go", label: "Go" },
    { value: "rs", label: "Rust" }
  ];
  var grouped = [
    { group: "Frontend", options: [{ value: "ts", label: "TypeScript" }, { value: "js", label: "JavaScript" }] },
    { group: "Backend", options: [{ value: "py", label: "Python" }, { value: "go", label: "Go" }, { value: "rs", label: "Rust" }] }
  ];
  var Default = {
    args: { label: "Language", options: languages, placeholder: "Select a language" }
  };
  var Small = {
    args: { label: "Language", options: languages, placeholder: "Select a language", size: "small" }
  };
  var Medium = {
    args: { label: "Language", options: languages, placeholder: "Select a language", size: "medium" }
  };
  var Required = {
    args: { label: "Language", options: languages, required: true }
  };
  var Grouped = {
    args: { label: "Language by tier", options: grouped }
  };
  var Error2 = {
    args: { label: "Language", options: languages, validationState: "error", validationMessage: "Please select a language." }
  };

  // .design-sync/.cache/previews/Combobox.tsx
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
    compose(Combobox_stories_exports, "Default")
  );
  var Small2 = (
    /* Small */
    compose(Combobox_stories_exports, "Small")
  );
  var Medium2 = (
    /* Medium */
    compose(Combobox_stories_exports, "Medium")
  );
  var Required2 = (
    /* Required */
    compose(Combobox_stories_exports, "Required")
  );
  var Grouped2 = (
    /* Grouped */
    compose(Combobox_stories_exports, "Grouped")
  );
  var Error3 = (
    /* Error */
    compose(Combobox_stories_exports, "Error")
  );
  return __toCommonJS(Combobox_exports);
})();
