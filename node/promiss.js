/*
 * @Author: your name
 * @Date: 2022-03-11 15:05:11
 * @LastEditTime: 2022-03-11 16:20:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \前端项目test\NodeExpress\node\promiss.js
 */

var fs = require("fs");

const del = function (parmer) {
  //删除文件
  fs.rmdir(parmer, function (err) {
    if (err) {
      console.log(err);
      return false;
    }
    console.log("删除成功");
  });
};

const mkdir = function (parmer) {
  fs.mkdir(parmer, function (err) {
    //创建文件
    if (err) {
      console.log(err);
      return false;
    }
    console.log("创建成功");
  });
};

let p = new Promise(function (res, rej) {
  //mkdir
  mkdir("css");
  res();
});

p.then((res, rej) => {
  del("css");
  // throw new Error('终止')
})
  .then(() => {
    console.log(1111111);
  })
  .catch((err) => {
    console.log(err);
    console.log('看到错误');
  });
