// pages/subject/subject.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    wlist: [
     //上课长度全部默认为两节课
      { "xqj": 1, "sksj": 1, "skcd":2, "kcxx": "微积分 品学楼101 1~16周"},
      { "xqj": 1, "sksj": 3, "skcd": 2, "kcxx": ""},
      { "xqj": 1, "sksj": 6, "skcd": 2, "kcxx": ""},
      { "xqj": 1, "sksj": 8, "skcd": 2, "kcxx":"通用英语 品学楼318 1~16周"},
      { "xqj": 1, "sksj": 10, "skcd": 2, "kcxx": "" },
      { "xqj": 1, "sksj": 12, "skcd": 2, "kcxx": "" },
      { "xqj": 2, "sksj": 1, "skcd": 2, "kcxx": "" },
      { "xqj": 2, "sksj": 3, "skcd": 2, "kcxx": "计算机组成原理 品学楼210 1~16周" },
      { "xqj": 2, "sksj": 6, "skcd": 2, "kcxx": "C语言 品学楼402 1~16周" },
      { "xqj": 2, "sksj": 8, "skcd": 2, "kcxx": "" },
      { "xqj": 2, "sksj": 10, "skcd": 2, "kcxx": "" },
      { "xqj": 2, "sksj": 12, "skcd": 2, "kcxx": "" },
      { "xqj": 3, "sksj": 1, "skcd": 2, "kcxx": "" },
      { "xqj": 3, "sksj": 3, "skcd": 2, "kcxx": "java 品学楼216 4~12周" },
      { "xqj": 3, "sksj": 6, "skcd": 2, "kcxx": "数据结构与算法 品学楼306 1~16周" },
      { "xqj": 3, "sksj": 8, "skcd": 2, "kcxx": "" },
      { "xqj": 3, "sksj": 10, "skcd": 2, "kcxx": "" },
      { "xqj": 3, "sksj": 12, "skcd": 2, "kcxx": "" },
      { "xqj": 4, "sksj": 1, "skcd": 2, "kcxx": "微积分 品学楼218 1~16周" },
      { "xqj": 4, "sksj": 3, "skcd": 2, "kcxx": "" },
      { "xqj": 4, "sksj": 6, "skcd": 2, "kcxx": "乒乓球 体育馆 1~16周" },
      { "xqj": 4, "sksj": 8, "skcd": 2, "kcxx": "数据结构与算法 品学楼216 4~16周" },
      { "xqj": 4, "sksj": 10, "skcd": 2, "kcxx": "线性代数 品学楼504 1~16周" },
      { "xqj": 4, "sksj": 12, "skcd": 2, "kcxx": "" },
      { "xqj": 5, "sksj": 1, "skcd": 2, "kcxx": "" },
      { "xqj": 5, "sksj": 3, "skcd": 2, "kcxx": "软件工程 品学楼403 1~16周" },
      { "xqj": 5, "sksj": 6, "skcd": 2, "kcxx": "" },
      { "xqj": 5, "sksj": 8, "skcd": 2, "kcxx": "" },
      { "xqj": 5, "sksj": 10, "skcd": 2, "kcxx": "" },
      { "xqj": 5, "sksj": 12, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 1, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 3, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 6, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 8, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 10, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 12, "skcd": 2, "kcxx": " " },
      { "xqj": 7, "sksj": 1, "skcd": 2, "kcxx": " " },
      { "xqj": 7, "sksj": 3, "skcd": 2, "kcxx": " " },
      { "xqj": 7, "sksj": 6, "skcd": 2, "kcxx": " " },
      { "xqj": 7, "sksj": 8, "skcd": 2, "kcxx": "  " },
      { "xqj": 7, "sksj": 10, "skcd": 2, "kcxx": "" },
      { "xqj": 7, "sksj": 12, "skcd": 2, "kcxx": " " }
    ]
  },
  showCardView: function (e) {
    wx.navigateTo({
      url: '../setSubject/setSubject?id=' + e.currentTarget.id
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var kcxx = wx.getStorageSync('kcxx');
    var skcd = wx.getStorageSync('skcd');
    this.setData({ kcxx: kcxx });
    this.setData({ skcd: skcd});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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