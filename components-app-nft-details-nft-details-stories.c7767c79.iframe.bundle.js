"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[3512],{"./ui/components/app/nft-details/nft-details.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,NoImage:()=>NoImage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>nft_details_stories});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),es=__webpack_require__("./node_modules/react-redux/es/index.js"),react_router=__webpack_require__("./node_modules/react-router/esm/react-router.js"),lodash=__webpack_require__("./node_modules/lodash/lodash.js"),box=__webpack_require__("./ui/components/ui/box/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js"),util=__webpack_require__("./ui/helpers/utils/util.js"),nfts=__webpack_require__("./ui/helpers/utils/nfts.js"),selectors=__webpack_require__("./ui/selectors/index.js"),component_library=__webpack_require__("./ui/components/component-library/index.ts");const AssetBreadcrumb=({accountName,assetName,onBack})=>react.createElement("button",{className:"asset-breadcrumb",onClick:onBack},react.createElement(component_library.JO,{name:component_library.uH.ArrowLeft,"data-testid":"asset__back",marginInlineEnd:3,size:component_library.Jh.Xs}),react.createElement("span",null,accountName)," / ",react.createElement("span",{className:"asset-breadcrumb__asset"},assetName));AssetBreadcrumb.propTypes={accountName:prop_types_default().string.isRequired,assetName:prop_types_default().string.isRequired,onBack:prop_types_default().func.isRequired},AssetBreadcrumb.__docgenInfo={description:"",methods:[],displayName:"AssetBreadcrumb",props:{accountName:{description:"",type:{name:"string"},required:!0},assetName:{description:"",type:{name:"string"},required:!0},onBack:{description:"",type:{name:"func"},required:!0}}};const asset_breadcrumb=AssetBreadcrumb,AssetNavigation=({accountName,assetName,onBack,optionsButton})=>react.createElement("div",{className:"asset-navigation"},react.createElement(asset_breadcrumb,{accountName,assetName,onBack}),optionsButton);AssetNavigation.propTypes={accountName:prop_types_default().string.isRequired,assetName:prop_types_default().string.isRequired,onBack:prop_types_default().func.isRequired,optionsButton:prop_types_default().element},AssetNavigation.__docgenInfo={description:"",methods:[],displayName:"AssetNavigation",props:{accountName:{description:"",type:{name:"string"},required:!0},assetName:{description:"",type:{name:"string"},required:!0},onBack:{description:"",type:{name:"func"},required:!0},optionsButton:{description:"",type:{name:"element"},required:!1}}};const asset_navigation=AssetNavigation;var _DefaultStory$paramet,_DefaultStory$paramet2,_NoImage$parameters,_NoImage$parameters2,metamask=__webpack_require__("./ui/ducks/metamask/metamask.js"),routes=__webpack_require__("./ui/helpers/constants/routes.ts"),actions=__webpack_require__("./ui/store/actions.ts"),network=__webpack_require__("./shared/constants/network.ts"),lib_util=__webpack_require__("./app/scripts/lib/util.ts"),app=__webpack_require__("./shared/constants/app.ts"),nft_options=__webpack_require__("./ui/components/app/nft-options/nft-options.js"),ui_button=__webpack_require__("./ui/components/ui/button/index.js"),send=__webpack_require__("./ui/ducks/send/index.js"),info_tooltip=__webpack_require__("./ui/components/ui/info-tooltip/index.js"),usePrevious=__webpack_require__("./ui/hooks/usePrevious.js"),useCopyToClipboard=__webpack_require__("./ui/hooks/useCopyToClipboard.js"),string_utils=__webpack_require__("./shared/modules/string-utils.ts"),transaction=__webpack_require__("./shared/constants/transaction.ts"),tooltip=__webpack_require__("./ui/components/ui/tooltip/index.js"),conversion_utils=__webpack_require__("./shared/modules/conversion.utils.ts"),nft_item=__webpack_require__("./ui/components/multichain/nft-item/index.js");function NftDetails({nft}){var _nftContracts$find,_currentChain$rpcPref;const{image,imageOriginal,name,description,address,tokenId,standard,isCurrentlyOwned,lastSale}=nft,t=(0,useI18nContext.C)(),history=(0,react_router.k6)(),dispatch=(0,es.I0)(),ipfsGateway=(0,es.v9)(selectors.HW1),nftContracts=(0,es.v9)(metamask._B),currentNetwork=(0,es.v9)(selectors.BVZ),currentChain=(0,es.v9)(selectors.t4u),[addressCopied,handleAddressCopy]=(0,useCopyToClipboard.m)(),nftContractName=null===(_nftContracts$find=nftContracts.find((({address:contractAddress})=>(0,string_utils.J)(contractAddress,address))))||void 0===_nftContracts$find?void 0:_nftContracts$find.name,{metadata:{name:selectedAccountName}}=(0,es.v9)(selectors.E7u),nftImageAlt=(0,nfts.i)(nft),nftSrcUrl=imageOriginal??image,nftImageURL=(0,util.MP)(imageOriginal??image,ipfsGateway),isIpfsURL=null==nftSrcUrl?void 0:nftSrcUrl.startsWith("ipfs:"),isImageHosted=null==image?void 0:image.startsWith("https:"),formattedTimestamp=(0,util.p6)(new Date(null==lastSale?void 0:lastSale.event_timestamp).getTime(),"M/d/y"),prevNft=(0,usePrevious.D)(nft);(0,react.useEffect)((()=>{(0,lodash.isEqual)(prevNft,nft)||(0,actions.x_D)(nft)}),[nft,prevNft]);const openSeaLink=(()=>{switch(currentNetwork){case network.vo.MAINNET:return`https://opensea.io/assets/ethereum/${address}/${tokenId}`;case network.vo.POLYGON:return`https://opensea.io/assets/matic/${address}/${tokenId}`;case network.vo.GOERLI:return`https://testnets.opensea.io/assets/goerli/${address}/${tokenId}`;case network.vo.SEPOLIA:return`https://testnets.opensea.io/assets/sepolia/${address}/${tokenId}`;default:return null}})(),sendDisabled=standard!==transaction.Yn.ERC721&&standard!==transaction.Yn.ERC1155,inPopUp=(0,lib_util.kD)()===app.bE,onSend=async()=>{await dispatch((0,send.PT)({type:transaction.h3.NFT,details:nft})),history.push(routes.Xy)},renderSendButton=()=>!1===isCurrentlyOwned?react.createElement("div",{style:{height:"30px"}}):react.createElement(box.ZP,{display:design_system.sS.Flex,margin:inPopUp?[4,0]:null},react.createElement(ui_button.Z,{type:"primary",onClick:onSend,disabled:sendDisabled,className:"nft-details__send-button","data-testid":"nft-send-button"},t("send")),sendDisabled?react.createElement(info_tooltip.Z,{position:"top",contentText:t("sendingDisabled")}):null);return react.createElement(react.Fragment,null,react.createElement(asset_navigation,{accountName:selectedAccountName,assetName:nftContractName,onBack:()=>history.push(routes.QO),optionsButton:react.createElement(nft_options.Z,{onViewOnOpensea:openSeaLink?()=>__webpack_require__.g.platform.openTab({url:openSeaLink}):null,onRemove:()=>{dispatch((0,actions.xOv)(address,tokenId)),dispatch((0,actions.Rks)("")),dispatch((0,actions.NDZ)("success")),history.push(routes.QO)}})}),react.createElement(box.ZP,{className:"nft-details"},react.createElement(box.ZP,{className:"nft-details__top-section",gap:6,flexDirection:design_system.Qb.Column},react.createElement(box.ZP,{className:"nft-details__nft-item"},react.createElement(nft_item.g,{nftImageURL,src:isImageHosted?image:nftImageURL,alt:image?nftImageAlt:"",name,tokenId,networkName:currentChain.nickname,networkSrc:null===(_currentChain$rpcPref=currentChain.rpcPrefs)||void 0===_currentChain$rpcPref?void 0:_currentChain$rpcPref.imageUrl,isIpfsURL,clickable:!0})),react.createElement(box.ZP,{flexDirection:design_system.Qb.Column,className:"nft-details__info",marginTop:4,justifyContent:design_system.E0.spaceBetween},react.createElement("div",null,react.createElement(component_library.xv,{color:design_system.d9.textDefault,variant:design_system.rK.headingSm,as:"h4",fontWeight:design_system.U9.Bold,marginBottom:2},name),react.createElement(component_library.xv,{color:design_system.d9.textMuted,variant:design_system.rK.bodyMd,as:"h5",marginBottom:4,overflowWrap:design_system.mn.BreakWord},"#",tokenId)),description?react.createElement("div",null,react.createElement(component_library.xv,{color:design_system.d9.textDefault,variant:design_system.rK.bodySmBold,as:"h6",marginBottom:2,className:"nft-details__description"},t("description")),react.createElement(component_library.xv,{color:design_system.d9.textAlternative,variant:design_system.rK.bodySm,as:"h6",overflowWrap:design_system.mn.BreakWord,marginBottom:4},description)):null,inPopUp?null:renderSendButton())),react.createElement(box.ZP,{marginBottom:2},lastSale?react.createElement(react.Fragment,null,react.createElement(box.ZP,{display:design_system.sS.Flex,flexDirection:design_system.Qb.Row},react.createElement(component_library.xv,{color:design_system.d9.textDefault,variant:design_system.rK.bodySmBold,as:"h6",marginBottom:4,marginRight:2,className:"nft-details__link-title"},t("lastSold")),react.createElement(box.ZP,{display:design_system.sS.Flex,flexDirection:design_system.Qb.Row,className:"nft-details__contract-wrapper"},react.createElement(component_library.xv,{color:design_system.d9.textAlternative,variant:design_system.rK.bodySm,as:"h6",overflowWrap:design_system.mn.BreakWord,marginBottom:4},formattedTimestamp))),react.createElement(box.ZP,{display:design_system.sS.Flex,flexDirection:design_system.Qb.Row},react.createElement(component_library.xv,{color:design_system.d9.textDefault,variant:design_system.rK.bodySmBold,as:"h6",marginBottom:4,marginRight:2,className:"nft-details__link-title"},t("lastPriceSold")),react.createElement(box.ZP,{display:design_system.sS.Flex,flexDirection:design_system.Qb.Row,className:"nft-details__contract-wrapper"},react.createElement(component_library.xv,{color:design_system.d9.textAlternative,variant:design_system.rK.bodySm,as:"h6",overflowWrap:design_system.mn.BreakWord,marginBottom:4},`${Number((0,conversion_utils.B6)(lastSale.total_price))} ${lastSale.payment_token.symbol}`)))):null,react.createElement(box.ZP,{display:design_system.sS.Flex,flexDirection:design_system.Qb.Row},react.createElement(component_library.xv,{color:design_system.d9.textDefault,variant:design_system.rK.bodySmBold,as:"h6",marginBottom:4,marginRight:2,className:"nft-details__link-title"},t("contractAddress")),react.createElement(box.ZP,{display:design_system.sS.Flex,flexDirection:design_system.Qb.Row,className:"nft-details__contract-wrapper"},react.createElement(component_library.xv,{color:design_system.d9.textAlternative,variant:design_system.rK.bodySm,as:"h6",overflowWrap:design_system.mn.BreakWord,marginBottom:4},(0,util.$Q)(address)),react.createElement(tooltip.Z,{wrapperClassName:"nft-details__tooltip-wrapper",position:"bottom",title:t(addressCopied?"copiedExclamation":"copyToClipboard")},react.createElement(component_library.Ei,{ariaLabel:"copy",color:design_system.EY.iconAlternative,className:"nft-details__contract-copy-button","data-testid":"nft-address-copy",onClick:()=>{handleAddressCopy(address)},iconName:addressCopied?component_library.uH.CopySuccess:component_library.uH.Copy})))),inPopUp?renderSendButton():null,react.createElement(component_library.xv,{color:design_system.d9.textAlternative,variant:design_system.rK.bodySm,as:"h6"},t("nftDisclaimer")))))}NftDetails.propTypes={nft:prop_types_default().shape({address:prop_types_default().string.isRequired,tokenId:prop_types_default().string.isRequired,isCurrentlyOwned:prop_types_default().bool,name:prop_types_default().string,description:prop_types_default().string,image:prop_types_default().string,standard:prop_types_default().string,imageThumbnail:prop_types_default().string,imagePreview:prop_types_default().string,imageOriginal:prop_types_default().string,creator:prop_types_default().shape({address:prop_types_default().string,config:prop_types_default().string,profile_img_url:prop_types_default().string}),lastSale:prop_types_default().shape({event_timestamp:prop_types_default().string,total_price:prop_types_default().string,payment_token:prop_types_default().shape({symbol:prop_types_default().string})})})},NftDetails.__docgenInfo={description:"",methods:[],displayName:"NftDetails",props:{nft:{description:"",type:{name:"shape",value:{address:{name:"string",required:!0},tokenId:{name:"string",required:!0},isCurrentlyOwned:{name:"bool",required:!1},name:{name:"string",required:!1},description:{name:"string",required:!1},image:{name:"string",required:!1},standard:{name:"string",required:!1},imageThumbnail:{name:"string",required:!1},imagePreview:{name:"string",required:!1},imageOriginal:{name:"string",required:!1},creator:{name:"shape",value:{address:{name:"string",required:!1},config:{name:"string",required:!1},profile_img_url:{name:"string",required:!1}},required:!1},lastSale:{name:"shape",value:{event_timestamp:{name:"string",required:!1},total_price:{name:"string",required:!1},payment_token:{name:"shape",value:{symbol:{name:"string",required:!1}},required:!1}},required:!1}}},required:!1}}};const nft={name:"Catnip Spicywright",tokenId:"1124157",address:"0x06012c8cf97bead5deae237070f9587f8e7a266d",image:"./catnip-spicywright.png",imageThumbnail:"https://www.cryptokitties.co/.../1124157",description:"Good day. My name is Catnip Spicywight, which got me teased a lot in high school. If I want to put low fat mayo all over my hamburgers, I shouldn't have to answer to anyone about it, am I right? One time I beat Arlene in an arm wrestle.",lastSale:{event_timestamp:"2023-01-18T21:51:23",total_price:"4900000000000000",payment_token:{symbol:"ETH"}}},nft_details_stories={title:"Components/App/NftsDetail",argTypes:{nft:{control:"object"}},args:{nft}},DefaultStory=args=>react.createElement(NftDetails,args);DefaultStory.storyName="Default";const NoImage=args=>react.createElement(NftDetails,args);NoImage.args={nft:{...nft,image:void 0}},DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"args => {\n  return <NftDetails {...args} />;\n}",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source}}},NoImage.parameters={...NoImage.parameters,docs:{...null===(_NoImage$parameters=NoImage.parameters)||void 0===_NoImage$parameters?void 0:_NoImage$parameters.docs,source:{originalSource:"args => {\n  return <NftDetails {...args} />;\n}",...null===(_NoImage$parameters2=NoImage.parameters)||void 0===_NoImage$parameters2||null===(_NoImage$parameters2=_NoImage$parameters2.docs)||void 0===_NoImage$parameters2?void 0:_NoImage$parameters2.source}}};const __namedExportsOrder=["DefaultStory","NoImage"];DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"},NoImage.__docgenInfo={description:"",methods:[],displayName:"NoImage"}},"./ui/components/app/nft-options/nft-options.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),_contexts_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/contexts/i18n.js"),_ui_menu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/ui/menu/index.js"),_component_library__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/component-library/index.ts"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/helpers/constants/design-system.ts");const NftOptions=({onRemove,onViewOnOpensea})=>{const t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_i18n__WEBPACK_IMPORTED_MODULE_1__.OO),[nftOptionsOpen,setNftOptionsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_3__.Ei,{iconName:_component_library__WEBPACK_IMPORTED_MODULE_3__.uH.MoreVertical,className:"nft-options__button","data-testid":"nft-options__button",onClick:()=>setNftOptionsOpen(!0),color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_4__.Il.textDefault,size:_component_library__WEBPACK_IMPORTED_MODULE_3__.hp.Sm,ariaLabel:t("nftOptions")}),nftOptionsOpen?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_menu__WEBPACK_IMPORTED_MODULE_2__.v,{"data-testid":"close-nft-options-menu",anchorElement:ref.current,onHide:()=>setNftOptionsOpen(!1)},onViewOnOpensea?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_menu__WEBPACK_IMPORTED_MODULE_2__.s,{iconName:_component_library__WEBPACK_IMPORTED_MODULE_3__.uH.Export,"data-testid":"nft-options__view-on-opensea",onClick:()=>{setNftOptionsOpen(!1),onViewOnOpensea()}},t("viewOnOpensea")):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_menu__WEBPACK_IMPORTED_MODULE_2__.s,{iconName:_component_library__WEBPACK_IMPORTED_MODULE_3__.uH.Trash,"data-testid":"nft-item-remove",onClick:()=>{setNftOptionsOpen(!1),onRemove()}},t("removeNFT"))):null)};NftOptions.propTypes={onRemove:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired,onViewOnOpensea:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func},NftOptions.__docgenInfo={description:"",methods:[],displayName:"NftOptions",props:{onRemove:{description:"",type:{name:"func"},required:!0},onViewOnOpensea:{description:"",type:{name:"func"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=NftOptions}}]);