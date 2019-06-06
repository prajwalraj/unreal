// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}


// Change style of navbar on scroll
window.onscroll = function() {myNavigation()};
function myNavigation() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "unreal-bar" + "unreal-card" + "unreal-animate-top" + "unreal-white";
    } else {
        navbar.className = navbar.className.replace("unreal-card unreal-animate-top unreal-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("unreal-show") == -1) {
        x.className += "unreal-show";
    } else {
        x.className = x.className.replace("unreal-show", "");
    }
}
