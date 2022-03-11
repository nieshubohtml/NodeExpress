/*
 * @Author: your name
 * @Date: 2022-03-11 16:35:16
 * @LastEditTime: 2022-03-11 17:28:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \前端项目test\NodeExpress\node\db.js
 */

//链接数据库

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test");
var db = mongoose.connection; //数据库的链接对象

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we're connected!");
});

// var Schema = mongoose.Schema;//通过mongoose获取Schema对象

// var blogSchema = new Schema({
// });

//创建一个schema对象，类似于表头
var UserSchema = new mongoose.Schema({
  user: { type: String, required: true },
  password: { type: String, required: true },
  age: Number,
  sex: { type: Number, default: 0 },
});

//将schema转为数据模型

var User = mongoose.model("user", UserSchema);

//操作数据库
//插入数据
var arr = [{ user: "nie", password: "123", age: "25" }];
User.insertMany(arr).then(()=>{
    console.log("插入成功")
}).catch((err)=>{
    console.log(err);
    console.log("插入失败")
})



//查询数据库