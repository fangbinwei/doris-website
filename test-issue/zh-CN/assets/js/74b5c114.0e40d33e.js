"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[76643],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>N});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=l.createContext({}),m=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=m(e.components);return l.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),d=m(a),c=n,N=d["".concat(o,".").concat(c)]||d[c]||u[c]||r;return a?l.createElement(N,i(i({ref:t},k),{},{components:a})):l.createElement(N,i({ref:t},k))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:n,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},31076:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var l=a(87462),n=(a(67294),a(3905));const r={title:"\u5bfc\u5165\u603b\u89c8",language:"zh-CN"},i=void 0,p={unversionedId:"administrator-guide/load-data/load-manual",id:"version-0.15/administrator-guide/load-data/load-manual",title:"\u5bfc\u5165\u603b\u89c8",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/administrator-guide/load-data/load-manual.md",sourceDirName:"administrator-guide/load-data",slug:"/administrator-guide/load-data/load-manual",permalink:"/zh-CN/docs/0.15/administrator-guide/load-data/load-manual",draft:!1,tags:[],version:"0.15",frontMatter:{title:"\u5bfc\u5165\u603b\u89c8",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6700\u4f73\u5b9e\u8df5",permalink:"/zh-CN/docs/0.15/getting-started/best-practice"},next:{title:"\u6279\u91cf\u5220\u9664",permalink:"/zh-CN/docs/0.15/administrator-guide/load-data/batch-delete-manual"}},o={},m=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u5bfc\u5165\u65b9\u5f0f",id:"\u5bfc\u5165\u65b9\u5f0f",level:2},{value:"\u57fa\u672c\u539f\u7406",id:"\u57fa\u672c\u539f\u7406",level:2},{value:"\u5bfc\u5165\u6267\u884c\u6d41\u7a0b",id:"\u5bfc\u5165\u6267\u884c\u6d41\u7a0b",level:3},{value:"Label \u548c \u539f\u5b50\u6027",id:"label-\u548c-\u539f\u5b50\u6027",level:3},{value:"\u540c\u6b65\u548c\u5f02\u6b65",id:"\u540c\u6b65\u548c\u5f02\u6b65",level:2},{value:"\u540c\u6b65",id:"\u540c\u6b65",level:3},{value:"\u5f02\u6b65",id:"\u5f02\u6b65",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u5185\u5b58\u9650\u5236",id:"\u5185\u5b58\u9650\u5236",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u901a\u7528\u7cfb\u7edf\u914d\u7f6e",id:"\u901a\u7528\u7cfb\u7edf\u914d\u7f6e",level:2},{value:"FE \u914d\u7f6e",id:"fe-\u914d\u7f6e",level:3},{value:"BE \u914d\u7f6e",id:"be-\u914d\u7f6e",level:3},{value:"\u5217\u6620\u5c04",id:"\u5217\u6620\u5c04",level:3}],k={toc:m};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5bfc\u5165\u603b\u89c8"},"\u5bfc\u5165\u603b\u89c8"),(0,n.kt)("p",null,"\u5bfc\u5165\uff08Load\uff09\u529f\u80fd\u5c31\u662f\u5c06\u7528\u6237\u7684\u539f\u59cb\u6570\u636e\u5bfc\u5165\u5230 Doris \u4e2d\u3002\u5bfc\u5165\u6210\u529f\u540e\uff0c\u7528\u6237\u5373\u53ef\u901a\u8fc7 Mysql \u5ba2\u6237\u7aef\u67e5\u8be2\u6570\u636e\u3002"),(0,n.kt)("p",null,"Doris \u652f\u6301\u591a\u79cd\u5bfc\u5165\u65b9\u5f0f\u3002\u5efa\u8bae\u5148\u5b8c\u6574\u9605\u8bfb\u672c\u6587\u6863\uff0c\u518d\u6839\u636e\u6240\u9009\u62e9\u7684\u5bfc\u5165\u65b9\u5f0f\uff0c\u67e5\u770b\u5404\u81ea\u5bfc\u5165\u65b9\u5f0f\u7684\u8be6\u7ec6\u6587\u6863\u3002"),(0,n.kt)("h2",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Frontend\uff08FE\uff09\uff1aDoris \u7cfb\u7edf\u7684\u5143\u6570\u636e\u548c\u8c03\u5ea6\u8282\u70b9\u3002\u5728\u5bfc\u5165\u6d41\u7a0b\u4e2d\u4e3b\u8981\u8d1f\u8d23\u5bfc\u5165\u89c4\u5212\u751f\u6210\u548c\u5bfc\u5165\u4efb\u52a1\u7684\u8c03\u5ea6\u5de5\u4f5c\u3002 "),(0,n.kt)("li",{parentName:"ol"},"Backend\uff08BE\uff09\uff1aDoris \u7cfb\u7edf\u7684\u8ba1\u7b97\u548c\u5b58\u50a8\u8282\u70b9\u3002\u5728\u5bfc\u5165\u6d41\u7a0b\u4e2d\u4e3b\u8981\u8d1f\u8d23\u6570\u636e\u7684 ETL \u548c\u5b58\u50a8\u3002"),(0,n.kt)("li",{parentName:"ol"},"Broker\uff1aBroker \u4e3a\u4e00\u4e2a\u72ec\u7acb\u7684\u65e0\u72b6\u6001\u8fdb\u7a0b\u3002\u5c01\u88c5\u4e86\u6587\u4ef6\u7cfb\u7edf\u63a5\u53e3\uff0c\u63d0\u4f9b Doris \u8bfb\u53d6\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u4e2d\u6587\u4ef6\u7684\u80fd\u529b\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5bfc\u5165\u4f5c\u4e1a\uff08Load job\uff09\uff1a\u5bfc\u5165\u4f5c\u4e1a\u8bfb\u53d6\u7528\u6237\u63d0\u4ea4\u7684\u6e90\u6570\u636e\uff0c\u8f6c\u6362\u6216\u6e05\u6d17\u540e\uff0c\u5c06\u6570\u636e\u5bfc\u5165\u5230 Doris \u7cfb\u7edf\u4e2d\u3002\u5bfc\u5165\u5b8c\u6210\u540e\uff0c\u6570\u636e\u5373\u53ef\u88ab\u7528\u6237\u67e5\u8be2\u5230\u3002"),(0,n.kt)("li",{parentName:"ol"},"Label\uff1a\u6240\u6709\u5bfc\u5165\u4f5c\u4e1a\u90fd\u6709\u4e00\u4e2a Label\u3002Label \u5728\u4e00\u4e2a\u6570\u636e\u5e93\u5185\u552f\u4e00\uff0c\u53ef\u7531\u7528\u6237\u6307\u5b9a\u6216\u7cfb\u7edf\u81ea\u52a8\u751f\u6210\uff0c\u7528\u4e8e\u6807\u8bc6\u4e00\u4e2a\u5bfc\u5165\u4f5c\u4e1a\u3002\u76f8\u540c\u7684 Label \u4ec5\u53ef\u7528\u4e8e\u4e00\u4e2a\u6210\u529f\u7684\u5bfc\u5165\u4f5c\u4e1a\u3002"),(0,n.kt)("li",{parentName:"ol"},"MySQL \u534f\u8bae/HTTP \u534f\u8bae\uff1aDoris \u63d0\u4f9b\u4e24\u79cd\u8bbf\u95ee\u534f\u8bae\u63a5\u53e3\u3002 MySQL \u534f\u8bae\u548c HTTP \u534f\u8bae\u3002\u90e8\u5206\u5bfc\u5165\u65b9\u5f0f\u4f7f\u7528 MySQL \u534f\u8bae\u63a5\u53e3\u63d0\u4ea4\u4f5c\u4e1a\uff0c\u90e8\u5206\u5bfc\u5165\u65b9\u5f0f\u4f7f\u7528 HTTP \u534f\u8bae\u63a5\u53e3\u63d0\u4ea4\u4f5c\u4e1a\u3002")),(0,n.kt)("h2",{id:"\u5bfc\u5165\u65b9\u5f0f"},"\u5bfc\u5165\u65b9\u5f0f"),(0,n.kt)("p",null,"\u4e3a\u9002\u914d\u4e0d\u540c\u7684\u6570\u636e\u5bfc\u5165\u9700\u6c42\uff0cDoris \u7cfb\u7edf\u63d0\u4f9b\u4e866\u79cd\u4e0d\u540c\u7684\u5bfc\u5165\u65b9\u5f0f\u3002\u6bcf\u79cd\u5bfc\u5165\u65b9\u5f0f\u652f\u6301\u4e0d\u540c\u7684\u6570\u636e\u6e90\uff0c\u5b58\u5728\u4e0d\u540c\u7684\u4f7f\u7528\u65b9\u5f0f\uff08\u5f02\u6b65\uff0c\u540c\u6b65\uff09\u3002"),(0,n.kt)("p",null,"\u6240\u6709\u5bfc\u5165\u65b9\u5f0f\u90fd\u652f\u6301 csv \u6570\u636e\u683c\u5f0f\u3002\u5176\u4e2d Broker load \u8fd8\u652f\u6301 parquet \u548c orc \u6570\u636e\u683c\u5f0f\u3002"),(0,n.kt)("p",null,"\u6bcf\u4e2a\u5bfc\u5165\u65b9\u5f0f\u7684\u8bf4\u660e\u8bf7\u53c2\u9605\u5355\u4e2a\u5bfc\u5165\u65b9\u5f0f\u7684\u64cd\u4f5c\u624b\u518c\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Broker load"),(0,n.kt)("p",{parentName:"li"},"  \u901a\u8fc7 Broker \u8fdb\u7a0b\u8bbf\u95ee\u5e76\u8bfb\u53d6\u5916\u90e8\u6570\u636e\u6e90\uff08\u5982 HDFS\uff09\u5bfc\u5165\u5230 Doris\u3002\u7528\u6237\u901a\u8fc7 Mysql \u534f\u8bae\u63d0\u4ea4\u5bfc\u5165\u4f5c\u4e1a\u540e\uff0c\u5f02\u6b65\u6267\u884c\u3002\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"SHOW LOAD")," \u547d\u4ee4\u67e5\u770b\u5bfc\u5165\u7ed3\u679c\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Stream load"),(0,n.kt)("p",{parentName:"li"},"  \u7528\u6237\u901a\u8fc7 HTTP \u534f\u8bae\u63d0\u4ea4\u8bf7\u6c42\u5e76\u643a\u5e26\u539f\u59cb\u6570\u636e\u521b\u5efa\u5bfc\u5165\u3002\u4e3b\u8981\u7528\u4e8e\u5feb\u901f\u5c06\u672c\u5730\u6587\u4ef6\u6216\u6570\u636e\u6d41\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230 Doris\u3002\u5bfc\u5165\u547d\u4ee4\u540c\u6b65\u8fd4\u56de\u5bfc\u5165\u7ed3\u679c\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Insert"),(0,n.kt)("p",{parentName:"li"},"  \u7c7b\u4f3c MySQL \u4e2d\u7684 Insert \u8bed\u53e5\uff0cDoris \u63d0\u4f9b ",(0,n.kt)("inlineCode",{parentName:"p"},"INSERT INTO tbl SELECT ...;")," \u7684\u65b9\u5f0f\u4ece Doris \u7684\u8868\u4e2d\u8bfb\u53d6\u6570\u636e\u5e76\u5bfc\u5165\u5230\u53e6\u4e00\u5f20\u8868\u3002\u6216\u8005\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"INSERT INTO tbl VALUES(...);")," \u63d2\u5165\u5355\u6761\u6570\u636e\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Multi load"),(0,n.kt)("p",{parentName:"li"},"  \u7528\u6237\u901a\u8fc7 HTTP \u534f\u8bae\u63d0\u4ea4\u591a\u4e2a\u5bfc\u5165\u4f5c\u4e1a\u3002Multi Load \u53ef\u4ee5\u4fdd\u8bc1\u591a\u4e2a\u5bfc\u5165\u4f5c\u4e1a\u7684\u539f\u5b50\u751f\u6548\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Routine load"),(0,n.kt)("p",{parentName:"li"},"  \u7528\u6237\u901a\u8fc7 MySQL \u534f\u8bae\u63d0\u4ea4\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\uff0c\u751f\u6210\u4e00\u4e2a\u5e38\u9a7b\u7ebf\u7a0b\uff0c\u4e0d\u95f4\u65ad\u7684\u4ece\u6570\u636e\u6e90\uff08\u5982 Kafka\uff09\u4e2d\u8bfb\u53d6\u6570\u636e\u5e76\u5bfc\u5165\u5230 Doris \u4e2d\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u901a\u8fc7S3\u534f\u8bae\u76f4\u63a5\u5bfc\u5165"),(0,n.kt)("p",{parentName:"li"},"  \u7528\u6237\u901a\u8fc7S3\u534f\u8bae\u76f4\u63a5\u5bfc\u5165\u6570\u636e\uff0c\u7528\u6cd5\u548cBroker Load \u7c7b\u4f3c "))),(0,n.kt)("h2",{id:"\u57fa\u672c\u539f\u7406"},"\u57fa\u672c\u539f\u7406"),(0,n.kt)("h3",{id:"\u5bfc\u5165\u6267\u884c\u6d41\u7a0b"},"\u5bfc\u5165\u6267\u884c\u6d41\u7a0b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"+---------+      +---------+      +----------+      +-----------+\n|         |      |         |      |          |      |           |\n| PENDING +-----\x3e+   ETL   +-----\x3e+ LOADING  +-----\x3e+ FINISHED  |\n|         |      |         |      |          |      |           |\n+---------+      +---+-----+      +----+-----+      +-----------+\n     |               |                 |\n     |               |                 |\n     |               |                 |\n     |               |                 |            +-----------+\n     |               |                 |            |           |\n     +---------------+-----------------+------------\x3e CANCELLED |\n                                                    |           |\n                                                    +-----------+\n\n")),(0,n.kt)("p",null,"\u5982\u4e0a\u56fe\uff0c\u4e00\u4e2a\u5bfc\u5165\u4f5c\u4e1a\u4e3b\u8981\u7ecf\u8fc7\u4e0a\u97624\u4e2a\u9636\u6bb5\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"PENDING\uff08\u975e\u5fc5\u987b\uff09: \u8be5\u9636\u6bb5\u53ea\u6709 Broker Load \u624d\u6709\u3002Broker Load \u88ab\u7528\u6237\u63d0\u4ea4\u540e\u4f1a\u77ed\u6682\u505c\u7559\u5728\u8fd9\u4e2a\u9636\u6bb5\uff0c\u76f4\u5230\u88ab FE \u4e2d\u7684 Scheduler \u8c03\u5ea6\u3002 \u5176\u4e2d Scheduler \u7684\u8c03\u5ea6\u95f4\u9694\u4e3a5\u79d2\u3002 ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ETL\uff08\u975e\u5fc5\u987b\uff09\uff1a \u8be5\u9636\u6bb5\u5728\u7248\u672c 0.10.0(\u5305\u542b) \u4e4b\u524d\u5b58\u5728\uff0c\u4e3b\u8981\u662f\u7528\u4e8e\u5c06\u539f\u59cb\u6570\u636e\u6309\u7167\u7528\u6237\u58f0\u660e\u7684\u65b9\u5f0f\u8fdb\u884c\u53d8\u6362\uff0c\u5e76\u4e14\u8fc7\u6ee4\u4e0d\u6ee1\u8db3\u6761\u4ef6\u7684\u539f\u59cb\u6570\u636e\u3002\u5728 0.10.0 \u540e\u7684\u7248\u672c\uff0cETL \u9636\u6bb5\u4e0d\u518d\u5b58\u5728\uff0c\u5176\u4e2d\u6570\u636e transform \u7684\u5de5\u4f5c\u88ab\u5408\u5e76\u5230 LOADING \u9636\u6bb5\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"LOADING\uff1a \u8be5\u9636\u6bb5\u5728\u7248\u672c 0.10.0\uff08\u5305\u542b\uff09\u4e4b\u524d\u4e3b\u8981\u7528\u4e8e\u5c06\u53d8\u6362\u540e\u7684\u6570\u636e\u63a8\u5230\u5bf9\u5e94\u7684 BE \u5b58\u50a8\u4e2d\u3002\u5728 0.10.0 \u540e\u7684\u7248\u672c\uff0c\u8be5\u9636\u6bb5\u5148\u5bf9\u6570\u636e\u8fdb\u884c\u6e05\u6d17\u548c\u53d8\u6362\uff0c\u7136\u540e\u5c06\u6570\u636e\u53d1\u9001\u5230 BE \u5b58\u50a8\u4e2d\u3002\u5f53\u6240\u6709\u5bfc\u5165\u6570\u636e\u5747\u5b8c\u6210\u5bfc\u5165\u540e\uff0c\u8fdb\u5165\u7b49\u5f85\u751f\u6548\u8fc7\u7a0b\uff0c\u6b64\u65f6 Load job \u4f9d\u65e7\u662f LOADING\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"FINISHED\uff1a \u5728 Load job \u6d89\u53ca\u7684\u6240\u6709\u6570\u636e\u5747\u751f\u6548\u540e\uff0cLoad job \u7684\u72b6\u6001\u53d8\u6210 FINISHED\u3002FINISHED \u540e\u5bfc\u5165\u7684\u6570\u636e\u5747\u53ef\u67e5\u8be2\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"CANCELLED: \u5728\u4f5c\u4e1a FINISH \u7684\u4e4b\u524d\uff0c\u4f5c\u4e1a\u90fd\u53ef\u80fd\u88ab\u53d6\u6d88\u5e76\u8fdb\u5165 CANCELLED \u72b6\u6001\u3002\u5982\u7528\u6237\u624b\u52a8\u53d6\u6d88\uff0c\u6216\u5bfc\u5165\u51fa\u73b0\u9519\u8bef\u7b49\u3002CANCELLED \u4e5f\u662f Load Job \u7684\u6700\u7ec8\u72b6\u6001\uff0c\u4e0d\u53ef\u88ab\u518d\u6b21\u6267\u884c\u3002"))),(0,n.kt)("p",null,"\u4e0a\u8ff0\u9636\u6bb5\uff0c\u9664\u4e86 PENDING \u5230 LOADING \u9636\u6bb5\u662f Scheduler \u8f6e\u8bad\u8c03\u5ea6\u7684\uff0c\u5176\u4ed6\u9636\u6bb5\u4e4b\u524d\u7684\u8f6c\u79fb\u90fd\u662f\u56de\u8c03\u673a\u5236\u5b9e\u73b0\u3002"),(0,n.kt)("h3",{id:"label-\u548c-\u539f\u5b50\u6027"},"Label \u548c \u539f\u5b50\u6027"),(0,n.kt)("p",null,"Doris \u5bf9\u6240\u6709\u5bfc\u5165\u65b9\u5f0f\u63d0\u4f9b\u539f\u5b50\u6027\u4fdd\u8bc1\u3002\u65e2\u4fdd\u8bc1\u540c\u4e00\u4e2a\u5bfc\u5165\u4f5c\u4e1a\u5185\u7684\u6570\u636e\uff0c\u539f\u5b50\u751f\u6548\u3002\u4e0d\u4f1a\u51fa\u73b0\u4ec5\u5bfc\u5165\u90e8\u5206\u6570\u636e\u7684\u60c5\u51b5\u3002"),(0,n.kt)("p",null,"\u540c\u65f6\uff0c\u6bcf\u4e00\u4e2a\u5bfc\u5165\u4f5c\u4e1a\u90fd\u6709\u4e00\u4e2a\u7531\u7528\u6237\u6307\u5b9a\u6216\u8005\u7cfb\u7edf\u81ea\u52a8\u751f\u6210\u7684 Label\u3002Label \u5728\u4e00\u4e2a Database \u5185\u552f\u4e00\u3002\u5f53\u4e00\u4e2a Label \u5bf9\u5e94\u7684\u5bfc\u5165\u4f5c\u4e1a\u6210\u529f\u540e\uff0c\u4e0d\u53ef\u518d\u91cd\u590d\u4f7f\u7528\u8be5 Label \u63d0\u4ea4\u5bfc\u5165\u4f5c\u4e1a\u3002\u5982\u679c Label \u5bf9\u5e94\u7684\u5bfc\u5165\u4f5c\u4e1a\u5931\u8d25\uff0c\u5219\u53ef\u4ee5\u91cd\u590d\u4f7f\u7528\u3002"),(0,n.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Label \u673a\u5236\uff0c\u6765\u4fdd\u8bc1 Label \u5bf9\u5e94\u7684\u6570\u636e\u6700\u591a\u88ab\u5bfc\u5165\u4e00\u6b21\uff0c\u5373At-Most-Once \u8bed\u4e49\u3002"),(0,n.kt)("h2",{id:"\u540c\u6b65\u548c\u5f02\u6b65"},"\u540c\u6b65\u548c\u5f02\u6b65"),(0,n.kt)("p",null,"Doris \u76ee\u524d\u7684\u5bfc\u5165\u65b9\u5f0f\u5206\u4e3a\u4e24\u7c7b\uff0c\u540c\u6b65\u548c\u5f02\u6b65\u3002\u5982\u679c\u662f\u5916\u90e8\u7a0b\u5e8f\u63a5\u5165 Doris \u7684\u5bfc\u5165\u529f\u80fd\uff0c\u9700\u8981\u5224\u65ad\u4f7f\u7528\u5bfc\u5165\u65b9\u5f0f\u662f\u54ea\u7c7b\u518d\u786e\u5b9a\u63a5\u5165\u903b\u8f91\u3002"),(0,n.kt)("h3",{id:"\u540c\u6b65"},"\u540c\u6b65"),(0,n.kt)("p",null,"\u540c\u6b65\u5bfc\u5165\u65b9\u5f0f\u5373\u7528\u6237\u521b\u5efa\u5bfc\u5165\u4efb\u52a1\uff0cDoris \u540c\u6b65\u6267\u884c\u5bfc\u5165\uff0c\u6267\u884c\u5b8c\u6210\u540e\u8fd4\u56de\u7528\u6237\u5bfc\u5165\u7ed3\u679c\u3002\u7528\u6237\u53ef\u76f4\u63a5\u6839\u636e\u521b\u5efa\u5bfc\u5165\u4efb\u52a1\u547d\u4ee4\u8fd4\u56de\u7684\u7ed3\u679c\u540c\u6b65\u5224\u65ad\u5bfc\u5165\u662f\u5426\u6210\u529f\u3002"),(0,n.kt)("p",null,"\u540c\u6b65\u7c7b\u578b\u7684\u5bfc\u5165\u65b9\u5f0f\u6709: ",(0,n.kt)("strong",{parentName:"p"},"Stream load"),"\uff0c",(0,n.kt)("strong",{parentName:"p"},"Insert"),"\u3002"),(0,n.kt)("p",null,"\u64cd\u4f5c\u6b65\u9aa4\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u7528\u6237\uff08\u5916\u90e8\u7cfb\u7edf\uff09\u521b\u5efa\u5bfc\u5165\u4efb\u52a1\u3002"),(0,n.kt)("li",{parentName:"ol"},"Doris \u8fd4\u56de\u5bfc\u5165\u7ed3\u679c\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u7528\u6237\uff08\u5916\u90e8\u7cfb\u7edf\uff09\u5224\u65ad\u5bfc\u5165\u7ed3\u679c\uff0c\u5982\u679c\u5931\u8d25\u53ef\u4ee5\u518d\u6b21\u63d0\u4ea4\u5bfc\u5165\u4efb\u52a1\u3002")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"\u6ce8\u610f\uff1a\u5982\u679c\u7528\u6237\u4f7f\u7528\u7684\u5bfc\u5165\u65b9\u5f0f\u662f\u540c\u6b65\u8fd4\u56de\u7684\uff0c\u4e14\u5bfc\u5165\u7684\u6570\u636e\u91cf\u8fc7\u5927\uff0c\u5219\u521b\u5efa\u5bfc\u5165\u8bf7\u6c42\u53ef\u80fd\u4f1a\u82b1\u5f88\u957f\u65f6\u95f4\u624d\u80fd\u8fd4\u56de\u7ed3\u679c\u3002")),(0,n.kt)("h3",{id:"\u5f02\u6b65"},"\u5f02\u6b65"),(0,n.kt)("p",null,"\u5f02\u6b65\u5bfc\u5165\u65b9\u5f0f\u5373\u7528\u6237\u521b\u5efa\u5bfc\u5165\u4efb\u52a1\u540e\uff0cDoris \u76f4\u63a5\u8fd4\u56de\u521b\u5efa\u6210\u529f\u3002",(0,n.kt)("strong",{parentName:"p"},"\u521b\u5efa\u6210\u529f\u4e0d\u4ee3\u8868\u6570\u636e\u5df2\u7ecf\u5bfc\u5165"),"\u3002\u5bfc\u5165\u4efb\u52a1\u4f1a\u88ab\u5f02\u6b65\u6267\u884c\uff0c\u7528\u6237\u5728\u521b\u5efa\u6210\u529f\u540e\uff0c\u9700\u8981\u901a\u8fc7\u8f6e\u8be2\u7684\u65b9\u5f0f\u53d1\u9001\u67e5\u770b\u547d\u4ee4\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a\u7684\u72b6\u6001\u3002\u5982\u679c\u521b\u5efa\u5931\u8d25\uff0c\u5219\u53ef\u4ee5\u6839\u636e\u5931\u8d25\u4fe1\u606f\uff0c\u5224\u65ad\u662f\u5426\u9700\u8981\u518d\u6b21\u521b\u5efa\u3002"),(0,n.kt)("p",null,"\u5f02\u6b65\u7c7b\u578b\u7684\u5bfc\u5165\u65b9\u5f0f\u6709\uff1a",(0,n.kt)("strong",{parentName:"p"},"Broker load"),"\uff0c",(0,n.kt)("strong",{parentName:"p"},"Multi load"),"\u3002"),(0,n.kt)("p",null,"\u64cd\u4f5c\u6b65\u9aa4\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u7528\u6237\uff08\u5916\u90e8\u7cfb\u7edf\uff09\u521b\u5efa\u5bfc\u5165\u4efb\u52a1\u3002"),(0,n.kt)("li",{parentName:"ol"},"Doris \u8fd4\u56de\u5bfc\u5165\u521b\u5efa\u7ed3\u679c\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u7528\u6237\uff08\u5916\u90e8\u7cfb\u7edf\uff09\u5224\u65ad\u5bfc\u5165\u521b\u5efa\u7ed3\u679c\uff0c\u6210\u529f\u5219\u8fdb\u51654\uff0c\u5931\u8d25\u56de\u5230\u91cd\u8bd5\u521b\u5efa\u5bfc\u5165\uff0c\u56de\u52301\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u7528\u6237\uff08\u5916\u90e8\u7cfb\u7edf\uff09\u8f6e\u8be2\u67e5\u770b\u5bfc\u5165\u4efb\u52a1\uff0c\u76f4\u5230\u72b6\u6001\u53d8\u4e3a FINISHED \u6216 CANCELLED\u3002")),(0,n.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,n.kt)("p",null,"\u65e0\u8bba\u662f\u5f02\u6b65\u8fd8\u662f\u540c\u6b65\u7684\u5bfc\u5165\u7c7b\u578b\uff0c\u90fd\u4e0d\u5e94\u8be5\u5728 Doris \u8fd4\u56de\u5bfc\u5165\u5931\u8d25\u6216\u5bfc\u5165\u521b\u5efa\u5931\u8d25\u540e\uff0c\u65e0\u4f11\u6b62\u7684\u91cd\u8bd5\u3002",(0,n.kt)("strong",{parentName:"p"},"\u5916\u90e8\u7cfb\u7edf\u5728\u6709\u9650\u6b21\u6570\u91cd\u8bd5\u5e76\u5931\u8d25\u540e\uff0c\u4fdd\u7559\u5931\u8d25\u4fe1\u606f\uff0c\u5927\u90e8\u5206\u591a\u6b21\u91cd\u8bd5\u5747\u5931\u8d25\u95ee\u9898\u90fd\u662f\u4f7f\u7528\u65b9\u6cd5\u95ee\u9898\u6216\u6570\u636e\u672c\u8eab\u95ee\u9898\u3002")),(0,n.kt)("h2",{id:"\u5185\u5b58\u9650\u5236"},"\u5185\u5b58\u9650\u5236"),(0,n.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u53c2\u6570\u6765\u9650\u5236\u5355\u4e2a\u5bfc\u5165\u7684\u5185\u5b58\u4f7f\u7528\uff0c\u4ee5\u9632\u6b62\u5bfc\u5165\u5360\u7528\u8fc7\u591a\u7684\u5185\u5b58\u800c\u5bfc\u81f4\u7cfb\u7edfOOM\u3002\n\u4e0d\u540c\u5bfc\u5165\u65b9\u5f0f\u9650\u5236\u5185\u5b58\u7684\u65b9\u5f0f\u7565\u6709\u4e0d\u540c\uff0c\u53ef\u4ee5\u53c2\u9605\u5404\u81ea\u7684\u5bfc\u5165\u624b\u518c\u67e5\u770b\u3002"),(0,n.kt)("p",null,"\u4e00\u4e2a\u5bfc\u5165\u4f5c\u4e1a\u901a\u5e38\u4f1a\u5206\u5e03\u5728\u591a\u4e2a Backend \u4e0a\u6267\u884c\uff0c\u5bfc\u5165\u5185\u5b58\u9650\u5236\u7684\u662f\u4e00\u4e2a\u5bfc\u5165\u4f5c\u4e1a\uff0c\u5728\u5355\u4e2a Backend \u4e0a\u7684\u5185\u5b58\u4f7f\u7528\uff0c\u800c\u4e0d\u662f\u5728\u6574\u4e2a\u96c6\u7fa4\u7684\u5185\u5b58\u4f7f\u7528\u3002"),(0,n.kt)("p",null,"\u540c\u65f6\uff0c\u6bcf\u4e2a Backend \u4f1a\u8bbe\u7f6e\u53ef\u7528\u4e8e\u5bfc\u5165\u7684\u5185\u5b58\u7684\u603b\u4f53\u4e0a\u9650\u3002\u5177\u4f53\u914d\u7f6e\u53c2\u9605\u4e0b\u9762\u7684\u901a\u7528\u7cfb\u7edf\u914d\u7f6e\u5c0f\u8282\u3002\u8fd9\u4e2a\u914d\u7f6e\u9650\u5236\u4e86\u6240\u6709\u5728\u8be5 Backend \u4e0a\u8fd0\u884c\u7684\u5bfc\u5165\u4efb\u52a1\u7684\u603b\u4f53\u5185\u5b58\u4f7f\u7528\u4e0a\u9650\u3002"),(0,n.kt)("p",null,"\u8f83\u5c0f\u7684\u5185\u5b58\u9650\u5236\u53ef\u80fd\u4f1a\u5f71\u54cd\u5bfc\u5165\u6548\u7387\uff0c\u56e0\u4e3a\u5bfc\u5165\u6d41\u7a0b\u53ef\u80fd\u4f1a\u56e0\u4e3a\u5185\u5b58\u8fbe\u5230\u4e0a\u9650\u800c\u9891\u7e41\u7684\u5c06\u5185\u5b58\u4e2d\u7684\u6570\u636e\u5199\u56de\u78c1\u76d8\u3002\u800c\u8fc7\u5927\u7684\u5185\u5b58\u9650\u5236\u53ef\u80fd\u5bfc\u81f4\u5f53\u5bfc\u5165\u5e76\u53d1\u8f83\u9ad8\u65f6\uff0c\u7cfb\u7edfOOM\u3002\u6240\u4ee5\uff0c\u9700\u8981\u6839\u636e\u9700\u6c42\uff0c\u5408\u7406\u7684\u8bbe\u7f6e\u5bfc\u5165\u7684\u5185\u5b58\u9650\u5236\u3002"),(0,n.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,n.kt)("p",null,"\u7528\u6237\u5728\u63a5\u5165 Doris \u5bfc\u5165\u65f6\uff0c\u4e00\u822c\u4f1a\u91c7\u7528\u7a0b\u5e8f\u63a5\u5165\u7684\u65b9\u5f0f\uff0c\u8fd9\u6837\u53ef\u4ee5\u4fdd\u8bc1\u6570\u636e\u88ab\u5b9a\u671f\u7684\u5bfc\u5165\u5230 Doris \u4e2d\u3002\u4e0b\u9762\u4e3b\u8981\u8bf4\u660e\u4e86\u7a0b\u5e8f\u63a5\u5165 Doris \u7684\u6700\u4f73\u5b9e\u8df5\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u9009\u62e9\u5408\u9002\u7684\u5bfc\u5165\u65b9\u5f0f\uff1a\u6839\u636e\u6570\u636e\u6e90\u6240\u5728\u4f4d\u7f6e\u9009\u62e9\u5bfc\u5165\u65b9\u5f0f\u3002\u4f8b\u5982\uff1a\u5982\u679c\u539f\u59cb\u6570\u636e\u5b58\u653e\u5728 HDFS \u4e0a\uff0c\u5219\u4f7f\u7528 Broker load \u5bfc\u5165\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u786e\u5b9a\u5bfc\u5165\u65b9\u5f0f\u7684\u534f\u8bae\uff1a\u5982\u679c\u9009\u62e9\u4e86 Broker load \u5bfc\u5165\u65b9\u5f0f\uff0c\u5219\u5916\u90e8\u7cfb\u7edf\u9700\u8981\u80fd\u4f7f\u7528 MySQL \u534f\u8bae\u5b9a\u671f\u63d0\u4ea4\u548c\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u786e\u5b9a\u5bfc\u5165\u65b9\u5f0f\u7684\u7c7b\u578b\uff1a\u5bfc\u5165\u65b9\u5f0f\u4e3a\u540c\u6b65\u6216\u5f02\u6b65\u3002\u6bd4\u5982 Broker load \u4e3a\u5f02\u6b65\u5bfc\u5165\u65b9\u5f0f\uff0c\u5219\u5916\u90e8\u7cfb\u7edf\u5728\u63d0\u4ea4\u521b\u5efa\u5bfc\u5165\u540e\uff0c\u5fc5\u987b\u8c03\u7528\u67e5\u770b\u5bfc\u5165\u547d\u4ee4\uff0c\u6839\u636e\u67e5\u770b\u5bfc\u5165\u547d\u4ee4\u7684\u7ed3\u679c\u6765\u5224\u65ad\u5bfc\u5165\u662f\u5426\u6210\u529f\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5236\u5b9a Label \u751f\u6210\u7b56\u7565\uff1aLabel \u751f\u6210\u7b56\u7565\u9700\u6ee1\u8db3\uff0c\u6bcf\u4e00\u6279\u6b21\u6570\u636e\u552f\u4e00\u4e14\u56fa\u5b9a\u7684\u539f\u5219\u3002\u8fd9\u6837 Doris \u5c31\u53ef\u4ee5\u4fdd\u8bc1 At-Most-Once\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u7a0b\u5e8f\u81ea\u8eab\u4fdd\u8bc1 At-Least-Once\uff1a\u5916\u90e8\u7cfb\u7edf\u9700\u8981\u4fdd\u8bc1\u81ea\u8eab\u7684 At-Least-Once\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u4fdd\u8bc1\u5bfc\u5165\u6d41\u7a0b\u7684 Exactly-Once\u3002")),(0,n.kt)("h2",{id:"\u901a\u7528\u7cfb\u7edf\u914d\u7f6e"},"\u901a\u7528\u7cfb\u7edf\u914d\u7f6e"),(0,n.kt)("p",null,"\u4e0b\u9762\u4e3b\u8981\u89e3\u91ca\u4e86\u51e0\u4e2a\u6240\u6709\u5bfc\u5165\u65b9\u5f0f\u5747\u901a\u7528\u7684\u7cfb\u7edf\u7ea7\u522b\u7684\u914d\u7f6e\u3002"),(0,n.kt)("h3",{id:"fe-\u914d\u7f6e"},"FE \u914d\u7f6e"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u914d\u7f6e\u5c5e\u4e8e FE \u7684\u7cfb\u7edf\u914d\u7f6e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 FE \u7684\u914d\u7f6e\u6587\u4ef6 ",(0,n.kt)("inlineCode",{parentName:"p"},"fe.conf")," \u6765\u4fee\u6539\u914d\u7f6e\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"max","_","load","_","timeout","_","second \u548c min","_","load","_","timeout","_","second"),(0,n.kt)("p",{parentName:"li"},"  \u8fd9\u4e24\u4e2a\u914d\u7f6e\u542b\u4e49\u4e3a\uff1a\u6700\u5927\u7684\u5bfc\u5165\u8d85\u65f6\u65f6\u95f4\uff0c\u6700\u5c0f\u7684\u5bfc\u5165\u8d85\u65f6\u65f6\u95f4\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002\u9ed8\u8ba4\u7684\u6700\u5927\u8d85\u65f6\u65f6\u95f4\u4e3a3\u5929, \u9ed8\u8ba4\u7684\u6700\u5c0f\u8d85\u65f6\u65f6\u95f4\u4e3a1\u79d2\u3002\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u5bfc\u5165\u8d85\u65f6\u65f6\u95f4\u4e0d\u53ef\u8d85\u8fc7\u8fd9\u4e2a\u8303\u56f4\u3002\u8be5\u53c2\u6570\u901a\u7528\u4e8e\u6240\u6709\u7684\u5bfc\u5165\u65b9\u5f0f\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"desired","_","max","_","waiting","_","jobs"),(0,n.kt)("p",{parentName:"li"},"  \u5728\u7b49\u5f85\u961f\u5217\u4e2d\u7684\u5bfc\u5165\u4efb\u52a1\u4e2a\u6570\u6700\u5927\u503c\uff0c\u9ed8\u8ba4\u4e3a100\u3002\u5f53\u5728 FE \u4e2d\u5904\u4e8e PENDING \u72b6\u6001\uff08\u4e5f\u5c31\u662f\u7b49\u5f85\u6267\u884c\u7684\uff09\u5bfc\u5165\u4e2a\u6570\u8d85\u8fc7\u8be5\u503c\uff0c\u65b0\u7684\u5bfc\u5165\u8bf7\u6c42\u5219\u4f1a\u88ab\u62d2\u7edd\u3002"),(0,n.kt)("p",{parentName:"li"},"  \u6b64\u914d\u7f6e\u4ec5\u5bf9\u5f02\u6b65\u6267\u884c\u7684\u5bfc\u5165\u6709\u6548\uff0c\u5f53\u5f02\u6b65\u6267\u884c\u7684\u5bfc\u5165\u7b49\u5f85\u4e2a\u6570\u8d85\u8fc7\u9ed8\u8ba4\u503c\uff0c\u5219\u540e\u7eed\u7684\u521b\u5efa\u5bfc\u5165\u8bf7\u6c42\u4f1a\u88ab\u62d2\u7edd\u3002\n")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"max","_","running","_","txn","_","num","_","per","_","db"),(0,n.kt)("p",{parentName:"li"},"  \u8fd9\u4e2a\u914d\u7f6e\u7684\u542b\u4e49\u662f\u8bf4\uff0c\u6bcf\u4e2a Database \u4e2d\u6b63\u5728\u8fd0\u884c\u7684\u5bfc\u5165\u6700\u5927\u4e2a\u6570\uff08\u4e0d\u533a\u5206\u5bfc\u5165\u7c7b\u578b\uff0c\u7edf\u4e00\u8ba1\u6570\uff09\u3002\u9ed8\u8ba4\u7684\u6700\u5927\u5bfc\u5165\u5e76\u53d1\u4e3a 100\u3002\u5f53\u5f53\u524d Database \u6b63\u5728\u8fd0\u884c\u7684\u5bfc\u5165\u4e2a\u6570\u8d85\u8fc7\u6700\u5927\u503c\u65f6\uff0c\u540e\u7eed\u7684\u5bfc\u5165\u4e0d\u4f1a\u88ab\u6267\u884c\u3002\u5982\u679c\u662f\u540c\u6b65\u5bfc\u5165\u4f5c\u4e1a\uff0c\u5219\u5bfc\u5165\u4f1a\u88ab\u62d2\u7edd\u3002\u5982\u679c\u662f\u5f02\u6b65\u5bfc\u5165\u4f5c\u4e1a\u3002\u5219\u4f5c\u4e1a\u4f1a\u5728\u961f\u5217\u4e2d\u7b49\u5f85\u3002\n"))),(0,n.kt)("h3",{id:"be-\u914d\u7f6e"},"BE \u914d\u7f6e"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u914d\u7f6e\u5c5e\u4e8e BE \u7684\u7cfb\u7edf\u914d\u7f6e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 BE \u7684\u914d\u7f6e\u6587\u4ef6 ",(0,n.kt)("inlineCode",{parentName:"p"},"be.conf")," \u6765\u4fee\u6539\u914d\u7f6e\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"push","_","write","_","mbytes","_","per","_","sec"),(0,n.kt)("p",{parentName:"li"},"  BE \u4e0a\u5355\u4e2a Tablet \u7684\u5199\u5165\u901f\u5ea6\u9650\u5236\u3002\u9ed8\u8ba4\u662f 10\uff0c\u5373 10MB/s\u3002\u901a\u5e38 BE \u5bf9\u5355\u4e2a Tablet \u7684\u6700\u5927\u5199\u5165\u901f\u5ea6\uff0c\u6839\u636e Schema \u4ee5\u53ca\u7cfb\u7edf\u7684\u4e0d\u540c\uff0c\u5927\u7ea6\u5728 10-30MB/s \u4e4b\u95f4\u3002\u53ef\u4ee5\u9002\u5f53\u8c03\u6574\u8fd9\u4e2a\u53c2\u6570\u6765\u63a7\u5236\u5bfc\u5165\u901f\u5ea6\u3002\n")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"write","_","buffer","_","size"),(0,n.kt)("p",{parentName:"li"},"  \u5bfc\u5165\u6570\u636e\u5728 BE \u4e0a\u4f1a\u5148\u5199\u5165\u4e00\u4e2a memtable\uff0cmemtable \u8fbe\u5230\u9608\u503c\u540e\u624d\u4f1a\u5199\u56de\u78c1\u76d8\u3002\u9ed8\u8ba4\u5927\u5c0f\u662f 100MB\u3002\u8fc7\u5c0f\u7684\u9608\u503c\u53ef\u80fd\u5bfc\u81f4 BE \u4e0a\u5b58\u5728\u5927\u91cf\u7684\u5c0f\u6587\u4ef6\u3002\u53ef\u4ee5\u9002\u5f53\u63d0\u9ad8\u8fd9\u4e2a\u9608\u503c\u51cf\u5c11\u6587\u4ef6\u6570\u91cf\u3002\u4f46\u8fc7\u5927\u7684\u9608\u503c\u53ef\u80fd\u5bfc\u81f4 RPC \u8d85\u65f6\uff0c\u89c1\u4e0b\u9762\u7684\u914d\u7f6e\u8bf4\u660e\u3002\n")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"tablet","_","writer","_","rpc","_","timeout","_","sec"),(0,n.kt)("p",{parentName:"li"},"  \u5bfc\u5165\u8fc7\u7a0b\u4e2d\uff0c\u53d1\u9001\u4e00\u4e2a Batch\uff081024\u884c\uff09\u7684 RPC \u8d85\u65f6\u65f6\u95f4\u3002\u9ed8\u8ba4 600 \u79d2\u3002\u56e0\u4e3a\u8be5 RPC \u53ef\u80fd\u6d89\u53ca\u591a\u4e2a memtable \u7684\u5199\u76d8\u64cd\u4f5c\uff0c\u6240\u4ee5\u53ef\u80fd\u4f1a\u56e0\u4e3a\u5199\u76d8\u5bfc\u81f4 RPC \u8d85\u65f6\uff0c\u53ef\u4ee5\u9002\u5f53\u8c03\u6574\u8fd9\u4e2a\u8d85\u65f6\u65f6\u95f4\u6765\u51cf\u5c11\u8d85\u65f6\u9519\u8bef\uff08\u5982 ",(0,n.kt)("inlineCode",{parentName:"p"},"send batch fail")," \u9519\u8bef\uff09\u3002\u540c\u65f6\uff0c\u5982\u679c\u8c03\u5927 ",(0,n.kt)("inlineCode",{parentName:"p"},"write_buffer_size")," \u914d\u7f6e\uff0c\u4e5f\u9700\u8981\u9002\u5f53\u8c03\u5927\u8fd9\u4e2a\u53c2\u6570\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"streaming","_","load","_","rpc","_","max","_","alive","_","time","_","sec"),(0,n.kt)("p",{parentName:"li"},"  \u5728\u5bfc\u5165\u8fc7\u7a0b\u4e2d\uff0cDoris \u4f1a\u4e3a\u6bcf\u4e00\u4e2a Tablet \u5f00\u542f\u4e00\u4e2a Writer\uff0c\u7528\u4e8e\u63a5\u6536\u6570\u636e\u5e76\u5199\u5165\u3002\u8fd9\u4e2a\u53c2\u6570\u6307\u5b9a\u4e86 Writer \u7684\u7b49\u5f85\u8d85\u65f6\u65f6\u95f4\u3002\u5982\u679c\u5728\u8fd9\u4e2a\u65f6\u95f4\u5185\uff0cWriter \u6ca1\u6709\u6536\u5230\u4efb\u4f55\u6570\u636e\uff0c\u5219 Writer \u4f1a\u88ab\u81ea\u52a8\u9500\u6bc1\u3002\u5f53\u7cfb\u7edf\u5904\u7406\u901f\u5ea6\u8f83\u6162\u65f6\uff0cWriter \u53ef\u80fd\u957f\u65f6\u95f4\u63a5\u6536\u4e0d\u5230\u4e0b\u4e00\u6279\u6570\u636e\uff0c\u5bfc\u81f4\u5bfc\u5165\u62a5\u9519\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"TabletWriter add batch with unknown id"),"\u3002\u6b64\u65f6\u53ef\u9002\u5f53\u589e\u5927\u8fd9\u4e2a\u914d\u7f6e\u3002\u9ed8\u8ba4\u4e3a 600 \u79d2\u3002\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"load","_","process","_","max","_","memory","_","limit","_","bytes \u548c load","_","process","_","max","_","memory","_","limit","_","percent"),(0,n.kt)("p",{parentName:"li"},"  \u8fd9\u4e24\u4e2a\u53c2\u6570\uff0c\u9650\u5236\u4e86\u5355\u4e2a Backend \u4e0a\uff0c\u53ef\u7528\u4e8e\u5bfc\u5165\u4efb\u52a1\u7684\u5185\u5b58\u4e0a\u9650\u3002\u5206\u522b\u662f\u6700\u5927\u5185\u5b58\u548c\u6700\u5927\u5185\u5b58\u767e\u5206\u6bd4\u3002",(0,n.kt)("inlineCode",{parentName:"p"},"load_process_max_memory_limit_percent")," \u9ed8\u8ba4\u4e3a 80\uff0c\u8868\u793a\u5bf9 Backend \u603b\u5185\u5b58\u9650\u5236\u7684\u767e\u5206\u6bd4\uff08\u603b\u5185\u5b58\u9650\u5236 ",(0,n.kt)("inlineCode",{parentName:"p"},"mem_limit")," \u9ed8\u8ba4\u4e3a 80%\uff0c\u8868\u793a\u5bf9\u7269\u7406\u5185\u5b58\u7684\u767e\u5206\u6bd4\uff09\u3002\u5373\u5047\u8bbe\u7269\u7406\u5185\u5b58\u4e3a M\uff0c\u5219\u9ed8\u8ba4\u5bfc\u5165\u5185\u5b58\u9650\u5236\u4e3a M ",(0,n.kt)("em",{parentName:"p"}," 80% ")," 80%\u3002"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("inlineCode",{parentName:"p"},"load_process_max_memory_limit_bytes")," \u9ed8\u8ba4\u4e3a 100GB\u3002\u7cfb\u7edf\u4f1a\u5728\u4e24\u4e2a\u53c2\u6570\u4e2d\u53d6\u8f83\u5c0f\u8005\uff0c\u4f5c\u4e3a\u6700\u7ec8\u7684 Backend \u5bfc\u5165\u5185\u5b58\u4f7f\u7528\u4e0a\u9650\u3002"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"label","_","keep","_","max","_","second"),(0,n.kt)("p",{parentName:"li"},"  \u8bbe\u7f6e\u5bfc\u5165\u4efb\u52a1\u8bb0\u5f55\u4fdd\u7559\u65f6\u95f4\u3002\u5df2\u7ecf\u5b8c\u6210\u7684\uff08 FINISHED or CANCELLED \uff09\u5bfc\u5165\u4efb\u52a1\u8bb0\u5f55\u4f1a\u4fdd\u7559\u5728 Doris \u7cfb\u7edf\u4e2d\u4e00\u6bb5\u65f6\u95f4\uff0c\u65f6\u95f4\u7531\u6b64\u53c2\u6570\u51b3\u5b9a\u3002\u53c2\u6570\u9ed8\u8ba4\u503c\u65f6\u95f4\u4e3a3\u5929\u3002\u8be5\u53c2\u6570\u901a\u7528\u4e0e\u6240\u6709\u7c7b\u578b\u7684\u5bfc\u5165\u4efb\u52a1\u3002"))),(0,n.kt)("h3",{id:"\u5217\u6620\u5c04"},"\u5217\u6620\u5c04"),(0,n.kt)("p",null,"  \u5047\u8bbe\u5bfc\u5165\u6570\u636e\u6709\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"1\uff0c2\uff0c3"),"\uff0c\u8868\u6709 ",(0,n.kt)("inlineCode",{parentName:"p"},"c1,c2,c3")," \u4e09\u5217\uff0c\u5982\u679c\u6570\u636e\u76f4\u63a5\u5bfc\u5165\u8868\u4e2d\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u8bed\u53e5 ",(0,n.kt)("inlineCode",{parentName:"p"},"COLUMNS(c1,c2,c3)")," \u6b64\u8bed\u53e5\u7b49\u4ef7\u4e8e ",(0,n.kt)("inlineCode",{parentName:"p"},"COLUMNS(tmp_c1,tmp_c2,tmp_c3,c1=tmp_c1,c2=tmp_c2,c3=tmp_c3)"),"\n\u5982\u679c\u60f3\u518d\u5bfc\u5165\u6570\u636e\u65f6\u6267\u884c\u53d8\u6362\u6216\u8005\u4f7f\u7528\u4e34\u65f6\u53d8\u91cf\uff0c\u5219\u53d8\u6362\u6216\u8005\u4e34\u65f6\u53d8\u91cf\u4e00\u5b9a\u8981\u6309\u7167\u4f7f\u7528\u7684\u987a\u5e8f\u6307\u5b9a\uff0c \u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"p"},"COLUMNS(tmp_c1,tmp_c2,tmp_c3, c1 = tmp_c1 +1, c2= c1+1, c3 =c2+1)"),", \u8fd9\u6837\u7684\u8bed\u53e5\u7b49\u4ef7\u4e8e ",(0,n.kt)("inlineCode",{parentName:"p"},"COLUMNS(tmp_c1,tmp_c2,tmp_c3, c1 = tmp_c1 +1, c2= tmp_c1 +1+1, c3 =tmp_c1 +1+1+1)"),"\n\u5728\u4f7f\u7528\u67d0\u4e2a\u8868\u8fbe\u5f0f\u65f6\u8fd9\u4e2a\u8868\u8fbe\u5f0f\u4e00\u5b9a\u8981\u5728\u524d\u9762\u5b9a\u4e49\uff0c\u4f8b\u5982\u5982\u4e0b\u8bed\u53e5\u5219\u4e0d\u5408\u6cd5 ",(0,n.kt)("inlineCode",{parentName:"p"},"COLUMNS(tmp_c1,tmp_c2,tmp_c3, c1 = c1+1, c2 = temp + 1, temp = tmp_c1 +1, c3 =c2+1)")))}d.isMDXComponent=!0}}]);