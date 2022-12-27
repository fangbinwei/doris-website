"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[20051],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"SQL\u95ee\u9898",language:"zh-CN"},i=void 0,o={unversionedId:"faq/sql-faq",id:"version-dev/faq/sql-faq",title:"SQL\u95ee\u9898",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/faq/sql-faq.md",sourceDirName:"faq",slug:"/faq/sql-faq",permalink:"/zh-CN/docs/dev/faq/sql-faq",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/faq/sql-faq.md",tags:[],version:"dev",frontMatter:{title:"SQL\u95ee\u9898",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6570\u636e\u64cd\u4f5c\u95ee\u9898",permalink:"/zh-CN/docs/dev/faq/data-faq"},next:{title:"Star-Schema-Benchmark",permalink:"/zh-CN/docs/dev/benchmark/ssb"}},c={},s=[{value:"Q1. \u67e5\u8be2\u62a5\u9519\uff1aFailed to get scan range, no queryable replica found in tablet: xxxx",id:"q1-\u67e5\u8be2\u62a5\u9519failed-to-get-scan-range-no-queryable-replica-found-in-tablet-xxxx",level:3},{value:"Q2. show backends/frontends \u67e5\u770b\u5230\u7684\u4fe1\u606f\u4e0d\u5b8c\u6574",id:"q2-show-backendsfrontends-\u67e5\u770b\u5230\u7684\u4fe1\u606f\u4e0d\u5b8c\u6574",level:3},{value:"Q3. invalid cluster id: xxxx",id:"q3-invalid-cluster-id-xxxx",level:3},{value:"Q4. Unique Key \u6a21\u578b\u67e5\u8be2\u7ed3\u679c\u4e0d\u4e00\u81f4",id:"q4-unique-key-\u6a21\u578b\u67e5\u8be2\u7ed3\u679c\u4e0d\u4e00\u81f4",level:3},{value:"Q5. \u67e5\u8be2 bitmap/hll \u7c7b\u578b\u7684\u6570\u636e\u8fd4\u56de NULL \u7684\u95ee\u9898",id:"q5-\u67e5\u8be2-bitmaphll-\u7c7b\u578b\u7684\u6570\u636e\u8fd4\u56de-null-\u7684\u95ee\u9898",level:3},{value:"Q6. \u8bbf\u95ee\u5bf9\u8c61\u5b58\u50a8\u65f6\u62a5\u9519\uff1acurl 77: Problem with the SSL CA cert",id:"q6-\u8bbf\u95ee\u5bf9\u8c61\u5b58\u50a8\u65f6\u62a5\u9519curl-77-problem-with-the-ssl-ca-cert",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sql\u95ee\u9898"},"SQL\u95ee\u9898"),(0,a.kt)("h3",{id:"q1-\u67e5\u8be2\u62a5\u9519failed-to-get-scan-range-no-queryable-replica-found-in-tablet-xxxx"},"Q1. \u67e5\u8be2\u62a5\u9519\uff1aFailed to get scan range, no queryable replica found in tablet: xxxx"),(0,a.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u662f\u56e0\u4e3a\u5bf9\u5e94\u7684 tablet \u6ca1\u6709\u627e\u5230\u53ef\u4ee5\u67e5\u8be2\u7684\u526f\u672c\uff0c\u901a\u5e38\u539f\u56e0\u53ef\u80fd\u662f BE \u5b95\u673a\u3001\u526f\u672c\u7f3a\u5931\u7b49\u3002\u53ef\u4ee5\u5148\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"show tablet tablet_id")," \u8bed\u53e5\uff0c\u7136\u540e\u6267\u884c\u540e\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"show proc")," \u8bed\u53e5\uff0c\u67e5\u770b\u8fd9\u4e2a tablet \u5bf9\u5e94\u7684\u526f\u672c\u4fe1\u606f\uff0c\u68c0\u67e5\u526f\u672c\u662f\u5426\u5b8c\u6574\u3002\u540c\u65f6\u8fd8\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},'show proc "/cluster_balance"')," \u4fe1\u606f\u6765\u67e5\u8be2\u96c6\u7fa4\u5185\u526f\u672c\u8c03\u5ea6\u548c\u4fee\u590d\u7684\u8fdb\u5ea6\u3002"),(0,a.kt)("p",null,"\u5173\u4e8e\u6570\u636e\u526f\u672c\u7ba1\u7406\u76f8\u5173\u7684\u547d\u4ee4\uff0c\u53ef\u4ee5\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/admin-manual/maint-monitor/tablet-repair-and-balance"},"\u6570\u636e\u526f\u672c\u7ba1\u7406"),"\u3002"),(0,a.kt)("h3",{id:"q2-show-backendsfrontends-\u67e5\u770b\u5230\u7684\u4fe1\u606f\u4e0d\u5b8c\u6574"},"Q2. show backends/frontends \u67e5\u770b\u5230\u7684\u4fe1\u606f\u4e0d\u5b8c\u6574"),(0,a.kt)("p",null,"\u5728\u6267\u884c\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"show backends/frontends")," \u7b49\u67d0\u4e9b\u8bed\u53e5\u540e\uff0c\u7ed3\u679c\u4e2d\u53ef\u80fd\u4f1a\u53d1\u73b0\u6709\u90e8\u5206\u5217\u5185\u5bb9\u4e0d\u5168\u3002\u6bd4\u5982show backends\u7ed3\u679c\u4e2d\u770b\u4e0d\u5230\u78c1\u76d8\u5bb9\u91cf\u4fe1\u606f\u7b49\u3002"),(0,a.kt)("p",null,"\u901a\u5e38\u8fd9\u4e2a\u95ee\u9898\u4f1a\u51fa\u73b0\u5728\u96c6\u7fa4\u6709\u591a\u4e2aFE\u7684\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u7528\u6237\u8fde\u63a5\u5230\u975eMaster FE\u8282\u70b9\u6267\u884c\u8fd9\u4e9b\u8bed\u53e5\uff0c\u5c31\u4f1a\u770b\u5230\u4e0d\u5b8c\u6574\u7684\u4fe1\u606f\u3002\u8fd9\u662f\u56e0\u4e3a\uff0c\u90e8\u5206\u4fe1\u606f\u4ec5\u5b58\u5728\u4e8eMaster FE\u8282\u70b9\u3002\u6bd4\u5982BE\u7684\u78c1\u76d8\u4f7f\u7528\u91cf\u4fe1\u606f\u7b49\u3002\u6240\u4ee5\u53ea\u6709\u5728\u76f4\u8fdeMaster FE\u540e\uff0c\u624d\u80fd\u83b7\u5f97\u5b8c\u6574\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u5728\u6267\u884c\u8fd9\u4e9b\u8bed\u53e5\u524d\uff0c\u5148\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"set forward_to_master=true;")," \u8fd9\u4e2a\u4f1a\u8bdd\u53d8\u91cf\u8bbe\u7f6e\u4e3atrue\u540e\uff0c\u540e\u7eed\u6267\u884c\u7684\u4e00\u4e9b\u4fe1\u606f\u67e5\u770b\u7c7b\u8bed\u53e5\u4f1a\u81ea\u52a8\u8f6c\u53d1\u5230Master FE\u83b7\u53d6\u7ed3\u679c\u3002\u8fd9\u6837\uff0c\u4e0d\u8bba\u7528\u6237\u8fde\u63a5\u7684\u662f\u54ea\u4e2aFE\uff0c\u90fd\u53ef\u4ee5\u83b7\u53d6\u5230\u5b8c\u6574\u7ed3\u679c\u4e86\u3002"),(0,a.kt)("h3",{id:"q3-invalid-cluster-id-xxxx"},"Q3. invalid cluster id: xxxx"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u9519\u8bef\u53ef\u80fd\u4f1a\u5728show backends \u6216 show frontends \u547d\u4ee4\u7684\u7ed3\u679c\u4e2d\u51fa\u73b0\u3002\u901a\u5e38\u51fa\u73b0\u5728\u67d0\u4e2aFE\u6216BE\u8282\u70b9\u7684\u9519\u8bef\u4fe1\u606f\u5217\u4e2d\u3002\u8fd9\u4e2a\u9519\u8bef\u7684\u542b\u4e49\u662f\uff0cMaster FE\u5411\u8fd9\u4e2a\u8282\u70b9\u53d1\u9001\u5fc3\u8df3\u4fe1\u606f\u540e\uff0c\u8be5\u8282\u70b9\u53d1\u73b0\u5fc3\u8df3\u4fe1\u606f\u4e2d\u643a\u5e26\u7684 cluster id\u548c\u672c\u5730\u5b58\u50a8\u7684 cluster id\u4e0d\u540c\uff0c\u6240\u4ee5\u62d2\u7edd\u56de\u5e94\u5fc3\u8df3\u3002"),(0,a.kt)("p",null,"Doris\u7684 Master FE \u8282\u70b9\u4f1a\u4e3b\u52a8\u53d1\u9001\u5fc3\u8df3\u7ed9\u5404\u4e2aFE\u6216BE\u8282\u70b9\uff0c\u5e76\u4e14\u5728\u5fc3\u8df3\u4fe1\u606f\u4e2d\u4f1a\u643a\u5e26\u4e00\u4e2acluster_id\u3002cluster_id\u662f\u5728\u4e00\u4e2a\u96c6\u7fa4\u521d\u59cb\u5316\u65f6\uff0c\u7531Master FE\u751f\u6210\u7684\u552f\u4e00\u96c6\u7fa4\u6807\u8bc6\u3002\u5f53FE\u6216BE\u7b2c\u4e00\u6b21\u6536\u5230\u5fc3\u8df3\u4fe1\u606f\u540e\uff0c\u5219\u4f1a\u5c06cluster_id\u4ee5\u6587\u4ef6\u7684\u5f62\u5f0f\u4fdd\u5b58\u5728\u672c\u5730\u3002FE\u7684\u8be5\u6587\u4ef6\u5728\u5143\u6570\u636e\u76ee\u5f55\u7684image/\u76ee\u5f55\u4e0b\uff0cBE\u5219\u5728\u6240\u6709\u6570\u636e\u76ee\u5f55\u4e0b\u90fd\u6709\u4e00\u4e2acluster_id\u6587\u4ef6\u3002\u4e4b\u540e\uff0c\u6bcf\u6b21\u8282\u70b9\u6536\u5230\u5fc3\u8df3\u540e\uff0c\u90fd\u4f1a\u7528\u672c\u5730cluster_id\u7684\u5185\u5bb9\u548c\u5fc3\u8df3\u4e2d\u7684\u5185\u5bb9\u4f5c\u6bd4\u5bf9\uff0c\u5982\u679c\u4e0d\u4e00\u81f4\uff0c\u5219\u62d2\u7edd\u54cd\u5e94\u5fc3\u8df3\u3002"),(0,a.kt)("p",null,"\u8be5\u673a\u5236\u662f\u4e00\u4e2a\u8282\u70b9\u8ba4\u8bc1\u673a\u5236\uff0c\u4ee5\u9632\u6b62\u63a5\u6536\u5230\u96c6\u7fa4\u5916\u7684\u8282\u70b9\u53d1\u9001\u6765\u7684\u9519\u8bef\u7684\u5fc3\u8df3\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u6062\u590d\u8fd9\u4e2a\u9519\u8bef\u3002\u9996\u5148\u8981\u5148\u786e\u8ba4\u6240\u6709\u8282\u70b9\u662f\u5426\u90fd\u662f\u6b63\u786e\u7684\u96c6\u7fa4\u4e2d\u7684\u8282\u70b9\u3002\u4e4b\u540e\uff0c\u5bf9\u4e8eFE\u8282\u70b9\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u4fee\u6539\u5143\u6570\u636e\u76ee\u5f55\u4e0b\u7684 image/VERSION \u6587\u4ef6\u4e2d\u7684 cluster_id \u503c\u540e\u91cd\u542fFE\u3002\u5bf9\u4e8eBE\u8282\u70b9\uff0c\u5219\u53ef\u4ee5\u5220\u9664\u6240\u6709\u6570\u636e\u76ee\u5f55\u4e0b\u7684 cluster_id \u6587\u4ef6\u540e\u91cd\u542f BE\u3002"),(0,a.kt)("h3",{id:"q4-unique-key-\u6a21\u578b\u67e5\u8be2\u7ed3\u679c\u4e0d\u4e00\u81f4"},"Q4. Unique Key \u6a21\u578b\u67e5\u8be2\u7ed3\u679c\u4e0d\u4e00\u81f4"),(0,a.kt)("p",null,"\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5f53\u7528\u6237\u4f7f\u7528\u76f8\u540c\u7684 SQL \u67e5\u8be2\u4e00\u4e2a Unique Key \u6a21\u578b\u7684\u8868\u65f6\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u591a\u6b21\u67e5\u8be2\u7ed3\u679c\u4e0d\u4e00\u81f4\u7684\u73b0\u8c61\u3002\u5e76\u4e14\u67e5\u8be2\u7ed3\u679c\u603b\u5728 2-3 \u79cd\u4e4b\u95f4\u53d8\u5316\u3002"),(0,a.kt)("p",null,"\u8fd9\u53ef\u80fd\u662f\u56e0\u4e3a\uff0c\u5728\u540c\u4e00\u6279\u5bfc\u5165\u6570\u636e\u4e2d\uff0c\u51fa\u73b0\u4e86 key \u76f8\u540c\u4f46 value \u4e0d\u540c\u7684\u6570\u636e\uff0c\u8fd9\u4f1a\u5bfc\u81f4\uff0c\u4e0d\u540c\u526f\u672c\u95f4\uff0c\u56e0\u6570\u636e\u8986\u76d6\u7684\u5148\u540e\u987a\u5e8f\u4e0d\u786e\u5b9a\u800c\u4ea7\u751f\u7684\u7ed3\u679c\u4e0d\u4e00\u81f4\u7684\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u8868\u5b9a\u4e49\u4e3a k1, v1\u3002\u4e00\u6279\u6b21\u5bfc\u5165\u6570\u636e\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'1, "abc"\n1, "def"\n')),(0,a.kt)("p",null,"\u90a3\u4e48\u53ef\u80fd\u526f\u672c1 \u7684\u7ed3\u679c\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},'1, "abc"'),"\uff0c\u800c\u526f\u672c2 \u7684\u7ed3\u679c\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},'1, "def"'),"\u3002\u4ece\u800c\u5bfc\u81f4\u67e5\u8be2\u7ed3\u679c\u4e0d\u4e00\u81f4\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u786e\u4fdd\u4e0d\u540c\u526f\u672c\u4e4b\u95f4\u7684\u6570\u636e\u5148\u540e\u987a\u5e8f\u552f\u4e00\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/data-operate/update-delete/sequence-column-manual"},"Sequence Column")," \u529f\u80fd\u3002"),(0,a.kt)("h3",{id:"q5-\u67e5\u8be2-bitmaphll-\u7c7b\u578b\u7684\u6570\u636e\u8fd4\u56de-null-\u7684\u95ee\u9898"},"Q5. \u67e5\u8be2 bitmap/hll \u7c7b\u578b\u7684\u6570\u636e\u8fd4\u56de NULL \u7684\u95ee\u9898"),(0,a.kt)("p",null,"\u5728 1.1.x \u7248\u672c\u4e2d\uff0c\u5728\u5f00\u542f\u5411\u91cf\u5316\u7684\u60c5\u51b5\u4e0b\uff0c\u6267\u884c\u67e5\u8be2\u6570\u636e\u8868\u4e2d bitmp \u7c7b\u578b\u5b57\u6bb5\u8fd4\u56de\u7ed3\u679c\u4e3a NULL \u7684\u60c5\u51b5\u4e0b\uff0c"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9996\u5148\u4f60\u8981 ",(0,a.kt)("inlineCode",{parentName:"li"},"set return_object_data_as_binary=true;")),(0,a.kt)("li",{parentName:"ol"},"\u5173\u95ed\u5411\u91cf\u5316 ",(0,a.kt)("inlineCode",{parentName:"li"},"set enable_vectorized_engine=false;")),(0,a.kt)("li",{parentName:"ol"},"\u5173\u95ed SQL \u7f13\u5b58 ",(0,a.kt)("inlineCode",{parentName:"li"},"set [global] enable_sql_cache = false;"))),(0,a.kt)("p",null,"\u8fd9\u91cc\u662f\u56e0\u4e3a bitmap / hll \u7c7b\u578b\u5728\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u4e2d\uff1a\u8f93\u5165\u5747\u4e3aNULL\uff0c\u5219\u8f93\u51fa\u7684\u7ed3\u679c\u4e5f\u662fNULL\u800c\u4e0d\u662f0"),(0,a.kt)("h3",{id:"q6-\u8bbf\u95ee\u5bf9\u8c61\u5b58\u50a8\u65f6\u62a5\u9519curl-77-problem-with-the-ssl-ca-cert"},"Q6. \u8bbf\u95ee\u5bf9\u8c61\u5b58\u50a8\u65f6\u62a5\u9519\uff1acurl 77: Problem with the SSL CA cert"),(0,a.kt)("p",null,"\u5982\u679c be.INFO \u65e5\u5fd7\u4e2d\u51fa\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"curl 77: Problem with the SSL CA cert")," \u9519\u8bef\u3002\u53ef\u4ee5\u5c1d\u8bd5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u89e3\u51b3\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("a",{parentName:"li",href:"https://curl.se/docs/caextract.html"},"https://curl.se/docs/caextract.html")," \u4e0b\u8f7d\u8bc1\u4e66\uff1acacert.pem"),(0,a.kt)("li",{parentName:"ol"},"\u62f7\u8d1d\u8bc1\u4e66\u5230\u6307\u5b9a\u4f4d\u7f6e\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"sudo cp /tmp/cacert.pem /etc/ssl/certs/ca-certificates.crt")),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u542f BE \u8282\u70b9\u3002")))}u.isMDXComponent=!0}}]);