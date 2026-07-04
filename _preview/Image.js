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

  // .design-sync/previews/Image.tsx
  var Image_exports = {};
  __export(Image_exports, {
    Bordered: () => Bordered2,
    Circular: () => Circular2,
    Contain: () => Contain2,
    Cover: () => Cover2,
    Default: () => Default2,
    Rounded: () => Rounded2,
    WithCaption: () => WithCaption2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim());

  // src/stories/Image.stories.tsx
  var Image_stories_exports = {};
  __export(Image_stories_exports, {
    Bordered: () => Bordered,
    Circular: () => Circular,
    Contain: () => Contain,
    Cover: () => Cover,
    Default: () => Default,
    Rounded: () => Rounded,
    WithCaption: () => WithCaption,
    default: () => Image_stories_default
  });
  init_define_import_meta_env();

  // ds-shim:ds:Image
  var ds_Image_exports = {};
  __export(ds_Image_exports, {
    default: () => ds_Image_default
  });
  init_define_import_meta_env();
  __reExport(ds_Image_exports, __toESM(require_ds_raw()));
  var g = window.LumelFluent2Ds;
  var ds_Image_default = g["Image"] !== void 0 ? g["Image"] : g;

  // src/stories/Image.stories.tsx
  var meta = {
    title: "Components/Image",
    component: ds_Image_exports.Image,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "Image wraps the HTML `<img>` element with Fluent styling support for fit, shape (rounded, circular, square), shadow, and block/inline layout. Handles responsive sizing and aspect-ratio constraints."
        }
      }
    },
    argTypes: {
      fit: { control: "select", options: ["none", "center", "contain", "cover", "default"] },
      shape: { control: "select", options: ["square", "rounded", "circular"] }
    }
  };
  var Image_stories_default = meta;
  var placeholder = "https://via.placeholder.com/400x200";
  var Default = {
    args: { src: placeholder, alt: "Placeholder image", width: 400, height: 200 }
  };
  var Rounded = {
    args: { src: placeholder, alt: "Rounded image", shape: "rounded", width: 200, height: 200 }
  };
  var Circular = {
    args: { src: placeholder, alt: "Circular image", shape: "circular", width: 120, height: 120 }
  };
  var Cover = {
    args: { src: placeholder, alt: "Cover fit", fit: "cover", width: 300, height: 150 }
  };
  var Contain = {
    args: { src: placeholder, alt: "Contain fit", fit: "contain", width: 300, height: 150 }
  };
  var WithCaption = {
    args: {
      src: placeholder,
      alt: "Image with caption",
      caption: "Figure 1: Example placeholder image",
      width: 400,
      height: 200
    }
  };
  var Bordered = {
    args: { src: placeholder, alt: "Bordered image", bordered: true, width: 300, height: 150 }
  };

  // .design-sync/previews/Image.tsx
  function compose(S, key, overrides) {
    const meta2 = S.default ?? {};
    const st = S[key];
    const args = { ...meta2.args ?? {}, ...st && st.args ? st.args : {} };
    const at = { ...meta2.argTypes ?? {}, ...st && st.argTypes ? st.argTypes : {} };
    for (const k of Object.keys(args)) {
      const m = at[k] && at[k].mapping;
      if (m && typeof m === "object" && args[k] in m) args[k] = m[args[k]];
    }
    if (overrides) Object.assign(args, overrides);
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
  var pngPlaceholder = (w, h, color) => `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="100%" height="100%" fill="${color}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui,sans-serif" font-size="16" fill="#fff">${w}x${h}</text></svg>`)}`;
  var placeholder2 = pngPlaceholder(400, 200, "#3b82f6");
  var placeholder200 = pngPlaceholder(200, 200, "#8b5cf6");
  var placeholder120 = pngPlaceholder(120, 120, "#ec4899");
  var placeholder300x150 = pngPlaceholder(300, 150, "#10b981");
  var Default2 = (
    /* Default */
    compose(Image_stories_exports, "Default", { src: placeholder2 })
  );
  var Rounded2 = (
    /* Rounded */
    compose(Image_stories_exports, "Rounded", { src: placeholder200 })
  );
  var Circular2 = (
    /* Circular */
    compose(Image_stories_exports, "Circular", { src: placeholder120 })
  );
  var Cover2 = (
    /* Cover */
    compose(Image_stories_exports, "Cover", { src: placeholder300x150 })
  );
  var Contain2 = (
    /* Contain */
    compose(Image_stories_exports, "Contain", { src: placeholder300x150 })
  );
  var WithCaption2 = (
    /* With Caption */
    compose(Image_stories_exports, "WithCaption", { src: placeholder2 })
  );
  var Bordered2 = (
    /* Bordered */
    compose(Image_stories_exports, "Bordered", { src: placeholder300x150 })
  );
  return __toCommonJS(Image_exports);
})();
