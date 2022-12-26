"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[8311],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},95125:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={title:"mod",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/math-functions/mod",id:"version-dev/sql-manual/sql-functions/math-functions/mod",title:"mod",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/math-functions/mod.md",sourceDirName:"sql-manual/sql-functions/math-functions",slug:"/sql-manual/sql-functions/math-functions/mod",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/math-functions/mod",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/math-functions/mod.md",tags:[],version:"dev",frontMatter:{title:"mod",language:"zh-CN"},sidebar:"docs",previous:{title:"random",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/math-functions/random"},next:{title:"AES",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/aes"}},c={},s=[{value:"mod",id:"mod",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:s};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"mod"},"mod"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mod(col_a, col_b)"),"  "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"column"),"\u652f\u6301\u4ee5\u4e0b\u7c7b\u578b\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"TINYINT")," ",(0,o.kt)("inlineCode",{parentName:"p"},"SMALLINT")," ",(0,o.kt)("inlineCode",{parentName:"p"},"INT")," ",(0,o.kt)("inlineCode",{parentName:"p"},"BIGINT")," ",(0,o.kt)("inlineCode",{parentName:"p"},"LARGEINT")," ",(0,o.kt)("inlineCode",{parentName:"p"},"FLOAT")," ",(0,o.kt)("inlineCode",{parentName:"p"},"DOUBLE")," ",(0,o.kt)("inlineCode",{parentName:"p"},"DECIMAL")),(0,o.kt)("p",null,"\u6c42a / b\u7684\u4f59\u6570\u3002\u6d6e\u70b9\u7c7b\u578b\u8bf7\u4f7f\u7528fmod\u51fd\u6570\u3002"),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select mod(10, 3);\n+------------+\n| mod(10, 3) |\n+------------+\n|          1 |\n+------------+\n\nmysql> select fmod(10.1, 3.2);\n+-----------------+\n| fmod(10.1, 3.2) |\n+-----------------+\n|      0.50000024 |\n+-----------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MOD\uff0cFMOD\n")))}d.isMDXComponent=!0}}]);