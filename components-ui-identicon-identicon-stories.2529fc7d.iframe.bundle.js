/*! For license information please see components-ui-identicon-identicon-stories.2529fc7d.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[7231],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./ui/components/ui/identicon/identicon.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,WithBlockie:()=>WithBlockie,WithBorder:()=>WithBorder,WithImage:()=>WithImage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>identicon_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),identicon_component=__webpack_require__("./ui/components/ui/identicon/identicon.component.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"identicon",children:"Identicon"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"An identifier component that can be supplied an image or randomly generates one based on the account address."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-ui-identicon--default-story"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:identicon_component.Z}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-image",children:"With Image"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use with custom image"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-ui-identicon--with-image"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-blockie",children:"With Blockie"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-ui-identicon--with-blockie"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-border",children:"With Border"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-ui-identicon--with-border"})})]})}const README=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var _DefaultStory$paramet,_DefaultStory$paramet2,_DefaultStory$paramet3,_WithImage$parameters,_WithImage$parameters2,_WithImage$parameters3,_WithBlockie$paramete,_WithBlockie$paramete2,_WithBlockie$paramete3,_WithBorder$parameter,_WithBorder$parameter2,_WithBorder$parameter3;const identicon_stories={title:"Components/UI/Identicon",component:identicon_component.Z,parameters:{docs:{page:README}},argTypes:{addBorder:{control:"boolean"},address:{control:"text"},className:{control:"text"},diameter:{control:"number"},image:{control:"text"},useBlockie:{control:"boolean"},alt:{control:"text"},imageBorder:{control:"boolean"},useTokenDetection:{control:"boolean"},tokenList:{control:"object"}}},DefaultStory=args=>react.createElement(identicon_component.Z,args);DefaultStory.storyName="Default",DefaultStory.args={addBorder:!1,address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1",diameter:32,useBlockie:!1};const WithImage=args=>react.createElement(identicon_component.Z,args);WithImage.args={addBorder:!1,diameter:32,useBlockie:!1,image:"./images/eth_logo.png",alt:"Ethereum",imageBorder:!0};const WithBlockie=args=>react.createElement(identicon_component.Z,args);WithBlockie.args={addBorder:!1,address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1",diameter:32,useBlockie:!0};const WithBorder=args=>react.createElement(identicon_component.Z,args);WithBorder.args={addBorder:!0,address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1",diameter:32,useBlockie:!1},DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => <Identicon {...args} />",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet3=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet3?void 0:_DefaultStory$paramet3.source}}},WithImage.parameters={...WithImage.parameters,docs:{...null===(_WithImage$parameters=WithImage.parameters)||void 0===_WithImage$parameters?void 0:_WithImage$parameters.docs,source:{originalSource:"args => <Identicon {...args} />",...null===(_WithImage$parameters2=WithImage.parameters)||void 0===_WithImage$parameters2||null===(_WithImage$parameters3=_WithImage$parameters2.docs)||void 0===_WithImage$parameters3?void 0:_WithImage$parameters3.source}}},WithBlockie.parameters={...WithBlockie.parameters,docs:{...null===(_WithBlockie$paramete=WithBlockie.parameters)||void 0===_WithBlockie$paramete?void 0:_WithBlockie$paramete.docs,source:{originalSource:"args => <Identicon {...args} />",...null===(_WithBlockie$paramete2=WithBlockie.parameters)||void 0===_WithBlockie$paramete2||null===(_WithBlockie$paramete3=_WithBlockie$paramete2.docs)||void 0===_WithBlockie$paramete3?void 0:_WithBlockie$paramete3.source}}},WithBorder.parameters={...WithBorder.parameters,docs:{...null===(_WithBorder$parameter=WithBorder.parameters)||void 0===_WithBorder$parameter?void 0:_WithBorder$parameter.docs,source:{originalSource:"args => <Identicon {...args} />",...null===(_WithBorder$parameter2=WithBorder.parameters)||void 0===_WithBorder$parameter2||null===(_WithBorder$parameter3=_WithBorder$parameter2.docs)||void 0===_WithBorder$parameter3?void 0:_WithBorder$parameter3.source}}};const __namedExportsOrder=["DefaultStory","WithImage","WithBlockie","WithBorder"];DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"},WithImage.__docgenInfo={description:"",methods:[],displayName:"WithImage"},WithBlockie.__docgenInfo={description:"",methods:[],displayName:"WithBlockie"},WithBorder.__docgenInfo={description:"",methods:[],displayName:"WithBorder"}},"./ui/components/ui/identicon/blockieIdenticon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_blockieIdenticon_component__WEBPACK_IMPORTED_MODULE_0__.Z});var _blockieIdenticon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/ui/identicon/blockieIdenticon/blockieIdenticon.component.js")},"./ui/components/ui/identicon/identicon.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Identicon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),lodash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/lodash.js"),_jazzicon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/ui/jazzicon/index.js"),_helpers_utils_util__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/helpers/utils/util.js"),_blockieIdenticon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/components/ui/identicon/blockieIdenticon/index.js");function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const getStyles=diameter=>({height:diameter,width:diameter,borderRadius:diameter/2});class Identicon extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(...args){super(...args),_defineProperty(this,"state",{imageLoadingError:!1})}renderImage(){const{className,diameter,alt,imageBorder,ipfsGateway}=this.props;let{image}=this.props;return Array.isArray(image)&&image.length&&(image=image[0]),"string"==typeof image&&image.toLowerCase().startsWith("ipfs://")&&(image=(0,_helpers_utils_util__WEBPACK_IMPORTED_MODULE_4__.MP)(image,ipfsGateway)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("identicon",className,{"identicon__image-border":imageBorder}),src:image,style:getStyles(diameter),alt,onError:()=>{this.setState({imageLoadingError:!0})}})}renderJazzicon(){const{address,className,diameter,alt,tokenList}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_jazzicon__WEBPACK_IMPORTED_MODULE_3__.Z,{address,diameter,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("identicon",className),style:getStyles(diameter),alt,tokenList})}renderBlockie(){const{address,className,diameter,alt}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("identicon",className),style:getStyles(diameter)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blockieIdenticon__WEBPACK_IMPORTED_MODULE_5__.Z,{address,diameter,alt}))}renderBlockieOrJazzIcon(){const{useBlockie}=this.props;return useBlockie?this.renderBlockie():this.renderJazzicon()}shouldComponentUpdate(nextProps,nextState){return!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual)(nextProps,this.props)||!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual)(nextState,this.state)}render(){const{address,image,addBorder,diameter,tokenList}=this.props,{imageLoadingError}=this.state,size=diameter+8;return imageLoadingError?this.renderBlockieOrJazzIcon():image?this.renderImage():address?null!==(_tokenList$address$to=tokenList[address.toLowerCase()])&&void 0!==_tokenList$address$to&&_tokenList$address$to.iconUrl?this.renderJazzicon():react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()({"identicon__address-wrapper":addBorder}),style:addBorder?getStyles(size):null},this.renderBlockieOrJazzIcon()):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:getStyles(diameter),className:"identicon__image-border"});var _tokenList$address$to}}_defineProperty(Identicon,"propTypes",{addBorder:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,address:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,diameter:prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,image:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,prop_types__WEBPACK_IMPORTED_MODULE_6___default().array]),useBlockie:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,alt:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,imageBorder:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,tokenList:prop_types__WEBPACK_IMPORTED_MODULE_6___default().object,ipfsGateway:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string}),_defineProperty(Identicon,"defaultProps",{addBorder:!1,address:void 0,className:void 0,diameter:46,image:void 0,useBlockie:!1,alt:"",tokenList:{}}),Identicon.__docgenInfo={description:"",methods:[{name:"renderImage",docblock:null,modifiers:[],params:[],returns:null},{name:"renderJazzicon",docblock:null,modifiers:[],params:[],returns:null},{name:"renderBlockie",docblock:null,modifiers:[],params:[],returns:null},{name:"renderBlockieOrJazzIcon",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Identicon",props:{addBorder:{defaultValue:{value:"false",computed:!1},description:"Adds blue border around the Identicon used for selected account.\nIncreases the width and height of the Identicon by 8px",type:{name:"bool"},required:!1},address:{defaultValue:{value:"undefined",computed:!0},description:"Address used for generating random image",type:{name:"string"},required:!1},className:{defaultValue:{value:"undefined",computed:!0},description:"Add custom css class",type:{name:"string"},required:!1},diameter:{defaultValue:{value:"46",computed:!1},description:"Sets the width and height of the inner img element\nIf addBorder is true will increase components height and width by 8px",type:{name:"number"},required:!1},image:{defaultValue:{value:"undefined",computed:!0},description:"Used as the image source of the Identicon",type:{name:"union",value:[{name:"string"},{name:"array"}]},required:!1},useBlockie:{defaultValue:{value:"false",computed:!1},description:"Use the blockie type random image generator",type:{name:"bool"},required:!1},alt:{defaultValue:{value:"''",computed:!1},description:"The alt text of the image",type:{name:"string"},required:!1},tokenList:{defaultValue:{value:"{}",computed:!1},description:"Add list of token in object",type:{name:"object"},required:!1},imageBorder:{description:"Check if show image border",type:{name:"bool"},required:!1},ipfsGateway:{description:"User preferred IPFS gateway",type:{name:"string"},required:!1}}}},"./ui/components/ui/jazzicon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_jazzicon_component__WEBPACK_IMPORTED_MODULE_0__.Z});var _jazzicon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/ui/jazzicon/jazzicon.component.js")},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);