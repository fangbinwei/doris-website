"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[93063],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:i,c[1]=o;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={title:"curtime,current_time",language:"zh-CN"},c=void 0,o={unversionedId:"sql-manual/sql-functions/date-time-functions/curtime",id:"version-dev/sql-manual/sql-functions/date-time-functions/curtime",title:"curtime,current_time",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/date-time-functions/curtime.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/curtime",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/curtime",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/date-time-functions/curtime.md",tags:[],version:"dev",frontMatter:{title:"curtime,current_time",language:"zh-CN"},sidebar:"docs",previous:{title:"curdate,current_date",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/curdate"},next:{title:"current_timestamp",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/current_timestamp"}},l={},u=[{value:"curtime,current_time",id:"curtimecurrent_time",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"curtimecurrent_time"},"curtime,current_time"),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TIME CURTIME()")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"\u83b7\u5f97\u5f53\u524d\u7684\u65f6\u95f4\uff0c\u4ee5TIME\u7c7b\u578b\u8fd4\u56de"),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select current_time();\n+----------------+\n| current_time() |\n+----------------+\n| 15:25:47       |\n+----------------+\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CURTIME,CURRENT_TIME\n")))}m.isMDXComponent=!0}}]);