/*! For license information please see components-ui-form-field-form-field-stories.2ea45d4d.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[9938],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./ui/components/ui/form-field/form-field.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomComponents:()=>CustomComponents,DefaultStory:()=>DefaultStory,FormFieldWithError:()=>FormFieldWithError,FormFieldWithTitleDetail:()=>FormFieldWithTitleDetail,__namedExportsOrder:()=>__namedExportsOrder,default:()=>form_field_stories});var react=__webpack_require__("./node_modules/react/index.js"),tooltip=__webpack_require__("./ui/components/ui/tooltip/index.js"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),banner_alert=__webpack_require__("./ui/components/component-library/banner-alert/index.ts"),form_field=__webpack_require__("./ui/components/ui/form-field/index.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(banner_alert.w,{severity:design_system.zb.Warning,title:"Deprecated",description:"FormField has been deprecated in favor of FormTextField",actionButtonLabel:"See details",actionButtonProps:{href:"https://github.com/MetaMask/metamask-extension/issues/19737"},marginBottom:4}),"\n","\n",(0,jsx_runtime.jsx)(_components.h1,{id:"form-field",children:"Form Field"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Various data fields available for forms and pages."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-ui-formfield--default-story"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:form_field.Z}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"title-detail",children:"Title detail"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Show form fields with title detail on the left of the title"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-ui-formfield--form-field-with-title-detail"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"error",children:"Error"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Show form fields with error state"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-ui-formfield--form-field-with-error"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-components",children:"Custom Components"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the custom component props ",(0,jsx_runtime.jsx)(_components.code,{children:"TitleTextCustomComponent"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"TitleUnitCustomComponent"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"TooltipCustomComponent"})," to replace the default components.\nIf these props exists they will replace their respective text props. The FormField is wrapped in a Box component that renders as a ",(0,jsx_runtime.jsx)(_components.code,{children:"<label />"})," element.\nTo change the element type, use the ",(0,jsx_runtime.jsx)(_components.code,{children:"wrappingLabelProps"})," and polymorphic ",(0,jsx_runtime.jsx)(_components.code,{children:"as"})," prop. e.g ",(0,jsx_runtime.jsx)(_components.code,{children:"wrappingLabelProps={{ as: 'div' }}"}),". Make sure to provide your own ",(0,jsx_runtime.jsx)(_components.code,{children:"<label />"})," element combined with the ",(0,jsx_runtime.jsx)(_components.code,{children:"id"})," prop and ",(0,jsx_runtime.jsx)(_components.code,{children:"htmlFor"})," to ensure accessibility"]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-ui-formfield--custom-components"})})]})}const README=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var _DefaultStory$paramet,_DefaultStory$paramet2,_FormFieldWithTitleDe,_FormFieldWithTitleDe2,_FormFieldWithError$p,_FormFieldWithError$p2,_CustomComponents$par,_CustomComponents$par2;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const form_field_stories={title:"Components/UI/FormField",component:form_field.Z,parameters:{docs:{page:README}},argTypes:{titleText:{control:"text"},titleUnit:{control:"text"},tooltipText:{control:"text"},titleDetail:{options:["text","button","checkmark"],control:{type:"select"}},error:{control:"text"},onChange:{action:"onChange"},value:{control:"number"},detailText:{control:"text"},autoFocus:{control:"boolean"},numeric:{control:"boolean"},password:{control:"boolean"},allowDecimals:{control:"boolean"},disabled:{control:"boolean"},placeholder:{control:"text"}}},DefaultStory=args=>{const[value,setValue]=(0,react.useState)("");return react.createElement("div",{style:{width:"600px"}},react.createElement(form_field.Z,_extends({},args,{onChange:setValue,value})))};DefaultStory.storyName="Default",DefaultStory.args={numeric:!1,titleText:"Title"};const FormFieldWithTitleDetail=args=>{const[clicked,setClicked]=(0,react.useState)(!1),detailOptions={text:react.createElement("div",{style:{fontSize:"12px"}},"Detail"),button:react.createElement("button",{style:{backgroundColor:clicked?"var(--color-warning-default)":"var(--color-background-alternative)"},onClick:()=>setClicked(!clicked)},"Click Me"),checkmark:react.createElement(component_library.JO,{name:component_library.uH.Check})};return react.createElement(form_field.Z,_extends({},args,{titleDetail:detailOptions[args.titleDetail]}))};FormFieldWithTitleDetail.args={titleText:"Title",titleDetail:"text"};const FormFieldWithError=args=>react.createElement(form_field.Z,args);FormFieldWithError.args={titleText:"Title",error:"Incorrect Format"};const CustomComponents=args=>react.createElement("div",{style:{width:"600px"}},react.createElement(form_field.Z,_extends({},args,{titleHeadingWrapperProps:{alignItems:design_system.g1.center},TitleTextCustomComponent:react.createElement(component_library.xv,null,"TitleTextCustomComponent"),TitleUnitCustomComponent:react.createElement(component_library.xv,{marginLeft:2},"TitleUnitCustomComponent"),TooltipCustomComponent:react.createElement(tooltip.Z,{interactive:!0,position:"top",html:react.createElement(component_library.xv,null,"Custom tooltip")},react.createElement(component_library.JO,{name:component_library.uH.Question,marginLeft:2})),titleDetail:react.createElement(component_library.xv,null,"TitleDetail"),titleDetailWrapperProps:{marginBottom:0}})));DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState('');\n  return <div style={{\n    width: '600px'\n  }}>\n      <FormField {...args} onChange={setValue} value={value} />\n    </div>;\n}",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source}}},FormFieldWithTitleDetail.parameters={...FormFieldWithTitleDetail.parameters,docs:{...null===(_FormFieldWithTitleDe=FormFieldWithTitleDetail.parameters)||void 0===_FormFieldWithTitleDe?void 0:_FormFieldWithTitleDe.docs,source:{originalSource:"args => {\n  const [clicked, setClicked] = useState(false);\n  const detailOptions = {\n    text: <div style={{\n      fontSize: '12px'\n    }}>Detail</div>,\n    button: <button style={{\n      backgroundColor: clicked ? 'var(--color-warning-default)' : 'var(--color-background-alternative)'\n    }} onClick={() => setClicked(!clicked)}>\n        Click Me\n      </button>,\n    checkmark: <Icon name={IconName.Check} />\n  };\n  return <FormField {...args} titleDetail={detailOptions[args.titleDetail]} />;\n}",...null===(_FormFieldWithTitleDe2=FormFieldWithTitleDetail.parameters)||void 0===_FormFieldWithTitleDe2||null===(_FormFieldWithTitleDe2=_FormFieldWithTitleDe2.docs)||void 0===_FormFieldWithTitleDe2?void 0:_FormFieldWithTitleDe2.source}}},FormFieldWithError.parameters={...FormFieldWithError.parameters,docs:{...null===(_FormFieldWithError$p=FormFieldWithError.parameters)||void 0===_FormFieldWithError$p?void 0:_FormFieldWithError$p.docs,source:{originalSource:"args => {\n  return <FormField {...args} />;\n}",...null===(_FormFieldWithError$p2=FormFieldWithError.parameters)||void 0===_FormFieldWithError$p2||null===(_FormFieldWithError$p2=_FormFieldWithError$p2.docs)||void 0===_FormFieldWithError$p2?void 0:_FormFieldWithError$p2.source}}},CustomComponents.parameters={...CustomComponents.parameters,docs:{...null===(_CustomComponents$par=CustomComponents.parameters)||void 0===_CustomComponents$par?void 0:_CustomComponents$par.docs,source:{originalSource:"args => {\n  return <div style={{\n    width: '600px'\n  }}>\n      <FormField {...args} titleHeadingWrapperProps={{\n      alignItems: AlignItems.center\n    }} TitleTextCustomComponent={<Text>TitleTextCustomComponent</Text>} TitleUnitCustomComponent={<Text marginLeft={2}>TitleUnitCustomComponent</Text>} TooltipCustomComponent={<Tooltip interactive position=\"top\" html={<Text>Custom tooltip</Text>}>\n            <Icon name={IconName.Question} marginLeft={2} />\n          </Tooltip>} titleDetail={<Text>TitleDetail</Text>} titleDetailWrapperProps={{\n      marginBottom: 0\n    }} />\n    </div>;\n}",...null===(_CustomComponents$par2=CustomComponents.parameters)||void 0===_CustomComponents$par2||null===(_CustomComponents$par2=_CustomComponents$par2.docs)||void 0===_CustomComponents$par2?void 0:_CustomComponents$par2.source}}};const __namedExportsOrder=["DefaultStory","FormFieldWithTitleDetail","FormFieldWithError","CustomComponents"];DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"},FormFieldWithTitleDetail.__docgenInfo={description:"",methods:[],displayName:"FormFieldWithTitleDetail"},FormFieldWithError.__docgenInfo={description:"",methods:[],displayName:"FormFieldWithError"},CustomComponents.__docgenInfo={description:"",methods:[],displayName:"CustomComponents"}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);