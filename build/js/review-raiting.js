
define([
  'tools',
], function (tools) {
  'use strict';
  let raitingElement = tools.getElement('.reviews');
  let startElements = tools.getElementList('.review-card__star');

  raitingElement.onclick = function (e) {

    let index = tools.clickedElement(e, 'LI', startElements);

    if (!index === false) {
      startElements[index].classList.toggle('review-card__star--empty');
    }
    index = undefined;
  };
});