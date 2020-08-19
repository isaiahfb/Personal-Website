

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function addResponsive() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }




// make the nav bar sticky
window.onscroll = function() {stickNavBar()};

function stickNavBar() {

    var navbar = document.getElementById("myTopnav");

    var sticky = navbar.offsetTop;
    
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        
    } else {
        navbar.classList.remove("sticky");
        
    }
}

