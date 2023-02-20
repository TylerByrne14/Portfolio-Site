"use strict";

// nav buttons

const home = document.querySelector(".home");
const piece1 = document.querySelector(".piece1");
const piece2 = document.querySelector(".piece2");
const piece3 = document.querySelector(".piece3");
const piece4 = document.querySelector(".piece4");
const piece5 = document.querySelector(".piece5");

const leftside = document.querySelector(".left-side");
const rightside = document.querySelector(".right-side");

const slider = document.querySelector(".slider");

const slide = (amt) => {
  slider.style.transform = `translateX(${amt}vw)`;
};

const spin = (leftAmt, rightAmt) => {
  leftside.style.transform = `translateY(${leftAmt}vh)`;
  rightside.style.transform = `translateY(${rightAmt}vh)`;
};

home.addEventListener("click", () => {
  slide(0);
  spin(0, -375);
});
piece1.addEventListener("click", function () {
  slide(16.6);
  spin(-75, -300);
});
piece2.addEventListener("click", () => {
  slide(33.2);
  spin(-150, -225);
});
piece3.addEventListener("click", () => {
  slide(49.8);
  spin(-225, -150);
});
piece4.addEventListener("click", () => {
  slide(66.2);
  spin(-300, -75);
});
piece5.addEventListener("click", () => {
  slide(82.8);
  spin(-375, 0);
});

// MOBILE SCRIPTS

const mobileHome = document.querySelector(".mobile-home");
const mobile1 = document.querySelector(".mobile-1-container");
const mobile1But = document.querySelector(".mobile-piece1");
const mobile2 = document.querySelector(".mobile-2-container");
const mobile2But = document.querySelector(".mobile-piece2");
const mobile3 = document.querySelector(".mobile-3-container");
const mobile3But = document.querySelector(".mobile-piece3");
const mobile4 = document.querySelector(".mobile-4-container");
const mobile4But = document.querySelector(".mobile-piece4");
const mobile5 = document.querySelector(".mobile-5-container");
const mobile5But = document.querySelector(".mobile-piece5");

mobile1But.addEventListener("click", () => {
  mobile1.classList.toggle("heightAuto");
});
mobile2But.addEventListener("click", () => {
  mobile2.classList.toggle("heightAuto");
});
mobile3But.addEventListener("click", () => {
  mobile3.classList.toggle("heightAuto");
});
mobile4But.addEventListener("click", () => {
  mobile4.classList.toggle("heightAuto");
});
mobile5But.addEventListener("click", () => {
  mobile5.classList.toggle("heightAuto");
});

mobileHome.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});
