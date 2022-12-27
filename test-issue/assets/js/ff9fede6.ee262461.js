"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[64562],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"DROP INDEX",language:"en"},i=void 0,l={unversionedId:"sql-reference/sql-statements/Data-Definition/DROP-INDEX",id:"version-0.15/sql-reference/sql-statements/Data-Definition/DROP-INDEX",title:"DROP INDEX",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Data-Definition/DROP-INDEX.md",sourceDirName:"sql-reference/sql-statements/Data-Definition",slug:"/sql-reference/sql-statements/Data-Definition/DROP-INDEX",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Definition/DROP-INDEX",draft:!1,tags:[],version:"0.15",frontMatter:{title:"DROP INDEX",language:"en"},sidebar:"docs",previous:{title:"DROP ENCRYPTKEY",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Definition/DROP-ENCRYPTKEY"},next:{title:"DROP MATERIALIZED VIEW",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Definition/DROP-MATERIALIZED-VIEW"}},s={},c=[{value:"description",id:"description",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"drop-index"},"DROP INDEX"),(0,o.kt)("h2",{id:"description"},"description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"This statement is used to delete index from table\ngrammer:\n    DROP INDEX index_name ON [db_name.]table_name;\n")),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"DROP,INDEX\n")))}f.isMDXComponent=!0}}]);