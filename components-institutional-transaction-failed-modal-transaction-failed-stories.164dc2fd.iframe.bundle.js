"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[1689],{"./ui/components/institutional/transaction-failed-modal/transaction-failed.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>transaction_failed_stories});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),with_modal_props=__webpack_require__("./ui/helpers/higher-order-components/with-modal-props/index.js"),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js"),modal=__webpack_require__("./ui/components/app/modal/index.js"),box=__webpack_require__("./ui/components/ui/box/box.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),component_library=__webpack_require__("./ui/components/component-library/index.js");const TransactionFailedModal=({hideModal,closeNotification,operationFailed,errorMessage})=>{const t=(0,useI18nContext.C)();return react.createElement(modal.Z,{onSubmit:()=>{closeNotification&&__webpack_require__.g.platform.closeCurrentWindow(),hideModal()},submitText:t("ok")},react.createElement(box.ZP,{display:design_system.bA.FLEX,flexDirection:design_system.uM.COLUMN,alignItems:design_system.g1.center,paddingLeft:4,paddingRight:4,style:{flex:1,overflowY:"auto"}},react.createElement(component_library.JO,{name:component_library.uH.Warning,size:component_library.Jh.Xl}),react.createElement(component_library.xv,{as:"h1",variant:design_system.rK.displayMd,textAlign:design_system.PH.Center,fontWeight:design_system.U9.Bold,paddingTop:4,paddingBottom:4},operationFailed?`${t("operationFailed")}!`:`${t("transactionFailed")}!`),react.createElement(component_library.xv,{textAlign:design_system.PH.Center,variant:design_system.rK.bodySm,paddingTop:4,paddingBottom:4,paddingLeft:4,paddingRight:4,borderRadius:design_system.cM.MD,className:"transaction-failed__description"},errorMessage)))};TransactionFailedModal.propTypes={hideModal:prop_types_default().func,errorMessage:prop_types_default().string,closeNotification:prop_types_default().bool,operationFailed:prop_types_default().bool},TransactionFailedModal.__docgenInfo={description:"",methods:[],displayName:"TransactionFailedModal",props:{hideModal:{description:"",type:{name:"func"},required:!1},errorMessage:{description:"",type:{name:"string"},required:!1},closeNotification:{description:"",type:{name:"bool"},required:!1},operationFailed:{description:"",type:{name:"bool"},required:!1}}};const transaction_failed=(0,with_modal_props.Z)(TransactionFailedModal);var _DefaultStory$paramet,_DefaultStory$paramet2,_DefaultStory$paramet3;const transaction_failed_stories={title:"Components/Institutional/TransactionFailedModal",argTypes:{},args:{errorMessage:"test",operationFailed:!1}},DefaultStory=args=>react.createElement(transaction_failed,args);DefaultStory.storyName="TransactionFailedModal",DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => {\n  return <TransactionFailedModal {...args} />;\n}",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet3=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet3?void 0:_DefaultStory$paramet3.source}}};const __namedExportsOrder=["DefaultStory"];DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"}},"./ui/components/app/modal/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Modal});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),ui_button=__webpack_require__("./ui/components/ui/button/index.js");function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class Modal extends react.PureComponent{render(){const{children,headerText,onClose,onSubmit,submitType,submitText,submitDisabled,onCancel,cancelType,cancelText,contentClass,containerClass,hideFooter}=this.props;return react.createElement("div",{className:classnames_default()("modal-container",containerClass)},headerText&&react.createElement("div",{className:"modal-container__header"},react.createElement("div",{className:"modal-container__header-text"},headerText),react.createElement("div",{className:"modal-container__header-close","data-testid":"modal-header-close",onClick:onClose})),react.createElement("div",{className:classnames_default()("modal-container__content",contentClass)},children),hideFooter?null:react.createElement("div",{className:"modal-container__footer"},onCancel&&react.createElement(ui_button.Z,{type:cancelType,onClick:onCancel,className:"modal-container__footer-button"},cancelText),react.createElement(ui_button.Z,{type:submitType,onClick:onSubmit,disabled:submitDisabled,className:"modal-container__footer-button"},submitText)))}}_defineProperty(Modal,"propTypes",{children:prop_types_default().node,contentClass:prop_types_default().string,containerClass:prop_types_default().string,headerText:prop_types_default().string,onClose:prop_types_default().func,onSubmit:prop_types_default().func,submitType:prop_types_default().string,submitText:prop_types_default().string,submitDisabled:prop_types_default().bool,hideFooter:prop_types_default().bool,onCancel:prop_types_default().func,cancelType:prop_types_default().string,cancelText:prop_types_default().string}),_defineProperty(Modal,"defaultProps",{submitType:"primary",cancelType:"secondary"}),Modal.__docgenInfo={description:"@deprecated The `<Modal />` component has been deprecated in favor of the new `<Modal>` component from the component-library.\nPlease update your code to use the new `<Modal>` component instead, which can be found at ui/components/component-library/modal/modal.tsx.\nYou can find documentation for the new Modal component in the MetaMask Storybook:\n{@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-modal--docs}\nIf you would like to help with the replacement of the old Modal component, please submit a pull request",methods:[],displayName:"Modal",props:{submitType:{defaultValue:{value:"'primary'",computed:!1},description:"",type:{name:"string"},required:!1},cancelType:{defaultValue:{value:"'secondary'",computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1},contentClass:{description:"",type:{name:"string"},required:!1},containerClass:{description:"",type:{name:"string"},required:!1},headerText:{description:"",type:{name:"string"},required:!1},onClose:{description:"",type:{name:"func"},required:!1},onSubmit:{description:"",type:{name:"func"},required:!1},submitText:{description:"",type:{name:"string"},required:!1},submitDisabled:{description:"",type:{name:"bool"},required:!1},hideFooter:{description:"",type:{name:"bool"},required:!1},onCancel:{description:"",type:{name:"func"},required:!1},cancelText:{description:"",type:{name:"string"},required:!1}}};class ModalContent extends react.PureComponent{render(){const{title,description}=this.props;return react.createElement("div",{className:"modal-content"},title?react.createElement("div",{className:"modal-content__title"},title):null,description&&react.createElement("div",{className:"modal-content__description"},description))}}!function modal_content_component_defineProperty(obj,key,value){return(key=function modal_content_component_toPropertyKey(arg){var key=function modal_content_component_toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(ModalContent,"propTypes",{title:prop_types_default().string,description:prop_types_default().string}),ModalContent.__docgenInfo={description:"",methods:[],displayName:"ModalContent",props:{title:{description:"",type:{name:"string"},required:!1},description:{description:"",type:{name:"string"},required:!1}}}},"./ui/helpers/higher-order-components/with-modal-props/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>withModalProps});var es=__webpack_require__("./node_modules/react-redux/es/index.js"),actions=__webpack_require__("./ui/store/actions.ts");const mapStateToProps=state=>{const{appState}=state,{props:modalProps}=appState.modal.modalState;return{...modalProps}},mapDispatchToProps=dispatch=>({hideModal:()=>dispatch((0,actions.VGc)())});function withModalProps(Component){return(0,es.$j)(mapStateToProps,mapDispatchToProps)(Component)}}}]);