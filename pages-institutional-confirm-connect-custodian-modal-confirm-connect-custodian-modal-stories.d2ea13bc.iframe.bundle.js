"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[1479],{"./ui/pages/institutional/confirm-connect-custodian-modal/confirm-connect-custodian-modal.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DefaultStory$paramet,_DefaultStory$paramet2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-redux/es/index.js"),_store_store__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/store/store.ts"),_storybook_test_data__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/test-data.js"),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/pages/institutional/confirm-connect-custodian-modal/index.js");const store=(0,_store_store__WEBPACK_IMPORTED_MODULE_2__.Z)(_storybook_test_data__WEBPACK_IMPORTED_MODULE_3__.default),__WEBPACK_DEFAULT_EXPORT__={title:"Components/Institutional/ConfirmConnectCustodianModal",decorators:[story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.zt,{store},story())],component:___WEBPACK_IMPORTED_MODULE_4__.Z},DefaultStory=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_4__.Z,{onModalClose:{},custodianName:"Qredo",custodianURL:"https://qredo.com"});DefaultStory.storyName="ConfirmConnectCustodianModal",DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:'() => <ConfirmConnectCustodianModal onModalClose={{}} custodianName="Qredo" custodianURL="https://qredo.com" />',...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source}}};const __namedExportsOrder=["DefaultStory"];DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"}},"./ui/pages/institutional/confirm-connect-custodian-modal/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>confirm_connect_custodian_modal});var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),i18n=__webpack_require__("./ui/contexts/i18n.js"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),deprecated=__webpack_require__("./ui/components/component-library/modal-content/deprecated/index.ts"),modal_header_deprecated=__webpack_require__("./ui/components/component-library/modal-header/deprecated/index.ts");const ConfirmConnectCustodianModal=({onModalClose,custodianName,custodianURL})=>{const t=(0,react.useContext)(i18n.OO);return react.createElement(component_library.u_,{onClose:onModalClose,isOpen:!0,isClosedOnOutsideClick:!0,isClosedOnEscapeKey:!0,className:"mm-modal__custom-scrollbar","data-testid":"confirm-connect-custodian-modal"},react.createElement(component_library.ZA,null),react.createElement(deprecated.h,null,react.createElement(modal_header_deprecated.x,{onClose:onModalClose},t("connectCustodianAccounts",[custodianName])),react.createElement(component_library.xu,{display:design_system.sS.Flex,flexDirection:design_system.Qb.Column,alignItems:design_system.g1.center,paddingTop:5},react.createElement(component_library.xv,{paddingTop:3,paddingLeft:4,paddingRight:4,color:design_system.d9.textAlternative,textAlign:design_system.PH.Center},t("confirmConnectCustodianText",[custodianName])),react.createElement(component_library.xv,{paddingTop:3,paddingLeft:4,paddingRight:4,color:design_system.d9.textAlternative,textAlign:design_system.PH.Center},t("confirmConnectCustodianRedirect",[custodianURL])),react.createElement(component_library.xu,{display:design_system.sS.Flex,flexDirection:design_system.Qb.Column,alignItems:design_system.g1.center,paddingTop:5,paddingBottom:5},react.createElement(component_library.zx,{onClick:()=>window.open(custodianURL,"_blank")},t("continue")),react.createElement(component_library.zx,{paddingTop:3,variant:component_library.Wu.Link,onClick:onModalClose},t("cancel"))))))};ConfirmConnectCustodianModal.__docgenInfo={description:"",methods:[],displayName:"ConfirmConnectCustodianModal",props:{onModalClose:{description:"",type:{name:"func"},required:!0},custodianName:{description:"",type:{name:"string"},required:!0},custodianURL:{description:"",type:{name:"string"},required:!1}}};const confirm_connect_custodian_modal=ConfirmConnectCustodianModal;ConfirmConnectCustodianModal.propTypes={onModalClose:prop_types_default().func.isRequired,custodianName:prop_types_default().string.isRequired,custodianURL:prop_types_default().string}}}]);