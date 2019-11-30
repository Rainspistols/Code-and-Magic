'use strict';

var characterSettings = document.querySelector('.setup');
var characterLogoOutside = document.querySelector('.setup-open');
var btnCloseCharacterSettings = document.querySelector('.setup-close');
var characterSettingsUserName = document.querySelector('.setup-user-name');

// listeners
var openCharacterSettings = function() {
  characterSettings.classList.remove('hidden');
  document.addEventListener('keydown', onCharacterSettingsEsc);
};
var closeCharacterSettings = function() {
  characterSettings.classList.add('hidden');
  document.removeEventListener('keydown', onCharacterSettingsEsc);
};

var onCharacterSettingsEsc = function(evt) {
  if (evt.keyCode === 27) {
    closeCharacterSettings();
  }
};
var onCharacterSettingsUserName = function(evt) {
  evt.stopPropagation();
  if (evt.keyCode === 27) {
    characterSettingsUserName.blur();
  }
};

characterLogoOutside.addEventListener('click', openCharacterSettings);
characterLogoOutside.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 13) {
    openCharacterSettings();
  }
});
btnCloseCharacterSettings.addEventListener('click', closeCharacterSettings);
characterSettingsUserName.addEventListener(
  'keydown',
  onCharacterSettingsUserName
);

document.querySelector('.setup-similar').classList.remove('hidden');
var wizards = [];
var WIZARD_SURNAMES = [
  'Turino',
  'Magico',
  'Blizzardo',
  'Lighter',
  'Menge',
  'Ingardio',
  'Candlo',
  'Rodrigo',
];
var WIZARD_NAMES = [
  'Sam',
  'Ben',
  'James',
  'Frodo',
  'Diego',
  'Arturo',
  'Menge',
  'Jhoe',
];
var WIZARD_COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLOR = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848',
];

// get random number
function getRandomIndex(itemNum) {
  return Math.floor(Math.random() * itemNum);
}

// build wizzards
var buildWizards = function() {
  for (let i = 0; i < 4; i++) {
    var randomIndexNames = getRandomIndex(WIZARD_NAMES.length),
      randomIndexSurnames = getRandomIndex(WIZARD_SURNAMES.length),
      randomIndexCoat = getRandomIndex(WIZARD_COAT_COLOR.length),
      randomIndexEyes = getRandomIndex(WIZARD_EYES_COLOR.length);
    let obj = {};
    obj['name'] =
      WIZARD_SURNAMES[randomIndexSurnames] +
      ' ' +
      WIZARD_NAMES[randomIndexNames];
    obj['coatColor'] = WIZARD_COAT_COLOR[randomIndexCoat];
    obj['eyesColor'] = WIZARD_EYES_COLOR[randomIndexEyes];
    wizards.push(obj);
  }
};
buildWizards();

var charactersList = document.querySelector('.setup-similar-list');
var charactersListTemplate = document
  .querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');
var wizardEyes = document.querySelector('.wizard-eyes');

for (var i = 0; i < 4; i++) {
  var wizardUnit = charactersListTemplate.cloneNode(true);

  wizardUnit.querySelector('.setup-similar-label').textContent =
    wizards[i].name;
  wizardUnit.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardUnit.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  charactersList.appendChild(wizardUnit);
}

// change mage items color
var wizardCoat = document.querySelectorAll('.wizard-coat');
var fireball = document.querySelector('.setup-fireball');
var fireballBlock = document.querySelector('.setup-fireball-wrap');
var fireballInput = fireballBlock.querySelector('input');
document.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('wizard-coat')) {
    evt.target.style.fill = getRandomItemColor(WIZARD_COAT_COLOR);
  } else if (evt.target.classList.contains('wizard-eyes')) {
    evt.target.style.fill = getRandomItemColor(WIZARD_EYES_COLOR);
  } else if (evt.target.classList.contains('setup-fireball')) {
    fireballBlock.style.background = getRandomItemColor(WIZARD_FIREBALL_COLOR);
    fireballInput.value = fireballBlock.style.background;
  }
  console.log(fireballInput);
});

var getRandomItemColor = function(itemName) {
  return itemName[getRandomIndex(itemName.length)];
};
