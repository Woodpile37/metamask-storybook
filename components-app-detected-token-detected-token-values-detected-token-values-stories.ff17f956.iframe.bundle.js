"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[2518],{"./ui/components/app/detected-token/detected-token-values/detected-token-values.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DefaultStory$paramet,_DefaultStory$paramet2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_detected_token_values__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/app/detected-token/detected-token-values/detected-token-values.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/App/DetectedToken/DetectedTokenValues",argTypes:{token:{control:"object"},handleTokenSelection:{control:"func"},tokensListDetected:{control:"array"}},args:{token:{address:"0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",symbol:"SNX",decimals:18,iconUrl:"https://assets.coingecko.com/coins/images/3406/large/SNX.png",aggregators:["aave","bancor","cmc","cryptocom","coinGecko","oneInch","paraswap","pmm","synthetix","zapper","zerion","zeroEx"]},tokensListDetected:{"0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f":{token:{name:"Synthetix Network",address:"0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",symbol:"SNX",decimals:18,iconUrl:"https://assets.coingecko.com/coins/images/3406/large/SNX.png",aggregators:["aave","bancor","cmc","cryptocom","coinGecko","oneInch","paraswap","pmm","synthetix","zapper","zerion","zeroEx"]},selected:!0},"0x514910771af9ca656af840dff83e8264ecf986ca":{token:{name:"ChainLink Token",address:"0x514910771af9ca656af840dff83e8264ecf986ca",symbol:"LINK",decimals:18,iconUrl:"https://crypto.com/price/coin-data/icon/LINK/color_icon.png",aggregators:["coinGecko","oneInch","paraswap","zapper","zerion"]},selected:!0}}}},DefaultStory=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_detected_token_values__WEBPACK_IMPORTED_MODULE_1__.Z,args)).bind({});DefaultStory.storyName="Default",DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => {\n  return <DetectedTokenValues {...args} />;\n}",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source}}};const __namedExportsOrder=["DefaultStory"]},"./ui/components/app/detected-token/detected-token-values/detected-token-values.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-redux/es/index.js"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_hooks_useTokenTracker__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/hooks/useTokenTracker.js"),_hooks_useTokenFiatAmount__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/hooks/useTokenFiatAmount.js"),_selectors__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/selectors/index.js"),_component_library__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ui/components/component-library/index.ts");const DetectedTokenValues=({token,handleTokenSelection,tokensListDetected})=>{var _tokensWithBalances$;const[tokenSelection,setTokenSelection]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>{var _tokensListDetected$t;return null===(_tokensListDetected$t=tokensListDetected[token.address])||void 0===_tokensListDetected$t?void 0:_tokensListDetected$t.selected})),{tokensWithBalances}=(0,_hooks_useTokenTracker__WEBPACK_IMPORTED_MODULE_3__.S)({tokens:[token]}),balanceString=null===(_tokensWithBalances$=tokensWithBalances[0])||void 0===_tokensWithBalances$?void 0:_tokensWithBalances$.string,formattedFiatBalance=(0,_hooks_useTokenFiatAmount__WEBPACK_IMPORTED_MODULE_4__.Q)(token.address,balanceString,token.symbol),useCurrencyRateCheck=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.v9)(_selectors__WEBPACK_IMPORTED_MODULE_5__.nsI);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{var _tokensListDetected$t2;setTokenSelection(null===(_tokensListDetected$t2=tokensListDetected[token.address])||void 0===_tokensListDetected$t2?void 0:_tokensListDetected$t2.selected)}),[tokensListDetected,token.address,tokenSelection,setTokenSelection]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_6__.xu,{display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.sS.InlineFlex,className:"detected-token-values"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_6__.xu,{marginBottom:1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_6__.xv,{variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.rK.bodyLgMedium,as:"h4"},`${balanceString||"0"} ${token.symbol}`),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_6__.xv,{variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.rK.bodySm,as:"h6",color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.d9.textAlternative},useCurrencyRateCheck?formattedFiatBalance||"$0":formattedFiatBalance)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_6__.xu,{className:"detected-token-values__checkbox"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_6__.XZ,{isChecked:tokenSelection,onClick:()=>{setTokenSelection(!tokenSelection),handleTokenSelection(token)}})))};DetectedTokenValues.propTypes={token:prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({address:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string.isRequired,decimals:prop_types__WEBPACK_IMPORTED_MODULE_7___default().number,symbol:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,iconUrl:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,aggregators:prop_types__WEBPACK_IMPORTED_MODULE_7___default().array}),handleTokenSelection:prop_types__WEBPACK_IMPORTED_MODULE_7___default().func.isRequired,tokensListDetected:prop_types__WEBPACK_IMPORTED_MODULE_7___default().object},DetectedTokenValues.__docgenInfo={description:"",methods:[],displayName:"DetectedTokenValues",props:{token:{description:"",type:{name:"shape",value:{address:{name:"string",required:!0},decimals:{name:"number",required:!1},symbol:{name:"string",required:!1},iconUrl:{name:"string",required:!1},aggregators:{name:"array",required:!1}}},required:!1},handleTokenSelection:{description:"",type:{name:"func"},required:!0},tokensListDetected:{description:"",type:{name:"object"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=DetectedTokenValues}}]);