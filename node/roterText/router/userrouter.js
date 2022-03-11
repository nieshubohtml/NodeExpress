/*
 * @Author: your name
 * @Date: 2022-03-11 10:14:34
 * @LastEditTime: 2022-03-11 10:16:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \前端项目test\NodeExpress\node\roterText\router\userrouter.js
 */
const express = require("express");
const router = express.Router();//获取路由实例


router.get("/add", (req, res) => {
  console.log(req.query);

  res.send("add成功了");
});


router.get("/del", (req, res) => {
  console.log(req.query);
  res.send("del成功了");
});


module.exports = router;