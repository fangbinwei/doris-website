"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[8805],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(d,".").concat(f)]||u[f]||p[f]||l;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},30740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"date_add",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/date-time-functions/date_add",id:"sql-manual/sql-functions/date-time-functions/date_add",title:"date_add",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/date-time-functions/date_add.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/date_add",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/date_add",draft:!1,tags:[],version:"current",frontMatter:{title:"date_add",language:"zh-CN"},sidebar:"docs",previous:{title:"timestampdiff",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/timestampdiff"},next:{title:"date_sub",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/date_sub"}},d={},c=[{value:"date_add",id:"date_add",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"date_add"},"date_add"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"INT DATE_ADD(DATETIME date,INTERVAL expr type)")),(0,a.kt)("p",null,"\u5411\u65e5\u671f\u6dfb\u52a0\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u3002"),(0,a.kt)("p",null,"date \u53c2\u6570\u662f\u5408\u6cd5\u7684\u65e5\u671f\u8868\u8fbe\u5f0f\u3002"),(0,a.kt)("p",null,"expr \u53c2\u6570\u662f\u60a8\u5e0c\u671b\u6dfb\u52a0\u7684\u65f6\u95f4\u95f4\u9694\u3002"),(0,a.kt)("p",null,"type \u53c2\u6570\u53ef\u4ee5\u662f\u4e0b\u5217\u503c\uff1aYEAR, MONTH, DAY, HOUR, MINUTE, SECOND"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select date_add('2010-11-30 23:59:59', INTERVAL 2 DAY);\n+-------------------------------------------------+\n| date_add('2010-11-30 23:59:59', INTERVAL 2 DAY) |\n+-------------------------------------------------+\n| 2010-12-02 23:59:59                             |\n+-------------------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DATE_ADD,DATE,ADD\n")))}u.isMDXComponent=!0}}]);