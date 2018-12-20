//ads.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  onLoad: function (option) {
    console.log('------------参数', option);
    var that = this;
    that.getads(option);
   
  },
  getads: function (para) {
    var that = this;
    var num = para.num;
    if (num == 1) {
     var title="广告一"
      that.setData({
        title: title,
      })
    }
    if (num == 2) {
      var title = "广告二"
      that.setData({
        title: title,
      })
    }
    if (num == 3) {
      var title = "广告三"
      that.setData({
        title: title,
      })
    }
    if (num == 4) {
      var title = "广告四"
      that.setData({
        title: title,
      })
    }

  }
})
