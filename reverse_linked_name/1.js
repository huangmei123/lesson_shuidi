function ListNode(val){
    this.val=val;
    this.next=null;//指向下一个结点
}

// 下一个结点 后继结点
// 当前结点 除 头结点外会有前驱结点

//传入一个头指针
var reverseList =function(head){
  if(!head || !head.next) return head;//空链表或只有一个结点
  let cur=head;//当前结点
  let pre=null;//前驱结点
  while(cur){//遍历法
    const next=cur.next;//当前结点的后继结点
    cur.next=pre;//后继结点指向前驱结点，将当前结点的指针指向前一个结点
    //如果cur是头结点
    pre=cur;//前驱结点变成当前结点
    cur=next;//后继结点变成当前结点
  }

}

const n1=new ListNode(1);
const n2=new ListNode(2);
const n3=new ListNode(3);
const n4=new ListNode(4);
const n5=new ListNode(5);

n1.next=n2;
n2.next=n3;
n3.next=n4;
n4.next=n5;
console.log(n1);