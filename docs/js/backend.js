'use strict';

(function() {
  function onLoad(name, data, cb) {
    window.backend[name] = data;
    console.log('success 200!');
    cb();
  }

  function onError(message) {
    console.error(message);
  }

  function getNewFormData(form) {
    return new FormData(form);
  }
  function onLoadPost(e) {
    console.log(e.target);
    e.preventDefault();
  }

  var form = document.querySelector('.setup-wizard-form');
  form.addEventListener('submit', (e) => {
    window.backend.save(
      getNewFormData(form),
      'https://js.dump.academy/code-and-magick',
      onLoadPost,
      onError
    );
  });

  window.backend = {
    load(name, url, onLoadCb, onErrorCb) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.timeout = 2000;
      xhr.open('GET', url);
      xhr.send();
      var error;
      xhr.onload = () => {
        switch (xhr.status) {
          case 200:
            onLoadCb(name, xhr.response, window.buildWizards);
            break;
          case 400:
            error = 'Invalid request';
            break;
          case 401:
            error = 'User is not authorized';
            break;
          case 404:
            error = 'Nothing found';
            break;
          default:
            error = 'Response Status: ' + name.status + ' ' + name.statusText;
        }
        if (error) {
          onErrorCb(error);
        }
      };
    },
    save(data, url, onLoadCb, onErrorCb) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.timeout = 2000;
      xhr.open('POST', url);
      xhr.send(data);
      var error;
      xhr.onload = () => {
        switch (xhr.status) {
          case 200:
            onLoadCb(e);
            break;
          case 400:
            error = 'Invalid request';
            break;
          case 401:
            error = 'User is not authorized';
            break;
          case 404:
            error = 'Nothing found';
            break;
          default:
            error = 'Response Status: ' + name.status + ' ' + name.statusText;
        }
        if (error) {
          onErrorCb(error);
        }
      };
    },
  };

  window.backend.load(
    'wizardsData',
    'https://js.dump.academy/code-and-magick/data',
    onLoad,
    onError
  );
})();
