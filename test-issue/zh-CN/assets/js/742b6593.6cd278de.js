"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[83554],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"PAUSE SYNC JOB",language:"zh-CN"},l=void 0,i={unversionedId:"sql-reference/sql-statements/Data-Manipulation/PAUSE-SYNC-JOB",id:"version-0.15/sql-reference/sql-statements/Data-Manipulation/PAUSE-SYNC-JOB",title:"PAUSE SYNC JOB",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-statements/Data-Manipulation/PAUSE-SYNC-JOB.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/PAUSE-SYNC-JOB",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/PAUSE-SYNC-JOB",draft:!1,tags:[],version:"0.15",frontMatter:{title:"PAUSE SYNC JOB",language:"zh-CN"},sidebar:"docs",previous:{title:"PAUSE ROUTINE LOAD",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/PAUSE-ROUTINE-LOAD"},next:{title:"RESTORE TABLET",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/RESTORE-TABLET"}},p={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pause-sync-job"},"PAUSE SYNC JOB"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"job_name")," \u6682\u505c\u4e00\u4e2a\u6570\u636e\u5e93\u5185\u6b63\u5728\u8fd0\u884c\u7684\u5e38\u9a7b\u6570\u636e\u540c\u6b65\u4f5c\u4e1a\uff0c\u88ab\u6682\u505c\u7684\u4f5c\u4e1a\u5c06\u505c\u6b62\u540c\u6b65\u6570\u636e\uff0c\u4fdd\u6301\u6d88\u8d39\u7684\u6700\u65b0\u4f4d\u7f6e\uff0c\u76f4\u5230\u88ab\u7528\u6237\u6062\u590d\u3002"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"PAUSE SYNC JOB [db.]job_name\n    \n")),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6682\u505c\u540d\u79f0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"job_name")," \u7684\u6570\u636e\u540c\u6b65\u4f5c\u4e1a\u3002"),(0,a.kt)("p",{parentName:"li"},"PAUSE SYNC JOB ",(0,a.kt)("inlineCode",{parentName:"p"},"job_name"),";"))),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"PAUSE,SYNC,JOB,BINLOG\n")))}u.isMDXComponent=!0}}]);