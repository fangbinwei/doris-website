"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[83431],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79038:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"bitmap_from_array",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_from_array",id:"version-dev/sql-manual/sql-functions/bitmap-functions/bitmap_from_array",title:"bitmap_from_array",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/bitmap-functions/bitmap_from_array.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_from_array",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_from_array",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap_from_array.md",tags:[],version:"dev",frontMatter:{title:"bitmap_from_array",language:"zh-CN"},sidebar:"docs",previous:{title:"bitmap_to_array",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_to_array"},next:{title:"bitmap_empty",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_empty"}},p={},s=[{value:"bitmap_from_array",id:"bitmap_from_array",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"bitmap_from_array"},"bitmap_from_array"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BITMAP BITMAP_FROM_ARRAY(ARRAY input)")),(0,a.kt)("p",null,"\u5c06\u4e00\u4e2aTINYINT/SMALLINT/INT/BIGINT\u7c7b\u578b\u7684\u6570\u7ec4\u8f6c\u5316\u4e3a\u4e00\u4e2aBITMAP\n\u5f53\u8f93\u5165\u5b57\u6bb5\u4e0d\u5408\u6cd5\u65f6\uff0c\u7ed3\u679c\u8fd4\u56deNULL"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select *, bitmap_to_string(bitmap_from_array(c_array)) from array_test;\n+------+-----------------------+------------------------------------------------+\n| id   | c_array               | bitmap_to_string(bitmap_from_array(`c_array`)) |\n+------+-----------------------+------------------------------------------------+\n|    1 | [NULL]                | NULL                                           |\n|    2 | [1, 2, 3, NULL]       | NULL                                           |\n|    2 | [1, 2, 3, -10]        | NULL                                           |\n|    3 | [1, 2, 3, 4, 5, 6, 7] | 1,2,3,4,5,6,7                                  |\n|    4 | [100, 200, 300, 300]  | 100,200,300                                    |\n+------+-----------------------+------------------------------------------------+\n5 rows in set (0.02 sec)\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"BITMAP_FROM_ARRAY,BITMAP\n")))}m.isMDXComponent=!0}}]);