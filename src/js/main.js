import "./_vars";
import slider from "./slider.js";
import tabs from "./tabs.js";
import cart from "./cart";

slider(
  ".slider__slide-1",
  ".slider-polycarbotate__wrapper",
  ".slider__item-1",
  ".slider-polycarbotate",
  "slider__item_active"
);
slider(
  ".slider__slide-2",
  ".slider-polycarbotate-polarized__wrapper",
  ".slider__item-2",
  ".slider-polycarbotate-polarized",
  "slider__item_active"
);
slider(
  ".slider__slide-3",
  ".slider-trivex__wrapper",
  ".slider__item-3",
  ".slider-trivex",
  "slider__item_active"
);

tabs(
  ".options__tab",
  ".slider",
  ".tab-polycarbonate-triggers",
  "options__tab_active"
);
tabs(
  ".options__tab-2",
  ".slider",
  ".tab-polycarbonate-polarized-triggers",
  "options__tab_active"
);
tabs(
  ".options__tab-3",
  ".slider",
  ".tab-trivex-trigger",
  "options__tab_active"
);

cart();

function toggleActiveClass() {
  const tabs = document.querySelectorAll(".options__tab");

  function removeactiveClass() {
    tabs.forEach((tab) => {
      tab.classList.remove("options__tab_active");
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      removeactiveClass();
      tab.classList.add("options__tab_active");
    });
  });
}
toggleActiveClass();
