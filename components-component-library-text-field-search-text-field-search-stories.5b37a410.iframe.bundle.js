/*! For license information please see components-component-library-text-field-search-text-field-search-stories.5b37a410.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[1547],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./ui/components/component-library/text-field-search/text-field-search.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ClearButtonOnClick:()=>ClearButtonOnClick,ClearButtonProps:()=>ClearButtonProps,DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>text_field_search_stories});var react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),text_field=__webpack_require__("./ui/components/component-library/text-field/index.ts"),text_field_search=__webpack_require__("./ui/components/component-library/text-field-search/text-field-search.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),component_library=__webpack_require__("./ui/components/component-library/index.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",strong:"strong",pre:"pre"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"textfieldsearch",children:"TextFieldSearch"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"TextFieldSearch"})," allows users to enter text to search"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-textfieldsearch--default-story"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"TextFieldSearch"})," accepts all props below as well as all ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-ui-box--default-story#props",children:"Box"})," component props"]}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:text_field_search.q}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"TextFieldSearch"})," accepts all ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-textfield--default-story#props",children:"TextField"}),"\ncomponent props"]}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:component_library.nv}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"clear-button-on-click",children:"Clear Button On Click"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"TextFieldSearch"})," displays a clear button when text is entered into the input. Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"clearButtonOnClick"})," prop to pass an ",(0,jsx_runtime.jsx)(_components.code,{children:"onClick"})," event handler to clear the value of the input. To hide the clear button, pass ",(0,jsx_runtime.jsx)(_components.code,{children:"false"})," to the ",(0,jsx_runtime.jsx)(_components.code,{children:"showClearButton"})," prop."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The clear button uses ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-buttonicon--default-story",children:"ButtonIcon"})," and accepts all props from that component."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["NOTE: The ",(0,jsx_runtime.jsx)(_components.code,{children:"showClearButton"})," only works with a controlled input."]})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-textfieldsearch--clear-button-on-click"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { TextFieldSearch } from '../../component-library';\n\nconst [value, setValue] = useState('show clear');\n\nconst handleOnChange = (e) => {\n  setValue(e.target.value);\n};\n\nconst handleOnClear = () => {\n  setValue('');\n};\n\n<TextFieldSearch\n  placeholder=\"Enter text to show clear\"\n  value={value}\n  onChange={handleOnChange}\n  clearButtonOnClick={handleOnClear}\n/>;\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"clear-button-props",children:"Clear Button Props"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"clearButtonProps"})," to access other props of the clear button."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-textfieldsearch--clear-button-props"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import React, { useState } from 'react';\nimport { Color, BorderRadius } from '../../../helpers/constants/design-system';\n\nimport { TextFieldSearch } from '../../component-library';\n\nconst [value, setValue] = useState('show clear');\n\nconst handleOnChange = (e) => {\n  setValue(e.target.value);\n};\n\nconst handleOnClear = () => {\n  setValue('');\n};\n\n<TextFieldSearch\n  value={value}\n  onChange={handleOnChange}\n  clearButtonOnClick={handleOnClear}\n  clearButtonProps={{\n    backgroundColor: Color.backgroundAlternative,\n    borderRadius: BorderRadius.XS,\n    'data-testid': 'clear-button',\n  }}\n/>;\n"})})]})}const README=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var _DefaultStory$paramet,_DefaultStory$paramet2,_ClearButtonOnClick$p,_ClearButtonOnClick$p2,_ClearButtonProps$par,_ClearButtonProps$par2;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const text_field_search_stories={title:"Components/ComponentLibrary/TextFieldSearch",component:text_field_search.q,parameters:{docs:{page:README}},argTypes:{value:{control:"text"},onChange:{action:"onChange"},clearButtonOnClick:{action:"clearButtonOnClick"},clearButtonProps:{control:"object"},autoComplete:{control:"boolean",table:{category:"text field base props"}},autoFocus:{control:"boolean",table:{category:"text field base props"}},className:{control:"text",table:{category:"text field base props"}},disabled:{control:"boolean",table:{category:"text field base props"}},error:{control:"boolean",table:{category:"text field base props"}},id:{control:"text",table:{category:"text field base props"}},inputProps:{control:"object",table:{category:"text field base props"}},startAccessory:{control:"text",table:{category:"text field base props"}},maxLength:{control:"number",table:{category:"text field base props"}},name:{control:"text",table:{category:"text field base props"}},onBlur:{action:"onBlur",table:{category:"text field base props"}},onClick:{action:"onClick",table:{category:"text field base props"}},onFocus:{action:"onFocus",table:{category:"text field base props"}},onKeyDown:{action:"onKeyDown",table:{category:"text field base props"}},onKeyUp:{action:"onKeyUp",table:{category:"text field base props"}},placeholder:{control:"text",table:{category:"text field base props"}},readOnly:{control:"boolean",table:{category:"text field base props"}},required:{control:"boolean",table:{category:"text field base props"}},endAccessory:{control:"text",table:{category:"text field base props"}},size:{control:"select",options:Object.values(text_field.J9),table:{category:"text field base props"}},type:{control:"select",options:Object.values(text_field.T3),table:{category:"text field base props"}},truncate:{control:"boolean",table:{category:"text field base props"}}},args:{placeholder:"Search",value:""}},Template=args=>{const[{value},updateArgs]=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)();return react.createElement(text_field_search.q,_extends({},args,{value,onChange:e=>{updateArgs({value:e.target.value})},clearButtonOnClick:()=>{updateArgs({value:""})}}))},DefaultStory=Template.bind({});DefaultStory.storyName="Default";const ClearButtonOnClick=Template.bind({});ClearButtonOnClick.args={value:"Text to clear"};const ClearButtonProps=Template.bind({});ClearButtonProps.args={value:"clear button props",size:design_system.$u.LG,clearButtonProps:{backgroundColor:design_system.Il.backgroundAlternative,borderRadius:design_system.cM.XS}},DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => {\n  const [{\n    value\n  }, updateArgs] = useArgs();\n  const handleOnChange = e => {\n    updateArgs({\n      value: e.target.value\n    });\n  };\n  const handleOnClear = () => {\n    updateArgs({\n      value: ''\n    });\n  };\n  return <TextFieldSearch {...args} value={value} onChange={handleOnChange} clearButtonOnClick={handleOnClear} />;\n}",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source}}},ClearButtonOnClick.parameters={...ClearButtonOnClick.parameters,docs:{...null===(_ClearButtonOnClick$p=ClearButtonOnClick.parameters)||void 0===_ClearButtonOnClick$p?void 0:_ClearButtonOnClick$p.docs,source:{originalSource:"args => {\n  const [{\n    value\n  }, updateArgs] = useArgs();\n  const handleOnChange = e => {\n    updateArgs({\n      value: e.target.value\n    });\n  };\n  const handleOnClear = () => {\n    updateArgs({\n      value: ''\n    });\n  };\n  return <TextFieldSearch {...args} value={value} onChange={handleOnChange} clearButtonOnClick={handleOnClear} />;\n}",...null===(_ClearButtonOnClick$p2=ClearButtonOnClick.parameters)||void 0===_ClearButtonOnClick$p2||null===(_ClearButtonOnClick$p2=_ClearButtonOnClick$p2.docs)||void 0===_ClearButtonOnClick$p2?void 0:_ClearButtonOnClick$p2.source}}},ClearButtonProps.parameters={...ClearButtonProps.parameters,docs:{...null===(_ClearButtonProps$par=ClearButtonProps.parameters)||void 0===_ClearButtonProps$par?void 0:_ClearButtonProps$par.docs,source:{originalSource:"args => {\n  const [{\n    value\n  }, updateArgs] = useArgs();\n  const handleOnChange = e => {\n    updateArgs({\n      value: e.target.value\n    });\n  };\n  const handleOnClear = () => {\n    updateArgs({\n      value: ''\n    });\n  };\n  return <TextFieldSearch {...args} value={value} onChange={handleOnChange} clearButtonOnClick={handleOnClear} />;\n}",...null===(_ClearButtonProps$par2=ClearButtonProps.parameters)||void 0===_ClearButtonProps$par2||null===(_ClearButtonProps$par2=_ClearButtonProps$par2.docs)||void 0===_ClearButtonProps$par2?void 0:_ClearButtonProps$par2.source}}};const __namedExportsOrder=["DefaultStory","ClearButtonOnClick","ClearButtonProps"];try{DefaultStory.displayName="DefaultStory",DefaultStory.__docgenInfo={description:"",displayName:"DefaultStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/text-field-search/text-field-search.stories.tsx#DefaultStory"]={docgenInfo:DefaultStory.__docgenInfo,name:"DefaultStory",path:"ui/components/component-library/text-field-search/text-field-search.stories.tsx#DefaultStory"})}catch(__react_docgen_typescript_loader_error){}try{ClearButtonOnClick.displayName="ClearButtonOnClick",ClearButtonOnClick.__docgenInfo={description:"",displayName:"ClearButtonOnClick",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/text-field-search/text-field-search.stories.tsx#ClearButtonOnClick"]={docgenInfo:ClearButtonOnClick.__docgenInfo,name:"ClearButtonOnClick",path:"ui/components/component-library/text-field-search/text-field-search.stories.tsx#ClearButtonOnClick"})}catch(__react_docgen_typescript_loader_error){}try{ClearButtonProps.displayName="ClearButtonProps",ClearButtonProps.__docgenInfo={description:"",displayName:"ClearButtonProps",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/text-field-search/text-field-search.stories.tsx#ClearButtonProps"]={docgenInfo:ClearButtonProps.__docgenInfo,name:"ClearButtonProps",path:"ui/components/component-library/text-field-search/text-field-search.stories.tsx#ClearButtonProps"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);