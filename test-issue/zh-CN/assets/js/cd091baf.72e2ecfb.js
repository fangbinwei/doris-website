"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[79396],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(v,a(a({ref:t},p),{},{components:n})):r.createElement(v,a({ref:t},p))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78419:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={title:"positive",language:"zh-CN"},a=void 0,s={unversionedId:"sql-manual/sql-functions/math-functions/positive",id:"version-dev/sql-manual/sql-functions/math-functions/positive",title:"positive",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/math-functions/positive.md",sourceDirName:"sql-manual/sql-functions/math-functions",slug:"/sql-manual/sql-functions/math-functions/positive",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/math-functions/positive",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/math-functions/positive.md",tags:[],version:"dev",frontMatter:{title:"positive",language:"zh-CN"},sidebar:"docs",previous:{title:"sign",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/math-functions/sign"},next:{title:"negative",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/math-functions/negative"}},l={},c=[{value:"positive",id:"positive",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"positive"},"positive"),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BIGINT positive(BIGINT x)"),"  ",(0,i.kt)("inlineCode",{parentName:"p"},"DOUBLE positive(DOUBLE x)"),"  ",(0,i.kt)("inlineCode",{parentName:"p"},"DECIMAL positive(DECIMAL x)"),"\n\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"p"},"x"),"."),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> SELECT positive(-10);\n+---------------+\n| positive(-10) |\n+---------------+\n|           -10 |\n+---------------+\nmysql> SELECT positive(12);\n+--------------+\n| positive(12) |\n+--------------+\n|           12 |\n+--------------+\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"POSITIVE\n")))}u.isMDXComponent=!0}}]);