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

  // .design-sync/.cache/previews/Checkbox.tsx
  var Checkbox_exports = {};
  __export(Checkbox_exports, {
    Checked: () => Checked2,
    Default: () => Default2,
    Disabled: () => Disabled2,
    Indeterminate: () => Indeterminate2,
    WithHint: () => WithHint2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim());

  // src/stories/Checkbox.stories.tsx
  var Checkbox_stories_exports = {};
  __export(Checkbox_stories_exports, {
    Checked: () => Checked,
    Default: () => Default,
    Disabled: () => Disabled,
    Indeterminate: () => Indeterminate,
    WithHint: () => WithHint,
    default: () => Checkbox_stories_default
  });
  init_define_import_meta_env();

  // ds-shim:ds:Checkbox
  var ds_Checkbox_exports = {};
  __export(ds_Checkbox_exports, {
    default: () => ds_Checkbox_default
  });
  init_define_import_meta_env();
  __reExport(ds_Checkbox_exports, __toESM(require_ds_raw()));
  var g = window.LumelFluent2Ds;
  var ds_Checkbox_default = g["Checkbox"] !== void 0 ? g["Checkbox"] : g;

  // src/stories/Checkbox.stories.tsx
  var meta = {
    title: "Components/Checkbox",
    component: ds_Checkbox_exports.Checkbox,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "Checkbox is a form control with three states (checked, unchecked, indeterminate) for binary yes/no choices or selecting multiple independent items from a group. The indeterminate state represents a parent whose children are partially selected."
        }
      }
    },
    argTypes: {
      checked: { control: "boolean" },
      disabled: { control: "boolean" },
      required: { control: "boolean" },
      validationState: { control: "select", options: ["none", "error", "warning", "success"] },
      label: { control: "text" }
    }
  };
  var Checkbox_stories_default = meta;
  var Default = {
    args: { label: "Accept terms and conditions" }
  };
  var Checked = {
    args: { label: "Remember me", checked: true }
  };
  var Indeterminate = {
    args: { label: "Select all (partial)", checked: "mixed" }
  };
  var Disabled = {
    args: { label: "Disabled option", disabled: true }
  };
  var WithHint = {
    args: { label: "Subscribe to newsletter", hint: "We send at most one email per week." }
  };

  // .design-sync/.cache/previews/Checkbox.tsx
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
    compose(Checkbox_stories_exports, "Default")
  );
  var Checked2 = (
    /* Checked */
    compose(Checkbox_stories_exports, "Checked")
  );
  var Indeterminate2 = (
    /* Indeterminate */
    compose(Checkbox_stories_exports, "Indeterminate")
  );
  var Disabled2 = (
    /* Disabled */
    compose(Checkbox_stories_exports, "Disabled")
  );
  var WithHint2 = (
    /* With Hint */
    compose(Checkbox_stories_exports, "WithHint")
  );
  return __toCommonJS(Checkbox_exports);
})();
