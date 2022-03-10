/*
 * @Author: your name
 * @Date: 2022-03-10 16:20:06
 * @LastEditTime: 2022-03-10 18:13:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \前端项目test\newNode\node\express.js
 */

const express = require("express");

const bodyParser = require("body-parser");

// parse various different custom JSON types as JSON

// app.use是express“调用中间件的方法”

// parse an HTML body into a string
// app.use(bodyParser.text({ type: 'text/html' }))

const app = express();

// var urlencodedParser = bodyParser.urlencoded({ extended: false });,请求时调用urlencodedParser
app.use(bodyParser.json({ type: "application/json" }));//解析JSON文件
// app.use(bodyParser.urlencoded({ extended: false }));
// var jsonParser = bodyParser.json();



//get登录接口
app.get("/user/login", (req, res) => {
  console.log("你好");

  //   console.log(req.body);
  //   console.log(req.query);//接收参数
  //   res.send({err:0,msg:"regist:ok"}); //响应体res.send()：传送HTTP响应

  const { user, password } = req.query; //解构赋值

  if (user == "nie" && password == 123) {
    res.send({
      code: 0,
      msg: "login ok",
    });
  } else {
    res.send({
      code: 1,
      msg: "登陆失败，未注册账号",
    });
  }
});

//注册接口
app.post("/user/register", (req, res) => {
    const { user, password } = req.body;

  console.log(req.body); //express不能直接解析消息体，要找第三方插件body-parser
  res.send("请求成功");
});

//监听响应参数
app.listen(3000, () => {
  console.log("server start");
});

//本地请求地址http://localhost:3000/user/login
