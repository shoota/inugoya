var webview = document.getElementById('browser');

console.log(webview);

webview.addEventListener('ipc-message', function(event) {
  console.log("ipc-message");
 switch(event.channel){
   case "scrapeFollow":
     var users = event.args[0];
     users.forEach(function(userElement){
      console.log(typeof userElement);
      console.log(userElement);
     });
     break;
 }
});

webview.addEventListener("did-finish-load", function(){
    webview.openDevTools();
  webview.send("scrapeFollow");
});


