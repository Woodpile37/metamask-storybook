"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[5770],{"./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>InputAdornment_InputAdornment});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),withStyles=__webpack_require__("./node_modules/@material-ui/core/esm/styles/withStyles.js"),capitalize=__webpack_require__("./node_modules/@material-ui/core/esm/utils/capitalize.js"),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},Typography=react.forwardRef((function Typography(props,ref){var _props$align=props.align,align=void 0===_props$align?"inherit":_props$align,classes=props.classes,className=props.className,_props$color=props.color,color=void 0===_props$color?"initial":_props$color,component=props.component,_props$display=props.display,display=void 0===_props$display?"initial":_props$display,_props$gutterBottom=props.gutterBottom,gutterBottom=void 0!==_props$gutterBottom&&_props$gutterBottom,_props$noWrap=props.noWrap,noWrap=void 0!==_props$noWrap&&_props$noWrap,_props$paragraph=props.paragraph,paragraph=void 0!==_props$paragraph&&_props$paragraph,_props$variant=props.variant,variant=void 0===_props$variant?"body1":_props$variant,_props$variantMapping=props.variantMapping,variantMapping=void 0===_props$variantMapping?defaultVariantMapping:_props$variantMapping,other=(0,objectWithoutProperties.Z)(props,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span";return react.createElement(Component,(0,esm_extends.Z)({className:(0,clsx_m.Z)(classes.root,className,"inherit"!==variant&&classes[variant],"initial"!==color&&classes["color".concat((0,capitalize.Z)(color))],noWrap&&classes.noWrap,gutterBottom&&classes.gutterBottom,paragraph&&classes.paragraph,"inherit"!==align&&classes["align".concat((0,capitalize.Z)(align))],"initial"!==display&&classes["display".concat((0,capitalize.Z)(display))]),ref},other))}));const Typography_Typography=(0,withStyles.Z)((function styles(theme){return{root:{margin:0},body2:theme.typography.body2,body1:theme.typography.body1,caption:theme.typography.caption,button:theme.typography.button,h1:theme.typography.h1,h2:theme.typography.h2,h3:theme.typography.h3,h4:theme.typography.h4,h5:theme.typography.h5,h6:theme.typography.h6,subtitle1:theme.typography.subtitle1,subtitle2:theme.typography.subtitle2,overline:theme.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:theme.palette.primary.main},colorSecondary:{color:theme.palette.secondary.main},colorTextPrimary:{color:theme.palette.text.primary},colorTextSecondary:{color:theme.palette.text.secondary},colorError:{color:theme.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(Typography);var FormControlContext=__webpack_require__("./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js"),InputAdornment=react.forwardRef((function InputAdornment(props,ref){var children=props.children,classes=props.classes,className=props.className,_props$component=props.component,Component=void 0===_props$component?"div":_props$component,_props$disablePointer=props.disablePointerEvents,disablePointerEvents=void 0!==_props$disablePointer&&_props$disablePointer,_props$disableTypogra=props.disableTypography,disableTypography=void 0!==_props$disableTypogra&&_props$disableTypogra,position=props.position,variantProp=props.variant,other=(0,objectWithoutProperties.Z)(props,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),muiFormControl=(0,FormControlContext.Y)()||{},variant=variantProp;return variantProp&&muiFormControl.variant,muiFormControl&&!variant&&(variant=muiFormControl.variant),react.createElement(FormControlContext.Z.Provider,{value:null},react.createElement(Component,(0,esm_extends.Z)({className:(0,clsx_m.Z)(classes.root,className,disablePointerEvents&&classes.disablePointerEvents,muiFormControl.hiddenLabel&&classes.hiddenLabel,"filled"===variant&&classes.filled,{start:classes.positionStart,end:classes.positionEnd}[position],"dense"===muiFormControl.margin&&classes.marginDense),ref},other),"string"!=typeof children||disableTypography?children:react.createElement(Typography_Typography,{color:"textSecondary"},children)))}));const InputAdornment_InputAdornment=(0,withStyles.Z)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(InputAdornment)},"./ui/pages/settings/settings-search/settings-search.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SettingsSearchComponent:()=>SettingsSearchComponent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _SettingsSearchCompon,_SettingsSearchCompon2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_settings_search__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/pages/settings/settings-search/settings-search.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Pages/Settings/SettingsSearch"},SettingsSearchComponent=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_settings_search__WEBPACK_IMPORTED_MODULE_1__.Z,{onSearch:!0,settingsRoutesList:!0});SettingsSearchComponent.parameters={...SettingsSearchComponent.parameters,docs:{...null===(_SettingsSearchCompon=SettingsSearchComponent.parameters)||void 0===_SettingsSearchCompon?void 0:_SettingsSearchCompon.docs,source:{originalSource:"() => {\n  return <SettingsSearch onSearch settingsRoutesList />;\n}",...null===(_SettingsSearchCompon2=SettingsSearchComponent.parameters)||void 0===_SettingsSearchCompon2||null===(_SettingsSearchCompon2=_SettingsSearchCompon2.docs)||void 0===_SettingsSearchCompon2?void 0:_SettingsSearchCompon2.source}}};const __namedExportsOrder=["SettingsSearchComponent"];SettingsSearchComponent.__docgenInfo={description:"",methods:[],displayName:"SettingsSearchComponent"}},"./ui/components/ui/icon/search-icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);const SearchIcon=({size=24,color="currentColor",ariaLabel,className})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:size,height:size,fill:color,className,"aria-label":ariaLabel,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"m235 427c-51 0-100-21-136-57-36-36-56-84-56-135 0-26 5-51 14-74 10-23 24-44 42-62 18-18 39-32 62-42 23-9 48-14 74-14 25 0 50 5 73 14 23 10 45 24 62 42 18 18 32 39 42 62 10 23 15 48 15 74 0 43-15 86-42 119l78 79c2 2 4 4 5 7 1 2 1 5 1 8 0 3 0 6-1 8-1 3-3 5-5 7-2 2-4 4-7 5-2 1-5 1-8 1-3 0-6 0-8-1-3-1-5-3-7-5l-79-78c-33 27-76 42-119 42z m0-43c82 0 149-67 149-149 0-83-67-150-149-150-83 0-150 67-150 150 0 82 67 149 150 149z"}));SearchIcon.propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,color:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,ariaLabel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},SearchIcon.__docgenInfo={description:"@deprecated This has been deprecated in favor of the `<Icon />` component in ./ui/components/component-library/icon/icon.js\nSee storybook documentation for Icon here https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-icon--default-story#icon",methods:[],displayName:"SearchIcon",props:{size:{defaultValue:{value:"24",computed:!1},description:"The size of the Icon follows an 8px grid 2 = 16px, 3 = 24px etc",type:{name:"number"},required:!1},color:{defaultValue:{value:"'currentColor'",computed:!1},description:"The color of the icon accepts design token css variables",type:{name:"string"},required:!1},className:{description:"An additional className to assign the Icon",type:{name:"string"},required:!1},ariaLabel:{description:"The aria-label of the icon for accessibility purposes",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=SearchIcon},"./ui/pages/settings/settings-search/settings-search.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>SettingsSearch});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__),fuse_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fuse.js/dist/fuse.js"),fuse_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_1__),_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js"),_components_ui_text_field__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/ui/text-field/index.js"),_contexts_i18n__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/contexts/i18n.js"),_components_ui_icon_search_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/components/ui/icon/search-icon.js"),_shared_modules_string_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./shared/modules/string-utils.ts"),_components_component_library__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/components/component-library/index.ts"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ui/helpers/constants/design-system.ts");function SettingsSearch({onSearch,error,settingsRoutesList}){const t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_i18n__WEBPACK_IMPORTED_MODULE_3__.OO),[searchQuery,setSearchQuery]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[searchIconColor,setSearchIconColor]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("var(--color-icon-muted)"),settingsRoutesListArray=Object.values(settingsRoutesList),settingsSearchFuse=new(fuse_js__WEBPACK_IMPORTED_MODULE_1___default())(settingsRoutesListArray,{shouldSort:!0,threshold:.3,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,keys:["tabMessage","sectionMessage","descriptionMessage"],getFn:(routeObject,path)=>routeObject[path](t)}),handleSearch=_searchQuery=>{const sanitizedSearchQuery=_searchQuery.trimStart();setSearchQuery(sanitizedSearchQuery),setSearchIconColor(""===sanitizedSearchQuery?"var(--color-icon-muted)":"var(--color-icon-default)");const fuseSearchResult=settingsSearchFuse.search(sanitizedSearchQuery),results=[...settingsRoutesListArray.filter((routes=>routes.tabMessage&&sanitizedSearchQuery&&(0,_shared_modules_string_utils__WEBPACK_IMPORTED_MODULE_7__.J)(routes.tab,sanitizedSearchQuery))),...fuseSearchResult];onSearch({searchQuery:sanitizedSearchQuery,results})};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_text_field__WEBPACK_IMPORTED_MODULE_2__.Z,{id:"search-settings",placeholder:t("search"),type:"text",value:searchQuery,onChange:e=>handleSearch(e.target.value),error,fullWidth:!0,autoFocus:!0,autoComplete:"off",startAdornment:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_8__.Z,{position:"start",style:{marginRight:"12px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_icon_search_icon__WEBPACK_IMPORTED_MODULE_4__.Z,{color:searchIconColor})),endAdornment:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,searchQuery&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_8__.Z,{className:"imageclosectn",position:"end",onClick:()=>handleSearch(""),style:{cursor:"pointer"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_component_library__WEBPACK_IMPORTED_MODULE_5__.JO,{name:_components_component_library__WEBPACK_IMPORTED_MODULE_5__.uH.Close,color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_6__.EY.iconDefault})))})}SettingsSearch.propTypes={onSearch:prop_types__WEBPACK_IMPORTED_MODULE_9___default().func,error:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,settingsRoutesList:prop_types__WEBPACK_IMPORTED_MODULE_9___default().array},SettingsSearch.__docgenInfo={description:"",methods:[],displayName:"SettingsSearch",props:{onSearch:{description:"",type:{name:"func"},required:!1},error:{description:"",type:{name:"string"},required:!1},settingsRoutesList:{description:"",type:{name:"array"},required:!1}}}}}]);