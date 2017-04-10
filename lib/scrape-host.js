var webview = document.getElementById('browser');

console.log(webview);

webview.addEventListener('ipc-message', function(event) {
  console.log("ipc-message");
 switch(event.channel){
   case "scrapeFollow":
     var users = event.args[0];
     var list = '';
     users.forEach(function(userElement){
      console.log(userElement.name);
      console.log(userElement.imageUrl);

      var tmpElement = document.createElement('li');
      tmpElement.className = 'list-group-item';
      tmpElement.innerHTML = '<img class="img-circle media-object pull-left" src="'+userElement.imageUrl+'" width="32" height="32">'+
      '<div class="media-body"><p>'+userElement.name+'</p></div>';

      document.getElementById('following').appendChild(tmpElement);
     });
 }
});

webview.addEventListener("did-finish-load", function(){
  // webview.openDevTools();
  webview.send("scrapeFollow");
});


