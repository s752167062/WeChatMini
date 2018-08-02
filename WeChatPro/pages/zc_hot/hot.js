// pages/zc_hot/hot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textList: [
      {
        icon: `http://img.zcool.cn/community/01b88659bb7903a801212fb7949ee0.jpg@2o.jpg`,
        main_picture: "http://img.zcool.cn/community/01b88659bb7903a801212fb7949ee0.jpg@2o.jpg",
        name: "xxx",
        time: "format(text.publishedTime)",
        title: "ttt",
        share_titleimg: "http://img.zcool.cn/community/01b88659bb7903a801212fb7949ee0.jpg@2o.jpg",
        share_title: "share_title.titleImage",
        summary: "handleSum(text.content)",
        id: "text.url.slice(3)"
      },
      {
        icon: `http://img.zcool.cn/community/01b88659bb7903a801212fb7949ee0.jpg@2o.jpg`,
        main_picture: "http://img.zcool.cn/community/01b88659bb7903a801212fb7949ee0.jpg@2o.jpg",
        name: "xxx",
        time: "format(text.publishedTime)",
        title: "ttt",
        share_titleimg: "http://img.zcool.cn/community/01b88659bb7903a801212fb7949ee0.jpg@2o.jpg",
        share_title: "share_title.titleImage",
        summary: "handleSum(text.content)",
        id: "text.url.slice(3)"
      },
      {
        icon: `http://img.zcool.cn/community/01b88659bb7903a801212fb7949ee0.jpg@2o.jpg`,
        main_picture: "http://img.zcool.cn/community/01b88659bb7903a801212fb7949ee0.jpg@2o.jpg",
        name: "xxx",
        time: "format(text.publishedTime)",
        title: "ttt",
        share_titleimg: "http://img.zcool.cn/community/01b88659bb7903a801212fb7949ee0.jpg@2o.jpg",
        share_title: "share_title.titleImage",
        summary: "handleSum(text.content)",
        id: "text.url.slice(3)"
      },],
    listNum: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log(">> onPullDownRefresh")
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(">> onReachBottom")
  },

  goDetail:function(event){
    const Id = event.currentTarget.dataset.id;
    const url= "../post/post?id=${Id}";
    console.log(">>>>>>>> goDetail " + Id + url);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
})