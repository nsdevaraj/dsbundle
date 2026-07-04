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

  // .design-sync/.cache/previews/Tabs.tsx
  var Tabs_exports = {};
  __export(Tabs_exports, {
    Default: () => Default2,
    Small: () => Small2,
    Subtle: () => Subtle2,
    Vertical: () => Vertical2,
    WithDisabled: () => WithDisabled2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim());

  // src/stories/Tabs.stories.tsx
  var Tabs_stories_exports = {};
  __export(Tabs_stories_exports, {
    Default: () => Default,
    Small: () => Small,
    Subtle: () => Subtle,
    Vertical: () => Vertical,
    WithDisabled: () => WithDisabled,
    default: () => Tabs_stories_default
  });
  init_define_import_meta_env();

  // src/components/ui/index.ts
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

  // ds-shim:ds:Hamburger
  var ds_Hamburger_exports = {};
  __export(ds_Hamburger_exports, {
    default: () => ds_Hamburger_default
  });
  init_define_import_meta_env();
  __reExport(ds_Hamburger_exports, __toESM(require_ds_raw()));
  var g2 = window.LumelFluent2Ds;
  var ds_Hamburger_default = g2["Hamburger"] !== void 0 ? g2["Hamburger"] : g2;

  // ds-shim:ds:Divider
  var ds_Divider_exports = {};
  __export(ds_Divider_exports, {
    default: () => ds_Divider_default
  });
  init_define_import_meta_env();
  __reExport(ds_Divider_exports, __toESM(require_ds_raw()));
  var g3 = window.LumelFluent2Ds;
  var ds_Divider_default = g3["Divider"] !== void 0 ? g3["Divider"] : g3;

  // ds-shim:ds:Spinner
  var ds_Spinner_exports = {};
  __export(ds_Spinner_exports, {
    default: () => ds_Spinner_default
  });
  init_define_import_meta_env();
  __reExport(ds_Spinner_exports, __toESM(require_ds_raw()));
  var g4 = window.LumelFluent2Ds;
  var ds_Spinner_default = g4["Spinner"] !== void 0 ? g4["Spinner"] : g4;

  // ds-shim:ds:Skeleton
  var ds_Skeleton_exports = {};
  __export(ds_Skeleton_exports, {
    default: () => ds_Skeleton_default
  });
  init_define_import_meta_env();
  __reExport(ds_Skeleton_exports, __toESM(require_ds_raw()));
  var g5 = window.LumelFluent2Ds;
  var ds_Skeleton_default = g5["Skeleton"] !== void 0 ? g5["Skeleton"] : g5;

  // ds-shim:ds:Icon
  var ds_Icon_exports = {};
  __export(ds_Icon_exports, {
    default: () => ds_Icon_default
  });
  init_define_import_meta_env();
  __reExport(ds_Icon_exports, __toESM(require_ds_raw()));
  var g6 = window.LumelFluent2Ds;
  var ds_Icon_default = g6["Icon"] !== void 0 ? g6["Icon"] : g6;

  // ds-shim:ds:Label
  var ds_Label_exports = {};
  __export(ds_Label_exports, {
    default: () => ds_Label_default
  });
  init_define_import_meta_env();
  __reExport(ds_Label_exports, __toESM(require_ds_raw()));
  var g7 = window.LumelFluent2Ds;
  var ds_Label_default = g7["Label"] !== void 0 ? g7["Label"] : g7;

  // ds-shim:ds:Input
  var ds_Input_exports = {};
  __export(ds_Input_exports, {
    default: () => ds_Input_default
  });
  init_define_import_meta_env();
  __reExport(ds_Input_exports, __toESM(require_ds_raw()));
  var g8 = window.LumelFluent2Ds;
  var ds_Input_default = g8["Input"] !== void 0 ? g8["Input"] : g8;

  // ds-shim:ds:TextField
  var ds_TextField_exports = {};
  __export(ds_TextField_exports, {
    default: () => ds_TextField_default
  });
  init_define_import_meta_env();
  __reExport(ds_TextField_exports, __toESM(require_ds_raw()));
  var g9 = window.LumelFluent2Ds;
  var ds_TextField_default = g9["TextField"] !== void 0 ? g9["TextField"] : g9;

  // ds-shim:ds:Textarea
  var ds_Textarea_exports = {};
  __export(ds_Textarea_exports, {
    default: () => ds_Textarea_default
  });
  init_define_import_meta_env();
  __reExport(ds_Textarea_exports, __toESM(require_ds_raw()));
  var g10 = window.LumelFluent2Ds;
  var ds_Textarea_default = g10["Textarea"] !== void 0 ? g10["Textarea"] : g10;

  // ds-shim:ds:Select
  var ds_Select_exports = {};
  __export(ds_Select_exports, {
    default: () => ds_Select_default
  });
  init_define_import_meta_env();
  __reExport(ds_Select_exports, __toESM(require_ds_raw()));
  var g11 = window.LumelFluent2Ds;
  var ds_Select_default = g11["Select"] !== void 0 ? g11["Select"] : g11;

  // ds-shim:ds:Combobox
  var ds_Combobox_exports = {};
  __export(ds_Combobox_exports, {
    default: () => ds_Combobox_default
  });
  init_define_import_meta_env();
  __reExport(ds_Combobox_exports, __toESM(require_ds_raw()));
  var g12 = window.LumelFluent2Ds;
  var ds_Combobox_default = g12["Combobox"] !== void 0 ? g12["Combobox"] : g12;

  // ds-shim:ds:Dropdown
  var ds_Dropdown_exports = {};
  __export(ds_Dropdown_exports, {
    default: () => ds_Dropdown_default
  });
  init_define_import_meta_env();
  __reExport(ds_Dropdown_exports, __toESM(require_ds_raw()));
  var g13 = window.LumelFluent2Ds;
  var ds_Dropdown_default = g13["Dropdown"] !== void 0 ? g13["Dropdown"] : g13;

  // ds-shim:ds:Checkbox
  var ds_Checkbox_exports = {};
  __export(ds_Checkbox_exports, {
    default: () => ds_Checkbox_default
  });
  init_define_import_meta_env();
  __reExport(ds_Checkbox_exports, __toESM(require_ds_raw()));
  var g14 = window.LumelFluent2Ds;
  var ds_Checkbox_default = g14["Checkbox"] !== void 0 ? g14["Checkbox"] : g14;

  // ds-shim:ds:RadioGroup
  var ds_RadioGroup_exports = {};
  __export(ds_RadioGroup_exports, {
    default: () => ds_RadioGroup_default
  });
  init_define_import_meta_env();
  __reExport(ds_RadioGroup_exports, __toESM(require_ds_raw()));
  var g15 = window.LumelFluent2Ds;
  var ds_RadioGroup_default = g15["RadioGroup"] !== void 0 ? g15["RadioGroup"] : g15;

  // ds-shim:ds:Switch
  var ds_Switch_exports = {};
  __export(ds_Switch_exports, {
    default: () => ds_Switch_default
  });
  init_define_import_meta_env();
  __reExport(ds_Switch_exports, __toESM(require_ds_raw()));
  var g16 = window.LumelFluent2Ds;
  var ds_Switch_default = g16["Switch"] !== void 0 ? g16["Switch"] : g16;

  // ds-shim:ds:Field
  var ds_Field_exports = {};
  __export(ds_Field_exports, {
    default: () => ds_Field_default
  });
  init_define_import_meta_env();
  __reExport(ds_Field_exports, __toESM(require_ds_raw()));
  var g17 = window.LumelFluent2Ds;
  var ds_Field_default = g17["Field"] !== void 0 ? g17["Field"] : g17;

  // ds-shim:ds:StatusBadge
  var ds_StatusBadge_exports = {};
  __export(ds_StatusBadge_exports, {
    default: () => ds_StatusBadge_default
  });
  init_define_import_meta_env();
  __reExport(ds_StatusBadge_exports, __toESM(require_ds_raw()));
  var g18 = window.LumelFluent2Ds;
  var ds_StatusBadge_default = g18["StatusBadge"] !== void 0 ? g18["StatusBadge"] : g18;

  // ds-shim:ds:Tag
  var ds_Tag_exports = {};
  __export(ds_Tag_exports, {
    default: () => ds_Tag_default
  });
  init_define_import_meta_env();
  __reExport(ds_Tag_exports, __toESM(require_ds_raw()));
  var g19 = window.LumelFluent2Ds;
  var ds_Tag_default = g19["Tag"] !== void 0 ? g19["Tag"] : g19;

  // ds-shim:ds:UserAvatar
  var ds_UserAvatar_exports = {};
  __export(ds_UserAvatar_exports, {
    default: () => ds_UserAvatar_default
  });
  init_define_import_meta_env();
  __reExport(ds_UserAvatar_exports, __toESM(require_ds_raw()));
  var g20 = window.LumelFluent2Ds;
  var ds_UserAvatar_default = g20["UserAvatar"] !== void 0 ? g20["UserAvatar"] : g20;

  // ds-shim:ds:Persona
  var ds_Persona_exports = {};
  __export(ds_Persona_exports, {
    default: () => ds_Persona_default
  });
  init_define_import_meta_env();
  __reExport(ds_Persona_exports, __toESM(require_ds_raw()));
  var g21 = window.LumelFluent2Ds;
  var ds_Persona_default = g21["Persona"] !== void 0 ? g21["Persona"] : g21;

  // ds-shim:ds:SearchInput
  var ds_SearchInput_exports = {};
  __export(ds_SearchInput_exports, {
    default: () => ds_SearchInput_default
  });
  init_define_import_meta_env();
  __reExport(ds_SearchInput_exports, __toESM(require_ds_raw()));
  var g22 = window.LumelFluent2Ds;
  var ds_SearchInput_default = g22["SearchInput"] !== void 0 ? g22["SearchInput"] : g22;

  // ds-shim:ds:DataCard
  var ds_DataCard_exports = {};
  __export(ds_DataCard_exports, {
    default: () => ds_DataCard_default
  });
  init_define_import_meta_env();
  __reExport(ds_DataCard_exports, __toESM(require_ds_raw()));
  var g23 = window.LumelFluent2Ds;
  var ds_DataCard_default = g23["DataCard"] !== void 0 ? g23["DataCard"] : g23;

  // ds-shim:ds:EmptyState
  var ds_EmptyState_exports = {};
  __export(ds_EmptyState_exports, {
    default: () => ds_EmptyState_default
  });
  init_define_import_meta_env();
  __reExport(ds_EmptyState_exports, __toESM(require_ds_raw()));
  var g24 = window.LumelFluent2Ds;
  var ds_EmptyState_default = g24["EmptyState"] !== void 0 ? g24["EmptyState"] : g24;

  // ds-shim:ds:PageHeader
  var ds_PageHeader_exports = {};
  __export(ds_PageHeader_exports, {
    default: () => ds_PageHeader_default
  });
  init_define_import_meta_env();
  __reExport(ds_PageHeader_exports, __toESM(require_ds_raw()));
  var g25 = window.LumelFluent2Ds;
  var ds_PageHeader_default = g25["PageHeader"] !== void 0 ? g25["PageHeader"] : g25;

  // ds-shim:ds:ConfirmDialog
  var ds_ConfirmDialog_exports = {};
  __export(ds_ConfirmDialog_exports, {
    default: () => ds_ConfirmDialog_default
  });
  init_define_import_meta_env();
  __reExport(ds_ConfirmDialog_exports, __toESM(require_ds_raw()));
  var g26 = window.LumelFluent2Ds;
  var ds_ConfirmDialog_default = g26["ConfirmDialog"] !== void 0 ? g26["ConfirmDialog"] : g26;

  // ds-shim:ds:Tooltip
  var ds_Tooltip_exports = {};
  __export(ds_Tooltip_exports, {
    default: () => ds_Tooltip_default
  });
  init_define_import_meta_env();
  __reExport(ds_Tooltip_exports, __toESM(require_ds_raw()));
  var g27 = window.LumelFluent2Ds;
  var ds_Tooltip_default = g27["Tooltip"] !== void 0 ? g27["Tooltip"] : g27;

  // ds-shim:ds:ProgressBar
  var ds_ProgressBar_exports = {};
  __export(ds_ProgressBar_exports, {
    default: () => ds_ProgressBar_default
  });
  init_define_import_meta_env();
  __reExport(ds_ProgressBar_exports, __toESM(require_ds_raw()));
  var g28 = window.LumelFluent2Ds;
  var ds_ProgressBar_default = g28["ProgressBar"] !== void 0 ? g28["ProgressBar"] : g28;

  // ds-shim:ds:MessageBar
  var ds_MessageBar_exports = {};
  __export(ds_MessageBar_exports, {
    default: () => ds_MessageBar_default
  });
  init_define_import_meta_env();
  __reExport(ds_MessageBar_exports, __toESM(require_ds_raw()));
  var g29 = window.LumelFluent2Ds;
  var ds_MessageBar_default = g29["MessageBar"] !== void 0 ? g29["MessageBar"] : g29;

  // ds-shim:ds:Tabs
  var ds_Tabs_exports = {};
  __export(ds_Tabs_exports, {
    default: () => ds_Tabs_default
  });
  init_define_import_meta_env();
  __reExport(ds_Tabs_exports, __toESM(require_ds_raw()));
  var g30 = window.LumelFluent2Ds;
  var ds_Tabs_default = g30["Tabs"] !== void 0 ? g30["Tabs"] : g30;

  // ds-shim:ds:Accordion
  var ds_Accordion_exports = {};
  __export(ds_Accordion_exports, {
    default: () => ds_Accordion_default
  });
  init_define_import_meta_env();
  __reExport(ds_Accordion_exports, __toESM(require_ds_raw()));
  var g31 = window.LumelFluent2Ds;
  var ds_Accordion_default = g31["Accordion"] !== void 0 ? g31["Accordion"] : g31;

  // ds-shim:ds:Slider
  var ds_Slider_exports = {};
  __export(ds_Slider_exports, {
    default: () => ds_Slider_default
  });
  init_define_import_meta_env();
  __reExport(ds_Slider_exports, __toESM(require_ds_raw()));
  var g32 = window.LumelFluent2Ds;
  var ds_Slider_default = g32["Slider"] !== void 0 ? g32["Slider"] : g32;

  // ds-shim:ds:Card
  var ds_Card_exports = {};
  __export(ds_Card_exports, {
    default: () => ds_Card_default
  });
  init_define_import_meta_env();
  __reExport(ds_Card_exports, __toESM(require_ds_raw()));
  var g33 = window.LumelFluent2Ds;
  var ds_Card_default = g33["Card"] !== void 0 ? g33["Card"] : g33;

  // ds-shim:ds:Stepper
  var ds_Stepper_exports = {};
  __export(ds_Stepper_exports, {
    default: () => ds_Stepper_default
  });
  init_define_import_meta_env();
  __reExport(ds_Stepper_exports, __toESM(require_ds_raw()));
  var g34 = window.LumelFluent2Ds;
  var ds_Stepper_default = g34["Stepper"] !== void 0 ? g34["Stepper"] : g34;

  // ds-shim:ds:DatePicker
  var ds_DatePicker_exports = {};
  __export(ds_DatePicker_exports, {
    default: () => ds_DatePicker_default
  });
  init_define_import_meta_env();
  __reExport(ds_DatePicker_exports, __toESM(require_ds_raw()));
  var g35 = window.LumelFluent2Ds;
  var ds_DatePicker_default = g35["DatePicker"] !== void 0 ? g35["DatePicker"] : g35;

  // ds-shim:ds:TimePicker
  var ds_TimePicker_exports = {};
  __export(ds_TimePicker_exports, {
    default: () => ds_TimePicker_default
  });
  init_define_import_meta_env();
  __reExport(ds_TimePicker_exports, __toESM(require_ds_raw()));
  var g36 = window.LumelFluent2Ds;
  var ds_TimePicker_default = g36["TimePicker"] !== void 0 ? g36["TimePicker"] : g36;

  // ds-shim:ds:Drawer
  var ds_Drawer_exports = {};
  __export(ds_Drawer_exports, {
    default: () => ds_Drawer_default
  });
  init_define_import_meta_env();
  __reExport(ds_Drawer_exports, __toESM(require_ds_raw()));
  var g37 = window.LumelFluent2Ds;
  var ds_Drawer_default = g37["Drawer"] !== void 0 ? g37["Drawer"] : g37;

  // ds-shim:ds:Popover
  var ds_Popover_exports = {};
  __export(ds_Popover_exports, {
    default: () => ds_Popover_default
  });
  init_define_import_meta_env();
  __reExport(ds_Popover_exports, __toESM(require_ds_raw()));
  var g38 = window.LumelFluent2Ds;
  var ds_Popover_default = g38["Popover"] !== void 0 ? g38["Popover"] : g38;

  // ds-shim:ds:FileUpload
  var ds_FileUpload_exports = {};
  __export(ds_FileUpload_exports, {
    default: () => ds_FileUpload_default
  });
  init_define_import_meta_env();
  __reExport(ds_FileUpload_exports, __toESM(require_ds_raw()));
  var g39 = window.LumelFluent2Ds;
  var ds_FileUpload_default = g39["FileUpload"] !== void 0 ? g39["FileUpload"] : g39;

  // ds-shim:ds:DataTable
  var ds_DataTable_exports = {};
  __export(ds_DataTable_exports, {
    default: () => ds_DataTable_default
  });
  init_define_import_meta_env();
  __reExport(ds_DataTable_exports, __toESM(require_ds_raw()));
  var g40 = window.LumelFluent2Ds;
  var ds_DataTable_default = g40["DataTable"] !== void 0 ? g40["DataTable"] : g40;

  // ds-shim:ds:Pagination
  var ds_Pagination_exports = {};
  __export(ds_Pagination_exports, {
    default: () => ds_Pagination_default
  });
  init_define_import_meta_env();
  __reExport(ds_Pagination_exports, __toESM(require_ds_raw()));
  var g41 = window.LumelFluent2Ds;
  var ds_Pagination_default = g41["Pagination"] !== void 0 ? g41["Pagination"] : g41;

  // ds-shim:ds:Table
  var ds_Table_exports = {};
  __export(ds_Table_exports, {
    default: () => ds_Table_default
  });
  init_define_import_meta_env();
  __reExport(ds_Table_exports, __toESM(require_ds_raw()));
  var g42 = window.LumelFluent2Ds;
  var ds_Table_default = g42["Table"] !== void 0 ? g42["Table"] : g42;

  // ds-shim:ds:SideNav
  var ds_SideNav_exports = {};
  __export(ds_SideNav_exports, {
    default: () => ds_SideNav_default
  });
  init_define_import_meta_env();
  __reExport(ds_SideNav_exports, __toESM(require_ds_raw()));
  var g43 = window.LumelFluent2Ds;
  var ds_SideNav_default = g43["SideNav"] !== void 0 ? g43["SideNav"] : g43;

  // ds-shim:ds:NavDrawer
  var ds_NavDrawer_exports = {};
  __export(ds_NavDrawer_exports, {
    default: () => ds_NavDrawer_default
  });
  init_define_import_meta_env();
  __reExport(ds_NavDrawer_exports, __toESM(require_ds_raw()));
  var g44 = window.LumelFluent2Ds;
  var ds_NavDrawer_default = g44["NavDrawer"] !== void 0 ? g44["NavDrawer"] : g44;

  // ds-shim:ds:Link
  var ds_Link_exports = {};
  __export(ds_Link_exports, {
    default: () => ds_Link_default
  });
  init_define_import_meta_env();
  __reExport(ds_Link_exports, __toESM(require_ds_raw()));
  var g45 = window.LumelFluent2Ds;
  var ds_Link_default = g45["Link"] !== void 0 ? g45["Link"] : g45;

  // ds-shim:ds:ToggleButton
  var ds_ToggleButton_exports = {};
  __export(ds_ToggleButton_exports, {
    default: () => ds_ToggleButton_default
  });
  init_define_import_meta_env();
  __reExport(ds_ToggleButton_exports, __toESM(require_ds_raw()));
  var g46 = window.LumelFluent2Ds;
  var ds_ToggleButton_default = g46["ToggleButton"] !== void 0 ? g46["ToggleButton"] : g46;

  // ds-shim:ds:CompoundButton
  var ds_CompoundButton_exports = {};
  __export(ds_CompoundButton_exports, {
    default: () => ds_CompoundButton_default
  });
  init_define_import_meta_env();
  __reExport(ds_CompoundButton_exports, __toESM(require_ds_raw()));
  var g47 = window.LumelFluent2Ds;
  var ds_CompoundButton_default = g47["CompoundButton"] !== void 0 ? g47["CompoundButton"] : g47;

  // ds-shim:ds:Menu
  var ds_Menu_exports = {};
  __export(ds_Menu_exports, {
    default: () => ds_Menu_default
  });
  init_define_import_meta_env();
  __reExport(ds_Menu_exports, __toESM(require_ds_raw()));
  var g48 = window.LumelFluent2Ds;
  var ds_Menu_default = g48["Menu"] !== void 0 ? g48["Menu"] : g48;

  // ds-shim:ds:MenuButton
  var ds_MenuButton_exports = {};
  __export(ds_MenuButton_exports, {
    default: () => ds_MenuButton_default
  });
  init_define_import_meta_env();
  __reExport(ds_MenuButton_exports, __toESM(require_ds_raw()));
  var g49 = window.LumelFluent2Ds;
  var ds_MenuButton_default = g49["MenuButton"] !== void 0 ? g49["MenuButton"] : g49;

  // ds-shim:ds:SplitButton
  var ds_SplitButton_exports = {};
  __export(ds_SplitButton_exports, {
    default: () => ds_SplitButton_default
  });
  init_define_import_meta_env();
  __reExport(ds_SplitButton_exports, __toESM(require_ds_raw()));
  var g50 = window.LumelFluent2Ds;
  var ds_SplitButton_default = g50["SplitButton"] !== void 0 ? g50["SplitButton"] : g50;

  // ds-shim:ds:Toolbar
  var ds_Toolbar_exports = {};
  __export(ds_Toolbar_exports, {
    default: () => ds_Toolbar_default
  });
  init_define_import_meta_env();
  __reExport(ds_Toolbar_exports, __toESM(require_ds_raw()));
  var g51 = window.LumelFluent2Ds;
  var ds_Toolbar_default = g51["Toolbar"] !== void 0 ? g51["Toolbar"] : g51;

  // ds-shim:ds:Overflow
  var ds_Overflow_exports = {};
  __export(ds_Overflow_exports, {
    default: () => ds_Overflow_default
  });
  init_define_import_meta_env();
  __reExport(ds_Overflow_exports, __toESM(require_ds_raw()));
  var g52 = window.LumelFluent2Ds;
  var ds_Overflow_default = g52["Overflow"] !== void 0 ? g52["Overflow"] : g52;

  // ds-shim:ds:Dialog
  var ds_Dialog_exports = {};
  __export(ds_Dialog_exports, {
    default: () => ds_Dialog_default
  });
  init_define_import_meta_env();
  __reExport(ds_Dialog_exports, __toESM(require_ds_raw()));
  var g53 = window.LumelFluent2Ds;
  var ds_Dialog_default = g53["Dialog"] !== void 0 ? g53["Dialog"] : g53;

  // ds-shim:ds:Breadcrumb
  var ds_Breadcrumb_exports = {};
  __export(ds_Breadcrumb_exports, {
    default: () => ds_Breadcrumb_default
  });
  init_define_import_meta_env();
  __reExport(ds_Breadcrumb_exports, __toESM(require_ds_raw()));
  var g54 = window.LumelFluent2Ds;
  var ds_Breadcrumb_default = g54["Breadcrumb"] !== void 0 ? g54["Breadcrumb"] : g54;

  // ds-shim:ds:InfoLabel
  var ds_InfoLabel_exports = {};
  __export(ds_InfoLabel_exports, {
    default: () => ds_InfoLabel_default
  });
  init_define_import_meta_env();
  __reExport(ds_InfoLabel_exports, __toESM(require_ds_raw()));
  var g55 = window.LumelFluent2Ds;
  var ds_InfoLabel_default = g55["InfoLabel"] !== void 0 ? g55["InfoLabel"] : g55;

  // ds-shim:ds:SpinButton
  var ds_SpinButton_exports = {};
  __export(ds_SpinButton_exports, {
    default: () => ds_SpinButton_default
  });
  init_define_import_meta_env();
  __reExport(ds_SpinButton_exports, __toESM(require_ds_raw()));
  var g56 = window.LumelFluent2Ds;
  var ds_SpinButton_default = g56["SpinButton"] !== void 0 ? g56["SpinButton"] : g56;

  // ds-shim:ds:TagPicker
  var ds_TagPicker_exports = {};
  __export(ds_TagPicker_exports, {
    default: () => ds_TagPicker_default
  });
  init_define_import_meta_env();
  __reExport(ds_TagPicker_exports, __toESM(require_ds_raw()));
  var g57 = window.LumelFluent2Ds;
  var ds_TagPicker_default = g57["TagPicker"] !== void 0 ? g57["TagPicker"] : g57;

  // ds-shim:ds:Badge
  var ds_Badge_exports = {};
  __export(ds_Badge_exports, {
    default: () => ds_Badge_default
  });
  init_define_import_meta_env();
  __reExport(ds_Badge_exports, __toESM(require_ds_raw()));
  var g58 = window.LumelFluent2Ds;
  var ds_Badge_default = g58["Badge"] !== void 0 ? g58["Badge"] : g58;

  // ds-shim:ds:CounterBadge
  var ds_CounterBadge_exports = {};
  __export(ds_CounterBadge_exports, {
    default: () => ds_CounterBadge_default
  });
  init_define_import_meta_env();
  __reExport(ds_CounterBadge_exports, __toESM(require_ds_raw()));
  var g59 = window.LumelFluent2Ds;
  var ds_CounterBadge_default = g59["CounterBadge"] !== void 0 ? g59["CounterBadge"] : g59;

  // ds-shim:ds:PresenceBadge
  var ds_PresenceBadge_exports = {};
  __export(ds_PresenceBadge_exports, {
    default: () => ds_PresenceBadge_default
  });
  init_define_import_meta_env();
  __reExport(ds_PresenceBadge_exports, __toESM(require_ds_raw()));
  var g60 = window.LumelFluent2Ds;
  var ds_PresenceBadge_default = g60["PresenceBadge"] !== void 0 ? g60["PresenceBadge"] : g60;

  // ds-shim:ds:PresenceGroup
  var ds_PresenceGroup_exports = {};
  __export(ds_PresenceGroup_exports, {
    default: () => ds_PresenceGroup_default
  });
  init_define_import_meta_env();
  __reExport(ds_PresenceGroup_exports, __toESM(require_ds_raw()));
  var g61 = window.LumelFluent2Ds;
  var ds_PresenceGroup_default = g61["PresenceGroup"] !== void 0 ? g61["PresenceGroup"] : g61;

  // ds-shim:ds:AvatarGroup
  var ds_AvatarGroup_exports = {};
  __export(ds_AvatarGroup_exports, {
    default: () => ds_AvatarGroup_default
  });
  init_define_import_meta_env();
  __reExport(ds_AvatarGroup_exports, __toESM(require_ds_raw()));
  var g62 = window.LumelFluent2Ds;
  var ds_AvatarGroup_default = g62["AvatarGroup"] !== void 0 ? g62["AvatarGroup"] : g62;

  // ds-shim:ds:List
  var ds_List_exports = {};
  __export(ds_List_exports, {
    default: () => ds_List_default
  });
  init_define_import_meta_env();
  __reExport(ds_List_exports, __toESM(require_ds_raw()));
  var g63 = window.LumelFluent2Ds;
  var ds_List_default = g63["List"] !== void 0 ? g63["List"] : g63;

  // ds-shim:ds:Rating
  var ds_Rating_exports = {};
  __export(ds_Rating_exports, {
    default: () => ds_Rating_default
  });
  init_define_import_meta_env();
  __reExport(ds_Rating_exports, __toESM(require_ds_raw()));
  var g64 = window.LumelFluent2Ds;
  var ds_Rating_default = g64["Rating"] !== void 0 ? g64["Rating"] : g64;

  // ds-shim:ds:Tree
  var ds_Tree_exports = {};
  __export(ds_Tree_exports, {
    default: () => ds_Tree_default
  });
  init_define_import_meta_env();
  __reExport(ds_Tree_exports, __toESM(require_ds_raw()));
  var g65 = window.LumelFluent2Ds;
  var ds_Tree_default = g65["Tree"] !== void 0 ? g65["Tree"] : g65;

  // ds-shim:ds:InteractionTag
  var ds_InteractionTag_exports = {};
  __export(ds_InteractionTag_exports, {
    default: () => ds_InteractionTag_default
  });
  init_define_import_meta_env();
  __reExport(ds_InteractionTag_exports, __toESM(require_ds_raw()));
  var g66 = window.LumelFluent2Ds;
  var ds_InteractionTag_default = g66["InteractionTag"] !== void 0 ? g66["InteractionTag"] : g66;

  // ds-shim:ds:Image
  var ds_Image_exports = {};
  __export(ds_Image_exports, {
    default: () => ds_Image_default
  });
  init_define_import_meta_env();
  __reExport(ds_Image_exports, __toESM(require_ds_raw()));
  var g67 = window.LumelFluent2Ds;
  var ds_Image_default = g67["Image"] !== void 0 ? g67["Image"] : g67;

  // ds-shim:ds:Carousel
  var ds_Carousel_exports = {};
  __export(ds_Carousel_exports, {
    default: () => ds_Carousel_default
  });
  init_define_import_meta_env();
  __reExport(ds_Carousel_exports, __toESM(require_ds_raw()));
  var g68 = window.LumelFluent2Ds;
  var ds_Carousel_default = g68["Carousel"] !== void 0 ? g68["Carousel"] : g68;

  // ds-shim:ds:ColorPicker
  var ds_ColorPicker_exports = {};
  __export(ds_ColorPicker_exports, {
    default: () => ds_ColorPicker_default
  });
  init_define_import_meta_env();
  __reExport(ds_ColorPicker_exports, __toESM(require_ds_raw()));
  var g69 = window.LumelFluent2Ds;
  var ds_ColorPicker_default = g69["ColorPicker"] !== void 0 ? g69["ColorPicker"] : g69;

  // ds-shim:ds:SwatchPicker
  var ds_SwatchPicker_exports = {};
  __export(ds_SwatchPicker_exports, {
    default: () => ds_SwatchPicker_default
  });
  init_define_import_meta_env();
  __reExport(ds_SwatchPicker_exports, __toESM(require_ds_raw()));
  var g70 = window.LumelFluent2Ds;
  var ds_SwatchPicker_default = g70["SwatchPicker"] !== void 0 ? g70["SwatchPicker"] : g70;

  // ds-shim:ds:Portal
  var ds_Portal_exports = {};
  __export(ds_Portal_exports, {
    default: () => ds_Portal_default
  });
  init_define_import_meta_env();
  __reExport(ds_Portal_exports, __toESM(require_ds_raw()));
  var g71 = window.LumelFluent2Ds;
  var ds_Portal_default = g71["Portal"] !== void 0 ? g71["Portal"] : g71;

  // ds-shim:ds:Listbox
  var ds_Listbox_exports = {};
  __export(ds_Listbox_exports, {
    default: () => ds_Listbox_default
  });
  init_define_import_meta_env();
  __reExport(ds_Listbox_exports, __toESM(require_ds_raw()));
  var g72 = window.LumelFluent2Ds;
  var ds_Listbox_default = g72["Listbox"] !== void 0 ? g72["Listbox"] : g72;

  // ds-shim:ds:AnnounceProvider
  var ds_AnnounceProvider_exports = {};
  __export(ds_AnnounceProvider_exports, {
    default: () => ds_AnnounceProvider_default
  });
  init_define_import_meta_env();
  __reExport(ds_AnnounceProvider_exports, __toESM(require_ds_raw()));
  var g73 = window.LumelFluent2Ds;
  var ds_AnnounceProvider_default = g73["AnnounceProvider"] !== void 0 ? g73["AnnounceProvider"] : g73;

  // ds-shim:ds:TeachingPopover
  var ds_TeachingPopover_exports = {};
  __export(ds_TeachingPopover_exports, {
    default: () => ds_TeachingPopover_default
  });
  init_define_import_meta_env();
  __reExport(ds_TeachingPopover_exports, __toESM(require_ds_raw()));
  var g74 = window.LumelFluent2Ds;
  var ds_TeachingPopover_default = g74["TeachingPopover"] !== void 0 ? g74["TeachingPopover"] : g74;

  // src/stories/Tabs.stories.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var meta = {
    title: "Phase 3/Tabs",
    component: ds_Tabs_exports.Tabs,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "Tabs organize content into multiple panels where only one panel is visible at a time, with tab labels displayed as a horizontal or vertical row. Each tab corresponds to a distinct but related content section."
        }
      }
    },
    argTypes: {
      appearance: { control: "select", options: ["transparent", "subtle", "underline"] },
      size: { control: "select", options: ["small", "medium"] },
      vertical: { control: "boolean" }
    }
  };
  var Tabs_stories_default = meta;
  var tabs = [
    { value: "overview", label: "Overview" },
    { value: "details", label: "Details" },
    { value: "history", label: "History" }
  ];
  var panels = {
    overview: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: { margin: 0 }, children: "Overview content" }),
    details: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: { margin: 0 }, children: "Details content" }),
    history: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: { margin: 0 }, children: "History content" })
  };
  var Default = {
    args: { tabs, panels, defaultSelectedValue: "overview" }
  };
  var Subtle = {
    args: { tabs, panels, defaultSelectedValue: "details", appearance: "subtle" }
  };
  var Small = {
    args: { tabs, panels, defaultSelectedValue: "overview", size: "small" }
  };
  var WithDisabled = {
    args: {
      tabs: [
        { value: "a", label: "Active" },
        { value: "b", label: "Disabled", disabled: true },
        { value: "c", label: "Another" }
      ],
      panels: { a: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A content" }), b: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "B content" }), c: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "C content" }) },
      defaultSelectedValue: "a"
    }
  };
  var Vertical = {
    args: { tabs, panels, defaultSelectedValue: "overview", vertical: true }
  };

  // .design-sync/.cache/previews/Tabs.tsx
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
    compose(Tabs_stories_exports, "Default")
  );
  var Subtle2 = (
    /* Subtle */
    compose(Tabs_stories_exports, "Subtle")
  );
  var Small2 = (
    /* Small */
    compose(Tabs_stories_exports, "Small")
  );
  var WithDisabled2 = (
    /* With Disabled */
    compose(Tabs_stories_exports, "WithDisabled")
  );
  var Vertical2 = (
    /* Vertical */
    compose(Tabs_stories_exports, "Vertical")
  );
  return __toCommonJS(Tabs_exports);
})();
