let bg = document.querySelector("#bg");
let mountain = document.querySelector("#mountain");
let monk = document.querySelector("#monk");
let hamburger = document.querySelector(".hamburger");
let list = document.querySelector(".list");
let close = document.querySelector(".item");
let nav = document.querySelector("#nav");
let body = document.querySelector("body");
let logo = document.querySelector(".logo");

hamburger.addEventListener("click", () => {
  list.style.transform = "translateY(0%)";
});

list.addEventListener("click", () => {
  list.style.transform = "translateY(-100%)";
});

window.addEventListener("scroll", () => {
  var value = window.scrollY;
  if (value > 0) {
    nav.style.backgroundColor = "rgba(255, 255, 255, 1)";
    logo.style.color = "rgb(43, 224, 170)";
  } else if (value === 0) {
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    logo.style.color = "rgb(230, 230, 230)";
  }
  bg.style.transform = "translateY(" + value + "px)";
  mountain.style.transform = "translateY(" + value * 0.7 + "px)";
  monk.style.transform = "translateY(" + value * 0.2 + "px)";
});
window.addEventListener("load", () => {
  list.style.display = "grid";
});
