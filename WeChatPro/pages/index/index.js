//index.js
//获取应用实例
const app = getApp()
// var WXBizDataCrypt = require('./WXBizDataCrypt')
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // 在没有 open-type=getUserInfo 版本的兼容处理

    
    this.doLogin()
  },
  getUserInfo: function(e) {
    console.log(e)
    this.doLogin()
  },
  
  doLogin:function(){
    var self = this;
    app.loginMgr.getUserInfo(function (info) {
      self.setData({
        userInfo: info,
        hasUserInfo: true,
      })
      app.globalData.userInfo = info;
    })
  }

})
