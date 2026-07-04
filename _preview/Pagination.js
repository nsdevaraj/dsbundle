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

  // .design-sync/.cache/previews/Pagination.tsx
  var Pagination_exports = {};
  __export(Pagination_exports, {
    Default: () => Default2,
    Disabled: () => Disabled2,
    ManyPagesWithEllipses: () => ManyPagesWithEllipses2,
    NumbersOnly: () => NumbersOnly2,
    Small: () => Small2,
    WithFirstLast: () => WithFirstLast2
  });
  init_define_import_meta_env();
  var React2 = __toESM(require_react_shim());

  // src/stories/Pagination.stories.tsx
  var Pagination_stories_exports = {};
  __export(Pagination_stories_exports, {
    Default: () => Default,
    Disabled: () => Disabled,
    ManyPagesWithEllipses: () => ManyPagesWithEllipses,
    NumbersOnly: () => NumbersOnly,
    Small: () => Small,
    WithFirstLast: () => WithFirstLast,
    default: () => Pagination_stories_default
  });
  init_define_import_meta_env();
  var import_react = __toESM(require_react_shim());

  // ds-shim:ds:Pagination
  var ds_Pagination_exports = {};
  __export(ds_Pagination_exports, {
    default: () => ds_Pagination_default
  });
  init_define_import_meta_env();
  __reExport(ds_Pagination_exports, __toESM(require_ds_raw()));
  var g = window.LumelFluent2Ds;
  var ds_Pagination_default = g["Pagination"] !== void 0 ? g["Pagination"] : g;

  // src/stories/Pagination.stories.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var meta = {
    title: "Components/Pagination",
    component: ds_Pagination_exports.Pagination,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: 'Pagination lets users move through a large, paged data set one page at a time — the standard control beneath data tables and long lists. It shows the current page, nearby pages, and shortcuts to the first/last page.\n\n**When to use:** Client- or server-paged tables and lists where the total page count is known. Pair with `DataTable`.\n\n**When NOT to use:** Infinite scrolling feeds (use lazy loading). Unknown total counts (use "Load more"). Fewer than two pages — the control auto-hides.'
        }
      }
    },
    argTypes: {
      page: { control: { type: "number", min: 1 } },
      count: { control: { type: "number", min: 1 } },
      siblingCount: { control: { type: "number", min: 0 } },
      boundaryCount: { control: { type: "number", min: 1 } },
      size: { control: "radio", options: ["small", "medium"] },
      showFirstLast: { control: "boolean" },
      hidePrevNext: { control: "boolean" },
      disabled: { control: "boolean" }
    }
  };
  var Pagination_stories_default = meta;
  var Default = {
    args: { count: 10, showFirstLast: true },
    render: (args) => {
      const [page, setPage] = import_react.default.useState(args.page ?? 1);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Pagination_exports.Pagination, { ...args, page, onPageChange: setPage });
    }
  };
  var WithFirstLast = {
    args: { page: 5, count: 12, showFirstLast: true }
  };
  var ManyPagesWithEllipses = {
    args: { page: 7, count: 24, siblingCount: 1, boundaryCount: 1 }
  };
  var Small = {
    args: { page: 3, count: 8, size: "small", showFirstLast: true }
  };
  var Disabled = {
    args: { page: 2, count: 6, disabled: true, showFirstLast: true }
  };
  var NumbersOnly = {
    args: { page: 4, count: 9, hidePrevNext: true }
  };

  // .design-sync/.cache/previews/Pagination.tsx
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
    compose(Pagination_stories_exports, "Default")
  );
  var WithFirstLast2 = (
    /* With First Last */
    compose(Pagination_stories_exports, "WithFirstLast")
  );
  var ManyPagesWithEllipses2 = (
    /* Many Pages With Ellipses */
    compose(Pagination_stories_exports, "ManyPagesWithEllipses")
  );
  var Small2 = (
    /* Small */
    compose(Pagination_stories_exports, "Small")
  );
  var Disabled2 = (
    /* Disabled */
    compose(Pagination_stories_exports, "Disabled")
  );
  var NumbersOnly2 = (
    /* Numbers Only */
    compose(Pagination_stories_exports, "NumbersOnly")
  );
  return __toCommonJS(Pagination_exports);
})();
