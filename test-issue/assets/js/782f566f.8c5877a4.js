"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[64355],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,N=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return a?n.createElement(N,o(o({ref:t},m),{},{components:a})):n.createElement(N,o({ref:t},m))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},67039:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"SELECT",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/SELECT",id:"version-dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/SELECT",title:"SELECT",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/SELECT.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/SELECT",permalink:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/SELECT",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/SELECT.md",tags:[],version:"dev",frontMatter:{title:"SELECT",language:"en"},sidebar:"docs",previous:{title:"INSERT",permalink:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT"},next:{title:"DELETE",permalink:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE"}},s={},p=[{value:"SELECT",id:"select",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"select"},"SELECT"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"SELECT"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("p",null,"Mainly introduces the use of Select syntax"),(0,r.kt)("p",null,"grammar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    [ALL | DISTINCT | DISTINCTROW | ALL EXCEPT ( col_name1 [, col_name2, col_name3, ...] )]\n    select_expr [, select_expr ...]\n    [FROM table_references\n      [PARTITION partition_list]\n      [TABLET tabletid_list]\n      [TABLESAMPLE sample_value [ROWS | PERCENT]\n        [REPEATABLE pos_seek]]\n    [WHERE where_condition]\n    [GROUP BY [GROUPING SETS | ROLLUP | CUBE] {col_name | expr | position}]\n    [HAVING where_condition]\n    [ORDER BY {col_name | expr | position}\n      [ASC | DESC], ...]\n    [LIMIT {[offset,] row_count | row_count OFFSET offset}]\n    [INTO OUTFILE 'file_name']\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Syntax Description:")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"select_expr, ... Columns retrieved and displayed in the result, when using an alias, as is optional.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"select_expr, ... Retrieved target table (one or more tables (including temporary tables generated by subqueries)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"where_definition retrieves the condition (expression), if there is a WHERE clause, the condition filters the row data. where_condition is an expression that evaluates to true for each row to be selected. Without the WHERE clause, the statement selects all rows. In WHERE expressions, you can use any MySQL supported functions and operators except aggregate functions")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ALL | DISTINCT ")," : to refresh the result set, all is all, distinct/distinctrow will refresh the duplicate columns, the default is all")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("version",{since:"1.2",type:"inline"}," `ALL EXCEPT`: Filter on the full (all) result set, except specifies the name of one or more columns to be excluded from the full result set. All matching column names will be ignored in the output. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"INTO OUTFILE 'file_name' ")," : save the result to a new file (which did not exist before), the difference lies in the save format.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Group by having"),": Group the result set, and brush the result of group by when having appears. ",(0,r.kt)("inlineCode",{parentName:"p"},"Grouping Sets"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Rollup"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Cube")," are extensions of group by, please refer to ",(0,r.kt)("a",{parentName:"p",href:"../../../../../community/design/grouping_sets_design.md"},"GROUPING SETS DESIGN")," for details.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Order by"),": Sort the final result, Order by sorts the result set by comparing the size of one or more columns."),(0,r.kt)("p",{parentName:"li"},"Order by is a time-consuming and resource-intensive operation, because all data needs to be sent to 1 node before it can be sorted, and the sorting operation requires more memory than the non-sorting operation."),(0,r.kt)("p",{parentName:"li"},"If you need to return the top N sorted results, you need to use the LIMIT clause; in order to limit memory usage, if the user does not specify the LIMIT clause, the first 65535 sorted results are returned by default.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Limit n"),": limit the number of lines in the output result, ",(0,r.kt)("inlineCode",{parentName:"p"},"limit m,n")," means output n records starting from the mth line.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Having")," clause does not filter the row data in the table, but filters the results produced by the aggregate function."),(0,r.kt)("p",{parentName:"li"},"Typically ",(0,r.kt)("inlineCode",{parentName:"p"},"having")," is used with aggregate functions (eg :",(0,r.kt)("inlineCode",{parentName:"p"},"COUNT(), SUM(), AVG(), MIN(), MAX()"),") and ",(0,r.kt)("inlineCode",{parentName:"p"},"group by")," clauses.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"SELECT supports explicit partition selection using PARTITION containing a list of partitions or subpartitions (or both) following the name of the table in ",(0,r.kt)("inlineCode",{parentName:"p"},"table_reference"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"[TABLET tids] TABLESAMPLE n [ROWS | PERCENT] [REPEATABLE seek]"),": Limit the number of rows read from the table in the FROM clause, select a number of Tablets pseudo-randomly from the table according to the specified number of rows or percentages, and specify the number of seeds in REPEATABLE to return the selected samples again. In addition, you can also manually specify the TableID, Note that this can only be used for OLAP tables."))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax constraints:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"SELECT can also be used to retrieve calculated rows without referencing any table."),(0,r.kt)("li",{parentName:"ol"},"All clauses must be ordered strictly according to the above format, and a HAVING clause must be placed after the GROUP BY clause and before the ORDER BY clause."),(0,r.kt)("li",{parentName:"ol"},"The alias keyword AS is optional. Aliases can be used for group by, order by and having"),(0,r.kt)("li",{parentName:"ol"},"Where clause: The WHERE statement is executed to determine which rows should be included in the GROUP BY section, and HAVING is used to determine which rows in the result set should be used."),(0,r.kt)("li",{parentName:"ol"},"The HAVING clause can refer to the total function, but the WHERE clause cannot refer to, such as count, sum, max, min, avg, at the same time, the where clause can refer to other functions except the total function. Column aliases cannot be used in the Where clause to define conditions."),(0,r.kt)("li",{parentName:"ol"},"Group by followed by with rollup can count the results one or more times.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Join query:")),(0,r.kt)("p",null,"Doris supports JOIN syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"JION\ntable_references:\n    table_reference [, table_reference] \u2026\ntable_reference:\n    table_factor\n  | join_table\ntable_factor:\n    tbl_name [[AS] alias]\n        [{USE|IGNORE|FORCE} INDEX (key_list)]\n  | ( table_references )\n  | { OJ table_reference LEFT OUTER JOIN table_reference\n        ON conditional_expr }\njoin_table:\n    table_reference [INNER | CROSS] JOIN table_factor [join_condition]\n  | table_reference STRAIGHT_JOIN table_factor\n  | table_reference STRAIGHT_JOIN table_factor ON condition\n  | table_reference LEFT [OUTER] JOIN table_reference join_condition\n  | table_reference NATURAL [LEFT [OUTER]] JOIN table_factor\n  | table_reference RIGHT [OUTER] JOIN table_reference join_condition\n  | table_reference NATURAL [RIGHT [OUTER]] JOIN table_factor\njoin_condition:\n    ON conditional_expr\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"UNION Grammar\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT ...\nUNION [ALL| DISTINCT] SELECT ......\n[UNION [ALL| DISTINCT] SELECT ...]\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"UNION")," is used to combine the results of multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," statements into a single result set."),(0,r.kt)("p",null,"The column names in the first ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," statement are used as the column names in the returned results. The selected columns listed in the corresponding position of each ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," statement should have the same data type. (For example, the first column selected by the first statement should be of the same type as the first column selected by other statements.)"),(0,r.kt)("p",null,"The default behavior of ",(0,r.kt)("inlineCode",{parentName:"p"},"UNION")," is to remove duplicate rows from the result. The optional ",(0,r.kt)("inlineCode",{parentName:"p"},"DISTINCT")," keyword has no effect other than the default, since it also specifies duplicate row removal. With the optional ",(0,r.kt)("inlineCode",{parentName:"p"},"ALL")," keyword, no duplicate row removal occurs, and the result includes all matching rows in all ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," statements"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WITH statement"),":"),(0,r.kt)("p",null,"To specify common table expressions, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH")," clause with one or more comma-separated clauses. Each subclause provides a subquery that generates the result set and associates the name with the subquery. The following example defines ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH")," clauses in CTEs named ",(0,r.kt)("inlineCode",{parentName:"p"},"cte1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cte2"),", and refers to the ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH")," clause below their top-level ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"WITH\n  cte1 AS\uff08SELECT a\uff0cb FROM table1\uff09\uff0c\n  cte2 AS\uff08SELECT c\uff0cd FROM table2\uff09\nSELECT b\uff0cd FROM cte1 JOIN cte2\nWHERE cte1.a = cte2.c;\n")),(0,r.kt)("p",null,"In a statement containing the ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH")," clause, each CTE name can be referenced to access the corresponding CTE result set."),(0,r.kt)("p",null,"CTE names can be referenced in other CTEs, allowing CTEs to be defined based on other CTEs."),(0,r.kt)("p",null,"A CTE can refer to itself to define a recursive CTE. Common applications of recursive CTEs include sequence generation and traversal of hierarchical or tree-structured data."),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Query the names of students whose ages are 18, 20, 25"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select Name from student where age in (18,20,25);\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"ALL EXCEPT Example"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Query all information except the students' age\nselect * except(age) from student; \n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"GROUP BY Example"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"--Query the tb_book table, group by type, and find the average price of each type of book,\nselect type,avg(price) from tb_book group by type;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"DISTINCT Use"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"--Query the tb_book table to remove duplicate type data\nselect distinct type from tb_book;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"ORDER BY Example"),(0,r.kt)("p",{parentName:"li"},"Sort query results in ascending (default) or descending (DESC) order. Ascending NULL is first, descending NULL is last"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"--Query all records in the tb_book table, sort them in descending order by id, and display three records\nselect * from tb_book order by id desc limit 3;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"LIKE fuzzy query"),(0,r.kt)("p",{parentName:"li"},"Can realize fuzzy query, it has two wildcards: ",(0,r.kt)("inlineCode",{parentName:"p"},"%")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"_"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"%")," can match one or more characters, ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," can match one character"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"--Find all books whose second character is h\nselect * from tb_book where name like('_h%');\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"LIMIT limits the number of result rows"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"--1. Display 3 records in descending order\nselect * from tb_book order by price desc limit 3;\n\n--2. Display 4 records from id=1\nselect * from tb_book where id limit 1,4;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"CONCAT join multiple columns"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'--Combine name and price into a new string output\nselect id,concat(name,":",price) as info,type from tb_book;\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using functions and expressions"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'--Calculate the total price of various books in the tb_book table\nselect sum(price) as total,type from tb_book group by type;\n--20% off price\nselect *,(price * 0.8) as "20%" from tb_book;\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"UNION Example"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a FROM t1 WHERE a = 10 AND B = 1 ORDER by LIMIT 10\nUNION\nSELECT a FROM t2 WHERE a = 11 AND B = 2 ORDER by LIMIT 10;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"WITH clause example"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"WITH cte AS\n(\n  SELECT 1 AS col1, 2 AS col2\n  UNION ALL\n  SELECT 3, 4\n)\nSELECT col1, col2 FROM cte;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"JOIN Exampel"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM t1 LEFT JOIN (t2, t3, t4)\n                 ON (t2.a = t1.a AND t3.b = t1.b AND t4.c = t1.c)\n")),(0,r.kt)("p",{parentName:"li"},"Equivalent to"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM t1 LEFT JOIN (t2 CROSS JOIN t3 CROSS JOIN t4)\n                 ON (t2.a = t1.a AND t3.b = t1.b AND t4.c = t1.c)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"INNER JOIN"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT t1.name, t2.salary\n  FROM employee AS t1 INNER JOIN info AS t2 ON t1.name = t2.name;\n\nSELECT t1.name, t2.salary\n  FROM employee t1 INNER JOIN info t2 ON t1.name = t2.name;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"LEFT JOIN"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT left_tbl.*\n  FROM left_tbl LEFT JOIN right_tbl ON left_tbl.id = right_tbl.id\n  WHERE right_tbl.id IS NULL;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"RIGHT JOIN"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT * FROM t1 RIGHT JOIN t2 ON (t1.a = t2.a);\n+------+------+------+------+\n| a    | b    | a    | c    |\n+------+------+------+------+\n|    2 | y    |    2 | z    |\n| NULL | NULL |    3 | w    |\n+------+------+------+------+\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"TABLESAMPLE"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"--Pseudo-randomly sample 1000 rows in t1. Note that several Tablets are actually selected according to the statistics of the table, and the total number of selected Tablet rows may be greater than 1000, so if you want to explicitly return 1000 rows, you need to add Limit.\nSELECT * FROM t1 TABLET(10001) TABLESAMPLE(1000 ROWS) REPEATABLE 2 limit 1000;\n")))),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SELECT\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"ome additional knowledge about the SELECT clause"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An alias can be specified for select_expr using AS alias_name. Aliases are used as column names in expressions and can be used in GROUP BY, ORDER BY or HAVING clauses. The AS keyword is a good habit to use when specifying aliases for columns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"table_references after FROM indicates one or more tables participating in the query. If more than one table is listed, a JOIN operation is performed. And for each specified table, you can define an alias for it")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The selected column after SELECT can be referenced in ORDER IN and GROUP BY by column name, column alias or integer (starting from 1) representing the column position"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT college, region, seed FROM tournament\n  ORDER BY region, seed;\n\nSELECT college, region AS r, seed AS s FROM tournament\n  ORDER BY r, s;\n\nSELECT college, region, seed FROM tournament\n  ORDER BY 2, 3;\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If ORDER BY appears in a subquery and also applies to the outer query, the outermost ORDER BY takes precedence.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If GROUP BY is used, the grouped columns are automatically sorted in ascending order (as if there was an ORDER BY statement followed by the same columns). If you want to avoid the overhead of GROUP BY due to automatic sorting, adding ORDER BY NULL can solve it:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a, COUNT(b) FROM test_table GROUP BY a ORDER BY NULL;\n")))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When sorting columns in a SELECT using ORDER BY or GROUP BY, the server sorts values using only the initial number of bytes indicated by the max_sort_length system variable.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Having clauses are generally applied last, just before the result set is returned to the MySQL client, and is not optimized. (while LIMIT is applied after HAVING)"),(0,r.kt)("p",{parentName:"li"},"The SQL standard requires: HAVING must refer to a column in the GROUP BY list or used by an aggregate function. However, MySQL extends this by allowing HAVING to refer to columns in the Select clause list, as well as columns from outer subqueries."),(0,r.kt)("p",{parentName:"li"},"A warning is generated if the column referenced by HAVING is ambiguous. In the following statement, col2 is ambiguous:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(col1) AS col2 FROM t GROUP BY col2 HAVING col2 = 2;\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Remember not to use HAVING where WHERE should be used. HAVING is paired with GROUP BY.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The HAVING clause can refer to aggregate functions, while WHERE cannot."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT user, MAX(salary) FROM users\n  GROUP BY user HAVING MAX(salary) > 10;\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The LIMIT clause can be used to constrain the number of rows returned by a SELECT statement. LIMIT can have one or two arguments, both of which must be non-negative integers."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"/*Retrieve 6~15 rows in the result set*/\nSELECT * FROM tbl LIMIT 5,10;\n/*Then if you want to retrieve all rows after a certain offset is set, you can set a very large constant for the second parameter. The following query fetches all data from row 96 onwards */\nSELECT * FROM tbl LIMIT 95,18446744073709551615;\n/*If LIMIT has only one parameter, the parameter specifies the number of rows that should be retrieved, and the offset defaults to 0, that is, starting from the first row*/\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SELECT...INTO allows query results to be written to a file"))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modifiers of the SELECT keyword"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"deduplication"),(0,r.kt)("p",{parentName:"li"},"The ALL and DISTINCT modifiers specify whether to deduplicate rows in the result set (should not be a column)."),(0,r.kt)("p",{parentName:"li"},"ALL is the default modifier, that is, all rows that meet the requirements are to be retrieved."),(0,r.kt)("p",{parentName:"li"},"DISTINCT removes duplicate rows.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The main advantage of subqueries"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Subqueries allow structured queries so that each part of a statement can be isolated."),(0,r.kt)("li",{parentName:"ul"},"Some operations require complex unions and associations. Subqueries provide other ways to perform these operations"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Speed up queries"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use Doris's partition and bucket as data filtering conditions as much as possible to reduce the scope of data scanning"),(0,r.kt)("li",{parentName:"ul"},"Make full use of Doris's prefix index fields as data filter conditions to speed up query speed"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"UNION"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using only the union keyword has the same effect as using union disitnct. Since the deduplication work is more memory-intensive, the query speed using the union all operation will be faster and the memory consumption will be less. If users want to perform order by and limit operations on the returned result set, they need to put the union operation in the subquery, then select from subquery, and finally put the subquery and order by outside the subquery."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from (select age from student_01 union all select age from student_02) as t1\norder by age limit 4;\n  \n+-------------+\n| age |\n+-------------+\n| 18 |\n| 19 |\n| 20 |\n| 21 |\n+-------------+\n4 rows in set (0.01 sec)\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"JOIN"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In the inner join condition, in addition to supporting equal-valued joins, it also supports unequal-valued joins. For performance reasons, it is recommended to use equal-valued joins."),(0,r.kt)("li",{parentName:"ul"},"Other joins only support equivalent joins")))))}c.isMDXComponent=!0}}]);