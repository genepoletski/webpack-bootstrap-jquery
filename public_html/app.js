/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(exports, "api", function() { return api; });
const api = {};

api.init = () => {
  console.log( 'zzs-mod-call-request initiated ...' );
};




/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(exports, "api", function() { return api; });
const api = {};

api.init = () => {
  console.log( 'zzs-mod-chat-customer-manager initiated ...' );
};




/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(exports, "api", function() { return api; });
const api = {};

api.init = () => {
  console.log( 'zzs-mod-instant-messages initiated ...' );
};




/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(exports, "api", function() { return api; });
const api = {};

api.init = () => {
  console.log( 'zzs-mod-manager-messages initiated ...' );
};




/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

const
  // module scope constants
  MOD_CALL_REQUEST_ID = 'mod-call-request',
  MOD_INSTANT_MESSAGES_ID = 'mod-instant-messages',
  MOD_MANAGER_MESSAGES_ID = 'mod-manager-messages',
  MOD_CHAT_CUSTOMER_MANAGER_ID = 'mod-customer-manager-chat',

  // module config
  config = {
    modules: [
      {
        id: MOD_CALL_REQUEST_ID,
        do_enable: true
      },
      {
        id: MOD_INSTANT_MESSAGES_ID,
        do_enable: true
      },
      {
        id: MOD_MANAGER_MESSAGES_ID,
        do_enable: true
      },
      {
        id: MOD_CHAT_CUSTOMER_MANAGER_ID,
        do_enable: true
      }
    ]
  };

const initModules = () => {

  config.modules.forEach( (mod) => {
    let module = null;

    switch (mod.id) {
      case MOD_CALL_REQUEST_ID:
        if (mod.do_enable) {
          module = __webpack_require__( 1 );
        }
        break;
      case MOD_INSTANT_MESSAGES_ID:
        if (mod.do_enable) {
          module = __webpack_require__( 3 );
        }
        break;
      case MOD_MANAGER_MESSAGES_ID:
        if (mod.do_enable) {
          module = __webpack_require__( 4 );
        }
        break;
      case MOD_CHAT_CUSTOMER_MANAGER_ID:
        if (mod.do_enable) {
          module = __webpack_require__( 2 );
        }
        break;
    }

    if ( module ) module.api.init();

  });
};

const init = () => {
  initModules();
};

if ( !(window.jQuery !== undefined) ) {
  let script = document.createElement('script');
  script.src = 'js/jquery-3.1.1.min.js';
  document.getElementsByTagName('body')[0].appendChild(script);
}
else {
  $( document ).ready( () => { init(); } );
}


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map