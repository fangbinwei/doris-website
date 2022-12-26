"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[37496],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>E});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=l,E=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(E,o(o({ref:t},c),{},{components:a})):n.createElement(E,o({ref:t},c))}));function E(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},38093:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(87462),l=(a(67294),a(3905));const r={title:"ALTER-TABLE-RENAME",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-RENAME",id:"version-dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-RENAME",title:"ALTER-TABLE-RENAME",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-RENAME.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-RENAME",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-RENAME",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-RENAME.md",tags:[],version:"dev",frontMatter:{title:"ALTER-TABLE-RENAME",language:"en"},sidebar:"docs",previous:{title:"ALTER-TABLE-ROLLUP",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP"},next:{title:"ALTER-POLICY",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-STORAGE-POLICY"}},p={},s=[{value:"ALTER-TABLE-RENAME",id:"alter-table-rename",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:s};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"alter-table-rename"},"ALTER-TABLE-RENAME"),(0,l.kt)("h3",{id:"name"},"Name"),(0,l.kt)("p",null,"ALTER TABLE RENAME"),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"This statement is used to rename certain names of existing table properties. This operation is synchronous, and the return of the command indicates the completion of the execution."),(0,l.kt)("p",null,"grammar:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [database.]table alter_clause;\n")),(0,l.kt)("p",null,"The alter_clause of rename supports modification of the following names"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Modify the table name")),(0,l.kt)("p",null,"grammar:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"RENAME new_table_name;\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Modify the rollup index name"),(0,l.kt)("p",{parentName:"li"},"grammar:"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"RENAME ROLLUP old_rollup_name new_rollup_name;\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Modify the partition name")),(0,l.kt)("p",null,"grammar:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"RENAME PARTITION old_partition_name new_partition_name;\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Modify the column name")),(0,l.kt)("p",null,"grammar:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"RENAME COLUMN old_column_name new_column_name;\n")),(0,l.kt)("p",null,"Notice:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Currently only tables with column unique id are supported, which are created with property 'light_schema_change'.")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Modify the table named table1 to table2")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table1 RENAME table2;\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Modify the rollup index named rollup1 in the table example_table to rollup2")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_table RENAME ROLLUP rollup1 rollup2;\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Modify the partition named p1 in the table example_table to p2")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_table RENAME PARTITION p1 p2;\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Modify the column named c1 in the table example_table to c2")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_table RENAME COLUMN c1 c2;\n")),(0,l.kt)("h3",{id:"keywords"},"Keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"ALTER, TABLE, RENAME, ALTER TABLE\n")),(0,l.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);