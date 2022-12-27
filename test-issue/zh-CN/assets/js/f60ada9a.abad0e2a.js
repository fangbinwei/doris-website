"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[34516],{3905:(t,n,e)=>{e.d(n,{Zo:()=>m,kt:()=>b});var r=e(67294);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var l=r.createContext({}),p=function(t){var n=r.useContext(l),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},m=function(t){var n=p(t.components);return r.createElement(l.Provider,{value:n},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(t,n){var e=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),c=p(e),f=i,b=c["".concat(l,".").concat(f)]||c[f]||u[f]||a;return e?r.createElement(b,o(o({ref:n},m),{},{components:e})):r.createElement(b,o({ref:n},m))}));function b(t,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof t||i){var a=e.length,o=new Array(a);o[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=t,s[c]="string"==typeof t?t:i,o[1]=s;for(var p=2;p<a;p++)o[p]=e[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}f.displayName="MDXCreateElement"},16331:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=e(87462),i=(e(67294),e(3905));const a={title:"bitmap_from_string",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_from_string",id:"sql-manual/sql-functions/bitmap-functions/bitmap_from_string",title:"bitmap_from_string",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/bitmap-functions/bitmap_from_string.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_from_string",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap_from_string",draft:!1,tags:[],version:"current",frontMatter:{title:"bitmap_from_string",language:"zh-CN"},sidebar:"docs",previous:{title:"bitmap_hash",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap_hash"},next:{title:"bitmap_to_string",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap_to_string"}},l={},p=[{value:"bitmap_from_string",id:"bitmap_from_string",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],m={toc:p};function c(t){let{components:n,...e}=t;return(0,i.kt)("wrapper",(0,r.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"bitmap_from_string"},"bitmap_from_string"),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BITMAP BITMAP_FROM_STRING(VARCHAR input)")),(0,i.kt)("p",null,'\u5c06\u4e00\u4e2a\u5b57\u7b26\u4e32\u8f6c\u5316\u4e3a\u4e00\u4e2aBITMAP\uff0c\u5b57\u7b26\u4e32\u662f\u7531\u9017\u53f7\u5206\u9694\u7684\u4e00\u7ec4unsigned bigint\u6570\u5b57\u7ec4\u6210.(\u6570\u5b57\u53d6\u503c\u5728:0 ~ 18446744073709551615)\n\u6bd4\u5982"0, 1, 2"\u5b57\u7b26\u4e32\u4f1a\u8f6c\u5316\u4e3a\u4e00\u4e2aBitmap\uff0c\u5176\u4e2d\u7684\u7b2c0, 1, 2\u4f4d\u88ab\u8bbe\u7f6e.\n\u5f53\u8f93\u5165\u5b57\u6bb5\u4e0d\u5408\u6cd5\u65f6\uff0c\u8fd4\u56deNULL'),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select bitmap_to_string(bitmap_empty());\n+----------------------------------+\n| bitmap_to_string(bitmap_empty()) |\n+----------------------------------+\n|                                  |\n+----------------------------------+\n\nmysql> select bitmap_to_string(bitmap_from_string(\"0, 1, 2\"));\n+-------------------------------------------------+\n| bitmap_to_string(bitmap_from_string('0, 1, 2')) |\n+-------------------------------------------------+\n| 0,1,2                                           |\n+-------------------------------------------------+\n\nmysql> select bitmap_from_string(\"-1, 0, 1, 2\");\n+-----------------------------------+\n| bitmap_from_string('-1, 0, 1, 2') |\n+-----------------------------------+\n| NULL                              |\n+-----------------------------------+\n\n\nmysql> select bitmap_to_string(bitmap_from_string(\"0, 1, 18446744073709551615\"));\n+--------------------------------------------------------------------+\n| bitmap_to_string(bitmap_from_string('0, 1, 18446744073709551615')) |\n+--------------------------------------------------------------------+\n| 0,1,18446744073709551615                                           |\n+--------------------------------------------------------------------+\n\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"BITMAP_FROM_STRING,BITMAP\n")))}c.isMDXComponent=!0}}]);