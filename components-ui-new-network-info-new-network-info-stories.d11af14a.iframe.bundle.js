"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[2412],{"./ui/components/ui/new-network-info/new-network-info.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>new_network_info_stories});var _DefaultStory$paramet,_DefaultStory$paramet2,react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),react_router=__webpack_require__("./node_modules/react-router/esm/react-router.js"),tokens=__webpack_require__("./shared/constants/tokens.js"),fetch_with_cache=__webpack_require__("./shared/lib/fetch-with-cache.ts"),i18n=__webpack_require__("./ui/contexts/i18n.js"),metamask=__webpack_require__("./ui/ducks/metamask/metamask.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),routes=__webpack_require__("./ui/helpers/constants/routes.ts"),selectors=__webpack_require__("./ui/selectors/index.js"),actions=__webpack_require__("./ui/store/actions.ts"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),ui_button=__webpack_require__("./ui/components/ui/button/index.js"),popover=__webpack_require__("./ui/components/ui/popover/index.js");function NewNetworkInfo(){var _currentNetwork$rpcPr;const t=(0,react.useContext)(i18n.OO),history=(0,react_router.k6)(),[tokenDetectionSupported,setTokenDetectionSupported]=(0,react.useState)(!1),[showPopup,setShowPopup]=(0,react.useState)(!0),[isLoading,setIsLoading]=(0,react.useState)(!0),autoDetectToken=(0,es.v9)(selectors.qD4),providerConfig=(0,es.v9)(metamask.Vu),currentNetwork=(0,es.v9)(selectors.t4u),onCloseClick=()=>{setShowPopup(!1),(0,actions.Y6v)(providerConfig.chainId)},checkTokenDetection=(0,react.useCallback)((async()=>{try{const fetchedTokenData=await(0,fetch_with_cache.Z)({url:`${tokens.Fs}${providerConfig.chainId}`,functionName:"getIsTokenDetectionSupported"}),isTokenDetectionSupported=!(null!=fetchedTokenData&&fetchedTokenData.error);setTokenDetectionSupported(isTokenDetectionSupported),setIsLoading(!1)}catch{setTokenDetectionSupported(!1),setIsLoading(!1)}}),[providerConfig.chainId]);return(0,react.useEffect)((()=>{checkTokenDetection()}),[]),!isLoading&&showPopup&&react.createElement(popover.Z,{onClose:onCloseClick,className:"new-network-info__wrapper",footer:react.createElement(ui_button.Z,{type:"primary",onClick:onCloseClick},t("recoveryPhraseReminderConfirm"))},react.createElement(component_library.xu,{"data-testid":"new-network-info__wrapper",display:design_system.sS.Flex,flexDirection:design_system.Qb.Column},react.createElement(component_library.xv,{variant:design_system.rK.headingSm,as:"h4",color:design_system.Il.textDefault,fontWeight:design_system.U9.Bold,align:design_system.PH.Center},t("switchedTo")),react.createElement(component_library.Eu,{label:null==currentNetwork?void 0:currentNetwork.nickname,src:null==currentNetwork||null===(_currentNetwork$rpcPr=currentNetwork.rpcPrefs)||void 0===_currentNetwork$rpcPr?void 0:_currentNetwork$rpcPr.imageUrl,marginLeft:"auto",marginRight:"auto",marginTop:4,marginBottom:4,iconProps:{display:"none"},as:"div"}),react.createElement(component_library.xv,{variant:design_system.rK.bodySmBold,as:"h6",color:design_system.Il.textDefault,align:design_system.PH.Center,margin:[8,0,0,0]},t("thingsToKeep")),react.createElement(component_library.xu,{marginRight:4,marginLeft:5,marginTop:6},providerConfig.ticker&&react.createElement(component_library.xu,{display:design_system.sS.Flex,alignItems:design_system.g1.center,marginBottom:2,paddingBottom:2,className:"new-network-info__bullet-paragraph","data-testid":"new-network-info__bullet-paragraph"},react.createElement(component_library.xu,{marginRight:4,color:design_system.Il.textDefault},"•"),react.createElement(component_library.xv,{variant:design_system.rK.bodySm,as:"h6",color:design_system.Il.textDefault,display:design_system.sS.InlineBlock,key:"nativeTokenInfo"},t("nativeToken",[react.createElement(component_library.xv,{variant:design_system.rK.bodySmBold,as:"h6",display:design_system.sS.InlineBlock,key:"ticker"},providerConfig.ticker)]))),react.createElement(component_library.xu,{display:design_system.sS.Flex,alignItems:design_system.g1.center,marginBottom:2,paddingBottom:2,className:autoDetectToken&&tokenDetectionSupported?null:"new-network-info__bullet-paragraph"},react.createElement(component_library.xu,{marginRight:4,color:design_system.Il.textDefault},"•"),react.createElement(component_library.xv,{variant:design_system.rK.bodySm,as:"h6",color:design_system.Il.textDefault,display:design_system.sS.InlineBlock,className:"new-network-info__bullet-paragraph__text"},t("attemptSendingAssets")," ",react.createElement("a",{href:"https://metamask.zendesk.com/hc/en-us/articles/4404424659995",target:"_blank",rel:"noreferrer"},react.createElement(component_library.xv,{variant:design_system.rK.bodySm,as:"h6",color:design_system.Il.infoDefault,display:design_system.sS.InlineBlock},t("learnMoreUpperCase"))))),autoDetectToken&&tokenDetectionSupported?null:react.createElement(component_library.xu,{display:design_system.sS.Flex,alignItems:design_system.g1.center,marginBottom:2,paddingBottom:2,"data-testid":"new-network-info__add-token-manually"},react.createElement(component_library.xu,{marginRight:4,color:design_system.Il.textDefault},"•"),react.createElement(component_library.xu,null,react.createElement(component_library.xv,{variant:design_system.rK.bodySm,as:"h6",color:design_system.Il.textDefault,className:"new-network-info__token-show-up"},t("tokenShowUp")," ",react.createElement(ui_button.Z,{type:"link",onClick:()=>{history.push(routes.qv),setShowPopup(!1),(0,actions.Y6v)(providerConfig.chainId)},className:"new-network-info__button"},react.createElement(component_library.xv,{variant:design_system.rK.bodySm,as:"h6",color:design_system.Il.infoDefault,className:"new-network-info__manually-add-tokens"},t("clickToManuallyAdd")))))))))}NewNetworkInfo.__docgenInfo={description:"",methods:[],displayName:"NewNetworkInfo"};const new_network_info_stories={title:"Components/UI/NewNetworkInfo"},DefaultStory=()=>react.createElement(NewNetworkInfo,null);DefaultStory.storyName="Default",DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"() => <NewNetworkInfo />",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source}}};const __namedExportsOrder=["DefaultStory"];DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"}}}]);