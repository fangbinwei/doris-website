"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[52801],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||l;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"last_day",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-functions/date-time-functions/last_day",id:"version-dev/sql-manual/sql-functions/date-time-functions/last_day",title:"last_day",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/date-time-functions/last_day.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/last_day",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/last_day",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/date-time-functions/last_day.md",tags:[],version:"dev",frontMatter:{title:"last_day",language:"zh-CN"},sidebar:"docs",previous:{title:"from_days",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/from_days"},next:{title:"to_monday",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/to_monday"}},i={},c=[{value:"last_day",id:"last_day",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"last_day"},"last_day"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DATE last_day(DATETIME date)")),(0,a.kt)("p",null,"\u8fd4\u56de\u8f93\u5165\u65e5\u671f\u4e2d\u6708\u4efd\u7684\u6700\u540e\u4e00\u5929\uff1b\u6240\u4ee5\u8fd4\u56de\u7684\u65e5\u671f\u4e2d\uff0c\u5e74\u548c\u6708\u4e0d\u53d8\uff0c\u65e5\u53ef\u80fd\u662f\u5982\u4e0b\u60c5\u51b5\uff1a\n'28'(\u975e\u95f0\u5e74\u7684\u4e8c\u6708\u4efd),\n'29'(\u95f0\u5e74\u7684\u4e8c\u6708\u4efd),\n'30'(\u56db\u6708\uff0c\u516d\u6708\uff0c\u4e5d\u6708\uff0c\u5341\u4e00\u6708),\n'31'(\u4e00\u6708\uff0c\u4e09\u6708\uff0c\u4e94\u6708\uff0c\u4e03\u6708\uff0c\u516b\u6708\uff0c\u5341\u6708\uff0c\u5341\u4e8c\u6708)"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql > select last_day('2000-02-03');\n+-------------------+\n| last_day('2000-02-03 00:00:00') |\n+-------------------+\n| 2000-02-29        |\n+-------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"LAST_DAY,DAYS\n")))}u.isMDXComponent=!0}}]);