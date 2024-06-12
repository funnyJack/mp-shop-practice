const { getBanner, getGoods } = require("../../api/index")

// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: "",
    swiperOptions: {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      swiperData: []
    },
    navData: [
      {
        text: "数码",
        icon: "like",
        color: "#ff0000"
      },
      {
        text: "生鲜",
        icon: "star",
        color: "#ff0000"
      },
      {
        text: "会员",
        icon: "fire",
        color: "#ff0000"
      },
      {
        text: "优惠",
        icon: "gift",
        color: "#ff0000"
      },
      {
        text: "充值",
        icon: "phone",
        color: "#ff0000"
      },
      {
        text: "领券",
        icon: "gem",
        color: "#ff0000"
      },
      {
        text: "外卖",
        icon: "gift-card",
        color: "#ff0000"
      },
      {
        text: "美食",
        icon: "smile",
        color: "#ff0000"
      }
    ],
    goodsData: [],
    page:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    getBanner().then(res => {
      this.setData({
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        swiperData: res.data.data.result
      })
    })
    this.http(this.data.page)
  },
  http(page) {
    getGoods({page}).then(res => {
      if (!res.data.msg) {
        this.setData({
          // 老数据合并新数据，做累加操作
          goodsData: this.data.goodsData.concat(res.data.data.result)
        })
      } else {
        // 给出用户提示
        wx.showToast({
          title: res.data.msg,
          icon: "success",
          duration: 2000
        })
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom(){
        // 更改页码
        this.setData({
            page:this.data.page += 1
        })
        this.http(this.data.page)
    },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})