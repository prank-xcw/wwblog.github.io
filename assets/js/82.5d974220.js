(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{509:function(s,e,a){"use strict";a.r(e);var n=a(2),t=Object(n.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"redis主从复制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis主从复制"}},[s._v("#")]),s._v(" redis主从复制")]),s._v(" "),e("h3",{attrs:{id:"_1-修改配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-修改配置文件"}},[s._v("#")]),s._v(" 1.修改配置文件")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#常用命令")]),s._v("\ninfo replication \t\t\t\t\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看主从信息")]),s._v("\nslaveof host地址 port号 \t\t\t\t  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#指定为主服务")]),s._v("\nslaveof on one\t\t\t\t\t\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#不指定任何主服务")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("将解压后的redis中redis.windows.conf文件复制二份，并进行命名与配置"),e("code",[s._v("分为一主两从")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/prank-xcw/images/master/imgs/image-20201231165524740.png",alt:"image-20201231165524740"}})]),s._v(" "),e("p",[e("code",[s._v("主节点master：redis.windows6379.conf")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("port "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("code",[s._v("从节点slaveof：redis.windows6380.conf")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("port "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6380")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使用命令设置主节点")]),s._v("\nslaveof "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置master服务器为6379")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("code",[s._v("从节点slaveof：redis.windows6381.conf")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("port "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6381")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使用命令设置主节点")]),s._v("\nslaveof "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置master服务器为6379")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"_2-启动服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动服务"}},[s._v("#")]),s._v(" 2.启动服务")]),s._v(" "),e("h4",{attrs:{id:"cmd命令启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmd命令启动"}},[s._v("#")]),s._v(" cmd命令启动")]),s._v(" "),e("p",[s._v("远程工具下载：https://github.com/qishibo/AnotherRedisDesktopManager/releases")]),s._v(" "),e("p",[s._v("启动三个服务端，使用远程连接工具生成三个客户端")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("redis-server.exe redis.windows6379.conf\nredis-server.exe redis.windows6380.conf\nredis-server.exe redis.windows6381.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("打开远程工具，连接对应客户端，在"),e("code",[s._v("6380、6381中输入命令设置为6379的从节点")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/prank-xcw/images/master/imgs/image-20201231171333167.png",alt:"image-20201231171333167"}})]),s._v(" "),e("p",[s._v("设置好主从后，在6379新增一个key，在6380、6381中可以查到，但是从节点不能新增")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/prank-xcw/images/master/imgs/image-20201231171730546.png",alt:"image-20201231171730546"}})]),s._v(" "),e("h4",{attrs:{id:"redis服务启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis服务启动"}},[s._v("#")]),s._v(" redis服务启动")]),s._v(" "),e("p",[s._v("其实redis可安装成redis服务，也可设置开启自启动")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#新增为服务")]),s._v("\nredis-server.exe --service-install 配置文件 --service-name 生成的服务名\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除服务")]),s._v("\nredis-server.exe --service-uninstall --service-name 服务名\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ol",[e("li",[e("p",[s._v("redis目录打开cmd 输入命令 生成服务")]),s._v(" "),e("p",[e("code",[s._v("redis-server.exe --service-install redis.windows6379.conf --service-name redis6379")])]),s._v(" "),e("p",[e("code",[s._v("redis-server.exe --service-install redis.windows6380.conf --service-name redis6380")])]),s._v(" "),e("p",[e("code",[s._v("redis-server.exe --service-install redis.windows6381.conf --service-name redis6381")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/prank-xcw/images/master/imgs/image-20201231172351594.png",alt:"image-20201231172351594"}})])]),s._v(" "),e("li",[e("p",[e("code",[s._v("win+r 输入services.msc")]),s._v("打开服务可看到已添加到服务中")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/prank-xcw/images/master/imgs/image-20201231172539782.png",alt:"image-20201231172539782"}})])]),s._v(" "),e("li",[e("p",[s._v("卸载命令"),e("code",[s._v("redis-server --service-uninstall --service-name redis6379")])])])]),s._v(" "),e("h4",{attrs:{id:"redis脚本启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis脚本启动"}},[s._v("#")]),s._v(" redis脚本启动")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("新建三个"),e("code",[s._v("bat启动文件")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/prank-xcw/images/master/imgs/image-20201231173047267.png",alt:"image-20201231173047267"}})])]),s._v(" "),e("li",[e("p",[s._v("按照以下格式依次输入到三个文件中")])])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("@echo off\nSET "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DIR")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%~dp0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Redis-6379"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\t\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Redis-6379代表目录")]),s._v("\nSTART %DIR%redis-server.exe %DIR%redis.windows6379.conf\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis.windows6379.con指定配置文件")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"redis哨兵模式sentinel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis哨兵模式sentinel"}},[s._v("#")]),s._v(" redis哨兵模式sentinel")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("方式一：新建sentinel.conf文件后   cmd直接执行命令启动"),e("code",[s._v("redis-server.exe sentinel.conf")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当前Sentinel服务运行的端口")]),s._v("\nport "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("26379")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#监视一个名为mymaster的master,master为172.0.0.1,端口号为6380,而将这个master判断为失效,至少需要2个sentinel同意(只要同意 Sentinel 的数量不达标，自动故障迁移就不会执行)不过要注意， 无论你设置要多少个 Sentinel 同意才能判断一个服务器失效， 一个 Sentinel 都需要获得系统中多数 Sentinel 的支持， 才能发起一次自动故障迁移 ")]),s._v("\nsentinel monitor master "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6380")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 哨兵认定当前主节点master失效的判别间隔时间")]),s._v("\nsentinel down-after-milliseconds master "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v("\nsentinel failover-timeout mymaster "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("180000")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#故障转移的超时时间  ")]),s._v("\n\n\nsentinel config-epoch master "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nsentinel leader-epoch master "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("方式二 ：服务启动")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cmd执行命令生成服务")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#格式  redis-server.exe --service-install conf配置文件 --service-name 想要生成的服务名")]),s._v("\nredis-server.exe --service-install sentinel.conf --service-name redis-sentinel\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("方式三：新建sentinel启动脚本")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#新建sentinel.bat输入以下内容")]),s._v("\n@echo off\nSET "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DIR")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%~dp0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nSTART %DIR%redis-server.exe %DIR%sentinel.conf "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--sentinel")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])])])])}),[],!1,null,null,null);e.default=t.exports}}]);