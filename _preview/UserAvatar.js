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

  // .design-sync/.cache/previews/UserAvatar.tsx
  var UserAvatar_exports = {};
  __export(UserAvatar_exports, {
    CustomInitials: () => CustomInitials2,
    Default: () => Default2,
    Large: () => Large2,
    Square: () => Square2,
    WithPresenceAvailable: () => WithPresenceAvailable2,
    WithPresenceAway: () => WithPresenceAway2,
    WithPresenceBusy: () => WithPresenceBusy2,
    WithPresenceOffline: () => WithPresenceOffline2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim());

  // src/stories/UserAvatar.stories.tsx
  var UserAvatar_stories_exports = {};
  __export(UserAvatar_stories_exports, {
    CustomInitials: () => CustomInitials,
    Default: () => Default,
    Large: () => Large,
    Square: () => Square,
    WithPresenceAvailable: () => WithPresenceAvailable,
    WithPresenceAway: () => WithPresenceAway,
    WithPresenceBusy: () => WithPresenceBusy,
    WithPresenceOffline: () => WithPresenceOffline,
    default: () => UserAvatar_stories_default
  });
  init_define_import_meta_env();

  // ds-shim:ds:UserAvatar
  var ds_UserAvatar_exports = {};
  __export(ds_UserAvatar_exports, {
    default: () => ds_UserAvatar_default
  });
  init_define_import_meta_env();
  __reExport(ds_UserAvatar_exports, __toESM(require_ds_raw()));
  var g = window.LumelFluent2Ds;
  var ds_UserAvatar_default = g["UserAvatar"] !== void 0 ? g["UserAvatar"] : g;

  // src/stories/UserAvatar.stories.tsx
  var meta = {
    title: "Components/UserAvatar",
    component: ds_UserAvatar_exports.UserAvatar,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "UserAvatar is a graphical representation of a user displayed as an image, initials, or fallback icon in a circular container. Wraps Fluent's Avatar with sensible defaults for user identity contexts."
        }
      }
    },
    argTypes: {
      size: { control: "select", options: [16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 120, 128] },
      shape: { control: "select", options: ["circular", "square"] },
      presence: { control: "select", options: ["none", "available", "away", "busy", "doNotDisturb", "offline"] },
      name: { control: "text" }
    }
  };
  var UserAvatar_stories_default = meta;
  var Default = {
    args: { name: "Alice Martin", size: 32 }
  };
  var WithPresenceAvailable = {
    args: { name: "Bob Kane", presence: "available", size: 40 }
  };
  var WithPresenceBusy = {
    args: { name: "Carol Danes", presence: "busy", size: 40 }
  };
  var WithPresenceAway = {
    args: { name: "David Park", presence: "away", size: 40 }
  };
  var WithPresenceOffline = {
    args: { name: "Eve Torres", presence: "offline", size: 40 }
  };
  var Large = {
    args: { name: "Frank Liu", presence: "available", size: 64 }
  };
  var Square = {
    args: { name: "Grace Hall", size: 40, shape: "square" }
  };
  var CustomInitials = {
    args: { name: "Unknown User", initials: "?", size: 40 }
  };

  // .design-sync/.cache/previews/UserAvatar.tsx
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
    compose(UserAvatar_stories_exports, "Default")
  );
  var WithPresenceAvailable2 = (
    /* With Presence Available */
    compose(UserAvatar_stories_exports, "WithPresenceAvailable")
  );
  var WithPresenceBusy2 = (
    /* With Presence Busy */
    compose(UserAvatar_stories_exports, "WithPresenceBusy")
  );
  var WithPresenceAway2 = (
    /* With Presence Away */
    compose(UserAvatar_stories_exports, "WithPresenceAway")
  );
  var WithPresenceOffline2 = (
    /* With Presence Offline */
    compose(UserAvatar_stories_exports, "WithPresenceOffline")
  );
  var Large2 = (
    /* Large */
    compose(UserAvatar_stories_exports, "Large")
  );
  var Square2 = (
    /* Square */
    compose(UserAvatar_stories_exports, "Square")
  );
  var CustomInitials2 = (
    /* Custom Initials */
    compose(UserAvatar_stories_exports, "CustomInitials")
  );
  return __toCommonJS(UserAvatar_exports);
})();
