/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/initial-page.js":
/*!*****************************!*\
  !*** ./src/initial-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMiddleSection: () => (/* binding */ renderMiddleSection),
/* harmony export */   renderTopSection: () => (/* binding */ renderTopSection)
/* harmony export */ });


const divContent = document.body.querySelector("#content");

// Section where tab browsering will work
function renderTopSection() {
  const divTopSection = document.createElement("div");
  divTopSection.classList.add("top-section");
  divContent.append(divTopSection);

  for (let i = 0; i < 3; i++) {
    const btn = document.createElement("button");
    btn.textContent = i === 0 ? "Home" : i === 1 ? "Menu" : "Contact";
    divTopSection.append(btn);
  }
}

// Section where all initial content will be shown
function renderMiddleSection() {
  const divMiddleSection = document.createElement("div");
  divMiddleSection.classList.add("home-section");
  divContent.append(divMiddleSection);

  const heroTitle = document.createElement("h1");
  heroTitle.textContent = "The Borsch";
  divMiddleSection.append(heroTitle);

  const divRestaurantPhotos = document.createElement("div");
  divRestaurantPhotos.classList.add("images");
  divMiddleSection.append(divRestaurantPhotos);
  for (let i = 0; i < 3; i++) {
    const img = document.createElement("img");
    img.src =
      i === 0
        ? "../src/images/exterior.jpeg"
        : i === 1
        ? "../src/images/interior.jpg"
        : "../src/images/counter.jpg";
    img.height = "350";
    img.width = "350";
    divRestaurantPhotos.append(img);
  }

  const shortDescription = document.createElement("h3");
  shortDescription.textContent =
    "A place to return to for the best Ukrainian borsch in Prague!";
  divMiddleSection.append(shortDescription);

  const restaurantStory = document.createElement("p");
  restaurantStory.textContent =
    " Our cozy restaurant was opened back in 2021. As our main mission we saw the need to spread the word about the Ukrainian culture abroad and one of its biggest achievements - soup called borsch. Some people say it's just tasty soup, but we think there is more to it. The history, the symbol of true identity and the strongest nation.";
  divMiddleSection.append(restaurantStory);

  const offerForVisiting = document.createElement("h3");
  offerForVisiting.textContent =
    "If that sounds interesting to you, please consider stopping by for a bowl of our special Ukrainian elixir!";
  divMiddleSection.append(offerForVisiting);

  const tableWithSchedule = document.createElement("table");
  divMiddleSection.append(tableWithSchedule);

  const tableHeader = document.createElement("th");
  tableHeader.textContent = "We are open";
  tableWithSchedule.append(tableHeader);

  for (let i = 0; i < 7; i++) {
    const tableRow = document.createElement("tr");
    for (let j = 0; j < 2; j++) {
      const tableData = document.createElement("td");
      if (j === 1 && i < 5) {
        tableData.textContent = "11:00-19:00";
      }

      if (j === 0) {
        switch (i) {
          case 0:
            tableData.textContent = "Monday";
            break;
          case 1:
            tableData.textContent = "Tuesday";
            break;
          case 2:
            tableData.textContent = "Wednesday";
            break;
          case 3:
            tableData.textContent = "Thursday";
            break;
          case 4:
            tableData.textContent = "Friday";
        }
      }

      if (i === 5) {
        tableData.textContent = j === 0 ? "Saturday" : "11:00-18:00";
      }

      if (i === 6) {
        tableData.textContent = j === 0 ? "Sunday" : "Closed";
      }

      tableRow.append(tableData);
    }
    tableWithSchedule.append(tableRow);
  }

  const addressHomePage = document.createElement("div");
  divMiddleSection.append(addressHomePage);
  const addressBoldText = document.createElement("h3");
  addressBoldText.textContent =
    "Our Address: U Vodarny 10, 130 00 Prague 3 - Vinohrady";
  addressHomePage.append(addressBoldText);
}


/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMenu: () => (/* binding */ renderMenu)
/* harmony export */ });


// append more elements inside of the same parenthesis
const divContent = document.body.querySelector("#content");

function renderMenu() {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-section");
  divContent.append(menuDiv);

  const currentPageTitle = document.createElement("h1");
  currentPageTitle.textContent = "Our menu";
  menuDiv.append(currentPageTitle);

  //   soups
  const soupsDiv = document.createElement("div");
  soupsDiv.classList.add("soups");
  menuDiv.append(soupsDiv);

  const soupTitle = document.createElement("h2");
  soupTitle.textContent = "Soups";
  soupsDiv.append(soupTitle);

  //   divs with soup options on the menu
  for (let i = 0; i < 2; i++) {
    const div = document.createElement("div");
    for (let j = 0; j < 1; j++) {
      const header = document.createElement("h3");
      const image = document.createElement("img");
      image.height = "350";
      image.width = "350";

      switch (i) {
        case 0:
          header.textContent = "Beef borsch 0.4l - 99Czk";
          image.src = "../src/images/menu/beef borsch.jpg";
          break;
        case 1:
          header.textContent =
            "Vegetarian borscht with spruce mushroom 0.4l - 99Czk";
          image.src = "../src/images/menu/Vegeterian borsch.png";
          break;
      }
      div.append(header, image);
    }
    soupsDiv.append(div);
  }

  //   main courses
  const mainCoursesDiv = document.createElement("div");
  mainCoursesDiv.classList.add("main-courses");
  menuDiv.append(mainCoursesDiv);

  const mainCoursesTitle = document.createElement("h2");
  mainCoursesTitle.textContent = "Ukrainian specialities";
  mainCoursesDiv.append(mainCoursesTitle);

  for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    const header = document.createElement("h3");
    const img = document.createElement("img");
    div.append(header, img);

    img.height = "350";
    img.width = "350";

    switch (i) {
      case 0:
        header.textContent = "Kyiv cutlet with mashed potatoes - 245Czk";
        img.src = "../src/images/menu/Kyiv cutlet.png";
        break;
      case 1:
        header.textContent = "Holubtsi (cabbage rolls with meat) - 205Czk";
        img.src = "../src/images/menu/Holubtsi.png";
        break;
      case 2:
        header.textContent =
          "Nalysnyky stuffed with pork tongues and mushrooms served with asparagus - 180Czk";
        img.src = "../src/images/menu/Nalysnyky.png";
        break;
      case 3:
        header.textContent =
          " Varenyky with potato filling (bags filled with potatoes) - 110Czk";
        img.src = "../src/images/menu/Varenyky.png";
        break;
      case 4:
        header.textContent = "Deruns with sour cream and salad - 90Czk";
        img.src = "../src/images/menu/Deruns.png";
        break;
      case 5:
        header.textContent = "Salo with borscht (two types of lard) - 70Czk";
        img.src = "../src/images/menu/Salo.png";
        break;
    }
    mainCoursesDiv.append(div);
  }

  //   desserts
  const dessertsDiv = document.createElement("div");
  dessertsDiv.classList.add("desserts");
  menuDiv.append(dessertsDiv);

  const dessertsTitle = document.createElement("h2");
  dessertsTitle.textContent = "Desserts";
  dessertsDiv.append(dessertsTitle);

  for (let i = 0; i < 2; i++) {
    const div = document.createElement("div");
    const header = document.createElement("h3");
    const image = document.createElement("img");
    div.append(header, image);

    // do it in CSS instead of JS?
    image.height = "350";
    image.width = "350";

    switch (i) {
      case 0:
        header.textContent = "Varenyky with sour cherries - 120Czk";
        image.src = "../src/images/menu/Sweet varenyky.png";
        break;
      case 1:
        header.textContent = "Cheesecakes (cottage cheese pancakes) - 115Czk";
        image.src = "../src/images/menu/Cheesecakes.png";
        break;
    }
    dessertsDiv.append(div);
  }
}


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
/******/ 			// no module.id needed
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page */ "./src/initial-page.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-page */ "./src/menu-page.js");



(0,_initial_page__WEBPACK_IMPORTED_MODULE_0__.renderTopSection)();
(0,_initial_page__WEBPACK_IMPORTED_MODULE_0__.renderMiddleSection)();
(0,_menu_page__WEBPACK_IMPORTED_MODULE_1__.renderMenu)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7O0FBRWpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQy9Hc0I7O0FBRXRCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDaElBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnNFO0FBQzdCOztBQUV6QywrREFBZ0I7QUFDaEIsa0VBQW1CO0FBQ25CLHNEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS8uL3NyYy9pbml0aWFsLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS8uL3NyYy9tZW51LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0cmF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0cmF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgcmVuZGVyVG9wU2VjdGlvbiwgcmVuZGVyTWlkZGxlU2VjdGlvbiB9O1xuXG5jb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbi8vIFNlY3Rpb24gd2hlcmUgdGFiIGJyb3dzZXJpbmcgd2lsbCB3b3JrXG5mdW5jdGlvbiByZW5kZXJUb3BTZWN0aW9uKCkge1xuICBjb25zdCBkaXZUb3BTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2VG9wU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwidG9wLXNlY3Rpb25cIik7XG4gIGRpdkNvbnRlbnQuYXBwZW5kKGRpdlRvcFNlY3Rpb24pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSBpID09PSAwID8gXCJIb21lXCIgOiBpID09PSAxID8gXCJNZW51XCIgOiBcIkNvbnRhY3RcIjtcbiAgICBkaXZUb3BTZWN0aW9uLmFwcGVuZChidG4pO1xuICB9XG59XG5cbi8vIFNlY3Rpb24gd2hlcmUgYWxsIGluaXRpYWwgY29udGVudCB3aWxsIGJlIHNob3duXG5mdW5jdGlvbiByZW5kZXJNaWRkbGVTZWN0aW9uKCkge1xuICBjb25zdCBkaXZNaWRkbGVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2TWlkZGxlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaG9tZS1zZWN0aW9uXCIpO1xuICBkaXZDb250ZW50LmFwcGVuZChkaXZNaWRkbGVTZWN0aW9uKTtcblxuICBjb25zdCBoZXJvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlcm9UaXRsZS50ZXh0Q29udGVudCA9IFwiVGhlIEJvcnNjaFwiO1xuICBkaXZNaWRkbGVTZWN0aW9uLmFwcGVuZChoZXJvVGl0bGUpO1xuXG4gIGNvbnN0IGRpdlJlc3RhdXJhbnRQaG90b3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXZSZXN0YXVyYW50UGhvdG9zLmNsYXNzTGlzdC5hZGQoXCJpbWFnZXNcIik7XG4gIGRpdk1pZGRsZVNlY3Rpb24uYXBwZW5kKGRpdlJlc3RhdXJhbnRQaG90b3MpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nLnNyYyA9XG4gICAgICBpID09PSAwXG4gICAgICAgID8gXCIuLi9zcmMvaW1hZ2VzL2V4dGVyaW9yLmpwZWdcIlxuICAgICAgICA6IGkgPT09IDFcbiAgICAgICAgPyBcIi4uL3NyYy9pbWFnZXMvaW50ZXJpb3IuanBnXCJcbiAgICAgICAgOiBcIi4uL3NyYy9pbWFnZXMvY291bnRlci5qcGdcIjtcbiAgICBpbWcuaGVpZ2h0ID0gXCIzNTBcIjtcbiAgICBpbWcud2lkdGggPSBcIjM1MFwiO1xuICAgIGRpdlJlc3RhdXJhbnRQaG90b3MuYXBwZW5kKGltZyk7XG4gIH1cblxuICBjb25zdCBzaG9ydERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBzaG9ydERlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICBcIkEgcGxhY2UgdG8gcmV0dXJuIHRvIGZvciB0aGUgYmVzdCBVa3JhaW5pYW4gYm9yc2NoIGluIFByYWd1ZSFcIjtcbiAgZGl2TWlkZGxlU2VjdGlvbi5hcHBlbmQoc2hvcnREZXNjcmlwdGlvbik7XG5cbiAgY29uc3QgcmVzdGF1cmFudFN0b3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHJlc3RhdXJhbnRTdG9yeS50ZXh0Q29udGVudCA9XG4gICAgXCIgT3VyIGNvenkgcmVzdGF1cmFudCB3YXMgb3BlbmVkIGJhY2sgaW4gMjAyMS4gQXMgb3VyIG1haW4gbWlzc2lvbiB3ZSBzYXcgdGhlIG5lZWQgdG8gc3ByZWFkIHRoZSB3b3JkIGFib3V0IHRoZSBVa3JhaW5pYW4gY3VsdHVyZSBhYnJvYWQgYW5kIG9uZSBvZiBpdHMgYmlnZ2VzdCBhY2hpZXZlbWVudHMgLSBzb3VwIGNhbGxlZCBib3JzY2guIFNvbWUgcGVvcGxlIHNheSBpdCdzIGp1c3QgdGFzdHkgc291cCwgYnV0IHdlIHRoaW5rIHRoZXJlIGlzIG1vcmUgdG8gaXQuIFRoZSBoaXN0b3J5LCB0aGUgc3ltYm9sIG9mIHRydWUgaWRlbnRpdHkgYW5kIHRoZSBzdHJvbmdlc3QgbmF0aW9uLlwiO1xuICBkaXZNaWRkbGVTZWN0aW9uLmFwcGVuZChyZXN0YXVyYW50U3RvcnkpO1xuXG4gIGNvbnN0IG9mZmVyRm9yVmlzaXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIG9mZmVyRm9yVmlzaXRpbmcudGV4dENvbnRlbnQgPVxuICAgIFwiSWYgdGhhdCBzb3VuZHMgaW50ZXJlc3RpbmcgdG8geW91LCBwbGVhc2UgY29uc2lkZXIgc3RvcHBpbmcgYnkgZm9yIGEgYm93bCBvZiBvdXIgc3BlY2lhbCBVa3JhaW5pYW4gZWxpeGlyIVwiO1xuICBkaXZNaWRkbGVTZWN0aW9uLmFwcGVuZChvZmZlckZvclZpc2l0aW5nKTtcblxuICBjb25zdCB0YWJsZVdpdGhTY2hlZHVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgZGl2TWlkZGxlU2VjdGlvbi5hcHBlbmQodGFibGVXaXRoU2NoZWR1bGUpO1xuXG4gIGNvbnN0IHRhYmxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICB0YWJsZUhlYWRlci50ZXh0Q29udGVudCA9IFwiV2UgYXJlIG9wZW5cIjtcbiAgdGFibGVXaXRoU2NoZWR1bGUuYXBwZW5kKHRhYmxlSGVhZGVyKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIGNvbnN0IHRhYmxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMjsgaisrKSB7XG4gICAgICBjb25zdCB0YWJsZURhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICBpZiAoaiA9PT0gMSAmJiBpIDwgNSkge1xuICAgICAgICB0YWJsZURhdGEudGV4dENvbnRlbnQgPSBcIjExOjAwLTE5OjAwXCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChqID09PSAwKSB7XG4gICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHRhYmxlRGF0YS50ZXh0Q29udGVudCA9IFwiTW9uZGF5XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB0YWJsZURhdGEudGV4dENvbnRlbnQgPSBcIlR1ZXNkYXlcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHRhYmxlRGF0YS50ZXh0Q29udGVudCA9IFwiV2VkbmVzZGF5XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICB0YWJsZURhdGEudGV4dENvbnRlbnQgPSBcIlRodXJzZGF5XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICB0YWJsZURhdGEudGV4dENvbnRlbnQgPSBcIkZyaWRheVwiO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpID09PSA1KSB7XG4gICAgICAgIHRhYmxlRGF0YS50ZXh0Q29udGVudCA9IGogPT09IDAgPyBcIlNhdHVyZGF5XCIgOiBcIjExOjAwLTE4OjAwXCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpID09PSA2KSB7XG4gICAgICAgIHRhYmxlRGF0YS50ZXh0Q29udGVudCA9IGogPT09IDAgPyBcIlN1bmRheVwiIDogXCJDbG9zZWRcIjtcbiAgICAgIH1cblxuICAgICAgdGFibGVSb3cuYXBwZW5kKHRhYmxlRGF0YSk7XG4gICAgfVxuICAgIHRhYmxlV2l0aFNjaGVkdWxlLmFwcGVuZCh0YWJsZVJvdyk7XG4gIH1cblxuICBjb25zdCBhZGRyZXNzSG9tZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXZNaWRkbGVTZWN0aW9uLmFwcGVuZChhZGRyZXNzSG9tZVBhZ2UpO1xuICBjb25zdCBhZGRyZXNzQm9sZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGFkZHJlc3NCb2xkVGV4dC50ZXh0Q29udGVudCA9XG4gICAgXCJPdXIgQWRkcmVzczogVSBWb2Rhcm55IDEwLCAxMzAgMDAgUHJhZ3VlIDMgLSBWaW5vaHJhZHlcIjtcbiAgYWRkcmVzc0hvbWVQYWdlLmFwcGVuZChhZGRyZXNzQm9sZFRleHQpO1xufVxuIiwiZXhwb3J0IHsgcmVuZGVyTWVudSB9O1xuXG4vLyBhcHBlbmQgbW9yZSBlbGVtZW50cyBpbnNpZGUgb2YgdGhlIHNhbWUgcGFyZW50aGVzaXNcbmNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtc2VjdGlvblwiKTtcbiAgZGl2Q29udGVudC5hcHBlbmQobWVudURpdik7XG5cbiAgY29uc3QgY3VycmVudFBhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY3VycmVudFBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IFwiT3VyIG1lbnVcIjtcbiAgbWVudURpdi5hcHBlbmQoY3VycmVudFBhZ2VUaXRsZSk7XG5cbiAgLy8gICBzb3Vwc1xuICBjb25zdCBzb3Vwc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNvdXBzRGl2LmNsYXNzTGlzdC5hZGQoXCJzb3Vwc1wiKTtcbiAgbWVudURpdi5hcHBlbmQoc291cHNEaXYpO1xuXG4gIGNvbnN0IHNvdXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgc291cFRpdGxlLnRleHRDb250ZW50ID0gXCJTb3Vwc1wiO1xuICBzb3Vwc0Rpdi5hcHBlbmQoc291cFRpdGxlKTtcblxuICAvLyAgIGRpdnMgd2l0aCBzb3VwIG9wdGlvbnMgb24gdGhlIG1lbnVcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTsgaisrKSB7XG4gICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBpbWFnZS5oZWlnaHQgPSBcIjM1MFwiO1xuICAgICAgaW1hZ2Uud2lkdGggPSBcIjM1MFwiO1xuXG4gICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQmVlZiBib3JzY2ggMC40bCAtIDk5Q3prXCI7XG4gICAgICAgICAgaW1hZ2Uuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL21lbnUvYmVlZiBib3JzY2guanBnXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgXCJWZWdldGFyaWFuIGJvcnNjaHQgd2l0aCBzcHJ1Y2UgbXVzaHJvb20gMC40bCAtIDk5Q3prXCI7XG4gICAgICAgICAgaW1hZ2Uuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL21lbnUvVmVnZXRlcmlhbiBib3JzY2gucG5nXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkaXYuYXBwZW5kKGhlYWRlciwgaW1hZ2UpO1xuICAgIH1cbiAgICBzb3Vwc0Rpdi5hcHBlbmQoZGl2KTtcbiAgfVxuXG4gIC8vICAgbWFpbiBjb3Vyc2VzXG4gIGNvbnN0IG1haW5Db3Vyc2VzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvdXJzZXNEaXYuY2xhc3NMaXN0LmFkZChcIm1haW4tY291cnNlc1wiKTtcbiAgbWVudURpdi5hcHBlbmQobWFpbkNvdXJzZXNEaXYpO1xuXG4gIGNvbnN0IG1haW5Db3Vyc2VzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIG1haW5Db3Vyc2VzVGl0bGUudGV4dENvbnRlbnQgPSBcIlVrcmFpbmlhbiBzcGVjaWFsaXRpZXNcIjtcbiAgbWFpbkNvdXJzZXNEaXYuYXBwZW5kKG1haW5Db3Vyc2VzVGl0bGUpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBkaXYuYXBwZW5kKGhlYWRlciwgaW1nKTtcblxuICAgIGltZy5oZWlnaHQgPSBcIjM1MFwiO1xuICAgIGltZy53aWR0aCA9IFwiMzUwXCI7XG5cbiAgICBzd2l0Y2ggKGkpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJLeWl2IGN1dGxldCB3aXRoIG1hc2hlZCBwb3RhdG9lcyAtIDI0NUN6a1wiO1xuICAgICAgICBpbWcuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL21lbnUvS3lpdiBjdXRsZXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkhvbHVidHNpIChjYWJiYWdlIHJvbGxzIHdpdGggbWVhdCkgLSAyMDVDemtcIjtcbiAgICAgICAgaW1nLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9tZW51L0hvbHVidHNpLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID1cbiAgICAgICAgICBcIk5hbHlzbnlreSBzdHVmZmVkIHdpdGggcG9yayB0b25ndWVzIGFuZCBtdXNocm9vbXMgc2VydmVkIHdpdGggYXNwYXJhZ3VzIC0gMTgwQ3prXCI7XG4gICAgICAgIGltZy5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvbWVudS9OYWx5c255a3kucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPVxuICAgICAgICAgIFwiIFZhcmVueWt5IHdpdGggcG90YXRvIGZpbGxpbmcgKGJhZ3MgZmlsbGVkIHdpdGggcG90YXRvZXMpIC0gMTEwQ3prXCI7XG4gICAgICAgIGltZy5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvbWVudS9WYXJlbnlreS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiRGVydW5zIHdpdGggc291ciBjcmVhbSBhbmQgc2FsYWQgLSA5MEN6a1wiO1xuICAgICAgICBpbWcuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL21lbnUvRGVydW5zLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJTYWxvIHdpdGggYm9yc2NodCAodHdvIHR5cGVzIG9mIGxhcmQpIC0gNzBDemtcIjtcbiAgICAgICAgaW1nLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9tZW51L1NhbG8ucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBtYWluQ291cnNlc0Rpdi5hcHBlbmQoZGl2KTtcbiAgfVxuXG4gIC8vICAgZGVzc2VydHNcbiAgY29uc3QgZGVzc2VydHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXNzZXJ0c0Rpdi5jbGFzc0xpc3QuYWRkKFwiZGVzc2VydHNcIik7XG4gIG1lbnVEaXYuYXBwZW5kKGRlc3NlcnRzRGl2KTtcblxuICBjb25zdCBkZXNzZXJ0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBkZXNzZXJ0c1RpdGxlLnRleHRDb250ZW50ID0gXCJEZXNzZXJ0c1wiO1xuICBkZXNzZXJ0c0Rpdi5hcHBlbmQoZGVzc2VydHNUaXRsZSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZGl2LmFwcGVuZChoZWFkZXIsIGltYWdlKTtcblxuICAgIC8vIGRvIGl0IGluIENTUyBpbnN0ZWFkIG9mIEpTP1xuICAgIGltYWdlLmhlaWdodCA9IFwiMzUwXCI7XG4gICAgaW1hZ2Uud2lkdGggPSBcIjM1MFwiO1xuXG4gICAgc3dpdGNoIChpKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiVmFyZW55a3kgd2l0aCBzb3VyIGNoZXJyaWVzIC0gMTIwQ3prXCI7XG4gICAgICAgIGltYWdlLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9tZW51L1N3ZWV0IHZhcmVueWt5LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJDaGVlc2VjYWtlcyAoY290dGFnZSBjaGVlc2UgcGFuY2FrZXMpIC0gMTE1Q3prXCI7XG4gICAgICAgIGltYWdlLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9tZW51L0NoZWVzZWNha2VzLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgZGVzc2VydHNEaXYuYXBwZW5kKGRpdik7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcmVuZGVyVG9wU2VjdGlvbiwgcmVuZGVyTWlkZGxlU2VjdGlvbn0gZnJvbSBcIi4vaW5pdGlhbC1wYWdlXCI7XG5pbXBvcnQgeyByZW5kZXJNZW51IH0gZnJvbSBcIi4vbWVudS1wYWdlXCI7XG5cbnJlbmRlclRvcFNlY3Rpb24oKTtcbnJlbmRlck1pZGRsZVNlY3Rpb24oKTtcbnJlbmRlck1lbnUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==