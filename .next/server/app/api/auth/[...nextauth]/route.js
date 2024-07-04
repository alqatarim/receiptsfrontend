"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Fmohammedalqatari%2Freceiptsfrontend%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmohammedalqatari%2Freceiptsfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Fmohammedalqatari%2Freceiptsfrontend%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmohammedalqatari%2Freceiptsfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_mohammedalqatari_receiptsfrontend_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.js */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/mohammedalqatari/receiptsfrontend/src/app/api/auth/[...nextauth]/route.js\",\n    nextConfigOutput,\n    userland: _Users_mohammedalqatari_receiptsfrontend_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRm1vaGFtbWVkYWxxYXRhcmklMkZyZWNlaXB0c2Zyb250ZW5kJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRm1vaGFtbWVkYWxxYXRhcmklMkZyZWNlaXB0c2Zyb250ZW5kJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2dDO0FBQzdHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF0ZXJpby1tdWktcmVhY3QtbmV4dGpzLWFkbWluLXRlbXBsYXRlLz9hMDI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9tb2hhbW1lZGFscWF0YXJpL3JlY2VpcHRzZnJvbnRlbmQvc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9tb2hhbW1lZGFscWF0YXJpL3JlY2VpcHRzZnJvbnRlbmQvc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Fmohammedalqatari%2Freceiptsfrontend%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmohammedalqatari%2Freceiptsfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.js":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/auth */ \"(rsc)/./src/libs/auth.js\");\n// Third-party Imports\n\n// Lib Imports\n\n/*\n * As we do not have backend server, the refresh token feature has not been incorporated into the template.\n * Please refer https://next-auth.js.org/tutorials/refresh-token-rotation link for a reference.\n */ const handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_libs_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQkFBc0I7QUFDVTtBQUVoQyxjQUFjO0FBQzJCO0FBRXpDOzs7Q0FHQyxHQUNELE1BQU1FLFVBQVVGLGdEQUFRQSxDQUFDQyxtREFBV0E7QUFFTSIsInNvdXJjZXMiOlsid2VicGFjazovL21hdGVyaW8tbXVpLXJlYWN0LW5leHRqcy1hZG1pbi10ZW1wbGF0ZS8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcz8yMzJkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXJkLXBhcnR5IEltcG9ydHNcbmltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnXG5cbi8vIExpYiBJbXBvcnRzXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gJ0AvbGlicy9hdXRoJ1xuXG4vKlxuICogQXMgd2UgZG8gbm90IGhhdmUgYmFja2VuZCBzZXJ2ZXIsIHRoZSByZWZyZXNoIHRva2VuIGZlYXR1cmUgaGFzIG5vdCBiZWVuIGluY29ycG9yYXRlZCBpbnRvIHRoZSB0ZW1wbGF0ZS5cbiAqIFBsZWFzZSByZWZlciBodHRwczovL25leHQtYXV0aC5qcy5vcmcvdHV0b3JpYWxzL3JlZnJlc2gtdG9rZW4tcm90YXRpb24gbGluayBmb3IgYSByZWZlcmVuY2UuXG4gKi9cbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucylcblxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhdXRoT3B0aW9ucyIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/libs/auth.js":
/*!**************************!*\
  !*** ./src/libs/auth.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);\n// Third-party Imports\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_3__.PrismaClient();\nconst authOptions = {\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(prisma),\n    // ** Configure one or more authentication providers\n    // ** Please refer to https://next-auth.js.org/configuration/options#providers for more `providers` options\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            // ** The name to display on the sign in form (e.g. 'Sign in with...')\n            // ** For more details on Credentials Provider, visit https://next-auth.js.org/providers/credentials\n            name: \"Credentials\",\n            type: \"credentials\",\n            /*\n       * As we are using our own Sign-in page, we do not need to change\n       * username or password attributes manually in following credentials object.\n       */ credentials: {},\n            async authorize (credentials) {\n                /*\n         * You need to provide your own logic here that takes the credentials submitted and returns either\n         * an object representing a user or value that is false/null if the credentials are invalid.\n         * For e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }\n         * You can also use the `req` object to obtain additional parameters (i.e., the request IP address)\n         */ const { email, password } = credentials;\n                try {\n                    // ** Login API Call to match the user credentials and receive user data in response along with his role\n                    const res = await fetch(`${process.env.API_URL}/login`, {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        body: JSON.stringify({\n                            email,\n                            password\n                        })\n                    });\n                    const data = await res.json();\n                    if (res.status === 401) {\n                        throw new Error(JSON.stringify(data));\n                    }\n                    if (res.status === 200) {\n                        /*\n             * Please unset all the sensitive information of the user either from API response or before returning\n             * user data below. Below return statement will set the user object in the token and the same is set in\n             * the session which will be accessible all over the app.\n             */ return data;\n                    }\n                    return null;\n                } catch (e) {\n                    throw new Error(e.message);\n                }\n            }\n        }),\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    // ** Please refer to https://next-auth.js.org/configuration/options#session for more `session` options\n    session: {\n        /*\n     * Choose how you want to save the user session.\n     * The default is `jwt`, an encrypted JWT (JWE) stored in the session cookie.\n     * If you use an `adapter` however, NextAuth default it to `database` instead.\n     * You can still force a JWT session by explicitly defining `jwt`.\n     * When using `database`, the session cookie will only contain a `sessionToken` value,\n     * which is used to look up the session in the database.\n     * If you use a custom credentials provider, user accounts will not be persisted in a database by NextAuth.js (even if one is configured).\n     * The option to use JSON Web Tokens for session tokens must be enabled to use a custom credentials provider.\n     */ strategy: \"jwt\",\n        // ** Seconds - How long until an idle session expires and is no longer valid\n        maxAge: 30 * 24 * 60 * 60 // ** 30 days\n    },\n    // ** Please refer to https://next-auth.js.org/configuration/options#pages for more `pages` options\n    pages: {\n        signIn: \"/login\"\n    },\n    // ** Please refer to https://next-auth.js.org/configuration/options#callbacks for more `callbacks` options\n    callbacks: {\n        /*\n     * While using `jwt` as a strategy, `jwt()` callback will be called before\n     * the `session()` callback. So we have to add custom parameters in `token`\n     * via `jwt()` callback to make them accessible in the `session()` callback\n     */ async jwt ({ token, user }) {\n            if (user) {\n                /*\n         * For adding custom parameters to user in session, we first need to add those parameters\n         * in token which then will be available in the `session()` callback\n         */ token.name = user.name;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) {\n                // ** Add custom params to user in session which are added in `jwt()` callback via `token` parameter\n                session.user.name = token.name;\n            }\n            return session;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGlicy9hdXRoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHNCQUFzQjtBQUMwQztBQUNUO0FBQ0g7QUFDUDtBQUU3QyxNQUFNSSxTQUFTLElBQUlELHdEQUFZQTtBQUV4QixNQUFNRSxjQUFjO0lBQ3pCQyxTQUFTSixtRUFBYUEsQ0FBQ0U7SUFFdkIsb0RBQW9EO0lBQ3BELDJHQUEyRztJQUMzR0csV0FBVztRQUNUUCwyRUFBa0JBLENBQUM7WUFDakIsc0VBQXNFO1lBQ3RFLG9HQUFvRztZQUNwR1EsTUFBTTtZQUNOQyxNQUFNO1lBRU47OztPQUdDLEdBQ0RDLGFBQWEsQ0FBQztZQUNkLE1BQU1DLFdBQVVELFdBQVc7Z0JBQ3pCOzs7OztTQUtDLEdBQ0QsTUFBTSxFQUFFRSxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHSDtnQkFFNUIsSUFBSTtvQkFDRix3R0FBd0c7b0JBQ3hHLE1BQU1JLE1BQU0sTUFBTUMsTUFBTSxDQUFDLEVBQUVDLFFBQVFDLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO3dCQUN0REMsUUFBUTt3QkFDUkMsU0FBUzs0QkFDUCxnQkFBZ0I7d0JBQ2xCO3dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7NEJBQUVYOzRCQUFPQzt3QkFBUztvQkFDekM7b0JBRUEsTUFBTVcsT0FBTyxNQUFNVixJQUFJVyxJQUFJO29CQUUzQixJQUFJWCxJQUFJWSxNQUFNLEtBQUssS0FBSzt3QkFDdEIsTUFBTSxJQUFJQyxNQUFNTCxLQUFLQyxTQUFTLENBQUNDO29CQUNqQztvQkFFQSxJQUFJVixJQUFJWSxNQUFNLEtBQUssS0FBSzt3QkFDdEI7Ozs7YUFJQyxHQUNELE9BQU9GO29CQUNUO29CQUVBLE9BQU87Z0JBQ1QsRUFBRSxPQUFPSSxHQUFHO29CQUNWLE1BQU0sSUFBSUQsTUFBTUMsRUFBRUMsT0FBTztnQkFDM0I7WUFDRjtRQUNGO1FBQ0E1QixzRUFBY0EsQ0FBQztZQUNiNkIsVUFBVWQsUUFBUUMsR0FBRyxDQUFDYyxnQkFBZ0I7WUFDdENDLGNBQWNoQixRQUFRQyxHQUFHLENBQUNnQixvQkFBb0I7UUFDaEQ7S0FHRDtJQUVELHVHQUF1RztJQUN2R0MsU0FBUztRQUNQOzs7Ozs7Ozs7S0FTQyxHQUNEQyxVQUFVO1FBRVYsNkVBQTZFO1FBQzdFQyxRQUFRLEtBQUssS0FBSyxLQUFLLEdBQUcsYUFBYTtJQUN6QztJQUVBLG1HQUFtRztJQUNuR0MsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFFQSwyR0FBMkc7SUFDM0dDLFdBQVc7UUFDVDs7OztLQUlDLEdBQ0QsTUFBTUMsS0FBSSxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRTtZQUN2QixJQUFJQSxNQUFNO2dCQUNSOzs7U0FHQyxHQUNERCxNQUFNakMsSUFBSSxHQUFHa0MsS0FBS2xDLElBQUk7WUFDeEI7WUFFQSxPQUFPaUM7UUFDVDtRQUNBLE1BQU1QLFNBQVEsRUFBRUEsT0FBTyxFQUFFTyxLQUFLLEVBQUU7WUFDOUIsSUFBSVAsUUFBUVEsSUFBSSxFQUFFO2dCQUNoQixvR0FBb0c7Z0JBQ3BHUixRQUFRUSxJQUFJLENBQUNsQyxJQUFJLEdBQUdpQyxNQUFNakMsSUFBSTtZQUNoQztZQUVBLE9BQU8wQjtRQUNUO0lBQ0Y7QUFDRixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF0ZXJpby1tdWktcmVhY3QtbmV4dGpzLWFkbWluLXRlbXBsYXRlLy4vc3JjL2xpYnMvYXV0aC5qcz9jNDY0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXJkLXBhcnR5IEltcG9ydHNcbmltcG9ydCBDcmVkZW50aWFsUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscydcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZSdcbmltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tICdAYXV0aC9wcmlzbWEtYWRhcHRlcidcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xuICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYSksXG5cbiAgLy8gKiogQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xuICAvLyAqKiBQbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vb3B0aW9ucyNwcm92aWRlcnMgZm9yIG1vcmUgYHByb3ZpZGVyc2Agb3B0aW9uc1xuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsUHJvdmlkZXIoe1xuICAgICAgLy8gKiogVGhlIG5hbWUgdG8gZGlzcGxheSBvbiB0aGUgc2lnbiBpbiBmb3JtIChlLmcuICdTaWduIGluIHdpdGguLi4nKVxuICAgICAgLy8gKiogRm9yIG1vcmUgZGV0YWlscyBvbiBDcmVkZW50aWFscyBQcm92aWRlciwgdmlzaXQgaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL3Byb3ZpZGVycy9jcmVkZW50aWFsc1xuICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcbiAgICAgIHR5cGU6ICdjcmVkZW50aWFscycsXG5cbiAgICAgIC8qXG4gICAgICAgKiBBcyB3ZSBhcmUgdXNpbmcgb3VyIG93biBTaWduLWluIHBhZ2UsIHdlIGRvIG5vdCBuZWVkIHRvIGNoYW5nZVxuICAgICAgICogdXNlcm5hbWUgb3IgcGFzc3dvcmQgYXR0cmlidXRlcyBtYW51YWxseSBpbiBmb2xsb3dpbmcgY3JlZGVudGlhbHMgb2JqZWN0LlxuICAgICAgICovXG4gICAgICBjcmVkZW50aWFsczoge30sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgLypcbiAgICAgICAgICogWW91IG5lZWQgdG8gcHJvdmlkZSB5b3VyIG93biBsb2dpYyBoZXJlIHRoYXQgdGFrZXMgdGhlIGNyZWRlbnRpYWxzIHN1Ym1pdHRlZCBhbmQgcmV0dXJucyBlaXRoZXJcbiAgICAgICAgICogYW4gb2JqZWN0IHJlcHJlc2VudGluZyBhIHVzZXIgb3IgdmFsdWUgdGhhdCBpcyBmYWxzZS9udWxsIGlmIHRoZSBjcmVkZW50aWFscyBhcmUgaW52YWxpZC5cbiAgICAgICAgICogRm9yIGUuZy4gcmV0dXJuIHsgaWQ6IDEsIG5hbWU6ICdKIFNtaXRoJywgZW1haWw6ICdqc21pdGhAZXhhbXBsZS5jb20nIH1cbiAgICAgICAgICogWW91IGNhbiBhbHNvIHVzZSB0aGUgYHJlcWAgb2JqZWN0IHRvIG9idGFpbiBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgKGkuZS4sIHRoZSByZXF1ZXN0IElQIGFkZHJlc3MpXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gY3JlZGVudGlhbHNcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vICoqIExvZ2luIEFQSSBDYWxsIHRvIG1hdGNoIHRoZSB1c2VyIGNyZWRlbnRpYWxzIGFuZCByZWNlaXZlIHVzZXIgZGF0YSBpbiByZXNwb25zZSBhbG9uZyB3aXRoIGhpcyByb2xlXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH0vbG9naW5gLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAqIFBsZWFzZSB1bnNldCBhbGwgdGhlIHNlbnNpdGl2ZSBpbmZvcm1hdGlvbiBvZiB0aGUgdXNlciBlaXRoZXIgZnJvbSBBUEkgcmVzcG9uc2Ugb3IgYmVmb3JlIHJldHVybmluZ1xuICAgICAgICAgICAgICogdXNlciBkYXRhIGJlbG93LiBCZWxvdyByZXR1cm4gc3RhdGVtZW50IHdpbGwgc2V0IHRoZSB1c2VyIG9iamVjdCBpbiB0aGUgdG9rZW4gYW5kIHRoZSBzYW1lIGlzIHNldCBpblxuICAgICAgICAgICAgICogdGhlIHNlc3Npb24gd2hpY2ggd2lsbCBiZSBhY2Nlc3NpYmxlIGFsbCBvdmVyIHRoZSBhcHAuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSxcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVRcbiAgICB9KVxuXG4gICAgLy8gKiogLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmVcbiAgXSxcblxuICAvLyAqKiBQbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vb3B0aW9ucyNzZXNzaW9uIGZvciBtb3JlIGBzZXNzaW9uYCBvcHRpb25zXG4gIHNlc3Npb246IHtcbiAgICAvKlxuICAgICAqIENob29zZSBob3cgeW91IHdhbnQgdG8gc2F2ZSB0aGUgdXNlciBzZXNzaW9uLlxuICAgICAqIFRoZSBkZWZhdWx0IGlzIGBqd3RgLCBhbiBlbmNyeXB0ZWQgSldUIChKV0UpIHN0b3JlZCBpbiB0aGUgc2Vzc2lvbiBjb29raWUuXG4gICAgICogSWYgeW91IHVzZSBhbiBgYWRhcHRlcmAgaG93ZXZlciwgTmV4dEF1dGggZGVmYXVsdCBpdCB0byBgZGF0YWJhc2VgIGluc3RlYWQuXG4gICAgICogWW91IGNhbiBzdGlsbCBmb3JjZSBhIEpXVCBzZXNzaW9uIGJ5IGV4cGxpY2l0bHkgZGVmaW5pbmcgYGp3dGAuXG4gICAgICogV2hlbiB1c2luZyBgZGF0YWJhc2VgLCB0aGUgc2Vzc2lvbiBjb29raWUgd2lsbCBvbmx5IGNvbnRhaW4gYSBgc2Vzc2lvblRva2VuYCB2YWx1ZSxcbiAgICAgKiB3aGljaCBpcyB1c2VkIHRvIGxvb2sgdXAgdGhlIHNlc3Npb24gaW4gdGhlIGRhdGFiYXNlLlxuICAgICAqIElmIHlvdSB1c2UgYSBjdXN0b20gY3JlZGVudGlhbHMgcHJvdmlkZXIsIHVzZXIgYWNjb3VudHMgd2lsbCBub3QgYmUgcGVyc2lzdGVkIGluIGEgZGF0YWJhc2UgYnkgTmV4dEF1dGguanMgKGV2ZW4gaWYgb25lIGlzIGNvbmZpZ3VyZWQpLlxuICAgICAqIFRoZSBvcHRpb24gdG8gdXNlIEpTT04gV2ViIFRva2VucyBmb3Igc2Vzc2lvbiB0b2tlbnMgbXVzdCBiZSBlbmFibGVkIHRvIHVzZSBhIGN1c3RvbSBjcmVkZW50aWFscyBwcm92aWRlci5cbiAgICAgKi9cbiAgICBzdHJhdGVneTogJ2p3dCcsXG5cbiAgICAvLyAqKiBTZWNvbmRzIC0gSG93IGxvbmcgdW50aWwgYW4gaWRsZSBzZXNzaW9uIGV4cGlyZXMgYW5kIGlzIG5vIGxvbmdlciB2YWxpZFxuICAgIG1heEFnZTogMzAgKiAyNCAqIDYwICogNjAgLy8gKiogMzAgZGF5c1xuICB9LFxuXG4gIC8vICoqIFBsZWFzZSByZWZlciB0byBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9vcHRpb25zI3BhZ2VzIGZvciBtb3JlIGBwYWdlc2Agb3B0aW9uc1xuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy9sb2dpbidcbiAgfSxcblxuICAvLyAqKiBQbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vb3B0aW9ucyNjYWxsYmFja3MgZm9yIG1vcmUgYGNhbGxiYWNrc2Agb3B0aW9uc1xuICBjYWxsYmFja3M6IHtcbiAgICAvKlxuICAgICAqIFdoaWxlIHVzaW5nIGBqd3RgIGFzIGEgc3RyYXRlZ3ksIGBqd3QoKWAgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYmVmb3JlXG4gICAgICogdGhlIGBzZXNzaW9uKClgIGNhbGxiYWNrLiBTbyB3ZSBoYXZlIHRvIGFkZCBjdXN0b20gcGFyYW1ldGVycyBpbiBgdG9rZW5gXG4gICAgICogdmlhIGBqd3QoKWAgY2FsbGJhY2sgdG8gbWFrZSB0aGVtIGFjY2Vzc2libGUgaW4gdGhlIGBzZXNzaW9uKClgIGNhbGxiYWNrXG4gICAgICovXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgLypcbiAgICAgICAgICogRm9yIGFkZGluZyBjdXN0b20gcGFyYW1ldGVycyB0byB1c2VyIGluIHNlc3Npb24sIHdlIGZpcnN0IG5lZWQgdG8gYWRkIHRob3NlIHBhcmFtZXRlcnNcbiAgICAgICAgICogaW4gdG9rZW4gd2hpY2ggdGhlbiB3aWxsIGJlIGF2YWlsYWJsZSBpbiB0aGUgYHNlc3Npb24oKWAgY2FsbGJhY2tcbiAgICAgICAgICovXG4gICAgICAgIHRva2VuLm5hbWUgPSB1c2VyLm5hbWVcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRva2VuXG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgaWYgKHNlc3Npb24udXNlcikge1xuICAgICAgICAvLyAqKiBBZGQgY3VzdG9tIHBhcmFtcyB0byB1c2VyIGluIHNlc3Npb24gd2hpY2ggYXJlIGFkZGVkIGluIGBqd3QoKWAgY2FsbGJhY2sgdmlhIGB0b2tlbmAgcGFyYW1ldGVyXG4gICAgICAgIHNlc3Npb24udXNlci5uYW1lID0gdG9rZW4ubmFtZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2Vzc2lvblxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNyZWRlbnRpYWxQcm92aWRlciIsIkdvb2dsZVByb3ZpZGVyIiwiUHJpc21hQWRhcHRlciIsIlByaXNtYUNsaWVudCIsInByaXNtYSIsImF1dGhPcHRpb25zIiwiYWRhcHRlciIsInByb3ZpZGVycyIsIm5hbWUiLCJ0eXBlIiwiY3JlZGVudGlhbHMiLCJhdXRob3JpemUiLCJlbWFpbCIsInBhc3N3b3JkIiwicmVzIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiQVBJX1VSTCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwic3RhdHVzIiwiRXJyb3IiLCJlIiwibWVzc2FnZSIsImNsaWVudElkIiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwibWF4QWdlIiwicGFnZXMiLCJzaWduSW4iLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/libs/auth.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/@auth","vendor-chunks/preact","vendor-chunks/object-hash","vendor-chunks/lru-cache"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Fmohammedalqatari%2Freceiptsfrontend%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmohammedalqatari%2Freceiptsfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();