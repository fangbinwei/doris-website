"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[66327],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=s(r),c=l,d=k["".concat(i,".").concat(c)]||k[c]||m[c]||o;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[k]="string"==typeof e?e:l,a[1]=p;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},72336:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(87462),l=(r(67294),r(3905));const o={title:"\u5f39\u6027\u6269\u7f29\u5bb9",language:"zh-CN"},a=void 0,p={unversionedId:"admin-manual/cluster-management/elastic-expansion",id:"admin-manual/cluster-management/elastic-expansion",title:"\u5f39\u6027\u6269\u7f29\u5bb9",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/cluster-management/elastic-expansion.md",sourceDirName:"admin-manual/cluster-management",slug:"/admin-manual/cluster-management/elastic-expansion",permalink:"/zh-CN/docs/admin-manual/cluster-management/elastic-expansion",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5f39\u6027\u6269\u7f29\u5bb9",language:"zh-CN"},sidebar:"docs",previous:{title:"\u96c6\u7fa4\u5347\u7ea7",permalink:"/zh-CN/docs/admin-manual/cluster-management/upgrade"},next:{title:"\u8d1f\u8f7d\u5747\u8861",permalink:"/zh-CN/docs/admin-manual/cluster-management/load-balancing"}},i={},s=[{value:"FE \u6269\u5bb9\u548c\u7f29\u5bb9",id:"fe-\u6269\u5bb9\u548c\u7f29\u5bb9",level:2},{value:"\u589e\u52a0 FE \u8282\u70b9",id:"\u589e\u52a0-fe-\u8282\u70b9",level:3},{value:"\u914d\u7f6e\u53ca\u542f\u52a8 Follower \u6216 Observer",id:"\u914d\u7f6e\u53ca\u542f\u52a8-follower-\u6216-observer",level:4},{value:"\u5c06 Follower \u6216 Observer \u52a0\u5165\u5230\u96c6\u7fa4",id:"\u5c06-follower-\u6216-observer-\u52a0\u5165\u5230\u96c6\u7fa4",level:4},{value:"\u5220\u9664 FE \u8282\u70b9",id:"\u5220\u9664-fe-\u8282\u70b9",level:3},{value:"BE \u6269\u5bb9\u548c\u7f29\u5bb9",id:"be-\u6269\u5bb9\u548c\u7f29\u5bb9",level:2},{value:"\u589e\u52a0 BE \u8282\u70b9",id:"\u589e\u52a0-be-\u8282\u70b9",level:3},{value:"\u5220\u9664 BE \u8282\u70b9",id:"\u5220\u9664-be-\u8282\u70b9",level:3},{value:"Broker \u6269\u5bb9\u7f29\u5bb9",id:"broker-\u6269\u5bb9\u7f29\u5bb9",level:2}],u={toc:s};function k(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6269\u5bb9\u7f29\u5bb9"},"\u6269\u5bb9\u7f29\u5bb9"),(0,l.kt)("p",null,"Doris \u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u6269\u5bb9\u548c\u7f29\u5bb9 FE\u3001BE\u3001Broker \u5b9e\u4f8b\u3002"),(0,l.kt)("h2",{id:"fe-\u6269\u5bb9\u548c\u7f29\u5bb9"},"FE \u6269\u5bb9\u548c\u7f29\u5bb9"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5c06 FE \u6269\u5bb9\u81f3 3 \u4e2a\u4ee5\u4e0a\u8282\u70b9\u6765\u5b9e\u73b0 FE \u7684\u9ad8\u53ef\u7528\u3002"),(0,l.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 mysql \u5ba2\u6237\u7aef\u767b\u9646 Master FE\u3002\u901a\u8fc7:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SHOW PROC '/frontends';")),(0,l.kt)("p",null,"\u6765\u67e5\u770b\u5f53\u524d FE \u7684\u8282\u70b9\u60c5\u51b5\u3002"),(0,l.kt)("p",null,"\u4e5f\u53ef\u4ee5\u901a\u8fc7\u524d\u7aef\u9875\u9762\u8fde\u63a5\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"http://fe_hostname:fe_http_port/frontend")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"http://fe_hostname:fe_http_port/system?path=//frontends")," \u6765\u67e5\u770b FE \u8282\u70b9\u7684\u60c5\u51b5\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0a\u65b9\u5f0f\uff0c\u90fd\u9700\u8981 Doris \u7684 root \u7528\u6237\u6743\u9650\u3002"),(0,l.kt)("p",null,"FE \u8282\u70b9\u7684\u6269\u5bb9\u548c\u7f29\u5bb9\u8fc7\u7a0b\uff0c\u4e0d\u5f71\u54cd\u5f53\u524d\u7cfb\u7edf\u8fd0\u884c\u3002"),(0,l.kt)("h3",{id:"\u589e\u52a0-fe-\u8282\u70b9"},"\u589e\u52a0 FE \u8282\u70b9"),(0,l.kt)("p",null,"FE \u5206\u4e3a Leader\uff0cFollower \u548c Observer \u4e09\u79cd\u89d2\u8272\u3002 \u9ed8\u8ba4\u4e00\u4e2a\u96c6\u7fa4\uff0c\u53ea\u80fd\u6709\u4e00\u4e2a Leader\uff0c\u53ef\u4ee5\u6709\u591a\u4e2a Follower \u548c Observer\u3002\u5176\u4e2d Leader \u548c Follower \u7ec4\u6210\u4e00\u4e2a Paxos \u9009\u62e9\u7ec4\uff0c\u5982\u679c Leader \u5b95\u673a\uff0c\u5219\u5269\u4e0b\u7684 Follower \u4f1a\u81ea\u52a8\u9009\u51fa\u65b0\u7684 Leader\uff0c\u4fdd\u8bc1\u5199\u5165\u9ad8\u53ef\u7528\u3002Observer \u540c\u6b65 Leader \u7684\u6570\u636e\uff0c\u4f46\u662f\u4e0d\u53c2\u52a0\u9009\u4e3e\u3002\u5982\u679c\u53ea\u90e8\u7f72\u4e00\u4e2a FE\uff0c\u5219 FE \u9ed8\u8ba4\u5c31\u662f Leader\u3002"),(0,l.kt)("p",null,"\u7b2c\u4e00\u4e2a\u542f\u52a8\u7684 FE \u81ea\u52a8\u6210\u4e3a Leader\u3002\u5728\u6b64\u57fa\u7840\u4e0a\uff0c\u53ef\u4ee5\u6dfb\u52a0\u82e5\u5e72 Follower \u548c Observer\u3002"),(0,l.kt)("h4",{id:"\u914d\u7f6e\u53ca\u542f\u52a8-follower-\u6216-observer"},"\u914d\u7f6e\u53ca\u542f\u52a8 Follower \u6216 Observer"),(0,l.kt)("p",null,"\u8fd9\u91cc Follower \u548c Observer \u7684\u914d\u7f6e\u540c Leader \u7684\u914d\u7f6e\u3002"),(0,l.kt)("p",null,"\u9996\u5148\u7b2c\u4e00\u6b21\u542f\u52a8\u65f6\uff0c\u9700\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"./bin/start_fe.sh --helper leader_fe_host:edit_log_port --daemon")),(0,l.kt)("p",null,"\u5176\u4e2d leader","_","fe","_","host \u4e3a Leader \u6240\u5728\u8282\u70b9 ip, edit","_","log","_","port \u5728 Leader \u7684\u914d\u7f6e\u6587\u4ef6 fe.conf \u4e2d\u3002--helper \u53c2\u6570\u4ec5\u5728 follower \u548c observer \u7b2c\u4e00\u6b21\u542f\u52a8\u65f6\u624d\u9700\u8981\u3002"),(0,l.kt)("h4",{id:"\u5c06-follower-\u6216-observer-\u52a0\u5165\u5230\u96c6\u7fa4"},"\u5c06 Follower \u6216 Observer \u52a0\u5165\u5230\u96c6\u7fa4"),(0,l.kt)("p",null,"\u6dfb\u52a0 Follower \u6216 Observer\u3002\u4f7f\u7528 mysql-client \u8fde\u63a5\u5230\u5df2\u542f\u52a8\u7684 FE\uff0c\u5e76\u6267\u884c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM ADD FOLLOWER "follower_host:edit_log_port";')),(0,l.kt)("p",null,"\u6216"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM ADD OBSERVER "observer_host:edit_log_port";')),(0,l.kt)("p",null,"\u5176\u4e2d follower","_","host\u548cobserver","_","host \u4e3a Follower \u6216 Observer \u6240\u5728\u8282\u70b9 ip\uff0cedit","_","log","_","port \u5728\u5176\u914d\u7f6e\u6587\u4ef6 fe.conf \u4e2d\u3002"),(0,l.kt)("p",null,"\u67e5\u770b Follower \u6216 Observer \u8fd0\u884c\u72b6\u6001\u3002\u4f7f\u7528 mysql-client \u8fde\u63a5\u5230\u4efb\u4e00\u5df2\u542f\u52a8\u7684 FE\uff0c\u5e76\u6267\u884c\uff1aSHOW PROC '/frontends'; \u53ef\u4ee5\u67e5\u770b\u5f53\u524d\u5df2\u52a0\u5165\u96c6\u7fa4\u7684 FE \u53ca\u5176\u5bf9\u5e94\u89d2\u8272\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"FE \u6269\u5bb9\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"Follower FE\uff08\u5305\u62ec Leader\uff09\u7684\u6570\u91cf\u5fc5\u987b\u4e3a\u5947\u6570\uff0c\u5efa\u8bae\u6700\u591a\u90e8\u7f72 3 \u4e2a\u7ec4\u6210\u9ad8\u53ef\u7528\uff08HA\uff09\u6a21\u5f0f\u5373\u53ef\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5f53 FE \u5904\u4e8e\u9ad8\u53ef\u7528\u90e8\u7f72\u65f6\uff081\u4e2a Leader\uff0c2\u4e2a Follower\uff09\uff0c\u6211\u4eec\u5efa\u8bae\u901a\u8fc7\u589e\u52a0 Observer FE \u6765\u6269\u5c55 FE \u7684\u8bfb\u670d\u52a1\u80fd\u529b\u3002\u5f53\u7136\u4e5f\u53ef\u4ee5\u7ee7\u7eed\u589e\u52a0 Follower FE\uff0c\u4f46\u51e0\u4e4e\u662f\u4e0d\u5fc5\u8981\u7684\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u901a\u5e38\u4e00\u4e2a FE \u8282\u70b9\u53ef\u4ee5\u5e94\u5bf9 10-20 \u53f0 BE \u8282\u70b9\u3002\u5efa\u8bae\u603b\u7684 FE \u8282\u70b9\u6570\u91cf\u5728 10 \u4e2a\u4ee5\u4e0b\u3002\u800c\u901a\u5e38 3 \u4e2a\u5373\u53ef\u6ee1\u8db3\u7edd\u5927\u90e8\u5206\u9700\u6c42\u3002"),(0,l.kt)("li",{parentName:"ol"},"helper \u4e0d\u80fd\u6307\u5411 FE \u81ea\u8eab\uff0c\u5fc5\u987b\u6307\u5411\u4e00\u4e2a\u6216\u591a\u4e2a\u5df2\u5b58\u5728\u5e76\u4e14\u6b63\u5e38\u8fd0\u884c\u4e2d\u7684 Master/Follower FE\u3002"))),(0,l.kt)("h3",{id:"\u5220\u9664-fe-\u8282\u70b9"},"\u5220\u9664 FE \u8282\u70b9"),(0,l.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u5bf9\u5e94\u7684 FE \u8282\u70b9\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM DROP FOLLOWER[OBSERVER] "fe_host:edit_log_port";')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"FE \u7f29\u5bb9\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"\u5220\u9664 Follower FE \u65f6\uff0c\u786e\u4fdd\u6700\u7ec8\u5269\u4f59\u7684 Follower\uff08\u5305\u62ec Leader\uff09\u8282\u70b9\u4e3a\u5947\u6570\u3002"))),(0,l.kt)("h2",{id:"be-\u6269\u5bb9\u548c\u7f29\u5bb9"},"BE \u6269\u5bb9\u548c\u7f29\u5bb9"),(0,l.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 mysql-client \u767b\u9646 Leader FE\u3002\u901a\u8fc7:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SHOW PROC '/backends';")),(0,l.kt)("p",null,"\u6765\u67e5\u770b\u5f53\u524d BE \u7684\u8282\u70b9\u60c5\u51b5\u3002"),(0,l.kt)("p",null,"\u4e5f\u53ef\u4ee5\u901a\u8fc7\u524d\u7aef\u9875\u9762\u8fde\u63a5\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"http://fe_hostname:fe_http_port/backend")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"http://fe_hostname:fe_http_port/system?path=//backends")," \u6765\u67e5\u770b BE \u8282\u70b9\u7684\u60c5\u51b5\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0a\u65b9\u5f0f\uff0c\u90fd\u9700\u8981 Doris \u7684 root \u7528\u6237\u6743\u9650\u3002"),(0,l.kt)("p",null,"BE \u8282\u70b9\u7684\u6269\u5bb9\u548c\u7f29\u5bb9\u8fc7\u7a0b\uff0c\u4e0d\u5f71\u54cd\u5f53\u524d\u7cfb\u7edf\u8fd0\u884c\u4ee5\u53ca\u6b63\u5728\u6267\u884c\u7684\u4efb\u52a1\uff0c\u5e76\u4e14\u4e0d\u4f1a\u5f71\u54cd\u5f53\u524d\u7cfb\u7edf\u7684\u6027\u80fd\u3002\u6570\u636e\u5747\u8861\u4f1a\u81ea\u52a8\u8fdb\u884c\u3002\u6839\u636e\u96c6\u7fa4\u73b0\u6709\u6570\u636e\u91cf\u7684\u5927\u5c0f\uff0c\u96c6\u7fa4\u4f1a\u5728\u51e0\u4e2a\u5c0f\u65f6\u52301\u5929\u4e0d\u7b49\u7684\u65f6\u95f4\u5185\uff0c\u6062\u590d\u5230\u8d1f\u8f7d\u5747\u8861\u7684\u72b6\u6001\u3002\u96c6\u7fa4\u8d1f\u8f7d\u60c5\u51b5\uff0c\u53ef\u4ee5\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"../../maint-monitor/tablet-repair-and-balance"},"Tablet \u8d1f\u8f7d\u5747\u8861\u6587\u6863"),"\u3002"),(0,l.kt)("h3",{id:"\u589e\u52a0-be-\u8282\u70b9"},"\u589e\u52a0 BE \u8282\u70b9"),(0,l.kt)("p",null,"BE \u8282\u70b9\u7684\u589e\u52a0\u65b9\u5f0f\u540c ",(0,l.kt)("strong",{parentName:"p"},"BE \u90e8\u7f72")," \u4e00\u8282\u4e2d\u7684\u65b9\u5f0f\uff0c\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER SYSTEM ADD BACKEND")," \u547d\u4ee4\u589e\u52a0 BE \u8282\u70b9\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"BE \u6269\u5bb9\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"BE \u6269\u5bb9\u540e\uff0cDoris \u4f1a\u81ea\u52a8\u6839\u636e\u8d1f\u8f7d\u60c5\u51b5\uff0c\u8fdb\u884c\u6570\u636e\u5747\u8861\uff0c\u671f\u95f4\u4e0d\u5f71\u54cd\u4f7f\u7528\u3002"))),(0,l.kt)("h3",{id:"\u5220\u9664-be-\u8282\u70b9"},"\u5220\u9664 BE \u8282\u70b9"),(0,l.kt)("p",null,"\u5220\u9664 BE \u8282\u70b9\u6709\u4e24\u79cd\u65b9\u5f0f\uff1aDROP \u548c DECOMMISSION"),(0,l.kt)("p",null,"DROP \u8bed\u53e5\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM DROP BACKEND "be_host:be_heartbeat_service_port";')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1aDROP BACKEND \u4f1a\u76f4\u63a5\u5220\u9664\u8be5 BE\uff0c\u5e76\u4e14\u5176\u4e0a\u7684\u6570\u636e\u5c06\u4e0d\u80fd\u518d\u6062\u590d\uff01\uff01\uff01\u6240\u4ee5\u6211\u4eec\u5f3a\u70c8\u4e0d\u63a8\u8350\u4f7f\u7528 DROP BACKEND \u8fd9\u79cd\u65b9\u5f0f\u5220\u9664 BE \u8282\u70b9\u3002\u5f53\u4f60\u4f7f\u7528\u8fd9\u4e2a\u8bed\u53e5\u65f6\uff0c\u4f1a\u6709\u5bf9\u5e94\u7684\u9632\u8bef\u64cd\u4f5c\u63d0\u793a\u3002")),(0,l.kt)("p",null,"DECOMMISSION \u8bed\u53e5\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM DECOMMISSION BACKEND "be_host:be_heartbeat_service_port";')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"DECOMMISSION \u547d\u4ee4\u8bf4\u660e\uff1a"),(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"\u8be5\u547d\u4ee4\u7528\u4e8e\u5b89\u5168\u5220\u9664 BE \u8282\u70b9\u3002\u547d\u4ee4\u4e0b\u53d1\u540e\uff0cDoris \u4f1a\u5c1d\u8bd5\u5c06\u8be5 BE \u4e0a\u7684\u6570\u636e\u5411\u5176\u4ed6 BE \u8282\u70b9\u8fc1\u79fb\uff0c\u5f53\u6240\u6709\u6570\u636e\u90fd\u8fc1\u79fb\u5b8c\u6210\u540e\uff0cDoris \u4f1a\u81ea\u52a8\u5220\u9664\u8be5\u8282\u70b9\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8be5\u547d\u4ee4\u662f\u4e00\u4e2a\u5f02\u6b65\u64cd\u4f5c\u3002\u6267\u884c\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"SHOW PROC '/backends';")," \u770b\u5230\u8be5 BE \u8282\u70b9\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"SystemDecommissioned")," \u72b6\u6001\u4e3a true\u3002\u8868\u793a\u8be5\u8282\u70b9\u6b63\u5728\u8fdb\u884c\u4e0b\u7ebf\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8be5\u547d\u4ee4",(0,l.kt)("strong",{parentName:"li"},"\u4e0d\u4e00\u5b9a\u6267\u884c\u6210\u529f"),"\u3002\u6bd4\u5982\u5269\u4f59 BE \u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\u4ee5\u5bb9\u7eb3\u4e0b\u7ebf BE \u4e0a\u7684\u6570\u636e\uff0c\u6216\u8005\u5269\u4f59\u673a\u5668\u6570\u91cf\u4e0d\u6ee1\u8db3\u6700\u5c0f\u526f\u672c\u6570\u65f6\uff0c\u8be5\u547d\u4ee4\u90fd\u65e0\u6cd5\u5b8c\u6210\uff0c\u5e76\u4e14 BE \u4f1a\u4e00\u76f4\u5904\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"SystemDecommissioned")," \u4e3a true \u7684\u72b6\u6001\u3002"),(0,l.kt)("li",{parentName:"ol"},"DECOMMISSION \u7684\u8fdb\u5ea6\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"SHOW PROC '/backends';")," \u4e2d\u7684 TabletNum \u67e5\u770b\uff0c\u5982\u679c\u6b63\u5728\u8fdb\u884c\uff0cTabletNum \u5c06\u4e0d\u65ad\u51cf\u5c11\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8be5\u64cd\u4f5c\u53ef\u4ee5\u901a\u8fc7:",(0,l.kt)("br",{parentName:"li"}),"",(0,l.kt)("inlineCode",{parentName:"li"},'CANCEL DECOMMISSION BACKEND "be_host:be_heartbeat_service_port";'),(0,l.kt)("br",{parentName:"li"}),"\u547d\u4ee4\u53d6\u6d88\u3002\u53d6\u6d88\u540e\uff0c\u8be5 BE \u4e0a\u7684\u6570\u636e\u5c06\u7ef4\u6301\u5f53\u524d\u5269\u4f59\u7684\u6570\u636e\u91cf\u3002\u540e\u7eed Doris \u91cd\u65b0\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5bf9\u4e8e\u591a\u79df\u6237\u90e8\u7f72\u73af\u5883\u4e0b\uff0cBE \u8282\u70b9\u7684\u6269\u5bb9\u548c\u7f29\u5bb9\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"strong",href:"../../multi-tenant"},"\u591a\u79df\u6237\u8bbe\u8ba1\u6587\u6863"),"\u3002")),(0,l.kt)("h2",{id:"broker-\u6269\u5bb9\u7f29\u5bb9"},"Broker \u6269\u5bb9\u7f29\u5bb9"),(0,l.kt)("p",null,"Broker \u5b9e\u4f8b\u7684\u6570\u91cf\u6ca1\u6709\u786c\u6027\u8981\u6c42\u3002\u901a\u5e38\u6bcf\u53f0\u7269\u7406\u673a\u90e8\u7f72\u4e00\u4e2a\u5373\u53ef\u3002Broker \u7684\u6dfb\u52a0\u548c\u5220\u9664\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5b8c\u6210\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM ADD BROKER broker_name "broker_host:broker_ipc_port";'),"\n",(0,l.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM DROP BROKER broker_name "broker_host:broker_ipc_port";'),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER SYSTEM DROP ALL BROKER broker_name;")),(0,l.kt)("p",null,"Broker \u662f\u65e0\u72b6\u6001\u7684\u8fdb\u7a0b\uff0c\u53ef\u4ee5\u968f\u610f\u542f\u505c\u3002\u5f53\u7136\uff0c\u505c\u6b62\u540e\uff0c\u6b63\u5728\u5176\u4e0a\u8fd0\u884c\u7684\u4f5c\u4e1a\u4f1a\u5931\u8d25\uff0c\u91cd\u8bd5\u5373\u53ef\u3002"))}k.isMDXComponent=!0}}]);