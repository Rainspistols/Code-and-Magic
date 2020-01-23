'use strict';

(function() {
  var characterMenu = document.querySelector('.setup'),
    characterLogoOutside = document.querySelector('.setup-open'),
    btnCloseCharacterMenu = document.querySelector('.setup-close'),
    characterMenuUserName = document.querySelector('.setup-user-name');
  var KeyCode = {
    esc: 27,
    enter: 13,
  };
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
    return e.keyCode === KeyCode.esc;
  }
  function isEnter(e) {
    return e.keyCode === KeyCode.enter;
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

  function onFormSubmit() {
    function onError(error) {
      function createDivError() {
        var newDiv = document.createElement('div');
        newDiv.style.width = '300px';
        newDiv.style.height = '200px';
        newDiv.style.background = 'white';
        newDiv.style.position = 'absolute';
        newDiv.style.left = '50%';
        newDiv.style.top = '50%';
        newDiv.style.border = '30px solid #0746DD';
        newDiv.style.display = 'flex';
        newDiv.style.textAlign = 'center';
        newDiv.style.alignItems = 'center';
        newDiv.style.fontSize = '20px';
        newDiv.style.fontWeight = 'bold';
        newDiv.style.transform = 'translateY(-50%) translateX(-50%)';
        newDiv.innerText = error;
        characterMenu.appendChild(newDiv);
        return newDiv;
      }
      function onDivError() {
        var errorDiv = createDivError();
        errorDiv.addEventListener('click', (e) => {
          errorDiv.remove(1);
        });
      }
      onDivError();
    }

    var form = document.querySelector('.setup-wizard-form');
    form.addEventListener('submit', (e) => {
      window.backend.save(
        new FormData(form),
        function() {
          characterMenu.classList.add('hidden');
        },
        onError
      );
      e.preventDefault();
    });
  }
  onFormSubmit();

  function onMainWizard() {
    var wizard = document.querySelector('.setup-wizard');

    wizard.addEventListener('click', (e) => {
      function changeColorMainWizard() {
        var target = e.target;

        var randomWizardIndex = window.globalScope.getRandomIndex(
          window.backend.wizardsData.length
        );

        if (target.classList.contains('wizard-coat')) {
          target.style.fill =
            window.backend.wizardsData[randomWizardIndex].colorCoat;
        } else if (target.classList.contains('wizard-eyes')) {
          target.style.fill =
            window.backend.wizardsData[randomWizardIndex].colorEyes;
        }
      }
      changeColorMainWizard();

      window.backend.addSimilarityRating();
      window.backend.wizardsData.sort(
        (a, b) => b.similarityRating - a.similarityRating
      );

      if (window.lastTimeout) {
        clearTimeout(window.lastTimeout);
      }
      window.lastTimeout = setTimeout(window.similarWizards.changeColor, 300);
    });
  }
  function onMainFireball() {
    var Fireball = {
      wrap: document.querySelector('.setup-fireball-wrap'),
      input: document
        .querySelector('.setup-fireball-wrap')
        .querySelector('input'),
      getRandomColor() {
        var colors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
        return colors[window.globalScope.getRandomIndex(colors.length)];
      },
    };
    Fireball.wrap.addEventListener('click', (e) => {
      Fireball.wrap.style.background = Fireball.getRandomColor();
      Fireball.input.value = Fireball.wrap.style.background;
    });
  }
  onMainWizard();
  onMainFireball();
})();
