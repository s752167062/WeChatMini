//index.js
//获取应用实例
const app = getApp()
// var WXBizDataCrypt = require('./WXBizDataCrypt')
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    duration: 2000,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    loading: false,
    plain: false,
    lists:[],
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
  },

  bindGetMsg:function(data){
    console.log("data")
    wx.showModal({
      title: '提示',
      content: data,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },

  add:function(){
    console.log(">>> addBtn ");
    var { lists } = this.data;
    var newData = { url: "http://img.zcool.cn/community/01b88659bb7903a801212fb7949ee0.jpg@2o.jpg",name:"嘻嘻嘻嘻嘻" ,time:"2018-7-30 15:34"};
    lists.push(newData);
    this.setData({
      lists: lists
    }) 
  }

})
