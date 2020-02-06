const path=require('path');//路径
const fse=require('fs-extra');//fs扩展包
//合并文件块
const UPLOAD_DIR=path.resolve(__dirname,".","target");
// console.log(UPLOAD_DIR);
const filename='yb';
const filePath=path.resolve(UPLOAD_DIR,"..",`${filename}.jpg`);//使filename变成一个路径  “..”表示根目录下
console.log(filePath);


const pipStream=(path,writeStream)=>
  new Promise(resolve => {
      //创建可读流，让它流入可写流
      const readStream=fse.createReadStream(path);
      readStream.on("end", ()=>{
          fse.unlinkSync(path);
          resolve();
      })
      readStream.pipe(writeStream);
  })


const mergeFileChunk =async (filePath,filename,size) =>{
//   console.log(filePath,filename,size);
//大文件上传时 设计的后端思想是：每一个要上传的文件，先以文件名，为target目录名，把分文件blob，放入这个目录下
//文件blob上传前要加index
//node文件合并肯定是可以的，stream
  const chunkDir =path.resolve(UPLOAD_DIR,filename);
//   console.log(chunDir);
//fse是fs的封装，有了fse就可以不用fs模块
  const chunkPaths=await fse.readdir(chunkDir);
//   console.log(chunkPaths);
//可以进行排序
  chunkPaths.sort((a,b)=>a.split("-")[1]-b.split("-"[1]));
//   console.log(chunkPaths,'++');
//每一块内容写入最后的文件 promise
//创建可写流,流入fse.creatWriteStream
  await Promise.all(
      chunkPaths.map((chunkPath,index) =>
        pipStream(
          path.resolve(chunkDir,chunkPath),
          fse.createWriteStream(filePath,{
          start:index*size,
          end:(index +1)*size
        })
      )
    )
  )
//   console.log('文件合并成功');
  fse.rmdirSync(chunkDir);
}

mergeFileChunk(filePath,filename,0.51024*1024);