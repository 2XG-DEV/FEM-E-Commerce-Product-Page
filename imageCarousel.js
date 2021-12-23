const next = document.getElementById("next");
const current = document.getElementById("current");
const prev = document.getElementById("prev");

const imageSources = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

let currentIndex = 0;

next.addEventListener("click", () => {
  if (currentIndex === imageSources.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  current.src = imageSources[currentIndex];
});

prev.addEventListener("click", () => {
  if (currentIndex === 0) {
    currentIndex = imageSources.length - 1;
  } else {
    currentIndex--;
  }

  current.src = imageSources[currentIndex];
});
