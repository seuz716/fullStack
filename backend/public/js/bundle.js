/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/services/BookService.js":
/*!******************************************!*\
  !*** ./frontend/services/BookService.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

class BookService{

    constructor(){
        this.URI = 'http://localhost:3000/api/books'
    }

    async getBooks(){
    const res =   await fetch(this.URI);
    const books = await res.json();
    return books;
    }
    

    async postBook(book){
      const res = await fetch(this.URI,{
          method: 'POST',   
          body: book
      });
      const data = await res.json();
      return data
    }

   async deleteBook(bookId){
    const res = await fetch('${this.URI}/${bookId}',{
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'DELETE'
    
    });
    
   const data = await res.json();
   console.log(data);
   console.log(bookId);
   }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookService);

/***/ }),

/***/ "./node_modules/bootswatch/dist/darkly/bootstrap.min.css":
/*!***************************************************************!*\
  !*** ./node_modules/bootswatch/dist/darkly/bootstrap.min.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/*!*************************!*\
  !*** ./frontend/app.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_BookService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/BookService */ "./frontend/services/BookService.js");
/* harmony import */ var bootswatch_dist_darkly_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootswatch/dist/darkly/bootstrap.min.css */ "./node_modules/bootswatch/dist/darkly/bootstrap.min.css");
 
  



document.getElementById('book-form')
.addEventListener('submit', e=> {
    const title =  document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const image = document.getElementById('image').files;

    const formData = new FormData();
    formData.append('image', image[0]);
    formData.append('title', title);
    formData.append('author', author);
    formData.append('isbn', isbn);

    const bookService = new _services_BookService__WEBPACK_IMPORTED_MODULE_0__["default"]()
    bookService.postBook(formData)
    e.preventDefault();

})

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map