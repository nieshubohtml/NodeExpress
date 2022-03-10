/*
 * @Author: your name
 * @Date: 2022-03-10 15:30:43
 * @LastEditTime: 2022-03-10 15:42:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \前端项目test\newNode\node\cheerio.js
 */

const cheerio = require("cheerio");

let $ = cheerio.load(
  '<div class="FTZkZo"><h1 class="_2zeTMs">nodejs的express入门与使用教程</h1><div class="_26qd_C"><span class="_22gUMi">菜的只能打代码</span></div></div>'
);

console.log($("h1").text());
console.log($.html());