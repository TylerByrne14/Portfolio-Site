'use strict'

//mouse tracer 
const cursorTag = document.querySelector("div.cursors")
const balls = cursorTag.querySelectorAll("div")

let aimX = 0
let aimY = 0


//get current location of mouse 
balls.forEach((ball, index) => {
  let currentX = 0
	let currentY = 0

	let speed = 0.25 - index * 0.012;
  
  const animate = function () {
    currentX += (aimX - currentX) * speed
    currentY += (aimY - currentY) * speed

    ball.style.left = currentX + "px"
    ball.style.top = currentY + "px"

    requestAnimationFrame(animate)
  }

  animate()
})

//on each mouseover event assign aimX aimY
document.addEventListener("mousemove", function (event) {
  aimX = event.pageX
  aimY = event.pageY
})


//fade in cursors
$(function(){
    $(".cursors").hide();
    $(".cursors").delay(1500).fadeIn(2500);
});

// hide cursors while side nav is open
$("#open").click(function() { 
    $(".cursors").fadeOut(1200);
});

// show cursors when side nav is closed
 $("#close").click(function() { 
      $(".cursors").fadeIn(1200); 
    });
