// 

define(function(){
  return {
    removeClassList (list, classRemove) {
      for (let i = 0; i < list.length; i++) {
        list[i].classList.remove(classRemove);
      }
    },

    // find element what was clicked
    
    clickedElement(event, element, elementArray) {
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
    },

    getElement(element){
      return document.querySelector(element);
    },

    getElementList(element){
      return document.querySelectorAll(element);
    }

    }
});



//(function(){

  //     window.removeClassList = function(list, classRemove) {
  //       for (let i = 0; i < list.length; i++) {
  //         list[i].classList.remove(classRemove);
  //       }
  //     };
  
  //     // find element what was clicked
      
  //     window.clickedElement = function(event, element, elementArray) {
  //       if (event.target.nodeName !== element) {
  //         return false;
  //       } else {
  //         event.target.clicked = true;
  //       }
   
  //       let index;
  //       elementArray.forEach(function (el, i) {
  //         if (!el.clicked) {
  //           return false;
  //         } else {
  //           index = i;
  //           el.clicked = undefined;
  //         }
  //       });
  //       return index;
  //     };
  
  //     window.getElement = function(element){
  //       return document.querySelector(element);
  //     }
  
  //     window.getElementList = function(element){
  //       return document.querySelectorAll(element);
  //     }
  
  // })();
  