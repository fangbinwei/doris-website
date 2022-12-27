"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[70632],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>A});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,A=m["".concat(o,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(A,l(l({ref:t},p),{},{components:r})):n.createElement(A,l({ref:t},p))}));function A(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},19923:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"ADMIN-CANCEL-REPAIR",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REPAIR",id:"version-dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REPAIR",title:"ADMIN-CANCEL-REPAIR",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REPAIR.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REPAIR",permalink:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REPAIR",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REPAIR.md",tags:[],version:"dev",frontMatter:{title:"ADMIN-CANCEL-REPAIR",language:"en"},sidebar:"docs",previous:{title:"ADMIN-REPAIR-TABLE",permalink:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REPAIR-TABLE"},next:{title:"SET-VARIABLE",permalink:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/SET-VARIABLE"}},o={},c=[{value:"ADMIN-CANCEL-REPAIR",id:"admin-cancel-repair",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"admin-cancel-repair"},"ADMIN-CANCEL-REPAIR"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"ADMIN CANCEL REPAIR"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"This statement is used to cancel the repair of the specified table or partition with high priority"),(0,a.kt)("p",null,"grammar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ADMIN CANCEL REPAIR TABLE table_name[ PARTITION (p1,...)];\n")),(0,a.kt)("p",null,"illustrate:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"This statement simply means that the system will no longer repair shard copies of the specified table or partition with high priority. Replicas are still repaired with the default schedule.")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Cancel high priority repair"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"}," ADMIN CANCEL REPAIR TABLE tbl PARTITION(p1);\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ADMIN, CANCEL, REPAIR\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);