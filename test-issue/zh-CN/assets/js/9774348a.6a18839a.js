"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[3249],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>_});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),k=r,_=c["".concat(d,".").concat(k)]||c[k]||s[k]||o;return a?n.createElement(_,i(i({ref:t},m),{},{components:a})):n.createElement(_,i({ref:t},m))}));function _(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=k;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},33823:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Broker Load",language:"zh-CN"},i=void 0,l={unversionedId:"data-operate/import/import-way/broker-load-manual",id:"version-dev/data-operate/import/import-way/broker-load-manual",title:"Broker Load",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/data-operate/import/import-way/broker-load-manual.md",sourceDirName:"data-operate/import/import-way",slug:"/data-operate/import/import-way/broker-load-manual",permalink:"/zh-CN/docs/dev/data-operate/import/import-way/broker-load-manual",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/data-operate/import/import-way/broker-load-manual.md",tags:[],version:"dev",frontMatter:{title:"Broker Load",language:"zh-CN"},sidebar:"docs",previous:{title:"Binlog Load",permalink:"/zh-CN/docs/dev/data-operate/import/import-way/binlog-load-manual"},next:{title:"Routine Load",permalink:"/zh-CN/docs/dev/data-operate/import/import-way/routine-load-manual"}},d={},p=[{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:2},{value:"\u57fa\u672c\u539f\u7406",id:"\u57fa\u672c\u539f\u7406",level:2},{value:"\u5f00\u59cb\u5bfc\u5165",id:"\u5f00\u59cb\u5bfc\u5165",level:2},{value:"Hive \u5206\u533a\u8868\u7684\u6570\u636e\u5bfc\u5165",id:"hive-\u5206\u533a\u8868\u7684\u6570\u636e\u5bfc\u5165",level:3},{value:"Hive \u5206\u533a\u8868\u5bfc\u5165(ORC\u683c\u5f0f)",id:"hive-\u5206\u533a\u8868\u5bfc\u5165orc\u683c\u5f0f",level:3},{value:"HDFS\u6587\u4ef6\u7cfb\u7edf\u6570\u636e\u5bfc\u5165",id:"hdfs\u6587\u4ef6\u7cfb\u7edf\u6570\u636e\u5bfc\u5165",level:3},{value:"\u67e5\u770b\u5bfc\u5165\u72b6\u6001",id:"\u67e5\u770b\u5bfc\u5165\u72b6\u6001",level:2},{value:"\u53d6\u6d88\u5bfc\u5165",id:"\u53d6\u6d88\u5bfc\u5165",level:2},{value:"\u76f8\u5173\u7cfb\u7edf\u914d\u7f6e",id:"\u76f8\u5173\u7cfb\u7edf\u914d\u7f6e",level:2},{value:"Broker \u53c2\u6570",id:"broker-\u53c2\u6570",level:3},{value:"FE \u914d\u7f6e",id:"fe-\u914d\u7f6e",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:3},{value:"\u6570\u636e\u91cf",id:"\u6570\u636e\u91cf",level:3},{value:"\u4f5c\u4e1a\u8c03\u5ea6",id:"\u4f5c\u4e1a\u8c03\u5ea6",level:3},{value:"\u6027\u80fd\u5206\u6790",id:"\u6027\u80fd\u5206\u6790",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"\u66f4\u591a\u5e2e\u52a9",id:"\u66f4\u591a\u5e2e\u52a9",level:2}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"broker-load"},"Broker Load"),(0,r.kt)("p",null,"Broker load \u662f\u4e00\u4e2a\u5f02\u6b65\u7684\u5bfc\u5165\u65b9\u5f0f\uff0c\u652f\u6301\u7684\u6570\u636e\u6e90\u53d6\u51b3\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/advanced/broker"},"Broker")," \u8fdb\u7a0b\u652f\u6301\u7684\u6570\u636e\u6e90\u3002"),(0,r.kt)("p",null,"\u56e0\u4e3a Doris \u8868\u91cc\u7684\u6570\u636e\u662f\u6709\u5e8f\u7684\uff0c\u6240\u4ee5 Broker load \u5728\u5bfc\u5165\u6570\u636e\u7684\u65f6\u662f\u8981\u5229\u7528doris \u96c6\u7fa4\u8d44\u6e90\u5bf9\u6570\u636e\u8fdb\u884c\u6392\u5e8f\uff0c\u76f8\u5bf9\u4e8e Spark load \u6765\u5b8c\u6210\u6d77\u91cf\u5386\u53f2\u6570\u636e\u8fc1\u79fb\uff0c\u5bf9 Doris \u7684\u96c6\u7fa4\u8d44\u6e90\u5360\u7528\u8981\u6bd4\u8f83\u5927\uff0c\u8fd9\u79cd\u65b9\u5f0f\u662f\u5728\u7528\u6237\u6ca1\u6709 Spark \u8fd9\u79cd\u8ba1\u7b97\u8d44\u6e90\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\uff0c\u5982\u679c\u6709 Spark \u8ba1\u7b97\u8d44\u6e90\u5efa\u8bae\u4f7f\u7528   ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/data-operate/import/import-way/spark-load-manual"},"Spark load"),"\u3002"),(0,r.kt)("p",null,"\u7528\u6237\u9700\u8981\u901a\u8fc7 MySQL \u534f\u8bae \u521b\u5efa ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD"},"Broker load")," \u5bfc\u5165\uff0c\u5e76\u901a\u8fc7\u67e5\u770b\u5bfc\u5165\u547d\u4ee4\u68c0\u67e5\u5bfc\u5165\u7ed3\u679c\u3002"),(0,r.kt)("h2",{id:"\u9002\u7528\u573a\u666f"},"\u9002\u7528\u573a\u666f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6e90\u6570\u636e\u5728 Broker \u53ef\u4ee5\u8bbf\u95ee\u7684\u5b58\u50a8\u7cfb\u7edf\u4e2d\uff0c\u5982 HDFS\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u91cf\u5728 \u51e0\u5341\u5230\u767eGB \u7ea7\u522b\u3002")),(0,r.kt)("h2",{id:"\u57fa\u672c\u539f\u7406"},"\u57fa\u672c\u539f\u7406"),(0,r.kt)("p",null,"\u7528\u6237\u5728\u63d0\u4ea4\u5bfc\u5165\u4efb\u52a1\u540e\uff0cFE \u4f1a\u751f\u6210\u5bf9\u5e94\u7684 Plan \u5e76\u6839\u636e\u76ee\u524d BE \u7684\u4e2a\u6570\u548c\u6587\u4ef6\u7684\u5927\u5c0f\uff0c\u5c06 Plan \u5206\u7ed9 \u591a\u4e2a BE \u6267\u884c\uff0c\u6bcf\u4e2a BE \u6267\u884c\u4e00\u90e8\u5206\u5bfc\u5165\u6570\u636e\u3002"),(0,r.kt)("p",null,"BE \u5728\u6267\u884c\u7684\u8fc7\u7a0b\u4e2d\u4f1a\u4ece Broker \u62c9\u53d6\u6570\u636e\uff0c\u5728\u5bf9\u6570\u636e transform \u4e4b\u540e\u5c06\u6570\u636e\u5bfc\u5165\u7cfb\u7edf\u3002\u6240\u6709 BE \u5747\u5b8c\u6210\u5bfc\u5165\uff0c\u7531 FE \u6700\u7ec8\u51b3\u5b9a\u5bfc\u5165\u662f\u5426\u6210\u529f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                 +\n                 | 1. user create broker load\n                 v\n            +----+----+\n            |         |\n            |   FE    |\n            |         |\n            +----+----+\n                 |\n                 | 2. BE etl and load the data\n    +--------------------------+\n    |            |             |\n+---v---+     +--v----+    +---v---+\n|       |     |       |    |       |\n|  BE   |     |  BE   |    |   BE  |\n|       |     |       |    |       |\n+---+-^-+     +---+-^-+    +--+-^--+\n    | |           | |         | |\n    | |           | |         | | 3. pull data from broker\n+---v-+-+     +---v-+-+    +--v-+--+\n|       |     |       |    |       |\n|Broker |     |Broker |    |Broker |\n|       |     |       |    |       |\n+---+-^-+     +---+-^-+    +---+-^-+\n    | |           | |          | |\n+---v-+-----------v-+----------v-+-+\n|       HDFS/BOS/AFS cluster       |\n|                                  |\n+----------------------------------+\n\n")),(0,r.kt)("h2",{id:"\u5f00\u59cb\u5bfc\u5165"},"\u5f00\u59cb\u5bfc\u5165"),(0,r.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u901a\u8fc7\u51e0\u4e2a\u5b9e\u9645\u7684\u573a\u666f\u793a\u4f8b\u6765\u770b ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD"},"Broker Load")," \u7684\u4f7f\u7528"),(0,r.kt)("h3",{id:"hive-\u5206\u533a\u8868\u7684\u6570\u636e\u5bfc\u5165"},"Hive \u5206\u533a\u8868\u7684\u6570\u636e\u5bfc\u5165"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa Hive \u8868")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"##\u6570\u636e\u683c\u5f0f\u662f\uff1a\u9ed8\u8ba4\uff0c\u5206\u533a\u5b57\u6bb5\u662f\uff1aday\nCREATE TABLE `ods_demo_detail`(\n  `id` string, \n  `store_id` string, \n  `company_id` string, \n  `tower_id` string, \n  `commodity_id` string, \n  `commodity_name` string, \n  `commodity_price` double, \n  `member_price` double, \n  `cost_price` double, \n  `unit` string, \n  `quantity` double, \n  `actual_price` double\n)\nPARTITIONED BY (day string)\nrow format delimited fields terminated by ','\nlines terminated by '\\n'\n")),(0,r.kt)("p",null,"\u7136\u540e\u4f7f\u7528 Hive \u7684 Load \u547d\u4ee4\u5c06\u4f60\u7684\u6570\u636e\u5bfc\u5165\u5230 Hive \u8868\u4e2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"load data local inpath '/opt/custorm' into table ods_demo_detail;\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa Doris \u8868\uff0c\u5177\u4f53\u5efa\u8868\u8bed\u6cd5\u53c2\u7167\uff1a",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE TABLE"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'CREATE TABLE `doris_ods_test_detail` (\n  `rq` date NULL,\n  `id` varchar(32) NOT NULL,\n  `store_id` varchar(32) NULL,\n  `company_id` varchar(32) NULL,\n  `tower_id` varchar(32) NULL,\n  `commodity_id` varchar(32) NULL,\n  `commodity_name` varchar(500) NULL,\n  `commodity_price` decimal(10, 2) NULL,\n  `member_price` decimal(10, 2) NULL,\n  `cost_price` decimal(10, 2) NULL,\n  `unit` varchar(50) NULL,\n  `quantity` int(11) NULL,\n  `actual_price` decimal(10, 2) NULL\n) ENGINE=OLAP\nUNIQUE KEY(`rq`, `id`, `store_id`)\nPARTITION BY RANGE(`rq`)\n(\nPARTITION P_202204 VALUES [(\'2022-04-01\'), (\'2022-05-01\')))\nDISTRIBUTED BY HASH(`store_id`) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3",\n"dynamic_partition.enable" = "true",\n"dynamic_partition.time_unit" = "MONTH",\n"dynamic_partition.start" = "-2147483648",\n"dynamic_partition.end" = "2",\n"dynamic_partition.prefix" = "P_",\n"dynamic_partition.buckets" = "1",\n"in_memory" = "false",\n"storage_format" = "V2"\n);\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5f00\u59cb\u5bfc\u5165\u6570\u636e"),(0,r.kt)("p",{parentName:"li"},"\u5177\u4f53\u8bed\u6cd5\u53c2\u7167\uff1a ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD"},"Broker Load")," "))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL broker_load_2022_03_23\n(\n    DATA INFILE("hdfs://192.168.20.123:8020/user/hive/warehouse/ods.db/ods_demo_detail/*/*")\n    INTO TABLE doris_ods_test_detail\n    COLUMNS TERMINATED BY ","\n  (id,store_id,company_id,tower_id,commodity_id,commodity_name,commodity_price,member_price,cost_price,unit,quantity,actual_price) \n    COLUMNS FROM PATH AS (`day`)\n   SET \n   (rq = str_to_date(`day`,\'%Y-%m-%d\'),id=id,store_id=store_id,company_id=company_id,tower_id=tower_id,commodity_id=commodity_id,commodity_name=commodity_name,commodity_price=commodity_price,member_price=member_price,cost_price=cost_price,unit=unit,quantity=quantity,actual_price=actual_price)\n    )\nWITH BROKER "broker_name_1" \n    ( \n      "username" = "hdfs", \n      "password" = "" \n    )\nPROPERTIES\n(\n    "timeout"="1200",\n    "max_filter_ratio"="0.1"\n);\n')),(0,r.kt)("h3",{id:"hive-\u5206\u533a\u8868\u5bfc\u5165orc\u683c\u5f0f"},"Hive \u5206\u533a\u8868\u5bfc\u5165(ORC\u683c\u5f0f)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efaHive\u5206\u533a\u8868\uff0cORC\u683c\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"#\u6570\u636e\u683c\u5f0f:ORC \u5206\u533a:day\nCREATE TABLE `ods_demo_orc_detail`(\n  `id` string, \n  `store_id` string, \n  `company_id` string, \n  `tower_id` string, \n  `commodity_id` string, \n  `commodity_name` string, \n  `commodity_price` double, \n  `member_price` double, \n  `cost_price` double, \n  `unit` string, \n  `quantity` double, \n  `actual_price` double\n)\nPARTITIONED BY (day string)\nrow format delimited fields terminated by ','\nlines terminated by '\\n'\nSTORED AS ORC\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efaDoris\u8868\uff0c\u8fd9\u91cc\u7684\u5efa\u8868\u8bed\u53e5\u548c\u4e0a\u9762\u7684Doris\u5efa\u8868\u8bed\u53e5\u4e00\u6837\uff0c\u8bf7\u53c2\u8003\u4e0a\u9762\u7684.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 Broker Load \u5bfc\u5165\u6570\u636e"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL dish_2022_03_23\n(\n    DATA INFILE("hdfs://10.220.147.151:8020/user/hive/warehouse/ods.db/ods_demo_orc_detail/*/*")\n    INTO TABLE doris_ods_test_detail\n    COLUMNS TERMINATED BY ","\n    FORMAT AS "orc"\n(id,store_id,company_id,tower_id,commodity_id,commodity_name,commodity_price,member_price,cost_price,unit,quantity,actual_price) \n    COLUMNS FROM PATH AS (`day`)\n   SET \n   (rq = str_to_date(`day`,\'%Y-%m-%d\'),id=id,store_id=store_id,company_id=company_id,tower_id=tower_id,commodity_id=commodity_id,commodity_name=commodity_name,commodity_price=commodity_price,member_price=member_price,cost_price=cost_price,unit=unit,quantity=quantity,actual_price=actual_price)\n    )\nWITH BROKER "broker_name_1" \n    ( \n      "username" = "hdfs", \n      "password" = "" \n    )\nPROPERTIES\n(\n    "timeout"="1200",\n    "max_filter_ratio"="0.1"\n);\n')),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'FORMAT AS "orc"')," : \u8fd9\u91cc\u6211\u4eec\u6307\u5b9a\u4e86\u8981\u5bfc\u5165\u7684\u6570\u636e\u683c\u5f0f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SET")," : \u8fd9\u91cc\u6211\u4eec\u5b9a\u4e49\u4e86 Hive \u8868\u548c Doris \u8868\u4e4b\u95f4\u7684\u5b57\u6bb5\u6620\u5c04\u5173\u7cfb\u53ca\u5b57\u6bb5\u8f6c\u6362\u7684\u4e00\u4e9b\u64cd\u4f5c")))),(0,r.kt)("h3",{id:"hdfs\u6587\u4ef6\u7cfb\u7edf\u6570\u636e\u5bfc\u5165"},"HDFS\u6587\u4ef6\u7cfb\u7edf\u6570\u636e\u5bfc\u5165"),(0,r.kt)("p",null,"\u6211\u4eec\u7ee7\u7eed\u4ee5\u4e0a\u9762\u521b\u5efa\u597d\u7684 Doris \u8868\u4e3a\u4f8b\uff0c\u6f14\u793a\u901a\u8fc7 Broker Load \u4ece HDFS \u4e0a\u5bfc\u5165\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u5bfc\u5165\u4f5c\u4e1a\u7684\u8bed\u53e5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL demo.label_20220402\n        (\n            DATA INFILE("hdfs://10.220.147.151:8020/tmp/test_hdfs.txt")\n            INTO TABLE `ods_dish_detail_test`\n            COLUMNS TERMINATED BY "\\t"            (id,store_id,company_id,tower_id,commodity_id,commodity_name,commodity_price,member_price,cost_price,unit,quantity,actual_price)\n        ) \n        with HDFS (\n            "fs.defaultFS"="hdfs://10.220.147.151:8020",\n            "hadoop.username"="root"\n        )\n        PROPERTIES\n        (\n            "timeout"="1200",\n            "max_filter_ratio"="0.1"\n        );\n')),(0,r.kt)("p",null,"\u8fd9\u91cc\u7684\u5177\u4f53 \u53c2\u6570\u53ef\u4ee5\u53c2\u7167\uff1a  ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/advanced/broker"},"Broker"),"  \u53ca ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD"},"Broker Load")," \u6587\u6863"),(0,r.kt)("h2",{id:"\u67e5\u770b\u5bfc\u5165\u72b6\u6001"},"\u67e5\u770b\u5bfc\u5165\u72b6\u6001"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u547d\u4ee4\u67e5\u770b\u4e0a\u9762\u5bfc\u5165\u4efb\u52a1\u7684\u72b6\u6001\u4fe1\u606f\uff0c"),(0,r.kt)("p",null,"\u5177\u4f53\u7684\u67e5\u770b\u5bfc\u5165\u72b6\u6001\u7684\u8bed\u6cd5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-LOAD"},"SHOW LOAD")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> show load order by createtime desc limit 1\\G;\n*************************** 1. row ***************************\n         JobId: 41326624\n         Label: broker_load_2022_03_23\n         State: FINISHED\n      Progress: ETL:100%; LOAD:100%\n          Type: BROKER\n       EtlInfo: unselected.rows=0; dpp.abnorm.ALL=0; dpp.norm.ALL=27\n      TaskInfo: cluster:N/A; timeout(s):1200; max_filter_ratio:0.1\n      ErrorMsg: NULL\n    CreateTime: 2022-04-01 18:59:06\n  EtlStartTime: 2022-04-01 18:59:11\n EtlFinishTime: 2022-04-01 18:59:11\n LoadStartTime: 2022-04-01 18:59:11\nLoadFinishTime: 2022-04-01 18:59:11\n           URL: NULL\n    JobDetails: {"Unfinished backends":{"5072bde59b74b65-8d2c0ee5b029adc0":[]},"ScannedRows":27,"TaskNumber":1,"All backends":{"5072bde59b74b65-8d2c0ee5b029adc0":[36728051]},"FileNumber":1,"FileSize":5540}\n1 row in set (0.01 sec)\n')),(0,r.kt)("h2",{id:"\u53d6\u6d88\u5bfc\u5165"},"\u53d6\u6d88\u5bfc\u5165"),(0,r.kt)("p",null,"\u5f53 Broker load \u4f5c\u4e1a\u72b6\u6001\u4e0d\u4e3a CANCELLED \u6216 FINISHED \u65f6\uff0c\u53ef\u4ee5\u88ab\u7528\u6237\u624b\u52a8\u53d6\u6d88\u3002\u53d6\u6d88\u65f6\u9700\u8981\u6307\u5b9a\u5f85\u53d6\u6d88\u5bfc\u5165\u4efb\u52a1\u7684 Label \u3002\u53d6\u6d88\u5bfc\u5165\u547d\u4ee4\u8bed\u6cd5\u53ef\u6267\u884c ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CANCEL-LOAD"},"CANCEL LOAD")," \u67e5\u770b\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a\u64a4\u9500\u6570\u636e\u5e93 demo \u4e0a\uff0c label \u4e3a broker_load_2022_03_23 \u7684\u5bfc\u5165\u4f5c\u4e1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CANCEL LOAD FROM demo WHERE LABEL = "broker_load_2022_03_23";\n')),(0,r.kt)("h2",{id:"\u76f8\u5173\u7cfb\u7edf\u914d\u7f6e"},"\u76f8\u5173\u7cfb\u7edf\u914d\u7f6e"),(0,r.kt)("h3",{id:"broker-\u53c2\u6570"},"Broker \u53c2\u6570"),(0,r.kt)("p",null,"Broker Load \u9700\u8981\u501f\u52a9 Broker \u8fdb\u7a0b\u8bbf\u95ee\u8fdc\u7aef\u5b58\u50a8\uff0c\u4e0d\u540c\u7684 Broker \u9700\u8981\u63d0\u4f9b\u4e0d\u540c\u7684\u53c2\u6570\uff0c\u5177\u4f53\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/advanced/broker"},"Broker\u6587\u6863")," \u3002"),(0,r.kt)("h3",{id:"fe-\u914d\u7f6e"},"FE \u914d\u7f6e"),(0,r.kt)("p",null,"\u4e0b\u9762\u51e0\u4e2a\u914d\u7f6e\u5c5e\u4e8e Broker load \u7684\u7cfb\u7edf\u7ea7\u522b\u914d\u7f6e\uff0c\u4e5f\u5c31\u662f\u4f5c\u7528\u4e8e\u6240\u6709 Broker load \u5bfc\u5165\u4efb\u52a1\u7684\u914d\u7f6e\u3002\u4e3b\u8981\u901a\u8fc7\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"fe.conf"),"\u6765\u8c03\u6574\u914d\u7f6e\u503c\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"min_bytes_per_broker_scanner/max_bytes_per_broker_scanner/max_broker_concurrency"),(0,r.kt)("p",{parentName:"li"},"\u524d\u4e24\u4e2a\u914d\u7f6e\u9650\u5236\u4e86\u5355\u4e2a BE \u5904\u7406\u7684\u6570\u636e\u91cf\u7684\u6700\u5c0f\u548c\u6700\u5927\u503c\u3002\u7b2c\u4e09\u4e2a\u914d\u7f6e\u9650\u5236\u4e86\u4e00\u4e2a\u4f5c\u4e1a\u7684\u6700\u5927\u7684\u5bfc\u5165\u5e76\u53d1\u6570\u3002\u6700\u5c0f\u5904\u7406\u7684\u6570\u636e\u91cf\uff0c\u6700\u5927\u5e76\u53d1\u6570\uff0c\u6e90\u6587\u4ef6\u7684\u5927\u5c0f\u548c\u5f53\u524d\u96c6\u7fa4 BE \u7684\u4e2a\u6570 ",(0,r.kt)("strong",{parentName:"p"},"\u5171\u540c\u51b3\u5b9a\u4e86\u672c\u6b21\u5bfc\u5165\u7684\u5e76\u53d1\u6570"),"\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u672c\u6b21\u5bfc\u5165\u5e76\u53d1\u6570 = Math.min(\u6e90\u6587\u4ef6\u5927\u5c0f/\u6700\u5c0f\u5904\u7406\u91cf\uff0c\u6700\u5927\u5e76\u53d1\u6570\uff0c\u5f53\u524dBE\u8282\u70b9\u4e2a\u6570)\n\u672c\u6b21\u5bfc\u5165\u5355\u4e2aBE\u7684\u5904\u7406\u91cf = \u6e90\u6587\u4ef6\u5927\u5c0f/\u672c\u6b21\u5bfc\u5165\u7684\u5e76\u53d1\u6570\n")),(0,r.kt)("p",{parentName:"li"},"\u901a\u5e38\u4e00\u4e2a\u5bfc\u5165\u4f5c\u4e1a\u652f\u6301\u7684\u6700\u5927\u6570\u636e\u91cf\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"max_bytes_per_broker_scanner * BE \u8282\u70b9\u6570"),"\u3002\u5982\u679c\u9700\u8981\u5bfc\u5165\u66f4\u5927\u6570\u636e\u91cf\uff0c\u5219\u9700\u8981\u9002\u5f53\u8c03\u6574 ",(0,r.kt)("inlineCode",{parentName:"p"},"max_bytes_per_broker_scanner")," \u53c2\u6570\u7684\u5927\u5c0f\u3002"),(0,r.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u914d\u7f6e\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u53c2\u6570\u540d\uff1amin_bytes_per_broker_scanner\uff0c \u9ed8\u8ba4 64MB\uff0c\u5355\u4f4dbytes\u3002\n\u53c2\u6570\u540d\uff1amax_broker_concurrency\uff0c \u9ed8\u8ba4 10\u3002\n\u53c2\u6570\u540d\uff1amax_bytes_per_broker_scanner\uff0c\u9ed8\u8ba4 3G\uff0c\u5355\u4f4dbytes\u3002\n")))),(0,r.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,r.kt)("h3",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,r.kt)("p",null,"\u4f7f\u7528 Broker load \u6700\u9002\u5408\u7684\u573a\u666f\u5c31\u662f\u539f\u59cb\u6570\u636e\u5728\u6587\u4ef6\u7cfb\u7edf\uff08HDFS\uff0cBOS\uff0cAFS\uff09\u4e2d\u7684\u573a\u666f\u3002\u5176\u6b21\uff0c\u7531\u4e8e Broker load \u662f\u5355\u6b21\u5bfc\u5165\u4e2d\u552f\u4e00\u7684\u4e00\u79cd\u5f02\u6b65\u5bfc\u5165\u7684\u65b9\u5f0f\uff0c\u6240\u4ee5\u5982\u679c\u7528\u6237\u5728\u5bfc\u5165\u5927\u6587\u4ef6\u4e2d\uff0c\u9700\u8981\u4f7f\u7528\u5f02\u6b65\u63a5\u5165\uff0c\u4e5f\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 Broker load\u3002"),(0,r.kt)("h3",{id:"\u6570\u636e\u91cf"},"\u6570\u636e\u91cf"),(0,r.kt)("p",null,"\u8fd9\u91cc\u4ec5\u8ba8\u8bba\u5355\u4e2a BE \u7684\u60c5\u51b5\uff0c\u5982\u679c\u7528\u6237\u96c6\u7fa4\u6709\u591a\u4e2a BE \u5219\u4e0b\u9762\u6807\u9898\u4e2d\u7684\u6570\u636e\u91cf\u5e94\u8be5\u4e58\u4ee5 BE \u4e2a\u6570\u6765\u8ba1\u7b97\u3002\u6bd4\u5982\uff1a\u5982\u679c\u7528\u6237\u67093\u4e2a BE\uff0c\u5219 3G \u4ee5\u4e0b\uff08\u5305\u542b\uff09\u5219\u5e94\u8be5\u4e58\u4ee5 3\uff0c\u4e5f\u5c31\u662f 9G \u4ee5\u4e0b\uff08\u5305\u542b\uff09\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"3G \u4ee5\u4e0b\uff08\u5305\u542b\uff09"),(0,r.kt)("p",{parentName:"li"},"\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u63d0\u4ea4 Broker load \u521b\u5efa\u5bfc\u5165\u8bf7\u6c42\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"3G \u4ee5\u4e0a"),(0,r.kt)("p",{parentName:"li"},"\u7531\u4e8e\u5355\u4e2a\u5bfc\u5165 BE \u6700\u5927\u7684\u5904\u7406\u91cf\u4e3a 3G\uff0c\u8d85\u8fc7 3G \u7684\u5f85\u5bfc\u5165\u6587\u4ef6\u5c31\u9700\u8981\u901a\u8fc7\u8c03\u6574 Broker load \u7684\u5bfc\u5165\u53c2\u6570\u6765\u5b9e\u73b0\u5927\u6587\u4ef6\u7684\u5bfc\u5165\u3002"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6839\u636e\u5f53\u524d BE \u7684\u4e2a\u6570\u548c\u539f\u59cb\u6587\u4ef6\u7684\u5927\u5c0f\u4fee\u6539\u5355\u4e2a BE \u7684\u6700\u5927\u626b\u63cf\u91cf\u548c\u6700\u5927\u5e76\u53d1\u6570\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u4fee\u6539 fe.conf \u4e2d\u914d\u7f6e\nmax_broker_concurrency = BE \u4e2a\u6570\n\u5f53\u524d\u5bfc\u5165\u4efb\u52a1\u5355\u4e2a BE \u5904\u7406\u7684\u6570\u636e\u91cf = \u539f\u59cb\u6587\u4ef6\u5927\u5c0f / max_broker_concurrency\nmax_bytes_per_broker_scanner >= \u5f53\u524d\u5bfc\u5165\u4efb\u52a1\u5355\u4e2a BE \u5904\u7406\u7684\u6570\u636e\u91cf\n\n\u6bd4\u5982\u4e00\u4e2a 100G \u7684\u6587\u4ef6\uff0c\u96c6\u7fa4\u7684 BE \u4e2a\u6570\u4e3a 10 \u4e2a\nmax_broker_concurrency = 10\nmax_bytes_per_broker_scanner >= 10G = 100G / 10\n")),(0,r.kt)("p",{parentName:"li"},"\u4fee\u6539\u540e\uff0c\u6240\u6709\u7684 BE \u4f1a\u5e76\u53d1\u7684\u5904\u7406\u5bfc\u5165\u4efb\u52a1\uff0c\u6bcf\u4e2a BE \u5904\u7406\u539f\u59cb\u6587\u4ef6\u7684\u4e00\u90e8\u5206\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"\u6ce8\u610f\uff1a\u4e0a\u8ff0\u4e24\u4e2a FE \u4e2d\u7684\u914d\u7f6e\u5747\u4e3a\u7cfb\u7edf\u914d\u7f6e\uff0c\u4e5f\u5c31\u662f\u8bf4\u5176\u4fee\u6539\u662f\u4f5c\u7528\u4e8e\u6240\u6709\u7684 Broker load\u7684\u4efb\u52a1\u7684\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u521b\u5efa\u5bfc\u5165\u7684\u65f6\u5019\u81ea\u5b9a\u4e49\u5f53\u524d\u5bfc\u5165\u4efb\u52a1\u7684 timeout \u65f6\u95f4"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u5f53\u524d\u5bfc\u5165\u4efb\u52a1\u5355\u4e2a BE \u5904\u7406\u7684\u6570\u636e\u91cf / \u7528\u6237 Doris \u96c6\u7fa4\u6700\u6162\u5bfc\u5165\u901f\u5ea6(MB/s) >= \u5f53\u524d\u5bfc\u5165\u4efb\u52a1\u7684 timeout \u65f6\u95f4 >= \u5f53\u524d\u5bfc\u5165\u4efb\u52a1\u5355\u4e2a BE \u5904\u7406\u7684\u6570\u636e\u91cf / 10M/s\n\n\u6bd4\u5982\u4e00\u4e2a 100G \u7684\u6587\u4ef6\uff0c\u96c6\u7fa4\u7684 BE \u4e2a\u6570\u4e3a 10\u4e2a\ntimeout >= 1000s = 10G / 10M/s\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5f53\u7528\u6237\u53d1\u73b0\u7b2c\u4e8c\u6b65\u8ba1\u7b97\u51fa\u7684 timeout \u65f6\u95f4\u8d85\u8fc7\u7cfb\u7edf\u9ed8\u8ba4\u7684\u5bfc\u5165\u6700\u5927\u8d85\u65f6\u65f6\u95f4 4\u5c0f\u65f6"),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u65f6\u5019\u4e0d\u63a8\u8350\u7528\u6237\u5c06\u5bfc\u5165\u6700\u5927\u8d85\u65f6\u65f6\u95f4\u76f4\u63a5\u6539\u5927\u6765\u89e3\u51b3\u95ee\u9898\u3002\u5355\u4e2a\u5bfc\u5165\u65f6\u95f4\u5982\u679c\u8d85\u8fc7\u9ed8\u8ba4\u7684\u5bfc\u5165\u6700\u5927\u8d85\u65f6\u65f6\u95f44\u5c0f\u65f6\uff0c\u6700\u597d\u662f\u901a\u8fc7\u5207\u5206\u5f85\u5bfc\u5165\u6587\u4ef6\u5e76\u4e14\u5206\u591a\u6b21\u5bfc\u5165\u6765\u89e3\u51b3\u95ee\u9898\u3002\u4e3b\u8981\u539f\u56e0\u662f\uff1a\u5355\u6b21\u5bfc\u5165\u8d85\u8fc74\u5c0f\u65f6\u7684\u8bdd\uff0c\u5bfc\u5165\u5931\u8d25\u540e\u91cd\u8bd5\u7684\u65f6\u95f4\u6210\u672c\u5f88\u9ad8\u3002"),(0,r.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u516c\u5f0f\u8ba1\u7b97\u51fa Doris \u96c6\u7fa4\u671f\u671b\u6700\u5927\u5bfc\u5165\u6587\u4ef6\u6570\u636e\u91cf\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u671f\u671b\u6700\u5927\u5bfc\u5165\u6587\u4ef6\u6570\u636e\u91cf = 14400s * 10M/s * BE \u4e2a\u6570\n\u6bd4\u5982\uff1a\u96c6\u7fa4\u7684 BE \u4e2a\u6570\u4e3a 10\u4e2a\n\u671f\u671b\u6700\u5927\u5bfc\u5165\u6587\u4ef6\u6570\u636e\u91cf = 14400s * 10M/s * 10 = 1440000M \u2248 1440G\n\n\u6ce8\u610f\uff1a\u4e00\u822c\u7528\u6237\u7684\u73af\u5883\u53ef\u80fd\u8fbe\u4e0d\u5230 10M/s \u7684\u901f\u5ea6\uff0c\u6240\u4ee5\u5efa\u8bae\u8d85\u8fc7 500G \u7684\u6587\u4ef6\u90fd\u8fdb\u884c\u6587\u4ef6\u5207\u5206\uff0c\u518d\u5bfc\u5165\u3002\n")))))),(0,r.kt)("h3",{id:"\u4f5c\u4e1a\u8c03\u5ea6"},"\u4f5c\u4e1a\u8c03\u5ea6"),(0,r.kt)("p",null,"\u7cfb\u7edf\u4f1a\u9650\u5236\u4e00\u4e2a\u96c6\u7fa4\u5185\uff0c\u6b63\u5728\u8fd0\u884c\u7684 Broker Load \u4f5c\u4e1a\u6570\u91cf\uff0c\u4ee5\u9632\u6b62\u540c\u65f6\u8fd0\u884c\u8fc7\u591a\u7684 Load \u4f5c\u4e1a\u3002"),(0,r.kt)("p",null,"\u9996\u5148\uff0c FE \u7684\u914d\u7f6e\u53c2\u6570\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"desired_max_waiting_jobs")," \u4f1a\u9650\u5236\u4e00\u4e2a\u96c6\u7fa4\u5185\uff0c\u672a\u5f00\u59cb\u6216\u6b63\u5728\u8fd0\u884c\uff08\u4f5c\u4e1a\u72b6\u6001\u4e3a PENDING \u6216 LOADING\uff09\u7684 Broker Load \u4f5c\u4e1a\u6570\u91cf\u3002\u9ed8\u8ba4\u4e3a 100\u3002\u5982\u679c\u8d85\u8fc7\u8fd9\u4e2a\u9608\u503c\uff0c\u65b0\u63d0\u4ea4\u7684\u4f5c\u4e1a\u5c06\u4f1a\u88ab\u76f4\u63a5\u62d2\u7edd\u3002"),(0,r.kt)("p",null,"\u4e00\u4e2a Broker Load \u4f5c\u4e1a\u4f1a\u88ab\u5206\u4e3a pending task \u548c loading task \u9636\u6bb5\u3002\u5176\u4e2d pending task \u8d1f\u8d23\u83b7\u53d6\u5bfc\u5165\u6587\u4ef6\u7684\u4fe1\u606f\uff0c\u800c loading task \u4f1a\u53d1\u9001\u7ed9BE\u6267\u884c\u5177\u4f53\u7684\u5bfc\u5165\u4efb\u52a1\u3002"),(0,r.kt)("p",null,"FE \u7684\u914d\u7f6e\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"async_pending_load_task_pool_size")," \u7528\u4e8e\u9650\u5236\u540c\u65f6\u8fd0\u884c\u7684 pending task \u7684\u4efb\u52a1\u6570\u91cf\u3002\u4e5f\u76f8\u5f53\u4e8e\u63a7\u5236\u4e86\u5b9e\u9645\u6b63\u5728\u8fd0\u884c\u7684\u5bfc\u5165\u4efb\u52a1\u6570\u91cf\u3002\u8be5\u53c2\u6570\u9ed8\u8ba4\u4e3a 10\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5047\u8bbe\u7528\u6237\u63d0\u4ea4\u4e86100\u4e2aLoad\u4f5c\u4e1a\uff0c\u540c\u65f6\u53ea\u4f1a\u670910\u4e2a\u4f5c\u4e1a\u4f1a\u8fdb\u5165 LOADING \u72b6\u6001\u5f00\u59cb\u6267\u884c\uff0c\u800c\u5176\u4ed6\u4f5c\u4e1a\u5904\u4e8e PENDING \u7b49\u5f85\u72b6\u6001\u3002"),(0,r.kt)("p",null,"FE \u7684\u914d\u7f6e\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"async_loading_load_task_pool_size")," \u7528\u4e8e\u9650\u5236\u540c\u65f6\u8fd0\u884c\u7684 loading task \u7684\u4efb\u52a1\u6570\u91cf\u3002\u4e00\u4e2a Broker Load \u4f5c\u4e1a\u4f1a\u6709 1 \u4e2a pending task \u548c\u591a\u4e2a loading task \uff08\u7b49\u4e8e LOAD \u8bed\u53e5\u4e2d DATA INFILE \u5b50\u53e5\u7684\u4e2a\u6570\uff09\u3002\u6240\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"async_loading_load_task_pool_size")," \u5e94\u8be5\u5927\u4e8e\u7b49\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"async_pending_load_task_pool_size"),"\u3002"),(0,r.kt)("h3",{id:"\u6027\u80fd\u5206\u6790"},"\u6027\u80fd\u5206\u6790"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5728\u63d0\u4ea4 LOAD \u4f5c\u4e1a\u524d\uff0c\u5148\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"set enable_profile=true")," \u6253\u5f00\u4f1a\u8bdd\u53d8\u91cf\u3002\u7136\u540e\u63d0\u4ea4\u5bfc\u5165\u4f5c\u4e1a\u3002\u5f85\u5bfc\u5165\u4f5c\u4e1a\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u5728 FE \u7684 web \u9875\u9762\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Queris")," \u6807\u7b7e\u4e2d\u67e5\u770b\u5230\u5bfc\u5165\u4f5c\u4e1a\u7684 Profile\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u67e5\u770b ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-PROFILE"},"SHOW LOAD PROFILE")," \u5e2e\u52a9\u6587\u6863\uff0c\u83b7\u53d6\u66f4\u591a\u4f7f\u7528\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e2a Profile \u53ef\u4ee5\u5e2e\u52a9\u5206\u6790\u5bfc\u5165\u4f5c\u4e1a\u7684\u8fd0\u884c\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u5f53\u524d\u53ea\u6709\u4f5c\u4e1a\u6210\u529f\u6267\u884c\u540e\uff0c\u624d\u80fd\u67e5\u770b Profile"),(0,r.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bfc\u5165\u62a5\u9519\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"Scan bytes per broker scanner exceed limit:xxx")),(0,r.kt)("p",{parentName:"li"},"\u8bf7\u53c2\u7167\u6587\u6863\u4e2d\u6700\u4f73\u5b9e\u8df5\u90e8\u5206\uff0c\u4fee\u6539 FE \u914d\u7f6e\u9879 ",(0,r.kt)("inlineCode",{parentName:"p"},"max_bytes_per_broker_scanner")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"max_broker_concurrency"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bfc\u5165\u62a5\u9519\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"failed to send batch")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"TabletWriter add batch with unknown id")),(0,r.kt)("p",{parentName:"li"},"\u9002\u5f53\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"query_timeout")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"streaming_load_rpc_max_alive_time_sec"),"\u3002"),(0,r.kt)("p",{parentName:"li"},"streaming_load_rpc_max_alive_time_sec\uff1a"),(0,r.kt)("p",{parentName:"li"},"\u5728\u5bfc\u5165\u8fc7\u7a0b\u4e2d\uff0cDoris \u4f1a\u4e3a\u6bcf\u4e00\u4e2a Tablet \u5f00\u542f\u4e00\u4e2a Writer\uff0c\u7528\u4e8e\u63a5\u6536\u6570\u636e\u5e76\u5199\u5165\u3002\u8fd9\u4e2a\u53c2\u6570\u6307\u5b9a\u4e86 Writer \u7684\u7b49\u5f85\u8d85\u65f6\u65f6\u95f4\u3002\u5982\u679c\u5728\u8fd9\u4e2a\u65f6\u95f4\u5185\uff0cWriter \u6ca1\u6709\u6536\u5230\u4efb\u4f55\u6570\u636e\uff0c\u5219 Writer \u4f1a\u88ab\u81ea\u52a8\u9500\u6bc1\u3002\u5f53\u7cfb\u7edf\u5904\u7406\u901f\u5ea6\u8f83\u6162\u65f6\uff0cWriter \u53ef\u80fd\u957f\u65f6\u95f4\u63a5\u6536\u4e0d\u5230\u4e0b\u4e00\u6279\u6570\u636e\uff0c\u5bfc\u81f4\u5bfc\u5165\u62a5\u9519\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"TabletWriter add batch with unknown id"),"\u3002\u6b64\u65f6\u53ef\u9002\u5f53\u589e\u5927\u8fd9\u4e2a\u914d\u7f6e\u3002\u9ed8\u8ba4\u4e3a 600 \u79d2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bfc\u5165\u62a5\u9519\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD_RUN_FAIL; msg:Invalid Column Name:xxx")),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u662fPARQUET\u6216\u8005ORC\u683c\u5f0f\u7684\u6570\u636e,\u9700\u8981\u518d\u6587\u4ef6\u5934\u7684\u5217\u540d\u4e0edoris\u8868\u4e2d\u7684\u5217\u540d\u4e00\u81f4\uff0c\u5982 :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"(tmp_c1,tmp_c2)\nSET\n(\n    id=tmp_c2,\n    name=tmp_c1\n)\n")),(0,r.kt)("p",{parentName:"li"},"\u4ee3\u8868\u83b7\u53d6\u5728 parquet \u6216 orc \u4e2d\u4ee5(tmp_c1, tmp_c2)\u4e3a\u5217\u540d\u7684\u5217\uff0c\u6620\u5c04\u5230 doris \u8868\u4e2d\u7684(id, name)\u5217\u3002\u5982\u679c\u6ca1\u6709\u8bbe\u7f6eset, \u5219\u4ee5column\u4e2d\u7684\u5217\u4f5c\u4e3a\u6620\u5c04\u3002"),(0,r.kt)("p",{parentName:"li"},"\u6ce8\uff1a\u5982\u679c\u4f7f\u7528\u67d0\u4e9b hive \u7248\u672c\u76f4\u63a5\u751f\u6210\u7684 orc \u6587\u4ef6\uff0corc \u6587\u4ef6\u4e2d\u7684\u8868\u5934\u5e76\u975e hive meta \u6570\u636e\uff0c\u800c\u662f\uff08_col0, _col1, _col2, ...\uff09, \u53ef\u80fd\u5bfc\u81f4 Invalid Column Name \u9519\u8bef\uff0c\u90a3\u4e48\u5219\u9700\u8981\u4f7f\u7528 set \u8fdb\u884c\u6620\u5c04"))),(0,r.kt)("h2",{id:"\u66f4\u591a\u5e2e\u52a9"},"\u66f4\u591a\u5e2e\u52a9"),(0,r.kt)("p",null,"\u5173\u4e8e Broker Load \u4f7f\u7528\u7684\u66f4\u591a\u8be6\u7ec6\u8bed\u6cd5\u53ca\u6700\u4f73\u5b9e\u8df5\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD"},"Broker Load")," \u547d\u4ee4\u624b\u518c\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728 MySql \u5ba2\u6237\u7aef\u547d\u4ee4\u884c\u4e0b\u8f93\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"HELP BROKER LOAD")," \u83b7\u53d6\u66f4\u591a\u5e2e\u52a9\u4fe1\u606f\u3002"))}c.isMDXComponent=!0}}]);