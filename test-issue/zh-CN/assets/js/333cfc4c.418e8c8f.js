"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[29570],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>g});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return r?t.createElement(g,l(l({ref:n},p),{},{components:r})):t.createElement(g,l({ref:n},p))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9645:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=r(87462),a=(r(67294),r(3905));const o={title:"\u7f16\u8bd1\u4e0e\u90e8\u7f72",language:"zh-CN"},l=void 0,i={unversionedId:"ecosystem/doris-manager/compiling-deploying",id:"version-dev/ecosystem/doris-manager/compiling-deploying",title:"\u7f16\u8bd1\u4e0e\u90e8\u7f72",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/ecosystem/doris-manager/compiling-deploying.md",sourceDirName:"ecosystem/doris-manager",slug:"/ecosystem/doris-manager/compiling-deploying",permalink:"/zh-CN/docs/dev/ecosystem/doris-manager/compiling-deploying",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/ecosystem/doris-manager/compiling-deploying.md",tags:[],version:"dev",frontMatter:{title:"\u7f16\u8bd1\u4e0e\u90e8\u7f72",language:"zh-CN"},sidebar:"docs",previous:{title:"CloudCanal \u6570\u636e\u5bfc\u5165",permalink:"/zh-CN/docs/dev/ecosystem/cloudcanal"},next:{title:"\u521d\u59cb\u5316",permalink:"/zh-CN/docs/dev/ecosystem/doris-manager/initializing"}},s={},c=[{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",level:2},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:2},{value:"1 \u914d\u7f6e",id:"1-\u914d\u7f6e",level:3},{value:"2 \u542f\u52a8",id:"2-\u542f\u52a8",level:3},{value:"3 \u4f7f\u7528",id:"3-\u4f7f\u7528",level:3}],p={toc:c};function d(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7f16\u8bd1\u4e0e\u90e8\u7f72"},"\u7f16\u8bd1\u4e0e\u90e8\u7f72"),(0,a.kt)("h2",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,a.kt)("p",null,"\u76f4\u63a5\u5728manager\u8def\u5f84\u4e0b\u7684build.sh\u811a\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd incubator-doris-manager\nsh build.sh\n")),(0,a.kt)("p",null,"\u7f16\u8bd1\u5b8c\u6210\u540e\u4f1a\u5728manager\u8def\u5f84\u4e0b\u751f\u6210\u5b89\u88c5\u5305output\u76ee\u5f55\uff0c\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 agent  //agent \u76ee\u5f55\n\u2502   \u251c\u2500\u2500 bin\n\u2502   \u2502   \u251c\u2500\u2500 agent_start.sh\n\u2502   \u2502   \u251c\u2500\u2500 agent_stop.sh\n\u2502   \u2502   \u2514\u2500\u2500 download_doris.sh\n\u2502   \u251c\u2500\u2500 config\n\u2502   \u2502   \u2514\u2500\u2500 application.properties\n\u2502   \u2514\u2500\u2500 lib\n\u2502       \u2514\u2500\u2500 dm-agent.jar\n\u2514\u2500\u2500 server  //server \u76ee\u5f55\n    \u251c\u2500\u2500 bin\n    \u2502   \u251c\u2500\u2500 start_manager.sh   //Doris Manager\u542f\u52a8\u811a\u672c\n    \u2502   \u2514\u2500\u2500 stop_manager.sh    //Doris Manager\u505c\u6b62\u811a\u672c\n    \u251c\u2500\u2500 conf\n    \u2502   \u2514\u2500\u2500 manager.conf       //Doris Manager\u914d\u7f6e\u6587\u4ef6\n    \u251c\u2500\u2500 lib\n    \u2502   \u2514\u2500\u2500 doris-manager.jar  //Doris Manager\u7684\u8fd0\u884c\u5305doris-manager.jar\n    \u2514\u2500\u2500 web-resource         \n")),(0,a.kt)("h2",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),(0,a.kt)("h3",{id:"1-\u914d\u7f6e"},"1 \u914d\u7f6e"),(0,a.kt)("p",null,"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"server/conf/manager.conf"),"\uff0c\u91cd\u70b9\u5173\u6ce8\u7684\u914d\u7f6e\u9879\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-$xslt"},"\u670d\u52a1\u7684\u542f\u52a8http\u7aef\u53e3\nSTUDIO_PORT=8080\n\n\u540e\u7aef\u6570\u636e\u5b58\u653e\u7684\u6570\u636e\u5e93\u7684\u7c7b\u578b\uff0c\u5305\u62ecmysql/h2/postgresql.\u9ed8\u8ba4\u662f\u652f\u6301mysql\nMB_DB_TYPE=mysql\n\n\u6570\u636e\u5e93\u8fde\u63a5\u4fe1\u606f\n\u5982\u679c\u662f\u914d\u7f6e\u7684h2\u7c7b\u578b\u6570\u636e\u5e93\uff0c\u5c31\u4e0d\u9700\u8981\u914d\u7f6e\u8fd9\u4e9b\u4fe1\u606f\uff0c\u4f1a\u628a\u6570\u636e\u4ee5\u672c\u5730\u6587\u4ef6\u5b58\u653e\u5728\u672c\u5730\nh2\u6570\u636e\u6587\u4ef6\u5b58\u653e\u8def\u5f84\uff0c\u9ed8\u8ba4\u76f4\u63a5\u5b58\u653e\u5728\u5f53\u524d\u8def\u5f84\nH2_FILE_PATH=\n\n\u5982\u679c\u662fmysql/postgresql\u5c31\u9700\u8981\u914d\u7f6e\u5982\u4e0b\u8fde\u63a5\u4fe1\u606f\n\u6570\u636e\u5e93\u5730\u5740\nMB_DB_HOST=\n\n\u6570\u636e\u5e93\u7aef\u53e3\nMB_DB_PORT=3306\n\n\u6570\u636e\u5e93\u8bbf\u95ee\u7aef\u53e3\nMB_DB_USER=\n\n\u6570\u636e\u5e93\u8bbf\u95ee\u5bc6\u7801\nMB_DB_PASS=\n\n\u6570\u636e\u5e93\u7684database\u540d\u79f0\nMB_DB_DBNAME=\n\n\u670d\u52a1\u8fd0\u884c\u7684\u8def\u5f84\uff0c\u9ed8\u8ba4\u76f4\u63a5\u5b58\u653e\u5728\u5f53\u524d\u8fd0\u884c\u8def\u5f84\u7684log\u6587\u4ef6\u5939\u4e2d\nLOG_PATH=\n\nweb\u5bb9\u5668\u7684\u7b49\u5f85\u961f\u5217\u957f\u5ea6\uff0c\u9ed8\u8ba4100\u3002\u961f\u5217\u4e5f\u505a\u7f13\u51b2\u6c60\u7528\uff0c\u4f46\u4e5f\u4e0d\u80fd\u65e0\u9650\u957f\uff0c\u4e0d\u4f46\u6d88\u8017\u5185\u5b58\uff0c\u800c\u4e14\u51fa\u961f\u5165\u961f\u4e5f\u6d88\u8017CPU\nWEB_ACCEPT_COUNT=100\n\nWeb\u5bb9\u5668\u7684\u6700\u5927\u5de5\u4f5c\u7ebf\u7a0b\u6570\uff0c\u9ed8\u8ba4200\u3002\uff08\u4e00\u822c\u662fCPU\u6838\u6570*200\uff09\nWEB_MAX_THREADS=200\n\nWeb\u5bb9\u5668\u7684\u6700\u5c0f\u5de5\u4f5c\u7a7a\u95f2\u7ebf\u7a0b\u6570\uff0c\u9ed8\u8ba410\u3002\uff08\u9002\u5f53\u589e\u5927\u4e00\u4e9b\uff0c\u4ee5\u4fbf\u5e94\u5bf9\u7a81\u7136\u589e\u957f\u7684\u8bbf\u95ee\u91cf\uff09\nWEB_MIN_SPARE_THREADS=10\n\nWeb\u5bb9\u5668\u7684\u6700\u5927\u8fde\u63a5\u6570\uff0c\u9ed8\u8ba410000\u3002\uff08\u9002\u5f53\u589e\u5927\u4e00\u4e9b\uff0c\u4ee5\u4fbf\u5e94\u5bf9\u7a81\u7136\u589e\u957f\u7684\u8bbf\u95ee\u91cf\uff09\nWEB_MAX_CONNECTIONS=10000\n\n\u8bbf\u95ee\u6570\u636e\u5e93\u8fde\u63a5\u6c60\u6700\u5927\u8fde\u63a5\u6570\u91cf\uff0c\u9ed8\u8ba4\u4e3a10\nDB_MAX_POOL_SIZE=20\n\n\u8bbf\u95ee\u6570\u636e\u5e93\u8fde\u63a5\u6c60\u6700\u5c0f\u7a7a\u95f2\u8fde\u63a5\u6570\uff0c\u9ed8\u8ba4\u4e3a10\nDB_MIN_IDLE=10\n")),(0,a.kt)("h3",{id:"2-\u542f\u52a8"},"2 \u542f\u52a8"),(0,a.kt)("p",null,"\u914d\u7f6e\u4fee\u6539\u5b8c\u6210\u540e\uff0c\u542f\u52a8doris manger"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-$xslt"},"cd server\nsh bin/start_manager.sh\n")),(0,a.kt)("p",null,"\u67e5\u770blogs\u4e2d\u7684\u65e5\u5fd7\u5373\u53ef\u5224\u65ad\u7a0b\u5e8f\u662f\u5426\u542f\u52a8\u6210\u529f"),(0,a.kt)("h3",{id:"3-\u4f7f\u7528"},"3 \u4f7f\u7528"),(0,a.kt)("p",null,"Doris Manager\u9884\u8bbe\u4e86\u4e00\u4e2a\u8d85\u7ea7\u7ba1\u7406\u5458\u7528\u6237\uff0c\u4fe1\u606f\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-$xslt"},"\u7528\u6237\u540d: Admin\n\u5bc6\u7801: Admin@123\n")),(0,a.kt)("p",null,"\u4e3a\u786e\u4fdd\u4f7f\u7528\u5b89\u5168\uff0c\u767b\u9646\u540e\u8bf7\u4fee\u6539\u5bc6\u7801\uff01"))}d.isMDXComponent=!0}}]);