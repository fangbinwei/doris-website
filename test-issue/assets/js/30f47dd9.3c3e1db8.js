"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[10710],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||s;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const s={title:"`ST_AsText`,`ST_AsWKT`",language:"en"},a=void 0,i={unversionedId:"sql-reference/sql-functions/spatial-functions/st_astext",id:"version-0.15/sql-reference/sql-functions/spatial-functions/st_astext",title:"`ST_AsText`,`ST_AsWKT`",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-functions/spatial-functions/st_astext.md",sourceDirName:"sql-reference/sql-functions/spatial-functions",slug:"/sql-reference/sql-functions/spatial-functions/st_astext",permalink:"/docs/0.15/sql-reference/sql-functions/spatial-functions/st_astext",draft:!1,tags:[],version:"0.15",frontMatter:{title:"`ST_AsText`,`ST_AsWKT`",language:"en"},sidebar:"docs",previous:{title:"yearweek",permalink:"/docs/0.15/sql-reference/sql-functions/date-time-functions/yearweek"},next:{title:"`ST_Circle`",permalink:"/docs/0.15/sql-reference/sql-functions/spatial-functions/st_circle"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"st_astextst_aswkt"},(0,o.kt)("inlineCode",{parentName:"h1"},"ST_AsText"),",",(0,o.kt)("inlineCode",{parentName:"h1"},"ST_AsWKT")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"VARCHAR ST_AsText (GEOMETRY geo)")),(0,o.kt)("p",null,"Converting a geometric figure into a WKT (Well Known Text) representation"),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> SELECT ST_AsText(ST_Point(24.7, 56.7));\n+---------------------------------+\n| st_astext(st_point(24.7, 56.7)) |\n+---------------------------------+\n| POINT (24.7 56.7)               |\n+---------------------------------+\n")),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("p",null,"ST_ASTEXT,ST_ASWKT,ST,ASTEXT,ASWKT"))}u.isMDXComponent=!0}}]);