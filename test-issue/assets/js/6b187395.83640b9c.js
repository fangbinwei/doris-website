"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[80485],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),d=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(r),u=n,y=p["".concat(i,".").concat(u)]||p[u]||c[u]||l;return r?a.createElement(y,o(o({ref:t},m),{},{components:r})):a.createElement(y,o({ref:t},m))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var d=2;d<l;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88396:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const l={title:"Mysql to Doris",language:"en"},o=void 0,s={unversionedId:"ecosystem/mysql-to-doris",id:"version-dev/ecosystem/mysql-to-doris",title:"Mysql to Doris",description:"\x3c!--",source:"@site/versioned_docs/version-dev/ecosystem/mysql-to-doris.md",sourceDirName:"ecosystem",slug:"/ecosystem/mysql-to-doris",permalink:"/docs/dev/ecosystem/mysql-to-doris",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/ecosystem/mysql-to-doris.md",tags:[],version:"dev",frontMatter:{title:"Mysql to Doris",language:"en"},sidebar:"docs",previous:{title:"DataX doriswriter",permalink:"/docs/dev/ecosystem/datax"},next:{title:"Logstash Doris Output Plugin",permalink:"/docs/dev/ecosystem/logstash"}},i={},d=[{value:"manual",id:"manual",level:2},{value:"Directory Structure",id:"directory-structure",level:3},{value:"full",id:"full",level:3},{value:"custom",id:"custom",level:3}],m={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mysql-to-doris"},"Mysql to Doris"),(0,n.kt)("p",null,"mysql to doris is mainly suitable for automating the creation of doris odbc tables, mainly implemented with shell scripts"),(0,n.kt)("h2",{id:"manual"},"manual"),(0,n.kt)("p",null,"mysql to doris code ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/extension/mysql_to_doris"},"here")),(0,n.kt)("h3",{id:"directory-structure"},"Directory Structure"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 mysql_to_doris\n\u2502   \u251c\u2500\u2500 conf\n\u2502   \u2502   \u251c\u2500\u2500 doris.conf\n\u2502   \u2502   \u251c\u2500\u2500 mysql.conf\n\u2502   \u2502   \u2514\u2500\u2500 tables\n\u2502   \u251c\u2500\u2500 all_tables.sh\n\u2502   \u2502\n\u2514\u2500\u2500 \u2514\u2500\u2500 user_define_tables.sh   \n")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"all_tables.sh "),(0,n.kt)("p",{parentName:"li"},"This script mainly reads all the tables under the mysql specified library and automatically creates the Doris odbc external table")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"user_define_tables.sh "),(0,n.kt)("p",{parentName:"li"},"This script is mainly used for users to customize certain tables under the specified mysql library to automatically create Doris odbc external tables")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"conf"),(0,n.kt)("p",{parentName:"li"},"Configuration file, ",(0,n.kt)("inlineCode",{parentName:"p"},"doris.conf")," is mainly used to configure doris related, ",(0,n.kt)("inlineCode",{parentName:"p"},"mysql.conf")," is mainly used to configure mysql related, ",(0,n.kt)("inlineCode",{parentName:"p"},"tables")," is mainly used to configure user-defined mysql library tables"))),(0,n.kt)("h3",{id:"full"},"full"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download using mysql to doris ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/extension/mysql_to_doris"},"here"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configuration related files"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"#doris.conf\nmaster_host=\nmaster_port=\ndoris_password=\ndoris_odbc_name=''\n\n#mysql.conf\nmysql_host=\nmysql_password=\n")),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Configuration item"),(0,n.kt)("th",{parentName:"tr",align:null},"illustrate"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"master_host"),(0,n.kt)("td",{parentName:"tr",align:null},"Doris FE master node IP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"master_port"),(0,n.kt)("td",{parentName:"tr",align:null},"Doris FE query_port port")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"doris_password"),(0,n.kt)("td",{parentName:"tr",align:null},"Doris Password (default root user)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"doris_odbc_name"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of mysql odbc in the odbcinst.ini configuration file under be/conf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql_host"),(0,n.kt)("td",{parentName:"tr",align:null},"Mysql IP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql_password"),(0,n.kt)("td",{parentName:"tr",align:null},"Mysql Password (default root user)"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Execute the ",(0,n.kt)("inlineCode",{parentName:"p"},"all_tables.sh")," script"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sh all_tables.sh mysql_db_name doris_db_name\n")),(0,n.kt)("p",null,"After successful execution, the files directory will be generated, and the directory will contain ",(0,n.kt)("inlineCode",{parentName:"p"},"tables")," (table name) and ",(0,n.kt)("inlineCode",{parentName:"p"},"tables.sql")," (doris odbc table creation statement)"),(0,n.kt)("h3",{id:"custom"},"custom"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Modify the ",(0,n.kt)("inlineCode",{parentName:"li"},"conf/tables")," file to add the name of the odbc table that needs to be created"),(0,n.kt)("li",{parentName:"ol"},"To configure mysql and doris related information, refer to step 2 of full creation"),(0,n.kt)("li",{parentName:"ol"},"Execute the ",(0,n.kt)("inlineCode",{parentName:"li"},"user_define_tables.sh")," script")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sh user_define_tables.sh mysql_db_name doris_db_name\n")),(0,n.kt)("p",null,"After successful execution, the user_files directory will be generated, and the directory will contain ",(0,n.kt)("inlineCode",{parentName:"p"},"tables.sql")," (doris odbc table creation statement)"))}p.isMDXComponent=!0}}]);