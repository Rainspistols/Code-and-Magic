'use strict';

(function() {
  var characterMenu = document.querySelector('.setup'),
    characterLogoOutside = document.querySelector('.setup-open'),
    btnCloseCharacterMenu = document.querySelector('.setup-close'),
    characterMenuUserName = document.querySelector('.setup-user-name');
  var ESC_KEYCODE = 27,
    ENTER_KEYCODE = 13;

  function toggleHideCharMenu() {
    characterMenu.classList.toggle('hidden');
  }
  function isEsc(e) {
    return e.keyCode === ESC_KEYCODE;
  }
  function isEnter(e) {
    return e.keyCode === ENTER_KEYCODE;
  }
  function onEscCharMenu(e) {
    if (isEsc(e)) {
      if (!characterMenu.classList.contains('hidden')) {
        characterMenu.classList.add('hidden');
      }
    }
  }
  function onUserName(e) {
    e.stopPropagation();
    if (isEsc(e) || (isEnter(e) && characterMenuUserName.validity.valid)) {
      e.preventDefault();
      characterMenuUserName.blur();
    }
  }

  characterLogoOutside.addEventListener('click', toggleHideCharMenu);
  btnCloseCharacterMenu.addEventListener('click', toggleHideCharMenu);
  document.addEventListener('keydown', onEscCharMenu);
  characterMenuUserName.addEventListener('keydown', onUserName);
})();
