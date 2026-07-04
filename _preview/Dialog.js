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

  // .design-sync/.cache/previews/Dialog.tsx
  var Dialog_exports = {};
  __export(Dialog_exports, {
    Alert: () => Alert2,
    Controlled: () => Controlled2,
    Large: () => Large2,
    Small: () => Small2,
    WithTrigger: () => WithTrigger2
  });
  init_define_import_meta_env();
  var React2 = __toESM(require_react_shim());

  // src/stories/Dialog.stories.tsx
  var Dialog_stories_exports = {};
  __export(Dialog_stories_exports, {
    Alert: () => Alert,
    Controlled: () => Controlled,
    Large: () => Large,
    Small: () => Small,
    WithTrigger: () => WithTrigger,
    default: () => Dialog_stories_default
  });
  init_define_import_meta_env();
  var import_react = __toESM(require_react_shim());

  // ds-shim:ds:Button
  var ds_Button_exports = {};
  __export(ds_Button_exports, {
    default: () => ds_Button_default
  });
  init_define_import_meta_env();
  __reExport(ds_Button_exports, __toESM(require_ds_raw()));
  var g = window.LumelFluent2Ds;
  var ds_Button_default = g["Button"] !== void 0 ? g["Button"] : g;

  // ds-shim:ds:Dialog
  var ds_Dialog_exports = {};
  __export(ds_Dialog_exports, {
    default: () => ds_Dialog_default
  });
  init_define_import_meta_env();
  __reExport(ds_Dialog_exports, __toESM(require_ds_raw()));
  var g2 = window.LumelFluent2Ds;
  var ds_Dialog_default = g2["Dialog"] !== void 0 ? g2["Dialog"] : g2;

  // src/stories/Dialog.stories.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var meta = {
    title: "Components/Dialog",
    component: ds_Dialog_exports.Dialog,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "Dialog is a modal window that requires user attention before they can continue. It makes all content outside it inert and visually dimmed, enforcing focus on a critical decision or short focused task."
        }
      }
    },
    argTypes: {
      size: { control: "select", options: ["small", "medium", "large", "full"] },
      modalType: { control: "select", options: ["modal", "non-modal", "alert"] }
    }
  };
  var Dialog_stories_default = meta;
  var WithTrigger = {
    args: {
      trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { appearance: "primary", children: "Open dialog" }),
      title: "Confirm action",
      children: "Are you sure you want to proceed? This action cannot be undone.",
      actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { appearance: "primary", children: "Confirm" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { appearance: "secondary", children: "Cancel" })
      ] })
    }
  };
  var Small = {
    args: {
      trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { appearance: "primary", children: "Small dialog" }),
      title: "Quick note",
      size: "small",
      children: "This is a small dialog.",
      actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { appearance: "primary", children: "OK" })
    }
  };
  var Large = {
    args: {
      trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { appearance: "primary", children: "Large dialog" }),
      title: "Review document",
      size: "large",
      children: "This dialog has more space for content.",
      actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { appearance: "primary", children: "Accept" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { appearance: "secondary", children: "Reject" })
      ] })
    }
  };
  var Alert = {
    args: {
      trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { appearance: "primary", children: "Alert dialog" }),
      title: "Delete permanently?",
      modalType: "alert",
      children: "This will delete all selected items and cannot be undone.",
      actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { appearance: "primary", children: "Delete" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { appearance: "secondary", children: "Cancel" })
      ] })
    }
  };
  var Controlled = {
    render: () => {
      const [open, setOpen] = (0, import_react.useState)(false);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { appearance: "primary", onClick: () => setOpen(true), children: "Open controlled" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ds_Dialog_exports.Dialog,
          {
            open,
            onOpenChange: setOpen,
            title: "Controlled dialog",
            actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { appearance: "primary", onClick: () => setOpen(false), children: "Close" }),
            children: "This dialog is controlled via external state."
          }
        )
      ] });
    }
  };

  // .design-sync/.cache/previews/Dialog.tsx
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
  var WithTrigger2 = (
    /* With Trigger */
    compose(Dialog_stories_exports, "WithTrigger")
  );
  var Small2 = (
    /* Small */
    compose(Dialog_stories_exports, "Small")
  );
  var Large2 = (
    /* Large */
    compose(Dialog_stories_exports, "Large")
  );
  var Alert2 = (
    /* Alert */
    compose(Dialog_stories_exports, "Alert")
  );
  var Controlled2 = (
    /* Controlled */
    compose(Dialog_stories_exports, "Controlled")
  );
  return __toCommonJS(Dialog_exports);
})();
