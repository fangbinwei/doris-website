"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[5884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"CREATE FILE",language:"en"},o=void 0,l={unversionedId:"sql-reference/sql-statements/Administration/CREATE-FILE",id:"version-0.15/sql-reference/sql-statements/Administration/CREATE-FILE",title:"CREATE FILE",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Administration/CREATE-FILE.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/CREATE-FILE",permalink:"/docs/0.15/sql-reference/sql-statements/Administration/CREATE-FILE",draft:!1,tags:[],version:"0.15",frontMatter:{title:"CREATE FILE",language:"en"},sidebar:"docs",previous:{title:"CREATE CLUSTER",permalink:"/docs/0.15/sql-reference/sql-statements/Administration/CREATE-CLUSTER"},next:{title:"DROP CLUSTER",permalink:"/docs/0.15/sql-reference/sql-statements/Administration/DROP-CLUSTER"}},s={},c=[{value:"Description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-file"},"CREATE FILE"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This statement is used to create and upload a file to the Doris cluster.\nThis function is usually used to manage files that need to be used in some other commands, such as certificates, public key, private key, etc."),(0,a.kt)("p",null,"This command can be executed by users with admin privileges only.\nA file belongs to a database. This file can be used by users who have access to database."),(0,a.kt)("p",null,"The size of a single file is limited to 1MB.\nA Doris cluster uploads up to 100 files."),(0,a.kt)("p",null,"Grammar:"),(0,a.kt)("p",null,'CREATE FILE "File name" ',"[IN database][properties]"),(0,a.kt)("p",null,"Explain:\nFile_name: Custom file name.\nDatabase: The file belongs to a db, and if not specified, the DB of the current session is used.\nproperties \u652f\u6301\u4ee5\u4e0b\u53c2\u6570:"),(0,a.kt)("p",null,"Url: Must. Specify a download path for a file. Currently only unauthenticated HTTP download paths are supported. When the command line succeeds, the file will be saved in Doris and the URL will no longer be required.\nCatalog: Yes. The classification name of the file can be customized. But in some commands, files in the specified catalog are looked up. For example, in a routine import, when the data source is kafka, the file under the name of catalog is looked up.\nMd5: Optional. MD5 of the file. If specified, it will be checked after downloading the file."),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a file ca. pem, categorized as Kafka")),(0,a.kt)("p",null,'CREATE FILE "ca.pem"\nPROPERTIES\n(\n"url" ="',(0,a.kt)("a",{parentName:"p",href:"https://test.bj.bcebos.com"},"https://test.bj.bcebos.com"),' /kafka -key /ca.pem",\n"catalog" = "kafka"\n);'),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Create the file client. key, categorized as my_catalog")),(0,a.kt)("p",null,'CREATE FILE "client.key"\nIN my database\nPROPERTIES\n(\n"url" ="',(0,a.kt)("a",{parentName:"p",href:"https://test.bj.bcebos.com"},"https://test.bj.bcebos.com"),' /kafka -key /client.key",\n"catalog" = "my_catalog",\n"md5"= "b5bb901bf1099205b39a46ac3557dd9"\n);'),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("p",null,"CREATE,FILE"))}d.isMDXComponent=!0}}]);