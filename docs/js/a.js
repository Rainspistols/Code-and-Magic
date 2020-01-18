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

// build wizzards
var buildWizards = function() {
  for (let i = 0; i < 4; i++) {
    var randomIndexNames = window.globalScope.getRandomIndex(
        WIZARD_NAMES.length
      ),
      randomIndexSurnames = window.globalScope.getRandomIndex(
        WIZARD_SURNAMES.length
      ),
      randomIndexCoat = window.globalScope.getRandomIndex(
        WIZARD_COAT_COLOR.length
      ),
      randomIndexEyes = window.globalScope.getRandomIndex(
        WIZARD_EYES_COLOR.length
      );
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
