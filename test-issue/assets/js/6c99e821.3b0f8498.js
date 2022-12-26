"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[34141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>O});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,O=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(O,o(o({ref:t},c),{},{components:n})):r.createElement(O,o({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},10220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"SHOW PARTITIONS",language:"en"},o=void 0,l={unversionedId:"sql-reference/sql-statements/Data-Manipulation/SHOW-PARTITIONS",id:"version-0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-PARTITIONS",title:"SHOW PARTITIONS",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-PARTITIONS.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/SHOW-PARTITIONS",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-PARTITIONS",draft:!1,tags:[],version:"0.15",frontMatter:{title:"SHOW PARTITIONS",language:"en"},sidebar:"docs",previous:{title:"SHOW LOAD",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-LOAD"},next:{title:"SHOW PROPERTY",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-PROPERTY"}},s={},p=[{value:"Description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"show-partitions"},"SHOW PARTITIONS"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This statement is used to display partition information\nGrammar:\nSHOW PARTITIONS FROM ","[db_name.]","table_name ","[WHERE][ORDER BY]"," ","[LIMIT]",";\nExplain:\nSupport filter with following columns: PartitionId,PartitionName,State,Buckets,ReplicationNum,\nLastConsistencyCheckTime"),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Display partition information for the specified table below the specified DB\nSHOW PARTITIONS FROM example_db.table_name;")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Display information about the specified partition of the specified table below the specified DB\nSHOW PARTITIONS FROM example_db.table_name WHERE PartitionName = "p1";')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Display information about the newest partition of the specified table below the specified DB\nSHOW PARTITIONS FROM example_db.table_name ORDER BY PartitionId DESC LIMIT 1;"))),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("p",null,"SHOW,PARTITIONS"))}u.isMDXComponent=!0}}]);