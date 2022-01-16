(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{624:function(t,e,a){},665:function(t,e,a){"use strict";a(624)},678:function(t,e,a){"use strict";a.r(e);a(665);var r=a(32),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"未提交读read-uncommitted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#未提交读read-uncommitted"}},[t._v("#")]),t._v(" 未提交读READ UNCOMMITTED：")]),t._v(" "),a("p",[t._v("一个事务在提交之前，对其他事务是可见的，即事务可以读取未提交的数据。存在“脏读”（读到了脏数据）问题。")]),t._v(" "),a("h2",{attrs:{id:"提交读read-committed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交读read-committed"}},[t._v("#")]),t._v(" 提交读READ COMMITTED：")]),t._v(" "),a("p",[t._v("事务在提交之前，对其它事务是不可见的。存在“不可重复读”（两次查询的得到的结果可能不同，即可能在查询的间隙，有事务提交了修改）问题。解决了“脏读”问题。")]),t._v(" "),a("h2",{attrs:{id:"可重复读repeatable-read"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可重复读repeatable-read"}},[t._v("#")]),t._v(" 可重复读REPEATABLE READ：")]),t._v(" "),a("p",[t._v("在同一事务中多次读取的数据是一致的。解决了脏读和不可重复读问题，存在“幻读”（在事务两次查询间隙，有其他事务又插入或删除了新的记录）。--- MySQL默认隔离级别。")]),t._v(" "),a("h2",{attrs:{id:"可串行化serializable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可串行化serializable"}},[t._v("#")]),t._v(" 可串行化SERIALIZABLE：")]),t._v(" "),a("p",[t._v("强制事务串行化执行。即一个事物一个事物挨个来执行，可以解决上述所有问题。")]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[t._v("脏读：读取到尚未提交的数据。")]),t._v(" "),a("li",[t._v("不可重复读：两次分别读取到事务提交前后的数据，造成两次读取的数据不一致。")]),t._v(" "),a("li",[t._v("幻读：针对数据量，读取前后中间事务插入或删除数据，造成两次读取数据量不一致。")])]),t._v(" "),a("hr"),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("事务的隔离级别")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("是否会出现"),a("strong",[t._v("幻读")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("是否会出现"),a("strong",[t._v("不可重复读")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("是否会出现"),a("strong",[t._v("幻读")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("读未提交 read uncommitted")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("读已提交 read committed")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("可重复读 repeatable read")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("串行化 serializble")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);