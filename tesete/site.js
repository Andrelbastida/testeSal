/*
var currentSlide = 1;
var numSlides = 4;

function showSlide(n) {
  var slides = document.getElementsByClassName('carousel-card');
  if (n > numSlides) { currentSlide = 1 }
  if (n < 1) { currentSlide = numSlides }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0.5;
  }
  slides[currentSlide - 1].style.opacity = 1;
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

document.getElementById('prev-button').addEventListener('click', prevSlide);
document.getElementById('next-button').addEventListener('click', nextSlide);

showSlide(currentSlide); */

const carouselCards = document.querySelectorAll(".carousel-card");
const prevButton = document.querySelector(".carousel-prev-button");
const nextButton = document.querySelector(".carousel-next-button");

let currentCard = 0;

prevButton.addEventListener("click", () => {
  if (currentCard === 0) {
    currentCard = carouselCards.length - 1;
  } else {
    currentCard--;
  }
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  if (currentCard === carouselCards.length - 1) {
    currentCard = 0;
  } else {
    currentCard++;
  }
  updateCarousel();
});

function updateCarousel() {
  carouselCards.forEach((card, index) => {
    if (index === currentCard) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
}
