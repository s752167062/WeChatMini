var https=require("https");
var ConfMgr = require("./../config");
var WXBizDataCrypt = require('./WXBizDataCrypt');
var sqlMgr = require('./sqlMgr');

function userMgr(){
	console.log(">>> userMgr new")
	// this.requestWeChatData = function(){
	// 	console.log(">>>> ssss ")
	// }
}

userMgr.prototype.log = function(data){
	console.log(">>> userMgr log : " + data)
}

userMgr.prototype.requestWeChat = function(code , encryptedData, iv){
	console.log(">>> requestWeChatData ")
	if(code){
		//获取 seesion_key
	    var APPID  = ConfMgr.APPID  ; //"wx908273daa83d469c"//微信开放平台的 appid 
	    var SECRET = ConfMgr.SECRET ; //"9118bace7ae642f92d2994304c15a37f" ;//微信开放平台的 SECRET 
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
	          if(session_key){
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
		            
		            sqlMgr.insert(userAddSql , userAddSql_Params ,function(err , result){
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
	          }else{
	          	  console.log(">>> seesion_key null");
	          }
	          
	      });
	    });
	}else{
		console.log(">>> wechat code null");
	}
}

// var userMgr_ = new userMgr();
module.exports = userMgr;