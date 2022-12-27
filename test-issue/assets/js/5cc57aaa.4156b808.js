"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[26730],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,f=u["".concat(o,".").concat(d)]||u[d]||c[d]||l;return t?a.createElement(f,s(s({ref:n},m),{},{components:t})):a.createElement(f,s({ref:n},m))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},88740:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const l={title:"s3",language:"en"},s=void 0,i={unversionedId:"sql-manual/sql-functions/table-functions/s3",id:"version-dev/sql-manual/sql-functions/table-functions/s3",title:"s3",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/table-functions/s3.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/s3",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/s3",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/table-functions/s3.md",tags:[],version:"dev",frontMatter:{title:"s3",language:"en"},sidebar:"docs",previous:{title:"explode_numbers",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/explode-numbers"},next:{title:"hdfs",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/hdfs"}},o={},p=[{value:"S3",id:"s3",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"s3"},"S3"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"S3"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("p",null,"S3 table-valued-function(tvf), allows users to read and access file contents on S3-compatible object storage, just like accessing relational table. Currently supports ",(0,r.kt)("inlineCode",{parentName:"p"},"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc")," file format."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"grammer")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'s3(\n  "uri" = "..",\n  "access_key" = "...",\n  "secret_key" = "...",\n  "format" = "csv",\n  "keyn" = "valuen",\n  ...\n  );\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"parameter description")),(0,r.kt)("p",null,"Each parameter in S3 tvf is a pair of ",(0,r.kt)("inlineCode",{parentName:"p"},'"key"="value"'),"."),(0,r.kt)("p",null,"Related parameters for accessing S3:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uri"),": (required) The S3 tvf will decide whether to use the path style access method according to the ",(0,r.kt)("inlineCode",{parentName:"li"},"use_path_style")," parameter, and the default access method is the virtual-hosted style method."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"access_key"),": (required)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secret_key"),": (required)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"use_path_style"),": (optional) default ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," . The S3 SDK uses the virtual-hosted style by default. However, some object storage systems may not be enabled or support virtual-hosted style access. At this time, we can add the ",(0,r.kt)("inlineCode",{parentName:"li"},"use_path_style")," parameter to force the use of path style access method.")),(0,r.kt)("p",null,"file format parameter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"format"),": (required) Currently support ",(0,r.kt)("inlineCode",{parentName:"p"},"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"column_separator"),": (optional) default ",(0,r.kt)("inlineCode",{parentName:"p"},","),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"line_delimiter"),": (optional) default ",(0,r.kt)("inlineCode",{parentName:"p"},"\\n"),"."),(0,r.kt)("p",{parentName:"li"},"  The following 6 parameters are used for loading in json format. For specific usage methods, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"/docs/dev/data-operate/import/import-way/load-json-format"},"Json Load"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"read_json_by_line"),": (optional) default ",(0,r.kt)("inlineCode",{parentName:"p"},'"true"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"strip_outer_array"),": (optional) default ",(0,r.kt)("inlineCode",{parentName:"p"},'"false"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"json_root"),": (optional) default ",(0,r.kt)("inlineCode",{parentName:"p"},'""'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"json_paths"),": (optional) default ",(0,r.kt)("inlineCode",{parentName:"p"},'""'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"num_as_string"),": (optional) default ",(0,r.kt)("inlineCode",{parentName:"p"},'"false"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"fuzzy_parse"),": (optional) default ",(0,r.kt)("inlineCode",{parentName:"p"},'"false"')))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Read and access csv format files on S3-compatible object storage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'select * from s3("uri" = "http://127.0.0.1:9312/test2/student1.csv",\n                "ACCESS_KEY"= "minioadmin",\n                "SECRET_KEY" = "minioadmin",\n                "format" = "csv",\n                "use_path_style" = "true") order by c1;\n')),(0,r.kt)("p",null,"Can be used with ",(0,r.kt)("inlineCode",{parentName:"p"},"desc function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> Desc function s3("uri" = "http://127.0.0.1:9312/test2/student1.csv",\n                 "ACCESS_KEY"= "minioadmin",\n                 "SECRET_KEY" = "minioadmin",\n                 "format" = "csv",\n                 "use_path_style" = "true");\n')),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"s3, table-valued-function, tvf\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"),(0,r.kt)("p",null,"Since the S3 table-valued-function does not know the table schema in advance, it will read the file first to parse out the table schema. Specifically, for different file formats:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"csv foramt"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"csv")," format: Read the file on S3 and process it as a csv file, read the first line in the file to parse out the table schema. The number of columns in the first line of the file ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," will be used as the number of columns in the table schema, and the column names of the table schema will be automatically named ",(0,r.kt)("inlineCode",{parentName:"p"},"c1, c2, ..., cn"),", and the column type is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," , for example:"),(0,r.kt)("p",null,"The file content of student1.csv:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1,ftw,12\n2,zs,18\n3,ww,20\n")),(0,r.kt)("p",null,"use S3 tvf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> select * from s3("uri" = "http://127.0.0.1:9312/test2/student1.csv",\n->                 "ACCESS_KEY"= "minioadmin",\n->                 "SECRET_KEY" = "minioadmin",\n->                 "format" = "csv",\n->                 "use_path_style" = "true") order by c1;\n+------+------+------+\n| c1   | c2   | c3   |\n+------+------+------+\n| 1    | ftw  | 12   |\n| 2    | zs   | 18   |\n| 3    | ww   | 20   |\n+------+------+------+\n')),(0,r.kt)("p",null,"use ",(0,r.kt)("inlineCode",{parentName:"p"},"desc function S3()")," to view the table schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> Desc function s3("uri" = "http://127.0.0.1:9312/test2/student1.csv",\n->                 "ACCESS_KEY"= "minioadmin",\n->                 "SECRET_KEY" = "minioadmin",\n->                 "format" = "csv",\n->                 "use_path_style" = "true");\n+-------+------+------+-------+---------+-------+\n| Field | Type | Null | Key   | Default | Extra |\n+-------+------+------+-------+---------+-------+\n| c1    | TEXT | Yes  | false | NULL    | NONE  |\n| c2    | TEXT | Yes  | false | NULL    | NONE  |\n| c3    | TEXT | Yes  | false | NULL    | NONE  |\n+-------+------+------+-------+---------+-------+\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"csv_with_names foramt"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"csv_with_names")," format: The first line of the file is used as the number and name of the columns of the table schema, and the column type is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),", for example:"),(0,r.kt)("p",null,"The file content of student_with_names.csv:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"id,name,age\n1,ftw,12\n2,zs,18\n3,ww,20\n")),(0,r.kt)("p",null,"use S3 tvf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> select * from s3("uri" = "http://127.0.0.1:9312/test2/student_with_names.csv",\n->                 "ACCESS_KEY"= "minioadmin",\n->                 "SECRET_KEY" = "minioadmin",\n->                 "format" = "csv_with_names",\n->                 "use_path_style" = "true") order by id;\n+------+------+------+\n| id   | name | age  |\n+------+------+------+\n| 1    | ftw  | 12   |\n| 2    | zs   | 18   |\n| 3    | ww   | 20   |\n+------+------+------+\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> Desc function s3("uri" = "http://127.0.0.1:9312/test2/student_with_names.csv",\n->                 "ACCESS_KEY"= "minioadmin",\n->                 "SECRET_KEY" = "minioadmin",\n->                 "format" = "csv_with_names",\n->                 "use_path_style" = "true");\n+-------+------+------+-------+---------+-------+\n| Field | Type | Null | Key   | Default | Extra |\n+-------+------+------+-------+---------+-------+\n| id    | TEXT | Yes  | false | NULL    | NONE  |\n| name  | TEXT | Yes  | false | NULL    | NONE  |\n| age   | TEXT | Yes  | false | NULL    | NONE  |\n+-------+------+------+-------+---------+-------+\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"csv_with_names_and_types foramt")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"csv_with_names_and_types")," foramt: Currently, it does not support parsing the column type from a csv file. When using this format, S3 tvf will parse the first line of the file as the number and name of the columns of the table schema, and set the column type to String. Meanwhile, the second line of the file is ignored."),(0,r.kt)("p",null,"The file content of student_with_names_and_types.csv:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"id,name,age\nINT,STRING,INT\n1,ftw,12\n2,zs,18\n3,ww,20\n")),(0,r.kt)("p",null,"use S3 tvf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> select * from s3("uri" = "http://127.0.0.1:9312/test2/student_with_names_and_types.csv",\n->                 "ACCESS_KEY"= "minioadmin",\n->                 "SECRET_KEY" = "minioadmin",\n->                 "format" = "csv_with_names_and_types",\n->                 "use_path_style" = "true") order by id;\n+------+------+------+\n| id   | name | age  |\n+------+------+------+\n| 1    | ftw  | 12   |\n| 2    | zs   | 18   |\n| 3    | ww   | 20   |\n+------+------+------+\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> Desc function s3("uri" = "http://127.0.0.1:9312/test2/student_with_names_and_types.csv",\n->                 "ACCESS_KEY"= "minioadmin",\n->                 "SECRET_KEY" = "minioadmin",\n->                 "format" = "csv_with_names_and_types",\n->                 "use_path_style" = "true");\n+-------+------+------+-------+---------+-------+\n| Field | Type | Null | Key   | Default | Extra |\n+-------+------+------+-------+---------+-------+\n| id    | TEXT | Yes  | false | NULL    | NONE  |\n| name  | TEXT | Yes  | false | NULL    | NONE  |\n| age   | TEXT | Yes  | false | NULL    | NONE  |\n+-------+------+------+-------+---------+-------+\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"json foramt")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"json")," format: The json format involves many optional parameters, and the meaning of each parameter can be referred to: ",(0,r.kt)("a",{parentName:"p",href:"/docs/dev/data-operate/import/import-way/load-json-format"},"Json Load"),". When S3 tvf queries the json format file, it locates a json object according to the ",(0,r.kt)("inlineCode",{parentName:"p"},"json_root")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"jsonpaths")," parameters, and uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," in the object as the column name of the table schema, and sets the column type to String. For example:"),(0,r.kt)("p",null,"The file content of data.json:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[{"id":1, "name":"ftw", "age":18}]\n[{"id":2, "name":"xxx", "age":17}]\n[{"id":3, "name":"yyy", "age":19}]\n')),(0,r.kt)("p",null,"use S3 tvf:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> select * from s3(\n    "URI" = "http://127.0.0.1:9312/test2/data.json",\n    "ACCESS_KEY"= "minioadmin",\n    "SECRET_KEY" = "minioadmin",\n    "Format" = "json",\n    "strip_outer_array" = "true",\n    "read_json_by_line" = "true",\n    "use_path_style"="true");\n+------+------+------+\n| id   | name | age  |\n+------+------+------+\n| 1    | ftw  | 18   |\n| 2    | xxx  | 17   |\n| 3    | yyy  | 19   |\n+------+------+------+\n\nMySQL [(none)]> select * from s3(\n    "URI" = "http://127.0.0.1:9312/test2/data.json",\n    "ACCESS_KEY"= "minioadmin",\n    "SECRET_KEY" = "minioadmin",\n    "Format" = "json",\n    "strip_outer_array" = "true",\n    "jsonpaths" = "[\\"$.id\\", \\"$.age\\"]",\n    "use_path_style"="true");\n+------+------+\n| id   | age  |\n+------+------+\n| 1    | 18   |\n| 2    | 17   |\n| 3    | 19   |\n+------+------+\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"parquet foramt")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"parquet")," format: S3 tvf supports parsing the column names and column types of the table schema from the parquet file. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> select * from s3(\n    "URI" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "ACCESS_KEY"= "minioadmin",\n    "SECRET_KEY" = "minioadmin",\n    "Format" = "parquet",\n    "use_path_style"="true") limit 5;\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n| p_partkey | p_name                                   | p_mfgr         | p_brand  | p_type                  | p_size | p_container | p_retailprice | p_comment           |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n|         1 | goldenrod lavender spring chocolate lace | Manufacturer#1 | Brand#13 | PROMO BURNISHED COPPER  |      7 | JUMBO PKG   |           901 | ly. slyly ironi     |\n|         2 | blush thistle blue yellow saddle         | Manufacturer#1 | Brand#13 | LARGE BRUSHED BRASS     |      1 | LG CASE     |           902 | lar accounts amo    |\n|         3 | spring green yellow purple cornsilk      | Manufacturer#4 | Brand#42 | STANDARD POLISHED BRASS |     21 | WRAP CASE   |           903 | egular deposits hag |\n|         4 | cornflower chocolate smoke green pink    | Manufacturer#3 | Brand#34 | SMALL PLATED BRASS      |     14 | MED DRUM    |           904 | p furiously r       |\n|         5 | forest brown coral puff cream            | Manufacturer#3 | Brand#32 | STANDARD POLISHED TIN   |     15 | SM PKG      |           905 |  wake carefully     |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> desc function s3(\n    "URI" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "ACCESS_KEY"= "minioadmin",\n    "SECRET_KEY" = "minioadmin",\n    "Format" = "parquet",\n    "use_path_style"="true");\n+---------------+--------------+------+-------+---------+-------+\n| Field         | Type         | Null | Key   | Default | Extra |\n+---------------+--------------+------+-------+---------+-------+\n| p_partkey     | INT          | Yes  | false | NULL    | NONE  |\n| p_name        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_mfgr        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_brand       | TEXT         | Yes  | false | NULL    | NONE  |\n| p_type        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_size        | INT          | Yes  | false | NULL    | NONE  |\n| p_container   | TEXT         | Yes  | false | NULL    | NONE  |\n| p_retailprice | DECIMAL(9,0) | Yes  | false | NULL    | NONE  |\n| p_comment     | TEXT         | Yes  | false | NULL    | NONE  |\n+---------------+--------------+------+-------+---------+-------+\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"orc foramt")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"orc")," format: Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"parquet")," format, set ",(0,r.kt)("inlineCode",{parentName:"p"},"format")," parameter to orc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> select * from s3(\n    "URI" = "http://127.0.0.1:9312/test2/test.snappy.orc",\n    "ACCESS_KEY"= "minioadmin",\n    "SECRET_KEY" = "minioadmin",\n    "Format" = "orc",\n    "use_path_style"="true") limit 5;\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n| p_partkey | p_name                                   | p_mfgr         | p_brand  | p_type                  | p_size | p_container | p_retailprice | p_comment           |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n|         1 | goldenrod lavender spring chocolate lace | Manufacturer#1 | Brand#13 | PROMO BURNISHED COPPER  |      7 | JUMBO PKG   |           901 | ly. slyly ironi     |\n|         2 | blush thistle blue yellow saddle         | Manufacturer#1 | Brand#13 | LARGE BRUSHED BRASS     |      1 | LG CASE     |           902 | lar accounts amo    |\n|         3 | spring green yellow purple cornsilk      | Manufacturer#4 | Brand#42 | STANDARD POLISHED BRASS |     21 | WRAP CASE   |           903 | egular deposits hag |\n|         4 | cornflower chocolate smoke green pink    | Manufacturer#3 | Brand#34 | SMALL PLATED BRASS      |     14 | MED DRUM    |           904 | p furiously r       |\n|         5 | forest brown coral puff cream            | Manufacturer#3 | Brand#32 | STANDARD POLISHED TIN   |     15 | SM PKG      |           905 |  wake carefully     |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"uri contains wildcards")),(0,r.kt)("p",null,"uri can use wildcards to read multiple files. Note: If wildcards are used, the format of each file must be consistent (especially csv/csv_with_names/csv_with_names_and_types count as different formats), S3 tvf uses the first file to parse out the table schema. For example:"),(0,r.kt)("p",null,"The following two csv files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// file1.csv\n1,aaa,18\n2,qqq,20\n3,qwe,19\n\n// file2.csv\n5,cyx,19\n6,ftw,21\n")),(0,r.kt)("p",null,"You can use wildcards on the uri to query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> select * from s3(\n        "URI" = "http://127.0.0.1:9312/test2/file*.csv",\n        "ACCESS_KEY"= "minioadmin",\n        "SECRET_KEY" = "minioadmin",\n        "ForMAT" = "csv",\n        "use_path_style"="true");\n+------+------+------+\n| c1   | c2   | c3   |\n+------+------+------+\n| 1    | aaa  | 18   |\n| 2    | qqq  | 20   |\n| 3    | qwe  | 19   |\n| 5    | cyx  | 19   |\n| 6    | ftw  | 21   |\n+------+------+------+\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Using ",(0,r.kt)("inlineCode",{parentName:"strong"},"S3")," tvf with ",(0,r.kt)("inlineCode",{parentName:"strong"},"insert into")," and ",(0,r.kt)("inlineCode",{parentName:"strong"},"cast"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'// Create doris internal table\nCREATE TABLE IF NOT EXISTS ${testTable}\n    (\n        id int,\n        name varchar(50),\n        age int\n    )\n    COMMENT "my first table"\n    DISTRIBUTED BY HASH(id) BUCKETS 32\n    PROPERTIES("replication_num" = "1");\n\n// Insert data using S3\ninsert into ${testTable} (id,name,age)\nselect cast (id as INT) as id, name, cast (age as INT) as age\nfrom s3(\n    "uri" = "${uri}",\n    "ACCESS_KEY"= "${ak}",\n    "SECRET_KEY" = "${sk}",\n    "format" = "${format}",\n    "strip_outer_array" = "true",\n    "read_json_by_line" = "true",\n    "use_path_style" = "true");\n')))}u.isMDXComponent=!0}}]);