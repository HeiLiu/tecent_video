const app = getApp()
function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
//http://p9utic4op.bkt.clouddn.com/m0512xthau4.mp4
Page({
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '',
  data: {
    src: '',
    playInfo:{},
    danmuList: [{
        text: '我第一~~',
        color: '#ff0000',
        time: 1
      },
      {
        text: '承包空屏',
        color: '#ff00ff',
        time: 3
      }, {
        text: '奇门显像、风后奇门',
        color: '#ff0000',
        time: 7
      },
      {
        text: 'VIP✌',
        color: '#ff00ff',
        time: 20
      }, {
        text: '表白王也道长',
        color: '#ff0c00',
        time: 24
      },
      {
        text: '前面那个放学别走',
        color: '#ff00ff',
        time: 27
      }, {
        text: '我的',
        color: '#ff00ff',
        time: 28
      }, {
        text: '表白王也道长',
        color: '#ff0c00',
        time: 39
      },
      {
        text: '宝儿姐',
        color: '#ff00ff',
        time: 35
      },
      {
        text: '老子天下第一最牛批',
        color: '#ff00ff',
        time: 35
      },
    ]
  },
  onLoad(){
    let playInfo = app.globalData.playInfo;
    // console.log(playUrl);
    this.setData({
      playInfo
    });
    if(this.data.playInfo.title == '奔跑吧2携手爱情公寓'){
      let danmuList = this.data.danmuList;
      danmuList =[{
        text: '我第一~~',
        color: '#ff0000',
        time: 1
      },
      {
        text: '承包空屏',
        color: '#ff00ff',
        time: 3
      },{
        text: '来啦来啦',
        color: '#ff00ff',
        time: 4
      },{
        text: '香烟瓜子啤酒矿泉水~让一让',
        color: '#ff00ff',
        time: 6
      },{
        text: '✌前排小板凳,终于有一期好看的啦',
        color: '#ff00ff',
        time: 7
      },
      {
        text: 'VIP✌',
        color: '#ff00ff',
        time: 15
      }, {
        text: '跑男强行续命',
        color: '#ff0c00',
        time: 24
      },
      {
        text: '前面那个放学别走',
        color: '#ff00ff',
        time: 27
      }, {
        text: '爱情公寓终于要来啦',
        color: '#ff00ff',
        time: 28
      }, {
        text: '啦啦啦~德玛西亚',
        color: '#ff0c00',
        time: 39
      },
      {
        text: '8.10一起去看电影呀',
        color: '#ff00ff',
        time: 35
      },
      {
        text: '老子天下第一最牛批',
        color: '#ff00ff',
        time: 35
      },
    ];
    this.setData({
      danmuList
    })    
    }
  },
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  bindButtonTap: function () {
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function (res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  }
})