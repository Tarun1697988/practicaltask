
define(['tools',], function (tools) {
  let reviewsList = tools.getElement('.reviews__list');
  let reviewsPagination = tools.getElement('.reviews__pagination');
  let reviewCarouselButtons = reviewsPagination.querySelectorAll('.pagination__button');

  reviewsPagination.onclick = function (e) {

    let index = tools.clickedElement(e, 'BUTTON', reviewCarouselButtons);


    let elementWidth = 430;
    let position = elementWidth + index * elementWidth;

    if (document.documentElement.clientWidth < 768) {
      elementWidth = 300;
      position = index * elementWidth;
    }  

    if (index == 0) {
      position = 0;
    }
    
    tools.removeClassList(reviewCarouselButtons, 'pagination__button--active');
    reviewCarouselButtons[index].classList.add('pagination__button--active');
    reviewsList.style.transform = `translate(-${position}px)`;

    index = undefined;
  };
});
