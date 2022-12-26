"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[12431],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>E});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,E=u["".concat(p,".").concat(d)]||u[d]||c[d]||l;return a?n.createElement(E,i(i({ref:t},m),{},{components:a})):n.createElement(E,i({ref:t},m))}));function E(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},77973:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"SHOW ALTER TABLE MATERIALIZED VIEW",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW",id:"version-dev/sql-manual/sql-reference/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW",title:"SHOW ALTER TABLE MATERIALIZED VIEW",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-reference/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-reference/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW.md",tags:[],version:"dev",frontMatter:{title:"SHOW ALTER TABLE MATERIALIZED VIEW",language:"en"},sidebar:"docs",previous:{title:"ADMIN-CANCEL-REBALANCE-DISK",permalink:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK"},next:{title:"SHOW-ALTER",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-ALTER"}},p={},s=[{value:"SHOW ALTER TABLE MATERIALIZED VIEW",id:"show-alter-table-materialized-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"show-alter-table-materialized-view"},"SHOW ALTER TABLE MATERIALIZED VIEW"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"SHOW ALTER TABLE MATERIALIZED VIEW"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"This command is used to view the execution of the Create Materialized View job submitted through the ",(0,r.kt)("a",{parentName:"p",href:"../../../sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW"},"CREATE-MATERIALIZED-VIEW")," statement."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This statement is equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW ALTER TABLE ROLLUP"),";")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW ALTER TABLE MATERIALIZED VIEW\n[FROM database]\n[WHERE]\n[ORDER BY]\n[LIMIT OFFSET]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"database: View jobs under the specified database. If not specified, the current database is used."),(0,r.kt)("li",{parentName:"ul"},"WHERE: You can filter the result column, currently only the following columns are supported:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TableName: Only equal value filtering is supported."),(0,r.kt)("li",{parentName:"ul"},"State: Only supports equivalent filtering."),(0,r.kt)("li",{parentName:"ul"},"Createtime/FinishTime: Support =, >=, <=, >, <, !="))),(0,r.kt)("li",{parentName:"ul"},"ORDER BY: The result set can be sorted by any column."),(0,r.kt)("li",{parentName:"ul"},"LIMIT: Use ORDER BY to perform page-turning query.")),(0,r.kt)("p",null,"Return result description:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> show alter table materialized view\\G\n**************************** 1. row ******************** ******\n          JobId: 11001\n      TableName: tbl1\n     CreateTime: 2020-12-23 10:41:00\n     FinishTime: NULL\n  BaseIndexName: tbl1\nRollupIndexName: r1\n       RollupId: 11002\n  TransactionId: 5070\n          State: WAITING_TXN\n            Msg:\n       Progress: NULL\n        Timeout: 86400\n1 row in set (0.00 sec)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"JobId"),": Job unique ID.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"TableName"),": base table name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"CreateTime/FinishTime"),": Job creation time and end time.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"BaseIndexName/RollupIndexName"),": Base table name and materialized view name.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"RollupId"),": The unique ID of the materialized view.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"TransactionId"),": See the description of the State field.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"State"),": job status."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PENDING: The job is in preparation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"WAITING_TXN:"),(0,r.kt)("p",{parentName:"li"},"Before officially starting to generate materialized view data, it will wait for the current running import transaction on this table to complete. And the ",(0,r.kt)("inlineCode",{parentName:"p"},"TransactionId")," field is the current waiting transaction ID. When all previous imports for this ID are complete, the job will actually start.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RUNNING: The job is running.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"FINISHED: The job ran successfully.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CANCELLED: The job failed to run.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Msg"),": error message")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Progress"),": job progress. The progress here means ",(0,r.kt)("inlineCode",{parentName:"p"},"completed tablets/total tablets"),". Materialized views are created at tablet granularity.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Timeout"),": Job timeout, in seconds."))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"View the materialized view jobs under the database example_db"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW ALTER TABLE MATERIALIZED VIEW FROM example_db;\n")))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SHOW, ALTER, TABLE, MATERIALIZED, VIEW\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);