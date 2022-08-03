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
  var menu = document.getElementById("ham");
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    document.body.style.overflowY = '';
  } else {
    menu.classList.add("showMenu");
    document.body.style.overflowY = 'hidden';
  }
}
function hideFooter() {
  if (window.innerWidth < 1500) {
    var foot = document.getElementById("foot");
    foot.style.display = "none";
  }
}
function showFooter() {
  if (window.innerWidth < 1500) {
    var foot = document.getElementById("foot");
    foot.style.display = "block";
  }
}


$(document).ready(function() {
  $('.hideme').each( function(i){
          
    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    
    if( bottom_of_window > bottom_of_object - 10){
        $(this).animate({'opacity':'1'},500);   
    }
    
}); 
  $(window).scroll( function(){
      $('.hideme').each( function(i){
          
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_object - 10){
              $(this).animate({'opacity':'1'},500);   
          }
          
      }); 
  
  });
  
});