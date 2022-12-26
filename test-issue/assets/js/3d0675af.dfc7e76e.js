"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[60790],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},27913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={title:"Flink Doris Connector",language:"en"},l=void 0,o={unversionedId:"ecosystem/flink-doris-connector",id:"version-dev/ecosystem/flink-doris-connector",title:"Flink Doris Connector",description:"\x3c!--",source:"@site/versioned_docs/version-dev/ecosystem/flink-doris-connector.md",sourceDirName:"ecosystem",slug:"/ecosystem/flink-doris-connector",permalink:"/docs/dev/ecosystem/flink-doris-connector",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/ecosystem/flink-doris-connector.md",tags:[],version:"dev",frontMatter:{title:"Flink Doris Connector",language:"en"},sidebar:"docs",previous:{title:"Spark Doris Connector",permalink:"/docs/dev/ecosystem/spark-doris-connector"},next:{title:"DataX doriswriter",permalink:"/docs/dev/ecosystem/datax"}},s={},d=[{value:"Version Compatibility",id:"version-compatibility",level:2},{value:"Build and Install",id:"build-and-install",level:2},{value:"Using Maven",id:"using-maven",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Parameters Configuration",id:"parameters-configuration",level:3},{value:"SQL",id:"sql",level:3},{value:"DataStream",id:"datastream",level:3},{value:"General",id:"general",level:3},{value:"Doris &amp; Flink Column Type Mapping",id:"doris--flink-column-type-mapping",level:2},{value:"An example of using Flink CDC to access Doris (supports insert/update/delete events)",id:"an-example-of-using-flink-cdc-to-access-doris-supports-insertupdatedelete-events",level:2},{value:"Java example",id:"java-example",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Application scenarios",id:"application-scenarios",level:3},{value:"Other",id:"other",level:3},{value:"common problem",id:"common-problem",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flink-doris-connector"},"Flink Doris Connector"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This document applies to flink-doris-connector versions after 1.1.0, for versions before 1.1.0 refer to ",(0,r.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/0.15/extending-doris/flink-doris-connector"},"here"))),(0,r.kt)("p",null,"The Flink Doris Connector can support operations (read, insert, modify, delete) data stored in Doris through Flink."),(0,r.kt)("p",null,"Github: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris-flink-connector"},"https://github.com/apache/incubator-doris-flink-connector")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Doris")," table can be mapped to ",(0,r.kt)("inlineCode",{parentName:"li"},"DataStream")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Table"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"Modification and deletion are only supported on the Unique Key model"),(0,r.kt)("li",{parentName:"ol"},"The current deletion is to support Flink CDC to access data to achieve automatic deletion. If it is to delete other data access methods, you need to implement it yourself. For the data deletion usage of Flink CDC, please refer to the last section of this document"))),(0,r.kt)("h2",{id:"version-compatibility"},"Version Compatibility"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Connector Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Flink Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Doris Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Java Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Scala Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.0.3"),(0,r.kt)("td",{parentName:"tr",align:null},"1.11+"),(0,r.kt)("td",{parentName:"tr",align:null},"0.15+"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"2.11,2.12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"1.14+"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0+"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"2.11,2.12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.2.0"),(0,r.kt)("td",{parentName:"tr",align:null},"1.15+"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0+"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h2",{id:"build-and-install"},"Build and Install"),(0,r.kt)("p",null,"Ready to work"),(0,r.kt)("p",null,"1.Modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom_env.sh.tpl")," file and rename it to ",(0,r.kt)("inlineCode",{parentName:"p"},"custom_env.sh")),(0,r.kt)("p",null,"2.Specify the thrift installation directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"##source file content\n#export THRIFT_BIN=\n#export MVN_BIN=\n#export JAVA_HOME=\n\n##amend as below,MacOS as an example\nexport THRIFT_BIN=/opt/homebrew/Cellar/thrift@0.13.0/0.13.0/bin/thrift\n#export MVN_BIN=\n#export JAVA_HOME=\n\nInstall `thrift` 0.13.0 (Note: `Doris` 0.15 and the latest builds are based on `thrift` 0.13.0, previous versions are still built with `thrift` 0.9.3)\nWindows:\n  1. Download: `http://archive.apache.org/dist/thrift/0.13.0/thrift-0.13.0.exe`\n  2. Modify thrift-0.13.0.exe to thrift \n \nMacOS:\n  1. Download: `brew install thrift@0.13.0`\n  2. default address: /opt/homebrew/Cellar/thrift@0.13.0/0.13.0/bin/thrift\n\nNote: Executing `brew install thrift@0.13.0` on MacOS may report an error that the version cannot be found. The solution is as follows, execute it in the terminal:\n    1. `brew tap-new $USER/local-tap`\n    2. `brew extract --version='0.13.0' thrift $USER/local-tap`\n    3. `brew install thrift@0.13.0`\n Reference link: `https://gist.github.com/tonydeng/02e571f273d6cce4230dc8d5f394493c`\n \nLinux:\n    1.Download source package\uff1a`wget https://archive.apache.org/dist/thrift/0.13.0/thrift-0.13.0.tar.gz`\n    2.Install dependencies\uff1a`yum install -y autoconf automake libtool cmake ncurses-devel openssl-devel lzo-devel zlib-devel gcc gcc-c++`\n    3.`tar zxvf thrift-0.13.0.tar.gz`\n    4.`cd thrift-0.13.0`\n    5.`./configure --without-tests`\n    6.`make`\n    7.`make install`\n   Check the version after installation is complete\uff1athrift --version\n   Note: If you have compiled Doris, you do not need to install thrift, you can directly use $DORIS_HOME/thirdparty/installed/bin/thrift\n")),(0,r.kt)("p",null,"Execute following command in source dir:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sh build.sh\n\n  Usage:\n    build.sh --flink version --scala version # specify flink and scala version\n    build.sh --tag                           # this is a build from tag\n  e.g.:\n    build.sh --flink 1.14.3 --scala 2.12\n    build.sh --tag\nThen, for example, execute the command to compile according to the version you need:\nsh build.sh --flink 1.14.3 --scala 2.12\n")),(0,r.kt)("p",null,"After successful compilation, the file ",(0,r.kt)("inlineCode",{parentName:"p"},"flink-doris-connector-1.14_2.12-1.0.0-SNAPSHOT.jar")," will be generated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"output/")," directory. Copy this file to ",(0,r.kt)("inlineCode",{parentName:"p"},"ClassPath")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"Flink")," to use ",(0,r.kt)("inlineCode",{parentName:"p"},"Flink-Doris-Connector"),". For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"Flink")," running in ",(0,r.kt)("inlineCode",{parentName:"p"},"Local")," mode, put this file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/")," folder. ",(0,r.kt)("inlineCode",{parentName:"p"},"Flink")," running in ",(0,r.kt)("inlineCode",{parentName:"p"},"Yarn")," cluster mode, put this file in the pre-deployment package."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Remarks:")," "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Doris FE should be configured to enable http v2 in the configuration"),(0,r.kt)("p",{parentName:"li"},"conf/fe.conf"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"enable_http_server_v2 = true\n")),(0,r.kt)("h2",{id:"using-maven"},"Using Maven"),(0,r.kt)("p",null,"Add flink-doris-connector and necessary Flink Maven dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-java</artifactId>\n    <version>${flink.version}</version>\n    <scope>provided</scope>\n</dependency>\n<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-streaming-java_${scala.version}</artifactId>\n    <version>${flink.version}</version>\n    <scope>provided</scope>\n</dependency>\n<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-clients_${scala.version}</artifactId>\n    <version>${flink.version}</version>\n    <scope>provided</scope>\n</dependency>\n\x3c!-- flink table --\x3e\n<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-table-planner_${scala.version}</artifactId>\n    <version>${flink.version}</version>\n    <scope>provided</scope>\n</dependency>\n\n\x3c!-- flink-doris-connector --\x3e\n<dependency>\n  <groupId>org.apache.doris</groupId>\n  <artifactId>flink-doris-connector-1.14_2.12</artifactId>\n  <version>1.1.0</version>\n</dependency>  \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Please replace the corresponding Connector and Flink dependency versions according to different Flink and Scala versions. Version 1.1.0 only supports Flink1.14")),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"There are three ways to use Flink Doris Connector. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SQL"),(0,r.kt)("li",{parentName:"ul"},"DataStream")),(0,r.kt)("h3",{id:"parameters-configuration"},"Parameters Configuration"),(0,r.kt)("p",null,"Flink Doris Connector Sink writes data to Doris by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Stream load"),", and also supports the configurations of ",(0,r.kt)("inlineCode",{parentName:"p"},"Stream load"),", For specific parameters, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/dev/data-operate/import/import-way/stream-load-manual"},"here"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SQL  configured by ",(0,r.kt)("inlineCode",{parentName:"li"},"sink.properties.")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"WITH")),(0,r.kt)("li",{parentName:"ul"},"DataStream configured by ",(0,r.kt)("inlineCode",{parentName:"li"},"DorisExecutionOptions.builder().setStreamLoadProp(Properties)"))),(0,r.kt)("h3",{id:"sql"},"SQL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Source")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE flink_doris_source (\n    name STRING,\n    age INT,\n    price DECIMAL(5,2),\n    sale DOUBLE\n    ) \n    WITH (\n      'connector' = 'doris',\n      'fenodes' = 'FE_IP:8030',\n      'table.identifier' = 'database.table',\n      'username' = 'root',\n      'password' = 'password'\n);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sink")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- enable checkpoint\nSET 'execution.checkpointing.interval' = '10s';\nCREATE TABLE flink_doris_sink (\n    name STRING,\n    age INT,\n    price DECIMAL(5,2),\n    sale DOUBLE\n    ) \n    WITH (\n      'connector' = 'doris',\n      'fenodes' = 'FE_IP:8030',\n      'table.identifier' = 'db.table',\n      'username' = 'root',\n      'password' = 'password',\n      'sink.label-prefix' = 'doris_label'\n);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Insert")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO flink_doris_sink select name,age,price,sale from flink_doris_source\n")),(0,r.kt)("h3",{id:"datastream"},"DataStream"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Source")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'DorisOptions.Builder builder = DorisOptions.builder()\n        .setFenodes("FE_IP:8030")\n        .setTableIdentifier("db.table")\n        .setUsername("root")\n        .setPassword("password");\n\nDorisSource<List<?>> dorisSource = DorisSourceBuilder.<List<?>>builder()\n        .setDorisOptions(builder.build())\n        .setDorisReadOptions(DorisReadOptions.builder().build())\n        .setDeserializer(new SimpleListDeserializationSchema())\n        .build();\n\nenv.fromSource(dorisSource, WatermarkStrategy.noWatermarks(), "doris source").print();\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sink")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"String Stream")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// enable checkpoint\nenv.enableCheckpointing(10000);\n// using batch mode for bounded data\nenv.setRuntimeMode(RuntimeExecutionMode.BATCH);\n\nDorisSink.Builder<String> builder = DorisSink.builder();\nDorisOptions.Builder dorisBuilder = DorisOptions.builder();\ndorisBuilder.setFenodes("FE_IP:8030")\n        .setTableIdentifier("db.table")\n        .setUsername("root")\n        .setPassword("password");\n\nProperties properties = new Properties();\n/**\njson format to streamload\nproperties.setProperty("format", "json");\nproperties.setProperty("read_json_by_line", "true");\n**/\n\nDorisExecutionOptions.Builder  executionBuilder = DorisExecutionOptions.builder();\nexecutionBuilder.setLabelPrefix("label-doris") //streamload label prefix\n                .setStreamLoadProp(properties); \n\nbuilder.setDorisReadOptions(DorisReadOptions.builder().build())\n        .setDorisExecutionOptions(executionBuilder.build())\n        .setSerializer(new SimpleStringSerializer()) //serialize according to string \n        .setDorisOptions(dorisBuilder.build());\n\n\n//mock string source\nList<Tuple2<String, Integer>> data = new ArrayList<>();\ndata.add(new Tuple2<>("doris",1));\nDataStreamSource<Tuple2<String, Integer>> source = env.fromCollection(data);\n\nsource.map((MapFunction<Tuple2<String, Integer>, String>) t -> t.f0 + "\\t" + t.f1)\n      .sinkTo(builder.build());\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"RowData Stream")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// enable checkpoint\nenv.enableCheckpointing(10000);\n// using batch mode for bounded data\nenv.setRuntimeMode(RuntimeExecutionMode.BATCH);\n\n//doris sink option\nDorisSink.Builder<RowData> builder = DorisSink.builder();\nDorisOptions.Builder dorisBuilder = DorisOptions.builder();\ndorisBuilder.setFenodes("FE_IP:8030")\n        .setTableIdentifier("db.table")\n        .setUsername("root")\n        .setPassword("password");\n\n// json format to streamload\nProperties properties = new Properties();\nproperties.setProperty("format", "json");\nproperties.setProperty("read_json_by_line", "true");\nDorisExecutionOptions.Builder  executionBuilder = DorisExecutionOptions.builder();\nexecutionBuilder.setLabelPrefix("label-doris") //streamload label prefix\n                .setStreamLoadProp(properties); //streamload params\n\n//flink rowdata\u2018s schema\nString[] fields = {"city", "longitude", "latitude"};\nDataType[] types = {DataTypes.VARCHAR(256), DataTypes.DOUBLE(), DataTypes.DOUBLE()};\n\nbuilder.setDorisReadOptions(DorisReadOptions.builder().build())\n        .setDorisExecutionOptions(executionBuilder.build())\n        .setSerializer(RowDataSerializer.builder()    //serialize according to rowdata \n                           .setFieldNames(fields)\n                           .setType("json")           //json format\n                           .setFieldType(types).build())\n        .setDorisOptions(dorisBuilder.build());\n\n//mock rowdata source\nDataStream<RowData> source = env.fromElements("")\n    .map(new MapFunction<String, RowData>() {\n        @Override\n        public RowData map(String value) throws Exception {\n            GenericRowData genericRowData = new GenericRowData(3);\n            genericRowData.setField(0, StringData.fromString("beijing"));\n            genericRowData.setField(1, 116.405419);\n            genericRowData.setField(2, 39.916927);\n            return genericRowData;\n        }\n    });\n\nsource.sinkTo(builder.build());\n')),(0,r.kt)("h3",{id:"general"},"General"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fenodes"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Doris FE http address, support multiple addresses, separated by commas")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table.identifier"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Doris table identifier, eg, db1.tbl1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Doris username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Doris password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.retries"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of retries to send requests to Doris")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.connect.timeout.ms"),(0,r.kt)("td",{parentName:"tr",align:null},"30000"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection timeout for sending requests to Doris")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.read.timeout.ms"),(0,r.kt)("td",{parentName:"tr",align:null},"30000"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Read timeout for sending request to Doris")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.query.timeout.s"),(0,r.kt)("td",{parentName:"tr",align:null},"3600"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Query the timeout time of doris, the default is 1 hour, -1 means no timeout limit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.tablet.size"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer.MAX_VALUE"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of Doris Tablets corresponding to an Partition. The smaller this value is set, the more partitions will be generated. This will increase the parallelism on the flink side, but at the same time will cause greater pressure on Doris.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.batch.size"),(0,r.kt)("td",{parentName:"tr",align:null},"1024"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum number of rows to read data from BE at one time. Increasing this value can reduce the number of connections between Flink and Doris. Thereby reducing the extra time overhead caused by network delay.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.exec.mem.limit"),(0,r.kt)("td",{parentName:"tr",align:null},"2147483648"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Memory limit for a single query. The default is 2GB, in bytes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.deserialize.arrow.async"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to support asynchronous conversion of Arrow format to RowBatch required for flink-doris-connector iteration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.deserialize.queue.size"),(0,r.kt)("td",{parentName:"tr",align:null},"64"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Asynchronous conversion of the internal processing queue in Arrow format takes effect when doris.deserialize.arrow.async is true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.read.field"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"List of column names in the Doris table, separated by commas")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.filter.query"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter expression of the query, which is transparently transmitted to Doris. Doris uses this expression to complete source-side data filtering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.label-prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"The label prefix used by stream load imports. In the 2pc scenario, global uniqueness is required to ensure the EOS semantics of Flink.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.properties.*"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"The stream load parameters.",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," eg:",(0,r.kt)("br",null)," sink.properties.column_separator' = ','",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," Setting 'sink.properties.escape_delimiters' = 'true' if you want to use a control char as a separator, so that such as '","\\","x01' will translate to binary 0x01",(0,r.kt)("br",null),(0,r.kt)("br",null),"Support JSON format import, you need to enable both 'sink.properties.format' ='json' and 'sink.properties.strip_outer_array' ='true'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.enable-delete"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to enable deletion. This option requires Doris table to enable batch delete function (0.15+ version is enabled by default), and only supports Uniq model.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.enable-2pc"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to enable two-phase commit (2pc), the default is true, to ensure Exactly-Once semantics. For two-phase commit, please refer to ",(0,r.kt)("a",{parentName:"td",href:"/docs/dev/data-operate/import/import-way/stream-load-manual"},"here"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.max-retries"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"In the 2pc scenario, the number of retries after the commit phase fails.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.buffer-size"),(0,r.kt)("td",{parentName:"tr",align:null},"1048576(1MB)"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Write data cache buffer size, in bytes. It is not recommended to modify, the default configuration is sufficient.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.buffer-count"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of write data cache buffers, it is not recommended to modify, the default configuration is sufficient.")))),(0,r.kt)("h2",{id:"doris--flink-column-type-mapping"},"Doris & Flink Column Type Mapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Flink Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NULL_TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"NULL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.kt)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.kt)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT"),(0,r.kt)("td",{parentName:"tr",align:null},"INT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"DATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CHAR"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LARGEINT"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DECIMALV2"),(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIME"),(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HLL"),(0,r.kt)("td",{parentName:"tr",align:null},"Unsupported datatype")))),(0,r.kt)("h2",{id:"an-example-of-using-flink-cdc-to-access-doris-supports-insertupdatedelete-events"},"An example of using Flink CDC to access Doris (supports insert/update/delete events)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET 'execution.checkpointing.interval' = '10s';\nCREATE TABLE cdc_mysql_source (\n  id int\n  ,name VARCHAR\n  ,PRIMARY KEY (id) NOT ENFORCED\n) WITH (\n 'connector' = 'mysql-cdc',\n 'hostname' = '127.0.0.1',\n 'port' = '3306',\n 'username' = 'root',\n 'password' = 'password',\n 'database-name' = 'database',\n 'table-name' = 'table'\n);\n\n-- Support delete event synchronization (sink.enable-delete='true'), requires Doris table to enable batch delete function\nCREATE TABLE doris_sink (\nid INT,\nname STRING\n) \nWITH (\n  'connector' = 'doris',\n  'fenodes' = '127.0.0.1:8030',\n  'table.identifier' = 'database.table',\n  'username' = 'root',\n  'password' = '',\n  'sink.properties.format' = 'json',\n  'sink.properties.read_json_by_line' = 'true',\n  'sink.enable-delete' = 'true',\n  'sink.label-prefix' = 'doris_label'\n);\n\ninsert into doris_sink select id,name from cdc_mysql_source;\n")),(0,r.kt)("h2",{id:"java-example"},"Java example"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"samples/doris-demo/"),"  An example of the Java version is provided below for reference, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/tree/master/samples/doris-demo/"},"here")),(0,r.kt)("h2",{id:"best-practices"},"Best Practices"),(0,r.kt)("h3",{id:"application-scenarios"},"Application scenarios"),(0,r.kt)("p",null,"The most suitable scenario for using Flink Doris Connector is to synchronize source data to Doris (Mysql, Oracle, PostgreSQL) in real time/batch, etc., and use Flink to perform joint analysis on data in Doris and other data sources. You can also use Flink Doris Connector"),(0,r.kt)("h3",{id:"other"},"Other"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The Flink Doris Connector mainly relies on Checkpoint for streaming writing, so the interval between Checkpoints is the visible delay time of the data."),(0,r.kt)("li",{parentName:"ol"},"To ensure the Exactly Once semantics of Flink, the Flink Doris Connector enables two-phase commit by default, and Doris enables two-phase commit by default after version 1.1. 1.0 can be enabled by modifying the BE parameters, please refer to ",(0,r.kt)("a",{parentName:"li",href:"/docs/dev/data-operate/import/import-way/stream-load-manual"},"two_phase_commit"),".")),(0,r.kt)("h3",{id:"common-problem"},"common problem"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Bitmap type write"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE bitmap_sink (\ndt int,\npage string,\nuser_id int\n)\nWITH (\n   'connector' = 'doris',\n   'fenodes' = '127.0.0.1:8030',\n   'table.identifier' = 'test.bitmap_test',\n   'username' = 'root',\n   'password' = '',\n   'sink.label-prefix' = 'doris_label',\n   'sink.properties.columns' = 'dt,page,user_id,user_id=to_bitmap(user_id)'\n)\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"errCode = 2, detailMessage = Label ","[label_0_1]"," has already been used, relate to txn ","[19650]"))),(0,r.kt)("p",null,"In the Exactly-Once scenario, the Flink Job must be restarted from the latest Checkpoint/Savepoint, otherwise the above error will be reported.\nWhen Exactly-Once is not required, it can also be solved by turning off 2PC commits (sink.enable-2pc=false) or changing to a different sink.label-prefix."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"errCode = 2, detailMessage = transaction ","[19650]"," not found"))),(0,r.kt)("p",null,"Occurred in the Commit phase, the transaction ID recorded in the checkpoint has expired on the FE side, and the above error will occur when committing again at this time.\nAt this time, it cannot be started from the checkpoint, and the expiration time can be extended by modifying the streaming_label_keep_max_second configuration in fe.conf, which defaults to 12 hours."))}u.isMDXComponent=!0}}]);