/*
 * @Author: your name
 * @Date: 2022-03-11 09:57:55
 * @LastEditTime: 2022-03-11 11:47:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \前端项目test\NodeExpress\node\roterText\server.js
 */

const express = require("express")
const bodyParser = require("body-parser");
const app  = express()


let userrouter = require('./router/userrouter')//导入router
let shangpin = require("./router/shangpin");

app.use(bodyParser.json({ type: "application/json" }));


// app.get('/user/add',(req,res)=>{
//     console.log(req.query);
//     res.send('成功了')
// })




// app.use('/',(req, res ,next)=>{//中间件，进行拦截，自定义中间件
//     console.log(req.query);
//     let { token } = req.query;
//     if (token) {
//         next()//才能继续执行
//     }else{
//         res.send('缺少token')
//     }
// })



//router分层，通过use中间件进行封装
app.use('/user', userrouter)

app.use("/shangpin", shangpin);

app.listen(3000, ()=>{
    console.log('servers start')
})