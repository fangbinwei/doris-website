"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[75351],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,g=u["".concat(a,".").concat(f)]||u[f]||d[f]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=f;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},75296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const l={title:"not regexp",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-functions/string-functions/regexp/not_regexp",id:"version-dev/sql-manual/sql-functions/string-functions/regexp/not_regexp",title:"not regexp",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/string-functions/regexp/not_regexp.md",sourceDirName:"sql-manual/sql-functions/string-functions/regexp",slug:"/sql-manual/sql-functions/string-functions/regexp/not_regexp",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/regexp/not_regexp",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/string-functions/regexp/not_regexp.md",tags:[],version:"dev",frontMatter:{title:"not regexp",language:"zh-CN"},sidebar:"docs",previous:{title:"regexp_replace_one",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/regexp/regexp_replace_one"},next:{title:"COLLECT_SET",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/collect_set"}},a={},c=[{value:"not regexp",id:"not-regexp",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"not-regexp"},"not regexp"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BOOLEAN not regexp(VARCHAR str, VARCHAR pattern)")),(0,o.kt)("p",null,"\u5bf9\u5b57\u7b26\u4e32 str \u8fdb\u884c\u6b63\u5219\u5339\u914d\uff0c\u5339\u914d\u4e0a\u7684\u5219\u8fd4\u56de false\uff0c\u6ca1\u5339\u914d\u4e0a\u5219\u8fd4\u56de true\u3002pattern \u4e3a\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// \u67e5\u627e k1 \u5b57\u6bb5\u4e2d\u4e0d\u4ee5 'billie' \u4e3a\u5f00\u5934\u7684\u6240\u6709\u6570\u636e\nmysql > select k1 from test where k1 not regexp '^billie';\n+--------------------+\n| k1                 |\n+--------------------+\n| Emmy eillish       |\n+--------------------+\n\n// \u67e5\u627e k1 \u5b57\u6bb5\u4e2d\u4e0d\u4ee5 'ok' \u4e3a\u7ed3\u5c3e\u7684\u6240\u6709\u6570\u636e\uff1a\nmysql > select k1 from test where k1 not regexp 'ok$';\n+------------+\n| k1         |\n+------------+\n| It's true  |\n+------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"REGEXP, NOT, NOT REGEXP\n")))}u.isMDXComponent=!0}}]);