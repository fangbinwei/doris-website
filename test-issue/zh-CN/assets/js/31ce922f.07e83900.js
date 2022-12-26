"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[74197],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Get Load Info Action",language:"zh-CN"},l=void 0,i={unversionedId:"administrator-guide/http-actions/fe/get-load-info-action",id:"version-0.15/administrator-guide/http-actions/fe/get-load-info-action",title:"Get Load Info Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/administrator-guide/http-actions/fe/get-load-info-action.md",sourceDirName:"administrator-guide/http-actions/fe",slug:"/administrator-guide/http-actions/fe/get-load-info-action",permalink:"/zh-CN/docs/0.15/administrator-guide/http-actions/fe/get-load-info-action",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Get Load Info Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Get DDL Statement Action",permalink:"/zh-CN/docs/0.15/administrator-guide/http-actions/fe/get-ddl-stmt-action"},next:{title:"Get Load State",permalink:"/zh-CN/docs/0.15/administrator-guide/http-actions/fe/get-load-state"}},s={},p=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-load-info-action"},"Get Load Info Action"),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/<db>/_load_info")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6\u6307\u5b9alabel\u7684\u5bfc\u5165\u4f5c\u4e1a\u7684\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"<db>")),(0,a.kt)("p",{parentName:"li"},"  \u6307\u5b9a\u6570\u636e\u5e93"))),(0,a.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"label")),(0,a.kt)("p",{parentName:"li"},"  \u6307\u5b9a\u5bfc\u5165Label"))),(0,a.kt)("h2",{id:"request-body"},"Request body"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "dbName": "default_cluster:db1",\n        "tblNames": ["tbl1"],\n        "label": "my_label",\n        "clusterName": "default_cluster",\n        "state": "FINISHED",\n        "failMsg": "",\n        "trackingUrl": ""\n    },\n    "count": 0\n}\n')),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u83b7\u53d6\u6307\u5b9a label \u7684\u5bfc\u5165\u4f5c\u4e1a\u4fe1\u606f"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'GET /api/example_db/_load_info?label=my_label\n\nResponse\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "dbName": "default_cluster:db1",\n        "tblNames": ["tbl1"],\n        "label": "my_label",\n        "clusterName": "default_cluster",\n        "state": "FINISHED",\n        "failMsg": "",\n        "trackingUrl": ""\n    },\n    "count": 0\n}\n')))))}u.isMDXComponent=!0}}]);