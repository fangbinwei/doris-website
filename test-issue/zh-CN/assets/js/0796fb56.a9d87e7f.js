"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[63296],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=u(t),d=l,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[f]="string"==typeof e?e:l,o[1]=a;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},97148:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=t(87462),l=(t(67294),t(3905));const i={title:"if",language:"zh-CN"},o=void 0,a={unversionedId:"sql-manual/sql-functions/conditional-functions/if",id:"sql-manual/sql-functions/conditional-functions/if",title:"if",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/conditional-functions/if.md",sourceDirName:"sql-manual/sql-functions/conditional-functions",slug:"/sql-manual/sql-functions/conditional-functions/if",permalink:"/zh-CN/docs/sql-manual/sql-functions/conditional-functions/if",draft:!1,tags:[],version:"current",frontMatter:{title:"if",language:"zh-CN"},sidebar:"docs",previous:{title:"coalesce",permalink:"/zh-CN/docs/sql-manual/sql-functions/conditional-functions/coalesce"},next:{title:"ifnull",permalink:"/zh-CN/docs/sql-manual/sql-functions/conditional-functions/ifnull"}},c={},u=[{value:"if",id:"if",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u};function f(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"if"},"if"),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"if(boolean condition, type valueTrue, type valueFalseOrNull)")),(0,l.kt)("p",null,"\u5982\u679c\u8868\u8fbe\u5f0f condition \u6210\u7acb\uff0c\u8fd4\u56de\u7ed3\u679c valueTrue\uff1b\u5426\u5219\uff0c\u8fd4\u56de\u7ed3\u679c valueFalseOrNull\n\u8fd4\u56de\u7c7b\u578b\uff1a valueTrue \u8868\u8fbe\u5f0f\u7ed3\u679c\u7684\u7c7b\u578b"),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'mysql> select  user_id, if(user_id = 1, "true", "false") test_if from test;\n+---------+---------+\n| user_id | test_if |\n+---------+---------+\n| 1       | true    |\n| 2       | false   |\n+---------+---------+\n')),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("p",null,"IF"))}f.isMDXComponent=!0}}]);