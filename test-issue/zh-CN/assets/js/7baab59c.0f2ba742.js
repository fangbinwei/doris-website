"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[8732],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13157:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"RESTORE TABLET",language:"en"},l=void 0,s={unversionedId:"sql-reference/sql-statements/Data-Manipulation/RESTORE-TABLET",id:"version-0.15/sql-reference/sql-statements/Data-Manipulation/RESTORE-TABLET",title:"RESTORE TABLET",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Data-Manipulation/RESTORE-TABLET.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/RESTORE-TABLET",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/RESTORE-TABLET",draft:!1,tags:[],version:"0.15",frontMatter:{title:"RESTORE TABLET",language:"en"},sidebar:"docs",previous:{title:"PAUSE SYNC JOB",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/PAUSE-SYNC-JOB"},next:{title:"RESUME ROUTINE LOAD",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/RESUME-ROUTINE-LOAD"}},i={},c=[{value:"keyword",id:"keyword",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"restore-tablet"},"RESTORE TABLET"),(0,a.kt)("p",null,"Description"),(0,a.kt)("p",null,"This function is used to recover the tablet data that was deleted by mistake in the trash directory."),(0,a.kt)("p",null,"Note: For the time being, this function only provides an HTTP interface in be service. If it is to be used,\nA restore tablet API request needs to be sent to the HTTP port of the be machine for data recovery. The API format is as follows:\nMethod: Postal\nURI: http://be_host:be_http_port/api/restore_tablet?tablet_id=xxx&schema_hash=xxx"),(0,a.kt)("p",null,"'35;'35; example"),(0,a.kt)("p",null,'Curl -X POST "http://hostname:8088 /api /restore" tablet? Tablet id =123456 &schema hash =1111111 "'),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("p",null,"RESTORE,TABLET,RESTORE,TABLET"))}u.isMDXComponent=!0}}]);