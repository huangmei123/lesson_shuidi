// 递归 把复杂问题由多个相同的简单问题
// 退出条件
// 1. DOM 树状结构 递归
//       body root
//    .container 子节点
// .wrap
// div
//  我的（文本节点）
// 2.Tree
// 递归在go使用

package main

import (
	"fmt"
)

//矩形类 go
//类型声明 类似于constructor
type Rectangle struct {
	Length int
	Width  int
}

//prototype
// Area属于Rectangle这个类
func (r *Rectangle) Area() int {
	// 计算面积的方法
	return r.Length * r.Width
}
func main() {
	r := Rectangle{4, 2} // go 面向对象
	fmt.Println(r.Area())
}
