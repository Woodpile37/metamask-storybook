"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[9268],{"./ui/pages/institutional/confirm-add-custodian-token/confirm-add-custodian-token.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>confirm_add_custodian_token_stories});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),store=__webpack_require__("./ui/store/store.ts"),test_data=__webpack_require__("./.storybook/test-data.js"),react_router=__webpack_require__("./node_modules/react-router/esm/react-router.js"),pulse_loader=__webpack_require__("./ui/components/ui/pulse-loader/index.js"),routes=__webpack_require__("./ui/helpers/constants/routes.ts"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),chip=__webpack_require__("./ui/components/ui/chip/index.js"),network=__webpack_require__("./shared/constants/network.ts"),i18n=__webpack_require__("./ui/contexts/i18n.js"),metametrics=__webpack_require__("./ui/contexts/metametrics.js"),history_history=__webpack_require__("./ui/ducks/history/history.js"),actions=__webpack_require__("./ui/store/actions.ts"),institution_background=__webpack_require__("./ui/store/institutional/institution-background.ts"),selectors=__webpack_require__("./ui/selectors/institutional/selectors.js"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),constants_metametrics=__webpack_require__("./shared/constants/metametrics.ts"),institutional=__webpack_require__("./ui/ducks/institutional/institutional.js"),find_by_custodian_name=__webpack_require__("./ui/helpers/utils/institutional/find-by-custodian-name.ts");const ConfirmAddCustodianToken=()=>{var _connectRequest$label;const t=(0,react.useContext)(i18n.OO),dispatch=(0,es.I0)(),history=(0,react_router.k6)(),trackEvent=(0,react.useContext)(metametrics.Wd),mmiActions=(0,institution_background.I6)(),{custodians}=(0,es.v9)(selectors.Hg),mostRecentOverviewPage=(0,es.v9)(history_history.H7),connectRequests=(0,es.v9)(institutional.A,es.wU),[isLoading,setIsLoading]=(0,react.useState)(!1),[connectError,setConnectError]=(0,react.useState)(""),connectRequest=connectRequests?connectRequests[0]:void 0;(0,react.useEffect)((()=>{connectRequest||(history.push(mostRecentOverviewPage),setIsLoading(!1))}),[connectRequest,history,mostRecentOverviewPage]);const handleButtonClick=(0,react.useCallback)((async({isConfirm})=>{try{if(isConfirm){if(setConnectError(""),setIsLoading(!0),connectRequest.chainId){const networkType=Object.keys(network.Jl).find((key=>Number(network.Jl[key].chainId).toString(10)===connectRequest.chainId.toString()));await dispatch((0,actions.wvr)(networkType))}let custodianName=connectRequest.service.toLowerCase();"JSONRPC"===connectRequest.service&&(custodianName=connectRequest.environment),await dispatch(mmiActions.setCustodianConnectRequest({token:connectRequest.token,apiUrl:connectRequest.apiUrl,custodianName,custodianType:connectRequest.service}))}await dispatch(mmiActions.removeAddTokenConnectRequest({origin:connectRequest.origin,apiUrl:connectRequest.apiUrl,token:connectRequest.token})),trackEvent({category:constants_metametrics.ci.MMI,event:constants_metametrics.AW.TokenAdded,properties:{actions:isConfirm?"Custodian RPC confirm":"Custodian RPC cancel",custodian:connectRequest.custodian,apiUrl:connectRequest.apiUrl}}),isConfirm&&history.push(routes.Lc)}catch(e){const errorMessage=e.message||"Connection error";setConnectError(errorMessage),setIsLoading(!1)}}),[connectRequest,dispatch,history,trackEvent,mmiActions]);if(!connectRequest)return null;trackEvent({category:constants_metametrics.ci.MMI,event:constants_metametrics.AW.TokenAdded,properties:{actions:"Custodian RPC request",custodian:connectRequest.custodian,apiUrl:connectRequest.apiUrl}});const custodianLabel=(null===(_connectRequest$label=connectRequest.labels)||void 0===_connectRequest$label||null===(_connectRequest$label=_connectRequest$label.find((label=>"service"===label.key)))||void 0===_connectRequest$label?void 0:_connectRequest$label.value)||t("custodian"),custodian=(0,find_by_custodian_name.M)(custodianLabel,custodians);return react.createElement(component_library.xu,{className:"page-container"},react.createElement(component_library.xu,{paddingTop:6,paddingLeft:4,paddingRight:4},react.createElement(chip.Z,{borderColor:design_system.kf.borderMuted,label:connectRequest.origin,maxContent:!1,leftIconUrl:null==custodian?void 0:custodian.iconUrl,labelProps:{textAlign:design_system.PH.Center}})),react.createElement(component_library.xu,{padding:4,className:"page-container__content"},react.createElement(component_library.xv,{padding:4,fontWeight:design_system.U9.Bold,variant:design_system.rK.headingSm},t("confirmConnectionTitle",[custodianLabel])),react.createElement(component_library.xv,{paddingTop:3,paddingLeft:4,paddingRight:4,color:design_system.d9.textAlternative},t("allowMmiToConnectToCustodian",[custodianLabel]))),react.createElement(component_library.xu,{marginTop:4,"data-testid":"connect-custodian-token-error"},react.createElement(component_library.xv,{"data-testid":"error-message",textAlign:design_system.PH.Center},connectError)),react.createElement(component_library.xu,{as:"footer",className:"page-container__footer",padding:4},isLoading?react.createElement(pulse_loader.Z,null):react.createElement(component_library.xu,{display:design_system.sS.Flex,gap:4},react.createElement(component_library.zx,{block:!0,variant:component_library.Wu.Secondary,size:component_library.qE.Lg,"data-testid":"cancel-btn",onClick:()=>handleButtonClick({isConfirm:!1})},t("cancel")),react.createElement(component_library.zx,{block:!0,"data-testid":"confirm-btn",size:component_library.qE.Lg,onClick:()=>handleButtonClick({isConfirm:!0})},t("allow")))))};ConfirmAddCustodianToken.__docgenInfo={description:"",methods:[],displayName:"ConfirmAddCustodianToken"};const confirm_add_custodian_token=ConfirmAddCustodianToken;var _DefaultStory$paramet,_DefaultStory$paramet2;const customData={...test_data.default,metamask:{...test_data.default.metamask,institutionalFeatures:{connectRequests:[{labels:[{key:"service",value:"test"}],origin:"origin",token:"awesomeTestToken",feature:"custodian",service:"Saturn",apiUrl:"https://www.apiurl.net/v1",chainId:1}]}}},confirm_add_custodian_token_stories_store=(0,store.Z)(customData),confirm_add_custodian_token_stories={title:"Pages/Institutional/ConfirmAddCustodianToken",decorators:[story=>react.createElement(es.zt,{store:confirm_add_custodian_token_stories_store},story())],component:confirm_add_custodian_token},DefaultStory=()=>react.createElement(confirm_add_custodian_token,null);DefaultStory.storyName="ConfirmAddCustodianToken",DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"() => <ConfirmAddCustodianToken />",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source}}};const __namedExportsOrder=["DefaultStory"];DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"}},"./ui/components/ui/pulse-loader/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_pulse_loader__WEBPACK_IMPORTED_MODULE_0__.Z});var _pulse_loader__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/ui/pulse-loader/pulse-loader.js")},"./ui/ducks/institutional/institutional.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>getInstitutionalConnectRequests});var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.development.js");const name="institutionalFeatures",slice=(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({name,initialState:{}}),{reducer}=slice;const getInstitutionalConnectRequests=state=>{var _state$metamask$name;return null===(_state$metamask$name=state.metamask[name])||void 0===_state$metamask$name?void 0:_state$metamask$name.connectRequests}},"./ui/helpers/utils/institutional/find-by-custodian-name.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function findCustodianByDisplayName(displayName,custodians){const formatedDisplayName=displayName.toLowerCase();if(!custodians)return null;for(const custodian of custodians){const custodianName=custodian.name.toLowerCase();if(0!==custodianName.length&&formatedDisplayName.includes(custodianName))return custodian}return null}__webpack_require__.d(__webpack_exports__,{M:()=>findCustodianByDisplayName})}}]);