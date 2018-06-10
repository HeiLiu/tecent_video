// pages/categories/categories.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
      category: [{
          name: '王者荣耀',
          id: '王者荣耀'
        },
        {
          name: '快看',
          id: 'kuaikan'
        },
        {
          name: '神剪辑',
          id: 'shenjianji'
        },
        {
          name: '搞笑',
          id: 'gaoxiao'
        },
        {
          name: '娱乐',
          id: 'yule'
        },
        {
          name: '新闻',
          id: 'xinwen'
        },
        {
          name: '神剪辑',
          id: 'shenjianji'
        },
        {
          name: '搞笑',
          id: 'gaoxiao'
        },
        {
          name: '娱乐',
          id: 'yule'
        },
        {
          name: '新闻',
          id: 'xinwen'
        }
      ],
      curIndex: 0,
      sections:[{
      title:'杨玉环',
      videos:[{
        imgUrl:'http://puui.qpic.cn/vpic/0/v0554n8npkx_160_90_3.jpg/0',
        detail:'杨玉环史诗级精品教学教你如何打出爆发流伤害！'
      },{
        imgUrl:'http://puui.qpic.cn/vpic/0/n0552sf7ow6_160_90_3.jpg/0',
        detail:'大熊王者荣耀：杨玉环实战视频伤害惊人'
      },{
        imgUrl:'http://puui.qpic.cn/vpic/0/b05535ead7a_160_90_3.jpg/0',
        detail:'王者荣耀 杨玉环全场疯狂输出54% 输出局'
      },{
        imgUrl:'http://puui.qpic.cn/vpic/0/h0662qybzhp_160_90_3.jpg/0',
        detail:'王者荣耀 杨玉环超实用实战打法解析，学会它上星耀不是梦'
      }]  
    },{
      title:'德古拉解说',
      videos:[{
        imgUrl:'http://puui.qpic.cn/vpic/0/t0676avi3ma_160_90_3.jpg/0',
        detail:'新马可波罗18杀四连超凡了解一下,秒天秒地秒空气'
      },{
        imgUrl:'http://puui.qpic.cn/vpic/0/h0668sikfj2_160_90_3.jpg/0',
        detail:'新英雄元歌8技能打开你的脑洞'
      },{
        imgUrl:'http://puui.qpic.cn/vpic/0/o06784dg4gv_160_90_3.jpg/0',
        detail:'公孙离四连超凡天秀无极限'
      },{
        imgUrl:'http://puui.qpic.cn/vpic/0/r0658rxy89j_160_90_3.jpg/0',
        detail:'花木兰通天边路暴捶宫本三杀定乾坤'
      }]  
    }],
    },
    switchCategory(e) {
      var index = e.currentTarget.dataset.index;
      this.setData({
        toView:e.currentTarget.dataset.id,
        curIndex: index ? index : 0
      })
    },
    playTap(){
      // http://p9utic4op.bkt.clouddn.com/v0554n8npkx.p712.1.mp4
      app.globalData.playInfo = {
        url: "http://p9utic4op.bkt.clouddn.com/v0554n8npkx.p712.1.mp4",
        title: '杨玉环史诗级精品教学教你如何打出爆发流伤害！'
    }
    wx.navigateTo({
        url: '/pages/video_detail/video_detail'
    })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log(this.data.sections)
    },
  
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      wx.request({
        url:`http://www.gdfengshuo.com/api/wx/cate-detail.txt`,
        success:(res)=>{
          this.setData({
            detail:res.data
          })
        }
      })
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
  
    },
  
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
  
    },
  
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
  
    }
  })