function TreeNode(val){
    this.val=val;
    this.left=this.right=null;//左指针 右指针

}
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

// 树可以理解为一个结点 左右指向另外2个结点，递归执行，每一个子节点变成新的根节点

// 如何打印这课树？1 2 4 5 3 6 7
// 前序 中序 后序
var inorderTraversal =function(root) {
    //
    let arr =[];//放结点的数组，可以顺序的打印出来
    const inorder =root =>{
        //写什么
      if(root ===null) return null;//退出条件
      
      inorder(root.left);//左子树一直递归
      inorder(root.right);//右子树一直递归
      arr.push(root.val);
    }

    inorder(root);
    return arr;
}

console.log(inorderTraversal(a1))