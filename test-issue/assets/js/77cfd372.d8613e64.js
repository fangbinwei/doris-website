"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[97733],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(a),c=r,h=d["".concat(l,".").concat(c)]||d[c]||u[c]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},13310:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={title:"Insert Into",language:"en"},o=void 0,s={unversionedId:"administrator-guide/load-data/insert-into-manual",id:"version-0.15/administrator-guide/load-data/insert-into-manual",title:"Insert Into",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/administrator-guide/load-data/insert-into-manual.md",sourceDirName:"administrator-guide/load-data",slug:"/administrator-guide/load-data/insert-into-manual",permalink:"/docs/0.15/administrator-guide/load-data/insert-into-manual",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Insert Into",language:"en"},sidebar:"docs",previous:{title:"Delete",permalink:"/docs/0.15/administrator-guide/load-data/delete-manual"},next:{title:"Load Json Format Data",permalink:"/docs/0.15/administrator-guide/load-data/load-json-format"}},l={},m=[{value:"Basic operations",id:"basic-operations",level:2},{value:"Create a Load",id:"create-a-load",level:3},{value:"Load results",id:"load-results",level:3},{value:"Relevant System Configuration",id:"relevant-system-configuration",level:2},{value:"FE configuration",id:"fe-configuration",level:3},{value:"Session Variables",id:"session-variables",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Application scenarios",id:"application-scenarios",level:3},{value:"Data volume",id:"data-volume",level:3},{value:"Complete examples",id:"complete-examples",level:3},{value:"Common Questions",id:"common-questions",level:2}],p={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"insert-into"},"Insert Into"),(0,r.kt)("p",null,"The use of Insert Into statements is similar to that of Insert Into statements in databases such as MySQL. But in Doris, all data writing is a separate import job. So Insert Into is also introduced here as an import method."),(0,r.kt)("p",null,"The main Insert Into command contains the following two kinds;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"INSERT INTO tbl SELECT ..."),(0,r.kt)("li",{parentName:"ul"},"INSERT INTO tbl (col1, col2, ...) VALUES (1, 2, ...), (1,3, ...);")),(0,r.kt)("p",null,"The second command is for Demo only, not in a test or production environment."),(0,r.kt)("h2",{id:"basic-operations"},"Basic operations"),(0,r.kt)("h3",{id:"create-a-load"},"Create a Load"),(0,r.kt)("p",null,"The Insert Into command needs to be submitted through MySQL protocol. Creating an import request returns the import result synchronously."),(0,r.kt)("p",null,"Grammar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INSERT INTO table_name [partition_info] [WITH LABEL label] [col_list] [query_stmt] [VALUES];\n")),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'INSERT INTO tbl2 WITH LABEL label1 SELECT * FROM tbl3;\nINSERT INTO tbl1 VALUES ("qweasdzxcqweasdzxc"), ("a");\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notice")),(0,r.kt)("p",null,"When using ",(0,r.kt)("inlineCode",{parentName:"p"},"CTE(Common Table Expressions)")," as the query part of insert operation, the ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH LABEL")," or column list part must be specified.\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INSERT INTO tbl1 WITH LABEL label1\nWITH cte1 AS (SELECT * FROM tbl1), cte2 AS (SELECT * FROM tbl2)\nSELECT k1 FROM cte1 JOIN cte2 WHERE cte1.k1 = 1;\n\nINSERT INTO tbl1 (k1)\nWITH cte1 AS (SELECT * FROM tbl1), cte2 AS (SELECT * FROM tbl2)\nSELECT k1 FROM cte1 JOIN cte2 WHERE cte1.k1 = 1;\n")),(0,r.kt)("p",null,"The following is a brief introduction to the parameters used in creating import statements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"partition","_","info"),(0,r.kt)("p",{parentName:"li"},"Import the target partition of the table. If the target partition is specified, only the data that matches the target partition will be imported. If not specified, the default value is all partitions of the table.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"col","_","list"),(0,r.kt)("p",{parentName:"li"},"The target column of the import table can exist in any order. If no target column is specified, the default value is all columns in this table. If a column in the table does not exist in the target column, the column needs a default value, otherwise Insert Into will fail."),(0,r.kt)("p",{parentName:"li"},"If the result column type of the query statement is inconsistent with the type of the target column, an implicit type conversion is invoked. If the conversion is not possible, the Insert Into statement will report a parsing error.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"query","_","stmt"),(0,r.kt)("p",{parentName:"li"},"Through a query statement, the results of the query statement are imported into other tables in Doris system. Query statements support any SQL query syntax supported by Doris.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"VALUES"),(0,r.kt)("p",{parentName:"li"},"Users can insert one or more data through VALUES grammar."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Note: VALUES is only suitable for importing several pieces of data as DEMO. It is totally unsuitable for any test and production environment. Doris system itself is not suitable for single data import scenarios. It is recommended to use INSERT INTO SELECT for batch import.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"WITH LABEL"),(0,r.kt)("p",{parentName:"li"},"  INSERT as a load job, it can also be with a label. If not with a label, Doris will use a UUID as label."),(0,r.kt)("p",{parentName:"li"},"  This feature needs Doris version 0.11+."),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("em",{parentName:"p"},"Note: It is recommended that Label be specified rather than automatically allocated by the system. If the system allocates automatically, but during the execution of the Insert Into statement, the connection is disconnected due to network errors, etc., then it is impossible to know whether Insert Into is successful. If you specify Label, you can view the task results again through Label.")))),(0,r.kt)("h3",{id:"load-results"},"Load results"),(0,r.kt)("p",null,"Insert Into itself is a SQL command, and the return result is divided into the following types according to the different execution results:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Result set is empty"),(0,r.kt)("p",{parentName:"li"},"If the result set of the insert corresponding SELECT statement is empty, it is returned as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"mysql> insert into tbl1 select * from empty_tbl;\nQuery OK, 0 rows affected (0.02 sec)\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Query OK")," indicates successful execution. ",(0,r.kt)("inlineCode",{parentName:"p"},"0 rows affected")," means that no data was loaded.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The result set is not empty"),(0,r.kt)("p",{parentName:"li"},"In the case where the result set is not empty. The returned results are divided into the following situations:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Insert is successful and data is visible:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"mysql> insert into tbl1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label': 'insert_8510c568-9eda-4173-9e36-6adc7d35291c', 'status': 'visible', 'txnId': '4005'}\n\nmysql> insert into tbl1 with label my_label1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label': 'my_label1', 'status': 'visible', 'txnId': '4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label': 'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status': 'visible', 'txnId': '4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label': 'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status': 'committed', 'txnId': '4005'}\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Query OK")," indicates successful execution. ",(0,r.kt)("inlineCode",{parentName:"p"},"4 rows affected")," means that a total of 4 rows of data were imported. ",(0,r.kt)("inlineCode",{parentName:"p"},"2 warnings")," indicates the number of lines to be filtered."),(0,r.kt)("p",{parentName:"li"},"Also returns a json string:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"{'label': 'my_label1', 'status': 'visible', 'txnId': '4005'}\n{'label': 'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status': 'committed', 'txnId': '4005'}\n{'label': 'my_label1', 'status': 'visible', 'txnId': '4005', 'err': 'some other error'}\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"label")," is a user-specified label or an automatically generated label. Label is the ID of this Insert Into load job. Each load job has a label that is unique within a single database."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status")," indicates whether the loaded data is visible. If visible, show ",(0,r.kt)("inlineCode",{parentName:"p"},"visible"),", if not, show",(0,r.kt)("inlineCode",{parentName:"p"}," committed"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"txnId")," is the id of the load transaction corresponding to this insert."),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"err")," field displays some other unexpected errors."),(0,r.kt)("p",{parentName:"li"},"When user need to view the filtered rows, the user can use the following statement"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'show load where label = "xxx";\n')),(0,r.kt)("p",{parentName:"li"},"The URL in the returned result can be used to query the wrong data. For details, see the following ",(0,r.kt)("strong",{parentName:"p"},"View Error Lines")," Summary."),(0,r.kt)("p",{parentName:"li"},"\xa0\xa0\xa0\xa0\n",(0,r.kt)("strong",{parentName:"p"},'"Data is not visible" is a temporary status, this batch of data must be visible eventually')),(0,r.kt)("p",{parentName:"li"},"You can view the visible status of this batch of data with the following statement:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"show transaction where id = 4005;\n")),(0,r.kt)("p",{parentName:"li"},"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"TransactionStatus")," column in the returned result is ",(0,r.kt)("inlineCode",{parentName:"p"},"visible"),", the data is visible.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Insert fails"),(0,r.kt)("p",{parentName:"li"},"Execution failure indicates that no data was successfully loaded, and returns as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'mysql> insert into tbl1 select * from tbl2 where k1 = "a";\nERROR 1064 (HY000): all partitions have no load data. Url: http://10.74.167.16:8042/api/_load_error_log?file=__shard_2/error_log_insert_stmt_ba8bb9e158e4879-ae8de8507c0bf8a2_ba8bb9e158e4879_ae8de850e8de850\n')),(0,r.kt)("p",{parentName:"li"},"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"ERROR 1064 (HY000): all partitions have no load data")," shows the reason for the failure. The latter url can be used to query the wrong data. For details, see the following ",(0,r.kt)("strong",{parentName:"p"},"View Error Lines")," Summary."))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In summary, the correct processing logic for the results returned by the insert operation should be:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the returned result is ",(0,r.kt)("inlineCode",{parentName:"p"},"ERROR 1064 (HY000)"),", it means that the import failed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the returned result is ",(0,r.kt)("inlineCode",{parentName:"p"},"Query OK"),", it means the execution was successful."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"rows affected")," is 0, the result set is empty and no data is loaded."),(0,r.kt)("li",{parentName:"ol"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"rows affected")," is greater than 0:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"status")," is",(0,r.kt)("inlineCode",{parentName:"li"}," committed"),", the data is not yet visible. You need to check the status through the ",(0,r.kt)("inlineCode",{parentName:"li"},"show transaction")," statement until ",(0,r.kt)("inlineCode",{parentName:"li"},"visible"),"."),(0,r.kt)("li",{parentName:"ol"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"status")," is",(0,r.kt)("inlineCode",{parentName:"li"}," visible"),", the data is loaded successfully."))),(0,r.kt)("li",{parentName:"ol"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"warnings")," is greater than 0, it means that some data is filtered. You can get the url through the ",(0,r.kt)("inlineCode",{parentName:"li"},"show load")," statement to see the filtered rows.")))),(0,r.kt)("h2",{id:"relevant-system-configuration"},"Relevant System Configuration"),(0,r.kt)("h3",{id:"fe-configuration"},"FE configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"time out"),(0,r.kt)("p",{parentName:"li"},"The timeout time of the import task (in seconds) will be cancelled by the system if the import task is not completed within the set timeout time, and will become CANCELLED."),(0,r.kt)("p",{parentName:"li"},"At present, Insert Into does not support custom import timeout time. All Insert Into imports have a uniform timeout time. The default timeout time is 1 hour. If the imported source file cannot complete the import within the specified time, the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"insert_load_default_timeout_second")," of FE needs to be adjusted."),(0,r.kt)("p",{parentName:"li"},"At the same time, the Insert Into statement receives the restriction of the Session variable ",(0,r.kt)("inlineCode",{parentName:"p"},"query_timeout"),". You can increase the timeout time by ",(0,r.kt)("inlineCode",{parentName:"p"},"SET query_timeout = xxx;")," in seconds."))),(0,r.kt)("h3",{id:"session-variables"},"Session Variables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"enable","_","insert","_","strict"),(0,r.kt)("p",{parentName:"li"},"The Insert Into import itself cannot control the tolerable error rate of the import. Users can only use the Session parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_insert_strict"),". When this parameter is set to false, it indicates that at least one data has been imported correctly, and then it returns successfully. When this parameter is set to true, the import fails if there is a data error. The default is false. It can be set by ",(0,r.kt)("inlineCode",{parentName:"p"},"SET enable_insert_strict = true;"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"query u timeout"),(0,r.kt)("p",{parentName:"li"},"Insert Into itself is also an SQL command, so the Insert Into statement is also restricted by the Session variable ",(0,r.kt)("inlineCode",{parentName:"p"},"query_timeout"),". You can increase the timeout time by ",(0,r.kt)("inlineCode",{parentName:"p"},"SET query_timeout = xxx;")," in seconds."))),(0,r.kt)("h2",{id:"best-practices"},"Best Practices"),(0,r.kt)("h3",{id:"application-scenarios"},"Application scenarios"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Users want to import only a few false data to verify the functionality of Doris system. The grammar of INSERT INTO VALUES is suitable at this time."),(0,r.kt)("li",{parentName:"ol"},"Users want to convert the data already in the Doris table into ETL and import it into a new Doris table, which is suitable for using INSERT INTO SELECT grammar."),(0,r.kt)("li",{parentName:"ol"},"Users can create an external table, such as MySQL external table mapping a table in MySQL system. Or create Broker external tables to map data files on HDFS. Then the data from the external table is imported into the Doris table for storage through the INSERT INTO SELECT grammar.")),(0,r.kt)("h3",{id:"data-volume"},"Data volume"),(0,r.kt)("p",null,"Insert Into has no limitation on the amount of data, and large data imports can also be supported. However, Insert Into has a default timeout time, and the amount of imported data estimated by users is too large, so it is necessary to modify the system's Insert Into import timeout time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Import data volume = 36G or less than 3600s*10M/s\nAmong them, 10M/s is the maximum import speed limit. Users need to calculate the average import speed according to the current cluster situation to replace 10M/s in the formula.\n")),(0,r.kt)("h3",{id:"complete-examples"},"Complete examples"),(0,r.kt)("p",null,"Users have a table store sales in the database sales. Users create a table called bj store sales in the database sales. Users want to import the data recorded in the store sales into the new table bj store sales. The amount of data imported is about 10G."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"large sales scheme\n(id, total, user_id, sale_timestamp, region)\n\nOrder large sales schedule:\n(id, total, user_id, sale_timestamp)\n\n")),(0,r.kt)("p",null,"Cluster situation: The average import speed of current user cluster is about 5M/s"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step1: Determine whether you want to modify the default timeout of Insert Into"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Calculate the approximate time of import\n10G / 5M /s = 2000s\n\nModify FE configuration\ninsert_load_default_timeout_second = 2000\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step2: Create Import Tasks"),(0,r.kt)("p",{parentName:"li"},"Since users want to ETL data from a table and import it into the target table, they should use the Insert in query","\\","stmt mode to import it."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'INSERT INTO bj_store_sales SELECT id, total, user_id, sale_timestamp FROM store_sales where region = "bj";\n')))),(0,r.kt)("h2",{id:"common-questions"},"Common Questions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"View the wrong line"),(0,r.kt)("p",{parentName:"li"},"Because Insert Into can't control the error rate, it can only tolerate or ignore the error data completely by ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_insert_strict"),". So if ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_insert_strict")," is set to true, Insert Into may fail. If ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_insert_strict")," is set to false, then only some qualified data may be imported. However, in either case, Doris is currently unable to provide the ability to view substandard data rows. Therefore, the user cannot view the specific import error through the Insert Into statement."),(0,r.kt)("p",{parentName:"li"},"The causes of errors are usually: source data column length exceeds destination data column length, column type mismatch, partition mismatch, column order mismatch, etc. When it's still impossible to check for problems. At present, it is only recommended that the SELECT command in the Insert Into statement be run to export the data to a file, and then import the file through Stream load to see the specific errors."))))}d.isMDXComponent=!0}}]);