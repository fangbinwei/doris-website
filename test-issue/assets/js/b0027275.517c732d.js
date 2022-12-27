"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[33013],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=l,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const r={title:"DELETE",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE",id:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE",title:"DELETE",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE",permalink:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE",draft:!1,tags:[],version:"current",frontMatter:{title:"DELETE",language:"en"},sidebar:"docs",previous:{title:"CREATE-SYNC-JOB",permalink:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-SYNC-JOB"},next:{title:"INSERT",permalink:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT"}},p={},s=[{value:"DELETE",id:"delete",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"delete"},"DELETE"),(0,l.kt)("h3",{id:"name"},"Name"),(0,l.kt)("p",null,"DELETE"),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"This statement is used to conditionally delete data in the specified table (base index) partition."),(0,l.kt)("p",null,"This operation will also delete the data of the rollup index related to this base index."),(0,l.kt)("p",null,"grammar:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"DELETE FROM table_name [PARTITION partition_name | PARTITIONS (p1, p2)]\nWHERE\ncolumn_name1 op { value | value_list } [ AND column_name2 op { value | value_list } ...];\n")),(0,l.kt)("p",null,"illustrate:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The optional types of op include: =, >, <, >=, <=, !=, in, not in"),(0,l.kt)("li",{parentName:"ol"},"Only conditions on the key column can be specified when using AGGREGATE (UNIQUE) model."),(0,l.kt)("li",{parentName:"ol"},"When the selected key column does not exist in a rollup, delete cannot be performed."),(0,l.kt)("li",{parentName:"ol"},'Conditions can only have an "and" relationship. If you want to achieve an "or" relationship, you need to write the conditions in two DELETE statements.'),(0,l.kt)("li",{parentName:"ol"},"If it is a partitioned table, you can specify a partition. If not specified, and the session variable delete_without_partition is true, it will be applied to all partitions. If it is a single-partition table, it can be left unspecified.")),(0,l.kt)("p",null,"Notice:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"This statement may reduce query efficiency for a period of time after execution."),(0,l.kt)("li",{parentName:"ol"},"The degree of impact depends on the number of delete conditions specified in the statement."),(0,l.kt)("li",{parentName:"ol"},"The more conditions you specify, the greater the impact.")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Delete the data row whose k1 column value is 3 in my_table partition p1"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM my_table PARTITION p1\n    WHERE k1 = 3;\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Delete the data rows where the value of column k1 is greater than or equal to 3 and the value of column k2 is "abc" in my_table partition p1'),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'DELETE FROM my_table PARTITION p1\nWHERE k1 >= 3 AND k2 = "abc";\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Delete the data rows where the value of column k1 is greater than or equal to 3 and the value of column k2 is "abc" in my_table partition p1, p2'),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'DELETE FROM my_table PARTITIONS (p1, p2)\nWHERE k1 >= 3 AND k2 = "abc";\n')))),(0,l.kt)("h3",{id:"keywords"},"Keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"DELETE\n")),(0,l.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);