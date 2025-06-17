(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["app/layout"],{

/***/ "(app-pages-browser)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fopt%2Fhostedapp%2Fnode%2Froot%2Fapp%2Fnode_modules%2Fnext%2Ffont%2Fgoogle%2Ftarget.css%3F%7B%5C%22path%5C%22%3A%5C%22app%2Flayout.tsx%5C%22%2C%5C%22import%5C%22%3A%5C%22Inter%5C%22%2C%5C%22arguments%5C%22%3A%5B%7B%5C%22subsets%5C%22%3A%5B%5C%22latin%5C%22%5D%7D%5D%2C%5C%22variableName%5C%22%3A%5C%22inter%5C%22%7D%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Ftechtales-landing%2Fapp%2Fapp%2Fglobals.css%22%2C%22ids%22%3A%5B%5D%7D&server=false!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fopt%2Fhostedapp%2Fnode%2Froot%2Fapp%2Fnode_modules%2Fnext%2Ffont%2Fgoogle%2Ftarget.css%3F%7B%5C%22path%5C%22%3A%5C%22app%2Flayout.tsx%5C%22%2C%5C%22import%5C%22%3A%5C%22Inter%5C%22%2C%5C%22arguments%5C%22%3A%5B%7B%5C%22subsets%5C%22%3A%5B%5C%22latin%5C%22%5D%7D%5D%2C%5C%22variableName%5C%22%3A%5C%22inter%5C%22%7D%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Ftechtales-landing%2Fapp%2Fapp%2Fglobals.css%22%2C%22ids%22%3A%5B%5D%7D&server=false! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../../opt/hostedapp/node/root/app/node_modules/next/font/google/target.css?{"path":"app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"} */ "(app-pages-browser)/../../../../opt/hostedapp/node/root/app/node_modules/next/font/google/target.css?{\"path\":\"app/layout.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"}", 23));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/globals.css */ "(app-pages-browser)/./app/globals.css"));


/***/ }),

/***/ "(app-pages-browser)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js":
/*!***********************************************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js ***!
  \***********************************************************************************************************************************/
/***/ (function(module) {

var __dirname = "/";
(()=>{"use strict";var e={592:(e,r,t)=>{var n=t(722);var i=Object.create(null);var a=typeof document==="undefined";var o=Array.prototype.forEach;function debounce(e,r){var t=0;return function(){var n=this;var i=arguments;var a=function functionCall(){return e.apply(n,i)};clearTimeout(t);t=setTimeout(a,r)}}function noop(){}function getCurrentScriptUrl(e){var r=i[e];if(!r){if(document.currentScript){r=document.currentScript.src}else{var t=document.getElementsByTagName("script");var a=t[t.length-1];if(a){r=a.src}}i[e]=r}return function(e){if(!r){return null}var t=r.split(/([^\\/]+)\.js$/);var i=t&&t[1];if(!i){return[r.replace(".js",".css")]}if(!e){return[r.replace(".js",".css")]}return e.split(",").map((function(e){var t=new RegExp("".concat(i,"\\.js$"),"g");return n(r.replace(t,"".concat(e.replace(/{fileName}/g,i),".css")))}))}}function updateCss(e,r){if(!r){if(!e.href){return}r=e.href.split("?")[0]}if(!isUrlRequest(r)){return}if(e.isLoaded===false){return}if(!r||!(r.indexOf(".css")>-1)){return}e.visited=true;var t=e.cloneNode();t.isLoaded=false;t.addEventListener("load",(function(){if(t.isLoaded){return}t.isLoaded=true;e.parentNode.removeChild(e)}));t.addEventListener("error",(function(){if(t.isLoaded){return}t.isLoaded=true;e.parentNode.removeChild(e)}));t.href="".concat(r,"?").concat(Date.now());if(e.nextSibling){e.parentNode.insertBefore(t,e.nextSibling)}else{e.parentNode.appendChild(t)}}function getReloadUrl(e,r){var t;e=n(e,{stripWWW:false});r.some((function(n){if(e.indexOf(r)>-1){t=n}}));return t}function reloadStyle(e){if(!e){return false}var r=document.querySelectorAll("link");var t=false;o.call(r,(function(r){if(!r.href){return}var n=getReloadUrl(r.href,e);if(!isUrlRequest(n)){return}if(r.visited===true){return}if(n){updateCss(r,n);t=true}}));return t}function reloadAll(){var e=document.querySelectorAll("link");o.call(e,(function(e){if(e.visited===true){return}updateCss(e)}))}function isUrlRequest(e){if(!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e)){return false}return true}e.exports=function(e,r){if(a){console.log("no window.document found, will not HMR CSS");return noop}var t=getCurrentScriptUrl(e);function update(){var e=t(r.filename);var n=reloadStyle(e);if(r.locals){console.log("[HMR] Detected local css modules. Reload all css");reloadAll();return}if(n){console.log("[HMR] css reload %s",e.join(" "))}else{console.log("[HMR] Reload all css");reloadAll()}}return debounce(update,50)}},722:e=>{function normalizeUrl(e){return e.reduce((function(e,r){switch(r){case"..":e.pop();break;case".":break;default:e.push(r)}return e}),[]).join("/")}e.exports=function(e){e=e.trim();if(/^data:/i.test(e)){return e}var r=e.indexOf("//")!==-1?e.split("//")[0]+"//":"";var t=e.replace(new RegExp(r,"i"),"").split("/");var n=t[0].toLowerCase().replace(/\.$/,"");t[0]="";var i=normalizeUrl(t);return r+n+i}}};var r={};function __nccwpck_require__(t){var n=r[t];if(n!==undefined){return n.exports}var i=r[t]={exports:{}};var a=true;try{e[t](i,i.exports,__nccwpck_require__);a=false}finally{if(a)delete r[t]}return i.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var t=__nccwpck_require__(592);module.exports=t})();

/***/ }),

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("299c7175e0da");
if (true) { module.hot.accept() }


/***/ }),

/***/ "(app-pages-browser)/../../../../opt/hostedapp/node/root/app/node_modules/next/font/google/target.css?{\"path\":\"app/layout.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"}":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/next/font/google/target.css?{"path":"app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"} ***!
  \**********************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"style":{"fontFamily":"'__Inter_e8ce0c', '__Inter_Fallback_e8ce0c'","fontStyle":"normal"},"className":"__className_e8ce0c"};
    if(true) {
      // 1750118792837
      var cssReload = __webpack_require__(/*! ../../../../opt/hostedapp/node/root/app/node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js */ "(app-pages-browser)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"/_next/","esModule":false,"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main-app"], function() { return __webpack_exec__("(app-pages-browser)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fopt%2Fhostedapp%2Fnode%2Froot%2Fapp%2Fnode_modules%2Fnext%2Ffont%2Fgoogle%2Ftarget.css%3F%7B%5C%22path%5C%22%3A%5C%22app%2Flayout.tsx%5C%22%2C%5C%22import%5C%22%3A%5C%22Inter%5C%22%2C%5C%22arguments%5C%22%3A%5B%7B%5C%22subsets%5C%22%3A%5B%5C%22latin%5C%22%5D%7D%5D%2C%5C%22variableName%5C%22%3A%5C%22inter%5C%22%7D%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Ftechtales-landing%2Fapp%2Fapp%2Fglobals.css%22%2C%22ids%22%3A%5B%5D%7D&server=false!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);