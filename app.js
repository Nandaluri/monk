const bg = document.querySelector("#bg");
const mountain = document.querySelector("#mountain");
const text = document.querySelector("#texth2");
const monk = document.querySelector("#monk");
const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".list");
const close = document.querySelector(".item4");

hamburger.addEventListener("click", () => {
  list.style.transform = "translateY(0%)";
});
close.addEventListener("click", () => {
  list.style.transform = "translateY(-100%)";
});

window.addEventListener("scroll", function (e) {
  console.log(e);
  var value = window.scrollY;
  bg.style.transform = "translateY(" + value + "px)";
  mountain.style.transform = "translateY(" + value * 0.7 + "px)";
  //text.style.transform = "translateY(" + value * 1.1 + "px)";
  monk.style.transform = "translateY(" + value * 0.2 + "px)";
});
