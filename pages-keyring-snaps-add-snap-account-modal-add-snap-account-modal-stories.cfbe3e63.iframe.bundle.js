"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[9068],{"./ui/pages/keyring-snaps/add-snap-account-modal/add-snap-account-modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>add_snap_account_modal_stories});var _DefaultStory$paramet,_DefaultStory$paramet2,_DefaultStory$paramet3,external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),react=__webpack_require__("./node_modules/react/index.js"),component_library=__webpack_require__("./ui/components/component-library/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js");function AddSnapAccountModal({onClose,isOpen}){const t=(0,useI18nContext.C)();return react.createElement(component_library.u_,{isOpen,onClose},react.createElement(component_library.ZA,null),react.createElement(component_library.hz,null,react.createElement(component_library.xB,{onClose,margin:[4,4,4,4]},t("settingAddSnapAccount")),react.createElement(component_library.xu,{display:design_system.sS.Flex,padding:[4,4,4,4],flexDirection:design_system.Qb.Column,justifyContent:design_system.E0.center,alignItems:design_system.g1.center},react.createElement(component_library.xu,{marginBottom:4},react.createElement("img",{src:"/images/add-snaps-image.svg"})),react.createElement(component_library.xv,{variant:design_system.rK.bodyLgMedium,textAlign:design_system.PH.Center,marginBottom:4},t("addSnapAccountModalDescription")),react.createElement(component_library.zx,{variant:component_library.RN.PRIMARY,block:!0,className:"get-started_button","data-testid":"get-started-button",onClick:()=>{onClose()}},t("getStarted")))))}try{addsnapaccountmodal.displayName="addsnapaccountmodal",addsnapaccountmodal.__docgenInfo={description:"",displayName:"addsnapaccountmodal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/pages/keyring-snaps/add-snap-account-modal/add-snap-account-modal.tsx#addsnapaccountmodal"]={docgenInfo:addsnapaccountmodal.__docgenInfo,name:"addsnapaccountmodal",path:"ui/pages/keyring-snaps/add-snap-account-modal/add-snap-account-modal.tsx#addsnapaccountmodal"})}catch(__react_docgen_typescript_loader_error){}const AddSnapAccountModalStory={title:"Components/App/AddSnapAccountModal",component:AddSnapAccountModal,argTypes:{}},DefaultStory=()=>{const[{isShowingModal},updateArgs]=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)();return react.createElement(react.Fragment,null,react.createElement(component_library.zx,{variant:component_library.RN.PRIMARY,onClick:()=>updateArgs({isShowingModal:!0})},"Open modal"),isShowingModal&&react.createElement(AddSnapAccountModal,{isOpen:isShowingModal,onClose:()=>updateArgs({isShowingModal:!1})}))};DefaultStory.storyName="Default";const add_snap_account_modal_stories=AddSnapAccountModalStory;DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"() => {\n  const [{\n    isShowingModal\n  }, updateArgs] = useArgs();\n  return <>\n      <Button variant={BUTTON_VARIANT.PRIMARY} onClick={() => updateArgs({\n      isShowingModal: true\n    })}>\n        Open modal\n      </Button>\n      {isShowingModal && <AddSnapAccountModal isOpen={isShowingModal} onClose={() => updateArgs({\n      isShowingModal: false\n    })} />}\n    </>;\n}",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet3=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet3?void 0:_DefaultStory$paramet3.source}}};const __namedExportsOrder=["DefaultStory"]}}]);