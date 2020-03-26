package main

import "fmt"

//树节点
type Node struct {
	value int
	left  *Node //指针声明
	right *Node //*是指针运算符
}

func (node *Node) FindNode(n *Node, x int) *Node {
	if n == nil {
		return nil
	} else if n.value == x {
		return n
	} else {
		p := node.FindNode(n.left, x)
		if p != nil {
			return p
		}
		return node.FindNode(n.right, x)
	}
}

func CreateNode(value int) *Node {
	return &Node{value, nil, nil} //nil就是为空 &是取地址
}

//递归概念来定义的
func main() {
	// 	     5
	// 2           4
	//     7    8      9
	// 6
	root := CreateNode(5)     //根节点
	root.left = CreateNode(2) //CreateNode生成的节点可以作为其他节点的左子针
	root.right = CreateNode(4)
	root.left.right = CreateNode(7)
	root.left.right.left = CreateNode(6)
	root.right.left = CreateNode(8)
	root.right.right = CreateNode(9)

	fmt.Printf("%d\n", root.FindNode(root, 4).value)
	fmt.Printf("%d\n", root.GetTreeHeight(root))
}
