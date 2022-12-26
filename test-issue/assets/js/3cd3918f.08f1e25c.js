"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[62024],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,d=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return n?a.createElement(d,o(o({ref:t},f),{},{components:n})):a.createElement(d,o({ref:t},f))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={title:"get_log_file",language:"en"},o=void 0,i={unversionedId:"admin-manual/http-actions/fe-get-log-file",id:"admin-manual/http-actions/fe-get-log-file",title:"get_log_file",description:"\x3c!--",source:"@site/docs/admin-manual/http-actions/fe-get-log-file.md",sourceDirName:"admin-manual/http-actions",slug:"/admin-manual/http-actions/fe-get-log-file",permalink:"/docs/admin-manual/http-actions/fe-get-log-file",draft:!1,tags:[],version:"current",frontMatter:{title:"get_log_file",language:"en"},sidebar:"docs",previous:{title:"CONNECTION",permalink:"/docs/admin-manual/http-actions/connection-action"},next:{title:"GET LABEL STATE",permalink:"/docs/admin-manual/http-actions/get-load-state"}},p={},c=[{value:"Types of FE log",id:"types-of-fe-log",level:2},{value:"Example",id:"example",level:2},{value:"Notification",id:"notification",level:2}],f={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get_log_file"},"get","_","log","_","file"),(0,r.kt)("p",null,"To get FE log via HTTP"),(0,r.kt)("h2",{id:"types-of-fe-log"},"Types of FE log"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"fe.audit.log (Audit log)"),(0,r.kt)("p",{parentName:"li"},"The audit log records the all statements executed. Audit log's name format as follow:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"fe.audit.log                # The latest audit log\nfe.audit.log.20190603.1     # The historical audit log. The smaller the sequence number, the newer the log.\nfe.audit.log.20190603.2\nfe.audit.log.20190602.1\n...\n")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get the list of specified type of logs"),(0,r.kt)("p",{parentName:"li"},"Example"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"curl -v -X HEAD -uuser:passwd http://fe_host:http_port/api/get_log_file?type=fe.audit.log")),(0,r.kt)("p",{parentName:"li"},"Returns:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nfile_infos: {"fe.audit.log":24759,"fe.audit.log.20190528.1":132934}\ncontent-type: text/html\nconnection: keep-alive\n')),(0,r.kt)("p",{parentName:"li"},"In the header of result, the ",(0,r.kt)("inlineCode",{parentName:"p"},"file_infos")," section saves the file list and file size in JSON format.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download files"),(0,r.kt)("p",{parentName:"li"},"Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"curl -X GET -uuser:passwd http://fe_host:http_port/api/get_log_file?type=fe.audit.log\\&file=fe.audit.log.20190528.1\n")))),(0,r.kt)("h2",{id:"notification"},"Notification"),(0,r.kt)("p",null,"Need ADMIN privilege."))}u.isMDXComponent=!0}}]);