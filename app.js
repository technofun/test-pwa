console.log("registering");

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function (registration) {
    // Registration was successful  
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function (err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}


function namebtn() {
  let field = document.getElementById("input").value;
  document.getElementById("inhtm").innerHTML = field;

}
//document.write("hallo world after function");
// fetch(url).then(function (response) {
//       return response.json();
// }).then(function (data) {
//        console.log(data);
// }).catch(function () {
//         console.log("error");
// });

