"use strict";
// Declare DOM Variables
const imageSlide = document.querySelector("#image-slide-container img");
const backwardBtn = document.querySelector("#image-content i:first-child");
const forwardBtn = document.querySelector("#image-content i:last-child");
forwardBtn.addEventListener("click", nextSlide);
backwardBtn.addEventListener("click", prevSlide);

// Create Image array
const imageArray = [
  "Images/Image-1.jpg",
  "Images/Image-2.jpg",
  "Images/Image-3.jpg",
  "Images/Image-4.jpg",
  "Images/Image-5.jpg",
];

// Image Counter
let imageCounter = 0;

// Next Slide Function
function nextSlide() {
  imageCounter++;

  if (imageCounter == imageArray.length) {
    imageCounter = 0;
    imageSlide.src = imageArray[imageCounter];
  } else {
    imageSlide.src = imageArray[imageCounter];
  }

  console.log(imageCounter);
}

// Previoua slide function
function prevSlide() {
  imageCounter--;

  if (imageCounter < 0) {
    imageCounter = imageArray.length - 1;
    imageSlide.src = imageArray[imageCounter];
  } else {
    imageSlide.src = imageArray[imageCounter];
  }

  console.log(imageCounter);
}
