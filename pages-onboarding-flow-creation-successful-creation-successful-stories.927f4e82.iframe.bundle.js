"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[2670],{"./ui/pages/onboarding-flow/creation-successful/creation-successful.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>creation_successful_stories});var _DefaultStory$paramet,_DefaultStory$paramet2,react=__webpack_require__("./node_modules/react/index.js"),react_router=__webpack_require__("./node_modules/react-router/esm/react-router.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),box=__webpack_require__("./ui/components/ui/box/index.js"),typography=__webpack_require__("./ui/components/ui/typography/index.js"),ui_button=__webpack_require__("./ui/components/ui/button/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js"),routes=__webpack_require__("./ui/helpers/constants/routes.ts"),build_types=__webpack_require__("./ui/helpers/utils/build-types.js"),selectors=__webpack_require__("./ui/selectors/index.js"),metametrics=__webpack_require__("./shared/constants/metametrics.ts"),contexts_metametrics=__webpack_require__("./ui/contexts/metametrics.js");function CreationSuccessful(){const history=(0,react_router.k6)(),t=(0,useI18nContext.C)(),trackEvent=(0,react.useContext)(contexts_metametrics.Wd),firstTimeFlowType=(0,es.v9)(selectors.XQo);return react.createElement("div",{className:"creation-successful","data-testid":"creation-successful"},react.createElement(box.ZP,{textAlign:design_system.I8.CENTER},react.createElement("img",{src:"./images/tada.png"}),react.createElement(typography.Z,{variant:design_system.TypographyVariant.H2,fontWeight:design_system.m5.BOLD,margin:6},t("walletCreationSuccessTitle")),react.createElement(typography.Z,{variant:design_system.TypographyVariant.H4},t("walletCreationSuccessDetail"))),react.createElement(typography.Z,{variant:design_system.TypographyVariant.H4,boxProps:{align:design_system.g1.flexStart},marginLeft:12},t("remember")),react.createElement("ul",null,react.createElement("li",null,react.createElement(typography.Z,{variant:design_system.TypographyVariant.H4},(0,build_types.h)()?t("betaWalletCreationSuccessReminder1"):t("walletCreationSuccessReminder1"))),react.createElement("li",null,react.createElement(typography.Z,{variant:design_system.TypographyVariant.H4},(0,build_types.h)()?t("betaWalletCreationSuccessReminder2"):t("walletCreationSuccessReminder2"))),react.createElement("li",null,react.createElement(typography.Z,{variant:design_system.TypographyVariant.H4},t("walletCreationSuccessReminder3",[react.createElement("span",{key:"creation-successful__bold",className:"creation-successful__bold"},t("walletCreationSuccessReminder3BoldSection"))]))),react.createElement("li",null,react.createElement(ui_button.Z,{href:"https://community.metamask.io/t/what-is-a-secret-recovery-phrase-and-how-to-keep-your-crypto-wallet-secure/3440",target:"_blank",type:"link",rel:"noopener noreferrer"},t("learnMoreUpperCase")))),react.createElement(box.ZP,{marginTop:6,className:"creation-successful__actions"},react.createElement(ui_button.Z,{type:"link",onClick:()=>history.push(routes.pi)},t("advancedConfiguration")),react.createElement(ui_button.Z,{"data-testid":"onboarding-complete-done",type:"primary",large:!0,rounded:!0,onClick:()=>{trackEvent({category:metametrics.ci.Onboarding,event:metametrics.AW.OnboardingWalletCreationComplete,properties:{method:firstTimeFlowType}}),history.push(routes.DL)}},t("gotIt"))))}CreationSuccessful.__docgenInfo={description:"",methods:[],displayName:"CreationSuccessful"};const creation_successful_stories={title:"Pages/OnboardingFlow/CreationSuccessful"},DefaultStory=()=>react.createElement("div",{style:{maxHeight:"2000px"}},react.createElement(CreationSuccessful,null));DefaultStory.storyName="Default",DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"() => {\n  return <div style={{\n    maxHeight: '2000px'\n  }}>\n      <CreationSuccessful />\n    </div>;\n}",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source}}};const __namedExportsOrder=["DefaultStory"];DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"}}}]);