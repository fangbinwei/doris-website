"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[6385],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,u=d["".concat(s,".").concat(h)]||d[h]||m[h]||i;return n?a.createElement(u,l(l({ref:t},p),{},{components:n})):a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},30275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={title:"Binlog Load",language:"en"},l=void 0,r={unversionedId:"data-operate/import/import-way/binlog-load-manual",id:"data-operate/import/import-way/binlog-load-manual",title:"Binlog Load",description:"\x3c!--",source:"@site/docs/data-operate/import/import-way/binlog-load-manual.md",sourceDirName:"data-operate/import/import-way",slug:"/data-operate/import/import-way/binlog-load-manual",permalink:"/docs/data-operate/import/import-way/binlog-load-manual",draft:!1,tags:[],version:"current",frontMatter:{title:"Binlog Load",language:"en"},sidebar:"docs",previous:{title:"import strict mode",permalink:"/docs/data-operate/import/import-scenes/load-strict-mode"},next:{title:"Broker Load",permalink:"/docs/data-operate/import/import-way/broker-load-manual"}},s={},c=[{value:"Scenarios",id:"scenarios",level:2},{value:"Principle",id:"principle",level:2},{value:"Configure MySQL Server",id:"configure-mysql-server",level:2},{value:"Principle Description",id:"principle-description",level:3},{value:"Open GTID mode (Optional)",id:"open-gtid-mode-optional",level:3},{value:"Configure Canal Server",id:"configure-canal-server",level:2},{value:"Canal End Description",id:"canal-end-description",level:3},{value:"Basic Operation",id:"basic-operation",level:2},{value:"Configure Target Table Properties",id:"configure-target-table-properties",level:3},{value:"Create SyncJob",id:"create-syncjob",level:3},{value:"Show Job Status",id:"show-job-status",level:3},{value:"Control Operation",id:"control-operation",level:3},{value:"Related Parameters",id:"related-parameters",level:2},{value:"Canal configuration",id:"canal-configuration",level:3},{value:"Fe configuration",id:"fe-configuration",level:3},{value:"FAQ",id:"faq",level:2},{value:"More Help",id:"more-help",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"binlog-load"},"Binlog Load"),(0,o.kt)("p",null,"The Binlog Load feature enables Doris to incrementally synchronize update operations in MySQL, so as to CDC(Change Data Capture) of data on Mysql."),(0,o.kt)("h2",{id:"scenarios"},"Scenarios"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support insert / update / delete operations"),(0,o.kt)("li",{parentName:"ul"},"Filter query"),(0,o.kt)("li",{parentName:"ul"},"Temporarily incompatible with DDL statements")),(0,o.kt)("h2",{id:"principle"},"Principle"),(0,o.kt)("p",null,"In the design of phase one, Binlog Load needs to rely on canal as an intermediate medium, so that canal can be pretended to be a slave node to get and parse the binlog on the MySQL master node, and then Doris can get the parsed data on the canal. This process mainly involves mysql, canal and Doris. The overall data flow is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+---------------------------------------------+\n|                    Mysql                    |\n+----------------------+----------------------+\n                       | Binlog\n+----------------------v----------------------+\n|                 Canal Server                |\n+-------------------+-----^-------------------+\n               Get  |     |  Ack\n+-------------------|-----|-------------------+\n| FE                |     |                   |\n| +-----------------|-----|----------------+  |\n| | Sync Job        |     |                |  |\n| |    +------------v-----+-----------+    |  |\n| |    | Canal Client                 |    |  |\n| |    |   +-----------------------+  |    |  |\n| |    |   |       Receiver        |  |    |  |\n| |    |   +-----------------------+  |    |  |\n| |    |   +-----------------------+  |    |  |\n| |    |   |       Consumer        |  |    |  |\n| |    |   +-----------------------+  |    |  |\n| |    +------------------------------+    |  |\n| +----+---------------+--------------+----+  |\n|      |               |              |       |\n| +----v-----+   +-----v----+   +-----v----+  |\n| | Channel1 |   | Channel2 |   | Channel3 |  |\n| | [Table1] |   | [Table2] |   | [Table3] |  |\n| +----+-----+   +-----+----+   +-----+----+  |\n|      |               |              |       |\n|   +--|-------+   +---|------+   +---|------+|\n|  +---v------+|  +----v-----+|  +----v-----+||\n| +----------+|+ +----------+|+ +----------+|+|\n| |   Task   |+  |   Task   |+  |   Task   |+ |\n| +----------+   +----------+   +----------+  |\n+----------------------+----------------------+\n     |                 |                  |\n+----v-----------------v------------------v---+\n|                 Coordinator                 |\n|                     BE                      |\n+----+-----------------+------------------+---+\n     |                 |                  |\n+----v---+         +---v----+        +----v---+\n|   BE   |         |   BE   |        |   BE   |\n+--------+         +--------+        +--------+\n\n")),(0,o.kt)("p",null,"As shown in the figure above, the user first submits a SyncJob to the Fe."),(0,o.kt)("p",null,"Then, Fe will start a Canal Client for each SyncJob to subscribe to and get data from the Canal Server."),(0,o.kt)("p",null,"The Receiver in the Canal Client will receives data by the GET request. Every time a Batch is received, it will be distributed by the Consumer to different Channels according to the corresponding target table. Once a channel received data distributed by Consumer, it will submit a send task for sending data."),(0,o.kt)("p",null,"A Send task is a request from Channel to Be, which contains the data of the same Batch distributed to the current channel."),(0,o.kt)("p",null,"Channel controls the begin, commit and abort of transaction of single table. In a transaction, the consumer may distribute multiple Batches of data to a channel, so multiple send tasks may be generated. These tasks will not actually take effect until the transaction is committed successfully."),(0,o.kt)("p",null,"When certain conditions are met (for example, a certain period of time was passed, reach the maximun data size of commit), the Consumer will block and notify each channel to try commit the transaction."),(0,o.kt)("p",null,"If and only if all channels are committed successfully, Canal Server will be notified by the ACK request and Canal Client continue to get and consume data."),(0,o.kt)("p",null,"If there are any Channel fails to commit, it will retrieve data from the location where the last consumption was successful and commit again (the Channel that has successfully commited before will not commmit again to ensure the idempotency of commit)."),(0,o.kt)("p",null,"In the whole cycle of a SyncJob, Canal Client continuously received data from Canal Server and send it to Be through the above process to complete data synchronization."),(0,o.kt)("h2",{id:"configure-mysql-server"},"Configure MySQL Server"),(0,o.kt)("p",null,"In the master-slave synchronization of MySQL Cluster mode, the binary log file (binlog) records all data changes on the master node. Data synchronization and backup among multiple nodes of the cluster should be carried out through binlog logs, so as to improve the availability of the cluster."),(0,o.kt)("p",null,"The architecture of master-slave synchronization is usually composed of a master node (responsible for writing) and one or more slave nodes (responsible for reading). All data changes on the master node will be copied to the slave node."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note that: Currently, you must use MySQL version 5.7 or above to support Binlog Load")),(0,o.kt)("p",null,"To enable the binlog of MySQL, you need to edit the my.cnf file and set it like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mysqld]\nlog-bin = mysql-bin # \u5f00\u542f binlog\nbinlog-format=ROW # \u9009\u62e9 ROW \u6a21\u5f0f\n")),(0,o.kt)("h3",{id:"principle-description"},"Principle Description"),(0,o.kt)("p",null,"On MySQL, the binlog files usually name as mysql-bin.000001, mysql-bin.000002... And MySQL will automatically segment the binlog file when certain conditions are met:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"MySQL is restarted"),(0,o.kt)("li",{parentName:"ol"},"The user enters the ",(0,o.kt)("inlineCode",{parentName:"li"},"flush logs")," command"),(0,o.kt)("li",{parentName:"ol"},"The binlog file size exceeds 1G")),(0,o.kt)("p",null,"To locate the latest consumption location of binlog, the binlog file name and position (offset) must be needed."),(0,o.kt)("p",null,"For instance, the binlog location of the current consumption so far will be saved on each slave node to prepare for disconnection, reconnection and continued consumption at any time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"---------------------                                ---------------------\n|       Slave       |              read              |      Master       |\n| FileName/Position | <<<--------------------------- |    Binlog Files   |\n---------------------                                ---------------------\n")),(0,o.kt)("p",null,"For the master node, it is only responsible for writing to the binlog. Multiple slave nodes can be connected to a master node at the same time to consume different parts of the binlog log without affecting each other."),(0,o.kt)("p",null,"Binlog log supports two main formats (in addition to mixed based mode):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Statement-based format: "),(0,o.kt)("p",{parentName:"li"},"Binlog only records the SQL statements executed on the master node, and the slave node copies them to the local node for re-execution.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Row-based format:"),(0,o.kt)("p",{parentName:"li"},"Binlog will record the data change information of each row and all columns of the master node, and the slave node will copy and execute the change of each row to the local node."))),(0,o.kt)("p",null,"The first format only writes the executed SQL statements. Although the log volume will be small, it has the following disadvantages:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The actual data of each row is not recorded"),(0,o.kt)("li",{parentName:"ol"},"The UDF, random and time functions executed on the master node will have inconsistent results on the slave node"),(0,o.kt)("li",{parentName:"ol"},"The execution order of limit statements may be inconsistent")),(0,o.kt)("p",null,"Therefore, we need to choose the second format which parses each row of data from the binlog log."),(0,o.kt)("p",null,"In the row-based format, binlog will record the timestamp, server ID, offset and other information of each binlog event. For instance, the following transaction with two insert statements:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"begin;\ninsert into canal_test.test_tbl values (3, 300);\ninsert into canal_test.test_tbl values (4, 400);\ncommit;\n")),(0,o.kt)("p",null,"There will be four binlog events, including one begin event, two insert events and one commit event:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SET TIMESTAMP=1538238301/*!*/; \nBEGIN\n/*!*/.\n# at 211935643\n# at 211935698\n#180930 0:25:01 server id 1 end_log_pos 211935698 Table_map: 'canal_test'.'test_tbl' mapped to number 25 \n#180930 0:25:01 server id 1 end_log_pos 211935744 Write_rows: table-id 25 flags: STMT_END_F\n...\n'/*!*/;\n### INSERT INTO canal_test.test_tbl\n### SET\n### @1=1\n### @2=100\n# at 211935744\n#180930 0:25:01 server id 1 end_log_pos 211935771 Xid = 2681726641\n...\n'/*!*/;\n### INSERT INTO canal_test.test_tbl\n### SET\n### @1=2\n### @2=200\n# at 211935771\n#180930 0:25:01 server id 1 end_log_pos 211939510 Xid = 2681726641 \nCOMMIT/*!*/;\n")),(0,o.kt)("p",null,"As shown above, each insert event contains modified data. During delete/update, an event can also contain multiple rows of data, making the binlog more compact."),(0,o.kt)("h3",{id:"open-gtid-mode-optional"},"Open GTID mode (Optional)"),(0,o.kt)("p",null,"A global transaction ID (global transaction identifier) identifies a transaction that has been committed on the master node, which is unique and valid in global. After binlog is enabled, the gtid will be written to the binlog file."),(0,o.kt)("p",null,"To open the gtid mode of MySQL, you need to edit the my.cnf configuration file and set it like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gtid-mode=on // Open gtid mode\nenforce-gtid-consistency=1 // Enforce consistency between gtid and transaction\n")),(0,o.kt)("p",null,"In gtid mode, the master server can easily track transactions, recover data and replicas without binlog file name and offset."),(0,o.kt)("p",null,"In gtid mode, due to the global validity of gtid, the slave node will no longer need to locate the binlog location on the master node by saving the file name and offset, but can be located by the data itself. During SyncJob, the slave node will skip the execution of any gtid transaction already executed before."),(0,o.kt)("p",null,"Gtid is expressed as a pair of coordinates, ",(0,o.kt)("inlineCode",{parentName:"p"},"source_ID")," identifies the master node, ",(0,o.kt)("inlineCode",{parentName:"p"},"transaction_ID")," indicates the order in which this transaction is executed on the master node (max 2",(0,o.kt)("sup",null,"63"),"-1)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GTID = source_id:transaction_id\n")),(0,o.kt)("p",null,"For example, the gtid of the 23rd transaction executed on the same master node is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"3E11FA47-71CA-11E1-9E33-C80AA9429562:23\n")),(0,o.kt)("h2",{id:"configure-canal-server"},"Configure Canal Server"),(0,o.kt)("p",null,"Canal is a sub project of Alibaba Otter project. Its main purpose is to provide incremental data subscription and consumption based on MySQL database binlog analysis, which is originally used to solve the scenario of cross machine-room synchronization."),(0,o.kt)("p",null,"Canal version 1.1.5 and above is recommended. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/canal/releases"},"download link")),(0,o.kt)("p",null,"After downloading, please follow the steps below to complete the deployment."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Unzip the canal deployer")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new directory under the conf folder and rename it as the root directory of instance. The directory name is the destination mentioned later.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Modify the instance configuration file (you can copy from ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/example/instance.properties"),")"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"vim conf/{your destination}/instance.properties\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"## canal instance serverId\ncanal.instance.mysql.slaveId = 1234\n## mysql adress\ncanal.instance.master.address = 127.0.0.1:3306 \n## mysql username/password\ncanal.instance.dbUsername = canal\ncanal.instance.dbPassword = canal\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"start up canal server"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"sh bin/startup.sh\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Validation start up successfully"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cat logs/{your destination}/{your destination}.log\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"2013-02-05 22:50:45.636 [main] INFO  c.a.o.c.i.spring.support.PropertyPlaceholderConfigurer - Loading properties file from class path resource [canal.properties]\n2013-02-05 22:50:45.641 [main] INFO  c.a.o.c.i.spring.support.PropertyPlaceholderConfigurer - Loading properties file from class path resource [xxx/instance.properties]\n2013-02-05 22:50:45.803 [main] INFO  c.a.otter.canal.instance.spring.CanalInstanceWithSpring - start CannalInstance for 1-xxx \n2013-02-05 22:50:45.810 [main] INFO  c.a.otter.canal.instance.spring.CanalInstanceWithSpring - start successful....\n")))),(0,o.kt)("h3",{id:"canal-end-description"},"Canal End Description"),(0,o.kt)("p",null,"By faking its own MySQL dump protocol, canal disguises itself as a slave node, get and parses the binlog of the master node."),(0,o.kt)("p",null,"Multiple instances can be started on the canal server. An instance can be regarded as a slave node. Each instance consists of the following parts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-------------------------------------------------\n|  Server                                       |\n|  -------------------------------------------- |\n|  |  Instance 1                              | |\n|  |  -----------   -----------  -----------  | |\n|  |  |  Parser |   |  Sink   |  | Store   |  | |\n|  |  -----------   -----------  -----------  | |\n|  |  -----------------------------------     | |\n|  |  |             MetaManager         |     | |\n|  |  -----------------------------------     | |\n|  -------------------------------------------- |\n-------------------------------------------------\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Parser: Access the data source, simulate the dump protocol, interact with the master, and analyze the protocol"),(0,o.kt)("li",{parentName:"ul"},"Sink: Linker between parser and store, for data filtering, processing and distribution"),(0,o.kt)("li",{parentName:"ul"},"Store: Data store"),(0,o.kt)("li",{parentName:"ul"},"Meta Manager: Metadata management module")),(0,o.kt)("p",null,"Each instance has its own unique ID in the cluster, that is, server ID."),(0,o.kt)("p",null,"In the canal server, the instance is identified by a unique string named destination. The canal client needs destination to connect to the corresponding instance."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note that: canal client and canal instance should correspond to each other one by one")),(0,o.kt)("p",null,"Binlog load has forbidded multiple SyncJobs to connect to the same destination."),(0,o.kt)("p",null,"The data flow direction in instance is binlog -> Parser -> sink -> store."),(0,o.kt)("p",null,"Instance parses binlog logs through the parser module, and the parsed data is cached in the store. When the user submits a SyncJob to Fe, it will start a Canal Client to subscripe and get the data in the store in the corresponding instance."),(0,o.kt)("p",null,"The store is actually a ring queue. Users can configure its length and storage space by themselves."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://doris.apache.org/images/canal_store.png",alt:"store"})),(0,o.kt)("p",null,"Store manages the data in the queue through three pointers:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get pointer: the GET pointer points to the last location get by the Canal Client."),(0,o.kt)("li",{parentName:"ol"},"Ack pointer: the ACK pointer points to the location of the last successful consumption."),(0,o.kt)("li",{parentName:"ol"},"Put pointer: the PUT pointer points to the location where the sink module successfully wrote to the store at last.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"canal client asynchronously get data in the store\n\n       get 0        get 1       get 2                    put\n         |            |           |         ......        |\n         v            v           v                       v\n--------------------------------------------------------------------- store ring queue\n         ^            ^\n         |            |\n       ack 0        ack 1\n")),(0,o.kt)("p",null,"When the Canal Client calls the Get command, the Canal Server will generate data batches and send them to the Canal Client, and move the Get pointer to the right. The Canal Client can get multiple batches until the Get pointer catches up with the Put pointer."),(0,o.kt)("p",null,"When the consumption of data is successful, the Canal Client will return Ack + Batch ID, notify that the consumption has been successful, and move the Ack pointer to the right. The store will delete the data of this batch from the ring queue, make room to get data from the upstream sink module, and then move the Put pointer to the right."),(0,o.kt)("p",null,"When the data consumption fails, the client will return a rollback notification of the consumption failure, and the store will reset the Get pointer to the left to the Ack pointer's position, so that the next data get by the Canal Client can start from the Ack pointer again."),(0,o.kt)("p",null,"Like the slave node in mysql, Canal Server also needs to save the latest consumption location of the client. All metadata in Canal Server (such as gtid and binlog location) is managed by the metamanager. At present, these metadata is persisted in the meta.dat file in the instance's root directory in JSON format by default."),(0,o.kt)("h2",{id:"basic-operation"},"Basic Operation"),(0,o.kt)("h3",{id:"configure-target-table-properties"},"Configure Target Table Properties"),(0,o.kt)("p",null,"User needs to first create the target table which is corresponding to the MySQL side"),(0,o.kt)("p",null,"Binlog Load can only support unique target tables from now, and the batch delete feature of the target table must be activated."),(0,o.kt)("p",null,"For the method of enabling Batch Delete, please refer to the batch delete function in ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PROPERTY"},"ALTER TABLE PROPERTY"),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'--create Mysql table\nCREATE TABLE `demo.source_test` (\n  `id` int(11) NOT NULL COMMENT "",\n  `name` int(11) NOT NULL COMMENT ""\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;\n\n\n-- create Doris table\nCREATE TABLE `target_test` (\n  `id` int(11) NOT NULL COMMENT "",\n  `name` int(11) NOT NULL COMMENT ""\n) ENGINE=OLAP\nUNIQUE KEY(`id`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`id`) BUCKETS 8;\n\n-- enable batch delete\nALTER TABLE target_test ENABLE FEATURE "BATCH_DELETE";\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"! !  Doris table structure and Mysql table structure field order must be consistent ! !")),(0,o.kt)("h3",{id:"create-syncjob"},"Create SyncJob"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'CREATE SYNC `demo`.`job`\n(\nFROM `demo`.`source_test1` INTO `target_test`\n(id,name)\n)\nFROM BINLOG\n(\n"type" = "canal",\n"canal.server.ip" = "127.0.0.1",\n"canal.server.port" = "11111",\n"canal.destination" = "xxx",\n"canal.username" = "canal",\n"canal.password" = "canal"\n);\n')),(0,o.kt)("p",null,"The detailed syntax for creating a data synchronization job can be connected to Doris and ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-SYNC-JOB"},"CREATE SYNC JOB")," to view the syntax help. Here is a detailed introduction to the precautions when creating a job."),(0,o.kt)("p",null,"grammar\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CREATE SYNC [db.]job_name\n (\n        channel_desc, \n        channel_desc\n        ...\n )\nbinlog_desc\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"job_name"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"job_Name")," is the unique identifier of the SyncJob in the current database. With a specified job name, only one SyncJob can be running at the same time.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"channel_desc"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"column_Mapping")," mainly refers to the mapping relationship between the columns of the MySQL source table and the Doris target table. "),(0,o.kt)("p",{parentName:"li"},"If it is not specified, the columns of the source table and the target table will consider correspond one by one in order. "),(0,o.kt)("p",{parentName:"li"},"However, we still recommend explicitly specifying the mapping relationship of columns, so that when the schema-change of the target table (such as adding a nullable column), data synchronization can still be carried out. "),(0,o.kt)("p",{parentName:"li"},"Otherwise, when the schema-change occur, because the column mapping relationship is no longer one-to-one, the SyncJob will report an error.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"binlog_desc"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"binlog_desc")," defines some necessary information for docking the remote binlog address. "),(0,o.kt)("p",{parentName:"li"},"At present, the only supported docking type is the canal type. In canal type, all configuration items need to be prefixed with the canal prefix."),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"canal.server.ip: the address of the canal server"),(0,o.kt)("li",{parentName:"ol"},"canal.server.port: the port of canal server"),(0,o.kt)("li",{parentName:"ol"},"canal.destination: the identifier of the instance"),(0,o.kt)("li",{parentName:"ol"},"canal.batchSize: the maximum batch size get from the canal server for each batch. Default 8192"),(0,o.kt)("li",{parentName:"ol"},"canal.username: the username of instance"),(0,o.kt)("li",{parentName:"ol"},"canal.password: the password of instance"),(0,o.kt)("li",{parentName:"ol"},"canal.debug: when set to true, the details message of each batch and each row will be printed, which may affect the performance.")))),(0,o.kt)("h3",{id:"show-job-status"},"Show Job Status"),(0,o.kt)("p",null,"Specific commands and examples for viewing job status can be viewed through the ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-SYNC-JOB"},"SHOW SYNC JOB")," command."),(0,o.kt)("p",null,"The parameters in the result set have the following meanings:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"State"),(0,o.kt)("p",{parentName:"li"},"The current stage of the job. The transition between job states is shown in the following figure:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"                   +-------------+\n         create job  |  PENDING    |    resume job\n         +-----------+             <-------------+\n         |           +-------------+             |\n    +----v-------+                       +-------+----+\n    |  RUNNING   |     pause job         |  PAUSED    |\n    |            +-----------------------\x3e            |\n    +----+-------+     run error         +-------+----+\n         |           +-------------+             |\n         |           | CANCELLED   |             |\n         +-----------\x3e             <-------------+\n        stop job     +-------------+    stop job\n        system error\n")),(0,o.kt)("p",{parentName:"li"},"After the SyncJob is submitted, the status is pending. "),(0,o.kt)("p",{parentName:"li"},"After the Fe scheduler starts the canal client, the status becomes running."),(0,o.kt)("p",{parentName:"li"},"User can control the status of the job by three commands: ",(0,o.kt)("inlineCode",{parentName:"p"},"stop/pause/resume"),". After the operation, the job status is ",(0,o.kt)("inlineCode",{parentName:"p"},"cancelled/paused/running")," respectively."),(0,o.kt)("p",{parentName:"li"},"There is only one final stage of the job, Cancelled. When the job status changes to \bCanceled, it cannot be resumed again. "),(0,o.kt)("p",{parentName:"li"},"When an error occurs during SyncJob is running, if the error is unrecoverable, the status will change to cancelled, otherwise it will change to paused.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Channel"),(0,o.kt)("p",{parentName:"li"},"The mapping relationship between all source tables and target tables of the job.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Status"),(0,o.kt)("p",{parentName:"li"},"The latest consumption location of the current binlog (if the gtid mode is on, the gtid will be displayed), and the delay time of the Doris side compared with the MySQL side.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"JobConfig"),(0,o.kt)("p",{parentName:"li"},"The remote server information of the docking, such as the address of the Canal Server and the destination of the connected instance."))),(0,o.kt)("h3",{id:"control-operation"},"Control Operation"),(0,o.kt)("p",null,"Users can control the status of jobs through ",(0,o.kt)("inlineCode",{parentName:"p"},"stop/pause/resume")," commands."),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-SYNC-JOB"},"STOP SYNC JOB")," ; ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-SYNC-JOB"},"PAUSE SYNC JOB"),"; And ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-SYNC-JOB"},"RESUME SYNC JOB"),"; commands to view help and examples."),(0,o.kt)("h2",{id:"related-parameters"},"Related Parameters"),(0,o.kt)("h3",{id:"canal-configuration"},"Canal configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"canal.ip")),(0,o.kt)("p",{parentName:"li"},"canal server's ip address")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"canal.port")),(0,o.kt)("p",{parentName:"li"},"canal server's port")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"canal.instance.memory.buffer.size")),(0,o.kt)("p",{parentName:"li"},"The queue length of the store ring queue, must be set to the power of 2, the default length is 16384. This value is equal to the maximum number of events that can be cached on the canal side and directly determines the maximum number of events that can be accommodated in a transaction on the Doris side. It is recommended to make it large enough to prevent the upper limit of the amount of data that can be accommodated in a transaction on the Doris side from being too small, resulting in too frequent transaction submission and data version accumulation.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"canal.instance.memory.buffer.memunit")),(0,o.kt)("p",{parentName:"li"},"The default space occupied by an event at the canal end, default value is 1024 bytes. This value multiplied by ",(0,o.kt)("inlineCode",{parentName:"p"},"canal.instance.memory.buffer.size")," is equal to the maximum space of the store. For example, if the queue length of the store is 16384, the space of the store is 16MB. However, the actual size of an event is not actually equal to this value, but is determined by the number of rows of data in the event and the length of each row of data. For example, the insert event of a table with only two columns is only 30 bytes, but the delete event may reach thousands of bytes. This is because the number of rows of delete event is usually more than that of insert event."))),(0,o.kt)("h3",{id:"fe-configuration"},"Fe configuration"),(0,o.kt)("p",null,"The following configuration belongs to the system level configuration of SyncJob. The configuration value can be modified in configuration file fe.conf."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"sync_commit_interval_second")),(0,o.kt)("p",{parentName:"li"},"Maximum interval time between commit transactions. If there is still data in the channel that has not been committed after this time, the consumer will notify the channel to commit the transaction.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"min_sync_commit_size")),(0,o.kt)("p",{parentName:"li"},"The minimum number of events required to commit a transaction. If the number of events received by Fe is less than it, Fe will continue to wait for the next batch of data until the time exceeds ",(0,o.kt)("inlineCode",{parentName:"p"},"sync_commit_interval_second"),". The default value is 10000 events. If you want to modify this configuration, please ensure that this value is less than the ",(0,o.kt)("inlineCode",{parentName:"p"},"canal.instance.memory.buffer.size")," configuration on the canal side (16384 by default). Otherwise, Fe will try to get more events than the length of the store queue without ack, causing the store queue to block until timeout.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"min_bytes_sync_commit")),(0,o.kt)("p",{parentName:"li"},"The minimum data size required to commit a transaction. If the data size received by Fe is smaller than it, it will continue to wait for the next batch of data until the time exceeds ",(0,o.kt)("inlineCode",{parentName:"p"},"sync_commit_interval_second"),". The default value is 15MB. If you want to modify this configuration, please ensure that this value is less than the product ",(0,o.kt)("inlineCode",{parentName:"p"},"canal.instance.memory.buffer.size")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"canal.instance.memory.buffer.memunit")," on the canal side (16MB by default). Otherwise, Fe will try to get data from canal larger than the store space without ack, causing the store queue to block until timeout.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"max_bytes_sync_commit")),(0,o.kt)("p",{parentName:"li"},"The maximum size of the data when the transaction is committed. If the data size received by Fe is larger than it, it will immediately commit the transaction and send the accumulated data. The default value is 64MB. If you want to modify this configuration, please ensure that this value is greater than the product of ",(0,o.kt)("inlineCode",{parentName:"p"},"canal.instance.memory.buffer.size")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"canal.instance.memory.buffer.mmemunit")," on the canal side (16MB by default) and ",(0,o.kt)("inlineCode",{parentName:"p"},"min_bytes_sync_commit"),"\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"max_sync_task_threads_num")),(0,o.kt)("p",{parentName:"li"},"The maximum number of threads in the SyncJobs' thread pool. There is only one thread pool in the whole Fe for synchronization, which is used to process the tasks created by all SyncJobs in the Fe. "))),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Will modifying the table structure affect data synchronization?"),(0,o.kt)("p",{parentName:"li"},"Yes. The SyncJob cannot prohibit ",(0,o.kt)("inlineCode",{parentName:"p"},"alter table")," operation.\nWhen the table's schema changes, if the column mapping cannot match, the job may be suspended incorrectly. It is recommended to reduce such problems by explicitly specifying the column mapping relationship in the data synchronization job, or by adding nullable columns or columns with default values.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Will the SyncJob continue to run after the database is deleted?"),(0,o.kt)("p",{parentName:"li"},"No. In this case, the SyncJob will be checked by the Fe's scheduler thread \band be stopped.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Can multiple SyncJobs be configured with the same ",(0,o.kt)("inlineCode",{parentName:"p"},"IP:Port + destination"),"?"),(0,o.kt)("p",{parentName:"li"},"No. When creating a SyncJob, FE will check whether the ",(0,o.kt)("inlineCode",{parentName:"p"},"IP:Port + destination")," is duplicate with the existing job to prevent multiple jobs from connecting to the same instance.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Why is the precision of floating-point type different between MySQL and Doris during data synchronization?\t"),(0,o.kt)("p",{parentName:"li"},"The precision of Doris floating-point type is different from that of MySQL. You can choose to use decimal type instead."))),(0,o.kt)("h2",{id:"more-help"},"More Help"),(0,o.kt)("p",null,"For more detailed syntax and best practices used by Binlog Load, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-SYNC-JOB"},"Binlog Load")," command manual, you can also enter ",(0,o.kt)("inlineCode",{parentName:"p"},"HELP BINLOG")," in the MySql client command line for more help information."))}d.isMDXComponent=!0}}]);