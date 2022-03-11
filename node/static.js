/*
 * @Author: your name
 * @Date: 2022-03-11 11:53:18
 * @LastEditTime: 2022-03-11 14:58:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \前端项目test\NodeExpress\node\static.js
 */


//类似于apche的静态资源目录，可以直接访问


const express = require('express')

const path = require('path')//路径拼接的插件
const app = express()

// console.log(__dirname);//获取绝对路径

// app.use(express.static(path.join(__dirname,'./static')))//直接就可以访问bg.jpg

//建议在静态目录前加上一个指定路径
app.use('/public',express.static(path.join(__dirname, "./static")));//需要加上public路径


app.listen(3000 ,()=>{
    console.log('start')
})


