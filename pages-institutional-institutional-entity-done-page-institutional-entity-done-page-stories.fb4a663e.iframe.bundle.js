"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[1853],{"./ui/pages/institutional/institutional-entity-done-page/institutional-entity-done-page.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>institutional_entity_done_page_stories});var _DefaultStory$paramet,_DefaultStory$paramet2,react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),es=__webpack_require__("./node_modules/react-redux/es/index.js"),history_history=__webpack_require__("./ui/ducks/history/history.js"),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts");function InstitutionalEntityDonePage(props){const mostRecentOverviewPage=(0,es.v9)(history_history.H7),t=(0,useI18nContext.C)(),{history,location}=props,{state}=location;return react.createElement(component_library.xu,{className:"page-container"},react.createElement(component_library.xu,{className:"page-container__content"},react.createElement(component_library.xu,{paddingBottom:6,paddingLeft:6,paddingRight:6,className:"institutional-entity-done__form"},react.createElement(component_library.xu,{display:design_system.sS.Flex,flexDirection:design_system.Qb.Column,alignItems:design_system.g1.center},state.imgSrc&&react.createElement("img",{className:"institutional-entity-done__img",src:state.imgSrc,alt:"Entity image"}),react.createElement(component_library.xu,{paddingTop:4,paddingBottom:4},react.createElement(component_library.xv,{paddingTop:3,fontWeight:design_system.U9.Bold,variant:design_system.rK.headingSm,as:"h5"},state.title),react.createElement(component_library.xv,{paddingTop:3,color:design_system.d9.textAlternative},state.description))))),react.createElement(component_library.xu,{as:"footer",className:"page-container__footer",padding:4},react.createElement(component_library.xu,{display:design_system.sS.Flex,gap:4},react.createElement(component_library.zx,{block:!0,variant:component_library.RN.PRIMARY,"data-testid":"click-most-recent-overview-page",onClick:()=>history.push(mostRecentOverviewPage)},t("close")))))}InstitutionalEntityDonePage.propTypes={history:prop_types_default().object,location:prop_types_default().object},InstitutionalEntityDonePage.__docgenInfo={description:"",methods:[],displayName:"InstitutionalEntityDonePage",props:{history:{description:"",type:{name:"object"},required:!1},location:{description:"",type:{name:"object"},required:!1}}};const institutional_entity_done_page_stories={title:"Components/Institutional/InstitutionalEntityDonePage",component:InstitutionalEntityDonePage,args:{history:{push:()=>{}},mostRecentOverviewPage:"test",location:{state:{imgSrc:"./images/logo/metamask-fox.svg",title:"title",description:"description"}}}},DefaultStory=args=>react.createElement(InstitutionalEntityDonePage,args);DefaultStory.storyName="InstitutionalEntityDonePage",DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => <InstitutionalEntityDonePage {...args} />",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source}}};const __namedExportsOrder=["DefaultStory"];DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"}}}]);