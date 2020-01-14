[分隔链表]https://leetcode-cn.com/problems/partition-list/

LinkedList x
隔成2个区 每个节点的初始相对位置

1. 形成2个区 每个区都链表
定义2个链表 smaller bigger
2. 一次链表遍历
  x 只小的放在smaller区 反之放在bigger区
3. 将这2个区连起来 smaller.next=bigger

# 总结：通过2个链表 分隔链表的不同区域的子链表，2个子链表再组合起来
- 特别：dummy指针