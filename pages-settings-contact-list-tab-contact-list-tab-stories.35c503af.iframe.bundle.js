"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[4865],{"./ui/pages/settings/contact-list-tab/contact-list-tab.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DefaultStory$paramet,_DefaultStory$paramet2,_DefaultStory$paramet3,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-redux/es/index.js"),_store_store__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/store/store.ts"),_storybook_test_data__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/test-data.js"),_contact_list_tab_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/pages/settings/contact-list-tab/contact-list-tab.component.js");const store=(0,_store_store__WEBPACK_IMPORTED_MODULE_2__.Z)(_storybook_test_data__WEBPACK_IMPORTED_MODULE_3__.default),__WEBPACK_DEFAULT_EXPORT__={title:"Pages/Settings/ContactListTab",decorators:[story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.zt,{store},story())],argsTypes:{addressBook:{control:"object"},hideAddressBook:{control:"boolean"},selectedAddress:{control:"select"},history:{action:"history"}}},{metamask}=store.getState(),{addresses}=metamask,DefaultStory=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:300}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_contact_list_tab_component__WEBPACK_IMPORTED_MODULE_4__.Z,args));DefaultStory.storyName="Default",DefaultStory.args={addressBook:addresses,hideAddressBook:!1,selectedAddress:addresses.map((({address})=>address))},DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => {\n  return <div style={{\n    width: 300\n  }}>\n      <ContactListTab {...args} />\n    </div>;\n}",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet3=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet3?void 0:_DefaultStory$paramet3.source}}};const __namedExportsOrder=["DefaultStory"];DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"}},"./ui/components/ui/identicon/blockieIdenticon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_blockieIdenticon_component__WEBPACK_IMPORTED_MODULE_0__.Z});var _blockieIdenticon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/ui/identicon/blockieIdenticon/blockieIdenticon.component.js")},"./ui/components/ui/identicon/identicon.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Identicon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),lodash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/lodash.js"),_jazzicon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/ui/jazzicon/index.js"),_helpers_utils_util__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/helpers/utils/util.js"),_blockieIdenticon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/components/ui/identicon/blockieIdenticon/index.js");function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const getStyles=diameter=>({height:diameter,width:diameter,borderRadius:diameter/2});class Identicon extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(...args){super(...args),_defineProperty(this,"state",{imageLoadingError:!1})}renderImage(){const{className,diameter,alt,imageBorder,ipfsGateway}=this.props;let{image}=this.props;return Array.isArray(image)&&image.length&&(image=image[0]),"string"==typeof image&&image.toLowerCase().startsWith("ipfs://")&&(image=(0,_helpers_utils_util__WEBPACK_IMPORTED_MODULE_4__.MP)(image,ipfsGateway)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("identicon",className,{"identicon__image-border":imageBorder}),src:image,style:getStyles(diameter),alt,onError:()=>{this.setState({imageLoadingError:!0})}})}renderJazzicon(){const{address,className,diameter,alt,tokenList}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_jazzicon__WEBPACK_IMPORTED_MODULE_3__.Z,{address,diameter,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("identicon",className),style:getStyles(diameter),alt,tokenList})}renderBlockie(){const{address,className,diameter,alt}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("identicon",className),style:getStyles(diameter)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blockieIdenticon__WEBPACK_IMPORTED_MODULE_5__.Z,{address,diameter,alt}))}renderBlockieOrJazzIcon(){const{useBlockie}=this.props;return useBlockie?this.renderBlockie():this.renderJazzicon()}shouldComponentUpdate(nextProps,nextState){return!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual)(nextProps,this.props)||!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual)(nextState,this.state)}render(){const{address,image,addBorder,diameter,tokenList}=this.props,{imageLoadingError}=this.state,size=diameter+8;return imageLoadingError?this.renderBlockieOrJazzIcon():image?this.renderImage():address?null!==(_tokenList$address$to=tokenList[address.toLowerCase()])&&void 0!==_tokenList$address$to&&_tokenList$address$to.iconUrl?this.renderJazzicon():react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()({"identicon__address-wrapper":addBorder}),style:addBorder?getStyles(size):null},this.renderBlockieOrJazzIcon()):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:getStyles(diameter),className:"identicon__image-border"});var _tokenList$address$to}}_defineProperty(Identicon,"propTypes",{addBorder:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,address:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,diameter:prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,image:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,prop_types__WEBPACK_IMPORTED_MODULE_6___default().array]),useBlockie:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,alt:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,imageBorder:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,tokenList:prop_types__WEBPACK_IMPORTED_MODULE_6___default().object,ipfsGateway:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string}),_defineProperty(Identicon,"defaultProps",{addBorder:!1,address:void 0,className:void 0,diameter:46,image:void 0,useBlockie:!1,alt:"",tokenList:{}}),Identicon.__docgenInfo={description:"",methods:[{name:"renderImage",docblock:null,modifiers:[],params:[],returns:null},{name:"renderJazzicon",docblock:null,modifiers:[],params:[],returns:null},{name:"renderBlockie",docblock:null,modifiers:[],params:[],returns:null},{name:"renderBlockieOrJazzIcon",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Identicon",props:{addBorder:{defaultValue:{value:"false",computed:!1},description:"Adds blue border around the Identicon used for selected account.\nIncreases the width and height of the Identicon by 8px",type:{name:"bool"},required:!1},address:{defaultValue:{value:"undefined",computed:!0},description:"Address used for generating random image",type:{name:"string"},required:!1},className:{defaultValue:{value:"undefined",computed:!0},description:"Add custom css class",type:{name:"string"},required:!1},diameter:{defaultValue:{value:"46",computed:!1},description:"Sets the width and height of the inner img element\nIf addBorder is true will increase components height and width by 8px",type:{name:"number"},required:!1},image:{defaultValue:{value:"undefined",computed:!0},description:"Used as the image source of the Identicon",type:{name:"union",value:[{name:"string"},{name:"array"}]},required:!1},useBlockie:{defaultValue:{value:"false",computed:!1},description:"Use the blockie type random image generator",type:{name:"bool"},required:!1},alt:{defaultValue:{value:"''",computed:!1},description:"The alt text of the image",type:{name:"string"},required:!1},tokenList:{defaultValue:{value:"{}",computed:!1},description:"Add list of token in object",type:{name:"object"},required:!1},imageBorder:{description:"Check if show image border",type:{name:"bool"},required:!1},ipfsGateway:{description:"User preferred IPFS gateway",type:{name:"string"},required:!1}}}},"./ui/components/ui/identicon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>identicon_container});var es=__webpack_require__("./node_modules/react-redux/es/index.js"),selectors=__webpack_require__("./ui/selectors/index.js"),identicon_component=__webpack_require__("./ui/components/ui/identicon/identicon.component.js");const identicon_container=(0,es.$j)((state=>{const{metamask:{useBlockie,ipfsGateway}}=state;return{useBlockie,tokenList:(0,selectors.HJ)(state),ipfsGateway}}))(identicon_component.Z)},"./ui/components/ui/jazzicon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_jazzicon_component__WEBPACK_IMPORTED_MODULE_0__.Z});var _jazzicon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/ui/jazzicon/jazzicon.component.js")},"./ui/helpers/utils/settings-search.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Oc:()=>getNumberOfSettingsInSection,Pe:()=>getSettingsRoutes,n4:()=>handleSettingsRefs,RI:()=>highlightSearchedText});var component_library=__webpack_require__("./ui/components/component-library/index.js"),routes=__webpack_require__("./ui/helpers/constants/routes.ts");const SETTINGS_CONSTANTS=[{tabMessage:t=>t("general"),sectionMessage:t=>t("currencyConversion"),descriptionMessage:t=>t("currencyConversion"),route:`${routes.Mv}#currency-conversion`,iconName:component_library.uH.Setting},{tabMessage:t=>t("general"),sectionMessage:t=>t("primaryCurrencySetting"),descriptionMessage:t=>t("primaryCurrencySettingDescription"),route:`${routes.Mv}#primary-currency`,iconName:component_library.uH.Setting},{tabMessage:t=>t("general"),sectionMessage:t=>t("currentLanguage"),descriptionMessage:t=>t("currentLanguage"),route:`${routes.Mv}#current-language`,iconName:component_library.uH.Setting},{tabMessage:t=>t("general"),sectionMessage:t=>t("theme"),descriptionMessage:t=>t("themeDescription"),route:`${routes.Mv}#theme`,icon:"fa fa-flask"},{tabMessage:t=>t("general"),sectionMessage:t=>t("accountIdenticon"),descriptionMessage:t=>t("accountIdenticon"),route:`${routes.Mv}#account-identicon`,iconName:component_library.uH.Setting},{tabMessage:t=>t("general"),sectionMessage:t=>t("hideZeroBalanceTokens"),descriptionMessage:t=>t("hideZeroBalanceTokens"),route:`${routes.Mv}#zero-balancetokens`,iconName:component_library.uH.Setting},{tabMessage:t=>t("advanced"),sectionMessage:t=>t("stateLogs"),descriptionMessage:t=>t("stateLogsDescription"),route:`${routes.Ky}#state-logs`,icon:"fas fa-sliders-h"},{tabMessage:t=>t("advanced"),sectionMessage:t=>t("clearActivity"),descriptionMessage:t=>t("clearActivityDescription"),route:`${routes.Ky}#clear-activity`,icon:"fas fa-sliders-h"},{tabMessage:t=>t("advanced"),sectionMessage:t=>t("showHexData"),descriptionMessage:t=>t("showHexDataDescription"),route:`${routes.Ky}#show-hexdata`,icon:"fas fa-sliders-h"},{tabMessage:t=>t("advanced"),sectionMessage:t=>t("showFiatConversionInTestnets"),descriptionMessage:t=>t("showFiatConversionInTestnetsDescription"),route:`${routes.Ky}#conversion-testnetworks`,icon:"fas fa-sliders-h"},{tabMessage:t=>t("advanced"),sectionMessage:t=>t("showTestnetNetworks"),descriptionMessage:t=>t("showTestnetNetworksDescription"),route:`${routes.Ky}#show-testnets`,icon:"fas fa-sliders-h"},{tabMessage:t=>t("advanced"),sectionMessage:t=>t("nonceField"),descriptionMessage:t=>t("nonceFieldDescription"),route:`${routes.Ky}#customize-nonce`,icon:"fas fa-sliders-h"},{tabMessage:t=>t("advanced"),sectionMessage:t=>t("autoLockTimeLimit"),descriptionMessage:t=>t("autoLockTimeLimitDescription"),route:`${routes.Ky}#autolock-timer`,icon:"fas fa-sliders-h"},{tabMessage:t=>t("advanced"),sectionMessage:t=>t("preferredLedgerConnectionType"),descriptionMessage:t=>t("preferredLedgerConnectionType"),route:`${routes.Ky}#ledger-connection`,icon:"fas fa-sliders-h"},{tabMessage:t=>t("advanced"),sectionMessage:t=>t("dismissReminderField"),descriptionMessage:t=>t("dismissReminderDescriptionField"),route:`${routes.Ky}#dimiss-secretrecovery`,icon:"fas fa-sliders-h"},{tabMessage:t=>t("advanced"),sectionMessage:t=>t("toggleEthSignField"),descriptionMessage:t=>t("toggleEthSignDescriptionField"),route:`${routes.Ky}#toggle-ethsign`,icon:"fas fa-sliders-h"},{tabMessage:t=>t("contacts"),sectionMessage:t=>t("contacts"),descriptionMessage:t=>t("contacts"),route:routes.Ip,iconName:component_library.uH.Book},{tabMessage:t=>t("snaps"),sectionMessage:t=>t("snaps"),descriptionMessage:t=>t("snaps"),route:routes.jt,iconName:component_library.uH.Snaps},{tabMessage:t=>t("securityAndPrivacy"),sectionMessage:t=>t("revealSeedWords"),descriptionMessage:t=>t("revealSeedWords"),route:`${routes.AX}#reveal-secretrecovery`,icon:"fa fa-lock"},{tabMessage:t=>t("securityAndPrivacy"),sectionMessage:t=>t("showIncomingTransactions"),descriptionMessage:t=>t("showIncomingTransactionsDescription"),route:`${routes.AX}#incoming-transaction`,icon:"fa fa-lock"},{tabMessage:t=>t("securityAndPrivacy"),sectionMessage:t=>t("usePhishingDetection"),descriptionMessage:t=>t("usePhishingDetectionDescription"),route:`${routes.AX}#phishing-detection`,icon:"fa fa-lock"},{tabMessage:t=>t("securityAndPrivacy"),sectionMessage:t=>t("participateInMetaMetrics"),descriptionMessage:t=>t("participateInMetaMetricsDescription"),route:`${routes.AX}#metrametrics`,icon:"fa fa-lock"},{tabMessage:t=>t("securityAndPrivacy"),sectionMessage:t=>t("chooseYourNetwork"),descriptionMessage:t=>t("chooseYourNetworkDescription"),route:`${routes.AX}#-chose-your-network`,icon:"fa fa-lock"},{tabMessage:t=>t("securityAndPrivacy"),sectionMessage:t=>t("addCustomIPFSGateway"),descriptionMessage:t=>t("addCustomIPFSGatewayDescription"),route:`${routes.AX}#-add-custom-ipfs-gateway`,icon:"fa fa-lock"},{tabMessage:t=>t("securityAndPrivacy"),sectionMessage:t=>t("autoDetectTokens"),descriptionMessage:t=>t("autoDetectTokensDescription"),route:`${routes.AX}#-auto-detect-tokens`,icon:"fa fa-lock"},{tabMessage:t=>t("securityAndPrivacy"),sectionMessage:t=>t("useMultiAccountBalanceChecker"),descriptionMessage:t=>t("useMultiAccountBalanceCheckerDescription"),route:`${routes.AX}#-use-milti-account-balance-checker`,icon:"fa fa-lock"},{tabMessage:t=>t("securityAndPrivacy"),sectionMessage:t=>t("currencyRateCheckToggle"),descriptionMessage:t=>t("currencyRateCheckToggleDescription"),route:`${routes.AX}#price-checker`,icon:"fa fa-lock"},{tabMessage:t=>t("alerts"),sectionMessage:t=>t("alertSettingsUnconnectedAccount"),descriptionMessage:t=>t("alertSettingsUnconnectedAccount"),route:`${routes.Mu}#unconnected-account`,iconName:component_library.uH.Notification},{tabMessage:t=>t("alerts"),sectionMessage:t=>t("alertSettingsWeb3ShimUsage"),descriptionMessage:t=>t("alertSettingsWeb3ShimUsage"),route:`${routes.Mu}#web3-shimusage`,icon:"fa fa-bell"},{tabMessage:t=>t("networks"),sectionMessage:t=>t("mainnet"),descriptionMessage:t=>t("mainnet"),route:`${routes.Mx}#networks-mainnet`,icon:"fa fa-plug"},{tabMessage:t=>t("networks"),sectionMessage:t=>t("lineaMainnet"),descriptionMessage:t=>t("lineaMainnet"),route:`${routes.Mx}#networks-linea-mainnet`,icon:"fa fa-plug"},{tabMessage:t=>t("networks"),sectionMessage:t=>t("goerli"),descriptionMessage:t=>t("goerli"),route:`${routes.Mx}#networks-goerli`,icon:"fa fa-plug"},{tabMessage:t=>t("networks"),sectionMessage:t=>t("sepolia"),descriptionMessage:t=>t("sepolia"),route:`${routes.Mx}#networks-sepolia`,icon:"fa fa-plug"},{tabMessage:t=>t("networks"),sectionMessage:t=>t("lineaGoerli"),descriptionMessage:t=>t("lineaGoerli"),route:`${routes.Mx}#networks-linea-goerli`,icon:"fa fa-plug"},{tabMessage:t=>t("networks"),sectionMessage:t=>t("localhost"),descriptionMessage:t=>t("localhost"),route:`${routes.Mx}#networks-localhost`,icon:"fa fa-plug"},{tabMessage:t=>t("about"),sectionMessage:t=>t("metamaskVersion"),descriptionMessage:t=>t("builtAroundTheWorld"),route:`${routes.oT}#version`,iconName:component_library.uH.Info},{tabMessage:t=>t("about"),sectionMessage:t=>t("links"),descriptionMessage:t=>t("links"),route:`${routes.oT}#links`,iconName:component_library.uH.Info},{tabMessage:t=>t("about"),sectionMessage:t=>t("privacyMsg"),descriptionMessage:t=>t("privacyMsg"),route:`${routes.oT}#privacy-policy`,iconName:component_library.uH.Info},{tabMessage:t=>t("about"),sectionMessage:t=>t("terms"),descriptionMessage:t=>t("terms"),route:`${routes.oT}#terms`,iconName:component_library.uH.Info},{tabMessage:t=>t("about"),sectionMessage:t=>t("attributions"),descriptionMessage:t=>t("attributions"),route:`${routes.oT}#attributions`,iconName:component_library.uH.Info},{tabMessage:t=>t("about"),sectionMessage:t=>t("supportCenter"),descriptionMessage:t=>t("supportCenter"),route:`${routes.oT}#supportcenter`,iconName:component_library.uH.Info},{tabMessage:t=>t("about"),sectionMessage:t=>t("visitWebSite"),descriptionMessage:t=>t("visitWebSite"),route:`${routes.oT}#visitwebsite`,iconName:component_library.uH.Info},{tabMessage:t=>t("about"),sectionMessage:t=>t("contactUs"),descriptionMessage:t=>t("contactUs"),route:`${routes.oT}#contactus`,iconName:component_library.uH.Info},{tabMessage:t=>t("about"),sectionMessage:t=>t("betaTerms"),descriptionMessage:t=>t("betaTerms"),route:`${routes.oT}#beta-terms`,iconName:component_library.uH.Info},{tabMessage:t=>t("experimental"),sectionMessage:t=>t("enableOpenSeaAPI"),descriptionMessage:t=>t("enableOpenSeaAPIDescription"),route:`${routes.$W}#opensea-api`,icon:"fa fa-flask"},{tabMessage:t=>t("experimental"),sectionMessage:t=>t("useNftDetection"),descriptionMessage:t=>t("useNftDetectionDescription"),route:`${routes.$W}#autodetect-nfts`,icon:"fa fa-flask"},{tabMessage:t=>t("advanced"),sectionMessage:t=>t("backupUserData"),descriptionMessage:t=>t("backupUserDataDescription"),route:`${routes.Ky}#backup-userdata`,icon:"fas fa-download"},{tabMessage:t=>t("advanced"),sectionMessage:t=>t("restoreUserData"),descriptionMessage:t=>t("restoreUserDataDescription"),route:`${routes.Ky}#restore-userdata`,icon:"fas fa-upload"},{tabMessage:t=>t("experimental"),sectionMessage:t=>t("transactionSecurityCheck"),descriptionMessage:t=>t("transactionSecurityCheckDescription"),route:`${routes.$W}#transaction-security-check`,icon:"fa fa-flask"}];var process=__webpack_require__("./node_modules/process/browser.js");let settingsRoutes;function getSettingsRoutes(){return settingsRoutes||(settingsRoutes=SETTINGS_CONSTANTS.filter((routeObject=>!routeObject.featureFlag||process.env[routeObject.featureFlag])),settingsRoutes)}function getFilteredSettingsRoutes(t,tabMessage){return getSettingsRoutes().filter((routeObject=>routeObject.tabMessage(t)===tabMessage))}function getNumberOfSettingsInSection(t,tabMessage){return getFilteredSettingsRoutes(t,tabMessage).length}function handleSettingsRefs(t,tabMessage,settingsRefs){const settingsSearchJsonFiltered=getFilteredSettingsRoutes(t,tabMessage),settingsRefsIndex=settingsSearchJsonFiltered.findIndex((routeObject=>routeObject.route.substring(1)===window.location.hash.substring(1)));if(-1===settingsRefsIndex)return;const settingsRef=1===settingsSearchJsonFiltered.length?settingsRefs:settingsRefs[settingsRefsIndex];if(null!=settingsRef&&settingsRef.current){settingsRef.current.scrollIntoView({behavior:"smooth"}),settingsRef.current.focus();const historySettingsUrl=window.location.hash.split("#")[1];window.location.hash=historySettingsUrl}}function colorText(menuElement,regex){if(null!==menuElement){let elemText=menuElement.innerHTML;elemText=elemText.replace("&amp;","&"),elemText=elemText.replace(/(<span style="background:#ffd33d">|<\/span>)/gim,""),menuElement.innerHTML=elemText.replace(regex,'<span style="background:#ffd33d">$&</span>')}}function highlightSearchedText(){const searchElem=document.getElementById("search-settings"),searchRegex=new RegExp(searchElem.value,"gi");[...document.querySelectorAll(".settings-page__header__search__list__item")].forEach((element=>{const menuTabElement=element.querySelector(".settings-page__header__search__list__item__tab"),menuSectionElement=element.querySelector(".settings-page__header__search__list__item__section");colorText(menuTabElement,searchRegex),colorText(menuSectionElement,searchRegex)}))}}}]);