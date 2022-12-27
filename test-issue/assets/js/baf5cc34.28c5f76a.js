"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[77872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},43046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"CAST",language:"en"},l=void 0,i={unversionedId:"sql-reference/sql-functions/cast",id:"version-0.15/sql-reference/sql-functions/cast",title:"CAST",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-functions/cast.md",sourceDirName:"sql-reference/sql-functions",slug:"/sql-reference/sql-functions/cast",permalink:"/docs/0.15/sql-reference/sql-functions/cast",draft:!1,tags:[],version:"0.15",frontMatter:{title:"CAST",language:"en"},sidebar:"docs",previous:{title:"window function",permalink:"/docs/0.15/sql-reference/sql-functions/window-function"},next:{title:"DIGITAL-MASKING",permalink:"/docs/0.15/sql-reference/sql-functions/digital-masking"}},s={},c=[{value:"BIGINT type",id:"bigint-type",level:3},{value:"Syntax (BIGINT)",id:"syntax-bigint",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cast"},"CAST"),(0,a.kt)("p",null,"##Description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cast (input as type)\n")),(0,a.kt)("h3",{id:"bigint-type"},"BIGINT type"),(0,a.kt)("h3",{id:"syntax-bigint"},"Syntax (BIGINT)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cast (input as BIGINT)")),(0,a.kt)("p",null,"Converts input to the specified type"),(0,a.kt)("p",null,"Converting the current column input to BIGINT type"),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Turn constant, or a column in a table")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select cast (1 as BIGINT);\n+-------------------+\n| CAST(1 AS BIGINT) |\n+-------------------+\n|                 1 |\n+-------------------+\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Transferred raw data")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl --location-trusted -u root: -T ~/user_data/bigint -H "columns: tmp_k1, k1=cast(tmp_k1 as BIGINT)"  http://host:port/api/test/bigint/_stream_load\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Note: In the import, because the original type is String, when the original data with floating point value is cast, the data will be converted to NULL, such as 12.0. Doris is currently not truncating raw data. *")),(0,a.kt)("p",null,"If you want to force this type of raw data cast to int. Look at the following words:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl --location-trusted -u root: -T ~/user_data/bigint -H "columns: tmp_k1, k1=cast(cast(tmp_k1 as DOUBLE) as BIGINT)"  http://host:port/api/test/bigint/_stream_load\n\nmysql> select cast(cast ("11.2" as double) as bigint);\n+----------------------------------------+\n| CAST(CAST(\'11.2\' AS DOUBLE) AS BIGINT) |\n+----------------------------------------+\n|                                     11 |\n+----------------------------------------+\n1 row in set (0.00 sec)\n')),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("p",null,"CAST"))}u.isMDXComponent=!0}}]);