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

  var pictureUserInSetup = setupWindow.querySelector('.upload');

  pictureUserInSetup.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var dragged = false;

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupWindow.style.left = (setupWindow.offsetLeft - shift.x) + 'px';
      setupWindow.style.top = (setupWindow.offsetTop - shift.y) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      pictureUserInSetup.removeEventListener('mousemove', onMouseMove);
      pictureUserInSetup.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          setupWindow.removeEventListener('click', onClickPreventDefault);
        };
        setupWindow.addEventListener('click', onClickPreventDefault);
      }
    };

    pictureUserInSetup.addEventListener('mousemove', onMouseMove);
    pictureUserInSetup.addEventListener('mouseup', onMouseUp);
  });
})();

