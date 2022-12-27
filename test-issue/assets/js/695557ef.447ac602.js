"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[50802],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),A=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=A(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=A(a),d=r,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||l;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var A=2;A<l;A++)o[A]=a[A];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},36622:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>A});var n=a(87462),r=(a(67294),a(3905));const l={title:"ALTER-DATABASE",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-DATABASE",id:"version-dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-DATABASE",title:"ALTER-DATABASE",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-DATABASE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-DATABASE",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-DATABASE",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-DATABASE.md",tags:[],version:"dev",frontMatter:{title:"ALTER-DATABASE",language:"en"},sidebar:"docs",previous:{title:"ALTER-CATALOG",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-CATALOG"},next:{title:"ALTER-TABLE-BITMAP",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-BITMAP"}},s={},A=[{value:"ALTER-DATABASE",id:"alter-database",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:A};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"alter-database"},"ALTER-DATABASE"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"ALTER DATABASE"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"This statement is used to set properties of the specified database. (administrator only)"),(0,r.kt)("p",null,"1) Set the database data quota, the unit is B/K/KB/M/MB/G/GB/T/TB/P/PB"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE db_name SET DATA QUOTA quota;\n")),(0,r.kt)("p",null,"2) Rename the database"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE db_name RENAME new_db_name;\n")),(0,r.kt)("p",null,"3) Set the quota for the number of copies of the database"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE db_name SET REPLICA QUOTA quota;\n")),(0,r.kt)("p",null,"illustrate:\nAfter renaming the database, use the REVOKE and GRANT commands to modify the appropriate user permissions, if necessary.\nThe default data quota for the database is 1024GB, and the default replica quota is 1073741824."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set the specified database data volume quota")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE example_db SET DATA QUOTA 10995116277760;\nThe above unit is bytes, which is equivalent to\nALTER DATABASE example_db SET DATA QUOTA 10T;\n\nALTER DATABASE example_db SET DATA QUOTA 100G;\n\nALTER DATABASE example_db SET DATA QUOTA 200M;\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Rename the database example_db to example_db2")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE example_db RENAME example_db2;\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Set the quota for the number of copies of the specified database")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE example_db SET REPLICA QUOTA 102400;\n")),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"ALTER,DATABASE,RENAME\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}p.isMDXComponent=!0}}]);