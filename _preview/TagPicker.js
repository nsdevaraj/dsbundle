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

  // .design-sync/.cache/previews/TagPicker.tsx
  var TagPicker_exports = {};
  __export(TagPicker_exports, {
    Controlled: () => Controlled2,
    Default: () => Default2,
    Disabled: () => Disabled2,
    NoLabel: () => NoLabel2,
    Required: () => Required2,
    WithHint: () => WithHint2,
    WithValidation: () => WithValidation2
  });
  init_define_import_meta_env();
  var React2 = __toESM(require_react_shim());

  // src/stories/TagPicker.stories.tsx
  var TagPicker_stories_exports = {};
  __export(TagPicker_stories_exports, {
    Controlled: () => Controlled,
    Default: () => Default,
    Disabled: () => Disabled,
    NoLabel: () => NoLabel,
    Required: () => Required,
    WithHint: () => WithHint,
    WithValidation: () => WithValidation,
    default: () => TagPicker_stories_default
  });
  init_define_import_meta_env();
  var import_react = __toESM(require_react_shim());

  // ds-shim:ds:TagPicker
  var ds_TagPicker_exports = {};
  __export(ds_TagPicker_exports, {
    default: () => ds_TagPicker_default
  });
  init_define_import_meta_env();
  __reExport(ds_TagPicker_exports, __toESM(require_ds_raw()));
  var g = window.LumelFluent2Ds;
  var ds_TagPicker_default = g["TagPicker"] !== void 0 ? g["TagPicker"] : g;

  // src/stories/TagPicker.stories.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var meta = {
    title: "Components/TagPicker",
    component: ds_TagPicker_exports.TagPicker,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "TagPicker combines a text search input with a tag display area, letting users select multiple items from a searchable list and display them as removable tags. It's ideal for assigning people, labels, or categories from large option sets."
        }
      }
    }
  };
  var TagPicker_stories_default = meta;
  var people = [
    { value: "alice", label: "Alice Chen", description: "Engineering" },
    { value: "bob", label: "Bob Smith", description: "Design" },
    { value: "carol", label: "Carol Jones", description: "Product" },
    { value: "david", label: "David Lee", description: "Marketing" },
    { value: "eva", label: "Eva Martinez", description: "Sales" }
  ];
  var Default = {
    args: { label: "Assignees", options: people, placeholder: "Search people…" }
  };
  var Controlled = {
    render: () => {
      const [selected, setSelected] = (0, import_react.useState)(["alice"]);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        ds_TagPicker_exports.TagPicker,
        {
          label: "Team members",
          options: people,
          selectedValues: selected,
          onChange: setSelected,
          placeholder: "Add members…"
        }
      );
    }
  };
  var Required = {
    args: { label: "Required field", options: people, required: true }
  };
  var WithValidation = {
    args: {
      label: "Reviewers",
      options: people,
      validationState: "error",
      validationMessage: "At least one reviewer is required"
    }
  };
  var Disabled = {
    args: { label: "Assignees", options: people, disabled: true }
  };
  var WithHint = {
    args: {
      label: "CC",
      options: people,
      hint: "These people will receive a copy of the notification"
    }
  };
  var NoLabel = {
    args: { "aria-label": "Filter tags", options: people, placeholder: "Filter by tag…" }
  };

  // .design-sync/.cache/previews/TagPicker.tsx
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
    compose(TagPicker_stories_exports, "Default")
  );
  var Controlled2 = (
    /* Controlled */
    compose(TagPicker_stories_exports, "Controlled")
  );
  var Required2 = (
    /* Required */
    compose(TagPicker_stories_exports, "Required")
  );
  var WithValidation2 = (
    /* With Validation */
    compose(TagPicker_stories_exports, "WithValidation")
  );
  var Disabled2 = (
    /* Disabled */
    compose(TagPicker_stories_exports, "Disabled")
  );
  var WithHint2 = (
    /* With Hint */
    compose(TagPicker_stories_exports, "WithHint")
  );
  var NoLabel2 = (
    /* No Label */
    compose(TagPicker_stories_exports, "NoLabel")
  );
  return __toCommonJS(TagPicker_exports);
})();
