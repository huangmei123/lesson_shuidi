const fs=require('fs');

// fs.readFile('./d.txt',function(err,res){
//     if(err){
//     console.log(res);
//     return;
// }
// console.log(res.toString);
// })
 function readFile(){
    //让文件按照a 、b 、c的顺序读取
    const aFile=fs.readFileSync('a.txt');
    console.log(aFile);
    const bFile=fs.readFileSync('b.txt');
    console.log(bFile);
    const cFile=fs.readFileSync('c.txt');
    console.log(cFile);
 }
 readFile();