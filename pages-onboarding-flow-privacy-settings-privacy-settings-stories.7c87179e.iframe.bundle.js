"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[1302],{"./ui/pages/onboarding-flow/privacy-settings/privacy-settings.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>privacy_settings_stories});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),react_router=__webpack_require__("./node_modules/react-router/esm/react-router.js"),util=__webpack_require__("./app/scripts/lib/util.ts"),metametrics=__webpack_require__("./shared/constants/metametrics.ts"),ui_utils=__webpack_require__("./shared/lib/ui-utils.js"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),contexts_metametrics=__webpack_require__("./ui/contexts/metametrics.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),routes=__webpack_require__("./ui/helpers/constants/routes.ts"),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js"),selectors=__webpack_require__("./ui/selectors/index.js"),actions=__webpack_require__("./ui/store/actions.ts"),incoming_transaction_toggle=__webpack_require__("./ui/components/app/incoming-trasaction-toggle/incoming-transaction-toggle.tsx"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),toggle_button=__webpack_require__("./ui/components/ui/toggle-button/index.js");const Setting=({value,setValue,title,description,showToggle=!0})=>{const t=(0,useI18nContext.C)();return react.createElement(component_library.xu,{display:design_system.sS.Flex,justifyContent:design_system.E0.spaceBetween,alignItems:design_system.g1.center,marginTop:3,marginBottom:3,className:"privacy-settings__setting__wrapper"},react.createElement("div",{className:"privacy-settings__setting"},react.createElement(component_library.xv,{variant:design_system.rK.bodyMdMedium},title),react.createElement(component_library.xv,{variant:design_system.rK.bodySm,as:"div"},description)),showToggle?react.createElement("div",{className:"privacy-settings__setting__toggle"},react.createElement(toggle_button.Z,{value,onToggle:val=>setValue(!val),offLabel:t("off"),onLabel:t("on")})):null)};function PrivacySettings(){var _currentNetwork$rpcPr;const t=(0,useI18nContext.C)(),dispatch=(0,es.I0)(),history=(0,react_router.k6)(),defaultState=(0,es.v9)((state=>state.metamask)),{incomingTransactionsPreferences,usePhishDetect,use4ByteResolution,useTokenDetection,useCurrencyRateCheck,useMultiAccountBalanceChecker,ipfsGateway,useAddressBarEnsResolution}=defaultState,[usePhishingDetection,setUsePhishingDetection]=(0,react.useState)(usePhishDetect),[turnOn4ByteResolution,setTurnOn4ByteResolution]=(0,react.useState)(use4ByteResolution),[turnOnTokenDetection,setTurnOnTokenDetection]=(0,react.useState)(useTokenDetection),[turnOnCurrencyRateCheck,setTurnOnCurrencyRateCheck]=(0,react.useState)(useCurrencyRateCheck),[isMultiAccountBalanceCheckerEnabled,setMultiAccountBalanceCheckerEnabled]=(0,react.useState)(useMultiAccountBalanceChecker),[ipfsURL,setIPFSURL]=(0,react.useState)(ipfsGateway),[ipfsError,setIPFSError]=(0,react.useState)(null),[addressBarResolution,setAddressBarResolution]=(0,react.useState)(useAddressBarEnsResolution),trackEvent=(0,react.useContext)(contexts_metametrics.Wd),currentNetwork=(0,es.v9)(selectors.t4u),allNetworks=(0,es.v9)(selectors.xw6);return react.createElement(react.Fragment,null,react.createElement("div",{className:"privacy-settings","data-testid":"privacy-settings"},react.createElement("div",{className:"privacy-settings__header"},react.createElement(component_library.xv,{variant:design_system.rK.headingLg,as:"h2"},t("advancedConfiguration")),react.createElement(component_library.xv,{variant:design_system.rK.headingSm,as:"h4"},t("setAdvancedPrivacySettingsDetails"))),react.createElement("div",{className:"privacy-settings__settings","data-testid":"privacy-settings-settings"},react.createElement(incoming_transaction_toggle.Z,{allNetworks,setIncomingTransactionsPreferences:(chainId,value)=>dispatch((0,actions.k3n)(chainId,value)),incomingTransactionsPreferences}),react.createElement(Setting,{value:usePhishingDetection,setValue:setUsePhishingDetection,title:t("usePhishingDetection"),description:t("onboardingUsePhishingDetectionDescription",[react.createElement("a",{href:"https://www.jsdelivr.com",target:"_blank",rel:"noreferrer",key:"jsDeliver"},t("jsDeliver")),react.createElement("a",{href:"https://www.jsdelivr.com/terms/privacy-policy-jsdelivr-com",target:"_blank",rel:"noreferrer",key:"privacyMsg"},t("privacyMsg"))])}),react.createElement(Setting,{value:turnOn4ByteResolution,setValue:setTurnOn4ByteResolution,title:t("use4ByteResolution"),description:t("use4ByteResolutionDescription")}),react.createElement(Setting,{value:turnOnTokenDetection,setValue:setTurnOnTokenDetection,title:t("turnOnTokenDetection"),description:t("useTokenDetectionPrivacyDesc")}),react.createElement(Setting,{value:isMultiAccountBalanceCheckerEnabled,setValue:setMultiAccountBalanceCheckerEnabled,title:t("useMultiAccountBalanceChecker"),description:t("useMultiAccountBalanceCheckerSettingDescription")}),react.createElement(Setting,{title:t("onboardingAdvancedPrivacyNetworkTitle"),showToggle:!1,description:react.createElement(react.Fragment,null,t("onboardingAdvancedPrivacyNetworkDescription",[react.createElement("a",{href:"https://consensys.io/privacy-policy/",key:"link",target:"_blank",rel:"noopener noreferrer"},t("privacyMsg"))]),react.createElement(component_library.xu,{paddingTop:2},currentNetwork?react.createElement("div",{className:"privacy-settings__network"},react.createElement(react.Fragment,null,react.createElement(component_library.Eu,{label:null==currentNetwork?void 0:currentNetwork.nickname,src:null==currentNetwork||null===(_currentNetwork$rpcPr=currentNetwork.rpcPrefs)||void 0===_currentNetwork$rpcPr?void 0:_currentNetwork$rpcPr.imageUrl,onClick:()=>dispatch((0,actions.DON)())}))):react.createElement(component_library.PL,{size:component_library.El.Lg,onClick:e=>{e.preventDefault(),dispatch((0,actions.K4b)({name:"ONBOARDING_ADD_NETWORK"}))}},t("onboardingAdvancedPrivacyNetworkButton"))))}),react.createElement(Setting,{title:t("onboardingAdvancedPrivacyIPFSTitle"),showToggle:!1,description:react.createElement(react.Fragment,null,t("onboardingAdvancedPrivacyIPFSDescription"),react.createElement(component_library.xu,{paddingTop:2},react.createElement(component_library.nv,{value:ipfsURL,style:{width:"100%"},inputProps:{"data-testid":"ipfs-input"},onChange:e=>{(url=>{setIPFSURL(url);try{const{host}=new URL((0,util.Dc)(url));if(!host||"gateway.ipfs.io"===host)throw new Error;setIPFSError(null)}catch(error){setIPFSError(t("onboardingAdvancedPrivacyIPFSInvalid"))}})(e.target.value)}}),ipfsURL?react.createElement(component_library.xv,{variant:design_system.rK.bodySm,color:ipfsError?design_system.d9.errorDefault:design_system.d9.successDefault},ipfsError||t("onboardingAdvancedPrivacyIPFSValid")):null))}),react.createElement(Setting,{value:addressBarResolution,setValue:setAddressBarResolution,title:t("ensDomainsSettingTitle"),description:react.createElement(react.Fragment,null,react.createElement(component_library.xv,{variant:design_system.rK.inherit},t("ensDomainsSettingDescriptionIntroduction")),react.createElement(component_library.xu,{as:"ul",marginTop:4,marginBottom:4,paddingInlineStart:4,style:{listStyleType:"circle"}},react.createElement(component_library.xv,{variant:design_system.rK.inherit,as:"li"},t("ensDomainsSettingDescriptionPart1")),react.createElement(component_library.xv,{variant:design_system.rK.inherit,as:"li"},t("ensDomainsSettingDescriptionPart2"))),react.createElement(component_library.xv,{variant:design_system.rK.inherit},t("ensDomainsSettingDescriptionOutroduction")))}),react.createElement(Setting,{value:turnOnCurrencyRateCheck,setValue:setTurnOnCurrencyRateCheck,title:t("currencyRateCheckToggle"),description:t("currencyRateCheckToggleDescription",[react.createElement("a",{key:"coingecko_link",href:ui_utils.QL,rel:"noreferrer",target:"_blank"},t("coingecko")),react.createElement("a",{key:"cryptocompare_link",href:ui_utils.oq,rel:"noreferrer",target:"_blank"},t("cryptoCompare")),react.createElement("a",{key:"privacy_policy_link",href:ui_utils.jb,rel:"noreferrer",target:"_blank"},t("privacyMsg"))])}),react.createElement(component_library.DF,{size:component_library.mY.Lg,onClick:()=>{if(dispatch((0,actions.Lbh)(usePhishingDetection)),dispatch((0,actions.Ufz)(turnOn4ByteResolution)),dispatch((0,actions.gQy)(turnOnTokenDetection)),dispatch((0,actions.yZ0)(isMultiAccountBalanceCheckerEnabled)),dispatch((0,actions.UCN)(turnOnCurrencyRateCheck)),dispatch((0,actions.EJ1)()),dispatch((0,actions.STk)(addressBarResolution)),ipfsURL&&!ipfsError){const{host}=new URL((0,util.Dc)(ipfsURL));dispatch((0,actions.Cak)(host))}trackEvent({category:metametrics.ci.Onboarding,event:metametrics.AW.OnboardingWalletAdvancedSettings,properties:{show_incoming_tx:incomingTransactionsPreferences,use_phising_detection:usePhishingDetection,turnon_token_detection:turnOnTokenDetection}}),history.push(routes.DL)},block:!0,marginTop:6},t("done")))))}var _DefaultStory$paramet,_DefaultStory$paramet2;Setting.propTypes={value:prop_types_default().bool,setValue:prop_types_default().func,title:prop_types_default().string,description:prop_types_default().oneOfType([prop_types_default().object,prop_types_default().string]),showToggle:prop_types_default().bool},Setting.__docgenInfo={description:"",methods:[],displayName:"Setting",props:{showToggle:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},value:{description:"",type:{name:"bool"},required:!1},setValue:{description:"",type:{name:"func"},required:!1},title:{description:"",type:{name:"string"},required:!1},description:{description:"",type:{name:"union",value:[{name:"object"},{name:"string"}]},required:!1}}},PrivacySettings.__docgenInfo={description:"",methods:[],displayName:"PrivacySettings"};const privacy_settings_stories={title:"Pages/OnboardingFlow/PrivacySettings"},DefaultStory=()=>react.createElement("div",{style:{maxHeight:"2000px"}},react.createElement(PrivacySettings,null));DefaultStory.storyName="Default",DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"() => {\n  return <div style={{\n    maxHeight: '2000px'\n  }}>\n      <PrivacySettings />\n    </div>;\n}",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source}}};const __namedExportsOrder=["DefaultStory"];DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"}},"./ui/components/app/incoming-trasaction-toggle/incoming-transaction-toggle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),_contexts_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/contexts/i18n.js"),_component_library__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/component-library/index.ts"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_shared_constants_network__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./shared/constants/network.ts"),_network_toggle__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/components/app/incoming-trasaction-toggle/network-toggle.tsx");const IncomingTransactionToggle=({wrapperRef,incomingTransactionsPreferences,allNetworks,setIncomingTransactionsPreferences})=>{const t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_i18n__WEBPACK_IMPORTED_MODULE_1__.OO),[networkPreferences,setNetworkPreferences]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(generateIncomingNetworkPreferences(incomingTransactionsPreferences,allNetworks));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setNetworkPreferences(generateIncomingNetworkPreferences(incomingTransactionsPreferences,allNetworks))}),[incomingTransactionsPreferences,allNetworks]);const toggleSingleNetwork=(chainId,value)=>{setIncomingTransactionsPreferences(chainId,value)};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.xu,{ref:wrapperRef,className:"mm-incoming-transaction-toggle"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.xv,{variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.rK.bodyMd},t("showIncomingTransactions")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.xv,{variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.rK.bodySm,color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.d9.textAlternative},t("showIncomingTransactionsExplainer")),Object.keys(networkPreferences).map(((chainId,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_network_toggle__WEBPACK_IMPORTED_MODULE_5__.Z,{key:index,chainId,networkPreferences:networkPreferences[chainId],toggleSingleNetwork}))))},__WEBPACK_DEFAULT_EXPORT__=IncomingTransactionToggle;function generateIncomingNetworkPreferences(incomingTransactionsPreferences,allNetworks){const incomingTxnPreferences={};return Object.keys(allNetworks).forEach((id=>{var _allNetworks$id$rpcPr;const{chainId}=allNetworks[id];incomingTxnPreferences[chainId]={isShowIncomingTransactions:incomingTransactionsPreferences[chainId],isATestNetwork:_shared_constants_network__WEBPACK_IMPORTED_MODULE_4__.mT.includes(chainId),label:allNetworks[id].nickname,imageUrl:null===(_allNetworks$id$rpcPr=allNetworks[id].rpcPrefs)||void 0===_allNetworks$id$rpcPr?void 0:_allNetworks$id$rpcPr.imageUrl}})),incomingTxnPreferences}IncomingTransactionToggle.propTypes={wrapperRef:prop_types__WEBPACK_IMPORTED_MODULE_6___default().object,incomingTransactionsPreferences:prop_types__WEBPACK_IMPORTED_MODULE_6___default().object.isRequired,allNetworks:prop_types__WEBPACK_IMPORTED_MODULE_6___default().array.isRequired,setIncomingTransactionsPreferences:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func.isRequired};try{incomingtransactiontoggle.displayName="incomingtransactiontoggle",incomingtransactiontoggle.__docgenInfo={description:"",displayName:"incomingtransactiontoggle",props:{wrapperRef:{defaultValue:null,description:"",name:"wrapperRef",required:!1,type:{name:"any"}},incomingTransactionsPreferences:{defaultValue:null,description:"",name:"incomingTransactionsPreferences",required:!0,type:{name:"Record<string, boolean>"}},allNetworks:{defaultValue:null,description:"",name:"allNetworks",required:!0,type:{name:"Record<string, any>[]"}},setIncomingTransactionsPreferences:{defaultValue:null,description:"",name:"setIncomingTransactionsPreferences",required:!0,type:{name:"(chainId: string, isAllEnabledValue: boolean) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/app/incoming-trasaction-toggle/incoming-transaction-toggle.tsx#incomingtransactiontoggle"]={docgenInfo:incomingtransactiontoggle.__docgenInfo,name:"incomingtransactiontoggle",path:"ui/components/app/incoming-trasaction-toggle/incoming-transaction-toggle.tsx#incomingtransactiontoggle"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/app/incoming-trasaction-toggle/network-toggle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_shared_constants_network__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./shared/constants/network.ts"),_contexts_i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/contexts/i18n.js"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_component_library__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/components/component-library/index.ts"),_ui_toggle_button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/components/ui/toggle-button/index.js"),_ui_tooltip__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ui/components/ui/tooltip/index.js");const NetworkToggle=({networkPreferences,toggleSingleNetwork,chainId})=>{var _domain$charAt;const t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_i18n__WEBPACK_IMPORTED_MODULE_2__.OO),{isShowIncomingTransactions}=networkPreferences,networkName=networkPreferences.label,networkDomainAndSubdomain=null===_shared_constants_network__WEBPACK_IMPORTED_MODULE_1__.YV||void 0===_shared_constants_network__WEBPACK_IMPORTED_MODULE_1__.YV?void 0:_shared_constants_network__WEBPACK_IMPORTED_MODULE_1__.YV[chainId],domain=null==networkDomainAndSubdomain?void 0:networkDomainAndSubdomain.domain,upperCaseDomain=(null==domain||null===(_domain$charAt=domain.charAt(0))||void 0===_domain$charAt?void 0:_domain$charAt.toUpperCase())+(null==domain?void 0:domain.slice(1));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.xu,{marginTop:6,marginBottom:6,display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.sS.Flex,flexDirection:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.Qb.Row,gap:4,justifyContent:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.E0.spaceBetween,"data-testid":`network-toggle-${chainId}`,className:"network-toggle-wrapper"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.xu,{backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.lP.transparent,display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.sS.Flex,alignItems:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.g1.center,width:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.Sw.Full,gap:4,className:"network-toggle-wrapper__overflow-container"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.OQ,{size:_component_library__WEBPACK_IMPORTED_MODULE_4__.NI.Sm,src:networkPreferences.imageUrl,name:networkName}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.xu,{display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.sS.Flex,flexDirection:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.Qb.Column,className:"network-toggle-wrapper__overflow-container"},networkName.length>20?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_tooltip__WEBPACK_IMPORTED_MODULE_6__.Z,{position:"bottom"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.xv,{color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.d9.textDefault,backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.lP.transparent,variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.rK.bodyMd,ellipsis:!0},networkName)):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.xv,{color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.d9.textDefault,backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.lP.transparent,variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.rK.bodyMd,ellipsis:!0},networkName),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.xv,{color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.d9.primaryDefault,backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.lP.transparent,variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.rK.bodySm,ellipsis:!0},domain&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{key:`network_${domain}_link`,href:`https://${domain}`,rel:"noreferrer",target:"_blank"},upperCaseDomain)))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.xu,{marginLeft:"auto"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_toggle_button__WEBPACK_IMPORTED_MODULE_5__.Z,{value:isShowIncomingTransactions,onToggle:value=>toggleSingleNetwork(chainId,!value),offLabel:t("off"),onLabel:t("on")})))},__WEBPACK_DEFAULT_EXPORT__=NetworkToggle;NetworkToggle.propTypes={chainId:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string.isRequired,networkPreferences:prop_types__WEBPACK_IMPORTED_MODULE_7___default().object.isRequired,toggleSingleNetwork:prop_types__WEBPACK_IMPORTED_MODULE_7___default().func.isRequired};try{networktoggle.displayName="networktoggle",networktoggle.__docgenInfo={description:"",displayName:"networktoggle",props:{networkPreferences:{defaultValue:null,description:"",name:"networkPreferences",required:!0,type:{name:"NetworkPreferences"}},toggleSingleNetwork:{defaultValue:null,description:"",name:"toggleSingleNetwork",required:!0,type:{name:"(chainId: string, value: boolean) => void"}},chainId:{defaultValue:null,description:"",name:"chainId",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/app/incoming-trasaction-toggle/network-toggle.tsx#networktoggle"]={docgenInfo:networktoggle.__docgenInfo,name:"networktoggle",path:"ui/components/app/incoming-trasaction-toggle/network-toggle.tsx#networktoggle"})}catch(__react_docgen_typescript_loader_error){}}}]);