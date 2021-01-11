"use strict";

// JavaScript Document
var navSlide = function navSlide() {
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".navigation");
  var navLinks = document.querySelectorAll(".navigation li");
  burger.addEventListener("click", function () {
    //Toggle Nav
    nav.classList.toggle("nav-active"); //Animate Links

    navLinks.forEach(function (link, index) {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = "navLinkFade 0.5s ease forwards ".concat(index / 7 + 0.4, "s");
      }
    }); //Burger Animation

    burger.classList.toggle("toggle");
  });
};

navSlide(); //link.style.animation=`navLinkFade 0.5s ease forwards ${index/7+1.5}s`;