function slider(
  slideCount,
  sliderField,
  triggers,
  sliderSelector,
  activeClass
) {
  const slides = document.querySelectorAll(slideCount),
    sliderWrapper = document.querySelector(sliderField),
    sliderTriggers = document.querySelectorAll(triggers),
    slider = document.querySelector(sliderSelector),
    width = window.getComputedStyle(slider).width;

  sliderWrapper.style.width = 100 * slides.length + "%";
  slides.forEach((slide) => {
    slide.style.width = width;
  });

  function removeActiveClass() {
    sliderTriggers.forEach((item) => item.classList.remove(activeClass));
  }

  function transformSlide(i = 1) {
    sliderTriggers[i].classList.add(activeClass);
    sliderWrapper.style.transform = `translateX(-${
      +width.replace(/\D/g, "") * i
    }px)`;
  }
  transformSlide();

  sliderTriggers.forEach((item, index) => {
    item.addEventListener("click", () => {
      removeActiveClass();
      transformSlide(index);
    });
  });
}

export default slider;
