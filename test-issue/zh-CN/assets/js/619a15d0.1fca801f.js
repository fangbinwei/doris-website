"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[54492],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=p(n),b=i,d=m["".concat(l,".").concat(b)]||m[b]||u[b]||a;return n?r.createElement(d,o(o({ref:e},c),{},{components:n})):r.createElement(d,o({ref:e},c))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=b;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[m]="string"==typeof t?t:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},53314:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"bitmap_to_string",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_to_string",id:"version-dev/sql-manual/sql-functions/bitmap-functions/bitmap_to_string",title:"bitmap_to_string",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/bitmap-functions/bitmap_to_string.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_to_string",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_to_string",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap_to_string.md",tags:[],version:"dev",frontMatter:{title:"bitmap_to_string",language:"zh-CN"},sidebar:"docs",previous:{title:"bitmap_from_string",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_from_string"},next:{title:"bitmap_to_array",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_to_array"}},l={},p=[{value:"bitmap_to_string",id:"bitmap_to_string",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p};function m(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"bitmap_to_string"},"bitmap_to_string"),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR BITMAP_TO_STRING(BITMAP input)")),(0,i.kt)("p",null,"\u5c06\u4e00\u4e2abitmap\u8f6c\u5316\u6210\u4e00\u4e2a\u9017\u53f7\u5206\u9694\u7684\u5b57\u7b26\u4e32\uff0c\u5b57\u7b26\u4e32\u4e2d\u5305\u542b\u6240\u6709\u8bbe\u7f6e\u7684BIT\u4f4d\u3002\u8f93\u5165\u662fnull\u7684\u8bdd\u4f1a\u8fd4\u56denull\u3002"),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select bitmap_to_string(null);\n+------------------------+\n| bitmap_to_string(NULL) |\n+------------------------+\n| NULL                   |\n+------------------------+\n\nmysql> select bitmap_to_string(bitmap_empty());\n+----------------------------------+\n| bitmap_to_string(bitmap_empty()) |\n+----------------------------------+\n|                                  |\n+----------------------------------+\n\nmysql> select bitmap_to_string(to_bitmap(1));\n+--------------------------------+\n| bitmap_to_string(to_bitmap(1)) |\n+--------------------------------+\n| 1                              |\n+--------------------------------+\n\nmysql> select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2)));\n+---------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2))) |\n+---------------------------------------------------------+\n| 1,2                                                     |\n+---------------------------------------------------------+\n\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"BITMAP_TO_STRING,BITMAP\n")))}m.isMDXComponent=!0}}]);