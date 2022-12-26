"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[37569],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,m=d["".concat(l,".").concat(p)]||d[p]||f[p]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={title:"hours_diff",language:"en"},a=void 0,s={unversionedId:"sql-manual/sql-functions/date-time-functions/hours_diff",id:"version-dev/sql-manual/sql-functions/date-time-functions/hours_diff",title:"hours_diff",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/date-time-functions/hours_diff.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/hours_diff",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/hours_diff",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/date-time-functions/hours_diff.md",tags:[],version:"dev",frontMatter:{title:"hours_diff",language:"en"},sidebar:"docs",previous:{title:"hours_add",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/hours_add"},next:{title:"hours_sub",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/hours_sub"}},l={},u=[{value:"hours_diff",id:"hours_diff",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"hours_diff"},"hours_diff"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"INT hours_diff(DATETIME enddate, DATETIME startdate)")),(0,o.kt)("p",null,"The difference between the start time and the end time is a few hours"),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select hours_diff('2020-12-25 22:00:00','2020-12-25 21:00:00');\n+----------------------------------------------------------+\n| hours_diff('2020-12-25 22:00:00', '2020-12-25 21:00:00') |\n+----------------------------------------------------------+\n|                                                        1 |\n+----------------------------------------------------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hours_diff\n")))}d.isMDXComponent=!0}}]);