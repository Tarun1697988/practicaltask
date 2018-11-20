
define(['tools'], function(tools){
  let stepButtons = tools.getElementList('.steps__button');
  let stepArray = tools.getElementList('.steps__item');
  let stepList = tools.getElement('.steps__list');

  stepList.onclick = function (e) {
    let index = tools.clickedElement(e, 'BUTTON', stepButtons);

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
});





// (function () {
//   let stepButtons = getElementList('.steps__button');
//   let stepArray = getElementList('.steps__item');
//   let stepList = getElement('.steps__list');

//   stepList.onclick = function (e) {
//     let index = clickedElement(e, 'BUTTON', stepButtons);

//     stepArray[index].classList.toggle('steps__item--show');

//     index = undefined;
//   };

//   window.addEventListener("keydown", function (evt) {
//     if (evt.keyCode === 27) {
//       evt.preventDefault;
//       for (let i = 0; i < stepArray.length; i++) {
//         if (stepArray[i].classList.contains("steps__item--show")) {
//           stepArray[i].classList.remove("steps__item--show");
//         }
//       }
//     }
//   });
// })();