/*! For license information please see components-component-library-avatar-favicon-avatar-favicon-stories.783c7972.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[2442],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./ui/components/component-library/avatar-favicon/avatar-favicon.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,SizeStory:()=>SizeStory,Src:()=>Src,__namedExportsOrder:()=>__namedExportsOrder,default:()=>avatar_favicon_stories});var react=__webpack_require__("./node_modules/react/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),box=__webpack_require__("./ui/components/ui/box/box.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),component_library=__webpack_require__("./ui/components/component-library/index.js"),avatar_favicon=__webpack_require__("./ui/components/component-library/avatar-favicon/avatar-favicon.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",a:"a",h3:"h3",ul:"ul",li:"li",pre:"pre"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"avatarfavicon",children:"AvatarFavicon"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarFavicon"})," is an image component that renders an icon that is provided in the form of a URL."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-avatarfavicon--default-story"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarFavicon"})," accepts all props below as well as all ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-ui-box--default-story#props",children:"Box"})," component props"]}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:avatar_favicon.z}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"AvatarFavicon"})," accepts all ",(0,jsx_runtime.jsx)(_components.a,{href:"components-componentlibrary-avatarbase--default-story",children:"AvatarBase"}),")\ncomponent props"]}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:component_library.pE}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"size"})," prop to set the size of the ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarFavicon"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Optional: ",(0,jsx_runtime.jsx)(_components.code,{children:"AVATAR_FAVICON_SIZES"})," from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/components/component-library"})," object can be used instead of ",(0,jsx_runtime.jsx)(_components.code,{children:"Size"})]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Possible sizes include:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Size.XS"})," 16px"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Size.SM"})," 24px"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Size.MD"})," 32px"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Size.LG"})," 40px"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Size.XL"})," 48px"]}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"Size.MD"})]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-avatarfavicon--size-story"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Size } from '../../../helpers/constants/design-system';\nimport { AvatarFavicon } from '../ui/component-library';\n\n<AvatarFavicon size={Size.XS} />\n<AvatarFavicon size={Size.SM} />\n<AvatarFavicon size={Size.MD} />\n<AvatarFavicon size={Size.LG} />\n<AvatarFavicon size={Size.XL} />\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"src",children:"Src"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"src"})," prop to set the image to be rendered of the ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarFavicon"}),"."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-avatarfavicon--src"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'import { AvatarFavicon } from \'../ui/component-library\';\n\n<AvatarFavicon src="https://uniswap.org/favicon.ico" />\n<AvatarFavicon src="https://1inch.exchange/assets/favicon/favicon-32x32.png" />\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"fallback-icon-props",children:"Fallback Icon Props"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["If there is no ",(0,jsx_runtime.jsx)(_components.code,{children:"src"})," then in that case an ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-icon--default-story",children:"icon"})," will be used as the fallback display and it can be customised via ",(0,jsx_runtime.jsx)(_components.code,{children:"fallbackIconProps"}),"."]})]})}const README=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var _DefaultStory$paramet,_DefaultStory$paramet2,_DefaultStory$paramet3,_SizeStory$parameters,_SizeStory$parameters2,_SizeStory$parameters3,_Src$parameters,_Src$parameters2,_Src$parameters2$docs,component_library_avatar_favicon=__webpack_require__("./ui/components/component-library/avatar-favicon/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const avatar_favicon_stories={title:"Components/ComponentLibrary/AvatarFavicon",component:component_library_avatar_favicon.z,parameters:{docs:{page:README}},argTypes:{size:{control:"select",options:Object.values(component_library_avatar_favicon.B)},src:{control:"text"},name:{control:"text"},borderColor:{options:Object.values(design_system.kf),control:"select"}},args:{src:"https://uniswap.org/favicon.ico",size:design_system.$u.MD,name:"Uniswap"}},DefaultStory=(args=>react.createElement(component_library_avatar_favicon.z,args)).bind({});DefaultStory.storyName="Default";const SizeStory=args=>react.createElement(box.ZP,{display:design_system.sS.Flex,alignItems:design_system.g1.baseline,gap:1},react.createElement(component_library_avatar_favicon.z,_extends({},args,{size:design_system.$u.XS})),react.createElement(component_library_avatar_favicon.z,_extends({},args,{size:design_system.$u.SM})),react.createElement(component_library_avatar_favicon.z,_extends({},args,{size:design_system.$u.MD})),react.createElement(component_library_avatar_favicon.z,_extends({},args,{size:design_system.$u.LG})),react.createElement(component_library_avatar_favicon.z,_extends({},args,{size:design_system.$u.XL})));SizeStory.storyName="Size";const Src=args=>react.createElement(box.ZP,{display:design_system.sS.Flex,alignItems:design_system.g1.flexStart,gap:1},react.createElement(component_library_avatar_favicon.z,_extends({},args,{src:"https://uniswap.org/favicon.ico"})),react.createElement(component_library_avatar_favicon.z,_extends({},args,{src:"https://1inch.exchange/assets/favicon/favicon-32x32.png"})));DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => {\n  return <AvatarFavicon {...args} />;\n}",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet3=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet3?void 0:_DefaultStory$paramet3.source}}},SizeStory.parameters={...SizeStory.parameters,docs:{...null===(_SizeStory$parameters=SizeStory.parameters)||void 0===_SizeStory$parameters?void 0:_SizeStory$parameters.docs,source:{originalSource:"args => <Box display={Display.Flex} alignItems={AlignItems.baseline} gap={1}>\n    <AvatarFavicon {...args} size={Size.XS} />\n    <AvatarFavicon {...args} size={Size.SM} />\n    <AvatarFavicon {...args} size={Size.MD} />\n    <AvatarFavicon {...args} size={Size.LG} />\n    <AvatarFavicon {...args} size={Size.XL} />\n  </Box>",...null===(_SizeStory$parameters2=SizeStory.parameters)||void 0===_SizeStory$parameters2||null===(_SizeStory$parameters3=_SizeStory$parameters2.docs)||void 0===_SizeStory$parameters3?void 0:_SizeStory$parameters3.source}}},Src.parameters={...Src.parameters,docs:{...null===(_Src$parameters=Src.parameters)||void 0===_Src$parameters?void 0:_Src$parameters.docs,source:{originalSource:'args => <Box display={Display.Flex} alignItems={AlignItems.flexStart} gap={1}>\n    <AvatarFavicon {...args} src="https://uniswap.org/favicon.ico" />\n    <AvatarFavicon {...args} src="https://1inch.exchange/assets/favicon/favicon-32x32.png" />\n  </Box>',...null===(_Src$parameters2=Src.parameters)||void 0===_Src$parameters2||null===(_Src$parameters2$docs=_Src$parameters2.docs)||void 0===_Src$parameters2$docs?void 0:_Src$parameters2$docs.source}}};const __namedExportsOrder=["DefaultStory","SizeStory","Src"];SizeStory.__docgenInfo={description:"",methods:[],displayName:"SizeStory"},Src.__docgenInfo={description:"",methods:[],displayName:"Src"}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);