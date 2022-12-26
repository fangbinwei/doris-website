"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[7777],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>E});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,E=m["".concat(i,".").concat(u)]||m[u]||d[u]||l;return a?n.createElement(E,s(s({ref:t},c),{},{components:a})):n.createElement(E,s({ref:t},c))}));function E(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},99222:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"CREATE-USER",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-reference/Account-Management-Statements/CREATE-USER",id:"version-dev/sql-manual/sql-reference/Account-Management-Statements/CREATE-USER",title:"CREATE-USER",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-reference/Account-Management-Statements/CREATE-USER.md",sourceDirName:"sql-manual/sql-reference/Account-Management-Statements",slug:"/sql-manual/sql-reference/Account-Management-Statements/CREATE-USER",permalink:"/docs/dev/sql-manual/sql-reference/Account-Management-Statements/CREATE-USER",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-reference/Account-Management-Statements/CREATE-USER.md",tags:[],version:"dev",frontMatter:{title:"CREATE-USER",language:"en"},sidebar:"docs",previous:{title:"DROP-ROLE",permalink:"/docs/dev/sql-manual/sql-reference/Account-Management-Statements/DROP-ROLE"},next:{title:"DROP-USER",permalink:"/docs/dev/sql-manual/sql-reference/Account-Management-Statements/DROP-USER"}},i={},p=[{value:"CREATE-USER",id:"create-user",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-user"},"CREATE-USER"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"CREATE USER"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"The CREATE USER command is used to create a Doris user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER [IF EXISTS] user_identity [IDENTIFIED BY 'password']\n[DEFAULT ROLE 'role_name']\n[password_policy]\n\nuser_identity:\n    'user_name'@'host'\n    \npassword_policy:\n\n    1. PASSWORD_HISTORY [n|DEFAULT]\n    2. PASSWORD_EXPIRE [DEFAULT|NEVER|INTERVAL n DAY/HOUR/SECOND]\n    3. FAILED_LOGIN_ATTEMPTS n\n    4. PASSWORD_LOCK_TIME [n DAY/HOUR/SECOND|UNBOUNDED]\n")),(0,r.kt)("p",null,"In Doris, a user_identity uniquely identifies a user. user_identity consists of two parts, user_name and host, where username is the username. host Identifies the host address where the client connects. The host part can use % for fuzzy matching. If no host is specified, it defaults to '%', which means the user can connect to Doris from any host."),(0,r.kt)("p",null,"The host part can also be specified as a domain, the syntax is: 'user_name'@","['domain']",", even if it is surrounded by square brackets, Doris will think this is a domain and try to resolve its ip address. ."),(0,r.kt)("p",null,"If a role (ROLE) is specified, the newly created user will be automatically granted the permissions of the role. If not specified, the user has no permissions by default. The specified ROLE must already exist."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"password_policy")," is a clause used to specify policies related to password authentication login. Currently, the following policies are supported:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"PASSWORD_HISTORY")),(0,r.kt)("p",{parentName:"li"},"Whether to allow the current user to use historical passwords when resetting their passwords. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"PASSWORD_HISTORY 10")," means that it is forbidden to use the password set in the past 10 times as a new password. If set to ",(0,r.kt)("inlineCode",{parentName:"p"},"PASSWORD_HISTORY DEFAULT"),", the value in the global variable ",(0,r.kt)("inlineCode",{parentName:"p"},"password_history")," will be used. ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," means do not enable this feature. Default is 0.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"PASSWORD_EXPIRE")),(0,r.kt)("p",{parentName:"li"},"Set the expiration time of the current user's password. For example ",(0,r.kt)("inlineCode",{parentName:"p"},"PASSWORD_EXPIRE INTERVAL 10 DAY")," means the password will expire in 10 days. ",(0,r.kt)("inlineCode",{parentName:"p"},"PASSWORD_EXPIRE NEVER")," means that the password does not expire. If set to ",(0,r.kt)("inlineCode",{parentName:"p"},"PASSWORD_EXPIRE DEFAULT"),", the value in the global variable ",(0,r.kt)("inlineCode",{parentName:"p"},"default_password_lifetime")," is used. Defaults to NEVER (or 0), which means it will not expire.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"FAILED_LOGIN_ATTEMPTS")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PASSWORD_LOCK_TIME")),(0,r.kt)("p",{parentName:"li"},"When the current user logs in, if the user logs in with the wrong password for n times, the account will be locked, and the lock time is set. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"FAILED_LOGIN_ATTEMPTS 3 PASSWORD_LOCK_TIME 1 DAY")," means that if you log in wrongly for 3 times, the account will be locked for one day."),(0,r.kt)("p",{parentName:"li"},"A locked account can be actively unlocked through the ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER USER")," statement."))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a passwordless user (if host is not specified, it is equivalent to jack@'%')"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'jack';\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a user with a password to allow login from '172.10.1.10'"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER jack@'172.10.1.10' IDENTIFIED BY '123456';\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In order to avoid passing plaintext, use case 2 can also be created in the following way"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER jack@'172.10.1.10' IDENTIFIED BY PASSWORD '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9';\nThe encrypted content can be obtained through PASSWORD(), for example:\nSELECT PASSWORD('123456');\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a user that is allowed to log in from the '192.168' subnet, and specify its role as example_role"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'jack'@'192.168.%' DEFAULT ROLE 'example_role';\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a user that is allowed to log in from the domain 'example_domain'"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'jack'@['example_domain'] IDENTIFIED BY '12345';\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a user and assign a role"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'jack'@'%' IDENTIFIED BY '12345' DEFAULT ROLE 'my_role';\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a user, set the password to expire after 10 days, and set the account to be locked for one day if you log in failed for 3 times."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'jack' IDENTIFIED BY '12345' PASSWORD_EXPIRE INTERVAL 10 DAY FAILED_LOGIN_ATTEMPTS 3 PASSWORD_LOCK_TIME 1 DAY;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a user and restrict non-resetable passwords to the last 8 passwords used."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'jack' IDENTIFIED BY '12345' PASSWORD_HISTORY 8;\n")))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE, USER\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);