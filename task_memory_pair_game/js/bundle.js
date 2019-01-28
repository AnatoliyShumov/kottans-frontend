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

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

//let getCounter = document.getElementsByClassName("counter")[0];
let images = ["rick_and_morty_1.jpg", "rick_and_morty_2.jpg", "rick_and_morty_3.jpg", "rick_and_morty_4.jpg", "rick_and_morty_5.jpg", "rick_and_morty_6.jpg"];
let counter = 0;
let startSound = 'https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/710/original/Show_me_what_you_got!.wav?1469744432';
var endSound = 'https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/706/original/I_like_what_you_got.wav?1469744420';
let body = document.getElementsByTagName("body")[0];
let startButton = document.getElementsByClassName("button")[0];
let restartButton = document.createElement("div");
let  getGame = document.getElementsByClassName("game")[0];
let disableStartButton = false;
let disableRestartButton = false;
let counterGame = 0;
let soundPlay = (url) => {
  var a = new Audio(url);
  a.play();
};


let duplicateElements =  (array, times)=> {
  return array.reduce((res, current) => {
    return res.concat(Array(times).fill(current))
  }, []);
};
let randomDublicateImg = duplicateElements(images,2).sort(function(a, b){return 0.5 - Math.random()});

let  renderBlock = (images) => {
let game = document.createElement("div");
  game.classList.add("game");
  document.getElementsByClassName("wrap-game")[0].appendChild(game);

  for ( let i = 0; i < 12; i++) {
    let div_1 = document.createElement("div");
    let div_2 = document.createElement("div");
    let img_1 = document.createElement("img");
    let img_2 = document.createElement("img");

    img_1.setAttribute("src", "img/default.jpg" );
    img_2.setAttribute("src", "img/"+images[i] );
    img_1.classList.add("card__face");
    img_1.classList.add("card__face--front");
    img_2.classList.add("card__face");
    img_2.classList.add("card__face--back");
    div_1.classList.add("card");
    div_1.classList.add("scene--card");
    div_2.className = "card";

    game.appendChild(div_1);
    div_1.appendChild(div_2);
    div_2.appendChild(img_1);
    div_2.appendChild(img_2);
  }
};


let cromulon = (url) => setTimeout(()=>{ document.getElementsByClassName("cromulon")[0].classList.add("activated");
  document.getElementsByClassName("cromulon")[0].setAttribute('style','visibility:visible;');
  soundPlay(url);

  setTimeout(()=>{
    document.getElementsByClassName("cromulon")[0].classList.remove("activated");
    if (document.getElementsByClassName("button")[0]) {
      document.getElementsByClassName("button")[0].remove();
    }

  }, 2000);

  setTimeout(()=>{
    document.getElementsByClassName("cromulon")[0].setAttribute('style','visibility:hidden');
  }, 3800)},1000)

let game = (url)=> {
cromulon(url);
  setTimeout(()=>{
    renderBlock(randomDublicateImg);
    document.getElementsByClassName("game")[0].classList.add("start-animation");
  }, 2000);
}

let startGame = startButton.addEventListener("click", ()=>{

  if(disableStartButton === true){
    console.log("aaa")
    return;
  }
  game(startSound);
  disableStartButton = true;

});

let restartGame = restartButton.addEventListener("click", ()=>{
  if(disableRestartButton === true){
    console.log("bbbb")
    return;
  }
  counter = 0;
  document.getElementsByClassName("end-game")[0].classList.remove("start-animation");
  document.getElementsByClassName("end-game")[0].classList.add("end-animation");
  setTimeout(()=>{
    document.getElementsByClassName("end-game")[0].remove();
  }, 1000);

  setTimeout(()=>{
    renderBlock(randomDublicateImg);
    document.getElementsByClassName("game")[0].classList.add("start-animation");
  }, 2000);
  disableRestartButton = true;
  console.log("end")
});

let endGame = ()=> {
  counterGame = 0;
  cromulon(endSound);
  disableRestartButton = false;
  setTimeout(()=>{
    let container = document.createElement("div");
    let score = document.createElement("p");
    let p = document.createElement("p");
    container.classList.add("end-game");
    container.classList.add("start-animation");
    restartButton.classList.add("button-restart");
    body.insertBefore(container, document.body.childNodes[4]);
    container.appendChild(restartButton);
    score.innerHTML = "I like what you got! It took you" + " "+ counter + " " +  "tries.";
    restartButton.innerHTML = "RESTART GAME";
    container.appendChild(score);
    restartButton.appendChild(p);
  },3000)
}




let gameLogic = (e)=> {
  // e.target is our targetted element.
  console.log(e, e.target);
  e.target.parentNode.classList.add('is-flipped');
  let queryActive = document.querySelectorAll(".is-flipped");
  let img_1 = queryActive[0].lastChild.getAttribute("src");
  let img_2 = queryActive[1].lastChild.getAttribute("src");

  console.log("counter" + counter)
  if(queryActive.length > 1 && img_1 === img_2){
    setTimeout(function() {
      queryActive[0].classList.remove("is-flipped");
      queryActive[1].classList.remove("is-flipped");
      queryActive[0].lastChild.parentNode.parentNode.style.border = "none";
      queryActive[1].lastChild.parentNode.parentNode.style.border = "none";
      queryActive[0].lastChild.parentNode.parentNode.classList.add('anim');
      queryActive[1].lastChild.parentNode.parentNode.classList.add("anim");
      console.log(queryActive[1].lastChild.parentNode.parentNode, counter);
    }, 600);

    setTimeout(function() {
      queryActive[0].classList.add("hidden");
      queryActive[1].classList.add("hidden");
    }, 900);

    counter++ ;
    counterGame++
    console.log(counterGame)
    if(counterGame === 6) {
      document.getElementsByClassName("game")[0].remove();
      endGame();
    }
  }
  else{
    setTimeout(()=>{
      counter++;
      console.log("buy-buy");
      queryActive[0].classList.remove("is-flipped");
      queryActive[1].classList.remove("is-flipped");
    },600)
  }
};

document.getElementsByClassName("wrap-game")[0].addEventListener("click", gameLogic)


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map