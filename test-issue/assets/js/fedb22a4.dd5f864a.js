"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[22038],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},14384:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Installation and deployment",language:"en"},i=void 0,l={unversionedId:"install/install-deploy",id:"install/install-deploy",title:"Installation and deployment",description:"\x3c!--",source:"@site/docs/install/install-deploy.md",sourceDirName:"install",slug:"/install/install-deploy",permalink:"/docs/install/install-deploy",draft:!1,tags:[],version:"current",frontMatter:{title:"Installation and deployment",language:"en"},sidebar:"docs",previous:{title:"Getting-Started",permalink:"/docs/get-starting/"},next:{title:"Compilation",permalink:"/docs/install/source-install/compilation"}},s={},p=[{value:"Software and hardware requirements",id:"software-and-hardware-requirements",level:2},{value:"Overview",id:"overview",level:3},{value:"Linux Operating System Version Requirements",id:"linux-operating-system-version-requirements",level:4},{value:"Software requirements",id:"software-requirements",level:4},{value:"OS Installation Requirements",id:"os-installation-requirements",level:4},{value:"Set the maximum number of open file handles in the system",id:"set-the-maximum-number-of-open-file-handles-in-the-system",level:5},{value:"Clock synchronization",id:"clock-synchronization",level:5},{value:"Close the swap partition (swap)",id:"close-the-swap-partition-swap",level:5},{value:"Linux file system",id:"linux-file-system",level:5},{value:"Development Test Environment",id:"development-test-environment",level:4},{value:"Production environment",id:"production-environment",level:4},{value:"Broker deployment",id:"broker-deployment",level:4},{value:"Network Requirements",id:"network-requirements",level:4},{value:"IP binding",id:"ip-binding",level:4},{value:"Table Name Case Sensitivity Setting",id:"table-name-case-sensitivity-setting",level:4},{value:"Cluster deployment",id:"cluster-deployment",level:2},{value:"Manual deployment",id:"manual-deployment",level:3},{value:"Deploy FE",id:"deploy-fe",level:4},{value:"Deploy BE",id:"deploy-be",level:4},{value:"(Optional) FS_Broker deployment",id:"optional-fs_broker-deployment",level:4},{value:"Common Questions",id:"common-questions",level:2},{value:"Process correlation",id:"process-correlation",level:3}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation-and-deployment"},"Installation and deployment"),(0,r.kt)("p",null,"This document mainly introduces the hardware and software environment needed to deploy Doris, the proposed deployment mode, cluster expansion and scaling, and common problems in the process of cluster building and running.\nBefore reading this document, compile Doris according to the compiled document."),(0,r.kt)("h2",{id:"software-and-hardware-requirements"},"Software and hardware requirements"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Doris, as an open source MPP architecture OLAP database, can run on most mainstream commercial servers. In order to make full use of the concurrency advantages of MPP architecture and the high availability features of Doris, we recommend that the deployment of Doris follow the following requirements:"),(0,r.kt)("h4",{id:"linux-operating-system-version-requirements"},"Linux Operating System Version Requirements"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Linux System"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Centos"),(0,r.kt)("td",{parentName:"tr",align:null},"7.1 and above")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu"),(0,r.kt)("td",{parentName:"tr",align:null},"16.04 and above")))),(0,r.kt)("h4",{id:"software-requirements"},"Software requirements"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Soft"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Java"),(0,r.kt)("td",{parentName:"tr",align:null},"1.8 and above")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GCC"),(0,r.kt)("td",{parentName:"tr",align:null},"4.8.2 and above")))),(0,r.kt)("h4",{id:"os-installation-requirements"},"OS Installation Requirements"),(0,r.kt)("h5",{id:"set-the-maximum-number-of-open-file-handles-in-the-system"},"Set the maximum number of open file handles in the system"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vi /etc/security/limits.conf\n* soft nofile 65536\n* hard nofile 65536\n")),(0,r.kt)("h5",{id:"clock-synchronization"},"Clock synchronization"),(0,r.kt)("p",null,"The metadata of Doris requires the time precision to be less than 5000ms, so all machines in the cluster need to synchronize the clocks to avoid service exceptions caused by inconsistencies in metadata caused by clock problems."),(0,r.kt)("h5",{id:"close-the-swap-partition-swap"},"Close the swap partition (swap)"),(0,r.kt)("p",null,"The Linux swap partition will cause serious performance problems for Doris, you need to disable the swap partition before installation"),(0,r.kt)("h5",{id:"linux-file-system"},"Linux file system"),(0,r.kt)("p",null,"Here we recommend using the ext4 file system. When installing the operating system, please select the ext4 file system."),(0,r.kt)("h4",{id:"development-test-environment"},"Development Test Environment"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Module"),(0,r.kt)("th",{parentName:"tr",align:null},"CPU"),(0,r.kt)("th",{parentName:"tr",align:null},"Memory"),(0,r.kt)("th",{parentName:"tr",align:null},"Disk"),(0,r.kt)("th",{parentName:"tr",align:null},"Network"),(0,r.kt)("th",{parentName:"tr",align:null},"Instance Number"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Frontend"),(0,r.kt)("td",{parentName:"tr",align:null},"8 core +"),(0,r.kt)("td",{parentName:"tr",align:null},"8GB +"),(0,r.kt)("td",{parentName:"tr",align:null},"SSD or SATA, 10GB + *"),(0,r.kt)("td",{parentName:"tr",align:null},"Gigabit Network Card"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Backend"),(0,r.kt)("td",{parentName:"tr",align:null},"8 core +"),(0,r.kt)("td",{parentName:"tr",align:null},"16GB +"),(0,r.kt)("td",{parentName:"tr",align:null},"SSD or SATA, 50GB + *"),(0,r.kt)("td",{parentName:"tr",align:null},"Gigabit Network Card"),(0,r.kt)("td",{parentName:"tr",align:null},"1-3*")))),(0,r.kt)("h4",{id:"production-environment"},"Production environment"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Module"),(0,r.kt)("th",{parentName:"tr",align:null},"CPU"),(0,r.kt)("th",{parentName:"tr",align:null},"Memory"),(0,r.kt)("th",{parentName:"tr",align:null},"Disk"),(0,r.kt)("th",{parentName:"tr",align:null},"Network"),(0,r.kt)("th",{parentName:"tr",align:null},"Number of Instances (Minimum Requirements)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Frontend"),(0,r.kt)("td",{parentName:"tr",align:null},"16 core +"),(0,r.kt)("td",{parentName:"tr",align:null},"64GB +"),(0,r.kt)("td",{parentName:"tr",align:null},"SSD or RAID card, 100GB + *"),(0,r.kt)("td",{parentName:"tr",align:null},"10,000 Mbp network card"),(0,r.kt)("td",{parentName:"tr",align:null},"1-5*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Backend"),(0,r.kt)("td",{parentName:"tr",align:null},"16 core +"),(0,r.kt)("td",{parentName:"tr",align:null},"64GB +"),(0,r.kt)("td",{parentName:"tr",align:null},"SSD or SATA, 100G + *"),(0,r.kt)("td",{parentName:"tr",align:null},"10-100 Mbp network card"),(0,r.kt)("td",{parentName:"tr",align:null},"10-100 *")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note 1:"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"The disk space of FE is mainly used to store metadata, including logs and images. Usually it ranges from several hundred MB to several GB."),(0,r.kt)("li",{parentName:"ol"},"BE's disk space is mainly used to store user data. The total disk space is calculated according to the user's total data * 3 (3 copies). Then an additional 40% of the space is reserved for background compaction and some intermediate data storage."),(0,r.kt)("li",{parentName:"ol"},"Multiple BE instances can be deployed on a single machine, but ",(0,r.kt)("strong",{parentName:"li"},"can only deploy one FE"),". If you need three copies of data, you need at least one BE instance per machine (instead of three BE instances per machine). ",(0,r.kt)("strong",{parentName:"li"},"Clocks of multiple FE servers must be consistent (allowing a maximum of 5 seconds clock deviation)")),(0,r.kt)("li",{parentName:"ol"},"The test environment can also be tested with only one BE. In the actual production environment, the number of BE instances directly determines the overall query latency."),(0,r.kt)("li",{parentName:"ol"},"All deployment nodes close Swap."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note 2: Number of FE nodes"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"FE roles are divided into Follower and Observer. (Leader is an elected role in the Follower group, hereinafter referred to as Follower, for the specific meaning)"),(0,r.kt)("li",{parentName:"ol"},"FE node data is at least 1 (1 Follower). When one Follower and one Observer are deployed, high read availability can be achieved. When three Followers are deployed, read-write high availability (HA) can be achieved."),(0,r.kt)("li",{parentName:"ol"},"The number of Followers ",(0,r.kt)("strong",{parentName:"li"},"must be")," odd, and the number of Observers is arbitrary."),(0,r.kt)("li",{parentName:"ol"},"According to past experience, when cluster availability requirements are high (e.g. providing online services), three Followers and one to three Observers can be deployed. For offline business, it is recommended to deploy 1 Follower and 1-3 Observers."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Usually we recommend about 10 to 100 machines to give full play to Doris's performance (3 of them deploy FE (HA) and the rest deploy BE)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Of course, Doris performance is positively correlated with the number and configuration of nodes. With a minimum of four machines (one FE, three BEs, one BE mixed with one Observer FE to provide metadata backup) and a lower configuration, Doris can still run smoothly.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"If FE and BE are mixed, we should pay attention to resource competition and ensure that metadata catalogue and data catalogue belong to different disks."))),(0,r.kt)("h4",{id:"broker-deployment"},"Broker deployment"),(0,r.kt)("p",null,"Broker is a process for accessing external data sources, such as hdfs. Usually, a broker instance is deployed on each machine."),(0,r.kt)("h4",{id:"network-requirements"},"Network Requirements"),(0,r.kt)("p",null,"Doris instances communicate directly over the network. The following table shows all required ports"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Instance Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Port Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Communication Direction"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BE"),(0,r.kt)("td",{parentName:"tr",align:null},"be_port"),(0,r.kt)("td",{parentName:"tr",align:null},"9060"),(0,r.kt)("td",{parentName:"tr",align:null},"FE --\x3e BE"),(0,r.kt)("td",{parentName:"tr",align:null},"BE for receiving requests from FE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BE"),(0,r.kt)("td",{parentName:"tr",align:null},"webserver","_","port"),(0,r.kt)("td",{parentName:"tr",align:null},"8040"),(0,r.kt)("td",{parentName:"tr",align:null},"BE <--\x3e BE"),(0,r.kt)("td",{parentName:"tr",align:null},"BE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BE"),(0,r.kt)("td",{parentName:"tr",align:null},"heartbeat","_","service_port"),(0,r.kt)("td",{parentName:"tr",align:null},"9050"),(0,r.kt)("td",{parentName:"tr",align:null},"FE --\x3e BE"),(0,r.kt)("td",{parentName:"tr",align:null},"the heart beat service port (thrift) on BE, used to receive heartbeat from FE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BE"),(0,r.kt)("td",{parentName:"tr",align:null},"brpc","_","port"),(0,r.kt)("td",{parentName:"tr",align:null},"8060"),(0,r.kt)("td",{parentName:"tr",align:null},"FE <--\x3e BE, BE <--\x3e BE"),(0,r.kt)("td",{parentName:"tr",align:null},"BE for communication between BEs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FE"),(0,r.kt)("td",{parentName:"tr",align:null},"http_port"),(0,r.kt)("td",{parentName:"tr",align:null},"8030"),(0,r.kt)("td",{parentName:"tr",align:null},"FE <--\x3e FE, user <--\x3e FE"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP server port on FE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FE"),(0,r.kt)("td",{parentName:"tr",align:null},"rpc_port"),(0,r.kt)("td",{parentName:"tr",align:null},"9020"),(0,r.kt)("td",{parentName:"tr",align:null},"BE --\x3e FE, FE <--\x3e FE"),(0,r.kt)("td",{parentName:"tr",align:null},"thrift server port on FE, the configuration of each fe needs to be consistent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FE"),(0,r.kt)("td",{parentName:"tr",align:null},"query_port"),(0,r.kt)("td",{parentName:"tr",align:null},"9030"),(0,r.kt)("td",{parentName:"tr",align:null},"user <--\x3e FE"),(0,r.kt)("td",{parentName:"tr",align:null},"FE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FE"),(0,r.kt)("td",{parentName:"tr",align:null},"edit","_","log_port"),(0,r.kt)("td",{parentName:"tr",align:null},"9010"),(0,r.kt)("td",{parentName:"tr",align:null},"FE <--\x3e FE"),(0,r.kt)("td",{parentName:"tr",align:null},"FE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Broker"),(0,r.kt)("td",{parentName:"tr",align:null},"broker ipc_port"),(0,r.kt)("td",{parentName:"tr",align:null},"8000"),(0,r.kt)("td",{parentName:"tr",align:null},"FE --\x3e Broker, BE --\x3e Broker"),(0,r.kt)("td",{parentName:"tr",align:null},"Broker for receiving requests")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note:"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"When deploying multiple FE instances, make sure that the http port configuration of FE is the same."),(0,r.kt)("li",{parentName:"ol"},"Make sure that each port has access in its proper direction before deployment."))),(0,r.kt)("h4",{id:"ip-binding"},"IP binding"),(0,r.kt)("p",null,"Because of the existence of multiple network cards, or the existence of virtual network cards caused by the installation of docker and other environments, the same host may have multiple different ips. Currently Doris does not automatically identify available IP. So when you encounter multiple IP on the deployment host, you must force the correct IP to be specified through the priority","_","networks configuration item."),(0,r.kt)("p",null,"Priority","_","networks is a configuration that both FE and BE have, and the configuration items need to be written in fe.conf and be.conf. This configuration item is used to tell the process which IP should be bound when FE or BE starts. Examples are as follows:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"priority_networks=10.1.3.0/24")),(0,r.kt)("p",null,"This is a representation of ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing"},"CIDR"),". FE or BE will find the matching IP based on this configuration item as their own local IP."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": When priority networks is configured and FE or BE is started, only the correct IP binding of FE or BE is ensured. In ADD BACKEND or ADD FRONTEND statements, you also need to specify IP matching priority networks configuration, otherwise the cluster cannot be established. Give an example:"),(0,r.kt)("p",null,"BE is configured as ",(0,r.kt)("inlineCode",{parentName:"p"},"priority_networks = 10.1.3.0/24"),"."),(0,r.kt)("p",null,"When you want to ADD BACKEND use: ",(0,r.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM ADD BACKEND "192.168.0.1:9050";')),(0,r.kt)("p",null,"Then FE and BE will not be able to communicate properly."),(0,r.kt)("p",null,"At this point, DROP must remove the BE that added errors and re-use the correct IP to perform ADD BACKEND."),(0,r.kt)("p",null,"FE is the same."),(0,r.kt)("p",null,"BROKER does not currently have, nor does it need, priority","_","networks. Broker's services are bound to 0.0.0.0 by default. Simply execute the correct accessible BROKER IP when ADD BROKER is used."),(0,r.kt)("h4",{id:"table-name-case-sensitivity-setting"},"Table Name Case Sensitivity Setting"),(0,r.kt)("p",null,"By default, doris is case-sensitive. If there is a need for case-insensitive table names, you need to set it before cluster initialization. The table name case sensitivity cannot be changed after cluster initialization is completed."),(0,r.kt)("p",null,"See the section on ",(0,r.kt)("inlineCode",{parentName:"p"},"lower_case_table_names")," variables in ",(0,r.kt)("a",{parentName:"p",href:"../advanced/variables"},"Variables")," for details."),(0,r.kt)("h2",{id:"cluster-deployment"},"Cluster deployment"),(0,r.kt)("h3",{id:"manual-deployment"},"Manual deployment"),(0,r.kt)("h4",{id:"deploy-fe"},"Deploy FE"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy the FE deployment file to the specified node"),(0,r.kt)("p",{parentName:"li"},"Copy the Fe folder under output generated by source code compilation to the node specified deployment path of FE and enter this directory.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configure FE"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"The configuration file is conf/fe.conf. Note: ",(0,r.kt)("inlineCode",{parentName:"li"},"meta_dir")," indicates the Metadata storage location. The default value is ",(0,r.kt)("inlineCode",{parentName:"li"},"${DORIS_HOME}/doris-meta"),". The directory needs to be ",(0,r.kt)("strong",{parentName:"li"},"created manually"),"."),(0,r.kt)("li",{parentName:"ol"},"JAVA_OPTS in fe.conf defaults to a maximum heap memory of 4GB for java, and it is recommended that the production environment be adjusted to more than 8G."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start FE"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bin/start_fe.sh --daemon")),(0,r.kt)("p",{parentName:"li"},"The FE process starts and enters the background execution. Logs are stored in the log/ directory by default. If startup fails, you can view error messages by looking at log/fe.log or log/fe.out.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'For deployment of multiple FEs, see the section "FE scaling and downsizing"'))),(0,r.kt)("h4",{id:"deploy-be"},"Deploy BE"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy BE deployment files to all nodes to deploy BE"),(0,r.kt)("p",{parentName:"li"},"Copy the be folder under output generated by source code compilation to the specified deployment path of the BE node.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Modify all BE configurations"),(0,r.kt)("p",{parentName:"li"},"Modify be/conf/be.conf. Mainly configure ",(0,r.kt)("inlineCode",{parentName:"p"},"storage_root_path"),": data storage directory. The default is be/storage, this directory needs to be ",(0,r.kt)("strong",{parentName:"p"},"created manually")," by. In multi directories case, using ",(0,r.kt)("inlineCode",{parentName:"p"},";")," separation (do not add ",(0,r.kt)("inlineCode",{parentName:"p"},";")," after the last directory).",(0,r.kt)("br",{parentName:"p"}),"\n","If the user does not use a mix of SSD and HDD disks, they do not need to configure the configuration methods in Example 1 and Example 2 below, but only need to specify the storage directory; they also do not need to modify the default storage media configuration of FE.  "),(0,r.kt)("p",{parentName:"li"},"  eg.1: "),(0,r.kt)("p",{parentName:"li"},"  Note: For SSD disks, '.SSD 'is followed by the directory, and for HDD disks,'.HDD 'is followed by the directory"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("inlineCode",{parentName:"p"},"storage_root_path=/home/disk1/doris.HDD;/home/disk2/doris.SSD;/home/disk2/doris")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"instructions")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"1./home/disk1/doris.HDD : The storage medium is HDD;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"2./home/disk2/doris.SSD  : The storage medium is SSD;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"3./home/disk2/doris  :  The storage medium is HDD(default)"),(0,r.kt)("p",{parentName:"li"},"eg.2: "),(0,r.kt)("p",{parentName:"li"},"Note: you do not need to add the suffix to either HDD or SSD disk directories. You only need to set the medium parameter"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"storage_root_path=/home/disk1/doris,medium:hdd;/home/disk2/doris,medium:ssd")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"instructions"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"1./home/disk1/doris,medium:hdd   The storage medium is HDD;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"2./home/disk2/doris,medium:ssd   The storage medium is SSD;")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"BE webserver_port configuration"),(0,r.kt)("p",{parentName:"li"},"If the Be componet is installed in hadoop cluster , need to change configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"webserver_port=8040"),"  to avoid port used.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add all BE nodes to FE"),(0,r.kt)("p",{parentName:"li"},"BE nodes need to be added in FE before they can join the cluster. You can use mysql-client(",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/downloads/mysql/5.7.html"},"Download MySQL 5.7"),") to connect to FE:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"./mysql-client -h fe_host -P query_port -uroot")),(0,r.kt)("p",{parentName:"li"},"The fe_host is the node IP where FE is located; the query_port in fe/conf/fe.conf; the root account is used by default and no password is used to login."),(0,r.kt)("p",{parentName:"li"},"After login, execute the following commands to add each BE:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM ADD BACKEND "be_host:heartbeat_service_port";')),(0,r.kt)("p",{parentName:"li"},"The be_host is the node IP where BE is located; the heartbeat_service_port in be/conf/be.conf.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start BE"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bin/start_be.sh --daemon")),(0,r.kt)("p",{parentName:"li"},"The BE process will start and go into the background for execution. Logs are stored in be/log/directory by default. If startup fails, you can view error messages by looking at be/log/be.log or be/log/be.out.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"View BE status"),(0,r.kt)("p",{parentName:"li"},"Connect to FE using mysql-client and execute ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW PROC '/backends'; "),"View BE operation. If everything is normal, the ",(0,r.kt)("inlineCode",{parentName:"p"},"isAlive"),"column should be ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."))),(0,r.kt)("h4",{id:"optional-fs_broker-deployment"},"(Optional) FS_Broker deployment"),(0,r.kt)("p",null,"Broker is deployed as a plug-in, independent of Doris. If you need to import data from a third-party storage system, you need to deploy the corresponding Broker. By default, it provides fs_broker to read HDFS ,Object storage (supporting S3 protocol). Fs_broker is stateless and it is recommended that each FE and BE node deploy a Broker."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy the corresponding Broker directory in the output directory of the source fs_broker to all the nodes that need to be deployed. It is recommended to maintain the same level as the BE or FE directories.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Modify the corresponding Broker configuration"),(0,r.kt)("p",{parentName:"li"},"In the corresponding broker/conf/directory configuration file, you can modify the corresponding configuration.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start Broker"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bin/start_broker.sh --daemon"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add Broker"),(0,r.kt)("p",{parentName:"li"},"To let Doris FE and BE know which nodes Broker is on, add a list of Broker nodes by SQL command."),(0,r.kt)("p",{parentName:"li"},"Use mysql-client to connect the FE started, and execute the following commands:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM ADD BROKER broker_name "broker_host1:broker_ipc_port1","broker_host2:broker_ipc_port2",...;')),(0,r.kt)("p",{parentName:"li"},"The broker","_","host is Broker's node ip; the broker_ipc_port is in the Broker configuration file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"View Broker status"),(0,r.kt)("p",{parentName:"li"},"Connect any booted FE using mysql-client and execute the following command to view Broker status: ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW PROC '/brokers';")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: In production environments, daemons should be used to start all instances to ensure that processes are automatically pulled up after they exit, such as ",(0,r.kt)("a",{parentName:"strong",href:"http://supervisord.org/"},"Supervisor"),". For daemon startup, in 0.9.0 and previous versions, you need to modify the start_xx.sh scripts to remove the last & symbol"),". Starting with version 0.10.0, call ",(0,r.kt)("inlineCode",{parentName:"p"},"sh start_xx.sh")," directly to start. Also refer to ",(0,r.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/lenmom/p/9973401.html"},"here")),(0,r.kt)("h2",{id:"common-questions"},"Common Questions"),(0,r.kt)("h3",{id:"process-correlation"},"Process correlation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How to determine the success of FE process startup"),(0,r.kt)("p",{parentName:"li"},"After the FE process starts, metadata is loaded first. According to the different roles of FE, you can see ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer from UNKNOWN to MASTER/FOLLOWER/OBSERVER"),"in the log. Eventually, you will see the ",(0,r.kt)("inlineCode",{parentName:"p"},"thrift server started")," log and connect to FE through MySQL client, which indicates that FE started successfully."),(0,r.kt)("p",{parentName:"li"},"You can also check whether the startup was successful by connecting as follows:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"http://fe_host:fe_http_port/api/bootstrap")),(0,r.kt)("p",{parentName:"li"},"If returned:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'{"status":"OK","msg":"Success"}')),(0,r.kt)("p",{parentName:"li"},"The startup is successful, there may be problems in other cases."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note: If you can't see the information of boot failure in fe. log, you may see it in fe. out."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How to determine the success of BE process startup"),(0,r.kt)("p",{parentName:"li"},"After the BE process starts, if there is data before, there may be several minutes of data index loading time."),(0,r.kt)("p",{parentName:"li"},"If BE is started for the first time or the BE has not joined any cluster, the BE log will periodically scroll the words ",(0,r.kt)("inlineCode",{parentName:"p"},"waiting to receive first heartbeat from frontend"),". BE has not received Master's address through FE's heartbeat and is waiting passively. This error log will disappear after ADD BACKEND in FE sends the heartbeat. If the word ",(0,r.kt)("inlineCode",{parentName:"p"},"master client', get client from cache failed. host:, port: 0, code: 7")," master client appears again after receiving heartbeat, it indicates that FE has successfully connected BE, but BE cannot actively connect FE. It may be necessary to check the connectivity of rpc_port from BE to FE."),(0,r.kt)("p",{parentName:"li"},"If BE has been added to the cluster, the heartbeat log from FE should be scrolled every five seconds: ",(0,r.kt)("inlineCode",{parentName:"p"},"get heartbeat, host:xx. xx.xx.xx, port:9020, cluster id:xxxxxxx"),", indicating that the heartbeat is normal."),(0,r.kt)("p",{parentName:"li"},"Secondly, the word ",(0,r.kt)("inlineCode",{parentName:"p"},"finish report task success. return code: 0")," should be scrolled every 10 seconds in the log to indicate that BE's communication to FE is normal."),(0,r.kt)("p",{parentName:"li"},"At the same time, if there is a data query, you should see the rolling logs, and have ",(0,r.kt)("inlineCode",{parentName:"p"},"execute time is xxx")," logs, indicating that BE started successfully, and the query is normal."),(0,r.kt)("p",{parentName:"li"},"You can also check whether the startup was successful by connecting as follows:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"http://be_host:be_http_port/api/health")),(0,r.kt)("p",{parentName:"li"},"If returned:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'{"status": "OK","msg": "To Be Added"}')),(0,r.kt)("p",{parentName:"li"},"If the startup is successful, there may be problems in other cases."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note: If you can't see the information of boot failure in be.INFO, you may see it in be.out."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How to determine the normal connectivity of FE and BE after building the system"),(0,r.kt)("p",{parentName:"li"},"Firstly, confirm that FE and BE processes have been started separately and normally, and confirm that all nodes have been added through ",(0,r.kt)("inlineCode",{parentName:"p"},"ADD BACKEND")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ADD FOLLOWER/OBSERVER")," statements."),(0,r.kt)("p",{parentName:"li"},"If the heartbeat is normal, BE logs will show ",(0,r.kt)("inlineCode",{parentName:"p"},"get heartbeat, host:xx.xx.xx.xx, port:9020, cluster id:xxxxx")," If the heartbeat fails, the words ",(0,r.kt)("inlineCode",{parentName:"p"},"backend [10001] get Exception: org.apache.thrift.transport.TTransportException")," will appear in FE's log, or other thrift communication abnormal log, indicating that the heartbeat fails from FE to 10001 BE. Here you need to check the connectivity of FE to BE host's heart-beating port."),(0,r.kt)("p",{parentName:"li"},"If BE's communication to FE is normal, the BE log will display the words ",(0,r.kt)("inlineCode",{parentName:"p"},"finish report task success. return code: 0"),". Otherwise, the words ",(0,r.kt)("inlineCode",{parentName:"p"},"master client"),", get client from cache failed` will appear. In this case, the connectivity of BE to the rpc_port of FE needs to be checked.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Doris Node Authentication Mechanism"),(0,r.kt)("p",{parentName:"li"},"In addition to Master FE, the other role nodes (Follower FE, Observer FE, Backend) need to register to the cluster through the ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER SYSTEM ADD")," statement before joining the cluster."),(0,r.kt)("p",{parentName:"li"},"When Master FE is first started, a cluster_id is generated in the doris-meta/image/VERSION file."),(0,r.kt)("p",{parentName:"li"},"When FE first joins the cluster, it first retrieves the file from Master FE. Each subsequent reconnection between FEs (FE reboot) checks whether its cluster ID is the same as that of other existing FEs. If different, the FE will exit automatically."),(0,r.kt)("p",{parentName:"li"},"When BE first receives the heartbeat of Master FE, it gets the cluster ID from the heartbeat and records it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster_id")," file of the data directory. Each heartbeat after that compares to the cluster ID sent by FE. If cluster IDs are not equal, BE will refuse to respond to FE's heartbeat."),(0,r.kt)("p",{parentName:"li"},"The heartbeat also contains Master FE's ip. When FE cuts the master, the new Master FE will carry its own IP to send the heartbeat to BE, BE will update its own saved Master FE ip."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"priority","_","network")),(0,r.kt)("p",{parentName:"blockquote"},"priority network is that both FE and BE have a configuration. Its main purpose is to assist FE or BE to identify their own IP addresses in the case of multi-network cards. Priority network is represented by CIDR: ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc4632"},"RFC 4632")),(0,r.kt)("p",{parentName:"blockquote"},"When the connectivity of FE and BE is confirmed to be normal, if the table Timeout still occurs, and the FE log has an error message with the words ",(0,r.kt)("inlineCode",{parentName:"p"},"backend does not find. host:xxxx.xxx.XXXX"),". This means that there is a problem with the IP address that Doris automatically identifies and that priority","_","network parameters need to be set manually."),(0,r.kt)("p",{parentName:"blockquote"},"The main reason for this problem is that when the user adds BE through the ",(0,r.kt)("inlineCode",{parentName:"p"},"ADD BACKEND")," statement, FE recognizes whether the statement specifies hostname or IP. If it is hostname, FE automatically converts it to an IP address and stores it in metadata. When BE reports on the completion of the task, it carries its own IP address. If FE finds that BE reports inconsistent IP addresses and metadata, it will make the above error."),(0,r.kt)("p",{parentName:"blockquote"},"Solutions to this error: 1) Set ",(0,r.kt)("strong",{parentName:"p"},"priority","_","network")," parameters in FE and BE respectively. Usually FE and BE are in a network segment, so this parameter can be set to the same. 2) Fill in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ADD BACKEND")," statement directly with the correct IP address of BE instead of hostname to avoid FE getting the wrong IP address."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"File descriptor number of BE process"),(0,r.kt)("p",{parentName:"li"},"The number of file descriptor of BE process is controlled by the two parameters min_file_descriptor_number/max_file_descriptor_number."),(0,r.kt)("p",{parentName:"li"},"If it is not in the ","[min_file_descriptor_number, max_file_descriptor_number]"," interval, error will occurs when starting BE process."),(0,r.kt)("p",{parentName:"li"},"Please using ulimit command to set file descriptor under this circumstance."),(0,r.kt)("p",{parentName:"li"},"The default value of min_file_descriptor_number is 65536."),(0,r.kt)("p",{parentName:"li"},"The default value of max_file_descriptor_number is 131072."),(0,r.kt)("p",{parentName:"li"},"For Example: ulimit -n 65536; this command set file descriptor to 65536."),(0,r.kt)("p",{parentName:"li"},"After starting BE process, you can use ",(0,r.kt)("strong",{parentName:"p"},"cat /proc/$pid/limits")," to see the actual limit of process."),(0,r.kt)("p",{parentName:"li"},"if use ",(0,r.kt)("inlineCode",{parentName:"p"},"supervisord"),", try to modify ",(0,r.kt)("inlineCode",{parentName:"p"},"minfds")," in supervisord.conf"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vim /etc/supervisord.conf\n\nminfds=65535                 ; (min. avail startup file descriptors;default 1024)\n")))))}m.isMDXComponent=!0}}]);