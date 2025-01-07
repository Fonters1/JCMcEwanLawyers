function initCarousel() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const carousel = document.querySelector('.testimonial-carousel');
  let currentSlide = 0;
  let maxHeight = 0;

  // Function to calculate and set the carousel height
  function setCarouselHeight() {
      maxHeight = 0;
      slides.forEach(slide => {
          const slideHeight = slide.querySelector('.testimonial-card').offsetHeight;
          maxHeight = Math.max(maxHeight, slideHeight);
      });
      carousel.style.height = `${maxHeight}px`;
  }

  function showSlide(index) {
      slides.forEach(slide => {
          slide.classList.remove('active');
          slide.style.visibility = 'hidden';
      });
      slides[index].classList.add('active');
      slides[index].style.visibility = 'visible';
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }

  function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
  }

  // Set up event listeners
  document.querySelector('.next-button').addEventListener('click', nextSlide);
  document.querySelector('.prev-button').addEventListener('click', prevSlide);

  // Calculate initial height
  window.addEventListener('load', setCarouselHeight);
  window.addEventListener('resize', setCarouselHeight);

  // Show first slide
  showSlide(0);

  // Auto-advance slides every 7 seconds
  setInterval(nextSlide, 7000);
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', initCarousel);