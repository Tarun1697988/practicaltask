
let tabs = document.querySelectorAll('.treat__illnesses-item');
let contentInfo = document.querySelectorAll('.treat__illness-list');

document.querySelector('.treat__illness-groups').onclick = function (e) {

  let index = clickedElement(e, 'LI', tabs);

  removeClassList(tabs, 'treat__illnesses-item--active');
  removeClassList(contentInfo, 'treat__illness-list--active');

  tabs[index].classList.add('treat__illnesses-item--active');
  contentInfo[index].classList.add("treat__illness-list--active");

  index = undefined;
};

document.querySelector('.treat__illness-groups').addEventListener("keydown", function (evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault;
    let index = clickedElement(evt, 'LI', tabs);

    removeClassList(tabs, 'treat__illnesses-item--active');
    removeClassList(contentInfo, 'treat__illness-list--active');

    tabs[index].classList.add('treat__illnesses-item--active');
    contentInfo[index].classList.add("treat__illness-list--active");

    index = undefined;
  }
});

// Slider in mobile version

let benefitPaginationArray = document.querySelectorAll('.pagination__button');
let benefitIllustration = document.querySelectorAll('.benefit__slide')

document.querySelector('.benefit__pagination').onclick = function (e) {

  let index = clickedElement(e, 'BUTTON', benefitPaginationArray);

  removeClassList(benefitPaginationArray, 'pagination__button--active');
  removeClassList(benefitIllustration, 'benefit__slide--show');

  benefitPaginationArray[index].classList.add('pagination__button--active');
  benefitIllustration[index].classList.add("benefit__slide--show");
  benefitIllustration[index].classList.add("benefit__slide--prev");

  index = undefined;
};

let sliderIndex = 0;

// Slider in desktop version


document.querySelector('.benefit__button--next').onclick = function () {
  sliderIndex++;
  if (sliderIndex > benefitIllustration.length - 1) {
    sliderIndex = 0;
  }
  removeClassList(benefitIllustration, 'benefit__slide--next');
  removeClassList(benefitIllustration, 'benefit__slide--prev');
  removeClassList(benefitIllustration, 'benefit__slide--show');

  benefitIllustration[sliderIndex].classList.add("benefit__slide--next");
  benefitIllustration[sliderIndex].classList.add("benefit__slide--show");
};

document.querySelector('.benefit__button--prev').onclick = function () {
  sliderIndex--;
  if (sliderIndex < 0) {
    sliderIndex = benefitIllustration.length - 1;
  }
  removeClassList(benefitIllustration, 'benefit__slide--next');
  removeClassList(benefitIllustration, 'benefit__slide--prev');
  removeClassList(benefitIllustration, 'benefit__slide--show');

  benefitIllustration[sliderIndex].classList.add("benefit__slide--prev");
  benefitIllustration[sliderIndex].classList.add("benefit__slide--show");
};

// Pop-up

let stepButtons = document.querySelectorAll('.steps__button');
let stepArray = document.querySelectorAll('.steps__item');
let stepList = document.querySelector('.steps__list');

stepList.onclick = function (e) {
  let index = clickedElement(e, 'BUTTON', stepButtons);

  stepArray[index].classList.toggle('steps__item--show');

  index = undefined;
};

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault;
    for (let i = 0; i < stepArray.length; i++) {
      if (stepArray[i].classList.contains("steps__item--show")) {
        stepArray[i].classList.remove("steps__item--show");
      }
    }
  }

});


// Carousel in review section
let reviewsList = document.querySelector('.reviews__list');
let reviewsPagination = document.querySelector('.reviews__pagination');
let reviewCarouselButtons = reviewsPagination.querySelectorAll('.pagination__button');

reviewsPagination.onclick = function (e) {

  let index = clickedElement(e, 'BUTTON', reviewCarouselButtons);


  let elementWidth = 430;
  let position = elementWidth + index * elementWidth;

  if (index == 0) {
    position = 0;
  }

  removeClassList(reviewCarouselButtons, 'pagination__button--active');
  reviewCarouselButtons[index].classList.add('pagination__button--active');
  reviewsList.style.transform = `translate(-${position}px)`;

  index = undefined;
};


