"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[90641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={title:"utc_timestamp",language:"en"},c=void 0,a={unversionedId:"sql-reference/sql-functions/date-time-functions/utc_timestamp",id:"version-0.15/sql-reference/sql-functions/date-time-functions/utc_timestamp",title:"utc_timestamp",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-functions/date-time-functions/utc_timestamp.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/utc_timestamp",permalink:"/docs/0.15/sql-reference/sql-functions/date-time-functions/utc_timestamp",draft:!1,tags:[],version:"0.15",frontMatter:{title:"utc_timestamp",language:"en"},sidebar:"docs",previous:{title:"unix_timestamp",permalink:"/docs/0.15/sql-reference/sql-functions/date-time-functions/unix_timestamp"},next:{title:"week",permalink:"/docs/0.15/sql-reference/sql-functions/date-time-functions/week"}},s={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"utc_timestamp"},"utc_timestamp"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DATETIME UTC_TIMESTAMP()")),(0,i.kt)("p",null,'Returns the current UTC date and time in "YYYY-MM-DD HH: MM: SS" or'),(0,i.kt)("p",null,'A Value of "YYYYMMDDHMMSS" Format'),(0,i.kt)("p",null,"Depending on whether the function is used in a string or numeric context"),(0,i.kt)("h2",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select utc_timestamp(),utc_timestamp() + 1;\n+---------------------+---------------------+\n| utc_timestamp()     | utc_timestamp() + 1 |\n+---------------------+---------------------+\n| 2019-07-10 12:31:18 |      20190710123119 |\n+---------------------+---------------------+\n## keyword\nUTC_TIMESTAMP,UTC,TIMESTAMP\n")))}p.isMDXComponent=!0}}]);