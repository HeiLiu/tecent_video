Page({
  data: {
      inputShowed: false,
      histroyShowed:false,
      inputVal: "",
      histories:[],
  },
  showInput: function () {
      this.setData({
          inputShowed: true
      });
  },
  hideInput: function () {
      this.setData({
          inputVal: "",
          inputShowed: false
      });   
  },
  clearInput: function () {
      this.setData({
          inputVal: ""
      });
  },
  inputTyping: function (e) {
      this.setData({
          inputVal: e.detail.value
      });
     
  },
  bindKeyInput(e){
    this.setData({
        inputVal: e.detail.value
    });
    console.log(this.data.inputVal);
  },
  searchTap(e){
      const input = this.data.inputVal;
      const histories = this.data.histories;
      histories.push(input);
    this.setData({
        histroyShowed:true,
        histories
    });
    console.log(`lishi${histories}`);
  }
});