/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/editItem.js":
/*!*************************!*\
  !*** ./src/editItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   editStatus: () => (/* binding */ editStatus)\n/* harmony export */ });\nconst editStatus = (item) => ({\n    editItem: (newValue) => item[priority] = newValue\n})\n\n\n\n//# sourceURL=webpack://todolist/./src/editItem.js?");

/***/ }),

/***/ "./src/getDate.js":
/*!************************!*\
  !*** ./src/getDate.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   returnDate: () => (/* binding */ returnDate)\n/* harmony export */ });\nfunction returnDate(day, month, year) {\n    day = new Date(`${year}-${month}-${day}`).getDate();\n    month = new Date(`${year}-${month}-${day}`).getMonth();\n    year = new Date(`${year}-${month}-${day}`).getFullYear();\n    return `${day}/${month+1}/${year}`\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/getDate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _itemCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemCreator */ \"./src/itemCreator.js\");\n/* harmony import */ var _makeProjectFolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeProjectFolder */ \"./src/makeProjectFolder.js\");\n/* harmony import */ var _getDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDate */ \"./src/getDate.js\");\n\n\n\n\nconst button = document.createElement('button')\nbutton.innerHTML = 'Button';\n\ndocument.body.appendChild(button);\nbutton.addEventListener('click', function() {\n    const daily = (0,_itemCreator__WEBPACK_IMPORTED_MODULE_0__.makeToDoItem)('Get groceries', 'Go to the market to pick up some stuff', (0,_getDate__WEBPACK_IMPORTED_MODULE_2__.returnDate)(7, 7, 2024), 2, 'Remeber to get some ice too!');\n    const dinner = (0,_itemCreator__WEBPACK_IMPORTED_MODULE_0__.makeToDoItem)('Ham', 'Get the special ham for dinner', (0,_getDate__WEBPACK_IMPORTED_MODULE_2__.returnDate)(6, 7, 2024), 3, 'Honey for the glaze')\n    const shopping = (0,_makeProjectFolder__WEBPACK_IMPORTED_MODULE_1__.makeProject)('Shopping');\n    const exercise = (0,_makeProjectFolder__WEBPACK_IMPORTED_MODULE_1__.makeProject)('Exercise');\n    const weights = (0,_itemCreator__WEBPACK_IMPORTED_MODULE_0__.makeToDoItem)('Weightlifting', 'Get to the gym', (0,_getDate__WEBPACK_IMPORTED_MODULE_2__.returnDate)(5, 7, 2024), 1, 'remember your motivation!');\n    const yoga = (0,_itemCreator__WEBPACK_IMPORTED_MODULE_0__.makeToDoItem)('Yoga', 'Find your center', (0,_getDate__WEBPACK_IMPORTED_MODULE_2__.returnDate)(8, 7, 2024), 1, 'Remember your karma');\n    exercise.additem(weights);\n    exercise.additem(yoga);\n    shopping.additem(daily);\n    shopping.additem(dinner);\n    console.log(shopping);\n    console.log(exercise);\n    console.log(shopping.dinner);\n    \n\n})\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/itemCreator.js":
/*!****************************!*\
  !*** ./src/itemCreator.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeToDoItem: () => (/* binding */ makeToDoItem)\n/* harmony export */ });\n/* harmony import */ var _editItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editItem */ \"./src/editItem.js\");\n\n\nfunction makeToDoItem(title, description, dueDate, priority, notes) {\n    let item = {\n        title,\n        description,\n        dueDate,\n        priority,\n        notes\n    }\n    return Object.assign(item, changeKey(item));\n}\n\nconst changeKey = (obj) => ({\n    changekey: (key, value) => {\n        obj[key] = value;\n    }\n})\n\n\n\n//# sourceURL=webpack://todolist/./src/itemCreator.js?");

/***/ }),

/***/ "./src/makeProjectFolder.js":
/*!**********************************!*\
  !*** ./src/makeProjectFolder.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeProject: () => (/* binding */ makeProject)\n/* harmony export */ });\nfunction makeProject(name) {\n    let project =  {\n        name\n    }\n    return Object.assign(project, addItemToProject(project))\n}\n\nconst addItemToProject = (project) => ({\n    additem: (item) => {\n        project[item.title] = item;\n    }\n})\n\n\n\n//# sourceURL=webpack://todolist/./src/makeProjectFolder.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;