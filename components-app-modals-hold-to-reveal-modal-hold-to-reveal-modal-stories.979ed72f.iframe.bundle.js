"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[4153],{"./ui/components/app/modals/hold-to-reveal-modal/hold-to-reveal-modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DefaultStory$paramet,_DefaultStory$paramet2,_storybook_client_api__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-api"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_component_library__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/component-library/index.ts"),_hold_to_reveal_modal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/app/modals/hold-to-reveal-modal/hold-to-reveal-modal.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/App/HoldToRevealModal",component:_hold_to_reveal_modal__WEBPACK_IMPORTED_MODULE_3__.Z,argTypes:{isShowingModal:{control:"boolean"}}},DefaultStory=()=>{const[{isShowingModal},updateArgs]=(0,_storybook_client_api__WEBPACK_IMPORTED_MODULE_0__.useArgs)();return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:()=>updateArgs({isShowingModal:!0})},"Open modal"),isShowingModal&&react__WEBPACK_IMPORTED_MODULE_1__.createElement(_hold_to_reveal_modal__WEBPACK_IMPORTED_MODULE_3__.Z,{isOpen:isShowingModal,onClose:()=>updateArgs({isShowingModal:!1})}))};DefaultStory.storyName="Default",DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"() => {\n  const [{\n    isShowingModal\n  }, updateArgs] = useArgs();\n  return <>\n      <Button onClick={() => updateArgs({\n      isShowingModal: true\n    })}>\n        Open modal\n      </Button>\n      {isShowingModal && <HoldToRevealModal isOpen={isShowingModal} onClose={() => updateArgs({\n      isShowingModal: false\n    })} />}\n    </>;\n}",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source}}};const __namedExportsOrder=["DefaultStory"]}}]);