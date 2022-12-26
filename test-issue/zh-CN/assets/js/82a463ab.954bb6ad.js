"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[54913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=s(n),N=r,u=k["".concat(o,".").concat(N)]||k[N]||d[N]||l;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=N;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[k]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},55747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"Insert Into",language:"zh-CN"},i=void 0,p={unversionedId:"administrator-guide/load-data/insert-into-manual",id:"version-0.15/administrator-guide/load-data/insert-into-manual",title:"Insert Into",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/administrator-guide/load-data/insert-into-manual.md",sourceDirName:"administrator-guide/load-data",slug:"/administrator-guide/load-data/insert-into-manual",permalink:"/zh-CN/docs/0.15/administrator-guide/load-data/insert-into-manual",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Insert Into",language:"zh-CN"},sidebar:"docs",previous:{title:"Delete",permalink:"/zh-CN/docs/0.15/administrator-guide/load-data/delete-manual"},next:{title:"\u5bfc\u5165 Json \u683c\u5f0f\u6570\u636e",permalink:"/zh-CN/docs/0.15/administrator-guide/load-data/load-json-format"}},o={},s=[{value:"\u57fa\u672c\u64cd\u4f5c",id:"\u57fa\u672c\u64cd\u4f5c",level:2},{value:"\u521b\u5efa\u5bfc\u5165",id:"\u521b\u5efa\u5bfc\u5165",level:3},{value:"\u5bfc\u5165\u7ed3\u679c",id:"\u5bfc\u5165\u7ed3\u679c",level:3},{value:"\u76f8\u5173\u7cfb\u7edf\u914d\u7f6e",id:"\u76f8\u5173\u7cfb\u7edf\u914d\u7f6e",level:2},{value:"FE \u914d\u7f6e",id:"fe-\u914d\u7f6e",level:3},{value:"Session \u53d8\u91cf",id:"session-\u53d8\u91cf",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:3},{value:"\u6570\u636e\u91cf",id:"\u6570\u636e\u91cf",level:3},{value:"\u5b8c\u6574\u4f8b\u5b50",id:"\u5b8c\u6574\u4f8b\u5b50",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],m={toc:s};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"insert-into"},"Insert Into"),(0,r.kt)("p",null,"Insert Into \u8bed\u53e5\u7684\u4f7f\u7528\u65b9\u5f0f\u548c MySQL \u7b49\u6570\u636e\u5e93\u4e2d Insert Into \u8bed\u53e5\u7684\u4f7f\u7528\u65b9\u5f0f\u7c7b\u4f3c\u3002\u4f46\u5728 Doris \u4e2d\uff0c\u6240\u6709\u7684\u6570\u636e\u5199\u5165\u90fd\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u5bfc\u5165\u4f5c\u4e1a\u3002\u6240\u4ee5\u8fd9\u91cc\u5c06 Insert Into \u4e5f\u4f5c\u4e3a\u4e00\u79cd\u5bfc\u5165\u65b9\u5f0f\u4ecb\u7ecd\u3002"),(0,r.kt)("p",null,"\u4e3b\u8981\u7684 Insert Into \u547d\u4ee4\u5305\u542b\u4ee5\u4e0b\u4e24\u79cd\uff1b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"INSERT INTO tbl SELECT ..."),(0,r.kt)("li",{parentName:"ul"},"INSERT INTO tbl (col1, col2, ...) VALUES (1, 2, ...), (1,3, ...);")),(0,r.kt)("p",null,"\u5176\u4e2d\u7b2c\u4e8c\u79cd\u547d\u4ee4\u4ec5\u7528\u4e8e Demo\uff0c\u4e0d\u8981\u4f7f\u7528\u5728\u6d4b\u8bd5\u6216\u751f\u4ea7\u73af\u5883\u4e2d\u3002"),(0,r.kt)("h2",{id:"\u57fa\u672c\u64cd\u4f5c"},"\u57fa\u672c\u64cd\u4f5c"),(0,r.kt)("h3",{id:"\u521b\u5efa\u5bfc\u5165"},"\u521b\u5efa\u5bfc\u5165"),(0,r.kt)("p",null,"Insert Into \u547d\u4ee4\u9700\u8981\u901a\u8fc7 MySQL \u534f\u8bae\u63d0\u4ea4\uff0c\u521b\u5efa\u5bfc\u5165\u8bf7\u6c42\u4f1a\u540c\u6b65\u8fd4\u56de\u5bfc\u5165\u7ed3\u679c\u3002"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INSERT INTO table_name [partition_info] [WITH LABEL label] [col_list] [query_stmt] [VALUES];\n")),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'INSERT INTO tbl2 WITH LABEL label1 SELECT * FROM tbl3;\nINSERT INTO tbl1 VALUES ("qweasdzxcqweasdzxc"), ("a");\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,r.kt)("p",null,"\u5f53\u9700\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"CTE(Common Table Expressions)")," \u4f5c\u4e3a insert \u64cd\u4f5c\u4e2d\u7684\u67e5\u8be2\u90e8\u5206\u65f6\uff0c\u5fc5\u987b\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH LABEL")," \u548c column list \u90e8\u5206\u3002\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INSERT INTO tbl1 WITH LABEL label1\nWITH cte1 AS (SELECT * FROM tbl1), cte2 AS (SELECT * FROM tbl2)\nSELECT k1 FROM cte1 JOIN cte2 WHERE cte1.k1 = 1;\n\n\nINSERT INTO tbl1 (k1)\nWITH cte1 AS (SELECT * FROM tbl1), cte2 AS (SELECT * FROM tbl2)\nSELECT k1 FROM cte1 JOIN cte2 WHERE cte1.k1 = 1;\n")),(0,r.kt)("p",null,"\u4e0b\u9762\u4e3b\u8981\u4ecb\u7ecd\u521b\u5efa\u5bfc\u5165\u8bed\u53e5\u4e2d\u4f7f\u7528\u5230\u7684\u53c2\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"partition","_","info"),(0,r.kt)("p",{parentName:"li"},"  \u5bfc\u5165\u8868\u7684\u76ee\u6807\u5206\u533a\uff0c\u5982\u679c\u6307\u5b9a\u76ee\u6807\u5206\u533a\uff0c\u5219\u53ea\u4f1a\u5bfc\u5165\u7b26\u5408\u76ee\u6807\u5206\u533a\u7684\u6570\u636e\u3002\u5982\u679c\u6ca1\u6709\u6307\u5b9a\uff0c\u5219\u9ed8\u8ba4\u503c\u4e3a\u8fd9\u5f20\u8868\u7684\u6240\u6709\u5206\u533a\u3002\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"col","_","list"),(0,r.kt)("p",{parentName:"li"},"  \u5bfc\u5165\u8868\u7684\u76ee\u6807\u5217\uff0c\u53ef\u4ee5\u4ee5\u4efb\u610f\u7684\u987a\u5e8f\u5b58\u5728\u3002\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u76ee\u6807\u5217\uff0c\u90a3\u4e48\u9ed8\u8ba4\u503c\u662f\u8fd9\u5f20\u8868\u7684\u6240\u6709\u5217\u3002\u5982\u679c\u5f85\u8868\u4e2d\u7684\u67d0\u4e2a\u5217\u6ca1\u6709\u5b58\u5728\u76ee\u6807\u5217\u4e2d\uff0c\u90a3\u4e48\u8fd9\u4e2a\u5217\u9700\u8981\u6709\u9ed8\u8ba4\u503c\uff0c\u5426\u5219 Insert Into \u5c31\u4f1a\u6267\u884c\u5931\u8d25\u3002"),(0,r.kt)("p",{parentName:"li"},"  \u5982\u679c\u67e5\u8be2\u8bed\u53e5\u7684\u7ed3\u679c\u5217\u7c7b\u578b\u4e0e\u76ee\u6807\u5217\u7684\u7c7b\u578b\u4e0d\u4e00\u81f4\uff0c\u90a3\u4e48\u4f1a\u8c03\u7528\u9690\u5f0f\u7c7b\u578b\u8f6c\u5316\uff0c\u5982\u679c\u4e0d\u80fd\u591f\u8fdb\u884c\u8f6c\u5316\uff0c\u90a3\u4e48 Insert Into \u8bed\u53e5\u4f1a\u62a5\u8bed\u6cd5\u89e3\u6790\u9519\u8bef\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"query","_","stmt"),(0,r.kt)("p",{parentName:"li"},"  \u901a\u8fc7\u4e00\u4e2a\u67e5\u8be2\u8bed\u53e5\uff0c\u5c06\u67e5\u8be2\u8bed\u53e5\u7684\u7ed3\u679c\u5bfc\u5165\u5230 Doris \u7cfb\u7edf\u4e2d\u7684\u5176\u4ed6\u8868\u3002\u67e5\u8be2\u8bed\u53e5\u652f\u6301\u4efb\u610f Doris \u652f\u6301\u7684 SQL \u67e5\u8be2\u8bed\u6cd5\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"VALUES"),(0,r.kt)("p",{parentName:"li"},"  \u7528\u6237\u53ef\u4ee5\u901a\u8fc7 VALUES \u8bed\u6cd5\u63d2\u5165\u4e00\u6761\u6216\u8005\u591a\u6761\u6570\u636e\u3002"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("em",{parentName:"p"},"\u6ce8\u610f\uff1aVALUES \u65b9\u5f0f\u4ec5\u9002\u7528\u4e8e\u5bfc\u5165\u51e0\u6761\u6570\u636e\u4f5c\u4e3a\u5bfc\u5165 DEMO \u7684\u60c5\u51b5\uff0c\u5b8c\u5168\u4e0d\u9002\u7528\u4e8e\u4efb\u4f55\u6d4b\u8bd5\u548c\u751f\u4ea7\u73af\u5883\u3002Doris \u7cfb\u7edf\u672c\u8eab\u4e5f\u4e0d\u9002\u5408\u5355\u6761\u6570\u636e\u5bfc\u5165\u7684\u573a\u666f\u3002\u5efa\u8bae\u4f7f\u7528 INSERT INTO SELECT \u7684\u65b9\u5f0f\u8fdb\u884c\u6279\u91cf\u5bfc\u5165\u3002"),"\n"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"WITH LABEL"),(0,r.kt)("p",{parentName:"li"},"  INSERT \u64cd\u4f5c\u4f5c\u4e3a\u4e00\u4e2a\u5bfc\u5165\u4efb\u52a1\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a label\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219\u7cfb\u7edf\u4f1a\u81ea\u52a8\u6307\u5b9a\u4e00\u4e2a UUID \u4f5c\u4e3a label\u3002"),(0,r.kt)("p",{parentName:"li"},"  \u8be5\u529f\u80fd\u9700\u8981 0.11+ \u7248\u672c\u3002"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("em",{parentName:"p"},"\u6ce8\u610f\uff1a\u5efa\u8bae\u6307\u5b9a Label \u800c\u4e0d\u662f\u7531\u7cfb\u7edf\u81ea\u52a8\u5206\u914d\u3002\u5982\u679c\u7531\u7cfb\u7edf\u81ea\u52a8\u5206\u914d\uff0c\u4f46\u5728 Insert Into \u8bed\u53e5\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u56e0\u7f51\u7edc\u9519\u8bef\u5bfc\u81f4\u8fde\u63a5\u65ad\u5f00\u7b49\uff0c\u5219\u65e0\u6cd5\u5f97\u77e5 Insert Into \u662f\u5426\u6210\u529f\u3002\u800c\u5982\u679c\u6307\u5b9a Label\uff0c\u5219\u53ef\u4ee5\u518d\u6b21\u901a\u8fc7 Label \u67e5\u770b\u4efb\u52a1\u7ed3\u679c\u3002"),"\n"))),(0,r.kt)("h3",{id:"\u5bfc\u5165\u7ed3\u679c"},"\u5bfc\u5165\u7ed3\u679c"),(0,r.kt)("p",null,"Insert Into \u672c\u8eab\u5c31\u662f\u4e00\u4e2a SQL \u547d\u4ee4\uff0c\u5176\u8fd4\u56de\u7ed3\u679c\u4f1a\u6839\u636e\u6267\u884c\u7ed3\u679c\u7684\u4e0d\u540c\uff0c\u5206\u4e3a\u4ee5\u4e0b\u51e0\u79cd\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7ed3\u679c\u96c6\u4e3a\u7a7a"),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c insert \u5bf9\u5e94 select \u8bed\u53e5\u7684\u7ed3\u679c\u96c6\u4e3a\u7a7a\uff0c\u5219\u8fd4\u56de\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"mysql> insert into tbl1 select * from empty_tbl;\nQuery OK, 0 rows affected (0.02 sec)\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Query OK")," \u8868\u793a\u6267\u884c\u6210\u529f\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"0 rows affected")," \u8868\u793a\u6ca1\u6709\u6570\u636e\u88ab\u5bfc\u5165\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7ed3\u679c\u96c6\u4e0d\u4e3a\u7a7a"),(0,r.kt)("p",{parentName:"li"},"\u5728\u7ed3\u679c\u96c6\u4e0d\u4e3a\u7a7a\u7684\u60c5\u51b5\u4e0b\u3002\u8fd4\u56de\u7ed3\u679c\u5206\u4e3a\u5982\u4e0b\u51e0\u79cd\u60c5\u51b5\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Insert \u6267\u884c\u6210\u529f\u5e76\u53ef\u89c1\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"mysql> insert into tbl1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label':'insert_8510c568-9eda-4173-9e36-6adc7d35291c', 'status':'visible', 'txnId':'4005'}\n\nmysql> insert into tbl1 with label my_label1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'visible', 'txnId':'4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Query OK")," \u8868\u793a\u6267\u884c\u6210\u529f\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"4 rows affected")," \u8868\u793a\u603b\u5171\u67094\u884c\u6570\u636e\u88ab\u5bfc\u5165\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"2 warnings")," \u8868\u793a\u88ab\u8fc7\u6ee4\u7684\u884c\u6570\u3002"),(0,r.kt)("p",{parentName:"li"},"\u540c\u65f6\u4f1a\u8fd4\u56de\u4e00\u4e2a json \u4e32\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"{'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n{'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n{'label':'my_label1', 'status':'visible', 'txnId':'4005', 'err':'some other error'}\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"label")," \u4e3a\u7528\u6237\u6307\u5b9a\u7684 label \u6216\u81ea\u52a8\u751f\u6210\u7684 label\u3002Label \u662f\u8be5 Insert Into \u5bfc\u5165\u4f5c\u4e1a\u7684\u6807\u8bc6\u3002\u6bcf\u4e2a\u5bfc\u5165\u4f5c\u4e1a\uff0c\u90fd\u6709\u4e00\u4e2a\u5728\u5355 database \u5185\u90e8\u552f\u4e00\u7684 Label\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status")," \u8868\u793a\u5bfc\u5165\u6570\u636e\u662f\u5426\u53ef\u89c1\u3002\u5982\u679c\u53ef\u89c1\uff0c\u663e\u793a ",(0,r.kt)("inlineCode",{parentName:"p"},"visible"),"\uff0c\u5982\u679c\u4e0d\u53ef\u89c1\uff0c\u663e\u793a ",(0,r.kt)("inlineCode",{parentName:"p"},"committed"),"\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"txnId")," \u4e3a\u8fd9\u4e2a insert \u5bf9\u5e94\u7684\u5bfc\u5165\u4e8b\u52a1\u7684 id\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"err")," \u5b57\u6bb5\u4f1a\u663e\u793a\u4e00\u4e9b\u5176\u4ed6\u975e\u9884\u671f\u9519\u8bef\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5f53\u9700\u8981\u67e5\u770b\u88ab\u8fc7\u6ee4\u7684\u884c\u65f6\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u8bed\u53e5"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'show load where label="xxx";\n')),(0,r.kt)("p",{parentName:"li"},"\u8fd4\u56de\u7ed3\u679c\u4e2d\u7684 URL \u53ef\u4ee5\u7528\u4e8e\u67e5\u8be2\u9519\u8bef\u7684\u6570\u636e\uff0c\u5177\u4f53\u89c1\u540e\u9762 ",(0,r.kt)("strong",{parentName:"p"},"\u67e5\u770b\u9519\u8bef\u884c")," \u5c0f\u7ed3\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6570\u636e\u4e0d\u53ef\u89c1\u662f\u4e00\u4e2a\u4e34\u65f6\u72b6\u6001\uff0c\u8fd9\u6279\u6570\u636e\u6700\u7ec8\u662f\u4e00\u5b9a\u53ef\u89c1\u7684")),(0,r.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u8bed\u53e5\u67e5\u770b\u8fd9\u6279\u6570\u636e\u7684\u53ef\u89c1\u72b6\u6001\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"show transaction where id=4005;\n")),(0,r.kt)("p",{parentName:"li"},"\u8fd4\u56de\u7ed3\u679c\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"TransactionStatus")," \u5217\u5982\u679c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"visible"),"\uff0c\u5219\u8868\u8ff0\u6570\u636e\u53ef\u89c1\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Insert \u6267\u884c\u5931\u8d25"),(0,r.kt)("p",{parentName:"li"},"\u6267\u884c\u5931\u8d25\u8868\u793a\u6ca1\u6709\u4efb\u4f55\u6570\u636e\u88ab\u6210\u529f\u5bfc\u5165\uff0c\u5e76\u8fd4\u56de\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'mysql> insert into tbl1 select * from tbl2 where k1 = "a";\nERROR 1064 (HY000): all partitions have no load data. url: http://10.74.167.16:8042/api/_load_error_log?file=__shard_2/error_log_insert_stmt_ba8bb9e158e4879-ae8de8507c0bf8a2_ba8bb9e158e4879_ae8de8507c0bf8a2\n')),(0,r.kt)("p",{parentName:"li"},"\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"ERROR 1064 (HY000): all partitions have no load data")," \u663e\u793a\u5931\u8d25\u539f\u56e0\u3002\u540e\u9762\u7684 url \u53ef\u4ee5\u7528\u4e8e\u67e5\u8be2\u9519\u8bef\u7684\u6570\u636e\uff0c\u5177\u4f53\u89c1\u540e\u9762 ",(0,r.kt)("strong",{parentName:"p"},"\u67e5\u770b\u9519\u8bef\u884c")," \u5c0f\u7ed3\u3002"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7efc\u4e0a\uff0c\u5bf9\u4e8e insert \u64cd\u4f5c\u8fd4\u56de\u7ed3\u679c\u7684\u6b63\u786e\u5904\u7406\u903b\u8f91\u5e94\u4e3a\uff1a")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u8fd4\u56de\u7ed3\u679c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"ERROR 1064 (HY000)"),"\uff0c\u5219\u8868\u793a\u5bfc\u5165\u5931\u8d25\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u8fd4\u56de\u7ed3\u679c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"Query OK"),"\uff0c\u5219\u8868\u793a\u6267\u884c\u6210\u529f\u3002",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"li"},"rows affected")," \u4e3a 0\uff0c\u8868\u793a\u7ed3\u679c\u96c6\u4e3a\u7a7a\uff0c\u6ca1\u6709\u6570\u636e\u88ab\u5bfc\u5165\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"li"},"rows affected")," \u5927\u4e8e 0\uff1a",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"li"},"status")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"committed"),"\uff0c\u8868\u793a\u6570\u636e\u8fd8\u4e0d\u53ef\u89c1\u3002\u9700\u8981\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"show transaction")," \u8bed\u53e5\u67e5\u770b\u72b6\u6001\u76f4\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"visible")),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"li"},"status")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"visible"),"\uff0c\u8868\u793a\u6570\u636e\u5bfc\u5165\u6210\u529f\u3002"))),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"li"},"warnings")," \u5927\u4e8e 0\uff0c\u8868\u793a\u6709\u6570\u636e\u88ab\u8fc7\u6ee4\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"show load")," \u8bed\u53e5\u83b7\u53d6 url \u67e5\u770b\u88ab\u8fc7\u6ee4\u7684\u884c\u3002")))),(0,r.kt)("h2",{id:"\u76f8\u5173\u7cfb\u7edf\u914d\u7f6e"},"\u76f8\u5173\u7cfb\u7edf\u914d\u7f6e"),(0,r.kt)("h3",{id:"fe-\u914d\u7f6e"},"FE \u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"timeout"),(0,r.kt)("p",{parentName:"li"},"  \u5bfc\u5165\u4efb\u52a1\u7684\u8d85\u65f6\u65f6\u95f4(\u4ee5\u79d2\u4e3a\u5355\u4f4d)\uff0c\u5bfc\u5165\u4efb\u52a1\u5728\u8bbe\u5b9a\u7684 timeout \u65f6\u95f4\u5185\u672a\u5b8c\u6210\u5219\u4f1a\u88ab\u7cfb\u7edf\u53d6\u6d88\uff0c\u53d8\u6210 CANCELLED\u3002"),(0,r.kt)("p",{parentName:"li"},"  \u76ee\u524d Insert Into \u5e76\u4e0d\u652f\u6301\u81ea\u5b9a\u4e49\u5bfc\u5165\u7684 timeout \u65f6\u95f4\uff0c\u6240\u6709 Insert Into \u5bfc\u5165\u7684\u8d85\u65f6\u65f6\u95f4\u662f\u7edf\u4e00\u7684\uff0c\u9ed8\u8ba4\u7684 timeout \u65f6\u95f4\u4e3a1\u5c0f\u65f6\u3002\u5982\u679c\u5bfc\u5165\u7684\u6e90\u6587\u4ef6\u65e0\u6cd5\u518d\u89c4\u5b9a\u65f6\u95f4\u5185\u5b8c\u6210\u5bfc\u5165\uff0c\u5219\u9700\u8981\u8c03\u6574 FE \u7684\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"insert_load_default_timeout_second"),"\u3002"),(0,r.kt)("p",{parentName:"li"},"  \u540c\u65f6 Insert Into \u8bed\u53e5\u6536\u5230 Session \u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"p"},"query_timeout")," \u7684\u9650\u5236\u3002\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"SET query_timeout = xxx;")," \u6765\u589e\u52a0\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u79d2\u3002\n"))),(0,r.kt)("h3",{id:"session-\u53d8\u91cf"},"Session \u53d8\u91cf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"enable","_","insert","_","strict"),(0,r.kt)("p",{parentName:"li"},"  Insert Into \u5bfc\u5165\u672c\u8eab\u4e0d\u80fd\u63a7\u5236\u5bfc\u5165\u53ef\u5bb9\u5fcd\u7684\u9519\u8bef\u7387\u3002\u7528\u6237\u53ea\u80fd\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_insert_strict")," \u8fd9\u4e2a Session \u53c2\u6570\u7528\u6765\u63a7\u5236\u3002"),(0,r.kt)("p",{parentName:"li"},"  \u5f53\u8be5\u53c2\u6570\u8bbe\u7f6e\u4e3a false \u65f6\uff0c\u8868\u793a\u81f3\u5c11\u6709\u4e00\u6761\u6570\u636e\u88ab\u6b63\u786e\u5bfc\u5165\uff0c\u5219\u8fd4\u56de\u6210\u529f\u3002\u5982\u679c\u6709\u5931\u8d25\u6570\u636e\uff0c\u5219\u8fd8\u4f1a\u8fd4\u56de\u4e00\u4e2a Label\u3002"),(0,r.kt)("p",{parentName:"li"},"  \u5f53\u8be5\u53c2\u6570\u8bbe\u7f6e\u4e3a true \u65f6\uff0c\u8868\u793a\u5982\u679c\u6709\u4e00\u6761\u6570\u636e\u9519\u8bef\uff0c\u5219\u5bfc\u5165\u5931\u8d25\u3002"),(0,r.kt)("p",{parentName:"li"},"  \u9ed8\u8ba4\u4e3a false\u3002\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"SET enable_insert_strict = true;")," \u6765\u8bbe\u7f6e\u3002\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"query","_","timeout"),(0,r.kt)("p",{parentName:"li"},"  Insert Into \u672c\u8eab\u4e5f\u662f\u4e00\u4e2a SQL \u547d\u4ee4\uff0c\u56e0\u6b64 Insert Into \u8bed\u53e5\u4e5f\u53d7\u5230 Session \u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"p"},"query_timeout")," \u7684\u9650\u5236\u3002\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"SET query_timeout = xxx;")," \u6765\u589e\u52a0\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u79d2\u3002\n"))),(0,r.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,r.kt)("h3",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7528\u6237\u5e0c\u671b\u4ec5\u5bfc\u5165\u51e0\u6761\u5047\u6570\u636e\uff0c\u9a8c\u8bc1\u4e00\u4e0b Doris \u7cfb\u7edf\u7684\u529f\u80fd\u3002\u6b64\u65f6\u9002\u5408\u4f7f\u7528 INSERT INTO VALUES \u7684\u8bed\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7528\u6237\u5e0c\u671b\u5c06\u5df2\u7ecf\u5728 Doris \u8868\u4e2d\u7684\u6570\u636e\u8fdb\u884c ETL \u8f6c\u6362\u5e76\u5bfc\u5165\u5230\u4e00\u4e2a\u65b0\u7684 Doris \u8868\u4e2d\uff0c\u6b64\u65f6\u9002\u5408\u4f7f\u7528 INSERT INTO SELECT \u8bed\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7528\u6237\u53ef\u4ee5\u521b\u5efa\u4e00\u79cd\u5916\u90e8\u8868\uff0c\u5982 MySQL \u5916\u90e8\u8868\u6620\u5c04\u4e00\u5f20 MySQL \u7cfb\u7edf\u4e2d\u7684\u8868\u3002\u6216\u8005\u521b\u5efa Broker \u5916\u90e8\u8868\u6765\u6620\u5c04 HDFS \u4e0a\u7684\u6570\u636e\u6587\u4ef6\u3002\u7136\u540e\u901a\u8fc7 INSERT INTO SELECT \u8bed\u6cd5\u5c06\u5916\u90e8\u8868\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230 Doris \u8868\u4e2d\u5b58\u50a8\u3002")),(0,r.kt)("h3",{id:"\u6570\u636e\u91cf"},"\u6570\u636e\u91cf"),(0,r.kt)("p",null,"Insert Into \u5bf9\u6570\u636e\u91cf\u6ca1\u6709\u9650\u5236\uff0c\u5927\u6570\u636e\u91cf\u5bfc\u5165\u4e5f\u53ef\u4ee5\u652f\u6301\u3002\u4f46 Insert Into \u6709\u9ed8\u8ba4\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u7528\u6237\u9884\u4f30\u7684\u5bfc\u5165\u6570\u636e\u91cf\u8fc7\u5927\uff0c\u5c31\u9700\u8981\u4fee\u6539\u7cfb\u7edf\u7684 Insert Into \u5bfc\u5165\u8d85\u65f6\u65f6\u95f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u5bfc\u5165\u6570\u636e\u91cf = 36G \u7ea6\u2264 3600s * 10M/s \n\u5176\u4e2d 10M/s \u662f\u6700\u5927\u5bfc\u5165\u9650\u901f\uff0c\u7528\u6237\u9700\u8981\u6839\u636e\u5f53\u524d\u96c6\u7fa4\u60c5\u51b5\u8ba1\u7b97\u51fa\u5e73\u5747\u7684\u5bfc\u5165\u901f\u5ea6\u6765\u66ff\u6362\u516c\u5f0f\u4e2d\u7684 10M/s\n")),(0,r.kt)("h3",{id:"\u5b8c\u6574\u4f8b\u5b50"},"\u5b8c\u6574\u4f8b\u5b50"),(0,r.kt)("p",null,"\u7528\u6237\u6709\u4e00\u5f20\u8868 store","_","sales \u5728\u6570\u636e\u5e93 sales \u4e2d\uff0c\u7528\u6237\u53c8\u521b\u5efa\u4e86\u4e00\u5f20\u8868\u53eb bj","_","store","_","sales \u4e5f\u5728\u6570\u636e\u5e93 sales \u4e2d\uff0c\u7528\u6237\u5e0c\u671b\u5c06 store","_","sales \u4e2d\u9500\u552e\u8bb0\u5f55\u5728 bj \u7684\u6570\u636e\u5bfc\u5165\u5230\u8fd9\u5f20\u65b0\u5efa\u7684\u8868 bj","_","store","_","sales \u4e2d\u3002\u5bfc\u5165\u7684\u6570\u636e\u91cf\u7ea6\u4e3a\uff1a10G\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"store_sales schema\uff1a\n(id, total, user_id, sale_timestamp, region)\n\nbj_store_sales schema:\n(id, total, user_id, sale_timestamp)\n\n")),(0,r.kt)("p",null,"\u96c6\u7fa4\u60c5\u51b5\uff1a\u7528\u6237\u5f53\u524d\u96c6\u7fa4\u7684\u5e73\u5747\u5bfc\u5165\u901f\u5ea6\u7ea6\u4e3a 5M/s"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step1: \u5224\u65ad\u662f\u5426\u8981\u4fee\u6539 Insert Into \u7684\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\u8ba1\u7b97\u5bfc\u5165\u7684\u5927\u6982\u65f6\u95f4\n10G / 5M/s = 2000s\n\n\u4fee\u6539 FE \u914d\u7f6e\ninsert_load_default_timeout_second = 2000\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step2\uff1a\u521b\u5efa\u5bfc\u5165\u4efb\u52a1"),(0,r.kt)("p",{parentName:"li"},"  \u7531\u4e8e\u7528\u6237\u662f\u5e0c\u671b\u5c06\u4e00\u5f20\u8868\u4e2d\u7684\u6570\u636e\u505a ETL \u5e76\u5bfc\u5165\u5230\u76ee\u6807\u8868\u4e2d\uff0c\u6240\u4ee5\u5e94\u8be5\u4f7f\u7528 Insert into query","_","stmt \u65b9\u5f0f\u5bfc\u5165\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'INSERT INTO bj_store_sales WITH LABEL `label` SELECT id, total, user_id, sale_timestamp FROM store_sales where region = "bj";\n')))),(0,r.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u9519\u8bef\u884c"),(0,r.kt)("p",{parentName:"li"},"  \u7531\u4e8e Insert Into \u65e0\u6cd5\u63a7\u5236\u9519\u8bef\u7387\uff0c\u53ea\u80fd\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_insert_strict")," \u8bbe\u7f6e\u4e3a\u5b8c\u5168\u5bb9\u5fcd\u9519\u8bef\u6570\u636e\u6216\u5b8c\u5168\u5ffd\u7565\u9519\u8bef\u6570\u636e\u3002\u56e0\u6b64\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_insert_strict")," \u8bbe\u4e3a true\uff0c\u5219 Insert Into \u53ef\u80fd\u4f1a\u5931\u8d25\u3002\u800c\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_insert_strict")," \u8bbe\u4e3a false\uff0c\u5219\u53ef\u80fd\u51fa\u73b0\u4ec5\u5bfc\u5165\u4e86\u90e8\u5206\u5408\u683c\u6570\u636e\u7684\u60c5\u51b5\u3002"),(0,r.kt)("p",{parentName:"li"},"  \u5f53\u8fd4\u56de\u7ed3\u679c\u4e2d\u63d0\u4f9b\u4e86 url \u5b57\u6bb5\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u9519\u8bef\u884c\uff1a"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("inlineCode",{parentName:"p"},'SHOW LOAD WARNINGS ON "url";')),(0,r.kt)("p",{parentName:"li"},"  \u793a\u4f8b\uff1a"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("inlineCode",{parentName:"p"},'SHOW LOAD WARNINGS ON "http://ip:port/api/_load_error_log?file=__shard_13/error_log_insert_stmt_d2cac0a0a16d482d-9041c949a4b71605_d2cac0a0a16d482d_9041c949a4b71605";')),(0,r.kt)("p",{parentName:"li"},"  \u9519\u8bef\u7684\u539f\u56e0\u901a\u5e38\u5982\uff1a\u6e90\u6570\u636e\u5217\u957f\u5ea6\u8d85\u8fc7\u76ee\u7684\u6570\u636e\u5217\u957f\u5ea6\u3001\u5217\u7c7b\u578b\u4e0d\u5339\u914d\u3001\u5206\u533a\u4e0d\u5339\u914d\u3001\u5217\u987a\u5e8f\u4e0d\u5339\u914d\u7b49\u7b49\u3002"))))}k.isMDXComponent=!0}}]);