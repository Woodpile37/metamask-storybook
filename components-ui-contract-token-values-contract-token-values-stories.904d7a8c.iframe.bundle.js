"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[4254],{"./ui/components/ui/contract-token-values/contract-token-values.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>contract_token_values_stories});var _DefaultStory$paramet,_DefaultStory$paramet2,react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),dist=__webpack_require__("./node_modules/@metamask/etherscan-link/dist/index.js"),box=__webpack_require__("./ui/components/ui/box/box.js"),tooltip=__webpack_require__("./ui/components/ui/tooltip/tooltip.js"),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js"),identicon=__webpack_require__("./ui/components/ui/identicon/index.js"),typography=__webpack_require__("./ui/components/ui/typography/typography.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),useCopyToClipboard=__webpack_require__("./ui/hooks/useCopyToClipboard.js"),component_library=__webpack_require__("./ui/components/component-library/index.ts");function ContractTokenValues({address,tokenName,chainId,rpcPrefs}){const t=(0,useI18nContext.C)(),[copied,handleCopy]=(0,useCopyToClipboard.m)();return react.createElement(box.ZP,{className:"contract-token-values",display:design_system.bA.FLEX,alignItems:design_system.g1.center,justifyContent:design_system.E0.center,gap:2},react.createElement(identicon.Z,{address,diameter:24}),react.createElement(typography.ZP,{variant:design_system.TypographyVariant.H2,fontWeight:design_system.m5.BOLD,color:design_system.d9.textAlternative,marginTop:0,marginBottom:0},tokenName),react.createElement(tooltip.Z,{position:"top",title:t(copied?"copiedExclamation":"copyToClipboard")},react.createElement(component_library.Ei,{iconName:copied?component_library.uH.CopySuccess:component_library.uH.Copy,color:design_system.Il.iconMuted,onClick:()=>handleCopy(address),ariaLabel:t(copied?"copiedExclamation":"copyToClipboard")})),react.createElement(tooltip.Z,{position:"top",title:t("openInBlockExplorer")},react.createElement(component_library.Ei,{display:design_system.bA.FLEX,iconName:component_library.uH.Export,color:design_system.Il.iconMuted,onClick:()=>{const blockExplorerTokenLink=(0,dist.getAccountLink)(address,chainId,{blockExplorerUrl:(null==rpcPrefs?void 0:rpcPrefs.blockExplorerUrl)??null},null);__webpack_require__.g.platform.openTab({url:blockExplorerTokenLink})},ariaLabel:t("openInBlockExplorer")})))}ContractTokenValues.propTypes={address:prop_types_default().string,tokenName:prop_types_default().string,chainId:prop_types_default().string,rpcPrefs:prop_types_default().object},ContractTokenValues.__docgenInfo={description:"",methods:[],displayName:"ContractTokenValues",props:{address:{description:"Address used for generating token image",type:{name:"string"},required:!1},tokenName:{description:"Displayed the token name currently tracked in state",type:{name:"string"},required:!1},chainId:{description:"Current network chainId",type:{name:"string"},required:!1},rpcPrefs:{description:"RPC prefs",type:{name:"object"},required:!1}}};const contract_token_values_stories={title:"Components/UI/ContractTokenValues",argTypes:{tokenName:{control:{type:"text"}},address:{control:{type:"text"}}},args:{tokenName:"DAI",address:"0x6B175474E89094C44Da98b954EedeAC495271d0F"}},DefaultStory=args=>react.createElement(ContractTokenValues,args);DefaultStory.storyName="Default",DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => <ContractTokenValues {...args} />",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source}}};const __namedExportsOrder=["DefaultStory"];DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"}},"./ui/components/ui/identicon/blockieIdenticon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_blockieIdenticon_component__WEBPACK_IMPORTED_MODULE_0__.Z});var _blockieIdenticon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/ui/identicon/blockieIdenticon/blockieIdenticon.component.js")},"./ui/components/ui/identicon/identicon.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Identicon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),lodash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/lodash.js"),_jazzicon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/ui/jazzicon/index.js"),_helpers_utils_util__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/helpers/utils/util.js"),_blockieIdenticon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/components/ui/identicon/blockieIdenticon/index.js");function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const getStyles=diameter=>({height:diameter,width:diameter,borderRadius:diameter/2});class Identicon extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(...args){super(...args),_defineProperty(this,"state",{imageLoadingError:!1})}renderImage(){const{className,diameter,alt,imageBorder,ipfsGateway}=this.props;let{image}=this.props;return Array.isArray(image)&&image.length&&(image=image[0]),"string"==typeof image&&image.toLowerCase().startsWith("ipfs://")&&(image=(0,_helpers_utils_util__WEBPACK_IMPORTED_MODULE_4__.MP)(image,ipfsGateway)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("identicon",className,{"identicon__image-border":imageBorder}),src:image,style:getStyles(diameter),alt,onError:()=>{this.setState({imageLoadingError:!0})}})}renderJazzicon(){const{address,className,diameter,alt,tokenList}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_jazzicon__WEBPACK_IMPORTED_MODULE_3__.Z,{address,diameter,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("identicon",className),style:getStyles(diameter),alt,tokenList})}renderBlockie(){const{address,className,diameter,alt}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("identicon",className),style:getStyles(diameter)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blockieIdenticon__WEBPACK_IMPORTED_MODULE_5__.Z,{address,diameter,alt}))}renderBlockieOrJazzIcon(){const{useBlockie}=this.props;return useBlockie?this.renderBlockie():this.renderJazzicon()}shouldComponentUpdate(nextProps,nextState){return!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual)(nextProps,this.props)||!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual)(nextState,this.state)}render(){const{address,image,addBorder,diameter,tokenList}=this.props,{imageLoadingError}=this.state,size=diameter+8;return imageLoadingError?this.renderBlockieOrJazzIcon():image?this.renderImage():address?null!==(_tokenList$address$to=tokenList[address.toLowerCase()])&&void 0!==_tokenList$address$to&&_tokenList$address$to.iconUrl?this.renderJazzicon():react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()({"identicon__address-wrapper":addBorder}),style:addBorder?getStyles(size):null},this.renderBlockieOrJazzIcon()):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:getStyles(diameter),className:"identicon__image-border"});var _tokenList$address$to}}_defineProperty(Identicon,"propTypes",{addBorder:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,address:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,diameter:prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,image:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,prop_types__WEBPACK_IMPORTED_MODULE_6___default().array]),useBlockie:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,alt:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,imageBorder:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,tokenList:prop_types__WEBPACK_IMPORTED_MODULE_6___default().object,ipfsGateway:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string}),_defineProperty(Identicon,"defaultProps",{addBorder:!1,address:void 0,className:void 0,diameter:46,image:void 0,useBlockie:!1,alt:"",tokenList:{}}),Identicon.__docgenInfo={description:"",methods:[{name:"renderImage",docblock:null,modifiers:[],params:[],returns:null},{name:"renderJazzicon",docblock:null,modifiers:[],params:[],returns:null},{name:"renderBlockie",docblock:null,modifiers:[],params:[],returns:null},{name:"renderBlockieOrJazzIcon",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Identicon",props:{addBorder:{defaultValue:{value:"false",computed:!1},description:"Adds blue border around the Identicon used for selected account.\nIncreases the width and height of the Identicon by 8px",type:{name:"bool"},required:!1},address:{defaultValue:{value:"undefined",computed:!0},description:"Address used for generating random image",type:{name:"string"},required:!1},className:{defaultValue:{value:"undefined",computed:!0},description:"Add custom css class",type:{name:"string"},required:!1},diameter:{defaultValue:{value:"46",computed:!1},description:"Sets the width and height of the inner img element\nIf addBorder is true will increase components height and width by 8px",type:{name:"number"},required:!1},image:{defaultValue:{value:"undefined",computed:!0},description:"Used as the image source of the Identicon",type:{name:"union",value:[{name:"string"},{name:"array"}]},required:!1},useBlockie:{defaultValue:{value:"false",computed:!1},description:"Use the blockie type random image generator",type:{name:"bool"},required:!1},alt:{defaultValue:{value:"''",computed:!1},description:"The alt text of the image",type:{name:"string"},required:!1},tokenList:{defaultValue:{value:"{}",computed:!1},description:"Add list of token in object",type:{name:"object"},required:!1},imageBorder:{description:"Check if show image border",type:{name:"bool"},required:!1},ipfsGateway:{description:"User preferred IPFS gateway",type:{name:"string"},required:!1}}}},"./ui/components/ui/identicon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>identicon_container});var es=__webpack_require__("./node_modules/react-redux/es/index.js"),selectors=__webpack_require__("./ui/selectors/index.js"),identicon_component=__webpack_require__("./ui/components/ui/identicon/identicon.component.js");const identicon_container=(0,es.$j)((state=>{const{metamask:{useBlockie,ipfsGateway}}=state;return{useBlockie,tokenList:(0,selectors.HJ)(state),ipfsGateway}}))(identicon_component.Z)},"./ui/components/ui/jazzicon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_jazzicon_component__WEBPACK_IMPORTED_MODULE_0__.Z});var _jazzicon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/ui/jazzicon/jazzicon.component.js")}}]);