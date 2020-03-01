'use strict';

(function () {
  var NUMBER_WIZARD = 4;

  var wizards;

  var similarList = document.querySelector('.setup-similar-list');

  var renderWizards = function (wizardsInfo) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizardsInfo.length; i++) {
      var wizardElement = window.wizard.renderWizard(wizardsInfo[i]);
      fragment.appendChild(wizardElement);
    }

    return fragment;
  };

  var generateWizards = function () {
    var listWizards = [];

    for (var i = 0; i < NUMBER_WIZARD; i++) {
      listWizards.push({
        name: window.util.getRandomElementFromArray(window.characterWizard.FIRST_NAMES) + ' ' + window.util.getRandomElementFromArray(window.characterWizard.LAST_NAMES),
        coatColor: window.util.getRandomElementFromArray(window.characterWizard.COAT_COLORS),
        eyesColor: window.util.getRandomElementFromArray(window.characterWizard.EYES_COLORS)
      });
    }

    return listWizards;
  };

  wizards = generateWizards();

  similarList.appendChild(renderWizards(wizards));

  document.querySelector('.setup-similar').classList.remove('hidden');
})();

