"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[2483],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>O});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,O=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(O,o(o({ref:t},p),{},{components:r})):n.createElement(O,o({ref:t},p))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97513:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"SHOW-LOAD-WARNINGS",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-LOAD-WARNINGS",id:"sql-manual/sql-reference/Show-Statements/SHOW-LOAD-WARNINGS",title:"SHOW-LOAD-WARNINGS",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-WARNINGS.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-WARNINGS",permalink:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-WARNINGS",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-LOAD-WARNINGS",language:"en"},sidebar:"docs",previous:{title:"SHOW-LOAD-PROFILE",permalink:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-PROFILE"},next:{title:"SHOW-LOAD",permalink:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-LOAD"}},s={},c=[{value:"SHOW-LOAD-WARNINGS",id:"show-load-warnings",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-load-warnings"},"SHOW-LOAD-WARNINGS"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW LOAD WARNINGS"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"If the import task fails and the error message is ",(0,a.kt)("inlineCode",{parentName:"p"},"ETL_QUALITY_UNSATISFIED"),", it means that there is an import quality problem. If you want to see these import tasks with quality problems, change the statement to complete this operation."),(0,a.kt)("p",null,"grammar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW LOAD WARNINGS\n[FROM db_name]\n[\n    WHERE\n    [LABEL[="your_label"]]\n    [LOAD_JOB_ID = ["job id"]]\n]\n')),(0,a.kt)("p",null,"1) If db_name is not specified, the current default db is used\n1) If LABEL = is used, it matches the specified label exactly\n1) If LOAD_JOB_ID is specified, match the specified JOB ID exactly"),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Display the data with quality problems in the import task of the specified db, and specify the label as "load_demo_20210112"'),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW LOAD WARNINGS FROM demo WHERE LABEL = "load_demo_20210112"\n')))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, LOAD, WARNINGS\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);