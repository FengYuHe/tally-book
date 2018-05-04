const config = require('../../config.js');

Page({
  data: {
    array: [
      {
        name: '买菜',
        price: 25
      },
      {
        name: '电影',
        price: 85.3
      }
    ],
    name: '',
    price: 0
  },
  onLoad: function() {
    // console.log(config);
    // wx.request({
    //   url: `${config.url}/Records`,
    //   success: function(res) {
    //     console.log(res);
    //   }
    // })
  },
  addItem: function () {
    this.data.array.push({name: this.data.name, price: this.data.price});
    this.setData({array: this.data.array});
  },
  setName: function (e) {
    this.setData({name: e.detail.value});
  },
  setPrice: function (e) {
    this.setData({ price: e.detail.value });
  }
})