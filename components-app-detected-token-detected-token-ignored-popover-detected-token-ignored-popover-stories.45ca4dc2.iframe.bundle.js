"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[24],{"./ui/components/app/detected-token/detected-token-ignored-popover/detected-token-ignored-popover.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,PartiallyIgnoreDetectedTokens:()=>PartiallyIgnoreDetectedTokens,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DefaultStory$paramet,_DefaultStory$paramet2,_PartiallyIgnoreDetec,_PartiallyIgnoreDetec2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_detected_token_ignored_popover__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/app/detected-token/detected-token-ignored-popover/detected-token-ignored-popover.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/App/DetectedToken/DetectedTokenIgnoredPopover",argTypes:{onCancelIgnore:{action:"onCancelIgnore"},handleClearTokensSelection:{action:"handleClearTokensSelection"},partiallyIgnoreDetectedTokens:{control:"boolean"},isOpen:{control:"boolean"}},args:{partiallyIgnoreDetectedTokens:!1,isOpen:!0}},Template=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_detected_token_ignored_popover__WEBPACK_IMPORTED_MODULE_1__.Z,args),DefaultStory=Template.bind({});DefaultStory.storyName="Default";const PartiallyIgnoreDetectedTokens=Template.bind({});PartiallyIgnoreDetectedTokens.args={partiallyIgnoreDetectedTokens:!0},DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => {\n  return <DetectedTokenIgnoredPopover {...args} />;\n}",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source}}},PartiallyIgnoreDetectedTokens.parameters={...PartiallyIgnoreDetectedTokens.parameters,docs:{...null===(_PartiallyIgnoreDetec=PartiallyIgnoreDetectedTokens.parameters)||void 0===_PartiallyIgnoreDetec?void 0:_PartiallyIgnoreDetec.docs,source:{originalSource:"args => {\n  return <DetectedTokenIgnoredPopover {...args} />;\n}",...null===(_PartiallyIgnoreDetec2=PartiallyIgnoreDetectedTokens.parameters)||void 0===_PartiallyIgnoreDetec2||null===(_PartiallyIgnoreDetec2=_PartiallyIgnoreDetec2.docs)||void 0===_PartiallyIgnoreDetec2?void 0:_PartiallyIgnoreDetec2.source}}};const __namedExportsOrder=["DefaultStory","PartiallyIgnoreDetectedTokens"]},"./ui/components/app/detected-token/detected-token-ignored-popover/detected-token-ignored-popover.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_hooks_useI18nContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/hooks/useI18nContext.js"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_component_library__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/components/component-library/index.ts"),_component_library_modal_content_deprecated__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/components/component-library/modal-content/deprecated/index.ts"),_component_library_modal_header_deprecated__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ui/components/component-library/modal-header/deprecated/index.ts");const DetectedTokenIgnoredPopover=({partiallyIgnoreDetectedTokens,onCancelIgnore,handleClearTokensSelection,isOpen})=>{const t=(0,_hooks_useI18nContext__WEBPACK_IMPORTED_MODULE_2__.C)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.u_,{isOpen,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("detected-token-ignored-popover",{"detected-token-ignored-popover--import":partiallyIgnoreDetectedTokens,"detected-token-ignored-popover--ignore":!partiallyIgnoreDetectedTokens}),onClose:onCancelIgnore,autoFocus:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.ZA,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library_modal_content_deprecated__WEBPACK_IMPORTED_MODULE_5__.h,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library_modal_header_deprecated__WEBPACK_IMPORTED_MODULE_6__.x,{marginBottom:4},t(partiallyIgnoreDetectedTokens?"importSelectedTokens":"areYouSure")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.xv,{marginBottom:4},t(partiallyIgnoreDetectedTokens?"importSelectedTokensDescription":"ignoreTokenWarning")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.xu,{display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.sS.Flex,justifyContent:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.E0.center,gap:4},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.zx,{className:"detected-token-ignored-popover__ignore-button",block:!0,variant:_component_library__WEBPACK_IMPORTED_MODULE_4__.RN.SECONDARY,onClick:onCancelIgnore,size:_component_library__WEBPACK_IMPORTED_MODULE_4__.Gt.LG},t("cancel")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.zx,{className:"detected-token-ignored-popover__import-button",block:!0,variant:_component_library__WEBPACK_IMPORTED_MODULE_4__.RN.PRIMARY,onClick:handleClearTokensSelection,size:_component_library__WEBPACK_IMPORTED_MODULE_4__.Gt.LG},t("confirm")))))};DetectedTokenIgnoredPopover.propTypes={partiallyIgnoreDetectedTokens:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool.isRequired,onCancelIgnore:prop_types__WEBPACK_IMPORTED_MODULE_7___default().func.isRequired,handleClearTokensSelection:prop_types__WEBPACK_IMPORTED_MODULE_7___default().func.isRequired,isOpen:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool.isRequired},DetectedTokenIgnoredPopover.__docgenInfo={description:"",methods:[],displayName:"DetectedTokenIgnoredPopover",props:{partiallyIgnoreDetectedTokens:{description:"",type:{name:"bool"},required:!0},onCancelIgnore:{description:"",type:{name:"func"},required:!0},handleClearTokensSelection:{description:"",type:{name:"func"},required:!0},isOpen:{description:"",type:{name:"bool"},required:!0}}};const __WEBPACK_DEFAULT_EXPORT__=DetectedTokenIgnoredPopover}}]);