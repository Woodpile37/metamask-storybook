"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[7182],{"./ui/components/ui/tabs/tabs.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,DropdownStory:()=>DropdownStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DefaultStory$paramet,_DefaultStory$paramet2,_DropdownStory$parame,_DropdownStory$parame2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_snaps_dropdown_tab__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/ui/tabs/snaps/dropdown-tab/index.js"),_tab_tab_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/ui/tabs/tab/tab.component.js"),_tabs_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/ui/tabs/tabs.component.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/UI/Tabs",argTypes:{tabs:{control:"object",name:"Tabs"},defaultActiveTabKey:{control:{type:"text"}},onTabClick:{action:"onTabClick"},onChange:{action:"onChange"}},args:{tabs:[{name:"Tab A",content:"Tab A Content"},{name:"Tab B",content:"Tab B Content"},{name:"Tab C",content:"Tab C Content"}]}};const DefaultStory=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tabs_component__WEBPACK_IMPORTED_MODULE_3__.Z,{defaultActiveTabKey:args.defaultActiveTabKey,onTabClick:args.onTabClick},args.tabs.map(((tabProps,i)=>function renderTab({name,content},index){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tab_tab_component__WEBPACK_IMPORTED_MODULE_2__.Z,{tabKey:name,key:name+index,name},content)}(tabProps,i,args.t))));DefaultStory.storyName="Default";const DropdownStory=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tabs_component__WEBPACK_IMPORTED_MODULE_3__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_snaps_dropdown_tab__WEBPACK_IMPORTED_MODULE_1__.Z,{options:[{name:"Insight Snap",value:"Insight Snap"},{name:"Tenderly Insight",value:"Tenderly Insight"}],onChange:args.onChange},"This is a dropdown Tab"));DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => {\n  return <Tabs defaultActiveTabKey={args.defaultActiveTabKey} onTabClick={args.onTabClick}>\n      {args.tabs.map((tabProps, i) => renderTab(tabProps, i, args.t))}\n    </Tabs>;\n}",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source}}},DropdownStory.parameters={...DropdownStory.parameters,docs:{...null===(_DropdownStory$parame=DropdownStory.parameters)||void 0===_DropdownStory$parame?void 0:_DropdownStory$parame.docs,source:{originalSource:"args => {\n  return <Tabs>\n      <DropdownTab options={[{\n      name: 'Insight Snap',\n      value: 'Insight Snap'\n    }, {\n      name: 'Tenderly Insight',\n      value: 'Tenderly Insight'\n    }]} onChange={args.onChange}>\n        This is a dropdown Tab\n      </DropdownTab>\n    </Tabs>;\n}",...null===(_DropdownStory$parame2=DropdownStory.parameters)||void 0===_DropdownStory$parame2||null===(_DropdownStory$parame2=_DropdownStory$parame2.docs)||void 0===_DropdownStory$parame2?void 0:_DropdownStory$parame2.source}}};const __namedExportsOrder=["DefaultStory","DropdownStory"];DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"},DropdownStory.__docgenInfo={description:"",methods:[],displayName:"DropdownStory"}},"./ui/components/ui/tabs/snaps/dropdown-tab/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>dropdown_tab});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),dropdown=__webpack_require__("./ui/components/ui/dropdown/index.js");const DropdownTab=({activeClassName,className,"data-testid":dataTestId,isActive,onClick,onChange,tabIndex,options,selectedOption})=>{var _options$find;const[isOpen,setIsOpen]=(0,react.useState)(!1),dropdownRef=(0,react.useRef)(null),selectOption=(0,react.useCallback)((option=>{onChange(option)}),[onChange]),selectedOptionName=null===(_options$find=options.find((option=>option.value===selectedOption)))||void 0===_options$find?void 0:_options$find.name;return(0,react.useEffect)((()=>{function handleClickOutside(event){dropdownRef.current&&!dropdownRef.current.contains(event.target)&&isOpen&&setIsOpen(!1)}return document.addEventListener("mousedown",handleClickOutside),()=>{document.removeEventListener("mousedown",handleClickOutside)}}),[dropdownRef,isOpen]),react.createElement(component_library.xu,{as:"li",className:classnames_default()("tab",className,"transaction-insight-dropdown-wrapper",{"tab--active":isActive,[activeClassName]:activeClassName&&isActive}),"data-testid":dataTestId,onClick:event=>{event.preventDefault(),onClick(tabIndex)},dataTestId,flexDirection:design_system.Qb.Row,flexWrap:design_system.gP.NoWrap,height:design_system.Sw.Full,style:{cursor:"pointer",position:"relative",overflow:"visible"},title:selectedOptionName},react.createElement(dropdown.Z,{className:"transaction-insight-dropdown",onChange:option=>selectOption(option),options,selectedOption,title:"Transaction Insights",style:{pointerEvents:isActive?"auto":"none"}}))};DropdownTab.propTypes={activeClassName:prop_types_default().string,className:prop_types_default().string,"data-testid":prop_types_default().string,isActive:prop_types_default().bool,options:prop_types_default().arrayOf(prop_types_default().exact({name:prop_types_default().string,value:prop_types_default().string.isRequired})).isRequired,selectedOption:prop_types_default().string,onChange:prop_types_default().func,onClick:prop_types_default().func,tabIndex:prop_types_default().number},DropdownTab.defaultProps={activeClassName:void 0,className:void 0,onChange:void 0,onClick:void 0,selectedOption:void 0},DropdownTab.__docgenInfo={description:"",methods:[],displayName:"DropdownTab",props:{activeClassName:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},className:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},onChange:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},selectedOption:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},"data-testid":{description:"",type:{name:"string"},required:!1},isActive:{description:"",type:{name:"bool"},required:!1},options:{description:"",type:{name:"arrayOf",value:{name:"exact",value:{name:{name:"string",required:!1},value:{name:"string",required:!0}}}},required:!0},tabIndex:{description:"",type:{name:"number"},required:!1}}};const dropdown_tab=DropdownTab}}]);