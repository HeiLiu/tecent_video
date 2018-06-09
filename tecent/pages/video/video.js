// pages/categories/categories.js
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
      detail:[{
        title:'杨玉环',
        
      }],
      toView:'guowei'
    },
    switchCategory(e) {
      var index = e.currentTarget.dataset.index;
      this.setData({
        toView:e.currentTarget.dataset.id,
        curIndex: index ? index : 0
      })
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