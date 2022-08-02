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
function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  } else {
    menu.classList.add("showMenu");
  }
}