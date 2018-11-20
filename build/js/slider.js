define([
  'tools'
], function (tools) {
  'use strict';
  let benefitPaginationArray = tools.getElementList('.pagination__button');
// let benefitIllustration = document.querySelectorAll('.benefit__slide');

tools.getElement('.benefit__pagination').onclick = function (e) {

  let index = tools.clickedElement(e, 'BUTTON', benefitPaginationArray);
  let elementWidth = 280;
  let position = index * elementWidth;

  if (index > 2) {
    position = 0;
    index = 0;
  }

  benefitSlider.style.transform = `translate(-${position}px)`;

  tools.removeClassList(benefitPaginationArray, 'pagination__button--active');

  benefitPaginationArray[index].classList.add('pagination__button--active');

  index = undefined;
};

// Slider in desktop version


let benefitSlider = document.querySelector('.benefit__slider');
let sliderIndex = 0;

tools.getElement('.benefit__button--next').onclick = function () {
  sliderIndex++;
  let elementWidth = 442;
  let position = sliderIndex * elementWidth;

  if (sliderIndex > 2) {
    position = 0;
    sliderIndex = 0;
  }

  benefitSlider.style.transform = `translate(-${position}px)`;
};

tools.getElement('.benefit__button--prev').onclick = function () {

  --sliderIndex;
  let elementWidth = 442;
  let position = sliderIndex * elementWidth;

  if (sliderIndex < 0) {
    position = 0;
    sliderIndex = 3;
  }

  benefitSlider.style.transform = `translate(-${position}px)`;
};
});
