/*! For license information please see components-component-library-button-primary-button-primary-stories.452d738d.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[6644],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./ui/components/component-library/button-primary/button-primary.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,DefaultStory:()=>DefaultStory,SizeStory:()=>SizeStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>button_primary_stories});var react=__webpack_require__("./node_modules/react/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),button_primary=__webpack_require__("./ui/components/component-library/button-primary/button-primary.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",ul:"ul",li:"li",pre:"pre"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"buttonprimary",children:"ButtonPrimary"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonPrimary"})," is an extension of ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonBase"})," to support primary styles."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-buttonprimary--default-story"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:button_primary.D}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"size"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonPrimarySize"})," enum from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/components/component-library"})," to change the size of ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonPrimary"}),". Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonPrimarySize.Md"})]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Possible sizes include:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"ButtonPrimarySize.Sm"})," 32px"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"ButtonPrimarySize.Md"})," 40px"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"ButtonPrimarySize.Lg"})," 48px"]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-buttonprimary--size-story"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { ButtonPrimary, ButtonPrimarySize } from '../../component-library';\n\n<ButtonPrimary size={ButtonPrimarySize.Sm} />\n<ButtonPrimary size={ButtonPrimarySize.Md} />\n<ButtonPrimary size={ButtonPrimarySize.Lg} />\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"danger",children:"Danger"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"danger"})," boolean prop to change the ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonPrimary"})," to danger color."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-buttonprimary--danger"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { ButtonPrimary } from '../../component-library';\n\n<ButtonPrimary>Normal</ButtonPrimary>\n<ButtonPrimary danger>Danger</ButtonPrimary>\n"})})]})}const README=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var _DefaultStory$paramet,_DefaultStory$paramet2,_SizeStory$parameters,_SizeStory$parameters2,_Danger$parameters,_Danger$parameters2,component_library_button_primary=__webpack_require__("./ui/components/component-library/button-primary/index.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const button_primary_stories={title:"Components/ComponentLibrary/ButtonPrimary",component:component_library_button_primary.D,parameters:{docs:{page:README}},argTypes:{as:{control:"select",options:["button","a"]},size:{control:"select",options:Object.values(component_library_button_primary.m)}},args:{children:"Button Primary"}},DefaultStory=args=>react.createElement(component_library_button_primary.D,args);DefaultStory.storyName="Default";const SizeStory=args=>react.createElement(component_library.xu,{display:design_system.sS.Flex,alignItems:design_system.g1.baseline,gap:1},react.createElement(component_library_button_primary.D,_extends({},args,{size:component_library_button_primary.m.Sm}),"Small Button"),react.createElement(component_library_button_primary.D,_extends({},args,{size:component_library_button_primary.m.Md}),"Medium (Default) Button"),react.createElement(component_library_button_primary.D,_extends({},args,{size:component_library_button_primary.m.Lg}),"Large Button"));SizeStory.storyName="Size";const Danger=args=>react.createElement(component_library.xu,{display:design_system.sS.Flex,gap:1},react.createElement(component_library_button_primary.D,args,"Normal"),react.createElement(component_library_button_primary.D,_extends({as:"a"},args,{href:"#",danger:!0}),"Danger"));DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => <ButtonPrimary {...args} />",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source}}},SizeStory.parameters={...SizeStory.parameters,docs:{...null===(_SizeStory$parameters=SizeStory.parameters)||void 0===_SizeStory$parameters?void 0:_SizeStory$parameters.docs,source:{originalSource:"args => <Box display={Display.Flex} alignItems={AlignItems.baseline} gap={1}>\n    <ButtonPrimary {...args} size={ButtonPrimarySize.Sm}>\n      Small Button\n    </ButtonPrimary>\n    <ButtonPrimary {...args} size={ButtonPrimarySize.Md}>\n      Medium (Default) Button\n    </ButtonPrimary>\n    <ButtonPrimary {...args} size={ButtonPrimarySize.Lg}>\n      Large Button\n    </ButtonPrimary>\n  </Box>",...null===(_SizeStory$parameters2=SizeStory.parameters)||void 0===_SizeStory$parameters2||null===(_SizeStory$parameters2=_SizeStory$parameters2.docs)||void 0===_SizeStory$parameters2?void 0:_SizeStory$parameters2.source}}},Danger.parameters={...Danger.parameters,docs:{...null===(_Danger$parameters=Danger.parameters)||void 0===_Danger$parameters?void 0:_Danger$parameters.docs,source:{originalSource:'args => <Box display={Display.Flex} gap={1}>\n    <ButtonPrimary {...args}>Normal</ButtonPrimary>\n    {/* Test Anchor tag to match exactly as button */}\n    <ButtonPrimary as="a" {...args} href="#" danger>\n      Danger\n    </ButtonPrimary>\n  </Box>',...null===(_Danger$parameters2=Danger.parameters)||void 0===_Danger$parameters2||null===(_Danger$parameters2=_Danger$parameters2.docs)||void 0===_Danger$parameters2?void 0:_Danger$parameters2.source}}};const __namedExportsOrder=["DefaultStory","SizeStory","Danger"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);