/*! For license information please see components-component-library-label-label-stories.4fd8c010.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[9196],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./ui/components/component-library/label/label.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Children:()=>Children,DefaultStory:()=>DefaultStory,HtmlFor:()=>HtmlFor,__namedExportsOrder:()=>__namedExportsOrder,default:()=>label_stories});var react=__webpack_require__("./node_modules/react/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),label=__webpack_require__("./ui/components/component-library/label/label.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre",ul:"ul",li:"li"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"label",children:"Label"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Label"})," is used to describe the purpose of a form field"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-label--default-story"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:label._}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Label"})," accepts all ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-text--default-story#props",children:"Text"})," component props"]}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:component_library.xv}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"children",children:"Children"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"children"})," of the label can be text or a react node"]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-label--children"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { DISPLAY, AlignItems, FLEX_DIRECTION, Size, IconColor } from '../../../helpers/constants/design-system';\nimport { Label, Icon, IconName, IconSize, TextField } from '../../component-library';\n\n<Label>Plain text</Label>\n<Label display={DISPLAY.FLEX} alignItems={AlignItems.flexStart}>\n  Text and icon\n      <Icon\n        color={IconColor.iconAlternative}\n        name={IconName.Info}\n        size={IconSize.Inherit}\n      />\n</Label>\n<Label\n      display={DISPLAY.INLINE_FLEX}\n      flexDirection={FLEX_DIRECTION.COLUMN}\n      alignItems={AlignItems.flexStart}\n>\n  Label that wraps an input\n  <TextField placeholder=\"Click label to focus\" />\n</Label>\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"html-for",children:"Html For"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"htmlFor"})," prop to allow the ",(0,jsx_runtime.jsx)(_components.code,{children:"Label"})," to focus on an input with the same id when clicked. The cursor will also change to a ",(0,jsx_runtime.jsx)(_components.code,{children:"pointer"})," when the ",(0,jsx_runtime.jsx)(_components.code,{children:"htmlFor"})," has a value."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-label--html-for"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'import { Label, TextField } from \'../../component-library\';\n\n<Label htmlFor="add-network">Add network</Label>\n<TextField id="add-network" placeholder="Enter network name" />\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"internal-resources",children:"Internal Resources"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/HKpPKij9V3TpsyMV1TpV7C/branch/7uyrueQIFQBLqo9uzkxclr/DS-Components?node-id=13879%3A38076&t=dBHjnJTMSVE8N2UP-1",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma component"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/aGW8sk6X6Jf9ac0MRMD4kX/TextField-Audit?node-id=282%3A22&t=ZgCGFwGOBmOwQR5c-1",target:"_blank",rel:"nofollow noopener noreferrer",children:"Insight report"})}),"\n"]})]})}const README=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var _DefaultStory$paramet,_DefaultStory$paramet2,_Children$parameters,_Children$parameters2,_HtmlFor$parameters,_HtmlFor$parameters2;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const label_stories={title:"Components/ComponentLibrary/Label",component:label._,parameters:{docs:{page:README}},argTypes:{htmlFor:{control:"text"},children:{control:"text"},className:{control:"text"}},args:{children:"Label"}},DefaultStory=(args=>react.createElement(label._,args)).bind({});DefaultStory.storyName="Default";const Children=args=>react.createElement(component_library.xu,{display:design_system.sS.InlineFlex,flexDirection:design_system.Qb.Column,gap:2},react.createElement(label._,args,"Plain text"),react.createElement(label._,_extends({},args,{display:design_system.sS.Flex,alignItems:design_system.g1.flexStart}),"Text and icon",react.createElement(component_library.JO,{color:design_system.EY.iconAlternative,name:component_library.uH.Info,size:component_library.Jh.Inherit})),react.createElement(label._,_extends({},args,{display:design_system.sS.InlineFlex,flexDirection:design_system.Qb.Column,alignItems:design_system.g1.flexStart}),"Label that wraps an input",react.createElement(component_library.nv,{placeholder:"Click label to focus"}))),HtmlFor=args=>{const[value,setValue]=(0,react.useState)("");return react.createElement(component_library.xu,{display:design_system.sS.InlineFlex,flexDirection:design_system.Qb.Column},react.createElement(label._,args),react.createElement(component_library.nv,{id:"add-network",value,onChange:e=>{setValue(e.target.value)},placeholder:"Enter network name"}))};HtmlFor.args={children:"Network name",htmlFor:"add-network"},DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => <Label {...args} />",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source}}},Children.parameters={...Children.parameters,docs:{...null===(_Children$parameters=Children.parameters)||void 0===_Children$parameters?void 0:_Children$parameters.docs,source:{originalSource:'args => <Box display={Display.InlineFlex} flexDirection={FlexDirection.Column} gap={2}>\n    <Label {...args}>Plain text</Label>\n    <Label {...args} display={Display.Flex} alignItems={AlignItems.flexStart}>\n      Text and icon\n      <Icon color={IconColor.iconAlternative} name={IconName.Info} size={IconSize.Inherit} />\n    </Label>\n    <Label {...args} display={Display.InlineFlex} flexDirection={FlexDirection.Column} alignItems={AlignItems.flexStart}>\n      Label that wraps an input\n      <TextField placeholder="Click label to focus" />\n    </Label>\n  </Box>',...null===(_Children$parameters2=Children.parameters)||void 0===_Children$parameters2||null===(_Children$parameters2=_Children$parameters2.docs)||void 0===_Children$parameters2?void 0:_Children$parameters2.source}}},HtmlFor.parameters={...HtmlFor.parameters,docs:{...null===(_HtmlFor$parameters=HtmlFor.parameters)||void 0===_HtmlFor$parameters?void 0:_HtmlFor$parameters.docs,source:{originalSource:'args => {\n  const [value, setValue] = useState(\'\');\n  const handleOnChange = e => {\n    setValue(e.target.value);\n  };\n  return <Box display={Display.InlineFlex} flexDirection={FlexDirection.Column}>\n      <Label {...args} />\n      <TextField id="add-network" value={value} onChange={handleOnChange} placeholder="Enter network name" />\n    </Box>;\n}',...null===(_HtmlFor$parameters2=HtmlFor.parameters)||void 0===_HtmlFor$parameters2||null===(_HtmlFor$parameters2=_HtmlFor$parameters2.docs)||void 0===_HtmlFor$parameters2?void 0:_HtmlFor$parameters2.source}}};const __namedExportsOrder=["DefaultStory","Children","HtmlFor"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);