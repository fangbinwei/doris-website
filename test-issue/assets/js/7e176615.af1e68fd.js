"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[35564],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},33063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const l={title:"not regexp",language:"en"},i=void 0,a={unversionedId:"sql-manual/sql-functions/string-functions/regexp/not_regexp",id:"version-dev/sql-manual/sql-functions/string-functions/regexp/not_regexp",title:"not regexp",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/string-functions/regexp/not_regexp.md",sourceDirName:"sql-manual/sql-functions/string-functions/regexp",slug:"/sql-manual/sql-functions/string-functions/regexp/not_regexp",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/regexp/not_regexp",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/string-functions/regexp/not_regexp.md",tags:[],version:"dev",frontMatter:{title:"not regexp",language:"en"},sidebar:"docs",previous:{title:"regexp_replace_one",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/regexp/regexp_replace_one"},next:{title:"COLLECT_SET",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/collect_set"}},s={},c=[{value:"not regexp",id:"not-regexp",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"not-regexp"},"not regexp"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BOOLEAN not regexp(VARCHAR str, VARCHAR pattern)")),(0,o.kt)("p",null,"Perform regular matching on the string str, return false if it matches, and return true if it doesn't match. pattern is a regular expression."),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// Find all data in the k1 field that does not start with 'billie'\nmysql> select k1 from test where k1 not regexp '^billie';\n+--------------------+\n| k1                 |\n+--------------------+\n| Emmy eillish       |\n+--------------------+\n\n// Find all the data in the k1 field that does not end with 'ok':\nmysql> select k1 from test where k1 not regexp 'ok$';\n+------------+\n| k1         |\n+------------+\n| It's true  |\n+------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"REGEXP, NOT, NOT REGEXP\n")))}u.isMDXComponent=!0}}]);