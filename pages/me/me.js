const app = getApp()

Page({
  data: {
    userInfo: wx.getStorageSync('userInfo') || {nickname: '游客'}
  },
  onLoad: function () {
    const that = this;
    const userInfo = wx.getStorageSync('userInfo') || {};
    console.log(userInfo);
  }
})