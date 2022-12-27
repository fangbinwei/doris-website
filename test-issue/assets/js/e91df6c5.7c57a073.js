"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[14307],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,f=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(f,l(l({ref:t},m),{},{components:a})):n.createElement(f,l({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},42666:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"Bitmap Index",language:"en"},l=void 0,o={unversionedId:"administrator-guide/alter-table/alter-table-bitmap-index",id:"version-0.15/administrator-guide/alter-table/alter-table-bitmap-index",title:"Bitmap Index",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/administrator-guide/alter-table/alter-table-bitmap-index.md",sourceDirName:"administrator-guide/alter-table",slug:"/administrator-guide/alter-table/alter-table-bitmap-index",permalink:"/docs/0.15/administrator-guide/alter-table/alter-table-bitmap-index",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Bitmap Index",language:"en"},sidebar:"docs",previous:{title:"Load Json Format Data",permalink:"/docs/0.15/administrator-guide/load-data/load-json-format"},next:{title:"Replace Table",permalink:"/docs/0.15/administrator-guide/alter-table/alter-table-replace-table"}},p={},s=[{value:"Glossary",id:"glossary",level:2},{value:"Basic Principles",id:"basic-principles",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Create Job",id:"create-job",level:2},{value:"View Job",id:"view-job",level:2},{value:"Cancel Job",id:"cancel-job",level:2},{value:"Notice",id:"notice",level:2}],m={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bitmap-index"},"Bitmap Index"),(0,r.kt)("p",null,"Users can speed up queries by creating a bitmap index\nThis document focuses on how to create an index job, as well as some considerations and frequently asked questions when creating an index."),(0,r.kt)("h2",{id:"glossary"},"Glossary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"bitmap index: a fast data structure that speeds up queries")),(0,r.kt)("h2",{id:"basic-principles"},"Basic Principles"),(0,r.kt)("p",null,"Creating and dropping index is essentially a schema change job. For details, please refer to\n",(0,r.kt)("a",{parentName:"p",href:"../alter-table-schema-change"},"Schema Change"),"."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,"There are two forms of index creation and modification related syntax, one is integrated with alter table statement, and the other is using separate\ncreate/drop index syntax"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create Index"),(0,r.kt)("p",{parentName:"li"},"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"../../../sql-reference/sql-statements/Data-Definition/CREATE-INDEX"},"CREATE INDEX"),"\nor ",(0,r.kt)("a",{parentName:"p",href:"../../../sql-reference/sql-statements/Data-Definition/ALTER-TABLE"},"ALTER TABLE"),",\nYou can also specify a bitmap index when creating a table, Please refer to ",(0,r.kt)("a",{parentName:"p",href:"../../../sql-reference/sql-statements/Data-Definition/CREATE-TABLE"},"CREATE TABLE"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Show Index"),(0,r.kt)("p",{parentName:"li"},"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"../../../sql-reference/sql-statements/Administration/SHOW-INDEX"},"SHOW INDEX"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Drop Index"),(0,r.kt)("p",{parentName:"li"},"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"../../../sql-reference/sql-statements/Data-Definition/DROP-INDEX"},"DROP INDEX")," or ",(0,r.kt)("a",{parentName:"p",href:".././../sql-reference/sql-statements/Data-Definition/ALTER-TABLE"},"ALTER TABLE")))),(0,r.kt)("h2",{id:"create-job"},"Create Job"),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"../alter-table-schema-change"},"Schema Change")),(0,r.kt)("h2",{id:"view-job"},"View Job"),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"../alter-table-schema-change"},"Schema Change")),(0,r.kt)("h2",{id:"cancel-job"},"Cancel Job"),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"../alter-table-schema-change"},"Schema Change")),(0,r.kt)("h2",{id:"notice"},"Notice"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Currently only index of bitmap type is supported."),(0,r.kt)("li",{parentName:"ul"},"The bitmap index is only created on a single column."),(0,r.kt)("li",{parentName:"ul"},"Bitmap indexes can be applied to all columns of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Duplicate")," data model and key columns of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Aggregate")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Uniq")," models."),(0,r.kt)("li",{parentName:"ul"},"The data types supported by bitmap indexes are as follows:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TINYINT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SMALLINT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"INT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UNSIGNEDINT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BIGINT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CHAR")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"VARCHAR")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DATE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DATETIME")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LARGEINT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DECIMAL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BOOL")))),(0,r.kt)("li",{parentName:"ul"},"The bitmap index takes effect only in segmentV2. The table's storage format will be converted to V2 automatically when creating index.")))}c.isMDXComponent=!0}}]);