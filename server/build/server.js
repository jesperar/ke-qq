/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../web/src/App.css":
/*!**************************!*\
  !*** ../web/src/App.css ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _server_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../server/node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _server_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../server/node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _server_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _server_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_server_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".App {\\n  text-align: center;\\n}\\n\\n.App-logo {\\n  height: 40vmin;\\n  pointer-events: none;\\n}\\n\\n@media (prefers-reduced-motion: no-preference) {\\n  .App-logo {\\n    animation: App-logo-spin infinite 20s linear;\\n  }\\n}\\n\\n.App-header {\\n  background-color: #282c34;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: calc(10px + 2vmin);\\n  color: white;\\n}\\n\\n.App-link {\\n  color: #61dafb;\\n}\\n\\n@keyframes App-logo-spin {\\n  from {\\n    transform: rotate(0deg);\\n  }\\n  to {\\n    transform: rotate(360deg);\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://server/../web/src/App.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://server/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://server/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/config/app.ts":
/*!***************************!*\
  !*** ./src/config/app.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"serverPort\": () => (/* binding */ serverPort),\n/* harmony export */   \"staticRoot\": () => (/* binding */ staticRoot)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n\nconst staticRoot = path__WEBPACK_IMPORTED_MODULE_0___default().resolve(__dirname, '../build');\nconst serverPort = 8080;\n\n\n//# sourceURL=webpack://server/./src/config/app.ts?");

/***/ }),

/***/ "./src/libs/server.ts":
/*!****************************!*\
  !*** ./src/libs/server.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/app */ \"./src/config/app.ts\");\n\n\nconst app = new (koa__WEBPACK_IMPORTED_MODULE_0___default())();\napp.listen(_config_app__WEBPACK_IMPORTED_MODULE_1__.serverPort, () => {\n    console.log('============== server started');\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n\n//# sourceURL=webpack://server/./src/libs/server.ts?");

/***/ }),

/***/ "./src/routers/api/api.ts":
/*!********************************!*\
  !*** ./src/routers/api/api.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @koa/router */ \"@koa/router\");\n/* harmony import */ var _koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_koa_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/user */ \"./src/routers/api/user/user.ts\");\n/* harmony import */ var _course_course__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course/course */ \"./src/routers/api/course/course.ts\");\n\n\n\nconst router = new (_koa_router__WEBPACK_IMPORTED_MODULE_0___default())();\nrouter.prefix('/api');\nrouter.use(_user_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nrouter.use(_course_course__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router.routes());\n\n\n//# sourceURL=webpack://server/./src/routers/api/api.ts?");

/***/ }),

/***/ "./src/routers/api/course/course.ts":
/*!******************************************!*\
  !*** ./src/routers/api/course/course.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @koa/router */ \"@koa/router\");\n/* harmony import */ var _koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_koa_router__WEBPACK_IMPORTED_MODULE_0__);\n\nlet router = new (_koa_router__WEBPACK_IMPORTED_MODULE_0___default())();\nrouter.prefix('/course');\nrouter.get('/', async (ctx) => {\n    ctx.body = 'course';\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router.routes());\n\n\n//# sourceURL=webpack://server/./src/routers/api/course/course.ts?");

/***/ }),

/***/ "./src/routers/api/user/user.ts":
/*!**************************************!*\
  !*** ./src/routers/api/user/user.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @koa/router */ \"@koa/router\");\n/* harmony import */ var _koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_koa_router__WEBPACK_IMPORTED_MODULE_0__);\n\nlet router = new (_koa_router__WEBPACK_IMPORTED_MODULE_0___default())();\nrouter.prefix('/user');\nrouter.get('/', async (ctx) => {\n    ctx.body = 'users';\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router.routes());\n\n\n//# sourceURL=webpack://server/./src/routers/api/user/user.ts?");

/***/ }),

/***/ "./src/routers/render/render.tsx":
/*!***************************************!*\
  !*** ./src/routers/render/render.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @koa/router */ \"@koa/router\");\n/* harmony import */ var _koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_koa_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/app */ \"./src/config/app.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/App */ \"../web/src/App.tsx\");\n\n\n\n\n\n\n\nconst router = new (_koa_router__WEBPACK_IMPORTED_MODULE_0___default())();\nconst index = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_2___default().resolve(_config_app__WEBPACK_IMPORTED_MODULE_3__.staticRoot, 'index.html')).toString();\nrouter.get('/', async (ctx) => {\n    const str = react_dom_server__WEBPACK_IMPORTED_MODULE_5___default().renderToString(react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_App__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null));\n    ctx.body = index.replace('<div id=\"root\"></div>', `<div id=\"root\">${str}</div>`);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router.routes());\n\n\n//# sourceURL=webpack://server/./src/routers/render/render.tsx?");

/***/ }),

/***/ "./src/routers/routers.ts":
/*!********************************!*\
  !*** ./src/routers/routers.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @koa/router */ \"@koa/router\");\n/* harmony import */ var _koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_koa_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/api */ \"./src/routers/api/api.ts\");\n/* harmony import */ var _render_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render/render */ \"./src/routers/render/render.tsx\");\n\n\n\nlet router = new (_koa_router__WEBPACK_IMPORTED_MODULE_0___default())();\nrouter.use(_api_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nrouter.use(_render_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router.routes());\n\n\n//# sourceURL=webpack://server/./src/routers/routers.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _libs_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/server */ \"./src/libs/server.ts\");\n/* harmony import */ var _routers_routers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routers/routers */ \"./src/routers/routers.ts\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/app */ \"./src/config/app.ts\");\n\n\n\n\n_libs_server__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_routers_routers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n_libs_server__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(koa_static__WEBPACK_IMPORTED_MODULE_2___default()(_config_app__WEBPACK_IMPORTED_MODULE_3__.staticRoot));\n// import { getAllBanner } from './models/banner';\n// app.use(async ctx => {\n//   let banners = await getAllBanner();\n//   ctx.body = banners;\n// });\n\n\n//# sourceURL=webpack://server/./src/server.ts?");

/***/ }),

/***/ "../web/src/App.tsx":
/*!**************************!*\
  !*** ../web/src/App.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"../web/node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ \"../web/src/App.css\");\n\n\n\nfunction App() {\n    axios__WEBPACK_IMPORTED_MODULE_1___default()('/api/user').then(res => {\n        console.log(res);\n    });\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: \"App\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"aaaaaaa\")));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n\n//# sourceURL=webpack://server/../web/src/App.tsx?");

/***/ }),

/***/ "../web/node_modules/asynckit/index.js":
/*!*********************************************!*\
  !*** ../web/node_modules/asynckit/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports =\n{\n  parallel      : __webpack_require__(/*! ./parallel.js */ \"../web/node_modules/asynckit/parallel.js\"),\n  serial        : __webpack_require__(/*! ./serial.js */ \"../web/node_modules/asynckit/serial.js\"),\n  serialOrdered : __webpack_require__(/*! ./serialOrdered.js */ \"../web/node_modules/asynckit/serialOrdered.js\")\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/asynckit/index.js?");

/***/ }),

/***/ "../web/node_modules/asynckit/lib/abort.js":
/*!*************************************************!*\
  !*** ../web/node_modules/asynckit/lib/abort.js ***!
  \*************************************************/
/***/ ((module) => {

eval("// API\nmodule.exports = abort;\n\n/**\n * Aborts leftover active jobs\n *\n * @param {object} state - current state object\n */\nfunction abort(state)\n{\n  Object.keys(state.jobs).forEach(clean.bind(state));\n\n  // reset leftover jobs\n  state.jobs = {};\n}\n\n/**\n * Cleans up leftover job by invoking abort function for the provided job id\n *\n * @this  state\n * @param {string|number} key - job id to abort\n */\nfunction clean(key)\n{\n  if (typeof this.jobs[key] == 'function')\n  {\n    this.jobs[key]();\n  }\n}\n\n\n//# sourceURL=webpack://server/../web/node_modules/asynckit/lib/abort.js?");

/***/ }),

/***/ "../web/node_modules/asynckit/lib/async.js":
/*!*************************************************!*\
  !*** ../web/node_modules/asynckit/lib/async.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var defer = __webpack_require__(/*! ./defer.js */ \"../web/node_modules/asynckit/lib/defer.js\");\n\n// API\nmodule.exports = async;\n\n/**\n * Runs provided callback asynchronously\n * even if callback itself is not\n *\n * @param   {function} callback - callback to invoke\n * @returns {function} - augmented callback\n */\nfunction async(callback)\n{\n  var isAsync = false;\n\n  // check if async happened\n  defer(function() { isAsync = true; });\n\n  return function async_callback(err, result)\n  {\n    if (isAsync)\n    {\n      callback(err, result);\n    }\n    else\n    {\n      defer(function nextTick_callback()\n      {\n        callback(err, result);\n      });\n    }\n  };\n}\n\n\n//# sourceURL=webpack://server/../web/node_modules/asynckit/lib/async.js?");

/***/ }),

/***/ "../web/node_modules/asynckit/lib/defer.js":
/*!*************************************************!*\
  !*** ../web/node_modules/asynckit/lib/defer.js ***!
  \*************************************************/
/***/ ((module) => {

eval("module.exports = defer;\n\n/**\n * Runs provided function on next iteration of the event loop\n *\n * @param {function} fn - function to run\n */\nfunction defer(fn)\n{\n  var nextTick = typeof setImmediate == 'function'\n    ? setImmediate\n    : (\n      typeof process == 'object' && typeof process.nextTick == 'function'\n      ? process.nextTick\n      : null\n    );\n\n  if (nextTick)\n  {\n    nextTick(fn);\n  }\n  else\n  {\n    setTimeout(fn, 0);\n  }\n}\n\n\n//# sourceURL=webpack://server/../web/node_modules/asynckit/lib/defer.js?");

/***/ }),

/***/ "../web/node_modules/asynckit/lib/iterate.js":
/*!***************************************************!*\
  !*** ../web/node_modules/asynckit/lib/iterate.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var async = __webpack_require__(/*! ./async.js */ \"../web/node_modules/asynckit/lib/async.js\")\n  , abort = __webpack_require__(/*! ./abort.js */ \"../web/node_modules/asynckit/lib/abort.js\")\n  ;\n\n// API\nmodule.exports = iterate;\n\n/**\n * Iterates over each job object\n *\n * @param {array|object} list - array or object (named list) to iterate over\n * @param {function} iterator - iterator to run\n * @param {object} state - current job status\n * @param {function} callback - invoked when all elements processed\n */\nfunction iterate(list, iterator, state, callback)\n{\n  // store current index\n  var key = state['keyedList'] ? state['keyedList'][state.index] : state.index;\n\n  state.jobs[key] = runJob(iterator, key, list[key], function(error, output)\n  {\n    // don't repeat yourself\n    // skip secondary callbacks\n    if (!(key in state.jobs))\n    {\n      return;\n    }\n\n    // clean up jobs\n    delete state.jobs[key];\n\n    if (error)\n    {\n      // don't process rest of the results\n      // stop still active jobs\n      // and reset the list\n      abort(state);\n    }\n    else\n    {\n      state.results[key] = output;\n    }\n\n    // return salvaged results\n    callback(error, state.results);\n  });\n}\n\n/**\n * Runs iterator over provided job element\n *\n * @param   {function} iterator - iterator to invoke\n * @param   {string|number} key - key/index of the element in the list of jobs\n * @param   {mixed} item - job description\n * @param   {function} callback - invoked after iterator is done with the job\n * @returns {function|mixed} - job abort function or something else\n */\nfunction runJob(iterator, key, item, callback)\n{\n  var aborter;\n\n  // allow shortcut if iterator expects only two arguments\n  if (iterator.length == 2)\n  {\n    aborter = iterator(item, async(callback));\n  }\n  // otherwise go with full three arguments\n  else\n  {\n    aborter = iterator(item, key, async(callback));\n  }\n\n  return aborter;\n}\n\n\n//# sourceURL=webpack://server/../web/node_modules/asynckit/lib/iterate.js?");

/***/ }),

/***/ "../web/node_modules/asynckit/lib/state.js":
/*!*************************************************!*\
  !*** ../web/node_modules/asynckit/lib/state.js ***!
  \*************************************************/
/***/ ((module) => {

eval("// API\nmodule.exports = state;\n\n/**\n * Creates initial state object\n * for iteration over list\n *\n * @param   {array|object} list - list to iterate over\n * @param   {function|null} sortMethod - function to use for keys sort,\n *                                     or `null` to keep them as is\n * @returns {object} - initial state object\n */\nfunction state(list, sortMethod)\n{\n  var isNamedList = !Array.isArray(list)\n    , initState =\n    {\n      index    : 0,\n      keyedList: isNamedList || sortMethod ? Object.keys(list) : null,\n      jobs     : {},\n      results  : isNamedList ? {} : [],\n      size     : isNamedList ? Object.keys(list).length : list.length\n    }\n    ;\n\n  if (sortMethod)\n  {\n    // sort array keys based on it's values\n    // sort object's keys just on own merit\n    initState.keyedList.sort(isNamedList ? sortMethod : function(a, b)\n    {\n      return sortMethod(list[a], list[b]);\n    });\n  }\n\n  return initState;\n}\n\n\n//# sourceURL=webpack://server/../web/node_modules/asynckit/lib/state.js?");

/***/ }),

/***/ "../web/node_modules/asynckit/lib/terminator.js":
/*!******************************************************!*\
  !*** ../web/node_modules/asynckit/lib/terminator.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var abort = __webpack_require__(/*! ./abort.js */ \"../web/node_modules/asynckit/lib/abort.js\")\n  , async = __webpack_require__(/*! ./async.js */ \"../web/node_modules/asynckit/lib/async.js\")\n  ;\n\n// API\nmodule.exports = terminator;\n\n/**\n * Terminates jobs in the attached state context\n *\n * @this  AsyncKitState#\n * @param {function} callback - final callback to invoke after termination\n */\nfunction terminator(callback)\n{\n  if (!Object.keys(this.jobs).length)\n  {\n    return;\n  }\n\n  // fast forward iteration index\n  this.index = this.size;\n\n  // abort jobs\n  abort(this);\n\n  // send back results we have so far\n  async(callback)(null, this.results);\n}\n\n\n//# sourceURL=webpack://server/../web/node_modules/asynckit/lib/terminator.js?");

/***/ }),

/***/ "../web/node_modules/asynckit/parallel.js":
/*!************************************************!*\
  !*** ../web/node_modules/asynckit/parallel.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var iterate    = __webpack_require__(/*! ./lib/iterate.js */ \"../web/node_modules/asynckit/lib/iterate.js\")\n  , initState  = __webpack_require__(/*! ./lib/state.js */ \"../web/node_modules/asynckit/lib/state.js\")\n  , terminator = __webpack_require__(/*! ./lib/terminator.js */ \"../web/node_modules/asynckit/lib/terminator.js\")\n  ;\n\n// Public API\nmodule.exports = parallel;\n\n/**\n * Runs iterator over provided array elements in parallel\n *\n * @param   {array|object} list - array or object (named list) to iterate over\n * @param   {function} iterator - iterator to run\n * @param   {function} callback - invoked when all elements processed\n * @returns {function} - jobs terminator\n */\nfunction parallel(list, iterator, callback)\n{\n  var state = initState(list);\n\n  while (state.index < (state['keyedList'] || list).length)\n  {\n    iterate(list, iterator, state, function(error, result)\n    {\n      if (error)\n      {\n        callback(error, result);\n        return;\n      }\n\n      // looks like it's the last one\n      if (Object.keys(state.jobs).length === 0)\n      {\n        callback(null, state.results);\n        return;\n      }\n    });\n\n    state.index++;\n  }\n\n  return terminator.bind(state, callback);\n}\n\n\n//# sourceURL=webpack://server/../web/node_modules/asynckit/parallel.js?");

/***/ }),

/***/ "../web/node_modules/asynckit/serial.js":
/*!**********************************************!*\
  !*** ../web/node_modules/asynckit/serial.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var serialOrdered = __webpack_require__(/*! ./serialOrdered.js */ \"../web/node_modules/asynckit/serialOrdered.js\");\n\n// Public API\nmodule.exports = serial;\n\n/**\n * Runs iterator over provided array elements in series\n *\n * @param   {array|object} list - array or object (named list) to iterate over\n * @param   {function} iterator - iterator to run\n * @param   {function} callback - invoked when all elements processed\n * @returns {function} - jobs terminator\n */\nfunction serial(list, iterator, callback)\n{\n  return serialOrdered(list, iterator, null, callback);\n}\n\n\n//# sourceURL=webpack://server/../web/node_modules/asynckit/serial.js?");

/***/ }),

/***/ "../web/node_modules/asynckit/serialOrdered.js":
/*!*****************************************************!*\
  !*** ../web/node_modules/asynckit/serialOrdered.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var iterate    = __webpack_require__(/*! ./lib/iterate.js */ \"../web/node_modules/asynckit/lib/iterate.js\")\n  , initState  = __webpack_require__(/*! ./lib/state.js */ \"../web/node_modules/asynckit/lib/state.js\")\n  , terminator = __webpack_require__(/*! ./lib/terminator.js */ \"../web/node_modules/asynckit/lib/terminator.js\")\n  ;\n\n// Public API\nmodule.exports = serialOrdered;\n// sorting helpers\nmodule.exports.ascending  = ascending;\nmodule.exports.descending = descending;\n\n/**\n * Runs iterator over provided sorted array elements in series\n *\n * @param   {array|object} list - array or object (named list) to iterate over\n * @param   {function} iterator - iterator to run\n * @param   {function} sortMethod - custom sort function\n * @param   {function} callback - invoked when all elements processed\n * @returns {function} - jobs terminator\n */\nfunction serialOrdered(list, iterator, sortMethod, callback)\n{\n  var state = initState(list, sortMethod);\n\n  iterate(list, iterator, state, function iteratorHandler(error, result)\n  {\n    if (error)\n    {\n      callback(error, result);\n      return;\n    }\n\n    state.index++;\n\n    // are we there yet?\n    if (state.index < (state['keyedList'] || list).length)\n    {\n      iterate(list, iterator, state, iteratorHandler);\n      return;\n    }\n\n    // done here\n    callback(null, state.results);\n  });\n\n  return terminator.bind(state, callback);\n}\n\n/*\n * -- Sort methods\n */\n\n/**\n * sort helper to sort array elements in ascending order\n *\n * @param   {mixed} a - an item to compare\n * @param   {mixed} b - an item to compare\n * @returns {number} - comparison result\n */\nfunction ascending(a, b)\n{\n  return a < b ? -1 : a > b ? 1 : 0;\n}\n\n/**\n * sort helper to sort array elements in descending order\n *\n * @param   {mixed} a - an item to compare\n * @param   {mixed} b - an item to compare\n * @returns {number} - comparison result\n */\nfunction descending(a, b)\n{\n  return -1 * ascending(a, b);\n}\n\n\n//# sourceURL=webpack://server/../web/node_modules/asynckit/serialOrdered.js?");

/***/ }),

/***/ "../web/node_modules/axios/index.js":
/*!******************************************!*\
  !*** ../web/node_modules/axios/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./lib/axios */ \"../web/node_modules/axios/lib/axios.js\");\n\n//# sourceURL=webpack://server/../web/node_modules/axios/index.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/adapters/http.js":
/*!******************************************************!*\
  !*** ../web/node_modules/axios/lib/adapters/http.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"../web/node_modules/axios/lib/utils.js\");\nvar settle = __webpack_require__(/*! ./../core/settle */ \"../web/node_modules/axios/lib/core/settle.js\");\nvar buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ \"../web/node_modules/axios/lib/core/buildFullPath.js\");\nvar buildURL = __webpack_require__(/*! ./../helpers/buildURL */ \"../web/node_modules/axios/lib/helpers/buildURL.js\");\nvar http = __webpack_require__(/*! http */ \"http\");\nvar https = __webpack_require__(/*! https */ \"https\");\nvar httpFollow = (__webpack_require__(/*! follow-redirects */ \"../web/node_modules/follow-redirects/index.js\").http);\nvar httpsFollow = (__webpack_require__(/*! follow-redirects */ \"../web/node_modules/follow-redirects/index.js\").https);\nvar url = __webpack_require__(/*! url */ \"url\");\nvar zlib = __webpack_require__(/*! zlib */ \"zlib\");\nvar VERSION = (__webpack_require__(/*! ./../env/data */ \"../web/node_modules/axios/lib/env/data.js\").version);\nvar transitionalDefaults = __webpack_require__(/*! ../defaults/transitional */ \"../web/node_modules/axios/lib/defaults/transitional.js\");\nvar AxiosError = __webpack_require__(/*! ../core/AxiosError */ \"../web/node_modules/axios/lib/core/AxiosError.js\");\nvar CanceledError = __webpack_require__(/*! ../cancel/CanceledError */ \"../web/node_modules/axios/lib/cancel/CanceledError.js\");\n\nvar isHttps = /https:?/;\n\nvar supportedProtocols = [ 'http:', 'https:', 'file:' ];\n\n/**\n *\n * @param {http.ClientRequestArgs} options\n * @param {AxiosProxyConfig} proxy\n * @param {string} location\n */\nfunction setProxy(options, proxy, location) {\n  options.hostname = proxy.host;\n  options.host = proxy.host;\n  options.port = proxy.port;\n  options.path = location;\n\n  // Basic proxy authorization\n  if (proxy.auth) {\n    var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');\n    options.headers['Proxy-Authorization'] = 'Basic ' + base64;\n  }\n\n  // If a proxy is used, any redirects must also pass through the proxy\n  options.beforeRedirect = function beforeRedirect(redirection) {\n    redirection.headers.host = redirection.host;\n    setProxy(redirection, proxy, redirection.href);\n  };\n}\n\n/*eslint consistent-return:0*/\nmodule.exports = function httpAdapter(config) {\n  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {\n    var onCanceled;\n    function done() {\n      if (config.cancelToken) {\n        config.cancelToken.unsubscribe(onCanceled);\n      }\n\n      if (config.signal) {\n        config.signal.removeEventListener('abort', onCanceled);\n      }\n    }\n    var resolve = function resolve(value) {\n      done();\n      resolvePromise(value);\n    };\n    var rejected = false;\n    var reject = function reject(value) {\n      done();\n      rejected = true;\n      rejectPromise(value);\n    };\n    var data = config.data;\n    var headers = config.headers;\n    var headerNames = {};\n\n    Object.keys(headers).forEach(function storeLowerName(name) {\n      headerNames[name.toLowerCase()] = name;\n    });\n\n    // Set User-Agent (required by some servers)\n    // See https://github.com/axios/axios/issues/69\n    if ('user-agent' in headerNames) {\n      // User-Agent is specified; handle case where no UA header is desired\n      if (!headers[headerNames['user-agent']]) {\n        delete headers[headerNames['user-agent']];\n      }\n      // Otherwise, use specified value\n    } else {\n      // Only set header if it hasn't been set in config\n      headers['User-Agent'] = 'axios/' + VERSION;\n    }\n\n    // support for https://www.npmjs.com/package/form-data api\n    if (utils.isFormData(data) && utils.isFunction(data.getHeaders)) {\n      Object.assign(headers, data.getHeaders());\n    } else if (data && !utils.isStream(data)) {\n      if (Buffer.isBuffer(data)) {\n        // Nothing to do...\n      } else if (utils.isArrayBuffer(data)) {\n        data = Buffer.from(new Uint8Array(data));\n      } else if (utils.isString(data)) {\n        data = Buffer.from(data, 'utf-8');\n      } else {\n        return reject(new AxiosError(\n          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',\n          AxiosError.ERR_BAD_REQUEST,\n          config\n        ));\n      }\n\n      if (config.maxBodyLength > -1 && data.length > config.maxBodyLength) {\n        return reject(new AxiosError(\n          'Request body larger than maxBodyLength limit',\n          AxiosError.ERR_BAD_REQUEST,\n          config\n        ));\n      }\n\n      // Add Content-Length header if data exists\n      if (!headerNames['content-length']) {\n        headers['Content-Length'] = data.length;\n      }\n    }\n\n    // HTTP basic authentication\n    var auth = undefined;\n    if (config.auth) {\n      var username = config.auth.username || '';\n      var password = config.auth.password || '';\n      auth = username + ':' + password;\n    }\n\n    // Parse url\n    var fullPath = buildFullPath(config.baseURL, config.url);\n    var parsed = url.parse(fullPath);\n    var protocol = parsed.protocol || supportedProtocols[0];\n\n    if (supportedProtocols.indexOf(protocol) === -1) {\n      return reject(new AxiosError(\n        'Unsupported protocol ' + protocol,\n        AxiosError.ERR_BAD_REQUEST,\n        config\n      ));\n    }\n\n    if (!auth && parsed.auth) {\n      var urlAuth = parsed.auth.split(':');\n      var urlUsername = urlAuth[0] || '';\n      var urlPassword = urlAuth[1] || '';\n      auth = urlUsername + ':' + urlPassword;\n    }\n\n    if (auth && headerNames.authorization) {\n      delete headers[headerNames.authorization];\n    }\n\n    var isHttpsRequest = isHttps.test(protocol);\n    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;\n\n    try {\n      buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\\?/, '');\n    } catch (err) {\n      var customErr = new Error(err.message);\n      customErr.config = config;\n      customErr.url = config.url;\n      customErr.exists = true;\n      reject(customErr);\n    }\n\n    var options = {\n      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\\?/, ''),\n      method: config.method.toUpperCase(),\n      headers: headers,\n      agent: agent,\n      agents: { http: config.httpAgent, https: config.httpsAgent },\n      auth: auth\n    };\n\n    if (config.socketPath) {\n      options.socketPath = config.socketPath;\n    } else {\n      options.hostname = parsed.hostname;\n      options.port = parsed.port;\n    }\n\n    var proxy = config.proxy;\n    if (!proxy && proxy !== false) {\n      var proxyEnv = protocol.slice(0, -1) + '_proxy';\n      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];\n      if (proxyUrl) {\n        var parsedProxyUrl = url.parse(proxyUrl);\n        var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;\n        var shouldProxy = true;\n\n        if (noProxyEnv) {\n          var noProxy = noProxyEnv.split(',').map(function trim(s) {\n            return s.trim();\n          });\n\n          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {\n            if (!proxyElement) {\n              return false;\n            }\n            if (proxyElement === '*') {\n              return true;\n            }\n            if (proxyElement[0] === '.' &&\n                parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {\n              return true;\n            }\n\n            return parsed.hostname === proxyElement;\n          });\n        }\n\n        if (shouldProxy) {\n          proxy = {\n            host: parsedProxyUrl.hostname,\n            port: parsedProxyUrl.port,\n            protocol: parsedProxyUrl.protocol\n          };\n\n          if (parsedProxyUrl.auth) {\n            var proxyUrlAuth = parsedProxyUrl.auth.split(':');\n            proxy.auth = {\n              username: proxyUrlAuth[0],\n              password: proxyUrlAuth[1]\n            };\n          }\n        }\n      }\n    }\n\n    if (proxy) {\n      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');\n      setProxy(options, proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);\n    }\n\n    var transport;\n    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);\n    if (config.transport) {\n      transport = config.transport;\n    } else if (config.maxRedirects === 0) {\n      transport = isHttpsProxy ? https : http;\n    } else {\n      if (config.maxRedirects) {\n        options.maxRedirects = config.maxRedirects;\n      }\n      if (config.beforeRedirect) {\n        options.beforeRedirect = config.beforeRedirect;\n      }\n      transport = isHttpsProxy ? httpsFollow : httpFollow;\n    }\n\n    if (config.maxBodyLength > -1) {\n      options.maxBodyLength = config.maxBodyLength;\n    }\n\n    if (config.insecureHTTPParser) {\n      options.insecureHTTPParser = config.insecureHTTPParser;\n    }\n\n    // Create the request\n    var req = transport.request(options, function handleResponse(res) {\n      if (req.aborted) return;\n\n      // uncompress the response body transparently if required\n      var stream = res;\n\n      // return the last request in case of redirects\n      var lastRequest = res.req || req;\n\n\n      // if no content, is HEAD request or decompress disabled we should not decompress\n      if (res.statusCode !== 204 && lastRequest.method !== 'HEAD' && config.decompress !== false) {\n        switch (res.headers['content-encoding']) {\n        /*eslint default-case:0*/\n        case 'gzip':\n        case 'compress':\n        case 'deflate':\n        // add the unzipper to the body stream processing pipeline\n          stream = stream.pipe(zlib.createUnzip());\n\n          // remove the content-encoding in order to not confuse downstream operations\n          delete res.headers['content-encoding'];\n          break;\n        }\n      }\n\n      var response = {\n        status: res.statusCode,\n        statusText: res.statusMessage,\n        headers: res.headers,\n        config: config,\n        request: lastRequest\n      };\n\n      if (config.responseType === 'stream') {\n        response.data = stream;\n        settle(resolve, reject, response);\n      } else {\n        var responseBuffer = [];\n        var totalResponseBytes = 0;\n        stream.on('data', function handleStreamData(chunk) {\n          responseBuffer.push(chunk);\n          totalResponseBytes += chunk.length;\n\n          // make sure the content length is not over the maxContentLength if specified\n          if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {\n            // stream.destoy() emit aborted event before calling reject() on Node.js v16\n            rejected = true;\n            stream.destroy();\n            reject(new AxiosError('maxContentLength size of ' + config.maxContentLength + ' exceeded',\n              AxiosError.ERR_BAD_RESPONSE, config, lastRequest));\n          }\n        });\n\n        stream.on('aborted', function handlerStreamAborted() {\n          if (rejected) {\n            return;\n          }\n          stream.destroy();\n          reject(new AxiosError(\n            'maxContentLength size of ' + config.maxContentLength + ' exceeded',\n            AxiosError.ERR_BAD_RESPONSE,\n            config,\n            lastRequest\n          ));\n        });\n\n        stream.on('error', function handleStreamError(err) {\n          if (req.aborted) return;\n          reject(AxiosError.from(err, null, config, lastRequest));\n        });\n\n        stream.on('end', function handleStreamEnd() {\n          try {\n            var responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);\n            if (config.responseType !== 'arraybuffer') {\n              responseData = responseData.toString(config.responseEncoding);\n              if (!config.responseEncoding || config.responseEncoding === 'utf8') {\n                responseData = utils.stripBOM(responseData);\n              }\n            }\n            response.data = responseData;\n          } catch (err) {\n            reject(AxiosError.from(err, null, config, response.request, response));\n          }\n          settle(resolve, reject, response);\n        });\n      }\n    });\n\n    // Handle errors\n    req.on('error', function handleRequestError(err) {\n      // @todo remove\n      // if (req.aborted && err.code !== AxiosError.ERR_FR_TOO_MANY_REDIRECTS) return;\n      reject(AxiosError.from(err, null, config, req));\n    });\n\n    // set tcp keep alive to prevent drop connection by peer\n    req.on('socket', function handleRequestSocket(socket) {\n      // default interval of sending ack packet is 1 minute\n      socket.setKeepAlive(true, 1000 * 60);\n    });\n\n    // Handle request timeout\n    if (config.timeout) {\n      // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.\n      var timeout = parseInt(config.timeout, 10);\n\n      if (isNaN(timeout)) {\n        reject(new AxiosError(\n          'error trying to parse `config.timeout` to int',\n          AxiosError.ERR_BAD_OPTION_VALUE,\n          config,\n          req\n        ));\n\n        return;\n      }\n\n      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.\n      // And timer callback will be fired, and abort() will be invoked before connection, then get \"socket hang up\" and code ECONNRESET.\n      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.\n      // And then these socket which be hang up will devoring CPU little by little.\n      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.\n      req.setTimeout(timeout, function handleRequestTimeout() {\n        req.abort();\n        var transitional = config.transitional || transitionalDefaults;\n        reject(new AxiosError(\n          'timeout of ' + timeout + 'ms exceeded',\n          transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,\n          config,\n          req\n        ));\n      });\n    }\n\n    if (config.cancelToken || config.signal) {\n      // Handle cancellation\n      // eslint-disable-next-line func-names\n      onCanceled = function(cancel) {\n        if (req.aborted) return;\n\n        req.abort();\n        reject(!cancel || (cancel && cancel.type) ? new CanceledError() : cancel);\n      };\n\n      config.cancelToken && config.cancelToken.subscribe(onCanceled);\n      if (config.signal) {\n        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);\n      }\n    }\n\n\n    // Send the request\n    if (utils.isStream(data)) {\n      data.on('error', function handleStreamError(err) {\n        reject(AxiosError.from(err, config, null, req));\n      }).pipe(req);\n    } else {\n      req.end(data);\n    }\n  });\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/adapters/http.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/adapters/xhr.js":
/*!*****************************************************!*\
  !*** ../web/node_modules/axios/lib/adapters/xhr.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"../web/node_modules/axios/lib/utils.js\");\nvar settle = __webpack_require__(/*! ./../core/settle */ \"../web/node_modules/axios/lib/core/settle.js\");\nvar cookies = __webpack_require__(/*! ./../helpers/cookies */ \"../web/node_modules/axios/lib/helpers/cookies.js\");\nvar buildURL = __webpack_require__(/*! ./../helpers/buildURL */ \"../web/node_modules/axios/lib/helpers/buildURL.js\");\nvar buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ \"../web/node_modules/axios/lib/core/buildFullPath.js\");\nvar parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ \"../web/node_modules/axios/lib/helpers/parseHeaders.js\");\nvar isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ \"../web/node_modules/axios/lib/helpers/isURLSameOrigin.js\");\nvar transitionalDefaults = __webpack_require__(/*! ../defaults/transitional */ \"../web/node_modules/axios/lib/defaults/transitional.js\");\nvar AxiosError = __webpack_require__(/*! ../core/AxiosError */ \"../web/node_modules/axios/lib/core/AxiosError.js\");\nvar CanceledError = __webpack_require__(/*! ../cancel/CanceledError */ \"../web/node_modules/axios/lib/cancel/CanceledError.js\");\nvar parseProtocol = __webpack_require__(/*! ../helpers/parseProtocol */ \"../web/node_modules/axios/lib/helpers/parseProtocol.js\");\n\nmodule.exports = function xhrAdapter(config) {\n  return new Promise(function dispatchXhrRequest(resolve, reject) {\n    var requestData = config.data;\n    var requestHeaders = config.headers;\n    var responseType = config.responseType;\n    var onCanceled;\n    function done() {\n      if (config.cancelToken) {\n        config.cancelToken.unsubscribe(onCanceled);\n      }\n\n      if (config.signal) {\n        config.signal.removeEventListener('abort', onCanceled);\n      }\n    }\n\n    if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {\n      delete requestHeaders['Content-Type']; // Let the browser set it\n    }\n\n    var request = new XMLHttpRequest();\n\n    // HTTP basic authentication\n    if (config.auth) {\n      var username = config.auth.username || '';\n      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';\n      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);\n    }\n\n    var fullPath = buildFullPath(config.baseURL, config.url);\n\n    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);\n\n    // Set the request timeout in MS\n    request.timeout = config.timeout;\n\n    function onloadend() {\n      if (!request) {\n        return;\n      }\n      // Prepare the response\n      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;\n      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?\n        request.responseText : request.response;\n      var response = {\n        data: responseData,\n        status: request.status,\n        statusText: request.statusText,\n        headers: responseHeaders,\n        config: config,\n        request: request\n      };\n\n      settle(function _resolve(value) {\n        resolve(value);\n        done();\n      }, function _reject(err) {\n        reject(err);\n        done();\n      }, response);\n\n      // Clean up request\n      request = null;\n    }\n\n    if ('onloadend' in request) {\n      // Use onloadend if available\n      request.onloadend = onloadend;\n    } else {\n      // Listen for ready state to emulate onloadend\n      request.onreadystatechange = function handleLoad() {\n        if (!request || request.readyState !== 4) {\n          return;\n        }\n\n        // The request errored out and we didn't get a response, this will be\n        // handled by onerror instead\n        // With one exception: request that using file: protocol, most browsers\n        // will return status as 0 even though it's a successful request\n        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {\n          return;\n        }\n        // readystate handler is calling before onerror or ontimeout handlers,\n        // so we should call onloadend on the next 'tick'\n        setTimeout(onloadend);\n      };\n    }\n\n    // Handle browser request cancellation (as opposed to a manual cancellation)\n    request.onabort = function handleAbort() {\n      if (!request) {\n        return;\n      }\n\n      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle low level network errors\n    request.onerror = function handleError() {\n      // Real errors are hidden from us by the browser\n      // onerror should only fire if it's a network error\n      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request, request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle timeout\n    request.ontimeout = function handleTimeout() {\n      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';\n      var transitional = config.transitional || transitionalDefaults;\n      if (config.timeoutErrorMessage) {\n        timeoutErrorMessage = config.timeoutErrorMessage;\n      }\n      reject(new AxiosError(\n        timeoutErrorMessage,\n        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,\n        config,\n        request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Add xsrf header\n    // This is only done if running in a standard browser environment.\n    // Specifically not if we're in a web worker, or react-native.\n    if (utils.isStandardBrowserEnv()) {\n      // Add xsrf header\n      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?\n        cookies.read(config.xsrfCookieName) :\n        undefined;\n\n      if (xsrfValue) {\n        requestHeaders[config.xsrfHeaderName] = xsrfValue;\n      }\n    }\n\n    // Add headers to the request\n    if ('setRequestHeader' in request) {\n      utils.forEach(requestHeaders, function setRequestHeader(val, key) {\n        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {\n          // Remove Content-Type if data is undefined\n          delete requestHeaders[key];\n        } else {\n          // Otherwise add header to the request\n          request.setRequestHeader(key, val);\n        }\n      });\n    }\n\n    // Add withCredentials to request if needed\n    if (!utils.isUndefined(config.withCredentials)) {\n      request.withCredentials = !!config.withCredentials;\n    }\n\n    // Add responseType to request if needed\n    if (responseType && responseType !== 'json') {\n      request.responseType = config.responseType;\n    }\n\n    // Handle progress if needed\n    if (typeof config.onDownloadProgress === 'function') {\n      request.addEventListener('progress', config.onDownloadProgress);\n    }\n\n    // Not all browsers support upload events\n    if (typeof config.onUploadProgress === 'function' && request.upload) {\n      request.upload.addEventListener('progress', config.onUploadProgress);\n    }\n\n    if (config.cancelToken || config.signal) {\n      // Handle cancellation\n      // eslint-disable-next-line func-names\n      onCanceled = function(cancel) {\n        if (!request) {\n          return;\n        }\n        reject(!cancel || (cancel && cancel.type) ? new CanceledError() : cancel);\n        request.abort();\n        request = null;\n      };\n\n      config.cancelToken && config.cancelToken.subscribe(onCanceled);\n      if (config.signal) {\n        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);\n      }\n    }\n\n    if (!requestData) {\n      requestData = null;\n    }\n\n    var protocol = parseProtocol(fullPath);\n\n    if (protocol && [ 'http', 'https', 'file' ].indexOf(protocol) === -1) {\n      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));\n      return;\n    }\n\n\n    // Send the request\n    request.send(requestData);\n  });\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/adapters/xhr.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/axios.js":
/*!**********************************************!*\
  !*** ../web/node_modules/axios/lib/axios.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"../web/node_modules/axios/lib/utils.js\");\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"../web/node_modules/axios/lib/helpers/bind.js\");\nvar Axios = __webpack_require__(/*! ./core/Axios */ \"../web/node_modules/axios/lib/core/Axios.js\");\nvar mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ \"../web/node_modules/axios/lib/core/mergeConfig.js\");\nvar defaults = __webpack_require__(/*! ./defaults */ \"../web/node_modules/axios/lib/defaults/index.js\");\n\n/**\n * Create an instance of Axios\n *\n * @param {Object} defaultConfig The default config for the instance\n * @return {Axios} A new instance of Axios\n */\nfunction createInstance(defaultConfig) {\n  var context = new Axios(defaultConfig);\n  var instance = bind(Axios.prototype.request, context);\n\n  // Copy axios.prototype to instance\n  utils.extend(instance, Axios.prototype, context);\n\n  // Copy context to instance\n  utils.extend(instance, context);\n\n  // Factory for creating new instances\n  instance.create = function create(instanceConfig) {\n    return createInstance(mergeConfig(defaultConfig, instanceConfig));\n  };\n\n  return instance;\n}\n\n// Create the default instance to be exported\nvar axios = createInstance(defaults);\n\n// Expose Axios class to allow class inheritance\naxios.Axios = Axios;\n\n// Expose Cancel & CancelToken\naxios.CanceledError = __webpack_require__(/*! ./cancel/CanceledError */ \"../web/node_modules/axios/lib/cancel/CanceledError.js\");\naxios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ \"../web/node_modules/axios/lib/cancel/CancelToken.js\");\naxios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ \"../web/node_modules/axios/lib/cancel/isCancel.js\");\naxios.VERSION = (__webpack_require__(/*! ./env/data */ \"../web/node_modules/axios/lib/env/data.js\").version);\naxios.toFormData = __webpack_require__(/*! ./helpers/toFormData */ \"../web/node_modules/axios/lib/helpers/toFormData.js\");\n\n// Expose AxiosError class\naxios.AxiosError = __webpack_require__(/*! ../lib/core/AxiosError */ \"../web/node_modules/axios/lib/core/AxiosError.js\");\n\n// alias for CanceledError for backward compatibility\naxios.Cancel = axios.CanceledError;\n\n// Expose all/spread\naxios.all = function all(promises) {\n  return Promise.all(promises);\n};\naxios.spread = __webpack_require__(/*! ./helpers/spread */ \"../web/node_modules/axios/lib/helpers/spread.js\");\n\n// Expose isAxiosError\naxios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ \"../web/node_modules/axios/lib/helpers/isAxiosError.js\");\n\nmodule.exports = axios;\n\n// Allow use of default import syntax in TypeScript\nmodule.exports[\"default\"] = axios;\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/axios.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/cancel/CancelToken.js":
/*!***********************************************************!*\
  !*** ../web/node_modules/axios/lib/cancel/CancelToken.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar CanceledError = __webpack_require__(/*! ./CanceledError */ \"../web/node_modules/axios/lib/cancel/CanceledError.js\");\n\n/**\n * A `CancelToken` is an object that can be used to request cancellation of an operation.\n *\n * @class\n * @param {Function} executor The executor function.\n */\nfunction CancelToken(executor) {\n  if (typeof executor !== 'function') {\n    throw new TypeError('executor must be a function.');\n  }\n\n  var resolvePromise;\n\n  this.promise = new Promise(function promiseExecutor(resolve) {\n    resolvePromise = resolve;\n  });\n\n  var token = this;\n\n  // eslint-disable-next-line func-names\n  this.promise.then(function(cancel) {\n    if (!token._listeners) return;\n\n    var i;\n    var l = token._listeners.length;\n\n    for (i = 0; i < l; i++) {\n      token._listeners[i](cancel);\n    }\n    token._listeners = null;\n  });\n\n  // eslint-disable-next-line func-names\n  this.promise.then = function(onfulfilled) {\n    var _resolve;\n    // eslint-disable-next-line func-names\n    var promise = new Promise(function(resolve) {\n      token.subscribe(resolve);\n      _resolve = resolve;\n    }).then(onfulfilled);\n\n    promise.cancel = function reject() {\n      token.unsubscribe(_resolve);\n    };\n\n    return promise;\n  };\n\n  executor(function cancel(message) {\n    if (token.reason) {\n      // Cancellation has already been requested\n      return;\n    }\n\n    token.reason = new CanceledError(message);\n    resolvePromise(token.reason);\n  });\n}\n\n/**\n * Throws a `CanceledError` if cancellation has been requested.\n */\nCancelToken.prototype.throwIfRequested = function throwIfRequested() {\n  if (this.reason) {\n    throw this.reason;\n  }\n};\n\n/**\n * Subscribe to the cancel signal\n */\n\nCancelToken.prototype.subscribe = function subscribe(listener) {\n  if (this.reason) {\n    listener(this.reason);\n    return;\n  }\n\n  if (this._listeners) {\n    this._listeners.push(listener);\n  } else {\n    this._listeners = [listener];\n  }\n};\n\n/**\n * Unsubscribe from the cancel signal\n */\n\nCancelToken.prototype.unsubscribe = function unsubscribe(listener) {\n  if (!this._listeners) {\n    return;\n  }\n  var index = this._listeners.indexOf(listener);\n  if (index !== -1) {\n    this._listeners.splice(index, 1);\n  }\n};\n\n/**\n * Returns an object that contains a new `CancelToken` and a function that, when called,\n * cancels the `CancelToken`.\n */\nCancelToken.source = function source() {\n  var cancel;\n  var token = new CancelToken(function executor(c) {\n    cancel = c;\n  });\n  return {\n    token: token,\n    cancel: cancel\n  };\n};\n\nmodule.exports = CancelToken;\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/cancel/CancelToken.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/cancel/CanceledError.js":
/*!*************************************************************!*\
  !*** ../web/node_modules/axios/lib/cancel/CanceledError.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar AxiosError = __webpack_require__(/*! ../core/AxiosError */ \"../web/node_modules/axios/lib/core/AxiosError.js\");\nvar utils = __webpack_require__(/*! ../utils */ \"../web/node_modules/axios/lib/utils.js\");\n\n/**\n * A `CanceledError` is an object that is thrown when an operation is canceled.\n *\n * @class\n * @param {string=} message The message.\n */\nfunction CanceledError(message) {\n  // eslint-disable-next-line no-eq-null,eqeqeq\n  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED);\n  this.name = 'CanceledError';\n}\n\nutils.inherits(CanceledError, AxiosError, {\n  __CANCEL__: true\n});\n\nmodule.exports = CanceledError;\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/cancel/CanceledError.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/cancel/isCancel.js":
/*!********************************************************!*\
  !*** ../web/node_modules/axios/lib/cancel/isCancel.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function isCancel(value) {\n  return !!(value && value.__CANCEL__);\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/cancel/isCancel.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/core/Axios.js":
/*!***************************************************!*\
  !*** ../web/node_modules/axios/lib/core/Axios.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"../web/node_modules/axios/lib/utils.js\");\nvar buildURL = __webpack_require__(/*! ../helpers/buildURL */ \"../web/node_modules/axios/lib/helpers/buildURL.js\");\nvar InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ \"../web/node_modules/axios/lib/core/InterceptorManager.js\");\nvar dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ \"../web/node_modules/axios/lib/core/dispatchRequest.js\");\nvar mergeConfig = __webpack_require__(/*! ./mergeConfig */ \"../web/node_modules/axios/lib/core/mergeConfig.js\");\nvar buildFullPath = __webpack_require__(/*! ./buildFullPath */ \"../web/node_modules/axios/lib/core/buildFullPath.js\");\nvar validator = __webpack_require__(/*! ../helpers/validator */ \"../web/node_modules/axios/lib/helpers/validator.js\");\n\nvar validators = validator.validators;\n/**\n * Create a new instance of Axios\n *\n * @param {Object} instanceConfig The default config for the instance\n */\nfunction Axios(instanceConfig) {\n  this.defaults = instanceConfig;\n  this.interceptors = {\n    request: new InterceptorManager(),\n    response: new InterceptorManager()\n  };\n}\n\n/**\n * Dispatch a request\n *\n * @param {Object} config The config specific for this request (merged with this.defaults)\n */\nAxios.prototype.request = function request(configOrUrl, config) {\n  /*eslint no-param-reassign:0*/\n  // Allow for axios('example/url'[, config]) a la fetch API\n  if (typeof configOrUrl === 'string') {\n    config = config || {};\n    config.url = configOrUrl;\n  } else {\n    config = configOrUrl || {};\n  }\n\n  config = mergeConfig(this.defaults, config);\n\n  // Set config.method\n  if (config.method) {\n    config.method = config.method.toLowerCase();\n  } else if (this.defaults.method) {\n    config.method = this.defaults.method.toLowerCase();\n  } else {\n    config.method = 'get';\n  }\n\n  var transitional = config.transitional;\n\n  if (transitional !== undefined) {\n    validator.assertOptions(transitional, {\n      silentJSONParsing: validators.transitional(validators.boolean),\n      forcedJSONParsing: validators.transitional(validators.boolean),\n      clarifyTimeoutError: validators.transitional(validators.boolean)\n    }, false);\n  }\n\n  // filter out skipped interceptors\n  var requestInterceptorChain = [];\n  var synchronousRequestInterceptors = true;\n  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {\n    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {\n      return;\n    }\n\n    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;\n\n    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  var responseInterceptorChain = [];\n  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {\n    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  var promise;\n\n  if (!synchronousRequestInterceptors) {\n    var chain = [dispatchRequest, undefined];\n\n    Array.prototype.unshift.apply(chain, requestInterceptorChain);\n    chain = chain.concat(responseInterceptorChain);\n\n    promise = Promise.resolve(config);\n    while (chain.length) {\n      promise = promise.then(chain.shift(), chain.shift());\n    }\n\n    return promise;\n  }\n\n\n  var newConfig = config;\n  while (requestInterceptorChain.length) {\n    var onFulfilled = requestInterceptorChain.shift();\n    var onRejected = requestInterceptorChain.shift();\n    try {\n      newConfig = onFulfilled(newConfig);\n    } catch (error) {\n      onRejected(error);\n      break;\n    }\n  }\n\n  try {\n    promise = dispatchRequest(newConfig);\n  } catch (error) {\n    return Promise.reject(error);\n  }\n\n  while (responseInterceptorChain.length) {\n    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());\n  }\n\n  return promise;\n};\n\nAxios.prototype.getUri = function getUri(config) {\n  config = mergeConfig(this.defaults, config);\n  var fullPath = buildFullPath(config.baseURL, config.url);\n  return buildURL(fullPath, config.params, config.paramsSerializer);\n};\n\n// Provide aliases for supported request methods\nutils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, config) {\n    return this.request(mergeConfig(config || {}, {\n      method: method,\n      url: url,\n      data: (config || {}).data\n    }));\n  };\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  /*eslint func-names:0*/\n\n  function generateHTTPMethod(isForm) {\n    return function httpMethod(url, data, config) {\n      return this.request(mergeConfig(config || {}, {\n        method: method,\n        headers: isForm ? {\n          'Content-Type': 'multipart/form-data'\n        } : {},\n        url: url,\n        data: data\n      }));\n    };\n  }\n\n  Axios.prototype[method] = generateHTTPMethod();\n\n  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);\n});\n\nmodule.exports = Axios;\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/core/Axios.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/core/AxiosError.js":
/*!********************************************************!*\
  !*** ../web/node_modules/axios/lib/core/AxiosError.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"../web/node_modules/axios/lib/utils.js\");\n\n/**\n * Create an Error with the specified message, config, error code, request and response.\n *\n * @param {string} message The error message.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [config] The config.\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The created error.\n */\nfunction AxiosError(message, code, config, request, response) {\n  Error.call(this);\n  this.message = message;\n  this.name = 'AxiosError';\n  code && (this.code = code);\n  config && (this.config = config);\n  request && (this.request = request);\n  response && (this.response = response);\n}\n\nutils.inherits(AxiosError, Error, {\n  toJSON: function toJSON() {\n    return {\n      // Standard\n      message: this.message,\n      name: this.name,\n      // Microsoft\n      description: this.description,\n      number: this.number,\n      // Mozilla\n      fileName: this.fileName,\n      lineNumber: this.lineNumber,\n      columnNumber: this.columnNumber,\n      stack: this.stack,\n      // Axios\n      config: this.config,\n      code: this.code,\n      status: this.response && this.response.status ? this.response.status : null\n    };\n  }\n});\n\nvar prototype = AxiosError.prototype;\nvar descriptors = {};\n\n[\n  'ERR_BAD_OPTION_VALUE',\n  'ERR_BAD_OPTION',\n  'ECONNABORTED',\n  'ETIMEDOUT',\n  'ERR_NETWORK',\n  'ERR_FR_TOO_MANY_REDIRECTS',\n  'ERR_DEPRECATED',\n  'ERR_BAD_RESPONSE',\n  'ERR_BAD_REQUEST',\n  'ERR_CANCELED'\n// eslint-disable-next-line func-names\n].forEach(function(code) {\n  descriptors[code] = {value: code};\n});\n\nObject.defineProperties(AxiosError, descriptors);\nObject.defineProperty(prototype, 'isAxiosError', {value: true});\n\n// eslint-disable-next-line func-names\nAxiosError.from = function(error, code, config, request, response, customProps) {\n  var axiosError = Object.create(prototype);\n\n  utils.toFlatObject(error, axiosError, function filter(obj) {\n    return obj !== Error.prototype;\n  });\n\n  AxiosError.call(axiosError, error.message, code, config, request, response);\n\n  axiosError.name = error.name;\n\n  customProps && Object.assign(axiosError, customProps);\n\n  return axiosError;\n};\n\nmodule.exports = AxiosError;\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/core/AxiosError.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/core/InterceptorManager.js":
/*!****************************************************************!*\
  !*** ../web/node_modules/axios/lib/core/InterceptorManager.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"../web/node_modules/axios/lib/utils.js\");\n\nfunction InterceptorManager() {\n  this.handlers = [];\n}\n\n/**\n * Add a new interceptor to the stack\n *\n * @param {Function} fulfilled The function to handle `then` for a `Promise`\n * @param {Function} rejected The function to handle `reject` for a `Promise`\n *\n * @return {Number} An ID used to remove interceptor later\n */\nInterceptorManager.prototype.use = function use(fulfilled, rejected, options) {\n  this.handlers.push({\n    fulfilled: fulfilled,\n    rejected: rejected,\n    synchronous: options ? options.synchronous : false,\n    runWhen: options ? options.runWhen : null\n  });\n  return this.handlers.length - 1;\n};\n\n/**\n * Remove an interceptor from the stack\n *\n * @param {Number} id The ID that was returned by `use`\n */\nInterceptorManager.prototype.eject = function eject(id) {\n  if (this.handlers[id]) {\n    this.handlers[id] = null;\n  }\n};\n\n/**\n * Iterate over all the registered interceptors\n *\n * This method is particularly useful for skipping over any\n * interceptors that may have become `null` calling `eject`.\n *\n * @param {Function} fn The function to call for each interceptor\n */\nInterceptorManager.prototype.forEach = function forEach(fn) {\n  utils.forEach(this.handlers, function forEachHandler(h) {\n    if (h !== null) {\n      fn(h);\n    }\n  });\n};\n\nmodule.exports = InterceptorManager;\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/core/InterceptorManager.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/core/buildFullPath.js":
/*!***********************************************************!*\
  !*** ../web/node_modules/axios/lib/core/buildFullPath.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ \"../web/node_modules/axios/lib/helpers/isAbsoluteURL.js\");\nvar combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ \"../web/node_modules/axios/lib/helpers/combineURLs.js\");\n\n/**\n * Creates a new URL by combining the baseURL with the requestedURL,\n * only when the requestedURL is not already an absolute URL.\n * If the requestURL is absolute, this function returns the requestedURL untouched.\n *\n * @param {string} baseURL The base URL\n * @param {string} requestedURL Absolute or relative URL to combine\n * @returns {string} The combined full path\n */\nmodule.exports = function buildFullPath(baseURL, requestedURL) {\n  if (baseURL && !isAbsoluteURL(requestedURL)) {\n    return combineURLs(baseURL, requestedURL);\n  }\n  return requestedURL;\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/core/buildFullPath.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/core/dispatchRequest.js":
/*!*************************************************************!*\
  !*** ../web/node_modules/axios/lib/core/dispatchRequest.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"../web/node_modules/axios/lib/utils.js\");\nvar transformData = __webpack_require__(/*! ./transformData */ \"../web/node_modules/axios/lib/core/transformData.js\");\nvar isCancel = __webpack_require__(/*! ../cancel/isCancel */ \"../web/node_modules/axios/lib/cancel/isCancel.js\");\nvar defaults = __webpack_require__(/*! ../defaults */ \"../web/node_modules/axios/lib/defaults/index.js\");\nvar CanceledError = __webpack_require__(/*! ../cancel/CanceledError */ \"../web/node_modules/axios/lib/cancel/CanceledError.js\");\n\n/**\n * Throws a `CanceledError` if cancellation has been requested.\n */\nfunction throwIfCancellationRequested(config) {\n  if (config.cancelToken) {\n    config.cancelToken.throwIfRequested();\n  }\n\n  if (config.signal && config.signal.aborted) {\n    throw new CanceledError();\n  }\n}\n\n/**\n * Dispatch a request to the server using the configured adapter.\n *\n * @param {object} config The config that is to be used for the request\n * @returns {Promise} The Promise to be fulfilled\n */\nmodule.exports = function dispatchRequest(config) {\n  throwIfCancellationRequested(config);\n\n  // Ensure headers exist\n  config.headers = config.headers || {};\n\n  // Transform request data\n  config.data = transformData.call(\n    config,\n    config.data,\n    config.headers,\n    config.transformRequest\n  );\n\n  // Flatten headers\n  config.headers = utils.merge(\n    config.headers.common || {},\n    config.headers[config.method] || {},\n    config.headers\n  );\n\n  utils.forEach(\n    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],\n    function cleanHeaderConfig(method) {\n      delete config.headers[method];\n    }\n  );\n\n  var adapter = config.adapter || defaults.adapter;\n\n  return adapter(config).then(function onAdapterResolution(response) {\n    throwIfCancellationRequested(config);\n\n    // Transform response data\n    response.data = transformData.call(\n      config,\n      response.data,\n      response.headers,\n      config.transformResponse\n    );\n\n    return response;\n  }, function onAdapterRejection(reason) {\n    if (!isCancel(reason)) {\n      throwIfCancellationRequested(config);\n\n      // Transform response data\n      if (reason && reason.response) {\n        reason.response.data = transformData.call(\n          config,\n          reason.response.data,\n          reason.response.headers,\n          config.transformResponse\n        );\n      }\n    }\n\n    return Promise.reject(reason);\n  });\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/core/dispatchRequest.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/core/mergeConfig.js":
/*!*********************************************************!*\
  !*** ../web/node_modules/axios/lib/core/mergeConfig.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"../web/node_modules/axios/lib/utils.js\");\n\n/**\n * Config-specific merge-function which creates a new config-object\n * by merging two configuration objects together.\n *\n * @param {Object} config1\n * @param {Object} config2\n * @returns {Object} New object resulting from merging config2 to config1\n */\nmodule.exports = function mergeConfig(config1, config2) {\n  // eslint-disable-next-line no-param-reassign\n  config2 = config2 || {};\n  var config = {};\n\n  function getMergedValue(target, source) {\n    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {\n      return utils.merge(target, source);\n    } else if (utils.isPlainObject(source)) {\n      return utils.merge({}, source);\n    } else if (utils.isArray(source)) {\n      return source.slice();\n    }\n    return source;\n  }\n\n  // eslint-disable-next-line consistent-return\n  function mergeDeepProperties(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      return getMergedValue(config1[prop], config2[prop]);\n    } else if (!utils.isUndefined(config1[prop])) {\n      return getMergedValue(undefined, config1[prop]);\n    }\n  }\n\n  // eslint-disable-next-line consistent-return\n  function valueFromConfig2(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      return getMergedValue(undefined, config2[prop]);\n    }\n  }\n\n  // eslint-disable-next-line consistent-return\n  function defaultToConfig2(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      return getMergedValue(undefined, config2[prop]);\n    } else if (!utils.isUndefined(config1[prop])) {\n      return getMergedValue(undefined, config1[prop]);\n    }\n  }\n\n  // eslint-disable-next-line consistent-return\n  function mergeDirectKeys(prop) {\n    if (prop in config2) {\n      return getMergedValue(config1[prop], config2[prop]);\n    } else if (prop in config1) {\n      return getMergedValue(undefined, config1[prop]);\n    }\n  }\n\n  var mergeMap = {\n    'url': valueFromConfig2,\n    'method': valueFromConfig2,\n    'data': valueFromConfig2,\n    'baseURL': defaultToConfig2,\n    'transformRequest': defaultToConfig2,\n    'transformResponse': defaultToConfig2,\n    'paramsSerializer': defaultToConfig2,\n    'timeout': defaultToConfig2,\n    'timeoutMessage': defaultToConfig2,\n    'withCredentials': defaultToConfig2,\n    'adapter': defaultToConfig2,\n    'responseType': defaultToConfig2,\n    'xsrfCookieName': defaultToConfig2,\n    'xsrfHeaderName': defaultToConfig2,\n    'onUploadProgress': defaultToConfig2,\n    'onDownloadProgress': defaultToConfig2,\n    'decompress': defaultToConfig2,\n    'maxContentLength': defaultToConfig2,\n    'maxBodyLength': defaultToConfig2,\n    'beforeRedirect': defaultToConfig2,\n    'transport': defaultToConfig2,\n    'httpAgent': defaultToConfig2,\n    'httpsAgent': defaultToConfig2,\n    'cancelToken': defaultToConfig2,\n    'socketPath': defaultToConfig2,\n    'responseEncoding': defaultToConfig2,\n    'validateStatus': mergeDirectKeys\n  };\n\n  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {\n    var merge = mergeMap[prop] || mergeDeepProperties;\n    var configValue = merge(prop);\n    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);\n  });\n\n  return config;\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/core/mergeConfig.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/core/settle.js":
/*!****************************************************!*\
  !*** ../web/node_modules/axios/lib/core/settle.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar AxiosError = __webpack_require__(/*! ./AxiosError */ \"../web/node_modules/axios/lib/core/AxiosError.js\");\n\n/**\n * Resolve or reject a Promise based on response status.\n *\n * @param {Function} resolve A function that resolves the promise.\n * @param {Function} reject A function that rejects the promise.\n * @param {object} response The response.\n */\nmodule.exports = function settle(resolve, reject, response) {\n  var validateStatus = response.config.validateStatus;\n  if (!response.status || !validateStatus || validateStatus(response.status)) {\n    resolve(response);\n  } else {\n    reject(new AxiosError(\n      'Request failed with status code ' + response.status,\n      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],\n      response.config,\n      response.request,\n      response\n    ));\n  }\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/core/settle.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/core/transformData.js":
/*!***********************************************************!*\
  !*** ../web/node_modules/axios/lib/core/transformData.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"../web/node_modules/axios/lib/utils.js\");\nvar defaults = __webpack_require__(/*! ../defaults */ \"../web/node_modules/axios/lib/defaults/index.js\");\n\n/**\n * Transform the data for a request or a response\n *\n * @param {Object|String} data The data to be transformed\n * @param {Array} headers The headers for the request or response\n * @param {Array|Function} fns A single function or Array of functions\n * @returns {*} The resulting transformed data\n */\nmodule.exports = function transformData(data, headers, fns) {\n  var context = this || defaults;\n  /*eslint no-param-reassign:0*/\n  utils.forEach(fns, function transform(fn) {\n    data = fn.call(context, data, headers);\n  });\n\n  return data;\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/core/transformData.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/defaults/env/FormData.js":
/*!**************************************************************!*\
  !*** ../web/node_modules/axios/lib/defaults/env/FormData.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// eslint-disable-next-line strict\nmodule.exports = __webpack_require__(/*! form-data */ \"../web/node_modules/form-data/lib/form_data.js\");\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/defaults/env/FormData.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/defaults/index.js":
/*!*******************************************************!*\
  !*** ../web/node_modules/axios/lib/defaults/index.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"../web/node_modules/axios/lib/utils.js\");\nvar normalizeHeaderName = __webpack_require__(/*! ../helpers/normalizeHeaderName */ \"../web/node_modules/axios/lib/helpers/normalizeHeaderName.js\");\nvar AxiosError = __webpack_require__(/*! ../core/AxiosError */ \"../web/node_modules/axios/lib/core/AxiosError.js\");\nvar transitionalDefaults = __webpack_require__(/*! ./transitional */ \"../web/node_modules/axios/lib/defaults/transitional.js\");\nvar toFormData = __webpack_require__(/*! ../helpers/toFormData */ \"../web/node_modules/axios/lib/helpers/toFormData.js\");\n\nvar DEFAULT_CONTENT_TYPE = {\n  'Content-Type': 'application/x-www-form-urlencoded'\n};\n\nfunction setContentTypeIfUnset(headers, value) {\n  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {\n    headers['Content-Type'] = value;\n  }\n}\n\nfunction getDefaultAdapter() {\n  var adapter;\n  if (typeof XMLHttpRequest !== 'undefined') {\n    // For browsers use XHR adapter\n    adapter = __webpack_require__(/*! ../adapters/xhr */ \"../web/node_modules/axios/lib/adapters/xhr.js\");\n  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {\n    // For node use HTTP adapter\n    adapter = __webpack_require__(/*! ../adapters/http */ \"../web/node_modules/axios/lib/adapters/http.js\");\n  }\n  return adapter;\n}\n\nfunction stringifySafely(rawValue, parser, encoder) {\n  if (utils.isString(rawValue)) {\n    try {\n      (parser || JSON.parse)(rawValue);\n      return utils.trim(rawValue);\n    } catch (e) {\n      if (e.name !== 'SyntaxError') {\n        throw e;\n      }\n    }\n  }\n\n  return (encoder || JSON.stringify)(rawValue);\n}\n\nvar defaults = {\n\n  transitional: transitionalDefaults,\n\n  adapter: getDefaultAdapter(),\n\n  transformRequest: [function transformRequest(data, headers) {\n    normalizeHeaderName(headers, 'Accept');\n    normalizeHeaderName(headers, 'Content-Type');\n\n    if (utils.isFormData(data) ||\n      utils.isArrayBuffer(data) ||\n      utils.isBuffer(data) ||\n      utils.isStream(data) ||\n      utils.isFile(data) ||\n      utils.isBlob(data)\n    ) {\n      return data;\n    }\n    if (utils.isArrayBufferView(data)) {\n      return data.buffer;\n    }\n    if (utils.isURLSearchParams(data)) {\n      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');\n      return data.toString();\n    }\n\n    var isObjectPayload = utils.isObject(data);\n    var contentType = headers && headers['Content-Type'];\n\n    var isFileList;\n\n    if ((isFileList = utils.isFileList(data)) || (isObjectPayload && contentType === 'multipart/form-data')) {\n      var _FormData = this.env && this.env.FormData;\n      return toFormData(isFileList ? {'files[]': data} : data, _FormData && new _FormData());\n    } else if (isObjectPayload || contentType === 'application/json') {\n      setContentTypeIfUnset(headers, 'application/json');\n      return stringifySafely(data);\n    }\n\n    return data;\n  }],\n\n  transformResponse: [function transformResponse(data) {\n    var transitional = this.transitional || defaults.transitional;\n    var silentJSONParsing = transitional && transitional.silentJSONParsing;\n    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;\n    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';\n\n    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {\n      try {\n        return JSON.parse(data);\n      } catch (e) {\n        if (strictJSONParsing) {\n          if (e.name === 'SyntaxError') {\n            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);\n          }\n          throw e;\n        }\n      }\n    }\n\n    return data;\n  }],\n\n  /**\n   * A timeout in milliseconds to abort a request. If set to 0 (default) a\n   * timeout is not created.\n   */\n  timeout: 0,\n\n  xsrfCookieName: 'XSRF-TOKEN',\n  xsrfHeaderName: 'X-XSRF-TOKEN',\n\n  maxContentLength: -1,\n  maxBodyLength: -1,\n\n  env: {\n    FormData: __webpack_require__(/*! ./env/FormData */ \"../web/node_modules/axios/lib/defaults/env/FormData.js\")\n  },\n\n  validateStatus: function validateStatus(status) {\n    return status >= 200 && status < 300;\n  },\n\n  headers: {\n    common: {\n      'Accept': 'application/json, text/plain, */*'\n    }\n  }\n};\n\nutils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {\n  defaults.headers[method] = {};\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);\n});\n\nmodule.exports = defaults;\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/defaults/index.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/defaults/transitional.js":
/*!**************************************************************!*\
  !*** ../web/node_modules/axios/lib/defaults/transitional.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = {\n  silentJSONParsing: true,\n  forcedJSONParsing: true,\n  clarifyTimeoutError: false\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/defaults/transitional.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/env/data.js":
/*!*************************************************!*\
  !*** ../web/node_modules/axios/lib/env/data.js ***!
  \*************************************************/
/***/ ((module) => {

eval("module.exports = {\n  \"version\": \"0.27.2\"\n};\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/env/data.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/helpers/bind.js":
/*!*****************************************************!*\
  !*** ../web/node_modules/axios/lib/helpers/bind.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function bind(fn, thisArg) {\n  return function wrap() {\n    var args = new Array(arguments.length);\n    for (var i = 0; i < args.length; i++) {\n      args[i] = arguments[i];\n    }\n    return fn.apply(thisArg, args);\n  };\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/helpers/bind.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/helpers/buildURL.js":
/*!*********************************************************!*\
  !*** ../web/node_modules/axios/lib/helpers/buildURL.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"../web/node_modules/axios/lib/utils.js\");\n\nfunction encode(val) {\n  return encodeURIComponent(val).\n    replace(/%3A/gi, ':').\n    replace(/%24/g, '$').\n    replace(/%2C/gi, ',').\n    replace(/%20/g, '+').\n    replace(/%5B/gi, '[').\n    replace(/%5D/gi, ']');\n}\n\n/**\n * Build a URL by appending params to the end\n *\n * @param {string} url The base of the url (e.g., http://www.google.com)\n * @param {object} [params] The params to be appended\n * @returns {string} The formatted url\n */\nmodule.exports = function buildURL(url, params, paramsSerializer) {\n  /*eslint no-param-reassign:0*/\n  if (!params) {\n    return url;\n  }\n\n  var serializedParams;\n  if (paramsSerializer) {\n    serializedParams = paramsSerializer(params);\n  } else if (utils.isURLSearchParams(params)) {\n    serializedParams = params.toString();\n  } else {\n    var parts = [];\n\n    utils.forEach(params, function serialize(val, key) {\n      if (val === null || typeof val === 'undefined') {\n        return;\n      }\n\n      if (utils.isArray(val)) {\n        key = key + '[]';\n      } else {\n        val = [val];\n      }\n\n      utils.forEach(val, function parseValue(v) {\n        if (utils.isDate(v)) {\n          v = v.toISOString();\n        } else if (utils.isObject(v)) {\n          v = JSON.stringify(v);\n        }\n        parts.push(encode(key) + '=' + encode(v));\n      });\n    });\n\n    serializedParams = parts.join('&');\n  }\n\n  if (serializedParams) {\n    var hashmarkIndex = url.indexOf('#');\n    if (hashmarkIndex !== -1) {\n      url = url.slice(0, hashmarkIndex);\n    }\n\n    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;\n  }\n\n  return url;\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/helpers/buildURL.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/helpers/combineURLs.js":
/*!************************************************************!*\
  !*** ../web/node_modules/axios/lib/helpers/combineURLs.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/**\n * Creates a new URL by combining the specified URLs\n *\n * @param {string} baseURL The base URL\n * @param {string} relativeURL The relative URL\n * @returns {string} The combined URL\n */\nmodule.exports = function combineURLs(baseURL, relativeURL) {\n  return relativeURL\n    ? baseURL.replace(/\\/+$/, '') + '/' + relativeURL.replace(/^\\/+/, '')\n    : baseURL;\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/helpers/combineURLs.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/helpers/cookies.js":
/*!********************************************************!*\
  !*** ../web/node_modules/axios/lib/helpers/cookies.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"../web/node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs support document.cookie\n    (function standardBrowserEnv() {\n      return {\n        write: function write(name, value, expires, path, domain, secure) {\n          var cookie = [];\n          cookie.push(name + '=' + encodeURIComponent(value));\n\n          if (utils.isNumber(expires)) {\n            cookie.push('expires=' + new Date(expires).toGMTString());\n          }\n\n          if (utils.isString(path)) {\n            cookie.push('path=' + path);\n          }\n\n          if (utils.isString(domain)) {\n            cookie.push('domain=' + domain);\n          }\n\n          if (secure === true) {\n            cookie.push('secure');\n          }\n\n          document.cookie = cookie.join('; ');\n        },\n\n        read: function read(name) {\n          var match = document.cookie.match(new RegExp('(^|;\\\\s*)(' + name + ')=([^;]*)'));\n          return (match ? decodeURIComponent(match[3]) : null);\n        },\n\n        remove: function remove(name) {\n          this.write(name, '', Date.now() - 86400000);\n        }\n      };\n    })() :\n\n  // Non standard browser env (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return {\n        write: function write() {},\n        read: function read() { return null; },\n        remove: function remove() {}\n      };\n    })()\n);\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/helpers/cookies.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!**************************************************************!*\
  !*** ../web/node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/**\n * Determines whether the specified URL is absolute\n *\n * @param {string} url The URL to test\n * @returns {boolean} True if the specified URL is absolute, otherwise false\n */\nmodule.exports = function isAbsoluteURL(url) {\n  // A URL is considered absolute if it begins with \"<scheme>://\" or \"//\" (protocol-relative URL).\n  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed\n  // by any combination of letters, digits, plus, period, or hyphen.\n  return /^([a-z][a-z\\d+\\-.]*:)?\\/\\//i.test(url);\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/helpers/isAbsoluteURL.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/helpers/isAxiosError.js":
/*!*************************************************************!*\
  !*** ../web/node_modules/axios/lib/helpers/isAxiosError.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"../web/node_modules/axios/lib/utils.js\");\n\n/**\n * Determines whether the payload is an error thrown by Axios\n *\n * @param {*} payload The value to test\n * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false\n */\nmodule.exports = function isAxiosError(payload) {\n  return utils.isObject(payload) && (payload.isAxiosError === true);\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/helpers/isAxiosError.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!****************************************************************!*\
  !*** ../web/node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"../web/node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs have full support of the APIs needed to test\n  // whether the request URL is of the same origin as current location.\n    (function standardBrowserEnv() {\n      var msie = /(msie|trident)/i.test(navigator.userAgent);\n      var urlParsingNode = document.createElement('a');\n      var originURL;\n\n      /**\n    * Parse a URL to discover it's components\n    *\n    * @param {String} url The URL to be parsed\n    * @returns {Object}\n    */\n      function resolveURL(url) {\n        var href = url;\n\n        if (msie) {\n        // IE needs attribute set twice to normalize properties\n          urlParsingNode.setAttribute('href', href);\n          href = urlParsingNode.href;\n        }\n\n        urlParsingNode.setAttribute('href', href);\n\n        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils\n        return {\n          href: urlParsingNode.href,\n          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',\n          host: urlParsingNode.host,\n          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\\?/, '') : '',\n          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',\n          hostname: urlParsingNode.hostname,\n          port: urlParsingNode.port,\n          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?\n            urlParsingNode.pathname :\n            '/' + urlParsingNode.pathname\n        };\n      }\n\n      originURL = resolveURL(window.location.href);\n\n      /**\n    * Determine if a URL shares the same origin as the current location\n    *\n    * @param {String} requestURL The URL to test\n    * @returns {boolean} True if URL shares the same origin, otherwise false\n    */\n      return function isURLSameOrigin(requestURL) {\n        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;\n        return (parsed.protocol === originURL.protocol &&\n            parsed.host === originURL.host);\n      };\n    })() :\n\n  // Non standard browser envs (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return function isURLSameOrigin() {\n        return true;\n      };\n    })()\n);\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/helpers/isURLSameOrigin.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!********************************************************************!*\
  !*** ../web/node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"../web/node_modules/axios/lib/utils.js\");\n\nmodule.exports = function normalizeHeaderName(headers, normalizedName) {\n  utils.forEach(headers, function processHeader(value, name) {\n    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {\n      headers[normalizedName] = value;\n      delete headers[name];\n    }\n  });\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/helpers/normalizeHeaderName.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/helpers/parseHeaders.js":
/*!*************************************************************!*\
  !*** ../web/node_modules/axios/lib/helpers/parseHeaders.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"../web/node_modules/axios/lib/utils.js\");\n\n// Headers whose duplicates are ignored by node\n// c.f. https://nodejs.org/api/http.html#http_message_headers\nvar ignoreDuplicateOf = [\n  'age', 'authorization', 'content-length', 'content-type', 'etag',\n  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',\n  'last-modified', 'location', 'max-forwards', 'proxy-authorization',\n  'referer', 'retry-after', 'user-agent'\n];\n\n/**\n * Parse headers into an object\n *\n * ```\n * Date: Wed, 27 Aug 2014 08:58:49 GMT\n * Content-Type: application/json\n * Connection: keep-alive\n * Transfer-Encoding: chunked\n * ```\n *\n * @param {String} headers Headers needing to be parsed\n * @returns {Object} Headers parsed into an object\n */\nmodule.exports = function parseHeaders(headers) {\n  var parsed = {};\n  var key;\n  var val;\n  var i;\n\n  if (!headers) { return parsed; }\n\n  utils.forEach(headers.split('\\n'), function parser(line) {\n    i = line.indexOf(':');\n    key = utils.trim(line.substr(0, i)).toLowerCase();\n    val = utils.trim(line.substr(i + 1));\n\n    if (key) {\n      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {\n        return;\n      }\n      if (key === 'set-cookie') {\n        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);\n      } else {\n        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;\n      }\n    }\n  });\n\n  return parsed;\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/helpers/parseHeaders.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/helpers/parseProtocol.js":
/*!**************************************************************!*\
  !*** ../web/node_modules/axios/lib/helpers/parseProtocol.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function parseProtocol(url) {\n  var match = /^([-+\\w]{1,25})(:?\\/\\/|:)/.exec(url);\n  return match && match[1] || '';\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/helpers/parseProtocol.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/helpers/spread.js":
/*!*******************************************************!*\
  !*** ../web/node_modules/axios/lib/helpers/spread.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/**\n * Syntactic sugar for invoking a function and expanding an array for arguments.\n *\n * Common use case would be to use `Function.prototype.apply`.\n *\n *  ```js\n *  function f(x, y, z) {}\n *  var args = [1, 2, 3];\n *  f.apply(null, args);\n *  ```\n *\n * With `spread` this example can be re-written.\n *\n *  ```js\n *  spread(function(x, y, z) {})([1, 2, 3]);\n *  ```\n *\n * @param {Function} callback\n * @returns {Function}\n */\nmodule.exports = function spread(callback) {\n  return function wrap(arr) {\n    return callback.apply(null, arr);\n  };\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/helpers/spread.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/helpers/toFormData.js":
/*!***********************************************************!*\
  !*** ../web/node_modules/axios/lib/helpers/toFormData.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"../web/node_modules/axios/lib/utils.js\");\n\n/**\n * Convert a data object to FormData\n * @param {Object} obj\n * @param {?Object} [formData]\n * @returns {Object}\n **/\n\nfunction toFormData(obj, formData) {\n  // eslint-disable-next-line no-param-reassign\n  formData = formData || new FormData();\n\n  var stack = [];\n\n  function convertValue(value) {\n    if (value === null) return '';\n\n    if (utils.isDate(value)) {\n      return value.toISOString();\n    }\n\n    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {\n      return typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);\n    }\n\n    return value;\n  }\n\n  function build(data, parentKey) {\n    if (utils.isPlainObject(data) || utils.isArray(data)) {\n      if (stack.indexOf(data) !== -1) {\n        throw Error('Circular reference detected in ' + parentKey);\n      }\n\n      stack.push(data);\n\n      utils.forEach(data, function each(value, key) {\n        if (utils.isUndefined(value)) return;\n        var fullKey = parentKey ? parentKey + '.' + key : key;\n        var arr;\n\n        if (value && !parentKey && typeof value === 'object') {\n          if (utils.endsWith(key, '{}')) {\n            // eslint-disable-next-line no-param-reassign\n            value = JSON.stringify(value);\n          } else if (utils.endsWith(key, '[]') && (arr = utils.toArray(value))) {\n            // eslint-disable-next-line func-names\n            arr.forEach(function(el) {\n              !utils.isUndefined(el) && formData.append(fullKey, convertValue(el));\n            });\n            return;\n          }\n        }\n\n        build(value, fullKey);\n      });\n\n      stack.pop();\n    } else {\n      formData.append(parentKey, convertValue(data));\n    }\n  }\n\n  build(obj);\n\n  return formData;\n}\n\nmodule.exports = toFormData;\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/helpers/toFormData.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/helpers/validator.js":
/*!**********************************************************!*\
  !*** ../web/node_modules/axios/lib/helpers/validator.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar VERSION = (__webpack_require__(/*! ../env/data */ \"../web/node_modules/axios/lib/env/data.js\").version);\nvar AxiosError = __webpack_require__(/*! ../core/AxiosError */ \"../web/node_modules/axios/lib/core/AxiosError.js\");\n\nvar validators = {};\n\n// eslint-disable-next-line func-names\n['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {\n  validators[type] = function validator(thing) {\n    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;\n  };\n});\n\nvar deprecatedWarnings = {};\n\n/**\n * Transitional option validator\n * @param {function|boolean?} validator - set to false if the transitional option has been removed\n * @param {string?} version - deprecated version / removed since version\n * @param {string?} message - some message with additional info\n * @returns {function}\n */\nvalidators.transitional = function transitional(validator, version, message) {\n  function formatMessage(opt, desc) {\n    return '[Axios v' + VERSION + '] Transitional option \\'' + opt + '\\'' + desc + (message ? '. ' + message : '');\n  }\n\n  // eslint-disable-next-line func-names\n  return function(value, opt, opts) {\n    if (validator === false) {\n      throw new AxiosError(\n        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),\n        AxiosError.ERR_DEPRECATED\n      );\n    }\n\n    if (version && !deprecatedWarnings[opt]) {\n      deprecatedWarnings[opt] = true;\n      // eslint-disable-next-line no-console\n      console.warn(\n        formatMessage(\n          opt,\n          ' has been deprecated since v' + version + ' and will be removed in the near future'\n        )\n      );\n    }\n\n    return validator ? validator(value, opt, opts) : true;\n  };\n};\n\n/**\n * Assert object's properties type\n * @param {object} options\n * @param {object} schema\n * @param {boolean?} allowUnknown\n */\n\nfunction assertOptions(options, schema, allowUnknown) {\n  if (typeof options !== 'object') {\n    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);\n  }\n  var keys = Object.keys(options);\n  var i = keys.length;\n  while (i-- > 0) {\n    var opt = keys[i];\n    var validator = schema[opt];\n    if (validator) {\n      var value = options[opt];\n      var result = value === undefined || validator(value, opt, options);\n      if (result !== true) {\n        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);\n      }\n      continue;\n    }\n    if (allowUnknown !== true) {\n      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);\n    }\n  }\n}\n\nmodule.exports = {\n  assertOptions: assertOptions,\n  validators: validators\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/helpers/validator.js?");

/***/ }),

/***/ "../web/node_modules/axios/lib/utils.js":
/*!**********************************************!*\
  !*** ../web/node_modules/axios/lib/utils.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"../web/node_modules/axios/lib/helpers/bind.js\");\n\n// utils is a library of generic helper functions non-specific to axios\n\nvar toString = Object.prototype.toString;\n\n// eslint-disable-next-line func-names\nvar kindOf = (function(cache) {\n  // eslint-disable-next-line func-names\n  return function(thing) {\n    var str = toString.call(thing);\n    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());\n  };\n})(Object.create(null));\n\nfunction kindOfTest(type) {\n  type = type.toLowerCase();\n  return function isKindOf(thing) {\n    return kindOf(thing) === type;\n  };\n}\n\n/**\n * Determine if a value is an Array\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Array, otherwise false\n */\nfunction isArray(val) {\n  return Array.isArray(val);\n}\n\n/**\n * Determine if a value is undefined\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if the value is undefined, otherwise false\n */\nfunction isUndefined(val) {\n  return typeof val === 'undefined';\n}\n\n/**\n * Determine if a value is a Buffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Buffer, otherwise false\n */\nfunction isBuffer(val) {\n  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)\n    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);\n}\n\n/**\n * Determine if a value is an ArrayBuffer\n *\n * @function\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an ArrayBuffer, otherwise false\n */\nvar isArrayBuffer = kindOfTest('ArrayBuffer');\n\n\n/**\n * Determine if a value is a view on an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false\n */\nfunction isArrayBufferView(val) {\n  var result;\n  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {\n    result = ArrayBuffer.isView(val);\n  } else {\n    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));\n  }\n  return result;\n}\n\n/**\n * Determine if a value is a String\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a String, otherwise false\n */\nfunction isString(val) {\n  return typeof val === 'string';\n}\n\n/**\n * Determine if a value is a Number\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Number, otherwise false\n */\nfunction isNumber(val) {\n  return typeof val === 'number';\n}\n\n/**\n * Determine if a value is an Object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Object, otherwise false\n */\nfunction isObject(val) {\n  return val !== null && typeof val === 'object';\n}\n\n/**\n * Determine if a value is a plain Object\n *\n * @param {Object} val The value to test\n * @return {boolean} True if value is a plain Object, otherwise false\n */\nfunction isPlainObject(val) {\n  if (kindOf(val) !== 'object') {\n    return false;\n  }\n\n  var prototype = Object.getPrototypeOf(val);\n  return prototype === null || prototype === Object.prototype;\n}\n\n/**\n * Determine if a value is a Date\n *\n * @function\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Date, otherwise false\n */\nvar isDate = kindOfTest('Date');\n\n/**\n * Determine if a value is a File\n *\n * @function\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a File, otherwise false\n */\nvar isFile = kindOfTest('File');\n\n/**\n * Determine if a value is a Blob\n *\n * @function\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Blob, otherwise false\n */\nvar isBlob = kindOfTest('Blob');\n\n/**\n * Determine if a value is a FileList\n *\n * @function\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a File, otherwise false\n */\nvar isFileList = kindOfTest('FileList');\n\n/**\n * Determine if a value is a Function\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Function, otherwise false\n */\nfunction isFunction(val) {\n  return toString.call(val) === '[object Function]';\n}\n\n/**\n * Determine if a value is a Stream\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Stream, otherwise false\n */\nfunction isStream(val) {\n  return isObject(val) && isFunction(val.pipe);\n}\n\n/**\n * Determine if a value is a FormData\n *\n * @param {Object} thing The value to test\n * @returns {boolean} True if value is an FormData, otherwise false\n */\nfunction isFormData(thing) {\n  var pattern = '[object FormData]';\n  return thing && (\n    (typeof FormData === 'function' && thing instanceof FormData) ||\n    toString.call(thing) === pattern ||\n    (isFunction(thing.toString) && thing.toString() === pattern)\n  );\n}\n\n/**\n * Determine if a value is a URLSearchParams object\n * @function\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a URLSearchParams object, otherwise false\n */\nvar isURLSearchParams = kindOfTest('URLSearchParams');\n\n/**\n * Trim excess whitespace off the beginning and end of a string\n *\n * @param {String} str The String to trim\n * @returns {String} The String freed of excess whitespace\n */\nfunction trim(str) {\n  return str.trim ? str.trim() : str.replace(/^\\s+|\\s+$/g, '');\n}\n\n/**\n * Determine if we're running in a standard browser environment\n *\n * This allows axios to run in a web worker, and react-native.\n * Both environments support XMLHttpRequest, but not fully standard globals.\n *\n * web workers:\n *  typeof window -> undefined\n *  typeof document -> undefined\n *\n * react-native:\n *  navigator.product -> 'ReactNative'\n * nativescript\n *  navigator.product -> 'NativeScript' or 'NS'\n */\nfunction isStandardBrowserEnv() {\n  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||\n                                           navigator.product === 'NativeScript' ||\n                                           navigator.product === 'NS')) {\n    return false;\n  }\n  return (\n    typeof window !== 'undefined' &&\n    typeof document !== 'undefined'\n  );\n}\n\n/**\n * Iterate over an Array or an Object invoking a function for each item.\n *\n * If `obj` is an Array callback will be called passing\n * the value, index, and complete array for each item.\n *\n * If 'obj' is an Object callback will be called passing\n * the value, key, and complete object for each property.\n *\n * @param {Object|Array} obj The object to iterate\n * @param {Function} fn The callback to invoke for each item\n */\nfunction forEach(obj, fn) {\n  // Don't bother if no value provided\n  if (obj === null || typeof obj === 'undefined') {\n    return;\n  }\n\n  // Force an array if not already something iterable\n  if (typeof obj !== 'object') {\n    /*eslint no-param-reassign:0*/\n    obj = [obj];\n  }\n\n  if (isArray(obj)) {\n    // Iterate over array values\n    for (var i = 0, l = obj.length; i < l; i++) {\n      fn.call(null, obj[i], i, obj);\n    }\n  } else {\n    // Iterate over object keys\n    for (var key in obj) {\n      if (Object.prototype.hasOwnProperty.call(obj, key)) {\n        fn.call(null, obj[key], key, obj);\n      }\n    }\n  }\n}\n\n/**\n * Accepts varargs expecting each argument to be an object, then\n * immutably merges the properties of each object and returns result.\n *\n * When multiple objects contain the same key the later object in\n * the arguments list will take precedence.\n *\n * Example:\n *\n * ```js\n * var result = merge({foo: 123}, {foo: 456});\n * console.log(result.foo); // outputs 456\n * ```\n *\n * @param {Object} obj1 Object to merge\n * @returns {Object} Result of all merge properties\n */\nfunction merge(/* obj1, obj2, obj3, ... */) {\n  var result = {};\n  function assignValue(val, key) {\n    if (isPlainObject(result[key]) && isPlainObject(val)) {\n      result[key] = merge(result[key], val);\n    } else if (isPlainObject(val)) {\n      result[key] = merge({}, val);\n    } else if (isArray(val)) {\n      result[key] = val.slice();\n    } else {\n      result[key] = val;\n    }\n  }\n\n  for (var i = 0, l = arguments.length; i < l; i++) {\n    forEach(arguments[i], assignValue);\n  }\n  return result;\n}\n\n/**\n * Extends object a by mutably adding to it the properties of object b.\n *\n * @param {Object} a The object to be extended\n * @param {Object} b The object to copy properties from\n * @param {Object} thisArg The object to bind function to\n * @return {Object} The resulting value of object a\n */\nfunction extend(a, b, thisArg) {\n  forEach(b, function assignValue(val, key) {\n    if (thisArg && typeof val === 'function') {\n      a[key] = bind(val, thisArg);\n    } else {\n      a[key] = val;\n    }\n  });\n  return a;\n}\n\n/**\n * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)\n *\n * @param {string} content with BOM\n * @return {string} content value without BOM\n */\nfunction stripBOM(content) {\n  if (content.charCodeAt(0) === 0xFEFF) {\n    content = content.slice(1);\n  }\n  return content;\n}\n\n/**\n * Inherit the prototype methods from one constructor into another\n * @param {function} constructor\n * @param {function} superConstructor\n * @param {object} [props]\n * @param {object} [descriptors]\n */\n\nfunction inherits(constructor, superConstructor, props, descriptors) {\n  constructor.prototype = Object.create(superConstructor.prototype, descriptors);\n  constructor.prototype.constructor = constructor;\n  props && Object.assign(constructor.prototype, props);\n}\n\n/**\n * Resolve object with deep prototype chain to a flat object\n * @param {Object} sourceObj source object\n * @param {Object} [destObj]\n * @param {Function} [filter]\n * @returns {Object}\n */\n\nfunction toFlatObject(sourceObj, destObj, filter) {\n  var props;\n  var i;\n  var prop;\n  var merged = {};\n\n  destObj = destObj || {};\n\n  do {\n    props = Object.getOwnPropertyNames(sourceObj);\n    i = props.length;\n    while (i-- > 0) {\n      prop = props[i];\n      if (!merged[prop]) {\n        destObj[prop] = sourceObj[prop];\n        merged[prop] = true;\n      }\n    }\n    sourceObj = Object.getPrototypeOf(sourceObj);\n  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);\n\n  return destObj;\n}\n\n/*\n * determines whether a string ends with the characters of a specified string\n * @param {String} str\n * @param {String} searchString\n * @param {Number} [position= 0]\n * @returns {boolean}\n */\nfunction endsWith(str, searchString, position) {\n  str = String(str);\n  if (position === undefined || position > str.length) {\n    position = str.length;\n  }\n  position -= searchString.length;\n  var lastIndex = str.indexOf(searchString, position);\n  return lastIndex !== -1 && lastIndex === position;\n}\n\n\n/**\n * Returns new array from array like object\n * @param {*} [thing]\n * @returns {Array}\n */\nfunction toArray(thing) {\n  if (!thing) return null;\n  var i = thing.length;\n  if (isUndefined(i)) return null;\n  var arr = new Array(i);\n  while (i-- > 0) {\n    arr[i] = thing[i];\n  }\n  return arr;\n}\n\n// eslint-disable-next-line func-names\nvar isTypedArray = (function(TypedArray) {\n  // eslint-disable-next-line func-names\n  return function(thing) {\n    return TypedArray && thing instanceof TypedArray;\n  };\n})(typeof Uint8Array !== 'undefined' && Object.getPrototypeOf(Uint8Array));\n\nmodule.exports = {\n  isArray: isArray,\n  isArrayBuffer: isArrayBuffer,\n  isBuffer: isBuffer,\n  isFormData: isFormData,\n  isArrayBufferView: isArrayBufferView,\n  isString: isString,\n  isNumber: isNumber,\n  isObject: isObject,\n  isPlainObject: isPlainObject,\n  isUndefined: isUndefined,\n  isDate: isDate,\n  isFile: isFile,\n  isBlob: isBlob,\n  isFunction: isFunction,\n  isStream: isStream,\n  isURLSearchParams: isURLSearchParams,\n  isStandardBrowserEnv: isStandardBrowserEnv,\n  forEach: forEach,\n  merge: merge,\n  extend: extend,\n  trim: trim,\n  stripBOM: stripBOM,\n  inherits: inherits,\n  toFlatObject: toFlatObject,\n  kindOf: kindOf,\n  kindOfTest: kindOfTest,\n  endsWith: endsWith,\n  toArray: toArray,\n  isTypedArray: isTypedArray,\n  isFileList: isFileList\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/axios/lib/utils.js?");

/***/ }),

/***/ "../web/node_modules/combined-stream/lib/combined_stream.js":
/*!******************************************************************!*\
  !*** ../web/node_modules/combined-stream/lib/combined_stream.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var util = __webpack_require__(/*! util */ \"util\");\nvar Stream = (__webpack_require__(/*! stream */ \"stream\").Stream);\nvar DelayedStream = __webpack_require__(/*! delayed-stream */ \"../web/node_modules/delayed-stream/lib/delayed_stream.js\");\n\nmodule.exports = CombinedStream;\nfunction CombinedStream() {\n  this.writable = false;\n  this.readable = true;\n  this.dataSize = 0;\n  this.maxDataSize = 2 * 1024 * 1024;\n  this.pauseStreams = true;\n\n  this._released = false;\n  this._streams = [];\n  this._currentStream = null;\n  this._insideLoop = false;\n  this._pendingNext = false;\n}\nutil.inherits(CombinedStream, Stream);\n\nCombinedStream.create = function(options) {\n  var combinedStream = new this();\n\n  options = options || {};\n  for (var option in options) {\n    combinedStream[option] = options[option];\n  }\n\n  return combinedStream;\n};\n\nCombinedStream.isStreamLike = function(stream) {\n  return (typeof stream !== 'function')\n    && (typeof stream !== 'string')\n    && (typeof stream !== 'boolean')\n    && (typeof stream !== 'number')\n    && (!Buffer.isBuffer(stream));\n};\n\nCombinedStream.prototype.append = function(stream) {\n  var isStreamLike = CombinedStream.isStreamLike(stream);\n\n  if (isStreamLike) {\n    if (!(stream instanceof DelayedStream)) {\n      var newStream = DelayedStream.create(stream, {\n        maxDataSize: Infinity,\n        pauseStream: this.pauseStreams,\n      });\n      stream.on('data', this._checkDataSize.bind(this));\n      stream = newStream;\n    }\n\n    this._handleErrors(stream);\n\n    if (this.pauseStreams) {\n      stream.pause();\n    }\n  }\n\n  this._streams.push(stream);\n  return this;\n};\n\nCombinedStream.prototype.pipe = function(dest, options) {\n  Stream.prototype.pipe.call(this, dest, options);\n  this.resume();\n  return dest;\n};\n\nCombinedStream.prototype._getNext = function() {\n  this._currentStream = null;\n\n  if (this._insideLoop) {\n    this._pendingNext = true;\n    return; // defer call\n  }\n\n  this._insideLoop = true;\n  try {\n    do {\n      this._pendingNext = false;\n      this._realGetNext();\n    } while (this._pendingNext);\n  } finally {\n    this._insideLoop = false;\n  }\n};\n\nCombinedStream.prototype._realGetNext = function() {\n  var stream = this._streams.shift();\n\n\n  if (typeof stream == 'undefined') {\n    this.end();\n    return;\n  }\n\n  if (typeof stream !== 'function') {\n    this._pipeNext(stream);\n    return;\n  }\n\n  var getStream = stream;\n  getStream(function(stream) {\n    var isStreamLike = CombinedStream.isStreamLike(stream);\n    if (isStreamLike) {\n      stream.on('data', this._checkDataSize.bind(this));\n      this._handleErrors(stream);\n    }\n\n    this._pipeNext(stream);\n  }.bind(this));\n};\n\nCombinedStream.prototype._pipeNext = function(stream) {\n  this._currentStream = stream;\n\n  var isStreamLike = CombinedStream.isStreamLike(stream);\n  if (isStreamLike) {\n    stream.on('end', this._getNext.bind(this));\n    stream.pipe(this, {end: false});\n    return;\n  }\n\n  var value = stream;\n  this.write(value);\n  this._getNext();\n};\n\nCombinedStream.prototype._handleErrors = function(stream) {\n  var self = this;\n  stream.on('error', function(err) {\n    self._emitError(err);\n  });\n};\n\nCombinedStream.prototype.write = function(data) {\n  this.emit('data', data);\n};\n\nCombinedStream.prototype.pause = function() {\n  if (!this.pauseStreams) {\n    return;\n  }\n\n  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.pause) == 'function') this._currentStream.pause();\n  this.emit('pause');\n};\n\nCombinedStream.prototype.resume = function() {\n  if (!this._released) {\n    this._released = true;\n    this.writable = true;\n    this._getNext();\n  }\n\n  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.resume) == 'function') this._currentStream.resume();\n  this.emit('resume');\n};\n\nCombinedStream.prototype.end = function() {\n  this._reset();\n  this.emit('end');\n};\n\nCombinedStream.prototype.destroy = function() {\n  this._reset();\n  this.emit('close');\n};\n\nCombinedStream.prototype._reset = function() {\n  this.writable = false;\n  this._streams = [];\n  this._currentStream = null;\n};\n\nCombinedStream.prototype._checkDataSize = function() {\n  this._updateDataSize();\n  if (this.dataSize <= this.maxDataSize) {\n    return;\n  }\n\n  var message =\n    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';\n  this._emitError(new Error(message));\n};\n\nCombinedStream.prototype._updateDataSize = function() {\n  this.dataSize = 0;\n\n  var self = this;\n  this._streams.forEach(function(stream) {\n    if (!stream.dataSize) {\n      return;\n    }\n\n    self.dataSize += stream.dataSize;\n  });\n\n  if (this._currentStream && this._currentStream.dataSize) {\n    this.dataSize += this._currentStream.dataSize;\n  }\n};\n\nCombinedStream.prototype._emitError = function(err) {\n  this._reset();\n  this.emit('error', err);\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/combined-stream/lib/combined_stream.js?");

/***/ }),

/***/ "../web/node_modules/delayed-stream/lib/delayed_stream.js":
/*!****************************************************************!*\
  !*** ../web/node_modules/delayed-stream/lib/delayed_stream.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Stream = (__webpack_require__(/*! stream */ \"stream\").Stream);\nvar util = __webpack_require__(/*! util */ \"util\");\n\nmodule.exports = DelayedStream;\nfunction DelayedStream() {\n  this.source = null;\n  this.dataSize = 0;\n  this.maxDataSize = 1024 * 1024;\n  this.pauseStream = true;\n\n  this._maxDataSizeExceeded = false;\n  this._released = false;\n  this._bufferedEvents = [];\n}\nutil.inherits(DelayedStream, Stream);\n\nDelayedStream.create = function(source, options) {\n  var delayedStream = new this();\n\n  options = options || {};\n  for (var option in options) {\n    delayedStream[option] = options[option];\n  }\n\n  delayedStream.source = source;\n\n  var realEmit = source.emit;\n  source.emit = function() {\n    delayedStream._handleEmit(arguments);\n    return realEmit.apply(source, arguments);\n  };\n\n  source.on('error', function() {});\n  if (delayedStream.pauseStream) {\n    source.pause();\n  }\n\n  return delayedStream;\n};\n\nObject.defineProperty(DelayedStream.prototype, 'readable', {\n  configurable: true,\n  enumerable: true,\n  get: function() {\n    return this.source.readable;\n  }\n});\n\nDelayedStream.prototype.setEncoding = function() {\n  return this.source.setEncoding.apply(this.source, arguments);\n};\n\nDelayedStream.prototype.resume = function() {\n  if (!this._released) {\n    this.release();\n  }\n\n  this.source.resume();\n};\n\nDelayedStream.prototype.pause = function() {\n  this.source.pause();\n};\n\nDelayedStream.prototype.release = function() {\n  this._released = true;\n\n  this._bufferedEvents.forEach(function(args) {\n    this.emit.apply(this, args);\n  }.bind(this));\n  this._bufferedEvents = [];\n};\n\nDelayedStream.prototype.pipe = function() {\n  var r = Stream.prototype.pipe.apply(this, arguments);\n  this.resume();\n  return r;\n};\n\nDelayedStream.prototype._handleEmit = function(args) {\n  if (this._released) {\n    this.emit.apply(this, args);\n    return;\n  }\n\n  if (args[0] === 'data') {\n    this.dataSize += args[1].length;\n    this._checkIfMaxDataSizeExceeded();\n  }\n\n  this._bufferedEvents.push(args);\n};\n\nDelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {\n  if (this._maxDataSizeExceeded) {\n    return;\n  }\n\n  if (this.dataSize <= this.maxDataSize) {\n    return;\n  }\n\n  this._maxDataSizeExceeded = true;\n  var message =\n    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.'\n  this.emit('error', new Error(message));\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/delayed-stream/lib/delayed_stream.js?");

/***/ }),

/***/ "../web/node_modules/follow-redirects/debug.js":
/*!*****************************************************!*\
  !*** ../web/node_modules/follow-redirects/debug.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var debug;\n\nmodule.exports = function () {\n  if (!debug) {\n    try {\n      /* eslint global-require: off */\n      debug = __webpack_require__(/*! debug */ \"debug\")(\"follow-redirects\");\n    }\n    catch (error) { /* */ }\n    if (typeof debug !== \"function\") {\n      debug = function () { /* */ };\n    }\n  }\n  debug.apply(null, arguments);\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/follow-redirects/debug.js?");

/***/ }),

/***/ "../web/node_modules/follow-redirects/index.js":
/*!*****************************************************!*\
  !*** ../web/node_modules/follow-redirects/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var url = __webpack_require__(/*! url */ \"url\");\nvar URL = url.URL;\nvar http = __webpack_require__(/*! http */ \"http\");\nvar https = __webpack_require__(/*! https */ \"https\");\nvar Writable = (__webpack_require__(/*! stream */ \"stream\").Writable);\nvar assert = __webpack_require__(/*! assert */ \"assert\");\nvar debug = __webpack_require__(/*! ./debug */ \"../web/node_modules/follow-redirects/debug.js\");\n\n// Create handlers that pass events from native requests\nvar events = [\"abort\", \"aborted\", \"connect\", \"error\", \"socket\", \"timeout\"];\nvar eventHandlers = Object.create(null);\nevents.forEach(function (event) {\n  eventHandlers[event] = function (arg1, arg2, arg3) {\n    this._redirectable.emit(event, arg1, arg2, arg3);\n  };\n});\n\n// Error types with codes\nvar RedirectionError = createErrorType(\n  \"ERR_FR_REDIRECTION_FAILURE\",\n  \"Redirected request failed\"\n);\nvar TooManyRedirectsError = createErrorType(\n  \"ERR_FR_TOO_MANY_REDIRECTS\",\n  \"Maximum number of redirects exceeded\"\n);\nvar MaxBodyLengthExceededError = createErrorType(\n  \"ERR_FR_MAX_BODY_LENGTH_EXCEEDED\",\n  \"Request body larger than maxBodyLength limit\"\n);\nvar WriteAfterEndError = createErrorType(\n  \"ERR_STREAM_WRITE_AFTER_END\",\n  \"write after end\"\n);\n\n// An HTTP(S) request that can be redirected\nfunction RedirectableRequest(options, responseCallback) {\n  // Initialize the request\n  Writable.call(this);\n  this._sanitizeOptions(options);\n  this._options = options;\n  this._ended = false;\n  this._ending = false;\n  this._redirectCount = 0;\n  this._redirects = [];\n  this._requestBodyLength = 0;\n  this._requestBodyBuffers = [];\n\n  // Attach a callback if passed\n  if (responseCallback) {\n    this.on(\"response\", responseCallback);\n  }\n\n  // React to responses of native requests\n  var self = this;\n  this._onNativeResponse = function (response) {\n    self._processResponse(response);\n  };\n\n  // Perform the first request\n  this._performRequest();\n}\nRedirectableRequest.prototype = Object.create(Writable.prototype);\n\nRedirectableRequest.prototype.abort = function () {\n  abortRequest(this._currentRequest);\n  this.emit(\"abort\");\n};\n\n// Writes buffered data to the current native request\nRedirectableRequest.prototype.write = function (data, encoding, callback) {\n  // Writing is not allowed if end has been called\n  if (this._ending) {\n    throw new WriteAfterEndError();\n  }\n\n  // Validate input and shift parameters if necessary\n  if (!(typeof data === \"string\" || typeof data === \"object\" && (\"length\" in data))) {\n    throw new TypeError(\"data should be a string, Buffer or Uint8Array\");\n  }\n  if (typeof encoding === \"function\") {\n    callback = encoding;\n    encoding = null;\n  }\n\n  // Ignore empty buffers, since writing them doesn't invoke the callback\n  // https://github.com/nodejs/node/issues/22066\n  if (data.length === 0) {\n    if (callback) {\n      callback();\n    }\n    return;\n  }\n  // Only write when we don't exceed the maximum body length\n  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {\n    this._requestBodyLength += data.length;\n    this._requestBodyBuffers.push({ data: data, encoding: encoding });\n    this._currentRequest.write(data, encoding, callback);\n  }\n  // Error when we exceed the maximum body length\n  else {\n    this.emit(\"error\", new MaxBodyLengthExceededError());\n    this.abort();\n  }\n};\n\n// Ends the current native request\nRedirectableRequest.prototype.end = function (data, encoding, callback) {\n  // Shift parameters if necessary\n  if (typeof data === \"function\") {\n    callback = data;\n    data = encoding = null;\n  }\n  else if (typeof encoding === \"function\") {\n    callback = encoding;\n    encoding = null;\n  }\n\n  // Write data if needed and end\n  if (!data) {\n    this._ended = this._ending = true;\n    this._currentRequest.end(null, null, callback);\n  }\n  else {\n    var self = this;\n    var currentRequest = this._currentRequest;\n    this.write(data, encoding, function () {\n      self._ended = true;\n      currentRequest.end(null, null, callback);\n    });\n    this._ending = true;\n  }\n};\n\n// Sets a header value on the current native request\nRedirectableRequest.prototype.setHeader = function (name, value) {\n  this._options.headers[name] = value;\n  this._currentRequest.setHeader(name, value);\n};\n\n// Clears a header value on the current native request\nRedirectableRequest.prototype.removeHeader = function (name) {\n  delete this._options.headers[name];\n  this._currentRequest.removeHeader(name);\n};\n\n// Global timeout for all underlying requests\nRedirectableRequest.prototype.setTimeout = function (msecs, callback) {\n  var self = this;\n\n  // Destroys the socket on timeout\n  function destroyOnTimeout(socket) {\n    socket.setTimeout(msecs);\n    socket.removeListener(\"timeout\", socket.destroy);\n    socket.addListener(\"timeout\", socket.destroy);\n  }\n\n  // Sets up a timer to trigger a timeout event\n  function startTimer(socket) {\n    if (self._timeout) {\n      clearTimeout(self._timeout);\n    }\n    self._timeout = setTimeout(function () {\n      self.emit(\"timeout\");\n      clearTimer();\n    }, msecs);\n    destroyOnTimeout(socket);\n  }\n\n  // Stops a timeout from triggering\n  function clearTimer() {\n    // Clear the timeout\n    if (self._timeout) {\n      clearTimeout(self._timeout);\n      self._timeout = null;\n    }\n\n    // Clean up all attached listeners\n    self.removeListener(\"abort\", clearTimer);\n    self.removeListener(\"error\", clearTimer);\n    self.removeListener(\"response\", clearTimer);\n    if (callback) {\n      self.removeListener(\"timeout\", callback);\n    }\n    if (!self.socket) {\n      self._currentRequest.removeListener(\"socket\", startTimer);\n    }\n  }\n\n  // Attach callback if passed\n  if (callback) {\n    this.on(\"timeout\", callback);\n  }\n\n  // Start the timer if or when the socket is opened\n  if (this.socket) {\n    startTimer(this.socket);\n  }\n  else {\n    this._currentRequest.once(\"socket\", startTimer);\n  }\n\n  // Clean up on events\n  this.on(\"socket\", destroyOnTimeout);\n  this.on(\"abort\", clearTimer);\n  this.on(\"error\", clearTimer);\n  this.on(\"response\", clearTimer);\n\n  return this;\n};\n\n// Proxy all other public ClientRequest methods\n[\n  \"flushHeaders\", \"getHeader\",\n  \"setNoDelay\", \"setSocketKeepAlive\",\n].forEach(function (method) {\n  RedirectableRequest.prototype[method] = function (a, b) {\n    return this._currentRequest[method](a, b);\n  };\n});\n\n// Proxy all public ClientRequest properties\n[\"aborted\", \"connection\", \"socket\"].forEach(function (property) {\n  Object.defineProperty(RedirectableRequest.prototype, property, {\n    get: function () { return this._currentRequest[property]; },\n  });\n});\n\nRedirectableRequest.prototype._sanitizeOptions = function (options) {\n  // Ensure headers are always present\n  if (!options.headers) {\n    options.headers = {};\n  }\n\n  // Since http.request treats host as an alias of hostname,\n  // but the url module interprets host as hostname plus port,\n  // eliminate the host property to avoid confusion.\n  if (options.host) {\n    // Use hostname if set, because it has precedence\n    if (!options.hostname) {\n      options.hostname = options.host;\n    }\n    delete options.host;\n  }\n\n  // Complete the URL object when necessary\n  if (!options.pathname && options.path) {\n    var searchPos = options.path.indexOf(\"?\");\n    if (searchPos < 0) {\n      options.pathname = options.path;\n    }\n    else {\n      options.pathname = options.path.substring(0, searchPos);\n      options.search = options.path.substring(searchPos);\n    }\n  }\n};\n\n\n// Executes the next native request (initial or redirect)\nRedirectableRequest.prototype._performRequest = function () {\n  // Load the native protocol\n  var protocol = this._options.protocol;\n  var nativeProtocol = this._options.nativeProtocols[protocol];\n  if (!nativeProtocol) {\n    this.emit(\"error\", new TypeError(\"Unsupported protocol \" + protocol));\n    return;\n  }\n\n  // If specified, use the agent corresponding to the protocol\n  // (HTTP and HTTPS use different types of agents)\n  if (this._options.agents) {\n    var scheme = protocol.slice(0, -1);\n    this._options.agent = this._options.agents[scheme];\n  }\n\n  // Create the native request and set up its event handlers\n  var request = this._currentRequest =\n        nativeProtocol.request(this._options, this._onNativeResponse);\n  request._redirectable = this;\n  for (var event of events) {\n    request.on(event, eventHandlers[event]);\n  }\n\n  // RFC7230§5.3.1: When making a request directly to an origin server, […]\n  // a client MUST send only the absolute path […] as the request-target.\n  this._currentUrl = /^\\//.test(this._options.path) ?\n    url.format(this._options) :\n    // When making a request to a proxy, […]\n    // a client MUST send the target URI in absolute-form […].\n    this._currentUrl = this._options.path;\n\n  // End a redirected request\n  // (The first request must be ended explicitly with RedirectableRequest#end)\n  if (this._isRedirect) {\n    // Write the request entity and end\n    var i = 0;\n    var self = this;\n    var buffers = this._requestBodyBuffers;\n    (function writeNext(error) {\n      // Only write if this request has not been redirected yet\n      /* istanbul ignore else */\n      if (request === self._currentRequest) {\n        // Report any write errors\n        /* istanbul ignore if */\n        if (error) {\n          self.emit(\"error\", error);\n        }\n        // Write the next buffer if there are still left\n        else if (i < buffers.length) {\n          var buffer = buffers[i++];\n          /* istanbul ignore else */\n          if (!request.finished) {\n            request.write(buffer.data, buffer.encoding, writeNext);\n          }\n        }\n        // End the request if `end` has been called on us\n        else if (self._ended) {\n          request.end();\n        }\n      }\n    }());\n  }\n};\n\n// Processes a response from the current native request\nRedirectableRequest.prototype._processResponse = function (response) {\n  // Store the redirected response\n  var statusCode = response.statusCode;\n  if (this._options.trackRedirects) {\n    this._redirects.push({\n      url: this._currentUrl,\n      headers: response.headers,\n      statusCode: statusCode,\n    });\n  }\n\n  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates\n  // that further action needs to be taken by the user agent in order to\n  // fulfill the request. If a Location header field is provided,\n  // the user agent MAY automatically redirect its request to the URI\n  // referenced by the Location field value,\n  // even if the specific status code is not understood.\n\n  // If the response is not a redirect; return it as-is\n  var location = response.headers.location;\n  if (!location || this._options.followRedirects === false ||\n      statusCode < 300 || statusCode >= 400) {\n    response.responseUrl = this._currentUrl;\n    response.redirects = this._redirects;\n    this.emit(\"response\", response);\n\n    // Clean up\n    this._requestBodyBuffers = [];\n    return;\n  }\n\n  // The response is a redirect, so abort the current request\n  abortRequest(this._currentRequest);\n  // Discard the remainder of the response to avoid waiting for data\n  response.destroy();\n\n  // RFC7231§6.4: A client SHOULD detect and intervene\n  // in cyclical redirections (i.e., \"infinite\" redirection loops).\n  if (++this._redirectCount > this._options.maxRedirects) {\n    this.emit(\"error\", new TooManyRedirectsError());\n    return;\n  }\n\n  // Store the request headers if applicable\n  var requestHeaders;\n  var beforeRedirect = this._options.beforeRedirect;\n  if (beforeRedirect) {\n    requestHeaders = Object.assign({\n      // The Host header was set by nativeProtocol.request\n      Host: response.req.getHeader(\"host\"),\n    }, this._options.headers);\n  }\n\n  // RFC7231§6.4: Automatic redirection needs to done with\n  // care for methods not known to be safe, […]\n  // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change\n  // the request method from POST to GET for the subsequent request.\n  var method = this._options.method;\n  if ((statusCode === 301 || statusCode === 302) && this._options.method === \"POST\" ||\n      // RFC7231§6.4.4: The 303 (See Other) status code indicates that\n      // the server is redirecting the user agent to a different resource […]\n      // A user agent can perform a retrieval request targeting that URI\n      // (a GET or HEAD request if using HTTP) […]\n      (statusCode === 303) && !/^(?:GET|HEAD)$/.test(this._options.method)) {\n    this._options.method = \"GET\";\n    // Drop a possible entity and headers related to it\n    this._requestBodyBuffers = [];\n    removeMatchingHeaders(/^content-/i, this._options.headers);\n  }\n\n  // Drop the Host header, as the redirect might lead to a different host\n  var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);\n\n  // If the redirect is relative, carry over the host of the last request\n  var currentUrlParts = url.parse(this._currentUrl);\n  var currentHost = currentHostHeader || currentUrlParts.host;\n  var currentUrl = /^\\w+:/.test(location) ? this._currentUrl :\n    url.format(Object.assign(currentUrlParts, { host: currentHost }));\n\n  // Determine the URL of the redirection\n  var redirectUrl;\n  try {\n    redirectUrl = url.resolve(currentUrl, location);\n  }\n  catch (cause) {\n    this.emit(\"error\", new RedirectionError(cause));\n    return;\n  }\n\n  // Create the redirected request\n  debug(\"redirecting to\", redirectUrl);\n  this._isRedirect = true;\n  var redirectUrlParts = url.parse(redirectUrl);\n  Object.assign(this._options, redirectUrlParts);\n\n  // Drop confidential headers when redirecting to a less secure protocol\n  // or to a different domain that is not a superdomain\n  if (redirectUrlParts.protocol !== currentUrlParts.protocol &&\n     redirectUrlParts.protocol !== \"https:\" ||\n     redirectUrlParts.host !== currentHost &&\n     !isSubdomain(redirectUrlParts.host, currentHost)) {\n    removeMatchingHeaders(/^(?:authorization|cookie)$/i, this._options.headers);\n  }\n\n  // Evaluate the beforeRedirect callback\n  if (typeof beforeRedirect === \"function\") {\n    var responseDetails = {\n      headers: response.headers,\n      statusCode: statusCode,\n    };\n    var requestDetails = {\n      url: currentUrl,\n      method: method,\n      headers: requestHeaders,\n    };\n    try {\n      beforeRedirect(this._options, responseDetails, requestDetails);\n    }\n    catch (err) {\n      this.emit(\"error\", err);\n      return;\n    }\n    this._sanitizeOptions(this._options);\n  }\n\n  // Perform the redirected request\n  try {\n    this._performRequest();\n  }\n  catch (cause) {\n    this.emit(\"error\", new RedirectionError(cause));\n  }\n};\n\n// Wraps the key/value object of protocols with redirect functionality\nfunction wrap(protocols) {\n  // Default settings\n  var exports = {\n    maxRedirects: 21,\n    maxBodyLength: 10 * 1024 * 1024,\n  };\n\n  // Wrap each protocol\n  var nativeProtocols = {};\n  Object.keys(protocols).forEach(function (scheme) {\n    var protocol = scheme + \":\";\n    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];\n    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);\n\n    // Executes a request, following redirects\n    function request(input, options, callback) {\n      // Parse parameters\n      if (typeof input === \"string\") {\n        var urlStr = input;\n        try {\n          input = urlToOptions(new URL(urlStr));\n        }\n        catch (err) {\n          /* istanbul ignore next */\n          input = url.parse(urlStr);\n        }\n      }\n      else if (URL && (input instanceof URL)) {\n        input = urlToOptions(input);\n      }\n      else {\n        callback = options;\n        options = input;\n        input = { protocol: protocol };\n      }\n      if (typeof options === \"function\") {\n        callback = options;\n        options = null;\n      }\n\n      // Set defaults\n      options = Object.assign({\n        maxRedirects: exports.maxRedirects,\n        maxBodyLength: exports.maxBodyLength,\n      }, input, options);\n      options.nativeProtocols = nativeProtocols;\n\n      assert.equal(options.protocol, protocol, \"protocol mismatch\");\n      debug(\"options\", options);\n      return new RedirectableRequest(options, callback);\n    }\n\n    // Executes a GET request, following redirects\n    function get(input, options, callback) {\n      var wrappedRequest = wrappedProtocol.request(input, options, callback);\n      wrappedRequest.end();\n      return wrappedRequest;\n    }\n\n    // Expose the properties on the wrapped protocol\n    Object.defineProperties(wrappedProtocol, {\n      request: { value: request, configurable: true, enumerable: true, writable: true },\n      get: { value: get, configurable: true, enumerable: true, writable: true },\n    });\n  });\n  return exports;\n}\n\n/* istanbul ignore next */\nfunction noop() { /* empty */ }\n\n// from https://github.com/nodejs/node/blob/master/lib/internal/url.js\nfunction urlToOptions(urlObject) {\n  var options = {\n    protocol: urlObject.protocol,\n    hostname: urlObject.hostname.startsWith(\"[\") ?\n      /* istanbul ignore next */\n      urlObject.hostname.slice(1, -1) :\n      urlObject.hostname,\n    hash: urlObject.hash,\n    search: urlObject.search,\n    pathname: urlObject.pathname,\n    path: urlObject.pathname + urlObject.search,\n    href: urlObject.href,\n  };\n  if (urlObject.port !== \"\") {\n    options.port = Number(urlObject.port);\n  }\n  return options;\n}\n\nfunction removeMatchingHeaders(regex, headers) {\n  var lastValue;\n  for (var header in headers) {\n    if (regex.test(header)) {\n      lastValue = headers[header];\n      delete headers[header];\n    }\n  }\n  return (lastValue === null || typeof lastValue === \"undefined\") ?\n    undefined : String(lastValue).trim();\n}\n\nfunction createErrorType(code, defaultMessage) {\n  function CustomError(cause) {\n    Error.captureStackTrace(this, this.constructor);\n    if (!cause) {\n      this.message = defaultMessage;\n    }\n    else {\n      this.message = defaultMessage + \": \" + cause.message;\n      this.cause = cause;\n    }\n  }\n  CustomError.prototype = new Error();\n  CustomError.prototype.constructor = CustomError;\n  CustomError.prototype.name = \"Error [\" + code + \"]\";\n  CustomError.prototype.code = code;\n  return CustomError;\n}\n\nfunction abortRequest(request) {\n  for (var event of events) {\n    request.removeListener(event, eventHandlers[event]);\n  }\n  request.on(\"error\", noop);\n  request.abort();\n}\n\nfunction isSubdomain(subdomain, domain) {\n  const dot = subdomain.length - domain.length - 1;\n  return dot > 0 && subdomain[dot] === \".\" && subdomain.endsWith(domain);\n}\n\n// Exports\nmodule.exports = wrap({ http: http, https: https });\nmodule.exports.wrap = wrap;\n\n\n//# sourceURL=webpack://server/../web/node_modules/follow-redirects/index.js?");

/***/ }),

/***/ "../web/node_modules/form-data/lib/form_data.js":
/*!******************************************************!*\
  !*** ../web/node_modules/form-data/lib/form_data.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var CombinedStream = __webpack_require__(/*! combined-stream */ \"../web/node_modules/combined-stream/lib/combined_stream.js\");\nvar util = __webpack_require__(/*! util */ \"util\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar http = __webpack_require__(/*! http */ \"http\");\nvar https = __webpack_require__(/*! https */ \"https\");\nvar parseUrl = (__webpack_require__(/*! url */ \"url\").parse);\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar Stream = (__webpack_require__(/*! stream */ \"stream\").Stream);\nvar mime = __webpack_require__(/*! mime-types */ \"mime-types\");\nvar asynckit = __webpack_require__(/*! asynckit */ \"../web/node_modules/asynckit/index.js\");\nvar populate = __webpack_require__(/*! ./populate.js */ \"../web/node_modules/form-data/lib/populate.js\");\n\n// Public API\nmodule.exports = FormData;\n\n// make it a Stream\nutil.inherits(FormData, CombinedStream);\n\n/**\n * Create readable \"multipart/form-data\" streams.\n * Can be used to submit forms\n * and file uploads to other web applications.\n *\n * @constructor\n * @param {Object} options - Properties to be added/overriden for FormData and CombinedStream\n */\nfunction FormData(options) {\n  if (!(this instanceof FormData)) {\n    return new FormData(options);\n  }\n\n  this._overheadLength = 0;\n  this._valueLength = 0;\n  this._valuesToMeasure = [];\n\n  CombinedStream.call(this);\n\n  options = options || {};\n  for (var option in options) {\n    this[option] = options[option];\n  }\n}\n\nFormData.LINE_BREAK = '\\r\\n';\nFormData.DEFAULT_CONTENT_TYPE = 'application/octet-stream';\n\nFormData.prototype.append = function(field, value, options) {\n\n  options = options || {};\n\n  // allow filename as single option\n  if (typeof options == 'string') {\n    options = {filename: options};\n  }\n\n  var append = CombinedStream.prototype.append.bind(this);\n\n  // all that streamy business can't handle numbers\n  if (typeof value == 'number') {\n    value = '' + value;\n  }\n\n  // https://github.com/felixge/node-form-data/issues/38\n  if (util.isArray(value)) {\n    // Please convert your array into string\n    // the way web server expects it\n    this._error(new Error('Arrays are not supported.'));\n    return;\n  }\n\n  var header = this._multiPartHeader(field, value, options);\n  var footer = this._multiPartFooter();\n\n  append(header);\n  append(value);\n  append(footer);\n\n  // pass along options.knownLength\n  this._trackLength(header, value, options);\n};\n\nFormData.prototype._trackLength = function(header, value, options) {\n  var valueLength = 0;\n\n  // used w/ getLengthSync(), when length is known.\n  // e.g. for streaming directly from a remote server,\n  // w/ a known file a size, and not wanting to wait for\n  // incoming file to finish to get its size.\n  if (options.knownLength != null) {\n    valueLength += +options.knownLength;\n  } else if (Buffer.isBuffer(value)) {\n    valueLength = value.length;\n  } else if (typeof value === 'string') {\n    valueLength = Buffer.byteLength(value);\n  }\n\n  this._valueLength += valueLength;\n\n  // @check why add CRLF? does this account for custom/multiple CRLFs?\n  this._overheadLength +=\n    Buffer.byteLength(header) +\n    FormData.LINE_BREAK.length;\n\n  // empty or either doesn't have path or not an http response or not a stream\n  if (!value || ( !value.path && !(value.readable && value.hasOwnProperty('httpVersion')) && !(value instanceof Stream))) {\n    return;\n  }\n\n  // no need to bother with the length\n  if (!options.knownLength) {\n    this._valuesToMeasure.push(value);\n  }\n};\n\nFormData.prototype._lengthRetriever = function(value, callback) {\n\n  if (value.hasOwnProperty('fd')) {\n\n    // take read range into a account\n    // `end` = Infinity –> read file till the end\n    //\n    // TODO: Looks like there is bug in Node fs.createReadStream\n    // it doesn't respect `end` options without `start` options\n    // Fix it when node fixes it.\n    // https://github.com/joyent/node/issues/7819\n    if (value.end != undefined && value.end != Infinity && value.start != undefined) {\n\n      // when end specified\n      // no need to calculate range\n      // inclusive, starts with 0\n      callback(null, value.end + 1 - (value.start ? value.start : 0));\n\n    // not that fast snoopy\n    } else {\n      // still need to fetch file size from fs\n      fs.stat(value.path, function(err, stat) {\n\n        var fileSize;\n\n        if (err) {\n          callback(err);\n          return;\n        }\n\n        // update final size based on the range options\n        fileSize = stat.size - (value.start ? value.start : 0);\n        callback(null, fileSize);\n      });\n    }\n\n  // or http response\n  } else if (value.hasOwnProperty('httpVersion')) {\n    callback(null, +value.headers['content-length']);\n\n  // or request stream http://github.com/mikeal/request\n  } else if (value.hasOwnProperty('httpModule')) {\n    // wait till response come back\n    value.on('response', function(response) {\n      value.pause();\n      callback(null, +response.headers['content-length']);\n    });\n    value.resume();\n\n  // something else\n  } else {\n    callback('Unknown stream');\n  }\n};\n\nFormData.prototype._multiPartHeader = function(field, value, options) {\n  // custom header specified (as string)?\n  // it becomes responsible for boundary\n  // (e.g. to handle extra CRLFs on .NET servers)\n  if (typeof options.header == 'string') {\n    return options.header;\n  }\n\n  var contentDisposition = this._getContentDisposition(value, options);\n  var contentType = this._getContentType(value, options);\n\n  var contents = '';\n  var headers  = {\n    // add custom disposition as third element or keep it two elements if not\n    'Content-Disposition': ['form-data', 'name=\"' + field + '\"'].concat(contentDisposition || []),\n    // if no content type. allow it to be empty array\n    'Content-Type': [].concat(contentType || [])\n  };\n\n  // allow custom headers.\n  if (typeof options.header == 'object') {\n    populate(headers, options.header);\n  }\n\n  var header;\n  for (var prop in headers) {\n    if (!headers.hasOwnProperty(prop)) continue;\n    header = headers[prop];\n\n    // skip nullish headers.\n    if (header == null) {\n      continue;\n    }\n\n    // convert all headers to arrays.\n    if (!Array.isArray(header)) {\n      header = [header];\n    }\n\n    // add non-empty headers.\n    if (header.length) {\n      contents += prop + ': ' + header.join('; ') + FormData.LINE_BREAK;\n    }\n  }\n\n  return '--' + this.getBoundary() + FormData.LINE_BREAK + contents + FormData.LINE_BREAK;\n};\n\nFormData.prototype._getContentDisposition = function(value, options) {\n\n  var filename\n    , contentDisposition\n    ;\n\n  if (typeof options.filepath === 'string') {\n    // custom filepath for relative paths\n    filename = path.normalize(options.filepath).replace(/\\\\/g, '/');\n  } else if (options.filename || value.name || value.path) {\n    // custom filename take precedence\n    // formidable and the browser add a name property\n    // fs- and request- streams have path property\n    filename = path.basename(options.filename || value.name || value.path);\n  } else if (value.readable && value.hasOwnProperty('httpVersion')) {\n    // or try http response\n    filename = path.basename(value.client._httpMessage.path || '');\n  }\n\n  if (filename) {\n    contentDisposition = 'filename=\"' + filename + '\"';\n  }\n\n  return contentDisposition;\n};\n\nFormData.prototype._getContentType = function(value, options) {\n\n  // use custom content-type above all\n  var contentType = options.contentType;\n\n  // or try `name` from formidable, browser\n  if (!contentType && value.name) {\n    contentType = mime.lookup(value.name);\n  }\n\n  // or try `path` from fs-, request- streams\n  if (!contentType && value.path) {\n    contentType = mime.lookup(value.path);\n  }\n\n  // or if it's http-reponse\n  if (!contentType && value.readable && value.hasOwnProperty('httpVersion')) {\n    contentType = value.headers['content-type'];\n  }\n\n  // or guess it from the filepath or filename\n  if (!contentType && (options.filepath || options.filename)) {\n    contentType = mime.lookup(options.filepath || options.filename);\n  }\n\n  // fallback to the default content type if `value` is not simple value\n  if (!contentType && typeof value == 'object') {\n    contentType = FormData.DEFAULT_CONTENT_TYPE;\n  }\n\n  return contentType;\n};\n\nFormData.prototype._multiPartFooter = function() {\n  return function(next) {\n    var footer = FormData.LINE_BREAK;\n\n    var lastPart = (this._streams.length === 0);\n    if (lastPart) {\n      footer += this._lastBoundary();\n    }\n\n    next(footer);\n  }.bind(this);\n};\n\nFormData.prototype._lastBoundary = function() {\n  return '--' + this.getBoundary() + '--' + FormData.LINE_BREAK;\n};\n\nFormData.prototype.getHeaders = function(userHeaders) {\n  var header;\n  var formHeaders = {\n    'content-type': 'multipart/form-data; boundary=' + this.getBoundary()\n  };\n\n  for (header in userHeaders) {\n    if (userHeaders.hasOwnProperty(header)) {\n      formHeaders[header.toLowerCase()] = userHeaders[header];\n    }\n  }\n\n  return formHeaders;\n};\n\nFormData.prototype.setBoundary = function(boundary) {\n  this._boundary = boundary;\n};\n\nFormData.prototype.getBoundary = function() {\n  if (!this._boundary) {\n    this._generateBoundary();\n  }\n\n  return this._boundary;\n};\n\nFormData.prototype.getBuffer = function() {\n  var dataBuffer = new Buffer.alloc( 0 );\n  var boundary = this.getBoundary();\n\n  // Create the form content. Add Line breaks to the end of data.\n  for (var i = 0, len = this._streams.length; i < len; i++) {\n    if (typeof this._streams[i] !== 'function') {\n\n      // Add content to the buffer.\n      if(Buffer.isBuffer(this._streams[i])) {\n        dataBuffer = Buffer.concat( [dataBuffer, this._streams[i]]);\n      }else {\n        dataBuffer = Buffer.concat( [dataBuffer, Buffer.from(this._streams[i])]);\n      }\n\n      // Add break after content.\n      if (typeof this._streams[i] !== 'string' || this._streams[i].substring( 2, boundary.length + 2 ) !== boundary) {\n        dataBuffer = Buffer.concat( [dataBuffer, Buffer.from(FormData.LINE_BREAK)] );\n      }\n    }\n  }\n\n  // Add the footer and return the Buffer object.\n  return Buffer.concat( [dataBuffer, Buffer.from(this._lastBoundary())] );\n};\n\nFormData.prototype._generateBoundary = function() {\n  // This generates a 50 character boundary similar to those used by Firefox.\n  // They are optimized for boyer-moore parsing.\n  var boundary = '--------------------------';\n  for (var i = 0; i < 24; i++) {\n    boundary += Math.floor(Math.random() * 10).toString(16);\n  }\n\n  this._boundary = boundary;\n};\n\n// Note: getLengthSync DOESN'T calculate streams length\n// As workaround one can calculate file size manually\n// and add it as knownLength option\nFormData.prototype.getLengthSync = function() {\n  var knownLength = this._overheadLength + this._valueLength;\n\n  // Don't get confused, there are 3 \"internal\" streams for each keyval pair\n  // so it basically checks if there is any value added to the form\n  if (this._streams.length) {\n    knownLength += this._lastBoundary().length;\n  }\n\n  // https://github.com/form-data/form-data/issues/40\n  if (!this.hasKnownLength()) {\n    // Some async length retrievers are present\n    // therefore synchronous length calculation is false.\n    // Please use getLength(callback) to get proper length\n    this._error(new Error('Cannot calculate proper length in synchronous way.'));\n  }\n\n  return knownLength;\n};\n\n// Public API to check if length of added values is known\n// https://github.com/form-data/form-data/issues/196\n// https://github.com/form-data/form-data/issues/262\nFormData.prototype.hasKnownLength = function() {\n  var hasKnownLength = true;\n\n  if (this._valuesToMeasure.length) {\n    hasKnownLength = false;\n  }\n\n  return hasKnownLength;\n};\n\nFormData.prototype.getLength = function(cb) {\n  var knownLength = this._overheadLength + this._valueLength;\n\n  if (this._streams.length) {\n    knownLength += this._lastBoundary().length;\n  }\n\n  if (!this._valuesToMeasure.length) {\n    process.nextTick(cb.bind(this, null, knownLength));\n    return;\n  }\n\n  asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {\n    if (err) {\n      cb(err);\n      return;\n    }\n\n    values.forEach(function(length) {\n      knownLength += length;\n    });\n\n    cb(null, knownLength);\n  });\n};\n\nFormData.prototype.submit = function(params, cb) {\n  var request\n    , options\n    , defaults = {method: 'post'}\n    ;\n\n  // parse provided url if it's string\n  // or treat it as options object\n  if (typeof params == 'string') {\n\n    params = parseUrl(params);\n    options = populate({\n      port: params.port,\n      path: params.pathname,\n      host: params.hostname,\n      protocol: params.protocol\n    }, defaults);\n\n  // use custom params\n  } else {\n\n    options = populate(params, defaults);\n    // if no port provided use default one\n    if (!options.port) {\n      options.port = options.protocol == 'https:' ? 443 : 80;\n    }\n  }\n\n  // put that good code in getHeaders to some use\n  options.headers = this.getHeaders(params.headers);\n\n  // https if specified, fallback to http in any other case\n  if (options.protocol == 'https:') {\n    request = https.request(options);\n  } else {\n    request = http.request(options);\n  }\n\n  // get content length and fire away\n  this.getLength(function(err, length) {\n    if (err && err !== 'Unknown stream') {\n      this._error(err);\n      return;\n    }\n\n    // add content length\n    if (length) {\n      request.setHeader('Content-Length', length);\n    }\n\n    this.pipe(request);\n    if (cb) {\n      var onResponse;\n\n      var callback = function (error, responce) {\n        request.removeListener('error', callback);\n        request.removeListener('response', onResponse);\n\n        return cb.call(this, error, responce);\n      };\n\n      onResponse = callback.bind(this, null);\n\n      request.on('error', callback);\n      request.on('response', onResponse);\n    }\n  }.bind(this));\n\n  return request;\n};\n\nFormData.prototype._error = function(err) {\n  if (!this.error) {\n    this.error = err;\n    this.pause();\n    this.emit('error', err);\n  }\n};\n\nFormData.prototype.toString = function () {\n  return '[object FormData]';\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/form-data/lib/form_data.js?");

/***/ }),

/***/ "../web/node_modules/form-data/lib/populate.js":
/*!*****************************************************!*\
  !*** ../web/node_modules/form-data/lib/populate.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("// populates missing values\nmodule.exports = function(dst, src) {\n\n  Object.keys(src).forEach(function(prop)\n  {\n    dst[prop] = dst[prop] || src[prop];\n  });\n\n  return dst;\n};\n\n\n//# sourceURL=webpack://server/../web/node_modules/form-data/lib/populate.js?");

/***/ }),

/***/ "@koa/router":
/*!******************************!*\
  !*** external "@koa/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@koa/router");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("debug");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("koa");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-static");

/***/ }),

/***/ "mime-types":
/*!*****************************!*\
  !*** external "mime-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("mime-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.ts");
/******/ 	
/******/ })()
;