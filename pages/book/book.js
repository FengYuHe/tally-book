Page({

  /**
   * 页面的初始数据
   */
  data: {
    books:[{
      id: '1',
      name: 'foo',
      description: '描述',
      ownerId: '123',
      limit: '5',
      cover: 'http://7xtuco.com1.z0.glb.clouddn.com/2.pic_hd.jpg'
    }, {
        id: '2',
        name: 'bar',
        description: '描述',
        ownerId: '123',
        limit: '5',
        cover: 'http://7xtuco.com1.z0.glb.clouddn.com/2.pic_hd.jpg'
      }, {
        id: '3',
        name: 'baz',
        description: '描述',
        ownerId: '123',
        limit: '5',
        cover: 'http://7xtuco.com1.z0.glb.clouddn.com/2.pic_hd.jpg'
      }
    ],
    isBook: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({books: []});
    if (this.data.books.length > 0) {
      this.setData({ isBook: false });
    }
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