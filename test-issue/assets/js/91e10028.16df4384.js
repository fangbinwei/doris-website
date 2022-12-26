"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[88850],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,l(l({ref:e},p),{},{components:n})):r.createElement(f,l({ref:e},p))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74514:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"CAST",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-functions/cast",id:"version-dev/sql-manual/sql-functions/cast",title:"CAST",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/cast.md",sourceDirName:"sql-manual/sql-functions",slug:"/sql-manual/sql-functions/cast",permalink:"/docs/dev/sql-manual/sql-functions/cast",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/cast.md",tags:[],version:"dev",frontMatter:{title:"CAST",language:"en"},sidebar:"docs",previous:{title:"WINDOW-FUNCTION-WINDOW-FUNNEL",permalink:"/docs/dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-WINDOW-FUNNEL"},next:{title:"DIGITAL-MASKING",permalink:"/docs/dev/sql-manual/sql-functions/digital-masking"}},s={},c=[{value:"CAST",id:"cast",level:2},{value:"Description",id:"description",level:3},{value:"BIGINT type",id:"bigint-type",level:4},{value:"Syntax (BIGINT)",id:"syntax-bigint",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"cast"},"CAST"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cast (input as type)\n")),(0,a.kt)("h4",{id:"bigint-type"},"BIGINT type"),(0,a.kt)("h4",{id:"syntax-bigint"},"Syntax (BIGINT)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cast (input as BIGINT)")),(0,a.kt)("p",null,"Converts input to the specified type"),(0,a.kt)("p",null,"Converting the current column input to BIGINT type"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Turn constant, or a column in a table")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select cast (1 as BIGINT);\n+-------------------+\n| CAST(1 AS BIGINT) |\n+-------------------+\n|                 1 |\n+-------------------+\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Transferred raw data")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl --location-trusted -u root: -T ~/user_data/bigint -H "columns: tmp_k1, k1=cast(tmp_k1 as BIGINT)"  http://host:port/api/test/bigint/_stream_load\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Note: In the import, because the original type is String, when the original data with floating point value is cast, the data will be converted to NULL, such as 12.0. Doris is currently not truncating raw data. *")),(0,a.kt)("p",null,"If you want to force this type of raw data cast to int. Look at the following words:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl --location-trusted -u root: -T ~/user_data/bigint -H "columns: tmp_k1, k1=cast(cast(tmp_k1 as DOUBLE) as BIGINT)"  http://host:port/api/test/bigint/_stream_load\n\nmysql> select cast(cast ("11.2" as double) as bigint);\n+----------------------------------------+\n| CAST(CAST(\'11.2\' AS DOUBLE) AS BIGINT) |\n+----------------------------------------+\n|                                     11 |\n+----------------------------------------+\n1 row in set (0.00 sec)\n')),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"CAST"))}u.isMDXComponent=!0}}]);