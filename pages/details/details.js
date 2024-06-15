const{getGoodsDetails} = require("../../api/index")
// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsDetails:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
// 提示用户在获取数据
wx.showLoading({
  title: '等待数据加载...',
})
getGoodsDetails({id:options.id}).then(res =>{
    wx.hideLoading()
    if(res.data.status === 200){
        this.setData({
            goodsDetails:res.data.data[0]
        })
    }else{
        wx.showToast({
          title: '数据获取失败',
          icon:"success"
        })
    }
})
  }
})