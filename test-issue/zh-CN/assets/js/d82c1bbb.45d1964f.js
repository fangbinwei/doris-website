"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[58970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),N=r,k=m["".concat(p,".").concat(N)]||m[N]||u[N]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=N;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},65810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"INSERT",language:"zh-CN"},i=void 0,o={unversionedId:"sql-reference/sql-statements/Data-Manipulation/insert",id:"version-0.15/sql-reference/sql-statements/Data-Manipulation/insert",title:"INSERT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-statements/Data-Manipulation/insert.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/insert",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/insert",draft:!1,tags:[],version:"0.15",frontMatter:{title:"INSERT",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER ROUTINE LOAD",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/alter-routine-load"},next:{title:"UPDATE",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/UPDATE"}},p={},s=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Note",id:"note",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"insert"},"INSERT"),(0,r.kt)("h2",{id:"description"},"description"),(0,r.kt)("h3",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INSERT INTO table_name\n    [ PARTITION (p1, ...) ]\n    [ WITH LABEL label]\n    [ (column [, ...]) ]\n    [ [ hint [, ...] ] ]\n    { VALUES ( { expression | DEFAULT } [, ...] ) [, ...] | query }\n")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"tablet_name: \u5bfc\u5165\u6570\u636e\u7684\u76ee\u7684\u8868\u3002\u53ef\u4ee5\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"db_name.table_name")," \u5f62\u5f0f"),(0,r.kt)("p",{parentName:"blockquote"},"partitions: \u6307\u5b9a\u5f85\u5bfc\u5165\u7684\u5206\u533a\uff0c\u5fc5\u987b\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"table_name")," \u4e2d\u5b58\u5728\u7684\u5206\u533a\uff0c\u591a\u4e2a\u5206\u533a\u540d\u79f0\u7528\u9017\u53f7\u5206\u9694"),(0,r.kt)("p",{parentName:"blockquote"},"label: \u4e3a Insert \u4efb\u52a1\u6307\u5b9a\u4e00\u4e2a label"),(0,r.kt)("p",{parentName:"blockquote"},"column_name: \u6307\u5b9a\u7684\u76ee\u7684\u5217\uff0c\u5fc5\u987b\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"table_name")," \u4e2d\u5b58\u5728\u7684\u5217"),(0,r.kt)("p",{parentName:"blockquote"},"expression: \u9700\u8981\u8d4b\u503c\u7ed9\u67d0\u4e2a\u5217\u7684\u5bf9\u5e94\u8868\u8fbe\u5f0f"),(0,r.kt)("p",{parentName:"blockquote"},"DEFAULT: \u8ba9\u5bf9\u5e94\u5217\u4f7f\u7528\u9ed8\u8ba4\u503c"),(0,r.kt)("p",{parentName:"blockquote"},"query: \u4e00\u4e2a\u666e\u901a\u67e5\u8be2\uff0c\u67e5\u8be2\u7684\u7ed3\u679c\u4f1a\u5199\u5165\u5230\u76ee\u6807\u4e2d"),(0,r.kt)("p",{parentName:"blockquote"},"hint: \u7528\u4e8e\u6307\u793a ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," \u6267\u884c\u884c\u4e3a\u7684\u4e00\u4e9b\u6307\u793a\u7b26\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"streaming")," \u548c \u9ed8\u8ba4\u7684\u975e ",(0,r.kt)("inlineCode",{parentName:"p"},"streaming")," \u65b9\u5f0f\u5747\u4f1a\u4f7f\u7528\u540c\u6b65\u65b9\u5f0f\u5b8c\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," \u8bed\u53e5\u6267\u884c\n\u975e ",(0,r.kt)("inlineCode",{parentName:"p"},"streaming")," \u65b9\u5f0f\u5728\u6267\u884c\u5b8c\u6210\u540e\u4f1a\u8fd4\u56de\u4e00\u4e2a label \u65b9\u4fbf\u7528\u6237\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW LOAD")," \u67e5\u8be2\u5bfc\u5165\u7684\u72b6\u6001")),(0,r.kt)("h3",{id:"note"},"Note"),(0,r.kt)("p",null,"\u5f53\u524d\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," \u8bed\u53e5\u65f6\uff0c\u5bf9\u4e8e\u6709\u4e0d\u7b26\u5408\u76ee\u6807\u8868\u683c\u5f0f\u7684\u6570\u636e\uff0c\u9ed8\u8ba4\u7684\u884c\u4e3a\u662f\u8fc7\u6ee4\uff0c\u6bd4\u5982\u5b57\u7b26\u4e32\u8d85\u957f\u7b49\u3002\u4f46\u662f\u5bf9\u4e8e\u6709\u8981\u6c42\u6570\u636e\u4e0d\u80fd\u591f\u88ab\u8fc7\u6ee4\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u4f1a\u8bdd\u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_insert_strict")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u6765\u786e\u4fdd\u5f53\u6709\u6570\u636e\u88ab\u8fc7\u6ee4\u6389\u7684\u65f6\u5019\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," \u4e0d\u4f1a\u88ab\u6267\u884c\u6210\u529f\u3002"),(0,r.kt)("h2",{id:"example"},"example"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"test")," \u8868\u5305\u542b\u4e24\u4e2a\u5217",(0,r.kt)("inlineCode",{parentName:"p"},"c1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"c2"),"\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5411",(0,r.kt)("inlineCode",{parentName:"li"},"test"),"\u8868\u4e2d\u5bfc\u5165\u4e00\u884c\u6570\u636e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INSERT INTO test VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT);\nINSERT INTO test (c1) VALUES (1);\n")),(0,r.kt)("p",null,"\u5176\u4e2d\u7b2c\u4e00\u6761\u3001\u7b2c\u4e8c\u6761\u8bed\u53e5\u662f\u4e00\u6837\u7684\u6548\u679c\u3002\u5728\u4e0d\u6307\u5b9a\u76ee\u6807\u5217\u65f6\uff0c\u4f7f\u7528\u8868\u4e2d\u7684\u5217\u987a\u5e8f\u6765\u4f5c\u4e3a\u9ed8\u8ba4\u7684\u76ee\u6807\u5217\u3002\n\u7b2c\u4e09\u6761\u3001\u7b2c\u56db\u6761\u8bed\u53e5\u8868\u8fbe\u7684\u610f\u601d\u662f\u4e00\u6837\u7684\uff0c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"c2"),"\u5217\u7684\u9ed8\u8ba4\u503c\uff0c\u6765\u5b8c\u6210\u6570\u636e\u5bfc\u5165\u3002"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5411",(0,r.kt)("inlineCode",{parentName:"li"},"test"),"\u8868\u4e2d\u4e00\u6b21\u6027\u5bfc\u5165\u591a\u884c\u6570\u636e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INSERT INTO test VALUES (1, 2), (3, 2 + 2);\nINSERT INTO test (c1, c2) VALUES (1, 2), (3, 2 * 2);\nINSERT INTO test (c1) VALUES (1), (3);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT), (3, DEFAULT);\n")),(0,r.kt)("p",null,"\u5176\u4e2d\u7b2c\u4e00\u6761\u3001\u7b2c\u4e8c\u6761\u8bed\u53e5\u6548\u679c\u4e00\u6837\uff0c\u5411",(0,r.kt)("inlineCode",{parentName:"p"},"test"),"\u8868\u4e2d\u4e00\u6b21\u6027\u5bfc\u5165\u4e24\u6761\u6570\u636e\n\u7b2c\u4e09\u6761\u3001\u7b2c\u56db\u6761\u8bed\u53e5\u6548\u679c\u5df2\u77e5\uff0c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"c2"),"\u5217\u7684\u9ed8\u8ba4\u503c\u5411",(0,r.kt)("inlineCode",{parentName:"p"},"test"),"\u8868\u4e2d\u5bfc\u5165\u4e24\u6761\u6570\u636e"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u5411 ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," \u8868\u4e2d\u5bfc\u5165\u4e00\u4e2a\u67e5\u8be2\u8bed\u53e5\u7ed3\u679c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INSERT INTO test SELECT * FROM test2;\nINSERT INTO test (c1, c2) SELECT * from test2;\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u5411 ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," \u8868\u4e2d\u5bfc\u5165\u4e00\u4e2a\u67e5\u8be2\u8bed\u53e5\u7ed3\u679c\uff0c\u5e76\u6307\u5b9a partition \u548c label")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INSERT INTO test PARTITION(p1, p2) WITH LABEL `label1` SELECT * FROM test2;\nINSERT INTO test WITH LABEL `label1` (c1, c2) SELECT * from test2;\n")),(0,r.kt)("p",null,"\u5f02\u6b65\u7684\u5bfc\u5165\u5176\u5b9e\u662f\uff0c\u4e00\u4e2a\u540c\u6b65\u7684\u5bfc\u5165\u5c01\u88c5\u6210\u4e86\u5f02\u6b65\u3002\u586b\u5199 streaming \u548c\u4e0d\u586b\u5199\u7684",(0,r.kt)("strong",{parentName:"p"},"\u6267\u884c\u6548\u7387\u662f\u4e00\u6837"),"\u7684\u3002"),(0,r.kt)("p",null,"\u7531\u4e8eDoris\u4e4b\u524d\u7684\u5bfc\u5165\u65b9\u5f0f\u90fd\u662f\u5f02\u6b65\u5bfc\u5165\u65b9\u5f0f\uff0c\u4e3a\u4e86\u517c\u5bb9\u65e7\u6709\u7684\u4f7f\u7528\u4e60\u60ef\uff0c\u4e0d\u52a0 streaming \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," \u8bed\u53e5\u4f9d\u65e7\u4f1a\u8fd4\u56de\u4e00\u4e2a label\uff0c\u7528\u6237\u9700\u8981\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW LOAD"),"\u547d\u4ee4\u67e5\u770b\u6b64",(0,r.kt)("inlineCode",{parentName:"p"},"label"),"\u5bfc\u5165\u4f5c\u4e1a\u7684\u72b6\u6001\u3002"),(0,r.kt)("h2",{id:"keyword"},"keyword"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INSERT\n")))}m.isMDXComponent=!0}}]);