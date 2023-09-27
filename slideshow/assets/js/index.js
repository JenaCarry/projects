"use strict";

const images = [
  { name: "chrono", url: "assets/images/chrono.jpg" },
  { name: "inuyasha", url: "assets/images/inuyasha.jpg" },
  { name: "ippo", url: "assets/images/ippo.png" },
  { name: "tenchi", url: "assets/images/tenchi.jpg" },
  { name: "tenjhotenge", url: "assets/images/tenjhotenge.jpg" },
  { name: "yuyuhakusho", url: "assets/images/yuyuhakusho.jpg" },
];

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const imagesContainer = document.querySelector(".images-container");
const spansContainer = document.querySelector(".spans-container");
let imageIndex = 0;
const imageCount = images.length;

const createImages = () => {
  images.map((image) => {
    const imageElement = document.createElement("div");
    imageElement.innerHTML = `<img src="${image.url}" alt="${image.name}" draggable="false" />`;
    imagesContainer.appendChild(imageElement);
  });
};

const createSpans = () => {
  for (let i = 0; i < imageCount; i++) {
    const spanElement = document.createElement("span");
    spansContainer.appendChild(spanElement);
    spanElement.addEventListener("click", () => {
      imageIndex = i;
      updateImage();
    });
  }
};

const updateImage = () => {
  const imageWidth = 640;
  const spans = document.querySelectorAll(".spans-container span");
  spans.forEach((span) => span.classList.remove("active"));
  spans[imageIndex].classList.add("active");
  imagesContainer.style.transform = `translateX(-${imageIndex * imageWidth}px)`;
};

const prevImage = () => {
  imageIndex = (imageIndex - 1 + imageCount) % imageCount;
  updateImage();
};

const nextImage = () => {
  imageIndex = (imageIndex + 1 + imageCount) % imageCount;
  updateImage();
};

createImages();
createSpans();
updateImage();

prev.addEventListener("click", prevImage);
next.addEventListener("click", nextImage);
