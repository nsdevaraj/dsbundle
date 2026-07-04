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

  // .design-sync/.cache/previews/Switch.tsx
  var Switch_exports = {};
  __export(Switch_exports, {
    Checked: () => Checked2,
    Default: () => Default2,
    Disabled: () => Disabled2,
    LabelAfter: () => LabelAfter2,
    WithValidation: () => WithValidation2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim());

  // src/stories/Switch.stories.tsx
  var Switch_stories_exports = {};
  __export(Switch_stories_exports, {
    Checked: () => Checked,
    Default: () => Default,
    Disabled: () => Disabled,
    LabelAfter: () => LabelAfter,
    WithValidation: () => WithValidation,
    default: () => Switch_stories_default
  });
  init_define_import_meta_env();

  // ds-shim:ds:Switch
  var ds_Switch_exports = {};
  __export(ds_Switch_exports, {
    default: () => ds_Switch_default
  });
  init_define_import_meta_env();
  __reExport(ds_Switch_exports, __toESM(require_ds_raw()));
  var g = window.LumelFluent2Ds;
  var ds_Switch_default = g["Switch"] !== void 0 ? g["Switch"] : g;

  // src/stories/Switch.stories.tsx
  var meta = {
    title: "Components/Switch",
    component: ds_Switch_exports.Switch,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "Switch is a toggle control representing a physical on/off switch for binary settings that take immediate effect — no form submission required. The key criterion is immediacy: the action happens the moment the switch is flipped."
        }
      }
    },
    argTypes: {
      checked: { control: "boolean" },
      disabled: { control: "boolean" },
      label: { control: "text" },
      validationState: { control: "select", options: ["none", "error", "warning", "success"] }
    }
  };
  var Switch_stories_default = meta;
  var Default = {
    args: { label: "Enable notifications" }
  };
  var Checked = {
    args: { label: "Dark mode", checked: true }
  };
  var LabelAfter = {
    args: { label: "Auto-save", labelPosition: "after" }
  };
  var Disabled = {
    args: { label: "Feature flag", disabled: true, checked: false }
  };
  var WithValidation = {
    args: { label: "Accept data sharing", validationState: "error", validationMessage: "You must accept to continue." }
  };

  // .design-sync/.cache/previews/Switch.tsx
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
    compose(Switch_stories_exports, "Default")
  );
  var Checked2 = (
    /* Checked */
    compose(Switch_stories_exports, "Checked")
  );
  var LabelAfter2 = (
    /* Label After */
    compose(Switch_stories_exports, "LabelAfter")
  );
  var Disabled2 = (
    /* Disabled */
    compose(Switch_stories_exports, "Disabled")
  );
  var WithValidation2 = (
    /* With Validation */
    compose(Switch_stories_exports, "WithValidation")
  );
  return __toCommonJS(Switch_exports);
})();
