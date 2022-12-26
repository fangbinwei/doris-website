"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[74770],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},27226:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={title:"CREATE-FILE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE",id:"version-dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE",title:"CREATE-FILE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE.md",tags:[],version:"dev",frontMatter:{title:"CREATE-FILE",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-DATABASE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-DATABASE"},next:{title:"CREATE-INDEX",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-INDEX"}},s={},c=[{value:"CREATE-FILE",id:"create-file",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-file"},"CREATE-FILE"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"CREATE FILE"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u5e76\u4e0a\u4f20\u4e00\u4e2a\u6587\u4ef6\u5230 Doris \u96c6\u7fa4\u3002\n\u8be5\u529f\u80fd\u901a\u5e38\u7528\u4e8e\u7ba1\u7406\u4e00\u4e9b\u5176\u4ed6\u547d\u4ee4\u4e2d\u9700\u8981\u4f7f\u7528\u5230\u7684\u6587\u4ef6\uff0c\u5982\u8bc1\u4e66\u3001\u516c\u94a5\u79c1\u94a5\u7b49\u7b49\u3002"),(0,r.kt)("p",null,"\u8be5\u547d\u4ee4\u53ea\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," \u6743\u9650\u7528\u6237\u53ef\u4ee5\u6267\u884c\u3002\n\u67d0\u4e2a\u6587\u4ef6\u90fd\u5f52\u5c5e\u4e0e\u67d0\u4e00\u4e2a\u7684 database\u3002\u5bf9 database \u62e5\u6709\u8bbf\u95ee\u6743\u9650\u7684\u7528\u6237\u90fd\u53ef\u4ee5\u4f7f\u7528\u8be5\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u5355\u4e2a\u6587\u4ef6\u5927\u5c0f\u9650\u5236\u4e3a 1MB\u3002\n\u4e00\u4e2a Doris \u96c6\u7fa4\u6700\u591a\u4e0a\u4f20 100 \u4e2a\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE FILE "file_name" [IN database]\n        [properties]\n')),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"file_name:  \u81ea\u5b9a\u4e49\u6587\u4ef6\u540d\u3002"),(0,r.kt)("li",{parentName:"ul"},"database: \u6587\u4ef6\u5f52\u5c5e\u4e8e\u67d0\u4e00\u4e2a db\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\uff0c\u5219\u4f7f\u7528\u5f53\u524d session \u7684 db\u3002"),(0,r.kt)("li",{parentName:"ul"},"properties \u652f\u6301\u4ee5\u4e0b\u53c2\u6570:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"url\uff1a\u5fc5\u987b\u3002\u6307\u5b9a\u4e00\u4e2a\u6587\u4ef6\u7684\u4e0b\u8f7d\u8def\u5f84\u3002\u5f53\u524d\u4ec5\u652f\u6301\u65e0\u8ba4\u8bc1\u7684 http \u4e0b\u8f7d\u8def\u5f84\u3002\u547d\u4ee4\u6267\u884c\u6210\u529f\u540e\uff0c\u6587\u4ef6\u5c06\u88ab\u4fdd\u5b58\u5728 doris \u4e2d\uff0c\u8be5 url \u5c06\u4e0d\u518d\u9700\u8981\u3002"),(0,r.kt)("li",{parentName:"ul"},"catalog\uff1a\u5fc5\u987b\u3002\u5bf9\u6587\u4ef6\u7684\u5206\u7c7b\u540d\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u3002\u4f46\u5728\u67d0\u4e9b\u547d\u4ee4\u4e2d\uff0c\u4f1a\u67e5\u627e\u6307\u5b9a catalog \u4e2d\u7684\u6587\u4ef6\u3002\u6bd4\u5982\u4f8b\u884c\u5bfc\u5165\u4e2d\u7684\uff0c\u6570\u636e\u6e90\u4e3a kafka \u65f6\uff0c\u4f1a\u67e5\u627e catalog \u540d\u4e3a kafka \u4e0b\u7684\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"md5: \u53ef\u9009\u3002\u6587\u4ef6\u7684 md5\u3002\u5982\u679c\u6307\u5b9a\uff0c\u4f1a\u5728\u4e0b\u8f7d\u6587\u4ef6\u540e\u8fdb\u884c\u6821\u9a8c\u3002")))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u6587\u4ef6 ca.pem \uff0c\u5206\u7c7b\u4e3a kafka"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE FILE "ca.pem"\nPROPERTIES\n(\n    "url" = "https://test.bj.bcebos.com/kafka-key/ca.pem",\n    "catalog" = "kafka"\n);\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u6587\u4ef6 client.key\uff0c\u5206\u7c7b\u4e3a my_catalog"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE FILE "client.key"\nIN my_database\nPROPERTIES\n(\n    "url" = "https://test.bj.bcebos.com/kafka-key/client.key",\n    "catalog" = "my_catalog",\n    "md5" = "b5bb901bf10f99205b39a46ac3557dd9"\n);\n')))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"CREATE, FILE\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8be5\u547d\u4ee4\u53ea\u6709 amdin \u6743\u9650\u7528\u6237\u53ef\u4ee5\u6267\u884c\u3002\u67d0\u4e2a\u6587\u4ef6\u90fd\u5f52\u5c5e\u4e0e\u67d0\u4e00\u4e2a\u7684 database\u3002\u5bf9 database \u62e5\u6709\u8bbf\u95ee\u6743\u9650\u7684\u7528\u6237\u90fd\u53ef\u4ee5\u4f7f\u7528\u8be5\u6587\u4ef6\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6587\u4ef6\u5927\u5c0f\u548c\u6570\u91cf\u9650\u5236\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u529f\u80fd\u4e3b\u8981\u7528\u4e8e\u7ba1\u7406\u4e00\u4e9b\u8bc1\u4e66\u7b49\u5c0f\u6587\u4ef6\u3002\u56e0\u6b64\u5355\u4e2a\u6587\u4ef6\u5927\u5c0f\u9650\u5236\u4e3a 1MB\u3002\u4e00\u4e2a Doris \u96c6\u7fa4\u6700\u591a\u4e0a\u4f20 100 \u4e2a\u6587\u4ef6\u3002"))))}m.isMDXComponent=!0}}]);