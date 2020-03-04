package main //module
//gin 第三方模块 github.com
import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// import "fmt"

func main() { //入口
	// map hashmap 数据结构 es6 map set
	//js ed5 json object
	//go是现代C语言
	// var  变量声明 map[key]value
	// var countryCapitalMap map[string]string
	//变量声明
	// countryCapitalMap := map[string]string
	// countryCapitalMap = make(map[string]string) //make分配空间 相当于c语言的alloc
	// countryCapitalMap["france"] = "巴黎"
	// countryCapitalMap["Italy"] = "罗马"
	// countryCapitalMap["Japan"] = "东京"
	// countryCapitalMap["India"] = "新德里"

	//遍历
	// for of可以遍历数组和json object
	//for 循环、赋值
	//range 区间 10 [0-10] 相当于 for(var i=0);i<10;i++)

	// for country := range countryCapitalMap { //数组
	// 	fmt.Println(country, "首都是", countryCapitalMap[country])
	// }
	//go gin web引擎
	engine := gin.Default() //const app =express()
	// context是gin请求上下文的环境类型
	engine.GET("/", func(context *gin.Context) {
		//context 相当于kao 里的ctx  相当于 express req+res
		//context.String代表res.send()
		// int 代表什么
		// http.StatusOK 200 有助于代码可读性
		context.String(http.StatusOK, "hello gin get method")
		// engine.Run("") //相当于 node listen 8080
	})
	//resetful 在保存数据的时候使用post请求
	//使用相对应的语义的请求动词 +url语义化 /login POST
	// /post/123 GET 读某篇文章
	// /post POST 新增一片文章
	// /post GET 获取文章列表
	engine.POST("/", func(context *gin.Context) {
		context.String(http.StatusOK, "hello gin post method")

	})

	// {username:'ysw',hobbes:['喝酒','吃花生']}

	//put 也是用来 post 修改
	engine.PUT("/", func(context *gin.Context) {
		context.String(http.StatusOK, "hello gin put method")
	})

	engine.DELETE("/", func(context *gin.Context) {
		context.String(http.StatusOK, "hello gin delete method")
	})

	engine.PATCH("/", func(context *gin.Context) {
		context.String(http.StatusOK, "hello gin patch method")
	})

	//执行它没有返回字符串 因为他不在意返回内容 response
	//在不获取资源的情况下 了解资源的信息
	//没有改过 ？ 文件大小 文件存在吗？
	//使用head 希望文件返回头部信息 要得到响应的头
	//命令curl -i -X HEAD https://img.36krcdn.com/20200304/v2_29c4ae61af4e49c0a0b4733f53fc20de_img_png
	engine.HEAD("/", func(context *gin.Context) {
		context.String(http.StatusOK, "hello gin head method")
	})

	engine.OPTIONS("/", func(context *gin.Context) {
		context.String(http.StatusOK, "hello gin options method")
	})
	// _下划线代码 不处理
	_ = engine.Run(":3000")
}
