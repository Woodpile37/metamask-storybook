"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[6810],{"./ui/components/ui/error-message/error-message.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DefaultStory$paramet,_DefaultStory$paramet2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/ui/error-message/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/UI/ErrorMessage(deprecated)",component:___WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{errorMessage:{control:"text"},errorKey:{control:"text"}}},DefaultStory=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.Z,args);DefaultStory.storyName="Default",DefaultStory.args={errorMessage:"There was an error!"},DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => <ErrorMessage {...args} />",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source}}};const __namedExportsOrder=["DefaultStory"];DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"}},"./ui/components/ui/error-message/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>error_message_component});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),component_library=__webpack_require__("./ui/components/component-library/index.ts"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts");const ErrorMessage=(props,context)=>{const{errorMessage,errorKey}=props,error=errorKey?context.t(errorKey):errorMessage;return react.createElement("div",{className:"error-message"},react.createElement(component_library.JO,{className:"error-message__icon",name:component_library.uH.Warning,size:component_library.Jh.Sm,color:design_system.EY.errorDefault,marginRight:2}),react.createElement("div",{className:"error-message__text"},error))};ErrorMessage.propTypes={errorMessage:prop_types_default().string,errorKey:prop_types_default().string},ErrorMessage.contextTypes={t:prop_types_default().func},ErrorMessage.__docgenInfo={description:"@deprecated The `<ErrorMessage />` component has been deprecated in favor of the new `<BannerAlert>` component from the component-library.\nPlease update your code to use the new `<BannerAlert>` component instead, which can be found at ui/components/component-library/banner-alert/banner-alert.js.\nYou can find documentation for the new BannerAlert component in the MetaMask Storybook:\n{@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-banneralert--docs}\nIf you would like to help with the replacement of the old ErrorMessage component, please submit a pull request against this GitHub issue:\n{@link https://github.com/MetaMask/metamask-extension/issues/20394}",methods:[],displayName:"ErrorMessage",props:{errorMessage:{description:"The text content for the error message",type:{name:"string"},required:!1},errorKey:{description:"The translate key for localization. Uses context.t(). Will override the error message",type:{name:"string"},required:!1}},context:{t:{type:{name:"func"},required:!1}}};const error_message_component=ErrorMessage}}]);