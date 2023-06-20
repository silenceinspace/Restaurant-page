/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderContacts: () => (/* binding */ renderContacts)
/* harmony export */ });


const divContent = document.body.querySelector("#content");

function renderContacts() {
  const contactsDiv = document.createElement("div");
  contactsDiv.classList.add("contact-section");
  divContent.append(contactsDiv);

  const pageHeader = document.createElement("h1");
  pageHeader.textContent = "Our contacts";
  contactsDiv.append(pageHeader);

  for (let i = 0; i < 3; i++) {
    const header = document.createElement("h3");
    switch (i) {
      case 0:
        header.textContent =
          "Address - U Vodarny 10, Vinohrady, 130 00 Praha-Praha 3, Czechia";
        break;
      case 1:
        header.textContent = "Phone number - +420 111 111 111";
        break;
      case 2:
        header.textContent = "Email - theborscht@gmail.com";
        break;
    }
    contactsDiv.append(header);
  }
}


/***/ }),

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
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-page */ "./src/contact-page.js");
/* harmony import */ var _initial_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial-page */ "./src/initial-page.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-page */ "./src/menu-page.js");




(0,_initial_page__WEBPACK_IMPORTED_MODULE_1__.renderTopSection)();
(0,_initial_page__WEBPACK_IMPORTED_MODULE_1__.renderMiddleSection)();

(0,_menu_page__WEBPACK_IMPORTED_MODULE_2__.renderMenu)();

(0,_contact_page__WEBPACK_IMPORTED_MODULE_0__.renderContacts)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LmpzIiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2UvLi9zcmMvbWVudS1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0cmF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IHJlbmRlckNvbnRhY3RzIH07XG5cbmNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuZnVuY3Rpb24gcmVuZGVyQ29udGFjdHMoKSB7XG4gIGNvbnN0IGNvbnRhY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdHNEaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhY3Qtc2VjdGlvblwiKTtcbiAgZGl2Q29udGVudC5hcHBlbmQoY29udGFjdHNEaXYpO1xuXG4gIGNvbnN0IHBhZ2VIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHBhZ2VIZWFkZXIudGV4dENvbnRlbnQgPSBcIk91ciBjb250YWN0c1wiO1xuICBjb250YWN0c0Rpdi5hcHBlbmQocGFnZUhlYWRlcik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgc3dpdGNoIChpKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9XG4gICAgICAgICAgXCJBZGRyZXNzIC0gVSBWb2Rhcm55IDEwLCBWaW5vaHJhZHksIDEzMCAwMCBQcmFoYS1QcmFoYSAzLCBDemVjaGlhXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlBob25lIG51bWJlciAtICs0MjAgMTExIDExMSAxMTFcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiRW1haWwgLSB0aGVib3JzY2h0QGdtYWlsLmNvbVwiO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgY29udGFjdHNEaXYuYXBwZW5kKGhlYWRlcik7XG4gIH1cbn1cbiIsImV4cG9ydCB7IHJlbmRlclRvcFNlY3Rpb24sIHJlbmRlck1pZGRsZVNlY3Rpb24gfTtcblxuY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4vLyBTZWN0aW9uIHdoZXJlIHRhYiBicm93c2VyaW5nIHdpbGwgd29ya1xuZnVuY3Rpb24gcmVuZGVyVG9wU2VjdGlvbigpIHtcbiAgY29uc3QgZGl2VG9wU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdlRvcFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInRvcC1zZWN0aW9uXCIpO1xuICBkaXZDb250ZW50LmFwcGVuZChkaXZUb3BTZWN0aW9uKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnRuLnRleHRDb250ZW50ID0gaSA9PT0gMCA/IFwiSG9tZVwiIDogaSA9PT0gMSA/IFwiTWVudVwiIDogXCJDb250YWN0XCI7XG4gICAgZGl2VG9wU2VjdGlvbi5hcHBlbmQoYnRuKTtcbiAgfVxufVxuXG4vLyBTZWN0aW9uIHdoZXJlIGFsbCBpbml0aWFsIGNvbnRlbnQgd2lsbCBiZSBzaG93blxuZnVuY3Rpb24gcmVuZGVyTWlkZGxlU2VjdGlvbigpIHtcbiAgY29uc3QgZGl2TWlkZGxlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdk1pZGRsZVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhvbWUtc2VjdGlvblwiKTtcbiAgZGl2Q29udGVudC5hcHBlbmQoZGl2TWlkZGxlU2VjdGlvbik7XG5cbiAgY29uc3QgaGVyb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZXJvVGl0bGUudGV4dENvbnRlbnQgPSBcIlRoZSBCb3JzY2hcIjtcbiAgZGl2TWlkZGxlU2VjdGlvbi5hcHBlbmQoaGVyb1RpdGxlKTtcblxuICBjb25zdCBkaXZSZXN0YXVyYW50UGhvdG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2UmVzdGF1cmFudFBob3Rvcy5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VzXCIpO1xuICBkaXZNaWRkbGVTZWN0aW9uLmFwcGVuZChkaXZSZXN0YXVyYW50UGhvdG9zKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZy5zcmMgPVxuICAgICAgaSA9PT0gMFxuICAgICAgICA/IFwiLi4vc3JjL2ltYWdlcy9leHRlcmlvci5qcGVnXCJcbiAgICAgICAgOiBpID09PSAxXG4gICAgICAgID8gXCIuLi9zcmMvaW1hZ2VzL2ludGVyaW9yLmpwZ1wiXG4gICAgICAgIDogXCIuLi9zcmMvaW1hZ2VzL2NvdW50ZXIuanBnXCI7XG4gICAgaW1nLmhlaWdodCA9IFwiMzUwXCI7XG4gICAgaW1nLndpZHRoID0gXCIzNTBcIjtcbiAgICBkaXZSZXN0YXVyYW50UGhvdG9zLmFwcGVuZChpbWcpO1xuICB9XG5cbiAgY29uc3Qgc2hvcnREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgc2hvcnREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgXCJBIHBsYWNlIHRvIHJldHVybiB0byBmb3IgdGhlIGJlc3QgVWtyYWluaWFuIGJvcnNjaCBpbiBQcmFndWUhXCI7XG4gIGRpdk1pZGRsZVNlY3Rpb24uYXBwZW5kKHNob3J0RGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IHJlc3RhdXJhbnRTdG9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICByZXN0YXVyYW50U3RvcnkudGV4dENvbnRlbnQgPVxuICAgIFwiIE91ciBjb3p5IHJlc3RhdXJhbnQgd2FzIG9wZW5lZCBiYWNrIGluIDIwMjEuIEFzIG91ciBtYWluIG1pc3Npb24gd2Ugc2F3IHRoZSBuZWVkIHRvIHNwcmVhZCB0aGUgd29yZCBhYm91dCB0aGUgVWtyYWluaWFuIGN1bHR1cmUgYWJyb2FkIGFuZCBvbmUgb2YgaXRzIGJpZ2dlc3QgYWNoaWV2ZW1lbnRzIC0gc291cCBjYWxsZWQgYm9yc2NoLiBTb21lIHBlb3BsZSBzYXkgaXQncyBqdXN0IHRhc3R5IHNvdXAsIGJ1dCB3ZSB0aGluayB0aGVyZSBpcyBtb3JlIHRvIGl0LiBUaGUgaGlzdG9yeSwgdGhlIHN5bWJvbCBvZiB0cnVlIGlkZW50aXR5IGFuZCB0aGUgc3Ryb25nZXN0IG5hdGlvbi5cIjtcbiAgZGl2TWlkZGxlU2VjdGlvbi5hcHBlbmQocmVzdGF1cmFudFN0b3J5KTtcblxuICBjb25zdCBvZmZlckZvclZpc2l0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBvZmZlckZvclZpc2l0aW5nLnRleHRDb250ZW50ID1cbiAgICBcIklmIHRoYXQgc291bmRzIGludGVyZXN0aW5nIHRvIHlvdSwgcGxlYXNlIGNvbnNpZGVyIHN0b3BwaW5nIGJ5IGZvciBhIGJvd2wgb2Ygb3VyIHNwZWNpYWwgVWtyYWluaWFuIGVsaXhpciFcIjtcbiAgZGl2TWlkZGxlU2VjdGlvbi5hcHBlbmQob2ZmZXJGb3JWaXNpdGluZyk7XG5cbiAgY29uc3QgdGFibGVXaXRoU2NoZWR1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gIGRpdk1pZGRsZVNlY3Rpb24uYXBwZW5kKHRhYmxlV2l0aFNjaGVkdWxlKTtcblxuICBjb25zdCB0YWJsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgdGFibGVIZWFkZXIudGV4dENvbnRlbnQgPSBcIldlIGFyZSBvcGVuXCI7XG4gIHRhYmxlV2l0aFNjaGVkdWxlLmFwcGVuZCh0YWJsZUhlYWRlcik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICBjb25zdCB0YWJsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDI7IGorKykge1xuICAgICAgY29uc3QgdGFibGVEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgaWYgKGogPT09IDEgJiYgaSA8IDUpIHtcbiAgICAgICAgdGFibGVEYXRhLnRleHRDb250ZW50ID0gXCIxMTowMC0xOTowMFwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaiA9PT0gMCkge1xuICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB0YWJsZURhdGEudGV4dENvbnRlbnQgPSBcIk1vbmRheVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgdGFibGVEYXRhLnRleHRDb250ZW50ID0gXCJUdWVzZGF5XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB0YWJsZURhdGEudGV4dENvbnRlbnQgPSBcIldlZG5lc2RheVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgdGFibGVEYXRhLnRleHRDb250ZW50ID0gXCJUaHVyc2RheVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgdGFibGVEYXRhLnRleHRDb250ZW50ID0gXCJGcmlkYXlcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaSA9PT0gNSkge1xuICAgICAgICB0YWJsZURhdGEudGV4dENvbnRlbnQgPSBqID09PSAwID8gXCJTYXR1cmRheVwiIDogXCIxMTowMC0xODowMFwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaSA9PT0gNikge1xuICAgICAgICB0YWJsZURhdGEudGV4dENvbnRlbnQgPSBqID09PSAwID8gXCJTdW5kYXlcIiA6IFwiQ2xvc2VkXCI7XG4gICAgICB9XG5cbiAgICAgIHRhYmxlUm93LmFwcGVuZCh0YWJsZURhdGEpO1xuICAgIH1cbiAgICB0YWJsZVdpdGhTY2hlZHVsZS5hcHBlbmQodGFibGVSb3cpO1xuICB9XG5cbiAgY29uc3QgYWRkcmVzc0hvbWVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2TWlkZGxlU2VjdGlvbi5hcHBlbmQoYWRkcmVzc0hvbWVQYWdlKTtcbiAgY29uc3QgYWRkcmVzc0JvbGRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBhZGRyZXNzQm9sZFRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiT3VyIEFkZHJlc3M6IFUgVm9kYXJueSAxMCwgMTMwIDAwIFByYWd1ZSAzIC0gVmlub2hyYWR5XCI7XG4gIGFkZHJlc3NIb21lUGFnZS5hcHBlbmQoYWRkcmVzc0JvbGRUZXh0KTtcbn1cbiIsImV4cG9ydCB7IHJlbmRlck1lbnUgfTtcblxuLy8gYXBwZW5kIG1vcmUgZWxlbWVudHMgaW5zaWRlIG9mIHRoZSBzYW1lIHBhcmVudGhlc2lzXG5jb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmZ1bmN0aW9uIHJlbmRlck1lbnUoKSB7XG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LXNlY3Rpb25cIik7XG4gIGRpdkNvbnRlbnQuYXBwZW5kKG1lbnVEaXYpO1xuXG4gIGNvbnN0IGN1cnJlbnRQYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGN1cnJlbnRQYWdlVGl0bGUudGV4dENvbnRlbnQgPSBcIk91ciBtZW51XCI7XG4gIG1lbnVEaXYuYXBwZW5kKGN1cnJlbnRQYWdlVGl0bGUpO1xuXG4gIC8vICAgc291cHNcbiAgY29uc3Qgc291cHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzb3Vwc0Rpdi5jbGFzc0xpc3QuYWRkKFwic291cHNcIik7XG4gIG1lbnVEaXYuYXBwZW5kKHNvdXBzRGl2KTtcblxuICBjb25zdCBzb3VwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHNvdXBUaXRsZS50ZXh0Q29udGVudCA9IFwiU291cHNcIjtcbiAgc291cHNEaXYuYXBwZW5kKHNvdXBUaXRsZSk7XG5cbiAgLy8gICBkaXZzIHdpdGggc291cCBvcHRpb25zIG9uIHRoZSBtZW51XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDE7IGorKykge1xuICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgaW1hZ2UuaGVpZ2h0ID0gXCIzNTBcIjtcbiAgICAgIGltYWdlLndpZHRoID0gXCIzNTBcIjtcblxuICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkJlZWYgYm9yc2NoIDAuNGwgLSA5OUN6a1wiO1xuICAgICAgICAgIGltYWdlLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9tZW51L2JlZWYgYm9yc2NoLmpwZ1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIFwiVmVnZXRhcmlhbiBib3JzY2h0IHdpdGggc3BydWNlIG11c2hyb29tIDAuNGwgLSA5OUN6a1wiO1xuICAgICAgICAgIGltYWdlLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9tZW51L1ZlZ2V0ZXJpYW4gYm9yc2NoLnBuZ1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGl2LmFwcGVuZChoZWFkZXIsIGltYWdlKTtcbiAgICB9XG4gICAgc291cHNEaXYuYXBwZW5kKGRpdik7XG4gIH1cblxuICAvLyAgIG1haW4gY291cnNlc1xuICBjb25zdCBtYWluQ291cnNlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Db3Vyc2VzRGl2LmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvdXJzZXNcIik7XG4gIG1lbnVEaXYuYXBwZW5kKG1haW5Db3Vyc2VzRGl2KTtcblxuICBjb25zdCBtYWluQ291cnNlc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBtYWluQ291cnNlc1RpdGxlLnRleHRDb250ZW50ID0gXCJVa3JhaW5pYW4gc3BlY2lhbGl0aWVzXCI7XG4gIG1haW5Db3Vyc2VzRGl2LmFwcGVuZChtYWluQ291cnNlc1RpdGxlKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZGl2LmFwcGVuZChoZWFkZXIsIGltZyk7XG5cbiAgICBpbWcuaGVpZ2h0ID0gXCIzNTBcIjtcbiAgICBpbWcud2lkdGggPSBcIjM1MFwiO1xuXG4gICAgc3dpdGNoIChpKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiS3lpdiBjdXRsZXQgd2l0aCBtYXNoZWQgcG90YXRvZXMgLSAyNDVDemtcIjtcbiAgICAgICAgaW1nLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9tZW51L0t5aXYgY3V0bGV0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJIb2x1YnRzaSAoY2FiYmFnZSByb2xscyB3aXRoIG1lYXQpIC0gMjA1Q3prXCI7XG4gICAgICAgIGltZy5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvbWVudS9Ib2x1YnRzaS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9XG4gICAgICAgICAgXCJOYWx5c255a3kgc3R1ZmZlZCB3aXRoIHBvcmsgdG9uZ3VlcyBhbmQgbXVzaHJvb21zIHNlcnZlZCB3aXRoIGFzcGFyYWd1cyAtIDE4MEN6a1wiO1xuICAgICAgICBpbWcuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL21lbnUvTmFseXNueWt5LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID1cbiAgICAgICAgICBcIiBWYXJlbnlreSB3aXRoIHBvdGF0byBmaWxsaW5nIChiYWdzIGZpbGxlZCB3aXRoIHBvdGF0b2VzKSAtIDExMEN6a1wiO1xuICAgICAgICBpbWcuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL21lbnUvVmFyZW55a3kucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkRlcnVucyB3aXRoIHNvdXIgY3JlYW0gYW5kIHNhbGFkIC0gOTBDemtcIjtcbiAgICAgICAgaW1nLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9tZW51L0RlcnVucy5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiU2FsbyB3aXRoIGJvcnNjaHQgKHR3byB0eXBlcyBvZiBsYXJkKSAtIDcwQ3prXCI7XG4gICAgICAgIGltZy5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvbWVudS9TYWxvLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgbWFpbkNvdXJzZXNEaXYuYXBwZW5kKGRpdik7XG4gIH1cblxuICAvLyAgIGRlc3NlcnRzXG4gIGNvbnN0IGRlc3NlcnRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzc2VydHNEaXYuY2xhc3NMaXN0LmFkZChcImRlc3NlcnRzXCIpO1xuICBtZW51RGl2LmFwcGVuZChkZXNzZXJ0c0Rpdik7XG5cbiAgY29uc3QgZGVzc2VydHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgZGVzc2VydHNUaXRsZS50ZXh0Q29udGVudCA9IFwiRGVzc2VydHNcIjtcbiAgZGVzc2VydHNEaXYuYXBwZW5kKGRlc3NlcnRzVGl0bGUpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGRpdi5hcHBlbmQoaGVhZGVyLCBpbWFnZSk7XG5cbiAgICAvLyBkbyBpdCBpbiBDU1MgaW5zdGVhZCBvZiBKUz9cbiAgICBpbWFnZS5oZWlnaHQgPSBcIjM1MFwiO1xuICAgIGltYWdlLndpZHRoID0gXCIzNTBcIjtcblxuICAgIHN3aXRjaCAoaSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlZhcmVueWt5IHdpdGggc291ciBjaGVycmllcyAtIDEyMEN6a1wiO1xuICAgICAgICBpbWFnZS5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvbWVudS9Td2VldCB2YXJlbnlreS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQ2hlZXNlY2FrZXMgKGNvdHRhZ2UgY2hlZXNlIHBhbmNha2VzKSAtIDExNUN6a1wiO1xuICAgICAgICBpbWFnZS5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvbWVudS9DaGVlc2VjYWtlcy5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGRlc3NlcnRzRGl2LmFwcGVuZChkaXYpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHJlbmRlckNvbnRhY3RzIH0gZnJvbSBcIi4vY29udGFjdC1wYWdlXCI7XG5pbXBvcnQgeyByZW5kZXJUb3BTZWN0aW9uLCByZW5kZXJNaWRkbGVTZWN0aW9uIH0gZnJvbSBcIi4vaW5pdGlhbC1wYWdlXCI7XG5pbXBvcnQgeyByZW5kZXJNZW51IH0gZnJvbSBcIi4vbWVudS1wYWdlXCI7XG5cbnJlbmRlclRvcFNlY3Rpb24oKTtcbnJlbmRlck1pZGRsZVNlY3Rpb24oKTtcblxucmVuZGVyTWVudSgpO1xuXG5yZW5kZXJDb250YWN0cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9