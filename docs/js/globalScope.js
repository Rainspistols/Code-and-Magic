'use strict';

window.globalScope = {
  fireballSize: 40,
  wizardSpeed: 3,
  wizardWidth: 70,
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
