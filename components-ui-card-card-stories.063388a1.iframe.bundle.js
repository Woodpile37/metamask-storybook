/*! For license information please see components-ui-card-card-stories.063388a1.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[1882],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./ui/components/ui/card/card.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>card_stories});var react=__webpack_require__("./node_modules/react/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),card=__webpack_require__("./ui/components/ui/card/index.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"card",children:"Card"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Cards are used to group related content or actions together."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-ui-card--default-story"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"Card"})," component extends the ",(0,jsx_runtime.jsx)(_components.code,{children:"Box"})," component. See the ",(0,jsx_runtime.jsx)(_components.code,{children:"Box"})," component for an extended list of props."]}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:card.Z}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The following describes the props and example usage for this component."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"padding-border-and-background-color",children:"Padding, Border and Background Color"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The Card component has a set of default props that should meet most card use cases. There is a strong recommendation to not overwrite these to ensure our cards stay consistent across the app."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"That being said all props can be overwritten if necessary."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { BackgroundColor, BorderColor, BorderRadius, BorderStyle } from '../../../helpers/constants/design-system';\n\n// To remove the border\n<Card border={false} />\n// All border related props of the Box component will work\n<Card borderColor={BorderColor.primary} />\n<Card borderRadius={BorderRadius.LG}>\n<Card borderStyle={BorderStyle.dashed}>\n\n// To remove or change padding\n<Card padding={0} />\n// All padding related props of the Box component will work\n<Card paddingTop={4} paddingBottom={4} paddingLeft={8} paddingRight={8} />\n\n// To change the background color\n<Card backgroundColor={BackgroundColor.backgroundAlternative} />\n"})})]})}const README=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var _DefaultStory$paramet,_DefaultStory$paramet2;const sizeOptions=[void 0,0,1,2,3,4,5,6,7,8,9,10,11,12],card_stories={title:"Components/UI/Card",component:card.Z,parameters:{docs:{page:README}},argTypes:{children:{control:"text"},border:{control:"boolean"},borderStyle:{control:{type:"select"},options:Object.values(design_system.N4)},borderWidth:{control:{type:"select"},options:[...sizeOptions]},borderColor:{control:{type:"select"},options:Object.values(design_system.kf)},backgroundColor:{control:{type:"select"},options:Object.values(design_system.lP)},width:{control:{type:"select"},options:Object.values(design_system.D8)},height:{control:{type:"select"},options:Object.values(design_system.D8)},textAlign:{control:{type:"select"},options:Object.values(design_system.PH)},margin:{control:{type:"select"},options:[...sizeOptions]},marginTop:{control:{type:"select"},options:[...sizeOptions]},marginRight:{control:{type:"select"},options:[...sizeOptions]},marginBottom:{control:{type:"select"},options:[...sizeOptions]},marginLeft:{control:{type:"select"},options:[...sizeOptions]},padding:{control:{type:"select"},options:[...sizeOptions]},paddingTop:{control:{type:"select"},options:[...sizeOptions]},paddingRight:{control:{type:"select"},options:[...sizeOptions]},paddingBottom:{control:{type:"select"},options:[...sizeOptions]},paddingLeft:{control:{type:"select"},options:[...sizeOptions]},display:{control:{type:"select"},options:Object.values(design_system.bA)},justifyContent:{control:{type:"select"},options:Object.values(design_system.E0)},alignItems:{control:{type:"select"},options:Object.values(design_system.g1)}},args:{children:"Card children"}},DefaultStory=args=>react.createElement(card.Z,args,args.children);DefaultStory.storyName="Default",DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => <Card {...args}>{args.children}</Card>",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source}}};const __namedExportsOrder=["DefaultStory"];DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"}},"./ui/components/ui/card/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>card});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),box=__webpack_require__("./ui/components/ui/box/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Card=({border=!0,backgroundColor=design_system.lP.backgroundDefault,children,...props})=>react.createElement(box.ZP,_extends({borderColor:border?design_system.kf.borderMuted:null,borderRadius:border?design_system.cM.MD:null,borderStyle:border?design_system.N4.solid:null,backgroundColor,padding:4},props),children);Card.propTypes={border:prop_types_default().bool,backgroundColor:prop_types_default().oneOf(Object.values(design_system.lP)),...box.ZP.propTypes},Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{border:{defaultValue:{value:"true",computed:!1},description:"Whether the Card has a border or not.\nDefaults to true",type:{name:"bool"},required:!1},backgroundColor:{defaultValue:{value:"BackgroundColor.backgroundDefault",computed:!0},description:"The background color of the card\nDefaults to Color.backgroundDefault",type:{name:"enum",computed:!0,value:"Object.values(BackgroundColor)"},required:!1}},composes:["../box"]};const card=Card},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);