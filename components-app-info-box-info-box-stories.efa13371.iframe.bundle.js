"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[4021],{"./ui/components/app/info-box/info-box.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>info_box_stories});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class InfoBox extends react.Component{constructor(...args){super(...args),_defineProperty(this,"state",{isShowing:!0})}handleClose(){const{onClose}=this.props;onClose?onClose():this.setState({isShowing:!1})}render(){const{title,description}=this.props;return this.state.isShowing?react.createElement("div",{className:"info-box"},react.createElement("div",{className:"info-box__close","data-testid":"info-box-close",onClick:()=>this.handleClose()}),react.createElement("div",{className:"info-box__title"},title),react.createElement("div",{className:"info-box__description"},description)):null}}_defineProperty(InfoBox,"contextTypes",{t:prop_types_default().func}),_defineProperty(InfoBox,"propTypes",{onClose:prop_types_default().func,title:prop_types_default().string,description:prop_types_default().string}),InfoBox.__docgenInfo={description:"",methods:[{name:"handleClose",docblock:null,modifiers:[],params:[],returns:null}],displayName:"InfoBox",props:{onClose:{description:"",type:{name:"func"},required:!1},title:{description:"",type:{name:"string"},required:!1},description:{description:"",type:{name:"string"},required:!1}},context:{t:{type:{name:"func"},required:!1}}};const info_box=InfoBox;var _DefaultStory$paramet,_DefaultStory$paramet2,_DefaultStory$paramet3;const info_box_stories={title:"Components/App/InfoBox",component:info_box,argTypes:{title:"string",description:"string"}},DefaultStory=args=>react.createElement(info_box,args);DefaultStory.storyName="Default",DefaultStory.args={title:"Hello Ether",description:"This is the description"},DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => <InfoBox {...args} />",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet3=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet3?void 0:_DefaultStory$paramet3.source}}};const __namedExportsOrder=["DefaultStory"];DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"}}}]);