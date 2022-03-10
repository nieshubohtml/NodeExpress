<!--
 * @Author: your name
 * @Date: 2022-03-10 15:50:07
 * @LastEditTime: 2022-03-10 18:18:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \前端项目test\newNode\node\redme.md
-->

###分析什么是api
1.接收用户传递的数据
2.处理数据
3.返回数据


### expresss 基本使用


```
npm install express -save
```

require(第三方插件)，是在nodemoudle中找，一级找不到自动向上寻找


### 服务器相关

服务器：
1. 服务器就是一台电脑 
2. 服务器软件（apach tomcat iis ngnix node）
3. 服务器ip 和端口号

服务器端口号只能有一个存在

### 关于接口问题

res.send是接口返回客户端信息
req.body是接收客户端西信息

req.body在post请求时，不能直接解析，需要用到插件body-parser。

其中app.use是express“调用中间件的方法”，有两种解析方法；
eg:以下是解析JSON格式的方法

1. app.use(bodyParser.json({ type: "application/json" }));//解析JSON文件

2. var jsonParser = bodyParser.json();

app.post('/api/users', jsonParser, function (req, res) {
  // create user in req.body
})

