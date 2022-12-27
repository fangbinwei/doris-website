"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[53026],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8958:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"Data import things and atomicity",language:"en"},o=void 0,s={unversionedId:"data-operate/import/import-scenes/load-atomicity",id:"version-dev/data-operate/import/import-scenes/load-atomicity",title:"Data import things and atomicity",description:"\x3c!--",source:"@site/versioned_docs/version-dev/data-operate/import/import-scenes/load-atomicity.md",sourceDirName:"data-operate/import/import-scenes",slug:"/data-operate/import/import-scenes/load-atomicity",permalink:"/docs/dev/data-operate/import/import-scenes/load-atomicity",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/data-operate/import/import-scenes/load-atomicity.md",tags:[],version:"dev",frontMatter:{title:"Data import things and atomicity",language:"en"},sidebar:"docs",previous:{title:"Synchronize data using Insert method",permalink:"/docs/dev/data-operate/import/import-scenes/jdbc-load"},next:{title:"Data transformation, column mapping and filtering",permalink:"/docs/dev/data-operate/import/import-scenes/load-data-convert"}},l={},c=[{value:"Label mechanism",id:"label-mechanism",level:2},{value:"Best Practices",id:"best-practices",level:2}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-import-things-and-atomicity"},"Data import things and atomicity"),(0,r.kt)("p",null,"All import operations in Doris have atomicity guarantees, that is, the data in an import job either all succeed or all fail. It will not happen that only part of the data is imported successfully."),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD"},"BROKER LOAD")," we can also implement atomic import of multiple tables ."),(0,r.kt)("p",null,"For the ",(0,r.kt)("a",{parentName:"p",href:"/docs/dev/advanced/materialized-view"},"materialized view")," attached to the table, atomicity and consistency with the base table are also guaranteed."),(0,r.kt)("h2",{id:"label-mechanism"},"Label mechanism"),(0,r.kt)("p",null,"Doris's import job can set a Label. This Label is usually a user-defined string with certain business logic attributes."),(0,r.kt)("p",null,"The main function of Label is to uniquely identify an import task, and to ensure that the same Label will only be successfully imported once."),(0,r.kt)("p",null,"The Label mechanism can ensure that the imported data is not lost or heavy. If the upstream data source can guarantee the At-Least-Once semantics, with the Doris Label mechanism, the Exactly-Once semantics can be guaranteed."),(0,r.kt)("p",null,"Label is unique under a database. The retention period for labels is 3 days by default. That is, after 3 days, the completed Label will be automatically cleaned up, and then the Label can be reused."),(0,r.kt)("h2",{id:"best-practices"},"Best Practices"),(0,r.kt)("p",null,"Labels are usually formatted as ",(0,r.kt)("inlineCode",{parentName:"p"},"business logic + time"),". Such as ",(0,r.kt)("inlineCode",{parentName:"p"},"my_business1_20220330_125000"),"."),(0,r.kt)("p",null,"This Label is usually used to represent: a batch of data generated by the business ",(0,r.kt)("inlineCode",{parentName:"p"},"my_business1")," at ",(0,r.kt)("inlineCode",{parentName:"p"},"2022-03-30 12:50:00"),". Through this Label setting, the business can query the import task status through the Label to clearly know whether the batch data has been imported successfully at this point in time. If unsuccessful, you can continue to retry the import using this Label"))}m.isMDXComponent=!0}}]);