"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[44167],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>y});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),a=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=a(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=a(r),d=o,y=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return r?t.createElement(y,l(l({ref:n},u),{},{components:r})):t.createElement(y,l({ref:n},u))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var a=2;a<i;a++)l[a]=r[a];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56375:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var t=r(87462),o=(r(67294),r(3905));const i={title:"REVERSE",language:"zh-CN"},l=void 0,s={unversionedId:"sql-reference/sql-functions/string-functions/reverse",id:"version-0.15/sql-reference/sql-functions/string-functions/reverse",title:"REVERSE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-functions/string-functions/reverse.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/reverse",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/string-functions/reverse",draft:!1,tags:[],version:"0.15",frontMatter:{title:"REVERSE",language:"zh-CN"},sidebar:"docs",previous:{title:"replace",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/string-functions/replace"},next:{title:"right",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/string-functions/right"}},c={},a=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],u={toc:a};function p(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reverse"},"reverse"),(0,o.kt)("h2",{id:"description"},"description"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"VARCHAR reverse(VARCHAR str)")),(0,o.kt)("p",null,"\u5c06\u5b57\u7b26\u4e32\u53cd\u8f6c\uff0c\u8fd4\u56de\u7684\u5b57\u7b26\u4e32\u7684\u987a\u5e8f\u548c\u6e90\u5b57\u7b26\u4e32\u7684\u987a\u5e8f\u76f8\u53cd\u3002"),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> SELECT REVERSE('hello');\n+------------------+\n| REVERSE('hello') |\n+------------------+\n| olleh            |\n+------------------+\n1 row in set (0.00 sec)\n\nmysql> SELECT REVERSE('\u4f60\u597d');\n+------------------+\n| REVERSE('\u4f60\u597d')   |\n+------------------+\n| \u597d\u4f60              |\n+------------------+\n1 row in set (0.00 sec)\n")),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("p",null,"REVERSE"))}p.isMDXComponent=!0}}]);