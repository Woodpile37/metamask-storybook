"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[1964],{"./ui/components/app/snaps/snap-legacy-authorship-header/snap-legacy-authorship-header.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DefaultStory$paramet,_DefaultStory$paramet2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_snap_legacy_authorship_header__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/app/snaps/snap-legacy-authorship-header/snap-legacy-authorship-header.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/App/Snaps/SnapLegacyAuthorshipHeader",component:_snap_legacy_authorship_header__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{snapId:{control:"text"}}},DefaultStory=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_snap_legacy_authorship_header__WEBPACK_IMPORTED_MODULE_1__.Z,args);DefaultStory.storyName="Default",DefaultStory.args={snapId:"npm:@metamask/test-snap-bip44"},DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => <SnapLegacyAuthorshipHeader {...args} />",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source}}};const __namedExportsOrder=["DefaultStory"];DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"}},"./ui/components/app/snaps/snap-legacy-authorship-header/snap-legacy-authorship-header.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_metamask_snaps_utils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@metamask/snaps-utils/dist/esm/snaps.js"),react_redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-redux/es/index.js"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_helpers_utils_util__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/helpers/utils/util.js"),_component_library__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/components/component-library/index.ts"),_selectors__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ui/selectors/index.js"),_snap_avatar__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./ui/components/app/snaps/snap-avatar/index.js");const SnapLegacyAuthorshipHeader=({snapId,className,marginLeft,marginRight})=>{const packageName=snapId&&(0,_metamask_snaps_utils__WEBPACK_IMPORTED_MODULE_8__.d0)(snapId),subjectMetadata=(0,react_redux__WEBPACK_IMPORTED_MODULE_2__.v9)((state=>(0,_selectors__WEBPACK_IMPORTED_MODULE_6__.h5U)(state,snapId))),friendlyName=snapId&&(0,_helpers_utils_util__WEBPACK_IMPORTED_MODULE_4__.NZ)(snapId,subjectMetadata);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_5__.xu,{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("snap-legacy-authorship-header",className),backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.lP.backgroundDefault,width:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.Sw.Full,alignItems:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.g1.center,display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.sS.Flex,padding:2,borderColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.kf.borderDefault,borderRadius:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.cM.pill,marginLeft,marginRight},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_5__.xu,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_snap_avatar__WEBPACK_IMPORTED_MODULE_7__.Z,{snapId})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_5__.xu,{marginLeft:4,marginRight:4,display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.sS.Flex,flexDirection:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.Qb.Column,style:{overflow:"hidden"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_5__.xv,{ellipsis:!0,fontWeight:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.U9.Medium},friendlyName),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_5__.xv,{ellipsis:!0,variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.rK.bodySm,color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.d9.textAlternative},packageName)))};SnapLegacyAuthorshipHeader.propTypes={snapId:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,marginLeft:prop_types__WEBPACK_IMPORTED_MODULE_9___default().number,marginRight:prop_types__WEBPACK_IMPORTED_MODULE_9___default().number},SnapLegacyAuthorshipHeader.__docgenInfo={description:"",methods:[],displayName:"SnapLegacyAuthorshipHeader",props:{snapId:{description:"The id of the snap",type:{name:"string"},required:!1},className:{description:"The className of the SnapLegacyAuthorshipHeader",type:{name:"string"},required:!1},marginLeft:{description:"",type:{name:"number"},required:!1},marginRight:{description:"",type:{name:"number"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=SnapLegacyAuthorshipHeader}}]);