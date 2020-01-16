'use strict';

(function() {
  var characterMenu = document.querySelector('.setup');
  var characterLogoOutside = document.querySelector('.setup-open-icon');
  var btnCloseCharacterMenu = document.querySelector('.setup-close');
  var characterMenuUserName = document.querySelector('.setup-user-name');
  var ESC_KEYCODE = 27;
  console.log('10');

  // listeners
  characterLogoOutside.addEventListener('click', idk);
  // characterMenu.addEventListener('keydown', onCharacterSettingsEsc);

  function idk() {
    characterMenu.classList.remove('hidden');
  }

  // function closeCharacterSettings() {
  //   characterMenu.classList.add('hidden');
  //   document.removeEventListener('keydown', onCharacterSettingsEsc);
  // }

  // function onCharacterSettingsEsc(evt) {
  //   if (evt.keyCode === ESC_KEYCODE) {
  //     closeCharacterSettings();
  //   }
  // }

  // function onCharacterSettingsUserName(evt) {
  //   evt.stopPropagation();
  //   if (evt.keyCode === ESC_KEYCODE) {
  //     characterMenuUserName.blur();
  //   }
  // }

  // characterLogoOutside.addEventListener('click', onCharacterSettings);
  // characterLogoOutside.addEventListener('keydown', function(evt) {
  //   if (evt.keyCode === 13) {
  //     onCharacterSettings();
  //   }
  // });
  // btnCloseCharacterMenu.addEventListener('click', closeCharacterSettings);
  // characterMenuUserName.addEventListener(
  //   'keydown',
  //   onCharacterSettingsUserName
  // );
})();
