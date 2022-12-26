"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[45881],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=l.createContext({}),s=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||r;return n?l.createElement(f,o(o({ref:t},m),{},{components:n})):l.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var l=n(87462),a=(n(67294),n(3905));const r={title:"localtime,localtimestamp",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/date-time-functions/localtime",id:"version-dev/sql-manual/sql-functions/date-time-functions/localtime",title:"localtime,localtimestamp",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/date-time-functions/localtime.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/localtime",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/localtime",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/date-time-functions/localtime.md",tags:[],version:"dev",frontMatter:{title:"localtime,localtimestamp",language:"zh-CN"},sidebar:"docs",previous:{title:"current_timestamp",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/current_timestamp"},next:{title:"now",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/now"}},c={},s=[{value:"localtime,localtimestamp",id:"localtimelocaltimestamp",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"localtimelocaltimestamp"},"localtime,localtimestamp"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DATETIME localtime()"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"DATETIME localtimestamp()")),(0,a.kt)("p",null,"\u83b7\u5f97\u5f53\u524d\u7684\u65f6\u95f4\uff0c\u4ee5Datetime\u7c7b\u578b\u8fd4\u56de"),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select localtime();\n+---------------------+\n| localtime()         |\n+---------------------+\n| 2022-09-22 17:30:23 |\n+---------------------+\n\nmysql> select localtimestamp();\n+---------------------+\n| localtimestamp()    |\n+---------------------+\n| 2022-09-22 17:30:29 |\n+---------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"localtime,localtimestamp\n")))}u.isMDXComponent=!0}}]);