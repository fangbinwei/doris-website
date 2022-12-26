"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[71626],{3905:(t,n,e)=>{e.d(n,{Zo:()=>l,kt:()=>_});var r=e(67294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var m=r.createContext({}),s=function(t){var n=r.useContext(m),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},l=function(t){var n=s(t.components);return r.createElement(m.Provider,{value:n},t.children)},c="mdxType",b={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(t,n){var e=t.components,a=t.mdxType,i=t.originalType,m=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),c=s(e),u=a,_=c["".concat(m,".").concat(u)]||c[u]||b[u]||i;return e?r.createElement(_,o(o({ref:n},l),{},{components:e})):r.createElement(_,o({ref:n},l))}));function _(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var i=e.length,o=new Array(i);o[0]=u;var p={};for(var m in n)hasOwnProperty.call(n,m)&&(p[m]=n[m]);p.originalType=t,p[c]="string"==typeof t?t:a,o[1]=p;for(var s=2;s<i;s++)o[s]=e[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}u.displayName="MDXCreateElement"},43214:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=e(87462),a=(e(67294),e(3905));const i={title:"bitmap_and",language:"en"},o=void 0,p={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_and",id:"sql-manual/sql-functions/bitmap-functions/bitmap_and",title:"bitmap_and",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/bitmap-functions/bitmap_and.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_and",permalink:"/docs/sql-manual/sql-functions/bitmap-functions/bitmap_and",draft:!1,tags:[],version:"current",frontMatter:{title:"bitmap_and",language:"en"},sidebar:"docs",previous:{title:"bitmap_or",permalink:"/docs/sql-manual/sql-functions/bitmap-functions/bitmap_or"},next:{title:"bitmap_union",permalink:"/docs/sql-manual/sql-functions/bitmap-functions/bitmap_union"}},m={},s=[{value:"bitmap_and",id:"bitmap_and",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],l={toc:s};function c(t){let{components:n,...e}=t;return(0,a.kt)("wrapper",(0,r.Z)({},l,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"bitmap_and"},"bitmap_and"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BITMAP BITMAP_AND(BITMAP lhs, BITMAP rhs, ...)")),(0,a.kt)("p",null,"Compute intersection of two or more input bitmaps, return the new bitmap."),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select bitmap_count(bitmap_and(to_bitmap(1), to_bitmap(2))) cnt;\n+------+\n| cnt  |\n+------+\n|    0 |\n+------+\n\nmysql> select bitmap_count(bitmap_and(to_bitmap(1), to_bitmap(1))) cnt;\n+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n\nMySQL> select bitmap_to_string(bitmap_and(to_bitmap(1), to_bitmap(1)));\n+----------------------------------------------------------+\n| bitmap_to_string(bitmap_and(to_bitmap(1), to_bitmap(1))) |\n+----------------------------------------------------------+\n| 1                                                        |\n+----------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5')));\n+-----------------------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'))) |\n+-----------------------------------------------------------------------------------------------------------------------+\n| 1,2                                                                                                                   |\n+-----------------------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'),bitmap_empty()));\n+---------------------------------------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'), bitmap_empty())) |\n+---------------------------------------------------------------------------------------------------------------------------------------+\n|                                                                                                                                       |\n+---------------------------------------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'),NULL));\n+-----------------------------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'), NULL)) |\n+-----------------------------------------------------------------------------------------------------------------------------+\n| NULL                                                                                                                        |\n+-----------------------------------------------------------------------------------------------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"BITMAP_AND,BITMAP\n")))}c.isMDXComponent=!0}}]);