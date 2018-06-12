//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,  
    sections: [{
      section_title: '创造101 人气学长助阵公演',
      posterImgUrl: 'http://puui.qpic.cn/tv/0/25725891_1080607/0',
      posterDetail: '06-09',
      posterTitle: '🍵六首原创唱跳超过瘾',
      videos: [{
        imgUrl: 'http://puui.qpic.cn/tv/0/25725670_498280/0',
        videoInfo: '06-08',
        videoTitle: '奔跑吧2·要哭了',
        videoContent: '陈赫含泪不忍撕邓超名牌'
      }, {
        imgUrl: 'http://puui.qpic.cn/tv/0/25642166_498280/0',
        videoInfo: '更新至22集',
        videoTitle: '如果, 爱',
        videoContent: '我养你💓张柏芝最深情表白'
      }, {
        imgUrl: 'http://puui.qpic.cn/tv/0/25731749_498280/0',
        videoInfo: '06-08',
        videoTitle: '高能少年团互怼cp',
        videoContent: '张一山杨紫互相diss年纪大'
      }, {
        imgUrl: 'http://puui.qpic.cn/tv/0/25730925_498280/0',
        videoInfo: '',
        videoTitle: '战神纪·独播',
        videoContent: '陈伟霆林允上演传奇爱情'
      }]
    }, {
      section_title: "周末好心情，快快嗨起来(●'◡'●)✌",
      posterImgUrl: 'http://puui.qpic.cn/tv/0/25738125_498280/0',
      posterDetail: '06-09',
      posterTitle: '爱国者[首播 会员提前看]',
      videos: [{
        imgUrl: 'http://puui.qpic.cn/tv/0/25725670_498280/0',
        videoInfo: '06-08',
        videoTitle: '奔跑吧2·要哭了',
        videoContent: '陈赫含泪不忍撕邓超名牌'
      }, {
        imgUrl: 'http://puui.qpic.cn/tv/0/25642166_498280/0',
        videoInfo: '更新至22集',
        videoTitle: '如果, 爱',
        videoContent: '我养你💓张柏芝最深情表白'
      }, {
        imgUrl: 'http://puui.qpic.cn/tv/0/25731749_498280/0',
        videoInfo: '06-08',
        videoTitle: '高能少年团互怼cp',
        videoContent: '张一山杨紫互相diss年纪大'
      }, {
        imgUrl: 'http://puui.qpic.cn/tv/0/25730925_498280/0',
        videoInfo: '',
        videoTitle: '战神纪·独播',
        videoContent: '陈伟霆林允上演传奇爱情'
      }]
    }]
  },
  playTap() {
    app.globalData.playInfo = {
      url: "http://p9utic4op.bkt.clouddn.com/o0026omczct%20%282%29.mp4",
      title: '奔跑吧2携手爱情公寓'
    }
    wx.navigateTo({
      url: '/pages/video_detail/video_detail'
    })
  },
  onLoad: function () {

  }
})