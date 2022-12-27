"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[9335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=i(n),m=s,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,c=new Array(a);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:s,c[1]=o;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var r=n(87462),s=(n(67294),n(3905));const a={title:"SM3SUM",language:"en"},c=void 0,o={unversionedId:"sql-manual/sql-functions/encrypt-digest-functions/sm3sum",id:"version-dev/sql-manual/sql-functions/encrypt-digest-functions/sm3sum",title:"SM3SUM",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/encrypt-digest-functions/sm3sum.md",sourceDirName:"sql-manual/sql-functions/encrypt-digest-functions",slug:"/sql-manual/sql-functions/encrypt-digest-functions/sm3sum",permalink:"/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/sm3sum",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/encrypt-digest-functions/sm3sum.md",tags:[],version:"dev",frontMatter:{title:"SM3SUM",language:"en"},sidebar:"docs",previous:{title:"SM3",permalink:"/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/sm3"},next:{title:"explode_json_array",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/explode-json-array"}},l={},i=[{value:"SM3SUM",id:"sm3sum",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:i};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"sm3sum"},"SM3SUM"),(0,s.kt)("h3",{id:"description"},"description"),(0,s.kt)("p",null,"Calculates an SM3 128-bit checksum for the strings"),(0,s.kt)("h4",{id:"syntax"},"Syntax"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"SM3SUM(str[,str])")),(0,s.kt)("h3",{id:"example"},"example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"MySQL > select sm3(\"abcd\");\n+------------------------------------------------------------------+\n| sm3('abcd')                                                      |\n+------------------------------------------------------------------+\n| 82ec580fe6d36ae4f81cae3c73f4a5b3b5a09c943172dc9053c69fd8e18dca1e |\n+------------------------------------------------------------------+\n1 row in set (0.009 sec)\n\nMySQL > select sm3sum(\"ab\",\"cd\");\n+------------------------------------------------------------------+\n| sm3sum('ab', 'cd')                                               |\n+------------------------------------------------------------------+\n| 82ec580fe6d36ae4f81cae3c73f4a5b3b5a09c943172dc9053c69fd8e18dca1e |\n+------------------------------------------------------------------+\n1 row in set (0.009 sec)\n\n")),(0,s.kt)("h3",{id:"keywords"},"keywords"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"SM3SUM\n")))}d.isMDXComponent=!0}}]);