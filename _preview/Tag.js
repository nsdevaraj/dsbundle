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

  // .design-sync/.cache/previews/Tag.tsx
  var Tag_exports = {};
  __export(Tag_exports, {
    Brand: () => Brand2,
    Dismissible: () => Dismissible2,
    ExtraSmall: () => ExtraSmall2,
    Filled: () => Filled2,
    Group: () => Group2,
    Outline: () => Outline2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim());

  // src/stories/Tag.stories.tsx
  var Tag_stories_exports = {};
  __export(Tag_stories_exports, {
    Brand: () => Brand,
    Dismissible: () => Dismissible,
    ExtraSmall: () => ExtraSmall,
    Filled: () => Filled,
    Group: () => Group,
    Outline: () => Outline,
    default: () => Tag_stories_default
  });
  init_define_import_meta_env();

  // ds-shim:ds:Tag
  var ds_Tag_exports = {};
  __export(ds_Tag_exports, {
    default: () => ds_Tag_default
  });
  init_define_import_meta_env();
  __reExport(ds_Tag_exports, __toESM(require_ds_raw()));
  var g = window.LumelFluent2Ds;
  var ds_Tag_default = g["Tag"] !== void 0 ? g["Tag"] : g;

  // src/stories/Tag.stories.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var tagMeta = {
    title: "Components/Tag",
    component: ds_Tag_exports.Tag,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "Tag is a compact label for categorizing, filtering, or displaying metadata associated with content. Read-only by default; use InteractionTag for clickable or dismissible behavior."
        }
      }
    },
    argTypes: {
      appearance: { control: "select", options: ["filled", "outline", "brand"] },
      size: { control: "select", options: ["extra-small", "small", "medium"] },
      shape: { control: "select", options: ["circular", "rounded"] }
    }
  };
  var Tag_stories_default = tagMeta;
  var Filled = { args: { children: "React", appearance: "filled" } };
  var Outline = { args: { children: "TypeScript", appearance: "outline" } };
  var Brand = { args: { children: "New", appearance: "brand" } };
  var ExtraSmall = { args: { children: "xs", size: "extra-small" } };
  var Dismissible = { args: { children: "Removable", dismissible: true, value: "removable" } };
  var Group = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ds_Tag_exports.TagGroup,
      {
        tags: ["React", "TypeScript", "Fluent UI", "Design System", "Accessibility"],
        maxVisible: 3,
        onDismiss: (v) => console.log("dismissed", v)
      }
    )
  };

  // .design-sync/.cache/previews/Tag.tsx
  function compose(S, key) {
    const meta = S.default ?? {};
    const st = S[key];
    const args = { ...meta.args ?? {}, ...st && st.args ? st.args : {} };
    const at = { ...meta.argTypes ?? {}, ...st && st.argTypes ? st.argTypes : {} };
    for (const k of Object.keys(args)) {
      const m = at[k] && at[k].mapping;
      if (m && typeof m === "object" && args[k] in m) args[k] = m[args[k]];
    }
    const title = typeof meta.title === "string" ? meta.title : "";
    const ctx = {
      args,
      name: key,
      title,
      kind: title,
      id: "",
      componentId: "",
      globals: {},
      viewMode: "story",
      parameters: (st && st.parameters) ?? meta.parameters ?? {}
    };
    let render = null;
    if (st && typeof st.render === "function") render = () => st.render(args, ctx);
    else if (typeof st === "function") render = () => st(args, ctx);
    else if (typeof meta.render === "function") render = () => meta.render(args, ctx);
    else {
      const C = st && st.component || meta.component;
      if (C) render = () => React.createElement(C, args);
    }
    if (!render) return () => null;
    const decorators = [].concat((st && st.decorators) ?? []).concat(meta.decorators ?? []);
    return decorators.reduce((inner, dec) => () => {
      const out = dec(inner, ctx);
      return out === void 0 ? inner() : out;
    }, render);
  }
  var Filled2 = (
    /* Filled */
    compose(Tag_stories_exports, "Filled")
  );
  var Outline2 = (
    /* Outline */
    compose(Tag_stories_exports, "Outline")
  );
  var Brand2 = (
    /* Brand */
    compose(Tag_stories_exports, "Brand")
  );
  var ExtraSmall2 = (
    /* Extra Small */
    compose(Tag_stories_exports, "ExtraSmall")
  );
  var Dismissible2 = (
    /* Dismissible */
    compose(Tag_stories_exports, "Dismissible")
  );
  var Group2 = (
    /* Group */
    compose(Tag_stories_exports, "Group")
  );
  return __toCommonJS(Tag_exports);
})();
