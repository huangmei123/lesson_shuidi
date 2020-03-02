// 有没有可能少一层内层循环
const towSum=(nums,target)=>{
    let map=new Map();
    // let map={};//对象字面量
    let res=[];//存下标的数组
    // nums.forEach((e,i) =>map[e]=i);//map
    nums.forEach((e,i)=>map.set(e,i));
    // console.log(map);
    for(let i=0;i<nums.length;i++){
        // let j=map[target-nums[i]];//类似hash
        let j=map.get(target-nums[i]);
        if(j && j !==i){
            res=[i,j];
            break;
        }
    }
    return res;
}
console.log(towSum([2,7,11,15],9));