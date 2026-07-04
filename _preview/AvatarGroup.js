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

  // .design-sync/.cache/previews/AvatarGroup.tsx
  var AvatarGroup_exports = {};
  __export(AvatarGroup_exports, {
    Large: () => Large2,
    Pie: () => Pie2,
    Small: () => Small2,
    Spread: () => Spread2,
    Stack: () => Stack2,
    WithOverflow: () => WithOverflow2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim());

  // src/stories/AvatarGroup.stories.tsx
  var AvatarGroup_stories_exports = {};
  __export(AvatarGroup_stories_exports, {
    Large: () => Large,
    Pie: () => Pie,
    Small: () => Small,
    Spread: () => Spread,
    Stack: () => Stack,
    WithOverflow: () => WithOverflow,
    default: () => AvatarGroup_stories_default
  });
  init_define_import_meta_env();

  // ds-shim:ds:AvatarGroup
  var ds_AvatarGroup_exports = {};
  __export(ds_AvatarGroup_exports, {
    default: () => ds_AvatarGroup_default
  });
  init_define_import_meta_env();
  __reExport(ds_AvatarGroup_exports, __toESM(require_ds_raw()));
  var g = window.LumelFluent2Ds;
  var ds_AvatarGroup_default = g["AvatarGroup"] !== void 0 ? g["AvatarGroup"] : g;

  // src/stories/AvatarGroup.stories.tsx
  var meta = {
    title: "Components/AvatarGroup",
    component: ds_AvatarGroup_exports.AvatarGroup,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "AvatarGroup renders a stacked or spread cluster of Avatar components, used to represent a group of people associated with an item — such as file collaborators, meeting attendees, or team members."
        }
      }
    },
    argTypes: {
      layout: { control: "select", options: ["spread", "stack", "pie"] },
      size: { control: "select", options: [16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 120, 128] }
    }
  };
  var AvatarGroup_stories_default = meta;
  var members = [
    { name: "Alice Chen", initials: "AC" },
    { name: "Bob Smith", initials: "BS" },
    { name: "Carol Jones", initials: "CJ" },
    { name: "David Lee", initials: "DL" },
    { name: "Eva Martinez", initials: "EM" }
  ];
  var Spread = {
    args: { members, layout: "spread", size: 32 }
  };
  var Stack = {
    args: { members, layout: "stack", size: 32 }
  };
  var Pie = {
    args: { members, layout: "pie", size: 32 }
  };
  var WithOverflow = {
    args: {
      members: [...members, { name: "Frank Brown", initials: "FB" }, { name: "Gina White", initials: "GW" }],
      layout: "stack",
      size: 32,
      maxVisible: 4
    }
  };
  var Large = {
    args: { members: members.slice(0, 3), layout: "spread", size: 48 }
  };
  var Small = {
    args: { members: members.slice(0, 3), layout: "stack", size: 24 }
  };

  // .design-sync/.cache/previews/AvatarGroup.tsx
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
  var Spread2 = (
    /* Spread */
    compose(AvatarGroup_stories_exports, "Spread")
  );
  var Stack2 = (
    /* Stack */
    compose(AvatarGroup_stories_exports, "Stack")
  );
  var Pie2 = (
    /* Pie */
    compose(AvatarGroup_stories_exports, "Pie")
  );
  var WithOverflow2 = (
    /* With Overflow */
    compose(AvatarGroup_stories_exports, "WithOverflow")
  );
  var Large2 = (
    /* Large */
    compose(AvatarGroup_stories_exports, "Large")
  );
  var Small2 = (
    /* Small */
    compose(AvatarGroup_stories_exports, "Small")
  );
  return __toCommonJS(AvatarGroup_exports);
})();
