"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[76024],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>S});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,S=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(S,l(l({ref:t},c),{},{components:a})):n.createElement(S,l({ref:t},c))}));function S(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},37595:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"S3 Load",language:"en"},l=void 0,i={unversionedId:"data-operate/import/import-way/s3-load-manual",id:"version-dev/data-operate/import/import-way/s3-load-manual",title:"S3 Load",description:"\x3c!--",source:"@site/versioned_docs/version-dev/data-operate/import/import-way/s3-load-manual.md",sourceDirName:"data-operate/import/import-way",slug:"/data-operate/import/import-way/s3-load-manual",permalink:"/docs/dev/data-operate/import/import-way/s3-load-manual",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/data-operate/import/import-way/s3-load-manual.md",tags:[],version:"dev",frontMatter:{title:"S3 Load",language:"en"},sidebar:"docs",previous:{title:"Stream load",permalink:"/docs/dev/data-operate/import/import-way/stream-load-manual"},next:{title:"Insert Into",permalink:"/docs/dev/data-operate/import/import-way/insert-into-manual"}},s={},p=[{value:"Applicable scenarios",id:"applicable-scenarios",level:2},{value:"Preparing",id:"preparing",level:2},{value:"Start Loading",id:"start-loading",level:2},{value:"FAQ",id:"faq",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"s3-load"},"S3 Load"),(0,r.kt)("p",null,"Starting from version 0.14, Doris supports the direct import of data from online storage systems that support the S3 protocol through the S3 protocol."),(0,r.kt)("p",null,"This document mainly introduces how to import data stored in AWS S3. It also supports the import of other object storage systems that support the S3 protocol, such as Baidu Cloud\u2019s BOS, Alibaba Cloud\u2019s OSS and Tencent Cloud\u2019s COS, etc."),(0,r.kt)("h2",{id:"applicable-scenarios"},"Applicable scenarios"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Source data in S3 protocol accessible storage systems, such as S3, BOS."),(0,r.kt)("li",{parentName:"ul"},"Data volumes range from tens to hundreds of GB.")),(0,r.kt)("h2",{id:"preparing"},"Preparing"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Standard AK and SK First, you need to find or regenerate AWS ",(0,r.kt)("inlineCode",{parentName:"li"},"Access keys"),", you can find the generation method in ",(0,r.kt)("inlineCode",{parentName:"li"},"My Security Credentials")," of AWS console, as shown in the following figure: ",(0,r.kt)("a",{parentName:"li",href:"https://doris.apache.org/images/aws_ak_sk.png"},"AK_SK")," Select ",(0,r.kt)("inlineCode",{parentName:"li"},"Create New Access Key")," and pay attention to save and generate AK and SK."),(0,r.kt)("li",{parentName:"ol"},"Prepare REGION and ENDPOINT REGION can be selected when creating the bucket or can be viewed in the bucket list. ENDPOINT can be found through REGION on the following page ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_region"},"AWS Documentation"))),(0,r.kt)("p",null,"Other cloud storage systems can find relevant information compatible with S3 in corresponding documents"),(0,r.kt)("h2",{id:"start-loading"},"Start Loading"),(0,r.kt)("p",null,"Like Broker Load just replace ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH BROKER broker_name ()")," with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'    WITH S3\n    (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION"\n    )\n')),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'    LOAD LABEL example_db.exmpale_label_1\n    (\n        DATA INFILE("s3://your_bucket_name/your_file.txt")\n        INTO TABLE load_test\n        COLUMNS TERMINATED BY ","\n    )\n    WITH S3\n    (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION"\n    )\n    PROPERTIES\n    (\n        "timeout" = "3600"\n    );\n')),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"S3 SDK uses virtual-hosted style by default. However, some object storage systems may not be enabled or support virtual-hosted style access. At this time, we can add the ",(0,r.kt)("inlineCode",{parentName:"li"},"use_path_style")," parameter to force the use of path style:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'   WITH S3\n   (\n         "AWS_ENDPOINT" = "AWS_ENDPOINT",\n         "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n         "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n         "AWS_REGION" = "AWS_REGION",\n         "use_path_style" = "true"\n   )\n')),(0,r.kt)("version",{since:"1.2"},(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Support using temporary security credentials to access object stores that support the S3 protocol:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  WITH S3\n  (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_TEMP_ACCESS_KEY",\n        "AWS_SECRET_KEY" = "AWS_TEMP_SECRET_KEY",\n        "AWS_TOKEN" = "AWS_TEMP_TOKEN",\n        "AWS_REGION" = "AWS_REGION"\n  )\n'))))}d.isMDXComponent=!0}}]);