'use strict';

var wizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var similarList = document.querySelector('.setup-similar-list');

var NUMBER_WIZARD = 4;

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
document.querySelector('.setup').classList.remove('hidden');
