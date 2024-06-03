(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/login/login"],{

/***/ 40:
/*!***************************************************************************!*\
  !*** D:/project/vue/展汇通PDA（手机版）/main.js?{"page":"pages%2Flogin%2Flogin"} ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _login = _interopRequireDefault(__webpack_require__(/*! ./pages/login/login.vue */ 41));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_login.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 41:
/*!********************************************************!*\
  !*** D:/project/vue/展汇通PDA（手机版）/pages/login/login.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=b237504c& */ 42);
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ 44);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&lang=css& */ 47);
/* harmony import */ var _E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 34);

var renderjs





/* normalize component */

var component = Object(_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/login/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 42:
/*!***************************************************************************************!*\
  !*** D:/project/vue/展汇通PDA（手机版）/pages/login/login.vue?vue&type=template&id=b237504c& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=template&id=b237504c& */ 43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 43:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/project/vue/展汇通PDA（手机版）/pages/login/login.vue?vue&type=template&id=b237504c& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 44:
/*!*********************************************************************************!*\
  !*** D:/project/vue/展汇通PDA（手机版）/pages/login/login.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=script&lang=js& */ 45);
/* harmony import */ var _E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 45:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/project/vue/展汇通PDA（手机版）/pages/login/login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _sqlite = _interopRequireDefault(__webpack_require__(/*! @/common/sqlite.js */ 46));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      form: {
        "phoneNum": "",
        "staffName": ""
      },
      scanInfo: null,
      //扫码结果为空
      lianxu: false,
      invTime: "1000",
      isLixian: 1,
      //1是在线2是离线
      isShowInfo: false,
      //扫码记录

      time: "",
      saomare: ""
    };
  },
  onLoad: function onLoad() {
    console.log("刚开始架子啊");
    var form_login = uni.getStorageSync("form_login");
    if (form_login) {
      this.form = form_login;
    }
    var scanInfo = uni.getStorageSync("exhInfo");
    if (scanInfo) {
      this.scanInfo = scanInfo;
    }
    this.openSQL();
  },
  onShow: function onShow() {},
  onUnload: function onUnload() {
    // this.closeSQL();//关闭数据库
  },
  methods: {
    saomaClick: function saomaClick() {
      var _this = this;
      uni.scanCode({
        onlyFromCamera: true,
        success: function success(res) {
          console.log("扫码内容", res);
          var scanInfo = res.result;
          if (scanInfo.indexOf("~") >= 0) {
            scanInfo = scanInfo.split("~");
            _this.scanInfo = scanInfo;
            // 存储扫码信息
            uni.setStorageSync("exhInfo", scanInfo);
          } else {
            _this.$tools.showToast("二维码不正确");
          }
        }
      });
    },
    guanliyuanClick: function guanliyuanClick() {
      console.log("管理员");
      uni.navigateTo({
        url: "/pages/administrators/administrators",
        complete: function complete(res) {
          console.log("阿萨德", res);
        }
      });
    },
    toUploadPage: function toUploadPage() {
      uni.navigateTo({
        url: "/pages/uploadNoLine/uploadNoLine"
      });
    },
    toGemhxom: function toGemhxom() {
      uni.navigateTo({
        url: "/pages/gengxin/gengxin"
      });
    },
    isShowInfoClick: function isShowInfoClick() {
      this.isShowInfo = !this.isShowInfo;
    },
    // 业绩
    toYeji: function toYeji(type) {
      uni.navigateTo({
        url: "/pages/tongjiNum/tongjiNum?type=" + type
      });
    },
    lixianClick: function lixianClick() {
      this.isLixian = this.isLixian == 1 ? 2 : 1;
    },
    toSqlite: function toSqlite() {
      uni.navigateTo({
        url: "/pages/sqlLite/sqlLite",
        complete: function complete(res) {
          console.log("跳转结果", res);
        }
      });
    },
    // 兼职扫码人员登录下面的弃用了 
    isLogin2: function isLogin2() {
      console.log("asdas", this.form);
      if (!this.scanInfo) {
        this.$tools.showToast("请先扫展会二维码");
        return false;
      }
      if (this.form.staffName == "") {
        this.$tools.showToast("请输入用户名");
        return false;
      }
      if (this.form.phoneNum == "") {
        this.$tools.showToast("请输入手机号");
        return false;
      }
      if (!this.$tools.isPhoneNumber(this.form.phoneNum)) {
        this.$tools.showToast("请输入正确的手机号");
        return false;
      }
      return true;
    },
    loginstaffpda: function loginstaffpda() {
      var _this2 = this;
      if (!this.isLogin2()) {
        return false;
      }
      var data = this.form;
      uni.setStorageSync("form_login", data);
      uni.setStorageSync("isLixian", this.isLixian);
      this.selCountNUm(); //查询当天总数量
      if (this.isLixian == 2) {
        uni.setStorageSync("userInfo", data);
        setTimeout(function (res) {
          uni.reLaunch({
            url: "/pages/sanCode/sanCode"
          });
        }, 200);
        return false;
      }
      this.$axios.axios('post', this.$paths.loginstaffpda, data).then(function (res) {
        console.log("登录结果", res, data);
        if (res.code == 200) {
          data.userId = res.data;
          uni.setStorageSync("userInfo", data);
          setTimeout(function (res) {
            uni.reLaunch({
              url: "/pages/sanCode/sanCode"
            });
          }, 200);
        } else {
          _this2.$tools.showToast(res.msg);
        }
      }).catch(function (err) {});
    },
    // 打开数据库
    openSQL: function openSQL() {
      var _this3 = this;
      // 这个是查询有没有打开数据库
      var open = _sqlite.default.isOpen();
      console.log("数据库状态", open ? "开启" : "关闭");
      if (!open) {
        _sqlite.default.openSqlite().then(function (res) {
          console.log("数据库已打开");
          _this3.createTable();
        }).catch(function (error) {
          console.log("数据库开启失败");
        });
      } else {
        this.createTable();
      }
    },
    // 关闭数据库
    closeSQL: function closeSQL() {
      // 这个是查询有没有打开数据库
      var open = _sqlite.default.isOpen();
      if (open) {
        _sqlite.default.closeSqlite().then(function (res) {
          console.log("数据库已关闭");
        }).catch(function (error) {
          console.log("数据库关闭失败");
        });
      }
    },
    // 删除表
    dropTable: function dropTable(tableName) {
      _sqlite.default.dropTable(tableName).then(function (res) {
        console.log("删除" + tableName + "表成功");
      }).catch(function (error) {
        console.log("删除" + tableName + "表失败");
      });
    },
    // 创建表
    createTable: function createTable() {
      var _this4 = this;
      var open = _sqlite.default.isOpen();
      if (open) {
        var sql = '"id" INTEGER PRIMARY KEY AUTOINCREMENT,"loginName" text,"loginPhone" text,"exhId" text,"activityId" text,"doorId" text,"unionid" text,"userId" text,"type" text,"isLine" text,"isUpload" text,"createTime" text';
        // 创建表 DB.(表名, 表的列)
        _sqlite.default.createTable("scan_info", sql).then(function (res) {
          console.log("创建scan_info表成功", res);
        }).catch(function (error) {
          console.log("创建表失败");
          _this4.$tools.showToast("创建scan_info表失败", error);
        });
        var sql1 = '"id" INTEGER PRIMARY KEY AUTOINCREMENT,"exhId" text,"exhName" text,"doorId" text,"loginName" text,"loginPhone" text,"dayTime" text, "count" text ,"createTime" text';
        _sqlite.default.createTable("statistics_num", sql1).then(function (res) {
          console.log("创建statistics_num表成功", res);
        }).catch(function (error) {
          console.log("创建表失败", error);
          _this4.$tools.showToast("创建statistics_num表失败", error);
        });
      } else {
        console.log("数据库未打开");
        this.$tools.showToast("数据库未打开");
      }
    },
    //查询扫码统计数据
    selCountNUm: function selCountNUm() {
      var _this5 = this;
      var time = this.formatDate(new Date().getTime());
      console.log("查询时间", time);
      this.time = time;
      var scanInfo = this.scanInfo;
      _sqlite.default.selectTableData("statistics_num", 'exhId', scanInfo[1], 'doorId', scanInfo[2], 'loginPhone', this.form.phoneNum, 'dayTime', time).then(function (res) {
        console.log("扫码统计结果", res);
        _this5.saomare = JSON.stringify(res);
        if (res.length <= 0) {
          _this5.addStatisticsData(); //添加一条记录
        }
      }).catch(function (error) {
        console.log("查询扫码统计数据失败", error);
        _this5.$tools.showToast("查询扫码统计数据失败");
      });
    },
    // 插入统计数据
    addStatisticsData: function addStatisticsData() {
      var time = this.formatDate(new Date().getTime());
      var obg = {
        exhId: this.scanInfo[1],
        exhName: this.scanInfo[0],
        doorId: this.scanInfo[2],
        loginName: this.form.staffName,
        loginPhone: this.form.phoneNum,
        dayTime: time,
        count: "0",
        createTime: this.formatDate(new Date().getTime())
      };
      var sql = "'".concat(obg.exhId, "','").concat(obg.exhName, "','").concat(obg.doorId, "','").concat(obg.loginName, "','").concat(obg.loginPhone, "','").concat(obg.dayTime, "','").concat(obg.count, "','").concat(obg.createTime, "'");
      var condition = "'exhId','exhName','doorId','loginName','loginPhone','dayTime','count','createTime'";
      // 新增 DB.insertTableData(表名, 对应表头列的数据)
      _sqlite.default.insertTableData("statistics_num", sql, condition).then(function (res) {
        console.log("新增数据成功", res);
      }).catch(function (error) {
        console.log("失败", error);
      });
    },
    formatDate: function formatDate(data) {
      var now = new Date(data);
      var year = now.getFullYear(); //取得4位数的年份
      var month = now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
      var date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
      var hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
      var minute = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
      var second = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
      return year + "-" + month + "-" + date;
    },
    // 下面是后台管理人员的逻辑
    isLogin: function isLogin() {
      if (this.form.username == "") {
        this.$tools.showToast("请输入用户名");
        return false;
      }
      if (this.form.password == "") {
        this.$tools.showToast("请输入密码");
        return false;
      }
      return true;
    },
    toLogin: function toLogin() {
      var _this6 = this;
      if (!this.isLogin()) {
        return false;
      }
      var data = this.form;
      uni.setStorageSync("form_login", data);
      this.$axios.axios('post', this.$paths.loginpdaapi, data).then(function (res) {
        if (res.code == 200) {
          uni.setStorageSync("userInfo", res);
          _this6.$tools.showToast("登录成功");
          setTimeout(function (res) {
            uni.redirectTo({
              url: "/pages/sanCode/sanCode"
            });
          }, 1000);
        } else {
          _this6.$tools.showToast(res.msg);
        }
      }).catch(function (err) {});
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 47:
/*!*****************************************************************************************!*\
  !*** D:/project/vue/展汇通PDA（手机版）/pages/login/login.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=style&index=0&lang=css& */ 48);
/* harmony import */ var _E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_yangfei_ide_HBuilderX_3_5_2_2_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 48:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/project/vue/展汇通PDA（手机版）/pages/login/login.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[40,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map