(() => {
var exports = {};
exports.id = 688;
exports.ids = [688];
exports.modules = {

/***/ 99847:
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 99847;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 40252:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 97999:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/path-to-regexp");

/***/ }),

/***/ 18038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 98704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 97897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 56786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 61090:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param.js");

/***/ }),

/***/ 78652:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 69274:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 21668:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 3349:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html.js");

/***/ }),

/***/ 14300:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 57147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 85477:
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ 57310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 84046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRouter": () => (/* reexport default from dynamic */ next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   "GlobalError": () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_3___default.a),
/* harmony export */   "LayoutRouter": () => (/* reexport default from dynamic */ next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1___default.a),
/* harmony export */   "RenderFromTemplateContext": () => (/* reexport default from dynamic */ next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   "StaticGenerationSearchParamsBailoutProvider": () => (/* reexport default from dynamic */ next_dist_client_components_static_generation_searchparams_bailout_provider__WEBPACK_IMPORTED_MODULE_8___default.a),
/* harmony export */   "__next_app_webpack_require__": () => (/* binding */ __next_app_webpack_require__),
/* harmony export */   "actionAsyncStorage": () => (/* reexport safe */ next_dist_client_components_action_async_storage__WEBPACK_IMPORTED_MODULE_6__.actionAsyncStorage),
/* harmony export */   "createSearchParamsBailoutProxy": () => (/* reexport safe */ next_dist_client_components_searchparams_bailout_proxy__WEBPACK_IMPORTED_MODULE_9__.createSearchParamsBailoutProxy),
/* harmony export */   "decodeAction": () => (/* reexport safe */ react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_11__.decodeAction),
/* harmony export */   "decodeReply": () => (/* reexport safe */ react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_11__.decodeReply),
/* harmony export */   "originalPathname": () => (/* binding */ originalPathname),
/* harmony export */   "pages": () => (/* binding */ pages),
/* harmony export */   "preconnect": () => (/* reexport safe */ next_dist_server_app_render_rsc_preloads__WEBPACK_IMPORTED_MODULE_12__.preconnect),
/* harmony export */   "preloadFont": () => (/* reexport safe */ next_dist_server_app_render_rsc_preloads__WEBPACK_IMPORTED_MODULE_12__.preloadFont),
/* harmony export */   "preloadStyle": () => (/* reexport safe */ next_dist_server_app_render_rsc_preloads__WEBPACK_IMPORTED_MODULE_12__.preloadStyle),
/* harmony export */   "renderToReadableStream": () => (/* reexport safe */ react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_11__.renderToReadableStream),
/* harmony export */   "requestAsyncStorage": () => (/* reexport safe */ next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_5__.requestAsyncStorage),
/* harmony export */   "serverHooks": () => (/* reexport module object */ next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   "staticGenerationAsyncStorage": () => (/* reexport safe */ next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_4__.staticGenerationAsyncStorage),
/* harmony export */   "staticGenerationBailout": () => (/* reexport safe */ next_dist_client_components_static_generation_bailout__WEBPACK_IMPORTED_MODULE_7__.staticGenerationBailout),
/* harmony export */   "tree": () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18829);
/* harmony import */ var next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45226);
/* harmony import */ var next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42872);
/* harmony import */ var next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28412);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1839);
/* harmony import */ var next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35120);
/* harmony import */ var next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_client_components_action_async_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67797);
/* harmony import */ var next_dist_client_components_action_async_storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_action_async_storage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dist_client_components_static_generation_bailout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79282);
/* harmony import */ var next_dist_client_components_static_generation_bailout__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_static_generation_bailout__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dist_client_components_static_generation_searchparams_bailout_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23785);
/* harmony import */ var next_dist_client_components_static_generation_searchparams_bailout_provider__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_static_generation_searchparams_bailout_provider__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dist_client_components_searchparams_bailout_proxy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75183);
/* harmony import */ var next_dist_client_components_searchparams_bailout_proxy__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_searchparams_bailout_proxy__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15815);
/* harmony import */ var next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(76370);
/* harmony import */ var next_dist_server_app_render_rsc_preloads__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50515);
/* harmony import */ var next_dist_server_app_render_rsc_preloads__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_rsc_preloads__WEBPACK_IMPORTED_MODULE_12__);

    const tree = {
        children: [
        '',
        {
        children: [
        'blogs',
        {
        children: [
        '[slug]',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 24372)), "/Users/sangga/Documents/react/portofolio/src/app/blogs/[slug]/page.tsx"],
          
        }]
      },
        {
          
          
        }
      ]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 38514)), "/Users/sangga/Documents/react/portofolio/src/app/blogs/layout.tsx"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 41764))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }
      ]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 42609)), "/Users/sangga/Documents/react/portofolio/src/app/layout.tsx"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 41764))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }
      ]
      }.children;
    const pages = ["/Users/sangga/Documents/react/portofolio/src/app/blogs/[slug]/page.tsx"];

    
    
    
    

    

    
    

    
    
    

    

    
    const __next_app_webpack_require__ = __webpack_require__
    

    const originalPathname = "/blogs/[slug]/page"
  

/***/ }),

/***/ 25325:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 51603))

/***/ }),

/***/ 51603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentTemplate": () => (/* binding */ ContentTemplate)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var md_editor_rt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68038);
/* harmony import */ var md_editor_rt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(md_editor_rt__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ ContentTemplate auto */ 

function ContentTemplate({ content  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(md_editor_rt__WEBPACK_IMPORTED_MODULE_1__.MdPreview, {
        editorId: "preview-only",
        modelValue: content,
        theme: "dark",
        language: "en-US",
        codeTheme: "github"
    });
}


/***/ }),

/***/ 24372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Blog)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(35985);
;// CONCATENATED MODULE: ./src/components/ContentTemplate.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/sangga/Documents/react/portofolio/src/components/ContentTemplate.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
/* harmony default export */ const ContentTemplate = (proxy.default);

const e0 = proxy["ContentTemplate"];

// EXTERNAL MODULE: ./src/utils/api.ts
var api = __webpack_require__(3202);
;// CONCATENATED MODULE: ./src/app/blogs/[slug]/page.tsx



function Blog({ params: { slug  }  }) {
    const post = (0,api/* getSinglePost */.JF)(slug, "blogs");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: post.image,
                        alt: post.title,
                        className: "mt-4 md:mt-8 h-72 lg:h-96 w-full object-cover"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute inset-0 z-0 bg-black/30"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "absolute inset-x-8 z-10 bottom-8 text-white text-3xl font-bold tracking-tight sm:text-4xl",
                        children: post.title
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                content: post.content
            })
        ]
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [79,497,872,38,163,941], () => (__webpack_exec__(84046)));
module.exports = __webpack_exports__;

})();