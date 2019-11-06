const fs=require('fs');
const image=fs.readFileSync('8.PNG').toString('base64');
var AipOcrClient=require('baidu-aip-sdk').ocr;
const client=new AipOcrClient('17712431','GA5nAxES8NM6Z8gd9yw0NzOe','LkpbDGEv0O15xiT2kxwRCXkkuxDtFScz');
const options={};
options["multi_detect"]="true";
client
 .licensePlate(image,options)
 .then(function(result){
     console.log(result);
 })
