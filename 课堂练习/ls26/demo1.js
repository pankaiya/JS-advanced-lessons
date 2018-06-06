//理解JS中的相关概念的理解（线程、异步、阻塞、并行）
//Part11111111111 异步的案例
//情形一 平时作业
// 老师 （JS单线程）：留作业 - ************ - 老师判作业
// 学生1（IO  线程）：****** - 学生完成作业 - **********
// 学生2（IO  线程）：****** - 学生完成作业 - **********
// 学生3（IO  线程）：****** - 学生完成作业 - **********


// 情形二 银行营业厅 （一个专员的情景，后端是同步处理的情况下）
// 许多客户（许多前端用户） 营业员（后端服务）
// 客户1 取号 |（ 其他事务 ）| 完成业务
// 客户2   取号 |      （ 其他事务 ）        |完成业务
// 客户3     取号|                （ 其他事务 ）               |完成业务

// 专员1 -- |处理业务1-----|  |处理业务2-----|  |处理业务3-----|


//情形三 银行营业厅 多个专员时 （后端是同步处理多线程情况下，线程是有限的）
// 许多客户（许多前端用户） 营业员（后端服务）
// 客户1 取号 |（ 其他事务 ）| 完成业务
// 客户2   取号 | （ 其他事务 ）|完成业务
// 客户3     取号|        （ 其他事务 ）      |完成业务

// 专员1 -- |处理业务1-----|  |处理业务3-----|
// 专员2 --    |处理业务2-----|


//情形四 银行营业厅  （后端的是单线程异步事件驱动的形式）
// 客户1 取号 |  （ 其他事务 ）  | 完成业务
// 客户2   取号 | （ 其他事务 ）  |完成业务
// 客户3     取号| （ 其他事务 ）  |完成业务

// 客服    |受理| |分发| |通知|

// 业务员1 -- |处理业务1-----|
// 业务员2 --  |处理业务2-----|
// 业务员3 --   |处理业务3-----|

//Part2222222222 思考企业组织结构,总经理发布任务后就去忙别的了，是异步的
// 副总经理将任务分发后也去忙自己的去路，也是异步的
// 总经理 ---副总经理1 --助理11
//                    --助理12
//                    --助理13
//       ---副总经理2 --助理21
//                    --助理22
//                    --助理23

//Part3333333333 思考车站售票窗口排队等候的人是同步还是异步，阻塞还是非阻塞

//Part4444444444一个线程是否可以同时完成两个任务，如何理解任务的并发
//一个人，同时画一个圆和一个矩形
