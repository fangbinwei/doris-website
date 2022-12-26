"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[35001],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>D});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),d=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=d(r),k=n,D=s["".concat(o,".").concat(k)]||s[k]||m[k]||l;return r?a.createElement(D,i(i({ref:t},u),{},{components:r})):a.createElement(D,i({ref:t},u))}));function D(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:n,i[1]=p;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},69205:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const l={title:"LDAP",language:"zh-CN"},i=void 0,p={unversionedId:"administrator-guide/ldap",id:"version-0.15/administrator-guide/ldap",title:"LDAP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/administrator-guide/ldap.md",sourceDirName:"administrator-guide",slug:"/administrator-guide/ldap",permalink:"/zh-CN/docs/0.15/administrator-guide/ldap",draft:!1,tags:[],version:"0.15",frontMatter:{title:"LDAP",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6743\u9650\u7ba1\u7406",permalink:"/zh-CN/docs/0.15/administrator-guide/privilege"},next:{title:"\u8d44\u6e90\u7ba1\u7406",permalink:"/zh-CN/docs/0.15/administrator-guide/resource-management"}},o={},d=[{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:2},{value:"\u542f\u7528LDAP\u8ba4\u8bc1",id:"\u542f\u7528ldap\u8ba4\u8bc1",level:2},{value:"server\u7aef\u914d\u7f6e",id:"server\u7aef\u914d\u7f6e",level:3},{value:"\u914d\u7f6efe/conf/ldap.conf\u6587\u4ef6\uff1a",id:"\u914d\u7f6efeconfldapconf\u6587\u4ef6",level:4},{value:"\u8bbe\u7f6eLDAP\u7ba1\u7406\u5458\u5bc6\u7801\uff1a",id:"\u8bbe\u7f6eldap\u7ba1\u7406\u5458\u5bc6\u7801",level:4},{value:"Client\u7aef\u914d\u7f6e",id:"client\u7aef\u914d\u7f6e",level:3},{value:"LDAP\u8ba4\u8bc1\u8be6\u89e3",id:"ldap\u8ba4\u8bc1\u8be6\u89e3",level:2},{value:"LDAP\u9a8c\u8bc1\u767b\u5f55\u8be6\u89e3",id:"ldap\u9a8c\u8bc1\u767b\u5f55\u8be6\u89e3",level:3},{value:"1:Doris\u548cLDAP\u4e2d\u90fd\u5b58\u5728\u8d26\u6237\uff1a",id:"1doris\u548cldap\u4e2d\u90fd\u5b58\u5728\u8d26\u6237",level:4},{value:"2:LDAP\u4e2d\u5b58\u5728\u7528\u6237\uff0cDoris\u4e2d\u4e0d\u5b58\u5728\u5bf9\u5e94\u8d26\u6237\uff1a",id:"2ldap\u4e2d\u5b58\u5728\u7528\u6237doris\u4e2d\u4e0d\u5b58\u5728\u5bf9\u5e94\u8d26\u6237",level:4},{value:"3:LDAP\u4e0d\u5b58\u5728\u7528\u6237\uff1a",id:"3ldap\u4e0d\u5b58\u5728\u7528\u6237",level:4},{value:"LDAP\u7ec4\u6388\u6743\u8be6\u89e3",id:"ldap\u7ec4\u6388\u6743\u8be6\u89e3",level:3},{value:"LDAP\u9a8c\u8bc1\u7684\u5c40\u9650",id:"ldap\u9a8c\u8bc1\u7684\u5c40\u9650",level:2}],u={toc:d};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ldap"},"LDAP"),(0,n.kt)("p",null,"\u63a5\u5165\u7b2c\u4e09\u65b9LDAP\u670d\u52a1\u4e3aDoris\u63d0\u4f9b\u9a8c\u8bc1\u767b\u5f55\u548c\u7ec4\u6388\u6743\u670d\u52a1\u3002"),(0,n.kt)("p",null,"LDAP\u9a8c\u8bc1\u767b\u5f55\u6307\u7684\u662f\u63a5\u5165LDAP\u670d\u52a1\u7684\u5bc6\u7801\u9a8c\u8bc1\u6765\u8865\u5145Doris\u7684\u9a8c\u8bc1\u767b\u5f55\u3002Doris\u4f18\u5148\u4f7f\u7528LDAP\u9a8c\u8bc1\u7528\u6237\u5bc6\u7801\uff0c\u5982\u679cLDAP\u670d\u52a1\u4e2d\u4e0d\u5b58\u5728\u8be5\u7528\u6237\u5219\u7ee7\u7eed\u4f7f\u7528Doris\u9a8c\u8bc1\u5bc6\u7801\uff0c\u5982\u679cLDAP\u5bc6\u7801\u6b63\u786e\u4f46\u662fDoris\u4e2d\u6ca1\u6709\u5bf9\u5e94\u8d26\u6237\u5219\u521b\u5efa\u4e34\u65f6\u7528\u6237\u767b\u5f55Doris\u3002"),(0,n.kt)("p",null,"LDAP\u7ec4\u6388\u6743\u662f\u5c06LDAP\u4e2d\u7684group\u6620\u5c04\u5230Doris\u4e2d\u7684Role\uff0c\u5982\u679c\u7528\u6237\u5728LDAP\u4e2d\u5c5e\u4e8e\u591a\u4e2a\u7528\u6237\u7ec4\uff0c\u767b\u5f55Doris\u540e\u7528\u6237\u5c06\u83b7\u5f97\u6240\u6709\u7ec4\u5bf9\u5e94Role\u7684\u6743\u9650\uff0c\u8981\u6c42\u7ec4\u540d\u4e0eRole\u540d\u5b57\u76f8\u540c\u3002"),(0,n.kt)("h2",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"LDAP\uff1a \u8f7b\u91cf\u7ea7\u76ee\u5f55\u8bbf\u95ee\u534f\u8bae\uff0c\u80fd\u591f\u5b9e\u73b0\u8d26\u53f7\u5bc6\u7801\u7684\u96c6\u4e2d\u7ba1\u7406\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6743\u9650 Privilege\uff1a\u6743\u9650\u4f5c\u7528\u7684\u5bf9\u8c61\u662f\u8282\u70b9\u3001\u6570\u636e\u5e93\u6216\u8868\u3002\u4e0d\u540c\u7684\u6743\u9650\u4ee3\u8868\u4e0d\u540c\u7684\u64cd\u4f5c\u8bb8\u53ef\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u89d2\u8272 Role\uff1aDoris\u53ef\u4ee5\u521b\u5efa\u81ea\u5b9a\u4e49\u547d\u540d\u7684\u89d2\u8272\u3002\u89d2\u8272\u53ef\u4ee5\u88ab\u770b\u505a\u662f\u4e00\u7ec4\u6743\u9650\u7684\u96c6\u5408\u3002")),(0,n.kt)("h2",{id:"\u542f\u7528ldap\u8ba4\u8bc1"},"\u542f\u7528LDAP\u8ba4\u8bc1"),(0,n.kt)("h3",{id:"server\u7aef\u914d\u7f6e"},"server\u7aef\u914d\u7f6e"),(0,n.kt)("p",null,"\u9700\u8981\u5728fe/conf/ldap.conf\u6587\u4ef6\u4e2d\u914d\u7f6eLDAP\u57fa\u672c\u4fe1\u606f\uff0c\u53e6\u6709LDAP\u7ba1\u7406\u5458\u5bc6\u7801\u9700\u8981\u4f7f\u7528sql\u8bed\u53e5\u8fdb\u884c\u8bbe\u7f6e\u3002"),(0,n.kt)("h4",{id:"\u914d\u7f6efeconfldapconf\u6587\u4ef6"},"\u914d\u7f6efe/conf/ldap.conf\u6587\u4ef6\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ldap_authentication_enabled = false",(0,n.kt)("br",{parentName:"p"}),"\n","\u8bbe\u7f6e\u503c\u4e3a\u201ctrue\u201d\u542f\u7528LDAP\u9a8c\u8bc1\uff1b\u5f53\u503c\u4e3a\u201cfalse\u201d\u65f6\uff0c\u4e0d\u542f\u7528LDAP\u9a8c\u8bc1\uff0c\u8be5\u914d\u7f6e\u6587\u4ef6\u7684\u5176\u4ed6\u914d\u7f6e\u9879\u90fd\u65e0\u6548\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ldap_host = 127.0.0.1",(0,n.kt)("br",{parentName:"p"}),"\n","LDAP\u670d\u52a1ip\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ldap_port = 389",(0,n.kt)("br",{parentName:"p"}),"\n","LDAP\u670d\u52a1\u7aef\u53e3\uff0c\u9ed8\u8ba4\u660e\u6587\u4f20\u8f93\u7aef\u53e3\u4e3a389\uff0c\u76ee\u524dDoris\u7684LDAP\u529f\u80fd\u4ec5\u652f\u6301\u660e\u6587\u5bc6\u7801\u4f20\u8f93\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ldap_admin_name = cn=admin,dc=domain,dc=com",(0,n.kt)("br",{parentName:"p"}),"\n","LDAP\u7ba1\u7406\u5458\u8d26\u6237\u201cDistinguished Name\u201d\u3002\u5f53\u7528\u6237\u4f7f\u7528LDAP\u9a8c\u8bc1\u767b\u5f55Doris\u65f6\uff0cDoris\u4f1a\u7ed1\u5b9a\u8be5\u7ba1\u7406\u5458\u8d26\u6237\u5728LDAP\u4e2d\u641c\u7d22\u7528\u6237\u4fe1\u606f\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ldap_user_basedn = ou=people,dc=domain,dc=com",(0,n.kt)("br",{parentName:"p"}),"\n","Doris\u5728LDAP\u4e2d\u641c\u7d22\u7528\u6237\u4fe1\u606f\u65f6\u7684base dn\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ldap_user_filter = (&(uid={login}))  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Doris\u5728LDAP\u4e2d\u641c\u7d22\u7528\u6237\u4fe1\u606f\u65f6\u7684\u8fc7\u6ee4\u6761\u4ef6\uff0c\u5360\u4f4d\u7b26\u201c{login}\u201d\u4f1a\u88ab\u66ff\u6362\u4e3a\u767b\u5f55\u7528\u6237\u540d\u3002\u5fc5\u987b\u4fdd\u8bc1\u901a\u8fc7\u8be5\u8fc7\u6ee4\u6761\u4ef6\u641c\u7d22\u7684\u7528\u6237\u552f\u4e00\uff0c\u5426\u5219Doris\u65e0\u6cd5\u901a\u8fc7LDAP\u9a8c\u8bc1\u5bc6\u7801\uff0c\u767b\u5f55\u65f6\u4f1a\u51fa\u73b0\u201cERROR 5081 (42000): user is not unique in LDAP server.\u201d\u7684\u9519\u8bef\u4fe1\u606f\u3002"),(0,n.kt)("p",{parentName:"li"},"\u4f8b\u5982\u4f7f\u7528LDAP\u7528\u6237\u8282\u70b9uid\u5c5e\u6027\u4f5c\u4e3a\u767b\u5f55Doris\u7684\u7528\u6237\u540d\u53ef\u4ee5\u914d\u7f6e\u8be5\u9879\u4e3a\uff1a",(0,n.kt)("br",{parentName:"p"}),"\n","ldap_user_filter = (&(uid={login}))\uff1b",(0,n.kt)("br",{parentName:"p"}),"\n","\u4f7f\u7528LDAP\u7528\u6237\u90ae\u7bb1\u524d\u7f00\u4f5c\u4e3a\u7528\u6237\u540d\u53ef\u914d\u7f6e\u8be5\u9879\uff1a",(0,n.kt)("br",{parentName:"p"}),"\n","ldap_user_filter = (&(mail={login}@baidu.com))\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ldap_group_basedn = ou=group,dc=domain,dc=com",(0,n.kt)("br",{parentName:"p"}),"\n","Doris\u5728LDAP\u4e2d\u641c\u7d22\u7ec4\u4fe1\u606f\u65f6\u7684base dn\u3002\u5982\u679c\u4e0d\u914d\u7f6e\u8be5\u9879\uff0c\u5c06\u4e0d\u542f\u7528LDAP\u7ec4\u6388\u6743\u3002"))),(0,n.kt)("h4",{id:"\u8bbe\u7f6eldap\u7ba1\u7406\u5458\u5bc6\u7801"},"\u8bbe\u7f6eLDAP\u7ba1\u7406\u5458\u5bc6\u7801\uff1a"),(0,n.kt)("p",null,"\u914d\u7f6e\u597dldap.conf\u6587\u4ef6\u540e\u542f\u52a8fe\uff0c\u4f7f\u7528root\u6216admin\u8d26\u53f7\u767b\u5f55Doris\uff0c\u6267\u884csql\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"set ldap_admin_password = 'ldap_admin_password';\n")),(0,n.kt)("h3",{id:"client\u7aef\u914d\u7f6e"},"Client\u7aef\u914d\u7f6e"),(0,n.kt)("p",null,"\u5ba2\u6237\u7aef\u4f7f\u7528LDAP\u9a8c\u8bc1\u9700\u8981\u542f\u7528mysql\u5ba2\u6237\u7aef\u660e\u6587\u9a8c\u8bc1\u63d2\u4ef6\uff0c\u4f7f\u7528\u547d\u4ee4\u884c\u767b\u5f55Doris\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u4e24\u79cd\u65b9\u5f0f\u4e4b\u4e00\u542f\u7528mysql\u660e\u6587\u9a8c\u8bc1\u63d2\u4ef6\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u73af\u5883\u53d8\u91cfLIBMYSQL_ENABLE_CLEARTEXT_PLUGIN\u503c1\u3002"),(0,n.kt)("p",{parentName:"li"},"\u4f8b\u5982\u5728linux\u6216\u8005max\u73af\u5883\u4e2d\u53ef\u4ee5\u4f7f\u7528\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'echo "export LIBMYSQL_ENABLE_CLEARTEXT_PLUGIN=1" >> \uff5e/.bash_profile && source \uff5e/.bash_profile\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6bcf\u6b21\u767b\u5f55Doris\u65f6\u6dfb\u52a0\u53c2\u6570\u201c--enable-cleartext-plugin\u201d\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"mysql -hDORIS_HOST -PDORIS_PORT -u user -p --enable-cleartext-plugin\n\n\u8f93\u5165ldap\u5bc6\u7801\n")))),(0,n.kt)("h2",{id:"ldap\u8ba4\u8bc1\u8be6\u89e3"},"LDAP\u8ba4\u8bc1\u8be6\u89e3"),(0,n.kt)("p",null,"LDAP\u5bc6\u7801\u9a8c\u8bc1\u548c\u7ec4\u6388\u6743\u662fDoris\u5bc6\u7801\u9a8c\u8bc1\u548c\u6388\u6743\u7684\u8865\u5145\uff0c\u5f00\u542fLDAP\u529f\u80fd\u5e76\u4e0d\u80fd\u5b8c\u5168\u66ff\u4ee3Doris\u7684\u5bc6\u7801\u9a8c\u8bc1\u548c\u6388\u6743\uff0c\u800c\u662f\u4e0eDoris\u5bc6\u7801\u9a8c\u8bc1\u548c\u6388\u6743\u5e76\u5b58\u3002"),(0,n.kt)("h3",{id:"ldap\u9a8c\u8bc1\u767b\u5f55\u8be6\u89e3"},"LDAP\u9a8c\u8bc1\u767b\u5f55\u8be6\u89e3"),(0,n.kt)("p",null,"\u5f00\u542fLDAP\u540e\uff0c\u7528\u6237\u5728Doris\u548cDLAP\u4e2d\u5b58\u5728\u4ee5\u4e0b\u51e0\u79cd\u60c5\u51b5\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"LDAP\u7528\u6237"),(0,n.kt)("th",{parentName:"tr",align:null},"Doris\u7528\u6237"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,n.kt)("th",{parentName:"tr",align:null},"\u767b\u5f55\u60c5\u51b5"),(0,n.kt)("th",{parentName:"tr",align:null},"\u767b\u5f55Doris\u7684\u7528\u6237"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5b58\u5728"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5b58\u5728"),(0,n.kt)("td",{parentName:"tr",align:null},"LDAP\u5bc6\u7801"),(0,n.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u6210\u529f"),(0,n.kt)("td",{parentName:"tr",align:null},"Doris\u7528\u6237")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5b58\u5728"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5b58\u5728"),(0,n.kt)("td",{parentName:"tr",align:null},"Doris\u5bc6\u7801"),(0,n.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u5931\u8d25"),(0,n.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4e0d\u5b58\u5728"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5b58\u5728"),(0,n.kt)("td",{parentName:"tr",align:null},"Doris\u5bc6\u7801"),(0,n.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u6210\u529f"),(0,n.kt)("td",{parentName:"tr",align:null},"Doris\u7528\u6237")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5b58\u5728"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4e0d\u5b58\u5728"),(0,n.kt)("td",{parentName:"tr",align:null},"LDAP\u5bc6\u7801"),(0,n.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u6210\u529f"),(0,n.kt)("td",{parentName:"tr",align:null},"Ldap\u4e34\u65f6\u7528\u6237")))),(0,n.kt)("p",null,"\u5f00\u542fLDAP\u540e\uff0c\u7528\u6237\u4f7f\u7528mysql client\u767b\u5f55\u65f6\uff0cDoris\u4f1a\u5148\u901a\u8fc7LDAP\u670d\u52a1\u9a8c\u8bc1\u7528\u6237\u5bc6\u7801\uff0c\u5982\u679cLDAP\u5b58\u5728\u7528\u6237\u4e14\u5bc6\u7801\u6b63\u786e\uff0cDoris\u5219\u4f7f\u7528\u8be5\u7528\u6237\u767b\u5f55\uff1b\u6b64\u65f6Doris\u82e5\u5b58\u5728\u5bf9\u5e94\u8d26\u6237\u5219\u76f4\u63a5\u767b\u5f55\u8be5\u8d26\u6237\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u5bf9\u5e94\u8d26\u6237\u5219\u4e3a\u7528\u6237\u521b\u5efa\u4e34\u65f6\u8d26\u6237\u5e76\u767b\u5f55\u8be5\u8d26\u6237\u3002\u4e34\u65f6\u8d26\u6237\u5177\u6709\u5177\u6709\u76f8\u5e94\u5bf9\u6743\u9650\uff08\u53c2\u89c1LDAP\u7ec4\u6388\u6743\uff09\uff0c\u4ec5\u5bf9\u5f53\u524d\u8fde\u63a5\u6709\u6548\uff0cdoris\u4e0d\u4f1a\u521b\u5efa\u8be5\u7528\u6237\uff0c\u4e5f\u4e0d\u4f1a\u4ea7\u751f\u521b\u5efa\u7528\u6237\u5bf9\u5143\u6570\u636e\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u5982\u679cLDAP\u670d\u52a1\u4e2d\u4e0d\u5b58\u5728\u767b\u5f55\u7528\u6237\uff0c\u5219\u4f7f\u7528Doris\u8fdb\u884c\u5bc6\u7801\u8ba4\u8bc1\u3002"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u5047\u8bbe\u5df2\u5f00\u542fLDAP\u8ba4\u8bc1\uff0c\u914d\u7f6eldap_user_filter = (&(uid={login}))\uff0c\u4e14\u5176\u4ed6\u914d\u7f6e\u9879\u90fd\u6b63\u786e,\u5ba2\u6237\u7aef\u8bbe\u7f6e\u73af\u5883\u53d8\u91cfLIBMYSQL_ENABLE_CLEARTEXT_PLUGIN=1"),(0,n.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,n.kt)("h4",{id:"1doris\u548cldap\u4e2d\u90fd\u5b58\u5728\u8d26\u6237"},"1:Doris\u548cLDAP\u4e2d\u90fd\u5b58\u5728\u8d26\u6237\uff1a"),(0,n.kt)("p",null,"\u5b58\u5728Doris\u8d26\u6237\uff1ajack@'172.10.1.10'\uff0c\u5bc6\u7801\uff1a123456",(0,n.kt)("br",{parentName:"p"}),"\n","LDAP\u7528\u6237\u8282\u70b9\u5b58\u5728\u5c5e\u6027\uff1auid: jack \u7528\u6237\u5bc6\u7801\uff1aabcdef",(0,n.kt)("br",{parentName:"p"}),"\n","\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u767b\u5f55Doris\u53ef\u4ee5\u767b\u5f55jack@'172.10.1.10'\u8d26\u6237\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mysql -hDoris_HOST -PDoris_PORT -ujack -p abcdef\n")),(0,n.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5c06\u767b\u5f55\u5931\u8d25\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mysql -hDoris_HOST -PDoris_PORT -ujack -p 123456\n")),(0,n.kt)("h4",{id:"2ldap\u4e2d\u5b58\u5728\u7528\u6237doris\u4e2d\u4e0d\u5b58\u5728\u5bf9\u5e94\u8d26\u6237"},"2:LDAP\u4e2d\u5b58\u5728\u7528\u6237\uff0cDoris\u4e2d\u4e0d\u5b58\u5728\u5bf9\u5e94\u8d26\u6237\uff1a"),(0,n.kt)("p",null,"LDAP\u7528\u6237\u8282\u70b9\u5b58\u5728\u5c5e\u6027\uff1auid: jack \u7528\u6237\u5bc6\u7801\uff1aabcdef",(0,n.kt)("br",{parentName:"p"}),"\n","\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u4e34\u65f6\u7528\u6237\u5e76\u767b\u5f55jack@'%'\uff0c\u4e34\u65f6\u7528\u6237\u5177\u6709\u57fa\u672c\u6743\u9650 DatabasePrivs\uff1aSelect_priv\uff0c \u7528\u6237\u9000\u51fa\u767b\u5f55\u540eDoris\u5c06\u5220\u9664\u8be5\u4e34\u65f6\u7528\u6237\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mysql -hDoris_HOST -PDoris_PORT -ujack -p abcdef\n")),(0,n.kt)("h4",{id:"3ldap\u4e0d\u5b58\u5728\u7528\u6237"},"3:LDAP\u4e0d\u5b58\u5728\u7528\u6237\uff1a"),(0,n.kt)("p",null,"\u5b58\u5728Doris\u8d26\u6237\uff1ajack@'172.10.1.10'\uff0c\u5bc6\u7801\uff1a123456",(0,n.kt)("br",{parentName:"p"}),"\n","\u4f7f\u7528Doris\u5bc6\u7801\u767b\u5f55\u8d26\u6237\uff0c\u6210\u529f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mysql -hDoris_HOST -PDoris_PORT -ujack -p 123456\n")),(0,n.kt)("h3",{id:"ldap\u7ec4\u6388\u6743\u8be6\u89e3"},"LDAP\u7ec4\u6388\u6743\u8be6\u89e3"),(0,n.kt)("p",null,"DLAP\u7528\u6237dn\u662fLDAP\u7ec4\u8282\u70b9\u7684\u201cmember\u201d\u5c5e\u6027\u5219Doris\u8ba4\u4e3a\u7528\u6237\u5c5e\u4e8e\u8be5\u7ec4\u3002LDAP\u7ec4\u6388\u6743\u662f\u5c06LDAP\u4e2d\u7684group\u6620\u5c04\u5230Doris\u4e2d\u7684role\uff0c\u5e76\u5c06\u6240\u6709\u5bf9\u5e94\u7684role\u6743\u9650\u6388\u4e88\u767b\u5f55\u7528\u6237\uff0c\u7528\u6237\u9000\u51fa\u767b\u5f55\u540eDoris\u4f1a\u64a4\u9500\u5bf9\u5e94\u7684role\u6743\u9650\u3002\u5728\u4f7f\u7528LDAP\u7ec4\u6388\u6743\u524d\u5e94\u8be5\u5728Doris\u4e2d\u521b\u5efa\u76f8\u5e94\u5bf9role\uff0c\u5e76\u4e3arole\u6388\u6743\u3002"),(0,n.kt)("p",null,"\u767b\u5f55\u7528\u6237\u6743\u9650\u8ddfDoris\u7528\u6237\u548c\u7ec4\u6743\u9650\u6709\u5173\uff0c\u89c1\u4e0b\u8868\uff1a\n|LDAP\u7528\u6237|Doris\u7528\u6237|\u767b\u5f55\u7528\u6237\u7684\u6743\u9650|\n|--|--|--|\n|\u5b58\u5728|\u5b58\u5728|LDAP\u7ec4\u6743\u9650 + Doris\u7528\u6237\u6743\u9650|\n|\u4e0d\u5b58\u5728|\u5b58\u5728|Doris\u7528\u6237\u6743\u9650|\n|\u5b58\u5728|\u4e0d\u5b58\u5728|LDAP\u7ec4\u6743\u9650|"),(0,n.kt)("p",null,"\u5982\u679c\u767b\u5f55\u7684\u7528\u6237\u4e3a\u4e34\u65f6\u7528\u6237\uff0c\u4e14\u4e0d\u5b58\u5728\u7ec4\u6743\u9650\uff0c\u5219\u8be5\u7528\u6237\u9ed8\u8ba4\u5177\u6709information_schema\u7684select_priv\u6743\u9650"),(0,n.kt)("p",null,"\u4e3e\u4f8b\uff1a",(0,n.kt)("br",{parentName:"p"}),"\n","LDAP\u7528\u6237dn\u662fLDAP\u7ec4\u8282\u70b9\u7684\u201cmember\u201d\u5c5e\u6027\u5219\u8ba4\u4e3a\u7528\u6237\u5c5e\u4e8e\u8be5\u7ec4\uff0cDoris\u4f1a\u622a\u53d6\u7ec4dn\u7684\u7b2c\u4e00\u4e2aRdn\u4f5c\u4e3a\u7ec4\u540d\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u4f8b\u5982\u7528\u6237dn\u4e3a\u201cuid=jack,ou=aidp,dc=domain,dc=com\u201d\uff0c \u7ec4\u4fe1\u606f\u5982\u4e0b\uff1a  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"dn: cn=doris_rd,ou=group,dc=domain,dc=com  \nobjectClass: groupOfNames  \nmember: uid=jack,ou=aidp,dc=domain,dc=com  \n")),(0,n.kt)("p",null,"\u5219\u7ec4\u540d\u4e3adoris_rd\u3002"),(0,n.kt)("p",null,"\u5047\u5982jack\u8fd8\u5c5e\u4e8eLDAP\u7ec4doris_qa\u3001doris_pm\uff1bDoris\u5b58\u5728role\uff1adoris_rd\u3001doris_qa\u3001doris_pm\uff0c\u5728\u4f7f\u7528LDAP\u9a8c\u8bc1\u767b\u5f55\u540e\uff0c\u7528\u6237\u4e0d\u4f46\u5177\u6709\u8be5\u8d26\u6237\u539f\u6709\u7684\u6743\u9650\uff0c\u8fd8\u5c06\u83b7\u5f97role doris_rd\u3001doris_qa\u548cdoris_pm\u7684\u6743\u9650\u3002"),(0,n.kt)("h2",{id:"ldap\u9a8c\u8bc1\u7684\u5c40\u9650"},"LDAP\u9a8c\u8bc1\u7684\u5c40\u9650"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u76ee\u524dDoris\u7684LDAP\u529f\u80fd\u53ea\u652f\u6301\u660e\u6587\u5bc6\u7801\u9a8c\u8bc1\uff0c\u5373\u7528\u6237\u767b\u5f55\u65f6\uff0c\u5bc6\u7801\u5728client\u4e0efe\u4e4b\u95f4\u3001fe\u4e0eLDAP\u670d\u52a1\u4e4b\u95f4\u4ee5\u660e\u6587\u7684\u5f62\u5f0f\u4f20\u8f93\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5f53\u524d\u7684LDAP\u9a8c\u8bc1\u53ea\u652f\u6301\u5728mysql\u534f\u8bae\u4e0b\u8fdb\u884c\u5bc6\u7801\u9a8c\u8bc1\uff0c\u5982\u679c\u4f7f\u7528Http\u63a5\u53e3\u5219\u65e0\u6cd5\u4f7f\u7528LDAP\u7528\u6237\u8fdb\u884c\u9a8c\u8bc1\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4e34\u65f6\u7528\u6237\u4e0d\u5177\u6709\u7528\u6237\u5c5e\u6027\u3002")))}s.isMDXComponent=!0}}]);