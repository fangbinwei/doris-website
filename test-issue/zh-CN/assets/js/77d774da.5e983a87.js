"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[71872],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},k="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),k=d(a),u=r,N=k["".concat(p,".").concat(u)]||k[u]||m[u]||l;return a?n.createElement(N,i(i({ref:e},s),{},{components:a})):n.createElement(N,i({ref:e},s))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[k]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},96869:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"Spark Doris Connector",language:"zh-CN"},i=void 0,o={unversionedId:"ecosystem/spark-doris-connector",id:"version-dev/ecosystem/spark-doris-connector",title:"Spark Doris Connector",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/ecosystem/spark-doris-connector.md",sourceDirName:"ecosystem",slug:"/ecosystem/spark-doris-connector",permalink:"/zh-CN/docs/dev/ecosystem/spark-doris-connector",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/ecosystem/spark-doris-connector.md",tags:[],version:"dev",frontMatter:{title:"Spark Doris Connector",language:"zh-CN"},sidebar:"docs",previous:{title:"Doris On Hive",permalink:"/zh-CN/docs/dev/ecosystem/external-table/hive-of-doris"},next:{title:"Flink Doris Connector",permalink:"/zh-CN/docs/dev/ecosystem/flink-doris-connector"}},p={},d=[{value:"\u7248\u672c\u517c\u5bb9",id:"\u7248\u672c\u517c\u5bb9",level:2},{value:"\u7f16\u8bd1\u4e0e\u5b89\u88c5",id:"\u7f16\u8bd1\u4e0e\u5b89\u88c5",level:2},{value:"\u4f7f\u7528Maven\u7ba1\u7406",id:"\u4f7f\u7528maven\u7ba1\u7406",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u8bfb\u53d6",id:"\u8bfb\u53d6",level:3},{value:"SQL",id:"sql",level:4},{value:"DataFrame",id:"dataframe",level:4},{value:"RDD",id:"rdd",level:4},{value:"pySpark",id:"pyspark",level:4},{value:"\u5199\u5165",id:"\u5199\u5165",level:3},{value:"SQL",id:"sql-1",level:4},{value:"DataFrame(batch/stream)",id:"dataframebatchstream",level:4},{value:"java\u793a\u4f8b",id:"java\u793a\u4f8b",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u901a\u7528\u914d\u7f6e\u9879",id:"\u901a\u7528\u914d\u7f6e\u9879",level:3},{value:"SQL \u548c Dataframe \u4e13\u6709\u914d\u7f6e",id:"sql-\u548c-dataframe-\u4e13\u6709\u914d\u7f6e",level:3},{value:"RDD \u4e13\u6709\u914d\u7f6e",id:"rdd-\u4e13\u6709\u914d\u7f6e",level:3},{value:"Doris \u548c Spark \u5217\u7c7b\u578b\u6620\u5c04\u5173\u7cfb",id:"doris-\u548c-spark-\u5217\u7c7b\u578b\u6620\u5c04\u5173\u7cfb",level:2}],s={toc:d};function k(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spark-doris-connector"},"Spark Doris Connector"),(0,r.kt)("p",null,"Spark Doris Connector \u53ef\u4ee5\u652f\u6301\u901a\u8fc7 Spark \u8bfb\u53d6 Doris \u4e2d\u5b58\u50a8\u7684\u6570\u636e\uff0c\u4e5f\u652f\u6301\u901a\u8fc7Spark\u5199\u5165\u6570\u636e\u5230Doris\u3002"),(0,r.kt)("p",null,"\u4ee3\u7801\u5e93\u5730\u5740\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris-spark-connector"},"https://github.com/apache/incubator-doris-spark-connector")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u4ece",(0,r.kt)("inlineCode",{parentName:"li"},"Doris"),"\u4e2d\u8bfb\u53d6\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"li"},"Spark DataFrame"),"\u6279\u91cf/\u6d41\u5f0f \u5199\u5165",(0,r.kt)("inlineCode",{parentName:"li"},"Doris")),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c06",(0,r.kt)("inlineCode",{parentName:"li"},"Doris"),"\u8868\u6620\u5c04\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"DataFrame"),"\u6216\u8005",(0,r.kt)("inlineCode",{parentName:"li"},"RDD"),"\uff0c\u63a8\u8350\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"DataFrame"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"Doris"),"\u7aef\u5b8c\u6210\u6570\u636e\u8fc7\u6ee4\uff0c\u51cf\u5c11\u6570\u636e\u4f20\u8f93\u91cf\u3002")),(0,r.kt)("h2",{id:"\u7248\u672c\u517c\u5bb9"},"\u7248\u672c\u517c\u5bb9"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Connector"),(0,r.kt)("th",{parentName:"tr",align:null},"Spark"),(0,r.kt)("th",{parentName:"tr",align:null},"Doris"),(0,r.kt)("th",{parentName:"tr",align:null},"Java"),(0,r.kt)("th",{parentName:"tr",align:null},"Scala"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2.3.4-2.11.xx"),(0,r.kt)("td",{parentName:"tr",align:null},"2.x"),(0,r.kt)("td",{parentName:"tr",align:null},"0.12+"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"2.11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3.1.2-2.12.xx"),(0,r.kt)("td",{parentName:"tr",align:null},"3.x"),(0,r.kt)("td",{parentName:"tr",align:null},"0.12.+"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"2.12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3.2.0-2.12.xx"),(0,r.kt)("td",{parentName:"tr",align:null},"3.2.x"),(0,r.kt)("td",{parentName:"tr",align:null},"0.12.+"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"2.12")))),(0,r.kt)("h2",{id:"\u7f16\u8bd1\u4e0e\u5b89\u88c5"},"\u7f16\u8bd1\u4e0e\u5b89\u88c5"),(0,r.kt)("p",null,"\u51c6\u5907\u5de5\u4f5c"),(0,r.kt)("p",null,"1.\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"custom_env.sh.tpl"),"\u6587\u4ef6\uff0c\u91cd\u547d\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"custom_env.sh")),(0,r.kt)("p",null,"2.\u6307\u5b9athrift\u5b89\u88c5\u76ee\u5f55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"##\u6e90\u6587\u4ef6\u5185\u5bb9\n#export THRIFT_BIN=\n#export MVN_BIN=\n#export JAVA_HOME=\n\n##\u4fee\u6539\u5982\u4e0b,MacOS\u4e3a\u4f8b\nexport THRIFT_BIN=/opt/homebrew/Cellar/thrift@0.13.0/0.13.0/bin/thrift\n#export MVN_BIN=\n#export JAVA_HOME=\n\n\u5b89\u88c5 `thrift` 0.13.0 \u7248\u672c(\u6ce8\u610f\uff1a`Doris` 0.15 \u548c\u6700\u65b0\u7684\u7248\u672c\u57fa\u4e8e `thrift` 0.13.0 \u6784\u5efa, \u4e4b\u524d\u7684\u7248\u672c\u4f9d\u7136\u4f7f\u7528`thrift` 0.9.3 \u6784\u5efa)\n Windows: \n    1.\u4e0b\u8f7d\uff1a`http://archive.apache.org/dist/thrift/0.13.0/thrift-0.13.0.exe`(\u4e0b\u8f7d\u76ee\u5f55\u81ea\u5df1\u6307\u5b9a)\n    2.\u4fee\u6539thrift-0.13.0.exe \u4e3a thrift\n \n MacOS: \n    1. \u4e0b\u8f7d\uff1a`brew install thrift@0.13.0`\n    2. \u9ed8\u8ba4\u4e0b\u8f7d\u5730\u5740\uff1a/opt/homebrew/Cellar/thrift@0.13.0/0.13.0/bin/thrift\n    \n \n \u6ce8\uff1aMacOS\u6267\u884c `brew install thrift@0.13.0` \u53ef\u80fd\u4f1a\u62a5\u627e\u4e0d\u5230\u7248\u672c\u7684\u9519\u8bef\uff0c\u89e3\u51b3\u65b9\u6cd5\u5982\u4e0b\uff0c\u5728\u7ec8\u7aef\u6267\u884c\uff1a\n    1. `brew tap-new $USER/local-tap`\n    2. `brew extract --version='0.13.0' thrift $USER/local-tap`\n    3. `brew install thrift@0.13.0`\n \u53c2\u8003\u94fe\u63a5: `https://gist.github.com/tonydeng/02e571f273d6cce4230dc8d5f394493c`\n \n Linux:\n    1.\u4e0b\u8f7d\u6e90\u7801\u5305\uff1a`wget https://archive.apache.org/dist/thrift/0.13.0/thrift-0.13.0.tar.gz`\n    2.\u5b89\u88c5\u4f9d\u8d56\uff1a`yum install -y autoconf automake libtool cmake ncurses-devel openssl-devel lzo-devel zlib-devel gcc gcc-c++`\n    3.`tar zxvf thrift-0.13.0.tar.gz`\n    4.`cd thrift-0.13.0`\n    5.`./configure --without-tests`\n    6.`make`\n    7.`make install`\n   \u5b89\u88c5\u5b8c\u6210\u540e\u67e5\u770b\u7248\u672c\uff1athrift --version  \n   \u6ce8\uff1a\u5982\u679c\u7f16\u8bd1\u8fc7Doris\uff0c\u5219\u4e0d\u9700\u8981\u5b89\u88c5thrift,\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 $DORIS_HOME/thirdparty/installed/bin/thrift\n")),(0,r.kt)("p",null,"\u5728\u6e90\u7801\u76ee\u5f55\u4e0b\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sh build.sh --spark 2.3.4 --scala 2.11 ## spark 2.3.4, scala 2.11\nsh build.sh --spark 3.1.2 --scala 2.12 ## spark 3.1.2, scala 2.12\nsh build.sh --spark 3.2.0 --scala 2.12 \\\n--mvn-args "-Dnetty.version=4.1.68.Final -Dfasterxml.jackson.version=2.12.3" ## spark 3.2.0, scala 2.12\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u5982\u679c\u4f60\u662f\u4ece tag \u68c0\u51fa\u7684\u6e90\u7801\uff0c\u5219\u53ef\u4ee5\u76f4\u63a5\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"sh build.sh --tag"),"\uff0c\u800c\u65e0\u9700\u6307\u5b9a spark \u548c scala \u7684\u7248\u672c\u3002\u56e0\u4e3a tag \u6e90\u7801\u4e2d\u7684\u7248\u672c\u662f\u56fa\u5b9a\u7684\u3002")),(0,r.kt)("p",null,"\u7f16\u8bd1\u6210\u529f\u540e\uff0c\u4f1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"output/")," \u76ee\u5f55\u4e0b\u751f\u6210\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"doris-spark-2.3.4-2.11-1.0.0-SNAPSHOT.jar"),"\u3002\u5c06\u6b64\u6587\u4ef6\u590d\u5236\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Spark")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ClassPath")," \u4e2d\u5373\u53ef\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Spark-Doris-Connector"),"\u3002\u4f8b\u5982\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Local")," \u6a21\u5f0f\u8fd0\u884c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Spark"),"\uff0c\u5c06\u6b64\u6587\u4ef6\u653e\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"jars/")," \u6587\u4ef6\u5939\u4e0b\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Yarn"),"\u96c6\u7fa4\u6a21\u5f0f\u8fd0\u884c\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Spark"),"\uff0c\u5219\u5c06\u6b64\u6587\u4ef6\u653e\u5165\u9884\u90e8\u7f72\u5305\u4e2d\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"doris-spark-2.3.4-2.11-1.0.0-SNAPSHOT.jar")," \u4e0a\u4f20\u5230 hdfs\u5e76\u5728spark.yarn.jars\u53c2\u6570\u4e0a\u6dfb\u52a0 hdfs\u4e0a\u7684Jar\u5305\u8def\u5f84"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e0a\u4f20doris-spark-connector-3.1.2-2.12-1.0.0.jar \u5230hdfs\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hdfs dfs -mkdir /spark-jars/\nhdfs dfs -put /your_local_path/doris-spark-connector-3.1.2-2.12-1.0.0.jar /spark-jars/\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5728\u96c6\u7fa4\u4e2d\u6dfb\u52a0doris-spark-connector-3.1.2-2.12-1.0.0.jar \u4f9d\u8d56\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"spark.yarn.jars=hdfs:///spark-jars/doris-spark-connector-3.1.2-2.12-1.0.0.jar\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528maven\u7ba1\u7406"},"\u4f7f\u7528Maven\u7ba1\u7406"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dependency>\n  <groupId>org.apache.doris</groupId>\n  <artifactId>spark-doris-connector-3.1_2.12</artifactId>\n  \x3c!--artifactId>spark-doris-connector-2.3_2.11</artifactId--\x3e\n  <version>1.0.1</version>\n</dependency>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,r.kt)("p",null,"\u8bf7\u6839\u636e\u4e0d\u540c\u7684 Spark \u548c Scala \u7248\u672c\u66ff\u6362\u76f8\u5e94\u7684 Connector \u7248\u672c\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,r.kt)("h3",{id:"\u8bfb\u53d6"},"\u8bfb\u53d6"),(0,r.kt)("h4",{id:"sql"},"SQL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TEMPORARY VIEW spark_doris\nUSING doris\nOPTIONS(\n  "table.identifier"="$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME",\n  "fenodes"="$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT",\n  "user"="$YOUR_DORIS_USERNAME",\n  "password"="$YOUR_DORIS_PASSWORD"\n);\n\nSELECT * FROM spark_doris;\n')),(0,r.kt)("h4",{id:"dataframe"},"DataFrame"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val dorisSparkDF = spark.read.format("doris")\n  .option("doris.table.identifier", "$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME")\n    .option("doris.fenodes", "$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT")\n  .option("user", "$YOUR_DORIS_USERNAME")\n  .option("password", "$YOUR_DORIS_PASSWORD")\n  .load()\n\ndorisSparkDF.show(5)\n')),(0,r.kt)("h4",{id:"rdd"},"RDD"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import org.apache.doris.spark._\nval dorisSparkRDD = sc.dorisRDD(\n  tableIdentifier = Some("$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME"),\n  cfg = Some(Map(\n    "doris.fenodes" -> "$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT",\n    "doris.request.auth.user" -> "$YOUR_DORIS_USERNAME",\n    "doris.request.auth.password" -> "$YOUR_DORIS_PASSWORD"\n  ))\n)\n\ndorisSparkRDD.collect()\n')),(0,r.kt)("h4",{id:"pyspark"},"pySpark"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'dorisSparkDF = spark.read.format("doris")\n.option("doris.table.identifier", "$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME")\n.option("doris.fenodes", "$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT")\n.option("user", "$YOUR_DORIS_USERNAME")\n.option("password", "$YOUR_DORIS_PASSWORD")\n.load()\n# show 5 lines data \ndorisSparkDF.show(5)\n')),(0,r.kt)("h3",{id:"\u5199\u5165"},"\u5199\u5165"),(0,r.kt)("h4",{id:"sql-1"},"SQL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TEMPORARY VIEW spark_doris\nUSING doris\nOPTIONS(\n  "table.identifier"="$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME",\n  "fenodes"="$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT",\n  "user"="$YOUR_DORIS_USERNAME",\n  "password"="$YOUR_DORIS_PASSWORD"\n);\n\nINSERT INTO spark_doris VALUES ("VALUE1","VALUE2",...);\n# or\nINSERT INTO spark_doris SELECT * FROM YOUR_TABLE\n')),(0,r.kt)("h4",{id:"dataframebatchstream"},"DataFrame(batch/stream)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'## batch sink\nval mockDataDF = List(\n  (3, "440403001005", "21.cn"),\n  (1, "4404030013005", "22.cn"),\n  (33, null, "23.cn")\n).toDF("id", "mi_code", "mi_name")\nmockDataDF.show(5)\n\nmockDataDF.write.format("doris")\n  .option("doris.table.identifier", "$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME")\n    .option("doris.fenodes", "$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT")\n  .option("user", "$YOUR_DORIS_USERNAME")\n  .option("password", "$YOUR_DORIS_PASSWORD")\n  //\u5176\u5b83\u9009\u9879\n  //\u6307\u5b9a\u4f60\u8981\u5199\u5165\u7684\u5b57\u6bb5\n  .option("doris.write.fields","$YOUR_FIELDS_TO_WRITE")\n  .save()\n\n## stream sink(StructuredStreaming)\nval kafkaSource = spark.readStream\n  .option("kafka.bootstrap.servers", "$YOUR_KAFKA_SERVERS")\n  .option("startingOffsets", "latest")\n  .option("subscribe", "$YOUR_KAFKA_TOPICS")\n  .format("kafka")\n  .load()\nkafkaSource.selectExpr("CAST(key AS STRING)", "CAST(value as STRING)")\n  .writeStream\n  .format("doris")\n  .option("checkpointLocation", "$YOUR_CHECKPOINT_LOCATION")\n  .option("doris.table.identifier", "$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME")\n    .option("doris.fenodes", "$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT")\n  .option("user", "$YOUR_DORIS_USERNAME")\n  .option("password", "$YOUR_DORIS_PASSWORD")\n  //\u5176\u5b83\u9009\u9879\n  //\u6307\u5b9a\u4f60\u8981\u5199\u5165\u7684\u5b57\u6bb5\n  .option("doris.write.fields","$YOUR_FIELDS_TO_WRITE")\n  .start()\n  .awaitTermination()\n')),(0,r.kt)("h3",{id:"java\u793a\u4f8b"},"java\u793a\u4f8b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"samples/doris-demo/spark-demo/")," \u4e0b\u63d0\u4f9b\u4e86 Java \u7248\u672c\u7684\u793a\u4f8b\uff0c\u53ef\u4f9b\u53c2\u8003\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/tree/master/samples/doris-demo/spark-demo"},"\u8fd9\u91cc")),(0,r.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("h3",{id:"\u901a\u7528\u914d\u7f6e\u9879"},"\u901a\u7528\u914d\u7f6e\u9879"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.fenodes"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Doris FE http \u5730\u5740\uff0c\u652f\u6301\u591a\u4e2a\u5730\u5740\uff0c\u4f7f\u7528\u9017\u53f7\u5206\u9694")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.table.identifier"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Doris \u8868\u540d\uff0c\u5982\uff1adb1.tbl1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.retries"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5411Doris\u53d1\u9001\u8bf7\u6c42\u7684\u91cd\u8bd5\u6b21\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.connect.timeout.ms"),(0,r.kt)("td",{parentName:"tr",align:null},"30000"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5411Doris\u53d1\u9001\u8bf7\u6c42\u7684\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.read.timeout.ms"),(0,r.kt)("td",{parentName:"tr",align:null},"30000"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5411Doris\u53d1\u9001\u8bf7\u6c42\u7684\u8bfb\u53d6\u8d85\u65f6\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.query.timeout.s"),(0,r.kt)("td",{parentName:"tr",align:null},"3600"),(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2doris\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u503c\u4e3a1\u5c0f\u65f6\uff0c-1\u8868\u793a\u65e0\u8d85\u65f6\u9650\u5236")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.tablet.size"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer.MAX_VALUE"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e00\u4e2aRDD Partition\u5bf9\u5e94\u7684Doris Tablet\u4e2a\u6570\u3002",(0,r.kt)("br",null),"\u6b64\u6570\u503c\u8bbe\u7f6e\u8d8a\u5c0f\uff0c\u5219\u4f1a\u751f\u6210\u8d8a\u591a\u7684Partition\u3002\u4ece\u800c\u63d0\u5347Spark\u4fa7\u7684\u5e76\u884c\u5ea6\uff0c\u4f46\u540c\u65f6\u4f1a\u5bf9Doris\u9020\u6210\u66f4\u5927\u7684\u538b\u529b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.batch.size"),(0,r.kt)("td",{parentName:"tr",align:null},"1024"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e00\u6b21\u4eceBE\u8bfb\u53d6\u6570\u636e\u7684\u6700\u5927\u884c\u6570\u3002\u589e\u5927\u6b64\u6570\u503c\u53ef\u51cf\u5c11Spark\u4e0eDoris\u4e4b\u95f4\u5efa\u7acb\u8fde\u63a5\u7684\u6b21\u6570\u3002",(0,r.kt)("br",null),"\u4ece\u800c\u51cf\u8f7b\u7f51\u7edc\u5ef6\u8fdf\u6240\u5e26\u6765\u7684\u989d\u5916\u65f6\u95f4\u5f00\u9500\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.exec.mem.limit"),(0,r.kt)("td",{parentName:"tr",align:null},"2147483648"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5355\u4e2a\u67e5\u8be2\u7684\u5185\u5b58\u9650\u5236\u3002\u9ed8\u8ba4\u4e3a 2GB\uff0c\u5355\u4f4d\u4e3a\u5b57\u8282")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.deserialize.arrow.async"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301\u5f02\u6b65\u8f6c\u6362Arrow\u683c\u5f0f\u5230spark-doris-connector\u8fed\u4ee3\u6240\u9700\u7684RowBatch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.deserialize.queue.size"),(0,r.kt)("td",{parentName:"tr",align:null},"64"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f02\u6b65\u8f6c\u6362Arrow\u683c\u5f0f\u7684\u5185\u90e8\u5904\u7406\u961f\u5217\uff0c\u5f53doris.deserialize.arrow.async\u4e3atrue\u65f6\u751f\u6548")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.write.fields"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5199\u5165Doris\u8868\u7684\u5b57\u6bb5\u6216\u8005\u5b57\u6bb5\u987a\u5e8f\uff0c\u591a\u5217\u4e4b\u95f4\u4f7f\u7528\u9017\u53f7\u5206\u9694\u3002",(0,r.kt)("br",null),"\u9ed8\u8ba4\u5199\u5165\u65f6\u8981\u6309\u7167Doris\u8868\u5b57\u6bb5\u987a\u5e8f\u5199\u5165\u5168\u90e8\u5b57\u6bb5\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.batch.size"),(0,r.kt)("td",{parentName:"tr",align:null},"10000"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5355\u6b21\u5199BE\u7684\u6700\u5927\u884c\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.max-retries"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5199BE\u5931\u8d25\u4e4b\u540e\u7684\u91cd\u8bd5\u6b21\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.properties.*"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Stream Load \u7684\u5bfc\u5165\u53c2\u6570\u3002",(0,r.kt)("br",null),"\u4f8b\u5982:  'sink.properties.column_separator' = ', '")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.sink.task.partition.size"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Doris\u5199\u5165\u4efb\u52a1\u5bf9\u5e94\u7684 Partition \u4e2a\u6570\u3002Spark RDD \u7ecf\u8fc7\u8fc7\u6ee4\u7b49\u64cd\u4f5c\uff0c\u6700\u540e\u5199\u5165\u7684 Partition \u6570\u53ef\u80fd\u4f1a\u6bd4\u8f83\u5927\uff0c\u4f46\u6bcf\u4e2a Partition \u5bf9\u5e94\u7684\u8bb0\u5f55\u6570\u6bd4\u8f83\u5c11\uff0c\u5bfc\u81f4\u5199\u5165\u9891\u7387\u589e\u52a0\u548c\u8ba1\u7b97\u8d44\u6e90\u6d6a\u8d39\u3002",(0,r.kt)("br",null),"\u6b64\u6570\u503c\u8bbe\u7f6e\u8d8a\u5c0f\uff0c\u53ef\u4ee5\u964d\u4f4e Doris \u5199\u5165\u9891\u7387\uff0c\u51cf\u5c11 Doris \u5408\u5e76\u538b\u529b\u3002\u8be5\u53c2\u6570\u914d\u5408 doris.sink.task.use.repartition \u4f7f\u7528\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.sink.task.use.repartition"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u91c7\u7528 repartition \u65b9\u5f0f\u63a7\u5236 Doris\u5199\u5165 Partition\u6570\u3002\u9ed8\u8ba4\u503c\u4e3a false\uff0c\u91c7\u7528 coalesce \u65b9\u5f0f\u63a7\u5236\uff08\u6ce8\u610f: \u5982\u679c\u5728\u5199\u5165\u4e4b\u524d\u6ca1\u6709 Spark action \u7b97\u5b50\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6574\u4e2a\u8ba1\u7b97\u5e76\u884c\u5ea6\u964d\u4f4e\uff09\u3002",(0,r.kt)("br",null),"\u5982\u679c\u8bbe\u7f6e\u4e3a true\uff0c\u5219\u91c7\u7528 repartition \u65b9\u5f0f\uff08\u6ce8\u610f: \u53ef\u8bbe\u7f6e\u6700\u540e Partition \u6570\uff0c\u4f46\u4f1a\u989d\u5916\u589e\u52a0 shuffle \u5f00\u9500\uff09\u3002")))),(0,r.kt)("h3",{id:"sql-\u548c-dataframe-\u4e13\u6709\u914d\u7f6e"},"SQL \u548c Dataframe \u4e13\u6709\u914d\u7f6e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbf\u95eeDoris\u7684\u7528\u6237\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbf\u95eeDoris\u7684\u5bc6\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.filter.query.in.max.count"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8c13\u8bcd\u4e0b\u63a8\u4e2d\uff0cin\u8868\u8fbe\u5f0fvalue\u5217\u8868\u5143\u7d20\u6700\u5927\u6570\u91cf\u3002\u8d85\u8fc7\u6b64\u6570\u91cf\uff0c\u5219in\u8868\u8fbe\u5f0f\u6761\u4ef6\u8fc7\u6ee4\u5728Spark\u4fa7\u5904\u7406\u3002")))),(0,r.kt)("h3",{id:"rdd-\u4e13\u6709\u914d\u7f6e"},"RDD \u4e13\u6709\u914d\u7f6e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.auth.user"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbf\u95eeDoris\u7684\u7528\u6237\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.auth.password"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbf\u95eeDoris\u7684\u5bc6\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.read.field"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bfb\u53d6Doris\u8868\u7684\u5217\u540d\u5217\u8868\uff0c\u591a\u5217\u4e4b\u95f4\u4f7f\u7528\u9017\u53f7\u5206\u9694")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.filter.query"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fc7\u6ee4\u8bfb\u53d6\u6570\u636e\u7684\u8868\u8fbe\u5f0f\uff0c\u6b64\u8868\u8fbe\u5f0f\u900f\u4f20\u7ed9Doris\u3002Doris\u4f7f\u7528\u6b64\u8868\u8fbe\u5f0f\u5b8c\u6210\u6e90\u7aef\u6570\u636e\u8fc7\u6ee4\u3002")))),(0,r.kt)("h2",{id:"doris-\u548c-spark-\u5217\u7c7b\u578b\u6620\u5c04\u5173\u7cfb"},"Doris \u548c Spark \u5217\u7c7b\u578b\u6620\u5c04\u5173\u7cfb"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Spark Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NULL_TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.NullType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.BooleanType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.ByteType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.ShortType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.IntegerType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.LongType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.FloatType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.DoubleType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.StringType",(0,r.kt)("sup",null,"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.StringType",(0,r.kt)("sup",null,"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BINARY"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.BinaryType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.kt)("td",{parentName:"tr",align:null},"DecimalType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CHAR"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.StringType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LARGEINT"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.StringType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.StringType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DECIMALV2"),(0,r.kt)("td",{parentName:"tr",align:null},"DecimalType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIME"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.DoubleType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HLL"),(0,r.kt)("td",{parentName:"tr",align:null},"Unsupported datatype")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6ce8\uff1aConnector\u4e2d\uff0c\u5c06",(0,r.kt)("inlineCode",{parentName:"li"},"DATE"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"DATETIME"),"\u6620\u5c04\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"String"),"\u3002\u7531\u4e8e",(0,r.kt)("inlineCode",{parentName:"li"},"Doris"),"\u5e95\u5c42\u5b58\u50a8\u5f15\u64ce\u5904\u7406\u903b\u8f91\uff0c\u76f4\u63a5\u4f7f\u7528\u65f6\u95f4\u7c7b\u578b\u65f6\uff0c\u8986\u76d6\u7684\u65f6\u95f4\u8303\u56f4\u65e0\u6cd5\u6ee1\u8db3\u9700\u6c42\u3002\u6240\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"String")," \u7c7b\u578b\u76f4\u63a5\u8fd4\u56de\u5bf9\u5e94\u7684\u65f6\u95f4\u53ef\u8bfb\u6587\u672c\u3002")))}k.isMDXComponent=!0}}]);