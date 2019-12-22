- 泡泡堂游戏的主业务逻辑抽象
  面向 对象核心思想：抽象（函数） 封装 继承 多态
  把实现细节抽象起来
  抽象 ->员工实现，（前端，后端，美工，函数） 封装
  - 工厂类 抽象了（封装了）我们的队友和敌人
  playerFactory(name,teamColor) 代理了产生实例的过程
  players 在过程中建立好关系

  Player 玩家类
  playerFactory 类 以工厂的模式去生产
  单个对象去面向对象的集合 生产过程，工厂化
  - partners[]
  - enemies[]
  - die()
    lose()
    win()
  - all_dead=true 只要判断一个
    




