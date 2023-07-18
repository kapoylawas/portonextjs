exports.id = 941;
exports.ids = [941];
exports.modules = {

/***/ 13259:
/***/ (() => {



/***/ }),

/***/ 38514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function BlogLayout({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        className: "w-full pb-28 pt-4 lg:py-12 xl:py-16",
        children: children
    });
}


/***/ }),

/***/ 3202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bd": () => (/* binding */ getAllPosts),
/* harmony export */   "JF": () => (/* binding */ getSinglePost)
/* harmony export */ });
/* unused harmony exports getPath, getFileContent */
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65872);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);



const getPath = (folder)=>{
    return path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), `/src/content/${folder}`);
};
const getFileContent = (filename, folder)=>{
    const POSTS_PATH = getPath(folder);
    return fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(POSTS_PATH, filename), "utf8");
};
function getAllPosts(folder) {
    const POSTS_PATH = getPath(folder);
    const result = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(POSTS_PATH).filter((path)=>/\.md$/.test(path)).map((fileName)=>{
        const source = getFileContent(fileName, folder);
        const slug = fileName.replace(/\.md$/, "");
        const { data  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(source);
        return {
            ...data,
            slug: slug
        };
    });
    return result;
}
const getSinglePost = (slug, folder)=>{
    const source = getFileContent(`${slug}.md`, folder);
    const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(source);
    return {
        ...data,
        content
    };
};


/***/ })

};
;