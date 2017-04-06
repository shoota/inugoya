const {ipcRenderer} = require('electron')

ipcRenderer.on('scrapeFollow', function(){
  var followings = document.getElementsByClassName("post-info");
  var htmls = [];
  Array.prototype.forEach.call(followings, function(ele){
    var user = ele.querySelector('.user-name');
    htmls.push(user.innerText);
  });
  ipcRenderer.sendToHost('scrapeFollow', htmls);
});
