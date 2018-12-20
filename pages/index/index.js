//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  gotoIntent: function () {
    //console.log('-------------click', e);
    wx.navigateTo({
      url: '../../pages/Intent/Intent?num=1&name="ads"',
    })
  },
  gotoListView: function () {
    //console.log('-------------click', e);
    wx.navigateTo({
      url: '../../pages/ListView/ListView?num=1&name="ads"',
    })
  },
  gotoViewPager: function () {
    //console.log('-------------click', e);
    wx.navigateTo({
      url: '../../pages/ViewPager/ViewPager?num=1&name="ads"',
    })
  },
  gotoAdapter: function () {
    //console.log('-------------click', e);
    wx.navigateTo({
      url: '../../pages/Adapter/Adapter?num=1&name="ads"',
    })
  },
  gotoContent: function () {
    //console.log('-------------click', e);
    wx.navigateTo({
      url: '../../pages/Content/Content?num=1&name="ads"',
    })
  },
  gotoBroadcast: function () {
    //console.log('-------------click', e);
    wx.navigateTo({
      url: '../../pages/Broadcast/Broadcast?num=1&name="ads"',
    })
  },
  gotoService: function () {
    //console.log('-------------click', e);
    wx.navigateTo({
      url: '../../pages/Service/Service?num=1&name="ads"',
    })
  },
  gotoActivity: function () {
    //console.log('-------------click', e);
    wx.navigateTo({
      url: '../../pages/Activity/Activity?num=1&name="ads"',
    })
  },
  gotoads1: function () {
    //console.log('-------------click', e);
    wx.navigateTo({
      url: '../../pages/ads/ads?num=1&name="ads"',
    })
  },
  gotoads2: function () {
    //console.log('-------------click', e);
    wx.navigateTo({
      url: '../../pages/ads/ads?num=2&name="ads"',
    })
  },
  gotoads3: function () {
    //console.log('-------------click', e);
    wx.navigateTo({
      url: '../../pages/ads/ads?num=3&name="ads"',
    })
  },
  gotonews1:function(){
    //console.log('-------------click', e);
    wx.navigateTo({
      url: '../../pages/news/news?num=1&name="ptt"',
    })
  },
  gotonews2: function () {
    //console.log('-------------click', e);
    wx.navigateTo({
      url: '../../pages/news/news?num=2&name="ptt"',
    })
  },
  gotonews3: function () {
    //console.log('-------------click', e);
    wx.navigateTo({
      url: '../../pages/news/news?num=3&name="ptt"',
    })
  },
  gotonews4: function () {
    //console.log('-------------click', e);
    wx.navigateTo({
      url: '../../pages/news/news?num=4&name="ptt"',
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
