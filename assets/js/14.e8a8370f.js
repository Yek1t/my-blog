(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{675:function(t,e,n){"use strict";n.r(e);var l=n(32),i=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}}),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("InnoDB")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("MyISAM")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("外键")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("不支持")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("事务")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("不支持")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("行锁")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("不支持")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("表锁")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("支持")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("缓存")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("缓存索引和真实数据")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("只缓存索引，不缓存真实数据")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("B树索引")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("支持")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("聚集索引")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("不支持")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("非聚集索引")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("不支持")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("支持")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("全文索引")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("不支持")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("支持")])])])]),t._v(" "),n("ul",[n("li",[t._v("InnoDB,最为通用/推荐的一种引擎，支持事务、行级锁、甚至间隙锁（避免幻读）、支持热备份，MVCC，在并发上占优势，系统资源占用多。"),n("br"),t._v("\nInnoDB对死锁的处理：此处死锁与OS死锁类似，多个事务互相持有对方所有要申请资源的锁不释放，造成环路死锁。MySQL InnoDB引擎检测到死锁循环依赖后，回滚持有最少行级锁的事务。")]),t._v(" "),n("li",[t._v("MyISAM,默认的存储引擎，不支持事务和行级锁，只支持表锁，某些场景性能很好：占用存储上优，查询速度上完胜（大概是InnoDB的3倍）系统资源占用少。")]),t._v(" "),n("li",[t._v("InnoDB和MyISAM都支持B+树索引，InnoDB还支持自适应哈希索引")]),t._v(" "),n("li",[t._v("MyISAM实现了前缀压缩技术，占用存储空间更小（但会影响查找），InnoDB是原始数据存储，占用存储更大。"),n("br"),t._v("\nPS：大部分情况下，InnoDB都是正确的选择。---《高性能MySQL》")])])])}),[],!1,null,null,null);e.default=i.exports}}]);