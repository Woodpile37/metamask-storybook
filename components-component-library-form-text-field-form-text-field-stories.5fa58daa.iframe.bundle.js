/*! For license information please see components-component-library-form-text-field-form-text-field-stories.5fa58daa.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[7568],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./ui/components/component-library/form-text-field/form-text-field.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomLabelOrHelpText:()=>CustomLabelOrHelpText,DefaultStory:()=>DefaultStory,FormExample:()=>FormExample,HelpTextStory:()=>HelpTextStory,Id:()=>Id,LabelStory:()=>LabelStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>form_text_field_stories});var react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),form_text_field=__webpack_require__("./ui/components/component-library/form-text-field/form-text-field.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"formtextfield",children:"FormTextField"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"FormTextField"})," is an input component to create forms. It bundles the ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-textfield--default-story",children:"TextField"}),", ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-label--default-story",children:"Label"})," and ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-helptext--default-story",children:"HelpText"})," components together."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-formtextfield--default-story"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"FormTextField"})," accepts all props below as well as all ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-ui-box--default-story#props",children:"Box"})," component props"]}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:form_text_field.X}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"FormTextField"})," accepts all ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-textfield--default-story#props",children:"TextField"}),"\ncomponent props"]}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:component_library.nv}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"FormTextField"})," accepts all ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-textfield--default-story#props",children:"TextField"}),"\ncomponent props"]}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:component_library.nv}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"id",children:"Id"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"id"})," prop to set the ",(0,jsx_runtime.jsx)(_components.code,{children:"id"})," of the ",(0,jsx_runtime.jsx)(_components.code,{children:"FormTextField"})," component. This is required for accessibility when the ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})," prop is set. It is also used internally to link the ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"input"})," elements using ",(0,jsx_runtime.jsx)(_components.code,{children:"htmlFor"}),", so clicking on the ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})," will focus the ",(0,jsx_runtime.jsx)(_components.code,{children:"input"}),"."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-formtextfield--id"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'import { FormTextField } from \'../../component-library\';\n\n<FormTextField\n  id="accessible-input-id"\n  label="If label prop exists id prop is required for accessibility"\n/>;\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"label",children:"Label"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})," prop to add a label to the ",(0,jsx_runtime.jsx)(_components.code,{children:"FormTextField"})," component. Uses the ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-label--default-story",children:"Label"})," component. Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"labelProps"})," prop to pass props to the ",(0,jsx_runtime.jsx)(_components.code,{children:"Label"})," component. To use a custom label component see the ",(0,jsx_runtime.jsx)(_components.a,{href:"#custom-label-or-helptext",children:"Custom Label or HelpText"})," story example."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-formtextfield--label-story"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'import { FormTextField } from \'../../component-library\';\n\n<FormTextField id="input-with-label" label="Label content appears here" />;\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"helptext",children:"HelpText"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"helpText"})," prop to add help text to the ",(0,jsx_runtime.jsx)(_components.code,{children:"FormTextField"})," component. Uses the ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-helptext--default-story",children:"HelpText"})," component. Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"helpTextProps"})," prop to pass props to the ",(0,jsx_runtime.jsx)(_components.code,{children:"HelpText"})," component. To use a custom help text component see the ",(0,jsx_runtime.jsx)(_components.a,{href:"#custom-helpText-or-helptext",children:"Custom Label or HelpText"})," story example. When ",(0,jsx_runtime.jsx)(_components.code,{children:"error"})," is true the ",(0,jsx_runtime.jsx)(_components.code,{children:"helpText"})," will be rendered as an error message."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-formtextfield--help-text-story"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'import { FormTextField } from \'../../component-library\';\n\n<FormTextField helpText="HelpText content appears here" />;\n<FormTextField\n  error\n  helpText="When error is true the help text will be rendered as an error message"\n/>;\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"form-example",children:"Form Example"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["An example of a form using the ",(0,jsx_runtime.jsx)(_components.code,{children:"FormTextField"})," component."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-formtextfield--form-example"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import React, { useState, useEffect } from 'react';\nimport {\n  Display,\n  TextColor,\n  AlignItems,\n  TextVariant,\n} from '../../../helpers/constants/design-system';\n\nimport Box from '../../ui/box/box';\n\nimport {\n  ButtonPrimary,\n  ButtonSecondary,\n  FormTextField,\n  IconName,\n  Text,\n} from '../../component-library';\n\nconst FORM_STATE = {\n  DEFAULT: 'default',\n  SUCCESS: 'success',\n  ERROR: 'error',\n};\n\nconst VALIDATED_VALUES = {\n  NETWORK_NAME: 'network name',\n  NEW_RPC_URL: 'new rpc url',\n  CHAIN_ID: 'chain id',\n};\n\nconst ERROR_MESSAGES = {\n  NETWORK_NAME: `Please enter \"${VALIDATED_VALUES.NETWORK_NAME}\"`,\n  NEW_RPC_URL: `Please enter \"${VALIDATED_VALUES.NEW_RPC_URL}\"`,\n  CHAIN_ID: `Please enter \"${VALIDATED_VALUES.CHAIN_ID}\"`,\n};\n\nconst [submitted, setSubmitted] = useState(FORM_STATE.DEFAULT);\n\nconst [values, setValues] = useState({\n  networkName: '',\n  newRpcUrl: '',\n  chainId: '',\n});\n\nconst [errors, setErrors] = useState({\n  networkName: '',\n  newRpcUrl: '',\n  chainId: '',\n});\n\nuseEffect(() => {\n  setErrors({\n    networkName:\n      values.networkName &&\n      values.networkName.toLowerCase() !== VALIDATED_VALUES.NETWORK_NAME\n        ? ERROR_MESSAGES.NETWORK_NAME\n        : '',\n    newRpcUrl:\n      values.newRpcUrl &&\n      values.newRpcUrl.toLowerCase() !== VALIDATED_VALUES.NEW_RPC_URL\n        ? ERROR_MESSAGES.NEW_RPC_URL\n        : '',\n    chainId:\n      values.chainId &&\n      values.chainId.toLowerCase() !== VALIDATED_VALUES.CHAIN_ID\n        ? ERROR_MESSAGES.CHAIN_ID\n        : '',\n  });\n}, [values]);\n\nconst handleClearForm = () => {\n  setValues({ networkName: '', newRpcUrl: '', chainId: '' });\n  setErrors({ networkName: '', newRpcUrl: '', chainId: '' });\n  setSubmitted(FORM_STATE.DEFAULT);\n};\n\nconst handleOnChange = (e) => {\n  if (submitted === FORM_STATE.ERROR) {\n    setErrors({ networkName: '', newRpcUrl: '', chainId: '' });\n    setSubmitted(FORM_STATE.DEFAULT);\n  }\n  setValues({\n    ...values,\n    [e.target.name]: e.target.value,\n  });\n};\n\nconst handleOnSubmit = (e) => {\n  e.preventDefault();\n  if (errors.networkName || errors.newRpcUrl || errors.chainId) {\n    setSubmitted(FORM_STATE.ERROR);\n  } else {\n    setSubmitted(FORM_STATE.SUCCESS);\n  }\n};\n\nreturn (\n  <>\n    <Box\n      as=\"form\"\n      onSubmit={handleOnSubmit}\n      marginBottom={4}\n      style={{ width: '100%', maxWidth: '420px' }}\n    >\n      <FormTextField\n        marginBottom={4}\n        label=\"Network name\"\n        placeholder=\"Enter 'network name'\"\n        required\n        name=\"networkName\"\n        id=\"networkName\"\n        onChange={handleOnChange}\n        value={values.networkName}\n        error={Boolean(submitted === FORM_STATE.ERROR && errors.networkName)}\n        helpText={submitted === FORM_STATE.ERROR ? errors.networkName : null}\n      />\n      <FormTextField\n        marginBottom={4}\n        label=\"New RPC URL\"\n        placeholder=\"Enter 'new RPC URL'\"\n        required\n        name=\"newRpcUrl\"\n        id=\"newRpcUrl\"\n        onChange={handleOnChange}\n        value={values.newRpcUrl}\n        error={Boolean(submitted === FORM_STATE.ERROR && errors.newRpcUrl)}\n        helpText={submitted === FORM_STATE.ERROR ? errors.newRpcUrl : null}\n      />\n      <FormTextField\n        label=\"Chain ID\"\n        marginBottom={4}\n        placeholder=\"Enter 'chain ID'\"\n        required\n        name=\"chainId\"\n        id=\"chainId\"\n        onChange={handleOnChange}\n        value={values.chainId}\n        error={Boolean(submitted === FORM_STATE.ERROR && errors.chainId)}\n        helpText={submitted === FORM_STATE.ERROR ? errors.chainId : null}\n      />\n      <Box display={Display.Flex} alignItems={AlignItems.center} gap={1}>\n        <ButtonPrimary type=\"submit\">Submit</ButtonPrimary>\n      </Box>\n    </Box>\n    <ButtonSecondary icon={IconName.Close} onClick={handleClearForm} danger>\n      Clear form\n    </ButtonSecondary>\n    {submitted === FORM_STATE.SUCCESS && (\n      <Text\n        variant={TextVariant.bodyMd}\n        color={TextColor.successDefault}\n        marginTop={4}\n      >\n        Form successfully submitted!\n      </Text>\n    )}\n  </>\n);\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-label-or-helptext",children:"Custom Label or HelpText"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["There will be times when you will want to use a custom ",(0,jsx_runtime.jsx)(_components.code,{children:"Label"})," or ",(0,jsx_runtime.jsx)(_components.code,{children:"HelpText"}),". This can be done by simply not providing ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})," or ",(0,jsx_runtime.jsx)(_components.code,{children:"helpText"})," props to the ",(0,jsx_runtime.jsx)(_components.code,{children:"FormTextField"})," component. You can then use the ",(0,jsx_runtime.jsx)(_components.code,{children:"Label"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"HelpText"})," components to create your own custom label or help text."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-formtextfield--custom-label-or-help-text"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'import {\n  Size,\n  Display,\n  IconColor,\n  AlignItems,\n  JustifyContent,\n} from \'../../../helpers/constants/design-system\';\n\nimport Box from \'../../ui/box/box\';\n\nimport { Icon, IconName } from \'..\'\nimport {\n  ButtonLink,\n  FormTextField,\n  HelpText,\n  Label,\n  TextFieldType,\n  Text,\n} from \'../../component-library\';\n\n<Text marginBottom={4}>\n  Examples of how one might customize the Label or HelpText within the\n  FormTextField component\n</Text>\n<Box\n  display={Display.Flex}\n  justifyContent={JustifyContent.spaceBetween}\n  alignItems={AlignItems.flexEnd}\n>\n  <Box display={Display.Flex} alignItems={AlignItems.center}>\n    {/**\n      * If you need a custom label\n      * or require adding some form of customization\n      * import the Label component separately\n      */}\n    <Label htmlFor="custom-spending-cap">\n      Custom spending cap\n    </Label>\n    <Icon\n      name={IconName.Info}\n      size={IconSize.Sm}\n      marginLeft={1}\n      color={IconColor.iconAlternative}\n    />\n  </Box>\n  <ButtonLink>Use default</ButtonLink>\n</Box>\n<FormTextField\n  id="custom-spending-cap"\n  placeholder="Enter a number"\n  endAccessory={<ButtonLink>Max</ButtonLink>}\n  marginBottom={4}\n  type={TextFieldType.Number}\n/>\n<FormTextField\n  label="Swap from"\n  placeholder="0"\n  type={TextFieldType.Number}\n/>\n<Box\n  display={Display.Flex}\n  alignItems={AlignItems.flexStart}\n  justifyContent={JustifyContent.spaceBetween}\n  marginTop={1}\n>\n  {/**\n    * If you need a custom help text\n    * or require adding some form of customization\n    * import the HelpText component separately and handle the error\n    * logic yourself\n    */}\n  <HelpText htmlFor="chainId" marginRight={2}>\n    Only enter a number that you\'re comfortable with the contract accessing\n    now or in the future. You can always increase the token limit later.\n  </HelpText>\n  <ButtonLink marginLeft="auto">\n    Max\n  </ButtonLink>\n</Box>\n'})})]})}const README=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var _DefaultStory$paramet,_DefaultStory$paramet2,_Id$parameters,_Id$parameters2,_LabelStory$parameter,_LabelStory$parameter2,_HelpTextStory$parame,_HelpTextStory$parame2,_FormExample$paramete,_FormExample$paramete2,_CustomLabelOrHelpTex,_CustomLabelOrHelpTex2;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const form_text_field_stories={title:"Components/ComponentLibrary/FormTextField",component:form_text_field.X,parameters:{docs:{page:README}},args:{placeholder:"Form text field",label:"Label",id:"form-text-field",helpText:"Help text"}},Template=args=>{const[{value=""},updateArgs]=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)();return react.createElement(form_text_field.X,_extends({},args,{value,onChange:e=>{updateArgs({value:e.target.value})}}))},DefaultStory=Template.bind({});DefaultStory.storyName="Default";const Id=Template.bind({});Id.args={id:"accessible-input-id",label:"If label prop exists id prop is required for accessibility",helpText:""};const LabelStory=Template.bind({});LabelStory.storyName="Label",LabelStory.args={id:"input-with-label",label:"Label content appears here",helpText:""};const HelpTextStory=args=>{const[{value=""},updateArgs]=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)(),handleOnChange=e=>{updateArgs({value:e.target.value})};return react.createElement(react.Fragment,null,react.createElement(form_text_field.X,_extends({},args,{id:"input-with-help-text",value,onChange:handleOnChange,marginBottom:4})),react.createElement(form_text_field.X,_extends({},args,{id:"input-with-help-text-as-error",error:!0,helpText:"When error is true the help text will be rendered as an error message",value,onChange:handleOnChange})))};HelpTextStory.storyName="HelpText",HelpTextStory.args={label:"",helpText:"HelpText content appears here"};const FormExample=()=>{const FORM_STATE_DEFAULT="default",FORM_STATE_SUCCESS="success",FORM_STATE_ERROR="error",VALIDATED_VALUES_NETWORK_NAME="network name",VALIDATED_VALUES_NEW_RPC_URL="new rpc url",VALIDATED_VALUES_CHAIN_ID="chain id",ERROR_MESSAGES={NETWORK_NAME:`Please enter "${VALIDATED_VALUES_NETWORK_NAME}"`,NEW_RPC_URL:`Please enter "${VALIDATED_VALUES_NEW_RPC_URL}"`,CHAIN_ID:`Please enter "${VALIDATED_VALUES_CHAIN_ID}"`},[submitted,setSubmitted]=(0,react.useState)(FORM_STATE_DEFAULT),[values,setValues]=(0,react.useState)({networkName:"",newRpcUrl:"",chainId:""}),[errors,setErrors]=(0,react.useState)({networkName:"",newRpcUrl:"",chainId:""});(0,react.useEffect)((()=>{setErrors({networkName:values.networkName&&values.networkName.toLowerCase()!==VALIDATED_VALUES_NETWORK_NAME?ERROR_MESSAGES.NETWORK_NAME:"",newRpcUrl:values.newRpcUrl&&values.newRpcUrl.toLowerCase()!==VALIDATED_VALUES_NEW_RPC_URL?ERROR_MESSAGES.NEW_RPC_URL:"",chainId:values.chainId&&values.chainId.toLowerCase()!==VALIDATED_VALUES_CHAIN_ID?ERROR_MESSAGES.CHAIN_ID:""})}),[values,ERROR_MESSAGES.CHAIN_ID,ERROR_MESSAGES.NETWORK_NAME,ERROR_MESSAGES.NEW_RPC_URL,VALIDATED_VALUES_CHAIN_ID,VALIDATED_VALUES_NETWORK_NAME,VALIDATED_VALUES_NEW_RPC_URL]);const handleOnChange=e=>{submitted===FORM_STATE_ERROR&&(setErrors({networkName:"",newRpcUrl:"",chainId:""}),setSubmitted(FORM_STATE_DEFAULT)),setValues({...values,[e.target.name]:e.target.value})};return react.createElement(react.Fragment,null,react.createElement(component_library.xu,{as:"form",onSubmit:e=>{e.preventDefault(),errors.networkName||errors.newRpcUrl||errors.chainId?setSubmitted(FORM_STATE_ERROR):setSubmitted(FORM_STATE_SUCCESS)},marginBottom:4,style:{width:"100%",maxWidth:"420px"}},react.createElement(form_text_field.X,{marginBottom:4,label:"Network name",placeholder:"Enter 'network name'",required:!0,name:"networkName",id:"networkName",onChange:handleOnChange,value:values.networkName,error:Boolean(submitted===FORM_STATE_ERROR&&errors.networkName),helpText:submitted===FORM_STATE_ERROR?errors.networkName:null}),react.createElement(form_text_field.X,{marginBottom:4,label:"New RPC URL",placeholder:"Enter 'new RPC URL'",required:!0,name:"newRpcUrl",id:"newRpcUrl",onChange:handleOnChange,value:values.newRpcUrl,error:Boolean(submitted===FORM_STATE_ERROR&&errors.newRpcUrl),helpText:submitted===FORM_STATE_ERROR?errors.newRpcUrl:null}),react.createElement(form_text_field.X,{label:"Chain ID",marginBottom:4,placeholder:"Enter 'chain ID'",required:!0,name:"chainId",id:"chainId",onChange:handleOnChange,value:values.chainId,error:Boolean(submitted===FORM_STATE_ERROR&&errors.chainId),helpText:submitted===FORM_STATE_ERROR?errors.chainId:null}),react.createElement(component_library.xu,{display:design_system.sS.Flex,alignItems:design_system.g1.center,gap:1},react.createElement(component_library.DF,{type:"submit"},"Submit"))),react.createElement(component_library.PL,{endIconName:component_library.uH.Close,onClick:()=>{setValues({networkName:"",newRpcUrl:"",chainId:""}),setErrors({networkName:"",newRpcUrl:"",chainId:""}),setSubmitted(FORM_STATE_DEFAULT)},danger:!0},"Clear form"),submitted===FORM_STATE_SUCCESS&&react.createElement(component_library.xv,{variant:design_system.rK.bodyLgMedium,color:design_system.d9.successDefault,marginTop:4},"Form successfully submitted!"))},CustomLabelOrHelpText=()=>react.createElement(react.Fragment,null,react.createElement(component_library.xv,{marginBottom:4},"Examples of how one might customize the Label or HelpText within the FormTextField component"),react.createElement(component_library.xu,{display:design_system.sS.Flex,justifyContent:design_system.E0.spaceBetween,alignItems:design_system.g1.flexEnd},react.createElement(component_library.xu,{display:design_system.sS.Flex,alignItems:design_system.g1.center},react.createElement(component_library.__,{htmlFor:"custom-spending-cap"},"Custom spending cap"),react.createElement(component_library.JO,{name:component_library.uH.Info,size:component_library.Jh.Sm,marginLeft:1,color:design_system.EY.iconAlternative})),react.createElement(component_library.ZP,null,"Use default")),react.createElement(form_text_field.X,{id:"custom-spending-cap",placeholder:"Enter a number",endAccessory:react.createElement(component_library.ZP,null,"Max"),marginBottom:4,type:component_library.T3.Number}),react.createElement(form_text_field.X,{label:"Swap from",id:"swap-from",placeholder:"0",type:component_library.T3.Number}),react.createElement(component_library.xu,{display:design_system.sS.Flex,alignItems:design_system.g1.flexStart,justifyContent:design_system.E0.spaceBetween},react.createElement(component_library.RU,{paddingRight:2,marginTop:1},"Only enter a number that you're comfortable with the contract accessing now or in the future. You can always increase the token limit later."),react.createElement(component_library.ZP,{marginLeft:"auto",marginTop:1},"Max")));DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => {\n  const [{\n    value = ''\n  }, updateArgs] = useArgs();\n  const handleOnChange = e => {\n    updateArgs({\n      value: e.target.value\n    });\n  };\n  return <FormTextField {...args} value={value} onChange={handleOnChange} />;\n}",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source}}},Id.parameters={...Id.parameters,docs:{...null===(_Id$parameters=Id.parameters)||void 0===_Id$parameters?void 0:_Id$parameters.docs,source:{originalSource:"args => {\n  const [{\n    value = ''\n  }, updateArgs] = useArgs();\n  const handleOnChange = e => {\n    updateArgs({\n      value: e.target.value\n    });\n  };\n  return <FormTextField {...args} value={value} onChange={handleOnChange} />;\n}",...null===(_Id$parameters2=Id.parameters)||void 0===_Id$parameters2||null===(_Id$parameters2=_Id$parameters2.docs)||void 0===_Id$parameters2?void 0:_Id$parameters2.source}}},LabelStory.parameters={...LabelStory.parameters,docs:{...null===(_LabelStory$parameter=LabelStory.parameters)||void 0===_LabelStory$parameter?void 0:_LabelStory$parameter.docs,source:{originalSource:"args => {\n  const [{\n    value = ''\n  }, updateArgs] = useArgs();\n  const handleOnChange = e => {\n    updateArgs({\n      value: e.target.value\n    });\n  };\n  return <FormTextField {...args} value={value} onChange={handleOnChange} />;\n}",...null===(_LabelStory$parameter2=LabelStory.parameters)||void 0===_LabelStory$parameter2||null===(_LabelStory$parameter2=_LabelStory$parameter2.docs)||void 0===_LabelStory$parameter2?void 0:_LabelStory$parameter2.source}}},HelpTextStory.parameters={...HelpTextStory.parameters,docs:{...null===(_HelpTextStory$parame=HelpTextStory.parameters)||void 0===_HelpTextStory$parame?void 0:_HelpTextStory$parame.docs,source:{originalSource:'args => {\n  const [{\n    value = \'\'\n  }, updateArgs] = useArgs();\n  const handleOnChange = e => {\n    updateArgs({\n      value: e.target.value\n    });\n  };\n  return <>\n      <FormTextField {...args} id="input-with-help-text" value={value} onChange={handleOnChange} marginBottom={4} />\n      <FormTextField {...args} id="input-with-help-text-as-error" error helpText="When error is true the help text will be rendered as an error message" value={value} onChange={handleOnChange} />\n    </>;\n}',...null===(_HelpTextStory$parame2=HelpTextStory.parameters)||void 0===_HelpTextStory$parame2||null===(_HelpTextStory$parame2=_HelpTextStory$parame2.docs)||void 0===_HelpTextStory$parame2?void 0:_HelpTextStory$parame2.source}}},FormExample.parameters={...FormExample.parameters,docs:{...null===(_FormExample$paramete=FormExample.parameters)||void 0===_FormExample$paramete?void 0:_FormExample$paramete.docs,source:{originalSource:"() => {\n  const FORM_STATE = {\n    DEFAULT: 'default',\n    SUCCESS: 'success',\n    ERROR: 'error'\n  };\n  const VALIDATED_VALUES = {\n    NETWORK_NAME: 'network name',\n    NEW_RPC_URL: 'new rpc url',\n    CHAIN_ID: 'chain id'\n  };\n  const ERROR_MESSAGES = {\n    NETWORK_NAME: `Please enter \"${VALIDATED_VALUES.NETWORK_NAME}\"`,\n    NEW_RPC_URL: `Please enter \"${VALIDATED_VALUES.NEW_RPC_URL}\"`,\n    CHAIN_ID: `Please enter \"${VALIDATED_VALUES.CHAIN_ID}\"`\n  };\n  const [submitted, setSubmitted] = useState(FORM_STATE.DEFAULT);\n  const [values, setValues] = useState({\n    networkName: '',\n    newRpcUrl: '',\n    chainId: ''\n  });\n  const [errors, setErrors] = useState({\n    networkName: '',\n    newRpcUrl: '',\n    chainId: ''\n  });\n  useEffect(() => {\n    setErrors({\n      networkName: values.networkName && values.networkName.toLowerCase() !== VALIDATED_VALUES.NETWORK_NAME ? ERROR_MESSAGES.NETWORK_NAME : '',\n      newRpcUrl: values.newRpcUrl && values.newRpcUrl.toLowerCase() !== VALIDATED_VALUES.NEW_RPC_URL ? ERROR_MESSAGES.NEW_RPC_URL : '',\n      chainId: values.chainId && values.chainId.toLowerCase() !== VALIDATED_VALUES.CHAIN_ID ? ERROR_MESSAGES.CHAIN_ID : ''\n    });\n  }, [values, ERROR_MESSAGES.CHAIN_ID, ERROR_MESSAGES.NETWORK_NAME, ERROR_MESSAGES.NEW_RPC_URL, VALIDATED_VALUES.CHAIN_ID, VALIDATED_VALUES.NETWORK_NAME, VALIDATED_VALUES.NEW_RPC_URL]);\n  const handleClearForm = () => {\n    setValues({\n      networkName: '',\n      newRpcUrl: '',\n      chainId: ''\n    });\n    setErrors({\n      networkName: '',\n      newRpcUrl: '',\n      chainId: ''\n    });\n    setSubmitted(FORM_STATE.DEFAULT);\n  };\n  const handleOnChange = e => {\n    if (submitted === FORM_STATE.ERROR) {\n      setErrors({\n        networkName: '',\n        newRpcUrl: '',\n        chainId: ''\n      });\n      setSubmitted(FORM_STATE.DEFAULT);\n    }\n    setValues({\n      ...values,\n      [e.target.name]: e.target.value\n    });\n  };\n  const handleOnSubmit = e => {\n    e.preventDefault();\n    if (errors.networkName || errors.newRpcUrl || errors.chainId) {\n      setSubmitted(FORM_STATE.ERROR);\n    } else {\n      setSubmitted(FORM_STATE.SUCCESS);\n    }\n  };\n  return <>\n      <Box as=\"form\" onSubmit={handleOnSubmit} marginBottom={4} style={{\n      width: '100%',\n      maxWidth: '420px'\n    }}>\n        <FormTextField marginBottom={4} label=\"Network name\" placeholder=\"Enter 'network name'\" required name=\"networkName\" id=\"networkName\" onChange={handleOnChange} value={values.networkName} error={Boolean(submitted === FORM_STATE.ERROR && errors.networkName)} helpText={submitted === FORM_STATE.ERROR ? errors.networkName : null} />\n        <FormTextField marginBottom={4} label=\"New RPC URL\" placeholder=\"Enter 'new RPC URL'\" required name=\"newRpcUrl\" id=\"newRpcUrl\" onChange={handleOnChange} value={values.newRpcUrl} error={Boolean(submitted === FORM_STATE.ERROR && errors.newRpcUrl)} helpText={submitted === FORM_STATE.ERROR ? errors.newRpcUrl : null} />\n        <FormTextField label=\"Chain ID\" marginBottom={4} placeholder=\"Enter 'chain ID'\" required name=\"chainId\" id=\"chainId\" onChange={handleOnChange} value={values.chainId} error={Boolean(submitted === FORM_STATE.ERROR && errors.chainId)} helpText={submitted === FORM_STATE.ERROR ? errors.chainId : null} />\n        <Box display={Display.Flex} alignItems={AlignItems.center} gap={1}>\n          <ButtonPrimary type=\"submit\">Submit</ButtonPrimary>\n        </Box>\n      </Box>\n      <ButtonSecondary endIconName={IconName.Close} onClick={handleClearForm} danger>\n        Clear form\n      </ButtonSecondary>\n      {submitted === FORM_STATE.SUCCESS && <Text variant={TextVariant.bodyLgMedium} color={TextColor.successDefault} marginTop={4}>\n          Form successfully submitted!\n        </Text>}\n    </>;\n}",...null===(_FormExample$paramete2=FormExample.parameters)||void 0===_FormExample$paramete2||null===(_FormExample$paramete2=_FormExample$paramete2.docs)||void 0===_FormExample$paramete2?void 0:_FormExample$paramete2.source}}},CustomLabelOrHelpText.parameters={...CustomLabelOrHelpText.parameters,docs:{...null===(_CustomLabelOrHelpTex=CustomLabelOrHelpText.parameters)||void 0===_CustomLabelOrHelpTex?void 0:_CustomLabelOrHelpTex.docs,source:{originalSource:'() => <>\n    <Text marginBottom={4}>\n      Examples of how one might customize the Label or HelpText within the\n      FormTextField component\n    </Text>\n    <Box display={Display.Flex} justifyContent={JustifyContent.spaceBetween} alignItems={AlignItems.flexEnd}>\n      <Box display={Display.Flex} alignItems={AlignItems.center}>\n        {/* If you need a custom label\n         or require adding some form of customization\n         import the Label component separately */}\n        <Label htmlFor="custom-spending-cap">Custom spending cap</Label>\n        <Icon name={IconName.Info} size={IconSize.Sm} marginLeft={1} color={IconColor.iconAlternative} />\n      </Box>\n      <ButtonLink>Use default</ButtonLink>\n    </Box>\n    <FormTextField id="custom-spending-cap" placeholder="Enter a number" endAccessory={<ButtonLink>Max</ButtonLink>} marginBottom={4} type={TextFieldType.Number} />\n    <FormTextField label="Swap from" id="swap-from" placeholder="0" type={TextFieldType.Number} />\n    <Box display={Display.Flex} alignItems={AlignItems.flexStart} justifyContent={JustifyContent.spaceBetween}>\n      {/* If you need a custom help text\n       or require adding some form of customization\n       import the HelpText component separately and handle the error\n       logic yourself */}\n      <HelpText paddingRight={2} marginTop={1}>\n        Only enter a number that you&apos;re comfortable with the contract\n        accessing now or in the future. You can always increase the token limit\n        later.\n      </HelpText>\n      <ButtonLink marginLeft="auto" marginTop={1}>\n        Max\n      </ButtonLink>\n    </Box>\n  </>',...null===(_CustomLabelOrHelpTex2=CustomLabelOrHelpText.parameters)||void 0===_CustomLabelOrHelpTex2||null===(_CustomLabelOrHelpTex2=_CustomLabelOrHelpTex2.docs)||void 0===_CustomLabelOrHelpTex2?void 0:_CustomLabelOrHelpTex2.source}}};const __namedExportsOrder=["DefaultStory","Id","LabelStory","HelpTextStory","FormExample","CustomLabelOrHelpText"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);