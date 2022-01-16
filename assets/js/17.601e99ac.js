(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{681:function(t,a,e){"use strict";e.r(a);var v=e(32),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念：")]),t._v(" "),e("p",[t._v("对数据库表列进行增加恰当索引，可以快速的找到匹配的记录行数，相比于默认的全表扫描，可以大大加快查找的速度。")]),t._v(" "),e("h2",{attrs:{id:"作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[t._v("#")]),t._v(" 作用：")]),t._v(" "),e("p",[t._v("加快查找速度；")]),t._v(" "),e("h2",{attrs:{id:"实现方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现方法"}},[t._v("#")]),t._v(" 实现方法：")]),t._v(" "),e("p",[t._v("一般分为B+树索引和哈希索引。")]),t._v(" "),e("h2",{attrs:{id:"b-树索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#b-树索引"}},[t._v("#")]),t._v(" B+树索引：")]),t._v(" "),e("p",[t._v("在B-tree上改进得到，其非叶子结点均为key值，叶子结点是key-data键值对。叶子结点前后相连且有序。")]),t._v(" "),e("h2",{attrs:{id:"哈希索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#哈希索引"}},[t._v("#")]),t._v(" 哈希索引：")]),t._v(" "),e("p",[t._v("通过对key进行hash(crc/MD5/sha1/sha256...)而将记录存储在不同的bucket种，可以做到常数时间的查找，但要注意哈希冲突的避免（链表法、线性探测、二次探测、公共溢出区的方法）。其中MD5 128位，和sha1/256码都较长不太适合作为hash函数。默认无序。")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"为什么有了b-树索引还要hash索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么有了b-树索引还要hash索引"}},[t._v("#")]),t._v(" 为什么有了B+树索引还要hash索引？")]),t._v(" "),e("ul",[e("li",[t._v("B+树默认有序，hash默认无序，所以哈希索引无法用于排序；")]),t._v(" "),e("li",[t._v("哈希索引O(1)在速度上毋庸置疑要快于B+树近似O(logn);")]),t._v(" "),e("li",[t._v("哈希索引只能进行等值查询（因为他要计算hash(key)再去匹配）而B+树索引可以进行等值、部分前缀、范围查询；")]),t._v(" "),e("li",[t._v("底层实现结构不同：B+树是非线性结构，hash桶是线性结构。对于某些场景如热点页/活跃查询页，需要借助哈希索引来实现快速查询。")])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"索引越多越快"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引越多越快"}},[t._v("#")]),t._v(" 索引越多越快？")]),t._v(" "),e("p",[t._v("此言差矣，索引并非是虚无缥缈的，是实实在在的一种数据结构（B+树/hash桶）要占内存、维护它要系统开销，一般的插入删除都要进行结构的调整，这要消耗时间，所以索引太多反而拖慢查找时间。有时候，见数据量不多时，建立索引还不如全表查询。索引加快了检索的速度，但是插入删除修改都需要DBMS动态更新内部索引结构，要耗费开销。")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"为什么说b-树比b树更适合数据库索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么说b-树比b树更适合数据库索引"}},[t._v("#")]),t._v(" 为什么说B+树比B树更适合数据库索引？")]),t._v(" "),e("ul",[e("li",[t._v("B+树的磁盘读写代价更低：B+树的内部结点并没有指向关键字具体信息的指针，因此其内部结点相对B树更小。如果把所有同一内部结点的关键字存放在同一盘块中，那么盘块所能容纳的关键字数量也越多，相对I/O读写次数也就降低了。")]),t._v(" "),e("li",[t._v("B+树的查询效率更稳定：由于非叶结点并不是最终指向文件内容的结点，而只是叶子结点中关键字的索引。所以任何关键字的查找必须走一条从根结点到到叶子结点的路。所有关键字查询的路径长度相同，导致每一个数据的查询效率相当。")])]),t._v(" "),e("hr"),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}}),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("主键")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("外键")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("索引")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("定义")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("唯一标识一条记录，不能重复，不允许为空")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("表的外键是另一表的主键，外键可以又重复的，可以为空")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("该字段没有重复值，但可以有一个空值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("作用")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("保证数据完整性")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("和其他表建立连接")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("提高查询排序速度")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("个数")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("一个表只能有一个")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("一个表可以有多个")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("一个表可以有多个唯一索引")])])])])])}),[],!1,null,null,null);a.default=_.exports}}]);