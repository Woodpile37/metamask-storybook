"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[4355],{"./ui/components/app/transaction-list/transaction-list.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>transaction_list_stories});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),es=__webpack_require__("./node_modules/react-redux/es/index.js"),transactions=__webpack_require__("./ui/selectors/transactions.js"),selectors=__webpack_require__("./ui/selectors/index.js"),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js"),transaction_list_item=__webpack_require__("./ui/components/app/transaction-list-item/index.js"),list_item=__webpack_require__("./ui/components/ui/list-item/index.js"),transaction_status_label=__webpack_require__("./ui/components/app/transaction-status-label/transaction-status-label.js"),transaction_icon=__webpack_require__("./ui/components/app/transaction-icon/index.js"),useTransactionDisplayData=__webpack_require__("./ui/hooks/useTransactionDisplayData.js"),util=__webpack_require__("./ui/helpers/utils/util.js"),transaction=__webpack_require__("./shared/constants/transaction.ts"),cancel_button=__webpack_require__("./ui/components/app/cancel-button/index.js"),swaps=__webpack_require__("./ui/ducks/swaps/swaps.js"),site_origin=__webpack_require__("./ui/components/ui/site-origin/index.js"),transaction_list_item_details=__webpack_require__("./ui/components/app/transaction-list-item-details/index.js");function SmartTransactionListItem({smartTransaction,transactionGroup,isEarliestNonce=!1}){const dispatch=(0,es.I0)(),t=(0,useI18nContext.C)(),[cancelSwapLinkClicked,setCancelSwapLinkClicked]=(0,react.useState)(!1),[showDetails,setShowDetails]=(0,react.useState)(!1),{primaryCurrency,recipientAddress,isPending,senderAddress}=(0,useTransactionDisplayData.i)(transactionGroup),{sourceTokenSymbol,destinationTokenSymbol,time,status}=smartTransaction,category=transaction.Bd.swap,title=t("swapTokenToToken",[sourceTokenSymbol,destinationTokenSymbol]),date=(0,util.sK)(time);let displayedStatusKey;status===transaction.L6.pending?displayedStatusKey=transaction.Ss.pending:null!=status&&status.startsWith(transaction.L6.cancelled)&&(displayedStatusKey=transaction.Ss.cancelled);const showCancelSwapLink=smartTransaction.cancellable&&!cancelSwapLinkClicked,toggleShowDetails=(0,react.useCallback)((()=>{setShowDetails((prev=>!prev))}),[]);return react.createElement(react.Fragment,null,react.createElement(list_item.Z,{className:"transaction-list-item transaction-list-item--unconfirmed",title,onClick:toggleShowDetails,icon:react.createElement(transaction_icon.Z,{category,status:displayedStatusKey}),subtitle:react.createElement("h3",null,react.createElement(transaction_status_label.Z,{isPending:!0,isEarliestNonce,date,status:displayedStatusKey}),react.createElement(site_origin.Z,{className:"transaction-list-item__origin",siteOrigin:"metamask",title:"metamask"}))},displayedStatusKey===transaction.Ss.pending&&showCancelSwapLink&&react.createElement("div",{className:"transaction-list-item__pending-actions"},react.createElement(cancel_button.Z,{transaction:smartTransaction.uuid,cancelTransaction:e=>{null==e||e.preventDefault(),dispatch((0,swaps.cZ)(smartTransaction.uuid)),setCancelSwapLinkClicked(!0)}}))),showDetails&&react.createElement(transaction_list_item_details.Z,{title,onClose:toggleShowDetails,senderAddress,recipientAddress,primaryCurrency,isEarliestNonce,transactionGroup,transactionStatus:()=>react.createElement(transaction_status_label.Z,{isPending,isEarliestNonce,date,status:displayedStatusKey,statusOnly:!0})}))}SmartTransactionListItem.propTypes={smartTransaction:prop_types_default().object.isRequired,isEarliestNonce:prop_types_default().bool,transactionGroup:prop_types_default().object},SmartTransactionListItem.__docgenInfo={description:"",methods:[],displayName:"SmartTransactionListItem",props:{isEarliestNonce:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},smartTransaction:{description:"",type:{name:"object"},required:!0},transactionGroup:{description:"",type:{name:"object"},required:!1}}};var ui_button=__webpack_require__("./ui/components/ui/button/index.js"),constants_transactions=__webpack_require__("./ui/helpers/constants/transactions.js"),constants_swaps=__webpack_require__("./shared/constants/swaps.ts"),string_utils=__webpack_require__("./shared/modules/string-utils.ts");const tokenTransactionFilter=({initialTransaction:{type,destinationTokenSymbol,sourceTokenSymbol}})=>!constants_transactions.q[type]&&(type!==transaction.iU.swap||("ETH"===destinationTokenSymbol||"ETH"===sourceTokenSymbol)),getFilteredTransactionGroups=(transactionGroups,hideTokenTransactions,tokenAddress,chainId)=>hideTokenTransactions?transactionGroups.filter(tokenTransactionFilter):tokenAddress?transactionGroups.filter(((recipientAddress,chainId)=>({initialTransaction:{txParams}})=>(0,string_utils.J)(null==txParams?void 0:txParams.to,recipientAddress)||(null==txParams?void 0:txParams.to)===constants_swaps.qS[chainId]&&txParams.data.match(recipientAddress.slice(2)))(tokenAddress,chainId)):transactionGroups;function TransactionList({hideTokenTransactions,tokenAddress}){const[limit,setLimit]=(0,react.useState)(10),t=(0,useI18nContext.C)(),unfilteredPendingTransactions=(0,es.v9)(transactions.Zb),unfilteredCompletedTransactions=(0,es.v9)(transactions.bG),chainId=(0,es.v9)(selectors.BVZ),pendingTransactions=(0,react.useMemo)((()=>getFilteredTransactionGroups(unfilteredPendingTransactions,hideTokenTransactions,tokenAddress,chainId)),[hideTokenTransactions,tokenAddress,unfilteredPendingTransactions,chainId]),completedTransactions=(0,react.useMemo)((()=>getFilteredTransactionGroups(unfilteredCompletedTransactions,hideTokenTransactions,tokenAddress,chainId)),[hideTokenTransactions,tokenAddress,unfilteredCompletedTransactions,chainId]),viewMore=(0,react.useCallback)((()=>setLimit((prev=>prev+10))),[]);return react.createElement("div",{className:"transaction-list"},react.createElement("div",{className:"transaction-list__transactions"},pendingTransactions.length>0&&react.createElement("div",{className:"transaction-list__pending-transactions"},react.createElement("div",{className:"transaction-list__header"},`${t("queue")} (${pendingTransactions.length})`),pendingTransactions.sort(((a,b)=>b.primaryTransaction.time-a.primaryTransaction.time)).map(((transactionGroup,index)=>transactionGroup.initialTransaction.transactionType===transaction.iU.smart?react.createElement(SmartTransactionListItem,{isEarliestNonce:0===index,smartTransaction:transactionGroup.initialTransaction,transactionGroup,key:`${transactionGroup.nonce}:${index}`}):react.createElement(transaction_list_item.Z,{isEarliestNonce:0===index,transactionGroup,key:`${transactionGroup.nonce}:${index}`})))),react.createElement("div",{className:"transaction-list__completed-transactions"},pendingTransactions.length>0?react.createElement("div",{className:"transaction-list__header"},t("history")):null,completedTransactions.length>0?completedTransactions.sort(((a,b)=>b.primaryTransaction.time-a.primaryTransaction.time)).slice(0,limit).map(((transactionGroup,index)=>{var _transactionGroup$ini;return"smart"===(null===(_transactionGroup$ini=transactionGroup.initialTransaction)||void 0===_transactionGroup$ini?void 0:_transactionGroup$ini.transactionType)?react.createElement(SmartTransactionListItem,{transactionGroup,smartTransaction:transactionGroup.initialTransaction,key:`${transactionGroup.nonce}:${index}`}):react.createElement(transaction_list_item.Z,{transactionGroup,key:`${transactionGroup.nonce}:${limit+index-10}`})})):react.createElement("div",{className:"transaction-list__empty"},react.createElement("div",{className:"transaction-list__empty-text"},t("noTransactions"))),completedTransactions.length>limit&&react.createElement(ui_button.Z,{className:"transaction-list__view-more",type:"secondary",onClick:viewMore},t("viewMore")))))}var _DefaultStory$paramet,_DefaultStory$paramet2,_DefaultStory$paramet3;TransactionList.propTypes={hideTokenTransactions:prop_types_default().bool,tokenAddress:prop_types_default().string},TransactionList.defaultProps={hideTokenTransactions:!1,tokenAddress:void 0},TransactionList.__docgenInfo={description:"",methods:[],displayName:"TransactionList",props:{hideTokenTransactions:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},tokenAddress:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1}}};const transaction_list_stories={title:"Components/App/TransactionList"},PageSet=({children})=>children,DefaultStory=()=>react.createElement(PageSet,null,react.createElement(TransactionList,null));DefaultStory.storyName="Default",DefaultStory.parameters={...DefaultStory.parameters,docs:{...null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs,source:{originalSource:"() => {\n  return <PageSet>\n      <TransactionList />\n    </PageSet>;\n}",...null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet3=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet3?void 0:_DefaultStory$paramet3.source}}};const __namedExportsOrder=["DefaultStory"];DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"}}}]);