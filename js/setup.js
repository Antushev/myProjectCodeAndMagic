'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var inputName = document.querySelector('.setup-user-name');

  var openSetup = function () {
    setupWindow.classList.remove('hidden');
    document.addEventListener('keydown', onSetupDownEscape);
  };

  var closeSetup = function () {
    setupWindow.classList.add('hidden');
    document.removeEventListener('keydown', onSetupDownEscape);
  };

  var onSetupDownEscape = function (evt) {
    if (evt.key === window.util.buttons.ESCAPE_KEY && evt.target !== inputName) {
      closeSetup();
    }
  };

  setupOpen.addEventListener('click', function () {
    openSetup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === window.util.buttons.ENTER_KEY) {
      openSetup();
    }
  });

  setupClose.addEventListener('click', function () {
    closeSetup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === window.util.buttons.ENTER_KEY) {
      closeSetup();
    }
  });
})();

