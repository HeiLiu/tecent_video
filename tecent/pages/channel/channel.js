var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
const app = getApp()
Page({
    data: {
        tabs: ["电视剧", "综艺", "电影", "动漫"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        imgUrls0: [
            '../../assets/post/post1.png',
            'https://puui.qpic.cn/vcover_vt_pic/0/3enwc74hj562xjd1508914052/260',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        ],
        imgUrls1: [
            'http://puui.qpic.cn/tv/0/25633968_612344/0',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        ],
        imgUrls2: [
            'http://puui.qpic.cn/tv/0/25677214_300168/0',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
            '../../assets/post/post1.png'
        ],
        imgUrls3: [
            'http://puui.qpic.cn/tv/0/6008865_453254/0',
            'https://puui.qpic.cn/vcover_vt_pic/0/hzgtnf6tbvfekfv1514980399/220',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
            '../../assets/post/post1.png'
        ],
        indicatorDots: false,
        autoplay: false,
        interval: 5000,
        duration: 1000,
        sections0: [{
            section_title: '',
            posterImgUrl: '',
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
            videos: [ {
                imgUrl: 'http://puui.qpic.cn/tv/0/25731749_498280/0',
                videoInfo: '06-08',
                videoTitle: '高能少年团互怼cp',
                videoContent: '张一山杨紫互相diss年纪大'
            }, {
                imgUrl: 'http://puui.qpic.cn/tv/0/25730925_498280/0',
                videoInfo: '',
                videoTitle: '战神纪·独播',
                videoContent: '陈伟霆林允上演传奇爱情'
            },{
                imgUrl: 'http://puui.qpic.cn/tv/0/25725670_498280/0',
                videoInfo: '06-08',
                videoTitle: '奔跑吧2·要哭了',
                videoContent: '陈赫含泪不忍撕邓超名牌'
            }, {
                imgUrl: 'http://puui.qpic.cn/tv/0/25642166_498280/0',
                videoInfo: '更新至22集',
                videoTitle: '如果, 爱',
                videoContent: '我养你💓张柏芝最深情表白'
            }]
        }],
        sections1: [{
            section_title: '',
            posterImgUrl: '',
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
            posterImgUrl: 'http://puui.qpic.cn/tv/0/25745331_330185/0',
            posterDetail: '262万次播放',
            posterTitle: '高能少年团 第二季',
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
        }],
        sections3: [{
            section_title: '',
            posterImgUrl: '',
            posterDetail: '06-09',
            posterTitle: '🍵六首原创唱跳超过瘾',
            videos: [{
                imgUrl: 'http://puui.qpic.cn/tv/0/11063833_300168/0',
                videoInfo: '全12集',
                videoTitle: '全职高手·会员免费看',
                videoContent: '十年热血书写电竞辉煌'
            }, {
                imgUrl: 'http://puui.qpic.cn/vcover_vt_pic/0/j18xzp93h4c1ofn1514536234/0',
                videoInfo: '全30集',
                videoTitle: '武庚纪·福利花絮',
                videoContent: '开播周年·大王回归'
            }, {
                imgUrl: 'http://puui.qpic.cn/vpic/0/g0612iakp1e_160_90_3.jpg/0',
                videoInfo: '24集完结',
                videoTitle: '一人之下2',
                videoContent: '一人之下·罗天大醮篇'
            }, {
                imgUrl: 'http://puui.qpic.cn/tv/0/25730925_498280/0',
                videoInfo: '',
                videoTitle: '战神纪·独播',
                videoContent: '陈伟霆林允上演传奇爱情'
            }]
        }, {
            section_title: "最新动漫热血推送",
            posterImgUrl: 'http://puui.qpic.cn/vcover_vt_pic/0/j18xzp93h4c1ofn1514536234/0',
            posterDetail: '更新至25集',
            posterTitle: '武庚纪 第二季',
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
    playTap3(){
        app.globalData.playInfo = {
            url: "http://p9utic4op.bkt.clouddn.com/m0512xthau4.mp4",
            title: '一人之下2 罗天大醮篇'
        }
        wx.navigateTo({
            url: '/pages/video_detail/video_detail'
        })
    },
    onLoad: function () {
        var that = this;
        wx.getSystemInfo({
            success: function (res) {
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