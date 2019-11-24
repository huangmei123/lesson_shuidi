var cloud = require('wx-server-sdk'); //云服务器

var rp = require('request-promise');  // npm 向API发出请求

cloud.init();

exports.main = async (event, context) => {
  console.log(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=1cbd9c5ae4813f70f6133a3505dbf391`);
  var res = rp(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=1cbd9c5ae4813f70f6133a3505dbf391`).then(html => {
    return html;
  })
  return res;
}