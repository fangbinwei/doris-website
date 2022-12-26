"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[94947],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},10346:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={title:"Release Doris Connectors",language:"en"},i=void 0,l={unversionedId:"release-and-verify/release-doris-connectors",id:"release-and-verify/release-doris-connectors",title:"Release Doris Connectors",description:"\x3c!--",source:"@site/community/release-and-verify/release-doris-connectors.md",sourceDirName:"release-and-verify",slug:"/release-and-verify/release-doris-connectors",permalink:"/community/release-and-verify/release-doris-connectors",draft:!1,tags:[],version:"current",frontMatter:{title:"Release Doris Connectors",language:"en"},sidebar:"community",previous:{title:"Release Doris Core",permalink:"/community/release-and-verify/release-doris-core"},next:{title:"Release Doris Manager",permalink:"/community/release-and-verify/release-doris-manager"}},s={},c=[{value:"Preparing for release",id:"preparing-for-release",level:2},{value:"Releasing to Maven",id:"releasing-to-maven",level:2},{value:"1. Prepare the branch",id:"1-prepare-the-branch",level:3},{value:"2. release to Maven staging",id:"2-release-to-maven-staging",level:3},{value:"3. Prepare svn",id:"3-prepare-svn",level:3},{value:"4. Polling",id:"4-polling",level:3},{value:"Completing the release",id:"completing-the-release",level:2},{value:"Appendix: Releasing to SNAPSHOT",id:"appendix-releasing-to-snapshot",level:2}],p={toc:c};function d(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"releases-doris-connectors"},"Releases Doris Connectors"),(0,a.kt)("p",null,"Doris Connectors currently contains:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flink Doris Connector"),(0,a.kt)("li",{parentName:"ul"},"Spark Doris Connector")),(0,a.kt)("p",null,"The code base is separate from the main Doris code base and is located at:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/doris-flink-connector"},"https://github.com/apache/doris-flink-connector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/doris-spark-connector"},"https://github.com/apache/doris-spark-connector"))),(0,a.kt)("h2",{id:"preparing-for-release"},"Preparing for release"),(0,a.kt)("p",null,"First, see the ",(0,a.kt)("a",{parentName:"p",href:"/community/release-and-verify/release-prepare"},"release preparation")," documentation to prepare for the release."),(0,a.kt)("h2",{id:"releasing-to-maven"},"Releasing to Maven"),(0,a.kt)("p",null,"Let's take the example of releasing Flink Connector v1.0.0."),(0,a.kt)("h3",{id:"1-prepare-the-branch"},"1. Prepare the branch"),(0,a.kt)("p",null,"Create a branch in the codebase: branch-1.0, and checkout to that branch."),(0,a.kt)("h3",{id:"2-release-to-maven-staging"},"2. release to Maven staging"),(0,a.kt)("p",null,"Since Flink Connector releases different releases for different Flink versions (e.g. 1.11, 1.12, 1.13), we need to handle each version separately."),(0,a.kt)("p",null,"Let's take Flink version 1.14.3 and scala version 2.12 as an example."),(0,a.kt)("p",null,"First, replace flink.version and scala.version in pom.xml with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd flink-doris-connector/\nsed -i 's/\\${env.flink.version}/1.14.3/g' pom.xml\nsed -i 's/\\${env.flink.minor.version}/1.14/g' pom.xml\nsed -i 's/\\${env.scala.version}/2.12/g' pom.xml\n\nMac:\n\nsed -i '' 's/\\${env.flink.version}/1.14.3/g' pom.xml\nsed -i '' 's/\\${env.flink.minor.version}/1.14/g' pom.xml\nsed -i '' 's/\\${env.scala.version}/2.12/g' pom.xml\n")),(0,a.kt)("p",null,"After replacing, commit the local changes to."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'git add . -u\ngit commit -m "prepare for 1.14_2.12-1.0.0"\n')),(0,a.kt)("p",null,"Execute the following command to start generating the release tag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd flink-doris-connector/\nmvn release:clean\nmvn release:prepare -DpushChanges=false\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"-DpushChanges=false")," means that the newly generated branches and tags are not pushed to the codebase during execution."),(0,a.kt)("p",null,"After executing the ",(0,a.kt)("inlineCode",{parentName:"p"},"release:prepare")," command, the following three pieces of information will be requested."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"the version of the Doris Flink Connector: which we can do by default, either by entering a carriage return or by typing in the version you want. The version format is ",(0,a.kt)("inlineCode",{parentName:"li"},"{connector.version}"),", e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"1.0.0"),"."),(0,a.kt)("li",{parentName:"ol"},"The release tag of Doris Flink Connector: the release process will generate a tag locally, we can use the default tag name, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"1.14_2.12-1.0.0"),"."),(0,a.kt)("li",{parentName:"ol"},"The version number of the next version of Doris Flink Connector: This version number is only used for generating local branches and has no real meaning. For example, if the current release is ",(0,a.kt)("inlineCode",{parentName:"li"},"1.0.0"),", then the next version number should be ",(0,a.kt)("inlineCode",{parentName:"li"},"1.0.1-SNAPSHOT"),".")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mvn release:prepare")," may ask for GPG passphrase, if you get ",(0,a.kt)("inlineCode",{parentName:"p"},"gpg: no valid OpenPGP data found")," error, you can try after executing ",(0,a.kt)("inlineCode",{parentName:"p"},"export GPG_TTY=$(tty)"),"."),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn release:prepare")," succeeds, a tag and a branch will be created locally, and two new commits will be added to the current branch, the first one corresponding to the newly created tag and the second one to the branch of the next release, which can be viewed via ",(0,a.kt)("inlineCode",{parentName:"p"},"git log"),"."),(0,a.kt)("p",null,"Once the local tag is verified, you need to push the tag to the repository."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git push upstream --tags")),(0,a.kt)("p",null,"where upstream points to the ",(0,a.kt)("inlineCode",{parentName:"p"},"apache/doris-flink-connector")," repository."),(0,a.kt)("p",null,"Finally, execute perform:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mvn release:perform\n")),(0,a.kt)("p",null,"After successful execution, the version just released can be found in ",(0,a.kt)("a",{parentName:"p",href:"https://repository.apache.org/#stagingRepositories"},"https://repository.apache.org/#stagingRepositories")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(45398).Z,width:"1057",height:"955"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note that the ",(0,a.kt)("inlineCode",{parentName:"strong"},".asc")," signature file needs to be included.")),(0,a.kt)("p",null,"If there is an error. You need to delete the local tag, the tag in the codebase, and the two newly generated local commits. And drop the staging. Then re-execute the above steps."),(0,a.kt)("p",null,"After checking, click the ",(0,a.kt)("inlineCode",{parentName:"p"},"close")," button in the figure to finish staging release."),(0,a.kt)("h3",{id:"3-prepare-svn"},"3. Prepare svn"),(0,a.kt)("p",null,"Check out the svn repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"svn co https://dist.apache.org/repos/dist/dev/doris/\n")),(0,a.kt)("p",null,"Package the tag source code and generate the signature file and sha256 checksum file. Here we take ",(0,a.kt)("inlineCode",{parentName:"p"},"1.14_2.12-1.0.0")," as an example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git archive --format=tar 1.14_2.12-1.0.0 --prefix=apache-doris-flink-connector-1.14_2.12-1.0.0-src/ | gzip > apache-doris-flink-connector-1.14_2.12-1.0.0-src.tar.gz\ngpg -u xxx@apache.org --armor --output apache-doris-flink-connector-1.14_2.12-1.0.0-src.tar.gz.asc  --detach-sign apache-doris-flink-connector-1.14_2.12-1.0.0-src.tar.gz\nsha512sum apache-doris-flink-connector-1.14_2.12-1.0.0-src.tar.gz > apache-doris-flink-connector-1.14_2.12-1.0.0-src.tar.gz.sha512\n\nMac:\nshasum -a 512 apache-doris-flink-connector-1.14_2.12-1.0.0-src.tar.gz > apache-doris-flink-connector-1.14_2.12-1.0.0-src.tar.gz.sha512\n")),(0,a.kt)("p",null,"The end result is three files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apache-doris-flink-connector-1.14_2.12-1.0.0-src.tar.gz\napache-doris-flink-connector-1.14_2.12-1.0.0-src.tar.gz.asc\napache-doris-flink-connector-1.14_2.12-1.0.0-src.tar.gz.sha512\n")),(0,a.kt)("p",null,"Move these three files to the svn directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"doris/flink-connector/1.0.0/\n")),(0,a.kt)("p",null,"The final svn directory structure will look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"|____0.15\n| |____0.15.0-rc04\n| | |____apache-doris-0.15.0-incubating-src.tar.gz.sha512\n| | |____apache-doris-0.15.0-incubating-src.tar.gz.asc\n| | |____apache-doris-0.15.0-incubating-src.tar.gz\n|____KEYS\n|____flink-connector\n| |____1.0.0\n| | |____apache-doris-flink-connector-1.14_2.12-1.0.0-incubating-src.tar.gz\n| | |____apache-doris-flink-connector-1.14_2.12-1.0.0-incubating-src.tar.gz.sha512\n| | |____apache-doris-flink-connector-1.14_2.12-1.0.0-incubating-src.tar.gz.asc\n")),(0,a.kt)("p",null,"Where 0.15 is the directory of Doris main code, and under ",(0,a.kt)("inlineCode",{parentName:"p"},"flink-connector/1.0.0")," is the content of this release."),(0,a.kt)("p",null,"Note that the preparation of the KEYS file can be found in ","[release preparation]","(. /release-prepare.md)."),(0,a.kt)("h3",{id:"4-polling"},"4. Polling"),(0,a.kt)("p",null,"Initiate a poll in the dev@doris mailgroup, with the following template."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Hi All,\n\nThis is a call for vote to release Flink Connectors v1.0.0 for Apache Doris\n\n- apache-doris-flink-connector-1.14_2.12-1.0.0\n\nThe release node:\nxxxxx\n\nThe release candidates:\nhttps://dist.apache.org/repos/dist/dev/doris/flink-connector/1.0.0/\n\nMaven 2 staging repository:\nhttps://repository.apache.org/content/repositories/orgapachedoris-1002/org/apache/doris/doris-flink-connector/\n\nGit tag for the release:\nhttps://github.com/apache/doris-flink-connector/tree/1.14_2.12-1.0.0\n\nKeys to verify the Release Candidate:\nhttps://downloads.apache.org/doris/KEYS\n\nLook at here for how to verify this release candidate:\nhhttps://doris.apache.org/zh-CN/community/release-and-verify/release-verify\n\nThe vote will be open for at least 72 hours or until necessary number of votes are reached.\n\nPlease vote accordingly:\n\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n")),(0,a.kt)("h2",{id:"completing-the-release"},"Completing the release"),(0,a.kt)("p",null,"Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/community/release-and-verify/release-complete"},"Release Completion")," document to complete the release process."),(0,a.kt)("h2",{id:"appendix-releasing-to-snapshot"},"Appendix: Releasing to SNAPSHOT"),(0,a.kt)("p",null,"Snapshot is not an Apache Release version and is only used for pre-release previews. Snapshot versions can be released after discussion and approval by the PMC"),(0,a.kt)("p",null,"Switch to the flink connector directory, we will use flink version 1.13.5, scalar 2.12 as an example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd flink-doris-connector\nmvn deploy -Dflink.version=1.13.5 -Dscala.version=2.12\n")),(0,a.kt)("p",null,"After that you can see the snapshot version here."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://repository.apache.org/content/repositories/snapshots/org/apache/doris/doris-flink-connector/\n")))}d.isMDXComponent=!0},45398:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/staging-repositories-4c394e1094a6aa8ac05d6bfea6b48627.png"}}]);