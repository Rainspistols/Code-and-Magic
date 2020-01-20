'use strict';

(function() {
  // function onLoad

  window.backend = {

    onLoadGet(data, cb) {
      window.backend.wizardsData = data;
      console.log('success 200!');
      cb();
    },
    onError(message) {
      console.error(message);
    },
    load(onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.timeout = 2000;
      xhr.open('GET', 'https://js.dump.academy/code-and-magick/data');
      xhr.send();
      var error;
      xhr.onload = () => {
        switch (xhr.status) {
          case 200:
            onLoad(xhr.response, window.buildWizards);
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
            error = 'Response Status: ' + xhr.status + ' ' + xhr.statusText;
        }
        if (error) {
          onError(error);
        }
      };
    },
    save(data, onLoadPost, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.timeout = 2000;
      xhr.open('POST', 'https://js.dump.academy/code-and-agick');
      console.log(data);
      xhr.send(data);
      var error;
      xhr.onload = () => {
        switch (xhr.status) {
          case 200:
            onLoadPost();
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
            error = 'Response Status: ' + xhr.status + ' ' + xhr.statusText;
        }
        if (error) {
          onError(error);
        }
      };
    },
  };

  window.backend.load(window.backend.onLoadGet, window.backend.onError);
})();
