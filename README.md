# 传统写法
1. 绑定事件处理函数
   1.增加项目
    每一项的试图 -- 列表
   2.删除项
     
   3.改变完成状态



# 面向对象 类的继承 横向切割程序 - 设计方案
  1.程序进行分类
    外层：浏览器的事件--> 调用方法---> 事件处理函数的规定
    操作数据: addTodo removeTodo toggleComplete 
    操作Dom： addItem removeItem changeComplete 
    管理模版： todoView