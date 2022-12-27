"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[72101],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return t?n.createElement(m,l(l({ref:r},p),{},{components:t})):n.createElement(m,l({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},59247:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const o={title:"DECIMAL",language:"zh-CN"},l=void 0,c={unversionedId:"sql-manual/sql-reference/Data-Types/DECIMAL",id:"sql-manual/sql-reference/Data-Types/DECIMAL",title:"DECIMAL",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Types/DECIMAL.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/DECIMAL",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Types/DECIMAL",draft:!1,tags:[],version:"current",frontMatter:{title:"DECIMAL",language:"zh-CN"},sidebar:"docs",previous:{title:"DATETIME",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Types/DATETIME"},next:{title:"DOUBLE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Types/DOUBLE"}},i={},s=[{value:"DECIMAL",id:"decimal",level:2},{value:"description",id:"description",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:s};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"decimal"},"DECIMAL"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DECIMAL(M[,D])\n\u9ad8\u7cbe\u5ea6\u5b9a\u70b9\u6570\uff0cM \u4ee3\u8868\u4e00\u5171\u6709\u591a\u5c11\u4e2a\u6709\u6548\u6570\u5b57(precision)\uff0cD \u4ee3\u8868\u5c0f\u6570\u4f4d\u6709\u591a\u5c11\u6570\u5b57(scale)\uff0c\n\u6709\u6548\u6570\u5b57 M \u7684\u8303\u56f4\u662f [1, 27]\uff0c\u5c0f\u6570\u4f4d\u6570\u5b57\u6570\u91cf D \u7684\u8303\u56f4\u662f [0, 9]\uff0c\u6574\u6570\u4f4d\u6570\u5b57\u6570\u91cf\u7684\u8303\u56f4\u662f [1, 18]\uff0c\n\u53e6\u5916\uff0cM \u5fc5\u987b\u8981\u5927\u4e8e\u7b49\u4e8e D \u7684\u53d6\u503c\u3002\n\n\u9ed8\u8ba4\u503c\u4e3a DECIMAL(9, 0)\u3002\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DECIMAL\n")))}u.isMDXComponent=!0}}]);