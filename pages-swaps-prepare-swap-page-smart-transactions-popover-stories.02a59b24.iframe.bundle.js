"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[6966],{"./ui/pages/swaps/prepare-swap-page/smart-transactions-popover.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DefaultStory$paramet,_DefaultStory$paramet2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_client_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/client-api"),_components_component_library__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/component-library/index.ts"),_smart_transactions_popover__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/pages/swaps/prepare-swap-page/smart-transactions-popover.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Pages/Swaps/SmartTransactionsPopover",component:_smart_transactions_popover__WEBPACK_IMPORTED_MODULE_3__.Z,argTypes:{isShowingModal:{control:"boolean"}}},DefaultStory=()=>{const[{isShowingModal},updateArgs]=(0,_storybook_client_api__WEBPACK_IMPORTED_MODULE_1__.useArgs)(),toggleModal=()=>updateArgs({isShowingModal:!isShowingModal});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_component_library__WEBPACK_IMPORTED_MODULE_2__.zx,{variant:_components_component_library__WEBPACK_IMPORTED_MODULE_2__.Wu.Primary,onClick:toggleModal},"Open modal"),isShowingModal&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_smart_transactions_popover__WEBPACK_IMPORTED_MODULE_3__.Z,{isOpen:isShowingModal,onStartSwapping:()=>{console.log("onStartSwapping")},onManageStxInSettings:toggleModal}))};DefaultStory.storyName="Default",DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"() => {\n  const [{\n    isShowingModal\n  }, updateArgs] = useArgs();\n  const toggleModal = () => updateArgs({\n    isShowingModal: !isShowingModal\n  });\n  return <>\n      <Button variant={ButtonVariant.Primary} onClick={toggleModal}>\n        Open modal\n      </Button>\n      {isShowingModal && <SmartTransactionPopover isOpen={isShowingModal} onStartSwapping={() => {\n      console.log('onStartSwapping');\n    }} onManageStxInSettings={toggleModal} />}\n    </>;\n}",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source}}};const __namedExportsOrder=["DefaultStory"]},"./ui/pages/swaps/prepare-swap-page/smart-transactions-popover.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>SmartTransactionsPopover});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_hooks_useI18nContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/hooks/useI18nContext.js"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_components_component_library__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/component-library/index.ts"),_components_component_library_modal_content_deprecated__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/components/component-library/modal-content/deprecated/index.ts"),_components_component_library_modal_header_deprecated__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/components/component-library/modal-header/deprecated/index.ts"),_shared_constants_swaps__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./shared/constants/swaps.ts");function SmartTransactionsPopover({onStartSwapping,onManageStxInSettings,isOpen}){const t=(0,_hooks_useI18nContext__WEBPACK_IMPORTED_MODULE_1__.C)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_component_library__WEBPACK_IMPORTED_MODULE_3__.u_,{isOpen,onClose:onStartSwapping,isClosedOnOutsideClick:!1,isClosedOnEscapeKey:!1,className:"mm-modal__custom-scrollbar"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_component_library__WEBPACK_IMPORTED_MODULE_3__.ZA,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_component_library_modal_content_deprecated__WEBPACK_IMPORTED_MODULE_4__.h,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_component_library_modal_header_deprecated__WEBPACK_IMPORTED_MODULE_5__.x,{alignItems:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.g1.center,justifyContent:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.E0.center},t("smartSwapsAreHere")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_component_library__WEBPACK_IMPORTED_MODULE_3__.xu,{display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.sS.Flex,flexDirection:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Qb.Column,gap:4,marginTop:4},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_component_library__WEBPACK_IMPORTED_MODULE_3__.xu,{display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.sS.Flex,flexDirection:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Qb.Column},react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:"./images/logo/metamask-smart-transactions.png",alt:t("swapSwapSwitch")})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_component_library__WEBPACK_IMPORTED_MODULE_3__.xv,null,t("smartSwapsDescription")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_component_library__WEBPACK_IMPORTED_MODULE_3__.xv,{as:"ul",marginTop:3,marginBottom:3,style:{listStyle:"inside"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:"stxBenefit1"},t("stxBenefit1")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:"stxBenefit2"},t("stxBenefit2")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:"stxBenefit3"},t("stxBenefit3")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:"stxBenefit4"},t("stxBenefit4"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_component_library__WEBPACK_IMPORTED_MODULE_3__.xv,{as:"span",fontWeight:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.U9.Normal}," *"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_component_library__WEBPACK_IMPORTED_MODULE_3__.xv,{color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.d9.textAlternative},t("smartSwapsDescription2",[react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_component_library__WEBPACK_IMPORTED_MODULE_3__.ZP,{size:_components_component_library__WEBPACK_IMPORTED_MODULE_3__.o3.Inherit,href:_shared_constants_swaps__WEBPACK_IMPORTED_MODULE_6__.yS,externalLink:!0,display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.sS.Inline,key:"smartSwapsDescription2"},t("faqAndRiskDisclosures"))])),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_component_library__WEBPACK_IMPORTED_MODULE_3__.zx,{variant:_components_component_library__WEBPACK_IMPORTED_MODULE_3__.Wu.Primary,onClick:onStartSwapping,width:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Sw.Full},t("enableSmartSwaps")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_component_library__WEBPACK_IMPORTED_MODULE_3__.zx,{type:"link",variant:_components_component_library__WEBPACK_IMPORTED_MODULE_3__.Wu.Link,onClick:onManageStxInSettings,width:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Sw.Full},t("manageInSettings")))))}try{smarttransactionspopover.displayName="smarttransactionspopover",smarttransactionspopover.__docgenInfo={description:"",displayName:"smarttransactionspopover",props:{onStartSwapping:{defaultValue:null,description:"",name:"onStartSwapping",required:!0,type:{name:"() => void"}},onManageStxInSettings:{defaultValue:null,description:"",name:"onManageStxInSettings",required:!0,type:{name:"() => void"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/pages/swaps/prepare-swap-page/smart-transactions-popover.tsx#smarttransactionspopover"]={docgenInfo:smarttransactionspopover.__docgenInfo,name:"smarttransactionspopover",path:"ui/pages/swaps/prepare-swap-page/smart-transactions-popover.tsx#smarttransactionspopover"})}catch(__react_docgen_typescript_loader_error){}}}]);