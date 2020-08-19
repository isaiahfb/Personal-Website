

function showSkills(){
    document.getElementById("skills").innerHTML = "Python, Java, C++, JavaScript, HTML/CSS";
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function addResponsive() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickNavBar()};



// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickNavBar() {

    // Get the navbar
    var navbar = document.getElementById("myTopnav");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        
    } else {
        navbar.classList.remove("sticky");
        
    }
}

