"use strict";

const icon = document.querySelector(".navigation__icon");
const menu = document.querySelector(".navigation__menu");
const bg = document.querySelector(".navigation__menu__bg");

icon.addEventListener("click", function () {
  if (icon.getAttribute("src") === "/images/icon-hamburger.svg") {
    icon.src = "/images/icon-close.svg";
    menu.style.top = "10rem";
    bg.style.zIndex = "29999";
    bg.style.opacity = "1";
  } else {
    icon.src = "/images/icon-hamburger.svg";
    menu.style.top = "-110rem";
    bg.style.opacity = "0";
    bg.style.zIndex = "-29999";
  }
});
