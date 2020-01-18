'use strict';

(function() {
  var charactersList = document.querySelector('.setup-similar-list');
  var charactersListTemplate = document
    .querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');

  function Wizard(data, i) {
    this.name = data.names[i] + ' ' + data.surnames[i];
    this.coatColor = data.coatColor[i];
    this.eyesColor = data.eyesColor[i];
  }

  for (let i = 0; i < 4; i++) {
    let wizard = new Wizard(window.globalScope.wizardData, i);
    window.globalScope.wizards.push(wizard);
  }

  document.querySelector('.setup-similar').classList.remove('hidden');

  for (let i = 0; i < 4; i++) {
    var wizardUnit = charactersListTemplate.cloneNode(true);

    wizardUnit.querySelector('.setup-similar-label').textContent =
      window.globalScope.wizards[i].name;
    wizardUnit.querySelector('.wizard-coat').style.fill =
      window.globalScope.wizards[i].coatColor;
    wizardUnit.querySelector('.wizard-eyes').style.fill =
      window.globalScope.wizards[i].eyesColor;

    charactersList.appendChild(wizardUnit);
  }
})();
