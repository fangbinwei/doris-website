"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[39547],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(r),u=n,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return r?a.createElement(k,o(o({ref:t},s),{},{components:r})):a.createElement(k,o({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},22233:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const i={title:"DataX doriswriter",language:"en"},o=void 0,l={unversionedId:"extending-doris/datax",id:"version-0.15/extending-doris/datax",title:"DataX doriswriter",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/extending-doris/datax.md",sourceDirName:"extending-doris",slug:"/extending-doris/datax",permalink:"/docs/0.15/extending-doris/datax",draft:!1,tags:[],version:"0.15",frontMatter:{title:"DataX doriswriter",language:"en"},sidebar:"docs",previous:{title:"Flink Doris Connector",permalink:"/docs/0.15/extending-doris/flink-doris-connector"},next:{title:"Contribute UDF",permalink:"/docs/0.15/extending-doris/udf/contribute-udf"}},p={},d=[{value:"About DataX",id:"about-datax",level:2},{value:"Usage",id:"usage",level:2},{value:"Directory structure",id:"directory-structure",level:3},{value:"How to build",id:"how-to-build",level:3},{value:"Example",id:"example",level:3}],s={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"datax-doriswriter"},"DataX doriswriter"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/alibaba/DataX"},"DataX")," doriswriter plug-in, used to synchronize data from other data sources to Doris through DataX."),(0,n.kt)("p",null,"The plug-in uses Doris' Stream Load function to synchronize and import data. It needs to be used with DataX service."),(0,n.kt)("h2",{id:"about-datax"},"About DataX"),(0,n.kt)("p",null,"DataX is an open source version of Alibaba Cloud DataWorks data integration, an offline data synchronization tool/platform widely used in Alibaba Group. DataX implements efficient data synchronization functions between various heterogeneous data sources including MySQL, Oracle, SqlServer, Postgre, HDFS, Hive, ADS, HBase, TableStore (OTS), MaxCompute (ODPS), Hologres, DRDS, etc."),(0,n.kt)("p",null,"More details can be found at: ",(0,n.kt)("inlineCode",{parentName:"p"},"https://github.com/alibaba/DataX/")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"The code of DataX doriswriter plug-in can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/tree/master/extension/DataX"},"here"),"."),(0,n.kt)("p",null,"This directory is the doriswriter plug-in development environment of Alibaba DataX."),(0,n.kt)("p",null,"Because the doriswriter plug-in depends on some modules in the DataX code base, and these module dependencies are not submitted to the official Maven repository, when we develop the doriswriter plug-in, we need to download the complete DataX code base to facilitate our development and compilation of the doriswriter plug-in."),(0,n.kt)("h3",{id:"directory-structure"},"Directory structure"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"doriswriter/")),(0,n.kt)("p",{parentName:"li"},"This directory is the code directory of doriswriter, and this part of the code should be in the Doris code base."),(0,n.kt)("p",{parentName:"li"},"The help doc can be found in ",(0,n.kt)("inlineCode",{parentName:"p"},"doriswriter/doc"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"init_env.sh")),(0,n.kt)("p",{parentName:"li"},"The script mainly performs the following steps:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Git clone the DataX code base to the local")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Softlink the ",(0,n.kt)("inlineCode",{parentName:"p"},"doriswriter/")," directory to ",(0,n.kt)("inlineCode",{parentName:"p"},"DataX/doriswriter"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add ",(0,n.kt)("inlineCode",{parentName:"p"},"<module>doriswriter</module>")," to the original ",(0,n.kt)("inlineCode",{parentName:"p"},"DataX/pom.xml"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Change httpclient version from 4.5 to 4.5.13 in DataX/core/pom.xml"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"httpclient v4.5 can not handle redirect 307 correctly.")))),(0,n.kt)("p",{parentName:"li"},"After that, developers can enter ",(0,n.kt)("inlineCode",{parentName:"p"},"DataX/")," for development. And the changes in the ",(0,n.kt)("inlineCode",{parentName:"p"},"DataX/doriswriter")," directory will be reflected in the ",(0,n.kt)("inlineCode",{parentName:"p"},"doriswriter/")," directory, which is convenient for developers to submit code."))),(0,n.kt)("h3",{id:"how-to-build"},"How to build"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"init_env.sh"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Modify code of doriswriter in ",(0,n.kt)("inlineCode",{parentName:"p"},"DataX/doriswriter")," if you need.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Build doriswriter"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Build doriswriter along:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"mvn clean install -pl plugin-rdbms-util,doriswriter -DskipTests"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Build DataX:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"mvn package assembly:assembly -Dmaven.test.skip=true")),(0,n.kt)("p",{parentName:"li"},"The output will be in ",(0,n.kt)("inlineCode",{parentName:"p"},"target/datax/datax/"),"."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"hdfsreader, hdfswriter and oscarwriter needs some extra jar packages. If you don't need to use these components, you can comment out the corresponding module in DataX/pom.xml."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Compilation error"),(0,n.kt)("p",{parentName:"li"},"If you encounter the following compilation errors:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"Could not find artifact com.alibaba.datax:datax-all:pom:0.0.1-SNAPSHOT ...\n")),(0,n.kt)("p",{parentName:"li"},"You can try the following solutions:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Download ",(0,n.kt)("a",{parentName:"li",href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/alibaba-datax-maven-m2-20210928.tar.gz"},"alibaba-datax-maven-m2-20210928.tar.gz")),(0,n.kt)("li",{parentName:"ol"},"After decompression, copy the resulting ",(0,n.kt)("inlineCode",{parentName:"li"},"alibaba/datax/")," directory to ",(0,n.kt)("inlineCode",{parentName:"li"},".m2/repository/com/alibaba/")," corresponding to the maven used."),(0,n.kt)("li",{parentName:"ol"},"Try to compile again."))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Commit code of doriswriter in ",(0,n.kt)("inlineCode",{parentName:"p"},"doriswriter")," if you need."))),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("p",null,"For instructions on using the doriswriter plug-in, please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/blob/master/extension/DataX/doriswriter/doc/doriswriter.md"},"here"),"."))}c.isMDXComponent=!0}}]);