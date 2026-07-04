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

  // .design-sync/.cache/previews/TeachingPopover.tsx
  var TeachingPopover_exports = {};
  __export(TeachingPopover_exports, {
    MultiStep: () => MultiStep2,
    NoDismissButton: () => NoDismissButton2,
    PositionedAbove: () => PositionedAbove2,
    SingleStep: () => SingleStep2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim());

  // src/stories/TeachingPopover.stories.tsx
  var TeachingPopover_stories_exports = {};
  __export(TeachingPopover_stories_exports, {
    MultiStep: () => MultiStep,
    NoDismissButton: () => NoDismissButton,
    PositionedAbove: () => PositionedAbove,
    SingleStep: () => SingleStep,
    default: () => TeachingPopover_stories_default
  });
  init_define_import_meta_env();

  // ds-shim:ds:Button
  var ds_Button_exports = {};
  __export(ds_Button_exports, {
    default: () => ds_Button_default
  });
  init_define_import_meta_env();
  __reExport(ds_Button_exports, __toESM(require_ds_raw()));
  var g = window.LumelFluent2Ds;
  var ds_Button_default = g["Button"] !== void 0 ? g["Button"] : g;

  // ds-shim:ds:TeachingPopover
  var ds_TeachingPopover_exports = {};
  __export(ds_TeachingPopover_exports, {
    default: () => ds_TeachingPopover_default
  });
  init_define_import_meta_env();
  __reExport(ds_TeachingPopover_exports, __toESM(require_ds_raw()));
  var g2 = window.LumelFluent2Ds;
  var ds_TeachingPopover_default = g2["TeachingPopover"] !== void 0 ? g2["TeachingPopover"] : g2;

  // src/stories/TeachingPopover.stories.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var meta = {
    title: "Components/TeachingPopover",
    component: ds_TeachingPopover_exports.TeachingPopover,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "TeachingPopover is a specialized popover for onboarding users to new features. It supports multi-step pagination, title, body text, media, and dismiss controls — purpose-built for feature discovery flows."
        }
      }
    }
  };
  var TeachingPopover_stories_default = meta;
  var SingleStep = {
    args: {
      trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { appearance: "primary", children: "What's new" }),
      title: "Introducing Smart Search",
      body: "Find anything faster with our new AI-powered search. Just type what you're looking for in natural language.",
      primaryAction: { label: "Try it now" },
      secondaryAction: { label: "Dismiss" }
    }
  };
  var NoDismissButton = {
    args: {
      trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { appearance: "secondary", children: "Help" }),
      title: "Keyboard shortcuts",
      body: "Press Ctrl+K to open command palette. Press ? anywhere to see all shortcuts.",
      withDismiss: false,
      primaryAction: { label: "Got it" }
    }
  };
  var MultiStep = {
    args: {
      trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { appearance: "primary", children: "Start tour" }),
      title: "Get started",
      steps: [
        {
          title: "Welcome to the dashboard",
          body: "This is your command center. Here you can see an overview of all your projects and recent activity."
        },
        {
          title: "Create your first project",
          body: "Click the + button in the top right to create a new project. You can choose from templates or start blank."
        },
        {
          title: "Invite your team",
          body: "Share projects with teammates by clicking Share. They'll get an email invitation to collaborate."
        }
      ],
      primaryAction: { label: "Done" }
    }
  };
  var PositionedAbove = {
    args: {
      trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { appearance: "secondary", children: "Tooltip above" }),
      title: "Positioned above",
      body: "This teaching popover opens above its trigger.",
      positioning: "above-start",
      primaryAction: { label: "OK" }
    }
  };

  // .design-sync/.cache/previews/TeachingPopover.tsx
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
  var SingleStep2 = (
    /* Single Step */
    compose(TeachingPopover_stories_exports, "SingleStep")
  );
  var NoDismissButton2 = (
    /* No Dismiss Button */
    compose(TeachingPopover_stories_exports, "NoDismissButton")
  );
  var MultiStep2 = (
    /* Multi Step */
    compose(TeachingPopover_stories_exports, "MultiStep")
  );
  var PositionedAbove2 = (
    /* Positioned Above */
    compose(TeachingPopover_stories_exports, "PositionedAbove")
  );
  return __toCommonJS(TeachingPopover_exports);
})();
