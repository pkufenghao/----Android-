//news.js
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
    var that=this;
    that.getnews(option);
    
  },
  getnews:function(para){
  var that=this;
  var num=para.num;
  if(num==1){
    wx.getStorage({
      key: 'news1',//对应存储的key名
      success: function (res) {
        //成功之后的操作，建议还是先打印res找到需要的东西
        console.log(res);
        var title =res.data.title;
        var data =res.data.data;
        var url =res.data.url;
        that.setData({
          title: title,
          data:data,
          news_url:url
        })
      }
    })
    
  }
    if (num == 2) {
      wx.getStorage({
        key: 'news2',//对应存储的key名
        success: function (res) {
          //成功之后的操作，建议还是先打印res找到需要的东西
          console.log(res);
          var title = res.data.title;
          var data = res.data.data;
          var url = res.data.url;
          that.setData({
            title: title,
            data: data,
            news_url: url
          })
        }
      })
    }
    if (num == 3) {
      wx.getStorage({
        key: 'news3',//对应存储的key名
        success: function (res) {
          //成功之后的操作，建议还是先打印res找到需要的东西
          console.log(res);
          var title = res.data.title;
          var data = res.data.data;
          var url = res.data.url;
          that.setData({
            title: title,
            data: data,
            news_url: url
          })
        }
      })
    }
    if (num == 4) {
      wx.getStorage({
        key: 'news4',//对应存储的key名
        success: function (res) {
          //成功之后的操作，建议还是先打印res找到需要的东西
          console.log(res);
          var title = res.data.title;
          var data = res.data.data;
          var url = res.data.url;
          that.setData({
            title: title,
            data: data,
            news_url: url
          })
        }
      })
    }

  }
})
