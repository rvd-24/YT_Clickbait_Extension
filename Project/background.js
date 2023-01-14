console.log("Background is running!")
// chrome.tabs.query({currentWindow:true},tabs=>{
//     var urls=[]
//     chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
//         console.log("onUpdated",tabId,tab.url)
//         urls.push({taburl:tab.url,tabId:tabId})
//     })
//     chrome.tabs.onActivated.addListener(function(tab){
//         console.log("onActivated",tab.tabId)
//         for(var i=0;i<urls.length;i++){
//            console.log(urls[i])
//            var url=new URL(urls[i]['taburl'])
//            console.log(url)
//             if(tab.tabId === urls[i]['tabId'] ){
//                 if(url.hostname==="www.youtube.com"){

//                 }
//             }
//         }
//     })
// })
import JSSoup from "jssoup"
var jssoup=require('jssoup').default