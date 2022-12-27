"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[10],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"DELETE",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE",id:"version-dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE",title:"DELETE",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE",permalink:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE.md",tags:[],version:"dev",frontMatter:{title:"DELETE",language:"en"},sidebar:"docs",previous:{title:"SELECT",permalink:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/SELECT"},next:{title:"UPDATE",permalink:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/UPDATE"}},p={},s=[{value:"DELETE",id:"delete",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"delete"},"DELETE"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"DELETE"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"This statement is used to conditionally delete data in the specified table (base index) partition."),(0,r.kt)("p",null,"This operation will also delete the data of the rollup index related to this base index."),(0,r.kt)("p",null,"grammar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},"DELETE FROM table_name [PARTITION partition_name | PARTITIONS (p1, p2)]\nWHERE\ncolumn_name1 op { value | value_list } [ AND column_name2 op { value | value_list } ...];\n")),(0,r.kt)("p",null,"illustrate:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The optional types of op include: =, >, <, >=, <=, !=, in, not in"),(0,r.kt)("li",{parentName:"ol"},"Only conditions on the key column can be specified when using AGGREGATE (UNIQUE) model."),(0,r.kt)("li",{parentName:"ol"},"When the selected key column does not exist in a rollup, delete cannot be performed."),(0,r.kt)("li",{parentName:"ol"},'Conditions can only have an "and" relationship. If you want to achieve an "or" relationship, you need to write the conditions in two DELETE statements.'),(0,r.kt)("li",{parentName:"ol"},"If it is a partitioned table, you can specify a partition. If not specified, Doris will infer partition from the given conditions. In two cases, Doris cannot infer the partition from conditions: 1) the conditions do not contain partition columns; 2) The operator of the partition column is not in. When a partition table does not specify the partition, or the partition cannot be inferred from the conditions, the session variable delete_without_partition needs to be true to make delete statement be applied to all partitions.")),(0,r.kt)("p",null,"Notice:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"This statement may reduce query efficiency for a period of time after execution."),(0,r.kt)("li",{parentName:"ol"},"The degree of impact depends on the number of delete conditions specified in the statement."),(0,r.kt)("li",{parentName:"ol"},"The more conditions you specify, the greater the impact.")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete the data row whose k1 column value is 3 in my_table partition p1"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM my_table PARTITION p1\n    WHERE k1 = 3;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Delete the data rows where the value of column k1 is greater than or equal to 3 and the value of column k2 is "abc" in my_table partition p1'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'DELETE FROM my_table PARTITION p1\nWHERE k1 >= 3 AND k2 = "abc";\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Delete the data rows where the value of column k1 is greater than or equal to 3 and the value of column k2 is "abc" in my_table partition p1, p2'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'DELETE FROM my_table PARTITIONS (p1, p2)\nWHERE k1 >= 3 AND k2 = "abc";\n')))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DELETE\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);