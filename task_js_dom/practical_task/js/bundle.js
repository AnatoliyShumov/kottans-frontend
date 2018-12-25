/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/js/main.js
function foo() {
  console.log("1111");
}



// CONCATENATED MODULE: ./src/js/index.js
//import jQuery from "jquery";
//import popper from "popper.js";
//import bootstrap from "bootstrap";



let body = document.body;
let nameCat = document.getElementById('nameCat');
let imgSrc = document.getElementById('img-src');
let content = document.getElementById('content');

let wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', ()=>{
  wrapperMenu.classList.toggle('open');
  console.log("1");
  if(body.classList.contains('open-panel')){
    body.classList.remove('open-panel');
    wrapperMenu.classList.remove("open");
    console.log("2");
  }
  else {
    wrapperMenu.classList.add("open");
    body.classList.add("open-panel");
  }
});


const cats = [
  {
    name:"Британський",
    description:"Яскравим представником домашніх улюбленців є британський короткошерстий кіт. Ця порода котів була штучно виведена у Великобританії наприкінці 19 століття, вона стала результатом «альянсу» Персидського кота і домашніх англійських кішок. Відтоді британський короткошерстий кіт став чи не найпопулярнішим домашнім улюбленцем домогосподарок на своїй батьківщині.",
    catSrc:"img/img-1.jpg",
    id:"1"
  },
  {
    name:"Єгипетський Мау",
    description:"Ці кішки - легендарні. Їхні предки в Стародавньому Єгипті були в такій пошані, що за життя їх шанували як божества, а після того, як кішка відправлялася по водах Нілу в вічне царство, господарі голили в пам'ять про неї брови і довго-довго були сумними, малюючи картинки на папірусі в честь хвостатого небожителя.",
    catSrc:"img/img-2.jpg",
    id:"2"
  },
  {
    name:"Сомалійський",
    description:"Сомалійська кішка – це довгошерста порода котів, яка походить від абіссинської породи. Головними зовнішніми особливостями сомалійських котів є довгий красиво опущений хвіст, комірець та «штанці» (тобто на шиї на лапах шерсть довша, ніж на інших частинах тіла). Крім того, виділяє цю породу серед інших і тікінг – варіант забарвлення шерсті у якому чергуються світлі та темні смужки. Таких смужок у кішки сомалі повинно бути щонайменше дві на кожному волоску, але чим їх більше – тим дорожча кішка.",
    catSrc:"img/img-3.jpg",
    id:"3"
  },
  {
    name:"Тойгер",
    description:"Породистый Тойгер обязательно должен быть полосатым, словно настоящий тигр. Он должен иметь полосы даже на спине и животе, но это не обязательно должны быть кольца. То есть полосы местами могут быть разорванными между собой, а также допускаются изгибы полос. Однако это должны быть именно полосы черного или темно-коричневого цвета, или же могут быть сразу двухцветными.",
    catSrc:"img/img-4.jpg",
    id:"4"
  },
  {
    name:"Сіамський",
    description:"Сіамські коти – це порода маленьких легких котів з довгою клиноподібною головою. Завдяки особливому забарвленню кінцівок, яке не властиве більше жодним породам котів, сіамського кота практично неможливо не впізнати. Також ці коти популярні завдяки своїй первозданності, адже протягом всієї їхньої історії їх не схрещували з іншими породами.",
    catSrc:"img/img-5.jpg",
    id:"5"
  },
];

for(let i = 0,  len = cats.length; i<len; i++){
  let cat = cats[i];
  let ul = document.getElementById('list');
  let li = document.createElement('li');
  let a = document.createElement('a');
  a.setAttribute('href','#');
  a.setAttribute('id', cat.id);
  a.innerText = cats[i].name;
  ul.insertBefore(li,null);
  li.insertBefore(a,null);
}

document.getElementById("list").addEventListener("click",function(e) {



  if(e.target && e.target.nodeName == "A") {
     let id = e.target.id;
     let idCats = cats.find(x => x.id === id);
     nameCat.innerText = idCats.name;
     imgSrc.setAttribute('src', idCats.catSrc);
     content.innerText = idCats.description;
     body.classList.remove('open-panel');
     wrapperMenu.classList.remove("open");
  }
});

let defaultCat = ()=> {
  nameCat.innerText = cats[0].name;
  imgSrc.setAttribute('src', cats[0].catSrc);
  content.innerText = cats[0].description;
};

document.addEventListener('DOMContentLoaded', defaultCat);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map