"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[172],{"./ui/components/multichain/detected-token-banner/detected-token-banner.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DefaultStory$paramet,_DefaultStory$paramet2,_DefaultStory$paramet3,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/multichain/detected-token-banner/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Multichain/DetectedTokensBanner",component:___WEBPACK_IMPORTED_MODULE_1__.g,argTypes:{actionButtonOnClick:{action:"setShowDetectedTokens"}}},DefaultStory=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.g,args);DefaultStory.storyName="Default",DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => <DetectedTokensBanner {...args} />",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet3=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet3?void 0:_DefaultStory$paramet3.source}}};const __namedExportsOrder=["DefaultStory"];DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"}},"./ui/components/multichain/detected-token-banner/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>DetectedTokensBanner});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js"),selectors=__webpack_require__("./ui/selectors/index.js"),metametrics=__webpack_require__("./ui/contexts/metametrics.js"),constants_metametrics=__webpack_require__("./shared/constants/metametrics.ts"),component_library=__webpack_require__("./ui/components/component-library/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const DetectedTokensBanner=({className,actionButtonOnClick,...props})=>{const t=(0,useI18nContext.C)(),trackEvent=(0,react.useContext)(metametrics.Wd),detectedTokens=(0,es.v9)(selectors.Tl8),detectedTokensDetails=detectedTokens.map((({address,symbol})=>`${symbol} - ${address}`)),chainId=(0,es.v9)(selectors.BVZ);return react.createElement(component_library.wB,_extends({className:classnames_default()("multichain-detected-token-banner",className),actionButtonLabel:t("importTokensCamelCase"),actionButtonOnClick:()=>{actionButtonOnClick(),trackEvent({event:constants_metametrics.AW.TokenImportClicked,category:constants_metametrics.ci.Wallet,properties:{source_connection_method:constants_metametrics.iL.Detected,tokens:detectedTokensDetails,chain_id:chainId}})},"data-testid":"detected-token-banner"},props),1===detectedTokens.length?t("numberOfNewTokensDetectedSingular"):t("numberOfNewTokensDetectedPlural",[detectedTokens.length]))};DetectedTokensBanner.propTypes={actionButtonOnClick:prop_types_default().func.isRequired,className:prop_types_default().string},DetectedTokensBanner.__docgenInfo={description:"",methods:[],displayName:"DetectedTokensBanner",props:{actionButtonOnClick:{description:"Handler to be passed to the DetectedTokenBanner component",type:{name:"func"},required:!0},className:{description:"An additional className to the DetectedTokenBanner component",type:{name:"string"},required:!1}}}}}]);