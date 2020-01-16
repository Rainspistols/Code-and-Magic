'use strict';
(function() {
  var WizardData = {
    surnames: [
      'Turino',
      'Magico',
      'Blizzardo',
      'Lighter',
      'Menge',
      'Ingardio',
      'Candlo',
      'Rodrigo',
    ],
    names: ['Sam', 'Ben', 'James', 'Frodo', 'Diego', 'Arturo', 'Menge', 'Jhoe'],
    coatColor: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)',
    ],
    eyesColor: ['black', 'red', 'blue', 'yellow', 'green'],
  };

  function Wizard(data, i) {
    this.name = data.names[i] + ' ' + data.surnames[i];
    this.coatColor = data.coatColor[i];
    this.eyesColor = data.eyesColor[i];
  }

  for (let i = 0; i < 4; i++) {
    let wizard = new Wizard(WizardData, i);
    window.wizards.push(wizard);
  }
})();
