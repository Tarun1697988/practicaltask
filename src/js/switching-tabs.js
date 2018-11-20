define([
  'tools',
], function (tools) {

  let tabs = tools.getElementList('.treat__illnesses-item');
  let contentInfo = tools.getElementList('.treat__illness-list');

  tools.getElement('.treat__illness-groups').onclick = function (e) {

    let index =tools.clickedElement(e, 'LI', tabs);

    tools.removeClassList(tabs, 'treat__illnesses-item--active');
    tools.removeClassList(contentInfo, 'treat__illness-list--active');

    tabs[index].classList.add('treat__illnesses-item--active');
    contentInfo[index].classList.add("treat__illness-list--active");

    index = undefined;
  };

  tools.getElement('.treat__illness-groups').addEventListener("keydown", function (evt) {
    if (evt.keyCode === 13) {
      evt.preventDefault;
      let index = tools.clickedElement(evt, 'LI', tabs);

      tools.removeClassList(tabs, 'treat__illnesses-item--active');
      tools.removeClassList(contentInfo, 'treat__illness-list--active');

      tabs[index].classList.add('treat__illnesses-item--active');
      contentInfo[index].classList.add("treat__illness-list--active");

      index = undefined;
    }
  });
});




// (function () {
//   let tabs = getElementList('.treat__illnesses-item');
//   let contentInfo = getElementList('.treat__illness-list');

//   getElement('.treat__illness-groups').onclick = function (e) {

//     let index = clickedElement(e, 'LI', tabs);

//     removeClassList(tabs, 'treat__illnesses-item--active');
//     removeClassList(contentInfo, 'treat__illness-list--active');

//     tabs[index].classList.add('treat__illnesses-item--active');
//     contentInfo[index].classList.add("treat__illness-list--active");

//     index = undefined;
//   };

//   getElement('.treat__illness-groups').addEventListener("keydown", function (evt) {
//     if (evt.keyCode === 13) {
//       evt.preventDefault;
//       let index = clickedElement(evt, 'LI', tabs);

//       removeClassList(tabs, 'treat__illnesses-item--active');
//       removeClassList(contentInfo, 'treat__illness-list--active');

//       tabs[index].classList.add('treat__illnesses-item--active');
//       contentInfo[index].classList.add("treat__illness-list--active");

//       index = undefined;
//     }
//   });
// })();