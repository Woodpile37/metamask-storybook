"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[6948],{"./node_modules/@metamask/etherscan-link/dist/account-link.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAccountLink=exports.createCustomAccountLink=exports.createAccountLinkForChain=exports.createAccountLink=void 0;const helpers_1=__webpack_require__("./node_modules/@metamask/etherscan-link/dist/helpers.js"),prefix_for_chain_1=__importDefault(__webpack_require__("./node_modules/@metamask/etherscan-link/dist/prefix-for-chain.js")),prefix_for_network_1=__importDefault(__webpack_require__("./node_modules/@metamask/etherscan-link/dist/prefix-for-network.js"));function createAccountLink(address,networkId){const prefix=prefix_for_network_1.default(networkId);return null===prefix?"":`https://${prefix}etherscan.io/address/${address}`}function createAccountLinkForChain(address,chainId){const prefix=prefix_for_chain_1.default(chainId);return null===prefix?"":`https://${prefix}etherscan.io/address/${address}`}function createCustomAccountLink(address,customNetworkUrl){return helpers_1.addPathToUrl(customNetworkUrl,"address",address)}exports.createAccountLink=createAccountLink,exports.createAccountLinkForChain=createAccountLinkForChain,exports.createCustomAccountLink=createCustomAccountLink,exports.getAccountLink=function getAccountLink(address,chainId,rpcPrefs={},networkId=""){return rpcPrefs.blockExplorerUrl?createCustomAccountLink(address,rpcPrefs.blockExplorerUrl):networkId?createAccountLink(address,networkId):createAccountLinkForChain(address,chainId)}},"./node_modules/@metamask/etherscan-link/dist/explorer-link.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getBlockExplorerLink=exports.createExplorerLinkForChain=exports.createExplorerLink=exports.createCustomExplorerLink=void 0;const helpers_1=__webpack_require__("./node_modules/@metamask/etherscan-link/dist/helpers.js"),prefix_for_chain_1=__importDefault(__webpack_require__("./node_modules/@metamask/etherscan-link/dist/prefix-for-chain.js")),prefix_for_network_1=__importDefault(__webpack_require__("./node_modules/@metamask/etherscan-link/dist/prefix-for-network.js"));function createCustomExplorerLink(hash,customNetworkUrl){return helpers_1.addPathToUrl(customNetworkUrl,"tx",hash)}function createExplorerLink(hash,network){const prefix=prefix_for_network_1.default(network);return null===prefix?"":`https://${prefix}etherscan.io/tx/${hash}`}function createExplorerLinkForChain(hash,chainId){const prefix=prefix_for_chain_1.default(chainId);return null===prefix?"":`https://${prefix}etherscan.io/tx/${hash}`}exports.createCustomExplorerLink=createCustomExplorerLink,exports.createExplorerLink=createExplorerLink,exports.createExplorerLinkForChain=createExplorerLinkForChain,exports.getBlockExplorerLink=function getBlockExplorerLink(transaction,rpcPrefs={}){return rpcPrefs.blockExplorerUrl?createCustomExplorerLink(transaction.hash,rpcPrefs.blockExplorerUrl):transaction.chainId?createExplorerLinkForChain(transaction.hash,transaction.chainId):createExplorerLink(transaction.hash,transaction.metamaskNetworkId)}},"./node_modules/@metamask/etherscan-link/dist/helpers.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.addPathToUrl=void 0,exports.addPathToUrl=(customNetworkUrl,linkType,suffixType)=>{const{username,password,protocol,host,pathname,search,hash}=new URL(customNetworkUrl),newPath=pathname.endsWith("/")?`${pathname}${linkType}/${suffixType}`:`${pathname}/${linkType}/${suffixType}`;return new URL(`${protocol}//${username?`${username}:${password}`:""}${host}${newPath}${search}${hash}`).toString()}},"./node_modules/@metamask/etherscan-link/dist/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{const account_link_1=__webpack_require__("./node_modules/@metamask/etherscan-link/dist/account-link.js"),explorer_link_1=__webpack_require__("./node_modules/@metamask/etherscan-link/dist/explorer-link.js"),token_tracker_link_1=__webpack_require__("./node_modules/@metamask/etherscan-link/dist/token-tracker-link.js");module.exports={createExplorerLink:explorer_link_1.createExplorerLink,createCustomExplorerLink:explorer_link_1.createCustomExplorerLink,createExplorerLinkForChain:explorer_link_1.createExplorerLinkForChain,createAccountLink:account_link_1.createAccountLink,createCustomAccountLink:account_link_1.createCustomAccountLink,createAccountLinkForChain:account_link_1.createAccountLinkForChain,createTokenTrackerLink:token_tracker_link_1.createTokenTrackerLink,createCustomTokenTrackerLink:token_tracker_link_1.createCustomTokenTrackerLink,createTokenTrackerLinkForChain:token_tracker_link_1.createTokenTrackerLinkForChain,getBlockExplorerLink:explorer_link_1.getBlockExplorerLink,getAccountLink:account_link_1.getAccountLink,getTokenTrackerLink:token_tracker_link_1.getTokenTrackerLink}},"./node_modules/@metamask/etherscan-link/dist/prefix-for-chain.js":module=>{module.exports=function getPrefixForChain(chainId){let prefix;switch(chainId){case"0x1":prefix="";break;case"0x3":prefix="ropsten.";break;case"0x4":prefix="rinkeby.";break;case"0x5":prefix="goerli.";break;case"0x2a":prefix="kovan.";break;case"0xaa36a7":prefix="sepolia.";break;default:prefix=null}return prefix}},"./node_modules/@metamask/etherscan-link/dist/prefix-for-network.js":module=>{module.exports=function getPrefixForNetwork(networkId){let prefix;switch(parseInt(networkId)){case 1:prefix="";break;case 3:prefix="ropsten.";break;case 4:prefix="rinkeby.";break;case 5:prefix="goerli.";break;case 42:prefix="kovan.";break;default:prefix=null}return prefix}},"./node_modules/@metamask/etherscan-link/dist/token-tracker-link.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTokenTrackerLink=exports.createTokenTrackerLinkForChain=exports.createCustomTokenTrackerLink=exports.createTokenTrackerLink=void 0;const helpers_1=__webpack_require__("./node_modules/@metamask/etherscan-link/dist/helpers.js"),prefix_for_chain_1=__importDefault(__webpack_require__("./node_modules/@metamask/etherscan-link/dist/prefix-for-chain.js")),prefix_for_network_1=__importDefault(__webpack_require__("./node_modules/@metamask/etherscan-link/dist/prefix-for-network.js"));function createTokenTrackerLink(tokenAddress,networkId,holderAddress){const prefix=prefix_for_network_1.default(networkId);return null===prefix?"":`https://${prefix}etherscan.io/token/${tokenAddress}${holderAddress?`?a=${holderAddress}`:""}`}function createCustomTokenTrackerLink(tokenAddress,customNetworkUrl){return helpers_1.addPathToUrl(customNetworkUrl,"token",tokenAddress)}function createTokenTrackerLinkForChain(tokenAddress,chainId,holderAddress){const prefix=prefix_for_chain_1.default(chainId);return null===prefix?"":`https://${prefix}etherscan.io/token/${tokenAddress}${holderAddress?`?a=${holderAddress}`:""}`}exports.createTokenTrackerLink=createTokenTrackerLink,exports.createCustomTokenTrackerLink=createCustomTokenTrackerLink,exports.createTokenTrackerLinkForChain=createTokenTrackerLinkForChain,exports.getTokenTrackerLink=function getTokenTrackerLink(tokenAddress,chainId,networkId,holderAddress,rpcPrefs={}){return rpcPrefs.blockExplorerUrl?createCustomTokenTrackerLink(tokenAddress,rpcPrefs.blockExplorerUrl):networkId?createTokenTrackerLink(tokenAddress,networkId,holderAddress):createTokenTrackerLinkForChain(tokenAddress,chainId,holderAddress)}},"./ui/components/multichain/account-list-item-menu/account-list-item-menu.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DefaultStory$paramet,_DefaultStory$paramet2,_DefaultStory$paramet3,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/multichain/account-list-item-menu/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Multichain/AccountListItemMenu",component:___WEBPACK_IMPORTED_MODULE_1__.w,argTypes:{anchorElement:{control:"window.Element"},onClose:{action:"onClose"},closeMenu:{action:"closeMenu"},blockExplorerUrlSubTitle:{control:"text"},isRemovable:{control:"boolean"},identity:{control:"object"},isOpen:{control:"boolean"}},args:{anchorElement:null,identity:{address:"0xb19ac54efa18cc3a14a5b821bfec73d284bf0c5e",name:"Account 1",balance:"0x152387ad22c3f0",tokenBalance:"32.09 ETH"},isRemovable:!0,blockExplorerUrlSubTitle:"etherscan.io",isOpen:!0}},DefaultStory=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.w,args);DefaultStory.storyName="Default",DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => <AccountListItemMenu {...args} />",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet3=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet3?void 0:_DefaultStory$paramet3.source}}};const __namedExportsOrder=["DefaultStory"];DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"}}}]);