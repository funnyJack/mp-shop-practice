const { getBuy } = require("../../api/index.js")

// pages/buy/buy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsData:{}
  },
  onLoad(options) {
    getBuy({ id:options.id }).then(res =>{
        console.log(res.data);
        this.setData({
            goodsData:res.data.data[0]
        })
    })
},
onSubmit(){
    wx.showToast({
      title: '购买完成',
      icon:"success"
    })
}
})