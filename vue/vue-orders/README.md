1. 前端 不写node
前后端之间数据流通的问题（mock）
2. 后端 不写vue
前后端分离 
回忆：orders表 引入mongodb 10万条数据  migration

需求：订单报表
table 20分页  月份、地区、商品、进行数据的筛选

1. 订单数据要展示出来 element-ui（el-table可以将数据以表格的形式展示出来、el-pagination分页器）
2. 数据在？ mock模拟一下
3. mock牛逼在于 未来只要一个url 就可以上线

- el-table +  el-table-column(父子容器组件)
  数据展示，数据可视化（canvas echart)
  table= rows + clos
  :data="list"
  1. table 和 pagination 联动
  界面开发和后端api开发时异步的 
  mockjs是页内的解决方案
  mock的造数据API 

  前端有了mock 不需要后端在开发阶段支持你
