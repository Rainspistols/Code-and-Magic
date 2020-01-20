'use strict';

(function() {
  window.wizards = [];
  window.buildWizards = function() {
    var charactersList = document.querySelector('.setup-similar-list');
    var charactersListTemplate = document
      .querySelector('#similar-wizard-template')
      .content.querySelector('.setup-similar-item');

    function Wizard(data) {
      this.name = data.name;
      this.coatColor = data.colorCoat;
      this.eyesColor = data.colorEyes;
    }

    for (let i = 0; i < 4; i++) {
      let wizard = new Wizard(window.backend.wizardsData[i]);
      window.wizards.push(wizard);
    }

    document.querySelector('.setup-similar').classList.remove('hidden');

    for (let i = 0; i < 4; i++) {
      var wizardUnit = charactersListTemplate.cloneNode(true);

      wizardUnit.querySelector('.setup-similar-label').textContent =
        window.wizards[i].name;
      wizardUnit.querySelector('.wizard-coat').style.fill =
        window.wizards[i].coatColor;
      wizardUnit.querySelector('.wizard-eyes').style.fill =
        window.wizards[i].eyesColor;

      charactersList.appendChild(wizardUnit);
    }
  };
})();
