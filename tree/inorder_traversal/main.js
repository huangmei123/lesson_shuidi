function TreeNode(val){
    this.val=val;
    this.left=this.right=null;//左指针 右指针

}
//每个节点都是满的 属于完全二叉树
var a1 =new TreeNode(1);//root根节点
var a2 =new TreeNode(2);
var a3 =new TreeNode(3);//3个结点就可以生成一棵树 2个就是线性表
a1.left=a2;
a1.right=a3;
var a4 =new TreeNode(4);
var a5 =new TreeNode(5);
a2.left=a4;
a2.right=a5;
var  a6=new TreeNode(6);
var  a7=new  TreeNode(7);
a3.left=a6;
a3.right=a7;

var inorderTraversal =function (root){ 
  var stack =[],//栈 先进先出
  result =[],//数组
  cur;
  ;// 栈 只有它的左子树、右子树都已经解决了 它就可以出栈
  cur =root;
//   循环一次 栈里还有结点
  while (stack.length > 0 || cur !=null){
    if(cur !=null){
        //
        stack.push(cur);//入栈
        cur=cur.left;
    }else{
        cur =stack.pop();//出栈
        result.push(cur.val);//进入结构数组
        if(cur.val == 4){
            console.log(cur,cur.right);
        }
        cur =cur.right;//

    }
  }
  return result;
}
console.log(inorderTraversal(a1))