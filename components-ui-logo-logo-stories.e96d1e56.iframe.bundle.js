/*! For license information please see components-ui-logo-logo-stories.e96d1e56.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[5193],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./ui/components/ui/logo/logo.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>logo_stories});var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),component_library=__webpack_require__("./ui/components/component-library/index.js"),card=__webpack_require__("./ui/components/ui/card/index.js"),box=__webpack_require__("./ui/components/ui/box/index.js"),logo_ledger=__webpack_require__("./ui/components/ui/logo/logo-ledger.js"),logo_qr_based=__webpack_require__("./ui/components/ui/logo/logo-qr-based.js"),logo_trezor=__webpack_require__("./ui/components/ui/logo/logo-trezor.js"),logo_lattice=__webpack_require__("./ui/components/ui/logo/logo-lattice.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"logo",children:"Logo"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Logo components that are theme compatible"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-ui-logo--default-story"})})]})}var _DefaultStory$paramet,_DefaultStory$paramet2,_DefaultStory$paramet3;const logo_stories={title:"Components/UI/Logo",parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{color:{control:"text"},size:{control:"text"},className:{control:"text"},ariaLabel:{control:"text"}}},LogoItem=({Component})=>react.createElement(card.Z,{display:"flex",flexDirection:"column",textAlign:"center",backgroundColor:design_system.lP.backgroundDefault},react.createElement(box.ZP,{marginBottom:2},Component),react.createElement(component_library.xv,null,`${Component.type.__docgenInfo.displayName}`));LogoItem.propTypes={Component:prop_types_default().node};const DefaultStory=args=>react.createElement("div",{style:{display:"grid",gridGap:"16px",gridTemplateColumns:"repeat(auto-fill, 176px)"}},react.createElement(LogoItem,{Component:react.createElement(logo_ledger.Z,args)}),react.createElement(LogoItem,{Component:react.createElement(logo_qr_based.Z,args)}),react.createElement(LogoItem,{Component:react.createElement(logo_trezor.Z,args)}),react.createElement(LogoItem,{Component:react.createElement(logo_lattice.Z,args)}));DefaultStory.args={},DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => <div style={{\n  display: 'grid',\n  gridGap: '16px',\n  gridTemplateColumns: 'repeat(auto-fill, 176px)'\n}}>\n    <LogoItem Component={<LogoLedger {...args} />} />\n    <LogoItem Component={<LogoQRBased {...args} />} />\n    <LogoItem Component={<LogoTrezor {...args} />} />\n    <LogoItem Component={<LogoLattice {...args} />} />\n  </div>",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet3=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet3?void 0:_DefaultStory$paramet3.source}}};const __namedExportsOrder=["DefaultStory"];DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"}},"./ui/components/ui/card/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>card});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),box=__webpack_require__("./ui/components/ui/box/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Card=({border=!0,backgroundColor=design_system.lP.backgroundDefault,children,...props})=>react.createElement(box.ZP,_extends({borderColor:border?design_system.kf.borderMuted:null,borderRadius:border?design_system.cM.MD:null,borderStyle:border?design_system.N4.solid:null,backgroundColor,padding:4},props),children);Card.propTypes={border:prop_types_default().bool,backgroundColor:prop_types_default().oneOf(Object.values(design_system.lP)),...box.ZP.propTypes},Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{border:{defaultValue:{value:"true",computed:!1},description:"Whether the Card has a border or not.\nDefaults to true",type:{name:"bool"},required:!1},backgroundColor:{defaultValue:{value:"BackgroundColor.backgroundDefault",computed:!0},description:"The background color of the card\nDefaults to Color.backgroundDefault",type:{name:"enum",computed:!0,value:"Object.values(BackgroundColor)"},required:!1}},composes:["../box"]};const card=Card},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);