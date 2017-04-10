const {ipcRenderer} = require('electron')

ipcRenderer.on('scrapeFollow', function(){
  var followings = document.getElementsByClassName("post-index");
  var resp = [];
  Array.prototype.forEach.call(followings, function(ele){
    var userInfo={};
    userInfo.name = ele.querySelector('.user-name').innerText;
    userInfo.imageUrl = ele.querySelector('img').src;
    resp.push(userInfo);
  });
  ipcRenderer.sendToHost('scrapeFollow', resp);
});
