"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[6402],{"./ui/pages/permissions-connect/snaps/snap-install/snap-install.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,LoadingStory:()=>LoadingStory,ScrollingStory:()=>ScrollingStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>snap_install_stories});var _DefaultStory$paramet,_DefaultStory$paramet2,_DefaultStory$paramet3,_LoadingStory$paramet,_LoadingStory$paramet2,_LoadingStory$paramet3,_ScrollingStory$param,_ScrollingStory$param2,_ScrollingStory$param3,react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),store=__webpack_require__("./ui/store/store.ts"),mock_state=__webpack_require__("./test/data/mock-state.json"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),page_container=__webpack_require__("./ui/components/ui/page-container/index.js"),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js"),snap_install_warning=__webpack_require__("./ui/components/app/snaps/snap-install-warning/index.js"),box=__webpack_require__("./ui/components/ui/box/box.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),util=__webpack_require__("./ui/pages/permissions-connect/snaps/util.js"),pulse_loader=__webpack_require__("./ui/components/ui/pulse-loader/pulse-loader.js"),snap_authorship_header=__webpack_require__("./ui/components/app/snaps/snap-authorship-header/index.js"),component_library=__webpack_require__("./ui/components/component-library/index.js"),utils_util=__webpack_require__("./ui/helpers/utils/util.js"),snap_permissions_list=__webpack_require__("./ui/components/app/snaps/snap-permissions-list/index.js"),useScrollRequired=__webpack_require__("./ui/hooks/useScrollRequired.js"),site_origin=__webpack_require__("./ui/components/ui/site-origin/site-origin.js"),install_error=__webpack_require__("./ui/components/app/snaps/install-error/install-error.js"),useOriginMetadata=__webpack_require__("./ui/hooks/useOriginMetadata.js");function SnapInstall({request,requestState,approveSnapInstall,rejectSnapInstall,targetSubjectMetadata}){var _request$metadata;const t=(0,useI18nContext.C)(),siteMetadata=(0,useOriginMetadata.j)(null==request||null===(_request$metadata=request.metadata)||void 0===_request$metadata?void 0:_request$metadata.dappOrigin)||{},{origin,iconUrl,name}=siteMetadata,[isShowingWarning,setIsShowingWarning]=(0,react.useState)(!1),{isScrollable,isScrolledToBottom,scrollToBottom,ref,onScroll}=(0,useScrollRequired.s)([requestState]),onCancel=(0,react.useCallback)((()=>rejectSnapInstall(request.metadata.id)),[request,rejectSnapInstall]),onSubmit=(0,react.useCallback)((()=>approveSnapInstall(request.metadata.id)),[request,approveSnapInstall]),hasError=!requestState.loading&&requestState.error,isLoading=requestState.loading,warnings=(0,util.Y)((null==requestState?void 0:requestState.permissions)??{},targetSubjectMetadata,t),shouldShowWarning=warnings.length>0,snapName=(0,utils_util.NZ)(targetSubjectMetadata.origin,targetSubjectMetadata);return react.createElement(box.ZP,{className:"page-container snap-install",justifyContent:design_system.E0.spaceBetween,height:design_system.D8.FULL,borderStyle:design_system.N4.none,flexDirection:design_system.uM.COLUMN},isLoading||hasError?react.createElement(box.ZP,{width:"full",alignItems:design_system.g1.center,justifyContent:design_system.E0.center,paddingTop:4},react.createElement(site_origin.Z,{chip:!0,siteOrigin:origin,title:origin,iconSrc:iconUrl,iconName:name})):react.createElement(snap_authorship_header.Z,{snapId:targetSubjectMetadata.origin}),react.createElement(box.ZP,{ref,onScroll,className:"snap-install__content",style:{overflowY:"auto",flex:!isLoading&&!hasError&&"1"}},isLoading&&react.createElement(box.ZP,{className:"snap-install__content__loader-container",flexDirection:design_system.uM.COLUMN,alignItems:design_system.g1.center,justifyContent:design_system.E0.center},react.createElement(pulse_loader.Z,null)),hasError&&react.createElement(install_error.Z,{iconName:component_library.uH.Warning,title:t("connectionFailed"),description:t("connectionFailedDescription",[react.createElement(component_library.xv,{as:component_library.Tc.Span,key:"1",fontWeight:design_system.U9.Medium},snapName)]),error:requestState.error}),!hasError&&!isLoading&&react.createElement(react.Fragment,null,react.createElement(component_library.xv,{variant:design_system.rK.headingLg,paddingTop:4,paddingBottom:2,textAlign:"center"},t("snapInstall")),react.createElement(component_library.xv,{className:"snap-install__content__permission-description",paddingBottom:4,paddingLeft:4,paddingRight:4,textAlign:design_system.I8.CENTER},t("snapInstallRequest",[react.createElement(component_library.xv,{as:component_library.Tc.Span,key:"2",variant:design_system.rK.bodyMd,fontWeight:design_system.U9.Medium},snapName)])),react.createElement(snap_permissions_list.Z,{permissions:requestState.permissions||{},targetSubjectMetadata}),isScrollable&&!isScrolledToBottom?react.createElement(component_library.fM,{className:"snap-install__scroll-button","data-testid":"snap-install-scroll",iconName:component_library.uH.Arrow2Down,backgroundColor:design_system.lP.infoDefault,color:design_system.EY.primaryInverse,onClick:scrollToBottom,style:{cursor:"pointer"}}):null)),react.createElement(box.ZP,{className:"snap-install__footer",alignItems:design_system.g1.center,flexDirection:design_system.uM.COLUMN,style:{boxShadow:"var(--shadow-size-lg) var(--color-shadow-default)"}},react.createElement(page_container.g$,{cancelButtonType:"default",hideCancel:hasError,disabled:isLoading||!hasError&&isScrollable&&!isScrolledToBottom,onCancel,cancelText:t("cancel"),onSubmit:()=>{!hasError&&shouldShowWarning?setIsShowingWarning(!0):hasError?onCancel():onSubmit()},submitText:t(hasError?"ok":isLoading?"connect":"install")})),isShowingWarning&&react.createElement(snap_install_warning.Z,{onCancel:()=>setIsShowingWarning(!1),onSubmit,warnings,snapName}))}SnapInstall.propTypes={request:prop_types_default().object.isRequired,requestState:prop_types_default().object.isRequired,approveSnapInstall:prop_types_default().func.isRequired,rejectSnapInstall:prop_types_default().func.isRequired,targetSubjectMetadata:prop_types_default().shape({iconUrl:prop_types_default().string,name:prop_types_default().string,origin:prop_types_default().string.isRequired,sourceCode:prop_types_default().string,version:prop_types_default().string}).isRequired},SnapInstall.__docgenInfo={description:"",methods:[],displayName:"SnapInstall",props:{request:{description:"",type:{name:"object"},required:!0},requestState:{description:"",type:{name:"object"},required:!0},approveSnapInstall:{description:"",type:{name:"func"},required:!0},rejectSnapInstall:{description:"",type:{name:"func"},required:!0},targetSubjectMetadata:{description:"",type:{name:"shape",value:{iconUrl:{name:"string",required:!1},name:{name:"string",required:!1},origin:{name:"string",required:!0},sourceCode:{name:"string",required:!1},version:{name:"string",required:!1}}},required:!0}}};const snap_install_stories_store=(0,store.Z)(mock_state),snap_install_stories={title:"Pages/Snaps/SnapInstall",component:SnapInstall,argTypes:{},decorators:[story=>react.createElement(es.zt,{store:snap_install_stories_store},story())]},DefaultStory=args=>react.createElement(SnapInstall,args);DefaultStory.storyName="Default",DefaultStory.args={request:{metadata:{id:"foo"}},requestState:{loading:!1,permissions:{"endowment:rpc":{caveats:[{type:"rpcOrigin",value:{dapps:!0}}]},snap_dialog:{},snap_getBip44Entropy:{caveats:[{type:"permittedCoinTypes",value:[{coinType:1}]}]}}},targetSubjectMetadata:{origin:"npm:@metamask/test-snap-bip44"}};const LoadingStory=args=>react.createElement(SnapInstall,args);LoadingStory.storyName="Loading",LoadingStory.args={request:{metadata:{id:"foo"}},requestState:{loading:!0},targetSubjectMetadata:{origin:"npm:@metamask/test-snap-bip44"}};const ScrollingStory=args=>react.createElement(SnapInstall,args);ScrollingStory.storyName="Scrolling",ScrollingStory.args={request:{metadata:{id:"foo"}},requestState:{loading:!1,permissions:{"endowment:rpc":{caveats:[{type:"rpcOrigin",value:{dapps:!0}}]},"endowment:network-access":{},snap_notify:{},snap_dialog:{},snap_getBip44Entropy:{caveats:[{type:"permittedCoinTypes",value:[{coinType:1}]}]}}},targetSubjectMetadata:{origin:"npm:@metamask/test-snap-bip44"}},DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => <SnapInstall {...args} />",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet3=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet3?void 0:_DefaultStory$paramet3.source}}},LoadingStory.parameters={...LoadingStory.parameters,docs:{...null===(_LoadingStory$paramet=LoadingStory.parameters)||void 0===_LoadingStory$paramet?void 0:_LoadingStory$paramet.docs,source:{originalSource:"args => <SnapInstall {...args} />",...null===(_LoadingStory$paramet2=LoadingStory.parameters)||void 0===_LoadingStory$paramet2||null===(_LoadingStory$paramet3=_LoadingStory$paramet2.docs)||void 0===_LoadingStory$paramet3?void 0:_LoadingStory$paramet3.source}}},ScrollingStory.parameters={...ScrollingStory.parameters,docs:{...null===(_ScrollingStory$param=ScrollingStory.parameters)||void 0===_ScrollingStory$param?void 0:_ScrollingStory$param.docs,source:{originalSource:"args => <SnapInstall {...args} />",...null===(_ScrollingStory$param2=ScrollingStory.parameters)||void 0===_ScrollingStory$param2||null===(_ScrollingStory$param3=_ScrollingStory$param2.docs)||void 0===_ScrollingStory$param3?void 0:_ScrollingStory$param3.source}}};const __namedExportsOrder=["DefaultStory","LoadingStory","ScrollingStory"];DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"},LoadingStory.__docgenInfo={description:"",methods:[],displayName:"LoadingStory"},ScrollingStory.__docgenInfo={description:"",methods:[],displayName:"ScrollingStory"}},"./ui/components/app/snaps/snap-install-warning/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>SnapInstallWarning});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),immer_esm=__webpack_require__("./node_modules/immer/dist/immer.esm.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js"),check_box_component=__webpack_require__("./ui/components/ui/check-box/check-box.component.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),popover=__webpack_require__("./ui/components/ui/popover/index.js"),ui_button=__webpack_require__("./ui/components/ui/button/index.js"),component_library=__webpack_require__("./ui/components/component-library/index.js"),box=__webpack_require__("./ui/components/ui/box/box.js");const checkboxStateReducer=(0,immer_esm.produce)(((state,action)=>{if("check"!==action.type)throw new Error("You must provide a type when dispatching an action for checkboxState");state[action.checkboxId]=!state[action.checkboxId]||!state[action.checkboxId]}));function SnapInstallWarning({onCancel,onSubmit,warnings,snapName}){const t=(0,useI18nContext.C)(),[checkboxState,dispatch]=(0,react.useReducer)(checkboxStateReducer,{}),isAllChecked=warnings.every((warning=>checkboxState[warning.id])),onCheckboxClicked=(0,react.useCallback)((checkboxId=>{dispatch({type:"check",checkboxId})}),[]),SnapInstallWarningFooter=()=>react.createElement("div",{className:"snap-install-warning__footer"},react.createElement(ui_button.Z,{className:"snap-install-warning__footer-button",type:"primary",disabled:!isAllChecked,onClick:onSubmit},t("confirm")));return react.createElement(popover.Z,{className:"snap-install-warning",footer:react.createElement(SnapInstallWarningFooter,null),headerProps:{padding:[6,6,0]},contentProps:{paddingLeft:[6,4],paddingRight:[6,4],paddingTop:0,paddingBottom:[6,4]},footerProps:{padding:[4,6]},onClose:onCancel},react.createElement(box.ZP,{justifyContent:design_system.E0.center,marginBottom:6},react.createElement(component_library.fM,{iconName:component_library.uH.Danger,backgroundColor:design_system.lP.warningMuted,color:design_system.EY.warningDefault,size:design_system.$u.XL})),react.createElement(component_library.xv,{paddingBottom:6,textAlign:design_system.PH.Center,variant:design_system.rK.headingMd,as:"h2"},t("snapInstallWarningHeading")),react.createElement(component_library.xv,{paddingBottom:6,textAlign:design_system.PH.Center},warnings.length>1?t("snapInstallWarningCheckPlural",[react.createElement(component_library.xv,{key:"snapNameInWarningDescription",fontWeight:design_system.U9.Medium,as:"span"},snapName)]):t("snapInstallWarningCheck",[react.createElement(component_library.xv,{key:"snapNameInWarningDescription",fontWeight:design_system.U9.Medium,as:"span"},snapName)])),warnings.map(((warning,i)=>react.createElement("div",{className:classnames_default()("checkbox-label",{"checkbox-label--first":0===i}),key:warning.id},react.createElement(check_box_component.ZP,{checked:checkboxState[warning.id]??!1,id:warning.id,onClick:()=>onCheckboxClicked(warning.id)}),react.createElement("label",{htmlFor:warning.id},react.createElement(component_library.xv,{variant:design_system.rK.bodyMd},warning.message))))))}SnapInstallWarning.propTypes={onCancel:prop_types_default().func,onSubmit:prop_types_default().func,warnings:prop_types_default().arrayOf({message:prop_types_default().node,id:prop_types_default().string}),snapName:prop_types_default().string.isRequired},SnapInstallWarning.__docgenInfo={description:"",methods:[],displayName:"SnapInstallWarning",props:{onCancel:{description:"onCancel handler",type:{name:"func"},required:!1},onSubmit:{description:"onSubmit handler",type:{name:"func"},required:!1},warnings:{description:"warnings list",type:{name:"arrayOf",value:{name:"custom",raw:"{\n  message: PropTypes.node,\n  id: PropTypes.string,\n}"}},required:!1},snapName:{description:"Snap name",type:{name:"string"},required:!0}}}},"./ui/components/ui/check-box/check-box.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Km:()=>INDETERMINATE,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,ri:()=>CHECKED,wT:()=>UNCHECKED});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);const CHECKBOX_STATE={CHECKED:"CHECKED",INDETERMINATE:"INDETERMINATE",UNCHECKED:"UNCHECKED"},{CHECKED,INDETERMINATE,UNCHECKED}=CHECKBOX_STATE,CheckBox=({className,disabled,id,onClick,checked,title,dataTestId})=>{"boolean"==typeof checked&&(checked=checked?CHECKBOX_STATE.CHECKED:CHECKBOX_STATE.UNCHECKED);const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{ref.current.indeterminate=checked===CHECKBOX_STATE.INDETERMINATE}),[checked]),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{checked:checked===CHECKBOX_STATE.CHECKED,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("check-box",className,{"far fa-square":checked===CHECKBOX_STATE.UNCHECKED,"fa fa-check-square check-box__checked":checked===CHECKBOX_STATE.CHECKED,"fa fa-minus-square check-box__indeterminate":checked===CHECKBOX_STATE.INDETERMINATE}),disabled,id,onClick:onClick?event=>{event.preventDefault(),onClick()}:null,readOnly:!0,ref,title,"data-testid":dataTestId,type:"checkbox"})};CheckBox.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,id:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,checked:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([...Object.keys(CHECKBOX_STATE),!0,!1]).isRequired,title:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string},CheckBox.defaultProps={className:void 0,disabled:!1,id:void 0},CheckBox.__docgenInfo={description:"",methods:[],displayName:"CheckBox",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"Add custom classname css",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Check if checkbox disabled or not",type:{name:"bool"},required:!1},id:{defaultValue:{value:"undefined",computed:!0},description:"Checkbox ID",type:{name:"string"},required:!1},onClick:{description:"Click handler",type:{name:"func"},required:!1},checked:{description:"Check if the checkbox are checked or not",type:{name:"enum",value:[{value:"...Object.keys(CHECKBOX_STATE)",computed:!0},{value:"true",computed:!1},{value:"false",computed:!1}]},required:!0},title:{description:"Show title",type:{name:"string"},required:!1},dataTestId:{description:"Data test ID for checkbox Component",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=CheckBox},"./ui/components/ui/site-origin/site-origin.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>SiteOrigin});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_chip__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/ui/chip/index.js"),_icon_with_fallback__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/ui/icon-with-fallback/index.js"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/helpers/constants/design-system.ts");function SiteOrigin({siteOrigin,iconSrc,iconName,chip,className,title,leftIcon,rightIcon}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("site-origin",className),title},chip?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chip__WEBPACK_IMPORTED_MODULE_2__.Z,{borderColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_4__.kf.borderMuted,label:siteOrigin,maxContent:!1,leftIcon:leftIcon||react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icon_with_fallback__WEBPACK_IMPORTED_MODULE_3__.Z,{icon:iconSrc,name:iconName,size:24}),rightIcon}):react__WEBPACK_IMPORTED_MODULE_0__.createElement("bdi",{dir:"ltr"},siteOrigin))}SiteOrigin.propTypes={siteOrigin:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired,iconName:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,iconSrc:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,title:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,chip:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,leftIcon:prop_types__WEBPACK_IMPORTED_MODULE_5___default().node,rightIcon:prop_types__WEBPACK_IMPORTED_MODULE_5___default().node},SiteOrigin.__docgenInfo={description:"",methods:[],displayName:"SiteOrigin",props:{siteOrigin:{description:"The origin of the site generally the URL",type:{name:"string"},required:!0},iconName:{description:"Icon name is used for the fallback icon and will display the first letter of the string\nwhen iconSrc errors or is not provided.",type:{name:"string"},required:!1},iconSrc:{description:"The image src of the icon",type:{name:"string"},required:!1},className:{description:"Additional className added to the root html element",type:{name:"string"},required:!1},title:{description:"title specifies extra information and is added to a title attribute added to the root html element\nIt is most often shown as a tooltip text when the mouse moves over the element.",type:{name:"string"},required:!1},chip:{description:"Whether the SiteOrigin is displayed as a chip or plain text.\nif false iconSrc and iconName props will not be used.",type:{name:"bool"},required:!1},leftIcon:{description:"The icon to display on the left side of the chip. If not provided, the iconSrc and iconName will be used.",type:{name:"node"},required:!1},rightIcon:{description:"The icon to display on the right side of the chip.",type:{name:"node"},required:!1}}}},"./ui/hooks/useOriginMetadata.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>useOriginMetadata});var _metamask_subject_metadata_controller__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@metamask/subject-metadata-controller/dist/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-redux/es/index.js"),_selectors__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/selectors/index.js");function useOriginMetadata(origin){const targetSubjectMetadata=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.v9)((state=>(0,_selectors__WEBPACK_IMPORTED_MODULE_2__.h5U)(state,origin)));if(!origin)return null;let minimumOriginMetadata=null;try{const url=new URL(origin);minimumOriginMetadata={host:url.host,hostname:url.hostname,origin,subjectType:_metamask_subject_metadata_controller__WEBPACK_IMPORTED_MODULE_0__.SubjectType.Unknown}}catch(_){}return targetSubjectMetadata&&minimumOriginMetadata?{...minimumOriginMetadata,...targetSubjectMetadata}:targetSubjectMetadata||minimumOriginMetadata}},"./ui/hooks/useScrollRequired.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useScrollRequired});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/lodash.js");const useScrollRequired=(dependencies=[])=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),[isScrollableState,setIsScrollable]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[isScrolledToBottomState,setIsScrolledToBottom]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),update=()=>{const isScrollable=ref.current&&ref.current.scrollHeight>ref.current.clientHeight,isScrolledToBottom=!isScrollable||Math.round(ref.current.scrollTop)+ref.current.offsetHeight>=ref.current.scrollHeight;setIsScrollable(isScrollable),setIsScrolledToBottom(isScrolledToBottom)};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(update,[ref,...dependencies]);return{isScrollable:isScrollableState,isScrolledToBottom:isScrolledToBottomState,scrollToBottom:()=>{ref.current&&ref.current.scrollTo(0,ref.current.scrollHeight)},ref,onScroll:(0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(update,25)}}},"./ui/pages/permissions-connect/snaps/util.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>getSnapInstallWarnings});var _helpers_utils_permission__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/helpers/utils/permission.js");function getSnapInstallWarnings(permissions,targetSubjectMetadata,t){return Object.entries(permissions).reduce(((filteredWarnings,[permissionName,permissionValue])=>{const permissionDescription=(0,_helpers_utils_permission__WEBPACK_IMPORTED_MODULE_0__.d7)({t,permissionName,permissionValue,targetSubjectMetadata});return filteredWarnings.concat(permissionDescription.filter((description=>1===description.weight)))}),[])}}}]);