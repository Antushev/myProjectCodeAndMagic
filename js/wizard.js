'use strict';

(function () {
  var wizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardCoatInput = document.querySelector('input[name="coat-color"]');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardEyesInput = document.querySelector('input[name="eyes-color"]');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  var renderWizard = function (wizardInfo) {
    var wizardElement = wizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizardInfo.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizardInfo.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizardInfo.eyesColor;

    return wizardElement;
  };

  var changeColorElementWizard = function (colors, element, inputElement) {
    var color = window.util.getRandomElementFromArray(colors);
    element.style.fill = color;
    inputElement.value = color;
  };

  var changeBackgroundFireballWizard = function (backgrounds) {
    var fireball = document.querySelector('.setup-fireball-wrap');
    var color = window.util.getRandomElementFromArray(backgrounds);

    fireball.style.backgroundColor = color;
    fireball.querySelector('input[name="fireball-color"]').value = color;
  };

  wizardCoat.addEventListener('click', function () {
    changeColorElementWizard(window.characterWizard.COAT_COLORS, wizardCoat, wizardCoatInput);
  });

  wizardEyes.addEventListener('click', function () {
    changeColorElementWizard(window.characterWizard.EYES_COLORS, wizardEyes, wizardEyesInput);
  });

  wizardFireball.addEventListener('click', function () {
    changeBackgroundFireballWizard(window.characterWizard.FIREBALL_COLORS);
  });

  window.wizard = {
    renderWizard: renderWizard
  };
})();
