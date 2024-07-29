let currentSlide = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll('.right .slider-images .box');
  const totalSlides = slides.length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  const sliderImages = document.querySelector('.slider-images');
  sliderImages.style.transform = `translateX(-${currentSlide * 100}%)`;
}
