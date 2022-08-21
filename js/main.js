

/*
** Toggle between opening and closing the drop down menu 
** when clicking on hamburger menu
*/

function openMenu() {
    var x = document.getElementById("myNavbar");
    var y = document.getElementById("hamburgermenu");
    if (x.className === "navbar") {
      x.className += " responsive";
      y.innerHTML = "close";

    } else {
      x.className = "navbar";
      y.innerHTML = "menu";
    }
  }



