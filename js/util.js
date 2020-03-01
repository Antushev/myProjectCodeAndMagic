'use strict';

(function () {
  var Buttons = {ESCAPE_KEY: 'Escape', ENTER_KEY: 'Enter'};

  var getRandomNumber = function (maxNumber) {
    return Math.ceil(Math.random() * maxNumber);
  };

  var getRandomElementFromArray = function (elements) {
    return elements[getRandomNumber(elements.length - 1)];
  };

  window.util = {
    buttons: Buttons,
    getRandomNumber: getRandomNumber,
    getRandomElementFromArray: getRandomElementFromArray
  };
})();

