"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[9217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return n?o.createElement(g,i(i({ref:t},d),{},{components:n})):o.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={title:"BE development and debugging environment under Linux",language:"en"},i=void 0,l={unversionedId:"developer-guide/be-vscode-dev",id:"developer-guide/be-vscode-dev",title:"BE development and debugging environment under Linux",description:"\x3c!--",source:"@site/community/developer-guide/be-vscode-dev.md",sourceDirName:"developer-guide",slug:"/developer-guide/be-vscode-dev",permalink:"/community/developer-guide/be-vscode-dev",draft:!1,tags:[],version:"current",frontMatter:{title:"BE development and debugging environment under Linux",language:"en"},sidebar:"community",previous:{title:"FE development and debugging environment - Visual Studio Code (VSCode)",permalink:"/community/developer-guide/fe-vscode-dev"},next:{title:"Java Format Code",permalink:"/community/developer-guide/java-format-code"}},p={},s=[{value:"initial preparation work",id:"initial-preparation-work",level:2},{value:"Compile",id:"compile",level:2},{value:"Deployment and debugging(GDB)",id:"deployment-and-debugginggdb",level:2},{value:"Debugging(LLDB)",id:"debugginglldb",level:2}],d={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"apache-doris-be-development-and-debugging"},"Apache Doris Be development and debugging"),(0,r.kt)("h2",{id:"initial-preparation-work"},"initial preparation work"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This tutorial was conducted under Ubuntu 20.04")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The name of the BE binary that appears in this doc is ",(0,r.kt)("inlineCode",{parentName:"strong"},"doris_be"),", which was ",(0,r.kt)("inlineCode",{parentName:"strong"},"palo_be")," in previous versions.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the doris source code"),(0,r.kt)("p",{parentName:"li"},"URL\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris"},"apache/doris: Apache Doris (github.com)"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install GCC 8.3.1+, Oracle JDK 1.8+, Python 2.7+, confirm that the gcc, java, python commands point to the correct version, and set the JAVA_HOME environment variable")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install other dependent packages"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt install build-essential openjdk-8-jdk maven cmake byacc flex automake libtool-bin bison binutils-dev libiberty-dev zip unzip libncurses5-dev curl git ninja-build python brotli\nsudo add-apt-repository ppa:ubuntu-toolchain-r/ppa\nsudo apt update\nsudo apt install gcc-10 g++-10 \nsudo apt-get install autoconf automake libtool autopoint\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"install : openssl libssl-dev")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt install -y openssl libssl-dev\n")),(0,r.kt)("h2",{id:"compile"},"Compile"),(0,r.kt)("p",null,"The following steps are carried out in the /home/workspace directory"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"dowload source")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/apache/doris.git \n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Compile third-party dependency packages")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," cd /home/workspace/doris/thirdparty\n ./build-thirdparty.sh\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Compile doris product code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd /home/workspace/doris\n./build.sh\n")),(0,r.kt)("p",null,"Note: This compilation has the following instructions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./build.sh  #Compile be and fe at the same time\n./build.sh  --be #Only compile be\n./build.sh  --fe #Only compilefe\n./build.sh  --fe --be --clean#Delete and compile be fe at the same time\n./build.sh  --fe  --clean#Delete and compile fe\n./build.sh  --be  --clean#Delete and compile be\n./build.sh  --be --fe  --clean#Delete and compile be fe at the same time\n")),(0,r.kt)("p",null,"If nothing happens, the compilation should be successful, and the final deployment file will be output to the /home/workspace/doris/output/ directory. If you still encounter other problems, you can refer to the doris installation document ",(0,r.kt)("a",{parentName:"p",href:"http://doris.apache.org"},"http://doris.apache.org"),"."),(0,r.kt)("h2",{id:"deployment-and-debugginggdb"},"Deployment and debugging(GDB)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Authorize be compilation result files")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"chmod  /home/workspace/doris/output/be/lib/doris_be\n")),(0,r.kt)("p",null,"Note: /home/workspace/doris/output/be/lib/doris_be is the executable file of be."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Create a data storage directory")),(0,r.kt)("p",null,"By viewing /home/workspace/doris/output/be/conf/be.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# INFO, WARNING, ERROR, FATAL\nsys_log_level = INFO\nbe_port = 9060\nbe_rpc_port = 9070\nwebserver_port = 8040\nheartbeat_service_port = 9050\nbrpc_port = 8060\n\n# Note that there should at most one ip match this list.\n# If no ip match this rule, will choose one randomly.\n# use CIDR format, e.g. 10.10.10.0/\n# Default value is empty.\npriority_networks = 192.168.59.0/24 # data root path, separate by ';'\nstorage_root_path = /soft/be/storage \n# sys_log_dir = ${PALO_HOME}/log\n# sys_log_roll_mode = SIZE-MB-\n# sys_log_roll_num =\n# sys_log_verbose_modules =\n# log_buffer_level = -\n# palo_cgroups \n")),(0,r.kt)("p",null,"Need to create this folder, this is where the be data is stored"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir -p /soft/be/storage\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open vscode, and open the directory where the be source code is located. In this case, open the directory as ",(0,r.kt)("strong",{parentName:"p"},"/home/workspace/doris/"),"\uff0cFor details on how to vscode, refer to the online tutorial")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the vscode ms c++ debugging plug-in, the plug-in identified by the red box in the figure below"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(17673).Z,width:"1718",height:"888"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Create a launch.json file, the content of the file is as follows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "name": "(gdb) Launch",\n            "type": "cppdbg",\n            "request": "launch",\n            "program": "/home/workspace/doris/output/be/lib/doris_be",\n            "args": [],\n            "stopAtEntry": false,\n            "cwd": "/home/workspace/doris/",\n            "environment": [{"name":"PALO_HOME","value":"/home/workspace/doris/output/be/"},\n                            {"name":"UDF_RUNTIME_DIR","value":"/home/workspace/doris/output/be/lib/udf-runtime"},\n                            {"name":"LOG_DIR","value":"/home/workspace/doris/output/be/log"},\n                            {"name":"PID_DIR","value":"/home/workspace/doris/output/be/bin"}\n                           ],\n            "externalConsole": true,\n            "MIMode": "gdb",\n            "setupCommands": [\n                {\n                    "description": "Enable pretty-printing for gdb",\n                    "text": "-enable-pretty-printing",\n                    "ignoreFailures": true\n                }\n            ]\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"Among them, environment defines several environment variables DORIS_HOME UDF_RUNTIME_DIR LOG_DIR PID_DIR, which are the environment variables needed when doris_be is running. If it is not set, the startup will fail"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: If you want attach (additional process) debugging, the configuration code is as follows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "version": "0.2.0",\n    "configurations": [\n        {\n          "name": "(gdb) Launch",\n          "type": "cppdbg",\n          "request": "attach",\n          "program": "/home/workspace/doris/output/lib/doris_be",\n          "processId":,\n          "MIMode": "gdb",\n          "internalConsoleOptions":"openOnSessionStart",\n          "setupCommands": [\n                {\n                    "description": "Enable pretty-printing for gdb",\n                    "text": "-enable-pretty-printing",\n                    "ignoreFailures": true\n                }\n            ]\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"In the configuration ",(0,r.kt)("strong",{parentName:"p"},'"request": "attach", "processId": PID'),", these two configurations are the key points: set the debug mode of gdb to attach and attach the processId of the process, otherwise it will fail. To find the process id, you can enter the following command in the command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ps -ef | grep palo*\n")),(0,r.kt)("p",null,"As shown in the figure:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6529).Z,width:"1188",height:"65"})),(0,r.kt)("p",null,"Among them, 15200 is the process id of the currently running be."),(0,r.kt)("p",null,"An example of a complete launch.json is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},' {\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "name": "(gdb) Attach",\n            "type": "cppdbg",\n            "request": "attach",\n            "program": "/home/workspace/doris/output/be/lib/doris_be",\n            "processId": 17016,\n            "MIMode": "gdb",\n            "setupCommands": [\n                {\n                    "description": "Enable pretty-printing for gdb",\n                    "text": "-enable-pretty-printing",\n                    "ignoreFailures": true\n                }\n            ]\n        },\n        {\n            "name": "(gdb) Launch",\n            "type": "cppdbg",\n            "request": "launch",\n            "program": "/home/workspace/doris/output/be/lib/doris_be",\n            "args": [],\n            "stopAtEntry": false,\n            "cwd": "/home/workspace/doris/output/be",\n            "environment": [\n                {\n                    "name": "DORIS_HOME",\n                    "value": "/home/workspace/doris/output/be"\n                },\n                {\n                    "name": "UDF_RUNTIME_DIR",\n                    "value": "/home/workspace/doris/output/be/lib/udf-runtime"\n                },\n                {\n                    "name": "LOG_DIR",\n                    "value": "/home/workspace/doris/output/be/log"\n                },\n                {\n                    "name": "PID_DIR",\n                    "value": "/home/workspace/doris/output/be/bin"\n                }\n            ],\n            "externalConsole": false,\n            "MIMode": "gdb",\n            "setupCommands": [\n                {\n                    "description": "Enable pretty-printing for gdb",\n                    "text": "-enable-pretty-printing",\n                    "ignoreFailures": true\n                }\n            ]\n        }\n    ]\n}\n')),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click to debug"),(0,r.kt)("p",{parentName:"li"},"You can start your debugging journey with the rest,"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(84754).Z,width:"1718",height:"888"})),(0,r.kt)("h2",{id:"debugginglldb"},"Debugging(LLDB)"),(0,r.kt)("p",null,"lldb's attach mode is fast than gdb\uff0cand the usage is similar to gdb. we should install plugin ",(0,r.kt)("inlineCode",{parentName:"p"},"CodeLLDB"),", then add config to launch:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "CodeLLDB attach",\n    "type": "lldb",\n    "request": "attach",\n    "program": "${workspaceFolder}/output/be/lib/doris_be",\n    "pid":"${command:pickMyProcess}"\n}\n')),(0,r.kt)("p",null,"It should be noted that this method requires the system ",(0,r.kt)("inlineCode",{parentName:"p"},"glibc")," version to be ",(0,r.kt)("inlineCode",{parentName:"p"},"2.18+"),". you can refer ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/JaySon-Huang/63dcc6c011feb5bd6deb1ef0cf1a9b96"},"Get VSCode CodeLLDB plugin work on CentOS 7")," to make plugin work\u3002"))}u.isMDXComponent=!0},84754:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-20210618091006146-fa06a2d90e786b2f5dbd43a762327b73.png"},6529:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-20210618095240216-9950478a7c5a4193588b1c3a8d9ccc3b.png"},17673:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-20210618104042192-fcf6295f143c1d96b42d1b3855d95264.png"}}]);