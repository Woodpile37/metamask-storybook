/*! For license information please see components-app-transaction-detail-item-transaction-detail-item-stories.d434e42c.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[9518],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./ui/components/app/transaction-detail-item/transaction-detail-item.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>transaction_detail_item_stories});var react=__webpack_require__("./node_modules/react/index.js"),info_tooltip=__webpack_require__("./ui/components/ui/info-tooltip/info-tooltip.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),transaction_detail_item=__webpack_require__("./ui/components/app/transaction-detail-item/index.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"transaction-detail-item",children:"Transaction Detail Item"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Transaction detail that includes estimated gas fees. Intended to be used as an array item in the array passed to the ",(0,jsx_runtime.jsx)(_components.code,{children:"rows"})," prop of ",(0,jsx_runtime.jsx)(_components.code,{children:"<TransactionDetail />"})]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-app-transactiondetailitem--default-story"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:transaction_detail_item.Z})]})}const README=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var _DefaultStory$paramet,_DefaultStory$paramet2;const transaction_detail_item_stories={title:"Components/App/TransactionDetailItem",component:transaction_detail_item.Z,parameters:{docs:{page:README}},argTypes:{detailTitle:{control:"object"},detailTitleColor:{control:{type:"select"},options:Object.values(design_system.d9)},detailText:{control:"text"},detailTotal:{control:"text"},subTitle:{control:"object"},subText:{control:"object"}}},DefaultStory=args=>react.createElement("div",{style:{width:"400px"}},react.createElement(transaction_detail_item.Z,args));DefaultStory.storyName="Default",DefaultStory.args={detailTitle:react.createElement(react.Fragment,null,react.createElement("strong",null,"Estimated gas fee"),react.createElement(info_tooltip.Z,{contentText:"This is the tooltip text",position:"top"},react.createElement(component_library.JO,{name:component_library.uH.Info}))),detailText:"16565.30",detailTotal:"0.0089 ETH",subTitle:"Likely in < 30 seconds",boldHeadings:!0,flexWidthValues:!1,subText:react.createElement("span",null,"From ",react.createElement("strong",null,"$16565 - $19000"))},DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => {\n  return <div style={{\n    width: '400px'\n  }}>\n      <TransactionDetailItem {...args} />\n    </div>;\n}",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source}}};const __namedExportsOrder=["DefaultStory"];DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"}},"./ui/components/app/transaction-detail-item/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_transaction_detail_item_component__WEBPACK_IMPORTED_MODULE_0__.Z});var _transaction_detail_item_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/app/transaction-detail-item/transaction-detail-item.component.js")},"./ui/components/app/transaction-detail-item/transaction-detail-item.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>TransactionDetailItem});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_component_library__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/component-library/index.ts");function TransactionDetailItem({"data-testid":dataTestId,detailTitle="",detailText,detailTitleColor=_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Il.textDefault,detailTotal="",subTitle="",subText="",boldHeadings=!0,flexWidthValues=!1}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"transaction-detail-item","data-testid":dataTestId},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"transaction-detail-item__row"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_3__.xv,{as:"h6",color:detailTitleColor,fontWeight:boldHeadings?_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.U9.Bold:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.U9.Normal,display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.sS.Flex,flexWrap:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.gP.NoWrap,alignItems:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.g1.center},detailTitle),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("transaction-detail-item__detail-values",{"transaction-detail-item__detail-values--flex-width":flexWidthValues})},detailText&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_3__.xv,{as:"h6",color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Il.textAlternative},detailText),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_3__.xv,{as:"h6",color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Il.textDefault,fontWeight:boldHeadings?_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.U9.Bold:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.U9.Normal,marginLeft:1,textAlign:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.PH.Right},detailTotal))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"transaction-detail-item__row"},react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(subTitle)?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,subTitle):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_3__.xv,{as:"h6",variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.rK.bodySm,color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Il.textAlternative},subTitle),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_3__.xv,{as:"h6",variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.rK.bodySm,color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Il.textAlternative,textAlign:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.PH.End,className:"transaction-detail-item__row-subText"},subText)))}TransactionDetailItem.propTypes={"data-testid":prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,detailTitle:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,prop_types__WEBPACK_IMPORTED_MODULE_4___default().node]),detailTitleColor:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,detailText:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,prop_types__WEBPACK_IMPORTED_MODULE_4___default().node]),detailTotal:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,prop_types__WEBPACK_IMPORTED_MODULE_4___default().node]),subTitle:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,prop_types__WEBPACK_IMPORTED_MODULE_4___default().node]),subText:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,prop_types__WEBPACK_IMPORTED_MODULE_4___default().node]),boldHeadings:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,flexWidthValues:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool},TransactionDetailItem.__docgenInfo={description:"",methods:[],displayName:"TransactionDetailItem",props:{detailTitle:{defaultValue:{value:"''",computed:!1},description:"Detail title text wrapped in Typography component.",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1},detailTitleColor:{defaultValue:{value:"Color.textDefault",computed:!0},description:"The color of the detailTitle text accepts all Typography color props",type:{name:"string"},required:!1},detailTotal:{defaultValue:{value:"''",computed:!1},description:"Total amount to show. Wrapped in Typography component. Will be bold if boldHeadings is true",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1},subTitle:{defaultValue:{value:"''",computed:!1},description:"Subtitle text. Checks if React.isValidElement before displaying. Displays under detailTitle",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1},subText:{defaultValue:{value:"''",computed:!1},description:"Text to show under detailTotal. Wrapped in Typography component.",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1},boldHeadings:{defaultValue:{value:"true",computed:!1},description:"Whether detailTotal is bold or not. Defaults to true",type:{name:"bool"},required:!1},flexWidthValues:{defaultValue:{value:"false",computed:!1},description:"Changes width to auto for transaction-detail-item__detail-values",type:{name:"bool"},required:!1},"data-testid":{description:"An identifier for use in end-to-end tests.",type:{name:"string"},required:!1},detailText:{description:"Text to show on the left of the detailTotal. Wrapped in Typography component.",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);