"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[4095],{"./node_modules/@metamask/etherscan-link/dist/account-link.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAccountLink=exports.createCustomAccountLink=exports.createAccountLinkForChain=exports.createAccountLink=void 0;const helpers_1=__webpack_require__("./node_modules/@metamask/etherscan-link/dist/helpers.js"),prefix_for_chain_1=__importDefault(__webpack_require__("./node_modules/@metamask/etherscan-link/dist/prefix-for-chain.js")),prefix_for_network_1=__importDefault(__webpack_require__("./node_modules/@metamask/etherscan-link/dist/prefix-for-network.js"));function createAccountLink(address,networkId){const prefix=prefix_for_network_1.default(networkId);return null===prefix?"":`https://${prefix}etherscan.io/address/${address}`}function createAccountLinkForChain(address,chainId){const prefix=prefix_for_chain_1.default(chainId);return null===prefix?"":`https://${prefix}etherscan.io/address/${address}`}function createCustomAccountLink(address,customNetworkUrl){return helpers_1.addPathToUrl(customNetworkUrl,"address",address)}exports.createAccountLink=createAccountLink,exports.createAccountLinkForChain=createAccountLinkForChain,exports.createCustomAccountLink=createCustomAccountLink,exports.getAccountLink=function getAccountLink(address,chainId,rpcPrefs={},networkId=""){return rpcPrefs.blockExplorerUrl?createCustomAccountLink(address,rpcPrefs.blockExplorerUrl):networkId?createAccountLink(address,networkId):createAccountLinkForChain(address,chainId)}},"./node_modules/@metamask/etherscan-link/dist/explorer-link.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getBlockExplorerLink=exports.createExplorerLinkForChain=exports.createExplorerLink=exports.createCustomExplorerLink=void 0;const helpers_1=__webpack_require__("./node_modules/@metamask/etherscan-link/dist/helpers.js"),prefix_for_chain_1=__importDefault(__webpack_require__("./node_modules/@metamask/etherscan-link/dist/prefix-for-chain.js")),prefix_for_network_1=__importDefault(__webpack_require__("./node_modules/@metamask/etherscan-link/dist/prefix-for-network.js"));function createCustomExplorerLink(hash,customNetworkUrl){return helpers_1.addPathToUrl(customNetworkUrl,"tx",hash)}function createExplorerLink(hash,network){const prefix=prefix_for_network_1.default(network);return null===prefix?"":`https://${prefix}etherscan.io/tx/${hash}`}function createExplorerLinkForChain(hash,chainId){const prefix=prefix_for_chain_1.default(chainId);return null===prefix?"":`https://${prefix}etherscan.io/tx/${hash}`}exports.createCustomExplorerLink=createCustomExplorerLink,exports.createExplorerLink=createExplorerLink,exports.createExplorerLinkForChain=createExplorerLinkForChain,exports.getBlockExplorerLink=function getBlockExplorerLink(transaction,rpcPrefs={}){return rpcPrefs.blockExplorerUrl?createCustomExplorerLink(transaction.hash,rpcPrefs.blockExplorerUrl):transaction.chainId?createExplorerLinkForChain(transaction.hash,transaction.chainId):createExplorerLink(transaction.hash,transaction.metamaskNetworkId)}},"./node_modules/@metamask/etherscan-link/dist/helpers.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.addPathToUrl=void 0,exports.addPathToUrl=(customNetworkUrl,linkType,suffixType)=>{const{username,password,protocol,host,pathname,search,hash}=new URL(customNetworkUrl),newPath=pathname.endsWith("/")?`${pathname}${linkType}/${suffixType}`:`${pathname}/${linkType}/${suffixType}`;return new URL(`${protocol}//${username?`${username}:${password}`:""}${host}${newPath}${search}${hash}`).toString()}},"./node_modules/@metamask/etherscan-link/dist/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{const account_link_1=__webpack_require__("./node_modules/@metamask/etherscan-link/dist/account-link.js"),explorer_link_1=__webpack_require__("./node_modules/@metamask/etherscan-link/dist/explorer-link.js"),token_tracker_link_1=__webpack_require__("./node_modules/@metamask/etherscan-link/dist/token-tracker-link.js");module.exports={createExplorerLink:explorer_link_1.createExplorerLink,createCustomExplorerLink:explorer_link_1.createCustomExplorerLink,createExplorerLinkForChain:explorer_link_1.createExplorerLinkForChain,createAccountLink:account_link_1.createAccountLink,createCustomAccountLink:account_link_1.createCustomAccountLink,createAccountLinkForChain:account_link_1.createAccountLinkForChain,createTokenTrackerLink:token_tracker_link_1.createTokenTrackerLink,createCustomTokenTrackerLink:token_tracker_link_1.createCustomTokenTrackerLink,createTokenTrackerLinkForChain:token_tracker_link_1.createTokenTrackerLinkForChain,getBlockExplorerLink:explorer_link_1.getBlockExplorerLink,getAccountLink:account_link_1.getAccountLink,getTokenTrackerLink:token_tracker_link_1.getTokenTrackerLink}},"./node_modules/@metamask/etherscan-link/dist/prefix-for-chain.js":module=>{module.exports=function getPrefixForChain(chainId){let prefix;switch(chainId){case"0x1":prefix="";break;case"0x3":prefix="ropsten.";break;case"0x4":prefix="rinkeby.";break;case"0x5":prefix="goerli.";break;case"0x2a":prefix="kovan.";break;case"0xaa36a7":prefix="sepolia.";break;default:prefix=null}return prefix}},"./node_modules/@metamask/etherscan-link/dist/prefix-for-network.js":module=>{module.exports=function getPrefixForNetwork(networkId){let prefix;switch(parseInt(networkId)){case 1:prefix="";break;case 3:prefix="ropsten.";break;case 4:prefix="rinkeby.";break;case 5:prefix="goerli.";break;case 42:prefix="kovan.";break;default:prefix=null}return prefix}},"./node_modules/@metamask/etherscan-link/dist/token-tracker-link.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTokenTrackerLink=exports.createTokenTrackerLinkForChain=exports.createCustomTokenTrackerLink=exports.createTokenTrackerLink=void 0;const helpers_1=__webpack_require__("./node_modules/@metamask/etherscan-link/dist/helpers.js"),prefix_for_chain_1=__importDefault(__webpack_require__("./node_modules/@metamask/etherscan-link/dist/prefix-for-chain.js")),prefix_for_network_1=__importDefault(__webpack_require__("./node_modules/@metamask/etherscan-link/dist/prefix-for-network.js"));function createTokenTrackerLink(tokenAddress,networkId,holderAddress){const prefix=prefix_for_network_1.default(networkId);return null===prefix?"":`https://${prefix}etherscan.io/token/${tokenAddress}${holderAddress?`?a=${holderAddress}`:""}`}function createCustomTokenTrackerLink(tokenAddress,customNetworkUrl){return helpers_1.addPathToUrl(customNetworkUrl,"token",tokenAddress)}function createTokenTrackerLinkForChain(tokenAddress,chainId,holderAddress){const prefix=prefix_for_chain_1.default(chainId);return null===prefix?"":`https://${prefix}etherscan.io/token/${tokenAddress}${holderAddress?`?a=${holderAddress}`:""}`}exports.createTokenTrackerLink=createTokenTrackerLink,exports.createCustomTokenTrackerLink=createCustomTokenTrackerLink,exports.createTokenTrackerLinkForChain=createTokenTrackerLinkForChain,exports.getTokenTrackerLink=function getTokenTrackerLink(tokenAddress,chainId,networkId,holderAddress,rpcPrefs={}){return rpcPrefs.blockExplorerUrl?createCustomTokenTrackerLink(tokenAddress,rpcPrefs.blockExplorerUrl):networkId?createTokenTrackerLink(tokenAddress,networkId,holderAddress):createTokenTrackerLinkForChain(tokenAddress,chainId,holderAddress)}},"./ui/components/app/modals/contract-details-modal/contract-details-modal.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ContractDetailsModal});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),dist=__webpack_require__("./node_modules/@metamask/etherscan-link/dist/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),box=__webpack_require__("./ui/components/ui/box/index.js"),button_component=__webpack_require__("./ui/components/ui/button/button.component.js"),tooltip=__webpack_require__("./ui/components/ui/tooltip/tooltip.js"),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js"),identicon=__webpack_require__("./ui/components/ui/identicon/index.js"),send_utils=__webpack_require__("./ui/pages/send/send.utils.js"),popover=__webpack_require__("./ui/components/ui/popover/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),useCopyToClipboard=__webpack_require__("./ui/hooks/useCopyToClipboard.js"),selectors=__webpack_require__("./ui/selectors/index.js"),transaction=__webpack_require__("./shared/constants/transaction.ts"),lodash=__webpack_require__("./node_modules/lodash/lodash.js"),metamask=__webpack_require__("./ui/ducks/metamask/metamask.js"),usePrevious=__webpack_require__("./ui/hooks/usePrevious.js");function useNftsCollections(){const t=(0,useI18nContext.C)(),previouslyOwnedText=t("nftsPreviouslyOwned"),unknownCollectionText=t("unknownCollection"),[collections,setCollections]=(0,react.useState)({}),[previouslyOwnedCollection,setPreviouslyOwnedCollection]=(0,react.useState)({collectionName:previouslyOwnedText,nfts:[]}),nfts=(0,es.v9)(metamask.J8),[nftsLoading,setNftsLoading]=(0,react.useState)((()=>(null==nfts?void 0:nfts.length)>=0)),selectedAddress=(0,es.v9)(selectors.GJg),chainId=(0,es.v9)(selectors.BVZ),nftContracts=(0,es.v9)(metamask._B),prevNfts=(0,usePrevious.D)(nfts),prevChainId=(0,usePrevious.D)(chainId),prevSelectedAddress=(0,usePrevious.D)(selectedAddress);return(0,react.useEffect)((()=>{(0,lodash.isEqual)(prevNfts,nfts)&&(0,lodash.isEqual)(prevSelectedAddress,selectedAddress)&&(0,lodash.isEqual)(prevChainId,chainId)||(()=>{if(setNftsLoading(!0),void 0===selectedAddress||void 0===chainId)return;const newCollections={},newPreviouslyOwnedCollections={collectionName:previouslyOwnedText,nfts:[]};nfts.forEach((nft=>{if(!1===(null==nft?void 0:nft.isCurrentlyOwned))newPreviouslyOwnedCollections.nfts.push(nft);else if(newCollections[nft.address])newCollections[nft.address].nfts.push(nft);else{const collectionContract=nftContracts.find((({address})=>address===nft.address));newCollections[nft.address]={collectionName:(null==collectionContract?void 0:collectionContract.name)||unknownCollectionText,collectionImage:(null==collectionContract?void 0:collectionContract.logo)||nft.image,nfts:[nft]}}})),setCollections(newCollections),setPreviouslyOwnedCollection(newPreviouslyOwnedCollections),setNftsLoading(!1)})()}),[nfts,prevNfts,nftContracts,setNftsLoading,chainId,prevChainId,selectedAddress,prevSelectedAddress]),{nftsLoading,collections,previouslyOwnedCollection}}function NftCollectionImage({assetName,tokenAddress}){var _tokenList$tokenAddre;const{collections}=useNftsCollections(),nftTokenListImage=null===(_tokenList$tokenAddre=(0,es.v9)(selectors.HJ)[tokenAddress.toLowerCase()])||void 0===_tokenList$tokenAddre?void 0:_tokenList$tokenAddre.iconUrl;return react.createElement(box.ZP,null,(()=>{var _assetName$;const collection=Object.values(collections).find((({collectionName})=>collectionName===assetName));return null!=collection&&collection.collectionImage||nftTokenListImage?react.createElement(identicon.Z,{diameter:24,image:(null==collection?void 0:collection.collectionImage)||nftTokenListImage}):react.createElement(box.ZP,{color:design_system.Il.overlayInverse,textAlign:design_system.PH.Center,className:"collection-image-alt"},(null==assetName||null===(_assetName$=assetName[0])||void 0===_assetName$?void 0:_assetName$.toUpperCase())??null)})())}NftCollectionImage.propTypes={assetName:prop_types_default().string,tokenAddress:prop_types_default().string},NftCollectionImage.__docgenInfo={description:"",methods:[],displayName:"NftCollectionImage",props:{assetName:{description:"",type:{name:"string"},required:!1},tokenAddress:{description:"",type:{name:"string"},required:!1}}};var component_library=__webpack_require__("./ui/components/component-library/index.js");function ContractDetailsModal({onClose,tokenName,tokenAddress,toAddress,chainId,rpcPrefs,tokenId,assetName,assetStandard,isContractRequestingSignature}){var _addressBookEntry$dat,_addressBookEntry$dat2;const t=(0,useI18nContext.C)(),[copiedTokenAddress,handleCopyTokenAddress]=(0,useCopyToClipboard.m)(),[copiedToAddress,handleCopyToAddress]=(0,useCopyToClipboard.m)(),addressBookEntry=(0,es.v9)((state=>({data:(0,selectors.e5t)(state,toAddress)}))),nft=assetStandard===transaction.Yn.ERC721||assetStandard===transaction.Yn.ERC1155||assetName&&tokenId||tokenName&&tokenId;return react.createElement(popover.Z,{className:"contract-details-modal"},react.createElement(box.ZP,{paddingTop:6,paddingRight:4,paddingBottom:8,paddingLeft:4,className:"contract-details-modal__content"},react.createElement(component_library.xv,{fontWeight:design_system.U9.Bold,variant:design_system.rK.bodyMd,as:"h5",display:design_system.sS.Flex},t("contractTitle")),react.createElement(component_library.xv,{variant:design_system.rK.bodySm,as:"h6",display:design_system.sS.Flex,color:design_system.d9.textAlternative,marginTop:2},t("contractDescription")),!isContractRequestingSignature&&react.createElement(react.Fragment,null,react.createElement(component_library.xv,{variant:design_system.rK.bodySm,as:"h6",display:design_system.sS.Flex,marginTop:4,marginBottom:2},t(nft?"contractNFT":"contractToken")),react.createElement(box.ZP,{display:design_system.sS.Flex,borderRadius:design_system.$u.SM,borderStyle:design_system.N4.solid,borderColor:design_system.kf.borderDefault,className:"contract-details-modal__content__contract"},nft?react.createElement(box.ZP,{margin:4},react.createElement(NftCollectionImage,{assetName,tokenAddress})):react.createElement(identicon.Z,{className:"contract-details-modal__content__contract__identicon",address:tokenAddress,diameter:24}),react.createElement(box.ZP,{"data-testid":"recipient"},react.createElement(component_library.xv,{fontWeight:design_system.U9.Bold,variant:design_system.rK.bodyMd,as:"h5",marginTop:4},tokenName||(0,send_utils.ZB)(tokenAddress)),tokenName&&react.createElement(component_library.xv,{variant:design_system.rK.bodySm,as:"h6",display:design_system.sS.Flex,color:design_system.d9.textAlternative,marginBottom:4},(0,send_utils.ZB)(tokenAddress))),react.createElement(box.ZP,{alignItems:design_system.g1.center,marginLeft:"auto",marginRight:4,gap:2},react.createElement(tooltip.Z,{position:"top",title:t(copiedTokenAddress?"copiedExclamation":"copyToClipboard")},react.createElement(component_library.Ei,{display:design_system.sS.Flex,iconName:copiedTokenAddress?component_library.uH.CopySuccess:component_library.uH.Copy,onClick:()=>handleCopyTokenAddress(tokenAddress),color:design_system.Il.iconMuted,ariaLabel:t(copiedTokenAddress?"copiedExclamation":"copyToClipboard")})),react.createElement(tooltip.Z,{position:"top",title:t("openInBlockExplorer")},react.createElement(component_library.Ei,{display:design_system.sS.Flex,iconName:component_library.uH.Export,color:design_system.Il.iconMuted,onClick:()=>{const blockExplorerTokenLink=(0,dist.getAccountLink)(tokenAddress,chainId,{blockExplorerUrl:(null==rpcPrefs?void 0:rpcPrefs.blockExplorerUrl)??null},null);__webpack_require__.g.platform.openTab({url:blockExplorerTokenLink})},ariaLabel:t("openInBlockExplorer")}))))),react.createElement(component_library.xv,{variant:design_system.rK.bodySm,as:"h6",display:design_system.sS.Flex,marginTop:4,marginBottom:2},nft&&t("contractRequestingAccess"),isContractRequestingSignature&&t("contractRequestingSignature"),!nft&&!isContractRequestingSignature&&t("contractRequestingSpendingCap")),react.createElement(box.ZP,{display:design_system.sS.Flex,borderRadius:design_system.$u.SM,borderStyle:design_system.N4.solid,borderColor:design_system.kf.borderDefault,className:"contract-details-modal__content__contract"},react.createElement(identicon.Z,{className:"contract-details-modal__content__contract__identicon",diameter:24,address:toAddress}),react.createElement(box.ZP,{"data-testid":"recipient"},react.createElement(component_library.xv,{fontWeight:design_system.U9.Bold,variant:design_system.rK.bodyMd,as:"h5",marginTop:4},(null==addressBookEntry||null===(_addressBookEntry$dat=addressBookEntry.data)||void 0===_addressBookEntry$dat?void 0:_addressBookEntry$dat.name)||(0,send_utils.ZB)(toAddress)),(null==addressBookEntry||null===(_addressBookEntry$dat2=addressBookEntry.data)||void 0===_addressBookEntry$dat2?void 0:_addressBookEntry$dat2.name)&&react.createElement(component_library.xv,{variant:design_system.rK.bodySm,as:"h6",display:design_system.sS.Flex,color:design_system.d9.textAlternative,marginBottom:4},(0,send_utils.ZB)(toAddress))),react.createElement(box.ZP,{alignItems:design_system.g1.center,marginLeft:"auto",marginRight:4,gap:2},react.createElement(tooltip.Z,{position:"top",title:t(copiedToAddress?"copiedExclamation":"copyToClipboard")},react.createElement(component_library.Ei,{display:design_system.sS.Flex,iconName:copiedToAddress?component_library.uH.CopySuccess:component_library.uH.Copy,onClick:()=>handleCopyToAddress(toAddress),color:design_system.Il.iconMuted,ariaLabel:t(copiedTokenAddress?"copiedExclamation":"copyToClipboard")})),react.createElement(tooltip.Z,{position:"top",title:t("openInBlockExplorer")},react.createElement(component_library.Ei,{display:design_system.sS.Flex,iconName:component_library.uH.Export,color:design_system.Il.iconMuted,onClick:()=>{const blockExplorerTokenLink=(0,dist.getAccountLink)(toAddress,chainId,{blockExplorerUrl:(null==rpcPrefs?void 0:rpcPrefs.blockExplorerUrl)??null},null);__webpack_require__.g.platform.openTab({url:blockExplorerTokenLink})},ariaLabel:t("openInBlockExplorer")}))))),react.createElement(box.ZP,{display:design_system.sS.Flex,paddingTop:6,paddingRight:4,paddingBottom:6,paddingLeft:4},react.createElement(button_component.Z,{type:"primary",onClick:()=>onClose()},t("recoveryPhraseReminderConfirm"))))}ContractDetailsModal.propTypes={onClose:prop_types_default().func,tokenName:prop_types_default().string,tokenAddress:prop_types_default().string,toAddress:prop_types_default().string,chainId:prop_types_default().string,rpcPrefs:prop_types_default().object,tokenId:prop_types_default().string,assetStandard:prop_types_default().string,assetName:prop_types_default().string,isContractRequestingSignature:prop_types_default().bool},ContractDetailsModal.__docgenInfo={description:"",methods:[],displayName:"ContractDetailsModal",props:{onClose:{description:"Function that should close the modal",type:{name:"func"},required:!1},tokenName:{description:"Name of the token that is waiting to be allowed",type:{name:"string"},required:!1},tokenAddress:{description:"Address of the token that is waiting to be allowed",type:{name:"string"},required:!1},toAddress:{description:"Contract address requesting spending cap",type:{name:"string"},required:!1},chainId:{description:"Current network chainId",type:{name:"string"},required:!1},rpcPrefs:{description:"RPC prefs of the current network",type:{name:"object"},required:!1},tokenId:{description:"The token id of the NFT",type:{name:"string"},required:!1},assetStandard:{description:"Token Standard",type:{name:"string"},required:!1},assetName:{description:"The name of the collection",type:{name:"string"},required:!1},isContractRequestingSignature:{description:"Whether contract requesting signature flow has started",type:{name:"bool"},required:!1}}}}}]);