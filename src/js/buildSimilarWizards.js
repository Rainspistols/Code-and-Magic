'use strict';

window.similarWizards = {
  build() {
    document.querySelector('.setup-similar').classList.remove('hidden');
    var wizardsList = document.querySelector('.setup-similar-list');

    for (let i = 0; i < 4; i++) {
      var charactersListTemplate = document.querySelector(
        '#similar-wizard-template'
      );

      function createSimilarWizards() {
        var wizard = charactersListTemplate.content.cloneNode(true);
        wizard.querySelector('.setup-similar-label').textContent =
          window.backend.wizardsData[i].name;
        wizard.querySelector('.wizard-coat').style.fill =
          window.backend.wizardsData[i].colorCoat;
        wizard.querySelector('.wizard-eyes').style.fill =
          window.backend.wizardsData[i].colorEyes;

        wizardsList.appendChild(wizard);
      }
      createSimilarWizards();
    }
  },
  changeColor() {
    var wizardsList = document.querySelector('.setup-similar-list');
    for (let i = 0; i < 4; i++) {
      var wizard = wizardsList.children[i];

      wizard.querySelector('.setup-similar-label').textContent =
        window.backend.wizardsData[i].name;
      wizard.querySelector('.wizard-coat').style.fill =
        window.backend.wizardsData[i].colorCoat;
      wizard.querySelector('.wizard-eyes').style.fill =
        window.backend.wizardsData[i].colorEyes;
    }
  },
};
