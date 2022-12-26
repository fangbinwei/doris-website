"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[71076],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,o(o({ref:e},u),{},{components:n})):r.createElement(f,o({ref:e},u))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[p]="string"==typeof t?t:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85545:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"MIGRATE SINGLE TABLET TO A PARTICULAR DISK",language:"en"},o=void 0,s={unversionedId:"admin-manual/http-actions/tablet-migration-action",id:"admin-manual/http-actions/tablet-migration-action",title:"MIGRATE SINGLE TABLET TO A PARTICULAR DISK",description:"\x3c!--",source:"@site/docs/admin-manual/http-actions/tablet-migration-action.md",sourceDirName:"admin-manual/http-actions",slug:"/admin-manual/http-actions/tablet-migration-action",permalink:"/docs/admin-manual/http-actions/tablet-migration-action",draft:!1,tags:[],version:"current",frontMatter:{title:"MIGRATE SINGLE TABLET TO A PARTICULAR DISK",language:"en"},sidebar:"docs",previous:{title:"SHOW DATA",permalink:"/docs/admin-manual/http-actions/show-data-action"},next:{title:"GET TABLETS DISTRIBUTION BETWEEN DIFFERENT DISKS",permalink:"/docs/admin-manual/http-actions/tablets_distribution"}},l={},c=[],u={toc:c};function p(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migrate-single-tablet-to-a-particular-disk"},"MIGRATE SINGLE TABLET TO A PARTICULAR DISK"),(0,a.kt)("p",null,"Migrate single tablet to a particular disk."),(0,a.kt)("p",null,"Submit the migration task:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -X GET http://be_host:webserver_port/api/tablet_migration?goal=run&tablet_id=xxx&schema_hash=xxx&disk=xxx\n")),(0,a.kt)("p",null,"The return is the submission result of the migration task:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    {\n        status: "Success",\n        msg: "migration task is successfully submitted."\n    }\n')),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    {\n        status: "Fail",\n        msg: "Migration task submission failed"\n    }\n')),(0,a.kt)("p",null,"Show the status of migration task:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -X GET http://be_host:webserver_port/api/tablet_migration?goal=status&tablet_id=xxx&schema_hash=xxx\n")),(0,a.kt)("p",null,"The return is the execution result of the migration task:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    {\n        status: "Success",\n        msg: "migration task is running.",\n        dest_disk: "xxxxxx"\n    }\n')),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    {\n        status: "Success",\n        msg: "migration task has finished successfully.",\n        dest_disk: "xxxxxx"\n    }\n')),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    {\n        status: "Success",\n        msg: "migration task failed.",\n        dest_disk: "xxxxxx"\n    }\n')))}p.isMDXComponent=!0}}]);