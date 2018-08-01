//app.js
var login = require("utils/loginMgr.js");
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // // 1.登录 这里拿到oppnid 和 sessionkey (用户唯一标识)
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     console.log(res)
    //     this.globalData.code = res.code
    //   }
    // })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo
    //           this.globalData.encryptedData = res.encryptedData
    //           this.globalData.iv = res.iv

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })

    // this.loginMgr.login(function(info){
    //   if(info != null){
    //     console.log(">>>> login callback ");
    //     console.log(info)
    //     getApp().globalData.userInfo = info;
    //   }
    // })
  },
  globalData: {
    userInfo: null,
    winHeight: wx.getSystemInfoSync().screenHeight,
  },

  loginMgr: new login()
})