//app.js
App({
  onLaunch: function () {
     //指定云开发环境
     wx.cloud.init({
      env:'timetable-81f1c',
      traceUser:true
    })
    //从缓存中获取用户信息
    //temp code
    const ui = wx.getStorageSync('openid');
    this.globalData.userInfo.openid = ui;
    // const ui = wx.getStorageSync('userinfo')
    // this.globalData.userInfo = ui;
    //获取全局变量（命名待规范）
    this.getOpenid();
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
              console.log("userInfo",that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo: {},
    haveClass: true,
    classId: '',
    className: '',
    classCreator: false,
    courses: [
      {courseName: '微积分', class: '互加二班'},
      {courseName: '概率论', class: '互加二班'},
      {courseName: '计算机组成原理', class: 'null'}
    ],
    courseList: false,
    eventList: false,
  },

  get_globalData: function () {
    const db = wx.cloud.database();
    //查询 user-class 集合，获取 haveClass 信息
    db.collection('users-class').where({
      _openid: this.globalData.userInfo.openid,
    }).get().then(res => {
      // console.log("res",res);
      if (res.data.length !== 0) {
        if (res.data[0].classId) {
          this.globalData.haveClass = true;
          this.globalData.classId = res.data[0].classId;
          this.globalData.className = res.data[0].className;
          if(res.data[0]._openid == this.globalData.userInfo.openid){
            this.globalData.classCreator = true;
          }
        }
      }else {
        console.log("not found class")
      }
    })
    //查询 courses 集合，获取 courses 信息
    db.collection('courses')
    .where({
      _openid:this.globalData.userInfo.openid,
    })
    .field({
      courseName: true,classId: true,
    }).get().then(res => {
      // console.log("res",res);
      this.globalData.courses = res.data;
      //处理数组中每个对象为指定格式
      this.globalData.courses.forEach(function(item){
        if (item.classId){
          db.collection('class')
          .where({
            classId:item.classId
          })
          .field({
            className: true
          }).get().then(res =>{
            item.class = res.data[0].className;
          })
        }else{
          item.class = 'null';
        }
      })
      // console.log("courses",this.globalData.courses);
      
    })
  },
  getOpenid: function () {
    const that = this;
    wx.cloud.callFunction({
      name:"get_openid",
      success:res=>{
        // console.log(res.result.openid)
        that.globalData.userInfo.openid = res.result.openid
        this.get_globalData();
      },
      fail:res=>{
        console.log("云函数调用失败")
      }
    })
  },
})