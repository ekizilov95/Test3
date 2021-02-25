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
  let slideIndex = 1;

  const paginations = document.createElement("ol"),
    dots = [];

  sliderWrapper.style.width = 100 * slides.length + "%";
  slides.forEach((slide) => {
    slide.style.width = width;
  });

  function removeActiveClass() {
    sliderTriggers.forEach((item) => item.classList.remove(activeClass));
  }

  function transformSlide() {
    sliderTriggers[slideIndex].classList.add(activeClass);
    sliderWrapper.style.transform = `translateX(-${
      +width.replace(/\D/g, "") * slideIndex
    }px)`;
  }
  transformSlide();

  sliderTriggers?.forEach((item, index) => {
    item.addEventListener("click", () => {
      removeActiveClass();
      slideIndex = index;
      transformSlide();
    });
  });

  paginations.classList.add("slider__paginations");
  slider.append(paginations);

  for (let i = 0; i < slides.length; ++i) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i);
    dot.classList.add("slider__dot");
    paginations.append(dot);
    dots.push(dot);
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = dot.getAttribute("data-slide-to");
      slideIndex = index;
      dots.forEach((dot) => {
        dot.classList.remove("slider__dot_active");
      });
      dots[slideIndex].classList.add("slider__dot_active");
      transformSlide(index);
    });
  });

  dots[slideIndex].classList.add("slider__dot_active");

  slider.addEventListener("touchmove", (e) => {
    console.log(e);
  });
}

export default slider;
