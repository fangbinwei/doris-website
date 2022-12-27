"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[13939],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||r;return n?i.createElement(f,o(o({ref:t},m),{},{components:n})):i.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={title:"Time zone",language:"en"},o=void 0,l={unversionedId:"administrator-guide/time-zone",id:"version-0.15/administrator-guide/time-zone",title:"Time zone",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/administrator-guide/time-zone.md",sourceDirName:"administrator-guide",slug:"/administrator-guide/time-zone",permalink:"/docs/0.15/administrator-guide/time-zone",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Time zone",language:"en"},sidebar:"docs",previous:{title:"SQL MODE",permalink:"/docs/0.15/administrator-guide/sql-mode"},next:{title:"Variable",permalink:"/docs/0.15/administrator-guide/variables"}},s={},p=[{value:"Noun Interpretation",id:"noun-interpretation",level:2},{value:"Basic concepts",id:"basic-concepts",level:2},{value:"Specific operations",id:"specific-operations",level:2},{value:"Impact of time zone",id:"impact-of-time-zone",level:3},{value:"Restrictions",id:"restrictions",level:2},{value:"Time zone format list",id:"time-zone-format-list",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"time-zone"},"Time zone"),(0,a.kt)("p",null,"Doris supports multiple time zone settings"),(0,a.kt)("h2",{id:"noun-interpretation"},"Noun Interpretation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"FE: Frontend, the front-end node of Doris. Responsible for metadata management and request access."),(0,a.kt)("li",{parentName:"ul"},"BE: Backend, Doris's back-end node. Responsible for query execution and data storage.")),(0,a.kt)("h2",{id:"basic-concepts"},"Basic concepts"),(0,a.kt)("p",null,"There are multiple time zone related parameters in Doris"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"system_time_zone"),":")),(0,a.kt)("p",null,"When the server starts, it will be set automatically according to the time zone set by the machine, which cannot be modified after setting."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"time_zone"),":")),(0,a.kt)("p",null,"Server current time zone, set it at session level or global level."),(0,a.kt)("h2",{id:"specific-operations"},"Specific operations"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SHOW VARIABLES LIKE '% time_zone%'")),(0,a.kt)("p",{parentName:"li"},"View the current time zone related configuration")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SET time_zone = 'Asia/Shanghai'")),(0,a.kt)("p",{parentName:"li"},"This command can set the session level time zone, which will fail after disconnection.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SET global time_zone = 'Asia/Shanghai'")),(0,a.kt)("p",{parentName:"li"},"This command can set time zone parameters at the global level. The FE will persist the parameters and will not fail when the connection is disconnected."))),(0,a.kt)("h3",{id:"impact-of-time-zone"},"Impact of time zone"),(0,a.kt)("p",null,"Time zone setting affects the display and storage of time zone sensitive values."),(0,a.kt)("p",null,"It includes the values displayed by time functions such as ",(0,a.kt)("inlineCode",{parentName:"p"},"NOW()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"CURTIME()"),", as well as the time values in ",(0,a.kt)("inlineCode",{parentName:"p"},"SHOW LOAD")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"SHOW BACKENDS")," statements."),(0,a.kt)("p",null,"However, it does not affect the ",(0,a.kt)("inlineCode",{parentName:"p"},"LESS THAN VALUE")," of the time-type partition column in the ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," statement, nor does it affect the display of values stored as ",(0,a.kt)("inlineCode",{parentName:"p"},"DATE/DATETIME")," type."),(0,a.kt)("p",null,"Functions affected by time zone:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"FROM_UNIXTIME"),": Given a UTC timestamp, return the date and time of the specified time zone, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"FROM_UNIXTIME(0)"),", return the CST time zone: ",(0,a.kt)("inlineCode",{parentName:"p"},"1970-01-08:00"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"UNIX_TIMESTAMP"),": Given a specified time zone date and time, return UTC timestamp, such as CST time zone ",(0,a.kt)("inlineCode",{parentName:"p"},"UNIX_TIMESTAMP('1970-01 08:00:00')"),", return ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"CURTIME"),": Returns the datetime of specified time zone.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"NOW"),": Returns the specified date and time of specified time zone.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"CONVERT_TZ"),": Converts a date and time from one specified time zone to another."))),(0,a.kt)("h2",{id:"restrictions"},"Restrictions"),(0,a.kt)("p",null,"Time zone values can be given in several formats, case-insensitive:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A string representing UTC offset, such as '+10:00' or '-6:00'.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Standard time zone formats, such as "Asia/Shanghai", "America/Los_Angeles"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Abbreviated time zone formats such as MET and CTT are not supported. Because the abbreviated time zone is ambiguous in different scenarios, it is not recommended to use it.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'In order to be compatible with Doris and support CST abbreviated time zone, CST will be internally transferred to "Asia/Shanghai", which is Chinese standard time zone.'))),(0,a.kt)("h2",{id:"time-zone-format-list"},"Time zone format list"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},"List of TZ database time zones")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/blob/master/docs/documentation/en/administrator-guide/time-zone_EN.md"},"Edit on GitHub")))}c.isMDXComponent=!0}}]);