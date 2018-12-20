//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    wx.setStorage({
      key: 'news4',
      data: {
        "title": "Android 9 带着 AI 来了，为什么我们还停留在 6？",
        "data": "在正式版推送前，Google 曾陆续发布了三个测试版本。据 Google 官方博客表示，在这期间，共有超过 140000 名开发者通过 Android Beta 项目试用了之前发布的开发者预览版，收到了超过 1000 条报错与特性请求 ",
        "url":"https://blog.csdn.net/csdnnews/article/details/81518145"
      }
    })
    wx.setStorage({
      key: 'news2',
      data: {
        "title": "Android与汽车",
        "data": "大家最熟悉的Android系统应该是手机和平板设备上的，大部分人可能没想过Android系统和汽车有什么关系。但实际上，Android系统在四年前就在布局汽车这个平台。我最近对相关内容做了一些了解。下面将我所了解到的信息分享给大家。 ",
        "url":"https://blog.csdn.net/weixin_40581980/article/details/81031411"
      }
    })
    wx.setStorage({
      key: 'news3',
      data: {
        "title": "Android版本列表",
        "data": "从 Oreo 开始，每个细分版本均采用新的细分版本号格式，即 PVBB.YYMMDD.bbb。P 部分表示平台版本代号的第一个字母，例如 O 表示 Oreo。V 部分表示支持的行业。按照惯例，P 表示主要平台分支。BB 部分表示由字母和数字组成的代码，Google 可通过该代码识别相应细分版本所属的确切代码分支。 ",
        "url":"https://blog.csdn.net/u013005791/article/details/52228727"
      }
    })
    wx.setStorage({
      key: 'news1',
      data: {
        "title": "Android 8.0中的一些更改",
        "data": "Google Play应用市场对于应用的targetSdkVersion有了更为严a格的要求。从 2018 年 8 月 1 日起，所有向 Google Play 首次提交的新应用都必须针对 Android 8.0 (API 等级 26) 开发； 2018 年 11 月 1 日起，所有 Google Play 的现有应用更新同样必须针对 Android 8.0.",
        "url":"https://blog.csdn.net/a17779603730/article/details/84980143"
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  globalData: {
    userInfo: null
  }
})