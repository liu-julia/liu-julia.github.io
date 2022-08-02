if (window.innerWidth > 1500) {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("topbar").style.top = "0";
    } else {
      document.getElementById("topbar").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
  }
}
function toggleMenu () {
  var mobMenu = document.getElementById("ham");
  if (document.getElementById("ham").style.right == "0") {
    document.getElementById("ham").style.right = "-120%";
  } else {
    document.getElementById("ham").style.right = "0";
  }
}