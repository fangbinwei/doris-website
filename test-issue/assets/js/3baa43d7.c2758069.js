"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[95145],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var o=r.createContext({}),u=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=u(n),b=i,f=c["".concat(o,".").concat(b)]||c[b]||m[b]||a;return n?r.createElement(f,l(l({ref:e},p),{},{components:n})):r.createElement(f,l({ref:e},p))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,l=new Array(a);l[0]=b;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[c]="string"==typeof t?t:i,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},74135:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={title:"bitmap_subset_limit",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_subset_limit",id:"sql-manual/sql-functions/bitmap-functions/bitmap_subset_limit",title:"bitmap_subset_limit",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/bitmap-functions/bitmap_subset_limit.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_subset_limit",permalink:"/docs/sql-manual/sql-functions/bitmap-functions/bitmap_subset_limit",draft:!1,tags:[],version:"current",frontMatter:{title:"bitmap_subset_limit",language:"en"},sidebar:"docs",previous:{title:"bitmap_and_not",permalink:"/docs/sql-manual/sql-functions/bitmap-functions/bitmap_and_not"},next:{title:"bitmap_subset_in_range",permalink:"/docs/sql-manual/sql-functions/bitmap-functions/bitmap_subset_in_range"}},o={},u=[{value:"bitmap_subset_limit",id:"bitmap_subset_limit",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:u};function c(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"bitmap_subset_limit"},"bitmap_subset_limit"),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BITMAP BITMAP_SUBSET_LIMIT(BITMAP src, BIGINT range_start, BIGINT cardinality_limit)")),(0,i.kt)("p",null,"Create subset of the BITMAP, begin with range from range_start, limit by cardinality_limit\nrange_start: start value for the range\ncardinality_limit: subset upper limit"),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select bitmap_to_string(bitmap_subset_limit(bitmap_from_string('1,2,3,4,5'), 0, 3)) value;\n+-----------+\n| value     |\n+-----------+\n| 1,2,3 |\n+-----------+\n\nmysql> select bitmap_to_string(bitmap_subset_limit(bitmap_from_string('1,2,3,4,5'), 4, 3)) value;\n+-------+\n| value |\n+-------+\n| 4,5     |\n+-------+\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"BITMAP_SUBSET_LIMIT,BITMAP_SUBSET,BITMAP\n")))}c.isMDXComponent=!0}}]);