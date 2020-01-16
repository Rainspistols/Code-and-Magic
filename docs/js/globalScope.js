'use strict';

window.fireballSize = 40;
window.wizardSpeed = 3;
window.wizardWidth = 70;
window.wizards = [];
window.wizardData = {
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

function getWizardHeight() {
  return wizardWidth * 1.337;
}
function getWizardX(width) {
  return width / 2;
}
function getWizardY(height) {
  return (height / 3) * 2;
}
function getFireballSpeed(left) {
  return left === true ? 5 : 2;
}
// get random number
function getRandomIndex(itemNum) {
  return Math.floor(Math.random() * itemNum);
}
