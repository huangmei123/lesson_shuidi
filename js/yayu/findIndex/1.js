//es6支持的 
// 手写一下findIndex
//输出12 5 8 130 3 3表示找到符合条件的下标
function isBigEnough(element){
    console.log(element);
    return element>=15;

}
console.log([12,5,8,130,44].findIndex(isBigEnough));