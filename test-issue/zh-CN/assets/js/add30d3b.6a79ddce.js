"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[18199],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},_=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),_=o,d=m["".concat(a,".").concat(_)]||m[_]||u[_]||i;return n?r.createElement(d,p(p({ref:t},l),{},{components:n})):r.createElement(d,p({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,p=new Array(i);p[0]=_;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[m]="string"==typeof e?e:o,p[1]=s;for(var c=2;c<i;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}_.displayName="MDXCreateElement"},12083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"BE \u76d1\u63a7\u9879",language:"zh-CN"},p=void 0,s={unversionedId:"administrator-guide/operation/monitor-metrics/be-metrics",id:"version-0.15/administrator-guide/operation/monitor-metrics/be-metrics",title:"BE \u76d1\u63a7\u9879",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/administrator-guide/operation/monitor-metrics/be-metrics.md",sourceDirName:"administrator-guide/operation/monitor-metrics",slug:"/administrator-guide/operation/monitor-metrics/be-metrics",permalink:"/zh-CN/docs/0.15/administrator-guide/operation/monitor-metrics/be-metrics",draft:!1,tags:[],version:"0.15",frontMatter:{title:"BE \u76d1\u63a7\u9879",language:"zh-CN"},sidebar:"docs",previous:{title:"Tablet \u6062\u590d\u5de5\u5177",permalink:"/zh-CN/docs/0.15/administrator-guide/operation/tablet-restore-tool"},next:{title:"FE \u76d1\u63a7\u9879",permalink:"/zh-CN/docs/0.15/administrator-guide/operation/monitor-metrics/fe-metrics"}},a={},c=[{value:"\u67e5\u770b\u76d1\u63a7\u9879",id:"\u67e5\u770b\u76d1\u63a7\u9879",level:2},{value:"\u76d1\u63a7\u9879\u5217\u8868",id:"\u76d1\u63a7\u9879\u5217\u8868",level:2},{value:"<code>doris_be_snmp{name=&quot;tcp_in_errs&quot;}</code>",id:"doris_be_snmpnametcp_in_errs",level:3},{value:"<code>doris_be_snmp{name=&quot;tcp_retrans_segs&quot;}</code>",id:"doris_be_snmpnametcp_retrans_segs",level:3},{value:"<code>doris_be_snmp{name=&quot;tcp_in_segs&quot;}</code>",id:"doris_be_snmpnametcp_in_segs",level:3},{value:"<code>doris_be_snmp{name=&quot;tcp_out_segs&quot;}</code>",id:"doris_be_snmpnametcp_out_segs",level:3},{value:"<code>doris_be_compaction_mem_current_consumption</code>",id:"doris_be_compaction_mem_current_consumption",level:3}],l={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"be-\u76d1\u63a7\u9879"},"BE \u76d1\u63a7\u9879"),(0,o.kt)("p",null,"\u8be5\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd BE \u7684\u76f8\u5173\u76d1\u63a7\u9879\u3002"),(0,o.kt)("h2",{id:"\u67e5\u770b\u76d1\u63a7\u9879"},"\u67e5\u770b\u76d1\u63a7\u9879"),(0,o.kt)("p",null,"BE \u7684\u76d1\u63a7\u9879\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8bbf\u95ee\uff1a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"http://be_host:be_webserver_port/metrics")),(0,o.kt)("p",null,"\u9ed8\u8ba4\u663e\u793a\u4e3a ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," \u683c\u5f0f\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u63a5\u53e3\u53ef\u4ee5\u83b7\u53d6 Json \u683c\u5f0f\u7684\u76d1\u63a7\u9879\uff1a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"http://be_host:be_webserver_port/metrics?type=json")),(0,o.kt)("h2",{id:"\u76d1\u63a7\u9879\u5217\u8868"},"\u76d1\u63a7\u9879\u5217\u8868"),(0,o.kt)("h3",{id:"doris_be_snmpnametcp_in_errs"},(0,o.kt)("inlineCode",{parentName:"h3"},'doris_be_snmp{name="tcp_in_errs"}')),(0,o.kt)("p",null,"\u8be5\u76d1\u63a7\u9879\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"/proc/net/snmp")," \u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Tcp: InErrs")," \u5b57\u6bb5\u503c\u3002\u8868\u793a\u5f53\u524d\u63a5\u6536\u5230\u7684\u9519\u8bef\u7684 TCP \u5305\u7684\u6570\u91cf\u3002"),(0,o.kt)("p",null,"\u7ed3\u5408\u91c7\u6837\u5468\u671f\u53ef\u4ee5\u8ba1\u7b97\u53d1\u751f\u7387\u3002"),(0,o.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u6392\u67e5\u7f51\u7edc\u95ee\u9898\u3002"),(0,o.kt)("h3",{id:"doris_be_snmpnametcp_retrans_segs"},(0,o.kt)("inlineCode",{parentName:"h3"},'doris_be_snmp{name="tcp_retrans_segs"}')),(0,o.kt)("p",null,"\u8be5\u76d1\u63a7\u9879\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"/proc/net/snmp")," \u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Tcp: RetransSegs")," \u5b57\u6bb5\u503c\u3002\u8868\u793a\u5f53\u524d\u91cd\u4f20\u7684 TCP \u5305\u7684\u6570\u91cf\u3002"),(0,o.kt)("p",null,"\u7ed3\u5408\u91c7\u6837\u5468\u671f\u53ef\u4ee5\u8ba1\u7b97\u53d1\u751f\u7387\u3002"),(0,o.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u6392\u67e5\u7f51\u7edc\u95ee\u9898\u3002"),(0,o.kt)("h3",{id:"doris_be_snmpnametcp_in_segs"},(0,o.kt)("inlineCode",{parentName:"h3"},'doris_be_snmp{name="tcp_in_segs"}')),(0,o.kt)("p",null,"\u8be5\u76d1\u63a7\u9879\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"/proc/net/snmp")," \u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Tcp: InSegs")," \u5b57\u6bb5\u503c\u3002\u8868\u793a\u5f53\u524d\u63a5\u6536\u5230\u7684\u6240\u6709 TCP \u5305\u7684\u6570\u91cf\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"(NEW_tcp_in_errs - OLD_tcp_in_errs) / (NEW_tcp_in_segs - OLD_tcp_in_segs)")," \u53ef\u4ee5\u8ba1\u7b97\u63a5\u6536\u5230\u7684 TCP \u9519\u8bef\u5305\u7387\u3002"),(0,o.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u6392\u67e5\u7f51\u7edc\u95ee\u9898\u3002"),(0,o.kt)("h3",{id:"doris_be_snmpnametcp_out_segs"},(0,o.kt)("inlineCode",{parentName:"h3"},'doris_be_snmp{name="tcp_out_segs"}')),(0,o.kt)("p",null,"\u8be5\u76d1\u63a7\u9879\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"/proc/net/snmp")," \u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Tcp: OutSegs")," \u5b57\u6bb5\u503c\u3002\u8868\u793a\u5f53\u524d\u53d1\u9001\u7684\u6240\u6709\u5e26 RST \u6807\u8bb0\u7684 TCP \u5305\u7684\u6570\u91cf\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"(NEW_tcp_tcp_retrans_segs - OLD_tcp_retrans_segs) / (NEW_tcp_out_segs - OLD_tcp_out_segs)")," \u53ef\u4ee5\u8ba1\u7b97 TCP \u91cd\u4f20\u7387\u3002"),(0,o.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u6392\u67e5\u7f51\u7edc\u95ee\u9898\u3002"),(0,o.kt)("h3",{id:"doris_be_compaction_mem_current_consumption"},(0,o.kt)("inlineCode",{parentName:"h3"},"doris_be_compaction_mem_current_consumption")),(0,o.kt)("p",null,"\u8be5\u76d1\u63a7\u9879\u4e3aCompaction\u4f7f\u7528\u7684MemPool\u603b\u548c\uff08\u6240\u6709Compaction\u7ebf\u7a0b\uff09\u3002\u901a\u8fc7\u8be5\u503c\uff0c\u53ef\u4ee5\u8fc5\u901f\u5224\u65adCompaction\u662f\u5426\u5360\u7528\u8fc7\u591a\u5185\u5b58\uff0c\u5f15\u8d77\u9ad8\u5185\u5b58\u5360\u7528\n\u751a\u81f3OOM\u7b49\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u6392\u67e5\u5185\u5b58\u4f7f\u7528\u95ee\u9898\u3002"))}m.isMDXComponent=!0}}]);