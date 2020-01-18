'use strict';

(function() {
  var fireballBlock = document.querySelector('.setup-fireball-wrap'),
    fireballInput = fireballBlock.querySelector('input'),
    fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  function getRandomItem(itemName) {
    return itemName[window.globalScope.getRandomIndex(itemName.length)];
  }

  document.addEventListener('click', function(evt) {
    var target = evt.target;

    if (target.classList.contains('wizard-coat')) {
      target.style.fill = getRandomItem(
        window.globalScope.wizardData.coatColor
      );
    } else if (target.classList.contains('wizard-eyes')) {
      target.style.fill = getRandomItem(
        window.globalScope.wizardData.eyesColor
      );
    } else if (target.classList.contains('setup-fireball')) {
      fireballBlock.style.background = getRandomItem(fireballColors);
      fireballInput.value = fireballBlock.style.background;
    }
  });
})();
