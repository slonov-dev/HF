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
/******/ 		"main": 0
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
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/btn/btn.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/btn/btn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/clients/clients.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/clients/clients.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (window.innerWidth <= 425) {
  var mySwiper = new Swiper('.swiper-container', {
    speed: 300,
    autoplay: {
      delay: 2000
    },
    loop: true,
    slidesPerView: 2,
    observer: true,
    observeParents: true
  });
} else if (window.innerWidth <= 550) {
  var mySwiper = new Swiper('.swiper-container', {
    speed: 300,
    autoplay: {
      delay: 2000
    },
    loop: true,
    slidesPerView: 4,
    observer: true,
    observeParents: true
  });
} else {
  var mySwiper = new Swiper('.swiper-container', {
    speed: 300,
    autoplay: {
      delay: 2000
    },
    loop: true,
    slidesPerView: 6,
    observer: true,
    observeParents: true
  });
}

if (window.innerWidth <= 425) {
  var mySwiper = new Swiper('.swiper-container-popup', {
    init: false,
    speed: 300,
    autoplay: {
      delay: 2000
    },
    loop: true,
    slidesPerView: 2,
    observeParents: true
  });
} else if (window.innerWidth <= 550) {
  var mySwiper = new Swiper('.swiper-container-popup', {
    init: false,
    speed: 300,
    autoplay: {
      delay: 2000
    },
    loop: true,
    slidesPerView: 4,
    observeParents: true
  });
} else {
  var mySwiper = new Swiper('.swiper-container-popup', {
    speed: 300,
    autoplay: {
      delay: 2000
    },
    loop: true,
    slidesPerView: 6,
    observeParents: true
  });
}

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) { //burger

window.addEventListener('DOMContentLoaded', function () {
  var menu = document.querySelector('.header__list'),
      menuItem = document.querySelectorAll('.header__link'),
      hamburger = document.querySelector('.header__burger');
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('burger_active');
    menu.classList.toggle('menu_active');
  });
  menuItem.forEach(function (item) {
    item.addEventListener('click', function () {
      hamburger.classList.toggle('burger_active');
      menu.classList.toggle('menu_active');
    });
  });
}); //add class on scroll

document.addEventListener("scroll", function (e) {
  var content = document.querySelector("body");
  var scrolled = document.scrollingElement.scrollTop;
  var position = content.offsetTop;
  var header = document.querySelector("header");

  if (scrolled > position + 350) {
    content.classList.add('header-bgc');
  } else {
    content.classList.remove('header-bgc');
    content.classList.add('header-none-bgc');
  } //delay animation in 1 screen


  if (scrolled > position + 200) {}
});
$(document).ready(function () {
  var href = location.href;

  if (href == 'https://slonov-dev.github.io/HF/dist/index.html') {
    $('.header__link_main').addClass('header__link_active');
  }

  if (href == 'https://slonov-dev.github.io/HF/dist/page-about.html') {
    $('.header__link_2').addClass('header__link_active');
  }

  if (href == 'https://slonov-dev.github.io/HF/dist/page-sectors.html') {
    $('.header__link_3').addClass('header__link_active');
  }

  if (href == 'https://slonov-dev.github.io/HF/dist/page-innovation.html') {
    $('.header__link_4').addClass('header__link_active');
  }

  if (href == 'https://slonov-dev.github.io/HF/dist/page-values.html') {
    $('.header__link_5').addClass('header__link_active');
  }

  if (href == 'https://slonov-dev.github.io/HF/dist/page-carriers.html') {
    $('.header__link_6').addClass('header__link_active');
  }

  if (href == 'https://slonov-dev.github.io/HF/dist/page-news.html') {
    $('.header__link_7').addClass('header__link_active');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/our-commitment/our-commitment.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/our-commitment/our-commitment.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  if (window.innerWidth >= 768) {
    var equalHeight = function equalHeight(group) {
      var tallest = 0;
      group.each(function () {
        thisHeight = $(this).height();

        if (thisHeight > tallest) {
          tallest = thisHeight;
        }
      });
      group.height(tallest);
    };

    equalHeight($(".column-one-height"));
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/parallax/parallax-about.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/parallax/parallax-about.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//custom 
function parallaxAboutInit() {
  var aboutAnimation_1 = document.querySelector(".about-animation_1");
  new simpleParallax(aboutAnimation_1, {
    orientation: 'down',
    overflow: true,
    delay: 1.2,
    scale: 1.4,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var aboutAnimation_2 = document.querySelector(".about-animation_2");
  new simpleParallax(aboutAnimation_2, {
    orientation: 'down left',
    overflow: true,
    delay: .7,
    scale: 1.4,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var aboutAnimation_3 = document.querySelector(".about-animation_3");
  new simpleParallax(aboutAnimation_3, {
    orientation: 'down right',
    overflow: true,
    delay: .9,
    scale: 1.6,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var aboutAnimation_4 = document.querySelector(".about-animation_4");
  new simpleParallax(aboutAnimation_4, {
    orientation: 'down right',
    overflow: true,
    delay: 1.2,
    scale: 1.9,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var aboutAnimation_5 = document.querySelector(".about-animation_5");
  new simpleParallax(aboutAnimation_5, {
    orientation: 'down right',
    overflow: true,
    delay: .9,
    scale: 1.9,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var aboutAnimation_6 = document.querySelector(".about-animation_6");
  new simpleParallax(aboutAnimation_6, {
    orientation: 'down',
    overflow: true,
    delay: 1.6,
    scale: 1.8,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
} //del animate class


var aboutAnimation_1 = document.querySelector(".about-animation_1");

if (aboutAnimation_1) {
  aboutAnimation_1.addEventListener('animationend', function () {
    aboutAnimation_1.classList.remove('animate__animated', 'animate__zoomInRight', 'animate__delay-2s');
    setTimeout(parallaxAboutInit, 1500);
  });
}

var aboutAnimation_2 = document.querySelector(".about-animation_2");

if (aboutAnimation_2) {
  aboutAnimation_2.addEventListener('animationend', function () {
    aboutAnimation_2.classList.remove('animate__animated', 'animate__zoomInLeft', 'animate__delay-2s');
  });
}

var aboutAnimation_3 = document.querySelector(".about-animation_3");

if (aboutAnimation_3) {
  aboutAnimation_3.addEventListener('animationend', function () {
    aboutAnimation_3.classList.remove('animate__animated', 'animate__zoomInUp', 'animate__delay-3s');
  });
}

var aboutAnimation_4 = document.querySelector(".about-animation_4");

if (aboutAnimation_4) {
  aboutAnimation_4.addEventListener('animationend', function () {
    aboutAnimation_4.classList.remove('animate__animated', 'animate__zoomInUp');
  });
}

var aboutAnimation_5 = document.querySelector(".about-animation_5");

if (aboutAnimation_5) {
  aboutAnimation_5.addEventListener('animationend', function () {
    aboutAnimation_5.classList.remove('animate__animated', 'animate__zoomInUp');
  });
}

/***/ }),

/***/ "./src/blocks/modules/parallax/parallax-carriers.js":
/*!**********************************************************!*\
  !*** ./src/blocks/modules/parallax/parallax-carriers.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//custom 
function parallaxInitCarriers() {
  var carriersPageAnimation_1 = document.querySelector(".carriers-page__animation_1");
  new simpleParallax(carriersPageAnimation_1, {
    orientation: 'down',
    overflow: true,
    delay: .7,
    scale: 1.3,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var carriersPageAnimation_2 = document.querySelector(".carriers-page__animation_2");
  new simpleParallax(carriersPageAnimation_2, {
    orientation: 'down left',
    overflow: true,
    delay: .9,
    scale: 1.2,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var carriersPageAnimation_3 = document.querySelector(".carriers-page__animation_3");
  new simpleParallax(carriersPageAnimation_3, {
    orientation: 'down',
    overflow: true,
    delay: 1.2,
    scale: 1.3,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var carriersPageAnimation_4 = document.querySelector(".carriers-page__animation_4");
  new simpleParallax(carriersPageAnimation_4, {
    orientation: 'down right',
    overflow: true,
    delay: 1.1,
    scale: 1.3,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var carriersPageAnimation_5 = document.querySelector(".carriers-page__animation_5");
  new simpleParallax(carriersPageAnimation_5, {
    orientation: 'down',
    overflow: true,
    delay: .9,
    scale: 1.5,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var carriersPageAnimation_6 = document.querySelector(".carriers-page__animation_6");
  new simpleParallax(carriersPageAnimation_6, {
    orientation: 'down left',
    overflow: true,
    delay: .8,
    scale: 1.2,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var carriersPageAnimation_7 = document.querySelector(".carriers-page__animation_7");
  new simpleParallax(carriersPageAnimation_7, {
    orientation: 'down right',
    overflow: true,
    delay: .9,
    scale: 1.3,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var carriersPageAnimation_carriers = document.querySelector(".carriers-page__animation_carriers");
  new simpleParallax(carriersPageAnimation_carriers, {
    orientation: 'down',
    overflow: true,
    delay: 1.1,
    scale: 1.8,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
}

var carriersPageAnimation_carriers = document.querySelector(".carriers-page__animation_carriers");

if (carriersPageAnimation_carriers) {
  carriersPageAnimation_carriers.addEventListener('animationend', function () {
    carriersPageAnimation_carriers.classList.remove('animate__animated', 'animate__zoomIn', 'animate__delay-2s');
    setTimeout(parallaxInitCarriers, 1500);
  });
}

var carriersPageAnimation_1 = document.querySelector(".carriers-page__animation_1");

if (carriersPageAnimation_1) {
  carriersPageAnimation_1.addEventListener('animationend', function () {
    carriersPageAnimation_1.classList.remove('animate__animated', 'animate__zoomIn', 'animate__delay-2s');
  });
}

var carriersPageAnimation_2 = document.querySelector(".carriers-page__animation_2");

if (carriersPageAnimation_2) {
  carriersPageAnimation_2.addEventListener('animationend', function () {
    carriersPageAnimation_2.classList.remove('animate__animated', 'animate__backInRight', 'animate__delay-3s');
  });
}

var carriersPageAnimation_3 = document.querySelector(".carriers-page__animation_3-carriers");

if (carriersPageAnimation_3) {
  carriersPageAnimation_3.addEventListener('animationend', function () {
    carriersPageAnimation_3.classList.remove('animate__animated', 'animate__zoomIn', 'animate__delay-2s');
  });
}

var carriersPageAnimation_4 = document.querySelector(".carriers-page__animation_4");

if (carriersPageAnimation_4) {
  carriersPageAnimation_4.addEventListener('animationend', function () {
    carriersPageAnimation_4.classList.remove('animate__animated', 'animate__backInLeft', 'animate__delay-3s');
  });
}

var carriersPageAnimation_5 = document.querySelector(".carriers-page__animation_5");

if (carriersPageAnimation_5) {
  carriersPageAnimation_5.addEventListener('animationend', function () {
    carriersPageAnimation_5.classList.remove('animate__animated', 'animate__zoomIn', 'animate__delay-2s');
  });
}

var carriersPageAnimation_6 = document.querySelector(".carriers-page__animation_6");

if (carriersPageAnimation_6) {
  carriersPageAnimation_6.addEventListener('animationend', function () {
    carriersPageAnimation_6.classList.remove('animate__animated', 'animate__zoomInDown', 'animate__delay-2s');
  });
}

var carriersPageAnimation_7 = document.querySelector(".carriers-page__animation_7");

if (carriersPageAnimation_7) {
  carriersPageAnimation_7.addEventListener('animationend', function () {
    carriersPageAnimation_7.classList.remove('animate__animated', 'animate__zoomInDown', 'animate__delay-2s');
  });
}

var carriersPageAnimation_8 = document.querySelector(".about-animation_6");

if (carriersPageAnimation_8) {
  carriersPageAnimation_8.addEventListener('animationend', function () {
    carriersPageAnimation_8.classList.remove('animate__animated', 'animate__zoomInUp', 'animate__delay-1s');
  });
}

/***/ }),

/***/ "./src/blocks/modules/parallax/parallax-footer.js":
/*!********************************************************!*\
  !*** ./src/blocks/modules/parallax/parallax-footer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//custom 
function parallaxFooterInit() {
  var footerAnimation_1 = document.querySelector(".footer-animate__img_1");
  new simpleParallax(footerAnimation_1, {
    orientation: 'down',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var footerAnimation_2 = document.querySelector(".footer-animate__img_2");
  new simpleParallax(footerAnimation_2, {
    orientation: 'left',
    overflow: true,
    delay: 1.2,
    scale: 1.3,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var footerAnimation_3 = document.querySelector(".footer-animate__img_3");
  new simpleParallax(footerAnimation_3, {
    orientation: 'down left',
    overflow: true,
    delay: .7,
    scale: 1.3,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var footerAnimation_4 = document.querySelector(".footer-animate__img_4");
  new simpleParallax(footerAnimation_4, {
    orientation: 'down right',
    overflow: true,
    delay: 1,
    scale: 1.3,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var footerAnimation_5 = document.querySelector(".footer-animate__img_5");
  new simpleParallax(footerAnimation_5, {
    orientation: 'left',
    overflow: true,
    delay: 1.2,
    scale: 1.9,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
}

parallaxFooterInit();
setTimeout(parallaxFooterInit(), 1000);

/***/ }),

/***/ "./src/blocks/modules/parallax/parallax-innovation.js":
/*!************************************************************!*\
  !*** ./src/blocks/modules/parallax/parallax-innovation.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//custom 
function parallaxInnovationInit() {
  var innovationPageAnimation_1 = document.querySelector(".innovation-page__animation_1");
  new simpleParallax(innovationPageAnimation_1, {
    orientation: 'up',
    overflow: true,
    delay: 1.9,
    scale: 1.8,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var innovationPageAnimation_2 = document.querySelector(".innovation-page__animation_2");
  new simpleParallax(innovationPageAnimation_2, {
    orientation: 'top right',
    overflow: true,
    delay: 2.2,
    scale: 1.8,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var innovationPageAnimation_3 = document.querySelector(".innovation-page__animation_3");
  new simpleParallax(innovationPageAnimation_3, {
    orientation: 'down left',
    overflow: true,
    delay: 1.8,
    scale: 1.25,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var innovationPageAnimation_4 = document.querySelector(".innovation-page__animation_4");
  new simpleParallax(innovationPageAnimation_4, {
    orientation: 'down',
    overflow: true,
    delay: 1.2,
    scale: 1.8,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
} //del animate


var innovationPageAnimation_1 = document.querySelector(".innovation-page__animation_1");

if (innovationPageAnimation_1) {
  innovationPageAnimation_1.addEventListener('animationend', function () {
    innovationPageAnimation_1.classList.remove('animate__animated', 'animate__fadeInDown', 'animate__delay-3s');
    setTimeout(parallaxInnovationInit, 100);
  });
} //del animate


var innovationPageAnimation_2 = document.querySelector(".innovation-page__animation_2");

if (innovationPageAnimation_2) {
  innovationPageAnimation_2.addEventListener('animationend', function () {
    innovationPageAnimation_2.classList.remove('animate__animated', 'animate__fadeIn', 'animate__delay-2s');
  });
} //del animate


var innovationPageAnimation_3 = document.querySelector(".innovation-page__animation_4");

if (innovationPageAnimation_3) {
  innovationPageAnimation_3.addEventListener('animationend', function () {
    innovationPageAnimation_3.classList.remove('animate__animated', 'animate__fadeIn', 'animate__delay-2s');
  });
} //del animate


var innovationPageAnimation_4 = document.querySelector(".innovation-page__animation_4");

if (innovationPageAnimation_4) {
  innovationPageAnimation_4.addEventListener('animationend', function () {
    innovationPageAnimation_4.classList.remove('animate__animated', 'animate__fadeIn', 'animate__delay-3s');
  });
}

/***/ }),

/***/ "./src/blocks/modules/parallax/parallax-news.js":
/*!******************************************************!*\
  !*** ./src/blocks/modules/parallax/parallax-news.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//custom 
function parallaxNewsInit() {
  var newsPageAnimation_1 = document.querySelector(".news-page__animation_1");
  new simpleParallax(newsPageAnimation_1, {
    orientation: 'down',
    overflow: true,
    delay: 1.2,
    scale: 1.3,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var newsPageAnimation_2 = document.querySelector(".news-page__animation_2");
  new simpleParallax(newsPageAnimation_2, {
    orientation: 'down right',
    overflow: true,
    delay: 1,
    scale: 1.8,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var newsPageAnimation_3 = document.querySelector(".news-page__animation_3");
  new simpleParallax(newsPageAnimation_3, {
    orientation: 'down',
    overflow: true,
    delay: .9,
    scale: 1.3,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var newsPageAnimation_4 = document.querySelector(".news-page__animation_4");
  new simpleParallax(newsPageAnimation_4, {
    orientation: 'down left',
    overflow: true,
    delay: .7,
    scale: 1.3,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var newsPageAnimation_5 = document.querySelector(".news-page__animation_5");
  new simpleParallax(newsPageAnimation_5, {
    orientation: 'down right',
    overflow: true,
    delay: .9,
    scale: 1.3,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var newsPageAnimation_6 = document.querySelector(".news-page__animation_6");
  new simpleParallax(newsPageAnimation_6, {
    orientation: 'down left',
    overflow: true,
    delay: 1.2,
    scale: 1.3,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var newsPageAnimation_7 = document.querySelector(".news-page__animation_7");
  new simpleParallax(newsPageAnimation_7, {
    orientation: 'down left',
    overflow: true,
    delay: .9,
    scale: 1.3,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var newsPageAnimation_8 = document.querySelector(".news-page__animation_8");
  new simpleParallax(newsPageAnimation_8, {
    orientation: 'down',
    overflow: true,
    delay: 1,
    scale: 1.8,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var newsPageAnimation_9 = document.querySelector(".news-page__animation_9");
  new simpleParallax(newsPageAnimation_9, {
    orientation: 'down',
    overflow: true,
    delay: .6,
    scale: 1.8,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var newsPageAnimation_10 = document.querySelector(".news-page__animation_10");
  new simpleParallax(newsPageAnimation_10, {
    orientation: 'down right',
    overflow: true,
    delay: 1.1,
    scale: 1.8,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
} //del animate


var newsPageAnimation_1 = document.querySelector(".news-page__animation_1");

if (newsPageAnimation_1) {
  newsPageAnimation_1.addEventListener('animationend', function () {
    newsPageAnimation_1.classList.remove('animate__animated', 'animate__zoomInDown');
    setTimeout(parallaxNewsInit, 3000);
  });
}

var newsPageAnimation_2 = document.querySelector(".news-page__animation_2");

if (newsPageAnimation_2) {
  newsPageAnimation_2.addEventListener('animationend', function () {
    newsPageAnimation_2.classList.remove('animate__animated', 'animate__zoomInDown', 'animate__delay-2s');
  });
}

var newsPageAnimation_3 = document.querySelector(".news-page__animation_3");

if (newsPageAnimation_3) {
  newsPageAnimation_3.addEventListener('animationend', function () {
    newsPageAnimation_3.classList.remove('animate__animated', 'animate__zoomInDown', 'animate__delay-2s');
  });
}

var newsPageAnimation_4 = document.querySelector(".news-page__animation_4");

if (newsPageAnimation_4) {
  newsPageAnimation_4.addEventListener('animationend', function () {
    newsPageAnimation_4.classList.remove('animate__animated', 'animate__zoomInDown', 'animate__delay-2s');
  });
}

var newsPageAnimation_5 = document.querySelector(".news-page__animation_5");

if (newsPageAnimation_5) {
  newsPageAnimation_5.addEventListener('animationend', function () {
    newsPageAnimation_5.classList.remove('animate__animated', 'animate__fadeInLeft', 'animate__delay-2s');
  });
}

var newsPageAnimation_6 = document.querySelector(".news-page__animation_6");

if (newsPageAnimation_6) {
  newsPageAnimation_6.addEventListener('animationend', function () {
    newsPageAnimation_6.classList.remove('animate__animated', 'animate__fadeInLeft', 'animate__delay-2s');
  });
}

var newsPageAnimation_7 = document.querySelector(".news-page__animation_7");

if (newsPageAnimation_7) {
  newsPageAnimation_7.addEventListener('animationend', function () {
    newsPageAnimation_7.classList.remove('animate__animated', 'animate__zoomInDown', 'animate__delay-2s');
  });
}

var newsPageAnimation_8 = document.querySelector(".news-page__animation_8");

if (newsPageAnimation_8) {
  newsPageAnimation_8.addEventListener('animationend', function () {
    newsPageAnimation_8.classList.remove('animate__animated', 'animate__zoomInLeft', 'animate__delay-2s');
  });
}

var newsPageAnimation_9 = document.querySelector(".news-page__animation_9");

if (newsPageAnimation_9) {
  newsPageAnimation_9.addEventListener('animationend', function () {
    newsPageAnimation_9.classList.remove('animate__animated', 'animate__zoomInRight', 'animate__delay-2s');
  });
}

var newsPageAnimation_10 = document.querySelector(".news-page__animation_10");

if (newsPageAnimation_10) {
  newsPageAnimation_10.addEventListener('animationend', function () {
    newsPageAnimation_10.classList.remove('animate__animated', 'animate__zoomInLeft', 'animate__delay-2s');
  });
}

var newsPageAnimation_11 = document.querySelector(".news-page__animation_11");

if (newsPageAnimation_11) {
  newsPageAnimation_11.addEventListener('animationend', function () {
    newsPageAnimation_11.classList.remove('animate__animated', 'animate__zoomInRight', 'animate__delay-2s');
  });
}

/***/ }),

/***/ "./src/blocks/modules/parallax/parallax-sectors.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/parallax/parallax-sectors.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//custom 
function parallaxsectorsInit() {
  var sectorsAnimation_1 = document.querySelector(".sectors-animation_1");
  new simpleParallax(sectorsAnimation_1, {
    orientation: 'down',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var sectorsAnimation_2 = document.querySelector(".sectors-animation_2");
  new simpleParallax(sectorsAnimation_2, {
    orientation: 'left',
    overflow: true,
    delay: 1,
    scale: 1.3,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var sectorsAnimation_3 = document.querySelector(".sectors-animation_3");
  new simpleParallax(sectorsAnimation_3, {
    orientation: 'right',
    overflow: true,
    delay: 1.2,
    scale: 1.6,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var sectorsAnimation_4 = document.querySelector(".sectors-animation_4");
  new simpleParallax(sectorsAnimation_4, {
    orientation: 'down left',
    overflow: true,
    delay: 1.1,
    scale: 1.4,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var sectorsAnimation_5 = document.querySelector(".sectors-animation_5");
  new simpleParallax(sectorsAnimation_5, {
    orientation: 'down left',
    overflow: true,
    delay: .7,
    scale: 1.3,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var sectorsAnimation_6 = document.querySelector(".sectors-animation_6");
  new simpleParallax(sectorsAnimation_6, {
    orientation: 'down left',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var sectorsAnimation_7 = document.querySelector(".sectors-animation_7");
  new simpleParallax(sectorsAnimation_7, {
    orientation: 'down right',
    overflow: true,
    delay: 1,
    scale: 1.3,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var sectorsAnimation_8 = document.querySelector(".sectors-animation_8");
  new simpleParallax(sectorsAnimation_8, {
    orientation: 'down',
    overflow: true,
    delay: 1.1,
    scale: 1.8,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var sectorsAnimation_9 = document.querySelector(".sectors-animation-tr_2");
  new simpleParallax(sectorsAnimation_9, {
    orientation: 'down',
    overflow: true,
    delay: 1.2,
    scale: 1.9,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var sectorsAnimation_101 = document.querySelector(".sectors-animation-tr_1");
  new simpleParallax(sectorsAnimation_101, {
    orientation: 'down',
    overflow: true,
    delay: .9,
    scale: 1.4,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
} //del animate


var sectorsAnimation_1 = document.querySelector(".sectors-animation_1");

if (sectorsAnimation_1) {
  sectorsAnimation_1.addEventListener('animationend', function () {
    sectorsAnimation_1.classList.remove('animate__animated', 'animate__fadeInDown', 'animate__delay-3s');
    setTimeout(parallaxsectorsInit, 500);
  });
}

var sectorsAnimation_2 = document.querySelector(".sectors-animation_2");

if (sectorsAnimation_2) {
  sectorsAnimation_2.addEventListener('animationend', function () {
    sectorsAnimation_2.classList.remove('animate__animated', 'animate__fadeInLeft', 'animate__delay-2s');
  });
}

var sectorsAnimation_3 = document.querySelector(".sectors-animation_3");

if (sectorsAnimation_3) {
  sectorsAnimation_3.addEventListener('animationend', function () {
    sectorsAnimation_3.classList.remove('animate__animated', 'animate__fadeInLeft', 'animate__delay-2s');
  });
}

var sectorsAnimation_4 = document.querySelector(".sectors-animation_4");

if (sectorsAnimation_4) {
  sectorsAnimation_4.addEventListener('animationend', function () {
    sectorsAnimation_4.classList.remove('animate__animated', 'animate__fadeInRight', 'animate__delay-2s');
  });
}

var sectorsAnimation_5 = document.querySelector(".sectors-animation_5");

if (sectorsAnimation_5) {
  sectorsAnimation_5.addEventListener('animationend', function () {
    sectorsAnimation_5.classList.remove('animate__animated', 'animate__fadeInDown', 'animate__delay-2s');
  });
}

var sectorsAnimation_6 = document.querySelector(".sectors-animation_6");

if (sectorsAnimation_6) {
  sectorsAnimation_6.addEventListener('animationend', function () {
    sectorsAnimation_6.classList.remove('animate__animated', 'animate__fadeInDown', 'animate__delay-2s');
  });
}

var sectorsAnimation_7 = document.querySelector(".sectors-animation_7");

if (sectorsAnimation_7) {
  sectorsAnimation_7.addEventListener('animationend', function () {
    sectorsAnimation_7.classList.remove('animate__animated', 'animate__fadeInDown', 'animate__delay-2s');
  });
}

var sectorsAnimation_9 = document.querySelector(".sectors-animation-tr_2");

if (sectorsAnimation_9) {
  sectorsAnimation_9.addEventListener('animationend', function () {
    sectorsAnimation_9.classList.remove('animate__animated', 'animate__zoomInUp', 'animate__delay-1s');
  });
}

/***/ }),

/***/ "./src/blocks/modules/parallax/parallax-values.js":
/*!********************************************************!*\
  !*** ./src/blocks/modules/parallax/parallax-values.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//custom 
function parallaxValuesInit() {
  var valuesPageAnimation_1 = document.querySelector(".value-page__animation_1");
  new simpleParallax(valuesPageAnimation_1, {
    orientation: 'down',
    overflow: true,
    delay: .9,
    scale: 2,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var valuesPageAnimation_2 = document.querySelector(".value-page__animation_2");
  new simpleParallax(valuesPageAnimation_2, {
    orientation: 'top right',
    overflow: true,
    delay: .8,
    scale: 1.8,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var valuesPageAnimation_3 = document.querySelector(".value-page__animation_3");
  new simpleParallax(valuesPageAnimation_3, {
    orientation: 'down left',
    overflow: true,
    delay: .7,
    scale: 1.3,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var valuesPageAnimation_4 = document.querySelector(".value-page__animation_4");
  new simpleParallax(valuesPageAnimation_4, {
    orientation: 'down',
    overflow: true,
    delay: .6,
    scale: 1.8,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var valuesPageAnimation_5 = document.querySelector(".value-page__animation_5");
  new simpleParallax(valuesPageAnimation_5, {
    orientation: 'down right',
    overflow: true,
    delay: 1,
    scale: 1.8,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
  var valuesPageAnimation_6 = document.querySelector(".value-page__animation_6");
  new simpleParallax(valuesPageAnimation_6, {
    orientation: 'down',
    overflow: true,
    delay: 1.2,
    scale: 1.9,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
}

var valuesPageAnimation_1 = document.querySelector(".value-page__animation_1");

if (valuesPageAnimation_1) {
  valuesPageAnimation_1.addEventListener('animationend', function () {
    valuesPageAnimation_1.classList.remove('animate__animated', 'animate__fadeIn', 'animate__delay-2s');
    setTimeout(parallaxValuesInit, 1000);
  });
}

var valuesPageAnimation_2 = document.querySelector(".value-page__animation_2");

if (valuesPageAnimation_2) {
  valuesPageAnimation_2.addEventListener('animationend', function () {
    valuesPageAnimation_2.classList.remove('animate__animated', 'animate__fadeIn', 'animate__delay-2s');
  });
}

var valuesPageAnimation_3 = document.querySelector(".value-page__animation_3");

if (valuesPageAnimation_3) {
  valuesPageAnimation_3.addEventListener('animationend', function () {
    valuesPageAnimation_3.classList.remove('animate__animated', 'animate__fadeIn', 'animate__delay-2s');
  });
}

var valuesPageAnimation_4 = document.querySelector(".value-page__animation_4");

if (valuesPageAnimation_4) {
  valuesPageAnimation_4.addEventListener('animationend', function () {
    valuesPageAnimation_4.classList.remove('animate__animated', 'animate__fadeIn', 'animate__delay-2s');
  });
}

var valuesPageAnimation_5 = document.querySelector(".value-page__animation_5");

if (valuesPageAnimation_5) {
  valuesPageAnimation_5.addEventListener('animationend', function () {
    valuesPageAnimation_5.classList.remove('animate__animated', 'animate__fadeIn', 'animate__delay-2s');
  });
}

var valuesPageAnimation_6 = document.querySelector(".value-page__animation_6");

if (valuesPageAnimation_6) {
  valuesPageAnimation_6.addEventListener('animationend', function () {
    valuesPageAnimation_6.classList.remove('animate__animated', 'animate__fadeIn', 'animate__delay-2s');
    setTimeout(parallaxValuesInit, 1000);
  });
}

/***/ }),

/***/ "./src/blocks/modules/parallax/parallax.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/parallax/parallax.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//custom 
function parallaxInit() {
  var FirstPageAnimation_1 = document.querySelector(".first-page__animation_1");
  new simpleParallax(FirstPageAnimation_1, {
    orientation: 'up',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });
  var FirstPageAnimation_3 = document.querySelector(".first-page__animation_3");
  new simpleParallax(FirstPageAnimation_3, {
    orientation: 'down left',
    overflow: true,
    delay: .8,
    scale: 1.5,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });
  var FirstPageAnimation_4 = document.querySelector(".first-page__animation_4");
  new simpleParallax(FirstPageAnimation_4, {
    orientation: 'up',
    overflow: true,
    delay: .7,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });
  var FirstPageAnimation_5 = document.querySelector(".first-page__animation_5");
  new simpleParallax(FirstPageAnimation_5, {
    orientation: 'down left',
    overflow: true,
    delay: 1.2,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });
  var FirstPageAnimation_6 = document.querySelector(".first-page__animation_6");
  new simpleParallax(FirstPageAnimation_6, {
    orientation: 'right',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });
  var FirstPageAnimation_7 = document.querySelector(".first-page__animation_7");
  new simpleParallax(FirstPageAnimation_7, {
    orientation: 'up right',
    overflow: true,
    delay: .6,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });
  var FirstPageAnimation_8 = document.querySelector(".first-page__animation_8");
  new simpleParallax(FirstPageAnimation_8, {
    orientation: 'right',
    overflow: true,
    delay: .7,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });
  var FirstPageAnimation_9 = document.querySelector(".first-page__animation_9");
  new simpleParallax(FirstPageAnimation_9, {
    orientation: 'down right',
    overflow: true,
    delay: .8,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });
  var FirstPageAnimation_10 = document.querySelector(".first-page__animation_10");
  new simpleParallax(FirstPageAnimation_10, {
    orientation: 'right',
    overflow: true,
    delay: 1,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });
  var FirstPageAnimation_11 = document.querySelector(".first-page__animation_11");
  new simpleParallax(FirstPageAnimation_11, {
    orientation: 'down right',
    overflow: true,
    delay: 1.1,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });
  var FirstPageAnimation_12 = document.querySelector(".first-page__animation_12");
  new simpleParallax(FirstPageAnimation_12, {
    orientation: 'down right',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });
  var FirstPageAnimation_expertise = document.querySelector(".first-page__animation_expertise");
  new simpleParallax(FirstPageAnimation_expertise, {
    orientation: 'down',
    overflow: true,
    delay: .7,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });
  var FirstPageAnimation_expertise_1 = document.querySelector(".first-page__animation_expertise-1");
  new simpleParallax(FirstPageAnimation_expertise_1, {
    orientation: 'down right',
    overflow: true,
    delay: .6,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });
  var FirstPageAnimation_expertise_2 = document.querySelector(".first-page__animation_expertise-2");
  new simpleParallax(FirstPageAnimation_expertise_2, {
    orientation: 'down right',
    overflow: true,
    delay: 1.2,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });
}

function dispatch() {
  console.log(window.dispatchEvent(new CustomEvent('resize')));
}

dispatch(); //del animate class

var parallaxFirst = document.querySelector('.first-page__animation_1');

if (parallaxFirst) {
  parallaxFirst.addEventListener('animationend', function () {
    parallaxFirst.classList.remove('animate__rotateInDownLeft', 'animate__delay-2s');
    setTimeout(parallaxInit, 1500);
  });
} //del animate class


var parallaxFirst1 = document.querySelector('.first-page__animation_2');

if (parallaxFirst1) {
  parallaxFirst1.addEventListener('animationend', function () {
    parallaxFirst1.classList.remove('animate__zoomIn', 'animate__delay-3s');
  });
} //del animate class


var parallaxFirst2 = document.querySelector('.first-page__animation_3');

if (parallaxFirst2) {
  parallaxFirst2.addEventListener('animationend', function () {
    parallaxFirst2.classList.remove('animate__zoomIn', 'animate__delay-3s');
  });
} //del animate class


var parallaxFirst3 = document.querySelector('.first-page__animation_4');

if (parallaxFirst3) {
  parallaxFirst3.addEventListener('animationend', function () {
    parallaxFirst3.classList.remove('animate__zoomIn', 'animate__delay-3s');
  });
} //del animate class


var parallaxFirst4 = document.querySelector('.first-page__animation_5');

if (parallaxFirst4) {
  parallaxFirst4.addEventListener('animationend', function () {
    parallaxFirst4.classList.remove('animate__zoomIn', 'animate__delay-3s');
  });
} //del animate class


var parallaxFirst10 = document.querySelector('.first-page__animation_6');

if (parallaxFirst10) {
  parallaxFirst10.addEventListener('animationend', function () {
    parallaxFirst10.classList.remove('animate__lightSpeedInRight', 'animate__delay-2s');
  });
} //del animate class


var parallaxFirst5 = document.querySelector('.first-page__animation_7');

if (parallaxFirst5) {
  parallaxFirst5.addEventListener('animationend', function () {
    parallaxFirst5.classList.remove('animate__zoomIn', 'animate__delay-3s');
  });
} //del animate class


var parallaxFirst11 = document.querySelector('.first-page__animation_8');

if (parallaxFirst11) {
  parallaxFirst11.addEventListener('animationend', function () {
    parallaxFirst11.classList.remove('animate__lightSpeedInRight', 'animate__delay-2s');
  });
} //del animate class


var parallaxFirst6 = document.querySelector('.first-page__animation_9');

if (parallaxFirst6) {
  parallaxFirst6.addEventListener('animationend', function () {
    parallaxFirst6.classList.remove('animate__zoomIn', 'animate__delay-3s');
  });
} //del animate class


var parallaxFirst7 = document.querySelector('.first-page__animation_10');

if (parallaxFirst7) {
  parallaxFirst7.addEventListener('animationend', function () {
    parallaxFirst7.classList.remove('animate__zoomIn', 'animate__delay-3s');
  });
} //del animate class


var parallaxFirst8 = document.querySelector('.first-page__animation_11');

if (parallaxFirst8) {
  parallaxFirst8.addEventListener('animationend', function () {
    parallaxFirst8.classList.remove('animate__zoomIn', 'animate__delay-3s');
  });
} //del animate class


var parallaxFirst9 = document.querySelector('.first-page__animation_12');

if (parallaxFirst9) {
  parallaxFirst9.addEventListener('animationend', function () {
    parallaxFirst9.classList.remove('animate__zoomIn', 'animate__delay-3s');
  });
} //del animate class


var parallaxImg1 = document.querySelector('.first-page__animation_expertise-2');

if (parallaxImg1) {
  parallaxImg1.addEventListener('animationend', function () {
    parallaxImg1.classList.remove('animate__zoomInRight', 'animate__delay-2s');
  });
} //del animate class


var parallaxImg2 = document.querySelector('.first-page__animation_expertise');

if (parallaxImg2) {
  parallaxImg2.addEventListener('animationend', function () {
    parallaxImg2.classList.remove('animate__fadeInLeft');
  });
}

/***/ }),

/***/ "./src/blocks/modules/sections/sections.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/sections/sections.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hiddenCard = document.querySelectorAll(".commitment-hidden");

if (hiddenCard) {
  var addRemoveOnResize = function addRemoveOnResize() {
    if (window.innerWidth <= 768) {
      hiddenCard.classList.remove('column-one-height');
    } else {
      hiddenCard.classList.add('column-one-height');
    }
  };

  document.addEventListener('resize', function () {
    addRemoveOnResize();
  });
}

if (document.querySelectorAll('[data-tab]')) {
  var Tabs = function Tabs() {
    var bindAll = function bindAll() {
      var menuElements = document.querySelectorAll('[data-tab]');

      for (var i = 0; i < menuElements.length; i++) {
        menuElements[i].addEventListener('click', change, false);
      }
    };

    var clear = function clear() {
      var menuElements = document.querySelectorAll('[data-tab]');

      for (var i = 0; i < menuElements.length; i++) {
        menuElements[i].classList.remove('active');
        var id = menuElements[i].getAttribute('data-tab');
        document.getElementById(id).classList.remove('active');
      }
    };

    var change = function change(e) {
      clear();
      e.target.classList.add('active');
      var id = e.currentTarget.getAttribute('data-tab');
      document.getElementById(id).classList.add('active');
    };

    bindAll();
  };

  var connectTabs = new Tabs();
}

var tabLink = Array.from(document.querySelectorAll('.carriers-choise__link'));

var handleClick = function handleClick(e) {
  e.preventDefault();
  tabLink.forEach(function (node) {
    node.classList.remove('carriers-choise__link_active');
  });
  e.currentTarget.classList.add('carriers-choise__link_active');
};

tabLink.forEach(function (node) {
  node.addEventListener('click', handleClick);
}); // let tabLinkPagination = Array.from(document.querySelectorAll('.carriers-choise__link-pagination'));
// const handleClickPagination = (e) => {
//     e.preventDefault();
//     tabLinkPagination.forEach(node => {
//         node.classList.remove('carriers-choise__link_active-pagination');
//     });
//     e.currentTarget.classList.add('carriers-choise__link_active-pagination');
// }
// tabLinkPagination.forEach(node => {
//     node.addEventListener('click', handleClickPagination)
// });

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_parallax_parallax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/parallax/parallax */ "./src/blocks/modules/parallax/parallax.js");
/* harmony import */ var _modules_parallax_parallax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_parallax_parallax__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_parallax_parallax_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/parallax/parallax-footer */ "./src/blocks/modules/parallax/parallax-footer.js");
/* harmony import */ var _modules_parallax_parallax_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_parallax_parallax_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_parallax_parallax_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/parallax/parallax-about */ "./src/blocks/modules/parallax/parallax-about.js");
/* harmony import */ var _modules_parallax_parallax_about__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_parallax_parallax_about__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_parallax_parallax_sectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/parallax/parallax-sectors */ "./src/blocks/modules/parallax/parallax-sectors.js");
/* harmony import */ var _modules_parallax_parallax_sectors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_parallax_parallax_sectors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_parallax_parallax_news__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/parallax/parallax-news */ "./src/blocks/modules/parallax/parallax-news.js");
/* harmony import */ var _modules_parallax_parallax_news__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_parallax_parallax_news__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_parallax_parallax_carriers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/parallax/parallax-carriers */ "./src/blocks/modules/parallax/parallax-carriers.js");
/* harmony import */ var _modules_parallax_parallax_carriers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_parallax_parallax_carriers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_parallax_parallax_values__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/parallax/parallax-values */ "./src/blocks/modules/parallax/parallax-values.js");
/* harmony import */ var _modules_parallax_parallax_values__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_parallax_parallax_values__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_parallax_parallax_innovation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/parallax/parallax-innovation */ "./src/blocks/modules/parallax/parallax-innovation.js");
/* harmony import */ var _modules_parallax_parallax_innovation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_parallax_parallax_innovation__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_sections_sections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/sections/sections */ "./src/blocks/modules/sections/sections.js");
/* harmony import */ var _modules_sections_sections__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_sections_sections__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_btn_btn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/btn/btn */ "./src/blocks/modules/btn/btn.js");
/* harmony import */ var _modules_btn_btn__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_btn_btn__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modules_clients_clients__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/clients/clients */ "./src/blocks/modules/clients/clients.js");
/* harmony import */ var _modules_clients_clients__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_modules_clients_clients__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_our_commitment_our_commitment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/our-commitment/our-commitment */ "./src/blocks/modules/our-commitment/our-commitment.js");
/* harmony import */ var _modules_our_commitment_our_commitment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_modules_our_commitment_our_commitment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_13__);
//parallax







 //sections

 //blocks







/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map