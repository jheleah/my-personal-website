"use strict";

window.onload = function() {
  var nav = document.getElementsByTagName("nav")[0];

  var sticky = nav.offsetTop;

  window.onresize = function() {
    sticky = nav.offsetTop;
  }

  window.onscroll = function() {
    if(window.pageYOffset >= sticky) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  }
}
