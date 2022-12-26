"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[80109],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=l.createContext({}),s=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,k=c["".concat(u,".").concat(d)]||c[d]||m[d]||r;return n?l.createElement(k,i(i({ref:t},p),{},{components:n})):l.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=n(87462),a=(n(67294),n(3905));const r={title:"SQL\u62e6\u622a",language:"zh-CN"},i=void 0,o={unversionedId:"admin-manual/sql-interception",id:"version-dev/admin-manual/sql-interception",title:"SQL\u62e6\u622a",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/admin-manual/sql-interception.md",sourceDirName:"admin-manual",slug:"/admin-manual/sql-interception",permalink:"/zh-CN/docs/dev/admin-manual/sql-interception",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/admin-manual/sql-interception.md",tags:[],version:"dev",frontMatter:{title:"SQL\u62e6\u622a",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6570\u636e\u5220\u9664\u6062\u590d",permalink:"/zh-CN/docs/dev/admin-manual/data-admin/delete-recover"},next:{title:"\u67e5\u8be2\u5206\u6790",permalink:"/zh-CN/docs/dev/admin-manual/query-profile"}},u={},s=[{value:"\u89c4\u5219",id:"\u89c4\u5219",level:2},{value:"\u7528\u6237\u89c4\u5219\u7ed1\u5b9a",id:"\u7528\u6237\u89c4\u5219\u7ed1\u5b9a",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sql\u9ed1\u540d\u5355"},"SQL\u9ed1\u540d\u5355"),(0,a.kt)("p",null,"\u8be5\u529f\u80fd\u4ec5\u7528\u4e8e\u9650\u5236\u67e5\u8be2\u8bed\u53e5\uff0c\u5e76\u4e14\u4e0d\u4f1a\u9650\u5236 explain \u8bed\u53e5\u7684\u6267\u884c\u3002\n\u652f\u6301\u6309\u7528\u6237\u914d\u7f6eSQL\u9ed1\u540d\u5355:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7\u6b63\u5219\u5339\u914d\u7684\u65b9\u5f0f\u62d2\u7edd\u6307\u5b9aSQL")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7\u8bbe\u7f6epartition_num, tablet_num, cardinality, \u68c0\u67e5\u4e00\u4e2a\u67e5\u8be2\u662f\u5426\u8fbe\u5230\u5176\u4e2d\u4e00\u4e2a\u9650\u5236"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"partition_num, tablet_num, cardinality \u53ef\u4ee5\u4e00\u8d77\u8bbe\u7f6e\uff0c\u4e00\u65e6\u4e00\u4e2a\u67e5\u8be2\u8fbe\u5230\u5176\u4e2d\u4e00\u4e2a\u9650\u5236\uff0c\u67e5\u8be2\u5c06\u4f1a\u88ab\u62e6\u622a")),(0,a.kt)("h2",{id:"\u89c4\u5219"},"\u89c4\u5219"),(0,a.kt)("p",null,"\u5bf9SQL\u89c4\u5219\u589e\u5220\u6539\u67e5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efaSQL\u963b\u6b62\u89c4\u5219\uff0c\u66f4\u591a\u521b\u5efa\u8bed\u6cd5\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE"},"CREATE SQL BLOCK RULE"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'sql\uff1a\u5339\u914d\u89c4\u5219(\u57fa\u4e8e\u6b63\u5219\u5339\u914d,\u7279\u6b8a\u5b57\u7b26\u9700\u8981\u8f6c\u8bd1)\uff0c\u53ef\u9009\uff0c\u9ed8\u8ba4\u503c\u4e3a "NULL"'),(0,a.kt)("li",{parentName:"ul"},"sqlHash: sql hash\u503c\uff0c\u7528\u4e8e\u5b8c\u5168\u5339\u914d\uff0c\u6211\u4eec\u4f1a\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"fe.audit.log"),'\u6253\u5370\u8fd9\u4e2a\u503c\uff0c\u53ef\u9009\uff0c\u8fd9\u4e2a\u53c2\u6570\u548csql\u53ea\u80fd\u4e8c\u9009\u4e00\uff0c\u9ed8\u8ba4\u503c\u4e3a "NULL"'),(0,a.kt)("li",{parentName:"ul"},"partition_num: \u4e00\u4e2a\u626b\u63cf\u8282\u70b9\u4f1a\u626b\u63cf\u7684\u6700\u5927partition\u6570\u91cf\uff0c\u9ed8\u8ba4\u503c\u4e3a0L"),(0,a.kt)("li",{parentName:"ul"},"tablet_num: \u4e00\u4e2a\u626b\u63cf\u8282\u70b9\u4f1a\u626b\u63cf\u7684\u6700\u5927tablet\u6570\u91cf\uff0c\u9ed8\u8ba4\u503c\u4e3a0L"),(0,a.kt)("li",{parentName:"ul"},"cardinality: \u4e00\u4e2a\u626b\u63cf\u8282\u70b9\u7c97\u7565\u7684\u626b\u63cf\u884c\u6570\uff0c\u9ed8\u8ba4\u503c\u4e3a0L"),(0,a.kt)("li",{parentName:"ul"},"global\uff1a\u662f\u5426\u5168\u5c40(\u6240\u6709\u7528\u6237)\u751f\u6548\uff0c\u9ed8\u8ba4\u4e3afalse"),(0,a.kt)("li",{parentName:"ul"},"enable\uff1a\u662f\u5426\u5f00\u542f\u963b\u6b62\u89c4\u5219\uff0c\u9ed8\u8ba4\u4e3atrue")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE SQL_BLOCK_RULE test_rule \nPROPERTIES(\n  "sql"="select \\\\* from order_analysis",\n  "global"="false",\n  "enable"="true",\n  "sqlHash"=""\n)\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u91ccsql \u8bed\u53e5\u6700\u540e\u4e0d\u8981\u5e26\u5206\u53f7")),(0,a.kt)("p",null,"\u5f53\u6211\u4eec\u53bb\u6267\u884c\u521a\u624d\u6211\u4eec\u5b9a\u4e49\u5728\u89c4\u5219\u91cc\u7684sql\u65f6\u5c31\u4f1a\u8fd4\u56de\u5f02\u5e38\u9519\u8bef\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> select * from order_analysis;\nERROR 1064 (HY000): errCode = 2, detailMessage = sql match regex sql block rule: order_analysis_rule\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa test_rule2\uff0c\u5c06\u6700\u5927\u626b\u63cf\u7684\u5206\u533a\u6570\u91cf\u9650\u5236\u572830\u4e2a\uff0c\u6700\u5927\u626b\u63cf\u57fa\u6570\u9650\u5236\u5728100\u4ebf\u884c\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE SQL_BLOCK_RULE test_rule2 PROPERTIES("partition_num" = "30", "cardinality"="10000000000","global"="false","enable"="true")\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u67e5\u770b\u5df2\u914d\u7f6e\u7684SQL\u963b\u6b62\u89c4\u5219\uff0c\u4e0d\u6307\u5b9a\u89c4\u5219\u540d\u5219\u4e3a\u67e5\u770b\u6240\u6709\u89c4\u5219\uff0c\u5177\u4f53\u8bed\u6cd5\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE"},"SHOW SQL BLOCK RULE"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW SQL_BLOCK_RULE [FOR RULE_NAME]\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4fee\u6539SQL\u963b\u6b62\u89c4\u5219\uff0c\u5141\u8bb8\u5bf9sql/sqlHash/partition_num/tablet_num/cardinality/global/enable\u7b49\u6bcf\u4e00\u9879\u8fdb\u884c\u4fee\u6539\uff0c\u5177\u4f53\u8bed\u6cd5\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-SQL-BLOCK-RULE"},"ALTER SQL BLOCK  RULE"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"sql \u548c sqlHash \u4e0d\u80fd\u540c\u65f6\u88ab\u8bbe\u7f6e\u3002\u8fd9\u610f\u5473\u7740\uff0c\u5982\u679c\u4e00\u4e2arule\u8bbe\u7f6e\u4e86sql\u6216\u8005sqlHash\uff0c\u5219\u53e6\u4e00\u4e2a\u5c5e\u6027\u5c06\u65e0\u6cd5\u88ab\u4fee\u6539"),(0,a.kt)("li",{parentName:"ul"},"sql/sqlHash \u548c partition_num/tablet_num/cardinality \u4e0d\u80fd\u540c\u65f6\u88ab\u8bbe\u7f6e\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5982\u679c\u4e00\u4e2arule\u8bbe\u7f6e\u4e86partition_num\uff0c\u90a3\u4e48sql\u6216\u8005sqlHash\u5c06\u65e0\u6cd5\u88ab\u4fee\u6539")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER SQL_BLOCK_RULE test_rule PROPERTIES("sql"="select \\\\* from test_table","enable"="true")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'ALTER SQL_BLOCK_RULE test_rule2 PROPERTIES("partition_num" = "10","tablet_num"="300","enable"="true")\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5220\u9664SQL\u963b\u6b62\u89c4\u5219\uff0c\u652f\u6301\u591a\u89c4\u5219\uff0c\u4ee5",(0,a.kt)("inlineCode",{parentName:"li"},","),"\u9694\u5f00\uff0c\u5177\u4f53\u8bed\u6cd5\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-SQL-BLOCK-RULE"},"DROP SQL BLOCK RULR"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DROP SQL_BLOCK_RULE test_rule1,test_rule2\n")),(0,a.kt)("h2",{id:"\u7528\u6237\u89c4\u5219\u7ed1\u5b9a"},"\u7528\u6237\u89c4\u5219\u7ed1\u5b9a"),(0,a.kt)("p",null,"\u5982\u679c\u914d\u7f6eglobal=false\uff0c\u5219\u9700\u8981\u914d\u7f6e\u6307\u5b9a\u7528\u6237\u7684\u89c4\u5219\u7ed1\u5b9a\uff0c\u591a\u4e2a\u89c4\u5219\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},","),"\u5206\u9694"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY [FOR 'jack'] 'sql_block_rules' = 'test_rule1,test_rule2'\n")))}c.isMDXComponent=!0}}]);