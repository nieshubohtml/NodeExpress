/*
 * @Author: your name
 * @Date: 2022-03-10 11:19:41
 * @LastEditTime: 2022-03-10 18:43:15
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \前端项目test\NodeExpress\node\spider.js
 */
s//找到网站获取数据

const https = require("https");
const fs = require("fs"); //存储数据的方法
const cheerio = require("cheerio");
let url =
  "https://www.liepin.com/zhaopin/?init=-1&headckid=0417b67c8d823dcb&fromSearchBtn=2&sfrom=click-pc_homepage-centre_searchbox-search_new&ckid=0417b67c8d823dcb&degradeFlag=0&key=%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91&siTag=D_7XS8J-xxxQY6y2bMqEWQ%7EfA9rXquZc5IkJpXC-Ycixw&d_sfrom=search_fp&d_ckId=466b672969a37b2deaf20975f4b05e7c&d_curPage=0&d_pageSize=40&d_headId=466b672969a37b2deaf20975f4b05e7c&curPage=1";

let rawData = "";
https.get(url, (res) => {
  //解构赋值，获取状态码
  const { statusCode } = res;
  const contentType = res.headers["content-type"];


  console.log(statusCode, contentType);


  let error = null
  // 任何 2xx 状态码都表示成功响应，但这里只检查 200。
  if (statusCode !== 200) {
    error = new Error("请求状态错误.\n" + `Status Code: ${statusCode}`);
  } else if (!/^text\/html/.test(contentType)) {//验证文件类型
    error = new Error(
      `请求类型错误`
    );
  }
  if (error) {
    console.log(error);
    // 消费响应数据以释放内存
    res.resume();
    return false;
  }

  //接收数据
  res.on("data", (chunk) => {
    //数据分段，只要接收数据就会触发data事件chunk每次接受的数据片段
    console.log("数据传输");
    rawData += chunk.toString("utf8");
    console.log(chunk.toString("utf8"));
  });
  res.on("end", () => {
    // fs.writeFileSync("./test.html", rawData);
    console.log("传输完成");


    //通过cheerio分析
    let $ = cheerio.load(rawData);
    $('img').each((index , el)=>{
        console.log($(el).attr('src'))
    })


    
  });
})
  .on("error", (err) => {
    console.log("请求错误");
  });
