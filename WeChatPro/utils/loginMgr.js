function loginMgr(){
  this.code = null;
  this.session_key = null;
  this.encryptedData = null;
  this.iv = null;
  this.userInfo = null;
}

loginMgr.prototype.login = function(callback){
  // 登录
  wx.login({
    success: res => {
      this.code = res.code

      // 获取用户信息
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            console.log(">>> 已授权");
            wx.getUserInfo({
              success: infores => {
                // 可以将 infores 发送给后台解码出 unionId
                this.userInfo = infores.userInfo
                this.encryptedData = infores.encryptedData
                this.iv = infores.iv

                console.log(">>> this.encryptedData " + this.encryptedData);
                console.log(">>> this.iv " + this.iv);

                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                if(callback != null){
                  callback(this.userInfo)
                }

                // 发送 code 到后台换取 openId, sessionKey, unionId
                var url = "http://192.168.1.45:8080/login";
                var url_encode  = encodeURI(url)
                console.log(">>>> url encode : " + url_encode);
                wx.request({
                  url: url_encode,
                  data: {
                    code: this.code,
                    encryptedData: this.encryptedData,
                    iv: this.iv,
                  },
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  method: 'GET',
                  success: function (respon) {
                    console.log(respon.data);

                  }
                })
              }
            })
          }else{
            console.log(">>> 还没授权");
          }
        }
      })
    }
  })
}

loginMgr.prototype.getUserInfo = function(callback){
  if (this.userInfo != null){
    if(callback!= null){
      callback(this.userInfo);
    }
  }else{
    this.login(callback);
  }
}

module.exports = loginMgr;