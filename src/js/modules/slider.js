export function slider() {  
    
    const slider = document.querySelector('#image-slider');
    const prevBtn = document.querySelector('#prev-btn');
    const nextBtn = document.querySelector('#next-btn');
    let slideWidth = slider.clientWidth;

    let currentIndex = 0;

    function showSlide(index) {
      const newTransformValue = -index * slideWidth + 'px';
      console.log(newTransformValue);
      slider.style.transform = 'translateX(' + newTransformValue + ')';
    }

    function nextSlide() {
      console.log(currentIndex)
      currentIndex++
      if (currentIndex >= slider.children.length) {
        currentIndex = 0;
      }
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = slider.children.length-1;
      }
      showSlide(currentIndex);
    }

    function updateSlideWidth() {
      slideWidth = slider.clientWidth;
      showSlide(currentIndex);
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    window.addEventListener('resize', updateSlideWidth);

    updateSlideWidth();
}