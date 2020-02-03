function notify(message) {
  // console.log("dddddddddd");
  let not = document.getElementById("notification");
  not.innerHTML=(message);
  not.style.display = "block";
  setTimeout(function () {
    not.style.display = "none";
}, 2000);
}
//100/100