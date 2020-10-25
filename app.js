const bg = document.querySelector("#bg");
const mountain = document.querySelector("#mountain");
const text = document.querySelector("#texth2");
const monk = document.querySelector("#monk");

window.addEventListener("scroll", function (e) {
  console.log(e);
  var value = window.scrollY;
  bg.style.transform = "translateY(" + value + "px)";
  mountain.style.transform = "translateY(" + value * 0.7 + "px)";
  text.style.transform = "translateY(" + value * 1.1 + "px)";
  monk.style.transform = "translateY(" + value * 0.2 + "px)";
});
