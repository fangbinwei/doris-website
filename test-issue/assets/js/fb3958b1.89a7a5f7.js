"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[92997],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(a),h=n,f=u["".concat(p,".").concat(h)]||u[h]||m[h]||o;return a?r.createElement(f,l(l({ref:t},c),{},{components:a})):r.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},87270:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={title:"Apache Doris announced the official release of version 1.1.4",summary:"Dear community, we are pleased to announce that we have officially released Apache Doris 1.1.4 on November 11, 2022! This release is a hotfix version of 1.1.3",date:"2022-11-11",author:"Apache Doris",tags:["Release Notes"]},l=void 0,i={permalink:"/blog/release-1.1.4",source:"@site/blog/release-1.1.4.md",title:"Apache Doris announced the official release of version 1.1.4",description:"\x3c!--",date:"2022-11-11T00:00:00.000Z",formattedDate:"November 11, 2022",tags:[{label:"Release Notes",permalink:"/blog/tags/release-notes"}],truncated:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris announced the official release of version 1.1.4",summary:"Dear community, we are pleased to announce that we have officially released Apache Doris 1.1.4 on November 11, 2022! This release is a hotfix version of 1.1.3",date:"2022-11-11",author:"Apache Doris",tags:["Release Notes"]},prevItem:{title:"Apache Doris 1.2 TPC-H Performance Test Report",permalink:"/blog/tpch"},nextItem:{title:"Apache Doris announced the official release of version 1.1.3",permalink:"/blog/release-1.1.3"}},p={authorsImageUrls:[void 0]},s=[],c={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this release, Doris Team has fixed about 60 issues or performance improvement since 1.1.3. This release is a bugfix release on 1.1 and all users are encouraged to upgrade to this release."),(0,n.kt)("h1",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Support obs broker load for Huawei Cloud. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13523"},"#13523"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SparkLoad support parquet and orc file.",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13438"},"#13438")))),(0,n.kt)("h1",{id:"improvements"},"Improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Do not acquire mutex in metric hook since it will affect query performance during heavy load.",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/10941"},"#10941"))),(0,n.kt)("h1",{id:"bugfix"},"BugFix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The where condition does not take effect when spark load loads the file. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13804"},"#13804"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If function return error result when there is nullable column in vectorized mode. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13779"},"#13779"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fix incorrect result when using anti join with other join predicates. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13743"},"#13743"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"BE crash when call function concat(ifnull). ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13693"},"#13693"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fix planner bug when there is a function in group by clause. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13613"},"#13613"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Table name and column name is not recognized correctly in lateral view clause. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13600"},"#13600"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Unknown column when use MV and table alias. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13605"},"#13605"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"JSONReader release memory of both value and parse allocator. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13513"},"#13513"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fix allow create mv using to_bitmap() on negative value columns when enable_vectorized_alter_table is true. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13448"},"#13448"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Microsecond in function from_date_format_str is lost. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13446"},"#13446"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Sort exprs nullability property may not be right after subsitute using child's smap info. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13328"},"#13328"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fix core dump on case when have 1000 condition. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13315"},"#13315"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fix bug that last line of data lost for stream load. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13066"},"#13066"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Restore table or partition with the same replication num as before the backup. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11942"},"#11942")))))}u.isMDXComponent=!0}}]);