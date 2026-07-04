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

  // .design-sync/.cache/previews/StatusBadge.tsx
  var StatusBadge_exports = {};
  __export(StatusBadge_exports, {
    AllStatusesGrid: () => AllStatusesGrid2,
    Blocked: () => Blocked2,
    Completed: () => Completed2,
    CustomLabel: () => CustomLabel2,
    InProgress: () => InProgress2,
    Pending: () => Pending2,
    Warning: () => Warning2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim());

  // src/stories/StatusBadge.stories.tsx
  var StatusBadge_stories_exports = {};
  __export(StatusBadge_stories_exports, {
    AllStatusesGrid: () => AllStatusesGrid,
    Blocked: () => Blocked,
    Completed: () => Completed,
    CustomLabel: () => CustomLabel,
    InProgress: () => InProgress,
    Pending: () => Pending,
    Warning: () => Warning,
    default: () => StatusBadge_stories_default
  });
  init_define_import_meta_env();

  // ds-shim:ds:StatusBadge
  var ds_StatusBadge_exports = {};
  __export(ds_StatusBadge_exports, {
    default: () => ds_StatusBadge_default
  });
  init_define_import_meta_env();
  __reExport(ds_StatusBadge_exports, __toESM(require_ds_raw()));
  var g = window.LumelFluent2Ds;
  var ds_StatusBadge_default = g["StatusBadge"] !== void 0 ? g["StatusBadge"] : g;

  // src/stories/StatusBadge.stories.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var meta = {
    title: "Phase 2/StatusBadge",
    component: ds_StatusBadge_exports.StatusBadge,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "StatusBadge is a compact label used to communicate the status or category of an item — such as workflow states, priority levels, or lifecycle stages. Supports predefined semantic colors for common statuses.\n\n**When to use:** Displaying item states in data tables, cards, and lists — order status (Pending, Shipped, Delivered), task priority (High, Medium, Low), or lifecycle stages.\n\n**When NOT to use:** Counting items (use CounterBadge). User presence (use PresenceBadge). As a standalone interactive element — badges are non-interactive."
        }
      }
    },
    argTypes: {
      status: {
        control: "select",
        options: ["completed", "in-progress", "blocked", "pending", "warning"]
      },
      size: {
        control: "radio",
        options: ["small", "medium"]
      }
    }
  };
  var StatusBadge_stories_default = meta;
  var Completed = {
    args: { status: "completed" }
  };
  var InProgress = {
    args: { status: "in-progress" }
  };
  var Blocked = {
    args: { status: "blocked" }
  };
  var Pending = {
    args: { status: "pending" }
  };
  var Warning = {
    args: { status: "warning" }
  };
  var AllStatusesGrid = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_StatusBadge_exports.StatusBadge, { status: "completed" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_StatusBadge_exports.StatusBadge, { status: "in-progress" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_StatusBadge_exports.StatusBadge, { status: "blocked" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_StatusBadge_exports.StatusBadge, { status: "pending" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_StatusBadge_exports.StatusBadge, { status: "warning" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_StatusBadge_exports.StatusBadge, { status: "completed", size: "small" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_StatusBadge_exports.StatusBadge, { status: "in-progress", size: "small" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_StatusBadge_exports.StatusBadge, { status: "blocked", size: "small" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_StatusBadge_exports.StatusBadge, { status: "pending", size: "small" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_StatusBadge_exports.StatusBadge, { status: "warning", size: "small" })
      ] })
    ] })
  };
  var CustomLabel = {
    args: { status: "in-progress", label: "Deploying" }
  };

  // .design-sync/.cache/previews/StatusBadge.tsx
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
  var Completed2 = (
    /* Completed */
    compose(StatusBadge_stories_exports, "Completed")
  );
  var InProgress2 = (
    /* In Progress */
    compose(StatusBadge_stories_exports, "InProgress")
  );
  var Blocked2 = (
    /* Blocked */
    compose(StatusBadge_stories_exports, "Blocked")
  );
  var Pending2 = (
    /* Pending */
    compose(StatusBadge_stories_exports, "Pending")
  );
  var Warning2 = (
    /* Warning */
    compose(StatusBadge_stories_exports, "Warning")
  );
  var AllStatusesGrid2 = (
    /* All Statuses Grid */
    compose(StatusBadge_stories_exports, "AllStatusesGrid")
  );
  var CustomLabel2 = (
    /* Custom Label */
    compose(StatusBadge_stories_exports, "CustomLabel")
  );
  return __toCommonJS(StatusBadge_exports);
})();
