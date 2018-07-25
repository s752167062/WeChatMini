var express = require('express');
var mysql = require('mysql');
var app = express();
var https=require("https");
var util = require('util');
var WXBizDataCrypt = require('./WXBizDataCrypt')
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

var connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"1312075",
  port:"3306",
  database:"wechat_user",
});
connection.connect();

//
app.get("/login",function(req ,res){
  console.log(req.query);
  var query = req.query; 
  
  // var appid = query.appid;
  var code  = decodeURI(query.code);  //用户登录凭证（有效期五分钟）  使用 code 换取 openid 和 session_key 等信息 https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code
  var unionid = query.unionid;  //部分情况下才会返回这个
  var encryptedData = decodeURI(query.encryptedData);
  var iv = decodeURI(query.iv);

  if(code == null || code == ""){
    console.log(">>> code null");
    res.send("{ status:0 , err:\"code null\"}");
    return ;
  };
  if(encryptedData == null || encryptedData == ""){
    console.log(">>> encryptedData null");
    res.send("{ status:0 , err:\"encryptedData null\"}");
    return ;
  };
  if(iv == null || iv == ""){
    console.log(">>> iv null");
    res.send("{ status:0 , err:\"iv null\"}");
    return ;
  };

  if(unionid != null && unionid != ""){

  }else{
    //获取 seesion_key
    var APPID  = "wx908273daa83d469c"//微信开放平台的 appid 暂时放这里，后面统一成配置表
    var SECRET = "9118bace7ae642f92d2994304c15a37f" ;//微信开放平台的 SECRET 暂时放这里，后面统一成配置表
    var url = "https://api.weixin.qq.com/sns/jscode2session?appid=" +APPID +"&secret="+ SECRET+"&js_code="+ code + "&grant_type=authorization_code"
    https.get(url,function(req,res){
      var data = '';
      req.on('data' , function(data_){
          data += data_;
      });

      req.on('end',function(){
          // console.log(data);

          var object_data =JSON.parse(data);
          var session_key = object_data.session_key
          var openid = object_data.openid

          console.log(">> session_key " + session_key);
          console.log(">> APPID " + APPID );
          console.log(">> encryptedData " + encryptedData );
          console.log(">> iv " + iv );

          try{
            var pc = new WXBizDataCrypt(APPID, session_key)
            var data_dec = pc.decryptData(encryptedData , iv)
            // console.log('解密后 data: ', data_dec)

            var nickName  = data_dec.nickName
            var gender = data_dec.gender
            var language = data_dec.language
            var city = data_dec.city
            var province = data_dec.province
            var country = data_dec.country
            var avatarUrl = data_dec.avatarUrl
            var unionId = data_dec.unionId

            var  userAddSql = 'insert into user_table (id,uuid,openid,nickname,icon_url,sex,city,province,inviter_id) value (?,?,?,?,?,?,?,?,?)';
            var  userAddSql_Params = [0,unionId ,openid,nickName,avatarUrl,gender,city,province,""];
            connection.query(userAddSql , userAddSql_Params , function(err , result){
              if(err){
                console.log(">>>>>>> !!! add user to sql err");
                console.log(err);
                return ;
              }

              console.log('inserted ! :',result); 
            })
          }catch(err){
            console.log(">>>>>>> !!! WXBizDataCrypt  decryptData err");
            console.log(err);
          }
      });
    });

  }
});

app.listen(8080,function(){
  console.log(">>>> app listen 8080 port");
});

module.exports = app;
