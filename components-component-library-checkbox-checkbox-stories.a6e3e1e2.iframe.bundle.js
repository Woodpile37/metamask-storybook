/*! For license information please see components-component-library-checkbox-checkbox-stories.a6e3e1e2.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[9713],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./ui/components/component-library/checkbox/checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,Id:()=>Id,InputProps:()=>InputProps,IsChecked:()=>IsChecked,IsDisabled:()=>IsDisabled,IsIndeterminate:()=>IsIndeterminate,IsReadOnly:()=>IsReadOnly,IsRequired:()=>IsRequired,Label:()=>Label,Name:()=>Name,OnChange:()=>OnChange,Title:()=>Title,__namedExportsOrder:()=>__namedExportsOrder,default:()=>checkbox_stories});var external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),react=__webpack_require__("./node_modules/react/index.js"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),checkbox_checkbox=__webpack_require__("./ui/components/component-library/checkbox/checkbox.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",h3:"h3",code:"code",pre:"pre"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"checkbox",children:"Checkbox"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Checkbox is a graphical element that allows users to select one or more options from a set of choices."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-checkbox--default-story"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:checkbox_checkbox.X}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"label",children:"Label"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})," string prop to set the label of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Checkbox"})]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-checkbox--label"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Checkbox } from '../../component-library';\n\n<Checkbox label=\"Checkbox Label\" />;\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"ischecked",children:"IsChecked"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isChecked"})," boolean prop to set the checked state of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Checkbox"})]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-checkbox--is-checked"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Checkbox } from '../../component-library';\n\n<Checkbox isChecked={true} label=\"isChecked demo\" />;\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"isindeterminate",children:"IsIndeterminate"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isIndeterminate"})," boolean prop to set the indeterminate state of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Checkbox"})]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-checkbox--is-indeterminate"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'import React from \'react\';\nimport { Checkbox, Box } from \'../../component-library\';\n\nconst [checkedItems, setCheckedItems] = React.useState([false, true, false]);\n\nconst allChecked = checkedItems.every(Boolean);\nconst isIndeterminate = checkedItems.some(Boolean) && !allChecked;\n\nconst handleIndeterminateChange = () => {\n  if (allChecked || isIndeterminate) {\n    setCheckedItems([false, false, false]);\n  } else {\n    setCheckedItems([true, true, true]);\n  }\n};\n\nconst handleCheckboxChange = (index, value) => {\n  const newCheckedItems = [...checkedItems];\n  newCheckedItems[index] = value;\n  setCheckedItems(newCheckedItems);\n};\n\n<Checkbox\n    label="isIndeterminate demo"\n    isChecked={allChecked}\n    isIndeterminate={isIndeterminate}\n    onChange={handleIndeterminateChange}\n    marginBottom={2}\n/>\n<Box\n  marginLeft={2}\n  gap={1}\n  display={Display.Flex}\n  flexDirection={FlexDirection.Column}\n>\n  <Checkbox\n    isChecked={checkedItems[0]}\n    onChange={(e) => handleCheckboxChange(0, e.target.checked)}\n    label="Checkbox 1"\n  />\n  <Checkbox\n    isChecked={checkedItems[1]}\n    onChange={(e) => handleCheckboxChange(1, e.target.checked)}\n    label="Checkbox 2"\n  />\n  <Checkbox\n    isChecked={checkedItems[2]}\n    onChange={(e) => handleCheckboxChange(2, e.target.checked)}\n    label="Checkbox 3"\n  />\n</Box>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"isdisabled",children:"IsDisabled"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isDisabled"})," boolean prop to set the disabled state of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Checkbox"})]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-checkbox--is-disabled"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Checkbox } from '../../component-library';\n\n<Checkbox isDisabled={true} label=\"isDisabled demo\" />;\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"isreadonly",children:"IsReadOnly"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isReadOnly"})," boolean prop to set the readOnly attribute of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Checkbox"})]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-checkbox--is-read-only"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Checkbox } from '../../component-library';\n\n<Checkbox isReadOnly={true} label=\"isReadOnly demo\" />;\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"onchange",children:"OnChange"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"onChange"})," function prop to set the onChange handler of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Checkbox"})]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-checkbox--on-change"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import React from 'react';\nimport { Checkbox } from '../../component-library';\n\nconst [isChecked, setIsChecked] = React.useState(false);\n\n<Checkbox\n  onChange={() => setIsChecked(!isChecked)}\n  isChecked={isChecked}\n  label=\"isReadOnly demo\"\n/>;\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"isrequired",children:"IsRequired"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isRequired"})," boolean prop to set the required attribute of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Checkbox"})]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-checkbox--is-required"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Checkbox } from '../../component-library';\n\n<Checkbox isRequired={true} label=\"isRequired demo\" />;\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"title",children:"Title"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"title"})," string prop to set the title attribute of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Checkbox"}),"\nThe title attribute is used to provide additional context or information about the checkbox. It is primarily used for browser native tooltip functionality."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-checkbox--title"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'import { Checkbox } from \'../../component-library\';\n\n<Checkbox title="Apples" label="Inspect to see title attribute" />;\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"name",children:"Name"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"name"})," string prop to set the name attribute of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Checkbox"}),"\nThis is best used when working with a form and submitting the value of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Checkbox"})]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-checkbox--name"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'import { Checkbox } from \'../../component-library\';\n\n<Checkbox name="pineapple" label="Inspect to see name attribute" />;\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"inputprops",children:"InputProps"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"inputProps"})," object prop to add additonal props or attributes to the hidden input element\nIf needing to pass a ref to the input element, use the ",(0,jsx_runtime.jsx)(_components.code,{children:"inputRef"})," prop"]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-checkbox--input-props"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Checkbox } from '../../component-library';\n\n<Checkbox\n  label=\"inputProps demo\"\n  inputProps={{ borderColor: BorderColor.errorDefault }}\n/>;\n"})})]})}const README=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var _DefaultStory$paramet,_DefaultStory$paramet2,_Label$parameters,_Label$parameters2,_Id$parameters,_Id$parameters2,_IsChecked$parameters,_IsChecked$parameters2,_IsIndeterminate$para,_IsIndeterminate$para2,_IsDisabled$parameter,_IsDisabled$parameter2,_IsReadOnly$parameter,_IsReadOnly$parameter2,_OnChange$parameters,_OnChange$parameters2,_IsRequired$parameter,_IsRequired$parameter2,_Title$parameters,_Title$parameters2,_Name$parameters,_Name$parameters2,_InputProps$parameter,_InputProps$parameter2,component_library_checkbox=__webpack_require__("./ui/components/component-library/checkbox/index.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const checkbox_stories={title:"Components/ComponentLibrary/Checkbox",component:component_library_checkbox.X,parameters:{docs:{page:README}},argTypes:{label:{control:"text"},name:{control:"text"},id:{control:"text"}}},Template=args=>{const[{isChecked},updateArgs]=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)();return react.createElement(component_library_checkbox.X,_extends({},args,{onChange:()=>updateArgs({isChecked:!isChecked}),isChecked}))},DefaultStory=Template.bind({});DefaultStory.storyName="Default";const Label=Template.bind({});Label.args={label:"Checkbox label"};const Id=Template.bind({});Id.args={label:"Id demo",id:"id-demo"};const IsChecked=Template.bind({});IsChecked.args={isChecked:!0,label:"isChecked demo"};const IsIndeterminate=args=>{const[checkedItems,setCheckedItems]=react.useState([!1,!0,!1]),allChecked=checkedItems.every(Boolean),isIndeterminate=checkedItems.some(Boolean)&&!allChecked,handleCheckboxChange=(index,value)=>{const newCheckedItems=[...checkedItems];newCheckedItems[index]=value,setCheckedItems(newCheckedItems)};return react.createElement("div",null,react.createElement(component_library_checkbox.X,_extends({},args,{isChecked:allChecked,isIndeterminate,onChange:()=>{setCheckedItems(allChecked||isIndeterminate?[!1,!1,!1]:[!0,!0,!0])},marginBottom:2})),react.createElement(component_library.xu,{marginLeft:2,gap:1,display:design_system.sS.Flex,flexDirection:design_system.Qb.Column},react.createElement(component_library_checkbox.X,{isChecked:checkedItems[0],onChange:e=>handleCheckboxChange(0,e.target.checked),label:"Checkbox 1"}),react.createElement(component_library_checkbox.X,{isChecked:checkedItems[1],onChange:e=>handleCheckboxChange(1,e.target.checked),label:"Checkbox 2"}),react.createElement(component_library_checkbox.X,{isChecked:checkedItems[2],onChange:e=>handleCheckboxChange(2,e.target.checked),label:"Checkbox 3"})))};IsIndeterminate.args={label:"isIndeterminate demo",isIndeterminate:!0};const IsDisabled=Template.bind({});IsDisabled.args={isDisabled:!0,label:"isDisabled demo"};const IsReadOnly=Template.bind({});IsReadOnly.args={isReadOnly:!0,isChecked:!0,label:"isReadOnly demo"};const OnChange=Template.bind({});OnChange.args={label:"onChange demo"};const IsRequired=Template.bind({});IsRequired.args={isRequired:!0,isChecked:!0,label:"isRequired demo"};const Title=Template.bind({});Title.args={title:"Apples",label:"Inspect to see title attribute"};const Name=Template.bind({});Name.args={name:"pineapple",label:"Inspect to see name attribute"};const InputProps=Template.bind({});InputProps.args={inputProps:{borderColor:design_system.kf.errorDefault},label:"inputProps demo"},DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => {\n  const [{\n    isChecked\n  }, updateArgs] = useArgs();\n  return <Checkbox {...args} onChange={() => updateArgs({\n    isChecked: !isChecked\n  })} isChecked={isChecked} />;\n}",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source}}},Label.parameters={...Label.parameters,docs:{...null===(_Label$parameters=Label.parameters)||void 0===_Label$parameters?void 0:_Label$parameters.docs,source:{originalSource:"args => {\n  const [{\n    isChecked\n  }, updateArgs] = useArgs();\n  return <Checkbox {...args} onChange={() => updateArgs({\n    isChecked: !isChecked\n  })} isChecked={isChecked} />;\n}",...null===(_Label$parameters2=Label.parameters)||void 0===_Label$parameters2||null===(_Label$parameters2=_Label$parameters2.docs)||void 0===_Label$parameters2?void 0:_Label$parameters2.source}}},Id.parameters={...Id.parameters,docs:{...null===(_Id$parameters=Id.parameters)||void 0===_Id$parameters?void 0:_Id$parameters.docs,source:{originalSource:"args => {\n  const [{\n    isChecked\n  }, updateArgs] = useArgs();\n  return <Checkbox {...args} onChange={() => updateArgs({\n    isChecked: !isChecked\n  })} isChecked={isChecked} />;\n}",...null===(_Id$parameters2=Id.parameters)||void 0===_Id$parameters2||null===(_Id$parameters2=_Id$parameters2.docs)||void 0===_Id$parameters2?void 0:_Id$parameters2.source}}},IsChecked.parameters={...IsChecked.parameters,docs:{...null===(_IsChecked$parameters=IsChecked.parameters)||void 0===_IsChecked$parameters?void 0:_IsChecked$parameters.docs,source:{originalSource:"args => {\n  const [{\n    isChecked\n  }, updateArgs] = useArgs();\n  return <Checkbox {...args} onChange={() => updateArgs({\n    isChecked: !isChecked\n  })} isChecked={isChecked} />;\n}",...null===(_IsChecked$parameters2=IsChecked.parameters)||void 0===_IsChecked$parameters2||null===(_IsChecked$parameters2=_IsChecked$parameters2.docs)||void 0===_IsChecked$parameters2?void 0:_IsChecked$parameters2.source}}},IsIndeterminate.parameters={...IsIndeterminate.parameters,docs:{...null===(_IsIndeterminate$para=IsIndeterminate.parameters)||void 0===_IsIndeterminate$para?void 0:_IsIndeterminate$para.docs,source:{originalSource:'args => {\n  const [checkedItems, setCheckedItems] = React.useState([false, true, false]);\n  const allChecked = checkedItems.every(Boolean);\n  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;\n  const handleIndeterminateChange = () => {\n    if (allChecked || isIndeterminate) {\n      setCheckedItems([false, false, false]);\n    } else {\n      setCheckedItems([true, true, true]);\n    }\n  };\n  const handleCheckboxChange = (index, value) => {\n    const newCheckedItems = [...checkedItems];\n    newCheckedItems[index] = value;\n    setCheckedItems(newCheckedItems);\n  };\n  return <div>\n      <Checkbox {...args} isChecked={allChecked} isIndeterminate={isIndeterminate} onChange={handleIndeterminateChange} marginBottom={2} />\n      <Box marginLeft={2} gap={1} display={Display.Flex} flexDirection={FlexDirection.Column}>\n        <Checkbox isChecked={checkedItems[0]} onChange={e => handleCheckboxChange(0, e.target.checked)} label="Checkbox 1" />\n        <Checkbox isChecked={checkedItems[1]} onChange={e => handleCheckboxChange(1, e.target.checked)} label="Checkbox 2" />\n        <Checkbox isChecked={checkedItems[2]} onChange={e => handleCheckboxChange(2, e.target.checked)} label="Checkbox 3" />\n      </Box>\n    </div>;\n}',...null===(_IsIndeterminate$para2=IsIndeterminate.parameters)||void 0===_IsIndeterminate$para2||null===(_IsIndeterminate$para2=_IsIndeterminate$para2.docs)||void 0===_IsIndeterminate$para2?void 0:_IsIndeterminate$para2.source}}},IsDisabled.parameters={...IsDisabled.parameters,docs:{...null===(_IsDisabled$parameter=IsDisabled.parameters)||void 0===_IsDisabled$parameter?void 0:_IsDisabled$parameter.docs,source:{originalSource:"args => {\n  const [{\n    isChecked\n  }, updateArgs] = useArgs();\n  return <Checkbox {...args} onChange={() => updateArgs({\n    isChecked: !isChecked\n  })} isChecked={isChecked} />;\n}",...null===(_IsDisabled$parameter2=IsDisabled.parameters)||void 0===_IsDisabled$parameter2||null===(_IsDisabled$parameter2=_IsDisabled$parameter2.docs)||void 0===_IsDisabled$parameter2?void 0:_IsDisabled$parameter2.source}}},IsReadOnly.parameters={...IsReadOnly.parameters,docs:{...null===(_IsReadOnly$parameter=IsReadOnly.parameters)||void 0===_IsReadOnly$parameter?void 0:_IsReadOnly$parameter.docs,source:{originalSource:"args => {\n  const [{\n    isChecked\n  }, updateArgs] = useArgs();\n  return <Checkbox {...args} onChange={() => updateArgs({\n    isChecked: !isChecked\n  })} isChecked={isChecked} />;\n}",...null===(_IsReadOnly$parameter2=IsReadOnly.parameters)||void 0===_IsReadOnly$parameter2||null===(_IsReadOnly$parameter2=_IsReadOnly$parameter2.docs)||void 0===_IsReadOnly$parameter2?void 0:_IsReadOnly$parameter2.source}}},OnChange.parameters={...OnChange.parameters,docs:{...null===(_OnChange$parameters=OnChange.parameters)||void 0===_OnChange$parameters?void 0:_OnChange$parameters.docs,source:{originalSource:"args => {\n  const [{\n    isChecked\n  }, updateArgs] = useArgs();\n  return <Checkbox {...args} onChange={() => updateArgs({\n    isChecked: !isChecked\n  })} isChecked={isChecked} />;\n}",...null===(_OnChange$parameters2=OnChange.parameters)||void 0===_OnChange$parameters2||null===(_OnChange$parameters2=_OnChange$parameters2.docs)||void 0===_OnChange$parameters2?void 0:_OnChange$parameters2.source}}},IsRequired.parameters={...IsRequired.parameters,docs:{...null===(_IsRequired$parameter=IsRequired.parameters)||void 0===_IsRequired$parameter?void 0:_IsRequired$parameter.docs,source:{originalSource:"args => {\n  const [{\n    isChecked\n  }, updateArgs] = useArgs();\n  return <Checkbox {...args} onChange={() => updateArgs({\n    isChecked: !isChecked\n  })} isChecked={isChecked} />;\n}",...null===(_IsRequired$parameter2=IsRequired.parameters)||void 0===_IsRequired$parameter2||null===(_IsRequired$parameter2=_IsRequired$parameter2.docs)||void 0===_IsRequired$parameter2?void 0:_IsRequired$parameter2.source}}},Title.parameters={...Title.parameters,docs:{...null===(_Title$parameters=Title.parameters)||void 0===_Title$parameters?void 0:_Title$parameters.docs,source:{originalSource:"args => {\n  const [{\n    isChecked\n  }, updateArgs] = useArgs();\n  return <Checkbox {...args} onChange={() => updateArgs({\n    isChecked: !isChecked\n  })} isChecked={isChecked} />;\n}",...null===(_Title$parameters2=Title.parameters)||void 0===_Title$parameters2||null===(_Title$parameters2=_Title$parameters2.docs)||void 0===_Title$parameters2?void 0:_Title$parameters2.source}}},Name.parameters={...Name.parameters,docs:{...null===(_Name$parameters=Name.parameters)||void 0===_Name$parameters?void 0:_Name$parameters.docs,source:{originalSource:"args => {\n  const [{\n    isChecked\n  }, updateArgs] = useArgs();\n  return <Checkbox {...args} onChange={() => updateArgs({\n    isChecked: !isChecked\n  })} isChecked={isChecked} />;\n}",...null===(_Name$parameters2=Name.parameters)||void 0===_Name$parameters2||null===(_Name$parameters2=_Name$parameters2.docs)||void 0===_Name$parameters2?void 0:_Name$parameters2.source}}},InputProps.parameters={...InputProps.parameters,docs:{...null===(_InputProps$parameter=InputProps.parameters)||void 0===_InputProps$parameter?void 0:_InputProps$parameter.docs,source:{originalSource:"args => {\n  const [{\n    isChecked\n  }, updateArgs] = useArgs();\n  return <Checkbox {...args} onChange={() => updateArgs({\n    isChecked: !isChecked\n  })} isChecked={isChecked} />;\n}",...null===(_InputProps$parameter2=InputProps.parameters)||void 0===_InputProps$parameter2||null===(_InputProps$parameter2=_InputProps$parameter2.docs)||void 0===_InputProps$parameter2?void 0:_InputProps$parameter2.source}}};const __namedExportsOrder=["DefaultStory","Label","Id","IsChecked","IsIndeterminate","IsDisabled","IsReadOnly","OnChange","IsRequired","Title","Name","InputProps"];try{IsIndeterminate.displayName="IsIndeterminate",IsIndeterminate.__docgenInfo={description:"",displayName:"IsIndeterminate",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/checkbox/checkbox.stories.tsx#IsIndeterminate"]={docgenInfo:IsIndeterminate.__docgenInfo,name:"IsIndeterminate",path:"ui/components/component-library/checkbox/checkbox.stories.tsx#IsIndeterminate"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);