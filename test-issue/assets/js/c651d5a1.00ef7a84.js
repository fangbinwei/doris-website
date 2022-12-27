"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[40379],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=i(n),f=r,u=m["".concat(c,".").concat(f)]||m[f]||p[f]||s;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var i=2;i<s;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},57406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const s={title:"rowsets",language:"en"},o=void 0,l={unversionedId:"admin-manual/system-table/rowsets",id:"version-dev/admin-manual/system-table/rowsets",title:"rowsets",description:"\x3c!--",source:"@site/versioned_docs/version-dev/admin-manual/system-table/rowsets.md",sourceDirName:"admin-manual/system-table",slug:"/admin-manual/system-table/rowsets",permalink:"/docs/dev/admin-manual/system-table/rowsets",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/admin-manual/system-table/rowsets.md",tags:[],version:"dev",frontMatter:{title:"rowsets",language:"en"},sidebar:"docs",previous:{title:"backends",permalink:"/docs/dev/admin-manual/system-table/backends"},next:{title:"Multi-tenancy",permalink:"/docs/dev/admin-manual/multi-tenant"}},c={},i=[{value:"rowsets",id:"rowsets",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"KeyWords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],d={toc:i};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"rowsets"},"rowsets"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"rowsets"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rowsets")," is a built-in system table of doris, which is stored under the information_schema database. You can view the current rowsets information of each ",(0,r.kt)("inlineCode",{parentName:"p"},"BE")," through the ",(0,r.kt)("inlineCode",{parentName:"p"},"rowsets")," system table."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"rowsets")," table schema is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"MySQL [(none)]> desc information_schema.rowsets;\n+------------------------+------------+------+-------+---------+-------+\n| Field                  | Type       | Null | Key   | Default | Extra |\n+------------------------+------------+------+-------+---------+-------+\n| BACKEND_ID             | BIGINT     | Yes  | false | NULL    |       |\n| ROWSET_ID              | VARCHAR(*) | Yes  | false | NULL    |       |\n| TABLET_ID              | BIGINT     | Yes  | false | NULL    |       |\n| ROWSET_NUM_ROWS        | BIGINT     | Yes  | false | NULL    |       |\n| TXN_ID                 | BIGINT     | Yes  | false | NULL    |       |\n| NUM_SEGMENTS           | BIGINT     | Yes  | false | NULL    |       |\n| START_VERSION          | BIGINT     | Yes  | false | NULL    |       |\n| END_VERSION            | BIGINT     | Yes  | false | NULL    |       |\n| INDEX_DISK_SIZE        | BIGINT     | Yes  | false | NULL    |       |\n| DATA_DISK_SIZE         | BIGINT     | Yes  | false | NULL    |       |\n| CREATION_TIME          | BIGINT     | Yes  | false | NULL    |       |\n| OLDEST_WRITE_TIMESTAMP | BIGINT     | Yes  | false | NULL    |       |\n| NEWEST_WRITE_TIMESTAMP | BIGINT     | Yes  | false | NULL    |       |\n+------------------------+------------+------+-------+---------+-------+\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from information_schema.rowsets where BACKEND_ID = 10004 limit 10;\n+------------+--------------------------------------------------+-----------+-----------------+--------+--------------+---------------+-------------+-----------------+----------------+---------------+------------------------+------------------------+\n| BACKEND_ID | ROWSET_ID                                        | TABLET_ID | ROWSET_NUM_ROWS | TXN_ID | NUM_SEGMENTS | START_VERSION | END_VERSION | INDEX_DISK_SIZE | DATA_DISK_SIZE | CREATION_TIME | OLDEST_WRITE_TIMESTAMP | NEWEST_WRITE_TIMESTAMP |\n+------------+--------------------------------------------------+-----------+-----------------+--------+--------------+---------------+-------------+-----------------+----------------+---------------+------------------------+------------------------+\n|      10004 | 02000000000000994847fbd41a42297d7c7a57d3bcb46f8c |     10771 |           66850 |      6 |            1 |             3 |           3 |            2894 |         688855 |    1659964582 |             1659964581 |             1659964581 |\n|      10004 | 020000000000008d4847fbd41a42297d7c7a57d3bcb46f8c |     10771 |           66850 |      2 |            1 |             2 |           2 |            2894 |         688855 |    1659964575 |             1659964574 |             1659964574 |\n|      10004 | 02000000000000894847fbd41a42297d7c7a57d3bcb46f8c |     10771 |               0 |      0 |            0 |             0 |           1 |               0 |              0 |    1659964567 |             1659964567 |             1659964567 |\n|      10004 | 020000000000009a4847fbd41a42297d7c7a57d3bcb46f8c |     10773 |           66639 |      6 |            1 |             3 |           3 |            2897 |         686828 |    1659964582 |             1659964581 |             1659964581 |\n|      10004 | 020000000000008e4847fbd41a42297d7c7a57d3bcb46f8c |     10773 |           66639 |      2 |            1 |             2 |           2 |            2897 |         686828 |    1659964575 |             1659964574 |             1659964574 |\n|      10004 | 02000000000000884847fbd41a42297d7c7a57d3bcb46f8c |     10773 |               0 |      0 |            0 |             0 |           1 |               0 |              0 |    1659964567 |             1659964567 |             1659964567 |\n|      10004 | 02000000000000984847fbd41a42297d7c7a57d3bcb46f8c |     10757 |           66413 |      6 |            1 |             3 |           3 |            2893 |         685381 |    1659964582 |             1659964581 |             1659964581 |\n|      10004 | 020000000000008c4847fbd41a42297d7c7a57d3bcb46f8c |     10757 |           66413 |      2 |            1 |             2 |           2 |            2893 |         685381 |    1659964575 |             1659964574 |             1659964574 |\n|      10004 | 02000000000000874847fbd41a42297d7c7a57d3bcb46f8c |     10757 |               0 |      0 |            0 |             0 |           1 |               0 |              0 |    1659964567 |             1659964567 |             1659964567 |\n|      10004 | 020000000000009c4847fbd41a42297d7c7a57d3bcb46f8c |     10739 |            1698 |      8 |            1 |             3 |           3 |             454 |          86126 |    1659964582 |             1659964582 |             1659964582 |\n+------------+--------------------------------------------------+-----------+-----------------+--------+--------------+---------------+-------------+-----------------+----------------+---------------+------------------------+------------------------+\n")),(0,r.kt)("h3",{id:"keywords"},"KeyWords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rowsets, information_schema\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);