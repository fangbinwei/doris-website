"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[37928],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17239:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Cluster upgrade",language:"en"},i=void 0,l={unversionedId:"admin-manual/cluster-management/upgrade",id:"version-dev/admin-manual/cluster-management/upgrade",title:"Cluster upgrade",description:"\x3c!--",source:"@site/versioned_docs/version-dev/admin-manual/cluster-management/upgrade.md",sourceDirName:"admin-manual/cluster-management",slug:"/admin-manual/cluster-management/upgrade",permalink:"/docs/dev/admin-manual/cluster-management/upgrade",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/admin-manual/cluster-management/upgrade.md",tags:[],version:"dev",frontMatter:{title:"Cluster upgrade",language:"en"},sidebar:"docs",previous:{title:"REFRESH",permalink:"/docs/dev/sql-manual/sql-reference/Utility-Statements/REFRESH"},next:{title:"Elastic scaling",permalink:"/docs/dev/admin-manual/cluster-management/elastic-expansion"}},s={},c=[{value:"Preparen",id:"preparen",level:2},{value:"Test the correctness of BE upgrade",id:"test-the-correctness-of-be-upgrade",level:2},{value:"Testing FE Metadata Compatibility",id:"testing-fe-metadata-compatibility",level:2},{value:"Upgrade preparation",id:"upgrade-preparation",level:2},{value:"rolling upgrade",id:"rolling-upgrade",level:2},{value:"About version rollback",id:"about-version-rollback",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cluster-upgrade"},"Cluster upgrade"),(0,n.kt)("p",null,"Doris can upgrade smoothly by rolling upgrades. The following steps are recommended for security upgrade."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The name of the BE binary that appears in this doc is ",(0,n.kt)("inlineCode",{parentName:"strong"},"doris_be"),", which was ",(0,n.kt)("inlineCode",{parentName:"strong"},"palo_be")," in previous versions.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")),(0,n.kt)("ol",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ol"},"Doris does not support upgrading across two-digit version numbers, for example: you cannot upgrade directly from 0.13 to 0.15, only through 0.13.x -> 0.14.x -> 0.15.x, and the three-digit version number can be upgraded across versions, such as from 0.13 .15 can be directly upgraded to 0.14.13.1, it is not necessary to upgrade 0.14.7 or 0.14.12.1"),(0,n.kt)("li",{parentName:"ol"},"The following approaches are based on highly available deployments. That is, data 3 replicas, FE high availability."))),(0,n.kt)("h2",{id:"preparen"},"Preparen"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Turn off the replica repair and balance operation."),(0,n.kt)("p",{parentName:"li"}," There will be node restarts during the upgrade process, so unnecessary cluster balancing and replica repair logic may be triggered. You can close it first with the following command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'# Turn off the replica ealance logic. After it is closed, the balancing operation of the ordinary table replica will no longer be triggered.\n$ mysql-client> admin set frontend config("disable_balance" = "true");\n\n# Turn off the replica balance logic of the colocation table. After it is closed, the replica redistribution operation of the colocation table will no longer be triggered.\n$ mysql-client> admin set frontend config("disable_colocate_balance" = "true");\n\n# Turn off the replica scheduling logic. After shutting down, all generated replica repair and balancing tasks will no longer be scheduled.\n$ mysql-client> admin set frontend config("disable_tablet_scheduler" = "true");\n')),(0,n.kt)("p",{parentName:"li"}," After the cluster is upgraded, just use the above command to set the corresponding configuration to the original value.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"important! ! Metadata needs to be backed up before upgrading(The entire directory needs to be backed up)! !")))),(0,n.kt)("h2",{id:"test-the-correctness-of-be-upgrade"},"Test the correctness of BE upgrade"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Arbitrarily select a BE node and deploy the latest doris_be binary file."),(0,n.kt)("li",{parentName:"ol"},"Restart the BE node and check the BE log be.INFO to see if the boot was successful."),(0,n.kt)("li",{parentName:"ol"},"If the startup fails, you can check the reason first. If the error is not recoverable, you can delete the BE directly through DROP BACKEND, clean up the data, and restart the BE using the previous version of doris_be. Then re-ADD BACKEND. (",(0,n.kt)("strong",{parentName:"li"},"This method will result in the loss of a copy of the data, please make sure that three copies are complete, and perform this operation!!!"),")"),(0,n.kt)("li",{parentName:"ol"},"Install Java UDF function",(0,n.kt)("version",{since:"1.2.0"},"Install Java UDF function: "),", because Java UDF function is supported from version 1.2, you need to download the JAR package of Java UDF function from the official website and put it in the lib directory of BE, otherwise it may will fail to start.")),(0,n.kt)("h2",{id:"testing-fe-metadata-compatibility"},"Testing FE Metadata Compatibility"),(0,n.kt)("ol",{start:0},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Important! Exceptional metadata compatibility is likely to cause data cannot be restored!!")),(0,n.kt)("li",{parentName:"ol"},"Deploy a test FE process (It is recommended to use your own local development machine, or BE node. If it is on the Follower or Observer node, you need to stop the started process, but it is not recommended to test on the Follower or Observer node) using the new version alone."),(0,n.kt)("li",{parentName:"ol"},"Modify the FE configuration file fe.conf for testing and set all ports to ",(0,n.kt)("strong",{parentName:"li"},"different from online"),"."),(0,n.kt)("li",{parentName:"ol"},"Add configuration in fe.conf: cluster_id=123456"),(0,n.kt)("li",{parentName:"ol"},"Add configuration in fe.conf: metadata_failure_recovery=true"),(0,n.kt)("li",{parentName:"ol"},"Copy the metadata directory doris-meta of the online environment master Fe to the test environment\n6.The cluster_ID where copy to the doris-meta/image/VERSION file in the test environment is modified to 123456 (that is, the same as in Step 3)"),(0,n.kt)("li",{parentName:"ol"},"In the test environment,running sh sh bin/start_fe.sh,start FE."),(0,n.kt)("li",{parentName:"ol"},"Observe whether the start-up is successful through FE log fe.log."),(0,n.kt)("li",{parentName:"ol"},"If the startup is successful, run sh bin/stop_fe.sh to stop the FE process of the test environment."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"The purpose of the above 2-6 steps is to prevent the FE of the test environment from being misconnected to the online environment after it starts."))),(0,n.kt)("h2",{id:"upgrade-preparation"},"Upgrade preparation"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"After data validation, the new version of BE and FE binary files are distributed to their respective directories."),(0,n.kt)("li",{parentName:"ol"},"Usually small version upgrade, BE only needs to upgrade doris_be; FE only needs to upgrade palo-fe.jar. If it is a large version upgrade, you may need to upgrade other files (including but not limited to bin / lib / etc.) If you are not sure whether you need to replace other files, it is recommended to replace all of them.")),(0,n.kt)("h2",{id:"rolling-upgrade"},"rolling upgrade"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Confirm that the new version of the file is deployed. Restart FE and BE instances one by one."),(0,n.kt)("li",{parentName:"ol"},"It is suggested that BE be restarted one by one and FE be restarted one by one. Because Doris usually guarantees backward compatibility between FE and BE, that is, the old version of FE can access the new version of BE. However, the old version of BE may not be supported to access the new version of FE."),(0,n.kt)("li",{parentName:"ol"},"It is recommended to restart the next instance after confirming the previous instance started successfully. Refer to the Installation Deployment Document for the identification of successful instance startup.")),(0,n.kt)("h2",{id:"about-version-rollback"},"About version rollback"),(0,n.kt)("p",null,"Because the database is a stateful service, Doris cannot support version rollback (version downgrade) in most cases. In some cases, the rollback of the 3-bit or 4-bit version can be supported, but the rollback of the 2-bit version will not be supported."),(0,n.kt)("p",null,"Therefore, it is recommended to upgrade some nodes and observe the business operation (gray upgrade) to reduce the upgrade risk."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Illegal rollback operation may cause data loss and damage.")))}d.isMDXComponent=!0}}]);