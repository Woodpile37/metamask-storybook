"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[3913],{"./ui/components/app/snaps/snap-ui-renderer/snap-ui-renderer.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,ErrorStory:()=>ErrorStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DefaultStory$paramet,_DefaultStory$paramet2,_DefaultStory$paramet3,_ErrorStory$parameter,_ErrorStory$parameter2,_ErrorStory$parameter3,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-redux/es/index.js"),_metamask_snaps_ui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@metamask/snaps-ui/dist/index.js"),_store_store__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/store/store.ts"),_storybook_test_data__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./.storybook/test-data.js"),___WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/components/app/snaps/snap-ui-renderer/index.js");const store=(0,_store_store__WEBPACK_IMPORTED_MODULE_3__.Z)(_storybook_test_data__WEBPACK_IMPORTED_MODULE_4__.default),__WEBPACK_DEFAULT_EXPORT__={title:"Components/App/SnapUIRenderer",component:___WEBPACK_IMPORTED_MODULE_5__.V,decorators:[story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.zt,{store},story())],argTypes:{data:{control:"object"}}},DATA=(0,_metamask_snaps_ui__WEBPACK_IMPORTED_MODULE_2__.panel)([(0,_metamask_snaps_ui__WEBPACK_IMPORTED_MODULE_2__.heading)("Foo bar"),(0,_metamask_snaps_ui__WEBPACK_IMPORTED_MODULE_2__.text)("Description"),(0,_metamask_snaps_ui__WEBPACK_IMPORTED_MODULE_2__.divider)(),(0,_metamask_snaps_ui__WEBPACK_IMPORTED_MODULE_2__.text)("More text"),(0,_metamask_snaps_ui__WEBPACK_IMPORTED_MODULE_2__.copyable)("Text you can copy")]),DefaultStory=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_5__.V,{snapId:"local:http://localhost:8080/",data:args.data});DefaultStory.args={data:DATA};const ErrorStory=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_5__.V,{snapId:"local:http://localhost:8080/",data:args.data});ErrorStory.args={data:"foo"},DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:'args => <SnapUIRenderer snapId="local:http://localhost:8080/" data={args.data} />',...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet3=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet3?void 0:_DefaultStory$paramet3.source}}},ErrorStory.parameters={...ErrorStory.parameters,docs:{...null===(_ErrorStory$parameter=ErrorStory.parameters)||void 0===_ErrorStory$parameter?void 0:_ErrorStory$parameter.docs,source:{originalSource:'args => <SnapUIRenderer snapId="local:http://localhost:8080/" data={args.data} />',...null===(_ErrorStory$parameter2=ErrorStory.parameters)||void 0===_ErrorStory$parameter2||null===(_ErrorStory$parameter3=_ErrorStory$parameter2.docs)||void 0===_ErrorStory$parameter3?void 0:_ErrorStory$parameter3.source}}};const __namedExportsOrder=["DefaultStory","ErrorStory"];DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"},ErrorStory.__docgenInfo={description:"",methods:[],displayName:"ErrorStory"}}}]);