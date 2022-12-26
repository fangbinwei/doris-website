"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[17679],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},k=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,c=d["".concat(o,".").concat(u)]||d[u]||s[u]||i;return n?a.createElement(c,p(p({ref:t},k),{},{components:n})):a.createElement(c,p({ref:t},k))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,p[1]=l;for(var m=2;m<i;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const i={title:"\u5bfc\u5165 Json \u683c\u5f0f\u6570\u636e",language:"zh-CN"},p=void 0,l={unversionedId:"administrator-guide/load-data/load-json-format",id:"version-0.15/administrator-guide/load-data/load-json-format",title:"\u5bfc\u5165 Json \u683c\u5f0f\u6570\u636e",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/administrator-guide/load-data/load-json-format.md",sourceDirName:"administrator-guide/load-data",slug:"/administrator-guide/load-data/load-json-format",permalink:"/zh-CN/docs/0.15/administrator-guide/load-data/load-json-format",draft:!1,tags:[],version:"0.15",frontMatter:{title:"\u5bfc\u5165 Json \u683c\u5f0f\u6570\u636e",language:"zh-CN"},sidebar:"docs",previous:{title:"Insert Into",permalink:"/zh-CN/docs/0.15/administrator-guide/load-data/insert-into-manual"},next:{title:"Bitmap \u7d22\u5f15",permalink:"/zh-CN/docs/0.15/administrator-guide/alter-table/alter-table-bitmap-index"}},o={},m=[{value:"\u652f\u6301\u7684\u5bfc\u5165\u65b9\u5f0f",id:"\u652f\u6301\u7684\u5bfc\u5165\u65b9\u5f0f",level:2},{value:"\u652f\u6301\u7684 Json \u683c\u5f0f",id:"\u652f\u6301\u7684-json-\u683c\u5f0f",level:2},{value:"Json Path",id:"json-path",level:2},{value:"Json Path \u548c Columns",id:"json-path-\u548c-columns",level:2},{value:"NULL \u548c Default \u503c",id:"null-\u548c-default-\u503c",level:2},{value:"LargetInt\u4e0eDecimal",id:"largetint\u4e0edecimal",level:2},{value:"\u5e94\u7528\u793a\u4f8b",id:"\u5e94\u7528\u793a\u4f8b",level:2},{value:"Stream Load",id:"stream-load",level:3},{value:"Routine Load",id:"routine-load",level:3}],k={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5bfc\u5165-json-\u683c\u5f0f\u6570\u636e"},"\u5bfc\u5165 Json \u683c\u5f0f\u6570\u636e"),(0,r.kt)("p",null,"Doris \u4ece 0.12 \u7248\u672c\u5f00\u59cb\u652f\u6301 Json \u683c\u5f0f\u7684\u6570\u636e\u5bfc\u5165\u3002"),(0,r.kt)("h2",{id:"\u652f\u6301\u7684\u5bfc\u5165\u65b9\u5f0f"},"\u652f\u6301\u7684\u5bfc\u5165\u65b9\u5f0f"),(0,r.kt)("p",null,"\u76ee\u524d\u53ea\u6709\u4ee5\u4e0b\u5bfc\u5165\u65b9\u5f0f\u652f\u6301 Json \u683c\u5f0f\u7684\u6570\u636e\u5bfc\u5165\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stream Load"),(0,r.kt)("li",{parentName:"ul"},"Routine Load")),(0,r.kt)("p",null,"\u5173\u4e8e\u4ee5\u4e0a\u5bfc\u5165\u65b9\u5f0f\u7684\u5177\u4f53\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605\u76f8\u5173\u6587\u6863\u3002\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5728\u8fd9\u4e9b\u5bfc\u5165\u65b9\u5f0f\u4e2d\u5173\u4e8e Json \u90e8\u5206\u7684\u4f7f\u7528\u8bf4\u660e\u3002"),(0,r.kt)("h2",{id:"\u652f\u6301\u7684-json-\u683c\u5f0f"},"\u652f\u6301\u7684 Json \u683c\u5f0f"),(0,r.kt)("p",null,"\u5f53\u524d\u524d\u4ec5\u652f\u6301\u4ee5\u4e0b\u4e24\u79cd Json \u683c\u5f0f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4ee5 Array \u8868\u793a\u7684\u591a\u884c\u6570\u636e"),(0,r.kt)("p",{parentName:"li"},"\u4ee5 Array \u4e3a\u6839\u8282\u70b9\u7684 Json \u683c\u5f0f\u3002Array \u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u8868\u793a\u8981\u5bfc\u5165\u7684\u4e00\u884c\u6570\u636e\uff0c\u901a\u5e38\u662f\u4e00\u4e2a Object\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'[\n    { "id": 123, "city" : "beijing"},\n    { "id": 456, "city" : "shanghai"},\n    ...\n]\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'[\n    { "id": 123, "city" : { "name" : "beijing", "region" : "haidian"}},\n    { "id": 456, "city" : { "name" : "beijing", "region" : "chaoyang"}},\n    ...\n]\n')),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u79cd\u65b9\u5f0f\u901a\u5e38\u7528\u4e8e Stream Load \u5bfc\u5165\u65b9\u5f0f\uff0c\u4ee5\u4fbf\u5728\u4e00\u6279\u5bfc\u5165\u6570\u636e\u4e2d\u8868\u793a\u591a\u884c\u6570\u636e\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u79cd\u65b9\u5f0f\u5fc5\u987b\u914d\u5408\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"strip_outer_array=true")," \u4f7f\u7528\u3002Doris\u5728\u89e3\u6790\u65f6\u4f1a\u5c06\u6570\u7ec4\u5c55\u5f00\uff0c\u7136\u540e\u4f9d\u6b21\u89e3\u6790\u5176\u4e2d\u7684\u6bcf\u4e00\u4e2a Object \u4f5c\u4e3a\u4e00\u884c\u6570\u636e\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4ee5 Object \u8868\u793a\u7684\u5355\u884c\u6570\u636e"),(0,r.kt)("p",{parentName:"li"},"\u4ee5 Object \u4e3a\u6839\u8282\u70b9\u7684 Json \u683c\u5f0f\u3002\u6574\u4e2a Object \u5373\u8868\u793a\u8981\u5bfc\u5165\u7684\u4e00\u884c\u6570\u636e\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{ "id": 123, "city" : "beijing"}\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{ "id": 123, "city" : { "name" : "beijing", "region" : "haidian" }}\n')),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u79cd\u65b9\u5f0f\u901a\u5e38\u7528\u4e8e Routine Load \u5bfc\u5165\u65b9\u5f0f\uff0c\u5982\u8868\u793a Kafka \u4e2d\u7684\u4e00\u6761\u6d88\u606f\uff0c\u5373\u4e00\u884c\u6570\u636e\u3002\n"))),(0,r.kt)("h2",{id:"json-path"},"Json Path"),(0,r.kt)("p",null,"Doris \u652f\u6301\u901a\u8fc7 Json Path \u62bd\u53d6 Json \u4e2d\u6307\u5b9a\u7684\u6570\u636e\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\uff1a\u56e0\u4e3a\u5bf9\u4e8e Array \u7c7b\u578b\u7684\u6570\u636e\uff0cDoris \u4f1a\u5148\u8fdb\u884c\u6570\u7ec4\u5c55\u5f00\uff0c\u6700\u7ec8\u6309\u7167 Object \u683c\u5f0f\u8fdb\u884c\u5355\u884c\u5904\u7406\u3002\u6240\u4ee5\u672c\u6587\u6863\u4e4b\u540e\u7684\u793a\u4f8b\u90fd\u4ee5\u5355\u4e2a Object \u683c\u5f0f\u7684 Json \u6570\u636e\u8fdb\u884c\u8bf4\u660e\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0d\u6307\u5b9a Json Path"),(0,r.kt)("p",{parentName:"li"},"  \u5982\u679c\u6ca1\u6709\u6307\u5b9a Json Path\uff0c\u5219 Doris \u4f1a\u9ed8\u8ba4\u4f7f\u7528\u8868\u4e2d\u7684\u5217\u540d\u67e5\u627e Object \u4e2d\u7684\u5143\u7d20\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("p",{parentName:"li"},"  \u8868\u4e2d\u5305\u542b\u4e24\u5217: ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"city")),(0,r.kt)("p",{parentName:"li"},"  Json \u6570\u636e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{ "id": 123, "city" : "beijing"}\n')),(0,r.kt)("p",{parentName:"li"},"  \u5219 Doris \u4f1a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"city")," \u8fdb\u884c\u5339\u914d\uff0c\u5f97\u5230\u6700\u7ec8\u6570\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"123")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"beijing"),"\u3002"),(0,r.kt)("p",{parentName:"li"},"  \u5982\u679c Json \u6570\u636e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{ "id": 123, "name" : "beijing"}\n')),(0,r.kt)("p",{parentName:"li"},"  \u5219\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"city")," \u8fdb\u884c\u5339\u914d\uff0c\u5f97\u5230\u6700\u7ec8\u6570\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"123")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\u3002\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a Json Path"),(0,r.kt)("p",{parentName:"li"},"  \u901a\u8fc7\u4e00\u4e2a Json \u6570\u636e\u7684\u5f62\u5f0f\u6307\u5b9a\u4e00\u7ec4 Json Path\u3002\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u8868\u793a\u4e00\u4e2a\u8981\u62bd\u53d6\u7684\u5217\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'["$.id", "$.name"]\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'["$.id.sub_id", "$.name[0]", "$.city[0]"]\n')),(0,r.kt)("p",{parentName:"li"},"  Doris \u4f1a\u4f7f\u7528\u6307\u5b9a\u7684 Json Path \u8fdb\u884c\u6570\u636e\u5339\u914d\u548c\u62bd\u53d6\u3002\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5339\u914d\u975e\u57fa\u672c\u7c7b\u578b"),(0,r.kt)("p",{parentName:"li"},"  \u524d\u9762\u7684\u793a\u4f8b\u6700\u7ec8\u5339\u914d\u5230\u7684\u6570\u503c\u90fd\u662f\u57fa\u672c\u7c7b\u578b\uff0c\u5982\u6574\u578b\u3001\u5b57\u7b26\u4e32\u7b49\u3002Doris \u5f53\u524d\u6682\u4e0d\u652f\u6301\u590d\u5408\u7c7b\u578b\uff0c\u5982 Array\u3001Map \u7b49\u3002\u6240\u4ee5\u5f53\u5339\u914d\u5230\u4e00\u4e2a\u975e\u57fa\u672c\u7c7b\u578b\u65f6\uff0cDoris \u4f1a\u5c06\u8be5\u7c7b\u578b\u8f6c\u6362\u4e3a Json \u683c\u5f0f\u7684\u5b57\u7b26\u4e32\uff0c\u5e76\u4ee5\u5b57\u7b26\u4e32\u7c7b\u578b\u8fdb\u884c\u5bfc\u5165\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("p",{parentName:"li"},"  Json \u6570\u636e\u4e3a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{ "id": 123, "city" : { "name" : "beijing", "region" : "haidian" }}\n')),(0,r.kt)("p",{parentName:"li"},"  Json Path \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},'["$.city"]'),"\u3002\u5219\u5339\u914d\u5230\u7684\u5143\u7d20\u4e3a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{ "name" : "beijing", "region" : "haidian" }\n')),(0,r.kt)("p",{parentName:"li"},"  \u8be5\u5143\u7d20\u4f1a\u88ab\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\u8fdb\u884c\u540e\u7eed\u5bfc\u5165\u64cd\u4f5c\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\"{'name':'beijing','region':'haidian'}\"\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5339\u914d\u5931\u8d25"),(0,r.kt)("p",{parentName:"li"},"  \u5f53\u5339\u914d\u5931\u8d25\u65f6\uff0c\u5c06\u4f1a\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("p",{parentName:"li"},"  Json \u6570\u636e\u4e3a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{ "id": 123, "name" : "beijing"}\n')),(0,r.kt)("p",{parentName:"li"},"  Json Path \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},'["$.id", "$.info"]'),"\u3002\u5219\u5339\u914d\u5230\u7684\u5143\u7d20\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"123")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\u3002"),(0,r.kt)("p",{parentName:"li"},"  Doris \u5f53\u524d\u4e0d\u533a\u5206 Json \u6570\u636e\u4e2d\u8868\u793a\u7684 null \u503c\uff0c\u548c\u5339\u914d\u5931\u8d25\u65f6\u4ea7\u751f\u7684 null \u503c\u3002\u5047\u8bbe Json \u6570\u636e\u4e3a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{ "id": 123, "name" : null }\n')),(0,r.kt)("p",{parentName:"li"},"  \u5219\u4f7f\u7528\u4ee5\u4e0b\u4e24\u79cd Json Path \u4f1a\u83b7\u5f97\u76f8\u540c\u7684\u7ed3\u679c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"123")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'["$.id", "$.name"]\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'["$.id", "$.info"]\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b8c\u5168\u5339\u914d\u5931\u8d25"),(0,r.kt)("p",{parentName:"li"},"  \u4e3a\u9632\u6b62\u4e00\u4e9b\u53c2\u6570\u8bbe\u7f6e\u9519\u8bef\u5bfc\u81f4\u7684\u8bef\u64cd\u4f5c\u3002Doris \u5728\u5c1d\u8bd5\u5339\u914d\u4e00\u884c\u6570\u636e\u65f6\uff0c\u5982\u679c\u6240\u6709\u5217\u90fd\u5339\u914d\u5931\u8d25\uff0c\u5219\u4f1a\u8ba4\u4e3a\u8fd9\u4e2a\u662f\u4e00\u4e2a\u9519\u8bef\u884c\u3002\u5047\u8bbe Json \u6570\u636e\u4e3a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{ "id": 123, "city" : "beijing" }\n')),(0,r.kt)("p",{parentName:"li"},"  \u5982\u679c Json Path \u9519\u8bef\u7684\u5199\u4e3a\uff08\u6216\u8005\u4e0d\u6307\u5b9a Json Path \u65f6\uff0c\u8868\u4e2d\u7684\u5217\u4e0d\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"city"),"\uff09\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'["$.ad", "$.infa"]\n')),(0,r.kt)("p",{parentName:"li"},"  \u5219\u4f1a\u5bfc\u81f4\u5b8c\u5168\u5339\u914d\u5931\u8d25\uff0c\u5219\u8be5\u884c\u4f1a\u6807\u8bb0\u4e3a\u9519\u8bef\u884c\uff0c\u800c\u4e0d\u662f\u4ea7\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"null, null"),"\u3002"))),(0,r.kt)("h2",{id:"json-path-\u548c-columns"},"Json Path \u548c Columns"),(0,r.kt)("p",null,"Json Path \u7528\u4e8e\u6307\u5b9a\u5982\u4f55\u5bf9 JSON \u683c\u5f0f\u4e2d\u7684\u6570\u636e\u8fdb\u884c\u62bd\u53d6\uff0c\u800c Columns \u6307\u5b9a\u5217\u7684\u6620\u5c04\u548c\u8f6c\u6362\u5173\u7cfb\u3002\u4e24\u8005\u53ef\u4ee5\u914d\u5408\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u6362\u53e5\u8bdd\u8bf4\uff0c\u76f8\u5f53\u4e8e\u901a\u8fc7 Json Path\uff0c\u5c06\u4e00\u4e2a Json \u683c\u5f0f\u7684\u6570\u636e\uff0c\u6309\u7167 Json Path \u4e2d\u6307\u5b9a\u7684\u5217\u987a\u5e8f\u8fdb\u884c\u4e86\u5217\u7684\u91cd\u6392\u3002\u4e4b\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 Columns\uff0c\u5c06\u8fd9\u4e2a\u91cd\u6392\u540e\u7684\u6e90\u6570\u636e\u548c\u8868\u7684\u5217\u8fdb\u884c\u6620\u5c04\u3002\u4e3e\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,"\u6570\u636e\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"k1" : 1, "k2": 2}\n')),(0,r.kt)("p",null,"\u8868\u7ed3\u6784\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"k2 int, k1 int")),(0,r.kt)("p",null,"\u5bfc\u5165\u8bed\u53e51\uff08\u4ee5 Stream Load \u4e3a\u4f8b\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -v --location-trusted -u root: -H "format: json" -H "jsonpaths: [\\"$.k2\\", \\"$.k1\\"]" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",null,"\u5bfc\u5165\u8bed\u53e51\u4e2d\uff0c\u4ec5\u6307\u5b9a\u4e86 Json Path\uff0c\u6ca1\u6709\u6307\u5b9a Columns\u3002\u5176\u4e2d Json Path \u7684\u4f5c\u7528\u662f\u5c06 Json \u6570\u636e\u6309\u7167 Json Path \u4e2d\u5b57\u6bb5\u7684\u987a\u5e8f\u8fdb\u884c\u62bd\u53d6\uff0c\u4e4b\u540e\u4f1a\u6309\u7167\u8868\u7ed3\u6784\u7684\u987a\u5e8f\u8fdb\u884c\u5199\u5165\u3002\u6700\u7ec8\u5bfc\u5165\u7684\u6570\u636e\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+------+------+\n| k1   | k2   |\n+------+------+\n|    2 |    1 |\n+------+------+\n")),(0,r.kt)("p",null,'\u4f1a\u770b\u5230\uff0c\u5b9e\u9645\u7684 k1 \u5217\u5bfc\u5165\u4e86 Json \u6570\u636e\u4e2d\u7684 "k2" \u5217\u7684\u503c\u3002\u8fd9\u662f\u56e0\u4e3a\uff0cJson \u4e2d\u5b57\u6bb5\u540d\u79f0\u5e76\u4e0d\u7b49\u540c\u4e8e\u8868\u7ed3\u6784\u4e2d\u5b57\u6bb5\u7684\u540d\u79f0\u3002\u6211\u4eec\u9700\u8981\u663e\u5f0f\u7684\u6307\u5b9a\u8fd9\u4e24\u8005\u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb\u3002'),(0,r.kt)("p",null,"\u5bfc\u5165\u8bed\u53e52\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -v --location-trusted -u root: -H "format: json" -H "jsonpaths: [\\"$.k2\\", \\"$.k1\\"]" -H "columns: k2, k1" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",null,"\u76f8\u6bd4\u5982\u5bfc\u5165\u8bed\u53e51\uff0c\u8fd9\u91cc\u589e\u52a0\u4e86 Columns \u5b57\u6bb5\uff0c\u7528\u4e8e\u63cf\u8ff0\u5217\u7684\u6620\u5c04\u5173\u7cfb\uff0c\u6309 ",(0,r.kt)("inlineCode",{parentName:"p"},"k2, k1")," \u7684\u987a\u5e8f\u3002\u5373\u6309Json Path \u4e2d\u5b57\u6bb5\u7684\u987a\u5e8f\u62bd\u53d6\u540e\uff0c\u6307\u5b9a\u7b2c\u4e00\u5217\u4e3a\u8868\u4e2d k2 \u5217\u7684\u503c\uff0c\u800c\u7b2c\u4e8c\u5217\u4e3a\u8868\u4e2d k1 \u5217\u7684\u503c\u3002\u6700\u7ec8\u5bfc\u5165\u7684\u6570\u636e\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+------+------+\n| k1   | k2   |\n+------+------+\n|    1 |    2 |\n+------+------+\n")),(0,r.kt)("p",null,"\u5f53\u7136\uff0c\u5982\u5176\u4ed6\u5bfc\u5165\u4e00\u6837\uff0c\u53ef\u4ee5\u5728 Columns \u4e2d\u8fdb\u884c\u5217\u7684\u8f6c\u6362\u64cd\u4f5c\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -v --location-trusted -u root: -H "format: json" -H "jsonpaths: [\\"$.k2\\", \\"$.k1\\"]" -H "columns: k2, tmp_k1, k1 = tmp_k1 * 100" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",null,"\u4e0a\u8ff0\u793a\u4f8b\u4f1a\u5c06 k1 \u7684\u503c\u4e58\u4ee5 100 \u540e\u5bfc\u5165\u3002\u6700\u7ec8\u5bfc\u5165\u7684\u6570\u636e\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+------+------+\n| k1   | k2   |\n+------+------+\n|  100 |    2 |\n+------+------+\n")),(0,r.kt)("h2",{id:"null-\u548c-default-\u503c"},"NULL \u548c Default \u503c"),(0,r.kt)("p",null,"\u793a\u4f8b\u6570\u636e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[\n    {"k1": 1, "k2": "a"},\n    {"k1": 2},\n    {"k1": 3, "k2": "c"},\n]\n')),(0,r.kt)("p",null,"\u8868\u7ed3\u6784\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},'k1 int null, k2 varchar(32) null default "x"')),(0,r.kt)("p",null,"\u5bfc\u5165\u8bed\u53e5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -v --location-trusted -u root: -H "format: json" -H "strip_outer_array: true" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u80fd\u671f\u671b\u7684\u5bfc\u5165\u7ed3\u679c\u5982\u4e0b\uff0c\u5373\u5bf9\u4e8e\u7f3a\u5931\u7684\u5217\uff0c\u586b\u5199\u9ed8\u8ba4\u503c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+------+------+\n| k1   | k2   |\n+------+------+\n|    1 |    a |\n+------+------+\n|    2 |    x |\n+------+------+\n|    3 |    c |\n+------+------+\n")),(0,r.kt)("p",null,"\u4f46\u5b9e\u9645\u7684\u5bfc\u5165\u7ed3\u679c\u5982\u4e0b\uff0c\u5373\u5bf9\u4e8e\u7f3a\u5931\u7684\u5217\uff0c\u8865\u4e0a\u4e86 NULL\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+------+------+\n| k1   | k2   |\n+------+------+\n|    1 |    a |\n+------+------+\n|    2 | NULL |\n+------+------+\n|    3 |    c |\n+------+------+\n")),(0,r.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a\u901a\u8fc7\u5bfc\u5165\u8bed\u53e5\u4e2d\u7684\u4fe1\u606f\uff0cDoris \u5e76\u4e0d\u77e5\u9053 \u201c\u7f3a\u5931\u7684\u5217\u662f\u8868\u4e2d\u7684 k2 \u5217\u201d\u3002\n\u5982\u679c\u8981\u5bf9\u4ee5\u4e0a\u6570\u636e\u6309\u7167\u671f\u671b\u7ed3\u679c\u5bfc\u5165\uff0c\u5219\u5bfc\u5165\u8bed\u53e5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -v --location-trusted -u root: -H "format: json" -H "strip_outer_array: true" -H "jsonpaths: [\\"$.k1\\", \\"$.k2\\"]" -H "columns: k1, tmp_k2, k2 = ifnull(tmp_k2, \'x\')" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("h2",{id:"largetint\u4e0edecimal"},"LargetInt\u4e0eDecimal"),(0,r.kt)("p",null,"Doris\u652f\u6301LargeInt\u4e0eDecimal\u7b49\u6570\u636e\u8303\u56f4\u66f4\u5927\uff0c\u6570\u636e\u7cbe\u5ea6\u66f4\u9ad8\u7684\u6570\u636e\u7c7b\u578b\u3002\u4f46\u662f\u7531\u4e8eDoris\u4f7f\u7528\u7684Rapid Json\u5e93\u5bf9\u4e8e\u6570\u5b57\u7c7b\u578b\u80fd\u591f\u89e3\u6790\u7684\u6700\u5927\u8303\u56f4\u4e3aInt64\u4e0eDouble\uff0c\u8fd9\u5bfc\u81f4\u4e86\u901a\u8fc7Json\u5bfc\u5165LargeInt\u6216Decimal\u65f6\u53ef\u80fd\u4f1a\u51fa\u73b0\uff1a\u7cbe\u5ea6\u4e22\u5931\uff0c\u6570\u636e\u8f6c\u6362\u51fa\u9519\u7b49\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u793a\u4f8b\u6570\u636e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[\n    {"k1": 1, "k2":9999999999999.999999 }\n]\n')),(0,r.kt)("p",null,"\u5bfc\u5165k2\u5217\u7c7b\u578b\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Decimal(16, 9)"),"\uff0c\u6570\u636e\u4e3a:",(0,r.kt)("inlineCode",{parentName:"p"},"9999999999999.999999"),"\u3002\u5728\u8fdb\u884cJson\u5bfc\u5165\u65f6\uff0c\u7531\u4e8eDouble\u8f6c\u6362\u7684\u7cbe\u5ea6\u4e22\u5931\u5bfc\u81f4\u4e86\u5bfc\u5165\u7684\u6570\u636e\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"10000000000000.0002"),"\uff0c\u5f15\u53d1\u4e86\u5bfc\u5165\u51fa\u9519\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cDoris\u5728\u5bfc\u5165\u65f6\u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"num_as_string"),"\u7684\u5f00\u5173\u3002Doris\u5728\u89e3\u6790Json\u6570\u636e\u65f6\u4f1a\u5c06\u6570\u5b57\u7c7b\u578b\u8f6c\u4e3a\u5b57\u7b26\u4e32\uff0c\u7136\u540e\u5728\u786e\u4fdd\u4e0d\u4f1a\u51fa\u73b0\u7cbe\u5ea6\u4e22\u5931\u7684\u60c5\u51b5\u4e0b\u8fdb\u884c\u5bfc\u5165\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -v --location-trusted -u root: -H "format: json" -H "num_as_string: true" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",null,"\u4f46\u662f\u5f00\u542f\u8fd9\u4e2a\u5f00\u5173\u4f1a\u5f15\u8d77\u4e00\u4e9b\u610f\u60f3\u4e0d\u5230\u7684\u526f\u4f5c\u7528\u3002Doris \u5f53\u524d\u6682\u4e0d\u652f\u6301\u590d\u5408\u7c7b\u578b\uff0c\u5982 Array\u3001Map \u7b49\u3002\u6240\u4ee5\u5f53\u5339\u914d\u5230\u4e00\u4e2a\u975e\u57fa\u672c\u7c7b\u578b\u65f6\uff0cDoris \u4f1a\u5c06\u8be5\u7c7b\u578b\u8f6c\u6362\u4e3a Json \u683c\u5f0f\u7684\u5b57\u7b26\u4e32\uff0c\u800c",(0,r.kt)("inlineCode",{parentName:"p"},"num_as_string"),"\u4f1a\u540c\u6837\u5c06\u590d\u5408\u7c7b\u578b\u7684\u6570\u5b57\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\uff0c\u4e3e\u4e2a\u4f8b\u5b50\uff1a"),(0,r.kt)("p",null,"Json \u6570\u636e\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{ "id": 123, "city" : { "name" : "beijing", "city_id" : 1 }}\n')),(0,r.kt)("p",null,"\u4e0d\u5f00\u542f",(0,r.kt)("inlineCode",{parentName:"p"},"num_as_string"),"\u65f6\uff0c\u5bfc\u5165\u7684city\u5217\u7684\u6570\u636e\u4e3a:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'{ "name" : "beijing", "city_id" : 1 }')),(0,r.kt)("p",null,"\u800c\u5f00\u542f\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"num_as_string"),"\u65f6\uff0c\u5bfc\u5165\u7684city\u5217\u7684\u6570\u636e\u4e3a:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'{ "name" : "beijing", "city_id" : "1" }')),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u8fd9\u91cc\u5bfc\u81f4\u4e86\u590d\u5408\u7c7b\u578b\u539f\u5148\u4e3a1\u7684\u6570\u5b57\u7c7b\u578b\u7684city_id\u88ab\u4f5c\u4e3a\u5b57\u7b26\u4e32\u5217\u5904\u7406\u5e76\u6dfb\u52a0\u4e0a\u4e86\u5f15\u53f7\uff0c\u4e0e\u539f\u59cb\u6570\u636e\u76f8\u6bd4\uff0c\u4ea7\u751f\u4e86\u53d8\u5316\u3002"),(0,r.kt)("p",null,"\u6240\u4ee5\u7528\u5728\u4f7f\u7528Json\u5bfc\u5165\u65f6\uff0c\u8981\u5c3d\u91cf\u907f\u514dLargeInt\u4e0eDecimal\u4e0e\u590d\u5408\u7c7b\u578b\u7684\u540c\u65f6\u5bfc\u5165\u3002\u5982\u679c\u65e0\u6cd5\u907f\u514d\uff0c\u5219\u9700\u8981\u5145\u5206\u4e86\u89e3\u5f00\u542f",(0,r.kt)("inlineCode",{parentName:"p"},"num_as_string"),"\u540e\u5bf9\u590d\u5408\u7c7b\u578b\u5bfc\u5165\u7684",(0,r.kt)("strong",{parentName:"p"},"\u526f\u4f5c\u7528"),"\u3002"),(0,r.kt)("h2",{id:"\u5e94\u7528\u793a\u4f8b"},"\u5e94\u7528\u793a\u4f8b"),(0,r.kt)("h3",{id:"stream-load"},"Stream Load"),(0,r.kt)("p",null,"\u56e0\u4e3a Json \u683c\u5f0f\u7684\u4e0d\u53ef\u62c6\u5206\u7279\u6027\uff0c\u6240\u4ee5\u5728\u4f7f\u7528 Stream Load \u5bfc\u5165 Json \u683c\u5f0f\u7684\u6587\u4ef6\u65f6\uff0c\u6587\u4ef6\u5185\u5bb9\u4f1a\u88ab\u5168\u90e8\u52a0\u8f7d\u5230\u5185\u5b58\u540e\uff0c\u624d\u5f00\u59cb\u5904\u7406\u3002\u56e0\u6b64\uff0c\u5982\u679c\u6587\u4ef6\u8fc7\u5927\u7684\u8bdd\uff0c\u53ef\u80fd\u4f1a\u5360\u7528\u8f83\u591a\u7684\u5185\u5b58\u3002"),(0,r.kt)("p",null,"\u5047\u8bbe\u8868\u7ed3\u6784\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"id      INT     NOT NULL,\ncity    VARHCAR NULL,\ncode    INT     NULL\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bfc\u5165\u5355\u884c\u6570\u636e1"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{"id": 100, "city": "beijing", "code" : 1}\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0d\u6307\u5b9a Json Path"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'curl --location-trusted -u user:passwd -H "format: json" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",{parentName:"li"},"  \u5bfc\u5165\u7ed3\u679c\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"100     beijing     1\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a Json Path"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.city\\",\\"$.code\\"]" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",{parentName:"li"},"  \u5bfc\u5165\u7ed3\u679c\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"100     beijing     1\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bfc\u5165\u5355\u884c\u6570\u636e2"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{"id": 100, "content": {"city": "beijing", "code" : 1}}\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a Json Path"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.content.city\\",\\"$.content.code\\"]" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",{parentName:"li"},"  \u5bfc\u5165\u7ed3\u679c\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"100     beijing     1\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bfc\u5165\u591a\u884c\u6570\u636e"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'[\n    {"id": 100, "city": "beijing", "code" : 1},\n    {"id": 101, "city": "shanghai"},\n    {"id": 102, "city": "tianjin", "code" : 3},\n    {"id": 103, "city": "chongqing", "code" : 4},\n    {"id": 104, "city": ["zhejiang", "guangzhou"], "code" : 5},\n    {\n        "id": 105,\n        "city": {\n            "order1": ["guangzhou"]\n        }, \n        "code" : 6\n    }\n]\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a Json Path"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.city\\",\\"$.code\\"]" -H "strip_outer_array: true" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",{parentName:"li"},"  \u5bfc\u5165\u7ed3\u679c\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'100     beijing                     1\n101     shanghai                    NULL\n102     tianjin                     3\n103     chongqing                   4\n104     ["zhejiang","guangzhou"]    5\n105     {"order1":["guangzhou"]}    6\n'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u5bfc\u5165\u6570\u636e\u8fdb\u884c\u8f6c\u6362"),(0,r.kt)("p",{parentName:"li"},"\u6570\u636e\u4f9d\u7136\u662f\u793a\u4f8b3\u4e2d\u7684\u591a\u884c\u6570\u636e\uff0c\u73b0\u9700\u8981\u5bf9\u5bfc\u5165\u6570\u636e\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," \u5217\u52a01\u540e\u5bfc\u5165\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.city\\",\\"$.code\\"]" -H "strip_outer_array: true" -H "columns: id, city, tmpc, code=tmpc+1" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",{parentName:"li"},"\u5bfc\u5165\u7ed3\u679c\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'100     beijing                     2\n101     shanghai                    NULL\n102     tianjin                     4\n103     chongqing                   5\n104     ["zhejiang","guangzhou"]    6\n105     {"order1":["guangzhou"]}    7\n')))),(0,r.kt)("h3",{id:"routine-load"},"Routine Load"),(0,r.kt)("p",null,"Routine Load \u5bf9 Json \u6570\u636e\u7684\u5904\u7406\u539f\u7406\u548c Stream Load \u76f8\u540c\u3002\u5728\u6b64\u4e0d\u518d\u8d58\u8ff0\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e Kafka \u6570\u636e\u6e90\uff0c\u6bcf\u4e2a Massage \u4e2d\u7684\u5185\u5bb9\u88ab\u89c6\u4f5c\u4e00\u4e2a\u5b8c\u6574\u7684 Json \u6570\u636e\u3002\u5982\u679c\u4e00\u4e2a Massage \u4e2d\u662f\u4ee5 Array \u683c\u5f0f\u7684\u8868\u793a\u7684\u591a\u884c\u6570\u636e\uff0c\u5219\u4f1a\u5bfc\u5165\u591a\u884c\uff0c\u800c Kafka \u7684 offset \u53ea\u4f1a\u589e\u52a0 1\u3002\u800c\u5982\u679c\u4e00\u4e2a Array \u683c\u5f0f\u7684 Json \u8868\u793a\u591a\u884c\u6570\u636e\uff0c\u4f46\u662f\u56e0\u4e3a Json \u683c\u5f0f\u9519\u8bef\u5bfc\u81f4\u89e3\u6790 Json \u5931\u8d25\uff0c\u5219\u9519\u8bef\u884c\u53ea\u4f1a\u589e\u52a0 1\uff08\u56e0\u4e3a\u89e3\u6790\u5931\u8d25\uff0c\u5b9e\u9645\u4e0a Doris \u65e0\u6cd5\u5224\u65ad\u5176\u4e2d\u5305\u542b\u591a\u5c11\u884c\u6570\u636e\uff0c\u53ea\u80fd\u6309\u4e00\u884c\u9519\u8bef\u6570\u636e\u8bb0\u5f55\uff09\u3002"))}d.isMDXComponent=!0}}]);