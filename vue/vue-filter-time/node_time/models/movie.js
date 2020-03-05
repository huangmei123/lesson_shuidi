const mongoose = require('mongoose');
// 硬盘，物理《- 逻辑模型
const movieSchema =  mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  poster: String, /*封面 url  比较大 jpg png*/
  rating: String,
  introduction: String,
  // 大多数表的时间类型的声明
//   创建时间
  created_at: {
    type: Date,
    default: Date.now /**默认值 */
  },
//   更新时间
  update_at: {
    type: Date,
    default: Date.now/**默认值 */
  } 
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie