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
// https://apd-ffd5b6848ea656ba3ea922752cd01391.v.smtcdns.com/om.tc.qq.com/Agq27Cu5Cdcb_jfUErgPjlPnvIoWC3vu1SCv_RFve4LE/z0526d79uwx.mp4?sdtfrom=v3010&guid=cc6ae43868f6f4e15c3c7d7525007d0e&vkey=752CB230096D4A277CE70097103A3C00BAA8732658B77DB407026A1FF30227E629E52172E0FB0B48BCC31401CD600C3FB26166A27E6091258A5D92F4D2951A9B1BB8955F5299723619CDFF3AA3CE9C21C43D7C5B1D73BDA7E5377424C5E1A08988CED9F915EA28E05E0DD0FC93868B98B284AFBCA8FDC786&platform=3
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
    })
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