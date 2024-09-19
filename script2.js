let newCurrentSlide = 0;

function newChangeSlide(direction) {
  const slides = document.querySelectorAll('.new-carousel-container .new-carousel-item');
  const totalSlides = slides.length;

  newCurrentSlide = (newCurrentSlide + direction + totalSlides) % totalSlides;

  const carouselContainer = document.querySelector('.new-carousel-container');
  carouselContainer.style.transform = `translateX(-${newCurrentSlide * 100}%)`;
}


