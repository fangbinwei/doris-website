"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[48268],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),o=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=o(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},_=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=o(t),_=a,f=u["".concat(c,".").concat(_)]||u[_]||d[_]||i;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=_;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}_.displayName="MDXCreateElement"},62359:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=t(87462),a=(t(67294),t(3905));const i={title:"append_trailing_char_if_absent",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-functions/string-functions/append_trailing_char_if_absent",id:"version-dev/sql-manual/sql-functions/string-functions/append_trailing_char_if_absent",title:"append_trailing_char_if_absent",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/string-functions/append_trailing_char_if_absent.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/append_trailing_char_if_absent",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/append_trailing_char_if_absent",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/string-functions/append_trailing_char_if_absent.md",tags:[],version:"dev",frontMatter:{title:"append_trailing_char_if_absent",language:"zh-CN"},sidebar:"docs",previous:{title:"sub_replace",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/sub_replace"},next:{title:"ends_with",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/ends_with"}},c={},o=[{value:"append_trailing_char_if_absent",id:"append_trailing_char_if_absent",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:o};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"append_trailing_char_if_absent"},"append_trailing_char_if_absent"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"VARCHAR append_trailing_char_if_absent(VARCHAR str, VARCHAR trailing_char)")),(0,a.kt)("p",null,"\u5982\u679c str \u5b57\u7b26\u4e32\u975e\u7a7a\u5e76\u4e14\u672b\u5c3e\u4e0d\u5305\u542b trailing_char \u5b57\u7b26\uff0c\u5219\u5c06 trailing_char \u5b57\u7b26\u9644\u52a0\u5230\u672b\u5c3e\u3002\ntrailing_char \u53ea\u80fd\u5305\u542b\u4e00\u4e2a\u5b57\u7b26\uff0c\u5982\u679c\u5305\u542b\u591a\u4e2a\u5b57\u7b26\uff0c\u5c06\u8fd4\u56deNULL"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"MySQL [test]> select append_trailing_char_if_absent('a','c');\n+------------------------------------------+\n| append_trailing_char_if_absent('a', 'c') |\n+------------------------------------------+\n| ac                                       |\n+------------------------------------------+\n1 row in set (0.02 sec)\n\nMySQL [test]> select append_trailing_char_if_absent('ac','c');\n+-------------------------------------------+\n| append_trailing_char_if_absent('ac', 'c') |\n+-------------------------------------------+\n| ac                                        |\n+-------------------------------------------+\n1 row in set (0.00 sec)\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"APPEND_TRAILING_CHAR_IF_ABSENT\n")))}u.isMDXComponent=!0}}]);