"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[2517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),N=r,d=m["".concat(o,".").concat(N)]||m[N]||k[N]||l;return n?a.createElement(d,p(p({ref:t},c),{},{components:n})):a.createElement(d,p({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=N;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:r,p[1]=i;for(var s=2;s<l;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},6461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"CREATE SYNC JOB",language:"zh-CN"},p=void 0,i={unversionedId:"sql-reference/sql-statements/Data-Manipulation/CREATE-SYNC-JOB",id:"version-0.15/sql-reference/sql-statements/Data-Manipulation/CREATE-SYNC-JOB",title:"CREATE SYNC JOB",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-statements/Data-Manipulation/CREATE-SYNC-JOB.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/CREATE-SYNC-JOB",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/CREATE-SYNC-JOB",draft:!1,tags:[],version:"0.15",frontMatter:{title:"CREATE SYNC JOB",language:"zh-CN"},sidebar:"docs",previous:{title:"CANCEL LOAD",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/CANCEL-LOAD"},next:{title:"DELETE",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/DELETE"}},o={},s=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-sync-job"},"CREATE SYNC JOB"),(0,r.kt)("h2",{id:"description"},"description"),(0,r.kt)("p",null,"\u6570\u636e\u540c\u6b65(Sync Job)\u529f\u80fd\uff0c\u652f\u6301\u7528\u6237\u63d0\u4ea4\u4e00\u4e2a\u5e38\u9a7b\u7684\u6570\u636e\u540c\u6b65\u4f5c\u4e1a\uff0c\u901a\u8fc7\u4ece\u6307\u5b9a\u7684\u8fdc\u7aef\u5730\u5740\u8bfb\u53d6Binlog\u65e5\u5fd7\uff0c\u589e\u91cf\u540c\u6b65\u7528\u6237\u5728Mysql\u6570\u636e\u5e93\u7684\u5bf9\u6570\u636e\u66f4\u65b0\u64cd\u4f5c\u7684CDC(Change Data Capture)\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u76ee\u524d\u6570\u636e\u540c\u6b65\u4f5c\u4e1a\u53ea\u652f\u6301\u5bf9\u63a5Canal\uff0c\u4eceCanal Server\u4e0a\u83b7\u53d6\u89e3\u6790\u597d\u7684Binlog\u6570\u636e\uff0c\u5bfc\u5165\u5230Doris\u5185\u3002"),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW SYNC JOB")," \u67e5\u770b\u6570\u636e\u540c\u6b65\u4f5c\u4e1a\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE SYNC [db.]job_name\n (\n    channel_desc, \n    channel_desc\n    ...\n )\nbinlog_desc\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"job_name")),(0,r.kt)("p",{parentName:"li"},"\u540c\u6b65\u4f5c\u4e1a\u540d\u79f0\uff0c\u662f\u4f5c\u4e1a\u5728\u5f53\u524d\u6570\u636e\u5e93\u5185\u7684\u552f\u4e00\u6807\u8bc6\uff0c\u76f8\u540c",(0,r.kt)("inlineCode",{parentName:"p"},"job_name"),"\u7684\u4f5c\u4e1a\u53ea\u80fd\u6709\u4e00\u4e2a\u5728\u8fd0\u884c\u3002\n")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"channel_desc")),(0,r.kt)("p",{parentName:"li"},"\u4f5c\u4e1a\u4e0b\u7684\u6570\u636e\u901a\u9053\uff0c\u7528\u6765\u63cf\u8ff0mysql\u6e90\u8868\u5230doris\u76ee\u6807\u8868\u7684\u6620\u5c04\u5173\u7cfb\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8bed\u6cd5\uff1a   \t\t"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"FROM mysql_db.src_tbl INTO des_tbl\n[partitions]\n[columns_mapping]\n")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"mysql_db.src_tbl")),(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9amysql\u7aef\u7684\u6570\u636e\u5e93\u548c\u6e90\u8868\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"des_tbl")),(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9adoris\u7aef\u7684\u76ee\u6807\u8868\uff0c\u53ea\u652f\u6301Unique\u8868\uff0c\u4e14\u9700\u5f00\u542f\u8868\u7684batch delete\u529f\u80fd(\u5f00\u542f\u65b9\u6cd5\u8bf7\u770bhelp alter table\u7684'\u6279\u91cf\u5220\u9664\u529f\u80fd')\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"partitions")),(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a\u5bfc\u5165\u76ee\u7684\u8868\u7684\u54ea\u4e9b partition \u4e2d\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219\u4f1a\u81ea\u52a8\u5bfc\u5165\u5230\u5bf9\u5e94\u7684 partition \u4e2d\u3002"),(0,r.kt)("p",{parentName:"li"},"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"PARTITION(p1, p2, p3)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"column_mapping")),(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9amysql\u6e90\u8868\u548cdoris\u76ee\u6807\u8868\u7684\u5217\u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0cFE\u4f1a\u9ed8\u8ba4\u6e90\u8868\u548c\u76ee\u6807\u8868\u7684\u5217\u6309\u987a\u5e8f\u4e00\u4e00\u5bf9\u5e94\u3002"),(0,r.kt)("p",{parentName:"li"},"\u4e0d\u652f\u6301 col_name = expr \u7684\u5f62\u5f0f\u8868\u793a\u5217\u3002"),(0,r.kt)("p",{parentName:"li"},"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\u5047\u8bbe\u76ee\u6807\u8868\u5217\u4e3a(k1, k2, v1)\uff0c\n\n\u6539\u53d8\u5217k1\u548ck2\u7684\u987a\u5e8f\nCOLUMNS(k2, k1, v1)\n\n\u5ffd\u7565\u6e90\u6570\u636e\u7684\u7b2c\u56db\u5217\nCOLUMNS(k2, k1, v1, dummy_column)\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"binlog_desc")),(0,r.kt)("p",{parentName:"li"},"\u7528\u6765\u63cf\u8ff0\u8fdc\u7aef\u6570\u636e\u6e90\uff0c\u76ee\u524d\u4ec5\u652f\u6301canal\u4e00\u79cd\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8bed\u6cd5\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'FROM BINLOG\n(\n    "key1" = "value1", \n    "key2" = "value2"\n)\n')),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Canal \u6570\u636e\u6e90\u5bf9\u5e94\u7684\u5c5e\u6027\uff0c\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"canal."),"\u4e3a\u524d\u7f00"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"canal.server.ip: canal server\u7684\u5730\u5740"),(0,r.kt)("li",{parentName:"ol"},"canal.server.port: canal server\u7684\u7aef\u53e3"),(0,r.kt)("li",{parentName:"ol"},"canal.destination: instance\u7684\u6807\u8bc6"),(0,r.kt)("li",{parentName:"ol"},"canal.batchSize: \u83b7\u53d6\u7684batch\u5927\u5c0f\u7684\u6700\u5927\u503c\uff0c\u9ed8\u8ba48192"),(0,r.kt)("li",{parentName:"ol"},"canal.username: instance\u7684\u7528\u6237\u540d"),(0,r.kt)("li",{parentName:"ol"},"canal.password: instance\u7684\u5bc6\u7801"),(0,r.kt)("li",{parentName:"ol"},"canal.debug: \u53ef\u9009\uff0c\u8bbe\u7f6e\u4e3atrue\u65f6\uff0c\u4f1a\u5c06batch\u548c\u6bcf\u4e00\u884c\u6570\u636e\u7684\u8be6\u7ec6\u4fe1\u606f\u90fd\u6253\u5370\u51fa\u6765")))))),(0,r.kt)("h2",{id:"example"},"example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7b80\u5355\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"test_db")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"test_tbl")," \u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"job1")," \u7684\u6570\u636e\u540c\u6b65\u4f5c\u4e1a\uff0c\u8fde\u63a5\u672c\u5730\u7684Canal\u670d\u52a1\u5668\uff0c\u5bf9\u5e94Mysql\u6e90\u8868 ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql_db1.tbl1"),"\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'CREATE SYNC `test_db`.`job1`\n(\n    FROM `mysql_db1`.`tbl1` INTO `test_tbl `\n)\nFROM BINLOG \n(\n    "type" = "canal",\n    "canal.server.ip" = "127.0.0.1\x10",\n    "canal.server.port" = "11111",\n    "canal.destination" = "example",\n    "canal.username" = "",\n    "canal.password" = ""\n);\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"test_db")," \u7684\u591a\u5f20\u8868\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"job1")," \u7684\u6570\u636e\u540c\u6b65\u4f5c\u4e1a\uff0c\u4e00\u4e00\u5bf9\u5e94\u591a\u5f20Mysql\u6e90\u8868\uff0c\u5e76\u663e\u5f0f\u7684\u6307\u5b9a\u5217\u6620\u5c04\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'CREATE SYNC `test_db`.`job1` \n(\n    FROM `mysql_db`.`t1` INTO `test1` COLUMNS(k1, k2, v1) PARTITIONS (p1, p2),\n    FROM `mysql_db`.`t2` INTO `test2` COLUMNS(k3, k4, v2) PARTITION p1\n) \nFROM BINLOG \n(\n    "type" = "canal", \n    "canal.server.ip" = "xx.xxx.xxx.xx", \n    "canal.server.port" = "12111", \n    "canal.destination" = "example",  \n    "canal.username" = "username", \n    "canal.password" = "password"\n);\n')))),(0,r.kt)("h2",{id:"keyword"},"keyword"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE,SYNC,JOB,BINLOG\n")))}m.isMDXComponent=!0}}]);