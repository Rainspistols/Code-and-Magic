'use strict';

(function() {
  function onLoad_GET_Request(data) {
    window.backend.wizardsData = data;
    console.log('success 200!', window.backend.wizardsData);
    window.backend.addSimilarityRating();
    window.backend.wizardsData.sort(
      (a, b) => b.similarityRating - a.similarityRating
    );
    window.similarWizards.build();
  }
  function createAndCheckRequest(onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = 2000;
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
    return xhr;
  }

  window.backend = {
    onError(message) {
      console.error(message);
    },
    load(onLoad, onError) {
      var xhr = createAndCheckRequest(onLoad, onError);
      xhr.open('GET', 'https://js.dump.academy/code-and-magick/data');
      xhr.send();
    },
    save(data, onLoad, onError) {
      var xhr = createAndCheckRequest(data, onLoad, onError);
      xhr.open('POST', 'https://js.dump.academy/code-and-agick');
      xhr.send(data);
    },
    addSimilarityRating() {
      var MainWizardItemColor = {
        coat: document
          .querySelector('.setup-wizard')
          .querySelector('.wizard-coat').style.fill,
        eyes: document
          .querySelector('.setup-wizard')
          .querySelector('.wizard-eyes').style.fill,
      };

      window.backend.wizardsData.forEach((item) => {
        item.similarityRating = 0;
        if (item.colorEyes == MainWizardItemColor.eyes) {
          item.similarityRating += 1;
        }
        if (item.colorCoat == MainWizardItemColor.coat) {
          item.similarityRating += 2;
        }
      });
    },
  };

  window.backend.load(onLoad_GET_Request, window.backend.onError);
})();
