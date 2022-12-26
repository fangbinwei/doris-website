"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[8118],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||O[d]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"SHOW PARTITIONS",language:"zh-CN"},l=void 0,i={unversionedId:"sql-reference/sql-statements/Data-Manipulation/SHOW-PARTITIONS",id:"version-0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-PARTITIONS",title:"SHOW PARTITIONS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-PARTITIONS.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/SHOW-PARTITIONS",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-PARTITIONS",draft:!1,tags:[],version:"0.15",frontMatter:{title:"SHOW PARTITIONS",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW LOAD",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-LOAD"},next:{title:"SHOW PROPERTY",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-PROPERTY"}},c={},s=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"show-partitions"},"SHOW PARTITIONS"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u5206\u533a\u4fe1\u606f\n\u8bed\u6cd5\uff1a\n    SHOW [TEMPORARY] PARTITIONS FROM [db_name.]table_name [WHERE] [ORDER BY] [LIMIT];\n\u8bf4\u660e:\n    \u652f\u6301PartitionId,PartitionName,State,Buckets,ReplicationNum,LastConsistencyCheckTime\u7b49\u5217\u7684\u8fc7\u6ee4\n    TEMPORARY\u6307\u5b9a\u5217\u51fa\u4e34\u65f6\u5206\u533a\n")),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'1.\u5c55\u793a\u6307\u5b9adb\u4e0b\u6307\u5b9a\u8868\u7684\u6240\u6709\u975e\u4e34\u65f6\u5206\u533a\u4fe1\u606f\n    SHOW PARTITIONS FROM example_db.table_name;\n\n2.\u5c55\u793a\u6307\u5b9adb\u4e0b\u6307\u5b9a\u8868\u7684\u6240\u6709\u4e34\u65f6\u5206\u533a\u4fe1\u606f\n    SHOW TEMPORARY PARTITIONS FROM example_db.table_name;\n    \n3.\u5c55\u793a\u6307\u5b9adb\u4e0b\u6307\u5b9a\u8868\u7684\u6307\u5b9a\u975e\u4e34\u65f6\u5206\u533a\u7684\u4fe1\u606f\n    SHOW PARTITIONS FROM example_db.table_name WHERE PartitionName = "p1";\n\n4.\u5c55\u793a\u6307\u5b9adb\u4e0b\u6307\u5b9a\u8868\u7684\u6700\u65b0\u975e\u4e34\u65f6\u5206\u533a\u7684\u4fe1\u606f\n    SHOW PARTITIONS FROM example_db.table_name ORDER BY PartitionId DESC LIMIT 1;\n')),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW,PARTITIONS\n")))}u.isMDXComponent=!0}}]);