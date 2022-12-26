"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[49740],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var r=a.createContext({}),p=function(t){var e=a.useContext(r),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(r.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,r=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=p(n),d=o,k=m["".concat(r,".").concat(d)]||m[d]||s[d]||i;return n?a.createElement(k,c(c({ref:e},u),{},{components:n})):a.createElement(k,c({ref:e},u))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,c=new Array(i);c[0]=d;var l={};for(var r in e)hasOwnProperty.call(e,r)&&(l[r]=e[r]);l.originalType=t,l[m]="string"==typeof t?t:o,c[1]=l;for(var p=2;p<i;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98797:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={title:"Compaction Action",language:"zh-CN"},c=void 0,l={unversionedId:"admin-manual/http-actions/compaction-action",id:"version-dev/admin-manual/http-actions/compaction-action",title:"Compaction Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/admin-manual/http-actions/compaction-action.md",sourceDirName:"admin-manual/http-actions",slug:"/admin-manual/http-actions/compaction-action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/compaction-action",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/admin-manual/http-actions/compaction-action.md",tags:[],version:"dev",frontMatter:{title:"Compaction Action",language:"zh-CN"},sidebar:"docs",previous:{title:"CONNECTION",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/connection-action"},next:{title:"QUERY DETAIL",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/query-detail-action"}},r={},p=[{value:"\u67e5\u770b Compaction \u72b6\u6001",id:"\u67e5\u770b-compaction-\u72b6\u6001",level:2},{value:"\u8282\u70b9\u6574\u4f53 compaction \u72b6\u6001",id:"\u8282\u70b9\u6574\u4f53-compaction-\u72b6\u6001",level:3},{value:"\u6307\u5b9a tablet \u7684 compaction \u72b6\u6001",id:"\u6307\u5b9a-tablet-\u7684-compaction-\u72b6\u6001",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u624b\u52a8\u89e6\u53d1 Compaction",id:"\u624b\u52a8\u89e6\u53d1-compaction",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:3},{value:"\u624b\u52a8 Compaction \u6267\u884c\u72b6\u6001",id:"\u624b\u52a8-compaction-\u6267\u884c\u72b6\u6001",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-2",level:3}],u={toc:p};function m(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"compaction-action"},"Compaction Action"),(0,o.kt)("p",null,"\u8be5 API \u7528\u4e8e\u67e5\u770b\u67d0\u4e2a BE \u8282\u70b9\u603b\u4f53\u7684 compaction \u72b6\u6001\uff0c\u6216\u8005\u6307\u5b9a tablet \u7684 compaction \u72b6\u6001\u3002\u4e5f\u53ef\u4ee5\u7528\u4e8e\u624b\u52a8\u89e6\u53d1 Compaction\u3002"),(0,o.kt)("h2",{id:"\u67e5\u770b-compaction-\u72b6\u6001"},"\u67e5\u770b Compaction \u72b6\u6001"),(0,o.kt)("h3",{id:"\u8282\u70b9\u6574\u4f53-compaction-\u72b6\u6001"},"\u8282\u70b9\u6574\u4f53 compaction \u72b6\u6001"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X GET http://be_host:webserver_port/api/compaction/run_status\n")),(0,o.kt)("p",null,"\u8fd4\u56de JSON \u683c\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "CumulativeCompaction": {\n         "/home/disk1" : [10001, 10002],\n         "/home/disk2" : [10003]\n  },\n  "BaseCompaction": {\n         "/home/disk1" : [10001, 10002],\n         "/home/disk2" : [10003]\n  }\n}\n')),(0,o.kt)("p",null,"\u8be5\u7ed3\u6784\u8868\u793a\u67d0\u4e2a\u6570\u636e\u76ee\u5f55\u4e0b\uff0c\u6b63\u5728\u6267\u884c compaction \u4efb\u52a1\u7684 tablet \u7684 id\uff0c\u4ee5\u53ca compaction \u7684\u7c7b\u578b\u3002"),(0,o.kt)("h3",{id:"\u6307\u5b9a-tablet-\u7684-compaction-\u72b6\u6001"},"\u6307\u5b9a tablet \u7684 compaction \u72b6\u6001"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X GET http://be_host:webserver_port/api/compaction/show?tablet_id=xxxx\n")),(0,o.kt)("p",null,"\u82e5 tablet \u4e0d\u5b58\u5728\uff0c\u8fd4\u56de JSON \u683c\u5f0f\u7684\u9519\u8bef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')),(0,o.kt)("p",null,"\u82e5 tablet \u5b58\u5728\uff0c\u5219\u8fd4\u56de JSON \u683c\u5f0f\u7684\u7ed3\u679c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "cumulative policy type": "SIZE_BASED",\n    "cumulative point": 50,\n    "last cumulative failure time": "2019-12-16 18:13:43.224",\n    "last base failure time": "2019-12-16 18:13:23.320",\n    "last cumu success time": ,\n    "last base success time": "2019-12-16 18:11:50.780",\n    "rowsets": [\n        "[0-48] 10 DATA OVERLAPPING 574.00 MB",\n        "[49-49] 2 DATA OVERLAPPING 574.00 B",\n        "[50-50] 0 DELETE NONOVERLAPPING 574.00 B",\n        "[51-51] 5 DATA OVERLAPPING 574.00 B"\n    ],\n    "missing_rowsets": [],\n    "stale version path": [\n        {\n            "path id": "2",\n            "last create time": "2019-12-16 18:11:15.110 +0800",\n            "path list": "2-> [0-24] -> [25-48]"\n        }, \n        {\n            "path id": "1",\n            "last create time": "2019-12-16 18:13:15.110 +0800",\n            "path list": "1-> [25-40] -> [40-48]"\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"\u7ed3\u679c\u8bf4\u660e\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"cumulative policy type\uff1a\u5f53\u524dtablet\u6240\u4f7f\u7528\u7684 cumulative compaction \u7b56\u7565\u3002"),(0,o.kt)("li",{parentName:"ul"},"cumulative point\uff1abase \u548c cumulative compaction \u7684\u7248\u672c\u5206\u754c\u7ebf\u3002\u5728 point\uff08\u4e0d\u542b\uff09\u4e4b\u524d\u7684\u7248\u672c\u7531 base compaction \u5904\u7406\u3002point\uff08\u542b\uff09\u4e4b\u540e\u7684\u7248\u672c\u7531 cumulative compaction \u5904\u7406\u3002"),(0,o.kt)("li",{parentName:"ul"},"last cumulative failure time\uff1a\u4e0a\u4e00\u6b21\u5c1d\u8bd5 cumulative compaction \u5931\u8d25\u7684\u65f6\u95f4\u3002\u9ed8\u8ba4 10min \u540e\u624d\u4f1a\u518d\u6b21\u5c1d\u8bd5\u5bf9\u8be5 tablet \u505a cumulative compaction\u3002"),(0,o.kt)("li",{parentName:"ul"},"last base failure time\uff1a\u4e0a\u4e00\u6b21\u5c1d\u8bd5 base compaction \u5931\u8d25\u7684\u65f6\u95f4\u3002\u9ed8\u8ba4 10min \u540e\u624d\u4f1a\u518d\u6b21\u5c1d\u8bd5\u5bf9\u8be5 tablet \u505a base compaction\u3002"),(0,o.kt)("li",{parentName:"ul"},"rowsets\uff1a\u8be5 tablet \u5f53\u524d\u7684 rowset \u96c6\u5408\u3002\u5982 ","[0-48]"," \u8868\u793a 0-48 \u7248\u672c\u3002\u7b2c\u4e8c\u4f4d\u6570\u5b57\u8868\u793a\u8be5\u7248\u672c\u4e2d segment \u7684\u6570\u91cf\u3002",(0,o.kt)("inlineCode",{parentName:"li"},"DELETE")," \u8868\u793a delete \u7248\u672c\u3002",(0,o.kt)("inlineCode",{parentName:"li"},"DATA")," \u8868\u793a\u6570\u636e\u7248\u672c\u3002",(0,o.kt)("inlineCode",{parentName:"li"},"OVERLAPPING")," \u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"NONOVERLAPPING")," \u8868\u793asegment\u6570\u636e\u662f\u5426\u91cd\u53e0\u3002"),(0,o.kt)("li",{parentName:"ul"},"missing_rowsets: \u7f3a\u5931\u7684\u7248\u672c\u3002"),(0,o.kt)("li",{parentName:"ul"},"stale version path\uff1a\u8be5 table \u5f53\u524d\u88ab\u5408\u5e76rowset\u96c6\u5408\u7684\u5408\u5e76\u7248\u672c\u8def\u5f84\uff0c\u8be5\u7ed3\u6784\u662f\u4e00\u4e2a\u6570\u7ec4\u7ed3\u6784\uff0c\u6bcf\u4e2a\u5143\u7d20\u8868\u793a\u4e00\u4e2a\u5408\u5e76\u8def\u5f84\u3002\u6bcf\u4e2a\u5143\u7d20\u4e2d\u5305\u542b\u4e86\u4e09\u4e2a\u5c5e\u6027\uff1apath id \u8868\u793a\u7248\u672c\u8def\u5f84id\uff0clast create time \u8868\u793a\u5f53\u524d\u8def\u5f84\u4e0a\u6700\u8fd1\u7684 rowset \u521b\u5efa\u65f6\u95f4\uff0c\u9ed8\u8ba4\u5728\u8fd9\u4e2a\u65f6\u95f4\u534a\u4e2a\u5c0f\u65f6\u4e4b\u540e\u8fd9\u6761\u8def\u5f84\u4e0a\u7684\u6240\u6709 rowset \u4f1a\u88ab\u8fc7\u671f\u5220\u9664\u3002")),(0,o.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X GET http://192.168.10.24:8040/api/compaction/show?tablet_id=10015\n")),(0,o.kt)("h2",{id:"\u624b\u52a8\u89e6\u53d1-compaction"},"\u624b\u52a8\u89e6\u53d1 Compaction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X POST http://be_host:webserver_port/api/compaction/run?tablet_id=xxxx&compact_type=cumulative\n")),(0,o.kt)("p",null,"\u5f53\u524d\u4ec5\u80fd\u6267\u884c\u4e00\u4e2a\u624b\u52a8compaction\u4efb\u52a1\uff0c\u5176\u4e2dcompact_type\u53d6\u503c\u4e3abase\u6216cumulative"),(0,o.kt)("p",null,"\u82e5 tablet \u4e0d\u5b58\u5728\uff0c\u8fd4\u56de JSON \u683c\u5f0f\u7684\u9519\u8bef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')),(0,o.kt)("p",null,"\u82e5 compaction \u6267\u884c\u4efb\u52a1\u89e6\u53d1\u5931\u8d25\u65f6\uff0c\u8fd4\u56de JSON \u683c\u5f0f\u7684\u9519\u8bef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "status": "Fail",\n    "msg": "fail to execute compaction, error = -2000"\n}\n')),(0,o.kt)("p",null,"\u82e5 compaction \u6267\u884c\u89e6\u53d1\u6210\u529f\u65f6\uff0c\u5219\u8fd4\u56de JSON \u683c\u5f0f\u7684\u7ed3\u679c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "status": "Success",\n    "msg": "compaction task is successfully triggered."\n}\n')),(0,o.kt)("p",null,"\u7ed3\u679c\u8bf4\u660e\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"status\uff1a\u89e6\u53d1\u4efb\u52a1\u72b6\u6001\uff0c\u5f53\u6210\u529f\u89e6\u53d1\u65f6\u4e3aSuccess\uff1b\u5f53\u56e0\u67d0\u4e9b\u539f\u56e0\uff08\u6bd4\u5982\uff0c\u6ca1\u6709\u83b7\u53d6\u5230\u5408\u9002\u7684\u7248\u672c\uff09\u65f6\uff0c\u8fd4\u56deFail\u3002"),(0,o.kt)("li",{parentName:"ul"},"msg\uff1a\u7ed9\u51fa\u5177\u4f53\u7684\u6210\u529f\u6216\u5931\u8d25\u7684\u4fe1\u606f\u3002")),(0,o.kt)("h3",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X POST http://192.168.10.24:8040/api/compaction/run?tablet_id=10015\\&compact_type=cumulative\n")),(0,o.kt)("h2",{id:"\u624b\u52a8-compaction-\u6267\u884c\u72b6\u6001"},"\u624b\u52a8 Compaction \u6267\u884c\u72b6\u6001"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X GET http://be_host:webserver_port/api/compaction/run_status?tablet_id=xxxx\n")),(0,o.kt)("p",null,"\u82e5 tablet \u4e0d\u5b58\u5728\uff0c\u8fd4\u56de JSON \u683c\u5f0f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')),(0,o.kt)("p",null,"\u82e5 tablet \u5b58\u5728\u5e76\u4e14 tablet \u4e0d\u5728\u6b63\u5728\u6267\u884c compaction\uff0c\u8fd4\u56de JSON \u683c\u5f0f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "status" : "Success",\n    "run_status" : false,\n    "msg" : "this tablet_id is not running",\n    "tablet_id" : 11308,\n    "schema_hash" : 700967178,\n    "compact_type" : ""\n}\n')),(0,o.kt)("p",null,"\u82e5 tablet \u5b58\u5728\u5e76\u4e14 tablet \u6b63\u5728\u6267\u884c compaction\uff0c\u8fd4\u56de JSON \u683c\u5f0f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "status" : "Success",\n    "run_status" : true,\n    "msg" : "this tablet_id is running",\n    "tablet_id" : 11308,\n    "schema_hash" : 700967178,\n    "compact_type" : "cumulative"\n}\n')),(0,o.kt)("p",null,"\u7ed3\u679c\u8bf4\u660e\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"run_status\uff1a\u83b7\u53d6\u5f53\u524d\u624b\u52a8 compaction \u4efb\u52a1\u6267\u884c\u72b6\u6001")),(0,o.kt)("h3",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X GET http://192.168.10.24:8040/api/compaction/run_status?tablet_id=10015\n")))}m.isMDXComponent=!0}}]);