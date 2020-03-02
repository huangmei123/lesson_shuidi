function ListNode(val){
    this.val=val;
    this.next=null
}
var n1=new ListNode(1);
var n2=new ListNode(2);
var n3=new ListNode(3);
var n4=new ListNode(4);
var n5=new ListNode(5);


n1.next=n2;
n2.next=n3;
n3.next=n4;
n4.next=n5;
// console.log(n1);

var reverseGroup=function(head,k){
    if (!head || k==1){//空链表 K为1 ，
        return head;
    
      }
      var dummy={//哨兵结点
         next: head
      }
      // reverse
      var start=dummy;//初始化为dummy， 动态之后会变成每个小组的开始节点
      var end= head;//初始化时  与k相关 指向小组的第一个结点
      var count=0;//计数
      while (end !=null){ //一次遍历
          count++;
          if(count % k == 0){  //整除 要反转 得到小组   
            start=reverse(start, end.next);//将小组反转一下,要能跟其他小组链上
            end=start.next;
          }else{
            end=end.next;//更新end的值
          }
         
      }
      return dummy.next;
    }
    // start,end 是要reverse的
    //一次翻转
    function reverse(start,end){
      var curr=start.next;//头结点 dummy 1开始
      var prev =start;//前驱结点
      var first=curr;//保存第一个结点 反转后成为下一组的头指针
      while(curr!=end){//end 3 当前小组的[1,2]
        temp=curr.next;//temp 下一个结点
        curr.next=prev;//reserves
        pre=curr;//当前结点变成下一次的前驱结点
        curr=temp;//当前结点为下一个节点
    
      }
      //prev？ 变成小组的尾结点
      start.next=prev;
      first.next=curr;//原来的头节点变成了尾结点
      //小组之间链接起来，上一次的尾结点指向下一个小组的开始结点
      return first;
    }


console.log(reverseGroup(n1,2))
