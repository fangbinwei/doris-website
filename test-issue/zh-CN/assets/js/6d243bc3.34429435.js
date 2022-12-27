"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[35100],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return t?a.createElement(f,o(o({ref:n},p),{},{components:t})):a.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},70701:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const l={title:"least",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/math-functions/least",id:"version-dev/sql-manual/sql-functions/math-functions/least",title:"least",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/math-functions/least.md",sourceDirName:"sql-manual/sql-functions/math-functions",slug:"/sql-manual/sql-functions/math-functions/least",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/math-functions/least",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/math-functions/least.md",tags:[],version:"dev",frontMatter:{title:"least",language:"zh-CN"},sidebar:"docs",previous:{title:"greatest",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/math-functions/greatest"},next:{title:"random",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/math-functions/random"}},s={},c=[{value:"least",id:"least",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"least"},"least"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"least(col_a, col_b, \u2026, col_n)"),"  "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"column"),"\u652f\u6301\u4ee5\u4e0b\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"TINYINT")," ",(0,r.kt)("inlineCode",{parentName:"p"},"SMALLINT")," ",(0,r.kt)("inlineCode",{parentName:"p"},"INT")," ",(0,r.kt)("inlineCode",{parentName:"p"},"BIGINT")," ",(0,r.kt)("inlineCode",{parentName:"p"},"LARGEINT")," ",(0,r.kt)("inlineCode",{parentName:"p"},"FLOAT")," ",(0,r.kt)("inlineCode",{parentName:"p"},"DOUBLE")," ",(0,r.kt)("inlineCode",{parentName:"p"},"STRING")," ",(0,r.kt)("inlineCode",{parentName:"p"},"DATETIME")," ",(0,r.kt)("inlineCode",{parentName:"p"},"DECIMAL")),(0,r.kt)("p",null,"\u6bd4\u8f83",(0,r.kt)("inlineCode",{parentName:"p"},"n"),"\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"column"),"\u7684\u5927\u5c0f\u8fd4\u56de\u5176\u4e2d\u7684\u6700\u5c0f\u503c.\u82e5",(0,r.kt)("inlineCode",{parentName:"p"},"column"),"\u4e2d\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),"\uff0c\u5219\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> select least(-1, 0, 5, 8);\n+--------------------+\n| least(-1, 0, 5, 8) |\n+--------------------+\n|                 -1 |\n+--------------------+\nmysql> select least(-1, 0, 5, NULL);\n+-----------------------+\n| least(-1, 0, 5, NULL) |\n+-----------------------+\n| NULL                  |\n+-----------------------+\nmysql> select least(6.3, 4.29, 7.6876);\n+--------------------------+\n| least(6.3, 4.29, 7.6876) |\n+--------------------------+\n|                     4.29 |\n+--------------------------+\nmysql> select least(\"2022-02-26 20:02:11\",\"2020-01-23 20:02:11\",\"2020-06-22 20:02:11\");\n+----------------------------------------------------------------------------+\n| least('2022-02-26 20:02:11', '2020-01-23 20:02:11', '2020-06-22 20:02:11') |\n+----------------------------------------------------------------------------+\n| 2020-01-23 20:02:11                                                        |\n+----------------------------------------------------------------------------+\n")),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"LEAST\n")))}u.isMDXComponent=!0}}]);