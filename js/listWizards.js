'use strict';

(function () {
  var NUMBER_WIZARD = 4;

  var errorBlock = document.querySelector('.error');
  var errorText = errorBlock.querySelector('.error__text');

  var similarList = document.querySelector('.setup-similar-list');

  var renderWizards = function (wizardsInfo) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < NUMBER_WIZARD; i++) {
      var wizardElement = window.wizard.renderWizard(wizardsInfo[i]);
      fragment.appendChild(wizardElement);
    }

    return fragment;
  };

  var onLoad = function (data) {
    errorBlock.classList.add('hidden');

    var fragmentWizards = renderWizards(data);
    similarList.appendChild(fragmentWizards);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  var onError = function (textError) {
    errorText.textContent = 'Во время згрузки списка волшебников произошла ошибка: ' + textError;
    errorBlock.classList.remove('hidden');
  };

  window.backend.load(onLoad, onError);
})();

