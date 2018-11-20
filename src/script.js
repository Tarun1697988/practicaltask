
// Refresh classes 
// function removeClassList(list, classRemove) {
//   for (let i = 0; i < list.length; i++) {
//     list[i].classList.remove(classRemove);
//   }
// }
import { removeClassList } from './tools.js';

// find element what was clicked

function clickedElement(event, element, elementArray) {
  if (event.target.nodeName !== element) {
    return false;
  } else {
    event.target.clicked = true;
  }

  let index;
  elementArray.forEach(function (el, i) {
    if (!el.clicked) {
      return false;
    } else {
      index = i;
      el.clicked = undefined;
    }
  });
  return index;
}

// Change tabs in treat section

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
// change tab when press ENTER
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
let benefitIllustration = document.querySelectorAll('.benefit__slide');

document.querySelector('.benefit__pagination').onclick = function (e) {

  let index = clickedElement(e, 'BUTTON', benefitPaginationArray);
  let elementWidth = 280;
  let position = index * elementWidth;

  if (index > 2) {
    position = 0;
    index = 0;
  }

  benefitSlider.style.transform = `translate(-${position}px)`;

  removeClassList(benefitPaginationArray, 'pagination__button--active');

  benefitPaginationArray[index].classList.add('pagination__button--active');

  index = undefined;
};

// Slider in desktop version


let benefitSlider = document.querySelector('.benefit__slider');
let sliderIndex = 0;

document.querySelector('.benefit__button--next').onclick = function () {
  sliderIndex++;
  let elementWidth = 442;
  let position = sliderIndex * elementWidth;

  if (sliderIndex > 2) {
    position = 0;
    sliderIndex = 0;
  }

  benefitSlider.style.transform = `translate(-${position}px)`;
};

document.querySelector('.benefit__button--prev').onclick = function () {

  --sliderIndex;
  let elementWidth = 442;
  let position = sliderIndex * elementWidth;

  if (sliderIndex < 0) {
    position = 0;
    sliderIndex = 3;
  }

  benefitSlider.style.transform = `translate(-${position}px)`;
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

// close popup when press ESC
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

// desktop version
reviewsPagination.onclick = function (e) {

  let index = clickedElement(e, 'BUTTON', reviewCarouselButtons);

  let elementWidth = 430;
  let position = elementWidth + index * elementWidth;

  if (document.documentElement.clientWidth < 768) {
    elementWidth = 300;
    position = index * elementWidth;
  }

  if (index == 0) {
    position = 0;
  }

  removeClassList(reviewCarouselButtons, 'pagination__button--active');
  reviewCarouselButtons[index].classList.add('pagination__button--active');
  reviewsList.style.transform = `translate(-${position}px)`;

  index = undefined;
};

let raitingElement = document.querySelector('.reviews');
let startElements = document.querySelectorAll('.review-card__star');

raitingElement.onclick = function (e) {

  let index = clickedElement(e, 'LI', startElements);

  if (!index === false) {
    startElements[index].classList.toggle('review-card__star--empty');
  }
  index = undefined;
};

// document.querySelector('.benefit__button--next').onclick = function () {
//   sliderIndex++;
//   if (sliderIndex > benefitIllustration.length - 1) {
//     sliderIndex = 0;
//   }
//   removeClassList(benefitIllustration, 'benefit__slide--next');
//   removeClassList(benefitIllustration, 'benefit__slide--prev');
//   removeClassList(benefitIllustration, 'benefit__slide--show');

//   benefitIllustration[sliderIndex].classList.add("benefit__slide--next");
//   benefitIllustration[sliderIndex].classList.add("benefit__slide--show");
// };

// document.querySelector('.benefit__button--prev').onclick = function () {
//   sliderIndex--;
//   if (sliderIndex < 0) {
//     sliderIndex = benefitIllustration.length - 1;
//   }
//   removeClassList(benefitIllustration, 'benefit__slide--next');
//   removeClassList(benefitIllustration, 'benefit__slide--prev');
//   removeClassList(benefitIllustration, 'benefit__slide--show');

//   benefitIllustration[sliderIndex].classList.add("benefit__slide--prev");
//   benefitIllustration[sliderIndex].classList.add("benefit__slide--show");
// };


// function clickTabs (clickTabEvent) {
//   removeClassList(tabs, 'treat__illnesses-item--active');

//   removeClassList(contentInfo, 'treat__illness-list--active');

//   let clickedTab = clickTabEvent.currentTarget;
//   clickedTab.classList.add('treat__illnesses-item--active');
//   clickTabEvent.preventDefault();
//   console.log(clickTabEvent.target.id);

//   let anchorReference = clickTabEvent.target.querySelector('a');
// 	let activePaneId = anchorReference.getAttribute("href");
// 	let activePane = document.querySelector(activePaneId);
// 		  activePane.classList.add("treat__illness-list--active");
//   } 

// for (i = 0; i < tabs.length; i++) {
//   tabs[i].addEventListener("click", clickTabs); 
// }