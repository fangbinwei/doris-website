"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[87970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={title:"Set Config Action",language:"zh-CN"},o=void 0,p={unversionedId:"admin-manual/http-actions/fe/set-config-action",id:"version-dev/admin-manual/http-actions/fe/set-config-action",title:"Set Config Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/admin-manual/http-actions/fe/set-config-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/set-config-action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/set-config-action",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/admin-manual/http-actions/fe/set-config-action.md",tags:[],version:"dev",frontMatter:{title:"Set Config Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Table Query Plan Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/table-query-plan-action"},next:{title:"Row Count Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/row-count-action"}},s={},l=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"set-config-action"},"Set Config Action"),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/_set_config")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"\u7528\u4e8e\u52a8\u6001\u8bbe\u7f6e FE \u7684\u53c2\u6570\u3002\u8be5\u547d\u4ee4\u7b49\u540c\u4e8e\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"ADMIN SET FRONTEND CONFIG")," \u547d\u4ee4\u3002\u4f46\u8be5\u547d\u4ee4\u4ec5\u4f1a\u8bbe\u7f6e\u5bf9\u5e94 FE \u8282\u70b9\u7684\u914d\u7f6e\u3002\u5e76\u4e14\u4e0d\u4f1a\u81ea\u52a8\u8f6c\u53d1 ",(0,r.kt)("inlineCode",{parentName:"p"},"MasterOnly")," \u914d\u7f6e\u9879\u7ed9 Master FE \u8282\u70b9\u3002"),(0,r.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"confkey1=confvalue1")),(0,r.kt)("p",{parentName:"li"},"  \u6307\u5b9a\u8981\u8bbe\u7f6e\u7684\u914d\u7f6e\u540d\u79f0\uff0c\u5176\u503c\u4e3a\u8981\u4fee\u6539\u7684\u914d\u7f6e\u503c\u3002\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"persist")),(0,r.kt)("p",{parentName:"li"},"  \u662f\u5426\u8981\u5c06\u4fee\u6539\u7684\u914d\u7f6e\u6301\u4e45\u5316\u3002\u9ed8\u8ba4\u4e3a false\uff0c\u5373\u4e0d\u6301\u4e45\u5316\u3002\u5982\u679c\u4e3a true\uff0c\u8fd9\u4fee\u6539\u540e\u7684\u914d\u7f6e\u9879\u4f1a\u5199\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"fe_custom.conf")," \u6587\u4ef6\u4e2d\uff0c\u5e76\u5728 FE \u91cd\u542f\u540e\u4ecd\u4f1a\u751f\u6548\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"reset_persist")),(0,r.kt)("p",{parentName:"li"},"  \u662f\u5426\u8981\u6e05\u7a7a\u539f\u6765\u7684\u6301\u4e45\u5316\u914d\u7f6e\uff0c\u53ea\u5728 persist \u53c2\u6570\u4e3a true \u65f6\u751f\u6548\u3002\u4e3a\u4e86\u517c\u5bb9\u539f\u6765\u7684\u7248\u672c\uff0creset_persist \u9ed8\u8ba4\u4e3a true\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c persist \u8bbe\u4e3a true\uff0c\u4e0d\u8bbe\u7f6e reset_persist \u6216 reset_persist \u4e3a true\uff0c\u5c06\u5148\u6e05\u7a7a",(0,r.kt)("inlineCode",{parentName:"p"},"fe_custom.conf"),"\u6587\u4ef6\u4e2d\u7684\u914d\u7f6e\u518d\u5c06\u672c\u6b21\u4fee\u6539\u7684\u914d\u7f6e\u5199\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"fe_custom.conf"),"\uff1b",(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c persist \u8bbe\u4e3a true\uff0creset_persist \u4e3a false\uff0c\u672c\u6b21\u4fee\u6539\u7684\u914d\u7f6e\u9879\u5c06\u4f1a\u589e\u91cf\u6dfb\u52a0\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"fe_custom.conf"),"\u3002"))),(0,r.kt)("h2",{id:"request-body"},"Request body"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "set": {\n            "key": "value"\n        },\n        "err": [\n            {\n               "config_name": "",\n               "config_value": "",\n               "err_info": ""\n            }\n        ],\n        "persist":""\n    },\n    "count": 0\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"set")," \u5b57\u6bb5\u8868\u793a\u8bbe\u7f6e\u6210\u529f\u7684\u914d\u7f6e\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"err")," \u5b57\u6bb5\u8868\u793a\u8bbe\u7f6e\u5931\u8d25\u7684\u914d\u7f6e\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"persist")," \u5b57\u6bb5\u8868\u793a\u6301\u4e45\u5316\u4fe1\u606f\u3002"),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"storage_min_left_capacity_bytes")," \u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"replica_ack_policy")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"agent_task_resend_wait_time_ms"),"  \u4e09\u4e2a\u914d\u7f6e\u7684\u503c\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'GET /api/_set_config?storage_min_left_capacity_bytes=1024&replica_ack_policy=SIMPLE_MAJORITY&agent_task_resend_wait_time_ms=true\n\nResponse:\n{\n"msg": "success",\n"code": 0,\n"data": {\n    "set": {\n        "storage_min_left_capacity_bytes": "1024"\n    },\n    "err": [\n        {\n            "config_name": "replica_ack_policy",\n            "config_value": "SIMPLE_MAJORITY",\n            "err_info": "Not support dynamic modification."\n        },\n        {\n            "config_name": "agent_task_resend_wait_time_ms",\n            "config_value": "true",\n            "err_info": "Unsupported configuration value type."\n        }\n    ],\n    "persist": ""\n},\n"count": 0\n}\n\nstorage_min_left_capacity_bytes \u8bbe\u7f6e\u6210\u529f\uff1b  \nreplica_ack_policy \u8bbe\u7f6e\u5931\u8d25\uff0c\u539f\u56e0\u662f\u8be5\u914d\u7f6e\u9879\u4e0d\u652f\u6301\u52a8\u6001\u4fee\u6539\uff1b \nagent_task_resend_wait_time_ms \u8bbe\u7f6e\u5931\u8d25\uff0c\u56e0\u4e3a\u8be5\u914d\u7f6e\u9879\u7c7b\u578b\u4e3along\uff0c \u8bbe\u7f6eboolean\u7c7b\u578b\u5931\u8d25\u3002\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"max_bytes_per_broker_scanner")," \u5e76\u6301\u4e45\u5316"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'GET /api/_set_config?max_bytes_per_broker_scanner=21474836480&persist=true&reset_persist=false\n\nResponse:\n{\n"msg": "success",\n"code": 0,\n"data": {\n    "set": {\n        "max_bytes_per_broker_scanner": "21474836480"\n    },\n    "err": [],\n    "persist": "ok"\n},\n"count": 0\n}\n')),(0,r.kt)("p",{parentName:"li"},"fe/conf \u76ee\u5f55\u751f\u6210fe_custom.conf\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"#THIS IS AN AUTO GENERATED CONFIG FILE.\n#You can modify this file manually, and the configurations in this file\n#will overwrite the configurations in fe.conf\n#Wed Jul 28 12:43:14 CST 2021\nmax_bytes_per_broker_scanner=21474836480\n")))))}m.isMDXComponent=!0}}]);