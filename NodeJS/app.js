var express = require('express');
var app = express();
var url = require("url");
var https=require("https");
var ConfMgr = require("./config")
const userMgr_ = require("./utils/userMgr")
var mime=require('mime');
var path = require('path');
//https
const fs = require('fs');
const options = {
  // path:'/login',
  // method:'GET',
  key: fs.readFileSync('./../uni67_certificate/Nginx/2_www.uni67.com.key'),
  cert: fs.readFileSync('./../uni67_certificate/Nginx/1_www.uni67.com_bundle.crt')
};

// app.use(function(req,res){
//     res.status(404).send("没有这个页面！");
// });


//login请求处理
function login(req ,res){
  console.log(req.query);
  var query = req.query; 
  // if(!query.hasOwnProperty("code") || !query.hasOwnProperty("encryptedData") || !query.hasOwnProperty("iv") ){
  // if(!( 'code' in query ) || !( 'encryptedData' in query ) || !( 'iv' in query )){ 
  //   console.log(">>> query. null")
  //   res.send("{ status:0 , err:\"query. null\"}");
  //   return 
  // }

  var code  = decodeURI(query.code);  //用户登录凭证（有效期五分钟）  使用 code 换取 openid 和 session_key 等信息 https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code
  var unionid = query.unionid;  //部分情况下才会返回这个
  var encryptedData = decodeURI(query.encryptedData);
  var iv = decodeURI(query.iv);

  if(code == null || code == ""){
    console.log(">>> code null");
    sendend(res  ,"{ status:0 , err:\"code null\"}");
    return ;
  };
  if(encryptedData == null || encryptedData == ""){
    console.log(">>> encryptedData null");
    sendend(res ,"{ status:0 , err:\"encryptedData null\"}");
    return ;
  };
  if(iv == null || iv == ""){
    console.log(">>> iv null");
    sendend(res ,"{ status:0 , err:\"iv null\"}");
    return ;
  };

  if(unionid != null && unionid != ""){
    sendend(res ,"{ status:1 , success:\"has unionid\"}");
  }else{
    var um = new userMgr_();
    um.requestWeChat(code,encryptedData,iv);
    sendend(res ,"{ status:1 , success:\"get unionid\"}");
  }
}

function sendend(res , msg){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // if(ishttps ==true){
  //   res.end(msg);
  // }else{
    res.send(msg);
  // }
}

//
app.get("/login",function(req ,res){
  try{
    login(req,res);
  }catch(err){
    console.log(">>> http get login err");
    console.log(err);
    sendend(res ,"{ status:0 , err:\"catch err\"}") ;
  }
});

//http login
app.listen(ConfMgr.HTTP_PORT,function(){
  console.log(">>>> app listen port : " + ConfMgr.HTTP_PORT);
});

//https login
https.createServer(options,app).listen(ConfMgr.HTTPS_PORT , function(){
  console.log(">>>> https listen port : " + ConfMgr.HTTPS_PORT);
});

//cocos creator web
// app.get("/creator",function(req ,res){
//   console.log(">>>>> creator")
//   fs.readFile('./web-mobile/index.html','utf-8',function(err,data){
//     if(err){
//       console.log(">>> respone html err");
//       console.log(err);
//       res.send("{ err }");
//       return 
//     }
//     console.log(data)
//     res.writeHead(200,{"Content-Type":"text/html"});//这个会报错。还需要支持css 、js
//     res.write(data.toString());
//     res.end();
//   })
// });


app.use(express.static('web-mobile'))

// app.listen(8001,function(){
//   console.log(">>>> app listen port : " + 8001);
// });

module.exports = app;
