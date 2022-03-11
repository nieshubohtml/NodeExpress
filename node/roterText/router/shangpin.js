/*
 * @Author: your name
 * @Date: 2022-03-11 10:24:25
 * @LastEditTime: 2022-03-11 10:35:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \前端项目test\NodeExpress\node\roterText\router\shangpin.js
 */

const express = require("express");
const router = express.Router();

router.post("/shanchu", (req, res) => {
  console.log(req.body);
  if (req.body.num == "222") {
      console.log("可以")
  }
  res.send("shanchu成功");
});


module.exports = router;