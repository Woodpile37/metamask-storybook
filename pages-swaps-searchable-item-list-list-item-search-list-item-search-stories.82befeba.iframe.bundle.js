"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[2966],{"./ui/pages/swaps/searchable-item-list/list-item-search/list-item-search.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DefaultStory$paramet,_DefaultStory$paramet2,_DefaultStory$paramet3,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/pages/swaps/searchable-item-list/list-item-search/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Pages/Swaps/SearchableItemList/ListItemSearch",argTypes:{onSearch:{action:"onSearch"},error:{control:"text"},listToSearch:{control:"select"},fuseSearchKeys:{control:"select"},searchPlaceholderText:{control:"text"},defaultToAll:{control:"boolean"},shouldSearchForImports:{control:"boolean"}}},DefaultStory=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.Z,args);DefaultStory.storyName="Default",DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => {\n  return <ListItemSearch {...args} />;\n}",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet3=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet3?void 0:_DefaultStory$paramet3.source}}};const __namedExportsOrder=["DefaultStory"];DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"}},"./ui/components/ui/icon/search-icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);const SearchIcon=({size=24,color="currentColor",ariaLabel,className})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:size,height:size,fill:color,className,"aria-label":ariaLabel,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"m235 427c-51 0-100-21-136-57-36-36-56-84-56-135 0-26 5-51 14-74 10-23 24-44 42-62 18-18 39-32 62-42 23-9 48-14 74-14 25 0 50 5 73 14 23 10 45 24 62 42 18 18 32 39 42 62 10 23 15 48 15 74 0 43-15 86-42 119l78 79c2 2 4 4 5 7 1 2 1 5 1 8 0 3 0 6-1 8-1 3-3 5-5 7-2 2-4 4-7 5-2 1-5 1-8 1-3 0-6 0-8-1-3-1-5-3-7-5l-79-78c-33 27-76 42-119 42z m0-43c82 0 149-67 149-149 0-83-67-150-149-150-83 0-150 67-150 150 0 82 67 149 150 149z"}));SearchIcon.propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,color:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,ariaLabel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},SearchIcon.__docgenInfo={description:"@deprecated This has been deprecated in favor of the `<Icon />` component in ./ui/components/component-library/icon/icon.js\nSee storybook documentation for Icon here https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-icon--default-story#icon",methods:[],displayName:"SearchIcon",props:{size:{defaultValue:{value:"24",computed:!1},description:"The size of the Icon follows an 8px grid 2 = 16px, 3 = 24px etc",type:{name:"number"},required:!1},color:{defaultValue:{value:"'currentColor'",computed:!1},description:"The color of the icon accepts design token css variables",type:{name:"string"},required:!1},className:{description:"An additional className to assign the Icon",type:{name:"string"},required:!1},ariaLabel:{description:"The aria-label of the icon for accessibility purposes",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=SearchIcon},"./ui/hooks/usePrevious.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>usePrevious});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function usePrevious(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{ref.current=value}),[value]),ref.current}},"./ui/pages/swaps/searchable-item-list/list-item-search/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ListItemSearch});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),fuse=__webpack_require__("./node_modules/fuse.js/dist/fuse.js"),fuse_default=__webpack_require__.n(fuse),loglevel=__webpack_require__("./node_modules/loglevel/lib/loglevel.js"),loglevel_default=__webpack_require__.n(loglevel),InputAdornment=__webpack_require__("./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js"),text_field=__webpack_require__("./ui/components/ui/text-field/index.js"),usePrevious=__webpack_require__("./ui/hooks/usePrevious.js"),hexstring_utils=__webpack_require__("./shared/modules/hexstring-utils.ts"),swaps_util=__webpack_require__("./ui/pages/swaps/swaps.util.ts"),selectors=__webpack_require__("./ui/selectors/selectors.js"),search_icon=__webpack_require__("./ui/components/ui/icon/search-icon.js");const renderAdornment=()=>react.createElement(InputAdornment.Z,{position:"start",style:{marginRight:"12px"}},react.createElement(search_icon.Z,{size:20,color:"var(--color-icon-muted)"}));let timeoutIdForSearch;function ListItemSearch({onSearch,error,listToSearch=[],fuseSearchKeys,searchPlaceholderText,defaultToAll,shouldSearchForImports,searchQuery,setSearchQuery}){const fuseRef=(0,react.useRef)(),chainId=(0,es.v9)(selectors.BV),handleSearch=async newSearchQuery=>{setSearchQuery(newSearchQuery),timeoutIdForSearch&&clearTimeout(timeoutIdForSearch),timeoutIdForSearch=setTimeout((async()=>{timeoutIdForSearch=null;const trimmedNewSearchQuery=newSearchQuery.trim(),validHexAddress=(0,hexstring_utils.Pv)(trimmedNewSearchQuery),fuseSearchResult=fuseRef.current.search(newSearchQuery),results=defaultToAll&&""===newSearchQuery?listToSearch:fuseSearchResult;shouldSearchForImports&&0===results.length&&validHexAddress?await(async contractAddress=>{try{const token=await(0,swaps_util.EC)(contractAddress,chainId);if(token)return token.primaryLabel=token.symbol,token.secondaryLabel=token.name,token.notImported=!0,void onSearch({searchQuery:contractAddress,results:[token]})}catch(e){loglevel_default().error("Token not found, show 0 results.",e)}onSearch({searchQuery:contractAddress,results:[]})})(trimmedNewSearchQuery):onSearch({searchQuery:newSearchQuery,results})}),350)};(0,react.useEffect)((()=>()=>clearTimeout(timeoutIdForSearch)),[]),(0,react.useEffect)((()=>{fuseRef.current||(fuseRef.current=new(fuse_default())(listToSearch,{shouldSort:!0,threshold:.45,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,keys:fuseSearchKeys}))}),[fuseSearchKeys,listToSearch]);const previousListToSearch=(0,usePrevious.D)(listToSearch??[]);return(0,react.useEffect)((()=>{if(fuseRef.current&&searchQuery&&previousListToSearch!==listToSearch){fuseRef.current.setCollection(listToSearch);const fuseSearchResult=fuseRef.current.search(searchQuery);onSearch({searchQuery,results:fuseSearchResult})}}),[listToSearch,searchQuery,onSearch,previousListToSearch]),react.createElement(text_field.Z,{"data-testid":"search-list-items",className:"searchable-item-list__search",placeholder:searchPlaceholderText,type:"text",value:searchQuery,onChange:e=>handleSearch(e.target.value),error,fullWidth:!0,startAdornment:renderAdornment(),autoComplete:"off",autoFocus:!0})}ListItemSearch.propTypes={onSearch:prop_types_default().func,error:prop_types_default().string,listToSearch:prop_types_default().array.isRequired,fuseSearchKeys:prop_types_default().arrayOf(prop_types_default().object).isRequired,searchPlaceholderText:prop_types_default().string,defaultToAll:prop_types_default().bool,shouldSearchForImports:prop_types_default().bool,searchQuery:prop_types_default().string,setSearchQuery:prop_types_default().func},ListItemSearch.__docgenInfo={description:"",methods:[],displayName:"ListItemSearch",props:{listToSearch:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},onSearch:{description:"",type:{name:"func"},required:!1},error:{description:"",type:{name:"string"},required:!1},fuseSearchKeys:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!0},searchPlaceholderText:{description:"",type:{name:"string"},required:!1},defaultToAll:{description:"",type:{name:"bool"},required:!1},shouldSearchForImports:{description:"",type:{name:"bool"},required:!1},searchQuery:{description:"",type:{name:"string"},required:!1},setSearchQuery:{description:"",type:{name:"func"},required:!1}}}}}]);