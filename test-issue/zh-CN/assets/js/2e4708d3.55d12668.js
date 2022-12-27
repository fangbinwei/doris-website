"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[78305],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),a=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},f=function(e){var t=a(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=a(r),d=o,y=u["".concat(c,".").concat(d)]||u[d]||p[d]||l;return r?n.createElement(y,s(s({ref:t},f),{},{components:r})):n.createElement(y,s({ref:t},f))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,s=new Array(l);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var a=2;a<l;a++)s[a]=r[a];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73984:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var n=r(87462),o=(r(67294),r(3905));const l={title:"strleft",language:"zh-CN"},s=void 0,i={unversionedId:"sql-reference/sql-functions/string-functions/strleft",id:"version-0.15/sql-reference/sql-functions/string-functions/strleft",title:"strleft",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-functions/string-functions/strleft.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/strleft",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/string-functions/strleft",draft:!1,tags:[],version:"0.15",frontMatter:{title:"strleft",language:"zh-CN"},sidebar:"docs",previous:{title:"starts_with",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/string-functions/starts_with"},next:{title:"strright",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/string-functions/strright"}},c={},a=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],f={toc:a};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"strleft"},"strleft"),(0,o.kt)("h2",{id:"description"},"description"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"VARCHAR strleft(VARCHAR str)")),(0,o.kt)("p",null,"\u5b83\u8fd4\u56de\u5177\u6709\u6307\u5b9a\u957f\u5ea6\u7684\u5b57\u7b26\u4e32\u7684\u5de6\u8fb9\u90e8\u5206,\u957f\u5ea6\u7684\u5355\u4f4d\u4e3autf8\u5b57\u7b26"),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select strleft(\"Hello doris\",5);\n+------------------------+\n| strleft('Hello doris', 5) |\n+------------------------+\n| Hello                  |\n+------------------------+\n")),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("p",null,"STRLEFT"))}u.isMDXComponent=!0}}]);