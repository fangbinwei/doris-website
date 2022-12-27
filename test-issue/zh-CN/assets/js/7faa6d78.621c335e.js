"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[51358],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,d=u["".concat(i,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},69874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"ST_GeometryFromText,ST_GeomFromText",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-functions/spatial-functions/st_geometryfromtext",id:"version-dev/sql-manual/sql-functions/spatial-functions/st_geometryfromtext",title:"ST_GeometryFromText,ST_GeomFromText",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/spatial-functions/st_geometryfromtext.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st_geometryfromtext",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/spatial-functions/st_geometryfromtext",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/spatial-functions/st_geometryfromtext.md",tags:[],version:"dev",frontMatter:{title:"ST_GeometryFromText,ST_GeomFromText",language:"zh-CN"},sidebar:"docs",previous:{title:"ST_Contains",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/spatial-functions/st_contains"},next:{title:"ST_LineFromText,ST_LineStringFromText",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/spatial-functions/st_linefromtext"}},i={},c=[{value:"ST_GeometryFromText,ST_GeomFromText",id:"st_geometryfromtextst_geomfromtext",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],m={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"st_geometryfromtextst_geomfromtext"},"ST_GeometryFromText,ST_GeomFromText"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GEOMETRY ST_GeometryFromText(VARCHAR wkt)")),(0,o.kt)("p",null,"\u5c06\u4e00\u4e2aWKT\uff08Well Known Text\uff09\u8f6c\u5316\u4e3a\u5bf9\u5e94\u7684\u5185\u5b58\u7684\u51e0\u4f55\u5f62\u5f0f"),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> SELECT ST_AsText(ST_GeometryFromText(\"LINESTRING (1 1, 2 2)\"));\n+---------------------------------------------------------+\n| st_astext(st_geometryfromtext('LINESTRING (1 1, 2 2)')) |\n+---------------------------------------------------------+\n| LINESTRING (1 1, 2 2)                                   |\n+---------------------------------------------------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("p",null,"ST_GEOMETRYFROMTEXT,ST_GEOMFROMTEXT,ST,GEOMETRYFROMTEXT,GEOMFROMTEXT"))}u.isMDXComponent=!0}}]);