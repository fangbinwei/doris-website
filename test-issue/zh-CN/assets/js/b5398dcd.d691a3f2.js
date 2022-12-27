"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[7373],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"unix_timestamp",language:"zh-CN"},o=void 0,s={unversionedId:"sql-reference/sql-functions/date-time-functions/unix_timestamp",id:"version-0.15/sql-reference/sql-functions/date-time-functions/unix_timestamp",title:"unix_timestamp",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-functions/date-time-functions/unix_timestamp.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/unix_timestamp",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/date-time-functions/unix_timestamp",draft:!1,tags:[],version:"0.15",frontMatter:{title:"unix_timestamp",language:"zh-CN"},sidebar:"docs",previous:{title:"to_days",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/date-time-functions/to_days"},next:{title:"utc_timestamp",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/date-time-functions/utc_timestamp"}},l={},c=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"unix_timestamp"},"unix_timestamp"),(0,i.kt)("h2",{id:"description"},"description"),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"INT UNIX_TIMESTAMP(), UNIX_TIMESTAMP(DATETIME date), UNIX_TIMESTAMP(DATETIME date, STRING fmt),")),(0,i.kt)("p",null,"\u5c06 Date \u6216\u8005 Datetime \u7c7b\u578b\u8f6c\u5316\u4e3a unix \u65f6\u95f4\u6233\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u53c2\u6570\uff0c\u5219\u662f\u5c06\u5f53\u524d\u7684\u65f6\u95f4\u8f6c\u5316\u4e3a\u65f6\u95f4\u6233\u3002"),(0,i.kt)("p",null,"\u53c2\u6570\u9700\u8981\u662f Date \u6216\u8005 Datetime \u7c7b\u578b\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u5728 1970-01-01 00:00:00 \u4e4b\u524d\u6216 2038-01-19 03:14:07 \u4e4b\u540e\u7684\u65f6\u95f4\uff0c\u8be5\u51fd\u6570\u5c06\u8fd4\u56de 0\u3002"),(0,i.kt)("p",null,"Format \u7684\u683c\u5f0f\u8bf7\u53c2\u9605 ",(0,i.kt)("inlineCode",{parentName:"p"},"date_format")," \u51fd\u6570\u7684\u683c\u5f0f\u8bf4\u660e\u3002"),(0,i.kt)("p",null,"\u8be5\u51fd\u6570\u53d7\u65f6\u533a\u5f71\u54cd\u3002"),(0,i.kt)("h2",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select unix_timestamp();\n+------------------+\n| unix_timestamp() |\n+------------------+\n|       1558589570 |\n+------------------+\n\nmysql> select unix_timestamp('2007-11-30 10:30:19');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30:19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nmysql> select unix_timestamp('2007-11-30 10:30-19', '%Y-%m-%d %H:%i-%s');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30-19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nmysql> select unix_timestamp('2007-11-30 10:30%3A19', '%Y-%m-%d %H:%i%%3A%s');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30%3A19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nmysql> select unix_timestamp('1969-01-01 00:00:00');\n+---------------------------------------+\n| unix_timestamp('1969-01-01 00:00:00') |\n+---------------------------------------+\n|                                     0 |\n+---------------------------------------+\n")),(0,i.kt)("h2",{id:"keyword"},"keyword"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"UNIX_TIMESTAMP,UNIX,TIMESTAMP\n")))}p.isMDXComponent=!0}}]);