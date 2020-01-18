'use strict';

(function() {
  var characterMenu = document.querySelector('.setup'),
    characterLogoOutside = document.querySelector('.setup-open'),
    btnCloseCharacterMenu = document.querySelector('.setup-close'),
    characterMenuUserName = document.querySelector('.setup-user-name');
  var ESC_KEYCODE = 27,
    ENTER_KEYCODE = 13;
  var draggElem = document.querySelector('.setup-dragg-elem');
  var characterMenuX = '50%',
    characterMenuY = '80px';


  function toggleHideCharMenu() {
    characterMenu.classList.toggle('hidden');
    if (!characterMenu.classList.contains('hidden')) {
      characterMenu.style.top = characterMenuY;
      characterMenu.style.left = characterMenuX;
    }
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
  draggElem.addEventListener('mousedown', (e) => {
    e.preventDefault();
    var startCoords = {
      x: e.clientX,
      y: e.clientY,
    };
    function onMouseMove(e) {
      e.preventDefault();
      var shift = {
        x: startCoords.x - e.clientX,
        y: startCoords.y - e.clientY,
      };
      startCoords = {
        x: e.clientX,
        y: e.clientY,
      };
      characterMenu.style.top = characterMenu.offsetTop - shift.y + 'px';
      characterMenu.style.left = characterMenu.offsetLeft - shift.x + 'px';
      draggElem.style.cursor = 'grabbing';
    }
    function onMouseUp(e) {
      e.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      draggElem.style.cursor = 'grab';
    }
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
