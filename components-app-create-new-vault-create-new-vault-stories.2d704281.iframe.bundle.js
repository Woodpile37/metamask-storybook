"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[2346],{"./ui/components/app/create-new-vault/create-new-vault.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,WithTerms:()=>WithTerms,__namedExportsOrder:()=>__namedExportsOrder,default:()=>create_new_vault_stories});var _DefaultStory$paramet,_DefaultStory$paramet2,_DefaultStory$paramet3,_WithTerms$parameters,_WithTerms$parameters2,_WithTerms$parameters3,react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js"),text_field=__webpack_require__("./ui/components/ui/text-field/index.js"),ui_button=__webpack_require__("./ui/components/ui/button/index.js"),check_box=__webpack_require__("./ui/components/ui/check-box/index.js"),component_library=__webpack_require__("./ui/components/component-library/index.js"),srp_input=__webpack_require__("./ui/components/app/srp-input/index.js"),common=__webpack_require__("./ui/helpers/constants/common.ts");function CreateNewVault({disabled=!1,includeTerms=!1,onSubmit,submitText}){const[confirmPassword,setConfirmPassword]=(0,react.useState)(""),[confirmPasswordError,setConfirmPasswordError]=(0,react.useState)(""),[password,setPassword]=(0,react.useState)(""),[passwordError,setPasswordError]=(0,react.useState)(""),[seedPhrase,setSeedPhrase]=(0,react.useState)(""),[termsChecked,setTermsChecked]=(0,react.useState)(!1),t=(0,useI18nContext.C)(),onPasswordChange=(0,react.useCallback)((newPassword=>{let newConfirmPasswordError="",newPasswordError="";newPassword&&newPassword.length<common.Z9&&(newPasswordError=t("passwordNotLongEnough")),confirmPassword&&newPassword!==confirmPassword&&(newConfirmPasswordError=t("passwordsDontMatch")),setPassword(newPassword),setPasswordError(newPasswordError),setConfirmPasswordError(newConfirmPasswordError)}),[confirmPassword,t]),onConfirmPasswordChange=(0,react.useCallback)((newConfirmPassword=>{let newConfirmPasswordError="";password!==newConfirmPassword&&(newConfirmPasswordError=t("passwordsDontMatch")),setConfirmPassword(newConfirmPassword),setConfirmPasswordError(newConfirmPasswordError)}),[password,t]),isValid=!disabled&&password&&confirmPassword&&password===confirmPassword&&seedPhrase&&(!includeTerms||termsChecked)&&!passwordError&&!confirmPasswordError,onImport=(0,react.useCallback)((async event=>{event.preventDefault(),isValid&&await onSubmit(password,seedPhrase)}),[isValid,onSubmit,password,seedPhrase]),toggleTermsCheck=(0,react.useCallback)((()=>{setTermsChecked((currentTermsChecked=>!currentTermsChecked))}),[]),termsOfUse=t("acceptTermsOfUse",[react.createElement("a",{className:"create-new-vault__terms-link",key:"create-new-vault__link-text",href:"https://metamask.io/terms.html",target:"_blank",rel:"noopener noreferrer"},t("terms"))]);return react.createElement("form",{className:"create-new-vault__form",onSubmit:onImport},react.createElement(srp_input.Z,{onChange:setSeedPhrase,srpText:t("secretRecoveryPhrase")}),react.createElement("div",{className:"create-new-vault__create-password"},react.createElement(text_field.Z,{"data-testid":"create-vault-password",id:"password",label:t("newPassword"),type:"password",value:password,onChange:event=>onPasswordChange(event.target.value),error:passwordError,autoComplete:"new-password",margin:"normal",largeLabel:!0}),react.createElement(text_field.Z,{"data-testid":"create-vault-confirm-password",id:"confirm-password",label:t("confirmPassword"),type:"password",value:confirmPassword,onChange:event=>onConfirmPasswordChange(event.target.value),error:confirmPasswordError,autoComplete:"new-password",margin:"normal",largeLabel:!0})),includeTerms?react.createElement("div",{className:"create-new-vault__terms"},react.createElement(check_box.ZP,{id:"create-new-vault__terms-checkbox",dataTestId:"create-new-vault__terms-checkbox",checked:termsChecked,onClick:toggleTermsCheck}),react.createElement("label",{className:"create-new-vault__terms-label",htmlFor:"create-new-vault__terms-checkbox"},react.createElement(component_library.xv,{as:"span"},termsOfUse))):null,react.createElement(ui_button.Z,{"data-testid":"create-new-vault-submit-button",className:"create-new-vault__submit-button",type:"primary",submit:!0,disabled:!isValid},submitText))}CreateNewVault.propTypes={disabled:prop_types_default().bool,includeTerms:prop_types_default().bool,onSubmit:prop_types_default().func.isRequired,submitText:prop_types_default().string.isRequired},CreateNewVault.__docgenInfo={description:"",methods:[],displayName:"CreateNewVault",props:{disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},includeTerms:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onSubmit:{description:"",type:{name:"func"},required:!0},submitText:{description:"",type:{name:"string"},required:!0}}};const create_new_vault_stories={title:"Components/App/CreateNewVault",argTypes:{disabled:{control:"boolean"},submitText:{control:"text"}},args:{submitText:"Import"}},Template=args=>react.createElement("div",{style:{width:"600px"}},react.createElement(CreateNewVault,args)),DefaultStory=Template.bind({});DefaultStory.storyName="Default";const WithTerms=Template.bind({});WithTerms.args={includeTerms:!0},DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => {\n  return <div style={{\n    width: '600px'\n  }}>\n      <CreateNewVault {...args} />\n    </div>;\n}",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet3=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet3?void 0:_DefaultStory$paramet3.source}}},WithTerms.parameters={...WithTerms.parameters,docs:{...null===(_WithTerms$parameters=WithTerms.parameters)||void 0===_WithTerms$parameters?void 0:_WithTerms$parameters.docs,source:{originalSource:"args => {\n  return <div style={{\n    width: '600px'\n  }}>\n      <CreateNewVault {...args} />\n    </div>;\n}",...null===(_WithTerms$parameters2=WithTerms.parameters)||void 0===_WithTerms$parameters2||null===(_WithTerms$parameters3=_WithTerms$parameters2.docs)||void 0===_WithTerms$parameters3?void 0:_WithTerms$parameters3.source}}};const __namedExportsOrder=["DefaultStory","WithTerms"]},"./ui/components/ui/check-box/check-box.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Km:()=>INDETERMINATE,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,ri:()=>CHECKED,wT:()=>UNCHECKED});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);const CHECKBOX_STATE={CHECKED:"CHECKED",INDETERMINATE:"INDETERMINATE",UNCHECKED:"UNCHECKED"},{CHECKED,INDETERMINATE,UNCHECKED}=CHECKBOX_STATE,CheckBox=({className,disabled,id,onClick,checked,title,dataTestId})=>{"boolean"==typeof checked&&(checked=checked?CHECKBOX_STATE.CHECKED:CHECKBOX_STATE.UNCHECKED);const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{ref.current.indeterminate=checked===CHECKBOX_STATE.INDETERMINATE}),[checked]),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{checked:checked===CHECKBOX_STATE.CHECKED,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("check-box",className,{"far fa-square":checked===CHECKBOX_STATE.UNCHECKED,"fa fa-check-square check-box__checked":checked===CHECKBOX_STATE.CHECKED,"fa fa-minus-square check-box__indeterminate":checked===CHECKBOX_STATE.INDETERMINATE}),disabled,id,onClick:onClick?event=>{event.preventDefault(),onClick()}:null,readOnly:!0,ref,title,"data-testid":dataTestId,type:"checkbox"})};CheckBox.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,id:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,checked:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([...Object.keys(CHECKBOX_STATE),!0,!1]).isRequired,title:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string},CheckBox.defaultProps={className:void 0,disabled:!1,id:void 0},CheckBox.__docgenInfo={description:"",methods:[],displayName:"CheckBox",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"Add custom classname css",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Check if checkbox disabled or not",type:{name:"bool"},required:!1},id:{defaultValue:{value:"undefined",computed:!0},description:"Checkbox ID",type:{name:"string"},required:!1},onClick:{description:"Click handler",type:{name:"func"},required:!1},checked:{description:"Check if the checkbox are checked or not",type:{name:"enum",value:[{value:"...Object.keys(CHECKBOX_STATE)",computed:!0},{value:"true",computed:!1},{value:"false",computed:!1}]},required:!0},title:{description:"Show title",type:{name:"string"},required:!1},dataTestId:{description:"Data test ID for checkbox Component",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=CheckBox},"./ui/components/ui/check-box/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Km:()=>_check_box_component__WEBPACK_IMPORTED_MODULE_0__.Km,ZP:()=>_check_box_component__WEBPACK_IMPORTED_MODULE_0__.ZP,ri:()=>_check_box_component__WEBPACK_IMPORTED_MODULE_0__.ri,wT:()=>_check_box_component__WEBPACK_IMPORTED_MODULE_0__.wT});var _check_box_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/ui/check-box/check-box.component.js")}}]);