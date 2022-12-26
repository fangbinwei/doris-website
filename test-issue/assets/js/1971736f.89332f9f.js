"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[85514],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"bitmap_contains",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_contains",id:"version-dev/sql-manual/sql-functions/bitmap-functions/bitmap_contains",title:"bitmap_contains",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/bitmap-functions/bitmap_contains.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_contains",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_contains",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/bitmap-functions/bitmap_contains.md",tags:[],version:"dev",frontMatter:{title:"bitmap_contains",language:"en"},sidebar:"docs",previous:{title:"bitmap_or_count",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_or_count"},next:{title:"bitmap_has_all",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_has_all"}},c={},s=[{value:"bitmap_contains",id:"bitmap_contains",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"bitmap_contains"},"bitmap_contains"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BOOLEAN BITMAP_CONTAINS(BITMAP bitmap, BIGINT input)")),(0,r.kt)("p",null,"Calculates whether the input value is in the Bitmap column and returns a Boolean value."),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> select bitmap_contains(to_bitmap(1),2) cnt;\n+------+\n| cnt  |\n+------+\n|    0 |\n+------+\n\nmysql> select bitmap_contains(to_bitmap(1),1) cnt;\n+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n")),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"BITMAP_CONTAINS,BITMAP\n")))}u.isMDXComponent=!0}}]);