'use strict';

document.querySelector('.setup').classList.remove('hidden');
var wizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var similarList = document.querySelector('.setup-similar-list');

var firstNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var lastNames = [
  'да Марья',
  'Верон',
  'Мирабеллла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var generateName = function (firstNamesWizards, lastNamesWizards) {
  return firstNamesWizards[Math.ceil(Math.random() * (firstNamesWizards.length - 1))]
    + ' ' + lastNamesWizards[Math.ceil(Math.random() * (lastNamesWizards.length - 1))];
};

var generateCoat = function (coatColorsWizards) {
  return coatColorsWizards[Math.ceil(Math.random() * coatColorsWizards.length)];
};

var generateEyes = function (eyesColorsWizards) {
  return eyesColorsWizards[Math.ceil(Math.random() * eyesColorsWizards.length)];
};

var generateWizard = function (wizardInfo) {
  var wizardElement = wizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizardInfo.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardInfo.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardInfo.eyesColor;

  return wizardElement;
};

var wizardFragment = function (wizardsInfo) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizardsData.length; i++) {
    var wizardElement = generateWizard(wizardsInfo[i]);
    fragment.appendChild(wizardElement);
  }

  return fragment;
};

var wizardsData = [
  {
    name: generateName(firstNames, lastNames),
    coatColor: generateCoat(coatColors),
    eyesColor: generateEyes(eyesColors)
  },
  {
    name: generateName(firstNames, lastNames),
    coatColor: generateCoat(coatColors),
    eyesColor: generateEyes(eyesColors)
  },
  {
    name: generateName(firstNames, lastNames),
    coatColor: generateCoat(coatColors),
    eyesColor: generateEyes(eyesColors)
  },
  {
    name: generateName(firstNames, lastNames),
    coatColor: generateCoat(coatColors),
    eyesColor: generateEyes(eyesColors)
  }
];

similarList.appendChild(wizardFragment(wizardsData));

document.querySelector('.setup-similar').classList.remove('hidden');
