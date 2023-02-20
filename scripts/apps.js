"use strict";

//MAIN SCRIPTS

const open = document.querySelector("#open");
const close = document.querySelector("#close");
const container = document.querySelector(".container");
const hr = document.querySelectorAll(".title-hr");
const arrow = document.querySelectorAll(".fa-chevron-double-right");
const sections = document.querySelectorAll("section");

// fade in on scroll

window.addEventListener("scroll", checkSections);

checkSections();

function checkSections() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
}

loading();
function loading() {
  container.classList.add("none", "show-nav", "side-border") &
    container.classList.remove("side-clear");
  container.classList.remove("show-nav", "none") &
    container.classList.add("side-clear");
}

// main nav slide down
$(function () {
  $(".main-nav").delay(1800).slideDown(1600);
});

//side nav open click event
open.addEventListener(
  "click",
  () =>
    container.classList.add("show-nav", "side-border") &
    container.classList.remove("side-clear")
);

//side nav close click event
close.addEventListener(
  "click",
  () =>
    container.classList.remove("show-nav") &
    container.classList.add("side-clear")
);

// front end developer fade in
$(function () {
  $(".home-web").fadeOut(0);
  $(".home-web").fadeIn(2500);
});

// back to top button fade in
$(function () {
  $("#arrow-up").fadeOut(0);
  $("#arrow-up").delay(1800).fadeIn(2000);
});

// files drop down
const downArrow = document.querySelector("#down-arrow");
const drop = document.querySelector(".drop-down");
drop.addEventListener("click", function () {
  drop.classList.toggle("height-auto");
  downArrow.classList.toggle("rotate-180");
});

//DESKTOP MENU

//stroll to top of about section on click
$("#menu-about").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#about-stroll").offset().top,
    },
    2000
  );
});

//stroll to top of skills section on click
$("#menu-skills").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#skills-stroll").offset().top,
    },
    2000
  );
});

//stroll to top of projects section on click
$("#menu-projects").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#projects-stroll").offset().top,
    },
    2000
  );
});

//stroll to top of experience section on click
$("#menu-experience").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#experience-stroll").offset().top,
    },
    2000
  );
});

// stroll to top of page on click
$("#arrow-up").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("body").offset().top,
    },
    1000
  );
});

// stroll to contact section on click
$(".home-contact").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#Contact").offset().top,
    },
    2000
  );
});

//MOBILE MENU JQUERY
const mobileAboutMenu = document.querySelector("#menuAbout");
const mobileSkillsMenu = document.querySelector("#menuSkills");
const mobileProjectsMenu = document.querySelector("#menuProjects");
const mobileExperienceMenu = document.querySelector("#menuExperience");

//on about click close menu
mobileAboutMenu.addEventListener(
  "click",
  () =>
    container.classList.remove("show-nav") &
    container.classList.add("side-clear")
);

//stroll to top of about section on click
$("#menuAbout").click(function () {
  $("html, body")
    .delay(1000)
    .animate(
      {
        scrollTop: $("#about-stroll").offset().top,
      },
      2000
    );
});

//on skills click close menu
mobileSkillsMenu.addEventListener(
  "click",
  () =>
    container.classList.remove("show-nav") &
    container.classList.add("side-clear")
);

//stroll to skills top of section on click
$("#menuSkills").click(function () {
  $("html, body")
    .delay(1000)
    .animate(
      {
        scrollTop: $("#skills-stroll").offset().top,
      },
      2000
    );
});

//on project click close menu
mobileProjectsMenu.addEventListener(
  "click",
  () =>
    container.classList.remove("show-nav") &
    container.classList.add("side-clear")
);

////stroll to top of projects section on click
$("#menuProjects").click(function () {
  $("html, body")
    .delay(1000)
    .animate(
      {
        scrollTop: $("#projects-stroll").offset().top,
      },
      2000
    );
});

//on experience click close menu
mobileExperienceMenu.addEventListener(
  "click",
  () =>
    container.classList.remove("show-nav") &
    container.classList.add("side-clear")
);

//stroll to top of expereince section on click
$("#menuExperience").click(function () {
  $("html, body")
    .delay(1000)
    .animate(
      {
        scrollTop: $("#experience-stroll").offset().top,
      },
      2000
    );
});
