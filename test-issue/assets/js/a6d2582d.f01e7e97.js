"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[11576],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"truncate",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-functions/math-functions/truncate",id:"sql-manual/sql-functions/math-functions/truncate",title:"truncate",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/math-functions/truncate.md",sourceDirName:"sql-manual/sql-functions/math-functions",slug:"/sql-manual/sql-functions/math-functions/truncate",permalink:"/docs/sql-manual/sql-functions/math-functions/truncate",draft:!1,tags:[],version:"current",frontMatter:{title:"truncate",language:"en"},sidebar:"docs",previous:{title:"round",permalink:"/docs/sql-manual/sql-functions/math-functions/round"},next:{title:"abs",permalink:"/docs/sql-manual/sql-functions/math-functions/abs"}},c={},u=[{value:"truncate",id:"truncate",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"truncate"},"truncate"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DOUBLE truncate(DOUBLE x, INT d)"),"\nNumerically truncate ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," according to the number of decimal places ",(0,a.kt)("inlineCode",{parentName:"p"},"d"),"."),(0,a.kt)("p",null,"The rules are as follows:\nWhen ",(0,a.kt)("inlineCode",{parentName:"p"},"d > 0"),": keep ",(0,a.kt)("inlineCode",{parentName:"p"},"d")," decimal places of ",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\nWhen ",(0,a.kt)("inlineCode",{parentName:"p"},"d = 0"),": remove the fractional part of ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," and keep only the integer part\nWhen ",(0,a.kt)("inlineCode",{parentName:"p"},"d < 0"),": Remove the fractional part of ",(0,a.kt)("inlineCode",{parentName:"p"},"x"),", and replace the integer part with the number ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," according to the number of digits specified by ",(0,a.kt)("inlineCode",{parentName:"p"},"d")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select truncate(124.3867, 2);\n+-----------------------+\n| truncate(124.3867, 2) |\n+-----------------------+\n|                124.38 |\n+-----------------------+\nmysql> select truncate(124.3867, 0);\n+-----------------------+\n| truncate(124.3867, 0) |\n+-----------------------+\n|                   124 |\n+-----------------------+\nmysql> select truncate(-124.3867, -2);\n+-------------------------+\n| truncate(-124.3867, -2) |\n+-------------------------+\n|                    -100 |\n+-------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"TRUNCATE\n")))}s.isMDXComponent=!0}}]);