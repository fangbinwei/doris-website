"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[35154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"RESTORE",language:"zh-CN"},i=void 0,p={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/RESTORE",id:"version-dev/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/RESTORE",title:"RESTORE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/RESTORE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/RESTORE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/RESTORE",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/RESTORE.md",tags:[],version:"dev",frontMatter:{title:"RESTORE",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-POLICY",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-STORAGE-POLICY"},next:{title:"DROP-REPOSITORY",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/DROP-REPOSITORY"}},o={},s=[{value:"RESTORE",id:"restore",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"restore"},"RESTORE"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"RESTORE"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c06\u4e4b\u524d\u901a\u8fc7 BACKUP \u547d\u4ee4\u5907\u4efd\u7684\u6570\u636e\uff0c\u6062\u590d\u5230\u6307\u5b9a\u6570\u636e\u5e93\u4e0b\u3002\u8be5\u547d\u4ee4\u4e3a\u5f02\u6b65\u64cd\u4f5c\u3002\u63d0\u4ea4\u6210\u529f\u540e\uff0c\u9700\u901a\u8fc7 SHOW RESTORE \u547d\u4ee4\u67e5\u770b\u8fdb\u5ea6\u3002\u4ec5\u652f\u6301\u6062\u590d OLAP \u7c7b\u578b\u7684\u8868\u3002"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'RESTORE SNAPSHOT [db_name].{snapshot_name}\nFROM `repository_name`\n[ON|EXCLUDE] (\n    `table_name` [PARTITION (`p1`, ...)] [AS `tbl_alias`],\n    ...\n)\nPROPERTIES ("key"="value", ...);\n')),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u540c\u4e00\u6570\u636e\u5e93\u4e0b\u53ea\u80fd\u6709\u4e00\u4e2a\u6b63\u5728\u6267\u884c\u7684 BACKUP \u6216 RESTORE \u4efb\u52a1\u3002"),(0,r.kt)("li",{parentName:"ul"},"ON \u5b50\u53e5\u4e2d\u6807\u8bc6\u9700\u8981\u6062\u590d\u7684\u8868\u548c\u5206\u533a\u3002\u5982\u679c\u4e0d\u6307\u5b9a\u5206\u533a\uff0c\u5219\u9ed8\u8ba4\u6062\u590d\u8be5\u8868\u7684\u6240\u6709\u5206\u533a\u3002\u6240\u6307\u5b9a\u7684\u8868\u548c\u5206\u533a\u5fc5\u987b\u5df2\u5b58\u5728\u4e8e\u4ed3\u5e93\u5907\u4efd\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},"EXCLUDE \u5b50\u53e5\u4e2d\u6807\u8bc6\u4e0d\u9700\u8981\u6062\u590d\u7684\u8868\u548c\u5206\u533a\u3002\u9664\u4e86\u6240\u6307\u5b9a\u7684\u8868\u6216\u5206\u533a\u4e4b\u5916\u4ed3\u5e93\u4e2d\u6240\u6709\u5176\u4ed6\u8868\u7684\u6240\u6709\u5206\u533a\u5c06\u88ab\u6062\u590d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7 AS \u8bed\u53e5\u5c06\u4ed3\u5e93\u4e2d\u5907\u4efd\u7684\u8868\u540d\u6062\u590d\u4e3a\u65b0\u7684\u8868\u3002\u4f46\u65b0\u8868\u540d\u4e0d\u80fd\u5df2\u5b58\u5728\u4e8e\u6570\u636e\u5e93\u4e2d\u3002\u5206\u533a\u540d\u79f0\u4e0d\u80fd\u4fee\u6539\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c06\u4ed3\u5e93\u4e2d\u5907\u4efd\u7684\u8868\u6062\u590d\u66ff\u6362\u6570\u636e\u5e93\u4e2d\u5df2\u6709\u7684\u540c\u540d\u8868\uff0c\u4f46\u987b\u4fdd\u8bc1\u4e24\u5f20\u8868\u7684\u8868\u7ed3\u6784\u5b8c\u5168\u4e00\u81f4\u3002\u8868\u7ed3\u6784\u5305\u62ec\uff1a\u8868\u540d\u3001\u5217\u3001\u5206\u533a\u3001Rollup\u7b49\u7b49\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u6307\u5b9a\u6062\u590d\u8868\u7684\u90e8\u5206\u5206\u533a\uff0c\u7cfb\u7edf\u4f1a\u68c0\u67e5\u5206\u533a Range \u6216\u8005 List \u662f\u5426\u80fd\u591f\u5339\u914d\u3002"),(0,r.kt)("li",{parentName:"ul"},"PROPERTIES \u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u5c5e\u6027\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'"backup_timestamp" = "2018-05-04-16-45-08"\uff1a\u6307\u5b9a\u4e86\u6062\u590d\u5bf9\u5e94\u5907\u4efd\u7684\u54ea\u4e2a\u65f6\u95f4\u7248\u672c\uff0c\u5fc5\u586b\u3002\u8be5\u4fe1\u606f\u53ef\u4ee5\u901a\u8fc7 ',(0,r.kt)("inlineCode",{parentName:"li"},"SHOW SNAPSHOT ON repo;")," \u8bed\u53e5\u83b7\u5f97\u3002"),(0,r.kt)("li",{parentName:"ul"},'"replication_num" = "3"\uff1a\u6307\u5b9a\u6062\u590d\u7684\u8868\u6216\u5206\u533a\u7684\u526f\u672c\u6570\u3002\u9ed8\u8ba4\u4e3a3\u3002\u82e5\u6062\u590d\u5df2\u5b58\u5728\u7684\u8868\u6216\u5206\u533a\uff0c\u5219\u526f\u672c\u6570\u5fc5\u987b\u548c\u5df2\u5b58\u5728\u8868\u6216\u5206\u533a\u7684\u526f\u672c\u6570\u76f8\u540c\u3002\u540c\u65f6\uff0c\u5fc5\u987b\u6709\u8db3\u591f\u7684 host \u5bb9\u7eb3\u591a\u4e2a\u526f\u672c\u3002'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("version",{since:"1.2",type:"inline"},' "reserve_replica" = "true"\uff1a\u9ed8\u8ba4\u4e3a false\u3002\u5f53\u8be5\u5c5e\u6027\u4e3a true \u65f6\uff0c\u4f1a\u5ffd\u7565 replication_num \u5c5e\u6027\uff0c\u6062\u590d\u7684\u8868\u6216\u5206\u533a\u7684\u526f\u672c\u6570\u5c06\u4e0e\u5907\u4efd\u4e4b\u524d\u4e00\u6837\u3002\u652f\u6301\u591a\u4e2a\u8868\u6216\u8868\u5185\u591a\u4e2a\u5206\u533a\u6709\u4e0d\u540c\u7684\u526f\u672c\u6570\u3002')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("version",{since:"1.2",type:"inline"}," \"reserve_dynamic_partition_enable\" = \"true\"\uff1a\u9ed8\u8ba4\u4e3a false\u3002\u5f53\u8be5\u5c5e\u6027\u4e3a true \u65f6\uff0c\u6062\u590d\u7684\u8868\u4f1a\u4fdd\u7559\u8be5\u8868\u5907\u4efd\u4e4b\u524d\u7684'dynamic_partition_enable'\u5c5e\u6027\u503c\u3002\u8be5\u503c\u4e0d\u4e3atrue\u65f6\uff0c\u5219\u6062\u590d\u51fa\u6765\u7684\u8868\u7684'dynamic_partition_enable'\u5c5e\u6027\u503c\u4f1a\u8bbe\u7f6e\u4e3afalse\u3002")),(0,r.kt)("li",{parentName:"ul"},'"timeout" = "3600"\uff1a\u4efb\u52a1\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a\u4e00\u5929\u3002\u5355\u4f4d\u79d2\u3002'),(0,r.kt)("li",{parentName:"ul"},'"meta_version" = 40\uff1a\u4f7f\u7528\u6307\u5b9a\u7684 meta_version \u6765\u8bfb\u53d6\u4e4b\u524d\u5907\u4efd\u7684\u5143\u6570\u636e\u3002\u6ce8\u610f\uff0c\u8be5\u53c2\u6570\u4f5c\u4e3a\u4e34\u65f6\u65b9\u6848\uff0c\u4ec5\u7528\u4e8e\u6062\u590d\u8001\u7248\u672c Doris \u5907\u4efd\u7684\u6570\u636e\u3002\u6700\u65b0\u7248\u672c\u7684\u5907\u4efd\u6570\u636e\u4e2d\u5df2\u7ecf\u5305\u542b meta version\uff0c\u65e0\u9700\u518d\u6307\u5b9a\u3002     ')))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'\u4ece example_repo \u4e2d\u6062\u590d\u5907\u4efd snapshot_1 \u4e2d\u7684\u8868 backup_tbl \u5230\u6570\u636e\u5e93 example_db1\uff0c\u65f6\u95f4\u7248\u672c\u4e3a "2018-05-04-16-45-08"\u3002\u6062\u590d\u4e3a 1 \u4e2a\u526f\u672c\uff1a')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'RESTORE SNAPSHOT example_db1.`snapshot_1`\nFROM `example_repo`\nON ( `backup_tbl` )\nPROPERTIES\n(\n    "backup_timestamp"="2018-05-04-16-45-08",\n    "replication_num" = "1"\n);\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},'\u4ece example_repo \u4e2d\u6062\u590d\u5907\u4efd snapshot_2 \u4e2d\u7684\u8868 backup_tbl \u7684\u5206\u533a p1,p2\uff0c\u4ee5\u53ca\u8868 backup_tbl2 \u5230\u6570\u636e\u5e93 example_db1\uff0c\u5e76\u91cd\u547d\u540d\u4e3a new_tbl\uff0c\u65f6\u95f4\u7248\u672c\u4e3a "2018-05-04-17-11-01"\u3002\u9ed8\u8ba4\u6062\u590d\u4e3a 3 \u4e2a\u526f\u672c\uff1a')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'RESTORE SNAPSHOT example_db1.`snapshot_2`\nFROM `example_repo`\nON\n(\n    `backup_tbl` PARTITION (`p1`, `p2`),\n    `backup_tbl2` AS `new_tbl`\n)\nPROPERTIES\n(\n    "backup_timestamp"="2018-05-04-17-11-01"\n);\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},'\u4ece example_repo \u4e2d\u6062\u590d\u5907\u4efd snapshot_3 \u4e2d\u9664\u4e86\u8868 backup_tbl \u7684\u5176\u4ed6\u6240\u6709\u8868\u5230\u6570\u636e\u5e93 example_db1\uff0c\u65f6\u95f4\u7248\u672c\u4e3a "2018-05-04-18-12-18"\u3002')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'RESTORE SNAPSHOT example_db1.`snapshot_3`\nFROM `example_repo`\nEXCLUDE ( `backup_tbl` )\nPROPERTIES\n(\n    "backup_timestamp"="2018-05-04-18-12-18"\n);\n')),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"RESTORE\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u540c\u4e00\u6570\u636e\u5e93\u4e0b\u53ea\u80fd\u6709\u4e00\u4e2a\u6b63\u5728\u6267\u884c\u7684\u6062\u590d\u64cd\u4f5c\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u5c06\u4ed3\u5e93\u4e2d\u5907\u4efd\u7684\u8868\u6062\u590d\u66ff\u6362\u6570\u636e\u5e93\u4e2d\u5df2\u6709\u7684\u540c\u540d\u8868\uff0c\u4f46\u987b\u4fdd\u8bc1\u4e24\u5f20\u8868\u7684\u8868\u7ed3\u6784\u5b8c\u5168\u4e00\u81f4\u3002\u8868\u7ed3\u6784\u5305\u62ec\uff1a\u8868\u540d\u3001\u5217\u3001\u5206\u533a\u3001\u7269\u5316\u89c6\u56fe\u7b49\u7b49\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5f53\u6307\u5b9a\u6062\u590d\u8868\u7684\u90e8\u5206\u5206\u533a\u65f6\uff0c\u7cfb\u7edf\u4f1a\u68c0\u67e5\u5206\u533a\u8303\u56f4\u662f\u5426\u80fd\u591f\u5339\u914d\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6062\u590d\u64cd\u4f5c\u7684\u6548\u7387\uff1a"),(0,r.kt)("p",{parentName:"li"},"\u5728\u96c6\u7fa4\u89c4\u6a21\u76f8\u540c\u7684\u60c5\u51b5\u4e0b\uff0c\u6062\u590d\u64cd\u4f5c\u7684\u8017\u65f6\u57fa\u672c\u7b49\u540c\u4e8e\u5907\u4efd\u64cd\u4f5c\u7684\u8017\u65f6\u3002\u5982\u679c\u60f3\u52a0\u901f\u6062\u590d\u64cd\u4f5c\uff0c\u53ef\u4ee5\u5148\u901a\u8fc7\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"replication_num")," \u53c2\u6570\uff0c\u4ec5\u6062\u590d\u4e00\u4e2a\u526f\u672c\uff0c\u4e4b\u540e\u5728\u901a\u8fc7\u8c03\u6574\u526f\u672c\u6570 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PROPERTY"},"ALTER TABLE PROPERTY"),"\uff0c\u5c06\u526f\u672c\u8865\u9f50\u3002"))))}m.isMDXComponent=!0}}]);