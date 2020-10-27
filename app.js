const bg = document.querySelector("#bg");
const mountain = document.querySelector("#mountain");
const monk = document.querySelector("#monk");
const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".list");
const close = document.querySelector(".item4");
const nav = document.querySelector("#nav");

hamburger.addEventListener("click", () => {
  list.style.transform = "translateY(0%)";
});
close.addEventListener("click", () => {
  list.style.transform = "translateY(-100%)";
});

window.addEventListener("scroll", () => {
  var value = window.scrollY;
  if (value > 0) {
    nav.style.backgroundColor = "rgba(30, 30, 30, 1)";
  } else if (value === 0) {
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
  }
  bg.style.transform = "translateY(" + value + "px)";
  mountain.style.transform = "translateY(" + value * 0.7 + "px)";
  monk.style.transform = "translateY(" + value * 0.2 + "px)";
});
