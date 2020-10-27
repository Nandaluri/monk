let bg = document.querySelector("#bg");
let mountain = document.querySelector("#mountain");
let monk = document.querySelector("#monk");
let hamburger = document.querySelector(".hamburger");
let list = document.querySelector(".list");
let close = document.querySelector(".item4");
let nav = document.querySelector("#nav");

hamburger.addEventListener("click", () => {
  list.style.transform = "translateY(0%)";
  list.style.visibility = "visible";
});
close.addEventListener("click", () => {
  list.style.transform = "translateY(-100%)";
  setTimeout(() => {
    list.style.visibility = "hidden";
  }, 500);
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
