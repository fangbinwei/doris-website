"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[32183],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=i.createContext({}),l=function(e){var t=i.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(a),u=n,h=m["".concat(d,".").concat(u)]||m[u]||s[u]||r;return a?i.createElement(h,o(o({ref:t},c),{},{components:a})):i.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[m]="string"==typeof e?e:n,o[1]=p;for(var l=2;l<r;l++)o[l]=a[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},68331:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var i=a(87462),n=(a(67294),a(3905));const r={title:"Hive Bitmap UDF",language:"en"},o=void 0,p={unversionedId:"ecosystem/external-table/hive-bitmap-udf",id:"version-dev/ecosystem/external-table/hive-bitmap-udf",title:"Hive Bitmap UDF",description:"\x3c!--",source:"@site/versioned_docs/version-dev/ecosystem/external-table/hive-bitmap-udf.md",sourceDirName:"ecosystem/external-table",slug:"/ecosystem/external-table/hive-bitmap-udf",permalink:"/docs/dev/ecosystem/external-table/hive-bitmap-udf",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/ecosystem/external-table/hive-bitmap-udf.md",tags:[],version:"dev",frontMatter:{title:"Hive Bitmap UDF",language:"en"}},d={},l=[{value:"How To Use",id:"how-to-use",level:2},{value:"Create Bitmap type table in Hive",id:"create-bitmap-type-table-in-hive",level:3},{value:"Hive Bitmap UDF Usage\uff1a",id:"hive-bitmap-udf-usage",level:3},{value:"Hive Bitmap UDF  Description",id:"hive-bitmap-udf--description",level:3},{value:"Hive Bitmap import into Doris",id:"hive-bitmap-import-into-doris",level:2}],c={toc:l};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"hive-udf"},"Hive UDF"),(0,n.kt)("p",null," Hive Bitmap UDF provides UDFs for generating bitmap and bitmap operations in hive tables. The bitmap in Hive is exactly the same as the Doris bitmap. The bitmap in Hive can be imported into doris through (spark bitmap load)."),(0,n.kt)("p",null," the main purpose:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Reduce the time of importing data into doris, and remove processes such as dictionary building and bitmap pre-aggregation;"),(0,n.kt)("li",{parentName:"ol"},"Save hive storage, use bitmap to compress data, reduce storage cost;"),(0,n.kt)("li",{parentName:"ol"},"Provide flexible bitmap operations in hive, such as: intersection, union, and difference operations, and the calculated bitmap can also be directly imported into doris; imported into doris;")),(0,n.kt)("h2",{id:"how-to-use"},"How To Use"),(0,n.kt)("h3",{id:"create-bitmap-type-table-in-hive"},"Create Bitmap type table in Hive"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"-- Example: Create Hive Bitmap Table\nCREATE TABLE IF NOT EXISTS `hive_bitmap_table`(\n  `k1`   int       COMMENT '',\n  `k2`   String    COMMENT '',\n  `k3`   String    COMMENT '',\n  `uuid` binary    COMMENT 'bitmap'\n) comment  'comment'\n\n-- Example\uff1aCreate Hive Table\nCREATE TABLE IF NOT EXISTS `hive_table`(\n  `k1`   int       COMMENT '',\n  `k2`   String    COMMENT '',\n  `k3`   String    COMMENT '',\n  `uuid` int       COMMENT ''\n) comment  'comment'\n")),(0,n.kt)("h3",{id:"hive-bitmap-udf-usage"},"Hive Bitmap UDF Usage\uff1a"),(0,n.kt)("p",null,"   Hive Bitmap UDF used in Hive/Spark,First, you need to compile fe to get hive-udf-jar-with-dependencies.jar.\nCompilation preparation:If you have compiled the ldb source code, you can directly compile fe,If you have compiled the ldb source code, you can compile it directly. If you have not compiled the ldb source code, you need to manually install thrift\uff0c\nReference:",(0,n.kt)("a",{parentName:"p",href:"/community/developer-guide/fe-idea-dev"},"Setting Up dev env for FE")," ."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"--clone doris code\ngit clone https://github.com/apache/doris.git\n--install thrift\n--Enter the fe directory\ncd fe\n--Execute the maven packaging command\uff08All sub modules of fe will be packaged\uff09\nmvn package -Dmaven.test.skip=true\n--You can also just package the hive-udf module\nmvn package -pl hive-udf -am -Dmaven.test.skip=true\n")),(0,n.kt)("p",null,"After packaging and compiling, enter the hive-udf directory and there will be a target directory,There will be hive-udf-jar-with-dependencies.jar package"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"-- Load the Hive Bitmap Udf jar package (Upload the compiled hive-udf jar package to HDFS)\nadd jar hdfs://node:9001/hive-udf-jar-with-dependencies.jar;\n-- Create Hive Bitmap UDAF function\ncreate temporary function to_bitmap as 'org.apache.doris.udf.ToBitmapUDAF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\ncreate temporary function bitmap_union as 'org.apache.doris.udf.BitmapUnionUDAF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\n-- Create Hive Bitmap UDF function\ncreate temporary function bitmap_count as 'org.apache.doris.udf.BitmapCountUDF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\ncreate temporary function bitmap_and as 'org.apache.doris.udf.BitmapAndUDF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\ncreate temporary function bitmap_or as 'org.apache.doris.udf.BitmapOrUDF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\ncreate temporary function bitmap_xor as 'org.apache.doris.udf.BitmapXorUDF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\n-- Example: Generate bitmap by to_bitmap function and write to Hive Bitmap table\ninsert into hive_bitmap_table\nselect \n    k1,\n    k2,\n    k3,\n    to_bitmap(uuid) as uuid\nfrom \n    hive_table\ngroup by \n    k1,\n    k2,\n    k3\n-- Example: The bitmap_count function calculate the number of elements in the bitmap\nselect k1,k2,k3,bitmap_count(uuid) from hive_bitmap_table\n-- Example: The bitmap_union function calculate the grouped bitmap union\nselect k1,bitmap_union(uuid) from hive_bitmap_table group by k1\n")),(0,n.kt)("h3",{id:"hive-bitmap-udf--description"},"Hive Bitmap UDF  Description"),(0,n.kt)("h2",{id:"hive-bitmap-import-into-doris"},"Hive Bitmap import into Doris"),(0,n.kt)("p",null," see details: ",(0,n.kt)("a",{parentName:"p",href:"../../../data-operate/import/import-way/spark-load-manual"},"Spark Load")," -> Basic operation -> Create load(Example 3: when the upstream data source is hive binary type table)"))}m.isMDXComponent=!0}}]);