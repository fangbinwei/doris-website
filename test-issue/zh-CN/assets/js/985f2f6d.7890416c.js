"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[38562],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),i=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=i(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(t),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return t?a.createElement(f,o(o({ref:n},p),{},{components:t})):a.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},22086:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var a=t(87462),r=(t(67294),t(3905));const l={title:"\u5bfc\u5165\u5206\u6790",language:"zh-CN"},o=void 0,s={unversionedId:"advanced/best-practice/import-analysis",id:"advanced/best-practice/import-analysis",title:"\u5bfc\u5165\u5206\u6790",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/advanced/best-practice/import-analysis.md",sourceDirName:"advanced/best-practice",slug:"/advanced/best-practice/import-analysis",permalink:"/zh-CN/docs/advanced/best-practice/import-analysis",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5bfc\u5165\u5206\u6790",language:"zh-CN"},sidebar:"docs",previous:{title:"\u67e5\u8be2\u5206\u6790",permalink:"/zh-CN/docs/advanced/best-practice/query-analysis"},next:{title:"\u5982\u4f55\u5f00\u542fDebug\u65e5\u5fd7",permalink:"/zh-CN/docs/advanced/best-practice/debug-log"}},c={},i=[{value:"\u5bfc\u5165\u8ba1\u5212\u6811",id:"\u5bfc\u5165\u8ba1\u5212\u6811",level:2},{value:"\u67e5\u770b\u5bfc\u5165 Profile",id:"\u67e5\u770b\u5bfc\u5165-profile",level:2}],p={toc:i};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5bfc\u5165\u5206\u6790"},"\u5bfc\u5165\u5206\u6790"),(0,r.kt)("p",null,"Doris \u63d0\u4f9b\u4e86\u4e00\u4e2a\u56fe\u5f62\u5316\u7684\u547d\u4ee4\u4ee5\u5e2e\u52a9\u7528\u6237\u66f4\u65b9\u4fbf\u7684\u5206\u6790\u4e00\u4e2a\u5177\u4f53\u7684\u5bfc\u5165\u3002\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u8be5\u529f\u80fd\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8be5\u529f\u80fd\u76ee\u524d\u4ec5\u9488\u5bf9 Broker Load \u7684\u5206\u6790\u3002")),(0,r.kt)("h2",{id:"\u5bfc\u5165\u8ba1\u5212\u6811"},"\u5bfc\u5165\u8ba1\u5212\u6811"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5bf9 Doris \u7684\u67e5\u8be2\u8ba1\u5212\u6811\u8fd8\u4e0d\u592a\u4e86\u89e3\uff0c\u8bf7\u5148\u9605\u8bfb\u4e4b\u524d\u7684\u6587\u7ae0 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/advanced/best-practice/query-analysis"},"DORIS/\u6700\u4f73\u5b9e\u8df5/\u67e5\u8be2\u5206\u6790"),"\u3002"),(0,r.kt)("p",null,"\u4e00\u4e2a ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/data-operate/import/import-way/broker-load-manual"},"Broker Load")," \u8bf7\u6c42\u7684\u6267\u884c\u8fc7\u7a0b\uff0c\u4e5f\u662f\u57fa\u4e8e Doris \u7684\u67e5\u8be2\u6846\u67b6\u7684\u3002\u4e00\u4e2aBroker Load \u4f5c\u4e1a\u4f1a\u6839\u636e\u5bfc\u5165\u8bf7\u6c42\u4e2d DATA INFILE \u5b50\u53e5\u7684\u4e2a\u6570\u8bb2\u4f5c\u4e1a\u62c6\u5206\u6210\u591a\u4e2a\u5b50\u4efb\u52a1\u3002\u6bcf\u4e2a\u5b50\u4efb\u52a1\u53ef\u4ee5\u89c6\u4e3a\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u5bfc\u5165\u6267\u884c\u8ba1\u5212\u3002\u4e00\u4e2a\u5bfc\u5165\u8ba1\u5212\u7684\u7ec4\u6210\u53ea\u4f1a\u6709\u4e00\u4e2a Fragment\uff0c\u5176\u7ec4\u6210\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502OlapTableSink\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n        \u2502\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502BrokerScanNode\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"BrokerScanNode \u4e3b\u8981\u8d1f\u8d23\u53bb\u8bfb\u6e90\u6570\u636e\u5e76\u53d1\u9001\u7ed9 OlapTableSink\uff0c\u800c OlapTableSink \u8d1f\u8d23\u5c06\u6570\u636e\u6309\u7167\u5206\u533a\u5206\u6876\u89c4\u5219\u53d1\u9001\u5230\u5bf9\u5e94\u7684\u8282\u70b9\uff0c\u7531\u5bf9\u5e94\u7684\u8282\u70b9\u8d1f\u8d23\u5b9e\u9645\u7684\u6570\u636e\u5199\u5165\u3002"),(0,r.kt)("p",null,"\u800c\u8fd9\u4e2a\u5bfc\u5165\u6267\u884c\u8ba1\u5212\u7684 Fragment \u4f1a\u6839\u636e\u5bfc\u5165\u6e90\u6587\u4ef6\u7684\u6570\u91cf\u3001BE\u8282\u70b9\u7684\u6570\u91cf\u7b49\u53c2\u6570\uff0c\u5212\u5206\u6210\u4e00\u4e2a\u6216\u591a\u4e2a Instance\u3002\u6bcf\u4e2a Instance \u8d1f\u8d23\u4e00\u90e8\u5206\u6570\u636e\u5bfc\u5165\u3002"),(0,r.kt)("p",null,"\u591a\u4e2a\u5b50\u4efb\u52a1\u7684\u6267\u884c\u8ba1\u5212\u662f\u5e76\u53d1\u6267\u884c\u7684\uff0c\u800c\u4e00\u4e2a\u6267\u884c\u8ba1\u5212\u7684\u591a\u4e2a Instance \u4e5f\u662f\u5e76\u884c\u6267\u884c\u3002"),(0,r.kt)("h2",{id:"\u67e5\u770b\u5bfc\u5165-profile"},"\u67e5\u770b\u5bfc\u5165 Profile"),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6253\u5f00\u4f1a\u8bdd\u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"p"},"is_report_success"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET is_report_success=true;\n")),(0,r.kt)("p",null,"\u7136\u540e\u63d0\u4ea4\u4e00\u4e2a Broker Load \u5bfc\u5165\u8bf7\u6c42\uff0c\u5e76\u7b49\u5230\u5bfc\u5165\u6267\u884c\u5b8c\u6210\u3002Doris \u4f1a\u4ea7\u751f\u8be5\u5bfc\u5165\u7684\u4e00\u4e2a Profile\u3002Profile \u5305\u542b\u4e86\u4e00\u4e2a\u5bfc\u5165\u5404\u4e2a\u5b50\u4efb\u52a1\u3001Instance \u7684\u6267\u884c\u8be6\u60c5\uff0c\u6709\u52a9\u4e8e\u6211\u4eec\u5206\u6790\u5bfc\u5165\u74f6\u9888\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u76ee\u524d\u4e0d\u652f\u6301\u67e5\u770b\u672a\u6267\u884c\u6210\u529f\u7684\u5bfc\u5165\u4f5c\u4e1a\u7684 Profile\u3002")),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5148\u83b7\u53d6 Profile \u5217\u8868\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/";\n+---------+------+-----------+------+-----------+---------------------+---------------------+-----------+------------+\n| QueryId | User | DefaultDb | SQL  | QueryType | StartTime           | EndTime             | TotalTime | QueryState |\n+---------+------+-----------+------+-----------+---------------------+---------------------+-----------+------------+\n| 10441   | N/A  | N/A       | N/A  | Load      | 2021-04-10 22:15:37 | 2021-04-10 22:18:54 | 3m17s     | N/A        |\n+---------+------+-----------+------+-----------+---------------------+---------------------+-----------+------------+\n')),(0,r.kt)("p",null,"\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u5217\u51fa\u5f53\u524d\u4fdd\u5b58\u7684\u6240\u6709\u5bfc\u5165 Profile\u3002\u6bcf\u884c\u5bf9\u5e94\u4e00\u4e2a\u5bfc\u5165\u3002\u5176\u4e2d QueryId \u5217\u4e3a\u5bfc\u5165\u4f5c\u4e1a\u7684 ID\u3002\u8fd9\u4e2a ID \u4e5f\u53ef\u4ee5\u901a\u8fc7 SHOW LOAD \u8bed\u53e5\u67e5\u770b\u62ff\u5230\u3002\u6211\u4eec\u53ef\u4ee5\u9009\u62e9\u6211\u4eec\u60f3\u770b\u7684 Profile \u5bf9\u5e94\u7684 QueryId\uff0c\u67e5\u770b\u5177\u4f53\u60c5\u51b5\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u67e5\u770b\u4e00\u4e2aProfile\u5206\u4e3a3\u4e2a\u6b65\u9aa4\uff1a")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u5b50\u4efb\u52a1\u603b\u89c8"),(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u6709\u5bfc\u5165\u4f5c\u4e1a\u7684\u5b50\u4efb\u52a1\u6982\u51b5\uff1a"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/10441";\n+-----------------------------------+------------+\n| TaskId                            | ActiveTime |\n+-----------------------------------+------------+\n| 980014623046410a-88e260f0c43031f1 | 3m14s      |\n+-----------------------------------+------------+\n')),(0,r.kt)("p",null,"   \u5982\u4e0a\u56fe\uff0c\u8868\u793a 10441 \u8fd9\u4e2a\u5bfc\u5165\u4f5c\u4e1a\u603b\u5171\u6709\u4e00\u4e2a\u5b50\u4efb\u52a1\uff0c\u5176\u4e2d ActiveTime \u8868\u793a\u8fd9\u4e2a\u5b50\u4efb\u52a1\u4e2d\u8017\u65f6\u6700\u957f\u7684 Instance \u7684\u6267\u884c\u65f6\u95f4\u3002"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u6307\u5b9a\u5b50\u4efb\u52a1\u7684 Instance \u6982\u51b5"),(0,r.kt)("p",{parentName:"li"},"\u5f53\u6211\u4eec\u53d1\u73b0\u4e00\u4e2a\u5b50\u4efb\u52a1\u8017\u65f6\u8f83\u957f\u65f6\uff0c\u53ef\u4ee5\u8fdb\u4e00\u6b65\u67e5\u770b\u8be5\u5b50\u4efb\u52a1\u7684\u5404\u4e2a Instance \u7684\u6267\u884c\u8017\u65f6\uff1a"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/10441/980014623046410a-88e260f0c43031f1";\n+-----------------------------------+------------------+------------+\n| Instances                         | Host             | ActiveTime |\n+-----------------------------------+------------------+------------+\n| 980014623046410a-88e260f0c43031f2 | 10.81.85.89:9067 | 3m7s       |\n| 980014623046410a-88e260f0c43031f3 | 10.81.85.89:9067 | 3m6s       |\n| 980014623046410a-88e260f0c43031f4 | 10.81.85.89:9067 | 3m10s      |\n| 980014623046410a-88e260f0c43031f5 | 10.81.85.89:9067 | 3m14s      |\n+-----------------------------------+------------------+------------+\n')),(0,r.kt)("p",null,"   \u8fd9\u91cc\u5c55\u793a\u4e86 980014623046410a-88e260f0c43031f1 \u8fd9\u4e2a\u5b50\u4efb\u52a1\u7684\u56db\u4e2a Instance \u8017\u65f6\uff0c\u5e76\u4e14\u8fd8\u5c55\u793a\u4e86 Instance \u6240\u5728\u7684\u6267\u884c\u8282\u70b9\u3002"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u5177\u4f53 Instance"),(0,r.kt)("p",{parentName:"li"},"\u6211\u4eec\u53ef\u4ee5\u7ee7\u7eed\u67e5\u770b\u67d0\u4e00\u4e2a\u5177\u4f53\u7684 Instance \u4e0a\u5404\u4e2a\u7b97\u5b50\u7684\u8be6\u7ec6 Profile\uff1a"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/10441/980014623046410a-88e260f0c43031f1/980014623046410a-88e260f0c43031f5"\\G\n*************************** 1. row ***************************\nInstance:\n      \u250c-----------------------------------------\u2510\n      \u2502[-1: OlapTableSink]                      \u2502\n      \u2502(Active: 2m17s, non-child: 70.91)        \u2502\n      \u2502  - Counters:                            \u2502\n      \u2502      - CloseWaitTime: 1m53s             \u2502\n      \u2502      - ConvertBatchTime: 0ns            \u2502\n      \u2502      - MaxAddBatchExecTime: 1m46s       \u2502\n      \u2502      - NonBlockingSendTime: 3m11s       \u2502\n      \u2502      - NumberBatchAdded: 782            \u2502\n      \u2502      - NumberNodeChannels: 1            \u2502\n      \u2502      - OpenTime: 743.822us              \u2502\n      \u2502      - RowsFiltered: 0                  \u2502\n      \u2502      - RowsRead: 1.599729M (1599729)    \u2502\n      \u2502      - RowsReturned: 1.599729M (1599729)\u2502\n      \u2502      - SendDataTime: 11s761ms           \u2502\n      \u2502      - TotalAddBatchExecTime: 1m46s     \u2502\n      \u2502      - ValidateDataTime: 9s802ms        \u2502\n      \u2514-----------------------------------------\u2518\n                           \u2502\n\u250c-----------------------------------------------------\u2510\n\u2502[0: BROKER_SCAN_NODE]                                \u2502\n\u2502(Active: 56s537ms, non-child: 29.06)                 \u2502\n\u2502  - Counters:                                        \u2502\n\u2502      - BytesDecompressed: 0.00                      \u2502\n\u2502      - BytesRead: 5.77 GB                           \u2502\n\u2502      - DecompressTime: 0ns                          \u2502\n\u2502      - FileReadTime: 34s263ms                       \u2502\n\u2502      - MaterializeTupleTime(*): 45s54ms             \u2502\n\u2502      - NumDiskAccess: 0                             \u2502\n\u2502      - PeakMemoryUsage: 33.03 MB                    \u2502\n\u2502      - RowsRead: 1.599729M (1599729)                \u2502\n\u2502      - RowsReturned: 1.599729M (1599729)            \u2502\n\u2502      - RowsReturnedRate: 28.295K /sec               \u2502\n\u2502      - TotalRawReadTime(*): 1m20s                   \u2502\n\u2502      - TotalReadThroughput: 30.39858627319336 MB/sec\u2502\n\u2502      - WaitScannerTime: 56s528ms                    \u2502\n\u2514-----------------------------------------------------\u2518\n')),(0,r.kt)("p",null,"   \u4e0a\u56fe\u5c55\u793a\u4e86\u5b50\u4efb\u52a1 980014623046410a-88e260f0c43031f1 \u4e2d\uff0cInstance 980014623046410a-88e260f0c43031f5 \u7684\u5404\u4e2a\u7b97\u5b50\u7684\u5177\u4f53 Profile\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a3\u4e2a\u6b65\u9aa4\uff0c\u6211\u4eec\u53ef\u4ee5\u9010\u6b65\u6392\u67e5\u4e00\u4e2a\u5bfc\u5165\u4efb\u52a1\u7684\u6267\u884c\u74f6\u9888\u3002"))}u.isMDXComponent=!0}}]);