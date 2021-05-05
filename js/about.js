/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"about": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/import/page-about/page-about.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/run-num/run-num.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/run-num/run-num.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  (function ($) {
    // Custom easing function
    $.extend($.easing, {
      // This is ripped directly from the jQuery easing plugin (easeOutExpo), from: http://gsgd.co.uk/sandbox/jquery/easing/
      spincrementEasing: function spincrementEasing(x, t, b, c, d) {
        return t === d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
      }
    }); // Spincrement function

    $.fn.spincrement = function (opts) {
      // Default values
      var defaults = {
        from: 0,
        to: null,
        decimalPlaces: null,
        decimalPoint: '.',
        thousandSeparator: ',',
        duration: 1000,
        // ms; TOTAL length animation
        leeway: 50,
        // percent of duraion
        easing: 'spincrementEasing',
        fade: true,
        complete: null
      };
      var options = $.extend(defaults, opts); // Function for formatting number

      var re_thouSep = new RegExp(/^(-?[0-9]+)([0-9]{3})/);

      function format(num, dp) {
        num = num.toFixed(dp); // converts to string!
        // Non "." decimal point

        if (dp > 0 && options.decimalPoint !== '.') {
          num = num.replace('.', options.decimalPoint);
        } // Thousands separator


        if (options.thousandSeparator) {
          while (re_thouSep.test(num)) {
            num = num.replace(re_thouSep, '$1' + options.thousandSeparator + '$2');
          }
        }

        return num;
      } // Apply to each matching item


      return this.each(function () {
        // Get handle on current obj
        var obj = $(this); // Set params FOR THIS ELEM

        var from = options.from;

        if (obj.attr('data-from')) {
          from = parseFloat(obj.attr('data-from'));
        }

        var to;

        if (obj.attr('data-to')) {
          to = parseFloat(obj.attr('data-to'));
        } else if (options.to !== null) {
          to = options.to;
        } else {
          var ts = $.inArray(options.thousandSeparator, ['\\', '^', '$', '*', '+', '?', '.']) > -1 ? '\\' + options.thousandSeparator : options.thousandSeparator;
          var re = new RegExp(ts, 'g');
          to = parseFloat(obj.text().replace(re, ''));
        }

        var duration = options.duration;

        if (options.leeway) {
          // If leeway is set, randomise duration a little
          duration += Math.round(options.duration * (Math.random() * 2 - 1) * options.leeway / 100);
        }

        var dp;

        if (obj.attr('data-dp')) {
          dp = parseInt(obj.attr('data-dp'), 10);
        } else if (options.decimalPlaces !== null) {
          dp = options.decimalPlaces;
        } else {
          var ix = obj.text().indexOf(options.decimalPoint);
          dp = ix > -1 ? obj.text().length - (ix + 1) : 0;
        } // Start


        obj.css('counter', from);
        if (options.fade) obj.css('opacity', 0);
        obj.animate({
          counter: to,
          opacity: 1
        }, {
          easing: options.easing,
          duration: duration,
          // Invoke the callback for each step.
          step: function step(progress) {
            obj.html(format(progress * to, dp));
          },
          complete: function complete() {
            // Cleanup
            obj.css('counter', null);
            obj.html(format(to, dp)); // user's callback

            if (options.complete) {
              options.complete(obj);
            }
          }
        });
      });
    };
  })($);

  var countbox = $(".run-num__item");

  if (countbox != 0) {
    var show = true;
    $(window).on("scroll load resize", function () {
      if (!show) return false; // Отменяем показ анимации, если она уже была выполнена

      var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница

      var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа

      var w_height = $(window).height(); // Высота окна браузера

      var d_height = $(document).height(); // Высота всего документа

      var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками

      if (w_top + 600 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $('.run-num__text_num').css('opacity', '1');
        $('.run-num__text_num').spincrement({
          thousandSeparator: "",
          duration: 4200
        });
        show = false;
      }
    });
  } else {
    var e_top = false;
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/import/page-about/page-about.js":
/*!************************************************!*\
  !*** ./src/js/import/page-about/page-about.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_modules_run_num_run_num__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../blocks/modules/run-num/run-num */ "./src/blocks/modules/run-num/run-num.js");
/* harmony import */ var _blocks_modules_run_num_run_num__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_modules_run_num_run_num__WEBPACK_IMPORTED_MODULE_0__);


/***/ })

/******/ });
//# sourceMappingURL=about.js.map