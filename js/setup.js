'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var setupForm = setupWindow.querySelector('.setup-wizard-form');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setupWindow.querySelector('.setup-close');
  var setupSend = setupWindow.querySelector('.setup-submit');
  var inputName = document.querySelector('.setup-user-name');
  var pictureUserInSetup = setupWindow.querySelector('.upload');
  var errorBlock = document.querySelector('.error');
  var errorText = document.querySelector('.error__text');
  var START_COORD_X = setupWindow.style.left;
  var START_COORD_Y = setupWindow.style.top;

  var openSetup = function () {
    setupWindow.classList.remove('hidden');
    document.addEventListener('keydown', onSetupDownEscape);
  };

  var closeSetup = function () {
    setupWindow.classList.add('hidden');
    setupWindow.style.left = START_COORD_X;
    setupWindow.style.top = START_COORD_Y;
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

  var onLoadSend = function () {
    setupWindow.classList.add('hidden');
    setupSend.textContent = 'Сохранить';
  };

  var onErrorSend = function (textError) {
    errorText.textContent = textError;
    errorBlock.classList.remove('hidden');
  };

  setupForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    setupSend.textContent = 'Отправка данных';
    window.backend.save(new FormData(setupForm), onLoadSend, onErrorSend);
  });

})();

