'use strict';

window.globalScope = {
  fireballSize: 40,
  wizardSpeed: 3,
  wizardWidth: 70,
  wizards: [],
  wizardData: {
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
  },
  getWizardHeight() {
    return window.globalScope.wizardWidth * 1.337;
  },
  getWizardX(width) {
    return width / 2;
  },
  getWizardY(height) {
    return (height / 3) * 2;
  },
  getFireballSpeed(left) {
    return left === true ? 5 : 2;
  },
  getRandomIndex(itemNum) {
    return Math.floor(Math.random() * itemNum);
  },
};
