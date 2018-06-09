var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
    data: {
        tabs: ["电视剧", "综艺", "电影","动漫"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        imgUrls: [
            'https://puui.qpic.cn/vcover_vt_pic/0/3enwc74hj562xjd1508914052/260',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
            '../../assets/post/post1.png'
          ],
          indicatorDots: false,
          autoplay: false,
          interval: 5000,
          duration: 1000
    },
    onLoad: function () {
        var that = this;
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
        });
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    }
});