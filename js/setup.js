'use strict';

var wizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var similarList = document.querySelector('.setup-similar-list');

var NUMBER_WIZARD = 4;

var Buttons = {ESCAPE_KEY: 'Escape', ENTER_KEY: 'Enter'};

var FIRST_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var LAST_NAMES = [
  'да Марья',
  'Верон',
  'Мирабеллла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var getRandomNumber = function (maxNumber) {
  return Math.ceil(Math.random() * maxNumber);
};

var getRandomElementFromArray = function (elements) {
  return elements[getRandomNumber(elements.length - 1)];
};

var renderWizard = function (wizardInfo) {
  var wizardElement = wizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizardInfo.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardInfo.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardInfo.eyesColor;

  return wizardElement;
};

var renderWizards = function (wizardsInfo) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizardsInfo.length; i++) {
    var wizardElement = renderWizard(wizardsInfo[i]);
    fragment.appendChild(wizardElement);
  }

  return fragment;
};

var generateWizards = function () {
  var listWizards = [];

  for (var i = 0; i < NUMBER_WIZARD; i++) {
    listWizards.push({
      name: getRandomElementFromArray(FIRST_NAMES) + ' ' + getRandomElementFromArray(LAST_NAMES),
      coatColor: getRandomElementFromArray(COAT_COLORS),
      eyesColor: getRandomElementFromArray(EYES_COLORS)
    });
  }

  return listWizards;
};

var wizards = generateWizards();

similarList.appendChild(renderWizards(wizards));

document.querySelector('.setup-similar').classList.remove('hidden');

// Учебный проект: одеть Надежду

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
  if (evt.key === Buttons.ESCAPE_KEY && evt.target !== inputName) {
    closeSetup();
  }
};

setupOpen.addEventListener('click', function () {
  openSetup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === Buttons.ENTER_KEY) {
    openSetup();
  }
});

setupClose.addEventListener('click', function () {
  closeSetup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === Buttons.ENTER_KEY) {
    closeSetup();
  }
});

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardCoatInput = document.querySelector('input[name="coat-color"]');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardEyesInput = document.querySelector('input[name="eyes-color"]');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

var changeColorElementWizard = function (colors, element, inputElement) {
  var color = getRandomElementFromArray(colors);
  element.style.fill = color;
  inputElement.value = color;
};

var changeBackgroundFireballWizard = function (backgrounds) {
  var fireball = document.querySelector('.setup-fireball-wrap');
  var color = getRandomElementFromArray(backgrounds);

  fireball.style.backgroundColor = color;
  fireball.querySelector('input[name="fireball-color"]').value = color;
};

wizardCoat.addEventListener('click', function () {
  changeColorElementWizard(COAT_COLORS, wizardCoat, wizardCoatInput);
});

wizardEyes.addEventListener('click', function () {
  changeColorElementWizard(EYES_COLORS, wizardEyes, wizardEyesInput);
});

wizardFireball.addEventListener('click', function () {
  changeBackgroundFireballWizard(FIREBALL_COLORS);
});
