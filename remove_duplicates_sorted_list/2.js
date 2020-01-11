function ListNode(val){
    this.val=val;//链表节点 值
    this.next=null; //指针
    return this
}
 const n1=new ListNode(1);
 const n2=new ListNode(1);
 const n3=new ListNode(2);
 n1.next=n2;
 n2.next=n3;
 console.log(n1);
